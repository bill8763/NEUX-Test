/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { EqualRestriction } from '@allianzSND/core';
export class CalendarEventUpdateAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set ClientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCalendarEvent(value) {
        this._calendarEvent = value;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'updateCalendarEvent';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/updateCalendarEvent.json';
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
                calendarObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                calendarObj.setValue('CalendarID', this._calendarEvent.calendarID);
                calendarObj.setValue('Title', this._calendarEvent.title);
                calendarObj.setValue('Location', this._calendarEvent.location);
                calendarObj.setValue('CalendarType', this._calendarEvent.activity);
                if (this._calendarEvent.allDay == true) {
                    calendarObj.setValue('IsAllDay', 'Y');
                }
                else {
                    calendarObj.setValue('IsAllDay', 'N');
                }
                calendarObj.setValue('StartTime', this._calendarEvent.start.getTime());
                calendarObj.setValue('EndTime', this._calendarEvent.end.getTime());
                if (this._calendarEvent.isAlert == true) {
                    calendarObj.setValue('IsAlert', 'Y');
                }
                else {
                    calendarObj.setValue('IsAlert', 'N');
                }
                calendarObj.setValue('Alert1', this._calendarEvent.alert1);
                calendarObj.setValue('Alert2', this._calendarEvent.alert2);
                calendarObj.setValue('Alert3', this._calendarEvent.alert3);
                calendarObj.setValue('Remark', this._calendarEvent.remark);
                dao.updateByTable(calendarObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
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
    CalendarEventUpdateAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CalendarEventUpdateAPI.prototype._calendarEvent;
    /**
     * @type {?}
     * @private
     */
    CalendarEventUpdateAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudFVwZGF0ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2FwaS9DYWxlbmRhckV2ZW50VXBkYXRlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxNQUFNOzs7O0lBSUosWUFBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBSUQsSUFBSSxRQUFRLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUEwQjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLHdDQUF3QyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUM7O2dCQUNuRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRWhELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ25FLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pELFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9ELFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25FLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO29CQUNyQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZDO2dCQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ25FLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO29CQUN0QyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0wsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3RDO2dCQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQS9EQywyQ0FBMEI7Ozs7O0lBQzFCLGdEQUE0Qzs7Ozs7SUFDNUMsNkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQge0lTUUxpdGVBUEl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0NsaWVudEN1c3RvbURhb30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0VxdWFsUmVzdHJpY3Rpb259IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsfSBmcm9tICcuLi9zZXJ2aWNlL2NhbGVuZGFyL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudFVwZGF0ZUFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgX2NsaWVudElEOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NhbGVuZGFyRXZlbnQ6IENhbGVuZGFyRXZlbnREZXRhaWw7XG4gIHByaXZhdGUgX0Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gIGNvbnN0cnVjdG9yKERhb0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9EYW9GYWN0b3J5ID0gRGFvRmFjdG9yeTtcbiAgfVxuXG5cblxuICBzZXQgQ2xpZW50SUQoY2xpZW50SUQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gIH1cblxuICBzZXRDYWxlbmRhckV2ZW50KHZhbHVlOiBDYWxlbmRhckV2ZW50RGV0YWlsKSB7XG4gICAgdGhpcy5fY2FsZW5kYXJFdmVudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3VwZGF0ZUNhbGVuZGFyRXZlbnQnO1xuICB9XG5cbiAgZ2V0TW9ja1BhdGgoKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL3VwZGF0ZUNhbGVuZGFyRXZlbnQuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DYWxlbmRhclwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChjYWxlbmRhck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBcbiAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0NhbGVuZGFySUQnLCB0aGlzLl9jYWxlbmRhckV2ZW50LmNhbGVuZGFySUQpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnVGl0bGUnLCB0aGlzLl9jYWxlbmRhckV2ZW50LnRpdGxlKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0xvY2F0aW9uJywgdGhpcy5fY2FsZW5kYXJFdmVudC5sb2NhdGlvbik7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdDYWxlbmRhclR5cGUnLCB0aGlzLl9jYWxlbmRhckV2ZW50LmFjdGl2aXR5KTtcbiAgICAgICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudC5hbGxEYXkgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsbERheScsICdZJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0lzQWxsRGF5JywgJ04nKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnU3RhcnRUaW1lJywgdGhpcy5fY2FsZW5kYXJFdmVudC5zdGFydC5nZXRUaW1lKCkpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnRW5kVGltZScsIHRoaXMuX2NhbGVuZGFyRXZlbnQuZW5kLmdldFRpbWUoKSk7XG4gICAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnQuaXNBbGVydCA9PSB0cnVlKSB7XG4gICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0lzQWxlcnQnLCAnWScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsZXJ0JywgJ04nKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQxJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDEpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQyJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDIpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQzJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDMpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnUmVtYXJrJywgdGhpcy5fY2FsZW5kYXJFdmVudC5yZW1hcmspO1xuICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShjYWxlbmRhck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=