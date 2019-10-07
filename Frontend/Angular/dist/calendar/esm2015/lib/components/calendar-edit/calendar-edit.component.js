/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
import { SelectOption } from '@allianzSND/ui';
import { addHours, addMinutes, differenceInMinutes, getDate, getHours, getMinutes, getMonth, getYear, setDate } from 'date-fns';
import { ValidationResult } from '@allianzSND/core';
import { StringUtils } from '@allianzSND/core';
import { Language } from '@allianzSND/core';
export class CalendarEditComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.saveEvent = new EventEmitter();
        this.startDateChange = new EventEmitter();
        this._viewDate = new Date();
        this._isSaveClick = false;
        this._optionMap = new Map();
        this.language = new Language();
        this._translateMap = new Map();
        this.calendarEventList = [];
        this.activityOptionList = [];
        this.alertOptionList = [];
        this.validationResult = new ValidationResult();
        this.eventListBGColor = '#f9f9f9';
        this.isInit = true;
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
        this._isSaveClick = isSaveClick;
        if (this._isSaveClick == true) {
            this.saveEventClick();
        }
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
        if (calendarEventDetail) {
            this._calendarEventDetail = calendarEventDetail;
            console.warn("this.calendarEventDetail", this._calendarEventDetail);
            this.editEvent();
        }
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
        this.activityOptionList = [];
        for (let i = 0; i < this._optionMap.get('Calendar_Type').length; i++) {
            this.activityOptionList.push(new SelectOption(this._optionMap.get('Calendar_Type')[i].getCode(), this._optionMap.get('Calendar_Type')[i].displayText));
        }
    }
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
     * @return {?}
     */
    editEvent() {
        this.isInit = true;
        if (StringUtils.isEmpty(this._calendarEventDetail.alert1)) { // modify alert1 if null
            this._calendarEventDetail.alert1 = '';
        }
        if (StringUtils.isEmpty(this._calendarEventDetail.alert2)) { // modify alert2 if null
            this._calendarEventDetail.alert2 = '';
        }
        this.startDate = this._calendarEventDetail.start;
        this.startTime = this._calendarEventDetail.start;
        this.endDate = this._calendarEventDetail.end;
        this.endTime = this._calendarEventDetail.end;
        this.getAlertOptions(); // change alertOption
        this.showDate = (getMonth(this._viewDate) + 1).toString() + '/' + getDate(this._viewDate).toString() + '/' + getYear(this._viewDate).toString();
    }
    /**
     * @return {?}
     */
    saveEventClick() {
        console.warn('saveEvent');
        this.validationForm();
        if (this.validationResult.isTrue()) {
            this.saveEvent.emit(this._calendarEventDetail);
        }
        else {
            this.saveEvent.emit(null);
            // this.completeSave.emit(false);
        }
    }
    /**
     * @return {?}
     */
    validationForm() {
        // check form before submit
        /** @type {?} */
        let inputList = [{ 'maxLength': 60, 'field': 'title', 'isRequired': true },
            { 'maxLength': 100, 'field': 'location', 'isRequired': false },
            { 'maxLength': 500, 'field': 'remark', 'isRequired': false }];
        /** @type {?} */
        let selectList = ['activity', 'alert1', 'alert2'];
        inputList.forEach((/**
         * @param {?} inputFiled
         * @return {?}
         */
        (inputFiled) => {
            this.onValidationInput(inputFiled.maxLength, inputFiled.field, inputFiled.isRequired);
        }));
        selectList.forEach((/**
         * @param {?} selectField
         * @return {?}
         */
        (selectField) => {
            this.onValidationSelect(selectField);
        }));
        this.onValidationTimeFormat();
        this.onValidationTime();
        if (this.validationResult != null) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollToError();
            }), 200);
        }
    }
    /**
     * @param {?} maxLength
     * @param {?} field
     * @param {?=} isRequired
     * @return {?}
     */
    onValidationInput(maxLength, field, isRequired = false) {
        this.validationResult.deleteError(field);
        console.debug('isRequired', isRequired, 'length', this._calendarEventDetail[field].length, 'val', '[' + this._calendarEventDetail[field] + ']');
        if (isRequired) {
            if (this._calendarEventDetail[field] != undefined && StringUtils.isEmpty(StringUtils.trim(this._calendarEventDetail[field])))
                this.validationResult.setErrorMap(field, 'required');
        }
        if (StringUtils.isNotEmpty(this._calendarEventDetail[field])) {
            if (this._calendarEventDetail[field].length > maxLength && maxLength != 0)
                this.validationResult.setErrorMap(field, 'maxLength');
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onValidationSelect(field) {
        this.validationResult.deleteError(field);
        console.warn('field', field);
        if (field == 'activity') {
            if (this._calendarEventDetail.activity == null || this._calendarEventDetail.activity == '')
                this.validationResult.setErrorMap(field, 'required');
        }
        if (field == 'alert1' || field == 'alert2') {
            this.validationResult.deleteError('alert1');
            this.validationResult.deleteError('alert2');
            if (this._calendarEventDetail.isAlert && this._calendarEventDetail.alert1 == '' && this._calendarEventDetail.alert2 == '') // if didn't select any alert
                this.validationResult.setErrorMap('alert1', 'required');
            if (this._calendarEventDetail.isAlert && (this._calendarEventDetail.alert1 == this._calendarEventDetail.alert2) && this._calendarEventDetail.alert1 != '') // if select same alert
                this.validationResult.setErrorMap('alert2', 'sameAlert');
        }
    }
    /**
     * @return {?}
     */
    onValidationTimeFormat() {
        /** @type {?} */
        let timeList = ['startDate', 'startTime', 'endDate', 'endTime', 'time'];
        timeList.forEach((/**
         * @param {?} timeField
         * @return {?}
         */
        (timeField) => {
            this.validationResult.deleteError(timeField); //clear timeError
            if (timeField != 'time' && this[timeField] === null) {
                this.validationResult.setErrorMap(timeField, 'formatError'); // check formatError
            }
        }));
    }
    /**
     * @return {?}
     */
    onValidationTime() {
        // validation Date or Time
        // let isError: boolean = false;
        /** @type {?} */
        let timeList = ['startDate', 'startTime', 'endDate', 'endTime'];
        timeList.forEach((/**
         * @param {?} timeField
         * @return {?}
         */
        (timeField) => {
            this.validationResult.deleteError(timeField);
            // if(this.validationResult.isError(timeField))
            // isError = true;
        }));
        // if(!isError) {
        this.combineTime();
        if (differenceInMinutes(this._calendarEventDetail.end, this._calendarEventDetail.start) < 15 && differenceInMinutes(this._calendarEventDetail.end, this._calendarEventDetail.start) >= 0 && this._calendarEventDetail.allDay != true) {
            this.validationResult.setErrorMap('time', 'minTime');
        }
        else if (differenceInMinutes(this._calendarEventDetail.end, this._calendarEventDetail.start) < 0) {
            this.validationResult.setErrorMap('time', 'errorTime');
        }
        // }
    }
    /**
     * @return {?}
     */
    combineTime() {
        if (this._calendarEventDetail.allDay == true) {
            this._calendarEventDetail.start = new Date(getYear(this.startDate), getMonth(this.startDate), getDate(this.startDate), 0, 0);
            this._calendarEventDetail.end = new Date(getYear(this.endDate), getMonth(this.endDate), getDate(this.endDate), 0, 0);
        }
        else {
            this._calendarEventDetail.start = new Date(getYear(this.startDate), getMonth(this.startDate), getDate(this.startDate), getHours(this.startTime), getMinutes(this.startTime));
            this._calendarEventDetail.end = new Date(getYear(this.endDate), getMonth(this.endDate), getDate(this.endDate), getHours(this.endTime), getMinutes(this.endTime));
        }
    }
    /**
     * @param {?} changeDate
     * @param {?} field
     * @return {?}
     */
    onTimeChange(changeDate, field) {
        //convert to date param
        if (field == 'startDate')
            this.startDate = changeDate;
        else if (field == 'startTime')
            this.startTime = changeDate;
        else if (field == 'endDate')
            this.endDate = changeDate;
        else if (field == 'endTime')
            this.endTime = changeDate;
        this.onValidationTimeFormat();
        if (!this.isInit) { // to avoid change startDate in the first Time
            if (field == 'startDate') {
                this.onStartDateChange();
            }
            else if (field == 'startTime') {
                this.onStartTimeChange();
            }
        }
        this.onValidationTime();
        this.isInit = false;
    }
    /**
     * @return {?}
     */
    onStartDateChange() {
        this.startTime = setDate(this.startTime, getDate(this.startDate));
        this.endDate = addHours(this.startDate, 1);
        this.endTime = addHours(this.startTime, 1);
        this.startDateChange.emit(this.startDate);
    }
    /**
     * @return {?}
     */
    onStartTimeChange() {
        this.endDate = addHours(this.startTime, 1);
        this.endTime = addHours(this.startTime, 1);
    }
    /**
     * @return {?}
     */
    onIsAllDayChange() {
        this.onIsAlertChange();
        if (!this._calendarEventDetail.allDay) {
            /** @type {?} */
            let currentTime = new Date();
            currentTime = addMinutes(currentTime, (5 - getMinutes(currentTime) % 5));
            currentTime = addHours(currentTime, 1);
            // this._calendarEventDetail.start = new Date(getYear(this.startTime), getMonth(this.startTime), getDate(this.startTime),getHours(currentTime), getMinutes(currentTime));
            this.startDate = currentTime;
            this.startTime = currentTime;
            // this.endDate = addHours(this.startTime, 1);
            // this.endTime = addHours(this.startTime, 1);
        }
    }
    /**
     * @return {?}
     */
    onIsAlertChange() {
        this.getAlertOptions(); //reset optionList
        if (this._calendarEventDetail.isAlert == true && this._calendarEventDetail.allDay == true) { // reset Default selection
            this._calendarEventDetail.alert1 = '2';
            this._calendarEventDetail.alert2 = '';
        }
        else if (this._calendarEventDetail.isAlert == true && this._calendarEventDetail.allDay == false) {
            this._calendarEventDetail.alert1 = '8';
            this._calendarEventDetail.alert2 = '';
        }
    }
    /**
     * @return {?}
     */
    getAlertOptions() {
        this.alertOptionList = [];
        if (this._optionMap.get('Calendar_RemindTime')) {
            this._optionMap.get('Calendar_RemindTime').forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                if (this._calendarEventDetail.allDay == JSON.parse(option.getArguments()).isAllDay) {
                    this.alertOptionList.push(new SelectOption(option.getCode(), option.displayText));
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    scrollToError() {
        /** @type {?} */
        let errorBlock = document.body.getElementsByClassName('error-msg');
        if (errorBlock.item(0)) {
            errorBlock.item(0).parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onTitleChange(val) {
        this._calendarEventDetail.title = val;
        this.onValidationInput(60, 'title', true);
    }
}
CalendarEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar-edit',
                template: "<ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #mobileBlock>\n  <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n</ng-template>\n<!-- end: mobileBlock -->\n\n<ng-template #pcBlock>\n  <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"eventListContent\"></ng-container>\n</ng-template>\n<!-- end: pcBlock -->\n\n<ng-template #formContent>\n  <ng-container *ngIf=\"_calendarEventDetail\">\n    <app-ui-form-layout-col [colPC]=\"8\" [colNB]=\"8\" [colPad]=\"12\" [colMobile]=\"12\">\n      <app-ui-form-layout-advanced>\n        <!-- title -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.title\" (nxValueChange)=\"onValidationInput(60,'title',true)\" [inputTitle]=\"language.title | translate\" [name]=\"'input1'\" [isDisable]=\"false\" [isError]=\"validationResult.isError('title')\" [maxLength]=\"60\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('title') == 'required'\">{{language.wrongTitleRequired | translate}}</app-ui-form-error-msg>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('title') == 'maxLength'\">{{language.wrongTitleMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row1 -->\n\n        <!-- location -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.location\" (nxValueChange)=\"onValidationInput(100,'location',false)\" [inputTitle]=\"language.location | translate\" [name]=\"'input1'\" [isDisable]=\"false\" [isError]=\"validationResult.isError('location')\" [maxLength]=\"100\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('location') == 'maxLength'\">{{language.wrongLocationMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row2 -->\n\n        <!-- Activity -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.activity\"  (nxValueChange)=\"onValidationSelect('activity')\" [selectTitle]=\"language.activity | translate\" [selectOption]='activityOptionList'[isError]=\"validationResult.isError('activity')\" ></app-ui-form-select>\n            <app-ui-form-error-msg *ngIf=\"validationResult.isError('activity')\">{{language.wrongActivityRequired | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row3 -->\n\n        <!-- AllDay -->\n        <app-ui-form-title-sm>{{language.date | translate}}</app-ui-form-title-sm>\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-switcher [(nxValue)]=\"_calendarEventDetail.allDay\" [labelTxt]=\"language.allDay | translate\" (nxValueChange)=\"onIsAllDayChange()\"></app-ui-form-switcher>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row4 -->\n\n        <!-- Datetime picker -->\n        <ng-container *ngIf= '_calendarEventDetail.allDay == true'>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\" >\n              <app-ui-form-date [title]=\"language.from | translate\" [nxValue]=\"startDate\"  (nxValueChange)=\"onTimeChange($event,'startDate')\" [isError]=\"validationResult.isError('startDate')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'errorTime'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date class=\"calendar-edit-allDay-date\" [title]=\"language.to | translate\" [nxValue]=\"endDate\" (nxValueChange)=\"onTimeChange($event,'endDate')\" [isError]=\"validationResult.isError('endDate') || validationResult.isError('time')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </ng-container>\n\n        <ng-container *ngIf= '_calendarEventDetail.allDay == false'>\n          <!-- Start Date -->\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date [title]=\"language.from | translate\" [nxValue]=\"startDate\" (nxValueChange)=\"onTimeChange($event,'startDate')\" [isError]=\"validationResult.isError('startDate')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'errorTime'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-timepicker [nxValue]=\"startTime\" (nxValueChange)=\"onTimeChange($event,'startTime')\"\n                                      [isError]=\"validationResult.isError('startTime')\"></app-ui-form-timepicker>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startTime') == 'formatError'\">{{language.wrongTime | translate}}</app-ui-form-error-msg>\n\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <!-- end: Start Date -->\n\n          <!-- End Date -->\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date [title]=\"language.to | translate\" [nxValue]=\"endDate\" (nxValueChange)=\"onTimeChange($event,'endDate')\" [isError]=\"validationResult.isError('endDate') || validationResult.isError('time')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endDate') == 'formatError'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-timepicker [nxValue]=\"endTime\" (nxValueChange)=\"onTimeChange($event,'endTime')\"\n                                      [isError]=\"validationResult.isError('time') || validationResult.isError('endTime')\"></app-ui-form-timepicker>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endTime') == 'formatError'\">{{language.wrongTime | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'minTime'\">{{language.wrongEndTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <!-- end: End Date -->\n        </ng-container>\n        <!-- end of row5 -->\n\n        <!-- Alert -->\n        <app-ui-form-title-sm>{{language.alert | translate}}</app-ui-form-title-sm>\n        <app-ui-form-layout-row calendarEditAlertRow=\"\">\n          <app-ui-form-layout-col [colPC]=\"'auto'\" [colNB]=\"'auto'\" [colPad]=\"'auto'\" [colMobile]=\"'auto'\">\n            <app-ui-form-switcher class=\"calendar-edit-alert-switcher\"\n              [(nxValue)]=\"_calendarEventDetail.isAlert\" (nxValueChange)=\"onIsAlertChange()\"></app-ui-form-switcher>\n          </app-ui-form-layout-col>\n          <ng-container *ngIf= '_calendarEventDetail.isAlert == true'>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"9\">\n              <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.alert1\"\n                                  (nxValueChange)=\"onValidationSelect('alert1')\"\n                                  [isShowTitle]=\"false\"\n                                  [selectTitle]=\"'Alert1'\"\n                                  [selectOption]='alertOptionList'\n                                  [isError]=\"validationResult.isError('alert1')\"\n                                  [placeholder]=\"language.alertPlaceholder | translate\" ></app-ui-form-select>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('alert1') == 'required'\">{{language.wrongAlertRequired | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </ng-container>\n        </app-ui-form-layout-row>\n        <!-- end of row6 -->\n\n        <!-- Second Alert -->\n        <ng-container *ngIf= '_calendarEventDetail.isAlert == true'>\n          <app-ui-form-layout-row calendarEditAlertRow=\"\">\n            <app-ui-form-layout-col [colPC]=\"'auto'\" [colNB]=\"'auto'\" [colPad]=\"'auto'\" [colMobile]=\"'auto'\">\n              <div class=\"calendar-edit-alert-switcher\"></div>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"9\">\n              <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.alert2\"\n                                  (nxValueChange)=\"onValidationSelect('alert2')\"\n                                  [isShowTitle]=\"false\"\n                                  [selectTitle]=\"'Alert2'\"\n                                  [selectOption]='alertOptionList'\n                                  [isError]=\"validationResult.isError('alert2')\"\n                                  [placeholder]=\"language.alertPlaceholder | translate\"></app-ui-form-select>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('alert2') == 'sameAlert'\">{{language.wrongAlert | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </ng-container>\n        <!-- end of row7 -->\n\n        <!-- Remark -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.remark\" (nxValueChange)=\"onValidationInput(500,'remark')\" [inputTitle]=\"language.remark | translate\" [name]=\"'input1'\"  [isDisable]=\"false\" [isError]=\"validationResult.isError('remark')\" [maxLength]=\"500\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.isError('remark')\">{{language.wrongRemarkMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row8 -->\n      </app-ui-form-layout-advanced>\n    </app-ui-form-layout-col>\n  </ng-container>\n</ng-template>\n<!-- end: formContent -->\n\n<ng-template #eventListContent>\n  <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"0\" [colMobile]=\"0\" [ngStyle]=\"{ 'background-color': eventListBGColor }\">\n    <ng-container *ngIf=\"calendarEventList\" >\n\n      <app-ui-calendar-event-list\n        [ngClass]=\"calendarEventList.length == 0? 'calendar-event-list-no-data':''\"\n        [translateMap]=\"_translateMap\"\n        [title]=\"calendarEventList.length>0 ? showDate:''\"\n        [colorCode]=\"eventListBGColor\"\n        [eventList]=\"calendarEventList\">\n        <div scheduleNoData class=\"calendar-edit-schedule\">\n          <p>{{this.translateMap.get('No_Schedule') ? this.translateMap.get('No_Schedule') : 'You have no schedule for today'}}</p>\n        </div>\n      </app-ui-calendar-event-list>\n    </ng-container>\n  </app-ui-form-layout-col>\n</ng-template>\n<!-- end: evenListContent -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:flex;height:100%}:host>app-ui-form-layout-col{padding-left:0!important;margin-bottom:0!important}:host>app-ui-form-layout-col:first-child{min-width:calc(100% - 200px);padding-left:20px!important;padding-right:20px}:host>app-ui-form-layout-col:last-child{max-width:200px}:host .calendar-edit-alert-switcher{display:inline-block;width:56px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container{padding-top:30px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container app-ui-text-type-item:last-child{padding-bottom:20px;border-bottom:1px solid #ececec}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content{width:100%;min-width:1px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content>p{display:block;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host ::ng-deep .calendar-event-list-no-data{display:inline-block;width:calc(100% + 6px);height:100%}:host ::ng-deep .calendar-event-list-no-data ::ng-deep app-ui-text-type .ui-text-type-container{width:100%;height:100%;padding:0}:host ::ng-deep .calendar-edit-schedule{width:100%;height:100%;margin:0;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTk4IiBoZWlnaHQ9IjY3NCIgdmlld0JveD0iMCAwIDE5OCA2NzQiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTk4djY3NUgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xKSI+CiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxnIGZpbGw9IiNFQ0VDRUMiIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQ4LjI0NSAxMC44NWMzLjAwNCAwIDUuMjg5IDMuNTc4IDguMDA0IDIuOTQzIDUuOTMyLTEuMzg5IDguMzctOS4wMjkgMTQuODc5LTkuMDI5IDUuMDI1IDAgNy45MzQgNi4yMzYgMTIuNTcgNS44MTRDMTkxLjA0MiA5LjkwOCAxOTQuMzUyIDAgMjAyLjI2IDBjNy4zMSAwIDEwLjkwMyA4LjQ4MiAxNy42NTcgOS4yMyAzLjk3OS40NDIgNi44ODktNC4zMzYgMTEuMjEtNC4zMzYgOC4xNTUgMCA4Ljg3MiAzLjI0MiAxNi4zOCA1LjU4MiAyLjE1NC42NzIgMy44MDMgNC44NzIgNi4yMzggNC44NzIgMi44NjMgMCA1LjQwMy44OTggNy4wMzMgMi44OThIMTM2LjAwM2MyLjA5Mi00IDYuNzgtNy4zOTYgMTIuMjQyLTcuMzk2Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNFQ0VDRUMiIGQ9Ik0yMzEuODYyIDE3NC4zNTJjLTEuNTE3IDAtMi42NyAxLjc2NS00LjA0MSAxLjQ1Mi0yLjk5NS0uNjg2LTQuMjI2LTQuNDU0LTcuNTEzLTQuNDU0LTIuNTM2IDAtNC4wMDUgMy4wNzYtNi4zNDYgMi44NjgtMy43MDktLjMzLTUuMzc5LTUuMjE4LTkuMzcyLTUuMjE4LTMuNjkyIDAtNS41MDUgNC4xODQtOC45MTUgNC41NTMtMi4wMS4yMTgtMy40NzktMi4xMzktNS42NjEtMi4xMzktNC4xMTYgMC00LjQ3OCAxLjYtOC4yNyAyLjc1My0xLjA4OC4zMzItMS45MiAyLjQwNC0zLjE1IDIuNDA0LTEuNDQ0IDAtMi43MjcuNDQyLTMuNTUgMS40MjloNjNjLTEuMDU3LTEuOTczLTMuNDI1LTMuNjQ4LTYuMTgyLTMuNjQ4TTU5Ljc4NCAzMTQuNzA0Yy0zLjAxIDAtNS4yOTggMy41My04LjAxOCAyLjkwMy01Ljk0Mi0xLjM3LTguMzg0LTguOTA3LTE0LjkwNi04LjkwNy01LjAzMiAwLTcuOTQ3IDYuMTUyLTEyLjU5MyA1LjczNUMxNi45MSAzMTMuNzc1IDEzLjU5NiAzMDQgNS42NzQgMzA0Yy03LjMyNiAwLTEwLjkyMyA4LjM2OC0xNy42OSA5LjEwNi0zLjk4Ni40MzYtNi45MDItNC4yNzgtMTEuMjMyLTQuMjc4LTguMTY3IDAtOC44ODUgMy4xOTgtMTYuNDA3IDUuNTA3LTIuMTYuNjYzLTMuODEgNC44MDYtNi4yNTEgNC44MDYtMi44NjYgMC01LjQxMi44ODYtNy4wNDYgMi44NTloMTI1Yy0yLjA5NS0zLjk0Ni02Ljc5My03LjI5Ni0xMi4yNjQtNy4yOTZNMTYuMDU5IDY2My4wMTNjNC4yMDYtNi43NTMgNy41ODItMTQuODc0IDE1LjMyMy0xNy44MzYgNy4yNDQtMi43NyAxNS42NTYgNy44NTMgMjMuMjY4IDYuMTUgMTUuNTcyLTMuNDg4IDE3LjM3Mi01NS4wNjQgMzcuMDc3LTU1LjA2NCAxOC43MDkgMCA1MS4yNzcgNDEuMTkgNzcuMjIyIDI2LjEgMjQuOTAyLTE0LjQ4MyAzOS41ODYtNTguOTcgNjAuMTItNjUuMjUxIDM5LjYtMTIuMTEzIDQ3Ljg3IDc4LjcyNiA3Ni4zMjcgNzguNzI2IDguMDUgMCAxMy45MDQtMjEuNzMgMjAuMDIxLTI0LjQzNiAxOS42OTItOC43MTMgMTAuNDIgNDcuMjYgMzguNDIgNjMuNTk4SC0zLjAxNGM2LjAyLS40NDIgMTQuODY3LTUuMjM0IDE5LjA3NC0xMS45ODd6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPGcgbWFzaz0idXJsKCNiKSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MEIxQjQiIGQ9Ik0xMDQuNDY4IDU2NWwtNyAyLjg2MWMuODI1IDcuNTg2LTE0LjA0NyAyMy4wNzQtMTQuMDQ3IDIzLjA3NGwzLjkzNy4yOXMyNS40MzQtMTYuMDk3IDE3LjExLTI2LjIyNSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQTdBN0E3IiBkPSJNMTEwLjU4NiA1MTguNDdjMCAzLjU3NC0yLjQ4MSA2LjQ3MS01LjU0MSA2LjQ3MS0zLjA2IDAtNS41NDItMi44OTctNS41NDItNi40NzEgMC0zLjU3MyAyLjQ4MS02LjQ3IDUuNTQyLTYuNDcgMy4wNiAwIDUuNTQgMi44OTcgNS41NCA2LjQ3Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGMkEwOEEiIGQ9Ik0xMDQuODY4IDUyMS4yNjVjMi4yMjIuNzU2IDMuNSAyLjg5NiAyLjg1MSA0Ljc4LS42NDcgMS44ODUtMi45NzQgMi44LTUuMTk2IDIuMDQzLTIuMjIzLS43NTctMy40OTktMi44OTYtMi44NTMtNC43OC42NDktMS44ODUgMi45NzYtMi43OTkgNS4xOTgtMi4wNDMiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzc5QkVDMSIgZD0iTTEyMS44IDYwMS41MDRsLTMzLjM1My01LjEyNmM0LjUwOC05Ljk5NiAxMy4wNjYtOS45OTYgOC41NjktMzAuNDc0LTMuNDE3LTE1LjQ5MyAxMC41MjItMTkuOTggMTYuMjUyLTE0LjkxOGExNS4wNDIgMTUuMDQyIDAgMCAxIDIuMDMgMi4yMTFsLjA2NS4wNzdjMy42NjEgNC44MiA2LjkyNSAxMy43MDMgNi41IDI1Ljg2LS4xMjggMy43NDYtLjA2MyA2LjQ0Mi4wNjUgOC43MDUuMjMxIDQuNjc4LjY1NSA3LjQ1My0uMTI4IDEzLjY2NSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQkFFMEU3IiBkPSJNMTIwLjYgNjA2Ljg5M2MuNTEzLTEuMzAxIDEuNDAyLTMuODk4IDEuMTM3LTguMzIyTDg4LjExNCA1OTZhMjcuNDE1IDI3LjQxNSAwIDAgMC0uNTc3IDIuMDA0Yy00LjU0My4wNjgtOC44NDguMzk3LTExLjg2MyAxLjMxNS0xNi42MiA1LjA1NC0xOS4zOSAzMy4zNDMtMTkuMzkgMzMuMzQzbDMuMDUgMS4xMzlzNC43NC0xMy45NDggMTIuNTQ2LTIwLjExN2MtLjA2IDExLjA5IDEzLjUwMiAyOC44MzkgMTMuNTAyIDI4LjgzOWwzLjY3LS44ODRzLTEyLjgxNS0yMi44OTItMi4xMDMtMjUuNjAxYzcuNTgzLTEuOTE4IDExLjAyNC0yLjE0IDE3LjczNC0yLjExNiAzLjA5NC4zMyA2LjI3MS40MjUgOS41Mi4wNTQgMy41NDYtLjY1MyA1LjQ0LTQuNjQ1IDYuMzk3LTcuMDgzIi8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MEIxQjQiIGQ9Ik0xMjEuNDYyIDU4Ny44MmMtNi4wNTEgNS44NjYtMTUuNjIyIDkuODkzLTE1LjYyMiA5Ljg5M2wtNS4zMzItMi42MnMyMS4yMzctNS43NzggMTcuNjUyLTE0LjU0OGMtMi45OC03LjMxLTcuNDEzLTE4LjQ3LTguNDQtMjEuNTI2LS44MjItMi4zOS0uNjA1LTExLjkzOSA0Ljc2Ni02LjIyNS4xMTYuMTE2LjIzMS4yNTYuMzQ3LjM4M2wuMDY0LjA3N2MzLjY2MiA0LjgyIDYuOTI1IDEzLjcwMyA2LjUwMSAyNS44Ni0uMTI5IDMuNzQ2LS4wNjMgNi40NDIuMDY0IDguNzA1Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3OUJFQzEiIGQ9Ik0xMTQuNDkgNTUyLjY5YzMuODcgMy42MTQgOC4xMjYgMTYuMTMgMTEuMDQ5IDIyLjQ0MSA1LjUwNCAxMS44ODItMjEuMjk0IDIxLjEyMy0yMS4yOTQgMjEuMTIzbC0zLjczNy0xLjI2NXMyMS45Mi0xMC40NCAxNy41MzQtMTguODM3Yy0zLjUzOC02Ljc3Ni01LjkyLTEwLjM2LTEwLjA2Ny0xOC40MjktMi41Ny00Ljk5Ny0uMzY5LTExLjQ1NyA2LjUxNC01LjAzMyIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTlENkI4IiBkPSJNMTAyLjEzIDU5NC4zOTNjLTIuMzMtMS4wMS01LjEyMi4wODUtNS41NjkgMS41MTgtLjQ0NiAxLjQzMyAxLjEwOCAyLjE0OCA1LjE2IDIuNTI4IDQuMDUuMzc5IDQuNTYtMi4yMiA0LjU2LTIuMjJsLTQuMTUyLTEuODI2TTg1LjY4MSA2MzkuNDcybC01LjA4OCA1Ljk2N2MtLjU1LjY0OC4yMSAxLjUzNyAxLjAzOCAxLjIxbDcuNjEtMy4wMDJjLjY4Ni0uMjcuOTI5LTEuMDQyLjUwNi0xLjZsLTEuOTA4LTIuNTIxYy0uNTEzLS42NzgtMS42MDMtLjcwNS0yLjE1OC0uMDU0TTU4LjU1OCA2MzEuNTU0bC05LjI4LTQuNWMtLjc5OC0uMy0xLjM4My43MTQtLjc5NSAxLjM4bDcuMzI1IDcuODYyYy40ODYuNTUxIDEuMjk4LjUyIDEuNjg1LS4wNjVsMS43NDEtMi42MzdjLjQ2OC0uNzA5LjEyNy0xLjczOS0uNjc2LTIuMDRNMTA2LjUxIDUzNS43NDNjLjk3IDUuMDggMS40NTIgMTAuNjM3IDMuNTE1IDE0LjU4OS41MjQgMS4wMDEuMzk2IDIuMTEyLS40MiAyLjY2Ni0xLjI3Ny44NjQtMy40OCAxLjYxMi02LjU3Mi4wMTctMS4wNzQtLjU1NS0xLjY5LTEuNzMzLTEuNDgtMi43NDkuNDY1LTIuMjM5IDEuMTItNi40NTQuNDA5LTkuOTE2LTEuMDI0LTQuOTcyIDMuNzctOC42ODUgNC41NDgtNC42MDciLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U5RDZCOCIgZD0iTTk0LjQ0NCA1NDEuODE0YzQuODAxIDkuMTggOS42NTQgMTAuMDc0IDEyLjg4LTMuOTc2IDMuMjI2LTE0LjA1MS0yMS45MzMtMTMuMzMzLTEyLjg4IDMuOTc2Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNBN0E3QTciIGQ9Ik0xMDIuOTE4IDUyM2MtMi4yNSAwLTQuMjYzIDEuMTg2LTUuNjEgMy4wNS0xLjUuNTQ1LTMuMDg0IDEuMzgtNC42ODMgMi41MzctMy42MjcgMi42MjQtOS4yMjUgMTIuMTM2LTguMDM2IDEyLjQyNiA0LjEyOCAxLjAwOCAxMC4yOTQuNDA4IDE1LjA3MS0xLjc3Ni45ODMuNTcgMi4wODYuODk5IDMuMjU4Ljg5OSA0LjA1MyAwIDcuMzM4LTMuODM2IDcuMzM4LTguNTY4IDAtNC43MzItMy4yODUtOC41NjgtNy4zMzgtOC41NjgiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U5RDZCOCIgZD0iTTEwNC43NDUgNTM4LjQxOWMtLjY5OSAyLjUxNC4yMjggMy4zNTcgMy42OTQuOTQ4IDMuNDY2LTIuNDA4LTIuMzc2LTUuNjktMy42OTQtLjk0OCIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDNDNkNDIiBkPSJNMTA4LjkwOCA2MDAuMTU0SDgzLjQ3YTEuMDU0IDEuMDU0IDAgMCAxLTEuMDU0LTEuMDQ4di0uMDU4YzAtLjU3Ni40NzUtMS4wNDggMS4wNTQtMS4wNDhoMjUuNDM4Yy41NzkgMCAxLjA1My40NzIgMS4wNTMgMS4wNDh2LjA1OGMwIC41NzctLjQ3NCAxLjA0OC0xLjA1MyAxLjA0OCIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTRFNERGIiBkPSJNOTcuODM4IDYwMC41NzZoLTIzLjExYy0xLjIxOSAwLTIuNDI4LS45OTItMi42ODYtMi4yMDZsLTMuNjQ4LTE3LjE2M2MtLjI1OC0xLjIxNC41MjktMi4yMDcgMS43NS0yLjIwN2gyMy4xMDljMS4yMTkgMCAyLjQyOC45OTMgMi42ODYgMi4yMDdsMy42NDkgMTcuMTYzYy4yNTggMS4yMTQtLjUzIDIuMjA2LTEuNzUgMi4yMDYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=);background-repeat:no-repeat;background-size:cover;background-position:center bottom}:host ::ng-deep .calendar-edit-schedule p{padding:0 25px;font-size:.875rem;font-weight:300;line-height:2;letter-spacing:.2px;text-align:center;color:#414141}:host ::ng-deep .calendar-edit-schedule p:first-child{padding-top:200px}@media screen and (max-width:1023px){:host>app-ui-form-layout-col:first-child{padding-left:0!important}:host>app-ui-form-layout-col:first-child,:host>app-ui-form-layout-col:last-child{max-width:100%}:host .calendar-edit-allDay-date ::ng-deep .ui-datepicker{margin-top:15px}:host [calendarEditAlertRow] app-ui-form-layout-col:last-child{flex:1!important;max-width:100%!important}}"]
            }] }
];
CalendarEditComponent.ctorParameters = () => [
    { type: ElementRef }
];
CalendarEditComponent.propDecorators = {
    isSaveClick: [{ type: Input }],
    calendarEventDetail: [{ type: Input }],
    optionMap: [{ type: Input }],
    translateMap: [{ type: Input }],
    viewDate: [{ type: Input }],
    todayCalendarEvent: [{ type: Input }],
    saveEvent: [{ type: Output }],
    startDateChange: [{ type: Output }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    CalendarEditComponent.prototype.saveEvent;
    /** @type {?} */
    CalendarEditComponent.prototype.startDateChange;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype._viewDate;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype._isSaveClick;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype._optionMap;
    /** @type {?} */
    CalendarEditComponent.prototype.showDate;
    /** @type {?} */
    CalendarEditComponent.prototype.language;
    /** @type {?} */
    CalendarEditComponent.prototype._translateMap;
    /** @type {?} */
    CalendarEditComponent.prototype._calendarEventDetail;
    /** @type {?} */
    CalendarEditComponent.prototype.windowWidth;
    /** @type {?} */
    CalendarEditComponent.prototype.calendarEventList;
    /** @type {?} */
    CalendarEditComponent.prototype.activityOptionList;
    /** @type {?} */
    CalendarEditComponent.prototype.alertOptionList;
    /** @type {?} */
    CalendarEditComponent.prototype.startDate;
    /** @type {?} */
    CalendarEditComponent.prototype.startTime;
    /** @type {?} */
    CalendarEditComponent.prototype.endDate;
    /** @type {?} */
    CalendarEditComponent.prototype.endTime;
    /** @type {?} */
    CalendarEditComponent.prototype.validationResult;
    /** @type {?} */
    CalendarEditComponent.prototype.eventListBGColor;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype.isInit;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhbGVuZGFyLWVkaXQvY2FsZW5kYXItZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDMUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFFTCxRQUFRLEVBQ1IsVUFBVSxFQUVWLG1CQUFtQixFQUNuQixPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUFhLE9BQU8sRUFDNUIsTUFBTSxVQUFVLENBQUM7QUFFbEIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQVExQyxNQUFNOzs7O0lBMEVKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF4QmhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2QyxjQUFTLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQXFDLElBQUksR0FBRyxFQUE4QixDQUFDO1FBRXRGLGFBQVEsR0FBYyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLGtCQUFhLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBSy9ELHNCQUFpQixH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T25Jbml0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlbGVjdE9wdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NhbGVuZGFyL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuaW1wb3J0IHtcbiAgYWRkRGF5cyxcbiAgYWRkSG91cnMsXG4gIGFkZE1pbnV0ZXMsXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyxcbiAgZGlmZmVyZW5jZUluTWludXRlcyxcbiAgZ2V0RGF0ZSxcbiAgZ2V0SG91cnMsXG4gIGdldE1pbnV0ZXMsXG4gIGdldE1vbnRoLFxuICBnZXRZZWFyLCBpc1NhbWVEYXksIHNldERhdGUsIHN1Yk1pbnV0ZXNcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHtQcm9maWxlQ29kZX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRpb25SZXN1bHR9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtTdHJpbmdVdGlsc30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0xhbmd1YWdlfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtY2FsZW5kYXItZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItZWRpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBpc1NhdmVDbGljaygpIHtyZXR1cm4gdGhpcy5faXNTYXZlQ2xpY2s7fVxuICBzZXQgaXNTYXZlQ2xpY2soaXNTYXZlQ2xpY2sgOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNTYXZlQ2xpY2sgPSBpc1NhdmVDbGljaztcbiAgICBpZih0aGlzLl9pc1NhdmVDbGljayA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnNhdmVFdmVudENsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGNhbGVuZGFyRXZlbnREZXRhaWwoKSB7cmV0dXJuIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWx9XG4gIHNldCBjYWxlbmRhckV2ZW50RGV0YWlsKGNhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICBpZihjYWxlbmRhckV2ZW50RGV0YWlsKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsID0gY2FsZW5kYXJFdmVudERldGFpbDtcbiAgICAgIGNvbnNvbGUud2FybihcInRoaXMuY2FsZW5kYXJFdmVudERldGFpbFwiLCB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsKTtcbiAgICAgIHRoaXMuZWRpdEV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG9wdGlvbk1hcCgpIHtyZXR1cm4gdGhpcy5fb3B0aW9uTWFwfVxuICBzZXQgb3B0aW9uTWFwKG9wdGlvbk1hcCA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4pIHtcbiAgICB0aGlzLl9vcHRpb25NYXAgPSBvcHRpb25NYXA7XG4gICAgdGhpcy5hY3Rpdml0eU9wdGlvbkxpc3QgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwIDtpIDwgdGhpcy5fb3B0aW9uTWFwLmdldCgnQ2FsZW5kYXJfVHlwZScpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFjdGl2aXR5T3B0aW9uTGlzdC5wdXNoKG5ldyBTZWxlY3RPcHRpb24odGhpcy5fb3B0aW9uTWFwLmdldCgnQ2FsZW5kYXJfVHlwZScpW2ldLmdldENvZGUoKSx0aGlzLl9vcHRpb25NYXAuZ2V0KCdDYWxlbmRhcl9UeXBlJylbaV0uZGlzcGxheVRleHQpKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdHJhbnNsYXRlTWFwKCkge3JldHVybiB0aGlzLl90cmFuc2xhdGVNYXB9XG4gIHNldCB0cmFuc2xhdGVNYXAodHJhbnNsYXRlTWFwOiBNYXA8c3RyaW5nLHN0cmluZz4pIHtcbiAgICB0aGlzLl90cmFuc2xhdGVNYXAgPSB0cmFuc2xhdGVNYXA7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCB2aWV3RGF0ZSgpIHtyZXR1cm4gdGhpcy5fdmlld0RhdGV9XG4gIHNldCB2aWV3RGF0ZSh2aWV3RGF0ZTogRGF0ZSkge1xuICAgIGNvbnNvbGUud2Fybigndmlld0RhdGVDaGFuZ2UnKTtcbiAgICB0aGlzLl92aWV3RGF0ZSA9IHZpZXdEYXRlO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHRvZGF5Q2FsZW5kYXJFdmVudCgpIHtyZXR1cm4gdGhpcy5jYWxlbmRhckV2ZW50TGlzdH1cbiAgc2V0IHRvZGF5Q2FsZW5kYXJFdmVudChjYWxlbmRhckV2ZW50TGlzdDogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4pIHtcbiAgICB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0ID0gY2FsZW5kYXJFdmVudExpc3Q7XG4gIH1cblxuICBAT3V0cHV0KCkgc2F2ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3RhcnREYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX3ZpZXdEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBfaXNTYXZlQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfb3B0aW9uTWFwIDogTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+KCk7XG4gIHB1YmxpYyBzaG93RGF0ZTogc3RyaW5nO1xuICBwdWJsaWMgbGFuZ3VhZ2UgOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgX3RyYW5zbGF0ZU1hcCA6IE1hcDxzdHJpbmcsc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cblxuICBwdWJsaWMgX2NhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWw7IC8vRGV0YWlsXG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107XG4gIHB1YmxpYyBhY3Rpdml0eU9wdGlvbkxpc3Q6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBbXTtcbiAgcHVibGljIGFsZXJ0T3B0aW9uTGlzdDogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IFtdO1xuICBwdWJsaWMgc3RhcnREYXRlOiBEYXRlO1xuICBwdWJsaWMgc3RhcnRUaW1lOiBEYXRlO1xuICBwdWJsaWMgZW5kRGF0ZTogRGF0ZTtcbiAgcHVibGljIGVuZFRpbWU6IERhdGU7XG4gIHB1YmxpYyB2YWxpZGF0aW9uUmVzdWx0OiAgVmFsaWRhdGlvblJlc3VsdCA9IG5ldyBWYWxpZGF0aW9uUmVzdWx0KCk7XG4gIHB1YmxpYyBldmVudExpc3RCR0NvbG9yID0gJyNmOWY5ZjknO1xuICBwcml2YXRlIGlzSW5pdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICAgIC8vIHdsZS53YXJuKCdXaWR0aDogJywgdGhpcy53aW5kb3dXaWR0aCk7XG4gIH1cblxuICBlZGl0RXZlbnQoKSB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDEpKSB7IC8vIG1vZGlmeSBhbGVydDEgaWYgbnVsbFxuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDEgPSAnJztcbiAgICB9XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MikpIHsgLy8gbW9kaWZ5IGFsZXJ0MiBpZiBudWxsXG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MiA9ICcnO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuc3RhcnQ7XG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0O1xuICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuZW5kO1xuICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuZW5kO1xuICAgIHRoaXMuZ2V0QWxlcnRPcHRpb25zKCk7IC8vIGNoYW5nZSBhbGVydE9wdGlvblxuXG4gICAgdGhpcy5zaG93RGF0ZSA9IChnZXRNb250aCh0aGlzLl92aWV3RGF0ZSkrMSkudG9TdHJpbmcoKSsnLycrZ2V0RGF0ZSh0aGlzLl92aWV3RGF0ZSkudG9TdHJpbmcoKSsnLycrZ2V0WWVhcih0aGlzLl92aWV3RGF0ZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHNhdmVFdmVudENsaWNrKCkge1xuICAgIGNvbnNvbGUud2Fybignc2F2ZUV2ZW50Jyk7XG4gICAgdGhpcy52YWxpZGF0aW9uRm9ybSgpO1xuICAgIGlmKHRoaXMudmFsaWRhdGlvblJlc3VsdC5pc1RydWUoKSkge1xuICAgICAgdGhpcy5zYXZlRXZlbnQuZW1pdCh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zYXZlRXZlbnQuZW1pdChudWxsKTtcbiAgICAgIC8vIHRoaXMuY29tcGxldGVTYXZlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRpb25Gb3JtKCkgeyAvLyBjaGVjayBmb3JtIGJlZm9yZSBzdWJtaXRcbiAgICBsZXQgaW5wdXRMaXN0ID0gW3snbWF4TGVuZ3RoJzo2MCwnZmllbGQnOiAndGl0bGUnLCdpc1JlcXVpcmVkJzogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgICAgICAgeydtYXhMZW5ndGgnOjEwMCwnZmllbGQnOiAnbG9jYXRpb24nLCdpc1JlcXVpcmVkJzogZmFsc2V9LFxuICAgICAgICAgICAgICAgICAgICAgIHsnbWF4TGVuZ3RoJzo1MDAsJ2ZpZWxkJzogJ3JlbWFyaycsICdpc1JlcXVpcmVkJzogZmFsc2V9XTtcbiAgICBsZXQgc2VsZWN0TGlzdCA9IFsnYWN0aXZpdHknLCAnYWxlcnQxJywgJ2FsZXJ0MiddO1xuICAgIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEZpbGVkKSA9PiB7XG4gICAgICB0aGlzLm9uVmFsaWRhdGlvbklucHV0KGlucHV0RmlsZWQubWF4TGVuZ3RoLGlucHV0RmlsZWQuZmllbGQsaW5wdXRGaWxlZC5pc1JlcXVpcmVkKTtcbiAgICB9KTtcbiAgICBzZWxlY3RMaXN0LmZvckVhY2goKHNlbGVjdEZpZWxkKSA9PiB7XG4gICAgICB0aGlzLm9uVmFsaWRhdGlvblNlbGVjdChzZWxlY3RGaWVsZClcbiAgICB9KTtcbiAgICB0aGlzLm9uVmFsaWRhdGlvblRpbWVGb3JtYXQoKTtcbiAgICB0aGlzLm9uVmFsaWRhdGlvblRpbWUoKTtcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbFRvRXJyb3IoKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICB9XG5cbiAgb25WYWxpZGF0aW9uSW5wdXQobWF4TGVuZ3RoOiBudW1iZXIsIGZpZWxkOiBzdHJpbmcsIGlzUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSkgeyAvLyBjaGVjayBpbnB1dCBmaWxlZCB3aGVuIHR5cGluZ1xuICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihmaWVsZCk7XG4gICAgY29uc29sZS5kZWJ1ZygnaXNSZXF1aXJlZCcsaXNSZXF1aXJlZCwnbGVuZ3RoJyx0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsW2ZpZWxkXS5sZW5ndGgsJ3ZhbCcsJ1snK3RoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWxbZmllbGRdKyddJyk7XG4gICAgaWYoaXNSZXF1aXJlZCkge1xuICAgICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbFtmaWVsZF0gIT0gdW5kZWZpbmVkICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkoU3RyaW5nVXRpbHMudHJpbSh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsW2ZpZWxkXSkpKVxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoZmllbGQsICdyZXF1aXJlZCcpO1xuICAgIH1cbiAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWxbZmllbGRdKSkge1xuICAgICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbFtmaWVsZF0ubGVuZ3RoID4gbWF4TGVuZ3RoICYmIG1heExlbmd0aCAhPSAwKVxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoZmllbGQsJ21heExlbmd0aCcpO1xuICAgIH1cbiAgfVxuXG4gIG9uVmFsaWRhdGlvblNlbGVjdChmaWVsZDogc3RyaW5nKSB7IC8vIGNoZWNrIHNlbGVjdCBmaWxlZCBhZnRlciBzZWxlY3RlZFxuICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcihmaWVsZCk7XG4gICAgY29uc29sZS53YXJuKCdmaWVsZCcsZmllbGQpO1xuICAgIGlmKGZpZWxkID09ICdhY3Rpdml0eScpIHtcbiAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWN0aXZpdHkgPT0gbnVsbCB8fCB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFjdGl2aXR5ID09ICcnKVxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoZmllbGQsICdyZXF1aXJlZCcpO1xuICAgIH1cbiAgICBpZihmaWVsZCA9PSAnYWxlcnQxJyB8fCBmaWVsZCA9PSAnYWxlcnQyJykge1xuICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKCdhbGVydDEnKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcignYWxlcnQyJyk7XG4gICAgICBpZih0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmlzQWxlcnQgJiYgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDEgPT0gJycgJiYgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDIgPT0gJycpIC8vIGlmIGRpZG4ndCBzZWxlY3QgYW55IGFsZXJ0XG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgnYWxlcnQxJywgJ3JlcXVpcmVkJyk7XG4gICAgICBpZih0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmlzQWxlcnQgJiYgKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQxID09IHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQyKSAmJiB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSAhPSAnJykgLy8gaWYgc2VsZWN0IHNhbWUgYWxlcnRcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdhbGVydDInLCAnc2FtZUFsZXJ0Jyk7XG4gICAgfVxuICB9XG5cbiAgb25WYWxpZGF0aW9uVGltZUZvcm1hdCgpIHtcbiAgICBsZXQgdGltZUxpc3QgPSBbJ3N0YXJ0RGF0ZScsICdzdGFydFRpbWUnLCAnZW5kRGF0ZScsICdlbmRUaW1lJywgJ3RpbWUnXTtcbiAgICB0aW1lTGlzdC5mb3JFYWNoKCAodGltZUZpZWxkKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IodGltZUZpZWxkKTsgLy9jbGVhciB0aW1lRXJyb3JcbiAgICAgIGlmKHRpbWVGaWVsZCAhPSAndGltZScgJiYgdGhpc1t0aW1lRmllbGRdID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCh0aW1lRmllbGQsICdmb3JtYXRFcnJvcicpOyAvLyBjaGVjayBmb3JtYXRFcnJvclxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25WYWxpZGF0aW9uVGltZSgpIHsgLy8gdmFsaWRhdGlvbiBEYXRlIG9yIFRpbWVcbiAgICAvLyBsZXQgaXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCB0aW1lTGlzdCA9IFsnc3RhcnREYXRlJywgJ3N0YXJ0VGltZScsICdlbmREYXRlJywgJ2VuZFRpbWUnXTtcbiAgICB0aW1lTGlzdC5mb3JFYWNoKCAodGltZUZpZWxkKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IodGltZUZpZWxkKTtcbiAgICAgICAgLy8gaWYodGhpcy52YWxpZGF0aW9uUmVzdWx0LmlzRXJyb3IodGltZUZpZWxkKSlcbiAgICAgICAgICAvLyBpc0Vycm9yID0gdHJ1ZTtcbiAgICB9KTtcbiAgICAvLyBpZighaXNFcnJvcikge1xuICAgICAgdGhpcy5jb21iaW5lVGltZSgpO1xuICAgICAgaWYgKGRpZmZlcmVuY2VJbk1pbnV0ZXModGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQsdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydCkgPCAxNSAmJiBkaWZmZXJlbmNlSW5NaW51dGVzKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuZW5kLHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuc3RhcnQpID49IDAgJiYgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGxEYXkgIT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ3RpbWUnLCAnbWluVGltZScpO1xuICAgICAgfSBlbHNlIGlmKGRpZmZlcmVuY2VJbk1pbnV0ZXModGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQsdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydCkgPCAwKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgndGltZScsICdlcnJvclRpbWUnKTtcbiAgICAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBjb21iaW5lVGltZSgpIHtcbiAgICBpZiAodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGxEYXkgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydCA9IG5ldyBEYXRlKGdldFllYXIodGhpcy5zdGFydERhdGUpLGdldE1vbnRoKHRoaXMuc3RhcnREYXRlKSwgZ2V0RGF0ZSh0aGlzLnN0YXJ0RGF0ZSksIDAsIDApO1xuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMuZW5kRGF0ZSksIGdldE1vbnRoKHRoaXMuZW5kRGF0ZSksIGdldERhdGUodGhpcy5lbmREYXRlKSwgMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuc3RhcnQgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMuc3RhcnREYXRlKSxnZXRNb250aCh0aGlzLnN0YXJ0RGF0ZSksIGdldERhdGUodGhpcy5zdGFydERhdGUpLCBnZXRIb3Vycyh0aGlzLnN0YXJ0VGltZSksIGdldE1pbnV0ZXModGhpcy5zdGFydFRpbWUpKTtcbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuZW5kID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLmVuZERhdGUpLCBnZXRNb250aCh0aGlzLmVuZERhdGUpLCBnZXREYXRlKHRoaXMuZW5kRGF0ZSksIGdldEhvdXJzKHRoaXMuZW5kVGltZSksIGdldE1pbnV0ZXModGhpcy5lbmRUaW1lKSk7XG4gICAgfVxuICB9XG5cbiAgb25UaW1lQ2hhbmdlKGNoYW5nZURhdGUsZmllbGQ6IHN0cmluZykge1xuICAgIC8vY29udmVydCB0byBkYXRlIHBhcmFtXG4gICAgaWYoZmllbGQgPT0gJ3N0YXJ0RGF0ZScpIHRoaXMuc3RhcnREYXRlID0gY2hhbmdlRGF0ZTtcbiAgICBlbHNlIGlmKGZpZWxkID09ICdzdGFydFRpbWUnKSB0aGlzLnN0YXJ0VGltZSA9IGNoYW5nZURhdGU7XG4gICAgZWxzZSBpZihmaWVsZCA9PSAnZW5kRGF0ZScpIHRoaXMuZW5kRGF0ZSA9IGNoYW5nZURhdGU7XG4gICAgZWxzZSBpZihmaWVsZCA9PSAnZW5kVGltZScpIHRoaXMuZW5kVGltZSA9IGNoYW5nZURhdGU7XG5cbiAgICB0aGlzLm9uVmFsaWRhdGlvblRpbWVGb3JtYXQoKTtcbiAgICBpZighdGhpcy5pc0luaXQpIHsgLy8gdG8gYXZvaWQgY2hhbmdlIHN0YXJ0RGF0ZSBpbiB0aGUgZmlyc3QgVGltZVxuICAgICAgaWYgKGZpZWxkID09ICdzdGFydERhdGUnKSB7XG4gICAgICAgIHRoaXMub25TdGFydERhdGVDaGFuZ2UoKVxuICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PSAnc3RhcnRUaW1lJykge1xuICAgICAgICB0aGlzLm9uU3RhcnRUaW1lQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25WYWxpZGF0aW9uVGltZSgpO1xuICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XG5cbiAgfVxuXG4gIG9uU3RhcnREYXRlQ2hhbmdlKCkge1xuICAgIHRoaXMuc3RhcnRUaW1lID0gc2V0RGF0ZSh0aGlzLnN0YXJ0VGltZSwgZ2V0RGF0ZSh0aGlzLnN0YXJ0RGF0ZSkpO1xuICAgIHRoaXMuZW5kRGF0ZSA9IGFkZEhvdXJzKHRoaXMuc3RhcnREYXRlLCAxKTtcbiAgICB0aGlzLmVuZFRpbWUgPSBhZGRIb3Vycyh0aGlzLnN0YXJ0VGltZSwgMSk7XG4gICAgdGhpcy5zdGFydERhdGVDaGFuZ2UuZW1pdCh0aGlzLnN0YXJ0RGF0ZSk7XG4gIH1cblxuICBvblN0YXJ0VGltZUNoYW5nZSgpIHtcbiAgICB0aGlzLmVuZERhdGUgPSBhZGRIb3Vycyh0aGlzLnN0YXJ0VGltZSwgMSk7XG4gICAgdGhpcy5lbmRUaW1lID0gYWRkSG91cnModGhpcy5zdGFydFRpbWUsIDEpO1xuICB9XG5cbiAgb25Jc0FsbERheUNoYW5nZSgpIHtcbiAgICB0aGlzLm9uSXNBbGVydENoYW5nZSgpO1xuICAgIGlmKCF0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsbERheSkge1xuICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgIGN1cnJlbnRUaW1lID0gYWRkTWludXRlcyhjdXJyZW50VGltZSwgKDUgLSBnZXRNaW51dGVzKGN1cnJlbnRUaW1lKSAlIDUpKTtcbiAgICAgIGN1cnJlbnRUaW1lID0gYWRkSG91cnMoY3VycmVudFRpbWUsIDEpO1xuICAgICAgLy8gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydCA9IG5ldyBEYXRlKGdldFllYXIodGhpcy5zdGFydFRpbWUpLCBnZXRNb250aCh0aGlzLnN0YXJ0VGltZSksIGdldERhdGUodGhpcy5zdGFydFRpbWUpLGdldEhvdXJzKGN1cnJlbnRUaW1lKSwgZ2V0TWludXRlcyhjdXJyZW50VGltZSkpO1xuICAgICAgdGhpcy5zdGFydERhdGUgPSBjdXJyZW50VGltZTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAvLyB0aGlzLmVuZERhdGUgPSBhZGRIb3Vycyh0aGlzLnN0YXJ0VGltZSwgMSk7XG4gICAgICAvLyB0aGlzLmVuZFRpbWUgPSBhZGRIb3Vycyh0aGlzLnN0YXJ0VGltZSwgMSk7XG4gICAgfVxuICB9XG5cbiAgb25Jc0FsZXJ0Q2hhbmdlKCkge1xuICAgIHRoaXMuZ2V0QWxlcnRPcHRpb25zKCk7IC8vcmVzZXQgb3B0aW9uTGlzdFxuICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuaXNBbGVydCA9PSB0cnVlICYmIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxsRGF5ID09IHRydWUpIHsgLy8gcmVzZXQgRGVmYXVsdCBzZWxlY3Rpb25cbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQxID0gJzInO1xuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDIgPSAnJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuaXNBbGVydCA9PSB0cnVlICYmIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxsRGF5ID09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSA9ICc4JztcbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQyID0gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWxlcnRPcHRpb25zKCkge1xuICAgIHRoaXMuYWxlcnRPcHRpb25MaXN0ID0gW107XG5cbiAgICBpZih0aGlzLl9vcHRpb25NYXAuZ2V0KCdDYWxlbmRhcl9SZW1pbmRUaW1lJykpIHtcbiAgICAgIHRoaXMuX29wdGlvbk1hcC5nZXQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGxEYXkgPT0gSlNPTi5wYXJzZShvcHRpb24uZ2V0QXJndW1lbnRzKCkpLmlzQWxsRGF5KSB7XG4gICAgICAgICAgdGhpcy5hbGVydE9wdGlvbkxpc3QucHVzaChuZXcgU2VsZWN0T3B0aW9uKG9wdGlvbi5nZXRDb2RlKCksb3B0aW9uLmRpc3BsYXlUZXh0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvRXJyb3IoKSB7XG4gICAgbGV0IGVycm9yQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Vycm9yLW1zZycpO1xuICAgIGlmKGVycm9yQmxvY2suaXRlbSgwKSkge1xuICAgICAgZXJyb3JCbG9jay5pdGVtKDApLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG4gICAgfVxuICB9XG5cbiAgb25UaXRsZUNoYW5nZSh2YWwpe1xuICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwudGl0bGUgPSB2YWw7XG4gICAgdGhpcy5vblZhbGlkYXRpb25JbnB1dCg2MCwndGl0bGUnLHRydWUpO1xuICB9XG59XG4iXX0=