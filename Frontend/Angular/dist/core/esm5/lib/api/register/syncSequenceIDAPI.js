/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
var syncSequenceIDAPI = /** @class */ (function () {
    function syncSequenceIDAPI() {
        this.num = 0;
        this.type = '';
    }
    /**
     * @return {?}
     */
    syncSequenceIDAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getSyncSequenceID';
    };
    /**
     * @return {?}
     */
    syncSequenceIDAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        /** @type {?} */
        var queryParams = new HttpParams();
        queryParams = queryParams.set("category", this.type);
        queryParams = queryParams.set("idNums", this.num.toString());
        requestData.params = queryParams;
        requestData.type = "GET";
        return requestData;
    };
    return syncSequenceIDAPI;
}());
export { syncSequenceIDAPI };
if (false) {
    /** @type {?} */
    syncSequenceIDAPI.prototype.num;
    /** @type {?} */
    syncSequenceIDAPI.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY1NlcXVlbmNlSURBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zeW5jU2VxdWVuY2VJREFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQ7SUFLSTtRQUhPLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVULENBQUM7Ozs7SUFFakIsc0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsMENBQWM7OztJQUFkOztZQUNRLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDOUIsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ2xDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RCxXQUFXLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUNqQyxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN6QixPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7O0lBbEJHLGdDQUF1Qjs7SUFDdkIsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVJlc3RmdWxBUEkgfSBmcm9tICcuLi9SZXN0ZnVsQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi4vQVBJUmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgY2xhc3Mgc3luY1NlcXVlbmNlSURBUEkgaW1wbGVtZW50cyBJQVBJLCBJUmVzdGZ1bEFQSSB7XG5cbiAgICBwdWJsaWMgbnVtOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2dldFN5bmNTZXF1ZW5jZUlEJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5zZXQoXCJjYXRlZ29yeVwiLCB0aGlzLnR5cGUpO1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChcImlkTnVtc1wiLCB0aGlzLm51bS50b1N0cmluZygpKTtcbiAgICAgICAgcmVxdWVzdERhdGEucGFyYW1zID0gcXVlcnlQYXJhbXM7XG4gICAgICAgIHJlcXVlc3REYXRhLnR5cGUgPSBcIkdFVFwiO1xuICAgICAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gICAgfVxufSJdfQ==