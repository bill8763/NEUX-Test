import { DefaultLoginMgr } from '../auth/login/DefaultLoginMgr';
export declare class TranslatePriceService {
    private loginMgr;
    private _role;
    private _million;
    constructor(loginMgr: DefaultLoginMgr);
    translatePrice(value: any): string;
    private _numberToFix;
}
