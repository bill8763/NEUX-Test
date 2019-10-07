/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
var DashboardUpdateToReadAPI = /** @class */ (function () {
    function DashboardUpdateToReadAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    DashboardUpdateToReadAPI.prototype.setMessageType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this._messageType = type;
    };
    /**
     * @param {?} dataCategory
     * @return {?}
     */
    DashboardUpdateToReadAPI.prototype.setMessageDataCategory = /**
     * @param {?} dataCategory
     * @return {?}
     */
    function (dataCategory) {
        this._messageDataCategory = dataCategory;
    };
    /**
     * @return {?}
     */
    DashboardUpdateToReadAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'updateDashboardToRead';
    };
    /**
     * @return {?}
     */
    DashboardUpdateToReadAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    DashboardUpdateToReadAPI.prototype.executeSQL = /**
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
                var messageObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                if (messageObj) {
                    dao = new ClientCustomDao(dao);
                    messageObj = ((/** @type {?} */ (messageObj)));
                    messageObj.addRestriction(new EqualRestriction('MessageCategory', [_this._messageDataCategory]));
                    messageObj.addRestriction(new EqualRestriction('MessageType', [_this._messageType]));
                    messageObj.setValue("Status", 'Reading');
                    dao.updateByTable(messageObj).subscribe((/**
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
    return DashboardUpdateToReadAPI;
}());
export { DashboardUpdateToReadAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DashboardUpdateToReadAPI.prototype._messageType;
    /**
     * @type {?}
     * @private
     */
    DashboardUpdateToReadAPI.prototype._messageDataCategory;
    /**
     * @type {?}
     * @private
     */
    DashboardUpdateToReadAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvYXBpL0Rhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEyQyxlQUFlLEVBQWMsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBS0ksa0NBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7Ozs7SUFFTSxpREFBYzs7OztJQUFyQixVQUFzQixJQUFJO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU0seURBQXNCOzs7O0lBQTdCLFVBQThCLFlBQVk7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFlBQVksQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsNkNBQVU7OztJQUFWO1FBQ0ksT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0ksT0FBTyxnQ0FBZ0MsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQUEsaUJBa0NDO1FBaENHLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUMxQixHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFOzs7b0JBR2QsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO2dCQUNwRSxJQUFJLFVBQVUsRUFBRTtvQkFDWixHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRS9CLFVBQVUsR0FBRyxDQUFDLG1CQUFhLFVBQVUsRUFBQSxDQUFDLENBQUM7b0JBRXZDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0YsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGFBQWEsRUFBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUV6QyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsVUFBQyxJQUFJO3dCQUV6QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hCLENBQUMsRUFBQyxDQUFDO2lCQUNOO3FCQUNJO29CQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkI7YUFFSjtpQkFDSTtnQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQUE5REQsSUE4REM7Ozs7Ozs7SUE1REcsZ0RBQThCOzs7OztJQUM5Qix3REFBc0M7Ozs7O0lBRTFCLDhDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBTUUxpdGVUYWJsZSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHByaXZhdGUgX21lc3NhZ2VUeXBlIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX21lc3NhZ2VEYXRhQ2F0ZWdvcnkgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNZXNzYWdlVHlwZSh0eXBlKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VUeXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TWVzc2FnZURhdGFDYXRlZ29yeShkYXRhQ2F0ZWdvcnkpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZURhdGFDYXRlZ29yeSA9IGRhdGFDYXRlZ29yeTtcbiAgICB9XG5cblxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3VwZGF0ZURhc2hib2FyZFRvUmVhZCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfTWVzc2FnZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZU9iaikge1xuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iaiA9ICg8U1FMaXRlVGFibGU+bWVzc2FnZU9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignTWVzc2FnZUNhdGVnb3J5JyxbdGhpcy5fbWVzc2FnZURhdGFDYXRlZ29yeV0pKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignTWVzc2FnZVR5cGUnLFt0aGlzLl9tZXNzYWdlVHlwZV0pKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIlN0YXR1c1wiLCAnUmVhZGluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhby51cGRhdGVCeVRhYmxlKG1lc3NhZ2VPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==