/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
export class GetDeviceInfoAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this.dataType = '';
        this.token = '';
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    setDataType(dataType) {
        this.dataType = dataType;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getDeviceInfo';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        if (this.dataType === 'StepupLevel') {
            return './assets/mock/getDeviceInfoForAgentInfo.json';
        }
        else {
            return './assets/mock/getDeviceInfo.json';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        // return sha-256: "test||test"
        /** @type {?} */
        let infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        let dao = this.daoFactory.getDao("Profile");
        if (this.dataType != '') {
            infoObj.addRestriction(new EqualRestriction('Category', [this.dataType]));
        }
        return dao.queryByTable(infoObj);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetDeviceInfoAPI.prototype.dataType;
    /** @type {?} */
    GetDeviceInfoAPI.prototype.token;
    /**
     * @type {?}
     * @private
     */
    GetDeviceInfoAPI.prototype.daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0RGV2aWNlSW5mb0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL0dldERldmljZUluZm9BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXJGLE1BQU07Ozs7SUFHRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSWxDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFLZixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBUGxCLENBQUM7Ozs7O0lBSUQsV0FBVyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFHRCxVQUFVO1FBQ04sT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssYUFBYSxFQUFFO1lBQ2pDLE9BQU8sOENBQThDLENBQUM7U0FDekQ7YUFDSTtZQUNELE9BQU8sa0NBQWtDLENBQUE7U0FDNUM7SUFDTCxDQUFDOzs7O0lBRUQsVUFBVTs7O1lBRUYsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQzs7WUFDcEUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDSjs7Ozs7O0lBNUJHLG9DQUFzQjs7SUFLdEIsaUNBQWtCOzs7OztJQVROLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gXCIuLi9BUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTW9ja0FQSSB9IGZyb20gXCIuLi9Nb2NrQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCIuLi9TUUxpdGVBUEkuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvRGFvRmFjdG9yeVwiO1xuaW1wb3J0IHsgU1FMaXRlUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9TUUxpdGVSZXNwb25zZVwiO1xuaW1wb3J0IHsgRXF1YWxSZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9FcXVhbFJlc3RyaWN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBHZXREZXZpY2VJbmZvQVBJIGltcGxlbWVudHMgSUFQSSwgSVNRTGl0ZUFQSSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkYXRhVHlwZSA9ICcnO1xuXG4gICAgc2V0RGF0YVR5cGUoZGF0YVR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRhdGFUeXBlID0gZGF0YVR5cGU7XG4gICAgfVxuICAgIHB1YmxpYyB0b2tlbiA9ICcnO1xuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldERldmljZUluZm8nO1xuICAgIH1cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5kYXRhVHlwZSA9PT0gJ1N0ZXB1cExldmVsJykge1xuICAgICAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldERldmljZUluZm9Gb3JBZ2VudEluZm8uanNvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0RGV2aWNlSW5mby5qc29uJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvLyByZXR1cm4gc2hhLTI1NjogXCJ0ZXN0fHx0ZXN0XCJcbiAgICAgICAgbGV0IGluZm9PYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRGV2aWNlSW5mb1wiKTtcbiAgICAgICAgbGV0IGRhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREYW8oXCJQcm9maWxlXCIpO1xuICAgICAgICBpZiAodGhpcy5kYXRhVHlwZSAhPSAnJykge1xuICAgICAgICAgICAgaW5mb09iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2F0ZWdvcnknLCBbdGhpcy5kYXRhVHlwZV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShpbmZvT2JqKTtcbiAgICB9XG59XG4iXX0=