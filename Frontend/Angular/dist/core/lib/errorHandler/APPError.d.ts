export declare class APPError extends Error {
    constructor(code: string, message: string);
    name: string;
    message: string;
    code: string;
}
