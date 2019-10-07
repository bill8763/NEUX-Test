import { ErrorHandler } from "@angular/core";
import { APIFactory, APIDispatch, LoginResponse, TimeoutService } from "@allianzSND/core";
export declare class LoginService {
    private APIFactory;
    private dispatcher;
    private timeoutService;
    private errorHandler;
    constructor(APIFactory: APIFactory, dispatcher: APIDispatch, timeoutService: TimeoutService, errorHandler: ErrorHandler);
    getDeviceAccount(): Promise<string>;
    saveDeviceAccount(account: string): Promise<any>;
    offlineLogin(token: string): Promise<LoginResponse>;
    saveToken(token: any, encrypted_string: any): Promise<void>;
}
