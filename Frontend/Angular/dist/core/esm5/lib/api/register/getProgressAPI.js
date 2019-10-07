/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
var getProgressAPI = /** @class */ (function () {
    function getProgressAPI(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.agentID = '';
        this.url = '';
        this.lastUpdateTime = '2019-01-01 00:00:00';
    }
    /**
     * @param {?} agent_id
     * @return {?}
     */
    getProgressAPI.prototype.setAgentID = /**
     * @param {?} agent_id
     * @return {?}
     */
    function (agent_id) {
        this.agentID = agent_id;
    };
    /**
     * @return {?}
     */
    getProgressAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/Progress.json';
    };
    /**
     * @return {?}
     */
    getProgressAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getProgress';
    };
    /**
     * @return {?}
     */
    getProgressAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        /** @type {?} */
        var env = this.APP_CONFIG.ENV;
        if (this.agentID != '' && this.agentID != undefined && this.agentID != null) {
            this.url = this.APP_CONFIG[env].API_URL.getProgress;
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
    return getProgressAPI;
}());
export { getProgressAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    getProgressAPI.prototype.agentID;
    /** @type {?} */
    getProgressAPI.prototype.url;
    /** @type {?} */
    getProgressAPI.prototype.lastUpdateTime;
    /**
     * @type {?}
     * @private
     */
    getProgressAPI.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZ3Jlc3NBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9nZXRQcm9ncmVzc0FQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQ7SUFFSSx3QkFBb0IsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFFM0IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNkLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxtQkFBYyxHQUFXLHFCQUFxQixDQUFDO0lBSmYsQ0FBQzs7Ozs7SUFNakMsbUNBQVU7Ozs7SUFBakIsVUFBa0IsUUFBUTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0ksT0FBTyw2QkFBNkIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsbUNBQVU7OztJQUFWO1FBQ0ksT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHVDQUFjOzs7SUFBZDs7WUFDUSxXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQzlCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN6RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNwRCxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDbkQ7YUFBTTtZQUNILFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUM5QjtRQUNELFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDaEMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDOzs7Ozs7O0lBOUJHLGlDQUFxQjs7SUFDckIsNkJBQWdCOztJQUNoQix3Q0FBc0Q7Ozs7O0lBSjFDLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSAnLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4uL0FQSVJlcXVlc3QnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSAnLi4vTW9ja0FQSS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgZ2V0UHJvZ3Jlc3NBUEkgaW1wbGVtZW50cyBJQVBJLCBJUmVzdGZ1bEFQSSwgSU1vY2tBUEkge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBBUFBfQ09ORklHOiBhbnkpIHsgfVxuXG4gICAgcHJpdmF0ZSBhZ2VudElEID0gJyc7XG4gICAgcHVibGljIHVybCA9ICcnO1xuICAgIHB1YmxpYyBsYXN0VXBkYXRlVGltZTogc3RyaW5nID0gJzIwMTktMDEtMDEgMDA6MDA6MDAnO1xuXG4gICAgcHVibGljIHNldEFnZW50SUQoYWdlbnRfaWQpIHtcbiAgICAgICAgdGhpcy5hZ2VudElEID0gYWdlbnRfaWQ7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL1Byb2dyZXNzLmpzb24nO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnZ2V0UHJvZ3Jlc3MnO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3REYXRhKCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgICAgICBsZXQgZW52ID0gdGhpcy5BUFBfQ09ORklHLkVOVjtcbiAgICAgICAgaWYgKHRoaXMuYWdlbnRJRCAhPSAnJyAmJiB0aGlzLmFnZW50SUQgIT0gdW5kZWZpbmVkICYmIHRoaXMuYWdlbnRJRCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdLkFQSV9VUkwuZ2V0UHJvZ3Jlc3M7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybCArICcvJyArIHRoaXMuYWdlbnRJRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLnVybCA9IHRoaXMudXJsO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3REYXRhLnR5cGUgPSBcIkdFVFwiO1xuICAgICAgICByZXF1ZXN0RGF0YS5wYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAgICAgICAuc2V0KCdsYXN0VXBkYXRlVGltZScsIHRoaXMubGFzdFVwZGF0ZVRpbWUpO1xuICAgICAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gICAgfVxufSJdfQ==