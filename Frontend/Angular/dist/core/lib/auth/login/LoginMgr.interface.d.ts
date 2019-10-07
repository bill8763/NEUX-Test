import { LoginInfo } from "./LoginInfo";
import { Observable } from "rxjs";
import { LoginResponse } from "./LoginResponse";
export interface ILoginMgr {
    getLoginInfo(): Observable<LoginInfo>;
    getToken(): Observable<string>;
    checkLogin(): boolean;
    login(userInfo: any): Observable<LoginResponse>;
    logout(): void;
}
