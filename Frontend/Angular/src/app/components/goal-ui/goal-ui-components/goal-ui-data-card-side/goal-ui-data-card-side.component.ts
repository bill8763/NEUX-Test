import { Component, OnInit, Input } from '@angular/core';
import { Language } from '@allianzSND/core';
import { GoalSettingStep3, ActivityValue } from '@allianzSND/goal';

@Component({
  selector: 'snd-goal-ui-data-card-side',
  templateUrl: './goal-ui-data-card-side.component.html',
  styleUrls: ['./goal-ui-data-card-side.component.scss']
})
export class GoalUiDataCardSideComponent implements OnInit {

  constructor() { }

  @Input() public activityValue: ActivityValue;

  @Input() public unit: string;
  @Input() leftTitleMain = '';
  @Input() leftTitleSub = '';
  @Input() leftNum = '';
  @Input() rightTitleMain = '';
  public language = new Language();

  ngOnInit() {
  }

}
