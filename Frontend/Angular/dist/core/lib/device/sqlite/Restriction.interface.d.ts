export interface IRestriction {
    sqlString(): string;
    getValues(): Array<string>;
}
