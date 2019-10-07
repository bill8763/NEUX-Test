/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from '@allianzSND/core';
import { Observable } from 'rxjs';
export class GoalSettingGetExpectedAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
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
        return "getGoalSettingExpected";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/getGoalSettingExpected.json";
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
            let goalExpectedObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Expected");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (goalExpectedObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                goalExpectedObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                dao.queryByTable(goalExpectedObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHZXRFeHBlY3RlZEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0dvYWxTZXR0aW5nR2V0RXhwZWN0ZWRBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNOzs7O0lBT0osWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDOzs7OztJQU5ELFdBQVcsQ0FBQyxRQUFnQjtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtJQUMzQixDQUFDOzs7O0lBTUQsVUFBVTtRQUNSLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLDJDQUEyQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUNoQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUNBQW1DLENBQUM7O2dCQUN0RixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxlQUFlLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBQ3BELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLEdBQUcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQXBDQyw4Q0FBMEI7Ozs7O0lBTWQsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEksIERhb0ZhY3RvcnksIENsaWVudEN1c3RvbURhbywgRXF1YWxSZXN0cmljdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dldEV4cGVjdGVkQVBJIGltcGxlbWVudHMgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEl7XG4gIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgc2V0RGF0YVllYXIoZGF0YVllYXI6IG51bWJlcikge1xuICAgIHRoaXMuX2RhdGFZZWFyID0gZGF0YVllYXJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiZ2V0R29hbFNldHRpbmdFeHBlY3RlZFwiO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIuL2Fzc2V0cy9tb2NrL2dldEdvYWxTZXR0aW5nRXhwZWN0ZWQuanNvblwiO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBnb2FsRXhwZWN0ZWRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfR29hbF9TZXR0aW5nX0V4cGVjdGVkXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoZ29hbEV4cGVjdGVkT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgZ29hbEV4cGVjdGVkT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl9kYXRhWWVhcl0pKTtcbiAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShnb2FsRXhwZWN0ZWRPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19