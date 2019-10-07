import { Component, OnInit, Optional, Inject, ErrorHandler } from '@angular/core';
import { LoginMgrToken, ILoginMgr, Language, ValidationResult, StringUtils, TranslateService, DeviceService, DefaultLoginMgr, APPError, PERFORMANCETYPE } from '@allianzSND/core';
import { CONTENTGAP } from '@allianzSND/ui';
import { GoalSettingService, GoalValidService } from '@allianzSND/goal';
import { GoalStoreService, ROLE, PLAN_FYFC_POPUP_STATE, PlanFYFCPopupInfo, GoalSettingPlanPopup, IsApproveInfo, GoalSettingStep4, GoalSettingStepData, ValidError } from '@allianzSND/goal';
import { NotificationUtils } from '@allianzSND/notification';

@Component({
  selector: 'snd-goal-setting-overview-personal-team',
  templateUrl: './goal-setting-overview-personal-team.component.html',
  styleUrls: ['./goal-setting-overview-personal-team.component.scss']
})
export class GoalSettingOverviewPersonalTeamComponent implements OnInit {

  public role: string = '';
  public isLoadRoleFinish: boolean = false;
  public isShowPersonalTeamTab: boolean = false;
  public performanceType: string = PERFORMANCETYPE.PERSONAL; // default personal
  public tabIndex: number = 0; // default tab is personal
  public language: Language = new Language();


  public isPopupPersonalPlanFYFC: boolean = false;
  public isPersonalPlanFYFCSaveCanClick: boolean = false;
  public isShowStep4ResetBtn: boolean = false;
  public isPopupPlanApprove: boolean = false;
  public _originalStep4: GoalSettingStep4 = null;
  public step4ForecastTextColorIsRed: boolean = false;
  public step4Shortfall: number = 0;
  public FYFCActualSum: number = 0;
  public rowList: Array<any> = [];
  public validationResult: ValidationResult = new ValidationResult();
  public needToBeRecommentContent: string = '';
  public settlementMonth: number = 0;
  public allStepData: GoalSettingStepData;
  private _validArr: Array<ValidError> = [];


  public GAP_SIZE_20 = CONTENTGAP.GAP20;
  constructor(
    private loginMgr: DefaultLoginMgr,
    private goalStore: GoalStoreService,
    private goalSettingService: GoalSettingService,
    private goalValidService: GoalValidService,
    private translateService: TranslateService,
    private notifcationUtils: NotificationUtils,
    private errorHandler: ErrorHandler
  ) {

  }

  ngOnInit() {

    this.loginMgr.getLoginInfo().subscribe(loginInfo => {
      try {
        console.warn("loginInfo: ", loginInfo);
        this.role = loginInfo.AppUseMode[loginInfo.AppUseMode.length - 1];

        if (this.role == ROLE.AGENT) { }
        else if (this.role == ROLE.AGENTLEADER) {
          this.performanceType = PERFORMANCETYPE.TEAM;

          this.isShowPersonalTeamTab = true;
          this.tabIndex = 1;
        }
        else {
          throw new Error('getLoginInfo match role fail');
        }

        this.isLoadRoleFinish = true;

      } catch (error) {
        this.errorHandler.handleError(new APPError('F00500', error.message + '(overview-personal-team)'));
      }

    });


    this.goalStore.getPlanFYFCPopupInfo().subscribe(info => {
      console.log("subscribe info:", info);
      if (info.state == PLAN_FYFC_POPUP_STATE.DISPLAY) {
        console.warn("data in personal team tab: ", info.data);

        this._originalStep4 = info.data.Step4.clone();
        this.allStepData = info.data;

        this.settlementMonth = this.allStepData.YearConfig.PerformanceSettlementMonth;

        this.rowList = Array.from(Array(Math.floor(this.allStepData.Step4.MonthList.length / 2)));
        this._validateAll(false);
        this._doTranslate();
        this.isPopupPersonalPlanFYFC = true;
      }

      else if (info.state == PLAN_FYFC_POPUP_STATE.CLOSE) {

        if (this._originalStep4) {
          this.reset();
          this.isPopupPersonalPlanFYFC = false;
          this.isShowStep4ResetBtn = false;
          this.isPersonalPlanFYFCSaveCanClick = true;
        }
      }
    })
  }

  changeTab(event) {

    if (event == 0) {
      console.warn("person");
      this.performanceType = PERFORMANCETYPE.PERSONAL;

    }
    else if (event == 1) {
      console.warn("team");
      this.performanceType = PERFORMANCETYPE.TEAM;
    }

  }


  //for planFYFCPopup
  onClosePersonalPlanFYFCPopup() {
    this.goalStore.setPlanFYFCPopupInfo(new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null));
  }

  private _validateAll(isNeedCalculateForecast: boolean) {

    if (isNeedCalculateForecast) {
      let monthList = this.allStepData.Step4.MonthList;
      let performanceSettlementMonth = this.allStepData.YearConfig.PerformanceSettlementMonth;
      monthList.filter(obj => obj.Month > performanceSettlementMonth).forEach(x => {
        this._validArr = this.goalValidService.onChangeValid(4, "Plan_" + x.Month, x.Plan, this.allStepData, true, this._validArr);
      });
    }
    else {
      this._validArr = this.goalValidService.unitPageValid(4, this.allStepData, true, this._validArr);
    }
    this.validationResult = this._getValidationResultByValidArray(this._validArr);
    console.warn('_validateAll validArr: ', this._validArr);
    console.warn('_validateAll this.allStepData: ', this.allStepData);
  }

  private _getValidationResultByValidArray(validArr: Array<ValidError>) {
    let validationResult = new ValidationResult();
    validArr.forEach(error => {
      validationResult.setErrorMap(error.ColId, error.Msg);
    });

    this.isPersonalPlanFYFCSaveCanClick = validationResult.isTrue();
    this.step4ForecastTextColorIsRed = validationResult.getErrorMsg('Shortfall') != undefined;

    console.warn('after _updatevalidationResult: ', validationResult);
    return validationResult;
  }

  private _showResetBtn() {
    if (!this.isShowStep4ResetBtn) {
      this.isShowStep4ResetBtn = true;
    }
  }

  step4ValueChange(index: number) {

    let colId = "Plan_" + (index + 1).toString();
    let value = this.allStepData.Step4.MonthList[index].Plan;

    console.warn('colId: ', colId, ' value:', value);

    this._validArr = this.goalValidService.onChangeValid(4, colId, value, this.allStepData, true, this._validArr);
    console.warn("stepData after valid: ", this.allStepData);
    console.warn("this._validArr: ", this._validArr);

    this.validationResult = this._getValidationResultByValidArray(this._validArr);
    this._showResetBtn();
  }

  reset() {
    this.allStepData.Step4 = this._originalStep4.clone();
    this._validateAll(false);
  }

  clearPersonal_plan_FYFC() {

    this.allStepData.Step4.MonthList.forEach((value, index, array) => {
      if (index >= this.settlementMonth) {
        array[index].Plan = '0';
      }
    });

    this._validateAll(true);
    this._showResetBtn();

  }

  async savePersonalPlanFYFC() {
    this.isPersonalPlanFYFCSaveCanClick = false;
    let isNeedApprove: IsApproveInfo = await this.goalSettingService.isNeedApprove_plan(this.allStepData.Step1.FYFC, this.allStepData.Step4.Forecast, this.allStepData.YearConfig.GoalAndPlanDifferenceLimit).toPromise();
    console.warn("isNeedApprove result: ", isNeedApprove);
    if (isNeedApprove.IsNeedApprove) {
      this.isPopupPlanApprove = true;
    }

    else {
      console.warn("setAdjustGoal");

      this.submitGoal(false);
    }
  }

  cancelAdjustGoal() {
    this.isPopupPlanApprove = false;
  }

  submitGoal(isNeedApprove: boolean) {
    if (this.notifcationUtils.checkNetworkBeforeAction()) {

      let popup_state = isNeedApprove ? PLAN_FYFC_POPUP_STATE.NEEDAPPROVESUBMIT : PLAN_FYFC_POPUP_STATE.NOTNEEDAPPROVESUBMIT;
      //todo trans to object;
      this.goalStore.setPlanFYFCPopupInfo(new PlanFYFCPopupInfo(popup_state, this.allStepData));
      this.isPopupPlanApprove = false;
    }
    else {
      this.isPersonalPlanFYFCSaveCanClick = true;
    }
  }
  //end of for planFYFPopup

  dismissPlanApprove(event) {
    this.isPersonalPlanFYFCSaveCanClick = true;
  }


  //translate 
  private _doTranslate() {
    let translateVariable = {
      "rate": this.allStepData.YearConfig.GoalAndPlanDifferenceLimit * 100,
    }
    this.needToBeRecommentContent = this.translateService.translateWithVariable('Need_To_Be_Recomment_Content', translateVariable);
  }
  //end of translate



}
