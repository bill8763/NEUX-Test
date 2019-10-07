export declare class NumberUtils {
    constructor();
    static isNumber(val: any): boolean;
    static isDecimal(val: any): boolean;
    static isPositive(val: any): boolean;
    static isPositiveInt(val: any): boolean;
    static numberToFix(n: number, toFix: number): number;
    static strip(num: any, precision?: number): number;
}
