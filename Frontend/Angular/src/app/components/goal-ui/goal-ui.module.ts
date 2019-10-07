import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@allianzSND/core';
import { UIModule } from '@allianzSND/ui';

import { GoalUILandingComponent } from './goal-ui-components/goal-ui-landing/goal-ui-landing.component';
import { GoalUiTitleContentComponent } from './goal-ui-components/goal-ui-title-content/goal-ui-title-content.component';
import { GoalUiTitleListComponent } from './goal-ui-components/goal-ui-title-list/goal-ui-title-list.component';
import { GoalUiTitleNumUnitComponent } from './goal-ui-components/goal-ui-title-num-unit/goal-ui-title-num-unit.component';
import { GoalUiTitleSubtitleNumUnitComponent } from './goal-ui-components/goal-ui-title-subtitle-num-unit/goal-ui-title-subtitle-num-unit.component';
import { GoalUiTitleDescListComponent } from './goal-ui-components/goal-ui-title-desc-list/goal-ui-title-desc-list.component';
import { GoalUiTextComponent } from './goal-ui-components/goal-ui-text/goal-ui-text.component';
import { GoalUiDataCard1Component } from './goal-ui-components/goal-ui-data-card1/goal-ui-data-card1.component';
import { GoalUiTitleTableComponent } from './goal-ui-components/goal-ui-title-table/goal-ui-title-table.component';
import { GoalUiDataCard2Component } from './goal-ui-components/goal-ui-data-card2/goal-ui-data-card2.component';
import { GoalUiDataCardSideComponent } from './goal-ui-components/goal-ui-data-card-side/goal-ui-data-card-side.component';
import { GoalSettingStep1Component } from './goal-ui-components/goal-setting-step1/goal-setting-step1.component';
import { GoalSettingStep2Component } from './goal-ui-components/goal-setting-step2/goal-setting-step2.component';
import { GoalSettingStep3Component } from './goal-ui-components/goal-setting-step3/goal-setting-step3.component';
import { GoalSettingStep4Component } from './goal-ui-components/goal-setting-step4/goal-setting-step4.component';
import { GoalSettingStep5Component } from './goal-ui-components/goal-setting-step5/goal-setting-step5.component';
import { GoalSettingStepComponent } from './component/goal-setting-step/goal-setting-step.component';
import { AgentGoalSettingStepComponent } from './component/agent-goal-setting-step/agent-goal-setting-step.component';
import { AgentLeaderGoalSettingStepComponent } from './component/agent-leader-goal-setting-step/agent-leader-goal-setting-step.component';
import { GoalSettingOverviewPersonalComponent } from './component/goal-setting-overview-personal/goal-setting-overview-personal.component';
import { GoalSettingOverviewTeamComponent } from './component/goal-setting-overview-team/goal-setting-overview-team.component';
import { GoalSettingOverviewPersonalTeamComponent } from './component/goal-setting-overview-personal-team/goal-setting-overview-personal-team.component';
import { AgentGoalSettingOverviewYearTabComponent } from './component/goal-setting-overview-year-tab/goal-setting-overview-year-tab.component';
import { GoalAgencyPlanComponent } from './component/goal-agency-plan/goal-agency-plan.component';
import { GoalAgencyPlanOverviewComponent } from './component/goal-agency-plan-overview/goal-agency-plan-overview.component';
import { GoalAgencyPlanAgentUnitComponent } from './component/goal-agency-plan-agent-unit/goal-agency-plan-agent-unit.component';
import { GoalAgencyPlanPersonalMonthlyComponent } from './component/goal-agency-plan-personal-monthly/goal-agency-plan-personal-monthly.component';
import { GoalAgencyPlanRecruitmentPopupComponent } from './component/goal-agency-plan-recruitment-popup/goal-agency-plan-recruitment-popup.component';
import { GoalLandingComponent } from './component/goal-landing/goal-landing.component';
import { GoalAgencyDrillDownComponent } from './component/goal-agency-drill-down/goal-agency-drill-down.component';
import { GoalOverviewGoalFyfcCardComponent } from './component/goal-overview-goal-fyfc-card/goal-overview-goal-fyfc-card.component';
import { GoalOverviewRocketCardComponent } from './component/goal-overview-rocket-card/goal-overview-rocket-card.component';
import { GoalOverviewMonthlyPlanFyfcCardComponent } from './component/goal-overview-monthly-plan-fyfc-card/goal-overview-monthly-plan-fyfc-card.component';
import { GoalAgencyLeftCardComponent } from './component/goal-agency-left-card/goal-agency-left-card.component';
import { GoalAgencyRightCardComponent } from './component/goal-agency-right-card/goal-agency-right-card.component';
import { FormsModule } from '@angular/forms';
import { GoalSettingOverviewApproveStatusCardComponent } from './component/goal-setting-overview-approve-status-card/goal-setting-overview-approve-status-card.component';
import { GoalSettingStepModalComponent } from './component/goal-setting-step-modal/goal-setting-step-modal.component';
import { GoalUiMandateComponent } from './goal-ui-components/goal-ui-mandate/goal-ui-mandate.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UIModule,
    FormsModule
  ],
  declarations: [
    GoalAgencyPlanComponent,
    GoalUILandingComponent,
    GoalUiTitleContentComponent,
    GoalUiTitleNumUnitComponent,
    GoalUiTitleSubtitleNumUnitComponent,
    GoalUiTitleListComponent,
    GoalUiTitleDescListComponent,
    GoalUiTextComponent,
    GoalUiDataCard1Component,
    GoalUiTitleTableComponent,
    GoalUiDataCard2Component,
    GoalUiDataCardSideComponent,
    GoalSettingStepComponent,
    GoalSettingStep1Component,
    GoalSettingStep2Component,
    GoalSettingStep3Component,
    GoalSettingStep4Component,
    GoalSettingStep5Component,
    AgentGoalSettingStepComponent,
    AgentLeaderGoalSettingStepComponent,
    GoalSettingOverviewPersonalComponent,
    GoalSettingOverviewTeamComponent,
    GoalSettingOverviewPersonalTeamComponent,
    AgentGoalSettingOverviewYearTabComponent,
    GoalAgencyPlanOverviewComponent,
    GoalAgencyPlanAgentUnitComponent,
    GoalAgencyPlanPersonalMonthlyComponent,
    GoalAgencyPlanRecruitmentPopupComponent,
    GoalLandingComponent,
    GoalAgencyDrillDownComponent,
    GoalOverviewGoalFyfcCardComponent,
    GoalOverviewRocketCardComponent,
    GoalOverviewMonthlyPlanFyfcCardComponent,
    GoalAgencyLeftCardComponent,
    GoalAgencyRightCardComponent,
    GoalSettingOverviewApproveStatusCardComponent,
    GoalSettingStepModalComponent,
    GoalUiMandateComponent
  ],
  exports: [
    GoalSettingOverviewPersonalComponent,
    GoalSettingOverviewTeamComponent,
    GoalSettingOverviewPersonalTeamComponent
  ]
})
export class GoalUiModule { }
