/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APIRequest } from '../APIRequest';
export class PushErrorLogAPI {
    constructor() {
        this.url = '';
        this.errorList = [];
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'PushErrorLog';
    }
    /**
     * @return {?}
     */
    getRequestData() {
        /** @type {?} */
        let requestData = new APIRequest();
        requestData.url = this.url;
        requestData.body = this.errorList.map((/**
         * @param {?} err
         * @return {?}
         */
        err => {
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
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/logout.json';
    }
}
if (false) {
    /** @type {?} */
    PushErrorLogAPI.prototype.url;
    /** @type {?} */
    PushErrorLogAPI.prototype.errorList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaEVycm9yTG9nQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvcHVzaEVycm9yTG9nQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE1BQU07SUFLRjtRQUhPLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFlLEVBQUUsQ0FBQztJQUVsQixDQUFDOzs7O0lBRWpCLFVBQVU7UUFDTixPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsY0FBYzs7WUFDTixXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDbEMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTztnQkFDSCxTQUFTLEVBQUUsR0FBRyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDbEIsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVztnQkFDOUIsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQ25DLENBQUE7UUFDTCxDQUFDLEVBQUMsQ0FBQTtRQUNGLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7OztJQTVCRyw4QkFBd0I7O0lBQ3hCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElSZXN0ZnVsQVBJIH0gZnJvbSAnLi4vUmVzdGZ1bEFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4uL0FQSVJlcXVlc3QnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSAnLi4vTW9ja0FQSS5pbnRlcmZhY2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBQdXNoRXJyb3JMb2dBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVJlc3RmdWxBUEkge1xuXG4gICAgcHVibGljIHVybDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGVycm9yTGlzdDogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnUHVzaEVycm9yTG9nJztcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gbmV3IEFQSVJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdERhdGEudXJsID0gdGhpcy51cmw7XG4gICAgICAgIHJlcXVlc3REYXRhLmJvZHkgPSB0aGlzLmVycm9yTGlzdC5tYXAoZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJNZXNzYWdlXCI6IGVyci5NZXNzYWdlLFxuICAgICAgICAgICAgICAgIFwiU3RhY2tcIjogZXJyLlN0YWNrLFxuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBuZXcgRGF0ZShlcnIuVGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBcIkRldmljZU1vZGVsXCI6IGVyci5EZXZpY2VNb2RlbCxcbiAgICAgICAgICAgICAgICBcIkRldmljZVN5c3RlbVwiOiBlcnIuRGV2aWNlU3lzdGVtXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlcXVlc3REYXRhLnR5cGUgPSBcIlBPU1RcIjtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3REYXRhO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCkge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svbG9nb3V0Lmpzb24nO1xuICAgIH1cbn0iXX0=