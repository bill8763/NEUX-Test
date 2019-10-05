/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
var SyncPushAPI = /** @class */ (function () {
    function SyncPushAPI() {
        this.url = '';
        this.body = {};
        this.async = false;
    }
    /**
     * @return {?}
     */
    SyncPushAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'SyncPush';
    };
    /**
     * @return {?}
     */
    SyncPushAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.body;
        requestData.type = "PUT";
        return requestData;
    };
    return SyncPushAPI;
}());
export { SyncPushAPI };
if (false) {
    /** @type {?} */
    SyncPushAPI.prototype.url;
    /** @type {?} */
    SyncPushAPI.prototype.body;
    /** @type {?} */
    SyncPushAPI.prototype.async;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1B1c2hBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9TeW5jUHVzaEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUtJO1FBSE8sUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQVksS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVqQixnQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsb0NBQWM7OztJQUFkOztZQUNRLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0IsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXpCLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7Ozs7SUFqQkcsMEJBQWdCOztJQUNoQiwyQkFBaUI7O0lBQ2pCLDRCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSAnLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4uL0FQSVJlcXVlc3QnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGNsYXNzIFN5bmNQdXNoQVBJIGltcGxlbWVudHMgSUFQSSwgSVJlc3RmdWxBUEkge1xuXG4gICAgcHVibGljIHVybCA9ICcnO1xuICAgIHB1YmxpYyBib2R5ID0ge307XG4gICAgcHVibGljIGFzeW5jOiBCb29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnU3luY1B1c2gnO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3REYXRhKCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybDtcbiAgICAgICAgcmVxdWVzdERhdGEuYm9keSA9IHRoaXMuYm9keTtcbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiUFVUXCI7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3REYXRhO1xuICAgIH1cbn0iXX0=