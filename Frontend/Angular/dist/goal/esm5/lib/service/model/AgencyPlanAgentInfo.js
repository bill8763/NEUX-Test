/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var AgencyPlanAgentInfo = /** @class */ (function () {
    function AgencyPlanAgentInfo(AgentID, AgentName, DataYear, AppUseMode) {
        this._AgentID = AgentID;
        this._AgentName = AgentName;
        this._DataYear = DataYear;
        this._AppUseMode = AppUseMode;
    }
    Object.defineProperty(AgencyPlanAgentInfo.prototype, "AgentID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AgentID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanAgentInfo.prototype, "AgentName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AgentName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanAgentInfo.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._DataYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanAgentInfo.prototype, "AppUseMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AppUseMode;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanAgentInfo.prototype, "_AgentID", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanAgentInfo.prototype, "_AgentName", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], AgencyPlanAgentInfo.prototype, "_DataYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanAgentInfo.prototype, "_AppUseMode", void 0);
    AgencyPlanAgentInfo = tslib_1.__decorate([
        Bean('AgencyPlanAgentInfo'),
        tslib_1.__metadata("design:paramtypes", [String, String, Number, String])
    ], AgencyPlanAgentInfo);
    return AgencyPlanAgentInfo;
}());
export { AgencyPlanAgentInfo };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanAgentInfo.prototype._AgentID;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanAgentInfo.prototype._AgentName;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanAgentInfo.prototype._DataYear;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanAgentInfo.prototype._AppUseMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbkFnZW50SW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9BZ2VuY3lQbGFuQWdlbnRJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFpQjlDLDZCQUFZLE9BQWUsRUFBRSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsVUFBa0I7UUFDaEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUVELHNCQUFXLHdDQUFPOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMENBQVM7Ozs7UUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5Q0FBUTs7OztRQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJDQUFVOzs7O1FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBaENEO1FBREMsUUFBUTs7eURBQ2dCO0lBR3pCO1FBREMsUUFBUTs7MkRBQ2tCO0lBRzNCO1FBREMsUUFBUTs7MERBQ2lCO0lBRzFCO1FBREMsUUFBUTs7NERBQ21CO0lBWm5CLG1CQUFtQjtRQUQvQixJQUFJLENBQUMscUJBQXFCLENBQUM7O09BQ2YsbUJBQW1CLENBcUMvQjtJQUFELDBCQUFDO0NBQUEsSUFBQTtTQXJDWSxtQkFBbUI7Ozs7OztJQUU1Qix1Q0FDeUI7Ozs7O0lBRXpCLHlDQUMyQjs7Ozs7SUFFM0Isd0NBQzBCOzs7OztJQUUxQiwwQ0FDNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdBZ2VuY3lQbGFuQWdlbnRJbmZvJylcbmV4cG9ydCBjbGFzcyBBZ2VuY3lQbGFuQWdlbnRJbmZvIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0FnZW50SUQ6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0FnZW50TmFtZTogc3RyaW5nO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfRGF0YVllYXI6IG51bWJlcjtcbiAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BcHBVc2VNb2RlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihBZ2VudElEOiBzdHJpbmcsIEFnZW50TmFtZTogc3RyaW5nLCBEYXRhWWVhcjogbnVtYmVyLCBBcHBVc2VNb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fQWdlbnRJRCA9IEFnZW50SUQ7XG4gICAgICAgIHRoaXMuX0FnZW50TmFtZSA9IEFnZW50TmFtZTtcbiAgICAgICAgdGhpcy5fRGF0YVllYXIgPSBEYXRhWWVhcjtcbiAgICAgICAgdGhpcy5fQXBwVXNlTW9kZSA9IEFwcFVzZU1vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBBZ2VudElEKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BZ2VudElEO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQWdlbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BZ2VudE5hbWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgRGF0YVllYXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0RhdGFZZWFyO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IEFwcFVzZU1vZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FwcFVzZU1vZGU7XG4gICAgfVxuXG59XG4iXX0=