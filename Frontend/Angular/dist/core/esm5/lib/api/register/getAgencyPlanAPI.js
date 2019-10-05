/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
var getAgencyPlanAPI = /** @class */ (function () {
    function getAgencyPlanAPI(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    getAgencyPlanAPI.prototype.setAgentID = /**
     * @param {?} agent_id
     * @return {?}
     */
    function (agent_id) {
        this.agentID = agent_id;
    };
    /**
     * @return {?}
     */
    getAgencyPlanAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/AgencyPlan.json';
    };
    /**
     * @return {?}
     */
    getAgencyPlanAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getAgencyPlan';
    };
    /**
     * @return {?}
     */
    getAgencyPlanAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        /** @type {?} */
        var env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getAgencyPlan;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    };
    return getAgencyPlanAPI;
}());
export { getAgencyPlanAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    getAgencyPlanAPI.prototype.agentID;
    /** @type {?} */
    getAgencyPlanAPI.prototype.url;
    /** @type {?} */
    getAgencyPlanAPI.prototype.lastUpdateTime;
    /**
     * @type {?}
     * @private
     */
    getAgencyPlanAPI.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWdlbmN5UGxhbkFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL2dldEFnZW5jeVBsYW5BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xEO0lBRUksMEJBQW9CLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBRTNCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDZCxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsbUJBQWMsR0FBVyxxQkFBcUIsQ0FBQztJQUpmLENBQUM7Ozs7O0lBTWpDLHFDQUFVOzs7O0lBQWpCLFVBQWtCLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLCtCQUErQixDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQseUNBQWM7OztJQUFkOztZQUNRLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRztRQUM3QixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFDO1lBQ3ZFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3RELFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNuRDthQUFJO1lBQ0QsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzlCO1FBQ0QsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDekIsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUNwQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7Ozs7Ozs7SUE5QkcsbUNBQXFCOztJQUNyQiwrQkFBZ0I7O0lBQ2hCLDBDQUFzRDs7Ozs7SUFKMUMsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBnZXRBZ2VuY3lQbGFuQVBJIGltcGxlbWVudHMgSUFQSSwgSVJlc3RmdWxBUEksIElNb2NrQVBJe1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBBUFBfQ09ORklHOiBhbnkpIHsgfVxuXG4gICAgcHJpdmF0ZSBhZ2VudElEID0gJyc7XG4gICAgcHVibGljIHVybCA9ICcnO1xuICAgIHB1YmxpYyBsYXN0VXBkYXRlVGltZTogc3RyaW5nID0gJzIwMTktMDEtMDEgMDA6MDA6MDAnO1xuXG4gICAgcHVibGljIHNldEFnZW50SUQoYWdlbnRfaWQ6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuYWdlbnRJRCA9IGFnZW50X2lkO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9BZ2VuY3lQbGFuLmpzb24nO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnZ2V0QWdlbmN5UGxhbic7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdERhdGEoKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IG5ldyBBUElSZXF1ZXN0KCk7XG4gICAgICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUcuRU5WO1xuICAgICAgICBpZih0aGlzLmFnZW50SUQgIT0gJycgJiYgdGhpcy5hZ2VudElEICE9IHVuZGVmaW5lZCAmJiB0aGlzLmFnZW50SUQgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLkFQSV9VUkwuZ2V0QWdlbmN5UGxhbjtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLnVybCA9IHRoaXMudXJsICsgJy8nICsgdGhpcy5hZ2VudElEO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLnVybCA9IHRoaXMudXJsO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3REYXRhLnR5cGUgPSBcIkdFVFwiO1xuICAgICAgICByZXF1ZXN0RGF0YS5wYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAgIC5zZXQoJ2xhc3RVcGRhdGVUaW1lJywgdGhpcy5sYXN0VXBkYXRlVGltZSk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG59Il19