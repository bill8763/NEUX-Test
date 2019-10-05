/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject, Injector } from '@angular/core';
import { AuthError } from '../AuthObject';
import { checkPermissionToken } from '../../injectionToken';
import { DefaultLoginMgr } from '../login/DefaultLoginMgr';
import { APIFactory } from "../../api/APIFactory";
import { APIDispatch } from '../../api/APIDispatch';
import { RouteUtils } from '../../utils/routeUtils';
import * as i0 from "@angular/core";
import * as i1 from "../login/DefaultLoginMgr";
import * as i2 from "../../injectionToken/injection-token";
var CheckPermissionService = /** @class */ (function () {
    function CheckPermissionService(injector, loginMgr, permissionCheck) {
        this.injector = injector;
        this.loginMgr = loginMgr;
        this.permissionCheck = permissionCheck;
        this.permissionMap = {};
        this.userRole = [];
    }
    /**
     * @return {?}
     */
    CheckPermissionService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('init check permission service');
        if (!this.permissionCheck) {
            this.loadJson();
            this.loginMgr.getLoginInfo().subscribe((/**
             * @param {?} info
             * @return {?}
             */
            function (info) {
                console.log('check permission subscribe:', info);
                if (info)
                    _this.userRole = info.AppUseMode;
            }));
        }
        else
            this.permissionCheck.init();
    };
    /**
     * @private
     * @return {?}
     */
    CheckPermissionService.prototype.loadJson = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        //call api to get route map
        /** @type {?} */
        var apiFactory = this.injector.get(APIFactory);
        /** @type {?} */
        var apiDispatcher = this.injector.get(APIDispatch);
        if (apiFactory && apiDispatcher) {
            /** @type {?} */
            var routerMapAPI = apiFactory.getAPI("getRouterMap");
            if (routerMapAPI) {
                apiDispatcher.dispatch(routerMapAPI).subscribe((/**
                 * @param {?} map
                 * @return {?}
                 */
                function (map) {
                    _this.permissionMap = RouteUtils.convertJsonToRouterMap(map);
                    console.log("page permission map:", _this.permissionMap);
                }));
            }
        }
        else {
            console.log("Check-permission init error: apiFactory or Dispatcher not found.");
        }
    };
    /**
     * @param {?} authObj
     * @return {?}
     */
    CheckPermissionService.prototype.authRoute = /**
     * @param {?} authObj
     * @return {?}
     */
    function (authObj) {
        if (!authObj.status)
            return authObj;
        /** @type {?} */
        var pageId = authObj.payload.func;
        console.log(this.permissionMap);
        if (pageId in Object.keys(this.permissionMap)) {
            authObj.status = this.checkPagePermission(pageId);
            if (!authObj.status) {
                authObj.error = AuthError.PERMISSION_DENIED;
            }
        }
        return authObj;
    };
    /**
     * @param {?} menuList
     * @return {?}
     */
    CheckPermissionService.prototype.authMenu = /**
     * @param {?} menuList
     * @return {?}
     */
    function (menuList) {
        var _this = this;
        if (this.permissionCheck) {
            return this.permissionCheck.checkMenuPermission(menuList, this.userRole);
        }
        else {
            //default permission check
            console.log("check menu permission:", menuList, this.permissionMap);
            return menuList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                if (Object.keys(_this.permissionMap).includes(x)) {
                    return _this.checkPagePermission(x);
                }
                else
                    return true;
            }));
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CheckPermissionService.prototype.checkPagePermission = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        if (this.permissionCheck)
            return this.permissionCheck.checkPagePermission(name, this.userRole);
        else
            return this.userRole
                .map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return !_this.permissionMap[name]["Role"] || (_this.permissionMap[name]["Role"].indexOf(x) > -1); }))
                .reduce((/**
             * @param {?} acc
             * @param {?} current
             * @return {?}
             */
            function (acc, current) { return acc || current; }), false);
    };
    CheckPermissionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CheckPermissionService.ctorParameters = function () { return [
        { type: Injector },
        { type: DefaultLoginMgr },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [checkPermissionToken,] }] }
    ]; };
    /** @nocollapse */ CheckPermissionService.ngInjectableDef = i0.defineInjectable({ factory: function CheckPermissionService_Factory() { return new CheckPermissionService(i0.inject(i0.INJECTOR), i0.inject(i1.DefaultLoginMgr), i0.inject(i2.checkPermissionToken, 8)); }, token: CheckPermissionService, providedIn: "root" });
    return CheckPermissionService;
}());
export { CheckPermissionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckPermissionService.prototype.permissionMap;
    /**
     * @type {?}
     * @private
     */
    CheckPermissionService.prototype.userRole;
    /**
     * @type {?}
     * @private
     */
    CheckPermissionService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    CheckPermissionService.prototype.loginMgr;
    /**
     * @type {?}
     * @private
     */
    CheckPermissionService.prototype.permissionCheck;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stcGVybWlzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL3Blcm1pc3Npb24vY2hlY2stcGVybWlzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRXBEO0lBT0UsZ0NBQ1UsUUFBa0IsRUFDbEIsUUFBeUIsRUFDaUIsZUFBZ0M7UUFGMUUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUNpQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMNUUsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQU90QixDQUFDOzs7O0lBRUQscUNBQUk7OztJQUFKO1FBQUEsaUJBY0M7UUFiQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBZTtnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakQsSUFBSSxJQUFJO29CQUNOLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQTtTQUNIOztZQUVDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFHaEMsQ0FBQzs7Ozs7SUFFTyx5Q0FBUTs7OztJQUFoQjtRQUFBLGlCQWdCQzs7O1lBZEssVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzs7WUFDMUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLFVBQVUsSUFBSSxhQUFhLEVBQUU7O2dCQUMzQixZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDcEQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLGFBQWEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLEdBQUc7b0JBQ2pELEtBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxFQUFDLENBQUE7YUFDSDtTQUNGO2FBQ0k7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDakY7SUFDSCxDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxPQUFtQjtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDakIsT0FBTyxPQUFPLENBQUM7O1lBRWIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUM7YUFDN0M7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLFFBQXVCO1FBQWhDLGlCQWNDO1FBYkMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFFO2FBQ0k7WUFDSCwwQkFBMEI7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sUUFBUSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLENBQUM7Z0JBQ3RCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQyxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEM7O29CQUNJLE9BQU8sSUFBSSxDQUFDO1lBQ25CLENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVNLG9EQUFtQjs7OztJQUExQixVQUEyQixJQUFZO1FBQXZDLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN0QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFckUsT0FBTyxJQUFJLENBQUMsUUFBUTtpQkFDakIsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBdkYsQ0FBdUYsRUFBQztpQkFDakcsTUFBTTs7Ozs7WUFBQyxVQUFDLEdBQUcsRUFBRSxPQUFPLElBQUssT0FBQSxHQUFHLElBQUksT0FBTyxFQUFkLENBQWMsR0FBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkF2RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQWZzQyxRQUFRO2dCQVF0QyxlQUFlO2dEQWVuQixRQUFRLFlBQUksTUFBTSxTQUFDLG9CQUFvQjs7O2lDQXZCNUM7Q0FzR0MsQUF6RkQsSUF5RkM7U0F0Rlksc0JBQXNCOzs7Ozs7SUFFakMsK0NBQTJCOzs7OztJQUMzQiwwQ0FBc0I7Ozs7O0lBRXBCLDBDQUEwQjs7Ozs7SUFDMUIsMENBQWlDOzs7OztJQUNqQyxpREFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUF1dGhSb3V0ZSB9IGZyb20gJy4uL0F1dGhSb3V0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUF1dGhBY3Rpb24gfSBmcm9tICcuLi9BdXRoQWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoT2JqZWN0LCBBdXRoRXJyb3IgfSBmcm9tICcuLi9BdXRoT2JqZWN0JztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjaGVja1Blcm1pc3Npb24gfSBmcm9tICcuL2NoZWNrUGVybWlzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgY2hlY2tQZXJtaXNzaW9uVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbic7XG5pbXBvcnQgeyBMb2dpbkluZm8gfSBmcm9tICcuLi9sb2dpbi9Mb2dpbkluZm8nO1xuaW1wb3J0IHsgRGVmYXVsdExvZ2luTWdyIH0gZnJvbSAnLi4vbG9naW4vRGVmYXVsdExvZ2luTWdyJztcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vYXBpL0FQSURpc3BhdGNoJztcbmltcG9ydCB7IFJvdXRlVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9yb3V0ZVV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tQZXJtaXNzaW9uU2VydmljZSBpbXBsZW1lbnRzIElBdXRoUm91dGUge1xuXG4gIHByaXZhdGUgcGVybWlzc2lvbk1hcCA9IHt9O1xuICBwcml2YXRlIHVzZXJSb2xlID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgbG9naW5NZ3I6IERlZmF1bHRMb2dpbk1ncixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGNoZWNrUGVybWlzc2lvblRva2VuKSBwcml2YXRlIHBlcm1pc3Npb25DaGVjazogY2hlY2tQZXJtaXNzaW9uXG4gICkge1xuXG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdpbml0IGNoZWNrIHBlcm1pc3Npb24gc2VydmljZScpO1xuICAgIGlmICghdGhpcy5wZXJtaXNzaW9uQ2hlY2spIHtcbiAgICAgIHRoaXMubG9hZEpzb24oKTtcbiAgICAgIHRoaXMubG9naW5NZ3IuZ2V0TG9naW5JbmZvKCkuc3Vic2NyaWJlKChpbmZvOiBMb2dpbkluZm8pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrIHBlcm1pc3Npb24gc3Vic2NyaWJlOicsIGluZm8pO1xuICAgICAgICBpZiAoaW5mbylcbiAgICAgICAgICB0aGlzLnVzZXJSb2xlID0gaW5mby5BcHBVc2VNb2RlO1xuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZVxuICAgICAgdGhpcy5wZXJtaXNzaW9uQ2hlY2suaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEpzb24oKSB7XG4gICAgLy9jYWxsIGFwaSB0byBnZXQgcm91dGUgbWFwXG4gICAgbGV0IGFwaUZhY3RvcnkgPSB0aGlzLmluamVjdG9yLmdldChBUElGYWN0b3J5KTtcbiAgICBsZXQgYXBpRGlzcGF0Y2hlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFQSURpc3BhdGNoKVxuICAgIGlmIChhcGlGYWN0b3J5ICYmIGFwaURpc3BhdGNoZXIpIHtcbiAgICAgIGxldCByb3V0ZXJNYXBBUEkgPSBhcGlGYWN0b3J5LmdldEFQSShcImdldFJvdXRlck1hcFwiKTtcbiAgICAgIGlmIChyb3V0ZXJNYXBBUEkpIHtcbiAgICAgICAgYXBpRGlzcGF0Y2hlci5kaXNwYXRjaChyb3V0ZXJNYXBBUEkpLnN1YnNjcmliZSgobWFwKSA9PiB7XG4gICAgICAgICAgdGhpcy5wZXJtaXNzaW9uTWFwID0gUm91dGVVdGlscy5jb252ZXJ0SnNvblRvUm91dGVyTWFwKG1hcCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwYWdlIHBlcm1pc3Npb24gbWFwOlwiLCB0aGlzLnBlcm1pc3Npb25NYXApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2stcGVybWlzc2lvbiBpbml0IGVycm9yOiBhcGlGYWN0b3J5IG9yIERpc3BhdGNoZXIgbm90IGZvdW5kLlwiKTtcbiAgICB9XG4gIH1cblxuICBhdXRoUm91dGUoYXV0aE9iajogQXV0aE9iamVjdCkge1xuICAgIGlmICghYXV0aE9iai5zdGF0dXMpXG4gICAgICByZXR1cm4gYXV0aE9iajtcblxuICAgIGxldCBwYWdlSWQgPSBhdXRoT2JqLnBheWxvYWQuZnVuYztcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBlcm1pc3Npb25NYXApO1xuICAgIGlmIChwYWdlSWQgaW4gT2JqZWN0LmtleXModGhpcy5wZXJtaXNzaW9uTWFwKSkge1xuICAgICAgYXV0aE9iai5zdGF0dXMgPSB0aGlzLmNoZWNrUGFnZVBlcm1pc3Npb24ocGFnZUlkKVxuICAgICAgaWYgKCFhdXRoT2JqLnN0YXR1cykge1xuICAgICAgICBhdXRoT2JqLmVycm9yID0gQXV0aEVycm9yLlBFUk1JU1NJT05fREVOSUVEO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXV0aE9iajtcbiAgfVxuXG4gIGF1dGhNZW51KG1lbnVMaXN0OiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgaWYgKHRoaXMucGVybWlzc2lvbkNoZWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9uQ2hlY2suY2hlY2tNZW51UGVybWlzc2lvbihtZW51TGlzdCwgdGhpcy51c2VyUm9sZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9kZWZhdWx0IHBlcm1pc3Npb24gY2hlY2tcbiAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgbWVudSBwZXJtaXNzaW9uOlwiLCBtZW51TGlzdCwgdGhpcy5wZXJtaXNzaW9uTWFwKTtcbiAgICAgIHJldHVybiBtZW51TGlzdC5maWx0ZXIoeCA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnBlcm1pc3Npb25NYXApLmluY2x1ZGVzKHgpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tQYWdlUGVybWlzc2lvbih4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hlY2tQYWdlUGVybWlzc2lvbihuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5wZXJtaXNzaW9uQ2hlY2spXG4gICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9uQ2hlY2suY2hlY2tQYWdlUGVybWlzc2lvbihuYW1lLCB0aGlzLnVzZXJSb2xlKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gdGhpcy51c2VyUm9sZVxuICAgICAgICAubWFwKHggPT4gIXRoaXMucGVybWlzc2lvbk1hcFtuYW1lXVtcIlJvbGVcIl0gfHwgKHRoaXMucGVybWlzc2lvbk1hcFtuYW1lXVtcIlJvbGVcIl0uaW5kZXhPZih4KSA+IC0xKSlcbiAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiBhY2MgfHwgY3VycmVudCwgZmFsc2UpO1xuICB9XG5cbn1cbiJdfQ==