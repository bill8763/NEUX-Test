import { LoginInfo } from "@allianzSND/core";
import { DashboardShowLoginInfo } from '../service/model/DashboardShowLoginInfo';
import { Observable } from "rxjs";
import { DashboardMessageType } from "../components/dashboard-message/dashboard-message-type";
export interface showDashboardRule {
    dashboardShowLoginInfo(loginInfo: LoginInfo): Observable<DashboardShowLoginInfo>;
    showTimeBaseTitle(AppUseMode: string): string;
    showMessageType(loginInfo: LoginInfo): Array<DashboardMessageType>;
}
