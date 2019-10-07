import { GoalSettingStepData } from '../service/model/GoalSettingStepData';
export interface GoalSubmitExtension {
    execute(data: GoalSettingStepData): GoalSettingStepData;
}
