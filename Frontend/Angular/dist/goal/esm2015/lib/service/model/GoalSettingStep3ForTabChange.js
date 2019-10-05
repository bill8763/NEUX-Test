/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ActivityValue } from "./ActivityValue";
import { Bean, Required } from "@allianzSND/core";
let GoalSettingStep3ForTabChange = class GoalSettingStep3ForTabChange {
    /**
     * @param {?} ActivityValue
     * @param {?} Unit
     */
    constructor(ActivityValue, Unit) {
        this._ActivityValue = null;
        this._Unit = '';
        this._ActivityValue = ActivityValue;
        this._Unit = Unit;
    }
    /**
     * @return {?}
     */
    get ActivityValue() {
        return this._ActivityValue;
    }
    /**
     * @return {?}
     */
    get Unit() {
        return this._Unit;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwM0ZvclRhYkNoYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXAzRm9yVGFiQ2hhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsNEJBQTRCOzs7OztJQVFyQyxZQUFZLGFBQTRCLEVBQUUsSUFBWTtRQUw5QyxtQkFBYyxHQUFrQixJQUFJLENBQUM7UUFHckMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDSixDQUFBO0FBakJHO0lBREMsUUFBUTtzQ0FDZSxhQUFhO29FQUFRO0FBRzdDO0lBREMsUUFBUTs7MkRBQ2tCO0FBTmxCLDRCQUE0QjtJQUR4QyxJQUFJLENBQUMsOEJBQThCLENBQUM7NkNBU04sYUFBYTtHQVIvQiw0QkFBNEIsQ0FvQnhDO1NBcEJZLDRCQUE0Qjs7Ozs7O0lBRXJDLHNEQUM2Qzs7Ozs7SUFFN0MsNkNBQzJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZpdHlWYWx1ZSB9IGZyb20gXCIuL0FjdGl2aXR5VmFsdWVcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0dvYWxTZXR0aW5nU3RlcDNGb3JUYWJDaGFuZ2UnKVxuZXhwb3J0IGNsYXNzIEdvYWxTZXR0aW5nU3RlcDNGb3JUYWJDaGFuZ2Uge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQWN0aXZpdHlWYWx1ZTogQWN0aXZpdHlWYWx1ZSA9IG51bGw7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Vbml0OiBzdHJpbmcgPSAnJztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihBY3Rpdml0eVZhbHVlOiBBY3Rpdml0eVZhbHVlLCBVbml0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fQWN0aXZpdHlWYWx1ZSA9IEFjdGl2aXR5VmFsdWU7XG4gICAgICAgIHRoaXMuX1VuaXQgPSBVbml0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQWN0aXZpdHlWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FjdGl2aXR5VmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBVbml0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fVW5pdDtcbiAgICB9XG59Il19