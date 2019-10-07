export declare class StringUtils {
    private static readonly matchEnglishRegExp;
    private static readonly matchChineseRegExp;
    private static readonly matchNumberRegExp;
    constructor();
    static isNotEmpty(val: any): boolean;
    static trim(val: any): string;
    static isEmpty(val: any): boolean;
    static convertEmptyVal(val: any): string;
    static byteLength(val: any): number;
    static isHasEnglish(val: string): boolean;
    static isAllEnglish(val: string): boolean;
    static isHasChinese(val: string): boolean;
    static isAllChinese(val: string): boolean;
    static getEnglishCharCount(val: string): number;
    static getChineseCharCount(val: string): number;
    static getNumberCharCount(val: string): number;
    static isHasThai(val: string): boolean;
}
