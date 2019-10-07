/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SQLiteResponse } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { EqualRestriction } from '@allianzSND/core';
export class CalendarEventDetailAPI {
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
     * @return {?}
     */
    getAPIName() {
        return 'getCalendarEventDetail';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCalendarEventDetail.json';
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
            console.log("CalendarEventDetail ClientID:", this._clientID);
            /** @type {?} */
            let defaultObj = {
                ClientID: null,
                CalendarID: null,
                CustomerClientID: null,
                Title: '',
                Location: '',
                CalendarType: null,
                IsAllDay: 'N',
                StartTime: null,
                EndTime: null,
                IsAlert: 'Y',
                Alert1: '8',
                Alert2: '',
                Alert3: null,
                Remark: '',
                DataSource: 'APP'
            };
            if (!this._clientID) {
                //Add
                /** @type {?} */
                let resp = new SQLiteResponse({
                    "isSuccess": true
                }, [defaultObj]);
                observer.next(resp);
                observer.complete();
            }
            else {
                /** @type {?} */
                let calendarObj = this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Calendar");
                /** @type {?} */
                let dao = this._DaoFactory.getDefaultDao();
                if (calendarObj != undefined && dao != undefined) {
                    dao = new ClientCustomDao(dao);
                    calendarObj.addRestriction(new EqualRestriction('ClientID', [this._clientID]));
                    dao.queryByTable(calendarObj).subscribe((/**
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
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetailAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CalendarEventDetailAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERldGFpbEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2FwaS9DYWxlbmRhckV2ZW50RGV0YWlsQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHeEQsT0FBTyxFQUFFLFVBQVUsRUFBTSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsTUFBTTs7OztJQUdKLFlBQVksVUFBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUdELElBQUksUUFBUSxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sMkNBQTJDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Z0JBRXpELFVBQVUsR0FBRztnQkFDZixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFNBQVMsRUFBRSxJQUFJO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxHQUFHO2dCQUNaLE1BQU0sRUFBRSxHQUFHO2dCQUNYLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxLQUFLO2FBQ2xCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7OztvQkFFZixJQUFJLEdBQUcsSUFBSSxjQUFjLENBQUM7b0JBQzVCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtpQkFDSTs7b0JBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDOztvQkFDdEUsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO2dCQUMxQyxJQUFJLFdBQVcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtvQkFFaEQsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0UsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQy9DLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQW5FQywyQ0FBMEI7Ozs7O0lBQzFCLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEksIFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnREZXRhaWxBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG4gIHByaXZhdGUgX2NsaWVudElEOiBzdHJpbmc7XG4gIHByaXZhdGUgX0Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gIGNvbnN0cnVjdG9yKERhb0ZhY3RvcnkpIHtcbiAgICB0aGlzLl9EYW9GYWN0b3J5ID0gRGFvRmFjdG9yeTtcbiAgfVxuXG5cbiAgc2V0IENsaWVudElEKGNsaWVudElEOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2V0Q2FsZW5kYXJFdmVudERldGFpbCc7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXRDYWxlbmRhckV2ZW50RGV0YWlsLmpzb24nO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcblxuICAgICAgY29uc29sZS5sb2coXCJDYWxlbmRhckV2ZW50RGV0YWlsIENsaWVudElEOlwiLCB0aGlzLl9jbGllbnRJRCk7XG5cbiAgICAgIGxldCBkZWZhdWx0T2JqID0ge1xuICAgICAgICBDbGllbnRJRDogbnVsbCxcbiAgICAgICAgQ2FsZW5kYXJJRDogbnVsbCxcbiAgICAgICAgQ3VzdG9tZXJDbGllbnRJRDogbnVsbCxcbiAgICAgICAgVGl0bGU6ICcnLFxuICAgICAgICBMb2NhdGlvbjogJycsXG4gICAgICAgIENhbGVuZGFyVHlwZTogbnVsbCxcbiAgICAgICAgSXNBbGxEYXk6ICdOJyxcbiAgICAgICAgU3RhcnRUaW1lOiBudWxsLFxuICAgICAgICBFbmRUaW1lOiBudWxsLFxuICAgICAgICBJc0FsZXJ0OiAnWScsXG4gICAgICAgIEFsZXJ0MTogJzgnLFxuICAgICAgICBBbGVydDI6ICcnLFxuICAgICAgICBBbGVydDM6IG51bGwsXG4gICAgICAgIFJlbWFyazogJycsXG4gICAgICAgIERhdGFTb3VyY2U6ICdBUFAnXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGlzLl9jbGllbnRJRCkge1xuICAgICAgICAvL0FkZFxuICAgICAgICBsZXQgcmVzcCA9IG5ldyBTUUxpdGVSZXNwb25zZSh7XG4gICAgICAgICAgXCJpc1N1Y2Nlc3NcIjogdHJ1ZVxuICAgICAgICB9LCBbZGVmYXVsdE9ial0pO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfQ2FsZW5kYXJcIik7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgaWYgKGNhbGVuZGFyT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgICAgY2FsZW5kYXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NsaWVudElEJywgW3RoaXMuX2NsaWVudElEXSkpO1xuICAgICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY2FsZW5kYXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXNwKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=