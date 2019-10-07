/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(customerService, calendarService, translateService, changeDetector, deviceService, dateUtils, profileCodeService, extensionService, customerUtils, customerStore, customerSync, customerAction) {
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
    CustomersComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.customerStore) {
            this.criteriaChanges.unsubscribe();
            this.customerDetailChanges.unsubscribe();
            this.stateChanges.unsubscribe();
            this.customerListChanges.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
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
        this.translateMap.set(this.noSchedule, this.translateService.translate(this.noSchedule));
        if (this.customerStore) {
            this.criteriaChanges = this.customerStore.getCriteria().subscribe((/**
             * @param {?} criteria
             * @return {?}
             */
            function (criteria) {
                _this_1.pre_criteria = criteria;
            }));
            this.customerDetailChanges = this.customerStore.getCurrentCustomerDetail().subscribe((/**
             * @param {?} detail
             * @return {?}
             */
            function (detail) {
                _this_1.currentCustomer = detail;
            }));
            this.customerListChanges = this.customerStore.getCustomerList().subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this_1.pre_customerList = list;
            }));
            this.stateChanges = this.customerStore.getState().subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                console.log("main state: ", state);
                //console.log("curreontCustomer: ", this.currentCustomer);
                if (state == CUSTOMER_STATE.EDIT_SAVED && _this_1.customerState != CUSTOMER_STATE.EDIT_SAVED) {
                    //after saved, check if current ID in criteria
                    console.log("state == CUSTOMER_STATE.EDIT_SAVED");
                    console.log("currentCustomer: ", _this_1.currentCustomer);
                    _this_1.isDisplaySavePopup = true;
                    _this_1.customerList = _this_1.pre_customerList;
                    _this_1.filterCriteria = _this_1.pre_criteria;
                    if (_this_1.pre_criteria.hasCriteria()) {
                        _this_1.customerService.checkInFilterCriteria(_this_1.currentCustomer.clientID, _this_1.pre_criteria).subscribe((/**
                         * @param {?} result
                         * @return {?}
                         */
                        function (result) {
                            if (!result) {
                                _this_1.customerList.forEach((/**
                                 * @param {?} item
                                 * @return {?}
                                 */
                                function (item) {
                                    if (item.clientID == _this_1.currentCustomer.clientID) {
                                        item.isHighLight = true;
                                    }
                                }));
                                _this_1.customerList = tslib_1.__spread(_this_1.customerList);
                            }
                            else {
                                _this_1.customerList.forEach((/**
                                 * @param {?} item
                                 * @return {?}
                                 */
                                function (item) {
                                    if (item.clientID == _this_1.currentCustomer.clientID) {
                                        console.debug('change isHighLight status');
                                        item.isHighLight = false;
                                    }
                                }));
                            }
                            _this_1.customerList.forEach((/**
                             * @param {?} item
                             * @return {?}
                             */
                            function (item) {
                                if (item.clientID == _this_1.currentCustomer.clientID) {
                                    item.firstName = _this_1.currentCustomer.firstName;
                                    item.lastName = _this_1.currentCustomer.lastName;
                                    item.tag = _this_1.currentCustomer.possibility;
                                    item.complementPercent = _this_1.customerUtils.countCompletenessByProfile(_this_1.currentCustomer);
                                }
                            }));
                            _this_1.customerList = tslib_1.__spread(_this_1.customerList);
                            _this_1.customerStore.setCustomerList(_this_1.customerList);
                        }));
                    }
                    else {
                        _this_1.customerList.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
                            if (item.clientID == _this_1.currentCustomer.clientID) {
                                item.firstName = _this_1.currentCustomer.firstName;
                                item.lastName = _this_1.currentCustomer.lastName;
                                item.tag = _this_1.currentCustomer.possibility;
                                item.complementPercent = _this_1.customerUtils.countCompletenessByProfile(_this_1.currentCustomer);
                            }
                        }));
                        _this_1.customerList = tslib_1.__spread(_this_1.customerList);
                    }
                    _this_1.onGetCustomerDetailByID(_this_1.currentCustomer.clientID);
                    _this_1.refreshContactNote(false);
                    // this.changeDetector.detectChanges();
                }
                else if (state == CUSTOMER_STATE.EDIT && _this_1.customerState != CUSTOMER_STATE.EDIT && _this_1.customerState == CUSTOMER_STATE.FIRST) {
                    // edit/click page click last page
                    _this_1.customerList = _this_1.pre_customerList;
                    _this_1.filterCriteria = _this_1.pre_criteria;
                    //this.onGetCustomerDetailByID(this.currentCustomer.clientID);
                    if (StringUtils.isEmpty(_this_1.currentCustomer.clientID)) {
                        _this_1.refreshCustomerList(false);
                    }
                    else {
                        _this_1.onGetCustomerDetailByID(_this_1.currentCustomer.clientID);
                        _this_1.refreshContactNote(false);
                    }
                }
                else if (_this_1.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY) {
                    //firt in, fetch preset filter
                    console.log("this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY");
                    _this_1.loadPresetCriteria().then((/**
                     * @return {?}
                     */
                    function () {
                        _this_1.refreshCustomerList(false);
                    }));
                }
                else if (state == CUSTOMER_STATE.ADD_SAVED) {
                    //after add , get pre_criteria && refresh customerlist
                    console.log("state == CUSTOMER_STATE.ADD_SAVED");
                    _this_1.isDisplaySavePopup = true;
                    _this_1.filterCriteria = _this_1.pre_criteria;
                    _this_1.refreshCustomerList(false);
                }
                _this_1.customerState = state;
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
            function (data) {
                _this_1.alertOverTimeList = data;
                if (_this_1.alertOverTimeList.length != 0) {
                    _this_1.customerService.updateMessageToRead('OverTime', 'Customer').subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this_1.isDisplayUpdateRemind = true;
                    }));
                }
            }));
            //check customer data over 6month & 7day
            this.customerService.getAutoDeleteCustomerList("").subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log("customerAutoDelete: ", data);
                _this_1.alertAutoDeleteCustomer = data;
                if (_this_1.alertAutoDeleteCustomer.length != 0) {
                    _this_1.customerService.updateMessageToRead('AutoDelete', 'Customer').subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        console.log("updateMessageToRead: ", data);
                        _this_1.isDisplayDeleteRemind = true;
                    }));
                }
            }));
            //check customer info alert
            /** @type {?} */
            var timerObj = this.extensionService.getConfigValue('CustomerInfoAlertTimer');
            console.debug('timerObj', timerObj);
            this._checkIsInfoAlertTime(timerObj);
        }
    };
    /**
     * @param {?} isAppend
     * @return {?}
     */
    CustomersComponent.prototype.refreshCustomerList = /**
     * @param {?} isAppend
     * @return {?}
     */
    function (isAppend) {
        var _this_1 = this;
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
        function (data) {
            console.log("data in criteria: ", data);
            if (!isAppend)
                _this_1.customerList = tslib_1.__spread(data);
            else
                _this_1.customerList = tslib_1.__spread(_this_1.customerList, data);
            if ((!_this_1.filterCriteria.hasCriteria())) {
                _this_1.filterType = 'NONE';
            }
            else {
                _this_1.filterType = StringUtils.isNotEmpty(_this_1.filterCriteria.keyword) ? 'SEARCH' : 'FILTER';
            }
            if (_this_1.customerStore) {
                _this_1.customerStore.setCustomerList(_this_1.customerList);
            }
            if (_this_1.customerList.length > 0) {
                _this_1.onGetCustomerDetailByID(_this_1.customerList[0].clientID);
            }
            else {
                _this_1.customerDetail = new CustomerDetail();
            }
            // this.changeDetector.detectChanges();
        }));
    };
    /* integration contact-list */
    /* integration contact-list */
    /**
     * @param {?} isAppend
     * @return {?}
     */
    CustomersComponent.prototype.refreshContactNote = /* integration contact-list */
    /**
     * @param {?} isAppend
     * @return {?}
     */
    function (isAppend) {
        var _this_1 = this;
        //if append data will next page
        if (!isAppend)
            this.contactListPageInfo.resetPage();
        this.customerService.getCustomerContactNote(this.customerDetail.clientID, this.contactListPageInfo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (isAppend)
                _this_1.customerContactList = _this_1.customerContactList.concat(data);
            else
                _this_1.customerContactList = data;
            console.debug('refreshContactNote success isRefreshContactList status');
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomersComponent.prototype.onGetCustomerContactListByID = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this_1 = this;
        this.customerService.getCustomerContactNote(clientID, this.contactListPageInfo).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this_1.customerContactList = data;
        }));
    };
    /**
     * @param {?} timerObj
     * @return {?}
     */
    CustomersComponent.prototype._checkIsInfoAlertTime = /**
     * @param {?} timerObj
     * @return {?}
     */
    function (timerObj) {
        var _this_1 = this;
        /** @type {?} */
        var infoAlertDateRange = timerObj.DateRange;
        /** @type {?} */
        var infoAlertTimeRange = timerObj.TimeRange;
        /** @type {?} */
        var now = new Date();
        console.debug('now', now);
        console.debug('now month', now.getMonth() + 1);
        console.debug('now date', now.getDate());
        console.debug('now hours', now.getHours());
        infoAlertDateRange.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var month = element['month'];
            /** @type {?} */
            var date = element['date'];
            if ((now.getMonth() + 1 == Number.parseInt(month)) && now.getDate() == Number.parseInt(date)) {
                if (now.getHours() >= Number.parseInt(infoAlertTimeRange['start'])
                    && now.getHours() <= Number.parseInt(infoAlertTimeRange['end'])) {
                    _this_1.isDisplayInfoAlertPopup = true;
                    return;
                }
            }
        }));
    };
    /**
     * @param {?} clientID
     * @return {?}
     */
    CustomersComponent.prototype.onGetCustomerDetailByID = /**
     * @param {?} clientID
     * @return {?}
     */
    function (clientID) {
        var _this_1 = this;
        this.customerService.getCustomerDetail(clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this_1.customerDetail = data;
            _this_1.customerService.convertCustomerDetailDisplayMode(_this_1.customerDetail);
        }));
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.toggleSearch = /**
     * @return {?}
     */
    function () {
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
    };
    // search keypress
    // search keypress
    /**
     * @param {?} name
     * @return {?}
     */
    CustomersComponent.prototype.searchCustomerName = 
    // search keypress
    /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        console.debug('searchCustomerName', name);
        // this.filterCriteria = new CustomerFilterCriteria();
        this.filterCriteria.keyword = name;
        if (this.customerStore) {
            this.customerStore.setCriteria(this.filterCriteria);
        }
        this.refreshCustomerList(false);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CustomersComponent.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.name;
    };
    //when customer-list click get click Item
    //when customer-list click get click Item
    /**
     * @param {?} customerItem
     * @return {?}
     */
    CustomersComponent.prototype.onChangeCustomer = 
    //when customer-list click get click Item
    /**
     * @param {?} customerItem
     * @return {?}
     */
    function (customerItem) {
        this.clickItem = customerItem;
        //get CustomerDetail
        this.onGetCustomerDetailByID(customerItem.clientID);
        //get CustomerNote
        this.onGetCustomerContactListByID(customerItem.clientID);
        this.isShow = true;
    };
    //when customer-list fetch next record
    //when customer-list fetch next record
    /**
     * @return {?}
     */
    CustomersComponent.prototype.onCustomerLoad = 
    //when customer-list fetch next record
    /**
     * @return {?}
     */
    function () {
        this.customerListPageInfo.nextPage();
        this.refreshCustomerList(true);
    };
    //when customer-list sync data to backend
    //when customer-list sync data to backend
    /**
     * @return {?}
     */
    CustomersComponent.prototype.onCustomerRefresh = 
    //when customer-list sync data to backend
    /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        //sync & reload list
        this.customerSync.sync().subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            _this_1.refreshCustomerList(false);
        }));
    };
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    CustomersComponent.prototype.deleteCustomer = /**
     * @param {?} customerClientID
     * @return {?}
     */
    function (customerClientID) {
        this.isDisplayDelCustomerPopup = true;
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.doDeleteCustomer = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.customerList = this.customerList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.clientID != _this_1.customerDetail.clientID; }));
        this.onGetCustomerDetailByID(this.customerList[0].clientID);
        this.customerService.deleteCustomerProfile(this.customerDetail.clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log("customerService.doDeleteCustomer()", data);
            if (data.status) {
                if (_this_1.customerStore) {
                    _this_1.customerStore.setCustomerList(_this_1.customerList);
                }
                _this_1.isShow = false;
                _this_1.isDisplayDeletePopup = true;
                // this.changeDetector.detectChanges();
            }
        }));
    };
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    CustomersComponent.prototype.addAppointment = /**
     * @param {?} customerClientID
     * @return {?}
     */
    function (customerClientID) {
        var _this_1 = this;
        /** @type {?} */
        var currentTime;
        currentTime = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), getHours(new Date()), getMinutes(new Date()));
        currentTime = addMinutes(currentTime, (5 - getMinutes(currentTime) % 5)); // adjust minutes to next 5 minutes
        currentTime = addHours(currentTime, 1);
        this.calendarEventDetail = new CalendarEventDetail('', '', '', '', null, 'N', currentTime, addHours(currentTime, 1), 'Y', '8', null, '', '', null);
        /** @type {?} */
        var queryDate = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), 0, 0, 0);
        this.calendarService.getCalendarEventList(queryDate, subMinutes(addDays(this.viewDate, 1), 1), '').subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this_1.viewDateCalendarEventList = data;
            _this_1.onToggleAppointmentModal(true);
        }));
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.onClickAppointmentSave = /**
     * @return {?}
     */
    function () {
        this.isSaveClick = true;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CustomersComponent.prototype.onToggleAppointmentModal = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log("X");
        this.isExpandEdit = val;
    };
    /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    CustomersComponent.prototype.onSaveCalendarEvent = /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    function (calendarEventDetail) {
        var _this_1 = this;
        //alert(calendarEventDetail);
        this.isSaveClick = false;
        if (calendarEventDetail) {
            this.calendarService.addCalendarEvent(calendarEventDetail).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.status) {
                    _this_1.isDisplaySavePopup = true;
                    calendarEventDetail.clientID = data.clientID;
                    _this_1.calendarEventDetail = calendarEventDetail;
                    _this_1.onToggleAppointmentModal(false);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.addCustomer = /**
     * @return {?}
     */
    function () {
        this.isDisplayConfirmAlertPopup = false;
        // this.changeDetector.detectChanges();
        /** @type {?} */
        var detail = new CustomerDetail();
        if (this.customerStore) {
            this.customerStore.setCurrentCustomerDetail(detail);
            this.customerStore.setState(CUSTOMER_STATE.EDIT);
        }
        if (this.customerAction) {
            this.customerAction.afterCustomerEdit(detail);
        }
    };
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    CustomersComponent.prototype.editCustomer = /**
     * @param {?} customerClientID
     * @return {?}
     */
    function (customerClientID) {
        var _this_1 = this;
        if (this.customerStore) {
            this.customerStore.setState(CUSTOMER_STATE.EDIT);
            this.customerService.getCustomerDetail(customerClientID).subscribe((/**
             * @param {?} detail
             * @return {?}
             */
            function (detail) {
                _this_1.customerStore.setCurrentCustomerDetail(detail);
                if (_this_1.customerAction)
                    _this_1.customerAction.afterCustomerEdit(detail);
            }));
        }
    };
    /**
     * @param {?} customerDetail
     * @return {?}
     */
    CustomersComponent.prototype.detailChange = /**
     * @param {?} customerDetail
     * @return {?}
     */
    function (customerDetail) {
        console.log('detailChange', customerDetail);
        this.detailModel.emit(customerDetail);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    CustomersComponent.prototype.followChange = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this_1 = this;
        this.customerService.updateCustomerFollowStatus(obj.clientID, obj.isFollow).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            //this.refreshCustomerList(false);
            //console.log(JSON.stringify(this.customerList));
            if (_this_1.filterCriteria) {
                _this_1.customerService.checkInFilterCriteria(obj.clientID, _this_1.filterCriteria).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    _this_1.customerList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
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
            _this_1.customerList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.clientID == obj.clientID; })).forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                value.isFollow = obj.isFollow;
            }));
        }));
        //this.followChangeClientID = obj.clientID;
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.addNote = /**
     * @return {?}
     */
    function () {
        console.debug('addNote');
        this.noteCurrentTime = new Date();
        this.noteMessage = '';
        this.isPopupEditNote = true;
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomersComponent.prototype.editNote = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        console.debug('editNote', note);
        this.noteEditClientID = note.getClientID();
        this.noteCurrentTime = new Date();
        this.noteMessage = note.noteMessage;
        this.isPopupEditNote = true;
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomersComponent.prototype.displayNote = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        console.debug('displayNote', note);
        this.customerContactDetail = note;
        // add click customer name
        this.customerContactDetail.name = this.customerDetail.lastName + this.customerDetail.firstName;
        this.isPopupNoteDetail = true;
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomersComponent.prototype.deleteNote = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        console.debug('deleteNote', note);
        this.noteClientID = note.getClientID();
        this.isPopupDeleteNote = true;
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.doDeleteContact = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.customerService.deleteCustomerContact(this.noteClientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log("customerService.deleteNote()", data);
            if (data.status) {
                _this_1.customerContactList = _this_1.customerContactList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.getClientID() != _this_1.noteClientID; }));
                _this_1.noteClientID = '';
                _this_1.isDisplayDeletePopup = true;
            }
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomersComponent.prototype.onSaveNote = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* the same save btn for edit/add ,event also the same event, how to distinguish*/
        //alert(JSON.stringify(this.noteMessage));
        var _this_1 = this;
        if (StringUtils.isEmpty(this.noteMessage)) {
            alert('Message is required!!');
        }
        else {
            this.customerService.addCustomerContact(this.noteEditClientID, this.customerDetail.clientID, this.noteMessage, this.noteCurrentTime).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log("customerService.saveNote()", data);
                if (data.status) {
                    console.debug('saveNote success , close popup & refresh list', _this_1.isDisplaySavePopup, 'isRefreshContactList', _this_1.isRefreshContactList);
                    // if(StringUtils.isNotEmpty(this.noteEditClientID)) {
                    //   let array = this.customerContactList.filter(x => x.getClientID() == this.noteEditClientID).forEach((value) =>{
                    //     value.noteMessage = this.noteMessage;
                    //   });
                    //   alert(array.length);
                    // }
                    // else {
                    //   this.refreshContactNote(false);
                    // }
                    _this_1.noteEditClientID = undefined;
                    _this_1.isPopupEditNote = false;
                    _this_1.isDisplaySavePopup = true;
                    _this_1.refreshContactNote(false);
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
    };
    /**
     * @param {?} action
     * @param {?} optionArray
     * @return {?}
     */
    CustomersComponent.prototype.showConfirmPopup = /**
     * @param {?} action
     * @param {?} optionArray
     * @return {?}
     */
    function (action, optionArray) {
        this._confirmAction.action = action;
        this._confirmAction.option = optionArray;
        this.isDisplayConfirmAlertPopup = true;
        //default btn is disable
        this.isPopupConfirmDisable = true; // true;
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.confirmPopup = /**
     * @return {?}
     */
    function () {
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
    };
    // detect confirm popup to content bottm and the btn can click
    // detect confirm popup to content bottm and the btn can click
    /**
     * @param {?} isBtm
     * @return {?}
     */
    CustomersComponent.prototype.detectScroll = 
    // detect confirm popup to content bottm and the btn can click
    /**
     * @param {?} isBtm
     * @return {?}
     */
    function (isBtm) {
        console.log('in detect scroll===', isBtm);
        if (isBtm) {
            this.isPopupConfirmDisable = false;
        }
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.import = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.deviceService.searchContactsByName("").subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var importList = data;
            console.debug('import result ', importList);
            _this_1.importContractMap.clear();
            //regroup
            importList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                console.debug(element.lastname);
                //if no lastname,use first name
                if (StringUtils.isEmpty(element.lastname)) {
                    element.lastname = element.firstname;
                    element.firstname = '';
                }
                /** @type {?} */
                var name = element.lastname;
                if (name != null && name.length > 0) {
                    /** @type {?} */
                    var firstWord = name.substring(0, 1);
                    firstWord = firstWord.toLowerCase();
                    console.debug('firstWord =' + firstWord);
                    /** @type {?} */
                    var group = _this_1.importContractMap.get(firstWord);
                    if (group == undefined)
                        group = new CustomerImportGroup(firstWord);
                    group.addItem(element);
                    _this_1.importContractMap.set(firstWord, group);
                }
            }));
            console.debug('importContractMap', _this_1.importContractMap);
        }));
        this.isPopupImport = true;
    };
    //control import popup is display
    //control import popup is display
    /**
     * @param {?} isShow
     * @return {?}
     */
    CustomersComponent.prototype.displayImportPopup = 
    //control import popup is display
    /**
     * @param {?} isShow
     * @return {?}
     */
    function (isShow) {
        this.isPopupImport = isShow;
    };
    //when keypress keyword refresh contract list
    //when keypress keyword refresh contract list
    /**
     * @param {?} keyword
     * @return {?}
     */
    CustomersComponent.prototype.refreshImport = 
    //when keypress keyword refresh contract list
    /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.importContractMap.forEach((/**
         * @param {?} group
         * @param {?} groupName
         * @return {?}
         */
        function (group, groupName) {
            // console.log(groupName, group);
            group.isShow = false;
            group.getItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                // console.debug('item',item);
                /** @type {?} */
                var name = item.lastname + item.firstname;
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
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.doImport = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.customerService.importContact(this.importContactList).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            //alert("1"+JSON.parse(JSON.stringify(data)).status);
            /** @type {?} */
            var status = (JSON.parse(JSON.stringify(data))).status;
            if (status) {
                _this_1.isPopupImport = false;
                _this_1.isDisplayImportSavePopup = true;
                _this_1.mobileResultSize = 0;
                //refresh customer list
                _this_1.refreshCustomerList(false);
            }
        }));
    };
    /* customer-import*/
    /* customer-import*/
    /**
     * @param {?} importItems
     * @return {?}
     */
    CustomersComponent.prototype.onImportCustomer = /* customer-import*/
    /**
     * @param {?} importItems
     * @return {?}
     */
    function (importItems) {
        console.debug('importItems', importItems);
        this.importContactList = importItems;
        this.mobileResultSize = importItems.length;
    };
    //call customer function
    //call customer function
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    CustomersComponent.prototype.callCustomer = 
    //call customer function
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    function (customerClientID) {
        var _this_1 = this;
        console.debug('callCustomer = ' + customerClientID);
        this.customerService.getCustomerContactTel(customerClientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this_1.callPhoneTelArray = data;
            //check number array is single
            if (_this_1.callPhoneTelArray.length != 0) {
                //only one number just to call out
                if (_this_1.callPhoneTelArray.length == 1) {
                    _this_1.callPhone(_this_1.callPhoneTelArray[0].tel);
                }
                else {
                    _this_1.isPopupCallPhone = true;
                }
            }
        }));
    };
    //cancel callphone popup
    //cancel callphone popup
    /**
     * @return {?}
     */
    CustomersComponent.prototype.cancelCallPhone = 
    //cancel callphone popup
    /**
     * @return {?}
     */
    function () {
        this.isPopupCallPhone = !this.isPopupCallPhone;
    };
    //call number from phone
    //call number from phone
    /**
     * @param {?} telNumber
     * @return {?}
     */
    CustomersComponent.prototype.callPhone = 
    //call number from phone
    /**
     * @param {?} telNumber
     * @return {?}
     */
    function (telNumber) {
        var _this_1 = this;
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
        function (fun) {
            _this_1.addNote();
        }), 1000);
    };
    //open filter popup
    //open filter popup
    /**
     * @return {?}
     */
    CustomersComponent.prototype.filter = 
    //open filter popup
    /**
     * @return {?}
     */
    function () {
        this.isPopupFilter = true;
    };
    //clear filter item
    //clear filter item
    /**
     * @return {?}
     */
    CustomersComponent.prototype.clearFilter = 
    //clear filter item
    /**
     * @return {?}
     */
    function () {
        this.clearSubject.next();
    };
    //filter customer list and close popup
    //filter customer list and close popup
    /**
     * @return {?}
     */
    CustomersComponent.prototype.doFilter = 
    //filter customer list and close popup
    /**
     * @return {?}
     */
    function () {
        this.saveFilterSubject.next();
    };
    /**
     * @param {?} criteria
     * @return {?}
     */
    CustomersComponent.prototype.doneCriteria = /**
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
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
            function (data) {
                console.debug('doneCriteria saveFilterCriteria', data);
            }));
        }
        this.refreshCustomerList(false);
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.loadPresetCriteria = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        //check has preset
        /** @type {?} */
        var criteria = new CustomerFilterCriteria();
        return new Promise((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this_1.customerService.getFilterCriteriaPreset().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('getfilterCriteriaPreset', data);
                if (data != undefined) {
                    /** @type {?} */
                    var count = 0;
                    for (var column in data) {
                        /** @type {?} */
                        var values = data[column];
                        console.debug('column', column, 'arrays', values);
                        criteria.addCriteriaCols(column, values);
                        count++;
                    }
                    if (count != 0) {
                        criteria.savePreset = true;
                    }
                    _this_1.filterCriteria = criteria;
                }
                res();
            }));
        }));
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.cancelDelete = /**
     * @return {?}
     */
    function () {
        console.log('cancelDelete');
    };
    // refreash content
    // refreash content
    /**
     * @return {?}
     */
    CustomersComponent.prototype.refreshContent = 
    // refreash content
    /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        console.log('content refresh:', this.customerSync);
        /** @type {?} */
        var _this = this;
        //set timeout for refresh animation
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this_1.customerSync.sync().subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                if (resp) {
                    _this_1.isLoadingFinishContent = true;
                    // this.triggerCustomerListQuery();
                }
            }));
        }), 800);
    };
    // loading content
    // loading content
    /**
     * @param {?} event
     * @return {?}
     */
    CustomersComponent.prototype.loadContent = 
    // loading content
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this_1 = this;
        console.log('content loading');
        if (!this.loadContactList)
            this.loadContactList = true;
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this_1.isLoadingFinishContent = true;
            }), 0);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CustomersComponent.prototype.contactRefreshDone = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this_1 = this;
        console.debug('refresh done');
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this_1.isLoadingFinishContent = !val;
            _this_1.loadContactList = val;
        }), 0);
    };
    //isShowChange
    //isShowChange
    /**
     * @param {?} val
     * @return {?}
     */
    CustomersComponent.prototype.isShowChange = 
    //isShowChange
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (this.isShow !== val) {
            this.isShow = val;
            // this.changeDetector.detectChanges();
        }
    };
    /**
     * @param {?} time
     * @return {?}
     */
    CustomersComponent.prototype.toNoteTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
    };
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
    CustomersComponent.ctorParameters = function () { return [
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
    ]; };
    CustomersComponent.propDecorators = {
        calendarEditComponent: [{ type: ViewChild, args: [CalendarEditComponent,] }],
        detailPreTemplate: [{ type: Input }],
        detailPostTemplate: [{ type: Input }],
        detailModel: [{ type: Output }]
    };
    return CustomersComponent;
}());
export { CustomersComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2SixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFlLGtCQUFrQixFQUFFLGdCQUFnQixFQUFlLE1BQU0sa0JBQWtCLENBQUM7QUFDL0ssT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0s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QUE0RTs7Ozs7SUFHNUUsOENBQThDOzs7OztJQUc5Qyw2Q0FBd0I7Ozs7O0lBQ3hCLG1EQUE4Qjs7Ozs7SUFDOUIsMENBQXFCOzs7OztJQUNyQixpREFBNEI7O0lBRzVCLDBDQUFvQzs7SUFDcEMsK0NBQXlDOztJQUl6QywrQ0FBNkM7O0lBQzdDLGdEQUE4Qzs7SUFDOUMseUNBQXlFOzs7OztJQUU3RCw2Q0FBd0M7Ozs7O0lBQ2xELDZDQUF3Qzs7Ozs7SUFDeEMsOENBQTBDOzs7OztJQUMxQyw0Q0FBeUM7Ozs7O0lBQ3pDLDJDQUFvQzs7Ozs7SUFDcEMsdUNBQTRCOzs7OztJQUM1QixnREFBOEM7Ozs7O0lBQzlDLDhDQUEwQzs7Ozs7SUFDMUMsMkNBQW9DOzs7OztJQUNwQywyQ0FBNEU7Ozs7O0lBQzVFLDBDQUF5RTs7Ozs7SUFDekUsNENBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9wdGlvbmFsLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRXh0ZW5zaW9uU2VydmljZSwgTGFuZ3VhZ2UsIFN0cmluZ1V0aWxzLCBEYXRlVXRpbHMsIFBhZ2VJbmZvLCBEZXZpY2VTZXJ2aWNlLCBQcm9maWxlQ29kZSwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBUcmFuc2xhdGVTZXJ2aWNlLCBDb250YWN0SXRlbSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlLCBDYWxlbmRhckV2ZW50RGV0YWlsLCBDYWxlbmRhckVkaXRDb21wb25lbnQgfSBmcm9tICdAYWxsaWFuelNORC9jYWxlbmRhcic7XG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2N1c3RvbWVyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21lclRlbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJUZWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSB9IGZyb20gJy4uL2JlYW4vY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhJztcbmltcG9ydCB7IEN1c3RvbWVyQWxlcnRJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckFsZXJ0SXRlbSc7XG5pbXBvcnQgeyBDdXN0b21lckNvbmZpcm1BY3Rpb24gfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWNvbmZpcm0tYWN0aW9uJztcbmltcG9ydCB7IEN1c3RvbWVyRGV0YWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckRldGFpbCc7XG5pbXBvcnQgeyBDdXN0b21lckl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVySXRlbSc7XG5pbXBvcnQgeyBDdXN0b21lckNvbnRhY3ROb3RlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckNvbnRhY3ROb3RlJztcbmltcG9ydCB7IEN1c3RvbWVySW1wb3J0R3JvdXAgfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWltcG9ydC1ncm91cCc7XG5pbXBvcnQgeyBhZGREYXlzLCBhZGRIb3VycywgYWRkTWludXRlcywgZ2V0RGF0ZSwgZ2V0SG91cnMsIGdldE1pbnV0ZXMsIGdldE1vbnRoLCBnZXRZZWFyLCBzdWJNaW51dGVzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgc3luY0N1c3RvbWVyVG9rZW4sIHN0b3JlQ3VzdG9tZXJUb2tlbiwgY3VzdG9tZXJBY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBzeW5jQ3VzdG9tZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgc3RvcmVDdXN0b21lciwgQ1VTVE9NRVJfU1RBVEUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2Uvc3RvcmVDdXN0b21lci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgY3VzdG9tZXJBY3Rpb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvY3VzdG9tZXJBY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEN1c3RvbWVyVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jdXN0b21lci11dGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hCbG9ja0FuaScsIFtcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoe1xuICAgICAgICB3aWR0aDogJzAnLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8vaW50ZXJncmF0aW9uIENhbGVuZGFyIE1vZHVsZVxuICBAVmlld0NoaWxkKENhbGVuZGFyRWRpdENvbXBvbmVudCkgY2FsZW5kYXJFZGl0Q29tcG9uZW50O1xuICBwdWJsaWMgdmlld1R5cGVJbmRleCA9IDI7IC8vICdtb250aCdcbiAgcHVibGljIHZpZXdUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyB2aWV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHB1YmxpYyB3ZWVrU3RhcnRzT24gPSAxOyAvLyBNb25kYXkgXG5cblxuXG4gIC8vIGNvbnRyb2wgbW9iaWxlIHNob3dcbiAgcHVibGljIGlzU2hvdyA9IGZhbHNlO1xuXG4gIC8vIHBvcHVwXG4gIHB1YmxpYyBpc0V4cGFuZERldGFpbCA9IGZhbHNlO1xuICBwdWJsaWMgaXNSZWZyZXNoRGV0YWlsID0gZmFsc2U7XG4gIHB1YmxpYyBpc1NhdmVDbGljayA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICAvL+WuouaItua4heWWrueahHNlYXJjaCBibG9jayBhbmltYXRlXG4gIHB1YmxpYyBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNsYXNzU2VhcmNoOiBzdHJpbmcgPSAnJztcblxuICAvL3BvcHVwIGNvbnRyb2xcbiAgcHVibGljIGlzRGlzcGxheUltcG9ydFNhdmVQb3B1cCA9IGZhbHNlOyAvL2ltcG9ydCBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5U2F2ZVBvcHVwID0gZmFsc2U7IC8vc2F2ZSBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5RGVsQ3VzdG9tZXJQb3B1cCA9IGZhbHNlOyAvL2RlbGV0ZSBjdXN0b21lciBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5Q29uZmlybUFsZXJ0UG9wdXAgPSBmYWxzZTsgLy9jb25maXJtIGFsZXJ0IHBvcHVwXG4gIHB1YmxpYyBpc0Rpc3BsYXlJbmZvQWxlcnRQb3B1cCA9IGZhbHNlOyAvL2luZm8gYWxlcnQgcG9wdXBcbiAgcHVibGljIGlzRGlzcGxheVVwZGF0ZVJlbWluZCA9IGZhbHNlOyAvL2FsZXJ0IGN1c3RvbWVyIG92ZXIgNiBtb250aCBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5RGVsZXRlUmVtaW5kID0gZmFsc2U7IC8vYWxlcnQgY3VzdG9tZXIgb3ZlciA2IG1vbnRoICYgN2RheSBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cEltcG9ydCA9IGZhbHNlOyAvL2ltcG9ydCBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cEZpbHRlciA9IGZhbHNlOyAvL2ZpbHRlciBwb3B1cFxuICBwdWJsaWMgaXNFeHBhbmRFZGl0ID0gZmFsc2U7IC8vIGFwcG9pbnRtZW50IHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwQ2FsbFBob25lID0gZmFsc2U7IC8vY2FsbCBjdXN0b21lciBwaG9uZSBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cE5vdGVEZXRhaWwgPSBmYWxzZTsgLy9jb250YWN0IGRldGFpbCBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cEVkaXROb3RlID0gZmFsc2U7IC8vYWRkL2VkaXQgY29udGFjdCBub3RlIHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwRGVsZXRlTm90ZSA9IGZhbHNlOyAvL2RlbGV0ZSBjb250YWN0IG5vdGUgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBDb25maXJtRGlzYWJsZSA9IHRydWU7IC8vIGNvbmZpcm1Qb3B1cCBidG4gaXMgZGlzYWJsZSBkZWZhdWx0XG4gIHB1YmxpYyBpc0Rpc3BsYXlEZWxldGVQb3B1cCA9IGZhbHNlOyAvL2RlbGV0ZSBzdWNjZXNzIHBvcHVwXG5cbiAgLy9jb250cm9sIG92ZXJ0aW1lIGN1c3RvbWVyIGxpc3RcbiAgcHVibGljIGFsZXJ0T3ZlclRpbWVMaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVyQWxlcnRJdGVtPigpO1xuXG4gIC8vY29udHJvbCBhdXRvIGRlbGV0ZSBjdXN0b21lciBsaXN0XG4gIHB1YmxpYyBhbGVydEF1dG9EZWxldGVDdXN0b21lciA9IG5ldyBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4oKTtcblxuICAvL2NhY2hlIGNvbmZpcm0gYWN0aW9uXG4gIHByaXZhdGUgX2NvbmZpcm1BY3Rpb246IEN1c3RvbWVyQ29uZmlybUFjdGlvbiA9IG5ldyBDdXN0b21lckNvbmZpcm1BY3Rpb24oKTtcblxuICAvL2NvbnRyb2wgcmVmcmVzaCAgY29udGVudFxuICBwdWJsaWMgaXNMb2FkaW5nRmluaXNoQ29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vY29udHJvbFxuICBwdWJsaWMgaXNMYXp5TG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItZGV0YWlsIHVzZWRcbiAgLy9jYWxsIHBob25lIG9ialxuICBwdWJsaWMgY2FsbFBob25lVGVsQXJyYXk6IEFycmF5PEN1c3RvbWVyVGVsPjtcblxuICAvL2ludGVyZ3JhdGlvbiBjdXN0b21lci1jb250YWN0LWxpc3QgdXNlZFxuICAvL2N1c3RvbWVyIGNvbnRhY3QgZGV0YWlsIG9ialxuICBwdWJsaWMgY3VzdG9tZXJDb250YWN0RGV0YWlsOiBDdXN0b21lckNvbnRhY3ROb3RlO1xuICBwdWJsaWMgY3VzdG9tZXJDb250YWN0TGlzdDogQXJyYXk8Q3VzdG9tZXJDb250YWN0Tm90ZT4gPSBbXTtcbiAgcHVibGljIGNvbnRhY3RMaXN0UGFnZUluZm8gPSBuZXcgUGFnZUluZm8oKTtcblxuICBwdWJsaWMgY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDtcbiAgcHVibGljIHZpZXdEYXRlQ2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107XG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItbGlzdFxuICBwdWJsaWMgY3VzdG9tZXJMaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVySXRlbT4oKTtcbiAgcHVibGljIGNsaWNrSXRlbTogQ3VzdG9tZXJJdGVtO1xuICBwdWJsaWMgY3VzdG9tZXJMaXN0UGFnZUluZm8gPSBuZXcgUGFnZUluZm8oKTtcbiAgcHVibGljIGZpbHRlckNyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcbiAgcHVibGljIGZpbHRlclR5cGUgPSAnJztcblxuICBwdWJsaWMgb3B0aW9uTWFwOiBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4oKTtcbiAgcHVibGljIHRyYW5zbGF0ZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgcHJpdmF0ZSBkYXlUeXBlc0xpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ0Nyb3NzX0RheScsICdBbGxfRGF5J107XG4gIHByaXZhdGUgbm9TY2hlZHVsZTogc3RyaW5nID0gJ05vX1NjaGVkdWxlJztcblxuICBwdWJsaWMgYWN0aXZpdHlUeXBlTGlzdDogQXJyYXk8UHJvZmlsZUNvZGU+ID0gW107IC8vIERC5Lit5omA5pyJYWN0aXZpdHlUeXBlXG4gIHB1YmxpYyBhbGVydFR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTtcblxuXG4gIC8vaW50ZXJncmF0aW9uIGN1c3RvbWVyLWltcG9ydFxuICBwdWJsaWMgaW1wb3J0Q29udHJhY3RNYXAgPSBuZXcgTWFwPHN0cmluZywgQ3VzdG9tZXJJbXBvcnRHcm91cD4oKTtcbiAgcHVibGljIG1vYmlsZVJlc3VsdFNpemU6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBpbXBvcnREYXRhOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpbXBvcnRDb250YWN0TGlzdDogQXJyYXk8Q29udGFjdEl0ZW0+ID0gW107XG5cbiAgLy9maWx0ZXIgY3VzdG9tZXIgYXR0cmlidXRlXG4gIHB1YmxpYyBpc0xvYWRDcml0ZXJpYTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDbGVhckNyaXRlcmlhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9pbXBvcnQgcmVzdWx0KHN1Y2Nlc3MgfCBmYWlsKTtcbiAgcHVibGljIF9vbkltcG9ydFJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItZWRpdCB1c2VkXG4gIC8vYWRkL2VkaXQgY29udGFjdCBub3RlIGF0dHJpYnV0ZVxuICBwcml2YXRlIG5vdGVFZGl0Q2xpZW50SUQ6IHN0cmluZztcbiAgcHVibGljIG5vdGVDdXJyZW50VGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7Ly9hZGQvZWRpdCBOb3RlIGN1cnJlbnQgdGltZVxuICBwdWJsaWMgbm90ZU1lc3NhZ2U6IHN0cmluZyA9ICcnOy8vYWRkL2VkaXQgTm90ZSBNZXNzYWdlXG4gIHByaXZhdGUgbm90ZUNsaWVudElEOiBzdHJpbmcgPSAnJzsvL2VkaXQvZGVsZXRlIG5vdGVDbGllbnRJRFxuICBwdWJsaWMgaXNSZWZyZXNoQ29udGFjdExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRDb250YWN0TGlzdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICAvLyBzZWFyY2ggYW5pbWF0ZSBpbiBmaWx0ZXJcbiAgcHVibGljIGNsYXNzQmFyTW92ZTogc3RyaW5nID0gJyc7XG5cbiAgLy9saXN0ZW5lciByb3V0ZSBiYWNrIGV2ZW50XG4gIHByaXZhdGUgX3JlbG9hZERhdGEgPSBmYWxzZTtcblxuICAvL2ludGVyZ3JhdGlvbiBjdXN0b21lci1kZXRhaWwgdXNlZFxuICBwdWJsaWMgY3VzdG9tZXJEZXRhaWw6IEN1c3RvbWVyRGV0YWlsID0gbmV3IEN1c3RvbWVyRGV0YWlsKCk7XG5cbiAgLy9jdXJyZW50IGVkaXQgY3VzdG9tZXIgSWRcbiAgcHJpdmF0ZSBjdXJyZW50Q3VzdG9tZXI6IEN1c3RvbWVyRGV0YWlsID0gbnVsbDtcblxuICAvLyBjdXJyZW50IGN1c3RvbWVyIHN0YXRlXG4gIHByaXZhdGUgY3VzdG9tZXJTdGF0ZTogQ1VTVE9NRVJfU1RBVEUgPSBDVVNUT01FUl9TVEFURS5GSVJTVDtcblxuICAvL3ByZSBzYXZlZCBjcml0ZXJpYVxuICBwcml2YXRlIHByZV9jcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG5cbiAgLy9wcmUgc2F2ZWQgY3VzdG9tZXJsaXN0XG4gIHByaXZhdGUgcHJlX2N1c3RvbWVyTGlzdDogQXJyYXk8Q3VzdG9tZXJJdGVtPjtcblxuICAvL3N1YnNjcmliZSBvZiBzdG9yZVxuICBwcml2YXRlIGNyaXRlcmlhQ2hhbmdlcztcbiAgcHJpdmF0ZSBjdXN0b21lckRldGFpbENoYW5nZXM7XG4gIHByaXZhdGUgc3RhdGVDaGFuZ2VzO1xuICBwcml2YXRlIGN1c3RvbWVyTGlzdENoYW5nZXM7XG5cbiAgLy9zdWJqZWN0IG9mIGNsZWFyICYgc2F2ZSBmaWx0ZXJcbiAgcHVibGljIGNsZWFyU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBzYXZlRmlsdGVyU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG5cblxuICAvL2ZvciBleHRlbnNpb24gdXNlZFxuICBASW5wdXQoKSBkZXRhaWxQcmVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgZGV0YWlsUG9zdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAT3V0cHV0KCkgZGV0YWlsTW9kZWw6IEV2ZW50RW1pdHRlcjxDdXN0b21lckRldGFpbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSxcbiAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGRldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRlVXRpbHM6IERhdGVVdGlscyxcbiAgICBwcml2YXRlIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXh0ZW5zaW9uU2VydmljZTogRXh0ZW5zaW9uU2VydmljZSxcbiAgICBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHMsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzdG9yZUN1c3RvbWVyVG9rZW4pIHByaXZhdGUgY3VzdG9tZXJTdG9yZTogc3RvcmVDdXN0b21lcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHN5bmNDdXN0b21lclRva2VuKSBwcml2YXRlIGN1c3RvbWVyU3luYzogc3luY0N1c3RvbWVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tZXJBY3Rpb25Ub2tlbikgcHJpdmF0ZSBjdXN0b21lckFjdGlvbjogY3VzdG9tZXJBY3Rpb24sXG5cblxuICApIHtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJTdG9yZSkge1xuICAgICAgdGhpcy5jcml0ZXJpYUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWxDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jdXN0b21lckxpc3RDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2aXR5VHlwZUxpc3QgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0NhbGVuZGFyX1R5cGUnKTtcbiAgICB0aGlzLmFsZXJ0VHlwZUxpc3QgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5nZXRDb2RlQXJyYXkoJ0NhbGVuZGFyX1JlbWluZFRpbWUnKTtcbiAgICB0aGlzLm9wdGlvbk1hcC5zZXQoJ0NhbGVuZGFyX1R5cGUnLCB0aGlzLmFjdGl2aXR5VHlwZUxpc3QpO1xuICAgIHRoaXMub3B0aW9uTWFwLnNldCgnQ2FsZW5kYXJfUmVtaW5kVGltZScsIHRoaXMuYWxlcnRUeXBlTGlzdCk7XG5cbiAgICB0aGlzLmRheVR5cGVzTGlzdC5mb3JFYWNoKChkYXlUeXBlKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQoZGF5VHlwZSwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZShkYXlUeXBlKSlcbiAgICB9KTtcbiAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQodGhpcy5ub1NjaGVkdWxlLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHRoaXMubm9TY2hlZHVsZSkpO1xuXG5cblxuICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgIHRoaXMuY3JpdGVyaWFDaGFuZ2VzID0gdGhpcy5jdXN0b21lclN0b3JlLmdldENyaXRlcmlhKCkuc3Vic2NyaWJlKChjcml0ZXJpYSkgPT4ge1xuICAgICAgICB0aGlzLnByZV9jcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgICAgfSlcblxuICAgICAgdGhpcy5jdXN0b21lckRldGFpbENoYW5nZXMgPSB0aGlzLmN1c3RvbWVyU3RvcmUuZ2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKCkuc3Vic2NyaWJlKGRldGFpbCA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudEN1c3RvbWVyID0gZGV0YWlsO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VzdG9tZXJMaXN0Q2hhbmdlcyA9IHRoaXMuY3VzdG9tZXJTdG9yZS5nZXRDdXN0b21lckxpc3QoKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMucHJlX2N1c3RvbWVyTGlzdCA9IGxpc3Q7XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcyA9IHRoaXMuY3VzdG9tZXJTdG9yZS5nZXRTdGF0ZSgpLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1haW4gc3RhdGU6IFwiLCBzdGF0ZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW9udEN1c3RvbWVyOiBcIiwgdGhpcy5jdXJyZW50Q3VzdG9tZXIpO1xuICAgICAgICBpZiAoc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRURJVF9TQVZFRCAmJiB0aGlzLmN1c3RvbWVyU3RhdGUgIT0gQ1VTVE9NRVJfU1RBVEUuRURJVF9TQVZFRCkge1xuXG4gICAgICAgICAgLy9hZnRlciBzYXZlZCwgY2hlY2sgaWYgY3VycmVudCBJRCBpbiBjcml0ZXJpYVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRURJVF9TQVZFRFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRDdXN0b21lcjogXCIsIHRoaXMuY3VycmVudEN1c3RvbWVyKTtcbiAgICAgICAgICB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QgPSB0aGlzLnByZV9jdXN0b21lckxpc3Q7XG4gICAgICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMucHJlX2NyaXRlcmlhO1xuICAgICAgICAgIGlmICh0aGlzLnByZV9jcml0ZXJpYS5oYXNDcml0ZXJpYSgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5jaGVja0luRmlsdGVyQ3JpdGVyaWEodGhpcy5jdXJyZW50Q3VzdG9tZXIuY2xpZW50SUQsIHRoaXMucHJlX2NyaXRlcmlhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xpZW50SUQgPT0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuY2xpZW50SUQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0hpZ2hMaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QgPSBbLi4udGhpcy5jdXN0b21lckxpc3RdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGllbnRJRCA9PSB0aGlzLmN1cnJlbnRDdXN0b21lci5jbGllbnRJRCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdjaGFuZ2UgaXNIaWdoTGlnaHQgc3RhdHVzJyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNIaWdoTGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsaWVudElEID09IHRoaXMuY3VycmVudEN1c3RvbWVyLmNsaWVudElEKSB7XG4gICAgICAgICAgICAgICAgICBpdGVtLmZpcnN0TmFtZSA9IHRoaXMuY3VycmVudEN1c3RvbWVyLmZpcnN0TmFtZTtcbiAgICAgICAgICAgICAgICAgIGl0ZW0ubGFzdE5hbWUgPSB0aGlzLmN1cnJlbnRDdXN0b21lci5sYXN0TmFtZTtcbiAgICAgICAgICAgICAgICAgIGl0ZW0udGFnID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIucG9zc2liaWxpdHk7XG4gICAgICAgICAgICAgICAgICBpdGVtLmNvbXBsZW1lbnRQZXJjZW50ID0gdGhpcy5jdXN0b21lclV0aWxzLmNvdW50Q29tcGxldGVuZXNzQnlQcm9maWxlKHRoaXMuY3VycmVudEN1c3RvbWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdCA9IFsuLi50aGlzLmN1c3RvbWVyTGlzdF07XG5cbiAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldEN1c3RvbWVyTGlzdCh0aGlzLmN1c3RvbWVyTGlzdCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGllbnRJRCA9PSB0aGlzLmN1cnJlbnRDdXN0b21lci5jbGllbnRJRCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZmlyc3ROYW1lID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuZmlyc3ROYW1lO1xuICAgICAgICAgICAgICAgIGl0ZW0ubGFzdE5hbWUgPSB0aGlzLmN1cnJlbnRDdXN0b21lci5sYXN0TmFtZTtcbiAgICAgICAgICAgICAgICBpdGVtLnRhZyA9IHRoaXMuY3VycmVudEN1c3RvbWVyLnBvc3NpYmlsaXR5O1xuICAgICAgICAgICAgICAgIGl0ZW0uY29tcGxlbWVudFBlcmNlbnQgPSB0aGlzLmN1c3RvbWVyVXRpbHMuY291bnRDb21wbGV0ZW5lc3NCeVByb2ZpbGUodGhpcy5jdXJyZW50Q3VzdG9tZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gWy4uLnRoaXMuY3VzdG9tZXJMaXN0XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEKHRoaXMuY3VycmVudEN1c3RvbWVyLmNsaWVudElEKTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG4gICAgICAgICAgLy8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRURJVCAmJiB0aGlzLmN1c3RvbWVyU3RhdGUgIT0gQ1VTVE9NRVJfU1RBVEUuRURJVCAmJiB0aGlzLmN1c3RvbWVyU3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRklSU1QpIHtcbiAgICAgICAgICAvLyBlZGl0L2NsaWNrIHBhZ2UgY2xpY2sgbGFzdCBwYWdlXG5cbiAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdCA9IHRoaXMucHJlX2N1c3RvbWVyTGlzdDtcbiAgICAgICAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcmVfY3JpdGVyaWE7XG4gICAgICAgICAgLy90aGlzLm9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEKHRoaXMuY3VycmVudEN1c3RvbWVyLmNsaWVudElEKTtcbiAgICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmN1cnJlbnRDdXN0b21lci5jbGllbnRJRCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0aGlzLmN1cnJlbnRDdXN0b21lci5jbGllbnRJRCk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VzdG9tZXJTdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5GSVJTVCAmJiBzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5ESVNQTEFZKSB7XG4gICAgICAgICAgLy9maXJ0IGluLCBmZXRjaCBwcmVzZXQgZmlsdGVyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmN1c3RvbWVyU3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRklSU1QgJiYgc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRElTUExBWVwiKTtcbiAgICAgICAgICB0aGlzLmxvYWRQcmVzZXRDcml0ZXJpYSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5BRERfU0FWRUQpIHtcblxuICAgICAgICAgIC8vYWZ0ZXIgYWRkICwgZ2V0IHByZV9jcml0ZXJpYSAmJiByZWZyZXNoIGN1c3RvbWVybGlzdFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuQUREX1NBVkVEXCIpO1xuICAgICAgICAgIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcmVfY3JpdGVyaWE7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1c3RvbWVyU3RhdGUgPSBzdGF0ZTtcbiAgICAgIH0pXG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmUuc2V0U3RhdGUoQ1VTVE9NRVJfU1RBVEUuRElTUExBWSk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG5cblxuXG4gICAgLy9jaGVjayBpcyBmaXJzdCB0aW1lIG9wZW4gdGhpcyBmdW5jdGlvblxuICAgIGlmICh0aGlzLmN1c3RvbWVyU2VydmljZS5pc0ZpcnN0VGltZSgpKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lciBpcyBmaXJzdCB0aW1lJyk7XG5cbiAgICAgIC8vY2hlY2sgY3VzdG9tZXIgZGF0YSBvdmVyIDZtb250aFxuXG4gICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRPdmVyVGltZUN1c3RvbWVyTGlzdChcIlwiKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuYWxlcnRPdmVyVGltZUxpc3QgPSBkYXRhO1xuICAgICAgICBpZiAodGhpcy5hbGVydE92ZXJUaW1lTGlzdC5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UudXBkYXRlTWVzc2FnZVRvUmVhZCgnT3ZlclRpbWUnLCAnQ3VzdG9tZXInKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcGxheVVwZGF0ZVJlbWluZCA9IHRydWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuXG5cbiAgICAgIC8vY2hlY2sgY3VzdG9tZXIgZGF0YSBvdmVyIDZtb250aCAmIDdkYXlcbiAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEF1dG9EZWxldGVDdXN0b21lckxpc3QoXCJcIikuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyQXV0b0RlbGV0ZTogXCIsIGRhdGEpO1xuICAgICAgICB0aGlzLmFsZXJ0QXV0b0RlbGV0ZUN1c3RvbWVyID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuYWxlcnRBdXRvRGVsZXRlQ3VzdG9tZXIubGVuZ3RoICE9IDApIHtcblxuICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2VUb1JlYWQoJ0F1dG9EZWxldGUnLCAnQ3VzdG9tZXInKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZU1lc3NhZ2VUb1JlYWQ6IFwiLCBkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNwbGF5RGVsZXRlUmVtaW5kID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vY2hlY2sgY3VzdG9tZXIgaW5mbyBhbGVydFxuICAgICAgbGV0IHRpbWVyT2JqID0gdGhpcy5leHRlbnNpb25TZXJ2aWNlLmdldENvbmZpZ1ZhbHVlKCdDdXN0b21lckluZm9BbGVydFRpbWVyJyk7XG4gICAgICBjb25zb2xlLmRlYnVnKCd0aW1lck9iaicsIHRpbWVyT2JqKTtcbiAgICAgIHRoaXMuX2NoZWNrSXNJbmZvQWxlcnRUaW1lKHRpbWVyT2JqKTtcblxuXG5cbiAgICB9XG4gIH1cblxuXG4gIHJlZnJlc2hDdXN0b21lckxpc3QoaXNBcHBlbmQ6IGJvb2xlYW4pIHtcbiAgICBjb25zb2xlLmRlYnVnKCdyZWZyZXNoQ3VzdG9tZXJMaXN0IGFwcGVuZCcsIGlzQXBwZW5kKTtcbiAgICBjb25zb2xlLmRlYnVnKHRoaXMuZmlsdGVyQ3JpdGVyaWEpO1xuICAgIGNvbnNvbGUuZGVidWcodGhpcy5jdXN0b21lckxpc3RQYWdlSW5mbyk7XG5cbiAgICAvL2ZldGNoIGN1c3RvbWVyLWxpc3QgZGF0YVxuICAgIGlmICghaXNBcHBlbmQpIHRoaXMuY3VzdG9tZXJMaXN0UGFnZUluZm8ucmVzZXRQYWdlKCk7XG5cbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckxpc3QodGhpcy5maWx0ZXJDcml0ZXJpYSwgdGhpcy5jdXN0b21lckxpc3RQYWdlSW5mbykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhIGluIGNyaXRlcmlhOiBcIiwgZGF0YSk7XG4gICAgICBpZiAoIWlzQXBwZW5kKSB0aGlzLmN1c3RvbWVyTGlzdCA9IFsuLi5kYXRhXTtcbiAgICAgIGVsc2UgdGhpcy5jdXN0b21lckxpc3QgPSBbLi4udGhpcy5jdXN0b21lckxpc3QsIC4uLmRhdGFdO1xuXG4gICAgICBpZiAoKCF0aGlzLmZpbHRlckNyaXRlcmlhLmhhc0NyaXRlcmlhKCkpKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVHlwZSA9ICdOT05FJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmZpbHRlclR5cGUgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuZmlsdGVyQ3JpdGVyaWEua2V5d29yZCkgPyAnU0VBUkNIJyA6ICdGSUxURVInO1xuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldEN1c3RvbWVyTGlzdCh0aGlzLmN1c3RvbWVyTGlzdCk7XG4gICAgICB9XG5cblxuICAgICAgaWYgKHRoaXMuY3VzdG9tZXJMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0aGlzLmN1c3RvbWVyTGlzdFswXS5jbGllbnRJRCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXN0b21lckRldGFpbCA9IG5ldyBDdXN0b21lckRldGFpbCgpO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIGludGVncmF0aW9uIGNvbnRhY3QtbGlzdCAqL1xuICByZWZyZXNoQ29udGFjdE5vdGUoaXNBcHBlbmQ6IGJvb2xlYW4pIHtcblxuXG4gICAgLy9pZiBhcHBlbmQgZGF0YSB3aWxsIG5leHQgcGFnZVxuICAgIGlmICghaXNBcHBlbmQpIHRoaXMuY29udGFjdExpc3RQYWdlSW5mby5yZXNldFBhZ2UoKTtcblxuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyQ29udGFjdE5vdGUodGhpcy5jdXN0b21lckRldGFpbC5jbGllbnRJRCwgdGhpcy5jb250YWN0TGlzdFBhZ2VJbmZvKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBpZiAoaXNBcHBlbmQpIHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdCA9IHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdC5jb25jYXQoZGF0YSk7XG4gICAgICBlbHNlIHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdCA9IGRhdGE7XG5cbiAgICAgIGNvbnNvbGUuZGVidWcoJ3JlZnJlc2hDb250YWN0Tm90ZSBzdWNjZXNzIGlzUmVmcmVzaENvbnRhY3RMaXN0IHN0YXR1cycpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uR2V0Q3VzdG9tZXJDb250YWN0TGlzdEJ5SUQoY2xpZW50SUQpIHtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckNvbnRhY3ROb3RlKGNsaWVudElELCB0aGlzLmNvbnRhY3RMaXN0UGFnZUluZm8pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdCA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBfY2hlY2tJc0luZm9BbGVydFRpbWUodGltZXJPYmopIHtcbiAgICBsZXQgaW5mb0FsZXJ0RGF0ZVJhbmdlOiBBcnJheTxPYmplY3Q+ID0gdGltZXJPYmouRGF0ZVJhbmdlO1xuICAgIGxldCBpbmZvQWxlcnRUaW1lUmFuZ2U6IE9iamVjdCA9IHRpbWVyT2JqLlRpbWVSYW5nZTtcblxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnNvbGUuZGVidWcoJ25vdycsIG5vdyk7XG4gICAgY29uc29sZS5kZWJ1Zygnbm93IG1vbnRoJywgbm93LmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb25zb2xlLmRlYnVnKCdub3cgZGF0ZScsIG5vdy5nZXREYXRlKCkpO1xuICAgIGNvbnNvbGUuZGVidWcoJ25vdyBob3VycycsIG5vdy5nZXRIb3VycygpKTtcbiAgICBpbmZvQWxlcnREYXRlUmFuZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGxldCBtb250aCA9IGVsZW1lbnRbJ21vbnRoJ107XG4gICAgICBsZXQgZGF0ZSA9IGVsZW1lbnRbJ2RhdGUnXTtcblxuICAgICAgaWYgKChub3cuZ2V0TW9udGgoKSArIDEgPT0gTnVtYmVyLnBhcnNlSW50KG1vbnRoKSkgJiYgbm93LmdldERhdGUoKSA9PSBOdW1iZXIucGFyc2VJbnQoZGF0ZSkpIHtcbiAgICAgICAgaWYgKG5vdy5nZXRIb3VycygpID49IE51bWJlci5wYXJzZUludChpbmZvQWxlcnRUaW1lUmFuZ2VbJ3N0YXJ0J10pXG4gICAgICAgICAgJiYgbm93LmdldEhvdXJzKCkgPD0gTnVtYmVyLnBhcnNlSW50KGluZm9BbGVydFRpbWVSYW5nZVsnZW5kJ10pKSB7XG4gICAgICAgICAgdGhpcy5pc0Rpc3BsYXlJbmZvQWxlcnRQb3B1cCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuXG4gIH1cblxuICBvbkdldEN1c3RvbWVyRGV0YWlsQnlJRChjbGllbnRJRCkge1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyRGV0YWlsKGNsaWVudElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmN1c3RvbWVyRGV0YWlsID0gZGF0YTtcbiAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmNvbnZlcnRDdXN0b21lckRldGFpbERpc3BsYXlNb2RlKHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuXG4gICAgfSk7XG5cblxuICB9XG5cbiAgdG9nZ2xlU2VhcmNoKCkge1xuICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIHRoaXMuY2xhc3NTZWFyY2ggPSB0aGlzLmlzT3BlbiA/ICcgYWN0aXZlJyA6ICcnXG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgLy8gdGhpcy5maWx0ZXJDcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG4gICAgICB0aGlzLmZpbHRlckNyaXRlcmlhLmtleXdvcmQgPSAnJztcbiAgICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldENyaXRlcmlhKHRoaXMuZmlsdGVyQ3JpdGVyaWEpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNlYXJjaCBrZXlwcmVzc1xuICBzZWFyY2hDdXN0b21lck5hbWUobmFtZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ3NlYXJjaEN1c3RvbWVyTmFtZScsIG5hbWUpO1xuXG4gICAgLy8gdGhpcy5maWx0ZXJDcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG4gICAgdGhpcy5maWx0ZXJDcml0ZXJpYS5rZXl3b3JkID0gbmFtZTtcbiAgICBpZiAodGhpcy5jdXN0b21lclN0b3JlKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmUuc2V0Q3JpdGVyaWEodGhpcy5maWx0ZXJDcml0ZXJpYSk7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG5cbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBpdGVtLm5hbWU7XG4gIH1cblxuXG4gIC8vd2hlbiBjdXN0b21lci1saXN0IGNsaWNrIGdldCBjbGljayBJdGVtXG4gIG9uQ2hhbmdlQ3VzdG9tZXIoY3VzdG9tZXJJdGVtOiBDdXN0b21lckl0ZW0pIHtcblxuICAgIHRoaXMuY2xpY2tJdGVtID0gY3VzdG9tZXJJdGVtO1xuXG5cblxuICAgIC8vZ2V0IEN1c3RvbWVyRGV0YWlsXG4gICAgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRChjdXN0b21lckl0ZW0uY2xpZW50SUQpO1xuXG4gICAgLy9nZXQgQ3VzdG9tZXJOb3RlXG4gICAgdGhpcy5vbkdldEN1c3RvbWVyQ29udGFjdExpc3RCeUlEKGN1c3RvbWVySXRlbS5jbGllbnRJRCk7XG4gICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xuXG4gIH1cblxuICAvL3doZW4gY3VzdG9tZXItbGlzdCBmZXRjaCBuZXh0IHJlY29yZFxuICBvbkN1c3RvbWVyTG9hZCgpIHtcbiAgICB0aGlzLmN1c3RvbWVyTGlzdFBhZ2VJbmZvLm5leHRQYWdlKCk7XG5cbiAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QodHJ1ZSk7XG4gIH1cblxuICAvL3doZW4gY3VzdG9tZXItbGlzdCBzeW5jIGRhdGEgdG8gYmFja2VuZFxuICBvbkN1c3RvbWVyUmVmcmVzaCgpIHtcbiAgICAvL3N5bmMgJiByZWxvYWQgbGlzdFxuICAgIHRoaXMuY3VzdG9tZXJTeW5jLnN5bmMoKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZUN1c3RvbWVyKGN1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZykge1xuICAgIHRoaXMuaXNEaXNwbGF5RGVsQ3VzdG9tZXJQb3B1cCA9IHRydWU7XG4gIH1cblxuICBkb0RlbGV0ZUN1c3RvbWVyKCkge1xuXG4gICAgdGhpcy5jdXN0b21lckxpc3QgPSB0aGlzLmN1c3RvbWVyTGlzdC5maWx0ZXIoeCA9PiB4LmNsaWVudElEICE9IHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQpO1xuICAgIHRoaXMub25HZXRDdXN0b21lckRldGFpbEJ5SUQodGhpcy5jdXN0b21lckxpc3RbMF0uY2xpZW50SUQpO1xuXG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZGVsZXRlQ3VzdG9tZXJQcm9maWxlKHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lclNlcnZpY2UuZG9EZWxldGVDdXN0b21lcigpXCIsIGRhdGEpO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcblxuICAgICAgICBpZiAodGhpcy5jdXN0b21lclN0b3JlKSB7XG4gICAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldEN1c3RvbWVyTGlzdCh0aGlzLmN1c3RvbWVyTGlzdCk7XG4gICAgICAgIH1cblxuXG5cblxuICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGlzcGxheURlbGV0ZVBvcHVwID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRBcHBvaW50bWVudChjdXN0b21lckNsaWVudElEOiBzdHJpbmcpIHtcbiAgICBsZXQgY3VycmVudFRpbWU7IC8vIGFkanVzdCB0aW1lIHRvIG5leHQgaW50ZXJ2YWxcbiAgICBjdXJyZW50VGltZSA9IG5ldyBEYXRlKGdldFllYXIodGhpcy52aWV3RGF0ZSksIGdldE1vbnRoKHRoaXMudmlld0RhdGUpLCBnZXREYXRlKHRoaXMudmlld0RhdGUpLCBnZXRIb3VycyhuZXcgRGF0ZSgpKSwgZ2V0TWludXRlcyhuZXcgRGF0ZSgpKSk7XG4gICAgY3VycmVudFRpbWUgPSBhZGRNaW51dGVzKGN1cnJlbnRUaW1lLCAoNSAtIGdldE1pbnV0ZXMoY3VycmVudFRpbWUpICUgNSkpOyAgLy8gYWRqdXN0IG1pbnV0ZXMgdG8gbmV4dCA1IG1pbnV0ZXNcbiAgICBjdXJyZW50VGltZSA9IGFkZEhvdXJzKGN1cnJlbnRUaW1lLCAxKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBuZXcgQ2FsZW5kYXJFdmVudERldGFpbCgnJywgJycsICcnLCAnJywgbnVsbCwgJ04nLCBjdXJyZW50VGltZSwgYWRkSG91cnMoY3VycmVudFRpbWUsIDEpLCAnWScsICc4JywgbnVsbCwgJycsICcnLCBudWxsKTtcbiAgICBsZXQgcXVlcnlEYXRlID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLnZpZXdEYXRlKSwgZ2V0TW9udGgodGhpcy52aWV3RGF0ZSksIGdldERhdGUodGhpcy52aWV3RGF0ZSksIDAsIDAsIDApO1xuICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldENhbGVuZGFyRXZlbnRMaXN0KHF1ZXJ5RGF0ZSwgc3ViTWludXRlcyhhZGREYXlzKHRoaXMudmlld0RhdGUsIDEpLCAxKSwgJycpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMudmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgICB0aGlzLm9uVG9nZ2xlQXBwb2ludG1lbnRNb2RhbCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2tBcHBvaW50bWVudFNhdmUoKSB7XG4gICAgdGhpcy5pc1NhdmVDbGljayA9IHRydWU7XG4gIH1cblxuICBvblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwodmFsKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJYXCIpO1xuICAgIHRoaXMuaXNFeHBhbmRFZGl0ID0gdmFsO1xuICB9XG5cbiAgb25TYXZlQ2FsZW5kYXJFdmVudChjYWxlbmRhckV2ZW50RGV0YWlsOiBDYWxlbmRhckV2ZW50RGV0YWlsKSB7XG4gICAgLy9hbGVydChjYWxlbmRhckV2ZW50RGV0YWlsKTtcbiAgICB0aGlzLmlzU2F2ZUNsaWNrID0gZmFsc2U7XG4gICAgaWYgKGNhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmFkZENhbGVuZGFyRXZlbnQoY2FsZW5kYXJFdmVudERldGFpbCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcbiAgICAgICAgICBjYWxlbmRhckV2ZW50RGV0YWlsLmNsaWVudElEID0gZGF0YS5jbGllbnRJRDtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwgPSBjYWxlbmRhckV2ZW50RGV0YWlsO1xuXG4gICAgICAgICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgYWRkQ3VzdG9tZXIoKSB7XG5cbiAgICB0aGlzLmlzRGlzcGxheUNvbmZpcm1BbGVydFBvcHVwID0gZmFsc2U7XG4gICAgLy8gdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgbGV0IGRldGFpbCA9IG5ldyBDdXN0b21lckRldGFpbCgpO1xuICAgIGlmICh0aGlzLmN1c3RvbWVyU3RvcmUpIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwoZGV0YWlsKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRTdGF0ZShDVVNUT01FUl9TVEFURS5FRElUKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJBY3Rpb24pIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJBY3Rpb24uYWZ0ZXJDdXN0b21lckVkaXQoZGV0YWlsKTtcbiAgICB9XG4gIH1cblxuICBlZGl0Q3VzdG9tZXIoY3VzdG9tZXJDbGllbnRJRDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJTdG9yZSkge1xuICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldFN0YXRlKENVU1RPTUVSX1NUQVRFLkVESVQpO1xuICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJEZXRhaWwoY3VzdG9tZXJDbGllbnRJRCkuc3Vic2NyaWJlKChkZXRhaWw6IEN1c3RvbWVyRGV0YWlsKSA9PiB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZS5zZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwoZGV0YWlsKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tZXJBY3Rpb24pXG4gICAgICAgICAgdGhpcy5jdXN0b21lckFjdGlvbi5hZnRlckN1c3RvbWVyRWRpdChkZXRhaWwpO1xuICAgICAgfSlcblxuXG4gICAgfVxuXG5cbiAgfVxuXG4gIGRldGFpbENoYW5nZShjdXN0b21lckRldGFpbDogQ3VzdG9tZXJEZXRhaWwpIHtcbiAgICBjb25zb2xlLmxvZygnZGV0YWlsQ2hhbmdlJywgY3VzdG9tZXJEZXRhaWwpO1xuICAgIHRoaXMuZGV0YWlsTW9kZWwuZW1pdChjdXN0b21lckRldGFpbCk7XG5cbiAgfVxuXG4gIGZvbGxvd0NoYW5nZShvYmopIHtcbiAgICB0aGlzLmN1c3RvbWVyU2VydmljZS51cGRhdGVDdXN0b21lckZvbGxvd1N0YXR1cyhvYmouY2xpZW50SUQsIG9iai5pc0ZvbGxvdykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAvL3RoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY3VzdG9tZXJMaXN0KSk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJDcml0ZXJpYSkge1xuICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5jaGVja0luRmlsdGVyQ3JpdGVyaWEob2JqLmNsaWVudElELCB0aGlzLmZpbHRlckNyaXRlcmlhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jbGllbnRJRCA9PSBvYmouY2xpZW50SUQpIHtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKCdjaGFuZ2UgaXNIaWdoTGlnaHQgc3RhdHVzIGluIGZvbGxvdycpO1xuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pc0hpZ2hMaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNIaWdoTGlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VzdG9tZXJMaXN0LmZpbHRlcih4ID0+IHguY2xpZW50SUQgPT0gb2JqLmNsaWVudElEKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICB2YWx1ZS5pc0ZvbGxvdyA9IG9iai5pc0ZvbGxvdztcbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAvL3RoaXMuZm9sbG93Q2hhbmdlQ2xpZW50SUQgPSBvYmouY2xpZW50SUQ7XG5cbiAgfVxuXG4gIGFkZE5vdGUoKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnYWRkTm90ZScpO1xuICAgIHRoaXMubm90ZUN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLm5vdGVNZXNzYWdlID0gJyc7XG4gICAgdGhpcy5pc1BvcHVwRWRpdE5vdGUgPSB0cnVlO1xuICB9XG5cbiAgZWRpdE5vdGUobm90ZTogQ3VzdG9tZXJDb250YWN0Tm90ZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2VkaXROb3RlJywgbm90ZSk7XG5cbiAgICB0aGlzLm5vdGVFZGl0Q2xpZW50SUQgPSBub3RlLmdldENsaWVudElEKCk7XG4gICAgdGhpcy5ub3RlQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMubm90ZU1lc3NhZ2UgPSBub3RlLm5vdGVNZXNzYWdlO1xuICAgIHRoaXMuaXNQb3B1cEVkaXROb3RlID0gdHJ1ZTtcblxuICB9XG5cbiAgZGlzcGxheU5vdGUobm90ZTogQ3VzdG9tZXJDb250YWN0Tm90ZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2Rpc3BsYXlOb3RlJywgbm90ZSk7XG4gICAgdGhpcy5jdXN0b21lckNvbnRhY3REZXRhaWwgPSBub3RlO1xuXG4gICAgLy8gYWRkIGNsaWNrIGN1c3RvbWVyIG5hbWVcbiAgICB0aGlzLmN1c3RvbWVyQ29udGFjdERldGFpbC5uYW1lID0gdGhpcy5jdXN0b21lckRldGFpbC5sYXN0TmFtZSArIHRoaXMuY3VzdG9tZXJEZXRhaWwuZmlyc3ROYW1lO1xuXG4gICAgdGhpcy5pc1BvcHVwTm90ZURldGFpbCA9IHRydWU7XG4gIH1cblxuXG4gIGRlbGV0ZU5vdGUobm90ZTogQ3VzdG9tZXJDb250YWN0Tm90ZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2RlbGV0ZU5vdGUnLCBub3RlKTtcbiAgICB0aGlzLm5vdGVDbGllbnRJRCA9IG5vdGUuZ2V0Q2xpZW50SUQoKTtcblxuICAgIHRoaXMuaXNQb3B1cERlbGV0ZU5vdGUgPSB0cnVlO1xuICB9XG5cbiAgZG9EZWxldGVDb250YWN0KCkge1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmRlbGV0ZUN1c3RvbWVyQ29udGFjdCh0aGlzLm5vdGVDbGllbnRJRCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXG4gICAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyU2VydmljZS5kZWxldGVOb3RlKClcIiwgZGF0YSk7XG5cbiAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QgPSB0aGlzLmN1c3RvbWVyQ29udGFjdExpc3QuZmlsdGVyKHggPT4geC5nZXRDbGllbnRJRCgpICE9IHRoaXMubm90ZUNsaWVudElEKTtcbiAgICAgICAgdGhpcy5ub3RlQ2xpZW50SUQgPSAnJztcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXlEZWxldGVQb3B1cCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblNhdmVOb3RlKGV2ZW50KSB7XG5cbiAgICAvKiB0aGUgc2FtZSBzYXZlIGJ0biBmb3IgZWRpdC9hZGQgLGV2ZW50IGFsc28gdGhlIHNhbWUgZXZlbnQsIGhvdyB0byBkaXN0aW5ndWlzaCovXG4gICAgLy9hbGVydChKU09OLnN0cmluZ2lmeSh0aGlzLm5vdGVNZXNzYWdlKSk7XG5cbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLm5vdGVNZXNzYWdlKSkge1xuICAgICAgYWxlcnQoJ01lc3NhZ2UgaXMgcmVxdWlyZWQhIScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmFkZEN1c3RvbWVyQ29udGFjdCh0aGlzLm5vdGVFZGl0Q2xpZW50SUQsIHRoaXMuY3VzdG9tZXJEZXRhaWwuY2xpZW50SUQsIHRoaXMubm90ZU1lc3NhZ2UsIHRoaXMubm90ZUN1cnJlbnRUaW1lKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lclNlcnZpY2Uuc2F2ZU5vdGUoKVwiLCBkYXRhKTtcblxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdzYXZlTm90ZSBzdWNjZXNzICwgY2xvc2UgcG9wdXAgJiByZWZyZXNoIGxpc3QnLCB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCwgJ2lzUmVmcmVzaENvbnRhY3RMaXN0JywgdGhpcy5pc1JlZnJlc2hDb250YWN0TGlzdCk7XG5cbiAgICAgICAgICAvLyBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMubm90ZUVkaXRDbGllbnRJRCkpIHtcblxuICAgICAgICAgIC8vICAgbGV0IGFycmF5ID0gdGhpcy5jdXN0b21lckNvbnRhY3RMaXN0LmZpbHRlcih4ID0+IHguZ2V0Q2xpZW50SUQoKSA9PSB0aGlzLm5vdGVFZGl0Q2xpZW50SUQpLmZvckVhY2goKHZhbHVlKSA9PntcbiAgICAgICAgICAvLyAgICAgdmFsdWUubm90ZU1lc3NhZ2UgPSB0aGlzLm5vdGVNZXNzYWdlO1xuICAgICAgICAgIC8vICAgfSk7XG5cbiAgICAgICAgICAvLyAgIGFsZXJ0KGFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgIC8vICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgICAgICAgIC8vIH1cblxuXG4gICAgICAgICAgdGhpcy5ub3RlRWRpdENsaWVudElEID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cEVkaXROb3RlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRhY3ROb3RlKGZhbHNlKTtcblxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5kZWJ1Zygnc2F2ZU5vdGUnLCBldmVudCk7XG4gICAgLy9jb25zb2xlLmRlYnVnKCdjbGlja0NsaWVudElEJywgdGhpcy5ub3RlRWRpdENsaWVudElELCB0aGlzLm5vdGVFZGl0Q2xpZW50SUQsICdub3RlQ3VycmVudFRpbWUnLCB0aGlzLm5vdGVDdXJyZW50VGltZSwgJ25vdGVNZXNzYWdlJywgdGhpcy5ub3RlTWVzc2FnZSk7XG4gICAgLy9hbGVydChKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICAgIC8vIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMubm90ZU1lc3NhZ2UpKSB7XG4gICAgLy8gICBhbGVydCgnTWVzc2FnZSBpcyByZXF1aXJlZCEhJyk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgdGhpcy5jdXN0b21lclNlcnZpY2UuYWRkQ3VzdG9tZXJDb250YWN0KHRoaXMubm90ZUVkaXRDbGllbnRJRCwgdGhpcy5jdXN0b21lckRldGFpbC5jbGllbnRJRCwgdGhpcy5ub3RlTWVzc2FnZSwgdGhpcy5ub3RlQ3VycmVudFRpbWUpLnN1YnNjcmliZShkYXRhID0+IHtcblxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyU2VydmljZS5zYXZlTm90ZSgpXCIsIGRhdGEpO1xuXG4gICAgLy8gICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgIC8vICAgICAgIGNvbnNvbGUuZGVidWcoJ3NhdmVOb3RlIHN1Y2Nlc3MgLCBjbG9zZSBwb3B1cCAmIHJlZnJlc2ggbGlzdCcsIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwLCAnaXNSZWZyZXNoQ29udGFjdExpc3QnLCB0aGlzLmlzUmVmcmVzaENvbnRhY3RMaXN0KTtcbiAgICAvLyAgICAgICB0aGlzLm5vdGVFZGl0Q2xpZW50SUQgPSB1bmRlZmluZWQ7XG4gICAgLy8gICAgICAgdGhpcy5pc1BvcHVwRWRpdE5vdGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCA9IHRydWU7XG4gICAgLy8gICAgICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgfVxuXG4gIHNob3dDb25maXJtUG9wdXAoYWN0aW9uLCBvcHRpb25BcnJheSkge1xuXG4gICAgdGhpcy5fY29uZmlybUFjdGlvbi5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5fY29uZmlybUFjdGlvbi5vcHRpb24gPSBvcHRpb25BcnJheTtcblxuICAgIHRoaXMuaXNEaXNwbGF5Q29uZmlybUFsZXJ0UG9wdXAgPSB0cnVlO1xuICAgIC8vZGVmYXVsdCBidG4gaXMgZGlzYWJsZVxuICAgIHRoaXMuaXNQb3B1cENvbmZpcm1EaXNhYmxlID0gdHJ1ZTsgLy8gdHJ1ZTtcbiAgfVxuXG4gIGNvbmZpcm1Qb3B1cCgpIHtcblxuICAgIGlmICh0aGlzLl9jb25maXJtQWN0aW9uLmFjdGlvbiA9PSAnYWRkJykge1xuICAgICAgdGhpcy5hZGRDdXN0b21lcigpO1xuICAgIH1cblxuICAgIC8vIDIwMTkvMDMvMjUgSmVmZmVyeSByZW1vdmUgYmVjYXVzZSBlZGl0IG5vdCBzaG93cG9wdXBcbiAgICAvLyBlbHNlIGlmICh0aGlzLl9jb25maXJtQWN0aW9uLmFjdGlvbiA9PSAnZWRpdCcpIHtcbiAgICAvLyAgIHRoaXMuZWRpdEN1c3RvbWVyKHRoaXMuX2NvbmZpcm1BY3Rpb24ub3B0aW9uWzBdKTtcbiAgICAvLyB9XG5cbiAgICBlbHNlIGlmICh0aGlzLl9jb25maXJtQWN0aW9uLmFjdGlvbiA9PSAnaW1wb3J0Jykge1xuICAgICAgdGhpcy5pbXBvcnQoKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzcGxheUNvbmZpcm1BbGVydFBvcHVwID0gZmFsc2U7XG4gIH1cblxuICAvLyBkZXRlY3QgY29uZmlybSBwb3B1cCB0byBjb250ZW50IGJvdHRtIGFuZCB0aGUgYnRuIGNhbiBjbGlja1xuICBkZXRlY3RTY3JvbGwoaXNCdG0pIHtcbiAgICBjb25zb2xlLmxvZygnaW4gZGV0ZWN0IHNjcm9sbD09PScsIGlzQnRtKTtcbiAgICBpZiAoaXNCdG0pIHtcbiAgICAgIHRoaXMuaXNQb3B1cENvbmZpcm1EaXNhYmxlID0gZmFsc2VcbiAgICB9XG4gIH1cblxuXG5cbiAgaW1wb3J0KCkge1xuXG4gICAgdGhpcy5kZXZpY2VTZXJ2aWNlLnNlYXJjaENvbnRhY3RzQnlOYW1lKFwiXCIpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGxldCBpbXBvcnRMaXN0ID0gZGF0YTtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2ltcG9ydCByZXN1bHQgJywgaW1wb3J0TGlzdCk7XG5cbiAgICAgIHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuY2xlYXIoKTtcblxuICAgICAgLy9yZWdyb3VwXG4gICAgICBpbXBvcnRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhlbGVtZW50Lmxhc3RuYW1lKTtcblxuICAgICAgICAvL2lmIG5vIGxhc3RuYW1lLHVzZSBmaXJzdCBuYW1lXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGVsZW1lbnQubGFzdG5hbWUpKSB7XG4gICAgICAgICAgZWxlbWVudC5sYXN0bmFtZSA9IGVsZW1lbnQuZmlyc3RuYW1lO1xuICAgICAgICAgIGVsZW1lbnQuZmlyc3RuYW1lID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmFtZSA9IGVsZW1lbnQubGFzdG5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUgIT0gbnVsbCAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgZmlyc3RXb3JkID0gbmFtZS5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgICAgZmlyc3RXb3JkID0gZmlyc3RXb3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygnZmlyc3RXb3JkID0nICsgZmlyc3RXb3JkKTtcblxuICAgICAgICAgIGxldCBncm91cDogQ3VzdG9tZXJJbXBvcnRHcm91cCA9IHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuZ2V0KGZpcnN0V29yZCk7XG4gICAgICAgICAgaWYgKGdyb3VwID09IHVuZGVmaW5lZCkgZ3JvdXAgPSBuZXcgQ3VzdG9tZXJJbXBvcnRHcm91cChmaXJzdFdvcmQpO1xuXG4gICAgICAgICAgZ3JvdXAuYWRkSXRlbShlbGVtZW50KTtcbiAgICAgICAgICB0aGlzLmltcG9ydENvbnRyYWN0TWFwLnNldChmaXJzdFdvcmQsIGdyb3VwKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5kZWJ1ZygnaW1wb3J0Q29udHJhY3RNYXAnLCB0aGlzLmltcG9ydENvbnRyYWN0TWFwKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNQb3B1cEltcG9ydCA9IHRydWU7XG5cblxuICB9XG5cbiAgLy9jb250cm9sIGltcG9ydCBwb3B1cCBpcyBkaXNwbGF5XG4gIGRpc3BsYXlJbXBvcnRQb3B1cChpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzUG9wdXBJbXBvcnQgPSBpc1Nob3c7XG4gIH1cblxuICAvL3doZW4ga2V5cHJlc3Mga2V5d29yZCByZWZyZXNoIGNvbnRyYWN0IGxpc3RcbiAgcmVmcmVzaEltcG9ydChrZXl3b3JkKSB7XG4gICAgdGhpcy5pbXBvcnRDb250cmFjdE1hcC5mb3JFYWNoKChncm91cDogQ3VzdG9tZXJJbXBvcnRHcm91cCwgZ3JvdXBOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyb3VwTmFtZSwgZ3JvdXApO1xuXG4gICAgICBncm91cC5pc1Nob3cgPSBmYWxzZTtcbiAgICAgIGdyb3VwLmdldEl0ZW1zLmZvckVhY2goKGl0ZW06IENvbnRhY3RJdGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ2l0ZW0nLGl0ZW0pO1xuICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gaXRlbS5sYXN0bmFtZSArIGl0ZW0uZmlyc3RuYW1lO1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKG5hbWUpO1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKGtleXdvcmQpID09IC0xKSB7XG4gICAgICAgICAgaXRlbS5pc1Nob3cgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpdGVtLmlzU2hvdyA9IHRydWU7XG4gICAgICAgICAgZ3JvdXAuaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGRvSW1wb3J0KCkge1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmltcG9ydENvbnRhY3QodGhpcy5pbXBvcnRDb250YWN0TGlzdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgLy9hbGVydChcIjFcIitKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKS5zdGF0dXMpO1xuICAgICAgbGV0IHN0YXR1cyA9IChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKSkuc3RhdHVzO1xuXG4gICAgICBpZiAoc3RhdHVzKSB7XG5cbiAgICAgICAgdGhpcy5pc1BvcHVwSW1wb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5SW1wb3J0U2F2ZVBvcHVwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb2JpbGVSZXN1bHRTaXplID0gMDtcblxuICAgICAgICAvL3JlZnJlc2ggY3VzdG9tZXIgbGlzdFxuICAgICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG5cbiAgLyogY3VzdG9tZXItaW1wb3J0Ki9cbiAgb25JbXBvcnRDdXN0b21lcihpbXBvcnRJdGVtcykge1xuICAgIGNvbnNvbGUuZGVidWcoJ2ltcG9ydEl0ZW1zJywgaW1wb3J0SXRlbXMpO1xuXG4gICAgdGhpcy5pbXBvcnRDb250YWN0TGlzdCA9IGltcG9ydEl0ZW1zO1xuICAgIHRoaXMubW9iaWxlUmVzdWx0U2l6ZSA9IGltcG9ydEl0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIC8vY2FsbCBjdXN0b21lciBmdW5jdGlvblxuICBjYWxsQ3VzdG9tZXIoY3VzdG9tZXJDbGllbnRJRDogc3RyaW5nKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnY2FsbEN1c3RvbWVyID0gJyArIGN1c3RvbWVyQ2xpZW50SUQpO1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyQ29udGFjdFRlbChjdXN0b21lckNsaWVudElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmNhbGxQaG9uZVRlbEFycmF5ID0gZGF0YTtcblxuICAgICAgLy9jaGVjayBudW1iZXIgYXJyYXkgaXMgc2luZ2xlXG4gICAgICBpZiAodGhpcy5jYWxsUGhvbmVUZWxBcnJheS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgIC8vb25seSBvbmUgbnVtYmVyIGp1c3QgdG8gY2FsbCBvdXRcbiAgICAgICAgaWYgKHRoaXMuY2FsbFBob25lVGVsQXJyYXkubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICB0aGlzLmNhbGxQaG9uZSh0aGlzLmNhbGxQaG9uZVRlbEFycmF5WzBdLnRlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwQ2FsbFBob25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vY2FuY2VsIGNhbGxwaG9uZSBwb3B1cFxuICBjYW5jZWxDYWxsUGhvbmUoKSB7XG4gICAgdGhpcy5pc1BvcHVwQ2FsbFBob25lID0gIXRoaXMuaXNQb3B1cENhbGxQaG9uZTtcbiAgfVxuXG4gIC8vY2FsbCBudW1iZXIgZnJvbSBwaG9uZVxuICBjYWxsUGhvbmUodGVsTnVtYmVyOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdjYWxsUGhvbmUnLCB0ZWxOdW1iZXIpO1xuXG5cbiAgICAvL2NhbGwgcGhvbmUgY2xvc2UgcG9wdXBcbiAgICBpZiAodGhpcy5pc1BvcHVwQ2FsbFBob25lKSB0aGlzLmlzUG9wdXBDYWxsUGhvbmUgPSAhdGhpcy5pc1BvcHVwQ2FsbFBob25lO1xuXG5cbiAgICB3aW5kb3cub3BlbigndGVsOicgKyB0ZWxOdW1iZXIsICdfc3lzdGVtJyk7XG5cbiAgICAvL3BvcHVwIGNvbnRhY3Qgbm90ZVxuICAgIHNldFRpbWVvdXQoKGZ1bikgPT4ge1xuICAgICAgdGhpcy5hZGROb3RlKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG4gIC8vb3BlbiBmaWx0ZXIgcG9wdXBcbiAgZmlsdGVyKCkge1xuICAgIHRoaXMuaXNQb3B1cEZpbHRlciA9IHRydWU7XG4gIH1cblxuICAvL2NsZWFyIGZpbHRlciBpdGVtXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMuY2xlYXJTdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG5cbiAgLy9maWx0ZXIgY3VzdG9tZXIgbGlzdCBhbmQgY2xvc2UgcG9wdXBcbiAgZG9GaWx0ZXIoKSB7XG4gICAgdGhpcy5zYXZlRmlsdGVyU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBkb25lQ3JpdGVyaWEoY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdkb25lQ3JpdGVyaWEnLCBjcml0ZXJpYSk7XG5cbiAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gY3JpdGVyaWE7XG4gICAgdGhpcy5pc1BvcHVwRmlsdGVyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJTdG9yZSkge1xuICAgICAgdGhpcy5jdXN0b21lclN0b3JlLnNldENyaXRlcmlhKGNyaXRlcmlhKTtcbiAgICB9XG5cbiAgICBpZiAoY3JpdGVyaWEuc2F2ZVByZXNldCkge1xuICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2Uuc2F2ZUZpbHRlckNyaXRlcmlhKGNyaXRlcmlhKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2RvbmVDcml0ZXJpYSBzYXZlRmlsdGVyQ3JpdGVyaWEnLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gIH1cblxuICBsb2FkUHJlc2V0Q3JpdGVyaWEoKSB7XG4gICAgLy9jaGVjayBoYXMgcHJlc2V0XG4gICAgbGV0IGNyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0RmlsdGVyQ3JpdGVyaWFQcmVzZXQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2dldGZpbHRlckNyaXRlcmlhUHJlc2V0JywgZGF0YSk7XG5cbiAgICAgICAgaWYgKGRhdGEgIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGNvbHVtbiBpbiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gZGF0YVtjb2x1bW5dO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnY29sdW1uJywgY29sdW1uLCAnYXJyYXlzJywgdmFsdWVzKTtcbiAgICAgICAgICAgIGNyaXRlcmlhLmFkZENyaXRlcmlhQ29scyhjb2x1bW4sIHZhbHVlcyk7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICBjcml0ZXJpYS5zYXZlUHJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgICAgICB9XG4gICAgICAgIHJlcygpO1xuICAgICAgfSk7XG4gICAgfSlcblxuICB9XG5cblxuICBjYW5jZWxEZWxldGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbmNlbERlbGV0ZScpO1xuICB9XG5cbiAgLy8gcmVmcmVhc2ggY29udGVudFxuICByZWZyZXNoQ29udGVudCgpIHtcbiAgICBjb25zb2xlLmxvZygnY29udGVudCByZWZyZXNoOicsIHRoaXMuY3VzdG9tZXJTeW5jKTtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIC8vc2V0IHRpbWVvdXQgZm9yIHJlZnJlc2ggYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmN1c3RvbWVyU3luYy5zeW5jKCkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdGaW5pc2hDb250ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAvLyB0aGlzLnRyaWdnZXJDdXN0b21lckxpc3RRdWVyeSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIDgwMCk7XG5cbiAgfVxuXG5cbiAgLy8gbG9hZGluZyBjb250ZW50XG4gIGxvYWRDb250ZW50KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRlbnQgbG9hZGluZycpO1xuXG4gICAgaWYgKCF0aGlzLmxvYWRDb250YWN0TGlzdCkgdGhpcy5sb2FkQ29udGFjdExpc3QgPSB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nRmluaXNoQ29udGVudCA9IHRydWU7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnRhY3RSZWZyZXNoRG9uZSh2YWwpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdyZWZyZXNoIGRvbmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nRmluaXNoQ29udGVudCA9ICF2YWw7XG4gICAgICB0aGlzLmxvYWRDb250YWN0TGlzdCA9IHZhbDtcbiAgICB9LCAwKTtcbiAgfVxuXG5cbiAgLy9pc1Nob3dDaGFuZ2VcbiAgaXNTaG93Q2hhbmdlKHZhbCkge1xuICAgIGlmICh0aGlzLmlzU2hvdyAhPT0gdmFsKSB7XG4gICAgICB0aGlzLmlzU2hvdyA9IHZhbDtcbiAgICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b05vdGVUaW1lKHRpbWU6IERhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlVXRpbHMudG9EYXRlU3RyaW5nKHRpbWUsICd5eXl5LU1NLWRkIEhIOm1tJyk7XG4gIH1cblxuXG59XG4iXX0=