import { Component, OnInit, Input } from '@angular/core';
import { GoalTitleListItem } from './goa-ui-title-list-item';

@Component({
  selector: 'app-goal-ui-title-list',
  templateUrl: './goal-ui-title-list.component.html',
  styleUrls: ['./goal-ui-title-list.component.scss']
})
export class GoalUiTitleListComponent implements OnInit {

  private _listItem: Array<GoalTitleListItem> = [];
  @Input() title: string = '';
  @Input()
  set listItem(listItem: Array<GoalTitleListItem>) {
    if (listItem.length) {
      this._listItem = listItem;
      if (!this.listItemTextIsRed.length) {
        this.listItemTextIsRed = Array(this._listItem.length).fill(false);
      }
    }

  }
  get listItem() {
    return this._listItem;
  }

  @Input() listItemTextIsRed: Array<boolean> = [];  // 列表

  constructor() { }

  ngOnInit() {
  }

}