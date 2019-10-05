import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TranslateService, Language, ProfileCodeService, ProfileCode, DefaultLoginMgr } from '@allianzSND/core';
import { GoalSettingService } from '@allianzSND/goal';
import { GoalSettingStepData, GoalSettingStep1, GoalSettingUtilService, GoalSettingTranslate } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-overview-goal-fyfc-card',
  templateUrl: './goal-overview-goal-fyfc-card.component.html',
  styleUrls: ['./goal-overview-goal-fyfc-card.component.scss']
})
export class GoalOverviewGoalFyfcCardComponent implements OnInit {

  public monthGoalTitle: string = '';
  public effectiveMonthTitle: string = '';
  public FYFCActualTitle: string = '';
  public language = new Language();
  public forecastColor: string = '';
  public Step1Forecast: string = '0';
  public goalSettingStep1: GoalSettingStep1 = null;
  private _allStepData: GoalSettingStepData;
  private _promotionPlanSelectOptionList: Array<ProfileCode> = [];
  public isShowPromotionPlan: boolean = false;

  constructor(
    private goalSettingService: GoalSettingService,
    private profileCodeService: ProfileCodeService,
    private goalSettingUtilService: GoalSettingUtilService,
    private loginMgr: DefaultLoginMgr,
  ) {
    this._promotionPlanSelectOptionList = this.profileCodeService.getCodeArray('Promotion_Plan');
  }

  ngOnInit() {

    this.loginMgr.getLoginInfo().subscribe(loginInfo => {

      console.warn("loginInfo in fyfc card: ", loginInfo);

      let showPromotionPlanTargetJobGradeList = this._promotionPlanSelectOptionList.map(x => JSON.parse(x.getArguments()).MappingJobGrade);

      this.isShowPromotionPlan = showPromotionPlanTargetJobGradeList.filter(x => x === loginInfo.JobGrade).length > 0;

    });

  }



  @Input()
  public get allStepData() {
    return this._allStepData;
  }
  public set allStepData(value) {
    if (value) {
      this._allStepData = value;
      this.goalSettingStep1 = this._allStepData["Step1"];
      if (Number(this.goalSettingStep1.FYFCNowToYearEnd) < 0) {
        this.goalSettingStep1.FYFCNowToYearEnd = '0';
      }

      let performanceMonthEnd = this._allStepData.YearConfig.PerformanceSettlementMonth;
      this.Step1Forecast = this.goalSettingService.calculateForecast(performanceMonthEnd, this._allStepData.Step4.MonthList);
      this.forecastColor = (Number(this.Step1Forecast) < Number(this.goalSettingStep1.FYFC)) ? 'red' : '';

      this._doTranslate(this._allStepData);
    }
  }

  private _doTranslate(stepData: GoalSettingStepData) {
    let translateResult: GoalSettingTranslate = this.goalSettingUtilService.translateByStepData(stepData);
    this.effectiveMonthTitle = translateResult.PersonalGoalEffectiveMonthTitle;
    this.monthGoalTitle = translateResult.NowToYearEndTitle;
    this.FYFCActualTitle = translateResult.PersonalFYFCActualVariableTitle;
  }

}
