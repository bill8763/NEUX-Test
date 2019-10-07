/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from "@allianzSND/core";
import { Observable } from 'rxjs';
export class GoalSettingGetPlanAPI {
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
        return 'getGoalSettingPlan';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingPlan_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingPlan_2020.json';
        }
        else {
            console.warn("datYear not match mock path");
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
                let goalSettingObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Plan_Value");
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
                        console.warn("queryByTable Goal_Setting_Plan_Value: ", JSON.stringify(resp));
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
    GoalSettingGetPlanAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGetPlanAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRQbGFuQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvR29hbFNldHRpbmdHZXRQbGFuQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3ZGLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxNQUFNLENBQUM7QUFJeEMsTUFBTTs7OztJQUlKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbEMsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBSS9CLENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLElBQVk7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7OztJQUdELFVBQVU7UUFDUixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDMUIsT0FBTyw0Q0FBNEMsQ0FBQztTQUNyRDthQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDL0IsT0FBTyw0Q0FBNEMsQ0FBQztTQUNyRDthQUNJO1lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7O0lBR0QsVUFBVTtRQUNSLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztnQkFDaEMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTs7b0JBR2hCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxxQ0FBcUMsQ0FBQztnQkFDM0YsSUFBSSxjQUFjLEVBQUU7b0JBRWxCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDeEIsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25GO29CQUVELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFHL0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsd0NBQXdDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUM3RSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsRUFBQyxDQUFDO2lCQUNKO3FCQUNJO29CQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7YUFFRjtpQkFDSTtnQkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FJRjs7Ozs7O0lBcEVDLDBDQUErQjs7Ozs7SUFFbkIsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20gfSBmcm9tICdyeGpzJztcblxuXG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dldFBsYW5BUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgcHJpdmF0ZSBfZGF0YVllYXI6IG51bWJlciA9IC0xO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuXG4gIHNldERhdGFZZWFyKHllYXI6IG51bWJlcikge1xuICAgIHRoaXMuX2RhdGFZZWFyID0geWVhcjtcbiAgfVxuXG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0R29hbFNldHRpbmdQbGFuJztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgLy9hbGVydChcInBlcnNvbmFsIHByb2dyZXNzIG1vY2sgZGF0YVwiKTtcbiAgICBpZiAodGhpcy5fZGF0YVllYXIgPT0gMjAxOSkge1xuICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEdvYWxTZXR0aW5nUGxhbl8yMDE5Lmpzb24nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLl9kYXRhWWVhciA9PSAyMDIwKSB7XG4gICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0R29hbFNldHRpbmdQbGFuXzIwMjAuanNvbic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiZGF0WWVhciBub3QgbWF0Y2ggbW9jayBwYXRoXCIpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuXG4gICAgICAgIGxldCBnb2FsU2V0dGluZ09iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19Hb2FsX1NldHRpbmdfUGxhbl9WYWx1ZVwiKTtcbiAgICAgICAgaWYgKGdvYWxTZXR0aW5nT2JqKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5fZGF0YVllYXIgIT0gLTEpIHtcbiAgICAgICAgICAgIGdvYWxTZXR0aW5nT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl9kYXRhWWVhcl0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cblxuICAgICAgICAgIGRhby5xdWVyeUJ5VGFibGUoZ29hbFNldHRpbmdPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwicXVlcnlCeVRhYmxlIEdvYWxfU2V0dGluZ19QbGFuX1ZhbHVlOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG5cbn0iXX0=