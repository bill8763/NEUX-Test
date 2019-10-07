/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SQLiteResponse } from "@allianzSND/core";
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { EqualRestriction } from '@allianzSND/core';
var CalendarEventDetailAPI = /** @class */ (function () {
    function CalendarEventDetailAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    Object.defineProperty(CalendarEventDetailAPI.prototype, "ClientID", {
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
    CalendarEventDetailAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCalendarEventDetail';
    };
    /**
     * @return {?}
     */
    CalendarEventDetailAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCalendarEventDetail.json';
    };
    /**
     * @return {?}
     */
    CalendarEventDetailAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            console.log("CalendarEventDetail ClientID:", _this._clientID);
            /** @type {?} */
            var defaultObj = {
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
            if (!_this._clientID) {
                //Add
                /** @type {?} */
                var resp = new SQLiteResponse({
                    "isSuccess": true
                }, [defaultObj]);
                observer.next(resp);
                observer.complete();
            }
            else {
                /** @type {?} */
                var calendarObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Calendar");
                /** @type {?} */
                var dao = _this._DaoFactory.getDefaultDao();
                if (calendarObj != undefined && dao != undefined) {
                    dao = new ClientCustomDao(dao);
                    calendarObj.addRestriction(new EqualRestriction('ClientID', [_this._clientID]));
                    dao.queryByTable(calendarObj).subscribe((/**
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
            }
        }));
    };
    return CalendarEventDetailAPI;
}());
export { CalendarEventDetailAPI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJFdmVudERldGFpbEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2FwaS9DYWxlbmRhckV2ZW50RGV0YWlsQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHeEQsT0FBTyxFQUFFLFVBQVUsRUFBTSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQ7SUFHRSxnQ0FBWSxVQUFVO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFHRCxzQkFBSSw0Q0FBUTs7Ozs7UUFBWixVQUFhLFFBQWdCO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsT0FBTywyQ0FBMkMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQUEsaUJBK0NDO1FBOUNDLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLFFBQVE7WUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O2dCQUV6RCxVQUFVLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxFQUFFO2dCQUNaLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsR0FBRztnQkFDYixTQUFTLEVBQUUsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsR0FBRztnQkFDWixNQUFNLEVBQUUsR0FBRztnQkFDWCxNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixNQUFNLEVBQUUsRUFBRTtnQkFDVixVQUFVLEVBQUUsS0FBSzthQUNsQjtZQUNELElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFOzs7b0JBRWYsSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDO29CQUM1QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7aUJBQ0k7O29CQUNDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQzs7b0JBQ3RFLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtnQkFDMUMsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7b0JBRWhELEdBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9FLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDOzs7Ozs7O0lBbkVDLDJDQUEwQjs7Ozs7SUFDMUIsNkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudERldGFpbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoRGFvRmFjdG9yeSkge1xuICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICB9XG5cblxuICBzZXQgQ2xpZW50SUQoY2xpZW50SUQ6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gIH1cblxuICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnZXRDYWxlbmRhckV2ZW50RGV0YWlsJztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldENhbGVuZGFyRXZlbnREZXRhaWwuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkNhbGVuZGFyRXZlbnREZXRhaWwgQ2xpZW50SUQ6XCIsIHRoaXMuX2NsaWVudElEKTtcblxuICAgICAgbGV0IGRlZmF1bHRPYmogPSB7XG4gICAgICAgIENsaWVudElEOiBudWxsLFxuICAgICAgICBDYWxlbmRhcklEOiBudWxsLFxuICAgICAgICBDdXN0b21lckNsaWVudElEOiBudWxsLFxuICAgICAgICBUaXRsZTogJycsXG4gICAgICAgIExvY2F0aW9uOiAnJyxcbiAgICAgICAgQ2FsZW5kYXJUeXBlOiBudWxsLFxuICAgICAgICBJc0FsbERheTogJ04nLFxuICAgICAgICBTdGFydFRpbWU6IG51bGwsXG4gICAgICAgIEVuZFRpbWU6IG51bGwsXG4gICAgICAgIElzQWxlcnQ6ICdZJyxcbiAgICAgICAgQWxlcnQxOiAnOCcsXG4gICAgICAgIEFsZXJ0MjogJycsXG4gICAgICAgIEFsZXJ0MzogbnVsbCxcbiAgICAgICAgUmVtYXJrOiAnJyxcbiAgICAgICAgRGF0YVNvdXJjZTogJ0FQUCdcbiAgICAgIH07XG4gICAgICBpZiAoIXRoaXMuX2NsaWVudElEKSB7XG4gICAgICAgIC8vQWRkXG4gICAgICAgIGxldCByZXNwID0gbmV3IFNRTGl0ZVJlc3BvbnNlKHtcbiAgICAgICAgICBcImlzU3VjY2Vzc1wiOiB0cnVlXG4gICAgICAgIH0sIFtkZWZhdWx0T2JqXSk7XG4gICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19DYWxlbmRhclwiKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuX0Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBpZiAoY2FsZW5kYXJPYmogIT0gdW5kZWZpbmVkICYmIGRhbyAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLCBbdGhpcy5fY2xpZW50SURdKSk7XG4gICAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShjYWxlbmRhck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==