/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction, SQLCommand } from "@allianzSND/core";
import { Observable } from 'rxjs';
export class CustomerSaveDetailAPI {
    /**
     * @param {?} daoFactory
     * @param {?} customerUtils
     */
    constructor(daoFactory, customerUtils) {
        this.daoFactory = daoFactory;
        this.customerUtils = customerUtils;
    }
    /**
     * @param {?} detail
     * @return {?}
     */
    setDetail(detail) {
        this.customerDetail = detail;
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
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                //save customer data
                /** @type {?} */
                let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                if (customerObj) {
                    dao = new ClientCustomDao(dao);
                    customerObj = ((/** @type {?} */ (customerObj)));
                    /** @type {?} */
                    let birthday = this.customerDetail.birthday;
                    if (birthday != null && birthday != undefined) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear());
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
                        customerObj.setValue("BirthDayTimeStamp", (new Date(2000, birthday.getMonth(), birthday.getDate())).getTime());
                    }
                    customerObj.setValue('ClientID', this.customerDetail.clientID);
                    customerObj.setValue("LastName", this.customerDetail.lastName);
                    customerObj.setValue("FirstName", this.customerDetail.firstName);
                    customerObj.setValue("Occupation", this.customerDetail.occupation);
                    customerObj.setValue("Company", this.customerDetail.company);
                    customerObj.setValue("AgeRange", this.customerDetail.ageRange);
                    customerObj.setValue("Gender", this.customerDetail.gender);
                    customerObj.setValue("Income", this.customerDetail.income);
                    customerObj.setValue("Source", this.customerDetail.source);
                    customerObj.setValue("Marriage", this.customerDetail.marriage);
                    customerObj.setValue("Children", this.customerDetail.children);
                    customerObj.setValue("Familiarity", this.customerDetail.familiarity);
                    customerObj.setValue("RecentStatus", this.customerDetail.recentStatus);
                    customerObj.setValue("MANPA", this.customerDetail.manpa);
                    customerObj.setValue("ContactFrequancy", this.customerDetail.contactFrequancy);
                    customerObj.setValue("Possibility", this.customerDetail.possibility);
                    customerObj.setValue("IsFollow", this.customerDetail.isFollow ? 'Y' : 'N');
                    //set customer default column & value
                    this.customerUtils.setCustomerDefaultValue(customerObj);
                    //count Completeness
                    this.customerUtils.countCompleteness(customerObj, this.customerDetail.tels.length, this.customerDetail.emails.length, this.customerDetail.addresses.length);
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
                    //save phone data              
                    for (let phone of this.customerDetail.tels) {
                        /** @type {?} */
                        let phoneInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
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
                    //save email data
                    for (let email of this.customerDetail.emails) {
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
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
                    //save address data
                    for (let address of this.customerDetail.addresses) {
                        /** @type {?} */
                        let addressInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJTYXZlRGV0YWlsQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvYXBpL0N1c3RvbWVyU2F2ZURldGFpbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEyQyxlQUFlLEVBQWMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUtsQyxNQUFNOzs7OztJQUlGLFlBQW9CLFVBQXNCLEVBQVMsYUFBNkI7UUFBNUQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUVoRixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFzQjtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sb0JBQW9CLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsS0FBSztRQUNMLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztnQkFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTs7O29CQUdkLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEUsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUUvQixXQUFXLEdBQUcsQ0FBQyxtQkFBYSxXQUFXLEVBQUEsQ0FBQyxDQUFDOzt3QkFFckMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUTtvQkFDM0MsSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7d0JBQzNDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs0QkFDekQsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTt3QkFDaEQsSUFBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDakIsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ2xDO3dCQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs0QkFFekMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO3dCQUMxQyxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNoQixJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDaEM7d0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBRTNDLFdBQVcsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztxQkFFbEg7b0JBRUQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDakUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDckUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQy9FLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3JFLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUczRSxxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXhELG9CQUFvQjtvQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFekosT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDN0MsOERBQThEO29CQUM5RCxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUN4QyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ3RDO3lCQUNJO3dCQUNELFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUMvRixHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBRW5DLHNCQUFzQjt3QkFDdEIsR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksVUFBVSxDQUFDLCtEQUErRCxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0ksR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksVUFBVSxDQUFDLGlFQUFpRSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakosR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksVUFBVSxDQUFDLG1FQUFtRSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdEo7b0JBRUQsK0JBQStCO29CQUMvQixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFOzs0QkFDcEMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDO3dCQUM3RSxJQUFJLGNBQWMsRUFBRTs0QkFFaEIsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUU7Z0NBQUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7NEJBRW5ELGNBQWMsR0FBRyxDQUFDLG1CQUFhLGNBQWMsRUFBQSxDQUFDLENBQUM7NEJBQy9DLGNBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUU5RSxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ2xELGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFFMUMsUUFBUTs0QkFDUixHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7eUJBQ3pDO3FCQUNKO29CQUVELGlCQUFpQjtvQkFDakIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTs7NEJBQ3RDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDL0UsSUFBSSxjQUFjLEVBQUU7NEJBQ2hCLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxFQUFFO2dDQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDOzRCQUV4RCxjQUFjLEdBQUcsQ0FBQyxtQkFBYSxjQUFjLEVBQUEsQ0FBQyxDQUFDOzRCQUMvQyxjQUFjLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDOUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUN0RCxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRTlDLFFBQVE7NEJBQ1IsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO3lCQUN6QztxQkFDSjtvQkFFRCxtQkFBbUI7b0JBQ25CLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUU7OzRCQUMzQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQzt3QkFDbkYsSUFBSSxnQkFBZ0IsRUFBRTs0QkFDbEIsSUFBSSxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUU7Z0NBQUUsT0FBTyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzs0QkFFdkUsZ0JBQWdCLEdBQUcsQ0FBQyxtQkFBYSxnQkFBZ0IsRUFBQSxDQUFDLENBQUM7NEJBQ25ELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ2hGLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUM5RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDckQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQy9DLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUcvQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBRXRELFFBQVE7NEJBQ1IsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7eUJBQzNDO3FCQUNKO29CQUNELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ3BDLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4QixtQ0FBbUM7d0JBQ25DLHFDQUFxQzt3QkFDckMsSUFBSTt3QkFDSixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hCLENBQUMsRUFBQyxDQUFDO2lCQUNOO3FCQUNJO29CQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkI7YUFFSjtpQkFDSTtnQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7O0lBMUtHLCtDQUF1Qzs7Ozs7SUFFM0IsMkNBQThCOzs7OztJQUFDLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIElNb2NrQVBJLCBEYW9GYWN0b3J5LCBTUUxpdGVUYWJsZSwgQ2xpZW50Q3VzdG9tRGFvLCBJU1FMaXRlQVBJLCBFcXVhbFJlc3RyaWN0aW9uLCBTUUxDb21tYW5kIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsIH0gZnJvbSBcIi4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJEZXRhaWxcIjtcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvY3VzdG9tZXItdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTYXZlRGV0YWlsQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHJpdmF0ZSBjdXN0b21lckRldGFpbDogQ3VzdG9tZXJEZXRhaWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkscHJpdmF0ZSBjdXN0b21lclV0aWxzIDogQ3VzdG9tZXJVdGlscykge1xuXG4gICAgfVxuXG4gICAgc2V0RGV0YWlsKGRldGFpbDogQ3VzdG9tZXJEZXRhaWwpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lckRldGFpbCA9IGRldGFpbDtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnc2F2ZUN1c3RvbWVyRGV0YWlsJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svc2F2ZVN1Y2Nlc3MuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvLyBsZXQgcmV0dXJuT2JqID0ge1xuICAgICAgICAvLyAgICAgXCJzdGF0dXNcIjogdHJ1ZSxcbiAgICAgICAgLy8gICAgIFwibXNnXCI6ICcnXG4gICAgICAgIC8vIH07XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vc2F2ZSBjdXN0b21lciBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lck9iaikge1xuICAgICAgICAgICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmogPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYmlydGhkYXkgPSB0aGlzLmN1c3RvbWVyRGV0YWlsLmJpcnRoZGF5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmlydGhkYXkgIT0gbnVsbCAmJiBiaXJ0aGRheSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlZZWFyXCIsIGJpcnRoZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gKGJpcnRoZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobW9udGgubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gJzAnICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQmlydGhkYXlNb250aFwiLCBtb250aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gKGJpcnRoZGF5LmdldERhdGUoKSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGUubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSAnMCcgKyBkYXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5RGF0ZVwiLCBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoRGF5VGltZVN0YW1wXCIsIChuZXcgRGF0ZSgyMDAwLCBiaXJ0aGRheS5nZXRNb250aCgpLCBiaXJ0aGRheS5nZXREYXRlKCkpKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZSgnQ2xpZW50SUQnLCB0aGlzLmN1c3RvbWVyRGV0YWlsLmNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJMYXN0TmFtZVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLmxhc3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJGaXJzdE5hbWVcIiwgdGhpcy5jdXN0b21lckRldGFpbC5maXJzdE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIk9jY3VwYXRpb25cIiwgdGhpcy5jdXN0b21lckRldGFpbC5vY2N1cGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDb21wYW55XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuY29tcGFueSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQWdlUmFuZ2VcIiwgdGhpcy5jdXN0b21lckRldGFpbC5hZ2VSYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiR2VuZGVyXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuZ2VuZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJJbmNvbWVcIiwgdGhpcy5jdXN0b21lckRldGFpbC5pbmNvbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIlNvdXJjZVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLnNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiTWFycmlhZ2VcIiwgdGhpcy5jdXN0b21lckRldGFpbC5tYXJyaWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ2hpbGRyZW5cIiwgdGhpcy5jdXN0b21lckRldGFpbC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiRmFtaWxpYXJpdHlcIiwgdGhpcy5jdXN0b21lckRldGFpbC5mYW1pbGlhcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiUmVjZW50U3RhdHVzXCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwucmVjZW50U3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJNQU5QQVwiLCB0aGlzLmN1c3RvbWVyRGV0YWlsLm1hbnBhKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJDb250YWN0RnJlcXVhbmN5XCIsIHRoaXMuY3VzdG9tZXJEZXRhaWwuY29udGFjdEZyZXF1YW5jeSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiUG9zc2liaWxpdHlcIiwgdGhpcy5jdXN0b21lckRldGFpbC5wb3NzaWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSXNGb2xsb3dcIiwgdGhpcy5jdXN0b21lckRldGFpbC5pc0ZvbGxvdyA/ICdZJyA6ICdOJyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvL3NldCBjdXN0b21lciBkZWZhdWx0IGNvbHVtbiAmIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDdXN0b21lckRlZmF1bHRWYWx1ZShjdXN0b21lck9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9jb3VudCBDb21wbGV0ZW5lc3NcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclV0aWxzLmNvdW50Q29tcGxldGVuZXNzKGN1c3RvbWVyT2JqLHRoaXMuY3VzdG9tZXJEZXRhaWwudGVscy5sZW5ndGgsdGhpcy5jdXN0b21lckRldGFpbC5lbWFpbHMubGVuZ3RoLHRoaXMuY3VzdG9tZXJEZXRhaWwuYWRkcmVzc2VzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnaW5zZXJ0Q3VzdG9tZXInLCBjdXN0b21lck9iaik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGllbnRJRDonLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGN1c3RvbWVyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsW2N1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25VcGRhdGUoY3VzdG9tZXJPYmopO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZSByZWxhdGlvbiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25TcWxDb21tYW5kKG5ldyBTUUxDb21tYW5kKCdkZWxldGUgZnJvbSBUV19MSF9TRF9DdXN0b21lcl9UZWwgd2hlcmUgQ3VzdG9tZXJDbGllbnRJRCA9ID8gJywgW2N1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uU3FsQ29tbWFuZChuZXcgU1FMQ29tbWFuZCgnZGVsZXRlIGZyb20gVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWwgd2hlcmUgQ3VzdG9tZXJDbGllbnRJRCA9ID8gJywgW2N1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uU3FsQ29tbWFuZChuZXcgU1FMQ29tbWFuZCgnZGVsZXRlIGZyb20gVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzcyB3aGVyZSBDdXN0b21lckNsaWVudElEID0gPyAnLCBbY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJyldKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgcGhvbmUgZGF0YSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBob25lIG9mIHRoaXMuY3VzdG9tZXJEZXRhaWwudGVscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZUluc2VydE9iaikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBob25lLnRlbFR5cGUgPT0gJycpIHBob25lLnRlbFR5cGUgPSAnVGVsSG9tZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iaiA9ICg8U1FMaXRlVGFibGU+cGhvbmVJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ1RlbFR5cGUnLCBwaG9uZS50ZWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnVGVsJywgcGhvbmUudGVsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KHBob25lSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBlbWFpbCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGVtYWlsIG9mIHRoaXMuY3VzdG9tZXJEZXRhaWwuZW1haWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxJbnNlcnRPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWwuZW1haWxUeXBlID09ICcnKSBlbWFpbC5lbWFpbFR5cGUgPSAnTWFpbEhvbWUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPmVtYWlsSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRW1haWxUeXBlJywgZW1haWwuZW1haWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRW1haWwnLCBlbWFpbC5lbWFpbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChlbWFpbEluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgYWRkcmVzcyBkYXRhXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFkZHJlc3Mgb2YgdGhpcy5jdXN0b21lckRldGFpbC5hZGRyZXNzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc0luc2VydE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzLmFkZHJlc3NUeXBlID09ICcnKSBhZGRyZXNzLmFkZHJlc3NUeXBlID0gJ0FkZHJlc3NUeXBlSG9tZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqID0gKDxTUUxpdGVUYWJsZT5hZGRyZXNzSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0FkZHJlc3NUeXBlJywgYWRkcmVzcy5hZGRyZXNzVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQ291bnRyeScsYWRkcmVzcy5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdDaXR5JyxhZGRyZXNzLmNpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0FyZWEnLGFkZHJlc3MuYXJlYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnWmlwY29kZScsIGFkZHJlc3MuemlwY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQWRkcmVzcycsIGFkZHJlc3MuYWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChhZGRyZXNzSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkYW8ucnVuVHJhbnNhY3Rpb24oKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBoZWFkZXIgPSByZXNwWydIZWFkZXInXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICghaGVhZGVyLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybk9ialsnc3RhdHVzJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm5PYmpbJ21zZyddID0gaGVhZGVyLm1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19