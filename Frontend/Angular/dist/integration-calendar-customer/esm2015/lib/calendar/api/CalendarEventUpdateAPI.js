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
                calendarObj.setValue('CustomerClientID', this._calendarEvent.customerClientID);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudFVwZGF0ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2FwaS9DYWxlbmRhckV2ZW50VXBkYXRlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxNQUFNOzs7O0lBSUosWUFBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBSUQsSUFBSSxRQUFRLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUEwQjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLHdDQUF3QyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUM7O2dCQUNuRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBRWhELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ25FLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pELFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9ELFdBQVcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMvRSxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDckMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QztnQkFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDdEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNMLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUFoRUMsMkNBQTBCOzs7OztJQUMxQixnREFBNEM7Ozs7O0lBQzVDLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHtJU1FMaXRlQVBJfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Rhb0ZhY3Rvcnl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDbGllbnRDdXN0b21EYW99IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtFcXVhbFJlc3RyaWN0aW9ufSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7Q2FsZW5kYXJFdmVudERldGFpbH0gZnJvbSAnLi4vc2VydmljZS9tb2RlbC9DYWxlbmRhckV2ZW50RGV0YWlsJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRVcGRhdGVBUEkgaW1wbGVtZW50cyBJQVBJICwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9jbGllbnRJRDogc3RyaW5nO1xuICBwcml2YXRlIF9jYWxlbmRhckV2ZW50OiBDYWxlbmRhckV2ZW50RGV0YWlsO1xuICBwcml2YXRlIF9EYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuXG5cbiAgc2V0IENsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICB9XG5cbiAgc2V0Q2FsZW5kYXJFdmVudCh2YWx1ZTogQ2FsZW5kYXJFdmVudERldGFpbCkge1xuICAgIHRoaXMuX2NhbGVuZGFyRXZlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldEFQSU5hbWUoKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuICd1cGRhdGVDYWxlbmRhckV2ZW50JztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCkgOiBzdHJpbmcge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay91cGRhdGVDYWxlbmRhckV2ZW50Lmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJcIik7XG4gICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY2FsZW5kYXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJyxbdGhpcy5fY2xpZW50SURdKSk7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdDYWxlbmRhcklEJywgdGhpcy5fY2FsZW5kYXJFdmVudC5jYWxlbmRhcklEKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ1RpdGxlJywgdGhpcy5fY2FsZW5kYXJFdmVudC50aXRsZSk7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdMb2NhdGlvbicsIHRoaXMuX2NhbGVuZGFyRXZlbnQubG9jYXRpb24pO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQ3VzdG9tZXJDbGllbnRJRCcsIHRoaXMuX2NhbGVuZGFyRXZlbnQuY3VzdG9tZXJDbGllbnRJRCk7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdDYWxlbmRhclR5cGUnLCB0aGlzLl9jYWxlbmRhckV2ZW50LmFjdGl2aXR5KTtcbiAgICAgICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudC5hbGxEYXkgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsbERheScsICdZJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0lzQWxsRGF5JywgJ04nKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnU3RhcnRUaW1lJywgdGhpcy5fY2FsZW5kYXJFdmVudC5zdGFydC5nZXRUaW1lKCkpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnRW5kVGltZScsIHRoaXMuX2NhbGVuZGFyRXZlbnQuZW5kLmdldFRpbWUoKSk7XG4gICAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnQuaXNBbGVydCA9PSB0cnVlKSB7XG4gICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0lzQWxlcnQnLCAnWScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsZXJ0JywgJ04nKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQxJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDEpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQyJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDIpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQzJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDMpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnUmVtYXJrJywgdGhpcy5fY2FsZW5kYXJFdmVudC5yZW1hcmspO1xuICAgICAgICBkYW8udXBkYXRlQnlUYWJsZShjYWxlbmRhck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=