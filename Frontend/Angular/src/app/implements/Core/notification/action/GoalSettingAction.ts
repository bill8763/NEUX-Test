import { Injectable } from "@angular/core";
import { GoalStoreService, GoalPopupResponse } from "@allianzSND/goal";
import { INotificationAction, AppRouter, NotificationType } from "@allianzSND/core";
import { DefaultConflictAction } from "./DefaultConflictAction";
import { NotificationUtils } from "@allianzSND/notification";


@Injectable({
    providedIn: 'root'
})
export class GoalSettingAction extends DefaultConflictAction implements INotificationAction {

    constructor(
        private goalStoreService: GoalStoreService,
        private notificationUtils: NotificationUtils,
        private router: AppRouter
    ) {
        super();
    }
    onConfirm(data: any): boolean {
        if (this.notificationUtils.checkNetworkBeforeAction()) {
            console.log("Popup GoalSettingAction:", data);
            // this.goalStoreService.setSettingYear(data.year);
            // this.goalStoreService.setIsPromo(data.isPromo);
            // this.goalStoreService.setCanSkip(data.canSkip);
            // this.router.navigate("GoalSetting");
            let resp = new GoalPopupResponse();
            resp.response = true;
            resp.type = data.isPromo ? NotificationType.GoalPromoSetting : NotificationType.NeedGoalSetting;
            this.goalStoreService.setPopupResp(resp);
            return true;
        }
        else
            return false;
    }

    onCancel(data: any): boolean {
        console.log("Popup GoalSettingAction cancel");
        let resp = new GoalPopupResponse();
        resp.response = false;
        resp.type = data.isPromo ? NotificationType.GoalPromoSetting : NotificationType.NeedGoalSetting;
        this.goalStoreService.setPopupResp(resp);
        return true;
    }
}