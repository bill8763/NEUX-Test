export declare class SQLiteDatabase {
    private dbName;
    private key;
    constructor(name: any, key: any);
    getName(): string;
    getKey(): string;
    setName(name: string): void;
    setkey(key: string): void;
}
