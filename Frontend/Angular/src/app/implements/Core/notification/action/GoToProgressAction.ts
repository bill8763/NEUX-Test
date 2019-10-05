import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { INotificationAction, AppRouter } from "@allianzSND/core";
import { DefaultConflictAction } from "./DefaultConflictAction";


@Injectable({
    providedIn: 'root'
})
export class GoToProgressAction extends DefaultConflictAction implements INotificationAction {

    constructor(
        private router: AppRouter
    ) {
        super();
    }

    onConfirm(data: any): boolean {
        this.router.navigate("Progress");
        return true;
    }
}