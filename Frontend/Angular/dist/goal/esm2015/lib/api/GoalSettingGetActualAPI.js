/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction, ClientCustomDao } from "@allianzSND/core";
import { Observable } from 'rxjs';
export class GoalSettingGetActualAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setDataYear(year) {
        this._dataYear = year;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoalSettingActualValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingActualValue_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingActualValue_2020.json';
        }
        else {
            //todo throw error
            console.warn('dataYear not match mock path');
            return '';
        }
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
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                let goalSettingObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Actual_Value");
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
                        console.warn("queryByTable Goal_Setting_Actual_Value: ", resp);
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
    GoalSettingGetActualAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetActualAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRBY3R1YWxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL2FwaS9Hb2FsU2V0dGluZ0dldEFjdHVhbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFRLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzNFLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxNQUFNLENBQUM7QUFLeEMsTUFBTTs7OztJQU1KLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIbEMsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBSy9CLENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLElBQVk7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7OztJQUlELFVBQVU7UUFDUixPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDMUIsT0FBTyxtREFBbUQsQ0FBQztTQUM1RDthQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDL0IsT0FBTyxtREFBbUQsQ0FBQztTQUM1RDthQUNJO1lBQ0gsa0JBQWtCO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUM3QyxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7OztJQUdELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7Z0JBQ2hDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7O29CQUdoQixjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUM7Z0JBQ2hGLElBQUksY0FBYyxFQUFFO29CQUVsQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7d0JBQ3hCLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNuRjtvQkFFRCxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMvRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsRUFBQyxDQUFDO2lCQUNKO3FCQUNJO29CQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7YUFFRjtpQkFDSTtnQkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRjs7Ozs7O0lBbkVDLDRDQUErQjs7Ozs7SUFHbkIsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgRXF1YWxSZXN0cmljdGlvbiwgQ2xpZW50Q3VzdG9tRGFvIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuXG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dldEFjdHVhbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuXG4gIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXIgPSAtMTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cbiAgc2V0RGF0YVllYXIoeWVhcjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGF0YVllYXIgPSB5ZWFyO1xuICB9XG5cblxuXG4gIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2dldEdvYWxTZXR0aW5nQWN0dWFsVmFsdWUnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAvL2FsZXJ0KFwicGVyc29uYWwgcHJvZ3Jlc3MgbW9jayBkYXRhXCIpO1xuICAgIGlmICh0aGlzLl9kYXRhWWVhciA9PSAyMDE5KSB7XG4gICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdBY3R1YWxWYWx1ZV8yMDE5Lmpzb24nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLl9kYXRhWWVhciA9PSAyMDIwKSB7XG4gICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdBY3R1YWxWYWx1ZV8yMDIwLmpzb24nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vdG9kbyB0aHJvdyBlcnJvclxuICAgICAgY29uc29sZS53YXJuKCdkYXRhWWVhciBub3QgbWF0Y2ggbW9jayBwYXRoJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoZGFvICE9IHVuZGVmaW5lZCkge1xuXG5cbiAgICAgICAgbGV0IGdvYWxTZXR0aW5nT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX0FjdHVhbF9WYWx1ZVwiKTtcbiAgICAgICAgaWYgKGdvYWxTZXR0aW5nT2JqKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5fZGF0YVllYXIgIT0gLTEpIHtcbiAgICAgICAgICAgIGdvYWxTZXR0aW5nT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl9kYXRhWWVhcl0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cblxuICAgICAgICAgIGRhby5xdWVyeUJ5VGFibGUoZ29hbFNldHRpbmdPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwicXVlcnlCeVRhYmxlIEdvYWxfU2V0dGluZ19BY3R1YWxfVmFsdWU6IFwiLCByZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn0iXX0=