import { PerformanceType } from "./Enum/PerformanceType";
import { ActualValueDataType } from "./Enum/ActualValueDataType";
export declare class ProgressActualValue {
    private _clientID;
    private _dataYear;
    private _performanceType;
    private _dataType;
    private _month;
    private _value;
    constructor(id: string, year: number, performanceType: PerformanceType, dataType: ActualValueDataType, month: number, value: number);
    ClientID: string;
    DataYear: number;
    PerformanceType: PerformanceType;
    DataType: ActualValueDataType;
    Month: number;
    Value: number;
}
