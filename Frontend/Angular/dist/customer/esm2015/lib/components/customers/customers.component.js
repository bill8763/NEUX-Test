/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ChangeDetectorRef, Input, TemplateRef, EventEmitter, Output, Optional, Inject } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ExtensionService, Language, StringUtils, DateUtils, PageInfo, DeviceService, ProfileCodeService, TranslateService } from '@allianzSND/core';
import { CalendarService, CalendarEventDetail, CalendarEditComponent } from '@allianzSND/calendar';
import { CustomerService } from '../../service/customer-service.service';
import { CustomerFilterCriteria } from '../bean/customer-filter-criteria';
import { CustomerConfirmAction } from '../bean/customer-confirm-action';
import { CustomerDetail } from '../../service/model/CustomerDetail';
import { CustomerImportGroup } from '../bean/customer-import-group';
import { addDays, addHours, addMinutes, getDate, getHours, getMinutes, getMonth, getYear, subMinutes } from 'date-fns';
import { syncCustomerToken, storeCustomerToken, customerActionToken } from '../../injectionToken/injection-token';
import { CUSTOMER_STATE } from '../../interface/storeCustomer.interface';
import { CustomerUtils } from '../../utils/customer-utils';
import { Subject } from 'rxjs';
export class CustomersComponent {
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
            (state) => {
                console.log("main state: ", state);
                //console.log("curreontCustomer: ", this.currentCustomer);
                if (state == CUSTOMER_STATE.EDIT_SAVED && this.customerState != CUSTOMER_STATE.EDIT_SAVED) {
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
                else if (state == CUSTOMER_STATE.EDIT && this.customerState != CUSTOMER_STATE.EDIT && this.customerState == CUSTOMER_STATE.FIRST) {
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
                else if (this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY) {
                    //firt in, fetch preset filter
                    console.log("this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY");
                    this.loadPresetCriteria().then((/**
                     * @return {?}
                     */
                    () => {
                        this.refreshCustomerList(false);
                    }));
                }
                else if (state == CUSTOMER_STATE.ADD_SAVED) {
                    //after add , get pre_criteria && refresh customerlist
                    console.log("state == CUSTOMER_STATE.ADD_SAVED");
                    this.isDisplaySavePopup = true;
                    this.filterCriteria = this.pre_criteria;
                    this.refreshCustomerList(false);
                }
                this.customerState = state;
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
        /** @type {?} */
        let _this = this;
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
if (false) {
    /** @type {?} */
    CustomersComponent.prototype.calendarEditComponent;
    /** @type {?} */
    CustomersComponent.prototype.viewTypeIndex;
    /** @type {?} */
    CustomersComponent.prototype.viewType;
    /** @type {?} */
    CustomersComponent.prototype.viewDate;
    /** @type {?} */
    CustomersComponent.prototype.weekStartsOn;
    /** @type {?} */
    CustomersComponent.prototype.isShow;
    /** @type {?} */
    CustomersComponent.prototype.isExpandDetail;
    /** @type {?} */
    CustomersComponent.prototype.isRefreshDetail;
    /** @type {?} */
    CustomersComponent.prototype.isSaveClick;
    /** @type {?} */
    CustomersComponent.prototype.language;
    /** @type {?} */
    CustomersComponent.prototype.isOpen;
    /** @type {?} */
    CustomersComponent.prototype.classSearch;
    /** @type {?} */
    CustomersComponent.prototype.isDisplayImportSavePopup;
    /** @type {?} */
    CustomersComponent.prototype.isDisplaySavePopup;
    /** @type {?} */
    CustomersComponent.prototype.isDisplayDelCustomerPopup;
    /** @type {?} */
    CustomersComponent.prototype.isDisplayConfirmAlertPopup;
    /** @type {?} */
    CustomersComponent.prototype.isDisplayInfoAlertPopup;
    /** @type {?} */
    CustomersComponent.prototype.isDisplayUpdateRemind;
    /** @type {?} */
    CustomersComponent.prototype.isDisplayDeleteRemind;
    /** @type {?} */
    CustomersComponent.prototype.isPopupImport;
    /** @type {?} */
    CustomersComponent.prototype.isPopupFilter;
    /** @type {?} */
    CustomersComponent.prototype.isExpandEdit;
    /** @type {?} */
    CustomersComponent.prototype.isPopupCallPhone;
    /** @type {?} */
    CustomersComponent.prototype.isPopupNoteDetail;
    /** @type {?} */
    CustomersComponent.prototype.isPopupEditNote;
    /** @type {?} */
    CustomersComponent.prototype.isPopupDeleteNote;
    /** @type {?} */
    CustomersComponent.prototype.isPopupConfirmDisable;
    /** @type {?} */
    CustomersComponent.prototype.isDisplayDeletePopup;
    /** @type {?} */
    CustomersComponent.prototype.alertOverTimeList;
    /** @type {?} */
    CustomersComponent.prototype.alertAutoDeleteCustomer;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype._confirmAction;
    /** @type {?} */
    CustomersComponent.prototype.isLoadingFinishContent;
    /** @type {?} */
    CustomersComponent.prototype.isLazyLoading;
    /** @type {?} */
    CustomersComponent.prototype.callPhoneTelArray;
    /** @type {?} */
    CustomersComponent.prototype.customerContactDetail;
    /** @type {?} */
    CustomersComponent.prototype.customerContactList;
    /** @type {?} */
    CustomersComponent.prototype.contactListPageInfo;
    /** @type {?} */
    CustomersComponent.prototype.calendarEventDetail;
    /** @type {?} */
    CustomersComponent.prototype.viewDateCalendarEventList;
    /** @type {?} */
    CustomersComponent.prototype.customerList;
    /** @type {?} */
    CustomersComponent.prototype.clickItem;
    /** @type {?} */
    CustomersComponent.prototype.customerListPageInfo;
    /** @type {?} */
    CustomersComponent.prototype.filterCriteria;
    /** @type {?} */
    CustomersComponent.prototype.filterType;
    /** @type {?} */
    CustomersComponent.prototype.optionMap;
    /** @type {?} */
    CustomersComponent.prototype.translateMap;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.dayTypesList;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.noSchedule;
    /** @type {?} */
    CustomersComponent.prototype.activityTypeList;
    /** @type {?} */
    CustomersComponent.prototype.alertTypeList;
    /** @type {?} */
    CustomersComponent.prototype.importContractMap;
    /** @type {?} */
    CustomersComponent.prototype.mobileResultSize;
    /** @type {?} */
    CustomersComponent.prototype.importData;
    /** @type {?} */
    CustomersComponent.prototype.importContactList;
    /** @type {?} */
    CustomersComponent.prototype.isLoadCriteria;
    /** @type {?} */
    CustomersComponent.prototype.isClearCriteria;
    /** @type {?} */
    CustomersComponent.prototype._onImportResult;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.noteEditClientID;
    /** @type {?} */
    CustomersComponent.prototype.noteCurrentTime;
    /** @type {?} */
    CustomersComponent.prototype.noteMessage;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.noteClientID;
    /** @type {?} */
    CustomersComponent.prototype.isRefreshContactList;
    /** @type {?} */
    CustomersComponent.prototype.loadContactList;
    /** @type {?} */
    CustomersComponent.prototype.classBarMove;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype._reloadData;
    /** @type {?} */
    CustomersComponent.prototype.customerDetail;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.currentCustomer;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerState;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.pre_criteria;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.pre_customerList;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.criteriaChanges;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerDetailChanges;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.stateChanges;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerListChanges;
    /** @type {?} */
    CustomersComponent.prototype.clearSubject;
    /** @type {?} */
    CustomersComponent.prototype.saveFilterSubject;
    /** @type {?} */
    CustomersComponent.prototype.detailPreTemplate;
    /** @type {?} */
    CustomersComponent.prototype.detailPostTemplate;
    /** @type {?} */
    CustomersComponent.prototype.detailModel;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerService;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.dateUtils;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.extensionService;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerUtils;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerStore;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerSync;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxHQUFHLE1BQU0scUJBQXFCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQWUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvSyxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxV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SUFDdkMsNkNBQXdDOztJQUd4Qyw2Q0FBd0M7Ozs7O0lBS3hDLDhDQUFpQzs7SUFDakMsNkNBQTBDOztJQUMxQyx5Q0FBZ0M7Ozs7O0lBQ2hDLDBDQUFrQzs7SUFDbEMsa0RBQTZDOztJQUM3Qyw2Q0FBd0M7O0lBS3hDLDBDQUFpQzs7Ozs7SUFHakMseUNBQTRCOztJQUc1Qiw0Q0FBNkQ7Ozs7O0lBRzdELDZDQUErQzs7Ozs7SUFHL0MsMkNBQTZEOzs7OztJQUc3RCwwQ0FBNEU7Ozs7O0lBRzVFLDhDQUE4Qzs7Ozs7SUFHOUMsNkNBQXdCOzs7OztJQUN4QixtREFBOEI7Ozs7O0lBQzlCLDBDQUFxQjs7Ozs7SUFDckIsaURBQTRCOztJQUc1QiwwQ0FBb0M7O0lBQ3BDLCtDQUF5Qzs7SUFJekMsK0NBQTZDOztJQUM3QyxnREFBOEM7O0lBQzlDLHlDQUF5RTs7Ozs7SUFFN0QsNkNBQXdDOzs7OztJQUNsRCw2Q0FBd0M7Ozs7O0lBQ3hDLDhDQUEwQzs7Ozs7SUFDMUMsNENBQXlDOzs7OztJQUN6QywyQ0FBb0M7Ozs7O0lBQ3BDLHVDQUE0Qjs7Ozs7SUFDNUIsZ0RBQThDOzs7OztJQUM5Qyw4Q0FBMEM7Ozs7O0lBQzFDLDJDQUFvQzs7Ozs7SUFDcEMsMkNBQTRFOzs7OztJQUM1RSwwQ0FBeUU7Ozs7O0lBQ3pFLDRDQUErRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPcHRpb25hbCwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEV4dGVuc2lvblNlcnZpY2UsIExhbmd1YWdlLCBTdHJpbmdVdGlscywgRGF0ZVV0aWxzLCBQYWdlSW5mbywgRGV2aWNlU2VydmljZSwgUHJvZmlsZUNvZGUsIFByb2ZpbGVDb2RlU2VydmljZSwgVHJhbnNsYXRlU2VydmljZSwgQ29udGFjdEl0ZW0gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSwgQ2FsZW5kYXJFdmVudERldGFpbCwgQ2FsZW5kYXJFZGl0Q29tcG9uZW50IH0gZnJvbSAnQGFsbGlhbnpTTkQvY2FsZW5kYXInO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJUZWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyVGVsJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYSc7XG5pbXBvcnQgeyBDdXN0b21lckFsZXJ0SXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJBbGVydEl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb25maXJtQWN0aW9uIH0gZnJvbSAnLi4vYmVhbi9jdXN0b21lci1jb25maXJtLWFjdGlvbic7XG5pbXBvcnQgeyBDdXN0b21lckRldGFpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb250YWN0Tm90ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJDb250YWN0Tm90ZSc7XG5pbXBvcnQgeyBDdXN0b21lckltcG9ydEdyb3VwIH0gZnJvbSAnLi4vYmVhbi9jdXN0b21lci1pbXBvcnQtZ3JvdXAnO1xuaW1wb3J0IHsgYWRkRGF5cywgYWRkSG91cnMsIGFkZE1pbnV0ZXMsIGdldERhdGUsIGdldEhvdXJzLCBnZXRNaW51dGVzLCBnZXRNb250aCwgZ2V0WWVhciwgc3ViTWludXRlcyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHN5bmNDdXN0b21lclRva2VuLCBzdG9yZUN1c3RvbWVyVG9rZW4sIGN1c3RvbWVyQWN0aW9uVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgc3luY0N1c3RvbWVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHN0b3JlQ3VzdG9tZXIsIENVU1RPTUVSX1NUQVRFIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3N0b3JlQ3VzdG9tZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IGN1c3RvbWVyQWN0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL2N1c3RvbWVyQWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDdXN0b21lclV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY3VzdG9tZXItdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVycy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoQmxvY2tBbmknLCBbXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMCcsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicpKVxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvL2ludGVyZ3JhdGlvbiBDYWxlbmRhciBNb2R1bGVcbiAgQFZpZXdDaGlsZChDYWxlbmRhckVkaXRDb21wb25lbnQpIGNhbGVuZGFyRWRpdENvbXBvbmVudDtcbiAgcHVibGljIHZpZXdUeXBlSW5kZXggPSAyOyAvLyAnbW9udGgnXG4gIHB1YmxpYyB2aWV3VHlwZTogc3RyaW5nO1xuICBwdWJsaWMgdmlld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICBwdWJsaWMgd2Vla1N0YXJ0c09uID0gMTsgLy8gTW9uZGF5IFxuXG5cblxuICAvLyBjb250cm9sIG1vYmlsZSBzaG93XG4gIHB1YmxpYyBpc1Nob3cgPSBmYWxzZTtcblxuICAvLyBwb3B1cFxuICBwdWJsaWMgaXNFeHBhbmREZXRhaWwgPSBmYWxzZTtcbiAgcHVibGljIGlzUmVmcmVzaERldGFpbCA9IGZhbHNlO1xuICBwdWJsaWMgaXNTYXZlQ2xpY2sgPSBmYWxzZTtcblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG5cbiAgLy/lrqLmiLbmuIXllq7nmoRzZWFyY2ggYmxvY2sgYW5pbWF0ZVxuICBwdWJsaWMgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjbGFzc1NlYXJjaDogc3RyaW5nID0gJyc7XG5cbiAgLy9wb3B1cCBjb250cm9sXG4gIHB1YmxpYyBpc0Rpc3BsYXlJbXBvcnRTYXZlUG9wdXAgPSBmYWxzZTsgLy9pbXBvcnQgcG9wdXBcbiAgcHVibGljIGlzRGlzcGxheVNhdmVQb3B1cCA9IGZhbHNlOyAvL3NhdmUgcG9wdXBcbiAgcHVibGljIGlzRGlzcGxheURlbEN1c3RvbWVyUG9wdXAgPSBmYWxzZTsgLy9kZWxldGUgY3VzdG9tZXIgcG9wdXBcbiAgcHVibGljIGlzRGlzcGxheUNvbmZpcm1BbGVydFBvcHVwID0gZmFsc2U7IC8vY29uZmlybSBhbGVydCBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5SW5mb0FsZXJ0UG9wdXAgPSBmYWxzZTsgLy9pbmZvIGFsZXJ0IHBvcHVwXG4gIHB1YmxpYyBpc0Rpc3BsYXlVcGRhdGVSZW1pbmQgPSBmYWxzZTsgLy9hbGVydCBjdXN0b21lciBvdmVyIDYgbW9udGggcG9wdXBcbiAgcHVibGljIGlzRGlzcGxheURlbGV0ZVJlbWluZCA9IGZhbHNlOyAvL2FsZXJ0IGN1c3RvbWVyIG92ZXIgNiBtb250aCAmIDdkYXkgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBJbXBvcnQgPSBmYWxzZTsgLy9pbXBvcnQgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBGaWx0ZXIgPSBmYWxzZTsgLy9maWx0ZXIgcG9wdXBcbiAgcHVibGljIGlzRXhwYW5kRWRpdCA9IGZhbHNlOyAvLyBhcHBvaW50bWVudCBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cENhbGxQaG9uZSA9IGZhbHNlOyAvL2NhbGwgY3VzdG9tZXIgcGhvbmUgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBOb3RlRGV0YWlsID0gZmFsc2U7IC8vY29udGFjdCBkZXRhaWwgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBFZGl0Tm90ZSA9IGZhbHNlOyAvL2FkZC9lZGl0IGNvbnRhY3Qgbm90ZSBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cERlbGV0ZU5vdGUgPSBmYWxzZTsgLy9kZWxldGUgY29udGFjdCBub3RlIHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwQ29uZmlybURpc2FibGUgPSB0cnVlOyAvLyBjb25maXJtUG9wdXAgYnRuIGlzIGRpc2FibGUgZGVmYXVsdFxuICBwdWJsaWMgaXNEaXNwbGF5RGVsZXRlUG9wdXAgPSBmYWxzZTsgLy9kZWxldGUgc3VjY2VzcyBwb3B1cFxuXG4gIC8vY29udHJvbCBvdmVydGltZSBjdXN0b21lciBsaXN0XG4gIHB1YmxpYyBhbGVydE92ZXJUaW1lTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4oKTtcblxuICAvL2NvbnRyb2wgYXV0byBkZWxldGUgY3VzdG9tZXIgbGlzdFxuICBwdWJsaWMgYWxlcnRBdXRvRGVsZXRlQ3VzdG9tZXIgPSBuZXcgQXJyYXk8Q3VzdG9tZXJBbGVydEl0ZW0+KCk7XG5cbiAgLy9jYWNoZSBjb25maXJtIGFjdGlvblxuICBwcml2YXRlIF9jb25maXJtQWN0aW9uOiBDdXN0b21lckNvbmZpcm1BY3Rpb24gPSBuZXcgQ3VzdG9tZXJDb25maXJtQWN0aW9uKCk7XG5cbiAgLy9jb250cm9sIHJlZnJlc2ggIGNvbnRlbnRcbiAgcHVibGljIGlzTG9hZGluZ0ZpbmlzaENvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvL2NvbnRyb2xcbiAgcHVibGljIGlzTGF6eUxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vaW50ZXJncmF0aW9uIGN1c3RvbWVyLWRldGFpbCB1c2VkXG4gIC8vY2FsbCBwaG9uZSBvYmpcbiAgcHVibGljIGNhbGxQaG9uZVRlbEFycmF5OiBBcnJheTxDdXN0b21lclRlbD47XG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItY29udGFjdC1saXN0IHVzZWRcbiAgLy9jdXN0b21lciBjb250YWN0IGRldGFpbCBvYmpcbiAgcHVibGljIGN1c3RvbWVyQ29udGFjdERldGFpbDogQ3VzdG9tZXJDb250YWN0Tm90ZTtcbiAgcHVibGljIGN1c3RvbWVyQ29udGFjdExpc3Q6IEFycmF5PEN1c3RvbWVyQ29udGFjdE5vdGU+ID0gW107XG4gIHB1YmxpYyBjb250YWN0TGlzdFBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG5cbiAgcHVibGljIGNhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWw7XG4gIHB1YmxpYyB2aWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuXG4gIC8vaW50ZXJncmF0aW9uIGN1c3RvbWVyLWxpc3RcbiAgcHVibGljIGN1c3RvbWVyTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckl0ZW0+KCk7XG4gIHB1YmxpYyBjbGlja0l0ZW06IEN1c3RvbWVySXRlbTtcbiAgcHVibGljIGN1c3RvbWVyTGlzdFBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG4gIHB1YmxpYyBmaWx0ZXJDcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG4gIHB1YmxpYyBmaWx0ZXJUeXBlID0gJyc7XG5cbiAgcHVibGljIG9wdGlvbk1hcDogTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+KCk7XG4gIHB1YmxpYyB0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIHByaXZhdGUgZGF5VHlwZXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydDcm9zc19EYXknLCAnQWxsX0RheSddO1xuICBwcml2YXRlIG5vU2NoZWR1bGU6IHN0cmluZyA9ICdOb19TY2hlZHVsZSc7XG5cbiAgcHVibGljIGFjdGl2aXR5VHlwZUxpc3Q6IEFycmF5PFByb2ZpbGVDb2RlPiA9IFtdOyAvLyBEQuS4reaJgOaciWFjdGl2aXR5VHlwZVxuICBwdWJsaWMgYWxlcnRUeXBlTGlzdDogQXJyYXk8UHJvZmlsZUNvZGU+ID0gW107XG5cblxuICAvL2ludGVyZ3JhdGlvbiBjdXN0b21lci1pbXBvcnRcbiAgcHVibGljIGltcG9ydENvbnRyYWN0TWFwID0gbmV3IE1hcDxzdHJpbmcsIEN1c3RvbWVySW1wb3J0R3JvdXA+KCk7XG4gIHB1YmxpYyBtb2JpbGVSZXN1bHRTaXplOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgaW1wb3J0RGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW1wb3J0Q29udGFjdExpc3Q6IEFycmF5PENvbnRhY3RJdGVtPiA9IFtdO1xuXG4gIC8vZmlsdGVyIGN1c3RvbWVyIGF0dHJpYnV0ZVxuICBwdWJsaWMgaXNMb2FkQ3JpdGVyaWE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ2xlYXJDcml0ZXJpYTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vaW1wb3J0IHJlc3VsdChzdWNjZXNzIHwgZmFpbCk7XG4gIHB1YmxpYyBfb25JbXBvcnRSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIC8vaW50ZXJncmF0aW9uIGN1c3RvbWVyLWVkaXQgdXNlZFxuICAvL2FkZC9lZGl0IGNvbnRhY3Qgbm90ZSBhdHRyaWJ1dGVcbiAgcHJpdmF0ZSBub3RlRWRpdENsaWVudElEOiBzdHJpbmc7XG4gIHB1YmxpYyBub3RlQ3VycmVudFRpbWU6IERhdGUgPSBuZXcgRGF0ZSgpOy8vYWRkL2VkaXQgTm90ZSBjdXJyZW50IHRpbWVcbiAgcHVibGljIG5vdGVNZXNzYWdlOiBzdHJpbmcgPSAnJzsvL2FkZC9lZGl0IE5vdGUgTWVzc2FnZVxuICBwcml2YXRlIG5vdGVDbGllbnRJRDogc3RyaW5nID0gJyc7Ly9lZGl0L2RlbGV0ZSBub3RlQ2xpZW50SURcbiAgcHVibGljIGlzUmVmcmVzaENvbnRhY3RMaXN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkQ29udGFjdExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgLy8gc2VhcmNoIGFuaW1hdGUgaW4gZmlsdGVyXG4gIHB1YmxpYyBjbGFzc0Jhck1vdmU6IHN0cmluZyA9ICcnO1xuXG4gIC8vbGlzdGVuZXIgcm91dGUgYmFjayBldmVudFxuICBwcml2YXRlIF9yZWxvYWREYXRhID0gZmFsc2U7XG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItZGV0YWlsIHVzZWRcbiAgcHVibGljIGN1c3RvbWVyRGV0YWlsOiBDdXN0b21lckRldGFpbCA9IG5ldyBDdXN0b21lckRldGFpbCgpO1xuXG4gIC8vY3VycmVudCBlZGl0IGN1c3RvbWVyIElkXG4gIHByaXZhdGUgY3VycmVudEN1c3RvbWVyOiBDdXN0b21lckRldGFpbCA9IG51bGw7XG5cbiAgLy8gY3VycmVudCBjdXN0b21lciBzdGF0ZVxuICBwcml2YXRlIGN1c3RvbWVyU3RhdGU6IENVU1RPTUVSX1NUQVRFID0gQ1VTVE9NRVJfU1RBVEUuRklSU1Q7XG5cbiAgLy9wcmUgc2F2ZWQgY3JpdGVyaWFcbiAgcHJpdmF0ZSBwcmVfY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuXG4gIC8vcHJlIHNhdmVkIGN1c3RvbWVybGlzdFxuICBwcml2YXRlIHByZV9jdXN0b21lckxpc3Q6IEFycmF5PEN1c3RvbWVySXRlbT47XG5cbiAgLy9zdWJzY3JpYmUgb2Ygc3RvcmVcbiAgcHJpdmF0ZSBjcml0ZXJpYUNoYW5nZXM7XG4gIHByaXZhdGUgY3VzdG9tZXJEZXRhaWxDaGFuZ2VzO1xuICBwcml2YXRlIHN0YXRlQ2hhbmdlcztcbiAgcHJpdmF0ZSBjdXN0b21lckxpc3RDaGFuZ2VzO1xuXG4gIC8vc3ViamVjdCBvZiBjbGVhciAmIHNhdmUgZmlsdGVyXG4gIHB1YmxpYyBjbGVhclN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc2F2ZUZpbHRlclN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuXG5cbiAgLy9mb3IgZXh0ZW5zaW9uIHVzZWRcbiAgQElucHV0KCkgZGV0YWlsUHJlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGRldGFpbFBvc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQE91dHB1dCgpIGRldGFpbE1vZGVsOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJEZXRhaWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0ZVV0aWxzOiBEYXRlVXRpbHMsXG4gICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGV4dGVuc2lvblNlcnZpY2U6IEV4dGVuc2lvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXN0b21lclV0aWxzOiBDdXN0b21lclV0aWxzLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc3RvcmVDdXN0b21lclRva2VuKSBwcml2YXRlIGN1c3RvbWVyU3RvcmU6IHN0b3JlQ3VzdG9tZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzeW5jQ3VzdG9tZXJUb2tlbikgcHJpdmF0ZSBjdXN0b21lclN5bmM6IHN5bmNDdXN0b21lcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGN1c3RvbWVyQWN0aW9uVG9rZW4pIHByaXZhdGUgY3VzdG9tZXJBY3Rpb246IGN1c3RvbWVyQWN0aW9uLFxuXG5cbiAgKSB7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgIHRoaXMuY3JpdGVyaWFDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJMaXN0Q2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDYWxlbmRhcl9UeXBlJyk7XG4gICAgdGhpcy5hbGVydFR5cGVMaXN0ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDYWxlbmRhcl9SZW1pbmRUaW1lJyk7XG4gICAgdGhpcy5vcHRpb25NYXAuc2V0KCdDYWxlbmRhcl9UeXBlJywgdGhpcy5hY3Rpdml0eVR5cGVMaXN0KTtcbiAgICB0aGlzLm9wdGlvbk1hcC5zZXQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLCB0aGlzLmFsZXJ0VHlwZUxpc3QpO1xuXG4gICAgdGhpcy5kYXlUeXBlc0xpc3QuZm9yRWFjaCgoZGF5VHlwZSkgPT4ge1xuICAgICAgdGhpcy50cmFuc2xhdGVNYXAuc2V0KGRheVR5cGUsIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoZGF5VHlwZSkpXG4gICAgfSk7XG4gICAgdGhpcy50cmFuc2xhdGVNYXAuc2V0KHRoaXMubm9TY2hlZHVsZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh0aGlzLm5vU2NoZWR1bGUpKTtcblxuXG5cbiAgICBpZiAodGhpcy5jdXN0b21lclN0b3JlKSB7XG4gICAgICB0aGlzLmNyaXRlcmlhQ2hhbmdlcyA9IHRoaXMuY3VzdG9tZXJTdG9yZS5nZXRDcml0ZXJpYSgpLnN1YnNjcmliZSgoY3JpdGVyaWEpID0+IHtcbiAgICAgICAgdGhpcy5wcmVfY3JpdGVyaWEgPSBjcml0ZXJpYTtcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWxDaGFuZ2VzID0gdGhpcy5jdXN0b21lclN0b3JlLmdldEN1cnJlbnRDdXN0b21lckRldGFpbCgpLnN1YnNjcmliZShkZXRhaWwgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRDdXN0b21lciA9IGRldGFpbDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmN1c3RvbWVyTGlzdENoYW5nZXMgPSB0aGlzLmN1c3RvbWVyU3RvcmUuZ2V0Q3VzdG9tZXJMaXN0KCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgICB0aGlzLnByZV9jdXN0b21lckxpc3QgPSBsaXN0O1xuICAgICAgfSlcblxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMgPSB0aGlzLmN1c3RvbWVyU3RvcmUuZ2V0U3RhdGUoKS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJtYWluIHN0YXRlOiBcIiwgc3RhdGUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVvbnRDdXN0b21lcjogXCIsIHRoaXMuY3VycmVudEN1c3RvbWVyKTtcbiAgICAgICAgaWYgKHN0YXRlID09IENVU1RPTUVSX1NUQVRFLkVESVRfU0FWRUQgJiYgdGhpcy5jdXN0b21lclN0YXRlICE9IENVU1RPTUVSX1NUQVRFLkVESVRfU0FWRUQpIHtcblxuICAgICAgICAgIC8vYWZ0ZXIgc2F2ZWQsIGNoZWNrIGlmIGN1cnJlbnQgSUQgaW4gY3JpdGVyaWFcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlID09IENVU1RPTUVSX1NUQVRFLkVESVRfU0FWRURcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50Q3VzdG9tZXI6IFwiLCB0aGlzLmN1cnJlbnRDdXN0b21lcik7XG4gICAgICAgICAgdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gdGhpcy5wcmVfY3VzdG9tZXJMaXN0O1xuICAgICAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLnByZV9jcml0ZXJpYTtcbiAgICAgICAgICBpZiAodGhpcy5wcmVfY3JpdGVyaWEuaGFzQ3JpdGVyaWEoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuY2hlY2tJbkZpbHRlckNyaXRlcmlhKHRoaXMuY3VycmVudEN1c3RvbWVyLmNsaWVudElELCB0aGlzLnByZV9jcml0ZXJpYSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsaWVudElEID09IHRoaXMuY3VycmVudEN1c3RvbWVyLmNsaWVudElEKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNIaWdoTGlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gWy4uLnRoaXMuY3VzdG9tZXJMaXN0XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xpZW50SUQgPT0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuY2xpZW50SUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnY2hhbmdlIGlzSGlnaExpZ2h0IHN0YXR1cycpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzSGlnaExpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGllbnRJRCA9PSB0aGlzLmN1cnJlbnRDdXN0b21lci5jbGllbnRJRCkge1xuICAgICAgICAgICAgICAgICAgaXRlbS5maXJzdE5hbWUgPSB0aGlzLmN1cnJlbnRDdXN0b21lci5maXJzdE5hbWU7XG4gICAgICAgICAgICAgICAgICBpdGVtLmxhc3ROYW1lID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIubGFzdE5hbWU7XG4gICAgICAgICAgICAgICAgICBpdGVtLnRhZyA9IHRoaXMuY3VycmVudEN1c3RvbWVyLnBvc3NpYmlsaXR5O1xuICAgICAgICAgICAgICAgICAgaXRlbS5jb21wbGVtZW50UGVyY2VudCA9IHRoaXMuY3VzdG9tZXJVdGlscy5jb3VudENvbXBsZXRlbmVzc0J5UHJvZmlsZSh0aGlzLmN1cnJlbnRDdXN0b21lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QgPSBbLi4udGhpcy5jdXN0b21lckxpc3RdO1xuXG4gICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRDdXN0b21lckxpc3QodGhpcy5jdXN0b21lckxpc3QpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xpZW50SUQgPT0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuY2xpZW50SUQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmZpcnN0TmFtZSA9IHRoaXMuY3VycmVudEN1c3RvbWVyLmZpcnN0TmFtZTtcbiAgICAgICAgICAgICAgICBpdGVtLmxhc3ROYW1lID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIubGFzdE5hbWU7XG4gICAgICAgICAgICAgICAgaXRlbS50YWcgPSB0aGlzLmN1cnJlbnRDdXN0b21lci5wb3NzaWJpbGl0eTtcbiAgICAgICAgICAgICAgICBpdGVtLmNvbXBsZW1lbnRQZXJjZW50ID0gdGhpcy5jdXN0b21lclV0aWxzLmNvdW50Q29tcGxldGVuZXNzQnlQcm9maWxlKHRoaXMuY3VycmVudEN1c3RvbWVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdCA9IFsuLi50aGlzLmN1c3RvbWVyTGlzdF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0aGlzLmN1cnJlbnRDdXN0b21lci5jbGllbnRJRCk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgICAgICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09IENVU1RPTUVSX1NUQVRFLkVESVQgJiYgdGhpcy5jdXN0b21lclN0YXRlICE9IENVU1RPTUVSX1NUQVRFLkVESVQgJiYgdGhpcy5jdXN0b21lclN0YXRlID09IENVU1RPTUVSX1NUQVRFLkZJUlNUKSB7XG4gICAgICAgICAgLy8gZWRpdC9jbGljayBwYWdlIGNsaWNrIGxhc3QgcGFnZVxuXG4gICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QgPSB0aGlzLnByZV9jdXN0b21lckxpc3Q7XG4gICAgICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMucHJlX2NyaXRlcmlhO1xuICAgICAgICAgIC8vdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0aGlzLmN1cnJlbnRDdXN0b21lci5jbGllbnRJRCk7XG4gICAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jdXJyZW50Q3VzdG9tZXIuY2xpZW50SUQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25HZXRDdXN0b21lckRldGFpbEJ5SUQodGhpcy5jdXJyZW50Q3VzdG9tZXIuY2xpZW50SUQpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmN1c3RvbWVyU3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRklSU1QgJiYgc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRElTUExBWSkge1xuICAgICAgICAgIC8vZmlydCBpbiwgZmV0Y2ggcHJlc2V0IGZpbHRlclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5jdXN0b21lclN0YXRlID09IENVU1RPTUVSX1NUQVRFLkZJUlNUICYmIHN0YXRlID09IENVU1RPTUVSX1NUQVRFLkRJU1BMQVlcIik7XG4gICAgICAgICAgdGhpcy5sb2FkUHJlc2V0Q3JpdGVyaWEoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuQUREX1NBVkVEKSB7XG5cbiAgICAgICAgICAvL2FmdGVyIGFkZCAsIGdldCBwcmVfY3JpdGVyaWEgJiYgcmVmcmVzaCBjdXN0b21lcmxpc3RcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlID09IENVU1RPTUVSX1NUQVRFLkFERF9TQVZFRFwiKTtcbiAgICAgICAgICB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMucHJlX2NyaXRlcmlhO1xuICAgICAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXN0b21lclN0YXRlID0gc3RhdGU7XG4gICAgICB9KVxuICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldFN0YXRlKENVU1RPTUVSX1NUQVRFLkRJU1BMQVkpO1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuXG5cblxuICAgIC8vY2hlY2sgaXMgZmlyc3QgdGltZSBvcGVuIHRoaXMgZnVuY3Rpb25cbiAgICBpZiAodGhpcy5jdXN0b21lclNlcnZpY2UuaXNGaXJzdFRpbWUoKSkge1xuXG4gICAgICBjb25zb2xlLmxvZygnY3VzdG9tZXIgaXMgZmlyc3QgdGltZScpO1xuXG4gICAgICAvL2NoZWNrIGN1c3RvbWVyIGRhdGEgb3ZlciA2bW9udGhcblxuICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0T3ZlclRpbWVDdXN0b21lckxpc3QoXCJcIikuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmFsZXJ0T3ZlclRpbWVMaXN0ID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuYWxlcnRPdmVyVGltZUxpc3QubGVuZ3RoICE9IDApIHtcblxuICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2VUb1JlYWQoJ092ZXJUaW1lJywgJ0N1c3RvbWVyJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc3BsYXlVcGRhdGVSZW1pbmQgPSB0cnVlO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cblxuXG4gICAgICAvL2NoZWNrIGN1c3RvbWVyIGRhdGEgb3ZlciA2bW9udGggJiA3ZGF5XG4gICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRBdXRvRGVsZXRlQ3VzdG9tZXJMaXN0KFwiXCIpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lckF1dG9EZWxldGU6IFwiLCBkYXRhKTtcbiAgICAgICAgdGhpcy5hbGVydEF1dG9EZWxldGVDdXN0b21lciA9IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLmFsZXJ0QXV0b0RlbGV0ZUN1c3RvbWVyLmxlbmd0aCAhPSAwKSB7XG5cbiAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS51cGRhdGVNZXNzYWdlVG9SZWFkKCdBdXRvRGVsZXRlJywgJ0N1c3RvbWVyJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVNZXNzYWdlVG9SZWFkOiBcIiwgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcGxheURlbGV0ZVJlbWluZCA9IHRydWU7XG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG4gICAgICAvL2NoZWNrIGN1c3RvbWVyIGluZm8gYWxlcnRcbiAgICAgIGxldCB0aW1lck9iaiA9IHRoaXMuZXh0ZW5zaW9uU2VydmljZS5nZXRDb25maWdWYWx1ZSgnQ3VzdG9tZXJJbmZvQWxlcnRUaW1lcicpO1xuICAgICAgY29uc29sZS5kZWJ1ZygndGltZXJPYmonLCB0aW1lck9iaik7XG4gICAgICB0aGlzLl9jaGVja0lzSW5mb0FsZXJ0VGltZSh0aW1lck9iaik7XG5cblxuXG4gICAgfVxuICB9XG5cblxuICByZWZyZXNoQ3VzdG9tZXJMaXN0KGlzQXBwZW5kOiBib29sZWFuKSB7XG4gICAgY29uc29sZS5kZWJ1ZygncmVmcmVzaEN1c3RvbWVyTGlzdCBhcHBlbmQnLCBpc0FwcGVuZCk7XG4gICAgY29uc29sZS5kZWJ1Zyh0aGlzLmZpbHRlckNyaXRlcmlhKTtcbiAgICBjb25zb2xlLmRlYnVnKHRoaXMuY3VzdG9tZXJMaXN0UGFnZUluZm8pO1xuXG4gICAgLy9mZXRjaCBjdXN0b21lci1saXN0IGRhdGFcbiAgICBpZiAoIWlzQXBwZW5kKSB0aGlzLmN1c3RvbWVyTGlzdFBhZ2VJbmZvLnJlc2V0UGFnZSgpO1xuXG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJMaXN0KHRoaXMuZmlsdGVyQ3JpdGVyaWEsIHRoaXMuY3VzdG9tZXJMaXN0UGFnZUluZm8pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBpbiBjcml0ZXJpYTogXCIsIGRhdGEpO1xuICAgICAgaWYgKCFpc0FwcGVuZCkgdGhpcy5jdXN0b21lckxpc3QgPSBbLi4uZGF0YV07XG4gICAgICBlbHNlIHRoaXMuY3VzdG9tZXJMaXN0ID0gWy4uLnRoaXMuY3VzdG9tZXJMaXN0LCAuLi5kYXRhXTtcblxuICAgICAgaWYgKCghdGhpcy5maWx0ZXJDcml0ZXJpYS5oYXNDcml0ZXJpYSgpKSkge1xuICAgICAgICB0aGlzLmZpbHRlclR5cGUgPSAnTk9ORSc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5maWx0ZXJUeXBlID0gU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmZpbHRlckNyaXRlcmlhLmtleXdvcmQpID8gJ1NFQVJDSCcgOiAnRklMVEVSJztcblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jdXN0b21lclN0b3JlKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRDdXN0b21lckxpc3QodGhpcy5jdXN0b21lckxpc3QpO1xuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMub25HZXRDdXN0b21lckRldGFpbEJ5SUQodGhpcy5jdXN0b21lckxpc3RbMF0uY2xpZW50SUQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwgPSBuZXcgQ3VzdG9tZXJEZXRhaWwoKTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiBpbnRlZ3JhdGlvbiBjb250YWN0LWxpc3QgKi9cbiAgcmVmcmVzaENvbnRhY3ROb3RlKGlzQXBwZW5kOiBib29sZWFuKSB7XG5cblxuICAgIC8vaWYgYXBwZW5kIGRhdGEgd2lsbCBuZXh0IHBhZ2VcbiAgICBpZiAoIWlzQXBwZW5kKSB0aGlzLmNvbnRhY3RMaXN0UGFnZUluZm8ucmVzZXRQYWdlKCk7XG5cbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckNvbnRhY3ROb3RlKHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQsIHRoaXMuY29udGFjdExpc3RQYWdlSW5mbykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgaWYgKGlzQXBwZW5kKSB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QgPSB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QuY29uY2F0KGRhdGEpO1xuICAgICAgZWxzZSB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QgPSBkYXRhO1xuXG4gICAgICBjb25zb2xlLmRlYnVnKCdyZWZyZXNoQ29udGFjdE5vdGUgc3VjY2VzcyBpc1JlZnJlc2hDb250YWN0TGlzdCBzdGF0dXMnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBvbkdldEN1c3RvbWVyQ29udGFjdExpc3RCeUlEKGNsaWVudElEKSB7XG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZShjbGllbnRJRCwgdGhpcy5jb250YWN0TGlzdFBhZ2VJbmZvKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgX2NoZWNrSXNJbmZvQWxlcnRUaW1lKHRpbWVyT2JqKSB7XG4gICAgbGV0IGluZm9BbGVydERhdGVSYW5nZTogQXJyYXk8T2JqZWN0PiA9IHRpbWVyT2JqLkRhdGVSYW5nZTtcbiAgICBsZXQgaW5mb0FsZXJ0VGltZVJhbmdlOiBPYmplY3QgPSB0aW1lck9iai5UaW1lUmFuZ2U7XG5cbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zb2xlLmRlYnVnKCdub3cnLCBub3cpO1xuICAgIGNvbnNvbGUuZGVidWcoJ25vdyBtb250aCcsIG5vdy5nZXRNb250aCgpICsgMSk7XG4gICAgY29uc29sZS5kZWJ1Zygnbm93IGRhdGUnLCBub3cuZ2V0RGF0ZSgpKTtcbiAgICBjb25zb2xlLmRlYnVnKCdub3cgaG91cnMnLCBub3cuZ2V0SG91cnMoKSk7XG4gICAgaW5mb0FsZXJ0RGF0ZVJhbmdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBsZXQgbW9udGggPSBlbGVtZW50Wydtb250aCddO1xuICAgICAgbGV0IGRhdGUgPSBlbGVtZW50WydkYXRlJ107XG5cbiAgICAgIGlmICgobm93LmdldE1vbnRoKCkgKyAxID09IE51bWJlci5wYXJzZUludChtb250aCkpICYmIG5vdy5nZXREYXRlKCkgPT0gTnVtYmVyLnBhcnNlSW50KGRhdGUpKSB7XG4gICAgICAgIGlmIChub3cuZ2V0SG91cnMoKSA+PSBOdW1iZXIucGFyc2VJbnQoaW5mb0FsZXJ0VGltZVJhbmdlWydzdGFydCddKVxuICAgICAgICAgICYmIG5vdy5nZXRIb3VycygpIDw9IE51bWJlci5wYXJzZUludChpbmZvQWxlcnRUaW1lUmFuZ2VbJ2VuZCddKSkge1xuICAgICAgICAgIHRoaXMuaXNEaXNwbGF5SW5mb0FsZXJ0UG9wdXAgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cblxuICB9XG5cbiAgb25HZXRDdXN0b21lckRldGFpbEJ5SUQoY2xpZW50SUQpIHtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckRldGFpbChjbGllbnRJRCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5jdXN0b21lckRldGFpbCA9IGRhdGE7XG4gICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5jb252ZXJ0Q3VzdG9tZXJEZXRhaWxEaXNwbGF5TW9kZSh0aGlzLmN1c3RvbWVyRGV0YWlsKTtcblxuICAgIH0pO1xuXG5cbiAgfVxuXG4gIHRvZ2dsZVNlYXJjaCgpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB0aGlzLmNsYXNzU2VhcmNoID0gdGhpcy5pc09wZW4gPyAnIGFjdGl2ZScgOiAnJ1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIC8vIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYS5rZXl3b3JkID0gJyc7XG4gICAgICBpZiAodGhpcy5jdXN0b21lclN0b3JlKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRDcml0ZXJpYSh0aGlzLmZpbHRlckNyaXRlcmlhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgfVxuXG4gIH1cblxuICAvLyBzZWFyY2gga2V5cHJlc3NcbiAgc2VhcmNoQ3VzdG9tZXJOYW1lKG5hbWUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdzZWFyY2hDdXN0b21lck5hbWUnLCBuYW1lKTtcblxuICAgIC8vIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEua2V5d29yZCA9IG5hbWU7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJTdG9yZSkge1xuICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldENyaXRlcmlhKHRoaXMuZmlsdGVyQ3JpdGVyaWEpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuXG4gIH1cblxuICB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5uYW1lO1xuICB9XG5cblxuICAvL3doZW4gY3VzdG9tZXItbGlzdCBjbGljayBnZXQgY2xpY2sgSXRlbVxuICBvbkNoYW5nZUN1c3RvbWVyKGN1c3RvbWVySXRlbTogQ3VzdG9tZXJJdGVtKSB7XG5cbiAgICB0aGlzLmNsaWNrSXRlbSA9IGN1c3RvbWVySXRlbTtcblxuXG5cbiAgICAvL2dldCBDdXN0b21lckRldGFpbFxuICAgIHRoaXMub25HZXRDdXN0b21lckRldGFpbEJ5SUQoY3VzdG9tZXJJdGVtLmNsaWVudElEKTtcblxuICAgIC8vZ2V0IEN1c3RvbWVyTm90ZVxuICAgIHRoaXMub25HZXRDdXN0b21lckNvbnRhY3RMaXN0QnlJRChjdXN0b21lckl0ZW0uY2xpZW50SUQpO1xuICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcblxuICB9XG5cbiAgLy93aGVuIGN1c3RvbWVyLWxpc3QgZmV0Y2ggbmV4dCByZWNvcmRcbiAgb25DdXN0b21lckxvYWQoKSB7XG4gICAgdGhpcy5jdXN0b21lckxpc3RQYWdlSW5mby5uZXh0UGFnZSgpO1xuXG4gICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KHRydWUpO1xuICB9XG5cbiAgLy93aGVuIGN1c3RvbWVyLWxpc3Qgc3luYyBkYXRhIHRvIGJhY2tlbmRcbiAgb25DdXN0b21lclJlZnJlc2goKSB7XG4gICAgLy9zeW5jICYgcmVsb2FkIGxpc3RcbiAgICB0aGlzLmN1c3RvbWVyU3luYy5zeW5jKCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgIH0pXG4gIH1cblxuICBkZWxldGVDdXN0b21lcihjdXN0b21lckNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzRGlzcGxheURlbEN1c3RvbWVyUG9wdXAgPSB0cnVlO1xuICB9XG5cbiAgZG9EZWxldGVDdXN0b21lcigpIHtcblxuICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gdGhpcy5jdXN0b21lckxpc3QuZmlsdGVyKHggPT4geC5jbGllbnRJRCAhPSB0aGlzLmN1c3RvbWVyRGV0YWlsLmNsaWVudElEKTtcbiAgICB0aGlzLm9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEKHRoaXMuY3VzdG9tZXJMaXN0WzBdLmNsaWVudElEKTtcblxuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmRlbGV0ZUN1c3RvbWVyUHJvZmlsZSh0aGlzLmN1c3RvbWVyRGV0YWlsLmNsaWVudElEKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXJTZXJ2aWNlLmRvRGVsZXRlQ3VzdG9tZXIoKVwiLCBkYXRhKTtcblxuICAgICAgaWYgKGRhdGEuc3RhdHVzKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tZXJTdG9yZSkge1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRDdXN0b21lckxpc3QodGhpcy5jdXN0b21lckxpc3QpO1xuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXlEZWxldGVQb3B1cCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkQXBwb2ludG1lbnQoY3VzdG9tZXJDbGllbnRJRDogc3RyaW5nKSB7XG4gICAgbGV0IGN1cnJlbnRUaW1lOyAvLyBhZGp1c3QgdGltZSB0byBuZXh0IGludGVydmFsXG4gICAgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMudmlld0RhdGUpLCBnZXRNb250aCh0aGlzLnZpZXdEYXRlKSwgZ2V0RGF0ZSh0aGlzLnZpZXdEYXRlKSwgZ2V0SG91cnMobmV3IERhdGUoKSksIGdldE1pbnV0ZXMobmV3IERhdGUoKSkpO1xuICAgIGN1cnJlbnRUaW1lID0gYWRkTWludXRlcyhjdXJyZW50VGltZSwgKDUgLSBnZXRNaW51dGVzKGN1cnJlbnRUaW1lKSAlIDUpKTsgIC8vIGFkanVzdCBtaW51dGVzIHRvIG5leHQgNSBtaW51dGVzXG4gICAgY3VycmVudFRpbWUgPSBhZGRIb3VycyhjdXJyZW50VGltZSwgMSk7XG4gICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsID0gbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoJycsICcnLCAnJywgJycsIG51bGwsICdOJywgY3VycmVudFRpbWUsIGFkZEhvdXJzKGN1cnJlbnRUaW1lLCAxKSwgJ1knLCAnOCcsIG51bGwsICcnLCAnJywgbnVsbCk7XG4gICAgbGV0IHF1ZXJ5RGF0ZSA9IG5ldyBEYXRlKGdldFllYXIodGhpcy52aWV3RGF0ZSksIGdldE1vbnRoKHRoaXMudmlld0RhdGUpLCBnZXREYXRlKHRoaXMudmlld0RhdGUpLCAwLCAwLCAwKTtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDYWxlbmRhckV2ZW50TGlzdChxdWVyeURhdGUsIHN1Yk1pbnV0ZXMoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCAxKSwgMSksICcnKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QgPSBkYXRhO1xuICAgICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrQXBwb2ludG1lbnRTYXZlKCkge1xuICAgIHRoaXMuaXNTYXZlQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgb25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKHZhbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiWFwiKTtcbiAgICB0aGlzLmlzRXhwYW5kRWRpdCA9IHZhbDtcbiAgfVxuXG4gIG9uU2F2ZUNhbGVuZGFyRXZlbnQoY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbCkge1xuICAgIC8vYWxlcnQoY2FsZW5kYXJFdmVudERldGFpbCk7XG4gICAgdGhpcy5pc1NhdmVDbGljayA9IGZhbHNlO1xuICAgIGlmIChjYWxlbmRhckV2ZW50RGV0YWlsKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5hZGRDYWxlbmRhckV2ZW50KGNhbGVuZGFyRXZlbnREZXRhaWwpLnN1YnNjcmliZShkYXRhID0+IHtcblxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCA9IHRydWU7XG4gICAgICAgICAgY2FsZW5kYXJFdmVudERldGFpbC5jbGllbnRJRCA9IGRhdGEuY2xpZW50SUQ7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsID0gY2FsZW5kYXJFdmVudERldGFpbDtcblxuICAgICAgICAgIHRoaXMub25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIGFkZEN1c3RvbWVyKCkge1xuXG4gICAgdGhpcy5pc0Rpc3BsYXlDb25maXJtQWxlcnRQb3B1cCA9IGZhbHNlO1xuICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGxldCBkZXRhaWwgPSBuZXcgQ3VzdG9tZXJEZXRhaWwoKTtcbiAgICBpZiAodGhpcy5jdXN0b21lclN0b3JlKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmUuc2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKGRldGFpbCk7XG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmUuc2V0U3RhdGUoQ1VTVE9NRVJfU1RBVEUuRURJVCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1c3RvbWVyQWN0aW9uKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyQWN0aW9uLmFmdGVyQ3VzdG9tZXJFZGl0KGRldGFpbCk7XG4gICAgfVxuICB9XG5cbiAgZWRpdEN1c3RvbWVyKGN1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRTdGF0ZShDVVNUT01FUl9TVEFURS5FRElUKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyRGV0YWlsKGN1c3RvbWVyQ2xpZW50SUQpLnN1YnNjcmliZSgoZGV0YWlsOiBDdXN0b21lckRldGFpbCkgPT4ge1xuICAgICAgICB0aGlzLmN1c3RvbWVyU3RvcmUuc2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKGRldGFpbCk7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbWVyQWN0aW9uKVxuICAgICAgICAgIHRoaXMuY3VzdG9tZXJBY3Rpb24uYWZ0ZXJDdXN0b21lckVkaXQoZGV0YWlsKTtcbiAgICAgIH0pXG5cblxuICAgIH1cblxuXG4gIH1cblxuICBkZXRhaWxDaGFuZ2UoY3VzdG9tZXJEZXRhaWw6IEN1c3RvbWVyRGV0YWlsKSB7XG4gICAgY29uc29sZS5sb2coJ2RldGFpbENoYW5nZScsIGN1c3RvbWVyRGV0YWlsKTtcbiAgICB0aGlzLmRldGFpbE1vZGVsLmVtaXQoY3VzdG9tZXJEZXRhaWwpO1xuXG4gIH1cblxuICBmb2xsb3dDaGFuZ2Uob2JqKSB7XG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UudXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMob2JqLmNsaWVudElELCBvYmouaXNGb2xsb3cpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgLy90aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmN1c3RvbWVyTGlzdCkpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyQ3JpdGVyaWEpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuY2hlY2tJbkZpbHRlckNyaXRlcmlhKG9iai5jbGllbnRJRCwgdGhpcy5maWx0ZXJDcml0ZXJpYSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY2xpZW50SUQgPT0gb2JqLmNsaWVudElEKSB7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZygnY2hhbmdlIGlzSGlnaExpZ2h0IHN0YXR1cyBpbiBmb2xsb3cnKTtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNIaWdoTGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzSGlnaExpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1c3RvbWVyTGlzdC5maWx0ZXIoeCA9PiB4LmNsaWVudElEID09IG9iai5jbGllbnRJRCkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUuaXNGb2xsb3cgPSBvYmouaXNGb2xsb3c7XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgLy90aGlzLmZvbGxvd0NoYW5nZUNsaWVudElEID0gb2JqLmNsaWVudElEO1xuXG4gIH1cblxuICBhZGROb3RlKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2FkZE5vdGUnKTtcbiAgICB0aGlzLm5vdGVDdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5ub3RlTWVzc2FnZSA9ICcnO1xuICAgIHRoaXMuaXNQb3B1cEVkaXROb3RlID0gdHJ1ZTtcbiAgfVxuXG4gIGVkaXROb3RlKG5vdGU6IEN1c3RvbWVyQ29udGFjdE5vdGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdlZGl0Tm90ZScsIG5vdGUpO1xuXG4gICAgdGhpcy5ub3RlRWRpdENsaWVudElEID0gbm90ZS5nZXRDbGllbnRJRCgpO1xuICAgIHRoaXMubm90ZUN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLm5vdGVNZXNzYWdlID0gbm90ZS5ub3RlTWVzc2FnZTtcbiAgICB0aGlzLmlzUG9wdXBFZGl0Tm90ZSA9IHRydWU7XG5cbiAgfVxuXG4gIGRpc3BsYXlOb3RlKG5vdGU6IEN1c3RvbWVyQ29udGFjdE5vdGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdkaXNwbGF5Tm90ZScsIG5vdGUpO1xuICAgIHRoaXMuY3VzdG9tZXJDb250YWN0RGV0YWlsID0gbm90ZTtcblxuICAgIC8vIGFkZCBjbGljayBjdXN0b21lciBuYW1lXG4gICAgdGhpcy5jdXN0b21lckNvbnRhY3REZXRhaWwubmFtZSA9IHRoaXMuY3VzdG9tZXJEZXRhaWwubGFzdE5hbWUgKyB0aGlzLmN1c3RvbWVyRGV0YWlsLmZpcnN0TmFtZTtcblxuICAgIHRoaXMuaXNQb3B1cE5vdGVEZXRhaWwgPSB0cnVlO1xuICB9XG5cblxuICBkZWxldGVOb3RlKG5vdGU6IEN1c3RvbWVyQ29udGFjdE5vdGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdkZWxldGVOb3RlJywgbm90ZSk7XG4gICAgdGhpcy5ub3RlQ2xpZW50SUQgPSBub3RlLmdldENsaWVudElEKCk7XG5cbiAgICB0aGlzLmlzUG9wdXBEZWxldGVOb3RlID0gdHJ1ZTtcbiAgfVxuXG4gIGRvRGVsZXRlQ29udGFjdCgpIHtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5kZWxldGVDdXN0b21lckNvbnRhY3QodGhpcy5ub3RlQ2xpZW50SUQpLnN1YnNjcmliZShkYXRhID0+IHtcblxuICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lclNlcnZpY2UuZGVsZXRlTm90ZSgpXCIsIGRhdGEpO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lckNvbnRhY3RMaXN0ID0gdGhpcy5jdXN0b21lckNvbnRhY3RMaXN0LmZpbHRlcih4ID0+IHguZ2V0Q2xpZW50SUQoKSAhPSB0aGlzLm5vdGVDbGllbnRJRCk7XG4gICAgICAgIHRoaXMubm90ZUNsaWVudElEID0gJyc7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5RGVsZXRlUG9wdXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25TYXZlTm90ZShldmVudCkge1xuXG4gICAgLyogdGhlIHNhbWUgc2F2ZSBidG4gZm9yIGVkaXQvYWRkICxldmVudCBhbHNvIHRoZSBzYW1lIGV2ZW50LCBob3cgdG8gZGlzdGluZ3Vpc2gqL1xuICAgIC8vYWxlcnQoSlNPTi5zdHJpbmdpZnkodGhpcy5ub3RlTWVzc2FnZSkpO1xuXG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5ub3RlTWVzc2FnZSkpIHtcbiAgICAgIGFsZXJ0KCdNZXNzYWdlIGlzIHJlcXVpcmVkISEnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5hZGRDdXN0b21lckNvbnRhY3QodGhpcy5ub3RlRWRpdENsaWVudElELCB0aGlzLmN1c3RvbWVyRGV0YWlsLmNsaWVudElELCB0aGlzLm5vdGVNZXNzYWdlLCB0aGlzLm5vdGVDdXJyZW50VGltZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXJTZXJ2aWNlLnNhdmVOb3RlKClcIiwgZGF0YSk7XG5cbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1Zygnc2F2ZU5vdGUgc3VjY2VzcyAsIGNsb3NlIHBvcHVwICYgcmVmcmVzaCBsaXN0JywgdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAsICdpc1JlZnJlc2hDb250YWN0TGlzdCcsIHRoaXMuaXNSZWZyZXNoQ29udGFjdExpc3QpO1xuXG4gICAgICAgICAgLy8gaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLm5vdGVFZGl0Q2xpZW50SUQpKSB7XG5cbiAgICAgICAgICAvLyAgIGxldCBhcnJheSA9IHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdC5maWx0ZXIoeCA9PiB4LmdldENsaWVudElEKCkgPT0gdGhpcy5ub3RlRWRpdENsaWVudElEKS5mb3JFYWNoKCh2YWx1ZSkgPT57XG4gICAgICAgICAgLy8gICAgIHZhbHVlLm5vdGVNZXNzYWdlID0gdGhpcy5ub3RlTWVzc2FnZTtcbiAgICAgICAgICAvLyAgIH0pO1xuXG4gICAgICAgICAgLy8gICBhbGVydChhcnJheS5sZW5ndGgpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAvLyAgIHRoaXMucmVmcmVzaENvbnRhY3ROb3RlKGZhbHNlKTtcbiAgICAgICAgICAvLyB9XG5cblxuICAgICAgICAgIHRoaXMubm90ZUVkaXRDbGllbnRJRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBFZGl0Tm90ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG5cblxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUuZGVidWcoJ3NhdmVOb3RlJywgZXZlbnQpO1xuICAgIC8vY29uc29sZS5kZWJ1ZygnY2xpY2tDbGllbnRJRCcsIHRoaXMubm90ZUVkaXRDbGllbnRJRCwgdGhpcy5ub3RlRWRpdENsaWVudElELCAnbm90ZUN1cnJlbnRUaW1lJywgdGhpcy5ub3RlQ3VycmVudFRpbWUsICdub3RlTWVzc2FnZScsIHRoaXMubm90ZU1lc3NhZ2UpO1xuICAgIC8vYWxlcnQoSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcbiAgICAvLyBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm5vdGVNZXNzYWdlKSkge1xuICAgIC8vICAgYWxlcnQoJ01lc3NhZ2UgaXMgcmVxdWlyZWQhIScpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmFkZEN1c3RvbWVyQ29udGFjdCh0aGlzLm5vdGVFZGl0Q2xpZW50SUQsIHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQsIHRoaXMubm90ZU1lc3NhZ2UsIHRoaXMubm90ZUN1cnJlbnRUaW1lKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjdXN0b21lclNlcnZpY2Uuc2F2ZU5vdGUoKVwiLCBkYXRhKTtcblxuICAgIC8vICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmRlYnVnKCdzYXZlTm90ZSBzdWNjZXNzICwgY2xvc2UgcG9wdXAgJiByZWZyZXNoIGxpc3QnLCB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCwgJ2lzUmVmcmVzaENvbnRhY3RMaXN0JywgdGhpcy5pc1JlZnJlc2hDb250YWN0TGlzdCk7XG4gICAgLy8gICAgICAgdGhpcy5ub3RlRWRpdENsaWVudElEID0gdW5kZWZpbmVkO1xuICAgIC8vICAgICAgIHRoaXMuaXNQb3B1cEVkaXROb3RlID0gZmFsc2U7XG4gICAgLy8gICAgICAgdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAgPSB0cnVlO1xuICAgIC8vICAgICAgIHRoaXMucmVmcmVzaENvbnRhY3ROb3RlKGZhbHNlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gIH1cblxuICBzaG93Q29uZmlybVBvcHVwKGFjdGlvbiwgb3B0aW9uQXJyYXkpIHtcblxuICAgIHRoaXMuX2NvbmZpcm1BY3Rpb24uYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuX2NvbmZpcm1BY3Rpb24ub3B0aW9uID0gb3B0aW9uQXJyYXk7XG5cbiAgICB0aGlzLmlzRGlzcGxheUNvbmZpcm1BbGVydFBvcHVwID0gdHJ1ZTtcbiAgICAvL2RlZmF1bHQgYnRuIGlzIGRpc2FibGVcbiAgICB0aGlzLmlzUG9wdXBDb25maXJtRGlzYWJsZSA9IHRydWU7IC8vIHRydWU7XG4gIH1cblxuICBjb25maXJtUG9wdXAoKSB7XG5cbiAgICBpZiAodGhpcy5fY29uZmlybUFjdGlvbi5hY3Rpb24gPT0gJ2FkZCcpIHtcbiAgICAgIHRoaXMuYWRkQ3VzdG9tZXIoKTtcbiAgICB9XG5cbiAgICAvLyAyMDE5LzAzLzI1IEplZmZlcnkgcmVtb3ZlIGJlY2F1c2UgZWRpdCBub3Qgc2hvd3BvcHVwXG4gICAgLy8gZWxzZSBpZiAodGhpcy5fY29uZmlybUFjdGlvbi5hY3Rpb24gPT0gJ2VkaXQnKSB7XG4gICAgLy8gICB0aGlzLmVkaXRDdXN0b21lcih0aGlzLl9jb25maXJtQWN0aW9uLm9wdGlvblswXSk7XG4gICAgLy8gfVxuXG4gICAgZWxzZSBpZiAodGhpcy5fY29uZmlybUFjdGlvbi5hY3Rpb24gPT0gJ2ltcG9ydCcpIHtcbiAgICAgIHRoaXMuaW1wb3J0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc3BsYXlDb25maXJtQWxlcnRQb3B1cCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gZGV0ZWN0IGNvbmZpcm0gcG9wdXAgdG8gY29udGVudCBib3R0bSBhbmQgdGhlIGJ0biBjYW4gY2xpY2tcbiAgZGV0ZWN0U2Nyb2xsKGlzQnRtKSB7XG4gICAgY29uc29sZS5sb2coJ2luIGRldGVjdCBzY3JvbGw9PT0nLCBpc0J0bSk7XG4gICAgaWYgKGlzQnRtKSB7XG4gICAgICB0aGlzLmlzUG9wdXBDb25maXJtRGlzYWJsZSA9IGZhbHNlXG4gICAgfVxuICB9XG5cblxuXG4gIGltcG9ydCgpIHtcblxuICAgIHRoaXMuZGV2aWNlU2VydmljZS5zZWFyY2hDb250YWN0c0J5TmFtZShcIlwiKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBsZXQgaW1wb3J0TGlzdCA9IGRhdGE7XG4gICAgICBjb25zb2xlLmRlYnVnKCdpbXBvcnQgcmVzdWx0ICcsIGltcG9ydExpc3QpO1xuXG4gICAgICB0aGlzLmltcG9ydENvbnRyYWN0TWFwLmNsZWFyKCk7XG5cbiAgICAgIC8vcmVncm91cFxuICAgICAgaW1wb3J0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoZWxlbWVudC5sYXN0bmFtZSk7XG5cbiAgICAgICAgLy9pZiBubyBsYXN0bmFtZSx1c2UgZmlyc3QgbmFtZVxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShlbGVtZW50Lmxhc3RuYW1lKSkge1xuICAgICAgICAgIGVsZW1lbnQubGFzdG5hbWUgPSBlbGVtZW50LmZpcnN0bmFtZTtcbiAgICAgICAgICBlbGVtZW50LmZpcnN0bmFtZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5hbWUgPSBlbGVtZW50Lmxhc3RuYW1lO1xuXG4gICAgICAgIGlmIChuYW1lICE9IG51bGwgJiYgbmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGZpcnN0V29yZCA9IG5hbWUuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICAgIGZpcnN0V29yZCA9IGZpcnN0V29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2ZpcnN0V29yZCA9JyArIGZpcnN0V29yZCk7XG5cbiAgICAgICAgICBsZXQgZ3JvdXA6IEN1c3RvbWVySW1wb3J0R3JvdXAgPSB0aGlzLmltcG9ydENvbnRyYWN0TWFwLmdldChmaXJzdFdvcmQpO1xuICAgICAgICAgIGlmIChncm91cCA9PSB1bmRlZmluZWQpIGdyb3VwID0gbmV3IEN1c3RvbWVySW1wb3J0R3JvdXAoZmlyc3RXb3JkKTtcblxuICAgICAgICAgIGdyb3VwLmFkZEl0ZW0oZWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5pbXBvcnRDb250cmFjdE1hcC5zZXQoZmlyc3RXb3JkLCBncm91cCk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUuZGVidWcoJ2ltcG9ydENvbnRyYWN0TWFwJywgdGhpcy5pbXBvcnRDb250cmFjdE1hcCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzUG9wdXBJbXBvcnQgPSB0cnVlO1xuXG5cbiAgfVxuXG4gIC8vY29udHJvbCBpbXBvcnQgcG9wdXAgaXMgZGlzcGxheVxuICBkaXNwbGF5SW1wb3J0UG9wdXAoaXNTaG93OiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1BvcHVwSW1wb3J0ID0gaXNTaG93O1xuICB9XG5cbiAgLy93aGVuIGtleXByZXNzIGtleXdvcmQgcmVmcmVzaCBjb250cmFjdCBsaXN0XG4gIHJlZnJlc2hJbXBvcnQoa2V5d29yZCkge1xuICAgIHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuZm9yRWFjaCgoZ3JvdXA6IEN1c3RvbWVySW1wb3J0R3JvdXAsIGdyb3VwTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhncm91cE5hbWUsIGdyb3VwKTtcblxuICAgICAgZ3JvdXAuaXNTaG93ID0gZmFsc2U7XG4gICAgICBncm91cC5nZXRJdGVtcy5mb3JFYWNoKChpdGVtOiBDb250YWN0SXRlbSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdpdGVtJyxpdGVtKTtcbiAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IGl0ZW0ubGFzdG5hbWUgKyBpdGVtLmZpcnN0bmFtZTtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhuYW1lKTtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihrZXl3b3JkKSA9PSAtMSkge1xuICAgICAgICAgIGl0ZW0uaXNTaG93ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaXRlbS5pc1Nob3cgPSB0cnVlO1xuICAgICAgICAgIGdyb3VwLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBkb0ltcG9ydCgpIHtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5pbXBvcnRDb250YWN0KHRoaXMuaW1wb3J0Q29udGFjdExpc3QpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIC8vYWxlcnQoXCIxXCIrSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkuc3RhdHVzKTtcbiAgICAgIGxldCBzdGF0dXMgPSAoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkpLnN0YXR1cztcblxuICAgICAgaWYgKHN0YXR1cykge1xuXG4gICAgICAgIHRoaXMuaXNQb3B1cEltcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGlzcGxheUltcG9ydFNhdmVQb3B1cCA9IHRydWU7XG4gICAgICAgIHRoaXMubW9iaWxlUmVzdWx0U2l6ZSA9IDA7XG5cbiAgICAgICAgLy9yZWZyZXNoIGN1c3RvbWVyIGxpc3RcbiAgICAgICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cblxuXG4gIC8qIGN1c3RvbWVyLWltcG9ydCovXG4gIG9uSW1wb3J0Q3VzdG9tZXIoaW1wb3J0SXRlbXMpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdpbXBvcnRJdGVtcycsIGltcG9ydEl0ZW1zKTtcblxuICAgIHRoaXMuaW1wb3J0Q29udGFjdExpc3QgPSBpbXBvcnRJdGVtcztcbiAgICB0aGlzLm1vYmlsZVJlc3VsdFNpemUgPSBpbXBvcnRJdGVtcy5sZW5ndGg7XG4gIH1cblxuICAvL2NhbGwgY3VzdG9tZXIgZnVuY3Rpb25cbiAgY2FsbEN1c3RvbWVyKGN1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGxDdXN0b21lciA9ICcgKyBjdXN0b21lckNsaWVudElEKTtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckNvbnRhY3RUZWwoY3VzdG9tZXJDbGllbnRJRCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5jYWxsUGhvbmVUZWxBcnJheSA9IGRhdGE7XG5cbiAgICAgIC8vY2hlY2sgbnVtYmVyIGFycmF5IGlzIHNpbmdsZVxuICAgICAgaWYgKHRoaXMuY2FsbFBob25lVGVsQXJyYXkubGVuZ3RoICE9IDApIHtcblxuICAgICAgICAvL29ubHkgb25lIG51bWJlciBqdXN0IHRvIGNhbGwgb3V0XG4gICAgICAgIGlmICh0aGlzLmNhbGxQaG9uZVRlbEFycmF5Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgdGhpcy5jYWxsUGhvbmUodGhpcy5jYWxsUGhvbmVUZWxBcnJheVswXS50ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cENhbGxQaG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH1cblxuICAvL2NhbmNlbCBjYWxscGhvbmUgcG9wdXBcbiAgY2FuY2VsQ2FsbFBob25lKCkge1xuICAgIHRoaXMuaXNQb3B1cENhbGxQaG9uZSA9ICF0aGlzLmlzUG9wdXBDYWxsUGhvbmU7XG4gIH1cblxuICAvL2NhbGwgbnVtYmVyIGZyb20gcGhvbmVcbiAgY2FsbFBob25lKHRlbE51bWJlcjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnY2FsbFBob25lJywgdGVsTnVtYmVyKTtcblxuXG4gICAgLy9jYWxsIHBob25lIGNsb3NlIHBvcHVwXG4gICAgaWYgKHRoaXMuaXNQb3B1cENhbGxQaG9uZSkgdGhpcy5pc1BvcHVwQ2FsbFBob25lID0gIXRoaXMuaXNQb3B1cENhbGxQaG9uZTtcblxuXG4gICAgd2luZG93Lm9wZW4oJ3RlbDonICsgdGVsTnVtYmVyLCAnX3N5c3RlbScpO1xuXG4gICAgLy9wb3B1cCBjb250YWN0IG5vdGVcbiAgICBzZXRUaW1lb3V0KChmdW4pID0+IHtcbiAgICAgIHRoaXMuYWRkTm90ZSgpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cblxuICAvL29wZW4gZmlsdGVyIHBvcHVwXG4gIGZpbHRlcigpIHtcbiAgICB0aGlzLmlzUG9wdXBGaWx0ZXIgPSB0cnVlO1xuICB9XG5cbiAgLy9jbGVhciBmaWx0ZXIgaXRlbVxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLmNsZWFyU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuXG4gIC8vZmlsdGVyIGN1c3RvbWVyIGxpc3QgYW5kIGNsb3NlIHBvcHVwXG4gIGRvRmlsdGVyKCkge1xuICAgIHRoaXMuc2F2ZUZpbHRlclN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgZG9uZUNyaXRlcmlhKGNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnZG9uZUNyaXRlcmlhJywgY3JpdGVyaWEpO1xuXG4gICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgIHRoaXMuaXNQb3B1cEZpbHRlciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRDcml0ZXJpYShjcml0ZXJpYSk7XG4gICAgfVxuXG4gICAgaWYgKGNyaXRlcmlhLnNhdmVQcmVzZXQpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnNhdmVGaWx0ZXJDcml0ZXJpYShjcml0ZXJpYSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdkb25lQ3JpdGVyaWEgc2F2ZUZpbHRlckNyaXRlcmlhJywgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICB9XG5cbiAgbG9hZFByZXNldENyaXRlcmlhKCkge1xuICAgIC8vY2hlY2sgaGFzIHByZXNldFxuICAgIGxldCBjcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEZpbHRlckNyaXRlcmlhUHJlc2V0KCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdnZXRmaWx0ZXJDcml0ZXJpYVByZXNldCcsIGRhdGEpO1xuXG4gICAgICAgIGlmIChkYXRhICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gaW4gZGF0YSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGRhdGFbY29sdW1uXTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvbHVtbicsIGNvbHVtbiwgJ2FycmF5cycsIHZhbHVlcyk7XG4gICAgICAgICAgICBjcml0ZXJpYS5hZGRDcml0ZXJpYUNvbHMoY29sdW1uLCB2YWx1ZXMpO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgICAgY3JpdGVyaWEuc2F2ZVByZXNldCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSBjcml0ZXJpYTtcbiAgICAgICAgfVxuICAgICAgICByZXMoKTtcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgfVxuXG5cbiAgY2FuY2VsRGVsZXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdjYW5jZWxEZWxldGUnKTtcbiAgfVxuXG4gIC8vIHJlZnJlYXNoIGNvbnRlbnRcbiAgcmVmcmVzaENvbnRlbnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRlbnQgcmVmcmVzaDonLCB0aGlzLmN1c3RvbWVyU3luYyk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAvL3NldCB0aW1lb3V0IGZvciByZWZyZXNoIGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jdXN0b21lclN5bmMuc3luYygpLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICBpZiAocmVzcCkge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nRmluaXNoQ29udGVudCA9IHRydWU7XG4gICAgICAgICAgLy8gdGhpcy50cmlnZ2VyQ3VzdG9tZXJMaXN0UXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCA4MDApO1xuXG4gIH1cblxuXG4gIC8vIGxvYWRpbmcgY29udGVudFxuICBsb2FkQ29udGVudChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGxvYWRpbmcnKTtcblxuICAgIGlmICghdGhpcy5sb2FkQ29udGFjdExpc3QpIHRoaXMubG9hZENvbnRhY3RMaXN0ID0gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZ0ZpbmlzaENvbnRlbnQgPSB0cnVlO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gIH1cblxuICBjb250YWN0UmVmcmVzaERvbmUodmFsKSB7XG4gICAgY29uc29sZS5kZWJ1ZygncmVmcmVzaCBkb25lJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzTG9hZGluZ0ZpbmlzaENvbnRlbnQgPSAhdmFsO1xuICAgICAgdGhpcy5sb2FkQ29udGFjdExpc3QgPSB2YWw7XG4gICAgfSwgMCk7XG4gIH1cblxuXG4gIC8vaXNTaG93Q2hhbmdlXG4gIGlzU2hvd0NoYW5nZSh2YWwpIHtcbiAgICBpZiAodGhpcy5pc1Nob3cgIT09IHZhbCkge1xuICAgICAgdGhpcy5pc1Nob3cgPSB2YWw7XG4gICAgICAvLyB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9Ob3RlVGltZSh0aW1lOiBEYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZVN0cmluZyh0aW1lLCAneXl5eS1NTS1kZCBISDptbScpO1xuICB9XG5cblxufVxuIl19