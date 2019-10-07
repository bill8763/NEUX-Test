/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIFactory, APIDispatch, ProfileCodeService, ValidationResult, DateUtils, StringUtils } from '@allianzSND/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetail } from './model/CustomerDetail';
import { CustomerContactNote } from './model/CustomerContactNote';
import { CustomerItem } from './model/CustomerItem';
import { CustomerAlertItem } from './model/CustomerAlertItem';
import { CustomerAddress } from './model/CustomerAddress';
import { CustomerEmail } from './model/CustomerEmail';
import { CustomerTel } from './model/CustomerTel';
import { CustomerBirthday } from './model/CustomerBirthday';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
var CustomerService = /** @class */ (function () {
    function CustomerService(dispatcher, dateUtils, APIFactory, profileCodeService) {
        this.dispatcher = dispatcher;
        this.dateUtils = dateUtils;
        this.APIFactory = APIFactory;
        this.profileCodeService = profileCodeService;
        //is first time use customer function
        this._isFirstTime = true; //TODO
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
    Object.defineProperty(CustomerService.prototype, "profileResult", {
        get: /**
         * @return {?}
         */
        function () { return this._profileResult; },
        set: /**
         * @param {?} result
         * @return {?}
         */
        function (result) { this._profileResult = result; },
        enumerable: true,
        configurable: true
    });
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
        customerListAPI.filterCriteria = filterCriteria;
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
        var customerListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerList')));
        console.debug('customer-service-getCustomerList', filterCriteria, _pageInfo);
        customerListAPI.filterCriteria = filterCriteria;
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
     * @param {?} customer
     * @return {?}
     */
    CustomerService.prototype.convertCustomerDetailDisplayMode = /**
     * @param {?} customer
     * @return {?}
     */
    function (customer) {
        var _this = this;
        console.debug('convertCustomerDetailDisplayMode', customer);
        customer.ageRange = this.profileCodeService.convertCode2Text('Customer_Age', customer.ageRange);
        customer.gender = this.profileCodeService.convertCode2Text('Customer_Gender', customer.gender);
        customer.income = this.profileCodeService.convertCode2Text('Customer_Income', customer.income);
        customer.source = this.profileCodeService.convertCode2Text('Customer_Source', customer.source);
        customer.marriage = this.profileCodeService.convertCode2Text('Customer_Marriage', customer.marriage);
        customer.children = this.profileCodeService.convertCode2Text('Customer_Children', customer.children);
        customer.familiarity = this.profileCodeService.convertCode2Text('Customer_Familiarity', customer.familiarity);
        customer.recentStatus = this.profileCodeService.convertCode2Text('Customer_RecentStatus', customer.recentStatus);
        customer.manpa = this.profileCodeService.convertCode2Text('Customer_Status', customer.manpa);
        customer.contactFrequancy = this.profileCodeService.convertCode2Text('Customer_ContactFrequancy', customer.contactFrequancy);
        customer.possibility = this.profileCodeService.convertCode2Text('Customer_Possibility', customer.possibility);
        customer.tels.forEach((/**
         * @param {?} tel
         * @return {?}
         */
        function (tel) {
            tel.telType = _this.profileCodeService.convertCode2Text('Customer_TelType', tel.telType);
        }));
        customer.emails.forEach((/**
         * @param {?} email
         * @return {?}
         */
        function (email) {
            email.emailType = _this.profileCodeService.convertCode2Text('Customer_EmailType', email.emailType);
        }));
        customer.addresses.forEach((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            address.addressType = _this.profileCodeService.convertCode2Text('Customer_AddressType', address.addressType);
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
        var _this = this;
        if (StringUtils.isEmpty(clientID)) {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                observer.next(undefined);
                observer.complete();
            }));
        }
        else {
            /** @type {?} */
            var customerDetailAPI_1 = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerDetail')));
            customerDetailAPI_1.id = clientID;
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                _this.dispatcher.dispatch(customerDetailAPI_1).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    console.debug('customer-service-json', data);
                    /** @type {?} */
                    var customer = data['Body'][0];
                    console.debug('customer-service-getCustomerDetail', customer);
                    /** @type {?} */
                    var ageRange = customer.AgeRange;
                    /** @type {?} */
                    var gender = customer.Gender;
                    /** @type {?} */
                    var income = customer.Income;
                    /** @type {?} */
                    var source = customer.Source;
                    /** @type {?} */
                    var marriage = customer.Marriage;
                    /** @type {?} */
                    var children = customer.Children;
                    /** @type {?} */
                    var familiarity = customer.Familiarity;
                    /** @type {?} */
                    var recentStatus = customer.RecentStatus;
                    /** @type {?} */
                    var manpa = customer.MANPA;
                    /** @type {?} */
                    var contactFrequancy = customer.ContactFrequancy;
                    /** @type {?} */
                    var possibility = customer.Possibility;
                    /** @type {?} */
                    var isFollow = customer.IsFollow == 'Y';
                    /** @type {?} */
                    var birthday;
                    if (StringUtils.isNotEmpty(customer.BirthdayYear) && StringUtils.isNotEmpty(customer.BirthdayMonth) && StringUtils.isNotEmpty(customer.BirthdayDate)) {
                        birthday = new Date(Number(customer.BirthdayYear), Number(customer.BirthdayMonth) - 1, Number(customer.BirthdayDate));
                    }
                    /** @type {?} */
                    var customerDetail = new CustomerDetail();
                    customerDetail.clientID = customer.ClientID;
                    customerDetail.lastName = (StringUtils.isNotEmpty(customer.LastName) ? customer.LastName : '');
                    customerDetail.firstName = (StringUtils.isNotEmpty(customer.FirstName) ? customer.FirstName : '');
                    customerDetail.occupation = customer.Occupation;
                    customerDetail.company = customer.Company;
                    customerDetail.birthday = birthday;
                    customerDetail.ageRange = ageRange;
                    customerDetail.gender = gender;
                    customerDetail.income = income;
                    customerDetail.source = source;
                    customerDetail.marriage = marriage;
                    customerDetail.children = children;
                    customerDetail.familiarity = familiarity;
                    customerDetail.recentStatus = recentStatus;
                    customerDetail.manpa = manpa;
                    customerDetail.contactFrequancy = contactFrequancy;
                    customerDetail.possibility = possibility;
                    customerDetail.isFollow = isFollow;
                    customerDetail.dataSource = customer.DataSource;
                    customer.tel.map((/**
                     * @param {?} tel
                     * @return {?}
                     */
                    function (tel) { return new CustomerTel(tel.ClientID, tel.TelType, tel.Tel, tel.DataSource); })).forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    function (element) {
                        customerDetail.addTel(element);
                    }));
                    customer.email.map((/**
                     * @param {?} email
                     * @return {?}
                     */
                    function (email) { return new CustomerEmail(email.ClientID, email.EmailType, email.Email, email.DataSource); })).forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    function (element) {
                        customerDetail.addEmail(element);
                    }));
                    customer.address.map((/**
                     * @param {?} address
                     * @return {?}
                     */
                    function (address) { return new CustomerAddress(address.ClientID, address.AddressType, address.Country, address.City, address.Area, address.Zipcode, address.Address, address.DataSource); })).forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    function (element) {
                        customerDetail.addAddress(element);
                    }));
                    console.debug('customer-service:', customerDetail);
                    observer.next(customerDetail);
                    observer.complete();
                }));
            }));
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
            customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            function (email) {
                if (!email.isEmpty()) {
                    if (!_this.isEmailFormat(email.email)) {
                        validationResult.setErrorMap('email', 'format');
                    }
                }
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
     * @param {?} customerDetail
     * @return {?}
     */
    CustomerService.prototype.saveCustomerDetail = /**
     * @param {?} customerDetail
     * @return {?}
     */
    function (customerDetail) {
        var _this = this;
        console.log("saveCustomerProfile", customerDetail);
        //check tel/email/address default type
        customerDetail.tels.forEach((/**
         * @param {?} tel
         * @return {?}
         */
        function (tel) {
            if (StringUtils.isEmpty(tel.telType))
                tel.telType = 'TelHome';
        }));
        customerDetail.emails.forEach((/**
         * @param {?} email
         * @return {?}
         */
        function (email) {
            if (StringUtils.isEmpty(email.emailType))
                email.emailType = 'MailHome';
        }));
        customerDetail.addresses.forEach((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            if (StringUtils.isEmpty(address.addressType))
                address.addressType = 'AddressTypeHome';
        }));
        /** @type {?} */
        var saveCustomerDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('saveCustomerDetail')));
        saveCustomerDetailAPI.setDetail(customerDetail);
        /** @type {?} */
        var subject = Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(saveCustomerDetailAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-saveCustomerDetail', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
        console.log("subject: ", subject);
        return subject;
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
                var returnCustomerContactNote = new Array();
                /** @type {?} */
                var customerContactNoteList = data['Body'];
                for (var i = 0; i < customerContactNoteList.length; i++) {
                    /** @type {?} */
                    var json = customerContactNoteList[i];
                    /** @type {?} */
                    var user = new CustomerContactNote(json.ClientID, new Date(json.NoteTime), json.Note);
                    returnCustomerContactNote.push(user);
                }
                observer.next(returnCustomerContactNote);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} clientID
     * @param {?} customerClientID
     * @param {?} note
     * @param {?} noteTime
     * @return {?}
     */
    CustomerService.prototype.addCustomerContact = /**
     * @param {?} clientID
     * @param {?} customerClientID
     * @param {?} note
     * @param {?} noteTime
     * @return {?}
     */
    function (clientID, customerClientID, note, noteTime) {
        var _this = this;
        console.log("addCustomerContact");
        /** @type {?} */
        var addCustomerContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('addCustomerContactNote')));
        addCustomerContactAPI.setClientID(clientID);
        addCustomerContactAPI.setCustomerClientID(customerClientID);
        addCustomerContactAPI.setNote(note);
        addCustomerContactAPI.setNoteTime(noteTime);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(addCustomerContactAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('customer-service-addCustomerContact', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} contactClientID
     * @param {?} note
     * @param {?} noteTime
     * @return {?}
     */
    CustomerService.prototype.editCustomerContact = /**
     * @param {?} contactClientID
     * @param {?} note
     * @param {?} noteTime
     * @return {?}
     */
    function (contactClientID, note, noteTime) {
        var _this = this;
        console.log("editCustomerContact");
        /** @type {?} */
        var editCustomerContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('editCustomerContactNote')));
        editCustomerContactAPI.setContactClientID(contactClientID);
        editCustomerContactAPI.setNote(note);
        editCustomerContactAPI.setNoteTime(noteTime);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(editCustomerContactAPI).subscribe((/**
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
        { type: DateUtils },
        { type: APIFactory },
        { type: ProfileCodeService }
    ]; };
    /** @nocollapse */ CustomerService.ngInjectableDef = i0.defineInjectable({ factory: function CustomerService_Factory() { return new CustomerService(i0.inject(i1.APIDispatch), i0.inject(i1.DateUtils), i0.inject(i1.APIFactory), i0.inject(i1.ProfileCodeService)); }, token: CustomerService, providedIn: "root" });
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
    CustomerService.prototype._profileResult;
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    CustomerService.prototype.dateUtils;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUF5QixnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUl4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFnQmxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFFNUQ7SUFXRSx5QkFBb0IsVUFBdUIsRUFBVSxTQUFxQixFQUFVLFVBQXNCLEVBQVUsa0JBQXNDO1FBQXRJLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOMUoscUNBQXFDO1FBQzdCLGlCQUFZLEdBQUcs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QUMsQ0FBQztnQkFFSCxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Z0JBbmtCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBakNvQixXQUFXO2dCQUErRCxTQUFTO2dCQUEvRixVQUFVO2dCQUFlLGtCQUFrQjs7OzBCQUFwRDtDQW9tQkMsQUFya0JELElBcWtCQztTQWxrQlksZUFBZTs7Ozs7O0lBRzFCLHVDQUE0Qjs7Ozs7SUFHNUIseUNBQThDOzs7OztJQUVsQyxxQ0FBK0I7Ozs7O0lBQUUsb0NBQTZCOzs7OztJQUFFLHFDQUE4Qjs7Ozs7SUFBRSw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElGYWN0b3J5LCBBUElEaXNwYXRjaCwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBDb250YWN0SXRlbSwgUGFnZUluZm8sIFZhbGlkYXRpb25SZXN1bHQsIERhdGVVdGlscywgU3RyaW5nVXRpbHN9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWwgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyRGV0YWlsJztcbmltcG9ydCB7IEN1c3RvbWVyTGlzdEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckxpc3RBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWxBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJEZXRhaWxBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0Tm90ZSB9IGZyb20gJy4vbW9kZWwvQ3VzdG9tZXJDb250YWN0Tm90ZSc7XG5pbXBvcnQgeyBDdXN0b21lckNvbnRhY3ROb3RlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyQ29udGFjdE5vdGVBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJJdGVtIH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lckl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJBbGVydEl0ZW0gfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyQWxlcnRJdGVtJztcbmltcG9ydCB7IEN1c3RvbWVyQWRkcmVzcyB9IGZyb20gJy4vbW9kZWwvQ3VzdG9tZXJBZGRyZXNzJztcbmltcG9ydCB7IEN1c3RvbWVyRW1haWwgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyRW1haWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJUZWwgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyVGVsJztcbmltcG9ydCB7IEN1c3RvbWVyVGVsQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyVGVsQVBJJztcbmltcG9ydCB7IEltcG9ydENvbnRhY3RBUEkgfSBmcm9tICcuLi9hcGkvSW1wb3J0Q29udGFjdEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckFkZENvbnRhY3ROb3RlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyQWRkQ29udGFjdE5vdGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJFZGl0Q29udGFjdE5vdGVBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJFZGl0Q29udGFjdE5vdGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZWxldGVDb250YWN0Tm90ZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckRlbGV0ZUNvbnRhY3ROb3RlJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi9jb21wb25lbnRzL2JlYW4vY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhJztcbmltcG9ydCB7IEN1c3RvbWVyRGVsZXRlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRGVsZXRlQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyRWRpdE92ZXJ0aW1lQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRWRpdE92ZXJ0aW1lQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyQXV0b0RlbGV0ZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckF1dG9EZWxldGVBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJTYXZlUHJlc2V0QVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyU2F2ZVByZXNldEFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckdldFByZXNldEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckdldGVQcmVzZXRBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJQcmVzZXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2JlYW4vY3VzdG9tZXItZmlsdGVyLXByZXNldCc7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbFJlc3VsdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmVhbi9jdXN0b21lci1kZXRhaWwtcmVzdWx0JztcbmltcG9ydCB7IEN1c3RvbWVyU2F2ZURldGFpbEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lclNhdmVEZXRhaWxBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJCaXJ0aGRheSB9IGZyb20gJy4vbW9kZWwvQ3VzdG9tZXJCaXJ0aGRheSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEkgfSBmcm9tICcuLi9hcGkvRGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VydmljZSB7XG5cbiAgLy9pcyBmaXJzdCB0aW1lIHVzZSBjdXN0b21lciBmdW5jdGlvblxuICBwcml2YXRlIF9pc0ZpcnN0VGltZSA9IHRydWU7Ly9UT0RPXG5cbiAgLy9hZGQvZWRpdCBwcm9maWxlIHJlc3VsdFxuICBwcml2YXRlIF9wcm9maWxlUmVzdWx0IDogQ3VzdG9tZXJEZXRhaWxSZXN1bHQ7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLCBwcml2YXRlIGRhdGVVdGlscyA6IERhdGVVdGlscywgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LCBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlKSB7XG4gICAgLy9yZWdpc3RlciBhcGlcbiAgfVxuICBcbiAgaXNGaXJzdFRpbWUoKSA6IGJvb2xlYW57XG4gICAgaWYodGhpcy5faXNGaXJzdFRpbWUpIHtcbiAgICAgIHRoaXMuX2lzRmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNGaXJzdFRpbWU7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZ2V0IHByb2ZpbGVSZXN1bHQoKSB7cmV0dXJuIHRoaXMuX3Byb2ZpbGVSZXN1bHQ7fVxuICBzZXQgcHJvZmlsZVJlc3VsdChyZXN1bHQpIHt0aGlzLl9wcm9maWxlUmVzdWx0ID0gcmVzdWx0O31cblxuICB1cGRhdGVNZXNzYWdlVG9SZWFkKG1lc3NhZ2VUeXBlOiBzdHJpbmcsIG1lc3NhZ2VEYXRhQ2F0ZWdvcnk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGRhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSA6IERhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSA9IDxEYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlRGFzaGJvYXJkVG9SZWFkJyk7XG4gICAgZGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJLnNldE1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKTtcbiAgICBkYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEkuc2V0TWVzc2FnZURhdGFDYXRlZ29yeShtZXNzYWdlRGF0YUNhdGVnb3J5KTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2Rhc2hib2FyZC1zZXJ2aWNlLXVwZGF0ZU1lc3NhZ2VUb1JlYWQnLGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0T3ZlclRpbWVDdXN0b21lckxpc3QoY2xpZW50SUQpIDogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4+e1xuICAgIGxldCBjdXN0b21lck92ZXJUaW1lQVBJOiBDdXN0b21lckVkaXRPdmVydGltZUFQSSA9IDxDdXN0b21lckVkaXRPdmVydGltZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lck92ZXJUaW1lJyk7XG5cbiAgICBjdXN0b21lck92ZXJUaW1lQVBJLnNldENsaWVudElEKGNsaWVudElEKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJPdmVyVGltZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldE92ZXJUaW1lTGlzdCcsZGF0YSk7XG5cbiAgICAgICAgbGV0IHJldHVybkxpc3QgPSBuZXcgQXJyYXk8Q3VzdG9tZXJBbGVydEl0ZW0+KCk7XG4gICAgICAgXG4gICAgICAgIGxldCBtZXNzYWdlcyA9IGRhdGFbJ0JvZHknXTtcbiAgICAgICAgLy9zZXQgYm9keSBkYXRhXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzW2ldO1xuXG4gICAgICAgICAgbGV0IGFyZ3MgPSBKU09OLnBhcnNlKG1lc3NhZ2VbJ0FyZ3VtZW50cyddKTtcbiAgICAgICAgICBsZXQgY3VzdG9tZXJMaXN0ID0gYXJnc1snY3VzdG9tZXJzJ107XG5cbiAgICAgICAgICBmb3IobGV0IGo9MCA7IGo8IGN1c3RvbWVyTGlzdC5sZW5ndGggOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21lckFsZXJ0SXRlbShjdXN0b21lckxpc3Rbal0uaWQsIGN1c3RvbWVyTGlzdFtqXS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXV0b0RlbGV0ZUN1c3RvbWVyTGlzdChjbGllbnRJRCkgOiBPYnNlcnZhYmxlPEFycmF5PEN1c3RvbWVyQWxlcnRJdGVtPj57XG4gICAgbGV0IGN1c3RvbWVyRGVsZXRlQVBJOiBDdXN0b21lckF1dG9EZWxldGVBUEkgPSA8Q3VzdG9tZXJBdXRvRGVsZXRlQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyQXV0b0RlbGV0ZScpO1xuXG4gICAgY3VzdG9tZXJEZWxldGVBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjdXN0b21lckRlbGV0ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lci1zZXJ2aWNlLWdldEF1dG9EZWxldGVDdXN0b21lckxpc3QnLGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVyQWxlcnRJdGVtPigpO1xuICAgICAgIFxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBkYXRhWydCb2R5J107XG4gICAgICAgIC8vc2V0IGJvZHkgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1tpXTtcblxuICAgICAgICAgIGxldCBhcmdzID0gSlNPTi5wYXJzZShtZXNzYWdlWydBcmd1bWVudHMnXSk7XG4gICAgICAgICAgbGV0IGN1c3RvbWVyTGlzdCA9IGFyZ3NbJ2N1c3RvbWVycyddO1xuXG4gICAgICAgICAgZm9yKGxldCBqPTAgOyBqPCBjdXN0b21lckxpc3QubGVuZ3RoIDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tZXJBbGVydEl0ZW0oY3VzdG9tZXJMaXN0W2pdLmlkLCBjdXN0b21lckxpc3Rbal0ubmFtZSk7XG4gICAgICAgICAgICByZXR1cm5MaXN0LnB1c2goZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5MaXN0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzKGNsaWVudElELGlzRm9sbG93KSA6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IHVwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzOiBDdXN0b21lclVwZGF0ZUZvbGxvd0FQSSA9IDxDdXN0b21lclVwZGF0ZUZvbGxvd0FQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCd1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cycpO1xuICAgIHVwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzLnNldENsaWVudChjbGllbnRJRCk7XG4gICAgdXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMuc2V0SXNGb2xsb3coaXNGb2xsb3cpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLXVwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzJyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEZpbHRlckNyaXRlcmlhUHJlc2V0KCk6IE9ic2VydmFibGU8Q3VzdG9tZXJGaWx0ZXJQcmVzZXQ+IHtcbiAgICBsZXQgZ2V0RmlsdGVyQ3JpdGVyaWE6IEN1c3RvbWVyR2V0UHJlc2V0QVBJID0gPEN1c3RvbWVyR2V0UHJlc2V0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyRmlsdGVyUHJlc2V0Jyk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldEZpbHRlckNyaXRlcmlhKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0RmlsdGVyQ3JpdGVyaWEnLGRhdGEpO1xuXG4gICAgICAgIGxldCBzZXR0aW5nQXJyYXkgPSBkYXRhWydCb2R5J107XG5cbiAgICAgICAgbGV0IHByZXNldCA6IEN1c3RvbWVyRmlsdGVyUHJlc2V0O1xuICAgICAgICBpZihzZXR0aW5nQXJyYXkubGVuZ3RoID0hIDApIHtcbiAgICAgICAgICBwcmVzZXQgPSBKU09OLnBhcnNlKHNldHRpbmdBcnJheVswXS5TZXR0aW5nVmFsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRGaWx0ZXJDcml0ZXJpYVByZXNldCcscHJlc2V0KTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KHByZXNldCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzYXZlRmlsdGVyQ3JpdGVyaWEoZmlsdGVyQ3JpdGVyaWEgOiBDdXN0b21lckZpbHRlckNyaXRlcmlhKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgc2F2ZUZpbHRlckNyaXRlcmlhOiBDdXN0b21lclNhdmVQcmVzZXRBUEkgPSA8Q3VzdG9tZXJTYXZlUHJlc2V0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ3NhdmVDdXN0b21lckZpbHRlclByZXNldCcpO1xuXG4gICAgc2F2ZUZpbHRlckNyaXRlcmlhLnNldEZpbHRlckNyaXRlcmlhKGZpbHRlckNyaXRlcmlhKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goc2F2ZUZpbHRlckNyaXRlcmlhKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2Utc2F2ZUZpbHRlckNyaXRlcmlhJyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tJbkZpbHRlckNyaXRlcmlhKGNsaWVudElEIDogc3RyaW5nLGZpbHRlckNyaXRlcmlhIDogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCBjdXN0b21lckxpc3RBUEk6IEN1c3RvbWVyTGlzdEFQSSA9IDxDdXN0b21lckxpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJMaXN0Jyk7XG5cbiAgICBjdXN0b21lckxpc3RBUEkuZmlsdGVyQ3JpdGVyaWEgPSBmaWx0ZXJDcml0ZXJpYTtcbiAgICBjdXN0b21lckxpc3RBUEkuY2xpZW50SUQgPSBjbGllbnRJRDtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtY2hlY2tJbkZpbHRlckNyaXRlcmlhJyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0JvZHknXS5sZW5ndGggIT0gMCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvL2dldCBjdXN0b21lciBkYXRhc1xuICBnZXRDdXN0b21lckxpc3QoZmlsdGVyQ3JpdGVyaWEgOiBDdXN0b21lckZpbHRlckNyaXRlcmlhLF9wYWdlSW5mbyA6IFBhZ2VJbmZvKTogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckl0ZW0+PiB7XG4gICAgbGV0IGN1c3RvbWVyTGlzdEFQSTogQ3VzdG9tZXJMaXN0QVBJID0gPEN1c3RvbWVyTGlzdEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckxpc3QnKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0Q3VzdG9tZXJMaXN0JyxmaWx0ZXJDcml0ZXJpYSxfcGFnZUluZm8pO1xuXG4gICAgY3VzdG9tZXJMaXN0QVBJLmZpbHRlckNyaXRlcmlhID0gZmlsdGVyQ3JpdGVyaWE7XG4gICAgY3VzdG9tZXJMaXN0QVBJLnBhZ2VJbmZvID0gX3BhZ2VJbmZvO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjdXN0b21lckxpc3RBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckxpc3QnLGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVySXRlbT4oKTtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRhdGFbJ0hlYWRlciddO1xuICAgICAgICBsZXQgY3VzdG9tZXJMaXN0ID0gZGF0YVsnQm9keSddO1xuXG4gICAgICAgIC8vc2V0IGhlYWRlciBwYWdlSW5mb1xuICAgICAgICAvLyBfcGFnZUluZm8udG90YWxQYWdlID0gaGVhZGVyLlBhZ2VJbmZvLnRvdGFsUGFnZTtcbiAgICAgICAgLy8gX3BhZ2VJbmZvLnRvdGFsUmVjID0gaGVhZGVyLlBhZ2VJbmZvLnRvdGFsUmVjO1xuXG4gICAgICAgIC8vc2V0IGJvZHkgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1c3RvbWVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBqc29uID0gY3VzdG9tZXJMaXN0W2ldO1xuICAgICAgICAgIGxldCBpc090aGVyU3lzdGVtID0ganNvbi5EYXRhU291cmNlICE9ICdBUFAnO1xuICAgICAgICAgIGxldCBpc0ZvbGxvdyA9IGpzb24uSXNGb2xsb3cgPT0gJ1knO1xuICAgICAgICAgIGxldCBjb21wbGV0ZW5lc3MgPSBqc29uLkNvbXBsZXRlbmVzcztcbiAgICAgICAgICBsZXQgaXNPdmVyVGltZUFsZXJ0ID0ganNvbi5Jc092ZXJUaW1lQWxlcnQ7XG4gICAgXG5cbiAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tZXJJdGVtKGpzb24uQ2xpZW50SUQsanNvbi5GaXJzdE5hbWUsanNvbi5MYXN0TmFtZSxqc29uLlBvc3NpYmlsaXR5LGNvbXBsZXRlbmVzcyxpc0ZvbGxvdyxpc090aGVyU3lzdGVtLGlzT3ZlclRpbWVBbGVydCk7XG4gICAgICAgICAgcmV0dXJuTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q3VzdG9tZXJCaXJ0aGRheUxpc3QodGFyZ2V0RGF0ZSwgc3ViTiwgYWRkTik6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJCaXJ0aGRheT4+IHtcbiAgICBsZXQgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEk6IEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJID0gPEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyQmlydGhkYXlMaXN0Jyk7XG4gICAgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuc3ViTiA9IHN1Yk47XG4gICAgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuYWRkTiA9IGFkZE47XG4gICAgY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkudGFyZ2V0RGF0ZSA9IHRhcmdldERhdGU7XG4gIFxuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjdXN0b21lckJpcnRoZGF5TGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQmlydGhkYXlMaXN0JyxkYXRhKTtcblxuICAgICAgICBsZXQgcmV0dXJuTGlzdCA6QXJyYXk8Q3VzdG9tZXJCaXJ0aGRheT4gPSBbXTtcbiAgICAgICAgLy8gbGV0IGhlYWRlciA9IGRhdGFbJ0hlYWRlciddO1xuICAgICAgICBsZXQgYmlydGhkYXlMaXN0ID0gZGF0YVsnQm9keSddO1xuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjdXNTZXI6IFwiLCBiaXJ0aGRheUxpc3QpO1xuXG4gICAgICAgIC8vIC8vc2V0IGJvZHkgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpcnRoZGF5TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21lckJpcnRoZGF5KGJpcnRoZGF5TGlzdFtpXVsnQ2xpZW50SUQnXSwgYmlydGhkYXlMaXN0W2ldWydGaXJzdE5hbWUnXSwgYmlydGhkYXlMaXN0W2ldWydMYXN0TmFtZSddLCBiaXJ0aGRheUxpc3RbaV1bJ0JpcnRoZGF5TW9udGgnXSwgYmlydGhkYXlMaXN0W2ldWydCaXJ0aGRheURhdGUnXSk7XG4gICAgICAgICAgcmV0dXJuTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkxpc3QpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIFxuXG5cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnZlcnRDdXN0b21lckRldGFpbERpc3BsYXlNb2RlKGN1c3RvbWVyIDogQ3VzdG9tZXJEZXRhaWwpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdjb252ZXJ0Q3VzdG9tZXJEZXRhaWxEaXNwbGF5TW9kZScsY3VzdG9tZXIpO1xuXG4gICAgY3VzdG9tZXIuYWdlUmFuZ2UgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9BZ2UnLGN1c3RvbWVyLmFnZVJhbmdlKTtcbiAgICBjdXN0b21lci5nZW5kZXIgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9HZW5kZXInLGN1c3RvbWVyLmdlbmRlcik7XG4gICAgY3VzdG9tZXIuaW5jb21lID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfSW5jb21lJyxjdXN0b21lci5pbmNvbWUpO1xuICAgIGN1c3RvbWVyLnNvdXJjZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX1NvdXJjZScsY3VzdG9tZXIuc291cmNlKTtcbiAgICBjdXN0b21lci5tYXJyaWFnZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX01hcnJpYWdlJyxjdXN0b21lci5tYXJyaWFnZSk7XG4gICAgY3VzdG9tZXIuY2hpbGRyZW4gPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9DaGlsZHJlbicsY3VzdG9tZXIuY2hpbGRyZW4pO1xuICAgIGN1c3RvbWVyLmZhbWlsaWFyaXR5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfRmFtaWxpYXJpdHknLGN1c3RvbWVyLmZhbWlsaWFyaXR5KTtcbiAgICBjdXN0b21lci5yZWNlbnRTdGF0dXMgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9SZWNlbnRTdGF0dXMnLGN1c3RvbWVyLnJlY2VudFN0YXR1cyk7XG4gICAgY3VzdG9tZXIubWFucGEgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9TdGF0dXMnLGN1c3RvbWVyLm1hbnBhKTtcbiAgICBjdXN0b21lci5jb250YWN0RnJlcXVhbmN5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfQ29udGFjdEZyZXF1YW5jeScsY3VzdG9tZXIuY29udGFjdEZyZXF1YW5jeSk7XG4gICAgY3VzdG9tZXIucG9zc2liaWxpdHkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9Qb3NzaWJpbGl0eScsY3VzdG9tZXIucG9zc2liaWxpdHkpO1xuICAgICAgICBcbiAgICBjdXN0b21lci50ZWxzLmZvckVhY2goKHRlbCkgPT4ge1xuICAgICAgdGVsLnRlbFR5cGUgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9UZWxUeXBlJyx0ZWwudGVsVHlwZSk7XG4gICAgfSk7XG5cbiAgICBjdXN0b21lci5lbWFpbHMuZm9yRWFjaCgoZW1haWwpID0+IHtcbiAgICAgIGVtYWlsLmVtYWlsVHlwZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX0VtYWlsVHlwZScsZW1haWwuZW1haWxUeXBlKTtcbiAgICB9KTtcblxuICAgIGN1c3RvbWVyLmFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICBhZGRyZXNzLmFkZHJlc3NUeXBlID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfQWRkcmVzc1R5cGUnLGFkZHJlc3MuYWRkcmVzc1R5cGUpO1xuICAgIH0pO1xuXG4gIH1cblxuICBnZXRDdXN0b21lckRldGFpbChjbGllbnRJRCA6IHN0cmluZyk6IE9ic2VydmFibGU8Q3VzdG9tZXJEZXRhaWw+IHtcbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGNsaWVudElEKSkge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgY3VzdG9tZXJEZXRhaWxBUEk6IEN1c3RvbWVyRGV0YWlsQVBJID0gPEN1c3RvbWVyRGV0YWlsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyRGV0YWlsJyk7XG4gICAgICBjdXN0b21lckRldGFpbEFQSS5pZCA9IGNsaWVudElEO1xuICAgICAgXG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJEZXRhaWxBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtanNvbicsZGF0YSk7XG4gICAgICAgICAgbGV0IGN1c3RvbWVyICA9IGRhdGFbJ0JvZHknXVswXTtcblxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0Q3VzdG9tZXJEZXRhaWwnLGN1c3RvbWVyKTtcblxuICAgICAgICAgIGxldCBhZ2VSYW5nZSA6IHN0cmluZyA9IGN1c3RvbWVyLkFnZVJhbmdlO1xuICAgICAgICAgIGxldCBnZW5kZXIgOiBzdHJpbmcgPSBjdXN0b21lci5HZW5kZXI7XG4gICAgICAgICAgbGV0IGluY29tZSA6IHN0cmluZyA9IGN1c3RvbWVyLkluY29tZTtcbiAgICAgICAgICBsZXQgc291cmNlIDogc3RyaW5nID0gY3VzdG9tZXIuU291cmNlO1xuICAgICAgICAgIGxldCBtYXJyaWFnZSA6IHN0cmluZyA9IGN1c3RvbWVyLk1hcnJpYWdlO1xuICAgICAgICAgIGxldCBjaGlsZHJlbiA6IHN0cmluZyA9IGN1c3RvbWVyLkNoaWxkcmVuO1xuICAgICAgICAgIGxldCBmYW1pbGlhcml0eSA6IHN0cmluZyA9IGN1c3RvbWVyLkZhbWlsaWFyaXR5O1xuICAgICAgICAgIGxldCByZWNlbnRTdGF0dXMgOiBzdHJpbmcgPSBjdXN0b21lci5SZWNlbnRTdGF0dXM7XG4gICAgICAgICAgbGV0IG1hbnBhIDogc3RyaW5nID0gY3VzdG9tZXIuTUFOUEE7XG4gICAgICAgICAgbGV0IGNvbnRhY3RGcmVxdWFuY3kgOiBzdHJpbmcgPSBjdXN0b21lci5Db250YWN0RnJlcXVhbmN5O1xuICAgICAgICAgIGxldCBwb3NzaWJpbGl0eSA6IHN0cmluZyA9IGN1c3RvbWVyLlBvc3NpYmlsaXR5O1xuICAgICAgICAgIGxldCBpc0ZvbGxvdyA6IGJvb2xlYW4gPSBjdXN0b21lci5Jc0ZvbGxvdyA9PSAnWSc7XG5cbiAgICAgICAgICBsZXQgYmlydGhkYXkgOiBEYXRlO1xuXG4gICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lci5CaXJ0aGRheVllYXIpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXIuQmlydGhkYXlNb250aCkgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lci5CaXJ0aGRheURhdGUpKSB7XG4gICAgICAgICAgICBiaXJ0aGRheSA9IG5ldyBEYXRlKE51bWJlcihjdXN0b21lci5CaXJ0aGRheVllYXIpLE51bWJlcihjdXN0b21lci5CaXJ0aGRheU1vbnRoKSAtIDEsTnVtYmVyKGN1c3RvbWVyLkJpcnRoZGF5RGF0ZSkpO1xuICAgICAgICAgIH1cbiBcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgY3VzdG9tZXJEZXRhaWwgOiBDdXN0b21lckRldGFpbCA9IG5ldyBDdXN0b21lckRldGFpbCgpO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQgPSBjdXN0b21lci5DbGllbnRJRDtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmxhc3ROYW1lID0gKCBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyLkxhc3ROYW1lKT8gY3VzdG9tZXIuTGFzdE5hbWUgOiAnJyk7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5maXJzdE5hbWUgPSAoIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXIuRmlyc3ROYW1lKT8gY3VzdG9tZXIuRmlyc3ROYW1lIDogJycpO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwub2NjdXBhdGlvbiA9IGN1c3RvbWVyLk9jY3VwYXRpb247XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5jb21wYW55ID0gY3VzdG9tZXIuQ29tcGFueTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmJpcnRoZGF5ID0gYmlydGhkYXk7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5hZ2VSYW5nZSA9IGFnZVJhbmdlO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuZ2VuZGVyID0gZ2VuZGVyO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuaW5jb21lID0gaW5jb21lO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuc291cmNlID0gc291cmNlO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwubWFycmlhZ2UgPSBtYXJyaWFnZTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5mYW1pbGlhcml0eSA9IGZhbWlsaWFyaXR5O1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwucmVjZW50U3RhdHVzID0gcmVjZW50U3RhdHVzO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwubWFucGEgPSBtYW5wYTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmNvbnRhY3RGcmVxdWFuY3kgPSBjb250YWN0RnJlcXVhbmN5O1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwucG9zc2liaWxpdHkgPSBwb3NzaWJpbGl0eTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmlzRm9sbG93ID0gaXNGb2xsb3c7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5kYXRhU291cmNlID0gY3VzdG9tZXIuRGF0YVNvdXJjZTtcblxuXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VzdG9tZXIudGVsLm1hcCh0ZWw9PiBuZXcgQ3VzdG9tZXJUZWwodGVsLkNsaWVudElELHRlbC5UZWxUeXBlLHRlbC5UZWwsdGVsLkRhdGFTb3VyY2UpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICBjdXN0b21lckRldGFpbC5hZGRUZWwoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VzdG9tZXIuZW1haWwubWFwKGVtYWlsPT4gbmV3IEN1c3RvbWVyRW1haWwoZW1haWwuQ2xpZW50SUQsZW1haWwuRW1haWxUeXBlLGVtYWlsLkVtYWlsLGVtYWlsLkRhdGFTb3VyY2UpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICBjdXN0b21lckRldGFpbC5hZGRFbWFpbChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXN0b21lci5hZGRyZXNzLm1hcChhZGRyZXNzPT4gbmV3IEN1c3RvbWVyQWRkcmVzcyhhZGRyZXNzLkNsaWVudElELGFkZHJlc3MuQWRkcmVzc1R5cGUsYWRkcmVzcy5Db3VudHJ5LGFkZHJlc3MuQ2l0eSxhZGRyZXNzLkFyZWEsYWRkcmVzcy5aaXBjb2RlLGFkZHJlc3MuQWRkcmVzcyxhZGRyZXNzLkRhdGFTb3VyY2UpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICBjdXN0b21lckRldGFpbC5hZGRBZGRyZXNzKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlOicsY3VzdG9tZXJEZXRhaWwpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgXG4gIH1cblxuICBpbXBvcnRDb250YWN0KGl0ZW1zIDogQXJyYXk8Q29udGFjdEl0ZW0+KSA6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgbGV0IGltcG9ydENvbnRhY3RBUEk6ICBJbXBvcnRDb250YWN0QVBJID0gPEltcG9ydENvbnRhY3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnaW1wb3J0Q29udGFjdCcpO1xuICAgIFxuICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtaW1wb3J0Q29udGFjdCcsaXRlbXMpO1xuICAgIGltcG9ydENvbnRhY3RBUEkuc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGltcG9ydENvbnRhY3RBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWltcG9ydENvbnRhY3QnLGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgdmFsaWRQcm9maWxlKGN1c3RvbWVyRGV0YWlsIDogQ3VzdG9tZXJEZXRhaWwpOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IG5ldyBWYWxpZGF0aW9uUmVzdWx0KCk7XG5cbiAgICAvL3ZhbGlkIHJlcXVpcmVkXG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VzdG9tZXJEZXRhaWwubGFzdE5hbWUpKVxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnbGFzdE5hbWUnLCAncmVxdWlyZWQnKTtcbiAgICAvLyBpZiAoY3VzdG9tZXJQcm9maWxlLmZpcnN0TmFtZSA9PSAnJylcbiAgICAvLyAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2ZpcnN0TmFtZScsICdyZXF1aXJlZCcpO1xuICAgIFxuICAgIC8vdmFsaWQgZm9ybWF0ICAgICAgXG5cbiAgICAvL3ZhbGlkIGVtYWlsXG4gICAgaWYoY3VzdG9tZXJEZXRhaWwuZW1haWxzLmxlbmd0aCAhPSAwICkge1xuICAgICAgY3VzdG9tZXJEZXRhaWwuZW1haWxzLmZvckVhY2goKGVtYWlsKSA9PiB7XG4gICAgICAgIGlmKCFlbWFpbC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICBpZighdGhpcy5pc0VtYWlsRm9ybWF0KGVtYWlsLmVtYWlsKSkge1xuICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnZW1haWwnLCdmb3JtYXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgfVxuXG4gICAgLy92YWxpZCBkYXRlXG4gICAgLy8gaWYoY3VzdG9tZXJQcm9maWxlLmJpcnRoZGF5ID09IG51bGwpIHtcbiAgICAvLyAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2JpcnRoZGF5JywgJ2RhdGUnKTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvblJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbEZvcm1hdChlbWFpbCkge1xuICAgIGxldCByZWdleHAgPSBuZXcgUmVnRXhwKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKTtcblxuICAgIHJldHVybiByZWdleHAudGVzdChlbWFpbCk7XG4gIH1cblxuICBzYXZlQ3VzdG9tZXJEZXRhaWwoY3VzdG9tZXJEZXRhaWwgOiBDdXN0b21lckRldGFpbCk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcInNhdmVDdXN0b21lclByb2ZpbGVcIixjdXN0b21lckRldGFpbCk7XG5cbiAgICAvL2NoZWNrIHRlbC9lbWFpbC9hZGRyZXNzIGRlZmF1bHQgdHlwZVxuICAgIGN1c3RvbWVyRGV0YWlsLnRlbHMuZm9yRWFjaCgodGVsKSA9PiB7XG4gICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRlbC50ZWxUeXBlKSkgdGVsLnRlbFR5cGUgPSAnVGVsSG9tZSc7XG4gICAgfSk7XG5cbiAgICBjdXN0b21lckRldGFpbC5lbWFpbHMuZm9yRWFjaCgoZW1haWwpID0+IHtcbiAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkoZW1haWwuZW1haWxUeXBlKSkgZW1haWwuZW1haWxUeXBlID0gJ01haWxIb21lJztcbiAgICB9KTtcblxuICAgIGN1c3RvbWVyRGV0YWlsLmFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGFkZHJlc3MuYWRkcmVzc1R5cGUpKSBhZGRyZXNzLmFkZHJlc3NUeXBlID0gJ0FkZHJlc3NUeXBlSG9tZSc7XG4gICAgfSk7XG5cbiAgICBsZXQgc2F2ZUN1c3RvbWVyRGV0YWlsQVBJIDogQ3VzdG9tZXJTYXZlRGV0YWlsQVBJID0gPEN1c3RvbWVyU2F2ZURldGFpbEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdzYXZlQ3VzdG9tZXJEZXRhaWwnKTsgXG4gIFxuICAgIHNhdmVDdXN0b21lckRldGFpbEFQSS5zZXREZXRhaWwoY3VzdG9tZXJEZXRhaWwpO1xuXG4gICAgbGV0IHN1YmplY3QgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goc2F2ZUN1c3RvbWVyRGV0YWlsQVBJKS5zdWJzY3JpYmUoKGRhdGEpPT57XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1zYXZlQ3VzdG9tZXJEZXRhaWwnLGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpOyBcbiAgICAgIH0pXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcInN1YmplY3Q6IFwiLCBzdWJqZWN0KTtcbiAgICByZXR1cm4gc3ViamVjdDtcblxuICB9XG5cbiAgZGVsZXRlQ3VzdG9tZXJQcm9maWxlKGNsaWVudElEIDogc3RyaW5nKSA6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVDdXN0b21lclByb2ZpbGVcIixjbGllbnRJRCk7XG4gICAgbGV0IGRlbGV0ZUFQSSA6IEN1c3RvbWVyRGVsZXRlQVBJID0gPEN1c3RvbWVyRGVsZXRlQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2RlbGV0ZUN1c3RvbWVyJyk7IFxuICAgIGRlbGV0ZUFQSS5jbGllbnRJRCA9IGNsaWVudElEO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChkZWxldGVBUEkpLnN1YnNjcmliZSgoZGF0YSk9PntcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWRlbGV0ZUN1c3RvbWVyUHJvZmlsZScsZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7IFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZShjbGllbnRJRCA6IHN0cmluZyxwYWdlSW5mbyA6IFBhZ2VJbmZvKTogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckNvbnRhY3ROb3RlPj57XG4gICAgbGV0IGN1c3RvbWVyQ29udGFjdE5vdGVBUEkgOiBDdXN0b21lckNvbnRhY3ROb3RlQVBJID0gPEN1c3RvbWVyQ29udGFjdE5vdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZScpO1xuXG4gICAgY3VzdG9tZXJDb250YWN0Tm90ZUFQSS5zZXRDbGllbnRJRChjbGllbnRJRCk7XG4gICAgY3VzdG9tZXJDb250YWN0Tm90ZUFQSS5zZXRQYWdlSW5mbyhwYWdlSW5mbyk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQ29udGFjdE5vdGUnLGN1c3RvbWVyQ29udGFjdE5vdGVBUEkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJDb250YWN0Tm90ZUFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQ29udGFjdE5vdGUnLGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5DdXN0b21lckNvbnRhY3ROb3RlOiBBcnJheTxDdXN0b21lckNvbnRhY3ROb3RlPiA9IG5ldyBBcnJheTxDdXN0b21lckNvbnRhY3ROb3RlPigpO1xuICAgICAgICBsZXQgY3VzdG9tZXJDb250YWN0Tm90ZUxpc3QgPSBkYXRhWydCb2R5J107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXN0b21lckNvbnRhY3ROb3RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBqc29uID0gY3VzdG9tZXJDb250YWN0Tm90ZUxpc3RbaV07XG4gICAgICAgICAgbGV0IHVzZXIgPSBuZXcgQ3VzdG9tZXJDb250YWN0Tm90ZShqc29uLkNsaWVudElELG5ldyBEYXRlKGpzb24uTm90ZVRpbWUpLGpzb24uTm90ZSk7ICAgICAgICAgIFxuICAgICAgICAgIHJldHVybkN1c3RvbWVyQ29udGFjdE5vdGUucHVzaCh1c2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuQ3VzdG9tZXJDb250YWN0Tm90ZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGRDdXN0b21lckNvbnRhY3QoY2xpZW50SUQgOiBzdHJpbmcsY3VzdG9tZXJDbGllbnRJRCA6IHN0cmluZyxub3RlIDogc3RyaW5nLG5vdGVUaW1lIDogRGF0ZSkgOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYWRkQ3VzdG9tZXJDb250YWN0XCIpO1xuICAgIGxldCBhZGRDdXN0b21lckNvbnRhY3RBUEkgOiBDdXN0b21lckFkZENvbnRhY3ROb3RlQVBJID0gPEN1c3RvbWVyQWRkQ29udGFjdE5vdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnYWRkQ3VzdG9tZXJDb250YWN0Tm90ZScpOyBcbiAgICBhZGRDdXN0b21lckNvbnRhY3RBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuICAgIGFkZEN1c3RvbWVyQ29udGFjdEFQSS5zZXRDdXN0b21lckNsaWVudElEKGN1c3RvbWVyQ2xpZW50SUQpO1xuICAgIGFkZEN1c3RvbWVyQ29udGFjdEFQSS5zZXROb3RlKG5vdGUpO1xuICAgIGFkZEN1c3RvbWVyQ29udGFjdEFQSS5zZXROb3RlVGltZShub3RlVGltZSlcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChhZGRDdXN0b21lckNvbnRhY3RBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWFkZEN1c3RvbWVyQ29udGFjdCcsZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgZWRpdEN1c3RvbWVyQ29udGFjdChjb250YWN0Q2xpZW50SUQgOiBzdHJpbmcsbm90ZSA6IHN0cmluZyxub3RlVGltZSA6IERhdGUpIDogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zb2xlLmxvZyhcImVkaXRDdXN0b21lckNvbnRhY3RcIik7XG4gICAgbGV0IGVkaXRDdXN0b21lckNvbnRhY3RBUEkgOiBDdXN0b21lckVkaXRDb250YWN0Tm90ZUFQSSA9IDxDdXN0b21lckVkaXRDb250YWN0Tm90ZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdlZGl0Q3VzdG9tZXJDb250YWN0Tm90ZScpOyBcbiAgICBlZGl0Q3VzdG9tZXJDb250YWN0QVBJLnNldENvbnRhY3RDbGllbnRJRChjb250YWN0Q2xpZW50SUQpO1xuICAgIGVkaXRDdXN0b21lckNvbnRhY3RBUEkuc2V0Tm90ZShub3RlKTtcbiAgICBlZGl0Q3VzdG9tZXJDb250YWN0QVBJLnNldE5vdGVUaW1lKG5vdGVUaW1lKVxuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChlZGl0Q3VzdG9tZXJDb250YWN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpPT57XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1lZGl0Q3VzdG9tZXJDb250YWN0JyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTsgXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZWxldGVDdXN0b21lckNvbnRhY3QoY29udGFjdENsaWVudElEIDogc3RyaW5nKSA6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVDdXN0b21lckNvbnRhY3RcIik7XG4gICAgbGV0IGRlbGV0ZUN1c3RvbWVyQ29udGFjdEFQSSA6IEN1c3RvbWVyRGVsZXRlQ29udGFjdE5vdGVBUEkgPSA8Q3VzdG9tZXJEZWxldGVDb250YWN0Tm90ZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdkZWxldGVDdXN0b21lckNvbnRhY3ROb3RlJyk7IFxuICAgIGRlbGV0ZUN1c3RvbWVyQ29udGFjdEFQSS5zZXRDb250YWN0Q2xpZW50SUQoY29udGFjdENsaWVudElEKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZGVsZXRlQ3VzdG9tZXJDb250YWN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpPT57XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1lZGl0Q3VzdG9tZXJDb250YWN0JyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTsgXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRDdXN0b21lckNvbnRhY3RUZWwoY2xpZW50SUQgOiBzdHJpbmcpIDogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lclRlbD4+e1xuICAgIGxldCBjdXN0b21lclRlbEFQSSA6IEN1c3RvbWVyVGVsQVBJID0gPEN1c3RvbWVyVGVsQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyVGVsJyk7XG5cbiAgICBjdXN0b21lclRlbEFQSS5zZXRDbGllbnRJRChjbGllbnRJRCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQ29udGFjdFRlbCcsY3VzdG9tZXJUZWxBUEkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJUZWxBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyQ29udGFjdFRlbCByZXNwb25zZScsZGF0YSk7XG4gICAgICAgIGxldCByZXR1cm5DdXN0b21lclRlbDogQXJyYXk8Q3VzdG9tZXJUZWw+ID0gbmV3IEFycmF5PEN1c3RvbWVyVGVsPigpO1xuICAgICAgICBsZXQgY3VzdG9tZXJUZWxMaXN0ID0gZGF0YVsnQm9keSddO1xuXG4gICAgICAgIGN1c3RvbWVyVGVsTGlzdC5tYXAodGVsPT4gbmV3IEN1c3RvbWVyVGVsKHRlbC5DbGllbnRJRCwgdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfVGVsVHlwZScsdGVsLlRlbFR5cGUpLHRlbC5UZWwsdGVsLkRhdGFTb3VyY2UpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHJldHVybkN1c3RvbWVyVGVsLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuQ3VzdG9tZXJUZWwpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIFxufVxuIl19