import {Component, Input, OnInit} from '@angular/core';
import { Language } from '@allianzSND/core';
import { AgencyPlanMainData } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-agency-plan-overview',
  templateUrl: './goal-agency-plan-overview.component.html',
  styleUrls: ['./goal-agency-plan-overview.component.scss']
})
export class GoalAgencyPlanOverviewComponent implements OnInit {
  @Input()
  get dataObjectList() {
    return this._dataObjectList;
  }
  set dataObjectList(objectList: Array<AgencyPlanMainData>) {
    this._dataObjectList = this._sortByDataTye(objectList);
  }
  @Input() tableStyle: string = '';

  private _dataObjectList: Array<AgencyPlanMainData> = [];
  public language: Language = new Language();
  private readonly _sortLitByDataTyePriority = ['FYFC','ANP','Manpower','Recruitment'];

  constructor() { }

  ngOnInit() {
  }

  private _sortByDataTye(mainList: Array<AgencyPlanMainData>): Array<AgencyPlanMainData> {
    return mainList.map(x => x).sort((n1, n2) => {
      let priorityList = this._sortLitByDataTyePriority;
      return priorityList.indexOf(n1.DataType) - priorityList.indexOf(n2.DataType);
    })
  }


}
