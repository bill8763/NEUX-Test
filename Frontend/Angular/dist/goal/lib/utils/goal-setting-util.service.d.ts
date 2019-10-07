import { TranslateService } from '@allianzSND/core';
import { GoalSettingStep5 } from '../service/model/GoalSettingStep5';
import { AgencyPlanDataForOverview } from '../service/model/AgencyPlanDataForOverview';
import { GoalSettingStep3 } from '../service/model/GoalSettingStep3';
import { GoalSettingStepData } from '../service/model/GoalSettingStepData';
import { GoalSettingYearConfig } from '../service/model/GoalSettingYearConfig';
import { GoalSettingGoalStatus } from '../service/model/GoalSettingGoalStatus';
import { GoalSettingTranslate } from '../service/model/GoalSettingTranslate';
import { CombineStep5AndAgecyPlanData } from '../service/model/CombineStep5AndAgecyPlanData';
import { GoalSettingStep3ForTabChange } from '../service';
export declare class GoalSettingUtilService {
    private translateService;
    constructor(translateService: TranslateService);
    getStep3TabOptionList(activity: string): Array<string>;
    transformTeamStep5Data(step5Data: GoalSettingStep5, agencyPlanData: AgencyPlanDataForOverview): CombineStep5AndAgecyPlanData;
    getTabChangeStep3(currentType: string, goalSettingStep3: GoalSettingStep3): GoalSettingStep3ForTabChange;
    translateByStepData(stepData: GoalSettingStepData): GoalSettingTranslate;
    translateByYearConfigAndGoaslStatus(yearConfig: GoalSettingYearConfig, goalStatus: GoalSettingGoalStatus): GoalSettingTranslate;
    private _getTranslateVariable;
    private _isHasEffectiveMonthAndSettlementMonth;
}
