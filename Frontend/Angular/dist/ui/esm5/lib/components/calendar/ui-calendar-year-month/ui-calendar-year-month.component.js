/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DateObj } from './ui-calendar-year-month-date';
var UiCalendarYearMonthComponent = /** @class */ (function () {
    function UiCalendarYearMonthComponent() {
    }
    /**
     * @return {?}
     */
    UiCalendarYearMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dateInMonth = this.setDateInMonth();
    };
    /**
     * @return {?}
     */
    UiCalendarYearMonthComponent.prototype.setDateInMonth = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var dateArr = [];
        /** @type {?} */
        var viewYear = this.monthFirstDate.getFullYear();
        /** @type {?} */
        var viewMonth = this.monthFirstDate.getMonth();
        /** @type {?} */
        var firstDay = this.monthFirstDate.getDay();
        /** @type {?} */
        var todayYear = this.today.getFullYear();
        /** @type {?} */
        var todayMonth = this.today.getMonth();
        /** @type {?} */
        var todayDate = this.today.getDate();
        try {
            for (var _b = tslib_1.__values(this.viewWeekDayList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var weekDay = _c.value;
                if (weekDay === this.weekDayList[firstDay]) {
                    break;
                }
                else {
                    dateArr.push(new DateObj('', false));
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
        for (var dateVal = 1; dateVal <= new Date(viewYear, (viewMonth + 1), 0).getDate(); ++dateVal) {
            dateArr.push(new DateObj(String(new Date(viewYear, viewMonth, dateVal).getDate()), (todayYear === viewYear && todayMonth === viewMonth && todayDate === dateVal)));
        } // end for: date in month
        return dateArr;
    }; // end setDateInMonth function
    UiCalendarYearMonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-calendar-year-month',
                    template: "<div class=\"ui-calendarY-dates\">\n  <div class=\"ui-calendarY-date\" *ngFor=\"let dateObj of this.dateInMonth\" [ngClass]=\"{\n    'ui-today': dateObj.isToday\n  }\">\n    <p>{{ dateObj.getTxt() }}</p>\n  </div>\n</div>\n<!-- end: ui-calendarY-days -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-calendarY-dates{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-bottom:5px}.ui-calendarY-dates .ui-calendarY-date{min-width:calc(100% / 7);height:1.5rem}.ui-calendarY-dates .ui-calendarY-date.ui-today{position:relative}.ui-calendarY-dates .ui-calendarY-date.ui-today:before{content:'';display:inline-block;width:20px;height:20px;position:absolute;top:calc(50% - 10px);left:calc(50% - 10px);background-color:#003781;border-radius:50%}.ui-calendarY-dates .ui-calendarY-date.ui-today>p{position:relative;color:#fff}.ui-calendarY-dates .ui-calendarY-date>p{margin:0;font-size:.75rem;font-weight:400;line-height:1.5rem;letter-spacing:normal;text-align:center;color:#414141}@media screen and (max-width:1023px){.ui-calendarY-dates .ui-calendarY-date{-webkit-transform:scale(.83);transform:scale(.83);min-width:calc(95% / 7);height:1.25rem;overflow:visible!important}.ui-calendarY-dates .ui-calendarY-date.ui-today::before{top:calc(50% - .5rem)}}"]
                }] }
    ];
    UiCalendarYearMonthComponent.ctorParameters = function () { return []; };
    UiCalendarYearMonthComponent.propDecorators = {
        monthFirstDate: [{ type: Input }],
        today: [{ type: Input }],
        weekDayList: [{ type: Input }],
        viewWeekDayList: [{ type: Input }]
    };
    return UiCalendarYearMonthComponent;
}());
export { UiCalendarYearMonthComponent };
if (false) {
    /** @type {?} */
    UiCalendarYearMonthComponent.prototype.monthFirstDate;
    /** @type {?} */
    UiCalendarYearMonthComponent.prototype.today;
    /** @type {?} */
    UiCalendarYearMonthComponent.prototype.weekDayList;
    /** @type {?} */
    UiCalendarYearMonthComponent.prototype.viewWeekDayList;
    /** @type {?} */
    UiCalendarYearMonthComponent.prototype.dateInMonth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXIteWVhci1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhbGVuZGFyL3VpLWNhbGVuZGFyLXllYXItbW9udGgvdWktY2FsZW5kYXIteWVhci1tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFeEQ7SUFjRTtJQUFnQixDQUFDOzs7O0lBRWpCLCtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxxREFBYzs7O0lBQWQ7OztZQUNNLE9BQU8sR0FBYyxFQUFFOztZQUV2QixRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7O1lBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTs7WUFDMUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFOztZQUV2QyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7O1lBQ3BDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTs7WUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFOztZQUVwQyxLQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBckMsSUFBSSxPQUFPLFdBQUE7Z0JBRWQsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDMUMsTUFBTTtpQkFDUDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUN0QzthQUNGLENBQUMsbUNBQW1DOzs7Ozs7Ozs7UUFHckMsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTtZQUU1RixPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQ2hGLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFFLENBQUM7U0FDcEYsQ0FBQyx5QkFBeUI7UUFFM0IsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxFQUFDLDhCQUE4Qjs7Z0JBaERqQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsNFFBQXNEOztpQkFFdkQ7Ozs7aUNBR0UsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUF3Q1IsbUNBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTdDWSw0QkFBNEI7OztJQUV2QyxzREFBOEI7O0lBQzlCLDZDQUFxQjs7SUFDckIsbURBQStCOztJQUMvQix1REFBbUM7O0lBRW5DLG1EQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZU9iaiB9IGZyb20gJy4vdWktY2FsZW5kYXIteWVhci1tb250aC1kYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWNhbGVuZGFyLXllYXItbW9udGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktY2FsZW5kYXIteWVhci1tb250aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNhbGVuZGFyLXllYXItbW9udGguY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaUNhbGVuZGFyWWVhck1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtb250aEZpcnN0RGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgdG9kYXk6IERhdGU7XG4gIEBJbnB1dCgpIHdlZWtEYXlMaXN0OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgdmlld1dlZWtEYXlMaXN0OiBzdHJpbmdbXTtcblxuICBkYXRlSW5Nb250aDogRGF0ZU9ialtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlSW5Nb250aCA9IHRoaXMuc2V0RGF0ZUluTW9udGgoKTtcbiAgfVxuXG4gIHNldERhdGVJbk1vbnRoKCkge1xuICAgIGxldCBkYXRlQXJyOiBEYXRlT2JqW10gPSBbXTtcblxuICAgIGxldCB2aWV3WWVhciA9IHRoaXMubW9udGhGaXJzdERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgdmlld01vbnRoID0gdGhpcy5tb250aEZpcnN0RGF0ZS5nZXRNb250aCgpO1xuICAgIGxldCBmaXJzdERheSA9IHRoaXMubW9udGhGaXJzdERhdGUuZ2V0RGF5KCk7XG5cbiAgICBsZXQgdG9kYXlZZWFyID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCB0b2RheU1vbnRoID0gdGhpcy50b2RheS5nZXRNb250aCgpO1xuICAgIGxldCB0b2RheURhdGUgPSB0aGlzLnRvZGF5LmdldERhdGUoKTtcblxuICAgIGZvciAobGV0IHdlZWtEYXkgb2YgdGhpcy52aWV3V2Vla0RheUxpc3QpIHtcblxuICAgICAgaWYgKHdlZWtEYXkgPT09IHRoaXMud2Vla0RheUxpc3RbZmlyc3REYXldKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZUFyci5wdXNoKG5ldyBEYXRlT2JqKCcnLCBmYWxzZSkpO1xuICAgICAgfVxuICAgIH0gLy8gZW5kIGZvcjogY2hlY2sgdGhlIGZpcnN0IHdlZWtEYXlcblxuXG4gICAgZm9yIChsZXQgZGF0ZVZhbCA9IDE7IGRhdGVWYWwgPD0gbmV3IERhdGUodmlld1llYXIsICh2aWV3TW9udGggKyAxKSwgMCkuZ2V0RGF0ZSgpOyArK2RhdGVWYWwpIHtcblxuICAgICAgZGF0ZUFyci5wdXNoKCBuZXcgRGF0ZU9iaihTdHJpbmcobmV3IERhdGUodmlld1llYXIsIHZpZXdNb250aCwgZGF0ZVZhbCkuZ2V0RGF0ZSgpKSxcbiAgICAgICAgKHRvZGF5WWVhciA9PT0gdmlld1llYXIgJiYgdG9kYXlNb250aCA9PT0gdmlld01vbnRoICYmIHRvZGF5RGF0ZSA9PT0gZGF0ZVZhbCkpICk7XG4gICAgfSAvLyBlbmQgZm9yOiBkYXRlIGluIG1vbnRoXG5cbiAgICByZXR1cm4gZGF0ZUFycjtcbiAgfSAvLyBlbmQgc2V0RGF0ZUluTW9udGggZnVuY3Rpb25cblxufVxuIl19