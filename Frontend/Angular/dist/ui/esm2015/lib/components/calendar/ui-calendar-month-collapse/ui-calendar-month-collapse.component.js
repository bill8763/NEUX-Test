/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { UiCalendarMonthComponent } from '../ui-calendar-month/ui-calendar-month.component';
import { format, getMonth } from 'date-fns';
import { animationCollapse } from '../../../model/Animation/AnimationCollapse';
import { showRuleToken } from '@allianzSND/core';
export class UiCalendarMonthCollapseComponent extends UiCalendarMonthComponent {
    /**
     * @param {?} _changeDetector
     * @param {?} showRule
     */
    constructor(_changeDetector, showRule) {
        super();
        this._changeDetector = _changeDetector;
        this.showRule = showRule;
        this.statusOpenClose = 'closed';
        // fix date Format
        this.yearFormat = 'yyyy';
        this.monthFormat = 'MM';
        this.dayFormat = 'dd';
        this.weekFormat = 'EE';
        this._isCollapse = false;
        this.isCollapseStyle = false; //false: style no collapse; true: style show collpase 
        //TODO
        this.isCollapseChange = new EventEmitter();
        this.onClickDate = new EventEmitter();
        this.onSwitchMonth = new EventEmitter();
    }
    /**
     * @return {?}
     */
    _markForCheck() {
        this._changeDetector.markForCheck();
    }
    /**
     * @return {?}
     */
    get isCollapse() {
        return this._isCollapse;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isCollapse(val) {
        this._isCollapse = val;
        this.isCollapseChange.emit(this._isCollapse);
        this.statusOpenClose = this._isCollapse ? 'open' : 'closed';
        this._markForCheck();
        console.log('set value', val);
    }
    // click today button
    /**
     * @return {?}
     */
    goToToday() {
        //this.changeViewDate(this.today);
        console.log('go today now', this.today);
        this.viewDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        this.onClickDate.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    }
    // click prev button
    /**
     * @param {?} dateObj
     * @return {?}
     */
    prevClick(dateObj) {
        console.log('prev tody', this.today);
        /** @type {?} */
        let prevMonth = dateObj.getMonth() - 1 == -1 ? 11 : dateObj.getMonth() - 1;
        /** @type {?} */
        let getYear = dateObj.getMonth() - 1 == -1 ? dateObj.getFullYear() - 1 : dateObj.getFullYear();
        this.viewDate = new Date(getYear, prevMonth, dateObj.getDate());
        this.onSwitchMonth.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    }
    // click next month
    /**
     * @param {?} dateObj
     * @return {?}
     */
    nextClick(dateObj) {
        // caculate next month and is need to change next year
        /** @type {?} */
        let nextMonth = dateObj.getMonth() + 1 == 12 ? 0 : dateObj.getMonth() + 1;
        /** @type {?} */
        let getYear = dateObj.getMonth() + 1 == 12 ? dateObj.getFullYear() + 1 : dateObj.getFullYear();
        this.viewDate = new Date(getYear, nextMonth, dateObj.getDate());
        this.onSwitchMonth.emit(this.viewDate);
        this.viewDateChange.emit(this.viewDate);
    }
    // click collapse button
    /**
     * @return {?}
     */
    toggleShowCalendar() {
        this._isCollapse = !this._isCollapse;
        this.isCollapseChange.emit(this._isCollapse);
        this.statusOpenClose = this._isCollapse ? 'open' : 'closed';
    }
    // click date
    /**
     * @param {?} dateObj
     * @return {?}
     */
    clickDate(dateObj) {
        this.viewDate = dateObj;
        this.onClickDate.emit(dateObj);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return getMonth(date) + 1;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    convertDateWithoutYear(date) {
        if (this.showRule) {
            return this.showRule.convertDateWithoutYear(date);
        }
        else {
            return format(date, "MM/dd");
        }
    }
}
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
UiCalendarMonthCollapseComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
];
UiCalendarMonthCollapseComponent.propDecorators = {
    isCollapse: [{ type: Input }],
    isCollapseStyle: [{ type: Input }],
    isCollapseChange: [{ type: Output }],
    onClickDate: [{ type: Output }],
    onSwitchMonth: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXItbW9udGgtY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBaUJMLE1BQU0sRUFDTixRQUFRLEVBQ1QsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBVzNELE1BQU0sdUNBQXdDLFNBQVEsd0JBQXdCOzs7OztJQVUxRSxZQUNVLGVBQWtDLEVBQ0MsUUFBa0I7UUFDN0QsS0FBSyxFQUFFLENBQUM7UUFGQSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFDQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBVi9ELG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBQzNCLGtCQUFrQjtRQUNsQixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXFCWCxvQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFFLHNEQUFzRDtRQUV6RixNQUFNO1FBQ0kscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0QsZ0JBQVcsR0FBSSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFyQmpFLENBQUM7Ozs7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBSSxVQUFVLENBQUMsR0FBRztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQVVELFNBQVM7UUFDUCxrQ0FBa0M7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTFDLENBQUM7Ozs7OztJQUdELFNBQVMsQ0FBQyxPQUFPO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNqQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzs7WUFDdEUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7UUFDOUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFMUMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQU87OztZQUVYLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzs7WUFDckUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBQzlGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTFDLENBQUM7Ozs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQU87UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsSUFBVTtRQUMvQixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25EO2FBQ0k7WUFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUFwR0osU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLG16REFBMEQ7Z0JBRTFELFVBQVUsRUFBRTtvQkFDVixpQkFBaUI7aUJBQ2xCO2dCQUNELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7O1lBakNnRixpQkFBaUI7NENBOEMzRixRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7Ozt5QkFPbEMsS0FBSzs4QkFXTCxLQUFLOytCQUdMLE1BQU07MEJBQ04sTUFBTTs0QkFDTixNQUFNOzs7O0lBakNQLDJEQUEyQjs7SUFFM0Isc0RBQW9COztJQUNwQix1REFBbUI7O0lBQ25CLHFEQUFpQjs7SUFFakIsc0RBQWtCOztJQUNsQix1REFBb0I7O0lBcUJwQiwyREFBaUM7O0lBR2pDLDREQUF1RTs7SUFDdkUsdURBQTRDOztJQUM1Qyx5REFBaUU7Ozs7O0lBeEIvRCwyREFBMEM7Ozs7O0lBQzFDLG9EQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VpQ2FsZW5kYXJNb250aENvbXBvbmVudH0gZnJvbSAnLi4vdWktY2FsZW5kYXItbW9udGgvdWktY2FsZW5kYXItbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7XG4gIHN0YXJ0T2ZEYXksXG4gIGVuZE9mRGF5LFxuICBzdWJEYXlzLFxuICBhZGREYXlzLFxuICBlbmRPZk1vbnRoLFxuICBpc1NhbWVEYXksXG4gIGlzU2FtZU1vbnRoLFxuICBpc1Bhc3QsXG4gIGlzVG9kYXksXG4gIGlzRnV0dXJlLFxuICBpc1dlZWtlbmQsXG4gIHN0YXJ0T2ZXZWVrLFxuICBhZGRIb3VycyxcbiAgYWRkTWludXRlcyxcbiAgc2V0RGF0ZSxcbiAgc2V0TW9udGgsXG4gIGZvcm1hdCxcbiAgZ2V0TW9udGhcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHthbmltYXRpb25Db2xsYXBzZX0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbkNvbGxhcHNlJztcbmltcG9ydCB7IHNob3dSdWxlVG9rZW4sIHNob3dSdWxlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNhbGVuZGFyLW1vbnRoLWNvbGxhcHNlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBhbmltYXRpb25Db2xsYXBzZVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpQ2FsZW5kYXJNb250aENvbGxhcHNlQ29tcG9uZW50IGV4dGVuZHMgVWlDYWxlbmRhck1vbnRoQ29tcG9uZW50IHtcblxuICAgIHN0YXR1c09wZW5DbG9zZSA9ICdjbG9zZWQnO1xuICAgIC8vIGZpeCBkYXRlIEZvcm1hdFxuICAgIHllYXJGb3JtYXQgPSAneXl5eSc7XG4gICAgbW9udGhGb3JtYXQgPSAnTU0nO1xuICAgIGRheUZvcm1hdCA9ICdkZCc7XG5cbiAgICB3ZWVrRm9ybWF0ID0gJ0VFJztcbiAgICBfaXNDb2xsYXBzZSA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93UnVsZVRva2VuKSBwcml2YXRlIHNob3dSdWxlOiBzaG93UnVsZSl7XG4gICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBfbWFya0ZvckNoZWNrKCkge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgXG4gICAgZ2V0IGlzQ29sbGFwc2UoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5faXNDb2xsYXBzZTtcbiAgICB9XG4gICAgc2V0IGlzQ29sbGFwc2UodmFsKXtcbiAgICAgIHRoaXMuX2lzQ29sbGFwc2UgPSB2YWw7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VDaGFuZ2UuZW1pdCh0aGlzLl9pc0NvbGxhcHNlKTtcbiAgICAgIHRoaXMuc3RhdHVzT3BlbkNsb3NlID0gdGhpcy5faXNDb2xsYXBzZSA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICBjb25zb2xlLmxvZygnc2V0IHZhbHVlJywgdmFsKTtcbiAgICB9XG4gICAgQElucHV0KCkgaXNDb2xsYXBzZVN0eWxlID0gZmFsc2U7ICAvL2ZhbHNlOiBzdHlsZSBubyBjb2xsYXBzZTsgdHJ1ZTogc3R5bGUgc2hvdyBjb2xscGFzZSBcblxuICAgIC8vVE9ET1xuICAgIEBPdXRwdXQoKSBpc0NvbGxhcHNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uQ2xpY2tEYXRlID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25Td2l0Y2hNb250aCA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgXG4gICAgLy8gY2xpY2sgdG9kYXkgYnV0dG9uXG4gICAgZ29Ub1RvZGF5KCl7XG4gICAgICAvL3RoaXMuY2hhbmdlVmlld0RhdGUodGhpcy50b2RheSk7XG4gICAgICBjb25zb2xlLmxvZygnZ28gdG9kYXkgbm93JywgIHRoaXMudG9kYXkpO1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKSwgdGhpcy50b2RheS5nZXRNb250aCgpLCB0aGlzLnRvZGF5LmdldERhdGUoKSk7XG4gICAgICB0aGlzLm9uQ2xpY2tEYXRlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG5cbiAgICB9XG4gICAgXG4gICAgLy8gY2xpY2sgcHJldiBidXR0b25cbiAgICBwcmV2Q2xpY2soZGF0ZU9iail7XG4gICAgICBjb25zb2xlLmxvZygncHJldiB0b2R5JywgdGhpcy50b2RheSk7XG4gICAgICBsZXQgcHJldk1vbnRoID0gZGF0ZU9iai5nZXRNb250aCgpIC0gMSA9PSAtMSA/IDExIDogZGF0ZU9iai5nZXRNb250aCgpIC0gMSA7XG4gICAgICBsZXQgZ2V0WWVhciA9IGRhdGVPYmouZ2V0TW9udGgoKSAtIDEgPT0gLTEgPyBkYXRlT2JqLmdldEZ1bGxZZWFyKCkgLSAxIDogZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGdldFllYXIsIHByZXZNb250aCwgZGF0ZU9iai5nZXREYXRlKCkpO1xuICAgICAgdGhpcy5vblN3aXRjaE1vbnRoLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG5cbiAgICB9XG4gICAgLy8gY2xpY2sgbmV4dCBtb250aFxuICAgIG5leHRDbGljayhkYXRlT2JqKXtcbiAgICAgIC8vIGNhY3VsYXRlIG5leHQgbW9udGggYW5kIGlzIG5lZWQgdG8gY2hhbmdlIG5leHQgeWVhclxuICAgICAgbGV0IG5leHRNb250aCA9IGRhdGVPYmouZ2V0TW9udGgoKSArIDEgPT0gMTIgPyAwIDogZGF0ZU9iai5nZXRNb250aCgpICsgMSA7XG4gICAgICBsZXQgZ2V0WWVhciA9IGRhdGVPYmouZ2V0TW9udGgoKSArIDEgPT0gMTIgPyBkYXRlT2JqLmdldEZ1bGxZZWFyKCkgKyAxIDogZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKGdldFllYXIsIG5leHRNb250aCwgZGF0ZU9iai5nZXREYXRlKCkpO1xuICAgICAgdGhpcy5vblN3aXRjaE1vbnRoLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG5cbiAgICB9XG4gICAgLy8gY2xpY2sgY29sbGFwc2UgYnV0dG9uXG4gICAgdG9nZ2xlU2hvd0NhbGVuZGFyKCl7XG4gICAgICB0aGlzLl9pc0NvbGxhcHNlID0gIXRoaXMuX2lzQ29sbGFwc2U7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VDaGFuZ2UuZW1pdCh0aGlzLl9pc0NvbGxhcHNlKTtcbiAgICAgIHRoaXMuc3RhdHVzT3BlbkNsb3NlID0gdGhpcy5faXNDb2xsYXBzZSA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuICAgIH1cbiAgICAvLyBjbGljayBkYXRlXG4gICAgY2xpY2tEYXRlKGRhdGVPYmope1xuICAgICAgdGhpcy52aWV3RGF0ZSA9IGRhdGVPYmo7XG4gICAgICB0aGlzLm9uQ2xpY2tEYXRlLmVtaXQoZGF0ZU9iaik7XG4gICAgfVxuXG4gICAgZ2V0TW9udGgoZGF0ZSkge1xuICAgICAgcmV0dXJuIGdldE1vbnRoKGRhdGUpKzE7XG4gICAgfVxuXG4gICAgY29udmVydERhdGVXaXRob3V0WWVhcihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIGlmKHRoaXMuc2hvd1J1bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydERhdGVXaXRob3V0WWVhcihkYXRlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsXCJNTS9kZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIFxuXG59XG4iXX0=