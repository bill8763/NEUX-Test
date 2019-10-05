/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
import { HttpParams } from '@angular/common/http';
export class syncSequenceIDAPI {
    constructor() {
        this.num = 0;
        this.type = '';
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getSyncSequenceID';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        /** @type {?} */
        let queryParams = new HttpParams();
        queryParams = queryParams.set("category", this.type);
        queryParams = queryParams.set("idNums", this.num.toString());
        requestData.params = queryParams;
        requestData.type = "GET";
        return requestData;
    }
}
if (false) {
    /** @type {?} */
    syncSequenceIDAPI.prototype.num;
    /** @type {?} */
    syncSequenceIDAPI.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY1NlcXVlbmNlSURBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9zeW5jU2VxdWVuY2VJREFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsTUFBTTtJQUtGO1FBSE8sUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixTQUFJLEdBQVcsRUFBRSxDQUFDO0lBRVQsQ0FBQzs7OztJQUVqQixVQUFVO1FBQ04sT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsY0FBYzs7WUFDTixXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQzlCLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0QsV0FBVyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDakMsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDekIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKOzs7SUFsQkcsZ0NBQXVCOztJQUN2QixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSAnLi4vQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJUmVzdGZ1bEFQSSB9IGZyb20gJy4uL1Jlc3RmdWxBUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuLi9BUElSZXF1ZXN0JztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjbGFzcyBzeW5jU2VxdWVuY2VJREFQSSBpbXBsZW1lbnRzIElBUEksIElSZXN0ZnVsQVBJIHtcblxuICAgIHB1YmxpYyBudW06IG51bWJlciA9IDA7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnZ2V0U3luY1NlcXVlbmNlSUQnO1xuICAgIH1cblxuICAgIGdldFJlcXVlc3REYXRhKCkge1xuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQVBJUmVxdWVzdCgpO1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zLnNldChcImNhdGVnb3J5XCIsIHRoaXMudHlwZSk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuc2V0KFwiaWROdW1zXCIsIHRoaXMubnVtLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXF1ZXN0RGF0YS5wYXJhbXMgPSBxdWVyeVBhcmFtcztcbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiR0VUXCI7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG59Il19