/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SQLiteTable } from "./SQLiteTable";
import { SQLiteColumn } from "./SQLiteColumn";
import { Observable } from "rxjs";
import { LimitRestriction } from "./restrictions/LimitRestriction";
import { OffsetRestriction } from "./restrictions/OffsetRestriction";
import { SQLiteResponse } from "./SQLiteResponse";
import { SQLCommand } from "./SQLCommand";
import { OrderByRestriction } from "./restrictions/OrderByRestriction";
import { APPError } from "../../errorHandler/APPError";
export class SQLiteDao {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.transactionArr = [];
        this.config = config;
    }
    /**
     * @return {?}
     */
    openDataBase() {
        /** @type {?} */
        let dbObj = this.config;
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            ((/** @type {?} */ (window))).sqlitePlugin.openDatabase({
                name: dbObj.getName() + '.db',
                location: 'default',
                key: dbObj.getKey(),
                androidDatabaseImplementation: 'system'
            }, (/**
             * @param {?} db
             * @return {?}
             */
            db => {
                this.connection = db;
                res(db);
            }), (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let error = new Error("Sqlite DB open error.");
                rej(error);
            }));
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    queryByTable(tableObject) {
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => `AND ${x.sqlString()}`)).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValues())).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        (prev, x) => [...prev, ...x]), []);
        /** @type {?} */
        var order_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x instanceof OrderByRestriction)).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.sqlString())).join('');
        /** @type {?} */
        var limit_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x instanceof LimitRestriction)).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.sqlString())).join('');
        /** @type {?} */
        var offset_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x instanceof OffsetRestriction)).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.sqlString())).join('');
        /** @type {?} */
        var sql_count_command = `SELECT count(*) FROM ${tableObject.getTableName()} WHERE 1=1 ${conditon_str}`;
        /** @type {?} */
        var sql_command = `SELECT * FROM ${tableObject.getTableName()} WHERE 1=1 ${conditon_str}${order_str}${limit_str}${offset_str}`;
        /** @type {?} */
        var sql_obj = new SQLCommand(sql_command, conditon_val);
        /** @type {?} */
        var sqlcount_obj = new SQLCommand(sql_count_command, conditon_val);
        console.group("run select sql command");
        console.log(sql_command);
        console.log('params', conditon_val);
        console.groupEnd();
        return this.runQuerySqlcommand(sql_obj, sqlcount_obj);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    insertByTable(tableObject) {
        /** @type {?} */
        let sql_obj = this.transformInsert(tableObject);
        console.group("run insert sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.runSqlCommand(observer, sql_obj);
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    updateByTable(tableObject) {
        /** @type {?} */
        let sql_obj = this.transformUpdate(tableObject);
        console.group("run update sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.runSqlCommand(observer, sql_obj);
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    deleteByTable(tableObject) {
        /** @type {?} */
        let sql_obj = this.transformDelete(tableObject);
        console.group("run delete sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.runSqlCommand(observer, sql_obj);
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionInsert(tableObject) {
        this.addTransactionCommand(this.transformInsert(tableObject));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionUpdate(tableObject) {
        this.addTransactionCommand(this.transformUpdate(tableObject));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionDelete(tableObject) {
        this.addTransactionCommand(this.transformDelete(tableObject));
    }
    /**
     * @param {?} command
     * @return {?}
     */
    transactionSqlCommand(command) {
        this.addTransactionCommand(command);
    }
    /**
     * @param {?} sql_command
     * @return {?}
     */
    excuteSqlCommand(sql_command) {
        console.log('excuteSqlCommand:', sql_command);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            tr => {
                for (let command of sql_command) {
                    tr.executeSql(command.getSql(), command.getParams(), (/**
                     * @return {?}
                     */
                    () => { }), (/**
                     * @param {?} _
                     * @param {?} error
                     * @return {?}
                     */
                    (_, error) => {
                        console.log('execute sql error:', error);
                    }));
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }), (/**
             * @return {?}
             */
            () => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getSchema() {
        /** @type {?} */
        var schema = new Map();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            tr => {
                tr.executeSql('SELECT name,sql FROM sqlite_master WHERE type="table" OR type="view"', [], (/**
                 * @param {?} tx
                 * @param {?} res
                 * @return {?}
                 */
                (tx, res) => {
                    //拿到TABLE名稱，query table schema
                    for (var len = 0; len < res.rows.length; len++) {
                        /** @type {?} */
                        var table_name = res.rows.item(len).name;
                        /** @type {?} */
                        var table_sql = res.rows.item(len).sql;
                        this.getColumns(tx, schema, table_name, table_sql);
                    }
                }), (/**
                 * @param {?} tx
                 * @param {?} error
                 * @return {?}
                 */
                (tx, error) => {
                    console.log('select table name error:', error.message);
                }));
            }), (/**
             * @param {?} _
             * @param {?} error
             * @return {?}
             */
            (_, error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }), (/**
             * @return {?}
             */
            () => {
                observer.next(schema);
                observer.complete();
            }));
        }));
    }
    /**
     * @return {?}
     */
    runTransaction() {
        return Observable.create(((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let batchArr = this.transactionArr.map((/**
             * @param {?} cmd
             * @return {?}
             */
            (cmd) => [cmd.getSql(), cmd.getParams()]));
            console.group('run transaction SQL:');
            console.log('command:', batchArr);
            console.groupEnd();
            this.connection.sqlBatch(batchArr, (/**
             * @return {?}
             */
            () => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00018", error.message);
            }));
        })));
    }
    /**
     * @return {?}
     */
    clearTransaction() {
        this.transactionArr = [];
    }
    /**
     * @protected
     * @param {?} tx
     * @param {?} schema
     * @param {?} table_name
     * @param {?} table_sql
     * @return {?}
     */
    getColumns(tx, schema, table_name, table_sql) {
        /** @type {?} */
        var tmp_colArray = [];
        console.log("getColumns:", table_name, table_sql);
        tx.executeSql('PRAGMA table_info(' + table_name + ')', [], (/**
         * @param {?} tx
         * @param {?} info_res
         * @return {?}
         */
        (tx, info_res) => {
            //拿到table的每個欄位
            for (var i = 0; i < info_res.rows.length; i++) {
                /** @type {?} */
                var isPK = !!info_res.rows.item(i).pk;
                /** @type {?} */
                var name = info_res.rows.item(i).name;
                /** @type {?} */
                var isAutoIncrement = isPK && (table_sql.toUpperCase().indexOf("AUTOINCREMENT") > -1);
                /** @type {?} */
                var type = info_res.rows.item(i).type;
                tmp_colArray.push(new SQLiteColumn(name, undefined, type, isPK, isAutoIncrement));
            }
            /** @type {?} */
            var tableObj = new SQLiteTable(table_name, tmp_colArray);
            schema.set(table_name, tableObj);
        }), (/**
         * @param {?} tx
         * @param {?} error
         * @return {?}
         */
        (tx, error) => {
            console.log('Get table column list error:', error.message);
            throw new APPError("F00019", error.message);
        }));
    }
    /**
     * @private
     * @param {?} observer
     * @param {?} sql_command
     * @return {?}
     */
    runSqlCommand(observer, sql_command) {
        this.connection.transaction((/**
         * @param {?} tr
         * @return {?}
         */
        tr => {
            tr.executeSql(sql_command.getSql(), sql_command.getParams(), (/**
             * @param {?} tx
             * @param {?} res
             * @return {?}
             */
            (tx, res) => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }), (/**
             * @param {?} _
             * @param {?} error
             * @return {?}
             */
            (_, error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }));
        }));
    }
    /**
     * @private
     * @param {?} sql_obj
     * @param {?} sql_count_obj
     * @return {?}
     */
    runQuerySqlcommand(sql_obj, sql_count_obj) {
        console.log("runQuerySqlcommand", sql_obj);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            tr => {
                tr.executeSql(sql_obj.getSql(), sql_obj.getParams(), (/**
                 * @param {?} tx
                 * @param {?} res
                 * @return {?}
                 */
                (tx, res) => {
                    tx.executeSql(sql_count_obj.getSql(), sql_count_obj.getParams(), (/**
                     * @param {?} tx
                     * @param {?} res_count
                     * @return {?}
                     */
                    (tx, res_count) => {
                        /** @type {?} */
                        var data = [];
                        for (var i = 0; i < res.rows.length; i++) {
                            data.push(res.rows.item(i));
                        }
                        console.log("run query sql finish!", data);
                        observer.next(new SQLiteResponse({
                            record_length: res_count.rows.item(0)['count(*)'],
                            status: true
                        }, data));
                        observer.complete();
                    }), (/**
                     * @param {?} _
                     * @param {?} error
                     * @return {?}
                     */
                    (_, error) => {
                        console.log(error.message);
                        observer.next(new SQLiteResponse({ status: false, message: error.message }, []));
                        observer.complete();
                        throw new APPError("F00017", error.message);
                    }));
                }), (/**
                 * @param {?} _
                 * @param {?} error
                 * @return {?}
                 */
                (_, error) => {
                    console.log(error.message);
                    observer.next(new SQLiteResponse({ status: false, message: error.message }, []));
                    observer.complete();
                    throw new APPError("F00017", error.message);
                }));
            }));
        }));
    }
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    transformInsert(tableObject) {
        /** @type {?} */
        var setted_cols = tableObject.getColumns().filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue() !== undefined));
        /** @type {?} */
        var setted_vals = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue()));
        /** @type {?} */
        var sql_command = `INSERT INTO ${tableObject.getTableName()} (${setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getName())).join(',')}) VALUES (${setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => '?')).join(',')})`;
        return new SQLCommand(sql_command, setted_vals);
    }
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    transformUpdate(tableObject) {
        /** @type {?} */
        var setted_cols = tableObject.getColumns().filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue() !== undefined));
        /** @type {?} */
        var setted_vals = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValue()));
        /** @type {?} */
        var set_str = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        x => ` ${x.getName()}=?`)).join(',');
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => `AND ${x.sqlString()}`)).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValues())).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        (prev, x) => [...prev, ...x]), []);
        /** @type {?} */
        var sql_command = `UPDATE ${tableObject.getTableName()} SET ${set_str} WHERE 1=1 ${conditon_str}`;
        return new SQLCommand(sql_command, [...setted_vals, ...conditon_val]);
    }
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    transformDelete(tableObject) {
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => `AND ${x.sqlString()}`)).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !(x instanceof LimitRestriction || x instanceof OffsetRestriction))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getValues())).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        (prev, x) => [...prev, ...x]), []);
        /** @type {?} */
        var sql_command = `DELETE FROM ${tableObject.getTableName()} WHERE 1=1 ${conditon_str}`;
        return new SQLCommand(sql_command, conditon_val);
    }
    /**
     * @private
     * @param {?} sql_command
     * @return {?}
     */
    addTransactionCommand(sql_command) {
        this.transactionArr.push(sql_command);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SQLiteDao.prototype.connection;
    /**
     * @type {?}
     * @protected
     */
    SQLiteDao.prototype.transactionArr;
    /**
     * @type {?}
     * @protected
     */
    SQLiteDao.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMaXRlRGFvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZURhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBTSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdkQsTUFBTTs7OztJQUlGLFlBQVksTUFBc0I7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLFlBQVk7O1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzVCLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO2dCQUNwQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUs7Z0JBQzdCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixHQUFHLEVBQUUsS0FBSyxDQUFD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LENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUUsRUFBRSxDQUFDOztZQUM1SyxXQUFXLEdBQUcsZUFBZSxXQUFXLENBQUMsWUFBWSxFQUFFLGNBQWMsWUFBWSxFQUFFO1FBQ3ZGLE9BQU8sSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLFdBQXVCO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FHSjs7Ozs7O0lBL1BHLCtCQUEwQjs7Ozs7SUFDMUIsbUNBQXFDOzs7OztJQUNyQywyQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGFvIH0gZnJvbSBcIi4vRGFvLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU1FMaXRlVGFibGUgfSBmcm9tIFwiLi9TUUxpdGVUYWJsZVwiO1xuaW1wb3J0IHsgU1FMaXRlQ29sdW1uIH0gZnJvbSBcIi4vU1FMaXRlQ29sdW1uXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBMaW1pdFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4vcmVzdHJpY3Rpb25zL0xpbWl0UmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IE9mZnNldFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4vcmVzdHJpY3Rpb25zL09mZnNldFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuL1NRTGl0ZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTUUxDb21tYW5kIH0gZnJvbSBcIi4vU1FMQ29tbWFuZFwiO1xuaW1wb3J0IHsgT3JkZXJCeVJlc3RyaWN0aW9uIH0gZnJvbSBcIi4vcmVzdHJpY3Rpb25zL09yZGVyQnlSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvclwiO1xuaW1wb3J0IHsgU1FMaXRlRGF0YWJhc2UgfSBmcm9tIFwiLi9TUUxpdGVEYXRhYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU1FMaXRlRGFvIGltcGxlbWVudHMgSURhbyB7XG4gICAgcHJvdGVjdGVkIGNvbm5lY3Rpb246IGFueTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNhY3Rpb25BcnI6IEFycmF5PGFueT47XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU1FMaXRlRGF0YWJhc2U7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBTUUxpdGVEYXRhYmFzZSkge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uQXJyID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuRGF0YUJhc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IGRiT2JqID0gdGhpcy5jb25maWc7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgICg8YW55PndpbmRvdykuc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogZGJPYmouZ2V0TmFtZSgpICsgJy5kYicsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBrZXk6IGRiT2JqLmdldEtleSgpLFxuICAgICAgICAgICAgICAgIGFuZHJvaWREYXRhYmFzZUltcGxlbWVudGF0aW9uOiAnc3lzdGVtJ1xuICAgICAgICAgICAgfSwgZGIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGRiO1xuICAgICAgICAgICAgICAgIHJlcyhkYik7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKFwiU3FsaXRlIERCIG9wZW4gZXJyb3IuXCIpO1xuICAgICAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcXVlcnlCeVRhYmxlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSk6IE9ic2VydmFibGU8U1FMaXRlUmVzcG9uc2U+IHtcbiAgICAgICAgdmFyIHJlc3RyaWN0aW9ucyA9IHRhYmxlT2JqZWN0LmdldFJlc3RyaWN0aW9ucygpO1xuICAgICAgICB2YXIgY29uZGl0b25fc3RyID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+ICEoeCBpbnN0YW5jZW9mIExpbWl0UmVzdHJpY3Rpb24gfHwgeCBpbnN0YW5jZW9mIE9mZnNldFJlc3RyaWN0aW9uIHx8IHggaW5zdGFuY2VvZiBPcmRlckJ5UmVzdHJpY3Rpb24pKS5tYXAoeCA9PiBgQU5EICR7eC5zcWxTdHJpbmcoKX1gKS5qb2luKCcnKTtcbiAgICAgICAgdmFyIGNvbmRpdG9uX3ZhbCA9IHJlc3RyaWN0aW9ucy5maWx0ZXIoeCA9PiAhKHggaW5zdGFuY2VvZiBMaW1pdFJlc3RyaWN0aW9uIHx8IHggaW5zdGFuY2VvZiBPZmZzZXRSZXN0cmljdGlvbiB8fCB4IGluc3RhbmNlb2YgT3JkZXJCeVJlc3RyaWN0aW9uKSkubWFwKHggPT4geC5nZXRWYWx1ZXMoKSkucmVkdWNlKChwcmV2LCB4KSA9PiBbLi4ucHJldiwgLi4ueF0sIFtdKTtcbiAgICAgICAgdmFyIG9yZGVyX3N0ciA9IHJlc3RyaWN0aW9ucy5maWx0ZXIoeCA9PiB4IGluc3RhbmNlb2YgT3JkZXJCeVJlc3RyaWN0aW9uKS5tYXAoeCA9PiB4LnNxbFN0cmluZygpKS5qb2luKCcnKTtcbiAgICAgICAgdmFyIGxpbWl0X3N0ciA9IHJlc3RyaWN0aW9ucy5maWx0ZXIoeCA9PiB4IGluc3RhbmNlb2YgTGltaXRSZXN0cmljdGlvbikubWFwKHggPT4geC5zcWxTdHJpbmcoKSkuam9pbignJyk7XG4gICAgICAgIHZhciBvZmZzZXRfc3RyID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBPZmZzZXRSZXN0cmljdGlvbikubWFwKHggPT4geC5zcWxTdHJpbmcoKSkuam9pbignJyk7XG4gICAgICAgIHZhciBzcWxfY291bnRfY29tbWFuZCA9IGBTRUxFQ1QgY291bnQoKikgRlJPTSAke3RhYmxlT2JqZWN0LmdldFRhYmxlTmFtZSgpfSBXSEVSRSAxPTEgJHtjb25kaXRvbl9zdHJ9YDtcbiAgICAgICAgdmFyIHNxbF9jb21tYW5kID0gYFNFTEVDVCAqIEZST00gJHt0YWJsZU9iamVjdC5nZXRUYWJsZU5hbWUoKX0gV0hFUkUgMT0xICR7Y29uZGl0b25fc3RyfSR7b3JkZXJfc3RyfSR7bGltaXRfc3RyfSR7b2Zmc2V0X3N0cn1gO1xuICAgICAgICB2YXIgc3FsX29iaiA9IG5ldyBTUUxDb21tYW5kKHNxbF9jb21tYW5kLCBjb25kaXRvbl92YWwpO1xuICAgICAgICB2YXIgc3FsY291bnRfb2JqID0gbmV3IFNRTENvbW1hbmQoc3FsX2NvdW50X2NvbW1hbmQsIGNvbmRpdG9uX3ZhbCk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoXCJydW4gc2VsZWN0IHNxbCBjb21tYW5kXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzcWxfY29tbWFuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMnLCBjb25kaXRvbl92YWwpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1blF1ZXJ5U3FsY29tbWFuZChzcWxfb2JqLCBzcWxjb3VudF9vYmopO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnNlcnRCeVRhYmxlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSk6IE9ic2VydmFibGU8U1FMaXRlUmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IHNxbF9vYmogPSB0aGlzLnRyYW5zZm9ybUluc2VydCh0YWJsZU9iamVjdCk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoXCJydW4gaW5zZXJ0IHNxbCBjb21tYW5kXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzcWxfb2JqLmdldFNxbCgpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcycsIHNxbF9vYmouZ2V0UGFyYW1zKCkpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuU3FsQ29tbWFuZChvYnNlcnZlciwgc3FsX29iaik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJ5VGFibGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKTogT2JzZXJ2YWJsZTxTUUxpdGVSZXNwb25zZT4ge1xuICAgICAgICBsZXQgc3FsX29iaiA9IHRoaXMudHJhbnNmb3JtVXBkYXRlKHRhYmxlT2JqZWN0KTtcbiAgICAgICAgY29uc29sZS5ncm91cChcInJ1biB1cGRhdGUgc3FsIGNvbW1hbmRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHNxbF9vYmouZ2V0U3FsKCkpO1xuICAgICAgICBjb25zb2xlLmxvZygncGFyYW1zJywgc3FsX29iai5nZXRQYXJhbXMoKSk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5ydW5TcWxDb21tYW5kKG9ic2VydmVyLCBzcWxfb2JqKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlQnlUYWJsZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpOiBPYnNlcnZhYmxlPFNRTGl0ZVJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBzcWxfb2JqID0gdGhpcy50cmFuc2Zvcm1EZWxldGUodGFibGVPYmplY3QpO1xuICAgICAgICBjb25zb2xlLmdyb3VwKFwicnVuIGRlbGV0ZSBzcWwgY29tbWFuZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coc3FsX29iai5nZXRTcWwoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMnLCBzcWxfb2JqLmdldFBhcmFtcygpKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1blNxbENvbW1hbmQob2JzZXJ2ZXIsIHNxbF9vYmopO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2FjdGlvbkluc2VydCh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpIHtcbiAgICAgICAgdGhpcy5hZGRUcmFuc2FjdGlvbkNvbW1hbmQodGhpcy50cmFuc2Zvcm1JbnNlcnQodGFibGVPYmplY3QpKTtcbiAgICB9XG4gICAgcHVibGljIHRyYW5zYWN0aW9uVXBkYXRlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICB0aGlzLmFkZFRyYW5zYWN0aW9uQ29tbWFuZCh0aGlzLnRyYW5zZm9ybVVwZGF0ZSh0YWJsZU9iamVjdCkpO1xuICAgIH1cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb25EZWxldGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIHRoaXMuYWRkVHJhbnNhY3Rpb25Db21tYW5kKHRoaXMudHJhbnNmb3JtRGVsZXRlKHRhYmxlT2JqZWN0KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zYWN0aW9uU3FsQ29tbWFuZChjb21tYW5kOiBTUUxDb21tYW5kKSB7XG4gICAgICAgIHRoaXMuYWRkVHJhbnNhY3Rpb25Db21tYW5kKGNvbW1hbmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBleGN1dGVTcWxDb21tYW5kKHNxbF9jb21tYW5kOiBBcnJheTxTUUxDb21tYW5kPikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXhjdXRlU3FsQ29tbWFuZDonLCBzcWxfY29tbWFuZCk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi50cmFuc2FjdGlvbih0ciA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29tbWFuZCBvZiBzcWxfY29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICB0ci5leGVjdXRlU3FsKGNvbW1hbmQuZ2V0U3FsKCksIGNvbW1hbmQuZ2V0UGFyYW1zKCksICgpID0+IHsgfSwgKF8sIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlY3V0ZSBzcWwgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogZmFsc2UsIG1zZzogZXJyb3IubWVzc2FnZSB9LCBbXSkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwMDE3XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTY2hlbWEoKSB7XG4gICAgICAgIHZhciBzY2hlbWEgPSBuZXcgTWFwKCk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi50cmFuc2FjdGlvbih0ciA9PiB7XG4gICAgICAgICAgICAgICAgdHIuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUsc3FsIEZST00gc3FsaXRlX21hc3RlciBXSEVSRSB0eXBlPVwidGFibGVcIiBPUiB0eXBlPVwidmlld1wiJywgW10sICh0eCwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8v5ou/5YiwVEFCTEXlkI3nqLHvvIxxdWVyeSB0YWJsZSBzY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbGVuID0gMDsgbGVuIDwgcmVzLnJvd3MubGVuZ3RoOyBsZW4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlX25hbWUgPSByZXMucm93cy5pdGVtKGxlbikubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZV9zcWwgPSByZXMucm93cy5pdGVtKGxlbikuc3FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb2x1bW5zKHR4LCBzY2hlbWEsIHRhYmxlX25hbWUsIHRhYmxlX3NxbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAodHgsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3QgdGFibGUgbmFtZSBlcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIChfLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiBmYWxzZSwgbXNnOiBlcnJvci5tZXNzYWdlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDAwMTdcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChzY2hlbWEpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHB1YmxpYyBydW5UcmFuc2FjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBsZXQgYmF0Y2hBcnIgPSB0aGlzLnRyYW5zYWN0aW9uQXJyLm1hcCgoY21kKSA9PiBbY21kLmdldFNxbCgpLCBjbWQuZ2V0UGFyYW1zKCldKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ3J1biB0cmFuc2FjdGlvbiBTUUw6Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29tbWFuZDonLCBiYXRjaEFycik7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3FsQmF0Y2goYmF0Y2hBcnIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogZmFsc2UsIG1zZzogZXJyb3IubWVzc2FnZSB9LCBbXSkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwMDE4XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclRyYW5zYWN0aW9uKCkge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uQXJyID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENvbHVtbnModHgsIHNjaGVtYSwgdGFibGVfbmFtZSwgdGFibGVfc3FsKSB7XG4gICAgICAgIHZhciB0bXBfY29sQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRDb2x1bW5zOlwiLCB0YWJsZV9uYW1lLCB0YWJsZV9zcWwpO1xuICAgICAgICB0eC5leGVjdXRlU3FsKCdQUkFHTUEgdGFibGVfaW5mbygnICsgdGFibGVfbmFtZSArICcpJywgW10sICh0eCwgaW5mb19yZXMpID0+IHtcbiAgICAgICAgICAgIC8v5ou/5YiwdGFibGXnmoTmr4/lgIvmrITkvY1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5mb19yZXMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpc1BLID0gISFpbmZvX3Jlcy5yb3dzLml0ZW0oaSkucGs7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBpbmZvX3Jlcy5yb3dzLml0ZW0oaSkubmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNBdXRvSW5jcmVtZW50ID0gaXNQSyAmJiAodGFibGVfc3FsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihcIkFVVE9JTkNSRU1FTlRcIikgPiAtMSk7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBpbmZvX3Jlcy5yb3dzLml0ZW0oaSkudHlwZTtcbiAgICAgICAgICAgICAgICB0bXBfY29sQXJyYXkucHVzaChuZXcgU1FMaXRlQ29sdW1uKG5hbWUsIHVuZGVmaW5lZCwgdHlwZSwgaXNQSywgaXNBdXRvSW5jcmVtZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGFibGVPYmogPSBuZXcgU1FMaXRlVGFibGUodGFibGVfbmFtZSwgdG1wX2NvbEFycmF5KTtcbiAgICAgICAgICAgIHNjaGVtYS5zZXQodGFibGVfbmFtZSwgdGFibGVPYmopO1xuICAgICAgICB9LCAodHgsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0IHRhYmxlIGNvbHVtbiBsaXN0IGVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwMDE5XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1blNxbENvbW1hbmQob2JzZXJ2ZXIsIHNxbF9jb21tYW5kKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi50cmFuc2FjdGlvbih0ciA9PiB7XG4gICAgICAgICAgICB0ci5leGVjdXRlU3FsKHNxbF9jb21tYW5kLmdldFNxbCgpLCBzcWxfY29tbWFuZC5nZXRQYXJhbXMoKSwgKHR4LCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9LCAoXywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogZmFsc2UsIG1zZzogZXJyb3IubWVzc2FnZSB9LCBbXSkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwMDE3XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuUXVlcnlTcWxjb21tYW5kKHNxbF9vYmosIHNxbF9jb3VudF9vYmopIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJydW5RdWVyeVNxbGNvbW1hbmRcIiwgc3FsX29iaik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi50cmFuc2FjdGlvbih0ciA9PiB7XG4gICAgICAgICAgICAgICAgdHIuZXhlY3V0ZVNxbChzcWxfb2JqLmdldFNxbCgpLCBzcWxfb2JqLmdldFBhcmFtcygpLCAodHgsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0eC5leGVjdXRlU3FsKHNxbF9jb3VudF9vYmouZ2V0U3FsKCksIHNxbF9jb3VudF9vYmouZ2V0UGFyYW1zKCksICh0eCwgcmVzX2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChyZXMucm93cy5pdGVtKGkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicnVuIHF1ZXJ5IHNxbCBmaW5pc2ghXCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZF9sZW5ndGg6IHJlc19jb3VudC5yb3dzLml0ZW0oMClbJ2NvdW50KCopJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAoXywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwMDE3XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIChfLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBBUFBFcnJvcihcIkYwMDAxN1wiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1JbnNlcnQodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIHZhciBzZXR0ZWRfY29scyA9IHRhYmxlT2JqZWN0LmdldENvbHVtbnMoKS5maWx0ZXIoeCA9PiB4LmdldFZhbHVlKCkgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIHZhciBzZXR0ZWRfdmFscyA9IHNldHRlZF9jb2xzLm1hcCh4ID0+IHguZ2V0VmFsdWUoKSk7XG4gICAgICAgIHZhciBzcWxfY29tbWFuZCA9IGBJTlNFUlQgSU5UTyAke3RhYmxlT2JqZWN0LmdldFRhYmxlTmFtZSgpfSAoJHtzZXR0ZWRfY29scy5tYXAoeCA9PiB4LmdldE5hbWUoKSkuam9pbignLCcpfSkgVkFMVUVTICgke3NldHRlZF9jb2xzLm1hcCh4ID0+ICc/Jykuam9pbignLCcpfSlgO1xuICAgICAgICByZXR1cm4gbmV3IFNRTENvbW1hbmQoc3FsX2NvbW1hbmQsIHNldHRlZF92YWxzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybVVwZGF0ZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpIHtcbiAgICAgICAgdmFyIHNldHRlZF9jb2xzID0gdGFibGVPYmplY3QuZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZ2V0VmFsdWUoKSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgdmFyIHNldHRlZF92YWxzID0gc2V0dGVkX2NvbHMubWFwKHggPT4geC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgdmFyIHNldF9zdHIgPSBzZXR0ZWRfY29scy5tYXAoeCA9PiBgICR7eC5nZXROYW1lKCl9PT9gKS5qb2luKCcsJyk7XG4gICAgICAgIHZhciByZXN0cmljdGlvbnMgPSB0YWJsZU9iamVjdC5nZXRSZXN0cmljdGlvbnMoKTtcbiAgICAgICAgdmFyIGNvbmRpdG9uX3N0ciA9IHJlc3RyaWN0aW9ucy5maWx0ZXIoeCA9PiAhKHggaW5zdGFuY2VvZiBMaW1pdFJlc3RyaWN0aW9uIHx8IHggaW5zdGFuY2VvZiBPZmZzZXRSZXN0cmljdGlvbikpLm1hcCh4ID0+IGBBTkQgJHt4LnNxbFN0cmluZygpfWApLmpvaW4oJycpO1xuICAgICAgICB2YXIgY29uZGl0b25fdmFsID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+ICEoeCBpbnN0YW5jZW9mIExpbWl0UmVzdHJpY3Rpb24gfHwgeCBpbnN0YW5jZW9mIE9mZnNldFJlc3RyaWN0aW9uKSkubWFwKHggPT4geC5nZXRWYWx1ZXMoKSkucmVkdWNlKChwcmV2LCB4KSA9PiBbLi4ucHJldiwgLi4ueF0sIFtdKTtcbiAgICAgICAgdmFyIHNxbF9jb21tYW5kID0gYFVQREFURSAke3RhYmxlT2JqZWN0LmdldFRhYmxlTmFtZSgpfSBTRVQgJHtzZXRfc3RyfSBXSEVSRSAxPTEgJHtjb25kaXRvbl9zdHJ9YDtcbiAgICAgICAgcmV0dXJuIG5ldyBTUUxDb21tYW5kKHNxbF9jb21tYW5kLCBbLi4uc2V0dGVkX3ZhbHMsIC4uLmNvbmRpdG9uX3ZhbF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtRGVsZXRlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICB2YXIgcmVzdHJpY3Rpb25zID0gdGFibGVPYmplY3QuZ2V0UmVzdHJpY3Rpb25zKCk7XG4gICAgICAgIHZhciBjb25kaXRvbl9zdHIgPSByZXN0cmljdGlvbnMuZmlsdGVyKHggPT4gISh4IGluc3RhbmNlb2YgTGltaXRSZXN0cmljdGlvbiB8fCB4IGluc3RhbmNlb2YgT2Zmc2V0UmVzdHJpY3Rpb24pKS5tYXAoeCA9PiBgQU5EICR7eC5zcWxTdHJpbmcoKX1gKS5qb2luKCcnKTtcbiAgICAgICAgdmFyIGNvbmRpdG9uX3ZhbCA9IHJlc3RyaWN0aW9ucy5maWx0ZXIoeCA9PiAhKHggaW5zdGFuY2VvZiBMaW1pdFJlc3RyaWN0aW9uIHx8IHggaW5zdGFuY2VvZiBPZmZzZXRSZXN0cmljdGlvbikpLm1hcCh4ID0+IHguZ2V0VmFsdWVzKCkpLnJlZHVjZSgocHJldiwgeCkgPT4gWy4uLnByZXYsIC4uLnhdLCBbXSk7XG4gICAgICAgIHZhciBzcWxfY29tbWFuZCA9IGBERUxFVEUgRlJPTSAke3RhYmxlT2JqZWN0LmdldFRhYmxlTmFtZSgpfSBXSEVSRSAxPTEgJHtjb25kaXRvbl9zdHJ9YDtcbiAgICAgICAgcmV0dXJuIG5ldyBTUUxDb21tYW5kKHNxbF9jb21tYW5kLCBjb25kaXRvbl92YWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVHJhbnNhY3Rpb25Db21tYW5kKHNxbF9jb21tYW5kOiBTUUxDb21tYW5kKSB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25BcnIucHVzaChzcWxfY29tbWFuZCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==