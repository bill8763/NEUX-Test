/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
var PushActionLogAPI = /** @class */ (function () {
    function PushActionLogAPI() {
        this.url = '';
        this.actionList = [];
    }
    /**
     * @return {?}
     */
    PushActionLogAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'PushActionLog';
    };
    /**
     * @return {?}
     */
    PushActionLogAPI.prototype.getRequestData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.actionList.map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return {
                "ActionID": action.ActionID,
                "FunctionID": action.Function,
                "Message": action.Message,
                "Time": new Date(action.Time).toISOString(),
                "Action": action.Action,
                "Valid": action.Valid,
                "DeviceModel": action.DeviceModel,
                "DeviceSystem": action.DeviceSystem
            };
        }));
        requestData.type = "POST";
        return requestData;
    };
    /**
     * @return {?}
     */
    PushActionLogAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/logout.json';
    };
    return PushActionLogAPI;
}());
export { PushActionLogAPI };
if (false) {
    /** @type {?} */
    PushActionLogAPI.prototype.url;
    /** @type {?} */
    PushActionLogAPI.prototype.actionList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVzaEFjdGlvbkxvZ0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL1B1c2hBY3Rpb25Mb2dBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0M7SUFLSTtRQUhPLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFlLEVBQUUsQ0FBQztJQUVuQixDQUFDOzs7O0lBRWpCLHFDQUFVOzs7SUFBVjtRQUNJLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx5Q0FBYzs7O0lBQWQ7O1lBQ1EsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ2xDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMzQixXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTTtZQUN6QyxPQUFPO2dCQUNILFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2dCQUM3QixTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUMzQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3ZCLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDckIsYUFBYSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2dCQUNqQyxjQUFjLEVBQUUsTUFBTSxDQUFDLFlBQVk7YUFDdEMsQ0FBQTtRQUNMLENBQUMsRUFBQyxDQUFBO1FBQ0YsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDMUIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNJLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7OztJQS9CRywrQkFBd0I7O0lBQ3hCLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSAnLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4uL0FQSVJlcXVlc3QnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSAnLi4vTW9ja0FQSS5pbnRlcmZhY2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBQdXNoQWN0aW9uTG9nQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElSZXN0ZnVsQVBJIHtcblxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBhY3Rpb25MaXN0OiBBcnJheTxhbnk+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdQdXNoQWN0aW9uTG9nJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3REYXRhLmJvZHkgPSB0aGlzLmFjdGlvbkxpc3QubWFwKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiQWN0aW9uSURcIjogYWN0aW9uLkFjdGlvbklELFxuICAgICAgICAgICAgICAgIFwiRnVuY3Rpb25JRFwiOiBhY3Rpb24uRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgXCJNZXNzYWdlXCI6IGFjdGlvbi5NZXNzYWdlLFxuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBuZXcgRGF0ZShhY3Rpb24uVGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBcIkFjdGlvblwiOiBhY3Rpb24uQWN0aW9uLFxuICAgICAgICAgICAgICAgIFwiVmFsaWRcIjogYWN0aW9uLlZhbGlkLFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlTW9kZWxcIjogYWN0aW9uLkRldmljZU1vZGVsLFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlU3lzdGVtXCI6IGFjdGlvbi5EZXZpY2VTeXN0ZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVxdWVzdERhdGEudHlwZSA9IFwiUE9TVFwiO1xuICAgICAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKSB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9sb2dvdXQuanNvbic7XG4gICAgfVxufSJdfQ==