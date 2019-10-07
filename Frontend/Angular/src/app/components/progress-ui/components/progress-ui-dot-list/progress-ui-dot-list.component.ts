import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-ui-dot-list',
  templateUrl: './progress-ui-dot-list.component.html',
  styleUrls: ['./progress-ui-dot-list.component.scss']
})
export class ProgressUiDotListComponent implements OnInit {
  @Input() dotMark=[{text:'',active:true}];
  @Input() titleText='';
  @Input() ActivityString:string;
  @Input() ActivityData;
  constructor() { }

  ngOnInit() {}

}
