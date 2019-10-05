export interface ValidCondition {
    valid(value: any): boolean;
    getType(): ValidType;
    getErrorMsg(column: string): string;
}
export declare enum ValidType {
    Required = 0,
    Max = 1,
    Min = 2
}
