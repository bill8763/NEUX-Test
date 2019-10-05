/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
var getYearConfigAPI = /** @class */ (function () {
    function getYearConfigAPI(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    getYearConfigAPI.prototype.setAgentID = /**
     * @param {?} agent_id
     * @return {?}
     */
    function (agent_id) {
        this.agentID = agent_id;
    };
    /**
     * @return {?}
     */
    getYearConfigAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/yearConfig.json';
    };
    /**
     * @return {?}
     */
    getYearConfigAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getYearConfig';
    };
    /**
     * @return {?}
     */
    getYearConfigAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        /** @type {?} */
        var env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getYearConfig;
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
    return getYearConfigAPI;
}());
export { getYearConfigAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    getYearConfigAPI.prototype.agentID;
    /** @type {?} */
    getYearConfigAPI.prototype.url;
    /** @type {?} */
    getYearConfigAPI.prototype.lastUpdateTime;
    /**
     * @type {?}
     * @private
     */
    getYearConfigAPI.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0WWVhckNvbmZpZ0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL2dldFllYXJDb25maWdBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xEO0lBRUksMEJBQW9CLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBRTNCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDZCxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsbUJBQWMsR0FBVyxxQkFBcUIsQ0FBQztJQUpmLENBQUM7Ozs7O0lBTWpDLHFDQUFVOzs7O0lBQWpCLFVBQWtCLFFBQVE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7OztJQUdELHNDQUFXOzs7SUFBWDtRQUNJLE9BQU8sK0JBQStCLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHFDQUFVOzs7SUFBVjtRQUNJLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx5Q0FBYzs7O0lBQWQ7O1lBQ1EsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFOztZQUM5QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDekUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDdEQsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ25EO2FBQU07WUFDSCxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDOUI7UUFDRCxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN6QixXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQ2hDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQzs7Ozs7OztJQS9CRyxtQ0FBcUI7O0lBQ3JCLCtCQUFnQjs7SUFDaEIsMENBQXNEOzs7OztJQUoxQyxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJUmVzdGZ1bEFQSSB9IGZyb20gJy4uL1Jlc3RmdWxBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuLi9BUElSZXF1ZXN0JztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIGdldFllYXJDb25maWdBUEkgaW1wbGVtZW50cyBJQVBJLCBJUmVzdGZ1bEFQSSwgSU1vY2tBUEkge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBBUFBfQ09ORklHOiBhbnkpIHsgfVxuXG4gICAgcHJpdmF0ZSBhZ2VudElEID0gJyc7XG4gICAgcHVibGljIHVybCA9ICcnO1xuICAgIHB1YmxpYyBsYXN0VXBkYXRlVGltZTogc3RyaW5nID0gJzIwMTktMDEtMDEgMDA6MDA6MDAnO1xuXG4gICAgcHVibGljIHNldEFnZW50SUQoYWdlbnRfaWQpIHtcbiAgICAgICAgdGhpcy5hZ2VudElEID0gYWdlbnRfaWQ7XG4gICAgfVxuXG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2sveWVhckNvbmZpZy5qc29uJztcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2dldFllYXJDb25maWcnO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3REYXRhKCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgICAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICAgICAgaWYgKHRoaXMuYWdlbnRJRCAhPSAnJyAmJiB0aGlzLmFnZW50SUQgIT0gdW5kZWZpbmVkICYmIHRoaXMuYWdlbnRJRCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLkFQSV9VUkwuZ2V0WWVhckNvbmZpZztcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLnVybCA9IHRoaXMudXJsICsgJy8nICsgdGhpcy5hZ2VudElEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiR0VUXCI7XG4gICAgICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgICAgICAgIC5zZXQoJ2xhc3RVcGRhdGVUaW1lJywgdGhpcy5sYXN0VXBkYXRlVGltZSk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG59Il19