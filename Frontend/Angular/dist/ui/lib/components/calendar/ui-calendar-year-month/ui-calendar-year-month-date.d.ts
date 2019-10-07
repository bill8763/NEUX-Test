export declare class DateObj {
    private txt;
    private isToday;
    constructor(txt: string, isToday: boolean);
    setIsToday(isToday: boolean): this;
    getIsToday(): boolean;
    getTxt(): string;
    setTxt(txt: string): this;
}
