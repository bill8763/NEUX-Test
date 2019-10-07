/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from "../APIRequest";
import { HttpParams } from "@angular/common/http";
export class CheckVersionAPI {
    constructor() {
        this.version = '';
        this.DeviceSystem = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'CheckVersion';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let queryParams = new HttpParams();
        queryParams = queryParams.set("version", this.version);
        queryParams = queryParams.set("DeviceSystem", this.DeviceSystem);
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.type = "GET";
        requestData.params = queryParams;
        return requestData;
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/CheckVersionAPI.json';
    }
}
if (false) {
    /** @type {?} */
    CheckVersionAPI.prototype.version;
    /** @type {?} */
    CheckVersionAPI.prototype.DeviceSystem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tWZXJzaW9uQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvQ2hlY2tWZXJzaW9uQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxNQUFNO0lBRUY7UUFFTyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFIVCxDQUFDOzs7O0lBS1YsVUFBVTtRQUNiLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFTSxjQUFjOztZQUNiLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O1lBQzdELFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN6QixXQUFXLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUNqQyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0sV0FBVztRQUNkLE9BQU8sb0NBQW9DLENBQUM7SUFDaEQsQ0FBQztDQUVKOzs7SUFyQkcsa0NBQW9COztJQUNwQix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJUmVzdGZ1bEFQSSB9IGZyb20gXCIuLi9SZXN0ZnVsQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gXCIuLi9BUElSZXF1ZXN0XCI7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmV4cG9ydCBjbGFzcyBDaGVja1ZlcnNpb25BUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVJlc3RmdWxBUEkge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyB2ZXJzaW9uID0gJyc7XG4gICAgcHVibGljIERldmljZVN5c3RlbSA9ICcnO1xuXG4gICAgcHVibGljIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDaGVja1ZlcnNpb24nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXF1ZXN0RGF0YSgpOiBBUElSZXF1ZXN0IHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoXCJ2ZXJzaW9uXCIsIHRoaXMudmVyc2lvbik7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KFwiRGV2aWNlU3lzdGVtXCIsIHRoaXMuRGV2aWNlU3lzdGVtKTtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiR0VUXCI7XG4gICAgICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IHF1ZXJ5UGFyYW1zO1xuICAgICAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9DaGVja1ZlcnNpb25BUEkuanNvbic7XG4gICAgfVxuXG59Il19