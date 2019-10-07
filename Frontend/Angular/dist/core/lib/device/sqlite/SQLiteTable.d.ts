import { SQLiteColumn } from './SQLiteColumn';
import { IRestriction } from './Restriction.interface';
export declare class SQLiteTable {
    private tableName;
    private columns;
    private restrictions;
    constructor(name: string, columns: Array<SQLiteColumn>);
    setValue(col: string, value: any): void;
    getValue(col: string): any;
    hasColumn(col: string): boolean;
    getTableName(): string;
    getColumns(): SQLiteColumn[];
    addRestriction(restriction: IRestriction): void;
    getRestrictions(): IRestriction[];
    cloneTable(): SQLiteTable;
    isSetted(): boolean;
}
