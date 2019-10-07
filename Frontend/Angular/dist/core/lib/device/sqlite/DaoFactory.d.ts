import { SQLiteTable } from "./SQLiteTable";
import { IDao } from "./Dao.interface";
export declare class DaoFactory {
    private deviceService;
    private errorHandler;
    private APP_CONFIG;
    private tableMapping;
    private dbMapping;
    private constructor();
    getTable(dbName: any, tableName: any): SQLiteTable;
    getDefaultTable(tableName: any): SQLiteTable;
    getDao(dbName: any): IDao;
    getDefaultDao(): IDao;
    init(): Promise<void>;
    refreshTableSchema(): Promise<void>;
    private mappingDB;
    private getSchema;
    private getDatabaseKey;
    private openDatabase;
    private createDao;
    private getTableSchema;
    clearDatabaseData(dbname: any): Promise<any>;
}
