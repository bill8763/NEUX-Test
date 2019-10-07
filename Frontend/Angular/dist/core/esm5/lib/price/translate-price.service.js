/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DefaultLoginMgr } from '../auth/login/DefaultLoginMgr';
import * as i0 from "@angular/core";
import * as i1 from "../auth/login/DefaultLoginMgr";
var TranslatePriceService = /** @class */ (function () {
    function TranslatePriceService(loginMgr) {
        var _this = this;
        this.loginMgr = loginMgr;
        this._role = '';
        this._million = 1000000;
        this.loginMgr.getLoginInfo().subscribe((/**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            if (info.AppUseMode && info.AppUseMode.length > 0)
                _this._role = info.AppUseMode[info.AppUseMode.length - 1];
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TranslatePriceService.prototype.translatePrice = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var isCAOorZONEHEAD = (this._role == 'Manager' || this._role == 'Supervisor');
        /** @type {?} */
        var isValueLegal = !isNaN(Number(value));
        if (isValueLegal) {
            return isCAOorZONEHEAD ? this._numberToFix(value / this._million, 1) : value;
        }
        else {
            return value;
        }
    };
    /**
     * @private
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    TranslatePriceService.prototype._numberToFix = /**
     * @private
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    function (n, toFix) {
        /** @type {?} */
        var powNum = Math.pow(10, toFix);
        return Math.round(n * powNum) / powNum;
    };
    TranslatePriceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    TranslatePriceService.ctorParameters = function () { return [
        { type: DefaultLoginMgr }
    ]; };
    /** @nocollapse */ TranslatePriceService.ngInjectableDef = i0.defineInjectable({ factory: function TranslatePriceService_Factory() { return new TranslatePriceService(i0.inject(i1.DefaultLoginMgr)); }, token: TranslatePriceService, providedIn: "root" });
    return TranslatePriceService;
}());
export { TranslatePriceService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePriceService.prototype._role;
    /**
     * @type {?}
     * @private
     */
    TranslatePriceService.prototype._million;
    /**
     * @type {?}
     * @private
     */
    TranslatePriceService.prototype.loginMgr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXByaWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3ByaWNlL3RyYW5zbGF0ZS1wcmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQU1oRTtJQVNFLCtCQUNVLFFBQXlCO1FBRG5DLGlCQVFDO1FBUFMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFMM0IsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVcsT0FBTyxDQUFDO1FBT2pDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsSUFBSTtZQUMxQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFNRCw4Q0FBYzs7OztJQUFkLFVBQWUsS0FBVTs7WUFDbkIsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUM7O1lBQ3pFLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM5RTthQUNJO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7Ozs7SUFFTyw0Q0FBWTs7Ozs7O0lBQXBCLFVBQXFCLENBQVMsRUFBRSxLQUFhOztZQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLEdBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7O2dCQXJDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBUlEsZUFBZTs7O2dDQUR4QjtDQW1EQyxBQTVDRCxJQTRDQztTQXpDWSxxQkFBcUI7Ozs7OztJQUVoQyxzQ0FBMkI7Ozs7O0lBQzNCLHlDQUFtQzs7Ozs7SUFJakMseUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWZhdWx0TG9naW5NZ3IgfSBmcm9tICcuLi9hdXRoL2xvZ2luL0RlZmF1bHRMb2dpbk1ncic7XG5pbXBvcnQgeyBJTG9naW5NZ3IgfSBmcm9tICcuLi9hdXRoL2xvZ2luL0xvZ2luTWdyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMb2dpbk1nclRva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4nO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUHJpY2VTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9yb2xlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfbWlsbGlvbjogbnVtYmVyID0gMTAwMDAwMDtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9naW5NZ3I6IERlZmF1bHRMb2dpbk1ncixcbiAgKSB7XG5cbiAgICB0aGlzLmxvZ2luTWdyLmdldExvZ2luSW5mbygpLnN1YnNjcmliZSgoaW5mbykgPT4ge1xuICAgICAgaWYgKGluZm8uQXBwVXNlTW9kZSAmJiBpbmZvLkFwcFVzZU1vZGUubGVuZ3RoID4gMClcbiAgICAgICAgdGhpcy5fcm9sZSA9IGluZm8uQXBwVXNlTW9kZVtpbmZvLkFwcFVzZU1vZGUubGVuZ3RoIC0gMV07XG4gICAgfSlcbiAgfVxuXG5cblxuXG5cbiAgdHJhbnNsYXRlUHJpY2UodmFsdWU6IGFueSk6c3RyaW5nIHtcbiAgICBsZXQgaXNDQU9vclpPTkVIRUFEID0gKHRoaXMuX3JvbGUgPT0gJ01hbmFnZXInIHx8IHRoaXMuX3JvbGUgPT0gJ1N1cGVydmlzb3InKTtcbiAgICBsZXQgaXNWYWx1ZUxlZ2FsID0gIWlzTmFOKE51bWJlcih2YWx1ZSkpO1xuICAgIGlmIChpc1ZhbHVlTGVnYWwpIHtcbiAgICAgIHJldHVybiBpc0NBT29yWk9ORUhFQUQgPyB0aGlzLl9udW1iZXJUb0ZpeCh2YWx1ZSAvIHRoaXMuX21pbGxpb24sIDEpIDogdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX251bWJlclRvRml4KG46IG51bWJlciwgdG9GaXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHBvd051bSA9IE1hdGgucG93KDEwLHRvRml4KTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuKnBvd051bSkvcG93TnVtO1xuICB9XG5cblxuXG5cblxuXG59XG4iXX0=