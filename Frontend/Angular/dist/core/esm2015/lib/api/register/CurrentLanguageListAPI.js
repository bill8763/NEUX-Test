/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite';
export class CurrentLanguageListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCurrentLanguageList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCurrentLanguage.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let languageObj = this._DaoFactory.getTable('Profile', "TW_LH_SD_Language");
            /** @type {?} */
            let dao = this._DaoFactory.getDao('Profile');
            if (languageObj != undefined && dao != undefined) {
                languageObj = ((/** @type {?} */ (languageObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(languageObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrentLanguageListAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VycmVudExhbmd1YWdlTGlzdEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL0N1cnJlbnRMYW5ndWFnZUxpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXBELE1BQU07Ozs7SUFFSixZQUFZLFVBQXNCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sdUNBQXVDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7Z0JBQ2hDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7O2dCQUN2RSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBRTVDLElBQUksV0FBVyxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUNoRCxXQUFXLEdBQUcsQ0FBQyxtQkFBYSxXQUFXLEVBQUEsQ0FBQyxDQUFDO2dCQUN6QyxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUMvQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7Ozs7OztJQWhDQyw2Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICcuLi9TUUxpdGVBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlJztcbmltcG9ydCB7U1FMaXRlVGFibGV9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuaW1wb3J0IHtDbGllbnRDdXN0b21EYW99IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuXG5leHBvcnQgY2xhc3MgQ3VycmVudExhbmd1YWdlTGlzdEFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSAsIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9EYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuICBnZXRBUElOYW1lKCkgOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0Q3VycmVudExhbmd1YWdlTGlzdCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0Q3VycmVudExhbmd1YWdlLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBsYW5ndWFnZU9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0VGFibGUoJ1Byb2ZpbGUnLCBcIlRXX0xIX1NEX0xhbmd1YWdlXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGFvKCdQcm9maWxlJyk7XG5cbiAgICAgIGlmIChsYW5ndWFnZU9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBsYW5ndWFnZU9iaiA9ICg8U1FMaXRlVGFibGU+bGFuZ3VhZ2VPYmopO1xuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUobGFuZ3VhZ2VPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=