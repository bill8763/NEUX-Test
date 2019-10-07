import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { PersonalDataType } from '../service/model/Enum/PersonalDataType';
import { PersonalDataTimeBase } from '../service/model/Enum/PersonalDataTimeBase';
export declare class GetProgressActualValueAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _clientID;
    private _daoFactory;
    private _personalDataType;
    private _personalDataTimeBase;
    private _dataYear;
    ClientId: number;
    DataType: PersonalDataType;
    TimeBase: PersonalDataTimeBase;
    setDataYear(year: number): void;
    constructor();
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
