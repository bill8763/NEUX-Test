import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { DaoFactory } from '@allianzSND/core';
import { PersonalDataType } from '../service/model/Enum/PersonalDataType';
import { PersonalDataTimeBase } from '../service/model/Enum/PersonalDataTimeBase';
export declare class GetProgressDataAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _clientID;
    private _daoFactory;
    private _personalDataType;
    private _personalDataTimeBase;
    private _searchYear;
    SearchYear: number;
    SearchClientId: number;
    readonly SearchCLientId: number;
    SearchDataType: PersonalDataType;
    SearchTimeBase: PersonalDataTimeBase;
    constructor(daoFactory: DaoFactory);
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
