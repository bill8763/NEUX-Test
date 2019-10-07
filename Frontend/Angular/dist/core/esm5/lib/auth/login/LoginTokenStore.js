/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
var LoginTokenStore = /** @class */ (function () {
    function LoginTokenStore() {
        this.token = '';
        this.tokenSubject = new BehaviorSubject(this.token);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    LoginTokenStore.prototype.setToken = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        this.token = token;
        this.tokenSubject.next(this.token);
    };
    /**
     * @return {?}
     */
    LoginTokenStore.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.tokenSubject.asObservable();
    };
    LoginTokenStore.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LoginTokenStore.ctorParameters = function () { return []; };
    /** @nocollapse */ LoginTokenStore.ngInjectableDef = i0.defineInjectable({ factory: function LoginTokenStore_Factory() { return new LoginTokenStore(); }, token: LoginTokenStore, providedIn: "root" });
    return LoginTokenStore;
}());
export { LoginTokenStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginTokenStore.prototype.token;
    /**
     * @type {?}
     * @private
     */
    LoginTokenStore.prototype.tokenSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Ub2tlblN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2xvZ2luL0xvZ2luVG9rZW5TdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVcsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUU1RDtJQU9JO1FBRlEsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGlCQUFZLEdBQW9CLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVqQixrQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDOztnQkFoQkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OzswQkFMRDtDQW9CQyxBQWpCRCxJQWlCQztTQWRZLGVBQWU7Ozs7OztJQUV4QixnQ0FBbUI7Ozs7O0lBQ25CLHVDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpblRva2VuU3RvcmUge1xuXG4gICAgcHJpdmF0ZSB0b2tlbiA9ICcnO1xuICAgIHByaXZhdGUgdG9rZW5TdWJqZWN0OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMudG9rZW4pO1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzZXRUb2tlbih0b2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy50b2tlblN1YmplY3QubmV4dCh0aGlzLnRva2VuKTtcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlblN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxufSJdfQ==