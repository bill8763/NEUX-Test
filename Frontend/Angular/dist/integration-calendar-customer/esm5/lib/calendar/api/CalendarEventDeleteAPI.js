/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { EqualRestriction } from '@allianzSND/core';
var CalendarEventDeleteAPI = /** @class */ (function () {
    function CalendarEventDeleteAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    Object.defineProperty(CalendarEventDeleteAPI.prototype, "clientID", {
        set: /**
         * @param {?} clientID
         * @return {?}
         */
        function (clientID) {
            this._clientID = clientID;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarEventDeleteAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'deleteCalendarEvent';
    };
    /**
     * @return {?}
     */
    CalendarEventDeleteAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/deleteCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    CalendarEventDeleteAPI.prototype.executeSQL = /**
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
            var calendarExtObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar_Extension");
            /** @type {?} */
            var dao = _this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.addRestriction(new EqualRestriction('ClientID', [_this._clientID]));
                calendarExtObj.addRestriction(new EqualRestriction('ClientID', [_this._clientID]));
                dao.deleteByTable(calendarObj).toPromise().then((/**
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
    return CalendarEventDeleteAPI;
}());
export { CalendarEventDeleteAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarEventDeleteAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDeleteAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERlbGV0ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2FwaS9DYWxlbmRhckV2ZW50RGVsZXRlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRDtJQUdFLGdDQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUdELHNCQUFJLDRDQUFROzs7OztRQUFaLFVBQWEsUUFBZ0I7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLHdDQUF3QyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFBQSxpQkFvQkM7UUFuQkMsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTs7Z0JBQzVCLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQzs7Z0JBQ25FLGNBQWMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyw2QkFBNkIsQ0FBQzs7Z0JBRWhGLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUMxQyxJQUFJLFdBQVcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFFaEQsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xGLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLElBQUk7b0JBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7Ozs7Ozs7SUF4Q0MsMkNBQTBCOzs7OztJQUMxQiw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudERlbGV0ZUFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoRGFvRmFjdG9yeSkge1xuICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICB9XG5cblxuICBzZXQgY2xpZW50SUQoY2xpZW50SUQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdkZWxldGVDYWxlbmRhckV2ZW50JztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2RlbGV0ZUNhbGVuZGFyRXZlbnQuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DYWxlbmRhclwiKTtcbiAgICAgIGxldCBjYWxlbmRhckV4dE9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJfRXh0ZW5zaW9uXCIpO1xuXG4gICAgICBsZXQgZGFvID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoY2FsZW5kYXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgY2FsZW5kYXJFeHRPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW3RoaXMuX2NsaWVudElEXSkpO1xuICAgICAgICBkYW8uZGVsZXRlQnlUYWJsZShjYWxlbmRhck9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7ICAgIFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=