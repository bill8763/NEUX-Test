import { Component, HostListener, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CONTENTGAP, TABLELISTSTYLETYPE, TABLETIELESTYLETYPE, UiInformationBtnComponent } from '@allianzSND/ui';
import { GoalSettingService } from '@allianzSND/goal';
import { Language, TranslateService, DataSyncService, AppRouter } from '@allianzSND/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AgencyPlanStatus, AgencyPlanStoreService, AGENCY_STATE, AgencyPlanAgentInfo, AgencyPlanDetail, AgencyPlanGoalExpected, AgencyPlanDirectUnitDetail, AgencyPlanMainData } from '@allianzSND/goal';
import * as html2canvas from 'html2canvas';
import { NotificationUtils } from '@allianzSND/notification';

declare var cordova;

@Component({
  selector: 'snd-goal-agency-plan',
  templateUrl: './goal-agency-plan.component.html',
  styleUrls: ['./goal-agency-plan.component.scss']
})
export class GoalAgencyPlanComponent implements OnInit, OnDestroy {

  dataYear: number;
  private agencyState: AGENCY_STATE = AGENCY_STATE.FIRST;
  private stateChanges: Subscription;
  public windowWidth = window.innerWidth;
  // table headData

  private directUnitFYFCHeadData = ['Goal', 'Forecast', 'Actual', 'Remaining_Month_Plan', 'Case_Count', 'Average_Per_Case'];
  private indirectUnitFYFCHeadData = ['Goal', 'Forecast', 'Actual', 'Remaining_Month_Plan', 'Manpower_Goal', 'Recruitment_Goal'];
  private directUnitANPHeadData = ['Goal', 'Forecast', 'Actual', 'Remaining_Month_Plan'];
  private indirectUnitANPHeadData = ['Goal', 'Forecast', 'Actual', 'Remaining_Month_Plan', 'Manpower_Goal', 'Recruitment_Goal'];
  public directUnitFYFCTitleList = [];
  public indirectUnitFYFCTitleList = [];
  public directUnitANPTitleList = [];
  public indirectUnitANPTitleList = [];
  public directUnitFYFCKey = ['Goal', 'Forecast', 'Actual', 'MonthPlan', 'CaseCount', 'PerCase'];
  public directUnitANPKey = ['Goal', 'Forecast', 'Actual', 'MonthPlan'];
  public indirectUnitKey = ['Goal', 'Forecast', 'Actual', 'MonthPlan', 'Manpower', 'Recruitment'];
  // public isShowTableVerticalView = false;
  public selectTab: number = 0;
  public exceptedRecruitment: AgencyPlanGoalExpected;
  // public objectMap = new Map<string,Array<Object>>();
  public mainDataList: Array<AgencyPlanMainData> = [];
  public directAgentFYFCList: Array<AgencyPlanDetail> = [];
  public indirectAgentFYFCList: Array<AgencyPlanDetail> = [];
  public directAgentANPList: Array<AgencyPlanDetail> = [];
  public indirectAgentANPList: Array<AgencyPlanDetail> = [];
  public isDisplaySavePopup: boolean = false;
  public language: Language = new Language();
  public isRefreshFinishContent: boolean = true;
  public getAgencyPlanDetailDataSubscribe: Subscription = null;
  public directObject: AgencyPlanDirectUnitDetail = new AgencyPlanDirectUnitDetail();
  public indirectObject: AgencyPlanDirectUnitDetail = new AgencyPlanDirectUnitDetail();
  public isPopupEditRecruitment: boolean = false;
  public isPopupOpenAgencyPlanUnitInfo = false;

  public isShowTableVerticalViewDirect: boolean = false;
  public isShowTableVerticalViewIndirect: boolean = false;
  constructor(
    private goalSettingService: GoalSettingService,
    private agencyPlanStoreService: AgencyPlanStoreService,
    private notifcationUtils: NotificationUtils,
    private translateService: TranslateService,
    private router: AppRouter,
    private route: ActivatedRoute,
    private syncService: DataSyncService
  ) {
    this.dataYear = Number(this.route.snapshot.params.dataYear);
    this._getMainData();
    this._getGoalExpected();
    this._getAgencyPlanDetail();
    if (this.goalSettingService.saveFeedbackState) {
      this.isDisplaySavePopup = true;
      this.goalSettingService.saveFeedbackState = false;
    }

    //start of translate 
    this.directUnitFYFCTitleList = this._tranlasteArrayEachItem(this.directUnitFYFCHeadData);
    this.indirectUnitFYFCTitleList = this._tranlasteArrayEachItem(this.indirectUnitFYFCHeadData);
    this.directUnitANPTitleList = this._tranlasteArrayEachItem(this.directUnitANPHeadData);
    this.indirectUnitANPTitleList = this._tranlasteArrayEachItem(this.indirectUnitANPHeadData);
    //end of translate

  }

  private _tranlasteArrayEachItem(array: Array<string>): Array<string> {
    return array.map(item => this.translateService.translate(item));
  }
  private resetSumNumber() {

    this.directObject = new AgencyPlanDirectUnitDetail();
    this.indirectObject = new AgencyPlanDirectUnitDetail();
  }

  ngOnInit() {
    this.windowWidth = window.innerWidth;

    // this._getMainData();
    // this._getAgencyPlanDetail();
    // this._getGoalExpected();

    this.stateChanges = this.agencyPlanStoreService.getState().subscribe((agencyStatus: AgencyPlanStatus) => {
      console.warn('getState in agencyPlan: ', agencyStatus);
      let state = agencyStatus.state;
      // this.agencyState = agencyStatus.state;
      if (state != AGENCY_STATE.DISPLAY && state != AGENCY_STATE.FIRST) {

        this._getMainData();
        this._getAgencyPlanDetail();
        this._getGoalExpected();
      }
    });
  }

  ngOnDestroy(): void {
    this.stateChanges.unsubscribe();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  private async _getGoalExpected() {
    //GoalSetting Expected
    let resp = await this.goalSettingService.getGoalExpected(this.dataYear);
    console.log('resp from service: ', resp);
    if (resp) {
      this.exceptedRecruitment = resp;
      this._setSeasonRecruitmentByCal();
    } else {
      //todo throw error
      console.warn("getGoalSettingExpected Error");
    }
  }

  private async _getMainData() {
    let resp = await this.goalSettingService.getAgencyPlanMainData(this.dataYear).toPromise();
    if (resp) {
      this.mainDataList = resp.AgencyMainDataList;
      console.log("_getMainData this.mainDataList ori: ", this.mainDataList);
      console.log("_getMainData this.mainDataList clone: ", JSON.parse(JSON.stringify(this.mainDataList)));
    } else {
      //todo throw error
      console.warn("getAgencyPlanMainList Error")
    }
  }

  private async _getAgencyPlanDetail() {
    //AgencyPlan Detail
    let agencyPlanDetailList: Array<AgencyPlanDetail> = await this.goalSettingService.getAgencyPlanDetailData(this.dataYear).toPromise();
    if (agencyPlanDetailList) {


      //2019-07-20 added by titan for fix reset number
      this.resetSumNumber();

      this.directAgentFYFCList = this._doFilterDetailList(agencyPlanDetailList, 'Direct', 'FYFC');
      this.indirectAgentFYFCList = this._doFilterDetailList(agencyPlanDetailList, 'Indirect', 'FYFC');
      this.directAgentANPList = this._doFilterDetailList(agencyPlanDetailList, 'Direct', 'ANP');
      this.indirectAgentANPList = this._doFilterDetailList(agencyPlanDetailList, 'Indirect', 'ANP');

      let indirectAgentFYFCListFilterDrilldown = this.indirectAgentFYFCList.filter(detail => detail.Drilldown === 'Y');
      this.indirectObject.Manpower = indirectAgentFYFCListFilterDrilldown.map(detail => detail.Manpower).reduce((total, each) => total + Number(each), 0).toString();
      this.indirectObject.Recruitment = indirectAgentFYFCListFilterDrilldown.map(detail => detail.Recruitment).reduce((total, each) => total + Number(each), 0);

      this.directObject.Manpower = this.directAgentANPList.length.toString();
      this.directObject.Recruitment = this.exceptedRecruitment.RecruitmentTotal;

      console.log('this.directObject', this.directObject);
    } else {
      //todo throw error
      console.warn("getAgencyPlanMainList Error");
    }

  }

  private _doFilterDetailList(list: Array<AgencyPlanDetail>, unitType: string, dataType: string): Array<AgencyPlanDetail> {
    return list.filter(detail => detail.DirectUnitType === unitType && detail.DataType == dataType);
  }

  //控制table title樣式
  TABLETIELE_STYLE_4 = TABLETIELESTYLETYPE.STYLE_4;
  TABLETIELE_STYLE_6 = TABLETIELESTYLETYPE.STYLE_6;

  //控制間距
  GAP_SIZE_20 = CONTENTGAP.GAP20;

  onTabChange(selectedTab) {
    this.selectTab = selectedTab;
  }

  onClickEdit() {
    console.warn('CLICK');
    this.isPopupEditRecruitment = true;
    console.warn('isPopupEditRecruitment', this.isPopupEditRecruitment);
  }

  public onSaveRecruitment(recruitment) {
    console.log("onSaveRecruitment: ", recruitment);

    this.goalSettingService.saveGoalExpected(recruitment, this.indirectObject.Recruitment).subscribe((resp) => {
      console.warn('onSaveRecruitment', resp);
      if (resp.status) {
        this.exceptedRecruitment = (<AgencyPlanGoalExpected>recruitment).clone();
        this._setSeasonRecruitmentByCal();
        this._getMainData();
        this.isPopupEditRecruitment = false;
      }
    })
  }

  private _setSeasonRecruitmentByCal(): void {

    let calculateRecruitment = this.goalSettingService.calculaRecruitmentSum(this.exceptedRecruitment);
    this.exceptedRecruitment.RecruitmentTotal = calculateRecruitment;
    this.directObject.Recruitment = calculateRecruitment;
  }


  onAgencyClick(agencyDetail: AgencyPlanDetail) {
    // get
    if (this.notifcationUtils.checkNetworkBeforeAction()) {
      let agentInfo: AgencyPlanAgentInfo = new AgencyPlanAgentInfo(agencyDetail.AgentID, agencyDetail.AgentName, this.dataYear, agencyDetail.AppUseMode);
      console.warn("onAgencyClick agentInfo: ", agentInfo);
      this.agencyPlanStoreService.setCurrentAgencyDetail(agentInfo);
      this.agencyState = AGENCY_STATE.DISPLAY;
      this.router.navigate("commitment");
    }
  }

  clickAgenInfo() {
    this.isPopupOpenAgencyPlanUnitInfo = true;
  }

  async onSaveFile() {
    (<any>cordova).plugins.IOSScreenShot.ScreenShot()
    // let header = document.getElementsByClassName('ui-inner-page-header')[0];
    // let content = document.getElementsByClassName('ui-inner-page-content')[0];


    // const options = {
    //   // logging: true,
    //   // profile: true,
    //   useCORS: true
    //   // allowTaint: true
    // }
    // html2canvas(content, options).then(function (contentCanvas: HTMLCanvasElement) {
    //   if (contentCanvas.getContext) {



    //     // contentCanvas.setAttribute('id', 'tempCanvas');

    //     console.log('contentCanvas: ', contentCanvas);


    //     // document.body.appendChild(contentCanvas);

    //     //var myImage = (<HTMLCanvasElement>document.getElementById('tempCanvas')).toDataURL();
    //     var myImage = contentCanvas.toDataURL("image/png");

    //     // console.warn(myImage);

    //     // var win = window.open();
    //     // win.document.write('<iframe src="' + myImage + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');

    //     var params = { data: myImage, format: 'PNG', mediaScanner: true };
    //     (<any>window).imageSaver.saveBase64Image(params,
    //       function (filePath) {
    //         console.log('File saved on ' + filePath);
    //       },
    //       function (msg) {
    //         console.error(msg);
    //       }
    //     );
    //   }
    // });



  }

  takeScreenShot() {
    // 使用html2canvas插件，将数据源中的数据转换成画布。
  }


  async onRefresh(event) {
    Promise.all([this._getMainData(), this._getAgencyPlanDetail(), this._getGoalExpected()]).then(() => {
      this.isRefreshFinishContent = true;
    });
  }
}
