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
var MessageSync = /** @class */ (function () {
    function MessageSync(DaoFactory, PushAOP, PullAOP) {
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
    MessageSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    MessageSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'MESSAGE';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    MessageSync.prototype.getPushJson = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnJson, dao, messageObj, resp, messageArray, updatedIDs;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Do check data clientTime > frontendTime;
                        //TODO: Add extension column
                        returnJson = [];
                        dao = this.DaoFactory.getDefaultDao();
                        messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                        if (!(dao && messageObj)) return [3 /*break*/, 2];
                        messageObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                        return [4 /*yield*/, dao.queryByTable(messageObj).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log('query message obj:', resp);
                        if (resp.Body.length > 0) {
                            messageArray = resp.Body;
                            updatedIDs = messageArray.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.Status === 'Reading'; })).map((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.MessageID; }));
                            returnJson = updatedIDs;
                        }
                        _a.label = 2;
                    case 2:
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
    MessageSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, dao, messageObj, messageExtObj, messageIDList, _c, _d, data, isExist, clientID, _e, _f, id;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _g.sent();
                        _g.label = 2;
                    case 2:
                        if (!(resp.messageInfos.length > 0 || resp.deletedMessageIds.length > 0)) return [3 /*break*/, 5];
                        dao = this.DaoFactory.getDefaultDao();
                        messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                        messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                        return [4 /*yield*/, dao.queryByTable(messageObj).toPromise().then((/**
                             * @param {?} res
                             * @return {?}
                             */
                            function (res) { return res.Body; }))];
                    case 3:
                        messageIDList = _g.sent();
                        messageIDList = messageIDList.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.MessageID; }));
                        try {
                            for (_c = tslib_1.__values(resp.messageInfos), _d = _c.next(); !_d.done; _d = _c.next()) {
                                data = _d.value;
                                isExist = messageIDList.includes(data.messageID);
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
                                    clientID = uuid();
                                    messageObj.setValue("ClientID", clientID);
                                    messageExtObj.setValue("ClientID", clientID);
                                    dao.transactionInsert(messageObj);
                                    dao.transactionInsert(messageExtObj);
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
                            for (_e = tslib_1.__values(resp.deletedMessageIds), _f = _e.next(); !_f.done; _f = _e.next()) {
                                id = _f.value;
                                messageObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message');
                                messageExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Message_Extension');
                                messageObj.addRestriction(new EqualRestriction('MessageID', [id]));
                                messageExtObj.addRestriction(new EqualRestriction('MessageID', [id]));
                                dao.transactionDelete(messageObj);
                                dao.transactionDelete(messageExtObj);
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
                    case 4: return [2 /*return*/, _g.sent()];
                    case 5: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                }
            });
        });
    };
    /**
     * @param {?} state
     * @return {?}
     */
    MessageSync.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
    };
    /**
     * @return {?}
     */
    MessageSync.prototype.getSequentialIDNeeded = /**
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
    MessageSync.prototype.setSequentialID = /**
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
    return MessageSync;
}());
export { MessageSync };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZVN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL01lc3NhZ2VTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdwRTtJQUVJLHFCQUFvQixVQUFzQixFQUFVLE9BQXdCLEVBQVUsT0FBd0I7UUFBMUQsd0JBQUEsRUFBQSxjQUF3QjtRQUFVLHdCQUFBLEVBQUEsY0FBd0I7UUFBMUYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDMUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUNJLE9BQU8sU0FBUyxDQUFBO0lBQ3BCLENBQUM7Ozs7O0lBRUssaUNBQVc7Ozs7SUFBakIsVUFBa0IsWUFBWTs7Ozs7Ozs7d0JBR3RCLFVBQVUsR0FBRyxFQUFFO3dCQUVmLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTt3QkFDckMsVUFBVSxHQUFHLElBQUksQ0FBQyxV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QUFDO2dDQUM5RSxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNuRSxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUN0RSxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0NBQ2xDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQzs2QkFDeEM7Ozs7Ozs7Ozt3QkFFTSxxQkFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUE7NEJBQTdDLHNCQUFPLFNBQXNDLEVBQUM7NEJBRzlDLHNCQUFPLElBQUksY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDOzs7O0tBRXZEOzs7OztJQUVELDhCQUFROzs7O0lBQVIsVUFBUyxLQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUssMkNBQXFCOzs7SUFBM0I7OztnQkFDSSxzQkFBTyxDQUFDLENBQUMsRUFBQzs7O0tBQ2I7Ozs7O0lBRUsscUNBQWU7Ozs7SUFBckIsVUFBc0IsR0FBa0I7Ozs7OztLQUV2QztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWxIRCxJQWtIQzs7Ozs7OztJQWpIRyw0QkFBc0I7Ozs7O0lBQ1YsaUNBQThCOzs7OztJQUFFLDhCQUFnQzs7Ozs7SUFBRSw4QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnVuY3Rpb25TeW5jLCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvRXF1YWxSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgR3JlYXRlclJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0dyZWF0ZXJSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBJU3luY0FPUCB9IGZyb20gXCIuL1N5bmNBT1AuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTeW5jIGltcGxlbWVudHMgSUZ1bmN0aW9uU3luYyB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgRGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpOiBGVU5DX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ01FU1NBR0UnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIC8vIERvIGNoZWNrIGRhdGEgY2xpZW50VGltZSA+IGZyb250ZW5kVGltZTtcbiAgICAgICAgLy9UT0RPOiBBZGQgZXh0ZW5zaW9uIGNvbHVtblxuICAgICAgICBsZXQgcmV0dXJuSnNvbiA9IFtdO1xuXG4gICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBsZXQgbWVzc2FnZU9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX01lc3NhZ2UnKTtcbiAgICAgICAgaWYgKGRhbyAmJiBtZXNzYWdlT2JqKSB7XG4gICAgICAgICAgICBtZXNzYWdlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyUmVzdHJpY3Rpb24oJ0NsaWVudFRpbWUnLCBbZnJvbnRlbmRUaW1lXSkpO1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKG1lc3NhZ2VPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IG1lc3NhZ2Ugb2JqOicsIHJlc3ApO1xuICAgICAgICAgICAgaWYgKHJlc3AuQm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IHJlc3AuQm9keTtcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlZElEcyA9IG1lc3NhZ2VBcnJheS5maWx0ZXIoeCA9PiB4LlN0YXR1cyA9PT0gJ1JlYWRpbmcnKS5tYXAoeCA9PiB4Lk1lc3NhZ2VJRCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuSnNvbiA9IHVwZGF0ZWRJRHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuUHVzaEFPUCkge1xuICAgICAgICAgICAgcmV0dXJuSnNvbiA9IGF3YWl0IHRoaXMuUHVsbEFPUC5leGVjdXRlKHJldHVybkpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5Kc29uO1xuICAgIH1cblxuICAgIGFzeW5jIHB1bGxEYXRhKHJlc3ApIHtcbiAgICAgICAgaWYgKHRoaXMuUHVsbEFPUCkge1xuICAgICAgICAgICAgcmVzcCA9IGF3YWl0IHRoaXMuUHVsbEFPUC5leGVjdXRlKHJlc3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwLm1lc3NhZ2VJbmZvcy5sZW5ndGggPiAwIHx8IHJlc3AuZGVsZXRlZE1lc3NhZ2VJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZU9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX01lc3NhZ2UnKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfTWVzc2FnZV9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlSURMaXN0ID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShtZXNzYWdlT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXMpID0+IHJlcy5Cb2R5KTtcbiAgICAgICAgICAgIG1lc3NhZ2VJRExpc3QgPSBtZXNzYWdlSURMaXN0Lm1hcCh4ID0+IHguTWVzc2FnZUlEKTtcbiAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzcC5tZXNzYWdlSW5mb3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdCA9IG1lc3NhZ2VJRExpc3QuaW5jbHVkZXMoZGF0YS5tZXNzYWdlSUQpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9NZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX01lc3NhZ2VfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIk1lc3NhZ2VJRFwiLCBkYXRhLm1lc3NhZ2VJRCk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIk1lc3NhZ2VDYXRlZ29yeVwiLCBkYXRhLm1lc3NhZ2VDYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIk1lc3NhZ2VUeXBlXCIsIGRhdGEubWVzc2FnZVR5cGUpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouc2V0VmFsdWUoXCJUaXRsZVwiLCBkYXRhLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqLnNldFZhbHVlKFwiRGVzY3JpcHRpb25cIiwgZGF0YS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIkFyZ3VtZW50c1wiLCBkYXRhLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIlN0YXR1c1wiLCBkYXRhLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIklzQ2xpY2tcIiwgZGF0YS5pc0NsaWNrID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIklzUG9wdXBcIiwgZGF0YS5pc1BvcHVwID8gXCJZXCIgOiBcIk5cIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIklzU2hvd1wiLCBkYXRhLmlzU2hvdyA/IFwiWVwiIDogXCJOXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouc2V0VmFsdWUoXCJMaW5rU3RhdHVzXCIsIGRhdGEubGlua1N0YXR1cyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIk1lc3NhZ2VUaW1lXCIsIHBhcnNlSVNPKGRhdGEubWVzc2FnZVRpbWUpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIkNsaWVudFRpbWVcIiwgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIklzRGVsZXRlXCIsICdOJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIkRhdGFUaW1lXCIsIHBhcnNlSVNPKGRhdGEuc3luY2hEZXRhaWwubGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZCkuZ2V0VGltZSgpKTtcblxuICAgICAgICAgICAgICAgIC8vRXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgbWVzc2FnZUV4dE9iai5zZXRWYWx1ZShcIk1lc3NhZ2VJRFwiLCBkYXRhLm1lc3NhZ2VJRCk7XG5cblxuICAgICAgICAgICAgICAgIGlmIChpc0V4aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ01lc3NhZ2VJRCcsIFtkYXRhLm1lc3NhZ2VJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignTWVzc2FnZUlEJywgW2RhdGEubWVzc2FnZUlEXSkpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUobWVzc2FnZU9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShtZXNzYWdlRXh0T2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUV4dE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KG1lc3NhZ2VPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQobWVzc2FnZUV4dE9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGlkIG9mIHJlc3AuZGVsZXRlZE1lc3NhZ2VJZHMpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfTWVzc2FnZScpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9NZXNzYWdlX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ01lc3NhZ2VJRCcsIFtpZF0pKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdNZXNzYWdlSUQnLCBbaWRdKSk7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKG1lc3NhZ2VPYmopO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShtZXNzYWdlRXh0T2JqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogRlVOQ19TVEFURSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2VxdWVudGlhbElETmVlZGVkKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG5cbiAgICB9XG59Il19