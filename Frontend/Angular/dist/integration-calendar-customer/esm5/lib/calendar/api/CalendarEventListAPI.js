/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { GreaterOrEqualRestriction } from '@allianzSND/core';
import { LessOrEqualRestriction } from '@allianzSND/core';
import { OrderByRestriction } from "@allianzSND/core";
var CalendarEventListAPI = /** @class */ (function () {
    function CalendarEventListAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    Object.defineProperty(CalendarEventListAPI.prototype, "startTime", {
        set: /**
         * @param {?} startTime
         * @return {?}
         */
        function (startTime) {
            this._startTime = startTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEventListAPI.prototype, "endTime", {
        set: /**
         * @param {?} endTime
         * @return {?}
         */
        function (endTime) {
            this._endTime = endTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarEventListAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCalendarEventList';
    };
    /**
     * @return {?}
     */
    CalendarEventListAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCalendarEventList.json';
    };
    /**
     * @return {?}
     */
    CalendarEventListAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Calendar");
            /** @type {?} */
            var dao = _this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.addRestriction(new GreaterOrEqualRestriction('EndTime', [_this._startTime.getTime()]));
                calendarObj.addRestriction(new LessOrEqualRestriction('StartTime', [_this._endTime.getTime()]));
                calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(calendarObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
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
    };
    return CalendarEventListAPI;
}());
export { CalendarEventListAPI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudExpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9hcGkvQ2FsZW5kYXJFdmVudExpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXREO0lBSUUsOEJBQVksVUFBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBR0Qsc0JBQUksMkNBQVM7Ozs7O1FBQWIsVUFBYyxTQUFlO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQU87Ozs7O1FBQVgsVUFBWSxPQUFhO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxzQkFBc0IsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsT0FBTyx5Q0FBeUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQUEsaUJBcUJDO1FBcEJDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7O2dCQUM1QixXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUM7O2dCQUN0RSxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRWhELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xHLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRixXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksa0JBQWtCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixvSUFBb0k7Z0JBQ3BJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7Ozs7Ozs7SUE5Q0MsMENBQXlCOzs7OztJQUN6Qix3Q0FBdUI7Ozs7O0lBQ3ZCLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ2xpZW50Q3VzdG9tRGFvIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPcmRlckJ5UmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudExpc3RBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgX3N0YXJ0VGltZTogRGF0ZTtcbiAgcHJpdmF0ZSBfZW5kVGltZTogRGF0ZTtcbiAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoRGFvRmFjdG9yeSkge1xuICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICB9XG5cblxuICBzZXQgc3RhcnRUaW1lKHN0YXJ0VGltZTogRGF0ZSkge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgfVxuXG4gIHNldCBlbmRUaW1lKGVuZFRpbWU6IERhdGUpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gZW5kVGltZTtcbiAgfVxuXG4gIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2dldENhbGVuZGFyRXZlbnRMaXN0JztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldENhbGVuZGFyRXZlbnRMaXN0Lmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfQ2FsZW5kYXJcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY2FsZW5kYXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBHcmVhdGVyT3JFcXVhbFJlc3RyaWN0aW9uKCdFbmRUaW1lJywgW3RoaXMuX3N0YXJ0VGltZS5nZXRUaW1lKCldKSk7XG4gICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uKCdTdGFydFRpbWUnLCBbdGhpcy5fZW5kVGltZS5nZXRUaW1lKCldKSk7XG4gICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPcmRlckJ5UmVzdHJpY3Rpb24oW3sgY29sdW1uOiAnU3RhcnRUaW1lJywgb3JkZXI6ICdBU0MnIH1dKSk7XG4gICAgICAgIC8vIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPcmRlckJ5UmVzdHJpY3Rpb24oW3sgY29sdW1uOiAnU3RhcnRUaW1lJywgb3JkZXI6ICdBU0MnIH0seyBjb2x1bW46ICdFbmRUaW1lJywgb3JkZXI6ICdERVNDJyB9XSkpO1xuICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGNhbGVuZGFyT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==