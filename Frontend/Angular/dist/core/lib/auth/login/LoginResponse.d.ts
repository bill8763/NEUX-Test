export declare class LoginResponse {
    isSuccess: boolean;
    errorMsg: string;
    type: LOGIN_TYPE;
    token: string;
    failCount: number;
    constructor(resp: {
        isSuccess: boolean;
        type: LOGIN_TYPE;
        errorMsg: string;
        token: string;
        failCount?: number;
    });
}
export declare enum LOGIN_TYPE {
    ONLINE = 0,
    OFFLINE = 1
}
