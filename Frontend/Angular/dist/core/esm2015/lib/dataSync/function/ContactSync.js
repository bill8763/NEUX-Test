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
export class ContactSync {
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
        this.customerData = null;
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
        return 'CUSTOMER_CONTACT';
    }
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    getPushJson(frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Do check data clientTime > frontendTime;
            /** @type {?} */
            let returnJson = [];
            /** @type {?} */
            let pushData = yield this.getPushData(frontendTime);
            /** @type {?} */
            let customerContactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
            /** @type {?} */
            let extCols = customerContactExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID' && x.getName() !== 'ContactID'));
            returnJson = pushData.map((/**
             * @param {?} contact
             * @return {?}
             */
            contact => {
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
            if (resp.notes.length > 0 || resp.deletedNoteIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                /** @type {?} */
                let contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                /** @type {?} */
                let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                /** @type {?} */
                let contactIdArr = yield dao.queryByTable(contactObj).toPromise().then((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => res.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ContactID))));
                // let customerResp = await dao.queryByTable(customerObj).toPromise();
                /** @type {?} */
                let customerResp = this.customerData;
                /** @type {?} */
                let CustomerClientIDArr = customerResp.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ClientID));
                /** @type {?} */
                let CustomerIdArr = customerResp.Body.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.CustomerID));
                for (let data of resp.notes) {
                    contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                    contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                    contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                    contactObj.setValue("ContactID", data.noteId);
                    contactObj.setValue("Note", data.text);
                    contactObj.setValue("NoteTime", parseISO(data.creationDateTime).getTime());
                    contactObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                    contactObj.setValue("IsDelete", 'N');
                    contactObj.setValue("ClientTime", Date.now());
                    // save extendion data
                    /** @type {?} */
                    let extensions = data.extensions;
                    contactObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                    contactObj.setValue("ContactID", data.noteId);
                    contactExtObj.setValue("CustomerClientID", CustomerClientIDArr[CustomerIdArr.indexOf(data.personId)]);
                    contactExtObj.setValue("ContactID", data.noteId);
                    if (extensions != null) {
                        extensions.forEach((/**
                         * @param {?} extension
                         * @return {?}
                         */
                        extension => {
                            contactExtObj.setValue(extension.id, extension.value);
                        }));
                    }
                    if (contactIdArr.includes(data.noteId)) {
                        contactObj.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                        contactExtObj.addRestriction(new EqualRestriction('ContactID', [data.noteId]));
                        dao.transactionUpdate(contactObj);
                        dao.transactionUpdate(contactExtObj);
                    }
                    else {
                        /** @type {?} */
                        let cliendID = uuid();
                        contactObj.setValue("ClientID", cliendID);
                        contactExtObj.setValue("ClientID", cliendID);
                        dao.transactionInsert(contactObj);
                        dao.transactionInsert(contactExtObj);
                    }
                }
                if (resp.deletedNoteIds.length > 0) {
                    contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                    contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                    contactObj.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                    contactExtObj.addRestriction(new InRestriction('ContactID', resp.DeleteIds));
                    dao.transactionDelete(contactObj);
                    dao.transactionDelete(contactExtObj);
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
            x => x.ContactID === null));
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
                    let contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact');
                    /** @type {?} */
                    let contactExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Contact_Extension');
                    contactObj.setValue("ContactID", ids[index]);
                    contactExtObj.setValue("ContactID", ids[index]);
                    contactObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    contactExtObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(contactObj);
                    dao.transactionUpdate(contactExtObj);
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
            let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
            /** @type {?} */
            let contactObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Contact');
            /** @type {?} */
            let customerResp = yield dao.queryByTable(customerObj).toPromise();
            this.customerData = customerResp;
            /** @type {?} */
            let customerArr = customerResp.Body;
            if (dao && contactObj) {
                contactObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(contactObj).toPromise();
                console.log('query contact obj:', resp);
                console.log('customer array:', customerArr);
                if (resp.Body.length > 0) {
                    for (let data of resp.Body) {
                        /** @type {?} */
                        let customer = customerArr.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.ClientID == data.CustomerClientID));
                        if (customer.length > 0)
                            data.CustomerID = customer[0].CustomerID;
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFN5bmMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RhdGFTeW5jL2Z1bmN0aW9uL0NvbnRhY3RTeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEUsTUFBTTs7Ozs7O0lBSUYsWUFBb0IsVUFBc0IsRUFBVSxVQUFvQixJQUFJLEVBQVUsVUFBb0IsSUFBSTtRQUExRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUZ0RyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE9BQU87UUFDSCxPQUFPLGtCQUFrQixDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUssV0FBVyxDQUFDLFlBQVk7Ozs7Z0JBRXRCLFVBQVUsR0FBRyxFQUFFOztnQkFDZixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMs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QUFRLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7d0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBQzt3QkFDM0UsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztxQkFDaEQ7b0JBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDSjs7Ozs7O0lBbkxHLDRCQUFzQjs7Ozs7SUFDdEIsa0NBQTJCOzs7OztJQUMzQixtQ0FBNEI7Ozs7O0lBQ2hCLGlDQUE4Qjs7Ozs7SUFBRSw4QkFBZ0M7Ozs7O0lBQUUsOEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bmN0aW9uU3luYywgRlVOQ19TVEFURSB9IGZyb20gXCIuL0lGdW5jdGlvblN5bmNcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IEdyZWF0ZXJSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9HcmVhdGVyUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IEluUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvSW5SZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBJU3luY0FPUCB9IGZyb20gXCIuL1N5bmNBT1AuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIENvbnRhY3RTeW5jIGltcGxlbWVudHMgSUZ1bmN0aW9uU3luYyB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgdG1wUHVzaERhdGEgPSBudWxsO1xuICAgIHByaXZhdGUgY3VzdG9tZXJEYXRhID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksIHByaXZhdGUgUHVzaEFPUDogSVN5bmNBT1AgPSBudWxsLCBwcml2YXRlIFB1bGxBT1A6IElTeW5jQU9QID0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gRlVOQ19TVEFURS5BVkFJTEFCTEU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKTogRlVOQ19TVEFURSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDVVNUT01FUl9DT05UQUNUJ1xuICAgIH1cblxuICAgIGFzeW5jIGdldFB1c2hKc29uKGZyb250ZW5kVGltZSkge1xuICAgICAgICAvLyBEbyBjaGVjayBkYXRhIGNsaWVudFRpbWUgPiBmcm9udGVuZFRpbWU7XG4gICAgICAgIGxldCByZXR1cm5Kc29uID0gW107XG4gICAgICAgIGxldCBwdXNoRGF0YSA9IGF3YWl0IHRoaXMuZ2V0UHVzaERhdGEoZnJvbnRlbmRUaW1lKTtcblxuICAgICAgICBsZXQgY3VzdG9tZXJDb250YWN0RXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdF9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IGV4dENvbHMgPSBjdXN0b21lckNvbnRhY3RFeHRPYmouZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZ2V0TmFtZSgpICE9PSAnQ2xpZW50SUQnICYmIHguZ2V0TmFtZSgpICE9PSAnQ3VzdG9tZXJDbGllbnRJRCcgJiYgeC5nZXROYW1lKCkgIT09ICdDb250YWN0SUQnKTtcblxuICAgICAgICByZXR1cm5Kc29uID0gcHVzaERhdGEubWFwKGNvbnRhY3QgPT4ge1xuXG4gICAgICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGV4dENvbHNcbiAgICAgICAgICAgICAgICAubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY29sLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29udGFjdFtjb2wuZ2V0TmFtZSgpXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJub3RlSWRcIjogY29udGFjdC5Db250YWN0SUQsXG4gICAgICAgICAgICAgICAgXCJwZXJzb25JZFwiOiBjb250YWN0LkN1c3RvbWVySUQsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IGNvbnRhY3QuTm90ZSxcbiAgICAgICAgICAgICAgICBcIm9yaWdpblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRpb25EYXRlVGltZVwiOiBuZXcgRGF0ZShjb250YWN0Lk5vdGVUaW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBleHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIFwic3luY2hEZXRhaWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVEYXRlVGltZUJhY2tlbmRcIjogbmV3IERhdGUoY29udGFjdC5EYXRhVGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0b0RlbGV0ZVwiOiBjb250YWN0LklzRGVsZXRlID09PSAnWSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5QdXNoQU9QKSB7XG4gICAgICAgICAgICByZXR1cm5Kc29uID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmV0dXJuSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkpzb247XG4gICAgfVxuXG4gICAgYXN5bmMgcHVsbERhdGEocmVzcCkge1xuICAgICAgICBpZiAodGhpcy5QdWxsQU9QKSB7XG4gICAgICAgICAgICByZXNwID0gYXdhaXQgdGhpcy5QdWxsQU9QLmV4ZWN1dGUocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3Aubm90ZXMubGVuZ3RoID4gMCB8fCByZXNwLmRlbGV0ZWROb3RlSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0Jyk7XG4gICAgICAgICAgICBsZXQgY29udGFjdEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3RfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DdXN0b21lcicpO1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RJZEFyciA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY29udGFjdE9iaikudG9Qcm9taXNlKCkudGhlbigocmVzKSA9PiByZXMuQm9keS5tYXAoeCA9PiB4LkNvbnRhY3RJRCkpO1xuICAgICAgICAgICAgLy8gbGV0IGN1c3RvbWVyUmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgbGV0IGN1c3RvbWVyUmVzcCA9IHRoaXMuY3VzdG9tZXJEYXRhO1xuICAgICAgICAgICAgbGV0IEN1c3RvbWVyQ2xpZW50SURBcnIgPSBjdXN0b21lclJlc3AuQm9keS5tYXAoeCA9PiB4LkNsaWVudElEKTtcbiAgICAgICAgICAgIGxldCBDdXN0b21lcklkQXJyID0gY3VzdG9tZXJSZXNwLkJvZHkubWFwKHggPT4geC5DdXN0b21lcklEKTtcbiAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzcC5ub3Rlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0Jyk7XG4gICAgICAgICAgICAgICAgY29udGFjdEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3RfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZShcIkN1c3RvbWVyQ2xpZW50SURcIiwgQ3VzdG9tZXJDbGllbnRJREFycltDdXN0b21lcklkQXJyLmluZGV4T2YoZGF0YS5wZXJzb25JZCldKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiQ29udGFjdElEXCIsIGRhdGEubm90ZUlkKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiTm90ZVwiLCBkYXRhLnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJOb3RlVGltZVwiLCBwYXJzZUlTTyhkYXRhLmNyZWF0aW9uRGF0ZVRpbWUpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZShcIkRhdGFUaW1lXCIsIHBhcnNlSVNPKGRhdGEuc3luY2hEZXRhaWwubGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiSXNEZWxldGVcIiwgJ04nKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiQ2xpZW50VGltZVwiLCBEYXRlLm5vdygpKTtcblxuICAgICAgICAgICAgICAgIC8vIHNhdmUgZXh0ZW5kaW9uIGRhdGFcbiAgICAgICAgICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLnNldFZhbHVlKFwiQ3VzdG9tZXJDbGllbnRJRFwiLCBDdXN0b21lckNsaWVudElEQXJyW0N1c3RvbWVySWRBcnIuaW5kZXhPZihkYXRhLnBlcnNvbklkKV0pO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJDb250YWN0SURcIiwgZGF0YS5ub3RlSWQpO1xuXG4gICAgICAgICAgICAgICAgY29udGFjdEV4dE9iai5zZXRWYWx1ZShcIkN1c3RvbWVyQ2xpZW50SURcIiwgQ3VzdG9tZXJDbGllbnRJREFycltDdXN0b21lcklkQXJyLmluZGV4T2YoZGF0YS5wZXJzb25JZCldKTtcbiAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqLnNldFZhbHVlKFwiQ29udGFjdElEXCIsIGRhdGEubm90ZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChleHRlbnNpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdEV4dE9iai5zZXRWYWx1ZShleHRlbnNpb24uaWQsIGV4dGVuc2lvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250YWN0SWRBcnIuaW5jbHVkZXMoZGF0YS5ub3RlSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NvbnRhY3RJRCcsIFtkYXRhLm5vdGVJZF0pKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ29udGFjdElEJywgW2RhdGEubm90ZUlkXSkpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY29udGFjdE9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjb250YWN0RXh0T2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbmRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVuZElEKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdEV4dE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVuZElEKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGNvbnRhY3RPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY29udGFjdEV4dE9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcC5kZWxldGVkTm90ZUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0NvbnRhY3QnKTtcbiAgICAgICAgICAgICAgICBjb250YWN0RXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQ29udGFjdF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDb250YWN0SUQnLCByZXNwLkRlbGV0ZUlkcykpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0NvbnRhY3RJRCcsIHJlc3AuRGVsZXRlSWRzKSk7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGNvbnRhY3RPYmopO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShjb250YWN0RXh0T2JqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUUxpdGVSZXNwb25zZSh7IHN0YXR1czogdHJ1ZSB9LCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNldFN0YXRlKHN0YXRlOiBGVU5DX1NUQVRFKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXF1ZW50aWFsSUROZWVkZWQoZnJvbnRlbmRUaW1lOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBsZXQgcHVzaERhdGEgPSBhd2FpdCB0aGlzLmdldFB1c2hEYXRhKGZyb250ZW5kVGltZSk7XG4gICAgICAgIHRoaXMudG1wUHVzaERhdGEgPSBwdXNoRGF0YS5maWx0ZXIoeCA9PiB4LkNvbnRhY3RJRCA9PT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRtcFB1c2hEYXRhLmxlbmd0aDtcblxuICAgIH1cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIGlmICh0aGlzLnRtcFB1c2hEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vc2V0IHRvIHRtcERhdGEgJiYgU3FsaXRlXG4gICAgICAgICAgICBsZXQgZGF0YVdpdGhvdXRJZHMgPSB0aGlzLnRtcFB1c2hEYXRhO1xuXG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGZvciAobGV0IFtpbmRleCwgZGF0YV0gb2YgZGF0YVdpdGhvdXRJZHMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhY3RPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhY3RFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9Db250YWN0X0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RPYmouc2V0VmFsdWUoXCJDb250YWN0SURcIiwgaWRzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgY29udGFjdEV4dE9iai5zZXRWYWx1ZShcIkNvbnRhY3RJRFwiLCBpZHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBjb250YWN0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFtkYXRhLkNsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW2RhdGEuQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGNvbnRhY3RPYmopO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjb250YWN0RXh0T2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgdGhpcy50bXBQdXNoRGF0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFB1c2hEYXRhKGZyb250ZW5kVGltZTogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IGRhdGFzID0gW107XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DdXN0b21lcicpO1xuICAgICAgICBsZXQgY29udGFjdE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1ZXX0N1c3RvbWVyX0NvbnRhY3QnKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyUmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyRGF0YSA9IGN1c3RvbWVyUmVzcDtcbiAgICAgICAgbGV0IGN1c3RvbWVyQXJyID0gY3VzdG9tZXJSZXNwLkJvZHk7XG4gICAgICAgIGlmIChkYW8gJiYgY29udGFjdE9iaikge1xuICAgICAgICAgICAgY29udGFjdE9iai5hZGRSZXN0cmljdGlvbihuZXcgR3JlYXRlclJlc3RyaWN0aW9uKCdDbGllbnRUaW1lJywgW2Zyb250ZW5kVGltZV0pKTtcbiAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjb250YWN0T2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxdWVyeSBjb250YWN0IG9iajonLCByZXNwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lciBhcnJheTonLCBjdXN0b21lckFycik7XG4gICAgICAgICAgICBpZiAocmVzcC5Cb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIHJlc3AuQm9keSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXIgPSBjdXN0b21lckFyci5maWx0ZXIoeCA9PiB4LkNsaWVudElEID09IGRhdGEuQ3VzdG9tZXJDbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5DdXN0b21lcklEID0gY3VzdG9tZXJbMF0uQ3VzdG9tZXJJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YXMgPSByZXNwLkJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFzO1xuICAgIH1cbn0iXX0=