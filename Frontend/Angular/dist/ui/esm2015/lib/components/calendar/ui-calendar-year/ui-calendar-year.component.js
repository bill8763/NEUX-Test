/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class UiCalendarYearComponent {
    constructor() {
        this.weekStartsOn = 0;
        this.translateMap = new Map();
        this.viewYearChange = new EventEmitter();
        this.viewDateChange = new EventEmitter();
        this.calendarYearMonthClicked = new EventEmitter();
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }
    /**
     * @return {?}
     */
    get viewYear() {
        return this._viewYear;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set viewYear(val) {
        this._viewYear = val;
        this.viewYearChange.emit(this._viewYear);
        // console.warn('ui viewYear', this._viewYear);
        if (val) {
            this.reorderWeekDays();
            this.monthInYear = this.setMonthInYear();
            // console.warn('ui monthInYear', this.monthInYear);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.reorderWeekDays();
        this.monthInYear = this.setMonthInYear();
    }
    /**
     * @return {?}
     */
    reorderWeekDays() {
        this.viewWeekDays = this.weekDays.slice(this.weekStartsOn, this.weekDays.length);
        if (this.weekStartsOn === 0) {
            return false;
        }
        /** @type {?} */
        let tmp = this.weekDays.slice(0, this.weekStartsOn);
        this.viewWeekDays = this.viewWeekDays.concat(tmp);
    } // end reorderWeekDays
    // end reorderWeekDays
    /**
     * @return {?}
     */
    setMonthInYear() {
        /** @type {?} */
        let monthArr = [];
        for (let monthVal = 0; monthVal < 12; ++monthVal) {
            monthArr.push(new Date(this.viewYear, monthVal, 1));
        } // end for: month
        return monthArr;
    } // end setMonthInYear function
    // end setMonthInYear function
    /**
     * @param {?} date
     * @return {?}
     */
    monthClicked(date) {
        this.viewDate = date;
        this.viewDateChange.emit(this.viewDate);
        this.calendarYearMonthClicked.emit(this.viewDate);
    } // end monthClicked
}
UiCalendarYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-calendar-year',
                template: "<div class=\"ui-calendarY-month-item\" *ngFor=\"let monthFirstDate of this.monthInYear\" (click)=\"monthClicked(monthFirstDate)\">\n  <p class=\"ui-calendarY-title\">{{translateMap.get(monthFirstDate | date: displayMonthFormat) ? translateMap.get(monthFirstDate | date: displayMonthFormat) : monthFirstDate | date: displayMonthFormat}}</p>\n\n  <div class=\"ui-calendarY-weekDays\">\n    <ul>\n      <li *ngFor=\"let weekDay of viewWeekDays\"><p class=\"ui-calendarY-weekDay-txt\">{{translateMap.get(weekDay) ? translateMap.get(weekDay) : weekDay}}</p></li>\n    </ul>\n  </div>\n  <!-- end: ui-calendarY-weekDays -->\n\n  <app-ui-calendar-year-month [today]=\"this.today\" [monthFirstDate]=\"monthFirstDate\" [weekDayList] =\"weekDays\" [viewWeekDayList]=\"viewWeekDays\"></app-ui-calendar-year-month>\n\n</div>\n<!-- end: ui-calendar-month-item -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-calendarY-month-item{width:22%}.ui-calendarY-month-item:not(:nth-child(4n)){margin-right:3%}.ui-calendarY-month-item:nth-child(n+5){margin-top:20px}.ui-calendarY-title{margin:0;font-size:1.125rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#007ab3}.ui-calendarY-title:not(:last-child){margin-bottom:10px}.ui-calendarY-weekDays>ul{display:flex;justify-content:space-between;align-items:stretch;list-style-type:none}.ui-calendarY-weekDays .ui-calendarY-weekDay-txt{margin:0;min-width:25px;font-size:.75rem;font-weight:400;line-height:normal;letter-spacing:.2px;text-align:center;color:#767676}@media screen and (max-width:1023px){.ui-calendarY-title{font-size:1rem}.ui-calendarY-title:not(:last-child){margin-bottom:0}.ui-calendarY-month-item{width:33%}.ui-calendarY-month-item:not(:nth-child(4n)),.ui-calendarY-month-item:nth-child(n+5){margin:0}.ui-calendarY-weekDays{display:none}}"]
            }] }
];
UiCalendarYearComponent.ctorParameters = () => [];
UiCalendarYearComponent.propDecorators = {
    today: [{ type: Input }],
    displayMonthFormat: [{ type: Input }],
    weekStartsOn: [{ type: Input }],
    translateMap: [{ type: Input }],
    viewYear: [{ type: Input }],
    viewYearChange: [{ type: Output }],
    viewDate: [{ type: Input }],
    viewDateChange: [{ type: Output }],
    calendarYearMonthClicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiCalendarYearComponent.prototype.today;
    /** @type {?} */
    UiCalendarYearComponent.prototype.displayMonthFormat;
    /** @type {?} */
    UiCalendarYearComponent.prototype.weekStartsOn;
    /** @type {?} */
    UiCalendarYearComponent.prototype.translateMap;
    /**
     * @type {?}
     * @private
     */
    UiCalendarYearComponent.prototype._viewYear;
    /** @type {?} */
    UiCalendarYearComponent.prototype.viewYearChange;
    /** @type {?} */
    UiCalendarYearComponent.prototype.viewDate;
    /** @type {?} */
    UiCalendarYearComponent.prototype.viewDateChange;
    /** @type {?} */
    UiCalendarYearComponent.prototype.calendarYearMonthClicked;
    /** @type {?} */
    UiCalendarYearComponent.prototype.weekDays;
    /** @type {?} */
    UiCalendarYearComponent.prototype.viewWeekDays;
    /** @type {?} */
    UiCalendarYearComponent.prototype.monthInYear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXIteWVhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhbGVuZGFyL3VpLWNhbGVuZGFyLXllYXIvdWktY2FsZW5kYXIteWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTTtJQW9DSjtRQWpDUyxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixpQkFBWSxHQUF1QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQXFCNUQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3BDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyw2QkFBd0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELGFBQVEsR0FBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUs1RSxDQUFDOzs7O0lBNUJELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEdBQUc7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekMsK0NBQStDO1FBRS9DLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3pDLG9EQUFvRDtTQUNyRDtJQUNILENBQUM7Ozs7SUFlRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxlQUFlO1FBRWIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxzQkFBc0I7Ozs7O0lBRXhCLGNBQWM7O1lBQ1IsUUFBUSxHQUFXLEVBQUU7UUFFekIsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTtZQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FDdkQsQ0FBQyxpQkFBaUI7UUFFbkIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQyxDQUFDLDhCQUE4Qjs7Ozs7O0lBRWhDLFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxtQkFBbUI7OztZQTFFdEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGcyQkFBZ0Q7O2FBRWpEOzs7O29CQUVFLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBS0wsS0FBSzs2QkFnQkwsTUFBTTt1QkFFTixLQUFLOzZCQUNMLE1BQU07dUNBRU4sTUFBTTs7OztJQTdCUCx3Q0FBcUI7O0lBQ3JCLHFEQUFvQzs7SUFDcEMsK0NBQWtDOztJQUNsQywrQ0FBc0U7Ozs7O0lBSXRFLDRDQUEwQjs7SUFpQjFCLGlEQUE4Qzs7SUFFOUMsMkNBQXdCOztJQUN4QixpREFBOEM7O0lBRTlDLDJEQUF3RDs7SUFFeEQsMkNBQTRFOztJQUM1RSwrQ0FBdUI7O0lBQ3ZCLDhDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWNhbGVuZGFyLXllYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktY2FsZW5kYXIteWVhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNhbGVuZGFyLXllYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaUNhbGVuZGFyWWVhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRvZGF5OiBEYXRlO1xuICBASW5wdXQoKSBkaXNwbGF5TW9udGhGb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgd2Vla1N0YXJ0c09uOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSB0cmFuc2xhdGVNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgLy8gQElucHV0KCkgdmlld1llYXI6IG51bWJlcjtcblxuICBwcml2YXRlIF92aWV3WWVhcjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBnZXQgdmlld1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdZZWFyO1xuICB9XG4gIHNldCB2aWV3WWVhcih2YWwpIHtcbiAgICB0aGlzLl92aWV3WWVhciA9IHZhbDtcbiAgICB0aGlzLnZpZXdZZWFyQ2hhbmdlLmVtaXQodGhpcy5fdmlld1llYXIpO1xuXG4gICAgLy8gY29uc29sZS53YXJuKCd1aSB2aWV3WWVhcicsIHRoaXMuX3ZpZXdZZWFyKTtcblxuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMucmVvcmRlcldlZWtEYXlzKCk7XG4gICAgICB0aGlzLm1vbnRoSW5ZZWFyID0gdGhpcy5zZXRNb250aEluWWVhcigpO1xuICAgICAgLy8gY29uc29sZS53YXJuKCd1aSBtb250aEluWWVhcicsIHRoaXMubW9udGhJblllYXIpO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgdmlld1llYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgdmlld0RhdGU6IERhdGU7XG4gIEBPdXRwdXQoKSB2aWV3RGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgY2FsZW5kYXJZZWFyTW9udGhDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgdmlld1dlZWtEYXlzOiBzdHJpbmdbXTtcbiAgbW9udGhJblllYXI6IERhdGVbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVvcmRlcldlZWtEYXlzKCk7XG4gICAgdGhpcy5tb250aEluWWVhciA9IHRoaXMuc2V0TW9udGhJblllYXIoKTtcbiAgfVxuXG4gIHJlb3JkZXJXZWVrRGF5cyAoKSB7XG5cbiAgICB0aGlzLnZpZXdXZWVrRGF5cyA9IHRoaXMud2Vla0RheXMuc2xpY2UodGhpcy53ZWVrU3RhcnRzT24sIHRoaXMud2Vla0RheXMubGVuZ3RoKTtcbiAgICBpZiAodGhpcy53ZWVrU3RhcnRzT24gPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgdG1wID0gdGhpcy53ZWVrRGF5cy5zbGljZSgwLCB0aGlzLndlZWtTdGFydHNPbik7XG4gICAgdGhpcy52aWV3V2Vla0RheXMgPSB0aGlzLnZpZXdXZWVrRGF5cy5jb25jYXQodG1wKTtcbiAgfSAvLyBlbmQgcmVvcmRlcldlZWtEYXlzXG5cbiAgc2V0TW9udGhJblllYXIoKTogRGF0ZVtdIHtcbiAgICBsZXQgbW9udGhBcnI6IERhdGVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgbW9udGhWYWwgPSAwOyBtb250aFZhbCA8IDEyOyArK21vbnRoVmFsKSB7XG4gICAgICBtb250aEFyci5wdXNoKCBuZXcgRGF0ZSh0aGlzLnZpZXdZZWFyLCBtb250aFZhbCwgMSkgKTtcbiAgICB9IC8vIGVuZCBmb3I6IG1vbnRoXG5cbiAgICByZXR1cm4gbW9udGhBcnI7XG4gIH0gLy8gZW5kIHNldE1vbnRoSW5ZZWFyIGZ1bmN0aW9uXG5cbiAgbW9udGhDbGlja2VkKGRhdGUpIHtcbiAgICB0aGlzLnZpZXdEYXRlID0gZGF0ZTtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy52aWV3RGF0ZSk7XG4gICAgdGhpcy5jYWxlbmRhclllYXJNb250aENsaWNrZWQuZW1pdCh0aGlzLnZpZXdEYXRlKTtcbiAgfSAvLyBlbmQgbW9udGhDbGlja2VkXG5cbn1cbiJdfQ==