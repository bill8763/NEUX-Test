/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction, ClientCustomDao } from "@allianzSND/core";
import { Observable } from 'rxjs';
var GoalSettingGetValueAPI = /** @class */ (function () {
    function GoalSettingGetValueAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    GoalSettingGetValueAPI.prototype.setDataYear = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        this._dataYear = dataYear;
    };
    /**
     * @return {?}
     */
    GoalSettingGetValueAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getGoalSettingValue';
    };
    /**
     * @return {?}
     */
    GoalSettingGetValueAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingValue_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingValue_2020.json';
        }
        else {
            console.warn("GoalSettingGetValueAPI mock path not found");
            return '';
        }
    };
    /**
     * @return {?}
     */
    GoalSettingGetValueAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /*
            "FYFC": 200,
            "FYFC_Actual": 30,
            "FYFC_Now_To_Year_End": 170,
            "Manpower": 70,
            "Recruitment": 40
         */
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            console.log("queryByTable: goalSettingValue this._dataYear:", _this._dataYear);
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                var goalSettingValue = _this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Value");
                if (goalSettingValue) {
                    dao = new ClientCustomDao(dao);
                    if (_this._dataYear != -1) {
                        goalSettingValue.addRestriction(new EqualRestriction('DataYear', [_this._dataYear]));
                    }
                    //todo!
                    dao.queryByTable(goalSettingValue).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        console.log("queryByTable: goalSettingValue", resp);
                        // console.warn("goalSettingValue========: ",data);
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
    return GoalSettingGetValueAPI;
}());
export { GoalSettingGetValueAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetValueAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetValueAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0dvYWxTZXR0aW5nR2V0VmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQztJQUdJLGdDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSWxDLGNBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQztJQUYvQixDQUFDOzs7OztJQUdELDRDQUFXOzs7O0lBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQ0ksT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUN4QixPQUFPLDZDQUE2QyxDQUFDO1NBQ3hEO2FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUM3QixPQUFPLDZDQUE2QyxDQUFDO1NBQ3hEO2FBQ0k7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUVMLENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFBQSxpQkFxREM7UUFwREc7Ozs7OztXQU1HO1FBQ0gsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Z0JBQzFFLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7O29CQUdkLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDO2dCQUNyRixJQUFJLGdCQUFnQixFQUFFO29CQUdsQixHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLElBQUksS0FBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDdEIsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkY7b0JBR0QsT0FBTztvQkFDUCxHQUFHLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBT3BELG1EQUFtRDt3QkFDbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUV4QixDQUFDLEVBQUMsQ0FBQztpQkFFTjtxQkFHSTtvQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3ZCO2FBRUo7aUJBQ0k7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBcEZELElBb0ZDOzs7Ozs7O0lBN0VHLDJDQUErQjs7Ozs7SUFKbkIsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24sIENsaWVudEN1c3RvbURhbyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dldFZhbHVlQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXIgPSAtMTtcbiAgICBzZXREYXRhWWVhcihkYXRhWWVhcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFZZWFyID0gZGF0YVllYXI7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldEdvYWxTZXR0aW5nVmFsdWUnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9kYXRhWWVhciA9PSAyMDE5KSB7XG4gICAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdWYWx1ZV8yMDE5Lmpzb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2RhdGFZZWFyID09IDIwMjApIHtcbiAgICAgICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRHb2FsU2V0dGluZ1ZhbHVlXzIwMjAuanNvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJHb2FsU2V0dGluZ0dldFZhbHVlQVBJIG1vY2sgcGF0aCBub3QgZm91bmRcIik7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIFwiRllGQ1wiOiAyMDAsXG4gICAgICAgICAgICBcIkZZRkNfQWN0dWFsXCI6IDMwLFxuICAgICAgICAgICAgXCJGWUZDX05vd19Ub19ZZWFyX0VuZFwiOiAxNzAsXG4gICAgICAgICAgICBcIk1hbnBvd2VyXCI6IDcwLFxuICAgICAgICAgICAgXCJSZWNydWl0bWVudFwiOiA0MFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWVyeUJ5VGFibGU6IGdvYWxTZXR0aW5nVmFsdWUgdGhpcy5fZGF0YVllYXI6XCIsIHRoaXMuX2RhdGFZZWFyKTtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGdvYWxTZXR0aW5nVmFsdWUgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfR29hbF9TZXR0aW5nX1ZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChnb2FsU2V0dGluZ1ZhbHVlKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhWWVhciAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFNldHRpbmdWYWx1ZS5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignRGF0YVllYXInLCBbdGhpcy5fZGF0YVllYXJdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vdG9kbyFcbiAgICAgICAgICAgICAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShnb2FsU2V0dGluZ1ZhbHVlKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlCeVRhYmxlOiBnb2FsU2V0dGluZ1ZhbHVlXCIsIHJlc3ApO1xuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKFwiZ29hbFNldHRpbmdWYWx1ZT09PT09PT09OiBcIixkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=