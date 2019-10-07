/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao } from "@allianzSND/core";
import { Observable } from "rxjs";
export class ImportContactAPI {
    /**
     * @param {?} daoFactory
     * @param {?} customerUtils
     */
    constructor(daoFactory, customerUtils) {
        this.daoFactory = daoFactory;
        this.customerUtils = customerUtils;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this.items = items;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'importContact';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/saveSuccess.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                dao = new ClientCustomDao(dao);
                for (let item of this.items) {
                    /** @type {?} */
                    let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                    customerObj.setValue("LastName", item.lastname);
                    customerObj.setValue("FirstName", item.firstname);
                    customerObj.setValue("IsFollow", "N");
                    /** @type {?} */
                    let birthday = item.birthday;
                    if (birthday != null) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear);
                        customerObj.setValue("BirthdayMonth", birthday.getMonth);
                        customerObj.setValue("BirthdayDate", birthday.getDate);
                    }
                    //set customer default column & value
                    this.customerUtils.setCustomerDefaultValue(customerObj);
                    //count Completeness
                    this.customerUtils.countCompleteness(customerObj, item.phones.length, item.emails.length, item.address.length);
                    //insert customer data
                    dao.transactionInsert(customerObj);
                    //save phone data
                    for (let phone of item.phones) {
                        /** @type {?} */
                        let telType = 'TelHome';
                        if (phone.type == 'work') {
                            telType = 'TelWork';
                        }
                        else if (phone.type == 'mobile') {
                            telType = 'TelMobile';
                        }
                        /** @type {?} */
                        let phoneInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                        if (phoneInsertObj) {
                            phoneInsertObj = ((/** @type {?} */ (phoneInsertObj)));
                            phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            phoneInsertObj.setValue('TelType', telType);
                            phoneInsertObj.setValue('Tel', phone.number);
                            //insert
                            dao.transactionInsert(phoneInsertObj);
                        }
                    }
                    //save email data
                    /** @type {?} */
                    let maxEmailCount = 3;
                    /** @type {?} */
                    let importEmailCount = maxEmailCount;
                    if (item.emails.length < 3)
                        importEmailCount = item.emails.length;
                    for (let i = 0; i < importEmailCount; i++) {
                        /** @type {?} */
                        let email = item.emails[i];
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        if (emailInsertObj) {
                            emailInsertObj = ((/** @type {?} */ (emailInsertObj)));
                            emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            emailInsertObj.setValue('EmailType', 'MailHome');
                            emailInsertObj.setValue('Email', email);
                            //insert
                            dao.transactionInsert(emailInsertObj);
                        }
                    }
                    //save address data
                    for (let address of item.address) {
                        /** @type {?} */
                        let addressType = 'AddressTypeHome';
                        if (address.type == 'work') {
                            addressType = 'AddressTypeWork';
                        }
                        /** @type {?} */
                        let addressInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
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
                dao.runTransaction().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wb3J0Q29udGFjdEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2FwaS9JbXBvcnRDb250YWN0QVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXdELGVBQWUsRUFBYyxNQUFNLGtCQUFrQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJbEMsTUFBTTs7Ozs7SUFPRixZQUFvQixVQUFzQixFQUFVLGFBQTZCO1FBQTdELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFFakYsQ0FBQzs7Ozs7SUFOTSxRQUFRLENBQUMsS0FBMEI7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQU1ELFVBQVU7UUFDTixPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFVBQVU7UUFHTixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7Z0JBQzlCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRWxCLEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFL0IsS0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOzt3QkFFcEIsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDO29CQUV0RSxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hELFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxF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QUNJO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBRVAsQ0FBQztDQUVKOzs7Ozs7SUF4SUcsaUNBQW1DOzs7OztJQU12QixzQ0FBOEI7Ozs7O0lBQUUseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFjdEl0ZW0sIElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBTUUxpdGVUYWJsZSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ3VzdG9tZXJVdGlscyB9IGZyb20gXCIuLi91dGlscy9jdXN0b21lci11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBJbXBvcnRDb250YWN0QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksSVNRTGl0ZUFQSSB7XG4gICAgcHJpdmF0ZSBpdGVtcyA6IEFycmF5PENvbnRhY3RJdGVtPjtcbiAgICBcbiAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXMgOiBBcnJheTxDb250YWN0SXRlbT4pIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBjdXN0b21lclV0aWxzIDogQ3VzdG9tZXJVdGlscykge1xuXG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2ltcG9ydENvbnRhY3QnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9zYXZlU3VjY2Vzcy5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgXG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBpZiAoZGFvICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJMYXN0TmFtZVwiLCBpdGVtLmxhc3RuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJGaXJzdE5hbWVcIiwgaXRlbS5maXJzdG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIklzRm9sbG93XCIsIFwiTlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmlydGhkYXkgPSBpdGVtLmJpcnRoZGF5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmlydGhkYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheVllYXJcIiwgYmlydGhkYXkuZ2V0RnVsbFllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheU1vbnRoXCIsIGJpcnRoZGF5LmdldE1vbnRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlEYXRlXCIsIGJpcnRoZGF5LmdldERhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zZXQgY3VzdG9tZXIgZGVmYXVsdCBjb2x1bW4gJiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyVXRpbHMuc2V0Q3VzdG9tZXJEZWZhdWx0VmFsdWUoY3VzdG9tZXJPYmopO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vY291bnQgQ29tcGxldGVuZXNzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJVdGlscy5jb3VudENvbXBsZXRlbmVzcyhjdXN0b21lck9iaixpdGVtLnBob25lcy5sZW5ndGgsaXRlbS5lbWFpbHMubGVuZ3RoLGl0ZW0uYWRkcmVzcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0IGN1c3RvbWVyIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGN1c3RvbWVyT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgcGhvbmUgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHBob25lIG9mIGl0ZW0ucGhvbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsVHlwZSA9ICdUZWxIb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBob25lLnR5cGUgPT0gJ3dvcmsnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsVHlwZSA9ICdUZWxXb3JrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocGhvbmUudHlwZSA9PSAnbW9iaWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbFR5cGUgPSAnVGVsTW9iaWxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGhvbmVJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBob25lSW5zZXJ0T2JqKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+cGhvbmVJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ1RlbFR5cGUnLCB0ZWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnVGVsJywgcGhvbmUubnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHBob25lSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBlbWFpbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXhFbWFpbENvdW50ID0gMztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltcG9ydEVtYWlsQ291bnQgPSBtYXhFbWFpbENvdW50O1xuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmVtYWlscy5sZW5ndGggPCAzKSBpbXBvcnRFbWFpbENvdW50ID0gaXRlbS5lbWFpbHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPGltcG9ydEVtYWlsQ291bnQ7aSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWwgPSBpdGVtLmVtYWlsc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtYWlsSW5zZXJ0T2JqKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+ZW1haWxJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdFbWFpbFR5cGUnLCAnTWFpbEhvbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRW1haWwnLCBlbWFpbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChlbWFpbEluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBhZGRyZXNzIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBhZGRyZXNzIG9mIGl0ZW0uYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc1R5cGUgPSAnQWRkcmVzc1R5cGVIb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFkZHJlc3MudHlwZSA9PSAnd29yaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVHlwZSA9ICdBZGRyZXNzVHlwZVdvcmsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc0luc2VydE9iaikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+YWRkcmVzc0luc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0FkZHJlc3NUeXBlJywgYWRkcmVzc1R5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ1ppcGNvZGUnLCBhZGRyZXNzLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0FkZHJlc3MnLCBhZGRyZXNzLmFkZHJlc3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoYWRkcmVzc0luc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRhby5ydW5UcmFuc2FjdGlvbigpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn0iXX0=