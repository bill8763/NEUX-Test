/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
import { NotEqualRestriction } from "./restrictions/NotEqualRestriction";
import { v4 as uuid } from 'uuid';
var ClientCustomDao = /** @class */ (function () {
    function ClientCustomDao(dao) {
        this.baseDao = dao;
    }
    /**
     * @return {?}
     */
    ClientCustomDao.prototype.openDataBase = /**
     * @return {?}
     */
    function () {
        return this.baseDao.openDataBase();
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    ClientCustomDao.prototype.queryByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        if (tableObject.hasColumn('IsDelete')) {
            tableObject.addRestriction(new NotEqualRestriction("IsDelete", ["Y"]));
        }
        return this.baseDao.queryByTable(tableObject);
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    ClientCustomDao.prototype.insertByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        var _this = this;
        /** @type {?} */
        var clientID = uuid();
        if (tableObject.getValue('ClientID') == ''
            || tableObject.getValue('ClientID') == undefined) {
            tableObject.setValue("ClientID", clientID);
        }
        tableObject.setValue("ClientTime", new Date().getTime());
        tableObject.setValue("DataSource", "APP");
        tableObject.setValue("IsDelete", "N");
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.baseDao.insertByTable(tableObject).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                resp.Header.clientID = clientID;
                observer.next(resp);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    ClientCustomDao.prototype.updateByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        tableObject.setValue("ClientTime", new Date().getTime());
        return this.baseDao.updateByTable(tableObject);
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    ClientCustomDao.prototype.deleteByTable = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        tableObject.setValue("IsDelete", "Y");
        tableObject.setValue("ClientTime", new Date().getTime());
        return this.baseDao.updateByTable(tableObject);
    };
    /**
     * @param {?} sql_command
     * @return {?}
     */
    ClientCustomDao.prototype.excuteSqlCommand = /**
     * @param {?} sql_command
     * @return {?}
     */
    function (sql_command) {
        return this.baseDao.excuteSqlCommand(sql_command);
    };
    /**
     * @return {?}
     */
    ClientCustomDao.prototype.getSchema = /**
     * @return {?}
     */
    function () {
        return this.baseDao.getSchema();
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    ClientCustomDao.prototype.transactionInsert = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        if (tableObject.getValue('ClientID') == ''
            || tableObject.getValue('ClientID') == undefined) {
            tableObject.setValue("ClientID", uuid());
        }
        tableObject.setValue("ClientTime", new Date().getTime());
        tableObject.setValue("DataSource", "APP");
        tableObject.setValue("IsDelete", "N");
        this.baseDao.transactionInsert(tableObject);
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    ClientCustomDao.prototype.transactionUpdate = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        tableObject.setValue("ClientTime", new Date().getTime());
        this.baseDao.transactionUpdate(tableObject);
    };
    /**
     * @param {?} tableObject
     * @return {?}
     */
    ClientCustomDao.prototype.transactionDelete = /**
     * @param {?} tableObject
     * @return {?}
     */
    function (tableObject) {
        tableObject.setValue("IsDelete", "Y");
        tableObject.setValue("ClientTime", new Date().getTime());
        this.baseDao.transactionUpdate(tableObject);
    };
    /**
     * @param {?} command
     * @return {?}
     */
    ClientCustomDao.prototype.transactionSqlCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.baseDao.transactionSqlCommand(command);
    };
    /**
     * @return {?}
     */
    ClientCustomDao.prototype.runTransaction = /**
     * @return {?}
     */
    function () {
        return this.baseDao.runTransaction();
    };
    /**
     * @return {?}
     */
    ClientCustomDao.prototype.clearTransaction = /**
     * @return {?}
     */
    function () {
        return this.baseDao.clearTransaction();
    };
    return ClientCustomDao;
}());
export { ClientCustomDao };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClientCustomDao.prototype.baseDao;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50Q3VzdG9tRGFvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL0NsaWVudEN1c3RvbURhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9sQztJQUVJLHlCQUFZLEdBQUc7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sc0NBQVk7OztJQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVNLHNDQUFZOzs7O0lBQW5CLFVBQW9CLFdBQXdCO1FBQ3hDLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNuQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVNLHVDQUFhOzs7O0lBQXBCLFVBQXFCLFdBQXdCO1FBQTdDLGlCQWlCQzs7WUFoQk8sUUFBUSxHQUFHLElBQUksRUFBRTtRQUNyQixJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtlQUNuQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUNsRCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QztRQUVELFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN6RCxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFRO1lBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLElBQUk7Z0JBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7OztJQUVNLHVDQUFhOzs7O0lBQXBCLFVBQXFCLFdBQXdCO1FBQ3pDLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU0sdUNBQWE7Ozs7SUFBcEIsVUFBcUIsV0FBd0I7UUFDekMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTSwwQ0FBZ0I7Ozs7SUFBdkIsVUFBd0IsV0FBOEI7UUFDbEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFTSxtQ0FBUzs7O0lBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sMkNBQWlCOzs7O0lBQXhCLFVBQXlCLFdBQXdCO1FBQzdDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO2VBQ25DLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxFQUFFO1lBQ2xELFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFFRCxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLDJDQUFpQjs7OztJQUF4QixVQUF5QixXQUF3QjtRQUM3QyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLDJDQUFpQjs7OztJQUF4QixVQUF5QixXQUF3QjtRQUM3QyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLCtDQUFxQjs7OztJQUE1QixVQUE2QixPQUFtQjtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFTSx3Q0FBYzs7O0lBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFTSwwQ0FBZ0I7OztJQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7Ozs7Ozs7SUF6Rkcsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURhbyB9IGZyb20gXCIuL0Rhby5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSBcIi4vU1FMaXRlVGFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTm90RXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuL3Jlc3RyaWN0aW9ucy9Ob3RFcXVhbFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBTUUxDb21tYW5kIH0gZnJvbSBcIi4vU1FMQ29tbWFuZFwiO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiLi9TUUxpdGVSZXNwb25zZVwiO1xuXG5cblxuXG5leHBvcnQgY2xhc3MgQ2xpZW50Q3VzdG9tRGFvIGltcGxlbWVudHMgSURhbyB7XG4gICAgcHJpdmF0ZSBiYXNlRGFvOiBJRGFvO1xuICAgIGNvbnN0cnVjdG9yKGRhbykge1xuICAgICAgICB0aGlzLmJhc2VEYW8gPSBkYW87XG4gICAgfVxuICAgIHB1YmxpYyBvcGVuRGF0YUJhc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VEYW8ub3BlbkRhdGFCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHF1ZXJ5QnlUYWJsZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpOiBPYnNlcnZhYmxlPFNRTGl0ZVJlc3BvbnNlPiB7XG4gICAgICAgIGlmICh0YWJsZU9iamVjdC5oYXNDb2x1bW4oJ0lzRGVsZXRlJykpIHtcbiAgICAgICAgICAgIHRhYmxlT2JqZWN0LmFkZFJlc3RyaWN0aW9uKG5ldyBOb3RFcXVhbFJlc3RyaWN0aW9uKFwiSXNEZWxldGVcIiwgW1wiWVwiXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZURhby5xdWVyeUJ5VGFibGUodGFibGVPYmplY3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnNlcnRCeVRhYmxlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgIGlmICh0YWJsZU9iamVjdC5nZXRWYWx1ZSgnQ2xpZW50SUQnKSA9PSAnJ1xuICAgICAgICAgICAgfHwgdGFibGVPYmplY3QuZ2V0VmFsdWUoJ0NsaWVudElEJykgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiQ2xpZW50VGltZVwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiRGF0YVNvdXJjZVwiLCBcIkFQUFwiKTtcbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJJc0RlbGV0ZVwiLCBcIk5cIik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFzZURhby5pbnNlcnRCeVRhYmxlKHRhYmxlT2JqZWN0KS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICByZXNwLkhlYWRlci5jbGllbnRJRCA9IGNsaWVudElEO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCeVRhYmxlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSk6IE9ic2VydmFibGU8U1FMaXRlUmVzcG9uc2U+IHtcbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJDbGllbnRUaW1lXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZURhby51cGRhdGVCeVRhYmxlKHRhYmxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlQnlUYWJsZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpOiBPYnNlcnZhYmxlPFNRTGl0ZVJlc3BvbnNlPiB7XG4gICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiSXNEZWxldGVcIiwgXCJZXCIpO1xuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlRGFvLnVwZGF0ZUJ5VGFibGUodGFibGVPYmplY3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBleGN1dGVTcWxDb21tYW5kKHNxbF9jb21tYW5kOiBBcnJheTxTUUxDb21tYW5kPikge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlRGFvLmV4Y3V0ZVNxbENvbW1hbmQoc3FsX2NvbW1hbmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VEYW8uZ2V0U2NoZW1hKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zYWN0aW9uSW5zZXJ0KHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICBpZiAodGFibGVPYmplY3QuZ2V0VmFsdWUoJ0NsaWVudElEJykgPT0gJydcbiAgICAgICAgICAgIHx8IHRhYmxlT2JqZWN0LmdldFZhbHVlKCdDbGllbnRJRCcpID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJDbGllbnRJRFwiLCB1dWlkKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJDbGllbnRUaW1lXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJEYXRhU291cmNlXCIsIFwiQVBQXCIpO1xuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIklzRGVsZXRlXCIsIFwiTlwiKTtcblxuICAgICAgICB0aGlzLmJhc2VEYW8udHJhbnNhY3Rpb25JbnNlcnQodGFibGVPYmplY3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2FjdGlvblVwZGF0ZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpIHtcbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJDbGllbnRUaW1lXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgdGhpcy5iYXNlRGFvLnRyYW5zYWN0aW9uVXBkYXRlKHRhYmxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb25EZWxldGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiSXNEZWxldGVcIiwgXCJZXCIpO1xuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICB0aGlzLmJhc2VEYW8udHJhbnNhY3Rpb25VcGRhdGUodGFibGVPYmplY3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2FjdGlvblNxbENvbW1hbmQoY29tbWFuZDogU1FMQ29tbWFuZCkge1xuICAgICAgICB0aGlzLmJhc2VEYW8udHJhbnNhY3Rpb25TcWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBydW5UcmFuc2FjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZURhby5ydW5UcmFuc2FjdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclRyYW5zYWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlRGFvLmNsZWFyVHJhbnNhY3Rpb24oKTtcbiAgICB9XG59XG4iXX0=