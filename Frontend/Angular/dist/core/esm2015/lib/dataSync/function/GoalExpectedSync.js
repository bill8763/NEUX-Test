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
export class GoalExpectedSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'GOAL_EXPECTED';
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this.state = state;
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            //TODO: Add extension column
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            pushData.forEach((/**
             * @param {?} GoalExpectedObj
             * @return {?}
             */
            GoalExpectedObj => {
                /** @type {?} */
                let Recruitments = [];
                for (let i = 1; i <= 4; i++) {
                    /** @type {?} */
                    let Recruitment = {
                        "Qarter": i,
                        "Value": GoalExpectedObj['Q' + i]
                    };
                    Recruitments.push(Recruitment);
                }
                /** @type {?} */
                let jsonObj = {
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
            if (this.PushAOP) {
                returnJson = yield this.PullAOP.execute(returnJson);
            }
            return returnJson;
        });
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    pullData(resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.PullAOP) {
                resp = yield this.PullAOP.execute(resp);
            }
            if (resp.GoalExpected && resp.GoalExpected.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                //dao = new ClientCustomDao(dao);
                /** @type {?} */
                let GoalSettingExpected = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                /** @type {?} */
                let GoalSettingExpected_ext = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected_Extension');
                console.log('GoalSettingExpected', GoalSettingExpected);
                if (resp.GoalExpected != null) {
                    /** @type {?} */
                    let GoalExpectedDatas = resp.GoalExpected;
                    console.log('GoalExpectedDatas', GoalExpectedDatas);
                    GoalExpectedDatas.forEach((/**
                     * @param {?} GoalExpectedData
                     * @return {?}
                     */
                    GoalExpectedData => {
                        console.log('GoalExpectedData', GoalExpectedData);
                        //delete the data that needs to be updated 
                        /** @type {?} */
                        let ToDeleteGoalExpectedYears = GoalExpectedData.DataYear;
                        console.log('ToDeleteGoalExpectedYears', ToDeleteGoalExpectedYears);
                        if (ToDeleteGoalExpectedYears != null) {
                            GoalSettingExpected.addRestriction(new EqualRestriction('DataYear', [ToDeleteGoalExpectedYears]));
                            dao.transactionDelete(GoalSettingExpected);
                            //update all date 
                            /** @type {?} */
                            let clientID = uuid();
                            GoalSettingExpected = this.DaoFactory.getDefaultTable('TW_LH_SD_Goal_Setting_Expected');
                            GoalSettingExpected.setValue("ClientID", clientID);
                            GoalSettingExpected.setValue("DataYear", GoalExpectedData.DataYear);
                            GoalSettingExpected.setValue("FYFC", GoalExpectedData.FYFC);
                            GoalSettingExpected.setValue("ANP", GoalExpectedData.ANP);
                            GoalSettingExpected.setValue("DataTime", parseISO(GoalExpectedData.synchDetail.lastUpdateDateTimeBackend).getTime());
                            GoalSettingExpected.setValue("ClientTime", Date.now());
                            GoalSettingExpected_ext.setValue("ClientID", clientID);
                            /** @type {?} */
                            let Recruitments = GoalExpectedData.Recruitments;
                            for (let data of Recruitments) {
                                GoalSettingExpected.setValue("Q" + data.Qarter, data.Value);
                            }
                            console.log("GoalSettingExpected 2", GoalSettingExpected);
                            dao.transactionInsert(GoalSettingExpected);
                            dao.transactionInsert(GoalSettingExpected_ext);
                        }
                    }));
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
    }
    /**
     * @return {?}
     */
    getSequentialIDNeeded() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return -1;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    getPushData(frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let datas = [];
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let GoalExpectedObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Goal_Setting_Expected');
            if (dao && GoalExpectedObj) {
                GoalExpectedObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(GoalExpectedObj).toPromise();
                console.log('query GoalExpected obj:', resp);
                if (resp.Body.length > 0) {
                    // let GoalExpectedArray = resp.Body;
                    datas = resp.Body;
                }
            }
            return datas;
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbEV4cGVjdGVkU3luYy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGF0YVN5bmMvZnVuY3Rpb24vR29hbEV4cGVjdGVkU3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEUsTUFBTTs7Ozs7O0lBR0YsWUFBb0IsVUFBc0IsRUFBVSxVQUFvQixJQUFJLEVBQVUsVUFBb0IsSUFBSTtRQUExRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMxRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELE9BQU87UUFDSCxPQUFPLGVBQWUsQ0FBQTtJQUMxQixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELFFBQVEsQ0FBQyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUNLLFdBQVcsQ0FBQyxZQUFvQjs7Ozs7Z0JBRzlCLFVBQVUsR0FBRyxFQUFFOztnQkFDZixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVks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SSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDO0tBQUE7Ozs7SUFFSyxxQkFBcUI7O1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssZUFBZSxDQUFDLEdBQWtCOztRQUV4QyxDQUFDO0tBQUE7Ozs7OztJQUVhLFdBQVcsQ0FBQyxZQUFvQjs7O2dCQUN0QyxLQUFLLEdBQUcsRUFBRTs7Z0JBQ1YsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOztnQkFDckMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1DQUFtQyxDQUFDO1lBQzFGLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRTtnQkFDeEIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQ2pGLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIscUNBQXFDO29CQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDckI7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUVKOzs7Ozs7SUE1SEcsaUNBQXNCOzs7OztJQUNWLHNDQUE4Qjs7Ozs7SUFBRSxtQ0FBZ0M7Ozs7O0lBQUUsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bmN0aW9uU3luYywgRlVOQ19TVEFURSB9IGZyb20gXCIuL0lGdW5jdGlvblN5bmNcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBHcmVhdGVyUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvR3JlYXRlclJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlJztcblxuZXhwb3J0IGNsYXNzIEdvYWxFeHBlY3RlZFN5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcblxuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksIHByaXZhdGUgUHVzaEFPUDogSVN5bmNBT1AgPSBudWxsLCBwcml2YXRlIFB1bGxBT1A6IElTeW5jQU9QID0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gRlVOQ19TVEFURS5BVkFJTEFCTEU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0dPQUxfRVhQRUNURUQnXG4gICAgfVxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cbiAgICBhc3luYyBnZXRQdXNoSnNvbihmcm9udGVuZFRpbWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIC8vIERvIGNoZWNrIGRhdGEgY2xpZW50VGltZSA+IGZyb250ZW5kVGltZTtcbiAgICAgICAgLy9UT0RPOiBBZGQgZXh0ZW5zaW9uIGNvbHVtblxuICAgICAgICBsZXQgcmV0dXJuSnNvbiA9IFtdO1xuICAgICAgICBsZXQgcHVzaERhdGEgPSBhd2FpdCB0aGlzLmdldFB1c2hEYXRhKGZyb250ZW5kVGltZSk7XG5cbiAgICAgICAgcHVzaERhdGEuZm9yRWFjaChHb2FsRXhwZWN0ZWRPYmogPT4ge1xuICAgICAgICAgICAgbGV0IFJlY3J1aXRtZW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IFJlY3J1aXRtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBcIlFhcnRlclwiOiBpLFxuICAgICAgICAgICAgICAgICAgICBcIlZhbHVlXCI6IEdvYWxFeHBlY3RlZE9ialsnUScgKyBpXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSZWNydWl0bWVudHMucHVzaChSZWNydWl0bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQganNvbk9iaiA9IHtcbiAgICAgICAgICAgICAgICBcIkRhdGFZZWFyXCI6IEdvYWxFeHBlY3RlZE9iai5EYXRhWWVhcixcbiAgICAgICAgICAgICAgICBcIkZZRkNcIjogR29hbEV4cGVjdGVkT2JqLkZZRkMsXG4gICAgICAgICAgICAgICAgXCJBTlBcIjogR29hbEV4cGVjdGVkT2JqLkFOUCxcbiAgICAgICAgICAgICAgICBcIlJlY3J1aXRtZW50c1wiOiBSZWNydWl0bWVudHMsXG4gICAgICAgICAgICAgICAgXCJzeW5jaERldGFpbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZFwiOiBuZXcgRGF0ZShHb2FsRXhwZWN0ZWRPYmouRGF0YVRpbWUpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybkpzb24ucHVzaChqc29uT2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLlB1c2hBT1ApIHtcbiAgICAgICAgICAgIHJldHVybkpzb24gPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXR1cm5Kc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuSnNvbjtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3AuR29hbEV4cGVjdGVkICYmIHJlc3AuR29hbEV4cGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgLy9kYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgICAgICBsZXQgR29hbFNldHRpbmdFeHBlY3RlZCA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0dvYWxfU2V0dGluZ19FeHBlY3RlZCcpO1xuICAgICAgICAgICAgbGV0IEdvYWxTZXR0aW5nRXhwZWN0ZWRfZXh0ID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfR29hbF9TZXR0aW5nX0V4cGVjdGVkX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvYWxTZXR0aW5nRXhwZWN0ZWQnLCBHb2FsU2V0dGluZ0V4cGVjdGVkKTtcbiAgICAgICAgICAgIGlmIChyZXNwLkdvYWxFeHBlY3RlZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IEdvYWxFeHBlY3RlZERhdGFzID0gcmVzcC5Hb2FsRXhwZWN0ZWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvYWxFeHBlY3RlZERhdGFzJywgR29hbEV4cGVjdGVkRGF0YXMpO1xuXG4gICAgICAgICAgICAgICAgR29hbEV4cGVjdGVkRGF0YXMuZm9yRWFjaChHb2FsRXhwZWN0ZWREYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvYWxFeHBlY3RlZERhdGEnLCBHb2FsRXhwZWN0ZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9kZWxldGUgdGhlIGRhdGEgdGhhdCBuZWVkcyB0byBiZSB1cGRhdGVkIFxuICAgICAgICAgICAgICAgICAgICBsZXQgVG9EZWxldGVHb2FsRXhwZWN0ZWRZZWFycyA9IEdvYWxFeHBlY3RlZERhdGEuRGF0YVllYXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb0RlbGV0ZUdvYWxFeHBlY3RlZFllYXJzJywgVG9EZWxldGVHb2FsRXhwZWN0ZWRZZWFycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFRvRGVsZXRlR29hbEV4cGVjdGVkWWVhcnMgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFtUb0RlbGV0ZUdvYWxFeHBlY3RlZFllYXJzXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKEdvYWxTZXR0aW5nRXhwZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy91cGRhdGUgYWxsIGRhdGUgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfR29hbF9TZXR0aW5nX0V4cGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdFeHBlY3RlZC5zZXRWYWx1ZShcIkRhdGFZZWFyXCIsIEdvYWxFeHBlY3RlZERhdGEuRGF0YVllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdFeHBlY3RlZC5zZXRWYWx1ZShcIkZZRkNcIiwgR29hbEV4cGVjdGVkRGF0YS5GWUZDKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRXhwZWN0ZWQuc2V0VmFsdWUoXCJBTlBcIiwgR29hbEV4cGVjdGVkRGF0YS5BTlApO1xuICAgICAgICAgICAgICAgICAgICAgICAgR29hbFNldHRpbmdFeHBlY3RlZC5zZXRWYWx1ZShcIkRhdGFUaW1lXCIsIHBhcnNlSVNPKEdvYWxFeHBlY3RlZERhdGEuc3luY2hEZXRhaWwubGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWxTZXR0aW5nRXhwZWN0ZWQuc2V0VmFsdWUoXCJDbGllbnRUaW1lXCIsIERhdGUubm93KCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkX2V4dC5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFJlY3J1aXRtZW50czogQXJyYXk8YW55PiA9IEdvYWxFeHBlY3RlZERhdGEuUmVjcnVpdG1lbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiBSZWNydWl0bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsU2V0dGluZ0V4cGVjdGVkLnNldFZhbHVlKFwiUVwiICsgZGF0YS5RYXJ0ZXIsIGRhdGEuVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb2FsU2V0dGluZ0V4cGVjdGVkIDJcIiwgR29hbFNldHRpbmdFeHBlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoR29hbFNldHRpbmdFeHBlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoR29hbFNldHRpbmdFeHBlY3RlZF9leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRQdXNoRGF0YShmcm9udGVuZFRpbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgZGF0YXMgPSBbXTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGxldCBHb2FsRXhwZWN0ZWRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19Hb2FsX1NldHRpbmdfRXhwZWN0ZWQnKTtcbiAgICAgICAgaWYgKGRhbyAmJiBHb2FsRXhwZWN0ZWRPYmopIHtcbiAgICAgICAgICAgIEdvYWxFeHBlY3RlZE9iai5hZGRSZXN0cmljdGlvbihuZXcgR3JlYXRlclJlc3RyaWN0aW9uKCdDbGllbnRUaW1lJywgW2Zyb250ZW5kVGltZV0pKTtcbiAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShHb2FsRXhwZWN0ZWRPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IEdvYWxFeHBlY3RlZCBvYmo6JywgcmVzcCk7XG4gICAgICAgICAgICBpZiAocmVzcC5Cb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgR29hbEV4cGVjdGVkQXJyYXkgPSByZXNwLkJvZHk7XG4gICAgICAgICAgICAgICAgZGF0YXMgPSByZXNwLkJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFzO1xuICAgIH1cblxufSJdfQ==