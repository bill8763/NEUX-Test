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
export class CheckPermissionService {
    /**
     * @param {?} injector
     * @param {?} loginMgr
     * @param {?} permissionCheck
     */
    constructor(injector, loginMgr, permissionCheck) {
        this.injector = injector;
        this.loginMgr = loginMgr;
        this.permissionCheck = permissionCheck;
        this.permissionMap = {};
        this.userRole = [];
    }
    /**
     * @return {?}
     */
    init() {
        console.log('init check permission service');
        if (!this.permissionCheck) {
            this.loadJson();
            this.loginMgr.getLoginInfo().subscribe((/**
             * @param {?} info
             * @return {?}
             */
            (info) => {
                console.log('check permission subscribe:', info);
                if (info)
                    this.userRole = info.AppUseMode;
            }));
        }
        else
            this.permissionCheck.init();
    }
    /**
     * @private
     * @return {?}
     */
    loadJson() {
        //call api to get route map
        /** @type {?} */
        let apiFactory = this.injector.get(APIFactory);
        /** @type {?} */
        let apiDispatcher = this.injector.get(APIDispatch);
        if (apiFactory && apiDispatcher) {
            /** @type {?} */
            let routerMapAPI = apiFactory.getAPI("getRouterMap");
            if (routerMapAPI) {
                apiDispatcher.dispatch(routerMapAPI).subscribe((/**
                 * @param {?} map
                 * @return {?}
                 */
                (map) => {
                    this.permissionMap = RouteUtils.convertJsonToRouterMap(map);
                    console.log("page permission map:", this.permissionMap);
                }));
            }
        }
        else {
            console.log("Check-permission init error: apiFactory or Dispatcher not found.");
        }
    }
    /**
     * @param {?} authObj
     * @return {?}
     */
    authRoute(authObj) {
        if (!authObj.status)
            return authObj;
        /** @type {?} */
        let pageId = authObj.payload.func;
        console.log(this.permissionMap);
        if (pageId in Object.keys(this.permissionMap)) {
            authObj.status = this.checkPagePermission(pageId);
            if (!authObj.status) {
                authObj.error = AuthError.PERMISSION_DENIED;
            }
        }
        return authObj;
    }
    /**
     * @param {?} menuList
     * @return {?}
     */
    authMenu(menuList) {
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
            x => {
                if (Object.keys(this.permissionMap).includes(x)) {
                    return this.checkPagePermission(x);
                }
                else
                    return true;
            }));
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    checkPagePermission(name) {
        if (this.permissionCheck)
            return this.permissionCheck.checkPagePermission(name, this.userRole);
        else
            return this.userRole
                .map((/**
             * @param {?} x
             * @return {?}
             */
            x => !this.permissionMap[name]["Role"] || (this.permissionMap[name]["Role"].indexOf(x) > -1)))
                .reduce((/**
             * @param {?} acc
             * @param {?} current
             * @return {?}
             */
            (acc, current) => acc || current), false);
    }
}
CheckPermissionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CheckPermissionService.ctorParameters = () => [
    { type: Injector },
    { type: DefaultLoginMgr },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [checkPermissionToken,] }] }
];
/** @nocollapse */ CheckPermissionService.ngInjectableDef = i0.defineInjectable({ factory: function CheckPermissionService_Factory() { return new CheckPermissionService(i0.inject(i0.INJECTOR), i0.inject(i1.DefaultLoginMgr), i0.inject(i2.checkPermissionToken, 8)); }, token: CheckPermissionService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stcGVybWlzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL3Blcm1pc3Npb24vY2hlY2stcGVybWlzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3BELE1BQU07Ozs7OztJQUlKLFlBQ1UsUUFBa0IsRUFDbEIsUUFBeUIsRUFDaUIsZUFBZ0M7UUFGMUUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUNpQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMNUUsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQU90QixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxJQUFlLEVBQUUsRUFBRTtnQkFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakQsSUFBSSxJQUFJO29CQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQTtTQUNIOztZQUVDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFHaEMsQ0FBQzs7Ozs7SUFFTyxRQUFROzs7WUFFVixVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDOztZQUMxQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksVUFBVSxJQUFJLGFBQWEsRUFBRTs7Z0JBQzNCLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUNwRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxFQUFDLENBQUE7YUFDSDtTQUNGO2FBQ0k7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDakY7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFtQjtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDakIsT0FBTyxPQUFPLENBQUM7O1lBRWIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUM7YUFDN0M7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFFBQXVCO1FBQzlCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRTthQUNJO1lBQ0gsMEJBQTBCO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRSxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEM7O29CQUNJLE9BQU8sSUFBSSxDQUFDO1lBQ25CLENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLElBQVk7UUFDckMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN0QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFckUsT0FBTyxJQUFJLENBQUMsUUFBUTtpQkFDakIsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztpQkFDakcsTUFBTTs7Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBdkZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBZnNDLFFBQVE7WUFRdEMsZUFBZTs0Q0FlbkIsUUFBUSxZQUFJLE1BQU0sU0FBQyxvQkFBb0I7Ozs7Ozs7O0lBTDFDLCtDQUEyQjs7Ozs7SUFDM0IsMENBQXNCOzs7OztJQUVwQiwwQ0FBMEI7Ozs7O0lBQzFCLDBDQUFpQzs7Ozs7SUFDakMsaURBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBdXRoUm91dGUgfSBmcm9tICcuLi9BdXRoUm91dGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElBdXRoQWN0aW9uIH0gZnJvbSAnLi4vQXV0aEFjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aE9iamVjdCwgQXV0aEVycm9yIH0gZnJvbSAnLi4vQXV0aE9iamVjdCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY2hlY2tQZXJtaXNzaW9uIH0gZnJvbSAnLi9jaGVja1Blcm1pc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IGNoZWNrUGVybWlzc2lvblRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4nO1xuaW1wb3J0IHsgTG9naW5JbmZvIH0gZnJvbSAnLi4vbG9naW4vTG9naW5JbmZvJztcbmltcG9ydCB7IERlZmF1bHRMb2dpbk1nciB9IGZyb20gJy4uL2xvZ2luL0RlZmF1bHRMb2dpbk1ncic7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL2FwaS9BUElGYWN0b3J5XCI7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2FwaS9BUElEaXNwYXRjaCc7XG5pbXBvcnQgeyBSb3V0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcm91dGVVdGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrUGVybWlzc2lvblNlcnZpY2UgaW1wbGVtZW50cyBJQXV0aFJvdXRlIHtcblxuICBwcml2YXRlIHBlcm1pc3Npb25NYXAgPSB7fTtcbiAgcHJpdmF0ZSB1c2VyUm9sZSA9IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGxvZ2luTWdyOiBEZWZhdWx0TG9naW5NZ3IsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjaGVja1Blcm1pc3Npb25Ub2tlbikgcHJpdmF0ZSBwZXJtaXNzaW9uQ2hlY2s6IGNoZWNrUGVybWlzc2lvblxuICApIHtcblxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW5pdCBjaGVjayBwZXJtaXNzaW9uIHNlcnZpY2UnKTtcbiAgICBpZiAoIXRoaXMucGVybWlzc2lvbkNoZWNrKSB7XG4gICAgICB0aGlzLmxvYWRKc29uKCk7XG4gICAgICB0aGlzLmxvZ2luTWdyLmdldExvZ2luSW5mbygpLnN1YnNjcmliZSgoaW5mbzogTG9naW5JbmZvKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBwZXJtaXNzaW9uIHN1YnNjcmliZTonLCBpbmZvKTtcbiAgICAgICAgaWYgKGluZm8pXG4gICAgICAgICAgdGhpcy51c2VyUm9sZSA9IGluZm8uQXBwVXNlTW9kZTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRoaXMucGVybWlzc2lvbkNoZWNrLmluaXQoKTtcblxuXG4gIH1cblxuICBwcml2YXRlIGxvYWRKc29uKCkge1xuICAgIC8vY2FsbCBhcGkgdG8gZ2V0IHJvdXRlIG1hcFxuICAgIGxldCBhcGlGYWN0b3J5ID0gdGhpcy5pbmplY3Rvci5nZXQoQVBJRmFjdG9yeSk7XG4gICAgbGV0IGFwaURpc3BhdGNoZXIgPSB0aGlzLmluamVjdG9yLmdldChBUElEaXNwYXRjaClcbiAgICBpZiAoYXBpRmFjdG9yeSAmJiBhcGlEaXNwYXRjaGVyKSB7XG4gICAgICBsZXQgcm91dGVyTWFwQVBJID0gYXBpRmFjdG9yeS5nZXRBUEkoXCJnZXRSb3V0ZXJNYXBcIik7XG4gICAgICBpZiAocm91dGVyTWFwQVBJKSB7XG4gICAgICAgIGFwaURpc3BhdGNoZXIuZGlzcGF0Y2gocm91dGVyTWFwQVBJKS5zdWJzY3JpYmUoKG1hcCkgPT4ge1xuICAgICAgICAgIHRoaXMucGVybWlzc2lvbk1hcCA9IFJvdXRlVXRpbHMuY29udmVydEpzb25Ub1JvdXRlck1hcChtYXApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFnZSBwZXJtaXNzaW9uIG1hcDpcIiwgdGhpcy5wZXJtaXNzaW9uTWFwKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrLXBlcm1pc3Npb24gaW5pdCBlcnJvcjogYXBpRmFjdG9yeSBvciBEaXNwYXRjaGVyIG5vdCBmb3VuZC5cIik7XG4gICAgfVxuICB9XG5cbiAgYXV0aFJvdXRlKGF1dGhPYmo6IEF1dGhPYmplY3QpIHtcbiAgICBpZiAoIWF1dGhPYmouc3RhdHVzKVxuICAgICAgcmV0dXJuIGF1dGhPYmo7XG5cbiAgICBsZXQgcGFnZUlkID0gYXV0aE9iai5wYXlsb2FkLmZ1bmM7XG4gICAgY29uc29sZS5sb2codGhpcy5wZXJtaXNzaW9uTWFwKTtcbiAgICBpZiAocGFnZUlkIGluIE9iamVjdC5rZXlzKHRoaXMucGVybWlzc2lvbk1hcCkpIHtcbiAgICAgIGF1dGhPYmouc3RhdHVzID0gdGhpcy5jaGVja1BhZ2VQZXJtaXNzaW9uKHBhZ2VJZClcbiAgICAgIGlmICghYXV0aE9iai5zdGF0dXMpIHtcbiAgICAgICAgYXV0aE9iai5lcnJvciA9IEF1dGhFcnJvci5QRVJNSVNTSU9OX0RFTklFRDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF1dGhPYmo7XG4gIH1cblxuICBhdXRoTWVudShtZW51TGlzdDogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgIGlmICh0aGlzLnBlcm1pc3Npb25DaGVjaykge1xuICAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbkNoZWNrLmNoZWNrTWVudVBlcm1pc3Npb24obWVudUxpc3QsIHRoaXMudXNlclJvbGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vZGVmYXVsdCBwZXJtaXNzaW9uIGNoZWNrXG4gICAgICBjb25zb2xlLmxvZyhcImNoZWNrIG1lbnUgcGVybWlzc2lvbjpcIiwgbWVudUxpc3QsIHRoaXMucGVybWlzc2lvbk1hcCk7XG4gICAgICByZXR1cm4gbWVudUxpc3QuZmlsdGVyKHggPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wZXJtaXNzaW9uTWFwKS5pbmNsdWRlcyh4KSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrUGFnZVBlcm1pc3Npb24oeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoZWNrUGFnZVBlcm1pc3Npb24obmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucGVybWlzc2lvbkNoZWNrKVxuICAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbkNoZWNrLmNoZWNrUGFnZVBlcm1pc3Npb24obmFtZSwgdGhpcy51c2VyUm9sZSk7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRoaXMudXNlclJvbGVcbiAgICAgICAgLm1hcCh4ID0+ICF0aGlzLnBlcm1pc3Npb25NYXBbbmFtZV1bXCJSb2xlXCJdIHx8ICh0aGlzLnBlcm1pc3Npb25NYXBbbmFtZV1bXCJSb2xlXCJdLmluZGV4T2YoeCkgPiAtMSkpXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4gYWNjIHx8IGN1cnJlbnQsIGZhbHNlKTtcbiAgfVxuXG59XG4iXX0=