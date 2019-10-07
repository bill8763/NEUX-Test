import { Injectable } from '@angular/core'
import { IInitTask, APIFactory, DaoFactory, ProfileCodeService, StringUtils, LoginMgrToken, AOPTokenService, GetOtherParameterAPI } from '@allianzSND/core';
import { CalendarEventAddAPI, CalendarEventDeleteAPI, CalendarEventDetailAPI, CalendarEventListAPI, CalendarEventUpdateAPI, CalendarEventSaveAPI } from '@allianzSND/integration-calendar-customer';
import { HttpClient } from '@angular/common/http';
import { DashboardUpdateToReadAPI, CustomerUpdateFollowAPI, CustomerEditOvertimeAPI, CustomerAutoDeleteAPI, CustomerListAPI, CustomerDetailAPI, CustomerGetPresetAPI, CustomerSavePresetAPI, CustomerDeleteAPI, CustomerContactNoteAPI, CustomerAddContactNoteAPI, CustomerEditContactNoteAPI, CustomerDeleteContactNoteAPI, CustomerTelAPI, ImportContactAPI, CustomerSaveDetailAPI, CustomerUtils, CustomerBirthdayListAPI } from '@allianzSND/integration-calendar-customer';
import { AgencyPlanGetMainAPI, AgencyPlanGetDetailAPI, GoalSettingGetExpectedAPI, GoalSettingGetYearConfigAPI, GoalSettingGetGoalSettingAPI, GoalSettingGetPlanAPI, GoalSettingGetActualAPI } from '@allianzSND/goal';
//import {GoalSettingGetGoalSettingAPI, GoalSettingGetPlanAPI} from "@allianzSND/goal";

import { GoalSettingGetValueAPI, GoalSettingSetExpectedAPI } from '@allianzSND/goal'

// import {GoalSettingGetRateAPI} from '@allianzSND/goal';
// import { GetGoalSettingAPI } from '@allianzSND/goal';
// import { GetGoalSettingExpectedAPI } from '@allianzSND/goal';
// import { GetAgencyPlanMainAPI } from '@allianzSND/goal';
// import { GetAgencyDetailDataAPI } from '@allianzSND/goal';

import { GetProgressDataAPI, GetProgressDataActualValueAPI, GetProgressDataGoalSettingPlanAPI } from '@allianzSND/progress';


import { GetYearConfigurationAPI } from '@allianzSND/progress';
import { GetPersonalProgressAPI } from '@allianzSND/progress';
import { GetTeamProgressMainAPI } from '@allianzSND/progress';
import { GetTeamProgressDetailAPI } from '@allianzSND/progress';
import { AddPointAPI } from '@allianzSND/progress';

// import { getPackedSettings } from 'http2';

@Injectable({
    providedIn: 'root'
})
export class customRegisterAPITask implements IInitTask {

    private stringUtils: StringUtils = new StringUtils();
    constructor(
        private APIFactory: APIFactory,
        private DAOFactory: DaoFactory,
        private httpClient: HttpClient,
        private profileCodeService: ProfileCodeService,
        private customerUtils: CustomerUtils,
        private tokenService: AOPTokenService
    ) { }
    async doTask(): Promise<any> {
        console.log("register token task!!!!!")
        await this.registerAPI();
    }

    private registerAPI() {
        return new Promise((res, jej) => {
            this.APIFactory.registerAPI(new CalendarEventAddAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CalendarEventDeleteAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CalendarEventDetailAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CalendarEventSaveAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CalendarEventListAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CalendarEventUpdateAPI(this.DAOFactory));

            //register customer API 
            this.APIFactory.registerAPI(new CustomerUpdateFollowAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerEditOvertimeAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerAutoDeleteAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerListAPI(this.DAOFactory, this.profileCodeService));
            this.APIFactory.registerAPI(new CustomerDetailAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerGetPresetAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerSavePresetAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerDeleteAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerSaveDetailAPI(this.DAOFactory, this.customerUtils));
            this.APIFactory.registerAPI(new CustomerContactNoteAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerAddContactNoteAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerEditContactNoteAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerDeleteContactNoteAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new CustomerTelAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new ImportContactAPI(this.DAOFactory, this.customerUtils));
            this.APIFactory.registerAPI(new CustomerBirthdayListAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new DashboardUpdateToReadAPI(this.DAOFactory));

            //register goalSetting API
            this.APIFactory.registerAPI(new GoalSettingGetYearConfigAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GoalSettingGetGoalSettingAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GoalSettingGetValueAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GoalSettingGetPlanAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GoalSettingGetActualAPI(this.DAOFactory));


            //register personalProgres API my mock (old version)

            this.APIFactory.registerAPI(new AgencyPlanGetMainAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new AgencyPlanGetDetailAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GoalSettingGetExpectedAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GoalSettingSetExpectedAPI(this.DAOFactory));


            //register progress data API mock like SQLite (formal) 
            this.APIFactory.registerAPI(new GetProgressDataAPI(this.DAOFactory));

            this.APIFactory.registerAPI(new GetProgressDataGoalSettingPlanAPI(this.DAOFactory));


            //register new API here 
            this.APIFactory.registerAPI(new GetYearConfigurationAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GetPersonalProgressAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GetTeamProgressMainAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GetTeamProgressDetailAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new GetOtherParameterAPI(this.DAOFactory));
            this.APIFactory.registerAPI(new AddPointAPI(this.DAOFactory));

            res();
        })
    }

    // private registerToken() {
    //     console.log("register token!!!!!")
    //     return new Promise((res, rej) => {
    //         this.tokenService.registerToken("test", LoginMgrToken);
    //         res();
    //     })
    // }



}
