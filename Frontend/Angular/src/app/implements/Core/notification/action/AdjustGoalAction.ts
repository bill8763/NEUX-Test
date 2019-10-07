import { Injectable } from "@angular/core";
import { GoalStoreService, GOAL_LANDING_STATUS } from "@allianzSND/goal";
import { INotificationAction, AppRouter } from "@allianzSND/core";
import { DefaultConflictAction } from "./DefaultConflictAction";
import { NotificationUtils } from "@allianzSND/notification";


@Injectable({
    providedIn: 'root'
})
export class AdjustGoalAction extends DefaultConflictAction implements INotificationAction {

    constructor(
        private goalStoreService: GoalStoreService,
        private notificationUtils: NotificationUtils,
        private router: AppRouter
    ) {
        super();
    }
    onConfirm(data: any): boolean {
        if (this.notificationUtils.checkNetworkBeforeAction()) {
            console.log("Popup AdjustGoalAction:", data);
            this.goalStoreService.setGoalLandingStatus(GOAL_LANDING_STATUS.ADJUST_GOAL);
            this.goalStoreService.setSettingYear(data.year);
            this.goalStoreService.setIsPromo(false);
            this.goalStoreService.setCanSkip(true);
            this.router.navigate("GoalSetting");
            return true;
        }
        else
            return false;
    }

    onCancel(data: any): boolean {
        this.router.navigate("Dashboard");
        return true;
    }
}