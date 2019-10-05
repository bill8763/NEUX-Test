import { GoalTitleListItem } from "../../components/goal-ui-title-list/goa-ui-title-list-item";
export declare class CombineStep5AndAgecyPlanData {
    private _Step5ItemList;
    private _AgencyPlanItemList;
    private _ItemTextIsRedList;
    constructor(Step5ItemList: Array<GoalTitleListItem>, AgencyPlanItemList: Array<GoalTitleListItem>, ItemTextIsRedList: Array<boolean>);
    readonly Step5ItemList: GoalTitleListItem[];
    readonly AgencyPlanItemList: GoalTitleListItem[];
    readonly ItemTextIsRedList: boolean[];
}
