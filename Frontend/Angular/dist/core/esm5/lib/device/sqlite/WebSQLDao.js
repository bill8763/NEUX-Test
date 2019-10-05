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
var WebSQLDao = /** @class */ (function (_super) {
    tslib_1.__extends(WebSQLDao, _super);
    function WebSQLDao(config) {
        return _super.call(this, config) || this;
    }
    /**
     * @return {?}
     */
    WebSQLDao.prototype.openDataBase = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            /**
             * @param {?} ms
             * @return {?}
             */
            function timeout(ms) {
                return new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                function (resolve) { return setTimeout(resolve, ms); }));
            }
            return tslib_1.__generator(this, function (_a) {
                this.connection = window.openDatabase(this.config.getName(), '1.0', this.config.getName(), 2 * 1024 * 1024);
                console.log("OpenDataBase:", this.connection);
                return [2 /*return*/, this.connection];
            });
        });
    };
    /**
     * @protected
     * @param {?} tx
     * @param {?} schema
     * @param {?} table_name
     * @param {?} table_sql
     * @return {?}
     */
    WebSQLDao.prototype.getColumns = /**
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
        /** @type {?} */
        var columnStr = [];
        /** @type {?} */
        var isView = table_sql.indexOf('CREATE VIEW') > -1;
        if (!isView) {
            columnStr = table_sql.split('(')[1].split(',');
            tmp_colArray = columnStr.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                /** @type {?} */
                var isPK = x.toUpperCase().indexOf("PRIMARY KEY") > -1;
                /** @type {?} */
                var name = x.trim().split(' ')[0];
                /** @type {?} */
                var isAutoIncrement = isPK && (x.toUpperCase().indexOf("AUTOINCREMENT") > -1);
                /** @type {?} */
                var type = x.toUpperCase().indexOf("INTEGER") > -1 ? 'Integer' : 'Text';
                return new SQLiteColumn(name, undefined, type, isPK, isAutoIncrement);
            }));
        }
        else {
            // VIEW
            /** @type {?} */
            var mainTableIndex = table_sql.split(' ').indexOf("LEFT") - 1;
            /** @type {?} */
            var extTableIndex = mainTableIndex + 3;
            /** @type {?} */
            var mainTableName = table_sql.split(' ')[mainTableIndex];
            /** @type {?} */
            var extTableName = table_sql.split(' ')[extTableIndex];
            /** @type {?} */
            var mainTable = schema.get(mainTableName);
            /** @type {?} */
            var extTable = schema.get(extTableName);
            tmp_colArray = tslib_1.__spread(mainTable.getColumns(), extTable.getColumns());
            tmp_colArray = tmp_colArray.reduce((/**
             * @param {?} unique
             * @param {?} o
             * @return {?}
             */
            function (unique, o) {
                if (!unique.some((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) { return obj.getName() === o.getName(); }))) {
                    unique.push(o);
                }
                return unique;
            }), []);
        }
        /** @type {?} */
        var tableObj = new SQLiteTable(table_name, tmp_colArray);
        schema.set(table_name, tableObj);
    };
    /**
     * @return {?}
     */
    WebSQLDao.prototype.runTransaction = /**
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
            _this.connection.transaction((/**
             * @param {?} tx
             * @return {?}
             */
            function (tx) {
                _this.transactionArr.forEach((/**
                 * @param {?} cmd
                 * @return {?}
                 */
                function (cmd) {
                    tx.executeSql(cmd.getSql(), cmd.getParams());
                }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                observer.next(new SQLiteResponse({ status: false, msg: error.message }, []));
                observer.complete();
                throw new APPError("F00018", error.message);
            }), (/**
             * @return {?}
             */
            function () {
                observer.next(new SQLiteResponse({ status: true }, []));
                observer.complete();
            }));
        })));
    };
    /**
     * @return {?}
     */
    WebSQLDao.prototype.clearTransaction = /**
     * @return {?}
     */
    function () {
        this.transactionArr = [];
    };
    return WebSQLDao;
}(SQLiteDao));
export { WebSQLDao };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU1FMRGFvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL1dlYlNRTERhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXhDO0lBQStCLHFDQUFTO0lBQ3BDLG1CQUFZLE1BQXNCO2VBQzlCLGtCQUFNLE1BQU0sQ0FBQztJQUNqQixDQUFDOzs7O0lBRVksZ0NBQVk7OztJQUF6Qjs7Ozs7O1lBQ0ksaUJBQWlCLEVBQUU7Z0JBQ2YsT0FBTyxJQUFJLE9BQU87Ozs7Z0JBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7WUFDM0QsQ0FBQzs7Z0JBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxzQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFDOzs7S0FDMUI7Ozs7Ozs7OztJQUVT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Q0wsZ0JBQUM7QUFBRCxDQUFDLEFBekVELENBQStCLFNBQVMsR0F5RXZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURhbyB9IGZyb20gXCIuL0Rhby5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSBcIi4vU1FMaXRlVGFibGVcIjtcbmltcG9ydCB7IFNRTGl0ZUNvbHVtbiB9IGZyb20gXCIuL1NRTGl0ZUNvbHVtblwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBMaW1pdFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4vcmVzdHJpY3Rpb25zL0xpbWl0UmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IE9mZnNldFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4vcmVzdHJpY3Rpb25zL09mZnNldFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuL1NRTGl0ZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTUUxDb21tYW5kIH0gZnJvbSBcIi4vU1FMQ29tbWFuZFwiO1xuaW1wb3J0IHsgT3JkZXJCeVJlc3RyaWN0aW9uIH0gZnJvbSBcIi4vcmVzdHJpY3Rpb25zL09yZGVyQnlSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tIFwiLi4vLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yXCI7XG5pbXBvcnQgeyBTUUxpdGVEYXRhYmFzZSB9IGZyb20gXCIuL1NRTGl0ZURhdGFiYXNlXCI7XG5pbXBvcnQgeyBTUUxpdGVEYW8gfSBmcm9tIFwiLi9TUUxpdGVEYW9cIjtcblxuZGVjbGFyZSB2YXIgd2luZG93O1xuXG5leHBvcnQgY2xhc3MgV2ViU1FMRGFvIGV4dGVuZHMgU1FMaXRlRGFvIGltcGxlbWVudHMgSURhbyB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBTUUxpdGVEYXRhYmFzZSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvcGVuRGF0YUJhc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgZnVuY3Rpb24gdGltZW91dChtcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gd2luZG93Lm9wZW5EYXRhYmFzZSh0aGlzLmNvbmZpZy5nZXROYW1lKCksICcxLjAnLCB0aGlzLmNvbmZpZy5nZXROYW1lKCksIDIgKiAxMDI0ICogMTAyNCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3BlbkRhdGFCYXNlOlwiLCB0aGlzLmNvbm5lY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKHR4LCBzY2hlbWE6IE1hcDxzdHJpbmcsIFNRTGl0ZVRhYmxlPiwgdGFibGVfbmFtZSwgdGFibGVfc3FsKSB7XG4gICAgICAgIGxldCB0bXBfY29sQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGNvbHVtblN0ciA9IFtdO1xuICAgICAgICBsZXQgaXNWaWV3ID0gdGFibGVfc3FsLmluZGV4T2YoJ0NSRUFURSBWSUVXJykgPiAtMTtcbiAgICAgICAgaWYgKCFpc1ZpZXcpIHtcbiAgICAgICAgICAgIGNvbHVtblN0ciA9IHRhYmxlX3NxbC5zcGxpdCgnKCcpWzFdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB0bXBfY29sQXJyYXkgPSBjb2x1bW5TdHIubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpc1BLID0geC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoXCJQUklNQVJZIEtFWVwiKSA+IC0xO1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0geC50cmltKCkuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgICAgICAgICBsZXQgaXNBdXRvSW5jcmVtZW50ID0gaXNQSyAmJiAoeC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoXCJBVVRPSU5DUkVNRU5UXCIpID4gLTEpO1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0geC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoXCJJTlRFR0VSXCIpID4gLTEgPyAnSW50ZWdlcicgOiAnVGV4dCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVDb2x1bW4obmFtZSwgdW5kZWZpbmVkLCB0eXBlLCBpc1BLLCBpc0F1dG9JbmNyZW1lbnQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFZJRVdcbiAgICAgICAgICAgIGxldCBtYWluVGFibGVJbmRleCA9IHRhYmxlX3NxbC5zcGxpdCgnICcpLmluZGV4T2YoXCJMRUZUXCIpIC0gMTtcbiAgICAgICAgICAgIGxldCBleHRUYWJsZUluZGV4ID0gbWFpblRhYmxlSW5kZXggKyAzO1xuICAgICAgICAgICAgbGV0IG1haW5UYWJsZU5hbWUgPSB0YWJsZV9zcWwuc3BsaXQoJyAnKVttYWluVGFibGVJbmRleF07XG4gICAgICAgICAgICBsZXQgZXh0VGFibGVOYW1lID0gdGFibGVfc3FsLnNwbGl0KCcgJylbZXh0VGFibGVJbmRleF07XG4gICAgICAgICAgICBsZXQgbWFpblRhYmxlID0gc2NoZW1hLmdldChtYWluVGFibGVOYW1lKTtcbiAgICAgICAgICAgIGxldCBleHRUYWJsZSA9IHNjaGVtYS5nZXQoZXh0VGFibGVOYW1lKTtcbiAgICAgICAgICAgIHRtcF9jb2xBcnJheSA9IFsuLi5tYWluVGFibGUuZ2V0Q29sdW1ucygpLCAuLi5leHRUYWJsZS5nZXRDb2x1bW5zKCldO1xuICAgICAgICAgICAgdG1wX2NvbEFycmF5ID0gdG1wX2NvbEFycmF5LnJlZHVjZSgodW5pcXVlLCBvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bmlxdWUuc29tZShvYmogPT4gb2JqLmdldE5hbWUoKSA9PT0gby5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZS5wdXNoKG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdW5pcXVlO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0YWJsZU9iaiA9IG5ldyBTUUxpdGVUYWJsZSh0YWJsZV9uYW1lLCB0bXBfY29sQXJyYXkpO1xuICAgICAgICBzY2hlbWEuc2V0KHRhYmxlX25hbWUsIHRhYmxlT2JqKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuVHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgbGV0IGJhdGNoQXJyID0gdGhpcy50cmFuc2FjdGlvbkFyci5tYXAoKGNtZCkgPT4gW2NtZC5nZXRTcWwoKSwgY21kLmdldFBhcmFtcygpXSk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdydW4gdHJhbnNhY3Rpb24gU1FMOicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbW1hbmQ6JywgYmF0Y2hBcnIpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLnRyYW5zYWN0aW9uKCh0eCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25BcnIuZm9yRWFjaChjbWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0eC5leGVjdXRlU3FsKGNtZC5nZXRTcWwoKSwgY21kLmdldFBhcmFtcygpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IGZhbHNlLCBtc2c6IGVycm9yLm1lc3NhZ2UgfSwgW10pKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBBUFBFcnJvcihcIkYwMDAxOFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25BcnIgPSBbXTtcbiAgICB9XG59XG4iXX0=