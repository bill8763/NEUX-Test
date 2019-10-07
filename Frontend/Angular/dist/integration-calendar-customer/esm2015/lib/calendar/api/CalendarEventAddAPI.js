/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
export class CalendarEventAddAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
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
        return 'addCalendarEvent';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
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
            if (calendarObj != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.setValue('CustomerClientID', this._calendarEvent.customerClientID);
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
                calendarObj.setValue('Alert3', null);
                calendarObj.setValue('Remark', this._calendarEvent.remark);
                dao.insertByTable(calendarObj).subscribe((/**
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
    CalendarEventAddAPI.prototype._calendarEvent;
    /**
     * @type {?}
     * @private
     */
    CalendarEventAddAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudEFkZEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2FwaS9DYWxlbmRhckV2ZW50QWRkQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRCxNQUFNOzs7O0lBR0osWUFBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsS0FBMEI7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxxQ0FBcUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztnQkFDaEMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDOztnQkFDbkUsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQzFDLElBQUksV0FBVyxJQUFJLFNBQVMsRUFBRTtnQkFFNUIsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixXQUFXLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkUsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7b0JBQ3JDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QztxQkFBTTtvQkFDTCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdkM7Z0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDdkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDbkUsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3RDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QztxQkFBTTtvQkFDTCxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDdEM7Z0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQXhEQyw2Q0FBNkM7Ozs7O0lBQzdDLDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0NsaWVudEN1c3RvbURhb30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0lTUUxpdGVBUEl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsfSBmcm9tICcuLi9zZXJ2aWNlL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudEFkZEFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgX2NhbGVuZGFyRXZlbnQ6ICBDYWxlbmRhckV2ZW50RGV0YWlsO1xuICBwcml2YXRlIF9EYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuXG4gIHNldENhbGVuZGFyRXZlbnQodmFsdWU6IENhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICB0aGlzLl9jYWxlbmRhckV2ZW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXRBUElOYW1lKCkgOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWRkQ2FsZW5kYXJFdmVudCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgY2FsZW5kYXJPYmogPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0NhbGVuZGFyXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGNhbGVuZGFyT2JqICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0N1c3RvbWVyQ2xpZW50SUQnLCB0aGlzLl9jYWxlbmRhckV2ZW50LmN1c3RvbWVyQ2xpZW50SUQpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnVGl0bGUnLCB0aGlzLl9jYWxlbmRhckV2ZW50LnRpdGxlKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0xvY2F0aW9uJywgdGhpcy5fY2FsZW5kYXJFdmVudC5sb2NhdGlvbik7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdDYWxlbmRhclR5cGUnLCB0aGlzLl9jYWxlbmRhckV2ZW50LmFjdGl2aXR5KTtcbiAgICAgICAgaWYodGhpcy5fY2FsZW5kYXJFdmVudC5hbGxEYXkgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsbERheScsICdZJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0lzQWxsRGF5JywgJ04nKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnU3RhcnRUaW1lJywgdGhpcy5fY2FsZW5kYXJFdmVudC5zdGFydC5nZXRUaW1lKCkpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnRW5kVGltZScsIHRoaXMuX2NhbGVuZGFyRXZlbnQuZW5kLmdldFRpbWUoKSk7XG4gICAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnQuaXNBbGVydCA9PSB0cnVlKSB7XG4gICAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0lzQWxlcnQnLCAnWScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsZXJ0JywgJ04nKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQxJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDEpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQyJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hbGVydDIpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQWxlcnQzJywgbnVsbCk7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdSZW1hcmsnLCB0aGlzLl9jYWxlbmRhckV2ZW50LnJlbWFyayk7XG4gICAgICAgIGRhby5pbnNlcnRCeVRhYmxlKGNhbGVuZGFyT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==