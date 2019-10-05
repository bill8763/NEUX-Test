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
var CustomerService = /** @class */ (function () {
    function CustomerService(dispatcher, APIFactory, profileCodeService, defaultCriteriaSearch, customCriteriaSearch) {
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
    CustomerService.prototype.isFirstTime = /**
     * @return {?}
     */
    function () {
        if (this._isFirstTime) {
            this._isFirstTime = false;
            return true;
        }
        else {
            return this._isFirstTime;
        }
    };
    /**
     * @param {?} messageType
     * @param {?} messageDataCategory
     * @return {?}
     */
    CustomerService.prototype.updateMessageToRead = /**
     * @param {?} messageType
     * @param {?} messageDataCategory
     * @return {?}
     */
    function (messageType, messageDataCategory) {
        var _this = this;
        /** @type {?} */
        var dashboardUpdateToReadAPI = (/** @type {?} */ (this.APIFactory.getAPI('updateDashboardToRead')));
        dashboardUpdateToReadAPI.setMessageType(messageType);
        dashboardUpdateToReadAPI.setMessageDataCategory(messageDataCategory);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(dashboardUpdateToReadAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('dashboard-service-updateMessageToRead', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomerService.prototype.getOverTimeCustomerList = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this = this;
        /** @type {?} */
        var customerOverTimeAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerOverTime')));
        customerOverTimeAPI.setClientID(clientID);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(customerOverTimeAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-getOverTimeList', data);
                /** @type {?} */
                var returnList = new Array();
                /** @type {?} */
                var messages = data['Body'];
                //set body data
                for (var i = 0; i < messages.length; i++) {
                    /** @type {?} */
                    var message = messages[i];
                    /** @type {?} */
                    var args = JSON.parse(message['Arguments']);
                    /** @type {?} */
                    var customerList = args['customers'];
                    for (var j = 0; j < customerList.length; j++) {
                        /** @type {?} */
                        var event_1 = new CustomerAlertItem(customerList[j].id, customerList[j].name);
                        returnList.push(event_1);
                    }
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomerService.prototype.getAutoDeleteCustomerList = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this = this;
        /** @type {?} */
        var customerDeleteAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerAutoDelete')));
        customerDeleteAPI.setClientID(clientID);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(customerDeleteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log('customer-service-getAutoDeleteCustomerList', data);
                /** @type {?} */
                var returnList = new Array();
                /** @type {?} */
                var messages = data['Body'];
                //set body data
                for (var i = 0; i < messages.length; i++) {
                    /** @type {?} */
                    var message = messages[i];
                    /** @type {?} */
                    var args = JSON.parse(message['Arguments']);
                    /** @type {?} */
                    var customerList = args['customers'];
                    for (var j = 0; j < customerList.length; j++) {
                        /** @type {?} */
                        var event_2 = new CustomerAlertItem(customerList[j].id, customerList[j].name);
                        returnList.push(event_2);
                    }
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @param {?} isFollow
     * @return {?}
     */
    CustomerService.prototype.updateCustomerFollowStatus = /**
     * @param {?} clientID
     * @param {?} isFollow
     * @return {?}
     */
    function (clientID, isFollow) {
        var _this = this;
        /** @type {?} */
        var updateCustomerFollowStatus = (/** @type {?} */ (this.APIFactory.getAPI('updateCustomerFollowStatus')));
        updateCustomerFollowStatus.setClient(clientID);
        updateCustomerFollowStatus.setIsFollow(isFollow);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(updateCustomerFollowStatus).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-updateCustomerFollowStatus', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @return {?}
     */
    CustomerService.prototype.getFilterCriteriaPreset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var getFilterCriteria = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerFilterPreset')));
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(getFilterCriteria).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-getFilterCriteria', data);
                /** @type {?} */
                var settingArray = data['Body'];
                /** @type {?} */
                var preset;
                if (settingArray.length = !0) {
                    preset = JSON.parse(settingArray[0].SettingVal);
                }
                console.debug('customer-service-getFilterCriteriaPreset', preset);
                observer.next(preset);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} filterCriteria
     * @return {?}
     */
    CustomerService.prototype.saveFilterCriteria = /**
     * @param {?} filterCriteria
     * @return {?}
     */
    function (filterCriteria) {
        var _this = this;
        /** @type {?} */
        var saveFilterCriteria = (/** @type {?} */ (this.APIFactory.getAPI('saveCustomerFilterPreset')));
        saveFilterCriteria.setFilterCriteria(filterCriteria);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(saveFilterCriteria).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-saveFilterCriteria', data);
                observer.next(data);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @param {?} filterCriteria
     * @return {?}
     */
    CustomerService.prototype.checkInFilterCriteria = /**
     * @param {?} clientID
     * @param {?} filterCriteria
     * @return {?}
     */
    function (clientID, filterCriteria) {
        var _this = this;
        /** @type {?} */
        var customerListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerList')));
        /** @type {?} */
        var restrictions = [];
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
        function (observer) {
            _this.dispatcher.dispatch(customerListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-checkInFilterCriteria', data);
                observer.next(data['Body'].length != 0);
                observer.complete();
            }));
        }));
    };
    //get customer datas
    //get customer datas
    /**
     * @param {?} filterCriteria
     * @param {?} _pageInfo
     * @return {?}
     */
    CustomerService.prototype.getCustomerList = 
    //get customer datas
    /**
     * @param {?} filterCriteria
     * @param {?} _pageInfo
     * @return {?}
     */
    function (filterCriteria, _pageInfo) {
        var _this = this;
        /** @type {?} */
        var restrictions = [];
        if (this.customCriteriaSearch)
            restrictions = this.customCriteriaSearch.getRestriction(filterCriteria);
        else
            restrictions = this.defaultCriteriaSearch.getRestriction(filterCriteria);
        /** @type {?} */
        var customerListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerList')));
        console.debug('customer-service-getCustomerList', filterCriteria, restrictions, _pageInfo);
        customerListAPI.restrictions = restrictions;
        customerListAPI.pageInfo = _pageInfo;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(customerListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-getCustomerList', data);
                /** @type {?} */
                var returnList = new Array();
                /** @type {?} */
                var header = data['Header'];
                /** @type {?} */
                var customerList = data['Body'];
                //set header pageInfo
                // _pageInfo.totalPage = header.PageInfo.totalPage;
                // _pageInfo.totalRec = header.PageInfo.totalRec;
                //set body data
                for (var i = 0; i < customerList.length; i++) {
                    /** @type {?} */
                    var json = customerList[i];
                    /** @type {?} */
                    var isOtherSystem = json.DataSource != 'APP';
                    /** @type {?} */
                    var isFollow = json.IsFollow == 'Y';
                    /** @type {?} */
                    var completeness = json.Completeness;
                    /** @type {?} */
                    var isOverTimeAlert = json.IsOverTimeAlert;
                    /** @type {?} */
                    var event_3 = new CustomerItem(json.ClientID, json.FirstName, json.LastName, json.Possibility, completeness, isFollow, isOtherSystem, isOverTimeAlert);
                    returnList.push(event_3);
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} targetDate
     * @param {?} subN
     * @param {?} addN
     * @return {?}
     */
    CustomerService.prototype.getCustomerBirthdayList = /**
     * @param {?} targetDate
     * @param {?} subN
     * @param {?} addN
     * @return {?}
     */
    function (targetDate, subN, addN) {
        var _this = this;
        /** @type {?} */
        var customerBirthdayListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerBirthdayList')));
        customerBirthdayListAPI.subN = subN;
        customerBirthdayListAPI.addN = addN;
        customerBirthdayListAPI.targetDate = targetDate;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(customerBirthdayListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-getCustomerBirthdayList', data);
                /** @type {?} */
                var returnList = [];
                // let header = data['Header'];
                /** @type {?} */
                var birthdayList = data['Body'];
                console.log("cusSer: ", birthdayList);
                // //set body data
                for (var i = 0; i < birthdayList.length; i++) {
                    /** @type {?} */
                    var event_4 = new CustomerBirthday(birthdayList[i]['ClientID'], birthdayList[i]['FirstName'], birthdayList[i]['LastName'], birthdayList[i]['BirthdayMonth'], birthdayList[i]['BirthdayDate']);
                    returnList.push(event_4);
                }
                observer.next(returnList);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomerService.prototype.getCustomerDetail = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        if (StringUtils.isEmpty(clientID)) {
            return of(undefined);
        }
        else {
            /** @type {?} */
            var customerDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerDetail')));
            customerDetailAPI.id = clientID;
            return from(this.dispatcher.dispatch(customerDetailAPI).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                if (resp.Header.status && resp.Body.length > 0)
                    return resp["Body"][0];
                else
                    return null;
            })));
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    CustomerService.prototype.importContact = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        /** @type {?} */
        var importContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('importContact')));
        console.debug('customer-service-importContact', items);
        importContactAPI.setItems(items);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(importContactAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-importContact', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} customerDetail
     * @return {?}
     */
    CustomerService.prototype.validProfile = /**
     * @param {?} customerDetail
     * @return {?}
     */
    function (customerDetail) {
        var _this = this;
        /** @type {?} */
        var validationResult = new ValidationResult();
        //valid required
        if (StringUtils.isEmpty(customerDetail.lastName))
            validationResult.setErrorMap('lastName', 'required');
        // if (customerProfile.firstName == '')
        //   validationResult.setErrorMap('firstName', 'required');
        //valid format      
        //valid email
        if (customerDetail.emails.length != 0) {
            /** @type {?} */
            var i_1 = 0;
            customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            function (email) {
                if (!email.isEmpty()) {
                    if (!_this.isEmailFormat(email.email)) {
                        validationResult.setErrorMap(('email' + i_1).toString(), 'format');
                    }
                }
                i_1++;
            }));
        }
        //valid date
        // if(customerProfile.birthday == null) {
        //   validationResult.setErrorMap('birthday', 'date');
        // }
        return validationResult;
    };
    /**
     * @private
     * @param {?} email
     * @return {?}
     */
    CustomerService.prototype.isEmailFormat = /**
     * @private
     * @param {?} email
     * @return {?}
     */
    function (email) {
        /** @type {?} */
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(email);
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomerService.prototype.deleteCustomerProfile = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this = this;
        console.log("deleteCustomerProfile", clientID);
        /** @type {?} */
        var deleteAPI = (/** @type {?} */ (this.APIFactory.getAPI('deleteCustomer')));
        deleteAPI.clientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(deleteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-deleteCustomerProfile', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @param {?} pageInfo
     * @return {?}
     */
    CustomerService.prototype.getCustomerContactNote = /**
     * @param {?} clientID
     * @param {?} pageInfo
     * @return {?}
     */
    function (clientID, pageInfo) {
        var _this = this;
        /** @type {?} */
        var customerContactNoteAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerContactNote')));
        customerContactNoteAPI.setClientID(clientID);
        customerContactNoteAPI.setPageInfo(pageInfo);
        console.debug('customer-service-getCustomerContactNote', customerContactNoteAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(customerContactNoteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-getCustomerContactNote', data);
                /** @type {?} */
                var customerContactNoteList = data['Body'];
                observer.next(customerContactNoteList);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} contactClientID
     * @return {?}
     */
    CustomerService.prototype.deleteCustomerContact = /**
     * @param {?} contactClientID
     * @return {?}
     */
    function (contactClientID) {
        var _this = this;
        console.log("deleteCustomerContact");
        /** @type {?} */
        var deleteCustomerContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('deleteCustomerContactNote')));
        deleteCustomerContactAPI.setContactClientID(contactClientID);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(deleteCustomerContactAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-editCustomerContact', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomerService.prototype.getCustomerContactTel = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this = this;
        /** @type {?} */
        var customerTelAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerTel')));
        customerTelAPI.setClientID(clientID);
        console.debug('customer-service-getCustomerContactTel', customerTelAPI);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(customerTelAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-getCustomerContactTel response', data);
                /** @type {?} */
                var returnCustomerTel = new Array();
                /** @type {?} */
                var customerTelList = data['Body'];
                customerTelList.map((/**
                 * @param {?} tel
                 * @return {?}
                 */
                function (tel) { return new CustomerTel(tel.ClientID, _this.profileCodeService.convertCode2Text('Customer_TelType', tel.TelType), tel.Tel, tel.DataSource); })).forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    returnCustomerTel.push(element);
                }));
                observer.next(returnCustomerTel);
                observer.complete();
            }));
        }));
    };
    CustomerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CustomerService.ctorParameters = function () { return [
        { type: APIDispatch },
        { type: APIFactory },
        { type: ProfileCodeService },
        { type: DefaultCustomerCriteriaSearch },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerCriteriaSearchToken,] }] }
    ]; };
    /** @nocollapse */ CustomerService.ngInjectableDef = i0.defineInjectable({ factory: function CustomerService_Factory() { return new CustomerService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.ProfileCodeService), i0.inject(i2.DefaultCustomerCriteriaSearch), i0.inject(i3.customerCriteriaSearchToken, 8)); }, token: CustomerService, providedIn: "root" });
    return CustomerService;
}());
export { CustomerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUF5QixnQkFBZ0IsRUFBRSxXQUFXLEVBQWtCLE1BQU0sa0JBQWtCLENBQUM7QUFDckosT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUs1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWWxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOzs7OztBQUM1RztJQVNFLHlCQUNVLFVBQXVCLEVBQ3ZCLFVBQXNCLEVBQ3RCLGtCQUFzQyxFQUN0QyxxQkFBb0QsRUFDSCxvQkFBb0M7UUFKckYsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUErQjtRQUNILHlCQUFvQixHQUFwQixvQkFBb0IsQ0FB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QUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBakksQ0FBaUksRUFBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxPQUFPO29CQUMzSyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsRUFBQyxDQUFDO2dCQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDakMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBQyxDQUFBO1FBQ0osQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOztnQkF2YUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQTVCb0IsV0FBVztnQkFBdkIsVUFBVTtnQkFBZSxrQkFBa0I7Z0JBeUIzQyw2QkFBNkI7Z0RBZWpDLFFBQVEsWUFBSSxNQUFNLFNBQUMsMkJBQTJCOzs7MEJBeENuRDtDQW1jQyxBQXphRCxJQXlhQztTQXRhWSxlQUFlOzs7Ozs7SUFHMUIsdUNBQTRCOzs7OztJQUkxQixxQ0FBK0I7Ozs7O0lBQy9CLHFDQUE4Qjs7Ozs7SUFDOUIsNkNBQThDOzs7OztJQUM5QyxnREFBNEQ7Ozs7O0lBQzVELCtDQUE2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUZhY3RvcnksIEFQSURpc3BhdGNoLCBQcm9maWxlQ29kZVNlcnZpY2UsIENvbnRhY3RJdGVtLCBQYWdlSW5mbywgVmFsaWRhdGlvblJlc3VsdCwgU3RyaW5nVXRpbHMsIEV4dERhdGFQcm9jZXNzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tZXJMaXN0QVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyTGlzdEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckJpcnRoZGF5TGlzdEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckJpcnRoZGF5TGlzdEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckRldGFpbEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckNvbnRhY3ROb3RlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyQ29udGFjdE5vdGVBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJJdGVtIH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lckl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJBbGVydEl0ZW0gfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyQWxlcnRJdGVtJztcbmltcG9ydCB7IEN1c3RvbWVyVGVsIH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lclRlbCc7XG5pbXBvcnQgeyBDdXN0b21lclRlbEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lclRlbEFQSSc7XG5pbXBvcnQgeyBJbXBvcnRDb250YWN0QVBJIH0gZnJvbSAnLi4vYXBpL0ltcG9ydENvbnRhY3RBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZWxldGVDb250YWN0Tm90ZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckRlbGV0ZUNvbnRhY3ROb3RlJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi9jb21wb25lbnRzL2JlYW4vY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhJztcbmltcG9ydCB7IEN1c3RvbWVyRGVsZXRlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRGVsZXRlQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyRWRpdE92ZXJ0aW1lQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRWRpdE92ZXJ0aW1lQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyQXV0b0RlbGV0ZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckF1dG9EZWxldGVBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJTYXZlUHJlc2V0QVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyU2F2ZVByZXNldEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckdldFByZXNldEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckdldGVQcmVzZXRBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJQcmVzZXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2JlYW4vY3VzdG9tZXItZmlsdGVyLXByZXNldCc7XG5pbXBvcnQgeyBDdXN0b21lckJpcnRoZGF5IH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lckJpcnRoZGF5JztcbmltcG9ydCB7IERhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSB9IGZyb20gJy4uL2FwaS9EYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEknO1xuaW1wb3J0IHsgY3VzdG9tZXJDcml0ZXJpYVNlYXJjaFRva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IENyaXRlcmlhU2VhcmNoIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0NyaXRlcmlhU2VhcmNoJztcbmltcG9ydCB7IERlZmF1bHRDdXN0b21lckNyaXRlcmlhU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21lci1maWx0ZXIvRGVmYXVsdEN1c3RvbWVyQ3JpdGVyaWFTZWFyY2gnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZXJ2aWNlIHtcblxuICAvL2lzIGZpcnN0IHRpbWUgdXNlIGN1c3RvbWVyIGZ1bmN0aW9uXG4gIHByaXZhdGUgX2lzRmlyc3RUaW1lID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q3JpdGVyaWFTZWFyY2g6IERlZmF1bHRDdXN0b21lckNyaXRlcmlhU2VhcmNoLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tZXJDcml0ZXJpYVNlYXJjaFRva2VuKSBwcml2YXRlIGN1c3RvbUNyaXRlcmlhU2VhcmNoOiBDcml0ZXJpYVNlYXJjaFxuICApIHtcbiAgICAvL3JlZ2lzdGVyIGFwaVxuICB9XG5cbiAgaXNGaXJzdFRpbWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2lzRmlyc3RUaW1lKSB7XG4gICAgICB0aGlzLl9pc0ZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzRmlyc3RUaW1lO1xuICAgIH1cblxuICB9XG5cblxuXG4gIHVwZGF0ZU1lc3NhZ2VUb1JlYWQobWVzc2FnZVR5cGU6IHN0cmluZywgbWVzc2FnZURhdGFDYXRlZ29yeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgZGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJOiBEYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEkgPSA8RGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ3VwZGF0ZURhc2hib2FyZFRvUmVhZCcpO1xuICAgIGRhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSS5zZXRNZXNzYWdlVHlwZShtZXNzYWdlVHlwZSk7XG4gICAgZGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJLnNldE1lc3NhZ2VEYXRhQ2F0ZWdvcnkobWVzc2FnZURhdGFDYXRlZ29yeSk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdkYXNoYm9hcmQtc2VydmljZS11cGRhdGVNZXNzYWdlVG9SZWFkJywgZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRPdmVyVGltZUN1c3RvbWVyTGlzdChjbGllbnRJRCk6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJBbGVydEl0ZW0+PiB7XG4gICAgbGV0IGN1c3RvbWVyT3ZlclRpbWVBUEk6IEN1c3RvbWVyRWRpdE92ZXJ0aW1lQVBJID0gPEN1c3RvbWVyRWRpdE92ZXJ0aW1lQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyT3ZlclRpbWUnKTtcblxuICAgIGN1c3RvbWVyT3ZlclRpbWVBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyT3ZlclRpbWVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0T3ZlclRpbWVMaXN0JywgZGF0YSk7XG5cbiAgICAgICAgbGV0IHJldHVybkxpc3QgPSBuZXcgQXJyYXk8Q3VzdG9tZXJBbGVydEl0ZW0+KCk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VzID0gZGF0YVsnQm9keSddO1xuICAgICAgICAvL3NldCBib2R5IGRhdGFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gbWVzc2FnZXNbaV07XG5cbiAgICAgICAgICBsZXQgYXJncyA9IEpTT04ucGFyc2UobWVzc2FnZVsnQXJndW1lbnRzJ10pO1xuICAgICAgICAgIGxldCBjdXN0b21lckxpc3QgPSBhcmdzWydjdXN0b21lcnMnXTtcblxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VzdG9tZXJMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tZXJBbGVydEl0ZW0oY3VzdG9tZXJMaXN0W2pdLmlkLCBjdXN0b21lckxpc3Rbal0ubmFtZSk7XG4gICAgICAgICAgICByZXR1cm5MaXN0LnB1c2goZXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5MaXN0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEF1dG9EZWxldGVDdXN0b21lckxpc3QoY2xpZW50SUQpOiBPYnNlcnZhYmxlPEFycmF5PEN1c3RvbWVyQWxlcnRJdGVtPj4ge1xuICAgIGxldCBjdXN0b21lckRlbGV0ZUFQSTogQ3VzdG9tZXJBdXRvRGVsZXRlQVBJID0gPEN1c3RvbWVyQXV0b0RlbGV0ZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckF1dG9EZWxldGUnKTtcblxuICAgIGN1c3RvbWVyRGVsZXRlQVBJLnNldENsaWVudElEKGNsaWVudElEKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjdXN0b21lckRlbGV0ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lci1zZXJ2aWNlLWdldEF1dG9EZWxldGVDdXN0b21lckxpc3QnLCBkYXRhKTtcblxuICAgICAgICBsZXQgcmV0dXJuTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4oKTtcblxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBkYXRhWydCb2R5J107XG4gICAgICAgIC8vc2V0IGJvZHkgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1tpXTtcblxuICAgICAgICAgIGxldCBhcmdzID0gSlNPTi5wYXJzZShtZXNzYWdlWydBcmd1bWVudHMnXSk7XG4gICAgICAgICAgbGV0IGN1c3RvbWVyTGlzdCA9IGFyZ3NbJ2N1c3RvbWVycyddO1xuXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXN0b21lckxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21lckFsZXJ0SXRlbShjdXN0b21lckxpc3Rbal0uaWQsIGN1c3RvbWVyTGlzdFtqXS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMoY2xpZW50SUQsIGlzRm9sbG93KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgdXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXM6IEN1c3RvbWVyVXBkYXRlRm9sbG93QVBJID0gPEN1c3RvbWVyVXBkYXRlRm9sbG93QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ3VwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzJyk7XG4gICAgdXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMuc2V0Q2xpZW50KGNsaWVudElEKTtcbiAgICB1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cy5zZXRJc0ZvbGxvdyhpc0ZvbGxvdyk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2godXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtdXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMnLCBkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEZpbHRlckNyaXRlcmlhUHJlc2V0KCk6IE9ic2VydmFibGU8Q3VzdG9tZXJGaWx0ZXJQcmVzZXQ+IHtcbiAgICBsZXQgZ2V0RmlsdGVyQ3JpdGVyaWE6IEN1c3RvbWVyR2V0UHJlc2V0QVBJID0gPEN1c3RvbWVyR2V0UHJlc2V0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyRmlsdGVyUHJlc2V0Jyk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ2V0RmlsdGVyQ3JpdGVyaWEpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0RmlsdGVyQ3JpdGVyaWEnLCBkYXRhKTtcblxuICAgICAgICBsZXQgc2V0dGluZ0FycmF5ID0gZGF0YVsnQm9keSddO1xuXG4gICAgICAgIGxldCBwcmVzZXQ6IEN1c3RvbWVyRmlsdGVyUHJlc2V0O1xuICAgICAgICBpZiAoc2V0dGluZ0FycmF5Lmxlbmd0aCA9ICEwKSB7XG4gICAgICAgICAgcHJlc2V0ID0gSlNPTi5wYXJzZShzZXR0aW5nQXJyYXlbMF0uU2V0dGluZ1ZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEZpbHRlckNyaXRlcmlhUHJlc2V0JywgcHJlc2V0KTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KHByZXNldCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzYXZlRmlsdGVyQ3JpdGVyaWEoZmlsdGVyQ3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBzYXZlRmlsdGVyQ3JpdGVyaWE6IEN1c3RvbWVyU2F2ZVByZXNldEFQSSA9IDxDdXN0b21lclNhdmVQcmVzZXRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnc2F2ZUN1c3RvbWVyRmlsdGVyUHJlc2V0Jyk7XG5cbiAgICBzYXZlRmlsdGVyQ3JpdGVyaWEuc2V0RmlsdGVyQ3JpdGVyaWEoZmlsdGVyQ3JpdGVyaWEpO1xuXG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goc2F2ZUZpbHRlckNyaXRlcmlhKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLXNhdmVGaWx0ZXJDcml0ZXJpYScsIGRhdGEpO1xuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjaGVja0luRmlsdGVyQ3JpdGVyaWEoY2xpZW50SUQ6IHN0cmluZywgZmlsdGVyQ3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuICAgIGxldCBjdXN0b21lckxpc3RBUEk6IEN1c3RvbWVyTGlzdEFQSSA9IDxDdXN0b21lckxpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJMaXN0Jyk7XG4gICAgbGV0IHJlc3RyaWN0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLmN1c3RvbUNyaXRlcmlhU2VhcmNoKVxuICAgICAgcmVzdHJpY3Rpb25zID0gdGhpcy5jdXN0b21Dcml0ZXJpYVNlYXJjaC5nZXRSZXN0cmljdGlvbihmaWx0ZXJDcml0ZXJpYSk7XG4gICAgZWxzZVxuICAgICAgcmVzdHJpY3Rpb25zID0gdGhpcy5kZWZhdWx0Q3JpdGVyaWFTZWFyY2guZ2V0UmVzdHJpY3Rpb24oZmlsdGVyQ3JpdGVyaWEpO1xuXG5cbiAgICBjdXN0b21lckxpc3RBUEkucmVzdHJpY3Rpb25zID0gcmVzdHJpY3Rpb25zO1xuICAgIGN1c3RvbWVyTGlzdEFQSS5jbGllbnRJRCA9IGNsaWVudElEO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyTGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1jaGVja0luRmlsdGVyQ3JpdGVyaWEnLCBkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0JvZHknXS5sZW5ndGggIT0gMCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG5cbiAgfVxuXG4gIC8vZ2V0IGN1c3RvbWVyIGRhdGFzXG4gIGdldEN1c3RvbWVyTGlzdChmaWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSwgX3BhZ2VJbmZvOiBQYWdlSW5mbyk6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJJdGVtPj4ge1xuXG4gICAgbGV0IHJlc3RyaWN0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLmN1c3RvbUNyaXRlcmlhU2VhcmNoKVxuICAgICAgcmVzdHJpY3Rpb25zID0gdGhpcy5jdXN0b21Dcml0ZXJpYVNlYXJjaC5nZXRSZXN0cmljdGlvbihmaWx0ZXJDcml0ZXJpYSk7XG4gICAgZWxzZVxuICAgICAgcmVzdHJpY3Rpb25zID0gdGhpcy5kZWZhdWx0Q3JpdGVyaWFTZWFyY2guZ2V0UmVzdHJpY3Rpb24oZmlsdGVyQ3JpdGVyaWEpO1xuXG4gICAgbGV0IGN1c3RvbWVyTGlzdEFQSTogQ3VzdG9tZXJMaXN0QVBJID0gPEN1c3RvbWVyTGlzdEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckxpc3QnKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0Q3VzdG9tZXJMaXN0JywgZmlsdGVyQ3JpdGVyaWEsIHJlc3RyaWN0aW9ucywgX3BhZ2VJbmZvKTtcblxuICAgIGN1c3RvbWVyTGlzdEFQSS5yZXN0cmljdGlvbnMgPSByZXN0cmljdGlvbnM7XG4gICAgY3VzdG9tZXJMaXN0QVBJLnBhZ2VJbmZvID0gX3BhZ2VJbmZvO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyTGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckxpc3QnLCBkYXRhKTtcblxuICAgICAgICBsZXQgcmV0dXJuTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckl0ZW0+KCk7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkYXRhWydIZWFkZXInXTtcbiAgICAgICAgbGV0IGN1c3RvbWVyTGlzdCA9IGRhdGFbJ0JvZHknXTtcblxuICAgICAgICAvL3NldCBoZWFkZXIgcGFnZUluZm9cbiAgICAgICAgLy8gX3BhZ2VJbmZvLnRvdGFsUGFnZSA9IGhlYWRlci5QYWdlSW5mby50b3RhbFBhZ2U7XG4gICAgICAgIC8vIF9wYWdlSW5mby50b3RhbFJlYyA9IGhlYWRlci5QYWdlSW5mby50b3RhbFJlYztcblxuICAgICAgICAvL3NldCBib2R5IGRhdGFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXN0b21lckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQganNvbiA9IGN1c3RvbWVyTGlzdFtpXTtcbiAgICAgICAgICBsZXQgaXNPdGhlclN5c3RlbSA9IGpzb24uRGF0YVNvdXJjZSAhPSAnQVBQJztcbiAgICAgICAgICBsZXQgaXNGb2xsb3cgPSBqc29uLklzRm9sbG93ID09ICdZJztcbiAgICAgICAgICBsZXQgY29tcGxldGVuZXNzID0ganNvbi5Db21wbGV0ZW5lc3M7XG4gICAgICAgICAgbGV0IGlzT3ZlclRpbWVBbGVydCA9IGpzb24uSXNPdmVyVGltZUFsZXJ0O1xuXG5cbiAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tZXJJdGVtKGpzb24uQ2xpZW50SUQsIGpzb24uRmlyc3ROYW1lLCBqc29uLkxhc3ROYW1lLCBqc29uLlBvc3NpYmlsaXR5LCBjb21wbGV0ZW5lc3MsIGlzRm9sbG93LCBpc090aGVyU3lzdGVtLCBpc092ZXJUaW1lQWxlcnQpO1xuICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5MaXN0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcblxuICB9XG5cbiAgZ2V0Q3VzdG9tZXJCaXJ0aGRheUxpc3QodGFyZ2V0RGF0ZSwgc3ViTiwgYWRkTik6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJCaXJ0aGRheT4+IHtcbiAgICBsZXQgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEk6IEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJID0gPEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyQmlydGhkYXlMaXN0Jyk7XG4gICAgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuc3ViTiA9IHN1Yk47XG4gICAgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuYWRkTiA9IGFkZE47XG4gICAgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkudGFyZ2V0RGF0ZSA9IHRhcmdldERhdGU7XG5cblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjdXN0b21lckJpcnRoZGF5TGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckJpcnRoZGF5TGlzdCcsIGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0OiBBcnJheTxDdXN0b21lckJpcnRoZGF5PiA9IFtdO1xuICAgICAgICAvLyBsZXQgaGVhZGVyID0gZGF0YVsnSGVhZGVyJ107XG4gICAgICAgIGxldCBiaXJ0aGRheUxpc3QgPSBkYXRhWydCb2R5J107XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhcImN1c1NlcjogXCIsIGJpcnRoZGF5TGlzdCk7XG5cbiAgICAgICAgLy8gLy9zZXQgYm9keSBkYXRhXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmlydGhkYXlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbWVyQmlydGhkYXkoYmlydGhkYXlMaXN0W2ldWydDbGllbnRJRCddLCBiaXJ0aGRheUxpc3RbaV1bJ0ZpcnN0TmFtZSddLCBiaXJ0aGRheUxpc3RbaV1bJ0xhc3ROYW1lJ10sIGJpcnRoZGF5TGlzdFtpXVsnQmlydGhkYXlNb250aCddLCBiaXJ0aGRheUxpc3RbaV1bJ0JpcnRoZGF5RGF0ZSddKTtcbiAgICAgICAgICByZXR1cm5MaXN0LnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuTGlzdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcblxuXG5cblxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q3VzdG9tZXJEZXRhaWwoY2xpZW50SUQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoY2xpZW50SUQpKSB7XG4gICAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgY3VzdG9tZXJEZXRhaWxBUEk6IEN1c3RvbWVyRGV0YWlsQVBJID0gPEN1c3RvbWVyRGV0YWlsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyRGV0YWlsJyk7XG4gICAgICBjdXN0b21lckRldGFpbEFQSS5pZCA9IGNsaWVudElEO1xuXG4gICAgICByZXR1cm4gZnJvbSh0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJEZXRhaWxBUEkpLnRvUHJvbWlzZSgpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLkhlYWRlci5zdGF0dXMgJiYgcmVzcC5Cb2R5Lmxlbmd0aCA+IDApXG4gICAgICAgICAgcmV0dXJuIHJlc3BbXCJCb2R5XCJdWzBdO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaW1wb3J0Q29udGFjdChpdGVtczogQXJyYXk8Q29udGFjdEl0ZW0+KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBsZXQgaW1wb3J0Q29udGFjdEFQSTogSW1wb3J0Q29udGFjdEFQSSA9IDxJbXBvcnRDb250YWN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2ltcG9ydENvbnRhY3QnKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtaW1wb3J0Q29udGFjdCcsIGl0ZW1zKTtcbiAgICBpbXBvcnRDb250YWN0QVBJLnNldEl0ZW1zKGl0ZW1zKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChpbXBvcnRDb250YWN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1pbXBvcnRDb250YWN0JywgZGF0YSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cblxuICB2YWxpZFByb2ZpbGUoY3VzdG9tZXJEZXRhaWw6IGFueSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcblxuICAgIC8vdmFsaWQgcmVxdWlyZWRcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShjdXN0b21lckRldGFpbC5sYXN0TmFtZSkpXG4gICAgICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdsYXN0TmFtZScsICdyZXF1aXJlZCcpO1xuICAgIC8vIGlmIChjdXN0b21lclByb2ZpbGUuZmlyc3ROYW1lID09ICcnKVxuICAgIC8vICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnZmlyc3ROYW1lJywgJ3JlcXVpcmVkJyk7XG5cbiAgICAvL3ZhbGlkIGZvcm1hdCAgICAgIFxuXG4gICAgLy92YWxpZCBlbWFpbFxuICAgIGlmIChjdXN0b21lckRldGFpbC5lbWFpbHMubGVuZ3RoICE9IDApIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGN1c3RvbWVyRGV0YWlsLmVtYWlscy5mb3JFYWNoKChlbWFpbCkgPT4ge1xuICAgICAgICBpZiAoIWVtYWlsLmlzRW1wdHkoKSkge1xuICAgICAgICAgIGlmICghdGhpcy5pc0VtYWlsRm9ybWF0KGVtYWlsLmVtYWlsKSkge1xuICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgoJ2VtYWlsJyArIGkpLnRvU3RyaW5nKCksICdmb3JtYXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvL3ZhbGlkIGRhdGVcbiAgICAvLyBpZihjdXN0b21lclByb2ZpbGUuYmlydGhkYXkgPT0gbnVsbCkge1xuICAgIC8vICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnYmlydGhkYXknLCAnZGF0ZScpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiB2YWxpZGF0aW9uUmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYWlsRm9ybWF0KGVtYWlsKSB7XG4gICAgbGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8pO1xuXG4gICAgcmV0dXJuIHJlZ2V4cC50ZXN0KGVtYWlsKTtcbiAgfVxuXG5cblxuICBkZWxldGVDdXN0b21lclByb2ZpbGUoY2xpZW50SUQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVDdXN0b21lclByb2ZpbGVcIiwgY2xpZW50SUQpO1xuICAgIGxldCBkZWxldGVBUEk6IEN1c3RvbWVyRGVsZXRlQVBJID0gPEN1c3RvbWVyRGVsZXRlQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2RlbGV0ZUN1c3RvbWVyJyk7XG4gICAgZGVsZXRlQVBJLmNsaWVudElEID0gY2xpZW50SUQ7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZGVsZXRlQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWRlbGV0ZUN1c3RvbWVyUHJvZmlsZScsIGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRDdXN0b21lckNvbnRhY3ROb3RlKGNsaWVudElEOiBzdHJpbmcsIHBhZ2VJbmZvOiBQYWdlSW5mbyk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuICAgIGxldCBjdXN0b21lckNvbnRhY3ROb3RlQVBJOiBDdXN0b21lckNvbnRhY3ROb3RlQVBJID0gPEN1c3RvbWVyQ29udGFjdE5vdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZScpO1xuXG4gICAgY3VzdG9tZXJDb250YWN0Tm90ZUFQSS5zZXRDbGllbnRJRChjbGllbnRJRCk7XG4gICAgY3VzdG9tZXJDb250YWN0Tm90ZUFQSS5zZXRQYWdlSW5mbyhwYWdlSW5mbyk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQ29udGFjdE5vdGUnLCBjdXN0b21lckNvbnRhY3ROb3RlQVBJKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJDb250YWN0Tm90ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZScsIGRhdGEpO1xuICAgICAgICBsZXQgY3VzdG9tZXJDb250YWN0Tm90ZUxpc3QgPSBkYXRhWydCb2R5J107XG4gICAgICAgIG9ic2VydmVyLm5leHQoY3VzdG9tZXJDb250YWN0Tm90ZUxpc3QpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cblxuICBkZWxldGVDdXN0b21lckNvbnRhY3QoY29udGFjdENsaWVudElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlQ3VzdG9tZXJDb250YWN0XCIpO1xuICAgIGxldCBkZWxldGVDdXN0b21lckNvbnRhY3RBUEk6IEN1c3RvbWVyRGVsZXRlQ29udGFjdE5vdGVBUEkgPSA8Q3VzdG9tZXJEZWxldGVDb250YWN0Tm90ZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdkZWxldGVDdXN0b21lckNvbnRhY3ROb3RlJyk7XG4gICAgZGVsZXRlQ3VzdG9tZXJDb250YWN0QVBJLnNldENvbnRhY3RDbGllbnRJRChjb250YWN0Q2xpZW50SUQpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGRlbGV0ZUN1c3RvbWVyQ29udGFjdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1lZGl0Q3VzdG9tZXJDb250YWN0JywgZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRDdXN0b21lckNvbnRhY3RUZWwoY2xpZW50SUQ6IHN0cmluZyk6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJUZWw+PiB7XG4gICAgbGV0IGN1c3RvbWVyVGVsQVBJOiBDdXN0b21lclRlbEFQSSA9IDxDdXN0b21lclRlbEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lclRlbCcpO1xuXG4gICAgY3VzdG9tZXJUZWxBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckNvbnRhY3RUZWwnLCBjdXN0b21lclRlbEFQSSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyVGVsQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckNvbnRhY3RUZWwgcmVzcG9uc2UnLCBkYXRhKTtcbiAgICAgICAgbGV0IHJldHVybkN1c3RvbWVyVGVsOiBBcnJheTxDdXN0b21lclRlbD4gPSBuZXcgQXJyYXk8Q3VzdG9tZXJUZWw+KCk7XG4gICAgICAgIGxldCBjdXN0b21lclRlbExpc3QgPSBkYXRhWydCb2R5J107XG5cbiAgICAgICAgY3VzdG9tZXJUZWxMaXN0Lm1hcCh0ZWwgPT4gbmV3IEN1c3RvbWVyVGVsKHRlbC5DbGllbnRJRCwgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfVGVsVHlwZScsIHRlbC5UZWxUeXBlKSwgdGVsLlRlbCwgdGVsLkRhdGFTb3VyY2UpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHJldHVybkN1c3RvbWVyVGVsLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuQ3VzdG9tZXJUZWwpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==