/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ElementRef, ChangeDetectorRef, EventEmitter, Output, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CalendarService } from '../../service/calendar/calendar-service.service';
import { CalendarEventDetail } from '../../service/calendar/model/CalendarEventDetail';
import { addDays, addHours, addMinutes, addMonths, getDate, getDay, getHours, getMinutes, getMonth, getYear, isSameMonth, subMinutes } from 'date-fns';
import { ProfileCodeService } from '@allianzSND/core';
import { SettingService } from '@allianzSND/core';
import { Setting } from '@allianzSND/core';
import { UiInformationBtnComponent } from '@allianzSND/ui';
import { StringUtils } from '@allianzSND/core';
import { ChangeAction } from '@allianzSND/core';
import { UiInformationContentComponent } from '@allianzSND/ui';
import { Language } from '@allianzSND/core';
import { TranslateService } from '@allianzSND/core';
export class CalendarComponent {
    /**
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} settingService
     * @param {?} translateService
     * @param {?} calendarService
     * @param {?} profileCodeService
     */
    constructor(changeDetector, elementRef, settingService, translateService, calendarService, profileCodeService) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.settingService = settingService;
        this.translateService = translateService;
        this.calendarService = calendarService;
        this.profileCodeService = profileCodeService;
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
        this.storeStartDate = new Date();
        this.storeEndDate = new Date();
        this.calendarEventList = []; // eventList
        this.calendarEventListAfterFilter = []; // filter後 event
        this.viewDateCalendarEventList = [];
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
        // this.changeDetector.detectChanges();
        this.typeChange(this.viewTypeIndex);
        this.loadCalendarData();
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
        console.debug('switchPadViewMode');
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
        console.debug('calendar-component-typeChange', activeTabIndex, this.viewType);
        /** @type {?} */
        let start;
        /** @type {?} */
        let end;
        this.viewTypeIndex = activeTabIndex;
        switch (activeTabIndex) {
            case 3:
                this.viewType = this.YEAR;
                this.calcuContentHeight();
                break;
            case 2:
                this.viewType = this.MONTH;
                this.calcuContentHeight();
                start = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1, 0, 0, 0);
                end = new Date(getYear(addMonths(this.viewDate, 1)), getMonth(addMonths(this.viewDate, 1)), 1, 0, 0, 0);
                //count current time is have data
                break;
            case 1:
                this.viewType = this.WEEK;
                start = new Date(getYear(addDays(this.viewDate, (1 - getDay(this.viewDate)))), getMonth(addDays(this.viewDate, (1 - getDay(this.viewDate)))), getDate(addDays(this.viewDate, (1 - getDay(this.viewDate)))), 0, 0, 0);
                end = new Date(getYear(addDays(this.viewDate, (7 - getDay(this.viewDate)))), getMonth(addDays(this.viewDate, (7 - getDay(this.viewDate)))), getDate(addDays(this.viewDate, (7 - getDay(this.viewDate)))), 0, 0, 0);
                //count current time is have data
                this.scrollToCurrentTime();
                break;
            case 0:
                this.viewType = this.DAY;
                start = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), 0, 0, 0);
                end = new Date(getYear(addDays(this.viewDate, 1)), getMonth(addDays(this.viewDate, 1)), getDate(addDays(this.viewDate, 1)), 0, 0, 0);
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
        console.debug('calendar-component update viewDate');
        if (isSameMonth(this.viewDate, val) && this.isPad()) {
            this.viewDate = val;
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
        this.calendarService.getCalendarEventDetail(clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.warn('getCalendarEventDetail', data);
            this.isLoading = false;
            this.calendarEventDetail = data;
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
        this.calendarService.deleteCalendarEvent(this.clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.status) {
                this.isDelete = data.status;
            }
        }));
        this.loadCalendarData();
        if (this.isExpandDetail) { // close pop up
            this.onToggleDetailModal(false);
        }
    } // end clickDeleteConfirm
    // end clickDeleteConfirm
    /**
     * @return {?}
     */
    onClickAppointmentSave() {
        this.isSaveClick = true;
    }
    /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    onSaveCalendarEvent(calendarEventDetail) {
        console.warn('saveCalendarEvent');
        if (calendarEventDetail) {
            if (StringUtils.isNotEmpty(this.clientID)) {
                console.warn('updateCalendarEvent', calendarEventDetail);
                this.calendarService.updateCalendarEvent(calendarEventDetail.clientID, calendarEventDetail).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    if (data.status) {
                        this.calendarEventDetail = calendarEventDetail;
                        this.loadCalendarEventDetail(this.clientID);
                        this.isLoading = true;
                        this.onToggleAppointmentModal(false);
                        this.loadCalendarData();
                        this.loadViewDateCalendarEventList();
                    }
                }));
            }
            else {
                this.calendarService.addCalendarEvent(calendarEventDetail).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    if (data.status) {
                        this.isSave = true;
                        console.warn('addCalendarEvent');
                        calendarEventDetail.clientID = data.clientID;
                        this.calendarEventDetail = calendarEventDetail;
                        this.onToggleAppointmentModal(false);
                        this.loadCalendarData();
                    }
                }));
            }
        }
        this.isSaveClick = false;
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
        this.calendarEventDetail = new CalendarEventDetail('', '', '', '', null, 'N', currentTime, addHours(currentTime, 1), 'Y', '8', '', '', '', null);
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
        }), 200); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
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
                }
            }
            // calculate month view height
            /** @type {?} */
            let month_ele = _this.elementRef.nativeElement.querySelector('.cal-month-view');
            if (month_ele != null && _this.windowWidth > 1023) {
                month_ele.style.maxHeight = _this.calendarHeight + 'px';
                month_ele.style.minHeight = _this.calendarHeight + 'px';
            }
            if (month_ele.style.maxHeight == '0px') {
                console.warn('Here');
                month_ele.style.maxHeight = 100 - 3 + 'vh';
                month_ele.style.minHeight = 100 - 3 + 'vh';
            }
            this.changeDetector.markForCheck();
        }), 100); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    } // end calcuContentHeight
    // end calcuContentHeight
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
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar',
                template: "<app-ui-main-full>\n  <div main class=\"main-calendar\">\n\n    <div #titleBtnsBlock class=\"calendar-title-actionBtns\">\n\n      <div class=\"calendar-title-block\">\n        <ng-template *ngIf=\"windowWidth < 1024; then title_mobileBlock else title_pcBlock\"></ng-template>\n\n        <ng-template #title_pcBlock>\n          <p class=\"calendar-title-year font-size_h5\">{{ this.viewDate | date: 'yyyy' }}</p>\n          <p class=\"calendar-title-month font-size_h5\" [hidden]=\"this.viewType === 'year'\">{{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}</p>\n        </ng-template>\n        <!-- end: title_pcBlock -->\n\n        <ng-template #title_mobileBlock>\n          <div (click)=\"mobileBackViewType()\">\n            <!-- <nx-icon name=\"chevron-left\" [hidden]=\"(this.viewType === 'year')\"></nx-icon> -->\n            <div class=\"img-block\" [hidden]=\"(this.viewType === 'year')\">\n              <img src=\"assets/img/icon-cal-back.svg\" />\n            </div>\n            <p class=\"calendar-title-year\" [hidden]=\"this.viewType === 'day'\">{{ this.viewDate | date: 'yyyy' }}</p>\n            <p class=\"calendar-title-month\" [hidden]=\"(this.viewType === 'month' || this.viewType === 'year')\">{{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}</p>\n          </div>\n        </ng-template>\n        <!-- end: title_mobileBlock -->\n\n      </div>\n      <!-- end calendar-title-block -->\n\n      <div class=\"calendar-switch-btn\">\n        <app-ui-tab-style2 (onTabChildClick)=\"switchPadViewMode($event)\" [tabIndex]=\"this.viewTypeIndex\">\n          <app-ui-tab-child>{{language.day |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.week |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.month |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.year |translate }}</app-ui-tab-child>\n        </app-ui-tab-style2>\n        <!-- end tab style2 -->\n      </div>\n      <!-- end calendar-switch-btn -->\n\n      <div class=\"calendar-action-btn\">\n        <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" (click)=\"clickToday()\">\n              <div class=\"text-block\">\n                <p>{{language.today |translate }}</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" Action action=\"calendarAddEvent\" (actionClick)=\"addEvent()\">\n              <div class=\"img-block\">\n                <img [src]=\"'assets/img/icon-cal-new.svg'\" />\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block calendar-filter-btn\">\n            <app-ui-information-btn [outsideSpace]=\"outsideSpace\"\n                                    [messageContent]=\"filterInfo\"\n                                    (onClick)=\"onInfoTabClick($event)\" >\n\n              <div class=\"calendar-btn\">\n                <div class=\"img-block\">\n                  <img [src]=\"'assets/img/icon-cal-filter.svg'\" />\n                </div>\n              </div>\n            </app-ui-information-btn>\n          </li>\n        </ul>\n      </div>\n      <!-- end calendar-action-btn -->\n    </div>\n    <!-- end calendar-title-actionBtns -->\n    <!-- </app-ui-infinite-scroll> -->\n\n    <!-- Filter content -->\n    <ng-template #filterContent>\n      <snd-calendar-filter [optionMap]=\"optionMap\" (activityTypeListChange)=\"onActivityTypeListChange($event)\"></snd-calendar-filter>\n    </ng-template>\n\n    <!--info content-->\n    <app-ui-information-content #filterInfo class=\"filter-pc\"\n                                (btnOnClick)=\"onCloseInfo()\"\n                                [defaultPos]=\"'bottom'\"\n                                [paddindData]=\"paddindData\"\n                                [showArrow]=\"false\">\n      <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n    </app-ui-information-content>\n    <!-- end: Filter content -->\n\n    <!--\n      [(isSwitchView)]=\"isLoading\"\n    -->\n    <utils-calendar class=\"calendar-container\"\n                    [ngClass]=\"(isExpandDetail || isExpandEdit ? 'no-scroll':'')\"\n                    [viewType]=\"viewType\"\n                    [weekStartsOn]=\"weekStartsOn\"\n                    [viewDate]=\"viewDate\"\n                    [translateMap]=\"translateMap\"\n                    [eventList]=\"calendarEventListAfterFilter\"\n                    (viewDateChange)=\"onViewDateChange($event)\"\n                    (uiCalendarClickEventItem)=\"onClickDetail($event)\"\n                    (uiCalendarMoreInfoClicked)=\"onInfoTabClick($event)\"></utils-calendar>\n  </div>\n  <!-- end: main -->\n\n  <div global-main>\n    <!--delete block -->\n    <app-ui-alert-confirm #calendarDelete [(isPopupOpen)]=\"isCalendarDelete\" (onCancel)=\"onClickDeleteCancel()\" (onConfirm)=\"onClickDeleteConfirm()\" [title]=\"language.delete | translate\"\n                          [message]=\"language.deleteMessage | translate\" [cancelBtnText]=\"language.no | translate\" [confirmBtnText]=\"language.yes | translate\">\n    </app-ui-alert-confirm>\n    <!-- end: Appointment delete -->\n\n    <!-- detail block -->\n    <app-ui-modal-style-text1 class=\"wd-md\"\n                              [(isPopupOpen)]=\"isExpandDetail\"\n                              (close)=\"onToggleDetailModal($event)\"\n                              [ngClass]=\"{'no-scroll': isExpandEdit}\">\n      <ng-container textType=\"modal-title-detail\">{{language.appointmentDetail | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-detail [calendarEventDetail]=\"calendarEventDetail\"></snd-calendar-detail>\n      </ng-container>\n      <!-- end: popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\" (ClickBtn)=\"isCalendarDelete = true\">\n            <ng-container TextType=\"cust\">{{language.delete | translate}}</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [btnHeight]=\"'sm'\" (ClickBtn)=\"editEvent()\">\n            <!-- <ng-container TextType=\"cust\"><span [routerLink]=\"['editEvent']\">EDIT</span></ng-container> -->\n            <ng-container TextType=\"cust\">{{language.edit | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end: modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: Appointment Detail -->\n\n    <!--add/edit calendar popup-->\n    <app-ui-modal-style-text1 class=\"wd-lg calendar-edit-content\"\n                              [(isPopupOpen)]=\"isExpandEdit\"\n                              [isScrollToTop]=\"true\"\n                              (close)=\"onToggleAppointmentModal(false)\"\n                              [isBackdropClose]=\"false\">\n      <ng-container textType=\"modal-title-detail\">{{language.appointment | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-edit [calendarEventDetail]=\"calendarEventDetail\"\n                           [todayCalendarEvent]=\"viewDateCalendarEventList\"\n                           [isSaveClick]=\"isSaveClick\"\n                           [viewDate]=\"viewDate\"\n                           [translateMap]=\"translateMap\"\n                           [optionMap]=\"optionMap\"\n                           (saveEvent)=\"onSaveCalendarEvent($event)\"></snd-calendar-edit>\n\n      </ng-container>\n      <!-- end popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" (ClickBtn)=\"onClickAppointmentSave()\">\n            <ng-container TextType=\"cust\">{{language.save | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: add/edit calendar -->\n\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isSave\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.saved | translate}}</ng-container>\n    </app-ui-popup-style-feedback>\n    <!-- end: Appointment save -->\n\n    <!-- Delete Success -->\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDelete\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.delete | translate}}</ng-container>\n    </app-ui-popup-style-feedback>\n    <!-- end of Delete Success -->\n\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isLoading\" [hasAutoDisappear]=\"false\">\n      <ng-container textType=\"modal-img-detail\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">Loading</ng-container>\n    </app-ui-popup-style-feedback>\n\n    <!-- filter block -->\n    <app-ui-modal-style-text1 class=\"wd-sm\" [(isPopupOpen)]=\"isExpandFilter\" [isHasBtmBlock]=\"false\" (close)=\"onToggleFilterModal($event)\" class=\"filter-mobile\">\n      <ng-container textType=\"modal-title-detail\">{{language.filter |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n      </ng-container>\n      <!-- end: popup-content -->\n    </app-ui-modal-style-text1>\n    <!-- end: Filter -->\n  </div>\n  <!-- end: global-main -->\n</app-ui-main-full>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{background-color:transparent}:host *{-webkit-tap-highlight-color:transparent}:host ::ng-deep .ui-refresher-content{background-color:#f5f5f5}:host ::ng-deep .ui-page-content .ui-main-full-content{padding:0!important}:host .link-btn{cursor:pointer}:host .main-calendar{display:inline-block;width:100%;height:100%}:host .calendar-title-actionBtns{display:flex;justify-content:space-between;align-items:center;padding:25px 30px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:35px}:host .calendar-title-block{min-width:195px}:host .calendar-title-block .link-btn{display:flex}:host .calendar-title-block p{display:inline-block;margin:0;font-weight:700;line-height:1.33;letter-spacing:.2px;color:#414141}:host .calendar-title-block p:not(:last-child){margin-right:20px}:host .calendar-title-block p[hidden]{display:none}:host .calendar-switch-btn{max-width:280px;margin-right:40px}:host .calendar-action-btn .ui-list-block{display:flex;justify-content:flex-start;align-items:stretch;list-style-type:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:20px}:host .calendar-action-btn .ui-list-block .calendar-btn{display:flex;min-width:40px;height:100%;cursor:pointer}:host .calendar-action-btn .ui-list-block .calendar-btn .img-block,:host .calendar-action-btn .ui-list-block .calendar-btn .text-block{flex:1;margin:auto 0}:host .calendar-action-btn .ui-list-block .img-block{display:inline-block;width:40px;height:40px}:host .calendar-action-btn .ui-list-block .img-block img{display:inline-block;width:100%}:host .calendar-action-btn .ui-list-block .text-block{display:flex}:host .calendar-action-btn .ui-list-block .text-block>p{margin:auto 0;flex:1;font-size:.875rem;font-weight:700;line-height:1.43;letter-spacing:.2px;color:#007ab3}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .info-info-content{padding:20px}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .control-btn:after{display:none}:host ::ng-deep .cal-month-view{background-color:#f5f5f5}:host .filter-pc ::ng-deep .info-info-content{padding:25px 20px;border-radius:5px}:host .filter-mobile::ng-deep{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:25px}:host .calendar-filter-item ::ng-deep .nx-checkbox .nx-checkbox__control{margin-top:0}:host .calendar-filter-item ::ng-deep .form-checkbox .check-text{line-height:1.4;letter-spacing:.2px}:host .no-scroll *,:host .no-scroll ::ng-deep *{overflow-y:hidden!important}:host .calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}:host .calendar-edit-content ::ng-deep .modal-block{padding-left:0;padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block .nx-modal__container .nx-modal__content{padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block app-calendar-edit>[class*=gas-col-]:last-child{padding-right:0;padding-left:20px}@media screen and (max-width:1023px){:host ::ng-deep .ui-page-content{background-color:#fff!important}:host ::ng-deep .ui-page-content .ui-main-full-content{min-height:auto!important;background-color:transparent!important}:host ::ng-deep .ui-calendar-year{overflow:hidden;overflow-y:auto;margin-top:-5px}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-day-cell:not(.cal-today) .event-date.event-day-active{background-color:transparent!important;color:#414141!important}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-today .event-date{background-color:#003781!important;color:#fff!important}:host .calendar-title-block{position:relative;padding-left:10px}:host .calendar-title-block nx-icon::ng-deep{font-size:1.25rem;font-weight:700;color:#003781}:host .calendar-title-block nx-icon[hidden]::ng-deep{display:none}:host .calendar-title-block .img-block{display:inline-block;vertical-align:middle;width:16px}:host .calendar-title-block .img-block[hidden]{display:none}:host .calendar-title-block .img-block img{display:inline-block;width:6px;height:10px;position:absolute;top:calc(50% - 5px)}:host .calendar-title-block p{font-size:1.25rem}:host .calendar-title-block p:not(:last-child){margin-right:10px}:host .calendar-title-actionBtns{padding:5px 5px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:15px}:host .calendar-switch-btn{display:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:10px}:host .filter-mobile::ng-deep{display:block}:host .filter-pc::ng-deep .info-info-content{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:35px}}@media screen and (max-width:374px){:host .calendar-title-block{min-width:auto}}"]
            }] }
];
CalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: SettingService },
    { type: TranslateService },
    { type: CalendarService },
    { type: ProfileCodeService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWlCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9LLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULE9BQU8sRUFDUCxNQUFNLEVBQ04sUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUNQLFdBQVcsRUFDWCxVQUFVLEVBQ1gsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVB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QzVFLHdDQUFxRjs7SUFDckYsdUNBQW1FOzs7OztJQTlkdkQsMkNBQXlDOzs7OztJQUFFLHVDQUE4Qjs7Ozs7SUFBRSwyQ0FBc0M7Ozs7O0lBQUMsNkNBQTJDOzs7OztJQUFDLDRDQUF3Qzs7Ozs7SUFBQywrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NhbGVuZGFyL2NhbGVuZGFyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9jYWxlbmRhci9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7XG4gIGFkZERheXMsXG4gIGFkZEhvdXJzLFxuICBhZGRNaW51dGVzLFxuICBhZGRNb250aHMsXG4gIGdldERhdGUsXG4gIGdldERheSxcbiAgZ2V0SG91cnMsXG4gIGdldE1pbnV0ZXMsXG4gIGdldE1vbnRoLFxuICBnZXRZZWFyLFxuICBpc1NhbWVNb250aCxcbiAgc3ViTWludXRlc1xufSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVDb2RlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudCB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBWaWV3RGF0ZUNoYW5nZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ2hhbmdlQWN0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudCB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7TGFuZ3VhZ2V9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXVxuICAsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIC8vdHdvLXdheSBiaW5kaW5nXG4gIHByaXZhdGUgX3BhcmVudEhlaWdodDogbnVtYmVyID0gMDtcbiAgQElucHV0KClcbiAgZ2V0IHBhcmVudEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SGVpZ2h0O1xuICB9XG4gIHNldCBwYXJlbnRIZWlnaHQodmFsKSB7XG4gICAgdGhpcy5fcGFyZW50SGVpZ2h0ID0gdmFsO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudEhlaWdodCA9PSAwKSB7XG4gICAgICB0aGlzLl9wYXJlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRIZWlnaHRDaGFuZ2UuZW1pdCh0aGlzLl9wYXJlbnRIZWlnaHQpO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBsZXQgdGl0bGVCdG5zQmxvY2tfZWxlID0gX3RoaXMudGl0bGVCdG5zQmxvY2submF0aXZlRWxlbWVudDtcbiAgICBsZXQgdGl0bGVCdG5zQmxvY2tfc2l6ZSA9IHRpdGxlQnRuc0Jsb2NrX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBfdGhpcy5jYWxlbmRhckhlaWdodCA9IF90aGlzLl9wYXJlbnRIZWlnaHRcbiAgICAgIC0gdGl0bGVCdG5zQmxvY2tfc2l6ZS5oZWlnaHRcbiAgICAgIC0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGl0bGVCdG5zQmxvY2tfZWxlKS5tYXJnaW5Cb3R0b20pO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ3BhcmVudEhlaWdodCcsIHRoaXMuX3BhcmVudEhlaWdodCk7XG4gICAgLy8gY29uc29sZS53YXJuKCd0aXRsZUJ0bnNCbG9ja19lbGUnLCB0aXRsZUJ0bnNCbG9ja19zaXplLmhlaWdodCwgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGl0bGVCdG5zQmxvY2tfZWxlKS5tYXJnaW5Cb3R0b20pKTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ2NhbGVuZGFySGVpZ2h0JywgX3RoaXMuY2FsZW5kYXJIZWlnaHQpO1xuICB9IC8vIGVuZCBzZXQgcGFyZW50SGVpZ2h0XG4gIEBPdXRwdXQoKSBwYXJlbnRIZWlnaHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgndGl0bGVCdG5zQmxvY2snKSB0aXRsZUJ0bnNCbG9jazogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIFlFQVI6IHN0cmluZyA9ICd5ZWFyJztcbiAgcHJpdmF0ZSBNT05USDogc3RyaW5nID0gJ21vbnRoJztcbiAgcHJpdmF0ZSBXRUVLOiBzdHJpbmcgPSAnd2Vlayc7XG4gIHByaXZhdGUgREFZOiBzdHJpbmcgPSAnZGF5JztcblxuICAvL2NhbGVuZGFyLXVpIGNvbmZpZyBzZXR0aW5nXG4gIHB1YmxpYyB2aWV3VHlwZUluZGV4OiBudW1iZXIgPSAyOyAvLyAnbW9udGgnXG4gIHB1YmxpYyB2aWV3VHlwZTogc3RyaW5nID0gdGhpcy5NT05USDsgLy9cbiAgcHVibGljIHZpZXdEYXRlID0gbmV3IERhdGUoKTsgLy9jdXJyZW50IGRhdGVcbiAgcHVibGljIHdlZWtTdGFydHNPbjogbnVtYmVyID0gMTsgLy8gTW9uZGF5XG5cbiAgLy9jb3VudCBjb250ZW50IGhlaWdodFxuICBwcml2YXRlIGNhbGVuZGFySGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gIC8vY2xpY2sgY2FsZW5kYXIgaWRcbiAgcHVibGljIGNsaWVudElEOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgdHJhbnNsYXRlTWFwIDogTWFwPHN0cmluZyxzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHVibGljIG9wdGlvbk1hcDogTWFwPHN0cmluZyxBcnJheTxQcm9maWxlQ29kZT4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4oKTtcbiAgcHJpdmF0ZSBzdG9yZVN0YXJ0RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgc3RvcmVFbmREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107IC8vIGV2ZW50TGlzdFxuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlcjogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4gPSBbXTsgLy8gZmlsdGVy5b6MIGV2ZW50XG4gIHB1YmxpYyB2aWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDtcblxuICAvLyBwcml2YXRlIGNhbGVuZGFyRXZlbnRNYXAgPSBuZXcgQ2FsZW5kYXJFdmVudE1hcCgpO1xuXG4gIHB1YmxpYyBhY3Rpdml0eVR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTsgLy8gRELkuK3miYDmnIlhY3Rpdml0eVR5cGVcbiAgcHVibGljIGFsZXJ0VHlwZUxpc3Q6IEFycmF5PFByb2ZpbGVDb2RlPiA9IFtdO1xuICBwdWJsaWMgbGFuZ3VhZ2UgOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwcml2YXRlIGN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLy8gcG9wdXBcbiAgcHVibGljIGlzRXhwYW5kRmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0V4cGFuZERldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFeHBhbmRFZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNTYXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1NhdmVDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDYWxlbmRhckRlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gdHJhbnNsYXRlXG4gIHByaXZhdGUgZGF5VHlwZXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydDcm9zc19EYXknLCdBbGxfRGF5J107XG4gIHByaXZhdGUgd2Vla2RheXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgcHJpdmF0ZSBtb250aHNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG4gIHByaXZhdGUgbm9TY2hlZHVsZTogc3RyaW5nID0gJ05vX1NjaGVkdWxlJztcblxuXG4gIC8vIGluZm8gY29uZmlnXG4gIC8v6YG/5YWN54i25bGk5YW25LuWIHBvc2l0aW9uIHJlbGF0aXZlIOW8lemfvyBpbmZvXG4gIHB1YmxpYyBvdXRzaWRlU3BhY2UgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbiAgLy9pbmZvIGNvbnRlbnQg5bem5Y+z5pyA5bCPcGFkZGluZ1xuICBwdWJsaWMgcGFkZGluZERhdGEgPSB7XG4gICAgdG9wOiAxMCxcbiAgICByaWdodDogMTAsXG4gICAgYm90dG9tOiAxMCxcbiAgICBsZWZ0OiB3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjMgPyAxNzAgOiAxMFxuICB9O1xuXG5cbiAgLy9jaGVjayBpcyBwYWQgb3IgbW9iaWxlXG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdTZXJ2aWNlLHByaXZhdGUgdHJhbnNsYXRlU2VydmljZSA6IFRyYW5zbGF0ZVNlcnZpY2UscHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2luaXQgY2FsZW5kYXIgdHlwZVxuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfVHlwZScpO1xuICAgIHRoaXMuYWxlcnRUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfUmVtaW5kVGltZScpO1xuICAgIHRoaXMub3B0aW9uTWFwLnNldCgnQ2FsZW5kYXJfVHlwZScsIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCk7XG4gICAgdGhpcy5vcHRpb25NYXAuc2V0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5hbGVydFR5cGVMaXN0KTtcbiAgICB0aGlzLmRheVR5cGVzTGlzdC5mb3JFYWNoKChkYXlUeXBlKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQoZGF5VHlwZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShkYXlUeXBlKSlcbiAgICB9KTtcbiAgICB0aGlzLndlZWtkYXlzTGlzdC5mb3JFYWNoKCh3ZWVrZGF5KSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQod2Vla2RheSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh3ZWVrZGF5KSlcbiAgICB9KTtcbiAgICB0aGlzLm1vbnRoc0xpc3QuZm9yRWFjaCgobW9udGgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldChtb250aCwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShtb250aCkpXG4gICAgfSk7XG4gICAgdGhpcy50cmFuc2xhdGVNYXAuc2V0KHRoaXMubm9TY2hlZHVsZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh0aGlzLm5vU2NoZWR1bGUpKTtcblxuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIC8vc2V0IGNvbXBvbmVudCBpcyBkZXRhY2hcbiAgICAvLyB0aGlzLmNoYW5nZURldGVjdG9yLmRldGFjaCgpO1xuXG4gICAgLy9waG9uZSBkZWZhdWx0IHZpZXcgaXMgZGF5IHZpZXdcbiAgICBpZiAodGhpcy53aW5kb3dXaWR0aCA8IDEwMjQpIHtcbiAgICAgIHRoaXMudmlld1R5cGVJbmRleCA9IDA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8vbG9hZCBkZWZhdWx0IGZpbHRlciBzZXR0aW5nXG4gICAgbGV0IGRlZmF1bHRTZXR0aW5nVmFsID0gdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKCdDYWxlbmRhckZpbHRlclNldHRpbmcnKS5TZXR0aW5nVmFsO1xuICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KGRlZmF1bHRTZXR0aW5nVmFsKSkge1xuICAgICAgbGV0IGNhbGVuZGFyU2V0dGluZyA9IEpTT04ucGFyc2UoZGVmYXVsdFNldHRpbmdWYWwpO1xuXG4gICAgICAvL2RlZmF1bHQgYWxsIGNoZWNrZWRcbiAgICAgIGlmIChPYmplY3Qua2V5cyhjYWxlbmRhclNldHRpbmcpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgICAgIGNvZGVJdGVtLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QuZm9yRWFjaCgoY29kZUl0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgY29kZSA9IGNvZGVJdGVtLmdldENvZGUoKTtcbiAgICAgICAgICBsZXQgaXNDaGVjayA9IGNhbGVuZGFyU2V0dGluZ1tjb2RlXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNhbGVuZGFyU2V0dGluZ1tjb2RlXTtcbiAgICAgICAgICBjb2RlSXRlbS5pc0NoZWNrID0gaXNDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLnNldEN1cnJlbnRGaWx0ZXJPcHRpb24odW5kZWZpbmVkKTtcblxuICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMudHlwZUNoYW5nZSh0aGlzLnZpZXdUeXBlSW5kZXgpO1xuICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICB9IC8vIGVuZCBuZ09uSW5pdFxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnR5cGVDaGFuZ2UodGhpcy52aWV3VHlwZUluZGV4KTtcbiAgfVxuXG4gIHN3aXRjaFBhZFZpZXdNb2RlKGFjdGl2ZVRhYkluZGV4KSB7XG4gICAgY29uc29sZS5kZWJ1Zygnc3dpdGNoUGFkVmlld01vZGUnKTtcblxuICAgIGlmIChhY3RpdmVUYWJJbmRleCAhPSB0aGlzLnZpZXdUeXBlSW5kZXgpIHtcbiAgICAgIC8vY291bnQgc3RhcnQgJiBlbmRcbiAgICAgIHRoaXMudHlwZUNoYW5nZShhY3RpdmVUYWJJbmRleCk7XG5cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAvL2xvYWQgZGF0YSAmIHJlZnJlc2hcbiAgICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgIH1cblxuICB9XG5cbiAgdHlwZUNoYW5nZShhY3RpdmVUYWJJbmRleCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLWNvbXBvbmVudC10eXBlQ2hhbmdlJywgYWN0aXZlVGFiSW5kZXgsIHRoaXMudmlld1R5cGUpO1xuXG4gICAgbGV0IHN0YXJ0LCBlbmQ7XG4gICAgdGhpcy52aWV3VHlwZUluZGV4ID0gYWN0aXZlVGFiSW5kZXg7XG5cbiAgICBzd2l0Y2ggKGFjdGl2ZVRhYkluZGV4KSB7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLllFQVI7XG4gICAgICAgIHRoaXMuY2FsY3VDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gdGhpcy5NT05USDtcbiAgICAgICAgdGhpcy5jYWxjdUNvbnRlbnRIZWlnaHQoKTtcbiAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCksIHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIGVuZCA9IG5ldyBEYXRlKGdldFllYXIoYWRkTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKSwgZ2V0TW9udGgoYWRkTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIC8vY291bnQgY3VycmVudCB0aW1lIGlzIGhhdmUgZGF0YVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gdGhpcy5XRUVLO1xuICAgICAgICBzdGFydCA9IG5ldyBEYXRlKGdldFllYXIoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCAoMSAtIGdldERheSh0aGlzLnZpZXdEYXRlKSkpKSwgZ2V0TW9udGgoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCAoMSAtIGdldERheSh0aGlzLnZpZXdEYXRlKSkpKSwgZ2V0RGF0ZShhZGREYXlzKHRoaXMudmlld0RhdGUsICgxIC0gZ2V0RGF5KHRoaXMudmlld0RhdGUpKSkpLCAwLCAwLCAwKTtcbiAgICAgICAgZW5kID0gbmV3IERhdGUoZ2V0WWVhcihhZGREYXlzKHRoaXMudmlld0RhdGUsICg3IC0gZ2V0RGF5KHRoaXMudmlld0RhdGUpKSkpLCBnZXRNb250aChhZGREYXlzKHRoaXMudmlld0RhdGUsICg3IC0gZ2V0RGF5KHRoaXMudmlld0RhdGUpKSkpLCBnZXREYXRlKGFkZERheXModGhpcy52aWV3RGF0ZSwgKDcgLSBnZXREYXkodGhpcy52aWV3RGF0ZSkpKSksIDAsIDAsIDApO1xuICAgICAgICAvL2NvdW50IGN1cnJlbnQgdGltZSBpcyBoYXZlIGRhdGFcbiAgICAgICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLkRBWTtcbiAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMudmlld0RhdGUpLGdldE1vbnRoKHRoaXMudmlld0RhdGUpICwgZ2V0RGF0ZSh0aGlzLnZpZXdEYXRlKSwgMCwgMCwgMCk7XG4gICAgICAgIGVuZCA9IG5ldyBEYXRlKGdldFllYXIoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCAxKSksIGdldE1vbnRoKGFkZERheXModGhpcy52aWV3RGF0ZSwgMSkpLCBnZXREYXRlKGFkZERheXModGhpcy52aWV3RGF0ZSwgMSkpLCAwLCAwLCAwKTtcbiAgICAgICAgLy9jb3VudCBjdXJyZW50IHRpbWUgaXMgaGF2ZSBkYXRhXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50VGltZSgpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZXcgdHlwZSBjaGFuZ2U6IGRheScpO1xuICAgICAgICBicmVhaztcbiAgICB9IC8vIGVuZCBzd2l0Y2hcblxuICAgIGlmICh0aGlzLnZpZXdUeXBlICE9IHRoaXMuWUVBUikge1xuXG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShzdGFydCkgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShlbmQpKSB7XG4gICAgICAgIHRoaXMuc3RvcmVTdGFydERhdGUgPSBzdGFydDtcbiAgICAgICAgdGhpcy5zdG9yZUVuZERhdGUgPSBlbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXItY29tcG9uZW50LXR5cGVDaGFuZ2UgZG9uZScpO1xuXG5cblxuICB9IC8vIGVuZCB0eXBlQ2hhbmdlXG5cbiAgLy9waG9uZSBoZWFkZXIgY2hhbmdlIG1vZGVcbiAgbW9iaWxlQmFja1ZpZXdUeXBlKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ21vYmlsZUJhY2tWaWV3VHlwZScsIHRoaXMudmlld1R5cGUpO1xuICAgIHN3aXRjaCAodGhpcy52aWV3VHlwZSkge1xuICAgICAgY2FzZSB0aGlzLk1PTlRIOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMyk7IC8vIGJhY2sgdG8geWVhclxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5XRUVLOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7IC8vIGJhY2sgdG8gbW9udGhcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuREFZOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7IC8vIGJhY2sgdG8gbW9udGhcbiAgICAgICAgYnJlYWs7XG4gICAgfSAvLyBlbmQgc3dpdGNoXG5cblxuICAgIC8vYmVjYXVzZSBjaGFuZ2UgdmlldyB0eXBlICwgc28gZGF0ZSByYW5nZSBpcyBjaGFuZ2VcbiAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcblxuICB9IC8vIGVuZCBtb2JpbGVDaGFuZ2VWaWV3VHlwZVxuXG4gIGNsaWNrVG9kYXkoKSB7XG4gICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc29sZS53YXJuKCdjbGlja1RvZGF5JywgdGhpcy52aWV3RGF0ZSk7XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuICAgIC8vbG9hZCBkYXRhICYgcmVmcmVzaFxuICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgIHRoaXMubG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgfVxuXG4gIC8vd2hlbiBjYWxlbmRhciBjb21wb25lbnQgYW55IGNsaWNrIGNoYW5nZSB2aWV3RGF0ZSAsIHdpbGwgY2hlY2sgcGFkL3Bob25lIGN1cnJlbnQgdmlld1R5cGUgdG8gY2hhbmdlIG1vZGVcbiAgb25WaWV3RGF0ZUNoYW5nZSh2aWV3RGF0ZUNoYW5nZTogVmlld0RhdGVDaGFuZ2UpIHtcbiAgICBsZXQgdmFsID0gbmV3IERhdGUodmlld0RhdGVDaGFuZ2Uudmlld0RhdGUpO1xuICAgIGxldCBhY3Rpb24gPSB2aWV3RGF0ZUNoYW5nZS5hY3Rpb247XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci1jb21wb25lbnQgdXBkYXRlIHZpZXdEYXRlJyk7XG4gICAgaWYoaXNTYW1lTW9udGgodGhpcy52aWV3RGF0ZSwgdmFsKSAmJiB0aGlzLmlzUGFkKCkpIHtcbiAgICAgIHRoaXMudmlld0RhdGUgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0RhdGUgPSB2YWw7XG4gICAgICAvL2lmIHllYXIgY2hhbmdlIGRhdGUgLCBhbHdhc3kgc3dpdGNoIG1vbnRoXG4gICAgICBpZiAodGhpcy52aWV3VHlwZSA9PSB0aGlzLllFQVIgJiYgYWN0aW9uID09IENoYW5nZUFjdGlvbi5DTElDSykge1xuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnZpZXdUeXBlID09IHRoaXMuTU9OVEggJiYgIXRoaXMuaXNQYWQoKSAmJiBhY3Rpb24gPT0gQ2hhbmdlQWN0aW9uLkNMSUNLKSB7XG4gICAgICAgIC8vaWYgZGV2aWNlIGlzIHBob25lICwgY2xpY2sgZGF5IHN3aXRjaCB0byB3ZWVrIHdoZW4gdmlldyB0eXBlIGlzIG1vbnRoXG4gICAgICAgIHRoaXMudHlwZUNoYW5nZSgwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL2Vsc2UgY2FsY3VsYXRlIG5ldyBzdGFydCAmIGVuZFxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UodGhpcy52aWV3VHlwZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgLy9sb2FkIGRhdGEgJiByZWZyZXNoXG4gICAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG4gICAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICB9XG4gIH1cblxuICAvL2ZldGNoIGNhbGVuZGFyIGJldHdlZW4gc3RhcnQgJiBlbmQgcmFuZ2VcbiAgbG9hZENhbGVuZGFyRGF0YSgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdsb2FkQ2FsZW5kYXIgZGF0YScpO1xuICAgIGlmICh0aGlzLnZpZXdUeXBlICE9PSB0aGlzLllFQVIpIHsgLy8geWVhciBubyBuZWVkIHF1ZXJ5IGRhdGEgLCBvbmx5IHZpZXdcblxuICAgICAgaWYodGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyLmxlbmd0aD4yMClcbiAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyID0gW107XG5cbiAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuc3RvcmVTdGFydERhdGUpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5zdG9yZUVuZERhdGUpKSB7XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudExpc3QodGhpcy5zdG9yZVN0YXJ0RGF0ZSwgdGhpcy5zdG9yZUVuZERhdGUsICcnKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZGVidWcoJ2xvYWRDYWxlbmRhciBkYXRhIGRvbmUnKTtcbiAgfVxuXG4gIGxvYWRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEKS5zdWJzY3JpYmUoIGRhdGEgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdnZXRDYWxlbmRhckV2ZW50RGV0YWlsJywgZGF0YSk7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsID0gZGF0YTtcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5kaXNwbGF5QWN0aXZpdHkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDYWxlbmRhcl9UeXBlJyx0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWN0aXZpdHkpO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmRpc3BsYXlBbGVydDEgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSk7XG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuZGlzcGxheUFsZXJ0MiA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLCB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQyKTtcbiAgICAgIHRoaXMub25Ub2dnbGVEZXRhaWxNb2RhbCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKSB7XG4gICAgbGV0IHF1ZXJ5RGF0ZSA9IG5ldyBEYXRlKGdldFllYXIodGhpcy52aWV3RGF0ZSksZ2V0TW9udGgodGhpcy52aWV3RGF0ZSksZ2V0RGF0ZSh0aGlzLnZpZXdEYXRlKSwwLDAsMCk7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudExpc3QocXVlcnlEYXRlLCBzdWJNaW51dGVzKGFkZERheXModGhpcy52aWV3RGF0ZSwxKSwxKSwgJycpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignbG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QnLCBkYXRhKTtcbiAgICAgIHRoaXMudmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrRGV0YWlsKGV2ZW50SXRlbSkge1xuICAgIHRoaXMuY2xpZW50SUQgPSBldmVudEl0ZW0uY2xpZW50SUQ7XG4gICAgdGhpcy5sb2FkQ2FsZW5kYXJFdmVudERldGFpbCh0aGlzLmNsaWVudElEKTtcbiAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG5cbiAgICBjb25zb2xlLndhcm4oJ2NsaWNrRGV0YWlsJywgdGhpcy5jbGllbnRJRCk7XG4gIH0gLy8gZW5kIGNsaWNrRGV0YWlsXG5cbiAgb25DbGlja0RlbGV0ZUNhbmNlbCgpIHtcbiAgfSAvLyBlbmQgY2xpY2tEZWxldGVDYW5jZWxcblxuICBvbkNsaWNrRGVsZXRlQ29uZmlybSgpIHtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5kZWxldGVDYWxlbmRhckV2ZW50KHRoaXMuY2xpZW50SUQpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGlmKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaXNEZWxldGUgPSBkYXRhLnN0YXR1cztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICBpZiAodGhpcy5pc0V4cGFuZERldGFpbCkgeyAvLyBjbG9zZSBwb3AgdXBcbiAgICAgIHRoaXMub25Ub2dnbGVEZXRhaWxNb2RhbChmYWxzZSk7XG4gICAgfVxuICB9IC8vIGVuZCBjbGlja0RlbGV0ZUNvbmZpcm1cblxuICBvbkNsaWNrQXBwb2ludG1lbnRTYXZlKCkge1xuICAgIHRoaXMuaXNTYXZlQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgb25TYXZlQ2FsZW5kYXJFdmVudChjYWxlbmRhckV2ZW50RGV0YWlsOiBDYWxlbmRhckV2ZW50RGV0YWlsKSB7XG4gICAgY29uc29sZS53YXJuKCdzYXZlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGlmKGNhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5jbGllbnRJRCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCd1cGRhdGVDYWxlbmRhckV2ZW50JywgY2FsZW5kYXJFdmVudERldGFpbCk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnVwZGF0ZUNhbGVuZGFyRXZlbnQoY2FsZW5kYXJFdmVudERldGFpbC5jbGllbnRJRCwgY2FsZW5kYXJFdmVudERldGFpbCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBjYWxlbmRhckV2ZW50RGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5sb2FkQ2FsZW5kYXJFdmVudERldGFpbCh0aGlzLmNsaWVudElEKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5hZGRDYWxlbmRhckV2ZW50KGNhbGVuZGFyRXZlbnREZXRhaWwpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5pc1NhdmUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdhZGRDYWxlbmRhckV2ZW50Jyk7XG4gICAgICAgICAgICBjYWxlbmRhckV2ZW50RGV0YWlsLmNsaWVudElEID0gZGF0YS5jbGllbnRJRDtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbCA9IGNhbGVuZGFyRXZlbnREZXRhaWw7XG4gICAgICAgICAgICB0aGlzLm9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlzU2F2ZUNsaWNrID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGlzUGFkKCkge1xuICAgIHJldHVybiB0aGlzLndpbmRvd1dpZHRoID49IDEwMjQ7XG4gIH1cblxuICBlZGl0RXZlbnQoKSB7XG4gICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodHJ1ZSk7XG4gIH1cblxuICBhZGRFdmVudCgpIHtcbiAgICB0aGlzLmNsaWVudElEID0gJyc7XG4gICAgbGV0IGN1cnJlbnRUaW1lOyAvLyBhZGp1c3QgdGltZSB0byBuZXh0IGludGVydmFsXG4gICAgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMudmlld0RhdGUpLGdldE1vbnRoKHRoaXMudmlld0RhdGUpLGdldERhdGUodGhpcy52aWV3RGF0ZSksZ2V0SG91cnMobmV3IERhdGUoKSksZ2V0TWludXRlcyhuZXcgRGF0ZSgpKSk7XG4gICAgY3VycmVudFRpbWUgPSBhZGRNaW51dGVzKGN1cnJlbnRUaW1lLCAoNSAtIGdldE1pbnV0ZXMoY3VycmVudFRpbWUpICUgNSkpOyAgLy8gYWRqdXN0IG1pbnV0ZXMgdG8gbmV4dCA1IG1pbnV0ZXNcbiAgICBjdXJyZW50VGltZSA9IGFkZEhvdXJzKGN1cnJlbnRUaW1lLCAxKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSAgbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoJycsJycsJycsJycsbnVsbCwnTicsY3VycmVudFRpbWUsYWRkSG91cnMoY3VycmVudFRpbWUsMSksJ1knLCc4JywnJywnJywnJyxudWxsKTtcbiAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG4gICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodHJ1ZSk7XG4gIH1cblxuICAvLyBibG9jayB3aGljaCBjb250cm9sIGZpbHRlclxuXG4gIG9uQWN0aXZpdHlUeXBlTGlzdENoYW5nZShhbGVydFR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4pIHtcbiAgICB0aGlzLmFsZXJ0VHlwZUxpc3QgPSBhbGVydFR5cGVMaXN0O1xuICAgIHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QgPSBbXTtcbiAgICBsZXQgc2V0dGluZ1ZhbCA9IHt9O1xuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnYWN0aXZpdHlUeXBlIGNvZGVJdGVtJywgY29kZUl0ZW0pO1xuICAgICAgaWYgKHNldHRpbmdWYWwgIT0gdW5kZWZpbmVkKSBzZXR0aW5nVmFsW2NvZGVJdGVtLmdldENvZGUoKV0gPSBjb2RlSXRlbS5pc0NoZWNrO1xuXG4gICAgICBpZiAoY29kZUl0ZW0uaXNDaGVjaykge1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0LnB1c2goY29kZUl0ZW0uZ2V0Q29kZSgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZmlsdGVyT3B0aW9uQ2hhbmdlKHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QpO1xuICAgIHRoaXMuc2V0dGluZ1ZhbHVlQ2hhbmdlKHNldHRpbmdWYWwpO1xuICB9XG5cbiAgc2V0dGluZ1ZhbHVlQ2hhbmdlKHNldHRpbmdWYWx1ZSkge1xuICAgIC8vdXBkYXRlIGZpbHRlciBzZXR0aW5nXG4gICAgbGV0IHNldHRpbmdPYmogPSBuZXcgU2V0dGluZyh0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoJ0NhbGVuZGFyRmlsdGVyU2V0dGluZycpLlNldHRpbmdJRCwgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKCdDYWxlbmRhckZpbHRlclNldHRpbmcnKS5TZXR0aW5nTmFtZSwgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ1ZhbHVlKSk7XG4gICAgdGhpcy5zZXR0aW5nU2VydmljZS51cGRhdGVTZXR0aW5nKHNldHRpbmdPYmopLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLmNvbXBvbmVudC11cGRhdGUgc2V0dGluZycsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyT3B0aW9uQ2hhbmdlKGN1cnJlbnRGaWx0ZXJPcHRpb246IEFycmF5PHN0cmluZz4pIHtcbiAgICBjb25zb2xlLndhcm4oJ2N1cnJlbnRGaWx0ZXJPcHRpb24nLCBjdXJyZW50RmlsdGVyT3B0aW9uKTtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0ID0gY3VycmVudEZpbHRlck9wdGlvbjtcbiAgICB0aGlzLnJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJyZW50RmlsdGVyT3B0aW9uKHNldHRpbmdWYWwpIHtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0ID0gW107XG5cbiAgICAvL2ZpbmQgY2hlY2tlZCBmaWx0ZXJcbiAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QuZm9yRWFjaCgoY29kZUl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2FjdGl2aXR5VHlwZSBjb2RlSXRlbScsIGNvZGVJdGVtKTtcbiAgICAgIGlmIChzZXR0aW5nVmFsICE9IHVuZGVmaW5lZCkgc2V0dGluZ1ZhbFtjb2RlSXRlbS5nZXRDb2RlKCldID0gY29kZUl0ZW0uaXNDaGVjaztcblxuICAgICAgaWYgKGNvZGVJdGVtLmlzQ2hlY2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdC5wdXNoKGNvZGVJdGVtLmdldENvZGUoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCgpIHtcblxuICAgIHRoaXMuY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlciA9IFtdO1xuXG4gICAgLy9maWx0ZXIgZXZlbnQgY2FsZW5kYXIgdHlwZVxuICAgIGNvbnNvbGUuZGVidWcoJ3N0YXJ0IHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCcsIHRoaXMuY2FsZW5kYXJFdmVudExpc3QubGVuZ3RoKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0QWZ0ZXJGaWx0ZXIgPSB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0LmZpbHRlcih4ID0+IHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QuaW5kZXhPZih4LmFjdGl2aXR5KSA+IC0xKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ3N0YXJ0IHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCBkb25lJywgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyLmxlbmd0aCk7XG4gICAgLy8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAvL2NvdW50IGhlaWdodFxuICAgIGlmICh0aGlzLnZpZXdUeXBlID09IHRoaXMuREFZIHx8IHRoaXMudmlld1R5cGUgPT0gdGhpcy5XRUVLKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmQgYmxvY2tcblxuICBzY3JvbGxUb0N1cnJlbnRUaW1lKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgdGltZUV2ZW50QWxsX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2FsLXRpbWUtZXZlbnRzJyk7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ190aGlzLnRpbWVFdmVudEFsbF9lbGUnLCB0aW1lRXZlbnRBbGxfZWxlLmxlbmd0aCwgdGltZUV2ZW50QWxsX2VsZSk7XG5cbiAgICAgIGZvciAobGV0IHRpbWVFdmVudF9lbGUgb2YgdGltZUV2ZW50QWxsX2VsZSkge1xuICAgICAgICBsZXQgbW9iaWxlRGF5SGVhZGVyX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2FsLWRheS1oZWFkZXJzJyk7XG4gICAgICAgIGxldCBhbGxEYXlFdmVudF9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNhbC1hbGwtZGF5LWV2ZW50cycpO1xuICAgICAgICBsZXQgYWxsRGF5RXZlbnRfaCA9IChhbGxEYXlFdmVudF9lbGUgIT0gbnVsbFxuICAgICAgICAgID8gYWxsRGF5RXZlbnRfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICAgIDogMCk7XG5cbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdtb2JpbGVEYXlIZWFkZXJfZWxlJywgbW9iaWxlRGF5SGVhZGVyX2VsZSk7XG4gICAgICAgIGlmIChtb2JpbGVEYXlIZWFkZXJfZWxlICE9IG51bGwpIHtcblxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignaWYgX3RoaXMuY2FsZW5kYXJIZWlnaHQnLCB0aW1lRXZlbnRfZWxlLCBfdGhpcy5jYWxlbmRhckhlaWdodCk7XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCdpZiBtb2JpbGVEYXlIZWFkZXJfZWxlJywgbW9iaWxlRGF5SGVhZGVyX2VsZSk7XG5cbiAgICAgICAgICB0aW1lRXZlbnRfZWxlLnN0eWxlLm1heEhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBtb2JpbGVEYXlIZWFkZXJfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICAgICAgLSBhbGxEYXlFdmVudF9oXG4gICAgICAgICAgICAtIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1vYmlsZURheUhlYWRlcl9lbGUpLm1hcmdpbkJvdHRvbSkpICsgJ3B4JztcblxuICAgICAgICAgIC8vIHNjcm9sbCB0byB0aW1lXG4gICAgICAgICAgbGV0IGN1cnJlbnRIb3VyID0gZ2V0SG91cnMobmV3IERhdGUoKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgSG91cjonLCBnZXRIb3VycyhuZXcgRGF0ZSgpKSk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRIb3VyID4gMylcbiAgICAgICAgICAgIHRpbWVFdmVudF9lbGUuc2Nyb2xsVG9wID0gTWF0aC5mbG9vcigoY3VycmVudEhvdXIgLSAzKSAvIDIpICogODBcbiAgICAgICAgICAgICAgKyAoTWF0aC5mbG9vcigoY3VycmVudEhvdXIgLSAzKSAvIDIpXG4gICAgICAgICAgICAgICAgKyAoY3VycmVudEhvdXIgLSAzKSAlIDIpICogODI7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gZW5kIGZvcjogdGltZUV2ZW50QWxsX2VsZVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAyMDApOyAvLyDmnIPmnIlFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yIOWFiCBzZXRUaW1lT3V0IOino1xuICB9IC8vIGVuZCBzY3JvbGxUb0N1cnJlbnRUaW1lXG5cbiAgY2FsY3VDb250ZW50SGVpZ2h0KCkge1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsY3VDb250ZW50SGVpZ2h0Jyk7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdjYWxjdUNvbnRlbnRIZWlnaHQnLCB0aGlzLmNhbGVuZGFySGVpZ2h0KTtcbiAgICAgIC8vIGNhbGN1bGF0ZSB5ZWFyIHZpZXcgaGVpZ2h0XG4gICAgICBsZXQgeWVhcl9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpLWNhbGVuZGFyLXllYXInKTtcbiAgICAgIGxldCB5ZWFyVGFnX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhcHAtdWktY2FsZW5kYXIteWVhcicpO1xuXG4gICAgICBpZiAoeWVhcl9lbGUgIT0gbnVsbCAmJiB5ZWFyVGFnX2VsZSAhPSBudWxsKSB7XG5cbiAgICAgICAgaWYgKF90aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuICAgICAgICAgIHllYXJUYWdfZWxlLnN0eWxlLm1pbkhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICAgIHllYXJUYWdfZWxlLnN0eWxlLmhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHllYXJfZWxlLnN0eWxlLmhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbGN1bGF0ZSBtb250aCB2aWV3IGhlaWdodFxuICAgICAgbGV0IG1vbnRoX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsLW1vbnRoLXZpZXcnKTtcblxuICAgICAgaWYgKG1vbnRoX2VsZSAhPSBudWxsICYmIF90aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuXG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5tYXhIZWlnaHQgPSBfdGhpcy5jYWxlbmRhckhlaWdodCArICdweCc7XG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5taW5IZWlnaHQgPSBfdGhpcy5jYWxlbmRhckhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgICBpZihtb250aF9lbGUuc3R5bGUubWF4SGVpZ2h0ID09ICcwcHgnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignSGVyZScpO1xuICAgICAgICBtb250aF9lbGUuc3R5bGUubWF4SGVpZ2h0ID0gMTAwIC0gMyArICd2aCc7XG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5taW5IZWlnaHQgPSAxMDAgLSAzICsgJ3ZoJztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICB9LCAxMDApOyAvLyDmnIPmnIlFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yIOWFiCBzZXRUaW1lT3V0IOino1xuICB9IC8vIGVuZCBjYWxjdUNvbnRlbnRIZWlnaHRcblxuXG4gIC8vIGZ1bmN0aW9uIHdoaWNoIGNvbnRyb2wgcG9wdXBcblxuICBvblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodmFsKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzRXhwYW5kRWRpdCA9IHZhbDtcbiAgICAgIGlmICh0aGlzLmlzRXhwYW5kRmlsdGVyKSB7IHRoaXMub25DbG9zZUluZm8oKTsgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAwKTsgLy8g5pyD5pyJRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvciDlhYggc2V0VGltZU91dCDop6NcblxuXG4gIH0gLy8gZW5kIHRvZ2dsZUFwcG9pbnRtZW50TW9kYWxcblxuICBvblRvZ2dsZURldGFpbE1vZGFsKHZhbCkge1xuICAgIHRoaXMuaXNFeHBhbmREZXRhaWwgPSB2YWw7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRGaWx0ZXIpIHsgdGhpcy5vbkNsb3NlSW5mbygpOyB9XG4gIH1cbiAgb25Ub2dnbGVGaWx0ZXJNb2RhbCh2YWwpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRGaWx0ZXIpIHtcbiAgICAgIHRoaXMub25DbG9zZUluZm8oKTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmQgYmxvY2tcblxuICAvLyDoqK0gaW5mbyBwb3NpdGlvblxuICBAVmlld0NoaWxkKFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQpIG5vd1Nob3dCdG46IFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQpIGluZm9Db250ZW50OiBVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5mbycpIGZpbHRlckluZm86IFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50O1xuICBvbkluZm9UYWJDbGljayhkb20pIHtcbiAgICBjb25zb2xlLndhcm4oJ2luZm9UYWJDbGljaycpO1xuICAgIGNvbnNvbGUud2Fybignbm93U2hvd0J0bicsIHRoaXMubm93U2hvd0J0bik7XG5cbiAgICBpZiAodGhpcy5ub3dTaG93QnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3dTaG93QnRuIGNsaWNrJywgdGhpcy5ub3dTaG93QnRuLmJ0bkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgIGlmIChkb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ21lc3NhZ2VDb250ZW50JywgZG9tLm1lc3NhZ2VDb250ZW50LCB0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQpO1xuICAgICAgICBpZiAoZG9tLm1lc3NhZ2VDb250ZW50ICE9PSB0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQpIHtcbiAgICAgICAgICAvLyB0aGlzLmNsb3NlSW5mbygpO1xuICAgICAgICAgIHRoaXMubm93U2hvd0J0bi5jbG9zZUluZm8oKTtcbiAgICAgICAgICB0aGlzLm5vd1Nob3dCdG4gPSBkb207XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXNldEluZm9Qb3MoKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBlbmQgaWY6IGRvbSAhPT0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm93U2hvd0J0biA9IGRvbTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ21lc3NhZ2VDb250ZW50IGZpbHRlcicsIHRoaXMubm93U2hvd0J0bi5tZXNzYWdlQ29udGVudCA9PT0gdGhpcy5maWx0ZXJJbmZvLCB0aGlzLmZpbHRlckluZm8pO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQgPT09IHRoaXMuZmlsdGVySW5mbykge1xuICAgICAgdGhpcy5pc0V4cGFuZEZpbHRlciA9IHRydWU7XG4gICAgfVxuICB9IC8vIGVuZCBpbmZvVGFiQ2xpY2tcbiAgcmVzZXRJbmZvUG9zKCkge1xuICAgIC8vIHRoaXMuaXNFeHBhbmRGaWx0ZXIgPSB0cnVlO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3dTaG93QnRuLmNvdW50UG9zKCk7XG4gICAgfVxuICB9IC8vIGVuZCByZXNldEluZm9Qb3NcbiAgb25DbG9zZUluZm8oKSB7XG4gICAgdGhpcy5pc0V4cGFuZEZpbHRlciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3dTaG93QnRuLmNsb3NlSW5mbygpO1xuICAgICAgLy8gdGhpcy5ub3dTaG93QnRuID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2Nsb3NlSW5mbycsIHRoaXMubm93U2hvd0J0biwgdGhpcy5ub3dTaG93QnRuLmJ0bkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9IC8vIGVuZCBjbG9zZUluZm9cbn1cbiJdfQ==