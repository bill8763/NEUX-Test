/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
import { ClientCustomDao, EqualRestriction } from "../../device";
export class SettingUpdateAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this.DaoFactory = DaoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSettingObject(value) {
        this._settingObject = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateSetting';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getPersonalSetting.json';
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
            let settingObj = this.DaoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            if (settingObj != undefined && dao != undefined) {
                settingObj = ((/** @type {?} */ (settingObj)));
                dao = new ClientCustomDao(dao);
                settingObj.addRestriction(new EqualRestriction('SettingID', [this._settingObject.SettingID]));
                settingObj.setValue('SettingVal', this._settingObject.SettingVal);
                dao.updateByTable(settingObj).subscribe((/**
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
    SettingUpdateAPI.prototype._settingObject;
    /**
     * @type {?}
     * @private
     */
    SettingUpdateAPI.prototype.DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ1VwZGF0ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL1NldHRpbmdVcGRhdGVBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUEyQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUYsTUFBTTs7OztJQUVGLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOzs7OztJQUkvQyxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLHVDQUF1QyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLENBQUM7O2dCQUN6RSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFFekMsSUFBSSxVQUFVLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBQzdDLFVBQVUsR0FBRyxDQUFDLG1CQUFhLFVBQVUsRUFBQSxDQUFDLENBQUM7Z0JBQ3ZDLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVsRSxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKOzs7Ozs7SUFwQ0csMENBQWdDOzs7OztJQUZwQixzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNldHRpbmcgfSBmcm9tIFwiLi4vLi4vYmVhblwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5LCBTUUxpdGVUYWJsZSwgQ2xpZW50Q3VzdG9tRGFvLCBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZVwiO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ1VwZGF0ZUFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgRGFvRmFjdG9yeTogRGFvRmFjdG9yeSkgeyB9XG5cbiAgICBwcml2YXRlIF9zZXR0aW5nT2JqZWN0OiBTZXR0aW5nO1xuXG4gICAgc2V0U2V0dGluZ09iamVjdCh2YWx1ZTogU2V0dGluZykge1xuICAgICAgICB0aGlzLl9zZXR0aW5nT2JqZWN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3VwZGF0ZVNldHRpbmcnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRQZXJzb25hbFNldHRpbmcuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2V0dGluZ09iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9QZXJzb25hbF9TZXR0aW5nXCIpO1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG5cbiAgICAgICAgICAgIGlmIChzZXR0aW5nT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ09iaiA9ICg8U1FMaXRlVGFibGU+c2V0dGluZ09iaik7XG4gICAgICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuICAgICAgICAgICAgICAgIHNldHRpbmdPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ1NldHRpbmdJRCcsIFt0aGlzLl9zZXR0aW5nT2JqZWN0LlNldHRpbmdJRF0pKTtcbiAgICAgICAgICAgICAgICBzZXR0aW5nT2JqLnNldFZhbHVlKCdTZXR0aW5nVmFsJywgdGhpcy5fc2V0dGluZ09iamVjdC5TZXR0aW5nVmFsKTtcblxuICAgICAgICAgICAgICAgIGRhby51cGRhdGVCeVRhYmxlKHNldHRpbmdPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==