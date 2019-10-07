/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from '@allianzSND/core';
import { Observable } from 'rxjs';
var GoalSettingGetExpectedAPI = /** @class */ (function () {
    function GoalSettingGetExpectedAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    GoalSettingGetExpectedAPI.prototype.setDataYear = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        this._dataYear = dataYear;
    };
    /**
     * @return {?}
     */
    GoalSettingGetExpectedAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return "getGoalSettingExpected";
    };
    /**
     * @return {?}
     */
    GoalSettingGetExpectedAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return "./assets/mock/getGoalSettingExpected.json";
    };
    /**
     * @return {?}
     */
    GoalSettingGetExpectedAPI.prototype.executeSQL = /**
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
            var goalExpectedObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Expected");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (goalExpectedObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                goalExpectedObj.addRestriction(new EqualRestriction('DataYear', [_this._dataYear]));
                dao.queryByTable(goalExpectedObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    console.log(resp);
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
    return GoalSettingGetExpectedAPI;
}());
export { GoalSettingGetExpectedAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetExpectedAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetExpectedAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRFeHBlY3RlZEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0dvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQztJQU9FLG1DQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTFDLENBQUM7Ozs7O0lBTkQsK0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO0lBQzNCLENBQUM7Ozs7SUFNRCw4Q0FBVTs7O0lBQVY7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLDJDQUEyQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCw4Q0FBVTs7O0lBQVY7UUFBQSxpQkFpQkM7UUFoQkMsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTs7Z0JBQzVCLGVBQWUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsQ0FBQzs7Z0JBQ3RGLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLGVBQWUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFDcEQsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsR0FBRyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQzs7Ozs7OztJQXBDQyw4Q0FBMEI7Ozs7O0lBTWQsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEksIERhb0ZhY3RvcnksIENsaWVudEN1c3RvbURhbywgRXF1YWxSZXN0cmljdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dldEV4cGVjdGVkQVBJIGltcGxlbWVudHMgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEl7XG4gIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgc2V0RGF0YVllYXIoZGF0YVllYXI6IG51bWJlcikge1xuICAgIHRoaXMuX2RhdGFZZWFyID0gZGF0YVllYXJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiZ2V0R29hbFNldHRpbmdFeHBlY3RlZFwiO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIuL2Fzc2V0cy9tb2NrL2dldEdvYWxTZXR0aW5nRXhwZWN0ZWQuanNvblwiO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBnb2FsRXhwZWN0ZWRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfR29hbF9TZXR0aW5nX0V4cGVjdGVkXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoZ29hbEV4cGVjdGVkT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgZ29hbEV4cGVjdGVkT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl9kYXRhWWVhcl0pKTtcbiAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShnb2FsRXhwZWN0ZWRPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19