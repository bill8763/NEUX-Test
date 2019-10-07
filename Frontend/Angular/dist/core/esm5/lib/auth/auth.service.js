/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { AuthObject } from './AuthObject';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckPermissionService } from './permission/check-permission.service';
import { ActionService } from './action/action.service';
import { authActionToken, authRouteToken } from '../injectionToken';
import * as i0 from "@angular/core";
import * as i1 from "./permission/check-permission.service";
import * as i2 from "./action/action.service";
import * as i3 from "../injectionToken/injection-token";
var AuthService = /** @class */ (function () {
    function AuthService(checkPermissionService, actionService, customAuthAction, customAuthRoute) {
        this.checkPermissionService = checkPermissionService;
        this.actionService = actionService;
        this.customAuthAction = customAuthAction;
        this.customAuthRoute = customAuthRoute;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    AuthService.prototype.authRoute = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                result = of(new AuthObject(data)).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return _this.checkPermissionService.authRoute(x); })));
                if (this.customAuthRoute) {
                    result.pipe(map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return _this.customAuthRoute.authRoute(x); })));
                }
                return [2 /*return*/, result.pipe(map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return { status: x.status, error: x.error }; }))).toPromise()];
            });
        });
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AuthService.prototype.authAction = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                result = of(new AuthObject(payload)).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return _this.actionService.authAction(x); })));
                if (this.customAuthAction) {
                    result.pipe(map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return _this.customAuthAction.authAction(x); })));
                }
                return [2 /*return*/, result.pipe(map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return { status: x.status, error: x.error }; }))).toPromise()];
            });
        });
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AuthService.ctorParameters = function () { return [
        { type: CheckPermissionService },
        { type: ActionService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [authActionToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [authRouteToken,] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.CheckPermissionService), i0.inject(i2.ActionService), i0.inject(i3.authActionToken, 8), i0.inject(i3.authRouteToken, 8)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.checkPermissionService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.actionService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.customAuthAction;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.customAuthRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQUlwRTtJQUtFLHFCQUNVLHNCQUE4QyxFQUM5QyxhQUE0QixFQUNTLGdCQUE2QixFQUM5QixlQUEyQjtRQUgvRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ1MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFhO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFZO0lBQ3JFLENBQUM7Ozs7O0lBRUMsK0JBQVM7Ozs7SUFBZixVQUFnQixJQUFJOzs7OztnQkFDZCxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN4QyxHQUFHOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUNuRDtnQkFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsR0FBRzs7OztvQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQzVDLENBQUE7aUJBQ0Y7Z0JBQ0Qsc0JBQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsR0FBRzs7OztvQkFBQyxVQUFBLENBQUMsSUFBTSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBQyxDQUMxRCxDQUFDLFNBQVMsRUFBRSxFQUFDOzs7S0FDZjs7Ozs7SUFFSyxnQ0FBVTs7OztJQUFoQixVQUFpQixPQUFPOzs7OztnQkFDbEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRzs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDLENBQzNDO2dCQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUNULEdBQUc7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQzlDLENBQUM7aUJBQ0g7Z0JBQ0Qsc0JBQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsR0FBRzs7OztvQkFBQyxVQUFBLENBQUMsSUFBTSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBQyxDQUMxRCxDQUFDLFNBQVMsRUFBRSxFQUFDOzs7S0FFZjs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFSUSxzQkFBc0I7Z0JBQ3RCLGFBQWE7Z0RBYWpCLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTtnREFDbEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxjQUFjOzs7c0JBbkJ0QztDQWtEQyxBQXhDRCxJQXdDQztTQXJDWSxXQUFXOzs7Ozs7SUFHcEIsNkNBQXNEOzs7OztJQUN0RCxvQ0FBb0M7Ozs7O0lBQ3BDLHVDQUEwRTs7Ozs7SUFDMUUsc0NBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aE9iamVjdCB9IGZyb20gJy4vQXV0aE9iamVjdCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tQZXJtaXNzaW9uU2VydmljZSB9IGZyb20gJy4vcGVybWlzc2lvbi9jaGVjay1wZXJtaXNzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4vYWN0aW9uL2FjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IGF1dGhBY3Rpb25Ub2tlbiwgYXV0aFJvdXRlVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBJQXV0aEFjdGlvbiB9IGZyb20gJy4vQXV0aEFjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUF1dGhSb3V0ZSB9IGZyb20gJy4vQXV0aFJvdXRlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrUGVybWlzc2lvblNlcnZpY2U6IENoZWNrUGVybWlzc2lvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoYXV0aEFjdGlvblRva2VuKSBwcml2YXRlIGN1c3RvbUF1dGhBY3Rpb246IElBdXRoQWN0aW9uLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoYXV0aFJvdXRlVG9rZW4pIHByaXZhdGUgY3VzdG9tQXV0aFJvdXRlOiBJQXV0aFJvdXRlLFxuICApIHsgfVxuXG4gIGFzeW5jIGF1dGhSb3V0ZShkYXRhKSB7XG4gICAgbGV0IHJlc3VsdCA9IG9mKG5ldyBBdXRoT2JqZWN0KGRhdGEpKS5waXBlKFxuICAgICAgbWFwKHggPT4gdGhpcy5jaGVja1Blcm1pc3Npb25TZXJ2aWNlLmF1dGhSb3V0ZSh4KSlcbiAgICApO1xuICAgIGlmICh0aGlzLmN1c3RvbUF1dGhSb3V0ZSkge1xuICAgICAgcmVzdWx0LnBpcGUoXG4gICAgICAgIG1hcCh4ID0+IHRoaXMuY3VzdG9tQXV0aFJvdXRlLmF1dGhSb3V0ZSh4KSlcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5waXBlKFxuICAgICAgbWFwKHggPT4geyByZXR1cm4geyBzdGF0dXM6IHguc3RhdHVzLCBlcnJvcjogeC5lcnJvciB9IH0pXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIGF1dGhBY3Rpb24ocGF5bG9hZCkge1xuICAgIGxldCByZXN1bHQgPSBvZihuZXcgQXV0aE9iamVjdChwYXlsb2FkKSkucGlwZShcbiAgICAgIG1hcCh4ID0+IHRoaXMuYWN0aW9uU2VydmljZS5hdXRoQWN0aW9uKHgpKVxuICAgICk7XG4gICAgaWYgKHRoaXMuY3VzdG9tQXV0aEFjdGlvbikge1xuICAgICAgcmVzdWx0LnBpcGUoXG4gICAgICAgIG1hcCh4ID0+IHRoaXMuY3VzdG9tQXV0aEFjdGlvbi5hdXRoQWN0aW9uKHgpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5waXBlKFxuICAgICAgbWFwKHggPT4geyByZXR1cm4geyBzdGF0dXM6IHguc3RhdHVzLCBlcnJvcjogeC5lcnJvciB9IH0pXG4gICAgKS50b1Byb21pc2UoKTtcblxuICB9XG59XG4iXX0=