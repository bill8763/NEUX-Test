/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ClientCustomDao, EqualRestriction, TableUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
var CustomerSaveDetailAPI = /** @class */ (function () {
    function CustomerSaveDetailAPI(daoFactory, customerUtils) {
        this.daoFactory = daoFactory;
        this.customerUtils = customerUtils;
        this.Data = null;
    }
    /**
     * @param {?} detail
     * @return {?}
     */
    CustomerSaveDetailAPI.prototype.setDetail = /**
     * @param {?} detail
     * @return {?}
     */
    function (detail) {
        this.Data = detail;
    };
    Object.defineProperty(CustomerSaveDetailAPI.prototype, "customerDetail", {
        get: /**
         * @return {?}
         */
        function () {
            return this.Data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerSaveDetailAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveCustomerDetail';
    };
    /**
     * @return {?}
     */
    CustomerSaveDetailAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    CustomerSaveDetailAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // let returnObj = {
        //     "status": true,
        //     "msg": ''
        // };
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            var e_1, _a, e_2, _b, e_3, _c;
            /** @type {?} */
            var dao;
            /** @type {?} */
            var base_dao = _this.daoFactory.getDefaultDao();
            if (base_dao != undefined) {
                dao = new ClientCustomDao(base_dao);
                console.log("base_dao:", base_dao);
                console.log("dao:", dao);
                //save customer data
                /** @type {?} */
                var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                /** @type {?} */
                var customerExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Extension");
                if (customerObj && customerExtObj) {
                    /** @type {?} */
                    var birthday = _this.customerDetail.Birthday;
                    if (birthday != null && birthday != undefined) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear().toString());
                        /** @type {?} */
                        var month = (birthday.getMonth() + 1).toString();
                        if (month.length < 2) {
                            month = '0' + month.toString();
                        }
                        customerObj.setValue("BirthdayMonth", month);
                        /** @type {?} */
                        var date = (birthday.getDate()).toString();
                        if (date.length < 2) {
                            date = '0' + date.toString();
                        }
                        customerObj.setValue("BirthdayDate", date);
                    }
                    else {
                        customerObj.setValue("BirthdayYear", null);
                        customerObj.setValue("BirthdayMonth", null);
                        customerObj.setValue("BirthdayDate", null);
                    }
                    customerObj.setValue("AgeRange", _this.customerDetail.AgeRange);
                    customerObj.setValue('ClientID', _this.customerDetail.ClientID);
                    customerObj.setValue("LastName", _this.customerDetail.LastName);
                    customerObj.setValue("FirstName", _this.customerDetail.FirstName);
                    customerObj.setValue("Occupation", _this.customerDetail.Occupation);
                    customerObj.setValue("Company", _this.customerDetail.Company);
                    customerObj.setValue("Gender", _this.customerDetail.Gender);
                    customerObj.setValue("Income", _this.customerDetail.Income);
                    customerObj.setValue("Source", _this.customerDetail.Source);
                    customerObj.setValue("Marriage", _this.customerDetail.Marriage);
                    customerObj.setValue("Children", _this.customerDetail.Children);
                    customerObj.setValue("Familiarity", _this.customerDetail.Familiarity);
                    customerObj.setValue("ContactFrequancy", _this.customerDetail.ContactFrequancy);
                    customerObj.setValue("Possibility", _this.customerDetail.Possibility);
                    customerObj.setValue("IsFollow", _this.customerDetail.IsFollow);
                    customerExtObj.setValue('ClientID', _this.customerDetail.ClientID);
                    // customerExtObj.setValue("RecentStatus", this.customerDetail.RecentStatus);
                    // customerExtObj.setValue("MANPA", this.customerDetail.MANPA);
                    console.log("save cusomer stringify:", JSON.stringify(_this.customerDetail));
                    customerExtObj = TableUtils.fillTableColumn(customerExtObj, _this.customerDetail);
                    console.log("save cusomer extObj:", JSON.stringify(customerExtObj));
                    //set customer default column & value
                    _this.customerUtils.setCustomerDefaultValue(customerObj);
                    _this.customerDetail.AgeRange = customerObj.getValue("AgeRange");
                    customerObj.setValue('Completeness', _this.customerDetail.Completeness);
                    console.debug('insertCustomer', customerObj);
                    // console.log('clientID:', customerObj.getValue('ClientID'));
                    if (customerObj.getValue('ClientID') == '') {
                        /** @type {?} */
                        var _clientID = uuid();
                        customerObj.setValue('ClientID', _clientID);
                        customerExtObj.setValue('ClientID', _clientID);
                        dao.transactionInsert(customerObj);
                        dao.transactionInsert(customerExtObj);
                    }
                    else {
                        /** @type {?} */
                        var _deletedClientID = customerObj.getValue('ClientID');
                        /** @type {?} */
                        var phoneInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                        /** @type {?} */
                        var phoneInsertExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                        /** @type {?} */
                        var emailInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        /** @type {?} */
                        var emailInsertExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                        /** @type {?} */
                        var addressInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                        /** @type {?} */
                        var addressInsertExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                        customerObj.addRestriction(new EqualRestriction('ClientID', [_deletedClientID]));
                        customerExtObj.addRestriction(new EqualRestriction('ClientID', [_deletedClientID]));
                        phoneInsertObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        phoneInsertExtObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        emailInsertObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        emailInsertExtObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        addressInsertObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        addressInsertExtObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        dao.transactionUpdate(customerObj);
                        dao.transactionUpdate(customerExtObj);
                        base_dao.transactionDelete(phoneInsertObj);
                        base_dao.transactionDelete(phoneInsertExtObj);
                        base_dao.transactionDelete(emailInsertObj);
                        base_dao.transactionDelete(emailInsertExtObj);
                        base_dao.transactionDelete(addressInsertObj);
                        base_dao.transactionDelete(addressInsertExtObj);
                    }
                    try {
                        //save phone data              
                        for (var _d = tslib_1.__values(_this.customerDetail.tel), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var phone = _e.value;
                            /** @type {?} */
                            var phoneInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                            /** @type {?} */
                            var phoneInsertExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                            if (phoneInsertObj && phone.Tel) {
                                if (phone.TelType == '')
                                    phone.TelType = 'TelHome';
                                /** @type {?} */
                                var clientID = uuid();
                                phoneInsertObj = ((/** @type {?} */ (phoneInsertObj)));
                                phoneInsertObj.setValue("ClientID", clientID);
                                phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                phoneInsertObj.setValue('TelType', phone.TelType);
                                phoneInsertObj.setValue('Tel', phone.Tel);
                                phoneInsertExtObj.setValue("ClientID", clientID);
                                phoneInsertExtObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                phoneInsertExtObj = TableUtils.fillTableColumn(phoneInsertExtObj, phone);
                                //insert
                                dao.transactionInsert(phoneInsertObj);
                                dao.transactionInsert(phoneInsertExtObj);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    try {
                        //save email data
                        for (var _f = tslib_1.__values(_this.customerDetail.email), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var email = _g.value;
                            /** @type {?} */
                            var emailInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                            /** @type {?} */
                            var emailInsertExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                            if (emailInsertObj && email.Email) {
                                if (email.EmailType == '')
                                    email.EmailType = 'MailHome';
                                /** @type {?} */
                                var clientID = uuid();
                                emailInsertObj = ((/** @type {?} */ (emailInsertObj)));
                                emailInsertObj.setValue("ClientID", clientID);
                                emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                emailInsertObj.setValue('EmailType', email.EmailType);
                                emailInsertObj.setValue('Email', email.Email);
                                emailInsertExtObj.setValue("ClientID", clientID);
                                emailInsertExtObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                emailInsertExtObj = TableUtils.fillTableColumn(emailInsertExtObj, email);
                                //insert
                                dao.transactionInsert(emailInsertObj);
                                dao.transactionInsert(emailInsertExtObj);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    try {
                        //save address data
                        for (var _h = tslib_1.__values(_this.customerDetail.address), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var address = _j.value;
                            /** @type {?} */
                            var addressInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                            /** @type {?} */
                            var addressInsertExtObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                            if (addressInsertObj) {
                                if (!_this._judgeIsAddressEmpty(address)) {
                                    // if (address.AddressType == '') address.AddressType = 'AddressTypeHome';
                                    /** @type {?} */
                                    var clientID = uuid();
                                    addressInsertObj.setValue("ClientID", clientID);
                                    addressInsertObj = ((/** @type {?} */ (addressInsertObj)));
                                    addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    addressInsertObj.setValue('AddressType', address.AddressType);
                                    addressInsertObj.setValue('Country', address.Country);
                                    addressInsertObj.setValue('City', address.City);
                                    addressInsertObj.setValue('Area', address.Area);
                                    addressInsertObj.setValue('Zipcode', address.Zipcode);
                                    addressInsertObj.setValue('Address', address.Address);
                                    addressInsertExtObj.setValue("ClientID", clientID);
                                    addressInsertExtObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    addressInsertExtObj = TableUtils.fillTableColumn(addressInsertExtObj, address);
                                    //insert
                                    dao.transactionInsert(addressInsertObj);
                                    dao.transactionInsert(addressInsertExtObj);
                                }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    dao.runTransaction().subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        // let header = resp['Header'];
                        // if (!header.status) {
                        //     returnObj['status'] = false;
                        //     returnObj['msg'] = header.msg;
                        // }
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    /**
     * @private
     * @param {?} customerObj
     * @return {?}
     */
    CustomerSaveDetailAPI.prototype._judgeIsAddressEmpty = /**
     * @private
     * @param {?} customerObj
     * @return {?}
     */
    function (customerObj) {
        /** @type {?} */
        var requiredCol = ['Country', 'City', 'Area', 'Zipcode', 'Address'];
        return requiredCol.reduce((/**
         * @param {?} total
         * @param {?} each
         * @return {?}
         */
        function (total, each) { return total && customerObj[each] == ''; }), true);
    };
    return CustomerSaveDetailAPI;
}());
export { CustomerSaveDetailAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSaveDetailAPI.prototype.Data;
    /**
     * @type {?}
     * @private
     */
    CustomerSaveDetailAPI.prototype.daoFactory;
    /**
     * @type {?}
     * @private
     */
    CustomerSaveDetailAPI.prototype.customerUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTYXZlRGV0YWlsQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvYXBpL0N1c3RvbWVyU2F2ZURldGFpbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBMkMsZUFBZSxFQUFjLGdCQUFnQixFQUFjLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xKLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEM7SUFLSSwrQkFBb0IsVUFBc0IsRUFBVSxhQUE0QjtRQUE1RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGeEUsU0FBSSxHQUFHLElBQUksQ0FBQztJQUlwQixDQUFDOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxNQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSxpREFBYzs7OztRQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNJLE9BQU8sb0JBQW9CLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNJLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUFBLGlCQXdNQztRQXZNRyxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixLQUFLO1FBQ0wsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTs7O2dCQUMxQixHQUFHOztnQkFDSCxRQUFRLEdBQUcsS0FBSSxD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QkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3ZCO2FBRUo7aUJBQ0k7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFHTyxvREFBb0I7Ozs7O0lBQTVCLFVBQTZCLFdBQWdCOztZQUNyQyxXQUFXLEdBQWtCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztRQUNsRixPQUFPLFdBQVcsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsS0FBSyxFQUFFLElBQUksSUFBSyxPQUFBLEtBQUssSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFoQyxDQUFnQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUF4T0QsSUF3T0M7Ozs7Ozs7SUFyT0cscUNBQW9COzs7OztJQUVSLDJDQUE4Qjs7Ozs7SUFBRSw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgU1FMaXRlVGFibGUsIENsaWVudEN1c3RvbURhbywgSVNRTGl0ZUFQSSwgRXF1YWxSZXN0cmljdGlvbiwgU1FMQ29tbWFuZCwgVGFibGVVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21lclV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2F2ZURldGFpbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuXG4gICAgcHJpdmF0ZSBEYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBjdXN0b21lclV0aWxzOiBDdXN0b21lclV0aWxzKSB7XG5cbiAgICB9XG5cbiAgICBzZXREZXRhaWwoZGV0YWlsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5EYXRhID0gZGV0YWlsO1xuICAgIH1cblxuICAgIGdldCBjdXN0b21lckRldGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YTtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnc2F2ZUN1c3RvbWVyRGV0YWlsJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svc2F2ZVN1Y2Nlc3MuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvLyBsZXQgcmV0dXJuT2JqID0ge1xuICAgICAgICAvLyAgICAgXCJzdGF0dXNcIjogdHJ1ZSxcbiAgICAgICAgLy8gICAgIFwibXNnXCI6ICcnXG4gICAgICAgIC8vIH07XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW87XG4gICAgICAgICAgICBsZXQgYmFzZV9kYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGJhc2VfZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oYmFzZV9kYW8pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFzZV9kYW86XCIsIGJhc2VfZGFvKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhbzpcIiwgZGFvKTtcbiAgICAgICAgICAgICAgICAvL3NhdmUgY3VzdG9tZXIgZGF0YVxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lclwiKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJFeHRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lck9iaiAmJiBjdXN0b21lckV4dE9iaikge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiaXJ0aGRheSA9IHRoaXMuY3VzdG9tZXJEZXRhaWwuQmlydGhkYXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheSAhPSBudWxsICYmIGJpcnRoZGF5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheVllYXJcIiwgYmlydGhkYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb250aCA9IChiaXJ0aGRheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb250aC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSAnMCcgKyBtb250aC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheU1vbnRoXCIsIG1vbnRoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSAoYmlydGhkYXkuZ2V0RGF0ZSgpKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGUubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSAnMCcgKyBkYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5RGF0ZVwiLCBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlZZWFyXCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheU1vbnRoXCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheURhdGVcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJBZ2VSYW5nZVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkFnZVJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgdGhpcy5jdXN0b21lckRldGFpbC5DbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTGFzdE5hbWVcIiwgdGhpcy5jdXN0b21lckRldGFpbC5MYXN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiRmlyc3ROYW1lXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuRmlyc3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJPY2N1cGF0aW9uXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuT2NjdXBhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ29tcGFueVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkNvbXBhbnkpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkdlbmRlclwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkdlbmRlcik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSW5jb21lXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuSW5jb21lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJTb3VyY2VcIiwgdGhpcy5jdXN0b21lckRldGFpbC5Tb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIk1hcnJpYWdlXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuTWFycmlhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkNoaWxkcmVuXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuQ2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkZhbWlsaWFyaXR5XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuRmFtaWxpYXJpdHkpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkNvbnRhY3RGcmVxdWFuY3lcIiwgdGhpcy5jdXN0b21lckRldGFpbC5Db250YWN0RnJlcXVhbmN5KTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJQb3NzaWJpbGl0eVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLlBvc3NpYmlsaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJJc0ZvbGxvd1wiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLklzRm9sbG93KTtcblxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckV4dE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tZXJFeHRPYmouc2V0VmFsdWUoXCJSZWNlbnRTdGF0dXNcIiwgdGhpcy5jdXN0b21lckRldGFpbC5SZWNlbnRTdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b21lckV4dE9iai5zZXRWYWx1ZShcIk1BTlBBXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuTUFOUEEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUgY3Vzb21lciBzdHJpbmdpZnk6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VzdG9tZXJEZXRhaWwpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFeHRPYmogPSBUYWJsZVV0aWxzLmZpbGxUYWJsZUNvbHVtbihjdXN0b21lckV4dE9iaiwgdGhpcy5jdXN0b21lckRldGFpbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSBjdXNvbWVyIGV4dE9iajpcIiwgSlNPTi5zdHJpbmdpZnkoY3VzdG9tZXJFeHRPYmopKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NldCBjdXN0b21lciBkZWZhdWx0IGNvbHVtbiAmIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDdXN0b21lckRlZmF1bHRWYWx1ZShjdXN0b21lck9iaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwuQWdlUmFuZ2UgPSBjdXN0b21lck9iai5nZXRWYWx1ZShcIkFnZVJhbmdlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKCdDb21wbGV0ZW5lc3MnLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkNvbXBsZXRlbmVzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnaW5zZXJ0Q3VzdG9tZXInLCBjdXN0b21lck9iaik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGllbnRJRDonLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9jbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIF9jbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckV4dE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBfY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGN1c3RvbWVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChjdXN0b21lckV4dE9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2RlbGV0ZWRDbGllbnRJRCA9IGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwaG9uZUluc2VydEV4dE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsSW5zZXJ0RXh0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsX0V4dGVuc2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc0luc2VydEV4dE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFtfZGVsZXRlZENsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW19kZWxldGVkQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtfZGVsZXRlZENsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbX2RlbGV0ZWRDbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW19kZWxldGVkQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtfZGVsZXRlZENsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtfZGVsZXRlZENsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtfZGVsZXRlZENsaWVudElEXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGN1c3RvbWVyRXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHBob25lSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfZGFvLnRyYW5zYWN0aW9uRGVsZXRlKHBob25lSW5zZXJ0RXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGVtYWlsSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGVtYWlsSW5zZXJ0RXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfZGFvLnRyYW5zYWN0aW9uRGVsZXRlKGFkZHJlc3NJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9kYW8udHJhbnNhY3Rpb25EZWxldGUoYWRkcmVzc0luc2VydEV4dE9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgcGhvbmUgZGF0YSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBob25lIG9mIHRoaXMuY3VzdG9tZXJEZXRhaWwudGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGhvbmVJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lSW5zZXJ0RXh0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbF9FeHRlbnNpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmVJbnNlcnRPYmogJiYgcGhvbmUuVGVsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmUuVGVsVHlwZSA9PSAnJykgcGhvbmUuVGVsVHlwZSA9ICdUZWxIb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPnBob25lSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnVGVsVHlwZScsIHBob25lLlRlbFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdUZWwnLCBwaG9uZS5UZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRFeHRPYmouc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRFeHRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRFeHRPYmogPSBUYWJsZVV0aWxzLmZpbGxUYWJsZUNvbHVtbihwaG9uZUluc2VydEV4dE9iaiwgcGhvbmUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQocGhvbmVJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChwaG9uZUluc2VydEV4dE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgZW1haWwgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBlbWFpbCBvZiB0aGlzLmN1c3RvbWVyRGV0YWlsLmVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxJbnNlcnRFeHRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtYWlsSW5zZXJ0T2JqICYmIGVtYWlsLkVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtYWlsLkVtYWlsVHlwZSA9PSAnJykgZW1haWwuRW1haWxUeXBlID0gJ01haWxIb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPmVtYWlsSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRW1haWxUeXBlJywgZW1haWwuRW1haWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRW1haWwnLCBlbWFpbC5FbWFpbCk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0RXh0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0RXh0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0RXh0T2JqID0gVGFibGVVdGlscy5maWxsVGFibGVDb2x1bW4oZW1haWxJbnNlcnRFeHRPYmosIGVtYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChlbWFpbEluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGVtYWlsSW5zZXJ0RXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBhZGRyZXNzIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYWRkcmVzcyBvZiB0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc0luc2VydEV4dE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzSW5zZXJ0T2JqKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2p1ZGdlSXNBZGRyZXNzRW1wdHkoYWRkcmVzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGFkZHJlc3MuQWRkcmVzc1R5cGUgPT0gJycpIGFkZHJlc3MuQWRkcmVzc1R5cGUgPSAnQWRkcmVzc1R5cGVIb21lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPmFkZHJlc3NJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdBZGRyZXNzVHlwZScsIGFkZHJlc3MuQWRkcmVzc1R5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdDb3VudHJ5JywgYWRkcmVzcy5Db3VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQ2l0eScsIGFkZHJlc3MuQ2l0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0FyZWEnLCBhZGRyZXNzLkFyZWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdaaXBjb2RlJywgYWRkcmVzcy5aaXBjb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQWRkcmVzcycsIGFkZHJlc3MuQWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydEV4dE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydEV4dE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydEV4dE9iaiA9IFRhYmxlVXRpbHMuZmlsbFRhYmxlQ29sdW1uKGFkZHJlc3NJbnNlcnRFeHRPYmosIGFkZHJlc3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChhZGRyZXNzSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGFkZHJlc3NJbnNlcnRFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYW8ucnVuVHJhbnNhY3Rpb24oKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBoZWFkZXIgPSByZXNwWydIZWFkZXInXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICghaGVhZGVyLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybk9ialsnc3RhdHVzJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm5PYmpbJ21zZyddID0gaGVhZGVyLm1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIF9qdWRnZUlzQWRkcmVzc0VtcHR5KGN1c3RvbWVyT2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlcXVpcmVkQ29sOiBBcnJheTxzdHJpbmc+ID0gWydDb3VudHJ5JywgJ0NpdHknLCAnQXJlYScsICdaaXBjb2RlJywgJ0FkZHJlc3MnXTtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmVkQ29sLnJlZHVjZSgodG90YWwsIGVhY2gpID0+IHRvdGFsICYmIGN1c3RvbWVyT2JqW2VhY2hdID09ICcnLCB0cnVlKTtcbiAgICB9XG59XG4iXX0=