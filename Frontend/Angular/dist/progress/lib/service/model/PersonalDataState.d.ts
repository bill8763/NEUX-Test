import { PersonalDataType } from "./Enum/PersonalDataType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
export declare class PersonalDataState {
    private _dataYear;
    private _timeBase;
    private _dataType;
    constructor();
    DataYear: number;
    TimeBase: PersonalDataTimeBase;
    DataType: PersonalDataType;
}
