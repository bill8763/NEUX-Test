/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ClientCustomDao, EqualRestriction, SQLCommand } from "@allianzSND/core";
import { Observable } from 'rxjs';
var CustomerSaveDetailAPI = /** @class */ (function () {
    function CustomerSaveDetailAPI(daoFactory, customerUtils) {
        this.daoFactory = daoFactory;
        this.customerUtils = customerUtils;
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
        this.customerDetail = detail;
    };
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
            var dao = _this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                if (customerObj) {
                    dao = new ClientCustomDao(dao);
                    customerObj = ((/** @type {?} */ (customerObj)));
                    /** @type {?} */
                    var birthday = _this.customerDetail.birthday;
                    if (birthday != null && birthday != undefined) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear());
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
                        customerObj.setValue("BirthDayTimeStamp", (new Date(2000, birthday.getMonth(), birthday.getDate())).getTime());
                    }
                    customerObj.setValue('ClientID', _this.customerDetail.clientID);
                    customerObj.setValue("LastName", _this.customerDetail.lastName);
                    customerObj.setValue("FirstName", _this.customerDetail.firstName);
                    customerObj.setValue("Occupation", _this.customerDetail.occupation);
                    customerObj.setValue("Company", _this.customerDetail.company);
                    customerObj.setValue("AgeRange", _this.customerDetail.ageRange);
                    customerObj.setValue("Gender", _this.customerDetail.gender);
                    customerObj.setValue("Income", _this.customerDetail.income);
                    customerObj.setValue("Source", _this.customerDetail.source);
                    customerObj.setValue("Marriage", _this.customerDetail.marriage);
                    customerObj.setValue("Children", _this.customerDetail.children);
                    customerObj.setValue("Familiarity", _this.customerDetail.familiarity);
                    customerObj.setValue("RecentStatus", _this.customerDetail.recentStatus);
                    customerObj.setValue("MANPA", _this.customerDetail.manpa);
                    customerObj.setValue("ContactFrequancy", _this.customerDetail.contactFrequancy);
                    customerObj.setValue("Possibility", _this.customerDetail.possibility);
                    customerObj.setValue("IsFollow", _this.customerDetail.isFollow ? 'Y' : 'N');
                    //set customer default column & value
                    _this.customerUtils.setCustomerDefaultValue(customerObj);
                    //count Completeness
                    _this.customerUtils.countCompleteness(customerObj, _this.customerDetail.tels.length, _this.customerDetail.emails.length, _this.customerDetail.addresses.length);
                    console.debug('insertCustomer', customerObj);
                    // console.log('clientID:', customerObj.getValue('ClientID'));
                    if (customerObj.getValue('ClientID') == '') {
                        dao.transactionInsert(customerObj);
                    }
                    else {
                        customerObj.addRestriction(new EqualRestriction('ClientID', [customerObj.getValue('ClientID')]));
                        dao.transactionUpdate(customerObj);
                        //delete relation data
                        dao.transactionSqlCommand(new SQLCommand('delete from TW_LH_SD_Customer_Tel where CustomerClientID = ? ', [customerObj.getValue('ClientID')]));
                        dao.transactionSqlCommand(new SQLCommand('delete from TW_LH_SD_Customer_Email where CustomerClientID = ? ', [customerObj.getValue('ClientID')]));
                        dao.transactionSqlCommand(new SQLCommand('delete from TW_LH_SD_Customer_Address where CustomerClientID = ? ', [customerObj.getValue('ClientID')]));
                    }
                    try {
                        //save phone data              
                        for (var _d = tslib_1.__values(_this.customerDetail.tels), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var phone = _e.value;
                            /** @type {?} */
                            var phoneInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                            if (phoneInsertObj) {
                                if (phone.telType == '')
                                    phone.telType = 'TelHome';
                                phoneInsertObj = ((/** @type {?} */ (phoneInsertObj)));
                                phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                phoneInsertObj.setValue('TelType', phone.telType);
                                phoneInsertObj.setValue('Tel', phone.tel);
                                //insert
                                dao.transactionInsert(phoneInsertObj);
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
                        for (var _f = tslib_1.__values(_this.customerDetail.emails), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var email = _g.value;
                            /** @type {?} */
                            var emailInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                            if (emailInsertObj) {
                                if (email.emailType == '')
                                    email.emailType = 'MailHome';
                                emailInsertObj = ((/** @type {?} */ (emailInsertObj)));
                                emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                emailInsertObj.setValue('EmailType', email.emailType);
                                emailInsertObj.setValue('Email', email.email);
                                //insert
                                dao.transactionInsert(emailInsertObj);
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
                        for (var _h = tslib_1.__values(_this.customerDetail.addresses), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var address = _j.value;
                            /** @type {?} */
                            var addressInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                            if (addressInsertObj) {
                                if (address.addressType == '')
                                    address.addressType = 'AddressTypeHome';
                                addressInsertObj = ((/** @type {?} */ (addressInsertObj)));
                                addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                addressInsertObj.setValue('AddressType', address.addressType);
                                addressInsertObj.setValue('Country', address.country);
                                addressInsertObj.setValue('City', address.city);
                                addressInsertObj.setValue('Area', address.area);
                                addressInsertObj.setValue('Zipcode', address.zipcode);
                                addressInsertObj.setValue('Address', address.address);
                                //insert
                                dao.transactionInsert(addressInsertObj);
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
    return CustomerSaveDetailAPI;
}());
export { CustomerSaveDetailAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSaveDetailAPI.prototype.customerDetail;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTYXZlRGV0YWlsQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvYXBpL0N1c3RvbWVyU2F2ZURldGFpbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBMkMsZUFBZSxFQUFjLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLbEM7SUFJSSwrQkFBb0IsVUFBc0IsRUFBUyxhQUE2QjtRQUE1RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWdCO0lBRWhGLENBQUM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLE1BQXNCO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLG9CQUFvQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFBQSxpQkF1SkM7UUF0Skcsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsS0FBSztRQUNMLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7OztnQkFDMUIsR0FBRyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTs7O29CQUdkLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEUsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUUvQixXQUFXLEdBQUcsQ0FBQyxtQkFBYSxXQUFXLEVBQUEsQ0FBQyxDQUFDOzt3QkFFckMsUUFBUSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUTtvQkFDM0MsSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7d0JBQzNDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs0QkFDekQsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTt3QkFDaEQsSUFBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDakIsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ2xDO3dCQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs0QkFFekMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUMxQyxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNoQixJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDaEM7d0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBRTNDLFdBQVcsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztxQkFFbEg7b0JBRUQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDakUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDckUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMs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QUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQTVLRCxJQTRLQzs7Ozs7OztJQTFLRywrQ0FBdUM7Ozs7O0lBRTNCLDJDQUE4Qjs7Ozs7SUFBQyw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJLCBJTW9ja0FQSSwgRGFvRmFjdG9yeSwgU1FMaXRlVGFibGUsIENsaWVudEN1c3RvbURhbywgSVNRTGl0ZUFQSSwgRXF1YWxSZXN0cmljdGlvbiwgU1FMQ29tbWFuZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbCB9IGZyb20gXCIuLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyRGV0YWlsXCI7XG5pbXBvcnQgeyBDdXN0b21lclV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2F2ZURldGFpbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHByaXZhdGUgY3VzdG9tZXJEZXRhaWw6IEN1c3RvbWVyRGV0YWlsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5LHByaXZhdGUgY3VzdG9tZXJVdGlscyA6IEN1c3RvbWVyVXRpbHMpIHtcblxuICAgIH1cblxuICAgIHNldERldGFpbChkZXRhaWw6IEN1c3RvbWVyRGV0YWlsKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwgPSBkZXRhaWw7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3NhdmVDdXN0b21lckRldGFpbCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLy8gbGV0IHJldHVybk9iaiA9IHtcbiAgICAgICAgLy8gICAgIFwic3RhdHVzXCI6IHRydWUsXG4gICAgICAgIC8vICAgICBcIm1zZ1wiOiAnJ1xuICAgICAgICAvLyB9O1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGlmIChkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAvL3NhdmUgY3VzdG9tZXIgZGF0YVxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lclwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lck9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJpcnRoZGF5ID0gdGhpcy5jdXN0b21lckRldGFpbC5iaXJ0aGRheTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpcnRoZGF5ICE9IG51bGwgJiYgYmlydGhkYXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5WWVhclwiLCBiaXJ0aGRheS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb250aCA9IChiaXJ0aGRheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1vbnRoLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5TW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IChiaXJ0aGRheS5nZXREYXRlKCkpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gJzAnICsgZGF0ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheURhdGVcIiwgZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aERheVRpbWVTdGFtcFwiLCAobmV3IERhdGUoMjAwMCwgYmlydGhkYXkuZ2V0TW9udGgoKSwgYmlydGhkYXkuZ2V0RGF0ZSgpKSkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgdGhpcy5jdXN0b21lckRldGFpbC5jbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTGFzdE5hbWVcIiwgdGhpcy5jdXN0b21lckRldGFpbC5sYXN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiRmlyc3ROYW1lXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuZmlyc3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJPY2N1cGF0aW9uXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwub2NjdXBhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ29tcGFueVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLmNvbXBhbnkpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkFnZVJhbmdlXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuYWdlUmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkdlbmRlclwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLmdlbmRlcik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSW5jb21lXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuaW5jb21lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJTb3VyY2VcIiwgdGhpcy5jdXN0b21lckRldGFpbC5zb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIk1hcnJpYWdlXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwubWFycmlhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkNoaWxkcmVuXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkZhbWlsaWFyaXR5XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuZmFtaWxpYXJpdHkpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIlJlY2VudFN0YXR1c1wiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLnJlY2VudFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTUFOUEFcIiwgdGhpcy5jdXN0b21lckRldGFpbC5tYW5wYSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ29udGFjdEZyZXF1YW5jeVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLmNvbnRhY3RGcmVxdWFuY3kpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIlBvc3NpYmlsaXR5XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwucG9zc2liaWxpdHkpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIklzRm9sbG93XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuaXNGb2xsb3cgPyAnWScgOiAnTicpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLy9zZXQgY3VzdG9tZXIgZGVmYXVsdCBjb2x1bW4gJiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q3VzdG9tZXJEZWZhdWx0VmFsdWUoY3VzdG9tZXJPYmopO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vY291bnQgQ29tcGxldGVuZXNzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJVdGlscy5jb3VudENvbXBsZXRlbmVzcyhjdXN0b21lck9iaix0aGlzLmN1c3RvbWVyRGV0YWlsLnRlbHMubGVuZ3RoLHRoaXMuY3VzdG9tZXJEZXRhaWwuZW1haWxzLmxlbmd0aCx0aGlzLmN1c3RvbWVyRGV0YWlsLmFkZHJlc3Nlcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2luc2VydEN1c3RvbWVyJywgY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xpZW50SUQ6JywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChjdXN0b21lck9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFtjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uVXBkYXRlKGN1c3RvbWVyT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kZWxldGUgcmVsYXRpb24gZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uU3FsQ29tbWFuZChuZXcgU1FMQ29tbWFuZCgnZGVsZXRlIGZyb20gVFdfTEhfU0RfQ3VzdG9tZXJfVGVsIHdoZXJlIEN1c3RvbWVyQ2xpZW50SUQgPSA/ICcsIFtjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblNxbENvbW1hbmQobmV3IFNRTENvbW1hbmQoJ2RlbGV0ZSBmcm9tIFRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsIHdoZXJlIEN1c3RvbWVyQ2xpZW50SUQgPSA/ICcsIFtjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblNxbENvbW1hbmQobmV3IFNRTENvbW1hbmQoJ2RlbGV0ZSBmcm9tIFRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3Mgd2hlcmUgQ3VzdG9tZXJDbGllbnRJRCA9ID8gJywgW2N1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIHBob25lIGRhdGEgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwaG9uZSBvZiB0aGlzLmN1c3RvbWVyRGV0YWlsLnRlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwaG9uZUluc2VydE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmVJbnNlcnRPYmopIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZS50ZWxUeXBlID09ICcnKSBwaG9uZS50ZWxUeXBlID0gJ1RlbEhvbWUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPnBob25lSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdUZWxUeXBlJywgcGhvbmUudGVsVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ1RlbCcsIHBob25lLnRlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChwaG9uZUluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgZW1haWwgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBlbWFpbCBvZiB0aGlzLmN1c3RvbWVyRGV0YWlsLmVtYWlscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtYWlsSW5zZXJ0T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtYWlsLmVtYWlsVHlwZSA9PSAnJykgZW1haWwuZW1haWxUeXBlID0gJ01haWxIb21lJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqID0gKDxTUUxpdGVUYWJsZT5lbWFpbEluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouc2V0VmFsdWUoJ0VtYWlsVHlwZScsIGVtYWlsLmVtYWlsVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouc2V0VmFsdWUoJ0VtYWlsJywgZW1haWwuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoZW1haWxJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGFkZHJlc3MgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhZGRyZXNzIG9mIHRoaXMuY3VzdG9tZXJEZXRhaWwuYWRkcmVzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc0luc2VydE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NJbnNlcnRPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcy5hZGRyZXNzVHlwZSA9PSAnJykgYWRkcmVzcy5hZGRyZXNzVHlwZSA9ICdBZGRyZXNzVHlwZUhvbWUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+YWRkcmVzc0luc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdBZGRyZXNzVHlwZScsIGFkZHJlc3MuYWRkcmVzc1R5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0NvdW50cnknLGFkZHJlc3MuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQ2l0eScsYWRkcmVzcy5jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdBcmVhJyxhZGRyZXNzLmFyZWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ1ppcGNvZGUnLCBhZGRyZXNzLnppcGNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0FkZHJlc3MnLCBhZGRyZXNzLmFkZHJlc3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoYWRkcmVzc0luc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGFvLnJ1blRyYW5zYWN0aW9uKCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgaGVhZGVyID0gcmVzcFsnSGVhZGVyJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIWhlYWRlci5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm5PYmpbJ3N0YXR1cyddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuT2JqWydtc2cnXSA9IGhlYWRlci5tc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==