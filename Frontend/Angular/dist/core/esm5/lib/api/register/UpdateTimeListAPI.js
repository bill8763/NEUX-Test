/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
var UpdateTimeListAPI = /** @class */ (function () {
    function UpdateTimeListAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    UpdateTimeListAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getUpdateTimeList';
    };
    /**
     * @return {?}
     */
    UpdateTimeListAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return "./assets/mock/getUpdateTimeList.json";
    };
    /**
     * @return {?}
     */
    UpdateTimeListAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var dataSyncObj = _this._DaoFactory.getTable('Profile', "TW_LH_SD_VW_FuncSync_Time");
            /** @type {?} */
            var dao = _this._DaoFactory.getDao('Profile');
            if (dataSyncObj != undefined && dao != undefined) {
                dataSyncObj = ((/** @type {?} */ (dataSyncObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(dataSyncObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    return UpdateTimeListAPI;
}());
export { UpdateTimeListAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdateTimeListAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlVGltZUxpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9VcGRhdGVUaW1lTGlzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU1sQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdEU7SUFFRSwyQkFBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxzQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLHNDQUFzQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFHRCxzQ0FBVTs7O0lBQVY7UUFBQSxpQkFnQkM7UUFmQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSwyQkFBMkIsQ0FBQzs7Z0JBQy9FLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDNUMsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2hELFdBQVcsR0FBRyxDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUM7Z0JBQ3pDLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7Ozs7OztJQS9CQyx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICcuLi9TUUxpdGVBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnknO1xuaW1wb3J0IHsgU1FMaXRlVGFibGUgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVRhYmxlJztcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbyB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvQ2xpZW50Q3VzdG9tRGFvJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVRpbWVMaXN0QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9EYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRVcGRhdGVUaW1lTGlzdCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIi4vYXNzZXRzL21vY2svZ2V0VXBkYXRlVGltZUxpc3QuanNvblwiO1xuICB9XG5cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGRhdGFTeW5jT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsIFwiVFdfTEhfU0RfVldfRnVuY1N5bmNfVGltZVwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERhbygnUHJvZmlsZScpO1xuICAgICAgaWYgKGRhdGFTeW5jT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhdGFTeW5jT2JqID0gKDxTUUxpdGVUYWJsZT5kYXRhU3luY09iaik7XG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShkYXRhU3luY09iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=