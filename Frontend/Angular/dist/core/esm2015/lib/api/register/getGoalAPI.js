/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
export class getGoalAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    setAgentID(agent_id) {
        this.agentID = agent_id;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return 'assets/mock/Goal.json';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoal';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getGoal;
            requestData.url = this.url + '/' + this.agentID;
        }
        else {
            requestData.url = this.url;
        }
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    getGoalAPI.prototype.agentID;
    /**
     * @type {?}
     * @private
     */
    getGoalAPI.prototype.url;
    /** @type {?} */
    getGoalAPI.prototype.lastUpdateTime;
    /**
     * @type {?}
     * @private
     */
    getGoalAPI.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R29hbEFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL2dldEdvYWxBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS2xELE1BQU07Ozs7SUFFRixZQUNZLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBSW5CLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBRVYsbUJBQWMsR0FBVyxxQkFBcUIsQ0FBQztJQU5sRCxDQUFDOzs7OztJQVFFLFVBQVUsQ0FBRSxRQUFRO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxjQUFjOztZQUNOLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRztRQUMzQixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFDO1lBQ3pFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2hELFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNuRDthQUFJO1lBQ0QsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzlCO1FBQ0QsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDekIsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUNwQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjs7Ozs7O0lBL0JHLDZCQUFxQjs7Ozs7SUFDckIseUJBQWlCOztJQUVqQixvQ0FBc0Q7Ozs7O0lBUGxELGdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSAnLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4uL0FQSVJlcXVlc3QnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSAnLi4vTW9ja0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuXG5leHBvcnQgY2xhc3MgZ2V0R29hbEFQSSBpbXBsZW1lbnRzIElBUEksIElSZXN0ZnVsQVBJLCBJTW9ja0FQSXtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIEFQUF9DT05GSUc6IGFueVxuICAgICkgeyB9XG5cblxuICAgIHByaXZhdGUgYWdlbnRJRCA9ICcnO1xuICAgIHByaXZhdGUgdXJsID0gJyc7XG4gICAgXG4gICAgcHVibGljIGxhc3RVcGRhdGVUaW1lOiBzdHJpbmcgPSAnMjAxOS0wMS0wMSAwMDowMDowMCc7XG5cbiAgICBwdWJsaWMgc2V0QWdlbnRJRCggYWdlbnRfaWQpe1xuICAgICAgICB0aGlzLmFnZW50SUQgPSBhZ2VudF9pZDtcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2Fzc2V0cy9tb2NrL0dvYWwuanNvbic7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdnZXRHb2FsJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgbGV0IGVudiA9IHRoaXMuQVBQX0NPTkZJRy5FTlY7XG4gICAgICAgICAgaWYodGhpcy5hZ2VudElEICE9ICcnICYmIHRoaXMuYWdlbnRJRCAhPSB1bmRlZmluZWQgJiYgdGhpcy5hZ2VudElEICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLkFQUF9DT05GSUdbZW52XS5BUElfVVJMLmdldEdvYWw7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybCArICcvJyArIHRoaXMuYWdlbnRJRDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybDtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJHRVRcIjtcbiAgICAgICAgcmVxdWVzdERhdGEucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICAuc2V0KCdsYXN0VXBkYXRlVGltZScsIHRoaXMubGFzdFVwZGF0ZVRpbWUpO1xuICAgICAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gICAgfVxufSJdfQ==