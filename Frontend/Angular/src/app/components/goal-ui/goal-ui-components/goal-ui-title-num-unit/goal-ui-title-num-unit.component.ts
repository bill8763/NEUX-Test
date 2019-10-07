import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal-ui-title-num-unit',
  templateUrl: './goal-ui-title-num-unit.component.html',
  styleUrls: ['./goal-ui-title-num-unit.component.scss']
})
export class GoalUiTitleNumUnitComponent implements OnInit {

  @Input() title: string = '';
  @Input() num: string = '';
  @Input() unit: string = '';
  @Input() imgUrl: string= '';
  public styleHasImg: string;

  constructor() { }

  ngOnInit() {
    this.styleHasImg = this.imgUrl ? 'style-has-img': '';
  }

}
