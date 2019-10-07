/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
var logActionAPI = /** @class */ (function () {
    function logActionAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.action = '';
        this.Function = '';
        this.message = '';
        this.time = new Date();
        this.valid = true;
        this.DeviceModel = '';
        this.DeviceSystem = '';
    }
    /**
     * @return {?}
     */
    logActionAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'LogAction';
    };
    /**
     * @return {?}
     */
    logActionAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/addCalendarEvent.json';
    };
    /**
     * @return {?}
     */
    logActionAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var actionLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Action_Log');
        /** @type {?} */
        var dao = this.daoFactory.getDao('Profile');
        if (actionLogObj) {
            actionLogObj.setValue("ActionID", uuid());
            actionLogObj.setValue("Function", this.Function);
            actionLogObj.setValue("Message", this.message);
            actionLogObj.setValue("Time", this.time.getTime());
            actionLogObj.setValue("Action", this.action);
            actionLogObj.setValue("Valid", this.valid ? 'Y' : 'N');
            actionLogObj.setValue("IsSend", 'N');
            actionLogObj.setValue("DeviceModel", this.DeviceModel);
            actionLogObj.setValue("DeviceSystem", this.DeviceSystem);
            return dao.insertByTable(actionLogObj);
        }
        else
            return of(false);
    };
    return logActionAPI;
}());
export { logActionAPI };
if (false) {
    /** @type {?} */
    logActionAPI.prototype.action;
    /** @type {?} */
    logActionAPI.prototype.Function;
    /** @type {?} */
    logActionAPI.prototype.message;
    /** @type {?} */
    logActionAPI.prototype.time;
    /** @type {?} */
    logActionAPI.prototype.valid;
    /** @type {?} */
    logActionAPI.prototype.DeviceModel;
    /** @type {?} */
    logActionAPI.prototype.DeviceSystem;
    /**
     * @type {?}
     * @private
     */
    logActionAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nQWN0aW9uQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvbG9nQWN0aW9uQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBVUksc0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSbkMsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQUlqQyxDQUFDOzs7O0lBRUQsaUNBQVU7OztJQUFWO1FBQ0ksT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNJLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGlDQUFVOzs7SUFBVjs7WUFDUSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDOztZQUN6RSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksWUFBWSxFQUFFO1lBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNuRCxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pELE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxQzs7WUFDSSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDOzs7O0lBckNHLDhCQUEyQjs7SUFDM0IsZ0NBQTZCOztJQUM3QiwrQkFBNEI7O0lBQzVCLDRCQUErQjs7SUFDL0IsNkJBQTZCOztJQUM3QixtQ0FBZ0M7O0lBQ2hDLG9DQUFpQzs7Ozs7SUFFckIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBsb2dBY3Rpb25BUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwdWJsaWMgYWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgRnVuY3Rpb246IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcHVibGljIHZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgRGV2aWNlTW9kZWw6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBEZXZpY2VTeXN0ZW06IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG5cbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0xvZ0FjdGlvbic7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2FkZENhbGVuZGFyRXZlbnQuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpIHtcbiAgICAgICAgbGV0IGFjdGlvbkxvZ09iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXRUYWJsZSgnUHJvZmlsZScsICdUV19MSF9TRF9BY3Rpb25fTG9nJyk7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGFvKCdQcm9maWxlJyk7XG4gICAgICAgIGlmIChhY3Rpb25Mb2dPYmopIHtcbiAgICAgICAgICAgIGFjdGlvbkxvZ09iai5zZXRWYWx1ZShcIkFjdGlvbklEXCIsIHV1aWQoKSk7XG4gICAgICAgICAgICBhY3Rpb25Mb2dPYmouc2V0VmFsdWUoXCJGdW5jdGlvblwiLCB0aGlzLkZ1bmN0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbkxvZ09iai5zZXRWYWx1ZShcIk1lc3NhZ2VcIiwgdGhpcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIGFjdGlvbkxvZ09iai5zZXRWYWx1ZShcIlRpbWVcIiwgdGhpcy50aW1lLmdldFRpbWUoKSk7XG4gICAgICAgICAgICBhY3Rpb25Mb2dPYmouc2V0VmFsdWUoXCJBY3Rpb25cIiwgdGhpcy5hY3Rpb24pO1xuICAgICAgICAgICAgYWN0aW9uTG9nT2JqLnNldFZhbHVlKFwiVmFsaWRcIiwgdGhpcy52YWxpZCA/ICdZJyA6ICdOJyk7XG4gICAgICAgICAgICBhY3Rpb25Mb2dPYmouc2V0VmFsdWUoXCJJc1NlbmRcIiwgJ04nKTtcbiAgICAgICAgICAgIGFjdGlvbkxvZ09iai5zZXRWYWx1ZShcIkRldmljZU1vZGVsXCIsIHRoaXMuRGV2aWNlTW9kZWwpO1xuICAgICAgICAgICAgYWN0aW9uTG9nT2JqLnNldFZhbHVlKFwiRGV2aWNlU3lzdGVtXCIsIHRoaXMuRGV2aWNlU3lzdGVtKTtcbiAgICAgICAgICAgIHJldHVybiBkYW8uaW5zZXJ0QnlUYWJsZShhY3Rpb25Mb2dPYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG59Il19