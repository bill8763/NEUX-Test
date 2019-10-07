import { IRestriction } from '../Restriction.interface';
export declare class GreaterRestriction implements IRestriction {
    private column;
    private values;
    constructor(column: any, values?: any[]);
    sqlString(): string;
    getValues(): string[];
}
