import { IAPI } from "../API.interface";
import { IMockAPI } from "../MockAPI.interface";
import { ISQLiteAPI } from "../SQLiteAPI.interface";
import { Setting } from "../../bean";
import { Observable } from "rxjs";
import { DaoFactory } from "../../device";
export declare class SettingUpdateAPI implements IAPI, IMockAPI, ISQLiteAPI {
    private DaoFactory;
    constructor(DaoFactory: DaoFactory);
    private _settingObject;
    setSettingObject(value: Setting): void;
    getAPIName(): string;
    getMockPath(): string;
    executeSQL(): Observable<any>;
}
