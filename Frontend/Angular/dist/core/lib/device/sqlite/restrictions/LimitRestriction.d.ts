import { IRestriction } from '../Restriction.interface';
export declare class LimitRestriction implements IRestriction {
    private values;
    constructor(values?: any[]);
    sqlString(): string;
    getValues(): string[];
}
