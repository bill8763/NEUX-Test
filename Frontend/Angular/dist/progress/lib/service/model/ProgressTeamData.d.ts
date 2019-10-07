import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
export declare class ProgressTeamData {
    DataType: ProgressDataTeamValueType;
    TimeBase: PersonalDataTimeBase;
    Goal: number;
    Forecast: number;
    Actual: number;
    Shortfall: number;
}
