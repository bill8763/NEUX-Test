import { IAPI } from "@allianzSND/core";
import { IMockAPI } from "@allianzSND/core";
import { ISQLiteAPI } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { PersonalDataType } from '../service/model/Enum/PersonalDataType';
import { PersonalDataTimeBase } from '../service/model/Enum/PersonalDataTimeBase';
export declare class PersonalProgressOldAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private _clientID;
    private _daoFactory;
    private _personalDataType;
    private _personalDataTimeBase;
    ClientId: number;
    DataType: PersonalDataType;
    TimeBase: PersonalDataTimeBase;
    constructor();
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
