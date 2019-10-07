import { IDao } from "./Dao.interface";
import { SQLiteTable } from "./SQLiteTable";
import { Observable } from "rxjs";
import { SQLCommand } from "./SQLCommand";
import { SQLiteResponse } from "./SQLiteResponse";
export declare class ClientCustomDao implements IDao {
    private baseDao;
    constructor(dao: any);
    openDataBase(): any;
    queryByTable(tableObject: SQLiteTable): Observable<SQLiteResponse>;
    insertByTable(tableObject: SQLiteTable): any;
    updateByTable(tableObject: SQLiteTable): Observable<SQLiteResponse>;
    deleteByTable(tableObject: SQLiteTable): Observable<SQLiteResponse>;
    excuteSqlCommand(sql_command: Array<SQLCommand>): any;
    getSchema(): Observable<Map<any, any>>;
    transactionInsert(tableObject: SQLiteTable): void;
    transactionUpdate(tableObject: SQLiteTable): void;
    transactionDelete(tableObject: SQLiteTable): void;
    transactionSqlCommand(command: SQLCommand): void;
    runTransaction(): any;
    clearTransaction(): any;
}
