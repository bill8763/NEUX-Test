import { Component, Input, OnInit, OnChanges, Optional, Inject } from '@angular/core';
import { AgentGoalSettingStepComponent } from '../agent-goal-setting-step/agent-goal-setting-step.component';
import { GoalSettingService, GoalValidService } from '@allianzSND/goal';
import { ILoginMgr, ValidationResult, TranslateService, DefaultLoginMgr, LoginMgrToken, NotificationMgr } from '@allianzSND/core';
import { NotificationUtils } from '@allianzSND/notification';
import { SettingChangeEvent, GoalSubmitExtensionToken, GoalSubmitExtension } from '@allianzSND/goal';
import { ModalManager } from '@allianzSND/ui';

@Component({
  selector: 'snd-agent-leader-goal-setting-step',
  templateUrl: './agent-leader-goal-setting-step.component.html',
  styleUrls: ['./agent-leader-goal-setting-step.component.scss']
})
export class AgentLeaderGoalSettingStepComponent extends AgentGoalSettingStepComponent {

  @Input() isPromo: boolean = false;

  public stepsData = ["Status_Bar_Step1", "Status_Bar_Step2", "Status_Bar_Step3", "Status_Bar_Step4", "Status_Bar_Step5"];
  public maxStep: number = 5;
  public isPopOpenInfoStep3 = false;
  clickInfoStep3() {
    this.isPopOpenInfoStep3 = true;
  }


  constructor(
    goalSettingService: GoalSettingService,
    loginMgr: DefaultLoginMgr,
    goalValidService: GoalValidService,
    notificationUtils: NotificationUtils,
    modalManager: ModalManager,
    translateService: TranslateService,
    notificationMgr: NotificationMgr,
    @Optional() @Inject(GoalSubmitExtensionToken) submitExtension: GoalSubmitExtension
  ) {
    super(goalSettingService, goalValidService, loginMgr, notificationUtils, translateService, modalManager, notificationMgr, submitExtension);
    this.validationResultMap = [];
    new Array(this.maxStep).fill(0).forEach(() => {
      this.validationResultMap.push(new ValidationResult());
    })
  }


  async onNext(step: number) {
    super.onNext(step);
  }

  protected async fetchGoalData() {

    await super.fetchGoalData();
    if (this._goalSettingStepDataParams.isAdjust) {
      this.currentStep = 5;
    }
  }

  public async onValueChange(option: SettingChangeEvent) {
    super.onValueChange(option);

  }




  onReset(step) {
    super.onReset(step);
  }


}

