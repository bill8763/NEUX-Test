/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ActivityValue } from "./ActivityValue";
import { Bean, Required } from "@allianzSND/core";
var GoalSettingStep3ForTabChange = /** @class */ (function () {
    function GoalSettingStep3ForTabChange(ActivityValue, Unit) {
        this._ActivityValue = null;
        this._Unit = '';
        this._ActivityValue = ActivityValue;
        this._Unit = Unit;
    }
    Object.defineProperty(GoalSettingStep3ForTabChange.prototype, "ActivityValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ActivityValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoalSettingStep3ForTabChange.prototype, "Unit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Unit;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", ActivityValue)
    ], GoalSettingStep3ForTabChange.prototype, "_ActivityValue", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], GoalSettingStep3ForTabChange.prototype, "_Unit", void 0);
    GoalSettingStep3ForTabChange = tslib_1.__decorate([
        Bean('GoalSettingStep3ForTabChange'),
        tslib_1.__metadata("design:paramtypes", [ActivityValue, String])
    ], GoalSettingStep3ForTabChange);
    return GoalSettingStep3ForTabChange;
}());
export { GoalSettingStep3ForTabChange };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep3ForTabChange.prototype._ActivityValue;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep3ForTabChange.prototype._Unit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwM0ZvclRhYkNoYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXAzRm9yVGFiQ2hhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBVzlDLHNDQUFZLGFBQTRCLEVBQUUsSUFBWTtRQUw5QyxtQkFBYyxHQUFrQixJQUFJLENBQUM7UUFHckMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQVcsdURBQWE7Ozs7UUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw4Q0FBSTs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBaEJEO1FBREMsUUFBUTswQ0FDZSxhQUFhO3dFQUFRO0lBRzdDO1FBREMsUUFBUTs7K0RBQ2tCO0lBTmxCLDRCQUE0QjtRQUR4QyxJQUFJLENBQUMsOEJBQThCLENBQUM7aURBU04sYUFBYTtPQVIvQiw0QkFBNEIsQ0FvQnhDO0lBQUQsbUNBQUM7Q0FBQSxJQUFBO1NBcEJZLDRCQUE0Qjs7Ozs7O0lBRXJDLHNEQUM2Qzs7Ozs7SUFFN0MsNkNBQzJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZpdHlWYWx1ZSB9IGZyb20gXCIuL0FjdGl2aXR5VmFsdWVcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0dvYWxTZXR0aW5nU3RlcDNGb3JUYWJDaGFuZ2UnKVxuZXhwb3J0IGNsYXNzIEdvYWxTZXR0aW5nU3RlcDNGb3JUYWJDaGFuZ2Uge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQWN0aXZpdHlWYWx1ZTogQWN0aXZpdHlWYWx1ZSA9IG51bGw7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Vbml0OiBzdHJpbmcgPSAnJztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihBY3Rpdml0eVZhbHVlOiBBY3Rpdml0eVZhbHVlLCBVbml0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fQWN0aXZpdHlWYWx1ZSA9IEFjdGl2aXR5VmFsdWU7XG4gICAgICAgIHRoaXMuX1VuaXQgPSBVbml0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQWN0aXZpdHlWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FjdGl2aXR5VmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBVbml0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fVW5pdDtcbiAgICB9XG59Il19