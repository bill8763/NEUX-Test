/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TIMEBASE, Bean, Required } from "@allianzSND/core";
let ActivityValue = class ActivityValue {
    /**
     * @param {?} TimeBase
     * @param {?} Find
     * @param {?} Schedule
     * @param {?} Meet
     * @param {?} Submit
     * @param {?} Inforce
     */
    constructor(TimeBase, Find, Schedule, Meet, Submit, Inforce) {
        this._TimeBase = TimeBase;
        this._Schedule = Schedule;
        this._Find = Find;
        this._Meet = Meet;
        this._Submit = Submit;
        this._Inforce = Inforce;
    }
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._TimeBase;
    }
    /**
     * @return {?}
     */
    get Find() {
        return this._Find;
    }
    /**
     * @return {?}
     */
    get Schedule() {
        return this._Schedule;
    }
    /**
     * @return {?}
     */
    get Meet() {
        return this._Meet;
    }
    /**
     * @return {?}
     */
    get Submit() {
        return this._Submit;
    }
    /**
     * @return {?}
     */
    get Inforce() {
        return this._Inforce;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ActivityValue.prototype, "_TimeBase", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ActivityValue.prototype, "_Find", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ActivityValue.prototype, "_Schedule", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ActivityValue.prototype, "_Meet", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ActivityValue.prototype, "_Submit", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ActivityValue.prototype, "_Inforce", void 0);
ActivityValue = tslib_1.__decorate([
    Bean('ActivityValue'),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], ActivityValue);
export { ActivityValue };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActivityValue.prototype._TimeBase;
    /**
     * @type {?}
     * @private
     */
    ActivityValue.prototype._Find;
    /**
     * @type {?}
     * @private
     */
    ActivityValue.prototype._Schedule;
    /**
     * @type {?}
     * @private
     */
    ActivityValue.prototype._Meet;
    /**
     * @type {?}
     * @private
     */
    ActivityValue.prototype._Submit;
    /**
     * @type {?}
     * @private
     */
    ActivityValue.prototype._Inforce;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZpdHlWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9BY3Rpdml0eVZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHL0MsYUFBYTs7Ozs7Ozs7O0lBb0J0QixZQUFZLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNELElBQVcsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0NBRUosQ0FBQTtBQTdDRztJQURDLFFBQVE7O2dEQUNtQjtBQUc1QjtJQURDLFFBQVE7OzRDQUNhO0FBR3RCO0lBREMsUUFBUTs7Z0RBQ2lCO0FBRzFCO0lBREMsUUFBUTs7NENBQ2E7QUFHdEI7SUFEQyxRQUFROzs4Q0FDZTtBQUd4QjtJQURDLFFBQVE7OytDQUNnQjtBQWxCaEIsYUFBYTtJQUR6QixJQUFJLENBQUMsZUFBZSxDQUFDOztHQUNULGFBQWEsQ0FnRHpCO1NBaERZLGFBQWE7Ozs7OztJQUV0QixrQ0FDNEI7Ozs7O0lBRTVCLDhCQUNzQjs7Ozs7SUFFdEIsa0NBQzBCOzs7OztJQUUxQiw4QkFDc0I7Ozs7O0lBRXRCLGdDQUN3Qjs7Ozs7SUFFeEIsaUNBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVElNRUJBU0UsIEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ0FjdGl2aXR5VmFsdWUnKVxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5VmFsdWV7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9UaW1lQmFzZTogVElNRUJBU0U7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9GaW5kOiBzdHJpbmc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9TY2hlZHVsZTogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfTWVldDogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfU3VibWl0OiBzdHJpbmc7XG4gICAgXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfSW5mb3JjZTogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFRpbWVCYXNlLCBGaW5kLCBTY2hlZHVsZSwgTWVldCwgU3VibWl0LCBJbmZvcmNlKSB7XG4gICAgICAgIHRoaXMuX1RpbWVCYXNlID0gVGltZUJhc2U7XG4gICAgICAgIHRoaXMuX1NjaGVkdWxlID0gU2NoZWR1bGU7XG4gICAgICAgIHRoaXMuX0ZpbmQgPSBGaW5kO1xuICAgICAgICB0aGlzLl9NZWV0ID0gTWVldDtcbiAgICAgICAgdGhpcy5fU3VibWl0ID0gU3VibWl0O1xuICAgICAgICB0aGlzLl9JbmZvcmNlID0gSW5mb3JjZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFRpbWVCYXNlKCk6IFRJTUVCQVNFIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1RpbWVCYXNlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEZpbmQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0ZpbmQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU2NoZWR1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1NjaGVkdWxlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IE1lZXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX01lZXQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgU3VibWl0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TdWJtaXQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgSW5mb3JjZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fSW5mb3JjZTtcbiAgICB9XG5cbn0iXX0=