/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
export class logActionAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
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
    getAPIName() {
        return 'LogAction';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/addCalendarEvent.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        /** @type {?} */
        let actionLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Action_Log');
        /** @type {?} */
        let dao = this.daoFactory.getDao('Profile');
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nQWN0aW9uQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvbG9nQWN0aW9uQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDLE1BQU07Ozs7SUFVRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBUm5DLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBVyxFQUFFLENBQUM7SUFJakMsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFVBQVU7O1lBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQzs7WUFDekUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLFlBQVksRUFBRTtZQUNkLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbkQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZELFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7O1lBQ0ksT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKOzs7SUFyQ0csOEJBQTJCOztJQUMzQixnQ0FBNkI7O0lBQzdCLCtCQUE0Qjs7SUFDNUIsNEJBQStCOztJQUMvQiw2QkFBNkI7O0lBQzdCLG1DQUFnQzs7SUFDaEMsb0NBQWlDOzs7OztJQUVyQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIi4uL0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tIFwiLi4vU1FMaXRlQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiLi4vTW9ja0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cblxuZXhwb3J0IGNsYXNzIGxvZ0FjdGlvbkFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHB1YmxpYyBhY3Rpb246IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBGdW5jdGlvbjogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBwdWJsaWMgdmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBEZXZpY2VNb2RlbDogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIERldmljZVN5c3RlbTogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTG9nQWN0aW9uJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svYWRkQ2FsZW5kYXJFdmVudC5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCkge1xuICAgICAgICBsZXQgYWN0aW9uTG9nT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldFRhYmxlKCdQcm9maWxlJywgJ1RXX0xIX1NEX0FjdGlvbl9Mb2cnKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREYW8oJ1Byb2ZpbGUnKTtcbiAgICAgICAgaWYgKGFjdGlvbkxvZ09iaikge1xuICAgICAgICAgICAgYWN0aW9uTG9nT2JqLnNldFZhbHVlKFwiQWN0aW9uSURcIiwgdXVpZCgpKTtcbiAgICAgICAgICAgIGFjdGlvbkxvZ09iai5zZXRWYWx1ZShcIkZ1bmN0aW9uXCIsIHRoaXMuRnVuY3Rpb24pO1xuICAgICAgICAgICAgYWN0aW9uTG9nT2JqLnNldFZhbHVlKFwiTWVzc2FnZVwiLCB0aGlzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgYWN0aW9uTG9nT2JqLnNldFZhbHVlKFwiVGltZVwiLCB0aGlzLnRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGFjdGlvbkxvZ09iai5zZXRWYWx1ZShcIkFjdGlvblwiLCB0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICBhY3Rpb25Mb2dPYmouc2V0VmFsdWUoXCJWYWxpZFwiLCB0aGlzLnZhbGlkID8gJ1knIDogJ04nKTtcbiAgICAgICAgICAgIGFjdGlvbkxvZ09iai5zZXRWYWx1ZShcIklzU2VuZFwiLCAnTicpO1xuICAgICAgICAgICAgYWN0aW9uTG9nT2JqLnNldFZhbHVlKFwiRGV2aWNlTW9kZWxcIiwgdGhpcy5EZXZpY2VNb2RlbCk7XG4gICAgICAgICAgICBhY3Rpb25Mb2dPYmouc2V0VmFsdWUoXCJEZXZpY2VTeXN0ZW1cIiwgdGhpcy5EZXZpY2VTeXN0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIGRhby5pbnNlcnRCeVRhYmxlKGFjdGlvbkxvZ09iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cbn0iXX0=