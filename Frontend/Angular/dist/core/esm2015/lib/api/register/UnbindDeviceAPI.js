/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from "../APIRequest";
export class UnbindDeviceAPI {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this._deviceID = '';
    }
    /**
     * @param {?} deviceID
     * @return {?}
     */
    setDeviceID(deviceID) {
        this._deviceID = deviceID;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'unbindDevice';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let env = this.APP_CONFIG.ENV;
        /** @type {?} */
        let cleanDeviceUrl = this.APP_CONFIG[env]['API_URL']['unbindDevice'];
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = cleanDeviceUrl;
        requestData.body = { "DeviceId": this._deviceID };
        requestData.type = "POST";
        return requestData;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5iaW5kRGV2aWNlQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvVW5iaW5kRGV2aWNlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU07Ozs7SUFFRixZQUFvQixVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUkzQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBSC9CLENBQUM7Ozs7O0lBS0QsV0FBVyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxjQUFjOztZQUNOLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7O1lBQ3pCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQzs7WUFDaEUsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ2xDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjs7Ozs7O0lBdkJHLG9DQUErQjs7Ozs7SUFKbkIscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbywgRGFvRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gJy4uLy4uL2RldmljZS9zcWxpdGUnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tIFwiLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tIFwiLi4vQVBJUmVxdWVzdFwiO1xuXG5leHBvcnQgY2xhc3MgVW5iaW5kRGV2aWNlQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElSZXN0ZnVsQVBJIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgQVBQX0NPTkZJRzogYW55KSB7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIF9kZXZpY2VJRDogc3RyaW5nID0gJyc7XG5cbiAgICBzZXREZXZpY2VJRChkZXZpY2VJRDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RldmljZUlEID0gZGV2aWNlSUQ7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3VuYmluZERldmljZSc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2xvZ291dC5qc29uJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpOiBBUElSZXF1ZXN0IHtcbiAgICAgICAgbGV0IGVudiA9IHRoaXMuQVBQX0NPTkZJRy5FTlY7XG4gICAgICAgIGxldCBjbGVhbkRldmljZVVybCA9IHRoaXMuQVBQX0NPTkZJR1tlbnZdWydBUElfVVJMJ11bJ3VuYmluZERldmljZSddO1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSBjbGVhbkRldmljZVVybDtcbiAgICAgICAgcmVxdWVzdERhdGEuYm9keSA9IHsgXCJEZXZpY2VJZFwiOiB0aGlzLl9kZXZpY2VJRCB9O1xuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJQT1NUXCI7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG59XG4iXX0=