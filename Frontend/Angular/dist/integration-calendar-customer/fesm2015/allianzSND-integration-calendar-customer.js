import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxAccordionModule, NxButtonModule, NxDropdownModule, NxMessageModule, NxModalModule, NxRadioModule } from '@allianz/ngx-ndbx';
import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { DatePipe, CommonModule } from '@angular/common';
import { SelectOption, UiInformationBtnComponent, ModalManager, UiInformationContentComponent, UIModule } from '@allianzSND/ui';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';
import { NxDatefieldModule, NxNativeDateModule } from '@allianz/ngx-ndbx/datefield';
import { __awaiter } from 'tslib';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { NxProgressbarModule } from '@allianz/ngx-ndbx/progressbar';
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import { InjectionToken, Injectable, Component, EventEmitter, Input, Output, Optional, Inject, HostListener, ElementRef, ViewChild, ChangeDetectorRef, ViewChildren, NgModule, defineInjectable, inject, ChangeDetectionStrategy } from '@angular/core';
import { takeUntil, take } from 'rxjs/operators';
import { v4 } from 'uuid';
import { addHours, addMinutes, getDate, getHours, getMinutes, isSameDay, isAfter, getMonth, getYear, startOfDay, isBefore, format, differenceInMinutes, differenceInCalendarDays, addDays, isSameMonth, subMinutes, startOfMonth, endOfMonth, startOfWeek, endOfWeek, endOfDay, subDays, setYear } from 'date-fns';
import { ProfileCodeService, StringUtils, showRuleToken, SelectOption as SelectOption$1, APIFactory, APIDispatch, ValidationResult, ClientCustomDao, EqualRestriction, OrderByRestriction, LimitRestriction, OffsetRestriction, TableUtils, SQLiteResponse, PageInfo, DisplayMetaComponent, MetaService, DefaultMetaParser, InputExecutor, Language, FormMetaComponent, APIExecutor, DateUtils, ORCompoundRestriction, LikeRestriction, AndCompoundRestriction, InRestriction, NotEqualRestriction, GreaterOrEqualRestriction, LessOrEqualRestriction, AppRouter, TranslateService, CoreModule, ChangeAction, Setting, SettingService, DataSyncService, NotificationType, DeviceService, NotificationMgr, ConfigToken } from '@allianzSND/core';
import { Observable, of, from, BehaviorSubject, Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const calendarEditMetaControllerToken = new InjectionToken("calendarEditMetaController");
/** @type {?} */
const calendarDetailMetaControllerToken = new InjectionToken("calendarDetailMetaController");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultCalendarEditMetaController {
    /**
     * @param {?} profileCodeService
     */
    constructor(profileCodeService) {
        this.profileCodeService = profileCodeService;
        this.alertOpt = [];
        this.alertOpt = this.profileCodeService.getCodeArray("Calendar_RemindTime");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onDataUpdated(data) {
        /** @type {?} */
        let IsAllDay = data['IsAllDay'] === 'Y';
        data["Alert1Option"] = this.getAlertOption(IsAllDay);
        data["Alert2Option"] = this.getAlertOption(IsAllDay);
        data["Alert3Option"] = this.getAlertOption(IsAllDay);
        if (data['StartTime']) {
            data['StartDate'] = startOfDay(new Date(data['StartTime']));
            data['StartTime'] = new Date(data['StartTime']);
        }
        else {
            data['StartDate'] = data["ViewDate"];
            data['StartTime'] = addHours(this.toFiveUnit(this.combineDateTime(data["ViewDate"], new Date())), 1);
            if (!IsAllDay)
                data['StartDate'] = data['StartTime'];
        }
        if (data['EndTime']) {
            data['EndDate'] = startOfDay(new Date(data['EndTime']));
            data['EndTime'] = new Date(data['EndTime']);
        }
        else {
            data['EndDate'] = startOfDay(data['StartDate']);
            data['EndTime'] = addHours(data['StartTime'], 1);
            if (!IsAllDay)
                data['EndDate'] = data['EndTime'];
        }
        if (!data['IsAllDay']) {
            data['IsAllDay'] = 'N';
        }
        if (!data['IsAlert']) {
            data['IsAlert'] = 'Y';
        }
        if (!data['Alert1']) {
            data['Alert1'] = IsAllDay ? "2" : "8";
        }
        if (!data['Alert2']) {
            data['Alert2'] = '';
        }
        console.log("Default controller onDataUpdated:", data);
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValueChange(column, value, groupId, index, data, validationResult) {
        /** @type {?} */
        let IsAllDay = data['IsAllDay'] === 'Y';
        if (column === 'IsAllDay') {
            data[column] = value ? 'Y' : 'N';
            this.checkEndBeforeStartError(data, validationResult);
            data["Alert1Option"] = this.getAlertOption(value);
            data["Alert2Option"] = this.getAlertOption(value);
            data["Alert3Option"] = this.getAlertOption(value);
            data["Alert1"] = value ? "2" : "8";
            data["Alert2"] = "";
            validationResult.deleteError("Alert1");
            validationResult.deleteError("Alert2");
        }
        else if (column === 'IsAlert') {
            data[column] = value ? 'Y' : 'N';
            if (value) {
                if (data['Alert1'] === data['Alert2'] && data['Alert1'])
                    validationResult.setErrorMap('Alert2', 'Wrong_Alert');
                else if (!data['Alert1'] && !data['Alert2'])
                    validationResult.setErrorMap('Alert1', 'Wrong_Alert_Require');
            }
            else {
                validationResult.deleteError("Alert1");
                validationResult.deleteError("Alert1");
            }
        }
        else if (column === 'StartDate') {
            if (!value)
                data["StartDate"] = startOfDay(new Date());
            else
                data["StartDate"] = value;
            if (IsAllDay) {
                data['EndDate'] = data["StartDate"];
            }
            else {
                data['EndDate'] = this.getToDate(data["StartDate"], data["StartTime"]);
                data['EndTime'] = this.getToDate(data["StartDate"], data["StartTime"]);
            }
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'StartTime') {
            if (!value)
                data["StartTime"] = this.toFiveUnit(new Date());
            else
                data["StartTime"] = this.toFiveUnit(value);
            data['EndDate'] = this.getToDate(data["StartDate"], data["StartTime"]);
            data['EndTime'] = this.getToDate(data["StartDate"], data["StartTime"]);
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'EndDate') {
            //CHECK if to > from+15
            if (!value)
                data["EndDate"] = startOfDay(new Date());
            else
                data["EndDate"] = value;
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'EndTime') {
            if (!value)
                data["EndTime"] = this.toFiveUnit(new Date());
            else
                data["EndTime"] = this.toFiveUnit(value);
            this.checkEndBeforeStartError(data, validationResult);
        }
        else if (column === 'Alert1' || column === 'Alert2') {
            if (data['Alert1'] === data['Alert2'] && data['Alert1'])
                validationResult.setErrorMap('Alert2', 'Wrong_Alert');
            else if (data['IsAlert'] === 'Y' && !data['Alert1'] && !data['Alert2'])
                validationResult.setErrorMap("Alert1", "Wrong_Alert_Require");
            else {
                validationResult.deleteError('Alert1');
                validationResult.deleteError('Alert2');
            }
        }
    }
    /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValidateAll(data, validationResult) {
        if (data["IsAllDay"] === 'Y') {
            data["StartDateTime"] = startOfDay(data["StartDate"]);
            data["EndDateTime"] = startOfDay(data["EndDate"]);
        }
        else {
            data["StartDateTime"] = this.combineDateTime(data["StartDate"], data["StartTime"]);
            data["EndDateTime"] = this.combineDateTime(data["EndDate"], data["EndTime"]);
        }
        if (!data["ClientID"])
            data["ClientID"] = v4();
        if (data["IsAlert"] === 'Y' && !data["Alert1"] && !data["Alert2"]) {
            validationResult.setErrorMap("Alert1", "Wrong_Alert_Require");
        }
        return validationResult.isTrue();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    btnClick(type, id, data) { }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    toFiveUnit(date) {
        /** @type {?} */
        let now = date;
        /** @type {?} */
        let minutes = getMinutes(now);
        /** @type {?} */
        let toAdd = minutes % 5 === 0 ? 0 : 5 - (minutes % 5);
        return addMinutes(now, toAdd);
    }
    /**
     * @private
     * @param {?} fromDate
     * @param {?} fromTime
     * @return {?}
     */
    getToDate(fromDate, fromTime) {
        console.log("GetToDate:", fromDate, fromTime);
        console.log("GetMonth:", getMonth(fromDate));
        /** @type {?} */
        let from$$1 = new Date(getYear(fromDate), getMonth(fromDate), getDate(fromDate), getHours(fromTime), getMinutes(fromTime));
        from$$1 = this.toFiveUnit(from$$1);
        return addHours(from$$1, 1);
    }
    /**
     * @private
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    checkEndBeforeStartError(data, validationResult) {
        validationResult.deleteError("StartDate");
        validationResult.deleteError("EndDate");
        validationResult.deleteError("StartTime");
        validationResult.deleteError("EndTime");
        /** @type {?} */
        let IsAllDay = data['IsAllDay'] === 'Y';
        if (!(isSameDay(data["StartDate"], data["EndDate"]) || isAfter(data["EndDate"], data["StartDate"]))) {
            validationResult.setErrorMap('StartDate', "Wrong_Start_Time");
            return;
        }
        if (!IsAllDay) {
            /** @type {?} */
            let fromDate = data["StartDate"];
            /** @type {?} */
            let fromTime = data["StartTime"];
            /** @type {?} */
            let EndDate = data["EndDate"];
            /** @type {?} */
            let EndTime = data["EndTime"];
            /** @type {?} */
            let from$$1 = this.combineDateTime(fromDate, fromTime);
            /** @type {?} */
            let end = this.combineDateTime(EndDate, EndTime);
            if (isBefore(end, addMinutes(from$$1, 15))) {
                validationResult.setErrorMap('EndDate', "");
                validationResult.setErrorMap('EndTime', "Wrong_End_Time");
            }
        }
    }
    /**
     * @private
     * @param {?} date
     * @param {?} time
     * @return {?}
     */
    combineDateTime(date, time) {
        return new Date(getYear(date), getMonth(date), getDate(date), getHours(time), getMinutes(time));
    }
    /**
     * @private
     * @param {?} IsAllDay
     * @return {?}
     */
    getAlertOption(IsAllDay) {
        return this.alertOpt.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => JSON.parse(x.getArguments()).isAllDay === IsAllDay))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => new SelectOption(x.getCode(), this.profileCodeService.convertCode2Text(x.getTypeId(), x.getCode()))));
    }
}
DefaultCalendarEditMetaController.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
DefaultCalendarEditMetaController.ctorParameters = () => [
    { type: ProfileCodeService }
];
/** @nocollapse */ DefaultCalendarEditMetaController.ngInjectableDef = defineInjectable({ factory: function DefaultCalendarEditMetaController_Factory() { return new DefaultCalendarEditMetaController(inject(ProfileCodeService)); }, token: DefaultCalendarEditMetaController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const customerEditMetaControllerToken = new InjectionToken("customerEditMetaController");
/** @type {?} */
const customerDetailMetaControllerToken = new InjectionToken("customerDetailMetaController");
/** @type {?} */
const customerContactEditMetaControllerToken = new InjectionToken("customerContactEditMetaController");
/** @type {?} */
const customerContactDetailMetaControllerToken = new InjectionToken("customerContactDetailMetaController");
/** @type {?} */
const customerFilterMetaControllerToken = new InjectionToken("customerFilterMetaController");
/** @type {?} */
const customerCriteriaSearchToken = new InjectionToken("customerCriteriaSearch");
/** @type {?} */
const customerImportDisplayToken = new InjectionToken("customerImportDisplay");
/** @type {?} */
const addProgressPointToken = new InjectionToken("addProgressPoint");
/** @type {?} */
const customerShowRuleToken = new InjectionToken("customerShowRule");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarEditComponent extends FormMetaComponent {
    /**
     * @param {?} elementRef
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} defaultMetaController
     * @param {?} customMetaController
     * @param {?} addProgressPoint
     * @param {?} showRule
     */
    constructor(elementRef, metaService, profileCodeService, metaParser, metaExecutor, defaultMetaController, customMetaController, addProgressPoint, showRule) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.elementRef = elementRef;
        this.metaService = metaService;
        this.addProgressPoint = addProgressPoint;
        this.showRule = showRule;
        this.isMetaDataDone = new EventEmitter();
        this.isSaveClickChange = new EventEmitter();
        this.editType = 'add';
        this.saveEvent = new EventEmitter();
        this._viewDate = new Date();
        this._isSaveClick = false;
        this.language = new Language();
        this._translateMap = new Map();
        this.calendarEventList = [];
        this.activityOptionList = [];
        this.customerClientOptionList = [];
        this.alertOptionList = [];
        this.eventListBGColor = 'transparent';
        this._customerClientID = '';
        console.log("calendar-edit construct:", defaultMetaController, customMetaController);
        if (customMetaController)
            this._metaController = customMetaController;
        else
            this._metaController = defaultMetaController;
    }
    /**
     * @return {?}
     */
    get isSaveClick() { return this._isSaveClick; }
    /**
     * @param {?} isSaveClick
     * @return {?}
     */
    set isSaveClick(isSaveClick) {
        console.log("CalendarEdit set isSaveClick:", isSaveClick);
        this._isSaveClick = isSaveClick;
        if (this._isSaveClick == true) {
            console.log("Click Calendar edit save");
            this.onBtnClick('submit', 'save');
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.isSaveClickChange.emit(false);
            }), 500);
        }
    }
    /**
     * @return {?}
     */
    get clientID() {
        return this._clientID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clientID(value) {
        this._clientID = value;
        if (value.length == 0) {
            this.editType = 'add';
        }
        else
            this.editType = 'edit';
        if (this.isMetaLoaded())
            this.loadData();
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return {
            "_clientID": this._clientID
        };
    }
    // For客戶Select用的選項
    /**
     * @return {?}
     */
    get customerItemList() { return this.customerClientOptionList; }
    /**
     * @param {?} customerItemList
     * @return {?}
     */
    set customerItemList(customerItemList) {
        console.log("calendar-edit set customerItemList:", customerItemList);
        this.customerClientOptionList = customerItemList;
        if (this._data)
            this.fillDefaultVal();
    }
    // For EventList用的
    /**
     * @return {?}
     */
    get translateMap() { return this._translateMap; }
    /**
     * @param {?} translateMap
     * @return {?}
     */
    set translateMap(translateMap) {
        this._translateMap = translateMap;
    }
    /**
     * @return {?}
     */
    get viewDate() { return this._viewDate; }
    /**
     * @param {?} viewDate
     * @return {?}
     */
    set viewDate(viewDate) {
        console.warn('viewDateChange');
        this._viewDate = viewDate;
    }
    // For EventList用的
    /**
     * @return {?}
     */
    get todayCalendarEvent() { return this.calendarEventList; }
    /**
     * @param {?} calendarEventList
     * @return {?}
     */
    set todayCalendarEvent(calendarEventList) {
        this.calendarEventList = calendarEventList;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        this.editEvent();
        super.ngOnInit();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        if (type === 'submit') {
            //offline add progress point
            console.log("calendar addProgressPoint", this.addProgressPoint);
            if (this.addProgressPoint && this.editType == "add") {
                this.addProgressPoint.addCalendarPoint(this._data, 1);
            }
            this.saveEvent.emit({ data: this._data, type: this.editType });
        }
        this._metaController.btnClick(type, id, this._data);
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        /** @type {?} */
        let result = true;
        if (!this.validationResult.isTrue()) {
            //If basic validation has error.
            result = false;
            if (this.validationResult.isError('Note'))
                alert("Note " + this.validationResult.getErrorMsg("Note"));
        }
        else {
            result = this._metaController.onValidateAll(this._data, this.validationResult);
            console.log("onValidate:", result);
        }
        if (!result) {
            this.saveEvent.emit({ data: null, type: 'fail' });
            this.scrollToError();
        }
        return result;
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'calendarEdit';
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupId
     * @param {?=} index
     * @return {?}
     */
    onValueChange(column, value, groupId = null, index = -1) {
        this._data[column] = value;
        this._metaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        console.log("Calendar Edit DataUpdated:", this._data);
        this._data["ViewDate"] = this._viewDate;
        this._data["EditType"] = this.editType;
        this._data["CustomerClientID"] = this._customerClientID ? this._customerClientID : this._data["CustomerClientID"];
        this.fillDefaultVal();
        if (this._metaController) {
            this._metaController.onDataUpdated(this._data);
        }
        this.isMetaDataDone.emit(true);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    shouldHidden(id) {
        /** @type {?} */
        let alertId = ['Alert1', 'Alert2'];
        /** @type {?} */
        let timePickerId = ['StartTime', 'EndTime'];
        if (alertId.indexOf(id) > -1)
            return this._data["IsAlert"] === 'N';
        else if (timePickerId.indexOf(id) > -1)
            return this._data["IsAllDay"] === 'Y';
        else if (id === 'CustomerClientID')
            return this._customerClientID.length > 0;
    }
    /**
     * @return {?}
     */
    get customerClientID() {
        return this._customerClientID;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set customerClientID(id) {
        this._customerClientID = id;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get rowConfig() {
        return this.metaConfig.Rows;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        // wle.warn('Width: ', this.windowWidth);
    }
    /**
     * @private
     * @return {?}
     */
    fillDefaultVal() {
        this._data["CustomerClientIDOption"] = this.customerClientOptionList;
    }
    /**
     * @return {?}
     */
    editEvent() {
        this.showDate = this._convertDate(this._viewDate);
        console.log("EditEvent showDate:", this.showDate);
    }
    /**
     * @return {?}
     */
    isMetaLoaded() {
        return this.metaLoaded;
    }
    /**
     * @return {?}
     */
    scrollToError() {
        console.log('in scrollToError');
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let errorBlock = this.elementRef.nativeElement.querySelector('.error-msg');
            /** @type {?} */
            let scrollContent = document.querySelector('.calendar-edit-content').querySelector('.form-scroll-content');
            if (errorBlock && scrollContent) {
                /** @type {?} */
                let move = errorBlock.offsetTop - 50;
                scrollContent.scrollTo({ top: move, behavior: "smooth" });
                console.log('scrollToError', move);
            }
            console.log('scrollToError', scrollContent, errorBlock);
        }), 200);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    _convertDate(date) {
        if (this.showRule) {
            return this.showRule.convertDate(date);
        }
        else {
            return format(date, 'MM/dd/yyyy');
        }
    }
}
CalendarEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar-edit',
                template: "<ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #mobileBlock>\n  <app-ui-form-layout-row>\n    <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n  </app-ui-form-layout-row>\n</ng-template>\n<!-- end: mobileBlock -->\n\n<ng-template #pcBlock>\n  <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"eventListContent\"></ng-container>\n</ng-template>\n<!-- end: pcBlock -->\n\n<ng-template #formContent>\n  <app-ui-form-layout-col *ngIf=\"data && isMetaLoaded()\" [colPC]=\"8\" [colNB]=\"8\" [colPad]=\"12\" [colMobile]=\"12\">\n    <app-ui-form-layout-advanced>\n      <ng-container *ngFor=\"let row of rowConfig;\">\n        <app-ui-form-title-sm *ngIf=\"row[0].rowTitle\">{{row[0].rowTitle | translate}}\n        </app-ui-form-title-sm>\n        <app-ui-form-layout-row *ngIf=\"!shouldHidden(row[0].id)\">\n          <ng-container *ngFor=\"let col of row;\">\n            <!-- Customize Alert2 -->\n            <app-ui-form-layout-col *ngIf=\"col.id==='Alert2'\" [colPC]=\"'auto'\" [colNB]=\"'auto'\" [colPad]=\"'auto'\"\n              [colMobile]=\"'auto'\" [id]=\"col.id\">\n              <div class=\"calendar-edit-alert-switcher\"></div>\n            </app-ui-form-layout-col>\n            <!-- End of Customize Alert2 -->\n            <app-ui-form-layout-col *ngIf=\"!shouldHidden(col.id)\" [colPC]=\"col.grid.pc\" [colNB]=\"col.grid.nb\"\n              [colPad]=\"col.grid.pad\" [colMobile]=\"col.grid.mobile\">\n              <!-- Input -->\n              <ng-container *ngIf=\"col.type==='Input'\">\n                <app-ui-form-input [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\"\n                  [inputTitle]=\"col.name | translate\" [name]=\"col.name|translate\" [isDisable]=\"false\"\n                  [isError]=\"validationResult.isError(col.id)\" [maxLength]=\"col.maxLength || 999\" [id]=\"col.id\">\n                </app-ui-form-input>\n              </ng-container>\n              <!-- End of Input -->\n              <!-- Select -->\n              <ng-container *ngIf=\"col.type==='Select'\">\n                <app-ui-form-select [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\"\n                  [selectTitle]=\"col.name | translate\" [selectOption]=\"data[col.id+'Option']\"\n                  [isShowTitle]=\"col.showTitle\" [isError]=\"validationResult.isError(col.id)\"\n                  [placeholder]=\"col.placeholder | translate\" [id]=\"col.id\" [isShowDefaultOption]=\"col.showDefaultOption\">\n                </app-ui-form-select>\n              </ng-container>\n              <!-- End of Select -->\n              <!-- Switch -->\n              <ng-container *ngIf=\"col.type==='Switch'\">\n                <app-ui-form-switcher [nxValue]=\"data[col.id]==='Y'\" (nxValueChange)=\"onChange(col.id,$event)\"\n                  [labelTxt]=\"!col.showTitle ? '' : col.name | translate \" [id]=\"col.id\">\n                </app-ui-form-switcher>\n              </ng-container>\n              <!-- End of Switch -->\n              <!-- Date -->\n              <ng-container *ngIf=\"col.type==='Date'\">\n                <app-ui-form-date [nxValue]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\"\n                  [title]=\"col.name | translate\" [isError]=\"validationResult.isError(col.id)\" [id]=\"col.id\">\n                </app-ui-form-date>\n              </ng-container>\n              <!-- End of Date -->\n              <!-- Time -->\n              <ng-container *ngIf=\"col.type==='Time'\">\n                <app-ui-form-timepicker [nxValue]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\"\n                  [isError]=\"validationResult.isError(col.id)\" [id]=\"col.id\">\n                </app-ui-form-timepicker>\n              </ng-container>\n              <!-- End of Time -->\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(col.id)\">\n                {{validationResult.getErrorMsg(col.id) | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </ng-container>\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-form-layout-advanced>\n  </app-ui-form-layout-col>\n  <ng-container>\n\n  </ng-container>\n</ng-template>\n<!-- end: formContent -->\n\n<ng-template #eventListContent>\n  <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"0\" [colMobile]=\"0\"\n    [ngStyle]=\"{ 'background-color': eventListBGColor }\" *ngIf=\"data && isMetaLoaded()\">\n    <ng-container *ngIf=\"calendarEventList\">\n      <div class=\"calendar-edit-schedule\" [ngClass]=\"calendarEventList.length == 0? '':'bgColor'\">\n\n        <app-ui-calendar-event-list [ngClass]=\"calendarEventList.length == 0? 'calendar-event-list-no-data':''\"\n          [translateMap]=\"_translateMap\" [title]=\"calendarEventList.length>0 ? showDate:''\"\n          [colorCode]=\"eventListBGColor\" [eventList]=\"calendarEventList\">\n          <div scheduleNoData>\n            <p class=\"calendar-list-noData-text\">\n              {{this.translateMap.get('No_Schedule') ? this.translateMap.get('No_Schedule') : 'You have no schedule for today'}}\n            </p>\n          </div>\n        </app-ui-calendar-event-list>\n      </div>\n    </ng-container>\n  </app-ui-form-layout-col>\n</ng-template>\n<!-- end: evenListContent -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:flex;height:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host>app-ui-form-layout-col{padding-left:0!important;margin-bottom:0!important;padding-right:0}:host>app-ui-form-layout-col:first-child{min-width:calc(100% - 200px);padding-left:20px!important;padding-right:20px}:host>app-ui-form-layout-col:last-child{max-width:200px}:host .calendar-edit-alert-switcher{display:inline-block;width:56px}:host ::ng-deep app-ui-form-title-sm{display:block;margin-bottom:-15px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container{padding:20px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container .ui-text-type-title{text-align:left}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container app-ui-text-type-item:last-child{padding-bottom:20px;border-bottom:1px solid #ececec}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content{width:100%;min-width:1px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content>p{display:block;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host ::ng-deep .calendar-event-list-no-data{display:inline-block;width:100%;height:100%}:host ::ng-deep .calendar-event-list-no-data ::ng-deep app-ui-text-type .ui-text-type-container{width:100%;height:100%;padding:0}:host ::ng-deep .calendar-edit-schedule{width:100%;height:100%;margin:0;background-image:url(assets/img/appointment-noData.svg);background-color:#f5f5f5;background-repeat:no-repeat;background-size:cover;background-position:center bottom}:host ::ng-deep .calendar-edit-schedule.bgColor{background-image:none;background-color:#f5f5f5}:host ::ng-deep .calendar-edit-schedule .calendar-list-noData-text{padding:200px 25px 0}:host ::ng-deep .calendar-edit-schedule p{font-size:.875rem;font-weight:300;line-height:2;letter-spacing:.2px;text-align:center;color:#414141}@media screen and (max-width:1023px){:host>app-ui-form-layout-col:first-child{padding-left:0!important}:host>app-ui-form-layout-col:first-child,:host>app-ui-form-layout-col:last-child{max-width:100%}:host .calendar-edit-allDay-date ::ng-deep .ui-datepicker{margin-top:15px}:host [calendarEditAlertRow] app-ui-form-layout-col:last-child{flex:1!important;max-width:100%!important}:host ::ng-deep app-ui-form-layout-advanced .gas-layout-form .gas-row{justify-content:space-between}}"]
            }] }
];
CalendarEditComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: APIExecutor },
    { type: DefaultCalendarEditMetaController },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [calendarEditMetaControllerToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [addProgressPointToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
];
CalendarEditComponent.propDecorators = {
    isMetaDataDone: [{ type: Output }],
    isSaveClick: [{ type: Input }],
    isSaveClickChange: [{ type: Output }],
    clientID: [{ type: Input }],
    customerItemList: [{ type: Input }],
    translateMap: [{ type: Input }],
    viewDate: [{ type: Input }],
    todayCalendarEvent: [{ type: Input }],
    saveEvent: [{ type: Output }],
    customerClientID: [{ type: Input }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultCalendarDetailMetaController {
    /**
     * @param {?} data
     * @return {?}
     */
    onDataUpdated(data) { }
    /**
     * @param {?} data
     * @return {?}
     */
    onValidateAll(data) {
        return true;
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} vaildResult
     * @return {?}
     */
    onValueChange(column, value, groupId, index, data, vaildResult) {
    }
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    btnClick(type, id, data) { }
}
DefaultCalendarDetailMetaController.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */ DefaultCalendarDetailMetaController.ngInjectableDef = defineInjectable({ factory: function DefaultCalendarDetailMetaController_Factory() { return new DefaultCalendarDetailMetaController(); }, token: DefaultCalendarDetailMetaController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarDetailComponent extends DisplayMetaComponent {
    /**
     * @param {?} DatePipe
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} defaulterMetaController
     * @param {?} customMetaController
     */
    constructor(DatePipe$$1, metaService, profileCodeService, metaParser, metaExecutor, defaulterMetaController, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.DatePipe = DatePipe$$1;
        this.isMetaDataDone = new EventEmitter();
        this._customerClientName = '';
        this.language = new Language();
        this.isSameDay = true;
        this.isAllDay = false;
        this._metaController = null;
        this._clientID = '';
        if (customMetaController) {
            this._metaController = customMetaController;
        }
        else
            this._metaController = defaulterMetaController;
    }
    /**
     * @return {?}
     */
    get calendarEventDetail() { return this._calendarEventDetail; }
    /**
     * @param {?} calendarEventDetail
     * @return {?}
     */
    set calendarEventDetail(calendarEventDetail) {
        if (StringUtils.isNotEmpty(calendarEventDetail)) {
            this._calendarEventDetail = calendarEventDetail;
            this.isSameDay = isSameDay(this._calendarEventDetail.end, this._calendarEventDetail.start);
            this.isAllDay = calendarEventDetail.allDay;
            this._clientID = calendarEventDetail.clientID;
            if (this.isMetaLoaded())
                this.loadData();
        }
    }
    /**
     * @return {?}
     */
    get customerClientName() {
        return this._customerClientName;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set customerClientName(val) {
        this._customerClientName = val;
        this.waitUntilMetaLoaded().then((/**
         * @return {?}
         */
        () => {
            this.onDataUpdated();
        }));
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get rowConfig() {
        return this.metaConfig.Rows;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'calendarDetail';
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return {
            _clientID: this._clientID
        };
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        console.log("calendar-detail onDataUpdated:", this._data);
        this._data["CustomerClientName"] = this._customerClientName;
        this._data["DisplayDate"] = this.getDisplayDateHTML();
        this.isMetaDataDone.emit(true);
    }
    /**
     * @private
     * @return {?}
     */
    getDisplayDateHTML() {
        /** @type {?} */
        let _HTML = '';
        /** @type {?} */
        let start = new Date(this._data["StartTime"]);
        /** @type {?} */
        let end = new Date(this._data["EndTime"]);
        if (this.isAllDay) {
            _HTML = `${this.DatePipe.transform(start, 'MM/dd/y')}-${this.DatePipe.transform(end, 'MM/dd/y')}`;
        }
        else {
            if (this.isSameDay)
                _HTML = `${this.DatePipe.transform(start, 'MM/dd/y HH:mm')}-${this.DatePipe.transform(end, 'HH:mm')}`;
            else
                _HTML = `${this.DatePipe.transform(start, 'MM/dd/y HH:mm')}-<br />${this.DatePipe.transform(end, 'MM/dd/y HH:mm')}`;
        }
        return _HTML;
    }
}
CalendarDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar-detail',
                template: "<div class=\"calendar-detail-content\">\n  <ng-container *ngIf=\"data && isMetaLoaded()\">\n    <ng-container *ngFor=\"let row of rowConfig\">\n      <app-ui-info-text2 *ngIf=\"data[row[0].id]\">\n        <ng-container textType=\"title\">{{row[0].name | translate}}</ng-container>\n        <ng-container *ngFor=\"let col of row; last as isLast\" textType=\"text\">\n          <span [innerHtml]=\"data[col.id]\"></span>\n          <br *ngIf=\"!isLast\" />\n        </ng-container>\n      </app-ui-info-text2>\n    </ng-container>\n  </ng-container>\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-detail-content{padding-top:30px}.calendar-detail-content ::ng-deep .gas-layout-form .gas-row-block:first-child{margin-top:0}.calendar-detail-content ::ng-deep app-ui-info-text2:not(:last-child){display:block;margin-bottom:30px}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .title-block{margin-bottom:0}.calendar-detail-content ::ng-deep app-ui-info-text2 .info-unit-block .text-block>p{color:#414141;font-weight:300}@media screen and (max-width:1023px){.calendar-detail-content{padding-top:0}}"]
            }] }
];
CalendarDetailComponent.ctorParameters = () => [
    { type: DatePipe },
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: APIExecutor },
    { type: DefaultCalendarDetailMetaController },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [calendarDetailMetaControllerToken,] }] }
];
CalendarDetailComponent.propDecorators = {
    isMetaDataDone: [{ type: Output }],
    calendarEventDetail: [{ type: Input }],
    customerClientName: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarFilterComponent {
    constructor() {
        this._optionMap = new Map();
        this.activityTypeList = []; // DB中所有activityType
        this.currentFilterOptionList = [];
        this.activityTypeListChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get optionMap() { return this._optionMap; }
    /**
     * @param {?} optionMap
     * @return {?}
     */
    set optionMap(optionMap) {
        this._optionMap = optionMap;
        this.activityTypeList = this._optionMap.get('Calendar_Type');
        this.activityTypeList.forEach((/**
         * @param {?} codeItem
         * @return {?}
         */
        (codeItem) => {
            if (codeItem.isCheck) {
                this.currentFilterOptionList.push(codeItem.getCode());
            }
        }));
    }
    /**
     * @return {?}
     */
    onActivityFilter() {
        this.activityTypeListChange.emit(this.activityTypeList);
    } // filter event
    // filter event
    /**
     * @param {?} item
     * @return {?}
     */
    toActivityColor(item) {
        return JSON.parse(item.getArguments()).color;
    }
}
CalendarFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar-filter',
                template: "<ng-container *ngIf=\"activityTypeList\">\n  <div class=\"calendar-filter-item\" *ngFor=\" let codeItem of activityTypeList\">\n    <app-ui-form-checkbox [(nxValue)]=\"codeItem.isCheck\" [isDisable]=\"false\" (nxValueChange)=\"onActivityFilter()\" [colorCode]=\"toActivityColor(codeItem)\" >\n      <ng-container checkboxText=\"style2\">{{codeItem.displayText}}</ng-container>\n    </app-ui-form-checkbox>\n  </div>\n</ng-container>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-filter-item:not(:last-child){margin-bottom:25px}"]
            }] }
];
CalendarFilterComponent.ctorParameters = () => [];
CalendarFilterComponent.propDecorators = {
    optionMap: [{ type: Input }],
    activityTypeListChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarEventColor {
    /**
     * @param {?} primary
     * @param {?} secondary
     */
    constructor(primary, secondary) {
        this._primary = primary;
        this._secondary = secondary;
    }
    /**
     * @param {?} primary
     * @param {?} secondary
     * @return {?}
     */
    setCalendarEventColor(primary, secondary) {
        this._primary = primary;
        this._secondary = secondary;
    }
    /**
     * @param {?} primary
     * @return {?}
     */
    set primary(primary) {
        this._primary = primary;
    }
    /**
     * @param {?} secondary
     * @return {?}
     */
    set secondary(secondary) {
        this._secondary = secondary;
    }
    /**
     * @return {?}
     */
    get primary() {
        return this._primary;
    }
    /**
     * @return {?}
     */
    get secondary() {
        return this._secondary;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarEventDetail {
    /**
     * @param {?} clientID
     * @param {?} calendarID
     * @param {?} customerClientID
     * @param {?} title
     * @param {?} location
     * @param {?} calendarType
     * @param {?} isAllDay
     * @param {?} start
     * @param {?} end
     * @param {?} isAlert
     * @param {?} alert1
     * @param {?} alert2
     * @param {?} alert3
     * @param {?} remark
     * @param {?} color
     */
    constructor(clientID, calendarID, customerClientID, title, location, calendarType, isAllDay, start, end, isAlert, alert1, alert2, alert3, remark, color) {
        this._clientID = clientID;
        this._calendarID = calendarID;
        this._customerClientID = customerClientID;
        this._title = title;
        this._location = location;
        this._activity = calendarType;
        this._isAllDay = (isAllDay == 'Y');
        this._start = new Date(start);
        this._end = new Date(end);
        this._isAlert = (isAlert == 'Y');
        this._alert1 = alert1;
        this._alert2 = alert2;
        this._alert3 = alert3;
        this._remark = remark;
        if (StringUtils.isEmpty(this._customerClientID))
            this._customerClientID = null;
        if (StringUtils.isEmpty(this._activity))
            this._activity = null;
        if (StringUtils.isEmpty(this._title))
            this._title = '';
        if (StringUtils.isEmpty(this._location))
            this._location = '';
        if (StringUtils.isEmpty(this._alert1))
            this._alert1 = '';
        if (StringUtils.isEmpty(this._alert2))
            this._alert2 = null;
        if (StringUtils.isEmpty(this._alert3))
            this._alert3 = '';
        if (StringUtils.isEmpty(this._remark))
            this._remark = '';
        /** @type {?} */
        let eventColor = JSON.parse(color);
        if (eventColor != null)
            this._color = new CalendarEventColor(eventColor.color, eventColor.backgroundColor);
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} calendarID
     * @return {?}
     */
    set calendarID(calendarID) {
        this._calendarID = calendarID;
    }
    /**
     * @param {?} customerClientID
     * @return {?}
     */
    set customerClientID(customerClientID) {
        this._customerClientID = customerClientID;
    }
    /**
     * @param {?} title
     * @return {?}
     */
    set title(title) {
        this._title = title;
    }
    /**
     * @param {?} location
     * @return {?}
     */
    set location(location) {
        this._location = location;
    }
    /**
     * @param {?} calendarType
     * @return {?}
     */
    set activity(calendarType) {
        this._activity = calendarType;
    }
    /**
     * @param {?} isAllDay
     * @return {?}
     */
    set allDay(isAllDay) {
        this._isAllDay = isAllDay;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set start(date) {
        this._start = date;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set end(date) {
        this._end = date;
    }
    /**
     * @param {?} isAlert
     * @return {?}
     */
    set isAlert(isAlert) {
        this._isAlert = isAlert;
    }
    /**
     * @param {?} alert1
     * @return {?}
     */
    set alert1(alert1) {
        this._alert1 = alert1;
    }
    /**
     * @param {?} alert2
     * @return {?}
     */
    set alert2(alert2) {
        this._alert2 = alert2;
    }
    /**
     * @param {?} alert3
     * @return {?}
     */
    set alert3(alert3) {
        this._alert3 = alert3;
    }
    /**
     * @param {?} remark
     * @return {?}
     */
    set remark(remark) {
        this._remark = remark;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set color(color) {
        /** @type {?} */
        let eventColor = JSON.parse(color);
        if (eventColor != null)
            this._color = new CalendarEventColor(eventColor.color, eventColor.backgroundColor);
    }
    /**
     * @param {?} displayActivity
     * @return {?}
     */
    set displayActivity(displayActivity) {
        this._displayActivity = displayActivity;
    }
    /**
     * @param {?} displayAlert1
     * @return {?}
     */
    set displayAlert1(displayAlert1) {
        this._displayAlert1 = displayAlert1;
    }
    /**
     * @param {?} displayAlert2
     * @return {?}
     */
    set displayAlert2(displayAlert2) {
        this._displayAlert2 = displayAlert2;
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
    get calendarID() {
        return this._calendarID;
    }
    /**
     * @return {?}
     */
    get customerClientID() {
        return this._customerClientID;
    }
    /**
     * @return {?}
     */
    get title() {
        return this._title;
    }
    /**
     * @return {?}
     */
    get location() {
        return this._location;
    }
    /**
     * @return {?}
     */
    get activity() {
        return this._activity;
    }
    /**
     * @return {?}
     */
    get allDay() {
        return this._isAllDay;
    }
    /**
     * @return {?}
     */
    get start() {
        return this._start;
    }
    /**
     * @return {?}
     */
    get end() {
        return this._end;
    }
    /**
     * @return {?}
     */
    get isAlert() {
        return this._isAlert;
    }
    /**
     * @return {?}
     */
    get alert1() {
        return this._alert1;
    }
    /**
     * @return {?}
     */
    get alert2() {
        return this._alert2;
    }
    /**
     * @return {?}
     */
    get alert3() {
        return this._alert3;
    }
    /**
     * @return {?}
     */
    get remark() {
        return this._remark;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @return {?}
     */
    get displayActivity() {
        return this._displayActivity;
    }
    /**
     * @return {?}
     */
    get displayAlert1() {
        return this._displayAlert1;
    }
    /**
     * @return {?}
     */
    get displayAlert2() {
        return this._displayAlert2;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarService {
    /**
     * @param {?} dispatch
     * @param {?} profileCodeService
     * @param {?} APIFactory
     */
    constructor(dispatch, profileCodeService, APIFactory$$1) {
        this.dispatch = dispatch;
        this.profileCodeService = profileCodeService;
        this.APIFactory = APIFactory$$1;
        //register api
    }
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} key
     * @return {?}
     */
    getCalendarEventList(start, end, key) {
        console.debug('calendar-service-getCalendarEventList', start, end, key);
        /** @type {?} */
        let calendarEventListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCalendarEventList')));
        calendarEventListAPI.startTime = start;
        calendarEventListAPI.endTime = end;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('calendar-service-getCAlendarEventList response', data);
                /** @type {?} */
                let returnList = [];
                /** @type {?} */
                let calendarEventList = data['Body'];
                if (calendarEventList) {
                    for (let i = 0; i < calendarEventList.length; i++) {
                        /** @type {?} */
                        let json = calendarEventList[i];
                        /** @type {?} */
                        let event = new CalendarEventDetail(json.ClientID, json.CalendarID, json.CustomerClientID, json.Title, json.Location, json.CalendarType, json.IsAllDay, new Date(json.StartTime), new Date(json.EndTime), json.Remark, json.IsAlert, json.Alert1, json.Alert2, json.Alert3, this.profileCodeService.getArgumentsByCode('Calendar_Type', json.CalendarType));
                        returnList.push(event);
                    }
                    returnList = this.sortCalendarEventList(returnList);
                    observer.next(returnList);
                    observer.complete();
                }
                else {
                    observer.next([]);
                    observer.complete();
                }
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    getCalendarEventDetail(clientID) {
        /** @type {?} */
        let calendarEventDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCalendarEventDetail')));
        calendarEventDetailAPI.ClientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventDetailAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                let detail;
                /** @type {?} */
                let eventDetail = data['Body'];
                eventDetail = eventDetail[0];
                detail = new CalendarEventDetail(eventDetail.ClientID, eventDetail.CalendarID, eventDetail.CustomerClientID, eventDetail.Title, eventDetail.Location, eventDetail.CalendarType, eventDetail.IsAllDay, new Date(eventDetail.StartTime), new Date(eventDetail.EndTime), eventDetail.IsAlert, eventDetail.Alert1, eventDetail.Alert2, eventDetail.Alert3, eventDetail.Remark, this.profileCodeService.getArgumentsByCode('Calendar_Type', eventDetail.CalendarType));
                observer.next(detail);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    deleteCalendarEvent(clientID) {
        /** @type {?} */
        let calendarEventDeleteAPI = (/** @type {?} */ (this.APIFactory.getAPI('deleteCalendarEvent')));
        calendarEventDeleteAPI.clientID = clientID;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventDeleteAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    addCalendarEvent(event) {
        event = this.adjustAlert(event);
        /** @type {?} */
        let calendarEventAddAPI = (/** @type {?} */ (this.APIFactory.getAPI('addCalendarEvent')));
        calendarEventAddAPI.setCalendarEvent(event);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventAddAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} clientID
     * @param {?} event
     * @return {?}
     */
    updateCalendarEvent(clientID, event) {
        event = this.adjustAlert(event);
        /** @type {?} */
        let calendarEventUpdateAPI = (/** @type {?} */ (this.APIFactory.getAPI('updateCalendarEvent')));
        calendarEventUpdateAPI.ClientID = clientID;
        calendarEventUpdateAPI.setCalendarEvent(event);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatch.dispatch(calendarEventUpdateAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    adjustAlert(event) {
        if (event.alert1 == 'Default')
            event.alert1 = '';
        if (event.alert2 == 'Default')
            event.alert2 = '';
        //when alert1 & alert2 have data and not empty
        if (event.isAlert && StringUtils.isNotEmpty(event.alert1) && StringUtils.isNotEmpty(event.alert2)) {
            if (event.allDay) { // sort alert if allDay
                if (JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert1)).day > JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert2)).day) {
                    /** @type {?} */
                    let temp = event.alert1;
                    event.alert1 = event.alert2;
                    event.alert2 = temp;
                }
            }
            else { // sort if not allDay
                if (JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert1)).min > JSON.parse(this.profileCodeService.getArgumentsByCode('Calendar_RemindTime', event.alert2)).min) {
                    /** @type {?} */
                    let temp = event.alert1;
                    event.alert1 = event.alert2;
                    event.alert2 = temp;
                }
            }
        }
        else if (!event.isAlert) {
            event.alert1 = '';
            event.alert2 = '';
            event.alert3 = '';
        }
        event.color = this.profileCodeService.getArgumentsByCode('Calendar_Type', event.activity); // get activity color
        return event;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    calendarValidation(data) {
        /** @type {?} */
        let validationResult = new ValidationResult();
        if (data.title == '')
            validationResult.setErrorMap('title', 'required');
        if (data.title.length > 60) //title length
            validationResult.setErrorMap('title', 'maxLength');
        if (data.location == '')
            validationResult.setErrorMap('location', 'required');
        if (data.location.length > 100) //title length
            validationResult.setErrorMap('location', 'maxLength');
        if (data.activity == 'Default' || data.activity == '') // activity validate
            validationResult.setErrorMap('activity', 'required');
        if (data.isAlert == true && (data.alert1 == 'Default') && (data.alert2 == 'Default'))
            validationResult.setErrorMap('alert1', 'required');
        if (data.isAlert == true && (data.alert1 == data.alert2) && data.alert1 != 'Default')
            validationResult.setErrorMap('alert2', 'sameAlert');
        if (differenceInMinutes(data.end, data.start) < 15 && differenceInMinutes(data.end, data.start) >= 0 && data.allDay != true) {
            validationResult.setErrorMap('time', 'minTime');
        }
        else if (differenceInMinutes(data.end, data.start) < 0) {
            validationResult.setErrorMap('time', 'errorTime');
        }
        if (data.remark.length > 500)
            validationResult.setErrorMap('remark', 'maxLength');
        return validationResult;
    }
    /**
     * @param {?} calendarEventList
     * @return {?}
     */
    sortCalendarEventList(calendarEventList) {
        for (let i = 0; i < calendarEventList.length - 1; i++) {
            for (let j = i + 1; j < calendarEventList.length; j++) {
                if (calendarEventList[j].allDay && !calendarEventList[i].allDay) {
                    /** @type {?} */
                    let temp = calendarEventList[i];
                    calendarEventList[i] = calendarEventList[j];
                    calendarEventList[j] = temp;
                }
            }
        }
        for (let i = 0; i < calendarEventList.length - 1; i++) {
            for (let j = i + 1; j < calendarEventList.length; j++) {
                if (calendarEventList[j].allDay == calendarEventList[i].allDay) {
                    if (calendarEventList[i].allDay) {
                        if (calendarEventList[j].start < calendarEventList[i].start) {
                            /** @type {?} */
                            let temp = calendarEventList[i];
                            calendarEventList[i] = calendarEventList[j];
                            calendarEventList[j] = temp;
                        }
                        else if (isSameDay(calendarEventList[j].start, calendarEventList[i].start)) {
                            if (calendarEventList[j].end > calendarEventList[i].end) {
                                /** @type {?} */
                                let temp = calendarEventList[i];
                                calendarEventList[i] = calendarEventList[j];
                                calendarEventList[j] = temp;
                            }
                        }
                    }
                    else {
                        if (calendarEventList[j].start < calendarEventList[i].start) {
                            /** @type {?} */
                            let temp = calendarEventList[i];
                            calendarEventList[i] = calendarEventList[j];
                            calendarEventList[j] = temp;
                        }
                    }
                }
            }
        }
        return calendarEventList;
    }
}
CalendarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CalendarService.ctorParameters = () => [
    { type: APIDispatch },
    { type: ProfileCodeService },
    { type: APIFactory }
];
/** @nocollapse */ CalendarService.ngInjectableDef = defineInjectable({ factory: function CalendarService_Factory() { return new CalendarService(inject(APIDispatch), inject(ProfileCodeService), inject(APIFactory)); }, token: CalendarService, providedIn: "root" });

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
     */
    constructor(keyword = '', filterMap = new Map()) {
        this.filterMap = new Map();
        this.optionMap = new Map();
        this.extension = {};
        this._keyword = keyword;
        this.filterMap = filterMap;
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
     * @return {?}
     */
    getFilterMap() {
        return this.filterMap;
    }
    /**
     * @return {?}
     */
    getOptionMap() {
        return this.optionMap;
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setOption(name, value) {
        this.optionMap.set(name, value);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getOption(name) {
        if (this.optionMap.has(name))
            return this.optionMap.get(name);
        else
            return null;
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
    /**
     * @return {?}
     */
    toMetaJSON() {
        /** @type {?} */
        let preset = this.toPresetJSON();
        this.optionMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        (value, column) => {
            preset.addValues(column, value);
        }));
        return preset;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        let cloneCriteria = new CustomerFilterCriteria();
        cloneCriteria._keyword = this._keyword;
        cloneCriteria.filterMap = new Map(this.filterMap);
        cloneCriteria.optionMap = new Map(this.optionMap);
        cloneCriteria.extension = Object.assign({}, this.extension);
        return cloneCriteria;
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
    /**
     * @return {?}
     */
    clone() {
        return new CustomerItem(this._clientID, this._firstName, this._lastName, this._tag, this._complementPercent, this._isFollow, this._isOtherSource, (this._isHighlight ? 'Y' : 'N'));
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
    /**
     * @return {?}
     */
    clone() {
        return new CustomerBirthday(this._clientID, this.firstName, this.lastName, this.birthdayMonth, this.birthdayDate);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultCustomerCriteriaSearch {
    /**
     * @param {?} profileCodeService
     */
    constructor(profileCodeService) {
        this.profileCodeService = profileCodeService;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    getRestriction(criteria) {
        console.debug('DefaultCustomerCriteriaSearch criteria:', criteria);
        /** @type {?} */
        let keyword = criteria.keyword;
        /** @type {?} */
        let conditions = [];
        console.debug('customerListAPI keyword', keyword);
        if (StringUtils.isNotEmpty(keyword)) {
            /** @type {?} */
            let compoundRestriction = new ORCompoundRestriction([new LikeRestriction('FirstName', [keyword]), new LikeRestriction('LastName', [keyword])]);
            conditions.push(compoundRestriction);
        }
        /** @type {?} */
        let filterMap = criteria.getFilterMap();
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
                conditions.push(new ORCompoundRestriction(birthdayRestriction));
            }
            else if (key == 'CustomerSource') {
                if (array.length != 2) {
                    /** @type {?} */
                    let datasource = array[0];
                    if (datasource == 'E') {
                        conditions.push(new EqualRestriction('DataSource', ['OPUS']));
                    }
                    else {
                        conditions.push(new NotEqualRestriction('DataSource', ['OPUS']));
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
                    conditions.push(new ORCompoundRestriction(completenessRestriction));
                }
            }
            else {
                conditions.push(new InRestriction(key, array));
            }
        }));
        return conditions;
    }
}
DefaultCustomerCriteriaSearch.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DefaultCustomerCriteriaSearch.ctorParameters = () => [
    { type: ProfileCodeService }
];
/** @nocollapse */ DefaultCustomerCriteriaSearch.ngInjectableDef = defineInjectable({ factory: function DefaultCustomerCriteriaSearch_Factory() { return new DefaultCustomerCriteriaSearch(inject(ProfileCodeService)); }, token: DefaultCustomerCriteriaSearch, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerService {
    /**
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} profileCodeService
     * @param {?} defaultCriteriaSearch
     * @param {?} customCriteriaSearch
     */
    constructor(dispatcher, APIFactory$$1, profileCodeService, defaultCriteriaSearch, customCriteriaSearch) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory$$1;
        this.profileCodeService = profileCodeService;
        this.defaultCriteriaSearch = defaultCriteriaSearch;
        this.customCriteriaSearch = customCriteriaSearch;
        //is first time use customer function
        this._isFirstTime = true;
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
        /** @type {?} */
        let restrictions = [];
        if (this.customCriteriaSearch)
            restrictions = this.customCriteriaSearch.getRestriction(filterCriteria);
        else
            restrictions = this.defaultCriteriaSearch.getRestriction(filterCriteria);
        customerListAPI.restrictions = restrictions;
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
        let restrictions = [];
        if (this.customCriteriaSearch)
            restrictions = this.customCriteriaSearch.getRestriction(filterCriteria);
        else
            restrictions = this.defaultCriteriaSearch.getRestriction(filterCriteria);
        /** @type {?} */
        let customerListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerList')));
        console.debug('customer-service-getCustomerList', filterCriteria, restrictions, _pageInfo);
        customerListAPI.restrictions = restrictions;
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
     * @param {?} clientID
     * @return {?}
     */
    getCustomerDetail(clientID) {
        if (StringUtils.isEmpty(clientID)) {
            return of(undefined);
        }
        else {
            /** @type {?} */
            let customerDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI('getCustomerDetail')));
            customerDetailAPI.id = clientID;
            return from(this.dispatcher.dispatch(customerDetailAPI).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                if (resp.Header.status && resp.Body.length > 0)
                    return resp["Body"][0];
                else
                    return null;
            })));
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
            /** @type {?} */
            let i = 0;
            customerDetail.emails.forEach((/**
             * @param {?} email
             * @return {?}
             */
            (email) => {
                if (!email.isEmpty()) {
                    if (!this.isEmailFormat(email.email)) {
                        validationResult.setErrorMap(('email' + i).toString(), 'format');
                    }
                }
                i++;
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
                let customerContactNoteList = data['Body'];
                observer.next(customerContactNoteList);
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
    { type: APIFactory },
    { type: ProfileCodeService },
    { type: DefaultCustomerCriteriaSearch },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerCriteriaSearchToken,] }] }
];
/** @nocollapse */ CustomerService.ngInjectableDef = defineInjectable({ factory: function CustomerService_Factory() { return new CustomerService(inject(APIDispatch), inject(APIFactory), inject(ProfileCodeService), inject(DefaultCustomerCriteriaSearch), inject(customerCriteriaSearchToken, 8)); }, token: CustomerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerUtils {
    /**
     * @param {?} profileCodeService
     * @param {?} showRule
     * @param {?} customerShowRule
     */
    constructor(profileCodeService, showRule, customerShowRule) {
        this.profileCodeService = profileCodeService;
        this.showRule = showRule;
        this.customerShowRule = customerShowRule;
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
                options.push(new SelectOption$1(code.getCode(), code.displayText));
            }
        }
        return options;
    }
    /**
     * @param {?} customerObj
     * @return {?}
     */
    countCompleteness(customerObj) {
        console.log("this.customerShowRule: ", this.customerShowRule);
        if (this.customerShowRule) {
            return this.customerShowRule.calculateCompleteness(customerObj);
        }
        else {
            return 0;
        }
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
        console.log("ageRange:", ageRange);
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
    /**
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        if (this.showRule) {
            return this.showRule.convertName(firstName, lastName);
        }
        else {
            /** @type {?} */
            let firstNameStr = StringUtils.isNotEmpty(firstName) ? firstName : '';
            /** @type {?} */
            let lastNameStr = StringUtils.isNotEmpty(lastName) ? (' ' + lastName) : '';
            return firstNameStr + lastNameStr;
        }
    }
}
CustomerUtils.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CustomerUtils.ctorParameters = () => [
    { type: ProfileCodeService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerShowRuleToken,] }] }
];
/** @nocollapse */ CustomerUtils.ngInjectableDef = defineInjectable({ factory: function CustomerUtils_Factory() { return new CustomerUtils(inject(ProfileCodeService), inject(showRuleToken, 8), inject(customerShowRuleToken, 8)); }, token: CustomerUtils, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent {
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
        (data) => __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
                temp_array.push(new SelectOption$1(custItem.clientID, this.customerUtils.convertNameToShow(custItem.firstName, custItem.lastName)));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerContactListComponent {
    /**
     * @param {?} dateUtils
     * @param {?} elementRef
     * @param {?} showRule
     */
    constructor(dateUtils, elementRef, showRule) {
        this.dateUtils = dateUtils;
        this.showRule = showRule;
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
        console.log("customer-contact-list set contactList:", contactList);
        this._contactList = contactList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => Object.assign({}, x, { NoteTimeDisplay: this.toNoteTime(new Date(x.NoteTime)) })));
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
        this.onDisplayNote.emit(Object.assign({
            Date: this.toNoteTime(new Date(note.NoteTime))
        }, note));
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
        return item.ClientID;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    toNoteTime(time) {
        console.log("toNoteTime:", time);
        /** @type {?} */
        let defaultStr = this.dateUtils.toDateString(time, 'yyyy-MM-dd HH:mm');
        if (this.showRule)
            return this.showRule.convertDate(time) + defaultStr.slice(10);
        else
            return defaultStr;
    }
}
CustomerContactListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-list',
                template: "<ng-container *ngIf=\"contactList\">\n    <div #slidingListBlock class=\"contact-list-block layout-detail-block style-has-right-space style-has-btm-space\">\n        <!-- Contact Note -->\n        <app-ui-title-style1 [isShowOther]=\"true\">\n            <ng-container textType=\"titleText\">\n                {{language.contactNote |translate }}\n            </ng-container>\n            <ng-container textType=\"otherEle\">\n                <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue-text.svg\" [id]=\"'customerAddNote'\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <ng-container textType=\"linktext\">{{language.customerAdd |translate }}</ng-container>\n                </app-ui-link>\n            </ng-container>\n        </app-ui-title-style1>\n        <!-- end of Contact Note  -->\n        <!--contact note empty -->\n        <ng-container *ngIf=\"contactList && contactList.length != 0 ; else noContactData\">\n            <app-ui-item-sliding class=\"contact-list-item-block\">\n                    <app-ui-item *ngFor=\"let customerContactNote of contactList;trackBy:trackByClientID;\" (onItemClick)=\"displayNote(customerContactNote)\">\n                    \n                    <div ui-item-content class=\"item\" >\n                        <p class=\"title\">{{customerContactNote.NoteTimeDisplay}}</p>\n                        <p class=\"desc\">{{ customerContactNote.Note}}</p>\n                    </div>\n                \n                    <!-- swipe right and show the btn -->\n                    <app-ui-item-options side=\"end\" class=\"option-block-end\">\n                        <app-ui-item-option class=\"btn-option option-color-normal\"  (onItemOptionClick)=\"editNote(customerContactNote)\">\n                            <img src=\"assets/img/icon-list-pen-full.svg\" alt=\"edit\">\n                        </app-ui-item-option>\n                        <app-ui-item-option class=\"btn-option option-color-focus\"  (onItemOptionClick)=\"deleteNote(customerContactNote)\">\n                            <img src=\"assets/img/icon-trash-full.svg\" alt=\"delete\">\n                        </app-ui-item-option>\n                    </app-ui-item-options>\n                    </app-ui-item>\n            </app-ui-item-sliding>\n        </ng-container>\n        <ng-template #noContactData>\n            <div class=\"empty-whole-block\">\n                <div class=\"status-empty contact-note-empty empty-block\" Action action=\"customerAddNote\" (actionClick)=\"addNote()\">\n                    <div class=\"empty-show-block\">\n                        <div class=\"empty-img\">\n                        <img src=\"assets/img/empty-img-customer-note.svg\">\n                        </div>\n                        <div class=\"text\">\n                                {{language.noRecord |translate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <!-- end of contact note empty -->\n    </div>\n</ng-container>\n\n\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.empty-whole-block{padding-left:2px}.contact-note-empty{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);overflow:visible}.contact-note-empty .empty-show-block{background-color:#fff;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:30px;border-radius:5px}.contact-note-empty .empty-show-block .empty-img{display:inline-block;max-width:75px}.contact-note-empty .empty-show-block .empty-img img{max-width:100%}.contact-note-empty .empty-show-block .text{margin-left:50px;max-width:196px;width:100%;color:#414141;font-size:1.125rem;line-height:28px;font-weight:300;word-break:break-word;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}@media (max-width:1023px){.contact-note-empty{padding:0}}@media (max-width:374px){.contact-note-empty .empty-show-block{padding:30px 10px}.contact-note-empty .empty-show-block .text{margin-left:22px}}@media (min-width:767px){.contact-list-block{padding-right:40px}}.contact-list-item-block{background-color:#f5f5f5}.contact-list-item-block .ui-item{padding:20px}.contact-list-item-block .item .title{font-size:.875rem;font-weight:700;color:#414141;position:relative;line-height:28px;margin-bottom:1px}.contact-list-item-block .item .title:before{content:'';display:inline-block;width:15px;height:1px;background-color:#007ab3;position:absolute}.contact-list-item-block .item .desc{/*! autoprefixer: off */-webkit-box-orient:vertical;font-size:1.125rem;color:#414141;font-weight:300;line-height:28px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2}.contact-list-item-block .option-color-normal{background-color:#ececec}.contact-list-item-block .option-color-normal ::ng-deep ion-item-option{background-color:#ececec}.contact-list-item-block .option-color-focus{background-color:#dc3149}.contact-list-item-block .option-color-focus ::ng-deep ion-item-option{background-color:#dc3149}.contact-list-item-block .btn-option ::ng-deep ion-item-option{padding:0 27px}.contact-list-item-block .option-block-end .btn-option{color:#fff;text-align:center}.contact-list-item-block .option-block-end .btn-option img{margin:0 auto;max-width:24px;width:100%}@media (min-width:1025px){.contact-list-item-block .option-block-end .btn-option img{max-width:2.4vw}}.contact-list-item-block ::ng-deep .list-block{background-color:#f5f5f5}.contact-list-item-block ::ng-deep .list-block app-ui-item:last-of-type .item-native{border-radius:0 0 5px 5px}.contact-list-item-block ::ng-deep ion-item .ui-item{margin:0;padding:21px 30px 21px 2px}.contact-list-item-block ::ng-deep ion-list{margin:0;padding-left:1px}.contact-list-item-block ::ng-deep .item-native{padding-left:0;border-radius:5px}.contact-list-item-block ::ng-deep .item-inner{padding-right:0}@media (max-width:767px){.contact-list-item-block .item .desc{-webkit-line-clamp:3}.contact-list-item-block ::ng-deep ion-item .ui-item{padding:21px 15px 21px 2px}}"]
            }] }
];
CustomerContactListComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
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
class CustomerDetailComponent extends DisplayMetaComponent {
    /**
     * @param {?} dateUtils
     * @param {?} profileCodeService
     * @param {?} changeDetctor
     * @param {?} metaService
     * @param {?} customerUtils
     * @param {?} inputExecutor
     * @param {?} metaParser
     * @param {?} showRule
     * @param {?} customMetaController
     */
    constructor(dateUtils, profileCodeService, changeDetctor, metaService, customerUtils, inputExecutor, metaParser, showRule, customMetaController) {
        super(metaService, profileCodeService, metaParser, inputExecutor);
        this.dateUtils = dateUtils;
        this.profileCodeService = profileCodeService;
        this.changeDetctor = changeDetctor;
        this.metaService = metaService;
        this.customerUtils = customerUtils;
        this.showRule = showRule;
        this.customMetaController = customMetaController;
        this.onEditDetail = new EventEmitter();
        this.onCallPhone = new EventEmitter();
        this.onDeleteDetail = new EventEmitter();
        this.onAddAppointment = new EventEmitter();
        this.followChange = new EventEmitter();
        this.DisplayData = null;
        this.dash = '- -';
        this.language = new Language();
        // empty status
        this.isEmptyAppointment = false;
        this.isEmptyEdit = false;
        this.isEmptyDel = false;
        this.isEmptyDetailInfo = false;
        this.isEmptyGroupDetailInfo = false;
        this.isEmptyContactNote = false;
        this.isCollapseBtnShow = true;
        // card2 extend template is null or not
        this.isCardExtendTemplateNull = true;
        //card2 collapse isOpen or not
        this.isCollapseOpen = false;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
        console.log("detail Set Data:", value);
        if (value && value.ClientID) {
            this.waitUntilMetaLoaded().then((/**
             * @return {?}
             */
            () => {
                this.onDataUpdated();
            }));
        }
        else {
            this._data = null;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getMetaID() {
        return 'customerDetail';
    }
    /**
     * @protected
     * @return {?}
     */
    getMetaParams() {
        return null;
    }
    /**
     * @return {?}
     */
    get rowMetaWithoutGroup() {
        return this.metaConfig.Rows.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.map((/**
         * @param {?} y
         * @return {?}
         */
        y => y.type !== 'Group')).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc && cur), true)));
    }
    ;
    /**
     * @return {?}
     */
    get rowMetaGroup() {
        return this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Group'));
    }
    /**
     * @return {?}
     */
    get followStatus() {
        return this._data["IsFollow"] === 'Y';
    }
    /**
     * @return {?}
     */
    get isHasAgeRange() {
        return this._data && !!this._data["AgeRange"];
    }
    /**
     * @return {?}
     */
    get isHasContactFrequancy() {
        return this._data && !!this._data["ContactFrequancy"];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log("customerDetail ngOninit!");
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        console.log("customerDetail onDataUpdated!", this._data);
        super.onDataUpdated();
        //check datasource is from OPUS
        this.isEmptyDel = this._data.DataSource == 'OPUS';
        this.convertEmptyValToDisplayText(this._data);
        this.checkInfoIsEmpty();
        this.changeCollateButton();
        this.DisplayData = Object.assign({}, this._data);
        if (this.customMetaController)
            this.customMetaController.onDataUpdated(this._data);
        this.changeDetctor.detectChanges();
        console.log("after customerDetail onDataUpdated!", this.DisplayData);
    }
    /**
     * @private
     * @return {?}
     */
    changeCollateButton() {
        console.log("changeCollateButton Meta:", this.metaConfig);
        this.isCollapseBtnShow = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === "Group"))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => this._data[x.id].length > (12 / x.grid.pc)))
            .reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc || cur), false);
        console.debug('isCollapseBtnShow', this.isCollapseBtnShow);
    }
    /**
     * @private
     * @return {?}
     */
    checkInfoIsEmpty() {
        //if detail info is empty , display no data status    
        this.isEmptyDetailInfo =
            this.metaConfig.Columns.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type !== "Group"))
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => this._data[x.id] === null || this._data[x.id] === undefined || StringUtils.isEmpty(this._data[x.id]) || this._data[x.id] === this.dash))
                .reduce((/**
             * @param {?} acc
             * @param {?} cur
             * @return {?}
             */
            (acc, cur) => acc && cur), true);
        this.isEmptyGroupDetailInfo = this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === "Group"))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        x => this._data[x.id].length === 0))
            .reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc && cur), true);
        console.log("isEmptyDetailInfo:", this.isEmptyDetailInfo);
        console.log("isEmptyGroupDetailInfo:", this.isEmptyGroupDetailInfo);
    }
    /**
     * @private
     * @param {?} customerDetail
     * @return {?}
     */
    convertEmptyValToDisplayText(customerDetail) {
        //if not data set default value(?? or -- --)
        console.log("convertEmptyValToDisplayText: ", customerDetail);
        customerDetail.AgeRange = this.profileCodeService.convertCode2Text("Customer_Age", customerDetail.AgeRange);
        customerDetail.ContactFrequancy = this.profileCodeService.convertCode2Text("Customer_ContactFrequancy", customerDetail.ContactFrequancy);
        customerDetail.showName = this.convertNameToShow(customerDetail.FirstName, customerDetail.LastName);
        customerDetail.address.forEach((/**
         * @param {?} addr
         * @return {?}
         */
        addr => {
            addr["AddressDisplay"] = this.toFullAddress(Object.assign({}, addr));
        }));
        this.metaConfig.Columns.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type !== "Group")).forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            if (col.id === 'BirthdayDisplay')
                customerDetail.BirthdayDisplay = StringUtils.isNotEmpty(customerDetail.Birthday) ? this.toBirthdayStr() : this.dash;
            else
                customerDetail[col.id] = StringUtils.isEmpty(customerDetail[col.id]) ? this.dash : customerDetail[col.id];
        }));
    }
    /**
     * @private
     * @return {?}
     */
    toBirthdayStr() {
        if (this._data.Birthday !== undefined) {
            if (this.showRule) {
                return this.showRule.convertDate(new Date(this._data.Birthday));
            }
            else {
                return this.dateUtils.toDateString(new Date(this._data.Birthday), 'yyyy-MM-dd');
            }
        }
    }
    /**
     * @private
     * @param {?} addressObj
     * @return {?}
     */
    toFullAddress(addressObj) {
        if (this.showRule)
            return this.showRule.convertAddress(addressObj);
        else {
            /** @type {?} */
            let array = [];
            if (StringUtils.isNotEmpty(addressObj.Country))
                array.push(addressObj.Country);
            if (StringUtils.isNotEmpty(addressObj.City))
                array.push(addressObj.City);
            if (StringUtils.isNotEmpty(addressObj.Area))
                array.push(addressObj.Area);
            if (StringUtils.isNotEmpty(addressObj.Zipcode))
                array.push(addressObj.Zipcode);
            if (StringUtils.isNotEmpty(addressObj.Address))
                array.push(addressObj.Address);
            return array.join(', ');
        }
    }
    /**
     * @return {?}
     */
    edit() {
        this.onEditDetail.emit(this._data.ClientID);
    }
    /**
     * @return {?}
     */
    delete() {
        this.onDeleteDetail.emit(this._data.ClientID);
    }
    /**
     * @return {?}
     */
    callPhone() {
        this.onCallPhone.emit(this._data.ClientID);
    }
    /**
     * @return {?}
     */
    addAppointment() {
        this.onAddAppointment.emit(this._data.ClientID);
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
        this._data["IsFollow"] = isFollow ? "Y" : "N";
        this.changeDetctor.detectChanges();
        //ouput follow detail change status
        this.followChange.emit({ 'isFollow': isFollow, "clientID": this._data.ClientID });
    }
    /**
     * @private
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        return this.customerUtils.convertNameToShow(firstName, lastName);
    }
}
CustomerDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-detail',
                template: "<!-- has CustomerDetail data-->\n<ng-container\n  *ngIf=\"DisplayData && data  && DisplayData.ClientID && isMetaLoaded(); else noCustomerData\">\n  <div class=\"layout-detail-block style-has-top-space style-has-right-space\">\n    <!-- profile -->\n    <div class=\"space-ui-element profile-block\">\n      <div class=\"profile-img-block img-block\" [ngClass]=\"DisplayData.DataSource == 'OPUS' ? '': ' active'\">\n        <!-- if true show active img (green) or show normal img -->\n        <img class=\"normal-img\" src=\"assets/img/img-cust-profile.svg\">\n        <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n      </div>\n      <div class=\"content-block\">\n        <ng-container *ngIf=\"DisplayData.Possibility\">\n          <app-ui-form-radio-tag class=\"wd-lg profile-tag\" [checked]=\"true\" [disabled]=\"true\"\n            [ngClass]=\"DisplayData.Possibility\">{{DisplayData.Possibility|translate}}</app-ui-form-radio-tag>\n        </ng-container>\n\n        <div class=\"name-block\" [ngClass]=\"{'noTagBlock': !DisplayData.Possibility}\">\n          {{DisplayData.showName}}\n        </div>\n        <div class=\"sm-text\">\n          <span class=\"age\" *ngIf=\"isHasAgeRange\">\n            ({{DisplayData.AgeRange}})\n          </span>\n          <span class=\"detail-text\" *ngIf=\"isHasContactFrequancy\">\n            {{language.contactFrequency|translate }}\n            <span class=\"text-focus\">{{DisplayData.ContactFrequancy}}</span>\n            {{language.timePerYear|translate }}\n          </span>\n        </div>\n      </div>\n      <div class=\"like-block\">\n        <app-ui-btn-like-add [isLike]=\"followStatus\" (onChange)=\"isFollowChange($event)\">\n        </app-ui-btn-like-add>\n      </div>\n\n    </div>\n    <!-- end of profile -->\n\n    <!-- link -->\n    <ul class=\"space-ui-element ui-list-block\">\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyAppointment? ' disable': ''\">\n        <button [id]=\"'btn_customerAddAppointment'\" Action action='addAppointment' (actionClick)=\"addAppointment()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-appointment-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-appointment.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerAppointment | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"DisplayData.tel.length == 0? ' disable': ''\">\n        <button [id]=\"'btn_customerCallPhone'\" Action action=\"customerCallPhone\" (actionClick)=\"callPhone()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-contact-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-contact.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerContact | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyEdit? ' disable': ''\">\n        <button [id]=\"'btn_customerEdit'\" Action action=\"customerEdit\" (actionClick)=\"edit()\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src=\"assets/img/icon-cust-edit-disable.svg\">\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-edit.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerEdit | translate }}</p>\n          </div>\n        </button>\n      </li>\n      <li class=\"list-item-block\" [ngClass]=\"isEmptyDel? ' disable': ''\">\n        <button [id]=\"'btn_customerDelete'\" Action action=\"customerDelete\" (actionClick)=\"delete()\" [disabled]=\"DisplayData.DataSource == 'OPUS'\">\n          <div class=\"img-block\">\n            <img class=\"img-disable\" src='assets/img/icon-cust-del-disable.svg'>\n            <img class=\"img-normal\" src=\"assets/img/icon-cust-del.svg\">\n          </div>\n          <div class=\"text-block\">\n            <p>{{ language.customerDelete | translate }}</p>\n          </div>\n        </button>\n\n      </li>\n    </ul>\n    <!-- end of link block -->\n    <!-- first card -->\n\n\n\n    <!-- Meta Group Detail -->\n    <app-ui-collapse-text1 class=\"card1-all-block\" [(isOpen)]=\"isCollapseOpen\" [(isCollapseBtnShow)]=\"isCollapseBtnShow\"\n      [translateEmpty]=\"language.empty | translate\" [isDataEmpty]=\"isEmptyGroupDetailInfo\">\n      <ng-container TextType=cardContent>\n        <app-ui-form-layout-advanced [isOnlyText]=\"true\">\n          <ng-container *ngFor=\"let group of rowMetaGroup\">\n            <app-ui-form-layout-row>\n              <ng-container *ngFor=\"let groupData of DisplayData[group.id]; index as i; first as isFirst\">\n                <app-ui-form-layout-col *ngIf=\"(group.grid.pc*(i+1))<=12\" [colPC]=\"group.grid.pc\"\n                  [colNB]=\"group.grid.nb\" [colPad]=\"group.grid.pad\" [colMobile]=\"group.grid.mobile\">\n                  <snd-ui-collapse-content-show>\n                    <app-ui-info-text1 *ngIf=\"isFirst\" [imgSrc]=\"group.icon\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id] | translate}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id] | translate}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                    <app-ui-info-text1 *ngIf=\"!isFirst\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id] | translate}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id] | translate}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                  </snd-ui-collapse-content-show>\n                </app-ui-form-layout-col>\n              </ng-container>\n            </app-ui-form-layout-row>\n            <app-ui-form-layout-row>\n              <ng-container *ngFor=\"let groupData of DisplayData[group.id]; index as i; first as isFirst\">\n                <app-ui-form-layout-col *ngIf=\"(group.grid.pc*(i+1))>12\" [colPC]=\"group.grid.pc\" [colNB]=\"group.grid.nb\"\n                  [colPad]=\"group.grid.pad\" [colMobile]=\"group.grid.mobile\">\n                  <snd-ui-collapse-content-detail [(isOpen)]=\"isCollapseOpen\">\n                    <app-ui-info-text1 *ngIf=\"isFirst\" [imgSrc]=\"group.icon\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id]}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id]}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                    <app-ui-info-text1 *ngIf=\"!isFirst\">\n                      <ng-container textType=\"title\">\n                        {{DisplayData[group.id][i][group.groupColumns[0].id]}}\n                      </ng-container>\n                      <ng-container textType=\"text\" *ngFor=\"let col of group.groupColumns.slice(1);\">\n                        {{DisplayData[group.id][i][col.id]}}\n                      </ng-container>\n                    </app-ui-info-text1>\n                  </snd-ui-collapse-content-detail>\n                </app-ui-form-layout-col>\n              </ng-container>\n            </app-ui-form-layout-row>\n          </ng-container>\n        </app-ui-form-layout-advanced>\n      </ng-container>\n    </app-ui-collapse-text1>\n    <!-- end of Meta Group Detail -->\n\n\n    <!-- Meta Detail -->\n    <app-ui-collapse-card1 [isHide]=\"isCardExtendTemplateNull\" [isDataEmpty]=\"isEmptyDetailInfo\"\n      [tagText]=\"[language.customerDetail | translate]\"\n      [emptyText]=\"[language.noClick | translate, language.noInformation | translate]\">\n      <ng-container textType=\"collapseContentOrigin\">\n        <app-ui-form-layout-row *ngFor=\"let row of rowMetaWithoutGroup\">\n          <app-ui-form-layout-col *ngFor=\"let col of row\" [colPC]=\"col.grid.pc\" [colNB]=\"col.grid.nb\"\n            [colPad]=\"col.grid.pad\" [colMobile]=\"col.grid.mobile\">\n            <app-ui-info-text2>\n              <ng-container textType=\"title\">{{col.name|translate }}</ng-container>\n              <ng-container textType=\"text\">{{DisplayData[col.id]?DisplayData[col.id]:dash}}</ng-container>\n            </app-ui-info-text2>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n      </ng-container>\n    </app-ui-collapse-card1>\n    <!-- end of Meta Detail -->\n  </div>\n</ng-container>\n\n<ng-template #noCustomerData>\n  <div class=\"layout-detail-block style-has-top-space skelton-layout\">\n    <div class=\"theme-loading\" style=\"background-image:url('assets/img/loading-customer-main.svg')\">\n      <!-- profile -->\n      <div class=\"space-ui-element profile-block\">\n        <div class=\"img-block\">\n          <div class=\"skeleton-round \"></div>\n        </div>\n        <div class=\"content-block\">\n          <div class=\"tag-block\">\n            <div class=\"skelton-text  \"></div>\n          </div>\n          <div class=\"name-block\">\n            <div class=\"skelton-text \"></div>\n          </div>\n          <div class=\"sm-text\">\n            <div class=\"skelton-text \"></div>\n          </div>\n        </div>\n      </div>\n      <!-- end of profile -->\n      <!-- link list -->\n      <ul class=\"ui-list-block\">\n        <li class=\"list-item-block\" *ngFor='let number of [0,1,2,3]'>\n          <div class=\"skelton-img-text\">\n            <div class=\"skelton-square\">\n              <div class=\"skeleton-round \"></div>\n            </div>\n            <div class=\"skelton-text \"></div>\n          </div>\n        </li>\n      </ul>\n      <!-- end of link list -->\n      <!-- line -->\n      <div class=\"skelton-line-block\">\n        <div class=\"skelton-line \"></div>\n      </div>\n      <!-- end of line -->\n\n      <!-- list data -->\n      <div class=\"card-text\">\n        <div class=\"left-part\">\n          <div class=\"data-group\">\n\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n        <div class=\"right-part\">\n          <div class=\"data-group\">\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n            <div class=\"skelton-text   wd-short\"></div>\n            <div class=\"skelton-text   wd-long\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- end of list data -->\n\n      <!-- line -->\n      <!-- <div class=\"skelton-line-block\">\n        <div class=\"skelton-line \"></div>\n      </div> -->\n      <!-- end of line -->\n\n\n\n    </div>\n  </div>\n  <!-- Customer data is empty -->\n</ng-template>\n",
                styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.layout-detail-block.skelton-layout{margin:0 -40px 0 0}@media (max-width:767px){.layout-detail-block.skelton-layout{margin-right:-40px}.layout-detail-block.skelton-layout .profile-block .content-block{max-width:70%}.layout-detail-block.skelton-layout .theme-loading .ui-list-block .list-item-block{margin-right:0}}.layout-detail-block .skelton-line-block{padding-right:40px}.layout-detail-block .theme-loading{background-size:contain;background-position:bottom right;background-repeat:no-repeat;width:100%;min-height:100vh;padding-right:40px}.layout-detail-block .theme-loading .profile-block .img-block{display:inline-block;max-width:100%;width:63px;height:63px;padding-right:0;margin-right:20px}.layout-detail-block .theme-loading .profile-block .tag-block{max-width:15%}.layout-detail-block .theme-loading .profile-block .name-block{max-width:30%;padding-bottom:0}.layout-detail-block .theme-loading .profile-block .sm-text{max-width:55%}.layout-detail-block .theme-loading .profile-block ::ng-deep ion-skeleton-text{margin-bottom:10px}.layout-detail-block .theme-loading .ui-list-block{margin-bottom:20px}.layout-detail-block .theme-loading .ui-list-block .list-item-block{margin-right:5%}.layout-detail-block .theme-loading .ui-list-block .skelton-img-text .skelton-text{max-width:80%;margin:0 auto}.layout-detail-block .theme-loading .skelton-square{width:3rem;height:3rem}.layout-detail-block .theme-loading .card-text{display:flex}.layout-detail-block .theme-loading .card-text .left-part{width:40%;box-sizing:border-box;padding:2rem}.layout-detail-block .theme-loading .card-text .right-part{width:60%;box-sizing:border-box;padding:2rem}.layout-detail-block .theme-loading .card-text .wd-short{max-width:5rem}.layout-detail-block .theme-loading .card-text .wd-long{max-width:100%}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.profile-img-block img{border-radius:50%;display:inline-block}.profile-img-block .active-img,.profile-img-block.active .normal-img{display:none}.profile-img-block.active .active-img{display:block}.profile-block{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%;position:relative}.profile-block .profile-img-block{padding-right:15px}.profile-block .profile-img-block img{width:60px;height:60px}.profile-block .content-block{max-width:calc(100% - 40px - 10px - 60px - 15px);width:100%}.profile-block .content-block ::ng-deep .tag-block{margin-bottom:5px}.profile-block .content-block .name-block{font-size:1.25rem;font-weight:700;padding-bottom:5px;line-height:28px;white-space:normal;word-wrap:break-word}.profile-block .content-block .name-block.noTagBlock{padding-top:15px}.profile-block .sm-text{font-size:.875rem;line-height:28px;width:100%}.profile-block .sm-text .text-focus{color:#003781;font-weight:700;font-size:1.125rem;display:inline-block;padding:0 5px;vertical-align:middle}.profile-block .sm-text .detail-text{display:inline-flex;align-items:center;flex-wrap:wrap}.profile-block .age{display:inline-block;line-height:28px;min-height:28px;margin-right:5px}.profile-block .like-block{position:absolute;top:0;right:0}.profile-block .like-block ::ng-deep img{max-width:40px;width:100%}@media (max-width:768px){.profile-block{padding-left:15px;padding-right:6px;position:static}.profile-block .like-block{right:10px;top:10px}.profile-block .profile-img-block{padding-right:10px}.profile-block .profile-img-block img{width:45px;height:45px}.profile-block .content-block{max-width:calc(100% - 45px - 10px)}.profile-block .content-block .name-block{padding-right:50px}.profile-block .content-block .name-block.noTagBlock{padding-top:10px}}@media screen and (min-width:1025px){.profile-block .profile-img-block{width:calc(caculate-vw($wd-profile-img) + 15px)}.profile-block .profile-img-block img{width:6vw;height:6vw}.profile-block .content-block{max-width:calc(100% - 4vw - 10px - 6vw - 15px)}.profile-block .like-block ::ng-deep img{max-width:4vw}}.ui-list-block{display:flex;list-style-type:none;margin-right:-30px;justify-content:center;align-items:baseline}.ui-list-block button{border:none;background-color:transparent;padding:0}.ui-list-block .list-item-block{width:25%;max-width:5.625rem;text-align:center;margin-right:30px}.ui-list-block .list-item-block .img-block{max-width:40px;width:100%;margin:0 auto}.ui-list-block .list-item-block .img-block img{max-width:100%;width:100%}.ui-list-block .list-item-block.disable{pointer-events:none}.ui-list-block .list-item-block.disable .text-block{color:#414141}.ui-list-block .list-item-block .img-disable,.ui-list-block .list-item-block.disable .img-normal{display:none}.ui-list-block .list-item-block.disable .img-disable{display:inline-block;pointer-events:none}.ui-list-block .list-item-block .text-block p{color:#414141;line-height:normal;font-size:.875rem;margin:4px 0 0;padding:0 4px}@media (max-width:767px){.ui-list-block{flex-wrap:wrap;margin-right:0}.ui-list-block .list-item-block{max-width:100px;margin-right:0}}@media (max-width:374px){.ui-list-block .list-item-block .text-block p{font-size:.75rem;padding-right:10px}}@media screen and (min-width:1025px){.ui-list-block .list-item-block{max-width:9vw}.ui-list-block .list-item-block .img-block{max-width:4vw;width:4vw}}.card1-all-block::ng-deep .card-content-block{padding-top:20px}.card1-all-block::ng-deep .gas-row-block{margin-top:0}.card1-all-block::ng-deep .gas-row-block+.gas-row-block{margin-top:4px}@media (min-width:769px){.card1-all-block::ng-deep .gas-layout-form{box-sizing:border-box;padding-left:51px;padding-right:64px}.card1-all-block::ng-deep .gas-row-block{margin-top:0}}@media (max-width:767px){.card1-all-block::ng-deep .gas-layout-form{padding-left:15px}.card1-all-block::ng-deep .card-content-block app-ui-info-text1 .info-unit-block .text-block p{padding-left:10px}}"]
            }] }
];
CustomerDetailComponent.ctorParameters = () => [
    { type: DateUtils },
    { type: ProfileCodeService },
    { type: ChangeDetectorRef },
    { type: MetaService },
    { type: CustomerUtils },
    { type: InputExecutor },
    { type: DefaultMetaParser },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerDetailMetaControllerToken,] }] }
];
CustomerDetailComponent.propDecorators = {
    onEditDetail: [{ type: Output }],
    onCallPhone: [{ type: Output }],
    onDeleteDetail: [{ type: Output }],
    onAddAppointment: [{ type: Output }],
    followChange: [{ type: Output }],
    data: [{ type: Input }],
    detailPostTemp: [{ type: ViewChildren, args: ['detailPostTemp',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerStoreService {
    constructor() {
        this._customerState = CUSTOMER_STATE.DISPLAY;
        this._customerDetail = {
            ClientID: ""
        };
        this._customerList = [];
        this._customerCriteria = new CustomerFilterCriteria();
        this._stateBehaviorSubject = new BehaviorSubject(this._customerState);
        this._detailBehaviorSubject = new BehaviorSubject(this._customerDetail);
        this._listBehaviorSubject = new BehaviorSubject(this._customerList);
        this._criteriaBehaviorSubject = new BehaviorSubject(this._customerCriteria);
        this._detailIDSubject = new BehaviorSubject(this._customerDetail.ClientID);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state$$1) {
        this._customerState = state$$1;
        this._stateBehaviorSubject.next(this._customerState);
    }
    ;
    /**
     * @return {?}
     */
    getState() {
        return this._stateBehaviorSubject;
    }
    ;
    /**
     * @param {?} detail
     * @return {?}
     */
    setCurrentCustomerDetail(detail) {
        this._customerDetail = detail;
        this._detailBehaviorSubject.next(this._customerDetail);
        this._detailIDSubject.next(this._customerDetail.ClientID);
    }
    ;
    /**
     * @return {?}
     */
    getCurrentCustomerDetail() {
        return this._detailBehaviorSubject;
    }
    ;
    /**
     * @param {?} list
     * @return {?}
     */
    setCustomerList(list) {
        this._customerList = list;
        this._listBehaviorSubject.next(this._customerList);
    }
    ;
    /**
     * @return {?}
     */
    getCustomerList() {
        return this._listBehaviorSubject;
    }
    ;
    /**
     * @param {?} criteria
     * @return {?}
     */
    setCriteria(criteria) {
        this._customerCriteria = criteria;
        this._criteriaBehaviorSubject.next(this._customerCriteria);
    }
    ;
    /**
     * @return {?}
     */
    getCriteria() {
        return this._criteriaBehaviorSubject;
    }
    ;
    /**
     * @return {?}
     */
    getCustomerDetailID() {
        return this._detailIDSubject;
    }
}
CustomerStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CustomerStoreService.ctorParameters = () => [];
/** @nocollapse */ CustomerStoreService.ngInjectableDef = defineInjectable({ factory: function CustomerStoreService_Factory() { return new CustomerStoreService(); }, token: CustomerStoreService, providedIn: "root" });
/** @enum {string} */
const CUSTOMER_STATE = {
    IMPORT: 'import',
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
class DefaultCustomerEditMetaController {
    /**
     * @param {?} data
     * @return {?}
     */
    onDataUpdated(data) {
        if (data['tel']) {
            data['notOPUSTel'] = data['tel'].filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.DataSource && x.DataSource !== 'OPUS'));
        }
        console.log("Default controller onDataUpdated:", data);
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValueChange(column, value, groupId, index, data, validationResult) {
        // if (column === 'Email') {
        //     let isEmail = this.isEmailFormat(value);
        //     if (!isEmail)
        //         validationResult.setErrorMap(column + index.toString(), 'Wrong_Email');
        //     else
        //         validationResult.deleteError(column + index.toString());
        // }
    }
    /**
     * @param {?} data
     * @param {?} validationResult
     * @return {?}
     */
    onValidateAll(data, validationResult) {
        data['tel'] = data['tel'].filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.dataSource && x.dataSource === 'OPUS')).concat(data['notOPUSTel']);
        if (data['email'] && data['email'].length > 0) {
            data['email'].forEach((/**
             * @param {?} ele
             * @param {?} index
             * @return {?}
             */
            (ele, index) => {
                /** @type {?} */
                let isEmail = this.isEmailFormat(ele.Email);
                if (!isEmail)
                    validationResult.setErrorMap('Email' + index.toString(), 'Wrong_Email');
                else
                    validationResult.deleteError('Email' + index.toString());
            }));
        }
        return validationResult.isTrue();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    btnClick(type, id, data) { }
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
}
DefaultCustomerEditMetaController.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */ DefaultCustomerEditMetaController.ngInjectableDef = defineInjectable({ factory: function DefaultCustomerEditMetaController_Factory() { return new DefaultCustomerEditMetaController(); }, token: DefaultCustomerEditMetaController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerEditComponent extends FormMetaComponent {
    /**
     * @param {?} customerUtils
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} router
     * @param {?} translateService
     * @param {?} defaultMetaController
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     * @param {?} customerStoreService
     * @param {?} metaService
     * @param {?} addProgressPoint
     */
    constructor(customerUtils, changeDetector, elementRef, router, translateService, defaultMetaController, profileCodeService, metaParser, metaExecutor, customMetaController, customerStoreService, metaService, addProgressPoint) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.customerUtils = customerUtils;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.router = router;
        this.translateService = translateService;
        this.customerStoreService = customerStoreService;
        this.metaService = metaService;
        this.addProgressPoint = addProgressPoint;
        this.sendContentHeight = new EventEmitter();
        this.customerDetailSubscribe = null;
        this.pageTitle = 'Add_Profile';
        this.today = new Date();
        this.language = new Language();
        this.disableAge = false;
        this.isDisplaySavePopup = false;
        this.isShow = false;
        this.edit_type = "add";
        this.customerID = '';
        this._metaController = customMetaController ? customMetaController : defaultMetaController;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get rowConfig() {
        return this.metaConfig.Rows;
    }
    /**
     * @return {?}
     */
    get columnConfig() {
        return this.metaConfig.Columns;
    }
    /**
     * @return {?}
     */
    get footerConfig() {
        return this.metaConfig.Footer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.customerDetailSubscribe = this.customerStoreService.getCustomerDetailID().subscribe((/**
         * @param {?} customerID
         * @return {?}
         */
        (customerID) => {
            console.log("customerID:", customerID);
            this.customerID = customerID;
            super.ngOnInit();
            if (StringUtils.isEmpty(customerID)) {
                //ADD
                this.edit_type = "add";
            }
            else {
                //Edit
                this.edit_type = "edit";
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.customerDetailSubscribe)
            this.customerDetailSubscribe.unsubscribe();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        console.log("BTN CLICK!", type, id);
        if (type === 'submit') {
            if (this.validationResult.isTrue()) {
                this.customerStoreService.setCurrentCustomerDetail(this._data);
                /** @type {?} */
                let state$$1 = this.edit_type == "add" ? CUSTOMER_STATE.ADD_SAVED : CUSTOMER_STATE.EDIT_SAVED;
                this.customerStoreService.setState(state$$1);
                //offline add progress point
                console.log("customer addProgressPoint", this.addProgressPoint);
                if (this.addProgressPoint && this.edit_type == "add") {
                    this.addProgressPoint.addCustomerPoint(1);
                }
                this.router.navigate("Customers");
            }
        }
        this._metaController.btnClick(type, id, this._data);
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerEdit';
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return {
            id: this.customerID
        };
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    onValueChange(column, value, groupId, index) {
        //Trigger other column values
        if (column === 'Birthday') {
            this.countAgeRange(value);
        }
        this._metaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        console.log("onDataUpdated!");
        console.log("data:", this._data);
        console.log("stringify:", JSON.stringify(this._data));
        if (this.edit_type === 'add') {
            this.pageTitle = this.translateService.translate(this.language.addProfile);
            this.disableAge = false;
        }
        else if (this.edit_type === 'edit') {
            this.pageTitle = this.convertNameToShow(this._data.FirstName, this._data.LastName);
            this.disableAge = StringUtils.isNotEmpty(this._data.Birthday);
            // this.Data.AgeRange = this.disableAge ? this.Data.AgeRange : undefined;
        }
        this.isShow = true;
        this._metaController.onDataUpdated(this._data);
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        /** @type {?} */
        let completeness = this.customerUtils.countCompleteness(this._data);
        this._data.Completeness = Math.round(completeness * 100) / 100;
        console.log("Calculate Completeness:", this._data.Completeness);
        // if (!this.validationResult.isTrue()) {
        //   //If basic validation has error.
        //   setTimeout(() => {
        //     this.scrollToError();
        //   }, 200);
        //   return false;
        // }
        // else {
        //   //Do custom validation.
        //   let result = true;
        //   result = result && this._metaController.onValidateAll(this._data, this.validationResult);
        //   return result;
        // }
        /** @type {?} */
        let result = this._metaController.onValidateAll(this._data, this.validationResult) && this.validationResult.isTrue();
        if (!result) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollToError();
            }), 200);
        }
        return result;
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
     * @private
     * @param {?} birthday
     * @return {?}
     */
    countAgeRange(birthday) {
        if (StringUtils.isEmpty(birthday)) {
            this._data.AgeRange = undefined;
            this.disableAge = false;
        }
        else {
            /** @type {?} */
            let age = this.customerUtils.countAge(birthday);
            /** @type {?} */
            let ageRange = this.customerUtils.countAgeRange(age);
            console.debug('ageRange', ageRange);
            if (ageRange != undefined) {
                this._data.AgeRange = ageRange;
                this.disableAge = true;
            }
        }
        console.log("this.data in countAgeRange:", this._data);
        this.changeDetector.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    scrollToError() {
        console.log('scrollToError');
        /** @type {?} */
        let errorBlock = this.elementRef.nativeElement.querySelector('.error-msg');
        /** @type {?} */
        let scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
        console.log('scroll error:', scrollContent, 'errorBlock', errorBlock);
        if (errorBlock && scrollContent) {
            /** @type {?} */
            let move = errorBlock.offsetTop;
            // let move = 50;
            console.log('scrollToError errorBlock.offsetTop', errorBlock.offsetTop, 'move', move);
            scrollContent.scrollTo({ top: move, behavior: "smooth" });
        }
    }
    /**
     * @private
     * @param {?} firstName
     * @param {?} lastName
     * @return {?}
     */
    convertNameToShow(firstName, lastName) {
        return this.customerUtils.convertNameToShow(firstName, lastName);
    }
}
CustomerEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-edit',
                template: "<app-ui-inner-page *ngIf=\"isShow\" [title]=\"[pageTitle]\" [contentHeight]=\"this.contentHeight\">\n  <div main>\n    <div #inpageMain class=\"layout-block\">\n      <div class=\"layout-style-single\">\n        <div class=\"form-all page-cust-info\" action=\"\">\n          <div class=\"profile-img-block img-block\" [ngClass]=\"data.DataSource == 'OPUS' ? '': ' active'\">\n            <img class=\"normal-img\" src=\"assets/img/img-customer-profile.svg\">\n            <img class=\"active-img\" src=\"assets/img/img-cust-profile-active.svg\">\n          </div>\n          <app-ui-form-layout-advanced class=\"customer-edit-block\">\n            <ng-container *ngFor=\"let rowList of rowConfig\">\n              <app-ui-data-group>\n                <ng-container textType=\"dataContent\">\n                  <app-ui-form-layout-row>\n                    <app-ui-form-layout-col *ngFor=\"let col of rowList\" [colPC]=\"col.grid.pc\" [colNB]=\"col.grid.nb\"\n                      [colPad]=\"col.grid.pad\" [colMobile]=\"col.grid.mobile\"\n                      [isGroupCol]=\"col.type=='Group' ? true : false\">\n                      <ng-container *ngIf=\"col.type=='Input'\">\n                        <app-ui-form-input [inputTitle]=\"col.name |translate\" [name]=\"col.name |translate\"\n                          [isError]=\"validationResult.isError(col.id)\" [(nxValue)]=\"data[col.id]\" [isDisable]=\"col.id=='LastName' && data.DataSource=='OPUS'\"\n                          (nxValueChange)=\"onChange(col.id,$event)\">\n                        </app-ui-form-input>\n                        <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(col.id)\">\n                          {{validationResult.getErrorMsg(col.id) |translate }}</app-ui-form-error-msg>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Select'\">\n                        <app-ui-form-select [selectTitle]=\"col.name |translate\" [selectOption]=\"data[col.id+'Option']\"\n                          [isDisable]=\"(col.id==='AgeRange'&&disableAge) || col.readonly || (col.id=='Gender' && data.DataSource=='OPUS' )\" [(nxValue)]=\"data[col.id]\"\n                          (nxValueChange)=\"onChange(col.id,$event)\" [placeholder]=\"col.placeholder | translate\"\n                          [isShowTitle]=\"col.showTitle\" [isShowDefaultOption]=\"col.showDefaultOption\">\n                        </app-ui-form-select>\n                        \n                        <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(col.id)\">\n                          {{validationResult.getErrorMsg(col.id) |translate }}</app-ui-form-error-msg>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Radio'\">\n                        <app-ui-form-title-sm>{{col.name |translate}}</app-ui-form-title-sm>\n                        <div class=\"tag-block\">\n                          <app-ui-form-radio-group [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\">\n                            <app-ui-form-radio-tag *ngFor=\"let option of data[col.id+'Option']\"\n                              [colorCode]=\"option.arguments.color\" [checked]=\"data[col.id] === option.id \"\n                              class=\"{{option.name}} wd-max\" [value]=\"option.id\">\n                              {{option.name}}</app-ui-form-radio-tag>\n                          </app-ui-form-radio-group>\n                        </div>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Date'\">\n                        <app-ui-form-date [title]=\"col.name |translate\" [(nxValue)]=\"data[col.id]\" [max]=\"col.name==='Birthday'? today :null\" [isDisable]=\"col.name=='Birthday' && data.DataSource == 'OPUS'\"\n                          (nxValueChange)=\"onChange(col.id,$event)\"></app-ui-form-date>\n                        <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(col.id) == 'date'\">\n                          {{validationResult.getErrorMsg(col.id) |translate }}</app-ui-form-error-msg>\n                      </ng-container>\n                      <ng-container *ngIf=\"col.type=='Group'\">\n                        <app-ui-data-group class=\"form-group-block\" [groupName]=\"col.name |translate\" [isShowPreData]=\"true\"\n                          [imgType]=\"col.icon && col.icon.length>0\" [imgIconSrc]=\"col.icon\">\n                          <ng-container textType=\"dataContent\">\n                            <ng-container *ngIf=\"data[col.id].length != 0\">\n                              <app-ui-form-layout-row *ngFor=\"let item of data[col.id]; index as i ; last as isLast\">\n                                <ng-container *ngFor=\"let groupCol of col.groupColumns; last as groupLast\">\n                                  <app-ui-form-layout-col [colPC]=\"groupCol.grid.pc\" [colNB]=\"groupCol.grid.nb\"\n                                    [colPad]=\"groupCol.grid.pad\" [colMobile]=\"groupCol.grid.mobile\"\n                                    [hasRemove]=\"col.canAdd && groupLast\" (remove)=\"onGroupRemove(col.id,i)\">\n                                    <ng-container *ngIf=\"groupCol.type=='Select'\">\n                                      <app-ui-form-select [selectTitle]=\"groupCol.name |translate\"\n                                        [selectOption]=\"data[groupCol.id+'Option']\"\n                                        [(nxValue)]=\"data[col.id][i][groupCol.id]\"\n                                        (nxValueChange)=\"onChange(groupCol.id,$event,col.id,i)\" [placeholder]=\"groupCol.placeholder | translate\"\n                                        [isShowTitle]=\"groupCol.showTitle\"\n                                        [isShowDefaultOption]=\"groupCol.showDefaultOption\">\n                                      </app-ui-form-select>\n                                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(groupCol.id+i)\">\n                                        {{validationResult.getErrorMsg(groupCol.id+i) |translate }}\n                                      </app-ui-form-error-msg>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"groupCol.type=='Input'\">\n                                      <app-ui-form-input [inputTitle]=\"groupCol.name |translate\"\n                                        [type]=\"groupCol.id==='Tel'?'tel':'text'\" [name]=\"groupCol.name |translate\"\n                                        [isError]=\"validationResult.isError(groupCol.id+i)\" [maxLength]=\"groupCol.maxLength\"\n                                        [(nxValue)]=\"data[col.id][i][groupCol.id]\"\n                                        (nxValueChange)=\"onChange(groupCol.id,$event,col.id,i)\">\n                                      </app-ui-form-input>\n                                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(groupCol.id+i)\">\n                                        {{validationResult.getErrorMsg(groupCol.id+i) |translate }}\n                                      </app-ui-form-error-msg>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"groupCol.type=='Date'\">\n                                      <app-ui-form-date [title]=\"groupCol.name |translate\"\n                                        [(nxValue)]=\"data[col.id][i][groupCol.id]\"\n                                        (nxValueChange)=\"onChange(groupCol.id,$event,col.id,i)\"></app-ui-form-date>\n                                      <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg(groupCol.id+i)\">\n                                        {{validationResult.getErrorMsg(groupCol.id+i) |translate }}\n                                      </app-ui-form-error-msg>\n                                    </ng-container>\n                                  </app-ui-form-layout-col>\n                                  <div *ngIf=\"!groupCol.inline\" class=\"break-line\"></div>\n                                </ng-container>\n                                <ng-container *ngIf=\"data[col.id].length<col.maxNumber && col.canAdd && isLast\">\n                                  <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\"\n                                    [translateText]=\"language.customerAdd | translate\" [hasAdd]=\"true\"\n                                    (add)=\"onGroupAdd(col.id)\" [id]=\"col.id\">\n                                  </app-ui-form-layout-col>\n                                </ng-container>\n                              </app-ui-form-layout-row>\n                            </ng-container>\n                            <app-ui-form-layout-row class=\"first-add-block\"\n                              *ngIf=\"data[col.id].length === 0 && col.canAdd\">\n                              <app-ui-form-layout-col [colPC]=\"12\" [colNB]=\"12\" [colPad]=\"12\" [colMobile]=\"8\"\n                                [translateText]=\"language.customerAdd | translate\" [hasAdd]=\"true\" (add)=\"onGroupAdd(col.id)\" [id]=\"col.id\">\n                              </app-ui-form-layout-col>\n                            </app-ui-form-layout-row>\n                          </ng-container>\n                        </app-ui-data-group>\n                      </ng-container>\n                    </app-ui-form-layout-col>\n                  </app-ui-form-layout-row>\n                </ng-container>\n              </app-ui-data-group>\n            </ng-container>\n          </app-ui-form-layout-advanced>\n        </div>\n      </div>\n\n      <!-- btn -->\n      <app-ui-btn-layout>\n        <ng-container *ngFor=\"let button of footerConfig\">\n          <app-ui-btn *ngIf=\"button.type==='submit'||button.type==='button'\" [name]=\"button.id\"\n            [id]=\"button.id\" Action [action]=\"'customerEdit_'+button.id\" (actionClick)=\"onBtnClick(button.type,button.id)\" [isDisable]=\"data[button.id+'Btn'].disable\">\n            <ng-container TextType=\"cust\">{{button.name |translate }}</ng-container>\n          </app-ui-btn>\n        </ng-container>\n      </app-ui-btn-layout>\n      <!-- end of btn -->\n\n\n\n    </div>\n\n  </div>\n</app-ui-inner-page>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.profile-img-block img{border-radius:50%;display:inline-block;text-align:center;margin:0 auto;width:60px}.profile-img-block .active-img,.profile-img-block.active .normal-img{display:none}.profile-img-block.active .active-img{display:block}.layout-block{padding-top:10px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);background-color:#fff}.layout-block .layout-style-single{width:100%;margin:0 auto;text-align:left;max-width:418px}@media (min-width:1200px){.layout-block .layout-style-single{max-width:60%}}@media (max-width:767px){.layout-block .layout-style-single{box-sizing:border-box;padding-left:20px;padding-right:20px}.customer-edit-block ::ng-deep .first-add-block [class*=gas-col-]{margin-bottom:0}.customer-edit-block ::ng-deep .first-add-block.gas-row-block{top:-40px;margin-top:0;margin-bottom:15px;position:relative}.customer-edit-block ::ng-deep .first-add-block.gas-row-block .col-content.style-has-add{position:absolute;top:0;left:calc(1.25rem + 10px);max-width:150px}}@media (max-width:374px){.layout-block .layout-style-single{padding-left:10px;padding-right:10px}}.profile-img-block{text-align:center;padding-bottom:10px;padding-top:20px}@media screen and (min-width:1025px){.profile-img-block img{width:6vw}}.tag-block{display:flex}.break-line{display:block;width:100%}.page-cust-info ::ng-deep app-ui-form-radio-tag{width:30%}.page-cust-info ::ng-deep app-ui-form-radio-tag .tag-block .tag-content{font-weight:700}.page-cust-info ::ng-deep app-ui-form-radio-tag+app-ui-form-radio-tag{margin-left:5%}:host ::ng-deep app-ui-btn-layout{position:relative;bottom:-24px}:host ::ng-deep app-ui-btn-layout .btn-block{margin:0}.customer-edit-block ::ng-deep .form-group-block{margin-top:-15px}.customer-edit-block ::ng-deep .first-add-block .col-content.style-has-add{margin-top:0}.customer-edit-block ::ng-deep [class*=gas-col-].style-col-group{margin-bottom:0}"]
            }] }
];
CustomerEditComponent.ctorParameters = () => [
    { type: CustomerUtils },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: AppRouter },
    { type: TranslateService },
    { type: DefaultCustomerEditMetaController },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: APIExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerEditMetaControllerToken,] }] },
    { type: CustomerStoreService },
    { type: MetaService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [addProgressPointToken,] }] }
];
CustomerEditComponent.propDecorators = {
    sendContentHeight: [{ type: Output }],
    content: [{ type: ViewChild, args: ['inpageMain',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerFilterComponent extends FormMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     */
    constructor(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.metaService = metaService;
        this.customMetaController = customMetaController;
        //Input criteria
        this._criteria = new CustomerFilterCriteria();
        this.doneCriteria = new EventEmitter();
        this.language = new Language();
        this.unsubscribe$ = new Subject();
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
        console.log("PresetJson:", criteria.toMetaJSON());
        this._data = this.convertCriteriaToObject(criteria);
        this.waitUntilMetaLoaded().then((/**
         * @return {?}
         */
        () => {
            console.log("this.metaConfig:", this.metaConfig);
            this.onDataUpdated();
        }));
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get columnConfig() {
        return this.metaConfig.Columns;
    }
    /**
     * @return {?}
     */
    get footerConfig() {
        return this.metaConfig.Footer;
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        if (this.clear) {
            this.clear
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.clearCriteria();
            }));
        }
        if (this.save) {
            this.save
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
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
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        if (this.customMetaController) {
            this.customMetaController.btnClick(type, id, this._data);
        }
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        if (this.customMetaController)
            return this.customMetaController.onValidateAll(this._data, this.validationResult);
        else
            return true;
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupId
     * @param {?=} index
     * @return {?}
     */
    onValueChange(column, value, groupId = null, index = -1) {
        if (this.customMetaController) {
            this.customMetaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
        }
        else {
            if (Array.isArray(this._data[column])) {
                if (this._data[column].indexOf(value) > -1) {
                    this._data[column] = this._data[column].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x !== value));
                }
                else {
                    this._data[column] = [...this._data[column], value];
                }
                this._data["AsPreset"] = false;
            }
            else {
                this._data[column] = value;
            }
        }
        console.log("this.Data:", this._data);
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerFilter';
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        this.fillDefaultVal();
        console.log("Filter Data Updated:", this._data);
        if (this.customMetaController) {
            this.customMetaController.onDataUpdated(this._data);
        }
    }
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    getCheckboxValue(column, value) {
        return this._data[column] && this._data[column].indexOf(value) > -1;
    }
    /**
     * @private
     * @return {?}
     */
    fillDefaultVal() {
        this._data = Object.assign(this.getDefaultData(), this._data);
    }
    /**
     * @private
     * @return {?}
     */
    getDefaultData() {
        /** @type {?} */
        let defaultObj = this.metaConfig.Columns.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => {
            acc[cur] = [];
            return acc;
        }), {});
        /** @type {?} */
        let footerObj = this.metaConfig.Footer.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Checkbox')).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => {
            acc[cur] = false;
            return acc;
        }), {});
        return Object.assign(defaultObj, footerObj);
    }
    /**
     * @private
     * @return {?}
     */
    clearCriteria() {
        this._data = Object.assign(this._data, this.getDefaultData());
    }
    /**
     * @private
     * @return {?}
     */
    saveCriteria() {
        this.doneCriteria.emit(this.convertToCriteria());
    }
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    convertCriteriaToObject(criteria) {
        return Object.assign({}, criteria.toMetaJSON());
    }
    /**
     * @private
     * @return {?}
     */
    convertToCriteria() {
        /** @type {?} */
        let criteria = new CustomerFilterCriteria();
        this.metaConfig.Columns.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).forEach((/**
         * @param {?} colID
         * @return {?}
         */
        colID => {
            if (this._data[colID].length > 0)
                criteria.addCriteriaCols(colID, this._data[colID]);
        }));
        this.metaConfig.Footer.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).forEach((/**
         * @param {?} colID
         * @return {?}
         */
        colID => {
            criteria.setOption(colID, this._data[colID]);
        }));
        return criteria;
    }
}
CustomerFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-filter',
                template: "<!-- popu customer filter content -->\n<div *ngIf=\"isMetaLoaded()\" class=\"layout-cp-all ui-filter-block\">\n  <!-- chekboxes -->\n  <div *ngFor=\"let col of columnConfig\" class=\"data-filter-item\">\n    <!-- title -->\n    <div class=\"filter-title-block\">\n      <h3>{{col.name |translate }}</h3>\n    </div>\n    <!-- end of title -->\n    <!-- checkbox -->\n    <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n      <ng-container textType=\"originContent\">\n        <ng-container *ngFor=\"let option of data[col.id+'Option']; index as j\">\n          <app-ui-form-checkbox2 [nxValue]=\"getCheckboxValue(col.id,option.id)\"\n            (nxValueChange)=\"onChange(col.id,option.id)\" [isDisable]=\"false\">\n            <ng-container checkboxText=\"style1\">{{option.name}}</ng-container>\n          </app-ui-form-checkbox2>\n        </ng-container>\n      </ng-container>\n    </app-ui-collapse-group>\n    <!-- end of checkbox -->\n  </div>\n\n  <!-- end of chekboxes -->\n  <!-- setting block -->\n  <div class=\"setting-block\">\n    <ng-container *ngFor=\"let col of footerConfig\">\n      <app-ui-form-checkbox *ngIf=\"col.type==='Checkbox'\" [nxValue]=\"data[col.id]\"\n        (nxValueChange)=\"onValueChange(col.id,$event)\" [isDisable]=\"false\">\n        <ng-container checkboxText=\"style2\">{{col.name |translate }}</ng-container>\n      </app-ui-form-checkbox>\n    </ng-container>\n  </div>\n  <!-- end of setting block -->\n</div>\n<!-- end of popup customer filter content -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%;height:100%}.ui-filter-block{display:inline-block;width:100%;height:100%}.ui-filter-block .filter-title-block h3{font-size:1rem;font-weight:700;line-height:28px;padding-bottom:5px}.ui-filter-block .data-filter-item{margin-bottom:30px}.setting-block{display:block;width:100%;padding-bottom:30px}"]
            }] }
];
CustomerFilterComponent.ctorParameters = () => [
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: InputExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerFilterMetaControllerToken,] }] }
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
    /**
     * @param {?} showRule
     */
    constructor(showRule) {
        this.showRule = showRule;
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
    /**
     * @param {?} firstname
     * @param {?} lastname
     * @return {?}
     */
    toDisplayName(firstname, lastname) {
        if (this.showRule)
            return this.showRule.convertName(firstname, lastname);
        else
            return `${lastname} ${firstname}`;
    }
}
CustomerImportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-import',
                template: " <!-- data -->\n <ng-container *ngIf=\"importContractMap\">\n   <ng-container *ngFor=\"let group of importContractMap | keyvalue\">\n     <ng-container *ngIf=\"group.value.isShow\">\n       <app-ui-list-data2>\n         <ng-container textType=\"title\">{{group.key}}</ng-container>\n         <!-- data -->\n         <ng-container textType=\"data\">\n           <ng-container *ngFor=\"let item of group.value.getItems\">\n             <ng-container *ngIf=\"item.isShow\">\n               <app-ui-form-checkbox3 [isDisable]=\"false\" [(nxValue)]=\"item.isCheck\" (onClick)=\"doImport()\">\n                 <ng-container checkboxText=\"style3\">{{toDisplayName(item.FirstName,item.LastName)}}</ng-container>\n               </app-ui-form-checkbox3>\n             </ng-container>\n           </ng-container>\n         </ng-container>\n         <!-- end of data -->\n       </app-ui-list-data2>\n     </ng-container>\n   </ng-container>\n </ng-container>\n <!-- end of data -->",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}"]
            }] }
];
CustomerImportComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
];
CustomerImportComponent.propDecorators = {
    importContractMap: [{ type: Input }],
    importCustomer: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerListComponent {
    /**
     * @param {?} elementRef
     * @param {?} customerUtils
     */
    constructor(elementRef, customerUtils) {
        this.elementRef = elementRef;
        this.customerUtils = customerUtils;
        this.loadingFinish = true;
        this.refreshFinish = true;
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
        this._customerList = customerList;
        this.loadingFinish = true;
        this.refreshFinish = true;
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
    }
    /**
     * @return {?}
     */
    get onClickCustomerID() {
        return this._onClickCustomerID;
    }
    /**
     * @param {?} onClickCustomerID
     * @return {?}
     */
    set onClickCustomerID(onClickCustomerID) {
        this._onClickCustomerID = onClickCustomerID;
    }
    //Is Default Data(No Search Status)
    /**
     * @return {?}
     */
    get isDefaultData() {
        return this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType) && this.filterType == 'NONE';
    }
    /**
     * @return {?}
     */
    get showSearchNoData() {
        return this.customerList.length == 0 && StringUtils.isNotEmpty(this.filterType) && this.filterType == 'SEARCH';
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
        this._onClickCustomerID = clientID;
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
        //Settimeout to animate loader
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customerLoad.emit();
        }), 800);
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
     * @param {?} customerItem
     * @return {?}
     */
    convertNameToShow(customerItem) {
        return this.customerUtils.convertNameToShow(customerItem.firstName, customerItem.lastName);
    }
}
CustomerListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-list',
                template: "<div class=\"customer-list-block ui-list-data\">\n    <!-- CustomerList has data-->\n    <app-ui-infinite-scroll [syncFunction]=\"['CUSTOMER']\" (loadingCallback)=\"loadCustomer($event)\" (refreshCallback)=\"refreshCustomer()\"\n        [(loadingFinish)]=\"loadingFinish\" [(refreshFinish)]=\"refreshFinish\" [lazyLoading]=\"true\" [translateText]=\"language.loading | translate\">\n        \n        <ul class=\"list-data-block stop-scroll-block\">\n            <ng-container *ngIf=\"customerList && customerList.length != 0 ; else noCustomerData\">\n    \n            <li *ngFor=\" let customer of customerList; let i = index\" Action [action]=\"'customerListClickCustomer_'+customer.clientID\" (actionClick)=\"onClickCustomer(customer.clientID)\"  class=\"list-item-block\" [ngClass]= \"[(customer.clientID == onClickCustomerID ? ' active':''), (customer.isHighlight ? ' highlight':'')]\">\n                <div class=\"title-profile-block\">\n                    <div class=\"title-block\">\n                        <div class=\"like-block\">\n                            <app-ui-btn-like-add [isLike]=\"customer.isFollow\"></app-ui-btn-like-add>\n                        </div>\n                        <div class=\"title-text\">\n                            {{convertNameToShow(customer)}}\n                        </div>\n                        <app-ui-form-radio-tag [hidden]=\"!customer.tag\" class=\"tag-item\" [checked]=\"true\" [disabled]=\"true\" [ngClass]=\"customer.tag\">{{customer.tag | translate}}</app-ui-form-radio-tag>\n                    </div>\n                    <div class=\"profile-block\">\n                        <div class=\"img-profile-block\">\n                            <ng-container *ngIf=\"customer.isOtherSource; then otherSource else appSource\"></ng-container>\n\n                            <!-- datasource from Opus-->\n                            <ng-template #otherSource>\n                                <img src=\"assets/img/icon-customer-profile-sm.svg\">\n                            </ng-template>\n\n                            <!-- datasource from APP-->\n                            <ng-template #appSource>\n                                <img src=\"assets/img/icon-customer-profile-sm-active.svg\">\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"content-block\">\n                    <app-ui-progress [value]=\"customer.complementPercent\" [theme]=\"'sub'\" [isShowValue]=\"true\">{{language.customerInformation |translate }}</app-ui-progress>\n                </div>\n            </li>\n        </ng-container>\n        </ul>\n    </app-ui-infinite-scroll>\n\n    <ng-template #noCustomerData>\n        <!-- Customer no data without search-->\n        <ng-container *ngIf=\"isDefaultData ; else customerSearchNoData\">\n            <div class=\"skelton-layout stop-scroll-block\">\n                <div class=\"theme-loading\">\n                    <div class=\"text-desc\">\n                        <span class=\"text\">{{language.click |translate }}\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-add-grey.svg\"></span>\n                        <span class=\"icon-img\"><img src=\"assets/img/icon-import-grey.svg\"></span>\n                        {{language.noEdit |translate }}</span>\n                    </div>\n                    <div class=\"loading-img\">\n                        <div class=\"skelton-data-block\">\n                            <div class=\"skelton-text wd-short align-right \"></div>\n                            <div class=\"skelton-text wd-long \"></div>\n                            <div class=\"skelton-row align-side\">\n                                <div class=\"skelton-text wd-md \"></div>\n                                <div class=\"skelton-text wd-short \"></div>\n                            </div>\n                            <div class=\"skelton-text wd-long \"></div>\n                        </div>\n                        <img src=\"assets/img/loading-customer-list.svg\">\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n\n        <!-- Customer no data after searching-->\n        <ng-template #customerSearchNoData>\n            <ng-container *ngIf=\"showSearchNoData ;  else customerFilterNoData\">\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/empty-img-search.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                            <p>{{language.noSearch |translate }}</p>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-template>\n\n        <!-- Customer no data after filtering-->\n        <ng-template #customerFilterNoData>\n                <div class=\"status-empty search-empty\">\n                    <div class=\"empty-block\">\n                        <div class=\"img-block\">\n                            <img src=\"assets/img/icon-filter-no-data.svg\">\n                        </div>\n                        <div class=\"text-block\">\n                          <p>{{language.noFilter |translate }}</p>\n                        </div>\n                    </div>\n                  </div>\n        </ng-template>\n            \n    </ng-template>\n\n  </div>\n",
                styles: [".skelton-layout{margin:0}.skelton-row{display:flex}.skelton-row.align-side{justify-content:space-between}.align-right{margin:0 0 15px auto}.align-center{margin:15px auto}.skeleton-round{border-radius:50%;background-color:#ececec;max-width:100%;max-height:100%;width:100%;height:100%}.skelton-square{display:inline-block;width:30px;height:30px}.skelton-text{min-height:1rem;max-width:100%;width:100%;background-color:#ececec;display:block;margin-bottom:15px}.skelton-line{display:inline-block;max-width:100%;width:100%;background-color:#ececec;height:1px}.skelton-img-text .skelton-square{margin-bottom:10px}::ng-deep ion-skeleton-text{background-color:#ececec}::ng-deep ion-skeleton-text span{opacity:1;background-color:#ececec}.skelton-animate{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(194,194,194,.3);background:linear-gradient(to right,rgba(194,194,194,.3) 8%,rgba(194,194,194,.2) 18%,rgba(194,194,194,.3) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}@keyframes placeHolderShimmer{0%{background-position:-268px 0}100%{background-position:268px 0}}.ui-list-data .skelton-layout{margin-top:30px}.ui-list-data .theme-loading{text-align:center}.ui-list-data .theme-loading .text-desc{padding-left:10%;padding-right:10%;text-align:center;display:inline-block;vertical-align:middle;margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{color:#414141;font-size:.875rem;line-height:28px;display:inline-block;vertical-align:middle}.ui-list-data .theme-loading .text-desc .text .icon-img{display:inline-block;vertical-align:middle;line-height:normal}.ui-list-data .theme-loading .loading-img{text-align:right;position:relative}.ui-list-data .theme-loading .loading-img .skelton-data-block{padding-left:10%;padding-right:10%;box-sizing:border-box;position:absolute;top:30px;width:100%}.ui-list-data .theme-loading .loading-img .skelton-text{margin-bottom:25px}.ui-list-data .theme-loading .loading-img .wd-short{max-width:30%}.ui-list-data .theme-loading .loading-img .wd-md{max-width:54%}.ui-list-data .theme-loading .loading-img .wd-long{max-width:70%}.ui-list-data .theme-loading .loading-img img{max-width:300px;width:100%}@media (max-width:1023px){.ui-list-data .theme-loading img{bottom:400px;top:auto}}@media (max-width:767px){.ui-list-data .theme-loading{height:100%;position:relative}.ui-list-data .theme-loading .text-desc{margin-bottom:30px}.ui-list-data .theme-loading .text-desc .text{max-width:185px;width:100%}.ui-list-data .theme-loading .loading-img{margin-top:0;height:100%;position:absolute;right:0;bottom:0;max-width:153px;width:100%}.ui-list-data .theme-loading .loading-img .wd-short{max-width:22%}.ui-list-data .theme-loading .loading-img .skelton-data-block{width:100%;max-width:253px;right:10px;top:60px;position:absolute}.ui-list-data .theme-loading .loading-img img{max-width:153px;margin-top:0;bottom:0;top:auto;position:absolute;right:0}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-empty.search-empty{padding-left:13%;padding-right:13%;box-sizing:border-box;text-align:center;display:flex;height:100%;min-height:calc(90vh - 59px - 56px - 24px);justify-content:center;align-items:center}.status-empty.search-empty .empty-block{text-align:center;margin:0 auto}.status-empty.search-empty .img-block{max-width:50px;width:100%;margin:0 auto}.status-empty.search-empty .text-block p{padding:0;font-size:1.125rem;line-height:28px}@media (max-width:767px){.status-empty.search-empty.search-empty{max-width:182px;width:100%;margin:0 auto;padding-left:0;padding-right:0}}.customer-list-block.ui-list-data{border-top:1px solid #c2c2c2;background-color:#fff}.customer-list-block.ui-list-data .title-sm-block{background-color:#ececec;display:inline-block;width:100%;padding:5px 15px 5px 6px}.customer-list-block.ui-list-data .title-sm-block p{padding:0;margin:0}.customer-list-block.ui-list-data .list-data-block{list-style-type:none;padding:0;border-bottom:1px solid #c2c2c2}.customer-list-block.ui-list-data .list-data-block .list-item-block{padding:12px 15px 12px 6px;box-sizing:border-box;position:relative}.customer-list-block.ui-list-data .list-data-block .list-item-block.highlight{background-color:#f5f5f5}@media (min-width:1024px){.customer-list-block.ui-list-data .list-data-block .list-item-block.active{background-color:#f1f9fa}}.customer-list-block.ui-list-data .list-data-block .list-item-block+.list-item-block{border-top:1px solid #c2c2c2}@media screen and (max-width:767px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;width:100%;margin-bottom:5px}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block .title-text{max-width:calc(100% - 27px)}}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block{display:flex;justify-content:flex-start;align-items:center;margin-bottom:10px}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block .title-text{font-size:.875rem;padding:0 3px;font-weight:700;display:inline-block;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block{text-align:right}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block .img-profile-block img{vertical-align:middle}@media screen and (max-width:767px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .title-block{margin-bottom:0;max-width:calc(100% - 14px)}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block{flex:0 0 14px}}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block .progress-value-block .progress-block{max-width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{pointer-events:none;display:inline-block;max-width:12px;max-height:12px;width:100%;vertical-align:middle}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{display:inline-block;width:12px}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{max-width:100%;width:12px}@media screen and (min-width:1025px){.customer-list-block.ui-list-data .list-data-block .list-item-block .title-profile-block .profile-block .img-profile-block img{width:1.4vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add{max-width:1.2vw;max-height:1.2vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add{width:1.2vw}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep app-ui-btn-like-add .btn-like-add img{width:1.2vw}}.customer-list-block.ui-list-data .list-data-block .list-item-block .content-block{padding-left:12px}.customer-list-block.ui-list-data .list-data-block ::ng-deep .tag-item .ul-tag-block{position:relative;top:2px}.customer-list-block.ui-list-data .list-data-block ::ng-deep .tag-item ::ng-deep .tag-block{height:14px;padding-top:0;padding-bottom:0}.customer-list-block.ui-list-data ::ng-deep .progress-whole-block{padding-bottom:0}.customer-list-block.ui-list-data ::ng-deep .progress-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width:769px){.customer-list-block.ui-list-data ::ng-deep .scroll-content{height:calc(100vh - (40px*2) - 140px)}}@media (max-width:767px){.customer-list-block.ui-list-data .tag-item{min-width:40px;padding-right:35px}.customer-list-block.ui-list-data .list-data-block .list-item-block{display:flex;flex-wrap:wrap}.customer-list-block.ui-list-data .list-data-block .list-item-block .title-block{justify-content:flex-start;max-width:100%;width:100%;padding-right:0;box-sizing:border-box}.customer-list-block.ui-list-data .list-data-block .list-item-block .profile-block{max-width:20px;width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block .profile-block .img-profile-block{max-width:100%;align-items:center}.customer-list-block.ui-list-data .list-data-block .list-item-block .content-block{width:100%}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-whole-block{display:flex;width:100%;justify-content:flex-end;padding-bottom:0!important}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block{padding-left:10px}.customer-list-block.ui-list-data .list-data-block .list-item-block ::ng-deep .progress-value-block .progress-block{display:none}}:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 80px - 63px - 56px - 10px)}::ng-deep html:not(.font-size_sm) .customer-list-block.ui-list-data .list-data-block .tag-item .tag-block{height:15px}@media (max-width:768px){.customer-list-block.ui-list-data .list-data-block .tag-item{padding-right:0;margin-right:25px;width:52px}.customer-list-block.ui-list-data .skelton-layout{height:calc(100vh - 55px - 55px - 134px);overflow-y:auto}:host ::ng-deep app-ui-infinite-scroll{background-color:#fff}:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - 55px - 55px - 134px);height:100%}@supports (top:constant(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - constant(safe-area-inset-top) - constant(safe-area-inset-bottom) - 55px - 55px - 134px)}}@supports (top:env(safe-area-inset-top)){:host ::ng-deep app-ui-infinite-scroll .infiniti-scroll{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 55px - 55px - 134px)}}}"]
            }] }
];
CustomerListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CustomerUtils }
];
CustomerListComponent.propDecorators = {
    customerClick: [{ type: Output }],
    customerLoad: [{ type: Output }],
    customerRefresh: [{ type: Output }],
    customerList: [{ type: Input }],
    filterType: [{ type: Input }],
    onClickCustomerID: [{ type: Input }]
};

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
class DefaultCustomerImportDisplay {
    /**
     * @param {?} customImportDisplay
     */
    constructor(customImportDisplay) {
        this.customImportDisplay = customImportDisplay;
    }
    /**
     * @param {?} customer
     * @return {?}
     */
    convert(customer) {
        if (this.customImportDisplay)
            return this.customImportDisplay.convert(customer);
        else {
            if (StringUtils.isEmpty(customer.LastName)) {
                customer.LastName = customer.FirstName;
                customer.FirstName = '';
            }
            return customer;
        }
    }
}
DefaultCustomerImportDisplay.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DefaultCustomerImportDisplay.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerImportDisplayToken,] }] }
];
/** @nocollapse */ DefaultCustomerImportDisplay.ngInjectableDef = defineInjectable({ factory: function DefaultCustomerImportDisplay_Factory() { return new DefaultCustomerImportDisplay(inject(customerImportDisplayToken, 8)); }, token: DefaultCustomerImportDisplay, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomersComponent {
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
        (state$$1) => __awaiter(this, void 0, void 0, function* () {
            console.log("main state: ", state$$1);
            if (state$$1 == CUSTOMER_STATE.EDIT_SAVED && this.customerState != CUSTOMER_STATE.EDIT_SAVED) {
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
            else if (state$$1 == CUSTOMER_STATE.EDIT && this.customerState != CUSTOMER_STATE.EDIT && this.customerState == CUSTOMER_STATE.FIRST) {
                // edit/click page click last page
                this.customerList = this.pre_customerList;
                this.filterCriteria = this.pre_criteria;
                if (!StringUtils.isEmpty(this.currentCustomer.ClientID)) {
                    yield this.onGetCustomerDetailByID(this.currentCustomer.ClientID);
                }
                this.refreshCustomerList(false);
            }
            else if (this.customerState == CUSTOMER_STATE.FIRST && state$$1 == CUSTOMER_STATE.DISPLAY) {
                //firt in, fetch preset filter
                console.log("this.customerState == CUSTOMER_STATE.FIRST && state == CUSTOMER_STATE.DISPLAY");
                yield this.loadPresetCriteria();
                this.refreshCustomerList(false);
            }
            else if (state$$1 == CUSTOMER_STATE.ADD_SAVED) {
                //after add , get pre_criteria && refresh customerlist
                console.log("state == CUSTOMER_STATE.ADD_SAVED", this.currentCustomer);
                this.isDisplaySavePopup = true;
                this.filterCriteria = this.pre_criteria;
                this.refreshCustomerList(false, this.currentCustomer.ClientID);
            }
            else if (state$$1 == CUSTOMER_STATE.IMPORT) {
                this.importPopup();
            }
            if (this.customerState != state$$1) {
                this.customerState = state$$1;
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerContactDetailComponent extends DisplayMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     */
    constructor(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.customMetaController = customMetaController;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
        console.log("set contact detail data:", value);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get columnConfig() {
        return this.metaConfig.Columns;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerContactDetail';
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return null;
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        if (this.customMetaController)
            this.customMetaController.onDataUpdated(this._data);
    }
}
CustomerContactDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-detail',
                template: "<ng-container *ngIf=\"isMetaLoaded()\">\n  <ng-container *ngFor=\"let col of columnConfig\">\n    <p *ngIf=\"col.id!='Name'\" class=\"desc-normal desc-line-lg\">{{data[col.id]}}</p>\n    <p *ngIf=\"col.id=='Name'\" class=\"desc\">{{data[col.id]}}</p>\n  </ng-container>\n</ng-container>\n",
                styles: [""]
            }] }
];
CustomerContactDetailComponent.ctorParameters = () => [
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: InputExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerContactDetailMetaControllerToken,] }] }
];
CustomerContactDetailComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerContactEditComponent extends FormMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     */
    constructor(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.customMetaController = customMetaController;
        this.customerClientID = '';
        this.unsubscribe$ = new Subject();
        this.save = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        /** @type {?} */
        let defaultObj = {};
        if (this.metaConfig)
            defaultObj = this.metaConfig.Columns.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id)).reduce((/**
             * @param {?} acc
             * @param {?} current
             * @return {?}
             */
            (acc, current) => {
                acc[current] = '';
                return acc;
            }), {});
        if (value != null)
            this._data = Object.assign(defaultObj, value);
        else
            this._data = defaultObj;
        console.log("set contact edit data:", this._data);
        if (this.customMetaController)
            this.customMetaController.onDataUpdated(this._data);
        this.customerClientID = this._data.CustomerClientID;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get columnConfig() {
        return this.metaConfig.Columns;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        if (this.saveSubject) {
            this.saveSubject
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.onBtnClick('submit', 'save');
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return {
            CustomerClientID: this.customerClientID
        };
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        if (type === 'submit') {
            this.save.emit(this._data);
        }
        if (this.customMetaController)
            this.customMetaController.btnClick(type, id, this._data);
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerContactEdit';
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        if (!this.validationResult.isTrue()) {
            //If basic validation has error.
            if (this.validationResult.isError('Note'))
                alert("Note " + this.validationResult.getErrorMsg("Note"));
            return false;
        }
        else {
            //Do custom validation.
            /** @type {?} */
            let result = true;
            if (this.customMetaController)
                result = result && this.customMetaController.onValidateAll(this._data, this.validationResult);
            return result;
        }
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    onValueChange(column, value, groupId, index) {
        //Trigger other column values
        if (this.customMetaController)
            this.customMetaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    }
}
CustomerContactEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-edit',
                template: "<ng-container *ngIf=\"data && isMetaLoaded()\">\n  <ng-container *ngFor=\"let col of columnConfig\">\n    <div class=\"date-block\">\n      <div class=\"txt\" *ngIf=\"col.type == 'Label'\">{{data[col.id]}}</div>\n    </div>\n    <div *ngIf=\"col.type == 'Textarea'\" class=\"textarea-block\">\n      <snd-ui-form-textarea [placeholder]=\"col.placeholder | translate\" [maxLength]=\"col.maxLength\"\n        [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\" [height]=\"'180px'\" [id]=\"col.id\"></snd-ui-form-textarea>\n    </div>\n  </ng-container>\n</ng-container>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.date-block{position:relative;margin-bottom:5px}.date-block .date-data{pointer-events:none;background-color:#fff;position:absolute;top:0;height:100%;font-size:.875rem;font-weight:700}.date-block .txt{font-size:.875rem;font-weight:700;line-height:2}"]
            }] }
];
CustomerContactEditComponent.ctorParameters = () => [
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: InputExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerContactEditMetaControllerToken,] }] }
];
CustomerContactEditComponent.propDecorators = {
    data: [{ type: Input }],
    saveSubject: [{ type: Input }],
    save: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IntegrationCalendarCustomerModule {
}
IntegrationCalendarCustomerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent, CalendarEditComponent, CalendarDetailComponent, CalendarFilterComponent,
                    CustomersComponent, CustomerEditComponent, CustomerListComponent,
                    CustomerDetailComponent, CustomerContactListComponent, CustomerFilterComponent, CustomerImportComponent, CustomerContactDetailComponent, CustomerContactEditComponent],
                imports: [
                    NxIconModule,
                    NxButtonModule,
                    NxFormfieldModule,
                    NxDatefieldModule,
                    NxNativeDateModule,
                    UIModule,
                    CoreModule,
                    CommonModule,
                    FormsModule,
                    NxDropdownModule,
                    NxRadioModule,
                    NxInputModule,
                    NxMessageModule,
                    NxProgressbarModule,
                    NxModalModule,
                    NxAccordionModule,
                    NxGridModule,
                    ReactiveFormsModule,
                ],
                providers: [DatePipe],
                exports: [
                    CalendarEditComponent, CalendarComponent, CalendarDetailComponent,
                    CustomersComponent, CustomerEditComponent
                ]
            },] }
];

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
        console.debug("addCustomerContactNote API Data:", this.Data);
        // If empty, don't save 
        if (!this.Data.Note) {
            return of(new SQLiteResponse({
                status: true
            }, []));
        }
        else {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                let contactObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact");
                /** @type {?} */
                let contactExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Contact_Extension");
                /** @type {?} */
                let dao = this.daoFactory.getDefaultDao();
                if (contactObj != undefined && dao != undefined) {
                    dao = new ClientCustomDao(dao);
                    contactObj.setValue('CustomerClientID', this.Data.CustomerClientID);
                    contactObj.setValue('Note', this.Data.Note);
                    contactObj.setValue('NoteTime', this.Data.NoteTime);
                    contactExtObj = TableUtils.fillTableColumn(contactExtObj, this.Data);
                    contactExtObj.setValue('CustomerClientID', this.Data.CustomerClientID);
                    if (this.Data.ClientID != undefined && this.Data.ClientID != '') {
                        contactObj.addRestriction(new EqualRestriction('ClientID', [this.Data.ClientID]));
                        contactExtObj.addRestriction(new EqualRestriction('ClientID', [this.Data.ClientID]));
                        dao.transactionUpdate(contactObj);
                        dao.transactionUpdate(contactExtObj);
                    }
                    else {
                        /** @type {?} */
                        let clientID = v4();
                        contactObj.setValue('ClientID', clientID);
                        contactExtObj.setValue('ClientID', clientID);
                        dao.transactionInsert(contactObj);
                        dao.transactionInsert(contactExtObj);
                    }
                    dao.runTransaction().subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
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
                    console.debug("getCustomerContactNote:", resp);
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
        this._id = '';
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
        let defaultObj = {
            "ClientID": "",
            "LastName": "",
            "FirstName": "",
            "Occupation": "",
            "Company": "",
            "BirthdayYear": "",
            "BirthdayMonth": "",
            "BirthdayDate": "",
            "Birthday": null,
            "AgeRange": null,
            "Gender": null,
            "Income": null,
            "Source": null,
            "Marriage": null,
            "Children": null,
            "Familiarity": null,
            "RecentStatus": null,
            "MANPA": null,
            "ContactFrequancy": null,
            "Possibility": null,
            "IsFollow": "N",
            "DataSource": "APP",
            "tel": [],
            "email": [],
            "address": []
        };
        if (!this._id || (this._id.length == 0)) {
            //Add
            /** @type {?} */
            let resp = new SQLiteResponse({
                "isSuccess": true
            }, [defaultObj]);
            return of(resp);
        }
        else {
            /** @type {?} */
            let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
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
                        return { customer, clientID };
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
                        return { customer, clientID };
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
                        return customer;
                })).then((/**
                 * @param {?} customer
                 * @return {?}
                 */
                customer => {
                    //change birthDay to Date Object
                    if (!!customer['Body'][0]['BirthdayYear'] && !!customer['Body'][0]['BirthdayMonth'] && customer['Body'][0]['BirthdayDate'])
                        customer['Body'][0]['Birthday'] = new Date(parseInt(customer['Body'][0]['BirthdayYear']), parseInt(customer['Body'][0]['BirthdayMonth']) - 1, customer['Body'][0]['BirthdayDate']);
                    else
                        customer['Body'][0]['Birthday'] = null;
                    console.log("CustomerDetailAPI convert BirthDay: ", customer['Body'][0]['Birthday']);
                    return customer;
                })));
            }
            else {
                return of(false);
            }
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
                messageObj.addRestriction(new EqualRestriction("MessageType", ['Overtime']));
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
     * @param {?} restrictions
     * @return {?}
     */
    set restrictions(restrictions) {
        this._restrictions = restrictions;
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
            let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (this._restrictions.length > 0) {
                    this._restrictions.forEach((/**
                     * @param {?} condition
                     * @return {?}
                     */
                    (condition) => {
                        customerObj.addRestriction(condition);
                    }));
                }
                //add order by
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //add page limit
                if (this._pageInfo.pageSize > 0) {
                    customerObj.addRestriction(new LimitRestriction([this._pageInfo.pageSize]));
                    customerObj.addRestriction(new OffsetRestriction([(this._pageInfo.page - 1) * 10]));
                }
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
        this.Data = null;
    }
    /**
     * @param {?} detail
     * @return {?}
     */
    setDetail(detail) {
        this.Data = detail;
    }
    /**
     * @return {?}
     */
    get customerDetail() {
        return this.Data;
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
            let dao;
            /** @type {?} */
            let base_dao = this.daoFactory.getDefaultDao();
            if (base_dao != undefined) {
                dao = new ClientCustomDao(base_dao);
                console.log("base_dao:", base_dao);
                console.log("dao:", dao);
                //save customer data
                /** @type {?} */
                let customerObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer");
                /** @type {?} */
                let customerExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Extension");
                if (customerObj && customerExtObj) {
                    /** @type {?} */
                    let birthday = this.customerDetail.Birthday;
                    if (birthday != null && birthday != undefined) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear().toString());
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
                    }
                    else {
                        customerObj.setValue("BirthdayYear", null);
                        customerObj.setValue("BirthdayMonth", null);
                        customerObj.setValue("BirthdayDate", null);
                    }
                    customerObj.setValue("AgeRange", this.customerDetail.AgeRange);
                    customerObj.setValue('ClientID', this.customerDetail.ClientID);
                    customerObj.setValue("LastName", this.customerDetail.LastName);
                    customerObj.setValue("FirstName", this.customerDetail.FirstName);
                    customerObj.setValue("Occupation", this.customerDetail.Occupation);
                    customerObj.setValue("Company", this.customerDetail.Company);
                    customerObj.setValue("Gender", this.customerDetail.Gender);
                    customerObj.setValue("Income", this.customerDetail.Income);
                    customerObj.setValue("Source", this.customerDetail.Source);
                    customerObj.setValue("Marriage", this.customerDetail.Marriage);
                    customerObj.setValue("Children", this.customerDetail.Children);
                    customerObj.setValue("Familiarity", this.customerDetail.Familiarity);
                    customerObj.setValue("ContactFrequancy", this.customerDetail.ContactFrequancy);
                    customerObj.setValue("Possibility", this.customerDetail.Possibility);
                    customerObj.setValue("IsFollow", this.customerDetail.IsFollow);
                    customerExtObj.setValue('ClientID', this.customerDetail.ClientID);
                    // customerExtObj.setValue("RecentStatus", this.customerDetail.RecentStatus);
                    // customerExtObj.setValue("MANPA", this.customerDetail.MANPA);
                    console.log("save cusomer stringify:", JSON.stringify(this.customerDetail));
                    customerExtObj = TableUtils.fillTableColumn(customerExtObj, this.customerDetail);
                    console.log("save cusomer extObj:", JSON.stringify(customerExtObj));
                    //set customer default column & value
                    this.customerUtils.setCustomerDefaultValue(customerObj);
                    this.customerDetail.AgeRange = customerObj.getValue("AgeRange");
                    customerObj.setValue('Completeness', this.customerDetail.Completeness);
                    console.debug('insertCustomer', customerObj);
                    // console.log('clientID:', customerObj.getValue('ClientID'));
                    if (customerObj.getValue('ClientID') == '') {
                        /** @type {?} */
                        let _clientID = v4();
                        customerObj.setValue('ClientID', _clientID);
                        customerExtObj.setValue('ClientID', _clientID);
                        dao.transactionInsert(customerObj);
                        dao.transactionInsert(customerExtObj);
                    }
                    else {
                        /** @type {?} */
                        let _deletedClientID = customerObj.getValue('ClientID');
                        /** @type {?} */
                        let phoneInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                        /** @type {?} */
                        let phoneInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        /** @type {?} */
                        let emailInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                        /** @type {?} */
                        let addressInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                        /** @type {?} */
                        let addressInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                        customerObj.addRestriction(new EqualRestriction('ClientID', [_deletedClientID]));
                        customerExtObj.addRestriction(new EqualRestriction('ClientID', [_deletedClientID]));
                        phoneInsertObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        phoneInsertExtObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        emailInsertObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        emailInsertExtObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        addressInsertObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        addressInsertExtObj.addRestriction(new EqualRestriction('CustomerClientID', [_deletedClientID]));
                        dao.transactionUpdate(customerObj);
                        dao.transactionUpdate(customerExtObj);
                        base_dao.transactionDelete(phoneInsertObj);
                        base_dao.transactionDelete(phoneInsertExtObj);
                        base_dao.transactionDelete(emailInsertObj);
                        base_dao.transactionDelete(emailInsertExtObj);
                        base_dao.transactionDelete(addressInsertObj);
                        base_dao.transactionDelete(addressInsertExtObj);
                    }
                    //save phone data              
                    for (let phone of this.customerDetail.tel) {
                        /** @type {?} */
                        let phoneInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel");
                        /** @type {?} */
                        let phoneInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                        if (phoneInsertObj && phone.Tel) {
                            if (phone.TelType == '')
                                phone.TelType = 'TelHome';
                            /** @type {?} */
                            let clientID = v4();
                            phoneInsertObj = ((/** @type {?} */ (phoneInsertObj)));
                            phoneInsertObj.setValue("ClientID", clientID);
                            phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            phoneInsertObj.setValue('TelType', phone.TelType);
                            phoneInsertObj.setValue('Tel', phone.Tel);
                            phoneInsertExtObj.setValue("ClientID", clientID);
                            phoneInsertExtObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            phoneInsertExtObj = TableUtils.fillTableColumn(phoneInsertExtObj, phone);
                            //insert
                            dao.transactionInsert(phoneInsertObj);
                            dao.transactionInsert(phoneInsertExtObj);
                        }
                    }
                    //save email data
                    for (let email of this.customerDetail.email) {
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        /** @type {?} */
                        let emailInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                        if (emailInsertObj && email.Email) {
                            if (email.EmailType == '')
                                email.EmailType = 'MailHome';
                            /** @type {?} */
                            let clientID = v4();
                            emailInsertObj = ((/** @type {?} */ (emailInsertObj)));
                            emailInsertObj.setValue("ClientID", clientID);
                            emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            emailInsertObj.setValue('EmailType', email.EmailType);
                            emailInsertObj.setValue('Email', email.Email);
                            emailInsertExtObj.setValue("ClientID", clientID);
                            emailInsertExtObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            emailInsertExtObj = TableUtils.fillTableColumn(emailInsertExtObj, email);
                            //insert
                            dao.transactionInsert(emailInsertObj);
                            dao.transactionInsert(emailInsertExtObj);
                        }
                    }
                    //save address data
                    for (let address of this.customerDetail.address) {
                        /** @type {?} */
                        let addressInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address");
                        /** @type {?} */
                        let addressInsertExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                        if (addressInsertObj) {
                            if (!this._judgeIsAddressEmpty(address)) {
                                // if (address.AddressType == '') address.AddressType = 'AddressTypeHome';
                                /** @type {?} */
                                let clientID = v4();
                                addressInsertObj.setValue("ClientID", clientID);
                                addressInsertObj = ((/** @type {?} */ (addressInsertObj)));
                                addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                addressInsertObj.setValue('AddressType', address.AddressType);
                                addressInsertObj.setValue('Country', address.Country);
                                addressInsertObj.setValue('City', address.City);
                                addressInsertObj.setValue('Area', address.Area);
                                addressInsertObj.setValue('Zipcode', address.Zipcode);
                                addressInsertObj.setValue('Address', address.Address);
                                addressInsertExtObj.setValue("ClientID", clientID);
                                addressInsertExtObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                                addressInsertExtObj = TableUtils.fillTableColumn(addressInsertExtObj, address);
                                //insert
                                dao.transactionInsert(addressInsertObj);
                                dao.transactionInsert(addressInsertExtObj);
                            }
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
    /**
     * @private
     * @param {?} customerObj
     * @return {?}
     */
    _judgeIsAddressEmpty(customerObj) {
        /** @type {?} */
        let requiredCol = ['Country', 'City', 'Area', 'Zipcode', 'Address'];
        return requiredCol.reduce((/**
         * @param {?} total
         * @param {?} each
         * @return {?}
         */
        (total, each) => total && customerObj[each] == ''), true);
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
                    /** @type {?} */
                    let customerExt = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Extension");
                    /** @type {?} */
                    let ClientID = v4();
                    customerObj.setValue("ClientID", ClientID);
                    customerObj.setValue("LastName", item.LastName);
                    customerObj.setValue("FirstName", item.FirstName);
                    customerObj.setValue("IsFollow", "N");
                    customerExt.setValue("ClientID", ClientID);
                    /** @type {?} */
                    let birthday = item.Birthday;
                    if (birthday != null) {
                        customerObj.setValue("BirthdayYear", birthday.getFullYear);
                        customerObj.setValue("BirthdayMonth", birthday.getMonth);
                        customerObj.setValue("BirthdayDate", birthday.getDate);
                    }
                    //set customer default column & value
                    this.customerUtils.setCustomerDefaultValue(customerObj);
                    //count Completeness
                    /** @type {?} */
                    let completeness = this.customerUtils.countCompleteness(item);
                    customerObj.setValue('Completeness', completeness);
                    //insert customer data
                    dao.transactionInsert(customerObj);
                    dao.transactionInsert(customerExt);
                    //save phone data
                    for (let phone of item.tel) {
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
                        /** @type {?} */
                        let phoneInsertObj_Ext = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Tel_Extension");
                        if (phoneInsertObj) {
                            /** @type {?} */
                            let clientID = v4();
                            phoneInsertObj = ((/** @type {?} */ (phoneInsertObj)));
                            phoneInsertObj.setValue('ClientID', clientID);
                            phoneInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            phoneInsertObj.setValue('TelType', telType);
                            phoneInsertObj.setValue('Tel', phone.number);
                            phoneInsertObj.setValue('DataSource', 'APP');
                            phoneInsertObj_Ext.setValue('ClientID', clientID);
                            phoneInsertObj_Ext.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            //insert
                            dao.transactionInsert(phoneInsertObj);
                            dao.transactionInsert(phoneInsertObj_Ext);
                        }
                    }
                    //save email data
                    /** @type {?} */
                    let maxEmailCount = 3;
                    /** @type {?} */
                    let importEmailCount = maxEmailCount;
                    if (item.email.length < 3)
                        importEmailCount = item.email.length;
                    for (let i = 0; i < importEmailCount; i++) {
                        /** @type {?} */
                        let email = item.email[i];
                        /** @type {?} */
                        let emailInsertObj = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email");
                        /** @type {?} */
                        let emailInsertObj_Ext = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Email_Extension");
                        if (emailInsertObj) {
                            /** @type {?} */
                            let clientID = v4();
                            emailInsertObj = ((/** @type {?} */ (emailInsertObj)));
                            emailInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            emailInsertObj.setValue('EmailType', 'MailHome');
                            emailInsertObj.setValue('Email', email);
                            emailInsertObj.setValue('ClientID', clientID);
                            emailInsertObj.setValue('DataSource', 'APP');
                            emailInsertObj_Ext.setValue('ClientID', clientID);
                            emailInsertObj_Ext.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            //insert
                            dao.transactionInsert(emailInsertObj);
                            dao.transactionInsert(emailInsertObj_Ext);
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
                        /** @type {?} */
                        let addressInsertObj_Ext = this.daoFactory.getDefaultTable("TW_LH_SD_Customer_Address_Extension");
                        if (addressInsertObj) {
                            /** @type {?} */
                            let clientID = v4();
                            addressInsertObj = ((/** @type {?} */ (addressInsertObj)));
                            addressInsertObj.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            addressInsertObj.setValue('ClientID', clientID);
                            addressInsertObj.setValue('AddressType', addressType);
                            addressInsertObj.setValue('Zipcode', address.code);
                            addressInsertObj.setValue('Address', address.address);
                            addressInsertObj.setValue('DataSource', 'APP');
                            addressInsertObj_Ext.setValue('CustomerClientID', customerObj.getValue('ClientID'));
                            addressInsertObj_Ext.setValue('ClientID', clientID);
                            //insert
                            dao.transactionInsert(addressInsertObj);
                            dao.transactionInsert(addressInsertObj_Ext);
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
            let customerObj = this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                // if(this.isRangeCrossYear) {
                //   customerObj.addRestriction(new ORCompoundRestriction([new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]), new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp])]));
                // }
                // else {
                //   customerObj.addRestriction(new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]));
                //   customerObj.addRestriction(new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp]));
                // }
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //customerObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(customerObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.warn("resp.Body in CustomerBirthdayListAPI: ", resp);
                    resp.Body = resp.Body.filter((/**
                     * @param {?} birthday
                     * @return {?}
                     */
                    birthday => this._judgeCustomrtIsInRange(birthday)));
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
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _judgeCustomrtIsInRange(item) {
        /** @type {?} */
        let birthDayTimeStamp = new Date('2000/' + item.BirthdayMonth + '/' + item.BirthdayDate).getTime();
        if (this.isRangeCrossYear) {
            return birthDayTimeStamp >= this._subNDayTimeStamp || birthDayTimeStamp <= this._addNDayTimeStamp;
        }
        else {
            return birthDayTimeStamp >= this._subNDayTimeStamp && birthDayTimeStamp <= this._addNDayTimeStamp;
        }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarEventAddAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCalendarEvent(value) {
        this._calendarEvent = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'addCalendarEvent';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
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
            let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.setValue('CustomerClientID', this._calendarEvent.customerClientID);
                calendarObj.setValue('Title', this._calendarEvent.title);
                calendarObj.setValue('Location', this._calendarEvent.location);
                calendarObj.setValue('CalendarType', this._calendarEvent.activity);
                if (this._calendarEvent.allDay == true) {
                    calendarObj.setValue('IsAllDay', 'Y');
                }
                else {
                    calendarObj.setValue('IsAllDay', 'N');
                }
                calendarObj.setValue('StartTime', this._calendarEvent.start.getTime());
                calendarObj.setValue('EndTime', this._calendarEvent.end.getTime());
                if (this._calendarEvent.isAlert == true) {
                    calendarObj.setValue('IsAlert', 'Y');
                }
                else {
                    calendarObj.setValue('IsAlert', 'N');
                }
                calendarObj.setValue('Alert1', this._calendarEvent.alert1);
                calendarObj.setValue('Alert2', this._calendarEvent.alert2);
                calendarObj.setValue('Alert3', null);
                calendarObj.setValue('Remark', this._calendarEvent.remark);
                dao.insertByTable(calendarObj).subscribe((/**
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
class CalendarEventDeleteAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
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
        return 'deleteCalendarEvent';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/deleteCalendarEvent.json';
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
            let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
            /** @type {?} */
            let calendarExtObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar_Extension");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                calendarExtObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                dao.deleteByTable(calendarObj).toPromise().then((/**
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
class CalendarEventDetailAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set ClientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCalendarEventDetail';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCalendarEventDetail.json';
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
            console.log("CalendarEventDetail ClientID:", this._clientID);
            /** @type {?} */
            let defaultObj = {
                ClientID: null,
                CalendarID: null,
                CustomerClientID: null,
                Title: '',
                Location: '',
                CalendarType: null,
                IsAllDay: 'N',
                StartTime: null,
                EndTime: null,
                IsAlert: 'Y',
                Alert1: '8',
                Alert2: '',
                Alert3: null,
                Remark: '',
                DataSource: 'APP'
            };
            if (!this._clientID) {
                //Add
                /** @type {?} */
                let resp = new SQLiteResponse({
                    "isSuccess": true
                }, [defaultObj]);
                observer.next(resp);
                observer.complete();
            }
            else {
                /** @type {?} */
                let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Calendar");
                /** @type {?} */
                let dao = this._DaoFactory.getDefaultDao();
                if (calendarObj != undefined && dao != undefined) {
                    dao = new ClientCustomDao(dao);
                    calendarObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                    dao.queryByTable(calendarObj).subscribe((/**
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
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarEventListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} startTime
     * @return {?}
     */
    set startTime(startTime) {
        this._startTime = startTime;
    }
    /**
     * @param {?} endTime
     * @return {?}
     */
    set endTime(endTime) {
        this._endTime = endTime;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCalendarEventList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCalendarEventList.json';
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
            let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Calendar");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.addRestriction(new GreaterOrEqualRestriction('EndTime', [this._startTime.getTime()]));
                calendarObj.addRestriction(new LessOrEqualRestriction('StartTime', [this._endTime.getTime()]));
                calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(calendarObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.log(resp);
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
class CalendarEventUpdateAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set ClientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCalendarEvent(value) {
        this._calendarEvent = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateCalendarEvent';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/updateCalendarEvent.json';
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
            let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                calendarObj.setValue('CalendarID', this._calendarEvent.calendarID);
                calendarObj.setValue('Title', this._calendarEvent.title);
                calendarObj.setValue('Location', this._calendarEvent.location);
                calendarObj.setValue('CustomerClientID', this._calendarEvent.customerClientID);
                calendarObj.setValue('CalendarType', this._calendarEvent.activity);
                if (this._calendarEvent.allDay == true) {
                    calendarObj.setValue('IsAllDay', 'Y');
                }
                else {
                    calendarObj.setValue('IsAllDay', 'N');
                }
                calendarObj.setValue('StartTime', this._calendarEvent.start.getTime());
                calendarObj.setValue('EndTime', this._calendarEvent.end.getTime());
                if (this._calendarEvent.isAlert == true) {
                    calendarObj.setValue('IsAlert', 'Y');
                }
                else {
                    calendarObj.setValue('IsAlert', 'N');
                }
                calendarObj.setValue('Alert1', this._calendarEvent.alert1);
                calendarObj.setValue('Alert2', this._calendarEvent.alert2);
                calendarObj.setValue('Alert3', this._calendarEvent.alert3);
                calendarObj.setValue('Remark', this._calendarEvent.remark);
                dao.updateByTable(calendarObj).subscribe((/**
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
class CalendarEventSaveAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'saveCalendarEvent';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log("CalendarEventSaveAPI executeSQL:", this.Data);
        /** @type {?} */
        let Alerts = [this.Data.Alert1, this.Data.Alert2];
        if (this.Data.IsAlert === 'Y') {
            Alerts.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => parseInt(a) - parseInt(b)));
            this.Data.Alert1 = Alerts[0];
            this.Data.Alert2 = Alerts[1];
        }
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
            /** @type {?} */
            let calendarExtObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar_Extension");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined) {
                dao = new ClientCustomDao(dao);
                if (this.Data.ClientID) {
                    calendarObj.setValue('ClientID', this.Data.ClientID);
                    calendarExtObj.setValue('ClientID', this.Data.ClientID);
                }
                calendarObj.setValue('CustomerClientID', this.Data.CustomerClientID);
                calendarObj.setValue('Title', this.Data.Title);
                calendarObj.setValue('Location', this.Data.Location);
                calendarObj.setValue('CalendarType', this.Data.CalendarType);
                calendarObj.setValue('IsAllDay', this.Data.IsAllDay);
                calendarObj.setValue('StartTime', this.Data.StartDateTime.getTime());
                calendarObj.setValue('EndTime', this.Data.EndDateTime.getTime());
                calendarObj.setValue('IsAlert', this.Data.IsAlert);
                if (this.Data.IsAlert === 'Y') {
                    calendarObj.setValue('Alert1', this.Data.Alert1);
                    calendarObj.setValue('Alert2', this.Data.Alert2);
                }
                else {
                    calendarObj.setValue('Alert1', null);
                    calendarObj.setValue('Alert2', null);
                }
                calendarObj.setValue('Alert3', null);
                calendarObj.setValue('Remark', this.Data.Remark);
                console.log("save calendarObj:", calendarObj);
                // fill extension
                calendarExtObj = TableUtils.fillTableColumn(calendarExtObj, this.Data);
                if (this.Data["EditType"] === "edit") {
                    calendarObj.addRestriction(new EqualRestriction("ClientID", [this.Data.ClientID]));
                    calendarExtObj.addRestriction(new EqualRestriction("ClientID", [this.Data.ClientID]));
                    dao.transactionUpdate(calendarObj);
                    dao.transactionUpdate(calendarExtObj);
                }
                else {
                    dao.transactionInsert(calendarObj);
                    dao.transactionInsert(calendarExtObj);
                }
                dao.runTransaction().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IntegrationCalendarCustomerModule, CustomersComponent, CustomerContactListComponent, CustomerDetailComponent, CustomerEditComponent, CustomerFilterComponent, DefaultCustomerCriteriaSearch, CustomerImportComponent, CustomerListComponent, CustomerConfirmAction, CustomerFilterCriteria, CustomerFilterPreset, CustomerImportGroup, customerEditMetaControllerToken, customerDetailMetaControllerToken, customerContactEditMetaControllerToken, customerContactDetailMetaControllerToken, customerFilterMetaControllerToken, customerCriteriaSearchToken, customerImportDisplayToken, addProgressPointToken, customerShowRuleToken, CustomerAddress, CustomerAlertItem, CustomerContactNote, CustomerEmail, CustomerItem, CustomerList, CustomerTel, MobileCustomerItem, MobileCustomerList, CustomerBirthday, CustomerService, CustomerStoreService, CUSTOMER_STATE, CustomerUtils, CustomerAddContactNoteAPI, CustomerAutoDeleteAPI, CustomerContactNoteAPI, CustomerDeleteAPI, CustomerDeleteContactNoteAPI, CustomerDetailAPI, CustomerEditContactNoteAPI, CustomerEditOvertimeAPI, CustomerGetPresetAPI, CustomerListAPI, CustomerSaveDetailAPI, CustomerSavePresetAPI, CustomerTelAPI, CustomerUpdateFollowAPI, ImportContactAPI, CustomerBirthdayListAPI, DashboardUpdateToReadAPI, CalendarService, CalendarEventDetail, CalendarComponent, CalendarDetailComponent, CalendarEditComponent, DefaultCalendarEditMetaController, CalendarFilterComponent, CalendarEventAddAPI, CalendarEventDeleteAPI, CalendarEventDetailAPI, CalendarEventListAPI, CalendarEventUpdateAPI, CalendarEventSaveAPI, calendarEditMetaControllerToken, calendarDetailMetaControllerToken, DefaultCalendarDetailMetaController as ɵu, CalendarDetailComponent as ɵt, DefaultCalendarEditMetaController as ɵr, CalendarEditComponent as ɵq, CalendarFilterComponent as ɵv, CalendarComponent as ɵa, CalendarService as ɵb, CustomerContactDetailComponent as ɵbh, CustomerContactEditComponent as ɵbi, CustomerContactListComponent as ɵbe, CustomerDetailComponent as ɵbd, DefaultCustomerEditMetaController as ɵbb, CustomerEditComponent as ɵba, DefaultCustomerCriteriaSearch as ɵm, CustomerFilterComponent as ɵbf, CustomerImportComponent as ɵbg, CustomerListComponent as ɵbc, DefaultCustomerImportDisplay as ɵy, CustomersComponent as ɵw, addProgressPointToken as ɵk, customerContactDetailMetaControllerToken as ɵg, customerContactEditMetaControllerToken as ɵf, customerCriteriaSearchToken as ɵi, customerDetailMetaControllerToken as ɵe, customerEditMetaControllerToken as ɵd, customerFilterMetaControllerToken as ɵh, customerImportDisplayToken as ɵj, customerShowRuleToken as ɵl, CustomerService as ɵc, CustomerStoreService as ɵx, CustomerUtils as ɵo };

//# sourceMappingURL=allianzSND-integration-calendar-customer.js.map