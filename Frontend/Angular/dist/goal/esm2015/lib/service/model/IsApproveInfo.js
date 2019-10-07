/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Bean, Required } from "@allianzSND/core";
let IsApproveInfo = class IsApproveInfo {
    /**
     * @param {?} IsNeedApprove
     * @param {?} IsPopup
     */
    constructor(IsNeedApprove, IsPopup) {
        this._IsNeedApprove = IsNeedApprove;
        this._IsPopup = IsPopup;
    }
    /**
     * @return {?}
     */
    get IsNeedApprove() {
        return this._IsNeedApprove;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsNeedApprove(value) {
        this._IsNeedApprove = value;
    }
    /**
     * @return {?}
     */
    get IsPopup() {
        return this._IsPopup;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsPopup(value) {
        this._IsPopup = value;
    }
    /**
     * @return {?}
     */
    get PopupType() {
        return this._PopupType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PopupType(value) {
        this._PopupType = value;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNBcHByb3ZlSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Jc0FwcHJvdmVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxhQUFhOzs7OztJQVd0QixZQUFZLGFBQWEsRUFBRSxPQUFPO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztDQUVKLENBQUE7QUFoQ0c7SUFEQyxRQUFROztxREFDdUI7QUFHaEM7SUFEQyxRQUFROzsrQ0FDaUI7QUFOakIsYUFBYTtJQUR6QixJQUFJLENBQUMsZUFBZSxDQUFDOztHQUNULGFBQWEsQ0FtQ3pCO1NBbkNZLGFBQWE7Ozs7OztJQUV0Qix1Q0FDZ0M7Ozs7O0lBRWhDLGlDQUMwQjs7Ozs7SUFFMUIsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignSXNBcHByb3ZlSW5mbycpXG5leHBvcnQgY2xhc3MgSXNBcHByb3ZlSW5mb3tcbiAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9Jc05lZWRBcHByb3ZlOiBib29sZWFuO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfSXNQb3B1cDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX1BvcHVwVHlwZTogc3RyaW5nO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihJc05lZWRBcHByb3ZlLCBJc1BvcHVwKXtcbiAgICAgICAgdGhpcy5fSXNOZWVkQXBwcm92ZSA9IElzTmVlZEFwcHJvdmU7XG4gICAgICAgIHRoaXMuX0lzUG9wdXAgPSBJc1BvcHVwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgSXNOZWVkQXBwcm92ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0lzTmVlZEFwcHJvdmU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgSXNOZWVkQXBwcm92ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9Jc05lZWRBcHByb3ZlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgSXNQb3B1cCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX0lzUG9wdXA7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgSXNQb3B1cCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9Jc1BvcHVwID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgUG9wdXBUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Qb3B1cFR5cGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgUG9wdXBUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fUG9wdXBUeXBlID0gdmFsdWU7XG4gICAgfVxuXG59Il19