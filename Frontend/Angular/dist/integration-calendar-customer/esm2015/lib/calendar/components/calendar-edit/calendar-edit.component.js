/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostListener, Output, EventEmitter, ElementRef, Inject, Optional } from '@angular/core';
import { MetaService, FormMetaComponent, ProfileCodeService, DefaultMetaParser, APIExecutor, showRuleToken } from '@allianzSND/core';
import { format } from 'date-fns';
import { Language } from '@allianzSND/core';
import { calendarEditMetaControllerToken } from '../../injection-token';
import { DefaultCalendarEditMetaController } from './DefaultCalendarEditMetaController';
import { addProgressPointToken } from '../../../customer/injectionToken/injection-token';
export class CalendarEditComponent extends FormMetaComponent {
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
        ;
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
if (false) {
    /** @type {?} */
    CalendarEditComponent.prototype.isMetaDataDone;
    /** @type {?} */
    CalendarEditComponent.prototype.isSaveClickChange;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype.editType;
    /** @type {?} */
    CalendarEditComponent.prototype.saveEvent;
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
    CalendarEditComponent.prototype.customerClientOptionList;
    /** @type {?} */
    CalendarEditComponent.prototype.alertOptionList;
    /** @type {?} */
    CalendarEditComponent.prototype.startDate;
    /** @type {?} */
    CalendarEditComponent.prototype.endDate;
    /** @type {?} */
    CalendarEditComponent.prototype.eventListBGColor;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype._metaController;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype._customerClientID;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    CalendarEditComponent.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype.addProgressPoint;
    /**
     * @type {?}
     * @private
     */
    CalendarEditComponent.prototype.showRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jb21wb25lbnRzL2NhbGVuZGFyLWVkaXQvY2FsZW5kYXItZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBZ0IsV0FBVyxFQUFrQixpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQWMsYUFBYSxFQUFZLE1BQU0sa0JBQWtCLENBQUM7QUFFekwsT0FBTyxFQUlMLE1BQU0sRUFDUCxNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFTekYsTUFBTSw0QkFBNkIsU0FBUSxpQkFBaUI7Ozs7Ozs7Ozs7OztJQW1HMUQsWUFDVSxVQUFzQixFQUNwQixXQUF3QixFQUNsQyxrQkFBc0MsRUFDdEMsVUFBNkIsRUFDN0IsWUFBeUIsRUFDekIscUJBQXdELEVBQ0gsb0JBQW9DLEVBQ3RDLGdCQUFrQyxFQUMxQyxRQUFrQjtRQUU3RCxLQUFLLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQVZ6RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3BC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QjtZQUFFLFdBQVc7WUFVaEgsaUNBQWlDOzRDQW9IckMsUUFBUSxZQUFJLE1BQU0sU0FBQywrQkFBK0I7NENBQ2xELFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzRDQUN4QyxRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7Ozs2QkF6R2xDLE1BQU07MEJBRU4sS0FBSztnQ0FjTCxNQUFNO3VCQUtOLEtBQUs7K0JBdUJMLEtBQUs7MkJBVUwsS0FBSzt1QkFPTCxLQUFLO2lDQVNMLEtBQUs7d0JBTUwsTUFBTTsrQkFpSE4sS0FBSzt1QkFtQkwsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWhOekMsK0NBQXFFOztJQWdCckUsa0RBQXdFOzs7OztJQUV4RSwwQ0FBa0I7Ozs7O0lBQ2xCLHlDQUF5Qjs7SUF5RHpCLDBDQUF5Qzs7Ozs7SUFFekMsMENBQXFDOzs7OztJQUNyQyw2Q0FBc0M7O0lBQ3RDLHlDQUF3Qjs7SUFDeEIseUNBQTJDOztJQUMzQyw4Q0FBc0U7O0lBR3RFLHFEQUFpRDs7SUFDakQsNENBQTJCOztJQUMzQixrREFBMEQ7O0lBQzFELG1EQUFvRDs7SUFDcEQseURBQTBEOztJQUMxRCxnREFBaUQ7O0lBQ2pELDBDQUF1Qjs7SUFDdkIsd0NBQXFCOztJQUNyQixpREFBd0M7Ozs7O0lBQ3hDLGdEQUF3Qzs7Ozs7SUE2RnhDLGtEQUErQjs7Ozs7SUExRjdCLDJDQUE4Qjs7Ozs7SUFDOUIsNENBQWtDOzs7OztJQU1sQyxpREFBcUY7Ozs7O0lBQ3JGLHlDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uLCBNZXRhU2VydmljZSwgTWV0YUNvbnRyb2xsZXIsIEZvcm1NZXRhQ29tcG9uZW50LCBQcm9maWxlQ29kZVNlcnZpY2UsIERlZmF1bHRNZXRhUGFyc2VyLCBBUElFeGVjdXRvciwgTWV0YUNvbHVtbiwgc2hvd1J1bGVUb2tlbiwgc2hvd1J1bGUgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnREZXRhaWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuaW1wb3J0IHtcbiAgZ2V0RGF0ZSxcbiAgZ2V0TW9udGgsXG4gIGdldFllYXIsXG4gIGZvcm1hdFxufSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgY2FsZW5kYXJFZGl0TWV0YUNvbnRyb2xsZXJUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBEZWZhdWx0Q2FsZW5kYXJFZGl0TWV0YUNvbnRyb2xsZXIgfSBmcm9tICcuL0RlZmF1bHRDYWxlbmRhckVkaXRNZXRhQ29udHJvbGxlcic7XG5pbXBvcnQgeyBhZGRQcm9ncmVzc1BvaW50VG9rZW4gfSBmcm9tICcuLi8uLi8uLi9jdXN0b21lci9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgQWRkUHJvZ3Jlc3NQb2ludCB9IGZyb20gJy4uLy4uLy4uL2N1c3RvbWVyL2ludGVyZmFjZS9BZGRQcm9ncmVzc1BvaW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtY2FsZW5kYXItZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItZWRpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRWRpdENvbXBvbmVudCBleHRlbmRzIEZvcm1NZXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIEBPdXRwdXQoKSBpc01ldGFEYXRhRG9uZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpc1NhdmVDbGljaygpIHsgcmV0dXJuIHRoaXMuX2lzU2F2ZUNsaWNrOyB9XG4gIHNldCBpc1NhdmVDbGljayhpc1NhdmVDbGljazogYm9vbGVhbikge1xuICAgIGNvbnNvbGUubG9nKFwiQ2FsZW5kYXJFZGl0IHNldCBpc1NhdmVDbGljazpcIiwgaXNTYXZlQ2xpY2spO1xuICAgIHRoaXMuX2lzU2F2ZUNsaWNrID0gaXNTYXZlQ2xpY2s7XG4gICAgaWYgKHRoaXMuX2lzU2F2ZUNsaWNrID09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2sgQ2FsZW5kYXIgZWRpdCBzYXZlXCIpXG4gICAgICB0aGlzLm9uQnRuQ2xpY2soJ3N1Ym1pdCcsICdzYXZlJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc1NhdmVDbGlja0NoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIGlzU2F2ZUNsaWNrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfY2xpZW50SUQ7XG4gIHByaXZhdGUgZWRpdFR5cGUgPSAnYWRkJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IGNsaWVudElEKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJRDtcbiAgfVxuICBwdWJsaWMgc2V0IGNsaWVudElEKHZhbHVlKSB7XG4gICAgdGhpcy5fY2xpZW50SUQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuZWRpdFR5cGUgPSAnYWRkJztcbiAgICB9XG4gICAgZWxzZVxuICAgICAgdGhpcy5lZGl0VHlwZSA9ICdlZGl0JztcbiAgICBpZiAodGhpcy5pc01ldGFMb2FkZWQoKSlcbiAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXRhUGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcIl9jbGllbnRJRFwiOiB0aGlzLl9jbGllbnRJRFxuICAgIH07XG4gIH1cblxuXG4gIC8vIEZvcuWuouaItlNlbGVjdOeUqOeahOmBuOmghVxuICBASW5wdXQoKVxuICBnZXQgY3VzdG9tZXJJdGVtTGlzdCgpIHsgcmV0dXJuIHRoaXMuY3VzdG9tZXJDbGllbnRPcHRpb25MaXN0IH1cbiAgc2V0IGN1c3RvbWVySXRlbUxpc3QoY3VzdG9tZXJJdGVtTGlzdDogQXJyYXk8U2VsZWN0T3B0aW9uPikge1xuICAgIGNvbnNvbGUubG9nKFwiY2FsZW5kYXItZWRpdCBzZXQgY3VzdG9tZXJJdGVtTGlzdDpcIiwgY3VzdG9tZXJJdGVtTGlzdCk7XG4gICAgdGhpcy5jdXN0b21lckNsaWVudE9wdGlvbkxpc3QgPSBjdXN0b21lckl0ZW1MaXN0O1xuICAgIGlmICh0aGlzLl9kYXRhKVxuICAgICAgdGhpcy5maWxsRGVmYXVsdFZhbCgpO1xuICB9XG5cbiAgLy8gRm9yIEV2ZW50TGlzdOeUqOeahFxuICBASW5wdXQoKVxuICBnZXQgdHJhbnNsYXRlTWFwKCkgeyByZXR1cm4gdGhpcy5fdHJhbnNsYXRlTWFwIH1cbiAgc2V0IHRyYW5zbGF0ZU1hcCh0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICB0aGlzLl90cmFuc2xhdGVNYXAgPSB0cmFuc2xhdGVNYXA7XG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIGdldCB2aWV3RGF0ZSgpIHsgcmV0dXJuIHRoaXMuX3ZpZXdEYXRlIH1cbiAgc2V0IHZpZXdEYXRlKHZpZXdEYXRlOiBEYXRlKSB7XG4gICAgY29uc29sZS53YXJuKCd2aWV3RGF0ZUNoYW5nZScpO1xuICAgIHRoaXMuX3ZpZXdEYXRlID0gdmlld0RhdGU7XG4gIH1cblxuXG4gIC8vIEZvciBFdmVudExpc3TnlKjnmoRcbiAgQElucHV0KClcbiAgZ2V0IHRvZGF5Q2FsZW5kYXJFdmVudCgpIHsgcmV0dXJuIHRoaXMuY2FsZW5kYXJFdmVudExpc3QgfVxuICBzZXQgdG9kYXlDYWxlbmRhckV2ZW50KGNhbGVuZGFyRXZlbnRMaXN0OiBBcnJheTxDYWxlbmRhckV2ZW50RGV0YWlsPikge1xuICAgIHRoaXMuY2FsZW5kYXJFdmVudExpc3QgPSBjYWxlbmRhckV2ZW50TGlzdDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzYXZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfdmlld0RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcml2YXRlIF9pc1NhdmVDbGljazogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd0RhdGU6IHN0cmluZztcbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgX3RyYW5zbGF0ZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cblxuICBwdWJsaWMgX2NhbGVuZGFyRXZlbnREZXRhaWw6IENhbGVuZGFyRXZlbnREZXRhaWw7IC8vRGV0YWlsXG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgY2FsZW5kYXJFdmVudExpc3Q6IEFycmF5PENhbGVuZGFyRXZlbnREZXRhaWw+ID0gW107XG4gIHB1YmxpYyBhY3Rpdml0eU9wdGlvbkxpc3Q6IEFycmF5PFNlbGVjdE9wdGlvbj4gPSBbXTtcbiAgcHVibGljIGN1c3RvbWVyQ2xpZW50T3B0aW9uTGlzdDogQXJyYXk8U2VsZWN0T3B0aW9uPiA9IFtdO1xuICBwdWJsaWMgYWxlcnRPcHRpb25MaXN0OiBBcnJheTxTZWxlY3RPcHRpb24+ID0gW107XG4gIHB1YmxpYyBzdGFydERhdGU6IERhdGU7XG4gIHB1YmxpYyBlbmREYXRlOiBEYXRlO1xuICBwdWJsaWMgZXZlbnRMaXN0QkdDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIHByaXZhdGUgX21ldGFDb250cm9sbGVyOiBNZXRhQ29udHJvbGxlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBtZXRhRXhlY3V0b3I6IEFQSUV4ZWN1dG9yLFxuICAgIGRlZmF1bHRNZXRhQ29udHJvbGxlcjogRGVmYXVsdENhbGVuZGFyRWRpdE1ldGFDb250cm9sbGVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY2FsZW5kYXJFZGl0TWV0YUNvbnRyb2xsZXJUb2tlbikgY3VzdG9tTWV0YUNvbnRyb2xsZXI6IE1ldGFDb250cm9sbGVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoYWRkUHJvZ3Jlc3NQb2ludFRva2VuKSBwcml2YXRlIGFkZFByb2dyZXNzUG9pbnQ6IEFkZFByb2dyZXNzUG9pbnQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93UnVsZVRva2VuKSBwcml2YXRlIHNob3dSdWxlOiBzaG93UnVsZSxcbiAgKSB7XG4gICAgc3VwZXIobWV0YVNlcnZpY2UsIHByb2ZpbGVDb2RlU2VydmljZSwgbWV0YVBhcnNlciwgbWV0YUV4ZWN1dG9yKTtcbiAgICBjb25zb2xlLmxvZyhcImNhbGVuZGFyLWVkaXQgY29uc3RydWN0OlwiLCBkZWZhdWx0TWV0YUNvbnRyb2xsZXIsIGN1c3RvbU1ldGFDb250cm9sbGVyKTtcbiAgICBpZiAoY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICB0aGlzLl9tZXRhQ29udHJvbGxlciA9IGN1c3RvbU1ldGFDb250cm9sbGVyO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX21ldGFDb250cm9sbGVyID0gZGVmYXVsdE1ldGFDb250cm9sbGVyO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuZWRpdEV2ZW50KCk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmICh0eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgLy9vZmZsaW5lIGFkZCBwcm9ncmVzcyBwb2ludFxuICAgICAgY29uc29sZS5sb2coXCJjYWxlbmRhciBhZGRQcm9ncmVzc1BvaW50XCIsIHRoaXMuYWRkUHJvZ3Jlc3NQb2ludCk7XG4gICAgICBpZiAodGhpcy5hZGRQcm9ncmVzc1BvaW50ICYmIHRoaXMuZWRpdFR5cGUgPT0gXCJhZGRcIikge1xuICAgICAgICB0aGlzLmFkZFByb2dyZXNzUG9pbnQuYWRkQ2FsZW5kYXJQb2ludCh0aGlzLl9kYXRhLCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZUV2ZW50LmVtaXQoeyBkYXRhOiB0aGlzLl9kYXRhLCB0eXBlOiB0aGlzLmVkaXRUeXBlIH0pO1xuICAgIH1cbiAgICB0aGlzLl9tZXRhQ29udHJvbGxlci5idG5DbGljayh0eXBlLCBpZCwgdGhpcy5fZGF0YSk7XG4gIH1cbiAgb25WYWxpZGF0ZUFsbCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGlvblJlc3VsdC5pc1RydWUoKSkge1xuICAgICAgLy9JZiBiYXNpYyB2YWxpZGF0aW9uIGhhcyBlcnJvci5cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGlvblJlc3VsdC5pc0Vycm9yKCdOb3RlJykpXG4gICAgICAgIGFsZXJ0KFwiTm90ZSBcIiArIHRoaXMudmFsaWRhdGlvblJlc3VsdC5nZXRFcnJvck1zZyhcIk5vdGVcIikpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX21ldGFDb250cm9sbGVyLm9uVmFsaWRhdGVBbGwodGhpcy5fZGF0YSwgdGhpcy52YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwib25WYWxpZGF0ZTpcIiwgcmVzdWx0KTtcbiAgICB9XG5cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB0aGlzLnNhdmVFdmVudC5lbWl0KHsgZGF0YTogbnVsbCwgdHlwZTogJ2ZhaWwnIH0pO1xuICAgICAgdGhpcy5zY3JvbGxUb0Vycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfVxuICBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuICdjYWxlbmRhckVkaXQnO1xuICB9XG4gIG9uVmFsdWVDaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGdyb3VwSWQ6IHN0cmluZyA9IG51bGwsIGluZGV4OiBudW1iZXIgPSAtMSkge1xuICAgIHRoaXMuX2RhdGFbY29sdW1uXSA9IHZhbHVlO1xuICAgIHRoaXMuX21ldGFDb250cm9sbGVyLm9uVmFsdWVDaGFuZ2UoY29sdW1uLCB2YWx1ZSwgZ3JvdXBJZCwgaW5kZXgsIHRoaXMuX2RhdGEsIHRoaXMudmFsaWRhdGlvblJlc3VsdCk7XG4gIH1cblxuICBvbkRhdGFVcGRhdGVkKCkge1xuICAgIHN1cGVyLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICBjb25zb2xlLmxvZyhcIkNhbGVuZGFyIEVkaXQgRGF0YVVwZGF0ZWQ6XCIsIHRoaXMuX2RhdGEpO1xuICAgIHRoaXMuX2RhdGFbXCJWaWV3RGF0ZVwiXSA9IHRoaXMuX3ZpZXdEYXRlO1xuICAgIHRoaXMuX2RhdGFbXCJFZGl0VHlwZVwiXSA9IHRoaXMuZWRpdFR5cGU7XG4gICAgdGhpcy5fZGF0YVtcIkN1c3RvbWVyQ2xpZW50SURcIl0gPSB0aGlzLl9jdXN0b21lckNsaWVudElEID8gdGhpcy5fY3VzdG9tZXJDbGllbnRJRCA6IHRoaXMuX2RhdGFbXCJDdXN0b21lckNsaWVudElEXCJdOztcbiAgICB0aGlzLmZpbGxEZWZhdWx0VmFsKCk7XG4gICAgaWYgKHRoaXMuX21ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLl9tZXRhQ29udHJvbGxlci5vbkRhdGFVcGRhdGVkKHRoaXMuX2RhdGEpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmlzTWV0YURhdGFEb25lLmVtaXQodHJ1ZSk7XG5cbiAgfVxuXG4gIHNob3VsZEhpZGRlbihpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IGFsZXJ0SWQgPSBbJ0FsZXJ0MScsICdBbGVydDInXTtcbiAgICBsZXQgdGltZVBpY2tlcklkID0gWydTdGFydFRpbWUnLCAnRW5kVGltZSddO1xuICAgIGlmIChhbGVydElkLmluZGV4T2YoaWQpID4gLTEpXG4gICAgICByZXR1cm4gdGhpcy5fZGF0YVtcIklzQWxlcnRcIl0gPT09ICdOJztcbiAgICBlbHNlIGlmICh0aW1lUGlja2VySWQuaW5kZXhPZihpZCkgPiAtMSlcbiAgICAgIHJldHVybiB0aGlzLl9kYXRhW1wiSXNBbGxEYXlcIl0gPT09ICdZJztcbiAgICBlbHNlIGlmIChpZCA9PT0gJ0N1c3RvbWVyQ2xpZW50SUQnKVxuICAgICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyQ2xpZW50SUQubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgX2N1c3RvbWVyQ2xpZW50SUQgPSAnJztcblxuICBASW5wdXQoKVxuICBnZXQgY3VzdG9tZXJDbGllbnRJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJDbGllbnRJRDtcbiAgfVxuXG4gIHNldCBjdXN0b21lckNsaWVudElEKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21lckNsaWVudElEID0gaWQ7XG4gIH1cblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCByb3dDb25maWcoKTogQXJyYXk8QXJyYXk8TWV0YUNvbHVtbj4+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uZmlnLlJvd3M7XG4gIH1cblxuXG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICAgIC8vIHdsZS53YXJuKCdXaWR0aDogJywgdGhpcy53aW5kb3dXaWR0aCk7XG4gIH1cblxuICBwcml2YXRlIGZpbGxEZWZhdWx0VmFsKCkge1xuICAgIHRoaXMuX2RhdGFbXCJDdXN0b21lckNsaWVudElET3B0aW9uXCJdID0gdGhpcy5jdXN0b21lckNsaWVudE9wdGlvbkxpc3Q7XG4gIH1cblxuICBlZGl0RXZlbnQoKSB7XG4gICAgdGhpcy5zaG93RGF0ZSA9IHRoaXMuX2NvbnZlcnREYXRlKHRoaXMuX3ZpZXdEYXRlKTtcbiAgICBjb25zb2xlLmxvZyhcIkVkaXRFdmVudCBzaG93RGF0ZTpcIiwgdGhpcy5zaG93RGF0ZSk7XG4gIH1cblxuICBpc01ldGFMb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUxvYWRlZDtcbiAgfVxuXG4gIHNjcm9sbFRvRXJyb3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2luIHNjcm9sbFRvRXJyb3InKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBlcnJvckJsb2NrID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1zZycpO1xuICAgICAgbGV0IHNjcm9sbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItZWRpdC1jb250ZW50JykucXVlcnlTZWxlY3RvcignLmZvcm0tc2Nyb2xsLWNvbnRlbnQnKTtcbiAgICAgIGlmIChlcnJvckJsb2NrICYmIHNjcm9sbENvbnRlbnQpIHtcbiAgICAgICAgbGV0IG1vdmUgPSBlcnJvckJsb2NrLm9mZnNldFRvcCAtIDUwO1xuICAgICAgICBzY3JvbGxDb250ZW50LnNjcm9sbFRvKHsgdG9wOiBtb3ZlLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbFRvRXJyb3InLCBtb3ZlKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxUb0Vycm9yJywgc2Nyb2xsQ29udGVudCxlcnJvckJsb2NrKTtcbiAgICAgIFxuICAgIH0sIDIwMClcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnZlcnREYXRlKGRhdGU6IERhdGUpIHtcbiAgICBpZiAodGhpcy5zaG93UnVsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnTU0vZGQveXl5eScpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=