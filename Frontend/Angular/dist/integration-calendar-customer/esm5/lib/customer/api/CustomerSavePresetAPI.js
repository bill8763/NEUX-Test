/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerSavePresetAPI = /** @class */ (function () {
    function CustomerSavePresetAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    CustomerSavePresetAPI.prototype.setFilterCriteria = /**
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        this._criteria = criteria;
    };
    /**
     * @return {?}
     */
    CustomerSavePresetAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveCustomerFilterPreset';
    };
    /**
     * @return {?}
     */
    CustomerSavePresetAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    CustomerSavePresetAPI.prototype.executeSQL = /**
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
            var dao = _this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                var setting = _this.daoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
                if (setting) {
                    dao = new ClientCustomDao(dao);
                    setting = ((/** @type {?} */ (setting)));
                    setting.addRestriction(new EqualRestriction('SettingID', ['CustomerFilterSetting']));
                    setting.setValue("SettingVal", JSON.stringify(_this._criteria.toPresetJSON()));
                    dao.updateByTable(setting).subscribe((/**
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
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    return CustomerSavePresetAPI;
}());
export { CustomerSavePresetAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSavePresetAPI.prototype._criteria;
    /**
     * @type {?}
     * @private
     */
    CustomerSavePresetAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTYXZlUHJlc2V0QVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvYXBpL0N1c3RvbWVyU2F2ZVByZXNldEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEyQyxlQUFlLEVBQWMsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBSUksK0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsUUFBZ0M7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNJLE9BQU8sMEJBQTBCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNJLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUFBLGlCQWdDQztRQTlCRyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDMUIsR0FBRyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTs7O29CQUdkLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDMUUsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUUvQixPQUFPLEdBQUcsQ0FBQyxtQkFBYSxPQUFPLEVBQUEsQ0FBQyxDQUFDO29CQUVqQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BGLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRTdFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxFQUFDLENBQUM7aUJBQ047cUJBQ0k7b0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUN2QjthQUVKO2lCQUNJO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQzs7Ozs7OztJQW5ERywwQ0FBMEM7Ozs7O0lBRTlCLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBTUUxpdGVUYWJsZSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTYXZlUHJlc2V0QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHJpdmF0ZSBfY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWE7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHNldEZpbHRlckNyaXRlcmlhKGNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhKSB7XG4gICAgICAgIHRoaXMuX2NyaXRlcmlhID0gY3JpdGVyaWE7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3NhdmVDdXN0b21lckZpbHRlclByZXNldCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IHNldHRpbmcgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfUGVyc29uYWxfU2V0dGluZ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZykge1xuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZyA9ICg8U1FMaXRlVGFibGU+c2V0dGluZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignU2V0dGluZ0lEJyxbJ0N1c3RvbWVyRmlsdGVyU2V0dGluZyddKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0VmFsdWUoXCJTZXR0aW5nVmFsXCIsSlNPTi5zdHJpbmdpZnkodGhpcy5fY3JpdGVyaWEudG9QcmVzZXRKU09OKCkpKTtcblxuICAgICAgICAgICAgICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShzZXR0aW5nKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19