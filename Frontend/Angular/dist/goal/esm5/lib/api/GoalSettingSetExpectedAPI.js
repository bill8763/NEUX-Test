/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ClientCustomDao, EqualRestriction } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
var GoalSettingSetExpectedAPI = /** @class */ (function () {
    function GoalSettingSetExpectedAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this._expectedRecruitment = {};
        this._indirectRecruitment = 0;
    }
    /**
     * @param {?} expectedRecruitment
     * @return {?}
     */
    GoalSettingSetExpectedAPI.prototype.setExpectedRecruitment = /**
     * @param {?} expectedRecruitment
     * @return {?}
     */
    function (expectedRecruitment) {
        this._expectedRecruitment = expectedRecruitment;
    };
    /**
     * @param {?} indirectRecruitment
     * @return {?}
     */
    GoalSettingSetExpectedAPI.prototype.setIndirectRecruitment = /**
     * @param {?} indirectRecruitment
     * @return {?}
     */
    function (indirectRecruitment) {
        this._indirectRecruitment = indirectRecruitment;
    };
    /**
     * @return {?}
     */
    GoalSettingSetExpectedAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return "setGoalSettingExpected";
    };
    /**
     * @return {?}
     */
    GoalSettingSetExpectedAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return "./assets/mock/saveSuccess.json";
    };
    /**
     * @return {?}
     */
    GoalSettingSetExpectedAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var goalExpectedObj, goalExpectedExtObj, agencyMainObj, dao, goalExpectedResp, clientID;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        goalExpectedObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected");
                        goalExpectedExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected_Extension");
                        agencyMainObj = this.daoFactory.getDefaultTable("TW_LH_SD_Agency_Plan_Main");
                        dao = this.daoFactory.getDefaultDao();
                        if (!(goalExpectedObj != undefined && agencyMainObj != undefined && dao != undefined)) return [3 /*break*/, 2];
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
                        return [4 /*yield*/, dao.queryByTable(goalExpectedObj).toPromise()];
                    case 1:
                        goalExpectedResp = _a.sent();
                        console.log('dataYear: ', this._expectedRecruitment['DataYear'], ' goalExpectedResp:', goalExpectedResp);
                        if (goalExpectedResp.Body.length > 0) {
                            //sqlite has data;
                            dao.transactionUpdate(goalExpectedObj);
                        }
                        else {
                            //sqlite not has data;
                            clientID = uuid();
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
                        function (resp) {
                            observer.next(resp);
                            observer.complete();
                        }));
                        return [3 /*break*/, 3];
                    case 2:
                        observer.next(false);
                        observer.complete();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); }));
    };
    return GoalSettingSetExpectedAPI;
}());
export { GoalSettingSetExpectedAPI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTZXRFeHBlY3RlZEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0dvYWxTZXR0aW5nU2V0RXhwZWN0ZWRBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQTBDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxrQkFBa0IsQ0FBQztBQUM3SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBWUUsbUNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFYbEMseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLHlCQUFvQixHQUFXLENBQUMsQ0FBQztJQVl6QyxDQUFDOzs7OztJQVZELDBEQUFzQjs7OztJQUF0QixVQUF1QixtQkFBMkI7UUFDaEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsMERBQXNCOzs7O0lBQXRCLFVBQXVCLG1CQUEyQjtRQUNoRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUM7SUFDbEQsQ0FBQzs7OztJQU1ELDhDQUFVOzs7SUFBVjtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNFLE9BQU8sZ0NBQWdDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELDhDQUFVOzs7SUFBVjtRQUFBLGlCQW1EQztRQWxEQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBTyxRQUFROzs7Ozt3QkFDbEMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDO3dCQUNuRixrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVB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RyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUNyQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUzs7Ozt3QkFBQyxVQUFDLElBQUk7NEJBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDdEIsQ0FBQyxFQUFDLENBQUM7Ozt3QkFHSCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O2FBRXZCLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUE1RUQsSUE0RUM7Ozs7Ozs7SUEzRUMseURBQTBDOzs7OztJQUMxQyx5REFBeUM7Ozs7O0lBVTdCLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNb2NrQVBJLCBJQVBJLCBJU1FMaXRlQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIEVxdWFsUmVzdHJpY3Rpb24sIFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ1NldEV4cGVjdGVkQVBJIGltcGxlbWVudHMgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9leHBlY3RlZFJlY3J1aXRtZW50OiBvYmplY3QgPSB7fTtcbiAgcHJpdmF0ZSBfaW5kaXJlY3RSZWNydWl0bWVudDogbnVtYmVyID0gMDtcblxuICBzZXRFeHBlY3RlZFJlY3J1aXRtZW50KGV4cGVjdGVkUmVjcnVpdG1lbnQ6IG9iamVjdCkge1xuICAgIHRoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnQgPSBleHBlY3RlZFJlY3J1aXRtZW50O1xuICB9XG5cbiAgc2V0SW5kaXJlY3RSZWNydWl0bWVudChpbmRpcmVjdFJlY3J1aXRtZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbmRpcmVjdFJlY3J1aXRtZW50ID0gaW5kaXJlY3RSZWNydWl0bWVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwic2V0R29hbFNldHRpbmdFeHBlY3RlZFwiO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb25cIjtcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoYXN5bmMgKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgZ29hbEV4cGVjdGVkT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0dvYWxfU2V0dGluZ19FeHBlY3RlZFwiKTtcbiAgICAgIGxldCBnb2FsRXhwZWN0ZWRFeHRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfR29hbF9TZXR0aW5nX0V4cGVjdGVkX0V4dGVuc2lvblwiKTtcbiAgICAgIGxldCBhZ2VuY3lNYWluT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0FnZW5jeV9QbGFuX01haW5cIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChnb2FsRXhwZWN0ZWRPYmogIT0gdW5kZWZpbmVkICYmIGFnZW5jeU1haW5PYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuXG4gICAgICAgIGFnZW5jeU1haW5PYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFZZWFyJywgW3RoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnRbJ0RhdGFZZWFyJ11dKSk7XG4gICAgICAgIGFnZW5jeU1haW5PYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFUeXBlJywgWydSZWNydWl0bWVudCddKSk7XG4gICAgICAgIGFnZW5jeU1haW5PYmouc2V0VmFsdWUoJ01vbnRoUGxhbicsIFt0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50WydSZWNydWl0bWVudFRvdGFsJ10gKyB0aGlzLl9pbmRpcmVjdFJlY3J1aXRtZW50XSk7XG5cblxuICAgICAgICBnb2FsRXhwZWN0ZWRPYmouc2V0VmFsdWUoJ1ExJywgdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnUTEnXSk7XG4gICAgICAgIGdvYWxFeHBlY3RlZE9iai5zZXRWYWx1ZSgnUTInLCB0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50WydRMiddKTtcbiAgICAgICAgZ29hbEV4cGVjdGVkT2JqLnNldFZhbHVlKCdRMycsIHRoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnRbJ1EzJ10pO1xuICAgICAgICBnb2FsRXhwZWN0ZWRPYmouc2V0VmFsdWUoJ1E0JywgdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnUTQnXSk7XG4gICAgICAgIGdvYWxFeHBlY3RlZE9iai5zZXRWYWx1ZSgnRllGQycsIHRoaXMuX2V4cGVjdGVkUmVjcnVpdG1lbnRbJ0ZZRkMnXSk7XG4gICAgICAgIGdvYWxFeHBlY3RlZE9iai5zZXRWYWx1ZSgnQU5QJywgdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnQU5QJ10pO1xuICAgICAgICBnb2FsRXhwZWN0ZWRPYmouc2V0VmFsdWUoJ0RhdGFZZWFyJywgdGhpcy5fZXhwZWN0ZWRSZWNydWl0bWVudFsnRGF0YVllYXInXSk7XG5cbiAgICAgICAgZ29hbEV4cGVjdGVkT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50WydEYXRhWWVhciddXSkpO1xuICAgICAgICBsZXQgZ29hbEV4cGVjdGVkUmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoZ29hbEV4cGVjdGVkT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGFZZWFyOiAnLCB0aGlzLl9leHBlY3RlZFJlY3J1aXRtZW50WydEYXRhWWVhciddLCAnIGdvYWxFeHBlY3RlZFJlc3A6JywgZ29hbEV4cGVjdGVkUmVzcCk7XG4gICAgICAgIGlmIChnb2FsRXhwZWN0ZWRSZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vc3FsaXRlIGhhcyBkYXRhO1xuICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShnb2FsRXhwZWN0ZWRPYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vc3FsaXRlIG5vdCBoYXMgZGF0YTtcbiAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgZ29hbEV4cGVjdGVkT2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICBnb2FsRXhwZWN0ZWRFeHRPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgY2xpZW50SUQpO1xuICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChnb2FsRXhwZWN0ZWRPYmopO1xuICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChnb2FsRXhwZWN0ZWRFeHRPYmopO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBkYW8udHJhbnNhY3Rpb25VcGRhdGUoZ29hbEV4cGVjdGVkT2JqKTtcbiAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGFnZW5jeU1haW5PYmopO1xuICAgICAgICBkYW8ucnVuVHJhbnNhY3Rpb24oKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19