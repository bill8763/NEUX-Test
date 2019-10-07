import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Language, TranslateService } from "@allianzSND/core";
import {
  GoalSettingStepData,
  GoalSettingStep2,
  GoalSettingStep3,
  ActivityValue,
  GoalSettingUtilService,
  GoalSettingStep3ForTabChange
} from "@allianzSND/goal";

@Component({
  selector: "snd-goal-overview-rocket-card",
  templateUrl: "./goal-overview-rocket-card.component.html",
  styleUrls: ["./goal-overview-rocket-card.component.scss"]
})
export class GoalOverviewRocketCardComponent implements OnInit {
  constructor(
    private goalSettingUtilService: GoalSettingUtilService,
    private translateService: TranslateService
  ) {}

  private _tabOptionList: Array<string> = [];

  public goalSettingStep2: GoalSettingStep2 = null;
  private _goalSettingStep3: GoalSettingStep3 = null;
  public currentActivityValue: ActivityValue = null;
  public unit: string;

  private _allStepData: GoalSettingStepData;
  @Input()
  public get allStepData() {
    return this._allStepData;
  }
  public set allStepData(value) {
    if (value) {
      this._allStepData = value;
      this.goalSettingStep2 = this._allStepData.Step2;
      this._goalSettingStep3 = this._allStepData.Step3;
      this.tabOptionList = this.goalSettingUtilService.getStep3TabOptionList(
        this._goalSettingStep3["Activity"]
      );
      this.onTabChange(0);
    }
  }

  @Input()
  set tabOptionList(tabOptionList) {
    this._tabOptionList = tabOptionList;
  }
  get tabOptionList() {
    return this._tabOptionList;
  }

  public language = new Language();

  public tabIndex = 0;

  ngOnInit() {}

  onTabChange(index: number) {
    this.tabIndex = index;

    let currentType = this.tabOptionList[this.tabIndex];
    console.warn("currentType: ", currentType);

    let step3Obj: GoalSettingStep3ForTabChange = this.goalSettingUtilService.getTabChangeStep3(
      currentType,
      this._goalSettingStep3
    );
    [this.currentActivityValue, this.unit] = [
      step3Obj.ActivityValue,
      this.translateService.translate(step3Obj.Unit)
    ];

    console.warn("currentActivityValue: ", this.currentActivityValue);
  }
}
