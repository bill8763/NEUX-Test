import { Component, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { UiInformationBtnComponent, CONTENTGAP } from '@allianzSND/ui';
import { ValidationResult, Language, TranslateService } from '@allianzSND/core';
import { GoalSettingStep3, GoalSettingGoalStatus, GoalSettingYearConfig, GoalSettingUtilService } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-setting-step3',
  templateUrl: './goal-setting-step3.component.html',
  styleUrls: ['./goal-setting-step3.component.scss']
})
export class GoalSettingStep3Component implements OnInit {

  @Input() inputScrollContent;
  @Input() inputAutoScrollContent;
  @Input() isDisableBtn: boolean;
  @Input() isAdjust: boolean;
  @Input() isNextYear: boolean;
  @Input() isHasBtn: boolean = false;
  @Input() goalStatus: GoalSettingGoalStatus;
  @Input() validationResult = new ValidationResult();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() onClick = new EventEmitter();


  public goalEffectiveWorkingMonthTitle: string = '';



  //控制間距
  public GAP_SIZE_40 = CONTENTGAP.GAP40;

  //end of UI

  private tabDisplayMap = {
    "Day": { displayName: "Daily", unit: "Day" },
    "Week": { displayName: "Weekly", unit: "Week" },
    "Month": { displayName: "Monthly", unit: "Month" }
  };
  public tabIndex: number;
  public tabOptionList: Array<string> = [];
  public unit: string;
  public isHideTab: boolean = false;
  public currentActivityData: any = null;
  public language: Language = new Language();
  public scrollContent;
  public stepContainerBlock;
  private _data: GoalSettingStep3;

  constructor(
    private goalSettingUtilService: GoalSettingUtilService
  ) {

  }
  @Input()
  set data(data: GoalSettingStep3) {
    this._data = data;
    console.log("step3 set data:", this._data);
    if (this._data && this._data.ActivityValues.length > 0)
      this.onDataUpdated();
  }
  get data() {
    return this._data;
  }


  private onDataUpdated() {
    this.tabOptionList = this._data.ActivityValues.map(x => this.tabDisplayMap[x.TimeBase].displayName);
    let tabIndex = this.tabOptionList.indexOf(this.tabDisplayMap[this._data.Activity].displayName);
    console.log("tabOptionList:", this.tabOptionList);
    console.log("tabIndex:", tabIndex);
    this._doTranslate();
    this.tabChange(tabIndex);

  }


  public tabChange(index: number) {
    let activity = this.tabOptionList[index];
    this.tabIndex = index;
    this.currentActivityData = this._data.ActivityValues.filter(x => this.tabDisplayMap[x.TimeBase].displayName === activity)[0];
    if (this.currentActivityData)
      this.unit = this.tabDisplayMap[this.currentActivityData.TimeBase].unit;
  }

  public doNext() {
    this.next.emit(3);
  }

  infoClick(){
    this.onClick.emit();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollContent = document.querySelector('.ui-inner-step-main .layout-main-content');
      this.stepContainerBlock = document.querySelector('.ui-inner-step-main .layout-main-content');
      console.log('step setting ngAfterViewInit', this.scrollContent, 'this.stepContainerBlock', this.stepContainerBlock);
    }, 300)

  }
  
  ngOnInit() {
  }


  private _doTranslate() {
    this.goalEffectiveWorkingMonthTitle = this.goalSettingUtilService.translateByYearConfigAndGoaslStatus(new GoalSettingYearConfig(), this.goalStatus).PersonalGoalEffectiveMonthTitle;
  }





}
