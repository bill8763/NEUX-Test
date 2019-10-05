/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction, ClientCustomDao, OrderByRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
var GoalSettingGetYearConfigAPI = /** @class */ (function () {
    function GoalSettingGetYearConfigAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    GoalSettingGetYearConfigAPI.prototype.setDataYear = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        this._dataYear = dataYear;
    };
    /**
     * @return {?}
     */
    GoalSettingGetYearConfigAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getGoalSettingYearConfig';
    };
    /**
     * @return {?}
     */
    GoalSettingGetYearConfigAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingYearConfig_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingYearConfig_2020.json';
        }
        else if (this._dataYear == -1) {
            return './assets/mock/getGoalSettingYearConfig_all.json';
        }
        else {
            console.warn("yearConfig dataYear not match");
            return '';
        }
    };
    /**
     * @return {?}
     */
    GoalSettingGetYearConfigAPI.prototype.executeSQL = /**
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
                /** @type {?} */
                var yearConfigObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Year_Config");
                if (yearConfigObj) {
                    if (_this._dataYear != -1) {
                        yearConfigObj.addRestriction(new EqualRestriction('DataYear', [_this._dataYear]));
                    }
                    yearConfigObj.addRestriction(new OrderByRestriction([{ column: 'DataYear', order: 'ASC' }]));
                    dao = new ClientCustomDao(dao);
                    dao.queryByTable(yearConfigObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        console.warn("queryByTable yearConfig: ", JSON.stringify(resp));
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
    return GoalSettingGetYearConfigAPI;
}());
export { GoalSettingGetYearConfigAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetYearConfigAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetYearConfigAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRZZWFyQ29uZmlnQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvR29hbFNldHRpbmdHZXRZZWFyQ29uZmlnQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVELGdCQUFnQixFQUFlLGVBQWUsRUFBaUQsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxTSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBR0kscUNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFJbEMsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFBO0lBRjlCLENBQUM7Ozs7O0lBR0QsaURBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxnREFBVTs7O0lBQVY7UUFDSSxPQUFPLDBCQUEwQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sa0RBQWtELENBQUM7U0FDN0Q7YUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzVCLE9BQU8sa0RBQWtELENBQUM7U0FDN0Q7YUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxpREFBaUQsQ0FBQztTQUM1RDthQUVJO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxDQUFBO1NBQ1o7SUFDTCxDQUFDOzs7O0lBRUQsZ0RBQVU7OztJQUFWO1FBQUEsaUJBa0NDO1FBakNHLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUMxQixHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFOztvQkFFZCxhQUFhLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUM7Z0JBQzlFLElBQUksYUFBYSxFQUFFO29CQUVmLElBQUcsS0FBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDckIsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25GO29CQUVELGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTdGLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFHL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUMsSUFBSTt3QkFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2hFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxFQUFDLENBQUM7aUJBQ047cUJBQ0k7b0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUN2QjthQUVKO2lCQUNJO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGtDQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQzs7Ozs7OztJQS9ERyxnREFBOEI7Ozs7O0lBSmxCLGlEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBTUUxpdGVUYWJsZSwgSVNRTGl0ZUFQSSwgRXF1YWxSZXN0cmljdGlvbiwgU3RyaW5nVXRpbHMsIENsaWVudEN1c3RvbURhbywgUGFnZUluZm8sIExpbWl0UmVzdHJpY3Rpb24sIE9mZnNldFJlc3RyaWN0aW9uLCBPcmRlckJ5UmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgR29hbFNldHRpbmdHZXRZZWFyQ29uZmlnQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXIgPSAtMVxuICAgIHNldERhdGFZZWFyKGRhdGFZZWFyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSBkYXRhWWVhcjtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0R29hbFNldHRpbmdZZWFyQ29uZmlnJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLl9kYXRhWWVhciA9PSAyMDE5KSB7XG4gICAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdZZWFyQ29uZmlnXzIwMTkuanNvbic7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmKHRoaXMuX2RhdGFZZWFyID09IDIwMjApIHtcbiAgICAgICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRHb2FsU2V0dGluZ1llYXJDb25maWdfMjAyMC5qc29uJztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYodGhpcy5fZGF0YVllYXIgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRHb2FsU2V0dGluZ1llYXJDb25maWdfYWxsLmpzb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJ5ZWFyQ29uZmlnIGRhdGFZZWFyIG5vdCBtYXRjaFwiKTtcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGlmIChkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgeWVhckNvbmZpZ09iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19ZZWFyX0NvbmZpZ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoeWVhckNvbmZpZ09iaikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2RhdGFZZWFyICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyQ29uZmlnT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsW3RoaXMuX2RhdGFZZWFyXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgeWVhckNvbmZpZ09iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ0RhdGFZZWFyJywgb3JkZXI6ICdBU0MnIH1dKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pOyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZSh5ZWFyQ29uZmlnT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcInF1ZXJ5QnlUYWJsZSB5ZWFyQ29uZmlnOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=