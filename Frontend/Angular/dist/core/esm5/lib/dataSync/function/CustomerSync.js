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
var CustomerSync = /** @class */ (function () {
    function CustomerSync(DaoFactory, PushAOP, PullAOP) {
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
    CustomerSync.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    CustomerSync.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'CUSTOMER';
    };
    /**
     * @param {?} frontendTime
     * @return {?}
     */
    CustomerSync.prototype.getPushJson = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnJson, pushData, customerExtObj, customerTelExtObj, customerEmailExtObj, customerAddressExtObj, customerExtCols, customerTelExtCols, customerEmailExtCols, customerAddressExtCols;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Do check data clientTime > frontendTime;
                        returnJson = [];
                        return [4 /*yield*/, this.getPushData(frontendTime)];
                    case 1:
                        pushData = _a.sent();
                        //get extension column informance
                        customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                        customerTelExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                        customerEmailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                        customerAddressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                        customerExtCols = customerExtObj.getColumns().filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerID'; }));
                        customerTelExtCols = customerTelExtObj.getColumns().filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'; }));
                        customerEmailExtCols = customerEmailExtObj.getColumns().filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'; }));
                        customerAddressExtCols = customerAddressExtObj.getColumns().filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'; }));
                        returnJson = pushData.map((/**
                         * @param {?} customer
                         * @return {?}
                         */
                        function (customer) {
                            /** @type {?} */
                            var Extensions = customerExtCols
                                .map((/**
                             * @param {?} col
                             * @return {?}
                             */
                            function (col) {
                                return {
                                    id: col.getName(),
                                    type: col.getType(),
                                    value: customer[col.getName()]
                                };
                            }));
                            return {
                                "customerID": customer.CustomerID,
                                "firstName": customer.FirstName,
                                "middleName": "",
                                "lastName": customer.LastName,
                                "alternateName": "",
                                "marritalStatus": customer.Marriage,
                                "occupation": customer.Occupation,
                                "employer": customer.Company,
                                "birthDate": customer.BirthdayYear === 'null' || customer.BirthdayYear === null ? null : customer.BirthdayYear + "-" + customer.BirthdayMonth + "-" + customer.BirthdayDate,
                                "ageRange": customer.AgeRange,
                                "gender": customer.Gender,
                                "numberOfChildren": customer.Children,
                                "addresses": customer.Address.map((/**
                                 * @param {?} addr
                                 * @return {?}
                                 */
                                function (addr) {
                                    /** @type {?} */
                                    var addressesExtensions = customerAddressExtCols
                                        .map((/**
                                     * @param {?} col
                                     * @return {?}
                                     */
                                    function (col) {
                                        return {
                                            id: col.getName(),
                                            type: col.getType(),
                                            value: addr[col.getName()]
                                        };
                                    }));
                                    return {
                                        "addressType": addr.AddressType,
                                        "countryCode": addr.Country,
                                        "city": addr.City,
                                        "area": addr.Area,
                                        "postCode": addr.Zipcode,
                                        "line1": addr.Address,
                                        "line2": "",
                                        "line3": "",
                                        "line4": "",
                                        "isChangeable": addr.DataSource !== 'OPUS',
                                        "extensions": addressesExtensions
                                    };
                                })),
                                "phoneChannels": customer.Tel.map((/**
                                 * @param {?} tel
                                 * @return {?}
                                 */
                                function (tel) {
                                    /** @type {?} */
                                    var telExtensions = customerTelExtCols
                                        .map((/**
                                     * @param {?} col
                                     * @return {?}
                                     */
                                    function (col) {
                                        return {
                                            id: col.getName(),
                                            type: col.getType(),
                                            value: tel[col.getName()]
                                        };
                                    }));
                                    return {
                                        "usageType": tel.TelType,
                                        "phoneNumber": tel.Tel,
                                        "isChangeable": tel.DataSource !== 'OPUS',
                                        "extensions": telExtensions
                                    };
                                })),
                                "emailContacts": customer.Email.map((/**
                                 * @param {?} email
                                 * @return {?}
                                 */
                                function (email) {
                                    /** @type {?} */
                                    var emailExtensions = customerEmailExtCols
                                        .map((/**
                                     * @param {?} col
                                     * @return {?}
                                     */
                                    function (col) {
                                        return {
                                            id: col.getName(),
                                            type: col.getType(),
                                            value: email[col.getName()]
                                        };
                                    }));
                                    return {
                                        "emailType": email.EmailType,
                                        "email": email.Email,
                                        "isChangeAble": email.DataSource !== 'OPUS',
                                        "extensions": emailExtensions
                                    };
                                })),
                                "annualIncomeRange": customer.Income,
                                "contactLink": customer.Source,
                                "familiarity": customer.Familiarity,
                                "touchPointFrequency": customer.ContactFrequancy,
                                "leadProbability": customer.Possibility,
                                "isFollowed": customer.IsFollow === 'Y',
                                "isOverTimeAlert": customer.IsOverTimeAlert === 'Y',
                                "isChangeable": customer.DataSource !== 'OPUS',
                                "profileCompletion": customer.Completeness,
                                "extensions": Extensions,
                                "synchDetail": {
                                    "clientTime": new Date(customer.ClientTime).toISOString(),
                                    "lastUpdateDateTimeBackend": new Date(customer.DataTime).toISOString(),
                                    "toDelete": customer.IsDelete === 'Y'
                                }
                            };
                        }));
                        console.log('customer getPushJson:', returnJson);
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
    CustomerSync.prototype.pullData = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d, dao, customerObj, telObj, emailObj, addressObj, customerExtObj_1, emailExtObj_1, addressExtObj_1, telExtObj_1, customerResp_1, CustomerClientIDArr, CustomerIdArr, customerInfoIds_1, ToDeleteCustomerClientIDs, _e, _f, data, clientID, Extensions, _g, _h, email, email_clientID, emailExtensions, _j, _k, address, address_clientID, addressExtensions, _l, _m, tel, tel_clientID, telExtensions, DeleteCustomerClientIds;
            return tslib_1.__generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        if (!this.PullAOP) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.PullAOP.execute(resp)];
                    case 1:
                        resp = _o.sent();
                        _o.label = 2;
                    case 2:
                        if (!(resp.customerInfos.length > 0 || resp.deletedPersonIds.length > 0)) return [3 /*break*/, 5];
                        dao = this.DaoFactory.getDefaultDao();
                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                        telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                        emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                        addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                        customerExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                        emailExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                        addressExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                        telExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                        return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                    case 3:
                        customerResp_1 = _o.sent();
                        CustomerClientIDArr = customerResp_1.Body.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.ClientID; }));
                        CustomerIdArr = customerResp_1.Body.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.CustomerID; }));
                        // delete tel,email,address first
                        customerInfoIds_1 = resp.customerInfos.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.customerID; }));
                        ToDeleteCustomerClientIDs = customerResp_1.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return customerInfoIds_1.indexOf(x.CustomerID) > -1; })).map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.ClientID; }));
                        telObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                        emailObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                        addressObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                        telExtObj_1.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                        emailExtObj_1.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                        addressExtObj_1.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                        dao.transactionDelete(telObj);
                        dao.transactionDelete(emailObj);
                        dao.transactionDelete(addressObj);
                        dao.transactionDelete(telExtObj_1);
                        dao.transactionDelete(emailExtObj_1);
                        dao.transactionDelete(addressExtObj_1);
                        try {
                            for (_e = tslib_1.__values(resp.customerInfos), _f = _e.next(); !_f.done; _f = _e.next()) {
                                data = _f.value;
                                clientID = '';
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                                customerExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                                emailExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                                addressExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                                telExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                                customerObj.setValue("CustomerID", data.customerID);
                                customerObj.setValue("FirstName", data.firstName);
                                customerObj.setValue("LastName", data.lastName);
                                customerObj.setValue("Occupation", data.occupation);
                                customerObj.setValue("Company", data.employer);
                                customerObj.setValue("BirthdayYear", data.birthDate === null || data.birthDate.indexOf('null') >= 0 ? null : data.birthDate.split('-')[0]);
                                customerObj.setValue("BirthdayMonth", data.birthDate === null || data.birthDate.indexOf('null') >= 0 ? null : data.birthDate.split('-')[1]);
                                customerObj.setValue("BirthdayDate", data.birthDate === null || data.birthDate.indexOf('null') >= 0 ? null : data.birthDate.split('-')[2]);
                                customerObj.setValue("AgeRange", data.ageRange);
                                customerObj.setValue("Gender", data.gender);
                                customerObj.setValue("Income", data.annualIncomeRange);
                                customerObj.setValue("Source", data.contactLink);
                                customerObj.setValue("Marriage", data.marritalStatus);
                                customerObj.setValue("Children", data.numberOfChildren);
                                customerObj.setValue("Familiarity", data.familiarity);
                                customerObj.setValue("ContactFrequancy", data.touchPointFrequency);
                                customerObj.setValue("Possibility", data.leadProbability);
                                customerObj.setValue("IsFollow", data.isFollowed ? 'Y' : 'N');
                                customerObj.setValue("IsDelete", 'N');
                                customerObj.setValue("Completeness", data.profileCompletion);
                                customerObj.setValue("DataSource", data.isChangeable ? "APP" : "OPUS");
                                customerObj.setValue("DataTime", parseISO(data.synchDetail.lastUpdateDateTimeBackend).getTime());
                                customerObj.setValue('IsOverTimeAlert', data.isOverTimeAlert);
                                customerObj.setValue("ClientTime", Date.now());
                                //save email extension data
                                Extensions = data.extensions;
                                customerExtObj_1.setValue("CustomerID", data.customerID);
                                console.log('customer Extensions', Extensions);
                                if (Extensions != null) {
                                    Extensions.forEach((/**
                                     * @param {?} extension
                                     * @return {?}
                                     */
                                    function (extension) {
                                        customerExtObj_1.setValue(extension.id, extension.value);
                                    }));
                                }
                                if (CustomerIdArr.includes(data.customerID)) {
                                    clientID = CustomerClientIDArr[CustomerIdArr.indexOf(data.customerID)];
                                    customerObj.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                                    customerExtObj_1.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                                    dao.transactionUpdate(customerObj);
                                    dao.transactionUpdate(customerExtObj_1);
                                }
                                else {
                                    clientID = uuid();
                                    customerObj.setValue("ClientID", clientID);
                                    customerExtObj_1.setValue("ClientID", clientID);
                                    dao.transactionInsert(customerObj);
                                    dao.transactionInsert(customerExtObj_1);
                                }
                                try {
                                    for (_g = tslib_1.__values(data.emailContacts), _h = _g.next(); !_h.done; _h = _g.next()) {
                                        email = _h.value;
                                        email_clientID = uuid();
                                        emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                                        emailObj.setValue('ClientID', email_clientID);
                                        emailObj.setValue('CustomerClientID', clientID);
                                        emailObj.setValue('EmailType', email.emailType);
                                        emailObj.setValue('Email', email.email);
                                        emailObj.setValue('DataSource', email.isChangeAble ? 'APP' : 'OPUS');
                                        //save email extension data
                                        emailExtensions = email.extensions;
                                        emailExtObj_1.setValue('ClientID', email_clientID);
                                        emailExtObj_1.setValue('CustomerClientID', clientID);
                                        console.log('emailExtensions', emailExtensions);
                                        if (emailExtensions != null) {
                                            emailExtensions.forEach((/**
                                             * @param {?} extension
                                             * @return {?}
                                             */
                                            function (extension) {
                                                emailExtObj_1.setValue(extension.id, extension.value);
                                            }));
                                        }
                                        dao.transactionInsert(emailExtObj_1);
                                        dao.transactionInsert(emailObj);
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                                try {
                                    for (_j = tslib_1.__values(data.addresses), _k = _j.next(); !_k.done; _k = _j.next()) {
                                        address = _k.value;
                                        address_clientID = uuid();
                                        addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                                        addressObj.setValue('ClientID', address_clientID);
                                        addressObj.setValue('CustomerClientID', clientID);
                                        addressObj.setValue('AddressType', address.addressType);
                                        addressObj.setValue('Country', address.countryCode);
                                        addressObj.setValue('City', address.city);
                                        addressObj.setValue('Area', address.area);
                                        addressObj.setValue('Zipcode', address.postCode);
                                        addressObj.setValue('Address', address.line1);
                                        addressObj.setValue('DataSource', address.isChangeAble ? 'APP' : 'OPUS');
                                        //save email extension data
                                        addressExtensions = address.extensions;
                                        addressExtObj_1.setValue('ClientID', address_clientID);
                                        addressExtObj_1.setValue('CustomerClientID', clientID);
                                        console.log('addressExtensions', addressExtensions);
                                        if (addressExtensions != null) {
                                            addressExtensions.forEach((/**
                                             * @param {?} extension
                                             * @return {?}
                                             */
                                            function (extension) {
                                                addressExtObj_1.setValue(extension.id, extension.value);
                                            }));
                                        }
                                        dao.transactionInsert(addressExtObj_1);
                                        dao.transactionInsert(addressObj);
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                                try {
                                    for (_l = tslib_1.__values(data.phoneChannels), _m = _l.next(); !_m.done; _m = _l.next()) {
                                        tel = _m.value;
                                        tel_clientID = uuid();
                                        telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                                        telObj.setValue('ClientID', tel_clientID);
                                        telObj.setValue('CustomerClientID', clientID);
                                        telObj.setValue('TelType', tel.usageType);
                                        telObj.setValue('Tel', tel.phoneNumber);
                                        telObj.setValue('DataSource', tel.isChangeable ? 'APP' : 'OPUS');
                                        //save email extension data
                                        telExtensions = tel.extensions;
                                        telExtObj_1.setValue('ClientID', tel_clientID);
                                        telExtObj_1.setValue('CustomerClientID', clientID);
                                        console.log('telExtensions', telExtensions);
                                        if (telExtensions != null) {
                                            telExtensions.forEach((/**
                                             * @param {?} extension
                                             * @return {?}
                                             */
                                            function (extension) {
                                                telExtObj_1.setValue(extension.id, extension.value);
                                            }));
                                        }
                                        dao.transactionInsert(telExtObj_1);
                                        dao.transactionInsert(telObj);
                                    }
                                }
                                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                finally {
                                    try {
                                        if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                                    }
                                    finally { if (e_4) throw e_4.error; }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        DeleteCustomerClientIds = resp.deletedPersonIds.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) {
                            /** @type {?} */
                            var filtered = customerResp_1.Body.filter((/**
                             * @param {?} y
                             * @return {?}
                             */
                            function (y) { return y.CustomerID === x; }));
                            return filtered.length > 0 ? filtered[0].ClientID : null;
                        })).filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x !== null; }));
                        if (DeleteCustomerClientIds.length > 0) {
                            customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                            emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                            addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                            telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                            emailExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                            addressExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                            telExtObj_1 = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                            customerObj.addRestriction(new InRestriction('CustomerID', resp.deletedPersonIds));
                            emailObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                            addressObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                            telObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                            emailExtObj_1.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                            addressExtObj_1.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                            telExtObj_1.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                            dao.transactionDelete(customerObj);
                            dao.transactionDelete(emailObj);
                            dao.transactionDelete(addressObj);
                            dao.transactionDelete(telObj);
                            dao.transactionDelete(emailExtObj_1);
                            dao.transactionDelete(addressExtObj_1);
                            dao.transactionDelete(telExtObj_1);
                        }
                        return [4 /*yield*/, dao.runTransaction().toPromise()];
                    case 4: return [2 /*return*/, _o.sent()];
                    case 5: return [2 /*return*/, new SQLiteResponse({ status: true }, [])];
                }
            });
        });
    };
    /**
     * @param {?} state
     * @return {?}
     */
    CustomerSync.prototype.setState = /**
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
    CustomerSync.prototype.getSequentialIDNeeded = /**
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var num, dao, customerObj, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        num = 0;
                        dao = this.DaoFactory.getDefaultDao();
                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                        if (!(dao && customerObj)) return [3 /*break*/, 2];
                        customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                        return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                    case 1:
                        resp = _a.sent();
                        console.log('query customer obj:', resp);
                        this.tmpPushData = resp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.CustomerID === null; }));
                        num = this.tmpPushData.length;
                        _a.label = 2;
                    case 2: return [2 /*return*/, num];
                }
            });
        });
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    CustomerSync.prototype.setSequentialID = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_5, _a, dataWithoutIds, dao, _b, _c, _d, index, data, customerObj;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(this.tmpPushData != null)) return [3 /*break*/, 2];
                        dataWithoutIds = this.tmpPushData;
                        dao = this.DaoFactory.getDefaultDao();
                        try {
                            for (_b = tslib_1.__values(dataWithoutIds.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                _d = tslib_1.__read(_c.value, 2), index = _d[0], data = _d[1];
                                customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                                customerObj.setValue("CustomerID", ids[index]);
                                customerObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                                dao.transactionUpdate(customerObj);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_5) throw e_5.error; }
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
    CustomerSync.prototype.getPushData = /**
     * @private
     * @param {?} frontendTime
     * @return {?}
     */
    function (frontendTime) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_6, _a, datas, dao, customerObj, resp, customerArray, clientIDArray, telObj, emailObj, addressObj, telResp, emailResp, addressResp, _loop_1, customerArray_1, customerArray_1_1, customer;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        datas = [];
                        dao = this.DaoFactory.getDefaultDao();
                        customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                        if (!(dao && customerObj)) return [3 /*break*/, 5];
                        customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                        return [4 /*yield*/, dao.queryByTable(customerObj).toPromise()];
                    case 1:
                        resp = _b.sent();
                        console.log('query customer obj:', resp);
                        if (!(resp.Body.length > 0)) return [3 /*break*/, 5];
                        customerArray = resp.Body;
                        clientIDArray = customerArray.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.ClientID; }));
                        dao = this.DaoFactory.getDefaultDao();
                        telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Tel');
                        emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Email');
                        addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Address');
                        telObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                        emailObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                        addressObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                        return [4 /*yield*/, dao.queryByTable(telObj).toPromise()];
                    case 2:
                        telResp = _b.sent();
                        return [4 /*yield*/, dao.queryByTable(emailObj).toPromise()];
                    case 3:
                        emailResp = _b.sent();
                        return [4 /*yield*/, dao.queryByTable(addressObj).toPromise()];
                    case 4:
                        addressResp = _b.sent();
                        _loop_1 = function (customer) {
                            customer.Tel = telResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.CustomerClientID == customer.ClientID; }));
                            customer.Email = emailResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.CustomerClientID == customer.ClientID; }));
                            customer.Address = addressResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.CustomerClientID == customer.ClientID; }));
                            datas.push(customer);
                        };
                        try {
                            for (customerArray_1 = tslib_1.__values(customerArray), customerArray_1_1 = customerArray_1.next(); !customerArray_1_1.done; customerArray_1_1 = customerArray_1.next()) {
                                customer = customerArray_1_1.value;
                                _loop_1(customer);
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (customerArray_1_1 && !customerArray_1_1.done && (_a = customerArray_1.return)) _a.call(customerArray_1);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, datas];
                }
            });
        });
    };
    return CustomerSync;
}());
export { CustomerSync };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSync.prototype.state;
    /**
     * @type {?}
     * @private
     */
    CustomerSync.prototype.tmpPushData;
    /**
     * @type {?}
     * @private
     */
    CustomerSync.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    CustomerSync.prototype.PushAOP;
    /**
     * @type {?}
     * @private
     */
    CustomerSync.prototype.PullAOP;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9DdXN0b21lclN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdwRTtJQUdJLHNCQUFvQixVQUFzQixFQUFVLE9BQXdCLEVBQVUsT0FBd0I7UUFBMUQsd0JBQUEsRUFBQSxjQUF3QjtRQUFVLHdCQUFBLEVBQUEsY0FBd0I7UUFBMUYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEdEcsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhCQUFPOzs7SUFBUDtRQUNJLE9BQU8sVUFBVSxDQUFBO0lBQ3JCLENBQUM7Ozs7O0lBRUssa0NBQVc7Ozs7SUFBakIsVUFBa0IsWUFBWTs7Ozs7Ozt3QkFFdEIsVUFBVSxHQUFHLEVBQUU7d0JB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alpHLDZCQUFzQjs7Ozs7SUFDdEIsbUNBQTJCOzs7OztJQUNmLGtDQUE4Qjs7Ozs7SUFBRSwrQkFBZ0M7Ozs7O0lBQUUsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bmN0aW9uU3luYywgRlVOQ19TVEFURSB9IGZyb20gXCIuL0lGdW5jdGlvblN5bmNcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyBFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0VxdWFsUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IEdyZWF0ZXJSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9HcmVhdGVyUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IEluUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvSW5SZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBJU3luY0FPUCB9IGZyb20gXCIuL1N5bmNBT1AuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU3luYyBpbXBsZW1lbnRzIElGdW5jdGlvblN5bmMge1xuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHRtcFB1c2hEYXRhID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIERhb0ZhY3Rvcnk6IERhb0ZhY3RvcnksIHByaXZhdGUgUHVzaEFPUDogSVN5bmNBT1AgPSBudWxsLCBwcml2YXRlIFB1bGxBT1A6IElTeW5jQU9QID0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gRlVOQ19TVEFURS5BVkFJTEFCTEU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKTogRlVOQ19TVEFURSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDVVNUT01FUidcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQdXNoSnNvbihmcm9udGVuZFRpbWUpIHtcbiAgICAgICAgLy8gRG8gY2hlY2sgZGF0YSBjbGllbnRUaW1lID4gZnJvbnRlbmRUaW1lO1xuICAgICAgICBsZXQgcmV0dXJuSnNvbiA9IFtdO1xuICAgICAgICBsZXQgcHVzaERhdGEgPSBhd2FpdCB0aGlzLmdldFB1c2hEYXRhKGZyb250ZW5kVGltZSk7XG5cbiAgICAgICAgLy9nZXQgZXh0ZW5zaW9uIGNvbHVtbiBpbmZvcm1hbmNlXG4gICAgICAgIGxldCBjdXN0b21lckV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgY3VzdG9tZXJUZWxFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCBjdXN0b21lckVtYWlsRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxfRXh0ZW5zaW9uJyk7XG4gICAgICAgIGxldCBjdXN0b21lckFkZHJlc3NFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgY3VzdG9tZXJFeHRDb2xzID0gY3VzdG9tZXJFeHRPYmouZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZ2V0TmFtZSgpICE9PSAnQ2xpZW50SUQnICYmIHguZ2V0TmFtZSgpICE9PSAnQ3VzdG9tZXJJRCcpO1xuICAgICAgICBsZXQgY3VzdG9tZXJUZWxFeHRDb2xzID0gY3VzdG9tZXJUZWxFeHRPYmouZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZ2V0TmFtZSgpICE9PSAnQ2xpZW50SUQnICYmIHguZ2V0TmFtZSgpICE9PSAnQ3VzdG9tZXJDbGllbnRJRCcpO1xuICAgICAgICBsZXQgY3VzdG9tZXJFbWFpbEV4dENvbHMgPSBjdXN0b21lckVtYWlsRXh0T2JqLmdldENvbHVtbnMoKS5maWx0ZXIoeCA9PiB4LmdldE5hbWUoKSAhPT0gJ0NsaWVudElEJyAmJiB4LmdldE5hbWUoKSAhPT0gJ0N1c3RvbWVyQ2xpZW50SUQnKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyQWRkcmVzc0V4dENvbHMgPSBjdXN0b21lckFkZHJlc3NFeHRPYmouZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZ2V0TmFtZSgpICE9PSAnQ2xpZW50SUQnICYmIHguZ2V0TmFtZSgpICE9PSAnQ3VzdG9tZXJDbGllbnRJRCcpO1xuXG4gICAgICAgIHJldHVybkpzb24gPSBwdXNoRGF0YS5tYXAoY3VzdG9tZXIgPT4ge1xuXG4gICAgICAgICAgICBsZXQgRXh0ZW5zaW9ucyA9IGN1c3RvbWVyRXh0Q29sc1xuICAgICAgICAgICAgICAgIC5tYXAoY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjb2wuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjdXN0b21lcltjb2wuZ2V0TmFtZSgpXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJjdXN0b21lcklEXCI6IGN1c3RvbWVyLkN1c3RvbWVySUQsXG4gICAgICAgICAgICAgICAgXCJmaXJzdE5hbWVcIjogY3VzdG9tZXIuRmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIFwibWlkZGxlTmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibGFzdE5hbWVcIjogY3VzdG9tZXIuTGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJtYXJyaXRhbFN0YXR1c1wiOiBjdXN0b21lci5NYXJyaWFnZSxcbiAgICAgICAgICAgICAgICBcIm9jY3VwYXRpb25cIjogY3VzdG9tZXIuT2NjdXBhdGlvbixcbiAgICAgICAgICAgICAgICBcImVtcGxveWVyXCI6IGN1c3RvbWVyLkNvbXBhbnksXG4gICAgICAgICAgICAgICAgXCJiaXJ0aERhdGVcIjogY3VzdG9tZXIuQmlydGhkYXlZZWFyID09PSAnbnVsbCcgfHwgY3VzdG9tZXIuQmlydGhkYXlZZWFyID09PSBudWxsID8gbnVsbCA6IGAke2N1c3RvbWVyLkJpcnRoZGF5WWVhcn0tJHtjdXN0b21lci5CaXJ0aGRheU1vbnRofS0ke2N1c3RvbWVyLkJpcnRoZGF5RGF0ZX1gLFxuICAgICAgICAgICAgICAgIFwiYWdlUmFuZ2VcIjogY3VzdG9tZXIuQWdlUmFuZ2UsXG4gICAgICAgICAgICAgICAgXCJnZW5kZXJcIjogY3VzdG9tZXIuR2VuZGVyLFxuICAgICAgICAgICAgICAgIFwibnVtYmVyT2ZDaGlsZHJlblwiOiBjdXN0b21lci5DaGlsZHJlbixcbiAgICAgICAgICAgICAgICBcImFkZHJlc3Nlc1wiOiBjdXN0b21lci5BZGRyZXNzLm1hcChhZGRyID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc2VzRXh0ZW5zaW9ucyA9IGN1c3RvbWVyQWRkcmVzc0V4dENvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY29sLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFkZHJbY29sLmdldE5hbWUoKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzVHlwZVwiOiBhZGRyLkFkZHJlc3NUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudHJ5Q29kZVwiOiBhZGRyLkNvdW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNpdHlcIjogYWRkci5DaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmVhXCI6IGFkZHIuQXJlYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdENvZGVcIjogYWRkci5aaXBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lMVwiOiBhZGRyLkFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmU0XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlzQ2hhbmdlYWJsZVwiOiBhZGRyLkRhdGFTb3VyY2UgIT09ICdPUFVTJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBhZGRyZXNzZXNFeHRlbnNpb25zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcInBob25lQ2hhbm5lbHNcIjogY3VzdG9tZXIuVGVsLm1hcCh0ZWwgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZWxFeHRlbnNpb25zID0gY3VzdG9tZXJUZWxFeHRDb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0ZWxbY29sLmdldE5hbWUoKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2FnZVR5cGVcIjogdGVsLlRlbFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBob25lTnVtYmVyXCI6IHRlbC5UZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlzQ2hhbmdlYWJsZVwiOiB0ZWwuRGF0YVNvdXJjZSAhPT0gJ09QVVMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleHRlbnNpb25zXCI6IHRlbEV4dGVuc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwiZW1haWxDb250YWN0c1wiOiBjdXN0b21lci5FbWFpbC5tYXAoZW1haWwgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEV4dGVuc2lvbnMgPSBjdXN0b21lckVtYWlsRXh0Q29sc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjb2wuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb2wuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZW1haWxbY29sLmdldE5hbWUoKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFR5cGVcIjogZW1haWwuRW1haWxUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbC5FbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNDaGFuZ2VBYmxlXCI6IGVtYWlsLkRhdGFTb3VyY2UgIT09ICdPUFVTJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBlbWFpbEV4dGVuc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFwiYW5udWFsSW5jb21lUmFuZ2VcIjogY3VzdG9tZXIuSW5jb21lLFxuICAgICAgICAgICAgICAgIFwiY29udGFjdExpbmtcIjogY3VzdG9tZXIuU291cmNlLFxuICAgICAgICAgICAgICAgIFwiZmFtaWxpYXJpdHlcIjogY3VzdG9tZXIuRmFtaWxpYXJpdHksXG4gICAgICAgICAgICAgICAgXCJ0b3VjaFBvaW50RnJlcXVlbmN5XCI6IGN1c3RvbWVyLkNvbnRhY3RGcmVxdWFuY3ksXG4gICAgICAgICAgICAgICAgXCJsZWFkUHJvYmFiaWxpdHlcIjogY3VzdG9tZXIuUG9zc2liaWxpdHksXG4gICAgICAgICAgICAgICAgXCJpc0ZvbGxvd2VkXCI6IGN1c3RvbWVyLklzRm9sbG93ID09PSAnWScsXG4gICAgICAgICAgICAgICAgXCJpc092ZXJUaW1lQWxlcnRcIjogY3VzdG9tZXIuSXNPdmVyVGltZUFsZXJ0ID09PSAnWScsXG4gICAgICAgICAgICAgICAgXCJpc0NoYW5nZWFibGVcIjogY3VzdG9tZXIuRGF0YVNvdXJjZSAhPT0gJ09QVVMnLFxuICAgICAgICAgICAgICAgIFwicHJvZmlsZUNvbXBsZXRpb25cIjogY3VzdG9tZXIuQ29tcGxldGVuZXNzLFxuICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiBFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIFwic3luY2hEZXRhaWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWVudFRpbWVcIjogbmV3IERhdGUoY3VzdG9tZXIuQ2xpZW50VGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kXCI6IG5ldyBEYXRlKGN1c3RvbWVyLkRhdGFUaW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBcInRvRGVsZXRlXCI6IGN1c3RvbWVyLklzRGVsZXRlID09PSAnWSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lciBnZXRQdXNoSnNvbjonLCByZXR1cm5Kc29uKTtcbiAgICAgICAgaWYgKHRoaXMuUHVzaEFPUCkge1xuICAgICAgICAgICAgcmV0dXJuSnNvbiA9IGF3YWl0IHRoaXMuUHVsbEFPUC5leGVjdXRlKHJldHVybkpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5Kc29uO1xuICAgIH1cblxuICAgIGFzeW5jIHB1bGxEYXRhKHJlc3ApIHtcbiAgICAgICAgaWYgKHRoaXMuUHVsbEFPUCkge1xuICAgICAgICAgICAgcmVzcCA9IGF3YWl0IHRoaXMuUHVsbEFPUC5leGVjdXRlKHJlc3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwLmN1c3RvbWVySW5mb3MubGVuZ3RoID4gMCB8fCByZXNwLmRlbGV0ZWRQZXJzb25JZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DdXN0b21lcicpO1xuICAgICAgICAgICAgbGV0IHRlbE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX1RlbCcpO1xuICAgICAgICAgICAgbGV0IGVtYWlsT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWwnKTtcbiAgICAgICAgICAgIGxldCBhZGRyZXNzT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzcycpO1xuICAgICAgICAgICAgbGV0IGN1c3RvbWVyRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICBsZXQgZW1haWxFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9FbWFpbF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgIGxldCBhZGRyZXNzRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc19FeHRlbnNpb24nKTtcbiAgICAgICAgICAgIGxldCB0ZWxFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJSZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBsZXQgQ3VzdG9tZXJDbGllbnRJREFyciA9IGN1c3RvbWVyUmVzcC5Cb2R5Lm1hcCh4ID0+IHguQ2xpZW50SUQpO1xuICAgICAgICAgICAgbGV0IEN1c3RvbWVySWRBcnIgPSBjdXN0b21lclJlc3AuQm9keS5tYXAoeCA9PiB4LkN1c3RvbWVySUQpO1xuICAgICAgICAgICAgLy8gZGVsZXRlIHRlbCxlbWFpbCxhZGRyZXNzIGZpcnN0XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJJbmZvSWRzID0gcmVzcC5jdXN0b21lckluZm9zLm1hcCh4ID0+IHguY3VzdG9tZXJJRCk7XG4gICAgICAgICAgICBsZXQgVG9EZWxldGVDdXN0b21lckNsaWVudElEcyA9IGN1c3RvbWVyUmVzcC5Cb2R5LmZpbHRlcih4ID0+IGN1c3RvbWVySW5mb0lkcy5pbmRleE9mKHguQ3VzdG9tZXJJRCkgPiAtMSkubWFwKHggPT4geC5DbGllbnRJRCk7XG4gICAgICAgICAgICB0ZWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBUb0RlbGV0ZUN1c3RvbWVyQ2xpZW50SURzKSk7XG4gICAgICAgICAgICBlbWFpbE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFRvRGVsZXRlQ3VzdG9tZXJDbGllbnRJRHMpKTtcbiAgICAgICAgICAgIGFkZHJlc3NPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBUb0RlbGV0ZUN1c3RvbWVyQ2xpZW50SURzKSk7XG4gICAgICAgICAgICB0ZWxFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBUb0RlbGV0ZUN1c3RvbWVyQ2xpZW50SURzKSk7XG4gICAgICAgICAgICBlbWFpbEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFRvRGVsZXRlQ3VzdG9tZXJDbGllbnRJRHMpKTtcbiAgICAgICAgICAgIGFkZHJlc3NFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBUb0RlbGV0ZUN1c3RvbWVyQ2xpZW50SURzKSk7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUodGVsT2JqKTtcbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShlbWFpbE9iaik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoYWRkcmVzc09iaik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUodGVsRXh0T2JqKTtcbiAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShlbWFpbEV4dE9iaik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoYWRkcmVzc0V4dE9iaik7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiByZXNwLmN1c3RvbWVySW5mb3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSAnJztcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyJyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBlbWFpbEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0VtYWlsX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIGFkZHJlc3NFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIHRlbEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX1RlbF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkN1c3RvbWVySURcIiwgZGF0YS5jdXN0b21lcklEKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkZpcnN0TmFtZVwiLCBkYXRhLmZpcnN0TmFtZSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJMYXN0TmFtZVwiLCBkYXRhLmxhc3ROYW1lKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIk9jY3VwYXRpb25cIiwgZGF0YS5vY2N1cGF0aW9uKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkNvbXBhbnlcIiwgZGF0YS5lbXBsb3llcik7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheVllYXJcIiwgZGF0YS5iaXJ0aERhdGUgPT09IG51bGwgfHwgZGF0YS5iaXJ0aERhdGUuaW5kZXhPZignbnVsbCcpID49IDAgPyBudWxsIDogZGF0YS5iaXJ0aERhdGUuc3BsaXQoJy0nKVswXSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheU1vbnRoXCIsIGRhdGEuYmlydGhEYXRlID09PSBudWxsIHx8IGRhdGEuYmlydGhEYXRlLmluZGV4T2YoJ251bGwnKSA+PSAwID8gbnVsbCA6IGRhdGEuYmlydGhEYXRlLnNwbGl0KCctJylbMV0pO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlEYXRlXCIsIGRhdGEuYmlydGhEYXRlID09PSBudWxsIHx8IGRhdGEuYmlydGhEYXRlLmluZGV4T2YoJ251bGwnKSA+PSAwID8gbnVsbCA6IGRhdGEuYmlydGhEYXRlLnNwbGl0KCctJylbMl0pO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQWdlUmFuZ2VcIiwgZGF0YS5hZ2VSYW5nZSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJHZW5kZXJcIiwgZGF0YS5nZW5kZXIpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSW5jb21lXCIsIGRhdGEuYW5udWFsSW5jb21lUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiU291cmNlXCIsIGRhdGEuY29udGFjdExpbmspO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTWFycmlhZ2VcIiwgZGF0YS5tYXJyaXRhbFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDaGlsZHJlblwiLCBkYXRhLm51bWJlck9mQ2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiRmFtaWxpYXJpdHlcIiwgZGF0YS5mYW1pbGlhcml0eSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDb250YWN0RnJlcXVhbmN5XCIsIGRhdGEudG91Y2hQb2ludEZyZXF1ZW5jeSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJQb3NzaWJpbGl0eVwiLCBkYXRhLmxlYWRQcm9iYWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJJc0ZvbGxvd1wiLCBkYXRhLmlzRm9sbG93ZWQgPyAnWScgOiAnTicpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSXNEZWxldGVcIiwgJ04nKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkNvbXBsZXRlbmVzc1wiLCBkYXRhLnByb2ZpbGVDb21wbGV0aW9uKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkRhdGFTb3VyY2VcIiwgZGF0YS5pc0NoYW5nZWFibGUgPyBcIkFQUFwiIDogXCJPUFVTXCIpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiRGF0YVRpbWVcIiwgcGFyc2VJU08oZGF0YS5zeW5jaERldGFpbC5sYXN0VXBkYXRlRGF0ZVRpbWVCYWNrZW5kKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKCdJc092ZXJUaW1lQWxlcnQnLCBkYXRhLmlzT3ZlclRpbWVBbGVydCk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDbGllbnRUaW1lXCIsIERhdGUubm93KCkpO1xuXG4gICAgICAgICAgICAgICAgLy9zYXZlIGVtYWlsIGV4dGVuc2lvbiBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IEV4dGVuc2lvbnMgPSBkYXRhLmV4dGVuc2lvbnM7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJFeHRPYmouc2V0VmFsdWUoXCJDdXN0b21lcklEXCIsIGRhdGEuY3VzdG9tZXJJRCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbWVyIEV4dGVuc2lvbnMnLCBFeHRlbnNpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAoRXh0ZW5zaW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIEV4dGVuc2lvbnMuZm9yRWFjaChleHRlbnNpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFeHRPYmouc2V0VmFsdWUoZXh0ZW5zaW9uLmlkLCBleHRlbnNpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoQ3VzdG9tZXJJZEFyci5pbmNsdWRlcyhkYXRhLmN1c3RvbWVySUQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudElEID0gQ3VzdG9tZXJDbGllbnRJREFycltDdXN0b21lcklkQXJyLmluZGV4T2YoZGF0YS5jdXN0b21lcklEKV07XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lcklEJywgW2RhdGEuY3VzdG9tZXJJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVySUQnLCBbZGF0YS5jdXN0b21lcklEXSkpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY3VzdG9tZXJFeHRPYmopO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY3VzdG9tZXJFeHRPYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbWFpbCBvZiBkYXRhLmVtYWlsQ29udGFjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsX2NsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0VtYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsT2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGVtYWlsX2NsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsT2JqLnNldFZhbHVlKCdFbWFpbFR5cGUnLCBlbWFpbC5lbWFpbFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE9iai5zZXRWYWx1ZSgnRW1haWwnLCBlbWFpbC5lbWFpbCk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsT2JqLnNldFZhbHVlKCdEYXRhU291cmNlJywgZW1haWwuaXNDaGFuZ2VBYmxlID8gJ0FQUCcgOiAnT1BVUycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBlbWFpbCBleHRlbnNpb24gZGF0YVxuICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxFeHRlbnNpb25zID0gZW1haWwuZXh0ZW5zaW9ucztcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeHRPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgZW1haWxfY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4dE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VtYWlsRXh0ZW5zaW9ucycsIGVtYWlsRXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbWFpbEV4dGVuc2lvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFeHRlbnNpb25zLmZvckVhY2goZXh0ZW5zaW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEV4dE9iai5zZXRWYWx1ZShleHRlbnNpb24uaWQsIGV4dGVuc2lvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoZW1haWxFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoZW1haWxPYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhZGRyZXNzIG9mIGRhdGEuYWRkcmVzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzX2NsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzcycpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGFkZHJlc3NfY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdBZGRyZXNzVHlwZScsIGFkZHJlc3MuYWRkcmVzc1R5cGUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdDb3VudHJ5JywgYWRkcmVzcy5jb3VudHJ5Q29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NPYmouc2V0VmFsdWUoJ0NpdHknLCBhZGRyZXNzLmNpdHkpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdBcmVhJywgYWRkcmVzcy5hcmVhKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iai5zZXRWYWx1ZSgnWmlwY29kZScsIGFkZHJlc3MucG9zdENvZGUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdBZGRyZXNzJywgYWRkcmVzcy5saW5lMSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NPYmouc2V0VmFsdWUoJ0RhdGFTb3VyY2UnLCBhZGRyZXNzLmlzQ2hhbmdlQWJsZSA/ICdBUFAnIDogJ09QVVMnKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgZW1haWwgZXh0ZW5zaW9uIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NFeHRlbnNpb25zID0gYWRkcmVzcy5leHRlbnNpb25zO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzRXh0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGFkZHJlc3NfY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzRXh0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkcmVzc0V4dGVuc2lvbnMnLCBhZGRyZXNzRXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzRXh0ZW5zaW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzRXh0ZW5zaW9ucy5mb3JFYWNoKGV4dGVuc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0V4dE9iai5zZXRWYWx1ZShleHRlbnNpb24uaWQsIGV4dGVuc2lvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoYWRkcmVzc0V4dE9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChhZGRyZXNzT2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdGVsIG9mIGRhdGEucGhvbmVDaGFubmVscykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVsX2NsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICB0ZWxPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9UZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGVsT2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIHRlbF9jbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgdGVsT2JqLnNldFZhbHVlKCdUZWxUeXBlJywgdGVsLnVzYWdlVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRlbE9iai5zZXRWYWx1ZSgnVGVsJywgdGVsLnBob25lTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGVsT2JqLnNldFZhbHVlKCdEYXRhU291cmNlJywgdGVsLmlzQ2hhbmdlYWJsZSA/ICdBUFAnIDogJ09QVVMnKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgZW1haWwgZXh0ZW5zaW9uIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbEV4dGVuc2lvbnMgPSB0ZWwuZXh0ZW5zaW9ucztcbiAgICAgICAgICAgICAgICAgICAgdGVsRXh0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIHRlbF9jbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbEV4dE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RlbEV4dGVuc2lvbnMnLCB0ZWxFeHRlbnNpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbEV4dGVuc2lvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVsRXh0ZW5zaW9ucy5mb3JFYWNoKGV4dGVuc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsRXh0T2JqLnNldFZhbHVlKGV4dGVuc2lvbi5pZCwgZXh0ZW5zaW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydCh0ZWxFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQodGVsT2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBEZWxldGVDdXN0b21lckNsaWVudElkcyA9IHJlc3AuZGVsZXRlZFBlcnNvbklkcy5tYXAoeCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gY3VzdG9tZXJSZXNwLkJvZHkuZmlsdGVyKHkgPT4geS5DdXN0b21lcklEID09PSB4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyZWQubGVuZ3RoID4gMCA/IGZpbHRlcmVkWzBdLkNsaWVudElEIDogbnVsbFxuICAgICAgICAgICAgfSkuZmlsdGVyKHggPT4geCAhPT0gbnVsbCk7XG4gICAgICAgICAgICBpZiAoRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXInKTtcbiAgICAgICAgICAgICAgICBlbWFpbE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0VtYWlsJyk7XG4gICAgICAgICAgICAgICAgYWRkcmVzc09iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3MnKTtcbiAgICAgICAgICAgICAgICB0ZWxPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9UZWwnKTtcbiAgICAgICAgICAgICAgICBlbWFpbEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0VtYWlsX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIGFkZHJlc3NFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgICAgIHRlbEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX1RlbF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJJRCcsIHJlc3AuZGVsZXRlZFBlcnNvbklkcykpO1xuICAgICAgICAgICAgICAgIGVtYWlsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMpKTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMpKTtcbiAgICAgICAgICAgICAgICB0ZWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBEZWxldGVDdXN0b21lckNsaWVudElkcykpO1xuICAgICAgICAgICAgICAgIGVtYWlsRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMpKTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMpKTtcbiAgICAgICAgICAgICAgICB0ZWxFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBEZWxldGVDdXN0b21lckNsaWVudElkcykpO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShjdXN0b21lck9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGVtYWlsT2JqKTtcbiAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoYWRkcmVzc09iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRlbE9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGVtYWlsRXh0T2JqKTtcbiAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoYWRkcmVzc0V4dE9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRlbEV4dE9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU1FMaXRlUmVzcG9uc2UoeyBzdGF0dXM6IHRydWUgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IEZVTkNfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNlcXVlbnRpYWxJRE5lZWRlZChmcm9udGVuZFRpbWU6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGxldCBudW06IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DdXN0b21lcicpO1xuICAgICAgICBpZiAoZGFvICYmIGN1c3RvbWVyT2JqKSB7XG4gICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgR3JlYXRlclJlc3RyaWN0aW9uKCdDbGllbnRUaW1lJywgW2Zyb250ZW5kVGltZV0pKTtcbiAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncXVlcnkgY3VzdG9tZXIgb2JqOicsIHJlc3ApO1xuICAgICAgICAgICAgdGhpcy50bXBQdXNoRGF0YSA9IHJlc3AuQm9keS5maWx0ZXIoeCA9PiB4LkN1c3RvbWVySUQgPT09IG51bGwpO1xuICAgICAgICAgICAgbnVtID0gdGhpcy50bXBQdXNoRGF0YS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRTZXF1ZW50aWFsSUQoaWRzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIGlmICh0aGlzLnRtcFB1c2hEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBkYXRhV2l0aG91dElkcyA9IHRoaXMudG1wUHVzaERhdGE7XG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGZvciAobGV0IFtpbmRleCwgZGF0YV0gb2YgZGF0YVdpdGhvdXRJZHMuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXInKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkN1c3RvbWVySURcIiwgaWRzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW2RhdGEuQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGN1c3RvbWVyT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGRhby5ydW5UcmFuc2FjdGlvbigpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgdGhpcy50bXBQdXNoRGF0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFB1c2hEYXRhKGZyb250ZW5kVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkYXRhcyA9IFtdO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXInKTtcbiAgICAgICAgaWYgKGRhbyAmJiBjdXN0b21lck9iaikge1xuICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEdyZWF0ZXJSZXN0cmljdGlvbignQ2xpZW50VGltZScsIFtmcm9udGVuZFRpbWVdKSk7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IGN1c3RvbWVyIG9iajonLCByZXNwKTtcbiAgICAgICAgICAgIGlmIChyZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckFycmF5ID0gcmVzcC5Cb2R5O1xuICAgICAgICAgICAgICAgIGxldCBjbGllbnRJREFycmF5ID0gY3VzdG9tZXJBcnJheS5tYXAoeCA9PiB4LkNsaWVudElEKTtcbiAgICAgICAgICAgICAgICBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgICAgIGxldCB0ZWxPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DdXN0b21lcl9UZWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgZW1haWxPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9WV19DdXN0b21lcl9FbWFpbCcpO1xuICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXJfQWRkcmVzcycpO1xuICAgICAgICAgICAgICAgIHRlbE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEQXJyYXkpKTtcbiAgICAgICAgICAgICAgICBlbWFpbE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEQXJyYXkpKTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgY2xpZW50SURBcnJheSkpO1xuICAgICAgICAgICAgICAgIGxldCB0ZWxSZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZSh0ZWxPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBlbWFpbFJlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKGVtYWlsT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc1Jlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKGFkZHJlc3NPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGN1c3RvbWVyIG9mIGN1c3RvbWVyQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuVGVsID0gdGVsUmVzcC5Cb2R5LmZpbHRlcih4ID0+IHguQ3VzdG9tZXJDbGllbnRJRCA9PSBjdXN0b21lci5DbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLkVtYWlsID0gZW1haWxSZXNwLkJvZHkuZmlsdGVyKHggPT4geC5DdXN0b21lckNsaWVudElEID09IGN1c3RvbWVyLkNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuQWRkcmVzcyA9IGFkZHJlc3NSZXNwLkJvZHkuZmlsdGVyKHggPT4geC5DdXN0b21lckNsaWVudElEID09IGN1c3RvbWVyLkNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaChjdXN0b21lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhcztcbiAgICB9XG59Il19