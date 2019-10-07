/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, TableUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
export class CustomerSaveDetailAPI {
    /**
     * @param {?} daoFactory
     * @param {?} customerUtils
     */
    constructor(daoFactory, customerUtils) {
        this.daoFactory = daoFactory;
        this.customerUtils = customerUtils;
        this.Data = null;
    }
    /**
     * @param {?} detail
     * @return {?}
     */
    setDetail(detail) {
        this.Data = detail;
    }
    /**
     * @return {?}
     */
    get customerDetail() {
        return this.Data;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveCustomerDetail';
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
        // let returnObj = {
        //     "status": true,
        //     "msg": ''
        // };
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao;
            /** @type {?} */
            let base_dao = this.daoFactory.getDefaultDao();
            if (base_dao != undefined) {
                dao = new ClientCustomDao(base_dao);
                console.log("base_dao:", base_dao);
                console.log("dao:", dao);
                //save customer data
                /** @type {?} */
                let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                /** @type {?} */
                let customerExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Extension");
                if (customerObj && customerExtObj) {
                    /** @type {?} */
                    let birthday = this.customerDetail.Birthday;
                    if (birthday != null && birthday != undefined) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear().toString());
                        /** @type {?} */
                        let month = (birthday.getMonth() + 1).toString();
                        if (month.length < 2) {
                            month = '0' + month.toString();
                        }
                        customerObj.setValue("BirthdayMonth", month);
                        /** @type {?} */
                        let date = (birthday.getDate()).toString();
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
                    customerObj.setValue("AgeRange", this.customerDetail.AgeRange);
                    customerObj.setValue('ClientID', this.customerDetail.ClientID);
                    customerObj.setValue("LastName", this.customerDetail.LastName);
                    customerObj.setValue("FirstName", this.customerDetail.FirstName);
                    customerObj.setValue("Occupation", this.customerDetail.Occupation);
                    customerObj.setValue("Company", this.customerDetail.Company);
                    customerObj.setValue("Gender", this.customerDetail.Gender);
                    customerObj.setValue("Income", this.customerDetail.Income);
                    customerObj.setValue("Source", this.customerDetail.Source);
                    customerObj.setValue("Marriage", this.customerDetail.Marriage);
                    customerObj.setValue("Children", this.customerDetail.Children);
                    customerObj.setValue("Familiarity", this.customerDetail.Familiarity);
                    customerObj.setValue("ContactFrequancy", this.customerDetail.ContactFrequancy);
                    customerObj.setValue("Possibility", this.customerDetail.Possibility);
                    customerObj.setValue("IsFollow", this.customerDetail.IsFollow);
                    customerExtObj.setValue('ClientID', this.customerDetail.ClientID);
                    // customerExtObj.setValue("RecentStatus", this.customerDetail.RecentStatus);
                    // customerExtObj.setValue("MANPA", this.customerDetail.MANPA);
                    console.log("save cusomer stringify:", JSON.stringify(this.customerDetail));
                    customerExtObj = TableUtils.fillTableColumn(customerExtObj, this.customerDetail);
                    console.log("save cusomer extObj:", JSON.stringify(customerExtObj));
                    //set customer default column & value
                    this.customerUtils.setCustomerDefaultValue(customerObj);
                    this.customerDetail.AgeRange = customerObj.getValue("AgeRange");
                    customerObj.setValue('Completeness', this.customerDetail.Completeness);
                    console.debug('insertCustomer', customerObj);
                    // console.log('clientID:', customerObj.getValue('ClientID'));
                    if (customerObj.getValue('ClientID') == '') {
                        /** @type {?} */
                        let _clientID = uuid();
                        customerObj.setValue('ClientID', _clientID);
                        customerExtObj.setValue('ClientID', _clientID);
                        dao.transactionInsert(customerObj);
                        dao.transactionInsert(customerExtObj);
                    }
                    else {
                        /** @type {?} */
                        let _deletedClientID = customerObj.getValue('ClientID');
                        /** @type {?} */
                        let phoneInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                        /** @type {?} */
                        let phoneInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        /** @type {?} */
                        let emailInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                        /** @type {?} */
                        let addressInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                        /** @type {?} */
                        let addressInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
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
                    //save phone data              
                    for (let phone of this.customerDetail.tel) {
                        /** @type {?} */
                        let phoneInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                        /** @type {?} */
                        let phoneInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                        if (phoneInsertObj && phone.Tel) {
                            if (phone.TelType == '')
                                phone.TelType = 'TelHome';
                            /** @type {?} */
                            let clientID = uuid();
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
                    //save email data
                    for (let email of this.customerDetail.email) {
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        /** @type {?} */
                        let emailInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                        if (emailInsertObj && email.Email) {
                            if (email.EmailType == '')
                                email.EmailType = 'MailHome';
                            /** @type {?} */
                            let clientID = uuid();
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
                    //save address data
                    for (let address of this.customerDetail.address) {
                        /** @type {?} */
                        let addressInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                        /** @type {?} */
                        let addressInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                        if (addressInsertObj) {
                            if (!this._judgeIsAddressEmpty(address)) {
                                // if (address.AddressType == '') address.AddressType = 'AddressTypeHome';
                                /** @type {?} */
                                let clientID = uuid();
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
                    dao.runTransaction().subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
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
    }
    /**
     * @private
     * @param {?} customerObj
     * @return {?}
     */
    _judgeIsAddressEmpty(customerObj) {
        /** @type {?} */
        let requiredCol = ['Country', 'City', 'Area', 'Zipcode', 'Address'];
        return requiredCol.reduce((/**
         * @param {?} total
         * @param {?} each
         * @return {?}
         */
        (total, each) => total && customerObj[each] == ''), true);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTYXZlRGV0YWlsQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvYXBpL0N1c3RvbWVyU2F2ZURldGFpbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEyQyxlQUFlLEVBQWMsZ0JBQWdCLEVBQWMsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEosT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdsQyxNQUFNOzs7OztJQUtGLFlBQW9CLFVBQXNCLEVBQVUsYUFBNEI7UUFBNUQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRnhFLFNBQUksR0FBRyxJQUFJLENBQUM7SUFJcEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBVztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxvQkFBb0IsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixLQUFLO1FBQ0wsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUM5QixHQUFHOztnQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDOUMsSUFBSSxRQUFRLElBQUks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QjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBR08sb0JBQW9CLENBQUMsV0FBZ0I7O1lBQ3JDLFdBQVcsR0FBa0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1FBQ2xGLE9BQU8sV0FBVyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUN2RixDQUFDO0NBQ0o7Ozs7OztJQXJPRyxxQ0FBb0I7Ozs7O0lBRVIsMkNBQThCOzs7OztJQUFFLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBTUUxpdGVUYWJsZSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uLCBTUUxDb21tYW5kLCBUYWJsZVV0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvY3VzdG9tZXItdXRpbHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTYXZlRGV0YWlsQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG5cbiAgICBwcml2YXRlIERhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5LCBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHMpIHtcblxuICAgIH1cblxuICAgIHNldERldGFpbChkZXRhaWw6IGFueSkge1xuICAgICAgICB0aGlzLkRhdGEgPSBkZXRhaWw7XG4gICAgfVxuXG4gICAgZ2V0IGN1c3RvbWVyRGV0YWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdzYXZlQ3VzdG9tZXJEZXRhaWwnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9zYXZlU3VjY2Vzcy5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8vIGxldCByZXR1cm5PYmogPSB7XG4gICAgICAgIC8vICAgICBcInN0YXR1c1wiOiB0cnVlLFxuICAgICAgICAvLyAgICAgXCJtc2dcIjogJydcbiAgICAgICAgLy8gfTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGRhbztcbiAgICAgICAgICAgIGxldCBiYXNlX2RhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBpZiAoYmFzZV9kYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhiYXNlX2Rhbyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXNlX2RhbzpcIiwgYmFzZV9kYW8pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFvOlwiLCBkYW8pO1xuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckV4dE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9FeHRlbnNpb25cIik7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyT2JqICYmIGN1c3RvbWVyRXh0T2JqKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJpcnRoZGF5ID0gdGhpcy5jdXN0b21lckRldGFpbC5CaXJ0aGRheTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpcnRoZGF5ICE9IG51bGwgJiYgYmlydGhkYXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5WWVhclwiLCBiaXJ0aGRheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gKGJpcnRoZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5TW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IChiaXJ0aGRheS5nZXREYXRlKCkpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9ICcwJyArIGRhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlEYXRlXCIsIGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheVllYXJcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5TW9udGhcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5RGF0ZVwiLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkFnZVJhbmdlXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuQWdlUmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJMYXN0TmFtZVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkxhc3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJGaXJzdE5hbWVcIiwgdGhpcy5jdXN0b21lckRldGFpbC5GaXJzdE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIk9jY3VwYXRpb25cIiwgdGhpcy5jdXN0b21lckRldGFpbC5PY2N1cGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDb21wYW55XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuQ29tcGFueSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiR2VuZGVyXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuR2VuZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJJbmNvbWVcIiwgdGhpcy5jdXN0b21lckRldGFpbC5JbmNvbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIlNvdXJjZVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLlNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTWFycmlhZ2VcIiwgdGhpcy5jdXN0b21lckRldGFpbC5NYXJyaWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ2hpbGRyZW5cIiwgdGhpcy5jdXN0b21lckRldGFpbC5DaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiRmFtaWxpYXJpdHlcIiwgdGhpcy5jdXN0b21lckRldGFpbC5GYW1pbGlhcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ29udGFjdEZyZXF1YW5jeVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLkNvbnRhY3RGcmVxdWFuY3kpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIlBvc3NpYmlsaXR5XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuUG9zc2liaWxpdHkpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIklzRm9sbG93XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuSXNGb2xsb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIHRoaXMuY3VzdG9tZXJEZXRhaWwuQ2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b21lckV4dE9iai5zZXRWYWx1ZShcIlJlY2VudFN0YXR1c1wiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLlJlY2VudFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbWVyRXh0T2JqLnNldFZhbHVlKFwiTUFOUEFcIiwgdGhpcy5jdXN0b21lckRldGFpbC5NQU5QQSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSBjdXNvbWVyIHN0cmluZ2lmeTpcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXN0b21lckRldGFpbCkpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckV4dE9iaiA9IFRhYmxlVXRpbHMuZmlsbFRhYmxlQ29sdW1uKGN1c3RvbWVyRXh0T2JqLCB0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlIGN1c29tZXIgZXh0T2JqOlwiLCBKU09OLnN0cmluZ2lmeShjdXN0b21lckV4dE9iaikpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IGN1c3RvbWVyIGRlZmF1bHQgY29sdW1uICYgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclV0aWxzLnNldEN1c3RvbWVyRGVmYXVsdFZhbHVlKGN1c3RvbWVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckRldGFpbC5BZ2VSYW5nZSA9IGN1c3RvbWVyT2JqLmdldFZhbHVlKFwiQWdlUmFuZ2VcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoJ0NvbXBsZXRlbmVzcycsIHRoaXMuY3VzdG9tZXJEZXRhaWwuQ29tcGxldGVuZXNzKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdpbnNlcnRDdXN0b21lcicsIGN1c3RvbWVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWVudElEOicsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2NsaWVudElEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgX2NsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIF9jbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGN1c3RvbWVyRXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfZGVsZXRlZENsaWVudElEID0gY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGhvbmVJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lSW5zZXJ0RXh0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbF9FeHRlbnNpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxJbnNlcnRFeHRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzSW5zZXJ0RXh0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW19kZWxldGVkQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbX2RlbGV0ZWRDbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW19kZWxldGVkQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydEV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtfZGVsZXRlZENsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbX2RlbGV0ZWRDbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0RXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW19kZWxldGVkQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW19kZWxldGVkQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0RXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW19kZWxldGVkQ2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjdXN0b21lck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY3VzdG9tZXJFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9kYW8udHJhbnNhY3Rpb25EZWxldGUocGhvbmVJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9kYW8udHJhbnNhY3Rpb25EZWxldGUocGhvbmVJbnNlcnRFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9kYW8udHJhbnNhY3Rpb25EZWxldGUoZW1haWxJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9kYW8udHJhbnNhY3Rpb25EZWxldGUoZW1haWxJbnNlcnRFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9kYW8udHJhbnNhY3Rpb25EZWxldGUoYWRkcmVzc0luc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Rhby50cmFuc2FjdGlvbkRlbGV0ZShhZGRyZXNzSW5zZXJ0RXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBwaG9uZSBkYXRhICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcGhvbmUgb2YgdGhpcy5jdXN0b21lckRldGFpbC50ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwaG9uZUluc2VydE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGhvbmVJbnNlcnRFeHRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsX0V4dGVuc2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZUluc2VydE9iaiAmJiBwaG9uZS5UZWwpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZS5UZWxUeXBlID09ICcnKSBwaG9uZS5UZWxUeXBlID0gJ1RlbEhvbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+cGhvbmVJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdUZWxUeXBlJywgcGhvbmUuVGVsVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ1RlbCcsIHBob25lLlRlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydEV4dE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydEV4dE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydEV4dE9iaiA9IFRhYmxlVXRpbHMuZmlsbFRhYmxlQ29sdW1uKHBob25lSW5zZXJ0RXh0T2JqLCBwaG9uZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChwaG9uZUluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHBob25lSW5zZXJ0RXh0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBlbWFpbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGVtYWlsIG9mIHRoaXMuY3VzdG9tZXJEZXRhaWwuZW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEluc2VydE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9FbWFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEluc2VydEV4dE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9FbWFpbF9FeHRlbnNpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxJbnNlcnRPYmogJiYgZW1haWwuRW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWwuRW1haWxUeXBlID09ICcnKSBlbWFpbC5FbWFpbFR5cGUgPSAnTWFpbEhvbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+ZW1haWxJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdFbWFpbFR5cGUnLCBlbWFpbC5FbWFpbFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdFbWFpbCcsIGVtYWlsLkVtYWlsKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRFeHRPYmouc2V0VmFsdWUoXCJDbGllbnRJRFwiLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRFeHRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRFeHRPYmogPSBUYWJsZVV0aWxzLmZpbGxUYWJsZUNvbHVtbihlbWFpbEluc2VydEV4dE9iaiwgZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGVtYWlsSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoZW1haWxJbnNlcnRFeHRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGFkZHJlc3MgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhZGRyZXNzIG9mIHRoaXMuY3VzdG9tZXJEZXRhaWwuYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzSW5zZXJ0RXh0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NJbnNlcnRPYmopIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fanVkZ2VJc0FkZHJlc3NFbXB0eShhZGRyZXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYWRkcmVzcy5BZGRyZXNzVHlwZSA9PSAnJykgYWRkcmVzcy5BZGRyZXNzVHlwZSA9ICdBZGRyZXNzVHlwZUhvbWUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZShcIkNsaWVudElEXCIsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+YWRkcmVzc0luc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0FkZHJlc3NUeXBlJywgYWRkcmVzcy5BZGRyZXNzVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0NvdW50cnknLCBhZGRyZXNzLkNvdW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdDaXR5JywgYWRkcmVzcy5DaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQXJlYScsIGFkZHJlc3MuQXJlYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ1ppcGNvZGUnLCBhZGRyZXNzLlppcGNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdBZGRyZXNzJywgYWRkcmVzcy5BZGRyZXNzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0RXh0T2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0RXh0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0RXh0T2JqID0gVGFibGVVdGlscy5maWxsVGFibGVDb2x1bW4oYWRkcmVzc0luc2VydEV4dE9iaiwgYWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGFkZHJlc3NJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoYWRkcmVzc0luc2VydEV4dE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhby5ydW5UcmFuc2FjdGlvbigpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGhlYWRlciA9IHJlc3BbJ0hlYWRlciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFoZWFkZXIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuT2JqWydzdGF0dXMnXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybk9ialsnbXNnJ10gPSBoZWFkZXIubXNnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgX2p1ZGdlSXNBZGRyZXNzRW1wdHkoY3VzdG9tZXJPYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVxdWlyZWRDb2w6IEFycmF5PHN0cmluZz4gPSBbJ0NvdW50cnknLCAnQ2l0eScsICdBcmVhJywgJ1ppcGNvZGUnLCAnQWRkcmVzcyddO1xuICAgICAgICByZXR1cm4gcmVxdWlyZWRDb2wucmVkdWNlKCh0b3RhbCwgZWFjaCkgPT4gdG90YWwgJiYgY3VzdG9tZXJPYmpbZWFjaF0gPT0gJycsIHRydWUpO1xuICAgIH1cbn1cbiJdfQ==