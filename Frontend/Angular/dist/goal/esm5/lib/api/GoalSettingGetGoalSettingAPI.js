/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction, ClientCustomDao } from "@allianzSND/core";
import { Observable } from 'rxjs';
var GoalSettingGetGoalSettingAPI = /** @class */ (function () {
    function GoalSettingGetGoalSettingAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    GoalSettingGetGoalSettingAPI.prototype.setDataYear = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        this._dataYear = dataYear;
    };
    /**
     * @return {?}
     */
    GoalSettingGetGoalSettingAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getGoalSettingGoalSetting';
    };
    /**
     * @return {?}
     */
    GoalSettingGetGoalSettingAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingGoalSetting_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingGoalSetting_2020.json';
        }
        else if (this._dataYear == -1) {
            return './assets/mock/getGoalSettingGoalSetting_all.json';
        }
        else {
            //todo throw error
            console.warn("yearStatus dataYear not match");
            return '';
        }
    };
    /**
     * @return {?}
     */
    GoalSettingGetGoalSettingAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("queryByTable: getGoalSettingGoalSetting this._dataYear:", this._dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                var goalSettingObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting");
                if (goalSettingObj) {
                    if (_this._dataYear != -1) {
                        goalSettingObj.addRestriction(new EqualRestriction('DataYear', [_this._dataYear]));
                    }
                    dao = new ClientCustomDao(dao);
                    dao.queryByTable(goalSettingObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        console.log("queryByTable overviewYearStatus: ", JSON.stringify(resp));
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
    return GoalSettingGetGoalSettingAPI;
}());
export { GoalSettingGetGoalSettingAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetGoalSettingAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetGoalSettingAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRHb2FsU2V0dGluZ0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0dvYWxTZXR0aW5nR2V0R29hbFNldHRpbmdBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUQsZ0JBQWdCLEVBQWUsZUFBZSxFQUFpRCxNQUFNLGtCQUFrQixDQUFDO0FBQ3RMLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEM7SUFHSSxzQ0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUlsQyxjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUE7SUFGOUIsQ0FBQzs7Ozs7SUFHRCxrREFBVzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGlEQUFVOzs7SUFBVjtRQUNJLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGtEQUFXOzs7SUFBWDtRQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDdkIsT0FBTyxtREFBbUQsQ0FBQztTQUM5RDthQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDNUIsT0FBTyxtREFBbUQsQ0FBQztTQUM5RDthQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUMxQixPQUFPLGtEQUFrRCxDQUFDO1NBQzdEO2FBRUk7WUFDRCxrQkFBa0I7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxDQUFBO1NBQ1o7SUFDTCxDQUFDOzs7O0lBRUQsaURBQVU7OztJQUFWO1FBQUEsaUJBa0NDO1FBakNHLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXlELEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUMxQixHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFOztvQkFHZCxjQUFjLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUM7Z0JBQ2hGLElBQUksY0FBYyxFQUFFO29CQUVoQixJQUFHLEtBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7d0JBQ3JCLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNwRjtvQkFFRCxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN2RSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hCLENBQUMsRUFBQyxDQUFDO2lCQUNOO3FCQUNJO29CQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkI7YUFFSjtpQkFDSTtnQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7Ozs7Ozs7SUFqRUcsaURBQThCOzs7OztJQUpsQixrREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgU1FMaXRlVGFibGUsIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24sIFN0cmluZ1V0aWxzLCBDbGllbnRDdXN0b21EYW8sIFBhZ2VJbmZvLCBMaW1pdFJlc3RyaWN0aW9uLCBPZmZzZXRSZXN0cmljdGlvbiB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dldEdvYWxTZXR0aW5nQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXIgPSAtMVxuICAgIHNldERhdGFZZWFyKGRhdGFZZWFyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSBkYXRhWWVhcjtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0R29hbFNldHRpbmdHb2FsU2V0dGluZyc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgIFxuICAgICAgICBpZih0aGlzLl9kYXRhWWVhciA9PSAyMDE5KSB7XG4gICAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdHb2FsU2V0dGluZ18yMDE5Lmpzb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZih0aGlzLl9kYXRhWWVhciA9PSAyMDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdHb2FsU2V0dGluZ18yMDIwLmpzb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZih0aGlzLl9kYXRhWWVhciA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEdvYWxTZXR0aW5nR29hbFNldHRpbmdfYWxsLmpzb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL3RvZG8gdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInllYXJTdGF0dXMgZGF0YVllYXIgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlCeVRhYmxlOiBnZXRHb2FsU2V0dGluZ0dvYWxTZXR0aW5nIHRoaXMuX2RhdGFZZWFyOlwiLCB0aGlzLl9kYXRhWWVhcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGdvYWxTZXR0aW5nT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX0dvYWxfU2V0dGluZ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoZ29hbFNldHRpbmdPYmopIHtcblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9kYXRhWWVhciAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFNldHRpbmdPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFZZWFyJyxbdGhpcy5fZGF0YVllYXJdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cblxuICAgICAgICAgICAgICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGdvYWxTZXR0aW5nT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlCeVRhYmxlIG92ZXJ2aWV3WWVhclN0YXR1czogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19