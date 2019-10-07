/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from "@angular/core";
import { Router, NavigationEnd, RouteReuseStrategy } from "@angular/router";
import { APIFactory } from "../api/APIFactory";
import { APIDispatch } from "../api/APIDispatch";
import { RouteUtils } from "../utils/routeUtils";
import * as i0 from "@angular/core";
import * as i1 from "../api/APIFactory";
import * as i2 from "../api/APIDispatch";
import * as i3 from "@angular/router";
var AppRouter = /** @class */ (function () {
    function AppRouter(injector, APIFactory, dispatcher, routeReuseStrategy) {
        this.injector = injector;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.routeReuseStrategy = routeReuseStrategy;
        this.routeMap = {};
        this.currentMenuObject = null;
        this.previousUrl = null;
        this.currentUrl = null;
    }
    /**
     * @return {?}
     */
    AppRouter.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //call api to get route map
        /** @type {?} */
        var routerMapAPI = this.APIFactory.getAPI("getRouterMap");
        if (routerMapAPI) {
            this.dispatcher.dispatch(routerMapAPI).subscribe((/**
             * @param {?} map
             * @return {?}
             */
            function (map) {
                console.log("routeMapAPI:", map);
                _this.routeMap = RouteUtils.convertJsonToRouterMap(map);
                console.log("router map:", _this.routeMap);
            }));
        }
        this.listenRouterEvent();
    };
    /**
     * @param {?} func
     * @param {...?} extras
     * @return {?}
     */
    AppRouter.prototype.navigate = /**
     * @param {?} func
     * @param {...?} extras
     * @return {?}
     */
    function (func) {
        var extras = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            extras[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var router = this.injector.get(Router);
        console.log("navigate:", router, func, this.routeMap[func].Path);
        if (router && this.routeMap[func]) {
            if (((/** @type {?} */ (window))).FirebasePlugin)
                ((/** @type {?} */ (window))).FirebasePlugin.setScreenName(this.routeMap[func].Function);
            // this.currentFunction = this.routeMap[func].Function;
            if (extras)
                router.navigate(tslib_1.__spread([this.routeMap[func].Path], extras));
            else
                router.navigate([this.routeMap[func].Path]);
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    AppRouter.prototype.getUrl = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.routeMap[page] ? this.routeMap[page].Path : '';
    };
    /**
     * @return {?}
     */
    AppRouter.prototype.getCurrentFunction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var filtered = Object.keys(this.routeMap).filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return router.isActive(_this.routeMap[x].Path, false); }))
            .map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.routeMap[x].Function; }));
        if (filtered.length > 0) {
            return filtered[0];
        }
        else {
            return "Not Found";
        }
    };
    /**
     * @return {?}
     */
    AppRouter.prototype.getRouteMap = /**
     * @return {?}
     */
    function () {
        return this.routeMap;
    };
    /**
     * @param {?=} clearCache
     * @return {?}
     */
    AppRouter.prototype.back = /**
     * @param {?=} clearCache
     * @return {?}
     */
    function (clearCache) {
        if (clearCache === void 0) { clearCache = true; }
        console.log("router back to:", this.previousUrl);
        if (this.previousUrl) {
            if (clearCache && this.routeReuseStrategy["deleteRouteSnapshot"]) {
                ((/** @type {?} */ (this.routeReuseStrategy))).deleteRouteSnapshot();
            }
            /** @type {?} */
            var router = this.injector.get(Router);
            router.navigate([this.previousUrl]);
        }
    };
    /**
     * @return {?}
     */
    AppRouter.prototype.getCurrentMenuObject = /**
     * @return {?}
     */
    function () {
        return this.currentMenuObject;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AppRouter.prototype.setCurrentMenuObject = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.currentMenuObject = val;
    };
    /**
     * @private
     * @return {?}
     */
    AppRouter.prototype.listenRouterEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var router = this.injector.get(Router);
        router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
            ;
        }));
    };
    AppRouter.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    AppRouter.ctorParameters = function () { return [
        { type: Injector },
        { type: APIFactory },
        { type: APIDispatch },
        { type: RouteReuseStrategy }
    ]; };
    /** @nocollapse */ AppRouter.ngInjectableDef = i0.defineInjectable({ factory: function AppRouter_Factory() { return new AppRouter(i0.inject(i0.INJECTOR), i0.inject(i1.APIFactory), i0.inject(i2.APIDispatch), i0.inject(i3.RouteReuseStrategy)); }, token: AppRouter, providedIn: "root" });
    return AppRouter;
}());
export { AppRouter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.routeMap;
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.currentMenuObject;
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.previousUrl;
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.currentUrl;
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    AppRouter.prototype.routeReuseStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwUm91dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9yb3V0ZS9BcHBSb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUdqRDtJQVVJLG1CQUNZLFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLFVBQXVCLEVBQ3ZCLGtCQUFzQztRQUh0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVDFDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQVEsSUFBSSxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBVyxJQUFJLENBQUM7SUFRbEMsQ0FBQzs7OztJQUVNLHdCQUFJOzs7SUFBWDtRQUFBLGlCQVdDOzs7WUFUTyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ3pELElBQUksWUFBWSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsR0FBRztnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxD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LCtCQUFrQzs7Ozs7SUFHOUIsNkJBQTBCOzs7OztJQUMxQiwrQkFBOEI7Ozs7O0lBQzlCLCtCQUErQjs7Ozs7SUFDL0IsdUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gXCIuLi9hcGkvQVBJRmFjdG9yeVwiO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tIFwiLi4vYXBpL0FQSURpc3BhdGNoXCI7XG5pbXBvcnQgeyBSb3V0ZVV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL3JvdXRlVXRpbHNcIjtcbmltcG9ydCB7IEN1c3RvbVJvdXRlclJldXNlU3RyYXRlZ3kgfSBmcm9tIFwiLi9jdXN0b21Sb3V0ZXJSZXVzZVN0cmF0ZWd5XCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0ZXIge1xuXG4gICAgcHJpdmF0ZSByb3V0ZU1hcDogT2JqZWN0ID0ge307XG4gICAgcHJpdmF0ZSBjdXJyZW50TWVudU9iamVjdDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudFVybDogc3RyaW5nID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgICAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgICAgICBwcml2YXRlIHJvdXRlUmV1c2VTdHJhdGVneTogUm91dGVSZXVzZVN0cmF0ZWd5XG4gICAgKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIC8vY2FsbCBhcGkgdG8gZ2V0IHJvdXRlIG1hcFxuICAgICAgICBsZXQgcm91dGVyTWFwQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldFJvdXRlck1hcFwiKTtcbiAgICAgICAgaWYgKHJvdXRlck1hcEFQSSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHJvdXRlck1hcEFQSSkuc3Vic2NyaWJlKChtYXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlTWFwQVBJOlwiLCBtYXApO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVNYXAgPSBSb3V0ZVV0aWxzLmNvbnZlcnRKc29uVG9Sb3V0ZXJNYXAobWFwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlciBtYXA6XCIsIHRoaXMucm91dGVNYXApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlblJvdXRlckV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlKGZ1bmM6IHN0cmluZywgLi4uZXh0cmFzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIGxldCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlOlwiLCByb3V0ZXIsIGZ1bmMsIHRoaXMucm91dGVNYXBbZnVuY10uUGF0aCk7XG4gICAgICAgIGlmIChyb3V0ZXIgJiYgdGhpcy5yb3V0ZU1hcFtmdW5jXSkge1xuICAgICAgICAgICAgaWYgKCg8YW55PndpbmRvdykuRmlyZWJhc2VQbHVnaW4pXG4gICAgICAgICAgICAgICAgKDxhbnk+d2luZG93KS5GaXJlYmFzZVBsdWdpbi5zZXRTY3JlZW5OYW1lKHRoaXMucm91dGVNYXBbZnVuY10uRnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50RnVuY3Rpb24gPSB0aGlzLnJvdXRlTWFwW2Z1bmNdLkZ1bmN0aW9uO1xuICAgICAgICAgICAgaWYgKGV4dHJhcylcbiAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW3RoaXMucm91dGVNYXBbZnVuY10uUGF0aCwgLi4uZXh0cmFzXSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFt0aGlzLnJvdXRlTWFwW2Z1bmNdLlBhdGhdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVcmwocGFnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlTWFwW3BhZ2VdID8gdGhpcy5yb3V0ZU1hcFtwYWdlXS5QYXRoIDogJyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEN1cnJlbnRGdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IE9iamVjdC5rZXlzKHRoaXMucm91dGVNYXApLmZpbHRlcih4ID0+IHJvdXRlci5pc0FjdGl2ZSh0aGlzLnJvdXRlTWFwW3hdLlBhdGgsIGZhbHNlKSlcbiAgICAgICAgICAgIC5tYXAoeCA9PiB0aGlzLnJvdXRlTWFwW3hdLkZ1bmN0aW9uKTtcbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIk5vdCBGb3VuZFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXRSb3V0ZU1hcCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZU1hcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmFjayhjbGVhckNhY2hlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlciBiYWNrIHRvOlwiLCB0aGlzLnByZXZpb3VzVXJsKTtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNVcmwpIHtcbiAgICAgICAgICAgIGlmIChjbGVhckNhY2hlICYmIHRoaXMucm91dGVSZXVzZVN0cmF0ZWd5W1wiZGVsZXRlUm91dGVTbmFwc2hvdFwiXSkge1xuICAgICAgICAgICAgICAgICg8Q3VzdG9tUm91dGVyUmV1c2VTdHJhdGVneT50aGlzLnJvdXRlUmV1c2VTdHJhdGVneSkuZGVsZXRlUm91dGVTbmFwc2hvdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoW3RoaXMucHJldmlvdXNVcmxdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDdXJyZW50TWVudU9iamVjdCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWVudU9iamVjdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q3VycmVudE1lbnVPYmplY3QodmFsOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWVudU9iamVjdCA9IHZhbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlblJvdXRlckV2ZW50KCkge1xuICAgICAgICBsZXQgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNVcmwgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gZXZlbnQudXJsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19