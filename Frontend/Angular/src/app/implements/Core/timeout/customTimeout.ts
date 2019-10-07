import { timeoutAction, NotificationObject, NotificationMgr, ConfigToken, NotificationType, AppRouter, DefaultLoginMgr } from "@allianzSND/core";
import { Injectable, Injector, Inject } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { ModalManager } from "@allianzSND/ui";


@Injectable({
    providedIn: 'root'
})
export class customTimeout implements timeoutAction {

    constructor(
        @Inject(ConfigToken) private APP_CONFIG: any,
        private injector: Injector,
        private notificationMgr: NotificationMgr,
        private modalManager: ModalManager,
        private routeReuseStrategy: RouteReuseStrategy,
    ) { }
    timeoutAction() {
        let seconds = this.APP_CONFIG[this.APP_CONFIG.ENV].TIMEOUT;
        let min = Math.round((seconds / 60));
        let data = {
            minutes: min
        };
        this.modalManager.closeAll();
        this.notificationMgr.popAllNotification();
        this.notificationMgr.pushNotification(NotificationType.Timeout, data);
        if (this.routeReuseStrategy["deleteRouteSnapshot"]) {
            this.routeReuseStrategy["deleteRouteSnapshot"]();
        }

        this.getLoginMgr().logout();
    }

    getLoginMgr() {
        return this.injector.get(DefaultLoginMgr);
    }

}