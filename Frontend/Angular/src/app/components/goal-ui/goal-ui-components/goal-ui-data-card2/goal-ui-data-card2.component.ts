import { Component, OnInit, Input } from '@angular/core';
import { Language } from '@allianzSND/core';
import { AgencyPlanMainData } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-ui-data-card2',
  templateUrl: './goal-ui-data-card2.component.html',
  styleUrls: ['./goal-ui-data-card2.component.scss']
})
export class GoalUiDataCard2Component implements OnInit {

  @Input() dataObjectList : Array<AgencyPlanMainData> = [];
  public language: Language = new Language();

  constructor() { }

  ngOnInit() {
  }
}
