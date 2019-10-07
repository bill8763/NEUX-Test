/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { EqualRestriction } from '@allianzSND/core';
export class CalendarEventDeleteAPI {
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
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'deleteCalendarEvent';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/deleteCalendarEvent.json';
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
            let calendarExtObj = this._DaoFactory.getDefaultTable("TW_LH_SD_Calendar_Extension");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (calendarObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                calendarObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                calendarExtObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                dao.deleteByTable(calendarObj).toPromise().then((/**
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
    CalendarEventDeleteAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDeleteAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERlbGV0ZUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2FwaS9DYWxlbmRhckV2ZW50RGVsZXRlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRCxNQUFNOzs7O0lBR0osWUFBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBR0QsSUFBSSxRQUFRLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyx3Q0FBd0MsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztnQkFDaEMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDOztnQkFDbkUsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDOztnQkFFaEYsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQzFDLElBQUksV0FBVyxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUVoRCxHQUFHLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEYsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3JELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBeENDLDJDQUEwQjs7Ozs7SUFDMUIsNkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnREZWxldGVBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgX2NsaWVudElEOiBzdHJpbmc7XG4gIHByaXZhdGUgX0Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gIGNvbnN0cnVjdG9yKERhb0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9EYW9GYWN0b3J5ID0gRGFvRmFjdG9yeTtcbiAgfVxuXG5cbiAgc2V0IGNsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZGVsZXRlQ2FsZW5kYXJFdmVudCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9kZWxldGVDYWxlbmRhckV2ZW50Lmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJcIik7XG4gICAgICBsZXQgY2FsZW5kYXJFeHRPYmogPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0NhbGVuZGFyX0V4dGVuc2lvblwiKTtcblxuICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGNhbGVuZGFyT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkYW8pO1xuICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbdGhpcy5fY2xpZW50SURdKSk7XG4gICAgICAgIGNhbGVuZGFyRXh0T2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsIFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgZGFvLmRlbGV0ZUJ5VGFibGUoY2FsZW5kYXJPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpOyAgICBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19