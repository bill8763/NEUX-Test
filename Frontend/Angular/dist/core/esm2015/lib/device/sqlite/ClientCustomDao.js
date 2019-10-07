/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
import { NotEqualRestriction } from "./restrictions/NotEqualRestriction";
import { v4 as uuid } from 'uuid';
export class ClientCustomDao {
    /**
     * @param {?} dao
     */
    constructor(dao) {
        this.baseDao = dao;
    }
    /**
     * @return {?}
     */
    openDataBase() {
        return this.baseDao.openDataBase();
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    queryByTable(tableObject) {
        if (tableObject.hasColumn('IsDelete')) {
            tableObject.addRestriction(new NotEqualRestriction("IsDelete", ["Y"]));
        }
        return this.baseDao.queryByTable(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    insertByTable(tableObject) {
        /** @type {?} */
        let clientID = uuid();
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
        (observer) => {
            this.baseDao.insertByTable(tableObject).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                resp.Header.clientID = clientID;
                observer.next(resp);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    updateByTable(tableObject) {
        tableObject.setValue("ClientTime", new Date().getTime());
        return this.baseDao.updateByTable(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    deleteByTable(tableObject) {
        tableObject.setValue("IsDelete", "Y");
        tableObject.setValue("ClientTime", new Date().getTime());
        return this.baseDao.updateByTable(tableObject);
    }
    /**
     * @param {?} sql_command
     * @return {?}
     */
    excuteSqlCommand(sql_command) {
        return this.baseDao.excuteSqlCommand(sql_command);
    }
    /**
     * @return {?}
     */
    getSchema() {
        return this.baseDao.getSchema();
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionInsert(tableObject) {
        if (tableObject.getValue('ClientID') == ''
            || tableObject.getValue('ClientID') == undefined) {
            tableObject.setValue("ClientID", uuid());
        }
        tableObject.setValue("ClientTime", new Date().getTime());
        tableObject.setValue("DataSource", "APP");
        tableObject.setValue("IsDelete", "N");
        this.baseDao.transactionInsert(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionUpdate(tableObject) {
        tableObject.setValue("ClientTime", new Date().getTime());
        this.baseDao.transactionUpdate(tableObject);
    }
    /**
     * @param {?} tableObject
     * @return {?}
     */
    transactionDelete(tableObject) {
        tableObject.setValue("IsDelete", "Y");
        tableObject.setValue("ClientTime", new Date().getTime());
        this.baseDao.transactionUpdate(tableObject);
    }
    /**
     * @param {?} command
     * @return {?}
     */
    transactionSqlCommand(command) {
        this.baseDao.transactionSqlCommand(command);
    }
    /**
     * @return {?}
     */
    runTransaction() {
        return this.baseDao.runTransaction();
    }
    /**
     * @return {?}
     */
    clearTransaction() {
        return this.baseDao.clearTransaction();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClientCustomDao.prototype.baseDao;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50Q3VzdG9tRGFvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL0NsaWVudEN1c3RvbURhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9sQyxNQUFNOzs7O0lBRUYsWUFBWSxHQUFHO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsV0FBd0I7UUFDeEMsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUU7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLFdBQXdCOztZQUNyQyxRQUFRLEdBQUcsSUFBSSxFQUFFO1FBQ3JCLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO2VBQ25DLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxFQUFFO1lBQ2xELFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsV0FBd0I7UUFDekMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsV0FBd0I7UUFDekMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxXQUE4QjtRQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVNLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxXQUF3QjtRQUM3QyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtlQUNuQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUNsRCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxXQUF3QjtRQUM3QyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLFdBQXdCO1FBQzdDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRU0scUJBQXFCLENBQUMsT0FBbUI7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRU0sY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVNLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7Ozs7OztJQXpGRyxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGFvIH0gZnJvbSBcIi4vRGFvLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU1FMaXRlVGFibGUgfSBmcm9tIFwiLi9TUUxpdGVUYWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBOb3RFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4vcmVzdHJpY3Rpb25zL05vdEVxdWFsUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IFNRTENvbW1hbmQgfSBmcm9tIFwiLi9TUUxDb21tYW5kXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBDbGllbnRDdXN0b21EYW8gaW1wbGVtZW50cyBJRGFvIHtcbiAgICBwcml2YXRlIGJhc2VEYW86IElEYW87XG4gICAgY29uc3RydWN0b3IoZGFvKSB7XG4gICAgICAgIHRoaXMuYmFzZURhbyA9IGRhbztcbiAgICB9XG4gICAgcHVibGljIG9wZW5EYXRhQmFzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZURhby5vcGVuRGF0YUJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcXVlcnlCeVRhYmxlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSk6IE9ic2VydmFibGU8U1FMaXRlUmVzcG9uc2U+IHtcbiAgICAgICAgaWYgKHRhYmxlT2JqZWN0Lmhhc0NvbHVtbignSXNEZWxldGUnKSkge1xuICAgICAgICAgICAgdGFibGVPYmplY3QuYWRkUmVzdHJpY3Rpb24obmV3IE5vdEVxdWFsUmVzdHJpY3Rpb24oXCJJc0RlbGV0ZVwiLCBbXCJZXCJdKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlRGFvLnF1ZXJ5QnlUYWJsZSh0YWJsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluc2VydEJ5VGFibGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgaWYgKHRhYmxlT2JqZWN0LmdldFZhbHVlKCdDbGllbnRJRCcpID09ICcnXG4gICAgICAgICAgICB8fCB0YWJsZU9iamVjdC5nZXRWYWx1ZSgnQ2xpZW50SUQnKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJDbGllbnRUaW1lXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJEYXRhU291cmNlXCIsIFwiQVBQXCIpO1xuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIklzRGVsZXRlXCIsIFwiTlwiKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYXNlRGFvLmluc2VydEJ5VGFibGUodGFibGVPYmplY3QpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3AuSGVhZGVyLmNsaWVudElEID0gY2xpZW50SUQ7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJ5VGFibGUodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKTogT2JzZXJ2YWJsZTxTUUxpdGVSZXNwb25zZT4ge1xuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlRGFvLnVwZGF0ZUJ5VGFibGUodGFibGVPYmplY3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVCeVRhYmxlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSk6IE9ic2VydmFibGU8U1FMaXRlUmVzcG9uc2U+IHtcbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJJc0RlbGV0ZVwiLCBcIllcIik7XG4gICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiQ2xpZW50VGltZVwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VEYW8udXBkYXRlQnlUYWJsZSh0YWJsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4Y3V0ZVNxbENvbW1hbmQoc3FsX2NvbW1hbmQ6IEFycmF5PFNRTENvbW1hbmQ+KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VEYW8uZXhjdXRlU3FsQ29tbWFuZChzcWxfY29tbWFuZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZURhby5nZXRTY2hlbWEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb25JbnNlcnQodGFibGVPYmplY3Q6IFNRTGl0ZVRhYmxlKSB7XG4gICAgICAgIGlmICh0YWJsZU9iamVjdC5nZXRWYWx1ZSgnQ2xpZW50SUQnKSA9PSAnJ1xuICAgICAgICAgICAgfHwgdGFibGVPYmplY3QuZ2V0VmFsdWUoJ0NsaWVudElEJykgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIHV1aWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkRhdGFTb3VyY2VcIiwgXCJBUFBcIik7XG4gICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiSXNEZWxldGVcIiwgXCJOXCIpO1xuXG4gICAgICAgIHRoaXMuYmFzZURhby50cmFuc2FjdGlvbkluc2VydCh0YWJsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zYWN0aW9uVXBkYXRlKHRhYmxlT2JqZWN0OiBTUUxpdGVUYWJsZSkge1xuICAgICAgICB0YWJsZU9iamVjdC5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICB0aGlzLmJhc2VEYW8udHJhbnNhY3Rpb25VcGRhdGUodGFibGVPYmplY3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2FjdGlvbkRlbGV0ZSh0YWJsZU9iamVjdDogU1FMaXRlVGFibGUpIHtcbiAgICAgICAgdGFibGVPYmplY3Quc2V0VmFsdWUoXCJJc0RlbGV0ZVwiLCBcIllcIik7XG4gICAgICAgIHRhYmxlT2JqZWN0LnNldFZhbHVlKFwiQ2xpZW50VGltZVwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgIHRoaXMuYmFzZURhby50cmFuc2FjdGlvblVwZGF0ZSh0YWJsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zYWN0aW9uU3FsQ29tbWFuZChjb21tYW5kOiBTUUxDb21tYW5kKSB7XG4gICAgICAgIHRoaXMuYmFzZURhby50cmFuc2FjdGlvblNxbENvbW1hbmQoY29tbWFuZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJ1blRyYW5zYWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlRGFvLnJ1blRyYW5zYWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVHJhbnNhY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VEYW8uY2xlYXJUcmFuc2FjdGlvbigpO1xuICAgIH1cbn1cbiJdfQ==