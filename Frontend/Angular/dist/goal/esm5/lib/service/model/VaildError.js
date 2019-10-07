/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var ValidError = /** @class */ (function () {
    function ValidError(Step, ColId, Msg) {
        this._Step = Step;
        this._ColId = ColId;
        this._Msg = Msg;
    }
    Object.defineProperty(ValidError.prototype, "Step", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidError.prototype, "ColId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ColId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidError.prototype, "Msg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._Msg;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ValidError.prototype, "_Step", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ValidError.prototype, "_ColId", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ValidError.prototype, "_Msg", void 0);
    ValidError = tslib_1.__decorate([
        Bean('ValidError'),
        tslib_1.__metadata("design:paramtypes", [Number, String, String])
    ], ValidError);
    return ValidError;
}());
export { ValidError };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidError.prototype._Step;
    /**
     * @type {?}
     * @private
     */
    ValidError.prototype._ColId;
    /**
     * @type {?}
     * @private
     */
    ValidError.prototype._Msg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFpbGRFcnJvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9WYWlsZEVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFjOUMsb0JBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFVO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBVyw0QkFBSTs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsNkJBQUs7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQkFBRzs7OztRQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBdEJEO1FBREMsUUFBUTs7NkNBQ2E7SUFHdEI7UUFEQyxRQUFROzs4Q0FDYztJQUd2QjtRQURDLFFBQVE7OzRDQUNZO0lBVFosVUFBVTtRQUR0QixJQUFJLENBQUMsWUFBWSxDQUFDOztPQUNOLFVBQVUsQ0EyQnRCO0lBQUQsaUJBQUM7Q0FBQSxJQUFBO1NBM0JZLFVBQVU7Ozs7OztJQUVuQiwyQkFDc0I7Ozs7O0lBRXRCLDRCQUN1Qjs7Ozs7SUFFdkIsMEJBQ3FCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignVmFsaWRFcnJvcicpXG5leHBvcnQgY2xhc3MgVmFsaWRFcnJvcntcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX1N0ZXA6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0NvbElkOiBzdHJpbmc7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Nc2c6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFN0ZXA6IG51bWJlciwgQ29sSWQ6IHN0cmluZywgTXNnOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX1N0ZXAgPSBTdGVwO1xuICAgICAgICB0aGlzLl9Db2xJZCA9IENvbElkO1xuICAgICAgICB0aGlzLl9Nc2cgPSBNc2c7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBTdGVwKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9TdGVwO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IENvbElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Db2xJZDtcbiAgICB9XG4gICAgcHVibGljIGdldCBNc2coKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX01zZztcbiAgICB9XG5cbn0iXX0=