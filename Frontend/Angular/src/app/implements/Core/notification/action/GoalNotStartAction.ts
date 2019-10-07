import { Injectable } from "@angular/core";
import { INotificationAction, DeviceService, NotificationMgr, AppRouter } from "@allianzSND/core";
import { DefaultConflictAction } from "./DefaultConflictAction";


@Injectable({
    providedIn: 'root'
})
export class GoalNotStartAction extends DefaultConflictAction implements INotificationAction {

    constructor(
        private router: AppRouter,
        private deviceService: DeviceService,
        private notificationMgr: NotificationMgr
    ) {
        super();
    }
    onConfirm(data: any): boolean {
        console.log("GoalNotStartAction:", data);
        let notShow = data.notShow;
        let year = data.year;
        if (notShow && year) {
            let show_config = this.deviceService.getLocalStorage("GoalNotStartPopupConfig") ? JSON.parse(this.deviceService.getLocalStorage("GoalNotStartPopupConfig")) : {};
            show_config[year] = true;
            this.deviceService.setLocalStorage("GoalNotStartPopupConfig", JSON.stringify(show_config));
        }
        this.notificationMgr.showCategoryMessage("GoalSetting");
        this.notificationMgr.showCategoryMessage("Progress");
        this.router.navigate("Dashboard");
        return true;
    }

}