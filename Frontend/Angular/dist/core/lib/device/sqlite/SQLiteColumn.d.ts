export declare class SQLiteColumn {
    private colName;
    private colValue;
    private isPrimaryKey;
    private isAutoincrement;
    private type;
    constructor(name: string, value: string, type: string, isPrimaryKey: boolean, isAutoincrement: boolean);
    getName(): string;
    getValue(): any;
    getType(): string;
    setValue(val: any): void;
    getIsPrimaryKey(): boolean;
    getIsAutoincrement(): boolean;
}
