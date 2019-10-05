export declare class ApproveInfo {
    private _DataYear;
    private _AgentID;
    private _IsApprove;
    private _Comment;
    constructor(DataYear: number, AgentID: string, IsApprove: boolean, Comment: string);
    readonly Comment: string;
    readonly IsApprove: boolean;
    readonly AgentID: string;
    readonly DataYear: number;
}
