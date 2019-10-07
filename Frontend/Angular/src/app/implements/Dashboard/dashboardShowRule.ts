import { showDashboardRule, DashboardShowLoginInfo, DashboardMessageType } from '@allianzSND/dashboard';
import { LoginInfo } from '@allianzSND/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROLE } from '@allianzSND/goal'


@Injectable({
    providedIn: 'root',
})

export class dashboardShowRule implements showDashboardRule {

    constructor() {

    }

    dashboardShowLoginInfo(loginInfo: LoginInfo): Observable<DashboardShowLoginInfo> {
        console.log("in impl loginInfo: ", loginInfo);
        return Observable.create((observer) => {
            let isMale: boolean = (loginInfo.Gender == 'M' || loginInfo.Gender == 'm');
            let imgUrl: string = (isMale ? 'assets/img/icon-msg-pesron-male.svg' : 'assets/img/icon-msg-pesron-female.svg');

            observer.next(new DashboardShowLoginInfo(loginInfo.AgentName, imgUrl));
            observer.complete();
        });
    }

    showTimeBaseTitle(appUseMode: string) {
        let showTitle = (appUseMode === ROLE.ZONEHEAD || appUseMode === ROLE.CAO) ? "yearly" : "monthly";
        return showTitle;
    }

    showMessageType(loginInfo: LoginInfo): Array<DashboardMessageType> {
        let defaultType = [DashboardMessageType.Unread, DashboardMessageType.All, DashboardMessageType.Progress, DashboardMessageType.GoalSetting, DashboardMessageType.Customer, DashboardMessageType.PendingApproval];
        if (loginInfo && loginInfo.AppUseMode) {
            let identity = loginInfo.AppUseMode[0];
            if (identity === ROLE.CAO) {
                defaultType = defaultType.filter(x => x !== DashboardMessageType.GoalSetting);
            }
            else if (identity === ROLE.AGENT) {
                defaultType = defaultType.filter(x => x !== DashboardMessageType.PendingApproval);
            }
            
        }
        return defaultType;
    }
}