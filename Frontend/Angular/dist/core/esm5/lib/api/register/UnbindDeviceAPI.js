/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from "../APIRequest";
var UnbindDeviceAPI = /** @class */ (function () {
    function UnbindDeviceAPI(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this._deviceID = '';
    }
    /**
     * @param {?} deviceID
     * @return {?}
     */
    UnbindDeviceAPI.prototype.setDeviceID = /**
     * @param {?} deviceID
     * @return {?}
     */
    function (deviceID) {
        this._deviceID = deviceID;
    };
    /**
     * @return {?}
     */
    UnbindDeviceAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'unbindDevice';
    };
    /**
     * @return {?}
     */
    UnbindDeviceAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/logout.json';
    };
    /**
     * @return {?}
     */
    UnbindDeviceAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var env = this.APP_CONFIG.ENV;
        /** @type {?} */
        var cleanDeviceUrl = this.APP_CONFIG[env]['API_URL']['unbindDevice'];
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = cleanDeviceUrl;
        requestData.body = { "DeviceId": this._deviceID };
        requestData.type = "POST";
        return requestData;
    };
    return UnbindDeviceAPI;
}());
export { UnbindDeviceAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnbindDeviceAPI.prototype._deviceID;
    /**
     * @type {?}
     * @private
     */
    UnbindDeviceAPI.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5iaW5kRGV2aWNlQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvVW5iaW5kRGV2aWNlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBRUkseUJBQW9CLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBSTNCLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFIL0IsQ0FBQzs7Ozs7SUFLRCxxQ0FBVzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNJLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCx3Q0FBYzs7O0lBQWQ7O1lBQ1EsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzs7WUFDekIsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDOztZQUNoRSxXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDbEMsV0FBVyxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUM7UUFDakMsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEQsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDMUIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQzs7Ozs7OztJQXZCRyxvQ0FBK0I7Ozs7O0lBSm5CLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBDbGllbnRDdXN0b21EYW8sIERhb0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlJztcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSBcIi4uL1Jlc3RmdWxBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSBcIi4uL0FQSVJlcXVlc3RcIjtcblxuZXhwb3J0IGNsYXNzIFVuYmluZERldmljZUFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJUmVzdGZ1bEFQSSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFQUF9DT05GSUc6IGFueSkge1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBfZGV2aWNlSUQ6IHN0cmluZyA9ICcnO1xuXG4gICAgc2V0RGV2aWNlSUQoZGV2aWNlSUQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kZXZpY2VJRCA9IGRldmljZUlEO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICd1bmJpbmREZXZpY2UnO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9sb2dvdXQuanNvbic7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdERhdGEoKTogQVBJUmVxdWVzdCB7XG4gICAgICAgIGxldCBlbnYgPSB0aGlzLkFQUF9DT05GSUcuRU5WO1xuICAgICAgICBsZXQgY2xlYW5EZXZpY2VVcmwgPSB0aGlzLkFQUF9DT05GSUdbZW52XVsnQVBJX1VSTCddWyd1bmJpbmREZXZpY2UnXTtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdERhdGEudXJsID0gY2xlYW5EZXZpY2VVcmw7XG4gICAgICAgIHJlcXVlc3REYXRhLmJvZHkgPSB7IFwiRGV2aWNlSWRcIjogdGhpcy5fZGV2aWNlSUQgfTtcbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiUE9TVFwiO1xuICAgICAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gICAgfVxufVxuIl19