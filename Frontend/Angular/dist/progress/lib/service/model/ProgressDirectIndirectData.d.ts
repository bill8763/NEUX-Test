import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
export declare class ProgressDirectIndirectData {
    AgentID: string;
    AgentName: string;
    TeamName: string;
    JobGrade: string;
    Drilldown: boolean;
    TimeBase: PersonalDataTimeBase;
    DataType: ProgressDataTeamValueType;
    AppUseMode: string;
    Activities: string;
    Goal: number;
    Forecast: number;
    Actual: number;
    Shortfall: number;
}
