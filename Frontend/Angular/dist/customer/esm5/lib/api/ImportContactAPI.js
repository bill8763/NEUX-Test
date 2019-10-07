/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ClientCustomDao } from "@allianzSND/core";
import { Observable } from "rxjs";
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
                        customerObj.setValue("LastName", item.lastname);
                        customerObj.setValue("FirstName", item.firstname);
                        customerObj.setValue("IsFollow", "N");
                        /** @type {?} */
                        var birthday = item.birthday;
                        if (birthday != null) {
                            customerObj.setValue("BirthdayYear", birthday.getFullYear);
                            customerObj.setValue("BirthdayMonth", birthday.getMonth);
                            customerObj.setValue("BirthdayDate", birthday.getDate);
                        }
                        //set customer default column & value
                        _this.customerUtils.setCustomerDefaultValue(customerObj);
                        //count Completeness
                        _this.customerUtils.countCompleteness(customerObj, item.phones.length, item.emails.length, item.address.length);
                        //insert customer data
                        dao.transactionInsert(customerObj);
                        try {
                            //save phone data
                            for (var _f = tslib_1.__values(item.phones), _g = _f.next(); !_g.done; _g = _f.next()) {
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
                                if (phoneInsertObj) {
                                    phoneInsertObj = ((/** @type {?} */ (phoneInsertObj)));
                                    phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    phoneInsertObj.setValue('TelType', telType);
                                    phoneInsertObj.setValue('Tel', phone.number);
                                    //insert
                                    dao.transactionInsert(phoneInsertObj);
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
                        if (item.emails.length < 3)
                            importEmailCount = item.emails.length;
                        for (var i = 0; i < importEmailCount; i++) {
                            /** @type {?} */
                            var email = item.emails[i];
                            /** @type {?} */
                            var emailInsertObj = _this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                            if (emailInsertObj) {
                                emailInsertObj = ((/** @type {?} */ (emailInsertObj)));
                                emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                emailInsertObj.setValue('EmailType', 'MailHome');
                                emailInsertObj.setValue('Email', email);
                                //insert
                                dao.transactionInsert(emailInsertObj);
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
                                if (addressInsertObj) {
                                    addressInsertObj = ((/** @type {?} */ (addressInsertObj)));
                                    addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                    addressInsertObj.setValue('AddressType', addressType);
                                    addressInsertObj.setValue('Zipcode', address.code);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wb3J0Q29udGFjdEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2FwaS9JbXBvcnRDb250YWN0QVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF3RCxlQUFlLEVBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUNySCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWxDO0lBT0ksMEJBQW9CLFVBQXNCLEVBQVUsYUFBNkI7UUFBN0QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUVqRixDQUFDOzs7OztJQU5NLG1DQUFROzs7O0lBQWYsVUFBZ0IsS0FBMEI7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQU1ELHFDQUFVOzs7SUFBVjtRQUNJLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFBQSxpQkFvSEM7UUFqSEcsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTs7O2dCQUMxQixHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUVsQixHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUUvQixLQUFnQixJQUFBLEtBQUEsaUJBQUEsS0FBSSxDQUFDLEtBQUssQ0FBQSxnQkFBQSw0QkFBRTt3QkFBeEIsSUFBSSxJQUFJLFdBQUE7OzRCQUVKLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFFdEUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxV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LEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFFaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FBQzthQUVOO2lCQUNJO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQXpJRCxJQXlJQzs7Ozs7OztJQXhJRyxpQ0FBbUM7Ozs7O0lBTXZCLHNDQUE4Qjs7Ozs7SUFBRSx5Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0SXRlbSwgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIFNRTGl0ZVRhYmxlLCBDbGllbnRDdXN0b21EYW8sIElTUUxpdGVBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDdXN0b21lclV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEltcG9ydENvbnRhY3RBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSxJU1FMaXRlQVBJIHtcbiAgICBwcml2YXRlIGl0ZW1zIDogQXJyYXk8Q29udGFjdEl0ZW0+O1xuICAgIFxuICAgIHB1YmxpYyBzZXRJdGVtcyhpdGVtcyA6IEFycmF5PENvbnRhY3RJdGVtPikge1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5LCBwcml2YXRlIGN1c3RvbWVyVXRpbHMgOiBDdXN0b21lclV0aWxzKSB7XG5cbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnaW1wb3J0Q29udGFjdCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBcblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGlmIChkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lclwiKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkxhc3ROYW1lXCIsIGl0ZW0ubGFzdG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkZpcnN0TmFtZVwiLCBpdGVtLmZpcnN0bmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSXNGb2xsb3dcIiwgXCJOXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiaXJ0aGRheSA9IGl0ZW0uYmlydGhkYXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5WWVhclwiLCBiaXJ0aGRheS5nZXRGdWxsWWVhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5TW9udGhcIiwgYmlydGhkYXkuZ2V0TW9udGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheURhdGVcIiwgYmlydGhkYXkuZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NldCBjdXN0b21lciBkZWZhdWx0IGNvbHVtbiAmIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDdXN0b21lckRlZmF1bHRWYWx1ZShjdXN0b21lck9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9jb3VudCBDb21wbGV0ZW5lc3NcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclV0aWxzLmNvdW50Q29tcGxldGVuZXNzKGN1c3RvbWVyT2JqLGl0ZW0ucGhvbmVzLmxlbmd0aCxpdGVtLmVtYWlscy5sZW5ndGgsaXRlbS5hZGRyZXNzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnQgY3VzdG9tZXIgZGF0YVxuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY3VzdG9tZXJPYmopO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBwaG9uZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgcGhvbmUgb2YgaXRlbS5waG9uZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxUeXBlID0gJ1RlbEhvbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGhvbmUudHlwZSA9PSAnd29yaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWxUeXBlID0gJ1RlbFdvcmsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihwaG9uZS50eXBlID09ICdtb2JpbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsVHlwZSA9ICdUZWxNb2JpbGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwaG9uZUluc2VydE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmVJbnNlcnRPYmopIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqID0gKDxTUUxpdGVUYWJsZT5waG9uZUluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnVGVsVHlwZScsIHRlbFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdUZWwnLCBwaG9uZS5udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQocGhvbmVJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGVtYWlsIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heEVtYWlsQ291bnQgPSAzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1wb3J0RW1haWxDb3VudCA9IG1heEVtYWlsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uZW1haWxzLmxlbmd0aCA8IDMpIGltcG9ydEVtYWlsQ291bnQgPSBpdGVtLmVtYWlscy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8aW1wb3J0RW1haWxDb3VudDtpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbCA9IGl0ZW0uZW1haWxzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxJbnNlcnRPYmopIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqID0gKDxTUUxpdGVUYWJsZT5lbWFpbEluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouc2V0VmFsdWUoJ0VtYWlsVHlwZScsICdNYWlsSG9tZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdFbWFpbCcsIGVtYWlsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGVtYWlsSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGFkZHJlc3MgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGFkZHJlc3Mgb2YgaXRlbS5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzVHlwZSA9ICdBZGRyZXNzVHlwZUhvbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYWRkcmVzcy50eXBlID09ICd3b3JrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NUeXBlID0gJ0FkZHJlc3NUeXBlV29yayc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzSW5zZXJ0T2JqKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqID0gKDxTUUxpdGVUYWJsZT5hZGRyZXNzSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQWRkcmVzc1R5cGUnLCBhZGRyZXNzVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnWmlwY29kZScsIGFkZHJlc3MuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQWRkcmVzcycsIGFkZHJlc3MuYWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChhZGRyZXNzSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGFvLnJ1blRyYW5zYWN0aW9uKCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxufSJdfQ==