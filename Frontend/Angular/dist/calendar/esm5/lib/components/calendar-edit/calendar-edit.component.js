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
var CalendarEditComponent = /** @class */ (function () {
    function CalendarEditComponent(elementRef) {
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
    Object.defineProperty(CalendarEditComponent.prototype, "isSaveClick", {
        get: /**
         * @return {?}
         */
        function () { return this._isSaveClick; },
        set: /**
         * @param {?} isSaveClick
         * @return {?}
         */
        function (isSaveClick) {
            this._isSaveClick = isSaveClick;
            if (this._isSaveClick == true) {
                this.saveEventClick();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEditComponent.prototype, "calendarEventDetail", {
        get: /**
         * @return {?}
         */
        function () { return this._calendarEventDetail; },
        set: /**
         * @param {?} calendarEventDetail
         * @return {?}
         */
        function (calendarEventDetail) {
            if (calendarEventDetail) {
                this._calendarEventDetail = calendarEventDetail;
                console.warn("this.calendarEventDetail", this._calendarEventDetail);
                this.editEvent();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEditComponent.prototype, "optionMap", {
        get: /**
         * @return {?}
         */
        function () { return this._optionMap; },
        set: /**
         * @param {?} optionMap
         * @return {?}
         */
        function (optionMap) {
            this._optionMap = optionMap;
            this.activityOptionList = [];
            for (var i = 0; i < this._optionMap.get('Calendar_Type').length; i++) {
                this.activityOptionList.push(new SelectOption(this._optionMap.get('Calendar_Type')[i].getCode(), this._optionMap.get('Calendar_Type')[i].displayText));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEditComponent.prototype, "translateMap", {
        get: /**
         * @return {?}
         */
        function () { return this._translateMap; },
        set: /**
         * @param {?} translateMap
         * @return {?}
         */
        function (translateMap) {
            this._translateMap = translateMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEditComponent.prototype, "viewDate", {
        get: /**
         * @return {?}
         */
        function () { return this._viewDate; },
        set: /**
         * @param {?} viewDate
         * @return {?}
         */
        function (viewDate) {
            console.warn('viewDateChange');
            this._viewDate = viewDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEditComponent.prototype, "todayCalendarEvent", {
        get: /**
         * @return {?}
         */
        function () { return this.calendarEventList; },
        set: /**
         * @param {?} calendarEventList
         * @return {?}
         */
        function (calendarEventList) {
            this.calendarEventList = calendarEventList;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarEditComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
        // wle.warn('Width: ', this.windowWidth);
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.editEvent = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.saveEventClick = /**
     * @return {?}
     */
    function () {
        console.warn('saveEvent');
        this.validationForm();
        if (this.validationResult.isTrue()) {
            this.saveEvent.emit(this._calendarEventDetail);
        }
        else {
            this.saveEvent.emit(null);
            // this.completeSave.emit(false);
        }
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.validationForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // check form before submit
        /** @type {?} */
        var inputList = [{ 'maxLength': 60, 'field': 'title', 'isRequired': true },
            { 'maxLength': 100, 'field': 'location', 'isRequired': false },
            { 'maxLength': 500, 'field': 'remark', 'isRequired': false }];
        /** @type {?} */
        var selectList = ['activity', 'alert1', 'alert2'];
        inputList.forEach((/**
         * @param {?} inputFiled
         * @return {?}
         */
        function (inputFiled) {
            _this.onValidationInput(inputFiled.maxLength, inputFiled.field, inputFiled.isRequired);
        }));
        selectList.forEach((/**
         * @param {?} selectField
         * @return {?}
         */
        function (selectField) {
            _this.onValidationSelect(selectField);
        }));
        this.onValidationTimeFormat();
        this.onValidationTime();
        if (this.validationResult != null) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.scrollToError();
            }), 200);
        }
    };
    /**
     * @param {?} maxLength
     * @param {?} field
     * @param {?=} isRequired
     * @return {?}
     */
    CalendarEditComponent.prototype.onValidationInput = /**
     * @param {?} maxLength
     * @param {?} field
     * @param {?=} isRequired
     * @return {?}
     */
    function (maxLength, field, isRequired) {
        if (isRequired === void 0) { isRequired = false; }
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
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CalendarEditComponent.prototype.onValidationSelect = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
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
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.onValidationTimeFormat = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var timeList = ['startDate', 'startTime', 'endDate', 'endTime', 'time'];
        timeList.forEach((/**
         * @param {?} timeField
         * @return {?}
         */
        function (timeField) {
            _this.validationResult.deleteError(timeField); //clear timeError
            if (timeField != 'time' && _this[timeField] === null) {
                _this.validationResult.setErrorMap(timeField, 'formatError'); // check formatError
            }
        }));
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.onValidationTime = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // validation Date or Time
        // let isError: boolean = false;
        /** @type {?} */
        var timeList = ['startDate', 'startTime', 'endDate', 'endTime'];
        timeList.forEach((/**
         * @param {?} timeField
         * @return {?}
         */
        function (timeField) {
            _this.validationResult.deleteError(timeField);
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
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.combineTime = /**
     * @return {?}
     */
    function () {
        if (this._calendarEventDetail.allDay == true) {
            this._calendarEventDetail.start = new Date(getYear(this.startDate), getMonth(this.startDate), getDate(this.startDate), 0, 0);
            this._calendarEventDetail.end = new Date(getYear(this.endDate), getMonth(this.endDate), getDate(this.endDate), 0, 0);
        }
        else {
            this._calendarEventDetail.start = new Date(getYear(this.startDate), getMonth(this.startDate), getDate(this.startDate), getHours(this.startTime), getMinutes(this.startTime));
            this._calendarEventDetail.end = new Date(getYear(this.endDate), getMonth(this.endDate), getDate(this.endDate), getHours(this.endTime), getMinutes(this.endTime));
        }
    };
    /**
     * @param {?} changeDate
     * @param {?} field
     * @return {?}
     */
    CalendarEditComponent.prototype.onTimeChange = /**
     * @param {?} changeDate
     * @param {?} field
     * @return {?}
     */
    function (changeDate, field) {
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
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.onStartDateChange = /**
     * @return {?}
     */
    function () {
        this.startTime = setDate(this.startTime, getDate(this.startDate));
        this.endDate = addHours(this.startDate, 1);
        this.endTime = addHours(this.startTime, 1);
        this.startDateChange.emit(this.startDate);
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.onStartTimeChange = /**
     * @return {?}
     */
    function () {
        this.endDate = addHours(this.startTime, 1);
        this.endTime = addHours(this.startTime, 1);
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.onIsAllDayChange = /**
     * @return {?}
     */
    function () {
        this.onIsAlertChange();
        if (!this._calendarEventDetail.allDay) {
            /** @type {?} */
            var currentTime = new Date();
            currentTime = addMinutes(currentTime, (5 - getMinutes(currentTime) % 5));
            currentTime = addHours(currentTime, 1);
            // this._calendarEventDetail.start = new Date(getYear(this.startTime), getMonth(this.startTime), getDate(this.startTime),getHours(currentTime), getMinutes(currentTime));
            this.startDate = currentTime;
            this.startTime = currentTime;
            // this.endDate = addHours(this.startTime, 1);
            // this.endTime = addHours(this.startTime, 1);
        }
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.onIsAlertChange = /**
     * @return {?}
     */
    function () {
        this.getAlertOptions(); //reset optionList
        if (this._calendarEventDetail.isAlert == true && this._calendarEventDetail.allDay == true) { // reset Default selection
            this._calendarEventDetail.alert1 = '2';
            this._calendarEventDetail.alert2 = '';
        }
        else if (this._calendarEventDetail.isAlert == true && this._calendarEventDetail.allDay == false) {
            this._calendarEventDetail.alert1 = '8';
            this._calendarEventDetail.alert2 = '';
        }
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.getAlertOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertOptionList = [];
        if (this._optionMap.get('Calendar_RemindTime')) {
            this._optionMap.get('Calendar_RemindTime').forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (_this._calendarEventDetail.allDay == JSON.parse(option.getArguments()).isAllDay) {
                    _this.alertOptionList.push(new SelectOption(option.getCode(), option.displayText));
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    CalendarEditComponent.prototype.scrollToError = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var errorBlock = document.body.getElementsByClassName('error-msg');
        if (errorBlock.item(0)) {
            errorBlock.item(0).parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CalendarEditComponent.prototype.onTitleChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._calendarEventDetail.title = val;
        this.onValidationInput(60, 'title', true);
    };
    CalendarEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-calendar-edit',
                    template: "<ng-template *ngIf=\"windowWidth < 1024; then mobileBlock else pcBlock\"></ng-template>\n\n<ng-template #mobileBlock>\n  <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n</ng-template>\n<!-- end: mobileBlock -->\n\n<ng-template #pcBlock>\n  <ng-container *ngTemplateOutlet=\"formContent\"></ng-container>\n  <ng-container *ngTemplateOutlet=\"eventListContent\"></ng-container>\n</ng-template>\n<!-- end: pcBlock -->\n\n<ng-template #formContent>\n  <ng-container *ngIf=\"_calendarEventDetail\">\n    <app-ui-form-layout-col [colPC]=\"8\" [colNB]=\"8\" [colPad]=\"12\" [colMobile]=\"12\">\n      <app-ui-form-layout-advanced>\n        <!-- title -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.title\" (nxValueChange)=\"onValidationInput(60,'title',true)\" [inputTitle]=\"language.title | translate\" [name]=\"'input1'\" [isDisable]=\"false\" [isError]=\"validationResult.isError('title')\" [maxLength]=\"60\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('title') == 'required'\">{{language.wrongTitleRequired | translate}}</app-ui-form-error-msg>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('title') == 'maxLength'\">{{language.wrongTitleMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row1 -->\n\n        <!-- location -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.location\" (nxValueChange)=\"onValidationInput(100,'location',false)\" [inputTitle]=\"language.location | translate\" [name]=\"'input1'\" [isDisable]=\"false\" [isError]=\"validationResult.isError('location')\" [maxLength]=\"100\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('location') == 'maxLength'\">{{language.wrongLocationMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row2 -->\n\n        <!-- Activity -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.activity\"  (nxValueChange)=\"onValidationSelect('activity')\" [selectTitle]=\"language.activity | translate\" [selectOption]='activityOptionList'[isError]=\"validationResult.isError('activity')\" ></app-ui-form-select>\n            <app-ui-form-error-msg *ngIf=\"validationResult.isError('activity')\">{{language.wrongActivityRequired | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row3 -->\n\n        <!-- AllDay -->\n        <app-ui-form-title-sm>{{language.date | translate}}</app-ui-form-title-sm>\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-switcher [(nxValue)]=\"_calendarEventDetail.allDay\" [labelTxt]=\"language.allDay | translate\" (nxValueChange)=\"onIsAllDayChange()\"></app-ui-form-switcher>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row4 -->\n\n        <!-- Datetime picker -->\n        <ng-container *ngIf= '_calendarEventDetail.allDay == true'>\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\" >\n              <app-ui-form-date [title]=\"language.from | translate\" [nxValue]=\"startDate\"  (nxValueChange)=\"onTimeChange($event,'startDate')\" [isError]=\"validationResult.isError('startDate')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'errorTime'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date class=\"calendar-edit-allDay-date\" [title]=\"language.to | translate\" [nxValue]=\"endDate\" (nxValueChange)=\"onTimeChange($event,'endDate')\" [isError]=\"validationResult.isError('endDate') || validationResult.isError('time')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </ng-container>\n\n        <ng-container *ngIf= '_calendarEventDetail.allDay == false'>\n          <!-- Start Date -->\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date [title]=\"language.from | translate\" [nxValue]=\"startDate\" (nxValueChange)=\"onTimeChange($event,'startDate')\" [isError]=\"validationResult.isError('startDate')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startDate') == 'formatError'\">{{language.wrongDate | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'errorTime'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-timepicker [nxValue]=\"startTime\" (nxValueChange)=\"onTimeChange($event,'startTime')\"\n                                      [isError]=\"validationResult.isError('startTime')\"></app-ui-form-timepicker>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('startTime') == 'formatError'\">{{language.wrongTime | translate}}</app-ui-form-error-msg>\n\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <!-- end: Start Date -->\n\n          <!-- End Date -->\n          <app-ui-form-layout-row>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-date [title]=\"language.to | translate\" [nxValue]=\"endDate\" (nxValueChange)=\"onTimeChange($event,'endDate')\" [isError]=\"validationResult.isError('endDate') || validationResult.isError('time')\"></app-ui-form-date>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endDate') == 'formatError'\">{{language.wrongStartTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"12\">\n              <app-ui-form-timepicker [nxValue]=\"endTime\" (nxValueChange)=\"onTimeChange($event,'endTime')\"\n                                      [isError]=\"validationResult.isError('time') || validationResult.isError('endTime')\"></app-ui-form-timepicker>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('endTime') == 'formatError'\">{{language.wrongTime | translate}}</app-ui-form-error-msg>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('time') == 'minTime'\">{{language.wrongEndTime | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n          <!-- end: End Date -->\n        </ng-container>\n        <!-- end of row5 -->\n\n        <!-- Alert -->\n        <app-ui-form-title-sm>{{language.alert | translate}}</app-ui-form-title-sm>\n        <app-ui-form-layout-row calendarEditAlertRow=\"\">\n          <app-ui-form-layout-col [colPC]=\"'auto'\" [colNB]=\"'auto'\" [colPad]=\"'auto'\" [colMobile]=\"'auto'\">\n            <app-ui-form-switcher class=\"calendar-edit-alert-switcher\"\n              [(nxValue)]=\"_calendarEventDetail.isAlert\" (nxValueChange)=\"onIsAlertChange()\"></app-ui-form-switcher>\n          </app-ui-form-layout-col>\n          <ng-container *ngIf= '_calendarEventDetail.isAlert == true'>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"9\">\n              <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.alert1\"\n                                  (nxValueChange)=\"onValidationSelect('alert1')\"\n                                  [isShowTitle]=\"false\"\n                                  [selectTitle]=\"'Alert1'\"\n                                  [selectOption]='alertOptionList'\n                                  [isError]=\"validationResult.isError('alert1')\"\n                                  [placeholder]=\"language.alertPlaceholder | translate\" ></app-ui-form-select>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('alert1') == 'required'\">{{language.wrongAlertRequired | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </ng-container>\n        </app-ui-form-layout-row>\n        <!-- end of row6 -->\n\n        <!-- Second Alert -->\n        <ng-container *ngIf= '_calendarEventDetail.isAlert == true'>\n          <app-ui-form-layout-row calendarEditAlertRow=\"\">\n            <app-ui-form-layout-col [colPC]=\"'auto'\" [colNB]=\"'auto'\" [colPad]=\"'auto'\" [colMobile]=\"'auto'\">\n              <div class=\"calendar-edit-alert-switcher\"></div>\n            </app-ui-form-layout-col>\n            <app-ui-form-layout-col [colPC]=\"6\" [colNB]=\"6\" [colPad]=\"6\" [colMobile]=\"9\">\n              <app-ui-form-select [(nxValue)]=\"_calendarEventDetail.alert2\"\n                                  (nxValueChange)=\"onValidationSelect('alert2')\"\n                                  [isShowTitle]=\"false\"\n                                  [selectTitle]=\"'Alert2'\"\n                                  [selectOption]='alertOptionList'\n                                  [isError]=\"validationResult.isError('alert2')\"\n                                  [placeholder]=\"language.alertPlaceholder | translate\"></app-ui-form-select>\n              <app-ui-form-error-msg *ngIf=\"validationResult.getErrorMsg('alert2') == 'sameAlert'\">{{language.wrongAlert | translate}}</app-ui-form-error-msg>\n            </app-ui-form-layout-col>\n          </app-ui-form-layout-row>\n        </ng-container>\n        <!-- end of row7 -->\n\n        <!-- Remark -->\n        <app-ui-form-layout-row>\n          <app-ui-form-layout-col>\n            <app-ui-form-input [(nxValue)]=\"_calendarEventDetail.remark\" (nxValueChange)=\"onValidationInput(500,'remark')\" [inputTitle]=\"language.remark | translate\" [name]=\"'input1'\"  [isDisable]=\"false\" [isError]=\"validationResult.isError('remark')\" [maxLength]=\"500\"></app-ui-form-input>\n            <app-ui-form-error-msg *ngIf=\"validationResult.isError('remark')\">{{language.wrongRemarkMaximum | translate}}</app-ui-form-error-msg>\n          </app-ui-form-layout-col>\n        </app-ui-form-layout-row>\n        <!-- end of row8 -->\n      </app-ui-form-layout-advanced>\n    </app-ui-form-layout-col>\n  </ng-container>\n</ng-template>\n<!-- end: formContent -->\n\n<ng-template #eventListContent>\n  <app-ui-form-layout-col [colPC]=\"4\" [colNB]=\"4\" [colPad]=\"0\" [colMobile]=\"0\" [ngStyle]=\"{ 'background-color': eventListBGColor }\">\n    <ng-container *ngIf=\"calendarEventList\" >\n\n      <app-ui-calendar-event-list\n        [ngClass]=\"calendarEventList.length == 0? 'calendar-event-list-no-data':''\"\n        [translateMap]=\"_translateMap\"\n        [title]=\"calendarEventList.length>0 ? showDate:''\"\n        [colorCode]=\"eventListBGColor\"\n        [eventList]=\"calendarEventList\">\n        <div scheduleNoData class=\"calendar-edit-schedule\">\n          <p>{{this.translateMap.get('No_Schedule') ? this.translateMap.get('No_Schedule') : 'You have no schedule for today'}}</p>\n        </div>\n      </app-ui-calendar-event-list>\n    </ng-container>\n  </app-ui-form-layout-col>\n</ng-template>\n<!-- end: evenListContent -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:flex;height:100%}:host>app-ui-form-layout-col{padding-left:0!important;margin-bottom:0!important}:host>app-ui-form-layout-col:first-child{min-width:calc(100% - 200px);padding-left:20px!important;padding-right:20px}:host>app-ui-form-layout-col:last-child{max-width:200px}:host .calendar-edit-alert-switcher{display:inline-block;width:56px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container{padding-top:30px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-container app-ui-text-type-item:last-child{padding-bottom:20px;border-bottom:1px solid #ececec}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content{width:100%;min-width:1px}:host ::ng-deep app-ui-text-type ::ng-deep .ui-text-type-content>p{display:block;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host ::ng-deep .calendar-event-list-no-data{display:inline-block;width:calc(100% + 6px);height:100%}:host ::ng-deep .calendar-event-list-no-data ::ng-deep app-ui-text-type .ui-text-type-container{width:100%;height:100%;padding:0}:host ::ng-deep .calendar-edit-schedule{width:100%;height:100%;margin:0;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTk4IiBoZWlnaHQ9IjY3NCIgdmlld0JveD0iMCAwIDE5OCA2NzQiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTk4djY3NUgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xKSI+CiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxnIGZpbGw9IiNFQ0VDRUMiIG1hc2s9InVybCgjYikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQ4LjI0NSAxMC44NWMzLjAwNCAwIDUuMjg5IDMuNTc4IDguMDA0IDIuOTQzIDUuOTMyLTEuMzg5IDguMzctOS4wMjkgMTQuODc5LTkuMDI5IDUuMDI1IDAgNy45MzQgNi4yMzYgMTIuNTcgNS44MTRDMTkxLjA0MiA5LjkwOCAxOTQuMzUyIDAgMjAyLjI2IDBjNy4zMSAwIDEwLjkwMyA4LjQ4MiAxNy42NTcgOS4yMyAzLjk3OS40NDIgNi44ODktNC4zMzYgMTEuMjEtNC4zMzYgOC4xNTUgMCA4Ljg3MiAzLjI0MiAxNi4zOCA1LjU4MiAyLjE1NC42NzIgMy44MDMgNC44NzIgNi4yMzggNC44NzIgMi44NjMgMCA1LjQwMy44OTggNy4wMzMgMi44OThIMTM2LjAwM2MyLjA5Mi00IDYuNzgtNy4zOTYgMTIuMjQyLTcuMzk2Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNFQ0VDRUMiIGQ9Ik0yMzEuODYyIDE3NC4zNTJjLTEuNTE3IDAtMi42NyAxLjc2NS00LjA0MSAxLjQ1Mi0yLjk5NS0uNjg2LTQuMjI2LTQuNDU0LTcuNTEzLTQuNDU0LTIuNTM2IDAtNC4wMDUgMy4wNzYtNi4zNDYgMi44NjgtMy43MDktLjMzLTUuMzc5LTUuMjE4LTkuMzcyLTUuMjE4LTMuNjkyIDAtNS41MDUgNC4xODQtOC45MTUgNC41NTMtMi4wMS4yMTgtMy40NzktMi4xMzktNS42NjEtMi4xMzktNC4xMTYgMC00LjQ3OCAxLjYtOC4yNyAyLjc1My0xLjA4OC4zMzItMS45MiAyLjQwNC0zLjE1IDIuNDA0LTEuNDQ0IDAtMi43MjcuNDQyLTMuNTUgMS40MjloNjNjLTEuMDU3LTEuOTczLTMuNDI1LTMuNjQ4LTYuMTgyLTMuNjQ4TTU5Ljc4NCAzMTQuNzA0Yy0zLjAxIDAtNS4yOTggMy41My04LjAxOCAyLjkwMy01Ljk0Mi0xLjM3LTguMzg0LTguOTA3LTE0LjkwNi04LjkwNy01LjAzMiAwLTcuOTQ3IDYuMTUyLTEyLjU5MyA1LjczNUMxNi45MSAzMTMuNzc1IDEzLjU5NiAzMDQgNS42NzQgMzA0Yy03LjMyNiAwLTEwLjkyMyA4LjM2OC0xNy42OSA5LjEwNi0zLjk4Ni40MzYtNi45MDItNC4yNzgtMTEuMjMyLTQuMjc4LTguMTY3IDAtOC44ODUgMy4xOTgtMTYuNDA3IDUuNTA3LTIuMTYuNjYzLTMuODEgNC44MDYtNi4yNTEgNC44MDYtMi44NjYgMC01LjQxMi44ODYtNy4wNDYgMi44NTloMTI1Yy0yLjA5NS0zLjk0Ni02Ljc5My03LjI5Ni0xMi4yNjQtNy4yOTZNMTYuMDU5IDY2My4wMTNjNC4yMDYtNi43NTMgNy41ODItMTQuODc0IDE1LjMyMy0xNy44MzYgNy4yNDQtMi43NyAxNS42NTYgNy44NTMgMjMuMjY4IDYuMTUgMTUuNTcyLTMuNDg4IDE3LjM3Mi01NS4wNjQgMzcuMDc3LTU1LjA2NCAxOC43MDkgMCA1MS4yNzcgNDEuMTkgNzcuMjIyIDI2LjEgMjQuOTAyLTE0LjQ4MyAzOS41ODYtNTguOTcgNjAuMTItNjUuMjUxIDM5LjYtMTIuMTEzIDQ3Ljg3IDc4LjcyNiA3Ni4zMjcgNzguNzI2IDguMDUgMCAxMy45MDQtMjEuNzMgMjAuMDIxLTI0LjQzNiAxOS42OTItOC43MTMgMTAuNDIgNDcuMjYgMzguNDIgNjMuNTk4SC0zLjAxNGM2LjAyLS40NDIgMTQuODY3LTUuMjM0IDE5LjA3NC0xMS45ODd6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPGcgbWFzaz0idXJsKCNiKSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MEIxQjQiIGQ9Ik0xMDQuNDY4IDU2NWwtNyAyLjg2MWMuODI1IDcuNTg2LTE0LjA0NyAyMy4wNzQtMTQuMDQ3IDIzLjA3NGwzLjkzNy4yOXMyNS40MzQtMTYuMDk3IDE3LjExLTI2LjIyNSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQTdBN0E3IiBkPSJNMTEwLjU4NiA1MTguNDdjMCAzLjU3NC0yLjQ4MSA2LjQ3MS01LjU0MSA2LjQ3MS0zLjA2IDAtNS41NDItMi44OTctNS41NDItNi40NzEgMC0zLjU3MyAyLjQ4MS02LjQ3IDUuNTQyLTYuNDcgMy4wNiAwIDUuNTQgMi44OTcgNS41NCA2LjQ3Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGMkEwOEEiIGQ9Ik0xMDQuODY4IDUyMS4yNjVjMi4yMjIuNzU2IDMuNSAyLjg5NiAyLjg1MSA0Ljc4LS42NDcgMS44ODUtMi45NzQgMi44LTUuMTk2IDIuMDQzLTIuMjIzLS43NTctMy40OTktMi44OTYtMi44NTMtNC43OC42NDktMS44ODUgMi45NzYtMi43OTkgNS4xOTgtMi4wNDMiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzc5QkVDMSIgZD0iTTEyMS44IDYwMS41MDRsLTMzLjM1My01LjEyNmM0LjUwOC05Ljk5NiAxMy4wNjYtOS45OTYgOC41NjktMzAuNDc0LTMuNDE3LTE1LjQ5MyAxMC41MjItMTkuOTggMTYuMjUyLTE0LjkxOGExNS4wNDIgMTUuMDQyIDAgMCAxIDIuMDMgMi4yMTFsLjA2NS4wNzdjMy42NjEgNC44MiA2LjkyNSAxMy43MDMgNi41IDI1Ljg2LS4xMjggMy43NDYtLjA2MyA2LjQ0Mi4wNjUgOC43MDUuMjMxIDQuNjc4LjY1NSA3LjQ1My0uMTI4IDEzLjY2NSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQkFFMEU3IiBkPSJNMTIwLjYgNjA2Ljg5M2MuNTEzLTEuMzAxIDEuNDAyLTMuODk4IDEuMTM3LTguMzIyTDg4LjExNCA1OTZhMjcuNDE1IDI3LjQxNSAwIDAgMC0uNTc3IDIuMDA0Yy00LjU0My4wNjgtOC44NDguMzk3LTExLjg2MyAxLjMxNS0xNi42MiA1LjA1NC0xOS4zOSAzMy4zNDMtMTkuMzkgMzMuMzQzbDMuMDUgMS4xMzlzNC43NC0xMy45NDggMTIuNTQ2LTIwLjExN2MtLjA2IDExLjA5IDEzLjUwMiAyOC44MzkgMTMuNTAyIDI4LjgzOWwzLjY3LS44ODRzLTEyLjgxNS0yMi44OTItMi4xMDMtMjUuNjAxYzcuNTgzLTEuOTE4IDExLjAyNC0yLjE0IDE3LjczNC0yLjExNiAzLjA5NC4zMyA2LjI3MS40MjUgOS41Mi4wNTQgMy41NDYtLjY1MyA1LjQ0LTQuNjQ1IDYuMzk3LTcuMDgzIi8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MEIxQjQiIGQ9Ik0xMjEuNDYyIDU4Ny44MmMtNi4wNTEgNS44NjYtMTUuNjIyIDkuODkzLTE1LjYyMiA5Ljg5M2wtNS4zMzItMi42MnMyMS4yMzctNS43NzggMTcuNjUyLTE0LjU0OGMtMi45OC03LjMxLTcuNDEzLTE4LjQ3LTguNDQtMjEuNTI2LS44MjItMi4zOS0uNjA1LTExLjkzOSA0Ljc2Ni02LjIyNS4xMTYuMTE2LjIzMS4yNTYuMzQ3LjM4M2wuMDY0LjA3N2MzLjY2MiA0LjgyIDYuOTI1IDEzLjcwMyA2LjUwMSAyNS44Ni0uMTI5IDMuNzQ2LS4wNjMgNi40NDIuMDY0IDguNzA1Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3OUJFQzEiIGQ9Ik0xMTQuNDkgNTUyLjY5YzMuODcgMy42MTQgOC4xMjYgMTYuMTMgMTEuMDQ5IDIyLjQ0MSA1LjUwNCAxMS44ODItMjEuMjk0IDIxLjEyMy0yMS4yOTQgMjEuMTIzbC0zLjczNy0xLjI2NXMyMS45Mi0xMC40NCAxNy41MzQtMTguODM3Yy0zLjUzOC02Ljc3Ni01LjkyLTEwLjM2LTEwLjA2Ny0xOC40MjktMi41Ny00Ljk5Ny0uMzY5LTExLjQ1NyA2LjUxNC01LjAzMyIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTlENkI4IiBkPSJNMTAyLjEzIDU5NC4zOTNjLTIuMzMtMS4wMS01LjEyMi4wODUtNS41NjkgMS41MTgtLjQ0NiAxLjQzMyAxLjEwOCAyLjE0OCA1LjE2IDIuNTI4IDQuMDUuMzc5IDQuNTYtMi4yMiA0LjU2LTIuMjJsLTQuMTUyLTEuODI2TTg1LjY4MSA2MzkuNDcybC01LjA4OCA1Ljk2N2MtLjU1LjY0OC4yMSAxLjUzNyAxLjAzOCAxLjIxbDcuNjEtMy4wMDJjLjY4Ni0uMjcuOTI5LTEuMDQyLjUwNi0xLjZsLTEuOTA4LTIuNTIxYy0uNTEzLS42NzgtMS42MDMtLjcwNS0yLjE1OC0uMDU0TTU4LjU1OCA2MzEuNTU0bC05LjI4LTQuNWMtLjc5OC0uMy0xLjM4My43MTQtLjc5NSAxLjM4bDcuMzI1IDcuODYyYy40ODYuNTUxIDEuMjk4LjUyIDEuNjg1LS4wNjVsMS43NDEtMi42MzdjLjQ2OC0uNzA5LjEyNy0xLjczOS0uNjc2LTIuMDRNMTA2LjUxIDUzNS43NDNjLjk3IDUuMDggMS40NTIgMTAuNjM3IDMuNTE1IDE0LjU4OS41MjQgMS4wMDEuMzk2IDIuMTEyLS40MiAyLjY2Ni0xLjI3Ny44NjQtMy40OCAxLjYxMi02LjU3Mi4wMTctMS4wNzQtLjU1NS0xLjY5LTEuNzMzLTEuNDgtMi43NDkuNDY1LTIuMjM5IDEuMTItNi40NTQuNDA5LTkuOTE2LTEuMDI0LTQuOTcyIDMuNzctOC42ODUgNC41NDgtNC42MDciLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U5RDZCOCIgZD0iTTk0LjQ0NCA1NDEuODE0YzQuODAxIDkuMTggOS42NTQgMTAuMDc0IDEyLjg4LTMuOTc2IDMuMjI2LTE0LjA1MS0yMS45MzMtMTMuMzMzLTEyLjg4IDMuOTc2Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNBN0E3QTciIGQ9Ik0xMDIuOTE4IDUyM2MtMi4yNSAwLTQuMjYzIDEuMTg2LTUuNjEgMy4wNS0xLjUuNTQ1LTMuMDg0IDEuMzgtNC42ODMgMi41MzctMy42MjcgMi42MjQtOS4yMjUgMTIuMTM2LTguMDM2IDEyLjQyNiA0LjEyOCAxLjAwOCAxMC4yOTQuNDA4IDE1LjA3MS0xLjc3Ni45ODMuNTcgMi4wODYuODk5IDMuMjU4Ljg5OSA0LjA1MyAwIDcuMzM4LTMuODM2IDcuMzM4LTguNTY4IDAtNC43MzItMy4yODUtOC41NjgtNy4zMzgtOC41NjgiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U5RDZCOCIgZD0iTTEwNC43NDUgNTM4LjQxOWMtLjY5OSAyLjUxNC4yMjggMy4zNTcgMy42OTQuOTQ4IDMuNDY2LTIuNDA4LTIuMzc2LTUuNjktMy42OTQtLjk0OCIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDNDNkNDIiBkPSJNMTA4LjkwOCA2MDAuMTU0SDgzLjQ3YTEuMDU0IDEuMDU0IDAgMCAxLTEuMDU0LTEuMDQ4di0uMDU4YzAtLjU3Ni40NzUtMS4wNDggMS4wNTQtMS4wNDhoMjUuNDM4Yy41NzkgMCAxLjA1My40NzIgMS4wNTMgMS4wNDh2LjA1OGMwIC41NzctLjQ3NCAxLjA0OC0xLjA1MyAxLjA0OCIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTRFNERGIiBkPSJNOTcuODM4IDYwMC41NzZoLTIzLjExYy0xLjIxOSAwLTIuNDI4LS45OTItMi42ODYtMi4yMDZsLTMuNjQ4LTE3LjE2M2MtLjI1OC0xLjIxNC41MjktMi4yMDcgMS43NS0yLjIwN2gyMy4xMDljMS4yMTkgMCAyLjQyOC45OTMgMi42ODYgMi4yMDdsMy42NDkgMTcuMTYzYy4yNTggMS4yMTQtLjUzIDIuMjA2LTEuNzUgMi4yMDYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=);background-repeat:no-repeat;background-size:cover;background-position:center bottom}:host ::ng-deep .calendar-edit-schedule p{padding:0 25px;font-size:.875rem;font-weight:300;line-height:2;letter-spacing:.2px;text-align:center;color:#414141}:host ::ng-deep .calendar-edit-schedule p:first-child{padding-top:200px}@media screen and (max-width:1023px){:host>app-ui-form-layout-col:first-child{padding-left:0!important}:host>app-ui-form-layout-col:first-child,:host>app-ui-form-layout-col:last-child{max-width:100%}:host .calendar-edit-allDay-date ::ng-deep .ui-datepicker{margin-top:15px}:host [calendarEditAlertRow] app-ui-form-layout-col:last-child{flex:1!important;max-width:100%!important}}"]
                }] }
    ];
    CalendarEditComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return CalendarEditComponent;
}());
export { CalendarEditComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhbGVuZGFyLWVkaXQvY2FsZW5kYXItZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDMUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFFTCxRQUFRLEVBQ1IsVUFBVSxFQUVWLG1CQUFtQixFQUNuQixPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsT0FBTyxFQUFhLE9BQU8sRUFDNUIsTUFBTSxVQUFVLENBQUM7QUFFbEIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUcxQztJQStFRSwrQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXhCaEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZDLGNBQVMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBcUMsSUFBSSxHQUFHLEVBQThCLENBQUM7UUFFdEYsYUFBUSxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7UUFDckMsa0JBQWEsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFLL0Qsc0JBQWlCLEdBQStCLEVB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QzVDLDhDQUFzRTs7SUFHdEUscURBQWlEOztJQUNqRCw0Q0FBMkI7O0lBQzNCLGtEQUEwRDs7SUFDMUQsbURBQW9EOztJQUNwRCxnREFBaUQ7O0lBQ2pELDBDQUF1Qjs7SUFDdkIsMENBQXVCOztJQUN2Qix3Q0FBcUI7O0lBQ3JCLHdDQUFxQjs7SUFDckIsaURBQW9FOztJQUNwRSxpREFBb0M7Ozs7O0lBQ3BDLHVDQUErQjs7Ozs7SUFFbkIsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VsZWN0T3B0aW9ufSBmcm9tICdAYWxsaWFuelNORC91aSc7XG5pbXBvcnQge0NhbGVuZGFyRXZlbnREZXRhaWx9IGZyb20gJy4uLy4uL3NlcnZpY2UvY2FsZW5kYXIvbW9kZWwvQ2FsZW5kYXJFdmVudERldGFpbCc7XG5pbXBvcnQge1xuICBhZGREYXlzLFxuICBhZGRIb3VycyxcbiAgYWRkTWludXRlcyxcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLFxuICBkaWZmZXJlbmNlSW5NaW51dGVzLFxuICBnZXREYXRlLFxuICBnZXRIb3VycyxcbiAgZ2V0TWludXRlcyxcbiAgZ2V0TW9udGgsXG4gIGdldFllYXIsIGlzU2FtZURheSwgc2V0RGF0ZSwgc3ViTWludXRlc1xufSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge1Byb2ZpbGVDb2RlfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7VmFsaWRhdGlvblJlc3VsdH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge1N0cmluZ1V0aWxzfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7TGFuZ3VhZ2V9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC1jYWxlbmRhci1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1lZGl0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IGlzU2F2ZUNsaWNrKCkge3JldHVybiB0aGlzLl9pc1NhdmVDbGljazt9XG4gIHNldCBpc1NhdmVDbGljayhpc1NhdmVDbGljayA6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1NhdmVDbGljayA9IGlzU2F2ZUNsaWNrO1xuICAgIGlmKHRoaXMuX2lzU2F2ZUNsaWNrID09IHRydWUpIHtcbiAgICAgIHRoaXMuc2F2ZUV2ZW50Q2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgY2FsZW5kYXJFdmVudERldGFpbCgpIHtyZXR1cm4gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbH1cbiAgc2V0IGNhbGVuZGFyRXZlbnREZXRhaWwoY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbCkge1xuICAgIGlmKGNhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwgPSBjYWxlbmRhckV2ZW50RGV0YWlsO1xuICAgICAgY29uc29sZS53YXJuKFwidGhpcy5jYWxlbmRhckV2ZW50RGV0YWlsXCIsIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwpO1xuICAgICAgdGhpcy5lZGl0RXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgb3B0aW9uTWFwKCkge3JldHVybiB0aGlzLl9vcHRpb25NYXB9XG4gIHNldCBvcHRpb25NYXAob3B0aW9uTWFwIDogTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+Pikge1xuICAgIHRoaXMuX29wdGlvbk1hcCA9IG9wdGlvbk1hcDtcbiAgICB0aGlzLmFjdGl2aXR5T3B0aW9uTGlzdCA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDAgO2kgPCB0aGlzLl9vcHRpb25NYXAuZ2V0KCdDYWxlbmRhcl9UeXBlJykubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWN0aXZpdHlPcHRpb25MaXN0LnB1c2gobmV3IFNlbGVjdE9wdGlvbih0aGlzLl9vcHRpb25NYXAuZ2V0KCdDYWxlbmRhcl9UeXBlJylbaV0uZ2V0Q29kZSgpLHRoaXMuX29wdGlvbk1hcC5nZXQoJ0NhbGVuZGFyX1R5cGUnKVtpXS5kaXNwbGF5VGV4dCkpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB0cmFuc2xhdGVNYXAoKSB7cmV0dXJuIHRoaXMuX3RyYW5zbGF0ZU1hcH1cbiAgc2V0IHRyYW5zbGF0ZU1hcCh0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPikge1xuICAgIHRoaXMuX3RyYW5zbGF0ZU1hcCA9IHRyYW5zbGF0ZU1hcDtcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgZ2V0IHZpZXdEYXRlKCkge3JldHVybiB0aGlzLl92aWV3RGF0ZX1cbiAgc2V0IHZpZXdEYXRlKHZpZXdEYXRlOiBEYXRlKSB7XG4gICAgY29uc29sZS53YXJuKCd2aWV3RGF0ZUNoYW5nZScpO1xuICAgIHRoaXMuX3ZpZXdEYXRlID0gdmlld0RhdGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdG9kYXlDYWxlbmRhckV2ZW50KCkge3JldHVybiB0aGlzLmNhbGVuZGFyRXZlbnRMaXN0fVxuICBzZXQgdG9kYXlDYWxlbmRhckV2ZW50KGNhbGVuZGFyRXZlbnRMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPikge1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudExpc3QgPSBjYWxlbmRhckV2ZW50TGlzdDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzYXZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdGFydERhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfdmlld0RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcml2YXRlIF9pc1NhdmVDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9vcHRpb25NYXAgOiBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4oKTtcbiAgcHVibGljIHNob3dEYXRlOiBzdHJpbmc7XG4gIHB1YmxpYyBsYW5ndWFnZSA6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBfdHJhbnNsYXRlTWFwIDogTWFwPHN0cmluZyxzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuXG4gIHB1YmxpYyBfY2FsZW5kYXJFdmVudERldGFpbDogQ2FsZW5kYXJFdmVudERldGFpbDsgLy9EZXRhaWxcbiAgcHVibGljIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIHB1YmxpYyBjYWxlbmRhckV2ZW50TGlzdDogQXJyYXk8Q2FsZW5kYXJFdmVudERldGFpbD4gPSBbXTtcbiAgcHVibGljIGFjdGl2aXR5T3B0aW9uTGlzdDogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IFtdO1xuICBwdWJsaWMgYWxlcnRPcHRpb25MaXN0OiBBcnJheTxTZWxlY3RPcHRpb24+ID0gW107XG4gIHB1YmxpYyBzdGFydERhdGU6IERhdGU7XG4gIHB1YmxpYyBzdGFydFRpbWU6IERhdGU7XG4gIHB1YmxpYyBlbmREYXRlOiBEYXRlO1xuICBwdWJsaWMgZW5kVGltZTogRGF0ZTtcbiAgcHVibGljIHZhbGlkYXRpb25SZXN1bHQ6ICBWYWxpZGF0aW9uUmVzdWx0ID0gbmV3IFZhbGlkYXRpb25SZXN1bHQoKTtcbiAgcHVibGljIGV2ZW50TGlzdEJHQ29sb3IgPSAnI2Y5ZjlmOSc7XG4gIHByaXZhdGUgaXNJbml0OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgLy8gd2xlLndhcm4oJ1dpZHRoOiAnLCB0aGlzLndpbmRvd1dpZHRoKTtcbiAgfVxuXG4gIGVkaXRFdmVudCgpIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSkpIHsgLy8gbW9kaWZ5IGFsZXJ0MSBpZiBudWxsXG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSA9ICcnO1xuICAgIH1cbiAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQyKSkgeyAvLyBtb2RpZnkgYWxlcnQyIGlmIG51bGxcbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQyID0gJyc7XG4gICAgfVxuICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuc3RhcnQ7XG4gICAgdGhpcy5lbmREYXRlID0gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQ7XG4gICAgdGhpcy5lbmRUaW1lID0gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQ7XG4gICAgdGhpcy5nZXRBbGVydE9wdGlvbnMoKTsgLy8gY2hhbmdlIGFsZXJ0T3B0aW9uXG5cbiAgICB0aGlzLnNob3dEYXRlID0gKGdldE1vbnRoKHRoaXMuX3ZpZXdEYXRlKSsxKS50b1N0cmluZygpKycvJytnZXREYXRlKHRoaXMuX3ZpZXdEYXRlKS50b1N0cmluZygpKycvJytnZXRZZWFyKHRoaXMuX3ZpZXdEYXRlKS50b1N0cmluZygpO1xuICB9XG5cbiAgc2F2ZUV2ZW50Q2xpY2soKSB7XG4gICAgY29uc29sZS53YXJuKCdzYXZlRXZlbnQnKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Gb3JtKCk7XG4gICAgaWYodGhpcy52YWxpZGF0aW9uUmVzdWx0LmlzVHJ1ZSgpKSB7XG4gICAgICB0aGlzLnNhdmVFdmVudC5lbWl0KHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNhdmVFdmVudC5lbWl0KG51bGwpO1xuICAgICAgLy8gdGhpcy5jb21wbGV0ZVNhdmUuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGlvbkZvcm0oKSB7IC8vIGNoZWNrIGZvcm0gYmVmb3JlIHN1Ym1pdFxuICAgIGxldCBpbnB1dExpc3QgPSBbeydtYXhMZW5ndGgnOjYwLCdmaWVsZCc6ICd0aXRsZScsJ2lzUmVxdWlyZWQnOiB0cnVlfSxcbiAgICAgICAgICAgICAgICAgICAgICB7J21heExlbmd0aCc6MTAwLCdmaWVsZCc6ICdsb2NhdGlvbicsJ2lzUmVxdWlyZWQnOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgICAgICAgeydtYXhMZW5ndGgnOjUwMCwnZmllbGQnOiAncmVtYXJrJywgJ2lzUmVxdWlyZWQnOiBmYWxzZX1dO1xuICAgIGxldCBzZWxlY3RMaXN0ID0gWydhY3Rpdml0eScsICdhbGVydDEnLCAnYWxlcnQyJ107XG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RmlsZWQpID0+IHtcbiAgICAgIHRoaXMub25WYWxpZGF0aW9uSW5wdXQoaW5wdXRGaWxlZC5tYXhMZW5ndGgsaW5wdXRGaWxlZC5maWVsZCxpbnB1dEZpbGVkLmlzUmVxdWlyZWQpO1xuICAgIH0pO1xuICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0RmllbGQpID0+IHtcbiAgICAgIHRoaXMub25WYWxpZGF0aW9uU2VsZWN0KHNlbGVjdEZpZWxkKVxuICAgIH0pO1xuICAgIHRoaXMub25WYWxpZGF0aW9uVGltZUZvcm1hdCgpO1xuICAgIHRoaXMub25WYWxpZGF0aW9uVGltZSgpO1xuICAgIGlmICh0aGlzLnZhbGlkYXRpb25SZXN1bHQgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9FcnJvcigpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gIH1cblxuICBvblZhbGlkYXRpb25JbnB1dChtYXhMZW5ndGg6IG51bWJlciwgZmllbGQ6IHN0cmluZywgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKSB7IC8vIGNoZWNrIGlucHV0IGZpbGVkIHdoZW4gdHlwaW5nXG4gICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKGZpZWxkKTtcbiAgICBjb25zb2xlLmRlYnVnKCdpc1JlcXVpcmVkJyxpc1JlcXVpcmVkLCdsZW5ndGgnLHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWxbZmllbGRdLmxlbmd0aCwndmFsJywnWycrdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbFtmaWVsZF0rJ10nKTtcbiAgICBpZihpc1JlcXVpcmVkKSB7XG4gICAgICBpZih0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsW2ZpZWxkXSAhPSB1bmRlZmluZWQgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eShTdHJpbmdVdGlscy50cmltKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWxbZmllbGRdKSkpXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChmaWVsZCwgJ3JlcXVpcmVkJyk7XG4gICAgfVxuICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbFtmaWVsZF0pKSB7XG4gICAgICBpZih0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsW2ZpZWxkXS5sZW5ndGggPiBtYXhMZW5ndGggJiYgbWF4TGVuZ3RoICE9IDApXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChmaWVsZCwnbWF4TGVuZ3RoJyk7XG4gICAgfVxuICB9XG5cbiAgb25WYWxpZGF0aW9uU2VsZWN0KGZpZWxkOiBzdHJpbmcpIHsgLy8gY2hlY2sgc2VsZWN0IGZpbGVkIGFmdGVyIHNlbGVjdGVkXG4gICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKGZpZWxkKTtcbiAgICBjb25zb2xlLndhcm4oJ2ZpZWxkJyxmaWVsZCk7XG4gICAgaWYoZmllbGQgPT0gJ2FjdGl2aXR5Jykge1xuICAgICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hY3Rpdml0eSA9PSBudWxsIHx8IHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWN0aXZpdHkgPT0gJycpXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcChmaWVsZCwgJ3JlcXVpcmVkJyk7XG4gICAgfVxuICAgIGlmKGZpZWxkID09ICdhbGVydDEnIHx8IGZpZWxkID09ICdhbGVydDInKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuZGVsZXRlRXJyb3IoJ2FsZXJ0MScpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmRlbGV0ZUVycm9yKCdhbGVydDInKTtcbiAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuaXNBbGVydCAmJiB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MSA9PSAnJyAmJiB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MiA9PSAnJykgLy8gaWYgZGlkbid0IHNlbGVjdCBhbnkgYWxlcnRcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCdhbGVydDEnLCAncmVxdWlyZWQnKTtcbiAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuaXNBbGVydCAmJiAodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDEgPT0gdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDIpICYmIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQxICE9ICcnKSAvLyBpZiBzZWxlY3Qgc2FtZSBhbGVydFxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQuc2V0RXJyb3JNYXAoJ2FsZXJ0MicsICdzYW1lQWxlcnQnKTtcbiAgICB9XG4gIH1cblxuICBvblZhbGlkYXRpb25UaW1lRm9ybWF0KCkge1xuICAgIGxldCB0aW1lTGlzdCA9IFsnc3RhcnREYXRlJywgJ3N0YXJ0VGltZScsICdlbmREYXRlJywgJ2VuZFRpbWUnLCAndGltZSddO1xuICAgIHRpbWVMaXN0LmZvckVhY2goICh0aW1lRmllbGQpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcih0aW1lRmllbGQpOyAvL2NsZWFyIHRpbWVFcnJvclxuICAgICAgaWYodGltZUZpZWxkICE9ICd0aW1lJyAmJiB0aGlzW3RpbWVGaWVsZF0gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKHRpbWVGaWVsZCwgJ2Zvcm1hdEVycm9yJyk7IC8vIGNoZWNrIGZvcm1hdEVycm9yXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblZhbGlkYXRpb25UaW1lKCkgeyAvLyB2YWxpZGF0aW9uIERhdGUgb3IgVGltZVxuICAgIC8vIGxldCBpc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHRpbWVMaXN0ID0gWydzdGFydERhdGUnLCAnc3RhcnRUaW1lJywgJ2VuZERhdGUnLCAnZW5kVGltZSddO1xuICAgIHRpbWVMaXN0LmZvckVhY2goICh0aW1lRmllbGQpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5kZWxldGVFcnJvcih0aW1lRmllbGQpO1xuICAgICAgICAvLyBpZih0aGlzLnZhbGlkYXRpb25SZXN1bHQuaXNFcnJvcih0aW1lRmllbGQpKVxuICAgICAgICAgIC8vIGlzRXJyb3IgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIGlmKCFpc0Vycm9yKSB7XG4gICAgICB0aGlzLmNvbWJpbmVUaW1lKCk7XG4gICAgICBpZiAoZGlmZmVyZW5jZUluTWludXRlcyh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmVuZCx0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0KSA8IDE1ICYmIGRpZmZlcmVuY2VJbk1pbnV0ZXModGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQsdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydCkgPj0gMCAmJiB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsbERheSAhPSB0cnVlKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdC5zZXRFcnJvck1hcCgndGltZScsICdtaW5UaW1lJyk7XG4gICAgICB9IGVsc2UgaWYoZGlmZmVyZW5jZUluTWludXRlcyh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmVuZCx0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0KSA8IDApIHtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0LnNldEVycm9yTWFwKCd0aW1lJywgJ2Vycm9yVGltZScpO1xuICAgICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGNvbWJpbmVUaW1lKCkge1xuICAgIGlmICh0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsbERheSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0ID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLnN0YXJ0RGF0ZSksZ2V0TW9udGgodGhpcy5zdGFydERhdGUpLCBnZXREYXRlKHRoaXMuc3RhcnREYXRlKSwgMCwgMCk7XG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmVuZCA9IG5ldyBEYXRlKGdldFllYXIodGhpcy5lbmREYXRlKSwgZ2V0TW9udGgodGhpcy5lbmREYXRlKSwgZ2V0RGF0ZSh0aGlzLmVuZERhdGUpLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5zdGFydCA9IG5ldyBEYXRlKGdldFllYXIodGhpcy5zdGFydERhdGUpLGdldE1vbnRoKHRoaXMuc3RhcnREYXRlKSwgZ2V0RGF0ZSh0aGlzLnN0YXJ0RGF0ZSksIGdldEhvdXJzKHRoaXMuc3RhcnRUaW1lKSwgZ2V0TWludXRlcyh0aGlzLnN0YXJ0VGltZSkpO1xuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5lbmQgPSBuZXcgRGF0ZShnZXRZZWFyKHRoaXMuZW5kRGF0ZSksIGdldE1vbnRoKHRoaXMuZW5kRGF0ZSksIGdldERhdGUodGhpcy5lbmREYXRlKSwgZ2V0SG91cnModGhpcy5lbmRUaW1lKSwgZ2V0TWludXRlcyh0aGlzLmVuZFRpbWUpKTtcbiAgICB9XG4gIH1cblxuICBvblRpbWVDaGFuZ2UoY2hhbmdlRGF0ZSxmaWVsZDogc3RyaW5nKSB7XG4gICAgLy9jb252ZXJ0IHRvIGRhdGUgcGFyYW1cbiAgICBpZihmaWVsZCA9PSAnc3RhcnREYXRlJykgdGhpcy5zdGFydERhdGUgPSBjaGFuZ2VEYXRlO1xuICAgIGVsc2UgaWYoZmllbGQgPT0gJ3N0YXJ0VGltZScpIHRoaXMuc3RhcnRUaW1lID0gY2hhbmdlRGF0ZTtcbiAgICBlbHNlIGlmKGZpZWxkID09ICdlbmREYXRlJykgdGhpcy5lbmREYXRlID0gY2hhbmdlRGF0ZTtcbiAgICBlbHNlIGlmKGZpZWxkID09ICdlbmRUaW1lJykgdGhpcy5lbmRUaW1lID0gY2hhbmdlRGF0ZTtcblxuICAgIHRoaXMub25WYWxpZGF0aW9uVGltZUZvcm1hdCgpO1xuICAgIGlmKCF0aGlzLmlzSW5pdCkgeyAvLyB0byBhdm9pZCBjaGFuZ2Ugc3RhcnREYXRlIGluIHRoZSBmaXJzdCBUaW1lXG4gICAgICBpZiAoZmllbGQgPT0gJ3N0YXJ0RGF0ZScpIHtcbiAgICAgICAgdGhpcy5vblN0YXJ0RGF0ZUNoYW5nZSgpXG4gICAgICB9IGVsc2UgaWYgKGZpZWxkID09ICdzdGFydFRpbWUnKSB7XG4gICAgICAgIHRoaXMub25TdGFydFRpbWVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vblZhbGlkYXRpb25UaW1lKCk7XG4gICAgdGhpcy5pc0luaXQgPSBmYWxzZTtcblxuICB9XG5cbiAgb25TdGFydERhdGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBzZXREYXRlKHRoaXMuc3RhcnRUaW1lLCBnZXREYXRlKHRoaXMuc3RhcnREYXRlKSk7XG4gICAgdGhpcy5lbmREYXRlID0gYWRkSG91cnModGhpcy5zdGFydERhdGUsIDEpO1xuICAgIHRoaXMuZW5kVGltZSA9IGFkZEhvdXJzKHRoaXMuc3RhcnRUaW1lLCAxKTtcbiAgICB0aGlzLnN0YXJ0RGF0ZUNoYW5nZS5lbWl0KHRoaXMuc3RhcnREYXRlKTtcbiAgfVxuXG4gIG9uU3RhcnRUaW1lQ2hhbmdlKCkge1xuICAgIHRoaXMuZW5kRGF0ZSA9IGFkZEhvdXJzKHRoaXMuc3RhcnRUaW1lLCAxKTtcbiAgICB0aGlzLmVuZFRpbWUgPSBhZGRIb3Vycyh0aGlzLnN0YXJ0VGltZSwgMSk7XG4gIH1cblxuICBvbklzQWxsRGF5Q2hhbmdlKCkge1xuICAgIHRoaXMub25Jc0FsZXJ0Q2hhbmdlKCk7XG4gICAgaWYoIXRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxsRGF5KSB7XG4gICAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY3VycmVudFRpbWUgPSBhZGRNaW51dGVzKGN1cnJlbnRUaW1lLCAoNSAtIGdldE1pbnV0ZXMoY3VycmVudFRpbWUpICUgNSkpO1xuICAgICAgY3VycmVudFRpbWUgPSBhZGRIb3VycyhjdXJyZW50VGltZSwgMSk7XG4gICAgICAvLyB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLnN0YXJ0ID0gbmV3IERhdGUoZ2V0WWVhcih0aGlzLnN0YXJ0VGltZSksIGdldE1vbnRoKHRoaXMuc3RhcnRUaW1lKSwgZ2V0RGF0ZSh0aGlzLnN0YXJ0VGltZSksZ2V0SG91cnMoY3VycmVudFRpbWUpLCBnZXRNaW51dGVzKGN1cnJlbnRUaW1lKSk7XG4gICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIC8vIHRoaXMuZW5kRGF0ZSA9IGFkZEhvdXJzKHRoaXMuc3RhcnRUaW1lLCAxKTtcbiAgICAgIC8vIHRoaXMuZW5kVGltZSA9IGFkZEhvdXJzKHRoaXMuc3RhcnRUaW1lLCAxKTtcbiAgICB9XG4gIH1cblxuICBvbklzQWxlcnRDaGFuZ2UoKSB7XG4gICAgdGhpcy5nZXRBbGVydE9wdGlvbnMoKTsgLy9yZXNldCBvcHRpb25MaXN0XG4gICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5pc0FsZXJ0ID09IHRydWUgJiYgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGxEYXkgPT0gdHJ1ZSkgeyAvLyByZXNldCBEZWZhdWx0IHNlbGVjdGlvblxuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDEgPSAnMic7XG4gICAgICB0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsZXJ0MiA9ICcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5pc0FsZXJ0ID09IHRydWUgJiYgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGxEYXkgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyRXZlbnREZXRhaWwuYWxlcnQxID0gJzgnO1xuICAgICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC5hbGVydDIgPSAnJztcbiAgICB9XG4gIH1cblxuICBnZXRBbGVydE9wdGlvbnMoKSB7XG4gICAgdGhpcy5hbGVydE9wdGlvbkxpc3QgPSBbXTtcblxuICAgIGlmKHRoaXMuX29wdGlvbk1hcC5nZXQoJ0NhbGVuZGFyX1JlbWluZFRpbWUnKSkge1xuICAgICAgdGhpcy5fb3B0aW9uTWFwLmdldCgnQ2FsZW5kYXJfUmVtaW5kVGltZScpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBpZih0aGlzLl9jYWxlbmRhckV2ZW50RGV0YWlsLmFsbERheSA9PSBKU09OLnBhcnNlKG9wdGlvbi5nZXRBcmd1bWVudHMoKSkuaXNBbGxEYXkpIHtcbiAgICAgICAgICB0aGlzLmFsZXJ0T3B0aW9uTGlzdC5wdXNoKG5ldyBTZWxlY3RPcHRpb24ob3B0aW9uLmdldENvZGUoKSxvcHRpb24uZGlzcGxheVRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9FcnJvcigpIHtcbiAgICBsZXQgZXJyb3JCbG9jayA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXJyb3ItbXNnJyk7XG4gICAgaWYoZXJyb3JCbG9jay5pdGVtKDApKSB7XG4gICAgICBlcnJvckJsb2NrLml0ZW0oMCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICB9XG4gIH1cblxuICBvblRpdGxlQ2hhbmdlKHZhbCl7XG4gICAgdGhpcy5fY2FsZW5kYXJFdmVudERldGFpbC50aXRsZSA9IHZhbDtcbiAgICB0aGlzLm9uVmFsaWRhdGlvbklucHV0KDYwLCd0aXRsZScsdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==