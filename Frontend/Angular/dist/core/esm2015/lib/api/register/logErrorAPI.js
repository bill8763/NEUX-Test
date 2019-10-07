/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from "rxjs";
import { v4 as uuid } from 'uuid';
export class logErrorAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
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
    getAPIName() {
        return 'LogError';
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
        let errorLogObj = this.daoFactory.getTable('Profile', 'TW_LH_SD_Error_Log');
        /** @type {?} */
        let dao = this.daoFactory.getDao('Profile');
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nRXJyb3JBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9sb2dFcnJvckFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdsQyxNQUFNOzs7O0lBUUYsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU5uQyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBSWpDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLHFDQUFxQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxVQUFVOztZQUNGLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUM7O1lBQ3ZFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxXQUFXLEVBQUU7WUFDYixXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRCxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6Qzs7WUFDSSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0o7OztJQWpDRyw0QkFBaUM7O0lBQ2pDLDhCQUE0Qjs7SUFDNUIsMkJBQStCOztJQUMvQixrQ0FBZ0M7O0lBQ2hDLG1DQUFpQzs7Ozs7SUFFckIsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSBcIi4uL1NRTGl0ZUFQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIi4uL01vY2tBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBsb2dFcnJvckFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHB1YmxpYyBzdGFjazogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcHVibGljIERldmljZU1vZGVsOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgRGV2aWNlU3lzdGVtOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdMb2dFcnJvcic7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2FkZENhbGVuZGFyRXZlbnQuanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpIHtcbiAgICAgICAgbGV0IGVycm9yTG9nT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldFRhYmxlKCdQcm9maWxlJywgJ1RXX0xIX1NEX0Vycm9yX0xvZycpO1xuICAgICAgICBsZXQgZGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERhbygnUHJvZmlsZScpO1xuICAgICAgICBpZiAoZXJyb3JMb2dPYmopIHtcbiAgICAgICAgICAgIGVycm9yTG9nT2JqLnNldFZhbHVlKFwiRXJyb3JJRFwiLCB1dWlkKCkpO1xuICAgICAgICAgICAgZXJyb3JMb2dPYmouc2V0VmFsdWUoXCJNZXNzYWdlXCIsIHRoaXMubWVzc2FnZSk7XG4gICAgICAgICAgICBlcnJvckxvZ09iai5zZXRWYWx1ZShcIlRpbWVcIiwgdGhpcy50aW1lLmdldFRpbWUoKSk7XG4gICAgICAgICAgICBlcnJvckxvZ09iai5zZXRWYWx1ZShcIlN0YWNrXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhY2spKTtcbiAgICAgICAgICAgIGVycm9yTG9nT2JqLnNldFZhbHVlKFwiRGV2aWNlTW9kZWxcIiwgdGhpcy5EZXZpY2VNb2RlbCk7XG4gICAgICAgICAgICBlcnJvckxvZ09iai5zZXRWYWx1ZShcIkRldmljZVN5c3RlbVwiLCB0aGlzLkRldmljZVN5c3RlbSk7XG4gICAgICAgICAgICBlcnJvckxvZ09iai5zZXRWYWx1ZShcIklzU2VuZFwiLCAnTicpO1xuICAgICAgICAgICAgcmV0dXJuIGRhby5pbnNlcnRCeVRhYmxlKGVycm9yTG9nT2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxufSJdfQ==