/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let SettingChangeEvent = class SettingChangeEvent {
    /**
     * @param {?} step
     * @param {?} column
     * @param {?} value
     */
    constructor(step, column, value) {
        this._step = step;
        this._column = column;
        this._value = value;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set step(value) {
        this._step = value;
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set column(value) {
        this._column = value;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ0NoYW5nZUV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1NldHRpbmdDaGFuZ2VFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsa0JBQWtCOzs7Ozs7SUFXM0IsWUFBWSxJQUFZLEVBQUUsTUFBYyxFQUFFLEtBQVU7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUdELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUNELElBQVcsS0FBSyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztDQUNKLENBQUE7QUFuQ0c7SUFEQyxRQUFROztpREFDYTtBQUd0QjtJQURDLFFBQVE7O21EQUNlO0FBR3hCO0lBREMsUUFBUTs7a0RBQ1c7QUFUWCxrQkFBa0I7SUFEOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDOztHQUNkLGtCQUFrQixDQXNDOUI7U0F0Q1ksa0JBQWtCOzs7Ozs7SUFFM0IsbUNBQ3NCOzs7OztJQUV0QixxQ0FDd0I7Ozs7O0lBRXhCLG9DQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1NldHRpbmdDaGFuZ2VFdmVudCcpXG5leHBvcnQgY2xhc3MgU2V0dGluZ0NoYW5nZUV2ZW50IHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3N0ZXA6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2NvbHVtbjogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHN0ZXA6IG51bWJlciwgY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgICAgIHRoaXMuX2NvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgICB9XG4gICAgcHVibGljIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29sdW1uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW47XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY29sdW1uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY29sdW1uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0iXX0=