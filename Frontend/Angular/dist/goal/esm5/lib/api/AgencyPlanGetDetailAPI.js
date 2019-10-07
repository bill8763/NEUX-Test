/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClientCustomDao, EqualRestriction } from '@allianzSND/core';
import { Observable } from 'rxjs';
var AgencyPlanGetDetailAPI = /** @class */ (function () {
    function AgencyPlanGetDetailAPI(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    AgencyPlanGetDetailAPI.prototype.setDataYear = /**
     * @param {?} dataYear
     * @return {?}
     */
    function (dataYear) {
        this._dataYear = dataYear;
    };
    /**
     * @return {?}
     */
    AgencyPlanGetDetailAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return "getAgencyPlanDetail";
    };
    /**
     * @return {?}
     */
    AgencyPlanGetDetailAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return "./assets/mock/getAgencyPlanDetail.json";
    };
    /**
     * @return {?}
     */
    AgencyPlanGetDetailAPI.prototype.executeSQL = /**
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
            var agencyDetailObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Agency_Detail_Data");
            /** @type {?} */
            var dao = _this.daoFactory.getDefaultDao();
            if (agencyDetailObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                agencyDetailObj.addRestriction(new EqualRestriction('DataYear', [_this._dataYear]));
                dao.queryByTable(agencyDetailObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    console.log(resp);
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
    return AgencyPlanGetDetailAPI;
}());
export { AgencyPlanGetDetailAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGetDetailAPI.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanGetDetailAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbkdldERldGFpbEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvYXBpL0FnZW5jeVBsYW5HZXREZXRhaWxBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQztJQU9FLGdDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTFDLENBQUM7Ozs7O0lBTkQsNENBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFNRCwyQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLHdDQUF3QyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFBQSxpQkFrQkM7UUFqQkMsT0FBTyxVQUFVLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsUUFBUTs7Z0JBQzVCLGVBQWUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQzs7Z0JBQ25GLEdBQUcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLGVBQWUsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFFcEQsR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsR0FBRyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsSUFBSTtvQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQzs7Ozs7OztJQXJDQywyQ0FBMEI7Ozs7O0lBTWQsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEksIERhb0ZhY3RvcnksIENsaWVudEN1c3RvbURhbywgRXF1YWxSZXN0cmljdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBZ2VuY3lQbGFuR2V0RGV0YWlsQVBJIGltcGxlbWVudHMgSU1vY2tBUEksIElBUEksIElTUUxpdGVBUEl7XG4gIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgc2V0RGF0YVllYXIoZGF0YVllYXI6IG51bWJlcikge1xuICAgIHRoaXMuX2RhdGFZZWFyID0gZGF0YVllYXI7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICB9XG5cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImdldEFnZW5jeVBsYW5EZXRhaWxcIjtcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiLi9hc3NldHMvbW9jay9nZXRBZ2VuY3lQbGFuRGV0YWlsLmpzb25cIjtcbiAgfVxuXG4gIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBsZXQgYWdlbmN5RGV0YWlsT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX0FnZW5jeV9EZXRhaWxfRGF0YVwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgaWYgKGFnZW5jeURldGFpbE9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgYWdlbmN5RGV0YWlsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl9kYXRhWWVhcl0pKTtcbiAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShhZ2VuY3lEZXRhaWxPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19