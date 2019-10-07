import { Injectable } from "@angular/core";
import { INotificationAction, AppRouter } from "@allianzSND/core";
import { DefaultConflictAction } from "./DefaultConflictAction";


@Injectable({
    providedIn: 'root'
})
export class AgencyPlanAction extends DefaultConflictAction implements INotificationAction {

    constructor(
        private router: AppRouter
    ) {
        super();
    }
    onConfirm(data: any):boolean{
        let year = data.year;
        if (year)
            this.router.navigate("AgencyPlan", year);
        else
            this.router.navigate("AgencyPlan");
        return true;
    }
}