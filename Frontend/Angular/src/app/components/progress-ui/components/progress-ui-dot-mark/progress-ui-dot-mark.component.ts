import { Component, OnInit, Input } from '@angular/core';
import { StringUtils } from '@allianzSND/core';

//import { StringUtils } from '@allianzSND/core/lib/utils';

@Component({
  selector: 'app-progress-ui-dot-mark',
  templateUrl: './progress-ui-dot-mark.component.html',
  styleUrls: ['./progress-ui-dot-mark.component.scss']
})
export class ProgressUiDotMarkComponent implements OnInit {

  
  private _ActivityData = [
    {text:'F', active:false},
    {text:'S', active:false},
    {text:'M', active:false},
    {text:'Su', active:false},
    {text:'I', active:false}
  ];

  @Input() 
  get ActivityData(){
    return this._ActivityData;
  }
  set ActivityData(val){
    this._ActivityData = val;
  }

  private _activityString: string = "";
  @Input()
  set ActivityString(value:string) {
    this._activityString = value;
    if(StringUtils.isNotEmpty(this._activityString)) {
      let str = this._activityString.split('/').map(x => x.trim());

      for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < this.ActivityData.length; j++){
          if(str[i] == this.ActivityData[j].text) {
            this.ActivityData[j].active = true;
          }
        }
      }
    } 
  }

  get ActivityString() {
    return this._activityString;
  }

  @Input() textData=[
    { text:'F',
      active:false}
    ,{text:'S',
      active:false}
    ,{text:'M',
      active:false}
    ,{text:'Su',
      active:false}
    ,{text:'I',
      active:false}
  ];
  @Input() size = 16;
  @Input() fontSize = 10;

  constructor() { }

  ngOnInit() { }

  countFontSize(){
    return this.fontSize<12? this.fontSize/12: 1;
  }
}
