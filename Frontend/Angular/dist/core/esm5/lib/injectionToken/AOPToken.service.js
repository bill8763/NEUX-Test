/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var AOPTokenService = /** @class */ (function () {
    function AOPTokenService() {
        this.tokenMap = new Map();
    }
    /**
     * @param {?} name
     * @param {?} token
     * @return {?}
     */
    AOPTokenService.prototype.registerToken = /**
     * @param {?} name
     * @param {?} token
     * @return {?}
     */
    function (name, token) {
        this.tokenMap.set(name, token);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    AOPTokenService.prototype.getToken = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.tokenMap.get(name);
    };
    AOPTokenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AOPTokenService.ctorParameters = function () { return []; };
    /** @nocollapse */ AOPTokenService.ngInjectableDef = i0.defineInjectable({ factory: function AOPTokenService_Factory() { return new AOPTokenService(); }, token: AOPTokenService, providedIn: "root" });
    return AOPTokenService;
}());
export { AOPTokenService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AOPTokenService.prototype.tokenMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQU9QVG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaW5qZWN0aW9uVG9rZW4vQU9QVG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBRTNEO0lBS0k7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsdUNBQWE7Ozs7O0lBQWIsVUFBYyxJQUFZLEVBQUUsS0FBMEI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLElBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFmSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7OzBCQUpEO0NBa0JDLEFBaEJELElBZ0JDO1NBYlksZUFBZTs7Ozs7O0lBQ3hCLG1DQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBT1BUb2tlblNlcnZpY2Uge1xuICAgIHByaXZhdGUgdG9rZW5NYXA6IE1hcDxzdHJpbmcsIEluamVjdGlvblRva2VuPGFueT4+O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRva2VuTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyVG9rZW4obmFtZTogc3RyaW5nLCB0b2tlbjogSW5qZWN0aW9uVG9rZW48YW55Pikge1xuICAgICAgICB0aGlzLnRva2VuTWFwLnNldChuYW1lLCB0b2tlbik7XG4gICAgfVxuXG4gICAgZ2V0VG9rZW4obmFtZTogc3RyaW5nKTogSW5qZWN0aW9uVG9rZW48YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuTWFwLmdldChuYW1lKTtcbiAgICB9XG59Il19