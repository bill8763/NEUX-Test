/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
var SyncPullAPI = /** @class */ (function () {
    function SyncPullAPI() {
        this.url = '';
        this.body = {};
        this.lastUpdateTime = '';
    }
    /**
     * @return {?}
     */
    SyncPullAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'SyncPull';
    };
    /**
     * @return {?}
     */
    SyncPullAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.body;
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    };
    return SyncPullAPI;
}());
export { SyncPullAPI };
if (false) {
    /** @type {?} */
    SyncPullAPI.prototype.url;
    /** @type {?} */
    SyncPullAPI.prototype.body;
    /** @type {?} */
    SyncPullAPI.prototype.lastUpdateTime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1B1bGxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9TeW5jUHVsbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQ7SUFLSTtRQUhPLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVqQixnQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsb0NBQWM7OztJQUFkOztZQUNRLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0IsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDaEMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7O0lBbEJHLDBCQUFnQjs7SUFDaEIsMkJBQWlCOztJQUNqQixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJUmVzdGZ1bEFQSSB9IGZyb20gJy4uL1Jlc3RmdWxBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuLi9BUElSZXF1ZXN0JztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjbGFzcyBTeW5jUHVsbEFQSSBpbXBsZW1lbnRzIElBUEksIElSZXN0ZnVsQVBJIHtcblxuICAgIHB1YmxpYyB1cmwgPSAnJztcbiAgICBwdWJsaWMgYm9keSA9IHt9O1xuICAgIHB1YmxpYyBsYXN0VXBkYXRlVGltZTogc3RyaW5nID0gJyc7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnU3luY1B1bGwnO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3REYXRhKCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0RGF0YS51cmwgPSB0aGlzLnVybDtcbiAgICAgICAgcmVxdWVzdERhdGEuYm9keSA9IHRoaXMuYm9keTtcbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiR0VUXCI7XG4gICAgICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgICAgICAgIC5zZXQoJ2xhc3RVcGRhdGVUaW1lJywgdGhpcy5sYXN0VXBkYXRlVGltZSk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG59Il19