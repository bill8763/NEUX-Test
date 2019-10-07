import { IRestriction } from '../Restriction.interface';
export declare class ORCompoundRestriction implements IRestriction {
    private restrictions;
    constructor(restrictions: any);
    sqlString(): string;
    getValues(): string[];
}
