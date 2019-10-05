/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
var PushErrorLogAPI = /** @class */ (function () {
    function PushErrorLogAPI() {
        this.url = '';
        this.errorList = [];
    }
    /**
     * @return {?}
     */
    PushErrorLogAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'PushErrorLog';
    };
    /**
     * @return {?}
     */
    PushErrorLogAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.errorList.map((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            return {
                "Message": err.Message,
                "Stack": err.Stack,
                "Time": new Date(err.Time).toISOString(),
                "DeviceModel": err.DeviceModel,
                "DeviceSystem": err.DeviceSystem
            };
        }));
        requestData.type = "POST";
        return requestData;
    };
    /**
     * @return {?}
     */
    PushErrorLogAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/logout.json';
    };
    return PushErrorLogAPI;
}());
export { PushErrorLogAPI };
if (false) {
    /** @type {?} */
    PushErrorLogAPI.prototype.url;
    /** @type {?} */
    PushErrorLogAPI.prototype.errorList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaEVycm9yTG9nQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvcHVzaEVycm9yTG9nQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDO0lBS0k7UUFITyxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBZSxFQUFFLENBQUM7SUFFbEIsQ0FBQzs7OztJQUVqQixvQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkOztZQUNRLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0IsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDckMsT0FBTztnQkFDSCxTQUFTLEVBQUUsR0FBRyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDbEIsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVztnQkFDOUIsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQ25DLENBQUE7UUFDTCxDQUFDLEVBQUMsQ0FBQTtRQUNGLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7SUE1QkcsOEJBQXdCOztJQUN4QixvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJUmVzdGZ1bEFQSSB9IGZyb20gJy4uL1Jlc3RmdWxBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuLi9BUElSZXF1ZXN0JztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gJy4uL01vY2tBUEkuaW50ZXJmYWNlJztcblxuXG5leHBvcnQgY2xhc3MgUHVzaEVycm9yTG9nQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElSZXN0ZnVsQVBJIHtcblxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBlcnJvckxpc3Q6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ1B1c2hFcnJvckxvZyc7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdERhdGEoKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IG5ldyBBUElSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3REYXRhLnVybCA9IHRoaXMudXJsO1xuICAgICAgICByZXF1ZXN0RGF0YS5ib2R5ID0gdGhpcy5lcnJvckxpc3QubWFwKGVyciA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTWVzc2FnZVwiOiBlcnIuTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBcIlN0YWNrXCI6IGVyci5TdGFjayxcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogbmV3IERhdGUoZXJyLlRpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VNb2RlbFwiOiBlcnIuRGV2aWNlTW9kZWwsXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VTeXN0ZW1cIjogZXJyLkRldmljZVN5c3RlbVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2xvZ291dC5qc29uJztcbiAgICB9XG59Il19