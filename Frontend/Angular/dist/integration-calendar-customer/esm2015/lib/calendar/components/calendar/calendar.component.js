/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, ElementRef, ChangeDetectorRef, EventEmitter, Output, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CalendarService } from '../../service/calendar-service.service';
import { CalendarEventDetail } from '../../service/model/CalendarEventDetail';
import { addDays, addHours, addMinutes, getDate, getHours, getMinutes, getMonth, getYear, isSameMonth, subMinutes, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay } from 'date-fns';
import { ProfileCodeService, PageInfo, DataSyncService } from '@allianzSND/core';
import { SettingService } from '@allianzSND/core';
import { Setting } from '@allianzSND/core';
import { UiInformationBtnComponent, ModalManager } from '@allianzSND/ui';
import { StringUtils, SelectOption } from '@allianzSND/core';
import { ChangeAction } from '@allianzSND/core';
import { UiInformationContentComponent } from '@allianzSND/ui';
import { Language } from '@allianzSND/core';
import { TranslateService } from '@allianzSND/core';
import { CustomerFilterCriteria } from '../../../customer/components/bean/customer-filter-criteria';
import { CustomerService } from '../../../customer/service/customer-service.service';
import { CustomerUtils } from '../../../customer/utils/customer-utils';
export class CalendarComponent {
    /**
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} settingService
     * @param {?} translateService
     * @param {?} calendarService
     * @param {?} profileCodeService
     * @param {?} customerService
     * @param {?} customerUtils
     * @param {?} modalManager
     * @param {?} dataSyncService
     */
    constructor(changeDetector, elementRef, settingService, translateService, calendarService, profileCodeService, customerService, customerUtils, modalManager, dataSyncService) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.settingService = settingService;
        this.translateService = translateService;
        this.calendarService = calendarService;
        this.profileCodeService = profileCodeService;
        this.customerService = customerService;
        this.customerUtils = customerUtils;
        this.modalManager = modalManager;
        this.dataSyncService = dataSyncService;
        //two-way binding
        this._parentHeight = 0;
        this.parentHeightChange = new EventEmitter();
        this.YEAR = 'year';
        this.MONTH = 'month';
        this.WEEK = 'week';
        this.DAY = 'day';
        //calendar-ui config setting
        this.viewTypeIndex = 2; // 'month'
        this.viewType = this.MONTH; //
        this.viewDate = new Date(); //current date
        this.weekStartsOn = 1; // Monday
        //count content height
        this.calendarHeight = 0;
        //click calendar id
        this.clientID = '';
        this.translateMap = new Map();
        this.optionMap = new Map();
        this.customerItemList = [];
        this.storeStartDate = new Date();
        this.storeEndDate = new Date();
        this.calendarEventList = []; // eventList
        this.calendarEventListAfterFilter = []; // filter後 event
        this.viewDateCalendarEventList = [];
        this.calendarEventEdit = null;
        this.customerClientMap = new Map();
        // private calendarEventMap = new CalendarEventMap();
        this.activityTypeList = []; // DB中所有activityType
        this.alertTypeList = [];
        this.language = new Language();
        this.currentFilterOptionList = [];
        // popup
        this.isExpandFilter = false;
        this.isExpandDetail = false;
        this.isExpandEdit = false;
        this.isDelete = false;
        this.isSave = false;
        this.isSaveClick = false;
        this.isCalendarDelete = false;
        this.isLoading = false;
        this.isCalendarEditMetaDataDone = false;
        this.isCalendarDetailMetaDataDone = false;
        // translate
        this.dayTypesList = ['Cross_Day', 'All_Day'];
        this.weekdaysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.noSchedule = 'No_Schedule';
        // info config
        //避免父層其他 position relative 引響 info
        this.outsideSpace = {
            top: 0,
            left: 0
        };
        //info content 左右最小padding
        this.paddindData = {
            top: 10,
            right: 10,
            bottom: 10,
            left: window.innerWidth > 1023 ? 170 : 10
        };
    }
    /**
     * @return {?}
     */
    get parentHeight() {
        return this._parentHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set parentHeight(val) {
        this._parentHeight = val;
        if (this._parentHeight == 0) {
            this._parentHeight = window.innerHeight;
        }
        this.parentHeightChange.emit(this._parentHeight);
        /** @type {?} */
        var _this = this;
        /** @type {?} */
        let titleBtnsBlock_ele = _this.titleBtnsBlock.nativeElement;
        /** @type {?} */
        let titleBtnsBlock_size = titleBtnsBlock_ele.getBoundingClientRect();
        _this.calendarHeight = _this._parentHeight
            - titleBtnsBlock_size.height
            - parseInt(window.getComputedStyle(titleBtnsBlock_ele).marginBottom);
        this.changeDetector.markForCheck();
        // console.warn('parentHeight', this._parentHeight);
        // console.warn('titleBtnsBlock_ele', titleBtnsBlock_size.height, parseInt(window.getComputedStyle(titleBtnsBlock_ele).marginBottom));
        // console.warn('calendarHeight', _this.calendarHeight);
    } // end set parentHeight
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.calcuContentHeight(); // resize for android bottom show or hide 
        this.scrollToCurrentTime(); // resize for android bottom show or hide .. caculate day week height
        console.log('calendar inside cacualte height');
        this.changeDetector.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //init calendar type
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
        this.weekdaysList.forEach((/**
         * @param {?} weekday
         * @return {?}
         */
        (weekday) => {
            this.translateMap.set(weekday, this.translateService.translate(weekday));
        }));
        this.monthsList.forEach((/**
         * @param {?} month
         * @return {?}
         */
        (month) => {
            this.translateMap.set(month, this.translateService.translate(month));
        }));
        this.translateMap.set(this.noSchedule, this.translateService.translate(this.noSchedule));
        this.windowWidth = window.innerWidth;
        //set component is detach
        // this.changeDetector.detach();
        //phone default view is day view
        if (this.windowWidth < 1024) {
            this.viewTypeIndex = 0;
            this.changeDetector.markForCheck();
        }
        //load default filter setting
        /** @type {?} */
        let defaultSettingVal = this.settingService.getSetting('CalendarFilterSetting').SettingVal;
        if (StringUtils.isNotEmpty(defaultSettingVal)) {
            /** @type {?} */
            let calendarSetting = JSON.parse(defaultSettingVal);
            //default all checked
            if (Object.keys(calendarSetting).length == 0) {
                this.activityTypeList.forEach((/**
                 * @param {?} codeItem
                 * @return {?}
                 */
                (codeItem) => {
                    codeItem.isCheck = true;
                }));
            }
            else {
                this.activityTypeList.forEach((/**
                 * @param {?} codeItem
                 * @return {?}
                 */
                (codeItem) => {
                    /** @type {?} */
                    let code = codeItem.getCode();
                    /** @type {?} */
                    let isCheck = calendarSetting[code] == undefined ? false : calendarSetting[code];
                    codeItem.isCheck = isCheck;
                }));
            }
        }
        this.setCurrentFilterOption(undefined);
        this.typeChange(this.viewTypeIndex);
        this.loadCalendarData();
        this.createCustomerList();
    } // end ngOnInit
    // end ngOnInit
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.typeChange(this.viewTypeIndex);
    }
    /**
     * @param {?} activeTabIndex
     * @return {?}
     */
    switchPadViewMode(activeTabIndex) {
        console.debug('switchPadViewMode:', this.viewDate);
        if (activeTabIndex != this.viewTypeIndex) {
            //count start & end
            this.typeChange(activeTabIndex);
            this.changeDetector.detectChanges();
            //load data & refresh
            this.loadCalendarData();
        }
    }
    /**
     * @param {?} activeTabIndex
     * @return {?}
     */
    typeChange(activeTabIndex) {
        console.debug('calendar-component-typeChange', activeTabIndex, this.viewType, this.viewDate);
        /** @type {?} */
        let start;
        /** @type {?} */
        let end;
        this.viewTypeIndex = activeTabIndex;
        switch (activeTabIndex) {
            // YEAR
            case 3:
                this.viewType = this.YEAR;
                this.calcuContentHeight();
                break;
            // MONTH
            case 2:
                this.viewType = this.MONTH;
                this.calcuContentHeight();
                start = startOfMonth(this.viewDate);
                end = endOfMonth(this.viewDate);
                //count current time is have data
                break;
            // WEEK
            case 1:
                this.viewType = this.WEEK;
                start = startOfWeek(this.viewDate, { weekStartsOn: 1 });
                end = endOfWeek(this.viewDate, { weekStartsOn: 1 });
                //count current time is have data
                this.scrollToCurrentTime();
                break;
            // DAY
            case 0:
                this.viewType = this.DAY;
                start = startOfDay(this.viewDate);
                end = endOfDay(this.viewDate);
                //count current time is have data
                this.scrollToCurrentTime();
                // console.warn('view type change: day');
                break;
        } // end switch
        if (this.viewType != this.YEAR) {
            if (StringUtils.isNotEmpty(start) && StringUtils.isNotEmpty(end)) {
                this.storeStartDate = start;
                this.storeEndDate = end;
            }
        }
        console.debug('calendar-component-typeChange done');
    } // end typeChange
    // end typeChange
    //phone header change mode
    /**
     * @return {?}
     */
    mobileBackViewType() {
        console.debug('mobileBackViewType', this.viewType);
        switch (this.viewType) {
            case this.MONTH:
                this.typeChange(3); // back to year
                break;
            case this.WEEK:
                this.typeChange(2); // back to month
                break;
            case this.DAY:
                this.typeChange(2); // back to month
                break;
        } // end switch
        //because change view type , so date range is change
        this.loadCalendarData();
    } // end mobileChangeViewType
    // end mobileChangeViewType
    /**
     * @return {?}
     */
    clickToday() {
        this.viewDate = new Date();
        console.warn('clickToday', this.viewDate);
        this.changeDetector.detectChanges();
        //calculate new start and end
        this.typeChange(this.viewTypeIndex);
        //load data & refresh
        this.loadCalendarData();
        this.loadViewDateCalendarEventList();
    }
    //when calendar component any click change viewDate , will check pad/phone current viewType to change mode
    /**
     * @param {?} viewDateChange
     * @return {?}
     */
    onViewDateChange(viewDateChange) {
        /** @type {?} */
        let val = new Date(viewDateChange.viewDate);
        /** @type {?} */
        let action = viewDateChange.action;
        console.debug('calendar-component update viewDate:', val);
        console.debug('calendar-component update viewDate:', val, this.viewType);
        console.debug('this.viewDate:', this.viewDate, isSameMonth(this.viewDate, val));
        if (this.isPad() && (isSameMonth(this.viewDate, val) && this.viewType === this.MONTH)) {
            this.viewDate = val;
            return;
        }
        else {
            this.viewDate = val;
            //if year change date , alwasy switch month
            if (this.viewType == this.YEAR && action == ChangeAction.CLICK) {
                this.typeChange(2);
            }
            else if (this.viewType == this.MONTH && !this.isPad() && action == ChangeAction.CLICK) {
                //if device is phone , click day switch to week when view type is month
                this.typeChange(0);
            }
            else {
                //else calculate new start & end
                this.typeChange(this.viewTypeIndex);
            }
            //load data & refresh
            this.loadViewDateCalendarEventList();
            this.loadCalendarData();
        }
    }
    //fetch calendar between start & end range
    /**
     * @return {?}
     */
    loadCalendarData() {
        console.debug('loadCalendar data');
        if (this.viewType !== this.YEAR) { // year no need query data , only view
            //If old data is larger than 20, clear first to make view change faster
            if (this.calendarEventListAfterFilter.length > 20)
                this.calendarEventListAfterFilter = [];
            if (StringUtils.isNotEmpty(this.storeStartDate) && StringUtils.isNotEmpty(this.storeEndDate)) {
                this.calendarService.getCalendarEventList(this.storeStartDate, this.storeEndDate, '').subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    this.calendarEventList = data;
                    this.refreshCalendarEventList();
                }));
            }
        }
        console.debug('loadCalendar data done');
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    loadCalendarEventDetail(clientID) {
        console.log("loadCalendarEventDetail:", clientID);
        this.calendarService.getCalendarEventDetail(clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.warn('getCalendarEventDetail', data);
            this.isLoading = false;
            this.calendarEventDetail = data;
            this.customerClientName = this.customerClientMap.get(this.calendarEventDetail.customerClientID);
            console.log("customerClientMap:", this.customerClientMap);
            this.calendarEventDetail.displayActivity = this.profileCodeService.convertCode2Text('Calendar_Type', this.calendarEventDetail.activity);
            this.calendarEventDetail.displayAlert1 = this.profileCodeService.convertCode2Text('Calendar_RemindTime', this.calendarEventDetail.alert1);
            this.calendarEventDetail.displayAlert2 = this.profileCodeService.convertCode2Text('Calendar_RemindTime', this.calendarEventDetail.alert2);
            this.onToggleDetailModal(true);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    loadViewDateCalendarEventList() {
        /** @type {?} */
        let queryDate = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), 0, 0, 0);
        this.calendarService.getCalendarEventList(queryDate, subMinutes(addDays(this.viewDate, 1), 1), '').subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.warn('loadViewDateCalendarEventList', data);
            this.viewDateCalendarEventList = data;
        }));
    }
    /**
     * @param {?} eventItem
     * @return {?}
     */
    onClickDetail(eventItem) {
        this.clientID = eventItem.clientID;
        this.loadCalendarEventDetail(this.clientID);
        this.loadViewDateCalendarEventList();
        console.warn('clickDetail', this.clientID);
    } // end clickDetail
    // end clickDetail
    /**
     * @return {?}
     */
    onClickDeleteCancel() {
    } // end clickDeleteCancel
    // end clickDeleteCancel
    /**
     * @return {?}
     */
    onClickDeleteConfirm() {
        this.modalManager.toggleLoading(true);
        this.calendarService.deleteCalendarEvent(this.clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.warn("this.calendarService.deleteCalendarEvent data: ", data);
            yield this.dataSyncService.syncFunc(['CALENDAR']);
            if (data.status) {
                this.isDelete = data.status;
            }
            this.loadCalendarData();
            if (this.isExpandDetail) { // close pop up
                this.onToggleDetailModal(false);
            }
            this.modalManager.toggleLoading(false);
        })));
    } // end clickDeleteConfirm
    // end clickDeleteConfirm
    /**
     * @return {?}
     */
    onClickAppointmentSave() {
        this.isSaveClick = true;
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    onSaveCalendarEvent(resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let type = resp.type;
            console.log("onSaveCalendarEvent:", resp);
            if (type !== 'fail') {
                /** @type {?} */
                let data = resp.data;
                /** @type {?} */
                let clientID = data.ClientID;
                console.warn('saveCalendarEvent');
                console.warn('updateCalendarEvent', clientID);
                this.modalManager.toggleLoading(true);
                yield this.dataSyncService.syncFunc(['CALENDAR']);
                this.modalManager.toggleLoading(false);
                this.calendarService.getCalendarEventDetail(clientID).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    this.calendarEventDetail = data;
                    this.onToggleAppointmentModal(false);
                    this.loadCalendarData();
                    if (type === 'edit') {
                        this.loadCalendarEventDetail(clientID);
                        this.isSave = true;
                        this.loadViewDateCalendarEventList();
                    }
                    else if (type === 'add') {
                        this.isSave = true;
                        console.warn('addCalendarEvent');
                    }
                }));
            }
            this.isSaveClick = false;
            return;
        });
    }
    /**
     * @private
     * @return {?}
     */
    isPad() {
        return this.windowWidth >= 1024;
    }
    /**
     * @return {?}
     */
    editEvent() {
        console.log("calendar EditEvent:", this.calendarEventDetail);
        this.calendarEventEdit = new CalendarEventDetail(this.calendarEventDetail.clientID, this.calendarEventDetail.calendarID, this.calendarEventDetail.customerClientID, this.calendarEventDetail.title, this.calendarEventDetail.location, this.calendarEventDetail.activity, '', this.calendarEventDetail.start, this.calendarEventDetail.end, '', this.calendarEventDetail.alert1, this.calendarEventDetail.alert2, this.calendarEventDetail.alert3, this.calendarEventDetail.remark, null);
        this.calendarEventEdit.allDay = this.calendarEventDetail.allDay;
        this.calendarEventEdit.isAlert = this.calendarEventDetail.isAlert;
        this.onToggleAppointmentModal(true);
    }
    /**
     * @return {?}
     */
    addEvent() {
        this.clientID = '';
        /** @type {?} */
        let currentTime;
        currentTime = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), getHours(new Date()), getMinutes(new Date()));
        currentTime = addMinutes(currentTime, (5 - getMinutes(currentTime) % 5)); // adjust minutes to next 5 minutes
        currentTime = addHours(currentTime, 1);
        this.calendarEventEdit = new CalendarEventDetail('', '', null, '', '', null, 'N', currentTime, addMinutes(currentTime, 15), 'Y', '8', '', '', '', null);
        this.loadViewDateCalendarEventList();
        this.onToggleAppointmentModal(true);
    }
    // block which control filter
    /**
     * @param {?} alertTypeList
     * @return {?}
     */
    onActivityTypeListChange(alertTypeList) {
        this.alertTypeList = alertTypeList;
        this.currentFilterOptionList = [];
        /** @type {?} */
        let settingVal = {};
        this.activityTypeList.forEach((/**
         * @param {?} codeItem
         * @return {?}
         */
        (codeItem) => {
            console.debug('activityType codeItem', codeItem);
            if (settingVal != undefined)
                settingVal[codeItem.getCode()] = codeItem.isCheck;
            if (codeItem.isCheck) {
                this.currentFilterOptionList.push(codeItem.getCode());
            }
        }));
        this.filterOptionChange(this.currentFilterOptionList);
        this.settingValueChange(settingVal);
    }
    /**
     * @param {?} settingValue
     * @return {?}
     */
    settingValueChange(settingValue) {
        //update filter setting
        /** @type {?} */
        let settingObj = new Setting(this.settingService.getSetting('CalendarFilterSetting').SettingID, this.settingService.getSetting('CalendarFilterSetting').SettingName, JSON.stringify(settingValue));
        this.settingService.updateSetting(settingObj).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.debug('calendar.component-update setting', data);
        }));
    }
    /**
     * @param {?} currentFilterOption
     * @return {?}
     */
    filterOptionChange(currentFilterOption) {
        console.warn('currentFilterOption', currentFilterOption);
        this.currentFilterOptionList = currentFilterOption;
        this.refreshCalendarEventList();
    }
    /**
     * @private
     * @param {?} settingVal
     * @return {?}
     */
    setCurrentFilterOption(settingVal) {
        this.currentFilterOptionList = [];
        //find checked filter
        this.activityTypeList.forEach((/**
         * @param {?} codeItem
         * @return {?}
         */
        (codeItem) => {
            console.debug('activityType codeItem', codeItem);
            if (settingVal != undefined)
                settingVal[codeItem.getCode()] = codeItem.isCheck;
            if (codeItem.isCheck) {
                this.currentFilterOptionList.push(codeItem.getCode());
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    refreshCalendarEventList() {
        this.calendarEventListAfterFilter = [];
        //filter event calendar type
        console.debug('start refreshCalendarEventList', this.calendarEventList.length);
        this.calendarEventListAfterFilter = this.calendarEventList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => this.currentFilterOptionList.indexOf(x.activity) > -1));
        console.debug('start refreshCalendarEventList done', this.calendarEventListAfterFilter);
        console.debug('start refreshCalendarEventList done', this.calendarEventListAfterFilter.length);
        // this.changeDetector.detectChanges();
        //count height
        if (this.viewType == this.DAY || this.viewType == this.WEEK) {
            this.scrollToCurrentTime();
        }
    }
    // end block
    /**
     * @return {?}
     */
    scrollToCurrentTime() {
        /** @type {?} */
        let _this = this;
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let timeEventAll_ele = _this.elementRef.nativeElement.querySelectorAll('div.cal-time-events');
            // console.warn('_this.timeEventAll_ele', timeEventAll_ele.length, timeEventAll_ele);
            // if(timeEventAll_ele !=null){
            for (let timeEvent_ele of timeEventAll_ele) {
                /** @type {?} */
                let mobileDayHeader_ele = _this.elementRef.nativeElement.querySelector('div.cal-day-headers');
                /** @type {?} */
                let allDayEvent_ele = _this.elementRef.nativeElement.querySelector('div.cal-all-day-events');
                /** @type {?} */
                let allDayEvent_h = (allDayEvent_ele != null
                    ? allDayEvent_ele.getBoundingClientRect().height
                    : 0);
                // console.warn('mobileDayHeader_ele', mobileDayHeader_ele);
                if (mobileDayHeader_ele != null) {
                    // console.warn('if _this.calendarHeight', timeEvent_ele, _this.calendarHeight);
                    // console.warn('if mobileDayHeader_ele', mobileDayHeader_ele);
                    timeEvent_ele.style.maxHeight = (_this.calendarHeight
                        - mobileDayHeader_ele.getBoundingClientRect().height
                        - allDayEvent_h
                        - parseInt(window.getComputedStyle(mobileDayHeader_ele).marginBottom)) + 'px';
                    // scroll to time
                    /** @type {?} */
                    let currentHour = getHours(new Date());
                    console.log('current Hour:', getHours(new Date()));
                    if (currentHour > 3)
                        timeEvent_ele.scrollTop = Math.floor((currentHour - 3) / 2) * 80
                            + (Math.floor((currentHour - 3) / 2)
                                + (currentHour - 3) % 2) * 82;
                }
            } // end for: timeEventAll_ele
            this.changeDetector.markForCheck();
            // }
        }), 100); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    } // end scrollToCurrentTime
    // end scrollToCurrentTime
    /**
     * @return {?}
     */
    calcuContentHeight() {
        console.debug('calcuContentHeight');
        /** @type {?} */
        let _this = this;
        setTimeout((/**
         * @return {?}
         */
        () => {
            console.warn('calcuContentHeight', this.calendarHeight);
            // calculate year view height
            /** @type {?} */
            let year_ele = _this.elementRef.nativeElement.querySelector('.ui-calendar-year');
            /** @type {?} */
            let yearTag_ele = _this.elementRef.nativeElement.querySelector('app-ui-calendar-year');
            if (year_ele != null && yearTag_ele != null) {
                if (_this.windowWidth > 1023) {
                    yearTag_ele.style.minHeight = (_this.calendarHeight
                        - parseInt(window.getComputedStyle(year_ele).marginTop)) + 'px';
                    yearTag_ele.style.height = (_this.calendarHeight
                        - parseInt(window.getComputedStyle(year_ele).marginTop)) + 'px';
                }
                else {
                    year_ele.style.height = (_this.calendarHeight
                        - parseInt(window.getComputedStyle(year_ele).marginTop)) + 'px';
                    console.log('mobile year view: _this.calendarHeight:', _this.calendarHeight, 'window.getComputedStyle(year_ele).marginTop', window.getComputedStyle(year_ele).marginTop);
                }
            }
            // calculate month view height
            /** @type {?} */
            let month_ele = _this.elementRef.nativeElement.querySelector('.cal-month-view');
            if (month_ele !== null && month_ele !== undefined && _this.windowWidth > 1023) {
                month_ele.style.maxHeight = _this.calendarHeight + 'px';
                month_ele.style.minHeight = _this.calendarHeight + 'px';
            }
            if (month_ele.style.maxHeight == '0px') {
                console.warn('Here');
                month_ele.style.maxHeight = 100 - 3 + 'vh';
                month_ele.style.minHeight = 100 - 3 + 'vh';
            }
            this.changeDetector.markForCheck();
        }), 300); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    } // end calcuContentHeight
    // end calcuContentHeight
    /**
     * @return {?}
     */
    renderWeek() {
        console.log('in integration renderWeek');
        /** @type {?} */
        let mobileDayHeader_ele = this.elementRef.nativeElement.querySelector('div.cal-day-headers');
        /** @type {?} */
        let allDayEvent_ele = this.elementRef.nativeElement.querySelector('div.cal-all-day-events');
        console.log('in integration renderWeek', mobileDayHeader_ele, allDayEvent_ele);
        this.scrollToCurrentTime();
    }
    // function which control popup
    /**
     * @param {?} val
     * @return {?}
     */
    onToggleAppointmentModal(val) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isExpandEdit = val;
            if (!this.isExpandEdit) {
                this.isCalendarEditMetaDataDone = false;
            }
            if (this.isExpandFilter) {
                this.onCloseInfo();
            }
            this.changeDetector.markForCheck();
        }), 0); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    } // end toggleAppointmentModal
    // end toggleAppointmentModal
    /**
     * @param {?} val
     * @return {?}
     */
    onToggleDetailModal(val) {
        this.isExpandDetail = val;
        if (!this.isExpandDetail) {
            this.isCalendarDetailMetaDataDone = false;
        }
        if (this.isExpandFilter) {
            this.onCloseInfo();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onToggleFilterModal(val) {
        if (!this.isExpandFilter) {
            this.onCloseInfo();
        }
    }
    /**
     * @param {?} dom
     * @return {?}
     */
    onInfoTabClick(dom) {
        console.warn('infoTabClick');
        console.warn('nowShowBtn', this.nowShowBtn);
        if (this.nowShowBtn !== undefined) {
            // console.log('nowShowBtn click', this.nowShowBtn.btnContent.nativeElement);
            if (dom !== undefined) {
                console.warn('messageContent', dom.messageContent, this.nowShowBtn.messageContent);
                if (dom.messageContent !== this.nowShowBtn.messageContent) {
                    // this.closeInfo();
                    this.nowShowBtn.closeInfo();
                    this.nowShowBtn = dom;
                }
                else {
                    this.resetInfoPos();
                }
            } // end if: dom !== undefined
        }
        else {
            this.nowShowBtn = dom;
        }
        // console.warn('messageContent filter', this.nowShowBtn.messageContent === this.filterInfo, this.filterInfo);
        if (this.nowShowBtn.messageContent === this.filterInfo) {
            this.isExpandFilter = true;
        }
    } // end infoTabClick
    // end infoTabClick
    /**
     * @return {?}
     */
    resetInfoPos() {
        // this.isExpandFilter = true;
        if (this.nowShowBtn !== undefined) {
            this.nowShowBtn.countPos();
        }
    } // end resetInfoPos
    // end resetInfoPos
    /**
     * @return {?}
     */
    onCloseInfo() {
        this.isExpandFilter = false;
        if (this.nowShowBtn !== undefined) {
            this.nowShowBtn.closeInfo();
            // this.nowShowBtn = undefined;
            // console.warn('closeInfo', this.nowShowBtn, this.nowShowBtn.btnContent.nativeElement);
        }
    } // end closeInfo
    // end closeInfo
    /**
     * @return {?}
     */
    createCustomerList() {
        /** @type {?} */
        let pageInfo = new PageInfo();
        pageInfo.pageSize = -1;
        /** @type {?} */
        let filterCriteria = new CustomerFilterCriteria();
        this.customerService.getCustomerList(filterCriteria, pageInfo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            console.log('data', data);
            /** @type {?} */
            let temp_array = [];
            for (let custItem of data) {
                this.customerClientMap.set(custItem.clientID, this.customerUtils.convertNameToShow(custItem.firstName, custItem.lastName));
                temp_array.push(new SelectOption(custItem.clientID, this.customerUtils.convertNameToShow(custItem.firstName, custItem.lastName)));
            }
            this.customerItemList = temp_array;
        }));
    }
    /**
     * @return {?}
     */
    mobileFilterClick() {
        this.isExpandFilter = true;
    }
    /**
     * @param {?} funcName
     * @return {?}
     */
    onMetaDataDone(funcName) {
        if (funcName === 'CalendarEdit') {
            this.isCalendarEditMetaDataDone = true;
        }
        else if (funcName === 'CalendarDetail') {
            this.isCalendarDetailMetaDataDone = true;
        }
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar',
                template: "<app-ui-main-full>\n  <div main #calendarMain class=\"main-calendar\">\n\n    <div #titleBtnsBlock class=\"calendar-title-actionBtns\">\n\n      <div class=\"calendar-title-block\">\n        <ng-template *ngIf=\"windowWidth < 1024; then title_mobileBlock else title_pcBlock\"></ng-template>\n\n        <ng-template #title_pcBlock>\n          <p class=\"calendar-title-year font-size_h5\">{{ this.viewDate | date: 'yyyy' }}\n            {{language.yearUnit | translate}}</p>\n          <p class=\"calendar-title-month font-size_h5\" [hidden]=\"this.viewType === 'year'\">\n            {{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}\n          </p>\n        </ng-template>\n        <!-- end: title_pcBlock -->\n\n        <ng-template #title_mobileBlock>\n          <div (click)=\"mobileBackViewType()\">\n            <!-- <nx-icon name=\"chevron-left\" [hidden]=\"(this.viewType === 'year')\"></nx-icon> -->\n            <div class=\"img-block\" [hidden]=\"(this.viewType === 'year')\">\n              <img src=\"assets/img/icon-cal-back.svg\" />\n            </div>\n            <p class=\"calendar-title-year\" [hidden]=\"this.viewType === 'day'\">{{ this.viewDate | date: 'yyyy' }}\n              {{language.yearUnit | translate}}</p>\n            <p class=\"calendar-title-month\" [hidden]=\"(this.viewType === 'month' || this.viewType === 'year')\">\n              {{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}\n            </p>\n          </div>\n        </ng-template>\n        <!-- end: title_mobileBlock -->\n\n      </div>\n      <!-- end calendar-title-block -->\n\n      <div class=\"calendar-switch-btn\">\n        <app-ui-tab-style2 Action [action]=\"'calendarViewTab'\" (onTabChildClick)=\"switchPadViewMode($event)\" [tabIndex]=\"this.viewTypeIndex\">\n          <app-ui-tab-child>{{language.calendarDay |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.calendarWeek |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.calendarMonth |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.calendarYear |translate }}</app-ui-tab-child>\n        </app-ui-tab-style2>\n        <!-- end tab style2 -->\n      </div>\n      <!-- end calendar-switch-btn -->\n\n      <div class=\"calendar-action-btn\">\n        <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" id='btn_calendarToday' Action action='calendarToday' (actionClick)=\"clickToday()\">\n              <div class=\"text-block\">\n                <p>{{language.calendarToday |translate }}</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" id='btn_calendarAddEvent' Action action=\"calendarAddEvent\"\n              (actionClick)=\"addEvent()\">\n              <div class=\"img-block\">\n                <img [src]=\"'assets/img/icon-cal-new.svg'\" />\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block calendar-filter-btn\">\n            <!-- info new -->\n            <div class=\"show-pad-and-mobile calendar-btn\" id='btn_calendarFilter' Action action='calendarFilter'\n              (actionClick)=\"mobileFilterClick()\">\n              <div class=\"img-block\">\n                <img [src]=\"'assets/img/icon-cal-filter.svg'\" />\n              </div>\n            </div>\n            <snd-ui-information class=\"show-pc filter-pc filter-info-block\" [isPopupStyle]=\"false\" [isHasArrow]=\"false\"\n              [infoBtnType]=\"'customize'\" [containerSelector]=\"calendarMain\" [isInfoContentOverlap]=\"true\"\n              [maxWidth]=\"595\">\n              <ng-container btn>\n                <div class=\"calendar-btn\">\n                  <div class=\"img-block\">\n                    <img [src]=\"'assets/img/icon-cal-filter.svg'\" />\n                  </div>\n                </div>\n              </ng-container>\n              <ng-container info-content>\n                <div class=\"filter-block-pc\">\n                  <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n                </div>\n              </ng-container>\n            </snd-ui-information>\n            <!-- end of info new -->\n          </li>\n        </ul>\n      </div>\n      <!-- end calendar-action-btn -->\n    </div>\n    <!-- end calendar-title-actionBtns -->\n    <!-- </app-ui-infinite-scroll> -->\n\n    <!-- Filter content -->\n    <ng-template #filterContent>\n\n      <snd-calendar-filter [optionMap]=\"optionMap\" (activityTypeListChange)=\"onActivityTypeListChange($event)\">\n      </snd-calendar-filter>\n    </ng-template>\n\n    <!--info content-->\n    <app-ui-information-content #filterInfo class=\"filter-pc\" (btnOnClick)=\"onCloseInfo()\" [defaultPos]=\"'bottom'\"\n      [paddindData]=\"paddindData\" [showArrow]=\"false\">\n      <!-- <div class=\"filter-block-pc\"> -->\n      <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n      <!-- </div> -->\n    </app-ui-information-content>\n    <!-- end: Filter content -->\n\n    <!--\n      [(isSwitchView)]=\"isLoading\"\n    -->\n    <utils-calendar class=\"calendar-container\" [ngClass]=\"(isExpandDetail || isExpandEdit ? 'style-popup-open':'')\"\n      [viewType]=\"viewType\" [weekStartsOn]=\"weekStartsOn\" [viewDate]=\"viewDate\" [translateMap]=\"translateMap\"\n      [eventList]=\"calendarEventListAfterFilter\" (viewDateChange)=\"onViewDateChange($event)\"\n      (uiCalendarClickEventItem)=\"onClickDetail($event)\" (uiCalendarMoreInfoClicked)=\"onInfoTabClick($event)\"\n      (onRenderWeek)=\"renderWeek()\">\n    </utils-calendar>\n  </div>\n  <!-- end: main -->\n\n  <div global-main>\n    <!--delete block -->\n    <app-ui-modal-confirm #calendarDelete [(isPopupOpen)]=\"isCalendarDelete\" (onCancel)=\"onClickDeleteCancel()\"\n      (onConfirm)=\"onClickDeleteConfirm()\" [title]=\"language.delete | translate\"\n      [message]=\"language.deleteDataBody | translate\" [cancelBtnText]=\"language.no | translate\"\n      [confirmBtnText]=\"language.yes | translate\">\n    </app-ui-modal-confirm>\n    <!-- end: Appointment delete -->\n\n    <!-- detail block -->\n    <app-ui-modal-style-text1 class=\"wd-md\" [(isPopupOpen)]=\"isExpandDetail\" (close)=\"onToggleDetailModal($event)\"\n      [hidden]=\"!isCalendarDetailMetaDataDone\" [ngClass]=\"{'no-scroll': isExpandEdit}\" [isModalBtmHasSpace]=\"false\">\n      <ng-container textType=\"modal-title-detail\">{{language.calendarAppointmentDetails | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-detail *ngIf=\"isExpandDetail\" (isMetaDataDone)=\"onMetaDataDone('CalendarDetail')\" [calendarEventDetail]=\"calendarEventDetail\"\n          [customerClientName]=\"customerClientName\">\n        </snd-calendar-detail>\n      </ng-container>\n      <!-- end: popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\" [id]=\"'btn_calendarDelete'\" Action\n            action='calendarDelete' (actionClick)=\"isCalendarDelete = true\">\n            <ng-container TextType=\"cust\">{{language.calendarDelete | translate}}</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [btnHeight]=\"'sm'\" [id]=\"'btn_calendarEdit'\" Action action='calendarEdit'\n            (actionClick)=\"editEvent()\">\n            <!-- <ng-container TextType=\"cust\"><span [routerLink]=\"['editEvent']\">EDIT</span></ng-container> -->\n            <ng-container TextType=\"cust\">{{language.calendarEdit | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end: modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: Appointment Detail -->\n\n    <!--add/edit calendar popup-->\n    <app-ui-modal-style-text1 class=\"wd-lg calendar-edit-content\" *ngIf=\"isExpandEdit\" [(isPopupOpen)]=\"isExpandEdit\"\n      [isScrollToTop]=\"true\" (close)=\"onToggleAppointmentModal(false)\" [isBackdropClose]=\"true\"\n      [hidden]=\"!isCalendarEditMetaDataDone\">\n      <ng-container textType=\"modal-title-detail\">{{language.calendarAppointment | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-edit *ngIf=\"isExpandEdit\" (isMetaDataDone)=\"onMetaDataDone('CalendarEdit')\"\n          [clientID]=\"calendarEventEdit?calendarEventEdit.clientID :'' \"\n          [todayCalendarEvent]=\"viewDateCalendarEventList\" [(isSaveClick)]=\"isSaveClick\" [viewDate]=\"viewDate\"\n          [translateMap]=\"translateMap\" [customerItemList]=\"customerItemList\" (saveEvent)=\"onSaveCalendarEvent($event)\">\n        </snd-calendar-edit>\n      </ng-container>\n      <!-- end popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" [id]=\"'btn_calendarSave'\" Action action='calendarSave'\n            (actionClick)=\"onClickAppointmentSave()\">\n            <ng-container TextType=\"cust\">{{language.calendarSave | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: add/edit calendar -->\n\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isSave\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.notificationSaveFeedback | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end: Appointment save -->\n\n    <!-- Delete Success -->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isDelete\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.notificationDeleteFeedback | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of Delete Success -->\n\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isLoading\" [hasAutoDisappear]=\"false\">\n      <ng-container textType=\"modal-img-detail\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.loading | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n\n    <!-- filter block -->\n    <app-ui-modal-style-text1 class=\"wd-sm\" [(isPopupOpen)]=\"isExpandFilter\" [isHasBtmBlock]=\"false\"\n      (close)=\"onToggleFilterModal($event)\" class=\"filter-mobile\">\n      <ng-container textType=\"modal-title-detail\">{{language.calendarFilter |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n      </ng-container>\n      <!-- end: popup-content -->\n    </app-ui-modal-style-text1>\n    <!-- end: Filter -->\n  </div>\n  <!-- end: global-main -->\n</app-ui-main-full>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{background-color:transparent}:host *{-webkit-tap-highlight-color:transparent}:host ::ng-deep .ui-page-content .ui-main-full-content{padding:0!important}:host .link-btn{cursor:pointer}:host .main-calendar{display:inline-block;width:100%;height:100%}:host .calendar-title-actionBtns{display:flex;justify-content:space-between;align-items:center;padding:25px 30px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:35px}:host .calendar-title-block{min-width:195px}:host .calendar-title-block .link-btn{display:flex}:host .calendar-title-block p{display:inline-block;margin:0;font-weight:700;line-height:1.33;letter-spacing:.2px;color:#414141}:host .calendar-title-block p:not(:last-child){margin-right:20px}:host .calendar-title-block p[hidden]{display:none}:host .calendar-switch-btn{max-width:280px;margin-right:40px}:host .calendar-action-btn .ui-list-block{display:flex;justify-content:flex-start;align-items:stretch;list-style-type:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:20px}:host .calendar-action-btn .ui-list-block .calendar-btn{display:flex;min-width:40px;height:100%;cursor:pointer}:host .calendar-action-btn .ui-list-block .calendar-btn .text-block{padding-top:2px}:host .calendar-action-btn .ui-list-block .calendar-btn .img-block,:host .calendar-action-btn .ui-list-block .calendar-btn .text-block{flex:1;margin:auto 0}:host .calendar-action-btn .ui-list-block .img-block{display:inline-block;width:40px;height:40px}:host .calendar-action-btn .ui-list-block .img-block img{display:inline-block;width:100%}:host .calendar-action-btn .ui-list-block .text-block{display:flex}:host .calendar-action-btn .ui-list-block .text-block>p{margin:auto 0;flex:1;font-size:.875rem;font-weight:700;line-height:1.43;letter-spacing:.2px;color:#007ab3}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content-block{margin-top:20px}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .info-info-content{padding:20px}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .control-btn:after{display:none}:host .filter-block-pc{display:inline-block;min-width:310px}:host .filter-info-block ::ng-deep .info-content-block{margin-right:-28px}:host ::ng-deep .calendar-container.style-popup-open .cal-month-view,:host ::ng-deep .calendar-container.style-popup-open .cal-time-events{overflow-y:hidden!important}:host ::ng-deep .calendar-container.style-popup-open .ui-calendar-year .app-ui-calendar-year{overflow-y:hidden!important}:host ::ng-deep .cal-month-view{background-color:#f5f5f5}:host .filter-pc ::ng-deep .info-info-content{padding:25px 20px;border-radius:5px}:host .filter-mobile::ng-deep{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:25px}:host .calendar-filter-item ::ng-deep .nx-checkbox .nx-checkbox__control{margin-top:0}:host .calendar-filter-item ::ng-deep .form-checkbox .check-text{line-height:1.4;letter-spacing:.2px}:host .no-scroll *,:host .no-scroll ::ng-deep *{overflow-y:hidden!important}:host .calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}:host .calendar-edit-content ::ng-deep .modal-block{padding-left:0;padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block .nx-modal__container .nx-modal__content{padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block app-calendar-edit>[class*=gas-col-]:last-child{padding-right:0;padding-left:20px}:host .calendar-edit-content ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:40px}@media screen and (max-width:1023px){:host ::ng-deep .ui-page-content{background-color:#fff!important}:host ::ng-deep .ui-page-content .ui-main-full-content{min-height:auto!important;background-color:transparent!important;height:100%}:host ::ng-deep .ui-calendar-year{overflow:hidden;overflow-y:auto;margin-top:-5px}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-day-cell:not(.cal-today) .event-date.event-day-active{background-color:transparent!important;color:#414141!important}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-today .event-date{background-color:#003781!important;color:#fff!important}:host .calendar-title-block{position:relative;padding-left:10px}:host .calendar-title-block nx-icon::ng-deep{font-size:1.25rem;font-weight:700;color:#003781}:host .calendar-title-block nx-icon[hidden]::ng-deep{display:none}:host .calendar-title-block .img-block{display:inline-block;vertical-align:middle;width:16px}:host .calendar-title-block .img-block[hidden]{display:none}:host .calendar-title-block .img-block img{display:inline-block;width:6px;height:10px;position:absolute;top:calc(50% - 5px)}:host .calendar-title-block p{font-size:1.25rem}:host .calendar-title-block p:not(:last-child){margin-right:10px}:host .calendar-title-actionBtns{padding:5px 5px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:15px}:host .calendar-switch-btn{display:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:10px}:host .filter-mobile::ng-deep{display:block}:host .filter-pc::ng-deep .info-info-content{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:35px}}@media screen and (max-width:374px){:host .calendar-title-block{min-width:auto}}"]
            }] }
];
CalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: SettingService },
    { type: TranslateService },
    { type: CalendarService },
    { type: ProfileCodeService },
    { type: CustomerService },
    { type: CustomerUtils },
    { type: ModalManager },
    { type: DataSyncService }
];
CalendarComponent.propDecorators = {
    parentHeight: [{ type: Input }],
    parentHeightChange: [{ type: Output }],
    titleBtnsBlock: [{ type: ViewChild, args: ['titleBtnsBlock',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    nowShowBtn: [{ type: ViewChild, args: [UiInformationBtnComponent,] }],
    infoContent: [{ type: ViewChild, args: [UiInformationContentComponent,] }],
    filterInfo: [{ type: ViewChild, args: ['filterInfo',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype._parentHeight;
    /** @type {?} */
    CalendarComponent.prototype.parentHeightChange;
    /** @type {?} */
    CalendarComponent.prototype.titleBtnsBlock;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.YEAR;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.MONTH;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.WEEK;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.DAY;
    /** @type {?} */
    CalendarComponent.prototype.viewTypeIndex;
    /** @type {?} */
    CalendarComponent.prototype.viewType;
    /** @type {?} */
    CalendarComponent.prototype.viewDate;
    /** @type {?} */
    CalendarComponent.prototype.weekStartsOn;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.calendarHeight;
    /** @type {?} */
    CalendarComponent.prototype.clientID;
    /** @type {?} */
    CalendarComponent.prototype.translateMap;
    /** @type {?} */
    CalendarComponent.prototype.optionMap;
    /** @type {?} */
    CalendarComponent.prototype.customerItemList;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.storeStartDate;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.storeEndDate;
    /** @type {?} */
    CalendarComponent.prototype.calendarEventList;
    /** @type {?} */
    CalendarComponent.prototype.calendarEventListAfterFilter;
    /** @type {?} */
    CalendarComponent.prototype.viewDateCalendarEventList;
    /** @type {?} */
    CalendarComponent.prototype.calendarEventDetail;
    /** @type {?} */
    CalendarComponent.prototype.calendarEventEdit;
    /** @type {?} */
    CalendarComponent.prototype.customerClientName;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.customerClientMap;
    /** @type {?} */
    CalendarComponent.prototype.activityTypeList;
    /** @type {?} */
    CalendarComponent.prototype.alertTypeList;
    /** @type {?} */
    CalendarComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.currentFilterOptionList;
    /** @type {?} */
    CalendarComponent.prototype.isExpandFilter;
    /** @type {?} */
    CalendarComponent.prototype.isExpandDetail;
    /** @type {?} */
    CalendarComponent.prototype.isExpandEdit;
    /** @type {?} */
    CalendarComponent.prototype.isDelete;
    /** @type {?} */
    CalendarComponent.prototype.isSave;
    /** @type {?} */
    CalendarComponent.prototype.isSaveClick;
    /** @type {?} */
    CalendarComponent.prototype.isCalendarDelete;
    /** @type {?} */
    CalendarComponent.prototype.isLoading;
    /** @type {?} */
    CalendarComponent.prototype.isCalendarEditMetaDataDone;
    /** @type {?} */
    CalendarComponent.prototype.isCalendarDetailMetaDataDone;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.dayTypesList;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.weekdaysList;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.monthsList;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.noSchedule;
    /** @type {?} */
    CalendarComponent.prototype.outsideSpace;
    /** @type {?} */
    CalendarComponent.prototype.paddindData;
    /** @type {?} */
    CalendarComponent.prototype.windowWidth;
    /** @type {?} */
    CalendarComponent.prototype.nowShowBtn;
    /** @type {?} */
    CalendarComponent.prototype.infoContent;
    /** @type {?} */
    CalendarComponent.prototype.filterInfo;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.settingService;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.customerService;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.customerUtils;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.modalManager;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.dataSyncService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFpQix1QkFBdUIsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsRUFFVixPQUFPLEVBRVAsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUNQLFdBQVcsRUFDWCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1QsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBMkIsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFMUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0s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LHVEQUFtRDs7SUFDbkQseURBQXFEOzs7OztJQUdyRCx5Q0FBK0Q7Ozs7O0lBQy9ELHlDQUF3Rjs7Ozs7SUFDeEYsdUNBQStKOzs7OztJQUMvSix1Q0FBMkM7O0lBSzNDLHlDQUdFOztJQUVGLHdDQUtFOztJQUlGLHdDQUEyQjs7SUFxakIzQix1Q0FBNEU7O0lBQzVFLHdDQUFxRjs7SUFDckYsdUNBQW1FOzs7OztJQTNpQnZELDJDQUF5Qzs7Ozs7SUFDbkQsdUNBQThCOzs7OztJQUM5QiwyQ0FBc0M7Ozs7O0lBQ3RDLDZDQUEwQzs7Ozs7SUFDMUMsNENBQXdDOzs7OztJQUN4QywrQ0FBOEM7Ozs7O0lBQzlDLDRDQUF3Qzs7Ozs7SUFDeEMsMENBQW9DOzs7OztJQUNwQyx5Q0FBa0M7Ozs7O0lBQ2xDLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvY2FsZW5kYXItc2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnREZXRhaWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuaW1wb3J0IHtcbiAgYWRkRGF5cyxcbiAgYWRkSG91cnMsXG4gIGFkZE1pbnV0ZXMsXG4gIGFkZE1vbnRocyxcbiAgZ2V0RGF0ZSxcbiAgZ2V0RGF5LFxuICBnZXRIb3VycyxcbiAgZ2V0TWludXRlcyxcbiAgZ2V0TW9udGgsXG4gIGdldFllYXIsXG4gIGlzU2FtZU1vbnRoLFxuICBzdWJNaW51dGVzLFxuICBzdGFydE9mTW9udGgsXG4gIGVuZE9mTW9udGgsXG4gIHN0YXJ0T2ZXZWVrLFxuICBlbmRPZldlZWssXG4gIHN0YXJ0T2ZEYXksXG4gIGVuZE9mRGF5XG59IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFByb2ZpbGVDb2RlU2VydmljZSwgUGFnZUluZm8sIHNob3dSdWxlVG9rZW4sIHNob3dSdWxlLCBEYXRhU3luY1NlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVDb2RlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudCwgTW9kYWxNYW5hZ2VyIH0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMsIFNlbGVjdE9wdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgVmlld0RhdGVDaGFuZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENoYW5nZUFjdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICdAYWxsaWFuelNORC91aSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJJdGVtIH0gZnJvbSAnLi4vLi4vLi4vY3VzdG9tZXIvc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0nO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSB9IGZyb20gJy4uLy4uLy4uL2N1c3RvbWVyL2NvbXBvbmVudHMvYmVhbi9jdXN0b21lci1maWx0ZXItY3JpdGVyaWEnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY3VzdG9tZXIvc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tZXJVdGlscyB9IGZyb20gJy4uLy4uLy4uL2N1c3RvbWVyL3V0aWxzL2N1c3RvbWVyLXV0aWxzJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ11cbiAgLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxuXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICAvL3R3by13YXkgYmluZGluZ1xuICBwcml2YXRlIF9wYXJlbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpXG4gIGdldCBwYXJlbnRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEhlaWdodDtcbiAgfVxuICBzZXQgcGFyZW50SGVpZ2h0KHZhbCkge1xuICAgIHRoaXMuX3BhcmVudEhlaWdodCA9IHZhbDtcblxuICAgIGlmICh0aGlzLl9wYXJlbnRIZWlnaHQgPT0gMCkge1xuICAgICAgdGhpcy5fcGFyZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50SGVpZ2h0Q2hhbmdlLmVtaXQodGhpcy5fcGFyZW50SGVpZ2h0KTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHRpdGxlQnRuc0Jsb2NrX2VsZSA9IF90aGlzLnRpdGxlQnRuc0Jsb2NrLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IHRpdGxlQnRuc0Jsb2NrX3NpemUgPSB0aXRsZUJ0bnNCbG9ja19lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgX3RoaXMuY2FsZW5kYXJIZWlnaHQgPSBfdGhpcy5fcGFyZW50SGVpZ2h0XG4gICAgICAtIHRpdGxlQnRuc0Jsb2NrX3NpemUuaGVpZ2h0XG4gICAgICAtIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpdGxlQnRuc0Jsb2NrX2VsZSkubWFyZ2luQm90dG9tKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgLy8gY29uc29sZS53YXJuKCdwYXJlbnRIZWlnaHQnLCB0aGlzLl9wYXJlbnRIZWlnaHQpO1xuICAgIC8vIGNvbnNvbGUud2FybigndGl0bGVCdG5zQmxvY2tfZWxlJywgdGl0bGVCdG5zQmxvY2tfc2l6ZS5oZWlnaHQsIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpdGxlQnRuc0Jsb2NrX2VsZSkubWFyZ2luQm90dG9tKSk7XG4gICAgLy8gY29uc29sZS53YXJuKCdjYWxlbmRhckhlaWdodCcsIF90aGlzLmNhbGVuZGFySGVpZ2h0KTtcbiAgfSAvLyBlbmQgc2V0IHBhcmVudEhlaWdodFxuICBAT3V0cHV0KCkgcGFyZW50SGVpZ2h0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3RpdGxlQnRuc0Jsb2NrJykgdGl0bGVCdG5zQmxvY2s6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBZRUFSOiBzdHJpbmcgPSAneWVhcic7XG4gIHByaXZhdGUgTU9OVEg6IHN0cmluZyA9ICdtb250aCc7XG4gIHByaXZhdGUgV0VFSzogc3RyaW5nID0gJ3dlZWsnO1xuICBwcml2YXRlIERBWTogc3RyaW5nID0gJ2RheSc7XG5cbiAgLy9jYWxlbmRhci11aSBjb25maWcgc2V0dGluZ1xuICBwdWJsaWMgdmlld1R5cGVJbmRleDogbnVtYmVyID0gMjsgLy8gJ21vbnRoJ1xuICBwdWJsaWMgdmlld1R5cGU6IHN0cmluZyA9IHRoaXMuTU9OVEg7IC8vXG4gIHB1YmxpYyB2aWV3RGF0ZSA9IG5ldyBEYXRlKCk7IC8vY3VycmVudCBkYXRlXG4gIHB1YmxpYyB3ZWVrU3RhcnRzT246IG51bWJlciA9IDE7IC8vIE1vbmRheVxuXG4gIC8vY291bnQgY29udGVudCBoZWlnaHRcbiAgcHJpdmF0ZSBjYWxlbmRhckhlaWdodDogbnVtYmVyID0gMDtcblxuICAvL2NsaWNrIGNhbGVuZGFyIGlkXG4gIHB1YmxpYyBjbGllbnRJRDogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIHRyYW5zbGF0ZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHB1YmxpYyBvcHRpb25NYXA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PigpO1xuICBwdWJsaWMgY3VzdG9tZXJJdGVtTGlzdDogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IFtdO1xuICBwcml2YXRlIHN0b3JlU3RhcnREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBzdG9yZUVuZERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIHB1YmxpYyBjYWxlbmRhckV2ZW50TGlzdDogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4gPSBbXTsgLy8gZXZlbnRMaXN0XG4gIHB1YmxpYyBjYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyOiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdOyAvLyBmaWx0ZXLlvowgZXZlbnRcbiAgcHVibGljIHZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107XG4gIHB1YmxpYyBjYWxlbmRhckV2ZW50RGV0YWlsOiBDYWxlbmRhckV2ZW50RGV0YWlsO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudEVkaXQ6IENhbGVuZGFyRXZlbnREZXRhaWwgPSBudWxsO1xuICBwdWJsaWMgY3VzdG9tZXJDbGllbnROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgY3VzdG9tZXJDbGllbnRNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAvLyBwcml2YXRlIGNhbGVuZGFyRXZlbnRNYXAgPSBuZXcgQ2FsZW5kYXJFdmVudE1hcCgpO1xuXG4gIHB1YmxpYyBhY3Rpdml0eVR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTsgLy8gRELkuK3miYDmnIlhY3Rpdml0eVR5cGVcbiAgcHVibGljIGFsZXJ0VHlwZUxpc3Q6IEFycmF5PFByb2ZpbGVDb2RlPiA9IFtdO1xuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHByaXZhdGUgY3VycmVudEZpbHRlck9wdGlvbkxpc3Q6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvLyBwb3B1cFxuICBwdWJsaWMgaXNFeHBhbmRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRXhwYW5kRGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0V4cGFuZEVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1NhdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzU2F2ZUNsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NhbGVuZGFyRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ2FsZW5kYXJFZGl0TWV0YURhdGFEb25lOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NhbGVuZGFyRGV0YWlsTWV0YURhdGFEb25lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gdHJhbnNsYXRlXG4gIHByaXZhdGUgZGF5VHlwZXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydDcm9zc19EYXknLCAnQWxsX0RheSddO1xuICBwcml2YXRlIHdlZWtkYXlzTGlzdDogQXJyYXk8c3RyaW5nPiA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG4gIHByaXZhdGUgbW9udGhzTGlzdDogQXJyYXk8c3RyaW5nPiA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuICBwcml2YXRlIG5vU2NoZWR1bGU6IHN0cmluZyA9ICdOb19TY2hlZHVsZSc7XG5cblxuICAvLyBpbmZvIGNvbmZpZ1xuICAvL+mBv+WFjeeItuWxpOWFtuS7liBwb3NpdGlvbiByZWxhdGl2ZSDlvJXpn78gaW5mb1xuICBwdWJsaWMgb3V0c2lkZVNwYWNlID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG4gIC8vaW5mbyBjb250ZW50IOW3puWPs+acgOWwj3BhZGRpbmdcbiAgcHVibGljIHBhZGRpbmREYXRhID0ge1xuICAgIHRvcDogMTAsXG4gICAgcmlnaHQ6IDEwLFxuICAgIGJvdHRvbTogMTAsXG4gICAgbGVmdDogd2luZG93LmlubmVyV2lkdGggPiAxMDIzID8gMTcwIDogMTBcbiAgfTtcblxuXG4gIC8vY2hlY2sgaXMgcGFkIG9yIG1vYmlsZVxuICBwdWJsaWMgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FsY3VDb250ZW50SGVpZ2h0KCk7ICAvLyByZXNpemUgZm9yIGFuZHJvaWQgYm90dG9tIHNob3cgb3IgaGlkZSBcbiAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTsgLy8gcmVzaXplIGZvciBhbmRyb2lkIGJvdHRvbSBzaG93IG9yIGhpZGUgLi4gY2FjdWxhdGUgZGF5IHdlZWsgaGVpZ2h0XG4gICAgY29uc29sZS5sb2coJ2NhbGVuZGFyIGluc2lkZSBjYWN1YWx0ZSBoZWlnaHQnKTtcblxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXN0b21lclV0aWxzOiBDdXN0b21lclV0aWxzLFxuICAgIHByaXZhdGUgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIsXG4gICAgcHJpdmF0ZSBkYXRhU3luY1NlcnZpY2U6IERhdGFTeW5jU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vaW5pdCBjYWxlbmRhciB0eXBlXG4gICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDYWxlbmRhcl9UeXBlJyk7XG4gICAgdGhpcy5hbGVydFR5cGVMaXN0ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDYWxlbmRhcl9SZW1pbmRUaW1lJyk7XG4gICAgdGhpcy5vcHRpb25NYXAuc2V0KCdDYWxlbmRhcl9UeXBlJywgdGhpcy5hY3Rpdml0eVR5cGVMaXN0KTtcbiAgICB0aGlzLm9wdGlvbk1hcC5zZXQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLCB0aGlzLmFsZXJ0VHlwZUxpc3QpO1xuICAgIHRoaXMuZGF5VHlwZXNMaXN0LmZvckVhY2goKGRheVR5cGUpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldChkYXlUeXBlLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKGRheVR5cGUpKVxuICAgIH0pO1xuICAgIHRoaXMud2Vla2RheXNMaXN0LmZvckVhY2goKHdlZWtkYXkpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldCh3ZWVrZGF5LCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHdlZWtkYXkpKVxuICAgIH0pO1xuICAgIHRoaXMubW9udGhzTGlzdC5mb3JFYWNoKChtb250aCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2xhdGVNYXAuc2V0KG1vbnRoLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKG1vbnRoKSlcbiAgICB9KTtcbiAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQodGhpcy5ub1NjaGVkdWxlLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHRoaXMubm9TY2hlZHVsZSkpO1xuXG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgLy9zZXQgY29tcG9uZW50IGlzIGRldGFjaFxuICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0YWNoKCk7XG5cbiAgICAvL3Bob25lIGRlZmF1bHQgdmlldyBpcyBkYXkgdmlld1xuICAgIGlmICh0aGlzLndpbmRvd1dpZHRoIDwgMTAyNCkge1xuICAgICAgdGhpcy52aWV3VHlwZUluZGV4ID0gMDtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLy9sb2FkIGRlZmF1bHQgZmlsdGVyIHNldHRpbmdcbiAgICBsZXQgZGVmYXVsdFNldHRpbmdWYWwgPSB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoJ0NhbGVuZGFyRmlsdGVyU2V0dGluZycpLlNldHRpbmdWYWw7XG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZGVmYXVsdFNldHRpbmdWYWwpKSB7XG4gICAgICBsZXQgY2FsZW5kYXJTZXR0aW5nID0gSlNPTi5wYXJzZShkZWZhdWx0U2V0dGluZ1ZhbCk7XG5cbiAgICAgIC8vZGVmYXVsdCBhbGwgY2hlY2tlZFxuICAgICAgaWYgKE9iamVjdC5rZXlzKGNhbGVuZGFyU2V0dGluZykubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0LmZvckVhY2goKGNvZGVJdGVtKSA9PiB7XG4gICAgICAgICAgY29kZUl0ZW0uaXNDaGVjayA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgICAgIGxldCBjb2RlID0gY29kZUl0ZW0uZ2V0Q29kZSgpO1xuICAgICAgICAgIGxldCBpc0NoZWNrID0gY2FsZW5kYXJTZXR0aW5nW2NvZGVdID09IHVuZGVmaW5lZCA/IGZhbHNlIDogY2FsZW5kYXJTZXR0aW5nW2NvZGVdO1xuICAgICAgICAgIGNvZGVJdGVtLmlzQ2hlY2sgPSBpc0NoZWNrO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuc2V0Q3VycmVudEZpbHRlck9wdGlvbih1bmRlZmluZWQpO1xuXG5cbiAgICB0aGlzLnR5cGVDaGFuZ2UodGhpcy52aWV3VHlwZUluZGV4KTtcbiAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbWVyTGlzdCgpO1xuXG4gIH0gLy8gZW5kIG5nT25Jbml0XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudHlwZUNoYW5nZSh0aGlzLnZpZXdUeXBlSW5kZXgpO1xuICB9XG5cbiAgc3dpdGNoUGFkVmlld01vZGUoYWN0aXZlVGFiSW5kZXgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdzd2l0Y2hQYWRWaWV3TW9kZTonLCB0aGlzLnZpZXdEYXRlKTtcblxuICAgIGlmIChhY3RpdmVUYWJJbmRleCAhPSB0aGlzLnZpZXdUeXBlSW5kZXgpIHtcbiAgICAgIC8vY291bnQgc3RhcnQgJiBlbmRcbiAgICAgIHRoaXMudHlwZUNoYW5nZShhY3RpdmVUYWJJbmRleCk7XG5cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAvL2xvYWQgZGF0YSAmIHJlZnJlc2hcbiAgICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgIH1cblxuICB9XG5cbiAgdHlwZUNoYW5nZShhY3RpdmVUYWJJbmRleCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLWNvbXBvbmVudC10eXBlQ2hhbmdlJywgYWN0aXZlVGFiSW5kZXgsIHRoaXMudmlld1R5cGUsIHRoaXMudmlld0RhdGUpO1xuXG4gICAgbGV0IHN0YXJ0LCBlbmQ7XG4gICAgdGhpcy52aWV3VHlwZUluZGV4ID0gYWN0aXZlVGFiSW5kZXg7XG5cbiAgICBzd2l0Y2ggKGFjdGl2ZVRhYkluZGV4KSB7XG4gICAgICAvLyBZRUFSXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLllFQVI7XG4gICAgICAgIHRoaXMuY2FsY3VDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gTU9OVEhcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy52aWV3VHlwZSA9IHRoaXMuTU9OVEg7XG4gICAgICAgIHRoaXMuY2FsY3VDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgIHN0YXJ0ID0gc3RhcnRPZk1vbnRoKHRoaXMudmlld0RhdGUpO1xuICAgICAgICBlbmQgPSBlbmRPZk1vbnRoKHRoaXMudmlld0RhdGUpO1xuICAgICAgICAvL2NvdW50IGN1cnJlbnQgdGltZSBpcyBoYXZlIGRhdGFcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBXRUVLXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLldFRUs7XG4gICAgICAgIHN0YXJ0ID0gc3RhcnRPZldlZWsodGhpcy52aWV3RGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG4gICAgICAgIGVuZCA9IGVuZE9mV2Vlayh0aGlzLnZpZXdEYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbiAgICAgICAgLy9jb3VudCBjdXJyZW50IHRpbWUgaXMgaGF2ZSBkYXRhXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50VGltZSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gREFZXG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLkRBWTtcbiAgICAgICAgc3RhcnQgPSBzdGFydE9mRGF5KHRoaXMudmlld0RhdGUpO1xuICAgICAgICBlbmQgPSBlbmRPZkRheSh0aGlzLnZpZXdEYXRlKTtcbiAgICAgICAgLy9jb3VudCBjdXJyZW50IHRpbWUgaXMgaGF2ZSBkYXRhXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50VGltZSgpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZXcgdHlwZSBjaGFuZ2U6IGRheScpO1xuICAgICAgICBicmVhaztcbiAgICB9IC8vIGVuZCBzd2l0Y2hcblxuICAgIGlmICh0aGlzLnZpZXdUeXBlICE9IHRoaXMuWUVBUikge1xuXG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShzdGFydCkgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShlbmQpKSB7XG4gICAgICAgIHRoaXMuc3RvcmVTdGFydERhdGUgPSBzdGFydDtcbiAgICAgICAgdGhpcy5zdG9yZUVuZERhdGUgPSBlbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXItY29tcG9uZW50LXR5cGVDaGFuZ2UgZG9uZScpO1xuXG5cblxuICB9IC8vIGVuZCB0eXBlQ2hhbmdlXG5cbiAgLy9waG9uZSBoZWFkZXIgY2hhbmdlIG1vZGVcbiAgbW9iaWxlQmFja1ZpZXdUeXBlKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ21vYmlsZUJhY2tWaWV3VHlwZScsIHRoaXMudmlld1R5cGUpO1xuICAgIHN3aXRjaCAodGhpcy52aWV3VHlwZSkge1xuICAgICAgY2FzZSB0aGlzLk1PTlRIOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMyk7IC8vIGJhY2sgdG8geWVhclxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5XRUVLOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7IC8vIGJhY2sgdG8gbW9udGhcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuREFZOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7IC8vIGJhY2sgdG8gbW9udGhcbiAgICAgICAgYnJlYWs7XG4gICAgfSAvLyBlbmQgc3dpdGNoXG5cblxuICAgIC8vYmVjYXVzZSBjaGFuZ2UgdmlldyB0eXBlICwgc28gZGF0ZSByYW5nZSBpcyBjaGFuZ2VcbiAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcblxuICB9IC8vIGVuZCBtb2JpbGVDaGFuZ2VWaWV3VHlwZVxuXG4gIGNsaWNrVG9kYXkoKSB7XG4gICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc29sZS53YXJuKCdjbGlja1RvZGF5JywgdGhpcy52aWV3RGF0ZSk7XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuXG4gICAgLy9jYWxjdWxhdGUgbmV3IHN0YXJ0IGFuZCBlbmRcbiAgICB0aGlzLnR5cGVDaGFuZ2UodGhpcy52aWV3VHlwZUluZGV4KTtcblxuICAgIC8vbG9hZCBkYXRhICYgcmVmcmVzaFxuICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgIHRoaXMubG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgfVxuXG4gIC8vd2hlbiBjYWxlbmRhciBjb21wb25lbnQgYW55IGNsaWNrIGNoYW5nZSB2aWV3RGF0ZSAsIHdpbGwgY2hlY2sgcGFkL3Bob25lIGN1cnJlbnQgdmlld1R5cGUgdG8gY2hhbmdlIG1vZGVcbiAgb25WaWV3RGF0ZUNoYW5nZSh2aWV3RGF0ZUNoYW5nZTogVmlld0RhdGVDaGFuZ2UpIHtcbiAgICBsZXQgdmFsID0gbmV3IERhdGUodmlld0RhdGVDaGFuZ2Uudmlld0RhdGUpO1xuICAgIGxldCBhY3Rpb24gPSB2aWV3RGF0ZUNoYW5nZS5hY3Rpb247XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci1jb21wb25lbnQgdXBkYXRlIHZpZXdEYXRlOicsIHZhbCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci1jb21wb25lbnQgdXBkYXRlIHZpZXdEYXRlOicsIHZhbCwgdGhpcy52aWV3VHlwZSk7XG4gICAgY29uc29sZS5kZWJ1ZygndGhpcy52aWV3RGF0ZTonLCB0aGlzLnZpZXdEYXRlLCBpc1NhbWVNb250aCh0aGlzLnZpZXdEYXRlLCB2YWwpKTtcblxuXG4gICAgaWYgKHRoaXMuaXNQYWQoKSAmJiAoaXNTYW1lTW9udGgodGhpcy52aWV3RGF0ZSwgdmFsKSAmJiB0aGlzLnZpZXdUeXBlID09PSB0aGlzLk1PTlRIKSkge1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IHZhbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnZpZXdEYXRlID0gdmFsO1xuICAgICAgLy9pZiB5ZWFyIGNoYW5nZSBkYXRlICwgYWx3YXN5IHN3aXRjaCBtb250aFxuICAgICAgaWYgKHRoaXMudmlld1R5cGUgPT0gdGhpcy5ZRUFSICYmIGFjdGlvbiA9PSBDaGFuZ2VBY3Rpb24uQ0xJQ0spIHtcbiAgICAgICAgdGhpcy50eXBlQ2hhbmdlKDIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy52aWV3VHlwZSA9PSB0aGlzLk1PTlRIICYmICF0aGlzLmlzUGFkKCkgJiYgYWN0aW9uID09IENoYW5nZUFjdGlvbi5DTElDSykge1xuICAgICAgICAvL2lmIGRldmljZSBpcyBwaG9uZSAsIGNsaWNrIGRheSBzd2l0Y2ggdG8gd2VlayB3aGVuIHZpZXcgdHlwZSBpcyBtb250aFxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9lbHNlIGNhbGN1bGF0ZSBuZXcgc3RhcnQgJiBlbmRcbiAgICAgICAgdGhpcy50eXBlQ2hhbmdlKHRoaXMudmlld1R5cGVJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8vbG9hZCBkYXRhICYgcmVmcmVzaFxuICAgICAgdGhpcy5sb2FkVmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCgpO1xuICAgICAgdGhpcy5sb2FkQ2FsZW5kYXJEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgLy9mZXRjaCBjYWxlbmRhciBiZXR3ZWVuIHN0YXJ0ICYgZW5kIHJhbmdlXG4gIGxvYWRDYWxlbmRhckRhdGEoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnbG9hZENhbGVuZGFyIGRhdGEnKTtcbiAgICBpZiAodGhpcy52aWV3VHlwZSAhPT0gdGhpcy5ZRUFSKSB7IC8vIHllYXIgbm8gbmVlZCBxdWVyeSBkYXRhICwgb25seSB2aWV3XG5cbiAgICAgIC8vSWYgb2xkIGRhdGEgaXMgbGFyZ2VyIHRoYW4gMjAsIGNsZWFyIGZpcnN0IHRvIG1ha2UgdmlldyBjaGFuZ2UgZmFzdGVyXG4gICAgICBpZiAodGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyLmxlbmd0aCA+IDIwKVxuICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0QWZ0ZXJGaWx0ZXIgPSBbXTtcblxuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5zdG9yZVN0YXJ0RGF0ZSkgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLnN0b3JlRW5kRGF0ZSkpIHtcblxuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDYWxlbmRhckV2ZW50TGlzdCh0aGlzLnN0b3JlU3RhcnREYXRlLCB0aGlzLnN0b3JlRW5kRGF0ZSwgJycpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0ID0gZGF0YTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5kZWJ1ZygnbG9hZENhbGVuZGFyIGRhdGEgZG9uZScpO1xuICB9XG5cbiAgbG9hZENhbGVuZGFyRXZlbnREZXRhaWwoY2xpZW50SUQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKFwibG9hZENhbGVuZGFyRXZlbnREZXRhaWw6XCIsIGNsaWVudElEKTtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dldENhbGVuZGFyRXZlbnREZXRhaWwnLCBkYXRhKTtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBkYXRhO1xuICAgICAgdGhpcy5jdXN0b21lckNsaWVudE5hbWUgPSB0aGlzLmN1c3RvbWVyQ2xpZW50TWFwLmdldCh0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuY3VzdG9tZXJDbGllbnRJRCk7XG4gICAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyQ2xpZW50TWFwOlwiLCB0aGlzLmN1c3RvbWVyQ2xpZW50TWFwKTtcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5kaXNwbGF5QWN0aXZpdHkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDYWxlbmRhcl9UeXBlJywgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFjdGl2aXR5KTtcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5kaXNwbGF5QWxlcnQxID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ2FsZW5kYXJfUmVtaW5kVGltZScsIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDEpO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmRpc3BsYXlBbGVydDIgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0Mik7XG4gICAgICB0aGlzLm9uVG9nZ2xlRGV0YWlsTW9kYWwodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCkge1xuICAgIGxldCBxdWVyeURhdGUgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMudmlld0RhdGUpLCBnZXRNb250aCh0aGlzLnZpZXdEYXRlKSwgZ2V0RGF0ZSh0aGlzLnZpZXdEYXRlKSwgMCwgMCwgMCk7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudExpc3QocXVlcnlEYXRlLCBzdWJNaW51dGVzKGFkZERheXModGhpcy52aWV3RGF0ZSwgMSksIDEpLCAnJykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdsb2FkVmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCcsIGRhdGEpO1xuICAgICAgdGhpcy52aWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0ID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2tEZXRhaWwoZXZlbnRJdGVtKSB7XG4gICAgdGhpcy5jbGllbnRJRCA9IGV2ZW50SXRlbS5jbGllbnRJRDtcbiAgICB0aGlzLmxvYWRDYWxlbmRhckV2ZW50RGV0YWlsKHRoaXMuY2xpZW50SUQpO1xuICAgIHRoaXMubG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKTtcblxuICAgIGNvbnNvbGUud2FybignY2xpY2tEZXRhaWwnLCB0aGlzLmNsaWVudElEKTtcbiAgfSAvLyBlbmQgY2xpY2tEZXRhaWxcblxuICBvbkNsaWNrRGVsZXRlQ2FuY2VsKCkge1xuICB9IC8vIGVuZCBjbGlja0RlbGV0ZUNhbmNlbFxuXG4gIG9uQ2xpY2tEZWxldGVDb25maXJtKCkge1xuICAgIHRoaXMubW9kYWxNYW5hZ2VyLnRvZ2dsZUxvYWRpbmcodHJ1ZSk7XG5cbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5kZWxldGVDYWxlbmRhckV2ZW50KHRoaXMuY2xpZW50SUQpLnN1YnNjcmliZShhc3luYyBkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihcInRoaXMuY2FsZW5kYXJTZXJ2aWNlLmRlbGV0ZUNhbGVuZGFyRXZlbnQgZGF0YTogXCIsIGRhdGEpO1xuICAgICAgYXdhaXQgdGhpcy5kYXRhU3luY1NlcnZpY2Uuc3luY0Z1bmMoWydDQUxFTkRBUiddKTtcbiAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICB0aGlzLmlzRGVsZXRlID0gZGF0YS5zdGF0dXM7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICAgIGlmICh0aGlzLmlzRXhwYW5kRGV0YWlsKSB7IC8vIGNsb3NlIHBvcCB1cFxuICAgICAgICB0aGlzLm9uVG9nZ2xlRGV0YWlsTW9kYWwoZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RhbE1hbmFnZXIudG9nZ2xlTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0gLy8gZW5kIGNsaWNrRGVsZXRlQ29uZmlybVxuXG4gIG9uQ2xpY2tBcHBvaW50bWVudFNhdmUoKSB7XG4gICAgdGhpcy5pc1NhdmVDbGljayA9IHRydWU7XG4gIH1cblxuICBhc3luYyBvblNhdmVDYWxlbmRhckV2ZW50KHJlc3ApIHtcbiAgICBsZXQgdHlwZSA9IHJlc3AudHlwZTtcbiAgICBjb25zb2xlLmxvZyhcIm9uU2F2ZUNhbGVuZGFyRXZlbnQ6XCIsIHJlc3ApO1xuICAgIGlmICh0eXBlICE9PSAnZmFpbCcpIHtcbiAgICAgIGxldCBkYXRhID0gcmVzcC5kYXRhO1xuICAgICAgbGV0IGNsaWVudElEID0gZGF0YS5DbGllbnRJRDtcbiAgICAgIGNvbnNvbGUud2Fybignc2F2ZUNhbGVuZGFyRXZlbnQnKTtcblxuICAgICAgY29uc29sZS53YXJuKCd1cGRhdGVDYWxlbmRhckV2ZW50JywgY2xpZW50SUQpO1xuICAgICAgdGhpcy5tb2RhbE1hbmFnZXIudG9nZ2xlTG9hZGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IHRoaXMuZGF0YVN5bmNTZXJ2aWNlLnN5bmNGdW5jKFsnQ0FMRU5EQVInXSk7XG4gICAgICB0aGlzLm1vZGFsTWFuYWdlci50b2dnbGVMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldENhbGVuZGFyRXZlbnREZXRhaWwoY2xpZW50SUQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBkYXRhO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbChmYWxzZSk7XG4gICAgICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnZWRpdCcpIHtcbiAgICAgICAgICB0aGlzLmxvYWRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEKTtcbiAgICAgICAgICB0aGlzLmlzU2F2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5sb2FkVmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhZGQnKSB7XG4gICAgICAgICAgdGhpcy5pc1NhdmUgPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUud2FybignYWRkQ2FsZW5kYXJFdmVudCcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmlzU2F2ZUNsaWNrID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1BhZCgpIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dXaWR0aCA+PSAxMDI0O1xuICB9XG5cbiAgZWRpdEV2ZW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2FsZW5kYXIgRWRpdEV2ZW50OlwiLCB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwpO1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudEVkaXQgPSBuZXcgQ2FsZW5kYXJFdmVudERldGFpbCh0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuY2xpZW50SUQsXG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuY2FsZW5kYXJJRCxcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5jdXN0b21lckNsaWVudElELFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLnRpdGxlLFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmxvY2F0aW9uLFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFjdGl2aXR5LFxuICAgICAgJycsXG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuc3RhcnQsXG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuZW5kLFxuICAgICAgJycsXG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQxLFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MixcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDMsXG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwucmVtYXJrLFxuICAgICAgbnVsbCk7XG4gICAgdGhpcy5jYWxlbmRhckV2ZW50RWRpdC5hbGxEYXkgPSB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWxsRGF5O1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudEVkaXQuaXNBbGVydCA9IHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5pc0FsZXJ0O1xuICAgIHRoaXMub25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKHRydWUpO1xuICB9XG5cbiAgYWRkRXZlbnQoKSB7XG4gICAgdGhpcy5jbGllbnRJRCA9ICcnO1xuICAgIGxldCBjdXJyZW50VGltZTsgLy8gYWRqdXN0IHRpbWUgdG8gbmV4dCBpbnRlcnZhbFxuICAgIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLnZpZXdEYXRlKSwgZ2V0TW9udGgodGhpcy52aWV3RGF0ZSksIGdldERhdGUodGhpcy52aWV3RGF0ZSksIGdldEhvdXJzKG5ldyBEYXRlKCkpLCBnZXRNaW51dGVzKG5ldyBEYXRlKCkpKTtcbiAgICBjdXJyZW50VGltZSA9IGFkZE1pbnV0ZXMoY3VycmVudFRpbWUsICg1IC0gZ2V0TWludXRlcyhjdXJyZW50VGltZSkgJSA1KSk7ICAvLyBhZGp1c3QgbWludXRlcyB0byBuZXh0IDUgbWludXRlc1xuICAgIGN1cnJlbnRUaW1lID0gYWRkSG91cnMoY3VycmVudFRpbWUsIDEpO1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudEVkaXQgPSBuZXcgQ2FsZW5kYXJFdmVudERldGFpbCgnJywgJycsIG51bGwsICcnLCAnJywgbnVsbCwgJ04nLCBjdXJyZW50VGltZSwgYWRkTWludXRlcyhjdXJyZW50VGltZSwgMTUpLCAnWScsICc4JywgJycsICcnLCAnJywgbnVsbCk7XG4gICAgdGhpcy5sb2FkVmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCgpO1xuICAgIHRoaXMub25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKHRydWUpO1xuICB9XG5cbiAgLy8gYmxvY2sgd2hpY2ggY29udHJvbCBmaWx0ZXJcblxuICBvbkFjdGl2aXR5VHlwZUxpc3RDaGFuZ2UoYWxlcnRUeXBlTGlzdDogQXJyYXk8UHJvZmlsZUNvZGU+KSB7XG4gICAgdGhpcy5hbGVydFR5cGVMaXN0ID0gYWxlcnRUeXBlTGlzdDtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0ID0gW107XG4gICAgbGV0IHNldHRpbmdWYWwgPSB7fTtcbiAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QuZm9yRWFjaCgoY29kZUl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2FjdGl2aXR5VHlwZSBjb2RlSXRlbScsIGNvZGVJdGVtKTtcbiAgICAgIGlmIChzZXR0aW5nVmFsICE9IHVuZGVmaW5lZCkgc2V0dGluZ1ZhbFtjb2RlSXRlbS5nZXRDb2RlKCldID0gY29kZUl0ZW0uaXNDaGVjaztcblxuICAgICAgaWYgKGNvZGVJdGVtLmlzQ2hlY2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdC5wdXNoKGNvZGVJdGVtLmdldENvZGUoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlck9wdGlvbkNoYW5nZSh0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0KTtcbiAgICB0aGlzLnNldHRpbmdWYWx1ZUNoYW5nZShzZXR0aW5nVmFsKTtcbiAgfVxuXG4gIHNldHRpbmdWYWx1ZUNoYW5nZShzZXR0aW5nVmFsdWUpIHtcbiAgICAvL3VwZGF0ZSBmaWx0ZXIgc2V0dGluZ1xuICAgIGxldCBzZXR0aW5nT2JqID0gbmV3IFNldHRpbmcodGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKCdDYWxlbmRhckZpbHRlclNldHRpbmcnKS5TZXR0aW5nSUQsIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygnQ2FsZW5kYXJGaWx0ZXJTZXR0aW5nJykuU2V0dGluZ05hbWUsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdWYWx1ZSkpO1xuICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UudXBkYXRlU2V0dGluZyhzZXR0aW5nT2JqKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci5jb21wb25lbnQtdXBkYXRlIHNldHRpbmcnLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlck9wdGlvbkNoYW5nZShjdXJyZW50RmlsdGVyT3B0aW9uOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgY29uc29sZS53YXJuKCdjdXJyZW50RmlsdGVyT3B0aW9uJywgY3VycmVudEZpbHRlck9wdGlvbik7XG4gICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdCA9IGN1cnJlbnRGaWx0ZXJPcHRpb247XG4gICAgdGhpcy5yZWZyZXNoQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudEZpbHRlck9wdGlvbihzZXR0aW5nVmFsKSB7XG4gICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdCA9IFtdO1xuXG4gICAgLy9maW5kIGNoZWNrZWQgZmlsdGVyXG4gICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0LmZvckVhY2goKGNvZGVJdGVtKSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdhY3Rpdml0eVR5cGUgY29kZUl0ZW0nLCBjb2RlSXRlbSk7XG4gICAgICBpZiAoc2V0dGluZ1ZhbCAhPSB1bmRlZmluZWQpIHNldHRpbmdWYWxbY29kZUl0ZW0uZ2V0Q29kZSgpXSA9IGNvZGVJdGVtLmlzQ2hlY2s7XG5cbiAgICAgIGlmIChjb2RlSXRlbS5pc0NoZWNrKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QucHVzaChjb2RlSXRlbS5nZXRDb2RlKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQ2FsZW5kYXJFdmVudExpc3QoKSB7XG5cbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0QWZ0ZXJGaWx0ZXIgPSBbXTtcblxuICAgIC8vZmlsdGVyIGV2ZW50IGNhbGVuZGFyIHR5cGVcbiAgICBjb25zb2xlLmRlYnVnKCdzdGFydCByZWZyZXNoQ2FsZW5kYXJFdmVudExpc3QnLCB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0Lmxlbmd0aCk7XG4gICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyID0gdGhpcy5jYWxlbmRhckV2ZW50TGlzdC5maWx0ZXIoeCA9PiB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0LmluZGV4T2YoeC5hY3Rpdml0eSkgPiAtMSk7XG4gICAgY29uc29sZS5kZWJ1Zygnc3RhcnQgcmVmcmVzaENhbGVuZGFyRXZlbnRMaXN0IGRvbmUnLCB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0QWZ0ZXJGaWx0ZXIpO1xuICAgIGNvbnNvbGUuZGVidWcoJ3N0YXJ0IHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCBkb25lJywgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyLmxlbmd0aCk7XG4gICAgLy8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAvL2NvdW50IGhlaWdodFxuICAgIGlmICh0aGlzLnZpZXdUeXBlID09IHRoaXMuREFZIHx8IHRoaXMudmlld1R5cGUgPT0gdGhpcy5XRUVLKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmQgYmxvY2tcblxuXG5cbiAgc2Nyb2xsVG9DdXJyZW50VGltZSgpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IHRpbWVFdmVudEFsbF9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNhbC10aW1lLWV2ZW50cycpO1xuICAgICAgLy8gY29uc29sZS53YXJuKCdfdGhpcy50aW1lRXZlbnRBbGxfZWxlJywgdGltZUV2ZW50QWxsX2VsZS5sZW5ndGgsIHRpbWVFdmVudEFsbF9lbGUpO1xuXG4gICAgICAvLyBpZih0aW1lRXZlbnRBbGxfZWxlICE9bnVsbCl7XG4gICAgICBmb3IgKGxldCB0aW1lRXZlbnRfZWxlIG9mIHRpbWVFdmVudEFsbF9lbGUpIHtcbiAgICAgICAgbGV0IG1vYmlsZURheUhlYWRlcl9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNhbC1kYXktaGVhZGVycycpO1xuICAgICAgICBsZXQgYWxsRGF5RXZlbnRfZWxlID0gX3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jYWwtYWxsLWRheS1ldmVudHMnKTtcbiAgICAgICAgbGV0IGFsbERheUV2ZW50X2ggPSAoYWxsRGF5RXZlbnRfZWxlICE9IG51bGxcbiAgICAgICAgICA/IGFsbERheUV2ZW50X2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgICA6IDApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUud2FybignbW9iaWxlRGF5SGVhZGVyX2VsZScsIG1vYmlsZURheUhlYWRlcl9lbGUpO1xuICAgICAgICBpZiAobW9iaWxlRGF5SGVhZGVyX2VsZSAhPSBudWxsKSB7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2lmIF90aGlzLmNhbGVuZGFySGVpZ2h0JywgdGltZUV2ZW50X2VsZSwgX3RoaXMuY2FsZW5kYXJIZWlnaHQpO1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignaWYgbW9iaWxlRGF5SGVhZGVyX2VsZScsIG1vYmlsZURheUhlYWRlcl9lbGUpO1xuXG4gICAgICAgICAgdGltZUV2ZW50X2VsZS5zdHlsZS5tYXhIZWlnaHQgPSAoX3RoaXMuY2FsZW5kYXJIZWlnaHRcbiAgICAgICAgICAgIC0gbW9iaWxlRGF5SGVhZGVyX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgICAgIC0gYWxsRGF5RXZlbnRfaFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtb2JpbGVEYXlIZWFkZXJfZWxlKS5tYXJnaW5Cb3R0b20pKSArICdweCc7XG5cbiAgICAgICAgICAvLyBzY3JvbGwgdG8gdGltZVxuICAgICAgICAgIGxldCBjdXJyZW50SG91ciA9IGdldEhvdXJzKG5ldyBEYXRlKCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IEhvdXI6JywgZ2V0SG91cnMobmV3IERhdGUoKSkpO1xuICAgICAgICAgIGlmIChjdXJyZW50SG91ciA+IDMpXG4gICAgICAgICAgICB0aW1lRXZlbnRfZWxlLnNjcm9sbFRvcCA9IE1hdGguZmxvb3IoKGN1cnJlbnRIb3VyIC0gMykgLyAyKSAqIDgwXG4gICAgICAgICAgICAgICsgKE1hdGguZmxvb3IoKGN1cnJlbnRIb3VyIC0gMykgLyAyKVxuICAgICAgICAgICAgICAgICsgKGN1cnJlbnRIb3VyIC0gMykgJSAyKSAqIDgyO1xuICAgICAgICB9XG4gICAgICB9IC8vIGVuZCBmb3I6IHRpbWVFdmVudEFsbF9lbGVcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgIC8vIH1cblxuICAgIH0sIDEwMCk7IC8vIOacg+aciUV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3Ig5YWIIHNldFRpbWVPdXQg6KejXG4gIH0gLy8gZW5kIHNjcm9sbFRvQ3VycmVudFRpbWVcblxuICBjYWxjdUNvbnRlbnRIZWlnaHQoKSB7XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjYWxjdUNvbnRlbnRIZWlnaHQnKTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhbGN1Q29udGVudEhlaWdodCcsIHRoaXMuY2FsZW5kYXJIZWlnaHQpO1xuICAgICAgLy8gY2FsY3VsYXRlIHllYXIgdmlldyBoZWlnaHRcbiAgICAgIGxldCB5ZWFyX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWktY2FsZW5kYXIteWVhcicpO1xuICAgICAgbGV0IHllYXJUYWdfZWxlID0gX3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FwcC11aS1jYWxlbmRhci15ZWFyJyk7XG5cbiAgICAgIGlmICh5ZWFyX2VsZSAhPSBudWxsICYmIHllYXJUYWdfZWxlICE9IG51bGwpIHtcblxuICAgICAgICBpZiAoX3RoaXMud2luZG93V2lkdGggPiAxMDIzKSB7XG4gICAgICAgICAgeWVhclRhZ19lbGUuc3R5bGUubWluSGVpZ2h0ID0gKF90aGlzLmNhbGVuZGFySGVpZ2h0XG4gICAgICAgICAgICAtIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHllYXJfZWxlKS5tYXJnaW5Ub3ApKSArICdweCc7XG4gICAgICAgICAgeWVhclRhZ19lbGUuc3R5bGUuaGVpZ2h0ID0gKF90aGlzLmNhbGVuZGFySGVpZ2h0XG4gICAgICAgICAgICAtIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHllYXJfZWxlKS5tYXJnaW5Ub3ApKSArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICB5ZWFyX2VsZS5zdHlsZS5oZWlnaHQgPSAoX3RoaXMuY2FsZW5kYXJIZWlnaHRcbiAgICAgICAgICAgIC0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoeWVhcl9lbGUpLm1hcmdpblRvcCkpICsgJ3B4JztcbiAgICAgICAgICBjb25zb2xlLmxvZygnbW9iaWxlIHllYXIgdmlldzogX3RoaXMuY2FsZW5kYXJIZWlnaHQ6JywgX3RoaXMuY2FsZW5kYXJIZWlnaHQsICd3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wJywgd2luZG93LmdldENvbXB1dGVkU3R5bGUoeWVhcl9lbGUpLm1hcmdpblRvcCk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjYWxjdWxhdGUgbW9udGggdmlldyBoZWlnaHRcbiAgICAgIGxldCBtb250aF9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhbC1tb250aC12aWV3Jyk7XG5cbiAgICAgIGlmIChtb250aF9lbGUgIT09IG51bGwgJiYgbW9udGhfZWxlICE9PSB1bmRlZmluZWQgJiYgX3RoaXMud2luZG93V2lkdGggPiAxMDIzKSB7XG5cbiAgICAgICAgbW9udGhfZWxlLnN0eWxlLm1heEhlaWdodCA9IF90aGlzLmNhbGVuZGFySGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgbW9udGhfZWxlLnN0eWxlLm1pbkhlaWdodCA9IF90aGlzLmNhbGVuZGFySGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmIChtb250aF9lbGUuc3R5bGUubWF4SGVpZ2h0ID09ICcwcHgnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignSGVyZScpO1xuICAgICAgICBtb250aF9lbGUuc3R5bGUubWF4SGVpZ2h0ID0gMTAwIC0gMyArICd2aCc7XG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5taW5IZWlnaHQgPSAxMDAgLSAzICsgJ3ZoJztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICB9LCAzMDApOyAvLyDmnIPmnIlFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yIOWFiCBzZXRUaW1lT3V0IOino1xuICB9IC8vIGVuZCBjYWxjdUNvbnRlbnRIZWlnaHRcblxuICByZW5kZXJXZWVrKCkge1xuICAgIGNvbnNvbGUubG9nKCdpbiBpbnRlZ3JhdGlvbiByZW5kZXJXZWVrJyk7XG4gICAgbGV0IG1vYmlsZURheUhlYWRlcl9lbGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2FsLWRheS1oZWFkZXJzJyk7XG4gICAgbGV0IGFsbERheUV2ZW50X2VsZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jYWwtYWxsLWRheS1ldmVudHMnKTtcbiAgICBjb25zb2xlLmxvZygnaW4gaW50ZWdyYXRpb24gcmVuZGVyV2VlaycsIG1vYmlsZURheUhlYWRlcl9lbGUsIGFsbERheUV2ZW50X2VsZSk7XG4gICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7XG4gIH1cblxuXG4gIC8vIGZ1bmN0aW9uIHdoaWNoIGNvbnRyb2wgcG9wdXBcblxuICBvblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodmFsKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzRXhwYW5kRWRpdCA9IHZhbDtcbiAgICAgIGlmICghdGhpcy5pc0V4cGFuZEVkaXQpIHtcbiAgICAgICAgdGhpcy5pc0NhbGVuZGFyRWRpdE1ldGFEYXRhRG9uZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNFeHBhbmRGaWx0ZXIpIHsgdGhpcy5vbkNsb3NlSW5mbygpOyB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDApOyAvLyDmnIPmnIlFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yIOWFiCBzZXRUaW1lT3V0IOino1xuXG5cbiAgfSAvLyBlbmQgdG9nZ2xlQXBwb2ludG1lbnRNb2RhbFxuXG4gIG9uVG9nZ2xlRGV0YWlsTW9kYWwodmFsKSB7XG4gICAgdGhpcy5pc0V4cGFuZERldGFpbCA9IHZhbDtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmREZXRhaWwpIHtcbiAgICAgIHRoaXMuaXNDYWxlbmRhckRldGFpbE1ldGFEYXRhRG9uZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0V4cGFuZEZpbHRlcikgeyB0aGlzLm9uQ2xvc2VJbmZvKCk7IH1cbiAgfVxuICBvblRvZ2dsZUZpbHRlck1vZGFsKHZhbCkge1xuICAgIGlmICghdGhpcy5pc0V4cGFuZEZpbHRlcikge1xuICAgICAgdGhpcy5vbkNsb3NlSW5mbygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuZCBibG9ja1xuXG4gIC8vIOiorSBpbmZvIHBvc2l0aW9uXG4gIEBWaWV3Q2hpbGQoVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudCkgbm93U2hvd0J0bjogVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudCkgaW5mb0NvbnRlbnQ6IFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdmaWx0ZXJJbmZvJykgZmlsdGVySW5mbzogVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQ7XG4gIG9uSW5mb1RhYkNsaWNrKGRvbSkge1xuICAgIGNvbnNvbGUud2FybignaW5mb1RhYkNsaWNrJyk7XG4gICAgY29uc29sZS53YXJuKCdub3dTaG93QnRuJywgdGhpcy5ub3dTaG93QnRuKTtcblxuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ25vd1Nob3dCdG4gY2xpY2snLCB0aGlzLm5vd1Nob3dCdG4uYnRuQ29udGVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgaWYgKGRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignbWVzc2FnZUNvbnRlbnQnLCBkb20ubWVzc2FnZUNvbnRlbnQsIHRoaXMubm93U2hvd0J0bi5tZXNzYWdlQ29udGVudCk7XG4gICAgICAgIGlmIChkb20ubWVzc2FnZUNvbnRlbnQgIT09IHRoaXMubm93U2hvd0J0bi5tZXNzYWdlQ29udGVudCkge1xuICAgICAgICAgIC8vIHRoaXMuY2xvc2VJbmZvKCk7XG4gICAgICAgICAgdGhpcy5ub3dTaG93QnRuLmNsb3NlSW5mbygpO1xuICAgICAgICAgIHRoaXMubm93U2hvd0J0biA9IGRvbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlc2V0SW5mb1BvcygpO1xuICAgICAgICB9XG4gICAgICB9IC8vIGVuZCBpZjogZG9tICE9PSB1bmRlZmluZWRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub3dTaG93QnRuID0gZG9tO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUud2FybignbWVzc2FnZUNvbnRlbnQgZmlsdGVyJywgdGhpcy5ub3dTaG93QnRuLm1lc3NhZ2VDb250ZW50ID09PSB0aGlzLmZpbHRlckluZm8sIHRoaXMuZmlsdGVySW5mbyk7XG4gICAgaWYgKHRoaXMubm93U2hvd0J0bi5tZXNzYWdlQ29udGVudCA9PT0gdGhpcy5maWx0ZXJJbmZvKSB7XG4gICAgICB0aGlzLmlzRXhwYW5kRmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gIH0gLy8gZW5kIGluZm9UYWJDbGlja1xuICByZXNldEluZm9Qb3MoKSB7XG4gICAgLy8gdGhpcy5pc0V4cGFuZEZpbHRlciA9IHRydWU7XG4gICAgaWYgKHRoaXMubm93U2hvd0J0biAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5vd1Nob3dCdG4uY291bnRQb3MoKTtcbiAgICB9XG4gIH0gLy8gZW5kIHJlc2V0SW5mb1Bvc1xuICBvbkNsb3NlSW5mbygpIHtcbiAgICB0aGlzLmlzRXhwYW5kRmlsdGVyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubm93U2hvd0J0biAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5vd1Nob3dCdG4uY2xvc2VJbmZvKCk7XG4gICAgICAvLyB0aGlzLm5vd1Nob3dCdG4gPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIGNvbnNvbGUud2FybignY2xvc2VJbmZvJywgdGhpcy5ub3dTaG93QnRuLCB0aGlzLm5vd1Nob3dCdG4uYnRuQ29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH0gLy8gZW5kIGNsb3NlSW5mb1xuXG4gIGNyZWF0ZUN1c3RvbWVyTGlzdCgpIHtcbiAgICBsZXQgcGFnZUluZm8gPSBuZXcgUGFnZUluZm8oKTtcbiAgICBwYWdlSW5mby5wYWdlU2l6ZSA9IC0xO1xuICAgIGxldCBmaWx0ZXJDcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJMaXN0KGZpbHRlckNyaXRlcmlhLCBwYWdlSW5mbykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgICAgbGV0IHRlbXBfYXJyYXkgPSBbXTtcbiAgICAgIGZvciAobGV0IGN1c3RJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lckNsaWVudE1hcC5zZXQoY3VzdEl0ZW0uY2xpZW50SUQsIHRoaXMuY3VzdG9tZXJVdGlscy5jb252ZXJ0TmFtZVRvU2hvdyhjdXN0SXRlbS5maXJzdE5hbWUsIGN1c3RJdGVtLmxhc3ROYW1lKSk7XG4gICAgICAgIHRlbXBfYXJyYXkucHVzaChuZXcgU2VsZWN0T3B0aW9uKGN1c3RJdGVtLmNsaWVudElELCB0aGlzLmN1c3RvbWVyVXRpbHMuY29udmVydE5hbWVUb1Nob3coY3VzdEl0ZW0uZmlyc3ROYW1lLCBjdXN0SXRlbS5sYXN0TmFtZSkpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VzdG9tZXJJdGVtTGlzdCA9IHRlbXBfYXJyYXk7XG4gICAgfSk7XG4gIH1cblxuICBtb2JpbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLmlzRXhwYW5kRmlsdGVyID0gdHJ1ZTtcbiAgfVxuXG5cbiAgb25NZXRhRGF0YURvbmUoZnVuY05hbWU6IHN0cmluZykge1xuICAgIGlmIChmdW5jTmFtZSA9PT0gJ0NhbGVuZGFyRWRpdCcpIHtcbiAgICAgIHRoaXMuaXNDYWxlbmRhckVkaXRNZXRhRGF0YURvbmUgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChmdW5jTmFtZSA9PT0gJ0NhbGVuZGFyRGV0YWlsJykge1xuICAgICAgdGhpcy5pc0NhbGVuZGFyRGV0YWlsTWV0YURhdGFEb25lID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxufVxuIl19