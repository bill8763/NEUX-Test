/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIFactory, APIDispatch, ProfileCodeService, ValidationResult, StringUtils } from '@allianzSND/core';
import { Injectable, Optional, Inject } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { CustomerItem } from './model/CustomerItem';
import { CustomerAlertItem } from './model/CustomerAlertItem';
import { CustomerTel } from './model/CustomerTel';
import { CustomerBirthday } from './model/CustomerBirthday';
import { customerCriteriaSearchToken } from '../injectionToken/injection-token';
import { DefaultCustomerCriteriaSearch } from '../components/customer-filter/DefaultCustomerCriteriaSearch';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
import * as i2 from "../components/customer-filter/DefaultCustomerCriteriaSearch";
import * as i3 from "../injectionToken/injection-token";
export class CustomerService {
    /**
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} profileCodeService
     * @param {?} defaultCriteriaSearch
     * @param {?} customCriteriaSearch
     */
    constructor(dispatcher, APIFactory, profileCodeService, defaultCriteriaSearch, customCriteriaSearch) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory;
        this.profileCodeService = profileCodeService;
        this.defaultCriteriaSearch = defaultCriteriaSearch;
        this.customCriteriaSearch = customCriteriaSearch;
        //is first time use customer function
        this._isFirstTime = true;
        //register api
    }
    /**
     * @return {?}
     */
    isFirstTime() {
        if (this._isFirstTime) {
            this._isFirstTime = false;
            return true;
        }
        else {
            return this._isFirstTime;
        }
    }
    /**
     * @param {?} messageType
     * @param {?} messageDataCategory
     * @return {?}
     */
    updateMessageToRead(messageType, messageDataCategory) {
        /** @type {?} */
        let dashboardUpdateToReadAPI = (/** @type {?} */ (this.APIFactory.getAPI('updateDashboardToRead')));
        dashboardUpdateToReadAPI.setMessageType(messageType);
        dashboardUpdateToReadAPI.setMessageDataCategory(messageDataCategory);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(dashboardUpdateToReadAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('dashboard-service-updateMessageToRead', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    getOverTimeCustomerList(clientID) {
        /** @type {?} */
        let customerOverTimeAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerOverTime')));
        customerOverTimeAPI.setClientID(clientID);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(customerOverTimeAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-getOverTimeList', data);
                /** @type {?} */
                let returnList = new Array();
                /** @type {?} */
                let messages = data['Body'];
                //set body data
                for (let i = 0; i < messages.length; i++) {
                    /** @type {?} */
                    let message = messages[i];
                    /** @type {?} */
                    let args = JSON.parse(message['Arguments']);
                    /** @type {?} */
                    let customerList = args['customers'];
                    for (let j = 0; j < customerList.length; j++) {
                        /** @type {?} */
                        let event = new CustomerAlertItem(customerList[j].id, customerList[j].name);
                        returnList.push(event);
                    }
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    getAutoDeleteCustomerList(clientID) {
        /** @type {?} */
        let customerDeleteAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerAutoDelete')));
        customerDeleteAPI.setClientID(clientID);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(customerDeleteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.log('customer-service-getAutoDeleteCustomerList', data);
                /** @type {?} */
                let returnList = new Array();
                /** @type {?} */
                let messages = data['Body'];
                //set body data
                for (let i = 0; i < messages.length; i++) {
                    /** @type {?} */
                    let message = messages[i];
                    /** @type {?} */
                    let args = JSON.parse(message['Arguments']);
                    /** @type {?} */
                    let customerList = args['customers'];
                    for (let j = 0; j < customerList.length; j++) {
                        /** @type {?} */
                        let event = new CustomerAlertItem(customerList[j].id, customerList[j].name);
                        returnList.push(event);
                    }
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @param {?} isFollow
     * @return {?}
     */
    updateCustomerFollowStatus(clientID, isFollow) {
        /** @type {?} */
        let updateCustomerFollowStatus = (/** @type {?} */ (this.APIFactory.getAPI('updateCustomerFollowStatus')));
        updateCustomerFollowStatus.setClient(clientID);
        updateCustomerFollowStatus.setIsFollow(isFollow);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(updateCustomerFollowStatus).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-updateCustomerFollowStatus', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getFilterCriteriaPreset() {
        /** @type {?} */
        let getFilterCriteria = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerFilterPreset')));
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(getFilterCriteria).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-getFilterCriteria', data);
                /** @type {?} */
                let settingArray = data['Body'];
                /** @type {?} */
                let preset;
                if (settingArray.length = !0) {
                    preset = JSON.parse(settingArray[0].SettingVal);
                }
                console.debug('customer-service-getFilterCriteriaPreset', preset);
                observer.next(preset);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} filterCriteria
     * @return {?}
     */
    saveFilterCriteria(filterCriteria) {
        /** @type {?} */
        let saveFilterCriteria = (/** @type {?} */ (this.APIFactory.getAPI('saveCustomerFilterPreset')));
        saveFilterCriteria.setFilterCriteria(filterCriteria);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(saveFilterCriteria).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-saveFilterCriteria', data);
                observer.next(data);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @param {?} filterCriteria
     * @return {?}
     */
    checkInFilterCriteria(clientID, filterCriteria) {
        /** @type {?} */
        let customerListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerList')));
        /** @type {?} */
        let restrictions = [];
        if (this.customCriteriaSearch)
            restrictions = this.customCriteriaSearch.getRestriction(filterCriteria);
        else
            restrictions = this.defaultCriteriaSearch.getRestriction(filterCriteria);
        customerListAPI.restrictions = restrictions;
        customerListAPI.clientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(customerListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-checkInFilterCriteria', data);
                observer.next(data['Body'].length != 0);
                observer.complete();
            }));
        }));
    }
    //get customer datas
    /**
     * @param {?} filterCriteria
     * @param {?} _pageInfo
     * @return {?}
     */
    getCustomerList(filterCriteria, _pageInfo) {
        /** @type {?} */
        let restrictions = [];
        if (this.customCriteriaSearch)
            restrictions = this.customCriteriaSearch.getRestriction(filterCriteria);
        else
            restrictions = this.defaultCriteriaSearch.getRestriction(filterCriteria);
        /** @type {?} */
        let customerListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerList')));
        console.debug('customer-service-getCustomerList', filterCriteria, restrictions, _pageInfo);
        customerListAPI.restrictions = restrictions;
        customerListAPI.pageInfo = _pageInfo;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(customerListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-getCustomerList', data);
                /** @type {?} */
                let returnList = new Array();
                /** @type {?} */
                let header = data['Header'];
                /** @type {?} */
                let customerList = data['Body'];
                //set header pageInfo
                // _pageInfo.totalPage = header.PageInfo.totalPage;
                // _pageInfo.totalRec = header.PageInfo.totalRec;
                //set body data
                for (let i = 0; i < customerList.length; i++) {
                    /** @type {?} */
                    let json = customerList[i];
                    /** @type {?} */
                    let isOtherSystem = json.DataSource != 'APP';
                    /** @type {?} */
                    let isFollow = json.IsFollow == 'Y';
                    /** @type {?} */
                    let completeness = json.Completeness;
                    /** @type {?} */
                    let isOverTimeAlert = json.IsOverTimeAlert;
                    /** @type {?} */
                    let event = new CustomerItem(json.ClientID, json.FirstName, json.LastName, json.Possibility, completeness, isFollow, isOtherSystem, isOverTimeAlert);
                    returnList.push(event);
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} targetDate
     * @param {?} subN
     * @param {?} addN
     * @return {?}
     */
    getCustomerBirthdayList(targetDate, subN, addN) {
        /** @type {?} */
        let customerBirthdayListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerBirthdayList')));
        customerBirthdayListAPI.subN = subN;
        customerBirthdayListAPI.addN = addN;
        customerBirthdayListAPI.targetDate = targetDate;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(customerBirthdayListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-getCustomerBirthdayList', data);
                /** @type {?} */
                let returnList = [];
                // let header = data['Header'];
                /** @type {?} */
                let birthdayList = data['Body'];
                console.log("cusSer: ", birthdayList);
                // //set body data
                for (let i = 0; i < birthdayList.length; i++) {
                    /** @type {?} */
                    let event = new CustomerBirthday(birthdayList[i]['ClientID'], birthdayList[i]['FirstName'], birthdayList[i]['LastName'], birthdayList[i]['BirthdayMonth'], birthdayList[i]['BirthdayDate']);
                    returnList.push(event);
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    getCustomerDetail(clientID) {
        if (StringUtils.isEmpty(clientID)) {
            return of(undefined);
        }
        else {
            /** @type {?} */
            let customerDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerDetail')));
            customerDetailAPI.id = clientID;
            return from(this.dispatcher.dispatch(customerDetailAPI).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                if (resp.Header.status && resp.Body.length > 0)
                    return resp["Body"][0];
                else
                    return null;
            })));
        }
    }
    /**
     * @param {?} items
     * @return {?}
     */
    importContact(items) {
        /** @type {?} */
        let importContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('importContact')));
        console.debug('customer-service-importContact', items);
        importContactAPI.setItems(items);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(importContactAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-importContact', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} customerDetail
     * @return {?}
     */
    validProfile(customerDetail) {
        /** @type {?} */
        let validationResult = new ValidationResult();
        //valid required
        if (StringUtils.isEmpty(customerDetail.lastName))
            validationResult.setErrorMap('lastName', 'required');
        // if (customerProfile.firstName == '')
        //   validationResult.setErrorMap('firstName', 'required');
        //valid format      
        //valid email
        if (customerDetail.emails.length != 0) {
            /** @type {?} */
            let i = 0;
            customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            (email) => {
                if (!email.isEmpty()) {
                    if (!this.isEmailFormat(email.email)) {
                        validationResult.setErrorMap(('email' + i).toString(), 'format');
                    }
                }
                i++;
            }));
        }
        //valid date
        // if(customerProfile.birthday == null) {
        //   validationResult.setErrorMap('birthday', 'date');
        // }
        return validationResult;
    }
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    isEmailFormat(email) {
        /** @type {?} */
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(email);
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    deleteCustomerProfile(clientID) {
        console.log("deleteCustomerProfile", clientID);
        /** @type {?} */
        let deleteAPI = (/** @type {?} */ (this.APIFactory.getAPI('deleteCustomer')));
        deleteAPI.clientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(deleteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-deleteCustomerProfile', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @param {?} pageInfo
     * @return {?}
     */
    getCustomerContactNote(clientID, pageInfo) {
        /** @type {?} */
        let customerContactNoteAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerContactNote')));
        customerContactNoteAPI.setClientID(clientID);
        customerContactNoteAPI.setPageInfo(pageInfo);
        console.debug('customer-service-getCustomerContactNote', customerContactNoteAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(customerContactNoteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-getCustomerContactNote', data);
                /** @type {?} */
                let customerContactNoteList = data['Body'];
                observer.next(customerContactNoteList);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} contactClientID
     * @return {?}
     */
    deleteCustomerContact(contactClientID) {
        console.log("deleteCustomerContact");
        /** @type {?} */
        let deleteCustomerContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('deleteCustomerContactNote')));
        deleteCustomerContactAPI.setContactClientID(contactClientID);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(deleteCustomerContactAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-editCustomerContact', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    getCustomerContactTel(clientID) {
        /** @type {?} */
        let customerTelAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerTel')));
        customerTelAPI.setClientID(clientID);
        console.debug('customer-service-getCustomerContactTel', customerTelAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(customerTelAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-getCustomerContactTel response', data);
                /** @type {?} */
                let returnCustomerTel = new Array();
                /** @type {?} */
                let customerTelList = data['Body'];
                customerTelList.map((/**
                 * @param {?} tel
                 * @return {?}
                 */
                tel => new CustomerTel(tel.ClientID, this.profileCodeService.convertCode2Text('Customer_TelType', tel.TelType), tel.Tel, tel.DataSource))).forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    returnCustomerTel.push(element);
                }));
                observer.next(returnCustomerTel);
                observer.complete();
            }));
        }));
    }
}
CustomerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CustomerService.ctorParameters = () => [
    { type: APIDispatch },
    { type: APIFactory },
    { type: ProfileCodeService },
    { type: DefaultCustomerCriteriaSearch },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerCriteriaSearchToken,] }] }
];
/** @nocollapse */ CustomerService.ngInjectableDef = i0.defineInjectable({ factory: function CustomerService_Factory() { return new CustomerService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.ProfileCodeService), i0.inject(i2.DefaultCustomerCriteriaSearch), i0.inject(i3.customerCriteriaSearchToken, 8)); }, token: CustomerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype._isFirstTime;
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype.defaultCriteriaSearch;
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype.customCriteriaSearch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUF5QixnQkFBZ0IsRUFBRSxXQUFXLEVBQWtCLE1BQU0sa0JBQWtCLENBQUM7QUFDckosT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUs1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWWxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOzs7OztBQUk1RyxNQUFNOzs7Ozs7OztJQU1KLFlBQ1UsVUFBdUIsRUFDdkIsVUFBc0IsRUFDdEIsa0JBQXNDLEVBQ3RDLHFCQUFvRCxFQUNILG9CQUFvQztRQUpyRixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywwQkFBcUIsR0FBckIscUJBQXFCLENBQStCO1FBQ0gseUJBQW9CLEdBQXBC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QUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzlLLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNqQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7OztZQXZhRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQTVCb0IsV0FBVztZQUF2QixVQUFVO1lBQWUsa0JBQWtCO1lBeUIzQyw2QkFBNkI7NENBZWpDLFFBQVEsWUFBSSxNQUFNLFNBQUMsMkJBQTJCOzs7Ozs7OztJQVJqRCx1Q0FBNEI7Ozs7O0lBSTFCLHFDQUErQjs7Ozs7SUFDL0IscUNBQThCOzs7OztJQUM5Qiw2Q0FBOEM7Ozs7O0lBQzlDLGdEQUE0RDs7Ozs7SUFDNUQsK0NBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJRmFjdG9yeSwgQVBJRGlzcGF0Y2gsIFByb2ZpbGVDb2RlU2VydmljZSwgQ29udGFjdEl0ZW0sIFBhZ2VJbmZvLCBWYWxpZGF0aW9uUmVzdWx0LCBTdHJpbmdVdGlscywgRXh0RGF0YVByb2Nlc3MgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21lckxpc3RBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJMaXN0QVBJJztcbmltcG9ydCB7IEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyQmlydGhkYXlMaXN0QVBJJztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRGV0YWlsQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyQ29udGFjdE5vdGVBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJDb250YWN0Tm90ZUFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckl0ZW0gfSBmcm9tICcuL21vZGVsL0N1c3RvbWVySXRlbSc7XG5pbXBvcnQgeyBDdXN0b21lckFsZXJ0SXRlbSB9IGZyb20gJy4vbW9kZWwvQ3VzdG9tZXJBbGVydEl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJUZWwgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyVGVsJztcbmltcG9ydCB7IEN1c3RvbWVyVGVsQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyVGVsQVBJJztcbmltcG9ydCB7IEltcG9ydENvbnRhY3RBUEkgfSBmcm9tICcuLi9hcGkvSW1wb3J0Q29udGFjdEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckRlbGV0ZUNvbnRhY3ROb3RlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRGVsZXRlQ29udGFjdE5vdGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmVhbi9jdXN0b21lci1maWx0ZXItY3JpdGVyaWEnO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZWxldGVBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJEZWxldGVBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJBdXRvRGVsZXRlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyQXV0b0RlbGV0ZUFQSSc7XG5pbXBvcnQgeyBDdXN0b21lclNhdmVQcmVzZXRBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJTYXZlUHJlc2V0QVBJJztcbmltcG9ydCB7IEN1c3RvbWVyR2V0UHJlc2V0QVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyR2V0ZVByZXNldEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lclVwZGF0ZUZvbGxvd0FQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lclVwZGF0ZUZvbGxvd0FQSSc7XG5pbXBvcnQgeyBDdXN0b21lckZpbHRlclByZXNldCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmVhbi9jdXN0b21lci1maWx0ZXItcHJlc2V0JztcbmltcG9ydCB7IEN1c3RvbWVyQmlydGhkYXkgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyQmlydGhkYXknO1xuaW1wb3J0IHsgRGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJIH0gZnJvbSAnLi4vYXBpL0Rhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSc7XG5pbXBvcnQgeyBjdXN0b21lckNyaXRlcmlhU2VhcmNoVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgQ3JpdGVyaWFTZWFyY2ggfSBmcm9tICcuLi9pbnRlcmZhY2UvQ3JpdGVyaWFTZWFyY2gnO1xuaW1wb3J0IHsgRGVmYXVsdEN1c3RvbWVyQ3JpdGVyaWFTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL2N1c3RvbWVyLWZpbHRlci9EZWZhdWx0Q3VzdG9tZXJDcml0ZXJpYVNlYXJjaCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlcnZpY2Uge1xuXG4gIC8vaXMgZmlyc3QgdGltZSB1c2UgY3VzdG9tZXIgZnVuY3Rpb25cbiAgcHJpdmF0ZSBfaXNGaXJzdFRpbWUgPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCxcbiAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGRlZmF1bHRDcml0ZXJpYVNlYXJjaDogRGVmYXVsdEN1c3RvbWVyQ3JpdGVyaWFTZWFyY2gsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lckNyaXRlcmlhU2VhcmNoVG9rZW4pIHByaXZhdGUgY3VzdG9tQ3JpdGVyaWFTZWFyY2g6IENyaXRlcmlhU2VhcmNoXG4gICkge1xuICAgIC8vcmVnaXN0ZXIgYXBpXG4gIH1cblxuICBpc0ZpcnN0VGltZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5faXNGaXJzdFRpbWUpIHtcbiAgICAgIHRoaXMuX2lzRmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNGaXJzdFRpbWU7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgdXBkYXRlTWVzc2FnZVRvUmVhZChtZXNzYWdlVHlwZTogc3RyaW5nLCBtZXNzYWdlRGF0YUNhdGVnb3J5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBkYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEk6IERhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSA9IDxEYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlRGFzaGJvYXJkVG9SZWFkJyk7XG4gICAgZGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJLnNldE1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKTtcbiAgICBkYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEkuc2V0TWVzc2FnZURhdGFDYXRlZ29yeShtZXNzYWdlRGF0YUNhdGVnb3J5KTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChkYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2Rhc2hib2FyZC1zZXJ2aWNlLXVwZGF0ZU1lc3NhZ2VUb1JlYWQnLCBkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldE92ZXJUaW1lQ3VzdG9tZXJMaXN0KGNsaWVudElEKTogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4+IHtcbiAgICBsZXQgY3VzdG9tZXJPdmVyVGltZUFQSTogQ3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEkgPSA8Q3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJPdmVyVGltZScpO1xuXG4gICAgY3VzdG9tZXJPdmVyVGltZUFQSS5zZXRDbGllbnRJRChjbGllbnRJRCk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJPdmVyVGltZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRPdmVyVGltZUxpc3QnLCBkYXRhKTtcblxuICAgICAgICBsZXQgcmV0dXJuTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4oKTtcblxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBkYXRhWydCb2R5J107XG4gICAgICAgIC8vc2V0IGJvZHkgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1tpXTtcblxuICAgICAgICAgIGxldCBhcmdzID0gSlNPTi5wYXJzZShtZXNzYWdlWydBcmd1bWVudHMnXSk7XG4gICAgICAgICAgbGV0IGN1c3RvbWVyTGlzdCA9IGFyZ3NbJ2N1c3RvbWVycyddO1xuXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXN0b21lckxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21lckFsZXJ0SXRlbShjdXN0b21lckxpc3Rbal0uaWQsIGN1c3RvbWVyTGlzdFtqXS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXV0b0RlbGV0ZUN1c3RvbWVyTGlzdChjbGllbnRJRCk6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJBbGVydEl0ZW0+PiB7XG4gICAgbGV0IGN1c3RvbWVyRGVsZXRlQVBJOiBDdXN0b21lckF1dG9EZWxldGVBUEkgPSA8Q3VzdG9tZXJBdXRvRGVsZXRlQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyQXV0b0RlbGV0ZScpO1xuXG4gICAgY3VzdG9tZXJEZWxldGVBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyRGVsZXRlQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0QXV0b0RlbGV0ZUN1c3RvbWVyTGlzdCcsIGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVyQWxlcnRJdGVtPigpO1xuXG4gICAgICAgIGxldCBtZXNzYWdlcyA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgLy9zZXQgYm9keSBkYXRhXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzW2ldO1xuXG4gICAgICAgICAgbGV0IGFyZ3MgPSBKU09OLnBhcnNlKG1lc3NhZ2VbJ0FyZ3VtZW50cyddKTtcbiAgICAgICAgICBsZXQgY3VzdG9tZXJMaXN0ID0gYXJnc1snY3VzdG9tZXJzJ107XG5cbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1c3RvbWVyTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbWVyQWxlcnRJdGVtKGN1c3RvbWVyTGlzdFtqXS5pZCwgY3VzdG9tZXJMaXN0W2pdLm5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuTGlzdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cyhjbGllbnRJRCwgaXNGb2xsb3cpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCB1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1czogQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEkgPSA8Q3VzdG9tZXJVcGRhdGVGb2xsb3dBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMnKTtcbiAgICB1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cy5zZXRDbGllbnQoY2xpZW50SUQpO1xuICAgIHVwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzLnNldElzRm9sbG93KGlzRm9sbG93KTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS11cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cycsIGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0RmlsdGVyQ3JpdGVyaWFQcmVzZXQoKTogT2JzZXJ2YWJsZTxDdXN0b21lckZpbHRlclByZXNldD4ge1xuICAgIGxldCBnZXRGaWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJHZXRQcmVzZXRBUEkgPSA8Q3VzdG9tZXJHZXRQcmVzZXRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJGaWx0ZXJQcmVzZXQnKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRGaWx0ZXJDcml0ZXJpYSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRGaWx0ZXJDcml0ZXJpYScsIGRhdGEpO1xuXG4gICAgICAgIGxldCBzZXR0aW5nQXJyYXkgPSBkYXRhWydCb2R5J107XG5cbiAgICAgICAgbGV0IHByZXNldDogQ3VzdG9tZXJGaWx0ZXJQcmVzZXQ7XG4gICAgICAgIGlmIChzZXR0aW5nQXJyYXkubGVuZ3RoID0gITApIHtcbiAgICAgICAgICBwcmVzZXQgPSBKU09OLnBhcnNlKHNldHRpbmdBcnJheVswXS5TZXR0aW5nVmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0RmlsdGVyQ3JpdGVyaWFQcmVzZXQnLCBwcmVzZXQpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQocHJlc2V0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHNhdmVGaWx0ZXJDcml0ZXJpYShmaWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IHNhdmVGaWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJTYXZlUHJlc2V0QVBJID0gPEN1c3RvbWVyU2F2ZVByZXNldEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdzYXZlQ3VzdG9tZXJGaWx0ZXJQcmVzZXQnKTtcblxuICAgIHNhdmVGaWx0ZXJDcml0ZXJpYS5zZXRGaWx0ZXJDcml0ZXJpYShmaWx0ZXJDcml0ZXJpYSk7XG5cblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChzYXZlRmlsdGVyQ3JpdGVyaWEpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2Utc2F2ZUZpbHRlckNyaXRlcmlhJywgZGF0YSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrSW5GaWx0ZXJDcml0ZXJpYShjbGllbnRJRDogc3RyaW5nLCBmaWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG4gICAgbGV0IGN1c3RvbWVyTGlzdEFQSTogQ3VzdG9tZXJMaXN0QVBJID0gPEN1c3RvbWVyTGlzdEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckxpc3QnKTtcbiAgICBsZXQgcmVzdHJpY3Rpb25zID0gW107XG4gICAgaWYgKHRoaXMuY3VzdG9tQ3JpdGVyaWFTZWFyY2gpXG4gICAgICByZXN0cmljdGlvbnMgPSB0aGlzLmN1c3RvbUNyaXRlcmlhU2VhcmNoLmdldFJlc3RyaWN0aW9uKGZpbHRlckNyaXRlcmlhKTtcbiAgICBlbHNlXG4gICAgICByZXN0cmljdGlvbnMgPSB0aGlzLmRlZmF1bHRDcml0ZXJpYVNlYXJjaC5nZXRSZXN0cmljdGlvbihmaWx0ZXJDcml0ZXJpYSk7XG5cblxuICAgIGN1c3RvbWVyTGlzdEFQSS5yZXN0cmljdGlvbnMgPSByZXN0cmljdGlvbnM7XG4gICAgY3VzdG9tZXJMaXN0QVBJLmNsaWVudElEID0gY2xpZW50SUQ7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWNoZWNrSW5GaWx0ZXJDcml0ZXJpYScsIGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnQm9keSddLmxlbmd0aCAhPSAwKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcblxuICB9XG5cbiAgLy9nZXQgY3VzdG9tZXIgZGF0YXNcbiAgZ2V0Q3VzdG9tZXJMaXN0KGZpbHRlckNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhLCBfcGFnZUluZm86IFBhZ2VJbmZvKTogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckl0ZW0+PiB7XG5cbiAgICBsZXQgcmVzdHJpY3Rpb25zID0gW107XG4gICAgaWYgKHRoaXMuY3VzdG9tQ3JpdGVyaWFTZWFyY2gpXG4gICAgICByZXN0cmljdGlvbnMgPSB0aGlzLmN1c3RvbUNyaXRlcmlhU2VhcmNoLmdldFJlc3RyaWN0aW9uKGZpbHRlckNyaXRlcmlhKTtcbiAgICBlbHNlXG4gICAgICByZXN0cmljdGlvbnMgPSB0aGlzLmRlZmF1bHRDcml0ZXJpYVNlYXJjaC5nZXRSZXN0cmljdGlvbihmaWx0ZXJDcml0ZXJpYSk7XG5cbiAgICBsZXQgY3VzdG9tZXJMaXN0QVBJOiBDdXN0b21lckxpc3RBUEkgPSA8Q3VzdG9tZXJMaXN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyTGlzdCcpO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckxpc3QnLCBmaWx0ZXJDcml0ZXJpYSwgcmVzdHJpY3Rpb25zLCBfcGFnZUluZm8pO1xuXG4gICAgY3VzdG9tZXJMaXN0QVBJLnJlc3RyaWN0aW9ucyA9IHJlc3RyaWN0aW9ucztcbiAgICBjdXN0b21lckxpc3RBUEkucGFnZUluZm8gPSBfcGFnZUluZm87XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyTGlzdCcsIGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVySXRlbT4oKTtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRhdGFbJ0hlYWRlciddO1xuICAgICAgICBsZXQgY3VzdG9tZXJMaXN0ID0gZGF0YVsnQm9keSddO1xuXG4gICAgICAgIC8vc2V0IGhlYWRlciBwYWdlSW5mb1xuICAgICAgICAvLyBfcGFnZUluZm8udG90YWxQYWdlID0gaGVhZGVyLlBhZ2VJbmZvLnRvdGFsUGFnZTtcbiAgICAgICAgLy8gX3BhZ2VJbmZvLnRvdGFsUmVjID0gaGVhZGVyLlBhZ2VJbmZvLnRvdGFsUmVjO1xuXG4gICAgICAgIC8vc2V0IGJvZHkgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1c3RvbWVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBqc29uID0gY3VzdG9tZXJMaXN0W2ldO1xuICAgICAgICAgIGxldCBpc090aGVyU3lzdGVtID0ganNvbi5EYXRhU291cmNlICE9ICdBUFAnO1xuICAgICAgICAgIGxldCBpc0ZvbGxvdyA9IGpzb24uSXNGb2xsb3cgPT0gJ1knO1xuICAgICAgICAgIGxldCBjb21wbGV0ZW5lc3MgPSBqc29uLkNvbXBsZXRlbmVzcztcbiAgICAgICAgICBsZXQgaXNPdmVyVGltZUFsZXJ0ID0ganNvbi5Jc092ZXJUaW1lQWxlcnQ7XG5cblxuICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21lckl0ZW0oanNvbi5DbGllbnRJRCwganNvbi5GaXJzdE5hbWUsIGpzb24uTGFzdE5hbWUsIGpzb24uUG9zc2liaWxpdHksIGNvbXBsZXRlbmVzcywgaXNGb2xsb3csIGlzT3RoZXJTeXN0ZW0sIGlzT3ZlclRpbWVBbGVydCk7XG4gICAgICAgICAgcmV0dXJuTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cblxuICBnZXRDdXN0b21lckJpcnRoZGF5TGlzdCh0YXJnZXREYXRlLCBzdWJOLCBhZGROKTogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckJpcnRoZGF5Pj4ge1xuICAgIGxldCBjdXN0b21lckJpcnRoZGF5TGlzdEFQSTogQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkgPSA8Q3VzdG9tZXJCaXJ0aGRheUxpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJCaXJ0aGRheUxpc3QnKTtcbiAgICBjdXN0b21lckJpcnRoZGF5TGlzdEFQSS5zdWJOID0gc3ViTjtcbiAgICBjdXN0b21lckJpcnRoZGF5TGlzdEFQSS5hZGROID0gYWRkTjtcbiAgICBjdXN0b21lckJpcnRoZGF5TGlzdEFQSS50YXJnZXREYXRlID0gdGFyZ2V0RGF0ZTtcblxuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyQmlydGhkYXlMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQmlydGhkYXlMaXN0JywgZGF0YSk7XG5cbiAgICAgICAgbGV0IHJldHVybkxpc3Q6IEFycmF5PEN1c3RvbWVyQmlydGhkYXk+ID0gW107XG4gICAgICAgIC8vIGxldCBoZWFkZXIgPSBkYXRhWydIZWFkZXInXTtcbiAgICAgICAgbGV0IGJpcnRoZGF5TGlzdCA9IGRhdGFbJ0JvZHknXTtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VzU2VyOiBcIiwgYmlydGhkYXlMaXN0KTtcblxuICAgICAgICAvLyAvL3NldCBib2R5IGRhdGFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaXJ0aGRheUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tZXJCaXJ0aGRheShiaXJ0aGRheUxpc3RbaV1bJ0NsaWVudElEJ10sIGJpcnRoZGF5TGlzdFtpXVsnRmlyc3ROYW1lJ10sIGJpcnRoZGF5TGlzdFtpXVsnTGFzdE5hbWUnXSwgYmlydGhkYXlMaXN0W2ldWydCaXJ0aGRheU1vbnRoJ10sIGJpcnRoZGF5TGlzdFtpXVsnQmlydGhkYXlEYXRlJ10pO1xuICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5MaXN0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuXG5cblxuXG4gICAgfSk7XG4gIH1cblxuICBnZXRDdXN0b21lckRldGFpbChjbGllbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShjbGllbnRJRCkpIHtcbiAgICAgIHJldHVybiBvZih1bmRlZmluZWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBjdXN0b21lckRldGFpbEFQSTogQ3VzdG9tZXJEZXRhaWxBUEkgPSA8Q3VzdG9tZXJEZXRhaWxBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJEZXRhaWwnKTtcbiAgICAgIGN1c3RvbWVyRGV0YWlsQVBJLmlkID0gY2xpZW50SUQ7XG5cbiAgICAgIHJldHVybiBmcm9tKHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjdXN0b21lckRldGFpbEFQSSkudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AuSGVhZGVyLnN0YXR1cyAmJiByZXNwLkJvZHkubGVuZ3RoID4gMClcbiAgICAgICAgICByZXR1cm4gcmVzcFtcIkJvZHlcIl1bMF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBpbXBvcnRDb250YWN0KGl0ZW1zOiBBcnJheTxDb250YWN0SXRlbT4pOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCBpbXBvcnRDb250YWN0QVBJOiBJbXBvcnRDb250YWN0QVBJID0gPEltcG9ydENvbnRhY3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnaW1wb3J0Q29udGFjdCcpO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1pbXBvcnRDb250YWN0JywgaXRlbXMpO1xuICAgIGltcG9ydENvbnRhY3RBUEkuc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGltcG9ydENvbnRhY3RBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWltcG9ydENvbnRhY3QnLCBkYXRhKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIHZhbGlkUHJvZmlsZShjdXN0b21lckRldGFpbDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSBuZXcgVmFsaWRhdGlvblJlc3VsdCgpO1xuXG4gICAgLy92YWxpZCByZXF1aXJlZFxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmxhc3ROYW1lKSlcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2xhc3ROYW1lJywgJ3JlcXVpcmVkJyk7XG4gICAgLy8gaWYgKGN1c3RvbWVyUHJvZmlsZS5maXJzdE5hbWUgPT0gJycpXG4gICAgLy8gICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdmaXJzdE5hbWUnLCAncmVxdWlyZWQnKTtcblxuICAgIC8vdmFsaWQgZm9ybWF0ICAgICAgXG5cbiAgICAvL3ZhbGlkIGVtYWlsXG4gICAgaWYgKGN1c3RvbWVyRGV0YWlsLmVtYWlscy5sZW5ndGggIT0gMCkge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY3VzdG9tZXJEZXRhaWwuZW1haWxzLmZvckVhY2goKGVtYWlsKSA9PiB7XG4gICAgICAgIGlmICghZW1haWwuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzRW1haWxGb3JtYXQoZW1haWwuZW1haWwpKSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCgnZW1haWwnICsgaSkudG9TdHJpbmcoKSwgJ2Zvcm1hdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vdmFsaWQgZGF0ZVxuICAgIC8vIGlmKGN1c3RvbWVyUHJvZmlsZS5iaXJ0aGRheSA9PSBudWxsKSB7XG4gICAgLy8gICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdiaXJ0aGRheScsICdkYXRlJyk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWxGb3JtYXQoZW1haWwpIHtcbiAgICBsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyk7XG5cbiAgICByZXR1cm4gcmVnZXhwLnRlc3QoZW1haWwpO1xuICB9XG5cblxuXG4gIGRlbGV0ZUN1c3RvbWVyUHJvZmlsZShjbGllbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZUN1c3RvbWVyUHJvZmlsZVwiLCBjbGllbnRJRCk7XG4gICAgbGV0IGRlbGV0ZUFQSTogQ3VzdG9tZXJEZWxldGVBUEkgPSA8Q3VzdG9tZXJEZWxldGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZGVsZXRlQ3VzdG9tZXInKTtcbiAgICBkZWxldGVBUEkuY2xpZW50SUQgPSBjbGllbnRJRDtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChkZWxldGVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZGVsZXRlQ3VzdG9tZXJQcm9maWxlJywgZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEN1c3RvbWVyQ29udGFjdE5vdGUoY2xpZW50SUQ6IHN0cmluZywgcGFnZUluZm86IFBhZ2VJbmZvKTogT2JzZXJ2YWJsZTxBcnJheTxhbnk+PiB7XG4gICAgbGV0IGN1c3RvbWVyQ29udGFjdE5vdGVBUEk6IEN1c3RvbWVyQ29udGFjdE5vdGVBUEkgPSA8Q3VzdG9tZXJDb250YWN0Tm90ZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckNvbnRhY3ROb3RlJyk7XG5cbiAgICBjdXN0b21lckNvbnRhY3ROb3RlQVBJLnNldENsaWVudElEKGNsaWVudElEKTtcbiAgICBjdXN0b21lckNvbnRhY3ROb3RlQVBJLnNldFBhZ2VJbmZvKHBhZ2VJbmZvKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZScsIGN1c3RvbWVyQ29udGFjdE5vdGVBUEkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjdXN0b21lckNvbnRhY3ROb3RlQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckNvbnRhY3ROb3RlJywgZGF0YSk7XG4gICAgICAgIGxldCBjdXN0b21lckNvbnRhY3ROb3RlTGlzdCA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChjdXN0b21lckNvbnRhY3ROb3RlTGlzdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuXG4gIGRlbGV0ZUN1c3RvbWVyQ29udGFjdChjb250YWN0Q2xpZW50SUQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVDdXN0b21lckNvbnRhY3RcIik7XG4gICAgbGV0IGRlbGV0ZUN1c3RvbWVyQ29udGFjdEFQSTogQ3VzdG9tZXJEZWxldGVDb250YWN0Tm90ZUFQSSA9IDxDdXN0b21lckRlbGV0ZUNvbnRhY3ROb3RlQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2RlbGV0ZUN1c3RvbWVyQ29udGFjdE5vdGUnKTtcbiAgICBkZWxldGVDdXN0b21lckNvbnRhY3RBUEkuc2V0Q29udGFjdENsaWVudElEKGNvbnRhY3RDbGllbnRJRCk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZGVsZXRlQ3VzdG9tZXJDb250YWN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWVkaXRDdXN0b21lckNvbnRhY3QnLCBkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEN1c3RvbWVyQ29udGFjdFRlbChjbGllbnRJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lclRlbD4+IHtcbiAgICBsZXQgY3VzdG9tZXJUZWxBUEk6IEN1c3RvbWVyVGVsQVBJID0gPEN1c3RvbWVyVGVsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyVGVsJyk7XG5cbiAgICBjdXN0b21lclRlbEFQSS5zZXRDbGllbnRJRChjbGllbnRJRCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQ29udGFjdFRlbCcsIGN1c3RvbWVyVGVsQVBJKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJUZWxBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQ29udGFjdFRlbCByZXNwb25zZScsIGRhdGEpO1xuICAgICAgICBsZXQgcmV0dXJuQ3VzdG9tZXJUZWw6IEFycmF5PEN1c3RvbWVyVGVsPiA9IG5ldyBBcnJheTxDdXN0b21lclRlbD4oKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyVGVsTGlzdCA9IGRhdGFbJ0JvZHknXTtcblxuICAgICAgICBjdXN0b21lclRlbExpc3QubWFwKHRlbCA9PiBuZXcgQ3VzdG9tZXJUZWwodGVsLkNsaWVudElELCB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9UZWxUeXBlJywgdGVsLlRlbFR5cGUpLCB0ZWwuVGVsLCB0ZWwuRGF0YVNvdXJjZSkpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuQ3VzdG9tZXJUZWwucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5DdXN0b21lclRlbCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxufVxuIl19