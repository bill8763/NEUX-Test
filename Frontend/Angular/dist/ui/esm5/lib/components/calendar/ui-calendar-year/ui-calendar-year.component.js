/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var UiCalendarYearComponent = /** @class */ (function () {
    function UiCalendarYearComponent() {
        this.weekStartsOn = 0;
        this.translateMap = new Map();
        this.viewYearChange = new EventEmitter();
        this.viewDateChange = new EventEmitter();
        this.calendarYearMonthClicked = new EventEmitter();
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }
    Object.defineProperty(UiCalendarYearComponent.prototype, "viewYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewYear;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._viewYear = val;
            this.viewYearChange.emit(this._viewYear);
            // console.warn('ui viewYear', this._viewYear);
            if (val) {
                this.reorderWeekDays();
                this.monthInYear = this.setMonthInYear();
                // console.warn('ui monthInYear', this.monthInYear);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCalendarYearComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.reorderWeekDays();
        this.monthInYear = this.setMonthInYear();
    };
    /**
     * @return {?}
     */
    UiCalendarYearComponent.prototype.reorderWeekDays = /**
     * @return {?}
     */
    function () {
        this.viewWeekDays = this.weekDays.slice(this.weekStartsOn, this.weekDays.length);
        if (this.weekStartsOn === 0) {
            return false;
        }
        /** @type {?} */
        var tmp = this.weekDays.slice(0, this.weekStartsOn);
        this.viewWeekDays = this.viewWeekDays.concat(tmp);
    }; // end reorderWeekDays
    // end reorderWeekDays
    /**
     * @return {?}
     */
    UiCalendarYearComponent.prototype.setMonthInYear = 
    // end reorderWeekDays
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var monthArr = [];
        for (var monthVal = 0; monthVal < 12; ++monthVal) {
            monthArr.push(new Date(this.viewYear, monthVal, 1));
        } // end for: month
        return monthArr;
    }; // end setMonthInYear function
    // end setMonthInYear function
    /**
     * @param {?} date
     * @return {?}
     */
    UiCalendarYearComponent.prototype.monthClicked = 
    // end setMonthInYear function
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.viewDate = date;
        this.viewDateChange.emit(this.viewDate);
        this.calendarYearMonthClicked.emit(this.viewDate);
    }; // end monthClicked
    UiCalendarYearComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-year',
                    template: "<div class=\"ui-calendarY-month-item\" *ngFor=\"let monthFirstDate of this.monthInYear\" (click)=\"monthClicked(monthFirstDate)\">\n  <p class=\"ui-calendarY-title\">{{translateMap.get(monthFirstDate | date: displayMonthFormat) ? translateMap.get(monthFirstDate | date: displayMonthFormat) : monthFirstDate | date: displayMonthFormat}}</p>\n\n  <div class=\"ui-calendarY-weekDays\">\n    <ul>\n      <li *ngFor=\"let weekDay of viewWeekDays\"><p class=\"ui-calendarY-weekDay-txt\">{{translateMap.get(weekDay) ? translateMap.get(weekDay) : weekDay}}</p></li>\n    </ul>\n  </div>\n  <!-- end: ui-calendarY-weekDays -->\n\n  <app-ui-calendar-year-month [today]=\"this.today\" [monthFirstDate]=\"monthFirstDate\" [weekDayList] =\"weekDays\" [viewWeekDayList]=\"viewWeekDays\"></app-ui-calendar-year-month>\n\n</div>\n<!-- end: ui-calendar-month-item -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-calendarY-month-item{width:22%}.ui-calendarY-month-item:not(:nth-child(4n)){margin-right:3%}.ui-calendarY-month-item:nth-child(n+5){margin-top:20px}.ui-calendarY-title{margin:0;font-size:1.125rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#007ab3}.ui-calendarY-title:not(:last-child){margin-bottom:10px}.ui-calendarY-weekDays>ul{display:flex;justify-content:space-between;align-items:stretch;list-style-type:none}.ui-calendarY-weekDays .ui-calendarY-weekDay-txt{margin:0;min-width:25px;font-size:.75rem;font-weight:400;line-height:normal;letter-spacing:.2px;text-align:center;color:#767676}@media screen and (max-width:1023px){.ui-calendarY-title{font-size:1rem}.ui-calendarY-title:not(:last-child){margin-bottom:0}.ui-calendarY-month-item{width:33%}.ui-calendarY-month-item:not(:nth-child(4n)),.ui-calendarY-month-item:nth-child(n+5){margin:0}.ui-calendarY-weekDays{display:none}}"]
                }] }
    ];
    UiCalendarYearComponent.ctorParameters = function () { return []; };
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
    return UiCalendarYearComponent;
}());
export { UiCalendarYearComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXIteWVhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhbGVuZGFyL3VpLWNhbGVuZGFyLXllYXIvdWktY2FsZW5kYXIteWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUF5Q0U7UUFqQ1MsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVksR0FBdUIsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFxQjVELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdwQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RCxhQUFRLEdBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFLNUUsQ0FBQztJQTVCRCxzQkFDSSw2Q0FBUTs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxHQUFHO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXpDLCtDQUErQztZQUUvQyxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN6QyxvREFBb0Q7YUFDckQ7UUFDSCxDQUFDOzs7T0FaQTs7OztJQTJCRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUVFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDLEVBQUMsc0JBQXNCOzs7OztJQUV4QixnREFBYzs7Ozs7SUFBZDs7WUFDTSxRQUFRLEdBQVcsRUFBRTtRQUV6QixLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFO1lBQ2hELFFBQVEsQ0FBQyxJQUFJLENBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQztTQUN2RCxDQUFDLGlCQUFpQjtRQUVuQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLEVBQUMsOEJBQThCOzs7Ozs7SUFFaEMsOENBQVk7Ozs7OztJQUFaLFVBQWEsSUFBSTtRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDLEVBQUMsbUJBQW1COztnQkExRXRCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxnMkJBQWdEOztpQkFFakQ7Ozs7d0JBRUUsS0FBSztxQ0FDTCxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFLTCxLQUFLO2lDQWdCTCxNQUFNOzJCQUVOLEtBQUs7aUNBQ0wsTUFBTTsyQ0FFTixNQUFNOztJQXlDVCw4QkFBQztDQUFBLEFBNUVELElBNEVDO1NBdkVZLHVCQUF1Qjs7O0lBQ2xDLHdDQUFxQjs7SUFDckIscURBQW9DOztJQUNwQywrQ0FBa0M7O0lBQ2xDLCtDQUFzRTs7Ozs7SUFJdEUsNENBQTBCOztJQWlCMUIsaURBQThDOztJQUU5QywyQ0FBd0I7O0lBQ3hCLGlEQUE4Qzs7SUFFOUMsMkRBQXdEOztJQUV4RCwyQ0FBNEU7O0lBQzVFLCtDQUF1Qjs7SUFDdkIsOENBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktY2FsZW5kYXIteWVhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jYWxlbmRhci15ZWFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY2FsZW5kYXIteWVhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpQ2FsZW5kYXJZZWFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdG9kYXk6IERhdGU7XG4gIEBJbnB1dCgpIGRpc3BsYXlNb250aEZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSB3ZWVrU3RhcnRzT246IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHRyYW5zbGF0ZU1hcDogTWFwPHN0cmluZyxzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICAvLyBASW5wdXQoKSB2aWV3WWVhcjogbnVtYmVyO1xuXG4gIHByaXZhdGUgX3ZpZXdZZWFyOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGdldCB2aWV3WWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld1llYXI7XG4gIH1cbiAgc2V0IHZpZXdZZWFyKHZhbCkge1xuICAgIHRoaXMuX3ZpZXdZZWFyID0gdmFsO1xuICAgIHRoaXMudmlld1llYXJDaGFuZ2UuZW1pdCh0aGlzLl92aWV3WWVhcik7XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ3VpIHZpZXdZZWFyJywgdGhpcy5fdmlld1llYXIpO1xuXG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5yZW9yZGVyV2Vla0RheXMoKTtcbiAgICAgIHRoaXMubW9udGhJblllYXIgPSB0aGlzLnNldE1vbnRoSW5ZZWFyKCk7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ3VpIG1vbnRoSW5ZZWFyJywgdGhpcy5tb250aEluWWVhcik7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSB2aWV3WWVhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSB2aWV3RGF0ZTogRGF0ZTtcbiAgQE91dHB1dCgpIHZpZXdEYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBjYWxlbmRhclllYXJNb250aENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuICB2aWV3V2Vla0RheXM6IHN0cmluZ1tdO1xuICBtb250aEluWWVhcjogRGF0ZVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW9yZGVyV2Vla0RheXMoKTtcbiAgICB0aGlzLm1vbnRoSW5ZZWFyID0gdGhpcy5zZXRNb250aEluWWVhcigpO1xuICB9XG5cbiAgcmVvcmRlcldlZWtEYXlzICgpIHtcblxuICAgIHRoaXMudmlld1dlZWtEYXlzID0gdGhpcy53ZWVrRGF5cy5zbGljZSh0aGlzLndlZWtTdGFydHNPbiwgdGhpcy53ZWVrRGF5cy5sZW5ndGgpO1xuICAgIGlmICh0aGlzLndlZWtTdGFydHNPbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCB0bXAgPSB0aGlzLndlZWtEYXlzLnNsaWNlKDAsIHRoaXMud2Vla1N0YXJ0c09uKTtcbiAgICB0aGlzLnZpZXdXZWVrRGF5cyA9IHRoaXMudmlld1dlZWtEYXlzLmNvbmNhdCh0bXApO1xuICB9IC8vIGVuZCByZW9yZGVyV2Vla0RheXNcblxuICBzZXRNb250aEluWWVhcigpOiBEYXRlW10ge1xuICAgIGxldCBtb250aEFycjogRGF0ZVtdID0gW107XG5cbiAgICBmb3IgKGxldCBtb250aFZhbCA9IDA7IG1vbnRoVmFsIDwgMTI7ICsrbW9udGhWYWwpIHtcbiAgICAgIG1vbnRoQXJyLnB1c2goIG5ldyBEYXRlKHRoaXMudmlld1llYXIsIG1vbnRoVmFsLCAxKSApO1xuICAgIH0gLy8gZW5kIGZvcjogbW9udGhcblxuICAgIHJldHVybiBtb250aEFycjtcbiAgfSAvLyBlbmQgc2V0TW9udGhJblllYXIgZnVuY3Rpb25cblxuICBtb250aENsaWNrZWQoZGF0ZSkge1xuICAgIHRoaXMudmlld0RhdGUgPSBkYXRlO1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdCh0aGlzLnZpZXdEYXRlKTtcbiAgICB0aGlzLmNhbGVuZGFyWWVhck1vbnRoQ2xpY2tlZC5lbWl0KHRoaXMudmlld0RhdGUpO1xuICB9IC8vIGVuZCBtb250aENsaWNrZWRcblxufVxuIl19