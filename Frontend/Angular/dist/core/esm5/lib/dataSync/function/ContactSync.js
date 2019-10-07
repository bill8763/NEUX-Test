/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FUNC_STATE } from "./IFunctionSync";
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
import { GreaterRestriction } from "../../device/sqlite/restrictions/GreaterRestriction";
import { InRestriction } from "../../device/sqlite/restrictions/InRestriction";
import { v4 as uuid } from 'uuid';
import { parseISO } from 'date-fns';
import { SQLiteResponse } from "../../device/sqlite/SQLiteResponse";
var ContactSync = /** @class */ (function () {
    function ContactSync(DaoFactory, PushAOP, PullAOP) {
        if (PushAOP === void 0) { PushAOP = null; }
        if (PullAOP === void 0) { PullAOP = null; }
        this.DaoFactory = DaoFactory;
        this.PushAOP = PushAOP;
        this.PullAOP = PullAOP;
        this.tmpPushData = null;
        this.customerData = null;
        this.state = FUNC_STATE.AVAILABLE;
    }
    /**
     * @return {?}
     */
    ContactSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    ContactSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'CUSTOMER_CONTACT';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    ContactSync.prototype.getPushJson = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnJson, pushData, customerContactExtObj, extCols;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Do check data clientTime > frontendTime;
                        returnJson = [];
                        return [4 /*yield*/, this.getPushData(frontendTime)];
                    case 1:
                        pushData = _a.sent();
                        customerContactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                        extCols = customerContactExtObj.getColumns().filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID' && x.getName() !== 'ContactID'; }));
                        returnJson = pushData.map((/**
                         * @param {?} contact
                         * @return {?}
                         */
                        function (contact) {
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
                                    value: contact[col.getName()]
                                };
                            }));
                            return {
                                "noteId": contact.ContactID,
                                "personId": contact.CustomerID,
                                "text": contact.Note,
                                "origin": "",
                                "creationDateTime": new Date(contact.NoteTime).toISOString(),
                                "extensions": extensions,
                                "synchDetail": {
                                    "lastUpdateDateTimeBackend": new Date(contact.DataTime).toISOString(),
                                    "toDelete": contact.IsDelete === 'Y'
                                }
                            };
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
    ContactSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, dao, contactObj, contactExtObj_1, customerObj, contactIdArr, customerResp, CustomerClientIDArr, CustomerIdArr, _b, _c, data, extensions, cliendID;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _d.sent();
                        _d.label = 2;
                    case 2:
                        if (!(resp.notes.length > 0 || resp.deletedNoteIds.length > 0)) return [3 /*break*/, 5];
                        dao = this.DaoFactory.getDefaultDao();
                        contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                        contactExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                        return [4 /*yield*/, dao.queryByTable(contactObj).toPromise().then((/**
                             * @param {?} res
                             * @return {?}
                             */
                            function (res) { return res.Body.map((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.ContactID; })); }))];
                    case 3:
                        contactIdArr = _d.sent();
                        // let customerResp = await dao.queryByTable(customerObj).toPromise();
                        customerResp = this.customerData;
                        CustomerClientIDArr = customerResp.Body.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.ClientID; }));
                        CustomerIdArr = customerResp.Body.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.CustomerID; }));
                        try {
                            for (_b = tslib_1.__values(resp.notes), _c = _b.next(); !_c.done; _c = _b.next()) {
                                data = _c.value;
                                contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                                contactExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                                contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                                contactObj.setValue("ContactID", data.noteId);
                                contactObj.setValue("Note", data.text);
                                contactObj.setValue("NoteTime", parseISO(data.creationDateTime).getTime());
                                contactObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                                contactObj.setValue("IsDelete", 'N');
                                contactObj.setValue("ClientTime", Date.now());
                                // save extendion data
                                extensions = data.extensions;
                                contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                                contactObj.setValue("ContactID", data.noteId);
                                contactExtObj_1.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                                contactExtObj_1.setValue("ContactID", data.noteId);
                                if (extensions != null) {
                                    extensions.forEach((/**
                                     * @param {?} extension
                                     * @return {?}
                                     */
                                    function (extension) {
                                        contactExtObj_1.setValue(extension.id, extension.value);
                                    }));
                                }
                                if (contactIdArr.includes(data.noteId)) {
                                    contactObj.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                                    contactExtObj_1.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                                    dao.transactionUpdate(contactObj);
                                    dao.transactionUpdate(contactExtObj_1);
                                }
                                else {
                                    cliendID = uuid();
                                    contactObj.setValue("ClientID", cliendID);
                                    contactExtObj_1.setValue("ClientID", cliendID);
                                    dao.transactionInsert(contactObj);
                                    dao.transactionInsert(contactExtObj_1);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (resp.deletedNoteIds.length > 0) {
                            contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                            contactExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                            contactObj.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                            contactExtObj_1.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                            dao.transactionDelete(contactObj);
                            dao.transactionDelete(contactExtObj_1);
                        }
                        return [4 /*yield*/, dao.runTransaction().toPromise()];
                    case 4: return [2 /*return*/, _d.sent()];
                    case 5: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                }
            });
        });
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ContactSync.prototype.setState = /**
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
    ContactSync.prototype.getSequentialIDNeeded = /**
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
                        function (x) { return x.ContactID === null; }));
                        return [2 /*return*/, this.tmpPushData.length];
                }
            });
        });
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    ContactSync.prototype.setSequentialID = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_2, _a, dataWithoutIds, dao, _b, _c, _d, index, data, contactObj, contactExtObj;
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
                                contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                                contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                                contactObj.setValue("ContactID", ids[index]);
                                contactExtObj.setValue("ContactID", ids[index]);
                                contactObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                contactExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                dao.transactionUpdate(contactObj);
                                dao.transactionUpdate(contactExtObj);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
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
    ContactSync.prototype.getPushData = /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_3, _a, datas, dao, customerObj, contactObj, customerResp, customerArr, resp, _loop_1, _b, _c, data;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        datas = [];
                        dao = this.DaoFactory.getDefaultDao();
                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                        contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Contact');
                        return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                    case 1:
                        customerResp = _d.sent();
                        this.customerData = customerResp;
                        customerArr = customerResp.Body;
                        if (!(dao && contactObj)) return [3 /*break*/, 3];
                        contactObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                        return [4 /*yield*/, dao.queryByTable(contactObj).toPromise()];
                    case 2:
                        resp = _d.sent();
                        console.log('query contact obj:', resp);
                        console.log('customer array:', customerArr);
                        if (resp.Body.length > 0) {
                            _loop_1 = function (data) {
                                /** @type {?} */
                                var customer = customerArr.filter((/**
                                 * @param {?} x
                                 * @return {?}
                                 */
                                function (x) { return x.ClientID == data.CustomerClientID; }));
                                if (customer.length > 0)
                                    data.CustomerID = customer[0].CustomerID;
                            };
                            try {
                                for (_b = tslib_1.__values(resp.Body), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    data = _c.value;
                                    _loop_1(data);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            datas = resp.Body;
                        }
                        _d.label = 3;
                    case 3: return [2 /*return*/, datas];
                }
            });
        });
    };
    return ContactSync;
}());
export { ContactSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContactSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    ContactSync.prototype.tmpPushData;
    /**
     * @type {?}
     * @private
     */
    ContactSync.prototype.customerData;
    /**
     * @type {?}
     * @private
     */
    ContactSync.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    ContactSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    ContactSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL0NvbnRhY3RTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEU7SUFJSSxxQkFBb0IsVUFBc0IsRUFBVSxPQUF3QixFQUFVLE9BQXdCO1FBQTFELHdCQUFBLEVBQUEsY0FBd0I7UUFBVSx3QkFBQSxFQUFBLGNBQXdCO1FBQTFGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRnRHLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw2QkFBTzs7O0lBQVA7UUFDSSxPQUFPLGtCQUFrQixDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUssaUNBQVc7Ozs7SUFBakIsVUFBa0IsWUFBWTs7Ozs7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LCBGVU5DX1NUQVRFIH0gZnJvbSBcIi4vSUZ1bmN0aW9uU3luY1wiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvRXF1YWxSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgR3JlYXRlclJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0dyZWF0ZXJSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgSW5SZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9JblJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElTeW5jQU9QIH0gZnJvbSBcIi4vU3luY0FPUC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgQ29udGFjdFN5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0bXBQdXNoRGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXN0b21lckRhdGEgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgRGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBQdXNoQU9QOiBJU3luY0FPUCA9IG51bGwsIHByaXZhdGUgUHVsbEFPUDogSVN5bmNBT1AgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBGVU5DX1NUQVRFLkFWQUlMQUJMRTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpOiBGVU5DX1NUQVRFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0NVU1RPTUVSX0NPTlRBQ1QnXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIC8vIERvIGNoZWNrIGRhdGEgY2xpZW50VGltZSA+IGZyb250ZW5kVGltZTtcbiAgICAgICAgbGV0IHJldHVybkpzb24gPSBbXTtcbiAgICAgICAgbGV0IHB1c2hEYXRhID0gYXdhaXQgdGhpcy5nZXRQdXNoRGF0YShmcm9udGVuZFRpbWUpO1xuXG4gICAgICAgIGxldCBjdXN0b21lckNvbnRhY3RFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0X0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgZXh0Q29scyA9IGN1c3RvbWVyQ29udGFjdEV4dE9iai5nZXRDb2x1bW5zKCkuZmlsdGVyKHggPT4geC5nZXROYW1lKCkgIT09ICdDbGllbnRJRCcgJiYgeC5nZXROYW1lKCkgIT09ICdDdXN0b21lckNsaWVudElEJyAmJiB4LmdldE5hbWUoKSAhPT0gJ0NvbnRhY3RJRCcpO1xuXG4gICAgICAgIHJldHVybkpzb24gPSBwdXNoRGF0YS5tYXAoY29udGFjdCA9PiB7XG5cbiAgICAgICAgICAgIGxldCBleHRlbnNpb25zID0gZXh0Q29sc1xuICAgICAgICAgICAgICAgIC5tYXAoY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjb2wuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb250YWN0W2NvbC5nZXROYW1lKCldXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIm5vdGVJZFwiOiBjb250YWN0LkNvbnRhY3RJRCxcbiAgICAgICAgICAgICAgICBcInBlcnNvbklkXCI6IGNvbnRhY3QuQ3VzdG9tZXJJRCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogY29udGFjdC5Ob3RlLFxuICAgICAgICAgICAgICAgIFwib3JpZ2luXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdGlvbkRhdGVUaW1lXCI6IG5ldyBEYXRlKGNvbnRhY3QuTm90ZVRpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgXCJleHRlbnNpb25zXCI6IGV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgXCJzeW5jaERldGFpbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZFwiOiBuZXcgRGF0ZShjb250YWN0LkRhdGFUaW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBcInRvRGVsZXRlXCI6IGNvbnRhY3QuSXNEZWxldGUgPT09ICdZJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLlB1c2hBT1ApIHtcbiAgICAgICAgICAgIHJldHVybkpzb24gPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXR1cm5Kc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuSnNvbjtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5ub3Rlcy5sZW5ndGggPiAwIHx8IHJlc3AuZGVsZXRlZE5vdGVJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBsZXQgY29udGFjdE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3QnKTtcbiAgICAgICAgICAgIGxldCBjb250YWN0RXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1ZXX0N1c3RvbWVyJyk7XG4gICAgICAgICAgICBsZXQgY29udGFjdElkQXJyID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjb250YWN0T2JqKS50b1Byb21pc2UoKS50aGVuKChyZXMpID0+IHJlcy5Cb2R5Lm1hcCh4ID0+IHguQ29udGFjdElEKSk7XG4gICAgICAgICAgICAvLyBsZXQgY3VzdG9tZXJSZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJSZXNwID0gdGhpcy5jdXN0b21lckRhdGE7XG4gICAgICAgICAgICBsZXQgQ3VzdG9tZXJDbGllbnRJREFyciA9IGN1c3RvbWVyUmVzcC5Cb2R5Lm1hcCh4ID0+IHguQ2xpZW50SUQpO1xuICAgICAgICAgICAgbGV0IEN1c3RvbWVySWRBcnIgPSBjdXN0b21lclJlc3AuQm9keS5tYXAoeCA9PiB4LkN1c3RvbWVySUQpO1xuICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiByZXNwLm5vdGVzKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3QnKTtcbiAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiQ3VzdG9tZXJDbGllbnRJRFwiLCBDdXN0b21lckNsaWVudElEQXJyW0N1c3RvbWVySWRBcnIuaW5kZXhPZihkYXRhLnBlcnNvbklkKV0pO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJDb250YWN0SURcIiwgZGF0YS5ub3RlSWQpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJOb3RlXCIsIGRhdGEudGV4dCk7XG4gICAgICAgICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZShcIk5vdGVUaW1lXCIsIHBhcnNlSVNPKGRhdGEuY3JlYXRpb25EYXRlVGltZSkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiRGF0YVRpbWVcIiwgcGFyc2VJU08oZGF0YS5zeW5jaERldGFpbC5sYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJJc0RlbGV0ZVwiLCAnTicpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJDbGllbnRUaW1lXCIsIERhdGUubm93KCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSBleHRlbmRpb24gZGF0YVxuICAgICAgICAgICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJDdXN0b21lckNsaWVudElEXCIsIEN1c3RvbWVyQ2xpZW50SURBcnJbQ3VzdG9tZXJJZEFyci5pbmRleE9mKGRhdGEucGVyc29uSWQpXSk7XG4gICAgICAgICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZShcIkNvbnRhY3RJRFwiLCBkYXRhLm5vdGVJZCk7XG5cbiAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqLnNldFZhbHVlKFwiQ3VzdG9tZXJDbGllbnRJRFwiLCBDdXN0b21lckNsaWVudElEQXJyW0N1c3RvbWVySWRBcnIuaW5kZXhPZihkYXRhLnBlcnNvbklkKV0pO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RFeHRPYmouc2V0VmFsdWUoXCJDb250YWN0SURcIiwgZGF0YS5ub3RlSWQpO1xuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9ucy5mb3JFYWNoKGV4dGVuc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqLnNldFZhbHVlKGV4dGVuc2lvbi5pZCwgZXh0ZW5zaW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhY3RJZEFyci5pbmNsdWRlcyhkYXRhLm5vdGVJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ29udGFjdElEJywgW2RhdGEubm90ZUlkXSkpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDb250YWN0SUQnLCBbZGF0YS5ub3RlSWRdKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjb250YWN0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGNvbnRhY3RFeHRPYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVuZElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW5kSUQpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW5kSUQpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY29udGFjdE9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChjb250YWN0RXh0T2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwLmRlbGV0ZWROb3RlSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0X0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0NvbnRhY3RJRCcsIHJlc3AuRGVsZXRlSWRzKSk7XG4gICAgICAgICAgICAgICAgY29udGFjdEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ29udGFjdElEJywgcmVzcC5EZWxldGVJZHMpKTtcbiAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoY29udGFjdE9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGNvbnRhY3RFeHRPYmopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZChmcm9udGVuZFRpbWU6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGxldCBwdXNoRGF0YSA9IGF3YWl0IHRoaXMuZ2V0UHVzaERhdGEoZnJvbnRlbmRUaW1lKTtcbiAgICAgICAgdGhpcy50bXBQdXNoRGF0YSA9IHB1c2hEYXRhLmZpbHRlcih4ID0+IHguQ29udGFjdElEID09PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG1wUHVzaERhdGEubGVuZ3RoO1xuXG4gICAgfVxuICAgIGFzeW5jIHNldFNlcXVlbnRpYWxJRChpZHM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgaWYgKHRoaXMudG1wUHVzaERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy9zZXQgdG8gdG1wRGF0YSAmJiBTcWxpdGVcbiAgICAgICAgICAgIGxldCBkYXRhV2l0aG91dElkcyA9IHRoaXMudG1wUHVzaERhdGE7XG5cbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgZm9yIChsZXQgW2luZGV4LCBkYXRhXSBvZiBkYXRhV2l0aG91dElkcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGFjdE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3QnKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udGFjdEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3RfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZShcIkNvbnRhY3RJRFwiLCBpZHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqLnNldFZhbHVlKFwiQ29udGFjdElEXCIsIGlkc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW2RhdGEuQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgY29udGFjdEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbZGF0YS5DbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY29udGFjdE9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGNvbnRhY3RFeHRPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICB0aGlzLnRtcFB1c2hEYXRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0UHVzaERhdGEoZnJvbnRlbmRUaW1lOiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgZGF0YXMgPSBbXTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1ZXX0N1c3RvbWVyJyk7XG4gICAgICAgIGxldCBjb250YWN0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXJfQ29udGFjdCcpO1xuICAgICAgICBsZXQgY3VzdG9tZXJSZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJEYXRhID0gY3VzdG9tZXJSZXNwO1xuICAgICAgICBsZXQgY3VzdG9tZXJBcnIgPSBjdXN0b21lclJlc3AuQm9keTtcbiAgICAgICAgaWYgKGRhbyAmJiBjb250YWN0T2JqKSB7XG4gICAgICAgICAgICBjb250YWN0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyUmVzdHJpY3Rpb24oJ0NsaWVudFRpbWUnLCBbZnJvbnRlbmRUaW1lXSkpO1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKGNvbnRhY3RPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IGNvbnRhY3Qgb2JqOicsIHJlc3ApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbWVyIGFycmF5OicsIGN1c3RvbWVyQXJyKTtcbiAgICAgICAgICAgIGlmIChyZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzcC5Cb2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lciA9IGN1c3RvbWVyQXJyLmZpbHRlcih4ID0+IHguQ2xpZW50SUQgPT0gZGF0YS5DdXN0b21lckNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkN1c3RvbWVySUQgPSBjdXN0b21lclswXS5DdXN0b21lcklEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhcyA9IHJlc3AuQm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YXM7XG4gICAgfVxufSJdfQ==