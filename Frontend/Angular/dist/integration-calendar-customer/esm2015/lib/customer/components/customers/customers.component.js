/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Optional, Inject, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { Language, StringUtils, DateUtils, PageInfo, DeviceService, ProfileCodeService, TranslateService, showRuleToken, NotificationMgr, ConfigToken, AppRouter, NotificationType } from '@allianzSND/core';
import { CalendarService } from '../../../calendar/service/calendar-service.service';
import { CalendarEventDetail } from '../../../calendar/service/model/CalendarEventDetail';
import { CalendarEditComponent } from '../../../calendar/components/calendar-edit/calendar-edit.component';
import { CustomerService } from '../../service/customer-service.service';
import { CustomerFilterCriteria } from '../bean/customer-filter-criteria';
import { CustomerImportGroup } from '../bean/customer-import-group';
import { addDays, addHours, addMinutes, getDate, getHours, getMinutes, getMonth, getYear, subMinutes } from 'date-fns';
import { CUSTOMER_STATE } from '../../service/customerStore/customerStore-service';
import { CustomerUtils } from '../../utils/customer-utils';
import { Subject } from 'rxjs';
import { CustomerStoreService } from '../../service/customerStore/customerStore-service';
import { DefaultCustomerImportDisplay } from './DefaultCustomerImportDisplay';
import { addProgressPointToken, customerShowRuleToken } from '../../injectionToken/injection-token';
import { take, takeUntil } from 'rxjs/operators';
export class CustomersComponent {
    //for extension used
    /**
     * @param {?} customerService
     * @param {?} calendarService
     * @param {?} translateService
     * @param {?} deviceService
     * @param {?} dateUtils
     * @param {?} profileCodeService
     * @param {?} customerUtils
     * @param {?} router
     * @param {?} customerStoreService
     * @param {?} customerImportDisplay
     * @param {?} notificationMgr
     * @param {?} changeDetector
     * @param {?} APP_CONFIG
     * @param {?} showRule
     * @param {?} customerShowRule
     * @param {?} addProgressPoint
     */
    constructor(customerService, calendarService, translateService, deviceService, dateUtils, profileCodeService, customerUtils, router, customerStoreService, customerImportDisplay, notificationMgr, changeDetector, APP_CONFIG, showRule, customerShowRule, addProgressPoint) {
        this.customerService = customerService;
        this.calendarService = calendarService;
        this.translateService = translateService;
        this.deviceService = deviceService;
        this.dateUtils = dateUtils;
        this.profileCodeService = profileCodeService;
        this.customerUtils = customerUtils;
        this.router = router;
        this.customerStoreService = customerStoreService;
        this.customerImportDisplay = customerImportDisplay;
        this.notificationMgr = notificationMgr;
        this.changeDetector = changeDetector;
        this.APP_CONFIG = APP_CONFIG;
        this.showRule = showRule;
        this.customerShowRule = customerShowRule;
        this.addProgressPoint = addProgressPoint;
        this.viewTypeIndex = 2; // 'month'
        this.viewDate = new Date();
        this.weekStartsOn = 1; // Monday 
        this.isShowDetailScroll = true;
        // control mobile show
        this.isShow = false;
        //use to force refresh customerList
        this.showCustomerList = true;
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
        this.isCalendarEditMetaDataDone = false;
        //control overtime customer list
        this.alertOverTimeList = new Array();
        //control auto delete customer list
        this.alertAutoDeleteCustomer = new Array();
        //control refresh  content
        this.isLoadingFinishContent = false;
        this.isRefreshFinishContent = true;
        //control
        this.isLazyLoading = true;
        //intergration customer-contact-list used
        //customer contact detail obj
        this.customerContactDetail = null;
        this.customerContactList = [];
        this.contactListPageInfo = new PageInfo();
        this.viewDateCalendarEventList = [];
        //intergration customer-list
        this.customerList = new Array();
        this.customerListPageInfo = new PageInfo();
        this._filterCriteria = new CustomerFilterCriteria();
        this.filterType = 'NONE';
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
        this.importSearchKeyword = '';
        //filter customer attribute
        this.isLoadCriteria = false;
        this.isClearCriteria = false;
        //import result(success | fail);
        this._onImportResult = false;
        //intergration customer-edit used
        //add/edit contact note attribute
        this.currentEditNote = null;
        this.isRefreshContactList = false;
        this.loadContactList = false;
        // search animate in filter
        this.classBarMove = '';
        //intergration customer-detail used
        this.customerDetail = null;
        this.emptyCustomer = {
            ClientID: ''
        };
        //current edit customer Id
        this.currentCustomer = this.emptyCustomer;
        this.confirmAction = null;
        // current customer state
        this.customerState = CUSTOMER_STATE.FIRST;
        //pre saved criteria
        this.pre_criteria = new CustomerFilterCriteria();
        //subscribe of store
        this.unsubscribe$ = new Subject();
        //subject of clear & save filter
        this.clearSubject = new Subject();
        this.saveFilterSubject = new Subject();
        this.contactSaveSubject = new Subject();
    }
    /**
     * @return {?}
     */
    get customerClientID() {
        if (this.customerDetail && this.customerDetail.ClientID)
            return this.customerDetail.ClientID;
        else
            return '';
    }
    /**
     * @return {?}
     */
    get filterCriteria() {
        return this._filterCriteria;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filterCriteria(value) {
        this._filterCriteria = value;
    }
    /**
     * @return {?}
     */
    get needConfirmPopup() {
        /** @type {?} */
        let env = this.APP_CONFIG["ENV"];
        return this.APP_CONFIG && !!this.APP_CONFIG[env]["CUSTOMER_ADD_ANNOUNCE"];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log("customer ngOnDestroy!");
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("customer ngOninit!");
        this.contactListPageInfo.pageSize = 5;
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
        this.customerStoreService.getCriteria()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} criteria
         * @return {?}
         */
        (criteria) => {
            this.pre_criteria = criteria;
        }));
        this.customerStoreService.getCurrentCustomerDetail()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} detail
         * @return {?}
         */
        detail => {
            console.log("customer onsubscribe currentCustomerDetail:", detail);
            this.currentCustomer = detail;
        }));
        this.customerStoreService.getCustomerList()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.pre_customerList = list;
        }));
        this.customerStoreService.getState()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("main state: ", state);
            if (state == CUSTOMER_STATE.EDIT_SAVED && this.customerState != CUSTOMER_STATE.EDIT_SAVED) {
                //after saved, check if current ID in criteria
                console.log("state == CUSTOMER_STATE.EDIT_SAVED");
                console.log("currentCustomer: ", this.currentCustomer);
                this.isDisplaySavePopup = true;
                this.customerList = this.pre_customerList;
                this.filterCriteria = this.pre_criteria;
                /** @type {?} */
                let hasCriteria = this.pre_criteria.hasCriteria();
                /** @type {?} */
                let inCriteria = false;
                if (hasCriteria)
                    inCriteria = yield this.customerService.checkInFilterCriteria(this.currentCustomer.ClientID, this.pre_criteria).toPromise();
                this.customerList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    if (item.clientID == this.currentCustomer.ClientID) {
                        item.firstName = this.currentCustomer.FirstName;
                        item.lastName = this.currentCustomer.LastName;
                        item.tag = this.currentCustomer.Possibility;
                        item.complementPercent = this.currentCustomer.Completeness;
                        if (hasCriteria)
                            item.isHighLight = !inCriteria;
                    }
                }));
                this.customerList = [...this.sortCustomerList(this.customerList)];
                if (hasCriteria)
                    this.customerStoreService.setCustomerList(this.customerList);
                yield this.onGetCustomerDetailByID(this.currentCustomer.ClientID);
                this.refreshContactNote(false);
            }
            else if (state == CUSTOMER_STATE.EDIT && this.customerState != CUSTOMER_STATE.EDIT && this.customerState == CUSTOMER_STATE.FIRST) {
                // edit/click page click last page
                this.customerList = this.pre_customerList;
                this.filterCriteria = this.pre_criteria;
                if (!StringUtils.isEmpty(this.currentCustomer.ClientID)) {
                    yield this.onGetCustomerDetailByID(this.currentCustomer.ClientID);
                }
                this.refreshCustomerList(false);
            }
            else if (this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY) {
                //firt in, fetch preset filter
                console.log("this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY");
                yield this.loadPresetCriteria();
                this.refreshCustomerList(false);
            }
            else if (state == CUSTOMER_STATE.ADD_SAVED) {
                //after add , get pre_criteria && refresh customerlist
                console.log("state == CUSTOMER_STATE.ADD_SAVED", this.currentCustomer);
                this.isDisplaySavePopup = true;
                this.filterCriteria = this.pre_criteria;
                this.refreshCustomerList(false, this.currentCustomer.ClientID);
            }
            else if (state == CUSTOMER_STATE.IMPORT) {
                this.importPopup();
            }
            if (this.customerState != state) {
                this.customerState = state;
                this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
            }
        })));
        this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
        this.refreshContactNote(false);
        this.notificationMgr.showCategoryMessage("Customer");
    }
    /**
     * @param {?} isAppend
     * @param {?=} clientID
     * @return {?}
     */
    refreshCustomerList(isAppend, clientID = '') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.debug('refreshCustomerList append', isAppend, clientID);
            console.debug(this.filterCriteria);
            console.debug(this.customerListPageInfo);
            //fetch customer-list data
            if (!isAppend)
                this.customerListPageInfo.resetPage();
            /** @type {?} */
            let data = yield this.customerService.getCustomerList(this.filterCriteria, this.customerListPageInfo).pipe(take(1)).toPromise();
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
            console.log("refreshCustomerList filterType:", this.filterType);
            this.customerList = [...this.sortCustomerList(this.customerList)];
            this.customerStoreService.setCustomerList(this.customerList);
            if (this.customerList.length > 0) {
                /** @type {?} */
                let clickItemFilter = this.customerList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.clientID === clientID));
                /** @type {?} */
                let targetClientID = clickItemFilter.length > 0 ? clientID : this.customerList[0].clientID;
                yield this.onGetCustomerDetailByID(targetClientID);
                this.refreshContactNote(false);
            }
            else {
                this.customerDetail = this.emptyCustomer;
                this.customerStoreService.setCurrentCustomerDetail(this.customerDetail);
            }
        });
    }
    /* integration contact-list */
    /**
     * @private
     * @param {?} isAppend
     * @return {?}
     */
    refreshContactNote(isAppend) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.customerClientID) {
                //if append data will next page
                if (!isAppend)
                    this.contactListPageInfo.resetPage();
                /** @type {?} */
                let data = yield this.customerService.getCustomerContactNote(this.customerDetail.ClientID, this.contactListPageInfo).toPromise();
                if (isAppend)
                    this.customerContactList = this.customerContactList.concat(data);
                else
                    this.customerContactList = data;
                console.debug('refreshContactNote success isRefreshContactList status');
            }
        });
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    sortCustomerList(list) {
        if (this.customerShowRule) {
            return this.customerShowRule.sortCustomerList(list);
        }
        else {
            return list.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.clone())).sort((/**
             * @param {?} n1
             * @param {?} n2
             * @return {?}
             */
            (n1, n2) => {
                /** @type {?} */
                let n1_name = StringUtils.isEmpty(n1.lastName) ? '' : n1.lastName;
                /** @type {?} */
                let n2_name = StringUtils.isEmpty(n2.lastName) ? '' : n2.lastName;
                return n1_name.localeCompare(n2_name);
            }));
        }
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    onGetCustomerContactListByID(clientID) {
        this.customerService.getCustomerContactNote(clientID, this.contactListPageInfo)
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.customerContactList = data;
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    onGetCustomerDetailByID(clientID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("onGetCustomerDetailByID clientID:", clientID);
            /** @type {?} */
            let data = yield this.customerService.getCustomerDetail(clientID).toPromise();
            console.log("onGetCustomerDetailByID data:", data);
            this.customerDetail = data;
            this.customerStoreService.setCurrentCustomerDetail(data);
        });
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
            this.customerStoreService.setCriteria(this.filterCriteria);
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
        this.filterCriteria.keyword = name;
        this.customerStoreService.setCriteria(this.filterCriteria);
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.clickItem = customerItem;
            //get CustomerDetail
            yield this.onGetCustomerDetailByID(customerItem.clientID);
            this.refreshContactNote(false);
            this.isShow = true;
        });
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
        this.refreshCustomerList(false, this.customerClientID);
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let _clientID = this.customerDetail.ClientID;
            this.customerList = this.customerList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.clientID != this.customerDetail.ClientID));
            if (this.customerList.length === 0) {
                this.customerDetail = this.emptyCustomer;
                this.customerStoreService.setCurrentCustomerDetail(this.customerDetail);
            }
            else {
                yield this.onGetCustomerDetailByID(this.customerList[0].clientID);
                this.refreshContactNote(false);
            }
            /** @type {?} */
            let data = yield this.customerService.deleteCustomerProfile(_clientID).toPromise();
            console.log("customerService.doDeleteCustomer()", data);
            if (data.status) {
                this.customerStoreService.setCustomerList(this.customerList);
                this.isShow = false;
                this.isDisplayDeletePopup = true;
            }
        });
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
        this.calendarEventDetail = new CalendarEventDetail('', '', customerClientID, '', '', null, 'N', currentTime, addMinutes(currentTime, 15), 'Y', '8', null, '', '', null);
        /** @type {?} */
        let queryDate = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), 0, 0, 0);
        this.calendarService.getCalendarEventList(queryDate, subMinutes(addDays(this.viewDate, 1), 1), '')
            .subscribe((/**
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
        if (!val) {
            this.isCalendarEditMetaDataDone = false;
        }
        this.isExpandEdit = val;
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    onSaveCalendarEvent(resp) {
        /** @type {?} */
        let type = resp.type;
        /** @type {?} */
        let data = resp.data;
        console.log("calendarEventDetail: ", data);
        if (type !== 'fail') {
            this.isDisplaySavePopup = true;
            this.onToggleAppointmentModal(false);
            this.calendarService.getCalendarEventDetail(data.ClientID).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.calendarEventDetail = data;
            }));
        }
        this.isSaveClick = false;
    }
    /**
     * @return {?}
     */
    addCustomer() {
        /** @type {?} */
        let detail = {};
        this.customerStoreService.setCurrentCustomerDetail(detail);
        this.customerStoreService.setState(CUSTOMER_STATE.EDIT);
        this.router.navigate("CustomerEdit");
    }
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    editCustomer(customerClientID) {
        this.customerStoreService.setState(CUSTOMER_STATE.EDIT);
        this.customerService.getCustomerDetail(customerClientID).subscribe((/**
         * @param {?} detail
         * @return {?}
         */
        (detail) => {
            console.log("editCustomer:", detail);
            console.log("Stringify:", JSON.stringify(detail));
            this.customerStoreService.setCurrentCustomerDetail(detail);
            //romove body fixed
            setTimeout((/**
             * @return {?}
             */
            () => {
                document.body.classList.remove("fixed-body-full-page");
            }), 200);
            this.router.navigate("CustomerEdit");
        }));
    }
    /**
     * @param {?} detail
     * @return {?}
     */
    followChange(detail) {
        this.customerService.updateCustomerFollowStatus(detail.clientID, detail.isFollow).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (this.filterCriteria) {
                this.customerService.checkInFilterCriteria(detail.clientID, this.filterCriteria).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => {
                    this.customerList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        if (item.clientID == detail.clientID) {
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
            x => x.clientID == detail.clientID)).forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                value.isFollow = detail.isFollow;
            }));
        }));
    }
    /**
     * @return {?}
     */
    addNote() {
        console.debug('addNote');
        this.currentEditNote = {
            ClientID: '',
            CustomerClientID: this.customerDetail.ClientID,
            NoteTime: Date.now(),
            DisplayDate: this.toNoteTime(new Date())
        };
        this.isPopupEditNote = true;
    }
    /**
     * @param {?} note
     * @return {?}
     */
    editNote(note) {
        console.debug('editNote', note);
        this.currentEditNote = Object.assign({}, note, {
            CustomerClientID: this.customerDetail.ClientID,
            NoteTime: Date.now(),
            DisplayDate: this.toNoteTime(new Date())
        });
        console.log("this.currentEditNote:", this.currentEditNote);
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
        this.customerContactDetail.Name = this.convertNameToShow(this.customerDetail.FirstName, this.customerDetail.LastName);
        this.isPopupNoteDetail = true;
    }
    /**
     * @param {?} note
     * @return {?}
     */
    deleteNote(note) {
        console.debug('deleteNote', note);
        this.currentEditNote = note;
        this.isPopupDeleteNote = true;
    }
    /**
     * @return {?}
     */
    doDeleteContact() {
        this.customerService.deleteCustomerContact(this.currentEditNote.ClientID).subscribe((/**
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
                x => x.ClientID != this.currentEditNote.ClientID));
                this.currentEditNote = null;
                this.isDisplayDeletePopup = true;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSaveNote(event) {
        this.contactSaveSubject.next();
    }
    /**
     * @param {?} note
     * @return {?}
     */
    onSaveNoteFinish(note) {
        this.isPopupEditNote = false;
        this.isDisplaySavePopup = true;
        this.isShowDetailScroll = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShowDetailScroll = true;
            this.refreshContactNote(false);
        }), 200);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    doAction(action) {
        console.log("doaction: ", action);
        if (this.needConfirmPopup) {
            this.isDisplayConfirmAlertPopup = true;
            this.isPopupConfirmDisable = true;
            this.confirmAction = action;
        }
        else {
            if (action == 'add') {
                this.addCustomer();
            }
            else if (action == 'import') {
                this.import();
            }
        }
    }
    /**
     * @return {?}
     */
    confirmPopup() {
        this.isPopupConfirmDisable = true;
        this.isDisplayConfirmAlertPopup = false;
        this.changeDetector.detectChanges();
        if (this.confirmAction === 'add')
            this.addCustomer();
        else if (this.confirmAction == 'import') {
            this.import();
        }
        this.confirmAction = null;
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
     * @private
     * @return {?}
     */
    importPopup() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let importList;
            try {
                importList = yield this.deviceService.searchContactsByName("");
                console.debug('import result ', importList);
                this.importContractMap.clear();
                //regroup
                importList.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    console.debug(element.LastName);
                    element = this.customerImportDisplay.convert(element);
                    /** @type {?} */
                    let name = this.convertNameToShow(element.FirstName, element.LastName).trim();
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
                this.isPopupImport = true;
            }
            catch (error) {
                console.warn('catch error', error);
                this.notificationMgr.pushNotification(NotificationType.ContactPermissionError, null);
                if (this.deviceService.getDevicePlatform() == 'iOS') {
                    this.deviceService.grantContactPermission();
                }
            }
        });
    }
    /**
     * @return {?}
     */
    import() {
        this.customerStoreService.setState(CUSTOMER_STATE.IMPORT);
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
        this.importSearchKeyword = keyword;
        /** @type {?} */
        let lowerCaseKeyword = this.importSearchKeyword.toLowerCase();
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
                let name = item.LastName + item.FirstName;
                name = name.toLowerCase();
                // console.debug(name);
                if (name.indexOf(lowerCaseKeyword) === -1) {
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
    onCloseImportPopup() {
        this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
        this.importSearchKeyword = '';
    }
    /**
     * @return {?}
     */
    doImport() {
        this.showCustomerList = false;
        this.customerService.importContact(this.importContactList).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            //alert("1"+JSON.parse(JSON.stringify(data)).status);
            //加點數
            if (this.addProgressPoint && this.importContactList.length > 0) {
                this.addProgressPoint.addCustomerPoint(this.importContactList.length);
            }
            this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
            /** @type {?} */
            let status = (JSON.parse(JSON.stringify(data))).status;
            if (status) {
                //clear list first, prevent lazyloading cache
                this.customerList = [];
                this.showCustomerList = true;
                this.isPopupImport = false;
                this.isDisplayImportSavePopup = true;
                this.mobileResultSize = 0;
                this.importSearchKeyword = '';
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
        this.customerStoreService.setCriteria(criteria);
        if (criteria.getOption("AsPreset")) {
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
        return this.customerService.getFilterCriteriaPreset().toPromise().then((/**
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
                    criteria.setOption("AsPreset", true);
                }
                else {
                    criteria.setOption("AsPreset", false);
                }
                this.filterCriteria = criteria;
            }
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
        //set timeout for refresh animation
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isRefreshFinishContent = true;
        }), 800);
    }
    // loading contact note 
    /**
     * @param {?} event
     * @return {?}
     */
    loadContent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('content loading this.customerList.length: ', this.customerList.length);
            if (this.customerList.length > 0) {
                this.contactListPageInfo.nextPage();
                yield this.refreshContactNote(true);
                this.isLoadingFinishContent = true;
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.isLoadingFinishContent = true;
                }), 0);
            }
        });
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
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        return this.customerUtils.convertNameToShow(firstName, lastName);
    }
    /**
     * @param {?} time
     * @return {?}
     */
    toNoteTime(time) {
        if (this.showRule) {
            return this.showRule.convertDateAndTime(time);
        }
        else {
            return this.dateUtils.toDateString(time, 'MM/dd/yyyy HH:mm');
        }
    }
    /**
     * @return {?}
     */
    onCalendarEditMetaDataDone() {
        this.isCalendarEditMetaDataDone = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    filterCriteriaPopupChange(event) {
        console.warn('filterCriteriaPopupChange event: ', event);
        this.isPopupFilter = event;
        if (this.isPopupFilter) {
            this.filterCriteria = this.filterCriteria.clone();
        }
    }
}
CustomersComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customers',
                template: "<app-ui-main-side-menu [title]=\"[language.customer | translate]\" [isShow]=\"isShow\"\n  (isShowChange)=\"isShowChange($event)\">\n\n  <div class=\"side-menu-content customer-side\" side-menu>\n    <!-- Title Block -->\n    <div class=\"title-main-block\">\n      <app-ui-title-style1>\n        <ng-container textType=\"titleText\">{{language.customerList |translate }}</ng-container>\n      </app-ui-title-style1>\n    </div>\n    <!-- Action Block-->\n    <div class=\"filter-all-block\">\n      <ul class=\"filter-block\" [ngClass]=\"classSearch ? ' ani-bar-move': ''\">\n        <li class=\"filter-item\">\n          <button id=\"btn_customerShowAddConfirm\" Action action=\"customerShowAddConfirm\"\n            (actionClick)=\"doAction('add')\">\n            <img src=\"assets/img/icon-customer-list-add.svg\" alt=\"\">\n          </button>\n        </li>\n        <li class=\"filter-item\">\n          <!-- import -->\n          <button id=\"btn_customerShowImportConfirm\" Action action=\"customerShowImportConfirm\"\n            (actionClick)=\"doAction('import')\">\n            <img src=\"assets/img/icon-customer-list-import.svg\" alt=\"\">\n          </button>\n          <!-- end of import -->\n        </li>\n        <!-- filter item -->\n        <li class=\"filter-item\">\n          <button id=\"btn_customerFilter\" Action action=\"customerFilter\" (actionClick)=\"filter()\">\n            <ng-container *ngIf=\"filterCriteria.getFilterMap().size != 0\">\n              <span class=\"num-block\">\n                <span class=\"num\">{{filterCriteria.getFilterMap().size}}</span>\n              </span>\n            </ng-container>\n            <img src=\"assets/img/icon-customer-list-filter.svg\" alt=\"\">\n          </button>\n        </li>\n        <!-- end of filter item -->\n        <li class=\"filter-item search-animate-block\" [ngClass]=\"classSearch\">\n          <button id=\"btn_customerSearch\" class=\"btn-search-open\" Action action=\"customerSearch\"\n            (actionClick)=\"toggleSearch()\">\n            <img src=\"assets/img/icon-customer-list-search.svg\" alt=\"\">\n          </button>\n          <div class=\"search-input-block input-block\" [ngClass]=\"this.isOpen ? 'open' : 'closed'\">\n            <app-ui-form-input [nxValue]=\"filterCriteria.keyword\" (nxValueChange)=\"searchCustomerName($event)\"\n              [placeholder]=\"[language.searchPlaceholder | translate]\"></app-ui-form-input>\n            <button id=\"btn_customerSearchCancel\" class=\"btn-search-cancel\" Action action=\"customerSearchCancel\"\n              (actionClick)=\"toggleSearch()\">\n              <nx-icon name='close-circle' size='s'></nx-icon>\n            </button>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <!-- Customer List Component -->\n    <app-customer-list *ngIf=\"showCustomerList\" [onClickCustomerID]=\"currentCustomer.ClientID\"\n      (customerClick)=\"onChangeCustomer($event)\" (customerLoad)=\"onCustomerLoad()\"\n      (customerRefresh)=\"onCustomerRefresh()\" [customerList]=\"customerList\" [filterType]=\"filterType\">\n    </app-customer-list>\n    <!-- end of Customer List Component -->\n\n  </div>\n\n  <div class=\"main-content stop-scroll-block\" main>\n\n    <app-ui-infinite-scroll [syncFunction]=\"['CUSTOMER']\" *ngIf=\"isShowDetailScroll\"\n      (loadingCallback)=\"loadContent($event)\" (refreshCallback)=\"refreshContent()\"\n      [(loadingFinish)]=\"isLoadingFinishContent\" [(refreshFinish)]=\"isRefreshFinishContent\"\n      [lazyLoading]=\"isLazyLoading\">\n\n\n      <!-- Customer Detail -->\n      <app-customer-detail [data]=\"customerDetail\" (followChange)=\"followChange($event)\"\n        (onDeleteDetail)=\"deleteCustomer($event)\" (onAddAppointment)=\"addAppointment($event)\"\n        (onCallPhone)=\"callCustomer($event)\" (onEditDetail)=\"editCustomer($event)\"></app-customer-detail>\n      <!-- end of Customer Detail -->\n\n      <!-- Customer Contact List -->\n      <app-customer-contact-list *ngIf=\"customerDetail&&customerList.length\" [contactList]=\"customerContactList\"\n        (onAddNote)=\"addNote()\" (onDisplayNote)=\"displayNote($event)\" (onEditNote)=\"editNote($event)\"\n        (onDeleteNote)=\"deleteNote($event)\">\n      </app-customer-contact-list>\n      <!-- end of Customer Contact List -->\n\n    </app-ui-infinite-scroll>\n  </div>\n\n\n  <!-- Popup -->\n  <div global-main>\n    <!-- side import -->\n    <app-ui-modal-style-text1 [(isPopupOpen)]=\"isPopupImport\" class=\"wd-md\" [isContnetFull]=\"true\"\n      (close)=\"onCloseImportPopup()\">\n\n      <ng-container textType=\"modal-title-detail\">{{language.importPhone |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <!-- still need space -->\n        <div class=\"space-normal top-search-block\">\n          <!-- search block -->\n          <app-ui-form-search [name]=\"'search'\" [placeholder]=\"[language.searchPlaceholder | translate]\"\n            [nxValue]=\"importSearchKeyword\" (nxValueChange)=\"refreshImport($event)\"></app-ui-form-search>\n          <!-- end of search block -->\n        </div>\n        <!-- end of still need space -->\n        <app-customer-import [importContractMap]=\"importContractMap\" (importCustomer)=\"onImportCustomer($event)\">\n        </app-customer-import>\n      </ng-container>\n      <ng-container textType=\"modal-btm-detail\">\n        <div class=\"btm-set-block\">\n          <span class=\"ps-text\">\n            {{mobileResultSize}} {{language.people|translate}}\n          </span>\n          <!-- btn -->\n          <app-ui-btn-layout>\n            <app-ui-btn [id]=\"'btn_customerContactImport'\" Action action=\"customerContactImport\"\n              (actionClick)=\"doImport()\" [btnHeight]=\"'sm'\">\n              <ng-container TextType=\"cust\">{{language.import|translate}}</ng-container>\n            </app-ui-btn>\n          </app-ui-btn-layout>\n          <!-- end of btn -->\n        </div>\n      </ng-container>\n    </app-ui-modal-style-text1>\n    <!-- end of side import-->\n\n    <!-- side Filter-->\n    <app-ui-modal-style-text1 class=\"wd-lg\" [isPopupOpen]=\"isPopupFilter\" (isPopupOpenChange)=\"filterCriteriaPopupChange($event)\">\n      <ng-container textType=\"modal-title-detail\">{{language.customerFilter |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <app-customer-filter [criteria]=\"filterCriteria\" (doneCriteria)=\"doneCriteria($event)\" [clear]=\"clearSubject\"\n          [save]=\"saveFilterSubject\"></app-customer-filter>\n      </ng-container>\n\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [name]=\"'btn-clear'\" [id]=\"'btn_customerContactClearFilter'\" Action\n            action=\"customerContactClearFilter\" (actionClick)=\"clearFilter()\" [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\">\n            <ng-container TextType=\"cust\">{{language.customerClear |translate }}</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [name]=\"'btn-filter'\" [id]=\"'btn_customerContactDoFilter'\" Action\n            action=\"customerContactClearFilter\" (actionClick)=\"doFilter()\" [btnHeight]=\"'sm'\">\n            <ng-container TextType=\"cust\">{{language.filter |translate }}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n    </app-ui-modal-style-text1>\n    <!-- end of side Filter -->\n\n    <div class=\"popup-appointment\">\n      <!-- appointment popup -->\n      <app-ui-modal-style-text1 [isBackdropClose]=\"true\" [(isPopupOpen)]=\"isExpandEdit\"\n        [hidden]=\"!isCalendarEditMetaDataDone\" class=\"wd-lg calendar-edit-content\"\n        (close)=\"onToggleAppointmentModal(false)\">\n        <ng-container textType=\"modal-title-detail\">{{language.customerAppointment |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <!-- TODO:ADD CALENDAR EDIT -->\n          <snd-calendar-edit *ngIf=\"isExpandEdit\" [clientID]=\"calendarEventDetail?calendarEventDetail.clientID :''\"\n            [customerClientID]=\"customerClientID\" [translateMap]=\"translateMap\"\n            [todayCalendarEvent]=\"viewDateCalendarEventList\" [isSaveClick]=\"isSaveClick\" [viewDate]=\"viewDate\"\n            (saveEvent)=\"onSaveCalendarEvent($event)\" (isMetaDataDone)=\"onCalendarEditMetaDataDone()\">\n          </snd-calendar-edit>\n        </ng-container>\n        <ng-container textType=\"modal-btm-detail\">\n          <app-ui-btn-layout>\n            <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" [id]=\"'btn_customerAppointmentSave'\" Action\n              action=\"customerAppointmentSave\" (actionClick)=\"onClickAppointmentSave()\">\n              <ng-container TextType=\"cust\">{{language.customerSave |translate }}</ng-container>\n            </app-ui-btn>\n          </app-ui-btn-layout>\n        </ng-container>\n      </app-ui-modal-style-text1>\n      <!-- end of appointment popup -->\n\n    </div>\n\n    <!-- contact popup -->\n    <app-ui-modal-style-img-base class=\"wd-sm\" [isHasBtmBlock]=\"false\" [isModalBtmHasSpace]=\"true\" [typeBtn]=\"'style3'\"\n      [(isPopupOpen)]=\"this.isPopupCallPhone\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='phone-o' size='auto' [fill]=\"false\" [outline]='false'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-title-detail\">{{language.selectNumber |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <ng-container *ngFor=\"let tel of callPhoneTelArray\">\n          <!-- tel 1  -->\n          <app-ui-link-bg [textTitle]=\"tel.telType | translate\" [text]=\"tel.tel\" (linkBtnClick)=\"callPhone(tel.tel)\">\n          </app-ui-link-bg>\n          <!-- end of tel 1 -->\n        </ng-container>\n      </ng-container>\n    </app-ui-modal-style-img-base>\n    <!-- end of contact popup -->\n\n    <!-- note detail -->\n    <ng-container *ngIf=\"customerContactDetail\">\n      <app-ui-modal-style-text1 class=\"wd-md\" [isHasBtmBlock]=\"false\" [(isPopupOpen)]=\"isPopupNoteDetail\">\n        <ng-container textType=\"modal-title-detail\">{{language.contactNote |translate }}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n          <div class=\"text-detail-block\">\n            <div class=\"img-text-block-horizon\">\n              <div class=\"img-block\">\n                <img src=\"assets/img/img-cust-profile.svg\">\n              </div>\n              <div class=\"text-block\">\n                <app-customer-contact-detail [data]=\"customerContactDetail\"></app-customer-contact-detail>\n              </div>\n            </div>\n\n          </div>\n\n        </ng-container>\n      </app-ui-modal-style-text1>\n    </ng-container>\n\n    <!-- end of note detail -->\n\n    <!-- add/edit note -->\n    <app-ui-modal-style-text1 class=\"wd-md\" [isBackdropClose]=\"true\" [(isPopupOpen)]=\"this.isPopupEditNote\"\n      [isMobileBtmBtnFix]=false [isHasBtmBlock]=false>\n      <ng-container textType=\"modal-title-detail\">{{language.contactNote |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <app-customer-contact-edit [data]=\"currentEditNote\" [saveSubject]=\"contactSaveSubject\"\n          (save)=\"onSaveNoteFinish($event)\"></app-customer-contact-edit>\n        <!-- btn -->\n        <app-ui-btn-layout>\n          <app-ui-btn [name]=\"'btn-note-save'\" [id]=\"'btn_customerNoteSave'\" Action action=\"customerNoteSave\"\n            (actionClick)=\"onSaveNote($event)\" [btnWd]=\"'md'\" [btnHeight]=\"'sm'\">\n            <ng-container TextType=\"cust\">{{language.customerSave |translate }}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n        <!-- end of btn -->\n      </ng-container>\n    </app-ui-modal-style-text1>\n    <!-- end of add note -->\n\n    <!--  save-->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isDisplaySavePopup\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.notificationSaveFeedback |translate }}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of save -->\n\n    <!-- import save-->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isDisplayImportSavePopup\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.completed| translate }}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of save -->\n\n    <!-- Delete Success -->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isDisplayDeletePopup\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.notificationDeleteFeedback | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of Delete Success -->\n\n\n    <!-- delete customer data -->\n    <app-ui-modal-confirm [(isPopupOpen)]=\"isDisplayDelCustomerPopup\" (onCancel)=\"cancelDelete()\"\n      (onConfirm)=\"doDeleteCustomer()\" [title]=\"[language.deleteDataTitle | translate]\"\n      [message]=\"[language.deleteDataBody | translate]\" [cancelBtnText]=\"[language.no | translate]\"\n      [confirmBtnText]=\"[language.yes | translate]\">\n    </app-ui-modal-confirm>\n    <!-- end of delete customer data -->\n\n    <!-- delete customer contact data -->\n    <app-ui-modal-confirm [(isPopupOpen)]=\"isPopupDeleteNote\" (onCancel)=\"cancelDelete()\"\n      (onConfirm)=\"doDeleteContact()\" [title]=\"[language.delete | translate]\"\n      [message]=\"[language.deleteDataBody | translate]\" [cancelBtnText]=\"[language.no | translate]\"\n      [confirmBtnText]=\"[language.yes | translate]\">\n    </app-ui-modal-confirm>\n    <!-- end of delete customer contact data -->\n\n    <!-- customer info alert -->\n    <app-ui-modal-style-img-base [(isPopupOpen)]=\"isDisplayInfoAlertPopup\">\n      <ng-container textType=\"modal-img-detail\">\n        <!-- <img src=\"assets/img/icon-cust-remind.svg\"> -->\n        <nx-icon name='product-people-connect' size='auto' [fill]=\"false\" [outline]='false'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-title-detail\">{{language.protectionTitle |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <app-ui-text-type [colorCode]=\"'#f5f5f5'\">\n          <p class=\"desc-sm\">\n            It will show the content Allianz provide. The dummy words are below:\n            After ten minutes with Ed Tettemer in the offices of the agency he founded with partner, Steve Red, you\n            begin to understand the agency\u2019s passion for excellence. After an hour with Ed, you begin to understand the\n            intensity of his personal passion. You begin to understand it but I have a feeling that, even after days and\n            days of exposure to him, you probably wouldn\u2019t get the whole picture.\n            <br />\n            \u201CPassion,\u201D the word, may seem descriptive of a complicated set of feelings and opinions. Oddly, in thinking\n            about Ed Tettemer\u2019s passion for his agency and its clients, it seems rather simple. It\u2019s just that he wants\n            everything to be excellent: excellent clients, excellent co-workers, excellent marketing solutions,\n            excellent creative executions, excellent everything.\n            <br />\n            \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the\n            response.) \u201CNever went to college. Dropped out of high school and never looked back. Got my college degree\n            at the Elkman agency and my graduate degree at Earle Palmer Brown.\u201D\n            <br />\n            \u201CWhere\u2019d you go to college, Ed?\u201D (A question most interviewers ask without expecting surprises in the\n            response.) \u201CNever went to\n            college. Dropped out of high school and never looked back. Got\n          </p>\n        </app-ui-text-type>\n      </ng-container>\n      <!-- end modal-content-detail -->\n      <ng-container textType=\"modal-btm-detail\">\n        <!-- btn -->\n        <app-ui-btn-layout>\n          <app-ui-btn class=\"btn-single-block\" [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\"\n            [btnWd]=\"'md'\" [id]=\"'btn_customerInfoAlertPopup'\" Action action=\"customerInfoAlertPopup\"\n            (actionClick)=\"isDisplayInfoAlertPopup = !isDisplayInfoAlertPopup\">\n            <ng-container TextType=\"cust\">{{language.customerConfirm |translate }}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n        <!-- end of btn -->\n      </ng-container>\n      <!-- end modal-btm-detail -->\n    </app-ui-modal-style-img-base>\n    <!-- end of customer info alert -->\n\n    <!-- customer confirm alert -->\n    <app-ui-modal-style-img-base class=\"popup-agree\" [(isPopupOpen)]=\"isDisplayConfirmAlertPopup\"\n      (onScrollContentBtm)=\"detectScroll($event)\" [isBackdropClose]=\"false\">\n      <ng-container textType=\"modal-img-detail\">\n        <!-- <img src=\"assets/img/icon-cust-remind.svg\"> -->\n        <nx-icon name='product-people-connect' size='auto' [fill]=\"false\" [outline]='false'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-title-detail\">{{language.protectionTitle |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <app-ui-text-type #confirmAlert [colorCode]=\"'#f5f5f5'\">\n          <p class=\"desc-sm\">{{language.addProtection | translate}}</p>\n        </app-ui-text-type>\n      </ng-container>\n      <!-- end modal-content-detail -->\n      <ng-container textType=\"modal-btm-detail\">\n        <!-- btn -->\n        <app-ui-btn-layout>\n          <app-ui-btn [isDisable]=\"isPopupConfirmDisable\" [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\"\n            [btnWd]=\"'md'\" [id]=\"'btn_customerConfirmPopup'\" Action action=\"customerConfirmPopup\"\n            (actionClick)=\"confirmPopup()\">\n            <ng-container TextType=\"cust\">{{language.customerConfirm |translate }}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n        <!-- end of btn -->\n      </ng-container>\n      <!-- end modal-btm-detail -->\n    </app-ui-modal-style-img-base>\n    <!-- end of customer confirm alert -->\n\n  </div>\n  <!-- end of Popup -->\n\n</app-ui-main-side-menu>",
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
                styles: [".filter-block{display:flex;padding:0 20px;list-style-type:none;align-content:center;flex-wrap:wrap}.filter-block ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.filter-block .filter-item{display:flex;align-items:center;max-width:40px;width:100%;margin-right:20px}.filter-block .filter-item:last-of-type{margin-right:0}.filter-block .filter-item>a,.filter-block .filter-item>button{display:inline-block;position:relative;width:100%;max-width:40px}.filter-block .filter-item a,.filter-block .filter-item button{background-color:transparent;border:none;padding:0}.filter-block .filter-item a:focus,.filter-block .filter-item button:focus{outline:0}.filter-block .filter-item a img,.filter-block .filter-item button img{width:40px;height:40px}.filter-block .filter-item .num-block{display:flex;width:20px;height:20px;background-color:#007ab3;border-radius:50%;justify-content:center;align-items:center;position:absolute;right:-5px;top:-5px}.filter-block .filter-item .num-block .num{color:#fff;font-weight:700;font-size:.75rem}.filter-block .search-animate-block{align-items:center}.filter-block .search-animate-block .search-input-block{display:inline-block;width:0;position:relative}.filter-block .search-animate-block ::ng-deep .nx-formfield__input{border-top:none;width:100%}.filter-block .search-animate-block ::ng-deep .btn-search-cancel{position:absolute;right:0;display:inline-block;width:44px;height:44px;top:-7px;text-align:right;opacity:0}.filter-block .search-animate-block ::ng-deep .btn-search-cancel nx-icon{font-size:16px;color:#c2c2c2;margin-right:10px}.filter-block .search-animate-block.active{max-width:calc(100vw - 30px);margin-left:0!important}.filter-block .search-animate-block.active .search-input-block{display:inline-block;width:100%}.filter-block .search-animate-block.active ::ng-deep .btn-search-cancel{display:inline-block;opacity:1}@media (min-width:769px){.filter-block .search-animate-block ::ng-deep .btn-search-cancel nx-icon{margin-right:5px}.filter-block .search-animate-block.active{max-width:210px}}.filter-all-block{position:relative;overflow:hidden;display:inline-block;width:100%;min-height:56px;margin-bottom:10px}.filter-block{transition:.2s;position:absolute;height:100%;left:0;width:1400px}.filter-block>.filter-item{transition:.2s}.filter-block.ani-bar-move{left:-187px}.filter-block.ani-bar-move .filter-item{opacity:0}.filter-block.ani-bar-move .filter-item.search-animate-block{opacity:1}@media (min-width:1024px){.filter-block .filter-item{margin-right:5px}.filter-block .filter-item:last-of-type{margin-right:0}.filter-block .filter-item button{max-width:30px}.filter-block .filter-item button img{width:30px;height:30px}.filter-block{width:500px}.filter-block.ani-bar-move{left:-137px}}@media screen and (min-width:1025px){.filter-block .filter-item{max-width:4vw}.filter-block .filter-item button{max-width:3vw}.filter-block .filter-item button img{width:3vw;height:3vw}.filter-block{width:50vw}.filter-block+.filter-block{margin-right:.5vw}.filter-block:last-of-type{margin-right:0}.filter-block.ani-bar-move{left:-13.7vw}.filter-block .search-animate-block.active{max-width:21vw}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.top-search-block{padding-top:20px;padding-left:20px;padding-right:20px}:host .popup-appointment ::ng-deep app-ui-modal-style-text1 .modal-block{padding-left:0;padding-right:0}:host .popup-appointment ::ng-deep app-ui-modal-style-text1 .modal-block .modal-content-block.style-fixed{margin-bottom:40px}:host .popup-appointment ::ng-deep app-ui-modal-style-text1 .modal-block .modal-content-block .btn-block{margin-top:40px}:host ::ng-deep app-ui-modal-style-text1 .modal-block .modal-content-block .btn-block{margin-top:40px}:host ::ng-deep app-customer-list,:host ::ng-deep app-ui-infinite-scroll{display:inline-block;width:100%;height:100%}:host ::ng-deep .ui-list-data{display:inline-block;width:100%}.customer-side.side-menu-content{color:#414141;max-height:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:hidden;width:100%;max-width:100%}.customer-side.side-menu-content .title-main-block{padding-left:15px;padding-right:20px}@media (max-width:1023px){.customer-side.side-menu-content{display:flex;flex-direction:column;height:calc(100vh - 55px - 55px)}.customer-side.side-menu-content app-customer-list{display:flex}.customer-side.side-menu-content .ui-list-data{display:inline-block;height:100%}}.main-content{box-sizing:border-box;height:100vh;position:static}.main-content ::ng-deep .scroll-content{background-color:#f5f5f5;overflow-x:hidden}@media (max-width:768px){.main-content{position:relative;padding-top:44px}}@media (max-width:767px){@supports (top:constant(safe-area-inset-top)){.main-content ::ng-deep .infiniti-scroll{max-height:calc(100vh - 44px - constant(safe-area-inset-top) - constant(safe-area-inset-bottom))}}@supports (top:env(safe-area-inset-top)){.main-content ::ng-deep .infiniti-scroll{max-height:calc(100vh - 44px - env(safe-area-inset-top) - env(safe-area-inset-bottom))}}}"]
            }] }
];
CustomersComponent.ctorParameters = () => [
    { type: CustomerService },
    { type: CalendarService },
    { type: TranslateService },
    { type: DeviceService },
    { type: DateUtils },
    { type: ProfileCodeService },
    { type: CustomerUtils },
    { type: AppRouter },
    { type: CustomerStoreService },
    { type: DefaultCustomerImportDisplay },
    { type: NotificationMgr },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ConfigToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerShowRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [addProgressPointToken,] }] }
];
CustomersComponent.propDecorators = {
    calendarEditComponent: [{ type: ViewChild, args: [CalendarEditComponent,] }]
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
    CustomersComponent.prototype.isShowDetailScroll;
    /** @type {?} */
    CustomersComponent.prototype.isShow;
    /** @type {?} */
    CustomersComponent.prototype.showCustomerList;
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
    CustomersComponent.prototype.isCalendarEditMetaDataDone;
    /** @type {?} */
    CustomersComponent.prototype.alertOverTimeList;
    /** @type {?} */
    CustomersComponent.prototype.alertAutoDeleteCustomer;
    /** @type {?} */
    CustomersComponent.prototype.isLoadingFinishContent;
    /** @type {?} */
    CustomersComponent.prototype.isRefreshFinishContent;
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
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype._filterCriteria;
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
    CustomersComponent.prototype.importSearchKeyword;
    /** @type {?} */
    CustomersComponent.prototype.isLoadCriteria;
    /** @type {?} */
    CustomersComponent.prototype.isClearCriteria;
    /** @type {?} */
    CustomersComponent.prototype._onImportResult;
    /** @type {?} */
    CustomersComponent.prototype.currentEditNote;
    /** @type {?} */
    CustomersComponent.prototype.isRefreshContactList;
    /** @type {?} */
    CustomersComponent.prototype.loadContactList;
    /** @type {?} */
    CustomersComponent.prototype.classBarMove;
    /** @type {?} */
    CustomersComponent.prototype.customerDetail;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.emptyCustomer;
    /** @type {?} */
    CustomersComponent.prototype.currentCustomer;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.confirmAction;
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
    CustomersComponent.prototype.unsubscribe$;
    /** @type {?} */
    CustomersComponent.prototype.clearSubject;
    /** @type {?} */
    CustomersComponent.prototype.saveFilterSubject;
    /** @type {?} */
    CustomersComponent.prototype.contactSaveSubject;
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
    CustomersComponent.prototype.customerUtils;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerStoreService;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerImportDisplay;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.showRule;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.customerShowRule;
    /**
     * @type {?}
     * @private
     */
    CustomersComponent.prototype.addProgressPoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxHQUFHLE1BQU0scUJBQXFCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQWUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQWdELGFBQWEsRUFBWSxlQUFlLEVBQXNCLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0UyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUs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LHdDQUF3RDs7Ozs7SUFDeEQsc0NBQTZEOzs7OztJQUM3RCw4Q0FBcUY7Ozs7O0lBQ3JGLDhDQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIE9wdGlvbmFsLCBJbmplY3QsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IExhbmd1YWdlLCBTdHJpbmdVdGlscywgRGF0ZVV0aWxzLCBQYWdlSW5mbywgRGV2aWNlU2VydmljZSwgUHJvZmlsZUNvZGUsIFByb2ZpbGVDb2RlU2VydmljZSwgVHJhbnNsYXRlU2VydmljZSwgQ29udGFjdEl0ZW0sIEV4dERhdGFQcm9jZXNzLCBEYXRhU3luY1NlcnZpY2UsIHNob3dSdWxlVG9rZW4sIHNob3dSdWxlLCBOb3RpZmljYXRpb25NZ3IsIE5vdGlmaWNhdGlvbk9iamVjdCwgQ29uZmlnVG9rZW4sIEFwcFJvdXRlciwgTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY2FsZW5kYXIvc2VydmljZS9jYWxlbmRhci1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudERldGFpbCB9IGZyb20gJy4uLy4uLy4uL2NhbGVuZGFyL3NlcnZpY2UvbW9kZWwvQ2FsZW5kYXJFdmVudERldGFpbCc7XG5pbXBvcnQgeyBDYWxlbmRhckVkaXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jYWxlbmRhci9jb21wb25lbnRzL2NhbGVuZGFyLWVkaXQvY2FsZW5kYXItZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJUZWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVyVGVsJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYSc7XG5pbXBvcnQgeyBDdXN0b21lckFsZXJ0SXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJBbGVydEl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJJbXBvcnRHcm91cCB9IGZyb20gJy4uL2JlYW4vY3VzdG9tZXItaW1wb3J0LWdyb3VwJztcbmltcG9ydCB7IGFkZERheXMsIGFkZEhvdXJzLCBhZGRNaW51dGVzLCBnZXREYXRlLCBnZXRIb3VycywgZ2V0TWludXRlcywgZ2V0TW9udGgsIGdldFllYXIsIHN1Yk1pbnV0ZXMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDVVNUT01FUl9TVEFURSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvY3VzdG9tZXJTdG9yZS9jdXN0b21lclN0b3JlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2N1c3RvbWVyLXV0aWxzJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9jdXN0b21lclN0b3JlL2N1c3RvbWVyU3RvcmUtc2VydmljZSc7XG5pbXBvcnQgeyBEZWZhdWx0Q3VzdG9tZXJJbXBvcnREaXNwbGF5IH0gZnJvbSAnLi9EZWZhdWx0Q3VzdG9tZXJJbXBvcnREaXNwbGF5JztcbmltcG9ydCB7IGFkZFByb2dyZXNzUG9pbnRUb2tlbiwgY3VzdG9tZXJTaG93UnVsZVRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IEFkZFByb2dyZXNzUG9pbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvQWRkUHJvZ3Jlc3NQb2ludCc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXN0b21lclNob3dSdWxlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0N1c3RvbWVyU2hvd1J1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVycy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoQmxvY2tBbmknLCBbXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMCcsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicpKVxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvL2ludGVyZ3JhdGlvbiBDYWxlbmRhciBNb2R1bGVcbiAgQFZpZXdDaGlsZChDYWxlbmRhckVkaXRDb21wb25lbnQpIGNhbGVuZGFyRWRpdENvbXBvbmVudDtcbiAgcHVibGljIHZpZXdUeXBlSW5kZXggPSAyOyAvLyAnbW9udGgnXG4gIHB1YmxpYyB2aWV3VHlwZTogc3RyaW5nO1xuICBwdWJsaWMgdmlld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICBwdWJsaWMgd2Vla1N0YXJ0c09uID0gMTsgLy8gTW9uZGF5IFxuICBwdWJsaWMgaXNTaG93RGV0YWlsU2Nyb2xsOiBib29sZWFuID0gdHJ1ZTtcblxuXG5cbiAgLy8gY29udHJvbCBtb2JpbGUgc2hvd1xuICBwdWJsaWMgaXNTaG93ID0gZmFsc2U7XG5cbiAgLy91c2UgdG8gZm9yY2UgcmVmcmVzaCBjdXN0b21lckxpc3RcbiAgcHVibGljIHNob3dDdXN0b21lckxpc3QgPSB0cnVlO1xuXG4gIC8vIHBvcHVwXG4gIHB1YmxpYyBpc0V4cGFuZERldGFpbCA9IGZhbHNlO1xuICBwdWJsaWMgaXNSZWZyZXNoRGV0YWlsID0gZmFsc2U7XG4gIHB1YmxpYyBpc1NhdmVDbGljayA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICAvL+WuouaItua4heWWrueahHNlYXJjaCBibG9jayBhbmltYXRlXG4gIHB1YmxpYyBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNsYXNzU2VhcmNoOiBzdHJpbmcgPSAnJztcblxuICAvL3BvcHVwIGNvbnRyb2xcbiAgcHVibGljIGlzRGlzcGxheUltcG9ydFNhdmVQb3B1cCA9IGZhbHNlOyAvL2ltcG9ydCBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5U2F2ZVBvcHVwID0gZmFsc2U7IC8vc2F2ZSBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5RGVsQ3VzdG9tZXJQb3B1cCA9IGZhbHNlOyAvL2RlbGV0ZSBjdXN0b21lciBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5Q29uZmlybUFsZXJ0UG9wdXAgPSBmYWxzZTsgLy9jb25maXJtIGFsZXJ0IHBvcHVwXG4gIHB1YmxpYyBpc0Rpc3BsYXlJbmZvQWxlcnRQb3B1cCA9IGZhbHNlOyAvL2luZm8gYWxlcnQgcG9wdXBcbiAgcHVibGljIGlzRGlzcGxheVVwZGF0ZVJlbWluZCA9IGZhbHNlOyAvL2FsZXJ0IGN1c3RvbWVyIG92ZXIgNiBtb250aCBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5RGVsZXRlUmVtaW5kID0gZmFsc2U7IC8vYWxlcnQgY3VzdG9tZXIgb3ZlciA2IG1vbnRoICYgN2RheSBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cEltcG9ydCA9IGZhbHNlOyAvL2ltcG9ydCBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cEZpbHRlciA9IGZhbHNlOyAvL2ZpbHRlciBwb3B1cFxuICBwdWJsaWMgaXNFeHBhbmRFZGl0ID0gZmFsc2U7IC8vIGFwcG9pbnRtZW50IHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwQ2FsbFBob25lID0gZmFsc2U7IC8vY2FsbCBjdXN0b21lciBwaG9uZSBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cE5vdGVEZXRhaWwgPSBmYWxzZTsgLy9jb250YWN0IGRldGFpbCBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cEVkaXROb3RlID0gZmFsc2U7IC8vYWRkL2VkaXQgY29udGFjdCBub3RlIHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwRGVsZXRlTm90ZSA9IGZhbHNlOyAvL2RlbGV0ZSBjb250YWN0IG5vdGUgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBDb25maXJtRGlzYWJsZSA9IHRydWU7IC8vIGNvbmZpcm1Qb3B1cCBidG4gaXMgZGlzYWJsZSBkZWZhdWx0XG4gIHB1YmxpYyBpc0Rpc3BsYXlEZWxldGVQb3B1cCA9IGZhbHNlOyAvL2RlbGV0ZSBzdWNjZXNzIHBvcHVwXG4gIHB1YmxpYyBpc0NhbGVuZGFyRWRpdE1ldGFEYXRhRG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vY29udHJvbCBvdmVydGltZSBjdXN0b21lciBsaXN0XG4gIHB1YmxpYyBhbGVydE92ZXJUaW1lTGlzdCA9IG5ldyBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4oKTtcblxuICAvL2NvbnRyb2wgYXV0byBkZWxldGUgY3VzdG9tZXIgbGlzdFxuICBwdWJsaWMgYWxlcnRBdXRvRGVsZXRlQ3VzdG9tZXIgPSBuZXcgQXJyYXk8Q3VzdG9tZXJBbGVydEl0ZW0+KCk7XG5cbiAgLy9jb250cm9sIHJlZnJlc2ggIGNvbnRlbnRcbiAgcHVibGljIGlzTG9hZGluZ0ZpbmlzaENvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzUmVmcmVzaEZpbmlzaENvbnRlbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vY29udHJvbFxuICBwdWJsaWMgaXNMYXp5TG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItZGV0YWlsIHVzZWRcbiAgLy9jYWxsIHBob25lIG9ialxuICBwdWJsaWMgY2FsbFBob25lVGVsQXJyYXk6IEFycmF5PEN1c3RvbWVyVGVsPjtcblxuICAvL2ludGVyZ3JhdGlvbiBjdXN0b21lci1jb250YWN0LWxpc3QgdXNlZFxuICAvL2N1c3RvbWVyIGNvbnRhY3QgZGV0YWlsIG9ialxuICBwdWJsaWMgY3VzdG9tZXJDb250YWN0RGV0YWlsOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgY3VzdG9tZXJDb250YWN0TGlzdDogQXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgY29udGFjdExpc3RQYWdlSW5mbyA9IG5ldyBQYWdlSW5mbygpO1xuXG4gIHB1YmxpYyBjYWxlbmRhckV2ZW50RGV0YWlsOiBDYWxlbmRhckV2ZW50RGV0YWlsO1xuICBwdWJsaWMgdmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdDogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4gPSBbXTtcblxuICBnZXQgY3VzdG9tZXJDbGllbnRJRCgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21lckRldGFpbCAmJiB0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElEKVxuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJEZXRhaWwuQ2xpZW50SUQ7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItbGlzdFxuICBwdWJsaWMgY3VzdG9tZXJMaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVySXRlbT4oKTtcbiAgcHVibGljIGNsaWNrSXRlbTogQ3VzdG9tZXJJdGVtO1xuICBwdWJsaWMgY3VzdG9tZXJMaXN0UGFnZUluZm8gPSBuZXcgUGFnZUluZm8oKTtcbiAgcHJpdmF0ZSBfZmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuXG4gIHB1YmxpYyBnZXQgZmlsdGVyQ3JpdGVyaWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlckNyaXRlcmlhO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsdGVyQ3JpdGVyaWEodmFsdWUpIHtcbiAgICB0aGlzLl9maWx0ZXJDcml0ZXJpYSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyBmaWx0ZXJUeXBlID0gJ05PTkUnO1xuXG4gIHB1YmxpYyBvcHRpb25NYXA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PigpO1xuICBwdWJsaWMgdHJhbnNsYXRlTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBwcml2YXRlIGRheVR5cGVzTGlzdDogQXJyYXk8c3RyaW5nPiA9IFsnQ3Jvc3NfRGF5JywgJ0FsbF9EYXknXTtcbiAgcHJpdmF0ZSBub1NjaGVkdWxlOiBzdHJpbmcgPSAnTm9fU2NoZWR1bGUnO1xuXG4gIHB1YmxpYyBhY3Rpdml0eVR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTsgLy8gRELkuK3miYDmnIlhY3Rpdml0eVR5cGVcbiAgcHVibGljIGFsZXJ0VHlwZUxpc3Q6IEFycmF5PFByb2ZpbGVDb2RlPiA9IFtdO1xuXG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItaW1wb3J0XG4gIHB1YmxpYyBpbXBvcnRDb250cmFjdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBDdXN0b21lckltcG9ydEdyb3VwPigpO1xuICBwdWJsaWMgbW9iaWxlUmVzdWx0U2l6ZTogbnVtYmVyID0gMDtcbiAgcHVibGljIGltcG9ydERhdGE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGltcG9ydENvbnRhY3RMaXN0OiBBcnJheTxDb250YWN0SXRlbT4gPSBbXTtcbiAgcHVibGljIGltcG9ydFNlYXJjaEtleXdvcmQ6IHN0cmluZyA9ICcnO1xuXG4gIC8vZmlsdGVyIGN1c3RvbWVyIGF0dHJpYnV0ZVxuICBwdWJsaWMgaXNMb2FkQ3JpdGVyaWE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ2xlYXJDcml0ZXJpYTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vaW1wb3J0IHJlc3VsdChzdWNjZXNzIHwgZmFpbCk7XG4gIHB1YmxpYyBfb25JbXBvcnRSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIC8vaW50ZXJncmF0aW9uIGN1c3RvbWVyLWVkaXQgdXNlZFxuICAvL2FkZC9lZGl0IGNvbnRhY3Qgbm90ZSBhdHRyaWJ1dGVcbiAgcHVibGljIGN1cnJlbnRFZGl0Tm90ZTogYW55ID0gbnVsbDtcbiAgcHVibGljIGlzUmVmcmVzaENvbnRhY3RMaXN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkQ29udGFjdExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG5cbiAgLy8gc2VhcmNoIGFuaW1hdGUgaW4gZmlsdGVyXG4gIHB1YmxpYyBjbGFzc0Jhck1vdmU6IHN0cmluZyA9ICcnO1xuXG4gIC8vaW50ZXJncmF0aW9uIGN1c3RvbWVyLWRldGFpbCB1c2VkXG4gIHB1YmxpYyBjdXN0b21lckRldGFpbDogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIGVtcHR5Q3VzdG9tZXI6IGFueSA9IHtcbiAgICBDbGllbnRJRDogJydcbiAgfTtcblxuICAvL2N1cnJlbnQgZWRpdCBjdXN0b21lciBJZFxuICBwdWJsaWMgY3VycmVudEN1c3RvbWVyOiBhbnkgPSB0aGlzLmVtcHR5Q3VzdG9tZXI7XG5cblxuXG4gIHB1YmxpYyBnZXQgbmVlZENvbmZpcm1Qb3B1cCgpIHtcbiAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHW1wiRU5WXCJdO1xuICAgIHJldHVybiB0aGlzLkFQUF9DT05GSUcgJiYgISF0aGlzLkFQUF9DT05GSUdbZW52XVtcIkNVU1RPTUVSX0FERF9BTk5PVU5DRVwiXTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlybUFjdGlvbiA9IG51bGw7XG5cblxuICAvLyBjdXJyZW50IGN1c3RvbWVyIHN0YXRlXG4gIHByaXZhdGUgY3VzdG9tZXJTdGF0ZTogQ1VTVE9NRVJfU1RBVEUgPSBDVVNUT01FUl9TVEFURS5GSVJTVDtcblxuICAvL3ByZSBzYXZlZCBjcml0ZXJpYVxuICBwcml2YXRlIHByZV9jcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG5cbiAgLy9wcmUgc2F2ZWQgY3VzdG9tZXJsaXN0XG4gIHByaXZhdGUgcHJlX2N1c3RvbWVyTGlzdDogQXJyYXk8Q3VzdG9tZXJJdGVtPjtcblxuICAvL3N1YnNjcmliZSBvZiBzdG9yZVxuICBwcml2YXRlIHVuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLy9zdWJqZWN0IG9mIGNsZWFyICYgc2F2ZSBmaWx0ZXJcbiAgcHVibGljIGNsZWFyU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBzYXZlRmlsdGVyU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBjb250YWN0U2F2ZVN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuXG5cbiAgLy9mb3IgZXh0ZW5zaW9uIHVzZWRcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGVVdGlsczogRGF0ZVV0aWxzLFxuICAgIHByaXZhdGUgcHJvZmlsZUNvZGVTZXJ2aWNlOiBQcm9maWxlQ29kZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXN0b21lclV0aWxzOiBDdXN0b21lclV0aWxzLFxuICAgIHByaXZhdGUgcm91dGVyOiBBcHBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjdXN0b21lclN0b3JlU2VydmljZTogQ3VzdG9tZXJTdG9yZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXN0b21lckltcG9ydERpc3BsYXk6IERlZmF1bHRDdXN0b21lckltcG9ydERpc3BsYXksXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25NZ3I6IE5vdGlmaWNhdGlvbk1ncixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dSdWxlVG9rZW4pIHByaXZhdGUgc2hvd1J1bGU6IHNob3dSdWxlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tZXJTaG93UnVsZVRva2VuKSBwcml2YXRlIGN1c3RvbWVyU2hvd1J1bGU6IEN1c3RvbWVyU2hvd1J1bGUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChhZGRQcm9ncmVzc1BvaW50VG9rZW4pIHByaXZhdGUgYWRkUHJvZ3Jlc3NQb2ludDogQWRkUHJvZ3Jlc3NQb2ludFxuXG4gICkge1xuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyIG5nT25EZXN0cm95IVwiKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJjdXN0b21lciBuZ09uaW5pdCFcIik7XG4gICAgdGhpcy5jb250YWN0TGlzdFBhZ2VJbmZvLnBhZ2VTaXplID0gNTtcbiAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0NhbGVuZGFyX1R5cGUnKTtcbiAgICB0aGlzLmFsZXJ0VHlwZUxpc3QgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0NhbGVuZGFyX1JlbWluZFRpbWUnKTtcbiAgICB0aGlzLm9wdGlvbk1hcC5zZXQoJ0NhbGVuZGFyX1R5cGUnLCB0aGlzLmFjdGl2aXR5VHlwZUxpc3QpO1xuICAgIHRoaXMub3B0aW9uTWFwLnNldCgnQ2FsZW5kYXJfUmVtaW5kVGltZScsIHRoaXMuYWxlcnRUeXBlTGlzdCk7XG5cbiAgICB0aGlzLmRheVR5cGVzTGlzdC5mb3JFYWNoKChkYXlUeXBlKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQoZGF5VHlwZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShkYXlUeXBlKSlcbiAgICB9KTtcbiAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQodGhpcy5ub1NjaGVkdWxlLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHRoaXMubm9TY2hlZHVsZSkpO1xuXG5cbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLmdldENyaXRlcmlhKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKChjcml0ZXJpYSkgPT4ge1xuICAgICAgICB0aGlzLnByZV9jcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgICAgfSlcblxuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2UuZ2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKGRldGFpbCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXIgb25zdWJzY3JpYmUgY3VycmVudEN1c3RvbWVyRGV0YWlsOlwiLCBkZXRhaWwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDdXN0b21lciA9IGRldGFpbDtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5nZXRDdXN0b21lckxpc3QoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMucHJlX2N1c3RvbWVyTGlzdCA9IGxpc3Q7XG4gICAgICB9KVxuXG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5nZXRTdGF0ZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZShhc3luYyAoc3RhdGUpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1haW4gc3RhdGU6IFwiLCBzdGF0ZSk7XG4gICAgICAgIGlmIChzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5FRElUX1NBVkVEICYmIHRoaXMuY3VzdG9tZXJTdGF0ZSAhPSBDVVNUT01FUl9TVEFURS5FRElUX1NBVkVEKSB7XG5cbiAgICAgICAgICAvL2FmdGVyIHNhdmVkLCBjaGVjayBpZiBjdXJyZW50IElEIGluIGNyaXRlcmlhXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5FRElUX1NBVkVEXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudEN1c3RvbWVyOiBcIiwgdGhpcy5jdXJyZW50Q3VzdG9tZXIpO1xuICAgICAgICAgIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdCA9IHRoaXMucHJlX2N1c3RvbWVyTGlzdDtcbiAgICAgICAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcmVfY3JpdGVyaWE7XG4gICAgICAgICAgbGV0IGhhc0NyaXRlcmlhID0gdGhpcy5wcmVfY3JpdGVyaWEuaGFzQ3JpdGVyaWEoKTtcbiAgICAgICAgICBsZXQgaW5Dcml0ZXJpYSA9IGZhbHNlO1xuICAgICAgICAgIGlmIChoYXNDcml0ZXJpYSlcbiAgICAgICAgICAgIGluQ3JpdGVyaWEgPSBhd2FpdCB0aGlzLmN1c3RvbWVyU2VydmljZS5jaGVja0luRmlsdGVyQ3JpdGVyaWEodGhpcy5jdXJyZW50Q3VzdG9tZXIuQ2xpZW50SUQsIHRoaXMucHJlX2NyaXRlcmlhKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jbGllbnRJRCA9PSB0aGlzLmN1cnJlbnRDdXN0b21lci5DbGllbnRJRCkge1xuICAgICAgICAgICAgICBpdGVtLmZpcnN0TmFtZSA9IHRoaXMuY3VycmVudEN1c3RvbWVyLkZpcnN0TmFtZTtcbiAgICAgICAgICAgICAgaXRlbS5sYXN0TmFtZSA9IHRoaXMuY3VycmVudEN1c3RvbWVyLkxhc3ROYW1lO1xuICAgICAgICAgICAgICBpdGVtLnRhZyA9IHRoaXMuY3VycmVudEN1c3RvbWVyLlBvc3NpYmlsaXR5O1xuICAgICAgICAgICAgICBpdGVtLmNvbXBsZW1lbnRQZXJjZW50ID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuQ29tcGxldGVuZXNzO1xuICAgICAgICAgICAgICBpZiAoaGFzQ3JpdGVyaWEpXG4gICAgICAgICAgICAgICAgaXRlbS5pc0hpZ2hMaWdodCA9ICFpbkNyaXRlcmlhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gWy4uLnRoaXMuc29ydEN1c3RvbWVyTGlzdCh0aGlzLmN1c3RvbWVyTGlzdCldO1xuICAgICAgICAgIGlmIChoYXNDcml0ZXJpYSlcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3VzdG9tZXJMaXN0KHRoaXMuY3VzdG9tZXJMaXN0KTtcblxuXG4gICAgICAgICAgYXdhaXQgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0aGlzLmN1cnJlbnRDdXN0b21lci5DbGllbnRJRCk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09IENVU1RPTUVSX1NUQVRFLkVESVQgJiYgdGhpcy5jdXN0b21lclN0YXRlICE9IENVU1RPTUVSX1NUQVRFLkVESVQgJiYgdGhpcy5jdXN0b21lclN0YXRlID09IENVU1RPTUVSX1NUQVRFLkZJUlNUKSB7XG4gICAgICAgICAgLy8gZWRpdC9jbGljayBwYWdlIGNsaWNrIGxhc3QgcGFnZVxuXG4gICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QgPSB0aGlzLnByZV9jdXN0b21lckxpc3Q7XG4gICAgICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMucHJlX2NyaXRlcmlhO1xuICAgICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmN1cnJlbnRDdXN0b21lci5DbGllbnRJRCkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25HZXRDdXN0b21lckRldGFpbEJ5SUQodGhpcy5jdXJyZW50Q3VzdG9tZXIuQ2xpZW50SUQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VzdG9tZXJTdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5GSVJTVCAmJiBzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5ESVNQTEFZKSB7XG4gICAgICAgICAgLy9maXJ0IGluLCBmZXRjaCBwcmVzZXQgZmlsdGVyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmN1c3RvbWVyU3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRklSU1QgJiYgc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRElTUExBWVwiKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQcmVzZXRDcml0ZXJpYSgpO1xuICAgICAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuQUREX1NBVkVEKSB7XG5cbiAgICAgICAgICAvL2FmdGVyIGFkZCAsIGdldCBwcmVfY3JpdGVyaWEgJiYgcmVmcmVzaCBjdXN0b21lcmxpc3RcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlID09IENVU1RPTUVSX1NUQVRFLkFERF9TQVZFRFwiLCB0aGlzLmN1cnJlbnRDdXN0b21lcik7XG4gICAgICAgICAgdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLnByZV9jcml0ZXJpYTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UsIHRoaXMuY3VycmVudEN1c3RvbWVyLkNsaWVudElEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5JTVBPUlQpIHtcbiAgICAgICAgICB0aGlzLmltcG9ydFBvcHVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXN0b21lclN0YXRlICE9IHN0YXRlKSB7XG4gICAgICAgICAgdGhpcy5jdXN0b21lclN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRTdGF0ZShDVVNUT01FUl9TVEFURS5ESVNQTEFZKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldFN0YXRlKENVU1RPTUVSX1NUQVRFLkRJU1BMQVkpO1xuXG4gICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuXG5cbiAgICB0aGlzLm5vdGlmaWNhdGlvbk1nci5zaG93Q2F0ZWdvcnlNZXNzYWdlKFwiQ3VzdG9tZXJcIik7XG4gIH1cblxuXG4gIGFzeW5jIHJlZnJlc2hDdXN0b21lckxpc3QoaXNBcHBlbmQ6IGJvb2xlYW4sIGNsaWVudElEID0gJycpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdyZWZyZXNoQ3VzdG9tZXJMaXN0IGFwcGVuZCcsIGlzQXBwZW5kLCBjbGllbnRJRCk7XG4gICAgY29uc29sZS5kZWJ1Zyh0aGlzLmZpbHRlckNyaXRlcmlhKTtcbiAgICBjb25zb2xlLmRlYnVnKHRoaXMuY3VzdG9tZXJMaXN0UGFnZUluZm8pO1xuXG4gICAgLy9mZXRjaCBjdXN0b21lci1saXN0IGRhdGFcbiAgICBpZiAoIWlzQXBwZW5kKSB0aGlzLmN1c3RvbWVyTGlzdFBhZ2VJbmZvLnJlc2V0UGFnZSgpO1xuXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckxpc3QodGhpcy5maWx0ZXJDcml0ZXJpYSwgdGhpcy5jdXN0b21lckxpc3RQYWdlSW5mbykucGlwZSh0YWtlKDEpKS50b1Byb21pc2UoKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgaW4gY3JpdGVyaWE6IFwiLCBkYXRhKTtcbiAgICBpZiAoIWlzQXBwZW5kKSB0aGlzLmN1c3RvbWVyTGlzdCA9IFsuLi5kYXRhXTtcbiAgICBlbHNlIHRoaXMuY3VzdG9tZXJMaXN0ID0gWy4uLnRoaXMuY3VzdG9tZXJMaXN0LCAuLi5kYXRhXTtcblxuICAgIGlmICgoIXRoaXMuZmlsdGVyQ3JpdGVyaWEuaGFzQ3JpdGVyaWEoKSkpIHtcbiAgICAgIHRoaXMuZmlsdGVyVHlwZSA9ICdOT05FJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclR5cGUgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuZmlsdGVyQ3JpdGVyaWEua2V5d29yZCkgPyAnU0VBUkNIJyA6ICdGSUxURVInO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hDdXN0b21lckxpc3QgZmlsdGVyVHlwZTpcIiwgdGhpcy5maWx0ZXJUeXBlKTtcblxuICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gWy4uLnRoaXMuc29ydEN1c3RvbWVyTGlzdCh0aGlzLmN1c3RvbWVyTGlzdCldO1xuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3VzdG9tZXJMaXN0KHRoaXMuY3VzdG9tZXJMaXN0KTtcblxuXG5cbiAgICBpZiAodGhpcy5jdXN0b21lckxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGNsaWNrSXRlbUZpbHRlciA9IHRoaXMuY3VzdG9tZXJMaXN0LmZpbHRlcih4ID0+IHguY2xpZW50SUQgPT09IGNsaWVudElEKTtcbiAgICAgIGxldCB0YXJnZXRDbGllbnRJRCA9IGNsaWNrSXRlbUZpbHRlci5sZW5ndGggPiAwID8gY2xpZW50SUQgOiB0aGlzLmN1c3RvbWVyTGlzdFswXS5jbGllbnRJRDtcbiAgICAgIGF3YWl0IHRoaXMub25HZXRDdXN0b21lckRldGFpbEJ5SUQodGFyZ2V0Q2xpZW50SUQpO1xuICAgICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwgPSB0aGlzLmVtcHR5Q3VzdG9tZXI7XG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldEN1cnJlbnRDdXN0b21lckRldGFpbCh0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICB9XG5cblxuICB9XG5cbiAgLyogaW50ZWdyYXRpb24gY29udGFjdC1saXN0ICovXG4gIHByaXZhdGUgYXN5bmMgcmVmcmVzaENvbnRhY3ROb3RlKGlzQXBwZW5kOiBib29sZWFuKSB7XG5cbiAgICBpZiAodGhpcy5jdXN0b21lckNsaWVudElEKSB7XG4gICAgICAvL2lmIGFwcGVuZCBkYXRhIHdpbGwgbmV4dCBwYWdlXG4gICAgICBpZiAoIWlzQXBwZW5kKSB0aGlzLmNvbnRhY3RMaXN0UGFnZUluZm8ucmVzZXRQYWdlKCk7XG5cbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZSh0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElELCB0aGlzLmNvbnRhY3RMaXN0UGFnZUluZm8pLnRvUHJvbWlzZSgpO1xuICAgICAgaWYgKGlzQXBwZW5kKVxuICAgICAgICB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QgPSB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QuY29uY2F0KGRhdGEpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QgPSBkYXRhO1xuXG4gICAgICBjb25zb2xlLmRlYnVnKCdyZWZyZXNoQ29udGFjdE5vdGUgc3VjY2VzcyBpc1JlZnJlc2hDb250YWN0TGlzdCBzdGF0dXMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgc29ydEN1c3RvbWVyTGlzdChsaXN0OiBBcnJheTxDdXN0b21lckl0ZW0+KTogQXJyYXk8Q3VzdG9tZXJJdGVtPiB7XG5cbiAgICBpZiAodGhpcy5jdXN0b21lclNob3dSdWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21lclNob3dSdWxlLnNvcnRDdXN0b21lckxpc3QobGlzdCk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbGlzdC5tYXAoeCA9PiB4LmNsb25lKCkpLnNvcnQoKG4xLCBuMikgPT4ge1xuICAgICAgICBsZXQgbjFfbmFtZSA9IFN0cmluZ1V0aWxzLmlzRW1wdHkobjEubGFzdE5hbWUpID8gJycgOiBuMS5sYXN0TmFtZTtcbiAgICAgICAgbGV0IG4yX25hbWUgPSBTdHJpbmdVdGlscy5pc0VtcHR5KG4yLmxhc3ROYW1lKSA/ICcnIDogbjIubGFzdE5hbWU7XG4gICAgICAgIHJldHVybiBuMV9uYW1lLmxvY2FsZUNvbXBhcmUobjJfbmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG5cbiAgb25HZXRDdXN0b21lckNvbnRhY3RMaXN0QnlJRChjbGllbnRJRCkge1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyQ29udGFjdE5vdGUoY2xpZW50SUQsIHRoaXMuY29udGFjdExpc3RQYWdlSW5mbylcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdCA9IGRhdGE7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEKGNsaWVudElEKSB7XG4gICAgY29uc29sZS5sb2coXCJvbkdldEN1c3RvbWVyRGV0YWlsQnlJRCBjbGllbnRJRDpcIiwgY2xpZW50SUQpO1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJEZXRhaWwoY2xpZW50SUQpLnRvUHJvbWlzZSgpO1xuICAgIGNvbnNvbGUubG9nKFwib25HZXRDdXN0b21lckRldGFpbEJ5SUQgZGF0YTpcIiwgZGF0YSk7XG4gICAgdGhpcy5jdXN0b21lckRldGFpbCA9IGRhdGE7XG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwoZGF0YSk7XG4gIH1cblxuICB0b2dnbGVTZWFyY2goKSB7XG4gICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgdGhpcy5jbGFzc1NlYXJjaCA9IHRoaXMuaXNPcGVuID8gJyBhY3RpdmUnIDogJydcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAvLyB0aGlzLmZpbHRlckNyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcbiAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEua2V5d29yZCA9ICcnO1xuICAgICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDcml0ZXJpYSh0aGlzLmZpbHRlckNyaXRlcmlhKTtcblxuICAgICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNlYXJjaCBrZXlwcmVzc1xuICBzZWFyY2hDdXN0b21lck5hbWUobmFtZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ3NlYXJjaEN1c3RvbWVyTmFtZScsIG5hbWUpO1xuXG4gICAgdGhpcy5maWx0ZXJDcml0ZXJpYS5rZXl3b3JkID0gbmFtZTtcbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldENyaXRlcmlhKHRoaXMuZmlsdGVyQ3JpdGVyaWEpO1xuICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG5cbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBpdGVtLm5hbWU7XG4gIH1cblxuXG4gIC8vd2hlbiBjdXN0b21lci1saXN0IGNsaWNrIGdldCBjbGljayBJdGVtXG4gIGFzeW5jIG9uQ2hhbmdlQ3VzdG9tZXIoY3VzdG9tZXJJdGVtOiBDdXN0b21lckl0ZW0pIHtcblxuICAgIHRoaXMuY2xpY2tJdGVtID0gY3VzdG9tZXJJdGVtO1xuXG5cblxuICAgIC8vZ2V0IEN1c3RvbWVyRGV0YWlsXG4gICAgYXdhaXQgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRChjdXN0b21lckl0ZW0uY2xpZW50SUQpO1xuICAgIHRoaXMucmVmcmVzaENvbnRhY3ROb3RlKGZhbHNlKTtcbiAgICB0aGlzLmlzU2hvdyA9IHRydWU7XG5cbiAgfVxuXG4gIC8vd2hlbiBjdXN0b21lci1saXN0IGZldGNoIG5leHQgcmVjb3JkXG4gIG9uQ3VzdG9tZXJMb2FkKCkge1xuICAgIHRoaXMuY3VzdG9tZXJMaXN0UGFnZUluZm8ubmV4dFBhZ2UoKTtcblxuICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdCh0cnVlKTtcbiAgfVxuXG4gIC8vd2hlbiBjdXN0b21lci1saXN0IHN5bmMgZGF0YSB0byBiYWNrZW5kXG4gIG9uQ3VzdG9tZXJSZWZyZXNoKCkge1xuICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSwgdGhpcy5jdXN0b21lckNsaWVudElEKTtcbiAgfVxuXG4gIGRlbGV0ZUN1c3RvbWVyKGN1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZykge1xuICAgIHRoaXMuaXNEaXNwbGF5RGVsQ3VzdG9tZXJQb3B1cCA9IHRydWU7XG4gIH1cblxuICBhc3luYyBkb0RlbGV0ZUN1c3RvbWVyKCkge1xuICAgIGxldCBfY2xpZW50SUQgPSB0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElEO1xuICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gdGhpcy5jdXN0b21lckxpc3QuZmlsdGVyKHggPT4geC5jbGllbnRJRCAhPSB0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElEKTtcbiAgICBpZiAodGhpcy5jdXN0b21lckxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsID0gdGhpcy5lbXB0eUN1c3RvbWVyO1xuICAgICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwodGhpcy5jdXN0b21lckRldGFpbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0aGlzLmN1c3RvbWVyTGlzdFswXS5jbGllbnRJRClcbiAgICAgIHRoaXMucmVmcmVzaENvbnRhY3ROb3RlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmRlbGV0ZUN1c3RvbWVyUHJvZmlsZShfY2xpZW50SUQpLnRvUHJvbWlzZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXJTZXJ2aWNlLmRvRGVsZXRlQ3VzdG9tZXIoKVwiLCBkYXRhKTtcblxuICAgIGlmIChkYXRhLnN0YXR1cykge1xuXG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldEN1c3RvbWVyTGlzdCh0aGlzLmN1c3RvbWVyTGlzdCk7XG5cbiAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzRGlzcGxheURlbGV0ZVBvcHVwID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBhZGRBcHBvaW50bWVudChjdXN0b21lckNsaWVudElEOiBzdHJpbmcpIHtcbiAgICBsZXQgY3VycmVudFRpbWU7IC8vIGFkanVzdCB0aW1lIHRvIG5leHQgaW50ZXJ2YWxcbiAgICBjdXJyZW50VGltZSA9IG5ldyBEYXRlKGdldFllYXIodGhpcy52aWV3RGF0ZSksIGdldE1vbnRoKHRoaXMudmlld0RhdGUpLCBnZXREYXRlKHRoaXMudmlld0RhdGUpLCBnZXRIb3VycyhuZXcgRGF0ZSgpKSwgZ2V0TWludXRlcyhuZXcgRGF0ZSgpKSk7XG4gICAgY3VycmVudFRpbWUgPSBhZGRNaW51dGVzKGN1cnJlbnRUaW1lLCAoNSAtIGdldE1pbnV0ZXMoY3VycmVudFRpbWUpICUgNSkpOyAgLy8gYWRqdXN0IG1pbnV0ZXMgdG8gbmV4dCA1IG1pbnV0ZXNcbiAgICBjdXJyZW50VGltZSA9IGFkZEhvdXJzKGN1cnJlbnRUaW1lLCAxKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBuZXcgQ2FsZW5kYXJFdmVudERldGFpbCgnJywgJycsIGN1c3RvbWVyQ2xpZW50SUQsICcnLCAnJywgbnVsbCwgJ04nLCBjdXJyZW50VGltZSwgYWRkTWludXRlcyhjdXJyZW50VGltZSwgMTUpLCAnWScsICc4JywgbnVsbCwgJycsICcnLCBudWxsKTtcbiAgICBsZXQgcXVlcnlEYXRlID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLnZpZXdEYXRlKSwgZ2V0TW9udGgodGhpcy52aWV3RGF0ZSksIGdldERhdGUodGhpcy52aWV3RGF0ZSksIDAsIDAsIDApO1xuICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldENhbGVuZGFyRXZlbnRMaXN0KHF1ZXJ5RGF0ZSwgc3ViTWludXRlcyhhZGREYXlzKHRoaXMudmlld0RhdGUsIDEpLCAxKSwgJycpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QgPSBkYXRhO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbCh0cnVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25DbGlja0FwcG9pbnRtZW50U2F2ZSgpIHtcbiAgICB0aGlzLmlzU2F2ZUNsaWNrID0gdHJ1ZTtcbiAgfVxuXG4gIG9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbCh2YWwpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhpcy5pc0NhbGVuZGFyRWRpdE1ldGFEYXRhRG9uZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmlzRXhwYW5kRWRpdCA9IHZhbDtcbiAgfVxuXG4gIG9uU2F2ZUNhbGVuZGFyRXZlbnQocmVzcCkge1xuICAgIGxldCB0eXBlID0gcmVzcC50eXBlO1xuICAgIGxldCBkYXRhID0gcmVzcC5kYXRhO1xuICAgIGNvbnNvbGUubG9nKFwiY2FsZW5kYXJFdmVudERldGFpbDogXCIsIGRhdGEpO1xuICAgIGlmICh0eXBlICE9PSAnZmFpbCcpIHtcbiAgICAgIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcbiAgICAgIHRoaXMub25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKGZhbHNlKTtcbiAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldENhbGVuZGFyRXZlbnREZXRhaWwoZGF0YS5DbGllbnRJRCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBkYXRhO1xuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5pc1NhdmVDbGljayA9IGZhbHNlO1xuICB9XG5cbiAgYWRkQ3VzdG9tZXIoKSB7XG5cbiAgICBsZXQgZGV0YWlsID0ge307XG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwoZGV0YWlsKTtcbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldFN0YXRlKENVU1RPTUVSX1NUQVRFLkVESVQpO1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXCJDdXN0b21lckVkaXRcIik7XG4gIH1cblxuICBlZGl0Q3VzdG9tZXIoY3VzdG9tZXJDbGllbnRJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRTdGF0ZShDVVNUT01FUl9TVEFURS5FRElUKTtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckRldGFpbChjdXN0b21lckNsaWVudElEKS5zdWJzY3JpYmUoKGRldGFpbDogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImVkaXRDdXN0b21lcjpcIiwgZGV0YWlsKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RyaW5naWZ5OlwiLCBKU09OLnN0cmluZ2lmeShkZXRhaWwpKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKGRldGFpbCk7XG5cbiAgICAgIC8vcm9tb3ZlIGJvZHkgZml4ZWRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZC1ib2R5LWZ1bGwtcGFnZVwiKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcIkN1c3RvbWVyRWRpdFwiKVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgZm9sbG93Q2hhbmdlKGRldGFpbCkge1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnVwZGF0ZUN1c3RvbWVyRm9sbG93U3RhdHVzKGRldGFpbC5jbGllbnRJRCwgZGV0YWlsLmlzRm9sbG93KS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbHRlckNyaXRlcmlhKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmNoZWNrSW5GaWx0ZXJDcml0ZXJpYShkZXRhaWwuY2xpZW50SUQsIHRoaXMuZmlsdGVyQ3JpdGVyaWEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNsaWVudElEID09IGRldGFpbC5jbGllbnRJRCkge1xuICAgICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ2NoYW5nZSBpc0hpZ2hMaWdodCBzdGF0dXMgaW4gZm9sbG93Jyk7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzSGlnaExpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pc0hpZ2hMaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXN0b21lckxpc3QuZmlsdGVyKHggPT4geC5jbGllbnRJRCA9PSBkZXRhaWwuY2xpZW50SUQpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLmlzRm9sbG93ID0gZGV0YWlsLmlzRm9sbG93O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGFkZE5vdGUoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnYWRkTm90ZScpO1xuICAgIHRoaXMuY3VycmVudEVkaXROb3RlID0ge1xuICAgICAgQ2xpZW50SUQ6ICcnLFxuICAgICAgQ3VzdG9tZXJDbGllbnRJRDogdGhpcy5jdXN0b21lckRldGFpbC5DbGllbnRJRCxcbiAgICAgIE5vdGVUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgRGlzcGxheURhdGU6IHRoaXMudG9Ob3RlVGltZShuZXcgRGF0ZSgpKVxuICAgIH07XG4gICAgdGhpcy5pc1BvcHVwRWRpdE5vdGUgPSB0cnVlO1xuICB9XG5cbiAgZWRpdE5vdGUobm90ZTogYW55KSB7XG4gICAgY29uc29sZS5kZWJ1ZygnZWRpdE5vdGUnLCBub3RlKTtcblxuICAgIHRoaXMuY3VycmVudEVkaXROb3RlID0gT2JqZWN0LmFzc2lnbih7fSwgbm90ZSwge1xuICAgICAgQ3VzdG9tZXJDbGllbnRJRDogdGhpcy5jdXN0b21lckRldGFpbC5DbGllbnRJRCxcbiAgICAgIE5vdGVUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgRGlzcGxheURhdGU6IHRoaXMudG9Ob3RlVGltZShuZXcgRGF0ZSgpKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmN1cnJlbnRFZGl0Tm90ZTpcIiwgdGhpcy5jdXJyZW50RWRpdE5vdGUpXG4gICAgdGhpcy5pc1BvcHVwRWRpdE5vdGUgPSB0cnVlO1xuXG4gIH1cblxuICBkaXNwbGF5Tm90ZShub3RlOiBhbnkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdkaXNwbGF5Tm90ZScsIG5vdGUpO1xuICAgIHRoaXMuY3VzdG9tZXJDb250YWN0RGV0YWlsID0gbm90ZTtcblxuICAgIC8vIGFkZCBjbGljayBjdXN0b21lciBuYW1lXG4gICAgdGhpcy5jdXN0b21lckNvbnRhY3REZXRhaWwuTmFtZSA9IHRoaXMuY29udmVydE5hbWVUb1Nob3codGhpcy5jdXN0b21lckRldGFpbC5GaXJzdE5hbWUsIHRoaXMuY3VzdG9tZXJEZXRhaWwuTGFzdE5hbWUpO1xuXG4gICAgdGhpcy5pc1BvcHVwTm90ZURldGFpbCA9IHRydWU7XG4gIH1cblxuXG4gIGRlbGV0ZU5vdGUobm90ZTogYW55KSB7XG4gICAgY29uc29sZS5kZWJ1ZygnZGVsZXRlTm90ZScsIG5vdGUpO1xuICAgIHRoaXMuY3VycmVudEVkaXROb3RlID0gbm90ZTtcblxuICAgIHRoaXMuaXNQb3B1cERlbGV0ZU5vdGUgPSB0cnVlO1xuICB9XG5cbiAgZG9EZWxldGVDb250YWN0KCkge1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmRlbGV0ZUN1c3RvbWVyQ29udGFjdCh0aGlzLmN1cnJlbnRFZGl0Tm90ZS5DbGllbnRJRCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXG4gICAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyU2VydmljZS5kZWxldGVOb3RlKClcIiwgZGF0YSk7XG5cbiAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QgPSB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QuZmlsdGVyKHggPT4geC5DbGllbnRJRCAhPSB0aGlzLmN1cnJlbnRFZGl0Tm90ZS5DbGllbnRJRCk7XG4gICAgICAgIHRoaXMuY3VycmVudEVkaXROb3RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXlEZWxldGVQb3B1cCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblNhdmVOb3RlKGV2ZW50KSB7XG4gICAgdGhpcy5jb250YWN0U2F2ZVN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgb25TYXZlTm90ZUZpbmlzaChub3RlKSB7XG4gICAgdGhpcy5pc1BvcHVwRWRpdE5vdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCA9IHRydWU7XG5cbiAgICB0aGlzLmlzU2hvd0RldGFpbFNjcm9sbCA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc1Nob3dEZXRhaWxTY3JvbGwgPSB0cnVlO1xuICAgICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICBkb0FjdGlvbihhY3Rpb24pIHtcblxuICAgIGNvbnNvbGUubG9nKFwiZG9hY3Rpb246IFwiLCBhY3Rpb24pO1xuICAgIGlmICh0aGlzLm5lZWRDb25maXJtUG9wdXApIHtcbiAgICAgIHRoaXMuaXNEaXNwbGF5Q29uZmlybUFsZXJ0UG9wdXAgPSB0cnVlO1xuICAgICAgdGhpcy5pc1BvcHVwQ29uZmlybURpc2FibGUgPSB0cnVlO1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uID0gYWN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChhY3Rpb24gPT0gJ2FkZCcpIHtcbiAgICAgICAgdGhpcy5hZGRDdXN0b21lcigpO1xuICAgICAgfVxuXG4gICAgICBlbHNlIGlmIChhY3Rpb24gPT0gJ2ltcG9ydCcpIHtcbiAgICAgICAgdGhpcy5pbXBvcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25maXJtUG9wdXAoKSB7XG4gICAgdGhpcy5pc1BvcHVwQ29uZmlybURpc2FibGUgPSB0cnVlO1xuICAgIHRoaXMuaXNEaXNwbGF5Q29uZmlybUFsZXJ0UG9wdXAgPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAodGhpcy5jb25maXJtQWN0aW9uID09PSAnYWRkJylcbiAgICAgIHRoaXMuYWRkQ3VzdG9tZXIoKTtcbiAgICBlbHNlIGlmICh0aGlzLmNvbmZpcm1BY3Rpb24gPT0gJ2ltcG9ydCcpIHtcbiAgICAgIHRoaXMuaW1wb3J0KCk7XG4gICAgfVxuICAgIHRoaXMuY29uZmlybUFjdGlvbiA9IG51bGw7XG4gIH1cblxuXG4gIC8vIGRldGVjdCBjb25maXJtIHBvcHVwIHRvIGNvbnRlbnQgYm90dG0gYW5kIHRoZSBidG4gY2FuIGNsaWNrXG4gIGRldGVjdFNjcm9sbChpc0J0bSkge1xuICAgIGNvbnNvbGUubG9nKCdpbiBkZXRlY3Qgc2Nyb2xsPT09JywgaXNCdG0pO1xuICAgIGlmIChpc0J0bSkge1xuICAgICAgdGhpcy5pc1BvcHVwQ29uZmlybURpc2FibGUgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG5cblxuICBwcml2YXRlIGFzeW5jIGltcG9ydFBvcHVwKCkge1xuICAgIGxldCBpbXBvcnRMaXN0O1xuICAgIHRyeSB7XG4gICAgICBpbXBvcnRMaXN0ID0gYXdhaXQgdGhpcy5kZXZpY2VTZXJ2aWNlLnNlYXJjaENvbnRhY3RzQnlOYW1lKFwiXCIpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnaW1wb3J0IHJlc3VsdCAnLCBpbXBvcnRMaXN0KTtcbiAgICAgIHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuY2xlYXIoKTtcbiAgICAgIC8vcmVncm91cFxuICAgICAgaW1wb3J0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGVsZW1lbnQuTGFzdE5hbWUpO1xuICAgICAgICBlbGVtZW50ID0gdGhpcy5jdXN0b21lckltcG9ydERpc3BsYXkuY29udmVydChlbGVtZW50KTtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmNvbnZlcnROYW1lVG9TaG93KGVsZW1lbnQuRmlyc3ROYW1lLCBlbGVtZW50Lkxhc3ROYW1lKS50cmltKCk7XG4gICAgICAgIGlmIChuYW1lICE9IG51bGwgJiYgbmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGZpcnN0V29yZCA9IG5hbWUuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICAgIGZpcnN0V29yZCA9IGZpcnN0V29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2ZpcnN0V29yZCA9JyArIGZpcnN0V29yZCk7XG4gICAgICAgICAgbGV0IGdyb3VwOiBDdXN0b21lckltcG9ydEdyb3VwID0gdGhpcy5pbXBvcnRDb250cmFjdE1hcC5nZXQoZmlyc3RXb3JkKTtcbiAgICAgICAgICBpZiAoZ3JvdXAgPT0gdW5kZWZpbmVkKSBncm91cCA9IG5ldyBDdXN0b21lckltcG9ydEdyb3VwKGZpcnN0V29yZCk7XG4gICAgICAgICAgZ3JvdXAuYWRkSXRlbShlbGVtZW50KTtcbiAgICAgICAgICB0aGlzLmltcG9ydENvbnRyYWN0TWFwLnNldChmaXJzdFdvcmQsIGdyb3VwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmRlYnVnKCdpbXBvcnRDb250cmFjdE1hcCcsIHRoaXMuaW1wb3J0Q29udHJhY3RNYXApO1xuICAgICAgdGhpcy5pc1BvcHVwSW1wb3J0ID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKCdjYXRjaCBlcnJvcicsIGVycm9yKTtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uTWdyLnB1c2hOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uVHlwZS5Db250YWN0UGVybWlzc2lvbkVycm9yLCBudWxsKTtcbiAgICAgIGlmICh0aGlzLmRldmljZVNlcnZpY2UuZ2V0RGV2aWNlUGxhdGZvcm0oKSA9PSAnaU9TJykge1xuICAgICAgICB0aGlzLmRldmljZVNlcnZpY2UuZ3JhbnRDb250YWN0UGVybWlzc2lvbigpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgaW1wb3J0KCkge1xuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0U3RhdGUoQ1VTVE9NRVJfU1RBVEUuSU1QT1JUKTtcbiAgfVxuXG4gIC8vY29udHJvbCBpbXBvcnQgcG9wdXAgaXMgZGlzcGxheVxuICBkaXNwbGF5SW1wb3J0UG9wdXAoaXNTaG93OiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1BvcHVwSW1wb3J0ID0gaXNTaG93O1xuICB9XG5cbiAgLy93aGVuIGtleXByZXNzIGtleXdvcmQgcmVmcmVzaCBjb250cmFjdCBsaXN0XG4gIHJlZnJlc2hJbXBvcnQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pbXBvcnRTZWFyY2hLZXl3b3JkID0ga2V5d29yZDtcbiAgICBsZXQgbG93ZXJDYXNlS2V5d29yZCA9IHRoaXMuaW1wb3J0U2VhcmNoS2V5d29yZC50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuZm9yRWFjaCgoZ3JvdXA6IEN1c3RvbWVySW1wb3J0R3JvdXAsIGdyb3VwTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhncm91cE5hbWUsIGdyb3VwKTtcblxuICAgICAgZ3JvdXAuaXNTaG93ID0gZmFsc2U7XG4gICAgICBncm91cC5nZXRJdGVtcy5mb3JFYWNoKChpdGVtOiBDb250YWN0SXRlbSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCdpdGVtJyxpdGVtKTtcbiAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IGl0ZW0uTGFzdE5hbWUgKyBpdGVtLkZpcnN0TmFtZTtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhuYW1lKTtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihsb3dlckNhc2VLZXl3b3JkKSA9PT0gLTEpIHtcbiAgICAgICAgICBpdGVtLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGl0ZW0uaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgICBncm91cC5pc1Nob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgb25DbG9zZUltcG9ydFBvcHVwKCkge1xuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0U3RhdGUoQ1VTVE9NRVJfU1RBVEUuRElTUExBWSk7XG4gICAgdGhpcy5pbXBvcnRTZWFyY2hLZXl3b3JkID0gJyc7XG4gIH1cblxuICBkb0ltcG9ydCgpIHtcbiAgICB0aGlzLnNob3dDdXN0b21lckxpc3QgPSBmYWxzZTtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5pbXBvcnRDb250YWN0KHRoaXMuaW1wb3J0Q29udGFjdExpc3QpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIC8vYWxlcnQoXCIxXCIrSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkuc3RhdHVzKTtcbiAgICAgIC8v5Yqg6bue5pW4XG4gICAgICBpZiAodGhpcy5hZGRQcm9ncmVzc1BvaW50ICYmIHRoaXMuaW1wb3J0Q29udGFjdExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmFkZFByb2dyZXNzUG9pbnQuYWRkQ3VzdG9tZXJQb2ludCh0aGlzLmltcG9ydENvbnRhY3RMaXN0Lmxlbmd0aCk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldFN0YXRlKENVU1RPTUVSX1NUQVRFLkRJU1BMQVkpO1xuICAgICAgbGV0IHN0YXR1cyA9IChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKSkuc3RhdHVzO1xuXG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIC8vY2xlYXIgbGlzdCBmaXJzdCwgcHJldmVudCBsYXp5bG9hZGluZyBjYWNoZVxuICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnNob3dDdXN0b21lckxpc3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUG9wdXBJbXBvcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXlJbXBvcnRTYXZlUG9wdXAgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vYmlsZVJlc3VsdFNpemUgPSAwO1xuICAgICAgICB0aGlzLmltcG9ydFNlYXJjaEtleXdvcmQgPSAnJztcblxuICAgICAgICAvL3JlZnJlc2ggY3VzdG9tZXIgbGlzdFxuICAgICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG5cbiAgLyogY3VzdG9tZXItaW1wb3J0Ki9cbiAgb25JbXBvcnRDdXN0b21lcihpbXBvcnRJdGVtcykge1xuICAgIGNvbnNvbGUuZGVidWcoJ2ltcG9ydEl0ZW1zJywgaW1wb3J0SXRlbXMpO1xuXG4gICAgdGhpcy5pbXBvcnRDb250YWN0TGlzdCA9IGltcG9ydEl0ZW1zO1xuICAgIHRoaXMubW9iaWxlUmVzdWx0U2l6ZSA9IGltcG9ydEl0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIC8vY2FsbCBjdXN0b21lciBmdW5jdGlvblxuICBjYWxsQ3VzdG9tZXIoY3VzdG9tZXJDbGllbnRJRDogc3RyaW5nKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnY2FsbEN1c3RvbWVyID0gJyArIGN1c3RvbWVyQ2xpZW50SUQpO1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyQ29udGFjdFRlbChjdXN0b21lckNsaWVudElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmNhbGxQaG9uZVRlbEFycmF5ID0gZGF0YTtcblxuICAgICAgLy9jaGVjayBudW1iZXIgYXJyYXkgaXMgc2luZ2xlXG4gICAgICBpZiAodGhpcy5jYWxsUGhvbmVUZWxBcnJheS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgIC8vb25seSBvbmUgbnVtYmVyIGp1c3QgdG8gY2FsbCBvdXRcbiAgICAgICAgaWYgKHRoaXMuY2FsbFBob25lVGVsQXJyYXkubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICB0aGlzLmNhbGxQaG9uZSh0aGlzLmNhbGxQaG9uZVRlbEFycmF5WzBdLnRlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwQ2FsbFBob25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vY2FuY2VsIGNhbGxwaG9uZSBwb3B1cFxuICBjYW5jZWxDYWxsUGhvbmUoKSB7XG4gICAgdGhpcy5pc1BvcHVwQ2FsbFBob25lID0gIXRoaXMuaXNQb3B1cENhbGxQaG9uZTtcbiAgfVxuXG4gIC8vY2FsbCBudW1iZXIgZnJvbSBwaG9uZVxuICBjYWxsUGhvbmUodGVsTnVtYmVyOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdjYWxsUGhvbmUnLCB0ZWxOdW1iZXIpO1xuXG5cbiAgICAvL2NhbGwgcGhvbmUgY2xvc2UgcG9wdXBcbiAgICBpZiAodGhpcy5pc1BvcHVwQ2FsbFBob25lKSB0aGlzLmlzUG9wdXBDYWxsUGhvbmUgPSAhdGhpcy5pc1BvcHVwQ2FsbFBob25lO1xuXG5cbiAgICB3aW5kb3cub3BlbigndGVsOicgKyB0ZWxOdW1iZXIsICdfc3lzdGVtJyk7XG5cbiAgICAvL3BvcHVwIGNvbnRhY3Qgbm90ZVxuICAgIHNldFRpbWVvdXQoKGZ1bikgPT4ge1xuICAgICAgdGhpcy5hZGROb3RlKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG4gIC8vb3BlbiBmaWx0ZXIgcG9wdXBcbiAgZmlsdGVyKCkge1xuICAgIHRoaXMuaXNQb3B1cEZpbHRlciA9IHRydWU7XG4gIH1cblxuICAvL2NsZWFyIGZpbHRlciBpdGVtXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMuY2xlYXJTdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG5cbiAgLy9maWx0ZXIgY3VzdG9tZXIgbGlzdCBhbmQgY2xvc2UgcG9wdXBcbiAgZG9GaWx0ZXIoKSB7XG4gICAgdGhpcy5zYXZlRmlsdGVyU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBkb25lQ3JpdGVyaWEoY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdkb25lQ3JpdGVyaWEnLCBjcml0ZXJpYSk7XG4gICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgIHRoaXMuaXNQb3B1cEZpbHRlciA9IGZhbHNlO1xuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3JpdGVyaWEoY3JpdGVyaWEpO1xuICAgIGlmIChjcml0ZXJpYS5nZXRPcHRpb24oXCJBc1ByZXNldFwiKSkge1xuICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2Uuc2F2ZUZpbHRlckNyaXRlcmlhKGNyaXRlcmlhKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2RvbmVDcml0ZXJpYSBzYXZlRmlsdGVyQ3JpdGVyaWEnLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICB9XG5cbiAgbG9hZFByZXNldENyaXRlcmlhKCkge1xuICAgIC8vY2hlY2sgaGFzIHByZXNldFxuICAgIGxldCBjcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG5cbiAgICByZXR1cm4gdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0RmlsdGVyQ3JpdGVyaWFQcmVzZXQoKS50b1Byb21pc2UoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnZ2V0ZmlsdGVyQ3JpdGVyaWFQcmVzZXQnLCBkYXRhKTtcblxuICAgICAgaWYgKGRhdGEgIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgY29sdW1uIGluIGRhdGEpIHtcbiAgICAgICAgICBsZXQgdmFsdWVzID0gZGF0YVtjb2x1bW5dO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2NvbHVtbicsIGNvbHVtbiwgJ2FycmF5cycsIHZhbHVlcyk7XG4gICAgICAgICAgY3JpdGVyaWEuYWRkQ3JpdGVyaWFDb2xzKGNvbHVtbiwgdmFsdWVzKTtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICBjcml0ZXJpYS5zZXRPcHRpb24oXCJBc1ByZXNldFwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjcml0ZXJpYS5zZXRPcHRpb24oXCJBc1ByZXNldFwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IGNyaXRlcmlhO1xuXG4gICAgICB9XG4gICAgfSk7XG5cblxuICB9XG5cblxuICBjYW5jZWxEZWxldGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbmNlbERlbGV0ZScpO1xuICB9XG5cbiAgLy8gcmVmcmVhc2ggY29udGVudFxuICByZWZyZXNoQ29udGVudCgpIHtcbiAgICAvL3NldCB0aW1lb3V0IGZvciByZWZyZXNoIGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc1JlZnJlc2hGaW5pc2hDb250ZW50ID0gdHJ1ZTtcbiAgICB9LCA4MDApO1xuXG4gIH1cblxuXG4gIC8vIGxvYWRpbmcgY29udGFjdCBub3RlIFxuICBhc3luYyBsb2FkQ29udGVudChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGxvYWRpbmcgdGhpcy5jdXN0b21lckxpc3QubGVuZ3RoOiAnLCB0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGgpO1xuICAgIGlmICh0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbnRhY3RMaXN0UGFnZUluZm8ubmV4dFBhZ2UoKTtcbiAgICAgIGF3YWl0IHRoaXMucmVmcmVzaENvbnRhY3ROb3RlKHRydWUpO1xuICAgICAgdGhpcy5pc0xvYWRpbmdGaW5pc2hDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmdGaW5pc2hDb250ZW50ID0gdHJ1ZTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICB9XG5cblxuXG4gIC8vaXNTaG93Q2hhbmdlXG4gIGlzU2hvd0NoYW5nZSh2YWwpIHtcbiAgICBpZiAodGhpcy5pc1Nob3cgIT09IHZhbCkge1xuICAgICAgdGhpcy5pc1Nob3cgPSB2YWw7XG4gICAgICAvLyB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0TmFtZVRvU2hvdyhmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJVdGlscy5jb252ZXJ0TmFtZVRvU2hvdyhmaXJzdE5hbWUsIGxhc3ROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyB0b05vdGVUaW1lKHRpbWU6IERhdGUpIHtcbiAgICBpZiAodGhpcy5zaG93UnVsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydERhdGVBbmRUaW1lKHRpbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVVdGlscy50b0RhdGVTdHJpbmcodGltZSwgJ01NL2RkL3l5eXkgSEg6bW0nKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbGVuZGFyRWRpdE1ldGFEYXRhRG9uZSgpIHtcbiAgICB0aGlzLmlzQ2FsZW5kYXJFZGl0TWV0YURhdGFEb25lID0gdHJ1ZTtcbiAgfVxuXG5cbiAgZmlsdGVyQ3JpdGVyaWFQb3B1cENoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUud2FybignZmlsdGVyQ3JpdGVyaWFQb3B1cENoYW5nZSBldmVudDogJywgZXZlbnQpO1xuICAgIHRoaXMuaXNQb3B1cEZpbHRlciA9IGV2ZW50O1xuICAgIGlmICh0aGlzLmlzUG9wdXBGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLmZpbHRlckNyaXRlcmlhLmNsb25lKCk7XG4gICAgfVxuICB9XG5cblxufVxuIl19