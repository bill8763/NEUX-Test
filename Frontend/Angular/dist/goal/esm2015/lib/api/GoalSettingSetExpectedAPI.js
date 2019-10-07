/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ClientCustomDao, EqualRestriction } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
export class GoalSettingSetExpectedAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._expectedRecruitment = {};
        this._indirectRecruitment = 0;
    }
    /**
     * @param {?} expectedRecruitment
     * @return {?}
     */
    setExpectedRecruitment(expectedRecruitment) {
        this._expectedRecruitment = expectedRecruitment;
    }
    /**
     * @param {?} indirectRecruitment
     * @return {?}
     */
    setIndirectRecruitment(indirectRecruitment) {
        this._indirectRecruitment = indirectRecruitment;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return "setGoalSettingExpected";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/saveSuccess.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let goalExpectedObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected");
            /** @type {?} */
            let goalExpectedExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected_Extension");
            /** @type {?} */
            let agencyMainObj = this.daoFactory.getDefaultTable("TW_LH_SD_Agency_Plan_Main");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (goalExpectedObj != undefined && agencyMainObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                agencyMainObj.addRestriction(new EqualRestriction('DataYear', [this._expectedRecruitment['DataYear']]));
                agencyMainObj.addRestriction(new EqualRestriction('DataType', ['Recruitment']));
                agencyMainObj.setValue('MonthPlan', [this._expectedRecruitment['RecruitmentTotal'] + this._indirectRecruitment]);
                goalExpectedObj.setValue('Q1', this._expectedRecruitment['Q1']);
                goalExpectedObj.setValue('Q2', this._expectedRecruitment['Q2']);
                goalExpectedObj.setValue('Q3', this._expectedRecruitment['Q3']);
                goalExpectedObj.setValue('Q4', this._expectedRecruitment['Q4']);
                goalExpectedObj.setValue('FYFC', this._expectedRecruitment['FYFC']);
                goalExpectedObj.setValue('ANP', this._expectedRecruitment['ANP']);
                goalExpectedObj.setValue('DataYear', this._expectedRecruitment['DataYear']);
                goalExpectedObj.addRestriction(new EqualRestriction('DataYear', [this._expectedRecruitment['DataYear']]));
                /** @type {?} */
                let goalExpectedResp = yield dao.queryByTable(goalExpectedObj).toPromise();
                console.log('dataYear: ', this._expectedRecruitment['DataYear'], ' goalExpectedResp:', goalExpectedResp);
                if (goalExpectedResp.Body.length > 0) {
                    //sqlite has data;
                    dao.transactionUpdate(goalExpectedObj);
                }
                else {
                    //sqlite not has data;
                    /** @type {?} */
                    let clientID = uuid();
                    goalExpectedObj.setValue('ClientID', clientID);
                    goalExpectedExtObj.setValue('ClientID', clientID);
                    dao.transactionInsert(goalExpectedObj);
                    dao.transactionInsert(goalExpectedExtObj);
                }
                // dao.transactionUpdate(goalExpectedObj);
                dao.transactionUpdate(agencyMainObj);
                dao.runTransaction().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        })));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingSetExpectedAPI.prototype._expectedRecruitment;
    /**
     * @type {?}
     * @private
     */
    GoalSettingSetExpectedAPI.prototype._indirectRecruitment;
    /**
     * @type {?}
     * @private
     */
    GoalSettingSetExpectedAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0dvYWxTZXR0aW5nU2V0RXhwZWN0ZWRBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQTBDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxrQkFBa0IsQ0FBQztBQUM3SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU07Ozs7SUFZSixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWGxDLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQyx5QkFBb0IsR0FBVyxDQUFDLENBQUM7SUFZekMsQ0FBQzs7Ozs7SUFWRCxzQkFBc0IsQ0FBQyxtQkFBMkI7UUFDaEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsbUJBQTJCO1FBQ2hELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztJQUNsRCxDQUFDOzs7O0lBTUQsVUFBVTtRQUNSLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLGdDQUFnQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQU8sUUFBUSxFQUFFLEVBQUU7O2dCQUN0QyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUM7O2dCQUNuRixrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQywwQ0FBMEMsQ0FBQzs7Z0JBQ2hHLGFBQWEsR0FBRyxJQUFJ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OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBRUo7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFBLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBM0VDLHlEQUEwQzs7Ozs7SUFDMUMseURBQXlDOzs7OztJQVU3QiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTW9ja0FQSSwgSUFQSSwgSVNRTGl0ZUFQSSwgRGFvRmFjdG9yeSwgQ2xpZW50Q3VzdG9tRGFvLCBFcXVhbFJlc3RyaWN0aW9uLCBTUUxpdGVSZXNwb25zZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgY2xhc3MgR29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSSBpbXBsZW1lbnRzIElNb2NrQVBJLCBJQVBJLCBJU1FMaXRlQVBJIHtcbiAgcHJpdmF0ZSBfZXhwZWN0ZWRSZWNydWl0bWVudDogb2JqZWN0ID0ge307XG4gIHByaXZhdGUgX2luZGlyZWN0UmVjcnVpdG1lbnQ6IG51bWJlciA9IDA7XG5cbiAgc2V0RXhwZWN0ZWRSZWNydWl0bWVudChleHBlY3RlZFJlY3J1aXRtZW50OiBvYmplY3QpIHtcbiAgICB0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50ID0gZXhwZWN0ZWRSZWNydWl0bWVudDtcbiAgfVxuXG4gIHNldEluZGlyZWN0UmVjcnVpdG1lbnQoaW5kaXJlY3RSZWNydWl0bWVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5kaXJlY3RSZWNydWl0bWVudCA9IGluZGlyZWN0UmVjcnVpdG1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcInNldEdvYWxTZXR0aW5nRXhwZWN0ZWRcIjtcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiLi9hc3NldHMvbW9jay9zYXZlU3VjY2Vzcy5qc29uXCI7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKGFzeW5jIChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGdvYWxFeHBlY3RlZE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9Hb2FsX1NldHRpbmdfRXhwZWN0ZWRcIik7XG4gICAgICBsZXQgZ29hbEV4cGVjdGVkRXh0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0dvYWxfU2V0dGluZ19FeHBlY3RlZF9FeHRlbnNpb25cIik7XG4gICAgICBsZXQgYWdlbmN5TWFpbk9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9BZ2VuY3lfUGxhbl9NYWluXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoZ29hbEV4cGVjdGVkT2JqICE9IHVuZGVmaW5lZCAmJiBhZ2VuY3lNYWluT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICBhZ2VuY3lNYWluT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50WydEYXRhWWVhciddXSkpO1xuICAgICAgICBhZ2VuY3lNYWluT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhVHlwZScsIFsnUmVjcnVpdG1lbnQnXSkpO1xuICAgICAgICBhZ2VuY3lNYWluT2JqLnNldFZhbHVlKCdNb250aFBsYW4nLCBbdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnUmVjcnVpdG1lbnRUb3RhbCddICsgdGhpcy5faW5kaXJlY3RSZWNydWl0bWVudF0pO1xuXG5cbiAgICAgICAgZ29hbEV4cGVjdGVkT2JqLnNldFZhbHVlKCdRMScsIHRoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnRbJ1ExJ10pO1xuICAgICAgICBnb2FsRXhwZWN0ZWRPYmouc2V0VmFsdWUoJ1EyJywgdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnUTInXSk7XG4gICAgICAgIGdvYWxFeHBlY3RlZE9iai5zZXRWYWx1ZSgnUTMnLCB0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50WydRMyddKTtcbiAgICAgICAgZ29hbEV4cGVjdGVkT2JqLnNldFZhbHVlKCdRNCcsIHRoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnRbJ1E0J10pO1xuICAgICAgICBnb2FsRXhwZWN0ZWRPYmouc2V0VmFsdWUoJ0ZZRkMnLCB0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50WydGWUZDJ10pO1xuICAgICAgICBnb2FsRXhwZWN0ZWRPYmouc2V0VmFsdWUoJ0FOUCcsIHRoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnRbJ0FOUCddKTtcbiAgICAgICAgZ29hbEV4cGVjdGVkT2JqLnNldFZhbHVlKCdEYXRhWWVhcicsIHRoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnRbJ0RhdGFZZWFyJ10pO1xuXG4gICAgICAgIGdvYWxFeHBlY3RlZE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignRGF0YVllYXInLCBbdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnRGF0YVllYXInXV0pKTtcbiAgICAgICAgbGV0IGdvYWxFeHBlY3RlZFJlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKGdvYWxFeHBlY3RlZE9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWWVhcjogJywgdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnRGF0YVllYXInXSwgJyBnb2FsRXhwZWN0ZWRSZXNwOicsIGdvYWxFeHBlY3RlZFJlc3ApO1xuICAgICAgICBpZiAoZ29hbEV4cGVjdGVkUmVzcC5Cb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvL3NxbGl0ZSBoYXMgZGF0YTtcbiAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoZ29hbEV4cGVjdGVkT2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL3NxbGl0ZSBub3QgaGFzIGRhdGE7XG4gICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgIGdvYWxFeHBlY3RlZE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgZ29hbEV4cGVjdGVkRXh0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoZ29hbEV4cGVjdGVkT2JqKTtcbiAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoZ29hbEV4cGVjdGVkRXh0T2JqKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGdvYWxFeHBlY3RlZE9iaik7XG4gICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShhZ2VuY3lNYWluT2JqKTtcbiAgICAgICAgZGFvLnJ1blRyYW5zYWN0aW9uKCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==