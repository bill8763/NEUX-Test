/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { GreaterRestriction } from "../../device/sqlite/restrictions/GreaterRestriction";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
import { parseISO } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { SQLiteResponse } from '../../device/sqlite/SQLiteResponse';
var GoalExpectedSync = /** @class */ (function () {
    function GoalExpectedSync(DaoFactory, PushAOP, PullAOP) {
        if (PushAOP === void 0) { PushAOP = null; }
        if (PullAOP === void 0) { PullAOP = null; }
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    GoalExpectedSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'GOAL_EXPECTED';
    };
    /**
     * @return {?}
     */
    GoalExpectedSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    GoalExpectedSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    GoalExpectedSync.prototype.getPushJson = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnJson, pushData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Do check data clientTime > frontendTime;
                        //TODO: Add extension column
                        returnJson = [];
                        return [4 /*yield*/, this.getPushData(frontendTime)];
                    case 1:
                        pushData = _a.sent();
                        pushData.forEach((/**
                         * @param {?} GoalExpectedObj
                         * @return {?}
                         */
                        function (GoalExpectedObj) {
                            /** @type {?} */
                            var Recruitments = [];
                            for (var i = 1; i <= 4; i++) {
                                /** @type {?} */
                                var Recruitment = {
                                    "Qarter": i,
                                    "Value": GoalExpectedObj['Q' + i]
                                };
                                Recruitments.push(Recruitment);
                            }
                            /** @type {?} */
                            var jsonObj = {
                                "DataYear": GoalExpectedObj.DataYear,
                                "FYFC": GoalExpectedObj.FYFC,
                                "ANP": GoalExpectedObj.ANP,
                                "Recruitments": Recruitments,
                                "synchDetail": {
                                    "lastUpdateDateTimeBackend": new Date(GoalExpectedObj.DataTime).toISOString()
                                },
                                "extensions": []
                            };
                            returnJson.push(jsonObj);
                        }));
                        if (!this.PushAOP) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.PullAOP.execute(returnJson)];
                    case 2:
                        returnJson = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, returnJson];
                }
            });
        });
    };
    /**
     * @param {?} resp
     * @return {?}
     */
    GoalExpectedSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao_1, GoalSettingExpected_1, GoalSettingExpected_ext_1, GoalExpectedDatas;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(resp.GoalExpected && resp.GoalExpected.length > 0)) return [3 /*break*/, 4];
                        dao_1 = this.DaoFactory.getDefaultDao();
                        //dao = new ClientCustomDao(dao);
                        GoalSettingExpected_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                        GoalSettingExpected_ext_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected_Extension');
                        console.log('GoalSettingExpected', GoalSettingExpected_1);
                        if (resp.GoalExpected != null) {
                            GoalExpectedDatas = resp.GoalExpected;
                            console.log('GoalExpectedDatas', GoalExpectedDatas);
                            GoalExpectedDatas.forEach((/**
                             * @param {?} GoalExpectedData
                             * @return {?}
                             */
                            function (GoalExpectedData) {
                                var e_1, _a;
                                console.log('GoalExpectedData', GoalExpectedData);
                                //delete the data that needs to be updated 
                                /** @type {?} */
                                var ToDeleteGoalExpectedYears = GoalExpectedData.DataYear;
                                console.log('ToDeleteGoalExpectedYears', ToDeleteGoalExpectedYears);
                                if (ToDeleteGoalExpectedYears != null) {
                                    GoalSettingExpected_1.addRestriction(new EqualRestriction('DataYear', [ToDeleteGoalExpectedYears]));
                                    dao_1.transactionDelete(GoalSettingExpected_1);
                                    //update all date 
                                    /** @type {?} */
                                    var clientID = uuid();
                                    GoalSettingExpected_1 = _this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                                    GoalSettingExpected_1.setValue("ClientID", clientID);
                                    GoalSettingExpected_1.setValue("DataYear", GoalExpectedData.DataYear);
                                    GoalSettingExpected_1.setValue("FYFC", GoalExpectedData.FYFC);
                                    GoalSettingExpected_1.setValue("ANP", GoalExpectedData.ANP);
                                    GoalSettingExpected_1.setValue("DataTime", parseISO(GoalExpectedData.synchDetail.lastUpdateDateTimeBackend).getTime());
                                    GoalSettingExpected_1.setValue("ClientTime", Date.now());
                                    GoalSettingExpected_ext_1.setValue("ClientID", clientID);
                                    /** @type {?} */
                                    var Recruitments = GoalExpectedData.Recruitments;
                                    try {
                                        for (var Recruitments_1 = tslib_1.__values(Recruitments), Recruitments_1_1 = Recruitments_1.next(); !Recruitments_1_1.done; Recruitments_1_1 = Recruitments_1.next()) {
                                            var data = Recruitments_1_1.value;
                                            GoalSettingExpected_1.setValue("Q" + data.Qarter, data.Value);
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (Recruitments_1_1 && !Recruitments_1_1.done && (_a = Recruitments_1.return)) _a.call(Recruitments_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                    console.log("GoalSettingExpected 2", GoalSettingExpected_1);
                                    dao_1.transactionInsert(GoalSettingExpected_1);
                                    dao_1.transactionInsert(GoalSettingExpected_ext_1);
                                }
                            }));
                        }
                        return [4 /*yield*/, dao_1.runTransaction().toPromise()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    GoalExpectedSync.prototype.getSequentialIDNeeded = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, -1];
            });
        });
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    GoalExpectedSync.prototype.setSequentialID = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    GoalExpectedSync.prototype.getPushData = /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datas, dao, GoalExpectedObj, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        datas = [];
                        dao = this.DaoFactory.getDefaultDao();
                        GoalExpectedObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Goal_Setting_Expected');
                        if (!(dao && GoalExpectedObj)) return [3 /*break*/, 2];
                        GoalExpectedObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                        return [4 /*yield*/, dao.queryByTable(GoalExpectedObj).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log('query GoalExpected obj:', resp);
                        if (resp.Body.length > 0) {
                            // let GoalExpectedArray = resp.Body;
                            datas = resp.Body;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, datas];
                }
            });
        });
    };
    return GoalExpectedSync;
}());
export { GoalExpectedSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalExpectedSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    GoalExpectedSync.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    GoalExpectedSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    GoalExpectedSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbEV4cGVjdGVkU3luYy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGF0YVN5bmMvZnVuY3Rpb24vR29hbEV4cGVjdGVkU3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEU7SUFHSSwwQkFBb0IsVUFBc0IsRUFBVSxPQUF3QixFQUFVLE9BQXdCO1FBQTFELHdCQUFBLEVBQUEsY0FBd0I7UUFBVSx3QkFBQSxFQUFBLGNBQXdCO1FBQTFGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsa0NBQU87OztJQUFQO1FBQ0ksT0FBTyxlQUFlLENBQUE7SUFDMUIsQ0FBQzs7OztJQUNELG1DQUFROzs7SUFBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELG1DQUFROzs7O0lBQVIsVUFBUyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUNLLHNDQUFXOzs7O0lBQWpCLFVBQWtCLFlBQW9COzs7Ozs7Ozt3QkFH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QUVMLHVCQUFDO0FBQUQsQ0FBQyxBQTlIRCxJQThIQzs7Ozs7OztJQTVIRyxpQ0FBc0I7Ozs7O0lBQ1Ysc0NBQThCOzs7OztJQUFFLG1DQUFnQzs7Ozs7SUFBRSxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IEdyZWF0ZXJSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9HcmVhdGVyUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvRXF1YWxSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBJU3luY0FPUCB9IGZyb20gXCIuL1N5bmNBT1AuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2UnO1xuXG5leHBvcnQgY2xhc3MgR29hbEV4cGVjdGVkU3luYyBpbXBsZW1lbnRzIElGdW5jdGlvblN5bmMge1xuXG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgRGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnR09BTF9FWFBFQ1RFRCdcbiAgICB9XG4gICAgZ2V0U3RhdGUoKTogRlVOQ19TVEFURSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuICAgIGFzeW5jIGdldFB1c2hKc29uKGZyb250ZW5kVGltZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgLy8gRG8gY2hlY2sgZGF0YSBjbGllbnRUaW1lID4gZnJvbnRlbmRUaW1lO1xuICAgICAgICAvL1RPRE86IEFkZCBleHRlbnNpb24gY29sdW1uXG4gICAgICAgIGxldCByZXR1cm5Kc29uID0gW107XG4gICAgICAgIGxldCBwdXNoRGF0YSA9IGF3YWl0IHRoaXMuZ2V0UHVzaERhdGEoZnJvbnRlbmRUaW1lKTtcblxuICAgICAgICBwdXNoRGF0YS5mb3JFYWNoKEdvYWxFeHBlY3RlZE9iaiA9PiB7XG4gICAgICAgICAgICBsZXQgUmVjcnVpdG1lbnRzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgUmVjcnVpdG1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiUWFydGVyXCI6IGksXG4gICAgICAgICAgICAgICAgICAgIFwiVmFsdWVcIjogR29hbEV4cGVjdGVkT2JqWydRJyArIGldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJlY3J1aXRtZW50cy5wdXNoKFJlY3J1aXRtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBqc29uT2JqID0ge1xuICAgICAgICAgICAgICAgIFwiRGF0YVllYXJcIjogR29hbEV4cGVjdGVkT2JqLkRhdGFZZWFyLFxuICAgICAgICAgICAgICAgIFwiRllGQ1wiOiBHb2FsRXhwZWN0ZWRPYmouRllGQyxcbiAgICAgICAgICAgICAgICBcIkFOUFwiOiBHb2FsRXhwZWN0ZWRPYmouQU5QLFxuICAgICAgICAgICAgICAgIFwiUmVjcnVpdG1lbnRzXCI6IFJlY3J1aXRtZW50cyxcbiAgICAgICAgICAgICAgICBcInN5bmNoRGV0YWlsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kXCI6IG5ldyBEYXRlKEdvYWxFeHBlY3RlZE9iai5EYXRhVGltZSkudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJleHRlbnNpb25zXCI6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuSnNvbi5wdXNoKGpzb25PYmopO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuUHVzaEFPUCkge1xuICAgICAgICAgICAgcmV0dXJuSnNvbiA9IGF3YWl0IHRoaXMuUHVsbEFPUC5leGVjdXRlKHJldHVybkpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5Kc29uO1xuICAgIH1cblxuICAgIGFzeW5jIHB1bGxEYXRhKHJlc3A6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5Hb2FsRXhwZWN0ZWQgJiYgcmVzcC5Hb2FsRXhwZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICAvL2RhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgICAgIGxldCBHb2FsU2V0dGluZ0V4cGVjdGVkID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfR29hbF9TZXR0aW5nX0V4cGVjdGVkJyk7XG4gICAgICAgICAgICBsZXQgR29hbFNldHRpbmdFeHBlY3RlZF9leHQgPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9Hb2FsX1NldHRpbmdfRXhwZWN0ZWRfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR29hbFNldHRpbmdFeHBlY3RlZCcsIEdvYWxTZXR0aW5nRXhwZWN0ZWQpO1xuICAgICAgICAgICAgaWYgKHJlc3AuR29hbEV4cGVjdGVkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgR29hbEV4cGVjdGVkRGF0YXMgPSByZXNwLkdvYWxFeHBlY3RlZDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29hbEV4cGVjdGVkRGF0YXMnLCBHb2FsRXhwZWN0ZWREYXRhcyk7XG5cbiAgICAgICAgICAgICAgICBHb2FsRXhwZWN0ZWREYXRhcy5mb3JFYWNoKEdvYWxFeHBlY3RlZERhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR29hbEV4cGVjdGVkRGF0YScsIEdvYWxFeHBlY3RlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZSB0aGUgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHVwZGF0ZWQgXG4gICAgICAgICAgICAgICAgICAgIGxldCBUb0RlbGV0ZUdvYWxFeHBlY3RlZFllYXJzID0gR29hbEV4cGVjdGVkRGF0YS5EYXRhWWVhcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RvRGVsZXRlR29hbEV4cGVjdGVkWWVhcnMnLCBUb0RlbGV0ZUdvYWxFeHBlY3RlZFllYXJzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoVG9EZWxldGVHb2FsRXhwZWN0ZWRZZWFycyAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRXhwZWN0ZWQuYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFZZWFyJywgW1RvRGVsZXRlR29hbEV4cGVjdGVkWWVhcnNdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoR29hbFNldHRpbmdFeHBlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBhbGwgZGF0ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRXhwZWN0ZWQgPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9Hb2FsX1NldHRpbmdfRXhwZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRXhwZWN0ZWQuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkLnNldFZhbHVlKFwiRGF0YVllYXJcIiwgR29hbEV4cGVjdGVkRGF0YS5EYXRhWWVhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkLnNldFZhbHVlKFwiRllGQ1wiLCBHb2FsRXhwZWN0ZWREYXRhLkZZRkMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdFeHBlY3RlZC5zZXRWYWx1ZShcIkFOUFwiLCBHb2FsRXhwZWN0ZWREYXRhLkFOUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkLnNldFZhbHVlKFwiRGF0YVRpbWVcIiwgcGFyc2VJU08oR29hbEV4cGVjdGVkRGF0YS5zeW5jaERldGFpbC5sYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdFeHBlY3RlZC5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgRGF0ZS5ub3coKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRXhwZWN0ZWRfZXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgUmVjcnVpdG1lbnRzOiBBcnJheTxhbnk+ID0gR29hbEV4cGVjdGVkRGF0YS5SZWNydWl0bWVudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIFJlY3J1aXRtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRXhwZWN0ZWQuc2V0VmFsdWUoXCJRXCIgKyBkYXRhLlFhcnRlciwgZGF0YS5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvYWxTZXR0aW5nRXhwZWN0ZWQgMlwiLCBHb2FsU2V0dGluZ0V4cGVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChHb2FsU2V0dGluZ0V4cGVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChHb2FsU2V0dGluZ0V4cGVjdGVkX2V4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFB1c2hEYXRhKGZyb250ZW5kVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkYXRhcyA9IFtdO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IEdvYWxFeHBlY3RlZE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1ZXX0dvYWxfU2V0dGluZ19FeHBlY3RlZCcpO1xuICAgICAgICBpZiAoZGFvICYmIEdvYWxFeHBlY3RlZE9iaikge1xuICAgICAgICAgICAgR29hbEV4cGVjdGVkT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyUmVzdHJpY3Rpb24oJ0NsaWVudFRpbWUnLCBbZnJvbnRlbmRUaW1lXSkpO1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKEdvYWxFeHBlY3RlZE9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncXVlcnkgR29hbEV4cGVjdGVkIG9iajonLCByZXNwKTtcbiAgICAgICAgICAgIGlmIChyZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBHb2FsRXhwZWN0ZWRBcnJheSA9IHJlc3AuQm9keTtcbiAgICAgICAgICAgICAgICBkYXRhcyA9IHJlc3AuQm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YXM7XG4gICAgfVxuXG59Il19