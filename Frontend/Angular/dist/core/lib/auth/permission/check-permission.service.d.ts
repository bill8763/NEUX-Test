import { Injector } from '@angular/core';
import { IAuthRoute } from '../AuthRoute.interface';
import { AuthObject } from '../AuthObject';
import { checkPermission } from './checkPermission.interface';
import { DefaultLoginMgr } from '../login/DefaultLoginMgr';
export declare class CheckPermissionService implements IAuthRoute {
    private injector;
    private loginMgr;
    private permissionCheck;
    private permissionMap;
    private userRole;
    constructor(injector: Injector, loginMgr: DefaultLoginMgr, permissionCheck: checkPermission);
    init(): void;
    private loadJson;
    authRoute(authObj: AuthObject): AuthObject;
    authMenu(menuList: Array<string>): Array<string>;
    checkPagePermission(name: string): boolean;
}
