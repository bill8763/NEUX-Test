/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TIMEBASE, Bean, Required } from "@allianzSND/core";
let GoalSettingStep3 = class GoalSettingStep3 {
    constructor() {
        this._ActivityValues = [];
    }
    /**
     * @return {?}
     */
    get Activity() {
        return this._Activity;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Activity(value) {
        this._Activity = value;
    }
    /**
     * @return {?}
     */
    get ActivityValues() {
        return this._ActivityValues;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ActivityValues(value) {
        this._ActivityValues = value;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Array)
], GoalSettingStep3.prototype, "_ActivityValues", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], GoalSettingStep3.prototype, "_Activity", void 0);
GoalSettingStep3 = tslib_1.__decorate([
    Bean('GoalSettingStep3'),
    tslib_1.__metadata("design:paramtypes", [])
], GoalSettingStep3);
export { GoalSettingStep3 };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep3.prototype._ActivityValues;
    /**
     * @type {?}
     * @private
     */
    GoalSettingStep3.prototype._Activity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFNldHRpbmdTdGVwMy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Hb2FsU2V0dGluZ1N0ZXAzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHL0MsZ0JBQWdCO0lBUXpCO1FBTFEsb0JBQWUsR0FBeUIsRUFBRSxDQUFDO0lBTW5ELENBQUM7Ozs7SUFFRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFlO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxJQUFXLGNBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBMkI7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztDQUdKLENBQUE7QUF0Qkc7SUFEQyxRQUFRO3NDQUNnQixLQUFLO3lEQUFxQjtBQUduRDtJQURDLFFBQVE7O21EQUNtQjtBQU5uQixnQkFBZ0I7SUFENUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztHQUNaLGdCQUFnQixDQXlCNUI7U0F6QlksZ0JBQWdCOzs7Ozs7SUFFekIsMkNBQ21EOzs7OztJQUVuRCxxQ0FDNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpdml0eVZhbHVlIH0gZnJvbSBcIi4vQWN0aXZpdHlWYWx1ZVwiO1xuaW1wb3J0IHsgVElNRUJBU0UsIEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0dvYWxTZXR0aW5nU3RlcDMnKVxuZXhwb3J0IGNsYXNzIEdvYWxTZXR0aW5nU3RlcDMge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQWN0aXZpdHlWYWx1ZXM6IEFycmF5PEFjdGl2aXR5VmFsdWU+ID0gW107XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BY3Rpdml0eTogVElNRUJBU0U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEFjdGl2aXR5KCk6IFRJTUVCQVNFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FjdGl2aXR5O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFjdGl2aXR5KHZhbHVlOiBUSU1FQkFTRSkge1xuICAgICAgICB0aGlzLl9BY3Rpdml0eSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEFjdGl2aXR5VmFsdWVzKCk6IEFycmF5PEFjdGl2aXR5VmFsdWU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FjdGl2aXR5VmFsdWVzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEFjdGl2aXR5VmFsdWVzKHZhbHVlOiBBcnJheTxBY3Rpdml0eVZhbHVlPikge1xuICAgICAgICB0aGlzLl9BY3Rpdml0eVZhbHVlcyA9IHZhbHVlO1xuICAgIH1cblxuXG59XG4iXX0=