/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { Bean, Required } from "@allianzSND/core";
let TeamDataState = class TeamDataState {
    constructor() {
        this._dataYear = -1;
        this._timeBase = PersonalDataTimeBase.Unknow;
        this._teamValueType = ProgressDataTeamValueType.FYFC;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    set DataYear(year) {
        this._dataYear = year;
    }
    // time base
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._timeBase;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._timeBase = time;
    }
    //team value type
    /**
     * @return {?}
     */
    get TeamValueType() {
        return this._teamValueType;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set TeamValueType(type) {
        this._teamValueType = type;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], TeamDataState.prototype, "_dataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], TeamDataState.prototype, "_timeBase", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], TeamDataState.prototype, "_teamValueType", void 0);
TeamDataState = tslib_1.__decorate([
    Bean('TeamDataState'),
    tslib_1.__metadata("design:paramtypes", [])
], TeamDataState);
export { TeamDataState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TeamDataState.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    TeamDataState.prototype._timeBase;
    /**
     * @type {?}
     * @private
     */
    TeamDataState.prototype._teamValueType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhbURhdGFTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvVGVhbURhdGFTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsYUFBYTtJQVd0QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUEwQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7OztJQUdELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELElBQUksYUFBYSxDQUFDLElBQThCO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7Q0FFSixDQUFBO0FBeENHO0lBREMsUUFBUTs7Z0RBQ2lCO0FBRzFCO0lBREMsUUFBUTs7Z0RBQytCO0FBR3hDO0lBREMsUUFBUTs7cURBQ3lDO0FBVHpDLGFBQWE7SUFEekIsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7R0FDVCxhQUFhLENBMkN6QjtTQTNDWSxhQUFhOzs7Ozs7SUFFdEIsa0NBQzBCOzs7OztJQUUxQixrQ0FDd0M7Ozs7O0lBRXhDLHVDQUNrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNvbmFsRGF0YVRpbWVCYXNlIH0gZnJvbSBcIi4vRW51bS9QZXJzb25hbERhdGFUaW1lQmFzZVwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSB9IGZyb20gXCIuL0VudW0vUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignVGVhbURhdGFTdGF0ZScpXG5leHBvcnQgY2xhc3MgVGVhbURhdGFTdGF0ZSB7ICBcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF90aW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2U7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF90ZWFtVmFsdWVUeXBlOiBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFZZWFyID0gLTE7XG4gICAgICAgIHRoaXMuX3RpbWVCYXNlID0gUGVyc29uYWxEYXRhVGltZUJhc2UuVW5rbm93O1xuICAgICAgICB0aGlzLl90ZWFtVmFsdWVUeXBlID0gUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZS5GWUZDO1xuICAgIH1cblxuICAgIGdldCBEYXRhWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFZZWFyO1xuICAgIH1cblxuICAgIHNldCBEYXRhWWVhcih5ZWFyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSAgeWVhcjtcbiAgICB9XG5cbiAgICAvLyB0aW1lIGJhc2VcbiAgICBnZXQgVGltZUJhc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lQmFzZTtcbiAgICB9XG5cbiAgICBzZXQgVGltZUJhc2UodGltZTogUGVyc29uYWxEYXRhVGltZUJhc2UpIHtcbiAgICAgICAgdGhpcy5fdGltZUJhc2UgPSB0aW1lO1xuICAgIH1cblxuICAgIC8vdGVhbSB2YWx1ZSB0eXBlXG4gICAgZ2V0IFRlYW1WYWx1ZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZWFtVmFsdWVUeXBlO1xuICAgIH1cblxuICAgIHNldCBUZWFtVmFsdWVUeXBlKHR5cGU6UHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSkge1xuICAgICAgICB0aGlzLl90ZWFtVmFsdWVUeXBlID0gdHlwZTtcbiAgICB9XG5cbn0iXX0=