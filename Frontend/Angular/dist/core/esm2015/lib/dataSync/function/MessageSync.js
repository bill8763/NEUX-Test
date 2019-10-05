/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
import { GreaterRestriction } from "../../device/sqlite/restrictions/GreaterRestriction";
import { v4 as uuid } from 'uuid';
import { parseISO } from 'date-fns';
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
export class MessageSync {
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
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getName() {
        return 'MESSAGE';
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
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
            if (dao && messageObj) {
                messageObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(messageObj).toPromise();
                console.log('query message obj:', resp);
                if (resp.Body.length > 0) {
                    /** @type {?} */
                    let messageArray = resp.Body;
                    /** @type {?} */
                    let updatedIDs = messageArray.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.Status === 'Reading')).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.MessageID));
                    returnJson = updatedIDs;
                }
            }
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
            if (resp.messageInfos.length > 0 || resp.deletedMessageIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                /** @type {?} */
                let messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                /** @type {?} */
                let messageIDList = yield dao.queryByTable(messageObj).toPromise().then((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => res.Body));
                messageIDList = messageIDList.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.MessageID));
                for (let data of resp.messageInfos) {
                    /** @type {?} */
                    let isExist = messageIDList.includes(data.messageID);
                    messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                    messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                    messageObj.setValue("MessageID", data.messageID);
                    messageObj.setValue("MessageCategory", data.messageCategory);
                    messageObj.setValue("MessageType", data.messageType);
                    messageObj.setValue("Title", data.title);
                    messageObj.setValue("Description", data.description);
                    messageObj.setValue("Arguments", data.arguments);
                    messageObj.setValue("Status", data.status);
                    messageObj.setValue("IsClick", data.isClick ? "Y" : "N");
                    messageObj.setValue("IsPopup", data.isPopup ? "Y" : "N");
                    messageObj.setValue("IsShow", data.isShow ? "Y" : "N");
                    messageObj.setValue("LinkStatus", data.linkStatus);
                    messageObj.setValue("MessageTime", parseISO(data.messageTime).getTime());
                    messageObj.setValue("ClientTime", Date.now());
                    messageObj.setValue("IsDelete", 'N');
                    messageObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                    //Extension
                    messageExtObj.setValue("MessageID", data.messageID);
                    if (isExist) {
                        messageObj.addRestriction(new EqualRestriction('MessageID', [data.messageID]));
                        messageExtObj.addRestriction(new EqualRestriction('MessageID', [data.messageID]));
                        dao.transactionUpdate(messageObj);
                        dao.transactionUpdate(messageExtObj);
                    }
                    else {
                        /** @type {?} */
                        let clientID = uuid();
                        messageObj.setValue("ClientID", clientID);
                        messageExtObj.setValue("ClientID", clientID);
                        dao.transactionInsert(messageObj);
                        dao.transactionInsert(messageExtObj);
                    }
                }
                for (let id of resp.deletedMessageIds) {
                    messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                    messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                    messageObj.addRestriction(new EqualRestriction('MessageID', [id]));
                    messageExtObj.addRestriction(new EqualRestriction('MessageID', [id]));
                    dao.transactionDelete(messageObj);
                    dao.transactionDelete(messageExtObj);
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
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MessageSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    MessageSync.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    MessageSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    MessageSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZVN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL01lc3NhZ2VTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdwRSxNQUFNOzs7Ozs7SUFFRixZQUFvQixVQUFzQixFQUFVLFVBQW9CLElBQUksRUFBVSxVQUFvQixJQUFJO1FBQTFGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsT0FBTztRQUNILE9BQU8sU0FBUyxDQUFBO0lBQ3BCLENBQUM7Ozs7O0lBRUssV0FBVyxDQUFDLFlBQVk7Ozs7O2dCQUd0QixVQUFVLEdBQUcsRUFBRTs7Z0JBRWYsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOztnQkFDckMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BFLElBQUksR0FBRyxJQUFJLFVB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QUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN4QztnQkFFRCxPQUFPLE1BQU0sR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2pEO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDO0tBQUE7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSyxxQkFBcUI7O1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO0tBQUE7Ozs7O0lBRUssZUFBZSxDQUFDLEdBQWtCOztRQUV4QyxDQUFDO0tBQUE7Q0FDSjs7Ozs7O0lBakhHLDRCQUFzQjs7Ozs7SUFDVixpQ0FBOEI7Ozs7O0lBQUUsOEJBQWdDOzs7OztJQUFFLDhCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGdW5jdGlvblN5bmMsIEZVTkNfU1RBVEUgfSBmcm9tIFwiLi9JRnVuY3Rpb25TeW5jXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBHcmVhdGVyUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvR3JlYXRlclJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElTeW5jQU9QIH0gZnJvbSBcIi4vU3luY0FPUC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZVN5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBEYW9GYWN0b3J5OiBEYW9GYWN0b3J5LCBwcml2YXRlIFB1c2hBT1A6IElTeW5jQU9QID0gbnVsbCwgcHJpdmF0ZSBQdWxsQU9QOiBJU3luY0FPUCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEZVTkNfU1RBVEUuQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnTUVTU0FHRSdcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQdXNoSnNvbihmcm9udGVuZFRpbWUpIHtcbiAgICAgICAgLy8gRG8gY2hlY2sgZGF0YSBjbGllbnRUaW1lID4gZnJvbnRlbmRUaW1lO1xuICAgICAgICAvL1RPRE86IEFkZCBleHRlbnNpb24gY29sdW1uXG4gICAgICAgIGxldCByZXR1cm5Kc29uID0gW107XG5cbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGxldCBtZXNzYWdlT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfTWVzc2FnZScpO1xuICAgICAgICBpZiAoZGFvICYmIG1lc3NhZ2VPYmopIHtcbiAgICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEdyZWF0ZXJSZXN0cmljdGlvbignQ2xpZW50VGltZScsIFtmcm9udGVuZFRpbWVdKSk7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUobWVzc2FnZU9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncXVlcnkgbWVzc2FnZSBvYmo6JywgcmVzcCk7XG4gICAgICAgICAgICBpZiAocmVzcC5Cb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUFycmF5ID0gcmVzcC5Cb2R5O1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkSURzID0gbWVzc2FnZUFycmF5LmZpbHRlcih4ID0+IHguU3RhdHVzID09PSAnUmVhZGluZycpLm1hcCh4ID0+IHguTWVzc2FnZUlEKTtcbiAgICAgICAgICAgICAgICByZXR1cm5Kc29uID0gdXBkYXRlZElEcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5QdXNoQU9QKSB7XG4gICAgICAgICAgICByZXR1cm5Kc29uID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmV0dXJuSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkpzb247XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3AubWVzc2FnZUluZm9zLmxlbmd0aCA+IDAgfHwgcmVzcC5kZWxldGVkTWVzc2FnZUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfTWVzc2FnZScpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9NZXNzYWdlX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJRExpc3QgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKG1lc3NhZ2VPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlcykgPT4gcmVzLkJvZHkpO1xuICAgICAgICAgICAgbWVzc2FnZUlETGlzdCA9IG1lc3NhZ2VJRExpc3QubWFwKHggPT4geC5NZXNzYWdlSUQpO1xuICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiByZXNwLm1lc3NhZ2VJbmZvcykge1xuICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0ID0gbWVzc2FnZUlETGlzdC5pbmNsdWRlcyhkYXRhLm1lc3NhZ2VJRCk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX01lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfTWVzc2FnZV9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiTWVzc2FnZUlEXCIsIGRhdGEubWVzc2FnZUlEKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiTWVzc2FnZUNhdGVnb3J5XCIsIGRhdGEubWVzc2FnZUNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiTWVzc2FnZVR5cGVcIiwgZGF0YS5tZXNzYWdlVHlwZSk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIlRpdGxlXCIsIGRhdGEudGl0bGUpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouc2V0VmFsdWUoXCJEZXNjcmlwdGlvblwiLCBkYXRhLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiQXJndW1lbnRzXCIsIGRhdGEuYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiU3RhdHVzXCIsIGRhdGEuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiSXNDbGlja1wiLCBkYXRhLmlzQ2xpY2sgPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiSXNQb3B1cFwiLCBkYXRhLmlzUG9wdXAgPyBcIllcIiA6IFwiTlwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiSXNTaG93XCIsIGRhdGEuaXNTaG93ID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIkxpbmtTdGF0dXNcIiwgZGF0YS5saW5rU3RhdHVzKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiTWVzc2FnZVRpbWVcIiwgcGFyc2VJU08oZGF0YS5tZXNzYWdlVGltZSkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiQ2xpZW50VGltZVwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiSXNEZWxldGVcIiwgJ04nKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiRGF0YVRpbWVcIiwgcGFyc2VJU08oZGF0YS5zeW5jaERldGFpbC5sYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kKS5nZXRUaW1lKCkpO1xuXG4gICAgICAgICAgICAgICAgLy9FeHRlbnNpb25cbiAgICAgICAgICAgICAgICBtZXNzYWdlRXh0T2JqLnNldFZhbHVlKFwiTWVzc2FnZUlEXCIsIGRhdGEubWVzc2FnZUlEKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignTWVzc2FnZUlEJywgW2RhdGEubWVzc2FnZUlEXSkpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdNZXNzYWdlSUQnLCBbZGF0YS5tZXNzYWdlSURdKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShtZXNzYWdlT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKG1lc3NhZ2VFeHRPYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRXh0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQobWVzc2FnZU9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChtZXNzYWdlRXh0T2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaWQgb2YgcmVzcC5kZWxldGVkTWVzc2FnZUlkcykge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9NZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX01lc3NhZ2VfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignTWVzc2FnZUlEJywgW2lkXSkpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ01lc3NhZ2VJRCcsIFtpZF0pKTtcbiAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUobWVzc2FnZU9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKG1lc3NhZ2VFeHRPYmopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKHN0YXRlOiBGVU5DX1NUQVRFKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXF1ZW50aWFsSUROZWVkZWQoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGFzeW5jIHNldFNlcXVlbnRpYWxJRChpZHM6IEFycmF5PHN0cmluZz4pIHtcblxuICAgIH1cbn0iXX0=