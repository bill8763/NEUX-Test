import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'snd-goal-ui-title-table',
  templateUrl: './goal-ui-title-table.component.html',
  styleUrls: ['./goal-ui-title-table.component.scss']
})
export class GoalUiTitleTableComponent implements OnInit {

  @Input() title: string = '';
  @Input() desc: string = '';

  constructor() { }

  ngOnInit() {
  }

}
