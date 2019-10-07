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
export class CustomerSync {
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
        return 'CUSTOMER';
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
            //get extension column informance
            /** @type {?} */
            let customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
            /** @type {?} */
            let customerTelExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
            /** @type {?} */
            let customerEmailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
            /** @type {?} */
            let customerAddressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
            /** @type {?} */
            let customerExtCols = customerExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerID'));
            /** @type {?} */
            let customerTelExtCols = customerTelExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'));
            /** @type {?} */
            let customerEmailExtCols = customerEmailExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'));
            /** @type {?} */
            let customerAddressExtCols = customerAddressExtObj.getColumns().filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.getName() !== 'ClientID' && x.getName() !== 'CustomerClientID'));
            returnJson = pushData.map((/**
             * @param {?} customer
             * @return {?}
             */
            customer => {
                /** @type {?} */
                let Extensions = customerExtCols
                    .map((/**
                 * @param {?} col
                 * @return {?}
                 */
                col => {
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
                    "birthDate": customer.BirthdayYear === 'null' || customer.BirthdayYear === null ? null : `${customer.BirthdayYear}-${customer.BirthdayMonth}-${customer.BirthdayDate}`,
                    "ageRange": customer.AgeRange,
                    "gender": customer.Gender,
                    "numberOfChildren": customer.Children,
                    "addresses": customer.Address.map((/**
                     * @param {?} addr
                     * @return {?}
                     */
                    addr => {
                        /** @type {?} */
                        let addressesExtensions = customerAddressExtCols
                            .map((/**
                         * @param {?} col
                         * @return {?}
                         */
                        col => {
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
                    tel => {
                        /** @type {?} */
                        let telExtensions = customerTelExtCols
                            .map((/**
                         * @param {?} col
                         * @return {?}
                         */
                        col => {
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
                    email => {
                        /** @type {?} */
                        let emailExtensions = customerEmailExtCols
                            .map((/**
                         * @param {?} col
                         * @return {?}
                         */
                        col => {
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
            if (resp.customerInfos.length > 0 || resp.deletedPersonIds.length > 0) {
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                /** @type {?} */
                let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
                /** @type {?} */
                let telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                /** @type {?} */
                let emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                /** @type {?} */
                let addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                /** @type {?} */
                let customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                /** @type {?} */
                let emailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                /** @type {?} */
                let addressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                /** @type {?} */
                let telExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                /** @type {?} */
                let customerResp = yield dao.queryByTable(customerObj).toPromise();
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
                // delete tel,email,address first
                /** @type {?} */
                let customerInfoIds = resp.customerInfos.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.customerID));
                /** @type {?} */
                let ToDeleteCustomerClientIDs = customerResp.Body.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => customerInfoIds.indexOf(x.CustomerID) > -1)).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.ClientID));
                telObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                emailObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                addressObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                telExtObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                emailExtObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                addressExtObj.addRestriction(new InRestriction('CustomerClientID', ToDeleteCustomerClientIDs));
                dao.transactionDelete(telObj);
                dao.transactionDelete(emailObj);
                dao.transactionDelete(addressObj);
                dao.transactionDelete(telExtObj);
                dao.transactionDelete(emailExtObj);
                dao.transactionDelete(addressExtObj);
                for (let data of resp.customerInfos) {
                    /** @type {?} */
                    let clientID = '';
                    customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                    customerExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Extension');
                    emailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                    addressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                    telExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
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
                    /** @type {?} */
                    let Extensions = data.extensions;
                    customerExtObj.setValue("CustomerID", data.customerID);
                    console.log('customer Extensions', Extensions);
                    if (Extensions != null) {
                        Extensions.forEach((/**
                         * @param {?} extension
                         * @return {?}
                         */
                        extension => {
                            customerExtObj.setValue(extension.id, extension.value);
                        }));
                    }
                    if (CustomerIdArr.includes(data.customerID)) {
                        clientID = CustomerClientIDArr[CustomerIdArr.indexOf(data.customerID)];
                        customerObj.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                        customerExtObj.addRestriction(new EqualRestriction('CustomerID', [data.customerID]));
                        dao.transactionUpdate(customerObj);
                        dao.transactionUpdate(customerExtObj);
                    }
                    else {
                        clientID = uuid();
                        customerObj.setValue("ClientID", clientID);
                        customerExtObj.setValue("ClientID", clientID);
                        dao.transactionInsert(customerObj);
                        dao.transactionInsert(customerExtObj);
                    }
                    for (let email of data.emailContacts) {
                        /** @type {?} */
                        let email_clientID = uuid();
                        emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                        emailObj.setValue('ClientID', email_clientID);
                        emailObj.setValue('CustomerClientID', clientID);
                        emailObj.setValue('EmailType', email.emailType);
                        emailObj.setValue('Email', email.email);
                        emailObj.setValue('DataSource', email.isChangeAble ? 'APP' : 'OPUS');
                        //save email extension data
                        /** @type {?} */
                        let emailExtensions = email.extensions;
                        emailExtObj.setValue('ClientID', email_clientID);
                        emailExtObj.setValue('CustomerClientID', clientID);
                        console.log('emailExtensions', emailExtensions);
                        if (emailExtensions != null) {
                            emailExtensions.forEach((/**
                             * @param {?} extension
                             * @return {?}
                             */
                            extension => {
                                emailExtObj.setValue(extension.id, extension.value);
                            }));
                        }
                        dao.transactionInsert(emailExtObj);
                        dao.transactionInsert(emailObj);
                    }
                    for (let address of data.addresses) {
                        /** @type {?} */
                        let address_clientID = uuid();
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
                        /** @type {?} */
                        let addressExtensions = address.extensions;
                        addressExtObj.setValue('ClientID', address_clientID);
                        addressExtObj.setValue('CustomerClientID', clientID);
                        console.log('addressExtensions', addressExtensions);
                        if (addressExtensions != null) {
                            addressExtensions.forEach((/**
                             * @param {?} extension
                             * @return {?}
                             */
                            extension => {
                                addressExtObj.setValue(extension.id, extension.value);
                            }));
                        }
                        dao.transactionInsert(addressExtObj);
                        dao.transactionInsert(addressObj);
                    }
                    for (let tel of data.phoneChannels) {
                        /** @type {?} */
                        let tel_clientID = uuid();
                        telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                        telObj.setValue('ClientID', tel_clientID);
                        telObj.setValue('CustomerClientID', clientID);
                        telObj.setValue('TelType', tel.usageType);
                        telObj.setValue('Tel', tel.phoneNumber);
                        telObj.setValue('DataSource', tel.isChangeable ? 'APP' : 'OPUS');
                        //save email extension data
                        /** @type {?} */
                        let telExtensions = tel.extensions;
                        telExtObj.setValue('ClientID', tel_clientID);
                        telExtObj.setValue('CustomerClientID', clientID);
                        console.log('telExtensions', telExtensions);
                        if (telExtensions != null) {
                            telExtensions.forEach((/**
                             * @param {?} extension
                             * @return {?}
                             */
                            extension => {
                                telExtObj.setValue(extension.id, extension.value);
                            }));
                        }
                        dao.transactionInsert(telExtObj);
                        dao.transactionInsert(telObj);
                    }
                }
                /** @type {?} */
                let DeleteCustomerClientIds = resp.deletedPersonIds.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    /** @type {?} */
                    let filtered = customerResp.Body.filter((/**
                     * @param {?} y
                     * @return {?}
                     */
                    y => y.CustomerID === x));
                    return filtered.length > 0 ? filtered[0].ClientID : null;
                })).filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x !== null));
                if (DeleteCustomerClientIds.length > 0) {
                    customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                    emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email');
                    addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address');
                    telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel');
                    emailExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Email_Extension');
                    addressExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Address_Extension');
                    telExtObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer_Tel_Extension');
                    customerObj.addRestriction(new InRestriction('CustomerID', resp.deletedPersonIds));
                    emailObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    addressObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    telObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    emailExtObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    addressExtObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    telExtObj.addRestriction(new InRestriction('CustomerClientID', DeleteCustomerClientIds));
                    dao.transactionDelete(customerObj);
                    dao.transactionDelete(emailObj);
                    dao.transactionDelete(addressObj);
                    dao.transactionDelete(telObj);
                    dao.transactionDelete(emailExtObj);
                    dao.transactionDelete(addressExtObj);
                    dao.transactionDelete(telExtObj);
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
            let num = 0;
            /** @type {?} */
            let dao = this.DaoFactory.getDefaultDao();
            /** @type {?} */
            let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer');
            if (dao && customerObj) {
                customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(customerObj).toPromise();
                console.log('query customer obj:', resp);
                this.tmpPushData = resp.Body.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.CustomerID === null));
                num = this.tmpPushData.length;
            }
            return num;
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setSequentialID(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.tmpPushData != null) {
                /** @type {?} */
                let dataWithoutIds = this.tmpPushData;
                /** @type {?} */
                let dao = this.DaoFactory.getDefaultDao();
                for (let [index, data] of dataWithoutIds.entries()) {
                    /** @type {?} */
                    let customerObj = this.DaoFactory.getDefaultTable('TW_LH_SD_Customer');
                    customerObj.setValue("CustomerID", ids[index]);
                    customerObj.addRestriction(new EqualRestriction('ClientID', [data.ClientID]));
                    dao.transactionUpdate(customerObj);
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
            if (dao && customerObj) {
                customerObj.addRestriction(new GreaterRestriction('ClientTime', [frontendTime]));
                /** @type {?} */
                let resp = yield dao.queryByTable(customerObj).toPromise();
                console.log('query customer obj:', resp);
                if (resp.Body.length > 0) {
                    /** @type {?} */
                    let customerArray = resp.Body;
                    /** @type {?} */
                    let clientIDArray = customerArray.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.ClientID));
                    dao = this.DaoFactory.getDefaultDao();
                    /** @type {?} */
                    let telObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Tel');
                    /** @type {?} */
                    let emailObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Email');
                    /** @type {?} */
                    let addressObj = this.DaoFactory.getDefaultTable('TW_LH_SD_VW_Customer_Address');
                    telObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                    emailObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                    addressObj.addRestriction(new InRestriction('CustomerClientID', clientIDArray));
                    /** @type {?} */
                    let telResp = yield dao.queryByTable(telObj).toPromise();
                    /** @type {?} */
                    let emailResp = yield dao.queryByTable(emailObj).toPromise();
                    /** @type {?} */
                    let addressResp = yield dao.queryByTable(addressObj).toPromise();
                    for (let customer of customerArray) {
                        customer.Tel = telResp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.CustomerClientID == customer.ClientID));
                        customer.Email = emailResp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.CustomerClientID == customer.ClientID));
                        customer.Address = addressResp.Body.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.CustomerClientID == customer.ClientID));
                        datas.push(customer);
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTeW5jLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhU3luYy9mdW5jdGlvbi9DdXN0b21lclN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdwRSxNQUFNOzs7Ozs7SUFHRixZQUFvQixVQUFzQixFQUFVLFVBQW9CLElBQUksRUFBVSxVQUFvQixJQUFJO1FBQTFGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRHRHLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsT0FBTztRQUNILE9BQU8sVUFBVSxDQUFBO0lBQ3JCLENBQUM7Ozs7O0lBRUssV0FBVyxDQUFDLFlBQVk7Ozs7Z0JBRXRCLFVBQVUsR0FBRyxFQUFFOztnQkFDZixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQzs7O2dCQUcv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QUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUMsQ0FBQzt3QkFDckYsUUFBUSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7d0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBQyxDQUFDO3dCQUN6RixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUN4QjtpQkFDSjthQUNKO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUFBO0NBQ0o7Ozs7OztJQWpaRyw2QkFBc0I7Ozs7O0lBQ3RCLG1DQUEyQjs7Ozs7SUFDZixrQ0FBOEI7Ozs7O0lBQUUsK0JBQWdDOzs7OztJQUFFLCtCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGdW5jdGlvblN5bmMsIEZVTkNfU1RBVEUgfSBmcm9tIFwiLi9JRnVuY3Rpb25TeW5jXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBHcmVhdGVyUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvR3JlYXRlclJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBJblJlc3RyaWN0aW9uIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL0luUmVzdHJpY3Rpb25cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSVN5bmNBT1AgfSBmcm9tIFwiLi9TeW5jQU9QLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVSZXNwb25zZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lclN5bmMgaW1wbGVtZW50cyBJRnVuY3Rpb25TeW5jIHtcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0bXBQdXNoRGF0YSA9IG51bGw7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBEYW9GYWN0b3J5OiBEYW9GYWN0b3J5LCBwcml2YXRlIFB1c2hBT1A6IElTeW5jQU9QID0gbnVsbCwgcHJpdmF0ZSBQdWxsQU9QOiBJU3luY0FPUCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEZVTkNfU1RBVEUuQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCk6IEZVTkNfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQ1VTVE9NRVInXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHVzaEpzb24oZnJvbnRlbmRUaW1lKSB7XG4gICAgICAgIC8vIERvIGNoZWNrIGRhdGEgY2xpZW50VGltZSA+IGZyb250ZW5kVGltZTtcbiAgICAgICAgbGV0IHJldHVybkpzb24gPSBbXTtcbiAgICAgICAgbGV0IHB1c2hEYXRhID0gYXdhaXQgdGhpcy5nZXRQdXNoRGF0YShmcm9udGVuZFRpbWUpO1xuXG4gICAgICAgIC8vZ2V0IGV4dGVuc2lvbiBjb2x1bW4gaW5mb3JtYW5jZVxuICAgICAgICBsZXQgY3VzdG9tZXJFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyVGVsRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfVGVsX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgY3VzdG9tZXJFbWFpbEV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0VtYWlsX0V4dGVuc2lvbicpO1xuICAgICAgICBsZXQgY3VzdG9tZXJBZGRyZXNzRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc19FeHRlbnNpb24nKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyRXh0Q29scyA9IGN1c3RvbWVyRXh0T2JqLmdldENvbHVtbnMoKS5maWx0ZXIoeCA9PiB4LmdldE5hbWUoKSAhPT0gJ0NsaWVudElEJyAmJiB4LmdldE5hbWUoKSAhPT0gJ0N1c3RvbWVySUQnKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyVGVsRXh0Q29scyA9IGN1c3RvbWVyVGVsRXh0T2JqLmdldENvbHVtbnMoKS5maWx0ZXIoeCA9PiB4LmdldE5hbWUoKSAhPT0gJ0NsaWVudElEJyAmJiB4LmdldE5hbWUoKSAhPT0gJ0N1c3RvbWVyQ2xpZW50SUQnKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyRW1haWxFeHRDb2xzID0gY3VzdG9tZXJFbWFpbEV4dE9iai5nZXRDb2x1bW5zKCkuZmlsdGVyKHggPT4geC5nZXROYW1lKCkgIT09ICdDbGllbnRJRCcgJiYgeC5nZXROYW1lKCkgIT09ICdDdXN0b21lckNsaWVudElEJyk7XG4gICAgICAgIGxldCBjdXN0b21lckFkZHJlc3NFeHRDb2xzID0gY3VzdG9tZXJBZGRyZXNzRXh0T2JqLmdldENvbHVtbnMoKS5maWx0ZXIoeCA9PiB4LmdldE5hbWUoKSAhPT0gJ0NsaWVudElEJyAmJiB4LmdldE5hbWUoKSAhPT0gJ0N1c3RvbWVyQ2xpZW50SUQnKTtcblxuICAgICAgICByZXR1cm5Kc29uID0gcHVzaERhdGEubWFwKGN1c3RvbWVyID0+IHtcblxuICAgICAgICAgICAgbGV0IEV4dGVuc2lvbnMgPSBjdXN0b21lckV4dENvbHNcbiAgICAgICAgICAgICAgICAubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogY29sLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3VzdG9tZXJbY29sLmdldE5hbWUoKV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJJRFwiOiBjdXN0b21lci5DdXN0b21lcklELFxuICAgICAgICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IGN1c3RvbWVyLkZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBcIm1pZGRsZU5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImxhc3ROYW1lXCI6IGN1c3RvbWVyLkxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibWFycml0YWxTdGF0dXNcIjogY3VzdG9tZXIuTWFycmlhZ2UsXG4gICAgICAgICAgICAgICAgXCJvY2N1cGF0aW9uXCI6IGN1c3RvbWVyLk9jY3VwYXRpb24sXG4gICAgICAgICAgICAgICAgXCJlbXBsb3llclwiOiBjdXN0b21lci5Db21wYW55LFxuICAgICAgICAgICAgICAgIFwiYmlydGhEYXRlXCI6IGN1c3RvbWVyLkJpcnRoZGF5WWVhciA9PT0gJ251bGwnIHx8IGN1c3RvbWVyLkJpcnRoZGF5WWVhciA9PT0gbnVsbCA/IG51bGwgOiBgJHtjdXN0b21lci5CaXJ0aGRheVllYXJ9LSR7Y3VzdG9tZXIuQmlydGhkYXlNb250aH0tJHtjdXN0b21lci5CaXJ0aGRheURhdGV9YCxcbiAgICAgICAgICAgICAgICBcImFnZVJhbmdlXCI6IGN1c3RvbWVyLkFnZVJhbmdlLFxuICAgICAgICAgICAgICAgIFwiZ2VuZGVyXCI6IGN1c3RvbWVyLkdlbmRlcixcbiAgICAgICAgICAgICAgICBcIm51bWJlck9mQ2hpbGRyZW5cIjogY3VzdG9tZXIuQ2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzZXNcIjogY3VzdG9tZXIuQWRkcmVzcy5tYXAoYWRkciA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3Nlc0V4dGVuc2lvbnMgPSBjdXN0b21lckFkZHJlc3NFeHRDb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhZGRyW2NvbC5nZXROYW1lKCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc1R5cGVcIjogYWRkci5BZGRyZXNzVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRyeUNvZGVcIjogYWRkci5Db3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCI6IGFkZHIuQ2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJlYVwiOiBhZGRyLkFyZWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvc3RDb2RlXCI6IGFkZHIuWmlwY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZTFcIjogYWRkci5BZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lMlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lM1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lNFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc0NoYW5nZWFibGVcIjogYWRkci5EYXRhU291cmNlICE9PSAnT1BVUycsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4dGVuc2lvbnNcIjogYWRkcmVzc2VzRXh0ZW5zaW9uc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXCJwaG9uZUNoYW5uZWxzXCI6IGN1c3RvbWVyLlRlbC5tYXAodGVsID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVsRXh0ZW5zaW9ucyA9IGN1c3RvbWVyVGVsRXh0Q29sc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjb2wuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb2wuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVsW2NvbC5nZXROYW1lKCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNhZ2VUeXBlXCI6IHRlbC5UZWxUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwaG9uZU51bWJlclwiOiB0ZWwuVGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc0NoYW5nZWFibGVcIjogdGVsLkRhdGFTb3VyY2UgIT09ICdPUFVTJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0ZW5zaW9uc1wiOiB0ZWxFeHRlbnNpb25zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImVtYWlsQ29udGFjdHNcIjogY3VzdG9tZXIuRW1haWwubWFwKGVtYWlsID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxFeHRlbnNpb25zID0gY3VzdG9tZXJFbWFpbEV4dENvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY29sLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVtYWlsW2NvbC5nZXROYW1lKCldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxUeXBlXCI6IGVtYWlsLkVtYWlsVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwuRW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlzQ2hhbmdlQWJsZVwiOiBlbWFpbC5EYXRhU291cmNlICE9PSAnT1BVUycsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4dGVuc2lvbnNcIjogZW1haWxFeHRlbnNpb25zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBcImFubnVhbEluY29tZVJhbmdlXCI6IGN1c3RvbWVyLkluY29tZSxcbiAgICAgICAgICAgICAgICBcImNvbnRhY3RMaW5rXCI6IGN1c3RvbWVyLlNvdXJjZSxcbiAgICAgICAgICAgICAgICBcImZhbWlsaWFyaXR5XCI6IGN1c3RvbWVyLkZhbWlsaWFyaXR5LFxuICAgICAgICAgICAgICAgIFwidG91Y2hQb2ludEZyZXF1ZW5jeVwiOiBjdXN0b21lci5Db250YWN0RnJlcXVhbmN5LFxuICAgICAgICAgICAgICAgIFwibGVhZFByb2JhYmlsaXR5XCI6IGN1c3RvbWVyLlBvc3NpYmlsaXR5LFxuICAgICAgICAgICAgICAgIFwiaXNGb2xsb3dlZFwiOiBjdXN0b21lci5Jc0ZvbGxvdyA9PT0gJ1knLFxuICAgICAgICAgICAgICAgIFwiaXNPdmVyVGltZUFsZXJ0XCI6IGN1c3RvbWVyLklzT3ZlclRpbWVBbGVydCA9PT0gJ1knLFxuICAgICAgICAgICAgICAgIFwiaXNDaGFuZ2VhYmxlXCI6IGN1c3RvbWVyLkRhdGFTb3VyY2UgIT09ICdPUFVTJyxcbiAgICAgICAgICAgICAgICBcInByb2ZpbGVDb21wbGV0aW9uXCI6IGN1c3RvbWVyLkNvbXBsZXRlbmVzcyxcbiAgICAgICAgICAgICAgICBcImV4dGVuc2lvbnNcIjogRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBcInN5bmNoRGV0YWlsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGllbnRUaW1lXCI6IG5ldyBEYXRlKGN1c3RvbWVyLkNsaWVudFRpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZFwiOiBuZXcgRGF0ZShjdXN0b21lci5EYXRhVGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0b0RlbGV0ZVwiOiBjdXN0b21lci5Jc0RlbGV0ZSA9PT0gJ1knXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tZXIgZ2V0UHVzaEpzb246JywgcmV0dXJuSnNvbik7XG4gICAgICAgIGlmICh0aGlzLlB1c2hBT1ApIHtcbiAgICAgICAgICAgIHJldHVybkpzb24gPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXR1cm5Kc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuSnNvbjtcbiAgICB9XG5cbiAgICBhc3luYyBwdWxsRGF0YShyZXNwKSB7XG4gICAgICAgIGlmICh0aGlzLlB1bGxBT1ApIHtcbiAgICAgICAgICAgIHJlc3AgPSBhd2FpdCB0aGlzLlB1bGxBT1AuZXhlY3V0ZShyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcC5jdXN0b21lckluZm9zLmxlbmd0aCA+IDAgfHwgcmVzcC5kZWxldGVkUGVyc29uSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXInKTtcbiAgICAgICAgICAgIGxldCB0ZWxPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9UZWwnKTtcbiAgICAgICAgICAgIGxldCBlbWFpbE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0VtYWlsJyk7XG4gICAgICAgICAgICBsZXQgYWRkcmVzc09iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3MnKTtcbiAgICAgICAgICAgIGxldCBjdXN0b21lckV4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgbGV0IGVtYWlsRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICBsZXQgYWRkcmVzc0V4dE9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICBsZXQgdGVsRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfVGVsX0V4dGVuc2lvbicpO1xuICAgICAgICAgICAgbGV0IGN1c3RvbWVyUmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgbGV0IEN1c3RvbWVyQ2xpZW50SURBcnIgPSBjdXN0b21lclJlc3AuQm9keS5tYXAoeCA9PiB4LkNsaWVudElEKTtcbiAgICAgICAgICAgIGxldCBDdXN0b21lcklkQXJyID0gY3VzdG9tZXJSZXNwLkJvZHkubWFwKHggPT4geC5DdXN0b21lcklEKTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0ZWwsZW1haWwsYWRkcmVzcyBmaXJzdFxuICAgICAgICAgICAgbGV0IGN1c3RvbWVySW5mb0lkcyA9IHJlc3AuY3VzdG9tZXJJbmZvcy5tYXAoeCA9PiB4LmN1c3RvbWVySUQpO1xuICAgICAgICAgICAgbGV0IFRvRGVsZXRlQ3VzdG9tZXJDbGllbnRJRHMgPSBjdXN0b21lclJlc3AuQm9keS5maWx0ZXIoeCA9PiBjdXN0b21lckluZm9JZHMuaW5kZXhPZih4LkN1c3RvbWVySUQpID4gLTEpLm1hcCh4ID0+IHguQ2xpZW50SUQpO1xuICAgICAgICAgICAgdGVsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgVG9EZWxldGVDdXN0b21lckNsaWVudElEcykpO1xuICAgICAgICAgICAgZW1haWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBUb0RlbGV0ZUN1c3RvbWVyQ2xpZW50SURzKSk7XG4gICAgICAgICAgICBhZGRyZXNzT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgVG9EZWxldGVDdXN0b21lckNsaWVudElEcykpO1xuICAgICAgICAgICAgdGVsRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgVG9EZWxldGVDdXN0b21lckNsaWVudElEcykpO1xuICAgICAgICAgICAgZW1haWxFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBUb0RlbGV0ZUN1c3RvbWVyQ2xpZW50SURzKSk7XG4gICAgICAgICAgICBhZGRyZXNzRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgVG9EZWxldGVDdXN0b21lckNsaWVudElEcykpO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRlbE9iaik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoZW1haWxPYmopO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFkZHJlc3NPYmopO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHRlbEV4dE9iaik7XG4gICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoZW1haWxFeHRPYmopO1xuICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFkZHJlc3NFeHRPYmopO1xuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzcC5jdXN0b21lckluZm9zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gJyc7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcicpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgZW1haWxFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9FbWFpbF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc19FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICB0ZWxFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDdXN0b21lcklEXCIsIGRhdGEuY3VzdG9tZXJJRCk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJGaXJzdE5hbWVcIiwgZGF0YS5maXJzdE5hbWUpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTGFzdE5hbWVcIiwgZGF0YS5sYXN0TmFtZSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJPY2N1cGF0aW9uXCIsIGRhdGEub2NjdXBhdGlvbik7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDb21wYW55XCIsIGRhdGEuZW1wbG95ZXIpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlZZWFyXCIsIGRhdGEuYmlydGhEYXRlID09PSBudWxsIHx8IGRhdGEuYmlydGhEYXRlLmluZGV4T2YoJ251bGwnKSA+PSAwID8gbnVsbCA6IGRhdGEuYmlydGhEYXRlLnNwbGl0KCctJylbMF0pO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlNb250aFwiLCBkYXRhLmJpcnRoRGF0ZSA9PT0gbnVsbCB8fCBkYXRhLmJpcnRoRGF0ZS5pbmRleE9mKCdudWxsJykgPj0gMCA/IG51bGwgOiBkYXRhLmJpcnRoRGF0ZS5zcGxpdCgnLScpWzFdKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5RGF0ZVwiLCBkYXRhLmJpcnRoRGF0ZSA9PT0gbnVsbCB8fCBkYXRhLmJpcnRoRGF0ZS5pbmRleE9mKCdudWxsJykgPj0gMCA/IG51bGwgOiBkYXRhLmJpcnRoRGF0ZS5zcGxpdCgnLScpWzJdKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkFnZVJhbmdlXCIsIGRhdGEuYWdlUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiR2VuZGVyXCIsIGRhdGEuZ2VuZGVyKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkluY29tZVwiLCBkYXRhLmFubnVhbEluY29tZVJhbmdlKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIlNvdXJjZVwiLCBkYXRhLmNvbnRhY3RMaW5rKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIk1hcnJpYWdlXCIsIGRhdGEubWFycml0YWxTdGF0dXMpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ2hpbGRyZW5cIiwgZGF0YS5udW1iZXJPZkNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkZhbWlsaWFyaXR5XCIsIGRhdGEuZmFtaWxpYXJpdHkpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ29udGFjdEZyZXF1YW5jeVwiLCBkYXRhLnRvdWNoUG9pbnRGcmVxdWVuY3kpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiUG9zc2liaWxpdHlcIiwgZGF0YS5sZWFkUHJvYmFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSXNGb2xsb3dcIiwgZGF0YS5pc0ZvbGxvd2VkID8gJ1knIDogJ04nKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIklzRGVsZXRlXCIsICdOJyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDb21wbGV0ZW5lc3NcIiwgZGF0YS5wcm9maWxlQ29tcGxldGlvbik7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJEYXRhU291cmNlXCIsIGRhdGEuaXNDaGFuZ2VhYmxlID8gXCJBUFBcIiA6IFwiT1BVU1wiKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkRhdGFUaW1lXCIsIHBhcnNlSVNPKGRhdGEuc3luY2hEZXRhaWwubGFzdFVwZGF0ZURhdGVUaW1lQmFja2VuZCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZSgnSXNPdmVyVGltZUFsZXJ0JywgZGF0YS5pc092ZXJUaW1lQWxlcnQpO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ2xpZW50VGltZVwiLCBEYXRlLm5vdygpKTtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBlbWFpbCBleHRlbnNpb24gZGF0YVxuICAgICAgICAgICAgICAgIGxldCBFeHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0T2JqLnNldFZhbHVlKFwiQ3VzdG9tZXJJRFwiLCBkYXRhLmN1c3RvbWVySUQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lciBFeHRlbnNpb25zJywgRXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKEV4dGVuc2lvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBFeHRlbnNpb25zLmZvckVhY2goZXh0ZW5zaW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0T2JqLnNldFZhbHVlKGV4dGVuc2lvbi5pZCwgZXh0ZW5zaW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKEN1c3RvbWVySWRBcnIuaW5jbHVkZXMoZGF0YS5jdXN0b21lcklEKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRJRCA9IEN1c3RvbWVyQ2xpZW50SURBcnJbQ3VzdG9tZXJJZEFyci5pbmRleE9mKGRhdGEuY3VzdG9tZXJJRCldO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJJRCcsIFtkYXRhLmN1c3RvbWVySURdKSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lcklEJywgW2RhdGEuY3VzdG9tZXJJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGN1c3RvbWVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGN1c3RvbWVyRXh0T2JqKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckV4dE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGN1c3RvbWVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGN1c3RvbWVyRXh0T2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZW1haWwgb2YgZGF0YS5lbWFpbENvbnRhY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbF9jbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9FbWFpbCcpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBlbWFpbF9jbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsT2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE9iai5zZXRWYWx1ZSgnRW1haWxUeXBlJywgZW1haWwuZW1haWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxPYmouc2V0VmFsdWUoJ0VtYWlsJywgZW1haWwuZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE9iai5zZXRWYWx1ZSgnRGF0YVNvdXJjZScsIGVtYWlsLmlzQ2hhbmdlQWJsZSA/ICdBUFAnIDogJ09QVVMnKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgZW1haWwgZXh0ZW5zaW9uIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsRXh0ZW5zaW9ucyA9IGVtYWlsLmV4dGVuc2lvbnM7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRXh0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGVtYWlsX2NsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeHRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbWFpbEV4dGVuc2lvbnMnLCBlbWFpbEV4dGVuc2lvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxFeHRlbnNpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXh0ZW5zaW9ucy5mb3JFYWNoKGV4dGVuc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFeHRPYmouc2V0VmFsdWUoZXh0ZW5zaW9uLmlkLCBleHRlbnNpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGVtYWlsRXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGVtYWlsT2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYWRkcmVzcyBvZiBkYXRhLmFkZHJlc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc19jbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBhZGRyZXNzX2NsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iai5zZXRWYWx1ZSgnQWRkcmVzc1R5cGUnLCBhZGRyZXNzLmFkZHJlc3NUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iai5zZXRWYWx1ZSgnQ291bnRyeScsIGFkZHJlc3MuY291bnRyeUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdDaXR5JywgYWRkcmVzcy5jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iai5zZXRWYWx1ZSgnQXJlYScsIGFkZHJlc3MuYXJlYSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NPYmouc2V0VmFsdWUoJ1ppcGNvZGUnLCBhZGRyZXNzLnBvc3RDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc09iai5zZXRWYWx1ZSgnQWRkcmVzcycsIGFkZHJlc3MubGluZTEpO1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzT2JqLnNldFZhbHVlKCdEYXRhU291cmNlJywgYWRkcmVzcy5pc0NoYW5nZUFibGUgPyAnQVBQJyA6ICdPUFVTJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGVtYWlsIGV4dGVuc2lvbiBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzRXh0ZW5zaW9ucyA9IGFkZHJlc3MuZXh0ZW5zaW9ucztcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0V4dE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBhZGRyZXNzX2NsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0V4dE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZHJlc3NFeHRlbnNpb25zJywgYWRkcmVzc0V4dGVuc2lvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc0V4dGVuc2lvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0V4dGVuc2lvbnMuZm9yRWFjaChleHRlbnNpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NFeHRPYmouc2V0VmFsdWUoZXh0ZW5zaW9uLmlkLCBleHRlbnNpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGFkZHJlc3NFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoYWRkcmVzc09iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHRlbCBvZiBkYXRhLnBob25lQ2hhbm5lbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbF9jbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGVsT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfVGVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRlbE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCB0ZWxfY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICB0ZWxPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbE9iai5zZXRWYWx1ZSgnVGVsVHlwZScsIHRlbC51c2FnZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB0ZWxPYmouc2V0VmFsdWUoJ1RlbCcsIHRlbC5waG9uZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHRlbE9iai5zZXRWYWx1ZSgnRGF0YVNvdXJjZScsIHRlbC5pc0NoYW5nZWFibGUgPyAnQVBQJyA6ICdPUFVTJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGVtYWlsIGV4dGVuc2lvbiBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZWxFeHRlbnNpb25zID0gdGVsLmV4dGVuc2lvbnM7XG4gICAgICAgICAgICAgICAgICAgIHRlbEV4dE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCB0ZWxfY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICB0ZWxFeHRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZWxFeHRlbnNpb25zJywgdGVsRXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZWxFeHRlbnNpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbEV4dGVuc2lvbnMuZm9yRWFjaChleHRlbnNpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbEV4dE9iai5zZXRWYWx1ZShleHRlbnNpb24uaWQsIGV4dGVuc2lvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQodGVsRXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHRlbE9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMgPSByZXNwLmRlbGV0ZWRQZXJzb25JZHMubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IGN1c3RvbWVyUmVzcC5Cb2R5LmZpbHRlcih5ID0+IHkuQ3VzdG9tZXJJRCA9PT0geCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZFswXS5DbGllbnRJRCA6IG51bGxcbiAgICAgICAgICAgIH0pLmZpbHRlcih4ID0+IHggIT09IG51bGwpO1xuICAgICAgICAgICAgaWYgKERlbGV0ZUN1c3RvbWVyQ2xpZW50SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyJyk7XG4gICAgICAgICAgICAgICAgZW1haWxPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9FbWFpbCcpO1xuICAgICAgICAgICAgICAgIGFkZHJlc3NPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzJyk7XG4gICAgICAgICAgICAgICAgdGVsT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfVGVsJyk7XG4gICAgICAgICAgICAgICAgZW1haWxFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9FbWFpbF9FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzRXh0T2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc19FeHRlbnNpb24nKTtcbiAgICAgICAgICAgICAgICB0ZWxFeHRPYmogPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKCdUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uJyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVySUQnLCByZXNwLmRlbGV0ZWRQZXJzb25JZHMpKTtcbiAgICAgICAgICAgICAgICBlbWFpbE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIERlbGV0ZUN1c3RvbWVyQ2xpZW50SWRzKSk7XG4gICAgICAgICAgICAgICAgYWRkcmVzc09iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIERlbGV0ZUN1c3RvbWVyQ2xpZW50SWRzKSk7XG4gICAgICAgICAgICAgICAgdGVsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMpKTtcbiAgICAgICAgICAgICAgICBlbWFpbEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIERlbGV0ZUN1c3RvbWVyQ2xpZW50SWRzKSk7XG4gICAgICAgICAgICAgICAgYWRkcmVzc0V4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIERlbGV0ZUN1c3RvbWVyQ2xpZW50SWRzKSk7XG4gICAgICAgICAgICAgICAgdGVsRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBJblJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgRGVsZXRlQ3VzdG9tZXJDbGllbnRJZHMpKTtcbiAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25EZWxldGUoY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShlbWFpbE9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFkZHJlc3NPYmopO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZSh0ZWxPYmopO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZShlbWFpbEV4dE9iaik7XG4gICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFkZHJlc3NFeHRPYmopO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkRlbGV0ZSh0ZWxFeHRPYmopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNRTGl0ZVJlc3BvbnNlKHsgc3RhdHVzOiB0cnVlIH0sIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKHN0YXRlOiBGVU5DX1NUQVRFKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZXF1ZW50aWFsSUROZWVkZWQoZnJvbnRlbmRUaW1lOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBsZXQgbnVtOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXInKTtcbiAgICAgICAgaWYgKGRhbyAmJiBjdXN0b21lck9iaikge1xuICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEdyZWF0ZXJSZXN0cmljdGlvbignQ2xpZW50VGltZScsIFtmcm9udGVuZFRpbWVdKSk7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5IGN1c3RvbWVyIG9iajonLCByZXNwKTtcbiAgICAgICAgICAgIHRoaXMudG1wUHVzaERhdGEgPSByZXNwLkJvZHkuZmlsdGVyKHggPT4geC5DdXN0b21lcklEID09PSBudWxsKTtcbiAgICAgICAgICAgIG51bSA9IHRoaXMudG1wUHVzaERhdGEubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0U2VxdWVudGlhbElEKGlkczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICBpZiAodGhpcy50bXBQdXNoRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgZGF0YVdpdGhvdXRJZHMgPSB0aGlzLnRtcFB1c2hEYXRhO1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBbaW5kZXgsIGRhdGFdIG9mIGRhdGFXaXRob3V0SWRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX0N1c3RvbWVyJyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDdXN0b21lcklEXCIsIGlkc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFtkYXRhLkNsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjdXN0b21lck9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBkYW8ucnVuVHJhbnNhY3Rpb24oKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHRoaXMudG1wUHVzaERhdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRQdXNoRGF0YShmcm9udGVuZFRpbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgZGF0YXMgPSBbXTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1ZXX0N1c3RvbWVyJyk7XG4gICAgICAgIGlmIChkYW8gJiYgY3VzdG9tZXJPYmopIHtcbiAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyUmVzdHJpY3Rpb24oJ0NsaWVudFRpbWUnLCBbZnJvbnRlbmRUaW1lXSkpO1xuICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxdWVyeSBjdXN0b21lciBvYmo6JywgcmVzcCk7XG4gICAgICAgICAgICBpZiAocmVzcC5Cb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJBcnJheSA9IHJlc3AuQm9keTtcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50SURBcnJheSA9IGN1c3RvbWVyQXJyYXkubWFwKHggPT4geC5DbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgZGFvID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVsT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXJfVGVsJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVtYWlsT2JqID0gdGhpcy5EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZSgnVFdfTEhfU0RfVldfQ3VzdG9tZXJfRW1haWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc09iaiA9IHRoaXMuRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoJ1RXX0xIX1NEX1ZXX0N1c3RvbWVyX0FkZHJlc3MnKTtcbiAgICAgICAgICAgICAgICB0ZWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBjbGllbnRJREFycmF5KSk7XG4gICAgICAgICAgICAgICAgZW1haWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBjbGllbnRJREFycmF5KSk7XG4gICAgICAgICAgICAgICAgYWRkcmVzc09iai5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIGNsaWVudElEQXJyYXkpKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVsUmVzcCA9IGF3YWl0IGRhby5xdWVyeUJ5VGFibGUodGVsT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgZW1haWxSZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShlbWFpbE9iaikudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NSZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShhZGRyZXNzT2JqKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjdXN0b21lciBvZiBjdXN0b21lckFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLlRlbCA9IHRlbFJlc3AuQm9keS5maWx0ZXIoeCA9PiB4LkN1c3RvbWVyQ2xpZW50SUQgPT0gY3VzdG9tZXIuQ2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lci5FbWFpbCA9IGVtYWlsUmVzcC5Cb2R5LmZpbHRlcih4ID0+IHguQ3VzdG9tZXJDbGllbnRJRCA9PSBjdXN0b21lci5DbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLkFkZHJlc3MgPSBhZGRyZXNzUmVzcC5Cb2R5LmZpbHRlcih4ID0+IHguQ3VzdG9tZXJDbGllbnRJRCA9PSBjdXN0b21lci5DbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goY3VzdG9tZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YXM7XG4gICAgfVxufSJdfQ==