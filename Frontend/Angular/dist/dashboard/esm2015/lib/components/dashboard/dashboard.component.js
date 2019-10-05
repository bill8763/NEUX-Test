/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { addDays, subDays, startOfDay, endOfDay } from 'date-fns';
import { ConfigToken, TranslateService, ProfileCodeService, Language, PageInfo, SelectOption, DefaultLoginMgr, DataSyncService, NotificationMgr } from '@allianzSND/core';
import { CustomerService, CalendarService, CustomerFilterCriteria, CustomerUtils } from '@allianzSND/integration-calendar-customer';
export class DashboardComponent {
    /**
     * @param {?} customerUtils
     * @param {?} dashboardService
     * @param {?} calendarService
     * @param {?} customerService
     * @param {?} changeDetector
     * @param {?} translateService
     * @param {?} profileCodeService
     * @param {?} loginMgr
     * @param {?} dataSyncService
     * @param {?} notificationMgr
     * @param {?} APP_CONFIG
     */
    constructor(customerUtils, dashboardService, calendarService, customerService, changeDetector, translateService, profileCodeService, loginMgr, dataSyncService, notificationMgr, APP_CONFIG) {
        this.customerUtils = customerUtils;
        this.dashboardService = dashboardService;
        this.calendarService = calendarService;
        this.customerService = customerService;
        this.changeDetector = changeDetector;
        this.translateService = translateService;
        this.profileCodeService = profileCodeService;
        this.loginMgr = loginMgr;
        this.dataSyncService = dataSyncService;
        this.notificationMgr = notificationMgr;
        this.APP_CONFIG = APP_CONFIG;
        this.hello_str = '';
        this.isLoadingFinish = true;
        this.isRefreshFinish = true;
        this.isLazyLoading = true;
        this.isMobilePopupOpen = false;
        this.dashboardMessageList = [];
        this.calendarEventList = [];
        this.calendarEventMonthList = [];
        this.birthdayList = [];
        this.language = new Language();
        this.todate = new Date();
        this.alertAutoDeleteCustomer = [];
        this.alertOverTimeList = [];
        this.isDisplayDeleteRemind = false;
        this.isDisplayUpdateRemind = false;
        this.showCalendarList = [];
        this.messagePageInfo = new PageInfo();
        // calendar
        this.isExpandDetail = false;
        this.isCalendarDelete = false;
        this.isPopupDeleteSuccess = false;
        this.isExpandEdit = false;
        this.isDisplaySavePopup = false;
        this.translateMap = new Map();
        this.optionMap = new Map();
        this.isSaveClick = false;
        // translate
        this.activityTypeList = []; // DB中所有activityType
        this.alertTypeList = [];
        this.dayTypesList = ['Cross_Day', 'All_Day'];
        this.weekdaysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.noSchedule = 'No_Schedule';
        //calendar end
        this.customerClientMap = new Map();
        this.customerItemList = [];
        this.customerClientName = '';
        this.searchBirthdaySubN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchBirthdayRange.subN;
        this.searchBirthdayAddN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchBirthdayRange.addN;
        this.searchCalendarSubN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchCalendarRange.subN;
        this.searchCalendarAddN = this.APP_CONFIG[this.APP_CONFIG.ENV].DASHBOARD.SearchCalendarRange.addN;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //init calendar type
        this.messagePageInfo.pageSize = 5;
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
        this.isMobilePopupOpen = (this.windowWidth < 1024 ? true : false) && (this.dashboardService.isFirstTime());
        this.viewDate = this.todate;
        this.getLoginInfo();
        this.getCalendarList();
        this.getCustomerBirthdayList(this.todate, this.searchBirthdaySubN, this.searchBirthdayAddN);
        //get UnRead message
        this.doFilterByKeyword("UnRead", false);
        //5/24
        //this.changeDetector.detectChanges();
        this.createCustomerList();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.changeDetector.markForCheck();
        if (this.windowWidth < 1024) {
            this.isMobilePopupOpen = true;
        }
        // console.warn('Width: ', this.windowWidth);
    }
    /**
     * @private
     * @return {?}
     */
    getCalendarList() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let searchCalendarStart = subDays(this.todate, this.searchCalendarSubN);
            /** @type {?} */
            let calendarList = [];
            /** @type {?} */
            let PromiseList = [];
            for (var i = 0; i < this.searchCalendarSubN + this.searchCalendarAddN + 1; i++) {
                /** @type {?} */
                let targetDate = addDays(searchCalendarStart, i);
                PromiseList.push(new Promise((/**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */
                (res, rej) => {
                    this.getCalendarBetweenDate(startOfDay(targetDate), endOfDay(targetDate)).then((/**
                     * @param {?} data
                     * @return {?}
                     */
                    (data) => {
                        /** @type {?} */
                        let item = {
                            showDate: targetDate,
                            eventList: data,
                            isBeforeToday: startOfDay(this.todate).getTime() > startOfDay(targetDate).getTime(),
                            isToday: startOfDay(this.todate).getTime() == startOfDay(targetDate).getTime()
                        };
                        res(item);
                    }));
                })));
            }
            Promise.all(PromiseList).then((/**
             * @param {?} list
             * @return {?}
             */
            (list) => {
                this.showCalendarList = list;
                console.log("this.showCalendarList: ", this.showCalendarList);
                //5/24
                //this.changeDetector.detectChanges();
            }));
        });
    }
    // scroll load content
    /**
     * @param {?} event
     * @return {?}
     */
    loadContent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.messagePageInfo.nextPage();
            yield this.doFilterByKeyword(this.currentMessageKeyword, true);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.isLoadingFinish = true;
                this.changeDetector.detectChanges();
            }));
        });
    }
    //refreshContent
    /**
     * @param {?} event
     * @return {?}
     */
    refreshContent(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.messagePageInfo.resetPage();
            // this.getCalendarList();
            // this.getCustomerBirthdayList(this.viewDate, this.searchBirthdaySubN, this.searchBirthdayAddN);
            // await this.dataSyncService.syncFunc(["DASHBOARD"], true);
            yield this.notificationMgr.fetchMessageData();
            //get message
            // await this.getDashboardMessageList();
            yield Promise.all([this.doFilterByKeyword(this.currentMessageKeyword, false), this.getCalendarList(), this.getCustomerBirthdayList(this.viewDate, this.searchBirthdaySubN, this.searchBirthdayAddN)]);
            console.log("PromiseAll finish");
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.isRefreshFinish = true;
                //5/24
                //this.changeDetector.detectChanges();
            }), 500);
        });
    }
    /**
     * @private
     * @return {?}
     */
    getLoginInfo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((/**
             * @param {?} res
             * @param {?} rej
             * @return {?}
             */
            (res, rej) => {
                this.loginMgr.getLoginInfo().subscribe((/**
                 * @param {?} info
                 * @return {?}
                 */
                (info) => {
                    this.dashboardLoginInfo = info;
                    console.warn('this.dashboardLoginInfo: ', this.dashboardLoginInfo);
                    res();
                }));
            }));
        });
    }
    /**
     * @param {?} keyword
     * @param {?} isAppend
     * @return {?}
     */
    doFilterByKeyword(keyword, isAppend) {
        // console.log("keyword: " ,keyword);
        if (!isAppend) {
            this.messagePageInfo.resetPage();
        }
        this.currentMessageKeyword = keyword;
        return this.dashboardService.getMessageByKeyword(keyword, this.messagePageInfo).toPromise().then((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (isAppend) {
                if (data.length > 0) {
                    this.dashboardMessageList = [...this.dashboardMessageList, ...data];
                }
            }
            else {
                this.dashboardMessageList = [...data];
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChangeCommitmentStatus(event) {
        console.log("into onChangeCommitmentStatus event:", event, "messageId:", event.messageId, "keyword:", event.keyword);
        this.dashboardService.changeMessageStatus(event.messageId, "LinkStatus", "Done").toPromise().then((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
            console.log("onChangeCommitmentStatus resp", resp);
            this.doFilterByKeyword(event.keyword, false);
        }));
    }
    /**
     * @return {?}
     */
    afterDisplayDeleteRemind() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.doFilterByKeyword(this.currentMessageKeyword, false);
            this.isDisplayDeleteRemind = false;
        });
    }
    /**
     * @return {?}
     */
    afterDisplayUpdateRemind() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.doFilterByKeyword(this.currentMessageKeyword, false);
            this.isDisplayUpdateRemind = false;
        });
    }
    /**
     * @private
     * @param {?} cliendID
     * @return {?}
     */
    getCustomerAutoDelete(cliendID) {
        return this.customerService.getAutoDeleteCustomerList(cliendID);
    }
    /**
     * @private
     * @param {?} cliendID
     * @return {?}
     */
    getCustomerOverTime(cliendID) {
        return this.customerService.getOverTimeCustomerList(cliendID);
    }
    /**
     * @private
     * @param {?} targetDate
     * @param {?} subN
     * @param {?} addN
     * @return {?}
     */
    getCustomerBirthdayList(targetDate, subN, addN) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.customerService.getCustomerBirthdayList(targetDate, subN, addN).toPromise().then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.birthdayList = data;
            }));
        });
    }
    /**
     * @private
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    getCalendarBetweenDate(startDate, endDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.calendarService.getCalendarEventList(startDate, endDate, '').toPromise();
        });
    }
    /**
     * @return {?}
     */
    clickListShow() {
        this.isMobilePopupOpen = true;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    onClickMessage(message) {
        console.log("click message: ", message);
        /** @type {?} */
        let cliendID = message.clientID;
        if (message.status == 'UnRead') {
            this.dashboardService.updateMessageStatus(message.clientID, 'Reading').subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
            }));
        }
        if (message.messageType == "AutoDelete") {
            this.getCustomerAutoDelete(cliendID).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.alertAutoDeleteCustomer = data;
                this.isDisplayDeleteRemind = data.length > 0 ? true : false;
            }));
        }
        else if (message.messageType == "Overtime") {
            this.getCustomerOverTime(cliendID).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.alertOverTimeList = data;
                this.isDisplayUpdateRemind = data.length > 0 ? true : false;
            }));
        }
        this.changeDetector.detectChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickCalendarItem(event) {
        //event = {showDate: "04/24", eventList: CalendarEventDetail}
        console.log("click event: ", event);
        this.calendarItemClientID = event.eventList.clientID;
        this.viewDate = new Date(event.showDate);
        this.calendarEventList = this.showCalendarList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.showDate == event.showDate))[0].eventList;
        //console.log("calendarEventList: ", this.calendarEventList);
        console.log("viewDate: ", this.viewDate);
        this.loadCalendarEventDetail(this.calendarItemClientID);
    }
    /**
     * @private
     * @param {?} clientID
     * @return {?}
     */
    loadCalendarEventDetail(clientID) {
        this.calendarService.getCalendarEventDetail(clientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log('getCalendarEventDetail', data);
            this.calendarEventDetail = data;
            this.customerClientName = this.customerClientMap.get(this.calendarEventDetail.customerClientID);
            this.calendarEventDetail.displayActivity = this.profileCodeService.convertCode2Text('Calendar_Type', this.calendarEventDetail.activity);
            this.calendarEventDetail.displayAlert1 = this.profileCodeService.convertCode2Text('Calendar_RemindTime', this.calendarEventDetail.alert1);
            this.calendarEventDetail.displayAlert2 = this.profileCodeService.convertCode2Text('Calendar_RemindTime', this.calendarEventDetail.alert2);
            this.isExpandDetail = true;
            this.changeDetector.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    editEvent() {
        this.isExpandEdit = true;
    }
    /**
     * @return {?}
     */
    delete() {
        this.isCalendarDelete = true;
    }
    /**
     * @return {?}
     */
    onClickDeleteConfirm() {
        this.calendarService.deleteCalendarEvent(this.calendarItemClientID).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.status) {
                this.isExpandDetail = false;
                this.isPopupDeleteSuccess = true;
                this.showCalendarList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    item.eventList = item.eventList.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.clientID != this.calendarItemClientID));
                }));
                this.showCalendarList = [...this.showCalendarList];
            }
        }));
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
        if (type !== 'fail') {
            this.loadCalendarEventDetail(data.ClientID);
            this.getCalendarList();
            this.isDisplaySavePopup = true;
            this.isExpandEdit = false;
        }
        this.isSaveClick = false;
    }
    /**
     * @return {?}
     */
    onClickAppointmentSave() {
        this.isSaveClick = true;
    }
    /**
     * @private
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
}
DashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dashboard',
                template: "<ng-container>\n    <ng-template #homeExtention>\n        <ng-content></ng-content>\n    </ng-template>\n    \n    <ng-template *ngIf=\"this.windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n    <!-- home side -->\n    <ng-template #homeSide>\n        <app-dashboard-list [eventMonthList]=\"calendarEventMonthList\" [calendarEventList]=\"showCalendarList\" [birthdayItemList]=\"birthdayList\" (clickCalendarItem)=\"onClickCalendarItem($event)\"></app-dashboard-list>\n    </ng-template>\n    <!-- end of home side -->\n    \n    <!-- home main -->\n    <ng-template #homeMain>\n        <ng-container *ngTemplateOutlet=\"homeExtention\"></ng-container>\n        <app-dashboard-detail [loginInfo]=\"dashboardLoginInfo\" [messageList]=\"dashboardMessageList\" (filterByKeyword)=\"doFilterByKeyword($event, false)\" (clickMessage)=\"onClickMessage($event)\" (onClickLink)=\"clickListShow()\" (changeCommitmentStatus)=\"onChangeCommitmentStatus($event)\"></app-dashboard-detail>\n    </ng-template>\n    <!-- end of home main -->\n    \n    \n    <!-- if: pcBlock -->\n    <ng-template #pcBlock>\n        <app-ui-main-side-menu class=\"dashboard-main-side-menu\">\n            <div class=\"home-list-side-menu\" side-menu>\n                <ng-container *ngTemplateOutlet=\"homeSide\"></ng-container>\n            </div>\n            <div main>\n                <app-ui-infinite-scroll [syncFunction]=\"['DASHBOARD']\" (loadingCallback)=\"loadContent($event)\"  (refreshCallback)=\"refreshContent($event)\" [(loadingFinish)]=\"isLoadingFinish\" [(refreshFinish)]=\"isRefreshFinish\" [lazyLoading]=\"isLazyLoading\" [translateText]=\"language.loading | translate\">\n                    <ng-container *ngTemplateOutlet=\"homeMain\"></ng-container>\n                </app-ui-infinite-scroll>\n            </div>\n        </app-ui-main-side-menu>\n        \n    \n        <!-- remind delete -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayDeleteRemind\" (close)=\"afterDisplayDeleteRemind()\">\n            <ng-container textType=\"modal-img-detail\">\n                <img src=\"assets/img/icon-cust-remind.svg\">\n            </ng-container>\n            <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n            <ng-container textType=\"modal-content-detail\">\n                <!-- list -->\n                <app-ui-list-data2>\n                <!-- data -->\n                <ng-container textType=\"data\">\n                    <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertAutoDeleteCustomer;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                    </app-ui-form-checkbox3>\n                </ng-container>\n                <!-- end of data -->\n                </app-ui-list-data2>\n                <!-- end of list -->\n            </ng-container>\n            <!-- end modal-content-detail -->\n            <ng-container textType=\"modal-btm-detail\">\n                <div class=\"btm-set-block\">\n                <span class=\"ps-text\">\n                    {{alertAutoDeleteCustomer.length}}  {{language.people |translate }}\n                </span>\n                <!-- btn -->\n                <app-ui-btn-layout>\n                    <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardUpdateDelete'\" Action action=\"dashboardUpdateDelete\" (actionClick)=\"afterDisplayDeleteRemind()\">\n                    <ng-container TextType=\"cust\">{{language.homeConfirm |translate }}</ng-container>\n                    </app-ui-btn>\n                </app-ui-btn-layout>\n                <!-- end of btn -->\n                </div>\n        \n            </ng-container>\n            <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind delete -->\n    \n        <!-- remind update -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayUpdateRemind\" (close)=\"afterDisplayUpdateRemind()\">\n                <ng-container textType=\"modal-img-detail\">\n                    <img src=\"assets/img/icon-cust-remind.svg\">\n                </ng-container>\n                <ng-container textType=\"modal-title-detail\">{{language.updateProtectionTitle |translate }}</ng-container>\n                <ng-container textType=\"modal-content-detail\">\n                    <!-- list -->\n                    <app-ui-list-data2>\n                    <!-- data -->\n                    <ng-container textType=\"data\">\n                        <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertOverTimeList;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                        </app-ui-form-checkbox3>\n                    </ng-container>\n                    <!-- end of data -->\n                    </app-ui-list-data2>\n                    <!-- end of list -->\n                </ng-container>\n                <!-- end modal-content-detail -->\n                <ng-container textType=\"modal-btm-detail\">\n                    <div class=\"btm-set-block\">\n                    <span class=\"ps-text\">\n                        {{alertOverTimeList.length}} {{language.people |translate }}\n                    </span>\n                    <!-- btn -->\n                    <app-ui-btn-layout>\n                        <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardUpdateConfirm'\" Action action=\"dashboardUpdateConfirm\" (actionClick)=\"afterDisplayUpdateRemind()\">\n                        <ng-container TextType=\"cust\">{{language.homeConfirm |translate }}</ng-container>\n                        </app-ui-btn>\n                    </app-ui-btn-layout>\n                    <!-- end of btn -->\n                    </div>\n        \n                </ng-container>\n                <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind update -->\n        \n    </ng-template>\n    <!-- end of pcBlock -->\n    \n    <!-- if: mobile -->\n    <ng-template #mobileBlock>\n        <app-ui-modal-style-cust [isHeightFix]=\"true\"  [(isPopupOpen)]=\"isMobilePopupOpen\" *ngIf=\"isMobilePopupOpen\">\n            <div class=\"fix-close-block\">\n                <div class=\"close-button\" (click)=\"isMobilePopupOpen = false\">\n                    <img src=\"assets/img/icon-close-lg.svg\">\n                </div>\n            </div>\n            <ng-container *ngTemplateOutlet=\"homeSide\"></ng-container>  \n        </app-ui-modal-style-cust>\n        \n        <app-ui-infinite-scroll [syncFunction]=\"['DASHBOARD']\" class=\"dashboard-mobile-detail-block\" (loadingCallback)=\"loadContent($event)\"  (refreshCallback)=\"refreshContent($event)\" [(loadingFinish)]=\"isLoadingFinish\" [(refreshFinish)]=\"isRefreshFinish\" [lazyLoading]=\"isLazyLoading\" [translateText]=\"language.loading | translate\">\n            <ng-container *ngTemplateOutlet=\"homeMain\"></ng-container>\n        </app-ui-infinite-scroll>\n    \n    \n        <!-- remind delete -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayDeleteRemind\" (close)=\"afterDisplayDeleteRemind()\">\n            <ng-container textType=\"modal-img-detail\">\n                <img src=\"assets/img/icon-cust-remind.svg\">\n            </ng-container>\n            <ng-container textType=\"modal-title-detail\">{{language.deleteProtectionTitle |translate }}</ng-container>\n            <ng-container textType=\"modal-content-detail\">\n                <!-- list -->\n                <app-ui-list-data2>\n                <!-- data -->\n                <ng-container textType=\"data\">\n                    <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertAutoDeleteCustomer;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                        </app-ui-form-checkbox3>\n        \n                </ng-container>\n                <!-- end of data -->\n                </app-ui-list-data2>\n                <!-- end of list -->\n            </ng-container>\n            <!-- end modal-content-detail -->\n            <ng-container textType=\"modal-btm-detail\">\n                <div class=\"btm-set-block\">\n                <span class=\"ps-text\">\n                    {{alertAutoDeleteCustomer.length}}  {{language.people |translate }}\n                </span>\n                <!-- btn -->\n                <app-ui-btn-layout>\n                    <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardDeleteConfirm'\" Action action=\"dashboardDeleteConfirm\" (actionClick)=\"afterDisplayDeleteRemind()\">\n                    <ng-container TextType=\"cust\">{{language.homeConfirm |translate }}</ng-container>\n                    </app-ui-btn>\n                </app-ui-btn-layout>\n                <!-- end of btn -->\n                </div>\n        \n            </ng-container>\n            <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind delete -->\n    \n        <!-- remind update -->\n        <app-ui-modal-style-img-base [isContnetFull]=\"true\"  [isPopupOpen]=\"isDisplayUpdateRemind\" (close)=\"afterDisplayUpdateRemind()\">\n                <ng-container textType=\"modal-img-detail\">\n                    <img src=\"assets/img/icon-cust-remind.svg\">\n                </ng-container>\n                <ng-container textType=\"modal-title-detail\">{{language.updateProtectionTitle |translate }}</ng-container>\n                <ng-container textType=\"modal-content-detail\">\n                    <!-- list -->\n                    <app-ui-list-data2>\n                    <!-- data -->\n                    <ng-container textType=\"data\">\n                        <app-ui-form-checkbox3 [isDisable]=\"true\" [nxValue]=\"false\" *ngFor=\"let alertItem of alertOverTimeList;\">\n                        <ng-container checkboxText=\"style3\">{{alertItem.name}}</ng-container>\n                        </app-ui-form-checkbox3>\n                    </ng-container>\n                    <!-- end of data -->\n                    </app-ui-list-data2>\n                    <!-- end of list -->\n                </ng-container>\n                <!-- end modal-content-detail -->\n                <ng-container textType=\"modal-btm-detail\">\n                    <div class=\"btm-set-block\">\n                    <span class=\"ps-text\">\n                        {{alertOverTimeList.length}} {{language.people |translate }}\n                    </span>\n                    <!-- btn -->\n                    <app-ui-btn-layout>\n                        <app-ui-btn [btnColor]=\"'main2'\" [btnStyle]=\"'full'\" [btnHeight]=\"'sm'\" [btnWd]=\"'md'\" [id]=\"'btn_dashboardUpdateConfirm'\" Action action=\"dashboardUpdateConfirm\" (actionClick)=\"afterDisplayUpdateRemind()\">\n                        <ng-container TextType=\"cust\">{{language.confirm |translate }}</ng-container>\n                        </app-ui-btn>\n                    </app-ui-btn-layout>\n                    <!-- end of btn -->\n                    </div>\n        \n                </ng-container>\n                <!-- end modal-btm-detail -->\n        </app-ui-modal-style-img-base>\n        <!-- end of remind update -->\n    \n    </ng-template>\n    <!-- end of mobile -->\n    \n    <!-- --- modal --- -->\n    <!--delete block -->\n    <app-ui-modal-confirm #calendarDelete [(isPopupOpen)]=\"isCalendarDelete\" (onConfirm)=\"onClickDeleteConfirm()\" [title]=\"language.delete | translate\"\n        [message]=\"language.deleteDataBody | translate\" [cancelBtnText]=\"language.no | translate\" [confirmBtnText]=\"language.yes | translate\">\n    </app-ui-modal-confirm>\n    <!-- end: Appointment delete -->\n    \n    <!-- Delete Success -->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isPopupDeleteSuccess\">\n        <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n        </ng-container>\n        <ng-container textType=\"modal-content-detail\">{{language.notificationDeleteFeedback | translate}}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of Delete Success -->\n    \n    <!-- detail block -->\n    <app-ui-modal-style-text1 class=\"wd-md\" [(isPopupOpen)]=\"isExpandDetail\">\n        <ng-container textType=\"modal-title-detail\">{{language.homeAppointmentDetails | translate}}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n            <snd-calendar-detail [calendarEventDetail]=\"calendarEventDetail\" [customerClientName]=\"customerClientName\"></snd-calendar-detail>\n        </ng-container>\n    <!-- end: popup-content -->\n        <ng-container textType=\"modal-btm-detail\">\n            <app-ui-btn-layout>\n                <app-ui-btn [btnHeight]=\"'sm'\" [btnStyle]=\"'border'\" [id]=\"'btn_dashboardAppointmentDelete'\" Action action='dashboardAppointmentDelete' (actionClick)=\"delete()\">\n                    <ng-container TextType=\"cust\">{{language.homeDelete | translate}}</ng-container>\n                </app-ui-btn>\n                <app-ui-btn [btnHeight]=\"'sm'\" [id]=\"'btn_dashboardAppointmentEdit'\" Action action='dashboardAppointmentEdit' (actionClick)=\"editEvent()\">\n                <!-- <ng-container TextType=\"cust\"><span [routerLink]=\"['editEvent']\">EDIT</span></ng-container> -->\n                <ng-container TextType=\"cust\">{{language.homeEdit | translate}}</ng-container>\n                </app-ui-btn>\n            </app-ui-btn-layout>\n        </ng-container>\n    <!-- end: modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: Appointment Detail -->\n    \n    <!--add/edit calendar popup-->\n    <app-ui-modal-style-text1 class=\"wd-lg calendar-edit-content\"\n                            [(isPopupOpen)]=\"isExpandEdit\"\n                            [isScrollToTop]=\"true\"\n                            [isBackdropClose]=\"true\">\n        <ng-container textType=\"modal-title-detail\">{{language.homeAppointment | translate}}</ng-container>\n        <ng-container textType=\"modal-content-detail\">\n            <snd-calendar-edit [clientID]=\"calendarEventDetail?calendarEventDetail.clientID :'' \"\n                            [todayCalendarEvent]=\"calendarEventList\"\n                            [isSaveClick]=\"isSaveClick\"\n                            [viewDate]=\"viewDate\"\n                            [translateMap]=\"translateMap\"\n                            (saveEvent)=\"onSaveCalendarEvent($event)\"\n                            [customerItemList]=\"customerItemList\"></snd-calendar-edit>\n    \n        </ng-container>\n    <!-- end popup-content -->\n        <ng-container textType=\"modal-btm-detail\">\n            <app-ui-btn-layout>\n                <app-ui-btn [btnWd]=\"'md'\" [btnHeight]=\"'sm'\" [id]=\"'btn_dashboardAppointmentSave'\" Action action='dashboardAppointmentSave' (actionClick)=\"onClickAppointmentSave()\">\n                    <ng-container TextType=\"cust\">{{language.homeSave | translate}}</ng-container>\n                </app-ui-btn>\n            </app-ui-btn-layout>\n        </ng-container>\n    <!-- end modal-btm-detail -->\n    </app-ui-modal-style-text1>\n    <!-- end: add/edit calendar popup -->\n    \n    <!--  save feedback -->\n    <app-ui-modal-style-feedback [(isPopupOpen)]=\"isDisplaySavePopup\">\n        <ng-container textType=\"modal-img-detail\">\n            <nx-icon name='check' size='auto'></nx-icon>\n        </ng-container>\n        <ng-container textType=\"modal-content-detail\">{{language.notificationSaveFeedback |translate }}</ng-container>\n    </app-ui-modal-style-feedback>\n    <!-- end of save feedback -->\n\n    <!-- --- end of modal --- -->\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@media (min-width:screen-nb){.fix-close-block{display:none}}.fix-close-block{position:absolute;width:100%;top:0;left:0;text-align:right;background-color:rgba(73,110,189,.05)}.fix-close-block img{width:44px;height:44px;padding:10px}@media (max-width:1023px){:host{display:block;overflow:hidden}}:host ::ng-deep .layout-content-main .refresh-content{background-color:inherit}:host ::ng-deep .layout-content-main .infiniti-scroll{height:100vh}:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .infiniti-scroll{height:100%;max-height:calc(100vh - 55px - 55px);background-color:#f5f5f5}@supports (top:env(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 55px - 55px)}}@supports (top:constant(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 55px - 55px)}}:host ::ng-deep app-ui-infinite-scroll.dashboard-mobile-detail-block .scroll-content{overflow:hidden}.home-list-side-menu{display:block;width:100%}"]
            }] }
];
DashboardComponent.ctorParameters = () => [
    { type: CustomerUtils },
    { type: DashboardService },
    { type: CalendarService },
    { type: CustomerService },
    { type: ChangeDetectorRef },
    { type: TranslateService },
    { type: ProfileCodeService },
    { type: DefaultLoginMgr },
    { type: DataSyncService },
    { type: NotificationMgr },
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
DashboardComponent.propDecorators = {
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DashboardComponent.prototype.hello_str;
    /** @type {?} */
    DashboardComponent.prototype.isLoadingFinish;
    /** @type {?} */
    DashboardComponent.prototype.isRefreshFinish;
    /** @type {?} */
    DashboardComponent.prototype.isLazyLoading;
    /** @type {?} */
    DashboardComponent.prototype.isMobilePopupOpen;
    /** @type {?} */
    DashboardComponent.prototype.dashboardMessageList;
    /** @type {?} */
    DashboardComponent.prototype.calendarEventList;
    /** @type {?} */
    DashboardComponent.prototype.calendarEventMonthList;
    /** @type {?} */
    DashboardComponent.prototype.birthdayList;
    /** @type {?} */
    DashboardComponent.prototype.searchRangeDate;
    /** @type {?} */
    DashboardComponent.prototype.windowWidth;
    /** @type {?} */
    DashboardComponent.prototype.language;
    /** @type {?} */
    DashboardComponent.prototype.todate;
    /** @type {?} */
    DashboardComponent.prototype.dashboardLoginInfo;
    /** @type {?} */
    DashboardComponent.prototype.alertAutoDeleteCustomer;
    /** @type {?} */
    DashboardComponent.prototype.alertOverTimeList;
    /** @type {?} */
    DashboardComponent.prototype.isDisplayDeleteRemind;
    /** @type {?} */
    DashboardComponent.prototype.isDisplayUpdateRemind;
    /** @type {?} */
    DashboardComponent.prototype.searchBirthdaySubN;
    /** @type {?} */
    DashboardComponent.prototype.searchBirthdayAddN;
    /** @type {?} */
    DashboardComponent.prototype.searchCalendarSubN;
    /** @type {?} */
    DashboardComponent.prototype.searchCalendarAddN;
    /** @type {?} */
    DashboardComponent.prototype.showCalendarList;
    /** @type {?} */
    DashboardComponent.prototype.currentMessageKeyword;
    /** @type {?} */
    DashboardComponent.prototype.messagePageInfo;
    /** @type {?} */
    DashboardComponent.prototype.isExpandDetail;
    /** @type {?} */
    DashboardComponent.prototype.isCalendarDelete;
    /** @type {?} */
    DashboardComponent.prototype.calendarEventDetail;
    /** @type {?} */
    DashboardComponent.prototype.calendarItemClientID;
    /** @type {?} */
    DashboardComponent.prototype.isPopupDeleteSuccess;
    /** @type {?} */
    DashboardComponent.prototype.isExpandEdit;
    /** @type {?} */
    DashboardComponent.prototype.isDisplaySavePopup;
    /** @type {?} */
    DashboardComponent.prototype.translateMap;
    /** @type {?} */
    DashboardComponent.prototype.optionMap;
    /** @type {?} */
    DashboardComponent.prototype.viewDate;
    /** @type {?} */
    DashboardComponent.prototype.isSaveClick;
    /** @type {?} */
    DashboardComponent.prototype.activityTypeList;
    /** @type {?} */
    DashboardComponent.prototype.alertTypeList;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.dayTypesList;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.weekdaysList;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.monthsList;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.noSchedule;
    /** @type {?} */
    DashboardComponent.prototype.customerClientMap;
    /** @type {?} */
    DashboardComponent.prototype.customerItemList;
    /** @type {?} */
    DashboardComponent.prototype.customerClientName;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.customerUtils;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.dashboardService;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.calendarService;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.customerService;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.profileCodeService;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.loginMgr;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.dataSyncService;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    DashboardComponent.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFZLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVUsTUFBTSxVQUFVLENBQUM7QUFDMUUsT0FBTyxFQUFpQixXQUFXLEVBQW9ELGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBMkIsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBRLE9BQU8sRUFBRSxlQUFlLEVBQXVDLGVBQWUsRUFBdUIsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFTOUwsTUFBTTs7Ozs7Ozs7Ozs7Ozs7SUFxREosWUFDVSxhQUE0QixFQUM1QixnQkFBa0MsRUFDbEMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsY0FBaUMsRUFDakMsZ0JBQWtDLEVBQ2xDLGtCQUFzQyxFQUN0QyxRQUF5QixFQUN6QixlQUFnQyxFQUNoQyxlQUFnQyxFQUNYLFVBQWU7UUFWcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxxQkFB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Six3Q0FBMkM7O0lBRzNDLCtDQUEwRTs7SUFDMUUsOENBQWtEOztJQUNsRCxnREFBdUM7Ozs7O0lBR3JDLDJDQUFvQzs7Ozs7SUFDcEMsOENBQTBDOzs7OztJQUMxQyw2Q0FBd0M7Ozs7O0lBQ3hDLDZDQUF3Qzs7Ozs7SUFDeEMsNENBQXlDOzs7OztJQUN6Qyw4Q0FBMEM7Ozs7O0lBQzFDLGdEQUE4Qzs7Ozs7SUFDOUMsc0NBQWlDOzs7OztJQUNqQyw2Q0FBd0M7Ozs7O0lBQ3hDLDZDQUF3Qzs7Ozs7SUFDeEMsd0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3B0aW9uYWwsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9kYXNoYm9hcmQtc2VydmljZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgYWRkRGF5cywgc3ViRGF5cywgc3RhcnRPZkRheSwgZW5kT2ZEYXksIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IExvZ2luTWdyVG9rZW4sIENvbmZpZ1Rva2VuLCBJTG9naW5NZ3IsIExvZ2luSW5mbywgRGV2aWNlU2VydmljZSwgUHJvZmlsZUNvZGUsIFRyYW5zbGF0ZVNlcnZpY2UsIFByb2ZpbGVDb2RlU2VydmljZSwgTGFuZ3VhZ2UsIFBhZ2VJbmZvLCBTZWxlY3RPcHRpb24sIERlZmF1bHRMb2dpbk1nciwgQVBJRmFjdG9yeSwgQVBJRGlzcGF0Y2gsIERhdGFTeW5jU2VydmljZSwgTm90aWZpY2F0aW9uTWdyIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2RlbC9EYXNoYm9hcmRNZXNzYWdlJztcbmltcG9ydCB7IEN1c3RvbWVyU2VydmljZSwgQ3VzdG9tZXJCaXJ0aGRheSwgQ3VzdG9tZXJBbGVydEl0ZW0sIENhbGVuZGFyU2VydmljZSwgQ2FsZW5kYXJFdmVudERldGFpbCwgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSwgQ3VzdG9tZXJVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGhlbGxvX3N0ciA9ICcnO1xuICBwdWJsaWMgaXNMb2FkaW5nRmluaXNoID0gdHJ1ZTtcbiAgcHVibGljIGlzUmVmcmVzaEZpbmlzaCA9IHRydWU7XG4gIHB1YmxpYyBpc0xhenlMb2FkaW5nID0gdHJ1ZTtcbiAgcHVibGljIGlzTW9iaWxlUG9wdXBPcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGRhc2hib2FyZE1lc3NhZ2VMaXN0OiBBcnJheTxEYXNoYm9hcmRNZXNzYWdlPiA9IFtdO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107XG4gIHB1YmxpYyBjYWxlbmRhckV2ZW50TW9udGhMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPiA9IFtdO1xuICBwdWJsaWMgYmlydGhkYXlMaXN0OiBBcnJheTxDdXN0b21lckJpcnRoZGF5PiA9IFtdO1xuICBwdWJsaWMgc2VhcmNoUmFuZ2VEYXRlO1xuICBwdWJsaWMgd2luZG93V2lkdGg7XG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcbiAgcHVibGljIHRvZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHB1YmxpYyBkYXNoYm9hcmRMb2dpbkluZm86IExvZ2luSW5mbztcbiAgcHVibGljIGFsZXJ0QXV0b0RlbGV0ZUN1c3RvbWVyOiBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4gPSBbXTtcbiAgcHVibGljIGFsZXJ0T3ZlclRpbWVMaXN0OiBBcnJheTxDdXN0b21lckFsZXJ0SXRlbT4gPSBbXTtcbiAgcHVibGljIGlzRGlzcGxheURlbGV0ZVJlbWluZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEaXNwbGF5VXBkYXRlUmVtaW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZWFyY2hCaXJ0aGRheVN1Yk46IG51bWJlcjtcbiAgcHVibGljIHNlYXJjaEJpcnRoZGF5QWRkTjogbnVtYmVyO1xuICBwdWJsaWMgc2VhcmNoQ2FsZW5kYXJTdWJOOiBudW1iZXI7XG4gIHB1YmxpYyBzZWFyY2hDYWxlbmRhckFkZE46IG51bWJlcjtcbiAgcHVibGljIHNob3dDYWxlbmRhckxpc3QgPSBbXTtcbiAgcHVibGljIGN1cnJlbnRNZXNzYWdlS2V5d29yZDogc3RyaW5nO1xuICBwdWJsaWMgbWVzc2FnZVBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG5cbiAgLy8gY2FsZW5kYXJcbiAgcHVibGljIGlzRXhwYW5kRGV0YWlsID0gZmFsc2U7XG4gIHB1YmxpYyBpc0NhbGVuZGFyRGVsZXRlID0gZmFsc2U7XG4gIHB1YmxpYyBjYWxlbmRhckV2ZW50RGV0YWlsOiBDYWxlbmRhckV2ZW50RGV0YWlsO1xuICBwdWJsaWMgY2FsZW5kYXJJdGVtQ2xpZW50SUQ6IHN0cmluZztcbiAgcHVibGljIGlzUG9wdXBEZWxldGVTdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0V4cGFuZEVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRGlzcGxheVNhdmVQb3B1cDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdHJhbnNsYXRlTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHVibGljIG9wdGlvbk1hcDogTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+KCk7XG4gIHB1YmxpYyB2aWV3RGF0ZTogRGF0ZTtcbiAgcHVibGljIGlzU2F2ZUNsaWNrOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIHRyYW5zbGF0ZVxuICBwdWJsaWMgYWN0aXZpdHlUeXBlTGlzdDogQXJyYXk8UHJvZmlsZUNvZGU+ID0gW107IC8vIERC5Lit5omA5pyJYWN0aXZpdHlUeXBlXG4gIHB1YmxpYyBhbGVydFR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTtcbiAgcHJpdmF0ZSBkYXlUeXBlc0xpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ0Nyb3NzX0RheScsICdBbGxfRGF5J107XG4gIHByaXZhdGUgd2Vla2RheXNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgcHJpdmF0ZSBtb250aHNMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG4gIHByaXZhdGUgbm9TY2hlZHVsZTogc3RyaW5nID0gJ05vX1NjaGVkdWxlJztcbiAgLy9jYWxlbmRhciBlbmRcblxuICBwdWJsaWMgY3VzdG9tZXJDbGllbnRNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwdWJsaWMgY3VzdG9tZXJJdGVtTGlzdDogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IFtdO1xuICBwdWJsaWMgY3VzdG9tZXJDbGllbnROYW1lOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGN1c3RvbWVyVXRpbHM6IEN1c3RvbWVyVXRpbHMsXG4gICAgcHJpdmF0ZSBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2luTWdyOiBEZWZhdWx0TG9naW5NZ3IsXG4gICAgcHJpdmF0ZSBkYXRhU3luY1NlcnZpY2U6IERhdGFTeW5jU2VydmljZSxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyLFxuICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICApIHtcblxuXG4gICAgdGhpcy5zZWFyY2hCaXJ0aGRheVN1Yk4gPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uREFTSEJPQVJELlNlYXJjaEJpcnRoZGF5UmFuZ2Uuc3ViTjtcbiAgICB0aGlzLnNlYXJjaEJpcnRoZGF5QWRkTiA9IHRoaXMuQVBQX0NPTkZJR1t0aGlzLkFQUF9DT05GSUcuRU5WXS5EQVNIQk9BUkQuU2VhcmNoQmlydGhkYXlSYW5nZS5hZGROO1xuICAgIHRoaXMuc2VhcmNoQ2FsZW5kYXJTdWJOID0gdGhpcy5BUFBfQ09ORklHW3RoaXMuQVBQX0NPTkZJRy5FTlZdLkRBU0hCT0FSRC5TZWFyY2hDYWxlbmRhclJhbmdlLnN1Yk47XG4gICAgdGhpcy5zZWFyY2hDYWxlbmRhckFkZE4gPSB0aGlzLkFQUF9DT05GSUdbdGhpcy5BUFBfQ09ORklHLkVOVl0uREFTSEJPQVJELlNlYXJjaENhbGVuZGFyUmFuZ2UuYWRkTjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vaW5pdCBjYWxlbmRhciB0eXBlXG5cbiAgICB0aGlzLm1lc3NhZ2VQYWdlSW5mby5wYWdlU2l6ZSA9IDU7XG4gICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDYWxlbmRhcl9UeXBlJyk7XG4gICAgdGhpcy5hbGVydFR5cGVMaXN0ID0gdGhpcy5wcm9maWxlQ29kZVNlcnZpY2UuZ2V0Q29kZUFycmF5KCdDYWxlbmRhcl9SZW1pbmRUaW1lJyk7XG4gICAgdGhpcy5vcHRpb25NYXAuc2V0KCdDYWxlbmRhcl9UeXBlJywgdGhpcy5hY3Rpdml0eVR5cGVMaXN0KTtcbiAgICB0aGlzLm9wdGlvbk1hcC5zZXQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLCB0aGlzLmFsZXJ0VHlwZUxpc3QpO1xuICAgIHRoaXMuZGF5VHlwZXNMaXN0LmZvckVhY2goKGRheVR5cGUpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldChkYXlUeXBlLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKGRheVR5cGUpKVxuICAgIH0pO1xuICAgIHRoaXMud2Vla2RheXNMaXN0LmZvckVhY2goKHdlZWtkYXkpID0+IHtcbiAgICAgIHRoaXMudHJhbnNsYXRlTWFwLnNldCh3ZWVrZGF5LCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHdlZWtkYXkpKVxuICAgIH0pO1xuICAgIHRoaXMubW9udGhzTGlzdC5mb3JFYWNoKChtb250aCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2xhdGVNYXAuc2V0KG1vbnRoLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKG1vbnRoKSlcbiAgICB9KTtcbiAgICB0aGlzLnRyYW5zbGF0ZU1hcC5zZXQodGhpcy5ub1NjaGVkdWxlLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKHRoaXMubm9TY2hlZHVsZSkpO1xuXG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5pc01vYmlsZVBvcHVwT3BlbiA9ICh0aGlzLndpbmRvd1dpZHRoIDwgMTAyNCA/IHRydWUgOiBmYWxzZSkgJiYgKHRoaXMuZGFzaGJvYXJkU2VydmljZS5pc0ZpcnN0VGltZSgpKTtcblxuXG4gICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMudG9kYXRlO1xuXG4gICAgdGhpcy5nZXRMb2dpbkluZm8oKTtcblxuICAgIHRoaXMuZ2V0Q2FsZW5kYXJMaXN0KCk7XG5cbiAgICB0aGlzLmdldEN1c3RvbWVyQmlydGhkYXlMaXN0KHRoaXMudG9kYXRlLCB0aGlzLnNlYXJjaEJpcnRoZGF5U3ViTiwgdGhpcy5zZWFyY2hCaXJ0aGRheUFkZE4pO1xuXG4gICAgLy9nZXQgVW5SZWFkIG1lc3NhZ2VcbiAgICB0aGlzLmRvRmlsdGVyQnlLZXl3b3JkKFwiVW5SZWFkXCIsIGZhbHNlKTtcblxuICAgIC8vNS8yNFxuICAgIC8vdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUN1c3RvbWVyTGlzdCgpO1xuXG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAodGhpcy53aW5kb3dXaWR0aCA8IDEwMjQpIHtcbiAgICAgIHRoaXMuaXNNb2JpbGVQb3B1cE9wZW4gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLndhcm4oJ1dpZHRoOiAnLCB0aGlzLndpbmRvd1dpZHRoKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRDYWxlbmRhckxpc3QoKSB7XG5cbiAgICBsZXQgc2VhcmNoQ2FsZW5kYXJTdGFydCA9IHN1YkRheXModGhpcy50b2RhdGUsIHRoaXMuc2VhcmNoQ2FsZW5kYXJTdWJOKTtcblxuICAgIGxldCBjYWxlbmRhckxpc3QgPSBbXTtcblxuICAgIGxldCBQcm9taXNlTGlzdDogQXJyYXk8UHJvbWlzZTxhbnk+PiA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlYXJjaENhbGVuZGFyU3ViTiArIHRoaXMuc2VhcmNoQ2FsZW5kYXJBZGROICsgMTsgaSsrKSB7XG4gICAgICBsZXQgdGFyZ2V0RGF0ZSA9IGFkZERheXMoc2VhcmNoQ2FsZW5kYXJTdGFydCwgaSk7XG5cbiAgICAgIFByb21pc2VMaXN0LnB1c2gobmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Q2FsZW5kYXJCZXR3ZWVuRGF0ZShzdGFydE9mRGF5KHRhcmdldERhdGUpLCBlbmRPZkRheSh0YXJnZXREYXRlKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgc2hvd0RhdGU6IHRhcmdldERhdGUsXG4gICAgICAgICAgICBldmVudExpc3Q6IGRhdGEsXG4gICAgICAgICAgICBpc0JlZm9yZVRvZGF5OiBzdGFydE9mRGF5KHRoaXMudG9kYXRlKS5nZXRUaW1lKCkgPiBzdGFydE9mRGF5KHRhcmdldERhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGlzVG9kYXk6IHN0YXJ0T2ZEYXkodGhpcy50b2RhdGUpLmdldFRpbWUoKSA9PSBzdGFydE9mRGF5KHRhcmdldERhdGUpLmdldFRpbWUoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlcyhpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgUHJvbWlzZS5hbGwoUHJvbWlzZUxpc3QpLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgIHRoaXMuc2hvd0NhbGVuZGFyTGlzdCA9IGxpc3Q7XG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMuc2hvd0NhbGVuZGFyTGlzdDogXCIsIHRoaXMuc2hvd0NhbGVuZGFyTGlzdCk7XG4gICAgICAvLzUvMjRcbiAgICAgIC8vdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cblxuXG5cblxuXG4gIH1cblxuICAvLyBzY3JvbGwgbG9hZCBjb250ZW50XG4gIHB1YmxpYyBhc3luYyBsb2FkQ29udGVudChldmVudCkge1xuXG4gICAgdGhpcy5tZXNzYWdlUGFnZUluZm8ubmV4dFBhZ2UoKTtcbiAgICBhd2FpdCB0aGlzLmRvRmlsdGVyQnlLZXl3b3JkKHRoaXMuY3VycmVudE1lc3NhZ2VLZXl3b3JkLCB0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nRmluaXNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG4gIC8vcmVmcmVzaENvbnRlbnRcbiAgcHVibGljIGFzeW5jIHJlZnJlc2hDb250ZW50KGV2ZW50KSB7XG5cbiAgICB0aGlzLm1lc3NhZ2VQYWdlSW5mby5yZXNldFBhZ2UoKTtcbiAgICAvLyB0aGlzLmdldENhbGVuZGFyTGlzdCgpO1xuXG4gICAgLy8gdGhpcy5nZXRDdXN0b21lckJpcnRoZGF5TGlzdCh0aGlzLnZpZXdEYXRlLCB0aGlzLnNlYXJjaEJpcnRoZGF5U3ViTiwgdGhpcy5zZWFyY2hCaXJ0aGRheUFkZE4pO1xuXG4gICAgLy8gYXdhaXQgdGhpcy5kYXRhU3luY1NlcnZpY2Uuc3luY0Z1bmMoW1wiREFTSEJPQVJEXCJdLCB0cnVlKTtcbiAgICBhd2FpdCB0aGlzLm5vdGlmaWNhdGlvbk1nci5mZXRjaE1lc3NhZ2VEYXRhKCk7XG5cbiAgICAvL2dldCBtZXNzYWdlXG4gICAgLy8gYXdhaXQgdGhpcy5nZXREYXNoYm9hcmRNZXNzYWdlTGlzdCgpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmRvRmlsdGVyQnlLZXl3b3JkKHRoaXMuY3VycmVudE1lc3NhZ2VLZXl3b3JkLCBmYWxzZSksIHRoaXMuZ2V0Q2FsZW5kYXJMaXN0KCksIHRoaXMuZ2V0Q3VzdG9tZXJCaXJ0aGRheUxpc3QodGhpcy52aWV3RGF0ZSwgdGhpcy5zZWFyY2hCaXJ0aGRheVN1Yk4sIHRoaXMuc2VhcmNoQmlydGhkYXlBZGROKV0pO1xuICAgIGNvbnNvbGUubG9nKFwiUHJvbWlzZUFsbCBmaW5pc2hcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzUmVmcmVzaEZpbmlzaCA9IHRydWU7XG4gICAgICAvLzUvMjRcbiAgICAgIC8vdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSwgNTAwKTtcblxuXG5cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0TG9naW5JbmZvKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMubG9naW5NZ3IuZ2V0TG9naW5JbmZvKCkuc3Vic2NyaWJlKChpbmZvKSA9PiB7XG4gICAgICAgIHRoaXMuZGFzaGJvYXJkTG9naW5JbmZvID0gaW5mbztcbiAgICAgICAgY29uc29sZS53YXJuKCd0aGlzLmRhc2hib2FyZExvZ2luSW5mbzogJywgdGhpcy5kYXNoYm9hcmRMb2dpbkluZm8pO1xuICAgICAgICByZXMoKTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBkb0ZpbHRlckJ5S2V5d29yZChrZXl3b3JkLCBpc0FwcGVuZCk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJrZXl3b3JkOiBcIiAsa2V5d29yZCk7XG5cbiAgICBpZiAoIWlzQXBwZW5kKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VQYWdlSW5mby5yZXNldFBhZ2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRNZXNzYWdlS2V5d29yZCA9IGtleXdvcmQ7XG5cbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmdldE1lc3NhZ2VCeUtleXdvcmQoa2V5d29yZCwgdGhpcy5tZXNzYWdlUGFnZUluZm8pLnRvUHJvbWlzZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChpc0FwcGVuZCkge1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmRhc2hib2FyZE1lc3NhZ2VMaXN0ID0gWy4uLnRoaXMuZGFzaGJvYXJkTWVzc2FnZUxpc3QsIC4uLmRhdGFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXNoYm9hcmRNZXNzYWdlTGlzdCA9IFsuLi5kYXRhXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZUNvbW1pdG1lbnRTdGF0dXMoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImludG8gb25DaGFuZ2VDb21taXRtZW50U3RhdHVzIGV2ZW50OlwiLCBldmVudCwgXCJtZXNzYWdlSWQ6XCIsIGV2ZW50Lm1lc3NhZ2VJZCwgXCJrZXl3b3JkOlwiLCBldmVudC5rZXl3b3JkKTtcbiAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UuY2hhbmdlTWVzc2FnZVN0YXR1cyhldmVudC5tZXNzYWdlSWQsIFwiTGlua1N0YXR1c1wiLCBcIkRvbmVcIikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25DaGFuZ2VDb21taXRtZW50U3RhdHVzIHJlc3BcIiwgcmVzcCk7XG4gICAgICB0aGlzLmRvRmlsdGVyQnlLZXl3b3JkKGV2ZW50LmtleXdvcmQsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlckRpc3BsYXlEZWxldGVSZW1pbmQoKSB7XG5cbiAgICBhd2FpdCB0aGlzLmRvRmlsdGVyQnlLZXl3b3JkKHRoaXMuY3VycmVudE1lc3NhZ2VLZXl3b3JkLCBmYWxzZSk7XG4gICAgdGhpcy5pc0Rpc3BsYXlEZWxldGVSZW1pbmQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZnRlckRpc3BsYXlVcGRhdGVSZW1pbmQoKSB7XG5cbiAgICBhd2FpdCB0aGlzLmRvRmlsdGVyQnlLZXl3b3JkKHRoaXMuY3VycmVudE1lc3NhZ2VLZXl3b3JkLCBmYWxzZSk7XG4gICAgdGhpcy5pc0Rpc3BsYXlVcGRhdGVSZW1pbmQgPSBmYWxzZTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21lckF1dG9EZWxldGUoY2xpZW5kSUQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEF1dG9EZWxldGVDdXN0b21lckxpc3QoY2xpZW5kSUQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21lck92ZXJUaW1lKGNsaWVuZElEKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0T3ZlclRpbWVDdXN0b21lckxpc3QoY2xpZW5kSUQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRDdXN0b21lckJpcnRoZGF5TGlzdCh0YXJnZXREYXRlLCBzdWJOLCBhZGROKSB7XG5cbiAgICByZXR1cm4gdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXJCaXJ0aGRheUxpc3QodGFyZ2V0RGF0ZSwgc3ViTiwgYWRkTikudG9Qcm9taXNlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5iaXJ0aGRheUxpc3QgPSBkYXRhO1xuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldENhbGVuZGFyQmV0d2VlbkRhdGUoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldENhbGVuZGFyRXZlbnRMaXN0KHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgJycpLnRvUHJvbWlzZSgpO1xuICB9XG5cblxuICBwdWJsaWMgY2xpY2tMaXN0U2hvdygpIHtcbiAgICB0aGlzLmlzTW9iaWxlUG9wdXBPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrTWVzc2FnZShtZXNzYWdlOiBEYXNoYm9hcmRNZXNzYWdlKSB7XG5cblxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgbWVzc2FnZTogXCIsIG1lc3NhZ2UpO1xuICAgIGxldCBjbGllbmRJRCA9IG1lc3NhZ2UuY2xpZW50SUQ7XG4gICAgaWYgKG1lc3NhZ2Uuc3RhdHVzID09ICdVblJlYWQnKSB7XG4gICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UudXBkYXRlTWVzc2FnZVN0YXR1cyhtZXNzYWdlLmNsaWVudElELCAnUmVhZGluZycpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlID09IFwiQXV0b0RlbGV0ZVwiKSB7XG4gICAgICB0aGlzLmdldEN1c3RvbWVyQXV0b0RlbGV0ZShjbGllbmRJRCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYWxlcnRBdXRvRGVsZXRlQ3VzdG9tZXIgPSBkYXRhO1xuICAgICAgICB0aGlzLmlzRGlzcGxheURlbGV0ZVJlbWluZCA9IGRhdGEubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGUgPT0gXCJPdmVydGltZVwiKSB7XG4gICAgICB0aGlzLmdldEN1c3RvbWVyT3ZlclRpbWUoY2xpZW5kSUQpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFsZXJ0T3ZlclRpbWVMaXN0ID0gZGF0YTtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXlVcGRhdGVSZW1pbmQgPSBkYXRhLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tDYWxlbmRhckl0ZW0oZXZlbnQpIHtcbiAgICAvL2V2ZW50ID0ge3Nob3dEYXRlOiBcIjA0LzI0XCIsIGV2ZW50TGlzdDogQ2FsZW5kYXJFdmVudERldGFpbH1cbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgIHRoaXMuY2FsZW5kYXJJdGVtQ2xpZW50SUQgPSBldmVudC5ldmVudExpc3QuY2xpZW50SUQ7XG4gICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LnNob3dEYXRlKTtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0ID0gdGhpcy5zaG93Q2FsZW5kYXJMaXN0LmZpbHRlcih4ID0+IHguc2hvd0RhdGUgPT0gZXZlbnQuc2hvd0RhdGUpWzBdLmV2ZW50TGlzdDtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2FsZW5kYXJFdmVudExpc3Q6IFwiLCB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhcInZpZXdEYXRlOiBcIiwgdGhpcy52aWV3RGF0ZSk7XG4gICAgdGhpcy5sb2FkQ2FsZW5kYXJFdmVudERldGFpbCh0aGlzLmNhbGVuZGFySXRlbUNsaWVudElEKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBsb2FkQ2FsZW5kYXJFdmVudERldGFpbChjbGllbnRJRDogc3RyaW5nKSB7XG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0Q2FsZW5kYXJFdmVudERldGFpbChjbGllbnRJRCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXG4gICAgICBjb25zb2xlLmxvZygnZ2V0Q2FsZW5kYXJFdmVudERldGFpbCcsIGRhdGEpO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsID0gZGF0YTtcbiAgICAgIHRoaXMuY3VzdG9tZXJDbGllbnROYW1lID0gdGhpcy5jdXN0b21lckNsaWVudE1hcC5nZXQodGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmN1c3RvbWVyQ2xpZW50SUQpO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmRpc3BsYXlBY3Rpdml0eSA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0NhbGVuZGFyX1R5cGUnLCB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWN0aXZpdHkpO1xuICAgICAgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmRpc3BsYXlBbGVydDEgPSB0aGlzLnByb2ZpbGVDb2RlU2VydmljZS5jb252ZXJ0Q29kZTJUZXh0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJywgdGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSk7XG4gICAgICB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuZGlzcGxheUFsZXJ0MiA9IHRoaXMucHJvZmlsZUNvZGVTZXJ2aWNlLmNvbnZlcnRDb2RlMlRleHQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnLCB0aGlzLmNhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQyKTtcbiAgICAgIHRoaXMuaXNFeHBhbmREZXRhaWwgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBlZGl0RXZlbnQoKSB7XG4gICAgdGhpcy5pc0V4cGFuZEVkaXQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZSgpIHtcbiAgICB0aGlzLmlzQ2FsZW5kYXJEZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tEZWxldGVDb25maXJtKCkge1xuXG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuZGVsZXRlQ2FsZW5kYXJFdmVudCh0aGlzLmNhbGVuZGFySXRlbUNsaWVudElEKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pc0V4cGFuZERldGFpbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUG9wdXBEZWxldGVTdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnNob3dDYWxlbmRhckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtLmV2ZW50TGlzdCA9IGl0ZW0uZXZlbnRMaXN0LmZpbHRlcih4ID0+IHguY2xpZW50SUQgIT0gdGhpcy5jYWxlbmRhckl0ZW1DbGllbnRJRCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd0NhbGVuZGFyTGlzdCA9IFsuLi50aGlzLnNob3dDYWxlbmRhckxpc3RdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBwdWJsaWMgb25TYXZlQ2FsZW5kYXJFdmVudChyZXNwKSB7XG5cbiAgICBsZXQgdHlwZSA9IHJlc3AudHlwZTtcbiAgICBsZXQgZGF0YSA9IHJlc3AuZGF0YTtcbiAgICBpZiAodHlwZSAhPT0gJ2ZhaWwnKSB7XG4gICAgICB0aGlzLmxvYWRDYWxlbmRhckV2ZW50RGV0YWlsKGRhdGEuQ2xpZW50SUQpO1xuICAgICAgdGhpcy5nZXRDYWxlbmRhckxpc3QoKTtcbiAgICAgIHRoaXMuaXNEaXNwbGF5U2F2ZVBvcHVwID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNFeHBhbmRFZGl0ID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNTYXZlQ2xpY2sgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrQXBwb2ludG1lbnRTYXZlKCkge1xuICAgIHRoaXMuaXNTYXZlQ2xpY2sgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDdXN0b21lckxpc3QoKSB7XG4gICAgbGV0IHBhZ2VJbmZvID0gbmV3IFBhZ2VJbmZvKCk7XG4gICAgcGFnZUluZm8ucGFnZVNpemUgPSAtMTtcbiAgICBsZXQgZmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyTGlzdChmaWx0ZXJDcml0ZXJpYSwgcGFnZUluZm8pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICAgIGxldCB0ZW1wX2FycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBjdXN0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJDbGllbnRNYXAuc2V0KGN1c3RJdGVtLmNsaWVudElELCB0aGlzLmN1c3RvbWVyVXRpbHMuY29udmVydE5hbWVUb1Nob3coY3VzdEl0ZW0uZmlyc3ROYW1lLCBjdXN0SXRlbS5sYXN0TmFtZSkpO1xuICAgICAgICB0ZW1wX2FycmF5LnB1c2gobmV3IFNlbGVjdE9wdGlvbihjdXN0SXRlbS5jbGllbnRJRCwgdGhpcy5jdXN0b21lclV0aWxzLmNvbnZlcnROYW1lVG9TaG93KGN1c3RJdGVtLmZpcnN0TmFtZSwgY3VzdEl0ZW0ubGFzdE5hbWUpKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1c3RvbWVySXRlbUxpc3QgPSB0ZW1wX2FycmF5O1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==