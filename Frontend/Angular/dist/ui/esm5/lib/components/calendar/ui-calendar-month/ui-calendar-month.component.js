/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateObj } from '../ui-calendar-year-month/ui-calendar-year-month-date';
var UiCalendarMonthComponent = /** @class */ (function () {
    function UiCalendarMonthComponent() {
        this.weekStartsOn = 0;
        this.translateMap = new Map();
        this.isDateShowFull = false;
        this.isShowTitle = true;
        this.isShowOtherMonthDay = false;
        this.lastMonthDate = [];
        this.nextMonthDate = [];
        // private _isShowOtherMonthDay = false;
        // @Input() 
        // get isShowOtherMonthDay () {
        //   return this._isShowOtherMonthDay;
        // }
        // set isShowOtherMonthDay(isShowOtherMonthDay) {
        //   this._isShowOtherMonthDay = isShowOtherMonthDay;
        // }
        this._events = [];
        this._viewDate = new Date();
        this.viewDateChange = new EventEmitter();
        this.calendarMonthDateClicked = new EventEmitter();
        this.calendarPrevClick = new EventEmitter();
        this.calendarNextClick = new EventEmitter();
        // days of week
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.hasEventDates = [];
    }
    Object.defineProperty(UiCalendarMonthComponent.prototype, "eventList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._events;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._events = val;
            // console.warn('ui viewDate', this._events);
            // console.warn('events', this.events);
            if (val) {
                this.hasEventDates = this.checkHasEventDates();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiCalendarMonthComponent.prototype, "viewDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._viewDate = val;
            this.viewDateChange.emit(this._viewDate);
            console.warn('ui viewDate', this._viewDate);
            console.warn('events', this._events);
            if (val) {
                this.reorderWeekDays();
                this.dateInMonth = this.setDateInMonth();
                this.hasEventDates = this.checkHasEventDates();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.reorderWeekDays();
        this.dateInMonth = this.setDateInMonth();
    };
    /**
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.reorderWeekDays = /**
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
    UiCalendarMonthComponent.prototype.setDateInMonth = 
    // end reorderWeekDays
    /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var dateArr = [];
        /** @type {?} */
        var firstDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);
        /** @type {?} */
        var viewYear = firstDate.getFullYear();
        /** @type {?} */
        var viewMonth = firstDate.getMonth();
        /** @type {?} */
        var firstDay = firstDate.getDay();
        // last month last day
        //alert(viewYear + '/' + viewMonth );
        /** @type {?} */
        var lastMonthHasDay = new Date(viewYear, viewMonth, 0).getDate();
        /** @type {?} */
        var thisMonthHasDay = new Date(viewYear, viewMonth + 1, 0).getDate();
        console.warn('setDateInMonth', this.viewDate);
        console.warn('setDateInMonth', viewYear, viewMonth, firstDay);
        /** @type {?} */
        var todayYear = this.today.getFullYear();
        /** @type {?} */
        var todayMonth = this.today.getMonth();
        /** @type {?} */
        var todayDate = this.today.getDate();
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        var lastMonthDateReversed = [];
        /** @type {?} */
        var nextMonthDate = [];
        try {
            for (var _b = tslib_1.__values(this.viewWeekDays), _c = _b.next(); !_c.done; _c = _b.next()) {
                var weekDay = _c.value;
                if (weekDay === this.weekDays[firstDay]) {
                    break;
                }
                else {
                    //console.log('weekDay !== fistdaty', weekDay)
                    if (!this.isShowOtherMonthDay) {
                        dateArr.push(new DateObj('', false));
                    }
                    else {
                        lastMonthDateReversed.push(lastMonthHasDay - count);
                        count++;
                    }
                }
            } // end for: check the first weekDay
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //caculate show lastMonth and nextMonth
        if (this.isShowOtherMonthDay) {
            this.lastMonthDate = this.reverseLastMonthDate(lastMonthDateReversed);
            /** @type {?} */
            var thisMonthlastdateWeekDay = new Date(viewYear, viewMonth, thisMonthHasDay).getDay();
            //0 SUN
            if (thisMonthlastdateWeekDay == 0) {
                this.nextMonthDate = nextMonthDate;
            }
            else {
                for (var i = 1; i <= 7 - thisMonthlastdateWeekDay; i++) {
                    nextMonthDate.push(i);
                }
                this.nextMonthDate = nextMonthDate;
            }
        }
        //this.changeDetector.detectChanges();
        //console.log("this.lastMonthDate: ", this.reverseLastMonthDate(lastMonthDateReversed));
        // }
        for (var dateVal = 1; dateVal <= new Date(viewYear, (viewMonth + 1), 0).getDate(); ++dateVal) {
            dateArr.push(new DateObj(String(new Date(viewYear, viewMonth, dateVal).getDate()), (todayYear === viewYear && todayMonth === viewMonth && todayDate === dateVal)));
        } // end for: date in month
        return dateArr;
    }; // end setDateInMonth function
    // end setDateInMonth function
    /**
     * @param {?} lastMonthDateReversed
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.reverseLastMonthDate = 
    // end setDateInMonth function
    /**
     * @param {?} lastMonthDateReversed
     * @return {?}
     */
    function (lastMonthDateReversed) {
        /** @type {?} */
        var correctLastMonthDate = [];
        for (var i = (lastMonthDateReversed.length) - 1; i >= 0; i--) {
            correctLastMonthDate.push(lastMonthDateReversed[i]);
        }
        //this.lastMonthDate = correctLastMonthDate;
        return correctLastMonthDate;
    };
    /**
     * @param {?} dateObj
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.changeViewDate = /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        /** @type {?} */
        var clickDate = dateObj.getTxt();
        this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), Number(clickDate));
        this.calendarMonthDateClicked.emit(this.viewDate);
    }; // end changeViewDate
    // end changeViewDate
    /**
     * @return {?}
     */
    UiCalendarMonthComponent.prototype.checkHasEventDates = 
    // end changeViewDate
    /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var arr = [];
        /** @type {?} */
        var tmp_viewYear = this.viewDate.getFullYear();
        /** @type {?} */
        var tmp_viewMonth = this.viewDate.getMonth();
        /** @type {?} */
        var tmp_viewDate = this.viewDate.getDate();
        /** @type {?} */
        var monthDays = new Date(tmp_viewYear, (tmp_viewMonth + 1), 0).getDate();
        for (var dateVal = 1; dateVal <= monthDays; ++dateVal) {
            /** @type {?} */
            var tmp_date = new Date(tmp_viewYear, tmp_viewMonth, dateVal);
            /** @type {?} */
            var tmp_dateTime = tmp_date.getTime();
            try {
                // console.warn('tmp_dateTime', tmp_dateTime, tmp_date);
                for (var _b = tslib_1.__values(this._events), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var event_1 = _c.value;
                    /** @type {?} */
                    var eventYear_start = event_1.start.getFullYear();
                    /** @type {?} */
                    var eventMonth_start = event_1.start.getMonth();
                    /** @type {?} */
                    var eventDate_start = event_1.start.getDate();
                    /** @type {?} */
                    var eventDateTime_start = event_1.start.getTime();
                    /** @type {?} */
                    var eventYear_end = event_1.end.getFullYear();
                    /** @type {?} */
                    var eventMonth_end = event_1.end.getMonth();
                    /** @type {?} */
                    var eventDate_end = event_1.end.getDate();
                    /** @type {?} */
                    var eventDateTime_end = event_1.end.getTime();
                    if ((tmp_viewYear === eventYear_start && tmp_viewMonth === eventMonth_start && dateVal === eventDate_start)
                        || (tmp_viewYear === eventYear_end && tmp_viewMonth === eventMonth_end && dateVal === eventDate_end)) {
                        arr.push(String(dateVal));
                        break;
                    }
                    else if (tmp_dateTime > eventDateTime_start
                        && tmp_dateTime < eventDateTime_end) {
                        arr.push(String(dateVal));
                        // console.log('eventDateTime_start', eventDateTime_start, event.start);
                        // console.log('eventDateTime_end', eventDateTime_end, event.end);
                        break;
                    }
                } // end for: check the date has event or not
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        } // end for: monthDays
        return arr;
    }; // end checkHasEventDates
    UiCalendarMonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-month',
                    template: "\n<div class=\"ui-calendar-weekDays\">\n  <ul>\n    <li class=\"ui-calendar-weekDay-item\" *ngFor=\"let weekDay of viewWeekDays\">\n      <p class=\"ui-calendar-weekDay-txt\">{{translateMap.get(weekDay) ? translateMap.get(weekDay) : weekDay}}</p>\n    </li>\n  </ul>\n</div>\n<!-- end: ui-calendar-weekDays -->\n\n<p *ngIf=\"isShowTitle\" class=\"ui-calendar-title\">{{translateMap.get(viewDate | date: displayMonthFormat) ? translateMap.get(viewDate | date: displayMonthFormat) : viewDate | date: displayMonthFormat}}</p>\n\n<div class=\"ui-calendar-dates\">\n  <ng-container *ngIf=\"isShowOtherMonthDay\">\n    <div class=\"ui-calendar-date style-not-this-month\" *ngFor=\"let num of lastMonthDate\">\n        <p>{{num}}</p>\n        <small *ngIf=\"false\" class=\"event-exist\"></small>\n    </div>\n  </ng-container>\n  <div class=\"ui-calendar-date\" *ngFor=\"let dateObj of this.dateInMonth\"\n  [ngClass]=\"{\n    'ui-today': dateObj.isToday,\n    'ui-selected': dateObj.getTxt() === viewDate.getDate().toString()\n  }\"\n  (click)=\"changeViewDate(dateObj)\">\n    <p>{{ dateObj.getTxt() }}</p>\n    <small *ngIf=\"hasEventDates.includes( dateObj.getTxt() )\" class=\"event-exist\"></small>\n  </div>\n  <ng-container *ngIf=\"isShowOtherMonthDay\">\n    <div class=\"ui-calendar-date style-not-this-month\" *ngFor=\"let num of nextMonthDate\">\n        <p>{{num}}</p>\n        <small *ngIf=\"true\" class=\"event-exist\"></small>\n    </div>\n  </ng-container>\n</div>\n<!-- end: ui-calendar-days -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:block}.ui-calendar-title{margin:20px 5px 0;font-size:1.125rem;font-weight:700;line-height:normal;letter-spacing:.2px;color:#007ab3}.ui-calendar-weekDays .ui-calendar-weekDay-txt{margin:0;padding-bottom:5px;background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:1px solid #ececec;border-bottom:0}.ui-calendar-weekDays .ui-calendar-weekDay-txt:not(:last-child){border-right:0}.ui-calendar-dates{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-top:-30px}.ui-calendar-dates .ui-calendar-date{width:14.28571%;align-self:flex-start}.ui-calendar-dates .ui-calendar-date p{width:1.67em;height:1.67em;min-height:0;margin:35px auto 5px;color:#414141;font-size:.75rem;font-weight:600;line-height:1.67em;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}.ui-calendar-dates .ui-calendar-date.style-not-this-month p{color:#c2c2c2}.ui-calendar-dates .ui-calendar-date.ui-selected p{background-color:#414141;color:#fff}.ui-calendar-dates .ui-calendar-date.ui-today p{color:#003781;font-weight:700}.ui-calendar-dates .ui-calendar-date.ui-today.ui-selected p{background-color:#003781;color:#fff}.event-exist{display:block;width:5px;height:5px;margin:0 auto;background-color:#d9d4d4;border-radius:50%}@media screen and (max-width:1023px){.ui-calendar-weekDays>ul{display:flex}.ui-calendar-weekDays .ui-calendar-weekDay-item{display:inline-block;flex:1}.ui-calendar-weekDays .ui-calendar-weekDay-txt{border:0;border-bottom:1px solid #ececec;padding-top:0}.ui-calendar-title{margin-left:15px;margin-right:15px}.ui-calendar-dates{margin-top:-15px}.ui-calendar-dates .ui-calendar-date p{font-size:1.33em;font-weight:300;letter-spacing:normal;border:0}}:host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt{margin:0;padding-bottom:20px;background-color:#fff;color:#767676;font-size:.75rem;font-weight:700;line-height:1.33;letter-spacing:.2px;text-align:center;border:none;border-bottom:0}:host-context(.calendar-style-collapse) .ui-calendar-weekDays .ui-calendar-weekDay-txt:not(:last-child){border-right:0}:host-context(.calendar-style-collapse) .ui-calendar-dates{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-top:-30px}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date{width:14.28571%;align-self:flex-start;position:relative}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date p{width:1.3em;height:1.3em;line-height:1.3em;min-height:0;margin:20px auto 0;font-size:.75rem;font-weight:600;letter-spacing:.2px;text-align:center;opacity:1;border-radius:50%}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date.ui-selected p{background-color:#414141;color:#fff}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date.ui-today p{color:#003781;font-weight:700}:host-context(.calendar-style-collapse) .ui-calendar-dates .ui-calendar-date.ui-today.ui-selected p{background-color:#003781;color:#fff}:host-context(.calendar-style-collapse) .event-exist{position:absolute;left:0;right:0;margin:0 auto;bottom:-10px}"]
                }] }
    ];
    UiCalendarMonthComponent.ctorParameters = function () { return []; };
    UiCalendarMonthComponent.propDecorators = {
        today: [{ type: Input }],
        displayMonthFormat: [{ type: Input }],
        weekStartsOn: [{ type: Input }],
        translateMap: [{ type: Input }],
        isDateShowFull: [{ type: Input }],
        isShowTitle: [{ type: Input }],
        isShowOtherMonthDay: [{ type: Input }],
        eventList: [{ type: Input }],
        viewDate: [{ type: Input }],
        viewDateChange: [{ type: Output }],
        calendarMonthDateClicked: [{ type: Output }],
        calendarPrevClick: [{ type: Output }],
        calendarNextClick: [{ type: Output }]
    };
    return UiCalendarMonthComponent;
}());
export { UiCalendarMonthComponent };
if (false) {
    /** @type {?} */
    UiCalendarMonthComponent.prototype.today;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.displayMonthFormat;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.weekStartsOn;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.translateMap;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.isDateShowFull;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.isShowTitle;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.isShowOtherMonthDay;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.lastMonthDate;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.nextMonthDate;
    /**
     * @type {?}
     * @private
     */
    UiCalendarMonthComponent.prototype._events;
    /**
     * @type {?}
     * @private
     */
    UiCalendarMonthComponent.prototype._viewDate;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.viewDateChange;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.calendarMonthDateClicked;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.calendarPrevClick;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.calendarNextClick;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.weekDays;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.viewWeekDays;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.dateInMonth;
    /** @type {?} */
    UiCalendarMonthComponent.prototype.hasEventDates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXItbW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYWxlbmRhci91aS1jYWxlbmRhci1tb250aC91aS1jYWxlbmRhci1tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUVoRjtJQTZFRTtRQXBFUyxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixpQkFBWSxHQUF1QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUM3RCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFOUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDMUIsd0NBQXdDO1FBQ3hDLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0Isc0NBQXNDO1FBQ3RDLElBQUk7UUFDSixpREFBaUQ7UUFDakQscURBQXFEO1FBQ3JELElBQUk7UUFFSSxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBZWIsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFtQjNCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyw2QkFBd0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxlQUFlO1FBQ2YsYUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUs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NUIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGsvQ0FBaUQ7O2lCQUVsRDs7Ozt3QkFHRSxLQUFLO3FDQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSztzQ0FDTCxLQUFLOzRCQWNMLEtBQUs7MkJBZ0JMLEtBQUs7aUNBaUJMLE1BQU07MkNBRU4sTUFBTTtvQ0FDTixNQUFNO29DQUNOLE1BQU07O0lBcUxULCtCQUFDO0NBQUEsQUFyUEQsSUFxUEM7U0FoUFksd0JBQXdCOzs7SUFFbkMseUNBQXFCOztJQUNyQixzREFBb0M7O0lBQ3BDLGdEQUFrQzs7SUFDbEMsZ0RBQXNFOztJQUN0RSxrREFBZ0M7O0lBQ2hDLCtDQUE0Qjs7SUFDNUIsdURBQXFDOztJQUVyQyxpREFBMEI7O0lBQzFCLGlEQUEwQjs7Ozs7SUFVMUIsMkNBQXFCOzs7OztJQWVyQiw2Q0FBcUM7O0lBbUJyQyxrREFBOEM7O0lBRTlDLDREQUF3RDs7SUFDeEQscURBQWlEOztJQUNqRCxxREFBaUQ7O0lBR2pELDRDQUE2RDs7SUFDN0QsZ0RBQXVCOztJQUd2QiwrQ0FBdUI7O0lBQ3ZCLGlEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVPYmogfSBmcm9tICcuLi91aS1jYWxlbmRhci15ZWFyLW1vbnRoL3VpLWNhbGVuZGFyLXllYXItbW9udGgtZGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1jYWxlbmRhci1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jYWxlbmRhci1tb250aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNhbGVuZGFyLW1vbnRoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlDYWxlbmRhck1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0b2RheTogRGF0ZTtcbiAgQElucHV0KCkgZGlzcGxheU1vbnRoRm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHdlZWtTdGFydHNPbjogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgdHJhbnNsYXRlTWFwOiBNYXA8c3RyaW5nLHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBASW5wdXQoKSBpc0RhdGVTaG93RnVsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1Nob3dUaXRsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGlzU2hvd090aGVyTW9udGhEYXkgPSBmYWxzZTtcblxuICBwdWJsaWMgbGFzdE1vbnRoRGF0ZSA9IFtdO1xuICBwdWJsaWMgbmV4dE1vbnRoRGF0ZSA9IFtdO1xuICAvLyBwcml2YXRlIF9pc1Nob3dPdGhlck1vbnRoRGF5ID0gZmFsc2U7XG4gIC8vIEBJbnB1dCgpIFxuICAvLyBnZXQgaXNTaG93T3RoZXJNb250aERheSAoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2lzU2hvd090aGVyTW9udGhEYXk7XG4gIC8vIH1cbiAgLy8gc2V0IGlzU2hvd090aGVyTW9udGhEYXkoaXNTaG93T3RoZXJNb250aERheSkge1xuICAvLyAgIHRoaXMuX2lzU2hvd090aGVyTW9udGhEYXkgPSBpc1Nob3dPdGhlck1vbnRoRGF5O1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBfZXZlbnRzID0gW107XG4gIEBJbnB1dCgpXG4gIGdldCBldmVudExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgfVxuICBzZXQgZXZlbnRMaXN0KHZhbCkge1xuICAgIHRoaXMuX2V2ZW50cyA9IHZhbDtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3VpIHZpZXdEYXRlJywgdGhpcy5fZXZlbnRzKTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ2V2ZW50cycsIHRoaXMuZXZlbnRzKTtcblxuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuaGFzRXZlbnREYXRlcyA9IHRoaXMuY2hlY2tIYXNFdmVudERhdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmlld0RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBcbiAgQElucHV0KClcbiAgZ2V0IHZpZXdEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3RGF0ZTtcbiAgfVxuICBzZXQgdmlld0RhdGUodmFsKSB7XG4gICAgdGhpcy5fdmlld0RhdGUgPSB2YWw7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KHRoaXMuX3ZpZXdEYXRlKTtcblxuICAgIGNvbnNvbGUud2FybigndWkgdmlld0RhdGUnLCB0aGlzLl92aWV3RGF0ZSk7XG4gICAgY29uc29sZS53YXJuKCdldmVudHMnLCB0aGlzLl9ldmVudHMpO1xuXG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5yZW9yZGVyV2Vla0RheXMoKTtcbiAgICAgIHRoaXMuZGF0ZUluTW9udGggPSB0aGlzLnNldERhdGVJbk1vbnRoKCk7XG4gICAgICB0aGlzLmhhc0V2ZW50RGF0ZXMgPSB0aGlzLmNoZWNrSGFzRXZlbnREYXRlcygpO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgdmlld0RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIGNhbGVuZGFyTW9udGhEYXRlQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNhbGVuZGFyUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2FsZW5kYXJOZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZGF5cyBvZiB3ZWVrXG4gIHdlZWtEYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgdmlld1dlZWtEYXlzOiBzdHJpbmdbXTtcblxuICAvLyBkYXRlcyBvZiBtb250aFxuICBkYXRlSW5Nb250aDogRGF0ZU9ialtdO1xuICBoYXNFdmVudERhdGVzID0gW107XG5cbiAgXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVvcmRlcldlZWtEYXlzKCk7XG4gICAgdGhpcy5kYXRlSW5Nb250aCA9IHRoaXMuc2V0RGF0ZUluTW9udGgoKTtcbiAgfVxuXG4gIHJlb3JkZXJXZWVrRGF5cyAoKSB7XG5cbiAgICB0aGlzLnZpZXdXZWVrRGF5cyA9IHRoaXMud2Vla0RheXMuc2xpY2UodGhpcy53ZWVrU3RhcnRzT24sIHRoaXMud2Vla0RheXMubGVuZ3RoKTtcbiAgICBpZiAodGhpcy53ZWVrU3RhcnRzT24gPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgdG1wID0gdGhpcy53ZWVrRGF5cy5zbGljZSgwLCB0aGlzLndlZWtTdGFydHNPbik7XG4gICAgdGhpcy52aWV3V2Vla0RheXMgPSB0aGlzLnZpZXdXZWVrRGF5cy5jb25jYXQodG1wKTtcbiAgfSAvLyBlbmQgcmVvcmRlcldlZWtEYXlzXG5cbiAgc2V0RGF0ZUluTW9udGgoKSB7XG4gICAgbGV0IGRhdGVBcnI6IERhdGVPYmpbXSA9IFtdO1xuXG4gICAgbGV0IGZpcnN0RGF0ZSA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSwgdGhpcy52aWV3RGF0ZS5nZXRNb250aCgpLCAxKTtcbiAgXG4gICAgbGV0IHZpZXdZZWFyID0gZmlyc3REYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IHZpZXdNb250aCA9IGZpcnN0RGF0ZS5nZXRNb250aCgpO1xuICAgIGxldCBmaXJzdERheSA9IGZpcnN0RGF0ZS5nZXREYXkoKTtcbiAgICAvLyBsYXN0IG1vbnRoIGxhc3QgZGF5XG4gICAgLy9hbGVydCh2aWV3WWVhciArICcvJyArIHZpZXdNb250aCApO1xuICAgIGxldCBsYXN0TW9udGhIYXNEYXkgPSBuZXcgRGF0ZSh2aWV3WWVhciwgdmlld01vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgbGV0IHRoaXNNb250aEhhc0RheSA9IG5ldyBEYXRlKHZpZXdZZWFyLCB2aWV3TW9udGgrMSwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuXG5cbiAgICBjb25zb2xlLndhcm4oJ3NldERhdGVJbk1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XG4gICAgY29uc29sZS53YXJuKCdzZXREYXRlSW5Nb250aCcsIHZpZXdZZWFyLCB2aWV3TW9udGgsIGZpcnN0RGF5KTtcbiAgICBcbiAgICBsZXQgdG9kYXlZZWFyID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCB0b2RheU1vbnRoID0gdGhpcy50b2RheS5nZXRNb250aCgpO1xuICAgIGxldCB0b2RheURhdGUgPSB0aGlzLnRvZGF5LmdldERhdGUoKTtcblxuICAgIFxuXG4gIFxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGxhc3RNb250aERhdGVSZXZlcnNlZCA9IFtdO1xuICAgIGxldCBuZXh0TW9udGhEYXRlID0gW107XG4gICAgZm9yIChsZXQgd2Vla0RheSBvZiB0aGlzLnZpZXdXZWVrRGF5cykge1xuICAgICAgXG4gICAgICBpZiAod2Vla0RheSA9PT0gdGhpcy53ZWVrRGF5c1tmaXJzdERheV0pIHtcbiAgICAgICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3dlZWtEYXkgIT09IGZpc3RkYXR5Jywgd2Vla0RheSlcbiAgICAgICAgaWYoIXRoaXMuaXNTaG93T3RoZXJNb250aERheSkge1xuICAgICAgICAgIGRhdGVBcnIucHVzaChuZXcgRGF0ZU9iaignJywgZmFsc2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxhc3RNb250aERhdGVSZXZlcnNlZC5wdXNoKGxhc3RNb250aEhhc0RheS1jb3VudCk7XG4gICAgICAgICAgY291bnQgKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIH0gLy8gZW5kIGZvcjogY2hlY2sgdGhlIGZpcnN0IHdlZWtEYXlcblxuICAgIC8vY2FjdWxhdGUgc2hvdyBsYXN0TW9udGggYW5kIG5leHRNb250aFxuICAgIGlmKHRoaXMuaXNTaG93T3RoZXJNb250aERheSkge1xuICAgICAgdGhpcy5sYXN0TW9udGhEYXRlID0gdGhpcy5yZXZlcnNlTGFzdE1vbnRoRGF0ZShsYXN0TW9udGhEYXRlUmV2ZXJzZWQpO1xuXG4gICAgICBsZXQgdGhpc01vbnRobGFzdGRhdGVXZWVrRGF5ID0gbmV3IERhdGUodmlld1llYXIsdmlld01vbnRoLCB0aGlzTW9udGhIYXNEYXkpLmdldERheSgpO1xuICAgICAgLy8wIFNVTlxuXG4gICAgICBpZih0aGlzTW9udGhsYXN0ZGF0ZVdlZWtEYXkgPT0gMCkge1xuICAgICAgICB0aGlzLm5leHRNb250aERhdGUgPSBuZXh0TW9udGhEYXRlO1xuICAgICAgfVxuXG4gICAgICBlbHNlIHtcbiAgICAgICAgZm9yKGxldCBpID0gMSA7IGkgPD0gNyAtIHRoaXNNb250aGxhc3RkYXRlV2Vla0RheSA7IGkrKykge1xuICAgICAgICAgIG5leHRNb250aERhdGUucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5leHRNb250aERhdGUgPSBuZXh0TW9udGhEYXRlO1xuICAgICAgfVxuICAgIH1cbiAgICAgIC8vdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwidGhpcy5sYXN0TW9udGhEYXRlOiBcIiwgdGhpcy5yZXZlcnNlTGFzdE1vbnRoRGF0ZShsYXN0TW9udGhEYXRlUmV2ZXJzZWQpKTtcbiAgICAgIFxuICAgICAgXG5cbiAgICAvLyB9XG5cbiAgICBmb3IgKGxldCBkYXRlVmFsID0gMTsgZGF0ZVZhbCA8PSBuZXcgRGF0ZSh2aWV3WWVhciwgKHZpZXdNb250aCArIDEpLCAwKS5nZXREYXRlKCk7ICsrZGF0ZVZhbCkge1xuXG4gICAgICBkYXRlQXJyLnB1c2goIG5ldyBEYXRlT2JqKFN0cmluZyhuZXcgRGF0ZSh2aWV3WWVhciwgdmlld01vbnRoLCBkYXRlVmFsKS5nZXREYXRlKCkpLFxuICAgICAgICAodG9kYXlZZWFyID09PSB2aWV3WWVhciAmJiB0b2RheU1vbnRoID09PSB2aWV3TW9udGggJiYgdG9kYXlEYXRlID09PSBkYXRlVmFsKSkgKTtcbiAgICB9IC8vIGVuZCBmb3I6IGRhdGUgaW4gbW9udGhcblxuXG4gICAgXG5cbiAgICByZXR1cm4gZGF0ZUFycjtcbiAgfSAvLyBlbmQgc2V0RGF0ZUluTW9udGggZnVuY3Rpb25cblxuICByZXZlcnNlTGFzdE1vbnRoRGF0ZShsYXN0TW9udGhEYXRlUmV2ZXJzZWQpIHtcbiAgICBsZXQgY29ycmVjdExhc3RNb250aERhdGUgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAobGFzdE1vbnRoRGF0ZVJldmVyc2VkLmxlbmd0aCktMSA7IGkgPj0gMCA7IGktLSkge1xuICAgICAgY29ycmVjdExhc3RNb250aERhdGUucHVzaChsYXN0TW9udGhEYXRlUmV2ZXJzZWRbaV0pO1xuICAgIH1cblxuICAgIC8vdGhpcy5sYXN0TW9udGhEYXRlID0gY29ycmVjdExhc3RNb250aERhdGU7XG4gICAgcmV0dXJuIGNvcnJlY3RMYXN0TW9udGhEYXRlO1xuICB9XG5cbiAgY2hhbmdlVmlld0RhdGUoZGF0ZU9iajogRGF0ZU9iaikge1xuICAgIGxldCBjbGlja0RhdGUgPSBkYXRlT2JqLmdldFR4dCgpO1xuICAgIFxuXG4gICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSwgdGhpcy52aWV3RGF0ZS5nZXRNb250aCgpLCBOdW1iZXIoY2xpY2tEYXRlKSk7XG4gICAgdGhpcy5jYWxlbmRhck1vbnRoRGF0ZUNsaWNrZWQuZW1pdCh0aGlzLnZpZXdEYXRlKTtcbiAgfSAvLyBlbmQgY2hhbmdlVmlld0RhdGVcblxuICBjaGVja0hhc0V2ZW50RGF0ZXMoKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgbGV0IHRtcF92aWV3WWVhciA9IHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgdG1wX3ZpZXdNb250aCA9IHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgdG1wX3ZpZXdEYXRlID0gdGhpcy52aWV3RGF0ZS5nZXREYXRlKCk7XG5cbiAgICBsZXQgbW9udGhEYXlzID0gbmV3IERhdGUodG1wX3ZpZXdZZWFyLCAodG1wX3ZpZXdNb250aCArIDEpLCAwKS5nZXREYXRlKCk7XG5cbiAgICBmb3IgKGxldCBkYXRlVmFsID0gMTsgZGF0ZVZhbCA8PSBtb250aERheXM7ICsrZGF0ZVZhbCkge1xuXG4gICAgICBsZXQgdG1wX2RhdGUgPSBuZXcgRGF0ZSh0bXBfdmlld1llYXIsIHRtcF92aWV3TW9udGgsIGRhdGVWYWwpO1xuICAgICAgbGV0IHRtcF9kYXRlVGltZSA9IHRtcF9kYXRlLmdldFRpbWUoKTtcblxuICAgICAgLy8gY29uc29sZS53YXJuKCd0bXBfZGF0ZVRpbWUnLCB0bXBfZGF0ZVRpbWUsIHRtcF9kYXRlKTtcblxuICAgICAgZm9yIChsZXQgZXZlbnQgb2YgdGhpcy5fZXZlbnRzKSB7XG4gICAgICAgIGxldCBldmVudFllYXJfc3RhcnQgPSBldmVudC5zdGFydC5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgZXZlbnRNb250aF9zdGFydCA9IGV2ZW50LnN0YXJ0LmdldE1vbnRoKCk7XG4gICAgICAgIGxldCBldmVudERhdGVfc3RhcnQgPSBldmVudC5zdGFydC5nZXREYXRlKCk7XG4gICAgICAgIGxldCBldmVudERhdGVUaW1lX3N0YXJ0ID0gZXZlbnQuc3RhcnQuZ2V0VGltZSgpO1xuXG4gICAgICAgIGxldCBldmVudFllYXJfZW5kID0gZXZlbnQuZW5kLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBldmVudE1vbnRoX2VuZCA9IGV2ZW50LmVuZC5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZXZlbnREYXRlX2VuZCA9IGV2ZW50LmVuZC5nZXREYXRlKCk7XG4gICAgICAgIGxldCBldmVudERhdGVUaW1lX2VuZCA9IGV2ZW50LmVuZC5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKCh0bXBfdmlld1llYXIgPT09IGV2ZW50WWVhcl9zdGFydCAmJiB0bXBfdmlld01vbnRoID09PSBldmVudE1vbnRoX3N0YXJ0ICYmIGRhdGVWYWwgPT09IGV2ZW50RGF0ZV9zdGFydClcbiAgICAgICAgICB8fCAodG1wX3ZpZXdZZWFyID09PSBldmVudFllYXJfZW5kICYmIHRtcF92aWV3TW9udGggPT09IGV2ZW50TW9udGhfZW5kICYmIGRhdGVWYWwgPT09IGV2ZW50RGF0ZV9lbmQpICkge1xuICAgICAgICAgICAgYXJyLnB1c2goU3RyaW5nKGRhdGVWYWwpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHRtcF9kYXRlVGltZSA+IGV2ZW50RGF0ZVRpbWVfc3RhcnRcbiAgICAgICAgICAmJiB0bXBfZGF0ZVRpbWUgPCBldmVudERhdGVUaW1lX2VuZCkge1xuICAgICAgICAgICAgYXJyLnB1c2goU3RyaW5nKGRhdGVWYWwpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdldmVudERhdGVUaW1lX3N0YXJ0JywgZXZlbnREYXRlVGltZV9zdGFydCwgZXZlbnQuc3RhcnQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2V2ZW50RGF0ZVRpbWVfZW5kJywgZXZlbnREYXRlVGltZV9lbmQsIGV2ZW50LmVuZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICB9IC8vIGVuZCBmb3I6IGNoZWNrIHRoZSBkYXRlIGhhcyBldmVudCBvciBub3RcbiAgICB9IC8vIGVuZCBmb3I6IG1vbnRoRGF5c1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfSAvLyBlbmQgY2hlY2tIYXNFdmVudERhdGVzXG5cbiAgXG5cbn1cbiJdfQ==