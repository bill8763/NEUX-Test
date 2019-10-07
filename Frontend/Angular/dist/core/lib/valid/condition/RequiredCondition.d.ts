import { ValidCondition, ValidType } from "./ValidCondition.interface";
export declare class RequiredCondition implements ValidCondition {
    private type;
    private value;
    private baseTypes;
    constructor();
    getType(): ValidType;
    valid(value: any): boolean;
    getErrorMsg(column: string): string;
}
