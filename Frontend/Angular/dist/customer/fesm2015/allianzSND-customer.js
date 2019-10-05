import { trigger, state, style, animate, transition } from '@angular/animations';
import { CalendarService, CalendarEventDetail, CalendarEditComponent, CalendarModule } from '@allianzSND/calendar';
import { __awaiter } from 'tslib';
import { Injectable, InjectionToken, Component, Input, Output, EventEmitter, ChangeDetectorRef, NgModule, ElementRef, ViewChild, Optional, Inject, defineInjectable, inject } from '@angular/core';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxDropdownModule, NxRadioModule, NxMessageModule, NxModalModule, NxAccordionModule } from '@allianz/ngx-ndbx';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { NxDatefieldModule, NxNativeDateModule } from '@allianz/ngx-ndbx/datefield';
import { NxProgressbarModule } from '@allianz/ngx-ndbx/progressbar';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectOption, UIModule } from '@allianzSND/ui';
import { CommonModule, DatePipe } from '@angular/common';
import { differenceInCalendarDays, addDays, addHours, addMinutes, getDate, getHours, getMinutes, getMonth, getYear, subMinutes, subDays, setYear } from 'date-fns';
import { StringUtils, APIFactory, APIDispatch, ProfileCodeService, ValidationResult, DateUtils, ClientCustomDao, EqualRestriction, OrderByRestriction, LimitRestriction, OffsetRestriction, InRestriction, LikeRestriction, ORCompoundRestriction, AndCompoundRestriction, PageInfo, LessOrEqualRestriction, GreaterOrEqualRestriction, NotEqualRestriction, SQLCommand, Language, CoreModule, TranslateService, DeviceService, ExtensionService } from '@allianzSND/core';
import { Observable, Subject, of, from } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerDetail {
    constructor() {
        this._emails = new Array();
        this._tels = new Array();
        this._addresses = new Array();
        if (StringUtils.isEmpty(this.firstName))
            this.firstName = '';
        if (StringUtils.isEmpty(this.occupation))
            this.occupation = '';
        if (StringUtils.isEmpty(this.company))
            this.company = '';
        if (StringUtils.isEmpty(this.ageRange))
            this.ageRange = undefined;
        if (StringUtils.isEmpty(this.gender))
            this.gender = undefined;
        if (StringUtils.isEmpty(this.income))
            this.income = undefined;
        if (StringUtils.isEmpty(this.source))
            this.source = undefined;
        if (StringUtils.isEmpty(this.marriage))
            this.marriage = undefined;
        if (StringUtils.isEmpty(this.children))
            this.children = undefined;
        if (StringUtils.isEmpty(this.familiarity))
            this.familiarity = undefined;
        if (StringUtils.isEmpty(this.recentStatus))
            this.recentStatus = undefined;
        if (StringUtils.isEmpty(this.manpa))
            this.manpa = undefined;
        if (StringUtils.isEmpty(this.contactFrequancy))
            this._contactFrequancy = undefined;
        if (StringUtils.isEmpty(this.possibility))
            this.possibility = '';
        if (StringUtils.isEmpty(this.clientID))
            this.clientID = '';
        this.updateEmptyStatus();
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @return {?}
     */
    get clientID() {
        return this._clientID;
    }
    /**
     * @return {?}
     */
    get lastName() {
        return this._lastName;
    }
    /**
     * @return {?}
     */
    get firstName() {
        return this._firstName;
    }
    /**
     * @return {?}
     */
    get tels() {
        return this._tels;
    }
    /**
     * @return {?}
     */
    get emails() {
        return this._emails;
    }
    /**
     * @return {?}
     */
    get addresses() {
        return this._addresses;
    }
    /**
     * @return {?}
     */
    get birthday() {
        return this._birthday;
    }
    /**
     * @return {?}
     */
    get ageRange() {
        return this._ageRange;
    }
    /**
     * @return {?}
     */
    get gender() {
        return this._gender;
    }
    /**
     * @return {?}
     */
    get occupation() {
        return this._occupation;
    }
    /**
     * @return {?}
     */
    get company() {
        return this._company;
    }
    /**
     * @return {?}
     */
    get income() {
        return this._income;
    }
    /**
     * @return {?}
     */
    get source() {
        return this._source;
    }
    /**
     * @return {?}
     */
    get marriage() {
        return this._marriage;
    }
    /**
     * @return {?}
     */
    get children() {
        return this._children;
    }
    /**
     * @return {?}
     */
    get familiarity() {
        return this._familiarity;
    }
    /**
     * @return {?}
     */
    get recentStatus() {
        return this._recentStatus;
    }
    /**
     * @return {?}
     */
    get manpa() {
        return this._manpa;
    }
    /**
     * @return {?}
     */
    get contactFrequancy() {
        return this._contactFrequancy;
    }
    /**
     * @return {?}
     */
    get possibility() {
        return this._possibility;
    }
    /**
     * @return {?}
     */
    get isFollow() {
        return this._isFollow;
    }
    /**
     * @return {?}
     */
    get isEmptyInfo() {
        return this._isEmptyInfo;
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        this._dataSource = dataSource;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} lastName
     * @return {?}
     */
    set lastName(lastName) {
        this._lastName = lastName;
    }
    /**
     * @param {?} firstName
     * @return {?}
     */
    set firstName(firstName) {
        this._firstName = firstName;
    }
    /**
     * @param {?} tels
     * @return {?}
     */
    set tels(tels) {
        this._tels = tels;
    }
    /**
     * @param {?} emails
     * @return {?}
     */
    set emails(emails) {
        this._emails = emails;
    }
    /**
     * @param {?} addresses
     * @return {?}
     */
    set addresses(addresses) {
        this._addresses = addresses;
    }
    /**
     * @param {?} birthday
     * @return {?}
     */
    set birthday(birthday) {
        this._birthday = birthday;
    }
    /**
     * @param {?} ageRange
     * @return {?}
     */
    set ageRange(ageRange) {
        this._ageRange = ageRange;
    }
    /**
     * @param {?} gender
     * @return {?}
     */
    set gender(gender) {
        this._gender = gender;
    }
    /**
     * @param {?} occupation
     * @return {?}
     */
    set occupation(occupation) {
        this._occupation = occupation;
    }
    /**
     * @param {?} company
     * @return {?}
     */
    set company(company) {
        this._company = company;
    }
    /**
     * @param {?} income
     * @return {?}
     */
    set income(income) {
        this._income = income;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    set source(source) {
        this._source = source;
    }
    /**
     * @param {?} marriage
     * @return {?}
     */
    set marriage(marriage) {
        this._marriage = marriage;
    }
    /**
     * @param {?} children
     * @return {?}
     */
    set children(children) {
        this._children = children;
    }
    /**
     * @param {?} familiarity
     * @return {?}
     */
    set familiarity(familiarity) {
        this._familiarity = familiarity;
    }
    /**
     * @param {?} recentStatus
     * @return {?}
     */
    set recentStatus(recentStatus) {
        this._recentStatus = recentStatus;
    }
    /**
     * @param {?} manpa
     * @return {?}
     */
    set manpa(manpa) {
        this._manpa = manpa;
    }
    /**
     * @param {?} contactFrequancy
     * @return {?}
     */
    set contactFrequancy(contactFrequancy) {
        this._contactFrequancy = contactFrequancy;
    }
    /**
     * @param {?} possibility
     * @return {?}
     */
    set possibility(possibility) {
        this._possibility = possibility;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    set isFollow(isFollow) {
        this._isFollow = isFollow;
    }
    /**
     * @param {?} isEmptyInfo
     * @return {?}
     */
    set isEmptyInfo(isEmptyInfo) {
        this._isEmptyInfo = isEmptyInfo;
    }
    /**
     * @return {?}
     */
    updateEmptyStatus() {
        if (this.birthday == null && StringUtils.isEmpty(this.gender) && StringUtils.isEmpty(this.occupation)
            && StringUtils.isEmpty(this.company) && StringUtils.isEmpty(this.income)
            && StringUtils.isEmpty(this.source) && StringUtils.isEmpty(this.marriage)
            && StringUtils.isEmpty(this.children) && StringUtils.isEmpty(this.familiarity)
            && StringUtils.isEmpty(this.manpa) && StringUtils.isEmpty(this.recentStatus)) {
            this.isEmptyInfo = true;
        }
        else {
            this.isEmptyInfo = false;
        }
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    updateFollowStatus(isFollow) {
        this.isFollow = isFollow;
    }
    /**
     * @param {?} email
     * @return {?}
     */
    addEmail(email) {
        this.emails.push(email);
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    addTel(tel) {
        this.tels.push(tel);
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addAddress(address) {
        this.addresses.push(address);
    }
    /**
     * @param {?} tel
     * @param {?} index
     * @return {?}
     */
    deleteTel(tel, index) {
        this.tels.splice(index, 1);
    }
    /**
     * @param {?} email
     * @param {?} index
     * @return {?}
     */
    deleteEmail(email, index) {
        this.emails.splice(index, 1);
    }
    /**
     * @param {?} addresses
     * @param {?} index
     * @return {?}
     */
    deleteAddress(addresses, index) {
        this.addresses.slice(index, 1);
    }
    /**
     * @return {?}
     */
    notOPUSTelNumber() {
        /** @type {?} */
        let count = 0;
        for (let i = 0; i < this.tels.length; i++) {
            if (this.tels[i].dataSource != 'OPUS')
                count++;
        }
        return count;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerContactNote {
    /**
     * @param {?} clientID
     * @param {?} date
     * @param {?} noteMessage
     */
    constructor(clientID, date, noteMessage) {
        this.clientID = clientID;
        this.date = date;
        this.noteMessage = noteMessage;
    }
    /**
     * @return {?}
     */
    getClientID() {
        return this.clientID;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerItem {
    /**
     * @param {?} clientID
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} possibility
     * @param {?} complementPercent
     * @param {?} isFollow
     * @param {?} isOtherSource
     * @param {?} isOverTimeAlert
     */
    constructor(clientID, firstName, lastName, possibility, complementPercent, isFollow, isOtherSource, isOverTimeAlert) {
        this._clientID = clientID;
        this._firstName = firstName;
        this._lastName = lastName;
        this._tag = possibility;
        this._complementPercent = complementPercent;
        this._isFollow = isFollow;
        this._isOtherSource = isOtherSource;
        if (isOverTimeAlert == 'Y') {
            this._isHighlight = true;
        }
        if (StringUtils.isEmpty(this._firstName))
            this._firstName = '';
    }
    /**
     * @return {?}
     */
    get isOtherSource() {
        return this._isOtherSource;
    }
    /**
     * @return {?}
     */
    get isFollow() {
        return this._isFollow;
    }
    /**
     * @return {?}
     */
    get clientID() {
        return this._clientID;
    }
    /**
     * @return {?}
     */
    get firstName() {
        return this._firstName;
    }
    /**
     * @return {?}
     */
    get lastName() {
        return this._lastName;
    }
    /**
     * @return {?}
     */
    get tag() {
        return this._tag;
    }
    /**
     * @return {?}
     */
    get complementPercent() {
        return this._complementPercent;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set firstName(name) {
        this._firstName = name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set lastName(name) {
        this._lastName = name;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    set tag(tag) {
        this._tag = tag;
    }
    /**
     * @param {?} complementPercent
     * @return {?}
     */
    set complementPercent(complementPercent) {
        this._complementPercent = complementPercent;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    set isFollow(isFollow) {
        this._isFollow = isFollow;
    }
    /**
     * @param {?} isOtherSource
     * @return {?}
     */
    set isOtherSource(isOtherSource) {
        this._isOtherSource = isOtherSource;
    }
    /**
     * @return {?}
     */
    get isHighlight() {
        return this._isHighlight;
    }
    /**
     * @param {?} isHighLight
     * @return {?}
     */
    set isHighLight(isHighLight) {
        this._isHighlight = isHighLight;
    }
    /**
     * @return {?}
     */
    get showName() {
        return this._showName;
    }
    /**
     * @param {?} showName
     * @return {?}
     */
    set showName(showName) {
        this._showName = showName;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerAlertItem {
    /**
     * @param {?} clientID
     * @param {?} name
     */
    constructor(clientID, name) {
        this._clientID = clientID;
        this._name = name;
    }
    /**
     * @return {?}
     */
    get clientID() {
        return this._clientID;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerAddress {
    /**
     * @param {?} clientID
     * @param {?} addressType
     * @param {?} country
     * @param {?} city
     * @param {?} area
     * @param {?} zipcode
     * @param {?} address
     * @param {?} dataSorce
     */
    constructor(clientID, addressType, country, city, area, zipcode, address, dataSorce) {
        this.clientID = clientID;
        this.addressType = addressType;
        this.country = country;
        this.city = city;
        this.area = area;
        this.zipcode = zipcode;
        this.address = address;
        this.dataSource = dataSorce;
    }
    /**
     * @return {?}
     */
    toFullAddress() {
        /** @type {?} */
        let array = [];
        if (StringUtils.isNotEmpty(this.country))
            array.push(this.country);
        if (StringUtils.isNotEmpty(this.city))
            array.push(this.city);
        if (StringUtils.isNotEmpty(this.area))
            array.push(this.area);
        if (StringUtils.isNotEmpty(this.zipcode))
            array.push(this.zipcode);
        if (StringUtils.isNotEmpty(this.address))
            array.push(this.address);
        return array.join(', ');
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return StringUtils.isEmpty(this.country)
            && StringUtils.isEmpty(this.city) && StringUtils.isEmpty(this.area)
            && StringUtils.isEmpty(this.zipcode) && StringUtils.isEmpty(this.address);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerEmail {
    /**
     * @param {?} _clientID
     * @param {?} _emailType
     * @param {?} _email
     * @param {?} _dataSource
     */
    constructor(_clientID, _emailType, _email, _dataSource) {
        this.clientID = _clientID;
        this.emailType = _emailType;
        this.email = _email;
        this.dataSource = _dataSource;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return StringUtils.isEmpty(this.email);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerTel {
    /**
     * @param {?} clientID
     * @param {?} telType
     * @param {?} tel
     * @param {?} dataSource
     */
    constructor(clientID, telType, tel, dataSource) {
        this.clientID = clientID;
        this.telType = telType;
        this.tel = tel;
        this.dataSource = dataSource;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return StringUtils.isEmpty(this.tel);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerBirthday {
    /**
     * @param {?} clientID
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} birthdayMonth
     * @param {?} birthdayDate
     */
    constructor(clientID, firstName, lastName, birthdayMonth, birthdayDate) {
        this._clientID = clientID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdayMonth = birthdayMonth;
        this.birthdayDate = birthdayDate;
        if (StringUtils.isEmpty(this.firstName))
            this.firstName = '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerService {
    /**
     * @param {?} dispatcher
     * @param {?} dateUtils
     * @param {?} APIFactory
     * @param {?} profileCodeService
     */
    constructor(dispatcher, dateUtils, APIFactory$$1, profileCodeService) {
        this.dispatcher = dispatcher;
        this.dateUtils = dateUtils;
        this.APIFactory = APIFactory$$1;
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
/** @nocollapse */ CustomerService.ngInjectableDef = defineInjectable({ factory: function CustomerService_Factory() { return new CustomerService(inject(APIDispatch), inject(DateUtils), inject(APIFactory), inject(ProfileCodeService)); }, token: CustomerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerFilterPreset {
    /**
     * @param {?} column
     * @param {?} values
     * @return {?}
     */
    addValues(column, values) {
        this[column] = values;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerFilterCriteria {
    /**
     * @param {?=} keyword
     * @param {?=} filterMap
     * @param {?=} savePreset
     */
    constructor(keyword = '', filterMap = new Map(), savePreset = false) {
        this.filterMap = new Map();
        this._savePreset = false;
        this._keyword = keyword;
        this.filterMap = filterMap;
        this._savePreset = savePreset;
    }
    /**
     * @param {?} filterCol
     * @param {?} value
     * @return {?}
     */
    addCriteria(filterCol, value) {
        /** @type {?} */
        let values = this.filterMap.get(filterCol);
        if (values == undefined)
            values = new Array();
        if (!values.includes(value)) {
            values.push(value);
            this.filterMap.set(filterCol, values);
        }
    }
    /**
     * @param {?} filterCol
     * @param {?} values
     * @return {?}
     */
    addCriteriaCols(filterCol, values) {
        this.filterMap.set(filterCol, values);
    }
    /**
     * @return {?}
     */
    hasCriteria() {
        return this.filterMap.size != 0 || StringUtils.isNotEmpty(this._keyword);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    set keyword(keyword) { this._keyword = keyword; }
    /**
     * @return {?}
     */
    get keyword() { return this._keyword; }
    /**
     * @param {?} isSave
     * @return {?}
     */
    set savePreset(isSave) {
        this._savePreset = isSave;
    }
    /**
     * @return {?}
     */
    get savePreset() { return this._savePreset; }
    /**
     * @return {?}
     */
    getFilterMap() {
        return this.filterMap;
    }
    /**
     * @return {?}
     */
    toPresetJSON() {
        /** @type {?} */
        let preset = new CustomerFilterPreset();
        this.filterMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        (value, column) => {
            preset.addValues(column, value);
        }));
        console.debug('toPresetJSON', preset);
        return preset;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerConfirmAction {
    constructor() {
    }
    /**
     * @param {?} action
     * @return {?}
     */
    set action(action) { this._action = action; }
    /**
     * @param {?} option
     * @return {?}
     */
    set option(option) { this._optionObj = option; }
    /**
     * @return {?}
     */
    get action() { return this._action; }
    /**
     * @return {?}
     */
    get option() { return this._optionObj; }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerImportGroup {
    /**
     * @param {?} groupName
     */
    constructor(groupName) {
        this._isShow = true;
        this._items = new Array();
        this._groupName = groupName;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        this._items.push(item);
    }
    /**
     * @return {?}
     */
    get getItems() {
        return this._items;
    }
    /**
     * @return {?}
     */
    get groupName() {
        return this._groupName;
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    set groupName(groupName) {
        this._groupName = groupName;
    }
    /**
     * @return {?}
     */
    get isShow() {
        return this._isShow;
    }
    /**
     * @param {?} isShow
     * @return {?}
     */
    set isShow(isShow) {
        this._isShow = isShow;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const syncCustomerToken = new InjectionToken('syncCustomer');
/** @type {?} */
const storeCustomerToken = new InjectionToken("storeCustomer");
/** @type {?} */
const customerActionToken = new InjectionToken("customerAction");
/** @type {?} */
const showCustomerRuleToken = new InjectionToken("showCustomerRule");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CUSTOMER_STATE = {
    DISPLAY: 'display',
    EDIT: 'edit',
    ADD_SAVED: 'add saved',
    EDIT_SAVED: 'edit saved',
    FIRST: 'first',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerUtils {
    /**
     * @param {?} profileCodeService
     */
    constructor(profileCodeService) {
        this.profileCodeService = profileCodeService;
    }
    /**
     * @param {?} codeArray
     * @return {?}
     */
    setCode2Option(codeArray) {
        /** @type {?} */
        let options = new Array();
        if (codeArray != undefined) {
            for (let code of codeArray) {
                options.push(new SelectOption(code.getCode(), code.displayText));
            }
        }
        return options;
    }
    /**
     * @param {?} customerDetail
     * @return {?}
     */
    countCompletenessByProfile(customerDetail) {
        console.debug('countCompletenessByDetail', customerDetail);
        //count Completeness
        /** @type {?} */
        let completeness = 0;
        /** @type {?} */
        let countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
            'Income', 'Source', 'Marriage', 'Children', 'Familiarity', 'RecentStatus', 'MANPA',
            'ContactFrequancy', 'Possibility'];
        if (StringUtils.isNotEmpty(customerDetail.firstName))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.lastName))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.occupation))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.company))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.ageRange))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.gender))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.income))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.source))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.marriage))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.children))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.familiarity))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.recentStatus))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.manpa))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.contactFrequancy))
            completeness++;
        if (StringUtils.isNotEmpty(customerDetail.possibility))
            completeness++;
        //count birthday
        if (customerDetail.birthday != undefined)
            completeness++;
        //count phone/email/address
        if (customerDetail.tels.length != 0)
            completeness++;
        if (customerDetail.emails.length != 0)
            completeness++;
        if (customerDetail.addresses.length != 0)
            completeness++;
        console.debug('orginal completeness', completeness, (countColumnName.length + 4));
        completeness = (completeness / (countColumnName.length + 4));
        console.debug('before round completeness', completeness);
        completeness = Math.round(completeness * 100) / 100;
        console.debug('after round completeness', completeness);
        return completeness;
    }
    /**
     * @param {?} customerObj
     * @param {?} telArraySize
     * @param {?} emailArraySize
     * @param {?} addressAddressSize
     * @return {?}
     */
    countCompleteness(customerObj, telArraySize, emailArraySize, addressAddressSize) {
        console.debug('countCompleteness', customerObj, telArraySize, emailArraySize, addressAddressSize);
        //count Completeness
        /** @type {?} */
        let completeness = 0;
        /** @type {?} */
        let countColumnName = ['FirstName', 'LastName', 'Occupation', 'Company', 'AgeRange', 'Gender',
            'Income', 'Source', 'Marriage', 'Children', 'Familiarity', 'RecentStatus', 'MANPA',
            'ContactFrequancy', 'Possibility'];
        for (let columnName of countColumnName) {
            if (StringUtils.isNotEmpty(customerObj.getValue(columnName))) {
                console.debug('hasData', columnName + '=>' + customerObj.getValue(columnName));
                completeness++;
            }
        }
        //count birthday
        if (StringUtils.isNotEmpty(customerObj.getValue('BirthdayYear')) &&
            StringUtils.isNotEmpty(customerObj.getValue('BirthdayMonth')) &&
            StringUtils.isNotEmpty(customerObj.getValue('BirthdayDate')))
            completeness++;
        //count phone/email/address
        if (telArraySize != 0)
            completeness++;
        if (emailArraySize != 0)
            completeness++;
        if (addressAddressSize != 0)
            completeness++;
        console.debug('orginal completeness', completeness, (countColumnName.length + 4));
        completeness = (completeness / (countColumnName.length + 4));
        console.debug('before round completeness', completeness);
        completeness = Math.round(completeness * 100) / 100;
        console.debug('after round completeness', completeness);
        customerObj.setValue('Completeness', completeness);
    }
    /**
     * @param {?} dataObject
     * @return {?}
     */
    setCustomerDefaultValue(dataObject) {
        //count age
        if (StringUtils.isNotEmpty(dataObject.getValue('BirthdayYear')) &&
            StringUtils.isNotEmpty(dataObject.getValue('BirthdayMonth')) &&
            StringUtils.isNotEmpty(dataObject.getValue('BirthdayDate'))) {
            /** @type {?} */
            let birthday = new Date(Number(dataObject.getValue('BirthdayYear')), Number(dataObject.getValue('BirthdayMonth') - 1), Number(dataObject.getValue('BirthdayDate')));
            /** @type {?} */
            let age = this.countAge(birthday);
            dataObject.setValue('age', age);
            //check age range
            if (StringUtils.isEmpty(dataObject.getValue('AgeRange'))) {
                /** @type {?} */
                let ageRange = this.countAgeRange(age);
                if (ageRange != undefined) {
                    dataObject.setValue('AgeRange', ageRange);
                }
            }
        }
    }
    /**
     * @param {?} age
     * @return {?}
     */
    countAgeRange(age) {
        console.debug('countAgeRange', age);
        /** @type {?} */
        let rangeResult;
        /** @type {?} */
        let ageRange = this.profileCodeService.getCodeArray('Customer_Age');
        ageRange.forEach((/**
         * @param {?} profileCode
         * @return {?}
         */
        profileCode => {
            /** @type {?} */
            let args = profileCode.getArguments();
            console.debug('customer-utils countAgeRange args', args);
            /** @type {?} */
            let obj = JSON.parse(args);
            console.debug('customer-utils countAgeRange obj', obj);
            if (age >= obj.start && age <= obj.end) {
                console.debug('match age range', profileCode.getCode());
                rangeResult = profileCode.getCode();
            }
        }));
        console.debug('rangeResult', rangeResult);
        return rangeResult;
    }
    /**
     * @param {?} birthday
     * @return {?}
     */
    countAge(birthday) {
        /** @type {?} */
        let dates = this.calCEIntervalDays(birthday, new Date());
        console.debug('dates', dates);
        /** @type {?} */
        let age = Math.floor(dates / 365);
        console.debug('age', age);
        return age;
    }
    /**
     * javascript傳入起始日與結束
     * 日期格式為民國年月日(EX.1060802)
     * 傳入 1060702,1060802 會回傳31天
     * 傳入 1060901,1061001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    calRocIntervalDays(sDate, eDate) {
        /** @type {?} */
        var msecPerMinute = 1000 * 60;
        /** @type {?} */
        var msecPerHour = msecPerMinute * 60;
        /** @type {?} */
        var msecPerDay = msecPerHour * 24;
        sDate = this.leftPad(sDate, 7, '0');
        eDate = this.leftPad(eDate, 7, '0');
        /** @type {?} */
        var begDateStr = "" + sDate.substring(3, 5) + "/" + sDate.substring(5) + "/" + (Number(sDate.substring(0, 3)) + Number(1911));
        /** @type {?} */
        var endDateStr = "" + eDate.substring(3, 5) + "/" + eDate.substring(5) + "/" + (Number(eDate.substring(0, 3)) + Number(1911));
        /** @type {?} */
        var begDate = new Date(begDateStr);
        /** @type {?} */
        var endDate = new Date(endDateStr);
        /** @type {?} */
        var interval = endDate.getTime() - begDate.getTime();
        /** @type {?} */
        var days = Math.floor(interval / msecPerDay);
        return days;
    }
    /**
     * javascript傳入起始日與結束
     * 日期格式為西元年月日(EX.20170801)
     * 傳入 20170702,20170802 會回傳31天
     * 傳入 20170901,20171001 會回傳30天
     * @param {?} sDate
     * @param {?} eDate
     * @return {?} 天數
     */
    calCEIntervalDays(sDate, eDate) {
        // var msecPerMinute = 1000 * 60;
        // var msecPerHour = msecPerMinute * 60;
        // var msecPerDay = msecPerHour * 24;
        // var begDateStr = "" + sDate.substring(4, 6) + "/" + sDate.substring(6) + "/" + sDate.substring(0, 4);
        // var endDateStr = "" + eDate.substring(4, 6) + "/" + eDate.substring(6) + "/" + eDate.substring(0, 4);
        // var begDate = new Date(begDateStr);
        // var endDate = new Date(endDateStr);
        // var interval = endDate.getTime() - begDate.getTime();
        // var days = Math.floor(interval / msecPerDay);
        // return days;
        return differenceInCalendarDays(eDate, sDate);
    }
    /**
     * 向左補零
     * Ex:leftPad(3,3,'0')->003
     * @param {?} val    [原值]
     * @param {?} padLen [補足長度]
     * @param {?} padVal [補足值]
     * @return {?} [description]
     */
    leftPad(val, padLen, padVal) {
        if (val.toString().length < padLen) {
            for (var i = 1; i < padLen; i++) {
                val = padVal + val;
                if (val.toString().length >= padLen) {
                    break;
                }
            }
        }
        return val;
    }
}
CustomerUtils.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CustomerUtils.ctorParameters = () => [
    { type: ProfileCodeService }
];
/** @nocollapse */ CustomerUtils.ngInjectableDef = defineInjectable({ factory: function CustomerUtils_Factory() { return new CustomerUtils(inject(ProfileCodeService)); }, token: CustomerUtils, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomersComponent {
    /**
     * @param {?} customerService
     * @param {?} calendarService
     * @param {?} translateService
     * @param {?} changeDetector
     * @param {?} deviceService
     * @param {?} dateUtils
     * @param {?} profileCodeService
     * @param {?} extensionService
     * @param {?} customerUtils
     * @param {?} customerStore
     * @param {?} customerSync
     * @param {?} customerAction
     */
    constructor(customerService, calendarService, translateService, changeDetector, deviceService, dateUtils, profileCodeService, extensionService, customerUtils, customerStore, customerSync, customerAction) {
        this.customerService = customerService;
        this.calendarService = calendarService;
        this.translateService = translateService;
        this.changeDetector = changeDetector;
        this.deviceService = deviceService;
        this.dateUtils = dateUtils;
        this.profileCodeService = profileCodeService;
        this.extensionService = extensionService;
        this.customerUtils = customerUtils;
        this.customerStore = customerStore;
        this.customerSync = customerSync;
        this.customerAction = customerAction;
        this.viewTypeIndex = 2; // 'month'
        this.viewDate = new Date();
        this.weekStartsOn = 1; // Monday 
        // control mobile show
        this.isShow = false;
        // popup
        this.isExpandDetail = false;
        this.isRefreshDetail = false;
        this.isSaveClick = false;
        this.language = new Language();
        //客戶清單的search block animate
        this.isOpen = false;
        this.classSearch = '';
        //popup control
        this.isDisplayImportSavePopup = false; //import popup
        this.isDisplaySavePopup = false; //save popup
        this.isDisplayDelCustomerPopup = false; //delete customer popup
        this.isDisplayConfirmAlertPopup = false; //confirm alert popup
        this.isDisplayInfoAlertPopup = false; //info alert popup
        this.isDisplayUpdateRemind = false; //alert customer over 6 month popup
        this.isDisplayDeleteRemind = false; //alert customer over 6 month & 7day popup
        this.isPopupImport = false; //import popup
        this.isPopupFilter = false; //filter popup
        this.isExpandEdit = false; // appointment popup
        this.isPopupCallPhone = false; //call customer phone popup
        this.isPopupNoteDetail = false; //contact detail popup
        this.isPopupEditNote = false; //add/edit contact note popup
        this.isPopupDeleteNote = false; //delete contact note popup
        this.isPopupConfirmDisable = true; // confirmPopup btn is disable default
        this.isDisplayDeletePopup = false; //delete success popup
        //control overtime customer list
        this.alertOverTimeList = new Array();
        //control auto delete customer list
        this.alertAutoDeleteCustomer = new Array();
        //cache confirm action
        this._confirmAction = new CustomerConfirmAction();
        //control refresh  content
        this.isLoadingFinishContent = false;
        //control
        this.isLazyLoading = true;
        this.customerContactList = [];
        this.contactListPageInfo = new PageInfo();
        this.viewDateCalendarEventList = [];
        //intergration customer-list
        this.customerList = new Array();
        this.customerListPageInfo = new PageInfo();
        this.filterCriteria = new CustomerFilterCriteria();
        this.filterType = '';
        this.optionMap = new Map();
        this.translateMap = new Map();
        this.dayTypesList = ['Cross_Day', 'All_Day'];
        this.noSchedule = 'No_Schedule';
        this.activityTypeList = []; // DB中所有activityType
        this.alertTypeList = [];
        //intergration customer-import
        this.importContractMap = new Map();
        this.mobileResultSize = 0;
        this.importData = false;
        this.importContactList = [];
        //filter customer attribute
        this.isLoadCriteria = false;
        this.isClearCriteria = false;
        //import result(success | fail);
        this._onImportResult = false;
        this.noteCurrentTime = new Date(); //add/edit Note current time
        this.noteMessage = ''; //add/edit Note Message
        this.noteClientID = ''; //edit/delete noteClientID
        this.isRefreshContactList = false;
        this.loadContactList = false;
        // search animate in filter
        this.classBarMove = '';
        //listener route back event
        this._reloadData = false;
        //intergration customer-detail used
        this.customerDetail = new CustomerDetail();
        //current edit customer Id
        this.currentCustomer = null;
        // current customer state
        this.customerState = CUSTOMER_STATE.FIRST;
        //pre saved criteria
        this.pre_criteria = new CustomerFilterCriteria();
        //subject of clear & save filter
        this.clearSubject = new Subject();
        this.saveFilterSubject = new Subject();
        this.detailModel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.customerStore) {
            this.criteriaChanges.unsubscribe();
            this.customerDetailChanges.unsubscribe();
            this.stateChanges.unsubscribe();
            this.customerListChanges.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activityTypeList = this.profileCodeService.getCodeArray('Calendar_Type');
        this.alertTypeList = this.profileCodeService.getCodeArray('Calendar_RemindTime');
        this.optionMap.set('Calendar_Type', this.activityTypeList);
        this.optionMap.set('Calendar_RemindTime', this.alertTypeList);
        this.dayTypesList.forEach((/**
         * @param {?} dayType
         * @return {?}
         */
        (dayType) => {
            this.translateMap.set(dayType, this.translateService.translate(dayType));
        }));
        this.translateMap.set(this.noSchedule, this.translateService.translate(this.noSchedule));
        if (this.customerStore) {
            this.criteriaChanges = this.customerStore.getCriteria().subscribe((/**
             * @param {?} criteria
             * @return {?}
             */
            (criteria) => {
                this.pre_criteria = criteria;
            }));
            this.customerDetailChanges = this.customerStore.getCurrentCustomerDetail().subscribe((/**
             * @param {?} detail
             * @return {?}
             */
            detail => {
                this.currentCustomer = detail;
            }));
            this.customerListChanges = this.customerStore.getCustomerList().subscribe((/**
             * @param {?} list
             * @return {?}
             */
            list => {
                this.pre_customerList = list;
            }));
            this.stateChanges = this.customerStore.getState().subscribe((/**
             * @param {?} state
             * @return {?}
             */
            (state$$1) => {
                console.log("main state: ", state$$1);
                //console.log("curreontCustomer: ", this.currentCustomer);
                if (state$$1 == CUSTOMER_STATE.EDIT_SAVED && this.customerState != CUSTOMER_STATE.EDIT_SAVED) {
                    //after saved, check if current ID in criteria
                    console.log("state == CUSTOMER_STATE.EDIT_SAVED");
                    console.log("currentCustomer: ", this.currentCustomer);
                    this.isDisplaySavePopup = true;
                    this.customerList = this.pre_customerList;
                    this.filterCriteria = this.pre_criteria;
                    if (this.pre_criteria.hasCriteria()) {
                        this.customerService.checkInFilterCriteria(this.currentCustomer.clientID, this.pre_criteria).subscribe((/**
                         * @param {?} result
                         * @return {?}
                         */
                        result => {
                            if (!result) {
                                this.customerList.forEach((/**
                                 * @param {?} item
                                 * @return {?}
                                 */
                                item => {
                                    if (item.clientID == this.currentCustomer.clientID) {
                                        item.isHighLight = true;
                                    }
                                }));
                                this.customerList = [...this.customerList];
                            }
                            else {
                                this.customerList.forEach((/**
                                 * @param {?} item
                                 * @return {?}
                                 */
                                item => {
                                    if (item.clientID == this.currentCustomer.clientID) {
                                        console.debug('change isHighLight status');
                                        item.isHighLight = false;
                                    }
                                }));
                            }
                            this.customerList.forEach((/**
                             * @param {?} item
                             * @return {?}
                             */
                            item => {
                                if (item.clientID == this.currentCustomer.clientID) {
                                    item.firstName = this.currentCustomer.firstName;
                                    item.lastName = this.currentCustomer.lastName;
                                    item.tag = this.currentCustomer.possibility;
                                    item.complementPercent = this.customerUtils.countCompletenessByProfile(this.currentCustomer);
                                }
                            }));
                            this.customerList = [...this.customerList];
                            this.customerStore.setCustomerList(this.customerList);
                        }));
                    }
                    else {
                        this.customerList.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        (item) => {
                            if (item.clientID == this.currentCustomer.clientID) {
                                item.firstName = this.currentCustomer.firstName;
                                item.lastName = this.currentCustomer.lastName;
                                item.tag = this.currentCustomer.possibility;
                                item.complementPercent = this.customerUtils.countCompletenessByProfile(this.currentCustomer);
                            }
                        }));
                        this.customerList = [...this.customerList];
                    }
                    this.onGetCustomerDetailByID(this.currentCustomer.clientID);
                    this.refreshContactNote(false);
                    // this.changeDetector.detectChanges();
                }
                else if (state$$1 == CUSTOMER_STATE.EDIT && this.customerState != CUSTOMER_STATE.EDIT && this.customerState == CUSTOMER_STATE.FIRST) {
                    // edit/click page click last page
                    this.customerList = this.pre_customerList;
                    this.filterCriteria = this.pre_criteria;
                    //this.onGetCustomerDetailByID(this.currentCustomer.clientID);
                    if (StringUtils.isEmpty(this.currentCustomer.clientID)) {
                        this.refreshCustomerList(false);
                    }
                    else {
                        this.onGetCustomerDetailByID(this.currentCustomer.clientID);
                        this.refreshContactNote(false);
                    }
                }
                else if (this.customerState == CUSTOMER_STATE.FIRST && state$$1 == CUSTOMER_STATE.DISPLAY) {
                    //firt in, fetch preset filter
                    console.log("this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY");
                    this.loadPresetCriteria().then((/**
                     * @return {?}
                     */
                    () => {
                        this.refreshCustomerList(false);
                    }));
                }
                else if (state$$1 == CUSTOMER_STATE.ADD_SAVED) {
                    //after add , get pre_criteria && refresh customerlist
                    console.log("state == CUSTOMER_STATE.ADD_SAVED");
                    this.isDisplaySavePopup = true;
                    this.filterCriteria = this.pre_criteria;
                    this.refreshCustomerList(false);
                }
                this.customerState = state$$1;
            }));
            this.customerStore.setState(CUSTOMER_STATE.DISPLAY);
        }
        else {
            this.refreshCustomerList(false);
        }
        this.refreshContactNote(false);
        //check is first time open this function
        if (this.customerService.isFirstTime()) {
            console.log('customer is first time');
            //check customer data over 6month
            this.customerService.getOverTimeCustomerList("").subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.alertOverTimeList = data;
                if (this.alertOverTimeList.length != 0) {
                    this.customerService.updateMessageToRead('OverTime', 'Customer').subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    data => {
                        this.isDisplayUpdateRemind = true;
                    }));
                }
            }));
            //check customer data over 6month & 7day
            this.customerService.getAutoDeleteCustomerList("").subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                console.log("customerAutoDelete: ", data);
                this.alertAutoDeleteCustomer = data;
                if (this.alertAutoDeleteCustomer.length != 0) {
                    this.customerService.updateMessageToRead('AutoDelete', 'Customer').subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    data => {
                        console.log("updateMessageToRead: ", data);
                        this.isDisplayDeleteRemind = true;
                    }));
                }
            }));
            //check customer info alert
            /** @type {?} */
            let timerObj = this.extensionService.getConfigValue('CustomerInfoAlertTimer');
            console.debug('timerObj', timerObj);
            this._checkIsInfoAlertTime(timerObj);
        }
    }
    /**
     * @param {?} isAppend
     * @return {?}
     */
    refreshCustomerList(isAppend) {
        console.debug('refreshCustomerList append', isAppend);
        console.debug(this.filterCriteria);
        console.debug(this.customerListPageInfo);
        //fetch customer-list data
        if (!isAppend)
            this.customerListPageInfo.resetPage();
        this.customerService.getCustomerList(this.filterCriteria, this.customerListPageInfo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log("data in criteria: ", data);
            if (!isAppend)
                this.customerList = [...data];
            else
                this.customerList = [...this.customerList, ...data];
            if ((!this.filterCriteria.hasCriteria())) {
                this.filterType = 'NONE';
            }
            else {
                this.filterType = StringUtils.isNotEmpty(this.filterCriteria.keyword) ? 'SEARCH' : 'FILTER';
            }
            if (this.customerStore) {
                this.customerStore.setCustomerList(this.customerList);
            }
            if (this.customerList.length > 0) {
                this.onGetCustomerDetailByID(this.customerList[0].clientID);
            }
            else {
                this.customerDetail = new CustomerDetail();
            }
            // this.changeDetector.detectChanges();
        }));
    }
    /* integration contact-list */
    /**
     * @param {?} isAppend
     * @return {?}
     */
    refreshContactNote(isAppend) {
        //if append data will next page
        if (!isAppend)
            this.contactListPageInfo.resetPage();
        this.customerService.getCustomerContactNote(this.customerDetail.clientID, this.contactListPageInfo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (isAppend)
                this.customerContactList = this.customerContactList.concat(data);
            else
                this.customerContactList = data;
            console.debug('refreshContactNote success isRefreshContactList status');
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    onGetCustomerContactListByID(clientID) {
        this.customerService.getCustomerContactNote(clientID, this.contactListPageInfo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.customerContactList = data;
        }));
    }
    /**
     * @param {?} timerObj
     * @return {?}
     */
    _checkIsInfoAlertTime(timerObj) {
        /** @type {?} */
        let infoAlertDateRange = timerObj.DateRange;
        /** @type {?} */
        let infoAlertTimeRange = timerObj.TimeRange;
        /** @type {?} */
        let now = new Date();
        console.debug('now', now);
        console.debug('now month', now.getMonth() + 1);
        console.debug('now date', now.getDate());
        console.debug('now hours', now.getHours());
        infoAlertDateRange.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            let month = element['month'];
            /** @type {?} */
            let date = element['date'];
            if ((now.getMonth() + 1 == Number.parseInt(month)) && now.getDate() == Number.parseInt(date)) {
                if (now.getHours() >= Number.parseInt(infoAlertTimeRange['start'])
                    && now.getHours() <= Number.parseInt(infoAlertTimeRange['end'])) {
                    this.isDisplayInfoAlertPopup = true;
                    return;
                }
            }
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    onGetCustomerDetailByID(clientID) {
        this.customerService.getCustomerDetail(clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.customerDetail = data;
            this.customerService.convertCustomerDetailDisplayMode(this.customerDetail);
        }));
    }
    /**
     * @return {?}
     */
    toggleSearch() {
        this.isOpen = !this.isOpen;
        this.classSearch = this.isOpen ? ' active' : '';
        if (!this.isOpen) {
            // this.filterCriteria = new CustomerFilterCriteria();
            this.filterCriteria.keyword = '';
            if (this.customerStore) {
                this.customerStore.setCriteria(this.filterCriteria);
            }
            this.refreshCustomerList(false);
        }
    }
    // search keypress
    /**
     * @param {?} name
     * @return {?}
     */
    searchCustomerName(name) {
        console.debug('searchCustomerName', name);
        // this.filterCriteria = new CustomerFilterCriteria();
        this.filterCriteria.keyword = name;
        if (this.customerStore) {
            this.customerStore.setCriteria(this.filterCriteria);
        }
        this.refreshCustomerList(false);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByFn(index, item) {
        return item.name;
    }
    //when customer-list click get click Item
    /**
     * @param {?} customerItem
     * @return {?}
     */
    onChangeCustomer(customerItem) {
        this.clickItem = customerItem;
        //get CustomerDetail
        this.onGetCustomerDetailByID(customerItem.clientID);
        //get CustomerNote
        this.onGetCustomerContactListByID(customerItem.clientID);
        this.isShow = true;
    }
    //when customer-list fetch next record
    /**
     * @return {?}
     */
    onCustomerLoad() {
        this.customerListPageInfo.nextPage();
        this.refreshCustomerList(true);
    }
    //when customer-list sync data to backend
    /**
     * @return {?}
     */
    onCustomerRefresh() {
        //sync & reload list
        this.customerSync.sync().subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            this.refreshCustomerList(false);
        }));
    }
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    deleteCustomer(customerClientID) {
        this.isDisplayDelCustomerPopup = true;
    }
    /**
     * @return {?}
     */
    doDeleteCustomer() {
        this.customerList = this.customerList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.clientID != this.customerDetail.clientID));
        this.onGetCustomerDetailByID(this.customerList[0].clientID);
        this.customerService.deleteCustomerProfile(this.customerDetail.clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            console.log("customerService.doDeleteCustomer()", data);
            if (data.status) {
                if (this.customerStore) {
                    this.customerStore.setCustomerList(this.customerList);
                }
                this.isShow = false;
                this.isDisplayDeletePopup = true;
                // this.changeDetector.detectChanges();
            }
        }));
    }
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    addAppointment(customerClientID) {
        /** @type {?} */
        let currentTime;
        currentTime = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), getHours(new Date()), getMinutes(new Date()));
        currentTime = addMinutes(currentTime, (5 - getMinutes(currentTime) % 5)); // adjust minutes to next 5 minutes
        currentTime = addHours(currentTime, 1);
        this.calendarEventDetail = new CalendarEventDetail('', '', '', '', null, 'N', currentTime, addHours(currentTime, 1), 'Y', '8', null, '', '', null);
        /** @type {?} */
        let queryDate = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), 0, 0, 0);
        this.calendarService.getCalendarEventList(queryDate, subMinutes(addDays(this.viewDate, 1), 1), '').subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.viewDateCalendarEventList = data;
            this.onToggleAppointmentModal(true);
        }));
    }
    /**
     * @return {?}
     */
    onClickAppointmentSave() {
        this.isSaveClick = true;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onToggleAppointmentModal(val) {
        // console.log("X");
        this.isExpandEdit = val;
    }
    /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    onSaveCalendarEvent(calendarEventDetail) {
        //alert(calendarEventDetail);
        this.isSaveClick = false;
        if (calendarEventDetail) {
            this.calendarService.addCalendarEvent(calendarEventDetail).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                if (data.status) {
                    this.isDisplaySavePopup = true;
                    calendarEventDetail.clientID = data.clientID;
                    this.calendarEventDetail = calendarEventDetail;
                    this.onToggleAppointmentModal(false);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    addCustomer() {
        this.isDisplayConfirmAlertPopup = false;
        // this.changeDetector.detectChanges();
        /** @type {?} */
        let detail = new CustomerDetail();
        if (this.customerStore) {
            this.customerStore.setCurrentCustomerDetail(detail);
            this.customerStore.setState(CUSTOMER_STATE.EDIT);
        }
        if (this.customerAction) {
            this.customerAction.afterCustomerEdit(detail);
        }
    }
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    editCustomer(customerClientID) {
        if (this.customerStore) {
            this.customerStore.setState(CUSTOMER_STATE.EDIT);
            this.customerService.getCustomerDetail(customerClientID).subscribe((/**
             * @param {?} detail
             * @return {?}
             */
            (detail) => {
                this.customerStore.setCurrentCustomerDetail(detail);
                if (this.customerAction)
                    this.customerAction.afterCustomerEdit(detail);
            }));
        }
    }
    /**
     * @param {?} customerDetail
     * @return {?}
     */
    detailChange(customerDetail) {
        console.log('detailChange', customerDetail);
        this.detailModel.emit(customerDetail);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    followChange(obj) {
        this.customerService.updateCustomerFollowStatus(obj.clientID, obj.isFollow).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            //this.refreshCustomerList(false);
            //console.log(JSON.stringify(this.customerList));
            if (this.filterCriteria) {
                this.customerService.checkInFilterCriteria(obj.clientID, this.filterCriteria).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => {
                    this.customerList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        if (item.clientID == obj.clientID) {
                            //console.debug('change isHighLight status in follow');
                            if (result) {
                                item.isHighLight = false;
                            }
                            else {
                                item.isHighLight = true;
                            }
                        }
                    }));
                }));
            }
            this.customerList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.clientID == obj.clientID)).forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                value.isFollow = obj.isFollow;
            }));
        }));
        //this.followChangeClientID = obj.clientID;
    }
    /**
     * @return {?}
     */
    addNote() {
        console.debug('addNote');
        this.noteCurrentTime = new Date();
        this.noteMessage = '';
        this.isPopupEditNote = true;
    }
    /**
     * @param {?} note
     * @return {?}
     */
    editNote(note) {
        console.debug('editNote', note);
        this.noteEditClientID = note.getClientID();
        this.noteCurrentTime = new Date();
        this.noteMessage = note.noteMessage;
        this.isPopupEditNote = true;
    }
    /**
     * @param {?} note
     * @return {?}
     */
    displayNote(note) {
        console.debug('displayNote', note);
        this.customerContactDetail = note;
        // add click customer name
        this.customerContactDetail.name = this.customerDetail.lastName + this.customerDetail.firstName;
        this.isPopupNoteDetail = true;
    }
    /**
     * @param {?} note
     * @return {?}
     */
    deleteNote(note) {
        console.debug('deleteNote', note);
        this.noteClientID = note.getClientID();
        this.isPopupDeleteNote = true;
    }
    /**
     * @return {?}
     */
    doDeleteContact() {
        this.customerService.deleteCustomerContact(this.noteClientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log("customerService.deleteNote()", data);
            if (data.status) {
                this.customerContactList = this.customerContactList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.getClientID() != this.noteClientID));
                this.noteClientID = '';
                this.isDisplayDeletePopup = true;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSaveNote(event) {
        /* the same save btn for edit/add ,event also the same event, how to distinguish*/
        //alert(JSON.stringify(this.noteMessage));
        if (StringUtils.isEmpty(this.noteMessage)) {
            alert('Message is required!!');
        }
        else {
            this.customerService.addCustomerContact(this.noteEditClientID, this.customerDetail.clientID, this.noteMessage, this.noteCurrentTime).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                console.log("customerService.saveNote()", data);
                if (data.status) {
                    console.debug('saveNote success , close popup & refresh list', this.isDisplaySavePopup, 'isRefreshContactList', this.isRefreshContactList);
                    // if(StringUtils.isNotEmpty(this.noteEditClientID)) {
                    //   let array = this.customerContactList.filter(x => x.getClientID() == this.noteEditClientID).forEach((value) =>{
                    //     value.noteMessage = this.noteMessage;
                    //   });
                    //   alert(array.length);
                    // }
                    // else {
                    //   this.refreshContactNote(false);
                    // }
                    this.noteEditClientID = undefined;
                    this.isPopupEditNote = false;
                    this.isDisplaySavePopup = true;
                    this.refreshContactNote(false);
                }
            }));
        }
        // console.debug('saveNote', event);
        //console.debug('clickClientID', this.noteEditClientID, this.noteEditClientID, 'noteCurrentTime', this.noteCurrentTime, 'noteMessage', this.noteMessage);
        //alert(JSON.stringify(event));
        // if (StringUtils.isEmpty(this.noteMessage)) {
        //   alert('Message is required!!');
        // }
        // else {
        //   this.customerService.addCustomerContact(this.noteEditClientID, this.customerDetail.clientID, this.noteMessage, this.noteCurrentTime).subscribe(data => {
        //     console.log("customerService.saveNote()", data);
        //     if (data.status) {
        //       console.debug('saveNote success , close popup & refresh list', this.isDisplaySavePopup, 'isRefreshContactList', this.isRefreshContactList);
        //       this.noteEditClientID = undefined;
        //       this.isPopupEditNote = false;
        //       this.isDisplaySavePopup = true;
        //       this.refreshContactNote(false);
        //     }
        //   });
        // }
    }
    /**
     * @param {?} action
     * @param {?} optionArray
     * @return {?}
     */
    showConfirmPopup(action, optionArray) {
        this._confirmAction.action = action;
        this._confirmAction.option = optionArray;
        this.isDisplayConfirmAlertPopup = true;
        //default btn is disable
        this.isPopupConfirmDisable = true; // true;
    }
    /**
     * @return {?}
     */
    confirmPopup() {
        if (this._confirmAction.action == 'add') {
            this.addCustomer();
        }
        // 2019/03/25 Jeffery remove because edit not showpopup
        // else if (this._confirmAction.action == 'edit') {
        //   this.editCustomer(this._confirmAction.option[0]);
        // }
        else if (this._confirmAction.action == 'import') {
            this.import();
        }
        this.isDisplayConfirmAlertPopup = false;
    }
    // detect confirm popup to content bottm and the btn can click
    /**
     * @param {?} isBtm
     * @return {?}
     */
    detectScroll(isBtm) {
        console.log('in detect scroll===', isBtm);
        if (isBtm) {
            this.isPopupConfirmDisable = false;
        }
    }
    /**
     * @return {?}
     */
    import() {
        this.deviceService.searchContactsByName("").subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            let importList = data;
            console.debug('import result ', importList);
            this.importContractMap.clear();
            //regroup
            importList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                console.debug(element.lastname);
                //if no lastname,use first name
                if (StringUtils.isEmpty(element.lastname)) {
                    element.lastname = element.firstname;
                    element.firstname = '';
                }
                /** @type {?} */
                let name = element.lastname;
                if (name != null && name.length > 0) {
                    /** @type {?} */
                    let firstWord = name.substring(0, 1);
                    firstWord = firstWord.toLowerCase();
                    console.debug('firstWord =' + firstWord);
                    /** @type {?} */
                    let group = this.importContractMap.get(firstWord);
                    if (group == undefined)
                        group = new CustomerImportGroup(firstWord);
                    group.addItem(element);
                    this.importContractMap.set(firstWord, group);
                }
            }));
            console.debug('importContractMap', this.importContractMap);
        }));
        this.isPopupImport = true;
    }
    //control import popup is display
    /**
     * @param {?} isShow
     * @return {?}
     */
    displayImportPopup(isShow) {
        this.isPopupImport = isShow;
    }
    //when keypress keyword refresh contract list
    /**
     * @param {?} keyword
     * @return {?}
     */
    refreshImport(keyword) {
        this.importContractMap.forEach((/**
         * @param {?} group
         * @param {?} groupName
         * @return {?}
         */
        (group, groupName) => {
            // console.log(groupName, group);
            group.isShow = false;
            group.getItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                // console.debug('item',item);
                /** @type {?} */
                let name = item.lastname + item.firstname;
                name = name.toLowerCase();
                // console.debug(name);
                if (name.indexOf(keyword) == -1) {
                    item.isShow = false;
                }
                else {
                    item.isShow = true;
                    group.isShow = true;
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    doImport() {
        this.customerService.importContact(this.importContactList).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            //alert("1"+JSON.parse(JSON.stringify(data)).status);
            /** @type {?} */
            let status = (JSON.parse(JSON.stringify(data))).status;
            if (status) {
                this.isPopupImport = false;
                this.isDisplayImportSavePopup = true;
                this.mobileResultSize = 0;
                //refresh customer list
                this.refreshCustomerList(false);
            }
        }));
    }
    /* customer-import*/
    /**
     * @param {?} importItems
     * @return {?}
     */
    onImportCustomer(importItems) {
        console.debug('importItems', importItems);
        this.importContactList = importItems;
        this.mobileResultSize = importItems.length;
    }
    //call customer function
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    callCustomer(customerClientID) {
        console.debug('callCustomer = ' + customerClientID);
        this.customerService.getCustomerContactTel(customerClientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.callPhoneTelArray = data;
            //check number array is single
            if (this.callPhoneTelArray.length != 0) {
                //only one number just to call out
                if (this.callPhoneTelArray.length == 1) {
                    this.callPhone(this.callPhoneTelArray[0].tel);
                }
                else {
                    this.isPopupCallPhone = true;
                }
            }
        }));
    }
    //cancel callphone popup
    /**
     * @return {?}
     */
    cancelCallPhone() {
        this.isPopupCallPhone = !this.isPopupCallPhone;
    }
    //call number from phone
    /**
     * @param {?} telNumber
     * @return {?}
     */
    callPhone(telNumber) {
        console.debug('callPhone', telNumber);
        //call phone close popup
        if (this.isPopupCallPhone)
            this.isPopupCallPhone = !this.isPopupCallPhone;
        window.open('tel:' + telNumber, '_system');
        //popup contact note
        setTimeout((/**
         * @param {?} fun
         * @return {?}
         */
        (fun) => {
            this.addNote();
        }), 1000);
    }
    //open filter popup
    /**
     * @return {?}
     */
    filter() {
        this.isPopupFilter = true;
    }
    //clear filter item
    /**
     * @return {?}
     */
    clearFilter() {
        this.clearSubject.next();
    }
    //filter customer list and close popup
    /**
     * @return {?}
     */
    doFilter() {
        this.saveFilterSubject.next();
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    doneCriteria(criteria) {
        console.debug('doneCriteria', criteria);
        this.filterCriteria = criteria;
        this.isPopupFilter = false;
        if (this.customerStore) {
            this.customerStore.setCriteria(criteria);
        }
        if (criteria.savePreset) {
            this.customerService.saveFilterCriteria(criteria).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                console.debug('doneCriteria saveFilterCriteria', data);
            }));
        }
        this.refreshCustomerList(false);
    }
    /**
     * @return {?}
     */
    loadPresetCriteria() {
        //check has preset
        /** @type {?} */
        let criteria = new CustomerFilterCriteria();
        return new Promise((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.customerService.getFilterCriteriaPreset().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                console.debug('getfilterCriteriaPreset', data);
                if (data != undefined) {
                    /** @type {?} */
                    let count = 0;
                    for (let column in data) {
                        /** @type {?} */
                        let values = data[column];
                        console.debug('column', column, 'arrays', values);
                        criteria.addCriteriaCols(column, values);
                        count++;
                    }
                    if (count != 0) {
                        criteria.savePreset = true;
                    }
                    this.filterCriteria = criteria;
                }
                res();
            }));
        }));
    }
    /**
     * @return {?}
     */
    cancelDelete() {
        console.log('cancelDelete');
    }
    // refreash content
    /**
     * @return {?}
     */
    refreshContent() {
        console.log('content refresh:', this.customerSync);
        //set timeout for refresh animation
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customerSync.sync().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                if (resp) {
                    this.isLoadingFinishContent = true;
                    // this.triggerCustomerListQuery();
                }
            }));
        }), 800);
    }
    // loading content
    /**
     * @param {?} event
     * @return {?}
     */
    loadContent(event) {
        console.log('content loading');
        if (!this.loadContactList)
            this.loadContactList = true;
        else {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.isLoadingFinishContent = true;
            }), 0);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    contactRefreshDone(val) {
        console.debug('refresh done');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isLoadingFinishContent = !val;
            this.loadContactList = val;
        }), 0);
    }
    //isShowChange
    /**
     * @param {?} val
     * @return {?}
     */
    isShowChange(val) {
        if (this.isShow !== val) {
            this.isShow = val;
            // this.changeDetector.detectChanges();
        }
    }
    /**
     * @param {?} time
     * @return {?}
     */
    toNoteTime(time) {
        return this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
    }
}
CustomersComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customers',
                template: "<app-ui-main-side-menu [title]=\"[language.customer | translate]\" [isShow]=\"isShow\" (isShowChange)=\"isShowChange($event)\">\n\n    <div class=\"side-menu-content\" side-menu>\n      <!-- Title Block -->\n      <div class=\"title-main-block\">\n        <app-ui-title-style1>\n          <ng-container textType=\"titleText\">{{language.customerList |translate }}</ng-container>\n        </app-ui-title-style1>\n      </div>\n      <!-- Action Block-->\n      <div class=\"filter-all-block\">\n        <ul class=\"filter-block\" [ngClass]=\"classSearch ? ' ani-bar-move': ''\">\n            <li class=\"filter-item\">\n                <button Action action=\"customerShowAddConfirm\" (actionClick)=\"showConfirmPopup('add',[])\">\n                  <img src=\"assets/img/icon-customer-list-add.svg\" alt=\"\">\n                </button>\n            </li>\n            <li class=\"filter-item\">\n              <!-- import -->\n              <button  Action action=\"customerShowImportConfirm\" (actionClick)=\"showConfirmPopup('import',[])\">\n                  <img src=\"assets/img/icon-customer-list-import.svg\" alt=\"\">\n              </button>\n              <!-- end of import -->\n            </li>\n            <!-- filter item -->\n            <li class=\"filter-item\">\n                <button Action action=\"customerFilter\" (actionClick)=\"filter()\">\n                  <ng-container *ngIf=\"filterCriteria.getFilterMap().size != 0\">\n                      <span class=\"num-block\">\n                        <span class=\"num\">{{filterCriteria.getFilterMap().size}}</span>\n                      </span>\n                  </ng-container>\n\n                  <img src=\"assets/img/icon-customer-list-filter.svg\" alt=\"\">\n                </button>\n            </li>\n            <!-- end of filter item -->\n            <li class=\"filter-item search-animate-block\" [ngClass]=\"classSearch\">\n              <button class=\"btn-search-open\" Action action=\"customerSearch\" (actionClick)=\"toggleSearch()\" >\n                <img src=\"assets/img/icon-customer-list-search.svg\" alt=\"\">\n              </button>\n              <div class=\"search-input-block input-block\" [ngClass]=\"this.isOpen ? 'open' : 'closed'\">\n                  <app-ui-form-input [nxValue]=\"filterCriteria.keyword\" (nxValueChange)=\"searchCustomerName($event)\" [placeholder]=\"[language.searchPlaceholder | translate]\"></app-ui-form-input> \n                  <button class=\"btn-search-cancel\" Action action=\"customerSearch\" (actionClick)=\"toggleSearch()\">\n                      <nx-icon name='close-circle' size='s'></nx-icon>\n                  </button>\n              </div>\n            </li>\n        </ul>\n      </div>\n\n      <!-- Customer List Component -->\n      <app-customer-list (customerClick)=\"onChangeCustomer($event)\" (customerLoad)=\"onCustomerLoad()\" (customerRefresh)=\"onCustomerRefresh()\" [customerList]=\"customerList\" [filterType]=\"filterType\"></app-customer-list>\n      <!-- end of Customer List Component -->\n\n    </div>\n\n    <div class=\"main-content stop-scroll-block\" main>\n      \n        <app-ui-infinite-scroll (loadingCallback)=\"loadContent($event)\" (refreshCallback)=\"refreshContent()\" [(loadingFinish)]=\"isLoadingFinishContent\" [lazyLoading]=\"isLazyLoading\">\n\n\n          <!-- Customer Detail -->\n          <app-customer-detail [detailPreTemplate]=\"detailPreTemplate\" [detailPostTemplate]=\"detailPostTemplate\" [customerDetail]=\"customerDetail\" (followChange)=\"followChange($event)\" (onDeleteDetail)=\"deleteCustomer($event)\" (onAddAppointment)=\"addAppointment($event)\" (onCallPhone)=\"callCustomer($event)\" (onEditDetail)=\"editCustomer($event)\" ></app-customer-detail>\n          <!-- end of Customer Detail -->\n\n\n          <!-- Customer Contact List -->\n          <app-customer-contact-list [contactList]=\"customerContactList\" (onAddNote)=\"addNote()\" (onDisplayNote)=\"displayNote($event)\" (onEditNote)=\"editNote($event)\" (onDeleteNote)=\"deleteNote($event)\" ></app-customer-contact-list>\n          <!-- end of Customer Contact List -->\n\n        </app-ui-infinite-scroll>\n    </div>\n\n\n  <!-- Popup -->\n  <div global-main>\n      <!-- side import -->\n      <app-ui-modal-style-text1 [(isPopupOpen)]=\"isPopupImport\" class=\"wd-md\" [isContnetFull]=\"true\">\n          \n        <ng-container textType=\"modal-title-detail\">{{language.importPhone |translate }}</ng-container>   \n          <ng-container textType=\"modal-content-detail\">\n            <!-- still need space -->\n            <div class=\"space-normal top-search-block\">\n              <!-- search block -->\n              <app-ui-form-search [name]=\"'search'\" [placeholder]=\"[language.searchPlaceholder | translate]\" (nxValueChange)=\"refreshImport($event)\"></app-ui-form-search>\n              <!-- end of search block -->\n            </div>\n            <!-- end of still need space -->\n           <app-customer-import [importContractMap]=\"importContractMap\" (importCustomer)=\"onImportCustomer($event)\"></app-customer-import>\n          </ng-container>\n          <ng-container textType=\"modal-btm-detail\">\n              <div class=\"btm-set-block\">\n                  <span class=\"ps-text\">\n                    {{mobileResultSize}} {{language.people|translate}}\n                  </span>\n                  <!-- btn -->\n                  <app-ui-btn-layout>\n                    <app-ui-btn [btnHeight]=\"'sm'\" (ClickBtn)=\"doImport()\">\n                      <ng-container TextType=\"cust\">{{language.import|translate}}</ng-container>\n                    </app-ui-btn>\n                  </app-ui-btn-layout>\n                  <!-- end of btn -->\n              </div>\n          </ng-container>\n      </app-ui-modal-style-text1>\n      <!-- end of side import-->\n\n      <!-- side Filter-->\n      <app-ui-modal-style-text1 class=\"wd-lg\" [(isPopupOpen)]=\"isPopupFilter\">\n          <ng-container textType=\"modal-title-detail\">{{language.customerFilter |translate }}</ng-container>\n          <ng-container textType=\"modal-content-detail\">\n              <app-customer-filter [criteria]=\"filterCriteria\" (doneCriteria)=\"doneCriteria($event)\" [clear]=\"clearSubject\" [save]=\"saveFilterSubject\"></app-customer-filter>\n          </ng-container>\n\n          <ng-container textType=\"modal-btm-detail\">\n            <app-ui-btn-layout>\n              <app-ui-btn [name]=\"'btn-clear'\" (ClickBtn)=\"clearFilter()\" [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\">\n                <ng-container TextType=\"cust\">{{language.clear |translate }}</ng-container>\n              </app-ui-btn>\n              <app-ui-btn [name]=\"'btn-filter'\" (ClickBtn)=\"doFilter()\" [btnHeight]=\"'sm'\">\n                <ng-container TextType=\"cust\">{{language.filter |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n          </ng-container>\n      </app-ui-modal-style-text1>\n      <!-- end of side Filter -->\n\n      <!-- appointment popup -->\n      <app-ui-modal-style-text1 [isBackdropClose]=\"false\" [(isPopupOpen)]=\"isExpandEdit\" class=\"wd-lg calendar-edit-content\" (close)=\"onToggleAppointmentModal(false)\">\n        <ng-container textType=\"modal-title-detail\">{{language.appointment |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <snd-calendar-edit [calendarEventDetail]=\"calendarEventDetail\"\n                             [optionMap]=\"optionMap\"\n                             [translateMap]=\"translateMap\"\n                             [todayCalendarEvent]=\"viewDateCalendarEventList\"\n                             [isSaveClick]=\"isSaveClick\"\n                             [viewDate]=\"viewDate\"\n                             (saveEvent)=\"onSaveCalendarEvent($event)\"></snd-calendar-edit>\n        </ng-container>\n        <ng-container textType=\"modal-btm-detail\">\n          <app-ui-btn-layout>\n            <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" (ClickBtn)=\"onClickAppointmentSave()\">\n              <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n            </app-ui-btn>\n           </app-ui-btn-layout>\n        </ng-container>\n      </app-ui-modal-style-text1>\n      <!-- end of appointment popup -->\n\n      <!-- contact popup -->\n        <app-ui-modal-style-img-base  class=\"wd-sm\"  [(isPopupOpen)]=\"this.isPopupCallPhone\">\n            <ng-container textType=\"modal-img-detail\">\n              <nx-icon name='phone-o' size='auto' [fill]=\"false\" [outline]='false'></nx-icon>\n            </ng-container>\n            <ng-container textType=\"modal-title-detail\">{{language.selectNumber |translate }}</ng-container>\n            <ng-container textType=\"modal-content-detail\">\n              <ng-container *ngFor=\"let tel of callPhoneTelArray\">\n                  <!-- tel 1  -->\n                 <app-ui-link-bg [textTitle]=\"tel.telType | translate\" [text]=\"tel.tel\" (linkBtnClick)=\"callPhone(tel.tel)\"></app-ui-link-bg>\n                  <!-- end of tel 1 -->\n              </ng-container>\n            </ng-container>\n            <ng-container textType=\"modal-btm-detail\">\n                <app-ui-btn-layout>\n                  <app-ui-btn  [btnColor]=\"'grey'\" [btnStyle]=\"'text'\" [btnWd]=\"'md'\" (ClickBtn)=\"cancelCallPhone()\">\n                    <ng-container TextType=\"cust\">{{language.cancel |translate }}</ng-container>\n                  </app-ui-btn>\n                </app-ui-btn-layout>\n            </ng-container>\n        </app-ui-modal-style-img-base>\n      <!-- end of contact popup -->\n\n      <!-- note detail -->\n      <ng-container *ngIf=\"customerContactDetail\">\n          <app-ui-modal-style-text1 class=\"wd-md\" [isHasBtmBlock]=\"false\" [(isPopupOpen)]=\"isPopupNoteDetail\">\n              <ng-container textType=\"modal-title-detail\">{{language.contactNote |translate }}</ng-container>\n              <ng-container textType=\"modal-content-detail\">\n                <div class=\"text-detail-block\">\n                  <div class=\"img-text-block-horizon\">\n                    <div class=\"img-block\">\n                      <img src=\"assets/img/img-cust-profile.svg\">\n                    </div>\n                    <div class=\"text-block\">\n                      <p class=\"desc\">{{customerContactDetail.name}}</p>\n                      <p class=\"desc-normal desc-line-lg\">{{ toNoteTime(customerContactDetail.date)}}</p>\n                      <p class=\"desc-normal desc-line-lg\">{{customerContactDetail.noteMessage}}</p>\n                    </div>\n                  </div>\n\n                </div>\n\n              </ng-container>\n          </app-ui-modal-style-text1>\n      </ng-container>\n\n      <!-- end of note detail -->\n\n      <!-- add/edit note -->\n      <app-ui-modal-style-text1 class=\"wd-md\" [isBackdropClose]=\"false\"  [(isPopupOpen)]=\"this.isPopupEditNote\">\n          <ng-container textType=\"modal-title-detail\">{{language.contactNote |translate }}</ng-container>\n          <ng-container textType=\"modal-content-detail\">\n            <p class=\"desc\">{{this.noteCurrentTime | date: 'dd/MM/yyyy hh:mm'}}</p>\n            <div class=\"textarea-block\" > \n              <textarea class=\"detail-text\" placeholder= \"{{ language.notePlaceholder | translate}}\" [(ngModel)]=\"this.noteMessage\"></textarea>\n              \n            </div>\n          </ng-container>\n          <ng-container textType=\"modal-btm-detail\">\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [name]=\"'btn-note-save'\" (ClickBtn)=\"onSaveNote($event)\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n                <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </ng-container>\n        </app-ui-modal-style-text1>\n      <!-- end of add note -->\n\n      <!--  save-->\n      <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDisplaySavePopup\">\n          <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n          </ng-container>\n          <ng-container textType=\"modal-content-detail\">{{language.saved |translate }}</ng-container>\n        </app-ui-popup-style-feedback>\n      <!-- end of save -->\n\n      <!-- import save-->\n      <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDisplayImportSavePopup\">\n          <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n          </ng-container>\n          <ng-container textType=\"modal-content-detail\">{{language.completed| translate }}</ng-container>\n        </app-ui-popup-style-feedback>\n      <!-- end of save -->\n\n      <!-- Delete Success -->\n      <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDisplayDeletePopup\">\n          <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n          </ng-container>\n          <ng-container textType=\"modal-content-detail\">{{language.delete | translate}}</ng-container>\n        </app-ui-popup-style-feedback>\n      <!-- end of Delete Success -->\n\n\n      <!-- delete customer data -->\n      <app-ui-alert-confirm [(isPopupOpen)]=\"isDisplayDelCustomerPopup\" (onCancel)=\"cancelDelete()\" (onConfirm)=\"doDeleteCustomer()\" [title]=\"[language.delete | translate]\" [message]=\"[language.deleteMessage | translate]\" [cancelBtnText]=\"[language.no | translate]\" [confirmBtnText]=\"[language.yes | translate]\">\n      </app-ui-alert-confirm>\n      <!-- end of delete customer data -->  \n\n      <!-- delete customer contact data -->\n      <app-ui-alert-confirm [(isPopupOpen)]=\"isPopupDeleteNote\" (onCancel)=\"cancelDelete()\" (onConfirm)=\"doDeleteContact()\" [title]=\"[language.delete | translate]\" [message]=\"[language.deleteMessage | translate]\" [cancelBtnText]=\"[language.no | translate]\" [confirmBtnText]=\"[language.yes | translate]\">\n      </app-ui-alert-confirm>\n      <!-- end of delete customer contact data -->\n\n      <!-- customer info alert -->\n      <app-ui-modal-style-img-base  [(isPopupOpen)]=\"isDisplayInfoAlertPopup\" >\n        <ng-container textType=\"modal-img-detail\">\n            <img src=\"assets/img/icon-cust-remind.svg\">\n        </ng-container>\n        <ng-container textType=\"modal-title-detail\">{{language.protectionTitle |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\" >\n            <app-ui-text-type [colorCode]=\"'#f5f5f5'\">\n              <p class=\"desc-sm\">\n                It will show the content Allianz provide. The dummy words are below:\n                After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                <br />\n                \u201CPassion,\u201D the word, may seem descriptive of a complicated set of feelings and opinions. Oddly, in thinking about Ed Tettemer\u2019s passion for his agency and its clients, it seems rather simple. It\u2019s just that he wants everything to be excellent: excellent clients, excellent co-workers, excellent marketing solutions, excellent creative executions, excellent everything.\n                <br />\n                \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to college. Dropped out of high school and never looked back. Got my college degree at the Elkman agency and my graduate degree at Earle Palmer Brown.\u201D\n                <br />\n                \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                college. Dropped out of high school and never looked back. Got\n              </p>\n            </app-ui-text-type>\n        </ng-container>\n        <!-- end modal-content-detail -->\n        <ng-container textType=\"modal-btm-detail\">\n          <!-- btn -->\n          <app-ui-btn-layout>\n            <app-ui-btn class=\"btn-single-block\"  [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" (ClickBtn)=\"isDisplayInfoAlertPopup = !isDisplayInfoAlertPopup\">\n              <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n            </app-ui-btn>\n          </app-ui-btn-layout>\n          <!-- end of btn -->\n        </ng-container>\n        <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n    <!-- end of customer info alert -->\n\n      <!-- customer confirm alert -->\n      <app-ui-modal-style-img-base class=\"popup-agree\" [(isPopupOpen)]=\"isDisplayConfirmAlertPopup\" (onScrollContentBtm)=\"detectScroll($event)\">\n          <ng-container textType=\"modal-img-detail\">\n              <img src=\"assets/img/icon-cust-remind.svg\">\n          </ng-container>\n          <ng-container textType=\"modal-title-detail\">{{language.protectionTitle |translate }}</ng-container>\n          <ng-container textType=\"modal-content-detail\">\n              <app-ui-text-type #confirmAlert [colorCode]=\"'#f5f5f5'\">\n                <p class=\"desc-sm\">\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and days of exposure to him, you probably wouldn\u2019t get the whole picture.\n                  <br />\n                  \u201CPassion,\u201D the word, may seem descriptive of a complicated set of feelings and opinions. Oddly, in thinking about Ed Tettemer\u2019s passion for his agency and its clients, it seems rather simple. It\u2019s just that he wants everything to be excellent: excellent clients, excellent co-workers, excellent marketing solutions, excellent creative executions, excellent everything.\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to college. Dropped out of high school and never looked back. Got my college degree at the Elkman agency and my graduate degree at Earle Palmer Brown.\u201D\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                  college. Dropped out of high school and never looked back. Got\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                  college. Dropped out of high school and never looked back. Got\n                  <br />\n                  \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the response.) \u201CNever went to\n                  college. Dropped out of high school and never looked back. Got\n                </p>\n              </app-ui-text-type>\n          </ng-container>\n          <!-- end modal-content-detail -->\n          <ng-container textType=\"modal-btm-detail\">\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [isDisable]=\"isPopupConfirmDisable\" [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" (ClickBtn)=\"confirmPopup()\">\n                <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </ng-container>\n          <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n      <!-- end of customer confirm alert -->\n\n      <!-- remind update -->\n      <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayUpdateRemind\">\n        <ng-container textType=\"modal-img-detail\">\n          <img src=\"assets/img/icon-cust-remind.svg\">\n        </ng-container>\n        <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <!-- list -->\n          <app-ui-list-data2>\n            <!-- data -->\n            <ng-container textType=\"data\">\n              <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertOverTimeList;\">\n                <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n              </app-ui-form-checkbox3>\n            </ng-container>\n            <!-- end of data -->\n          </app-ui-list-data2>\n          <!-- end of list -->\n        </ng-container>\n        <!-- end modal-content-detail -->\n        <ng-container textType=\"modal-btm-detail\">\n          <div class=\"btm-set-block\">\n            <span class=\"ps-text\">\n              {{alertOverTimeList.length}} {{language.people |translate }}\n            </span>\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\"(ClickBtn)=\"isDisplayUpdateRemind = !isDisplayUpdateRemind\">\n                <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </div>\n\n        </ng-container>\n        <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n      <!-- end of remind update -->\n\n      <!-- remind delete -->\n      <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayDeleteRemind\">\n        <ng-container textType=\"modal-img-detail\">\n          <img src=\"assets/img/icon-cust-remind.svg\">\n        </ng-container>\n        <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <!-- list -->\n          <app-ui-list-data2>\n            <!-- data -->\n            <ng-container textType=\"data\">\n                <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertAutoDeleteCustomer;\">\n                    <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                  </app-ui-form-checkbox3>\n\n            </ng-container>\n            <!-- end of data -->\n          </app-ui-list-data2>\n          <!-- end of list -->\n        </ng-container>\n        <!-- end modal-content-detail -->\n        <ng-container textType=\"modal-btm-detail\">\n          <div class=\"btm-set-block\">\n            <span class=\"ps-text\">\n              {{alertAutoDeleteCustomer.length}}  {{language.people |translate }}\n            </span>\n            <!-- btn -->\n            <app-ui-btn-layout>\n              <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" (ClickBtn)=\"isDisplayDeleteRemind = !isDisplayDeleteRemind\">\n                <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n              </app-ui-btn>\n            </app-ui-btn-layout>\n            <!-- end of btn -->\n          </div>\n\n        </ng-container>\n        <!-- end modal-btm-detail -->\n      </app-ui-modal-style-img-base>\n    <!-- end of remind delete -->\n  </div>\n    <!-- end of Popup -->\n\n</app-ui-main-side-menu>\n",
                animations: [
                    trigger('searchBlockAni', [
                        state('*', style({
                            width: '0',
                            opacity: 0
                        })),
                        state('open', style({
                            width: '100%',
                            opacity: 1
                        })),
                        state('closed', style({
                            width: '0',
                            opacity: 0
                        })),
                        transition('open => closed', animate('300ms ease-in')),
                        transition('closed => open', animate('300ms ease-in'))
                    ]),
                ],
                styles: [".filter-block{display:flex;padding:0 20px;list-style-type:none;align-content:center;flex-wrap:wrap}.filter-block ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.filter-block .filter-item{display:flex;align-items:center;max-width:40px;width:100%;margin-right:20px}.filter-block .filter-item:last-of-type{margin-right:0}.filter-block .filter-item>a,.filter-block .filter-item>button{display:inline-block;position:relative;width:100%;max-width:40px}.filter-block .filter-item a,.filter-block .filter-item button{background-color:transparent;border:none;padding:0}.filter-block .filter-item a:focus,.filter-block .filter-item button:focus{outline:0}.filter-block .filter-item a img,.filter-block .filter-item button img{width:40px;height:40px}.filter-block .filter-item .num-block{display:flex;width:20px;height:20px;background-color:#007ab3;border-radius:50%;justify-content:center;align-items:center;position:absolute;right:-5px;top:-5px}.filter-block .filter-item .num-block .num{color:#fff;font-weight:700;font-size:.75rem}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.filter-block .search-animate-block{align-items:center;background-color:#fff}.filter-block .search-animate-block .search-input-block{display:inline-block;width:0;position:relative}.filter-block .search-animate-block ::ng-deep .nx-formfield__input{border-top:none;width:100%}.filter-block .search-animate-block ::ng-deep .btn-search-cancel{position:absolute;right:0;display:inline-block;width:44px;height:44px;top:-7px;text-align:right;opacity:0}.filter-block .search-animate-block ::ng-deep .btn-search-cancel nx-icon{font-size:16px;color:#c2c2c2;margin-right:10px}.filter-block .search-animate-block.active{max-width:calc(100vw - 30px);margin-left:0!important}.filter-block .search-animate-block.active .search-input-block{display:inline-block;width:100%}.filter-block .search-animate-block.active ::ng-deep .btn-search-cancel{display:inline-block;opacity:1}@media (min-width:769px){.filter-block .search-animate-block ::ng-deep .btn-search-cancel nx-icon{margin-right:5px}.filter-block .search-animate-block.active{max-width:210px}}.filter-all-block{position:relative;overflow:hidden;display:inline-block;width:100%;min-height:56px;margin-bottom:10px}.filter-block{transition:.2s;position:absolute;height:100%;left:0;width:1400px}.filter-block>.filter-item{transition:.2s}.filter-block.ani-bar-move{left:-187px}.filter-block.ani-bar-move .filter-item{opacity:0}.filter-block.ani-bar-move .filter-item.search-animate-block{opacity:1}@media (min-width:1024px){.filter-block .filter-item{margin-right:5px}.filter-block .filter-item:last-of-type{margin-right:0}.filter-block .filter-item button{max-width:30px}.filter-block .filter-item button img{width:30px;height:30px}.filter-block{width:500px}.filter-block.ani-bar-move{left:-137px}}@media screen and (min-width:1025px){.filter-block .filter-item{max-width:4vw}.filter-block .filter-item button{max-width:3vw}.filter-block .filter-item button img{width:3vw;height:3vw}.filter-block{width:50vw}.filter-block+.filter-block{margin-right:.5vw}.filter-block:last-of-type{margin-right:0}.filter-block.ani-bar-move{left:-13.7vw}.filter-block .search-animate-block.active{max-width:21vw}}::ng-deep .modal-container-block .textarea-block textarea{min-height:180px;margin-bottom:0}::ng-deep .top-search-block{padding-top:21px;padding-left:20px;padding-right:20px}::ng-deep app-customer-list,::ng-deep app-ui-infinite-scroll{display:inline-block;width:100%;height:100%}::ng-deep .ui-list-data{display:inline-block;width:100%}.side-menu-content{color:#414141;max-height:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:hidden;width:100%;max-width:100%}.side-menu-content .title-main-block{padding-left:15px;padding-right:20px}.main-content{background-color:#f5f5f5;box-sizing:border-box;padding-left:40px;padding-top:0;overflow-y:auto;height:100vh;position:static}.main-content ::ng-deep .scroll-content{background-color:#f5f5f5;overflow-x:hidden}@media (max-width:768px){.main-content{position:relative;padding-top:44px}}@media (max-width:767px){.main-content{padding-left:5px;padding-right:5px}@supports (top:constant(safe-area-inset-top)){.main-content ::ng-deep .infiniti-scroll{max-height:calc(100vh - 44px - constant(safe-area-inset-top) - constant(safe-area-inset-bottom))}}@supports (top:env(safe-area-inset-top)){.main-content ::ng-deep .infiniti-scroll{max-height:calc(100vh - 44px - env(safe-area-inset-top) - env(safe-area-inset-bottom))}}}"]
            }] }
];
CustomersComponent.ctorParameters = () => [
    { type: CustomerService },
    { type: CalendarService },
    { type: TranslateService },
    { type: ChangeDetectorRef },
    { type: DeviceService },
    { type: DateUtils },
    { type: ProfileCodeService },
    { type: ExtensionService },
    { type: CustomerUtils },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [storeCustomerToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [syncCustomerToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerActionToken,] }] }
];
CustomersComponent.propDecorators = {
    calendarEditComponent: [{ type: ViewChild, args: [CalendarEditComponent,] }],
    detailPreTemplate: [{ type: Input }],
    detailPostTemplate: [{ type: Input }],
    detailModel: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerDetailResult {
    constructor() {
        //edit profile result
        this._detailSaveSuccess = false;
    }
    /**
     * @return {?}
     */
    get detailSaveSuccess() { return this._detailSaveSuccess; }
    /**
     * @param {?} isSuccess
     * @return {?}
     */
    set detailSaveSuccess(isSuccess) { this._detailSaveSuccess = isSuccess; }
    /**
     * @return {?}
     */
    get editDetail() { return this._editDetail; }
    /**
     * @param {?} detail
     * @return {?}
     */
    set editDetail(detail) { this._editDetail = detail; }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerEditComponent {
    /**
     * @param {?} customerService
     * @param {?} profileCodeService
     * @param {?} customerUtils
     * @param {?} changeDetector
     * @param {?} customCustomerAction
     * @param {?} customerStore
     */
    constructor(customerService, profileCodeService, customerUtils, changeDetector, customCustomerAction, customerStore) {
        this.customerService = customerService;
        this.profileCodeService = profileCodeService;
        this.customerUtils = customerUtils;
        this.changeDetector = changeDetector;
        this.customCustomerAction = customCustomerAction;
        this.customerStore = customerStore;
        this.sendContentHeight = new EventEmitter();
        this.editModel = new EventEmitter();
        this.validationResult = new ValidationResult();
        this.customerDetail = new CustomerDetail();
        this.pageTitle = 'Edit Profile'; //default
        //select options
        this.optionTel = new Array();
        this.optionAddress = new Array();
        this.optionEmail = new Array();
        this.optionAge = new Array();
        this.optionGender = new Array();
        this.optionIncome = new Array();
        this.optionSource = new Array();
        this.optionMarriage = new Array();
        this.optionChildren = new Array();
        this.optionFamiliarity = new Array();
        this.optionRecentStatus = new Array();
        this.optionManpa = new Array();
        this.optionContactFrequancyPerYear = new Array();
        this.language = new Language();
        this.disableAge = false;
        this.isDisplaySavePopup = false;
        this.btnSaveDisable = false;
        this.isShow = false;
        this._telLimit = 6;
        this._emailLimit = 3;
        this._addressLimit = 3;
        this.edit_type = "add";
        /** @type {?} */
        let telCodeArray = this.profileCodeService.getCodeArray('Customer_TelType');
        /** @type {?} */
        let emailCodeArray = this.profileCodeService.getCodeArray('Customer_EmailType');
        /** @type {?} */
        let addressCodeArray = this.profileCodeService.getCodeArray('Customer_AddressType');
        /** @type {?} */
        let ageCodeArray = this.profileCodeService.getCodeArray('Customer_Age');
        /** @type {?} */
        let genderCodeArray = this.profileCodeService.getCodeArray('Customer_Gender');
        /** @type {?} */
        let incomeCodeArray = this.profileCodeService.getCodeArray('Customer_Income');
        /** @type {?} */
        let sourceCodeArray = this.profileCodeService.getCodeArray('Customer_Source');
        /** @type {?} */
        let marriageCodeArray = this.profileCodeService.getCodeArray('Customer_Marriage');
        /** @type {?} */
        let childrenCodeArray = this.profileCodeService.getCodeArray('Customer_Children');
        /** @type {?} */
        let familiarityCodeArray = this.profileCodeService.getCodeArray('Customer_Familiarity');
        /** @type {?} */
        let recentStatusCodeArray = this.profileCodeService.getCodeArray('Customer_RecentStatus');
        /** @type {?} */
        let manpaCodeArray = this.profileCodeService.getCodeArray('Customer_Status');
        /** @type {?} */
        let contactFrequancyCodeArray = this.profileCodeService.getCodeArray('Customer_ContactFrequancy');
        this.optionTel = this.customerUtils.setCode2Option(telCodeArray);
        this.optionEmail = this.customerUtils.setCode2Option(emailCodeArray);
        this.optionAddress = this.customerUtils.setCode2Option(addressCodeArray);
        this.optionAge = this.customerUtils.setCode2Option(ageCodeArray);
        this.optionGender = this.customerUtils.setCode2Option(genderCodeArray);
        this.optionIncome = this.customerUtils.setCode2Option(incomeCodeArray);
        this.optionSource = this.customerUtils.setCode2Option(sourceCodeArray);
        this.optionMarriage = this.customerUtils.setCode2Option(marriageCodeArray);
        this.optionChildren = this.customerUtils.setCode2Option(childrenCodeArray);
        this.optionFamiliarity = this.customerUtils.setCode2Option(familiarityCodeArray);
        this.optionRecentStatus = this.customerUtils.setCode2Option(recentStatusCodeArray);
        this.optionManpa = this.customerUtils.setCode2Option(manpaCodeArray);
        this.optionContactFrequancyPerYear = this.customerUtils.setCode2Option(contactFrequancyCodeArray);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.customerStore) {
            this.customerStore.getCurrentCustomerDetail().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.customerDetail = data;
                if (StringUtils.isEmpty(this.customerDetail.clientID)) {
                    //ADD
                    console.log("add :", this.customerDetail);
                    this.pageTitle = "";
                    this.disableAge = false;
                    this.customerDetail = new CustomerDetail();
                    this.customerDetail.ageRange = '';
                    this.edit_type = "add";
                }
                else {
                    //Edit
                    console.log("edit :", this.customerDetail);
                    this.pageTitle = this.customerDetail.lastName + this.customerDetail.firstName;
                    if (StringUtils.isNotEmpty(this.customerDetail.birthday)) {
                        this.disableAge = true;
                    }
                    else {
                        this.customerDetail.ageRange = '';
                        this.disableAge = false;
                    }
                    this.edit_type = "edit";
                }
                this.editModel.emit(this.customerDetail);
                this.changeDetector.detectChanges();
                this.isShow = true;
            }));
        }
    }
    /**
     * @return {?}
     */
    validationForm() {
        console.log(this.customerDetail);
        //valid customer
        this.validationResult = this.customerService.validProfile(this.customerDetail);
        if (this.validationResult != null) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollToError();
            }), 200);
        }
    }
    // Save btn click
    /**
     * @param {?} event
     * @return {?}
     */
    saveProfile(event) {
        //valid customer
        this.validationForm();
        console.log(this.validationResult.isTrue());
        if (this.validationResult.isTrue()) {
            this.btnSaveDisable = true;
            //if tel/email/address all empty data , skip it
            /** @type {?} */
            let tmpTelArray = [];
            /** @type {?} */
            let tmpEmailArray = [];
            /** @type {?} */
            let tmpAddressArray = [];
            this.customerDetail.tels.forEach((/**
             * @param {?} tel
             * @return {?}
             */
            (tel) => {
                if (!tel.isEmpty())
                    tmpTelArray.push(tel);
            }));
            this.customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            (email) => {
                if (!email.isEmpty())
                    tmpEmailArray.push(email);
            }));
            this.customerDetail.addresses.forEach((/**
             * @param {?} address
             * @return {?}
             */
            (address) => {
                if (!address.isEmpty())
                    tmpAddressArray.push(address);
            }));
            this.customerDetail.tels = tmpTelArray;
            this.customerDetail.emails = tmpEmailArray;
            this.customerDetail.addresses = tmpAddressArray;
            console.log("customer-edit-save: ", this.customerDetail);
            this.customerService.saveCustomerDetail(this.customerDetail).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('saveDetail', data);
                //this.isDisplaySavePopup = true;
                //set result
                /** @type {?} */
                let result = new CustomerDetailResult();
                result.detailSaveSuccess = data.status;
                result.editDetail = this.customerDetail;
                this.customerService.profileResult = result;
                if (this.customerStore) {
                    this.customerStore.setCurrentCustomerDetail(this.customerDetail);
                    /** @type {?} */
                    let state$$1 = this.edit_type == "add" ? CUSTOMER_STATE.ADD_SAVED : CUSTOMER_STATE.EDIT_SAVED;
                    this.customerStore.setState(state$$1);
                }
                if (this.customCustomerAction) {
                    this.customCustomerAction.afterCustomerEditSave(this.customerDetail);
                }
                this.btnSaveDisable = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //獲得內容高
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.contentHeight = this.content.nativeElement.offsetHeight;
            console.log('ele Height:', this.contentHeight);
        }), 600);
        this.sendContentHeight.emit(this.contentHeight);
    }
    /**
     * @param {?} birthday
     * @return {?}
     */
    countAgeRange(birthday) {
        console.debug('birthday', birthday);
        this.customerDetail.birthday = birthday;
        if (StringUtils.isEmpty(birthday)) {
            this.customerDetail.ageRange = '';
            this.disableAge = false;
        }
        else {
            /** @type {?} */
            let age = this.customerUtils.countAge(birthday);
            /** @type {?} */
            let ageRange = this.customerUtils.countAgeRange(age);
            console.debug('ageRange', ageRange);
            if (ageRange != undefined) {
                this.customerDetail.ageRange = ageRange;
                this.changeDetector.detectChanges();
                this.disableAge = true;
            }
        }
        this.changeDetector.detectChanges();
    }
    /**
     * @return {?}
     */
    getTelLimit() {
        return this._telLimit;
    }
    /**
     * @return {?}
     */
    getEmailLimit() {
        return this._emailLimit;
    }
    /**
     * @return {?}
     */
    getAddressLimit() {
        return this._addressLimit;
    }
    /**
     * @return {?}
     */
    onAddTelGroup() {
        console.debug('onAddTelGroup');
        this.customerDetail.tels.push(new CustomerTel('', 'TelHome', '', 'APP'));
    }
    /**
     * @return {?}
     */
    onAddMailGroup() {
        console.debug('onAddMailGroup');
        this.customerDetail.addEmail(new CustomerEmail('', 'MailHome', '', 'APP'));
    }
    /**
     * @return {?}
     */
    onAddAddressGroup() {
        console.debug('onAddAddressGroup');
        this.customerDetail.addAddress(new CustomerAddress('', 'AddressTypeHome', '', '', '', '', '', 'APP'));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onRemoveTelGroup(index) {
        console.debug('onRemoveTelGroup', index);
        this.customerDetail.tels.splice(index, 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onRemoveEmailGroup(index) {
        console.debug('onRemoveEmailGroup', index);
        this.customerDetail.emails.splice(index, 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onRemoveAddressGroup(index) {
        console.debug('onRemoveAddressGroup', index);
        this.customerDetail.addresses.splice(index, 1);
    }
    /**
     * @return {?}
     */
    scrollToError() {
        /** @type {?} */
        let errorBlock = document.body.getElementsByClassName('error-msg');
        if (errorBlock.item(0)) {
            errorBlock.item(0).parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // if (errorBlock[0]) errorBlock[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
CustomerEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-edit',
                template: "<app-ui-inner-page *ngIf=\"isShow\" [title]=\"[pageTitle | translate ]\" [contentHeight]=\"this.contentHeight\" >\n  <div main>\n    <div #inpageMain class=\"layout-block\">\n      <div class=\"layout-style-single\">\n        <div class=\"form-all page-cust-info\" action=\"\">\n          <div class=\"profile-img-block img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n              <img class=\"normal-img\" src=\"assets/img/img-customer-profile.svg\">\n              <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n          </div>\n          <!-- {{customerProfile.lastName}} -->\n          <div *ngTemplateOutlet=\"editPreTemplate\"></div>\n          <app-ui-form-layout-advanced>\n            <!-- row1 -->\n            <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.lastName | translate]\" [name]=\"'lastName'\" [(nxValue)]=\"customerDetail.lastName\" [placeholder]=\"[language.lastNamePlaceholder | translate]\" [isDisable]=\"false\" [isError]=\"validationResult.isError('lastName')\"></app-ui-form-input>\n                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('lastName') == 'required'\">{{language.wrongLastName |translate }}</app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                    <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                      <app-ui-form-input [inputTitle]=\"[language.firstName | translate]\" [name]=\"'firstName'\" [(nxValue)]=\"customerDetail.firstName\" [placeholder]=\"[language.firstNamePlaceholder | translate]\" [isDisable]=\"false\"  [isError]=\"validationResult.isError('firstName')\" (nxValueChange)=\"validationForm()\"></app-ui-form-input>\n                      <app-ui-form-error-msg></app-ui-form-error-msg>\n                    </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row1 -->\n            <!-- row2 -->\n            <app-ui-data-group [groupName]=\"'tel'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-phone.svg'\">\n              <ng-container textType=\"dataContent\">\n                <ng-container *ngIf=\"customerDetail.tels.length != 0 ; else noTelContent\">\n                    <app-ui-form-layout-row *ngFor=\"let tel of customerDetail.tels; index as i ; last as isLast\">\n                        <ng-container *ngIf=\"tel.dataSource != 'OPUS'\">\n                            <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                              <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.telType\" [selectOption]='optionTel'></app-ui-form-select>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>\n                            <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveTelGroup(i)\">\n                              <app-ui-form-input [type]=\"'tel'\" [maxLength]=\"50\" [inputTitle]=\"[language.phone | translate]\" [(nxValue)]=\"tel.tel\"  [isDisable]=\"false\"></app-ui-form-input>\n                              <app-ui-form-error-msg></app-ui-form-error-msg>\n                            </app-ui-form-layout-col>                            \n                        </ng-container>\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                      </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noTelContent>\n                    <app-ui-form-layout-row >\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.notOPUSTelNumber() != getTelLimit()\" (add)=\"onAddTelGroup()\"></app-ui-form-layout-col>\n                      </app-ui-form-layout-row>\n                </ng-template>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row2 -->\n            <!-- row3 -->\n\n            <app-ui-data-group [groupName]=\"'email'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-mail.svg'\">\n              <ng-container textType=\"dataContent\">\n                \n                <ng-container *ngIf=\"customerDetail.emails.length != 0 ; else noMailContent\">\n                    <app-ui-form-layout-row *ngFor=\"let email of customerDetail.emails; index as i; last as isLast\">\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                            <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.email | translate]\" [(nxValue)]=\"email.emailType\" [selectOption]='optionEmail'></app-ui-form-select>\n                            <app-ui-form-error-msg></app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"8\" [hasRemove]=\"true\" (remove)=\"onRemoveEmailGroup(i)\">\n                            <app-ui-form-input [inputTitle]=\"[language.email | translate]\"  [(nxValue)]=\"email.email\"  [isDisable]=\"false\"></app-ui-form-input>\n                            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('email') == 'format'\">{{language.wrongEmail |translate }}</app-ui-form-error-msg>\n                          </app-ui-form-layout-col>\n                          <ng-container *ngIf=\"isLast\">\n                              <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                          </ng-container>\n                    </app-ui-form-layout-row>\n                </ng-container>\n                \n                <ng-template #noMailContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.emails.length != getEmailLimit()\" (add)=\"onAddMailGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n\n            <!-- end of row3 -->\n            <!-- row4 -->\n            <app-ui-data-group [groupName]=\"'addr'\" [isShowPreData]=\"true\" [imgType]=\"true\" [imgIconSrc]=\"'assets/img/icon-form-addr.svg'\">\n              <ng-container textType=\"dataContent\" >\n\n                <ng-container *ngIf=\"customerDetail.addresses.length != 0 ; else noAddressContent\">\n                    <app-ui-form-layout-row *ngFor=\"let address of customerDetail.addresses; index as i; last as isLast\">\n\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"4\">\n                          <app-ui-form-select [isShowTitle]=\"false\" [selectTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.addressType\" [selectOption]='optionAddress'  ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <div class=\"break-line\"></div>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                          <app-ui-form-input [inputTitle]=\"[language.country | translate]\" [(nxValue)]=\"address.country\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.city | translate]\" [(nxValue)]=\"address.city\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"4\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.area | translate]\" [(nxValue)]=\"address.area\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"3\" [colNB]=\"3\" [colPad]=\"3\" [colMobile]=\"6\">\n                            <app-ui-form-input [inputTitle]=\"[language.code | translate]\" [(nxValue)]=\"address.zipcode\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                        <app-ui-form-layout-col [colPC]=\"9\" [colNB]=\"9\" [colPad]=\"9\" [colMobile]=\"12\" [hasRemove]=\"true\" (remove)=\"onRemoveAddressGroup(i)\">\n                          <app-ui-form-input [inputTitle]=\"[language.address | translate]\" [(nxValue)]=\"address.address\" [isDisable]=\"false\"></app-ui-form-input>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n\n                        <ng-container *ngIf=\"isLast\">\n                            <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                        </ng-container>\n                        \n      \n                      </app-ui-form-layout-row>\n                </ng-container>\n\n                <ng-template #noAddressContent>\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\" [translateText]=\"language.add | translate\" [hasAdd]=\"customerDetail.addresses.length != getAddressLimit()\" (add)=\"onAddAddressGroup()\"></app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-template>\n\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row4 -->\n\n            <!-- row5 -->\n            <!-- TODO -->\n          <app-ui-data-group *ngIf=\"customerDetail.dataSource != 'OPUS'\">\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-date [title]=\"[language.birthday | translate ]\" [nxValue]=\"customerDetail.birthday\" (nxValueChange)=\"countAgeRange($event)\"></app-ui-form-date>\n                  <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('birthday') == 'date'\">{{language.wrongBirthday |translate }}</app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-form-select [selectTitle]=\"[language.age | translate ]\" [(nxValue)]=\"customerDetail.ageRange\" [selectOption]='optionAge' [isDisable]=\"disableAge\" ></app-ui-form-select>\n                  <app-ui-form-error-msg></app-ui-form-error-msg>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row5 -->\n\n\n          <ng-container *ngIf=\"customerDetail.dataSource != 'OPUS' ; else OPUSContent\">\n            <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.gender | translate ]\" [(nxValue)]=\"customerDetail.gender\" [selectOption]='optionGender' ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n          </ng-container>\n          \n          <ng-template #OPUSContent>\n             <!-- row6 -->\n          <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.occupation | translate ]\" [(nxValue)]=\"customerDetail.occupation\"  [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-input [inputTitle]=\"[language.company | translate ]\" [(nxValue)]=\"customerDetail.company\" [isDisable]=\"false\"></app-ui-form-input>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n          </app-ui-data-group>\n            <!-- end of row6 -->\n\n            <!-- row7 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.annualIncome | translate ]\" [(nxValue)]=\"customerDetail.income\" [selectOption]='optionIncome' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.source | translate ]\" [selectOption]='optionSource' [(nxValue)]=\"customerDetail.source\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row7 -->\n\n            <!-- row8 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.marriage | translate ]\" [selectOption]='optionMarriage' [(nxValue)]=\"customerDetail.marriage\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n\n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                    <app-ui-form-select [selectTitle]=\"[language.children | translate ]\" [selectOption]='optionChildren' [(nxValue)]=\"customerDetail.children\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row8 -->\n\n            <!-- row9 -->\n            <app-ui-data-group >\n            <ng-container textType=\"dataContent\">\n              <app-ui-form-layout-row>\n                  \n                  <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                      <app-ui-form-select [selectTitle]=\"[language.familiarity | translate ]\" [selectOption]='optionFamiliarity' [(nxValue)]=\"customerDetail.familiarity\" [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n              </app-ui-form-layout-row>\n            </ng-container>\n            </app-ui-data-group>\n            <!-- end of row9 -->\n        </ng-template>\n\n            <!-- row10 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                  <app-ui-form-layout-row>\n                      <app-ui-form-layout-col>\n                        <app-ui-form-select [selectTitle]=\"[language.recentStatus | translate ]\" [(nxValue)]=\"customerDetail.recentStatus\" [selectOption]='optionRecentStatus' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                        <app-ui-form-error-msg></app-ui-form-error-msg>\n                      </app-ui-form-layout-col>\n\n                  </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row10 -->\n\n            <!-- row10 -->\n            <app-ui-data-group >\n                <ng-container textType=\"dataContent\">\n                    <app-ui-form-layout-row>\n                        <app-ui-form-layout-col>\n                            <app-ui-form-select [selectTitle]=\"[language.customerStatus | translate ]\" [(nxValue)]=\"customerDetail.manpa\" [selectOption]='optionManpa' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                          <app-ui-form-error-msg></app-ui-form-error-msg>\n                        </app-ui-form-layout-col>\n                    </app-ui-form-layout-row>\n                </ng-container>\n              </app-ui-data-group>\n              <!-- end of row10 -->\n\n            <!-- row11 -->\n            <app-ui-data-group >\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                  <app-ui-form-layout-col >\n                    <app-ui-form-select [selectTitle]=\"[language.contactFrequencyYear | translate ]\"  [(nxValue)]=\"customerDetail.contactFrequancy\" [selectOption]='optionContactFrequancyPerYear' [placeholder]=\"[language.select | translate]\" ></app-ui-form-select>\n                    <app-ui-form-error-msg></app-ui-form-error-msg>\n                  </app-ui-form-layout-col>\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- end of row11 -->\n            <!-- row12 -->\n            <app-ui-data-group class=\"posibility-data-group\">\n              <ng-container textType=\"dataContent\">\n                <app-ui-form-layout-row>\n                    <app-ui-form-layout-col >\n                      <app-ui-form-title-sm>{{language.possibility |translate }}</app-ui-form-title-sm>\n                      <div class=\"tag-block\">\n                        <app-ui-form-radio-group [(nxValue)]=\"customerDetail.possibility\">\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'HOT' ? true: false\" class=\"HOT wd-max\" [value]=\"'HOT'\">{{\"HOT\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'WARM' ? true: false\" class=\"WARM wd-max\" [value]=\"'WARM'\">{{\"WARM\" | translate}}</app-ui-form-radio-tag>\n                          <app-ui-form-radio-tag [checked]=\"customerDetail.possibility == 'COLD' ? true: false\" class=\"COLD wd-max\" [value]=\"'COLD'\">{{\"COLD\" | translate}}</app-ui-form-radio-tag>\n                        </app-ui-form-radio-group>\n                      </div>\n                    </app-ui-form-layout-col >\n                </app-ui-form-layout-row>\n              </ng-container>\n            </app-ui-data-group>\n            <!-- row 12 -->\n          </app-ui-form-layout-advanced>\n          <div *ngTemplateOutlet=\"editPostTemplate\"></div>\n        </div>\n      </div>\n\n      <!-- btn -->\n      <app-ui-btn-layout>\n        <app-ui-btn [name]=\"'btn-save'\" (ClickBtn)=\"saveProfile($event)\" [isDisable]=\"btnSaveDisable\">\n          <ng-container TextType=\"cust\">{{language.save |translate }}</ng-container>\n        </app-ui-btn>\n      </app-ui-btn-layout>\n      <!-- end of btn -->\n\n\n\n    </div>\n\n  </div>\n</app-ui-inner-page>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-block{padding-top:10px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);background-color:#fff}.profile-img-block{text-align:center;padding-bottom:10px;padding-top:20px}.profile-img-block img{text-align:center;margin:0 auto;width:60px}.profile-img-block.img-block .active-img,.profile-img-block.img-block.active .normal-img{display:none}.profile-img-block.img-block.active .active-img{display:block}@media screen and (min-width:1025px){.profile-img-block img{width:6vw}}.tag-block{display:flex}.break-line{display:block;width:100%}.page-cust-info ::ng-deep app-ui-form-radio-tag{width:30%}.page-cust-info ::ng-deep app-ui-form-radio-tag .tag-block .tag-content{font-weight:700}.page-cust-info ::ng-deep app-ui-form-radio-tag+app-ui-form-radio-tag{margin-left:5%}:host ::ng-deep app-ui-btn-layout{position:relative;bottom:-24px;margin-right:0}:host ::ng-deep app-ui-btn-layout .btn-block{margin:0}::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{margin-top:8px!important}@media (max-width:767px){::ng-deep app-ui-form-layout-col:first-of-type .col-content.style-has-add{position:absolute;top:-18px;left:40px;max-width:150px}}::ng-deep .posibility-data-group{padding-bottom:0}::ng-deep .posibility-data-group ::ng-deep [class*=gas-col-]{margin-bottom:20px}::ng-deep .posibility-data-group .gas-row-block{margin-top:0}::ng-deep .btn-inner-page.style-out app-ui-btn-layout{position:relative;background-color:#f5f5f5;bottom:-20px;margin-top:40px}::ng-deep .btn-inner-page.style-out app-ui-btn-layout app-ui-btn{position:relative;top:-27px}"]
            }] }
];
CustomerEditComponent.ctorParameters = () => [
    { type: CustomerService },
    { type: ProfileCodeService },
    { type: CustomerUtils },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerActionToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [storeCustomerToken,] }] }
];
CustomerEditComponent.propDecorators = {
    sendContentHeight: [{ type: Output }],
    content: [{ type: ViewChild, args: ['inpageMain',] }],
    editPreTemplate: [{ type: Input }],
    editPostTemplate: [{ type: Input }],
    editModel: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerListComponent {
    /**
     * @param {?} changeDetecor
     * @param {?} elementRef
     * @param {?} showCustomerRule
     */
    constructor(changeDetecor, elementRef, showCustomerRule) {
        this.changeDetecor = changeDetecor;
        this.elementRef = elementRef;
        this.showCustomerRule = showCustomerRule;
        //Is Default Data(No Search Status)
        this.isDefaultData = true;
        this.showSearchNoData = false;
        this.loadingFinish = true;
        this.customerClick = new EventEmitter();
        this.customerLoad = new EventEmitter();
        this.customerRefresh = new EventEmitter();
        this._customerList = [];
        this.language = new Language();
    }
    /**
     * @return {?}
     */
    get customerList() { return this._customerList; }
    /**
     * @param {?} customerList
     * @return {?}
     */
    set customerList(customerList) {
        customerList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.showName = this.convertNameToShow(item.firstName, item.lastName);
        }));
        this._customerList = customerList;
        this.loadingFinish = true;
    }
    /**
     * @return {?}
     */
    get filterType() { return this._filterType; }
    /**
     * @param {?} filterType
     * @return {?}
     */
    set filterType(filterType) {
        this._filterType = filterType;
        if (this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType)) {
            this.isDefaultData = this.filterType == 'NONE';
            this.showSearchNoData = this.filterType == 'SEARCH';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByClientID(index, item) {
        return item.clientID;
    }
    /**
     * @return {?}
     */
    closeSlidingItems() {
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('list closeSlidingItems');
            /** @type {?} */
            const item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
            if (item != null) {
                /// console.debug('item size',item.length);
                console.debug('item', item);
                yield item.close();
                yield item.closeOpened();
            }
        });
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    onClickCustomer(clientID) {
        this.onClickCustomerID = clientID;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 300);
        /** @type {?} */
        let item = this.customerList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.clientID == clientID));
        this.customerClick.emit(item[0]);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    loadCustomer(e) {
        console.log('lazy load customer:', e);
        this.customerLoad.emit();
    }
    /**
     * @return {?}
     */
    refreshCustomer() {
        //set timeout for refresh animation
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customerRefresh.emit();
        }), 800);
    }
    /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        if (this.showCustomerRule) {
            return this.showCustomerRule.convertName(firstName, lastName);
        }
        else {
            return (firstName + lastName);
        }
    }
}
CustomerListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-list',
                template: "<div class=\"ui-list-data\">\n    <!-- CustomerList has data-->\n     <app-ui-infinite-scroll (loadingCallback)=\"loadCustomer($event)\" (refreshCallback)=\"refreshCustomer()\"\n        [(loadingFinish)]=\"loadingFinish\" [lazyLoading]=\"true\" [translateText]=\"language.loading | translate\">\n        \n        <ul class=\"list-data-block stop-scroll-block\">\n            <ng-container *ngIf=\"customerList && customerList.length != 0 ; else noCustomerData\">\n    \n            <li *ngFor=\" let customer of customerList;trackBy:trackByClientID; let i = index\" (click)=\"onClickCustomer(customer.clientID)\"  class=\"list-item-block\" [ngClass]= \"[(customer.clientID == onClickCustomerID ? ' active':''), (customer.isHighlight ? ' highlight':'')]\">\n                <div class=\"title-block\">\n                    <div class=\"like-block\">\n                        <app-ui-btn-like-add [isLike]=\"customer.isFollow\"></app-ui-btn-like-add>\n                    </div>\n                    <div class=\"title-text\">\n                        {{customer.showName}}\n                    </div>\n                    <app-ui-form-radio-tag class=\"tag-item\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customer.tag\">{{customer.tag | translate}}</app-ui-form-radio-tag>\n                </div>\n                <div class=\"profile-block\">\n                    <div class=\"img-profile-block\">\n                        <ng-container *ngIf=\"customer.isOtherSource; then otherSource else appSource\"></ng-container>\n\n                        <!-- datasource from Opus-->\n                        <ng-template #otherSource>\n                            <img src=\"assets/img/icon-customer-profile-sm.svg\">\n                        </ng-template>\n\n                        <!-- datasource from APP-->\n                        <ng-template #appSource>\n                            <img src=\"assets/img/icon-customer-profile-sm-active.svg\">\n                            \n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"content-block\">\n                  <app-ui-progress [value]=\"customer.complementPercent\" [theme]=\"'sub'\" [isShowValue]=\"true\">{{language.customerInformation |translate }}</app-ui-progress>\n                </div>\n            </li>\n        </ng-container>\n        </ul>\n      </app-ui-infinite-scroll>\n   \n\n    <ng-template #noCustomerData>\n        <!-- Customer no data without search-->\n        <ng-container *ngIf=\"isDefaultData ; else customerSearchNoData\">\n            <div class=\"skelton-layout stop-scroll-block\">\n                <div class=\"theme-loading\">\n                  <div class=\"text-desc\">\n                      <span class=\"text\">{{language.click |translate }}\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-add-grey.svg\"></span>\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-import-grey.svg\"></span>\n                        {{language.noEdit |translate }}</span>\n                  </div>\n\n                  <div class=\"loading-img\">\n                    <div class=\"skelton-data-block\">\n                        <div class=\"skelton-text wd-short align-right \"></div>\n                        <div class=\"skelton-text wd-long \"></div>\n                        <div class=\"skelton-row align-side\">\n                            <div class=\"skelton-text wd-md \"></div>\n                            <div class=\"skelton-text wd-short \"></div>\n                        </div>\n                        <div class=\"skelton-text wd-long \"></div>\n                    </div>\n                    <img src=\"assets/img/loading-customer-list.svg\">\n                  </div>\n\n                </div>\n              </div>\n        </ng-container>\n\n        <!-- Customer no data after searching-->\n        <ng-template #customerSearchNoData>\n            <ng-container *ngIf=\"showSearchNoData ;  else customerFilterNoData\">\n                    <div class=\"status-empty search-empty\">\n                            <div class=\"empty-block\">\n                                <div class=\"img-block\">\n                                    <img src=\"assets/img/empty-img-search.svg\">\n                                </div>\n                                <div class=\"text-block\">\n                                  <p>{{language.noSearch |translate }}</p>\n                                </div>\n                            </div>\n                          </div>\n            </ng-container>\n                \n        </ng-template>\n\n        <!-- Customer no data after filtering-->\n        <ng-template #customerFilterNoData>\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/icon-filter-no-data.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                          <p>{{language.noFilter |translate }}</p>\n                        </div>\n                    </div>\n                  </div>\n        </ng-template>\n            \n    </ng-template>\n\n  </div>\n",
                styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.ui-list-data .skelton-layout{margin-top:30px}.ui-list-data .theme-loading{text-align:center}.ui-list-data .theme-loading .text-desc{padding-left:10%;padding-right:10%;text-align:center;display:inline-block;vertical-align:middle;margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{color:#414141;font-size:.875rem;line-height:28px;display:inline-block;vertical-align:middle}.ui-list-data .theme-loading .text-desc .text .icon-img{display:inline-block;vertical-align:middle;line-height:normal}.ui-list-data .theme-loading .loading-img{text-align:right;position:relative}.ui-list-data .theme-loading .loading-img .skelton-data-block{padding-left:10%;padding-right:10%;box-sizing:border-box;position:absolute;top:30px;width:100%}.ui-list-data .theme-loading .loading-img .skelton-text{margin-bottom:25px}.ui-list-data .theme-loading .loading-img .wd-short{max-width:30%}.ui-list-data .theme-loading .loading-img .wd-md{max-width:54%}.ui-list-data .theme-loading .loading-img .wd-long{max-width:70%}.ui-list-data .theme-loading .loading-img img{max-width:300px;width:100%}@media (max-width:1023px){.ui-list-data .theme-loading img{bottom:400px;top:auto}}@media (max-width:767px){.ui-list-data .theme-loading{height:100%;position:relative}.ui-list-data .theme-loading .text-desc{margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{max-width:185px}.ui-list-data .theme-loading .loading-img{margin-top:0;height:100%;position:absolute;right:0;bottom:0;max-width:153px;width:100%}.ui-list-data .theme-loading .loading-img .wd-short{max-width:22%}.ui-list-data .theme-loading .loading-img .skelton-data-block{width:100%;max-width:253px;right:10px;top:60px;position:absolute}.ui-list-data .theme-loading .loading-img img{max-width:153px;margin-top:0;bottom:0;top:auto;position:absolute;right:0}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-empty.search-empty{padding-left:13%;padding-right:13%;box-sizing:border-box;text-align:center;display:flex;height:100%;min-height:calc(90vh - 59px - 56px - 24px);justify-content:center;align-items:center}.status-empty.search-empty .empty-block{text-align:center;margin:0 auto}.status-empty.search-empty .img-block{max-width:50px;width:100%;margin:0 auto}.status-empty.search-empty .text-block p{padding:0;font-size:1.125rem;line-height:28px}@media (max-width:767px){.status-empty.search-empty.search-empty{max-width:182px;width:100%;margin:0 auto;padding-left:0;padding-right:0}}.ui-list-data{border-top:1px solid #c2c2c2}.ui-list-data .title-sm-block{background-color:#ececec;display:inline-block;width:100%;padding:5px 15px 5px 6px}.ui-list-data .title-sm-block p{padding:0;margin:0}.ui-list-data .list-data-block{list-style-type:none;padding:0;border-bottom:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block{padding:12px 15px 12px 6px;box-sizing:border-box;position:relative}.ui-list-data .list-data-block .list-item-block.highlight{background-color:#f5f5f5}@media (min-width:1024px){.ui-list-data .list-data-block .list-item-block.active{background-color:#f1f9fa}}.ui-list-data .list-data-block .list-item-block+.list-item-block{border-top:1px solid #c2c2c2}.ui-list-data .list-data-block .list-item-block .title-block{display:flex;justify-content:flex-start;align-items:flex-start;padding-bottom:5px;min-height:40px}.ui-list-data .list-data-block .list-item-block .title-block .title-text{font-size:.875rem;padding:0 3px;font-weight:700;display:inline-block;width:100%;display:-webkit-box;-webkit-line-clamp:1;/*! autoprefixer: off */-webkit-box-orient:vertical;overflow:hidden}.ui-list-data .list-data-block .list-item-block .like-block{margin-top:2px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block .progress-value-block .progress-block{max-width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{pointer-events:none;display:inline-block;max-width:12px;max-height:12px;width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{display:inline-block;width:12px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{max-width:100%;width:12px}.ui-list-data .list-data-block .list-item-block .profile-block{display:flex;align-items:center;justify-content:flex-end;position:absolute;right:30px;top:36px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{display:flex;max-width:10%;align-items:center}@media screen and (min-width:1025px){.ui-list-data .list-data-block .list-item-block .title-block .title-text{padding-right:0;margin-right:3px}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{max-width:1.2vw;max-height:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{width:1.2vw}.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{width:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block{right:1.2vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:1.4vw;width:1.4vw}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block img{width:1.4vw}}.ui-list-data .list-data-block .list-item-block .content-block{padding-left:12px}.ui-list-data .list-data-block ::ng-deep .tag-item{min-width:40px}.ui-list-data .list-data-block ::ng-deep .tag-item .ul-tag-block{position:relative;top:2px}.ui-list-data .list-data-block ::ng-deep .tag-item ::ng-deep .tag-block{height:14px;padding-top:0;padding-bottom:0}.ui-list-data ::ng-deep .progress-whole-block{padding-bottom:0}.ui-list-data ::ng-deep .progress-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width:769px){.ui-list-data ::ng-deep .scroll-content{height:calc(100vh - 80px - 140px)}}@media (max-width:768px){.ui-list-data ::ng-deep .list-data-block .tag-item{padding-right:0;margin-right:35px;width:40px}.ui-list-data .list-data-block .list-item-block .profile-block{top:12px}.ui-list-data .skelton-layout{height:calc(100vh - 60px - 55px - 134px);overflow-y:auto}::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 60px - 55px - 134px);height:100%}@supports (top:constant(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 60px - 55px - 134px)}}@supports (top:env(safe-area-inset-top)){::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 60px - 55px - 134px)}}}@media (max-width:767px){.ui-list-data ::ng-deep .tag-item{min-width:40px;margin-top:2px;padding-right:35px}.ui-list-data .list-data-block .list-item-block{display:flex;flex-wrap:wrap}.ui-list-data .list-data-block .list-item-block .title-block{justify-content:flex-start;align-items:flex-start;max-width:100%;width:100%;padding-right:0;box-sizing:border-box}.ui-list-data .list-data-block .list-item-block .profile-block{justify-content:center;align-items:flex-start;padding-top:2px;max-width:20px;width:100%;right:15px;top:12px}.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:100%;align-items:center}.ui-list-data .list-data-block .list-item-block .content-block{width:100%}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block{display:flex;width:100%;justify-content:flex-end;padding-bottom:0!important}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block{padding-left:10px}.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block .progress-block{display:none}}"]
            }] }
];
CustomerListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showCustomerRuleToken,] }] }
];
CustomerListComponent.propDecorators = {
    customerClick: [{ type: Output }],
    customerLoad: [{ type: Output }],
    customerRefresh: [{ type: Output }],
    customerList: [{ type: Input }],
    filterType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerDetailComponent {
    /**
     * @param {?} dateUtils
     * @param {?} changeDetctor
     */
    constructor(dateUtils, changeDetctor) {
        this.dateUtils = dateUtils;
        this.changeDetctor = changeDetctor;
        this.onEditDetail = new EventEmitter();
        this.onCallPhone = new EventEmitter();
        this.onDeleteDetail = new EventEmitter();
        this.onAddAppointment = new EventEmitter();
        this.followChange = new EventEmitter();
        this._customerDetail = new CustomerDetail();
        this.language = new Language();
        // empty status
        this.isEmptyAppointment = false;
        this.isEmptyEdit = false;
        this.isEmptyDel = false;
        this.isEmptyDetailInfo = false;
        this.isEmptyContactNote = false;
        this.isCollapseBtnShow = true;
        this.isHasAgeRange = false;
        this.isHasContactFrequancy = false;
    }
    /**
     * @return {?}
     */
    get customerDetail() { return this._customerDetail; }
    /**
     * @param {?} inputCustomerDetail
     * @return {?}
     */
    set customerDetail(inputCustomerDetail) {
        //check datasource is from OPUS
        this._customerDetail = inputCustomerDetail;
        console.log('inputCustomerDetail: ', inputCustomerDetail);
        if (this._customerDetail.dataSource == 'OPUS') {
            this.isEmptyDel = true;
        }
        else {
            this.isEmptyDel = false;
        }
        this._customerDetail.updateEmptyStatus();
        this.convertEmptyValToDisplayText(this._customerDetail);
        this.checkInfoIsEmpty();
        this.changeCollateButton();
        this.changeDetctor.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @private
     * @return {?}
     */
    changeCollateButton() {
        console.debug('changeCollateButton', this.customerDetail.tels.length, this.customerDetail.emails.length, this.customerDetail.addresses.length);
        if (this.customerDetail.tels.length <= 2 && this.customerDetail.emails.length <= 1 && this.customerDetail.addresses.length <= 1) {
            this.isCollapseBtnShow = false;
        }
        else {
            this.isCollapseBtnShow = true;
        }
        console.debug('isCollapseBtnShow', this.isCollapseBtnShow);
    }
    /**
     * @private
     * @return {?}
     */
    checkInfoIsEmpty() {
        //if detail info is empty , display no data status      
        if (this.customerDetail.isEmptyInfo) {
            this.isEmptyDetailInfo = true;
        }
        else {
            this.isEmptyDetailInfo = false;
        }
    }
    /**
     * @private
     * @param {?} customerDetail
     * @return {?}
     */
    convertEmptyValToDisplayText(customerDetail) {
        //if not data set default value(?? or -- --)
        console.log("convertEmptyValToDisplayText: ", customerDetail);
        if (StringUtils.isEmpty(customerDetail.ageRange)) {
            this.isHasAgeRange = false;
        }
        else {
            this.isHasAgeRange = true;
        }
        if (StringUtils.isEmpty(customerDetail.contactFrequancy)) {
            this.isHasContactFrequancy = false;
        }
        else {
            this.isHasContactFrequancy = true;
        }
        if (StringUtils.isEmpty(customerDetail.gender))
            customerDetail.gender = '- -';
        if (StringUtils.isEmpty(customerDetail.occupation))
            customerDetail.occupation = '- -';
        if (StringUtils.isEmpty(customerDetail.company))
            customerDetail.company = '- -';
        if (StringUtils.isEmpty(customerDetail.income))
            customerDetail.income = '- -';
        if (StringUtils.isEmpty(customerDetail.source))
            customerDetail.source = '- -';
        if (StringUtils.isEmpty(customerDetail.marriage))
            customerDetail.marriage = '- -';
        if (StringUtils.isEmpty(customerDetail.children))
            customerDetail.children = '- -';
        if (StringUtils.isEmpty(customerDetail.familiarity))
            customerDetail.familiarity = '- -';
        if (StringUtils.isEmpty(customerDetail.recentStatus))
            customerDetail.recentStatus = '- -';
        if (StringUtils.isEmpty(customerDetail.manpa))
            customerDetail.manpa = '- -';
        if (StringUtils.isEmpty(customerDetail.children))
            customerDetail.children = '- -';
    }
    /**
     * @return {?}
     */
    toBirthday() {
        if (this.customerDetail.birthday != undefined) {
            return this.dateUtils.toDateString(this.customerDetail.birthday, 'yyyy-MM-dd');
        }
        else {
            return '- -';
        }
    }
    /**
     * @return {?}
     */
    edit() {
        this.onEditDetail.emit(this.customerDetail.clientID);
    }
    /**
     * @return {?}
     */
    delete() {
        this.onDeleteDetail.emit(this.customerDetail.clientID);
    }
    /**
     * @return {?}
     */
    callPhone() {
        this.onCallPhone.emit(this.customerDetail.clientID);
    }
    /**
     * @return {?}
     */
    addAppointment() {
        this.onAddAppointment.emit(this.customerDetail.clientID);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByFn(index, item) {
        return item.name;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    isFollowChange(isFollow) {
        console.debug('isFollowChange', isFollow);
        // display new follow state first
        this.customerDetail.updateFollowStatus(isFollow);
        this.changeDetctor.detectChanges();
        //ouput follow detail change status
        this.followChange.emit({ 'isFollow': isFollow, "clientID": this.customerDetail.clientID });
    }
}
CustomerDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-detail',
                template: "<!-- has CustomerDetail data-->\n<ng-container *ngIf=\"customerDetail != undefined && customerDetail.clientID != ''; else noCustomerData\">\n  <div class=\"main-detail-content\">\n    <!-- profile -->\n    <div class=\"space-ui-element profile-block\">\n        <div class=\"img-block\" [ngClass]=\"customerDetail.dataSource == 'OPUS' ? '': ' active'\">\n          <!-- if true show active img (green) or show normal img -->\n          <img class=\"normal-img\" src=\"assets/img/img-cust-profile.svg\">\n          <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n        </div>\n        <div class=\"content-block\">\n          <ng-container *ngIf=\"customerDetail.possibility != ''\">\n              <app-ui-form-radio-tag class=\"wd-lg profile-tag\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customerDetail.possibility\">{{customerDetail.possibility|translate}}</app-ui-form-radio-tag>\n          </ng-container>\n          \n          <div class=\"name-block\">\n              {{customerDetail.lastName  + customerDetail.firstName}}\n          </div>\n          <div class=\"sm-text\">\n              <span class=\"age\" *ngIf=\"isHasAgeRange\">\n                ({{customerDetail.ageRange}})\n              </span>\n              <span class=\"detail-text\" *ngIf=\"isHasContactFrequancy\">\n                  {{language.contactFrequency|translate }}\n                  <span class=\"text-focus\">{{customerDetail.contactFrequancy}}</span>\n                  {{language.timePerYear|translate }}\n              </span>\n            </div>\n        </div>\n        <div class=\"like-block\">\n          <app-ui-btn-like-add [isLike]=\"customerDetail.isFollow\" (onChange)=\"isFollowChange($event)\"></app-ui-btn-like-add>\n        </div>\n        \n    </div>\n    <!-- end of profile -->\n\n    <!-- link -->\n    <ul class=\"space-ui-element ui-list-block\">\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyAppointment? ' disable': ''\">\n            <button Action action='addAppointment' (actionClick)=\"addAppointment()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-appointment-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-appointment.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.appointment|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"customerDetail.tels.length == 0? ' disable': ''\">\n            <button Action action=\"customerCallPhone\" (actionClick)=\"callPhone()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-contact-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-contact.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.contact|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyEdit? ' disable': ''\">\n            <button Action action=\"customerEdit\" (actionClick)=\"edit()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src=\"assets/img/icon-cust-edit-disable.svg\">\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-edit.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.edit|translate }}</p>\n                </div>\n            </button>\n        </li>\n        <li class=\"list-item-block\" [ngClass]=\"isEmptyDel? ' disable': ''\">\n            <button Action action=\"customerDelete\" (actionClick)=\"delete()\">\n                <div class=\"img-block\">\n                    <img class=\"img-disable\" src='assets/img/icon-cust-del-disable.svg'>\n                    <img class=\"img-normal\" src=\"assets/img/icon-cust-del.svg\">\n                </div>\n                <div class=\"text-block\">\n                    <p>{{language.delete|translate }}</p>\n                </div>\n            </button>\n            \n        </li>\n    </ul>\n    <!-- end of link block -->\n    <div *ngTemplateOutlet=\"detailPreTemplate\"></div>\n    <!-- first card -->\n    <app-ui-collapse-text1 class=\"card1-all-block\" [(isCollapseBtnShow)]=\"isCollapseBtnShow\" [translateEmpty]=\"language.empty | translate\" [isDataEmpty]=\"customerDetail.tels.length == 0 && customerDetail.emails.length == 0 && customerDetail.addresses.length == 0\">\n          <!-- \u96FB\u8A71-->\n          <ng-container TextType=\"collapseContentOrigin\">\n              <ng-container *ngIf=\"customerDetail.tels.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-phone.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.tels[0].telType|translate }}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[0].tel }}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContentOrigin2\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 1\">\n                  <app-ui-info-text1 >\n                    <ng-container textType=\"title\">{{customerDetail.tels[1].telType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.tels[1].tel}}</ng-container>\n                </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent\">\n              <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                  <ng-container *ngIf=\"i > 1 && (i + 1) % 2 != 0\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                      </app-ui-info-text1>\n                </ng-container>\n                  </ng-container>\n                </ng-container>\n            </ng-container>\n\n            <ng-container TextType=\"collapseContent2\">\n                <ng-container *ngIf=\"customerDetail.tels.length > 2\">\n                  <ng-container *ngFor=\"let customerTel of customerDetail.tels; let i = index;\">\n                    <ng-container *ngIf=\"i > 1 && (i + 1) % 2 == 0\">\n                        <app-ui-info-text1>\n                          <ng-container textType=\"title\">{{customerTel.telType|translate}}</ng-container>\n                          <ng-container textType=\"text\">{{customerTel.tel}}</ng-container>\n                        </app-ui-info-text1>\n                  </ng-container>\n                    </ng-container>\n                  </ng-container>\n              </ng-container>\n          <!-- end of \u96FB\u8A71-->\n\n          <!-- Email-->        \n          <ng-container TextType=\"collapseContentOrigin3\">\n              <ng-container *ngIf=\"customerDetail.emails.length != 0\">\n              <app-ui-info-text1  [imgSrc]=\"'assets/img/icon-form-mail.svg'\">\n                <ng-container textType=\"title\">{{customerDetail.emails[0].emailType|translate}}</ng-container>\n                <ng-container textType=\"text\">{{customerDetail.emails[0].email}}</ng-container>\n              </app-ui-info-text1>\n             </ng-container>     \n          </ng-container>\n\n          <ng-container TextType=\"collapseContent3\">\n              <ng-container *ngIf=\"customerDetail.emails.length > 1\">\n                <ng-container *ngFor=\"let email of customerDetail.emails ; let i = index\">\n                  <ng-container *ngIf=\"i >= 1\">\n                      <app-ui-info-text1>\n                        <ng-container textType=\"title\">{{email.emailType|translate}}</ng-container>\n                        <ng-container textType=\"text\">{{email.email}}</ng-container>\n                      </app-ui-info-text1>\n                  </ng-container>                     \n              </ng-container>\n              </ng-container>            \n          </ng-container>\n          <!-- end of Email-->\n\n          <!-- Address-->\n          \n          <ng-container TextType=\"collapseContentOrigin4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length != 0\">\n                  <app-ui-info-text1 [imgSrc]=\"'assets/img/icon-form-addr.svg'\">\n                    <ng-container textType=\"title\">{{customerDetail.addresses[0].addressType|translate}}</ng-container>\n                    <ng-container textType=\"text\">{{customerDetail.addresses[0].toFullAddress()}}</ng-container>\n                  </app-ui-info-text1>\n              </ng-container>\n          </ng-container>\n\n          <ng-container TextType=\"collapseContent4\">\n              <ng-container *ngIf=\"customerDetail.addresses.length > 1\">\n                  <ng-container *ngFor=\"let address of customerDetail.addresses ; let i = index\">\n                      <ng-container *ngIf=\"i >= 1\">\n                          <app-ui-info-text1 [imgSrc]=\"''\">\n                              <ng-container textType=\"title\">{{address.addressType|translate}}</ng-container>\n                              <ng-container textType=\"text\">{{address.toFullAddress()}}</ng-container>\n                            </app-ui-info-text1>\n                      </ng-container>                    \n                  </ng-container>  \n              </ng-container>\n            \n          </ng-container>\n\n          \n                \n          <!-- end of Address-->\n      \n    </app-ui-collapse-text1>\n\n    <!-- end of first card -->\n\n\n    <!-- 2nd card -->\n    <app-ui-collapse-card1 [isDataEmpty]=\"isEmptyDetailInfo\" [tagText]=\"[language.detail | translate]\" [emptyText]=\"[language.noClick | translate, language.noInformation | translate]\" >\n        <ng-container textType=\"collapseContentOrigin\">\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.birthday|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{toBirthday()}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.gender|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.gender}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.occupation|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.occupation}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.company|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.company}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.annualIncome|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.income}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.source|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.source}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.marriage|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.marriage}} </ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.children|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.children}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.familiarity|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.familiarity}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.recentStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.recentStatus}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n                <app-ui-info-text2>\n                  <ng-container textType=\"title\">{{language.customerStatus|translate }}</ng-container>\n                  <ng-container textType=\"text\">{{customerDetail.manpa}}</ng-container>\n                </app-ui-info-text2>\n              </app-ui-form-layout-col>        \n\n              <!-- <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">{{language.extraItem|translate }}</ng-container>\n                    <ng-container textType=\"text\">ExtraItem</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>      -->\n            </app-ui-form-layout-row>\n        </ng-container>\n        <ng-container textType=\"collapseContent\">\n            <!-- <app-ui-form-layout-row>\n                \n              </app-ui-form-layout-row>\n\n              <app-ui-form-layout-row>\n                <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"6\">\n                  <app-ui-info-text2>\n                    <ng-container textType=\"title\">ExtraItem3</ng-container>\n                    <ng-container textType=\"text\">ExtraItem3</ng-container>\n                  </app-ui-info-text2>\n                </app-ui-form-layout-col>\n              </app-ui-form-layout-row> -->\n        </ng-container>\n    </app-ui-collapse-card1>\n    <!-- end of 2nd card -->\n    <div *ngTemplateOutlet=\"detailPostTemplate\"></div>\n  </div>\n</ng-container>\n\n<ng-template #noCustomerData>\n  <div class=\"main-detail-content skelton-layout\">\n    <div class=\"theme-loading\" style=\"background-image:url('assets/img/loading-customer-main.svg')\">\n      <!-- profile -->\n      <div class=\"space-ui-element profile-block\">\n          <div class=\"img-block\">\n            <div class=\"skeleton-round \"></div>\n          </div>\n          <div class=\"content-block\">\n            <div class=\"tag-block\">\n                <div class=\"skelton-text  \" ></div>\n            </div>\n            <div class=\"name-block\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n            <div class=\"sm-text\">\n                <div class=\"skelton-text \" ></div>\n            </div>\n          </div>\n      </div>\n      <!-- end of profile -->\n      <!-- link list -->\n      <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\" *ngFor='let number of [0,1,2,3]' >\n              <div class=\"skelton-img-text\">\n                  <div class=\"skelton-square\">\n                      <div class=\"skeleton-round \"></div>\n                  </div>\n                  <div class=\"skelton-text \" ></div>\n              </div>\n          </li>\n      </ul>\n      <!-- end of link list -->\n      <!-- line -->\n      <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n      <!-- end of line -->\n  \n      <!-- list data -->\n      <div class=\"card-text\">\n        <div class=\"left-part\">\n          <div class=\"data-group\">\n              \n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-short\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n              <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n        <div class=\"right-part\">\n            <div class=\"data-group\">\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n                <div class=\"skelton-text   wd-short\"></div>\n                <div class=\"skelton-text   wd-long\"></div>\n            </div>\n        </div>\n      </div>\n  \n      <!-- end of list data -->\n  \n       <!-- line -->\n       <div class=\"skelton-line-block\">\n          <div class=\"skelton-line \"></div>\n      </div>\n       <!-- end of line -->\n  \n  \n      \n    </div>\n  </div>\n    <!-- Customer data is empty -->\n</ng-template>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.main-detail-content.skelton-layout{margin:0 -40px 0 0}@media (max-width:767px){.main-detail-content.skelton-layout{margin-right:-40px}.main-detail-content.skelton-layout .profile-block .content-block{max-width:70%}.main-detail-content.skelton-layout .theme-loading .ui-list-block .list-item-block{margin-right:0}}.main-detail-content .skelton-line-block{padding-right:40px}.main-detail-content .theme-loading{background-size:contain;background-position:bottom right;background-repeat:no-repeat;width:100%;min-height:100vh;padding-right:40px}.main-detail-content .theme-loading .profile-block .img-block{display:inline-block;max-width:100%;width:63px;height:63px;padding-right:0;margin-right:20px}.main-detail-content .theme-loading .profile-block .tag-block{max-width:15%}.main-detail-content .theme-loading .profile-block .name-block{max-width:30%;padding-bottom:0}.main-detail-content .theme-loading .profile-block .sm-text{max-width:55%}.main-detail-content .theme-loading .profile-block ::ng-deep ion-skeleton-text{margin-bottom:10px}.main-detail-content .theme-loading .ui-list-block{margin-bottom:20px}.main-detail-content .theme-loading .ui-list-block .list-item-block{margin-right:5%}.main-detail-content .theme-loading .ui-list-block .skelton-img-text .skelton-text{max-width:80%;margin:0 auto}.main-detail-content .theme-loading .skelton-square{width:3rem;height:3rem}.main-detail-content .theme-loading .card-text{display:flex}.main-detail-content .theme-loading .card-text .left-part{width:40%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .right-part{width:60%;box-sizing:border-box;padding:2rem}.main-detail-content .theme-loading .card-text .wd-short{max-width:5rem}.main-detail-content .theme-loading .card-text .wd-long{max-width:100%}@media (min-width:768px){.main-detail-content{padding-right:40px}.main-detail-content.skelton-layout{padding-right:0}}@media (min-width:769px){.main-detail-content{padding-top:40px}}.profile-block{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;position:relative}.profile-block .img-block{padding-right:15px}.profile-block .img-block img{border-radius:50%;display:inline-block;width:60px;height:60px}.profile-block .img-block .active-img,.profile-block .img-block.active .normal-img{display:none}.profile-block .img-block.active .active-img{display:block}.profile-block .content-block{max-width:calc(100% - 40px - 10px - 60px - 15px);width:100%}.profile-block .content-block ::ng-deep .tag-block{margin-bottom:5px}.profile-block .content-block .name-block{font-size:1.25rem;font-weight:700;padding-bottom:5px;line-height:28px;white-space:normal;word-wrap:break-word}.profile-block .sm-text{font-size:.875rem;line-height:28px;width:100%}.profile-block .sm-text .text-focus{color:#003781;font-weight:700;font-size:1.125rem;display:inline-block;padding:0 5px;vertical-align:middle}.profile-block .age{display:inline-block;line-height:28px;min-height:28px;margin-right:5px}.profile-block .like-block{position:absolute;top:0;right:0}.profile-block .like-block ::ng-deep img{max-width:40px;width:100%}@media (max-width:768px){.main-detail-content{padding-top:30px}.profile-block{padding-left:15px;padding-right:6px;position:static}.profile-block .like-block{right:10px;top:10px}.profile-block .img-block{padding-right:10px}.profile-block .img-block img{width:45px;height:45px}.profile-block .content-block{max-width:calc(100% - 45px - 10px)}.profile-block .content-block .name-block{padding-right:50px}}@media screen and (min-width:1025px){.profile-block .img-block{width:calc(caculate-vw($wd-profile-img) + 15px)}.profile-block .img-block img{width:6vw;height:6vw}.profile-block .content-block{max-width:calc(100% - 4vw - 10px - 6vw - 15px)}.profile-block .like-block ::ng-deep img{max-width:4vw}}.ui-list-block{display:flex;list-style-type:none;margin-right:-30px;justify-content:center;align-items:baseline}.ui-list-block button{border:none;background-color:transparent;padding:0}.ui-list-block .list-item-block{width:25%;max-width:5.625rem;text-align:center;margin-right:30px}.ui-list-block .list-item-block .img-block{max-width:40px;width:100%;margin:0 auto}.ui-list-block .list-item-block .img-block img{max-width:100%;width:100%}.ui-list-block .list-item-block.disable{pointer-events:none}.ui-list-block .list-item-block.disable .text-block{color:#414141}.ui-list-block .list-item-block .img-disable,.ui-list-block .list-item-block.disable .img-normal{display:none}.ui-list-block .list-item-block.disable .img-disable{display:inline-block;pointer-events:none}.ui-list-block .list-item-block .text-block p{color:#414141;line-height:normal;font-size:.875rem;margin:4px 0 0}@media (min-width:1023px){.ui-list-block .ui-list-block{padding-left:13%;padding-right:13%;box-sizing:border-box}}@media (max-width:767px){.ui-list-block{flex-wrap:wrap;margin-right:-10px}.ui-list-block .list-item-block{margin-right:0;max-width:100px}}@media (max-width:374px){.ui-list-block{flex-wrap:wrap;margin-right:0}.ui-list-block .list-item-block{margin-right:0}.ui-list-block .list-item-block .text-block p{font-size:.75rem}}@media screen and (min-width:1025px){.ui-list-block .list-item-block{max-width:9vw}.ui-list-block .list-item-block .img-block{max-width:4vw;width:4vw}}::ng-deep .card1-all-block .card-content-block{padding-top:20px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}::ng-deep .card1-all-block .gas-row-block+.gas-row-block{margin-top:4px}@media (min-width:769px){::ng-deep .card1-all-block .gas-layout-form{box-sizing:border-box;padding-left:51px;padding-right:64px}::ng-deep .card1-all-block .gas-row-block{margin-top:0}}@media (max-width:767px){::ng-deep .card1-all-block .gas-layout-form{padding-left:15px}}"]
            }] }
];
CustomerDetailComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ChangeDetectorRef }
];
CustomerDetailComponent.propDecorators = {
    onEditDetail: [{ type: Output }],
    onCallPhone: [{ type: Output }],
    onDeleteDetail: [{ type: Output }],
    onAddAppointment: [{ type: Output }],
    followChange: [{ type: Output }],
    detailPreTemplate: [{ type: Input }],
    detailPostTemplate: [{ type: Input }],
    customerDetail: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerContactListComponent {
    /**
     * @param {?} dateUtils
     * @param {?} elementRef
     */
    constructor(dateUtils, elementRef) {
        this.dateUtils = dateUtils;
        this.language = new Language();
        this.onAddNote = new EventEmitter();
        this.onDisplayNote = new EventEmitter();
        this.onEditNote = new EventEmitter();
        this.onDeleteNote = new EventEmitter();
        this.contactListRefresh = new EventEmitter();
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    get contactList() { return this._contactList; }
    /**
     * @param {?} contactList
     * @return {?}
     */
    set contactList(contactList) {
        this._contactList = contactList;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 200);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 200);
    }
    // ionic sliding need to call close event when every refresh
    /**
     * @return {?}
     */
    closeSlidingItems() {
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('closeSlidingItems');
            /** @type {?} */
            const item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
            if (item != null) {
                /// console.debug('item size',item.length);
                console.debug('item', item);
                yield item.close();
                yield item.closeOpened();
            }
        });
    }
    /**
     * @return {?}
     */
    refreshContactNote() {
        this.contactListRefresh.emit();
        // need to wait ion-item-sliding create at first from no data (when skelton interface)
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.closeSlidingItems();
        }), 200);
    }
    /**
     * @return {?}
     */
    addNote() {
        this.onAddNote.emit();
    }
    /**
     * @param {?} note
     * @return {?}
     */
    displayNote(note) {
        this.onDisplayNote.emit(note);
    }
    /**
     * @param {?} note
     * @return {?}
     */
    editNote(note) {
        this.onEditNote.emit(note);
    }
    /**
     * @param {?} note
     * @return {?}
     */
    deleteNote(note) {
        this.onDeleteNote.emit(note);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByClientID(index, item) {
        return item.getClientID();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    toNoteTime(time) {
        return this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
    }
}
CustomerContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-list',
                template: "<ng-container *ngIf=\"contactList\">\n    <div #slidingListBlock class=\" contact-list-block\">\n        <!-- Contact Note -->\n        <app-ui-title-style1 [isShowOther]=\"true\">\n            <ng-container textType=\"titleText\">\n                {{language.contactNote |translate }}\n            </ng-container>\n            <ng-container textType=\"otherEle\">\n                <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue-text.svg\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <ng-container textType=\"linktext\">{{language.add |translate }}</ng-container>\n                </app-ui-link>\n            </ng-container>\n        </app-ui-title-style1>\n        <!-- end of Contact Note  -->\n\n        <!--contact note empty -->\n        <ng-container *ngIf=\"contactList && contactList.length != 0 ; else noContactData\">\n                <!-- <app-ui-infinite-scroll (loadingCallback)=\"loadContactList($event)\"> -->\n\n                        <app-ui-item-sliding>\n                                <app-ui-item *ngFor=\"let customerContactNote of contactList;trackBy:trackByClientID;\" (onItemClick)=\"displayNote(customerContactNote)\">\n                                \n                                <div ui-item-content class=\"item\" >\n                                    <p class=\"title\">{{ toNoteTime(customerContactNote.date)}}</p>\n                                    <p class=\"desc\">{{ customerContactNote.noteMessage}}</p>\n                                </div>\n                            \n                                <!-- \u53F3\u6ED1\u5448\u73FE\u9078\u9805\uFF0C\u653E\u5728\u5C6C\u6027 side=\"end\" \u4E2D -->\n                                <app-ui-item-options side=\"end\" class=\"option-block-end\">\n                                    <app-ui-item-option class=\"btn-option option-color-normal\"  (onItemOptionClick)=\"editNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-list-pen-full.svg\" alt=\"edit\">\n                                    </app-ui-item-option>\n                                    <app-ui-item-option class=\"btn-option option-color-focus\"  (onItemOptionClick)=\"deleteNote(customerContactNote)\">\n                                        <img src=\"assets/img/icon-trash-full.svg\" alt=\"delete\">\n                                    </app-ui-item-option>\n                                </app-ui-item-options>\n                                </app-ui-item>\n                        </app-ui-item-sliding>\n                <!-- </app-ui-infinite-scroll> -->\n        </ng-container>\n\n        <ng-template #noContactData>\n            <div class=\"empty-whole-block\">\n                <div class=\"status-empty contact-note-empty empty-block\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <div class=\"empty-show-block\">\n                        <div class=\"empty-img\">\n                        <img src=\"assets/img/empty-img-customer-note.svg\">\n                        </div>\n                        <div class=\"text\">\n                                {{language.noRecord |translate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <!-- end of contact note empty -->\n    </div>\n\n</ng-container>\n\n\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.empty-whole-block{padding-left:2px}.contact-note-empty{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);overflow:visible}.contact-note-empty .empty-show-block{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px}.contact-note-empty .empty-show-block .empty-img{display:inline-block;max-width:75px}.contact-note-empty .empty-show-block .empty-img img{max-width:100%}.contact-note-empty .empty-show-block .text{margin-left:50px;max-width:196px;width:100%;color:#414141;font-size:1.125rem;line-height:28px;font-weight:300}@media (max-width:1023px){.contact-note-empty{padding:0}}@media (max-width:374px){.contact-note-empty .empty-show-block{padding:30px 10px}.contact-note-empty .empty-show-block .text{margin-left:22px}}@media (min-width:767px){.contact-list-block{padding-right:40px}}.contact-list-block{padding-bottom:100px}:host app-ui-item-sliding{background-color:#f5f5f5}:host app-ui-item-sliding .ui-item{padding:20px}:host app-ui-item-sliding .item .title{font-size:.875rem;font-weight:700;color:#414141;position:relative;line-height:28px;margin-bottom:1px}:host app-ui-item-sliding .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007ab3;position:absolute}:host app-ui-item-sliding .item .desc{/*! autoprefixer: off */-webkit-box-orient:vertical;font-size:1.125rem;color:#414141;font-weight:300;line-height:28px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2}:host app-ui-item-sliding .option-color-normal{background-color:#ececec}:host app-ui-item-sliding .option-color-normal ::ng-deep ion-item-option{background-color:#ececec}:host app-ui-item-sliding .option-color-focus{background-color:#dc3149}:host app-ui-item-sliding .option-color-focus ::ng-deep ion-item-option{background-color:#dc3149}:host app-ui-item-sliding .btn-option ::ng-deep ion-item-option{padding:0 27px}:host app-ui-item-sliding .option-block-end .btn-option{color:#fff;text-align:center}:host app-ui-item-sliding .option-block-end .btn-option img{margin:0 auto;max-width:24px;width:100%}:host app-ui-item-sliding ::ng-deep .list-block{background-color:#f5f5f5}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:first-of-type .item-native{border-radius:5px 5px 0 0}:host app-ui-item-sliding ::ng-deep .list-block app-ui-item:last-of-type .item-native{border-radius:0 0 5px 5px}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{margin:0;padding:21px 30px 21px 2px}:host app-ui-item-sliding ::ng-deep ion-list{margin:0;padding-left:1px}:host app-ui-item-sliding ::ng-deep .item-native{padding-left:0;border-radius:5px}:host app-ui-item-sliding ::ng-deep .item-inner{padding-right:0}@media (max-width:767px){:host app-ui-item-sliding ::ng-deep :host app-ui-item-sliding .desc{-webkit-line-clamp:3}:host app-ui-item-sliding ::ng-deep ion-item .ui-item{padding:21px 15px 21px 2px}:host app-ui-item-sliding .item .desc{-webkit-line-clamp:3}}@media screen and (min-width:1025px){:host app-ui-item-sliding .option-block-end .btn-option img{max-width:2.4vw}}"]
            }] }
];
CustomerContactListComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
CustomerContactListComponent.propDecorators = {
    onAddNote: [{ type: Output }],
    onDisplayNote: [{ type: Output }],
    onEditNote: [{ type: Output }],
    onDeleteNote: [{ type: Output }],
    contactListRefresh: [{ type: Output }],
    contactList: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerFilterComponent {
    /**
     * @param {?} customerService
     * @param {?} profileCodeService
     */
    constructor(customerService, profileCodeService) {
        this.customerService = customerService;
        this.profileCodeService = profileCodeService;
        this.isAsPresent = false; //選單是否將此次項目變成預設
        //control filter column mapping to profilecode array
        this.filterColumnMap = new Map();
        //Input criteria
        this._criteria = new CustomerFilterCriteria();
        this.doneCriteria = new EventEmitter();
        this.language = new Language();
    }
    /**
     * @return {?}
     */
    get criteria() {
        return this._criteria;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    set criteria(criteria) {
        console.log("set criteria:", criteria);
        this._criteria = criteria;
        this.isAsPresent = criteria.savePreset;
        this.refreshFilterMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.customerType = this.profileCodeService.getCodeArray('Customer_Type');
        this.customerDataSource = this.profileCodeService.getCodeArray('Customer_DataSource');
        this.possibility = this.profileCodeService.getCodeArray('Customer_Possibility');
        this.children = this.profileCodeService.getCodeArray('Customer_Children');
        this.source = this.profileCodeService.getCodeArray('Customer_Source');
        this.familiarity = this.profileCodeService.getCodeArray('Customer_Familiarity');
        this.recentStatus = this.profileCodeService.getCodeArray('Customer_RecentStatus');
        this.age = this.profileCodeService.getCodeArray('Customer_Age');
        this.gender = this.profileCodeService.getCodeArray('Customer_Gender');
        this.income = this.profileCodeService.getCodeArray('Customer_Income');
        this.marriage = this.profileCodeService.getCodeArray('Customer_Marriage');
        this.manpa = this.profileCodeService.getCodeArray('Customer_Status');
        this.contactFrequency = this.profileCodeService.getCodeArray('Customer_ContactFrequancy');
        this.birthday = this.profileCodeService.getCodeArray('Customer_Birthday');
        this.completeness = this.profileCodeService.getCodeArray('Customer_Completeness');
        this.filterColumnMap.set('IsFollow', this.customerType);
        this.filterColumnMap.set('DataSource', this.customerDataSource);
        this.filterColumnMap.set('Possibility', this.possibility);
        this.filterColumnMap.set('Source', this.source);
        this.filterColumnMap.set('Familiarity', this.familiarity);
        this.filterColumnMap.set('RecentStatus', this.recentStatus);
        this.filterColumnMap.set('MANPA', this.manpa);
        this.filterColumnMap.set('Gender', this.gender);
        this.filterColumnMap.set('Marriage', this.marriage);
        this.filterColumnMap.set('Children', this.children);
        this.filterColumnMap.set('Income', this.income);
        this.filterColumnMap.set('AgeRange', this.age);
        this.filterColumnMap.set('Birthday', this.birthday);
        this.filterColumnMap.set('ContactFrequancy', this.contactFrequency);
        this.filterColumnMap.set('Completeness', this.completeness);
        if (this.criteria.getFilterMap().size == 0)
            this.clearCriteria();
        if (this.clear) {
            this.clear.subscribe((/**
             * @return {?}
             */
            () => {
                this.clearCriteria();
            }));
        }
        if (this.save) {
            this.save.subscribe((/**
             * @return {?}
             */
            () => {
                this.saveCriteria();
            }));
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        // console.debug(this.isAsPresent);
        this.isAsPresent = false;
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    _resetFilter(array) {
        for (let profileCode of array) {
            profileCode.isCheck = false;
        }
    }
    /**
     * @private
     * @param {?} defaultArray
     * @param {?} array
     * @return {?}
     */
    _addDefaultChecked(defaultArray, array) {
        for (let profileCode of array) {
            if (defaultArray.includes(profileCode.getCode())) {
                profileCode.isCheck = true;
            }
        }
    }
    /**
     * @private
     * @param {?} criteriaColumn
     * @param {?} array
     * @param {?} criteria
     * @return {?}
     */
    _addCriteria(criteriaColumn, array, criteria) {
        for (let profileCode of array) {
            if (profileCode.isCheck) {
                criteria.addCriteria(criteriaColumn, profileCode.getCode());
            }
        }
    }
    /**
     * @private
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    _addFilterMap(column, value) {
        if (this.filterColumnMap.has(column)) {
            this.filterColumnMap.get(column).forEach((/**
             * @param {?} code
             * @return {?}
             */
            (code) => {
                if (value.includes(code.getCode())) {
                    code.isCheck = true;
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearCriteria() {
        this._resetFilter(this.customerType);
        this._resetFilter(this.customerDataSource);
        this._resetFilter(this.birthday);
        this._resetFilter(this.age);
        this._resetFilter(this.gender);
        this._resetFilter(this.income);
        this._resetFilter(this.source);
        this._resetFilter(this.marriage);
        this._resetFilter(this.children);
        this._resetFilter(this.familiarity);
        this._resetFilter(this.recentStatus);
        this._resetFilter(this.manpa);
        this._resetFilter(this.contactFrequency);
        this._resetFilter(this.possibility);
        this._resetFilter(this.completeness);
    }
    /**
     * @private
     * @return {?}
     */
    refreshFilterMap() {
        // this.clearCriteria();
        if (this.criteria.hasCriteria() && this.criteria.getFilterMap().size > 0) {
            this.criteria.getFilterMap().forEach((/**
             * @param {?} value
             * @param {?} column
             * @return {?}
             */
            (value, column) => {
                this._addFilterMap(column, value);
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveCriteria() {
        /** @type {?} */
        let criteria = new CustomerFilterCriteria();
        console.debug('filterColumnMap', this.filterColumnMap);
        this.filterColumnMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        (value, column) => {
            this._addCriteria(column, value, criteria);
        }));
        criteria.savePreset = this.isAsPresent;
        this.doneCriteria.emit(criteria);
    }
}
CustomerFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-filter',
                template: "\n\n    <!-- popu customer filter content -->\n    <div class=\"layout-cp-all ui-filter-block\">\n        <!-- chekboxes -->\n        <div class=\"data-filter-item\">\n                <!-- title -->\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerType |translate }}</h3>\n                </div>\n                <!-- end of title -->\n                <!-- checkbox -->\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of customerType; index as j\">\n                            <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>\n                    </ng-container>            \n                </app-ui-collapse-group>\n                <!-- end of checkbox -->\n            </div>\n\n            <div class=\"data-filter-item\">\n                    <!-- title -->\n                    <div class=\"filter-title-block\">\n                        <h3>{{language.customerSource |translate }}</h3>\n                    </div>\n                    <!-- end of title -->\n                    <!-- checkbox -->\n                    <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of customerDataSource; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>          \n                            </ng-container>\n                        </ng-container>            \n                    </app-ui-collapse-group> \n                    <!-- end of checkbox -->\n                </div>\n        \n        \n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.birthday |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    \n                    <!-- <ng-container *ngIf=\"birthday.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of birthday; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>            \n        </div>\n\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.ageRange |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"age.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of age; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n                 \n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.gender |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of gender; index as j\">\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>  \n                        </ng-container>\n                </app-ui-collapse-group>\n    \n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.annualIncomeYearNTD |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"income.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of income; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.source |translate }}</h3>\n                </div>\n                <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of source; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    \n                    <!-- <ng-container *ngIf=\"source.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of source; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n    \n                </app-ui-collapse-group>\n       \n            </div>\n\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.marriage |translate }}</h3>\n            </div>\n            <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            </ng-container>                \n                        <!-- </ng-container>  -->\n                    </ng-container>\n                  <!-- <ng-container *ngIf=\"marriage.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                             <ng-container *ngFor=\"let profileCode of marriage; index as j\">\n                               <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                            \n                                </ng-container> \n                            </ng-container>   \n                        </ng-container>\n             \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.children |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container> \n                        </ng-container>\n    \n                        <!-- <ng-container *ngIf=\"children.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of children; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.familiarity |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                            <!-- <ng-container *ngIf=\"familiarity.length < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container>\n                    </ng-container>\n                    <!-- <ng-container *ngIf=\"familiarity.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of familiarity; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                    </ng-container> -->\n                   \n                </app-ui-collapse-group>\n                \n                \n            </div>\n            \n            \n            \n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.recentStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container> -->\n                            </ng-container>\n                        </ng-container>\n                        \n                        <!-- <ng-container *ngIf=\"recentStatus.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of recentStatus; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.customerStatus |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                        <ng-container textType=\"originContent\">\n                            <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>\n                                <!-- </ng-container>                 -->\n                            </ng-container>\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"manpa.length > 6\">\n                            <ng-container textType=\"hideContnet\">\n                                <ng-container *ngFor=\"let profileCode of manpa; index as j\">\n                                    <ng-container *ngIf=\"j >= 6\">\n                                        <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                            <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                        </app-ui-form-checkbox2>      \n                                    </ng-container>                  \n                                </ng-container>                                        \n                            </ng-container>\n                            \n                        </ng-container> -->\n                        \n                </app-ui-collapse-group>\n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.contactFrequencyMonth |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"contactFrequency.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of contactFrequency; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2 (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n            \n            \n        </div>\n\n        <div class=\"data-filter-item\">\n                <div class=\"filter-title-block\">\n                    <h3>{{language.possibility |translate }}</h3>\n                </div>\n                <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of possibility; index as j\">\n                            <app-ui-form-checkbox2  (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                            </app-ui-form-checkbox2>          \n                        </ng-container>    \n                    </ng-container>    \n                </app-ui-collapse-group>\n      \n            </div>\n\n        <div class=\"data-filter-item\">\n            <div class=\"filter-title-block\">\n                <h3>{{language.completeness |translate }}</h3>\n            </div>\n            <app-ui-collapse-group  [translateMore]=\"language.moreOption | translate\">\n                    <ng-container textType=\"originContent\">\n                        <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                            <!-- <ng-container *ngIf=\"j < 6\"> -->\n                                <app-ui-form-checkbox2 (onClick)=\"onClick()\" [isDisable]=\"false\" [(nxValue)]=\"profileCode.isCheck\">\n                                    <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                </app-ui-form-checkbox2>\n                            <!-- </ng-container>                 -->\n                        </ng-container> \n                    </ng-container>\n\n                    <!-- <ng-container *ngIf=\"completeness.length > 6\">\n                        <ng-container textType=\"hideContnet\">\n                            <ng-container *ngFor=\"let profileCode of completeness; index as j\">\n                                <ng-container *ngIf=\"j >= 6\">\n                                    <app-ui-form-checkbox2  (onClick)=\"onClick()\" [(nxValue)]=\"profileCode.isCheck\">\n                                        <ng-container checkboxText=\"style1\">{{profileCode.displayText}}</ng-container>\n                                    </app-ui-form-checkbox2>      \n                                </ng-container>                  \n                            </ng-container>                                        \n                        </ng-container>\n                        \n                    </ng-container> -->\n                   \n            </app-ui-collapse-group>\n \n        </div>\n        <!-- end of chekboxes -->\n        <!-- settin block -->\n        <div class=\"setting-block\">\n            <app-ui-form-checkbox [(nxValue)]=\"isAsPresent\" [isDisable]=\"false\" >\n                <ng-container checkboxText=\"style2\">{{language.preset |translate }}</ng-container>\n            </app-ui-form-checkbox>\n        </div>\n        <!-- end of setting block -->\n    </div>\n    <!-- end of popup customer filter content -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%;height:100%}.ui-filter-block{display:inline-block;width:100%;height:100%}.ui-filter-block .filter-title-block h3{font-size:1rem;font-weight:700;line-height:28px;padding-bottom:5px}.ui-filter-block .data-filter-item{margin-bottom:30px}.setting-block{display:block;width:100%;padding-bottom:30px}"]
            }] }
];
CustomerFilterComponent.ctorParameters = () => [
    { type: CustomerService },
    { type: ProfileCodeService }
];
CustomerFilterComponent.propDecorators = {
    clear: [{ type: Input }],
    save: [{ type: Input }],
    open: [{ type: Input }],
    criteria: [{ type: Input }],
    doneCriteria: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerImportComponent {
    constructor() {
        this.importContractMap = new Map();
        this.importCustomer = new EventEmitter();
        this.language = new Language();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    doImport() {
        /** @type {?} */
        let importItems = new Array();
        this.importContractMap.forEach((/**
         * @param {?} group
         * @param {?} groupName
         * @return {?}
         */
        (group, groupName) => {
            group.getItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                console.debug(item);
                if (item.isCheck) {
                    importItems.push(item);
                }
            }));
        }));
        this.importCustomer.emit(importItems);
    }
}
CustomerImportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-import',
                template: " <!-- data -->\n<ng-container *ngIf=\"importContractMap\">\n    <ng-container *ngFor=\"let group of importContractMap | keyvalue\">\n        <ng-container *ngIf=\"group.value.isShow\">\n            <app-ui-list-data2>\n                <ng-container textType=\"title\">{{group.key}}</ng-container>\n                <!-- data -->\n                <ng-container textType=\"data\">\n                  <ng-container *ngFor=\"let item of group.value.getItems\">\n                    <ng-container *ngIf=\"item.isShow\">\n                            <app-ui-form-checkbox3 [isDisable]=\"false\" [(nxValue)]=\"item.isCheck\" (onClick)=\"doImport()\">\n                              <ng-container checkboxText=\"style3\">{{item.lastname + item.firstname}}</ng-container>\n                            </app-ui-form-checkbox3>\n                    </ng-container>                  \n                  </ng-container>          \n                </ng-container>\n                <!-- end of data -->\n              </app-ui-list-data2>          \n        </ng-container>\n    </ng-container>    \n</ng-container>\n<!-- end of data -->",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}"]
            }] }
];
CustomerImportComponent.ctorParameters = () => [];
CustomerImportComponent.propDecorators = {
    importContractMap: [{ type: Input }],
    importCustomer: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomersModule {
}
CustomersModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NxFormfieldModule,
                    NxDropdownModule,
                    NxRadioModule,
                    NxInputModule,
                    NxMessageModule,
                    NxDatefieldModule,
                    NxNativeDateModule,
                    NxProgressbarModule,
                    NxModalModule,
                    NxAccordionModule,
                    NxGridModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CoreModule,
                    CalendarModule,
                    UIModule,
                ],
                declarations: [CustomersComponent, CustomerEditComponent, CustomerListComponent,
                    CustomerDetailComponent, CustomerContactListComponent, CustomerFilterComponent, CustomerImportComponent
                ],
                providers: [DatePipe],
                exports: [CustomersComponent, CustomerEditComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerList {
    constructor() {
        this._customerList = [];
    }
    /**
     * @return {?}
     */
    get length() {
        return this._customerList.length;
    }
    /**
     * @return {?}
     */
    get customerList() {
        return this._customerList;
    }
    /**
     * @param {?} customerList
     * @return {?}
     */
    set customerList(customerList) {
        this._customerList = customerList;
    }
    /**
     * @param {?} customerEvent
     * @return {?}
     */
    addCustomerItem(customerEvent) {
        this._customerList.push(customerEvent);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MobileCustomerItem {
    /**
     * @param {?} lastName
     * @param {?} firstName
     * @param {?} phoneNumber
     * @param {?} email
     * @param {?} address
     * @param {?} birthday
     */
    constructor(lastName, firstName, phoneNumber, email, address, birthday) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.birthday = birthday;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MobileCustomerList {
    /**
     * @param {?} mobileCustomerList
     */
    constructor(mobileCustomerList) {
        this.mobileCustomerList = mobileCustomerList;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerAddContactNoteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    setClientID(clientID) {
        this.clientID = clientID;
    }
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    setCustomerClientID(customerClientID) {
        this.customerClientID = customerClientID;
    }
    /**
     * @param {?} note
     * @return {?}
     */
    setNote(note) {
        this.note = note;
    }
    /**
     * @param {?} noteTime
     * @return {?}
     */
    setNoteTime(noteTime) {
        this.noteTime = noteTime;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'addCustomerContactNote';
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
            let contactObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (contactObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                contactObj.setValue('CustomerClientID', this.customerClientID);
                contactObj.setValue('Note', this.note);
                contactObj.setValue('NoteTime', this.noteTime.getTime());
                if (this.clientID != undefined) {
                    contactObj.addRestriction(new EqualRestriction('ClientID', [this.clientID]));
                    dao.updateByTable(contactObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    dao.insertByTable(contactObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        observer.next(resp);
                        observer.complete();
                    }));
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerAutoDeleteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setClientID(id) {
        this._clientID = id;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerAutoDelete';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerAutoDelete.json';
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
            let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (messageObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (StringUtils.isNotEmpty(this._clientID)) {
                    messageObj.addRestriction(new EqualRestriction("ClientID", [this._clientID]));
                }
                else {
                    messageObj.addRestriction(new EqualRestriction("Status", ['UnRead']));
                }
                messageObj.addRestriction(new EqualRestriction("MessageCategory", ['Customer']));
                messageObj.addRestriction(new EqualRestriction("MessageType", ['AutoDelete']));
                dao.queryByTable(messageObj).subscribe((/**
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
        //   return from(dao.queryByTable(messageObj).toPromise().then( resp => {
        //     let messageArgument = JSON.parse(resp['Body'][0]['customers']);
        //     let customerIDList = messageArgument['ids'];
        //     let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
        //     console.log("customerIDListInAPI: ", customerIDList);
        //     customerObj.addRestriction(new InRestriction("ClientID", customerIDList));
        //     return dao.queryByTable(customerObj).toPromise().then(resp => {
        //       return resp;
        //     })
        // }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerContactNoteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setClientID(id) {
        this.customerClientID = id;
    }
    /**
     * @param {?} pageInfo
     * @return {?}
     */
    setPageInfo(pageInfo) {
        this.pageInfo = pageInfo;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerContactNote';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerContactNote.json';
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
            let contactObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (contactObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                contactObj.addRestriction(new EqualRestriction('CustomerClientID', [this.customerClientID]));
                contactObj.addRestriction(new OrderByRestriction([{ column: 'NoteTime', order: 'DESC' }]));
                //add page limit
                contactObj.addRestriction(new LimitRestriction([this.pageInfo.pageSize]));
                contactObj.addRestriction(new OffsetRestriction([(this.pageInfo.page - 1) * 5]));
                console.debug(contactObj);
                dao.queryByTable(contactObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.debug(resp);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerDeleteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'deleteCustomer';
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
            let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (customerObj != undefined) {
                dao = new ClientCustomDao(dao);
                customerObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                dao.deleteByTable(customerObj).subscribe((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerDeleteContactNoteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} contactClientID
     * @return {?}
     */
    setContactClientID(contactClientID) {
        this.contactClientID = contactClientID;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'deleteCustomerContactNote';
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
            let contactObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (contactObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                contactObj.addRestriction(new EqualRestriction('ClientID', [this.contactClientID]));
                dao.deleteByTable(contactObj).subscribe((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerDetailAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerDetail';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerDetail.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log('customer Detail:execute SQL');
        /** @type {?} */
        let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
        /** @type {?} */
        let defaultDao = this.daoFactory.getDefaultDao();
        if (customerObj != undefined && defaultDao != undefined) {
            /** @type {?} */
            let dao = new ClientCustomDao(defaultDao);
            customerObj.addRestriction(new EqualRestriction("ClientID", [this._id]));
            return from(dao.queryByTable(customerObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                /** @type {?} */
                let customer = resp;
                /** @type {?} */
                let clientID = customer['Body'][0].ClientID;
                /** @type {?} */
                let customerTelObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                if (customerTelObj) {
                    customerTelObj = ((/** @type {?} */ (customerTelObj)));
                    customerTelObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                    return dao.queryByTable(customerTelObj).toPromise().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        /** @type {?} */
                        let telList = resp['Body'];
                        customer['Body'][0]['tel'] = telList;
                        return { customer, clientID };
                    }));
                }
                else
                    return of({ customer, clientID }).toPromise();
            })).then((/**
             * @param {?} __0
             * @return {?}
             */
            ({ customer, clientID }) => {
                /** @type {?} */
                let customerEmailObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                if (customerEmailObj) {
                    customerEmailObj = ((/** @type {?} */ (customerEmailObj)));
                    customerEmailObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                    return dao.queryByTable(customerEmailObj).toPromise().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        /** @type {?} */
                        let telList = resp['Body'];
                        customer['Body'][0]['email'] = telList;
                        return { customer, clientID };
                    }));
                }
                else
                    return of({ customer, clientID }).toPromise();
            })).then((/**
             * @param {?} __0
             * @return {?}
             */
            ({ customer, clientID }) => {
                /** @type {?} */
                let customerAddrObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                if (customerAddrObj) {
                    customerAddrObj = ((/** @type {?} */ (customerAddrObj)));
                    customerAddrObj.addRestriction(new EqualRestriction('CustomerClientID', [clientID]));
                    return dao.queryByTable(customerAddrObj).toPromise().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        /** @type {?} */
                        let telList = resp['Body'];
                        customer['Body'][0]['address'] = telList;
                        return customer;
                    }));
                }
                else
                    return of(customer).toPromise();
            })));
        }
        else {
            return of(false);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerEditContactNoteAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} contactClientID
     * @return {?}
     */
    setContactClientID(contactClientID) {
        this.contactClientID = contactClientID;
    }
    /**
     * @param {?} note
     * @return {?}
     */
    setNote(note) {
        this.note = note;
    }
    /**
     * @param {?} noteTime
     * @return {?}
     */
    setNoteTime(noteTime) {
        this.noteTime = noteTime;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'editCustomerContactNote';
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
            let contactObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (contactObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                contactObj.addRestriction(new EqualRestriction('ClientID', [this.contactClientID]));
                contactObj.setValue('Note', this.note);
                contactObj.setValue('NoteTime', this.noteTime.getTime());
                dao.updateByTable(contactObj).subscribe((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerEditOvertimeAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setClientID(id) {
        this._clientID = id;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerOverTime';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerOverTime.json';
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
            let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (messageObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (StringUtils.isNotEmpty(this._clientID)) {
                    messageObj.addRestriction(new EqualRestriction("ClientID", [this._clientID]));
                }
                else {
                    messageObj.addRestriction(new EqualRestriction("Status", ['UnRead']));
                }
                messageObj.addRestriction(new EqualRestriction("MessageCategory", ['Customer']));
                messageObj.addRestriction(new EqualRestriction("MessageType", ['OverTime']));
                dao.queryByTable(messageObj).subscribe((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerGetPresetAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerFilterPreset';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerFilterPreset.json';
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
                //save customer data
                /** @type {?} */
                let setting = this.daoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
                if (setting) {
                    dao = new ClientCustomDao(dao);
                    setting = ((/** @type {?} */ (setting)));
                    setting.addRestriction(new EqualRestriction('SettingID', ['CustomerFilterSetting']));
                    dao.queryByTable(setting).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        console.debug(resp);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerListAPI {
    /**
     * @param {?} daoFactory
     * @param {?} profileCodeService
     */
    constructor(daoFactory, profileCodeService) {
        this.daoFactory = daoFactory;
        this.profileCodeService = profileCodeService;
        this._pageInfo = new PageInfo();
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._queryClientID = clientID;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    set filterCriteria(criteria) {
        this._filterCriteria = criteria;
    }
    /**
     * @param {?} pageInfo
     * @return {?}
     */
    set pageInfo(pageInfo) {
        this._pageInfo = pageInfo;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerList.json';
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
            let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (this._filterCriteria != undefined) {
                    console.debug('CustomerListAPI _filterCriteria', this._filterCriteria);
                    /** @type {?} */
                    let keyword = this._filterCriteria.keyword;
                    console.debug('customerListAPI keyword', keyword);
                    if (StringUtils.isNotEmpty(keyword)) {
                        /** @type {?} */
                        let compoundRestriction = new ORCompoundRestriction([new LikeRestriction('FirstName', [keyword]), new LikeRestriction('LastName', [keyword])]);
                        customerObj.addRestriction(compoundRestriction);
                    }
                    /** @type {?} */
                    let filterMap = this._filterCriteria.getFilterMap();
                    filterMap.forEach((/**
                     * @param {?} array
                     * @param {?} key
                     * @return {?}
                     */
                    (array, key) => {
                        console.log(key, array);
                        if (key == 'Birthday') {
                            /** @type {?} */
                            let birthdayRestriction = new Array();
                            /** @type {?} */
                            let monthArray = new Array();
                            for (let birthday of array) {
                                if (birthday == 'Today') {
                                    /** @type {?} */
                                    let today = new Date();
                                    /** @type {?} */
                                    let startNum = today.getMonth() + 1;
                                    /** @type {?} */
                                    let endNum = today.getDate();
                                    /** @type {?} */
                                    let start = String(startNum);
                                    /** @type {?} */
                                    let end = String(endNum);
                                    if (start.length == 1)
                                        start = '0' + start;
                                    if (end.length == 1)
                                        end = '0' + end;
                                    birthdayRestriction.push(new AndCompoundRestriction([new EqualRestriction('BirthdayMonth', [start]),
                                        new EqualRestriction('BirthdayDate', [end])]));
                                }
                                else {
                                    if (birthday.length == 1)
                                        birthday = '0' + birthday;
                                    monthArray.push(birthday);
                                }
                            }
                            if (monthArray.length != 0) {
                                birthdayRestriction.push(new InRestriction('BirthdayMonth', monthArray));
                            }
                            customerObj.addRestriction(new ORCompoundRestriction(birthdayRestriction));
                        }
                        else if (key == 'DataSource') {
                            if (array.length != 2) {
                                /** @type {?} */
                                let datasource = array[0];
                                if (datasource == 'E') {
                                    customerObj.addRestriction(new EqualRestriction('DataSource', ['OPUS']));
                                }
                                else {
                                    customerObj.addRestriction(new NotEqualRestriction('DataSource', ['OPUS']));
                                }
                            }
                        }
                        else if (key == 'Completeness') {
                            /** @type {?} */
                            let completenessOption = this.profileCodeService.getCodeArray('Customer_Completeness');
                            /** @type {?} */
                            let completenessRestriction = new Array();
                            completenessOption.forEach((/**
                             * @param {?} profileCode
                             * @return {?}
                             */
                            profileCode => {
                                /** @type {?} */
                                let code = profileCode.getCode();
                                if (array.includes(code)) {
                                    /** @type {?} */
                                    let obj = JSON.parse(profileCode.getArguments());
                                    /** @type {?} */
                                    let start = obj.start;
                                    /** @type {?} */
                                    let end = obj.end;
                                    start = start / 100;
                                    end = end / 100;
                                    completenessRestriction.push(new AndCompoundRestriction([new GreaterOrEqualRestriction('Completeness', [start]), new LessOrEqualRestriction('Completeness', [end])]));
                                }
                            }));
                            console.debug('completenessRestriction length', completenessRestriction.length);
                            console.log('completenessRestriction:', completenessRestriction);
                            if (completenessRestriction.length != 0) {
                                customerObj.addRestriction(new ORCompoundRestriction(completenessRestriction));
                                console.log('customerObj:', customerObj);
                            }
                        }
                        else {
                            customerObj.addRestriction(new InRestriction(key, array));
                        }
                    }));
                }
                //add order by
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //add page limit
                customerObj.addRestriction(new LimitRestriction([this._pageInfo.pageSize]));
                customerObj.addRestriction(new OffsetRestriction([(this._pageInfo.page - 1) * 10]));
                //if has edit profile will has clientID
                if (StringUtils.isNotEmpty(this._queryClientID)) {
                    customerObj.addRestriction(new EqualRestriction('ClientID', [this._queryClientID]));
                }
                dao.queryByTable(customerObj).subscribe((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerSaveDetailAPI {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerSavePresetAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    setFilterCriteria(criteria) {
        this._criteria = criteria;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveCustomerFilterPreset';
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
                //save customer data
                /** @type {?} */
                let setting = this.daoFactory.getDefaultTable("TW_LH_SD_Personal_Setting");
                if (setting) {
                    dao = new ClientCustomDao(dao);
                    setting = ((/** @type {?} */ (setting)));
                    setting.addRestriction(new EqualRestriction('SettingID', ['CustomerFilterSetting']));
                    setting.setValue("SettingVal", JSON.stringify(this._criteria.toPresetJSON()));
                    dao.updateByTable(setting).subscribe((/**
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
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerTelAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setClientID(id) {
        this.clientID = id;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerTel';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerTel.json';
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
            let telObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (telObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                telObj.addRestriction(new EqualRestriction('CustomerClientID', [this.clientID]));
                dao.queryByTable(telObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.debug(resp);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerUpdateFollowAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    setClient(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    setIsFollow(isFollow) {
        this._isFollow = isFollow;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateCustomerFollowStatus';
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
                //save customer data
                /** @type {?} */
                let customer = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                if (customer) {
                    dao = new ClientCustomDao(dao);
                    customer = ((/** @type {?} */ (customer)));
                    customer.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                    customer.setValue("IsFollow", this._isFollow ? 'Y' : 'N');
                    dao.updateByTable(customer).subscribe((/**
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
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImportContactAPI {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerBirthdayListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} targetDate
     * @return {?}
     */
    set targetDate(targetDate) {
        this._targetDate = setYear(targetDate, 2000);
        this._subNDayTimeStamp = subDays(this._targetDate, this._subN).getTime();
        this._addNDayTimeStamp = addDays(this._targetDate, this._addN).getTime();
        if ((getYear(this._targetDate) == getYear(this._subNDayTimeStamp)) && (getYear(this._targetDate) == getYear(this._addNDayTimeStamp))) {
            this.isRangeCrossYear = false;
        }
        else {
            this._subNDayTimeStamp = (setYear(this._subNDayTimeStamp, 2000)).getTime();
            this._addNDayTimeStamp = (setYear(this._addNDayTimeStamp, 2000)).getTime();
            this.isRangeCrossYear = true;
        }
        console.warn(this._subN, "  subDate:  ", this._subNDayTimeStamp);
        console.warn(this._addN, "  addDate:  ", this._addNDayTimeStamp);
    }
    /**
     * @param {?} subN
     * @return {?}
     */
    set subN(subN) {
        this._subN = subN;
    }
    /**
     * @param {?} addN
     * @return {?}
     */
    set addN(addN) {
        this._addN = addN;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerBirthdayList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerBirthday.json';
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
            let customerObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Customer");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (this.isRangeCrossYear) {
                    customerObj.addRestriction(new ORCompoundRestriction([new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]), new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp])]));
                }
                else {
                    customerObj.addRestriction(new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]));
                    customerObj.addRestriction(new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp]));
                }
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //customerObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(customerObj).subscribe((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DashboardUpdateToReadAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setMessageType(type) {
        this._messageType = type;
    }
    /**
     * @param {?} dataCategory
     * @return {?}
     */
    setMessageDataCategory(dataCategory) {
        this._messageDataCategory = dataCategory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateDashboardToRead';
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
                //save customer data
                /** @type {?} */
                let messageObj = this.daoFactory.getDefaultTable("TW_LH_SD_Message");
                if (messageObj) {
                    dao = new ClientCustomDao(dao);
                    messageObj = ((/** @type {?} */ (messageObj)));
                    messageObj.addRestriction(new EqualRestriction('MessageCategory', [this._messageDataCategory]));
                    messageObj.addRestriction(new EqualRestriction('MessageType', [this._messageType]));
                    messageObj.setValue("Status", 'Reading');
                    dao.updateByTable(messageObj).subscribe((/**
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
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CustomersModule, CustomersComponent, CustomerContactListComponent, CustomerDetailComponent, CustomerEditComponent, CustomerFilterComponent, CustomerImportComponent, CustomerListComponent, CustomerConfirmAction, CustomerDetailResult, CustomerFilterCriteria, CustomerFilterPreset, CustomerImportGroup, syncCustomerToken, storeCustomerToken, customerActionToken, showCustomerRuleToken, CUSTOMER_STATE, CustomerAddress, CustomerAlertItem, CustomerContactNote, CustomerDetail, CustomerEmail, CustomerItem, CustomerList, CustomerTel, MobileCustomerItem, MobileCustomerList, CustomerBirthday, CustomerService, CustomerUtils, CustomerAddContactNoteAPI, CustomerAutoDeleteAPI, CustomerContactNoteAPI, CustomerDeleteAPI, CustomerDeleteContactNoteAPI, CustomerDetailAPI, CustomerEditContactNoteAPI, CustomerEditOvertimeAPI, CustomerGetPresetAPI, CustomerListAPI, CustomerSaveDetailAPI, CustomerSavePresetAPI, CustomerTelAPI, CustomerUpdateFollowAPI, ImportContactAPI, CustomerBirthdayListAPI, DashboardUpdateToReadAPI, CustomerContactListComponent as ɵo, CustomerDetailComponent as ɵn, CustomerEditComponent as ɵk, CustomerFilterComponent as ɵp, CustomerImportComponent as ɵq, CustomerListComponent as ɵl, CustomersComponent as ɵa, customerActionToken as ɵd, showCustomerRuleToken as ɵe, storeCustomerToken as ɵc, syncCustomerToken as ɵb, CustomerService as ɵf, CustomerUtils as ɵg };

//# sourceMappingURL=allianzSND-customer.js.map