/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { GreaterOrEqualRestriction } from '@allianzSND/core';
import { LessOrEqualRestriction } from '@allianzSND/core';
import { OrderByRestriction } from "@allianzSND/core";
export class CalendarEventListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} startTime
     * @return {?}
     */
    set startTime(startTime) {
        this._startTime = startTime;
    }
    /**
     * @param {?} endTime
     * @return {?}
     */
    set endTime(endTime) {
        this._endTime = endTime;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCalendarEventList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCalendarEventList.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.addRestriction(new GreaterOrEqualRestriction('EndTime', [this._startTime.getTime()]));
                calendarObj.addRestriction(new LessOrEqualRestriction('StartTime', [this._endTime.getTime()]));
                calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(calendarObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.log(resp);
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarEventListAPI.prototype._startTime;
    /**
     * @type {?}
     * @private
     */
    CalendarEventListAPI.prototype._endTime;
    /**
     * @type {?}
     * @private
     */
    CalendarEventListAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudExpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQ2FsZW5kYXJFdmVudExpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXRELE1BQU07Ozs7SUFJSixZQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHRCxJQUFJLFNBQVMsQ0FBQyxTQUFlO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sc0JBQXNCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLHlDQUF5QyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUM7O2dCQUNuRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRWhELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xHLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRixXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksa0JBQWtCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixvSUFBb0k7Z0JBQ3BJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQTlDQywwQ0FBeUI7Ozs7O0lBQ3pCLHdDQUF1Qjs7Ozs7SUFDdkIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IExlc3NPckVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9yZGVyQnlSZXN0cmljdGlvbiB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckV2ZW50TGlzdEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBEYXRlO1xuICBwcml2YXRlIF9lbmRUaW1lOiBEYXRlO1xuICBwcml2YXRlIF9EYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuXG4gIHNldCBzdGFydFRpbWUoc3RhcnRUaW1lOiBEYXRlKSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICB9XG5cbiAgc2V0IGVuZFRpbWUoZW5kVGltZTogRGF0ZSkge1xuICAgIHRoaXMuX2VuZFRpbWUgPSBlbmRUaW1lO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0Q2FsZW5kYXJFdmVudExpc3QnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0Q2FsZW5kYXJFdmVudExpc3QuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DYWxlbmRhclwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChjYWxlbmRhck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24oJ0VuZFRpbWUnLCBbdGhpcy5fc3RhcnRUaW1lLmdldFRpbWUoKV0pKTtcbiAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IExlc3NPckVxdWFsUmVzdHJpY3Rpb24oJ1N0YXJ0VGltZScsIFt0aGlzLl9lbmRUaW1lLmdldFRpbWUoKV0pKTtcbiAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9yZGVyQnlSZXN0cmljdGlvbihbeyBjb2x1bW46ICdTdGFydFRpbWUnLCBvcmRlcjogJ0FTQycgfV0pKTtcbiAgICAgICAgLy8gY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IE9yZGVyQnlSZXN0cmljdGlvbihbeyBjb2x1bW46ICdTdGFydFRpbWUnLCBvcmRlcjogJ0FTQycgfSx7IGNvbHVtbjogJ0VuZFRpbWUnLCBvcmRlcjogJ0RFU0MnIH1dKSk7XG4gICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY2FsZW5kYXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19