/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { Bean, Required } from "@allianzSND/core";
var TeamDataState = /** @class */ (function () {
    function TeamDataState() {
        this._dataYear = -1;
        this._timeBase = PersonalDataTimeBase.Unknow;
        this._teamValueType = ProgressDataTeamValueType.FYFC;
    }
    Object.defineProperty(TeamDataState.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataYear;
        },
        set: /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this._dataYear = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamDataState.prototype, "TimeBase", {
        // time base
        get: 
        // time base
        /**
         * @return {?}
         */
        function () {
            return this._timeBase;
        },
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            this._timeBase = time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamDataState.prototype, "TeamValueType", {
        //team value type
        get: 
        //team value type
        /**
         * @return {?}
         */
        function () {
            return this._teamValueType;
        },
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._teamValueType = type;
        },
        enumerable: true,
        configurable: true
    });
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
    return TeamDataState;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhbURhdGFTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvVGVhbURhdGFTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBYzlDO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDO0lBRUQsc0JBQUksbUNBQVE7Ozs7UUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQWEsSUFBWTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLG1DQUFRO1FBRFosWUFBWTs7Ozs7O1FBQ1o7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFFRCxVQUFhLElBQTBCO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBT0Qsc0JBQUksd0NBQWE7UUFEakIsaUJBQWlCOzs7Ozs7UUFDakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFFRCxVQUFrQixJQUE4QjtZQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQWxDRDtRQURDLFFBQVE7O29EQUNpQjtJQUcxQjtRQURDLFFBQVE7O29EQUMrQjtJQUd4QztRQURDLFFBQVE7O3lEQUN5QztJQVR6QyxhQUFhO1FBRHpCLElBQUksQ0FBQyxlQUFlLENBQUM7O09BQ1QsYUFBYSxDQTJDekI7SUFBRCxvQkFBQztDQUFBLElBQUE7U0EzQ1ksYUFBYTs7Ozs7O0lBRXRCLGtDQUMwQjs7Ozs7SUFFMUIsa0NBQ3dDOzs7OztJQUV4Qyx1Q0FDa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gXCIuL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2VcIjtcbmltcG9ydCB7IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUgfSBmcm9tIFwiLi9FbnVtL1Byb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGVcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1RlYW1EYXRhU3RhdGUnKVxuZXhwb3J0IGNsYXNzIFRlYW1EYXRhU3RhdGUgeyAgXG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9kYXRhWWVhcjogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfdGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfdGVhbVZhbHVlVHlwZTogUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhWWVhciA9IC0xO1xuICAgICAgICB0aGlzLl90aW1lQmFzZSA9IFBlcnNvbmFsRGF0YVRpbWVCYXNlLlVua25vdztcbiAgICAgICAgdGhpcy5fdGVhbVZhbHVlVHlwZSA9IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUuRllGQztcbiAgICB9XG5cbiAgICBnZXQgRGF0YVllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhWWVhcjtcbiAgICB9XG5cbiAgICBzZXQgRGF0YVllYXIoeWVhcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFZZWFyID0gIHllYXI7XG4gICAgfVxuXG4gICAgLy8gdGltZSBiYXNlXG4gICAgZ2V0IFRpbWVCYXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZUJhc2U7XG4gICAgfVxuXG4gICAgc2V0IFRpbWVCYXNlKHRpbWU6IFBlcnNvbmFsRGF0YVRpbWVCYXNlKSB7XG4gICAgICAgIHRoaXMuX3RpbWVCYXNlID0gdGltZTtcbiAgICB9XG5cbiAgICAvL3RlYW0gdmFsdWUgdHlwZVxuICAgIGdldCBUZWFtVmFsdWVUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVhbVZhbHVlVHlwZTtcbiAgICB9XG5cbiAgICBzZXQgVGVhbVZhbHVlVHlwZSh0eXBlOlByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUpIHtcbiAgICAgICAgdGhpcy5fdGVhbVZhbHVlVHlwZSA9IHR5cGU7XG4gICAgfVxuXG59Il19