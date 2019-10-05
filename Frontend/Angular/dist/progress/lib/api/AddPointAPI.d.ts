import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from "@allianzSND/core";
import { Observable } from "rxjs";
import { DaoFactory } from "@allianzSND/core";
export declare class AddPointAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _addType;
    private _year;
    private _addPointNum;
    private dao;
    private _daoFactory;
    constructor(daoFactory: DaoFactory);
    SetAddType(value: string): void;
    SetYear(val: number): void;
    SetPointNum(val: number): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
    private _addPoint;
}
