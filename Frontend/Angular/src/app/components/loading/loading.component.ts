import { Component, OnInit, Optional, Inject } from '@angular/core';
import { LoadingAppToken, LoadingApp, AppRouter, DefaultLoadingApp } from '@allianzSND/core';

@Component({
  selector: 'snd-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {


  public currentProgress = 0.2;
  private loadingApp: LoadingApp;
  constructor(
    defaultLoadingApp: DefaultLoadingApp,
    @Optional() @Inject(LoadingAppToken) loadingApp: LoadingApp,
    private router: AppRouter,
  ) {
    this.loadingApp = loadingApp || defaultLoadingApp;
  }

  loadingProgressFinish() {
    setTimeout(() => {
      this.router.navigate("GoalLanding");
    }, 1000);
  }

  ngOnInit() {
    this.loadingApp.loading();
    this.loadingApp.onLoaded().subscribe((percent: number) => {
      this.currentProgress = percent / 100;
      console.log('loading percent:', percent);
      // if (percent >= 100) {

      // }
    });
  }

}
