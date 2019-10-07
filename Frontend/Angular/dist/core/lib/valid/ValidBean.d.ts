import { ValidProperty } from "./ValidProperty";
export declare class ValidBean {
    private _name;
    private _type;
    private propertyList;
    name: string;
    type: any;
    constructor(name: string, type: any);
    getOrCreateProperty(name: string): ValidProperty;
    validSelf(data: any): Array<string>;
    private addProperty;
}
