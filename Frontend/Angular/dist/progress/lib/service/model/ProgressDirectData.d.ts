import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
export declare class ProgressDirectData {
    AgentID: string;
    AgentName: string;
    JobGrade: string;
    Drilldown: boolean;
    TimeBase: PersonalDataTimeBase;
    DataType: ProgressDataTeamValueType;
    Activities: string;
    Goal: number;
    Forecast: number;
    Actual: number;
    Shortfall: number;
}
