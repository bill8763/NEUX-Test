import { ValidCondition } from "./condition/ValidCondition.interface";
export declare class ValidProperty {
    private _name;
    name: string;
    private conditionList;
    constructor(name: string);
    addCondition(condition: ValidCondition): void;
    validProperty(value: any): Array<string>;
}
