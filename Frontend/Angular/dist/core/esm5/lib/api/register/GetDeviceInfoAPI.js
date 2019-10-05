/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualRestriction } from "../../device/sqlite/restrictions/EqualRestriction";
var GetDeviceInfoAPI = /** @class */ (function () {
    function GetDeviceInfoAPI(daoFactory) {
        this.daoFactory = daoFactory;
        this.dataType = '';
        this.token = '';
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    GetDeviceInfoAPI.prototype.setDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        this.dataType = dataType;
    };
    /**
     * @return {?}
     */
    GetDeviceInfoAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getDeviceInfo';
    };
    /**
     * @return {?}
     */
    GetDeviceInfoAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        if (this.dataType === 'StepupLevel') {
            return './assets/mock/getDeviceInfoForAgentInfo.json';
        }
        else {
            return './assets/mock/getDeviceInfo.json';
        }
    };
    /**
     * @return {?}
     */
    GetDeviceInfoAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        // return sha-256: "test||test"
        /** @type {?} */
        var infoObj = this.daoFactory.getTable("Profile", "TW_LH_SD_DeviceInfo");
        /** @type {?} */
        var dao = this.daoFactory.getDao("Profile");
        if (this.dataType != '') {
            infoObj.addRestriction(new EqualRestriction('Category', [this.dataType]));
        }
        return dao.queryByTable(infoObj);
    };
    return GetDeviceInfoAPI;
}());
export { GetDeviceInfoAPI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0RGV2aWNlSW5mb0FQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL3JlZ2lzdGVyL0dldERldmljZUluZm9BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRXJGO0lBR0ksMEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFJbEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUtmLFVBQUssR0FBRyxFQUFFLENBQUM7SUFQbEIsQ0FBQzs7Ozs7SUFJRCxzQ0FBVzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQzs7OztJQUdELHFDQUFVOzs7SUFBVjtRQUNJLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxzQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssYUFBYSxFQUFFO1lBQ2pDLE9BQU8sOENBQThDLENBQUM7U0FDekQ7YUFDSTtZQUNELE9BQU8sa0NBQWtDLENBQUE7U0FDNUM7SUFDTCxDQUFDOzs7O0lBRUQscUNBQVU7OztJQUFWOzs7WUFFUSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDOztZQUNwRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7WUFDckIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0U7UUFDRCxPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQzs7Ozs7OztJQTVCRyxvQ0FBc0I7O0lBS3RCLGlDQUFrQjs7Ozs7SUFUTixzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IElBUEkgfSBmcm9tIFwiLi4vQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiLi4vTW9ja0FQSS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tIFwiLi4vU1FMaXRlQVBJLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IFNRTGl0ZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMaXRlUmVzcG9uc2VcIjtcbmltcG9ydCB7IEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvRXF1YWxSZXN0cmljdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgR2V0RGV2aWNlSW5mb0FQSSBpbXBsZW1lbnRzIElBUEksIElTUUxpdGVBUEkge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhb0ZhY3Rvcnk6IERhb0ZhY3RvcnkpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZGF0YVR5cGUgPSAnJztcblxuICAgIHNldERhdGFUeXBlKGRhdGFUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuICAgIH1cbiAgICBwdWJsaWMgdG9rZW4gPSAnJztcblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXREZXZpY2VJbmZvJztcbiAgICB9XG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGUgPT09ICdTdGVwdXBMZXZlbCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnLi9hc3NldHMvbW9jay9nZXREZXZpY2VJbmZvRm9yQWdlbnRJbmZvLmpzb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldERldmljZUluZm8uanNvbidcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLy8gcmV0dXJuIHNoYS0yNTY6IFwidGVzdHx8dGVzdFwiXG4gICAgICAgIGxldCBpbmZvT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldFRhYmxlKFwiUHJvZmlsZVwiLCBcIlRXX0xIX1NEX0RldmljZUluZm9cIik7XG4gICAgICAgIGxldCBkYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGFvKFwiUHJvZmlsZVwiKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGUgIT0gJycpIHtcbiAgICAgICAgICAgIGluZm9PYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0NhdGVnb3J5JywgW3RoaXMuZGF0YVR5cGVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoaW5mb09iaik7XG4gICAgfVxufVxuIl19