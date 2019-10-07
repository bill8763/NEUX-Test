/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
var IsApproveInfo = /** @class */ (function () {
    function IsApproveInfo(IsNeedApprove, IsPopup) {
        this._IsNeedApprove = IsNeedApprove;
        this._IsPopup = IsPopup;
    }
    Object.defineProperty(IsApproveInfo.prototype, "IsNeedApprove", {
        get: /**
         * @return {?}
         */
        function () {
            return this._IsNeedApprove;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._IsNeedApprove = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsApproveInfo.prototype, "IsPopup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._IsPopup;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._IsPopup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsApproveInfo.prototype, "PopupType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._PopupType;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._PopupType = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Boolean)
    ], IsApproveInfo.prototype, "_IsNeedApprove", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Boolean)
    ], IsApproveInfo.prototype, "_IsPopup", void 0);
    IsApproveInfo = tslib_1.__decorate([
        Bean('IsApproveInfo'),
        tslib_1.__metadata("design:paramtypes", [Object, Object])
    ], IsApproveInfo);
    return IsApproveInfo;
}());
export { IsApproveInfo };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IsApproveInfo.prototype._IsNeedApprove;
    /**
     * @type {?}
     * @private
     */
    IsApproveInfo.prototype._IsPopup;
    /**
     * @type {?}
     * @private
     */
    IsApproveInfo.prototype._PopupType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNBcHByb3ZlSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Jc0FwcHJvdmVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFjOUMsdUJBQVksYUFBYSxFQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFXLHdDQUFhOzs7O1FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7Ozs7O1FBQ0QsVUFBeUIsS0FBYztZQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FIQTtJQUlELHNCQUFXLGtDQUFPOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLG9DQUFTOzs7O1FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBQ0QsVUFBcUIsS0FBYTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQTNCRDtRQURDLFFBQVE7O3lEQUN1QjtJQUdoQztRQURDLFFBQVE7O21EQUNpQjtJQU5qQixhQUFhO1FBRHpCLElBQUksQ0FBQyxlQUFlLENBQUM7O09BQ1QsYUFBYSxDQW1DekI7SUFBRCxvQkFBQztDQUFBLElBQUE7U0FuQ1ksYUFBYTs7Ozs7O0lBRXRCLHVDQUNnQzs7Ozs7SUFFaEMsaUNBQzBCOzs7OztJQUUxQixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdJc0FwcHJvdmVJbmZvJylcbmV4cG9ydCBjbGFzcyBJc0FwcHJvdmVJbmZve1xuICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX0lzTmVlZEFwcHJvdmU6IGJvb2xlYW47XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Jc1BvcHVwOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfUG9wdXBUeXBlOiBzdHJpbmc7XG5cblxuICAgIGNvbnN0cnVjdG9yKElzTmVlZEFwcHJvdmUsIElzUG9wdXApe1xuICAgICAgICB0aGlzLl9Jc05lZWRBcHByb3ZlID0gSXNOZWVkQXBwcm92ZTtcbiAgICAgICAgdGhpcy5fSXNQb3B1cCA9IElzUG9wdXA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBJc05lZWRBcHByb3ZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fSXNOZWVkQXBwcm92ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBJc05lZWRBcHByb3ZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX0lzTmVlZEFwcHJvdmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBJc1BvcHVwKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fSXNQb3B1cDtcbiAgICB9XG4gICAgcHVibGljIHNldCBJc1BvcHVwKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX0lzUG9wdXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBQb3B1cFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BvcHVwVHlwZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBQb3B1cFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9Qb3B1cFR5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbn0iXX0=