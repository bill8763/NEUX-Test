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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudEFkZEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2FwaS9DYWxlbmRhckV2ZW50QWRkQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRDtJQUdFLDZCQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBMEI7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNFLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLE9BQU8scUNBQXFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUFBLGlCQW1DQztRQWxDQyxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxRQUFROztnQkFDNUIsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDOztnQkFDbkUsR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQzFDLElBQUksV0FBVyxJQUFJLFNBQVMsRUFBRTtnQkFFNUIsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6RCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxJQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDckMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QztnQkFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxJQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDdEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNMLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0QsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQzs7Ozs7OztJQXZEQyw2Q0FBNkM7Ozs7O0lBQzdDLDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0NsaWVudEN1c3RvbURhb30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0lTUUxpdGVBUEl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDYWxlbmRhckV2ZW50RGV0YWlsfSBmcm9tICcuLi9zZXJ2aWNlL2NhbGVuZGFyL21vZGVsL0NhbGVuZGFyRXZlbnREZXRhaWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudEFkZEFQSSBpbXBsZW1lbnRzIElBUEkgLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgX2NhbGVuZGFyRXZlbnQ6ICBDYWxlbmRhckV2ZW50RGV0YWlsO1xuICBwcml2YXRlIF9EYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fRGFvRmFjdG9yeSA9IERhb0ZhY3Rvcnk7XG4gIH1cblxuXG4gIHNldENhbGVuZGFyRXZlbnQodmFsdWU6IENhbGVuZGFyRXZlbnREZXRhaWwpIHtcbiAgICB0aGlzLl9jYWxlbmRhckV2ZW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXRBUElOYW1lKCkgOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWRkQ2FsZW5kYXJFdmVudCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgY2FsZW5kYXJPYmogPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0NhbGVuZGFyXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGNhbGVuZGFyT2JqICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ1RpdGxlJywgdGhpcy5fY2FsZW5kYXJFdmVudC50aXRsZSk7XG4gICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdMb2NhdGlvbicsIHRoaXMuX2NhbGVuZGFyRXZlbnQubG9jYXRpb24pO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnQ2FsZW5kYXJUeXBlJywgdGhpcy5fY2FsZW5kYXJFdmVudC5hY3Rpdml0eSk7XG4gICAgICAgIGlmKHRoaXMuX2NhbGVuZGFyRXZlbnQuYWxsRGF5ID09IHRydWUpIHtcbiAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnSXNBbGxEYXknLCAnWScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsbERheScsICdOJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ1N0YXJ0VGltZScsIHRoaXMuX2NhbGVuZGFyRXZlbnQuc3RhcnQuZ2V0VGltZSgpKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0VuZFRpbWUnLCB0aGlzLl9jYWxlbmRhckV2ZW50LmVuZC5nZXRUaW1lKCkpO1xuICAgICAgICBpZih0aGlzLl9jYWxlbmRhckV2ZW50LmlzQWxlcnQgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNhbGVuZGFyT2JqLnNldFZhbHVlKCdJc0FsZXJ0JywgJ1knKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnSXNBbGVydCcsICdOJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MScsIHRoaXMuX2NhbGVuZGFyRXZlbnQuYWxlcnQxKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MicsIHRoaXMuX2NhbGVuZGFyRXZlbnQuYWxlcnQyKTtcbiAgICAgICAgY2FsZW5kYXJPYmouc2V0VmFsdWUoJ0FsZXJ0MycsIG51bGwpO1xuICAgICAgICBjYWxlbmRhck9iai5zZXRWYWx1ZSgnUmVtYXJrJywgdGhpcy5fY2FsZW5kYXJFdmVudC5yZW1hcmspO1xuICAgICAgICBkYW8uaW5zZXJ0QnlUYWJsZShjYWxlbmRhck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=