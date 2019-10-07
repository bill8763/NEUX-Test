/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { UiCalendarMonthComponent } from '../ui-calendar-month/ui-calendar-month.component';
import { format, getMonth } from 'date-fns';
import { animationCollapse } from '../../../model/Animation/AnimationCollapse';
import { showRuleToken } from '@allianzSND/core';
var UiCalendarMonthCollapseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiCalendarMonthCollapseComponent, _super);
    function UiCalendarMonthCollapseComponent(_changeDetector, showRule) {
        var _this = _super.call(this) || this;
        _this._changeDetector = _changeDetector;
        _this.showRule = showRule;
        _this.statusOpenClose = 'closed';
        // fix date Format
        _this.yearFormat = 'yyyy';
        _this.monthFormat = 'MM';
        _this.dayFormat = 'dd';
        _this.weekFormat = 'EE';
        _this._isCollapse = false;
        _this.isCollapseStyle = false; //false: style no collapse; true: style show collpase 
        //TODO
        _this.isCollapseChange = new EventEmitter();
        _this.onClickDate = new EventEmitter();
        _this.onSwitchMonth = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this._changeDetector.markForCheck();
    };
    Object.defineProperty(UiCalendarMonthCollapseComponent.prototype, "isCollapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isCollapse;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isCollapse = val;
            this.isCollapseChange.emit(this._isCollapse);
            this.statusOpenClose = this._isCollapse ? 'open' : 'closed';
            this._markForCheck();
            console.log('set value', val);
        },
        enumerable: true,
        configurable: true
    });
    // click today button
    // click today button
    /**
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.goToToday = 
    // click today button
    /**
     * @return {?}
     */
    function () {
        //this.changeViewDate(this.today);
        console.log('go today now', this.today);
        this.viewDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        this.onClickDate.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    };
    // click prev button
    // click prev button
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.prevClick = 
    // click prev button
    /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        console.log('prev tody', this.today);
        /** @type {?} */
        var prevMonth = dateObj.getMonth() - 1 == -1 ? 11 : dateObj.getMonth() - 1;
        /** @type {?} */
        var getYear = dateObj.getMonth() - 1 == -1 ? dateObj.getFullYear() - 1 : dateObj.getFullYear();
        this.viewDate = new Date(getYear, prevMonth, dateObj.getDate());
        this.onSwitchMonth.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    };
    // click next month
    // click next month
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.nextClick = 
    // click next month
    /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        // caculate next month and is need to change next year
        /** @type {?} */
        var nextMonth = dateObj.getMonth() + 1 == 12 ? 0 : dateObj.getMonth() + 1;
        /** @type {?} */
        var getYear = dateObj.getMonth() + 1 == 12 ? dateObj.getFullYear() + 1 : dateObj.getFullYear();
        this.viewDate = new Date(getYear, nextMonth, dateObj.getDate());
        this.onSwitchMonth.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    };
    // click collapse button
    // click collapse button
    /**
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.toggleShowCalendar = 
    // click collapse button
    /**
     * @return {?}
     */
    function () {
        this._isCollapse = !this._isCollapse;
        this.isCollapseChange.emit(this._isCollapse);
        this.statusOpenClose = this._isCollapse ? 'open' : 'closed';
    };
    // click date
    // click date
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.clickDate = 
    // click date
    /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        this.viewDate = dateObj;
        this.onClickDate.emit(dateObj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return getMonth(date) + 1;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UiCalendarMonthCollapseComponent.prototype.convertDateWithoutYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.showRule) {
            return this.showRule.convertDateWithoutYear(date);
        }
        else {
            return format(date, "MM/dd");
        }
    };
    UiCalendarMonthCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-month-collapse',
                    template: "<!-- lg title -->\n<div class=\"ui-calendar-title-lg-block\">\n    <div class=\"title-sm-block\">\n        <div class=\"sm-text\">{{ viewDate | date: yearFormat }}</div>\n        <!-- <div class=\"today\" (click)=\"goToToday()\">Today</div> -->\n    </div>\n    <div class=\"title-date-block\">\n    <div class=\"date-block font-size_h2\">\n        {{ convertDateWithoutYear(viewDate) }}\n    </div>\n    <div *ngIf=\"isCollapseStyle\" class=\"week-block\">\n        {{ viewDate | date: weekFormat }}\n    </div>\n    </div>\n    <button *ngIf=\"isCollapseStyle\" class=\"collapse-block\" (click)=\"toggleShowCalendar()\" [ngClass]=\"isCollapse ? ' active': ''\">\n        <img src=\"assets/img/icon-arrow-down.svg\">\n    </button>\n</div>\n<!-- end of lg title -->\n<!-- end of  lg title and collapse-->\n<ng-container *ngIf=\"isCollapseStyle\">\n    <div class=\"calendar-detail-block \" [@openClose]=\"statusOpenClose\" >\n        <div class=\"switch-block\">\n            <button class=\"arrow-block prev-block\" (click)=\"prevClick(viewDate)\">\n                <img src=\"assets/img/icon-arrow-down.svg\">\n            </button>\n            <div class=\"current-month-text\"> {{ viewDate | date: monthFormat }}</div>\n            <button class=\"arrow-block next-block\" (click)=\"nextClick(viewDate)\">\n                <img src=\"assets/img/icon-arrow-down.svg\">\n            </button>\n        </div>\n        <app-ui-calendar-month [isShowOtherMonthDay]=\"true\" class=\"calendar-style-collapse\" [isShowTitle]=\"false\" [displayMonthFormat]=\"displayMonthFormat\"  [today]=\"today\" [viewDate]=\"viewDate\"  [weekStartsOn]=\"weekStartsOn\" [translateMap]=\"translateMap\"\n        [eventList]=\"eventList\" (calendarMonthDateClicked)=\"clickDate($event)\"></app-ui-calendar-month>\n    </div>\n</ng-container>\n    \n",
                    animations: [
                        animationCollapse
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block}.ui-calendar-title{margin:20px 5px 0;font-size:1.125rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#007ab3}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt{margin:0;padding-bottom:20px;background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:1px solid #ececec;border-bottom:0}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt:not(:last-child){border-right:0}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-top:-30px}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep{width:14.28571%;align-self:flex-start}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep p::ng-deep{width:1.67em;height:.9em;min-height:0;margin:20px auto 0;color:#414141;font-size:.75rem;font-weight:600;line-height:.9em;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep:last-of-type p::ng-deep{margin-bottom:20px}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep.ui-selected p::ng-deep{background-color:#414141;color:#fff}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep.ui-today::ng-deep p::ng-deep{color:#003781;font-weight:700}:host ::ng-deep :host-context(.calendar-style-collapse) .ui-calendar-dates::ng-deep .ui-calendar-date::ng-deep.ui-today::ng-deep.ui-selected p::ng-deep{background-color:#003781;color:#fff}.event-exist{display:block;width:5px;height:5px;margin:0 auto;background-color:#d9d4d4;border-radius:50%}button{background-color:transparent;border:none;outline:0;padding:0;margin:0}button:focus{background-color:transparent}.ui-calendar-title-lg-block{background-color:rgba(73,110,189,.05);padding:20px 12px;position:relative}.ui-calendar-title-lg-block .title-sm-block{display:flex;justify-content:space-between;padding:0 8px 15px}.ui-calendar-title-lg-block .title-sm-block .sm-text{font-size:1rem;font-weight:700;color:#003781;position:relative}.ui-calendar-title-lg-block .title-sm-block .sm-text:after{content:' ';display:inline-block;max-width:18px;width:100%;height:2px;bottom:0;left:0;position:absolute;background-color:#003781}.ui-calendar-title-lg-block .title-sm-block .today{font-size:.875rem;line-height:20px;color:#007ab3;font-weight:700}.ui-calendar-title-lg-block .title-date-block{display:block;color:#003781;padding-right:8px}.ui-calendar-title-lg-block .title-date-block .date-block{font-weight:700;display:inline-block}.ui-calendar-title-lg-block .title-date-block .week-block{display:inline-block;padding-left:15px;font-weight:700;font-size:.875rem}.ui-calendar-title-lg-block .collapse-block{position:absolute;right:20px;bottom:20px}.ui-calendar-title-lg-block .collapse-block img{max-width:24px;width:100%;transition:.5s}.ui-calendar-title-lg-block .collapse-block.active img{-webkit-transform:rotate(180deg);transform:rotate(180deg)}@media screen and (min-width:1025px){.ui-calendar-title-lg-block .collapse-block img{max-width:2.4vw}}.switch-block{display:flex;justify-content:space-between;padding:20px 20px 13px}.switch-block .arrow-block{display:inline-block}.switch-block .arrow-block img{max-width:16px;width:100%}.switch-block .arrow-block.next-block img{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.switch-block .arrow-block.prev-block img{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.switch-block .current-month-text{font-size:1.125rem;color:#003781;font-weight:700}.calendar-detail-block{display:inline-block;-webkit-transform-origin:top;transform-origin:top;transition:transform .3s ease-in-out,max-height .3s ease-in-out,-webkit-transform .3s ease-in-out;overflow:hidden;max-width:250px}.calendar-detail-block.active{position:relative}@media screen and (min-width:1025px){.switch-block .arrow-block img{max-width:1.6vw}.calendar-detail-block{max-width:25vw}}@media screen and (max-width:1023px){:host ::ng-deep .ui-calendar-weekDays>ul{display:flex}:host ::ng-deep .ui-calendar-weekDays .ui-calendar-weekDay-item{display:inline-block;flex:1}:host ::ng-deep .ui-calendar-weekDays .ui-calendar-weekDay-txt{border:0;border-bottom:1px solid #ececec;padding-top:0}:host ::ng-deep .ui-calendar-dates .ui-calendar-date p{font-size:1.33em;font-weight:300;letter-spacing:normal;border:0}.calendar-detail-block{max-width:100%}}"]
                }] }
    ];
    UiCalendarMonthCollapseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
    ]; };
    UiCalendarMonthCollapseComponent.propDecorators = {
        isCollapse: [{ type: Input }],
        isCollapseStyle: [{ type: Input }],
        isCollapseChange: [{ type: Output }],
        onClickDate: [{ type: Output }],
        onSwitchMonth: [{ type: Output }]
    };
    return UiCalendarMonthCollapseComponent;
}(UiCalendarMonthComponent));
export { UiCalendarMonthCollapseComponent };
if (false) {
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.statusOpenClose;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.yearFormat;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.monthFormat;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.dayFormat;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.weekFormat;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype._isCollapse;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.isCollapseStyle;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.isCollapseChange;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.onClickDate;
    /** @type {?} */
    UiCalendarMonthCollapseComponent.prototype.onSwitchMonth;
    /**
     * @type {?}
     * @private
     */
    UiCalendarMonthCollapseComponent.prototype._changeDetector;
    /**
     * @type {?}
     * @private
     */
    UiCalendarMonthCollapseComponent.prototype.showRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXItbW9udGgtY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQWlCTCxNQUFNLEVBQ04sUUFBUSxFQUNULE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQVksTUFBTSxrQkFBa0IsQ0FBQztBQUUzRDtJQVNzRCw0REFBd0I7SUFVMUUsMENBQ1UsZUFBa0MsRUFDQyxRQUFrQjtRQUYvRCxZQUdFLGlCQUFPLFNBQ1I7UUFIUyxxQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFDQyxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBVi9ELHFCQUFlLEdBQUcsUUFBUSxDQUFDO1FBQzNCLGtCQUFrQjtRQUNsQixnQkFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBcUJYLHFCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUUsc0RBQXNEO1FBRXpGLE1BQU07UUFDSSxzQkFBZ0IsR0FBMEIsSUFBSSxZ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TUFBTSxDQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQXBHSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsbXpEQUEwRDtvQkFFMUQsVUFBVSxFQUFFO3dCQUNWLGlCQUFpQjtxQkFDbEI7b0JBQ0QsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7O2dCQWpDZ0YsaUJBQWlCO2dEQThDM0YsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOzs7NkJBT2xDLEtBQUs7a0NBV0wsS0FBSzttQ0FHTCxNQUFNOzhCQUNOLE1BQU07Z0NBQ04sTUFBTTs7SUE2RFgsdUNBQUM7Q0FBQSxBQXpHRCxDQVNzRCx3QkFBd0IsR0FnRzdFO1NBaEdZLGdDQUFnQzs7O0lBRXpDLDJEQUEyQjs7SUFFM0Isc0RBQW9COztJQUNwQix1REFBbUI7O0lBQ25CLHFEQUFpQjs7SUFFakIsc0RBQWtCOztJQUNsQix1REFBb0I7O0lBcUJwQiwyREFBaUM7O0lBR2pDLDREQUF1RTs7SUFDdkUsdURBQTRDOztJQUM1Qyx5REFBaUU7Ozs7O0lBeEIvRCwyREFBMEM7Ozs7O0lBQzFDLG9EQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VpQ2FsZW5kYXJNb250aENvbXBvbmVudH0gZnJvbSAnLi4vdWktY2FsZW5kYXItbW9udGgvdWktY2FsZW5kYXItbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7XG4gIHN0YXJ0T2ZEYXksXG4gIGVuZE9mRGF5LFxuICBzdWJEYXlzLFxuICBhZGREYXlzLFxuICBlbmRPZk1vbnRoLFxuICBpc1NhbWVEYXksXG4gIGlzU2FtZU1vbnRoLFxuICBpc1Bhc3QsXG4gIGlzVG9kYXksXG4gIGlzRnV0dXJlLFxuICBpc1dlZWtlbmQsXG4gIHN0YXJ0T2ZXZWVrLFxuICBhZGRIb3VycyxcbiAgYWRkTWludXRlcyxcbiAgc2V0RGF0ZSxcbiAgc2V0TW9udGgsXG4gIGZvcm1hdCxcbiAgZ2V0TW9udGhcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHthbmltYXRpb25Db2xsYXBzZX0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbkNvbGxhcHNlJztcbmltcG9ydCB7IHNob3dSdWxlVG9rZW4sIHNob3dSdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNhbGVuZGFyLW1vbnRoLWNvbGxhcHNlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBhbmltYXRpb25Db2xsYXBzZVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpQ2FsZW5kYXJNb250aENvbGxhcHNlQ29tcG9uZW50IGV4dGVuZHMgVWlDYWxlbmRhck1vbnRoQ29tcG9uZW50IHtcblxuICAgIHN0YXR1c09wZW5DbG9zZSA9ICdjbG9zZWQnO1xuICAgIC8vIGZpeCBkYXRlIEZvcm1hdFxuICAgIHllYXJGb3JtYXQgPSAneXl5eSc7XG4gICAgbW9udGhGb3JtYXQgPSAnTU0nO1xuICAgIGRheUZvcm1hdCA9ICdkZCc7XG5cbiAgICB3ZWVrRm9ybWF0ID0gJ0VFJztcbiAgICBfaXNDb2xsYXBzZSA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93UnVsZVRva2VuKSBwcml2YXRlIHNob3dSdWxlOiBzaG93UnVsZSl7XG4gICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBfbWFya0ZvckNoZWNrKCkge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgXG4gICAgZ2V0IGlzQ29sbGFwc2UoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5faXNDb2xsYXBzZTtcbiAgICB9XG4gICAgc2V0IGlzQ29sbGFwc2UodmFsKXtcbiAgICAgIHRoaXMuX2lzQ29sbGFwc2UgPSB2YWw7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VDaGFuZ2UuZW1pdCh0aGlzLl9pc0NvbGxhcHNlKTtcbiAgICAgIHRoaXMuc3RhdHVzT3BlbkNsb3NlID0gdGhpcy5faXNDb2xsYXBzZSA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICBjb25zb2xlLmxvZygnc2V0IHZhbHVlJywgdmFsKTtcbiAgICB9XG4gICAgQElucHV0KCkgaXNDb2xsYXBzZVN0eWxlID0gZmFsc2U7ICAvL2ZhbHNlOiBzdHlsZSBubyBjb2xsYXBzZTsgdHJ1ZTogc3R5bGUgc2hvdyBjb2xscGFzZSBcblxuICAgIC8vVE9ET1xuICAgIEBPdXRwdXQoKSBpc0NvbGxhcHNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uQ2xpY2tEYXRlID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25Td2l0Y2hNb250aCA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgXG4gICAgLy8gY2xpY2sgdG9kYXkgYnV0dG9uXG4gICAgZ29Ub1RvZGF5KCl7XG4gICAgICAvL3RoaXMuY2hhbmdlVmlld0RhdGUodGhpcy50b2RheSk7XG4gICAgICBjb25zb2xlLmxvZygnZ28gdG9kYXkgbm93JywgIHRoaXMudG9kYXkpO1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKSwgdGhpcy50b2RheS5nZXRNb250aCgpLCB0aGlzLnRvZGF5LmdldERhdGUoKSk7XG4gICAgICB0aGlzLm9uQ2xpY2tEYXRlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG5cbiAgICB9XG4gICAgXG4gICAgLy8gY2xpY2sgcHJldiBidXR0b25cbiAgICBwcmV2Q2xpY2soZGF0ZU9iail7XG4gICAgICBjb25zb2xlLmxvZygncHJldiB0b2R5JywgdGhpcy50b2RheSk7XG4gICAgICBsZXQgcHJldk1vbnRoID0gZGF0ZU9iai5nZXRNb250aCgpIC0gMSA9PSAtMSA/IDExIDogZGF0ZU9iai5nZXRNb250aCgpIC0gMSA7XG4gICAgICBsZXQgZ2V0WWVhciA9IGRhdGVPYmouZ2V0TW9udGgoKSAtIDEgPT0gLTEgPyBkYXRlT2JqLmdldEZ1bGxZZWFyKCkgLSAxIDogZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGdldFllYXIsIHByZXZNb250aCwgZGF0ZU9iai5nZXREYXRlKCkpO1xuICAgICAgdGhpcy5vblN3aXRjaE1vbnRoLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG5cbiAgICB9XG4gICAgLy8gY2xpY2sgbmV4dCBtb250aFxuICAgIG5leHRDbGljayhkYXRlT2JqKXtcbiAgICAgIC8vIGNhY3VsYXRlIG5leHQgbW9udGggYW5kIGlzIG5lZWQgdG8gY2hhbmdlIG5leHQgeWVhclxuICAgICAgbGV0IG5leHRNb250aCA9IGRhdGVPYmouZ2V0TW9udGgoKSArIDEgPT0gMTIgPyAwIDogZGF0ZU9iai5nZXRNb250aCgpICsgMSA7XG4gICAgICBsZXQgZ2V0WWVhciA9IGRhdGVPYmouZ2V0TW9udGgoKSArIDEgPT0gMTIgPyBkYXRlT2JqLmdldEZ1bGxZZWFyKCkgKyAxIDogZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGdldFllYXIsIG5leHRNb250aCwgZGF0ZU9iai5nZXREYXRlKCkpO1xuICAgICAgdGhpcy5vblN3aXRjaE1vbnRoLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG5cbiAgICB9XG4gICAgLy8gY2xpY2sgY29sbGFwc2UgYnV0dG9uXG4gICAgdG9nZ2xlU2hvd0NhbGVuZGFyKCl7XG4gICAgICB0aGlzLl9pc0NvbGxhcHNlID0gIXRoaXMuX2lzQ29sbGFwc2U7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VDaGFuZ2UuZW1pdCh0aGlzLl9pc0NvbGxhcHNlKTtcbiAgICAgIHRoaXMuc3RhdHVzT3BlbkNsb3NlID0gdGhpcy5faXNDb2xsYXBzZSA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuICAgIH1cbiAgICAvLyBjbGljayBkYXRlXG4gICAgY2xpY2tEYXRlKGRhdGVPYmope1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IGRhdGVPYmo7XG4gICAgICB0aGlzLm9uQ2xpY2tEYXRlLmVtaXQoZGF0ZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TW9udGgoZGF0ZSkge1xuICAgICAgcmV0dXJuIGdldE1vbnRoKGRhdGUpKzE7XG4gICAgfVxuXG4gICAgY29udmVydERhdGVXaXRob3V0WWVhcihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIGlmKHRoaXMuc2hvd1J1bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydERhdGVXaXRob3V0WWVhcihkYXRlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsXCJNTS9kZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIFxuXG59XG4iXX0=