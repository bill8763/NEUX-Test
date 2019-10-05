import { LoginResponse } from "./LoginResponse";
export interface AfterLogin {
    afterLogin(resp: LoginResponse): void;
}
