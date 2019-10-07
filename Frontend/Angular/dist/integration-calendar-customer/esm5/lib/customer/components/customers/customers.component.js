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
var CustomersComponent = /** @class */ (function () {
    //for extension used
    function CustomersComponent(customerService, calendarService, translateService, deviceService, dateUtils, profileCodeService, customerUtils, router, customerStoreService, customerImportDisplay, notificationMgr, changeDetector, APP_CONFIG, showRule, customerShowRule, addProgressPoint) {
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
    Object.defineProperty(CustomersComponent.prototype, "customerClientID", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.customerDetail && this.customerDetail.ClientID)
                return this.customerDetail.ClientID;
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersComponent.prototype, "filterCriteria", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filterCriteria;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filterCriteria = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersComponent.prototype, "needConfirmPopup", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var env = this.APP_CONFIG["ENV"];
            return this.APP_CONFIG && !!this.APP_CONFIG[env]["CUSTOMER_ADD_ANNOUNCE"];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomersComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log("customer ngOnDestroy!");
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (dayType) {
            _this.translateMap.set(dayType, _this.translateService.translate(dayType));
        }));
        this.translateMap.set(this.noSchedule, this.translateService.translate(this.noSchedule));
        this.customerStoreService.getCriteria()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} criteria
         * @return {?}
         */
        function (criteria) {
            _this.pre_criteria = criteria;
        }));
        this.customerStoreService.getCurrentCustomerDetail()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} detail
         * @return {?}
         */
        function (detail) {
            console.log("customer onsubscribe currentCustomerDetail:", detail);
            _this.currentCustomer = detail;
        }));
        this.customerStoreService.getCustomerList()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.pre_customerList = list;
        }));
        this.customerStoreService.getState()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var hasCriteria_1, inCriteria_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("main state: ", state);
                        if (!(state == CUSTOMER_STATE.EDIT_SAVED && this.customerState != CUSTOMER_STATE.EDIT_SAVED)) return [3 /*break*/, 4];
                        //after saved, check if current ID in criteria
                        console.log("state == CUSTOMER_STATE.EDIT_SAVED");
                        console.log("currentCustomer: ", this.currentCustomer);
                        this.isDisplaySavePopup = true;
                        this.customerList = this.pre_customerList;
                        this.filterCriteria = this.pre_criteria;
                        hasCriteria_1 = this.pre_criteria.hasCriteria();
                        inCriteria_1 = false;
                        if (!hasCriteria_1) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.customerService.checkInFilterCriteria(this.currentCustomer.ClientID, this.pre_criteria).toPromise()];
                    case 1:
                        inCriteria_1 = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.customerList.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
                            if (item.clientID == _this.currentCustomer.ClientID) {
                                item.firstName = _this.currentCustomer.FirstName;
                                item.lastName = _this.currentCustomer.LastName;
                                item.tag = _this.currentCustomer.Possibility;
                                item.complementPercent = _this.currentCustomer.Completeness;
                                if (hasCriteria_1)
                                    item.isHighLight = !inCriteria_1;
                            }
                        }));
                        this.customerList = tslib_1.__spread(this.sortCustomerList(this.customerList));
                        if (hasCriteria_1)
                            this.customerStoreService.setCustomerList(this.customerList);
                        return [4 /*yield*/, this.onGetCustomerDetailByID(this.currentCustomer.ClientID)];
                    case 3:
                        _a.sent();
                        this.refreshContactNote(false);
                        return [3 /*break*/, 10];
                    case 4:
                        if (!(state == CUSTOMER_STATE.EDIT && this.customerState != CUSTOMER_STATE.EDIT && this.customerState == CUSTOMER_STATE.FIRST)) return [3 /*break*/, 7];
                        // edit/click page click last page
                        this.customerList = this.pre_customerList;
                        this.filterCriteria = this.pre_criteria;
                        if (!!StringUtils.isEmpty(this.currentCustomer.ClientID)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.onGetCustomerDetailByID(this.currentCustomer.ClientID)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        this.refreshCustomerList(false);
                        return [3 /*break*/, 10];
                    case 7:
                        if (!(this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY)) return [3 /*break*/, 9];
                        //firt in, fetch preset filter
                        console.log("this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY");
                        return [4 /*yield*/, this.loadPresetCriteria()];
                    case 8:
                        _a.sent();
                        this.refreshCustomerList(false);
                        return [3 /*break*/, 10];
                    case 9:
                        if (state == CUSTOMER_STATE.ADD_SAVED) {
                            //after add , get pre_criteria && refresh customerlist
                            console.log("state == CUSTOMER_STATE.ADD_SAVED", this.currentCustomer);
                            this.isDisplaySavePopup = true;
                            this.filterCriteria = this.pre_criteria;
                            this.refreshCustomerList(false, this.currentCustomer.ClientID);
                        }
                        else if (state == CUSTOMER_STATE.IMPORT) {
                            this.importPopup();
                        }
                        _a.label = 10;
                    case 10:
                        if (this.customerState != state) {
                            this.customerState = state;
                            this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
                        }
                        return [2 /*return*/];
                }
            });
        }); }));
        this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
        this.refreshContactNote(false);
        this.notificationMgr.showCategoryMessage("Customer");
    };
    /**
     * @param {?} isAppend
     * @param {?=} clientID
     * @return {?}
     */
    CustomersComponent.prototype.refreshCustomerList = /**
     * @param {?} isAppend
     * @param {?=} clientID
     * @return {?}
     */
    function (isAppend, clientID) {
        if (clientID === void 0) { clientID = ''; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, clickItemFilter, targetClientID;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug('refreshCustomerList append', isAppend, clientID);
                        console.debug(this.filterCriteria);
                        console.debug(this.customerListPageInfo);
                        //fetch customer-list data
                        if (!isAppend)
                            this.customerListPageInfo.resetPage();
                        return [4 /*yield*/, this.customerService.getCustomerList(this.filterCriteria, this.customerListPageInfo).pipe(take(1)).toPromise()];
                    case 1:
                        data = _a.sent();
                        console.log("data in criteria: ", data);
                        if (!isAppend)
                            this.customerList = tslib_1.__spread(data);
                        else
                            this.customerList = tslib_1.__spread(this.customerList, data);
                        if ((!this.filterCriteria.hasCriteria())) {
                            this.filterType = 'NONE';
                        }
                        else {
                            this.filterType = StringUtils.isNotEmpty(this.filterCriteria.keyword) ? 'SEARCH' : 'FILTER';
                        }
                        console.log("refreshCustomerList filterType:", this.filterType);
                        this.customerList = tslib_1.__spread(this.sortCustomerList(this.customerList));
                        this.customerStoreService.setCustomerList(this.customerList);
                        if (!(this.customerList.length > 0)) return [3 /*break*/, 3];
                        clickItemFilter = this.customerList.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.clientID === clientID; }));
                        targetClientID = clickItemFilter.length > 0 ? clientID : this.customerList[0].clientID;
                        return [4 /*yield*/, this.onGetCustomerDetailByID(targetClientID)];
                    case 2:
                        _a.sent();
                        this.refreshContactNote(false);
                        return [3 /*break*/, 4];
                    case 3:
                        this.customerDetail = this.emptyCustomer;
                        this.customerStoreService.setCurrentCustomerDetail(this.customerDetail);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /* integration contact-list */
    /* integration contact-list */
    /**
     * @private
     * @param {?} isAppend
     * @return {?}
     */
    CustomersComponent.prototype.refreshContactNote = /* integration contact-list */
    /**
     * @private
     * @param {?} isAppend
     * @return {?}
     */
    function (isAppend) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.customerClientID) return [3 /*break*/, 2];
                        //if append data will next page
                        if (!isAppend)
                            this.contactListPageInfo.resetPage();
                        return [4 /*yield*/, this.customerService.getCustomerContactNote(this.customerDetail.ClientID, this.contactListPageInfo).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (isAppend)
                            this.customerContactList = this.customerContactList.concat(data);
                        else
                            this.customerContactList = data;
                        console.debug('refreshContactNote success isRefreshContactList status');
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    CustomersComponent.prototype.sortCustomerList = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        if (this.customerShowRule) {
            return this.customerShowRule.sortCustomerList(list);
        }
        else {
            return list.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.clone(); })).sort((/**
             * @param {?} n1
             * @param {?} n2
             * @return {?}
             */
            function (n1, n2) {
                /** @type {?} */
                var n1_name = StringUtils.isEmpty(n1.lastName) ? '' : n1.lastName;
                /** @type {?} */
                var n2_name = StringUtils.isEmpty(n2.lastName) ? '' : n2.lastName;
                return n1_name.localeCompare(n2_name);
            }));
        }
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
        var _this = this;
        this.customerService.getCustomerContactNote(clientID, this.contactListPageInfo)
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.customerContactList = data;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("onGetCustomerDetailByID clientID:", clientID);
                        return [4 /*yield*/, this.customerService.getCustomerDetail(clientID).toPromise()];
                    case 1:
                        data = _a.sent();
                        console.log("onGetCustomerDetailByID data:", data);
                        this.customerDetail = data;
                        this.customerStoreService.setCurrentCustomerDetail(data);
                        return [2 /*return*/];
                }
            });
        });
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
            this.customerStoreService.setCriteria(this.filterCriteria);
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
        this.filterCriteria.keyword = name;
        this.customerStoreService.setCriteria(this.filterCriteria);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clickItem = customerItem;
                        //get CustomerDetail
                        return [4 /*yield*/, this.onGetCustomerDetailByID(customerItem.clientID)];
                    case 1:
                        //get CustomerDetail
                        _a.sent();
                        this.refreshContactNote(false);
                        this.isShow = true;
                        return [2 /*return*/];
                }
            });
        });
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
        this.refreshCustomerList(false, this.customerClientID);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _clientID, data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _clientID = this.customerDetail.ClientID;
                        this.customerList = this.customerList.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) { return x.clientID != _this.customerDetail.ClientID; }));
                        if (!(this.customerList.length === 0)) return [3 /*break*/, 1];
                        this.customerDetail = this.emptyCustomer;
                        this.customerStoreService.setCurrentCustomerDetail(this.customerDetail);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.onGetCustomerDetailByID(this.customerList[0].clientID)];
                    case 2:
                        _a.sent();
                        this.refreshContactNote(false);
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.customerService.deleteCustomerProfile(_clientID).toPromise()];
                    case 4:
                        data = _a.sent();
                        console.log("customerService.doDeleteCustomer()", data);
                        if (data.status) {
                            this.customerStoreService.setCustomerList(this.customerList);
                            this.isShow = false;
                            this.isDisplayDeletePopup = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
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
        var _this = this;
        /** @type {?} */
        var currentTime;
        currentTime = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), getHours(new Date()), getMinutes(new Date()));
        currentTime = addMinutes(currentTime, (5 - getMinutes(currentTime) % 5)); // adjust minutes to next 5 minutes
        currentTime = addHours(currentTime, 1);
        this.calendarEventDetail = new CalendarEventDetail('', '', customerClientID, '', '', null, 'N', currentTime, addMinutes(currentTime, 15), 'Y', '8', null, '', '', null);
        /** @type {?} */
        var queryDate = new Date(getYear(this.viewDate), getMonth(this.viewDate), getDate(this.viewDate), 0, 0, 0);
        this.calendarService.getCalendarEventList(queryDate, subMinutes(addDays(this.viewDate, 1), 1), '')
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.viewDateCalendarEventList = data;
            _this.onToggleAppointmentModal(true);
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
        if (!val) {
            this.isCalendarEditMetaDataDone = false;
        }
        this.isExpandEdit = val;
    };
    /**
     * @param {?} resp
     * @return {?}
     */
    CustomersComponent.prototype.onSaveCalendarEvent = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        var _this = this;
        /** @type {?} */
        var type = resp.type;
        /** @type {?} */
        var data = resp.data;
        console.log("calendarEventDetail: ", data);
        if (type !== 'fail') {
            this.isDisplaySavePopup = true;
            this.onToggleAppointmentModal(false);
            this.calendarService.getCalendarEventDetail(data.ClientID).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.calendarEventDetail = data;
            }));
        }
        this.isSaveClick = false;
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.addCustomer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var detail = {};
        this.customerStoreService.setCurrentCustomerDetail(detail);
        this.customerStoreService.setState(CUSTOMER_STATE.EDIT);
        this.router.navigate("CustomerEdit");
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
        var _this = this;
        this.customerStoreService.setState(CUSTOMER_STATE.EDIT);
        this.customerService.getCustomerDetail(customerClientID).subscribe((/**
         * @param {?} detail
         * @return {?}
         */
        function (detail) {
            console.log("editCustomer:", detail);
            console.log("Stringify:", JSON.stringify(detail));
            _this.customerStoreService.setCurrentCustomerDetail(detail);
            //romove body fixed
            setTimeout((/**
             * @return {?}
             */
            function () {
                document.body.classList.remove("fixed-body-full-page");
            }), 200);
            _this.router.navigate("CustomerEdit");
        }));
    };
    /**
     * @param {?} detail
     * @return {?}
     */
    CustomersComponent.prototype.followChange = /**
     * @param {?} detail
     * @return {?}
     */
    function (detail) {
        var _this = this;
        this.customerService.updateCustomerFollowStatus(detail.clientID, detail.isFollow).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (_this.filterCriteria) {
                _this.customerService.checkInFilterCriteria(detail.clientID, _this.filterCriteria).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    _this.customerList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
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
            _this.customerList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.clientID == detail.clientID; })).forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                value.isFollow = detail.isFollow;
            }));
        }));
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.addNote = /**
     * @return {?}
     */
    function () {
        console.debug('addNote');
        this.currentEditNote = {
            ClientID: '',
            CustomerClientID: this.customerDetail.ClientID,
            NoteTime: Date.now(),
            DisplayDate: this.toNoteTime(new Date())
        };
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
        this.currentEditNote = Object.assign({}, note, {
            CustomerClientID: this.customerDetail.ClientID,
            NoteTime: Date.now(),
            DisplayDate: this.toNoteTime(new Date())
        });
        console.log("this.currentEditNote:", this.currentEditNote);
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
        this.customerContactDetail.Name = this.convertNameToShow(this.customerDetail.FirstName, this.customerDetail.LastName);
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
        this.currentEditNote = note;
        this.isPopupDeleteNote = true;
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.doDeleteContact = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.customerService.deleteCustomerContact(this.currentEditNote.ClientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log("customerService.deleteNote()", data);
            if (data.status) {
                _this.customerContactList = _this.customerContactList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.ClientID != _this.currentEditNote.ClientID; }));
                _this.currentEditNote = null;
                _this.isDisplayDeletePopup = true;
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
        this.contactSaveSubject.next();
    };
    /**
     * @param {?} note
     * @return {?}
     */
    CustomersComponent.prototype.onSaveNoteFinish = /**
     * @param {?} note
     * @return {?}
     */
    function (note) {
        var _this = this;
        this.isPopupEditNote = false;
        this.isDisplaySavePopup = true;
        this.isShowDetailScroll = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isShowDetailScroll = true;
            _this.refreshContactNote(false);
        }), 200);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    CustomersComponent.prototype.doAction = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
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
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.confirmPopup = /**
     * @return {?}
     */
    function () {
        this.isPopupConfirmDisable = true;
        this.isDisplayConfirmAlertPopup = false;
        this.changeDetector.detectChanges();
        if (this.confirmAction === 'add')
            this.addCustomer();
        else if (this.confirmAction == 'import') {
            this.import();
        }
        this.confirmAction = null;
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
     * @private
     * @return {?}
     */
    CustomersComponent.prototype.importPopup = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var importList, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.deviceService.searchContactsByName("")];
                    case 1:
                        importList = _a.sent();
                        console.debug('import result ', importList);
                        this.importContractMap.clear();
                        //regroup
                        importList.forEach((/**
                         * @param {?} element
                         * @return {?}
                         */
                        function (element) {
                            console.debug(element.LastName);
                            element = _this.customerImportDisplay.convert(element);
                            /** @type {?} */
                            var name = _this.convertNameToShow(element.FirstName, element.LastName).trim();
                            if (name != null && name.length > 0) {
                                /** @type {?} */
                                var firstWord = name.substring(0, 1);
                                firstWord = firstWord.toLowerCase();
                                console.debug('firstWord =' + firstWord);
                                /** @type {?} */
                                var group = _this.importContractMap.get(firstWord);
                                if (group == undefined)
                                    group = new CustomerImportGroup(firstWord);
                                group.addItem(element);
                                _this.importContractMap.set(firstWord, group);
                            }
                        }));
                        console.debug('importContractMap', this.importContractMap);
                        this.isPopupImport = true;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.warn('catch error', error_1);
                        this.notificationMgr.pushNotification(NotificationType.ContactPermissionError, null);
                        if (this.deviceService.getDevicePlatform() == 'iOS') {
                            this.deviceService.grantContactPermission();
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.import = /**
     * @return {?}
     */
    function () {
        this.customerStoreService.setState(CUSTOMER_STATE.IMPORT);
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
        this.importSearchKeyword = keyword;
        /** @type {?} */
        var lowerCaseKeyword = this.importSearchKeyword.toLowerCase();
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
                var name = item.LastName + item.FirstName;
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
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.onCloseImportPopup = /**
     * @return {?}
     */
    function () {
        this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
        this.importSearchKeyword = '';
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.doImport = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.showCustomerList = false;
        this.customerService.importContact(this.importContactList).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            //alert("1"+JSON.parse(JSON.stringify(data)).status);
            //加點數
            if (_this.addProgressPoint && _this.importContactList.length > 0) {
                _this.addProgressPoint.addCustomerPoint(_this.importContactList.length);
            }
            _this.customerStoreService.setState(CUSTOMER_STATE.DISPLAY);
            /** @type {?} */
            var status = (JSON.parse(JSON.stringify(data))).status;
            if (status) {
                //clear list first, prevent lazyloading cache
                _this.customerList = [];
                _this.showCustomerList = true;
                _this.isPopupImport = false;
                _this.isDisplayImportSavePopup = true;
                _this.mobileResultSize = 0;
                _this.importSearchKeyword = '';
                //refresh customer list
                _this.refreshCustomerList(false);
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
        var _this = this;
        console.debug('callCustomer = ' + customerClientID);
        this.customerService.getCustomerContactTel(customerClientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.callPhoneTelArray = data;
            //check number array is single
            if (_this.callPhoneTelArray.length != 0) {
                //only one number just to call out
                if (_this.callPhoneTelArray.length == 1) {
                    _this.callPhone(_this.callPhoneTelArray[0].tel);
                }
                else {
                    _this.isPopupCallPhone = true;
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
        var _this = this;
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
            _this.addNote();
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
        this.customerStoreService.setCriteria(criteria);
        if (criteria.getOption("AsPreset")) {
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
        var _this = this;
        //check has preset
        /** @type {?} */
        var criteria = new CustomerFilterCriteria();
        return this.customerService.getFilterCriteriaPreset().toPromise().then((/**
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
                    criteria.setOption("AsPreset", true);
                }
                else {
                    criteria.setOption("AsPreset", false);
                }
                _this.filterCriteria = criteria;
            }
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
        var _this = this;
        //set timeout for refresh animation
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isRefreshFinishContent = true;
        }), 800);
    };
    // loading contact note 
    // loading contact note 
    /**
     * @param {?} event
     * @return {?}
     */
    CustomersComponent.prototype.loadContent = 
    // loading contact note 
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('content loading this.customerList.length: ', this.customerList.length);
                        if (!(this.customerList.length > 0)) return [3 /*break*/, 2];
                        this.contactListPageInfo.nextPage();
                        return [4 /*yield*/, this.refreshContactNote(true)];
                    case 1:
                        _a.sent();
                        this.isLoadingFinishContent = true;
                        return [3 /*break*/, 3];
                    case 2:
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.isLoadingFinishContent = true;
                        }), 0);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
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
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    CustomersComponent.prototype.convertNameToShow = /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    function (firstName, lastName) {
        return this.customerUtils.convertNameToShow(firstName, lastName);
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
        if (this.showRule) {
            return this.showRule.convertDateAndTime(time);
        }
        else {
            return this.dateUtils.toDateString(time, 'MM/dd/yyyy HH:mm');
        }
    };
    /**
     * @return {?}
     */
    CustomersComponent.prototype.onCalendarEditMetaDataDone = /**
     * @return {?}
     */
    function () {
        this.isCalendarEditMetaDataDone = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomersComponent.prototype.filterCriteriaPopupChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.warn('filterCriteriaPopupChange event: ', event);
        this.isPopupFilter = event;
        if (this.isPopupFilter) {
            this.filterCriteria = this.filterCriteria.clone();
        }
    };
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
    CustomersComponent.ctorParameters = function () { return [
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
    ]; };
    CustomersComponent.propDecorators = {
        calendarEditComponent: [{ type: ViewChild, args: [CalendarEditComponent,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxHQUFHLE1BQU0scUJBQXFCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQWUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQWdELGFBQWEsRUFBWSxlQUFlLEVBQXNCLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0UyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUs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O0lBQ3hDLDhDQUEwQzs7Ozs7SUFDMUMsMkNBQW9DOzs7OztJQUNwQyx1Q0FBNEI7Ozs7O0lBQzVCLGdEQUE4Qzs7Ozs7SUFDOUMsMkNBQW9DOzs7OztJQUNwQyxvQ0FBeUI7Ozs7O0lBQ3pCLGtEQUFrRDs7Ozs7SUFDbEQsbURBQTJEOzs7OztJQUMzRCw2Q0FBd0M7Ozs7O0lBQ3hDLDRDQUF5Qzs7Ozs7SUFDekMsd0NBQXdEOzs7OztJQUN4RCxzQ0FBNkQ7Ozs7O0lBQzdELDhDQUFxRjs7Ozs7SUFDckYsOENBQXFGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgT3B0aW9uYWwsIEluamVjdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UsIFN0cmluZ1V0aWxzLCBEYXRlVXRpbHMsIFBhZ2VJbmZvLCBEZXZpY2VTZXJ2aWNlLCBQcm9maWxlQ29kZSwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBUcmFuc2xhdGVTZXJ2aWNlLCBDb250YWN0SXRlbSwgRXh0RGF0YVByb2Nlc3MsIERhdGFTeW5jU2VydmljZSwgc2hvd1J1bGVUb2tlbiwgc2hvd1J1bGUsIE5vdGlmaWNhdGlvbk1nciwgTm90aWZpY2F0aW9uT2JqZWN0LCBDb25maWdUb2tlbiwgQXBwUm91dGVyLCBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jYWxlbmRhci9zZXJ2aWNlL2NhbGVuZGFyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vLi4vY2FsZW5kYXIvc2VydmljZS9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcbmltcG9ydCB7IENhbGVuZGFyRWRpdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXItZWRpdC9jYWxlbmRhci1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2N1c3RvbWVyLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21lclRlbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJUZWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSB9IGZyb20gJy4uL2JlYW4vY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhJztcbmltcG9ydCB7IEN1c3RvbWVyQWxlcnRJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9DdXN0b21lckFsZXJ0SXRlbSc7XG5pbXBvcnQgeyBDdXN0b21lckl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0N1c3RvbWVySXRlbSc7XG5pbXBvcnQgeyBDdXN0b21lckltcG9ydEdyb3VwIH0gZnJvbSAnLi4vYmVhbi9jdXN0b21lci1pbXBvcnQtZ3JvdXAnO1xuaW1wb3J0IHsgYWRkRGF5cywgYWRkSG91cnMsIGFkZE1pbnV0ZXMsIGdldERhdGUsIGdldEhvdXJzLCBnZXRNaW51dGVzLCBnZXRNb250aCwgZ2V0WWVhciwgc3ViTWludXRlcyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENVU1RPTUVSX1NUQVRFIH0gZnJvbSAnLi4vLi4vc2VydmljZS9jdXN0b21lclN0b3JlL2N1c3RvbWVyU3RvcmUtc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21lclV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY3VzdG9tZXItdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2N1c3RvbWVyU3RvcmUvY3VzdG9tZXJTdG9yZS1zZXJ2aWNlJztcbmltcG9ydCB7IERlZmF1bHRDdXN0b21lckltcG9ydERpc3BsYXkgfSBmcm9tICcuL0RlZmF1bHRDdXN0b21lckltcG9ydERpc3BsYXknO1xuaW1wb3J0IHsgYWRkUHJvZ3Jlc3NQb2ludFRva2VuLCBjdXN0b21lclNob3dSdWxlVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgQWRkUHJvZ3Jlc3NQb2ludCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9BZGRQcm9ncmVzc1BvaW50JztcbmltcG9ydCB7IHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbWVyU2hvd1J1bGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvQ3VzdG9tZXJTaG93UnVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hCbG9ja0FuaScsIFtcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoe1xuICAgICAgICB3aWR0aDogJzAnLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8vaW50ZXJncmF0aW9uIENhbGVuZGFyIE1vZHVsZVxuICBAVmlld0NoaWxkKENhbGVuZGFyRWRpdENvbXBvbmVudCkgY2FsZW5kYXJFZGl0Q29tcG9uZW50O1xuICBwdWJsaWMgdmlld1R5cGVJbmRleCA9IDI7IC8vICdtb250aCdcbiAgcHVibGljIHZpZXdUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyB2aWV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHB1YmxpYyB3ZWVrU3RhcnRzT24gPSAxOyAvLyBNb25kYXkgXG4gIHB1YmxpYyBpc1Nob3dEZXRhaWxTY3JvbGw6IGJvb2xlYW4gPSB0cnVlO1xuXG5cblxuICAvLyBjb250cm9sIG1vYmlsZSBzaG93XG4gIHB1YmxpYyBpc1Nob3cgPSBmYWxzZTtcblxuICAvL3VzZSB0byBmb3JjZSByZWZyZXNoIGN1c3RvbWVyTGlzdFxuICBwdWJsaWMgc2hvd0N1c3RvbWVyTGlzdCA9IHRydWU7XG5cbiAgLy8gcG9wdXBcbiAgcHVibGljIGlzRXhwYW5kRGV0YWlsID0gZmFsc2U7XG4gIHB1YmxpYyBpc1JlZnJlc2hEZXRhaWwgPSBmYWxzZTtcbiAgcHVibGljIGlzU2F2ZUNsaWNrID0gZmFsc2U7XG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gIC8v5a6i5oi25riF5Zau55qEc2VhcmNoIGJsb2NrIGFuaW1hdGVcbiAgcHVibGljIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY2xhc3NTZWFyY2g6IHN0cmluZyA9ICcnO1xuXG4gIC8vcG9wdXAgY29udHJvbFxuICBwdWJsaWMgaXNEaXNwbGF5SW1wb3J0U2F2ZVBvcHVwID0gZmFsc2U7IC8vaW1wb3J0IHBvcHVwXG4gIHB1YmxpYyBpc0Rpc3BsYXlTYXZlUG9wdXAgPSBmYWxzZTsgLy9zYXZlIHBvcHVwXG4gIHB1YmxpYyBpc0Rpc3BsYXlEZWxDdXN0b21lclBvcHVwID0gZmFsc2U7IC8vZGVsZXRlIGN1c3RvbWVyIHBvcHVwXG4gIHB1YmxpYyBpc0Rpc3BsYXlDb25maXJtQWxlcnRQb3B1cCA9IGZhbHNlOyAvL2NvbmZpcm0gYWxlcnQgcG9wdXBcbiAgcHVibGljIGlzRGlzcGxheUluZm9BbGVydFBvcHVwID0gZmFsc2U7IC8vaW5mbyBhbGVydCBwb3B1cFxuICBwdWJsaWMgaXNEaXNwbGF5VXBkYXRlUmVtaW5kID0gZmFsc2U7IC8vYWxlcnQgY3VzdG9tZXIgb3ZlciA2IG1vbnRoIHBvcHVwXG4gIHB1YmxpYyBpc0Rpc3BsYXlEZWxldGVSZW1pbmQgPSBmYWxzZTsgLy9hbGVydCBjdXN0b21lciBvdmVyIDYgbW9udGggJiA3ZGF5IHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwSW1wb3J0ID0gZmFsc2U7IC8vaW1wb3J0IHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwRmlsdGVyID0gZmFsc2U7IC8vZmlsdGVyIHBvcHVwXG4gIHB1YmxpYyBpc0V4cGFuZEVkaXQgPSBmYWxzZTsgLy8gYXBwb2ludG1lbnQgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBDYWxsUGhvbmUgPSBmYWxzZTsgLy9jYWxsIGN1c3RvbWVyIHBob25lIHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwTm90ZURldGFpbCA9IGZhbHNlOyAvL2NvbnRhY3QgZGV0YWlsIHBvcHVwXG4gIHB1YmxpYyBpc1BvcHVwRWRpdE5vdGUgPSBmYWxzZTsgLy9hZGQvZWRpdCBjb250YWN0IG5vdGUgcG9wdXBcbiAgcHVibGljIGlzUG9wdXBEZWxldGVOb3RlID0gZmFsc2U7IC8vZGVsZXRlIGNvbnRhY3Qgbm90ZSBwb3B1cFxuICBwdWJsaWMgaXNQb3B1cENvbmZpcm1EaXNhYmxlID0gdHJ1ZTsgLy8gY29uZmlybVBvcHVwIGJ0biBpcyBkaXNhYmxlIGRlZmF1bHRcbiAgcHVibGljIGlzRGlzcGxheURlbGV0ZVBvcHVwID0gZmFsc2U7IC8vZGVsZXRlIHN1Y2Nlc3MgcG9wdXBcbiAgcHVibGljIGlzQ2FsZW5kYXJFZGl0TWV0YURhdGFEb25lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9jb250cm9sIG92ZXJ0aW1lIGN1c3RvbWVyIGxpc3RcbiAgcHVibGljIGFsZXJ0T3ZlclRpbWVMaXN0ID0gbmV3IEFycmF5PEN1c3RvbWVyQWxlcnRJdGVtPigpO1xuXG4gIC8vY29udHJvbCBhdXRvIGRlbGV0ZSBjdXN0b21lciBsaXN0XG4gIHB1YmxpYyBhbGVydEF1dG9EZWxldGVDdXN0b21lciA9IG5ldyBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4oKTtcblxuICAvL2NvbnRyb2wgcmVmcmVzaCAgY29udGVudFxuICBwdWJsaWMgaXNMb2FkaW5nRmluaXNoQ29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNSZWZyZXNoRmluaXNoQ29udGVudDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy9jb250cm9sXG4gIHB1YmxpYyBpc0xhenlMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICAvL2ludGVyZ3JhdGlvbiBjdXN0b21lci1kZXRhaWwgdXNlZFxuICAvL2NhbGwgcGhvbmUgb2JqXG4gIHB1YmxpYyBjYWxsUGhvbmVUZWxBcnJheTogQXJyYXk8Q3VzdG9tZXJUZWw+O1xuXG4gIC8vaW50ZXJncmF0aW9uIGN1c3RvbWVyLWNvbnRhY3QtbGlzdCB1c2VkXG4gIC8vY3VzdG9tZXIgY29udGFjdCBkZXRhaWwgb2JqXG4gIHB1YmxpYyBjdXN0b21lckNvbnRhY3REZXRhaWw6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBjdXN0b21lckNvbnRhY3RMaXN0OiBBcnJheTxhbnk+ID0gW107XG4gIHB1YmxpYyBjb250YWN0TGlzdFBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG5cbiAgcHVibGljIGNhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWw7XG4gIHB1YmxpYyB2aWV3RGF0ZUNhbGVuZGFyRXZlbnRMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuXG4gIGdldCBjdXN0b21lckNsaWVudElEKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbWVyRGV0YWlsICYmIHRoaXMuY3VzdG9tZXJEZXRhaWwuQ2xpZW50SUQpXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21lckRldGFpbC5DbGllbnRJRDtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvL2ludGVyZ3JhdGlvbiBjdXN0b21lci1saXN0XG4gIHB1YmxpYyBjdXN0b21lckxpc3QgPSBuZXcgQXJyYXk8Q3VzdG9tZXJJdGVtPigpO1xuICBwdWJsaWMgY2xpY2tJdGVtOiBDdXN0b21lckl0ZW07XG4gIHB1YmxpYyBjdXN0b21lckxpc3RQYWdlSW5mbyA9IG5ldyBQYWdlSW5mbygpO1xuICBwcml2YXRlIF9maWx0ZXJDcml0ZXJpYSA9IG5ldyBDdXN0b21lckZpbHRlckNyaXRlcmlhKCk7XG5cbiAgcHVibGljIGdldCBmaWx0ZXJDcml0ZXJpYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyQ3JpdGVyaWE7XG4gIH1cbiAgcHVibGljIHNldCBmaWx0ZXJDcml0ZXJpYSh2YWx1ZSkge1xuICAgIHRoaXMuX2ZpbHRlckNyaXRlcmlhID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIGZpbHRlclR5cGUgPSAnTk9ORSc7XG5cbiAgcHVibGljIG9wdGlvbk1hcDogTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+KCk7XG4gIHB1YmxpYyB0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIHByaXZhdGUgZGF5VHlwZXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydDcm9zc19EYXknLCAnQWxsX0RheSddO1xuICBwcml2YXRlIG5vU2NoZWR1bGU6IHN0cmluZyA9ICdOb19TY2hlZHVsZSc7XG5cbiAgcHVibGljIGFjdGl2aXR5VHlwZUxpc3Q6IEFycmF5PFByb2ZpbGVDb2RlPiA9IFtdOyAvLyBEQuS4reaJgOaciWFjdGl2aXR5VHlwZVxuICBwdWJsaWMgYWxlcnRUeXBlTGlzdDogQXJyYXk8UHJvZmlsZUNvZGU+ID0gW107XG5cblxuICAvL2ludGVyZ3JhdGlvbiBjdXN0b21lci1pbXBvcnRcbiAgcHVibGljIGltcG9ydENvbnRyYWN0TWFwID0gbmV3IE1hcDxzdHJpbmcsIEN1c3RvbWVySW1wb3J0R3JvdXA+KCk7XG4gIHB1YmxpYyBtb2JpbGVSZXN1bHRTaXplOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgaW1wb3J0RGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW1wb3J0Q29udGFjdExpc3Q6IEFycmF5PENvbnRhY3RJdGVtPiA9IFtdO1xuICBwdWJsaWMgaW1wb3J0U2VhcmNoS2V5d29yZDogc3RyaW5nID0gJyc7XG5cbiAgLy9maWx0ZXIgY3VzdG9tZXIgYXR0cmlidXRlXG4gIHB1YmxpYyBpc0xvYWRDcml0ZXJpYTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNDbGVhckNyaXRlcmlhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9pbXBvcnQgcmVzdWx0KHN1Y2Nlc3MgfCBmYWlsKTtcbiAgcHVibGljIF9vbkltcG9ydFJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItZWRpdCB1c2VkXG4gIC8vYWRkL2VkaXQgY29udGFjdCBub3RlIGF0dHJpYnV0ZVxuICBwdWJsaWMgY3VycmVudEVkaXROb3RlOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgaXNSZWZyZXNoQ29udGFjdExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRDb250YWN0TGlzdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblxuICAvLyBzZWFyY2ggYW5pbWF0ZSBpbiBmaWx0ZXJcbiAgcHVibGljIGNsYXNzQmFyTW92ZTogc3RyaW5nID0gJyc7XG5cbiAgLy9pbnRlcmdyYXRpb24gY3VzdG9tZXItZGV0YWlsIHVzZWRcbiAgcHVibGljIGN1c3RvbWVyRGV0YWlsOiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgZW1wdHlDdXN0b21lcjogYW55ID0ge1xuICAgIENsaWVudElEOiAnJ1xuICB9O1xuXG4gIC8vY3VycmVudCBlZGl0IGN1c3RvbWVyIElkXG4gIHB1YmxpYyBjdXJyZW50Q3VzdG9tZXI6IGFueSA9IHRoaXMuZW1wdHlDdXN0b21lcjtcblxuXG5cbiAgcHVibGljIGdldCBuZWVkQ29uZmlybVBvcHVwKCkge1xuICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUdbXCJFTlZcIl07XG4gICAgcmV0dXJuIHRoaXMuQVBQX0NPTkZJRyAmJiAhIXRoaXMuQVBQX0NPTkZJR1tlbnZdW1wiQ1VTVE9NRVJfQUREX0FOTk9VTkNFXCJdO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maXJtQWN0aW9uID0gbnVsbDtcblxuXG4gIC8vIGN1cnJlbnQgY3VzdG9tZXIgc3RhdGVcbiAgcHJpdmF0ZSBjdXN0b21lclN0YXRlOiBDVVNUT01FUl9TVEFURSA9IENVU1RPTUVSX1NUQVRFLkZJUlNUO1xuXG4gIC8vcHJlIHNhdmVkIGNyaXRlcmlhXG4gIHByaXZhdGUgcHJlX2NyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcblxuICAvL3ByZSBzYXZlZCBjdXN0b21lcmxpc3RcbiAgcHJpdmF0ZSBwcmVfY3VzdG9tZXJMaXN0OiBBcnJheTxDdXN0b21lckl0ZW0+O1xuXG4gIC8vc3Vic2NyaWJlIG9mIHN0b3JlXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvL3N1YmplY3Qgb2YgY2xlYXIgJiBzYXZlIGZpbHRlclxuICBwdWJsaWMgY2xlYXJTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHNhdmVGaWx0ZXJTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGNvbnRhY3RTYXZlU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG5cblxuICAvL2ZvciBleHRlbnNpb24gdXNlZFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0ZVV0aWxzOiBEYXRlVXRpbHMsXG4gICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHMsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IEFwcFJvdXRlcixcbiAgICBwcml2YXRlIGN1c3RvbWVyU3RvcmVTZXJ2aWNlOiBDdXN0b21lclN0b3JlU2VydmljZSxcbiAgICBwcml2YXRlIGN1c3RvbWVySW1wb3J0RGlzcGxheTogRGVmYXVsdEN1c3RvbWVySW1wb3J0RGlzcGxheSxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBzaG93UnVsZTogc2hvd1J1bGUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lclNob3dSdWxlVG9rZW4pIHByaXZhdGUgY3VzdG9tZXJTaG93UnVsZTogQ3VzdG9tZXJTaG93UnVsZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGFkZFByb2dyZXNzUG9pbnRUb2tlbikgcHJpdmF0ZSBhZGRQcm9ncmVzc1BvaW50OiBBZGRQcm9ncmVzc1BvaW50XG5cbiAgKSB7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXIgbmdPbkRlc3Ryb3khXCIpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyIG5nT25pbml0IVwiKTtcbiAgICB0aGlzLmNvbnRhY3RMaXN0UGFnZUluZm8ucGFnZVNpemUgPSA1O1xuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfVHlwZScpO1xuICAgIHRoaXMuYWxlcnRUeXBlTGlzdCA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmdldENvZGVBcnJheSgnQ2FsZW5kYXJfUmVtaW5kVGltZScpO1xuICAgIHRoaXMub3B0aW9uTWFwLnNldCgnQ2FsZW5kYXJfVHlwZScsIHRoaXMuYWN0aXZpdHlUeXBlTGlzdCk7XG4gICAgdGhpcy5vcHRpb25NYXAuc2V0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5hbGVydFR5cGVMaXN0KTtcblxuICAgIHRoaXMuZGF5VHlwZXNMaXN0LmZvckVhY2goKGRheVR5cGUpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldChkYXlUeXBlLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKGRheVR5cGUpKVxuICAgIH0pO1xuICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldCh0aGlzLm5vU2NoZWR1bGUsIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUodGhpcy5ub1NjaGVkdWxlKSk7XG5cblxuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2UuZ2V0Q3JpdGVyaWEoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGNyaXRlcmlhKSA9PiB7XG4gICAgICAgIHRoaXMucHJlX2NyaXRlcmlhID0gY3JpdGVyaWE7XG4gICAgICB9KVxuXG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5nZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUoZGV0YWlsID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lciBvbnN1YnNjcmliZSBjdXJyZW50Q3VzdG9tZXJEZXRhaWw6XCIsIGRldGFpbCk7XG4gICAgICAgIHRoaXMuY3VycmVudEN1c3RvbWVyID0gZGV0YWlsO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLmdldEN1c3RvbWVyTGlzdCgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5wcmVfY3VzdG9tZXJMaXN0ID0gbGlzdDtcbiAgICAgIH0pXG5cbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLmdldFN0YXRlKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFpbiBzdGF0ZTogXCIsIHN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlID09IENVU1RPTUVSX1NUQVRFLkVESVRfU0FWRUQgJiYgdGhpcy5jdXN0b21lclN0YXRlICE9IENVU1RPTUVSX1NUQVRFLkVESVRfU0FWRUQpIHtcblxuICAgICAgICAgIC8vYWZ0ZXIgc2F2ZWQsIGNoZWNrIGlmIGN1cnJlbnQgSUQgaW4gY3JpdGVyaWFcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlID09IENVU1RPTUVSX1NUQVRFLkVESVRfU0FWRURcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50Q3VzdG9tZXI6IFwiLCB0aGlzLmN1cnJlbnRDdXN0b21lcik7XG4gICAgICAgICAgdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gdGhpcy5wcmVfY3VzdG9tZXJMaXN0O1xuICAgICAgICAgIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLnByZV9jcml0ZXJpYTtcbiAgICAgICAgICBsZXQgaGFzQ3JpdGVyaWEgPSB0aGlzLnByZV9jcml0ZXJpYS5oYXNDcml0ZXJpYSgpO1xuICAgICAgICAgIGxldCBpbkNyaXRlcmlhID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGhhc0NyaXRlcmlhKVxuICAgICAgICAgICAgaW5Dcml0ZXJpYSA9IGF3YWl0IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmNoZWNrSW5GaWx0ZXJDcml0ZXJpYSh0aGlzLmN1cnJlbnRDdXN0b21lci5DbGllbnRJRCwgdGhpcy5wcmVfY3JpdGVyaWEpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNsaWVudElEID09IHRoaXMuY3VycmVudEN1c3RvbWVyLkNsaWVudElEKSB7XG4gICAgICAgICAgICAgIGl0ZW0uZmlyc3ROYW1lID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuRmlyc3ROYW1lO1xuICAgICAgICAgICAgICBpdGVtLmxhc3ROYW1lID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuTGFzdE5hbWU7XG4gICAgICAgICAgICAgIGl0ZW0udGFnID0gdGhpcy5jdXJyZW50Q3VzdG9tZXIuUG9zc2liaWxpdHk7XG4gICAgICAgICAgICAgIGl0ZW0uY29tcGxlbWVudFBlcmNlbnQgPSB0aGlzLmN1cnJlbnRDdXN0b21lci5Db21wbGV0ZW5lc3M7XG4gICAgICAgICAgICAgIGlmIChoYXNDcml0ZXJpYSlcbiAgICAgICAgICAgICAgICBpdGVtLmlzSGlnaExpZ2h0ID0gIWluQ3JpdGVyaWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jdXN0b21lckxpc3QgPSBbLi4udGhpcy5zb3J0Q3VzdG9tZXJMaXN0KHRoaXMuY3VzdG9tZXJMaXN0KV07XG4gICAgICAgICAgaWYgKGhhc0NyaXRlcmlhKVxuICAgICAgICAgICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDdXN0b21lckxpc3QodGhpcy5jdXN0b21lckxpc3QpO1xuXG5cbiAgICAgICAgICBhd2FpdCB0aGlzLm9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEKHRoaXMuY3VycmVudEN1c3RvbWVyLkNsaWVudElEKTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRURJVCAmJiB0aGlzLmN1c3RvbWVyU3RhdGUgIT0gQ1VTVE9NRVJfU1RBVEUuRURJVCAmJiB0aGlzLmN1c3RvbWVyU3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuRklSU1QpIHtcbiAgICAgICAgICAvLyBlZGl0L2NsaWNrIHBhZ2UgY2xpY2sgbGFzdCBwYWdlXG5cbiAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdCA9IHRoaXMucHJlX2N1c3RvbWVyTGlzdDtcbiAgICAgICAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcmVfY3JpdGVyaWE7XG4gICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY3VycmVudEN1c3RvbWVyLkNsaWVudElEKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0aGlzLmN1cnJlbnRDdXN0b21lci5DbGllbnRJRCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jdXN0b21lclN0YXRlID09IENVU1RPTUVSX1NUQVRFLkZJUlNUICYmIHN0YXRlID09IENVU1RPTUVSX1NUQVRFLkRJU1BMQVkpIHtcbiAgICAgICAgICAvL2ZpcnQgaW4sIGZldGNoIHByZXNldCBmaWx0ZXJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VzdG9tZXJTdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5GSVJTVCAmJiBzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5ESVNQTEFZXCIpO1xuICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFByZXNldENyaXRlcmlhKCk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PSBDVVNUT01FUl9TVEFURS5BRERfU0FWRUQpIHtcblxuICAgICAgICAgIC8vYWZ0ZXIgYWRkICwgZ2V0IHByZV9jcml0ZXJpYSAmJiByZWZyZXNoIGN1c3RvbWVybGlzdFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgPT0gQ1VTVE9NRVJfU1RBVEUuQUREX1NBVkVEXCIsIHRoaXMuY3VycmVudEN1c3RvbWVyKTtcbiAgICAgICAgICB0aGlzLmlzRGlzcGxheVNhdmVQb3B1cCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMucHJlX2NyaXRlcmlhO1xuICAgICAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSwgdGhpcy5jdXJyZW50Q3VzdG9tZXIuQ2xpZW50SUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09IENVU1RPTUVSX1NUQVRFLklNUE9SVCkge1xuICAgICAgICAgIHRoaXMuaW1wb3J0UG9wdXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbWVyU3RhdGUgIT0gc3RhdGUpIHtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldFN0YXRlKENVU1RPTUVSX1NUQVRFLkRJU1BMQVkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0U3RhdGUoQ1VTVE9NRVJfU1RBVEUuRElTUExBWSk7XG5cbiAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG5cblxuICAgIHRoaXMubm90aWZpY2F0aW9uTWdyLnNob3dDYXRlZ29yeU1lc3NhZ2UoXCJDdXN0b21lclwiKTtcbiAgfVxuXG5cbiAgYXN5bmMgcmVmcmVzaEN1c3RvbWVyTGlzdChpc0FwcGVuZDogYm9vbGVhbiwgY2xpZW50SUQgPSAnJykge1xuICAgIGNvbnNvbGUuZGVidWcoJ3JlZnJlc2hDdXN0b21lckxpc3QgYXBwZW5kJywgaXNBcHBlbmQsIGNsaWVudElEKTtcbiAgICBjb25zb2xlLmRlYnVnKHRoaXMuZmlsdGVyQ3JpdGVyaWEpO1xuICAgIGNvbnNvbGUuZGVidWcodGhpcy5jdXN0b21lckxpc3RQYWdlSW5mbyk7XG5cbiAgICAvL2ZldGNoIGN1c3RvbWVyLWxpc3QgZGF0YVxuICAgIGlmICghaXNBcHBlbmQpIHRoaXMuY3VzdG9tZXJMaXN0UGFnZUluZm8ucmVzZXRQYWdlKCk7XG5cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyTGlzdCh0aGlzLmZpbHRlckNyaXRlcmlhLCB0aGlzLmN1c3RvbWVyTGlzdFBhZ2VJbmZvKS5waXBlKHRha2UoMSkpLnRvUHJvbWlzZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBpbiBjcml0ZXJpYTogXCIsIGRhdGEpO1xuICAgIGlmICghaXNBcHBlbmQpIHRoaXMuY3VzdG9tZXJMaXN0ID0gWy4uLmRhdGFdO1xuICAgIGVsc2UgdGhpcy5jdXN0b21lckxpc3QgPSBbLi4udGhpcy5jdXN0b21lckxpc3QsIC4uLmRhdGFdO1xuXG4gICAgaWYgKCghdGhpcy5maWx0ZXJDcml0ZXJpYS5oYXNDcml0ZXJpYSgpKSkge1xuICAgICAgdGhpcy5maWx0ZXJUeXBlID0gJ05PTkUnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyVHlwZSA9IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5maWx0ZXJDcml0ZXJpYS5rZXl3b3JkKSA/ICdTRUFSQ0gnIDogJ0ZJTFRFUic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaEN1c3RvbWVyTGlzdCBmaWx0ZXJUeXBlOlwiLCB0aGlzLmZpbHRlclR5cGUpO1xuXG4gICAgdGhpcy5jdXN0b21lckxpc3QgPSBbLi4udGhpcy5zb3J0Q3VzdG9tZXJMaXN0KHRoaXMuY3VzdG9tZXJMaXN0KV07XG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDdXN0b21lckxpc3QodGhpcy5jdXN0b21lckxpc3QpO1xuXG5cblxuICAgIGlmICh0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY2xpY2tJdGVtRmlsdGVyID0gdGhpcy5jdXN0b21lckxpc3QuZmlsdGVyKHggPT4geC5jbGllbnRJRCA9PT0gY2xpZW50SUQpO1xuICAgICAgbGV0IHRhcmdldENsaWVudElEID0gY2xpY2tJdGVtRmlsdGVyLmxlbmd0aCA+IDAgPyBjbGllbnRJRCA6IHRoaXMuY3VzdG9tZXJMaXN0WzBdLmNsaWVudElEO1xuICAgICAgYXdhaXQgdGhpcy5vbkdldEN1c3RvbWVyRGV0YWlsQnlJRCh0YXJnZXRDbGllbnRJRCk7XG4gICAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jdXN0b21lckRldGFpbCA9IHRoaXMuZW1wdHlDdXN0b21lcjtcbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKHRoaXMuY3VzdG9tZXJEZXRhaWwpO1xuICAgIH1cblxuXG4gIH1cblxuICAvKiBpbnRlZ3JhdGlvbiBjb250YWN0LWxpc3QgKi9cbiAgcHJpdmF0ZSBhc3luYyByZWZyZXNoQ29udGFjdE5vdGUoaXNBcHBlbmQ6IGJvb2xlYW4pIHtcblxuICAgIGlmICh0aGlzLmN1c3RvbWVyQ2xpZW50SUQpIHtcbiAgICAgIC8vaWYgYXBwZW5kIGRhdGEgd2lsbCBuZXh0IHBhZ2VcbiAgICAgIGlmICghaXNBcHBlbmQpIHRoaXMuY29udGFjdExpc3RQYWdlSW5mby5yZXNldFBhZ2UoKTtcblxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckNvbnRhY3ROb3RlKHRoaXMuY3VzdG9tZXJEZXRhaWwuQ2xpZW50SUQsIHRoaXMuY29udGFjdExpc3RQYWdlSW5mbykudG9Qcm9taXNlKCk7XG4gICAgICBpZiAoaXNBcHBlbmQpXG4gICAgICAgIHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdCA9IHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdC5jb25jYXQoZGF0YSk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdCA9IGRhdGE7XG5cbiAgICAgIGNvbnNvbGUuZGVidWcoJ3JlZnJlc2hDb250YWN0Tm90ZSBzdWNjZXNzIGlzUmVmcmVzaENvbnRhY3RMaXN0IHN0YXR1cycpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q3VzdG9tZXJMaXN0KGxpc3Q6IEFycmF5PEN1c3RvbWVySXRlbT4pOiBBcnJheTxDdXN0b21lckl0ZW0+IHtcblxuICAgIGlmICh0aGlzLmN1c3RvbWVyU2hvd1J1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbWVyU2hvd1J1bGUuc29ydEN1c3RvbWVyTGlzdChsaXN0KTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBsaXN0Lm1hcCh4ID0+IHguY2xvbmUoKSkuc29ydCgobjEsIG4yKSA9PiB7XG4gICAgICAgIGxldCBuMV9uYW1lID0gU3RyaW5nVXRpbHMuaXNFbXB0eShuMS5sYXN0TmFtZSkgPyAnJyA6IG4xLmxhc3ROYW1lO1xuICAgICAgICBsZXQgbjJfbmFtZSA9IFN0cmluZ1V0aWxzLmlzRW1wdHkobjIubGFzdE5hbWUpID8gJycgOiBuMi5sYXN0TmFtZTtcbiAgICAgICAgcmV0dXJuIG4xX25hbWUubG9jYWxlQ29tcGFyZShuMl9uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cblxuICBvbkdldEN1c3RvbWVyQ29udGFjdExpc3RCeUlEKGNsaWVudElEKSB7XG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJDb250YWN0Tm90ZShjbGllbnRJRCwgdGhpcy5jb250YWN0TGlzdFBhZ2VJbmZvKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5jdXN0b21lckNvbnRhY3RMaXN0ID0gZGF0YTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb25HZXRDdXN0b21lckRldGFpbEJ5SUQoY2xpZW50SUQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEIGNsaWVudElEOlwiLCBjbGllbnRJRCk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lckRldGFpbChjbGllbnRJRCkudG9Qcm9taXNlKCk7XG4gICAgY29uc29sZS5sb2coXCJvbkdldEN1c3RvbWVyRGV0YWlsQnlJRCBkYXRhOlwiLCBkYXRhKTtcbiAgICB0aGlzLmN1c3RvbWVyRGV0YWlsID0gZGF0YTtcbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldEN1cnJlbnRDdXN0b21lckRldGFpbChkYXRhKTtcbiAgfVxuXG4gIHRvZ2dsZVNlYXJjaCgpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB0aGlzLmNsYXNzU2VhcmNoID0gdGhpcy5pc09wZW4gPyAnIGFjdGl2ZScgOiAnJ1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIC8vIHRoaXMuZmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYS5rZXl3b3JkID0gJyc7XG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldENyaXRlcmlhKHRoaXMuZmlsdGVyQ3JpdGVyaWEpO1xuXG4gICAgICB0aGlzLnJlZnJlc2hDdXN0b21lckxpc3QoZmFsc2UpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gc2VhcmNoIGtleXByZXNzXG4gIHNlYXJjaEN1c3RvbWVyTmFtZShuYW1lKSB7XG4gICAgY29uc29sZS5kZWJ1Zygnc2VhcmNoQ3VzdG9tZXJOYW1lJywgbmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckNyaXRlcmlhLmtleXdvcmQgPSBuYW1lO1xuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3JpdGVyaWEodGhpcy5maWx0ZXJDcml0ZXJpYSk7XG4gICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlKTtcblxuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfVxuXG5cbiAgLy93aGVuIGN1c3RvbWVyLWxpc3QgY2xpY2sgZ2V0IGNsaWNrIEl0ZW1cbiAgYXN5bmMgb25DaGFuZ2VDdXN0b21lcihjdXN0b21lckl0ZW06IEN1c3RvbWVySXRlbSkge1xuXG4gICAgdGhpcy5jbGlja0l0ZW0gPSBjdXN0b21lckl0ZW07XG5cblxuXG4gICAgLy9nZXQgQ3VzdG9tZXJEZXRhaWxcbiAgICBhd2FpdCB0aGlzLm9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEKGN1c3RvbWVySXRlbS5jbGllbnRJRCk7XG4gICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcblxuICB9XG5cbiAgLy93aGVuIGN1c3RvbWVyLWxpc3QgZmV0Y2ggbmV4dCByZWNvcmRcbiAgb25DdXN0b21lckxvYWQoKSB7XG4gICAgdGhpcy5jdXN0b21lckxpc3RQYWdlSW5mby5uZXh0UGFnZSgpO1xuXG4gICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KHRydWUpO1xuICB9XG5cbiAgLy93aGVuIGN1c3RvbWVyLWxpc3Qgc3luYyBkYXRhIHRvIGJhY2tlbmRcbiAgb25DdXN0b21lclJlZnJlc2goKSB7XG4gICAgdGhpcy5yZWZyZXNoQ3VzdG9tZXJMaXN0KGZhbHNlLCB0aGlzLmN1c3RvbWVyQ2xpZW50SUQpO1xuICB9XG5cbiAgZGVsZXRlQ3VzdG9tZXIoY3VzdG9tZXJDbGllbnRJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0Rpc3BsYXlEZWxDdXN0b21lclBvcHVwID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGRvRGVsZXRlQ3VzdG9tZXIoKSB7XG4gICAgbGV0IF9jbGllbnRJRCA9IHRoaXMuY3VzdG9tZXJEZXRhaWwuQ2xpZW50SUQ7XG4gICAgdGhpcy5jdXN0b21lckxpc3QgPSB0aGlzLmN1c3RvbWVyTGlzdC5maWx0ZXIoeCA9PiB4LmNsaWVudElEICE9IHRoaXMuY3VzdG9tZXJEZXRhaWwuQ2xpZW50SUQpO1xuICAgIGlmICh0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY3VzdG9tZXJEZXRhaWwgPSB0aGlzLmVtcHR5Q3VzdG9tZXI7XG4gICAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldEN1cnJlbnRDdXN0b21lckRldGFpbCh0aGlzLmN1c3RvbWVyRGV0YWlsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLm9uR2V0Q3VzdG9tZXJEZXRhaWxCeUlEKHRoaXMuY3VzdG9tZXJMaXN0WzBdLmNsaWVudElEKVxuICAgICAgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5jdXN0b21lclNlcnZpY2UuZGVsZXRlQ3VzdG9tZXJQcm9maWxlKF9jbGllbnRJRCkudG9Qcm9taXNlKCk7XG4gICAgY29uc29sZS5sb2coXCJjdXN0b21lclNlcnZpY2UuZG9EZWxldGVDdXN0b21lcigpXCIsIGRhdGEpO1xuXG4gICAgaWYgKGRhdGEuc3RhdHVzKSB7XG5cbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0Q3VzdG9tZXJMaXN0KHRoaXMuY3VzdG9tZXJMaXN0KTtcblxuICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNEaXNwbGF5RGVsZXRlUG9wdXAgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFwcG9pbnRtZW50KGN1c3RvbWVyQ2xpZW50SUQ6IHN0cmluZykge1xuICAgIGxldCBjdXJyZW50VGltZTsgLy8gYWRqdXN0IHRpbWUgdG8gbmV4dCBpbnRlcnZhbFxuICAgIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLnZpZXdEYXRlKSwgZ2V0TW9udGgodGhpcy52aWV3RGF0ZSksIGdldERhdGUodGhpcy52aWV3RGF0ZSksIGdldEhvdXJzKG5ldyBEYXRlKCkpLCBnZXRNaW51dGVzKG5ldyBEYXRlKCkpKTtcbiAgICBjdXJyZW50VGltZSA9IGFkZE1pbnV0ZXMoY3VycmVudFRpbWUsICg1IC0gZ2V0TWludXRlcyhjdXJyZW50VGltZSkgJSA1KSk7ICAvLyBhZGp1c3QgbWludXRlcyB0byBuZXh0IDUgbWludXRlc1xuICAgIGN1cnJlbnRUaW1lID0gYWRkSG91cnMoY3VycmVudFRpbWUsIDEpO1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbCA9IG5ldyBDYWxlbmRhckV2ZW50RGV0YWlsKCcnLCAnJywgY3VzdG9tZXJDbGllbnRJRCwgJycsICcnLCBudWxsLCAnTicsIGN1cnJlbnRUaW1lLCBhZGRNaW51dGVzKGN1cnJlbnRUaW1lLCAxNSksICdZJywgJzgnLCBudWxsLCAnJywgJycsIG51bGwpO1xuICAgIGxldCBxdWVyeURhdGUgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMudmlld0RhdGUpLCBnZXRNb250aCh0aGlzLnZpZXdEYXRlKSwgZ2V0RGF0ZSh0aGlzLnZpZXdEYXRlKSwgMCwgMCwgMCk7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudExpc3QocXVlcnlEYXRlLCBzdWJNaW51dGVzKGFkZERheXModGhpcy52aWV3RGF0ZSwgMSksIDEpLCAnJylcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMudmlld0RhdGVDYWxlbmRhckV2ZW50TGlzdCA9IGRhdGE7XG4gICAgICAgIHRoaXMub25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKHRydWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkNsaWNrQXBwb2ludG1lbnRTYXZlKCkge1xuICAgIHRoaXMuaXNTYXZlQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgb25Ub2dnbGVBcHBvaW50bWVudE1vZGFsKHZhbCkge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aGlzLmlzQ2FsZW5kYXJFZGl0TWV0YURhdGFEb25lID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNFeHBhbmRFZGl0ID0gdmFsO1xuICB9XG5cbiAgb25TYXZlQ2FsZW5kYXJFdmVudChyZXNwKSB7XG4gICAgbGV0IHR5cGUgPSByZXNwLnR5cGU7XG4gICAgbGV0IGRhdGEgPSByZXNwLmRhdGE7XG4gICAgY29uc29sZS5sb2coXCJjYWxlbmRhckV2ZW50RGV0YWlsOiBcIiwgZGF0YSk7XG4gICAgaWYgKHR5cGUgIT09ICdmYWlsJykge1xuICAgICAgdGhpcy5pc0Rpc3BsYXlTYXZlUG9wdXAgPSB0cnVlO1xuICAgICAgdGhpcy5vblRvZ2dsZUFwcG9pbnRtZW50TW9kYWwoZmFsc2UpO1xuICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudERldGFpbChkYXRhLkNsaWVudElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJFdmVudERldGFpbCA9IGRhdGE7XG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmlzU2F2ZUNsaWNrID0gZmFsc2U7XG4gIH1cblxuICBhZGRDdXN0b21lcigpIHtcblxuICAgIGxldCBkZXRhaWwgPSB7fTtcbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldEN1cnJlbnRDdXN0b21lckRldGFpbChkZXRhaWwpO1xuICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0U3RhdGUoQ1VTVE9NRVJfU1RBVEUuRURJVCk7XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcIkN1c3RvbWVyRWRpdFwiKTtcbiAgfVxuXG4gIGVkaXRDdXN0b21lcihjdXN0b21lckNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1c3RvbWVyU3RvcmVTZXJ2aWNlLnNldFN0YXRlKENVU1RPTUVSX1NUQVRFLkVESVQpO1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyRGV0YWlsKGN1c3RvbWVyQ2xpZW50SUQpLnN1YnNjcmliZSgoZGV0YWlsOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZWRpdEN1c3RvbWVyOlwiLCBkZXRhaWwpO1xuICAgICAgY29uc29sZS5sb2coXCJTdHJpbmdpZnk6XCIsIEpTT04uc3RyaW5naWZ5KGRldGFpbCkpO1xuICAgICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDdXJyZW50Q3VzdG9tZXJEZXRhaWwoZGV0YWlsKTtcblxuICAgICAgLy9yb21vdmUgYm9keSBmaXhlZFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkLWJvZHktZnVsbC1wYWdlXCIpO1xuICAgICAgfSwgMjAwKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiQ3VzdG9tZXJFZGl0XCIpXG4gICAgfSlcblxuICB9XG5cblxuICBmb2xsb3dDaGFuZ2UoZGV0YWlsKSB7XG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UudXBkYXRlQ3VzdG9tZXJGb2xsb3dTdGF0dXMoZGV0YWlsLmNsaWVudElELCBkZXRhaWwuaXNGb2xsb3cpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyQ3JpdGVyaWEpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuY2hlY2tJbkZpbHRlckNyaXRlcmlhKGRldGFpbC5jbGllbnRJRCwgdGhpcy5maWx0ZXJDcml0ZXJpYSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICB0aGlzLmN1c3RvbWVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY2xpZW50SUQgPT0gZGV0YWlsLmNsaWVudElEKSB7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZygnY2hhbmdlIGlzSGlnaExpZ2h0IHN0YXR1cyBpbiBmb2xsb3cnKTtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNIaWdoTGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmlzSGlnaExpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1c3RvbWVyTGlzdC5maWx0ZXIoeCA9PiB4LmNsaWVudElEID09IGRldGFpbC5jbGllbnRJRCkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUuaXNGb2xsb3cgPSBkZXRhaWwuaXNGb2xsb3c7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgYWRkTm90ZSgpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdhZGROb3RlJyk7XG4gICAgdGhpcy5jdXJyZW50RWRpdE5vdGUgPSB7XG4gICAgICBDbGllbnRJRDogJycsXG4gICAgICBDdXN0b21lckNsaWVudElEOiB0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElELFxuICAgICAgTm90ZVRpbWU6IERhdGUubm93KCksXG4gICAgICBEaXNwbGF5RGF0ZTogdGhpcy50b05vdGVUaW1lKG5ldyBEYXRlKCkpXG4gICAgfTtcbiAgICB0aGlzLmlzUG9wdXBFZGl0Tm90ZSA9IHRydWU7XG4gIH1cblxuICBlZGl0Tm90ZShub3RlOiBhbnkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdlZGl0Tm90ZScsIG5vdGUpO1xuXG4gICAgdGhpcy5jdXJyZW50RWRpdE5vdGUgPSBPYmplY3QuYXNzaWduKHt9LCBub3RlLCB7XG4gICAgICBDdXN0b21lckNsaWVudElEOiB0aGlzLmN1c3RvbWVyRGV0YWlsLkNsaWVudElELFxuICAgICAgTm90ZVRpbWU6IERhdGUubm93KCksXG4gICAgICBEaXNwbGF5RGF0ZTogdGhpcy50b05vdGVUaW1lKG5ldyBEYXRlKCkpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VycmVudEVkaXROb3RlOlwiLCB0aGlzLmN1cnJlbnRFZGl0Tm90ZSlcbiAgICB0aGlzLmlzUG9wdXBFZGl0Tm90ZSA9IHRydWU7XG5cbiAgfVxuXG4gIGRpc3BsYXlOb3RlKG5vdGU6IGFueSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2Rpc3BsYXlOb3RlJywgbm90ZSk7XG4gICAgdGhpcy5jdXN0b21lckNvbnRhY3REZXRhaWwgPSBub3RlO1xuXG4gICAgLy8gYWRkIGNsaWNrIGN1c3RvbWVyIG5hbWVcbiAgICB0aGlzLmN1c3RvbWVyQ29udGFjdERldGFpbC5OYW1lID0gdGhpcy5jb252ZXJ0TmFtZVRvU2hvdyh0aGlzLmN1c3RvbWVyRGV0YWlsLkZpcnN0TmFtZSwgdGhpcy5jdXN0b21lckRldGFpbC5MYXN0TmFtZSk7XG5cbiAgICB0aGlzLmlzUG9wdXBOb3RlRGV0YWlsID0gdHJ1ZTtcbiAgfVxuXG5cbiAgZGVsZXRlTm90ZShub3RlOiBhbnkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdkZWxldGVOb3RlJywgbm90ZSk7XG4gICAgdGhpcy5jdXJyZW50RWRpdE5vdGUgPSBub3RlO1xuXG4gICAgdGhpcy5pc1BvcHVwRGVsZXRlTm90ZSA9IHRydWU7XG4gIH1cblxuICBkb0RlbGV0ZUNvbnRhY3QoKSB7XG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZGVsZXRlQ3VzdG9tZXJDb250YWN0KHRoaXMuY3VycmVudEVkaXROb3RlLkNsaWVudElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXJTZXJ2aWNlLmRlbGV0ZU5vdGUoKVwiLCBkYXRhKTtcblxuICAgICAgaWYgKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdCA9IHRoaXMuY3VzdG9tZXJDb250YWN0TGlzdC5maWx0ZXIoeCA9PiB4LkNsaWVudElEICE9IHRoaXMuY3VycmVudEVkaXROb3RlLkNsaWVudElEKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RWRpdE5vdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmlzRGlzcGxheURlbGV0ZVBvcHVwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU2F2ZU5vdGUoZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRhY3RTYXZlU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBvblNhdmVOb3RlRmluaXNoKG5vdGUpIHtcbiAgICB0aGlzLmlzUG9wdXBFZGl0Tm90ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcblxuICAgIHRoaXMuaXNTaG93RGV0YWlsU2Nyb2xsID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzU2hvd0RldGFpbFNjcm9sbCA9IHRydWU7XG4gICAgICB0aGlzLnJlZnJlc2hDb250YWN0Tm90ZShmYWxzZSk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIGRvQWN0aW9uKGFjdGlvbikge1xuXG4gICAgY29uc29sZS5sb2coXCJkb2FjdGlvbjogXCIsIGFjdGlvbik7XG4gICAgaWYgKHRoaXMubmVlZENvbmZpcm1Qb3B1cCkge1xuICAgICAgdGhpcy5pc0Rpc3BsYXlDb25maXJtQWxlcnRQb3B1cCA9IHRydWU7XG4gICAgICB0aGlzLmlzUG9wdXBDb25maXJtRGlzYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmNvbmZpcm1BY3Rpb24gPSBhY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGFjdGlvbiA9PSAnYWRkJykge1xuICAgICAgICB0aGlzLmFkZEN1c3RvbWVyKCk7XG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PSAnaW1wb3J0Jykge1xuICAgICAgICB0aGlzLmltcG9ydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbmZpcm1Qb3B1cCgpIHtcbiAgICB0aGlzLmlzUG9wdXBDb25maXJtRGlzYWJsZSA9IHRydWU7XG4gICAgdGhpcy5pc0Rpc3BsYXlDb25maXJtQWxlcnRQb3B1cCA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmICh0aGlzLmNvbmZpcm1BY3Rpb24gPT09ICdhZGQnKVxuICAgICAgdGhpcy5hZGRDdXN0b21lcigpO1xuICAgIGVsc2UgaWYgKHRoaXMuY29uZmlybUFjdGlvbiA9PSAnaW1wb3J0Jykge1xuICAgICAgdGhpcy5pbXBvcnQoKTtcbiAgICB9XG4gICAgdGhpcy5jb25maXJtQWN0aW9uID0gbnVsbDtcbiAgfVxuXG5cbiAgLy8gZGV0ZWN0IGNvbmZpcm0gcG9wdXAgdG8gY29udGVudCBib3R0bSBhbmQgdGhlIGJ0biBjYW4gY2xpY2tcbiAgZGV0ZWN0U2Nyb2xsKGlzQnRtKSB7XG4gICAgY29uc29sZS5sb2coJ2luIGRldGVjdCBzY3JvbGw9PT0nLCBpc0J0bSk7XG4gICAgaWYgKGlzQnRtKSB7XG4gICAgICB0aGlzLmlzUG9wdXBDb25maXJtRGlzYWJsZSA9IGZhbHNlXG4gICAgfVxuICB9XG5cblxuXG4gIHByaXZhdGUgYXN5bmMgaW1wb3J0UG9wdXAoKSB7XG4gICAgbGV0IGltcG9ydExpc3Q7XG4gICAgdHJ5IHtcbiAgICAgIGltcG9ydExpc3QgPSBhd2FpdCB0aGlzLmRldmljZVNlcnZpY2Uuc2VhcmNoQ29udGFjdHNCeU5hbWUoXCJcIik7XG4gICAgICBjb25zb2xlLmRlYnVnKCdpbXBvcnQgcmVzdWx0ICcsIGltcG9ydExpc3QpO1xuICAgICAgdGhpcy5pbXBvcnRDb250cmFjdE1hcC5jbGVhcigpO1xuICAgICAgLy9yZWdyb3VwXG4gICAgICBpbXBvcnRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoZWxlbWVudC5MYXN0TmFtZSk7XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmN1c3RvbWVySW1wb3J0RGlzcGxheS5jb252ZXJ0KGVsZW1lbnQpO1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuY29udmVydE5hbWVUb1Nob3coZWxlbWVudC5GaXJzdE5hbWUsIGVsZW1lbnQuTGFzdE5hbWUpLnRyaW0oKTtcbiAgICAgICAgaWYgKG5hbWUgIT0gbnVsbCAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgZmlyc3RXb3JkID0gbmFtZS5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgICAgZmlyc3RXb3JkID0gZmlyc3RXb3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygnZmlyc3RXb3JkID0nICsgZmlyc3RXb3JkKTtcbiAgICAgICAgICBsZXQgZ3JvdXA6IEN1c3RvbWVySW1wb3J0R3JvdXAgPSB0aGlzLmltcG9ydENvbnRyYWN0TWFwLmdldChmaXJzdFdvcmQpO1xuICAgICAgICAgIGlmIChncm91cCA9PSB1bmRlZmluZWQpIGdyb3VwID0gbmV3IEN1c3RvbWVySW1wb3J0R3JvdXAoZmlyc3RXb3JkKTtcbiAgICAgICAgICBncm91cC5hZGRJdGVtKGVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuc2V0KGZpcnN0V29yZCwgZ3JvdXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2ltcG9ydENvbnRyYWN0TWFwJywgdGhpcy5pbXBvcnRDb250cmFjdE1hcCk7XG4gICAgICB0aGlzLmlzUG9wdXBJbXBvcnQgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhdGNoIGVycm9yJywgZXJyb3IpO1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25NZ3IucHVzaE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlLkNvbnRhY3RQZXJtaXNzaW9uRXJyb3IsIG51bGwpO1xuICAgICAgaWYgKHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpID09ICdpT1MnKSB7XG4gICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5ncmFudENvbnRhY3RQZXJtaXNzaW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBpbXBvcnQoKSB7XG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRTdGF0ZShDVVNUT01FUl9TVEFURS5JTVBPUlQpO1xuICB9XG5cbiAgLy9jb250cm9sIGltcG9ydCBwb3B1cCBpcyBkaXNwbGF5XG4gIGRpc3BsYXlJbXBvcnRQb3B1cChpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzUG9wdXBJbXBvcnQgPSBpc1Nob3c7XG4gIH1cblxuICAvL3doZW4ga2V5cHJlc3Mga2V5d29yZCByZWZyZXNoIGNvbnRyYWN0IGxpc3RcbiAgcmVmcmVzaEltcG9ydChrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmltcG9ydFNlYXJjaEtleXdvcmQgPSBrZXl3b3JkO1xuICAgIGxldCBsb3dlckNhc2VLZXl3b3JkID0gdGhpcy5pbXBvcnRTZWFyY2hLZXl3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5pbXBvcnRDb250cmFjdE1hcC5mb3JFYWNoKChncm91cDogQ3VzdG9tZXJJbXBvcnRHcm91cCwgZ3JvdXBOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyb3VwTmFtZSwgZ3JvdXApO1xuXG4gICAgICBncm91cC5pc1Nob3cgPSBmYWxzZTtcbiAgICAgIGdyb3VwLmdldEl0ZW1zLmZvckVhY2goKGl0ZW06IENvbnRhY3RJdGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ2l0ZW0nLGl0ZW0pO1xuICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gaXRlbS5MYXN0TmFtZSArIGl0ZW0uRmlyc3ROYW1lO1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKG5hbWUpO1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKGxvd2VyQ2FzZUtleXdvcmQpID09PSAtMSkge1xuICAgICAgICAgIGl0ZW0uaXNTaG93ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaXRlbS5pc1Nob3cgPSB0cnVlO1xuICAgICAgICAgIGdyb3VwLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBvbkNsb3NlSW1wb3J0UG9wdXAoKSB7XG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRTdGF0ZShDVVNUT01FUl9TVEFURS5ESVNQTEFZKTtcbiAgICB0aGlzLmltcG9ydFNlYXJjaEtleXdvcmQgPSAnJztcbiAgfVxuXG4gIGRvSW1wb3J0KCkge1xuICAgIHRoaXMuc2hvd0N1c3RvbWVyTGlzdCA9IGZhbHNlO1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmltcG9ydENvbnRhY3QodGhpcy5pbXBvcnRDb250YWN0TGlzdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgLy9hbGVydChcIjFcIitKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKS5zdGF0dXMpO1xuICAgICAgLy/liqDpu57mlbhcbiAgICAgIGlmICh0aGlzLmFkZFByb2dyZXNzUG9pbnQgJiYgdGhpcy5pbXBvcnRDb250YWN0TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYWRkUHJvZ3Jlc3NQb2ludC5hZGRDdXN0b21lclBvaW50KHRoaXMuaW1wb3J0Q29udGFjdExpc3QubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VzdG9tZXJTdG9yZVNlcnZpY2Uuc2V0U3RhdGUoQ1VTVE9NRVJfU1RBVEUuRElTUExBWSk7XG4gICAgICBsZXQgc3RhdHVzID0gKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKS5zdGF0dXM7XG5cbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgLy9jbGVhciBsaXN0IGZpcnN0LCBwcmV2ZW50IGxhenlsb2FkaW5nIGNhY2hlXG4gICAgICAgIHRoaXMuY3VzdG9tZXJMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc2hvd0N1c3RvbWVyTGlzdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQb3B1cEltcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGlzcGxheUltcG9ydFNhdmVQb3B1cCA9IHRydWU7XG4gICAgICAgIHRoaXMubW9iaWxlUmVzdWx0U2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuaW1wb3J0U2VhcmNoS2V5d29yZCA9ICcnO1xuXG4gICAgICAgIC8vcmVmcmVzaCBjdXN0b21lciBsaXN0XG4gICAgICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG5cblxuICAvKiBjdXN0b21lci1pbXBvcnQqL1xuICBvbkltcG9ydEN1c3RvbWVyKGltcG9ydEl0ZW1zKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnaW1wb3J0SXRlbXMnLCBpbXBvcnRJdGVtcyk7XG5cbiAgICB0aGlzLmltcG9ydENvbnRhY3RMaXN0ID0gaW1wb3J0SXRlbXM7XG4gICAgdGhpcy5tb2JpbGVSZXN1bHRTaXplID0gaW1wb3J0SXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgLy9jYWxsIGN1c3RvbWVyIGZ1bmN0aW9uXG4gIGNhbGxDdXN0b21lcihjdXN0b21lckNsaWVudElEOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdjYWxsQ3VzdG9tZXIgPSAnICsgY3VzdG9tZXJDbGllbnRJRCk7XG4gICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJDb250YWN0VGVsKGN1c3RvbWVyQ2xpZW50SUQpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuY2FsbFBob25lVGVsQXJyYXkgPSBkYXRhO1xuXG4gICAgICAvL2NoZWNrIG51bWJlciBhcnJheSBpcyBzaW5nbGVcbiAgICAgIGlmICh0aGlzLmNhbGxQaG9uZVRlbEFycmF5Lmxlbmd0aCAhPSAwKSB7XG5cbiAgICAgICAgLy9vbmx5IG9uZSBudW1iZXIganVzdCB0byBjYWxsIG91dFxuICAgICAgICBpZiAodGhpcy5jYWxsUGhvbmVUZWxBcnJheS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgIHRoaXMuY2FsbFBob25lKHRoaXMuY2FsbFBob25lVGVsQXJyYXlbMF0udGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBDYWxsUGhvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy9jYW5jZWwgY2FsbHBob25lIHBvcHVwXG4gIGNhbmNlbENhbGxQaG9uZSgpIHtcbiAgICB0aGlzLmlzUG9wdXBDYWxsUGhvbmUgPSAhdGhpcy5pc1BvcHVwQ2FsbFBob25lO1xuICB9XG5cbiAgLy9jYWxsIG51bWJlciBmcm9tIHBob25lXG4gIGNhbGxQaG9uZSh0ZWxOdW1iZXI6IHN0cmluZykge1xuICAgIGNvbnNvbGUuZGVidWcoJ2NhbGxQaG9uZScsIHRlbE51bWJlcik7XG5cblxuICAgIC8vY2FsbCBwaG9uZSBjbG9zZSBwb3B1cFxuICAgIGlmICh0aGlzLmlzUG9wdXBDYWxsUGhvbmUpIHRoaXMuaXNQb3B1cENhbGxQaG9uZSA9ICF0aGlzLmlzUG9wdXBDYWxsUGhvbmU7XG5cblxuICAgIHdpbmRvdy5vcGVuKCd0ZWw6JyArIHRlbE51bWJlciwgJ19zeXN0ZW0nKTtcblxuICAgIC8vcG9wdXAgY29udGFjdCBub3RlXG4gICAgc2V0VGltZW91dCgoZnVuKSA9PiB7XG4gICAgICB0aGlzLmFkZE5vdGUoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG5cbiAgLy9vcGVuIGZpbHRlciBwb3B1cFxuICBmaWx0ZXIoKSB7XG4gICAgdGhpcy5pc1BvcHVwRmlsdGVyID0gdHJ1ZTtcbiAgfVxuXG4gIC8vY2xlYXIgZmlsdGVyIGl0ZW1cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5jbGVhclN1YmplY3QubmV4dCgpO1xuICB9XG5cblxuICAvL2ZpbHRlciBjdXN0b21lciBsaXN0IGFuZCBjbG9zZSBwb3B1cFxuICBkb0ZpbHRlcigpIHtcbiAgICB0aGlzLnNhdmVGaWx0ZXJTdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIGRvbmVDcml0ZXJpYShjcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2RvbmVDcml0ZXJpYScsIGNyaXRlcmlhKTtcbiAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gY3JpdGVyaWE7XG4gICAgdGhpcy5pc1BvcHVwRmlsdGVyID0gZmFsc2U7XG4gICAgdGhpcy5jdXN0b21lclN0b3JlU2VydmljZS5zZXRDcml0ZXJpYShjcml0ZXJpYSk7XG4gICAgaWYgKGNyaXRlcmlhLmdldE9wdGlvbihcIkFzUHJlc2V0XCIpKSB7XG4gICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5zYXZlRmlsdGVyQ3JpdGVyaWEoY3JpdGVyaWEpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZG9uZUNyaXRlcmlhIHNhdmVGaWx0ZXJDcml0ZXJpYScsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEN1c3RvbWVyTGlzdChmYWxzZSk7XG4gIH1cblxuICBsb2FkUHJlc2V0Q3JpdGVyaWEoKSB7XG4gICAgLy9jaGVjayBoYXMgcHJlc2V0XG4gICAgbGV0IGNyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcblxuICAgIHJldHVybiB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRGaWx0ZXJDcml0ZXJpYVByZXNldCgpLnRvUHJvbWlzZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdnZXRmaWx0ZXJDcml0ZXJpYVByZXNldCcsIGRhdGEpO1xuXG4gICAgICBpZiAoZGF0YSAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBjb2x1bW4gaW4gZGF0YSkge1xuICAgICAgICAgIGxldCB2YWx1ZXMgPSBkYXRhW2NvbHVtbl07XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZygnY29sdW1uJywgY29sdW1uLCAnYXJyYXlzJywgdmFsdWVzKTtcbiAgICAgICAgICBjcml0ZXJpYS5hZGRDcml0ZXJpYUNvbHMoY29sdW1uLCB2YWx1ZXMpO1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgIGNyaXRlcmlhLnNldE9wdGlvbihcIkFzUHJlc2V0XCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNyaXRlcmlhLnNldE9wdGlvbihcIkFzUHJlc2V0XCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlckNyaXRlcmlhID0gY3JpdGVyaWE7XG5cbiAgICAgIH1cbiAgICB9KTtcblxuXG4gIH1cblxuXG4gIGNhbmNlbERlbGV0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnY2FuY2VsRGVsZXRlJyk7XG4gIH1cblxuICAvLyByZWZyZWFzaCBjb250ZW50XG4gIHJlZnJlc2hDb250ZW50KCkge1xuICAgIC8vc2V0IHRpbWVvdXQgZm9yIHJlZnJlc2ggYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVmcmVzaEZpbmlzaENvbnRlbnQgPSB0cnVlO1xuICAgIH0sIDgwMCk7XG5cbiAgfVxuXG5cbiAgLy8gbG9hZGluZyBjb250YWN0IG5vdGUgXG4gIGFzeW5jIGxvYWRDb250ZW50KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRlbnQgbG9hZGluZyB0aGlzLmN1c3RvbWVyTGlzdC5sZW5ndGg6ICcsIHRoaXMuY3VzdG9tZXJMaXN0Lmxlbmd0aCk7XG4gICAgaWYgKHRoaXMuY3VzdG9tZXJMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29udGFjdExpc3RQYWdlSW5mby5uZXh0UGFnZSgpO1xuICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoQ29udGFjdE5vdGUodHJ1ZSk7XG4gICAgICB0aGlzLmlzTG9hZGluZ0ZpbmlzaENvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZ0ZpbmlzaENvbnRlbnQgPSB0cnVlO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgLy9pc1Nob3dDaGFuZ2VcbiAgaXNTaG93Q2hhbmdlKHZhbCkge1xuICAgIGlmICh0aGlzLmlzU2hvdyAhPT0gdmFsKSB7XG4gICAgICB0aGlzLmlzU2hvdyA9IHZhbDtcbiAgICAgIC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnROYW1lVG9TaG93KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21lclV0aWxzLmNvbnZlcnROYW1lVG9TaG93KGZpcnN0TmFtZSwgbGFzdE5hbWUpO1xuICB9XG5cbiAgcHVibGljIHRvTm90ZVRpbWUodGltZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLnNob3dSdWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0RGF0ZUFuZFRpbWUodGltZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZVN0cmluZyh0aW1lLCAnTU0vZGQveXl5eSBISDptbScpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FsZW5kYXJFZGl0TWV0YURhdGFEb25lKCkge1xuICAgIHRoaXMuaXNDYWxlbmRhckVkaXRNZXRhRGF0YURvbmUgPSB0cnVlO1xuICB9XG5cblxuICBmaWx0ZXJDcml0ZXJpYVBvcHVwQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS53YXJuKCdmaWx0ZXJDcml0ZXJpYVBvcHVwQ2hhbmdlIGV2ZW50OiAnLCBldmVudCk7XG4gICAgdGhpcy5pc1BvcHVwRmlsdGVyID0gZXZlbnQ7XG4gICAgaWYgKHRoaXMuaXNQb3B1cEZpbHRlcikge1xuICAgICAgdGhpcy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMuZmlsdGVyQ3JpdGVyaWEuY2xvbmUoKTtcbiAgICB9XG4gIH1cblxuXG59XG4iXX0=