/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao } from "@allianzSND/core";
import { Observable } from "rxjs";
import { v4 as uuid } from 'uuid';
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
                    /** @type {?} */
                    let customerExt = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Extension");
                    /** @type {?} */
                    let ClientID = uuid();
                    customerObj.setValue("ClientID", ClientID);
                    customerObj.setValue("LastName", item.LastName);
                    customerObj.setValue("FirstName", item.FirstName);
                    customerObj.setValue("IsFollow", "N");
                    customerExt.setValue("ClientID", ClientID);
                    /** @type {?} */
                    let birthday = item.Birthday;
                    if (birthday != null) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear);
                        customerObj.setValue("BirthdayMonth", birthday.getMonth);
                        customerObj.setValue("BirthdayDate", birthday.getDate);
                    }
                    //set customer default column & value
                    this.customerUtils.setCustomerDefaultValue(customerObj);
                    //count Completeness
                    /** @type {?} */
                    let completeness = this.customerUtils.countCompleteness(item);
                    customerObj.setValue('Completeness', completeness);
                    //insert customer data
                    dao.transactionInsert(customerObj);
                    dao.transactionInsert(customerExt);
                    //save phone data
                    for (let phone of item.tel) {
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
                        /** @type {?} */
                        let phoneInsertObj_Ext = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                        if (phoneInsertObj) {
                            /** @type {?} */
                            let clientID = uuid();
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
                    //save email data
                    /** @type {?} */
                    let maxEmailCount = 3;
                    /** @type {?} */
                    let importEmailCount = maxEmailCount;
                    if (item.email.length < 3)
                        importEmailCount = item.email.length;
                    for (let i = 0; i < importEmailCount; i++) {
                        /** @type {?} */
                        let email = item.email[i];
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        /** @type {?} */
                        let emailInsertObj_Ext = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                        if (emailInsertObj) {
                            /** @type {?} */
                            let clientID = uuid();
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
                    //save address data
                    for (let address of item.address) {
                        /** @type {?} */
                        let addressType = 'AddressTypeHome';
                        if (address.type == 'work') {
                            addressType = 'AddressTypeWork';
                        }
                        /** @type {?} */
                        let addressInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                        /** @type {?} */
                        let addressInsertObj_Ext = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                        if (addressInsertObj) {
                            /** @type {?} */
                            let clientID = uuid();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1wb3J0Q29udGFjdEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2FwaS9JbXBvcnRDb250YWN0QVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXdELGVBQWUsRUFBYyxNQUFNLGtCQUFrQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsTUFBTTs7Ozs7SUFPRixZQUFvQixVQUFzQixFQUFVLGFBQTRCO1FBQTVELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUVoRixDQUFDOzs7OztJQU5NLFFBQVEsQ0FBQyxLQUF5QjtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBTUQsVUFBVTtRQUNOLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyxnQ0FBZ0MsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUdOLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztnQkFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFFbEIsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUvQixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O3dCQUVyQixXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUM7O3dCQUNsRSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUM7O3dCQUU1RSxRQUFRLEdBQUcsSUFBSSxFQUFFO29CQUNyQixXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDM0MsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2xELFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUV0QyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs7d0JBRXZDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtvQkFDNUIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO3dCQUNsQixXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzNELFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDekQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUMxRDtvQkFFRCxxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7Ozt3QkFHcEQsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO29CQUM3RCxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFFbkQsc0JBQXNCO29CQUN0QixHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25DLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDbkMsaUJBQWlCO29CQUNqQixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7OzRCQUNwQixPQUFPLEdBQUcsU0FBUzt3QkFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTs0QkFDdEIsT0FBTyxHQUFHLFNBQVMsQ0FBQzt5QkFDdkI7NkJBQ0ksSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTs0QkFDN0IsT0FBTyxHQUFHLFdBQVcsQ0FBQzt5QkFDekI7OzRCQUVHLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQzs7NEJBQ3pFLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGlDQUFpQyxDQUFDO3dCQUMzRixJQUFJLGNBQWMsRUFBRTs7Z0NBQ1osUUFBUSxHQUFHLElBQUksRUFBRTs0QkFFckIsY0FBYyxHQUFHLENBQUMsbUJBQWEsY0FBYyxFQUFBLENBQUMsQ0FBQzs0QkFDL0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQzlDLGNBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUU5RSxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzs0QkFDNUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUM3QyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFFN0Msa0JBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFDbEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFFbEYsUUFBUTs0QkFDUixHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQ3RDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3lCQUM3QztxQkFDSjs7O3dCQUdHLGFBQWEsR0FBRyxDQUFDOzt3QkFDakIsZ0JBQWdCLEdBQUcsYUFBYTtvQkFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUFFLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OzRCQUNuQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OzRCQUVyQixjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUM7OzRCQUMzRSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsQ0FBQzt3QkFDN0YsSUFBSSxjQUFjLEVBQUU7O2dDQUNaLFFBQVEsR0FBRyxJQUFJLEVBQUU7NEJBRXJCLGNBQWMsR0FBRyxDQUFDLG1CQUFhLGNBQWMsRUFBQSxDQUFDLENBQUM7NEJBQy9DLGNBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUM5RSxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQzs0QkFDakQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUM5QyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFFN0Msa0JBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFDbEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFFbEYsUUFBUTs0QkFDUixHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQ3RDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3lCQUM3QztxQkFDSjtvQkFFRCxtQkFBbUI7b0JBQ25CLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7NEJBRTFCLFdBQVcsR0FBRyxpQkFBaUI7d0JBQ25DLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7NEJBQ3hCLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzt5QkFDbkM7OzRCQUVHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLDJCQUEyQixDQUFDOzs0QkFDL0Usb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMscUNBQXFDLENBQUM7d0JBQ2pHLElBQUksZ0JBQWdCLEVBQUU7O2dDQUVkLFFBQVEsR0FBRyxJQUFJLEVBQUU7NEJBRXJCLGdCQUFnQixHQUFHLENBQUMsbUJBQWEsZ0JBQWdCLEVBQUEsQ0FBQyxDQUFDOzRCQUNuRCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNoRixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUVoRCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUN0RCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbkQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3RELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBRy9DLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ3BGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQ3BELFFBQVE7NEJBQ1IsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7NEJBQ3hDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3lCQUMvQztxQkFDSjtpQkFHSjtnQkFFRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUVwQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFDO2FBRU47aUJBQ0k7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7Ozs7OztJQXZLRyxpQ0FBa0M7Ozs7O0lBTXRCLHNDQUE4Qjs7Ozs7SUFBRSx5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0SXRlbSwgSUFQSSwgSU1vY2tBUEksIERhb0ZhY3RvcnksIFNRTGl0ZVRhYmxlLCBDbGllbnRDdXN0b21EYW8sIElTUUxpdGVBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDdXN0b21lclV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cblxuZXhwb3J0IGNsYXNzIEltcG9ydENvbnRhY3RBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8Q29udGFjdEl0ZW0+O1xuXG4gICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBBcnJheTxDb250YWN0SXRlbT4pIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSwgcHJpdmF0ZSBjdXN0b21lclV0aWxzOiBDdXN0b21lclV0aWxzKSB7XG5cbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnaW1wb3J0Q29udGFjdCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3NhdmVTdWNjZXNzLmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyRXh0ID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0V4dGVuc2lvblwiKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgQ2xpZW50SUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiQ2xpZW50SURcIiwgQ2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkxhc3ROYW1lXCIsIGl0ZW0uTGFzdE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkZpcnN0TmFtZVwiLCBpdGVtLkZpcnN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLnNldFZhbHVlKFwiSXNGb2xsb3dcIiwgXCJOXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRXh0LnNldFZhbHVlKFwiQ2xpZW50SURcIiwgQ2xpZW50SUQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBiaXJ0aGRheSA9IGl0ZW0uQmlydGhkYXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXJ0aGRheSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5WWVhclwiLCBiaXJ0aGRheS5nZXRGdWxsWWVhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck9iai5zZXRWYWx1ZShcIkJpcnRoZGF5TW9udGhcIiwgYmlydGhkYXkuZ2V0TW9udGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoXCJCaXJ0aGRheURhdGVcIiwgYmlydGhkYXkuZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL3NldCBjdXN0b21lciBkZWZhdWx0IGNvbHVtbiAmIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJVdGlscy5zZXRDdXN0b21lckRlZmF1bHRWYWx1ZShjdXN0b21lck9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9jb3VudCBDb21wbGV0ZW5lc3NcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlbmVzcyA9IHRoaXMuY3VzdG9tZXJVdGlscy5jb3VudENvbXBsZXRlbmVzcyhpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouc2V0VmFsdWUoJ0NvbXBsZXRlbmVzcycsIGNvbXBsZXRlbmVzcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnQgY3VzdG9tZXIgZGF0YVxuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY3VzdG9tZXJPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY3VzdG9tZXJFeHQpO1xuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgcGhvbmUgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwaG9uZSBvZiBpdGVtLnRlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbFR5cGUgPSAnVGVsSG9tZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmUudHlwZSA9PSAnd29yaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWxUeXBlID0gJ1RlbFdvcmsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGhvbmUudHlwZSA9PSAnbW9iaWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbFR5cGUgPSAnVGVsTW9iaWxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBob25lSW5zZXJ0T2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwaG9uZUluc2VydE9ial9FeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsX0V4dGVuc2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZUluc2VydE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IHV1aWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqID0gKDxTUUxpdGVUYWJsZT5waG9uZUluc2VydE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmouc2V0VmFsdWUoJ1RlbFR5cGUnLCB0ZWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnVGVsJywgcGhvbmUubnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUluc2VydE9iai5zZXRWYWx1ZSgnRGF0YVNvdXJjZScsICdBUFAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lSW5zZXJ0T2JqX0V4dC5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnNlcnRPYmpfRXh0LnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQocGhvbmVJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChwaG9uZUluc2VydE9ial9FeHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGVtYWlsIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heEVtYWlsQ291bnQgPSAzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1wb3J0RW1haWxDb3VudCA9IG1heEVtYWlsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVtYWlsLmxlbmd0aCA8IDMpIGltcG9ydEVtYWlsQ291bnQgPSBpdGVtLmVtYWlsLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbXBvcnRFbWFpbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbCA9IGl0ZW0uZW1haWxbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEluc2VydE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9FbWFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEluc2VydE9ial9FeHQgPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtYWlsSW5zZXJ0T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gdXVpZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmogPSAoPFNRTGl0ZVRhYmxlPmVtYWlsSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIGN1c3RvbWVyT2JqLmdldFZhbHVlKCdDbGllbnRJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRW1haWxUeXBlJywgJ01haWxIb21lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmouc2V0VmFsdWUoJ0VtYWlsJywgZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqLnNldFZhbHVlKCdDbGllbnRJRCcsIGNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEluc2VydE9iai5zZXRWYWx1ZSgnRGF0YVNvdXJjZScsICdBUFAnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5zZXJ0T2JqX0V4dC5zZXRWYWx1ZSgnQ2xpZW50SUQnLCBjbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnNlcnRPYmpfRXh0LnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoZW1haWxJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChlbWFpbEluc2VydE9ial9FeHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGFkZHJlc3MgZGF0YVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhZGRyZXNzIG9mIGl0ZW0uYWRkcmVzcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc1R5cGUgPSAnQWRkcmVzc1R5cGVIb21lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzLnR5cGUgPT0gJ3dvcmsnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1R5cGUgPSAnQWRkcmVzc1R5cGVXb3JrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NJbnNlcnRPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzSW5zZXJ0T2JqX0V4dCA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzX0V4dGVuc2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzSW5zZXJ0T2JqKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSB1dWlkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqID0gKDxTUUxpdGVUYWJsZT5hZGRyZXNzSW5zZXJ0T2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzSW5zZXJ0T2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgY3VzdG9tZXJPYmouZ2V0VmFsdWUoJ0NsaWVudElEJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3NJbnNlcnRPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgY2xpZW50SUQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQWRkcmVzc1R5cGUnLCBhZGRyZXNzVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnWmlwY29kZScsIGFkZHJlc3MuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnQWRkcmVzcycsIGFkZHJlc3MuYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9iai5zZXRWYWx1ZSgnRGF0YVNvdXJjZScsICdBUFAnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9ial9FeHQuc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCBjdXN0b21lck9iai5nZXRWYWx1ZSgnQ2xpZW50SUQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0luc2VydE9ial9FeHQuc2V0VmFsdWUoJ0NsaWVudElEJywgY2xpZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFvLnRyYW5zYWN0aW9uSW5zZXJ0KGFkZHJlc3NJbnNlcnRPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvbkluc2VydChhZGRyZXNzSW5zZXJ0T2JqX0V4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGFvLnJ1blRyYW5zYWN0aW9uKCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn0iXX0=