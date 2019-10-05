
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ValidationResult, Language, TranslateService } from '@allianzSND/core';
import { GoalSettingStep4, GoalSettingGoalStatus, GoalSettingYearConfig, SettingChangeEvent, GoalSettingUtilService } from '@allianzSND/goal';


@Component({
  selector: "snd-goal-setting-step4",
  templateUrl: "./goal-setting-step4.component.html",
  styleUrls: ["./goal-setting-step4.component.scss"]
})
export class GoalSettingStep4Component {


  constructor(
    private goalSettingUtilService: GoalSettingUtilService
  ) {

  }
  @Output() reset: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() settingChange: EventEmitter<SettingChangeEvent> = new EventEmitter();
  @Input() isDisableBtn: boolean;
  @Input() isAdjust: boolean;
  @Input() isNextYear: boolean;
  @Input() isHasBtn: boolean;
  @Input() isAgentLeader: boolean;
  @Input() goalStatus: GoalSettingGoalStatus;
  @Input() yearConfig: GoalSettingYearConfig;
  @Input() goal: string;
  @Input() validationResult = new ValidationResult();
  @Input()
  public get data(): GoalSettingStep4 {
    return this._data;
  }
  public set data(value: GoalSettingStep4) {
    console.log("step4 set data:", value);
    this._data = value;
    if (value) {
      this.onDataUpdated();

    }
    this._doTranslate();
  }

  public isShowResetBtn: boolean = false;
  public PersonnelGoalApplicableYM: number;

  private _data: GoalSettingStep4 = null;
  private _originalData: GoalSettingStep4 = null;
  public language: Language = new Language();
  public goalEffectiveWorkingMonthTitle: string = '';

  public get totalRow() {
    if (this.yearConfig.MonthQuantityOfYear)
      return new Array(Math.ceil(this.yearConfig.MonthQuantityOfYear / 2)).fill(
        0
      );
    else return [];
  }

  public get PerformanceSettlementMonth() {
    return this.yearConfig.PerformanceSettlementMonth;
  }

  public get isShortfallLegal() {
    return !this.validationResult.isError('Shortfall');
  }

  onChange(index, value) {
    let colId = 'Plan_' + index
    console.log("Goal-setting-step4 onChange:", colId, value, this.validationResult);
    this.isShowResetBtn = true;
    this.validationResult.deleteError(index.toString());
    this.settingChange.emit(new SettingChangeEvent(4, colId, value));
  }

  private onDataUpdated() {
    this.PersonnelGoalApplicableYM = this.goalStatus.PersonnelGoalApplicableYM;
    this._originalData = this._data.clone();
  }

  public onReset() {
    this._data.Actual = this._originalData.Actual;
    this._data.Forecast = this._originalData.Forecast;
    this._data.Shortfall = this._originalData.Shortfall;
    this._data.MonthList = this._originalData.MonthList.map(x => x.clone());
    // this._data = this._originalData.clone();
    this.validationResult.clearErrorMap();
    this.validPage();
    console.log("Goal-setting-step4 onReset:", this.data);
    this.reset.emit(4);
  }
  private validPage() {
    console.log("Step4 validPage:", this.PerformanceSettlementMonth);
    this.data.MonthList.forEach(monthlyData => {
      if (monthlyData.Month > this.PerformanceSettlementMonth)
        this.onChange(monthlyData.Month, monthlyData.Plan);
    })
  }

  public doNext() {
    this.next.emit(4);
  }

  private _doTranslate() {

    this.goalEffectiveWorkingMonthTitle = this.goalSettingUtilService.translateByYearConfigAndGoaslStatus(this.yearConfig, this.goalStatus).PersonalGoalEffectiveMonthTitle;
  }

}
