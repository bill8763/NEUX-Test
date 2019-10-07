import { CheckPermissionService } from './permission/check-permission.service';
import { ActionService } from './action/action.service';
import { IAuthAction } from './AuthAction.interface';
import { IAuthRoute } from './AuthRoute.interface';
export declare class AuthService {
    private checkPermissionService;
    private actionService;
    private customAuthAction;
    private customAuthRoute;
    constructor(checkPermissionService: CheckPermissionService, actionService: ActionService, customAuthAction: IAuthAction, customAuthRoute: IAuthRoute);
    authRoute(data: any): Promise<{
        status: boolean;
        error: string;
    }>;
    authAction(payload: any): Promise<{
        status: boolean;
        error: string;
    }>;
}
