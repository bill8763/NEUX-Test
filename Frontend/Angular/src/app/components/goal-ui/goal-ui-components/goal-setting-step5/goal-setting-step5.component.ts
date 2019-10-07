import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ValidationResult, Language } from '@allianzSND/core';
import { GoalSettingStep5, GoalSettingYearConfig, GoalSettingGoalStatus, SettingChangeEvent, GoalSettingUtilService, GoalSettingTranslate } from '@allianzSND/goal';


@Component({
  selector: 'snd-goal-setting-step5',
  templateUrl: './goal-setting-step5.component.html',
  styleUrls: ['./goal-setting-step5.component.scss']
})
export class GoalSettingStep5Component implements OnInit {

  @Output() reset: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() settingChange: EventEmitter<SettingChangeEvent> = new EventEmitter();

  @Input() isDisableBtn: boolean;
  @Input() isAdjust: boolean;
  @Input() isNextYear: boolean;
  @Input() validationResult = new ValidationResult();
  @Input() isHasBtn: true;
  @Input() yearConfig: GoalSettingYearConfig;
  @Input() goalStatus: GoalSettingGoalStatus;

  private _originalData: GoalSettingStep5 = null;
  private _data: GoalSettingStep5 = null;
  public isShowResetBtn: boolean = false;
  public colNeedDescription = ['TeamFYFC', 'TeamNowToYearEnd'];
  public language: Language = new Language();
  public goalEffectiveWorkingMonthTitle: string = '';
  public FYFCActualVariableTitle: string = '';
  public ANPActualVariableTitle: string = '';
  public FYFCNoToYearEndTitle: string = '';
  public ANPNowToYearEndTitle: string = '';

  @Input()
  public set data(data: GoalSettingStep5) {
    this._originalData = Object.assign({}, data);
    console.log("Step5 set data:", this._originalData);
    this._data = data;
    this.onDataUpdated();
  }

  public get data(): GoalSettingStep5 {
    return this._data;
  }

  public get FYFCTitle(): string {
    return this.isAdjust ? this.language.FYFCAllYear : this.language.FYFC;
  }
  public get ANPTitle(): string {
    return this.isAdjust ? this.language.ANPAllYear : this.language.ANP;
  }

  get urlIcon() {
    return this.isNextYear ? '02' : '01';
  }

  constructor(
    private goalSettingUtilService: GoalSettingUtilService
  ) {

  }

  ngOnInit() {
    console.log("Step5 init");
  }

  public onChange(column: string, value: any) {
    this.isShowResetBtn = true;
    this.settingChange.emit(new SettingChangeEvent(5, column, value))
  }

  private onDataUpdated() {
    this._doTranslate();
    console.log("Goal setting step5 onDataUpdated:", this._data);
  }




  public onReset() {
    console.log("OriginalData:", this._originalData);
    this._data = Object.assign(this._data, this._originalData);
    this.onDataUpdated();
    this.validPage();
    this.reset.emit(5);
  }

  public doNext() {
    this.next.emit(5);
  }

  private validPage() {
    this.onChange("TeamFYFC", this.data.TeamFYFC);
    this.onChange("Manpower", this.data.Manpower);
    this.onChange("Recruitment", this.data.Recruitment);
    if (this.isAdjust) {
      this.onChange("TeamFYFCNowToYearEnd", this.data.TeamFYFCNowToYearEnd);
    }
  }

  private _doTranslate() {

    let translateResult: GoalSettingTranslate = this.goalSettingUtilService.translateByYearConfigAndGoaslStatus(this.yearConfig, this.goalStatus);
    this.goalEffectiveWorkingMonthTitle = translateResult.TeamGoalEffectiveMonthTitle;
    this.FYFCActualVariableTitle = translateResult.TeamFYFCActualVariableTitle;
    this.ANPActualVariableTitle = translateResult.TeamANPActualVariableTitle;
    this.FYFCNoToYearEndTitle = translateResult.FYFCNowToYearEndTitle;
    this.ANPNowToYearEndTitle = translateResult.ANPNowToYearEndTitle;
  }
}
