import { AuthObject } from "./AuthObject";
export interface IAuthRoute {
    authRoute(payload: AuthObject): AuthObject;
}
