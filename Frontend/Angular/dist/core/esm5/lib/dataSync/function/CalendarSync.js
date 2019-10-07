/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { GreaterRestriction } from "../../device/sqlite/restrictions/GreaterRestriction";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
import { v4 as uuid } from 'uuid';
import { parseISO } from 'date-fns';
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var CalendarSync = /** @class */ (function () {
    function CalendarSync(DaoFactory, PushAOP, PullAOP) {
        if (PushAOP === void 0) { PushAOP = null; }
        if (PullAOP === void 0) { PullAOP = null; }
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.tmpPushData = null;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    CalendarSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    CalendarSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'CALENDAR';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    CalendarSync.prototype.getPushJson = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao, calendarExtObj, returnJson, customerIDMap, pushData, extCols;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Do check data clientTime > frontendTime;
                        dao = this.DaoFactory.getDefaultDao();
                        calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                        returnJson = [];
                        return [4 /*yield*/, this.getCustomerIDMap()];
                    case 1:
                        customerIDMap = _a.sent();
                        return [4 /*yield*/, this.getPushData(frontendTime)];
                    case 2:
                        pushData = _a.sent();
                        extCols = calendarExtObj.getColumns().filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CalendarID'; }));
                        returnJson = pushData.map((/**
                         * @param {?} calendarObj
                         * @return {?}
                         */
                        function (calendarObj) {
                            /** @type {?} */
                            var extensions = extCols
                                .map((/**
                             * @param {?} col
                             * @return {?}
                             */
                            function (col) {
                                return {
                                    id: col.getName(),
                                    type: col.getType(),
                                    value: calendarObj[col.getName()]
                                };
                            }));
                            return {
                                "appointmentId": calendarObj.CalendarID,
                                "name": calendarObj.Title,
                                "meetingLocation": calendarObj.Location,
                                "appointmentType": calendarObj.CalendarType,
                                "allDay": calendarObj.IsAllDay === 'Y' ? true : false,
                                "startDateTime": new Date(calendarObj.StartTime).toISOString(),
                                "endDateTime": new Date(calendarObj.EndTime).toISOString(),
                                "alertTimes": [calendarObj.Alert1, calendarObj.Alert2, calendarObj.Alert3].filter((/**
                                 * @param {?} x
                                 * @return {?}
                                 */
                                function (x) { return x != null && x != ""; })),
                                "personId": customerIDMap[calendarObj.CustomerClientID] ? customerIDMap[calendarObj.CustomerClientID] : '',
                                "description": calendarObj.Remark,
                                "isChangeable": calendarObj.DataSource !== 'OPUS',
                                "extensions": extensions,
                                "synchDetail": {
                                    "clientTime": new Date(calendarObj.ClientTime).toISOString(),
                                    "lastUpdateDateTimeBackend": new Date(calendarObj.DataTime).toISOString(),
                                    "toDelete": calendarObj.IsDelete === 'Y'
                                }
                            };
                        }));
                        if (!this.PushAOP) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.PullAOP.execute(returnJson)];
                    case 3:
                        returnJson = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, returnJson];
                }
            });
        });
    };
    /**
     * @param {?} resp
     * @return {?}
     */
    CalendarSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, dao, calendarObj, calendarExtObj_1, customerIDMap, calendarDatas, calendarIdArr, calendarClientIdArr, _c, _d, data, IsAlert, extensions, clientID, _e, _f, id;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _g.sent();
                        _g.label = 2;
                    case 2:
                        if (!(resp.appointments.length > 0 || resp.deletedAppointmentIds.length > 0)) return [3 /*break*/, 6];
                        dao = this.DaoFactory.getDefaultDao();
                        calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                        calendarExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                        return [4 /*yield*/, this.getCustomerIDMap(true)];
                    case 3:
                        customerIDMap = _g.sent();
                        return [4 /*yield*/, dao.queryByTable(calendarObj).toPromise().then((/**
                             * @param {?} res
                             * @return {?}
                             */
                            function (res) { return res.Body; }))];
                    case 4:
                        calendarDatas = _g.sent();
                        calendarIdArr = calendarDatas.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.CalendarID; }));
                        calendarClientIdArr = calendarDatas.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.ClientID; }));
                        console.log('calendar ID array:', calendarIdArr);
                        console.log('calendar Client ID array:', calendarClientIdArr);
                        try {
                            for (_c = tslib_1.__values(resp.appointments), _d = _c.next(); !_d.done; _d = _c.next()) {
                                data = _d.value;
                                IsAlert = data.alertTimes.length > 0 ? 'Y' : 'N';
                                calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                                calendarExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                calendarObj.setValue("CalendarID", data.appointmentId);
                                calendarObj.setValue("Title", data.name);
                                calendarObj.setValue("Location", data.meetingLocation);
                                calendarObj.setValue("CalendarType", data.appointmentType);
                                calendarObj.setValue("IsAllDay", data.allDay ? 'Y' : 'N');
                                calendarObj.setValue("StartTime", parseISO(data.startDateTime).getTime());
                                calendarObj.setValue("EndTime", parseISO(data.endDateTime).getTime());
                                calendarObj.setValue("CustomerClientID", customerIDMap[data.personId]);
                                calendarObj.setValue("IsAlert", IsAlert);
                                if (IsAlert)
                                    calendarObj.setValue("Alert1", data.alertTimes[0]);
                                if (data.alertTimes.length > 1)
                                    calendarObj.setValue("Alert2", data.alertTimes[1]);
                                if (data.alertTimes.length > 2)
                                    calendarObj.setValue("Alert3", data.alertTimes[2]);
                                calendarObj.setValue("Remark", data.description);
                                calendarObj.setValue("IsDelete", 'N');
                                calendarObj.setValue("DataSource", data.isChangeable ? "APP" : "OPUS");
                                calendarObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                                calendarObj.setValue("ClientTime", Date.now());
                                extensions = data.extensions;
                                calendarObj.setValue("CalendarID", data.appointmentId);
                                calendarExtObj_1.setValue("CalendarID", data.appointmentId);
                                if (extensions != null) {
                                    extensions.forEach((/**
                                     * @param {?} extension
                                     * @return {?}
                                     */
                                    function (extension) {
                                        calendarExtObj_1.setValue(extension.id, extension.value);
                                    }));
                                }
                                if (calendarIdArr.includes(data.appointmentId)) {
                                    calendarObj.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                                    calendarExtObj_1.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                                    dao.transactionUpdate(calendarObj);
                                    dao.transactionUpdate(calendarExtObj_1);
                                }
                                else {
                                    clientID = uuid();
                                    calendarObj.setValue("ClientID", clientID);
                                    calendarExtObj_1.setValue("ClientID", clientID);
                                    dao.transactionInsert(calendarObj);
                                    dao.transactionInsert(calendarExtObj_1);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        try {
                            for (_e = tslib_1.__values(resp.deletedAppointmentIds), _f = _e.next(); !_f.done; _f = _e.next()) {
                                id = _f.value;
                                calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                                calendarExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                calendarObj.addRestriction(new EqualRestriction('CalendarID', [id]));
                                calendarExtObj_1.addRestriction(new EqualRestriction('CalendarID', [id]));
                                dao.transactionDelete(calendarObj);
                                dao.transactionDelete(calendarExtObj_1);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [4 /*yield*/, dao.runTransaction().toPromise()];
                    case 5: return [2 /*return*/, _g.sent()];
                    case 6: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                }
            });
        });
    };
    /**
     * @param {?} state
     * @return {?}
     */
    CalendarSync.prototype.setState = /**
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
    CalendarSync.prototype.getSequentialIDNeeded = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var pushData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPushData(frontendTime)];
                    case 1:
                        pushData = _a.sent();
                        this.tmpPushData = pushData.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.CalendarID === null; }));
                        return [2 /*return*/, this.tmpPushData.length];
                }
            });
        });
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    CalendarSync.prototype.setSequentialID = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_3, _a, dataWithoutIds, dao, _b, _c, _d, index, data, calendarObj, calendarExtObj;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(this.tmpPushData != null)) return [3 /*break*/, 2];
                        //set to tmpData && Sqlite
                        dataWithoutIds = this.tmpPushData;
                        dao = this.DaoFactory.getDefaultDao();
                        try {
                            for (_b = tslib_1.__values(dataWithoutIds.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                _d = tslib_1.__read(_c.value, 2), index = _d[0], data = _d[1];
                                calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                                calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                                calendarObj.setValue("CalendarID", ids[index]);
                                calendarObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                dao.transactionUpdate(calendarObj);
                                calendarExtObj.setValue("CalendarID", ids[index]);
                                calendarExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                dao.transactionUpdate(calendarExtObj);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [4 /*yield*/, dao.runTransaction().toPromise()];
                    case 1:
                        _e.sent();
                        this.tmpPushData = null;
                        _e.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    CalendarSync.prototype.getPushData = /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datas, dao, calendarObj, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        datas = [];
                        dao = this.DaoFactory.getDefaultDao();
                        calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Calendar');
                        if (!(dao && calendarObj)) return [3 /*break*/, 2];
                        calendarObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                        return [4 /*yield*/, dao.queryByTable(calendarObj).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log('query calendar obj:', resp);
                        if (resp.Body.length > 0)
                            datas = resp.Body;
                        _a.label = 2;
                    case 2: return [2 /*return*/, datas];
                }
            });
        });
    };
    /**
     * @private
     * @param {?=} reverse
     * @return {?}
     */
    CalendarSync.prototype.getCustomerIDMap = /**
     * @private
     * @param {?=} reverse
     * @return {?}
     */
    function (reverse) {
        if (reverse === void 0) { reverse = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao, customerObj, resp, customerList;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dao = this.DaoFactory.getDefaultDao();
                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                        if (!(dao && customerObj)) return [3 /*break*/, 2];
                        return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log('query customer obj:', resp);
                        if (resp.Body.length > 0) {
                            customerList = resp.Body;
                            //if reverse ,set key as CustomerID ,val as ClientID
                            if (reverse)
                                customerList = customerList.map((/**
                                 * @param {?} x
                                 * @return {?}
                                 */
                                function (x) { return { key: x.CustomerID, val: x.ClientID }; }));
                            else
                                customerList = customerList.map((/**
                                 * @param {?} x
                                 * @return {?}
                                 */
                                function (x) { return { key: x.ClientID, val: x.CustomerID }; }));
                            return [2 /*return*/, customerList.reduce((/**
                                 * @param {?} map
                                 * @param {?} obj
                                 * @return {?}
                                 */
                                function (map, obj) {
                                    map[obj.key] = obj.val;
                                    return map;
                                }), {})];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, {}];
                }
            });
        });
    };
    return CalendarSync;
}());
export { CalendarSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    CalendarSync.prototype.tmpPushData;
    /**
     * @type {?}
     * @private
     */
    CalendarSync.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    CalendarSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    CalendarSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9DYWxlbmRhclN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSXBFO0lBR0ksc0JBQW9CLFVBQXNCLEVBQVUsT0FBd0IsRUFBVSxPQUF3QjtRQUExRCx3QkFBQSxFQUFBLGNBQXdCO1FBQVUsd0JBQUEsRUFBQSxjQUF3QjtRQUExRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUR0RyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsOEJBQU87OztJQUFQO1FBQ0ksT0FBTyxVQUFVLENBQUE7SUFDckIsQ0FBQzs7Ozs7SUFFSyxrQ0FBVzs7OztJQUFqQixVQUFrQixZQUFZOzs7Ozs7O3dCQUV0QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7d0JBQ3JDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIsQ0FBQzt3QkFDL0UsVUFBVSxHQUFHLEVBQUU7d0JBQ0MscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUE3QyxhQUFhLEdBQUcsU0FBNkI7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUEvQyxRQUFRLEdBQUcsU0FBb0M7d0JBQy9DLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTTs7Ozt3QkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLFlBQVksRUFBMUQsQ0FBMEQsRUFBQzt3QkFFakgsVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHOzs7O3dCQUFDLFVBQUEsV0FBVzs7Z0NBQzdCLFVBQVUsR0FBRyxPQUFPO2lDQUNuQixHQUFHOzs7OzRCQUFDLFVBQUEsR0FBRztnQ0FDSixPQUFPO29DQUNILEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO29DQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRTtvQ0FDbkIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7aUNBQ3BDLENBQUE7NEJBQ0wsQ0FBQyxFQUFDOzRCQUNOLE9BQU87Z0NBQ0gsZUFBZSxFQUFFLFdBQVcsQ0FBQyxVQUFVO2dDQUN2QyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUs7Z0NBQ3pCLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxRQUFRO2dDQUN2QyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsWUFBWTtnQ0FDM0MsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0NBQ3JELGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFO2dDQUM5RCxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQ0FDMUQsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7O2dDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixFQUFDO2dDQUM1RyxVQUFVLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQzFHLGFBQWEsRUFBRSxXQUFXLENBQUMsTUFBTTtnQ0FDakMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxVQUFVLEtBQUssTUFBTTtnQ0FDakQsWUFBWSxFQUFFLFVBQVU7Z0NBQ3hCLGFBQWEsRUFBRTtvQ0FDWCxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtvQ0FDNUQsMkJBQTJCLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRTtvQ0FDekUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEtBQUssR0FBRztpQ0FDM0M7NkJBQ0osQ0FBQTt3QkFDTCxDQUFDLEVBQUMsQ0FBQzs2QkFFQyxJQUFJLENBQUMsT0FBTyxFQUFaLHdCQUFZO3dCQUNDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBbkQsVUFBVSxHQUFHLFNBQXNDLENBQUM7OzRCQUV4RCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7Ozs7O0lBRUssK0JBQVE7Ozs7SUFBZCxVQUFlLElBQUk7Ozs7Ozs2QkFDWCxJQUFJLENBQUMsT0FBTyxFQUFaLHdCQUFZO3dCQUNMLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdkMsSUFBSSxHQUFHLFNBQWdDLENBQUM7Ozs2QkFFeEMsQ0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUEsRUFBckUsd0JBQXFFO3dCQUNqRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7d0JBQ3JDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEUsbUJBQWlCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDO3dCQUMvRCxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFqRCxhQUFhLEdBQUcsU0FBaUM7d0JBQ2pDLHFCQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7Ozs0QkFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQVIsQ0FBUSxFQUFDLEVBQUE7O3dCQUF2RixhQUFhLEdBQUcsU0FBdUU7d0JBQ3ZGLGFBQWEsR0FBRyxhQUFhLENBQUMsR0FBRzs7Ozt3QkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLEVBQVosQ0FBWSxFQUFDO3dCQUNwRCxtQkFBbUIsR0FBRyxhQUFhLENBQUMsR0FBRzs7Ozt3QkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxFQUFDO3dCQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyxDQUFDO3dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLG1CQUFtQixDQUFDLENBQUE7OzRCQUM3RCxLQUFpQixLQUFBLGlCQUFBLElBQUksQ0FBQyxZQUFZLENBQUEsNENBQUU7Z0NBQTNCLElBQUk7Z0NBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dDQUNwRCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQ0FDbkUsZ0JBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dDQUNoRixXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0NBQ3ZELFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDekMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dDQUN2RCxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0NBQzNELFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQzFELFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQ0FDMUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dDQUN0RSxXQUFXLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQ0FDdkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0NBQ3pDLElBQUksT0FBTztvQ0FDUCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQ0FDMUIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUN2RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7b0NBQzFCLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDdkQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUNqRCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDdEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDdkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dDQUNqRyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQ0FFM0MsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO2dDQUNoQyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0NBQ3ZELGdCQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0NBQzFELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtvQ0FDcEIsVUFBVSxDQUFDLE9BQU87Ozs7b0NBQUMsVUFBQSxTQUFTO3dDQUN4QixnQkFBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDM0QsQ0FBQyxFQUFDLENBQUM7aUNBQ047Z0NBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtvQ0FDNUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ3JGLGdCQUFjLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDeEYsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO29DQUNuQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZ0JBQWMsQ0FBQyxDQUFDO2lDQUN6QztxQ0FDSTtvQ0FDRyxRQUFRLEdBQUcsSUFBSSxFQUFFO29DQUNyQixXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQ0FDM0MsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29DQUM5QyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7b0NBQ25DLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBYyxDQUFDLENBQUM7aUNBQ3pDOzZCQUNKOzs7Ozs7Ozs7OzRCQUVELEtBQWUsS0FBQSxpQkFBQSxJQUFJLENBQUMscUJBQXFCLENBQUEsNENBQUU7Z0NBQWxDLEVBQUU7Z0NBQ1AsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0NBQ25FLGdCQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQ0FDaEYsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDckUsZ0JBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3hFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQ0FDbkMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFjLENBQUMsQ0FBQzs2QkFDekM7Ozs7Ozs7Ozt3QkFFTSxxQkFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBQTdDLHNCQUFPLFNBQXNDLEVBQUM7NEJBRzlDLHNCQUFPLElBQUksY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDOzs7O0tBRXZEOzs7OztJQUVELCtCQUFROzs7O0lBQVIsVUFBUyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUVLLDRDQUFxQjs7OztJQUEzQixVQUE0QixZQUFvQjs7Ozs7NEJBQzdCLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUEvQyxRQUFRLEdBQUcsU0FBb0M7d0JBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7d0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksRUFBckIsQ0FBcUIsRUFBQyxDQUFDO3dCQUMvRCxzQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQzs7OztLQUVsQzs7Ozs7SUFFSyxzQ0FBZTs7OztJQUFyQixVQUFzQixHQUFrQjs7Ozs7OzZCQUNoQyxDQUFBLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFBLEVBQXhCLHdCQUF3Qjs7d0JBRXBCLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVzt3QkFFakMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOzs0QkFDekMsS0FBMEIsS0FBQSxpQkFBQSxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUEsNENBQUU7Z0NBQTNDLEtBQUEsMkJBQWEsRUFBWixLQUFLLFFBQUEsRUFBRSxJQUFJLFFBQUE7Z0NBQ2IsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDO2dDQUNsRSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUM7Z0NBQ25GLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUMvQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDOUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUNuQyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDbEQsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pGLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzs2QkFDekM7Ozs7Ozs7Ozt3QkFDRCxxQkFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF0QyxTQUFzQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7Ozs7O0tBRy9COzs7Ozs7SUFFYSxrQ0FBVzs7Ozs7SUFBekIsVUFBMEIsWUFBb0I7Ozs7Ozt3QkFDdEMsS0FBSyxHQUFHLEVBQUU7d0JBQ1YsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO3dCQUNyQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUM7NkJBQ3JFLENBQUEsR0FBRyxJQUFJLFdBQVcsQ0FBQSxFQUFsQix3QkFBa0I7d0JBQ2xCLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RFLHFCQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF0RCxJQUFJLEdBQUcsU0FBK0M7d0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3pDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7OzRCQUUxQixzQkFBTyxLQUFLLEVBQUM7Ozs7S0FDaEI7Ozs7OztJQUVhLHVDQUFnQjs7Ozs7SUFBOUIsVUFBK0IsT0FBZTtRQUFmLHdCQUFBLEVBQUEsZUFBZTs7Ozs7O3dCQUN0QyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7d0JBQ3JDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQzs2QkFDckUsQ0FBQSxHQUFHLElBQUksV0FBVyxDQUFBLEVBQWxCLHdCQUFrQjt3QkFDUCxxQkFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBdEQsSUFBSSxHQUFHLFNBQStDO3dCQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJOzRCQUM1QixvREFBb0Q7NEJBQ3BELElBQUksT0FBTztnQ0FDUCxZQUFZLEdBQUcsWUFBWSxDQUFDLEdBQUc7Ozs7Z0NBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUMsQ0FBQTs7Z0NBRXZGLFlBQVksR0FBRyxZQUFZLENBQUMsR0FBRzs7OztnQ0FBQyxVQUFBLENBQUMsSUFBTSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBQyxDQUFBOzRCQUMzRixzQkFBTyxZQUFZLENBQUMsTUFBTTs7Ozs7Z0NBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztvQ0FDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO29DQUN2QixPQUFPLEdBQUcsQ0FBQztnQ0FDZixDQUFDLEdBQUUsRUFBRSxDQUFDLEVBQUM7eUJBQ1Y7OzRCQUVMLHNCQUFPLEVBQUUsRUFBQzs7OztLQUNiO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBL01ELElBK01DOzs7Ozs7O0lBOU1HLDZCQUFzQjs7Ozs7SUFDdEIsbUNBQTJCOzs7OztJQUNmLGtDQUE4Qjs7Ozs7SUFBRSwrQkFBZ0M7Ozs7O0lBQUUsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bmN0aW9uU3luYywgRlVOQ19TVEFURSB9IGZyb20gXCIuL0lGdW5jdGlvblN5bmNcIjtcbmltcG9ydCB7IEdyZWF0ZXJSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9HcmVhdGVyUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVSZXNwb25zZVwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU3luYyBpbXBsZW1lbnRzIElGdW5jdGlvblN5bmMge1xuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHRtcFB1c2hEYXRhID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksIHByaXZhdGUgUHVzaEFPUDogSVN5bmNBT1AgPSBudWxsLCBwcml2YXRlIFB1bGxBT1A6IElTeW5jQU9QID0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gRlVOQ19TVEFURS5BVkFJTEFCTEU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKTogRlVOQ19TVEFURSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDQUxFTkRBUidcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQdXNoSnNvbihmcm9udGVuZFRpbWUpIHtcbiAgICAgICAgLy8gRG8gY2hlY2sgZGF0YSBjbGllbnRUaW1lID4gZnJvbnRlbmRUaW1lO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IGNhbGVuZGFyRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCByZXR1cm5Kc29uID0gW107XG4gICAgICAgIGxldCBjdXN0b21lcklETWFwID0gYXdhaXQgdGhpcy5nZXRDdXN0b21lcklETWFwKCk7XG4gICAgICAgIGxldCBwdXNoRGF0YSA9IGF3YWl0IHRoaXMuZ2V0UHVzaERhdGEoZnJvbnRlbmRUaW1lKTtcbiAgICAgICAgbGV0IGV4dENvbHMgPSBjYWxlbmRhckV4dE9iai5nZXRDb2x1bW5zKCkuZmlsdGVyKHggPT4geC5nZXROYW1lKCkgIT09ICdDbGllbnRJRCcgJiYgeC5nZXROYW1lKCkgIT09ICdDYWxlbmRhcklEJyk7XG5cbiAgICAgICAgcmV0dXJuSnNvbiA9IHB1c2hEYXRhLm1hcChjYWxlbmRhck9iaiA9PiB7XG4gICAgICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGV4dENvbHNcbiAgICAgICAgICAgICAgICAubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY29sLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2FsZW5kYXJPYmpbY29sLmdldE5hbWUoKV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImFwcG9pbnRtZW50SWRcIjogY2FsZW5kYXJPYmouQ2FsZW5kYXJJRCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogY2FsZW5kYXJPYmouVGl0bGUsXG4gICAgICAgICAgICAgICAgXCJtZWV0aW5nTG9jYXRpb25cIjogY2FsZW5kYXJPYmouTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgXCJhcHBvaW50bWVudFR5cGVcIjogY2FsZW5kYXJPYmouQ2FsZW5kYXJUeXBlLFxuICAgICAgICAgICAgICAgIFwiYWxsRGF5XCI6IGNhbGVuZGFyT2JqLklzQWxsRGF5ID09PSAnWScgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJzdGFydERhdGVUaW1lXCI6IG5ldyBEYXRlKGNhbGVuZGFyT2JqLlN0YXJ0VGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBcImVuZERhdGVUaW1lXCI6IG5ldyBEYXRlKGNhbGVuZGFyT2JqLkVuZFRpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgXCJhbGVydFRpbWVzXCI6IFtjYWxlbmRhck9iai5BbGVydDEsIGNhbGVuZGFyT2JqLkFsZXJ0MiwgY2FsZW5kYXJPYmouQWxlcnQzXS5maWx0ZXIoeCA9PiB4ICE9IG51bGwgJiYgeCAhPSBcIlwiKSxcbiAgICAgICAgICAgICAgICBcInBlcnNvbklkXCI6IGN1c3RvbWVySURNYXBbY2FsZW5kYXJPYmouQ3VzdG9tZXJDbGllbnRJRF0gPyBjdXN0b21lcklETWFwW2NhbGVuZGFyT2JqLkN1c3RvbWVyQ2xpZW50SURdIDogJycsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBjYWxlbmRhck9iai5SZW1hcmssXG4gICAgICAgICAgICAgICAgXCJpc0NoYW5nZWFibGVcIjogY2FsZW5kYXJPYmouRGF0YVNvdXJjZSAhPT0gJ09QVVMnLFxuICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBleHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIFwic3luY2hEZXRhaWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWVudFRpbWVcIjogbmV3IERhdGUoY2FsZW5kYXJPYmouQ2xpZW50VGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kXCI6IG5ldyBEYXRlKGNhbGVuZGFyT2JqLkRhdGFUaW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBcInRvRGVsZXRlXCI6IGNhbGVuZGFyT2JqLklzRGVsZXRlID09PSAnWSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLlB1c2hBT1ApIHtcbiAgICAgICAgICAgIHJldHVybkpzb24gPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXR1cm5Kc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuSnNvbjtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5hcHBvaW50bWVudHMubGVuZ3RoID4gMCB8fCByZXNwLmRlbGV0ZWRBcHBvaW50bWVudElkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0NhbGVuZGFyJyk7XG4gICAgICAgICAgICBsZXQgY2FsZW5kYXJFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DYWxlbmRhcl9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgIGxldCBjdXN0b21lcklETWFwID0gYXdhaXQgdGhpcy5nZXRDdXN0b21lcklETWFwKHRydWUpO1xuICAgICAgICAgICAgbGV0IGNhbGVuZGFyRGF0YXMgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKGNhbGVuZGFyT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXMpID0+IHJlcy5Cb2R5KTtcbiAgICAgICAgICAgIGxldCBjYWxlbmRhcklkQXJyID0gY2FsZW5kYXJEYXRhcy5tYXAoeCA9PiB4LkNhbGVuZGFySUQpO1xuICAgICAgICAgICAgbGV0IGNhbGVuZGFyQ2xpZW50SWRBcnIgPSBjYWxlbmRhckRhdGFzLm1hcCh4ID0+IHguQ2xpZW50SUQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGVuZGFyIElEIGFycmF5OicsIGNhbGVuZGFySWRBcnIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGVuZGFyIENsaWVudCBJRCBhcnJheTonLCBjYWxlbmRhckNsaWVudElkQXJyKVxuICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiByZXNwLmFwcG9pbnRtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBJc0FsZXJ0ID0gZGF0YS5hbGVydFRpbWVzLmxlbmd0aCA+IDAgPyAnWScgOiAnTic7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DYWxlbmRhcicpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJDYWxlbmRhcklEXCIsIGRhdGEuYXBwb2ludG1lbnRJZCk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJUaXRsZVwiLCBkYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiTG9jYXRpb25cIiwgZGF0YS5tZWV0aW5nTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQ2FsZW5kYXJUeXBlXCIsIGRhdGEuYXBwb2ludG1lbnRUeXBlKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIklzQWxsRGF5XCIsIGRhdGEuYWxsRGF5ID8gJ1knIDogJ04nKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIlN0YXJ0VGltZVwiLCBwYXJzZUlTTyhkYXRhLnN0YXJ0RGF0ZVRpbWUpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJFbmRUaW1lXCIsIHBhcnNlSVNPKGRhdGEuZW5kRGF0ZVRpbWUpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJDdXN0b21lckNsaWVudElEXCIsIGN1c3RvbWVySURNYXBbZGF0YS5wZXJzb25JZF0pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiSXNBbGVydFwiLCBJc0FsZXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAoSXNBbGVydClcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJBbGVydDFcIiwgZGF0YS5hbGVydFRpbWVzWzBdKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hbGVydFRpbWVzLmxlbmd0aCA+IDEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQWxlcnQyXCIsIGRhdGEuYWxlcnRUaW1lc1sxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWxlcnRUaW1lcy5sZW5ndGggPiAyKVxuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkFsZXJ0M1wiLCBkYXRhLmFsZXJ0VGltZXNbMl0pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiUmVtYXJrXCIsIGRhdGEuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiSXNEZWxldGVcIiwgJ04nKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkRhdGFTb3VyY2VcIiwgZGF0YS5pc0NoYW5nZWFibGUgPyBcIkFQUFwiIDogXCJPUFVTXCIpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiRGF0YVRpbWVcIiwgcGFyc2VJU08oZGF0YS5zeW5jaERldGFpbC5sYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQ2xpZW50VGltZVwiLCBEYXRlLm5vdygpKTtcblxuICAgICAgICAgICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQ2FsZW5kYXJJRFwiLCBkYXRhLmFwcG9pbnRtZW50SWQpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXh0T2JqLnNldFZhbHVlKFwiQ2FsZW5kYXJJRFwiLCBkYXRhLmFwcG9pbnRtZW50SWQpO1xuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dGVuc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iai5zZXRWYWx1ZShleHRlbnNpb24uaWQsIGV4dGVuc2lvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjYWxlbmRhcklkQXJyLmluY2x1ZGVzKGRhdGEuYXBwb2ludG1lbnRJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NhbGVuZGFySUQnLCBbZGF0YS5hcHBvaW50bWVudElkXSkpO1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2FsZW5kYXJJRCcsIFtkYXRhLmFwcG9pbnRtZW50SWRdKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjYWxlbmRhck9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjYWxlbmRhckV4dE9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGNhbGVuZGFyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGNhbGVuZGFyRXh0T2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGlkIG9mIHJlc3AuZGVsZXRlZEFwcG9pbnRtZW50SWRzKSB7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DYWxlbmRhcicpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NhbGVuZGFySUQnLCBbaWRdKSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NhbGVuZGFySUQnLCBbaWRdKSk7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGNhbGVuZGFyT2JqKTtcbiAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoY2FsZW5kYXJFeHRPYmopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKHN0YXRlOiBGVU5DX1NUQVRFKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXF1ZW50aWFsSUROZWVkZWQoZnJvbnRlbmRUaW1lOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBsZXQgcHVzaERhdGEgPSBhd2FpdCB0aGlzLmdldFB1c2hEYXRhKGZyb250ZW5kVGltZSk7XG4gICAgICAgIHRoaXMudG1wUHVzaERhdGEgPSBwdXNoRGF0YS5maWx0ZXIoeCA9PiB4LkNhbGVuZGFySUQgPT09IG51bGwpO1xuICAgICAgICByZXR1cm4gdGhpcy50bXBQdXNoRGF0YS5sZW5ndGg7XG5cbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIGlmICh0aGlzLnRtcFB1c2hEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vc2V0IHRvIHRtcERhdGEgJiYgU3FsaXRlXG4gICAgICAgICAgICBsZXQgZGF0YVdpdGhvdXRJZHMgPSB0aGlzLnRtcFB1c2hEYXRhO1xuXG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGZvciAobGV0IFtpbmRleCwgZGF0YV0gb2YgZGF0YVdpdGhvdXRJZHMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXInKTtcbiAgICAgICAgICAgICAgICBsZXQgY2FsZW5kYXJFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DYWxlbmRhcl9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkNhbGVuZGFySURcIiwgaWRzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW2RhdGEuQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGNhbGVuZGFyT2JqKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iai5zZXRWYWx1ZShcIkNhbGVuZGFySURcIiwgaWRzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW2RhdGEuQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGNhbGVuZGFyRXh0T2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgdGhpcy50bXBQdXNoRGF0YSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0UHVzaERhdGEoZnJvbnRlbmRUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRhdGFzID0gW107XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBsZXQgY2FsZW5kYXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DYWxlbmRhcicpO1xuICAgICAgICBpZiAoZGFvICYmIGNhbGVuZGFyT2JqKSB7XG4gICAgICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgR3JlYXRlclJlc3RyaWN0aW9uKCdDbGllbnRUaW1lJywgW2Zyb250ZW5kVGltZV0pKTtcbiAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjYWxlbmRhck9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncXVlcnkgY2FsZW5kYXIgb2JqOicsIHJlc3ApO1xuICAgICAgICAgICAgaWYgKHJlc3AuQm9keS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIGRhdGFzID0gcmVzcC5Cb2R5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEN1c3RvbWVySURNYXAocmV2ZXJzZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DdXN0b21lcicpO1xuICAgICAgICBpZiAoZGFvICYmIGN1c3RvbWVyT2JqKSB7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IGN1c3RvbWVyIG9iajonLCByZXNwKTtcbiAgICAgICAgICAgIGlmIChyZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckxpc3QgPSByZXNwLkJvZHk7XG4gICAgICAgICAgICAgICAgLy9pZiByZXZlcnNlICxzZXQga2V5IGFzIEN1c3RvbWVySUQgLHZhbCBhcyBDbGllbnRJRFxuICAgICAgICAgICAgICAgIGlmIChyZXZlcnNlKVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckxpc3QgPSBjdXN0b21lckxpc3QubWFwKHggPT4geyByZXR1cm4geyBrZXk6IHguQ3VzdG9tZXJJRCwgdmFsOiB4LkNsaWVudElEIH0gfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTGlzdCA9IGN1c3RvbWVyTGlzdC5tYXAoeCA9PiB7IHJldHVybiB7IGtleTogeC5DbGllbnRJRCwgdmFsOiB4LkN1c3RvbWVySUQgfSB9KVxuICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lckxpc3QucmVkdWNlKChtYXAsIG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXBbb2JqLmtleV0gPSBvYmoudmFsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufSJdfQ==