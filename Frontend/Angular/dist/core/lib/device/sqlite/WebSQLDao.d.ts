import { IDao } from "./Dao.interface";
import { SQLiteTable } from "./SQLiteTable";
import { SQLiteDatabase } from "./SQLiteDatabase";
import { SQLiteDao } from "./SQLiteDao";
export declare class WebSQLDao extends SQLiteDao implements IDao {
    constructor(config: SQLiteDatabase);
    openDataBase(): Promise<any>;
    protected getColumns(tx: any, schema: Map<string, SQLiteTable>, table_name: any, table_sql: any): void;
    runTransaction(): any;
    clearTransaction(): void;
}
