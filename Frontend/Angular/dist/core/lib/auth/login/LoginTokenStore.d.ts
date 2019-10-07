import { Observable } from "rxjs";
export declare class LoginTokenStore {
    private token;
    private tokenSubject;
    constructor();
    setToken(token: string): void;
    getToken(): Observable<string>;
}
