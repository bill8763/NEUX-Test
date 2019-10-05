import { CommonModule } from '@angular/common';
import { UIModule } from '@allianzSND/ui';
import { v4 } from 'uuid';
import { __awaiter, __decorate, __metadata } from 'tslib';
import { Observable, BehaviorSubject, Subject, of, from } from 'rxjs';
import { InjectionToken, NgModule, Injectable, ErrorHandler, Optional, Inject, defineInjectable, inject } from '@angular/core';
import { CoreModule, EqualRestriction, ClientCustomDao, OrderByRestriction, Bean, Required, TIMEBASE, DefaultLoginMgr, StringUtils, TranslateService, NumberUtils, APPError, PERFORMANCETYPE, SubmitGoalPlan, SubmitGoalInfo, SuccessStatus, SUBMITGOALTYPE, SubmitGoalSettingValue, SubmitGoalPlanInfo, YESNO, SubmitGoalData, APIDispatch, APIFactory, yearConfigExtensionDataToken, goalSettingExtensionDataToken, DataSyncService, ProfileCodeService, Valid } from '@allianzSND/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const goalSettingStepToken = new InjectionToken('goalSettingStep');
/** @type {?} */
const goalValidToken = new InjectionToken('GoalValidExtension');
/** @type {?} */
const goalSettingShowRuleToken = new InjectionToken('goalSettingShowRule');
/** @type {?} */
const GoalSubmitExtensionToken = new InjectionToken("GoalSubmitExtension");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalModule {
}
GoalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                    UIModule
                ],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingGetGoalSettingAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    setDataYear(dataYear) {
        this._dataYear = dataYear;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoalSettingGoalSetting';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingGoalSetting_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingGoalSetting_2020.json';
        }
        else if (this._dataYear == -1) {
            return './assets/mock/getGoalSettingGoalSetting_all.json';
        }
        else {
            //todo throw error
            console.warn("yearStatus dataYear not match");
            return '';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log("queryByTable: getGoalSettingGoalSetting this._dataYear:", this._dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                let goalSettingObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting");
                if (goalSettingObj) {
                    if (this._dataYear != -1) {
                        goalSettingObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                    }
                    dao = new ClientCustomDao(dao);
                    dao.queryByTable(goalSettingObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        console.log("queryByTable overviewYearStatus: ", JSON.stringify(resp));
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingGetYearConfigAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    setDataYear(dataYear) {
        this._dataYear = dataYear;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoalSettingYearConfig';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingYearConfig_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingYearConfig_2020.json';
        }
        else if (this._dataYear == -1) {
            return './assets/mock/getGoalSettingYearConfig_all.json';
        }
        else {
            console.warn("yearConfig dataYear not match");
            return '';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                let yearConfigObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Year_Config");
                if (yearConfigObj) {
                    if (this._dataYear != -1) {
                        yearConfigObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                    }
                    yearConfigObj.addRestriction(new OrderByRestriction([{ column: 'DataYear', order: 'ASC' }]));
                    dao = new ClientCustomDao(dao);
                    dao.queryByTable(yearConfigObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        console.warn("queryByTable yearConfig: ", JSON.stringify(resp));
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AgencyPlanGetMainAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    setDataYear(dataYear) {
        this._dataYear = dataYear;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return "getAgencyPlanMain";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/getAgencyPlanMainMock.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.log("dataYear", this._dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let agencyMainObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Agency_Plan_Main");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (agencyMainObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                agencyMainObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                dao.queryByTable(agencyMainObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.log("resp", resp);
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AgencyPlanGetDetailAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    setDataYear(dataYear) {
        this._dataYear = dataYear;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return "getAgencyPlanDetail";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/getAgencyPlanDetail.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let agencyDetailObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Agency_Detail_Data");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (agencyDetailObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                agencyDetailObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                dao.queryByTable(agencyDetailObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.log(resp);
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingGetExpectedAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    setDataYear(dataYear) {
        this._dataYear = dataYear;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return "getGoalSettingExpected";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/getGoalSettingExpected.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let goalExpectedObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Expected");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (goalExpectedObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                goalExpectedObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                dao.queryByTable(goalExpectedObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.log(resp);
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingGetValueAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    setDataYear(dataYear) {
        this._dataYear = dataYear;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoalSettingValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingValue_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingValue_2020.json';
        }
        else {
            console.warn("GoalSettingGetValueAPI mock path not found");
            return '';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        /*
            "FYFC": 200,
            "FYFC_Actual": 30,
            "FYFC_Now_To_Year_End": 170,
            "Manpower": 70,
            "Recruitment": 40
         */
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            console.log("queryByTable: goalSettingValue this._dataYear:", this._dataYear);
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                let goalSettingValue = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Value");
                if (goalSettingValue) {
                    dao = new ClientCustomDao(dao);
                    if (this._dataYear != -1) {
                        goalSettingValue.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                    }
                    //todo!
                    dao.queryByTable(goalSettingValue).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        console.log("queryByTable: goalSettingValue", resp);
                        // console.warn("goalSettingValue========: ",data);
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingSetExpectedAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._expectedRecruitment = {};
        this._indirectRecruitment = 0;
    }
    /**
     * @param {?} expectedRecruitment
     * @return {?}
     */
    setExpectedRecruitment(expectedRecruitment) {
        this._expectedRecruitment = expectedRecruitment;
    }
    /**
     * @param {?} indirectRecruitment
     * @return {?}
     */
    setIndirectRecruitment(indirectRecruitment) {
        this._indirectRecruitment = indirectRecruitment;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return "setGoalSettingExpected";
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return "./assets/mock/saveSuccess.json";
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let goalExpectedObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected");
            /** @type {?} */
            let goalExpectedExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected_Extension");
            /** @type {?} */
            let agencyMainObj = this.daoFactory.getDefaultTable("TW_LH_SD_Agency_Plan_Main");
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (goalExpectedObj != undefined && agencyMainObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                agencyMainObj.addRestriction(new EqualRestriction('DataYear', [this._expectedRecruitment['DataYear']]));
                agencyMainObj.addRestriction(new EqualRestriction('DataType', ['Recruitment']));
                agencyMainObj.setValue('MonthPlan', [this._expectedRecruitment['RecruitmentTotal'] + this._indirectRecruitment]);
                goalExpectedObj.setValue('Q1', this._expectedRecruitment['Q1']);
                goalExpectedObj.setValue('Q2', this._expectedRecruitment['Q2']);
                goalExpectedObj.setValue('Q3', this._expectedRecruitment['Q3']);
                goalExpectedObj.setValue('Q4', this._expectedRecruitment['Q4']);
                goalExpectedObj.setValue('FYFC', this._expectedRecruitment['FYFC']);
                goalExpectedObj.setValue('ANP', this._expectedRecruitment['ANP']);
                goalExpectedObj.setValue('DataYear', this._expectedRecruitment['DataYear']);
                goalExpectedObj.addRestriction(new EqualRestriction('DataYear', [this._expectedRecruitment['DataYear']]));
                /** @type {?} */
                let goalExpectedResp = yield dao.queryByTable(goalExpectedObj).toPromise();
                console.log('dataYear: ', this._expectedRecruitment['DataYear'], ' goalExpectedResp:', goalExpectedResp);
                if (goalExpectedResp.Body.length > 0) {
                    //sqlite has data;
                    dao.transactionUpdate(goalExpectedObj);
                }
                else {
                    //sqlite not has data;
                    /** @type {?} */
                    let clientID = v4();
                    goalExpectedObj.setValue('ClientID', clientID);
                    goalExpectedExtObj.setValue('ClientID', clientID);
                    dao.transactionInsert(goalExpectedObj);
                    dao.transactionInsert(goalExpectedExtObj);
                }
                // dao.transactionUpdate(goalExpectedObj);
                dao.transactionUpdate(agencyMainObj);
                dao.runTransaction().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        })));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingGetPlanAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setDataYear(year) {
        this._dataYear = year;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoalSettingPlan';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingPlan_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingPlan_2020.json';
        }
        else {
            console.warn("datYear not match mock path");
            return '';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                let goalSettingObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Plan_Value");
                if (goalSettingObj) {
                    if (this._dataYear != -1) {
                        goalSettingObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                    }
                    dao = new ClientCustomDao(dao);
                    dao.queryByTable(goalSettingObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        console.warn("queryByTable Goal_Setting_Plan_Value: ", JSON.stringify(resp));
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingGetActualAPI {
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this.daoFactory = daoFactory;
        this._dataYear = -1;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setDataYear(year) {
        this._dataYear = year;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getGoalSettingActualValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        if (this._dataYear == 2019) {
            return './assets/mock/getGoalSettingActualValue_2019.json';
        }
        else if (this._dataYear == 2020) {
            return './assets/mock/getGoalSettingActualValue_2020.json';
        }
        else {
            //todo throw error
            console.warn('dataYear not match mock path');
            return '';
        }
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let dao = this.daoFactory.getDefaultDao();
            if (dao != undefined) {
                /** @type {?} */
                let goalSettingObj = this.daoFactory.getDefaultTable("TW_LH_SD_VW_Actual_Value");
                if (goalSettingObj) {
                    if (this._dataYear != -1) {
                        goalSettingObj.addRestriction(new EqualRestriction('DataYear', [this._dataYear]));
                    }
                    dao = new ClientCustomDao(dao);
                    dao.queryByTable(goalSettingObj).subscribe((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        console.warn("queryByTable Goal_Setting_Actual_Value: ", resp);
                        observer.next(resp);
                        observer.complete();
                    }));
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DWM_DATETYPE = {
    DAILY: 'Daily',
    WEEKLY: 'Weekly',
    MONTHLY: 'Monthly',
};
/** @enum {number} */
const GOALSETTINGSTEP = {
    STEP1: 1,
    STEP2: 2,
    STEP3: 3,
    STEP4: 4,
    STEP5: 5,
};
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP1] = 'STEP1';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP2] = 'STEP2';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP3] = 'STEP3';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP4] = 'STEP4';
GOALSETTINGSTEP[GOALSETTINGSTEP.STEP5] = 'STEP5';
/** @enum {number} */
const GOALSETTINGSETMODE = {
    SET_NEXT_YESR: 0,
    ADGUST_GOAL: 1,
};
GOALSETTINGSETMODE[GOALSETTINGSETMODE.SET_NEXT_YESR] = 'SET_NEXT_YESR';
GOALSETTINGSETMODE[GOALSETTINGSETMODE.ADGUST_GOAL] = 'ADGUST_GOAL';
/** @enum {string} */
const ROLE = {
    // FEMALEAGENT = '01',
    // FEMALEAGENTLEADER = '02',
    // MALEAGENT = '03',
    // MALEAGENTLEADER = '04',
    // AGENT = 'AG',
    // AGENTLEADER = 'AL',
    // CAO = 'Manager',
    // ZONEHEAD = 'Supervisor'
    AGENT: 'AG',
    AGENTLEADER: 'AL',
    ZONEHEAD: 'Manager',
    CAO: 'Supervisor',
};
/** @enum {string} */
const APPROVESTATUS = {
    PENDING: 'P',
    WAINTING: 'W',
    NONE: 'N',
    APPROVE: 'A',
};
/** @enum {string} */
const APITYPE = {
    SQLITE: 'SQLITE',
    RESTFUL: 'RESTFUL',
    MOCK: 'MOCK',
};
let ValidationState = class ValidationState {
    constructor() {
    }
    /**
     * @param {?} step
     * @return {?}
     */
    set step(step) {
        this._step = step;
    }
    /**
     * @param {?} isDataLegal
     * @return {?}
     */
    set isDataLegal(isDataLegal) {
        this._isDataLegal = isDataLegal;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @return {?}
     */
    get isDataLegal() {
        return this._isDataLegal;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], ValidationState.prototype, "_step", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], ValidationState.prototype, "_isDataLegal", void 0);
ValidationState = __decorate([
    Bean('ValidationState'),
    __metadata("design:paramtypes", [])
], ValidationState);
class PlanFYFCPopupInfo {
    /**
     * @param {?} state
     * @param {?} data
     */
    constructor(state, data) {
        this._state = state;
        this._data = data;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        this._state = state;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingStep1 = class GoalSettingStep1 {
    constructor() {
    }
    /**
     * @return {?}
     */
    get FYFC() {
        return this._FYFC;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFC(value) {
        this._FYFC = value;
    }
    /**
     * @return {?}
     */
    get AnnualConvention() {
        return this._AnnualConvention;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AnnualConvention(value) {
        this._AnnualConvention = value;
    }
    /**
     * @return {?}
     */
    get MDRT() {
        return this._MDRT;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MDRT(value) {
        this._MDRT = value;
    }
    /**
     * @return {?}
     */
    get PromotionPlan() {
        return this._PromotionPlan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PromotionPlan(value) {
        this._PromotionPlan = value;
    }
    /**
     * @return {?}
     */
    get Actual() {
        return this._Actual;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Actual(value) {
        this._Actual = value;
    }
    /**
     * @return {?}
     */
    get FYFCNowToYearEnd() {
        return this._FYFCNowToYearEnd;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFCNowToYearEnd(value) {
        this._FYFCNowToYearEnd = value;
    }
    /**
     * @return {?}
     */
    get ActivityFYFC() {
        return this._ActivityFYFC;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ActivityFYFC(value) {
        this._ActivityFYFC = value;
    }
    /**
     * @return {?}
     */
    get ActivityDays() {
        return this._ActivityDays;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ActivityDays(value) {
        this._ActivityDays = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep1.prototype, "_FYFC", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep1.prototype, "_AnnualConvention", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep1.prototype, "_MDRT", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep1.prototype, "_PromotionPlan", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep1.prototype, "_Actual", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep1.prototype, "_FYFCNowToYearEnd", void 0);
GoalSettingStep1 = __decorate([
    Bean('GoalSettingStep1'),
    __metadata("design:paramtypes", [])
], GoalSettingStep1);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingStep2 = class GoalSettingStep2 {
    constructor() {
    }
    /**
     * @return {?}
     */
    get PerCase() {
        return this._PerCase;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PerCase(value) {
        this._PerCase = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep2.prototype, "_PerCase", void 0);
GoalSettingStep2 = __decorate([
    Bean('GoalSettingStep2'),
    __metadata("design:paramtypes", [])
], GoalSettingStep2);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingStep3 = class GoalSettingStep3 {
    constructor() {
        this._ActivityValues = [];
    }
    /**
     * @return {?}
     */
    get Activity() {
        return this._Activity;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Activity(value) {
        this._Activity = value;
    }
    /**
     * @return {?}
     */
    get ActivityValues() {
        return this._ActivityValues;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ActivityValues(value) {
        this._ActivityValues = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Array)
], GoalSettingStep3.prototype, "_ActivityValues", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep3.prototype, "_Activity", void 0);
GoalSettingStep3 = __decorate([
    Bean('GoalSettingStep3'),
    __metadata("design:paramtypes", [])
], GoalSettingStep3);

var GoalSettingStep4_1;
let GoalSettingStep4 = GoalSettingStep4_1 = class GoalSettingStep4 {
    constructor() {
        this._MonthList = [];
    }
    /**
     * @return {?}
     */
    get Forecast() {
        return this._Forecast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Forecast(value) {
        this._Forecast = value;
    }
    /**
     * @return {?}
     */
    get Shortfall() {
        return this._Shortfall;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Shortfall(value) {
        this._Shortfall = value;
    }
    /**
     * @return {?}
     */
    get Actual() {
        return this._Actual;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Actual(value) {
        this._Actual = value;
    }
    /**
     * @return {?}
     */
    get MonthList() {
        return this._MonthList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MonthList(value) {
        this._MonthList = value;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const cloneGoalSettingStep4 = new GoalSettingStep4_1();
        cloneGoalSettingStep4.Forecast = this._Forecast;
        cloneGoalSettingStep4.Shortfall = this._Shortfall;
        cloneGoalSettingStep4.MonthList = this._MonthList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.clone()));
        cloneGoalSettingStep4.Actual = this._Actual;
        return cloneGoalSettingStep4;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep4.prototype, "_Forecast", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep4.prototype, "_Shortfall", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep4.prototype, "_Actual", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], GoalSettingStep4.prototype, "_MonthList", void 0);
GoalSettingStep4 = GoalSettingStep4_1 = __decorate([
    Bean('GoalSettingStep4'),
    __metadata("design:paramtypes", [])
], GoalSettingStep4);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingStep5 = class GoalSettingStep5 {
    constructor() {
    }
    /**
     * @return {?}
     */
    get TeamFYFC() {
        return this._TeamFYFC;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamFYFC(value) {
        this._TeamFYFC = value;
    }
    /**
     * @return {?}
     */
    get TeamANP() {
        return this._TeamANP;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamANP(value) {
        this._TeamANP = value;
    }
    /**
     * @return {?}
     */
    get Manpower() {
        return this._Manpower;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Manpower(value) {
        this._Manpower = value;
    }
    /**
     * @return {?}
     */
    get Recruitment() {
        return this._Recruitment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Recruitment(value) {
        this._Recruitment = value;
    }
    /**
     * @return {?}
     */
    get TeamFYFCActual() {
        return this._TeamFYFCActual;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamFYFCActual(value) {
        this._TeamFYFCActual = value;
    }
    /**
     * @return {?}
     */
    get TeamANPActual() {
        return this._TeamANPActual;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamANPActual(value) {
        this._TeamANPActual = value;
    }
    /**
     * @return {?}
     */
    get TeamFYFCNowToYearEnd() {
        return this._TeamFYFCNowToYearEnd;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamFYFCNowToYearEnd(value) {
        this._TeamFYFCNowToYearEnd = value;
    }
    /**
     * @return {?}
     */
    get TeamANPNowToYearEnd() {
        return this._TeamANPNowToYearEnd;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamANPNowToYearEnd(value) {
        this._TeamANPNowToYearEnd = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_TeamFYFC", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_TeamANP", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_Manpower", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_Recruitment", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_TeamFYFCActual", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_TeamANPActual", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_TeamFYFCNowToYearEnd", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep5.prototype, "_TeamANPNowToYearEnd", void 0);
GoalSettingStep5 = __decorate([
    Bean('GoalSettingStep5'),
    __metadata("design:paramtypes", [])
], GoalSettingStep5);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingYearConfig = class GoalSettingYearConfig {
    // constructor(IsCurrent: string, DataYear: number,  QuarterStartMonth: number, QuarterEndMonth: number, GoalSettingActivityProcMode: string, GoalAndPlanDifferenceLimit: number, PerformanceSettlementMonth: number, WorkingMonth: number, MonthQuantityOfYear: number, FyfcCovertAnpRate: number, InforceConvertSubmitRate: number, InforceConvertMeetRate: number, InforceConvertScheduleRate: number, InforceConvertFindRate: number, NowToYearEndDays: number) {
    //     this._IsCurrent = IsCurrent;
    //     this._DataYear = DataYear;
    //     this._QuarterStartMonth = QuarterStartMonth;
    //     this._QuarterEndMonth = QuarterEndMonth;
    //     this._GoalSettingActivityProcMode = GoalSettingActivityProcMode;
    //     this._GoalAndPlanDifferenceLimit = GoalAndPlanDifferenceLimit;
    //     this._PerformanceSettlementMonth = PerformanceSettlementMonth;
    //     this._WorkingMonth = WorkingMonth;
    //     this._MonthQuantityOfYear = MonthQuantityOfYear;
    //     this._FyfcCovertAnpRate = FyfcCovertAnpRate;
    //     this._InforceConvertSubmitRate = InforceConvertSubmitRate;
    //     this._InforceConvertMeetRate = InforceConvertMeetRate;
    //     this._InforceConvertScheduleRate = InforceConvertScheduleRate;
    //     this._InforceConvertFindRate = InforceConvertFindRate;
    //     this._NowToYearEndDays = NowToYearEndDays;
    // }
    constructor() {
    }
    /**
     * @return {?}
     */
    getExtension() {
        return this._Extension;
    }
    /**
     * @param {?} extension
     * @return {?}
     */
    setExtension(extension) {
        this._Extension = extension;
    }
    /**
     * @return {?}
     */
    get IsCurrent() {
        return this._IsCurrent;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get QuarterStartMonth() {
        return this._QuarterStartMonth;
    }
    /**
     * @return {?}
     */
    get QuarterEndMonth() {
        return this._QuarterEndMonth;
    }
    /**
     * @return {?}
     */
    get GoalSettingActivityProcMode() {
        return this._GoalSettingActivityProcMode;
    }
    /**
     * @return {?}
     */
    get GoalAndPlanDifferenceLimit() {
        return this._GoalAndPlanDifferenceLimit;
    }
    /**
     * @return {?}
     */
    get PerformanceSettlementMonth() {
        return this._PerformanceSettlementMonth;
    }
    /**
     * @return {?}
     */
    get WorkingMonth() {
        return this._WorkingMonth;
    }
    /**
     * @return {?}
     */
    get WorkingQuarter() {
        return this._WorkingQuarter;
    }
    /**
     * @return {?}
     */
    get MonthQuantityOfYear() {
        return this._MonthQuantityOfYear;
    }
    /**
     * @return {?}
     */
    get FyfcCovertAnpRate() {
        return this._FyfcCovertAnpRate;
    }
    /**
     * @return {?}
     */
    get InforceConvertSubmitRate() {
        return this._InforceConvertSubmitRate;
    }
    /**
     * @return {?}
     */
    get InforceConvertMeetRate() {
        return this._InforceConvertMeetRate;
    }
    /**
     * @return {?}
     */
    get InforceConvertScheduleRate() {
        return this._InforceConvertScheduleRate;
    }
    /**
     * @return {?}
     */
    get InforceConvertFindRate() {
        return this._InforceConvertFindRate;
    }
    /**
     * @return {?}
     */
    get NowToYearEndDays() {
        return this._NowToYearEndDays;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsCurrent(value) {
        this._IsCurrent = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._DataYear = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set QuarterStartMonth(value) {
        this._QuarterStartMonth = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set QuarterEndMonth(value) {
        this._QuarterEndMonth = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set GoalSettingActivityProcMode(value) {
        this._GoalSettingActivityProcMode = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set GoalAndPlanDifferenceLimit(value) {
        this._GoalAndPlanDifferenceLimit = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PerformanceSettlementMonth(value) {
        this._PerformanceSettlementMonth = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set WorkingMonth(value) {
        this._WorkingMonth = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set WorkingQuarter(value) {
        this._WorkingQuarter = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MonthQuantityOfYear(value) {
        this._MonthQuantityOfYear = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FyfcCovertAnpRate(value) {
        this._FyfcCovertAnpRate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set InforceConvertSubmitRate(value) {
        this._InforceConvertSubmitRate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set InforceConvertMeetRate(value) {
        this._InforceConvertMeetRate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set InforceConvertScheduleRate(value) {
        this._InforceConvertScheduleRate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set InforceConvertFindRate(value) {
        this._InforceConvertFindRate = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set NowToYearEndDays(value) {
        this._NowToYearEndDays = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_GoalAndPlanDifferenceLimit", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_PerformanceSettlementMonth", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_WorkingMonth", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_MonthQuantityOfYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_InforceConvertSubmitRate", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_InforceConvertMeetRate", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_InforceConvertScheduleRate", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_InforceConvertFindRate", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingYearConfig.prototype, "_NowToYearEndDays", void 0);
GoalSettingYearConfig = __decorate([
    Bean('GoalSettingYearConfig'),
    __metadata("design:paramtypes", [])
], GoalSettingYearConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ActivityValue = class ActivityValue {
    /**
     * @param {?} TimeBase
     * @param {?} Find
     * @param {?} Schedule
     * @param {?} Meet
     * @param {?} Submit
     * @param {?} Inforce
     */
    constructor(TimeBase, Find, Schedule, Meet, Submit, Inforce) {
        this._TimeBase = TimeBase;
        this._Schedule = Schedule;
        this._Find = Find;
        this._Meet = Meet;
        this._Submit = Submit;
        this._Inforce = Inforce;
    }
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._TimeBase;
    }
    /**
     * @return {?}
     */
    get Find() {
        return this._Find;
    }
    /**
     * @return {?}
     */
    get Schedule() {
        return this._Schedule;
    }
    /**
     * @return {?}
     */
    get Meet() {
        return this._Meet;
    }
    /**
     * @return {?}
     */
    get Submit() {
        return this._Submit;
    }
    /**
     * @return {?}
     */
    get Inforce() {
        return this._Inforce;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], ActivityValue.prototype, "_TimeBase", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ActivityValue.prototype, "_Find", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ActivityValue.prototype, "_Schedule", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ActivityValue.prototype, "_Meet", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ActivityValue.prototype, "_Submit", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ActivityValue.prototype, "_Inforce", void 0);
ActivityValue = __decorate([
    Bean('ActivityValue'),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], ActivityValue);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingGoalStatus = class GoalSettingGoalStatus {
    constructor() {
    }
    /**
     * @return {?}
     */
    getExtension() {
        return this._Extension;
    }
    /**
     * @param {?} extension
     * @return {?}
     */
    setExtension(extension) {
        this._Extension = extension;
    }
    /**
     * @return {?}
     */
    get PersonnelGoalApplicableYM() {
        return this._PersonnelGoalApplicableYM;
    }
    /**
     * @return {?}
     */
    get TeamGoalApplicableYM() {
        return this._TeamGoalApplicableYM;
    }
    /**
     * @return {?}
     */
    get GoalSetMonth() {
        return this._GoalSetMonth;
    }
    /**
     * @return {?}
     */
    get ApproveStatus() {
        return this._ApproveStatus;
    }
    /**
     * @return {?}
     */
    get IsFirstTime() {
        return this._IsFirstTime;
    }
    /**
     * @return {?}
     */
    get IsNeedSetting() {
        return this._IsNeedSetting;
    }
    /**
     * @return {?}
     */
    get RemainingDays() {
        return this._RemainingDays;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get IsCurrent() {
        return this._IsCurrent;
    }
    /**
     * @return {?}
     */
    get SupervisorComment() {
        return this._SupervisorComment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsCurrent(value) {
        this._IsCurrent = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._DataYear = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PersonnelGoalApplicableYM(value) {
        this._PersonnelGoalApplicableYM = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamGoalApplicableYM(value) {
        this._TeamGoalApplicableYM = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set GoalSetMonth(value) {
        this._GoalSetMonth = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ApproveStatus(value) {
        this._ApproveStatus = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsFirstTime(value) {
        this._IsFirstTime = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsNeedSetting(value) {
        this._IsNeedSetting = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set RemainingDays(value) {
        this._RemainingDays = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set SupervisorComment(value) {
        this._SupervisorComment = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_PersonnelGoalApplicableYM", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_TeamGoalApplicableYM", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingGoalStatus.prototype, "_GoalSetMonth", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingGoalStatus.prototype, "_ApproveStatus", void 0);
GoalSettingGoalStatus = __decorate([
    Bean('GoalSettingGoalStatus'),
    __metadata("design:paramtypes", [])
], GoalSettingGoalStatus);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingStepData = class GoalSettingStepData {
    /**
     * @param {?} DataYear
     */
    constructor(DataYear) {
        this._ActualList = [];
        this._DataYear = DataYear;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get YearConfig() {
        return this._YearConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set YearConfig(value) {
        this._YearConfig = value;
    }
    /**
     * @return {?}
     */
    get GoalStatus() {
        return this._GoalStatus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set GoalStatus(value) {
        this._GoalStatus = value;
    }
    /**
     * @return {?}
     */
    get Step1() {
        return this._Step1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step1(value) {
        this._Step1 = value;
    }
    /**
     * @return {?}
     */
    get Step2() {
        return this._Step2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step2(value) {
        this._Step2 = value;
    }
    /**
     * @return {?}
     */
    get Step3() {
        return this._Step3;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step3(value) {
        this._Step3 = value;
    }
    /**
     * @return {?}
     */
    get Step4() {
        return this._Step4;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step4(value) {
        this._Step4 = value;
    }
    /**
     * @return {?}
     */
    get Step5() {
        return this._Step5;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Step5(value) {
        this._Step5 = value;
    }
    /**
     * @return {?}
     */
    get AgencyPlan() {
        return this._AgencyPlan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AgencyPlan(value) {
        this._AgencyPlan = value;
    }
    /**
     * @return {?}
     */
    get ActualList() {
        return this._ActualList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ActualList(value) {
        this._ActualList = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingStepData.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", GoalSettingYearConfig)
], GoalSettingStepData.prototype, "_YearConfig", void 0);
__decorate([
    Required,
    __metadata("design:type", GoalSettingGoalStatus)
], GoalSettingStepData.prototype, "_GoalStatus", void 0);
__decorate([
    Required,
    __metadata("design:type", GoalSettingStep4)
], GoalSettingStepData.prototype, "_Step4", void 0);
GoalSettingStepData = __decorate([
    Bean('GoalSettingStepData'),
    __metadata("design:paramtypes", [Object])
], GoalSettingStepData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let IsApproveInfo = class IsApproveInfo {
    /**
     * @param {?} IsNeedApprove
     * @param {?} IsPopup
     */
    constructor(IsNeedApprove, IsPopup) {
        this._IsNeedApprove = IsNeedApprove;
        this._IsPopup = IsPopup;
    }
    /**
     * @return {?}
     */
    get IsNeedApprove() {
        return this._IsNeedApprove;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsNeedApprove(value) {
        this._IsNeedApprove = value;
    }
    /**
     * @return {?}
     */
    get IsPopup() {
        return this._IsPopup;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsPopup(value) {
        this._IsPopup = value;
    }
    /**
     * @return {?}
     */
    get PopupType() {
        return this._PopupType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PopupType(value) {
        this._PopupType = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Boolean)
], IsApproveInfo.prototype, "_IsNeedApprove", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], IsApproveInfo.prototype, "_IsPopup", void 0);
IsApproveInfo = __decorate([
    Bean('IsApproveInfo'),
    __metadata("design:paramtypes", [Object, Object])
], IsApproveInfo);

var MonthlyPlanFYFCData_1;
let MonthlyPlanFYFCData = MonthlyPlanFYFCData_1 = class MonthlyPlanFYFCData {
    /**
     * @param {?} Month
     * @param {?} Plan
     * @param {?} Actual
     */
    constructor(Month, Plan, Actual) {
        this._Month = Month;
        this._Plan = Plan;
        this._Actual = Actual;
    }
    /**
     * @return {?}
     */
    get Month() {
        return this._Month;
    }
    /**
     * @return {?}
     */
    get Actual() {
        return this._Actual;
    }
    /**
     * @return {?}
     */
    get Plan() {
        return this._Plan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Plan(value) {
        this._Plan = value;
    }
    /**
     * @return {?}
     */
    clone() {
        return new MonthlyPlanFYFCData_1(this._Month, this._Plan, this._Actual);
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], MonthlyPlanFYFCData.prototype, "_Month", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], MonthlyPlanFYFCData.prototype, "_Plan", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], MonthlyPlanFYFCData.prototype, "_Actual", void 0);
MonthlyPlanFYFCData = MonthlyPlanFYFCData_1 = __decorate([
    Bean('MonthlyPlanFYFCData'),
    __metadata("design:paramtypes", [Number, String, String])
], MonthlyPlanFYFCData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let AgencyPlanAgentInfo = class AgencyPlanAgentInfo {
    /**
     * @param {?} AgentID
     * @param {?} AgentName
     * @param {?} DataYear
     * @param {?} AppUseMode
     */
    constructor(AgentID, AgentName, DataYear, AppUseMode) {
        this._AgentID = AgentID;
        this._AgentName = AgentName;
        this._DataYear = DataYear;
        this._AppUseMode = AppUseMode;
    }
    /**
     * @return {?}
     */
    get AgentID() {
        return this._AgentID;
    }
    /**
     * @return {?}
     */
    get AgentName() {
        return this._AgentName;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get AppUseMode() {
        return this._AppUseMode;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanAgentInfo.prototype, "_AgentID", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanAgentInfo.prototype, "_AgentName", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanAgentInfo.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanAgentInfo.prototype, "_AppUseMode", void 0);
AgencyPlanAgentInfo = __decorate([
    Bean('AgencyPlanAgentInfo'),
    __metadata("design:paramtypes", [String, String, Number, String])
], AgencyPlanAgentInfo);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let AgencyPlanDetail = class AgencyPlanDetail {
    constructor() {
    }
    /**
     * @return {?}
     */
    get AgentID() {
        return this._AgentID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AgentID(value) {
        this._AgentID = value;
    }
    /**
     * @return {?}
     */
    get AgentName() {
        return this._AgentName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AgentName(value) {
        this._AgentName = value;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._DataYear = value;
    }
    /**
     * @return {?}
     */
    get AppUseMode() {
        return this._AppUseMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AppUseMode(value) {
        this._AppUseMode = value;
    }
    /**
     * @return {?}
     */
    get JobGrade() {
        return this._JobGrade;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set JobGrade(value) {
        this._JobGrade = value;
    }
    /**
     * @return {?}
     */
    get Actual() {
        return this._Actual;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Actual(value) {
        this._Actual = value;
    }
    /**
     * @return {?}
     */
    get CaseCount() {
        return this._CaseCount;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set CaseCount(value) {
        this._CaseCount = value;
    }
    /**
     * @return {?}
     */
    get ClientID() {
        return this._ClientID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ClientID(value) {
        this._ClientID = value;
    }
    /**
     * @return {?}
     */
    get DataType() {
        return this._DataType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataType(value) {
        this._DataType = value;
    }
    /**
     * @return {?}
     */
    get DirectUnitType() {
        return this._DirectUnitType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DirectUnitType(value) {
        this._DirectUnitType = value;
    }
    /**
     * @return {?}
     */
    get Drilldown() {
        return this._Drilldown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Drilldown(value) {
        this._Drilldown = value;
    }
    /**
     * @return {?}
     */
    get Forecast() {
        return this._Forecast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Forecast(value) {
        this._Forecast = value;
    }
    /**
     * @return {?}
     */
    get Goal() {
        return this._Goal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Goal(value) {
        this._Goal = value;
    }
    /**
     * @return {?}
     */
    get IsApprove() {
        return this._IsApprove;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsApprove(value) {
        this._IsApprove = value;
    }
    /**
     * @return {?}
     */
    get Manpower() {
        return this._Manpower;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Manpower(value) {
        this._Manpower = value;
    }
    /**
     * @return {?}
     */
    get MonthPlan() {
        return this._MonthPlan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MonthPlan(value) {
        this._MonthPlan = value;
    }
    /**
     * @return {?}
     */
    get Orders() {
        return this._Orders;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Orders(value) {
        this._Orders = value;
    }
    /**
     * @return {?}
     */
    get PerCase() {
        return this._PerCase;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PerCase(value) {
        this._PerCase = value;
    }
    /**
     * @return {?}
     */
    get Recruitment() {
        return this._Recruitment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Recruitment(value) {
        this._Recruitment = value;
    }
    /**
     * @return {?}
     */
    get IsHasDot() {
        return this._IsHasDot;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set IsHasDot(value) {
        this._IsHasDot = value;
    }
    /**
     * @return {?}
     */
    get TextColor() {
        return this._TextColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TextColor(value) {
        this._TextColor = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_AgentID", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_AgentName", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanDetail.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_AppUseMode", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_JobGrade", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_Actual", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_CaseCount", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_ClientID", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_DataType", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_DirectUnitType", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_Drilldown", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_Forecast", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_Goal", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_IsApprove", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanDetail.prototype, "_Manpower", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_MonthPlan", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanDetail.prototype, "_Orders", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_PerCase", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanDetail.prototype, "_Recruitment", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], AgencyPlanDetail.prototype, "_IsHasDot", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDetail.prototype, "_TextColor", void 0);
AgencyPlanDetail = __decorate([
    Bean('AgencyPlanDetail'),
    __metadata("design:paramtypes", [])
], AgencyPlanDetail);

var AgencyPlanGoalExpected_1;
let AgencyPlanGoalExpected = AgencyPlanGoalExpected_1 = class AgencyPlanGoalExpected {
    /**
     * @param {?} dataYear
     */
    constructor(dataYear) {
        this._ANP = '0';
        this._DataYear = 0;
        this._WorkingQuarter = 0;
        this._FYFC = '0';
        this._Q1 = '0';
        this._Q2 = '0';
        this._Q3 = '0';
        this._Q4 = '0';
        this._RecruitmentTotal = 0;
        this._DataYear = dataYear;
    }
    /**
     * @return {?}
     */
    get ANP() {
        return this._ANP;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ANP(value) {
        this._ANP = value;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @return {?}
     */
    get WorkingQuarter() {
        return this._WorkingQuarter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set WorkingQuarter(value) {
        this._WorkingQuarter = value;
    }
    /**
     * @return {?}
     */
    get FYFC() {
        return this._FYFC;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFC(value) {
        this._FYFC = value;
    }
    /**
     * @return {?}
     */
    get Q1() {
        return this._Q1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q1(value) {
        this._Q1 = value;
    }
    /**
     * @return {?}
     */
    get Q2() {
        return this._Q2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q2(value) {
        this._Q2 = value;
    }
    /**
     * @return {?}
     */
    get Q3() {
        return this._Q3;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q3(value) {
        this._Q3 = value;
    }
    /**
     * @return {?}
     */
    get Q4() {
        return this._Q4;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Q4(value) {
        this._Q4 = value;
    }
    /**
     * @return {?}
     */
    get RecruitmentTotal() {
        return this._RecruitmentTotal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set RecruitmentTotal(value) {
        this._RecruitmentTotal = value;
    }
    /**
     * @return {?}
     */
    get FYFCConvertANPRate() {
        return this._FYFCConvertANPRate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFCConvertANPRate(value) {
        this._FYFCConvertANPRate = value;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        let cloneAgencyPlanGoalExpected = new AgencyPlanGoalExpected_1(this._DataYear);
        cloneAgencyPlanGoalExpected.WorkingQuarter = this._WorkingQuarter;
        cloneAgencyPlanGoalExpected.ANP = this._ANP;
        cloneAgencyPlanGoalExpected.FYFC = this._FYFC;
        cloneAgencyPlanGoalExpected.Q1 = this._Q1;
        cloneAgencyPlanGoalExpected.Q2 = this._Q2;
        cloneAgencyPlanGoalExpected.Q3 = this._Q3;
        cloneAgencyPlanGoalExpected.Q4 = this._Q4;
        cloneAgencyPlanGoalExpected.RecruitmentTotal = this._RecruitmentTotal;
        cloneAgencyPlanGoalExpected.FYFCConvertANPRate = this._FYFCConvertANPRate;
        return cloneAgencyPlanGoalExpected;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanGoalExpected.prototype, "_ANP", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanGoalExpected.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanGoalExpected.prototype, "_WorkingQuarter", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanGoalExpected.prototype, "_FYFC", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanGoalExpected.prototype, "_Q1", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanGoalExpected.prototype, "_Q2", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanGoalExpected.prototype, "_Q3", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanGoalExpected.prototype, "_Q4", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanGoalExpected.prototype, "_RecruitmentTotal", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanGoalExpected.prototype, "_FYFCConvertANPRate", void 0);
AgencyPlanGoalExpected = AgencyPlanGoalExpected_1 = __decorate([
    Bean('AgencyPlanGoalExpected'),
    __metadata("design:paramtypes", [Number])
], AgencyPlanGoalExpected);

var GoalSettingPlanPopup_1;
let GoalSettingPlanPopup = GoalSettingPlanPopup_1 = class GoalSettingPlanPopup {
    /**
     * @param {?} FYFCgoal
     * @param {?} actual
     * @param {?} performanceMonthStart
     * @param {?} performanceMonthEnd
     * @param {?} monthPlanList
     */
    constructor(FYFCgoal, actual, performanceMonthStart, performanceMonthEnd, monthPlanList) {
        this._eachMonthPlan = [];
        this._FYFCGoal = FYFCgoal;
        this._actual = actual;
        this._performanceMonthStart = performanceMonthStart;
        this._performanceMonthEnd = performanceMonthEnd;
        this._monthPlanList = monthPlanList;
    }
    /**
     * @param {?} FYFCgoal
     * @return {?}
     */
    set FYFCGoal(FYFCgoal) {
        this._FYFCGoal = FYFCgoal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set actual(value) {
        this._actual = value;
    }
    /**
     * @param {?} performanceMonthStart
     * @return {?}
     */
    set performanceMonthStart(performanceMonthStart) {
        this._performanceMonthStart = performanceMonthStart;
    }
    /**
     * @param {?} performanceMonthEnd
     * @return {?}
     */
    set performanceMonthEnd(performanceMonthEnd) {
        this._performanceMonthEnd = performanceMonthEnd;
    }
    /**
     * @param {?} monthPlanList
     * @return {?}
     */
    set monthPlanList(monthPlanList) {
        this._monthPlanList = monthPlanList;
    }
    /**
     * @param {?} approveThreshold
     * @return {?}
     */
    set approveThreshold(approveThreshold) {
        this._approveThreshold = approveThreshold;
    }
    /**
     * @param {?} eachMonthPlan
     * @return {?}
     */
    set eachMonthPlan(eachMonthPlan) {
        this._eachMonthPlan = eachMonthPlan;
    }
    /**
     * @return {?}
     */
    get FYFCGoal() {
        return this._FYFCGoal;
    }
    /**
     * @return {?}
     */
    get actual() {
        return this._actual;
    }
    /**
     * @return {?}
     */
    get performanceMonthStart() {
        return this._performanceMonthStart;
    }
    /**
     * @return {?}
     */
    get performanceMonthEnd() {
        return this._performanceMonthEnd;
    }
    /**
     * @return {?}
     */
    get monthPlanList() {
        return this._monthPlanList;
    }
    /**
     * @return {?}
     */
    get approveThreshold() {
        return this._approveThreshold;
    }
    /**
     * @return {?}
     */
    get eachMonthPlan() {
        return this._eachMonthPlan;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        const cloneGoalSettingStep4 = new GoalSettingPlanPopup_1(this._FYFCGoal, this._actual, this._performanceMonthStart, this._performanceMonthEnd, this.monthPlanList.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.clone())));
        cloneGoalSettingStep4._eachMonthPlan = this.eachMonthPlan.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x));
        cloneGoalSettingStep4._approveThreshold = this._approveThreshold;
        return cloneGoalSettingStep4;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingPlanPopup.prototype, "_FYFCGoal", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingPlanPopup.prototype, "_actual", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingPlanPopup.prototype, "_performanceMonthStart", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingPlanPopup.prototype, "_performanceMonthEnd", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], GoalSettingPlanPopup.prototype, "_monthPlanList", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingPlanPopup.prototype, "_approveThreshold", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], GoalSettingPlanPopup.prototype, "_eachMonthPlan", void 0);
GoalSettingPlanPopup = GoalSettingPlanPopup_1 = __decorate([
    Bean('GoalSettingPlanPopup'),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], GoalSettingPlanPopup);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let AgencyPlanDirectUnitDetail = class AgencyPlanDirectUnitDetail {
    constructor() {
        this._Manpower = '';
        this._Recruitment = 0;
    }
    /**
     * @return {?}
     */
    get Manpower() {
        return this._Manpower;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Manpower(value) {
        this._Manpower = value;
    }
    /**
     * @return {?}
     */
    get Recruitment() {
        return this._Recruitment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Recruitment(value) {
        this._Recruitment = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDirectUnitDetail.prototype, "_Manpower", void 0);
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanDirectUnitDetail.prototype, "_Recruitment", void 0);
AgencyPlanDirectUnitDetail = __decorate([
    Bean('AgencyPlanDirectUnitDetail'),
    __metadata("design:paramtypes", [])
], AgencyPlanDirectUnitDetail);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let AgencyPlanMainData = class AgencyPlanMainData {
    constructor() {
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._DataYear = value;
    }
    /**
     * @return {?}
     */
    get DataType() {
        return this._DataType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataType(value) {
        this._DataType = value;
    }
    /**
     * @return {?}
     */
    get Forecast() {
        return this._Forecast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Forecast(value) {
        this._Forecast = value;
    }
    /**
     * @return {?}
     */
    get Actual() {
        return this._Actual;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Actual(value) {
        this._Actual = value;
    }
    /**
     * @return {?}
     */
    get MonthPlan() {
        return this._MonthPlan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set MonthPlan(value) {
        this._MonthPlan = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], AgencyPlanMainData.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanMainData.prototype, "_DataType", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanMainData.prototype, "_Forecast", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanMainData.prototype, "_Actual", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanMainData.prototype, "_MonthPlan", void 0);
AgencyPlanMainData = __decorate([
    Bean('AgencyPlanMainData'),
    __metadata("design:paramtypes", [])
], AgencyPlanMainData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let AgencyPlanDataForOverview = class AgencyPlanDataForOverview {
    constructor() {
    }
    /**
     * @return {?}
     */
    get FYFCForecast() {
        return this._FYFCForecast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFCForecast(value) {
        this._FYFCForecast = value;
    }
    /**
     * @return {?}
     */
    get ANPForecast() {
        return this._ANPForecast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ANPForecast(value) {
        this._ANPForecast = value;
    }
    /**
     * @return {?}
     */
    get ManpowerPlan() {
        return this._ManpowerPlan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ManpowerPlan(value) {
        this._ManpowerPlan = value;
    }
    /**
     * @return {?}
     */
    get RecruitmentPlan() {
        return this._RecruitmentPlan;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set RecruitmentPlan(value) {
        this._RecruitmentPlan = value;
    }
    /**
     * @return {?}
     */
    get CompletionRate() {
        return this._CompletionRate;
    }
    /**
     * @param {?} CompletionRate
     * @return {?}
     */
    set CompletionRate(CompletionRate) {
        this._CompletionRate = CompletionRate;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDataForOverview.prototype, "_FYFCForecast", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDataForOverview.prototype, "_ANPForecast", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDataForOverview.prototype, "_ManpowerPlan", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDataForOverview.prototype, "_RecruitmentPlan", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanDataForOverview.prototype, "_CompletionRate", void 0);
AgencyPlanDataForOverview = __decorate([
    Bean('AgencyPlanDataForOverview'),
    __metadata("design:paramtypes", [])
], AgencyPlanDataForOverview);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let SettingChangeEvent = class SettingChangeEvent {
    /**
     * @param {?} step
     * @param {?} column
     * @param {?} value
     */
    constructor(step, column, value) {
        this._step = step;
        this._column = column;
        this._value = value;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set step(value) {
        this._step = value;
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set column(value) {
        this._column = value;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], SettingChangeEvent.prototype, "_step", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], SettingChangeEvent.prototype, "_column", void 0);
__decorate([
    Required,
    __metadata("design:type", Object)
], SettingChangeEvent.prototype, "_value", void 0);
SettingChangeEvent = __decorate([
    Bean('SettingChangeEvent'),
    __metadata("design:paramtypes", [Number, String, Object])
], SettingChangeEvent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingTranslate = class GoalSettingTranslate {
    constructor() {
        this._TeamGoalEffectiveMonthTitle = '';
        this._PersonalGoalEffectiveMonthTitle = '';
        this._NowToYearEndTitle = '';
        this._FYFCNowToYearEndTitle = '';
        this._ANPNowToYearEndTitle = '';
        this._PersonalFYFCActualVariableTitle = '';
        this._TeamFYFCActualVariableTitle = '';
        this._TeamANPActualVariableTitle = '';
        this._FYFCActualDashTitle = '';
    }
    /**
     * @return {?}
     */
    get TeamGoalEffectiveMonthTitle() {
        return this._TeamGoalEffectiveMonthTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamGoalEffectiveMonthTitle(value) {
        this._TeamGoalEffectiveMonthTitle = value;
    }
    /**
     * @return {?}
     */
    get PersonalGoalEffectiveMonthTitle() {
        return this._PersonalGoalEffectiveMonthTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PersonalGoalEffectiveMonthTitle(value) {
        this._PersonalGoalEffectiveMonthTitle = value;
    }
    /**
     * @return {?}
     */
    get NowToYearEndTitle() {
        return this._NowToYearEndTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set NowToYearEndTitle(value) {
        this._NowToYearEndTitle = value;
    }
    /**
     * @return {?}
     */
    get FYFCNowToYearEndTitle() {
        return this._FYFCNowToYearEndTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFCNowToYearEndTitle(value) {
        this._FYFCNowToYearEndTitle = value;
    }
    /**
     * @return {?}
     */
    get ANPNowToYearEndTitle() {
        return this._ANPNowToYearEndTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ANPNowToYearEndTitle(value) {
        this._ANPNowToYearEndTitle = value;
    }
    /**
     * @return {?}
     */
    get PersonalFYFCActualVariableTitle() {
        return this._PersonalFYFCActualVariableTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PersonalFYFCActualVariableTitle(value) {
        this._PersonalFYFCActualVariableTitle = value;
    }
    /**
     * @return {?}
     */
    get TeamFYFCActualVariableTitle() {
        return this._TeamFYFCActualVariableTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamFYFCActualVariableTitle(value) {
        this._TeamFYFCActualVariableTitle = value;
    }
    /**
     * @return {?}
     */
    get TeamANPActualVariableTitle() {
        return this._TeamANPActualVariableTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set TeamANPActualVariableTitle(value) {
        this._TeamANPActualVariableTitle = value;
    }
    /**
     * @return {?}
     */
    get FYFCActualDashTitle() {
        return this._FYFCActualDashTitle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FYFCActualDashTitle(value) {
        this._FYFCActualDashTitle = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_TeamGoalEffectiveMonthTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_PersonalGoalEffectiveMonthTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_NowToYearEndTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_FYFCNowToYearEndTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_ANPNowToYearEndTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_PersonalFYFCActualVariableTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_TeamFYFCActualVariableTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_TeamANPActualVariableTitle", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingTranslate.prototype, "_FYFCActualDashTitle", void 0);
GoalSettingTranslate = __decorate([
    Bean('GoalSettingTranslate'),
    __metadata("design:paramtypes", [])
], GoalSettingTranslate);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CombineStep5AndAgecyPlanData = class CombineStep5AndAgecyPlanData {
    /**
     * @param {?} Step5ItemList
     * @param {?} AgencyPlanItemList
     * @param {?} ItemTextIsRedList
     */
    constructor(Step5ItemList, AgencyPlanItemList, ItemTextIsRedList) {
        this._Step5ItemList = [];
        this._AgencyPlanItemList = [];
        this._ItemTextIsRedList = [];
        this._Step5ItemList = Step5ItemList;
        this._AgencyPlanItemList = AgencyPlanItemList;
        this._ItemTextIsRedList = ItemTextIsRedList;
    }
    /**
     * @return {?}
     */
    get Step5ItemList() {
        return this._Step5ItemList;
    }
    /**
     * @return {?}
     */
    get AgencyPlanItemList() {
        return this._AgencyPlanItemList;
    }
    /**
     * @return {?}
     */
    get ItemTextIsRedList() {
        return this._ItemTextIsRedList;
    }
};
__decorate([
    Required,
    __metadata("design:type", Array)
], CombineStep5AndAgecyPlanData.prototype, "_Step5ItemList", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], CombineStep5AndAgecyPlanData.prototype, "_AgencyPlanItemList", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], CombineStep5AndAgecyPlanData.prototype, "_ItemTextIsRedList", void 0);
CombineStep5AndAgecyPlanData = __decorate([
    Bean('CombineStep5AndAgecyPlanData'),
    __metadata("design:paramtypes", [Array, Array, Array])
], CombineStep5AndAgecyPlanData);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingStep3ForTabChange = class GoalSettingStep3ForTabChange {
    /**
     * @param {?} ActivityValue
     * @param {?} Unit
     */
    constructor(ActivityValue$$1, Unit) {
        this._ActivityValue = null;
        this._Unit = '';
        this._ActivityValue = ActivityValue$$1;
        this._Unit = Unit;
    }
    /**
     * @return {?}
     */
    get ActivityValue() {
        return this._ActivityValue;
    }
    /**
     * @return {?}
     */
    get Unit() {
        return this._Unit;
    }
};
__decorate([
    Required,
    __metadata("design:type", ActivityValue)
], GoalSettingStep3ForTabChange.prototype, "_ActivityValue", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], GoalSettingStep3ForTabChange.prototype, "_Unit", void 0);
GoalSettingStep3ForTabChange = __decorate([
    Bean('GoalSettingStep3ForTabChange'),
    __metadata("design:paramtypes", [ActivityValue, String])
], GoalSettingStep3ForTabChange);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ValidError = class ValidError {
    /**
     * @param {?} Step
     * @param {?} ColId
     * @param {?} Msg
     */
    constructor(Step, ColId, Msg) {
        this._Step = Step;
        this._ColId = ColId;
        this._Msg = Msg;
    }
    /**
     * @return {?}
     */
    get Step() {
        return this._Step;
    }
    /**
     * @return {?}
     */
    get ColId() {
        return this._ColId;
    }
    /**
     * @return {?}
     */
    get Msg() {
        return this._Msg;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], ValidError.prototype, "_Step", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ValidError.prototype, "_ColId", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ValidError.prototype, "_Msg", void 0);
ValidError = __decorate([
    Bean('ValidError'),
    __metadata("design:paramtypes", [Number, String, String])
], ValidError);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let ApproveInfo = class ApproveInfo {
    /**
     * @param {?} DataYear
     * @param {?} AgentID
     * @param {?} IsApprove
     * @param {?} Comment
     */
    constructor(DataYear, AgentID, IsApprove, Comment) {
        this._DataYear = DataYear;
        this._AgentID = AgentID;
        this._IsApprove = IsApprove;
        this._Comment = Comment;
    }
    /**
     * @return {?}
     */
    get Comment() {
        return this._Comment;
    }
    /**
     * @return {?}
     */
    get IsApprove() {
        return this._IsApprove;
    }
    /**
     * @return {?}
     */
    get AgentID() {
        return this._AgentID;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], ApproveInfo.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ApproveInfo.prototype, "_AgentID", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], ApproveInfo.prototype, "_IsApprove", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], ApproveInfo.prototype, "_Comment", void 0);
ApproveInfo = __decorate([
    Bean('ApproveInfo'),
    __metadata("design:paramtypes", [Number, String, Boolean, String])
], ApproveInfo);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let GoalSettingStepDataParams = class GoalSettingStepDataParams {
    /**
     * @param {?} DataYear
     * @param {?} isAdjust
     */
    constructor(DataYear, isAdjust) {
        this._DataYear = DataYear;
        this._isAdjust = isAdjust;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._DataYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._DataYear = value;
    }
    /**
     * @return {?}
     */
    get isAdjust() {
        return this._isAdjust;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAdjust(value) {
        this._isAdjust = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", Number)
], GoalSettingStepDataParams.prototype, "_DataYear", void 0);
__decorate([
    Required,
    __metadata("design:type", Boolean)
], GoalSettingStepDataParams.prototype, "_isAdjust", void 0);
GoalSettingStepDataParams = __decorate([
    Bean('GoalSettingStepDataParams'),
    __metadata("design:paramtypes", [Number, Boolean])
], GoalSettingStepDataParams);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AGENCY_STATE = {
    DISPLAY: 'display',
    ACCEPT: 'accept',
    REJECT: 'reject',
    FIRST: 'first',
};
let AgencyPlanStatus = class AgencyPlanStatus {
    /**
     * @param {?} state
     * @param {?} agentID
     */
    constructor(state, agentID) {
        this.state = state;
        this.agentID = agentID;
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set state(value) {
        this._state = value;
    }
    /**
     * @return {?}
     */
    get agentID() {
        return this._agentID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set agentID(value) {
        this._agentID = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanStatus.prototype, "_state", void 0);
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanStatus.prototype, "_agentID", void 0);
AgencyPlanStatus = __decorate([
    Bean('AgencyPlanStatus'),
    __metadata("design:paramtypes", [Object, Object])
], AgencyPlanStatus);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let AgencyPlanMainInfo = class AgencyPlanMainInfo {
    constructor() {
    }
    /**
     * @return {?}
     */
    get CompletionRate() {
        return this._CompletionRate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set CompletionRate(value) {
        this._CompletionRate = value;
    }
    /**
     * @return {?}
     */
    get AgencyMainDataList() {
        return this._AgencyMainDataList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set AgencyMainDataList(value) {
        this._AgencyMainDataList = value;
    }
};
__decorate([
    Required,
    __metadata("design:type", String)
], AgencyPlanMainInfo.prototype, "_CompletionRate", void 0);
__decorate([
    Required,
    __metadata("design:type", Array)
], AgencyPlanMainInfo.prototype, "_AgencyMainDataList", void 0);
AgencyPlanMainInfo = __decorate([
    Bean('AgencyPlanMainInfo'),
    __metadata("design:paramtypes", [])
], AgencyPlanMainInfo);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalStoreService {
    /**
     * @param {?} loginMgr
     */
    constructor(loginMgr) {
        this.loginMgr = loginMgr;
        this.syncGoalDatas = null;
        this.settingYear = null;
        this.isPromo = false;
        this.canSkip = true;
        this.planFYFCPopupInfo = new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null);
        this.landingStatus = GOAL_LANDING_STATUS.FIRST_INIT;
        this.yearSubject = new BehaviorSubject(this.settingYear);
        this.statusSubject = new BehaviorSubject(this.landingStatus);
        this.isPromoSubject = new BehaviorSubject(this.isPromo);
        this.canSkipSubject = new BehaviorSubject(this.canSkip);
        this.planFYFCPopupInfoSubject = new BehaviorSubject(this.planFYFCPopupInfo);
        this.syncGoalDatasSubject = new BehaviorSubject(this.syncGoalDatas);
        this.goalPopupResponseSubject = new Subject();
        this.loginMgr.subscribeLogout().subscribe((/**
         * @return {?}
         */
        () => {
            //reset to init
            this.setSyncGoalDatas(null);
            this.setGoalLandingStatus(GOAL_LANDING_STATUS.FIRST_INIT);
            this.setSettingYear(null);
            this.setIsPromo(false);
            this.setCanSkip(true);
            this.setPlanFYFCPopupInfo(new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null));
        }));
    }
    /**
     * @return {?}
     */
    getSyncGoalDatas() {
        return this.syncGoalDatasSubject.asObservable();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setSyncGoalDatas(status) {
        this.syncGoalDatas = status;
        this.syncGoalDatasSubject.next(this.syncGoalDatas);
    }
    /**
     * @return {?}
     */
    getGoalLandingStatus() {
        return this.statusSubject.asObservable();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setGoalLandingStatus(status) {
        this.landingStatus = status;
        this.statusSubject.next(this.landingStatus);
    }
    /**
     * @return {?}
     */
    getSettingYear() {
        return this.yearSubject.asObservable();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setSettingYear(year) {
        this.settingYear = year;
        this.yearSubject.next(this.settingYear);
    }
    /**
     * @return {?}
     */
    getIsPromo() {
        return this.isPromoSubject.asObservable();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setIsPromo(val) {
        this.isPromo = val;
        this.isPromoSubject.next(this.isPromo);
    }
    /**
     * @return {?}
     */
    getCanSkip() {
        return this.canSkipSubject.asObservable();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setCanSkip(val) {
        this.canSkip = val;
        this.canSkipSubject.next(this.canSkip);
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    setPopupResp(resp) {
        this.goalPopupResponseSubject.next(resp);
    }
    /**
     * @return {?}
     */
    getPopupResp() {
        return this.goalPopupResponseSubject.asObservable();
    }
    // for edit personal popup
    /**
     * @param {?} info
     * @return {?}
     */
    setPlanFYFCPopupInfo(info) {
        console.log("Set info");
        this.planFYFCPopupInfo = info;
        if (info.data) {
            this.planFYFCPopupInfo.data.Step4 = this.planFYFCPopupInfo.data.Step4.clone();
        }
        this.planFYFCPopupInfoSubject.next(this.planFYFCPopupInfo);
    }
    /**
     * @return {?}
     */
    getPlanFYFCPopupInfo() {
        return this.planFYFCPopupInfoSubject.asObservable();
    }
}
GoalStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GoalStoreService.ctorParameters = () => [
    { type: DefaultLoginMgr }
];
/** @nocollapse */ GoalStoreService.ngInjectableDef = defineInjectable({ factory: function GoalStoreService_Factory() { return new GoalStoreService(inject(DefaultLoginMgr)); }, token: GoalStoreService, providedIn: "root" });
class GoalPopupResponse {
}
/** @enum {number} */
const GOAL_LANDING_STATUS = {
    SETTING_SUBMITTED: 0,
    FIRST_INIT: 1,
    FIRST_SET: 2,
    ADJUST_GOAL: 3 // from overview and is adjust
    ,
};
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.SETTING_SUBMITTED] = 'SETTING_SUBMITTED';
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.FIRST_INIT] = 'FIRST_INIT';
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.FIRST_SET] = 'FIRST_SET';
GOAL_LANDING_STATUS[GOAL_LANDING_STATUS.ADJUST_GOAL] = 'ADJUST_GOAL';
/** @enum {number} */
const PLAN_FYFC_POPUP_STATE = {
    DISPLAY: 0,
    NEEDAPPROVESUBMIT: 1,
    NOTNEEDAPPROVESUBMIT: 2,
    CLOSE: 3,
};
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.DISPLAY] = 'DISPLAY';
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.NEEDAPPROVESUBMIT] = 'NEEDAPPROVESUBMIT';
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.NOTNEEDAPPROVESUBMIT] = 'NOTNEEDAPPROVESUBMIT';
PLAN_FYFC_POPUP_STATE[PLAN_FYFC_POPUP_STATE.CLOSE] = 'CLOSE';
/** @enum {number} */
const SYNC_STATUS = {
    SYNC: 0,
    FINISH: 1,
};
SYNC_STATUS[SYNC_STATUS.SYNC] = 'SYNC';
SYNC_STATUS[SYNC_STATUS.FINISH] = 'FINISH';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingService {
    /**
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} goalStore
     * @param {?} errorHandler
     * @param {?} goalSettingStep
     * @param {?} yearConfigExtension
     * @param {?} goalSettingExtension
     * @param {?} dataSyncService
     * @param {?} profileCodeService
     */
    constructor(dispatcher, APIFactory$$1, goalStore, errorHandler, goalSettingStep, yearConfigExtension, goalSettingExtension, dataSyncService, profileCodeService) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory$$1;
        this.goalStore = goalStore;
        this.errorHandler = errorHandler;
        this.goalSettingStep = goalSettingStep;
        this.yearConfigExtension = yearConfigExtension;
        this.goalSettingExtension = goalSettingExtension;
        this.dataSyncService = dataSyncService;
        this.profileCodeService = profileCodeService;
        this.TextConvertStep1Map = new Map();
        this.TextConvertStep2Map = new Map();
        this.TextConvertStep5Map = new Map();
        this.StepTextConvertMap = new Map();
        this.ColMapToProfile = new Map();
        this.ColMapToProfileCodeMap = new Map();
        this.DASH = '--';
        this._isPopup = false;
        this.TextConvertStep1Map.set("FYFC", "PERSON_FYFC");
        // this.TextConvertStep1Map.set("ANP", "PERSON_ANP");
        this.TextConvertStep1Map.set("AnnualConvention", "ANNUAL_CONVENTION");
        this.TextConvertStep1Map.set("MDRT", "MDRT");
        this.TextConvertStep1Map.set("PromotionPlan", "PROMOTION_PLAN");
        this.TextConvertStep1Map.set("ActivityFYFC", "ACTIVITY_FYFC");
        this.TextConvertStep1Map.set("ActivityDays", "ACTIVITY_DAYS");
        this.TextConvertStep2Map.set("PerCase", "PER_CASE_FYFC");
        this.TextConvertStep5Map.set("TeamFYFC", "TEAM_FYFC");
        this.TextConvertStep5Map.set("TeamANP", "TEAM_ANP");
        this.TextConvertStep5Map.set("Manpower", "TEAM_MANPOWER");
        this.TextConvertStep5Map.set("Recruitment", "TEAM_RECRUITMENT");
        this.StepTextConvertMap.set("Step1", this.TextConvertStep1Map);
        this.StepTextConvertMap.set("Step2", this.TextConvertStep2Map);
        this.StepTextConvertMap.set("Step5", this.TextConvertStep5Map);
        this.ColMapToProfile.set("AnnualConvention", "GoalSetting_AnnualConvention");
        this.ColMapToProfile.set("MDRT", "GoalSetting_MDRT");
        this.ColMapToProfile.set("PromotionPlan", "Promotion_Plan");
        this.ColMapToProfile.forEach((/**
         * @param {?} code
         * @param {?} col
         * @return {?}
         */
        (code, col) => {
            this.ColMapToProfileCodeMap.set(col, this.profileCodeService.getCodeArray(code));
        }));
    }
    //-----------
    //#region  goalStepDatas
    // GoalSettingService
    /**
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    getGoalSettingStep1_5Data(year, isAdjust) {
        return from(this._getGoalSettingStep1_5Data(year, isAdjust));
    }
    /**
     * @private
     * @param {?} year
     * @param {?} isAdjust
     * @return {?}
     */
    _getGoalSettingStep1_5Data(year, isAdjust) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('into _getGoalSettingStep1_5Data year:', year, 'isAdjust', isAdjust);
            /** @type {?} */
            let returnData = new GoalSettingStepData(year);
            try {
                /** @type {?} */
                let yearConfigResp;
                /** @type {?} */
                let goalSettingResp;
                /** @type {?} */
                let goalSettingValueResp;
                /** @type {?} */
                let actualResp;
                /** @type {?} */
                let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                /** @type {?} */
                let goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                /** @type {?} */
                let goalSettingValue = this.APIFactory.getAPI("getGoalSettingValue");
                /** @type {?} */
                let actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                ((/** @type {?} */ (goalSettingValue))).setDataYear(year);
                ((/** @type {?} */ (actual))).setDataYear(year);
                [yearConfigResp, goalSettingResp, goalSettingValueResp, actualResp] = yield Promise.all([
                    this.dispatcher.dispatch(yearConfig).toPromise(),
                    this.dispatcher.dispatch(goalSetting).toPromise(),
                    this.dispatcher.dispatch(goalSettingValue).toPromise(),
                    this.dispatcher.dispatch(actual).toPromise()
                ]);
                console.log("yearConfigResp", yearConfigResp);
                console.log("goalSettingResp", goalSettingResp);
                console.log("goalSettingValueResp", goalSettingValueResp);
                console.log("actualResp", actualResp);
                //call GetYearConfigAPI
                if (yearConfigResp.Header["status"]
                    && goalSettingResp.Header["status"]
                    && goalSettingValueResp.Header["status"]
                    && actualResp.Header["status"]) {
                    /** @type {?} */
                    let yearConfigMap = this.yearJsonToMap(yearConfigResp["Body"]);
                    /** @type {?} */
                    let goalSettingMap = this.yearJsonToMap(goalSettingResp["Body"]);
                    /** @type {?} */
                    let yearConfigObj = yearConfigMap.get(year);
                    /** @type {?} */
                    let goalSettingObj = goalSettingMap.get(year);
                    console.log("yearConfigObj", yearConfigObj);
                    console.log("goalSettingObj", goalSettingObj);
                    if (yearConfigObj != undefined && goalSettingObj != undefined) {
                        // call GetGoalSettingValue
                        /** @type {?} */
                        let goalSettingValueObj = {};
                        goalSettingValueResp["Body"].forEach((/**
                         * @param {?} data
                         * @return {?}
                         */
                        data => {
                            goalSettingValueObj[data.DataType] = data.Value;
                        }));
                        console.log("goalSettingValueObj", goalSettingValueObj);
                        // call GetActualValue
                        /** @type {?} */
                        let teamFYFCActual = -1;
                        /** @type {?} */
                        let teamANPActual = -1;
                        /** @type {?} */
                        let allYearActual = -1;
                        /** @type {?} */
                        let monthOfYear = yearConfigObj.MonthQuantityOfYear;
                        /** @type {?} */
                        let actuallist = Array(monthOfYear).fill(this.DASH, 0);
                        /** @type {?} */
                        let actualBody = actualResp["Body"];
                        /** @type {?} */
                        let FYFCActuals = actualBody.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.DataYear == year && x.PerformanceType == PERFORMANCETYPE.PERSONAL && x.DataType == "FYFC"));
                        if (FYFCActuals.length > 0) {
                            allYearActual = 0;
                            FYFCActuals.forEach((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => {
                                if (x.Month <= yearConfigObj.PerformanceSettlementMonth) {
                                    actuallist[x.Month - 1] = x.Value;
                                    allYearActual += x.Value;
                                }
                            }));
                        }
                        /** @type {?} */
                        let TeamFYFCActuals = actualBody.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.DataYear == year && x.PerformanceType == PERFORMANCETYPE.TEAM && x.DataType == "FYFC"));
                        if (TeamFYFCActuals.length) {
                            teamFYFCActual = 0;
                            teamANPActual = 0;
                            TeamFYFCActuals.forEach((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => {
                                teamFYFCActual += (x.Month <= yearConfigObj.PerformanceSettlementMonth) ? x.Value : 0;
                            }));
                            teamANPActual = this.numberToFix(teamFYFCActual * yearConfigObj.FyfcCovertAnpRate, 0);
                        }
                        console.log("actuallist", actuallist);
                        /** @type {?} */
                        let YearConfig = new GoalSettingYearConfig();
                        /** @type {?} */
                        let GoalStatus = new GoalSettingGoalStatus();
                        /** @type {?} */
                        let Step1 = new GoalSettingStep1();
                        /** @type {?} */
                        let Step2 = new GoalSettingStep2();
                        /** @type {?} */
                        let Step3 = new GoalSettingStep3();
                        /** @type {?} */
                        let Step4 = new GoalSettingStep4();
                        /** @type {?} */
                        let Step5 = new GoalSettingStep5();
                        YearConfig.DataYear = yearConfigObj.DataYear;
                        YearConfig.IsCurrent = yearConfigObj.IsCurrent;
                        YearConfig.QuarterStartMonth = yearConfigObj.QuarterStartMonth;
                        YearConfig.QuarterEndMonth = yearConfigObj.QuarterEndMonth;
                        YearConfig.GoalSettingActivityProcMode = yearConfigObj.GoalSettingActivityProcMode;
                        YearConfig.GoalAndPlanDifferenceLimit = yearConfigObj.GoalAndPlanDifferenceLimit;
                        YearConfig.FyfcCovertAnpRate = yearConfigObj.FyfcCovertAnpRate;
                        YearConfig.InforceConvertSubmitRate = yearConfigObj.InforceConvertSubmitRate;
                        YearConfig.InforceConvertMeetRate = yearConfigObj.InforceConvertMeetRate;
                        YearConfig.InforceConvertScheduleRate = yearConfigObj.InforceConvertScheduleRate;
                        YearConfig.InforceConvertFindRate = yearConfigObj.InforceConvertFindRate;
                        YearConfig.NowToYearEndDays = yearConfigObj.NowToYearEndDays;
                        YearConfig.PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                        YearConfig.MonthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                        YearConfig.WorkingMonth = yearConfigObj.WorkingMonth;
                        if (this.yearConfigExtension) {
                            /** @type {?} */
                            let yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj, { source: "SQL" });
                            YearConfig.setExtension(yearConfigExtData);
                        }
                        GoalStatus.DataYear = year;
                        GoalStatus.PersonnelGoalApplicableYM = goalSettingObj.PersonnelGoalApplicableYM;
                        GoalStatus.TeamGoalApplicableYM = goalSettingObj.TeamGoalApplicableYM;
                        GoalStatus.GoalSetMonth = goalSettingObj.GoalSetMonth;
                        GoalStatus.ApproveStatus = goalSettingObj.ApproveStatus;
                        GoalStatus.IsFirstTime = goalSettingObj.IsFirstTime == "Y";
                        GoalStatus.IsNeedSetting = goalSettingObj.IsNeedSetting == "Y";
                        GoalStatus.SupervisorComment = goalSettingObj.SupervisorComment;
                        if (this.goalSettingExtension) {
                            /** @type {?} */
                            let goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "SQL" });
                            GoalStatus.setExtension(goalSettingExtData);
                        }
                        Step1.FYFC = goalSettingValueObj.PERSON_FYFC;
                        Step1.AnnualConvention = goalSettingValueObj.ANNUAL_CONVENTION;
                        Step1.MDRT = goalSettingValueObj.MDRT;
                        Step1.PromotionPlan = goalSettingValueObj.PROMOTION_PLAN;
                        Step1.Actual = this.changeToDash(allYearActual);
                        Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.PERSON_FYFC, Step1.Actual);
                        Step1.ActivityFYFC = goalSettingValueObj.ACTIVITY_FYFC;
                        Step1.ActivityDays = goalSettingValueObj.ACTIVITY_DAYS;
                        Step2.PerCase = goalSettingValueObj.PER_CASE_FYFC;
                        /** @type {?} */
                        let ActivityFYFC = isAdjust ? Step1.FYFCNowToYearEnd : Step1.FYFC;
                        Step3 = this.calculateActivityData(ActivityFYFC, Step2.PerCase, YearConfig);
                        if (isAdjust) {
                            Step4 = yield this._getMonthActualPlanBySQL(PERFORMANCETYPE.PERSONAL, year, YearConfig.MonthQuantityOfYear, YearConfig.PerformanceSettlementMonth);
                            Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                        }
                        else {
                            Step4 = this.calculateMonthActualPlan(YearConfig, Step1.FYFC, actuallist);
                            Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                        }
                        Step5.TeamFYFC = goalSettingValueObj.TEAM_FYFC;
                        Step5.TeamANP = goalSettingValueObj.TEAM_ANP;
                        Step5.Manpower = goalSettingValueObj.TEAM_MANPOWER;
                        Step5.Recruitment = goalSettingValueObj.TEAM_RECRUITMENT;
                        Step5.TeamFYFCActual = this.changeToDash(teamFYFCActual);
                        Step5.TeamANPActual = this.changeToDash(teamANPActual);
                        Step5.TeamFYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.TEAM_FYFC, Step5.TeamFYFCActual);
                        Step5.TeamANPNowToYearEnd = this.calculateANPFromFYFC(Step5.TeamFYFCNowToYearEnd, YearConfig.FyfcCovertAnpRate);
                        returnData.YearConfig = YearConfig;
                        returnData.GoalStatus = GoalStatus;
                        returnData.Step1 = Step1;
                        returnData.Step2 = Step2;
                        returnData.Step3 = Step3;
                        returnData.Step4 = Step4;
                        returnData.Step5 = Step5;
                        returnData.ActualList = actuallist;
                    }
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00400', 'getGoalSettingStep1_5Data fail!' + error.message));
            }
            console.log("getGoalSettingStep1_5Data returnData", returnData);
            return returnData;
        });
    }
    /**
     * @param {?} goal
     * @param {?} perCase
     * @param {?} yearConfig
     * @param {?=} activityDays
     * @return {?}
     */
    calculateActivityData(goal, perCase, yearConfig, activityDays = '') {
        console.log("calculateActivityData:", goal, perCase, yearConfig, activityDays);
        /** @type {?} */
        let returnObj = new GoalSettingStep3();
        /** @type {?} */
        let activityValues = [];
        try {
            /** @type {?} */
            let numGoal = Number(goal);
            /** @type {?} */
            let numPerCase = Number(perCase);
            if (NumberUtils.isNumber(goal) && NumberUtils.isNumber(perCase) && numPerCase > 0) {
                console.warn("calculateActivityData on service: ", goal, perCase, yearConfig);
                /** @type {?} */
                let days = (StringUtils.isEmpty(activityDays)) ? Number(yearConfig.NowToYearEndDays) : Number(activityDays);
                /** @type {?} */
                let daysInweek = 7;
                /** @type {?} */
                let daysInMonth = 365 / Number(yearConfig.MonthQuantityOfYear);
                /** @type {?} */
                let dayInforce = numGoal / numPerCase / days;
                /** @type {?} */
                let weekInforce = dayInforce * daysInweek;
                /** @type {?} */
                let monthInforce = dayInforce * daysInMonth;
                dayInforce = dayInforce;
                /** @type {?} */
                let tabs = [{ name: TIMEBASE.DAY, inforce: dayInforce }, { name: TIMEBASE.WEEK, inforce: weekInforce }, { name: TIMEBASE.MONTH, inforce: monthInforce }];
                if (this.goalSettingStep) {
                    activityValues = this.goalSettingStep.calculateOtherRuleActivityInforce(tabs, yearConfig);
                }
                /** @type {?} */
                let activity = activityValues[0].TimeBase;
                returnObj.Activity = activity;
                returnObj.ActivityValues = activityValues;
            }
            else {
                /** @type {?} */
                let tabNum = [TIMEBASE.DAY, TIMEBASE.WEEK, TIMEBASE.MONTH];
                returnObj.Activity = TIMEBASE.DAY;
                tabNum.forEach((/**
                 * @param {?} time
                 * @return {?}
                 */
                time => {
                    /** @type {?} */
                    let activity = new ActivityValue(time, this.DASH, this.DASH, this.DASH, this.DASH, this.DASH);
                    activityValues.push(activity);
                }));
                returnObj.ActivityValues = activityValues;
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00401', 'calculateActivityData fail!' + error.message));
        }
        console.log("calculateActivityData return obj: ", JSON.stringify(returnObj));
        return returnObj;
    }
    // step 4 function
    /**
     * @param {?} yearConfig
     * @param {?} goal
     * @param {?} actualList
     * @return {?}
     */
    calculateMonthActualPlan(yearConfig, goal, actualList) {
        //actualList example : [100,100,200,0,100,1]
        console.log("calculateMonthActualPlan goal:", goal);
        /** @type {?} */
        let Step4Datas = new GoalSettingStep4();
        /** @type {?} */
        let MonthActualPlanList = [];
        try {
            if (NumberUtils.isNumber(goal)) {
                if (this.goalSettingStep) {
                    MonthActualPlanList = this.goalSettingStep.calculateMonthActualPlan(yearConfig, Number(goal), actualList);
                }
                /** @type {?} */
                let forecast = this.calculateForecast(yearConfig.PerformanceSettlementMonth, MonthActualPlanList);
                /** @type {?} */
                let shortfall = this.calculateShortfall(goal, forecast);
                /** @type {?} */
                let actual = this.calulateSumByArray(actualList);
                Step4Datas.MonthList = MonthActualPlanList;
                Step4Datas.Forecast = forecast;
                Step4Datas.Shortfall = shortfall;
                Step4Datas.Actual = actual;
            }
            else {
                //全部都dash
                for (let i = 0; i < yearConfig.MonthQuantityOfYear; i++) {
                    /** @type {?} */
                    let data = new MonthlyPlanFYFCData(i, this.DASH, this.DASH);
                    MonthActualPlanList.push(data);
                }
                Step4Datas.Actual = this.DASH;
                Step4Datas.Forecast = this.DASH;
                Step4Datas.Shortfall = this.DASH;
                Step4Datas.MonthList = MonthActualPlanList;
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00402', 'calculateMonthActualPlan fail!' + error.message));
        }
        console.log("calculateMonthActualPlan:", MonthActualPlanList);
        return Step4Datas;
    }
    /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    calculateActual(PerformanceSettlementMonth, MonthActualPlanList) {
        if (PerformanceSettlementMonth > 0) {
            return MonthActualPlanList.map((/**
             * @param {?} x
             * @return {?}
             */
            x => (Number(x.Actual) < 0 || x.Actual == this.DASH || x.Month > PerformanceSettlementMonth) ? 0 : Number(x.Actual))).reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => pre + Number(cur)), 0).toString();
        }
        else {
            return this.DASH;
        }
    }
    /**
     * @param {?} PerformanceSettlementMonth
     * @param {?} MonthActualPlanList
     * @return {?}
     */
    calculateForecast(PerformanceSettlementMonth, MonthActualPlanList) {
        return this.calulateSumByArray(this.getActualPlanFromMonthList(MonthActualPlanList, PerformanceSettlementMonth));
    }
    /**
     * @param {?} monthList
     * @return {?}
     */
    calulateSumByArray(monthList) {
        /** @type {?} */
        let isDash = true;
        monthList.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data != this.DASH) {
                isDash = false;
            }
        }));
        /** @type {?} */
        let returnNum = this.DASH;
        if (!isDash) {
            returnNum = monthList.map((/**
             * @param {?} x
             * @return {?}
             */
            x => (Number(x) < 0 || x == this.DASH || StringUtils.isEmpty(x)) ? 0 : x)).reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => pre + Number(cur)), 0).toString();
        }
        return returnNum;
    }
    /**
     * @param {?} goal
     * @param {?} forecast
     * @return {?}
     */
    calculateShortfall(goal, forecast) {
        /** @type {?} */
        let result = this.DASH;
        if (NumberUtils.isNumber(goal) && NumberUtils.isNumber(forecast)) {
            if (this.goalSettingStep) {
                result = this.goalSettingStep.getShortfall(goal, forecast).toString();
            }
            else {
                /** @type {?} */
                let tempresult = (Number(goal) - Number(forecast));
                result = (tempresult < 0) ? "0" : tempresult.toString();
            }
        }
        return result;
    }
    //#endregion  goalStepDatas
    //#region Submit & Approve function
    /**
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    isNeedApprove(SubmitType, DataYear, adjustDatas) {
        return from(this._isNeedApprove(SubmitType, DataYear, adjustDatas));
    }
    /**
     * @private
     * @param {?} SubmitType
     * @param {?} DataYear
     * @param {?} adjustDatas
     * @return {?}
     */
    _isNeedApprove(SubmitType, DataYear, adjustDatas) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("_isNeedApprove adjustDatas", adjustDatas, SubmitType, DataYear);
            /** @type {?} */
            let isApproveInfo;
            try {
                if (this.goalSettingStep) {
                    //taiwan
                    /** @type {?} */
                    let originDatas = yield this._getGoalSettingStep1_5Data(DataYear, true);
                    isApproveInfo = this.goalSettingStep.isNeedApprove(adjustDatas, originDatas);
                }
                else {
                    isApproveInfo = new IsApproveInfo(true, false);
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00403', 'isNeedApprove fail!' + error.message));
            }
            console.log("isNeedApprove", isApproveInfo);
            return isApproveInfo;
        });
    }
    /**
     * @param {?} FYFC
     * @param {?} Forecast
     * @param {?} GoalAndPlanDifferenceLimit
     * @return {?}
     */
    isNeedApprove_plan(FYFC, Forecast, GoalAndPlanDifferenceLimit) {
        console.log('isNeedApprove_plan FYFC', FYFC, 'Forecast', Forecast, 'GoalAndPlanDifferenceLimit', GoalAndPlanDifferenceLimit);
        /** @type {?} */
        let isApproveInfo;
        try {
            if (this.goalSettingStep) {
                isApproveInfo = this.goalSettingStep.isNeedApprove_plan(Number(FYFC), Number(Forecast), GoalAndPlanDifferenceLimit);
            }
            else {
                isApproveInfo = new IsApproveInfo(true, false);
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00404', 'isNeedApprove_plan fail!' + error.message));
        }
        console.log("isNeedApprove_plan isApproveInfo:", isApproveInfo);
        return of(isApproveInfo);
    }
    /**
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    submitGoal(submitType, IsNeedApprove, submitData) {
        return from(this._submitGoal(submitType, IsNeedApprove, submitData));
    }
    /**
     * @private
     * @param {?} submitType
     * @param {?} IsNeedApprove
     * @param {?} submitData
     * @return {?}
     */
    _submitGoal(submitType, IsNeedApprove, submitData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("[_submitGoal] submitData", submitData);
            /** @type {?} */
            let Activity;
            /** @type {?} */
            let GoalSettingValue = [];
            /** @type {?} */
            let GoalPlan = new SubmitGoalPlan();
            /** @type {?} */
            let SubmitInfo = new SubmitGoalInfo();
            /** @type {?} */
            let SubmitDatas;
            /** @type {?} */
            let returnResp = new SuccessStatus(false);
            try {
                if (submitType == SUBMITGOALTYPE.ALL) {
                    /** @type {?} */
                    let GoalSettingType = ["Step1", "Step2", "Step5"];
                    GoalSettingType.forEach((/**
                     * @param {?} step
                     * @return {?}
                     */
                    step => {
                        /** @type {?} */
                        let stepMap = this.StepTextConvertMap.get(step);
                        stepMap.forEach((/**
                         * @param {?} val
                         * @param {?} key
                         * @return {?}
                         */
                        (val, key) => {
                            if (submitData[step][key]) {
                                GoalSettingValue.push(new SubmitGoalSettingValue(val, submitData[step][key], []));
                            }
                        }));
                    }));
                    Activity = submitData.Step3.Activity;
                }
                console.log("GoalSettingValue", GoalSettingValue);
                GoalPlan.TimeBase = TIMEBASE.MONTH;
                GoalPlan.Values = submitData.Step4.MonthList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.Plan != this.DASH)).map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    return new SubmitGoalPlanInfo(PERFORMANCETYPE.PERSONAL, x.Month, Number(x.Plan), []);
                }));
                console.log("GoalPlan", GoalPlan);
                SubmitInfo.DataYear = submitData.DataYear;
                SubmitInfo.SubmitType = submitType;
                SubmitInfo.ActivityGoalBase = Activity;
                SubmitInfo.IsNeedApprove = IsNeedApprove ? YESNO.YES : YESNO.NO;
                SubmitInfo.Extensions = [];
                console.log("SubmitInfo", SubmitInfo);
                SubmitDatas = new SubmitGoalData(SubmitInfo, GoalSettingValue, GoalPlan);
                /** @type {?} */
                let Resp = yield this._pushGoalSetting(SubmitDatas);
                if (Resp.isSuccess) {
                    yield this.syncGoalDatas();
                    returnResp.isSuccess = true;
                }
                else {
                    throw "submit goal fail! ";
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00405', 'submitGoal fail!' + error.message));
                returnResp.isSuccess = false;
            }
            console.log("_submitGoal resp2", returnResp);
            return returnResp;
        });
    }
    //#endregion Submit & Approve
    //#region LANDING status
    /**
     * @return {?}
     */
    getIsFirstUse() {
        // get DeviceInfo table
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            let DeviceInfo = this.APIFactory.getAPI("getDeviceInfo");
            ((/** @type {?} */ (DeviceInfo))).setDataType("FirstUseAPP");
            try {
                this.dispatcher.dispatch(DeviceInfo).toPromise().then((/**
                 * @param {?} Datas
                 * @return {?}
                 */
                Datas => {
                    console.log("getIsFirstUse", Datas["Body"][0].CategoryVal == "Y" ? true : false);
                    observer.next(Datas["Body"][0].CategoryVal == "Y" ? true : false);
                    observer.complete();
                }));
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00408', 'getIsFirstUse fail!' + error.message));
            }
        }));
    }
    // @Valid('GoalSettingGoalStatus')
    /**
     * @return {?}
     */
    getSettingStatus() {
        return from(this._getSettingStatus());
    }
    /**
     * @private
     * @return {?}
     */
    _getSettingStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let GoalSettingResp;
            /** @type {?} */
            let yearConfigResp;
            /** @type {?} */
            let returnDatas = [];
            try {
                /** @type {?} */
                let goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                /** @type {?} */
                let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                [GoalSettingResp, yearConfigResp] = yield Promise.all([
                    this.dispatcher.dispatch(goalSetting).toPromise(),
                    this.dispatcher.dispatch(yearConfig).toPromise()
                ]);
                //getGoalSetting
                /** @type {?} */
                let goalSettingMap = new Map();
                /** @type {?} */
                let yearConfigMap = new Map();
                if (GoalSettingResp.Header["status"] && yearConfigResp.Header["status"]) {
                    goalSettingMap = this.yearJsonToMap(GoalSettingResp["Body"]);
                    yearConfigMap = this.yearJsonToMap(yearConfigResp["Body"]);
                    returnDatas = [];
                    goalSettingMap.forEach((/**
                     * @param {?} data
                     * @param {?} key
                     * @return {?}
                     */
                    (data, key) => {
                        /** @type {?} */
                        let goalStatus = new GoalSettingGoalStatus();
                        goalStatus.DataYear = key;
                        goalStatus.IsCurrent = yearConfigMap.get(key).IsCurrent;
                        goalStatus.IsNeedSetting = data.IsNeedSetting == YESNO.YES;
                        goalStatus.IsFirstTime = data.IsFirstTime == YESNO.YES;
                        goalStatus.ApproveStatus = data.ApproveStatus;
                        goalStatus.RemainingDays = data.Remainingdays;
                        returnDatas.push(goalStatus);
                    }));
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00409', 'getSettingStatus fail!' + error.message));
            }
            console.log("getSettingStatus returnDatas", returnDatas);
            return returnDatas;
        });
    }
    /**
     * @private
     * @param {?} yearJson
     * @return {?}
     */
    yearJsonToMap(yearJson) {
        console.log("yearJson", yearJson);
        /** @type {?} */
        let map = new Map();
        if (yearJson != null) {
            yearJson.forEach((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                if (data.DataYear != undefined) {
                    map.set(data.DataYear, data);
                }
            }));
        }
        return map;
    }
    //#endregion LANDING status
    //#region GoalSetting overview
    /**
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    getOverviewData(performanceType, DataYear = -1, AgentID = "") {
        if (StringUtils.isEmpty(AgentID)) {
            return from(this._getOverviewDataBySQL(performanceType, DataYear));
        }
        else {
            return from(this._getOverviewDataByRestful(performanceType, DataYear, AgentID));
        }
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?=} year
     * @return {?}
     */
    _getOverviewDataBySQL(performanceType, year = -1) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let goalStepDatas = new GoalSettingStepData(year);
            try {
                goalStepDatas = yield this._getGoalSettingStep1_5Data(year, true);
                console.log("_getOverviewDataBySQL goalStepDatas", JSON.stringify(goalStepDatas));
                if (goalStepDatas != null) {
                    /** @type {?} */
                    let actualPlanData = yield this._getMonthActualPlanBySQL(performanceType, year, goalStepDatas["YearConfig"]["MonthQuantityOfYear"], goalStepDatas["YearConfig"]["PerformanceSettlementMonth"]);
                    if (actualPlanData != null) {
                        goalStepDatas.Step4 = actualPlanData;
                        goalStepDatas.Step4.Shortfall = this.calculateShortfall(goalStepDatas.Step1.FYFC, goalStepDatas.Step4.Forecast).toString();
                    }
                    else {
                        throw "get MonthActualPlan data fail.";
                    }
                    /** @type {?} */
                    let agencyPlanObj = new AgencyPlanDataForOverview();
                    if (performanceType == PERFORMANCETYPE.PERSONAL) {
                        /** @type {?} */
                        let perCase = goalStepDatas.Step2.PerCase ? goalStepDatas.Step2.PerCase : '1';
                        /** @type {?} */
                        let activityGoal = goalStepDatas.Step1.ActivityFYFC ? goalStepDatas.Step1.ActivityFYFC : goalStepDatas.Step1.FYFC;
                        /** @type {?} */
                        let activityDays = goalStepDatas.Step1.ActivityDays ? goalStepDatas.Step1.ActivityDays : goalStepDatas.YearConfig.NowToYearEndDays.toString();
                        goalStepDatas.Step3 = this.calculateActivityData(activityGoal, perCase, goalStepDatas.YearConfig, activityDays);
                    }
                    else if (performanceType == PERFORMANCETYPE.TEAM) {
                        /** @type {?} */
                        let agencyPlanMainInfo = yield this.getAgencyPlanMainData(year).toPromise();
                        if (agencyPlanMainInfo && agencyPlanMainInfo.AgencyMainDataList.length) {
                            /** @type {?} */
                            let agencyPlanMainList = agencyPlanMainInfo.AgencyMainDataList;
                            console.warn("agencyPlanMainList: ", JSON.stringify(agencyPlanMainList));
                            console.log(agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "FYFC"))[0].Forecast);
                            console.log("agencyPlanObj", agencyPlanObj);
                            agencyPlanObj.FYFCForecast = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "FYFC"))[0].Forecast;
                            agencyPlanObj.ANPForecast = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "ANP"))[0].Forecast;
                            agencyPlanObj.ManpowerPlan = this.changeToDash(agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Manpower"))[0].MonthPlan);
                            agencyPlanObj.RecruitmentPlan = agencyPlanMainList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Recruitment"))[0].MonthPlan;
                            agencyPlanObj.CompletionRate = agencyPlanMainInfo.CompletionRate;
                        }
                        else {
                            throw "get agencyPlan data fail.";
                        }
                        goalStepDatas.AgencyPlan = agencyPlanObj;
                    }
                }
                else {
                    throw "get 1_5Data Fail. goalStepDatas:" + goalStepDatas;
                }
                goalStepDatas = this._converSelectCode(goalStepDatas);
                if (this.goalSettingStep) {
                    goalStepDatas = this.goalSettingStep.changeEmptyToDash(goalStepDatas);
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00504', 'getOverviewDataBySQL fail!' + error));
            }
            console.log("_getOverviewDataBySQL goalStepDatas", goalStepDatas, JSON.stringify(goalStepDatas));
            return goalStepDatas;
        });
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?=} DataYear
     * @param {?=} AgentID
     * @return {?}
     */
    _getOverviewDataByRestful(performanceType, DataYear = -1, AgentID = "") {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn("performanceType: ", performanceType, " DataYear: ", DataYear, " AgentID: ", AgentID);
            /** @type {?} */
            let GetGoalResp;
            /** @type {?} */
            let GetYearConfigResp;
            /** @type {?} */
            let goalSettingObj;
            /** @type {?} */
            let GoalValues;
            /** @type {?} */
            let goalSettingValueObj = {};
            /** @type {?} */
            let YearConfig = new GoalSettingYearConfig();
            /** @type {?} */
            let GoalStatus = new GoalSettingGoalStatus();
            /** @type {?} */
            let Step1 = new GoalSettingStep1();
            /** @type {?} */
            let Step2 = new GoalSettingStep2();
            /** @type {?} */
            let Step3 = new GoalSettingStep3();
            /** @type {?} */
            let Step4 = new GoalSettingStep4();
            /** @type {?} */
            let Step5 = new GoalSettingStep5();
            /** @type {?} */
            let AgencyPlan = new AgencyPlanDataForOverview();
            YearConfig.DataYear = DataYear;
            GoalStatus.DataYear = DataYear;
            /** @type {?} */
            let returnDatas = new GoalSettingStepData(DataYear);
            try {
                /** @type {?} */
                let getGoalapi = this.APIFactory.getAPI("getGoal");
                ((/** @type {?} */ (getGoalapi))).setAgentID(AgentID);
                /** @type {?} */
                let getYearConfigapi = this.APIFactory.getAPI("getYearConfig");
                ((/** @type {?} */ (getYearConfigapi))).setAgentID(AgentID);
                [GetGoalResp, GetYearConfigResp] = yield Promise.all([
                    this.dispatcher.dispatch(getGoalapi).toPromise(),
                    this.dispatcher.dispatch(getYearConfigapi).toPromise()
                ]);
                console.log("_getOverviewDataByRestful GetGoalResp", GetGoalResp);
                console.log("_getOverviewDataByRestful GetYearConfigResp", GetYearConfigResp);
                /** @type {?} */
                let GoalMap = this.yearJsonToMap(GetGoalResp.Goals);
                /** @type {?} */
                let YearConfigMap = this.yearJsonToMap(GetYearConfigResp.Configurations);
                /** @type {?} */
                let GoalObj = GoalMap.get(DataYear);
                /** @type {?} */
                let yearConfigObj = YearConfigMap.get(DataYear);
                if (GoalObj != undefined && yearConfigObj != undefined) {
                    goalSettingObj = GoalMap.get(DataYear).GoalSetting;
                    GoalValues = GoalMap.get(DataYear).GoalValue;
                    console.log("_getOverviewDataByRestful goalSettingObj", goalSettingObj);
                    console.log("_getOverviewDataByRestful GoalValues", GoalValues);
                    GoalValues.forEach((/**
                     * @param {?} GoalValue
                     * @return {?}
                     */
                    GoalValue => {
                        goalSettingValueObj[GoalValue.DataType] = GoalValue.Value;
                    }));
                    /** @type {?} */
                    let monthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                    /** @type {?} */
                    let PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                    Step4 = yield this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID);
                    Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                    /** @type {?} */
                    let allYearActual = this.calculateActual(yearConfigObj.PerformanceSettlementMonth, Step4.MonthList);
                    YearConfig.InforceConvertSubmitRate = yearConfigObj.InforceConvertSubmitRate;
                    YearConfig.InforceConvertMeetRate = yearConfigObj.InforceConvertMeetRate;
                    YearConfig.InforceConvertScheduleRate = yearConfigObj.InforceConvertScheduleRate;
                    YearConfig.InforceConvertFindRate = yearConfigObj.InforceConvertFindRate;
                    YearConfig.NowToYearEndDays = yearConfigObj.NowToYearEndDays;
                    YearConfig.PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                    YearConfig.MonthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                    YearConfig.WorkingMonth = yearConfigObj.WorkingMonth;
                    YearConfig.GoalAndPlanDifferenceLimit = yearConfigObj.GoalAndPlanDifferenceLimit;
                    if (this.yearConfigExtension) {
                        /** @type {?} */
                        let yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj, { source: "Restful" });
                        YearConfig.setExtension(yearConfigExtData);
                    }
                    GoalStatus.PersonnelGoalApplicableYM = goalSettingObj.PersonnelGoalApplicableYM;
                    GoalStatus.TeamGoalApplicableYM = goalSettingObj.TeamGoalApplicableYM;
                    GoalStatus.GoalSetMonth = goalSettingObj.GoalSetMonth;
                    GoalStatus.ApproveStatus = goalSettingObj.Status;
                    if (this.goalSettingExtension) {
                        /** @type {?} */
                        let goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "Restful" });
                        GoalStatus.setExtension(goalSettingExtData);
                    }
                    if (performanceType == PERFORMANCETYPE.PERSONAL) {
                        Step1.FYFC = goalSettingValueObj.PERSON_FYFC;
                        Step1.AnnualConvention = goalSettingValueObj.ANNUAL_CONVENTION;
                        Step1.MDRT = goalSettingValueObj.MDRT;
                        Step1.PromotionPlan = goalSettingValueObj.PROMOTION_PLAN;
                        Step1.Actual = allYearActual;
                        Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.PERSON_FYFC, allYearActual);
                        Step2.PerCase = goalSettingValueObj.PER_CASE_FYFC;
                        /** @type {?} */
                        let perCase = goalSettingValueObj.PER_CASE_FYFC;
                        /** @type {?} */
                        let activityGoal = goalSettingValueObj.ACTIVITY_FYFC ? goalSettingValueObj.ACTIVITY_FYFC : goalSettingValueObj.PERSON_FYFC;
                        /** @type {?} */
                        let activityDays = goalSettingValueObj.ACTIVITY_DAYS ? goalSettingValueObj.ACTIVITY_DAYS : yearConfigObj.NowToYearEndDays;
                        Step3 = this.calculateActivityData(activityGoal, perCase, YearConfig, activityDays);
                        returnDatas.YearConfig = YearConfig;
                        returnDatas.GoalStatus = GoalStatus;
                        returnDatas.Step1 = Step1;
                        returnDatas.Step2 = Step2;
                        returnDatas.Step3 = Step3;
                        returnDatas.Step4 = Step4;
                    }
                    else {
                        Step5.TeamFYFC = goalSettingValueObj.TEAM_FYFC;
                        Step5.TeamANP = goalSettingValueObj.TEAM_ANP;
                        Step5.Manpower = goalSettingValueObj.TEAM_MANPOWER;
                        Step5.Recruitment = goalSettingValueObj.TEAM_RECRUITMENT;
                        /** @type {?} */
                        let agencyPlanObj = yield this.getAgencyPlanMainDataByRestful(DataYear, AgentID);
                        if (agencyPlanObj != null) {
                            /** @type {?} */
                            let mainDataList = agencyPlanObj.AgencyMainDataList;
                            AgencyPlan.FYFCForecast = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "FYFC"))[0].Forecast;
                            AgencyPlan.ANPForecast = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "ANP"))[0].Forecast;
                            AgencyPlan.ManpowerPlan = this.changeToDash(mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Manpower"))[0].MonthPlan);
                            AgencyPlan.RecruitmentPlan = mainDataList.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            x => x.DataType == "Recruitment"))[0].MonthPlan;
                            AgencyPlan.CompletionRate = agencyPlanObj.CompletionRate;
                        }
                        else {
                            throw "get agencyPlan fail.";
                        }
                        returnDatas.YearConfig = YearConfig;
                        returnDatas.GoalStatus = GoalStatus;
                        returnDatas.Step4 = Step4;
                        returnDatas.Step5 = Step5;
                        //todo get completionRate 
                        // AgencyPlan.CompletionRate = ? ;
                        returnDatas.AgencyPlan = AgencyPlan;
                    }
                }
                returnDatas = this._converSelectCode(returnDatas);
                if (this.goalSettingStep) {
                    returnDatas = this.goalSettingStep.changeEmptyToDash(returnDatas);
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00505', 'getOverviewDataByRestful fail!' + error.message));
            }
            console.log("_getOverviewDataByRestful returnDatas", returnDatas, JSON.parse(JSON.stringify(returnDatas)));
            return returnDatas;
        });
    }
    //#endregion GoalSetting overview
    //#region get month actual & plan
    /**
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?=} monthQuantityOfYear
     * @param {?=} PerformanceSettlementMonth
     * @param {?=} AgentID
     * @return {?}
     */
    getMonthActualPlan(performanceType, DataYear, monthQuantityOfYear = 12, PerformanceSettlementMonth = 99, AgentID = "") {
        if (StringUtils.isEmpty(AgentID)) {
            return from(this._getMonthActualPlanBySQL(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth));
        }
        else {
            return from(this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID));
        }
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @param {?} AgentID
     * @return {?}
     */
    _getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID) {
        return __awaiter(this, void 0, void 0, function* () {
            // call GetGoalAPI (Restful set AgentID)
            /** @type {?} */
            let GoalResp;
            /** @type {?} */
            let ActualResp;
            /** @type {?} */
            let returnDatas = new GoalSettingStep4();
            /** @type {?} */
            let MonthActualPlanList = [];
            try {
                /** @type {?} */
                let getGoalapi = this.APIFactory.getAPI("getGoal");
                /** @type {?} */
                let getActualapi = this.APIFactory.getAPI("getActual");
                ((/** @type {?} */ (getGoalapi))).setAgentID(AgentID);
                ((/** @type {?} */ (getActualapi))).setAgentID(AgentID);
                [GoalResp, ActualResp] = yield Promise.all([
                    this.dispatcher.dispatch(getGoalapi).toPromise(),
                    this.dispatcher.dispatch(getActualapi).toPromise()
                ]);
                console.log("GoalResp", GoalResp);
                console.log("ActualResp", ActualResp);
                /** @type {?} */
                let GoalPlanMap = new Map();
                /** @type {?} */
                let ActuallMap = new Map();
                /** @type {?} */
                let thisActual = [];
                if (GoalResp.Goals != null && ActualResp.Actual != null) {
                    GoalResp.Goals.forEach((/**
                     * @param {?} Goal
                     * @return {?}
                     */
                    Goal => {
                        if (Goal.DataYear == DataYear && Goal.GoalPlan.Values != null) {
                            Goal.GoalPlan.Values.forEach((/**
                             * @param {?} plan
                             * @return {?}
                             */
                            plan => {
                                if (plan.PerformanceType == performanceType) {
                                    GoalPlanMap.set(plan.Month, plan.Value.toString());
                                }
                            }));
                        }
                    }));
                    thisActual = ActualResp.Actual.filter((/**
                     * @param {?} Actual
                     * @return {?}
                     */
                    Actual => Actual.DataYear == DataYear)).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.Values));
                    console.log("thisActual", thisActual);
                    thisActual.forEach((/**
                     * @param {?} Actual
                     * @return {?}
                     */
                    Actual => {
                        Actual.forEach((/**
                         * @param {?} value
                         * @return {?}
                         */
                        value => {
                            if (value.DataType == "FYFC" && value.PerformanceType == performanceType) {
                                ActuallMap.set(value.Month, value.Value.toString());
                            }
                        }));
                    }));
                }
                else {
                    throw "get Goal fail. GoalResp:" + GoalResp;
                }
                for (let i = 1; i <= monthQuantityOfYear; i++) {
                    MonthActualPlanList.push(new MonthlyPlanFYFCData(i, this.changeToDash(GoalPlanMap.get(i)), ActuallMap.get(i) == null || i > PerformanceSettlementMonth ? this.DASH : ActuallMap.get(i)));
                }
                returnDatas.MonthList = MonthActualPlanList;
                returnDatas.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnDatas.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnDatas.Shortfall = null;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00410', 'getMonthActualPlanByRestful fail!' + error.message));
            }
            console.log("_getMonthActualPlanByRestful Datas", returnDatas);
            return returnDatas;
        });
    }
    /**
     * @private
     * @param {?} performanceType
     * @param {?} DataYear
     * @param {?} monthQuantityOfYear
     * @param {?} PerformanceSettlementMonth
     * @return {?}
     */
    _getMonthActualPlanBySQL(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('_getMonthActualPlanBySQL performanceType', performanceType, 'DataYear', DataYear, 'monthQuantityOfYear', monthQuantityOfYear, 'PerformanceSettlementMonth', PerformanceSettlementMonth);
            /** @type {?} */
            let returnData = new GoalSettingStep4();
            /** @type {?} */
            let MonthActualPlanList = [];
            try {
                /** @type {?} */
                let actualResp;
                /** @type {?} */
                let goalPlanResp;
                // call GetGoalSettingValue       // call GetActualValue
                /** @type {?} */
                let goalPlanList = Array(monthQuantityOfYear).fill(this.DASH, 0);
                /** @type {?} */
                let actualList = Array(monthQuantityOfYear).fill(this.DASH, 0);
                /** @type {?} */
                let goalPlan = this.APIFactory.getAPI("getGoalSettingPlan");
                /** @type {?} */
                let actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                ((/** @type {?} */ (goalPlan))).setDataYear(DataYear);
                ((/** @type {?} */ (actual))).setDataYear(DataYear);
                [goalPlanResp, actualResp] = yield Promise.all([
                    this.dispatcher.dispatch(goalPlan).toPromise(),
                    this.dispatcher.dispatch(actual).toPromise()
                ]);
                console.log("goalPlanResp", goalPlanResp);
                console.log("actualResp", actualResp);
                if (goalPlanResp.Header["status"] && actualResp.Header["status"]) {
                    goalPlanResp["Body"].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.PerformanceType == performanceType)).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        goalPlanList[x.Month - 1] = x.Value.toString();
                    }));
                    actualResp["Body"].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.PerformanceType == performanceType && x.DataType == "FYFC" && x.Month <= PerformanceSettlementMonth)).map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        actualList[x.Month - 1] = x.Value.toString();
                    }));
                }
                else {
                    throw "get GoalSetting fail. goalPlanResp" + goalPlanResp.Header.msg + 'actualResp:' + actualResp.Header.msg;
                }
                console.log("goalPlanList", goalPlanList);
                console.log("actuallist", actualList);
                for (let i = 1; i <= monthQuantityOfYear; i++) {
                    MonthActualPlanList.push(new MonthlyPlanFYFCData(i, goalPlanList[i - 1], actualList[i - 1]));
                }
                returnData.MonthList = MonthActualPlanList;
                returnData.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnData.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                returnData.Shortfall = null;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00411', 'getMonthActualPlanBySQL fail!' + error.message));
            }
            console.log("_getMonthActualPlanBySQL returnData", returnData);
            return returnData;
        });
    }
    //#endregion get month actual & plan
    //#region AgencyPlan Datas
    /**
     * @param {?} dataYear
     * @param {?=} AgentID
     * @return {?}
     */
    getAgencyPlanMainData(dataYear, AgentID = "") {
        if (AgentID == "") {
            return from(this.getAgencyPlanMainDataBySQL(dataYear));
        }
        else if (AgentID != "") {
            return from(this.getAgencyPlanMainDataByRestful(dataYear, AgentID));
        }
    }
    /**
     * @private
     * @param {?} dataYear
     * @return {?}
     */
    getAgencyPlanMainDataBySQL(dataYear) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getAgencyPlanMainDataBySQL DataYear', dataYear);
            /** @type {?} */
            let returnData = new AgencyPlanMainInfo();
            /** @type {?} */
            let otherParaResp;
            /** @type {?} */
            let agencyPlanResp;
            try {
                //get completionRate 
                /** @type {?} */
                let getOtherParameterAPI = (/** @type {?} */ (this.APIFactory.getAPI('getOtherParameter')));
                /** @type {?} */
                let agencyPlanGetMainAPI = (/** @type {?} */ ((this.APIFactory.getAPI("getAgencyPlanMain"))));
                getOtherParameterAPI.SetYear(dataYear);
                agencyPlanGetMainAPI.setDataYear(dataYear);
                [otherParaResp, agencyPlanResp] = yield Promise.all([getOtherParameterAPI, agencyPlanGetMainAPI].map((/**
                 * @param {?} api
                 * @return {?}
                 */
                api => this.dispatcher.dispatch(api).toPromise())));
                console.log('otherParaResp: ', otherParaResp, "agencyPlanResp", agencyPlanResp);
                if (otherParaResp.Header["status"] && agencyPlanResp.Header["status"]) {
                    /** @type {?} */
                    let respFilterCompletionRate = otherParaResp['Body'].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.MappingID === "CompletionRate"));
                    /** @type {?} */
                    let completionRate = respFilterCompletionRate.length > 0 ? respFilterCompletionRate[0].SetValue : '';
                    /** @type {?} */
                    let returnList = [];
                    /** @type {?} */
                    let AgencyPlanMainList = agencyPlanResp["Body"];
                    console.log("getAgencyPlanMainDataBySQL AgencyPlanMainList", AgencyPlanMainList);
                    if (AgencyPlanMainList) {
                        returnList = ((/** @type {?} */ (AgencyPlanMainList))).map((/**
                         * @param {?} main
                         * @return {?}
                         */
                        main => this._agencyPlanMainDataObjToBean(main)));
                    }
                    else {
                        throw "get AgencyPlanMainList fail.";
                    }
                    console.log('getAgencyPlanMainDataBySQL returnList:', returnList);
                    console.log('completionRate:', completionRate);
                    returnData.CompletionRate = completionRate;
                    returnData.AgencyMainDataList = returnList;
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00300', 'getAgencyPlanMainDataBySQL fail!' + error));
            }
            console.log("getAgencyPlanMainDataBySQL returnData", returnData);
            return returnData;
        });
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    _agencyPlanMainDataObjToBean(object) {
        /** @type {?} */
        let agencyPlanMainData = new AgencyPlanMainData();
        agencyPlanMainData.Actual = object.Actual;
        agencyPlanMainData.DataType = object.DataType;
        agencyPlanMainData.DataYear = object.DataYear;
        agencyPlanMainData.Forecast = object.Forecast;
        agencyPlanMainData.MonthPlan = this.changeToDash(object.MonthPlan);
        return agencyPlanMainData;
    }
    /**
     * @private
     * @param {?} dataYear
     * @param {?} AgentID
     * @return {?}
     */
    getAgencyPlanMainDataByRestful(dataYear, AgentID) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getAgencyPlanMainDataByRestful dataYear', dataYear, 'AgentID', AgentID);
            /** @type {?} */
            let returnData = new AgencyPlanMainInfo();
            /** @type {?} */
            let MainList = [];
            try {
                /** @type {?} */
                let getAgencyPlanAPI = (/** @type {?} */ ((this.APIFactory.getAPI("getAgencyPlan"))));
                getAgencyPlanAPI.setAgentID(AgentID);
                /** @type {?} */
                let agencyPlanResp = yield this.dispatcher.dispatch(getAgencyPlanAPI).toPromise();
                console.log("getAgencyPlanMainDataByRestful agencyPlanResp ", agencyPlanResp);
                if (agencyPlanResp.AgencyPlans != null) {
                    /** @type {?} */
                    let agencyPlanMap = this.yearJsonToMap(agencyPlanResp.AgencyPlans);
                    /** @type {?} */
                    let completionRate = agencyPlanMap.get(dataYear).CompletionRate;
                    /** @type {?} */
                    let tempAgencyPlanList = agencyPlanMap.get(dataYear).Values;
                    ((/** @type {?} */ (tempAgencyPlanList))).forEach((/**
                     * @param {?} plan
                     * @return {?}
                     */
                    plan => {
                        plan['MonthPlan'] = plan['Plan'];
                        plan['DataYear'] = dataYear;
                    }));
                    MainList = ((/** @type {?} */ (tempAgencyPlanList))).map((/**
                     * @param {?} plan
                     * @return {?}
                     */
                    plan => this._agencyPlanMainDataObjToBean(plan)));
                    returnData.AgencyMainDataList = MainList;
                    returnData.CompletionRate = completionRate;
                }
                else {
                    throw "get AgencyPlan fail. agencyPlanResp:" + agencyPlanResp;
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00301', 'getAgencyPlanMainDataByRestful fail!' + error.message));
            }
            console.log("getAgencyPlanMainDataByRestful returnData ", returnData);
            return returnData;
        });
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    getAgencyPlanDetailData(dataYear) {
        /** @type {?} */
        let agencyPlanGetDetailAPI = (/** @type {?} */ (this.APIFactory.getAPI("getAgencyPlanDetail")));
        agencyPlanGetDetailAPI.setDataYear(dataYear);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            try {
                this.dispatcher.dispatch(agencyPlanGetDetailAPI).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
                    if (resp["Body"]) {
                        /** @type {?} */
                        let returnList = [];
                        // let AgencyPlanDetailList: Array<AgencyPlanDetail> = resp["Body"];
                        returnList = ((/** @type {?} */ (resp["Body"]))).map((/**
                         * @param {?} item
                         * @return {?}
                         */
                        item => this._agencyPlanDetailObjToBean(item)));
                        console.log("returnList in service: ", returnList);
                        observer.next(returnList);
                        observer.complete();
                    }
                    else {
                        throw "get agencyPlanGetDetail fail. resp:" + resp;
                    }
                }));
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00302', 'getAgencyPlanDetailData fail!' + error.message));
            }
        }));
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    _agencyPlanDetailObjToBean(object) {
        /** @type {?} */
        let agencyPlanDetail = new AgencyPlanDetail();
        agencyPlanDetail.AgentID = object.AgentID;
        agencyPlanDetail.AgentName = object.AgentName;
        agencyPlanDetail.DataYear = object.DataYear;
        agencyPlanDetail.AppUseMode = object.AppUseMode;
        agencyPlanDetail.JobGrade = object.JobGrade;
        agencyPlanDetail.Actual = this.changeToDash(object.Actual);
        agencyPlanDetail.CaseCount = this.changeToDash(object.CaseCount);
        agencyPlanDetail.ClientID = object.ClientID;
        agencyPlanDetail.DataType = object.DataType;
        agencyPlanDetail.DirectUnitType = object.DirectUnitType;
        agencyPlanDetail.Drilldown = object.Drilldown;
        agencyPlanDetail.TextColor = agencyPlanDetail.Drilldown == 'Y' ? 'blue' : 'default';
        agencyPlanDetail.Forecast = this.changeToDash(object.Forecast);
        agencyPlanDetail.Goal = this.changeToDash(object.Goal);
        agencyPlanDetail.IsApprove = object.IsApprove;
        agencyPlanDetail.IsHasDot = agencyPlanDetail.IsApprove === 'Y';
        agencyPlanDetail.Manpower = object.Manpower;
        agencyPlanDetail.MonthPlan = this.changeToDash(object.MonthPlan);
        agencyPlanDetail.Orders = object.Orders;
        agencyPlanDetail.PerCase = this.changeToDash(object.PerCase);
        agencyPlanDetail.Recruitment = object.Recruitment;
        return agencyPlanDetail;
    }
    /**
     * @param {?} dataYear
     * @return {?}
     */
    getGoalExpected(dataYear) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let returnAgencyPlanGoalExpected;
            /** @type {?} */
            let goalSettingYearConfigAPI = (/** @type {?} */ (this.APIFactory.getAPI("getGoalSettingYearConfig")));
            goalSettingYearConfigAPI.setDataYear(dataYear);
            /** @type {?} */
            let goalSettingGetExpectedAPI = (/** @type {?} */ (this.APIFactory.getAPI("getGoalSettingExpected")));
            goalSettingGetExpectedAPI.setDataYear(dataYear);
            try {
                /** @type {?} */
                let yearConfigResp;
                /** @type {?} */
                let goalExpectedResp;
                [yearConfigResp, goalExpectedResp] = yield Promise.all([
                    this.dispatcher.dispatch(goalSettingYearConfigAPI).toPromise(),
                    this.dispatcher.dispatch(goalSettingGetExpectedAPI).toPromise()
                ]);
                if (goalExpectedResp && yearConfigResp) {
                    /** @type {?} */
                    let expectedRespBody = goalExpectedResp["Body"];
                    /** @type {?} */
                    let yearConfigRespBody = yearConfigResp["Body"];
                    returnAgencyPlanGoalExpected = expectedRespBody.length > 0 ? this._agencyPlanGoalExpectedObjToBean(expectedRespBody[0]) : new AgencyPlanGoalExpected(dataYear);
                    returnAgencyPlanGoalExpected.FYFCConvertANPRate = yearConfigRespBody[0]['FyfcCovertAnpRate'];
                    returnAgencyPlanGoalExpected.WorkingQuarter = yearConfigRespBody[0]['WorkingQuarter'];
                    console.log("getGoalExpected trans", returnAgencyPlanGoalExpected);
                }
                else {
                    throw "get goal expected and yearConfigfail.";
                }
                return returnAgencyPlanGoalExpected;
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00303', 'getGoalExpected fail!' + error.message));
            }
        });
    }
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    _agencyPlanGoalExpectedObjToBean(object) {
        /** @type {?} */
        let goalExpected = new AgencyPlanGoalExpected(object.DataYear);
        goalExpected.ANP = object.ANP.toString();
        goalExpected.FYFC = object.FYFC.toString();
        goalExpected.Q1 = object.Q1.toString();
        goalExpected.Q2 = object.Q2.toString();
        goalExpected.Q3 = object.Q3.toString();
        goalExpected.Q4 = object.Q4.toString();
        /** @type {?} */
        let numberRecruitmentTotal = NumberUtils.isNumber(object.RecruitmentTotal) ? Number(object.RecruitmentTotal) : 0;
        goalExpected.RecruitmentTotal = numberRecruitmentTotal;
        return goalExpected;
    }
    /**
     * @param {?} goalExpected
     * @return {?}
     */
    calculaRecruitmentSum(goalExpected) {
        return [goalExpected.Q1, goalExpected.Q2, goalExpected.Q3, goalExpected.Q4].reduce((/**
         * @param {?} total
         * @param {?} each
         * @return {?}
         */
        (total, each) => {
            /** @type {?} */
            let numberQ = NumberUtils.isNumber(each) ? Number(each) : 0;
            return total + numberQ;
        }), 0);
    }
    /**
     * @param {?} expectedRecruitment
     * @param {?} indirectRecruitment
     * @return {?}
     */
    saveGoalExpected(expectedRecruitment, indirectRecruitment) {
        /** @type {?} */
        let goalSettingSetExpectedAPI = (/** @type {?} */ (this.APIFactory.getAPI("setGoalSettingExpected")));
        goalSettingSetExpectedAPI.setExpectedRecruitment(expectedRecruitment);
        goalSettingSetExpectedAPI.setIndirectRecruitment(indirectRecruitment);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            try {
                this.dispatcher.dispatch(goalSettingSetExpectedAPI).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                resp => {
                    observer.next(resp["Header"]);
                    observer.complete();
                }));
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00304', 'saveGoalExpected fail!' + error.message));
            }
        }));
    }
    //#endregion AgencyPlan Datas
    //#region other function
    /**
     * @param {?} n
     * @param {?} toFix
     * @return {?}
     */
    numberToFix(n, toFix) {
        /** @type {?} */
        let fix10 = Math.pow(10, toFix);
        /** @type {?} */
        let returnData = Math.round(this.strip(n) * fix10) / fix10;
        return returnData;
    }
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    strip(num, precision = 12) {
        return Number(num.toPrecision(precision));
    }
    /**
     * @param {?} FYFC
     * @param {?} actual
     * @return {?}
     */
    calculateNowToYearEndGoal(FYFC, actual) {
        console.log("calculateNowToYearEndGoal FYFC:", FYFC, "actual:", actual);
        /** @type {?} */
        let caculeteActual = NumberUtils.isNumber(actual) ? Number(actual) : 0;
        if (!NumberUtils.isNumber(FYFC)) {
            return this.DASH;
        }
        else {
            /** @type {?} */
            let result = Number(FYFC) - caculeteActual < 0 ? 0 : Number(FYFC) - caculeteActual;
            return result.toString();
        }
    }
    /**
     * @param {?} NowToYearEnd
     * @param {?} actual
     * @return {?}
     */
    calculateAllYearGoal(NowToYearEnd, actual) {
        console.log("calculateNowToYearEndGoal NowToYearEnd:", NowToYearEnd, "actual:", actual);
        /** @type {?} */
        let caculeteActual = NumberUtils.isNumber(actual) ? Number(actual) : 0;
        if (!NumberUtils.isNumber(NowToYearEnd)) {
            return this.DASH;
        }
        else {
            return (Number(NowToYearEnd) + caculeteActual).toString();
        }
    }
    /**
     * @return {?}
     */
    get saveFeedbackState() {
        return this._isPopup;
    }
    /**
     * @param {?} isPopup
     * @return {?}
     */
    set saveFeedbackState(isPopup) {
        this._isPopup = isPopup;
    }
    /**
     * @param {?} list
     * @param {?} actualMonth
     * @return {?}
     */
    getActualPlanFromMonthList(list, actualMonth) {
        console.log("getActualPlanFromMonthList:", list, actualMonth);
        return list.map((/**
         * @param {?} x
         * @param {?} index
         * @return {?}
         */
        (x, index) => (index + 1 < actualMonth || index + 1 === actualMonth ? x.Actual : x.Plan)));
    }
    /**
     * @param {?} FYFC
     * @param {?} rate
     * @return {?}
     */
    calculateANPFromFYFC(FYFC, rate) {
        if (StringUtils.isEmpty(FYFC) || FYFC == this.DASH) {
            return this.DASH;
        }
        else {
            return this.numberToFix(Number(FYFC) * Number(rate), 0).toString();
        }
    }
    /**
     * @param {?} ANP
     * @param {?} rate
     * @return {?}
     */
    calculateFYFCFromANP(ANP, rate) {
        if (StringUtils.isEmpty(ANP) || ANP == this.DASH) {
            return this.DASH;
        }
        else {
            return this.numberToFix(Number(ANP) / Number(rate), 0).toString();
        }
    }
    //#endregion other function
    //#region Sync Datas 
    /**
     * @return {?}
     */
    syncGoalDatas() {
        return __awaiter(this, void 0, void 0, function* () {
            this.goalStore.setSyncGoalDatas(SYNC_STATUS.SYNC);
            yield this.dataSyncService.syncFunc(["GOAL", "PROGRESS"], true);
            this.goalStore.setSyncGoalDatas(SYNC_STATUS.FINISH);
        });
    }
    /**
     * @return {?}
     */
    syncAgencyPlan() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dataSyncService.syncFunc(["AGENCY_PLAN"], true);
        });
    }
    /**
     * @return {?}
     */
    syncYearConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dataSyncService.syncFunc(["YEAR_CONFIG"], true);
        });
    }
    /**
     * @param {?} approveInfo
     * @return {?}
     */
    pushApproveGoal(approveInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._pushApproveGoal(approveInfo);
        });
    }
    /**
     * @param {?} param
     * @return {?}
     */
    changeToDash(param) {
        return (param === -1 || param === null || param === "") ? this.DASH : param.toString();
    }
    //#endregion Sync Datas 
    /**
     * @private
     * @param {?} approveInfo
     * @return {?}
     */
    _pushApproveGoal(approveInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let returnResp = new SuccessStatus(false);
            /** @type {?} */
            let approveInfoData = {
                "AgentID": approveInfo.AgentID,
                "DataYear": approveInfo.DataYear,
                "isApprove": approveInfo.IsApprove,
                "comment": approveInfo.Comment
            };
            try {
                /** @type {?} */
                let mainData = approveInfoData;
                /** @type {?} */
                let pushApproveData = this.APIFactory.getAPI("pushApproveGoal");
                ((/** @type {?} */ (pushApproveData))).mainData = mainData;
                console.log('pushApproveGoal mainData', mainData);
                /** @type {?} */
                let getResp = yield this.dispatcher.dispatch(pushApproveData).toPromise();
                console.log('getResp', getResp);
                if (getResp.success) {
                    yield this.dataSyncService.syncFunc(["DASHBOARD", "GOAL", "PROGRESS"]);
                    returnResp.isSuccess = true;
                }
                else {
                    throw "Approve Goal fail.";
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00100', 'pushApproveGoal fail!' + error.message));
            }
            console.log("[_pushApproveGoal] returnResp:", returnResp);
            return returnResp;
        });
    }
    /**
     * @private
     * @param {?} submitDatas
     * @return {?}
     */
    _pushGoalSetting(submitDatas) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let returnResp = new SuccessStatus(false);
            try {
                console.log('pushGoalSettingDataAPI mainData', submitDatas);
                /** @type {?} */
                let pushGoalSettingData = this.APIFactory.getAPI("pushGoalSettingData");
                ((/** @type {?} */ (pushGoalSettingData))).mainData = submitDatas;
                /** @type {?} */
                let getResp = yield this.dispatcher.dispatch(pushGoalSettingData).toPromise();
                if (getResp.success) {
                    returnResp.isSuccess = true;
                }
                else {
                    throw "push Goal failed," + getResp.Header.msg;
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00101', error));
            }
            return returnResp;
        });
    }
    /**
     * @private
     * @param {?} StepData
     * @return {?}
     */
    _converSelectCode(StepData) {
        this.ColMapToProfile.forEach((/**
         * @param {?} code
         * @param {?} col
         * @return {?}
         */
        (code, col) => {
            /** @type {?} */
            let profileCodes = this.ColMapToProfileCodeMap.get(col);
            if (profileCodes.length && StepData.Step1 && StepData.Step1[col]) {
                /** @type {?} */
                let colVal = StepData.Step1[col];
                profileCodes = profileCodes.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.getCode() == colVal));
                StepData.Step1[col] = profileCodes.length ? profileCodes[0].getMappingID() : this.DASH;
            }
        }));
        return StepData;
    }
}
GoalSettingService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
GoalSettingService.ctorParameters = () => [
    { type: APIDispatch },
    { type: APIFactory },
    { type: GoalStoreService },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingStepToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [yearConfigExtensionDataToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingExtensionDataToken,] }] },
    { type: DataSyncService },
    { type: ProfileCodeService }
];
/** @nocollapse */ GoalSettingService.ngInjectableDef = defineInjectable({ factory: function GoalSettingService_Factory() { return new GoalSettingService(inject(APIDispatch), inject(APIFactory), inject(GoalStoreService), inject(ErrorHandler), inject(goalSettingStepToken, 8), inject(yearConfigExtensionDataToken, 8), inject(goalSettingExtensionDataToken, 8), inject(DataSyncService), inject(ProfileCodeService)); }, token: GoalSettingService, providedIn: "root" });
__decorate([
    Valid('GoalSettingStepData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getGoalSettingStep1_5Data", null);
__decorate([
    Valid('GoalSettingStep3'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, GoalSettingYearConfig, String]),
    __metadata("design:returntype", GoalSettingStep3)
], GoalSettingService.prototype, "calculateActivityData", null);
__decorate([
    Valid('GoalSettingStep4'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GoalSettingYearConfig, String, Array]),
    __metadata("design:returntype", GoalSettingStep4)
], GoalSettingService.prototype, "calculateMonthActualPlan", null);
__decorate([
    Valid('IsApproveInfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, GoalSettingStepData]),
    __metadata("design:returntype", Observable)
], GoalSettingService.prototype, "isNeedApprove", null);
__decorate([
    Valid('IsApproveInfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Observable)
], GoalSettingService.prototype, "isNeedApprove_plan", null);
__decorate([
    Valid('SuccessStatus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, GoalSettingStepData]),
    __metadata("design:returntype", Observable)
], GoalSettingService.prototype, "submitGoal", null);
__decorate([
    Valid('GoalSettingStepData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getOverviewData", null);
__decorate([
    Valid('GoalSettingStep4'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Number, String]),
    __metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getMonthActualPlan", null);
__decorate([
    Valid('AgencyPlanDetail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Observable)
], GoalSettingService.prototype, "getAgencyPlanDetailData", null);
__decorate([
    Valid('AgencyPlanGoalExpected'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoalSettingService.prototype, "getGoalExpected", null);
__decorate([
    Valid('SuccessStatus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ApproveInfo]),
    __metadata("design:returntype", Promise)
], GoalSettingService.prototype, "pushApproveGoal", null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalValidService {
    /**
     * @param {?} errorHandler
     * @param {?} goalSettingService
     * @param {?} goalSettingStep
     * @param {?} goalValid
     */
    constructor(errorHandler, goalSettingService, goalSettingStep, goalValid) {
        this.errorHandler = errorHandler;
        this.goalSettingService = goalSettingService;
        this.goalSettingStep = goalSettingStep;
        this.goalValid = goalValid;
        this.numberValid = [];
        this.requiredValid = [];
        if (this.goalValid) {
            this.numberValid = this.goalValid.getNumberArray();
            this.requiredValid = this.goalValid.getRequiredArray();
        }
        else {
            this.numberValid = ["FYFC", "FYFCNowToYearEnd", "PerCase", "TeamFYFC", "TeamFYFCNowToYearEnd", "Recruitment", "Manpower"];
            this.requiredValid = ["FYFC", "FYFCNowToYearEnd", "AnnualConvention", "MDRT", "PerCase", "TeamFYFC", "TeamFYFCNowToYearEnd", "Manpower", "Recruitment"];
        }
    }
    //#region Vaild function
    /**
     * @param {?} step
     * @param {?} colId
     * @param {?} val
     * @param {?} validDatas
     * @param {?} isAdjust
     * @param {?} errorResult
     * @param {?=} isPageValid
     * @return {?}
     */
    onChangeValid(step, colId, val, validDatas, isAdjust, errorResult, isPageValid = false) {
        console.log("onChangeValid colId", colId, "val", val, 'validDatas', validDatas, errorResult, 'isPageValid', isPageValid);
        try {
            /** @type {?} */
            let isDecimalResult;
            /** @type {?} */
            let PlanEmpty = colId.indexOf("Plan_") != -1 && StringUtils.isEmpty(val);
            /** @type {?} */
            let RequiredEmpty = this.requiredValid.indexOf(colId) != -1 && StringUtils.isEmpty(val);
            /** @type {?} */
            let numberPositive = this.numberValid.indexOf(colId) != -1 && !NumberUtils.isPositive(val);
            /** @type {?} */
            let vaildEmptyResult = RequiredEmpty || numberPositive || PlanEmpty;
            //負數的error msg 也是_required
            /** @type {?} */
            let requiredErrorMsg = (colId.indexOf("Plan_") != -1) ? "Plan_required" : colId + "_required";
            errorResult = this._setError(step, colId, "_required", vaildEmptyResult, errorResult, requiredErrorMsg); //判斷是否是負數或是空值
            if (!vaildEmptyResult && (this.numberValid.indexOf(colId) != -1 || colId.indexOf("Plan_") != -1)) { //判斷不是空值或負數才繼續往下驗證
                isDecimalResult = NumberUtils.isDecimal(val);
                errorResult = this._setError(step, colId, "_point", isDecimalResult, errorResult);
            }
            console.log("isDecimalResult", isDecimalResult, "vaildEmptyResult", vaildEmptyResult, "isPageValid", isPageValid);
            if (!isDecimalResult && !vaildEmptyResult && !isPageValid) { //驗證都沒有錯才改值
                console.log("onChangeValid no error");
                if (colId.indexOf("Plan_") != -1) {
                    validDatas.Step4.Forecast = this.goalSettingService.calculateForecast(validDatas.YearConfig.PerformanceSettlementMonth, validDatas.Step4.MonthList);
                    validDatas.Step4.Shortfall = this.goalSettingService.calculateShortfall(validDatas.Step1.FYFC, validDatas.Step4.Forecast);
                    errorResult = this._validShortfall(validDatas.Step4, errorResult);
                }
                if (!isAdjust) { // 第一次設定goal
                    switch (colId) {
                        case "TeamFYFC":
                            validDatas.Step5.TeamANP = this.goalSettingService.calculateANPFromFYFC(val, validDatas.YearConfig.FyfcCovertAnpRate);
                            break;
                        case "TeamFYFCNowToYearEnd":
                            validDatas.Step5.TeamANPNowToYearEnd = this.goalSettingService.calculateANPFromFYFC(val, validDatas.YearConfig.FyfcCovertAnpRate);
                            break;
                        case "FYFC":
                            validDatas.Step3 = this.goalSettingService.calculateActivityData(val, validDatas.Step2.PerCase, validDatas.YearConfig);
                            validDatas.Step4 = this.goalSettingService.calculateMonthActualPlan(validDatas.YearConfig, val, validDatas.ActualList);
                            validDatas.Step4.Shortfall = this.goalSettingService.calculateShortfall(Number(val), validDatas.Step4.Forecast);
                            errorResult = this.unitPageValid(4, validDatas, false, errorResult);
                            break;
                        case "PerCase":
                            validDatas.Step3 = this.goalSettingService.calculateActivityData(validDatas.Step1.FYFC, val, validDatas.YearConfig);
                            break;
                    }
                }
                else {
                    /** @type {?} */
                    let FYFCSmallValid = Number(validDatas.Step1.Actual) > Number(validDatas.Step1.FYFC);
                    /** @type {?} */
                    let FYFCNowToYearEndIsPositive = NumberUtils.isPositive(validDatas.Step1.FYFCNowToYearEnd);
                    switch (colId) {
                        case "FYFC":
                            validDatas.Step1.FYFCNowToYearEnd = this.goalSettingService.calculateNowToYearEndGoal(val, validDatas.Step1.Actual);
                            errorResult = this._setError(1, colId, "_small", FYFCSmallValid, errorResult);
                            errorResult = this._setError(1, "FYFCNowToYearEnd", "_required", !FYFCNowToYearEndIsPositive, errorResult);
                            if (!FYFCSmallValid && FYFCNowToYearEndIsPositive) {
                                validDatas.Step3 = this.goalSettingService.calculateActivityData(validDatas.Step1.FYFCNowToYearEnd, validDatas.Step2.PerCase, validDatas.YearConfig);
                                validDatas.Step4.Forecast = this.goalSettingService.calculateForecast(validDatas.YearConfig.PerformanceSettlementMonth, validDatas.Step4.MonthList);
                                validDatas.Step4.Shortfall = this.goalSettingService.calculateShortfall(Number(val), validDatas.Step4.Forecast);
                                errorResult = this._validShortfall(validDatas.Step4, errorResult);
                            }
                            break;
                        case "FYFCNowToYearEnd":
                            validDatas.Step1.FYFC = this.goalSettingService.calculateAllYearGoal(val, validDatas.Step1.Actual);
                            errorResult = this.onChangeValid(1, "FYFC", validDatas.Step1.FYFC, validDatas, true, errorResult);
                            break;
                        case "PerCase":
                            if (!FYFCSmallValid && FYFCNowToYearEndIsPositive) {
                                validDatas.Step3 = this.goalSettingService.calculateActivityData(validDatas.Step1.FYFCNowToYearEnd, val, validDatas.YearConfig);
                            }
                            break;
                        case "TeamFYFC":
                            validDatas.Step5.TeamFYFCNowToYearEnd = this.goalSettingService.calculateNowToYearEndGoal(val, validDatas.Step5.TeamFYFCActual);
                            /** @type {?} */
                            let TeamFYFCSmallValid = Number(validDatas.Step5.TeamFYFCActual) > Number(validDatas.Step5.TeamFYFC);
                            /** @type {?} */
                            let TeamFYFCNowToYearEndIsPositive = NumberUtils.isPositive(validDatas.Step5.TeamFYFCNowToYearEnd);
                            validDatas.Step5.TeamANP = this.goalSettingService.calculateANPFromFYFC(validDatas.Step5.TeamFYFC, validDatas.YearConfig.FyfcCovertAnpRate);
                            validDatas.Step5.TeamANPNowToYearEnd = this.goalSettingService.calculateANPFromFYFC(validDatas.Step5.TeamFYFCNowToYearEnd, validDatas.YearConfig.FyfcCovertAnpRate);
                            errorResult = this._setError(5, "TeamFYFC", "_small", TeamFYFCSmallValid, errorResult);
                            errorResult = this._setError(5, "TeamFYFCNowToYearEnd", "_required", !TeamFYFCNowToYearEndIsPositive, errorResult);
                            break;
                        case "TeamFYFCNowToYearEnd":
                            validDatas.Step5.TeamFYFC = this.goalSettingService.calculateAllYearGoal(val, validDatas.Step5.TeamFYFCActual);
                            errorResult = this.onChangeValid(1, "TeamFYFC", validDatas.Step5.TeamFYFC, validDatas, true, errorResult);
                            break;
                    }
                }
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00406', 'onChangeValid fail!' + error.message));
        }
        console.log('onChangeValid errorResult', errorResult);
        return errorResult;
    }
    /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @return {?}
     */
    pageValid(step, validDatas, isAdjust) {
        console.log('pageValid step', step, 'validDatas', JSON.stringify(validDatas), isAdjust);
        /** @type {?} */
        let errorResult = [];
        /** @type {?} */
        let steplist = [5, 4, 2, 1];
        try {
            steplist.forEach((/**
             * @param {?} stepNum
             * @return {?}
             */
            stepNum => {
                //判斷傳進來的步驟大於或等於驗證步驟才驗證
                if (step >= stepNum && validDatas["Step" + stepNum] != null && validDatas["Step" + stepNum] != undefined) {
                    errorResult = this.unitPageValid(stepNum, validDatas, isAdjust, errorResult);
                }
            }));
        }
        catch (error) {
            this.errorHandler.handleError(new APPError('F00407', 'pageValid fail!' + error.message));
        }
        return errorResult;
    }
    /**
     * @param {?} step
     * @param {?} validDatas
     * @param {?} isAdjust
     * @param {?} errorResult
     * @return {?}
     */
    unitPageValid(step, validDatas, isAdjust, errorResult) {
        /** @type {?} */
        let stepColMap = new Map();
        /** @type {?} */
        let step1Cols = ["FYFC", "AnnualConvention", "MDRT", "PromotionPlan"];
        /** @type {?} */
        let step2Cols = ["PerCase"];
        /** @type {?} */
        let step5Cols = ["TeamFYFC", "TeamANP", "Manpower", "Recruitment"];
        stepColMap.set(1, step1Cols);
        stepColMap.set(2, step2Cols);
        stepColMap.set(5, step5Cols);
        if (step == 4) {
            //驗證第4步
            /** @type {?} */
            let monthList = validDatas.Step4.MonthList;
            /** @type {?} */
            let performanceSettlementMonth = validDatas.YearConfig.PerformanceSettlementMonth;
            monthList.filter((/**
             * @param {?} obj
             * @return {?}
             */
            obj => obj.Month > performanceSettlementMonth)).forEach((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                errorResult = this.onChangeValid(4, "Plan_" + x.Month, x.Plan, validDatas, false, errorResult, true);
            }));
            errorResult = this._validShortfall(validDatas.Step4, errorResult);
        }
        else {
            //其他步驟驗證
            if (isAdjust) {
                step5Cols.push("TeamFYFCNowToYearEnd");
                step1Cols.push("FYFCNowToYearEnd");
            }
            /** @type {?} */
            let stepCols = stepColMap.get(step);
            stepCols.forEach((/**
             * @param {?} col
             * @return {?}
             */
            col => {
                errorResult = this.onChangeValid(step, col, validDatas["Step" + step][col], validDatas, isAdjust, errorResult, true);
            }));
        }
        return errorResult;
    }
    /**
     * @private
     * @param {?} step
     * @param {?} colId
     * @param {?} errorType
     * @param {?} validresult
     * @param {?} errorResult
     * @param {?=} errorMsg
     * @return {?}
     */
    _setError(step, colId, errorType, validresult, errorResult, errorMsg = '') {
        console.log('step', step, 'colId', colId, 'errorType', errorType, 'validresult', validresult, 'errorResult', errorResult);
        errorMsg = StringUtils.isEmpty(errorMsg) ? colId + errorType : errorMsg;
        errorResult = errorResult.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => (x.ColId != colId || (x.ColId == colId && x.Msg.indexOf(errorMsg))))); //等於colId && 等於errortype 的先拿掉
        if (validresult) {
            errorResult.push(new ValidError(step, colId, errorMsg));
        }
        console.log('errorResult', errorResult);
        return errorResult;
    }
    /**
     * @private
     * @param {?} setp4Obj
     * @param {?} errorResult
     * @return {?}
     */
    _validShortfall(setp4Obj, errorResult) {
        //驗證Shortfall
        if (this.goalSettingStep) {
            /** @type {?} */
            let validresult = this.goalSettingStep.validateGoal_Forecast(Number(setp4Obj.Shortfall));
            errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
        }
        else {
            /** @type {?} */
            let validresult = Number(setp4Obj.Shortfall) != 0;
            errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
        }
        return errorResult;
    }
}
GoalValidService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
GoalValidService.ctorParameters = () => [
    { type: ErrorHandler },
    { type: GoalSettingService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalSettingStepToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [goalValidToken,] }] }
];
/** @nocollapse */ GoalValidService.ngInjectableDef = defineInjectable({ factory: function GoalValidService_Factory() { return new GoalValidService(inject(ErrorHandler), inject(GoalSettingService), inject(goalSettingStepToken, 8), inject(goalValidToken, 8)); }, token: GoalValidService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AgencyPlanStoreService {
    constructor() {
        this._agencyState = new AgencyPlanStatus(AGENCY_STATE.DISPLAY, null);
        this._stateBehaviorSubject = new BehaviorSubject(this._agencyState);
        this._detailBehaviorSubject = new BehaviorSubject(this._agencyDetail);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this._agencyState = state;
        this._stateBehaviorSubject.next(this._agencyState);
    }
    ;
    /**
     * @return {?}
     */
    getState() {
        return this._stateBehaviorSubject;
    }
    ;
    // setCurrentAgencyDetail(detail: any): void {
    //   console.log("setCurrentAgencyDetail detail:",detail);
    //   this._agencyDetail = detail;
    //   this._detailBehaviorSubject.next(this._agencyDetail);
    // };
    /**
     * @param {?} agentInfo
     * @return {?}
     */
    setCurrentAgencyDetail(agentInfo) {
        console.log("setCurrentAgencyDetail agentInfo:", agentInfo);
        this._agencyDetail = agentInfo;
        this._detailBehaviorSubject.next(this._agencyDetail);
    }
    ;
    /**
     * @return {?}
     */
    getCurrentAgencyDetail() {
        return this._detailBehaviorSubject;
    }
    ;
}
AgencyPlanStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AgencyPlanStoreService.ctorParameters = () => [];
/** @nocollapse */ AgencyPlanStoreService.ngInjectableDef = defineInjectable({ factory: function AgencyPlanStoreService_Factory() { return new AgencyPlanStoreService(); }, token: AgencyPlanStoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalTitleListItem {
    /**
     * @param {?} title
     * @param {?} desc
     */
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }
    /**
     * @return {?}
     */
    getTitle() {
        return this.title;
    }
    /**
     * @param {?} title
     * @return {?}
     */
    setTitle(title) {
        this.title = title;
    }
    /**
     * @return {?}
     */
    getDesc() {
        return this.desc;
    }
    /**
     * @param {?} desc
     * @return {?}
     */
    setDesc(desc) {
        this.desc = desc;
    }
} // end class GoalTitleListItem

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoalSettingUtilService {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
    }
    /**
     * @param {?} activity
     * @return {?}
     */
    getStep3TabOptionList(activity) {
        /** @type {?} */
        let daily = DWM_DATETYPE.DAILY;
        /** @type {?} */
        let weekly = DWM_DATETYPE.WEEKLY;
        /** @type {?} */
        let monthly = DWM_DATETYPE.MONTHLY;
        /** @type {?} */
        let tabOptionList = [];
        switch (activity) {
            case 'Day':
                tabOptionList = [daily, weekly, monthly];
                break;
            case 'Week':
                tabOptionList = [weekly, monthly];
                break;
            case 'Month':
                tabOptionList = [monthly];
                break;
            default:
                break;
        }
        return tabOptionList;
    }
    /**
     * @param {?} step5Data
     * @param {?} agencyPlanData
     * @return {?}
     */
    transformTeamStep5Data(step5Data, agencyPlanData) {
        /** @type {?} */
        let step5ItemList = [
            new GoalTitleListItem(this.translateService.translate('FYFC_Goal'), step5Data.TeamFYFC),
            new GoalTitleListItem(this.translateService.translate('ANP_Goal'), step5Data.TeamANP),
            new GoalTitleListItem(this.translateService.translate('Manpower_Goal'), step5Data.Manpower),
            new GoalTitleListItem(this.translateService.translate('Recruitment_Goal'), step5Data.Recruitment)
        ];
        /** @type {?} */
        let agencyPlanItemList = [
            new GoalTitleListItem(this.translateService.translate('FYFC_Forecast'), agencyPlanData.FYFCForecast.toString()),
            new GoalTitleListItem(this.translateService.translate('ANP_Forecast'), agencyPlanData.ANPForecast.toString()),
            new GoalTitleListItem(this.translateService.translate('Manpower_Plan'), agencyPlanData.ManpowerPlan.toString()),
            new GoalTitleListItem(this.translateService.translate('Recruitment_Plan'), agencyPlanData.RecruitmentPlan.toString())
        ];
        /** @type {?} */
        let itemTextIsRedList = Array(step5ItemList.length).fill(false).map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        (value, index) => {
            if (isNaN(Number(agencyPlanItemList[index].getDesc()))) {
                return false;
            }
            else {
                return (Number(step5ItemList[index].getDesc()) > Number(agencyPlanItemList[index].getDesc()));
            }
        }));
        return new CombineStep5AndAgecyPlanData(step5ItemList, agencyPlanItemList, itemTextIsRedList);
    }
    /**
     * @param {?} currentType
     * @param {?} goalSettingStep3
     * @return {?}
     */
    getTabChangeStep3(currentType, goalSettingStep3) {
        /** @type {?} */
        let activityValue;
        /** @type {?} */
        let unit;
        if (currentType == DWM_DATETYPE.DAILY) {
            activityValue = goalSettingStep3.ActivityValues.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.TimeBase == TIMEBASE.DAY))[0];
            unit = 'Goal_Setting_Day';
        }
        else if (currentType == DWM_DATETYPE.WEEKLY) {
            activityValue = goalSettingStep3.ActivityValues.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.TimeBase == TIMEBASE.WEEK))[0];
            unit = 'Goal_Setting_Week';
        }
        else if (currentType == DWM_DATETYPE.MONTHLY) {
            activityValue = goalSettingStep3.ActivityValues.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.TimeBase == TIMEBASE.MONTH))[0];
            unit = 'Goal_Setting_Month';
        }
        return new GoalSettingStep3ForTabChange(activityValue, unit);
    }
    /**
     * @param {?} stepData
     * @return {?}
     */
    translateByStepData(stepData) {
        return this.translateByYearConfigAndGoaslStatus(stepData.YearConfig, stepData.GoalStatus);
    }
    /**
     * @param {?} yearConfig
     * @param {?} goalStatus
     * @return {?}
     */
    translateByYearConfigAndGoaslStatus(yearConfig, goalStatus) {
        /** @type {?} */
        let variable = this._getTranslateVariable(yearConfig, goalStatus);
        /** @type {?} */
        let translateOnject = new GoalSettingTranslate();
        translateOnject.TeamGoalEffectiveMonthTitle = this.translateService.translateWithVariable('Goal_Effective_Month', { "effectiveMonthWithUnit": this.translateService.translate('Month_' + goalStatus.TeamGoalApplicableYM) });
        translateOnject.PersonalGoalEffectiveMonthTitle = this.translateService.translateWithVariable('Goal_Effective_Month', variable);
        translateOnject.NowToYearEndTitle = this.translateService.translateWithVariable('Now_To_Year_End', variable);
        translateOnject.FYFCNowToYearEndTitle = this.translateService.translateWithVariable('FYFC_Now_To_Year_End', variable);
        translateOnject.ANPNowToYearEndTitle = this.translateService.translateWithVariable('ANP_Now_To_Year_End', variable);
        if (this._isHasEffectiveMonthAndSettlementMonth(variable.effectiveMonth, variable.settlementMonth)) {
            translateOnject.PersonalFYFCActualVariableTitle = this.translateService.translateWithVariable('FYFC_Actual_Variable', variable);
        }
        else {
            translateOnject.PersonalFYFCActualVariableTitle = this.translateService.translate('FYFC_Actual_Dash');
        }
        if (this._isHasEffectiveMonthAndSettlementMonth(goalStatus.TeamGoalApplicableYM, yearConfig.PerformanceSettlementMonth)) {
            translateOnject.TeamFYFCActualVariableTitle = this.translateService.translateWithVariable('FYFC_Actual_Variable', { "effectiveMonth": goalStatus.TeamGoalApplicableYM, "settlementMonth": yearConfig.PerformanceSettlementMonth });
            translateOnject.TeamANPActualVariableTitle = this.translateService.translateWithVariable('ANP_Actual_Variable', { "effectiveMonth": goalStatus.TeamGoalApplicableYM, "settlementMonth": yearConfig.PerformanceSettlementMonth });
        }
        else {
            translateOnject.TeamFYFCActualVariableTitle = this.translateService.translate('FYFC_Actual_Dash');
            translateOnject.TeamANPActualVariableTitle = this.translateService.translate('ANP_Actual_Dash');
        }
        return translateOnject;
    }
    /**
     * @private
     * @param {?} yearConfig
     * @param {?} goalStatus
     * @return {?}
     */
    _getTranslateVariable(yearConfig, goalStatus) {
        return {
            //Goal_Effective_Month
            "effectiveMonthWithUnit": this.translateService.translate('Month_' + goalStatus.PersonnelGoalApplicableYM),
            //end of Goal_Effective_Month
            //Now_To_Year_End
            "workingMonth": yearConfig.WorkingMonth == 0 ? 1 : yearConfig.WorkingMonth,
            "theLastMonth": yearConfig.MonthQuantityOfYear,
            //end of Now_To_Year_End
            //FYFC_Actual_Variable
            "effectiveMonth": goalStatus.PersonnelGoalApplicableYM,
            "settlementMonth": yearConfig.PerformanceSettlementMonth,
        };
    }
    /**
     * @private
     * @param {?} effectiveMonth
     * @param {?} settlementMonth
     * @return {?}
     */
    _isHasEffectiveMonthAndSettlementMonth(effectiveMonth, settlementMonth) {
        /** @type {?} */
        let _isNotEmpty = StringUtils.isNotEmpty(effectiveMonth) && StringUtils.isNotEmpty(settlementMonth);
        /** @type {?} */
        let _isNumber = !isNaN(Number(effectiveMonth)) && !isNaN(Number(settlementMonth));
        /** @type {?} */
        let _isGreaterThanZero = Number(effectiveMonth) > 0 && Number(settlementMonth) > 0;
        return _isNotEmpty && _isNumber && _isGreaterThanZero;
    }
}
GoalSettingUtilService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GoalSettingUtilService.ctorParameters = () => [
    { type: TranslateService }
];
/** @nocollapse */ GoalSettingUtilService.ngInjectableDef = defineInjectable({ factory: function GoalSettingUtilService_Factory() { return new GoalSettingUtilService(inject(TranslateService)); }, token: GoalSettingUtilService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { goalSettingStepToken, goalValidToken, goalSettingShowRuleToken, GoalSubmitExtensionToken, GoalModule, GoalSettingGetGoalSettingAPI, GoalSettingGetYearConfigAPI, AgencyPlanGetMainAPI, AgencyPlanGetDetailAPI, GoalSettingGetExpectedAPI, GoalSettingGetValueAPI, GoalSettingSetExpectedAPI, GoalSettingGetPlanAPI, GoalSettingGetActualAPI, DWM_DATETYPE, GOALSETTINGSTEP, GOALSETTINGSETMODE, ROLE, APPROVESTATUS, APITYPE, ValidationState, PlanFYFCPopupInfo, GoalSettingStep1, GoalSettingStep2, GoalSettingStep3, GoalSettingStep4, GoalSettingStep5, GoalSettingYearConfig, ActivityValue, GoalSettingStepData, GoalSettingGoalStatus, IsApproveInfo, MonthlyPlanFYFCData, AgencyPlanAgentInfo, AgencyPlanDetail, AgencyPlanGoalExpected, GoalSettingPlanPopup, AgencyPlanDirectUnitDetail, AgencyPlanMainData, AgencyPlanDataForOverview, SettingChangeEvent, GoalSettingTranslate, CombineStep5AndAgecyPlanData, GoalSettingStep3ForTabChange, ValidError, ApproveInfo, GoalSettingStepDataParams, AGENCY_STATE, AgencyPlanStatus, AgencyPlanMainInfo, GoalSettingService, GoalValidService, GoalStoreService, GoalPopupResponse, GOAL_LANDING_STATUS, PLAN_FYFC_POPUP_STATE, SYNC_STATUS, AgencyPlanStoreService, GoalSettingUtilService, GoalTitleListItem };

//# sourceMappingURL=allianzSND-goal.js.map