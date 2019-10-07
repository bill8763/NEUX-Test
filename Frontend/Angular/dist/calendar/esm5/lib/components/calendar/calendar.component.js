/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(changeDetector, elementRef, settingService, translateService, calendarService, profileCodeService) {
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
    Object.defineProperty(CalendarComponent.prototype, "parentHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parentHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._parentHeight = val;
            if (this._parentHeight == 0) {
                this._parentHeight = window.innerHeight;
            }
            this.parentHeightChange.emit(this._parentHeight);
            /** @type {?} */
            var _this = this;
            /** @type {?} */
            var titleBtnsBlock_ele = _this.titleBtnsBlock.nativeElement;
            /** @type {?} */
            var titleBtnsBlock_size = titleBtnsBlock_ele.getBoundingClientRect();
            _this.calendarHeight = _this._parentHeight
                - titleBtnsBlock_size.height
                - parseInt(window.getComputedStyle(titleBtnsBlock_ele).marginBottom);
            this.changeDetector.markForCheck();
            // console.warn('parentHeight', this._parentHeight);
            // console.warn('titleBtnsBlock_ele', titleBtnsBlock_size.height, parseInt(window.getComputedStyle(titleBtnsBlock_ele).marginBottom));
            // console.warn('calendarHeight', _this.calendarHeight);
        } // end set parentHeight
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        this.changeDetector.markForCheck();
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        //init calendar type
        this.activityTypeList = this.profileCodeService.getCodeArray('Calendar_Type');
        this.alertTypeList = this.profileCodeService.getCodeArray('Calendar_RemindTime');
        this.optionMap.set('Calendar_Type', this.activityTypeList);
        this.optionMap.set('Calendar_RemindTime', this.alertTypeList);
        this.dayTypesList.forEach((/**
         * @param {?} dayType
         * @return {?}
         */
        function (dayType) {
            _this_1.translateMap.set(dayType, _this_1.translateService.translate(dayType));
        }));
        this.weekdaysList.forEach((/**
         * @param {?} weekday
         * @return {?}
         */
        function (weekday) {
            _this_1.translateMap.set(weekday, _this_1.translateService.translate(weekday));
        }));
        this.monthsList.forEach((/**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            _this_1.translateMap.set(month, _this_1.translateService.translate(month));
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
        var defaultSettingVal = this.settingService.getSetting('CalendarFilterSetting').SettingVal;
        if (StringUtils.isNotEmpty(defaultSettingVal)) {
            /** @type {?} */
            var calendarSetting_1 = JSON.parse(defaultSettingVal);
            //default all checked
            if (Object.keys(calendarSetting_1).length == 0) {
                this.activityTypeList.forEach((/**
                 * @param {?} codeItem
                 * @return {?}
                 */
                function (codeItem) {
                    codeItem.isCheck = true;
                }));
            }
            else {
                this.activityTypeList.forEach((/**
                 * @param {?} codeItem
                 * @return {?}
                 */
                function (codeItem) {
                    /** @type {?} */
                    var code = codeItem.getCode();
                    /** @type {?} */
                    var isCheck = calendarSetting_1[code] == undefined ? false : calendarSetting_1[code];
                    codeItem.isCheck = isCheck;
                }));
            }
        }
        this.setCurrentFilterOption(undefined);
        // this.changeDetector.detectChanges();
        this.typeChange(this.viewTypeIndex);
        this.loadCalendarData();
    }; // end ngOnInit
    // end ngOnInit
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = 
    // end ngOnInit
    /**
     * @return {?}
     */
    function () {
        this.typeChange(this.viewTypeIndex);
    };
    /**
     * @param {?} activeTabIndex
     * @return {?}
     */
    CalendarComponent.prototype.switchPadViewMode = /**
     * @param {?} activeTabIndex
     * @return {?}
     */
    function (activeTabIndex) {
        console.debug('switchPadViewMode');
        if (activeTabIndex != this.viewTypeIndex) {
            //count start & end
            this.typeChange(activeTabIndex);
            this.changeDetector.detectChanges();
            //load data & refresh
            this.loadCalendarData();
        }
    };
    /**
     * @param {?} activeTabIndex
     * @return {?}
     */
    CalendarComponent.prototype.typeChange = /**
     * @param {?} activeTabIndex
     * @return {?}
     */
    function (activeTabIndex) {
        console.debug('calendar-component-typeChange', activeTabIndex, this.viewType);
        /** @type {?} */
        var start;
        /** @type {?} */
        var end;
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
    }; // end typeChange
    //phone header change mode
    // end typeChange
    //phone header change mode
    /**
     * @return {?}
     */
    CalendarComponent.prototype.mobileBackViewType = 
    // end typeChange
    //phone header change mode
    /**
     * @return {?}
     */
    function () {
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
    }; // end mobileChangeViewType
    // end mobileChangeViewType
    /**
     * @return {?}
     */
    CalendarComponent.prototype.clickToday = 
    // end mobileChangeViewType
    /**
     * @return {?}
     */
    function () {
        this.viewDate = new Date();
        console.warn('clickToday', this.viewDate);
        this.changeDetector.detectChanges();
        //load data & refresh
        this.loadCalendarData();
        this.loadViewDateCalendarEventList();
    };
    //when calendar component any click change viewDate , will check pad/phone current viewType to change mode
    //when calendar component any click change viewDate , will check pad/phone current viewType to change mode
    /**
     * @param {?} viewDateChange
     * @return {?}
     */
    CalendarComponent.prototype.onViewDateChange = 
    //when calendar component any click change viewDate , will check pad/phone current viewType to change mode
    /**
     * @param {?} viewDateChange
     * @return {?}
     */
    function (viewDateChange) {
        /** @type {?} */
        var val = new Date(viewDateChange.viewDate);
        /** @type {?} */
        var action = viewDateChange.action;
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
    };
    //fetch calendar between start & end range
    //fetch calendar between start & end range
    /**
     * @return {?}
     */
    CalendarComponent.prototype.loadCalendarData = 
    //fetch calendar between start & end range
    /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.debug('loadCalendar data');
        if (this.viewType !== this.YEAR) { // year no need query data , only view
            if (this.calendarEventListAfterFilter.length > 20)
                this.calendarEventListAfterFilter = [];
            if (StringUtils.isNotEmpty(this.storeStartDate) && StringUtils.isNotEmpty(this.storeEndDate)) {
                this.calendarService.getCalendarEventList(this.storeStartDate, this.storeEndDate, '').subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this_1.calendarEventList = data;
                    _this_1.refreshCalendarEventList();
                }));
            }
        }
        console.debug('loadCalendar data done');
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CalendarComponent.prototype.loadCalendarEventDetail = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this_1 = this;
        this.calendarService.getCalendarEventDetail(clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.warn('getCalendarEventDetail', data);
            _this_1.isLoading = false;
            _this_1.calendarEventDetail = data;
            _this_1.calendarEventDetail.displayActivity = _this_1.profileCodeService.convertCode2Text('Calendar_Type', _this_1.calendarEventDetail.activity);
            _this_1.calendarEventDetail.displayAlert1 = _this_1.profileCodeService.convertCode2Text('Calendar_RemindTime', _this_1.calendarEventDetail.alert1);
            _this_1.calendarEventDetail.displayAlert2 = _this_1.profileCodeService.convertCode2Text('Calendar_RemindTime', _this_1.calendarEventDetail.alert2);
            _this_1.onToggleDetailModal(true);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CalendarComponent.prototype.loadViewDateCalendarEventList = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        /** @type {?} */
        var queryDate = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), 0, 0, 0);
        this.calendarService.getCalendarEventList(queryDate, subMinutes(addDays(this.viewDate, 1), 1), '').subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.warn('loadViewDateCalendarEventList', data);
            _this_1.viewDateCalendarEventList = data;
        }));
    };
    /**
     * @param {?} eventItem
     * @return {?}
     */
    CalendarComponent.prototype.onClickDetail = /**
     * @param {?} eventItem
     * @return {?}
     */
    function (eventItem) {
        this.clientID = eventItem.clientID;
        this.loadCalendarEventDetail(this.clientID);
        this.loadViewDateCalendarEventList();
        console.warn('clickDetail', this.clientID);
    }; // end clickDetail
    // end clickDetail
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onClickDeleteCancel = 
    // end clickDetail
    /**
     * @return {?}
     */
    function () {
    }; // end clickDeleteCancel
    // end clickDeleteCancel
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onClickDeleteConfirm = 
    // end clickDeleteCancel
    /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.calendarService.deleteCalendarEvent(this.clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.status) {
                _this_1.isDelete = data.status;
            }
        }));
        this.loadCalendarData();
        if (this.isExpandDetail) { // close pop up
            this.onToggleDetailModal(false);
        }
    }; // end clickDeleteConfirm
    // end clickDeleteConfirm
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onClickAppointmentSave = 
    // end clickDeleteConfirm
    /**
     * @return {?}
     */
    function () {
        this.isSaveClick = true;
    };
    /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    CalendarComponent.prototype.onSaveCalendarEvent = /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    function (calendarEventDetail) {
        var _this_1 = this;
        console.warn('saveCalendarEvent');
        if (calendarEventDetail) {
            if (StringUtils.isNotEmpty(this.clientID)) {
                console.warn('updateCalendarEvent', calendarEventDetail);
                this.calendarService.updateCalendarEvent(calendarEventDetail.clientID, calendarEventDetail).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    if (data.status) {
                        _this_1.calendarEventDetail = calendarEventDetail;
                        _this_1.loadCalendarEventDetail(_this_1.clientID);
                        _this_1.isLoading = true;
                        _this_1.onToggleAppointmentModal(false);
                        _this_1.loadCalendarData();
                        _this_1.loadViewDateCalendarEventList();
                    }
                }));
            }
            else {
                this.calendarService.addCalendarEvent(calendarEventDetail).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    if (data.status) {
                        _this_1.isSave = true;
                        console.warn('addCalendarEvent');
                        calendarEventDetail.clientID = data.clientID;
                        _this_1.calendarEventDetail = calendarEventDetail;
                        _this_1.onToggleAppointmentModal(false);
                        _this_1.loadCalendarData();
                    }
                }));
            }
        }
        this.isSaveClick = false;
    };
    /**
     * @private
     * @return {?}
     */
    CalendarComponent.prototype.isPad = /**
     * @private
     * @return {?}
     */
    function () {
        return this.windowWidth >= 1024;
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.editEvent = /**
     * @return {?}
     */
    function () {
        this.onToggleAppointmentModal(true);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.addEvent = /**
     * @return {?}
     */
    function () {
        this.clientID = '';
        /** @type {?} */
        var currentTime;
        currentTime = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), getHours(new Date()), getMinutes(new Date()));
        currentTime = addMinutes(currentTime, (5 - getMinutes(currentTime) % 5)); // adjust minutes to next 5 minutes
        currentTime = addHours(currentTime, 1);
        this.calendarEventDetail = new CalendarEventDetail('', '', '', '', null, 'N', currentTime, addHours(currentTime, 1), 'Y', '8', '', '', '', null);
        this.loadViewDateCalendarEventList();
        this.onToggleAppointmentModal(true);
    };
    // block which control filter
    // block which control filter
    /**
     * @param {?} alertTypeList
     * @return {?}
     */
    CalendarComponent.prototype.onActivityTypeListChange = 
    // block which control filter
    /**
     * @param {?} alertTypeList
     * @return {?}
     */
    function (alertTypeList) {
        var _this_1 = this;
        this.alertTypeList = alertTypeList;
        this.currentFilterOptionList = [];
        /** @type {?} */
        var settingVal = {};
        this.activityTypeList.forEach((/**
         * @param {?} codeItem
         * @return {?}
         */
        function (codeItem) {
            console.debug('activityType codeItem', codeItem);
            if (settingVal != undefined)
                settingVal[codeItem.getCode()] = codeItem.isCheck;
            if (codeItem.isCheck) {
                _this_1.currentFilterOptionList.push(codeItem.getCode());
            }
        }));
        this.filterOptionChange(this.currentFilterOptionList);
        this.settingValueChange(settingVal);
    };
    /**
     * @param {?} settingValue
     * @return {?}
     */
    CalendarComponent.prototype.settingValueChange = /**
     * @param {?} settingValue
     * @return {?}
     */
    function (settingValue) {
        //update filter setting
        /** @type {?} */
        var settingObj = new Setting(this.settingService.getSetting('CalendarFilterSetting').SettingID, this.settingService.getSetting('CalendarFilterSetting').SettingName, JSON.stringify(settingValue));
        this.settingService.updateSetting(settingObj).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.debug('calendar.component-update setting', data);
        }));
    };
    /**
     * @param {?} currentFilterOption
     * @return {?}
     */
    CalendarComponent.prototype.filterOptionChange = /**
     * @param {?} currentFilterOption
     * @return {?}
     */
    function (currentFilterOption) {
        console.warn('currentFilterOption', currentFilterOption);
        this.currentFilterOptionList = currentFilterOption;
        this.refreshCalendarEventList();
    };
    /**
     * @private
     * @param {?} settingVal
     * @return {?}
     */
    CalendarComponent.prototype.setCurrentFilterOption = /**
     * @private
     * @param {?} settingVal
     * @return {?}
     */
    function (settingVal) {
        var _this_1 = this;
        this.currentFilterOptionList = [];
        //find checked filter
        this.activityTypeList.forEach((/**
         * @param {?} codeItem
         * @return {?}
         */
        function (codeItem) {
            console.debug('activityType codeItem', codeItem);
            if (settingVal != undefined)
                settingVal[codeItem.getCode()] = codeItem.isCheck;
            if (codeItem.isCheck) {
                _this_1.currentFilterOptionList.push(codeItem.getCode());
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CalendarComponent.prototype.refreshCalendarEventList = /**
     * @private
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.calendarEventListAfterFilter = [];
        //filter event calendar type
        console.debug('start refreshCalendarEventList', this.calendarEventList.length);
        this.calendarEventListAfterFilter = this.calendarEventList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this_1.currentFilterOptionList.indexOf(x.activity) > -1; }));
        console.debug('start refreshCalendarEventList done', this.calendarEventListAfterFilter.length);
        // this.changeDetector.detectChanges();
        //count height
        if (this.viewType == this.DAY || this.viewType == this.WEEK) {
            this.scrollToCurrentTime();
        }
    };
    // end block
    // end block
    /**
     * @return {?}
     */
    CalendarComponent.prototype.scrollToCurrentTime = 
    // end block
    /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        /** @type {?} */
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var timeEventAll_ele = _this.elementRef.nativeElement.querySelectorAll('div.cal-time-events');
            try {
                // console.warn('_this.timeEventAll_ele', timeEventAll_ele.length, timeEventAll_ele);
                for (var timeEventAll_ele_1 = tslib_1.__values(timeEventAll_ele), timeEventAll_ele_1_1 = timeEventAll_ele_1.next(); !timeEventAll_ele_1_1.done; timeEventAll_ele_1_1 = timeEventAll_ele_1.next()) {
                    var timeEvent_ele = timeEventAll_ele_1_1.value;
                    /** @type {?} */
                    var mobileDayHeader_ele = _this.elementRef.nativeElement.querySelector('div.cal-day-headers');
                    /** @type {?} */
                    var allDayEvent_ele = _this.elementRef.nativeElement.querySelector('div.cal-all-day-events');
                    /** @type {?} */
                    var allDayEvent_h = (allDayEvent_ele != null
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
                        var currentHour = getHours(new Date());
                        console.log('current Hour:', getHours(new Date()));
                        if (currentHour > 3)
                            timeEvent_ele.scrollTop = Math.floor((currentHour - 3) / 2) * 80
                                + (Math.floor((currentHour - 3) / 2)
                                    + (currentHour - 3) % 2) * 82;
                    }
                } // end for: timeEventAll_ele
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (timeEventAll_ele_1_1 && !timeEventAll_ele_1_1.done && (_a = timeEventAll_ele_1.return)) _a.call(timeEventAll_ele_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this_1.changeDetector.markForCheck();
        }), 200); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    }; // end scrollToCurrentTime
    // end scrollToCurrentTime
    /**
     * @return {?}
     */
    CalendarComponent.prototype.calcuContentHeight = 
    // end scrollToCurrentTime
    /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.debug('calcuContentHeight');
        /** @type {?} */
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            console.warn('calcuContentHeight', _this_1.calendarHeight);
            // calculate year view height
            /** @type {?} */
            var year_ele = _this.elementRef.nativeElement.querySelector('.ui-calendar-year');
            /** @type {?} */
            var yearTag_ele = _this.elementRef.nativeElement.querySelector('app-ui-calendar-year');
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
            var month_ele = _this.elementRef.nativeElement.querySelector('.cal-month-view');
            if (month_ele != null && _this.windowWidth > 1023) {
                month_ele.style.maxHeight = _this.calendarHeight + 'px';
                month_ele.style.minHeight = _this.calendarHeight + 'px';
            }
            if (month_ele.style.maxHeight == '0px') {
                console.warn('Here');
                month_ele.style.maxHeight = 100 - 3 + 'vh';
                month_ele.style.minHeight = 100 - 3 + 'vh';
            }
            _this_1.changeDetector.markForCheck();
        }), 100); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    }; // end calcuContentHeight
    // function which control popup
    // end calcuContentHeight
    // function which control popup
    /**
     * @param {?} val
     * @return {?}
     */
    CalendarComponent.prototype.onToggleAppointmentModal = 
    // end calcuContentHeight
    // function which control popup
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this_1 = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this_1.isExpandEdit = val;
            if (_this_1.isExpandFilter) {
                _this_1.onCloseInfo();
            }
            _this_1.changeDetector.markForCheck();
        }), 0); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    }; // end toggleAppointmentModal
    // end toggleAppointmentModal
    /**
     * @param {?} val
     * @return {?}
     */
    CalendarComponent.prototype.onToggleDetailModal = 
    // end toggleAppointmentModal
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.isExpandDetail = val;
        if (this.isExpandFilter) {
            this.onCloseInfo();
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CalendarComponent.prototype.onToggleFilterModal = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (!this.isExpandFilter) {
            this.onCloseInfo();
        }
    };
    /**
     * @param {?} dom
     * @return {?}
     */
    CalendarComponent.prototype.onInfoTabClick = /**
     * @param {?} dom
     * @return {?}
     */
    function (dom) {
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
    }; // end infoTabClick
    // end infoTabClick
    /**
     * @return {?}
     */
    CalendarComponent.prototype.resetInfoPos = 
    // end infoTabClick
    /**
     * @return {?}
     */
    function () {
        // this.isExpandFilter = true;
        if (this.nowShowBtn !== undefined) {
            this.nowShowBtn.countPos();
        }
    }; // end resetInfoPos
    // end resetInfoPos
    /**
     * @return {?}
     */
    CalendarComponent.prototype.onCloseInfo = 
    // end resetInfoPos
    /**
     * @return {?}
     */
    function () {
        this.isExpandFilter = false;
        if (this.nowShowBtn !== undefined) {
            this.nowShowBtn.closeInfo();
            // this.nowShowBtn = undefined;
            // console.warn('closeInfo', this.nowShowBtn, this.nowShowBtn.btnContent.nativeElement);
        }
    }; // end closeInfo
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-calendar',
                    template: "<app-ui-main-full>\n  <div main class=\"main-calendar\">\n\n    <div #titleBtnsBlock class=\"calendar-title-actionBtns\">\n\n      <div class=\"calendar-title-block\">\n        <ng-template *ngIf=\"windowWidth < 1024; then title_mobileBlock else title_pcBlock\"></ng-template>\n\n        <ng-template #title_pcBlock>\n          <p class=\"calendar-title-year font-size_h5\">{{ this.viewDate | date: 'yyyy' }}</p>\n          <p class=\"calendar-title-month font-size_h5\" [hidden]=\"this.viewType === 'year'\">{{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}</p>\n        </ng-template>\n        <!-- end: title_pcBlock -->\n\n        <ng-template #title_mobileBlock>\n          <div (click)=\"mobileBackViewType()\">\n            <!-- <nx-icon name=\"chevron-left\" [hidden]=\"(this.viewType === 'year')\"></nx-icon> -->\n            <div class=\"img-block\" [hidden]=\"(this.viewType === 'year')\">\n              <img src=\"assets/img/icon-cal-back.svg\" />\n            </div>\n            <p class=\"calendar-title-year\" [hidden]=\"this.viewType === 'day'\">{{ this.viewDate | date: 'yyyy' }}</p>\n            <p class=\"calendar-title-month\" [hidden]=\"(this.viewType === 'month' || this.viewType === 'year')\">{{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}</p>\n          </div>\n        </ng-template>\n        <!-- end: title_mobileBlock -->\n\n      </div>\n      <!-- end calendar-title-block -->\n\n      <div class=\"calendar-switch-btn\">\n        <app-ui-tab-style2 (onTabChildClick)=\"switchPadViewMode($event)\" [tabIndex]=\"this.viewTypeIndex\">\n          <app-ui-tab-child>{{language.day |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.week |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.month |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.year |translate }}</app-ui-tab-child>\n        </app-ui-tab-style2>\n        <!-- end tab style2 -->\n      </div>\n      <!-- end calendar-switch-btn -->\n\n      <div class=\"calendar-action-btn\">\n        <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" (click)=\"clickToday()\">\n              <div class=\"text-block\">\n                <p>{{language.today |translate }}</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" Action action=\"calendarAddEvent\" (actionClick)=\"addEvent()\">\n              <div class=\"img-block\">\n                <img [src]=\"'assets/img/icon-cal-new.svg'\" />\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block calendar-filter-btn\">\n            <app-ui-information-btn [outsideSpace]=\"outsideSpace\"\n                                    [messageContent]=\"filterInfo\"\n                                    (onClick)=\"onInfoTabClick($event)\" >\n\n              <div class=\"calendar-btn\">\n                <div class=\"img-block\">\n                  <img [src]=\"'assets/img/icon-cal-filter.svg'\" />\n                </div>\n              </div>\n            </app-ui-information-btn>\n          </li>\n        </ul>\n      </div>\n      <!-- end calendar-action-btn -->\n    </div>\n    <!-- end calendar-title-actionBtns -->\n    <!-- </app-ui-infinite-scroll> -->\n\n    <!-- Filter content -->\n    <ng-template #filterContent>\n      <snd-calendar-filter [optionMap]=\"optionMap\" (activityTypeListChange)=\"onActivityTypeListChange($event)\"></snd-calendar-filter>\n    </ng-template>\n\n    <!--info content-->\n    <app-ui-information-content #filterInfo class=\"filter-pc\"\n                                (btnOnClick)=\"onCloseInfo()\"\n                                [defaultPos]=\"'bottom'\"\n                                [paddindData]=\"paddindData\"\n                                [showArrow]=\"false\">\n      <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n    </app-ui-information-content>\n    <!-- end: Filter content -->\n\n    <!--\n      [(isSwitchView)]=\"isLoading\"\n    -->\n    <utils-calendar class=\"calendar-container\"\n                    [ngClass]=\"(isExpandDetail || isExpandEdit ? 'no-scroll':'')\"\n                    [viewType]=\"viewType\"\n                    [weekStartsOn]=\"weekStartsOn\"\n                    [viewDate]=\"viewDate\"\n                    [translateMap]=\"translateMap\"\n                    [eventList]=\"calendarEventListAfterFilter\"\n                    (viewDateChange)=\"onViewDateChange($event)\"\n                    (uiCalendarClickEventItem)=\"onClickDetail($event)\"\n                    (uiCalendarMoreInfoClicked)=\"onInfoTabClick($event)\"></utils-calendar>\n  </div>\n  <!-- end: main -->\n\n  <div global-main>\n    <!--delete block -->\n    <app-ui-alert-confirm #calendarDelete [(isPopupOpen)]=\"isCalendarDelete\" (onCancel)=\"onClickDeleteCancel()\" (onConfirm)=\"onClickDeleteConfirm()\" [title]=\"language.delete | translate\"\n                          [message]=\"language.deleteMessage | translate\" [cancelBtnText]=\"language.no | translate\" [confirmBtnText]=\"language.yes | translate\">\n    </app-ui-alert-confirm>\n    <!-- end: Appointment delete -->\n\n    <!-- detail block -->\n    <app-ui-modal-style-text1 class=\"wd-md\"\n                              [(isPopupOpen)]=\"isExpandDetail\"\n                              (close)=\"onToggleDetailModal($event)\"\n                              [ngClass]=\"{'no-scroll': isExpandEdit}\">\n      <ng-container textType=\"modal-title-detail\">{{language.appointmentDetail | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-detail [calendarEventDetail]=\"calendarEventDetail\"></snd-calendar-detail>\n      </ng-container>\n      <!-- end: popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\" (ClickBtn)=\"isCalendarDelete = true\">\n            <ng-container TextType=\"cust\">{{language.delete | translate}}</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [btnHeight]=\"'sm'\" (ClickBtn)=\"editEvent()\">\n            <!-- <ng-container TextType=\"cust\"><span [routerLink]=\"['editEvent']\">EDIT</span></ng-container> -->\n            <ng-container TextType=\"cust\">{{language.edit | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end: modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: Appointment Detail -->\n\n    <!--add/edit calendar popup-->\n    <app-ui-modal-style-text1 class=\"wd-lg calendar-edit-content\"\n                              [(isPopupOpen)]=\"isExpandEdit\"\n                              [isScrollToTop]=\"true\"\n                              (close)=\"onToggleAppointmentModal(false)\"\n                              [isBackdropClose]=\"false\">\n      <ng-container textType=\"modal-title-detail\">{{language.appointment | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-edit [calendarEventDetail]=\"calendarEventDetail\"\n                           [todayCalendarEvent]=\"viewDateCalendarEventList\"\n                           [isSaveClick]=\"isSaveClick\"\n                           [viewDate]=\"viewDate\"\n                           [translateMap]=\"translateMap\"\n                           [optionMap]=\"optionMap\"\n                           (saveEvent)=\"onSaveCalendarEvent($event)\"></snd-calendar-edit>\n\n      </ng-container>\n      <!-- end popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" (ClickBtn)=\"onClickAppointmentSave()\">\n            <ng-container TextType=\"cust\">{{language.save | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: add/edit calendar -->\n\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isSave\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.saved | translate}}</ng-container>\n    </app-ui-popup-style-feedback>\n    <!-- end: Appointment save -->\n\n    <!-- Delete Success -->\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isDelete\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.delete | translate}}</ng-container>\n    </app-ui-popup-style-feedback>\n    <!-- end of Delete Success -->\n\n    <app-ui-popup-style-feedback [(isPopupOpen)]=\"isLoading\" [hasAutoDisappear]=\"false\">\n      <ng-container textType=\"modal-img-detail\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">Loading</ng-container>\n    </app-ui-popup-style-feedback>\n\n    <!-- filter block -->\n    <app-ui-modal-style-text1 class=\"wd-sm\" [(isPopupOpen)]=\"isExpandFilter\" [isHasBtmBlock]=\"false\" (close)=\"onToggleFilterModal($event)\" class=\"filter-mobile\">\n      <ng-container textType=\"modal-title-detail\">{{language.filter |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n      </ng-container>\n      <!-- end: popup-content -->\n    </app-ui-modal-style-text1>\n    <!-- end: Filter -->\n  </div>\n  <!-- end: global-main -->\n</app-ui-main-full>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{background-color:transparent}:host *{-webkit-tap-highlight-color:transparent}:host ::ng-deep .ui-refresher-content{background-color:#f5f5f5}:host ::ng-deep .ui-page-content .ui-main-full-content{padding:0!important}:host .link-btn{cursor:pointer}:host .main-calendar{display:inline-block;width:100%;height:100%}:host .calendar-title-actionBtns{display:flex;justify-content:space-between;align-items:center;padding:25px 30px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:35px}:host .calendar-title-block{min-width:195px}:host .calendar-title-block .link-btn{display:flex}:host .calendar-title-block p{display:inline-block;margin:0;font-weight:700;line-height:1.33;letter-spacing:.2px;color:#414141}:host .calendar-title-block p:not(:last-child){margin-right:20px}:host .calendar-title-block p[hidden]{display:none}:host .calendar-switch-btn{max-width:280px;margin-right:40px}:host .calendar-action-btn .ui-list-block{display:flex;justify-content:flex-start;align-items:stretch;list-style-type:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:20px}:host .calendar-action-btn .ui-list-block .calendar-btn{display:flex;min-width:40px;height:100%;cursor:pointer}:host .calendar-action-btn .ui-list-block .calendar-btn .img-block,:host .calendar-action-btn .ui-list-block .calendar-btn .text-block{flex:1;margin:auto 0}:host .calendar-action-btn .ui-list-block .img-block{display:inline-block;width:40px;height:40px}:host .calendar-action-btn .ui-list-block .img-block img{display:inline-block;width:100%}:host .calendar-action-btn .ui-list-block .text-block{display:flex}:host .calendar-action-btn .ui-list-block .text-block>p{margin:auto 0;flex:1;font-size:.875rem;font-weight:700;line-height:1.43;letter-spacing:.2px;color:#007ab3}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .info-info-content{padding:20px}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .control-btn:after{display:none}:host ::ng-deep .cal-month-view{background-color:#f5f5f5}:host .filter-pc ::ng-deep .info-info-content{padding:25px 20px;border-radius:5px}:host .filter-mobile::ng-deep{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:25px}:host .calendar-filter-item ::ng-deep .nx-checkbox .nx-checkbox__control{margin-top:0}:host .calendar-filter-item ::ng-deep .form-checkbox .check-text{line-height:1.4;letter-spacing:.2px}:host .no-scroll *,:host .no-scroll ::ng-deep *{overflow-y:hidden!important}:host .calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}:host .calendar-edit-content ::ng-deep .modal-block{padding-left:0;padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block .nx-modal__container .nx-modal__content{padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block app-calendar-edit>[class*=gas-col-]:last-child{padding-right:0;padding-left:20px}@media screen and (max-width:1023px){:host ::ng-deep .ui-page-content{background-color:#fff!important}:host ::ng-deep .ui-page-content .ui-main-full-content{min-height:auto!important;background-color:transparent!important}:host ::ng-deep .ui-calendar-year{overflow:hidden;overflow-y:auto;margin-top:-5px}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-day-cell:not(.cal-today) .event-date.event-day-active{background-color:transparent!important;color:#414141!important}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-today .event-date{background-color:#003781!important;color:#fff!important}:host .calendar-title-block{position:relative;padding-left:10px}:host .calendar-title-block nx-icon::ng-deep{font-size:1.25rem;font-weight:700;color:#003781}:host .calendar-title-block nx-icon[hidden]::ng-deep{display:none}:host .calendar-title-block .img-block{display:inline-block;vertical-align:middle;width:16px}:host .calendar-title-block .img-block[hidden]{display:none}:host .calendar-title-block .img-block img{display:inline-block;width:6px;height:10px;position:absolute;top:calc(50% - 5px)}:host .calendar-title-block p{font-size:1.25rem}:host .calendar-title-block p:not(:last-child){margin-right:10px}:host .calendar-title-actionBtns{padding:5px 5px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:15px}:host .calendar-switch-btn{display:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:10px}:host .filter-mobile::ng-deep{display:block}:host .filter-pc::ng-deep .info-info-content{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:35px}}@media screen and (max-width:374px){:host .calendar-title-block{min-width:auto}}"]
                }] }
    ];
    CalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: SettingService },
        { type: TranslateService },
        { type: CalendarService },
        { type: ProfileCodeService }
    ]; };
    CalendarComponent.propDecorators = {
        parentHeight: [{ type: Input }],
        parentHeightChange: [{ type: Output }],
        titleBtnsBlock: [{ type: ViewChild, args: ['titleBtnsBlock',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        nowShowBtn: [{ type: ViewChild, args: [UiInformationBtnComponent,] }],
        infoContent: [{ type: ViewChild, args: [UiInformationContentComponent,] }],
        filterInfo: [{ type: ViewChild, args: ['filterInfo',] }]
    };
    return CalendarComponent;
}());
export { CalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFpQix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFNBQVMsRUFDVCxPQUFPLEVBQ1AsTUFBTSxFQUNOLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxFQUNSLE9BQU8sRUFDUCxXQUFXLEVBQ1gsVUFBVSxFQUNYLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXRELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxF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SUFDOUIsZ0NBQTRCOztJQUc1QiwwQ0FBaUM7O0lBQ2pDLHFDQUFxQzs7SUFDckMscUNBQTZCOztJQUM3Qix5Q0FBZ0M7Ozs7O0lBR2hDLDJDQUFtQzs7SUFHbkMscUNBQTZCOztJQUU3Qix5Q0FBcUU7O0lBQ3JFLHNDQUF5Rjs7Ozs7SUFDekYsMkNBQTBDOzs7OztJQUMxQyx5Q0FBd0M7O0lBRXhDLDhDQUEwRDs7SUFDMUQseURBQXFFOztJQUNyRSxzREFBa0U7O0lBQ2xFLGdEQUFnRDs7SUFJaEQsNkNBQWlEOztJQUNqRCwwQ0FBOEM7O0lBQzlDLHFDQUE0Qzs7Ozs7SUFDNUMsb0RBQW9EOztJQUdwRCwyQ0FBdUM7O0lBQ3ZDLDJDQUF1Qzs7SUFDdkMseUNBQXFDOztJQUNyQyxxQ0FBaUM7O0lBQ2pDLG1DQUErQjs7SUFDL0Isd0NBQW9DOztJQUNwQyw2Q0FBeUM7O0lBQ3pDLHNDQUFrQzs7Ozs7SUFHbEMseUNBQThEOzs7OztJQUM5RCx5Q0FBd0Y7Ozs7O0lBQ3hGLHVDQUErSjs7Ozs7SUFDL0osdUNBQTJDOztJQUszQyx5Q0FHRTs7SUFFRix3Q0FLRTs7SUFJRix3Q0FBMkI7O0lBbWUzQix1Q0FBNEU7O0lBQzVFLHdDQUFxRjs7SUFDckYsdUNBQW1FOzs7OztJQTlkdkQsMkNBQXlDOzs7OztJQUFFLHVDQUE4Qjs7Ozs7SUFBRSwyQ0FBc0M7Ozs7O0lBQUMsNkNBQTJDOzs7OztJQUFDLDRDQUF3Qzs7Ozs7SUFBQywrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NhbGVuZGFyL2NhbGVuZGFyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9jYWxlbmRhci9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7XG4gIGFkZERheXMsXG4gIGFkZEhvdXJzLFxuICBhZGRNaW51dGVzLFxuICBhZGRNb250aHMsXG4gIGdldERhdGUsXG4gIGdldERheSxcbiAgZ2V0SG91cnMsXG4gIGdldE1pbnV0ZXMsXG4gIGdldE1vbnRoLFxuICBnZXRZZWFyLFxuICBpc1NhbWVNb250aCxcbiAgc3ViTWludXRlc1xufSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVDb2RlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudCB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBWaWV3RGF0ZUNoYW5nZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ2hhbmdlQWN0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudCB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7TGFuZ3VhZ2V9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXVxuICAsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIC8vdHdvLXdheSBiaW5kaW5nXG4gIHByaXZhdGUgX3BhcmVudEhlaWdodDogbnVtYmVyID0gMDtcbiAgQElucHV0KClcbiAgZ2V0IHBhcmVudEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SGVpZ2h0O1xuICB9XG4gIHNldCBwYXJlbnRIZWlnaHQodmFsKSB7XG4gICAgdGhpcy5fcGFyZW50SGVpZ2h0ID0gdmFsO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudEhlaWdodCA9PSAwKSB7XG4gICAgICB0aGlzLl9wYXJlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRIZWlnaHRDaGFuZ2UuZW1pdCh0aGlzLl9wYXJlbnRIZWlnaHQpO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBsZXQgdGl0bGVCdG5zQmxvY2tfZWxlID0gX3RoaXMudGl0bGVCdG5zQmxvY2submF0aXZlRWxlbWVudDtcbiAgICBsZXQgdGl0bGVCdG5zQmxvY2tfc2l6ZSA9IHRpdGxlQnRuc0Jsb2NrX2VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBfdGhpcy5jYWxlbmRhckhlaWdodCA9IF90aGlzLl9wYXJlbnRIZWlnaHRcbiAgICAgIC0gdGl0bGVCdG5zQmxvY2tfc2l6ZS5oZWlnaHRcbiAgICAgIC0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGl0bGVCdG5zQmxvY2tfZWxlKS5tYXJnaW5Cb3R0b20pO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ3BhcmVudEhlaWdodCcsIHRoaXMuX3BhcmVudEhlaWdodCk7XG4gICAgLy8gY29uc29sZS53YXJuKCd0aXRsZUJ0bnNCbG9ja19lbGUnLCB0aXRsZUJ0bnNCbG9ja19zaXplLmhlaWdodCwgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGl0bGVCdG5zQmxvY2tfZWxlKS5tYXJnaW5Cb3R0b20pKTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ2NhbGVuZGFySGVpZ2h0JywgX3RoaXMuY2FsZW5kYXJIZWlnaHQpO1xuICB9IC8vIGVuZCBzZXQgcGFyZW50SGVpZ2h0XG4gIEBPdXRwdXQoKSBwYXJlbnRIZWlnaHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgndGl0bGVCdG5zQmxvY2snKSB0aXRsZUJ0bnNCbG9jazogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIFlFQVI6IHN0cmluZyA9ICd5ZWFyJztcbiAgcHJpdmF0ZSBNT05USDogc3RyaW5nID0gJ21vbnRoJztcbiAgcHJpdmF0ZSBXRUVLOiBzdHJpbmcgPSAnd2Vlayc7XG4gIHByaXZhdGUgREFZOiBzdHJpbmcgPSAnZGF5JztcblxuICAvL2NhbGVuZGFyLXVpIGNvbmZpZyBzZXR0aW5nXG4gIHB1YmxpYyB2aWV3VHlwZUluZGV4OiBudW1iZXIgPSAyOyAvLyAnbW9udGgnXG4gIHB1YmxpYyB2aWV3VHlwZTogc3RyaW5nID0gdGhpcy5NT05USDsgLy9cbiAgcHVibGljIHZpZXdEYXRlID0gbmV3IERhdGUoKTsgLy9jdXJyZW50IGRhdGVcbiAgcHVibGljIHdlZWtTdGFydHNPbjogbnVtYmVyID0gMTsgLy8gTW9uZGF5XG5cbiAgLy9jb3VudCBjb250ZW50IGhlaWdodFxuICBwcml2YXRlIGNhbGVuZGFySGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gIC8vY2xpY2sgY2FsZW5kYXIgaWRcbiAgcHVibGljIGNsaWVudElEOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgdHJhbnNsYXRlTWFwIDogTWFwPHN0cmluZyxzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHVibGljIG9wdGlvbk1hcDogTWFwPHN0cmluZyxBcnJheTxQcm9maWxlQ29kZT4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4oKTtcbiAgcHJpdmF0ZSBzdG9yZVN0YXJ0RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgc3RvcmVFbmREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107IC8vIGV2ZW50TGlzdFxuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlcjogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4gPSBbXTsgLy8gZmlsdGVy5b6MIGV2ZW50XG4gIHB1YmxpYyB2aWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDtcblxuICAvLyBwcml2YXRlIGNhbGVuZGFyRXZlbnRNYXAgPSBuZXcgQ2FsZW5kYXJFdmVudE1hcCgpO1xuXG4gIHB1YmxpYyBhY3Rpdml0eVR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTsgLy8gRELkuK3miYDmnIlhY3Rpdml0eVR5cGVcbiAgcHVibGljIGFsZXJ0VHlwZUxpc3Q6IEFycmF5PFByb2ZpbGVDb2RlPiA9IFtdO1xuICBwdWJsaWMgbGFuZ3VhZ2UgOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwcml2YXRlIGN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLy8gcG9wdXBcbiAgcHVibGljIGlzRXhwYW5kRmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0V4cGFuZERldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFeHBhbmRFZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNTYXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1NhdmVDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDYWxlbmRhckRlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gdHJhbnNsYXRlXG4gIHByaXZhdGUgZGF5VHlwZXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydDcm9zc19EYXknLCdBbGxfRGF5J107XG4gIHByaXZhdGUgd2Vla2RheXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgcHJpdmF0ZSBtb250aHNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG4gIHByaXZhdGUgbm9TY2hlZHVsZTogc3RyaW5nID0gJ05vX1NjaGVkdWxlJztcblxuXG4gIC8vIGluZm8gY29uZmlnXG4gIC8v6YG/5YWN54i25bGk5YW25LuWIHBvc2l0aW9uIHJlbGF0aXZlIOW8lemfvyBpbmZvXG4gIHB1YmxpYyBvdXRzaWRlU3BhY2UgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbiAgLy9pbmZvIGNvbnRlbnQg5bem5Y+z5pyA5bCPcGFkZGluZ1xuICBwdWJsaWMgcGFkZGluZERhdGEgPSB7XG4gICAgdG9wOiAxMCxcbiAgICByaWdodDogMTAsXG4gICAgYm90dG9tOiAxMCxcbiAgICBsZWZ0OiB3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjMgPyAxNzAgOiAxMFxuICB9O1xuXG5cbiAgLy9jaGVjayBpcyBwYWQgb3IgbW9iaWxlXG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdTZXJ2aWNlLHByaXZhdGUgdHJhbnNsYXRlU2VydmljZSA6IFRyYW5zbGF0ZVNlcnZpY2UscHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2luaXQgY2FsZW5kYXIgdHlwZVxuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfVHlwZScpO1xuICAgIHRoaXMuYWxlcnRUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfUmVtaW5kVGltZScpO1xuICAgIHRoaXMub3B0aW9uTWFwLnNldCgnQ2FsZW5kYXJfVHlwZScsIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCk7XG4gICAgdGhpcy5vcHRpb25NYXAuc2V0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5hbGVydFR5cGVMaXN0KTtcbiAgICB0aGlzLmRheVR5cGVzTGlzdC5mb3JFYWNoKChkYXlUeXBlKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQoZGF5VHlwZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShkYXlUeXBlKSlcbiAgICB9KTtcbiAgICB0aGlzLndlZWtkYXlzTGlzdC5mb3JFYWNoKCh3ZWVrZGF5KSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQod2Vla2RheSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh3ZWVrZGF5KSlcbiAgICB9KTtcbiAgICB0aGlzLm1vbnRoc0xpc3QuZm9yRWFjaCgobW9udGgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldChtb250aCwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShtb250aCkpXG4gICAgfSk7XG4gICAgdGhpcy50cmFuc2xhdGVNYXAuc2V0KHRoaXMubm9TY2hlZHVsZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh0aGlzLm5vU2NoZWR1bGUpKTtcblxuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIC8vc2V0IGNvbXBvbmVudCBpcyBkZXRhY2hcbiAgICAvLyB0aGlzLmNoYW5nZURldGVjdG9yLmRldGFjaCgpO1xuXG4gICAgLy9waG9uZSBkZWZhdWx0IHZpZXcgaXMgZGF5IHZpZXdcbiAgICBpZiAodGhpcy53aW5kb3dXaWR0aCA8IDEwMjQpIHtcbiAgICAgIHRoaXMudmlld1R5cGVJbmRleCA9IDA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8vbG9hZCBkZWZhdWx0IGZpbHRlciBzZXR0aW5nXG4gICAgbGV0IGRlZmF1bHRTZXR0aW5nVmFsID0gdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKCdDYWxlbmRhckZpbHRlclNldHRpbmcnKS5TZXR0aW5nVmFsO1xuICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KGRlZmF1bHRTZXR0aW5nVmFsKSkge1xuICAgICAgbGV0IGNhbGVuZGFyU2V0dGluZyA9IEpTT04ucGFyc2UoZGVmYXVsdFNldHRpbmdWYWwpO1xuXG4gICAgICAvL2RlZmF1bHQgYWxsIGNoZWNrZWRcbiAgICAgIGlmIChPYmplY3Qua2V5cyhjYWxlbmRhclNldHRpbmcpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgICAgIGNvZGVJdGVtLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QuZm9yRWFjaCgoY29kZUl0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgY29kZSA9IGNvZGVJdGVtLmdldENvZGUoKTtcbiAgICAgICAgICBsZXQgaXNDaGVjayA9IGNhbGVuZGFyU2V0dGluZ1tjb2RlXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNhbGVuZGFyU2V0dGluZ1tjb2RlXTtcbiAgICAgICAgICBjb2RlSXRlbS5pc0NoZWNrID0gaXNDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLnNldEN1cnJlbnRGaWx0ZXJPcHRpb24odW5kZWZpbmVkKTtcblxuICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMudHlwZUNoYW5nZSh0aGlzLnZpZXdUeXBlSW5kZXgpO1xuICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICB9IC8vIGVuZCBuZ09uSW5pdFxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnR5cGVDaGFuZ2UodGhpcy52aWV3VHlwZUluZGV4KTtcbiAgfVxuXG4gIHN3aXRjaFBhZFZpZXdNb2RlKGFjdGl2ZVRhYkluZGV4KSB7XG4gICAgY29uc29sZS5kZWJ1Zygnc3dpdGNoUGFkVmlld01vZGUnKTtcblxuICAgIGlmIChhY3RpdmVUYWJJbmRleCAhPSB0aGlzLnZpZXdUeXBlSW5kZXgpIHtcbiAgICAgIC8vY291bnQgc3RhcnQgJiBlbmRcbiAgICAgIHRoaXMudHlwZUNoYW5nZShhY3RpdmVUYWJJbmRleCk7XG5cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAvL2xvYWQgZGF0YSAmIHJlZnJlc2hcbiAgICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgIH1cblxuICB9XG5cbiAgdHlwZUNoYW5nZShhY3RpdmVUYWJJbmRleCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLWNvbXBvbmVudC10eXBlQ2hhbmdlJywgYWN0aXZlVGFiSW5kZXgsIHRoaXMudmlld1R5cGUpO1xuXG4gICAgbGV0IHN0YXJ0LCBlbmQ7XG4gICAgdGhpcy52aWV3VHlwZUluZGV4ID0gYWN0aXZlVGFiSW5kZXg7XG5cbiAgICBzd2l0Y2ggKGFjdGl2ZVRhYkluZGV4KSB7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLllFQVI7XG4gICAgICAgIHRoaXMuY2FsY3VDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gdGhpcy5NT05USDtcbiAgICAgICAgdGhpcy5jYWxjdUNvbnRlbnRIZWlnaHQoKTtcbiAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCksIHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIGVuZCA9IG5ldyBEYXRlKGdldFllYXIoYWRkTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKSwgZ2V0TW9udGgoYWRkTW9udGhzKHRoaXMudmlld0RhdGUsIDEpKSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIC8vY291bnQgY3VycmVudCB0aW1lIGlzIGhhdmUgZGF0YVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gdGhpcy5XRUVLO1xuICAgICAgICBzdGFydCA9IG5ldyBEYXRlKGdldFllYXIoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCAoMSAtIGdldERheSh0aGlzLnZpZXdEYXRlKSkpKSwgZ2V0TW9udGgoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCAoMSAtIGdldERheSh0aGlzLnZpZXdEYXRlKSkpKSwgZ2V0RGF0ZShhZGREYXlzKHRoaXMudmlld0RhdGUsICgxIC0gZ2V0RGF5KHRoaXMudmlld0RhdGUpKSkpLCAwLCAwLCAwKTtcbiAgICAgICAgZW5kID0gbmV3IERhdGUoZ2V0WWVhcihhZGREYXlzKHRoaXMudmlld0RhdGUsICg3IC0gZ2V0RGF5KHRoaXMudmlld0RhdGUpKSkpLCBnZXRNb250aChhZGREYXlzKHRoaXMudmlld0RhdGUsICg3IC0gZ2V0RGF5KHRoaXMudmlld0RhdGUpKSkpLCBnZXREYXRlKGFkZERheXModGhpcy52aWV3RGF0ZSwgKDcgLSBnZXREYXkodGhpcy52aWV3RGF0ZSkpKSksIDAsIDAsIDApO1xuICAgICAgICAvL2NvdW50IGN1cnJlbnQgdGltZSBpcyBoYXZlIGRhdGFcbiAgICAgICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLkRBWTtcbiAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMudmlld0RhdGUpLGdldE1vbnRoKHRoaXMudmlld0RhdGUpICwgZ2V0RGF0ZSh0aGlzLnZpZXdEYXRlKSwgMCwgMCwgMCk7XG4gICAgICAgIGVuZCA9IG5ldyBEYXRlKGdldFllYXIoYWRkRGF5cyh0aGlzLnZpZXdEYXRlLCAxKSksIGdldE1vbnRoKGFkZERheXModGhpcy52aWV3RGF0ZSwgMSkpLCBnZXREYXRlKGFkZERheXModGhpcy52aWV3RGF0ZSwgMSkpLCAwLCAwLCAwKTtcbiAgICAgICAgLy9jb3VudCBjdXJyZW50IHRpbWUgaXMgaGF2ZSBkYXRhXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50VGltZSgpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZXcgdHlwZSBjaGFuZ2U6IGRheScpO1xuICAgICAgICBicmVhaztcbiAgICB9IC8vIGVuZCBzd2l0Y2hcblxuICAgIGlmICh0aGlzLnZpZXdUeXBlICE9IHRoaXMuWUVBUikge1xuXG4gICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShzdGFydCkgJiYgU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShlbmQpKSB7XG4gICAgICAgIHRoaXMuc3RvcmVTdGFydERhdGUgPSBzdGFydDtcbiAgICAgICAgdGhpcy5zdG9yZUVuZERhdGUgPSBlbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXItY29tcG9uZW50LXR5cGVDaGFuZ2UgZG9uZScpO1xuXG5cblxuICB9IC8vIGVuZCB0eXBlQ2hhbmdlXG5cbiAgLy9waG9uZSBoZWFkZXIgY2hhbmdlIG1vZGVcbiAgbW9iaWxlQmFja1ZpZXdUeXBlKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ21vYmlsZUJhY2tWaWV3VHlwZScsIHRoaXMudmlld1R5cGUpO1xuICAgIHN3aXRjaCAodGhpcy52aWV3VHlwZSkge1xuICAgICAgY2FzZSB0aGlzLk1PTlRIOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMyk7IC8vIGJhY2sgdG8geWVhclxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5XRUVLOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7IC8vIGJhY2sgdG8gbW9udGhcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuREFZOlxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7IC8vIGJhY2sgdG8gbW9udGhcbiAgICAgICAgYnJlYWs7XG4gICAgfSAvLyBlbmQgc3dpdGNoXG5cblxuICAgIC8vYmVjYXVzZSBjaGFuZ2UgdmlldyB0eXBlICwgc28gZGF0ZSByYW5nZSBpcyBjaGFuZ2VcbiAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcblxuICB9IC8vIGVuZCBtb2JpbGVDaGFuZ2VWaWV3VHlwZVxuXG4gIGNsaWNrVG9kYXkoKSB7XG4gICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc29sZS53YXJuKCdjbGlja1RvZGF5JywgdGhpcy52aWV3RGF0ZSk7XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuICAgIC8vbG9hZCBkYXRhICYgcmVmcmVzaFxuICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgIHRoaXMubG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgfVxuXG4gIC8vd2hlbiBjYWxlbmRhciBjb21wb25lbnQgYW55IGNsaWNrIGNoYW5nZSB2aWV3RGF0ZSAsIHdpbGwgY2hlY2sgcGFkL3Bob25lIGN1cnJlbnQgdmlld1R5cGUgdG8gY2hhbmdlIG1vZGVcbiAgb25WaWV3RGF0ZUNoYW5nZSh2aWV3RGF0ZUNoYW5nZTogVmlld0RhdGVDaGFuZ2UpIHtcbiAgICBsZXQgdmFsID0gbmV3IERhdGUodmlld0RhdGVDaGFuZ2Uudmlld0RhdGUpO1xuICAgIGxldCBhY3Rpb24gPSB2aWV3RGF0ZUNoYW5nZS5hY3Rpb247XG5cbiAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci1jb21wb25lbnQgdXBkYXRlIHZpZXdEYXRlJyk7XG4gICAgaWYoaXNTYW1lTW9udGgodGhpcy52aWV3RGF0ZSwgdmFsKSAmJiB0aGlzLmlzUGFkKCkpIHtcbiAgICAgIHRoaXMudmlld0RhdGUgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0RhdGUgPSB2YWw7XG4gICAgICAvL2lmIHllYXIgY2hhbmdlIGRhdGUgLCBhbHdhc3kgc3dpdGNoIG1vbnRoXG4gICAgICBpZiAodGhpcy52aWV3VHlwZSA9PSB0aGlzLllFQVIgJiYgYWN0aW9uID09IENoYW5nZUFjdGlvbi5DTElDSykge1xuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UoMik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnZpZXdUeXBlID09IHRoaXMuTU9OVEggJiYgIXRoaXMuaXNQYWQoKSAmJiBhY3Rpb24gPT0gQ2hhbmdlQWN0aW9uLkNMSUNLKSB7XG4gICAgICAgIC8vaWYgZGV2aWNlIGlzIHBob25lICwgY2xpY2sgZGF5IHN3aXRjaCB0byB3ZWVrIHdoZW4gdmlldyB0eXBlIGlzIG1vbnRoXG4gICAgICAgIHRoaXMudHlwZUNoYW5nZSgwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL2Vsc2UgY2FsY3VsYXRlIG5ldyBzdGFydCAmIGVuZFxuICAgICAgICB0aGlzLnR5cGVDaGFuZ2UodGhpcy52aWV3VHlwZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgLy9sb2FkIGRhdGEgJiByZWZyZXNoXG4gICAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG4gICAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICB9XG4gIH1cblxuICAvL2ZldGNoIGNhbGVuZGFyIGJldHdlZW4gc3RhcnQgJiBlbmQgcmFuZ2VcbiAgbG9hZENhbGVuZGFyRGF0YSgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdsb2FkQ2FsZW5kYXIgZGF0YScpO1xuICAgIGlmICh0aGlzLnZpZXdUeXBlICE9PSB0aGlzLllFQVIpIHsgLy8geWVhciBubyBuZWVkIHF1ZXJ5IGRhdGEgLCBvbmx5IHZpZXdcblxuICAgICAgaWYodGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyLmxlbmd0aD4yMClcbiAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyID0gW107XG5cbiAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuc3RvcmVTdGFydERhdGUpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5zdG9yZUVuZERhdGUpKSB7XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudExpc3QodGhpcy5zdG9yZVN0YXJ0RGF0ZSwgdGhpcy5zdG9yZUVuZERhdGUsICcnKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZGVidWcoJ2xvYWRDYWxlbmRhciBkYXRhIGRvbmUnKTtcbiAgfVxuXG4gIGxvYWRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEKS5zdWJzY3JpYmUoIGRhdGEgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdnZXRDYWxlbmRhckV2ZW50RGV0YWlsJywgZGF0YSk7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsID0gZGF0YTtcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5kaXNwbGF5QWN0aXZpdHkgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDYWxlbmRhcl9UeXBlJyx0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWN0aXZpdHkpO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmRpc3BsYXlBbGVydDEgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSk7XG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuZGlzcGxheUFsZXJ0MiA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLCB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQyKTtcbiAgICAgIHRoaXMub25Ub2dnbGVEZXRhaWxNb2RhbCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKSB7XG4gICAgbGV0IHF1ZXJ5RGF0ZSA9IG5ldyBEYXRlKGdldFllYXIodGhpcy52aWV3RGF0ZSksZ2V0TW9udGgodGhpcy52aWV3RGF0ZSksZ2V0RGF0ZSh0aGlzLnZpZXdEYXRlKSwwLDAsMCk7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudExpc3QocXVlcnlEYXRlLCBzdWJNaW51dGVzKGFkZERheXModGhpcy52aWV3RGF0ZSwxKSwxKSwgJycpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignbG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QnLCBkYXRhKTtcbiAgICAgIHRoaXMudmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrRGV0YWlsKGV2ZW50SXRlbSkge1xuICAgIHRoaXMuY2xpZW50SUQgPSBldmVudEl0ZW0uY2xpZW50SUQ7XG4gICAgdGhpcy5sb2FkQ2FsZW5kYXJFdmVudERldGFpbCh0aGlzLmNsaWVudElEKTtcbiAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG5cbiAgICBjb25zb2xlLndhcm4oJ2NsaWNrRGV0YWlsJywgdGhpcy5jbGllbnRJRCk7XG4gIH0gLy8gZW5kIGNsaWNrRGV0YWlsXG5cbiAgb25DbGlja0RlbGV0ZUNhbmNlbCgpIHtcbiAgfSAvLyBlbmQgY2xpY2tEZWxldGVDYW5jZWxcblxuICBvbkNsaWNrRGVsZXRlQ29uZmlybSgpIHtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5kZWxldGVDYWxlbmRhckV2ZW50KHRoaXMuY2xpZW50SUQpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGlmKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaXNEZWxldGUgPSBkYXRhLnN0YXR1cztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICBpZiAodGhpcy5pc0V4cGFuZERldGFpbCkgeyAvLyBjbG9zZSBwb3AgdXBcbiAgICAgIHRoaXMub25Ub2dnbGVEZXRhaWxNb2RhbChmYWxzZSk7XG4gICAgfVxuICB9IC8vIGVuZCBjbGlja0RlbGV0ZUNvbmZpcm1cblxuICBvbkNsaWNrQXBwb2ludG1lbnRTYXZlKCkge1xuICAgIHRoaXMuaXNTYXZlQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgb25TYXZlQ2FsZW5kYXJFdmVudChjYWxlbmRhckV2ZW50RGV0YWlsOiBDYWxlbmRhckV2ZW50RGV0YWlsKSB7XG4gICAgY29uc29sZS53YXJuKCdzYXZlQ2FsZW5kYXJFdmVudCcpO1xuICAgIGlmKGNhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5jbGllbnRJRCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCd1cGRhdGVDYWxlbmRhckV2ZW50JywgY2FsZW5kYXJFdmVudERldGFpbCk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnVwZGF0ZUNhbGVuZGFyRXZlbnQoY2FsZW5kYXJFdmVudERldGFpbC5jbGllbnRJRCwgY2FsZW5kYXJFdmVudERldGFpbCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBjYWxlbmRhckV2ZW50RGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5sb2FkQ2FsZW5kYXJFdmVudERldGFpbCh0aGlzLmNsaWVudElEKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5hZGRDYWxlbmRhckV2ZW50KGNhbGVuZGFyRXZlbnREZXRhaWwpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5pc1NhdmUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdhZGRDYWxlbmRhckV2ZW50Jyk7XG4gICAgICAgICAgICBjYWxlbmRhckV2ZW50RGV0YWlsLmNsaWVudElEID0gZGF0YS5jbGllbnRJRDtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbCA9IGNhbGVuZGFyRXZlbnREZXRhaWw7XG4gICAgICAgICAgICB0aGlzLm9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlzU2F2ZUNsaWNrID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGlzUGFkKCkge1xuICAgIHJldHVybiB0aGlzLndpbmRvd1dpZHRoID49IDEwMjQ7XG4gIH1cblxuICBlZGl0RXZlbnQoKSB7XG4gICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodHJ1ZSk7XG4gIH1cblxuICBhZGRFdmVudCgpIHtcbiAgICB0aGlzLmNsaWVudElEID0gJyc7XG4gICAgbGV0IGN1cnJlbnRUaW1lOyAvLyBhZGp1c3QgdGltZSB0byBuZXh0IGludGVydmFsXG4gICAgY3VycmVudFRpbWUgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMudmlld0RhdGUpLGdldE1vbnRoKHRoaXMudmlld0RhdGUpLGdldERhdGUodGhpcy52aWV3RGF0ZSksZ2V0SG91cnMobmV3IERhdGUoKSksZ2V0TWludXRlcyhuZXcgRGF0ZSgpKSk7XG4gICAgY3VycmVudFRpbWUgPSBhZGRNaW51dGVzKGN1cnJlbnRUaW1lLCAoNSAtIGdldE1pbnV0ZXMoY3VycmVudFRpbWUpICUgNSkpOyAgLy8gYWRqdXN0IG1pbnV0ZXMgdG8gbmV4dCA1IG1pbnV0ZXNcbiAgICBjdXJyZW50VGltZSA9IGFkZEhvdXJzKGN1cnJlbnRUaW1lLCAxKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSAgbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoJycsJycsJycsJycsbnVsbCwnTicsY3VycmVudFRpbWUsYWRkSG91cnMoY3VycmVudFRpbWUsMSksJ1knLCc4JywnJywnJywnJyxudWxsKTtcbiAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG4gICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodHJ1ZSk7XG4gIH1cblxuICAvLyBibG9jayB3aGljaCBjb250cm9sIGZpbHRlclxuXG4gIG9uQWN0aXZpdHlUeXBlTGlzdENoYW5nZShhbGVydFR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4pIHtcbiAgICB0aGlzLmFsZXJ0VHlwZUxpc3QgPSBhbGVydFR5cGVMaXN0O1xuICAgIHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QgPSBbXTtcbiAgICBsZXQgc2V0dGluZ1ZhbCA9IHt9O1xuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnYWN0aXZpdHlUeXBlIGNvZGVJdGVtJywgY29kZUl0ZW0pO1xuICAgICAgaWYgKHNldHRpbmdWYWwgIT0gdW5kZWZpbmVkKSBzZXR0aW5nVmFsW2NvZGVJdGVtLmdldENvZGUoKV0gPSBjb2RlSXRlbS5pc0NoZWNrO1xuXG4gICAgICBpZiAoY29kZUl0ZW0uaXNDaGVjaykge1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0LnB1c2goY29kZUl0ZW0uZ2V0Q29kZSgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZmlsdGVyT3B0aW9uQ2hhbmdlKHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QpO1xuICAgIHRoaXMuc2V0dGluZ1ZhbHVlQ2hhbmdlKHNldHRpbmdWYWwpO1xuICB9XG5cbiAgc2V0dGluZ1ZhbHVlQ2hhbmdlKHNldHRpbmdWYWx1ZSkge1xuICAgIC8vdXBkYXRlIGZpbHRlciBzZXR0aW5nXG4gICAgbGV0IHNldHRpbmdPYmogPSBuZXcgU2V0dGluZyh0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoJ0NhbGVuZGFyRmlsdGVyU2V0dGluZycpLlNldHRpbmdJRCwgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKCdDYWxlbmRhckZpbHRlclNldHRpbmcnKS5TZXR0aW5nTmFtZSwgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ1ZhbHVlKSk7XG4gICAgdGhpcy5zZXR0aW5nU2VydmljZS51cGRhdGVTZXR0aW5nKHNldHRpbmdPYmopLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLmNvbXBvbmVudC11cGRhdGUgc2V0dGluZycsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyT3B0aW9uQ2hhbmdlKGN1cnJlbnRGaWx0ZXJPcHRpb246IEFycmF5PHN0cmluZz4pIHtcbiAgICBjb25zb2xlLndhcm4oJ2N1cnJlbnRGaWx0ZXJPcHRpb24nLCBjdXJyZW50RmlsdGVyT3B0aW9uKTtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0ID0gY3VycmVudEZpbHRlck9wdGlvbjtcbiAgICB0aGlzLnJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJyZW50RmlsdGVyT3B0aW9uKHNldHRpbmdWYWwpIHtcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0ID0gW107XG5cbiAgICAvL2ZpbmQgY2hlY2tlZCBmaWx0ZXJcbiAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QuZm9yRWFjaCgoY29kZUl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2FjdGl2aXR5VHlwZSBjb2RlSXRlbScsIGNvZGVJdGVtKTtcbiAgICAgIGlmIChzZXR0aW5nVmFsICE9IHVuZGVmaW5lZCkgc2V0dGluZ1ZhbFtjb2RlSXRlbS5nZXRDb2RlKCldID0gY29kZUl0ZW0uaXNDaGVjaztcblxuICAgICAgaWYgKGNvZGVJdGVtLmlzQ2hlY2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdC5wdXNoKGNvZGVJdGVtLmdldENvZGUoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCgpIHtcblxuICAgIHRoaXMuY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlciA9IFtdO1xuXG4gICAgLy9maWx0ZXIgZXZlbnQgY2FsZW5kYXIgdHlwZVxuICAgIGNvbnNvbGUuZGVidWcoJ3N0YXJ0IHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCcsIHRoaXMuY2FsZW5kYXJFdmVudExpc3QubGVuZ3RoKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0QWZ0ZXJGaWx0ZXIgPSB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0LmZpbHRlcih4ID0+IHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QuaW5kZXhPZih4LmFjdGl2aXR5KSA+IC0xKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ3N0YXJ0IHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCBkb25lJywgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyLmxlbmd0aCk7XG4gICAgLy8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAvL2NvdW50IGhlaWdodFxuICAgIGlmICh0aGlzLnZpZXdUeXBlID09IHRoaXMuREFZIHx8IHRoaXMudmlld1R5cGUgPT0gdGhpcy5XRUVLKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmQgYmxvY2tcblxuICBzY3JvbGxUb0N1cnJlbnRUaW1lKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgdGltZUV2ZW50QWxsX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2FsLXRpbWUtZXZlbnRzJyk7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ190aGlzLnRpbWVFdmVudEFsbF9lbGUnLCB0aW1lRXZlbnRBbGxfZWxlLmxlbmd0aCwgdGltZUV2ZW50QWxsX2VsZSk7XG5cbiAgICAgIGZvciAobGV0IHRpbWVFdmVudF9lbGUgb2YgdGltZUV2ZW50QWxsX2VsZSkge1xuICAgICAgICBsZXQgbW9iaWxlRGF5SGVhZGVyX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2FsLWRheS1oZWFkZXJzJyk7XG4gICAgICAgIGxldCBhbGxEYXlFdmVudF9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNhbC1hbGwtZGF5LWV2ZW50cycpO1xuICAgICAgICBsZXQgYWxsRGF5RXZlbnRfaCA9IChhbGxEYXlFdmVudF9lbGUgIT0gbnVsbFxuICAgICAgICAgID8gYWxsRGF5RXZlbnRfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICAgIDogMCk7XG5cbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdtb2JpbGVEYXlIZWFkZXJfZWxlJywgbW9iaWxlRGF5SGVhZGVyX2VsZSk7XG4gICAgICAgIGlmIChtb2JpbGVEYXlIZWFkZXJfZWxlICE9IG51bGwpIHtcblxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignaWYgX3RoaXMuY2FsZW5kYXJIZWlnaHQnLCB0aW1lRXZlbnRfZWxlLCBfdGhpcy5jYWxlbmRhckhlaWdodCk7XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCdpZiBtb2JpbGVEYXlIZWFkZXJfZWxlJywgbW9iaWxlRGF5SGVhZGVyX2VsZSk7XG5cbiAgICAgICAgICB0aW1lRXZlbnRfZWxlLnN0eWxlLm1heEhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBtb2JpbGVEYXlIZWFkZXJfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICAgICAgLSBhbGxEYXlFdmVudF9oXG4gICAgICAgICAgICAtIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1vYmlsZURheUhlYWRlcl9lbGUpLm1hcmdpbkJvdHRvbSkpICsgJ3B4JztcblxuICAgICAgICAgIC8vIHNjcm9sbCB0byB0aW1lXG4gICAgICAgICAgbGV0IGN1cnJlbnRIb3VyID0gZ2V0SG91cnMobmV3IERhdGUoKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgSG91cjonLCBnZXRIb3VycyhuZXcgRGF0ZSgpKSk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRIb3VyID4gMylcbiAgICAgICAgICAgIHRpbWVFdmVudF9lbGUuc2Nyb2xsVG9wID0gTWF0aC5mbG9vcigoY3VycmVudEhvdXIgLSAzKSAvIDIpICogODBcbiAgICAgICAgICAgICAgKyAoTWF0aC5mbG9vcigoY3VycmVudEhvdXIgLSAzKSAvIDIpXG4gICAgICAgICAgICAgICAgKyAoY3VycmVudEhvdXIgLSAzKSAlIDIpICogODI7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gZW5kIGZvcjogdGltZUV2ZW50QWxsX2VsZVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAyMDApOyAvLyDmnIPmnIlFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yIOWFiCBzZXRUaW1lT3V0IOino1xuICB9IC8vIGVuZCBzY3JvbGxUb0N1cnJlbnRUaW1lXG5cbiAgY2FsY3VDb250ZW50SGVpZ2h0KCkge1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsY3VDb250ZW50SGVpZ2h0Jyk7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdjYWxjdUNvbnRlbnRIZWlnaHQnLCB0aGlzLmNhbGVuZGFySGVpZ2h0KTtcbiAgICAgIC8vIGNhbGN1bGF0ZSB5ZWFyIHZpZXcgaGVpZ2h0XG4gICAgICBsZXQgeWVhcl9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpLWNhbGVuZGFyLXllYXInKTtcbiAgICAgIGxldCB5ZWFyVGFnX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhcHAtdWktY2FsZW5kYXIteWVhcicpO1xuXG4gICAgICBpZiAoeWVhcl9lbGUgIT0gbnVsbCAmJiB5ZWFyVGFnX2VsZSAhPSBudWxsKSB7XG5cbiAgICAgICAgaWYgKF90aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuICAgICAgICAgIHllYXJUYWdfZWxlLnN0eWxlLm1pbkhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICAgIHllYXJUYWdfZWxlLnN0eWxlLmhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHllYXJfZWxlLnN0eWxlLmhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbGN1bGF0ZSBtb250aCB2aWV3IGhlaWdodFxuICAgICAgbGV0IG1vbnRoX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsLW1vbnRoLXZpZXcnKTtcblxuICAgICAgaWYgKG1vbnRoX2VsZSAhPSBudWxsICYmIF90aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuXG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5tYXhIZWlnaHQgPSBfdGhpcy5jYWxlbmRhckhlaWdodCArICdweCc7XG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5taW5IZWlnaHQgPSBfdGhpcy5jYWxlbmRhckhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgICBpZihtb250aF9lbGUuc3R5bGUubWF4SGVpZ2h0ID09ICcwcHgnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignSGVyZScpO1xuICAgICAgICBtb250aF9lbGUuc3R5bGUubWF4SGVpZ2h0ID0gMTAwIC0gMyArICd2aCc7XG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5taW5IZWlnaHQgPSAxMDAgLSAzICsgJ3ZoJztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cbiAgICB9LCAxMDApOyAvLyDmnIPmnIlFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yIOWFiCBzZXRUaW1lT3V0IOino1xuICB9IC8vIGVuZCBjYWxjdUNvbnRlbnRIZWlnaHRcblxuXG4gIC8vIGZ1bmN0aW9uIHdoaWNoIGNvbnRyb2wgcG9wdXBcblxuICBvblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodmFsKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzRXhwYW5kRWRpdCA9IHZhbDtcbiAgICAgIGlmICh0aGlzLmlzRXhwYW5kRmlsdGVyKSB7IHRoaXMub25DbG9zZUluZm8oKTsgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAwKTsgLy8g5pyD5pyJRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvciDlhYggc2V0VGltZU91dCDop6NcblxuXG4gIH0gLy8gZW5kIHRvZ2dsZUFwcG9pbnRtZW50TW9kYWxcblxuICBvblRvZ2dsZURldGFpbE1vZGFsKHZhbCkge1xuICAgIHRoaXMuaXNFeHBhbmREZXRhaWwgPSB2YWw7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRGaWx0ZXIpIHsgdGhpcy5vbkNsb3NlSW5mbygpOyB9XG4gIH1cbiAgb25Ub2dnbGVGaWx0ZXJNb2RhbCh2YWwpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRGaWx0ZXIpIHtcbiAgICAgIHRoaXMub25DbG9zZUluZm8oKTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmQgYmxvY2tcblxuICAvLyDoqK0gaW5mbyBwb3NpdGlvblxuICBAVmlld0NoaWxkKFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQpIG5vd1Nob3dCdG46IFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQpIGluZm9Db250ZW50OiBVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5mbycpIGZpbHRlckluZm86IFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50O1xuICBvbkluZm9UYWJDbGljayhkb20pIHtcbiAgICBjb25zb2xlLndhcm4oJ2luZm9UYWJDbGljaycpO1xuICAgIGNvbnNvbGUud2Fybignbm93U2hvd0J0bicsIHRoaXMubm93U2hvd0J0bik7XG5cbiAgICBpZiAodGhpcy5ub3dTaG93QnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3dTaG93QnRuIGNsaWNrJywgdGhpcy5ub3dTaG93QnRuLmJ0bkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgIGlmIChkb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ21lc3NhZ2VDb250ZW50JywgZG9tLm1lc3NhZ2VDb250ZW50LCB0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQpO1xuICAgICAgICBpZiAoZG9tLm1lc3NhZ2VDb250ZW50ICE9PSB0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQpIHtcbiAgICAgICAgICAvLyB0aGlzLmNsb3NlSW5mbygpO1xuICAgICAgICAgIHRoaXMubm93U2hvd0J0bi5jbG9zZUluZm8oKTtcbiAgICAgICAgICB0aGlzLm5vd1Nob3dCdG4gPSBkb207XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXNldEluZm9Qb3MoKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBlbmQgaWY6IGRvbSAhPT0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm93U2hvd0J0biA9IGRvbTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ21lc3NhZ2VDb250ZW50IGZpbHRlcicsIHRoaXMubm93U2hvd0J0bi5tZXNzYWdlQ29udGVudCA9PT0gdGhpcy5maWx0ZXJJbmZvLCB0aGlzLmZpbHRlckluZm8pO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQgPT09IHRoaXMuZmlsdGVySW5mbykge1xuICAgICAgdGhpcy5pc0V4cGFuZEZpbHRlciA9IHRydWU7XG4gICAgfVxuICB9IC8vIGVuZCBpbmZvVGFiQ2xpY2tcbiAgcmVzZXRJbmZvUG9zKCkge1xuICAgIC8vIHRoaXMuaXNFeHBhbmRGaWx0ZXIgPSB0cnVlO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3dTaG93QnRuLmNvdW50UG9zKCk7XG4gICAgfVxuICB9IC8vIGVuZCByZXNldEluZm9Qb3NcbiAgb25DbG9zZUluZm8oKSB7XG4gICAgdGhpcy5pc0V4cGFuZEZpbHRlciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3dTaG93QnRuLmNsb3NlSW5mbygpO1xuICAgICAgLy8gdGhpcy5ub3dTaG93QnRuID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2Nsb3NlSW5mbycsIHRoaXMubm93U2hvd0J0biwgdGhpcy5ub3dTaG93QnRuLmJ0bkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9IC8vIGVuZCBjbG9zZUluZm9cbn1cbiJdfQ==