/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class AOPTokenService {
    constructor() {
        this.tokenMap = new Map();
    }
    /**
     * @param {?} name
     * @param {?} token
     * @return {?}
     */
    registerToken(name, token) {
        this.tokenMap.set(name, token);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getToken(name) {
        return this.tokenMap.get(name);
    }
}
AOPTokenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AOPTokenService.ctorParameters = () => [];
/** @nocollapse */ AOPTokenService.ngInjectableDef = i0.defineInjectable({ factory: function AOPTokenService_Factory() { return new AOPTokenService(); }, token: AOPTokenService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AOPTokenService.prototype.tokenMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQU9QVG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaW5qZWN0aW9uVG9rZW4vQU9QVG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBSzNELE1BQU07SUFFRjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBWSxFQUFFLEtBQTBCO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBZkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7Ozs7Ozs7SUFFRyxtQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQU9QVG9rZW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHRva2VuTWFwOiBNYXA8c3RyaW5nLCBJbmplY3Rpb25Ub2tlbjxhbnk+PjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2tlbk1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlclRva2VuKG5hbWU6IHN0cmluZywgdG9rZW46IEluamVjdGlvblRva2VuPGFueT4pIHtcbiAgICAgICAgdGhpcy50b2tlbk1hcC5zZXQobmFtZSwgdG9rZW4pO1xuICAgIH1cblxuICAgIGdldFRva2VuKG5hbWU6IHN0cmluZyk6IEluamVjdGlvblRva2VuPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbk1hcC5nZXQobmFtZSk7XG4gICAgfVxufSJdfQ==