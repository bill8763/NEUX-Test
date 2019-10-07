import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DeviceService, NotificationMgr, NotificationObject, NotificationType, TimeoutService, SettingService } from '@allianzSND/core';
import { ModalManager } from '@allianzSND/ui';

@Component({
  selector: 'snd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Allianz-SND';

  public debugMode: boolean = false;
  public isLoadingOpen: boolean = false;

  constructor(
    private deviceService: DeviceService,
    private settingService: SettingService,
    private notificationMgr: NotificationMgr,
    private timeoutService: TimeoutService,
    private modalManager: ModalManager,
    private changeDetector: ChangeDetectorRef
  ) {
    this.settingService.getDebugMode().subscribe(debug => {
      this.debugMode = debug;
    })

    this.modalManager.getLoadingStatus().subscribe(status => {
      this.isLoadingOpen = status;
    })
  }

  public timeoutSecond: number = -1;

  ngOnInit() {
    this.showDataCollectionPopup();
    this.showRemainingTimeout();
  }

  private showDataCollectionPopup() {
    console.log("showDataCollectionPopup:", this.deviceService.getIsFirstLaunch());
    if (this.deviceService.getIsFirstLaunch()) {
      this.notificationMgr.pushNotification(NotificationType.DataCollection, {});
    }
  }

  private showRemainingTimeout() {
    this.timeoutService.getTimeoutRemainingSecond().subscribe(sec => {
      this.timeoutSecond = sec;
      this.changeDetector.detectChanges();
    })
  }
}
