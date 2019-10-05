/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
var CalendarEventAddAPI = /** @class */ (function () {
    function CalendarEventAddAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarEventAddAPI.prototype.setCalendarEvent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._calendarEvent = value;
    };
    /**
     * @return {?}
     */
    CalendarEventAddAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'addCalendarEvent';
    };
    /**
     * @return {?}
     */
    CalendarEventAddAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    CalendarEventAddAPI.prototype.executeSQL = /**
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
            var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar");
            /** @type {?} */
            var dao = _this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.setValue('CustomerClientID', _this._calendarEvent.customerClientID);
                calendarObj.setValue('Title', _this._calendarEvent.title);
                calendarObj.setValue('Location', _this._calendarEvent.location);
                calendarObj.setValue('CalendarType', _this._calendarEvent.activity);
                if (_this._calendarEvent.allDay == true) {
                    calendarObj.setValue('IsAllDay', 'Y');
                }
                else {
                    calendarObj.setValue('IsAllDay', 'N');
                }
                calendarObj.setValue('StartTime', _this._calendarEvent.start.getTime());
                calendarObj.setValue('EndTime', _this._calendarEvent.end.getTime());
                if (_this._calendarEvent.isAlert == true) {
                    calendarObj.setValue('IsAlert', 'Y');
                }
                else {
                    calendarObj.setValue('IsAlert', 'N');
                }
                calendarObj.setValue('Alert1', _this._calendarEvent.alert1);
                calendarObj.setValue('Alert2', _this._calendarEvent.alert2);
                calendarObj.setValue('Alert3', null);
                calendarObj.setValue('Remark', _this._calendarEvent.remark);
                dao.insertByTable(calendarObj).subscribe((/**
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
    return CalendarEventAddAPI;
}());
export { CalendarEventAddAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarEventAddAPI.prototype._calendarEvent;
    /**
     * @type {?}
     * @private
     */
    CalendarEventAddAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudEFkZEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2FwaS9DYWxlbmRhckV2ZW50QWRkQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRDtJQUdFLDZCQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBMEI7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNFLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLE9BQU8scUNBQXFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUFBLGlCQW9DQztRQW5DQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDOztnQkFDbkUsR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQzFDLElBQUksV0FBVyxJQUFJLFNBQVMsRUFBRTtnQkFFNUIsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixXQUFXLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkUsSUFBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7b0JBQ3JDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QztxQkFBTTtvQkFDTCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdkM7Z0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDdkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDbkUsSUFBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3RDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QztxQkFBTTtvQkFDTCxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdEM7Z0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQUk7b0JBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7Ozs7Ozs7SUF4REMsNkNBQTZDOzs7OztJQUM3QywwQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Rhb0ZhY3Rvcnl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDbGllbnRDdXN0b21EYW99IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtJU1FMaXRlQVBJfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudERldGFpbH0gZnJvbSAnLi4vc2VydmljZS9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRBZGRBUEkgaW1wbGVtZW50cyBJQVBJICwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9jYWxlbmRhckV2ZW50OiAgQ2FsZW5kYXJFdmVudERldGFpbDtcbiAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoRGFvRmFjdG9yeSkge1xuICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICB9XG5cblxuICBzZXRDYWxlbmRhckV2ZW50KHZhbHVlOiBDYWxlbmRhckV2ZW50RGV0YWlsKSB7XG4gICAgdGhpcy5fY2FsZW5kYXJFdmVudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FkZENhbGVuZGFyRXZlbnQnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2FkZENhbGVuZGFyRXZlbnQuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DYWxlbmRhclwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChjYWxlbmRhck9iaiAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdDdXN0b21lckNsaWVudElEJywgdGhpcy5fY2FsZW5kYXJFdmVudC5jdXN0b21lckNsaWVudElEKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ1RpdGxlJywgdGhpcy5fY2FsZW5kYXJFdmVudC50aXRsZSk7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdMb2NhdGlvbicsIHRoaXMuX2NhbGVuZGFyRXZlbnQubG9jYXRpb24pO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQ2FsZW5kYXJUeXBlJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hY3Rpdml0eSk7XG4gICAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnQuYWxsRGF5ID09IHRydWUpIHtcbiAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnSXNBbGxEYXknLCAnWScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsbERheScsICdOJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ1N0YXJ0VGltZScsIHRoaXMuX2NhbGVuZGFyRXZlbnQuc3RhcnQuZ2V0VGltZSgpKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0VuZFRpbWUnLCB0aGlzLl9jYWxlbmRhckV2ZW50LmVuZC5nZXRUaW1lKCkpO1xuICAgICAgICBpZih0aGlzLl9jYWxlbmRhckV2ZW50LmlzQWxlcnQgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsZXJ0JywgJ1knKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnSXNBbGVydCcsICdOJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MScsIHRoaXMuX2NhbGVuZGFyRXZlbnQuYWxlcnQxKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MicsIHRoaXMuX2NhbGVuZGFyRXZlbnQuYWxlcnQyKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MycsIG51bGwpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnUmVtYXJrJywgdGhpcy5fY2FsZW5kYXJFdmVudC5yZW1hcmspO1xuICAgICAgICBkYW8uaW5zZXJ0QnlUYWJsZShjYWxlbmRhck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=