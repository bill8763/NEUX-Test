import { IRestriction } from '../Restriction.interface';
export declare class OffsetRestriction implements IRestriction {
    private values;
    constructor(values?: any[]);
    sqlString(): string;
    getValues(): string[];
}
