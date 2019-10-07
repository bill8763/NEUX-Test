import { Injectable, Inject, Injector } from "@angular/core";
import { v4 as uuid } from 'uuid';

import {
  PushIDMgr,
  DeviceFactory,
  APIDispatch,
  APIFactory,
  IDeviceDao,
  DefaultLoginMgr,
  NotificationMgr,
  ConfigToken,
  DeviceService,
  SettingService
} from "@allianzSND/core";
import { fromEvent } from "rxjs";
import { SyncPushAPI } from "@allianzSND/core";
import { timeout } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FirebaseMgr implements PushIDMgr {
  private _dao: IDeviceDao;
  private pushID = "";
  private isRegister: boolean = false;
  private isDebug: boolean = false;

  constructor(
    private DeviceFactory: DeviceFactory,
    private settingService: SettingService,
    private dispatcher: APIDispatch,
    private APIFactory: APIFactory,
    private injector: Injector,
    private notificationMgr: NotificationMgr,
    @Inject(ConfigToken) private APP_CONFIG: any
  ) {
    this.settingService.getDebugMode().subscribe(debug => {
      this.isDebug = debug;
    })
  }

  init() {
    console.log("notification center init");
    console.log("this.loginMgr:", this.getLoginMgr());
    var _this = this;
    document.addEventListener("deviceready", function () {
      try {
        _this.isRegister = true;
        _this.register();
      } catch (err) {
        _this.isRegister = false;
        console.warn("cannot register firebase:", err.message);
      }
    });

    fromEvent(document, "online")
      .pipe
      // debounceTime(5000)
      ()
      .subscribe(() => {
        if (!this.isRegister && this.pushID) this.register();
      });
  }

  getPushID() {
    if (this.APP_CONFIG.ENV === 'DEV' || this.APP_CONFIG.ENV === 'DEV_WebSQL')
      return uuid();
    else
      return this.pushID;
  }

  private register() {
    this._dao = this.DeviceFactory.getDefaultDao();
    this._dao.registerNotfiy().then(token => {
      this.saveToken(token);
    });
    this._dao.subscribeSubject("test");
    this._dao.onNotificationOpen(notification => {
      this.onNotificationOpen(notification);
    });
  }

  private saveToken(token: string) {
    console.log("save firebase token:", token);
    this.pushID = token;
    let loginMgr = this.getLoginMgr();
    if (loginMgr && loginMgr.checkLogin()) {
      this.settingService.deviceChange(this.pushID);
    }
  }

  private onNotificationOpen(notify) {
    //ＴＯＤＯ：判斷要幹嘛
    console.log("Recive notify:", notify);
    let loginMgr = this.getLoginMgr();
    let isLogin = loginMgr ? loginMgr.checkLogin() : true;
    if (!isLogin) {
      loginMgr.logout();
    } else {
      Object.keys(notify).forEach(key => {
        if (this.isJsonString(notify[key]))
          notify[key] = JSON.parse(notify[key]);
      });
      if (this.isDebug)
        alert("you have a push message");
      this.notificationMgr.pushNotification(notify.sndMessageType, notify);

      //送回給 中台 已讀
      let readingData = notify.messageID ? [notify.messageID] : null;
      if (readingData) {
        this.pushReading(readingData);
      }
    }
  }

  private async pushReading(pushData: Array<string>) {
    let env = this.APP_CONFIG.ENV;
    let url = this.APP_CONFIG[env]["SYNC_URL"]["MESSAGE"]["push"];
    let pushAPI = this.APIFactory.getAPI("SyncPush");
    (<SyncPushAPI>pushAPI).url = url;
    (<SyncPushAPI>pushAPI).body = pushData;
    await this.dispatcher
      .dispatch(pushAPI)
      .pipe(timeout(10000))
      .toPromise();
  }

  private getLoginMgr() {
    try {
      return this.injector.get(DefaultLoginMgr);
    } catch (e) {
      return null;
    }
  }

  private isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
