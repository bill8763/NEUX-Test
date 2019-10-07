export declare class AuthObject {
    payload: any;
    status: boolean;
    error: string;
    constructor(payload?: any, status?: boolean);
}
export declare enum AuthError {
    PERMISSION_DENIED = "Permission Denied",
    TIMEOUT = "Timeout",
    NOT_LOGIN = "Not Login",
    PENDING_ACTION = "Other Action Pending"
}
