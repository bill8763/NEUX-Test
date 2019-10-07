import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { PersonalDataType, ProgressListContentClass } from '@allianzSND/progress';
import { PersonalDataTimeBase, PersonalDataState, ProgressPersonalData, ProgressYearConfig } from '@allianzSND/progress';
import { TranslateService, Language} from '@allianzSND/core';
import { ProgressService } from '@allianzSND/progress';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.scss']
})

export class ProgressListComponent implements OnInit {

  public ListItemName = new Array<object>();
  public sizeR: number = 55;
  public TodayData = PersonalDataTimeBase.Day;
  public WeekData = PersonalDataTimeBase.Week;

  public ShowTotalPoint: string = "--";
  private _totalPoints: number = 0;
  public PercentageBarValues: string = "0";
  public IsToggle: boolean = false;
  public IsToggleMsg: string = "";
  public EncourageMsg: string = "";

  private _pointLimit: number;
  private _yesterdayPoints: number = 0;

  //private _pointBases: Array<number> = new Array<number>(5);
  //public ContentObj: ProgressListContentClass;
  public Language: Language;

  constructor(
    private translateService: TranslateService,
    private progressService: ProgressService
  ) {
    this._SetTranslateVariable();
    this.Language = new Language();
    this.IsToggleMsg = this._TranslateWithVariable(this.Language.today);

    //this.ContentObj = new ProgressListContentClass(this.translateService);
  }

  ngOnInit() {
    this.WindowSize();
  }


  //#region getter setter (input output)

  @Output() private personalDataStateEvent = new EventEmitter<PersonalDataState>();

  private _progressYearCongfigList: Array<ProgressYearConfig>;
  @Input()
  set ProgressYearConfigList(value: Array<ProgressYearConfig>) {

    if (value != undefined && value.length != 0) {
      this._progressYearCongfigList = value;
      let datas = this._progressYearCongfigList;
      console.debug("----test inner this._progressYearCongfigList: ", this._progressYearCongfigList);
      console.debug("----test inner ans data: ", datas);

      if (datas != undefined || datas.length != 0) {
        for (let i = 0; i < datas.length; i++) {
          datas[i].DataYear = this._progressYearCongfigList[i].DataYear;
          datas[i].IsCurrent = this._progressYearCongfigList[i].IsCurrent;
          datas[i].FindConvertPointBase = this._progressYearCongfigList[i].FindConvertPointBase;
          datas[i].ScheduleConvertPointBase = this._progressYearCongfigList[i].ScheduleConvertPointBase;
          datas[i].MeetConvertPointBase = this._progressYearCongfigList[i].MeetConvertPointBase;
          datas[i].SubmitConvertPointBase = this._progressYearCongfigList[i].SubmitConvertPointBase;
          datas[i].InforceConvertPointBase = this._progressYearCongfigList[i].InforceConvertPointBase;
          datas[i].ProgressDayPointsLimit = this._progressYearCongfigList[i].ProgressDayPointsLimit;
        }

        for(let i = 0; i < datas.length; i++) {
          if(datas[i].IsCurrent) {
            this._pointLimit = datas[i].ProgressDayPointsLimit;
          }
        }
        
      }
    }
  }

  get ProgressYearConfigList() {
    return this._progressYearCongfigList;
  }


  private _personalDataYesterdayPoints: number;
  @Input()
  set PersonalDataYesterdayPoints(value: number) {
    this._personalDataYesterdayPoints = value;
    this._yesterdayPoints = this._personalDataYesterdayPoints;
  }

  get PersonalDataYesterdayPoints() {
    return this._personalDataYesterdayPoints;
  }


  private _personalData: ProgressPersonalData;
  @Input()
  set PersonalData(value: ProgressPersonalData) {

    if (value != undefined) {
      this._personalData = value;
      let data = this._personalData;
      console.debug("test Personal data: ", data);

      if (data != undefined) {
        this.ListItemName =
          [
            {
              Name: this._TranslateWithVariable(this.Language.find),
              Content: this._TranslateWithVariable(this.Language.findSubtitle),
              Unit: this._TranslateWithVariable(this.Language.customersUnit),
              Value: this.progressService.ShowDesh(data.Find),
              Points: this.progressService.GetPoints(data.Find, data.FindConvertPointBase)
            },
            {
              Name: this._TranslateWithVariable(this.Language.schedule),
              Content: this._TranslateWithVariable(this.Language.scheduleSubtitle),
              Unit: this._TranslateWithVariable(this.Language.times),
              Value: this.progressService.ShowDesh(data.Schedule),
              Points: this.progressService.GetPoints(data.Schedule, data.ScheduleConvertPointBase)
            },
            {
              Name: this._TranslateWithVariable(this.Language.meetPresentText),//meet
              Content: this._TranslateWithVariable(this.Language.meetSubtitle),
              Unit: this._TranslateWithVariable(this.Language.times),
              Value: this.progressService.ShowDesh(data.Meet),
              Points: this.progressService.GetPoints(data.Meet, data.MeetConvertPointBase)
            },
            {
              Name: this._TranslateWithVariable(this.Language.submit),
              Content: this._TranslateWithVariable(this.Language.submitSubtitle),
              Unit: this._TranslateWithVariable(this.Language.casesUnit),
              Value: this.progressService.ShowDesh(data.Submit),
              Points: this.progressService.GetPoints(data.Submit, data.SubmitConvertPointBase)
            },
            {
              Name: this._TranslateWithVariable(this.Language.inforce),
              Content: this._TranslateWithVariable(this.Language.inforceSubtitle),
              Unit: this._TranslateWithVariable(this.Language.casesUnit),
              Value: this.progressService.ShowDesh(data.Inforce),
              Points: this.progressService.GetPoints(data.Inforce, data.InforceConvertPointBase)
            },
          ];

        let total = this.progressService.GetTotalPoints(data);
        this._totalPoints = total;
        this.ShowTotalPoint = this.progressService.ShowDesh(total);

        this.PercentageBarValues = this.progressService.GetPercentageCircleValue(data, this._pointLimit, this.IsToggle);

        this._ShowEncourageMsg(data);
      }
    }
  }

  get PersonalData() {
    return this._personalData;
  }

  //#endregion getter setter (input output)

  //#region ui function

  public WindowSize() {
    let width = window.innerWidth;
    return (width > 1023) ? true : false;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.WindowSize();
  }

  //#endregion

  //#region state event

  public OnPersonalDataStateEventTrigger(time: PersonalDataTimeBase) {

    //make a state
    let state = new PersonalDataState();

    //now just use default year [0] and cant change it 
    state.DataYear = this._progressYearCongfigList[0].DataYear;
    state.TimeBase = time;
    state.DataType = PersonalDataType.Actual;
    this.personalDataStateEvent.emit(state);

    //toggle week or today
    this.IsToggle = !this.IsToggle;
    this.IsToggleMsg = (this.IsToggle) ? this._TranslateWithVariable(this.Language.week) : this._TranslateWithVariable(this.Language.today);
  }

  //#endregion state event

  //#region function

  private _ShowEncourageMsg(data: ProgressPersonalData) {

    if (data.TimeBase == PersonalDataTimeBase.Week || this._yesterdayPoints == NaN || this._totalPoints == NaN) {
      this.EncourageMsg = "";
      return;
    }

    // yesterday have get 20 points
    if (this._yesterdayPoints >= 20) {
      //done the work yesterday
      //"You almost made it last time. Let's try it again today.""
      this.EncourageMsg = this._TranslateWithVariable(this.Language.almostMadeItMsg);
    }
    else if (this._totalPoints >= 20) {
      //not done the work yesterday but have get 20 points today 
      // "Congratulations! You've got 20 points."
      this.EncourageMsg = this._TranslateWithVariable(this.Language.congratulationsMsg);
    }
    else if (this._totalPoints >= 10) {
      //not done the work yesterday but have get 10 points today
      //"Well done! You made it. Only 10 points to go. Check your schedule to start"
      this.EncourageMsg = this._TranslateWithVariable(this.Language.wellDoneMsg);
    }
    else {
      //not done the work yesterday and haven`t get more then 10 points today
      //"You did a great job last time. Let's do it again."
      this.EncourageMsg = this._TranslateWithVariable(this.Language.greatJobMsg);
    }

    //yesterday haven`t any points (0 points)
    if (this._yesterdayPoints == 0) {
      if (this._totalPoints >= 20) {
        // yesterday haven`t any points but have get 20 points today
        // "Congratulations! You've got 20 points."
        this.EncourageMsg = this._TranslateWithVariable(this.Language.congratulationsMsg);
      }
      else if (this._totalPoints >= 10) {
        //yesterday haven`t any points but have get 10 points today
        //"Well done! You made it. Only 10 points to go. Check your schedule to start"
        this.EncourageMsg = this._TranslateWithVariable(this.Language.wellDoneMsg);
      }
      else if (this._totalPoints < 10) {
        //yesterday haven`t any points and haven`t get more then 10 points
        this.EncourageMsg = "";
      }
    }
  }

  //#endregion function

  //#region translate

  //save and set translate variables
  private _translateVariable = null;

  private _SetTranslateVariable() {

    this._translateVariable = {
      "gratsPoints": 20,
      "wellDownPoints": 10
    }
  }

  private _TranslateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

  //#endregion

}
