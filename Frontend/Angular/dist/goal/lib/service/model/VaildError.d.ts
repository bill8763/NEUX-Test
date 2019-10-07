export declare class ValidError {
    private _Step;
    private _ColId;
    private _Msg;
    constructor(Step: number, ColId: string, Msg: string);
    readonly Step: number;
    readonly ColId: string;
    readonly Msg: string;
}
