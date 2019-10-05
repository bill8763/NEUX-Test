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
export class CalendarSync {
    /**
     * @param {?} DaoFactory
     * @param {?=} PushAOP
     * @param {?=} PullAOP
     */
    constructor(DaoFactory, PushAOP = null, PullAOP = null) {
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.tmpPushData = null;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'CALENDAR';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let customerIDMap = yield this.getCustomerIDMap();
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            /** @type {?} */
            let extCols = calendarExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CalendarID'));
            returnJson = pushData.map((/**
             * @param {?} calendarObj
             * @return {?}
             */
            calendarObj => {
                /** @type {?} */
                let extensions = extCols
                    .map((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
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
                    x => x != null && x != "")),
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
            if (resp.appointments.length > 0 || resp.deletedAppointmentIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                /** @type {?} */
                let calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                /** @type {?} */
                let customerIDMap = yield this.getCustomerIDMap(true);
                /** @type {?} */
                let calendarDatas = yield dao.queryByTable(calendarObj).toPromise().then((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => res.Body));
                /** @type {?} */
                let calendarIdArr = calendarDatas.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.CalendarID));
                /** @type {?} */
                let calendarClientIdArr = calendarDatas.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ClientID));
                console.log('calendar ID array:', calendarIdArr);
                console.log('calendar Client ID array:', calendarClientIdArr);
                for (let data of resp.appointments) {
                    /** @type {?} */
                    let IsAlert = data.alertTimes.length > 0 ? 'Y' : 'N';
                    calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                    calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
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
                    /** @type {?} */
                    let extensions = data.extensions;
                    calendarObj.setValue("CalendarID", data.appointmentId);
                    calendarExtObj.setValue("CalendarID", data.appointmentId);
                    if (extensions != null) {
                        extensions.forEach((/**
                         * @param {?} extension
                         * @return {?}
                         */
                        extension => {
                            calendarExtObj.setValue(extension.id, extension.value);
                        }));
                    }
                    if (calendarIdArr.includes(data.appointmentId)) {
                        calendarObj.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                        calendarExtObj.addRestriction(new EqualRestriction('CalendarID', [data.appointmentId]));
                        dao.transactionUpdate(calendarObj);
                        dao.transactionUpdate(calendarExtObj);
                    }
                    else {
                        /** @type {?} */
                        let clientID = uuid();
                        calendarObj.setValue("ClientID", clientID);
                        calendarExtObj.setValue("ClientID", clientID);
                        dao.transactionInsert(calendarObj);
                        dao.transactionInsert(calendarExtObj);
                    }
                }
                for (let id of resp.deletedAppointmentIds) {
                    calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                    calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                    calendarObj.addRestriction(new EqualRestriction('CalendarID', [id]));
                    calendarExtObj.addRestriction(new EqualRestriction('CalendarID', [id]));
                    dao.transactionDelete(calendarObj);
                    dao.transactionDelete(calendarExtObj);
                }
                return yield dao.runTransaction().toPromise();
            }
            else {
                return new SQLiteResponse({ status: true }, []);
            }
        });
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
    getSequentialIDNeeded(frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            this.tmpPushData = pushData.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.CalendarID === null));
            return this.tmpPushData.length;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.tmpPushData != null) {
                //set to tmpData && Sqlite
                /** @type {?} */
                let dataWithoutIds = this.tmpPushData;
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                for (let [index, data] of dataWithoutIds.entries()) {
                    /** @type {?} */
                    let calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar');
                    /** @type {?} */
                    let calendarExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Calendar_Extension');
                    calendarObj.setValue("CalendarID", ids[index]);
                    calendarObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(calendarObj);
                    calendarExtObj.setValue("CalendarID", ids[index]);
                    calendarExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(calendarExtObj);
                }
                yield dao.runTransaction().toPromise();
                this.tmpPushData = null;
            }
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
            let calendarObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Calendar');
            if (dao && calendarObj) {
                calendarObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(calendarObj).toPromise();
                console.log('query calendar obj:', resp);
                if (resp.Body.length > 0)
                    datas = resp.Body;
            }
            return datas;
        });
    }
    /**
     * @private
     * @param {?=} reverse
     * @return {?}
     */
    getCustomerIDMap(reverse = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
            if (dao && customerObj) {
                /** @type {?} */
                let resp = yield dao.queryByTable(customerObj).toPromise();
                console.log('query customer obj:', resp);
                if (resp.Body.length > 0) {
                    /** @type {?} */
                    let customerList = resp.Body;
                    //if reverse ,set key as CustomerID ,val as ClientID
                    if (reverse)
                        customerList = customerList.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => { return { key: x.CustomerID, val: x.ClientID }; }));
                    else
                        customerList = customerList.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => { return { key: x.ClientID, val: x.CustomerID }; }));
                    return customerList.reduce((/**
                     * @param {?} map
                     * @param {?} obj
                     * @return {?}
                     */
                    (map, obj) => {
                        map[obj.key] = obj.val;
                        return map;
                    }), {});
                }
            }
            return {};
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9DYWxlbmRhclN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSXBFLE1BQU07Ozs7OztJQUdGLFlBQW9CLFVBQXNCLEVBQVUsVUFBb0IsSUFBSSxFQUFVLFVBQW9CLElBQUk7UUFBMUYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEdEcsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxVQUFVLENBQUE7SUFDckIsQ0FBQzs7Ozs7SUFFSyxXQUFXLENBQUMsWUFBWTs7OztnQkFFdEIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOztnQkFDckMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDOztnQkFDL0UsVUFBVSxHQUFH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QUFNOzs7OztvQkFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTt3QkFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUN2QixPQUFPLEdBQUcsQ0FBQztvQkFDZixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ1Y7YUFDSjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0NBQ0o7Ozs7OztJQTlNRyw2QkFBc0I7Ozs7O0lBQ3RCLG1DQUEyQjs7Ozs7SUFDZixrQ0FBOEI7Ozs7O0lBQUUsK0JBQWdDOzs7OztJQUFFLCtCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGdW5jdGlvblN5bmMsIEZVTkNfU1RBVEUgfSBmcm9tIFwiLi9JRnVuY3Rpb25TeW5jXCI7XG5pbXBvcnQgeyBHcmVhdGVyUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvR3JlYXRlclJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElTeW5jQU9QIH0gZnJvbSBcIi4vU3luY0FPUC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclN5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0bXBQdXNoRGF0YSA9IG51bGw7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBEYW9GYWN0b3J5OiBEYW9GYWN0b3J5LCBwcml2YXRlIFB1c2hBT1A6IElTeW5jQU9QID0gbnVsbCwgcHJpdmF0ZSBQdWxsQU9QOiBJU3luY0FPUCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEZVTkNfU1RBVEUuQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQ0FMRU5EQVInXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIC8vIERvIGNoZWNrIGRhdGEgY2xpZW50VGltZSA+IGZyb250ZW5kVGltZTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGxldCBjYWxlbmRhckV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0NhbGVuZGFyX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgcmV0dXJuSnNvbiA9IFtdO1xuICAgICAgICBsZXQgY3VzdG9tZXJJRE1hcCA9IGF3YWl0IHRoaXMuZ2V0Q3VzdG9tZXJJRE1hcCgpO1xuICAgICAgICBsZXQgcHVzaERhdGEgPSBhd2FpdCB0aGlzLmdldFB1c2hEYXRhKGZyb250ZW5kVGltZSk7XG4gICAgICAgIGxldCBleHRDb2xzID0gY2FsZW5kYXJFeHRPYmouZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZ2V0TmFtZSgpICE9PSAnQ2xpZW50SUQnICYmIHguZ2V0TmFtZSgpICE9PSAnQ2FsZW5kYXJJRCcpO1xuXG4gICAgICAgIHJldHVybkpzb24gPSBwdXNoRGF0YS5tYXAoY2FsZW5kYXJPYmogPT4ge1xuICAgICAgICAgICAgbGV0IGV4dGVuc2lvbnMgPSBleHRDb2xzXG4gICAgICAgICAgICAgICAgLm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb2wuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhbGVuZGFyT2JqW2NvbC5nZXROYW1lKCldXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJhcHBvaW50bWVudElkXCI6IGNhbGVuZGFyT2JqLkNhbGVuZGFySUQsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IGNhbGVuZGFyT2JqLlRpdGxlLFxuICAgICAgICAgICAgICAgIFwibWVldGluZ0xvY2F0aW9uXCI6IGNhbGVuZGFyT2JqLkxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIFwiYXBwb2ludG1lbnRUeXBlXCI6IGNhbGVuZGFyT2JqLkNhbGVuZGFyVHlwZSxcbiAgICAgICAgICAgICAgICBcImFsbERheVwiOiBjYWxlbmRhck9iai5Jc0FsbERheSA9PT0gJ1knID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwic3RhcnREYXRlVGltZVwiOiBuZXcgRGF0ZShjYWxlbmRhck9iai5TdGFydFRpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgXCJlbmREYXRlVGltZVwiOiBuZXcgRGF0ZShjYWxlbmRhck9iai5FbmRUaW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIFwiYWxlcnRUaW1lc1wiOiBbY2FsZW5kYXJPYmouQWxlcnQxLCBjYWxlbmRhck9iai5BbGVydDIsIGNhbGVuZGFyT2JqLkFsZXJ0M10uZmlsdGVyKHggPT4geCAhPSBudWxsICYmIHggIT0gXCJcIiksXG4gICAgICAgICAgICAgICAgXCJwZXJzb25JZFwiOiBjdXN0b21lcklETWFwW2NhbGVuZGFyT2JqLkN1c3RvbWVyQ2xpZW50SURdID8gY3VzdG9tZXJJRE1hcFtjYWxlbmRhck9iai5DdXN0b21lckNsaWVudElEXSA6ICcnLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogY2FsZW5kYXJPYmouUmVtYXJrLFxuICAgICAgICAgICAgICAgIFwiaXNDaGFuZ2VhYmxlXCI6IGNhbGVuZGFyT2JqLkRhdGFTb3VyY2UgIT09ICdPUFVTJyxcbiAgICAgICAgICAgICAgICBcImV4dGVuc2lvbnNcIjogZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBcInN5bmNoRGV0YWlsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGllbnRUaW1lXCI6IG5ldyBEYXRlKGNhbGVuZGFyT2JqLkNsaWVudFRpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZFwiOiBuZXcgRGF0ZShjYWxlbmRhck9iai5EYXRhVGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0b0RlbGV0ZVwiOiBjYWxlbmRhck9iai5Jc0RlbGV0ZSA9PT0gJ1knXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5QdXNoQU9QKSB7XG4gICAgICAgICAgICByZXR1cm5Kc29uID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmV0dXJuSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkpzb247XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3AuYXBwb2ludG1lbnRzLmxlbmd0aCA+IDAgfHwgcmVzcC5kZWxldGVkQXBwb2ludG1lbnRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBsZXQgY2FsZW5kYXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DYWxlbmRhcicpO1xuICAgICAgICAgICAgbGV0IGNhbGVuZGFyRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJJRE1hcCA9IGF3YWl0IHRoaXMuZ2V0Q3VzdG9tZXJJRE1hcCh0cnVlKTtcbiAgICAgICAgICAgIGxldCBjYWxlbmRhckRhdGFzID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjYWxlbmRhck9iaikudG9Qcm9taXNlKCkudGhlbigocmVzKSA9PiByZXMuQm9keSk7XG4gICAgICAgICAgICBsZXQgY2FsZW5kYXJJZEFyciA9IGNhbGVuZGFyRGF0YXMubWFwKHggPT4geC5DYWxlbmRhcklEKTtcbiAgICAgICAgICAgIGxldCBjYWxlbmRhckNsaWVudElkQXJyID0gY2FsZW5kYXJEYXRhcy5tYXAoeCA9PiB4LkNsaWVudElEKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxlbmRhciBJRCBhcnJheTonLCBjYWxlbmRhcklkQXJyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxlbmRhciBDbGllbnQgSUQgYXJyYXk6JywgY2FsZW5kYXJDbGllbnRJZEFycilcbiAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzcC5hcHBvaW50bWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgSXNBbGVydCA9IGRhdGEuYWxlcnRUaW1lcy5sZW5ndGggPiAwID8gJ1knIDogJ04nO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXInKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0NhbGVuZGFyX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQ2FsZW5kYXJJRFwiLCBkYXRhLmFwcG9pbnRtZW50SWQpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiVGl0bGVcIiwgZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkxvY2F0aW9uXCIsIGRhdGEubWVldGluZ0xvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkNhbGVuZGFyVHlwZVwiLCBkYXRhLmFwcG9pbnRtZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJJc0FsbERheVwiLCBkYXRhLmFsbERheSA/ICdZJyA6ICdOJyk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJTdGFydFRpbWVcIiwgcGFyc2VJU08oZGF0YS5zdGFydERhdGVUaW1lKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiRW5kVGltZVwiLCBwYXJzZUlTTyhkYXRhLmVuZERhdGVUaW1lKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQ3VzdG9tZXJDbGllbnRJRFwiLCBjdXN0b21lcklETWFwW2RhdGEucGVyc29uSWRdKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIklzQWxlcnRcIiwgSXNBbGVydCk7XG4gICAgICAgICAgICAgICAgaWYgKElzQWxlcnQpXG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKFwiQWxlcnQxXCIsIGRhdGEuYWxlcnRUaW1lc1swXSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWxlcnRUaW1lcy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkFsZXJ0MlwiLCBkYXRhLmFsZXJ0VGltZXNbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFsZXJ0VGltZXMubGVuZ3RoID4gMilcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJBbGVydDNcIiwgZGF0YS5hbGVydFRpbWVzWzJdKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIlJlbWFya1wiLCBkYXRhLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIklzRGVsZXRlXCIsICdOJyk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJEYXRhU291cmNlXCIsIGRhdGEuaXNDaGFuZ2VhYmxlID8gXCJBUFBcIiA6IFwiT1BVU1wiKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkRhdGFUaW1lXCIsIHBhcnNlSVNPKGRhdGEuc3luY2hEZXRhaWwubGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgRGF0ZS5ub3coKSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkNhbGVuZGFySURcIiwgZGF0YS5hcHBvaW50bWVudElkKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iai5zZXRWYWx1ZShcIkNhbGVuZGFySURcIiwgZGF0YS5hcHBvaW50bWVudElkKTtcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChleHRlbnNpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJFeHRPYmouc2V0VmFsdWUoZXh0ZW5zaW9uLmlkLCBleHRlbnNpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsZW5kYXJJZEFyci5pbmNsdWRlcyhkYXRhLmFwcG9pbnRtZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDYWxlbmRhcklEJywgW2RhdGEuYXBwb2ludG1lbnRJZF0pKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NhbGVuZGFySUQnLCBbZGF0YS5hcHBvaW50bWVudElkXSkpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY2FsZW5kYXJPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY2FsZW5kYXJFeHRPYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJFeHRPYmouc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChjYWxlbmRhck9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChjYWxlbmRhckV4dE9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpZCBvZiByZXNwLmRlbGV0ZWRBcHBvaW50bWVudElkcykge1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXInKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0NhbGVuZGFyX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDYWxlbmRhcklEJywgW2lkXSkpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDYWxlbmRhcklEJywgW2lkXSkpO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShjYWxlbmRhck9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGNhbGVuZGFyRXh0T2JqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKGZyb250ZW5kVGltZTogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgbGV0IHB1c2hEYXRhID0gYXdhaXQgdGhpcy5nZXRQdXNoRGF0YShmcm9udGVuZFRpbWUpO1xuICAgICAgICB0aGlzLnRtcFB1c2hEYXRhID0gcHVzaERhdGEuZmlsdGVyKHggPT4geC5DYWxlbmRhcklEID09PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG1wUHVzaERhdGEubGVuZ3RoO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICBpZiAodGhpcy50bXBQdXNoRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvL3NldCB0byB0bXBEYXRhICYmIFNxbGl0ZVxuICAgICAgICAgICAgbGV0IGRhdGFXaXRob3V0SWRzID0gdGhpcy50bXBQdXNoRGF0YTtcblxuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBbaW5kZXgsIGRhdGFdIG9mIGRhdGFXaXRob3V0SWRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0NhbGVuZGFyJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNhbGVuZGFyRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoXCJDYWxlbmRhcklEXCIsIGlkc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFtkYXRhLkNsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjYWxlbmRhck9iaik7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFeHRPYmouc2V0VmFsdWUoXCJDYWxlbmRhcklEXCIsIGlkc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFtkYXRhLkNsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjYWxlbmRhckV4dE9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBkYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMudG1wUHVzaERhdGEgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFB1c2hEYXRhKGZyb250ZW5kVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkYXRhcyA9IFtdO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ2FsZW5kYXInKTtcbiAgICAgICAgaWYgKGRhbyAmJiBjYWxlbmRhck9iaikge1xuICAgICAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEdyZWF0ZXJSZXN0cmljdGlvbignQ2xpZW50VGltZScsIFtmcm9udGVuZFRpbWVdKSk7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY2FsZW5kYXJPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IGNhbGVuZGFyIG9iajonLCByZXNwKTtcbiAgICAgICAgICAgIGlmIChyZXNwLkJvZHkubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICBkYXRhcyA9IHJlc3AuQm9keTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDdXN0b21lcklETWFwKHJldmVyc2UgPSBmYWxzZSkge1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXInKTtcbiAgICAgICAgaWYgKGRhbyAmJiBjdXN0b21lck9iaikge1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxdWVyeSBjdXN0b21lciBvYmo6JywgcmVzcCk7XG4gICAgICAgICAgICBpZiAocmVzcC5Cb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJMaXN0ID0gcmVzcC5Cb2R5O1xuICAgICAgICAgICAgICAgIC8vaWYgcmV2ZXJzZSAsc2V0IGtleSBhcyBDdXN0b21lcklEICx2YWwgYXMgQ2xpZW50SURcbiAgICAgICAgICAgICAgICBpZiAocmV2ZXJzZSlcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJMaXN0ID0gY3VzdG9tZXJMaXN0Lm1hcCh4ID0+IHsgcmV0dXJuIHsga2V5OiB4LkN1c3RvbWVySUQsIHZhbDogeC5DbGllbnRJRCB9IH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckxpc3QgPSBjdXN0b21lckxpc3QubWFwKHggPT4geyByZXR1cm4geyBrZXk6IHguQ2xpZW50SUQsIHZhbDogeC5DdXN0b21lcklEIH0gfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJMaXN0LnJlZHVjZSgobWFwLCBvYmopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWFwW29iai5rZXldID0gb2JqLnZhbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn0iXX0=