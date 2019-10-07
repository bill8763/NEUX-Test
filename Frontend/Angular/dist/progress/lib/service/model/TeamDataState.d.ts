import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
export declare class TeamDataState {
    private _dataYear;
    private _timeBase;
    private _teamValueType;
    constructor();
    DataYear: number;
    TimeBase: PersonalDataTimeBase;
    TeamValueType: ProgressDataTeamValueType;
}
