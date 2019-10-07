import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { UiInformationBtnComponent } from '@allianzSND/ui'
import { ProgressService, InfoContentClass, ProgressDataTeamValueType } from '@allianzSND/progress';
import { ProgressDirectIndirectData } from '@allianzSND/progress';
import { TranslateService, Language, AppRouter } from '@allianzSND/core';
import { ProgressTeamDirectContentClass } from '@allianzSND/progress';
import { NotificationUtils } from '@allianzSND/notification';


@Component({
  selector: 'snd-progress-team-direct-unit',
  templateUrl: './progress-team-direct-unit.component.html',
  styleUrls: ['./progress-team-direct-unit.component.scss']
})
export class ProgressTeamDirectUnitComponent implements OnInit {

  //#region ui

  @Input() inputScrollContent;
  @Output() onClick = new EventEmitter();
  infoClick(){
    this.onClick.emit();
  } 

  //#endregion ui

  //#region ui function


  resetInfoPos() {

  }
  closeInfo() {

  }

  //測試用function
  consoleEvent(string, number) {
    console.log(string, number);
  }


  //#endregion

  // table heade data
  public TableHeadData = []; // 'Activities', 'Goal', 'Forecast','Actual', 'Shortfall'

  //TextData
  public TextData = [
    { text: 'F', active: true },
    { text: 'S', active: false },
    { text: 'M', active: false },
    { text: 'Su', active: true },
    { text: 'I', active: true }
  ]

  public IsShowActivities: boolean = true;

  //public ContentObj: ProgressTeamDirectContentClass;
  public Language: Language
  //public ContentInfoObj: InfoContentClass;

  constructor(
    private router: AppRouter,
    private progressService: ProgressService,
    private notificationUtils: NotificationUtils,
    private translateService: TranslateService) {

    //this.ContentObj = new ProgressTeamDirectContentClass(this.translateService);
    //this.ContentInfoObj = new InfoContentClass(this.translateService);

    this.Language = new Language();
    this._setTranslateVariable();
  }

  ngOnInit() { }

  //#region getter setter (input output)

  private _teamDirectDataList: Array<ProgressDirectIndirectData> = new Array<ProgressDirectIndirectData>();
  @Input()
  set TeamDirectDataList(value: Array<ProgressDirectIndirectData>) {
    this._teamDirectDataList = new Array<ProgressDirectIndirectData>();
    this._teamDirectDataList = value;
    console.debug("page teamDirectData: ", this._teamDirectDataList);
    if(this._teamDirectDataList.length != 0) {
      this._ShowActivitiesOrNot(this._teamDirectDataList);
    } 
  }

  get TeamDirectDataList() {
    return this._teamDirectDataList;
  }

  //#endregion getter setter (input output)

  //scroll page to top 
  private _PageScrollToTop() {
    console.log('in indirect unit scroll');
    setTimeout(() => {
      let scrollPage = document.querySelector('.progress-inner-layout-block .ui-page-content');
      if (scrollPage != null) {
        scrollPage.scrollTop = 0;
      }
    }, 300);
  } // end: _PageScrollToTop;

  //#region function

  public RouteToInnerPage(num: number) {

    //if online work
    if (this.notificationUtils.checkNetworkBeforeAction()) {

      //get agent obj
      let agentIdObj = this.TeamDirectDataList[num];
      console.debug("hey now number is : ", agentIdObj);
      

      //check can drill dowm?
      if(agentIdObj.Drilldown == true) {

        this._PageScrollToTop();

        //add agent obj to arr
        this.progressService.AddDrillDownAgentIdObj(agentIdObj);

        //route to next page
        this.router.navigate("ProgressInner");
      }  
    }
  }


  // public ShowDesh(num: number): string {
  //   if(num) {
  //     return (num <= -1) ? "--" : num.toString();
  //   }
  //   return "--";
  // }

  public ShowDesh(num: number): string {
    if(num != NaN) {
      return( num == -1) ? "--" : num.toString();
    }
  }

  //style1: blue, style2: red, style3: grey, style4: normal black
  public GetForecastStyle(forecastNum: number, Goal: number): string {
    if(forecastNum == -1 || Goal == -1) return "style4";
    return (forecastNum < Goal) ? "style2" : "style4";
  }



  public OrderEvent(eventObj) {

    //test it

    console.debug("original eventObj: ", eventObj);
    eventObj.index = (this.IsShowActivities) ? eventObj.index : eventObj.index + 1 ;
    console.debug("new eventObj:: ", eventObj);

    //click activity
    if (eventObj.index == 1) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._OrderItBy("descending", "Activities");
        console.debug("activity 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Activities");
        console.debug("activity 2");
      }
    }

    //click goal
    if (eventObj.index == 2) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._OrderItBy("descending", "Goal");
        console.debug("goal 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Goal");
        console.debug("goal 2");
      }
    }

    //click forecast
    if (eventObj.index == 3) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._OrderItBy("descending", "Forecast");
        console.debug("forecast 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Forecast");
        console.debug("forecast 2");
      }
    }

    //click actual
    if (eventObj.index == 4) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._OrderItBy("descending", "Actual");
        console.debug("actual 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Actual");
        console.debug("actual 2");
      }
    }

    //click shortfall
    if (eventObj.index == 5) {
      if (eventObj.event == 0) {
        //do nothing
      }
      else if (eventObj.event == 1) {
        //descending
        this._OrderItBy("descending", "Shortfall");
        console.debug("sortfall 1");
      }
      else if (eventObj.event == 2) {
        //ascending
        this._OrderItBy("ascending", "Shortfall");
        console.debug("sortfall 2");
      }
    }
  }



  private _OrderItBy(orderByState: string, orderTarget: string) {
    this._teamDirectDataList.sort((a, b) => {

      if (orderByState == "descending") {
        if (orderTarget == "Activities") {
          let sampleACount = this._GetActivitiesCount(a.Activities);
          let sampleBCount = this._GetActivitiesCount(b.Activities);
          if (sampleACount > sampleBCount) return -1;
          if (sampleACount < sampleBCount) return 1;
        }
        else if (orderTarget == "Goal") {
          if (a.Goal > b.Goal) return -1;
          if (a.Goal < b.Goal) return 1;
        }
        else if (orderTarget = "Forecast") {
          if (a.Forecast > b.Forecast) return -1;
          if (a.Forecast < b.Forecast) return 1;
        }
        else if (orderTarget = "Actual") {
          if (a.Actual > b.Actual) return -1;
          if (a.Actual < b.Actual) return 1;
        }
        else if (orderTarget = "Shortfall") {
          if (a.Shortfall > b.Shortfall) return -1;
          if (a.Shortfall < b.Shortfall) return 1;
        }
      }
      else if (orderByState == "ascending") {
        if (orderTarget == "Activities") {
          let sampleACount = this._GetActivitiesCount(a.Activities);
          let sampleBCount = this._GetActivitiesCount(b.Activities);
          if (sampleACount > sampleBCount) return 1;
          if (sampleACount < sampleBCount) return -1;
        }
        else if (orderTarget == "Goal") {
          if (a.Goal > b.Goal) return 1;
          if (a.Goal < b.Goal) return -1;
        }
        else if (orderTarget == "Forecast") {
          if (a.Forecast > b.Forecast) return 1;
          if (a.Forecast < b.Forecast) return -1;
        }
        else if (orderTarget == "Actual") {
          if (a.Actual > b.Actual) return 1;
          if (a.Actual < b.Actual) return -1;
        }
        else if (orderTarget == "Shortfall") {
          if (a.Shortfall > b.Shortfall) return 1;
          if (a.Shortfall < b.Shortfall) return -1;
        }

      }
      return 0;

    });
  }

  private _GetActivitiesCount(sampleStr: string): number {
    if(sampleStr == "" || sampleStr == undefined) return 0;
    return sampleStr.split('/').map(x => x.trim()).length;

    // if (sampleStr != "") {
    //   return sampleStr.split('/').map(x => x.trim()).length;
    // }
  }

  private _ShowActivitiesOrNot(data:Array<ProgressDirectIndirectData>){

    this.TableHeadData = [
      this._translateWithVariable(this.Language.goal),
      this._translateWithVariable(this.Language.forecast),
      this._translateWithVariable(this.Language.actual),
      this._translateWithVariable(this.Language.shortfall)
    ];

    if(data == null ) {
      this.IsShowActivities = false;
      return;
    }

    this.IsShowActivities = (data[0].DataType == ProgressDataTeamValueType.FYFC) ? true : false;
    if(this.IsShowActivities) {
      this.TableHeadData = [
        this._translateWithVariable(this.Language.activity),
        this._translateWithVariable(this.Language.goal),
        this._translateWithVariable(this.Language.forecast),
        this._translateWithVariable(this.Language.actual),
        this._translateWithVariable(this.Language.shortfall)
      ];
    }
  }

  //#endregion function

  //#region  translate


  private _translateVariable = null;
  private _setTranslateVariable() {

    this._translateVariable = {}
  }

  private _translateWithVariable(mappingID: string) {
    return this.translateService.translateWithVariable(mappingID, this._translateVariable);
  }

  //#endregion

}
