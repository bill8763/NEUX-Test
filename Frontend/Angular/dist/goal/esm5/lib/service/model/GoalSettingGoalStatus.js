/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { APPROVESTATUS } from "./GoalSettingCommon";
import { Bean, Required } from "@allianzSND/core";
var GoalSettingGoalStatus = /** @class */ (function () {
    function GoalSettingGoalStatus() {
    }
    /**
     * @return {?}
     */
    GoalSettingGoalStatus.prototype.getExtension = /**
     * @return {?}
     */
    function () {
        return this._Extension;
    };
    /**
     * @param {?} extension
     * @return {?}
     */
    GoalSettingGoalStatus.prototype.setExtension = /**
     * @param {?} extension
     * @return {?}
     */
    function (extension) {
        this._Extension = extension;
    };
    Object.defineProperty(GoalSettingGoalStatus.prototype, "PersonnelGoalApplicableYM", {
        get: /**
         * @return {?}
         */
        function () {
            return this._PersonnelGoalApplicableYM;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._PersonnelGoalApplicableYM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "TeamGoalApplicableYM", {
        get: /**
         * @return {?}
         */
        function () {
            return this._TeamGoalApplicableYM;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._TeamGoalApplicableYM = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "GoalSetMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._GoalSetMonth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._GoalSetMonth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "ApproveStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ApproveStatus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ApproveStatus = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "IsFirstTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._IsFirstTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._IsFirstTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "IsNeedSetting", {
        get: /**
         * @return {?}
         */
        function () {
            return this._IsNeedSetting;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._IsNeedSetting = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "RemainingDays", {
        get: /**
         * @return {?}
         */
        function () {
            return this._RemainingDays;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._RemainingDays = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._DataYear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._DataYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "IsCurrent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._IsCurrent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._IsCurrent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingGoalStatus.prototype, "SupervisorComment", {
        get: /**
         * @return {?}
         */
        function () {
            return this._SupervisorComment;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._SupervisorComment = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingGoalStatus.prototype, "_DataYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingGoalStatus.prototype, "_PersonnelGoalApplicableYM", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingGoalStatus.prototype, "_TeamGoalApplicableYM", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], GoalSettingGoalStatus.prototype, "_GoalSetMonth", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingGoalStatus.prototype, "_ApproveStatus", void 0);
    GoalSettingGoalStatus = tslib_1.__decorate([
        Bean('GoalSettingGoalStatus'),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalSettingGoalStatus);
    return GoalSettingGoalStatus;
}());
export { GoalSettingGoalStatus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._IsCurrent;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._PersonnelGoalApplicableYM;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._TeamGoalApplicableYM;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._GoalSetMonth;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._ApproveStatus;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._IsFirstTime;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._IsNeedSetting;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._RemainingDays;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._SupervisorComment;
    /**
     * @type {?}
     * @private
     */
    GoalSettingGoalStatus.prototype._Extension;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdHb2FsU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL0dvYWxTZXR0aW5nR29hbFN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFnQzdEO0lBRUEsQ0FBQzs7OztJQUVNLDRDQUFZOzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDTSw0Q0FBWTs7OztJQUFuQixVQUFvQixTQUFTO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBVyw0REFBeUI7Ozs7UUFBcEM7WUFDSSxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztRQUMzQyxDQUFDOzs7OztRQXFDRCxVQUFxQyxLQUFhO1lBQzlDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7UUFDNUMsQ0FBQzs7O09BdkNBO0lBQ0Qsc0JBQVcsdURBQW9COzs7O1FBQS9CO1lBQ0ksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7Ozs7UUFxQ0QsVUFBZ0MsS0FBYTtZQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7OztPQXZDQTtJQUNELHNCQUFXLCtDQUFZOzs7O1FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBcUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BdkNBO0lBQ0Qsc0JBQVcsZ0RBQWE7Ozs7UUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFxQ0QsVUFBeUIsS0FBb0I7WUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BdkNBO0lBQ0Qsc0JBQVcsOENBQVc7Ozs7UUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7Ozs7UUFxQ0QsVUFBdUIsS0FBYztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0F2Q0E7SUFDRCxzQkFBVyxnREFBYTs7OztRQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7OztRQXFDRCxVQUF5QixLQUFjO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQXZDQTtJQUNELHNCQUFXLGdEQUFhOzs7O1FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7Ozs7O1FBcUNELFVBQXlCLEtBQWE7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BdkNBO0lBQ0Qsc0JBQVcsMkNBQVE7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFhRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQWZBO0lBQ0Qsc0JBQVcsNENBQVM7Ozs7UUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFPRCxVQUFxQixLQUFhO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQVRBO0lBQ0Qsc0JBQVcsb0RBQWlCOzs7O1FBQTVCO1lBQ0ksT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbkMsQ0FBQzs7Ozs7UUErQkQsVUFBNkIsS0FBYTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7OztPQWpDQTtJQWxFRDtRQURDLFFBQVE7OzREQUNpQjtJQUsxQjtRQURDLFFBQVE7OzZFQUNrQztJQUczQztRQURDLFFBQVE7O3dFQUM2QjtJQUd0QztRQURDLFFBQVE7O2dFQUNxQjtJQUc5QjtRQURDLFFBQVE7O2lFQUM2QjtJQWpCN0IscUJBQXFCO1FBRGpDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQzs7T0FDakIscUJBQXFCLENBd0dqQztJQUFELDRCQUFDO0NBQUEsSUFBQTtTQXhHWSxxQkFBcUI7Ozs7OztJQUU5QiwwQ0FDMEI7Ozs7O0lBRTFCLDJDQUEyQjs7Ozs7SUFFM0IsMkRBQzJDOzs7OztJQUUzQyxzREFDc0M7Ozs7O0lBRXRDLDhDQUM4Qjs7Ozs7SUFFOUIsK0NBQ3NDOzs7OztJQUV0Qyw2Q0FBOEI7Ozs7O0lBRTlCLCtDQUFnQzs7Ozs7SUFFaEMsK0NBQStCOzs7OztJQUUvQixtREFBbUM7Ozs7O0lBRW5DLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUFJPVkVTVEFUVVMgfSBmcm9tIFwiLi9Hb2FsU2V0dGluZ0NvbW1vblwiO1xuaW1wb3J0IHsgRXh0ZW5zaW9uRGF0YSwgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignR29hbFNldHRpbmdHb2FsU3RhdHVzJylcbmV4cG9ydCBjbGFzcyBHb2FsU2V0dGluZ0dvYWxTdGF0dXMge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfRGF0YVllYXI6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX0lzQ3VycmVudDogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTTogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfVGVhbUdvYWxBcHBsaWNhYmxlWU06IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0dvYWxTZXRNb250aDogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQXBwcm92ZVN0YXR1czogQVBQUk9WRVNUQVRVUztcblxuICAgIHByaXZhdGUgX0lzRmlyc3RUaW1lOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfSXNOZWVkU2V0dGluZzogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX1JlbWFpbmluZ0RheXM6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX1N1cGVydmlzb3JDb21tZW50OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9FeHRlbnNpb246IEV4dGVuc2lvbkRhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFeHRlbnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9FeHRlbnNpb247XG4gICAgfVxuICAgIHB1YmxpYyBzZXRFeHRlbnNpb24oZXh0ZW5zaW9uKSB7XG4gICAgICAgIHRoaXMuX0V4dGVuc2lvbiA9IGV4dGVuc2lvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFBlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU0oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BlcnNvbm5lbEdvYWxBcHBsaWNhYmxlWU07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgVGVhbUdvYWxBcHBsaWNhYmxlWU0oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1RlYW1Hb2FsQXBwbGljYWJsZVlNO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEdvYWxTZXRNb250aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fR29hbFNldE1vbnRoO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEFwcHJvdmVTdGF0dXMoKTogQVBQUk9WRVNUQVRVUyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BcHByb3ZlU3RhdHVzO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IElzRmlyc3RUaW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fSXNGaXJzdFRpbWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgSXNOZWVkU2V0dGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0lzTmVlZFNldHRpbmc7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgUmVtYWluaW5nRGF5cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fUmVtYWluaW5nRGF5cztcbiAgICB9XG4gICAgcHVibGljIGdldCBEYXRhWWVhcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fRGF0YVllYXI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgSXNDdXJyZW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Jc0N1cnJlbnQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU3VwZXJ2aXNvckNvbW1lbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N1cGVydmlzb3JDb21tZW50O1xuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgc2V0IElzQ3VycmVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0lzQ3VycmVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IERhdGFZZWFyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fRGF0YVllYXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBQZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFRlYW1Hb2FsQXBwbGljYWJsZVlNKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fVGVhbUdvYWxBcHBsaWNhYmxlWU0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBHb2FsU2V0TW9udGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9Hb2FsU2V0TW9udGggPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBBcHByb3ZlU3RhdHVzKHZhbHVlOiBBUFBST1ZFU1RBVFVTKSB7XG4gICAgICAgIHRoaXMuX0FwcHJvdmVTdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBJc0ZpcnN0VGltZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9Jc0ZpcnN0VGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IElzTmVlZFNldHRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fSXNOZWVkU2V0dGluZyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFJlbWFpbmluZ0RheXModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9SZW1haW5pbmdEYXlzID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgU3VwZXJ2aXNvckNvbW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9TdXBlcnZpc29yQ29tbWVudCA9IHZhbHVlO1xuICAgIH1cblxufSJdfQ==