/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DateObj } from './ui-calendar-year-month-date';
export class UiCalendarYearMonthComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dateInMonth = this.setDateInMonth();
    }
    /**
     * @return {?}
     */
    setDateInMonth() {
        /** @type {?} */
        let dateArr = [];
        /** @type {?} */
        let viewYear = this.monthFirstDate.getFullYear();
        /** @type {?} */
        let viewMonth = this.monthFirstDate.getMonth();
        /** @type {?} */
        let firstDay = this.monthFirstDate.getDay();
        /** @type {?} */
        let todayYear = this.today.getFullYear();
        /** @type {?} */
        let todayMonth = this.today.getMonth();
        /** @type {?} */
        let todayDate = this.today.getDate();
        for (let weekDay of this.viewWeekDayList) {
            if (weekDay === this.weekDayList[firstDay]) {
                break;
            }
            else {
                dateArr.push(new DateObj('', false));
            }
        } // end for: check the first weekDay
        for (let dateVal = 1; dateVal <= new Date(viewYear, (viewMonth + 1), 0).getDate(); ++dateVal) {
            dateArr.push(new DateObj(String(new Date(viewYear, viewMonth, dateVal).getDate()), (todayYear === viewYear && todayMonth === viewMonth && todayDate === dateVal)));
        } // end for: date in month
        return dateArr;
    } // end setDateInMonth function
}
UiCalendarYearMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-calendar-year-month',
                template: "<div class=\"ui-calendarY-dates\">\n  <div class=\"ui-calendarY-date\" *ngFor=\"let dateObj of this.dateInMonth\" [ngClass]=\"{\n    'ui-today': dateObj.isToday\n  }\">\n    <p>{{ dateObj.getTxt() }}</p>\n  </div>\n</div>\n<!-- end: ui-calendarY-days -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-calendarY-dates{display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:wrap;margin-bottom:5px}.ui-calendarY-dates .ui-calendarY-date{min-width:calc(100% / 7);height:1.5rem}.ui-calendarY-dates .ui-calendarY-date.ui-today{position:relative}.ui-calendarY-dates .ui-calendarY-date.ui-today:before{content:'';display:inline-block;width:20px;height:20px;position:absolute;top:calc(50% - 10px);left:calc(50% - 10px);background-color:#003781;border-radius:50%}.ui-calendarY-dates .ui-calendarY-date.ui-today>p{position:relative;color:#fff}.ui-calendarY-dates .ui-calendarY-date>p{margin:0;font-size:.75rem;font-weight:400;line-height:1.5rem;letter-spacing:normal;text-align:center;color:#414141}@media screen and (max-width:1023px){.ui-calendarY-dates .ui-calendarY-date{-webkit-transform:scale(.83);transform:scale(.83);min-width:calc(95% / 7);height:1.25rem;overflow:visible!important}.ui-calendarY-dates .ui-calendarY-date.ui-today::before{top:calc(50% - .5rem)}}"]
            }] }
];
UiCalendarYearMonthComponent.ctorParameters = () => [];
UiCalendarYearMonthComponent.propDecorators = {
    monthFirstDate: [{ type: Input }],
    today: [{ type: Input }],
    weekDayList: [{ type: Input }],
    viewWeekDayList: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FsZW5kYXIteWVhci1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhbGVuZGFyL3VpLWNhbGVuZGFyLXllYXItbW9udGgvdWktY2FsZW5kYXIteWVhci1tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU94RCxNQUFNO0lBU0osZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxjQUFjOztZQUNSLE9BQU8sR0FBYyxFQUFFOztZQUV2QixRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7O1lBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTs7WUFDMUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFOztZQUV2QyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7O1lBQ3BDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTs7WUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBRXBDLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUV4QyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQyxNQUFNO2FBQ1A7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0QztTQUNGLENBQUMsbUNBQW1DO1FBR3JDLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7WUFFNUYsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUNoRixDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBRSxDQUFDO1NBQ3BGLENBQUMseUJBQXlCO1FBRTNCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyw4QkFBOEI7OztZQWhEakMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDRRQUFzRDs7YUFFdkQ7Ozs7NkJBR0UsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQUhOLHNEQUE4Qjs7SUFDOUIsNkNBQXFCOztJQUNyQixtREFBK0I7O0lBQy9CLHVEQUFtQzs7SUFFbkMsbURBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlT2JqIH0gZnJvbSAnLi91aS1jYWxlbmRhci15ZWFyLW1vbnRoLWRhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktY2FsZW5kYXIteWVhci1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jYWxlbmRhci15ZWFyLW1vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY2FsZW5kYXIteWVhci1tb250aC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpQ2FsZW5kYXJZZWFyTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1vbnRoRmlyc3REYXRlOiBEYXRlO1xuICBASW5wdXQoKSB0b2RheTogRGF0ZTtcbiAgQElucHV0KCkgd2Vla0RheUxpc3Q6IHN0cmluZ1tdO1xuICBASW5wdXQoKSB2aWV3V2Vla0RheUxpc3Q6IHN0cmluZ1tdO1xuXG4gIGRhdGVJbk1vbnRoOiBEYXRlT2JqW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGVJbk1vbnRoID0gdGhpcy5zZXREYXRlSW5Nb250aCgpO1xuICB9XG5cbiAgc2V0RGF0ZUluTW9udGgoKSB7XG4gICAgbGV0IGRhdGVBcnI6IERhdGVPYmpbXSA9IFtdO1xuXG4gICAgbGV0IHZpZXdZZWFyID0gdGhpcy5tb250aEZpcnN0RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCB2aWV3TW9udGggPSB0aGlzLm1vbnRoRmlyc3REYXRlLmdldE1vbnRoKCk7XG4gICAgbGV0IGZpcnN0RGF5ID0gdGhpcy5tb250aEZpcnN0RGF0ZS5nZXREYXkoKTtcblxuICAgIGxldCB0b2RheVllYXIgPSB0aGlzLnRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IHRvZGF5TW9udGggPSB0aGlzLnRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IHRoaXMudG9kYXkuZ2V0RGF0ZSgpO1xuXG4gICAgZm9yIChsZXQgd2Vla0RheSBvZiB0aGlzLnZpZXdXZWVrRGF5TGlzdCkge1xuXG4gICAgICBpZiAod2Vla0RheSA9PT0gdGhpcy53ZWVrRGF5TGlzdFtmaXJzdERheV0pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlQXJyLnB1c2gobmV3IERhdGVPYmooJycsIGZhbHNlKSk7XG4gICAgICB9XG4gICAgfSAvLyBlbmQgZm9yOiBjaGVjayB0aGUgZmlyc3Qgd2Vla0RheVxuXG5cbiAgICBmb3IgKGxldCBkYXRlVmFsID0gMTsgZGF0ZVZhbCA8PSBuZXcgRGF0ZSh2aWV3WWVhciwgKHZpZXdNb250aCArIDEpLCAwKS5nZXREYXRlKCk7ICsrZGF0ZVZhbCkge1xuXG4gICAgICBkYXRlQXJyLnB1c2goIG5ldyBEYXRlT2JqKFN0cmluZyhuZXcgRGF0ZSh2aWV3WWVhciwgdmlld01vbnRoLCBkYXRlVmFsKS5nZXREYXRlKCkpLFxuICAgICAgICAodG9kYXlZZWFyID09PSB2aWV3WWVhciAmJiB0b2RheU1vbnRoID09PSB2aWV3TW9udGggJiYgdG9kYXlEYXRlID09PSBkYXRlVmFsKSkgKTtcbiAgICB9IC8vIGVuZCBmb3I6IGRhdGUgaW4gbW9udGhcblxuICAgIHJldHVybiBkYXRlQXJyO1xuICB9IC8vIGVuZCBzZXREYXRlSW5Nb250aCBmdW5jdGlvblxuXG59XG4iXX0=