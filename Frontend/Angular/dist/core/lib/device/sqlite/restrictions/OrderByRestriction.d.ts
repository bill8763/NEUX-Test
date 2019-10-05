import { IRestriction } from '../Restriction.interface';
export declare class OrderByRestriction implements IRestriction {
    private values;
    constructor(values?: any[]);
    sqlString(): string;
    getValues(): any[];
}
