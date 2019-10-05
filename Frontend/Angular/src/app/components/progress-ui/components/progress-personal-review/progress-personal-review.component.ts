import { Component, OnInit, Input } from '@angular/core';
import { TABLETIELESTYLETYPE } from '@allianzSND/ui';
import { ProgressYearConfig } from '@allianzSND/progress';
import { ProgressMonthlyContentClass } from '@allianzSND/progress';
import { TranslateService, Language } from '@allianzSND/core';
import { MonthlyPlanFYFCData, GoalSettingStep4, } from '@allianzSND/goal';

@Component({
  selector: 'snd-progress-personal-review',
  templateUrl: './progress-personal-review.component.html',
  styleUrls: ['./progress-personal-review.component.scss']
})

export class ProgressPersonalReviewComponent implements OnInit {

  //#region ui

  //控制table title樣式
  TABLETIELE_STYLE_7 = TABLETIELESTYLETYPE.STYLE_7;

  consoleEvent(string, number) {
    console.log(string, number);
  }

  //#endregion ui

  public PersonalMonthlyPlanFYFCList: Array<MonthlyPlanFYFCData>;
  public TotalYTDActual: string = "--";
  public TotalForecast: string = "--";

  //public ContentObj: ProgressMonthlyContentClass;
  public Language: Language;
  
  constructor(private translateService: TranslateService) { 
    //this.ContentObj = new ProgressMonthlyContentClass(this.translateService);
    this.Language = new Language();
  }

  ngOnInit() { }

  //#region getter setter (input output)

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


  //get Current Working Month by tag index
  private _currentWorkingMonth:number = 0;
  @Input()
  set CurrentWorkingMonth(value:number) {
    if(value != undefined) {
      this._currentWorkingMonth = value;
      console.debug("show current working month here: ", this._currentWorkingMonth);
    }
  }

  get CurrentWorkingMonth() {
    return this._currentWorkingMonth;
  }


  private _monthlyPlanFYFCData:GoalSettingStep4;
  @Input()
  set MonthlyPlanFYFCData(value: GoalSettingStep4) {
    if(value != null && value != undefined) {
      this._monthlyPlanFYFCData = value;

      let data = this._monthlyPlanFYFCData;
      this.PersonalMonthlyPlanFYFCList = data.MonthList;

      this.TotalYTDActual = data.Actual;//total actual
      this.TotalForecast =  data.Forecast;//total forecast

      console.debug("Monthly: ", value);
      console.debug("_monthlyPlanFYFCData: ", this._monthlyPlanFYFCData);
    }
      
  }
  get MonthlyPlanFYFCData():GoalSettingStep4 {
    return this._monthlyPlanFYFCData;
  }

  //#endregion getter setter (input output)

}
