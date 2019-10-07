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
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(changeDetector, elementRef, settingService, translateService, calendarService, profileCodeService, customerService, customerUtils, modalManager, dataSyncService) {
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
        this.calcuContentHeight(); // resize for android bottom show or hide 
        this.scrollToCurrentTime(); // resize for android bottom show or hide .. caculate day week height
        console.log('calendar inside cacualte height');
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
        this.typeChange(this.viewTypeIndex);
        this.loadCalendarData();
        this.createCustomerList();
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
        console.debug('switchPadViewMode:', this.viewDate);
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
        console.debug('calendar-component-typeChange', activeTabIndex, this.viewType, this.viewDate);
        /** @type {?} */
        var start;
        /** @type {?} */
        var end;
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
        //calculate new start and end
        this.typeChange(this.viewTypeIndex);
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
            //If old data is larger than 20, clear first to make view change faster
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
        console.log("loadCalendarEventDetail:", clientID);
        this.calendarService.getCalendarEventDetail(clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.warn('getCalendarEventDetail', data);
            _this_1.isLoading = false;
            _this_1.calendarEventDetail = data;
            _this_1.customerClientName = _this_1.customerClientMap.get(_this_1.calendarEventDetail.customerClientID);
            console.log("customerClientMap:", _this_1.customerClientMap);
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
        this.modalManager.toggleLoading(true);
        this.calendarService.deleteCalendarEvent(this.clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return tslib_1.__awaiter(_this_1, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn("this.calendarService.deleteCalendarEvent data: ", data);
                        return [4 /*yield*/, this.dataSyncService.syncFunc(['CALENDAR'])];
                    case 1:
                        _a.sent();
                        if (data.status) {
                            this.isDelete = data.status;
                        }
                        this.loadCalendarData();
                        if (this.isExpandDetail) { // close pop up
                            this.onToggleDetailModal(false);
                        }
                        this.modalManager.toggleLoading(false);
                        return [2 /*return*/];
                }
            });
        }); }));
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
     * @param {?} resp
     * @return {?}
     */
    CalendarComponent.prototype.onSaveCalendarEvent = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var type, data, clientID_1;
            var _this_1 = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = resp.type;
                        console.log("onSaveCalendarEvent:", resp);
                        if (!(type !== 'fail')) return [3 /*break*/, 2];
                        data = resp.data;
                        clientID_1 = data.ClientID;
                        console.warn('saveCalendarEvent');
                        console.warn('updateCalendarEvent', clientID_1);
                        this.modalManager.toggleLoading(true);
                        return [4 /*yield*/, this.dataSyncService.syncFunc(['CALENDAR'])];
                    case 1:
                        _a.sent();
                        this.modalManager.toggleLoading(false);
                        this.calendarService.getCalendarEventDetail(clientID_1).subscribe((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            _this_1.calendarEventDetail = data;
                            _this_1.onToggleAppointmentModal(false);
                            _this_1.loadCalendarData();
                            if (type === 'edit') {
                                _this_1.loadCalendarEventDetail(clientID_1);
                                _this_1.isSave = true;
                                _this_1.loadViewDateCalendarEventList();
                            }
                            else if (type === 'add') {
                                _this_1.isSave = true;
                                console.warn('addCalendarEvent');
                            }
                        }));
                        _a.label = 2;
                    case 2:
                        this.isSaveClick = false;
                        return [2 /*return*/];
                }
            });
        });
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
        console.log("calendar EditEvent:", this.calendarEventDetail);
        this.calendarEventEdit = new CalendarEventDetail(this.calendarEventDetail.clientID, this.calendarEventDetail.calendarID, this.calendarEventDetail.customerClientID, this.calendarEventDetail.title, this.calendarEventDetail.location, this.calendarEventDetail.activity, '', this.calendarEventDetail.start, this.calendarEventDetail.end, '', this.calendarEventDetail.alert1, this.calendarEventDetail.alert2, this.calendarEventDetail.alert3, this.calendarEventDetail.remark, null);
        this.calendarEventEdit.allDay = this.calendarEventDetail.allDay;
        this.calendarEventEdit.isAlert = this.calendarEventDetail.isAlert;
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
        this.calendarEventEdit = new CalendarEventDetail('', '', null, '', '', null, 'N', currentTime, addMinutes(currentTime, 15), 'Y', '8', '', '', '', null);
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
        console.debug('start refreshCalendarEventList done', this.calendarEventListAfterFilter);
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
                // if(timeEventAll_ele !=null){
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
            // }
        }), 100); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
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
                    console.log('mobile year view: _this.calendarHeight:', _this.calendarHeight, 'window.getComputedStyle(year_ele).marginTop', window.getComputedStyle(year_ele).marginTop);
                }
            }
            // calculate month view height
            /** @type {?} */
            var month_ele = _this.elementRef.nativeElement.querySelector('.cal-month-view');
            if (month_ele !== null && month_ele !== undefined && _this.windowWidth > 1023) {
                month_ele.style.maxHeight = _this.calendarHeight + 'px';
                month_ele.style.minHeight = _this.calendarHeight + 'px';
            }
            if (month_ele.style.maxHeight == '0px') {
                console.warn('Here');
                month_ele.style.maxHeight = 100 - 3 + 'vh';
                month_ele.style.minHeight = 100 - 3 + 'vh';
            }
            _this_1.changeDetector.markForCheck();
        }), 300); // 會有ExpressionChangedAfterItHasBeenCheckedError 先 setTimeOut 解
    }; // end calcuContentHeight
    // end calcuContentHeight
    /**
     * @return {?}
     */
    CalendarComponent.prototype.renderWeek = 
    // end calcuContentHeight
    /**
     * @return {?}
     */
    function () {
        console.log('in integration renderWeek');
        /** @type {?} */
        var mobileDayHeader_ele = this.elementRef.nativeElement.querySelector('div.cal-day-headers');
        /** @type {?} */
        var allDayEvent_ele = this.elementRef.nativeElement.querySelector('div.cal-all-day-events');
        console.log('in integration renderWeek', mobileDayHeader_ele, allDayEvent_ele);
        this.scrollToCurrentTime();
    };
    // function which control popup
    // function which control popup
    /**
     * @param {?} val
     * @return {?}
     */
    CalendarComponent.prototype.onToggleAppointmentModal = 
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
            if (!_this_1.isExpandEdit) {
                _this_1.isCalendarEditMetaDataDone = false;
            }
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
        if (!this.isExpandDetail) {
            this.isCalendarDetailMetaDataDone = false;
        }
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
    // end closeInfo
    /**
     * @return {?}
     */
    CalendarComponent.prototype.createCustomerList = 
    // end closeInfo
    /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        /** @type {?} */
        var pageInfo = new PageInfo();
        pageInfo.pageSize = -1;
        /** @type {?} */
        var filterCriteria = new CustomerFilterCriteria();
        this.customerService.getCustomerList(filterCriteria, pageInfo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var e_2, _a;
            console.log('data', data);
            /** @type {?} */
            var temp_array = [];
            try {
                for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var custItem = data_1_1.value;
                    _this_1.customerClientMap.set(custItem.clientID, _this_1.customerUtils.convertNameToShow(custItem.firstName, custItem.lastName));
                    temp_array.push(new SelectOption(custItem.clientID, _this_1.customerUtils.convertNameToShow(custItem.firstName, custItem.lastName)));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this_1.customerItemList = temp_array;
        }));
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.mobileFilterClick = /**
     * @return {?}
     */
    function () {
        this.isExpandFilter = true;
    };
    /**
     * @param {?} funcName
     * @return {?}
     */
    CalendarComponent.prototype.onMetaDataDone = /**
     * @param {?} funcName
     * @return {?}
     */
    function (funcName) {
        if (funcName === 'CalendarEdit') {
            this.isCalendarEditMetaDataDone = true;
        }
        else if (funcName === 'CalendarDetail') {
            this.isCalendarDetailMetaDataDone = true;
        }
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-calendar',
                    template: "<app-ui-main-full>\n  <div main #calendarMain class=\"main-calendar\">\n\n    <div #titleBtnsBlock class=\"calendar-title-actionBtns\">\n\n      <div class=\"calendar-title-block\">\n        <ng-template *ngIf=\"windowWidth < 1024; then title_mobileBlock else title_pcBlock\"></ng-template>\n\n        <ng-template #title_pcBlock>\n          <p class=\"calendar-title-year font-size_h5\">{{ this.viewDate | date: 'yyyy' }}\n            {{language.yearUnit | translate}}</p>\n          <p class=\"calendar-title-month font-size_h5\" [hidden]=\"this.viewType === 'year'\">\n            {{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}\n          </p>\n        </ng-template>\n        <!-- end: title_pcBlock -->\n\n        <ng-template #title_mobileBlock>\n          <div (click)=\"mobileBackViewType()\">\n            <!-- <nx-icon name=\"chevron-left\" [hidden]=\"(this.viewType === 'year')\"></nx-icon> -->\n            <div class=\"img-block\" [hidden]=\"(this.viewType === 'year')\">\n              <img src=\"assets/img/icon-cal-back.svg\" />\n            </div>\n            <p class=\"calendar-title-year\" [hidden]=\"this.viewType === 'day'\">{{ this.viewDate | date: 'yyyy' }}\n              {{language.yearUnit | translate}}</p>\n            <p class=\"calendar-title-month\" [hidden]=\"(this.viewType === 'month' || this.viewType === 'year')\">\n              {{ this.translateMap.get(this.viewDate | date: 'MMMM') ? this.translateMap.get(this.viewDate | date: 'MMMM') :  this.viewDate | date: 'MMMM'}}\n            </p>\n          </div>\n        </ng-template>\n        <!-- end: title_mobileBlock -->\n\n      </div>\n      <!-- end calendar-title-block -->\n\n      <div class=\"calendar-switch-btn\">\n        <app-ui-tab-style2 Action [action]=\"'calendarViewTab'\" (onTabChildClick)=\"switchPadViewMode($event)\" [tabIndex]=\"this.viewTypeIndex\">\n          <app-ui-tab-child>{{language.calendarDay |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.calendarWeek |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.calendarMonth |translate }}</app-ui-tab-child>\n          <app-ui-tab-child>{{language.calendarYear |translate }}</app-ui-tab-child>\n        </app-ui-tab-style2>\n        <!-- end tab style2 -->\n      </div>\n      <!-- end calendar-switch-btn -->\n\n      <div class=\"calendar-action-btn\">\n        <ul class=\"ui-list-block\">\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" id='btn_calendarToday' Action action='calendarToday' (actionClick)=\"clickToday()\">\n              <div class=\"text-block\">\n                <p>{{language.calendarToday |translate }}</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block\">\n            <div class=\"calendar-btn\" id='btn_calendarAddEvent' Action action=\"calendarAddEvent\"\n              (actionClick)=\"addEvent()\">\n              <div class=\"img-block\">\n                <img [src]=\"'assets/img/icon-cal-new.svg'\" />\n              </div>\n            </div>\n          </li>\n          <li class=\"list-item-block calendar-filter-btn\">\n            <!-- info new -->\n            <div class=\"show-pad-and-mobile calendar-btn\" id='btn_calendarFilter' Action action='calendarFilter'\n              (actionClick)=\"mobileFilterClick()\">\n              <div class=\"img-block\">\n                <img [src]=\"'assets/img/icon-cal-filter.svg'\" />\n              </div>\n            </div>\n            <snd-ui-information class=\"show-pc filter-pc filter-info-block\" [isPopupStyle]=\"false\" [isHasArrow]=\"false\"\n              [infoBtnType]=\"'customize'\" [containerSelector]=\"calendarMain\" [isInfoContentOverlap]=\"true\"\n              [maxWidth]=\"595\">\n              <ng-container btn>\n                <div class=\"calendar-btn\">\n                  <div class=\"img-block\">\n                    <img [src]=\"'assets/img/icon-cal-filter.svg'\" />\n                  </div>\n                </div>\n              </ng-container>\n              <ng-container info-content>\n                <div class=\"filter-block-pc\">\n                  <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n                </div>\n              </ng-container>\n            </snd-ui-information>\n            <!-- end of info new -->\n          </li>\n        </ul>\n      </div>\n      <!-- end calendar-action-btn -->\n    </div>\n    <!-- end calendar-title-actionBtns -->\n    <!-- </app-ui-infinite-scroll> -->\n\n    <!-- Filter content -->\n    <ng-template #filterContent>\n\n      <snd-calendar-filter [optionMap]=\"optionMap\" (activityTypeListChange)=\"onActivityTypeListChange($event)\">\n      </snd-calendar-filter>\n    </ng-template>\n\n    <!--info content-->\n    <app-ui-information-content #filterInfo class=\"filter-pc\" (btnOnClick)=\"onCloseInfo()\" [defaultPos]=\"'bottom'\"\n      [paddindData]=\"paddindData\" [showArrow]=\"false\">\n      <!-- <div class=\"filter-block-pc\"> -->\n      <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n      <!-- </div> -->\n    </app-ui-information-content>\n    <!-- end: Filter content -->\n\n    <!--\n      [(isSwitchView)]=\"isLoading\"\n    -->\n    <utils-calendar class=\"calendar-container\" [ngClass]=\"(isExpandDetail || isExpandEdit ? 'style-popup-open':'')\"\n      [viewType]=\"viewType\" [weekStartsOn]=\"weekStartsOn\" [viewDate]=\"viewDate\" [translateMap]=\"translateMap\"\n      [eventList]=\"calendarEventListAfterFilter\" (viewDateChange)=\"onViewDateChange($event)\"\n      (uiCalendarClickEventItem)=\"onClickDetail($event)\" (uiCalendarMoreInfoClicked)=\"onInfoTabClick($event)\"\n      (onRenderWeek)=\"renderWeek()\">\n    </utils-calendar>\n  </div>\n  <!-- end: main -->\n\n  <div global-main>\n    <!--delete block -->\n    <app-ui-modal-confirm #calendarDelete [(isPopupOpen)]=\"isCalendarDelete\" (onCancel)=\"onClickDeleteCancel()\"\n      (onConfirm)=\"onClickDeleteConfirm()\" [title]=\"language.delete | translate\"\n      [message]=\"language.deleteDataBody | translate\" [cancelBtnText]=\"language.no | translate\"\n      [confirmBtnText]=\"language.yes | translate\">\n    </app-ui-modal-confirm>\n    <!-- end: Appointment delete -->\n\n    <!-- detail block -->\n    <app-ui-modal-style-text1 class=\"wd-md\" [(isPopupOpen)]=\"isExpandDetail\" (close)=\"onToggleDetailModal($event)\"\n      [hidden]=\"!isCalendarDetailMetaDataDone\" [ngClass]=\"{'no-scroll': isExpandEdit}\" [isModalBtmHasSpace]=\"false\">\n      <ng-container textType=\"modal-title-detail\">{{language.calendarAppointmentDetails | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-detail *ngIf=\"isExpandDetail\" (isMetaDataDone)=\"onMetaDataDone('CalendarDetail')\" [calendarEventDetail]=\"calendarEventDetail\"\n          [customerClientName]=\"customerClientName\">\n        </snd-calendar-detail>\n      </ng-container>\n      <!-- end: popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\" [id]=\"'btn_calendarDelete'\" Action\n            action='calendarDelete' (actionClick)=\"isCalendarDelete = true\">\n            <ng-container TextType=\"cust\">{{language.calendarDelete | translate}}</ng-container>\n          </app-ui-btn>\n          <app-ui-btn [btnHeight]=\"'sm'\" [id]=\"'btn_calendarEdit'\" Action action='calendarEdit'\n            (actionClick)=\"editEvent()\">\n            <!-- <ng-container TextType=\"cust\"><span [routerLink]=\"['editEvent']\">EDIT</span></ng-container> -->\n            <ng-container TextType=\"cust\">{{language.calendarEdit | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end: modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: Appointment Detail -->\n\n    <!--add/edit calendar popup-->\n    <app-ui-modal-style-text1 class=\"wd-lg calendar-edit-content\" *ngIf=\"isExpandEdit\" [(isPopupOpen)]=\"isExpandEdit\"\n      [isScrollToTop]=\"true\" (close)=\"onToggleAppointmentModal(false)\" [isBackdropClose]=\"true\"\n      [hidden]=\"!isCalendarEditMetaDataDone\">\n      <ng-container textType=\"modal-title-detail\">{{language.calendarAppointment | translate}}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <snd-calendar-edit *ngIf=\"isExpandEdit\" (isMetaDataDone)=\"onMetaDataDone('CalendarEdit')\"\n          [clientID]=\"calendarEventEdit?calendarEventEdit.clientID :'' \"\n          [todayCalendarEvent]=\"viewDateCalendarEventList\" [(isSaveClick)]=\"isSaveClick\" [viewDate]=\"viewDate\"\n          [translateMap]=\"translateMap\" [customerItemList]=\"customerItemList\" (saveEvent)=\"onSaveCalendarEvent($event)\">\n        </snd-calendar-edit>\n      </ng-container>\n      <!-- end popup-content -->\n      <ng-container textType=\"modal-btm-detail\">\n        <app-ui-btn-layout>\n          <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" [id]=\"'btn_calendarSave'\" Action action='calendarSave'\n            (actionClick)=\"onClickAppointmentSave()\">\n            <ng-container TextType=\"cust\">{{language.calendarSave | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout>\n      </ng-container>\n      <!-- end modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: add/edit calendar -->\n\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isSave\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.notificationSaveFeedback | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end: Appointment save -->\n\n    <!-- Delete Success -->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isDelete\">\n      <ng-container textType=\"modal-img-detail\">\n        <nx-icon name='check' size='auto'></nx-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.notificationDeleteFeedback | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of Delete Success -->\n\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isLoading\" [hasAutoDisappear]=\"false\">\n      <ng-container textType=\"modal-img-detail\">\n        <app-ui-refresh-icon></app-ui-refresh-icon>\n      </ng-container>\n      <ng-container textType=\"modal-content-detail\">{{language.loading | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n\n    <!-- filter block -->\n    <app-ui-modal-style-text1 class=\"wd-sm\" [(isPopupOpen)]=\"isExpandFilter\" [isHasBtmBlock]=\"false\"\n      (close)=\"onToggleFilterModal($event)\" class=\"filter-mobile\">\n      <ng-container textType=\"modal-title-detail\">{{language.calendarFilter |translate }}</ng-container>\n      <ng-container textType=\"modal-content-detail\">\n        <ng-container *ngTemplateOutlet=\"filterContent\"></ng-container>\n      </ng-container>\n      <!-- end: popup-content -->\n    </app-ui-modal-style-text1>\n    <!-- end: Filter -->\n  </div>\n  <!-- end: global-main -->\n</app-ui-main-full>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{background-color:transparent}:host *{-webkit-tap-highlight-color:transparent}:host ::ng-deep .ui-page-content .ui-main-full-content{padding:0!important}:host .link-btn{cursor:pointer}:host .main-calendar{display:inline-block;width:100%;height:100%}:host .calendar-title-actionBtns{display:flex;justify-content:space-between;align-items:center;padding:25px 30px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:35px}:host .calendar-title-block{min-width:195px}:host .calendar-title-block .link-btn{display:flex}:host .calendar-title-block p{display:inline-block;margin:0;font-weight:700;line-height:1.33;letter-spacing:.2px;color:#414141}:host .calendar-title-block p:not(:last-child){margin-right:20px}:host .calendar-title-block p[hidden]{display:none}:host .calendar-switch-btn{max-width:280px;margin-right:40px}:host .calendar-action-btn .ui-list-block{display:flex;justify-content:flex-start;align-items:stretch;list-style-type:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:20px}:host .calendar-action-btn .ui-list-block .calendar-btn{display:flex;min-width:40px;height:100%;cursor:pointer}:host .calendar-action-btn .ui-list-block .calendar-btn .text-block{padding-top:2px}:host .calendar-action-btn .ui-list-block .calendar-btn .img-block,:host .calendar-action-btn .ui-list-block .calendar-btn .text-block{flex:1;margin:auto 0}:host .calendar-action-btn .ui-list-block .img-block{display:inline-block;width:40px;height:40px}:host .calendar-action-btn .ui-list-block .img-block img{display:inline-block;width:100%}:host .calendar-action-btn .ui-list-block .text-block{display:flex}:host .calendar-action-btn .ui-list-block .text-block>p{margin:auto 0;flex:1;font-size:.875rem;font-weight:700;line-height:1.43;letter-spacing:.2px;color:#007ab3}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content-block{margin-top:20px}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .info-info-content{padding:20px}:host .calendar-action-btn .ui-list-block .calendar-filter-btn ::ng-deep .info-content .control-btn:after{display:none}:host .filter-block-pc{display:inline-block;min-width:310px}:host .filter-info-block ::ng-deep .info-content-block{margin-right:-28px}:host ::ng-deep .calendar-container.style-popup-open .cal-month-view,:host ::ng-deep .calendar-container.style-popup-open .cal-time-events{overflow-y:hidden!important}:host ::ng-deep .calendar-container.style-popup-open .ui-calendar-year .app-ui-calendar-year{overflow-y:hidden!important}:host ::ng-deep .cal-month-view{background-color:#f5f5f5}:host .filter-pc ::ng-deep .info-info-content{padding:25px 20px;border-radius:5px}:host .filter-mobile::ng-deep{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:25px}:host .calendar-filter-item ::ng-deep .nx-checkbox .nx-checkbox__control{margin-top:0}:host .calendar-filter-item ::ng-deep .form-checkbox .check-text{line-height:1.4;letter-spacing:.2px}:host .no-scroll *,:host .no-scroll ::ng-deep *{overflow-y:hidden!important}:host .calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}:host .calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}:host .calendar-edit-content ::ng-deep .modal-block{padding-left:0;padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block .nx-modal__container .nx-modal__content{padding-right:0}:host .calendar-edit-content ::ng-deep .modal-block app-calendar-edit>[class*=gas-col-]:last-child{padding-right:0;padding-left:20px}:host .calendar-edit-content ::ng-deep .modal-block .modal-content-block.style-fixed{margin-bottom:40px}@media screen and (max-width:1023px){:host ::ng-deep .ui-page-content{background-color:#fff!important}:host ::ng-deep .ui-page-content .ui-main-full-content{min-height:auto!important;background-color:transparent!important;height:100%}:host ::ng-deep .ui-calendar-year{overflow:hidden;overflow-y:auto;margin-top:-5px}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-day-cell:not(.cal-today) .event-date.event-day-active{background-color:transparent!important;color:#414141!important}:host ::ng-deep .ui-calendar-month-m .cal-days .cal-today .event-date{background-color:#003781!important;color:#fff!important}:host .calendar-title-block{position:relative;padding-left:10px}:host .calendar-title-block nx-icon::ng-deep{font-size:1.25rem;font-weight:700;color:#003781}:host .calendar-title-block nx-icon[hidden]::ng-deep{display:none}:host .calendar-title-block .img-block{display:inline-block;vertical-align:middle;width:16px}:host .calendar-title-block .img-block[hidden]{display:none}:host .calendar-title-block .img-block img{display:inline-block;width:6px;height:10px;position:absolute;top:calc(50% - 5px)}:host .calendar-title-block p{font-size:1.25rem}:host .calendar-title-block p:not(:last-child){margin-right:10px}:host .calendar-title-actionBtns{padding:5px 5px 0}:host .calendar-title-actionBtns:not(:last-child){margin-bottom:15px}:host .calendar-switch-btn{display:none}:host .calendar-action-btn .ui-list-block .list-item-block:not(:last-child){margin-right:10px}:host .filter-mobile::ng-deep{display:block}:host .filter-pc::ng-deep .info-info-content{display:none}:host .calendar-filter-item:not(:last-child){margin-bottom:35px}}@media screen and (max-width:374px){:host .calendar-title-block{min-width:auto}}"]
                }] }
    ];
    CalendarComponent.ctorParameters = function () { return [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFpQix1QkFBdUIsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsRUFFVixPQUFPLEVBRVAsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUNQLFdBQVcsRUFDWCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1QsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBMkIsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFMUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0s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QThDOzs7OztJQUM5Qyw0Q0FBd0M7Ozs7O0lBQ3hDLDBDQUFvQzs7Ozs7SUFDcEMseUNBQWtDOzs7OztJQUNsQyw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NhbGVuZGFyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7XG4gIGFkZERheXMsXG4gIGFkZEhvdXJzLFxuICBhZGRNaW51dGVzLFxuICBhZGRNb250aHMsXG4gIGdldERhdGUsXG4gIGdldERheSxcbiAgZ2V0SG91cnMsXG4gIGdldE1pbnV0ZXMsXG4gIGdldE1vbnRoLFxuICBnZXRZZWFyLFxuICBpc1NhbWVNb250aCxcbiAgc3ViTWludXRlcyxcbiAgc3RhcnRPZk1vbnRoLFxuICBlbmRPZk1vbnRoLFxuICBzdGFydE9mV2VlayxcbiAgZW5kT2ZXZWVrLFxuICBzdGFydE9mRGF5LFxuICBlbmRPZkRheVxufSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZVNlcnZpY2UsIFBhZ2VJbmZvLCBzaG93UnVsZVRva2VuLCBzaG93UnVsZSwgRGF0YVN5bmNTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlQ29kZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZ1NlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFNldHRpbmcgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQsIE1vZGFsTWFuYWdlciB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzLCBTZWxlY3RPcHRpb24gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFZpZXdEYXRlQ2hhbmdlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDaGFuZ2VBY3Rpb24gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50IH0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVySXRlbSB9IGZyb20gJy4uLy4uLy4uL2N1c3RvbWVyL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJJdGVtJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi8uLi8uLi9jdXN0b21lci9jb21wb25lbnRzL2JlYW4vY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhJztcbmltcG9ydCB7IEN1c3RvbWVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2N1c3RvbWVyL3NlcnZpY2UvY3VzdG9tZXItc2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9jdXN0b21lci91dGlscy9jdXN0b21lci11dGlscyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddXG4gICwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcblxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLy90d28td2F5IGJpbmRpbmdcbiAgcHJpdmF0ZSBfcGFyZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKVxuICBnZXQgcGFyZW50SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRIZWlnaHQ7XG4gIH1cbiAgc2V0IHBhcmVudEhlaWdodCh2YWwpIHtcbiAgICB0aGlzLl9wYXJlbnRIZWlnaHQgPSB2YWw7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50SGVpZ2h0ID09IDApIHtcbiAgICAgIHRoaXMuX3BhcmVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudEhlaWdodENoYW5nZS5lbWl0KHRoaXMuX3BhcmVudEhlaWdodCk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGxldCB0aXRsZUJ0bnNCbG9ja19lbGUgPSBfdGhpcy50aXRsZUJ0bnNCbG9jay5uYXRpdmVFbGVtZW50O1xuICAgIGxldCB0aXRsZUJ0bnNCbG9ja19zaXplID0gdGl0bGVCdG5zQmxvY2tfZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIF90aGlzLmNhbGVuZGFySGVpZ2h0ID0gX3RoaXMuX3BhcmVudEhlaWdodFxuICAgICAgLSB0aXRsZUJ0bnNCbG9ja19zaXplLmhlaWdodFxuICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aXRsZUJ0bnNCbG9ja19lbGUpLm1hcmdpbkJvdHRvbSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcblxuICAgIC8vIGNvbnNvbGUud2FybigncGFyZW50SGVpZ2h0JywgdGhpcy5fcGFyZW50SGVpZ2h0KTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3RpdGxlQnRuc0Jsb2NrX2VsZScsIHRpdGxlQnRuc0Jsb2NrX3NpemUuaGVpZ2h0LCBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aXRsZUJ0bnNCbG9ja19lbGUpLm1hcmdpbkJvdHRvbSkpO1xuICAgIC8vIGNvbnNvbGUud2FybignY2FsZW5kYXJIZWlnaHQnLCBfdGhpcy5jYWxlbmRhckhlaWdodCk7XG4gIH0gLy8gZW5kIHNldCBwYXJlbnRIZWlnaHRcbiAgQE91dHB1dCgpIHBhcmVudEhlaWdodENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCd0aXRsZUJ0bnNCbG9jaycpIHRpdGxlQnRuc0Jsb2NrOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgWUVBUjogc3RyaW5nID0gJ3llYXInO1xuICBwcml2YXRlIE1PTlRIOiBzdHJpbmcgPSAnbW9udGgnO1xuICBwcml2YXRlIFdFRUs6IHN0cmluZyA9ICd3ZWVrJztcbiAgcHJpdmF0ZSBEQVk6IHN0cmluZyA9ICdkYXknO1xuXG4gIC8vY2FsZW5kYXItdWkgY29uZmlnIHNldHRpbmdcbiAgcHVibGljIHZpZXdUeXBlSW5kZXg6IG51bWJlciA9IDI7IC8vICdtb250aCdcbiAgcHVibGljIHZpZXdUeXBlOiBzdHJpbmcgPSB0aGlzLk1PTlRIOyAvL1xuICBwdWJsaWMgdmlld0RhdGUgPSBuZXcgRGF0ZSgpOyAvL2N1cnJlbnQgZGF0ZVxuICBwdWJsaWMgd2Vla1N0YXJ0c09uOiBudW1iZXIgPSAxOyAvLyBNb25kYXlcblxuICAvL2NvdW50IGNvbnRlbnQgaGVpZ2h0XG4gIHByaXZhdGUgY2FsZW5kYXJIZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgLy9jbGljayBjYWxlbmRhciBpZFxuICBwdWJsaWMgY2xpZW50SUQ6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyB0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwdWJsaWMgb3B0aW9uTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4oKTtcbiAgcHVibGljIGN1c3RvbWVySXRlbUxpc3Q6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBbXTtcbiAgcHJpdmF0ZSBzdG9yZVN0YXJ0RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgc3RvcmVFbmREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107IC8vIGV2ZW50TGlzdFxuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlcjogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4gPSBbXTsgLy8gZmlsdGVy5b6MIGV2ZW50XG4gIHB1YmxpYyB2aWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDtcbiAgcHVibGljIGNhbGVuZGFyRXZlbnRFZGl0OiBDYWxlbmRhckV2ZW50RGV0YWlsID0gbnVsbDtcbiAgcHVibGljIGN1c3RvbWVyQ2xpZW50TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGN1c3RvbWVyQ2xpZW50TWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgLy8gcHJpdmF0ZSBjYWxlbmRhckV2ZW50TWFwID0gbmV3IENhbGVuZGFyRXZlbnRNYXAoKTtcblxuICBwdWJsaWMgYWN0aXZpdHlUeXBlTGlzdDogQXJyYXk8UHJvZmlsZUNvZGU+ID0gW107IC8vIERC5Lit5omA5pyJYWN0aXZpdHlUeXBlXG4gIHB1YmxpYyBhbGVydFR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTtcbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwcml2YXRlIGN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLy8gcG9wdXBcbiAgcHVibGljIGlzRXhwYW5kRmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0V4cGFuZERldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNFeHBhbmRFZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNTYXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1NhdmVDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDYWxlbmRhckRlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NhbGVuZGFyRWRpdE1ldGFEYXRhRG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDYWxlbmRhckRldGFpbE1ldGFEYXRhRG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIHRyYW5zbGF0ZVxuICBwcml2YXRlIGRheVR5cGVzTGlzdDogQXJyYXk8c3RyaW5nPiA9IFsnQ3Jvc3NfRGF5JywgJ0FsbF9EYXknXTtcbiAgcHJpdmF0ZSB3ZWVrZGF5c0xpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuICBwcml2YXRlIG1vbnRoc0xpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbiAgcHJpdmF0ZSBub1NjaGVkdWxlOiBzdHJpbmcgPSAnTm9fU2NoZWR1bGUnO1xuXG5cbiAgLy8gaW5mbyBjb25maWdcbiAgLy/pgb/lhY3niLblsaTlhbbku5YgcG9zaXRpb24gcmVsYXRpdmUg5byV6Z+/IGluZm9cbiAgcHVibGljIG91dHNpZGVTcGFjZSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMFxuICB9O1xuICAvL2luZm8gY29udGVudCDlt6blj7PmnIDlsI9wYWRkaW5nXG4gIHB1YmxpYyBwYWRkaW5kRGF0YSA9IHtcbiAgICB0b3A6IDEwLFxuICAgIHJpZ2h0OiAxMCxcbiAgICBib3R0b206IDEwLFxuICAgIGxlZnQ6IHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMyA/IDE3MCA6IDEwXG4gIH07XG5cblxuICAvL2NoZWNrIGlzIHBhZCBvciBtb2JpbGVcbiAgcHVibGljIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbGN1Q29udGVudEhlaWdodCgpOyAgLy8gcmVzaXplIGZvciBhbmRyb2lkIGJvdHRvbSBzaG93IG9yIGhpZGUgXG4gICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7IC8vIHJlc2l6ZSBmb3IgYW5kcm9pZCBib3R0b20gc2hvdyBvciBoaWRlIC4uIGNhY3VsYXRlIGRheSB3ZWVrIGhlaWdodFxuICAgIGNvbnNvbGUubG9nKCdjYWxlbmRhciBpbnNpZGUgY2FjdWFsdGUgaGVpZ2h0Jyk7XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VzdG9tZXJVdGlsczogQ3VzdG9tZXJVdGlscyxcbiAgICBwcml2YXRlIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyLFxuICAgIHByaXZhdGUgZGF0YVN5bmNTZXJ2aWNlOiBEYXRhU3luY1NlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2luaXQgY2FsZW5kYXIgdHlwZVxuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfVHlwZScpO1xuICAgIHRoaXMuYWxlcnRUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfUmVtaW5kVGltZScpO1xuICAgIHRoaXMub3B0aW9uTWFwLnNldCgnQ2FsZW5kYXJfVHlwZScsIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCk7XG4gICAgdGhpcy5vcHRpb25NYXAuc2V0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5hbGVydFR5cGVMaXN0KTtcbiAgICB0aGlzLmRheVR5cGVzTGlzdC5mb3JFYWNoKChkYXlUeXBlKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQoZGF5VHlwZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShkYXlUeXBlKSlcbiAgICB9KTtcbiAgICB0aGlzLndlZWtkYXlzTGlzdC5mb3JFYWNoKCh3ZWVrZGF5KSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQod2Vla2RheSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh3ZWVrZGF5KSlcbiAgICB9KTtcbiAgICB0aGlzLm1vbnRoc0xpc3QuZm9yRWFjaCgobW9udGgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldChtb250aCwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShtb250aCkpXG4gICAgfSk7XG4gICAgdGhpcy50cmFuc2xhdGVNYXAuc2V0KHRoaXMubm9TY2hlZHVsZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSh0aGlzLm5vU2NoZWR1bGUpKTtcblxuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIC8vc2V0IGNvbXBvbmVudCBpcyBkZXRhY2hcbiAgICAvLyB0aGlzLmNoYW5nZURldGVjdG9yLmRldGFjaCgpO1xuXG4gICAgLy9waG9uZSBkZWZhdWx0IHZpZXcgaXMgZGF5IHZpZXdcbiAgICBpZiAodGhpcy53aW5kb3dXaWR0aCA8IDEwMjQpIHtcbiAgICAgIHRoaXMudmlld1R5cGVJbmRleCA9IDA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8vbG9hZCBkZWZhdWx0IGZpbHRlciBzZXR0aW5nXG4gICAgbGV0IGRlZmF1bHRTZXR0aW5nVmFsID0gdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKCdDYWxlbmRhckZpbHRlclNldHRpbmcnKS5TZXR0aW5nVmFsO1xuICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KGRlZmF1bHRTZXR0aW5nVmFsKSkge1xuICAgICAgbGV0IGNhbGVuZGFyU2V0dGluZyA9IEpTT04ucGFyc2UoZGVmYXVsdFNldHRpbmdWYWwpO1xuXG4gICAgICAvL2RlZmF1bHQgYWxsIGNoZWNrZWRcbiAgICAgIGlmIChPYmplY3Qua2V5cyhjYWxlbmRhclNldHRpbmcpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgICAgIGNvZGVJdGVtLmlzQ2hlY2sgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QuZm9yRWFjaCgoY29kZUl0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgY29kZSA9IGNvZGVJdGVtLmdldENvZGUoKTtcbiAgICAgICAgICBsZXQgaXNDaGVjayA9IGNhbGVuZGFyU2V0dGluZ1tjb2RlXSA9PSB1bmRlZmluZWQgPyBmYWxzZSA6IGNhbGVuZGFyU2V0dGluZ1tjb2RlXTtcbiAgICAgICAgICBjb2RlSXRlbS5pc0NoZWNrID0gaXNDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLnNldEN1cnJlbnRGaWx0ZXJPcHRpb24odW5kZWZpbmVkKTtcblxuXG4gICAgdGhpcy50eXBlQ2hhbmdlKHRoaXMudmlld1R5cGVJbmRleCk7XG4gICAgdGhpcy5sb2FkQ2FsZW5kYXJEYXRhKCk7XG4gICAgdGhpcy5jcmVhdGVDdXN0b21lckxpc3QoKTtcblxuICB9IC8vIGVuZCBuZ09uSW5pdFxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnR5cGVDaGFuZ2UodGhpcy52aWV3VHlwZUluZGV4KTtcbiAgfVxuXG4gIHN3aXRjaFBhZFZpZXdNb2RlKGFjdGl2ZVRhYkluZGV4KSB7XG4gICAgY29uc29sZS5kZWJ1Zygnc3dpdGNoUGFkVmlld01vZGU6JywgdGhpcy52aWV3RGF0ZSk7XG5cbiAgICBpZiAoYWN0aXZlVGFiSW5kZXggIT0gdGhpcy52aWV3VHlwZUluZGV4KSB7XG4gICAgICAvL2NvdW50IHN0YXJ0ICYgZW5kXG4gICAgICB0aGlzLnR5cGVDaGFuZ2UoYWN0aXZlVGFiSW5kZXgpO1xuXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgLy9sb2FkIGRhdGEgJiByZWZyZXNoXG4gICAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHR5cGVDaGFuZ2UoYWN0aXZlVGFiSW5kZXgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdjYWxlbmRhci1jb21wb25lbnQtdHlwZUNoYW5nZScsIGFjdGl2ZVRhYkluZGV4LCB0aGlzLnZpZXdUeXBlLCB0aGlzLnZpZXdEYXRlKTtcblxuICAgIGxldCBzdGFydCwgZW5kO1xuICAgIHRoaXMudmlld1R5cGVJbmRleCA9IGFjdGl2ZVRhYkluZGV4O1xuXG4gICAgc3dpdGNoIChhY3RpdmVUYWJJbmRleCkge1xuICAgICAgLy8gWUVBUlxuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gdGhpcy5ZRUFSO1xuICAgICAgICB0aGlzLmNhbGN1Q29udGVudEhlaWdodCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIE1PTlRIXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMudmlld1R5cGUgPSB0aGlzLk1PTlRIO1xuICAgICAgICB0aGlzLmNhbGN1Q29udGVudEhlaWdodCgpO1xuICAgICAgICBzdGFydCA9IHN0YXJ0T2ZNb250aCh0aGlzLnZpZXdEYXRlKTtcbiAgICAgICAgZW5kID0gZW5kT2ZNb250aCh0aGlzLnZpZXdEYXRlKTtcbiAgICAgICAgLy9jb3VudCBjdXJyZW50IHRpbWUgaXMgaGF2ZSBkYXRhXG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gV0VFS1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gdGhpcy5XRUVLO1xuICAgICAgICBzdGFydCA9IHN0YXJ0T2ZXZWVrKHRoaXMudmlld0RhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuICAgICAgICBlbmQgPSBlbmRPZldlZWsodGhpcy52aWV3RGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG4gICAgICAgIC8vY291bnQgY3VycmVudCB0aW1lIGlzIGhhdmUgZGF0YVxuICAgICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIC8vIERBWVxuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLnZpZXdUeXBlID0gdGhpcy5EQVk7XG4gICAgICAgIHN0YXJ0ID0gc3RhcnRPZkRheSh0aGlzLnZpZXdEYXRlKTtcbiAgICAgICAgZW5kID0gZW5kT2ZEYXkodGhpcy52aWV3RGF0ZSk7XG4gICAgICAgIC8vY291bnQgY3VycmVudCB0aW1lIGlzIGhhdmUgZGF0YVxuICAgICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCd2aWV3IHR5cGUgY2hhbmdlOiBkYXknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfSAvLyBlbmQgc3dpdGNoXG5cbiAgICBpZiAodGhpcy52aWV3VHlwZSAhPSB0aGlzLllFQVIpIHtcblxuICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoc3RhcnQpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkoZW5kKSkge1xuICAgICAgICB0aGlzLnN0b3JlU3RhcnREYXRlID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuc3RvcmVFbmREYXRlID0gZW5kO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGVuZGFyLWNvbXBvbmVudC10eXBlQ2hhbmdlIGRvbmUnKTtcblxuXG5cbiAgfSAvLyBlbmQgdHlwZUNoYW5nZVxuXG4gIC8vcGhvbmUgaGVhZGVyIGNoYW5nZSBtb2RlXG4gIG1vYmlsZUJhY2tWaWV3VHlwZSgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdtb2JpbGVCYWNrVmlld1R5cGUnLCB0aGlzLnZpZXdUeXBlKTtcbiAgICBzd2l0Y2ggKHRoaXMudmlld1R5cGUpIHtcbiAgICAgIGNhc2UgdGhpcy5NT05USDpcbiAgICAgICAgdGhpcy50eXBlQ2hhbmdlKDMpOyAvLyBiYWNrIHRvIHllYXJcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuV0VFSzpcbiAgICAgICAgdGhpcy50eXBlQ2hhbmdlKDIpOyAvLyBiYWNrIHRvIG1vbnRoXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLkRBWTpcbiAgICAgICAgdGhpcy50eXBlQ2hhbmdlKDIpOyAvLyBiYWNrIHRvIG1vbnRoXG4gICAgICAgIGJyZWFrO1xuICAgIH0gLy8gZW5kIHN3aXRjaFxuXG5cbiAgICAvL2JlY2F1c2UgY2hhbmdlIHZpZXcgdHlwZSAsIHNvIGRhdGUgcmFuZ2UgaXMgY2hhbmdlXG4gICAgdGhpcy5sb2FkQ2FsZW5kYXJEYXRhKCk7XG5cbiAgfSAvLyBlbmQgbW9iaWxlQ2hhbmdlVmlld1R5cGVcblxuICBjbGlja1RvZGF5KCkge1xuICAgIHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnNvbGUud2FybignY2xpY2tUb2RheScsIHRoaXMudmlld0RhdGUpO1xuXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cblxuICAgIC8vY2FsY3VsYXRlIG5ldyBzdGFydCBhbmQgZW5kXG4gICAgdGhpcy50eXBlQ2hhbmdlKHRoaXMudmlld1R5cGVJbmRleCk7XG5cbiAgICAvL2xvYWQgZGF0YSAmIHJlZnJlc2hcbiAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcbiAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG4gIH1cblxuICAvL3doZW4gY2FsZW5kYXIgY29tcG9uZW50IGFueSBjbGljayBjaGFuZ2Ugdmlld0RhdGUgLCB3aWxsIGNoZWNrIHBhZC9waG9uZSBjdXJyZW50IHZpZXdUeXBlIHRvIGNoYW5nZSBtb2RlXG4gIG9uVmlld0RhdGVDaGFuZ2Uodmlld0RhdGVDaGFuZ2U6IFZpZXdEYXRlQ2hhbmdlKSB7XG4gICAgbGV0IHZhbCA9IG5ldyBEYXRlKHZpZXdEYXRlQ2hhbmdlLnZpZXdEYXRlKTtcbiAgICBsZXQgYWN0aW9uID0gdmlld0RhdGVDaGFuZ2UuYWN0aW9uO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXItY29tcG9uZW50IHVwZGF0ZSB2aWV3RGF0ZTonLCB2YWwpO1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXItY29tcG9uZW50IHVwZGF0ZSB2aWV3RGF0ZTonLCB2YWwsIHRoaXMudmlld1R5cGUpO1xuICAgIGNvbnNvbGUuZGVidWcoJ3RoaXMudmlld0RhdGU6JywgdGhpcy52aWV3RGF0ZSwgaXNTYW1lTW9udGgodGhpcy52aWV3RGF0ZSwgdmFsKSk7XG5cblxuICAgIGlmICh0aGlzLmlzUGFkKCkgJiYgKGlzU2FtZU1vbnRoKHRoaXMudmlld0RhdGUsIHZhbCkgJiYgdGhpcy52aWV3VHlwZSA9PT0gdGhpcy5NT05USCkpIHtcbiAgICAgIHRoaXMudmlld0RhdGUgPSB2YWw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IHZhbDtcbiAgICAgIC8vaWYgeWVhciBjaGFuZ2UgZGF0ZSAsIGFsd2FzeSBzd2l0Y2ggbW9udGhcbiAgICAgIGlmICh0aGlzLnZpZXdUeXBlID09IHRoaXMuWUVBUiAmJiBhY3Rpb24gPT0gQ2hhbmdlQWN0aW9uLkNMSUNLKSB7XG4gICAgICAgIHRoaXMudHlwZUNoYW5nZSgyKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMudmlld1R5cGUgPT0gdGhpcy5NT05USCAmJiAhdGhpcy5pc1BhZCgpICYmIGFjdGlvbiA9PSBDaGFuZ2VBY3Rpb24uQ0xJQ0spIHtcbiAgICAgICAgLy9pZiBkZXZpY2UgaXMgcGhvbmUgLCBjbGljayBkYXkgc3dpdGNoIHRvIHdlZWsgd2hlbiB2aWV3IHR5cGUgaXMgbW9udGhcbiAgICAgICAgdGhpcy50eXBlQ2hhbmdlKDApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vZWxzZSBjYWxjdWxhdGUgbmV3IHN0YXJ0ICYgZW5kXG4gICAgICAgIHRoaXMudHlwZUNoYW5nZSh0aGlzLnZpZXdUeXBlSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvL2xvYWQgZGF0YSAmIHJlZnJlc2hcbiAgICAgIHRoaXMubG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgICAgIHRoaXMubG9hZENhbGVuZGFyRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vZmV0Y2ggY2FsZW5kYXIgYmV0d2VlbiBzdGFydCAmIGVuZCByYW5nZVxuICBsb2FkQ2FsZW5kYXJEYXRhKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2xvYWRDYWxlbmRhciBkYXRhJyk7XG4gICAgaWYgKHRoaXMudmlld1R5cGUgIT09IHRoaXMuWUVBUikgeyAvLyB5ZWFyIG5vIG5lZWQgcXVlcnkgZGF0YSAsIG9ubHkgdmlld1xuXG4gICAgICAvL0lmIG9sZCBkYXRhIGlzIGxhcmdlciB0aGFuIDIwLCBjbGVhciBmaXJzdCB0byBtYWtlIHZpZXcgY2hhbmdlIGZhc3RlclxuICAgICAgaWYgKHRoaXMuY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlci5sZW5ndGggPiAyMClcbiAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyID0gW107XG5cbiAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuc3RvcmVTdGFydERhdGUpICYmIFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5zdG9yZUVuZERhdGUpKSB7XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudExpc3QodGhpcy5zdG9yZVN0YXJ0RGF0ZSwgdGhpcy5zdG9yZUVuZERhdGUsICcnKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZGVidWcoJ2xvYWRDYWxlbmRhciBkYXRhIGRvbmUnKTtcbiAgfVxuXG4gIGxvYWRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRDYWxlbmRhckV2ZW50RGV0YWlsOlwiLCBjbGllbnRJRCk7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudERldGFpbChjbGllbnRJRCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdnZXRDYWxlbmRhckV2ZW50RGV0YWlsJywgZGF0YSk7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsID0gZGF0YTtcbiAgICAgIHRoaXMuY3VzdG9tZXJDbGllbnROYW1lID0gdGhpcy5jdXN0b21lckNsaWVudE1hcC5nZXQodGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmN1c3RvbWVyQ2xpZW50SUQpO1xuICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lckNsaWVudE1hcDpcIiwgdGhpcy5jdXN0b21lckNsaWVudE1hcCk7XG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuZGlzcGxheUFjdGl2aXR5ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ2FsZW5kYXJfVHlwZScsIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5hY3Rpdml0eSk7XG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuZGlzcGxheUFsZXJ0MSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLCB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQxKTtcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5kaXNwbGF5QWxlcnQyID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuY29udmVydENvZGUyVGV4dCgnQ2FsZW5kYXJfUmVtaW5kVGltZScsIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDIpO1xuICAgICAgdGhpcy5vblRvZ2dsZURldGFpbE1vZGFsKHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCgpIHtcbiAgICBsZXQgcXVlcnlEYXRlID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLnZpZXdEYXRlKSwgZ2V0TW9udGgodGhpcy52aWV3RGF0ZSksIGdldERhdGUodGhpcy52aWV3RGF0ZSksIDAsIDAsIDApO1xuICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldENhbGVuZGFyRXZlbnRMaXN0KHF1ZXJ5RGF0ZSwgc3ViTWludXRlcyhhZGREYXlzKHRoaXMudmlld0RhdGUsIDEpLCAxKSwgJycpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignbG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QnLCBkYXRhKTtcbiAgICAgIHRoaXMudmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrRGV0YWlsKGV2ZW50SXRlbSkge1xuICAgIHRoaXMuY2xpZW50SUQgPSBldmVudEl0ZW0uY2xpZW50SUQ7XG4gICAgdGhpcy5sb2FkQ2FsZW5kYXJFdmVudERldGFpbCh0aGlzLmNsaWVudElEKTtcbiAgICB0aGlzLmxvYWRWaWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0KCk7XG5cbiAgICBjb25zb2xlLndhcm4oJ2NsaWNrRGV0YWlsJywgdGhpcy5jbGllbnRJRCk7XG4gIH0gLy8gZW5kIGNsaWNrRGV0YWlsXG5cbiAgb25DbGlja0RlbGV0ZUNhbmNlbCgpIHtcbiAgfSAvLyBlbmQgY2xpY2tEZWxldGVDYW5jZWxcblxuICBvbkNsaWNrRGVsZXRlQ29uZmlybSgpIHtcbiAgICB0aGlzLm1vZGFsTWFuYWdlci50b2dnbGVMb2FkaW5nKHRydWUpO1xuXG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZGVsZXRlQ2FsZW5kYXJFdmVudCh0aGlzLmNsaWVudElEKS5zdWJzY3JpYmUoYXN5bmMgZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oXCJ0aGlzLmNhbGVuZGFyU2VydmljZS5kZWxldGVDYWxlbmRhckV2ZW50IGRhdGE6IFwiLCBkYXRhKTtcbiAgICAgIGF3YWl0IHRoaXMuZGF0YVN5bmNTZXJ2aWNlLnN5bmNGdW5jKFsnQ0FMRU5EQVInXSk7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pc0RlbGV0ZSA9IGRhdGEuc3RhdHVzO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkQ2FsZW5kYXJEYXRhKCk7XG4gICAgICBpZiAodGhpcy5pc0V4cGFuZERldGFpbCkgeyAvLyBjbG9zZSBwb3AgdXBcbiAgICAgICAgdGhpcy5vblRvZ2dsZURldGFpbE1vZGFsKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kYWxNYW5hZ2VyLnRvZ2dsZUxvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9IC8vIGVuZCBjbGlja0RlbGV0ZUNvbmZpcm1cblxuICBvbkNsaWNrQXBwb2ludG1lbnRTYXZlKCkge1xuICAgIHRoaXMuaXNTYXZlQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgb25TYXZlQ2FsZW5kYXJFdmVudChyZXNwKSB7XG4gICAgbGV0IHR5cGUgPSByZXNwLnR5cGU7XG4gICAgY29uc29sZS5sb2coXCJvblNhdmVDYWxlbmRhckV2ZW50OlwiLCByZXNwKTtcbiAgICBpZiAodHlwZSAhPT0gJ2ZhaWwnKSB7XG4gICAgICBsZXQgZGF0YSA9IHJlc3AuZGF0YTtcbiAgICAgIGxldCBjbGllbnRJRCA9IGRhdGEuQ2xpZW50SUQ7XG4gICAgICBjb25zb2xlLndhcm4oJ3NhdmVDYWxlbmRhckV2ZW50Jyk7XG5cbiAgICAgIGNvbnNvbGUud2FybigndXBkYXRlQ2FsZW5kYXJFdmVudCcsIGNsaWVudElEKTtcbiAgICAgIHRoaXMubW9kYWxNYW5hZ2VyLnRvZ2dsZUxvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCB0aGlzLmRhdGFTeW5jU2VydmljZS5zeW5jRnVuYyhbJ0NBTEVOREFSJ10pO1xuICAgICAgdGhpcy5tb2RhbE1hbmFnZXIudG9nZ2xlTG9hZGluZyhmYWxzZSk7XG4gICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRDYWxlbmRhckV2ZW50RGV0YWlsKGNsaWVudElEKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsID0gZGF0YTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwoZmFsc2UpO1xuICAgICAgICB0aGlzLmxvYWRDYWxlbmRhckRhdGEoKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgdGhpcy5sb2FkQ2FsZW5kYXJFdmVudERldGFpbChjbGllbnRJRCk7XG4gICAgICAgICAgdGhpcy5pc1NhdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYWRkJykge1xuICAgICAgICAgIHRoaXMuaXNTYXZlID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ2FkZENhbGVuZGFyRXZlbnQnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5pc1NhdmVDbGljayA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgaXNQYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93V2lkdGggPj0gMTAyNDtcbiAgfVxuXG4gIGVkaXRFdmVudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGVuZGFyIEVkaXRFdmVudDpcIiwgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRFZGl0ID0gbmV3IENhbGVuZGFyRXZlbnREZXRhaWwodGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmNsaWVudElELFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmNhbGVuZGFySUQsXG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuY3VzdG9tZXJDbGllbnRJRCxcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC50aXRsZSxcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5sb2NhdGlvbixcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5hY3Rpdml0eSxcbiAgICAgICcnLFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0LFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmVuZCxcbiAgICAgICcnLFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSxcbiAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDIsXG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQzLFxuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLnJlbWFyayxcbiAgICAgIG51bGwpO1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudEVkaXQuYWxsRGF5ID0gdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFsbERheTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRFZGl0LmlzQWxlcnQgPSB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuaXNBbGVydDtcbiAgICB0aGlzLm9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIGFkZEV2ZW50KCkge1xuICAgIHRoaXMuY2xpZW50SUQgPSAnJztcbiAgICBsZXQgY3VycmVudFRpbWU7IC8vIGFkanVzdCB0aW1lIHRvIG5leHQgaW50ZXJ2YWxcbiAgICBjdXJyZW50VGltZSA9IG5ldyBEYXRlKGdldFllYXIodGhpcy52aWV3RGF0ZSksIGdldE1vbnRoKHRoaXMudmlld0RhdGUpLCBnZXREYXRlKHRoaXMudmlld0RhdGUpLCBnZXRIb3VycyhuZXcgRGF0ZSgpKSwgZ2V0TWludXRlcyhuZXcgRGF0ZSgpKSk7XG4gICAgY3VycmVudFRpbWUgPSBhZGRNaW51dGVzKGN1cnJlbnRUaW1lLCAoNSAtIGdldE1pbnV0ZXMoY3VycmVudFRpbWUpICUgNSkpOyAgLy8gYWRqdXN0IG1pbnV0ZXMgdG8gbmV4dCA1IG1pbnV0ZXNcbiAgICBjdXJyZW50VGltZSA9IGFkZEhvdXJzKGN1cnJlbnRUaW1lLCAxKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRFZGl0ID0gbmV3IENhbGVuZGFyRXZlbnREZXRhaWwoJycsICcnLCBudWxsLCAnJywgJycsIG51bGwsICdOJywgY3VycmVudFRpbWUsIGFkZE1pbnV0ZXMoY3VycmVudFRpbWUsIDE1KSwgJ1knLCAnOCcsICcnLCAnJywgJycsIG51bGwpO1xuICAgIHRoaXMubG9hZFZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3QoKTtcbiAgICB0aGlzLm9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIC8vIGJsb2NrIHdoaWNoIGNvbnRyb2wgZmlsdGVyXG5cbiAgb25BY3Rpdml0eVR5cGVMaXN0Q2hhbmdlKGFsZXJ0VHlwZUxpc3Q6IEFycmF5PFByb2ZpbGVDb2RlPikge1xuICAgIHRoaXMuYWxlcnRUeXBlTGlzdCA9IGFsZXJ0VHlwZUxpc3Q7XG4gICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdCA9IFtdO1xuICAgIGxldCBzZXR0aW5nVmFsID0ge307XG4gICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0LmZvckVhY2goKGNvZGVJdGVtKSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdhY3Rpdml0eVR5cGUgY29kZUl0ZW0nLCBjb2RlSXRlbSk7XG4gICAgICBpZiAoc2V0dGluZ1ZhbCAhPSB1bmRlZmluZWQpIHNldHRpbmdWYWxbY29kZUl0ZW0uZ2V0Q29kZSgpXSA9IGNvZGVJdGVtLmlzQ2hlY2s7XG5cbiAgICAgIGlmIChjb2RlSXRlbS5pc0NoZWNrKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QucHVzaChjb2RlSXRlbS5nZXRDb2RlKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5maWx0ZXJPcHRpb25DaGFuZ2UodGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdCk7XG4gICAgdGhpcy5zZXR0aW5nVmFsdWVDaGFuZ2Uoc2V0dGluZ1ZhbCk7XG4gIH1cblxuICBzZXR0aW5nVmFsdWVDaGFuZ2Uoc2V0dGluZ1ZhbHVlKSB7XG4gICAgLy91cGRhdGUgZmlsdGVyIHNldHRpbmdcbiAgICBsZXQgc2V0dGluZ09iaiA9IG5ldyBTZXR0aW5nKHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygnQ2FsZW5kYXJGaWx0ZXJTZXR0aW5nJykuU2V0dGluZ0lELCB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoJ0NhbGVuZGFyRmlsdGVyU2V0dGluZycpLlNldHRpbmdOYW1lLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nVmFsdWUpKTtcbiAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLnVwZGF0ZVNldHRpbmcoc2V0dGluZ09iaikuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnY2FsZW5kYXIuY29tcG9uZW50LXVwZGF0ZSBzZXR0aW5nJywgZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJPcHRpb25DaGFuZ2UoY3VycmVudEZpbHRlck9wdGlvbjogQXJyYXk8c3RyaW5nPikge1xuICAgIGNvbnNvbGUud2FybignY3VycmVudEZpbHRlck9wdGlvbicsIGN1cnJlbnRGaWx0ZXJPcHRpb24pO1xuICAgIHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QgPSBjdXJyZW50RmlsdGVyT3B0aW9uO1xuICAgIHRoaXMucmVmcmVzaENhbGVuZGFyRXZlbnRMaXN0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1cnJlbnRGaWx0ZXJPcHRpb24oc2V0dGluZ1ZhbCkge1xuICAgIHRoaXMuY3VycmVudEZpbHRlck9wdGlvbkxpc3QgPSBbXTtcblxuICAgIC8vZmluZCBjaGVja2VkIGZpbHRlclxuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnYWN0aXZpdHlUeXBlIGNvZGVJdGVtJywgY29kZUl0ZW0pO1xuICAgICAgaWYgKHNldHRpbmdWYWwgIT0gdW5kZWZpbmVkKSBzZXR0aW5nVmFsW2NvZGVJdGVtLmdldENvZGUoKV0gPSBjb2RlSXRlbS5pc0NoZWNrO1xuXG4gICAgICBpZiAoY29kZUl0ZW0uaXNDaGVjaykge1xuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0LnB1c2goY29kZUl0ZW0uZ2V0Q29kZSgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENhbGVuZGFyRXZlbnRMaXN0KCkge1xuXG4gICAgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyID0gW107XG5cbiAgICAvL2ZpbHRlciBldmVudCBjYWxlbmRhciB0eXBlXG4gICAgY29uc29sZS5kZWJ1Zygnc3RhcnQgcmVmcmVzaENhbGVuZGFyRXZlbnRMaXN0JywgdGhpcy5jYWxlbmRhckV2ZW50TGlzdC5sZW5ndGgpO1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlciA9IHRoaXMuY2FsZW5kYXJFdmVudExpc3QuZmlsdGVyKHggPT4gdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdC5pbmRleE9mKHguYWN0aXZpdHkpID4gLTEpO1xuICAgIGNvbnNvbGUuZGVidWcoJ3N0YXJ0IHJlZnJlc2hDYWxlbmRhckV2ZW50TGlzdCBkb25lJywgdGhpcy5jYWxlbmRhckV2ZW50TGlzdEFmdGVyRmlsdGVyKTtcbiAgICBjb25zb2xlLmRlYnVnKCdzdGFydCByZWZyZXNoQ2FsZW5kYXJFdmVudExpc3QgZG9uZScsIHRoaXMuY2FsZW5kYXJFdmVudExpc3RBZnRlckZpbHRlci5sZW5ndGgpO1xuICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgLy9jb3VudCBoZWlnaHRcbiAgICBpZiAodGhpcy52aWV3VHlwZSA9PSB0aGlzLkRBWSB8fCB0aGlzLnZpZXdUeXBlID09IHRoaXMuV0VFSykge1xuICAgICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5kIGJsb2NrXG5cblxuXG4gIHNjcm9sbFRvQ3VycmVudFRpbWUoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCB0aW1lRXZlbnRBbGxfZWxlID0gX3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jYWwtdGltZS1ldmVudHMnKTtcbiAgICAgIC8vIGNvbnNvbGUud2FybignX3RoaXMudGltZUV2ZW50QWxsX2VsZScsIHRpbWVFdmVudEFsbF9lbGUubGVuZ3RoLCB0aW1lRXZlbnRBbGxfZWxlKTtcblxuICAgICAgLy8gaWYodGltZUV2ZW50QWxsX2VsZSAhPW51bGwpe1xuICAgICAgZm9yIChsZXQgdGltZUV2ZW50X2VsZSBvZiB0aW1lRXZlbnRBbGxfZWxlKSB7XG4gICAgICAgIGxldCBtb2JpbGVEYXlIZWFkZXJfZWxlID0gX3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jYWwtZGF5LWhlYWRlcnMnKTtcbiAgICAgICAgbGV0IGFsbERheUV2ZW50X2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2FsLWFsbC1kYXktZXZlbnRzJyk7XG4gICAgICAgIGxldCBhbGxEYXlFdmVudF9oID0gKGFsbERheUV2ZW50X2VsZSAhPSBudWxsXG4gICAgICAgICAgPyBhbGxEYXlFdmVudF9lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgICAgOiAwKTtcblxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ21vYmlsZURheUhlYWRlcl9lbGUnLCBtb2JpbGVEYXlIZWFkZXJfZWxlKTtcbiAgICAgICAgaWYgKG1vYmlsZURheUhlYWRlcl9lbGUgIT0gbnVsbCkge1xuXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCdpZiBfdGhpcy5jYWxlbmRhckhlaWdodCcsIHRpbWVFdmVudF9lbGUsIF90aGlzLmNhbGVuZGFySGVpZ2h0KTtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2lmIG1vYmlsZURheUhlYWRlcl9lbGUnLCBtb2JpbGVEYXlIZWFkZXJfZWxlKTtcblxuICAgICAgICAgIHRpbWVFdmVudF9lbGUuc3R5bGUubWF4SGVpZ2h0ID0gKF90aGlzLmNhbGVuZGFySGVpZ2h0XG4gICAgICAgICAgICAtIG1vYmlsZURheUhlYWRlcl9lbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgICAgICAtIGFsbERheUV2ZW50X2hcbiAgICAgICAgICAgIC0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobW9iaWxlRGF5SGVhZGVyX2VsZSkubWFyZ2luQm90dG9tKSkgKyAncHgnO1xuXG4gICAgICAgICAgLy8gc2Nyb2xsIHRvIHRpbWVcbiAgICAgICAgICBsZXQgY3VycmVudEhvdXIgPSBnZXRIb3VycyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBIb3VyOicsIGdldEhvdXJzKG5ldyBEYXRlKCkpKTtcbiAgICAgICAgICBpZiAoY3VycmVudEhvdXIgPiAzKVxuICAgICAgICAgICAgdGltZUV2ZW50X2VsZS5zY3JvbGxUb3AgPSBNYXRoLmZsb29yKChjdXJyZW50SG91ciAtIDMpIC8gMikgKiA4MFxuICAgICAgICAgICAgICArIChNYXRoLmZsb29yKChjdXJyZW50SG91ciAtIDMpIC8gMilcbiAgICAgICAgICAgICAgICArIChjdXJyZW50SG91ciAtIDMpICUgMikgKiA4MjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBlbmQgZm9yOiB0aW1lRXZlbnRBbGxfZWxlXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAvLyB9XG5cbiAgICB9LCAxMDApOyAvLyDmnIPmnIlFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yIOWFiCBzZXRUaW1lT3V0IOino1xuICB9IC8vIGVuZCBzY3JvbGxUb0N1cnJlbnRUaW1lXG5cbiAgY2FsY3VDb250ZW50SGVpZ2h0KCkge1xuXG4gICAgY29uc29sZS5kZWJ1ZygnY2FsY3VDb250ZW50SGVpZ2h0Jyk7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdjYWxjdUNvbnRlbnRIZWlnaHQnLCB0aGlzLmNhbGVuZGFySGVpZ2h0KTtcbiAgICAgIC8vIGNhbGN1bGF0ZSB5ZWFyIHZpZXcgaGVpZ2h0XG4gICAgICBsZXQgeWVhcl9lbGUgPSBfdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpLWNhbGVuZGFyLXllYXInKTtcbiAgICAgIGxldCB5ZWFyVGFnX2VsZSA9IF90aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhcHAtdWktY2FsZW5kYXIteWVhcicpO1xuXG4gICAgICBpZiAoeWVhcl9lbGUgIT0gbnVsbCAmJiB5ZWFyVGFnX2VsZSAhPSBudWxsKSB7XG5cbiAgICAgICAgaWYgKF90aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuICAgICAgICAgIHllYXJUYWdfZWxlLnN0eWxlLm1pbkhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICAgIHllYXJUYWdfZWxlLnN0eWxlLmhlaWdodCA9IChfdGhpcy5jYWxlbmRhckhlaWdodFxuICAgICAgICAgICAgLSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh5ZWFyX2VsZSkubWFyZ2luVG9wKSkgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgeWVhcl9lbGUuc3R5bGUuaGVpZ2h0ID0gKF90aGlzLmNhbGVuZGFySGVpZ2h0XG4gICAgICAgICAgICAtIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHllYXJfZWxlKS5tYXJnaW5Ub3ApKSArICdweCc7XG4gICAgICAgICAgY29uc29sZS5sb2coJ21vYmlsZSB5ZWFyIHZpZXc6IF90aGlzLmNhbGVuZGFySGVpZ2h0OicsIF90aGlzLmNhbGVuZGFySGVpZ2h0LCAnd2luZG93LmdldENvbXB1dGVkU3R5bGUoeWVhcl9lbGUpLm1hcmdpblRvcCcsIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHllYXJfZWxlKS5tYXJnaW5Ub3ApO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2FsY3VsYXRlIG1vbnRoIHZpZXcgaGVpZ2h0XG4gICAgICBsZXQgbW9udGhfZWxlID0gX3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWwtbW9udGgtdmlldycpO1xuXG4gICAgICBpZiAobW9udGhfZWxlICE9PSBudWxsICYmIG1vbnRoX2VsZSAhPT0gdW5kZWZpbmVkICYmIF90aGlzLndpbmRvd1dpZHRoID4gMTAyMykge1xuXG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5tYXhIZWlnaHQgPSBfdGhpcy5jYWxlbmRhckhlaWdodCArICdweCc7XG4gICAgICAgIG1vbnRoX2VsZS5zdHlsZS5taW5IZWlnaHQgPSBfdGhpcy5jYWxlbmRhckhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgICBpZiAobW9udGhfZWxlLnN0eWxlLm1heEhlaWdodCA9PSAnMHB4Jykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0hlcmUnKTtcbiAgICAgICAgbW9udGhfZWxlLnN0eWxlLm1heEhlaWdodCA9IDEwMCAtIDMgKyAndmgnO1xuICAgICAgICBtb250aF9lbGUuc3R5bGUubWluSGVpZ2h0ID0gMTAwIC0gMyArICd2aCc7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgfSwgMzAwKTsgLy8g5pyD5pyJRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvciDlhYggc2V0VGltZU91dCDop6NcbiAgfSAvLyBlbmQgY2FsY3VDb250ZW50SGVpZ2h0XG5cbiAgcmVuZGVyV2VlaygpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gaW50ZWdyYXRpb24gcmVuZGVyV2VlaycpO1xuICAgIGxldCBtb2JpbGVEYXlIZWFkZXJfZWxlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNhbC1kYXktaGVhZGVycycpO1xuICAgIGxldCBhbGxEYXlFdmVudF9lbGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2FsLWFsbC1kYXktZXZlbnRzJyk7XG4gICAgY29uc29sZS5sb2coJ2luIGludGVncmF0aW9uIHJlbmRlcldlZWsnLCBtb2JpbGVEYXlIZWFkZXJfZWxlLCBhbGxEYXlFdmVudF9lbGUpO1xuICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50VGltZSgpO1xuICB9XG5cblxuICAvLyBmdW5jdGlvbiB3aGljaCBjb250cm9sIHBvcHVwXG5cbiAgb25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKHZhbCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc0V4cGFuZEVkaXQgPSB2YWw7XG4gICAgICBpZiAoIXRoaXMuaXNFeHBhbmRFZGl0KSB7XG4gICAgICAgIHRoaXMuaXNDYWxlbmRhckVkaXRNZXRhRGF0YURvbmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzRXhwYW5kRmlsdGVyKSB7IHRoaXMub25DbG9zZUluZm8oKTsgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAwKTsgLy8g5pyD5pyJRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvciDlhYggc2V0VGltZU91dCDop6NcblxuXG4gIH0gLy8gZW5kIHRvZ2dsZUFwcG9pbnRtZW50TW9kYWxcblxuICBvblRvZ2dsZURldGFpbE1vZGFsKHZhbCkge1xuICAgIHRoaXMuaXNFeHBhbmREZXRhaWwgPSB2YWw7XG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kRGV0YWlsKSB7XG4gICAgICB0aGlzLmlzQ2FsZW5kYXJEZXRhaWxNZXRhRGF0YURvbmUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRGaWx0ZXIpIHsgdGhpcy5vbkNsb3NlSW5mbygpOyB9XG4gIH1cbiAgb25Ub2dnbGVGaWx0ZXJNb2RhbCh2YWwpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRGaWx0ZXIpIHtcbiAgICAgIHRoaXMub25DbG9zZUluZm8oKTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmQgYmxvY2tcblxuICAvLyDoqK0gaW5mbyBwb3NpdGlvblxuICBAVmlld0NoaWxkKFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQpIG5vd1Nob3dCdG46IFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQpIGluZm9Db250ZW50OiBVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5mbycpIGZpbHRlckluZm86IFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50O1xuICBvbkluZm9UYWJDbGljayhkb20pIHtcbiAgICBjb25zb2xlLndhcm4oJ2luZm9UYWJDbGljaycpO1xuICAgIGNvbnNvbGUud2Fybignbm93U2hvd0J0bicsIHRoaXMubm93U2hvd0J0bik7XG5cbiAgICBpZiAodGhpcy5ub3dTaG93QnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3dTaG93QnRuIGNsaWNrJywgdGhpcy5ub3dTaG93QnRuLmJ0bkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgIGlmIChkb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ21lc3NhZ2VDb250ZW50JywgZG9tLm1lc3NhZ2VDb250ZW50LCB0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQpO1xuICAgICAgICBpZiAoZG9tLm1lc3NhZ2VDb250ZW50ICE9PSB0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQpIHtcbiAgICAgICAgICAvLyB0aGlzLmNsb3NlSW5mbygpO1xuICAgICAgICAgIHRoaXMubm93U2hvd0J0bi5jbG9zZUluZm8oKTtcbiAgICAgICAgICB0aGlzLm5vd1Nob3dCdG4gPSBkb207XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXNldEluZm9Qb3MoKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBlbmQgaWY6IGRvbSAhPT0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm93U2hvd0J0biA9IGRvbTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ21lc3NhZ2VDb250ZW50IGZpbHRlcicsIHRoaXMubm93U2hvd0J0bi5tZXNzYWdlQ29udGVudCA9PT0gdGhpcy5maWx0ZXJJbmZvLCB0aGlzLmZpbHRlckluZm8pO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4ubWVzc2FnZUNvbnRlbnQgPT09IHRoaXMuZmlsdGVySW5mbykge1xuICAgICAgdGhpcy5pc0V4cGFuZEZpbHRlciA9IHRydWU7XG4gICAgfVxuICB9IC8vIGVuZCBpbmZvVGFiQ2xpY2tcbiAgcmVzZXRJbmZvUG9zKCkge1xuICAgIC8vIHRoaXMuaXNFeHBhbmRGaWx0ZXIgPSB0cnVlO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3dTaG93QnRuLmNvdW50UG9zKCk7XG4gICAgfVxuICB9IC8vIGVuZCByZXNldEluZm9Qb3NcbiAgb25DbG9zZUluZm8oKSB7XG4gICAgdGhpcy5pc0V4cGFuZEZpbHRlciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm5vd1Nob3dCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3dTaG93QnRuLmNsb3NlSW5mbygpO1xuICAgICAgLy8gdGhpcy5ub3dTaG93QnRuID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2Nsb3NlSW5mbycsIHRoaXMubm93U2hvd0J0biwgdGhpcy5ub3dTaG93QnRuLmJ0bkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9IC8vIGVuZCBjbG9zZUluZm9cblxuICBjcmVhdGVDdXN0b21lckxpc3QoKSB7XG4gICAgbGV0IHBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG4gICAgcGFnZUluZm8ucGFnZVNpemUgPSAtMTtcbiAgICBsZXQgZmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyTGlzdChmaWx0ZXJDcml0ZXJpYSwgcGFnZUluZm8pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICAgIGxldCB0ZW1wX2FycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBjdXN0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJDbGllbnRNYXAuc2V0KGN1c3RJdGVtLmNsaWVudElELCB0aGlzLmN1c3RvbWVyVXRpbHMuY29udmVydE5hbWVUb1Nob3coY3VzdEl0ZW0uZmlyc3ROYW1lLCBjdXN0SXRlbS5sYXN0TmFtZSkpO1xuICAgICAgICB0ZW1wX2FycmF5LnB1c2gobmV3IFNlbGVjdE9wdGlvbihjdXN0SXRlbS5jbGllbnRJRCwgdGhpcy5jdXN0b21lclV0aWxzLmNvbnZlcnROYW1lVG9TaG93KGN1c3RJdGVtLmZpcnN0TmFtZSwgY3VzdEl0ZW0ubGFzdE5hbWUpKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1c3RvbWVySXRlbUxpc3QgPSB0ZW1wX2FycmF5O1xuICAgIH0pO1xuICB9XG5cbiAgbW9iaWxlRmlsdGVyQ2xpY2soKSB7XG4gICAgdGhpcy5pc0V4cGFuZEZpbHRlciA9IHRydWU7XG4gIH1cblxuXG4gIG9uTWV0YURhdGFEb25lKGZ1bmNOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoZnVuY05hbWUgPT09ICdDYWxlbmRhckVkaXQnKSB7XG4gICAgICB0aGlzLmlzQ2FsZW5kYXJFZGl0TWV0YURhdGFEb25lID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZnVuY05hbWUgPT09ICdDYWxlbmRhckRldGFpbCcpIHtcbiAgICAgIHRoaXMuaXNDYWxlbmRhckRldGFpbE1ldGFEYXRhRG9uZSA9IHRydWU7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==