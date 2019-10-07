import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValidationResult, Language } from '@allianzSND/core';
import { GoalSettingStep2, GoalSettingYearConfig, GoalSettingGoalStatus, SettingChangeEvent, GoalSettingUtilService } from '@allianzSND/goal';


@Component({
  selector: 'snd-goal-setting-step2',
  templateUrl: './goal-setting-step2.component.html',
  styleUrls: ['./goal-setting-step2.component.scss']
})
export class GoalSettingStep2Component implements OnInit {



  @Output() reset: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() settingChange: EventEmitter<SettingChangeEvent> = new EventEmitter();
  @Input() isDisableBtn: boolean;
  @Input() isAdjust: boolean;
  @Input() isNextYear: boolean;
  @Input() yearConfig: GoalSettingYearConfig;
  @Input() goalStatus: GoalSettingGoalStatus;
  @Input() validationResult = new ValidationResult();
  @Input()
  public get data(): GoalSettingStep2 {
    return this._data;
  }
  public set data(value: GoalSettingStep2) {
    this._data = value;
    this._originalData = Object.assign({}, value);
    this.onDataUpdated();
  }

  public language: Language = new Language();
  public goalEffectiveWorkingMonthTitle: string = '';

  //for UI
  get urlIcon() {
    return this.isNextYear ? '02' : '01';
  } @Input() isHasBtn: true;
  public isErrorAvgFYFC = false;
  //end of UI


  private _data: GoalSettingStep2 = null;
  private _originalData: GoalSettingStep2 = null;
  public isShowResetBtn: boolean = false;


  constructor(
    private goalSettingUtilService: GoalSettingUtilService
  ) {
  }


  ngOnInit() {
    console.log("Step2 init");
  }


  public onReset() {
    this._data = Object.assign(this._data, this._originalData);
    this.onDataUpdated();
    this.validPage();
    this.reset.emit(2);
  }

  public doNext() {
    this.next.emit(2);
  }


  private validPage() {
    this.onChange("PerCase", this._data.PerCase);
  }

  public onChange(column: string, value: any) {
    this.isShowResetBtn = true;
    this.settingChange.emit(new SettingChangeEvent(2, column, value));
  }

  private onDataUpdated() {
    this._doTranslate();
    console.log("step2 onDataUpdated:", this._data);
  }

  private _doTranslate() {
    
    this.goalEffectiveWorkingMonthTitle = this.goalSettingUtilService.translateByYearConfigAndGoaslStatus(this.yearConfig, this.goalStatus).PersonalGoalEffectiveMonthTitle;

  }

}
