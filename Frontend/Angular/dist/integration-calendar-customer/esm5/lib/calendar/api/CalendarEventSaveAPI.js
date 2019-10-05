/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction, TableUtils } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
var CalendarEventSaveAPI = /** @class */ (function () {
    function CalendarEventSaveAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @return {?}
     */
    CalendarEventSaveAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'saveCalendarEvent';
    };
    /**
     * @return {?}
     */
    CalendarEventSaveAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    CalendarEventSaveAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("CalendarEventSaveAPI executeSQL:", this.Data);
        /** @type {?} */
        var Alerts = [this.Data.Alert1, this.Data.Alert2];
        if (this.Data.IsAlert === 'Y') {
            Alerts.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return parseInt(a) - parseInt(b); }));
            this.Data.Alert1 = Alerts[0];
            this.Data.Alert2 = Alerts[1];
        }
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
            /** @type {?} */
            var calendarExtObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar_Extension");
            /** @type {?} */
            var dao = _this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined) {
                dao = new ClientCustomDao(dao);
                if (_this.Data.ClientID) {
                    calendarObj.setValue('ClientID', _this.Data.ClientID);
                    calendarExtObj.setValue('ClientID', _this.Data.ClientID);
                }
                calendarObj.setValue('CustomerClientID', _this.Data.CustomerClientID);
                calendarObj.setValue('Title', _this.Data.Title);
                calendarObj.setValue('Location', _this.Data.Location);
                calendarObj.setValue('CalendarType', _this.Data.CalendarType);
                calendarObj.setValue('IsAllDay', _this.Data.IsAllDay);
                calendarObj.setValue('StartTime', _this.Data.StartDateTime.getTime());
                calendarObj.setValue('EndTime', _this.Data.EndDateTime.getTime());
                calendarObj.setValue('IsAlert', _this.Data.IsAlert);
                if (_this.Data.IsAlert === 'Y') {
                    calendarObj.setValue('Alert1', _this.Data.Alert1);
                    calendarObj.setValue('Alert2', _this.Data.Alert2);
                }
                else {
                    calendarObj.setValue('Alert1', null);
                    calendarObj.setValue('Alert2', null);
                }
                calendarObj.setValue('Alert3', null);
                calendarObj.setValue('Remark', _this.Data.Remark);
                console.log("save calendarObj:", calendarObj);
                // fill extension
                calendarExtObj = TableUtils.fillTableColumn(calendarExtObj, _this.Data);
                if (_this.Data["EditType"] === "edit") {
                    calendarObj.addRestriction(new EqualRestriction("ClientID", [_this.Data.ClientID]));
                    calendarExtObj.addRestriction(new EqualRestriction("ClientID", [_this.Data.ClientID]));
                    dao.transactionUpdate(calendarObj);
                    dao.transactionUpdate(calendarExtObj);
                }
                else {
                    dao.transactionInsert(calendarObj);
                    dao.transactionInsert(calendarExtObj);
                }
                dao.runTransaction().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
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
    return CalendarEventSaveAPI;
}());
export { CalendarEventSaveAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarEventSaveAPI.prototype.Data;
    /**
     * @type {?}
     * @private
     */
    CalendarEventSaveAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudFNhdmVBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9hcGkvQ2FsZW5kYXJFdmVudFNhdmVBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBUSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUluRDtJQUdJLDhCQUFZLFVBQVU7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7OztJQUtELHlDQUFVOzs7SUFBVjtRQUNJLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNJLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUFBLGlCQWdFQztRQS9ERyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDdkQsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUk7Ozs7O1lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFBO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1B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Q0FBQyxLQUFLLE1BQU0sRUFBRTtvQkFDbEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRixjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RGLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDbkMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUN6QztxQkFDSTtvQkFDRCxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25DLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxJQUFJO29CQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUFBO2FBQ0w7aUJBQU07Z0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBbkZELElBbUZDOzs7Ozs7O0lBbEZHLG9DQUFrQjs7Ozs7SUFDbEIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgRXF1YWxSZXN0cmljdGlvbiwgVGFibGVVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnREZXRhaWwgfSBmcm9tICcuLi9zZXJ2aWNlL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudFNhdmVBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gICAgcHJpdmF0ZSBEYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICAgIH1cblxuXG5cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdzYXZlQ2FsZW5kYXJFdmVudCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2FkZENhbGVuZGFyRXZlbnQuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGVuZGFyRXZlbnRTYXZlQVBJIGV4ZWN1dGVTUUw6XCIsIHRoaXMuRGF0YSk7XG4gICAgICAgIGxldCBBbGVydHMgPSBbdGhpcy5EYXRhLkFsZXJ0MSwgdGhpcy5EYXRhLkFsZXJ0Ml07XG4gICAgICAgIGlmICh0aGlzLkRhdGEuSXNBbGVydCA9PT0gJ1knKSB7XG4gICAgICAgICAgICBBbGVydHMuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQoYSkgLSBwYXJzZUludChiKSlcbiAgICAgICAgICAgIHRoaXMuRGF0YS5BbGVydDEgPSBBbGVydHNbMF07XG4gICAgICAgICAgICB0aGlzLkRhdGEuQWxlcnQyID0gQWxlcnRzWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DYWxlbmRhclwiKTtcbiAgICAgICAgICAgIGxldCBjYWxlbmRhckV4dE9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGNhbGVuZGFyT2JqICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLkRhdGEuQ2xpZW50SUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgdGhpcy5EYXRhLkNsaWVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJFeHRPYmouc2V0VmFsdWUoJ0NsaWVudElEJywgdGhpcy5EYXRhLkNsaWVudElEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCB0aGlzLkRhdGEuQ3VzdG9tZXJDbGllbnRJRCk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ1RpdGxlJywgdGhpcy5EYXRhLlRpdGxlKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnTG9jYXRpb24nLCB0aGlzLkRhdGEuTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdDYWxlbmRhclR5cGUnLCB0aGlzLkRhdGEuQ2FsZW5kYXJUeXBlKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnSXNBbGxEYXknLCB0aGlzLkRhdGEuSXNBbGxEYXkpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdTdGFydFRpbWUnLCB0aGlzLkRhdGEuU3RhcnREYXRlVGltZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdFbmRUaW1lJywgdGhpcy5EYXRhLkVuZERhdGVUaW1lLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0lzQWxlcnQnLCB0aGlzLkRhdGEuSXNBbGVydCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuRGF0YS5Jc0FsZXJ0ID09PSAnWScpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MScsIHRoaXMuRGF0YS5BbGVydDEpO1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQyJywgdGhpcy5EYXRhLkFsZXJ0Mik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQxJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdBbGVydDInLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MycsIG51bGwpO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdSZW1hcmsnLCB0aGlzLkRhdGEuUmVtYXJrKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUgY2FsZW5kYXJPYmo6XCIsIGNhbGVuZGFyT2JqKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iaiA9IFRhYmxlVXRpbHMuZmlsbFRhYmxlQ29sdW1uKGNhbGVuZGFyRXh0T2JqLCB0aGlzLkRhdGEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkRhdGFbXCJFZGl0VHlwZVwiXSA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJDbGllbnRJRFwiLCBbdGhpcy5EYXRhLkNsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhckV4dE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNsaWVudElEXCIsIFt0aGlzLkRhdGEuQ2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjYWxlbmRhck9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRhby50cmFuc2FjdGlvblVwZGF0ZShjYWxlbmRhckV4dE9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY2FsZW5kYXJPYmopO1xuICAgICAgICAgICAgICAgICAgICBkYW8udHJhbnNhY3Rpb25JbnNlcnQoY2FsZW5kYXJFeHRPYmopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRhby5ydW5UcmFuc2FjdGlvbigpLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=