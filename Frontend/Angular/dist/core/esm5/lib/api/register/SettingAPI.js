/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '../../device/sqlite/ClientCustomDao';
var SettingAPI = /** @class */ (function () {
    function SettingAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    SettingAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getSetting';
    };
    /**
     * @return {?}
     */
    SettingAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getPersonalSetting.json';
    };
    /**
     * @return {?}
     */
    SettingAPI.prototype.executeSQL = /**
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
            var settingObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
            /** @type {?} */
            var dao = _this._DaoFactory.getDefaultDao();
            if (settingObj != undefined && dao != undefined) {
                settingObj = ((/** @type {?} */ (settingObj)));
                dao = new ClientCustomDao(dao);
                dao.queryByTable(settingObj).subscribe((/**
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
    return SettingAPI;
}());
export { SettingAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL1NldHRpbmdBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXRFO0lBRUUsb0JBQVksVUFBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsK0JBQVU7OztJQUFWO1FBQ0UsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGdDQUFXOzs7SUFBWDtRQUNFLE9BQU8sdUNBQXVDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELCtCQUFVOzs7SUFBVjtRQUFBLGlCQWlCQztRQWhCQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsVUFBVSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLDJCQUEyQixDQUFDOztnQkFDMUUsR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBRTFDLElBQUksVUFBVSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUMvQyxVQUFVLEdBQUcsQ0FBQyxtQkFBYSxVQUFVLEVBQUEsQ0FBQyxDQUFDO2dCQUN2QyxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxpQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7Ozs7SUFoQ0MsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnLi4vU1FMaXRlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IFNRTGl0ZVRhYmxlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVUYWJsZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL0NsaWVudEN1c3RvbURhbyc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9EYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRTZXR0aW5nJztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFBlcnNvbmFsU2V0dGluZy5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgc2V0dGluZ09iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfUGVyc29uYWxfU2V0dGluZ1wiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcblxuICAgICAgaWYgKHNldHRpbmdPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0dGluZ09iaiA9ICg8U1FMaXRlVGFibGU+c2V0dGluZ09iaik7XG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShzZXR0aW5nT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19