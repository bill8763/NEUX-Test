/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SQLiteTable } from "./SQLiteTable";
import { SQLiteColumn } from "./SQLiteColumn";
import { Observable } from "rxjs";
import { LimitRestriction } from "./restrictions/LimitRestriction";
import { OffsetRestriction } from "./restrictions/OffsetRestriction";
import { SQLiteResponse } from "./SQLiteResponse";
import { SQLCommand } from "./SQLCommand";
import { OrderByRestriction } from "./restrictions/OrderByRestriction";
import { APPError } from "../../errorHandler/APPError";
var SQLiteDao = /** @class */ (function () {
    function SQLiteDao(config) {
        this.transactionArr = [];
        this.config = config;
    }
    /**
     * @return {?}
     */
    SQLiteDao.prototype.openDataBase = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dbObj = this.config;
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            ((/** @type {?} */ (window))).sqlitePlugin.openDatabase({
                name: dbObj.getName() + '.db',
                location: 'default',
                key: dbObj.getKey(),
                androidDatabaseImplementation: 'system'
            }, (/**
             * @param {?} db
             * @return {?}
             */
            function (db) {
                _this.connection = db;
                res(db);
            }), (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var error = new Error("Sqlite DB open error.");
                rej(error);
            }));
        }));
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.queryByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction); })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return "AND " + x.sqlString(); })).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction || x instanceof OrderByRestriction); })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValues(); })).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        function (prev, x) { return tslib_1.__spread(prev, x); }), []);
        /** @type {?} */
        var order_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x instanceof OrderByRestriction; })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.sqlString(); })).join('');
        /** @type {?} */
        var limit_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x instanceof LimitRestriction; })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.sqlString(); })).join('');
        /** @type {?} */
        var offset_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x instanceof OffsetRestriction; })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.sqlString(); })).join('');
        /** @type {?} */
        var sql_count_command = "SELECT count(*) FROM " + tableObject.getTableName() + " WHERE 1=1 " + conditon_str;
        /** @type {?} */
        var sql_command = "SELECT * FROM " + tableObject.getTableName() + " WHERE 1=1 " + conditon_str + order_str + limit_str + offset_str;
        /** @type {?} */
        var sql_obj = new SQLCommand(sql_command, conditon_val);
        /** @type {?} */
        var sqlcount_obj = new SQLCommand(sql_count_command, conditon_val);
        console.group("run select sql command");
        console.log(sql_command);
        console.log('params', conditon_val);
        console.groupEnd();
        return this.runQuerySqlcommand(sql_obj, sqlcount_obj);
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.insertByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        var _this = this;
        /** @type {?} */
        var sql_obj = this.transformInsert(tableObject);
        console.group("run insert sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.runSqlCommand(observer, sql_obj);
        }));
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.updateByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        var _this = this;
        /** @type {?} */
        var sql_obj = this.transformUpdate(tableObject);
        console.group("run update sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.runSqlCommand(observer, sql_obj);
        }));
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.deleteByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        var _this = this;
        /** @type {?} */
        var sql_obj = this.transformDelete(tableObject);
        console.group("run delete sql command");
        console.log(sql_obj.getSql());
        console.log('params', sql_obj.getParams());
        console.groupEnd();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.runSqlCommand(observer, sql_obj);
        }));
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.transactionInsert = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        this.addTransactionCommand(this.transformInsert(tableObject));
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.transactionUpdate = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        this.addTransactionCommand(this.transformUpdate(tableObject));
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.transactionDelete = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        this.addTransactionCommand(this.transformDelete(tableObject));
    };
    /**
     * @param {?} command
     * @return {?}
     */
    SQLiteDao.prototype.transactionSqlCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.addTransactionCommand(command);
    };
    /**
     * @param {?} sql_command
     * @return {?}
     */
    SQLiteDao.prototype.excuteSqlCommand = /**
     * @param {?} sql_command
     * @return {?}
     */
    function (sql_command) {
        var _this = this;
        console.log('excuteSqlCommand:', sql_command);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            function (tr) {
                var e_1, _a;
                try {
                    for (var sql_command_1 = tslib_1.__values(sql_command), sql_command_1_1 = sql_command_1.next(); !sql_command_1_1.done; sql_command_1_1 = sql_command_1.next()) {
                        var command = sql_command_1_1.value;
                        tr.executeSql(command.getSql(), command.getParams(), (/**
                         * @return {?}
                         */
                        function () { }), (/**
                         * @param {?} _
                         * @param {?} error
                         * @return {?}
                         */
                        function (_, error) {
                            console.log('execute sql error:', error);
                        }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (sql_command_1_1 && !sql_command_1_1.done && (_a = sql_command_1.return)) _a.call(sql_command_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }), (/**
             * @return {?}
             */
            function () {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }));
        }));
    };
    /**
     * @return {?}
     */
    SQLiteDao.prototype.getSchema = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var schema = new Map();
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            function (tr) {
                tr.executeSql('SELECT name,sql FROM sqlite_master WHERE type="table" OR type="view"', [], (/**
                 * @param {?} tx
                 * @param {?} res
                 * @return {?}
                 */
                function (tx, res) {
                    //拿到TABLE名稱，query table schema
                    for (var len = 0; len < res.rows.length; len++) {
                        /** @type {?} */
                        var table_name = res.rows.item(len).name;
                        /** @type {?} */
                        var table_sql = res.rows.item(len).sql;
                        _this.getColumns(tx, schema, table_name, table_sql);
                    }
                }), (/**
                 * @param {?} tx
                 * @param {?} error
                 * @return {?}
                 */
                function (tx, error) {
                    console.log('select table name error:', error.message);
                }));
            }), (/**
             * @param {?} _
             * @param {?} error
             * @return {?}
             */
            function (_, error) {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }), (/**
             * @return {?}
             */
            function () {
                observer.next(schema);
                observer.complete();
            }));
        }));
    };
    /**
     * @return {?}
     */
    SQLiteDao.prototype.runTransaction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create(((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var batchArr = _this.transactionArr.map((/**
             * @param {?} cmd
             * @return {?}
             */
            function (cmd) { return [cmd.getSql(), cmd.getParams()]; }));
            console.group('run transaction SQL:');
            console.log('command:', batchArr);
            console.groupEnd();
            _this.connection.sqlBatch(batchArr, (/**
             * @return {?}
             */
            function () {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00018", error.message);
            }));
        })));
    };
    /**
     * @return {?}
     */
    SQLiteDao.prototype.clearTransaction = /**
     * @return {?}
     */
    function () {
        this.transactionArr = [];
    };
    /**
     * @protected
     * @param {?} tx
     * @param {?} schema
     * @param {?} table_name
     * @param {?} table_sql
     * @return {?}
     */
    SQLiteDao.prototype.getColumns = /**
     * @protected
     * @param {?} tx
     * @param {?} schema
     * @param {?} table_name
     * @param {?} table_sql
     * @return {?}
     */
    function (tx, schema, table_name, table_sql) {
        /** @type {?} */
        var tmp_colArray = [];
        console.log("getColumns:", table_name, table_sql);
        tx.executeSql('PRAGMA table_info(' + table_name + ')', [], (/**
         * @param {?} tx
         * @param {?} info_res
         * @return {?}
         */
        function (tx, info_res) {
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
        function (tx, error) {
            console.log('Get table column list error:', error.message);
            throw new APPError("F00019", error.message);
        }));
    };
    /**
     * @private
     * @param {?} observer
     * @param {?} sql_command
     * @return {?}
     */
    SQLiteDao.prototype.runSqlCommand = /**
     * @private
     * @param {?} observer
     * @param {?} sql_command
     * @return {?}
     */
    function (observer, sql_command) {
        this.connection.transaction((/**
         * @param {?} tr
         * @return {?}
         */
        function (tr) {
            tr.executeSql(sql_command.getSql(), sql_command.getParams(), (/**
             * @param {?} tx
             * @param {?} res
             * @return {?}
             */
            function (tx, res) {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }), (/**
             * @param {?} _
             * @param {?} error
             * @return {?}
             */
            function (_, error) {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00017", error.message);
            }));
        }));
    };
    /**
     * @private
     * @param {?} sql_obj
     * @param {?} sql_count_obj
     * @return {?}
     */
    SQLiteDao.prototype.runQuerySqlcommand = /**
     * @private
     * @param {?} sql_obj
     * @param {?} sql_count_obj
     * @return {?}
     */
    function (sql_obj, sql_count_obj) {
        var _this = this;
        console.log("runQuerySqlcommand", sql_obj);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.connection.transaction((/**
             * @param {?} tr
             * @return {?}
             */
            function (tr) {
                tr.executeSql(sql_obj.getSql(), sql_obj.getParams(), (/**
                 * @param {?} tx
                 * @param {?} res
                 * @return {?}
                 */
                function (tx, res) {
                    tx.executeSql(sql_count_obj.getSql(), sql_count_obj.getParams(), (/**
                     * @param {?} tx
                     * @param {?} res_count
                     * @return {?}
                     */
                    function (tx, res_count) {
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
                    function (_, error) {
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
                function (_, error) {
                    console.log(error.message);
                    observer.next(new SQLiteResponse({ status: false, message: error.message }, []));
                    observer.complete();
                    throw new APPError("F00017", error.message);
                }));
            }));
        }));
    };
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.transformInsert = /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        /** @type {?} */
        var setted_cols = tableObject.getColumns().filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValue() !== undefined; }));
        /** @type {?} */
        var setted_vals = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValue(); }));
        /** @type {?} */
        var sql_command = "INSERT INTO " + tableObject.getTableName() + " (" + setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getName(); })).join(',') + ") VALUES (" + setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return '?'; })).join(',') + ")";
        return new SQLCommand(sql_command, setted_vals);
    };
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.transformUpdate = /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        /** @type {?} */
        var setted_cols = tableObject.getColumns().filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValue() !== undefined; }));
        /** @type {?} */
        var setted_vals = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValue(); }));
        /** @type {?} */
        var set_str = setted_cols.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return " " + x.getName() + "=?"; })).join(',');
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return "AND " + x.sqlString(); })).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValues(); })).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        function (prev, x) { return tslib_1.__spread(prev, x); }), []);
        /** @type {?} */
        var sql_command = "UPDATE " + tableObject.getTableName() + " SET " + set_str + " WHERE 1=1 " + conditon_str;
        return new SQLCommand(sql_command, tslib_1.__spread(setted_vals, conditon_val));
    };
    /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    SQLiteDao.prototype.transformDelete = /**
     * @private
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        /** @type {?} */
        var restrictions = tableObject.getRestrictions();
        /** @type {?} */
        var conditon_str = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return "AND " + x.sqlString(); })).join('');
        /** @type {?} */
        var conditon_val = restrictions.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !(x instanceof LimitRestriction || x instanceof OffsetRestriction); })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getValues(); })).reduce((/**
         * @param {?} prev
         * @param {?} x
         * @return {?}
         */
        function (prev, x) { return tslib_1.__spread(prev, x); }), []);
        /** @type {?} */
        var sql_command = "DELETE FROM " + tableObject.getTableName() + " WHERE 1=1 " + conditon_str;
        return new SQLCommand(sql_command, conditon_val);
    };
    /**
     * @private
     * @param {?} sql_command
     * @return {?}
     */
    SQLiteDao.prototype.addTransactionCommand = /**
     * @private
     * @param {?} sql_command
     * @return {?}
     */
    function (sql_command) {
        this.transactionArr.push(sql_command);
    };
    return SQLiteDao;
}());
export { SQLiteDao };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1FMaXRlRGFvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZURhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQU0sTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3ZEO0lBSUksbUJBQVksTUFBc0I7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLGdDQUFZOzs7SUFBbkI7UUFBQSxpQkFnQkM7O1lBZk8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDeEIsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7Z0JBQ3BDLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSztnQkFDN0IsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEdBQUcsRUFBRSxLQUFL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QUFBLENBQUMsSUFBSSxPQUFBLFNBQU8sQ0FBQyxDQUFDLFNBQVMsRUFBSSxFQUF0QixDQUFzQixFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7WUFDckosWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxZQUFZLGdCQUFnQixJQUFJLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxFQUFsRSxDQUFrRSxFQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFiLENBQWEsRUFBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQyxJQUFLLHdCQUFJLElBQUksRUFBSyxDQUFDLEdBQWQsQ0FBZSxHQUFFLEVBQUUsQ0FBQzs7WUFDNUssV0FBVyxHQUFHLGlCQUFlLFdBQVcsQ0FBQyxZQUFZLEVBQUUsbUJBQWMsWUFBYztRQUN2RixPQUFPLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFTyx5Q0FBcUI7Ozs7O0lBQTdCLFVBQThCLFdBQXVCO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHTCxnQkFBQztBQUFELENBQUMsQUFoUUQsSUFnUUM7Ozs7Ozs7SUEvUEcsK0JBQTBCOzs7OztJQUMxQixtQ0FBcUM7Ozs7O0lBQ3JDLDJCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEYW8gfSBmcm9tIFwiLi9EYW8uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTUUxpdGVUYWJsZSB9IGZyb20gXCIuL1NRTGl0ZVRhYmxlXCI7XG5pbXBvcnQgeyBTUUxpdGVDb2x1bW4gfSBmcm9tIFwiLi9TUUxpdGVDb2x1bW5cIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IExpbWl0UmVzdHJpY3Rpb24gfSBmcm9tIFwiLi9yZXN0cmljdGlvbnMvTGltaXRSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgT2Zmc2V0UmVzdHJpY3Rpb24gfSBmcm9tIFwiLi9yZXN0cmljdGlvbnMvT2Zmc2V0UmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4vU1FMaXRlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNRTENvbW1hbmQgfSBmcm9tIFwiLi9TUUxDb21tYW5kXCI7XG5pbXBvcnQgeyBPcmRlckJ5UmVzdHJpY3Rpb24gfSBmcm9tIFwiLi9yZXN0cmljdGlvbnMvT3JkZXJCeVJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4vRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tIFwiLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yXCI7XG5pbXBvcnQgeyBTUUxpdGVEYXRhYmFzZSB9IGZyb20gXCIuL1NRTGl0ZURhdGFiYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTUUxpdGVEYW8gaW1wbGVtZW50cyBJRGFvIHtcbiAgICBwcm90ZWN0ZWQgY29ubmVjdGlvbjogYW55O1xuICAgIHByb3RlY3RlZCB0cmFuc2FjdGlvbkFycjogQXJyYXk8YW55PjtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTUUxpdGVEYXRhYmFzZTtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFNRTGl0ZURhdGFiYXNlKSB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25BcnIgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EYXRhQmFzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgZGJPYmogPSB0aGlzLmNvbmZpZztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5zcWxpdGVQbHVnaW4ub3BlbkRhdGFiYXNlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkYk9iai5nZXROYW1lKCkgKyAnLmRiJyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIGtleTogZGJPYmouZ2V0S2V5KCksXG4gICAgICAgICAgICAgICAgYW5kcm9pZERhdGFiYXNlSW1wbGVtZW50YXRpb246ICdzeXN0ZW0nXG4gICAgICAgICAgICB9LCBkYiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gZGI7XG4gICAgICAgICAgICAgICAgcmVzKGRiKTtcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoXCJTcWxpdGUgREIgb3BlbiBlcnJvci5cIik7XG4gICAgICAgICAgICAgICAgcmVqKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBxdWVyeUJ5VGFibGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKTogT2JzZXJ2YWJsZTxTUUxpdGVSZXNwb25zZT4ge1xuICAgICAgICB2YXIgcmVzdHJpY3Rpb25zID0gdGFibGVPYmplY3QuZ2V0UmVzdHJpY3Rpb25zKCk7XG4gICAgICAgIHZhciBjb25kaXRvbl9zdHIgPSByZXN0cmljdGlvbnMuZmlsdGVyKHggPT4gISh4IGluc3RhbmNlb2YgTGltaXRSZXN0cmljdGlvbiB8fCB4IGluc3RhbmNlb2YgT2Zmc2V0UmVzdHJpY3Rpb24gfHwgeCBpbnN0YW5jZW9mIE9yZGVyQnlSZXN0cmljdGlvbikpLm1hcCh4ID0+IGBBTkQgJHt4LnNxbFN0cmluZygpfWApLmpvaW4oJycpO1xuICAgICAgICB2YXIgY29uZGl0b25fdmFsID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+ICEoeCBpbnN0YW5jZW9mIExpbWl0UmVzdHJpY3Rpb24gfHwgeCBpbnN0YW5jZW9mIE9mZnNldFJlc3RyaWN0aW9uIHx8IHggaW5zdGFuY2VvZiBPcmRlckJ5UmVzdHJpY3Rpb24pKS5tYXAoeCA9PiB4LmdldFZhbHVlcygpKS5yZWR1Y2UoKHByZXYsIHgpID0+IFsuLi5wcmV2LCAuLi54XSwgW10pO1xuICAgICAgICB2YXIgb3JkZXJfc3RyID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBPcmRlckJ5UmVzdHJpY3Rpb24pLm1hcCh4ID0+IHguc3FsU3RyaW5nKCkpLmpvaW4oJycpO1xuICAgICAgICB2YXIgbGltaXRfc3RyID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBMaW1pdFJlc3RyaWN0aW9uKS5tYXAoeCA9PiB4LnNxbFN0cmluZygpKS5qb2luKCcnKTtcbiAgICAgICAgdmFyIG9mZnNldF9zdHIgPSByZXN0cmljdGlvbnMuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIE9mZnNldFJlc3RyaWN0aW9uKS5tYXAoeCA9PiB4LnNxbFN0cmluZygpKS5qb2luKCcnKTtcbiAgICAgICAgdmFyIHNxbF9jb3VudF9jb21tYW5kID0gYFNFTEVDVCBjb3VudCgqKSBGUk9NICR7dGFibGVPYmplY3QuZ2V0VGFibGVOYW1lKCl9IFdIRVJFIDE9MSAke2NvbmRpdG9uX3N0cn1gO1xuICAgICAgICB2YXIgc3FsX2NvbW1hbmQgPSBgU0VMRUNUICogRlJPTSAke3RhYmxlT2JqZWN0LmdldFRhYmxlTmFtZSgpfSBXSEVSRSAxPTEgJHtjb25kaXRvbl9zdHJ9JHtvcmRlcl9zdHJ9JHtsaW1pdF9zdHJ9JHtvZmZzZXRfc3RyfWA7XG4gICAgICAgIHZhciBzcWxfb2JqID0gbmV3IFNRTENvbW1hbmQoc3FsX2NvbW1hbmQsIGNvbmRpdG9uX3ZhbCk7XG4gICAgICAgIHZhciBzcWxjb3VudF9vYmogPSBuZXcgU1FMQ29tbWFuZChzcWxfY291bnRfY29tbWFuZCwgY29uZGl0b25fdmFsKTtcbiAgICAgICAgY29uc29sZS5ncm91cChcInJ1biBzZWxlY3Qgc3FsIGNvbW1hbmRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHNxbF9jb21tYW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcycsIGNvbmRpdG9uX3ZhbCk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuUXVlcnlTcWxjb21tYW5kKHNxbF9vYmosIHNxbGNvdW50X29iaik7XG4gICAgfVxuXG4gICAgcHVibGljIGluc2VydEJ5VGFibGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKTogT2JzZXJ2YWJsZTxTUUxpdGVSZXNwb25zZT4ge1xuICAgICAgICBsZXQgc3FsX29iaiA9IHRoaXMudHJhbnNmb3JtSW5zZXJ0KHRhYmxlT2JqZWN0KTtcbiAgICAgICAgY29uc29sZS5ncm91cChcInJ1biBpbnNlcnQgc3FsIGNvbW1hbmRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHNxbF9vYmouZ2V0U3FsKCkpO1xuICAgICAgICBjb25zb2xlLmxvZygncGFyYW1zJywgc3FsX29iai5nZXRQYXJhbXMoKSk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5ydW5TcWxDb21tYW5kKG9ic2VydmVyLCBzcWxfb2JqKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQnlUYWJsZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpOiBPYnNlcnZhYmxlPFNRTGl0ZVJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBzcWxfb2JqID0gdGhpcy50cmFuc2Zvcm1VcGRhdGUodGFibGVPYmplY3QpO1xuICAgICAgICBjb25zb2xlLmdyb3VwKFwicnVuIHVwZGF0ZSBzcWwgY29tbWFuZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coc3FsX29iai5nZXRTcWwoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMnLCBzcWxfb2JqLmdldFBhcmFtcygpKTtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1blNxbENvbW1hbmQob2JzZXJ2ZXIsIHNxbF9vYmopO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVCeVRhYmxlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSk6IE9ic2VydmFibGU8U1FMaXRlUmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IHNxbF9vYmogPSB0aGlzLnRyYW5zZm9ybURlbGV0ZSh0YWJsZU9iamVjdCk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoXCJydW4gZGVsZXRlIHNxbCBjb21tYW5kXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzcWxfb2JqLmdldFNxbCgpKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcycsIHNxbF9vYmouZ2V0UGFyYW1zKCkpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuU3FsQ29tbWFuZChvYnNlcnZlciwgc3FsX29iaik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zYWN0aW9uSW5zZXJ0KHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICB0aGlzLmFkZFRyYW5zYWN0aW9uQ29tbWFuZCh0aGlzLnRyYW5zZm9ybUluc2VydCh0YWJsZU9iamVjdCkpO1xuICAgIH1cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb25VcGRhdGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIHRoaXMuYWRkVHJhbnNhY3Rpb25Db21tYW5kKHRoaXMudHJhbnNmb3JtVXBkYXRlKHRhYmxlT2JqZWN0KSk7XG4gICAgfVxuICAgIHB1YmxpYyB0cmFuc2FjdGlvbkRlbGV0ZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpIHtcbiAgICAgICAgdGhpcy5hZGRUcmFuc2FjdGlvbkNvbW1hbmQodGhpcy50cmFuc2Zvcm1EZWxldGUodGFibGVPYmplY3QpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb25TcWxDb21tYW5kKGNvbW1hbmQ6IFNRTENvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5hZGRUcmFuc2FjdGlvbkNvbW1hbmQoY29tbWFuZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4Y3V0ZVNxbENvbW1hbmQoc3FsX2NvbW1hbmQ6IEFycmF5PFNRTENvbW1hbmQ+KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGN1dGVTcWxDb21tYW5kOicsIHNxbF9jb21tYW5kKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnRyYW5zYWN0aW9uKHRyID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb21tYW5kIG9mIHNxbF9jb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyLmV4ZWN1dGVTcWwoY29tbWFuZC5nZXRTcWwoKSwgY29tbWFuZC5nZXRQYXJhbXMoKSwgKCkgPT4geyB9LCAoXywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjdXRlIHNxbCBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiBmYWxzZSwgbXNnOiBlcnJvci5tZXNzYWdlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDAwMTdcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNjaGVtYSgpIHtcbiAgICAgICAgdmFyIHNjaGVtYSA9IG5ldyBNYXAoKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnRyYW5zYWN0aW9uKHRyID0+IHtcbiAgICAgICAgICAgICAgICB0ci5leGVjdXRlU3FsKCdTRUxFQ1QgbmFtZSxzcWwgRlJPTSBzcWxpdGVfbWFzdGVyIFdIRVJFIHR5cGU9XCJ0YWJsZVwiIE9SIHR5cGU9XCJ2aWV3XCInLCBbXSwgKHR4LCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy/mi7/liLBUQUJMReWQjeeose+8jHF1ZXJ5IHRhYmxlIHNjaGVtYVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBsZW4gPSAwOyBsZW4gPCByZXMucm93cy5sZW5ndGg7IGxlbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGVfbmFtZSA9IHJlcy5yb3dzLml0ZW0obGVuKS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlX3NxbCA9IHJlcy5yb3dzLml0ZW0obGVuKS5zcWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbHVtbnModHgsIHNjaGVtYSwgdGFibGVfbmFtZSwgdGFibGVfc3FsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sICh0eCwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdCB0YWJsZSBuYW1lIGVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgKF8sIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IGZhbHNlLCBtc2c6IGVycm9yLm1lc3NhZ2UgfSwgW10pKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBBUFBFcnJvcihcIkYwMDAxN1wiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHNjaGVtYSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcHVibGljIHJ1blRyYW5zYWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIGxldCBiYXRjaEFyciA9IHRoaXMudHJhbnNhY3Rpb25BcnIubWFwKChjbWQpID0+IFtjbWQuZ2V0U3FsKCksIGNtZC5nZXRQYXJhbXMoKV0pO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cCgncnVuIHRyYW5zYWN0aW9uIFNRTDonKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21tYW5kOicsIGJhdGNoQXJyKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zcWxCYXRjaChiYXRjaEFyciwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiBmYWxzZSwgbXNnOiBlcnJvci5tZXNzYWdlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDAwMThcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25BcnIgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucyh0eCwgc2NoZW1hLCB0YWJsZV9uYW1lLCB0YWJsZV9zcWwpIHtcbiAgICAgICAgdmFyIHRtcF9jb2xBcnJheSA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldENvbHVtbnM6XCIsIHRhYmxlX25hbWUsIHRhYmxlX3NxbCk7XG4gICAgICAgIHR4LmV4ZWN1dGVTcWwoJ1BSQUdNQSB0YWJsZV9pbmZvKCcgKyB0YWJsZV9uYW1lICsgJyknLCBbXSwgKHR4LCBpbmZvX3JlcykgPT4ge1xuICAgICAgICAgICAgLy/mi7/liLB0YWJsZeeahOavj+WAi+ashOS9jVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmZvX3Jlcy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzUEsgPSAhIWluZm9fcmVzLnJvd3MuaXRlbShpKS5waztcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGluZm9fcmVzLnJvd3MuaXRlbShpKS5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciBpc0F1dG9JbmNyZW1lbnQgPSBpc1BLICYmICh0YWJsZV9zcWwudG9VcHBlckNhc2UoKS5pbmRleE9mKFwiQVVUT0lOQ1JFTUVOVFwiKSA+IC0xKTtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGluZm9fcmVzLnJvd3MuaXRlbShpKS50eXBlO1xuICAgICAgICAgICAgICAgIHRtcF9jb2xBcnJheS5wdXNoKG5ldyBTUUxpdGVDb2x1bW4obmFtZSwgdW5kZWZpbmVkLCB0eXBlLCBpc1BLLCBpc0F1dG9JbmNyZW1lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0YWJsZU9iaiA9IG5ldyBTUUxpdGVUYWJsZSh0YWJsZV9uYW1lLCB0bXBfY29sQXJyYXkpO1xuICAgICAgICAgICAgc2NoZW1hLnNldCh0YWJsZV9uYW1lLCB0YWJsZU9iaik7XG4gICAgICAgIH0sICh0eCwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXQgdGFibGUgY29sdW1uIGxpc3QgZXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDAwMTlcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuU3FsQ29tbWFuZChvYnNlcnZlciwgc3FsX2NvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnRyYW5zYWN0aW9uKHRyID0+IHtcbiAgICAgICAgICAgIHRyLmV4ZWN1dGVTcWwoc3FsX2NvbW1hbmQuZ2V0U3FsKCksIHNxbF9jb21tYW5kLmdldFBhcmFtcygpLCAodHgsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sIChfLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiBmYWxzZSwgbXNnOiBlcnJvci5tZXNzYWdlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDAwMTdcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBydW5RdWVyeVNxbGNvbW1hbmQoc3FsX29iaiwgc3FsX2NvdW50X29iaikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJ1blF1ZXJ5U3FsY29tbWFuZFwiLCBzcWxfb2JqKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnRyYW5zYWN0aW9uKHRyID0+IHtcbiAgICAgICAgICAgICAgICB0ci5leGVjdXRlU3FsKHNxbF9vYmouZ2V0U3FsKCksIHNxbF9vYmouZ2V0UGFyYW1zKCksICh0eCwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHR4LmV4ZWN1dGVTcWwoc3FsX2NvdW50X29iai5nZXRTcWwoKSwgc3FsX2NvdW50X29iai5nZXRQYXJhbXMoKSwgKHR4LCByZXNfY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHJlcy5yb3dzLml0ZW0oaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJydW4gcXVlcnkgc3FsIGZpbmlzaCFcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkX2xlbmd0aDogcmVzX2NvdW50LnJvd3MuaXRlbSgwKVsnY291bnQoKiknXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIChfLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSwgW10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDAwMTdcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgKF8sIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSwgW10pKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFQUEVycm9yKFwiRjAwMDE3XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybUluc2VydCh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpIHtcbiAgICAgICAgdmFyIHNldHRlZF9jb2xzID0gdGFibGVPYmplY3QuZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZ2V0VmFsdWUoKSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgdmFyIHNldHRlZF92YWxzID0gc2V0dGVkX2NvbHMubWFwKHggPT4geC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgdmFyIHNxbF9jb21tYW5kID0gYElOU0VSVCBJTlRPICR7dGFibGVPYmplY3QuZ2V0VGFibGVOYW1lKCl9ICgke3NldHRlZF9jb2xzLm1hcCh4ID0+IHguZ2V0TmFtZSgpKS5qb2luKCcsJyl9KSBWQUxVRVMgKCR7c2V0dGVkX2NvbHMubWFwKHggPT4gJz8nKS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBuZXcgU1FMQ29tbWFuZChzcWxfY29tbWFuZCwgc2V0dGVkX3ZhbHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtVXBkYXRlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICB2YXIgc2V0dGVkX2NvbHMgPSB0YWJsZU9iamVjdC5nZXRDb2x1bW5zKCkuZmlsdGVyKHggPT4geC5nZXRWYWx1ZSgpICE9PSB1bmRlZmluZWQpO1xuICAgICAgICB2YXIgc2V0dGVkX3ZhbHMgPSBzZXR0ZWRfY29scy5tYXAoeCA9PiB4LmdldFZhbHVlKCkpO1xuICAgICAgICB2YXIgc2V0X3N0ciA9IHNldHRlZF9jb2xzLm1hcCh4ID0+IGAgJHt4LmdldE5hbWUoKX09P2ApLmpvaW4oJywnKTtcbiAgICAgICAgdmFyIHJlc3RyaWN0aW9ucyA9IHRhYmxlT2JqZWN0LmdldFJlc3RyaWN0aW9ucygpO1xuICAgICAgICB2YXIgY29uZGl0b25fc3RyID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+ICEoeCBpbnN0YW5jZW9mIExpbWl0UmVzdHJpY3Rpb24gfHwgeCBpbnN0YW5jZW9mIE9mZnNldFJlc3RyaWN0aW9uKSkubWFwKHggPT4gYEFORCAke3guc3FsU3RyaW5nKCl9YCkuam9pbignJyk7XG4gICAgICAgIHZhciBjb25kaXRvbl92YWwgPSByZXN0cmljdGlvbnMuZmlsdGVyKHggPT4gISh4IGluc3RhbmNlb2YgTGltaXRSZXN0cmljdGlvbiB8fCB4IGluc3RhbmNlb2YgT2Zmc2V0UmVzdHJpY3Rpb24pKS5tYXAoeCA9PiB4LmdldFZhbHVlcygpKS5yZWR1Y2UoKHByZXYsIHgpID0+IFsuLi5wcmV2LCAuLi54XSwgW10pO1xuICAgICAgICB2YXIgc3FsX2NvbW1hbmQgPSBgVVBEQVRFICR7dGFibGVPYmplY3QuZ2V0VGFibGVOYW1lKCl9IFNFVCAke3NldF9zdHJ9IFdIRVJFIDE9MSAke2NvbmRpdG9uX3N0cn1gO1xuICAgICAgICByZXR1cm4gbmV3IFNRTENvbW1hbmQoc3FsX2NvbW1hbmQsIFsuLi5zZXR0ZWRfdmFscywgLi4uY29uZGl0b25fdmFsXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1EZWxldGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIHZhciByZXN0cmljdGlvbnMgPSB0YWJsZU9iamVjdC5nZXRSZXN0cmljdGlvbnMoKTtcbiAgICAgICAgdmFyIGNvbmRpdG9uX3N0ciA9IHJlc3RyaWN0aW9ucy5maWx0ZXIoeCA9PiAhKHggaW5zdGFuY2VvZiBMaW1pdFJlc3RyaWN0aW9uIHx8IHggaW5zdGFuY2VvZiBPZmZzZXRSZXN0cmljdGlvbikpLm1hcCh4ID0+IGBBTkQgJHt4LnNxbFN0cmluZygpfWApLmpvaW4oJycpO1xuICAgICAgICB2YXIgY29uZGl0b25fdmFsID0gcmVzdHJpY3Rpb25zLmZpbHRlcih4ID0+ICEoeCBpbnN0YW5jZW9mIExpbWl0UmVzdHJpY3Rpb24gfHwgeCBpbnN0YW5jZW9mIE9mZnNldFJlc3RyaWN0aW9uKSkubWFwKHggPT4geC5nZXRWYWx1ZXMoKSkucmVkdWNlKChwcmV2LCB4KSA9PiBbLi4ucHJldiwgLi4ueF0sIFtdKTtcbiAgICAgICAgdmFyIHNxbF9jb21tYW5kID0gYERFTEVURSBGUk9NICR7dGFibGVPYmplY3QuZ2V0VGFibGVOYW1lKCl9IFdIRVJFIDE9MSAke2NvbmRpdG9uX3N0cn1gO1xuICAgICAgICByZXR1cm4gbmV3IFNRTENvbW1hbmQoc3FsX2NvbW1hbmQsIGNvbmRpdG9uX3ZhbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUcmFuc2FjdGlvbkNvbW1hbmQoc3FsX2NvbW1hbmQ6IFNRTENvbW1hbmQpIHtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbkFyci5wdXNoKHNxbF9jb21tYW5kKTtcbiAgICB9XG5cblxufVxuIl19