/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var AgencyPlanMainInfo = /** @class */ (function () {
    function AgencyPlanMainInfo() {
    }
    Object.defineProperty(AgencyPlanMainInfo.prototype, "CompletionRate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._CompletionRate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._CompletionRate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyPlanMainInfo.prototype, "AgencyMainDataList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._AgencyMainDataList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._AgencyMainDataList = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], AgencyPlanMainInfo.prototype, "_CompletionRate", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Array)
    ], AgencyPlanMainInfo.prototype, "_AgencyMainDataList", void 0);
    AgencyPlanMainInfo = tslib_1.__decorate([
        Bean('AgencyPlanMainInfo'),
        tslib_1.__metadata("design:paramtypes", [])
    ], AgencyPlanMainInfo);
    return AgencyPlanMainInfo;
}());
export { AgencyPlanMainInfo };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgencyPlanMainInfo.prototype._CompletionRate;
    /**
     * @type {?}
     * @private
     */
    AgencyPlanMainInfo.prototype._AgencyMainDataList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbmN5UGxhbk1haW5JbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZ29hbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL0FnZW5jeVBsYW5NYWluSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBVzlDO0lBRUEsQ0FBQztJQUVELHNCQUFXLDhDQUFjOzs7O1FBQXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBQ0QsVUFBMEIsS0FBYTtZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQUlELHNCQUFXLGtEQUFrQjs7OztRQUE3QjtZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7Ozs7O1FBQ0QsVUFBOEIsS0FBZ0M7WUFDMUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUNyQyxDQUFDOzs7T0FIQTtJQWpCRDtRQURDLFFBQVE7OytEQUN1QjtJQUdoQztRQURDLFFBQVE7MENBQ29CLEtBQUs7bUVBQXFCO0lBTjlDLGtCQUFrQjtRQUQ5QixJQUFJLENBQUMsb0JBQW9CLENBQUM7O09BQ2Qsa0JBQWtCLENBMEI5QjtJQUFELHlCQUFDO0NBQUEsSUFBQTtTQTFCWSxrQkFBa0I7Ozs7OztJQUUzQiw2Q0FDZ0M7Ozs7O0lBRWhDLGlEQUN1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZW5jeVBsYW5NYWluRGF0YSB9IGZyb20gXCIuL0FnZW5jeVBsYW5NYWluRGF0YVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignQWdlbmN5UGxhbk1haW5JbmZvJylcbmV4cG9ydCBjbGFzcyBBZ2VuY3lQbGFuTWFpbkluZm8ge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfQ29tcGxldGlvblJhdGU6IHN0cmluZztcbiAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9BZ2VuY3lNYWluRGF0YUxpc3Q6IEFycmF5PEFnZW5jeVBsYW5NYWluRGF0YT47XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgQ29tcGxldGlvblJhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvbXBsZXRpb25SYXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IENvbXBsZXRpb25SYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fQ29tcGxldGlvblJhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBBZ2VuY3lNYWluRGF0YUxpc3QoKTogQXJyYXk8QWdlbmN5UGxhbk1haW5EYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BZ2VuY3lNYWluRGF0YUxpc3Q7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQWdlbmN5TWFpbkRhdGFMaXN0KHZhbHVlOiBBcnJheTxBZ2VuY3lQbGFuTWFpbkRhdGE+KSB7XG4gICAgICAgIHRoaXMuX0FnZW5jeU1haW5EYXRhTGlzdCA9IHZhbHVlO1xuICAgIH1cblxuXG59Il19