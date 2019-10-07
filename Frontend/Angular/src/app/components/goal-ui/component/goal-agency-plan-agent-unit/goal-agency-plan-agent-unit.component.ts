import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UiInformationBtnComponent } from '@allianzSND/ui';
import { Language } from '@allianzSND/core';
import { AgencyPlanDetail, AgencyPlanDirectUnitDetail } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-agency-plan-agent-unit',
  templateUrl: './goal-agency-plan-agent-unit.component.html',
  styleUrls: ['./goal-agency-plan-agent-unit.component.scss']
})
export class GoalAgencyPlanAgentUnitComponent implements OnInit, AfterViewInit{

  // @Input() agentList = [];
  @Input() titleText: string = '';
  public windowWidth = window.innerWidth;
  // table headData
  @Input() tableHeadData = [];
  @Input() keyList = [];
  @Input() manpower: AgencyPlanDirectUnitDetail;
  @Input()
  get agentList() {
    return this._agentList;
  }
  set agentList(agentList) {
    if (agentList.length) {
      console.log("agentList: ", agentList);
      this._agentList = agentList;
    }
  }
  
  @Output() agencyClick = new EventEmitter<AgencyPlanDetail>();
  @Output() onClickInfo = new EventEmitter();
  private _agentList: Array<AgencyPlanDetail> = [];
  private _isShowTableVerticalView = false;
  @Input() 
  get isShowTableVerticalView() {
    return this._isShowTableVerticalView;
  }
  set isShowTableVerticalView(value: boolean) {
    this._isShowTableVerticalView = value;
  }
  @Output() isShowTableVerticalViewChange = new EventEmitter();
  public language: Language = new Language();

  @ViewChild('directTableBlock') directTableBlockEle: ElementRef;
  public infoContainer;

  constructor(protected elementRef: ElementRef) { }

  ngOnInit() {
    this.infoContainer = this.elementRef.nativeElement.querySelector('.direct-table-block');
    console.log('inint infoContainer',this.infoContainer);
  }
  ngAfterViewInit(){
    this.directTableBlockEle = this.directTableBlockEle.nativeElement;
  }

  onRowClick(number) {
    console.warn(this._agentList[number].AgentID);
    if(this._agentList[number].Drilldown === 'Y') {
      this.agencyClick.emit(this._agentList[number]);
    }
  }
  // info click
  infoClick(){
    this.onClickInfo.emit();
  }

  //public infoContainer = document.querySelector('.goal-agency-table-direct .direct-table-block');

  onIsShowTableVerticalViewChange(event) {
    this._isShowTableVerticalView = event;
    this.isShowTableVerticalViewChange.emit(this._isShowTableVerticalView);
  }
  

}
