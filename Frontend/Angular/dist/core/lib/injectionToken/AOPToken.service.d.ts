import { InjectionToken } from "@angular/core";
export declare class AOPTokenService {
    private tokenMap;
    constructor();
    registerToken(name: string, token: InjectionToken<any>): void;
    getToken(name: string): InjectionToken<any>;
}
