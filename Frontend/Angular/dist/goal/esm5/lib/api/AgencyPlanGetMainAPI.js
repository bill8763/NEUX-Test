/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from '@allianzSND/core';
import { Observable } from 'rxjs';
var AgencyPlanGetMainAPI = /** @class */ (function () {
    function AgencyPlanGetMainAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    AgencyPlanGetMainAPI.prototype.setDataYear = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        this._dataYear = dataYear;
    };
    /**
     * @return {?}
     */
    AgencyPlanGetMainAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return "getAgencyPlanMain";
    };
    /**
     * @return {?}
     */
    AgencyPlanGetMainAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return "./assets/mock/getAgencyPlanMainMock.json";
    };
    /**
     * @return {?}
     */
    AgencyPlanGetMainAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("dataYear", this._dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var agencyMainObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Agency_Plan_Main");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (agencyMainObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                agencyMainObj.addRestriction(new EqualRestriction('DataYear', [_this._dataYear]));
                dao.queryByTable(agencyMainObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    console.log("resp", resp);
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
    return AgencyPlanGetMainAPI;
}());
export { AgencyPlanGetMainAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGetMainAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGetMainAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbkdldE1haW5BUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9nb2FsLyIsInNvdXJjZXMiOlsibGliL2FwaS9BZ2VuY3lQbGFuR2V0TWFpbkFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEwQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBT0UsOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQzs7Ozs7SUFORCwwQ0FBVzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7SUFDM0IsQ0FBQzs7OztJQU1ELHlDQUFVOzs7SUFBVjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLE9BQU8sMENBQTBDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUFBLGlCQWtCQztRQWpCQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTs7Z0JBQzVCLGFBQWEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyw4QkFBOEIsQ0FBQzs7Z0JBQy9FLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLGFBQWEsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFDbEQsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakYsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7Ozs7Ozs7SUFyQ0MseUNBQTBCOzs7OztJQU1kLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNb2NrQVBJLCBJQVBJLCBJU1FMaXRlQVBJLCBEYW9GYWN0b3J5LCBDbGllbnRDdXN0b21EYW8sIEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEFnZW5jeVBsYW5HZXRNYWluQVBJIGltcGxlbWVudHMgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9kYXRhWWVhcjogbnVtYmVyO1xuXG4gIHNldERhdGFZZWFyKGRhdGFZZWFyOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kYXRhWWVhciA9IGRhdGFZZWFyXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImdldEFnZW5jeVBsYW5NYWluXCI7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIi4vYXNzZXRzL21vY2svZ2V0QWdlbmN5UGxhbk1haW5Nb2NrLmpzb25cIjtcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFZZWFyXCIsIHRoaXMuX2RhdGFZZWFyKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgYWdlbmN5TWFpbk9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19BZ2VuY3lfUGxhbl9NYWluXCIpO1xuICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICBpZiAoYWdlbmN5TWFpbk9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgIGFnZW5jeU1haW5PYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0RhdGFZZWFyJywgW3RoaXMuX2RhdGFZZWFyXSkpO1xuICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGFnZW5jeU1haW5PYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcFwiLCByZXNwKTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==