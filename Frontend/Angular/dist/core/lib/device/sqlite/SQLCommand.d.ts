export declare class SQLCommand {
    private sql;
    private params;
    constructor(instruction: string, params: Array<any>);
    setSql(instruction: string): void;
    setParam(param: string): void;
    getSql(): string;
    getParams(): any[];
}
