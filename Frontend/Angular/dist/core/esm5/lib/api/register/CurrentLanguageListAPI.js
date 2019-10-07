/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite';
var CurrentLanguageListAPI = /** @class */ (function () {
    function CurrentLanguageListAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    CurrentLanguageListAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCurrentLanguageList';
    };
    /**
     * @return {?}
     */
    CurrentLanguageListAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCurrentLanguage.json';
    };
    /**
     * @return {?}
     */
    CurrentLanguageListAPI.prototype.executeSQL = /**
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
            var languageObj = _this._DaoFactory.getTable('Profile', "TW_LH_SD_Language");
            /** @type {?} */
            var dao = _this._DaoFactory.getDao('Profile');
            if (languageObj != undefined && dao != undefined) {
                languageObj = ((/** @type {?} */ (languageObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(languageObj).subscribe((/**
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
    return CurrentLanguageListAPI;
}());
export { CurrentLanguageListAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrentLanguageListAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VycmVudExhbmd1YWdlTGlzdEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL0N1cnJlbnRMYW5ndWFnZUxpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXBEO0lBRUUsZ0NBQVksVUFBc0I7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLE9BQU8sdUNBQXVDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUFBLGlCQWlCQztRQWhCQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQzs7Z0JBQ3ZFLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFFNUMsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2hELFdBQVcsR0FBRyxDQUFDLG1CQUFhLFdBQVcsRUFBQSxDQUFDLENBQUM7Z0JBQ3pDLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILDZCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7OztJQWhDQyw2Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICcuLi9TUUxpdGVBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlJztcbmltcG9ydCB7U1FMaXRlVGFibGV9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuaW1wb3J0IHtDbGllbnRDdXN0b21EYW99IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuXG5leHBvcnQgY2xhc3MgQ3VycmVudExhbmd1YWdlTGlzdEFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSAsIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9EYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuICBnZXRBUElOYW1lKCkgOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0Q3VycmVudExhbmd1YWdlTGlzdCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0Q3VycmVudExhbmd1YWdlLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBsYW5ndWFnZU9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0VGFibGUoJ1Byb2ZpbGUnLCBcIlRXX0xIX1NEX0xhbmd1YWdlXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGFvKCdQcm9maWxlJyk7XG5cbiAgICAgIGlmIChsYW5ndWFnZU9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBsYW5ndWFnZU9iaiA9ICg8U1FMaXRlVGFibGU+bGFuZ3VhZ2VPYmopO1xuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUobGFuZ3VhZ2VPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=