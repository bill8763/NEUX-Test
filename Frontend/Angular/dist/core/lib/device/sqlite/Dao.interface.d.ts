import { SQLiteTable } from "./SQLiteTable";
import { SQLCommand } from "./SQLCommand";
import { Observable } from "rxjs";
import { SQLiteResponse } from "./SQLiteResponse";
export interface IDao {
    getSchema(): Observable<Map<any, any>>;
    insertByTable(table: SQLiteTable): Observable<SQLiteResponse>;
    updateByTable(table: SQLiteTable): Observable<SQLiteResponse>;
    deleteByTable(table: SQLiteTable): Observable<SQLiteResponse>;
    queryByTable(table: SQLiteTable): Observable<SQLiteResponse>;
    excuteSqlCommand(commandArray: Array<SQLCommand>): any;
    transactionInsert(table: SQLiteTable): any;
    transactionUpdate(table: SQLiteTable): any;
    transactionDelete(table: SQLiteTable): any;
    runTransaction(): any;
    clearTransaction(): any;
    transactionSqlCommand(command: SQLCommand): any;
    openDataBase(): any;
}
