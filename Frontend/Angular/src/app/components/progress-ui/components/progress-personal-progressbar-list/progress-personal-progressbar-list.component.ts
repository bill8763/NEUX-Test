import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UiInformationBtnComponent } from '@allianzSND/ui';
import { PersonalDataTimeBase, InfoContentClass, ProgressActivityListContentClass } from '@allianzSND/progress';
import { IProgressBarControl, ProgressBarControlData, ProgressPersonalData, ProgressYearConfig } from '@allianzSND/progress';
import { TranslateService, Language } from '@allianzSND/core';
import { NumberUtils } from 'projects/core/src/lib/utils';

@Component({
  selector: 'snd-progress-personal-progressbar-list',
  templateUrl: './progress-personal-progressbar-list.component.html',
  styleUrls: ['./progress-personal-progressbar-list.component.scss']
})

export class ProgressPersonalProgressbarListComponent implements OnInit, IProgressBarControl {

  
  @Output() onClick = new EventEmitter();
  // click in info and output to show popup
  clickInfo(){
    
    this.onClick.emit();
  }
  //#region ui
  @Input() inputScrollContent;

  //#endregion ui

  //TWMode //todo
  public ProgressBarControlData = new ProgressBarControlData();
  public configMin: number = 70;
  public configMax: number = 100;


  public ListItemName = new Array<any>();
  public ListItemGoal = new Array<number>();
  public Title: string = "";

  //public ContentObj: ProgressActivityListContentClass;
  //public ContentInfoObj: InfoContentClass;

  public Language: Language;

  constructor(private translateService: TranslateService) {
    //this.ContentObj = new ProgressActivityListContentClass(this.translateService);
    //this.ContentInfoObj = new InfoContentClass(this.translateService);
    this.Language = new Language();
    this._SetTranslateVariable();
    this.Title = this._TranslateWithVariable(this.Language.actualPlan);
  }

  ngOnInit() {}

  //#region  getter setter (input output)

  //year config
  private _progressYearConfigList: Array<ProgressYearConfig>;
  @Input()
  set ProgressYearConfigList(value: Array<ProgressYearConfig>) {
    this._progressYearConfigList = new Array<ProgressYearConfig>();
    this._progressYearConfigList = value;
  }

  get ProgressYearConfigList() {
    return this._progressYearConfigList;
  }


  //activity
  private _personalActivitiesData: ProgressPersonalData;
  @Input()
  set PersonalActivitiesData(value: ProgressPersonalData) {
    this._personalActivitiesData = new ProgressPersonalData();
    this.ListItemName = new Array<any>();
    this._personalActivitiesData = value;

    let data = this._personalActivitiesData;

    if (data != undefined) {
      this.ListItemName =
        [
          {
            Name: this._TranslateWithVariable(this.Language.find),
            Content: this._TranslateWithVariable(this.Language.findContentTextPer),//data.TimeBase
            Value: data.Find,
            Diff: this._getDifferentPercentage(data.Schedule, data.Find)
          },
          {
            Name: this._TranslateWithVariable(this.Language.schedule),
            Content: this._TranslateWithVariable(this.Language.scheduleContentTextPer),
            Value: data.Schedule,
            Diff: this._getDifferentPercentage(data.Meet, data.Schedule)
          },
          {
            Name: this._TranslateWithVariable(this.Language.meetPresentText),
            Content: this._TranslateWithVariable(this.Language.meetPresentContentTextPer),
            Value: data.Meet,
            Diff: this._getDifferentPercentage(data.Submit, data.Meet)
          },
          {
            Name: this._TranslateWithVariable(this.Language.submit),
            Content: this._TranslateWithVariable(this.Language.submitContentTextPer),
            Value: data.Submit,
            Diff: this._getDifferentPercentage(data.Inforce, data.Submit)
          },
          {
            Name: this._TranslateWithVariable(this.Language.inforce),
            Content: this._TranslateWithVariable(this.Language.inforceContentTextPer),
            Value: data.Inforce,
          },
        ];
    }

  }

  get PersonalActivitiesData() {
    return this._personalActivitiesData;
  }


  //goal/plan activity
  private _personalActivitiesGoalPlanData: ProgressPersonalData = new ProgressPersonalData();
  @Input()
  set PersonalActivitiesGoalPlanData(value: ProgressPersonalData) {
    this._personalActivitiesGoalPlanData = value;

    let data = this._personalActivitiesGoalPlanData;
    if (data != undefined) {

      this.ListItemGoal =
        [
          data.Find,
          data.Schedule,
          data.Meet,
          data.Submit,
          data.Inforce
        ];

      if (data.TimeBase == PersonalDataTimeBase.Year) {
        this.Title = this._TranslateWithVariable(this.Language.actualGoal);
      }
      else {
        this.Title = this._TranslateWithVariable(this.Language.actualPlan);
      }
    }

  }

  get PersonalActivitiesGoalPlanData() {
    return this._personalActivitiesGoalPlanData;
  }

  //#endregion getter setter (input output)

  //#region funtion


  private _getDifferentPercentage(numerator: number, denominator: number): number {

    if(numerator <= 0 || denominator <= 0) return 0;

    return Math.round((numerator / denominator) * 100);
  }

  public GetGoalPlanPoint(num: number): string {
    if(num <= 0 || num == NaN) return "--";

    let ans = num.toFixed(1);
    return (ans) ? ans : "--";
  }

  public GetAchievePercentage(numerator: number, denominator: number): string {

    if(!NumberUtils.isNumber(numerator) || !NumberUtils.isNumber(denominator)) return "--";
    if(numerator <= -1 && denominator <= -1) return "--";
    if(numerator <= -1 || denominator <= -1) return "0";
    if(numerator == 0 || denominator == 0) return "0";

    let ans = Math.round((numerator / denominator) * 100);

    //what if less than 1 
    if(ans < 1) {
      return "0";
    }
    else {
      return ans.toString();
    }
  }

  // public GetAchievePercentage(numerator: number, denominator: number): string {

  //   if(!NumberUtils.isNumber(numerator) || !NumberUtils.isNumber(denominator)) return "--";
  //   if(numerator <= -1 || denominator <= -1) return "--";

  //   let ans = Math.round((numerator / denominator) * 100);
  //   return ans.toString();
  // }

  public GetBarLength(numerator: number, denominator: number, fixedNum: number): string {

    if(numerator <= 0 || denominator <= 0) return "0";
    
    let ans = (numerator / denominator);//1.5
    if (ans) {
      return (ans >= 1.5) ? "1" : ans.toFixed(fixedNum);
    } else {
      return "0";
    }
  }

  //error1 red 0-69 || error2 orange 70-99 || pass green >=100
  public GetBarColor(numerator: number, denominator: number): string {

    if(numerator <= 0 || denominator <= 0) return "error1";

    let ans = ((numerator / denominator) * 100);
    if (ans) {
      if (ans >= 0 && ans <= 69) {
        return "error1";
      }
      else if (ans >= 70 && ans <= 99) {
        return "error2";
      }
      else if (ans >= 100) {
        return "pass";
      }
    }
    return "error1";
  }

  //new come form interface
  public getProgressBarColor(numerator: number, denominator: number, configMin: number, configMax: number): string {
    let ans = ((numerator / denominator) * 100);

    if (ans) {
      if (ans >= 0 && ans < configMin) {
        return "error1";
      }
      else if (ans >= configMin && ans < configMax) {
        return "error2"
      }
      else if (ans >= configMax) {
        return "pass"
      }
    }
      return "error1";
  }


  //new come form interface
  public getProgressBarLength(numerator: number, denominator: number, fixedNum: number, max: number): string {
    let ans = (numerator / denominator);//1.5
    if (ans) {
      return (ans >= max) ? "1" : ans.toFixed(fixedNum);
    } else {
      return "0";
    }
  }

  public ShowDesh(num: number): string {
    if(num) {
      return (num <= -1) ? "--" : num.toString();
    }
    return "--";
  }

  //#endregion funtion

  //#region translate

  private _translateVariable = null;
  private _SetTranslateVariable() {
    this._translateVariable = {}
  }

  private _TranslateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

  //#endregion

}
