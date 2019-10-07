import { Injectable } from "@angular/core";
import { INotificationAction, AppRouter } from "@allianzSND/core";
import { DefaultConflictAction } from "./DefaultConflictAction";


@Injectable({
    providedIn: 'root'
})
export class GoToHomeAction extends DefaultConflictAction implements INotificationAction {

    constructor(
        private router: AppRouter
    ) {
        super();
    }

    onConfirm(data: any): boolean {
        this.router.navigate("Dashboard");
        return true;
    }
}