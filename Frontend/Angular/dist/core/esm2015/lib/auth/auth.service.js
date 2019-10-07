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
export class AuthService {
    /**
     * @param {?} checkPermissionService
     * @param {?} actionService
     * @param {?} customAuthAction
     * @param {?} customAuthRoute
     */
    constructor(checkPermissionService, actionService, customAuthAction, customAuthRoute) {
        this.checkPermissionService = checkPermissionService;
        this.actionService = actionService;
        this.customAuthAction = customAuthAction;
        this.customAuthRoute = customAuthRoute;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    authRoute(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let result = of(new AuthObject(data)).pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.checkPermissionService.authRoute(x))));
            if (this.customAuthRoute) {
                result.pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => this.customAuthRoute.authRoute(x))));
            }
            return result.pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => { return { status: x.status, error: x.error }; }))).toPromise();
        });
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    authAction(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let result = of(new AuthObject(payload)).pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.actionService.authAction(x))));
            if (this.customAuthAction) {
                result.pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => this.customAuthAction.authAction(x))));
            }
            return result.pipe(map((/**
             * @param {?} x
             * @return {?}
             */
            x => { return { status: x.status, error: x.error }; }))).toPromise();
        });
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AuthService.ctorParameters = () => [
    { type: CheckPermissionService },
    { type: ActionService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [authActionToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [authRouteToken,] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.CheckPermissionService), i0.inject(i2.ActionService), i0.inject(i3.authActionToken, 8), i0.inject(i3.authRouteToken, 8)); }, token: AuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU9wRSxNQUFNOzs7Ozs7O0lBRUosWUFDVSxzQkFBOEMsRUFDOUMsYUFBNEIsRUFDUyxnQkFBNkIsRUFDOUIsZUFBMkI7UUFIL0QsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBYTtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBWTtJQUNyRSxDQUFDOzs7OztJQUVDLFNBQVMsQ0FBQyxJQUFJOzs7Z0JBQ2QsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUNuRDtZQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FDVCxHQUFHOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FDNUMsQ0FBQTthQUNGO1lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBQyxDQUMxRCxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLENBQUM7S0FBQTs7Ozs7SUFFSyxVQUFVLENBQUMsT0FBTzs7O2dCQUNsQixNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUMzQztZQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUNULEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQzlDLENBQUM7YUFDSDtZQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUMsQ0FDMUQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoQixDQUFDO0tBQUE7OztZQXZDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVJRLHNCQUFzQjtZQUN0QixhQUFhOzRDQWFqQixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7NENBQ2xDLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7Ozs7Ozs7SUFIbEMsNkNBQXNEOzs7OztJQUN0RCxvQ0FBb0M7Ozs7O0lBQ3BDLHVDQUEwRTs7Ozs7SUFDMUUsc0NBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aE9iamVjdCB9IGZyb20gJy4vQXV0aE9iamVjdCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tQZXJtaXNzaW9uU2VydmljZSB9IGZyb20gJy4vcGVybWlzc2lvbi9jaGVjay1wZXJtaXNzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4vYWN0aW9uL2FjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IGF1dGhBY3Rpb25Ub2tlbiwgYXV0aFJvdXRlVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBJQXV0aEFjdGlvbiB9IGZyb20gJy4vQXV0aEFjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUF1dGhSb3V0ZSB9IGZyb20gJy4vQXV0aFJvdXRlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrUGVybWlzc2lvblNlcnZpY2U6IENoZWNrUGVybWlzc2lvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoYXV0aEFjdGlvblRva2VuKSBwcml2YXRlIGN1c3RvbUF1dGhBY3Rpb246IElBdXRoQWN0aW9uLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoYXV0aFJvdXRlVG9rZW4pIHByaXZhdGUgY3VzdG9tQXV0aFJvdXRlOiBJQXV0aFJvdXRlLFxuICApIHsgfVxuXG4gIGFzeW5jIGF1dGhSb3V0ZShkYXRhKSB7XG4gICAgbGV0IHJlc3VsdCA9IG9mKG5ldyBBdXRoT2JqZWN0KGRhdGEpKS5waXBlKFxuICAgICAgbWFwKHggPT4gdGhpcy5jaGVja1Blcm1pc3Npb25TZXJ2aWNlLmF1dGhSb3V0ZSh4KSlcbiAgICApO1xuICAgIGlmICh0aGlzLmN1c3RvbUF1dGhSb3V0ZSkge1xuICAgICAgcmVzdWx0LnBpcGUoXG4gICAgICAgIG1hcCh4ID0+IHRoaXMuY3VzdG9tQXV0aFJvdXRlLmF1dGhSb3V0ZSh4KSlcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5waXBlKFxuICAgICAgbWFwKHggPT4geyByZXR1cm4geyBzdGF0dXM6IHguc3RhdHVzLCBlcnJvcjogeC5lcnJvciB9IH0pXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIGF1dGhBY3Rpb24ocGF5bG9hZCkge1xuICAgIGxldCByZXN1bHQgPSBvZihuZXcgQXV0aE9iamVjdChwYXlsb2FkKSkucGlwZShcbiAgICAgIG1hcCh4ID0+IHRoaXMuYWN0aW9uU2VydmljZS5hdXRoQWN0aW9uKHgpKVxuICAgICk7XG4gICAgaWYgKHRoaXMuY3VzdG9tQXV0aEFjdGlvbikge1xuICAgICAgcmVzdWx0LnBpcGUoXG4gICAgICAgIG1hcCh4ID0+IHRoaXMuY3VzdG9tQXV0aEFjdGlvbi5hdXRoQWN0aW9uKHgpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5waXBlKFxuICAgICAgbWFwKHggPT4geyByZXR1cm4geyBzdGF0dXM6IHguc3RhdHVzLCBlcnJvcjogeC5lcnJvciB9IH0pXG4gICAgKS50b1Byb21pc2UoKTtcblxuICB9XG59XG4iXX0=