import { OnInit } from '@angular/core';
import { DaoFactory } from '../../device/sqlite/DaoFactory';
import { Location } from '@angular/common';
export declare class SqliteExecutorComponent implements OnInit {
    private daoFactory;
    private _location;
    isHasData: boolean;
    selectTablesOptionList: Array<SelectOption>;
    selectTable: string;
    recordLength: number;
    responseBody: any;
    tableColumns: Array<string>;
    currentDbName: string;
    currentTable: string;
    constructor(daoFactory: DaoFactory, _location: Location);
    ngOnInit(): void;
    goToLastPage(): void;
    refresh(): void;
    selectTableChange(event: string): void;
    queryBytable(dbName: string, tableName: string): void;
}
declare class SelectOption {
    private _name;
    private _value;
    constructor(value: string, name: string);
    getName(): string;
    getValue(): string;
}
export {};
