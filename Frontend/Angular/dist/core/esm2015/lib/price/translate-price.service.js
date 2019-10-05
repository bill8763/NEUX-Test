/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DefaultLoginMgr } from '../auth/login/DefaultLoginMgr';
import * as i0 from "@angular/core";
import * as i1 from "../auth/login/DefaultLoginMgr";
export class TranslatePriceService {
    /**
     * @param {?} loginMgr
     */
    constructor(loginMgr) {
        this.loginMgr = loginMgr;
        this._role = '';
        this._million = 1000000;
        this.loginMgr.getLoginInfo().subscribe((/**
         * @param {?} info
         * @return {?}
         */
        (info) => {
            if (info.AppUseMode && info.AppUseMode.length > 0)
                this._role = info.AppUseMode[info.AppUseMode.length - 1];
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    translatePrice(value) {
        /** @type {?} */
        let isCAOorZONEHEAD = (this._role == 'Manager' || this._role == 'Supervisor');
        /** @type {?} */
        let isValueLegal = !isNaN(Number(value));
        if (isValueLegal) {
            return isCAOorZONEHEAD ? this._numberToFix(value / this._million, 1) : value;
        }
        else {
            return value;
        }
    }
    /**
     * @private
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    _numberToFix(n, toFix) {
        /** @type {?} */
        let powNum = Math.pow(10, toFix);
        return Math.round(n * powNum) / powNum;
    }
}
TranslatePriceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TranslatePriceService.ctorParameters = () => [
    { type: DefaultLoginMgr }
];
/** @nocollapse */ TranslatePriceService.ngInjectableDef = i0.defineInjectable({ factory: function TranslatePriceService_Factory() { return new TranslatePriceService(i0.inject(i1.DefaultLoginMgr)); }, token: TranslatePriceService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXByaWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3ByaWNlL3RyYW5zbGF0ZS1wcmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQVNoRSxNQUFNOzs7O0lBTUosWUFDVSxRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUwzQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFPakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFNRCxjQUFjLENBQUMsS0FBVTs7WUFDbkIsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUM7O1lBQ3pFLFlBQVksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM5RTthQUNJO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7Ozs7SUFFTyxZQUFZLENBQUMsQ0FBUyxFQUFFLEtBQWE7O1lBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsR0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7O1lBckNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUlEsZUFBZTs7Ozs7Ozs7SUFXdEIsc0NBQTJCOzs7OztJQUMzQix5Q0FBbUM7Ozs7O0lBSWpDLHlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVmYXVsdExvZ2luTWdyIH0gZnJvbSAnLi4vYXV0aC9sb2dpbi9EZWZhdWx0TG9naW5NZ3InO1xuaW1wb3J0IHsgSUxvZ2luTWdyIH0gZnJvbSAnLi4vYXV0aC9sb2dpbi9Mb2dpbk1nci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTG9naW5NZ3JUb2tlbiB9IGZyb20gJy4uL2luamVjdGlvblRva2VuJztcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVByaWNlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfcm9sZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX21pbGxpb246IG51bWJlciA9IDEwMDAwMDA7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2luTWdyOiBEZWZhdWx0TG9naW5NZ3IsXG4gICkge1xuXG4gICAgdGhpcy5sb2dpbk1nci5nZXRMb2dpbkluZm8oKS5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgIGlmIChpbmZvLkFwcFVzZU1vZGUgJiYgaW5mby5BcHBVc2VNb2RlLmxlbmd0aCA+IDApXG4gICAgICAgIHRoaXMuX3JvbGUgPSBpbmZvLkFwcFVzZU1vZGVbaW5mby5BcHBVc2VNb2RlLmxlbmd0aCAtIDFdO1xuICAgIH0pXG4gIH1cblxuXG5cblxuXG4gIHRyYW5zbGF0ZVByaWNlKHZhbHVlOiBhbnkpOnN0cmluZyB7XG4gICAgbGV0IGlzQ0FPb3JaT05FSEVBRCA9ICh0aGlzLl9yb2xlID09ICdNYW5hZ2VyJyB8fCB0aGlzLl9yb2xlID09ICdTdXBlcnZpc29yJyk7XG4gICAgbGV0IGlzVmFsdWVMZWdhbCA9ICFpc05hTihOdW1iZXIodmFsdWUpKTtcbiAgICBpZiAoaXNWYWx1ZUxlZ2FsKSB7XG4gICAgICByZXR1cm4gaXNDQU9vclpPTkVIRUFEID8gdGhpcy5fbnVtYmVyVG9GaXgodmFsdWUgLyB0aGlzLl9taWxsaW9uLCAxKSA6IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9udW1iZXJUb0ZpeChuOiBudW1iZXIsIHRvRml4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBwb3dOdW0gPSBNYXRoLnBvdygxMCx0b0ZpeCk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobipwb3dOdW0pL3Bvd051bTtcbiAgfVxuXG5cblxuXG5cblxufVxuIl19