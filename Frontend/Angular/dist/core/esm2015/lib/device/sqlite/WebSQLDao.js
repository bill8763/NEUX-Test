/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SQLiteTable } from "./SQLiteTable";
import { SQLiteColumn } from "./SQLiteColumn";
import { Observable } from "rxjs";
import { SQLiteResponse } from "./SQLiteResponse";
import { APPError } from "../../errorHandler/APPError";
import { SQLiteDao } from "./SQLiteDao";
export class WebSQLDao extends SQLiteDao {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(config);
    }
    /**
     * @return {?}
     */
    openDataBase() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /**
             * @param {?} ms
             * @return {?}
             */
            function timeout(ms) {
                return new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                resolve => setTimeout(resolve, ms)));
            }
            this.connection = window.openDatabase(this.config.getName(), '1.0', this.config.getName(), 2 * 1024 * 1024);
            console.log("OpenDataBase:", this.connection);
            return this.connection;
        });
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
        let tmp_colArray = [];
        /** @type {?} */
        let columnStr = [];
        /** @type {?} */
        let isView = table_sql.indexOf('CREATE VIEW') > -1;
        if (!isView) {
            columnStr = table_sql.split('(')[1].split(',');
            tmp_colArray = columnStr.map((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                /** @type {?} */
                let isPK = x.toUpperCase().indexOf("PRIMARY KEY") > -1;
                /** @type {?} */
                let name = x.trim().split(' ')[0];
                /** @type {?} */
                let isAutoIncrement = isPK && (x.toUpperCase().indexOf("AUTOINCREMENT") > -1);
                /** @type {?} */
                let type = x.toUpperCase().indexOf("INTEGER") > -1 ? 'Integer' : 'Text';
                return new SQLiteColumn(name, undefined, type, isPK, isAutoIncrement);
            }));
        }
        else {
            // VIEW
            /** @type {?} */
            let mainTableIndex = table_sql.split(' ').indexOf("LEFT") - 1;
            /** @type {?} */
            let extTableIndex = mainTableIndex + 3;
            /** @type {?} */
            let mainTableName = table_sql.split(' ')[mainTableIndex];
            /** @type {?} */
            let extTableName = table_sql.split(' ')[extTableIndex];
            /** @type {?} */
            let mainTable = schema.get(mainTableName);
            /** @type {?} */
            let extTable = schema.get(extTableName);
            tmp_colArray = [...mainTable.getColumns(), ...extTable.getColumns()];
            tmp_colArray = tmp_colArray.reduce((/**
             * @param {?} unique
             * @param {?} o
             * @return {?}
             */
            (unique, o) => {
                if (!unique.some((/**
                 * @param {?} obj
                 * @return {?}
                 */
                obj => obj.getName() === o.getName()))) {
                    unique.push(o);
                }
                return unique;
            }), []);
        }
        /** @type {?} */
        let tableObj = new SQLiteTable(table_name, tmp_colArray);
        schema.set(table_name, tableObj);
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
            this.connection.transaction((/**
             * @param {?} tx
             * @return {?}
             */
            (tx) => {
                this.transactionArr.forEach((/**
                 * @param {?} cmd
                 * @return {?}
                 */
                cmd => {
                    tx.executeSql(cmd.getSql(), cmd.getParams());
                }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00018", error.message);
            }), (/**
             * @return {?}
             */
            () => {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }));
        })));
    }
    /**
     * @return {?}
     */
    clearTransaction() {
        this.transactionArr = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU1FMRGFvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL1dlYlNRTERhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXhDLE1BQU0sZ0JBQWlCLFNBQVEsU0FBUzs7OztJQUNwQyxZQUFZLE1BQXNCO1FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O0lBRVksWUFBWTs7Ozs7O1lBQ3JCLGlCQUFpQixFQUFFO2dCQUNmLE9BQU8sSUFBSSxPQUFPOzs7O2dCQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDO1lBQzNELENBQUM7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzVHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztLQUFBOzs7Ozs7Ozs7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QzdCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEYW8gfSBmcm9tIFwiLi9EYW8uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTUUxpdGVUYWJsZSB9IGZyb20gXCIuL1NRTGl0ZVRhYmxlXCI7XG5pbXBvcnQgeyBTUUxpdGVDb2x1bW4gfSBmcm9tIFwiLi9TUUxpdGVDb2x1bW5cIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTGltaXRSZXN0cmljdGlvbiB9IGZyb20gXCIuL3Jlc3RyaWN0aW9ucy9MaW1pdFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBPZmZzZXRSZXN0cmljdGlvbiB9IGZyb20gXCIuL3Jlc3RyaWN0aW9ucy9PZmZzZXRSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiLi9TUUxpdGVSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1FMQ29tbWFuZCB9IGZyb20gXCIuL1NRTENvbW1hbmRcIjtcbmltcG9ydCB7IE9yZGVyQnlSZXN0cmljdGlvbiB9IGZyb20gXCIuL3Jlc3RyaWN0aW9ucy9PcmRlckJ5UmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IEFQUEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9ySGFuZGxlci9BUFBFcnJvclwiO1xuaW1wb3J0IHsgU1FMaXRlRGF0YWJhc2UgfSBmcm9tIFwiLi9TUUxpdGVEYXRhYmFzZVwiO1xuaW1wb3J0IHsgU1FMaXRlRGFvIH0gZnJvbSBcIi4vU1FMaXRlRGFvXCI7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdztcblxuZXhwb3J0IGNsYXNzIFdlYlNRTERhbyBleHRlbmRzIFNRTGl0ZURhbyBpbXBsZW1lbnRzIElEYW8ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogU1FMaXRlRGF0YWJhc2UpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3BlbkRhdGFCYXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHdpbmRvdy5vcGVuRGF0YWJhc2UodGhpcy5jb25maWcuZ2V0TmFtZSgpLCAnMS4wJywgdGhpcy5jb25maWcuZ2V0TmFtZSgpLCAyICogMTAyNCAqIDEwMjQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9wZW5EYXRhQmFzZTpcIiwgdGhpcy5jb25uZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucyh0eCwgc2NoZW1hOiBNYXA8c3RyaW5nLCBTUUxpdGVUYWJsZT4sIHRhYmxlX25hbWUsIHRhYmxlX3NxbCkge1xuICAgICAgICBsZXQgdG1wX2NvbEFycmF5ID0gW107XG4gICAgICAgIGxldCBjb2x1bW5TdHIgPSBbXTtcbiAgICAgICAgbGV0IGlzVmlldyA9IHRhYmxlX3NxbC5pbmRleE9mKCdDUkVBVEUgVklFVycpID4gLTE7XG4gICAgICAgIGlmICghaXNWaWV3KSB7XG4gICAgICAgICAgICBjb2x1bW5TdHIgPSB0YWJsZV9zcWwuc3BsaXQoJygnKVsxXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgdG1wX2NvbEFycmF5ID0gY29sdW1uU3RyLm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXNQSyA9IHgudG9VcHBlckNhc2UoKS5pbmRleE9mKFwiUFJJTUFSWSBLRVlcIikgPiAtMTtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHgudHJpbSgpLnNwbGl0KCcgJylbMF07XG4gICAgICAgICAgICAgICAgbGV0IGlzQXV0b0luY3JlbWVudCA9IGlzUEsgJiYgKHgudG9VcHBlckNhc2UoKS5pbmRleE9mKFwiQVVUT0lOQ1JFTUVOVFwiKSA+IC0xKTtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHgudG9VcHBlckNhc2UoKS5pbmRleE9mKFwiSU5URUdFUlwiKSA+IC0xID8gJ0ludGVnZXInIDogJ1RleHQnO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlQ29sdW1uKG5hbWUsIHVuZGVmaW5lZCwgdHlwZSwgaXNQSywgaXNBdXRvSW5jcmVtZW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBWSUVXXG4gICAgICAgICAgICBsZXQgbWFpblRhYmxlSW5kZXggPSB0YWJsZV9zcWwuc3BsaXQoJyAnKS5pbmRleE9mKFwiTEVGVFwiKSAtIDE7XG4gICAgICAgICAgICBsZXQgZXh0VGFibGVJbmRleCA9IG1haW5UYWJsZUluZGV4ICsgMztcbiAgICAgICAgICAgIGxldCBtYWluVGFibGVOYW1lID0gdGFibGVfc3FsLnNwbGl0KCcgJylbbWFpblRhYmxlSW5kZXhdO1xuICAgICAgICAgICAgbGV0IGV4dFRhYmxlTmFtZSA9IHRhYmxlX3NxbC5zcGxpdCgnICcpW2V4dFRhYmxlSW5kZXhdO1xuICAgICAgICAgICAgbGV0IG1haW5UYWJsZSA9IHNjaGVtYS5nZXQobWFpblRhYmxlTmFtZSk7XG4gICAgICAgICAgICBsZXQgZXh0VGFibGUgPSBzY2hlbWEuZ2V0KGV4dFRhYmxlTmFtZSk7XG4gICAgICAgICAgICB0bXBfY29sQXJyYXkgPSBbLi4ubWFpblRhYmxlLmdldENvbHVtbnMoKSwgLi4uZXh0VGFibGUuZ2V0Q29sdW1ucygpXTtcbiAgICAgICAgICAgIHRtcF9jb2xBcnJheSA9IHRtcF9jb2xBcnJheS5yZWR1Y2UoKHVuaXF1ZSwgbykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdW5pcXVlLnNvbWUob2JqID0+IG9iai5nZXROYW1lKCkgPT09IG8uZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWUucHVzaChvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZTtcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFibGVPYmogPSBuZXcgU1FMaXRlVGFibGUodGFibGVfbmFtZSwgdG1wX2NvbEFycmF5KTtcbiAgICAgICAgc2NoZW1hLnNldCh0YWJsZV9uYW1lLCB0YWJsZU9iaik7XG4gICAgfVxuXG4gICAgcHVibGljIHJ1blRyYW5zYWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIGxldCBiYXRjaEFyciA9IHRoaXMudHJhbnNhY3Rpb25BcnIubWFwKChjbWQpID0+IFtjbWQuZ2V0U3FsKCksIGNtZC5nZXRQYXJhbXMoKV0pO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cCgncnVuIHRyYW5zYWN0aW9uIFNRTDonKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21tYW5kOicsIGJhdGNoQXJyKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi50cmFuc2FjdGlvbigodHgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uQXJyLmZvckVhY2goY21kID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHguZXhlY3V0ZVNxbChjbWQuZ2V0U3FsKCksIGNtZC5nZXRQYXJhbXMoKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiBmYWxzZSwgbXNnOiBlcnJvci5tZXNzYWdlIH0sIFtdKSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQVBQRXJyb3IoXCJGMDAwMThcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclRyYW5zYWN0aW9uKCkge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uQXJyID0gW107XG4gICAgfVxufVxuIl19