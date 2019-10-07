/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
var logErrorAPI = /** @class */ (function () {
    function logErrorAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.stack = [];
        this.message = '';
        this.time = new Date();
        this.DeviceModel = '';
        this.DeviceSystem = '';
    }
    /**
     * @return {?}
     */
    logErrorAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'LogError';
    };
    /**
     * @return {?}
     */
    logErrorAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    logErrorAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var errorLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Error_Log');
        /** @type {?} */
        var dao = this.daoFactory.getDao('Profile');
        if (errorLogObj) {
            errorLogObj.setValue("ErrorID", uuid());
            errorLogObj.setValue("Message", this.message);
            errorLogObj.setValue("Time", this.time.getTime());
            errorLogObj.setValue("Stack", JSON.stringify(this.stack));
            errorLogObj.setValue("DeviceModel", this.DeviceModel);
            errorLogObj.setValue("DeviceSystem", this.DeviceSystem);
            errorLogObj.setValue("IsSend", 'N');
            return dao.insertByTable(errorLogObj);
        }
        else
            return of(false);
    };
    return logErrorAPI;
}());
export { logErrorAPI };
if (false) {
    /** @type {?} */
    logErrorAPI.prototype.stack;
    /** @type {?} */
    logErrorAPI.prototype.message;
    /** @type {?} */
    logErrorAPI.prototype.time;
    /** @type {?} */
    logErrorAPI.prototype.DeviceModel;
    /** @type {?} */
    logErrorAPI.prototype.DeviceSystem;
    /**
     * @type {?}
     * @private
     */
    logErrorAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nRXJyb3JBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9sb2dFcnJvckFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdsQztJQVFJLHFCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTm5DLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBVyxFQUFFLENBQUM7SUFJakMsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUNJLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLHFDQUFxQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7O1lBQ1EsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQzs7WUFDdkUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLFdBQVcsRUFBRTtZQUNiLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDeEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNsRCxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFELFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RCxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEMsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDOztZQUNJLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7Ozs7SUFqQ0csNEJBQWlDOztJQUNqQyw4QkFBNEI7O0lBQzVCLDJCQUErQjs7SUFDL0Isa0NBQWdDOztJQUNoQyxtQ0FBaUM7Ozs7O0lBRXJCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuXG5leHBvcnQgY2xhc3MgbG9nRXJyb3JBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwdWJsaWMgc3RhY2s6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIHRpbWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHB1YmxpYyBEZXZpY2VNb2RlbDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIERldmljZVN5c3RlbTogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTG9nRXJyb3InO1xuICAgIH1cblxuICAgIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9hZGRDYWxlbmRhckV2ZW50Lmpzb24nO1xuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKSB7XG4gICAgICAgIGxldCBlcnJvckxvZ09iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsICdUV19MSF9TRF9FcnJvcl9Mb2cnKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREYW8oJ1Byb2ZpbGUnKTtcbiAgICAgICAgaWYgKGVycm9yTG9nT2JqKSB7XG4gICAgICAgICAgICBlcnJvckxvZ09iai5zZXRWYWx1ZShcIkVycm9ySURcIiwgdXVpZCgpKTtcbiAgICAgICAgICAgIGVycm9yTG9nT2JqLnNldFZhbHVlKFwiTWVzc2FnZVwiLCB0aGlzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgZXJyb3JMb2dPYmouc2V0VmFsdWUoXCJUaW1lXCIsIHRoaXMudGltZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgZXJyb3JMb2dPYmouc2V0VmFsdWUoXCJTdGFja1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YWNrKSk7XG4gICAgICAgICAgICBlcnJvckxvZ09iai5zZXRWYWx1ZShcIkRldmljZU1vZGVsXCIsIHRoaXMuRGV2aWNlTW9kZWwpO1xuICAgICAgICAgICAgZXJyb3JMb2dPYmouc2V0VmFsdWUoXCJEZXZpY2VTeXN0ZW1cIiwgdGhpcy5EZXZpY2VTeXN0ZW0pO1xuICAgICAgICAgICAgZXJyb3JMb2dPYmouc2V0VmFsdWUoXCJJc1NlbmRcIiwgJ04nKTtcbiAgICAgICAgICAgIHJldHVybiBkYW8uaW5zZXJ0QnlUYWJsZShlcnJvckxvZ09iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cbn0iXX0=