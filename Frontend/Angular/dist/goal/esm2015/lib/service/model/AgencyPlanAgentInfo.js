/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let AgencyPlanAgentInfo = class AgencyPlanAgentInfo {
    /**
     * @param {?} AgentID
     * @param {?} AgentName
     * @param {?} DataYear
     * @param {?} AppUseMode
     */
    constructor(AgentID, AgentName, DataYear, AppUseMode) {
        this._AgentID = AgentID;
        this._AgentName = AgentName;
        this._DataYear = DataYear;
        this._AppUseMode = AppUseMode;
    }
    /**
     * @return {?}
     */
    get AgentID() {
        return this._AgentID;
    }
    /**
     * @return {?}
     */
    get AgentName() {
        return this._AgentName;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get AppUseMode() {
        return this._AppUseMode;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbkFnZW50SW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9BZ2VuY3lQbGFuQWdlbnRJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxtQkFBbUI7Ozs7Ozs7SUFjNUIsWUFBWSxPQUFlLEVBQUUsU0FBaUIsRUFBRSxRQUFnQixFQUFFLFVBQWtCO1FBQ2hGLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBVyxVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0NBRUosQ0FBQTtBQWxDRztJQURDLFFBQVE7O3FEQUNnQjtBQUd6QjtJQURDLFFBQVE7O3VEQUNrQjtBQUczQjtJQURDLFFBQVE7O3NEQUNpQjtBQUcxQjtJQURDLFFBQVE7O3dEQUNtQjtBQVpuQixtQkFBbUI7SUFEL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDOztHQUNmLG1CQUFtQixDQXFDL0I7U0FyQ1ksbUJBQW1COzs7Ozs7SUFFNUIsdUNBQ3lCOzs7OztJQUV6Qix5Q0FDMkI7Ozs7O0lBRTNCLHdDQUMwQjs7Ozs7SUFFMUIsMENBQzRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignQWdlbmN5UGxhbkFnZW50SW5mbycpXG5leHBvcnQgY2xhc3MgQWdlbmN5UGxhbkFnZW50SW5mbyB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BZ2VudElEOiBzdHJpbmc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BZ2VudE5hbWU6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0RhdGFZZWFyOiBudW1iZXI7XG4gICAgXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQXBwVXNlTW9kZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoQWdlbnRJRDogc3RyaW5nLCBBZ2VudE5hbWU6IHN0cmluZywgRGF0YVllYXI6IG51bWJlciwgQXBwVXNlTW9kZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX0FnZW50SUQgPSBBZ2VudElEO1xuICAgICAgICB0aGlzLl9BZ2VudE5hbWUgPSBBZ2VudE5hbWU7XG4gICAgICAgIHRoaXMuX0RhdGFZZWFyID0gRGF0YVllYXI7XG4gICAgICAgIHRoaXMuX0FwcFVzZU1vZGUgPSBBcHBVc2VNb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQWdlbnRJRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fQWdlbnRJRDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEFnZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fQWdlbnROYW1lO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IERhdGFZZWFyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9EYXRhWWVhcjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBBcHBVc2VNb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BcHBVc2VNb2RlO1xuICAgIH1cblxufVxuIl19