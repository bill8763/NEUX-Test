import { Component, Input, Output, EventEmitter, OnInit, Optional, Inject } from '@angular/core';
import { ValidationResult, Language, TranslateService, ProfileCodeService } from '@allianzSND/core';
import { GoalSettingStep1, GoalSettingYearConfig, GoalSettingGoalStatus, SettingChangeEvent, GoalSettingUtilService, GoalSettingTranslate, goalSettingShowRuleToken, goalSettingShowRule } from '@allianzSND/goal';
import { SelectOption } from '@allianzSND/ui';



@Component({
  selector: 'snd-goal-setting-step1',
  templateUrl: './goal-setting-step1.component.html',
  styleUrls: ['./goal-setting-step1.component.scss']
})
export class GoalSettingStep1Component implements OnInit {



  @Output() reset: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() settingChange: EventEmitter<SettingChangeEvent> = new EventEmitter();



  @Input() isDisableBtn: boolean;
  @Input() isAdjust: boolean;
  @Input() isNextYear: boolean;
  @Input() yearConfig: GoalSettingYearConfig;
  @Input() goalStatus: GoalSettingGoalStatus;
  @Input() jobGrade: string;
  @Input() validationResult = new ValidationResult();

  private _originalData: GoalSettingStep1 = null;
  private _data: GoalSettingStep1 = null;
  public isShowResetBtn: boolean = false;
  public language: Language = new Language();
  public goalEffectiveWorkingMonthTitle: string = '';
  public FYFCActualVariableTitle: string = '';
  public FYFCNoToYearEndTitle: string = '';
  public annualConventionOption: Array<SelectOption>;
  public MDRTOption: Array<SelectOption>;
  public promotionPlanOption: Array<SelectOption>;
  public isShowDefaultSelectOption: boolean = false;

  public get FYFCTitle(): string {
    return this.isAdjust ? this.language.FYFCAllYear : this.language.FYFC;
  }



  @Input()
  public set data(data: GoalSettingStep1) {
    console.log("Step1 set Data:", data);
    this._originalData = Object.assign({}, data);
    this._data = data;
    this.onDataUpdated();
  }

  public get data() {
    return this._data;
  }



  // for UI
  @Input() isHasBtn: true;
  get urlIcon() {
    return this.isNextYear ? '02' : '01';
  }
  //end of UI

  constructor(
    protected translateService: TranslateService,
    protected profileCodeService: ProfileCodeService,
    private goalSettingUtilService: GoalSettingUtilService
  ) {
  }

  ngOnInit() {
    console.log("Step1 init");
    this.fetchOptions();
  }


  public onChange(column: string, value: any) {
    this.isShowResetBtn = true;
    this.settingChange.emit(new SettingChangeEvent(1, column, value));
  }

  private onDataUpdated() {
    this._doTranslate();
    console.log("Goal setting step1 onDataUpdated:", this.data);
  }

  private fetchOptions() {
    this.annualConventionOption = this.profileCodeService.getCodeArray("GoalSetting_AnnualConvention").map(x =>
      new SelectOption(x.getCode(), this.profileCodeService.convertCode2Text("GoalSetting_AnnualConvention", x.getCode())));
    this.MDRTOption = this.profileCodeService.getCodeArray("GoalSetting_MDRT").map(x =>
      new SelectOption(x.getCode(), this.profileCodeService.convertCode2Text("GoalSetting_MDRT", x.getCode())));
    this.promotionPlanOption = this.profileCodeService.getCodeArray("Promotion_Plan")
      .filter(x => JSON.parse(x.getArguments()).MappingJobGrade.split(',').indexOf(this.jobGrade) > -1)
      .map(x =>
        new SelectOption(x.getCode(), this.profileCodeService.convertCode2Text("Promotion_Plan", x.getCode())));
    if (this.promotionPlanOption.length > 0) {
      this.promotionPlanOption = [new SelectOption('-1', '- -'), ...this.promotionPlanOption];
    }
    console.log("fetchOptions:", this.promotionPlanOption, this.jobGrade);
  }

  public onReset() {
    this._data = Object.assign(this._data, this._originalData);
    this.validPage();
    this.reset.emit(1);
  }

  public doNext() {
    this.next.emit(1);
  }


  private validPage() {
    this.onChange("FYFC", this.data.FYFC);
    this.onChange("AnnualConvention", this.data.AnnualConvention);
    this.onChange("MDRT", this.data.MDRT);
    this.onChange("PromotionPlan", this.data.PromotionPlan);
    if (this.isAdjust)
      this.onChange("FYFCNowToYearEnd", this.data.FYFCNowToYearEnd);
  }

  private _doTranslate() {

    let translateResult: GoalSettingTranslate = this.goalSettingUtilService.translateByYearConfigAndGoaslStatus(this.yearConfig, this.goalStatus);
    this.goalEffectiveWorkingMonthTitle = translateResult.PersonalGoalEffectiveMonthTitle;
    this.FYFCActualVariableTitle = translateResult.PersonalFYFCActualVariableTitle;
    this.FYFCNoToYearEndTitle = translateResult.FYFCNowToYearEndTitle;
  }


}
