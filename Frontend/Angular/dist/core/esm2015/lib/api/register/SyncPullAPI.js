/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
export class SyncPullAPI {
    constructor() {
        this.url = '';
        this.body = {};
        this.lastUpdateTime = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'SyncPull';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.body;
        requestData.type = "GET";
        requestData.params = new HttpParams()
            .set('lastUpdateTime', this.lastUpdateTime);
        return requestData;
    }
}
if (false) {
    /** @type {?} */
    SyncPullAPI.prototype.url;
    /** @type {?} */
    SyncPullAPI.prototype.body;
    /** @type {?} */
    SyncPullAPI.prototype.lastUpdateTime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1B1bGxBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9TeW5jUHVsbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsTUFBTTtJQUtGO1FBSE8sUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixtQkFBYyxHQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRWpCLFVBQVU7UUFDTixPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsY0FBYzs7WUFDTixXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDbEMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN6QixXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQ2hDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKOzs7SUFsQkcsMEJBQWdCOztJQUNoQiwyQkFBaUI7O0lBQ2pCLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSAnLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4uL0FQSVJlcXVlc3QnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGNsYXNzIFN5bmNQdWxsQVBJIGltcGxlbWVudHMgSUFQSSwgSVJlc3RmdWxBUEkge1xuXG4gICAgcHVibGljIHVybCA9ICcnO1xuICAgIHB1YmxpYyBib2R5ID0ge307XG4gICAgcHVibGljIGxhc3RVcGRhdGVUaW1lOiBzdHJpbmcgPSAnJztcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdTeW5jUHVsbCc7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdERhdGEoKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IG5ldyBBUElSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3REYXRhLnVybCA9IHRoaXMudXJsO1xuICAgICAgICByZXF1ZXN0RGF0YS5ib2R5ID0gdGhpcy5ib2R5O1xuICAgICAgICByZXF1ZXN0RGF0YS50eXBlID0gXCJHRVRcIjtcbiAgICAgICAgcmVxdWVzdERhdGEucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICAgICAgLnNldCgnbGFzdFVwZGF0ZVRpbWUnLCB0aGlzLmxhc3RVcGRhdGVUaW1lKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3REYXRhO1xuICAgIH1cbn0iXX0=