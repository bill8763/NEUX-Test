import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@allianzSND/core';

@Component({
  selector: 'snd-dashboard-controller',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public year = 10;
  public month = 3;

  public experienceStr: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {

  }





}
