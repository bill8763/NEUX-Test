/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ClientCustomDao } from "@allianzSND/core";
import { Observable } from "rxjs";
import { v4 as uuid } from 'uuid';
var ImportContactAPI = /** @class */ (function () {
    function ImportContactAPI(daoFactory, customerUtils) {
        this.daoFactory = daoFactory;
        this.customerUtils = customerUtils;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    ImportContactAPI.prototype.setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.items = items;
    };
    /**
     * @return {?}
     */
    ImportContactAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'importContact';
    };
    /**
     * @return {?}
     */
    ImportContactAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/saveSuccess.json';
    };
    /**
     * @return {?}
     */
    ImportContactAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            var e_1, _a, e_2, _b, e_3, _c;
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                dao = new ClientCustomDao(dao);
                try {
                    for (var _d = tslib_1.__values(_this.items), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var item = _e.value;
                        /** @type {?} */
                        var customerObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                        /** @type {?} */
                        var customerExt = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Extension");
                        /** @type {?} */
                        var ClientID = uuid();
                        customerObj.setValue("ClientID", ClientID);
                        customerObj.setValue("LastName", item.LastName);
                        customerObj.setValue("FirstName", item.FirstName);
                        customerObj.setValue("IsFollow", "N");
                        customerExt.setValue("ClientID", ClientID);
                        /** @type {?} */
                        var birthday = item.Birthday;
                        if (birthday != null) {
                            customerObj.setValue("BirthdayYear", birthday.getFullYear);
                            customerObj.setValue("BirthdayMonth", birthday.getMonth);
                            customerObj.setValue("BirthdayDate", birthday.getDate);
                        }
                        //set customer default column & value
                        _this.customerUtils.setCustomerDefaultValue(customerObj);
                        //count Completeness
                        /** @type {?} */
                        var completeness = _this.customerUtils.countCompleteness(item);
                        customerObj.setValue('Completeness', completeness);
                        //insert customer data
                        dao.transactionInsert(customerObj);
                        dao.transactionInsert(customerExt);
                        try {
                            //save phone data
                            for (var _f = tslib_1.__values(item.tel), _g = _f.next(); !_g.done; _g = _f.next()) {
                                var phone = _g.value;
                                /** @type {?} */
                                var telType = 'TelHome';
                                if (phone.type == 'work') {
                                    telType = 'TelWork';
                                }
                                else if (phone.type == 'mobile') {
                                    telType = 'TelMobile';
                                }
                                /** @type {?} */
                                var phoneInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                                /** @type {?} */
                                var phoneInsertObj_Ext = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                                if (phoneInsertObj) {
                                    /** @type {?} */
                                    var clientID = uuid();
                                    phoneInsertObj = ((/** @type {?} */ (phoneInsertObj)));
                                    phoneInsertObj.setValue('ClientID', clientID);
                                    phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    phoneInsertObj.setValue('TelType', telType);
                                    phoneInsertObj.setValue('Tel', phone.number);
                                    phoneInsertObj.setValue('DataSource', 'APP');
                                    phoneInsertObj_Ext.setValue('ClientID', clientID);
                                    phoneInsertObj_Ext.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    //insert
                                    dao.transactionInsert(phoneInsertObj);
                                    dao.transactionInsert(phoneInsertObj_Ext);
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
                        //save email data
                        /** @type {?} */
                        var maxEmailCount = 3;
                        /** @type {?} */
                        var importEmailCount = maxEmailCount;
                        if (item.email.length < 3)
                            importEmailCount = item.email.length;
                        for (var i = 0; i < importEmailCount; i++) {
                            /** @type {?} */
                            var email = item.email[i];
                            /** @type {?} */
                            var emailInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                            /** @type {?} */
                            var emailInsertObj_Ext = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                            if (emailInsertObj) {
                                /** @type {?} */
                                var clientID = uuid();
                                emailInsertObj = ((/** @type {?} */ (emailInsertObj)));
                                emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                emailInsertObj.setValue('EmailType', 'MailHome');
                                emailInsertObj.setValue('Email', email);
                                emailInsertObj.setValue('ClientID', clientID);
                                emailInsertObj.setValue('DataSource', 'APP');
                                emailInsertObj_Ext.setValue('ClientID', clientID);
                                emailInsertObj_Ext.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                //insert
                                dao.transactionInsert(emailInsertObj);
                                dao.transactionInsert(emailInsertObj_Ext);
                            }
                        }
                        try {
                            //save address data
                            for (var _h = tslib_1.__values(item.address), _j = _h.next(); !_j.done; _j = _h.next()) {
                                var address = _j.value;
                                /** @type {?} */
                                var addressType = 'AddressTypeHome';
                                if (address.type == 'work') {
                                    addressType = 'AddressTypeWork';
                                }
                                /** @type {?} */
                                var addressInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                                /** @type {?} */
                                var addressInsertObj_Ext = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                                if (addressInsertObj) {
                                    /** @type {?} */
                                    var clientID = uuid();
                                    addressInsertObj = ((/** @type {?} */ (addressInsertObj)));
                                    addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    addressInsertObj.setValue('ClientID', clientID);
                                    addressInsertObj.setValue('AddressType', addressType);
                                    addressInsertObj.setValue('Zipcode', address.code);
                                    addressInsertObj.setValue('Address', address.address);
                                    addressInsertObj.setValue('DataSource', 'APP');
                                    addressInsertObj_Ext.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    addressInsertObj_Ext.setValue('ClientID', clientID);
                                    //insert
                                    dao.transactionInsert(addressInsertObj);
                                    dao.transactionInsert(addressInsertObj_Ext);
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
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                dao.runTransaction().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    return ImportContactAPI;
}());
export { ImportContactAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImportContactAPI.prototype.items;
    /**
     * @type {?}
     * @private
     */
    ImportContactAPI.prototype.daoFactory;
    /**
     * @type {?}
     * @private
     */
    ImportContactAPI.prototype.customerUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wb3J0Q29udGFjdEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2FwaS9JbXBvcnRDb250YWN0QVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF3RCxlQUFlLEVBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUNySCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBT0ksMEJBQW9CLFVBQXNCLEVBQVUsYUFBNEI7UUFBNUQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhGLENBQUM7Ozs7O0lBTk0sbUNBQVE7Ozs7SUFBZixVQUFnQixLQUF5QjtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBTUQscUNBQVU7OztJQUFWO1FBQ0ksT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNJLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELHFDQUFVOzs7SUFBVjtRQUFBLGlCQW1KQztRQWhKRyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROzs7Z0JBQzFCLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRWxCLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7b0JBRS9CLEtBQWlCLElBQUEsS0FBQSxpQkFBQSxLQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO3dCQUF4QixJQUFJLElBQUksV0FBQTs7NEJBRUws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a0FQSSwgRGFvRmFjdG9yeSwgU1FMaXRlVGFibGUsIENsaWVudEN1c3RvbURhbywgSVNRTGl0ZUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvY3VzdG9tZXItdXRpbHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuXG5leHBvcnQgY2xhc3MgSW1wb3J0Q29udGFjdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxDb250YWN0SXRlbT47XG5cbiAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXM6IEFycmF5PENvbnRhY3RJdGVtPikge1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5LCBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHMpIHtcblxuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdpbXBvcnRDb250YWN0JztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svc2F2ZVN1Y2Nlc3MuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBpZiAoZGFvICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJFeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRXh0ZW5zaW9uXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBDbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBDbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTGFzdE5hbWVcIiwgaXRlbS5MYXN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiRmlyc3ROYW1lXCIsIGl0ZW0uRmlyc3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJJc0ZvbGxvd1wiLCBcIk5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFeHQuc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBDbGllbnRJRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJpcnRoZGF5ID0gaXRlbS5CaXJ0aGRheTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpcnRoZGF5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlZZWFyXCIsIGJpcnRoZGF5LmdldEZ1bGxZZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlNb250aFwiLCBiaXJ0aGRheS5nZXRNb250aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5RGF0ZVwiLCBiaXJ0aGRheS5nZXREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IGN1c3RvbWVyIGRlZmF1bHQgY29sdW1uICYgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclV0aWxzLnNldEN1c3RvbWVyRGVmYXVsdFZhbHVlKGN1c3RvbWVyT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2NvdW50IENvbXBsZXRlbmVzc1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcGxldGVuZXNzID0gdGhpcy5jdXN0b21lclV0aWxzLmNvdW50Q29tcGxldGVuZXNzKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZSgnQ29tcGxldGVuZXNzJywgY29tcGxldGVuZXNzKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2luc2VydCBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChjdXN0b21lck9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChjdXN0b21lckV4dCk7XG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBwaG9uZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBob25lIG9mIGl0ZW0udGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsVHlwZSA9ICdUZWxIb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZS50eXBlID09ICd3b3JrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbFR5cGUgPSAnVGVsV29yayc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaG9uZS50eXBlID09ICdtb2JpbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsVHlwZSA9ICdUZWxNb2JpbGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGhvbmVJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lSW5zZXJ0T2JqX0V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBob25lSW5zZXJ0T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPnBob25lSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnVGVsVHlwZScsIHRlbFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdUZWwnLCBwaG9uZS5udW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdEYXRhU291cmNlJywgJ0FQUCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmpfRXh0LnNldFZhbHVlKCdDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9ial9FeHQuc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChwaG9uZUluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHBob25lSW5zZXJ0T2JqX0V4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgZW1haWwgZGF0YVxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4RW1haWxDb3VudCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbXBvcnRFbWFpbENvdW50ID0gbWF4RW1haWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZW1haWwubGVuZ3RoIDwgMykgaW1wb3J0RW1haWxDb3VudCA9IGl0ZW0uZW1haWwubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltcG9ydEVtYWlsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsID0gaXRlbS5lbWFpbFtpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsSW5zZXJ0T2JqX0V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9FbWFpbF9FeHRlbnNpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxJbnNlcnRPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+ZW1haWxJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdFbWFpbFR5cGUnLCAnTWFpbEhvbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRW1haWwnLCBlbWFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdEYXRhU291cmNlJywgJ0FQUCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmpfRXh0LnNldFZhbHVlKCdDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9ial9FeHQuc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChlbWFpbEluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGVtYWlsSW5zZXJ0T2JqX0V4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgYWRkcmVzcyBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFkZHJlc3Mgb2YgaXRlbS5hZGRyZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzVHlwZSA9ICdBZGRyZXNzVHlwZUhvbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3MudHlwZSA9PSAnd29yaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVHlwZSA9ICdBZGRyZXNzVHlwZVdvcmsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc0luc2VydE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NJbnNlcnRPYmpfRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NJbnNlcnRPYmopIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPmFkZHJlc3NJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBjbGllbnRJRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdBZGRyZXNzVHlwZScsIGFkZHJlc3NUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdaaXBjb2RlJywgYWRkcmVzcy5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdBZGRyZXNzJywgYWRkcmVzcy5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdEYXRhU291cmNlJywgJ0FQUCcpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqX0V4dC5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqX0V4dC5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoYWRkcmVzc0luc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGFkZHJlc3NJbnNlcnRPYmpfRXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYW8ucnVuVHJhbnNhY3Rpb24oKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxufSJdfQ==