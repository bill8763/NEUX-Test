/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
import { ClientCustomDao, EqualRestriction } from "../../device";
var SettingUpdateAPI = /** @class */ (function () {
    function SettingUpdateAPI(DaoFactory) {
        this.DaoFactory = DaoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SettingUpdateAPI.prototype.setSettingObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._settingObject = value;
    };
    /**
     * @return {?}
     */
    SettingUpdateAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'updateSetting';
    };
    /**
     * @return {?}
     */
    SettingUpdateAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getPersonalSetting.json';
    };
    /**
     * @return {?}
     */
    SettingUpdateAPI.prototype.executeSQL = /**
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
            var settingObj = _this.DaoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
            /** @type {?} */
            var dao = _this.DaoFactory.getDefaultDao();
            if (settingObj != undefined && dao != undefined) {
                settingObj = ((/** @type {?} */ (settingObj)));
                dao = new ClientCustomDao(dao);
                settingObj.addRestriction(new EqualRestriction('SettingID', [_this._settingObject.SettingID]));
                settingObj.setValue('SettingVal', _this._settingObject.SettingVal);
                dao.updateByTable(settingObj).subscribe((/**
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
    return SettingUpdateAPI;
}());
export { SettingUpdateAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingUpdateAPI.prototype._settingObject;
    /**
     * @type {?}
     * @private
     */
    SettingUpdateAPI.prototype.DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ1VwZGF0ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL1NldHRpbmdVcGRhdGVBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUEyQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUY7SUFFSSwwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7Ozs7O0lBSS9DLDJDQUFnQjs7OztJQUFoQixVQUFpQixLQUFjO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0ksT0FBTyx1Q0FBdUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQscUNBQVU7OztJQUFWO1FBQUEsaUJBb0JDO1FBbkJHLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUMxQixVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O2dCQUN6RSxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFFekMsSUFBSSxVQUFVLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBQzdDLFVBQVUsR0FBRyxDQUFDLG1CQUFhLFVBQVUsRUFBQSxDQUFDLENBQUM7Z0JBQ3ZDLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVsRSxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxJQUFJO29CQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDOzs7Ozs7O0lBcENHLDBDQUFnQzs7Ozs7SUFGcEIsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTZXR0aW5nIH0gZnJvbSBcIi4uLy4uL2JlYW5cIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSwgU1FMaXRlVGFibGUsIENsaWVudEN1c3RvbURhbywgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdVcGRhdGVBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHsgfVxuXG4gICAgcHJpdmF0ZSBfc2V0dGluZ09iamVjdDogU2V0dGluZztcblxuICAgIHNldFNldHRpbmdPYmplY3QodmFsdWU6IFNldHRpbmcpIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ09iamVjdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICd1cGRhdGVTZXR0aW5nJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0UGVyc29uYWxTZXR0aW5nLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHNldHRpbmdPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfUGVyc29uYWxfU2V0dGluZ1wiKTtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ09iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdPYmogPSAoPFNRTGl0ZVRhYmxlPnNldHRpbmdPYmopO1xuICAgICAgICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgICAgICAgICBzZXR0aW5nT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdTZXR0aW5nSUQnLCBbdGhpcy5fc2V0dGluZ09iamVjdC5TZXR0aW5nSURdKSk7XG4gICAgICAgICAgICAgICAgc2V0dGluZ09iai5zZXRWYWx1ZSgnU2V0dGluZ1ZhbCcsIHRoaXMuX3NldHRpbmdPYmplY3QuU2V0dGluZ1ZhbCk7XG5cbiAgICAgICAgICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShzZXR0aW5nT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=