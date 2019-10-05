/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
/** @enum {string} */
var AGENCY_STATE = {
    DISPLAY: 'display',
    ACCEPT: 'accept',
    REJECT: 'reject',
    FIRST: 'first',
};
export { AGENCY_STATE };
var AgencyPlanStatus = /** @class */ (function () {
    function AgencyPlanStatus(state, agentID) {
        this.state = state;
        this.agentID = agentID;
    }
    Object.defineProperty(AgencyPlanStatus.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanStatus.prototype, "agentID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._agentID;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._agentID = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanStatus.prototype, "_state", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanStatus.prototype, "_agentID", void 0);
    AgencyPlanStatus = tslib_1.__decorate([
        Bean('AgencyPlanStatus'),
        tslib_1.__metadata("design:paramtypes", [Object, Object])
    ], AgencyPlanStatus);
    return AgencyPlanStatus;
}());
export { AgencyPlanStatus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStatus.prototype._state;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanStatus.prototype._agentID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhblN0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9BZ2VuY3lQbGFuU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0lBRzlDLFNBQVUsU0FBUztJQUNuQixRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTzs7OztJQVlmLDBCQUFZLEtBQUssRUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFHRCxzQkFBVyxtQ0FBSzs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQWlCLEtBQW1CO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcscUNBQU87Ozs7UUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFDRCxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUhBO0lBcEJEO1FBREMsUUFBUTs7b0RBQ29CO0lBRzdCO1FBREMsUUFBUTs7c0RBQ2dCO0lBTmhCLGdCQUFnQjtRQUQ1QixJQUFJLENBQUMsa0JBQWtCLENBQUM7O09BQ1osZ0JBQWdCLENBMkI1QjtJQUFELHVCQUFDO0NBQUEsSUFBQTtTQTNCWSxnQkFBZ0I7Ozs7OztJQUV6QixrQ0FDNkI7Ozs7O0lBRTdCLG9DQUN5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGVudW0gQUdFTkNZX1NUQVRFIHtcbiAgICBESVNQTEFZID0gJ2Rpc3BsYXknLFxuICAgIEFDQ0VQVCA9ICdhY2NlcHQnLFxuICAgIFJFSkVDVCA9ICdyZWplY3QnLFxuICAgIEZJUlNUID0gJ2ZpcnN0J1xufVxuXG5AQmVhbignQWdlbmN5UGxhblN0YXR1cycpXG5leHBvcnQgY2xhc3MgQWdlbmN5UGxhblN0YXR1cyB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9zdGF0ZTogQUdFTkNZX1NUQVRFO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfYWdlbnRJRDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGUsIGFnZW50SUQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLmFnZW50SUQgPSBhZ2VudElEO1xuICAgIH1cblxuICAgXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBBR0VOQ1lfU1RBVEUge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc3RhdGUodmFsdWU6IEFHRU5DWV9TVEFURSkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGFnZW50SUQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FnZW50SUQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYWdlbnRJRCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2FnZW50SUQgPSB2YWx1ZTtcbiAgICB9XG59Il19