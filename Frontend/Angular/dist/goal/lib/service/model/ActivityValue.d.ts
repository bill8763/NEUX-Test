import { TIMEBASE } from "@allianzSND/core";
export declare class ActivityValue {
    private _TimeBase;
    private _Find;
    private _Schedule;
    private _Meet;
    private _Submit;
    private _Inforce;
    constructor(TimeBase: any, Find: any, Schedule: any, Meet: any, Submit: any, Inforce: any);
    readonly TimeBase: TIMEBASE;
    readonly Find: string;
    readonly Schedule: string;
    readonly Meet: string;
    readonly Submit: string;
    readonly Inforce: string;
}
