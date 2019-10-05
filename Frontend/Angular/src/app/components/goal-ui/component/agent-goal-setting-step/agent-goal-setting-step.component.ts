import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, Optional, Inject } from "@angular/core";
import { STEPSTYLETYPE, ModalManager } from "@allianzSND/ui";
import { GoalSettingService, GoalValidService } from "@allianzSND/goal";
import { LoginInfo, ValidationResult, TranslateService, Language, DefaultLoginMgr, SUBMITGOALTYPE, PERFORMANCETYPE, SuccessStatus, NotificationMgr, NotificationType } from "@allianzSND/core";
import { take } from "rxjs/operators";
import { NotificationUtils } from "@allianzSND/notification";
import { GoalSubmitExtension, GoalSettingStepData, GoalSettingStep4, SettingChangeEvent, IsApproveInfo, GoalSubmitExtensionToken, ValidError, GoalSettingStepDataParams } from "@allianzSND/goal";


@Component({
  selector: "snd-agent-goal-setting-step",
  templateUrl: "./agent-goal-setting-step.component.html",
  styleUrls: ["./agent-goal-setting-step.component.scss"]
})
export class AgentGoalSettingStepComponent implements OnInit {
  @ViewChild("scrollContent") scrollContent: ElementRef;
  @ViewChild("step1") step1Card: ElementRef;
  public isPopOpenInfoStep3 = false;
  clickInfoStep3() {
    this.isPopOpenInfoStep3 = true;
  }


  colorCodeStep = "";
  // theme color
  colorCode: string = "";
  // theme icon url  ==> 01 : this year / 02 : next year
  urlIcon: string = "";

  // steps data
  STEP_STYLE = STEPSTYLETYPE.STYLE_1;

  //end of UI


  @Input()
  public get goalSettingStepDataParams(): GoalSettingStepDataParams {
    return this._goalSettingStepDataParams;
  }
  public set goalSettingStepDataParams(value: GoalSettingStepDataParams) {
    this._goalSettingStepDataParams = value;

    console.log("Agent-goal-setting-step set year:", this._goalSettingStepDataParams.isAdjust);

    this.fetchGoalData().then(() => {
      if (this._goalSettingStepDataParams.isAdjust) {
        this.validPage(this.maxStep);
      }
    });
  }

  @Input() canSkip: boolean;
  @Input() backUrl: string = null;

  @Output() submit: EventEmitter<any> = new EventEmitter();

  protected _goalSettingStepDataParams: GoalSettingStepDataParams;
  protected agentInfo: LoginInfo = null;
  protected validArr: Array<ValidError> = [];


  public maxStep: number = 4;
  public currentStep: number = 1;
  public stepsData = ["Status_Bar_Step1", "Status_Bar_Step2", "Status_Bar_Step3", "Status_Bar_Step4"];
  public data: GoalSettingStepData = null;
  public workingExperienceYear: number = 0;
  public workingExperienceMonth: number = 0;
  public jobGrade: string = "";
  public gender: string = "";

  public isBtnCanClick: boolean = true;
  public isPlanApproveBtnCanClick: boolean = true;
  public isPopupPlanApprove: boolean = false;
  public validationResultMap: Array<ValidationResult>;
  private _isNextYear: boolean = null;
  public get isNextYear(): boolean {
    return this._isNextYear;
  }
  public set isNextYear(value: boolean) {
    this._isNextYear = value;
    this.urlIcon = this._isNextYear ? "02" : "01";
    this.colorCodeStep = this._isNextYear ? "#007d8c" : "";
  }


  //for translate
  public language = new Language();
  public translateVariable = null;
  public yearTitle: string = "";
  public workingExperienceSubtitle: string = "";
  public needToBeRecommentContent: string = "";
  //end of translate

  constructor(
    protected goalSettingService: GoalSettingService,
    protected goalValidService: GoalValidService,
    protected loginMgr: DefaultLoginMgr,
    protected notificationUtils: NotificationUtils,
    protected translateService: TranslateService,
    protected modalManager: ModalManager,
    protected notificationMgr: NotificationMgr,
    @Optional() @Inject(GoalSubmitExtensionToken) private submitExtension: GoalSubmitExtension
  ) {
    console.log("base step init.");
    console.log("this.maxStep:", this.maxStep);

    this.validationResultMap = [];
    new Array(this.maxStep).fill(0).forEach(() => {
      this.validationResultMap.push(new ValidationResult());
    });
    this.init();
  }

  private async init() {
    console.log("this.agentInfo ", this.agentInfo);
    this.loginMgr.getLoginInfo().pipe(take(1)).subscribe(info => {
      this.agentInfo = info;
      this.calculateWorkingExperience();
      this.jobGrade = this.agentInfo.JobGrade;
      this.gender = this.agentInfo.Gender === "M" ? "male" : "female";
    });
  }

  ngOnInit() {
  }

  protected async fetchGoalData() {
    this.data = await this.goalSettingService.getGoalSettingStep1_5Data(this._goalSettingStepDataParams.DataYear, this._goalSettingStepDataParams.isAdjust).toPromise();
    console.log("Agant-goal-setting-step fetchGoalData:", this.data);
    this.isNextYear = this.data.YearConfig.IsCurrent !== 'Y';
    // TODO: 由service update
    // this.data.Step3 = this.updateActivityData(this.data);
    // this.data.Step4 = await this.updatePlanData(this.data, true);
    if (this._goalSettingStepDataParams.isAdjust) {
      this.currentStep = this.maxStep;
    }

    this._setTranslateVariable();
    this._doTranslate();
    console.log("after fetchGoalData:", this.data);
  }
  protected updateActivityData(data: GoalSettingStepData) {
    let activityGoal = this._goalSettingStepDataParams.isAdjust ? data.Step1.FYFCNowToYearEnd : data.Step1.FYFC;
    let activityData = this.goalSettingService.calculateActivityData(activityGoal, data.Step2.PerCase, data.YearConfig);
    return activityData;
  }

  protected async updatePlanData(data: GoalSettingStepData, init = false) {
    let goal = Number(data.Step1.FYFC);
    let returnData: GoalSettingStep4;
    if (this._goalSettingStepDataParams.isAdjust && init) {
      returnData = await this.goalSettingService.getMonthActualPlan(PERFORMANCETYPE.PERSONAL, this._goalSettingStepDataParams.DataYear, data.YearConfig.MonthQuantityOfYear, data.YearConfig.PerformanceSettlementMonth).toPromise();
    }
    else {
      returnData = this.goalSettingService.calculateMonthActualPlan(data.YearConfig, goal.toString(), data.ActualList);
    }
    return returnData;
  }

  protected calculateWorkingExperience() {
    let workingExperienceMonth = this.agentInfo.CurrentJobSeniorityMonth || 0;
    this.workingExperienceMonth = workingExperienceMonth % 12;
    this.workingExperienceYear = Math.floor(workingExperienceMonth / 12);
  }

  public async onNext(step: number) {
    console.log("onNext step:", step);
    console.log("maxStep:", this.maxStep);
    console.log("data:", this.data);
    this.validPage(step);
    let isTrue = this.validationResultMap.slice(0, step).map(x => x.isTrue()).reduce((prev, cur) => prev && cur, true);
    if (isTrue) {
      if (step === this.maxStep) {
        this.onSubmit();
      }
      else {
        this.currentStep = Math.min((step + 1), this.maxStep);
        setTimeout(() => {
          this.scrollToStep(this.currentStep);
        }, 100);
      }
    }
    else {
      let _errorStep = this.validationResultMap.map((x, index) => {
        return {
          step: index + 1,
          status: x.isTrue()
        };
      });
      let errorStep = _errorStep.filter(x => !x.status)[0].step;
      this.scrollToStep(errorStep);
    }
  }

  onReset(step) {
    console.log('onReset step: ', step, ' data: ', this.data);
  }

  private async onSubmit() {
    this.isBtnCanClick = false;
    let isNeedApprove: IsApproveInfo = await this.goalSettingService.isNeedApprove(SUBMITGOALTYPE.ALL, this._goalSettingStepDataParams.DataYear, this.data).toPromise();
    this.data.Step1.ActivityFYFC = this._goalSettingStepDataParams.isAdjust ? this.data.Step1.FYFCNowToYearEnd : this.data.Step1.FYFC;
    this.data.Step1.ActivityDays = this.data.YearConfig.NowToYearEndDays.toString();
    if (isNeedApprove && isNeedApprove.IsPopup) {
      //ShowPopup
      this.isPopupPlanApprove = true;
    }
    else {
      this.approveSubmit(isNeedApprove.IsNeedApprove);
    }
  }

  public async approveSubmit(isNeedApprove = true) {
    this.isPlanApproveBtnCanClick = false;
    if (this.notificationUtils.checkNetworkBeforeAction()) {
      this.modalManager.toggleLoading(true);
      if (this.submitExtension) {
        this.data = this.submitExtension.execute(this.data);
      }
      let submitResp: SuccessStatus = await this.goalSettingService.submitGoal(SUBMITGOALTYPE.ALL, isNeedApprove, this.data).toPromise();
      if (submitResp.isSuccess) {
        this.modalManager.toggleLoading(false);
        this.submit.emit();
      }
      else {
        this.notificationMgr.pushNotification(NotificationType.SubmitFail, null);
      }
    }
    else {
      this.isPlanApproveBtnCanClick = true;
      this.isBtnCanClick = true;
    }
  }

  public cancel() {
    this.isPopupPlanApprove = false;
    this.isBtnCanClick = true;
  }

  public async onValueChange(option: SettingChangeEvent) {
    console.log("Goal setting onValueChange:", option);
    let step: number = option.step;
    let column: string = option.column;
    let val: any = option.value;
    this.validArr = this.goalValidService.onChangeValid(step, column, val, this.data, this._goalSettingStepDataParams.isAdjust, this.validArr);
    console.log("onValueChange validResult:", this.validArr);
    console.log("onValueChange validationResultMap:", this.validationResultMap);
    this.updateErrorMsg(this.validArr);
    // TODO: 由service update
    console.log("after update Stringify data:", JSON.stringify(this.data));
  }

  private updateErrorMsg(validResult: Array<ValidError>) {
    console.log("UpdateErrorMsg:", this.maxStep);
    this.validationResultMap.forEach(x => x.clearErrorMap());
    if (validResult.length > 0) {
      validResult.forEach(validObj => {
        let step = validObj.Step;
        let id = validObj.ColId;
        let msg = validObj.Msg;
        this.validationResultMap[step - 1].setErrorMap(id, msg);
      });
    }
  }

  private validPage(step = this.maxStep) {
    this.validArr = this.goalValidService.pageValid(step, this.data, this._goalSettingStepDataParams.isAdjust);
    console.log("validResult:", this.validArr);
    this.updateErrorMsg(this.validArr);
    console.log("this.validationResultMap", this.validationResultMap);
  }

  //For UI
  protected scrollToStep(step: number) {
    console.log("scrollToStep:", step);

    let stepBlock = this.scrollContent.nativeElement.querySelector("#step_" + step);
    let scrollContent = this.scrollContent.nativeElement;

    if (stepBlock && scrollContent) {
      // let move = errorBlock.offsetTop - header.getBoundingClientRect().height - 50;
      if (step == 2 && window.innerWidth >= 768) {
        stepBlock.style.marginBottom = "210px";
      } else if (step != 2) {
        this.scrollContent.nativeElement.querySelector("#step_2").style.marginBottom = "0";
      }

      // click next and scroll to next step
      let move;
      //for pad
      if (window.innerWidth >= 768) {
        // 130px ==> for css scroll content margin-top -130px, 30px ==> is for space of two cards
        move = stepBlock.offsetTop - 130 + 30;
      }
      //for mobile
      else if (window.innerWidth < 768) {
        // 231px ==> for css scroll content margin-top margin-top -231px,  10px ==> is for space of two cards
        move = stepBlock.offsetTop - 231 + 10;
      }

      console.log("move:", move);

      scrollContent.scrollTo({ top: move, behavior: "smooth" });
    }
  }

  resetInfoPos() {
  }

  private _setTranslateVariable() {
    this.translateVariable = {
      //for yearTitle
      dataYear: this._goalSettingStepDataParams.DataYear,

      //for workingExperienceSubtitle
      jobGrade: this.jobGrade,
      workingExperienceYear: this.workingExperienceYear,
      workingExperienceMonth: this.workingExperienceMonth,

      //for needToBeRecommentContent
      rate: this.data.YearConfig.GoalAndPlanDifferenceLimit * 100
    };
  }

  private _doTranslate() {
    this.yearTitle = this._translateWithVariable("Variable_Year_Title"); //What is your goal in ${dataYear} ?
    this.workingExperienceSubtitle = this._translateWithVariable("Working_Experience"); //Allianz ${jobGrade} working experience is ${workingExperienceYear} years and ${workingExperienceMonth} months.
    this.needToBeRecommentContent = this._translateWithVariable("Need_To_Be_Recomment_Content"); //Your plan value has deviated over ${rate}% , must be sent to the leader for re-comment.
    this.stepsData = this.stepsData.map(x => this.translateService.translate(x));
  }

  private _translateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this.translateVariable);
  }
}
