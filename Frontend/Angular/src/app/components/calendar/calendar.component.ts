import { Component, OnInit, Input, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'snd-calendar-controller',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private _parentHeight = 0;
  @Input()
  get parentHeight() {
    return this._parentHeight;
  }
  set parentHeight(val) {
    this._parentHeight = val;

    if (this._parentHeight == 0) {
      this._parentHeight = window.innerHeight;
    }
  }

    // check is pad or mobile
    public windowWidth: number;
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this._parentHeight = window.innerHeight;
      this.changeDetector.markForCheck();
      console.log('calendar parent height');
    }


  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
