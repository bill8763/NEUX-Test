/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var SettingChangeEvent = /** @class */ (function () {
    function SettingChangeEvent(step, column, value) {
        this._step = step;
        this._column = column;
        this._value = value;
    }
    Object.defineProperty(SettingChangeEvent.prototype, "step", {
        get: /**
         * @return {?}
         */
        function () {
            return this._step;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._step = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingChangeEvent.prototype, "column", {
        get: /**
         * @return {?}
         */
        function () {
            return this._column;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._column = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingChangeEvent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], SettingChangeEvent.prototype, "_step", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], SettingChangeEvent.prototype, "_column", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Object)
    ], SettingChangeEvent.prototype, "_value", void 0);
    SettingChangeEvent = tslib_1.__decorate([
        Bean('SettingChangeEvent'),
        tslib_1.__metadata("design:paramtypes", [Number, String, Object])
    ], SettingChangeEvent);
    return SettingChangeEvent;
}());
export { SettingChangeEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingChangeEvent.prototype._step;
    /**
     * @type {?}
     * @private
     */
    SettingChangeEvent.prototype._column;
    /**
     * @type {?}
     * @private
     */
    SettingChangeEvent.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ0NoYW5nZUV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1NldHRpbmdDaGFuZ2VFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBYzlDLDRCQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBVTtRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBR0Qsc0JBQVcsb0NBQUk7Ozs7UUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxzQ0FBTTs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxxQ0FBSzs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQWlCLEtBQVU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7SUEvQkQ7UUFEQyxRQUFROztxREFDYTtJQUd0QjtRQURDLFFBQVE7O3VEQUNlO0lBR3hCO1FBREMsUUFBUTs7c0RBQ1c7SUFUWCxrQkFBa0I7UUFEOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDOztPQUNkLGtCQUFrQixDQXNDOUI7SUFBRCx5QkFBQztDQUFBLElBQUE7U0F0Q1ksa0JBQWtCOzs7Ozs7SUFFM0IsbUNBQ3NCOzs7OztJQUV0QixxQ0FDd0I7Ozs7O0lBRXhCLG9DQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1NldHRpbmdDaGFuZ2VFdmVudCcpXG5leHBvcnQgY2xhc3MgU2V0dGluZ0NoYW5nZUV2ZW50IHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3N0ZXA6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2NvbHVtbjogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHN0ZXA6IG51bWJlciwgY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgICAgIHRoaXMuX2NvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgICB9XG4gICAgcHVibGljIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29sdW1uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW47XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY29sdW1uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY29sdW1uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0iXX0=