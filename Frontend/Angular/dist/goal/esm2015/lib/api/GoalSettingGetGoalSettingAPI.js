/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction, ClientCustomDao } from "@allianzSND/core";
import { Observable } from 'rxjs';
export class GoalSettingGetGoalSettingAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    setDataYear(dataYear) {
        this._dataYear = dataYear;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoalSettingGoalSetting';
    }
    /**
     * @return {?}
     */
    getMockPath() {
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
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log("queryByTable: getGoalSettingGoalSetting this._dataYear:", this._dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                let goalSettingObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting");
                if (goalSettingObj) {
                    if (this._dataYear != -1) {
                        goalSettingObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                    }
                    dao = new ClientCustomDao(dao);
                    dao.queryByTable(goalSettingObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRHb2FsU2V0dGluZ0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0dvYWxTZXR0aW5nR2V0R29hbFNldHRpbmdBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUQsZ0JBQWdCLEVBQWUsZUFBZSxFQUFpRCxNQUFNLGtCQUFrQixDQUFDO0FBQ3RMLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTTs7OztJQUdGLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFJbEMsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFBO0lBRjlCLENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsV0FBVztRQUVQLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDdkIsT0FBTyxtREFBbUQsQ0FBQztTQUM5RDthQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDNUIsT0FBTyxtREFBbUQsQ0FBQztTQUM5RDthQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUMxQixPQUFPLGtEQUFrRCxDQUFDO1NBQzdEO2FBRUk7WUFDRCxrQkFBa0I7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxDQUFBO1NBQ1o7SUFDTCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXlELEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztnQkFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTs7b0JBR2QsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDBCQUEwQixDQUFDO2dCQUNoRixJQUFJLGNBQWMsRUFBRTtvQkFFaEIsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFO3dCQUNyQixjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDcEY7b0JBRUQsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUcvQixHQUFHLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3ZFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxFQUFDLENBQUM7aUJBQ047cUJBQ0k7b0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUN2QjthQUVKO2lCQUNJO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKOzs7Ozs7SUFqRUcsaURBQThCOzs7OztJQUpsQixrREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgU1FMaXRlVGFibGUsIElTUUxpdGVBUEksIEVxdWFsUmVzdHJpY3Rpb24sIFN0cmluZ1V0aWxzLCBDbGllbnRDdXN0b21EYW8sIFBhZ2VJbmZvLCBMaW1pdFJlc3RyaWN0aW9uLCBPZmZzZXRSZXN0cmljdGlvbiB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dldEdvYWxTZXR0aW5nQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXIgPSAtMVxuICAgIHNldERhdGFZZWFyKGRhdGFZZWFyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSBkYXRhWWVhcjtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0R29hbFNldHRpbmdHb2FsU2V0dGluZyc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgIFxuICAgICAgICBpZih0aGlzLl9kYXRhWWVhciA9PSAyMDE5KSB7XG4gICAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdHb2FsU2V0dGluZ18yMDE5Lmpzb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZih0aGlzLl9kYXRhWWVhciA9PSAyMDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdHb2FsU2V0dGluZ18yMDIwLmpzb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZih0aGlzLl9kYXRhWWVhciA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEdvYWxTZXR0aW5nR29hbFNldHRpbmdfYWxsLmpzb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL3RvZG8gdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInllYXJTdGF0dXMgZGF0YVllYXIgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlCeVRhYmxlOiBnZXRHb2FsU2V0dGluZ0dvYWxTZXR0aW5nIHRoaXMuX2RhdGFZZWFyOlwiLCB0aGlzLl9kYXRhWWVhcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGdvYWxTZXR0aW5nT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX0dvYWxfU2V0dGluZ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoZ29hbFNldHRpbmdPYmopIHtcblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9kYXRhWWVhciAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFNldHRpbmdPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFZZWFyJyxbdGhpcy5fZGF0YVllYXJdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cblxuICAgICAgICAgICAgICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGdvYWxTZXR0aW5nT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlCeVRhYmxlIG92ZXJ2aWV3WWVhclN0YXR1czogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19