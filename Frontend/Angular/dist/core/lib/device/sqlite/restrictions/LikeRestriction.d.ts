import { IRestriction } from '../Restriction.interface';
export declare class LikeRestriction implements IRestriction {
    private column;
    private values;
    constructor(column: any, values?: any[]);
    sqlString(): string;
    getValues(): string[];
}
