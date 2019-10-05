import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal-ui-title-subtitle-num-unit',
  templateUrl: './goal-ui-title-subtitle-num-unit.component.html',
  styleUrls: ['./goal-ui-title-subtitle-num-unit.component.scss']
})
export class GoalUiTitleSubtitleNumUnitComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() num: string = '';
  @Input() unit: string = '';

  constructor() { }

  ngOnInit() {
  }

}
