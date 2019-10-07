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
export class CustomerService {
    /**
     * @param {?} dispatcher
     * @param {?} dateUtils
     * @param {?} APIFactory
     * @param {?} profileCodeService
     */
    constructor(dispatcher, dateUtils, APIFactory, profileCodeService) {
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
     * @return {?}
     */
    get profileResult() { return this._profileResult; }
    /**
     * @param {?} result
     * @return {?}
     */
    set profileResult(result) { this._profileResult = result; }
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
        customerListAPI.filterCriteria = filterCriteria;
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
        let customerListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerList')));
        console.debug('customer-service-getCustomerList', filterCriteria, _pageInfo);
        customerListAPI.filterCriteria = filterCriteria;
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
     * @param {?} customer
     * @return {?}
     */
    convertCustomerDetailDisplayMode(customer) {
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
        (tel) => {
            tel.telType = this.profileCodeService.convertCode2Text('Customer_TelType', tel.telType);
        }));
        customer.emails.forEach((/**
         * @param {?} email
         * @return {?}
         */
        (email) => {
            email.emailType = this.profileCodeService.convertCode2Text('Customer_EmailType', email.emailType);
        }));
        customer.addresses.forEach((/**
         * @param {?} address
         * @return {?}
         */
        (address) => {
            address.addressType = this.profileCodeService.convertCode2Text('Customer_AddressType', address.addressType);
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    getCustomerDetail(clientID) {
        if (StringUtils.isEmpty(clientID)) {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                observer.next(undefined);
                observer.complete();
            }));
        }
        else {
            /** @type {?} */
            let customerDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerDetail')));
            customerDetailAPI.id = clientID;
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                this.dispatcher.dispatch(customerDetailAPI).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    console.debug('customer-service-json', data);
                    /** @type {?} */
                    let customer = data['Body'][0];
                    console.debug('customer-service-getCustomerDetail', customer);
                    /** @type {?} */
                    let ageRange = customer.AgeRange;
                    /** @type {?} */
                    let gender = customer.Gender;
                    /** @type {?} */
                    let income = customer.Income;
                    /** @type {?} */
                    let source = customer.Source;
                    /** @type {?} */
                    let marriage = customer.Marriage;
                    /** @type {?} */
                    let children = customer.Children;
                    /** @type {?} */
                    let familiarity = customer.Familiarity;
                    /** @type {?} */
                    let recentStatus = customer.RecentStatus;
                    /** @type {?} */
                    let manpa = customer.MANPA;
                    /** @type {?} */
                    let contactFrequancy = customer.ContactFrequancy;
                    /** @type {?} */
                    let possibility = customer.Possibility;
                    /** @type {?} */
                    let isFollow = customer.IsFollow == 'Y';
                    /** @type {?} */
                    let birthday;
                    if (StringUtils.isNotEmpty(customer.BirthdayYear) && StringUtils.isNotEmpty(customer.BirthdayMonth) && StringUtils.isNotEmpty(customer.BirthdayDate)) {
                        birthday = new Date(Number(customer.BirthdayYear), Number(customer.BirthdayMonth) - 1, Number(customer.BirthdayDate));
                    }
                    /** @type {?} */
                    let customerDetail = new CustomerDetail();
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
                    tel => new CustomerTel(tel.ClientID, tel.TelType, tel.Tel, tel.DataSource))).forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    element => {
                        customerDetail.addTel(element);
                    }));
                    customer.email.map((/**
                     * @param {?} email
                     * @return {?}
                     */
                    email => new CustomerEmail(email.ClientID, email.EmailType, email.Email, email.DataSource))).forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    element => {
                        customerDetail.addEmail(element);
                    }));
                    customer.address.map((/**
                     * @param {?} address
                     * @return {?}
                     */
                    address => new CustomerAddress(address.ClientID, address.AddressType, address.Country, address.City, address.Area, address.Zipcode, address.Address, address.DataSource))).forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    element => {
                        customerDetail.addAddress(element);
                    }));
                    console.debug('customer-service:', customerDetail);
                    observer.next(customerDetail);
                    observer.complete();
                }));
            }));
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
            customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            (email) => {
                if (!email.isEmpty()) {
                    if (!this.isEmailFormat(email.email)) {
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
     * @param {?} customerDetail
     * @return {?}
     */
    saveCustomerDetail(customerDetail) {
        console.log("saveCustomerProfile", customerDetail);
        //check tel/email/address default type
        customerDetail.tels.forEach((/**
         * @param {?} tel
         * @return {?}
         */
        (tel) => {
            if (StringUtils.isEmpty(tel.telType))
                tel.telType = 'TelHome';
        }));
        customerDetail.emails.forEach((/**
         * @param {?} email
         * @return {?}
         */
        (email) => {
            if (StringUtils.isEmpty(email.emailType))
                email.emailType = 'MailHome';
        }));
        customerDetail.addresses.forEach((/**
         * @param {?} address
         * @return {?}
         */
        (address) => {
            if (StringUtils.isEmpty(address.addressType))
                address.addressType = 'AddressTypeHome';
        }));
        /** @type {?} */
        let saveCustomerDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('saveCustomerDetail')));
        saveCustomerDetailAPI.setDetail(customerDetail);
        /** @type {?} */
        let subject = Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(saveCustomerDetailAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-saveCustomerDetail', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
        console.log("subject: ", subject);
        return subject;
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
                let returnCustomerContactNote = new Array();
                /** @type {?} */
                let customerContactNoteList = data['Body'];
                for (let i = 0; i < customerContactNoteList.length; i++) {
                    /** @type {?} */
                    let json = customerContactNoteList[i];
                    /** @type {?} */
                    let user = new CustomerContactNote(json.ClientID, new Date(json.NoteTime), json.Note);
                    returnCustomerContactNote.push(user);
                }
                observer.next(returnCustomerContactNote);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @param {?} customerClientID
     * @param {?} note
     * @param {?} noteTime
     * @return {?}
     */
    addCustomerContact(clientID, customerClientID, note, noteTime) {
        console.log("addCustomerContact");
        /** @type {?} */
        let addCustomerContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('addCustomerContactNote')));
        addCustomerContactAPI.setClientID(clientID);
        addCustomerContactAPI.setCustomerClientID(customerClientID);
        addCustomerContactAPI.setNote(note);
        addCustomerContactAPI.setNoteTime(noteTime);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(addCustomerContactAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('customer-service-addCustomerContact', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} contactClientID
     * @param {?} note
     * @param {?} noteTime
     * @return {?}
     */
    editCustomerContact(contactClientID, note, noteTime) {
        console.log("editCustomerContact");
        /** @type {?} */
        let editCustomerContactAPI = (/** @type {?} */ (this.APIFactory.getAPI('editCustomerContactNote')));
        editCustomerContactAPI.setContactClientID(contactClientID);
        editCustomerContactAPI.setNote(note);
        editCustomerContactAPI.setNoteTime(noteTime);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(editCustomerContactAPI).subscribe((/**
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
    { type: DateUtils },
    { type: APIFactory },
    { type: ProfileCodeService }
];
/** @nocollapse */ CustomerService.ngInjectableDef = i0.defineInjectable({ factory: function CustomerService_Factory() { return new CustomerService(i0.inject(i1.APIDispatch), i0.inject(i1.DateUtils), i0.inject(i1.APIFactory), i0.inject(i1.ProfileCodeService)); }, token: CustomerService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUF5QixnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUl4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFnQmxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLNUQsTUFBTTs7Ozs7OztJQVFKLFlBQW9CLFVBQXVCLEVBQVUsU0FBcUIsRUFBVSxVQUFzQixFQUFVLGtCQUFzQztRQUF0SSxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTjFKLHFDQUFxQztRQUM3Qixp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LEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBbmtCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWpDb0IsV0FBVztZQUErRCxTQUFTO1lBQS9GLFVBQVU7WUFBZSxrQkFBa0I7Ozs7Ozs7O0lBcUNsRCx1Q0FBNEI7Ozs7O0lBRzVCLHlDQUE4Qzs7Ozs7SUFFbEMscUNBQStCOzs7OztJQUFFLG9DQUE2Qjs7Ozs7SUFBRSxxQ0FBOEI7Ozs7O0lBQUUsNkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJRmFjdG9yeSwgQVBJRGlzcGF0Y2gsIFByb2ZpbGVDb2RlU2VydmljZSwgQ29udGFjdEl0ZW0sIFBhZ2VJbmZvLCBWYWxpZGF0aW9uUmVzdWx0LCBEYXRlVXRpbHMsIFN0cmluZ1V0aWxzfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsIH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lckRldGFpbCc7XG5pbXBvcnQgeyBDdXN0b21lckxpc3RBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJMaXN0QVBJJztcbmltcG9ydCB7IEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyQmlydGhkYXlMaXN0QVBJJztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRGV0YWlsQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyQ29udGFjdE5vdGUgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyQ29udGFjdE5vdGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0Tm90ZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckNvbnRhY3ROb3RlQVBJJztcbmltcG9ydCB7IEN1c3RvbWVySXRlbSB9IGZyb20gJy4vbW9kZWwvQ3VzdG9tZXJJdGVtJztcbmltcG9ydCB7IEN1c3RvbWVyQWxlcnRJdGVtIH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lckFsZXJ0SXRlbSc7XG5pbXBvcnQgeyBDdXN0b21lckFkZHJlc3MgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyQWRkcmVzcyc7XG5pbXBvcnQgeyBDdXN0b21lckVtYWlsIH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lckVtYWlsJztcbmltcG9ydCB7IEN1c3RvbWVyVGVsIH0gZnJvbSAnLi9tb2RlbC9DdXN0b21lclRlbCc7XG5pbXBvcnQgeyBDdXN0b21lclRlbEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lclRlbEFQSSc7XG5pbXBvcnQgeyBJbXBvcnRDb250YWN0QVBJIH0gZnJvbSAnLi4vYXBpL0ltcG9ydENvbnRhY3RBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJBZGRDb250YWN0Tm90ZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckFkZENvbnRhY3ROb3RlJztcbmltcG9ydCB7IEN1c3RvbWVyRWRpdENvbnRhY3ROb3RlQVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyRWRpdENvbnRhY3ROb3RlJztcbmltcG9ydCB7IEN1c3RvbWVyRGVsZXRlQ29udGFjdE5vdGVBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJEZWxldGVDb250YWN0Tm90ZSc7XG5pbXBvcnQgeyBDdXN0b21lckZpbHRlckNyaXRlcmlhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYSc7XG5pbXBvcnQgeyBDdXN0b21lckRlbGV0ZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckRlbGV0ZUFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckVkaXRPdmVydGltZUFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lckVkaXRPdmVydGltZUFQSSc7XG5pbXBvcnQgeyBDdXN0b21lckF1dG9EZWxldGVBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJBdXRvRGVsZXRlQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyU2F2ZVByZXNldEFQSSB9IGZyb20gJy4uL2FwaS9DdXN0b21lclNhdmVQcmVzZXRBUEknO1xuaW1wb3J0IHsgQ3VzdG9tZXJHZXRQcmVzZXRBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJHZXRlUHJlc2V0QVBJJztcbmltcG9ydCB7IEN1c3RvbWVyVXBkYXRlRm9sbG93QVBJIH0gZnJvbSAnLi4vYXBpL0N1c3RvbWVyVXBkYXRlRm9sbG93QVBJJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyUHJlc2V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1wcmVzZXQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJEZXRhaWxSZXN1bHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2JlYW4vY3VzdG9tZXItZGV0YWlsLXJlc3VsdCc7XG5pbXBvcnQgeyBDdXN0b21lclNhdmVEZXRhaWxBUEkgfSBmcm9tICcuLi9hcGkvQ3VzdG9tZXJTYXZlRGV0YWlsQVBJJztcbmltcG9ydCB7IEN1c3RvbWVyQmlydGhkYXkgfSBmcm9tICcuL21vZGVsL0N1c3RvbWVyQmlydGhkYXknO1xuaW1wb3J0IHsgRGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJIH0gZnJvbSAnLi4vYXBpL0Rhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlcnZpY2Uge1xuXG4gIC8vaXMgZmlyc3QgdGltZSB1c2UgY3VzdG9tZXIgZnVuY3Rpb25cbiAgcHJpdmF0ZSBfaXNGaXJzdFRpbWUgPSB0cnVlOy8vVE9ET1xuXG4gIC8vYWRkL2VkaXQgcHJvZmlsZSByZXN1bHRcbiAgcHJpdmF0ZSBfcHJvZmlsZVJlc3VsdCA6IEN1c3RvbWVyRGV0YWlsUmVzdWx0O1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNwYXRjaGVyOiBBUElEaXNwYXRjaCwgcHJpdmF0ZSBkYXRlVXRpbHMgOiBEYXRlVXRpbHMsIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSwgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSkge1xuICAgIC8vcmVnaXN0ZXIgYXBpXG4gIH1cbiAgXG4gIGlzRmlyc3RUaW1lKCkgOiBib29sZWFue1xuICAgIGlmKHRoaXMuX2lzRmlyc3RUaW1lKSB7XG4gICAgICB0aGlzLl9pc0ZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzRmlyc3RUaW1lO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGdldCBwcm9maWxlUmVzdWx0KCkge3JldHVybiB0aGlzLl9wcm9maWxlUmVzdWx0O31cbiAgc2V0IHByb2ZpbGVSZXN1bHQocmVzdWx0KSB7dGhpcy5fcHJvZmlsZVJlc3VsdCA9IHJlc3VsdDt9XG5cbiAgdXBkYXRlTWVzc2FnZVRvUmVhZChtZXNzYWdlVHlwZTogc3RyaW5nLCBtZXNzYWdlRGF0YUNhdGVnb3J5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBkYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEkgOiBEYXNoYm9hcmRVcGRhdGVUb1JlYWRBUEkgPSA8RGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ3VwZGF0ZURhc2hib2FyZFRvUmVhZCcpO1xuICAgIGRhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSS5zZXRNZXNzYWdlVHlwZShtZXNzYWdlVHlwZSk7XG4gICAgZGFzaGJvYXJkVXBkYXRlVG9SZWFkQVBJLnNldE1lc3NhZ2VEYXRhQ2F0ZWdvcnkobWVzc2FnZURhdGFDYXRlZ29yeSk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGRhc2hib2FyZFVwZGF0ZVRvUmVhZEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdkYXNoYm9hcmQtc2VydmljZS11cGRhdGVNZXNzYWdlVG9SZWFkJyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldE92ZXJUaW1lQ3VzdG9tZXJMaXN0KGNsaWVudElEKSA6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJBbGVydEl0ZW0+PntcbiAgICBsZXQgY3VzdG9tZXJPdmVyVGltZUFQSTogQ3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEkgPSA8Q3VzdG9tZXJFZGl0T3ZlcnRpbWVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJPdmVyVGltZScpO1xuXG4gICAgY3VzdG9tZXJPdmVyVGltZUFQSS5zZXRDbGllbnRJRChjbGllbnRJRCk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyT3ZlclRpbWVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRPdmVyVGltZUxpc3QnLGRhdGEpO1xuXG4gICAgICAgIGxldCByZXR1cm5MaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVyQWxlcnRJdGVtPigpO1xuICAgICAgIFxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBkYXRhWydCb2R5J107XG4gICAgICAgIC8vc2V0IGJvZHkgZGF0YVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlc1tpXTtcblxuICAgICAgICAgIGxldCBhcmdzID0gSlNPTi5wYXJzZShtZXNzYWdlWydBcmd1bWVudHMnXSk7XG4gICAgICAgICAgbGV0IGN1c3RvbWVyTGlzdCA9IGFyZ3NbJ2N1c3RvbWVycyddO1xuXG4gICAgICAgICAgZm9yKGxldCBqPTAgOyBqPCBjdXN0b21lckxpc3QubGVuZ3RoIDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tZXJBbGVydEl0ZW0oY3VzdG9tZXJMaXN0W2pdLmlkLCBjdXN0b21lckxpc3Rbal0ubmFtZSk7XG4gICAgICAgICAgICByZXR1cm5MaXN0LnB1c2goZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5MaXN0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEF1dG9EZWxldGVDdXN0b21lckxpc3QoY2xpZW50SUQpIDogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4+e1xuICAgIGxldCBjdXN0b21lckRlbGV0ZUFQSTogQ3VzdG9tZXJBdXRvRGVsZXRlQVBJID0gPEN1c3RvbWVyQXV0b0RlbGV0ZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckF1dG9EZWxldGUnKTtcblxuICAgIGN1c3RvbWVyRGVsZXRlQVBJLnNldENsaWVudElEKGNsaWVudElEKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJEZWxldGVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tZXItc2VydmljZS1nZXRBdXRvRGVsZXRlQ3VzdG9tZXJMaXN0JyxkYXRhKTtcblxuICAgICAgICBsZXQgcmV0dXJuTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4oKTtcbiAgICAgICBcbiAgICAgICAgbGV0IG1lc3NhZ2VzID0gZGF0YVsnQm9keSddO1xuICAgICAgICAvL3NldCBib2R5IGRhdGFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gbWVzc2FnZXNbaV07XG5cbiAgICAgICAgICBsZXQgYXJncyA9IEpTT04ucGFyc2UobWVzc2FnZVsnQXJndW1lbnRzJ10pO1xuICAgICAgICAgIGxldCBjdXN0b21lckxpc3QgPSBhcmdzWydjdXN0b21lcnMnXTtcblxuICAgICAgICAgIGZvcihsZXQgaj0wIDsgajwgY3VzdG9tZXJMaXN0Lmxlbmd0aCA7IGorKykge1xuICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbWVyQWxlcnRJdGVtKGN1c3RvbWVyTGlzdFtqXS5pZCwgY3VzdG9tZXJMaXN0W2pdLm5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuTGlzdC5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG9ic2VydmVyLm5leHQocmV0dXJuTGlzdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cyhjbGllbnRJRCxpc0ZvbGxvdykgOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCB1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1czogQ3VzdG9tZXJVcGRhdGVGb2xsb3dBUEkgPSA8Q3VzdG9tZXJVcGRhdGVGb2xsb3dBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMnKTtcbiAgICB1cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cy5zZXRDbGllbnQoY2xpZW50SUQpO1xuICAgIHVwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzLnNldElzRm9sbG93KGlzRm9sbG93KTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2godXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS11cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cycsZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRGaWx0ZXJDcml0ZXJpYVByZXNldCgpOiBPYnNlcnZhYmxlPEN1c3RvbWVyRmlsdGVyUHJlc2V0PiB7XG4gICAgbGV0IGdldEZpbHRlckNyaXRlcmlhOiBDdXN0b21lckdldFByZXNldEFQSSA9IDxDdXN0b21lckdldFByZXNldEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckZpbHRlclByZXNldCcpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRGaWx0ZXJDcml0ZXJpYSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEZpbHRlckNyaXRlcmlhJyxkYXRhKTtcblxuICAgICAgICBsZXQgc2V0dGluZ0FycmF5ID0gZGF0YVsnQm9keSddO1xuXG4gICAgICAgIGxldCBwcmVzZXQgOiBDdXN0b21lckZpbHRlclByZXNldDtcbiAgICAgICAgaWYoc2V0dGluZ0FycmF5Lmxlbmd0aCA9ISAwKSB7XG4gICAgICAgICAgcHJlc2V0ID0gSlNPTi5wYXJzZShzZXR0aW5nQXJyYXlbMF0uU2V0dGluZ1ZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0RmlsdGVyQ3JpdGVyaWFQcmVzZXQnLHByZXNldCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChwcmVzZXQpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc2F2ZUZpbHRlckNyaXRlcmlhKGZpbHRlckNyaXRlcmlhIDogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IHNhdmVGaWx0ZXJDcml0ZXJpYTogQ3VzdG9tZXJTYXZlUHJlc2V0QVBJID0gPEN1c3RvbWVyU2F2ZVByZXNldEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdzYXZlQ3VzdG9tZXJGaWx0ZXJQcmVzZXQnKTtcblxuICAgIHNhdmVGaWx0ZXJDcml0ZXJpYS5zZXRGaWx0ZXJDcml0ZXJpYShmaWx0ZXJDcml0ZXJpYSk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHNhdmVGaWx0ZXJDcml0ZXJpYSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLXNhdmVGaWx0ZXJDcml0ZXJpYScsZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrSW5GaWx0ZXJDcml0ZXJpYShjbGllbnRJRCA6IHN0cmluZyxmaWx0ZXJDcml0ZXJpYSA6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBsZXQgY3VzdG9tZXJMaXN0QVBJOiBDdXN0b21lckxpc3RBUEkgPSA8Q3VzdG9tZXJMaXN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyTGlzdCcpO1xuXG4gICAgY3VzdG9tZXJMaXN0QVBJLmZpbHRlckNyaXRlcmlhID0gZmlsdGVyQ3JpdGVyaWE7XG4gICAgY3VzdG9tZXJMaXN0QVBJLmNsaWVudElEID0gY2xpZW50SUQ7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyTGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWNoZWNrSW5GaWx0ZXJDcml0ZXJpYScsZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydCb2R5J10ubGVuZ3RoICE9IDApO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy9nZXQgY3VzdG9tZXIgZGF0YXNcbiAgZ2V0Q3VzdG9tZXJMaXN0KGZpbHRlckNyaXRlcmlhIDogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSxfcGFnZUluZm8gOiBQYWdlSW5mbyk6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJJdGVtPj4ge1xuICAgIGxldCBjdXN0b21lckxpc3RBUEk6IEN1c3RvbWVyTGlzdEFQSSA9IDxDdXN0b21lckxpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0Q3VzdG9tZXJMaXN0Jyk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyTGlzdCcsZmlsdGVyQ3JpdGVyaWEsX3BhZ2VJbmZvKTtcblxuICAgIGN1c3RvbWVyTGlzdEFQSS5maWx0ZXJDcml0ZXJpYSA9IGZpbHRlckNyaXRlcmlhO1xuICAgIGN1c3RvbWVyTGlzdEFQSS5wYWdlSW5mbyA9IF9wYWdlSW5mbztcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZ2V0Q3VzdG9tZXJMaXN0JyxkYXRhKTtcblxuICAgICAgICBsZXQgcmV0dXJuTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckl0ZW0+KCk7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkYXRhWydIZWFkZXInXTtcbiAgICAgICAgbGV0IGN1c3RvbWVyTGlzdCA9IGRhdGFbJ0JvZHknXTtcblxuICAgICAgICAvL3NldCBoZWFkZXIgcGFnZUluZm9cbiAgICAgICAgLy8gX3BhZ2VJbmZvLnRvdGFsUGFnZSA9IGhlYWRlci5QYWdlSW5mby50b3RhbFBhZ2U7XG4gICAgICAgIC8vIF9wYWdlSW5mby50b3RhbFJlYyA9IGhlYWRlci5QYWdlSW5mby50b3RhbFJlYztcblxuICAgICAgICAvL3NldCBib2R5IGRhdGFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXN0b21lckxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQganNvbiA9IGN1c3RvbWVyTGlzdFtpXTtcbiAgICAgICAgICBsZXQgaXNPdGhlclN5c3RlbSA9IGpzb24uRGF0YVNvdXJjZSAhPSAnQVBQJztcbiAgICAgICAgICBsZXQgaXNGb2xsb3cgPSBqc29uLklzRm9sbG93ID09ICdZJztcbiAgICAgICAgICBsZXQgY29tcGxldGVuZXNzID0ganNvbi5Db21wbGV0ZW5lc3M7XG4gICAgICAgICAgbGV0IGlzT3ZlclRpbWVBbGVydCA9IGpzb24uSXNPdmVyVGltZUFsZXJ0O1xuICAgIFxuXG4gICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbWVySXRlbShqc29uLkNsaWVudElELGpzb24uRmlyc3ROYW1lLGpzb24uTGFzdE5hbWUsanNvbi5Qb3NzaWJpbGl0eSxjb21wbGV0ZW5lc3MsaXNGb2xsb3csaXNPdGhlclN5c3RlbSxpc092ZXJUaW1lQWxlcnQpO1xuICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5MaXN0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEN1c3RvbWVyQmlydGhkYXlMaXN0KHRhcmdldERhdGUsIHN1Yk4sIGFkZE4pOiBPYnNlcnZhYmxlPEFycmF5PEN1c3RvbWVyQmlydGhkYXk+PiB7XG4gICAgbGV0IGN1c3RvbWVyQmlydGhkYXlMaXN0QVBJOiBDdXN0b21lckJpcnRoZGF5TGlzdEFQSSA9IDxDdXN0b21lckJpcnRoZGF5TGlzdEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckJpcnRoZGF5TGlzdCcpO1xuICAgIGN1c3RvbWVyQmlydGhkYXlMaXN0QVBJLnN1Yk4gPSBzdWJOO1xuICAgIGN1c3RvbWVyQmlydGhkYXlMaXN0QVBJLmFkZE4gPSBhZGROO1xuICAgIGN1c3RvbWVyQmlydGhkYXlMaXN0QVBJLnRhcmdldERhdGUgPSB0YXJnZXREYXRlO1xuICBcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckJpcnRoZGF5TGlzdCcsZGF0YSk7XG5cbiAgICAgICAgbGV0IHJldHVybkxpc3QgOkFycmF5PEN1c3RvbWVyQmlydGhkYXk+ID0gW107XG4gICAgICAgIC8vIGxldCBoZWFkZXIgPSBkYXRhWydIZWFkZXInXTtcbiAgICAgICAgbGV0IGJpcnRoZGF5TGlzdCA9IGRhdGFbJ0JvZHknXTtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VzU2VyOiBcIiwgYmlydGhkYXlMaXN0KTtcblxuICAgICAgICAvLyAvL3NldCBib2R5IGRhdGFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaXJ0aGRheUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tZXJCaXJ0aGRheShiaXJ0aGRheUxpc3RbaV1bJ0NsaWVudElEJ10sIGJpcnRoZGF5TGlzdFtpXVsnRmlyc3ROYW1lJ10sIGJpcnRoZGF5TGlzdFtpXVsnTGFzdE5hbWUnXSwgYmlydGhkYXlMaXN0W2ldWydCaXJ0aGRheU1vbnRoJ10sIGJpcnRoZGF5TGlzdFtpXVsnQmlydGhkYXlEYXRlJ10pO1xuICAgICAgICAgIHJldHVybkxpc3QucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXR1cm5MaXN0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBcblxuXG4gICAgfSk7XG4gIH1cblxuICBjb252ZXJ0Q3VzdG9tZXJEZXRhaWxEaXNwbGF5TW9kZShjdXN0b21lciA6IEN1c3RvbWVyRGV0YWlsKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnY29udmVydEN1c3RvbWVyRGV0YWlsRGlzcGxheU1vZGUnLGN1c3RvbWVyKTtcblxuICAgIGN1c3RvbWVyLmFnZVJhbmdlID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfQWdlJyxjdXN0b21lci5hZ2VSYW5nZSk7XG4gICAgY3VzdG9tZXIuZ2VuZGVyID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfR2VuZGVyJyxjdXN0b21lci5nZW5kZXIpO1xuICAgIGN1c3RvbWVyLmluY29tZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX0luY29tZScsY3VzdG9tZXIuaW5jb21lKTtcbiAgICBjdXN0b21lci5zb3VyY2UgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9Tb3VyY2UnLGN1c3RvbWVyLnNvdXJjZSk7XG4gICAgY3VzdG9tZXIubWFycmlhZ2UgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9NYXJyaWFnZScsY3VzdG9tZXIubWFycmlhZ2UpO1xuICAgIGN1c3RvbWVyLmNoaWxkcmVuID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfQ2hpbGRyZW4nLGN1c3RvbWVyLmNoaWxkcmVuKTtcbiAgICBjdXN0b21lci5mYW1pbGlhcml0eSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX0ZhbWlsaWFyaXR5JyxjdXN0b21lci5mYW1pbGlhcml0eSk7XG4gICAgY3VzdG9tZXIucmVjZW50U3RhdHVzID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfUmVjZW50U3RhdHVzJyxjdXN0b21lci5yZWNlbnRTdGF0dXMpO1xuICAgIGN1c3RvbWVyLm1hbnBhID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfU3RhdHVzJyxjdXN0b21lci5tYW5wYSk7XG4gICAgY3VzdG9tZXIuY29udGFjdEZyZXF1YW5jeSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX0NvbnRhY3RGcmVxdWFuY3knLGN1c3RvbWVyLmNvbnRhY3RGcmVxdWFuY3kpO1xuICAgIGN1c3RvbWVyLnBvc3NpYmlsaXR5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfUG9zc2liaWxpdHknLGN1c3RvbWVyLnBvc3NpYmlsaXR5KTtcbiAgICAgICAgXG4gICAgY3VzdG9tZXIudGVscy5mb3JFYWNoKCh0ZWwpID0+IHtcbiAgICAgIHRlbC50ZWxUeXBlID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ3VzdG9tZXJfVGVsVHlwZScsdGVsLnRlbFR5cGUpO1xuICAgIH0pO1xuXG4gICAgY3VzdG9tZXIuZW1haWxzLmZvckVhY2goKGVtYWlsKSA9PiB7XG4gICAgICBlbWFpbC5lbWFpbFR5cGUgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDdXN0b21lcl9FbWFpbFR5cGUnLGVtYWlsLmVtYWlsVHlwZSk7XG4gICAgfSk7XG5cbiAgICBjdXN0b21lci5hZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgYWRkcmVzcy5hZGRyZXNzVHlwZSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX0FkZHJlc3NUeXBlJyxhZGRyZXNzLmFkZHJlc3NUeXBlKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZ2V0Q3VzdG9tZXJEZXRhaWwoY2xpZW50SUQgOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEN1c3RvbWVyRGV0YWlsPiB7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShjbGllbnRJRCkpIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh1bmRlZmluZWQpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGN1c3RvbWVyRGV0YWlsQVBJOiBDdXN0b21lckRldGFpbEFQSSA9IDxDdXN0b21lckRldGFpbEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lckRldGFpbCcpO1xuICAgICAgY3VzdG9tZXJEZXRhaWxBUEkuaWQgPSBjbGllbnRJRDtcbiAgICAgIFxuICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcik9PntcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyRGV0YWlsQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWpzb24nLGRhdGEpO1xuICAgICAgICAgIGxldCBjdXN0b21lciAgPSBkYXRhWydCb2R5J11bMF07XG5cbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWdldEN1c3RvbWVyRGV0YWlsJyxjdXN0b21lcik7XG5cbiAgICAgICAgICBsZXQgYWdlUmFuZ2UgOiBzdHJpbmcgPSBjdXN0b21lci5BZ2VSYW5nZTtcbiAgICAgICAgICBsZXQgZ2VuZGVyIDogc3RyaW5nID0gY3VzdG9tZXIuR2VuZGVyO1xuICAgICAgICAgIGxldCBpbmNvbWUgOiBzdHJpbmcgPSBjdXN0b21lci5JbmNvbWU7XG4gICAgICAgICAgbGV0IHNvdXJjZSA6IHN0cmluZyA9IGN1c3RvbWVyLlNvdXJjZTtcbiAgICAgICAgICBsZXQgbWFycmlhZ2UgOiBzdHJpbmcgPSBjdXN0b21lci5NYXJyaWFnZTtcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gOiBzdHJpbmcgPSBjdXN0b21lci5DaGlsZHJlbjtcbiAgICAgICAgICBsZXQgZmFtaWxpYXJpdHkgOiBzdHJpbmcgPSBjdXN0b21lci5GYW1pbGlhcml0eTtcbiAgICAgICAgICBsZXQgcmVjZW50U3RhdHVzIDogc3RyaW5nID0gY3VzdG9tZXIuUmVjZW50U3RhdHVzO1xuICAgICAgICAgIGxldCBtYW5wYSA6IHN0cmluZyA9IGN1c3RvbWVyLk1BTlBBO1xuICAgICAgICAgIGxldCBjb250YWN0RnJlcXVhbmN5IDogc3RyaW5nID0gY3VzdG9tZXIuQ29udGFjdEZyZXF1YW5jeTtcbiAgICAgICAgICBsZXQgcG9zc2liaWxpdHkgOiBzdHJpbmcgPSBjdXN0b21lci5Qb3NzaWJpbGl0eTtcbiAgICAgICAgICBsZXQgaXNGb2xsb3cgOiBib29sZWFuID0gY3VzdG9tZXIuSXNGb2xsb3cgPT0gJ1knO1xuXG4gICAgICAgICAgbGV0IGJpcnRoZGF5IDogRGF0ZTtcblxuICAgICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXIuQmlydGhkYXlZZWFyKSAmJiBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyLkJpcnRoZGF5TW9udGgpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoY3VzdG9tZXIuQmlydGhkYXlEYXRlKSkge1xuICAgICAgICAgICAgYmlydGhkYXkgPSBuZXcgRGF0ZShOdW1iZXIoY3VzdG9tZXIuQmlydGhkYXlZZWFyKSxOdW1iZXIoY3VzdG9tZXIuQmlydGhkYXlNb250aCkgLSAxLE51bWJlcihjdXN0b21lci5CaXJ0aGRheURhdGUpKTtcbiAgICAgICAgICB9XG4gXG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IGN1c3RvbWVyRGV0YWlsIDogQ3VzdG9tZXJEZXRhaWwgPSBuZXcgQ3VzdG9tZXJEZXRhaWwoKTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmNsaWVudElEID0gY3VzdG9tZXIuQ2xpZW50SUQ7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5sYXN0TmFtZSA9ICggU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShjdXN0b21lci5MYXN0TmFtZSk/IGN1c3RvbWVyLkxhc3ROYW1lIDogJycpO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuZmlyc3ROYW1lID0gKCBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGN1c3RvbWVyLkZpcnN0TmFtZSk/IGN1c3RvbWVyLkZpcnN0TmFtZSA6ICcnKTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLm9jY3VwYXRpb24gPSBjdXN0b21lci5PY2N1cGF0aW9uO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuY29tcGFueSA9IGN1c3RvbWVyLkNvbXBhbnk7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5iaXJ0aGRheSA9IGJpcnRoZGF5O1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuYWdlUmFuZ2UgPSBhZ2VSYW5nZTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmdlbmRlciA9IGdlbmRlcjtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLmluY29tZSA9IGluY29tZTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLm1hcnJpYWdlID0gbWFycmlhZ2U7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuZmFtaWxpYXJpdHkgPSBmYW1pbGlhcml0eTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLnJlY2VudFN0YXR1cyA9IHJlY2VudFN0YXR1cztcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLm1hbnBhID0gbWFucGE7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5jb250YWN0RnJlcXVhbmN5ID0gY29udGFjdEZyZXF1YW5jeTtcbiAgICAgICAgICAgIGN1c3RvbWVyRGV0YWlsLnBvc3NpYmlsaXR5ID0gcG9zc2liaWxpdHk7XG4gICAgICAgICAgICBjdXN0b21lckRldGFpbC5pc0ZvbGxvdyA9IGlzRm9sbG93O1xuICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuZGF0YVNvdXJjZSA9IGN1c3RvbWVyLkRhdGFTb3VyY2U7XG5cblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1c3RvbWVyLnRlbC5tYXAodGVsPT4gbmV3IEN1c3RvbWVyVGVsKHRlbC5DbGllbnRJRCx0ZWwuVGVsVHlwZSx0ZWwuVGVsLHRlbC5EYXRhU291cmNlKSkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuYWRkVGVsKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN1c3RvbWVyLmVtYWlsLm1hcChlbWFpbD0+IG5ldyBDdXN0b21lckVtYWlsKGVtYWlsLkNsaWVudElELGVtYWlsLkVtYWlsVHlwZSxlbWFpbC5FbWFpbCxlbWFpbC5EYXRhU291cmNlKSkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuYWRkRW1haWwoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VzdG9tZXIuYWRkcmVzcy5tYXAoYWRkcmVzcz0+IG5ldyBDdXN0b21lckFkZHJlc3MoYWRkcmVzcy5DbGllbnRJRCxhZGRyZXNzLkFkZHJlc3NUeXBlLGFkZHJlc3MuQ291bnRyeSxhZGRyZXNzLkNpdHksYWRkcmVzcy5BcmVhLGFkZHJlc3MuWmlwY29kZSxhZGRyZXNzLkFkZHJlc3MsYWRkcmVzcy5EYXRhU291cmNlKSkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgY3VzdG9tZXJEZXRhaWwuYWRkQWRkcmVzcyhlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZTonLGN1c3RvbWVyRGV0YWlsKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGN1c3RvbWVyRGV0YWlsKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIFxuICB9XG5cbiAgaW1wb3J0Q29udGFjdChpdGVtcyA6IEFycmF5PENvbnRhY3RJdGVtPikgOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCBpbXBvcnRDb250YWN0QVBJOiAgSW1wb3J0Q29udGFjdEFQSSA9IDxJbXBvcnRDb250YWN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2ltcG9ydENvbnRhY3QnKTtcbiAgICBcbiAgICBjb25zb2xlLmRlYnVnKCdjdXN0b21lci1zZXJ2aWNlLWltcG9ydENvbnRhY3QnLGl0ZW1zKTtcbiAgICBpbXBvcnRDb250YWN0QVBJLnNldEl0ZW1zKGl0ZW1zKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChpbXBvcnRDb250YWN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1pbXBvcnRDb250YWN0JyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIHZhbGlkUHJvZmlsZShjdXN0b21lckRldGFpbCA6IEN1c3RvbWVyRGV0YWlsKTogVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSBuZXcgVmFsaWRhdGlvblJlc3VsdCgpO1xuXG4gICAgLy92YWxpZCByZXF1aXJlZFxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGN1c3RvbWVyRGV0YWlsLmxhc3ROYW1lKSlcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2xhc3ROYW1lJywgJ3JlcXVpcmVkJyk7XG4gICAgLy8gaWYgKGN1c3RvbWVyUHJvZmlsZS5maXJzdE5hbWUgPT0gJycpXG4gICAgLy8gICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdmaXJzdE5hbWUnLCAncmVxdWlyZWQnKTtcbiAgICBcbiAgICAvL3ZhbGlkIGZvcm1hdCAgICAgIFxuXG4gICAgLy92YWxpZCBlbWFpbFxuICAgIGlmKGN1c3RvbWVyRGV0YWlsLmVtYWlscy5sZW5ndGggIT0gMCApIHtcbiAgICAgIGN1c3RvbWVyRGV0YWlsLmVtYWlscy5mb3JFYWNoKChlbWFpbCkgPT4ge1xuICAgICAgICBpZighZW1haWwuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgaWYoIXRoaXMuaXNFbWFpbEZvcm1hdChlbWFpbC5lbWFpbCkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2VtYWlsJywnZm9ybWF0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH1cblxuICAgIC8vdmFsaWQgZGF0ZVxuICAgIC8vIGlmKGN1c3RvbWVyUHJvZmlsZS5iaXJ0aGRheSA9PSBudWxsKSB7XG4gICAgLy8gICB2YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdiaXJ0aGRheScsICdkYXRlJyk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25SZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGlzRW1haWxGb3JtYXQoZW1haWwpIHtcbiAgICBsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyk7XG5cbiAgICByZXR1cm4gcmVnZXhwLnRlc3QoZW1haWwpO1xuICB9XG5cbiAgc2F2ZUN1c3RvbWVyRGV0YWlsKGN1c3RvbWVyRGV0YWlsIDogQ3VzdG9tZXJEZXRhaWwpOk9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coXCJzYXZlQ3VzdG9tZXJQcm9maWxlXCIsY3VzdG9tZXJEZXRhaWwpO1xuXG4gICAgLy9jaGVjayB0ZWwvZW1haWwvYWRkcmVzcyBkZWZhdWx0IHR5cGVcbiAgICBjdXN0b21lckRldGFpbC50ZWxzLmZvckVhY2goKHRlbCkgPT4ge1xuICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0ZWwudGVsVHlwZSkpIHRlbC50ZWxUeXBlID0gJ1RlbEhvbWUnO1xuICAgIH0pO1xuXG4gICAgY3VzdG9tZXJEZXRhaWwuZW1haWxzLmZvckVhY2goKGVtYWlsKSA9PiB7XG4gICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KGVtYWlsLmVtYWlsVHlwZSkpIGVtYWlsLmVtYWlsVHlwZSA9ICdNYWlsSG9tZSc7XG4gICAgfSk7XG5cbiAgICBjdXN0b21lckRldGFpbC5hZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eShhZGRyZXNzLmFkZHJlc3NUeXBlKSkgYWRkcmVzcy5hZGRyZXNzVHlwZSA9ICdBZGRyZXNzVHlwZUhvbWUnO1xuICAgIH0pO1xuXG4gICAgbGV0IHNhdmVDdXN0b21lckRldGFpbEFQSSA6IEN1c3RvbWVyU2F2ZURldGFpbEFQSSA9IDxDdXN0b21lclNhdmVEZXRhaWxBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnc2F2ZUN1c3RvbWVyRGV0YWlsJyk7IFxuICBcbiAgICBzYXZlQ3VzdG9tZXJEZXRhaWxBUEkuc2V0RGV0YWlsKGN1c3RvbWVyRGV0YWlsKTtcblxuICAgIGxldCBzdWJqZWN0ID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHNhdmVDdXN0b21lckRldGFpbEFQSSkuc3Vic2NyaWJlKChkYXRhKT0+e1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2Utc2F2ZUN1c3RvbWVyRGV0YWlsJyxkYXRhKTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTsgXG4gICAgICB9KVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJzdWJqZWN0OiBcIiwgc3ViamVjdCk7XG4gICAgcmV0dXJuIHN1YmplY3Q7XG5cbiAgfVxuXG4gIGRlbGV0ZUN1c3RvbWVyUHJvZmlsZShjbGllbnRJRCA6IHN0cmluZykgOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlQ3VzdG9tZXJQcm9maWxlXCIsY2xpZW50SUQpO1xuICAgIGxldCBkZWxldGVBUEkgOiBDdXN0b21lckRlbGV0ZUFQSSA9IDxDdXN0b21lckRlbGV0ZUFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdkZWxldGVDdXN0b21lcicpOyBcbiAgICBkZWxldGVBUEkuY2xpZW50SUQgPSBjbGllbnRJRDtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZGVsZXRlQVBJKS5zdWJzY3JpYmUoKGRhdGEpPT57XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1kZWxldGVDdXN0b21lclByb2ZpbGUnLGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpOyBcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEN1c3RvbWVyQ29udGFjdE5vdGUoY2xpZW50SUQgOiBzdHJpbmcscGFnZUluZm8gOiBQYWdlSW5mbyk6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJDb250YWN0Tm90ZT4+e1xuICAgIGxldCBjdXN0b21lckNvbnRhY3ROb3RlQVBJIDogQ3VzdG9tZXJDb250YWN0Tm90ZUFQSSA9IDxDdXN0b21lckNvbnRhY3ROb3RlQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldEN1c3RvbWVyQ29udGFjdE5vdGUnKTtcblxuICAgIGN1c3RvbWVyQ29udGFjdE5vdGVBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuICAgIGN1c3RvbWVyQ29udGFjdE5vdGVBUEkuc2V0UGFnZUluZm8ocGFnZUluZm8pO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckNvbnRhY3ROb3RlJyxjdXN0b21lckNvbnRhY3ROb3RlQVBJKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyQ29udGFjdE5vdGVBUEkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuXG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckNvbnRhY3ROb3RlJyxkYXRhKTtcblxuICAgICAgICBsZXQgcmV0dXJuQ3VzdG9tZXJDb250YWN0Tm90ZTogQXJyYXk8Q3VzdG9tZXJDb250YWN0Tm90ZT4gPSBuZXcgQXJyYXk8Q3VzdG9tZXJDb250YWN0Tm90ZT4oKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyQ29udGFjdE5vdGVMaXN0ID0gZGF0YVsnQm9keSddO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VzdG9tZXJDb250YWN0Tm90ZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQganNvbiA9IGN1c3RvbWVyQ29udGFjdE5vdGVMaXN0W2ldO1xuICAgICAgICAgIGxldCB1c2VyID0gbmV3IEN1c3RvbWVyQ29udGFjdE5vdGUoanNvbi5DbGllbnRJRCxuZXcgRGF0ZShqc29uLk5vdGVUaW1lKSxqc29uLk5vdGUpOyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm5DdXN0b21lckNvbnRhY3ROb3RlLnB1c2godXNlcik7XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkN1c3RvbWVyQ29udGFjdE5vdGUpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkQ3VzdG9tZXJDb250YWN0KGNsaWVudElEIDogc3RyaW5nLGN1c3RvbWVyQ2xpZW50SUQgOiBzdHJpbmcsbm90ZSA6IHN0cmluZyxub3RlVGltZSA6IERhdGUpIDogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcImFkZEN1c3RvbWVyQ29udGFjdFwiKTtcbiAgICBsZXQgYWRkQ3VzdG9tZXJDb250YWN0QVBJIDogQ3VzdG9tZXJBZGRDb250YWN0Tm90ZUFQSSA9IDxDdXN0b21lckFkZENvbnRhY3ROb3RlQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2FkZEN1c3RvbWVyQ29udGFjdE5vdGUnKTsgXG4gICAgYWRkQ3VzdG9tZXJDb250YWN0QVBJLnNldENsaWVudElEKGNsaWVudElEKTtcbiAgICBhZGRDdXN0b21lckNvbnRhY3RBUEkuc2V0Q3VzdG9tZXJDbGllbnRJRChjdXN0b21lckNsaWVudElEKTtcbiAgICBhZGRDdXN0b21lckNvbnRhY3RBUEkuc2V0Tm90ZShub3RlKTtcbiAgICBhZGRDdXN0b21lckNvbnRhY3RBUEkuc2V0Tm90ZVRpbWUobm90ZVRpbWUpXG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goYWRkQ3VzdG9tZXJDb250YWN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1hZGRDdXN0b21lckNvbnRhY3QnLGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRDdXN0b21lckNvbnRhY3QoY29udGFjdENsaWVudElEIDogc3RyaW5nLG5vdGUgOiBzdHJpbmcsbm90ZVRpbWUgOiBEYXRlKSA6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc29sZS5sb2coXCJlZGl0Q3VzdG9tZXJDb250YWN0XCIpO1xuICAgIGxldCBlZGl0Q3VzdG9tZXJDb250YWN0QVBJIDogQ3VzdG9tZXJFZGl0Q29udGFjdE5vdGVBUEkgPSA8Q3VzdG9tZXJFZGl0Q29udGFjdE5vdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZWRpdEN1c3RvbWVyQ29udGFjdE5vdGUnKTsgXG4gICAgZWRpdEN1c3RvbWVyQ29udGFjdEFQSS5zZXRDb250YWN0Q2xpZW50SUQoY29udGFjdENsaWVudElEKTtcbiAgICBlZGl0Q3VzdG9tZXJDb250YWN0QVBJLnNldE5vdGUobm90ZSk7XG4gICAgZWRpdEN1c3RvbWVyQ29udGFjdEFQSS5zZXROb3RlVGltZShub3RlVGltZSlcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpPT57XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZWRpdEN1c3RvbWVyQ29udGFjdEFQSSkuc3Vic2NyaWJlKChkYXRhKT0+e1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZWRpdEN1c3RvbWVyQ29udGFjdCcsZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7IFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlQ3VzdG9tZXJDb250YWN0KGNvbnRhY3RDbGllbnRJRCA6IHN0cmluZykgOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlQ3VzdG9tZXJDb250YWN0XCIpO1xuICAgIGxldCBkZWxldGVDdXN0b21lckNvbnRhY3RBUEkgOiBDdXN0b21lckRlbGV0ZUNvbnRhY3ROb3RlQVBJID0gPEN1c3RvbWVyRGVsZXRlQ29udGFjdE5vdGVBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZGVsZXRlQ3VzdG9tZXJDb250YWN0Tm90ZScpOyBcbiAgICBkZWxldGVDdXN0b21lckNvbnRhY3RBUEkuc2V0Q29udGFjdENsaWVudElEKGNvbnRhY3RDbGllbnRJRCk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGRlbGV0ZUN1c3RvbWVyQ29udGFjdEFQSSkuc3Vic2NyaWJlKChkYXRhKT0+e1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbWVyLXNlcnZpY2UtZWRpdEN1c3RvbWVyQ29udGFjdCcsZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7IFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q3VzdG9tZXJDb250YWN0VGVsKGNsaWVudElEIDogc3RyaW5nKSA6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJUZWw+PntcbiAgICBsZXQgY3VzdG9tZXJUZWxBUEkgOiBDdXN0b21lclRlbEFQSSA9IDxDdXN0b21lclRlbEFQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCdnZXRDdXN0b21lclRlbCcpO1xuXG4gICAgY3VzdG9tZXJUZWxBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckNvbnRhY3RUZWwnLGN1c3RvbWVyVGVsQVBJKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKT0+e1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGN1c3RvbWVyVGVsQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tZXItc2VydmljZS1nZXRDdXN0b21lckNvbnRhY3RUZWwgcmVzcG9uc2UnLGRhdGEpO1xuICAgICAgICBsZXQgcmV0dXJuQ3VzdG9tZXJUZWw6IEFycmF5PEN1c3RvbWVyVGVsPiA9IG5ldyBBcnJheTxDdXN0b21lclRlbD4oKTtcbiAgICAgICAgbGV0IGN1c3RvbWVyVGVsTGlzdCA9IGRhdGFbJ0JvZHknXTtcblxuICAgICAgICBjdXN0b21lclRlbExpc3QubWFwKHRlbD0+IG5ldyBDdXN0b21lclRlbCh0ZWwuQ2xpZW50SUQsIHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0N1c3RvbWVyX1RlbFR5cGUnLHRlbC5UZWxUeXBlKSx0ZWwuVGVsLHRlbC5EYXRhU291cmNlKSkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICByZXR1cm5DdXN0b21lclRlbC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5uZXh0KHJldHVybkN1c3RvbWVyVGVsKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBcbn1cbiJdfQ==