import { AuthObject } from "./AuthObject";
export interface IAuthAction {
    authAction(payload: AuthObject): AuthObject;
}
