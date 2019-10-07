import { Injectable } from "@angular/core";
import { IregisterDataSyncFunc, CalendarSync, CustomerSync, MessageSync, ContactSync, DaoFactory, GoalExpectedSync, IFunctionSync, APIFactory, APIDispatch, ActualSync, AgencyPlanSync, ProgressSync, YearConfigSync, GoalSync } from "@allianzSND/core";
import { ProfileCodeSync } from "@allianzSND/core";
@Injectable({
    providedIn: 'root'
})
export class syncService implements IregisterDataSyncFunc {
    constructor(
        private DaoFactory: DaoFactory,
        private APIFactory: APIFactory,
        private dispatcher: APIDispatch

    ) { }

    getSyncInstance(): Array<IFunctionSync> {
        let instanceList = [];
        instanceList.push
        instanceList.push(new CalendarSync(this.DaoFactory));
        instanceList.push(new CustomerSync(this.DaoFactory));
        instanceList.push(new ContactSync(this.DaoFactory));
        instanceList.push(new MessageSync(this.DaoFactory));
        instanceList.push(new GoalExpectedSync(this.DaoFactory));
        instanceList.push(new GoalSync(this.APIFactory, this.dispatcher));
        instanceList.push(new ActualSync(this.APIFactory, this.dispatcher));
        instanceList.push(new AgencyPlanSync(this.APIFactory, this.dispatcher));
        instanceList.push(new ProgressSync(this.APIFactory, this.dispatcher));
        instanceList.push(new YearConfigSync(this.APIFactory, this.dispatcher));
        instanceList.push(new ProfileCodeSync(this.DaoFactory));
        return instanceList;
    }

    getFuncMap() {
        return {
            "CALENDAR": ["CUSTOMER", "CUSTOMER_CONTACT", "CALENDAR"],
            "CUSTOMER": ["CUSTOMER", "CUSTOMER_CONTACT"],
            "GOAL": ["YEAR_CONFIG", "GOAL", "GOAL_EXPECTED", "ACTUAL", "AGENCY_PLAN"],
            "DASHBOARD": ["CUSTOMER", "CUSTOMER_CONTACT", "CALENDAR", "YEAR_CONFIG", "GOAL", "GOAL_EXPECTED", "ACTUAL", "PROGRESS", "MESSAGE"],
            "PROGRESS": ["CUSTOMER", "CUSTOMER_CONTACT", "CALENDAR", "YEAR_CONFIG", "GOAL", "GOAL_EXPECTED", "ACTUAL", "PROGRESS"],
            "AGENCY_PLAN": ["AGENCY_PLAN"],
            "PROFILE": ["PROFILE_CODE"]
        }
    }

}