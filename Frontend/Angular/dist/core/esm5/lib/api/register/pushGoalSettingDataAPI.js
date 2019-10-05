/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
var pushGoalSettingDataAPI = /** @class */ (function () {
    function pushGoalSettingDataAPI() {
        this.url = '';
    }
    /**
     * @return {?}
     */
    pushGoalSettingDataAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'pushGoalSettingData';
    };
    /**
     * @return {?}
     */
    pushGoalSettingDataAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.mainData;
        requestData.type = "POST";
        return requestData;
    };
    /**
     * @return {?}
     */
    pushGoalSettingDataAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/GoalCallback.json';
    };
    return pushGoalSettingDataAPI;
}());
export { pushGoalSettingDataAPI };
if (false) {
    /** @type {?} */
    pushGoalSettingDataAPI.prototype.url;
    /** @type {?} */
    pushGoalSettingDataAPI.prototype.mainData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaEdvYWxTZXR0aW5nRGF0YUFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL3B1c2hHb2FsU2V0dGluZ0RhdGFBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0M7SUFLSTtRQUhPLFFBQUcsR0FBVyxFQUFFLENBQUM7SUFHUixDQUFDOzs7O0lBRWpCLDJDQUFVOzs7SUFBVjtRQUNJLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELCtDQUFjOzs7SUFBZDs7WUFDUSxXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDbEMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0ksT0FBTyxpQ0FBaUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7O0lBcEJHLHFDQUF3Qjs7SUFDeEIsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdWJtaXRHb2FsRGF0YSB9IGZyb20gJy4uLy4uL2JlYW4nO1xuXG5cbmV4cG9ydCBjbGFzcyBwdXNoR29hbFNldHRpbmdEYXRhQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElSZXN0ZnVsQVBJIHtcblxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBtYWluRGF0YTogU3VibWl0R29hbERhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdwdXNoR29hbFNldHRpbmdEYXRhJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3REYXRhLmJvZHkgPSB0aGlzLm1haW5EYXRhO1xuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL0dvYWxDYWxsYmFjay5qc29uJztcbiAgICB9XG59Il19