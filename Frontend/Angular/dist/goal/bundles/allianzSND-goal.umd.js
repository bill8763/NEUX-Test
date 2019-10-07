(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@allianzSND/ui'), require('uuid'), require('rxjs'), require('@angular/core'), require('@allianzSND/core')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/goal', ['exports', '@angular/common', '@allianzSND/ui', 'uuid', 'rxjs', '@angular/core', '@allianzSND/core'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.goal = {}),global.ng.common,global.ui,global.uuid,global.rxjs,global.ng.core,global.i1));
}(this, (function (exports,common,ui,uuid,rxjs,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var goalSettingStepToken = new i0.InjectionToken('goalSettingStep');
    /** @type {?} */
    var goalValidToken = new i0.InjectionToken('GoalValidExtension');
    /** @type {?} */
    var goalSettingShowRuleToken = new i0.InjectionToken('goalSettingShowRule');
    /** @type {?} */
    var GoalSubmitExtensionToken = new i0.InjectionToken("GoalSubmitExtension");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalModule = /** @class */ (function () {
        function GoalModule() {
        }
        GoalModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1.CoreModule,
                            ui.UIModule
                        ],
                        declarations: [],
                        exports: []
                    },] }
        ];
        return GoalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingGetGoalSettingAPI = /** @class */ (function () {
        function GoalSettingGetGoalSettingAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._dataYear = -1;
        }
        /**
         * @param {?} dataYear
         * @return {?}
         */
        GoalSettingGetGoalSettingAPI.prototype.setDataYear = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                this._dataYear = dataYear;
            };
        /**
         * @return {?}
         */
        GoalSettingGetGoalSettingAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getGoalSettingGoalSetting';
            };
        /**
         * @return {?}
         */
        GoalSettingGetGoalSettingAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        GoalSettingGetGoalSettingAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log("queryByTable: getGoalSettingGoalSetting this._dataYear:", this._dataYear);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        /** @type {?} */
                        var goalSettingObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting");
                        if (goalSettingObj) {
                            if (_this._dataYear != -1) {
                                goalSettingObj.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                            }
                            dao = new i1.ClientCustomDao(dao);
                            dao.queryByTable(goalSettingObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
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
            };
        return GoalSettingGetGoalSettingAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingGetYearConfigAPI = /** @class */ (function () {
        function GoalSettingGetYearConfigAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._dataYear = -1;
        }
        /**
         * @param {?} dataYear
         * @return {?}
         */
        GoalSettingGetYearConfigAPI.prototype.setDataYear = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                this._dataYear = dataYear;
            };
        /**
         * @return {?}
         */
        GoalSettingGetYearConfigAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getGoalSettingYearConfig';
            };
        /**
         * @return {?}
         */
        GoalSettingGetYearConfigAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        GoalSettingGetYearConfigAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        /** @type {?} */
                        var yearConfigObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Year_Config");
                        if (yearConfigObj) {
                            if (_this._dataYear != -1) {
                                yearConfigObj.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                            }
                            yearConfigObj.addRestriction(new i1.OrderByRestriction([{ column: 'DataYear', order: 'ASC' }]));
                            dao = new i1.ClientCustomDao(dao);
                            dao.queryByTable(yearConfigObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
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
            };
        return GoalSettingGetYearConfigAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanGetMainAPI = /** @class */ (function () {
        function AgencyPlanGetMainAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} dataYear
         * @return {?}
         */
        AgencyPlanGetMainAPI.prototype.setDataYear = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                this._dataYear = dataYear;
            };
        /**
         * @return {?}
         */
        AgencyPlanGetMainAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return "getAgencyPlanMain";
            };
        /**
         * @return {?}
         */
        AgencyPlanGetMainAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return "./assets/mock/getAgencyPlanMainMock.json";
            };
        /**
         * @return {?}
         */
        AgencyPlanGetMainAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log("dataYear", this._dataYear);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var agencyMainObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Agency_Plan_Main");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (agencyMainObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        agencyMainObj.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                        dao.queryByTable(agencyMainObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
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
            };
        return AgencyPlanGetMainAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanGetDetailAPI = /** @class */ (function () {
        function AgencyPlanGetDetailAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} dataYear
         * @return {?}
         */
        AgencyPlanGetDetailAPI.prototype.setDataYear = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                this._dataYear = dataYear;
            };
        /**
         * @return {?}
         */
        AgencyPlanGetDetailAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return "getAgencyPlanDetail";
            };
        /**
         * @return {?}
         */
        AgencyPlanGetDetailAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return "./assets/mock/getAgencyPlanDetail.json";
            };
        /**
         * @return {?}
         */
        AgencyPlanGetDetailAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var agencyDetailObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Agency_Detail_Data");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (agencyDetailObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        agencyDetailObj.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                        dao.queryByTable(agencyDetailObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
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
            };
        return AgencyPlanGetDetailAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingGetExpectedAPI = /** @class */ (function () {
        function GoalSettingGetExpectedAPI(daoFactory) {
            this.daoFactory = daoFactory;
        }
        /**
         * @param {?} dataYear
         * @return {?}
         */
        GoalSettingGetExpectedAPI.prototype.setDataYear = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                this._dataYear = dataYear;
            };
        /**
         * @return {?}
         */
        GoalSettingGetExpectedAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return "getGoalSettingExpected";
            };
        /**
         * @return {?}
         */
        GoalSettingGetExpectedAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return "./assets/mock/getGoalSettingExpected.json";
            };
        /**
         * @return {?}
         */
        GoalSettingGetExpectedAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var goalExpectedObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Expected");
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (goalExpectedObj != undefined && dao != undefined) {
                        dao = new i1.ClientCustomDao(dao);
                        goalExpectedObj.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                        dao.queryByTable(goalExpectedObj).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
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
            };
        return GoalSettingGetExpectedAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingGetValueAPI = /** @class */ (function () {
        function GoalSettingGetValueAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._dataYear = -1;
        }
        /**
         * @param {?} dataYear
         * @return {?}
         */
        GoalSettingGetValueAPI.prototype.setDataYear = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                this._dataYear = dataYear;
            };
        /**
         * @return {?}
         */
        GoalSettingGetValueAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getGoalSettingValue';
            };
        /**
         * @return {?}
         */
        GoalSettingGetValueAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        GoalSettingGetValueAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /*
                    "FYFC": 200,
                    "FYFC_Actual": 30,
                    "FYFC_Now_To_Year_End": 170,
                    "Manpower": 70,
                    "Recruitment": 40
                 */
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    console.log("queryByTable: goalSettingValue this._dataYear:", _this._dataYear);
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        /** @type {?} */
                        var goalSettingValue = _this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Value");
                        if (goalSettingValue) {
                            dao = new i1.ClientCustomDao(dao);
                            if (_this._dataYear != -1) {
                                goalSettingValue.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                            }
                            //todo!
                            dao.queryByTable(goalSettingValue).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
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
            };
        return GoalSettingGetValueAPI;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingSetExpectedAPI = /** @class */ (function () {
        function GoalSettingSetExpectedAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._expectedRecruitment = {};
            this._indirectRecruitment = 0;
        }
        /**
         * @param {?} expectedRecruitment
         * @return {?}
         */
        GoalSettingSetExpectedAPI.prototype.setExpectedRecruitment = /**
         * @param {?} expectedRecruitment
         * @return {?}
         */
            function (expectedRecruitment) {
                this._expectedRecruitment = expectedRecruitment;
            };
        /**
         * @param {?} indirectRecruitment
         * @return {?}
         */
        GoalSettingSetExpectedAPI.prototype.setIndirectRecruitment = /**
         * @param {?} indirectRecruitment
         * @return {?}
         */
            function (indirectRecruitment) {
                this._indirectRecruitment = indirectRecruitment;
            };
        /**
         * @return {?}
         */
        GoalSettingSetExpectedAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return "setGoalSettingExpected";
            };
        /**
         * @return {?}
         */
        GoalSettingSetExpectedAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return "./assets/mock/saveSuccess.json";
            };
        /**
         * @return {?}
         */
        GoalSettingSetExpectedAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var goalExpectedObj, goalExpectedExtObj, agencyMainObj, dao, goalExpectedResp, clientID;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    goalExpectedObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected");
                                    goalExpectedExtObj = this.daoFactory.getDefaultTable("TW_LH_SD_Goal_Setting_Expected_Extension");
                                    agencyMainObj = this.daoFactory.getDefaultTable("TW_LH_SD_Agency_Plan_Main");
                                    dao = this.daoFactory.getDefaultDao();
                                    if (!(goalExpectedObj != undefined && agencyMainObj != undefined && dao != undefined))
                                        return [3 /*break*/, 2];
                                    dao = new i1.ClientCustomDao(dao);
                                    agencyMainObj.addRestriction(new i1.EqualRestriction('DataYear', [this._expectedRecruitment['DataYear']]));
                                    agencyMainObj.addRestriction(new i1.EqualRestriction('DataType', ['Recruitment']));
                                    agencyMainObj.setValue('MonthPlan', [this._expectedRecruitment['RecruitmentTotal'] + this._indirectRecruitment]);
                                    goalExpectedObj.setValue('Q1', this._expectedRecruitment['Q1']);
                                    goalExpectedObj.setValue('Q2', this._expectedRecruitment['Q2']);
                                    goalExpectedObj.setValue('Q3', this._expectedRecruitment['Q3']);
                                    goalExpectedObj.setValue('Q4', this._expectedRecruitment['Q4']);
                                    goalExpectedObj.setValue('FYFC', this._expectedRecruitment['FYFC']);
                                    goalExpectedObj.setValue('ANP', this._expectedRecruitment['ANP']);
                                    goalExpectedObj.setValue('DataYear', this._expectedRecruitment['DataYear']);
                                    goalExpectedObj.addRestriction(new i1.EqualRestriction('DataYear', [this._expectedRecruitment['DataYear']]));
                                    return [4 /*yield*/, dao.queryByTable(goalExpectedObj).toPromise()];
                                case 1:
                                    goalExpectedResp = _a.sent();
                                    console.log('dataYear: ', this._expectedRecruitment['DataYear'], ' goalExpectedResp:', goalExpectedResp);
                                    if (goalExpectedResp.Body.length > 0) {
                                        //sqlite has data;
                                        dao.transactionUpdate(goalExpectedObj);
                                    }
                                    else {
                                        //sqlite not has data;
                                        clientID = uuid.v4();
                                        goalExpectedObj.setValue('ClientID', clientID);
                                        goalExpectedExtObj.setValue('ClientID', clientID);
                                        dao.transactionInsert(goalExpectedObj);
                                        dao.transactionInsert(goalExpectedExtObj);
                                    }
                                    // dao.transactionUpdate(goalExpectedObj);
                                    dao.transactionUpdate(agencyMainObj);
                                    dao.runTransaction().subscribe(( /**
                                     * @param {?} resp
                                     * @return {?}
                                     */function (resp) {
                                        observer.next(resp);
                                        observer.complete();
                                    }));
                                    return [3 /*break*/, 3];
                                case 2:
                                    observer.next(false);
                                    observer.complete();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                }));
            };
        return GoalSettingSetExpectedAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingGetPlanAPI = /** @class */ (function () {
        function GoalSettingGetPlanAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._dataYear = -1;
        }
        /**
         * @param {?} year
         * @return {?}
         */
        GoalSettingGetPlanAPI.prototype.setDataYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this._dataYear = year;
            };
        /**
         * @return {?}
         */
        GoalSettingGetPlanAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getGoalSettingPlan';
            };
        /**
         * @return {?}
         */
        GoalSettingGetPlanAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        GoalSettingGetPlanAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        /** @type {?} */
                        var goalSettingObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Plan_Value");
                        if (goalSettingObj) {
                            if (_this._dataYear != -1) {
                                goalSettingObj.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                            }
                            dao = new i1.ClientCustomDao(dao);
                            dao.queryByTable(goalSettingObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
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
            };
        return GoalSettingGetPlanAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingGetActualAPI = /** @class */ (function () {
        function GoalSettingGetActualAPI(daoFactory) {
            this.daoFactory = daoFactory;
            this._dataYear = -1;
        }
        /**
         * @param {?} year
         * @return {?}
         */
        GoalSettingGetActualAPI.prototype.setDataYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this._dataYear = year;
            };
        /**
         * @return {?}
         */
        GoalSettingGetActualAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getGoalSettingActualValue';
            };
        /**
         * @return {?}
         */
        GoalSettingGetActualAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        GoalSettingGetActualAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var dao = _this.daoFactory.getDefaultDao();
                    if (dao != undefined) {
                        /** @type {?} */
                        var goalSettingObj = _this.daoFactory.getDefaultTable("TW_LH_SD_VW_Actual_Value");
                        if (goalSettingObj) {
                            if (_this._dataYear != -1) {
                                goalSettingObj.addRestriction(new i1.EqualRestriction('DataYear', [_this._dataYear]));
                            }
                            dao = new i1.ClientCustomDao(dao);
                            dao.queryByTable(goalSettingObj).subscribe(( /**
                             * @param {?} resp
                             * @return {?}
                             */function (resp) {
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
            };
        return GoalSettingGetActualAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DWM_DATETYPE = {
        DAILY: 'Daily',
        WEEKLY: 'Weekly',
        MONTHLY: 'Monthly',
    };
    /** @enum {number} */
    var GOALSETTINGSTEP = {
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
    var GOALSETTINGSETMODE = {
        SET_NEXT_YESR: 0,
        ADGUST_GOAL: 1,
    };
    GOALSETTINGSETMODE[GOALSETTINGSETMODE.SET_NEXT_YESR] = 'SET_NEXT_YESR';
    GOALSETTINGSETMODE[GOALSETTINGSETMODE.ADGUST_GOAL] = 'ADGUST_GOAL';
    /** @enum {string} */
    var ROLE = {
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
    var APPROVESTATUS = {
        PENDING: 'P',
        WAINTING: 'W',
        NONE: 'N',
        APPROVE: 'A',
    };
    /** @enum {string} */
    var APITYPE = {
        SQLITE: 'SQLITE',
        RESTFUL: 'RESTFUL',
        MOCK: 'MOCK',
    };
    var ValidationState = /** @class */ (function () {
        function ValidationState() {
        }
        Object.defineProperty(ValidationState.prototype, "step", {
            get: /**
             * @return {?}
             */ function () {
                return this._step;
            },
            set: /**
             * @param {?} step
             * @return {?}
             */ function (step) {
                this._step = step;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValidationState.prototype, "isDataLegal", {
            get: /**
             * @return {?}
             */ function () {
                return this._isDataLegal;
            },
            set: /**
             * @param {?} isDataLegal
             * @return {?}
             */ function (isDataLegal) {
                this._isDataLegal = isDataLegal;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ValidationState.prototype, "_step", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], ValidationState.prototype, "_isDataLegal", void 0);
        ValidationState = __decorate([
            i1.Bean('ValidationState'),
            __metadata("design:paramtypes", [])
        ], ValidationState);
        return ValidationState;
    }());
    var PlanFYFCPopupInfo = /** @class */ (function () {
        function PlanFYFCPopupInfo(state, data) {
            this._state = state;
            this._data = data;
        }
        Object.defineProperty(PlanFYFCPopupInfo.prototype, "state", {
            get: /**
             * @return {?}
             */ function () {
                return this._state;
            },
            set: /**
             * @param {?} state
             * @return {?}
             */ function (state) {
                this._state = state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlanFYFCPopupInfo.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
                this._data = data;
            },
            enumerable: true,
            configurable: true
        });
        return PlanFYFCPopupInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStep1 = /** @class */ (function () {
        function GoalSettingStep1() {
        }
        Object.defineProperty(GoalSettingStep1.prototype, "FYFC", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFC;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FYFC = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep1.prototype, "AnnualConvention", {
            get: /**
             * @return {?}
             */ function () {
                return this._AnnualConvention;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AnnualConvention = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep1.prototype, "MDRT", {
            get: /**
             * @return {?}
             */ function () {
                return this._MDRT;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._MDRT = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep1.prototype, "PromotionPlan", {
            get: /**
             * @return {?}
             */ function () {
                return this._PromotionPlan;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PromotionPlan = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep1.prototype, "Actual", {
            get: /**
             * @return {?}
             */ function () {
                return this._Actual;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Actual = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep1.prototype, "FYFCNowToYearEnd", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFCNowToYearEnd;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FYFCNowToYearEnd = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep1.prototype, "ActivityFYFC", {
            get: /**
             * @return {?}
             */ function () {
                return this._ActivityFYFC;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ActivityFYFC = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep1.prototype, "ActivityDays", {
            get: /**
             * @return {?}
             */ function () {
                return this._ActivityDays;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ActivityDays = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep1.prototype, "_FYFC", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep1.prototype, "_AnnualConvention", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep1.prototype, "_MDRT", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep1.prototype, "_PromotionPlan", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep1.prototype, "_Actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep1.prototype, "_FYFCNowToYearEnd", void 0);
        GoalSettingStep1 = __decorate([
            i1.Bean('GoalSettingStep1'),
            __metadata("design:paramtypes", [])
        ], GoalSettingStep1);
        return GoalSettingStep1;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStep2 = /** @class */ (function () {
        function GoalSettingStep2() {
        }
        Object.defineProperty(GoalSettingStep2.prototype, "PerCase", {
            get: /**
             * @return {?}
             */ function () {
                return this._PerCase;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PerCase = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep2.prototype, "_PerCase", void 0);
        GoalSettingStep2 = __decorate([
            i1.Bean('GoalSettingStep2'),
            __metadata("design:paramtypes", [])
        ], GoalSettingStep2);
        return GoalSettingStep2;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStep3 = /** @class */ (function () {
        function GoalSettingStep3() {
            this._ActivityValues = [];
        }
        Object.defineProperty(GoalSettingStep3.prototype, "Activity", {
            get: /**
             * @return {?}
             */ function () {
                return this._Activity;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Activity = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep3.prototype, "ActivityValues", {
            get: /**
             * @return {?}
             */ function () {
                return this._ActivityValues;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ActivityValues = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], GoalSettingStep3.prototype, "_ActivityValues", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep3.prototype, "_Activity", void 0);
        GoalSettingStep3 = __decorate([
            i1.Bean('GoalSettingStep3'),
            __metadata("design:paramtypes", [])
        ], GoalSettingStep3);
        return GoalSettingStep3;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStep4 = /** @class */ (function () {
        function GoalSettingStep4() {
            this._MonthList = [];
        }
        GoalSettingStep4_1 = GoalSettingStep4;
        Object.defineProperty(GoalSettingStep4.prototype, "Forecast", {
            get: /**
             * @return {?}
             */ function () {
                return this._Forecast;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Forecast = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep4.prototype, "Shortfall", {
            get: /**
             * @return {?}
             */ function () {
                return this._Shortfall;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Shortfall = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep4.prototype, "Actual", {
            get: /**
             * @return {?}
             */ function () {
                return this._Actual;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Actual = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep4.prototype, "MonthList", {
            get: /**
             * @return {?}
             */ function () {
                return this._MonthList;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._MonthList = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GoalSettingStep4.prototype.clone = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var cloneGoalSettingStep4 = new GoalSettingStep4_1();
                cloneGoalSettingStep4.Forecast = this._Forecast;
                cloneGoalSettingStep4.Shortfall = this._Shortfall;
                cloneGoalSettingStep4.MonthList = this._MonthList.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.clone(); }));
                cloneGoalSettingStep4.Actual = this._Actual;
                return cloneGoalSettingStep4;
            };
        var GoalSettingStep4_1;
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep4.prototype, "_Forecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep4.prototype, "_Shortfall", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep4.prototype, "_Actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], GoalSettingStep4.prototype, "_MonthList", void 0);
        GoalSettingStep4 = GoalSettingStep4_1 = __decorate([
            i1.Bean('GoalSettingStep4'),
            __metadata("design:paramtypes", [])
        ], GoalSettingStep4);
        return GoalSettingStep4;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStep5 = /** @class */ (function () {
        function GoalSettingStep5() {
        }
        Object.defineProperty(GoalSettingStep5.prototype, "TeamFYFC", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamFYFC;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamFYFC = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep5.prototype, "TeamANP", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamANP;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamANP = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep5.prototype, "Manpower", {
            get: /**
             * @return {?}
             */ function () {
                return this._Manpower;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Manpower = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep5.prototype, "Recruitment", {
            get: /**
             * @return {?}
             */ function () {
                return this._Recruitment;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Recruitment = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep5.prototype, "TeamFYFCActual", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamFYFCActual;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamFYFCActual = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep5.prototype, "TeamANPActual", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamANPActual;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamANPActual = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep5.prototype, "TeamFYFCNowToYearEnd", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamFYFCNowToYearEnd;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamFYFCNowToYearEnd = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep5.prototype, "TeamANPNowToYearEnd", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamANPNowToYearEnd;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamANPNowToYearEnd = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_TeamFYFC", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_TeamANP", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_Manpower", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_Recruitment", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_TeamFYFCActual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_TeamANPActual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_TeamFYFCNowToYearEnd", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep5.prototype, "_TeamANPNowToYearEnd", void 0);
        GoalSettingStep5 = __decorate([
            i1.Bean('GoalSettingStep5'),
            __metadata("design:paramtypes", [])
        ], GoalSettingStep5);
        return GoalSettingStep5;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingYearConfig = /** @class */ (function () {
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
        function GoalSettingYearConfig() {
        }
        /**
         * @return {?}
         */
        GoalSettingYearConfig.prototype.getExtension = /**
         * @return {?}
         */
            function () {
                return this._Extension;
            };
        /**
         * @param {?} extension
         * @return {?}
         */
        GoalSettingYearConfig.prototype.setExtension = /**
         * @param {?} extension
         * @return {?}
         */
            function (extension) {
                this._Extension = extension;
            };
        Object.defineProperty(GoalSettingYearConfig.prototype, "IsCurrent", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsCurrent;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsCurrent = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DataYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "QuarterStartMonth", {
            get: /**
             * @return {?}
             */ function () {
                return this._QuarterStartMonth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._QuarterStartMonth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "QuarterEndMonth", {
            get: /**
             * @return {?}
             */ function () {
                return this._QuarterEndMonth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._QuarterEndMonth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "GoalSettingActivityProcMode", {
            get: /**
             * @return {?}
             */ function () {
                return this._GoalSettingActivityProcMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._GoalSettingActivityProcMode = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "GoalAndPlanDifferenceLimit", {
            get: /**
             * @return {?}
             */ function () {
                return this._GoalAndPlanDifferenceLimit;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._GoalAndPlanDifferenceLimit = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "PerformanceSettlementMonth", {
            get: /**
             * @return {?}
             */ function () {
                return this._PerformanceSettlementMonth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PerformanceSettlementMonth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "WorkingMonth", {
            get: /**
             * @return {?}
             */ function () {
                return this._WorkingMonth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._WorkingMonth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "WorkingQuarter", {
            get: /**
             * @return {?}
             */ function () {
                return this._WorkingQuarter;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._WorkingQuarter = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "MonthQuantityOfYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._MonthQuantityOfYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._MonthQuantityOfYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "FyfcCovertAnpRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._FyfcCovertAnpRate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FyfcCovertAnpRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "InforceConvertSubmitRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._InforceConvertSubmitRate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._InforceConvertSubmitRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "InforceConvertMeetRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._InforceConvertMeetRate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._InforceConvertMeetRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "InforceConvertScheduleRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._InforceConvertScheduleRate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._InforceConvertScheduleRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "InforceConvertFindRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._InforceConvertFindRate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._InforceConvertFindRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingYearConfig.prototype, "NowToYearEndDays", {
            get: /**
             * @return {?}
             */ function () {
                return this._NowToYearEndDays;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._NowToYearEndDays = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_GoalAndPlanDifferenceLimit", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_PerformanceSettlementMonth", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_WorkingMonth", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_MonthQuantityOfYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_InforceConvertSubmitRate", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_InforceConvertMeetRate", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_InforceConvertScheduleRate", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_InforceConvertFindRate", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingYearConfig.prototype, "_NowToYearEndDays", void 0);
        GoalSettingYearConfig = __decorate([
            i1.Bean('GoalSettingYearConfig'),
            __metadata("design:paramtypes", [])
        ], GoalSettingYearConfig);
        return GoalSettingYearConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActivityValue = /** @class */ (function () {
        function ActivityValue(TimeBase, Find, Schedule, Meet, Submit, Inforce) {
            this._TimeBase = TimeBase;
            this._Schedule = Schedule;
            this._Find = Find;
            this._Meet = Meet;
            this._Submit = Submit;
            this._Inforce = Inforce;
        }
        Object.defineProperty(ActivityValue.prototype, "TimeBase", {
            get: /**
             * @return {?}
             */ function () {
                return this._TimeBase;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivityValue.prototype, "Find", {
            get: /**
             * @return {?}
             */ function () {
                return this._Find;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivityValue.prototype, "Schedule", {
            get: /**
             * @return {?}
             */ function () {
                return this._Schedule;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivityValue.prototype, "Meet", {
            get: /**
             * @return {?}
             */ function () {
                return this._Meet;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivityValue.prototype, "Submit", {
            get: /**
             * @return {?}
             */ function () {
                return this._Submit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivityValue.prototype, "Inforce", {
            get: /**
             * @return {?}
             */ function () {
                return this._Inforce;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ActivityValue.prototype, "_TimeBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ActivityValue.prototype, "_Find", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ActivityValue.prototype, "_Schedule", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ActivityValue.prototype, "_Meet", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ActivityValue.prototype, "_Submit", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ActivityValue.prototype, "_Inforce", void 0);
        ActivityValue = __decorate([
            i1.Bean('ActivityValue'),
            __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
        ], ActivityValue);
        return ActivityValue;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingGoalStatus = /** @class */ (function () {
        function GoalSettingGoalStatus() {
        }
        /**
         * @return {?}
         */
        GoalSettingGoalStatus.prototype.getExtension = /**
         * @return {?}
         */
            function () {
                return this._Extension;
            };
        /**
         * @param {?} extension
         * @return {?}
         */
        GoalSettingGoalStatus.prototype.setExtension = /**
         * @param {?} extension
         * @return {?}
         */
            function (extension) {
                this._Extension = extension;
            };
        Object.defineProperty(GoalSettingGoalStatus.prototype, "PersonnelGoalApplicableYM", {
            get: /**
             * @return {?}
             */ function () {
                return this._PersonnelGoalApplicableYM;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PersonnelGoalApplicableYM = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "TeamGoalApplicableYM", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamGoalApplicableYM;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamGoalApplicableYM = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "GoalSetMonth", {
            get: /**
             * @return {?}
             */ function () {
                return this._GoalSetMonth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._GoalSetMonth = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "ApproveStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._ApproveStatus;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ApproveStatus = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "IsFirstTime", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsFirstTime;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsFirstTime = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "IsNeedSetting", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsNeedSetting;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsNeedSetting = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "RemainingDays", {
            get: /**
             * @return {?}
             */ function () {
                return this._RemainingDays;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._RemainingDays = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DataYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "IsCurrent", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsCurrent;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsCurrent = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingGoalStatus.prototype, "SupervisorComment", {
            get: /**
             * @return {?}
             */ function () {
                return this._SupervisorComment;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._SupervisorComment = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingGoalStatus.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingGoalStatus.prototype, "_PersonnelGoalApplicableYM", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingGoalStatus.prototype, "_TeamGoalApplicableYM", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingGoalStatus.prototype, "_GoalSetMonth", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingGoalStatus.prototype, "_ApproveStatus", void 0);
        GoalSettingGoalStatus = __decorate([
            i1.Bean('GoalSettingGoalStatus'),
            __metadata("design:paramtypes", [])
        ], GoalSettingGoalStatus);
        return GoalSettingGoalStatus;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStepData = /** @class */ (function () {
        function GoalSettingStepData(DataYear) {
            this._ActualList = [];
            this._DataYear = DataYear;
        }
        Object.defineProperty(GoalSettingStepData.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "YearConfig", {
            get: /**
             * @return {?}
             */ function () {
                return this._YearConfig;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._YearConfig = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "GoalStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._GoalStatus;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._GoalStatus = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "Step1", {
            get: /**
             * @return {?}
             */ function () {
                return this._Step1;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Step1 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "Step2", {
            get: /**
             * @return {?}
             */ function () {
                return this._Step2;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Step2 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "Step3", {
            get: /**
             * @return {?}
             */ function () {
                return this._Step3;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Step3 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "Step4", {
            get: /**
             * @return {?}
             */ function () {
                return this._Step4;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Step4 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "Step5", {
            get: /**
             * @return {?}
             */ function () {
                return this._Step5;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Step5 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "AgencyPlan", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgencyPlan;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AgencyPlan = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepData.prototype, "ActualList", {
            get: /**
             * @return {?}
             */ function () {
                return this._ActualList;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ActualList = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingStepData.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", GoalSettingYearConfig)
        ], GoalSettingStepData.prototype, "_YearConfig", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", GoalSettingGoalStatus)
        ], GoalSettingStepData.prototype, "_GoalStatus", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", GoalSettingStep4)
        ], GoalSettingStepData.prototype, "_Step4", void 0);
        GoalSettingStepData = __decorate([
            i1.Bean('GoalSettingStepData'),
            __metadata("design:paramtypes", [Object])
        ], GoalSettingStepData);
        return GoalSettingStepData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IsApproveInfo = /** @class */ (function () {
        function IsApproveInfo(IsNeedApprove, IsPopup) {
            this._IsNeedApprove = IsNeedApprove;
            this._IsPopup = IsPopup;
        }
        Object.defineProperty(IsApproveInfo.prototype, "IsNeedApprove", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsNeedApprove;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsNeedApprove = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IsApproveInfo.prototype, "IsPopup", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsPopup;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsPopup = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IsApproveInfo.prototype, "PopupType", {
            get: /**
             * @return {?}
             */ function () {
                return this._PopupType;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PopupType = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], IsApproveInfo.prototype, "_IsNeedApprove", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], IsApproveInfo.prototype, "_IsPopup", void 0);
        IsApproveInfo = __decorate([
            i1.Bean('IsApproveInfo'),
            __metadata("design:paramtypes", [Object, Object])
        ], IsApproveInfo);
        return IsApproveInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MonthlyPlanFYFCData = /** @class */ (function () {
        function MonthlyPlanFYFCData(Month, Plan, Actual) {
            this._Month = Month;
            this._Plan = Plan;
            this._Actual = Actual;
        }
        MonthlyPlanFYFCData_1 = MonthlyPlanFYFCData;
        Object.defineProperty(MonthlyPlanFYFCData.prototype, "Month", {
            get: /**
             * @return {?}
             */ function () {
                return this._Month;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MonthlyPlanFYFCData.prototype, "Actual", {
            get: /**
             * @return {?}
             */ function () {
                return this._Actual;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MonthlyPlanFYFCData.prototype, "Plan", {
            get: /**
             * @return {?}
             */ function () {
                return this._Plan;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Plan = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MonthlyPlanFYFCData.prototype.clone = /**
         * @return {?}
         */
            function () {
                return new MonthlyPlanFYFCData_1(this._Month, this._Plan, this._Actual);
            };
        var MonthlyPlanFYFCData_1;
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], MonthlyPlanFYFCData.prototype, "_Month", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], MonthlyPlanFYFCData.prototype, "_Plan", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], MonthlyPlanFYFCData.prototype, "_Actual", void 0);
        MonthlyPlanFYFCData = MonthlyPlanFYFCData_1 = __decorate([
            i1.Bean('MonthlyPlanFYFCData'),
            __metadata("design:paramtypes", [Number, String, String])
        ], MonthlyPlanFYFCData);
        return MonthlyPlanFYFCData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanAgentInfo = /** @class */ (function () {
        function AgencyPlanAgentInfo(AgentID, AgentName, DataYear, AppUseMode) {
            this._AgentID = AgentID;
            this._AgentName = AgentName;
            this._DataYear = DataYear;
            this._AppUseMode = AppUseMode;
        }
        Object.defineProperty(AgencyPlanAgentInfo.prototype, "AgentID", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgentID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanAgentInfo.prototype, "AgentName", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgentName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanAgentInfo.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanAgentInfo.prototype, "AppUseMode", {
            get: /**
             * @return {?}
             */ function () {
                return this._AppUseMode;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanAgentInfo.prototype, "_AgentID", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanAgentInfo.prototype, "_AgentName", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanAgentInfo.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanAgentInfo.prototype, "_AppUseMode", void 0);
        AgencyPlanAgentInfo = __decorate([
            i1.Bean('AgencyPlanAgentInfo'),
            __metadata("design:paramtypes", [String, String, Number, String])
        ], AgencyPlanAgentInfo);
        return AgencyPlanAgentInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanDetail = /** @class */ (function () {
        function AgencyPlanDetail() {
        }
        Object.defineProperty(AgencyPlanDetail.prototype, "AgentID", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgentID;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AgentID = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "AgentName", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgentName;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AgentName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DataYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "AppUseMode", {
            get: /**
             * @return {?}
             */ function () {
                return this._AppUseMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AppUseMode = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "JobGrade", {
            get: /**
             * @return {?}
             */ function () {
                return this._JobGrade;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._JobGrade = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "Actual", {
            get: /**
             * @return {?}
             */ function () {
                return this._Actual;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Actual = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "CaseCount", {
            get: /**
             * @return {?}
             */ function () {
                return this._CaseCount;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._CaseCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "ClientID", {
            get: /**
             * @return {?}
             */ function () {
                return this._ClientID;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ClientID = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "DataType", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataType;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DataType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "DirectUnitType", {
            get: /**
             * @return {?}
             */ function () {
                return this._DirectUnitType;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DirectUnitType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "Drilldown", {
            get: /**
             * @return {?}
             */ function () {
                return this._Drilldown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Drilldown = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "Forecast", {
            get: /**
             * @return {?}
             */ function () {
                return this._Forecast;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Forecast = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "Goal", {
            get: /**
             * @return {?}
             */ function () {
                return this._Goal;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Goal = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "IsApprove", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsApprove;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsApprove = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "Manpower", {
            get: /**
             * @return {?}
             */ function () {
                return this._Manpower;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Manpower = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "MonthPlan", {
            get: /**
             * @return {?}
             */ function () {
                return this._MonthPlan;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._MonthPlan = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "Orders", {
            get: /**
             * @return {?}
             */ function () {
                return this._Orders;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Orders = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "PerCase", {
            get: /**
             * @return {?}
             */ function () {
                return this._PerCase;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PerCase = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "Recruitment", {
            get: /**
             * @return {?}
             */ function () {
                return this._Recruitment;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Recruitment = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "IsHasDot", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsHasDot;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._IsHasDot = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDetail.prototype, "TextColor", {
            get: /**
             * @return {?}
             */ function () {
                return this._TextColor;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TextColor = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_AgentID", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_AgentName", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanDetail.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_AppUseMode", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_JobGrade", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_Actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_CaseCount", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_ClientID", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_DataType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_DirectUnitType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_Drilldown", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_Forecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_Goal", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_IsApprove", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanDetail.prototype, "_Manpower", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_MonthPlan", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanDetail.prototype, "_Orders", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_PerCase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanDetail.prototype, "_Recruitment", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], AgencyPlanDetail.prototype, "_IsHasDot", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDetail.prototype, "_TextColor", void 0);
        AgencyPlanDetail = __decorate([
            i1.Bean('AgencyPlanDetail'),
            __metadata("design:paramtypes", [])
        ], AgencyPlanDetail);
        return AgencyPlanDetail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanGoalExpected = /** @class */ (function () {
        function AgencyPlanGoalExpected(dataYear) {
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
        AgencyPlanGoalExpected_1 = AgencyPlanGoalExpected;
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "ANP", {
            get: /**
             * @return {?}
             */ function () {
                return this._ANP;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ANP = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "WorkingQuarter", {
            get: /**
             * @return {?}
             */ function () {
                return this._WorkingQuarter;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._WorkingQuarter = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "FYFC", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFC;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FYFC = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q1", {
            get: /**
             * @return {?}
             */ function () {
                return this._Q1;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Q1 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q2", {
            get: /**
             * @return {?}
             */ function () {
                return this._Q2;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Q2 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q3", {
            get: /**
             * @return {?}
             */ function () {
                return this._Q3;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Q3 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "Q4", {
            get: /**
             * @return {?}
             */ function () {
                return this._Q4;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Q4 = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "RecruitmentTotal", {
            get: /**
             * @return {?}
             */ function () {
                return this._RecruitmentTotal;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._RecruitmentTotal = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanGoalExpected.prototype, "FYFCConvertANPRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFCConvertANPRate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FYFCConvertANPRate = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AgencyPlanGoalExpected.prototype.clone = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var cloneAgencyPlanGoalExpected = new AgencyPlanGoalExpected_1(this._DataYear);
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
            };
        var AgencyPlanGoalExpected_1;
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanGoalExpected.prototype, "_ANP", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanGoalExpected.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanGoalExpected.prototype, "_WorkingQuarter", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanGoalExpected.prototype, "_FYFC", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanGoalExpected.prototype, "_Q1", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanGoalExpected.prototype, "_Q2", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanGoalExpected.prototype, "_Q3", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanGoalExpected.prototype, "_Q4", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanGoalExpected.prototype, "_RecruitmentTotal", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanGoalExpected.prototype, "_FYFCConvertANPRate", void 0);
        AgencyPlanGoalExpected = AgencyPlanGoalExpected_1 = __decorate([
            i1.Bean('AgencyPlanGoalExpected'),
            __metadata("design:paramtypes", [Number])
        ], AgencyPlanGoalExpected);
        return AgencyPlanGoalExpected;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingPlanPopup = /** @class */ (function () {
        function GoalSettingPlanPopup(FYFCgoal, actual, performanceMonthStart, performanceMonthEnd, monthPlanList) {
            this._eachMonthPlan = [];
            this._FYFCGoal = FYFCgoal;
            this._actual = actual;
            this._performanceMonthStart = performanceMonthStart;
            this._performanceMonthEnd = performanceMonthEnd;
            this._monthPlanList = monthPlanList;
        }
        GoalSettingPlanPopup_1 = GoalSettingPlanPopup;
        Object.defineProperty(GoalSettingPlanPopup.prototype, "FYFCGoal", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFCGoal;
            },
            set: /**
             * @param {?} FYFCgoal
             * @return {?}
             */ function (FYFCgoal) {
                this._FYFCGoal = FYFCgoal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingPlanPopup.prototype, "actual", {
            get: /**
             * @return {?}
             */ function () {
                return this._actual;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._actual = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingPlanPopup.prototype, "performanceMonthStart", {
            get: /**
             * @return {?}
             */ function () {
                return this._performanceMonthStart;
            },
            set: /**
             * @param {?} performanceMonthStart
             * @return {?}
             */ function (performanceMonthStart) {
                this._performanceMonthStart = performanceMonthStart;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingPlanPopup.prototype, "performanceMonthEnd", {
            get: /**
             * @return {?}
             */ function () {
                return this._performanceMonthEnd;
            },
            set: /**
             * @param {?} performanceMonthEnd
             * @return {?}
             */ function (performanceMonthEnd) {
                this._performanceMonthEnd = performanceMonthEnd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingPlanPopup.prototype, "monthPlanList", {
            get: /**
             * @return {?}
             */ function () {
                return this._monthPlanList;
            },
            set: /**
             * @param {?} monthPlanList
             * @return {?}
             */ function (monthPlanList) {
                this._monthPlanList = monthPlanList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingPlanPopup.prototype, "approveThreshold", {
            get: /**
             * @return {?}
             */ function () {
                return this._approveThreshold;
            },
            set: /**
             * @param {?} approveThreshold
             * @return {?}
             */ function (approveThreshold) {
                this._approveThreshold = approveThreshold;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingPlanPopup.prototype, "eachMonthPlan", {
            get: /**
             * @return {?}
             */ function () {
                return this._eachMonthPlan;
            },
            set: /**
             * @param {?} eachMonthPlan
             * @return {?}
             */ function (eachMonthPlan) {
                this._eachMonthPlan = eachMonthPlan;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GoalSettingPlanPopup.prototype.clone = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var cloneGoalSettingStep4 = new GoalSettingPlanPopup_1(this._FYFCGoal, this._actual, this._performanceMonthStart, this._performanceMonthEnd, this.monthPlanList.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.clone(); })));
                cloneGoalSettingStep4._eachMonthPlan = this.eachMonthPlan.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x; }));
                cloneGoalSettingStep4._approveThreshold = this._approveThreshold;
                return cloneGoalSettingStep4;
            };
        var GoalSettingPlanPopup_1;
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingPlanPopup.prototype, "_FYFCGoal", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingPlanPopup.prototype, "_actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingPlanPopup.prototype, "_performanceMonthStart", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingPlanPopup.prototype, "_performanceMonthEnd", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], GoalSettingPlanPopup.prototype, "_monthPlanList", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingPlanPopup.prototype, "_approveThreshold", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], GoalSettingPlanPopup.prototype, "_eachMonthPlan", void 0);
        GoalSettingPlanPopup = GoalSettingPlanPopup_1 = __decorate([
            i1.Bean('GoalSettingPlanPopup'),
            __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
        ], GoalSettingPlanPopup);
        return GoalSettingPlanPopup;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanDirectUnitDetail = /** @class */ (function () {
        function AgencyPlanDirectUnitDetail() {
            this._Manpower = '';
            this._Recruitment = 0;
        }
        Object.defineProperty(AgencyPlanDirectUnitDetail.prototype, "Manpower", {
            get: /**
             * @return {?}
             */ function () {
                return this._Manpower;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Manpower = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDirectUnitDetail.prototype, "Recruitment", {
            get: /**
             * @return {?}
             */ function () {
                return this._Recruitment;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Recruitment = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDirectUnitDetail.prototype, "_Manpower", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanDirectUnitDetail.prototype, "_Recruitment", void 0);
        AgencyPlanDirectUnitDetail = __decorate([
            i1.Bean('AgencyPlanDirectUnitDetail'),
            __metadata("design:paramtypes", [])
        ], AgencyPlanDirectUnitDetail);
        return AgencyPlanDirectUnitDetail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanMainData = /** @class */ (function () {
        function AgencyPlanMainData() {
        }
        Object.defineProperty(AgencyPlanMainData.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DataYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanMainData.prototype, "DataType", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataType;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DataType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanMainData.prototype, "Forecast", {
            get: /**
             * @return {?}
             */ function () {
                return this._Forecast;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Forecast = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanMainData.prototype, "Actual", {
            get: /**
             * @return {?}
             */ function () {
                return this._Actual;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._Actual = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanMainData.prototype, "MonthPlan", {
            get: /**
             * @return {?}
             */ function () {
                return this._MonthPlan;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._MonthPlan = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], AgencyPlanMainData.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanMainData.prototype, "_DataType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanMainData.prototype, "_Forecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanMainData.prototype, "_Actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanMainData.prototype, "_MonthPlan", void 0);
        AgencyPlanMainData = __decorate([
            i1.Bean('AgencyPlanMainData'),
            __metadata("design:paramtypes", [])
        ], AgencyPlanMainData);
        return AgencyPlanMainData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanDataForOverview = /** @class */ (function () {
        function AgencyPlanDataForOverview() {
        }
        Object.defineProperty(AgencyPlanDataForOverview.prototype, "FYFCForecast", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFCForecast;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FYFCForecast = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDataForOverview.prototype, "ANPForecast", {
            get: /**
             * @return {?}
             */ function () {
                return this._ANPForecast;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ANPForecast = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDataForOverview.prototype, "ManpowerPlan", {
            get: /**
             * @return {?}
             */ function () {
                return this._ManpowerPlan;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ManpowerPlan = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDataForOverview.prototype, "RecruitmentPlan", {
            get: /**
             * @return {?}
             */ function () {
                return this._RecruitmentPlan;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._RecruitmentPlan = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanDataForOverview.prototype, "CompletionRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._CompletionRate;
            },
            set: /**
             * @param {?} CompletionRate
             * @return {?}
             */ function (CompletionRate) {
                this._CompletionRate = CompletionRate;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDataForOverview.prototype, "_FYFCForecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDataForOverview.prototype, "_ANPForecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDataForOverview.prototype, "_ManpowerPlan", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDataForOverview.prototype, "_RecruitmentPlan", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanDataForOverview.prototype, "_CompletionRate", void 0);
        AgencyPlanDataForOverview = __decorate([
            i1.Bean('AgencyPlanDataForOverview'),
            __metadata("design:paramtypes", [])
        ], AgencyPlanDataForOverview);
        return AgencyPlanDataForOverview;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingChangeEvent = /** @class */ (function () {
        function SettingChangeEvent(step, column, value) {
            this._step = step;
            this._column = column;
            this._value = value;
        }
        Object.defineProperty(SettingChangeEvent.prototype, "step", {
            get: /**
             * @return {?}
             */ function () {
                return this._step;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._step = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingChangeEvent.prototype, "column", {
            get: /**
             * @return {?}
             */ function () {
                return this._column;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._column = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingChangeEvent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], SettingChangeEvent.prototype, "_step", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], SettingChangeEvent.prototype, "_column", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Object)
        ], SettingChangeEvent.prototype, "_value", void 0);
        SettingChangeEvent = __decorate([
            i1.Bean('SettingChangeEvent'),
            __metadata("design:paramtypes", [Number, String, Object])
        ], SettingChangeEvent);
        return SettingChangeEvent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingTranslate = /** @class */ (function () {
        function GoalSettingTranslate() {
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
        Object.defineProperty(GoalSettingTranslate.prototype, "TeamGoalEffectiveMonthTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamGoalEffectiveMonthTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamGoalEffectiveMonthTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "PersonalGoalEffectiveMonthTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._PersonalGoalEffectiveMonthTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PersonalGoalEffectiveMonthTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "NowToYearEndTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._NowToYearEndTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._NowToYearEndTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "FYFCNowToYearEndTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFCNowToYearEndTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FYFCNowToYearEndTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "ANPNowToYearEndTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._ANPNowToYearEndTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ANPNowToYearEndTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "PersonalFYFCActualVariableTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._PersonalFYFCActualVariableTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._PersonalFYFCActualVariableTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "TeamFYFCActualVariableTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamFYFCActualVariableTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamFYFCActualVariableTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "TeamANPActualVariableTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._TeamANPActualVariableTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._TeamANPActualVariableTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingTranslate.prototype, "FYFCActualDashTitle", {
            get: /**
             * @return {?}
             */ function () {
                return this._FYFCActualDashTitle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._FYFCActualDashTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_TeamGoalEffectiveMonthTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_PersonalGoalEffectiveMonthTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_NowToYearEndTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_FYFCNowToYearEndTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_ANPNowToYearEndTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_PersonalFYFCActualVariableTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_TeamFYFCActualVariableTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_TeamANPActualVariableTitle", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingTranslate.prototype, "_FYFCActualDashTitle", void 0);
        GoalSettingTranslate = __decorate([
            i1.Bean('GoalSettingTranslate'),
            __metadata("design:paramtypes", [])
        ], GoalSettingTranslate);
        return GoalSettingTranslate;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CombineStep5AndAgecyPlanData = /** @class */ (function () {
        function CombineStep5AndAgecyPlanData(Step5ItemList, AgencyPlanItemList, ItemTextIsRedList) {
            this._Step5ItemList = [];
            this._AgencyPlanItemList = [];
            this._ItemTextIsRedList = [];
            this._Step5ItemList = Step5ItemList;
            this._AgencyPlanItemList = AgencyPlanItemList;
            this._ItemTextIsRedList = ItemTextIsRedList;
        }
        Object.defineProperty(CombineStep5AndAgecyPlanData.prototype, "Step5ItemList", {
            get: /**
             * @return {?}
             */ function () {
                return this._Step5ItemList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CombineStep5AndAgecyPlanData.prototype, "AgencyPlanItemList", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgencyPlanItemList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CombineStep5AndAgecyPlanData.prototype, "ItemTextIsRedList", {
            get: /**
             * @return {?}
             */ function () {
                return this._ItemTextIsRedList;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], CombineStep5AndAgecyPlanData.prototype, "_Step5ItemList", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], CombineStep5AndAgecyPlanData.prototype, "_AgencyPlanItemList", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], CombineStep5AndAgecyPlanData.prototype, "_ItemTextIsRedList", void 0);
        CombineStep5AndAgecyPlanData = __decorate([
            i1.Bean('CombineStep5AndAgecyPlanData'),
            __metadata("design:paramtypes", [Array, Array, Array])
        ], CombineStep5AndAgecyPlanData);
        return CombineStep5AndAgecyPlanData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStep3ForTabChange = /** @class */ (function () {
        function GoalSettingStep3ForTabChange(ActivityValue$$1, Unit) {
            this._ActivityValue = null;
            this._Unit = '';
            this._ActivityValue = ActivityValue$$1;
            this._Unit = Unit;
        }
        Object.defineProperty(GoalSettingStep3ForTabChange.prototype, "ActivityValue", {
            get: /**
             * @return {?}
             */ function () {
                return this._ActivityValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStep3ForTabChange.prototype, "Unit", {
            get: /**
             * @return {?}
             */ function () {
                return this._Unit;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", ActivityValue)
        ], GoalSettingStep3ForTabChange.prototype, "_ActivityValue", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], GoalSettingStep3ForTabChange.prototype, "_Unit", void 0);
        GoalSettingStep3ForTabChange = __decorate([
            i1.Bean('GoalSettingStep3ForTabChange'),
            __metadata("design:paramtypes", [ActivityValue, String])
        ], GoalSettingStep3ForTabChange);
        return GoalSettingStep3ForTabChange;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidError = /** @class */ (function () {
        function ValidError(Step, ColId, Msg) {
            this._Step = Step;
            this._ColId = ColId;
            this._Msg = Msg;
        }
        Object.defineProperty(ValidError.prototype, "Step", {
            get: /**
             * @return {?}
             */ function () {
                return this._Step;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValidError.prototype, "ColId", {
            get: /**
             * @return {?}
             */ function () {
                return this._ColId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValidError.prototype, "Msg", {
            get: /**
             * @return {?}
             */ function () {
                return this._Msg;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ValidError.prototype, "_Step", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ValidError.prototype, "_ColId", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ValidError.prototype, "_Msg", void 0);
        ValidError = __decorate([
            i1.Bean('ValidError'),
            __metadata("design:paramtypes", [Number, String, String])
        ], ValidError);
        return ValidError;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApproveInfo = /** @class */ (function () {
        function ApproveInfo(DataYear, AgentID, IsApprove, Comment) {
            this._DataYear = DataYear;
            this._AgentID = AgentID;
            this._IsApprove = IsApprove;
            this._Comment = Comment;
        }
        Object.defineProperty(ApproveInfo.prototype, "Comment", {
            get: /**
             * @return {?}
             */ function () {
                return this._Comment;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApproveInfo.prototype, "IsApprove", {
            get: /**
             * @return {?}
             */ function () {
                return this._IsApprove;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApproveInfo.prototype, "AgentID", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgentID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApproveInfo.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ApproveInfo.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ApproveInfo.prototype, "_AgentID", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], ApproveInfo.prototype, "_IsApprove", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ApproveInfo.prototype, "_Comment", void 0);
        ApproveInfo = __decorate([
            i1.Bean('ApproveInfo'),
            __metadata("design:paramtypes", [Number, String, Boolean, String])
        ], ApproveInfo);
        return ApproveInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingStepDataParams = /** @class */ (function () {
        function GoalSettingStepDataParams(DataYear, isAdjust) {
            this._DataYear = DataYear;
            this._isAdjust = isAdjust;
        }
        Object.defineProperty(GoalSettingStepDataParams.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._DataYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._DataYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoalSettingStepDataParams.prototype, "isAdjust", {
            get: /**
             * @return {?}
             */ function () {
                return this._isAdjust;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isAdjust = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], GoalSettingStepDataParams.prototype, "_DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], GoalSettingStepDataParams.prototype, "_isAdjust", void 0);
        GoalSettingStepDataParams = __decorate([
            i1.Bean('GoalSettingStepDataParams'),
            __metadata("design:paramtypes", [Number, Boolean])
        ], GoalSettingStepDataParams);
        return GoalSettingStepDataParams;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AGENCY_STATE = {
        DISPLAY: 'display',
        ACCEPT: 'accept',
        REJECT: 'reject',
        FIRST: 'first',
    };
    var AgencyPlanStatus = /** @class */ (function () {
        function AgencyPlanStatus(state, agentID) {
            this.state = state;
            this.agentID = agentID;
        }
        Object.defineProperty(AgencyPlanStatus.prototype, "state", {
            get: /**
             * @return {?}
             */ function () {
                return this._state;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._state = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanStatus.prototype, "agentID", {
            get: /**
             * @return {?}
             */ function () {
                return this._agentID;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._agentID = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanStatus.prototype, "_state", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanStatus.prototype, "_agentID", void 0);
        AgencyPlanStatus = __decorate([
            i1.Bean('AgencyPlanStatus'),
            __metadata("design:paramtypes", [Object, Object])
        ], AgencyPlanStatus);
        return AgencyPlanStatus;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanMainInfo = /** @class */ (function () {
        function AgencyPlanMainInfo() {
        }
        Object.defineProperty(AgencyPlanMainInfo.prototype, "CompletionRate", {
            get: /**
             * @return {?}
             */ function () {
                return this._CompletionRate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._CompletionRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AgencyPlanMainInfo.prototype, "AgencyMainDataList", {
            get: /**
             * @return {?}
             */ function () {
                return this._AgencyMainDataList;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._AgencyMainDataList = value;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], AgencyPlanMainInfo.prototype, "_CompletionRate", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], AgencyPlanMainInfo.prototype, "_AgencyMainDataList", void 0);
        AgencyPlanMainInfo = __decorate([
            i1.Bean('AgencyPlanMainInfo'),
            __metadata("design:paramtypes", [])
        ], AgencyPlanMainInfo);
        return AgencyPlanMainInfo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalStoreService = /** @class */ (function () {
        function GoalStoreService(loginMgr) {
            var _this = this;
            this.loginMgr = loginMgr;
            this.syncGoalDatas = null;
            this.settingYear = null;
            this.isPromo = false;
            this.canSkip = true;
            this.planFYFCPopupInfo = new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null);
            this.landingStatus = GOAL_LANDING_STATUS.FIRST_INIT;
            this.yearSubject = new rxjs.BehaviorSubject(this.settingYear);
            this.statusSubject = new rxjs.BehaviorSubject(this.landingStatus);
            this.isPromoSubject = new rxjs.BehaviorSubject(this.isPromo);
            this.canSkipSubject = new rxjs.BehaviorSubject(this.canSkip);
            this.planFYFCPopupInfoSubject = new rxjs.BehaviorSubject(this.planFYFCPopupInfo);
            this.syncGoalDatasSubject = new rxjs.BehaviorSubject(this.syncGoalDatas);
            this.goalPopupResponseSubject = new rxjs.Subject();
            this.loginMgr.subscribeLogout().subscribe(( /**
             * @return {?}
             */function () {
                //reset to init
                _this.setSyncGoalDatas(null);
                _this.setGoalLandingStatus(GOAL_LANDING_STATUS.FIRST_INIT);
                _this.setSettingYear(null);
                _this.setIsPromo(false);
                _this.setCanSkip(true);
                _this.setPlanFYFCPopupInfo(new PlanFYFCPopupInfo(PLAN_FYFC_POPUP_STATE.CLOSE, null));
            }));
        }
        /**
         * @return {?}
         */
        GoalStoreService.prototype.getSyncGoalDatas = /**
         * @return {?}
         */
            function () {
                return this.syncGoalDatasSubject.asObservable();
            };
        /**
         * @param {?} status
         * @return {?}
         */
        GoalStoreService.prototype.setSyncGoalDatas = /**
         * @param {?} status
         * @return {?}
         */
            function (status) {
                this.syncGoalDatas = status;
                this.syncGoalDatasSubject.next(this.syncGoalDatas);
            };
        /**
         * @return {?}
         */
        GoalStoreService.prototype.getGoalLandingStatus = /**
         * @return {?}
         */
            function () {
                return this.statusSubject.asObservable();
            };
        /**
         * @param {?} status
         * @return {?}
         */
        GoalStoreService.prototype.setGoalLandingStatus = /**
         * @param {?} status
         * @return {?}
         */
            function (status) {
                this.landingStatus = status;
                this.statusSubject.next(this.landingStatus);
            };
        /**
         * @return {?}
         */
        GoalStoreService.prototype.getSettingYear = /**
         * @return {?}
         */
            function () {
                return this.yearSubject.asObservable();
            };
        /**
         * @param {?} year
         * @return {?}
         */
        GoalStoreService.prototype.setSettingYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this.settingYear = year;
                this.yearSubject.next(this.settingYear);
            };
        /**
         * @return {?}
         */
        GoalStoreService.prototype.getIsPromo = /**
         * @return {?}
         */
            function () {
                return this.isPromoSubject.asObservable();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        GoalStoreService.prototype.setIsPromo = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.isPromo = val;
                this.isPromoSubject.next(this.isPromo);
            };
        /**
         * @return {?}
         */
        GoalStoreService.prototype.getCanSkip = /**
         * @return {?}
         */
            function () {
                return this.canSkipSubject.asObservable();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        GoalStoreService.prototype.setCanSkip = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.canSkip = val;
                this.canSkipSubject.next(this.canSkip);
            };
        /**
         * @param {?} resp
         * @return {?}
         */
        GoalStoreService.prototype.setPopupResp = /**
         * @param {?} resp
         * @return {?}
         */
            function (resp) {
                this.goalPopupResponseSubject.next(resp);
            };
        /**
         * @return {?}
         */
        GoalStoreService.prototype.getPopupResp = /**
         * @return {?}
         */
            function () {
                return this.goalPopupResponseSubject.asObservable();
            };
        // for edit personal popup
        // for edit personal popup
        /**
         * @param {?} info
         * @return {?}
         */
        GoalStoreService.prototype.setPlanFYFCPopupInfo =
            // for edit personal popup
            /**
             * @param {?} info
             * @return {?}
             */
            function (info) {
                console.log("Set info");
                this.planFYFCPopupInfo = info;
                if (info.data) {
                    this.planFYFCPopupInfo.data.Step4 = this.planFYFCPopupInfo.data.Step4.clone();
                }
                this.planFYFCPopupInfoSubject.next(this.planFYFCPopupInfo);
            };
        /**
         * @return {?}
         */
        GoalStoreService.prototype.getPlanFYFCPopupInfo = /**
         * @return {?}
         */
            function () {
                return this.planFYFCPopupInfoSubject.asObservable();
            };
        GoalStoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        GoalStoreService.ctorParameters = function () {
            return [
                { type: i1.DefaultLoginMgr }
            ];
        };
        /** @nocollapse */ GoalStoreService.ngInjectableDef = i0.defineInjectable({ factory: function GoalStoreService_Factory() { return new GoalStoreService(i0.inject(i1.DefaultLoginMgr)); }, token: GoalStoreService, providedIn: "root" });
        return GoalStoreService;
    }());
    var GoalPopupResponse = /** @class */ (function () {
        function GoalPopupResponse() {
        }
        return GoalPopupResponse;
    }());
    /** @enum {number} */
    var GOAL_LANDING_STATUS = {
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
    var PLAN_FYFC_POPUP_STATE = {
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
    var SYNC_STATUS = {
        SYNC: 0,
        FINISH: 1,
    };
    SYNC_STATUS[SYNC_STATUS.SYNC] = 'SYNC';
    SYNC_STATUS[SYNC_STATUS.FINISH] = 'FINISH';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingService = /** @class */ (function () {
        function GoalSettingService(dispatcher, APIFactory, goalStore, errorHandler, goalSettingStep, yearConfigExtension, goalSettingExtension, dataSyncService, profileCodeService) {
            var _this = this;
            this.dispatcher = dispatcher;
            this.APIFactory = APIFactory;
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
            this.ColMapToProfile.forEach(( /**
             * @param {?} code
             * @param {?} col
             * @return {?}
             */function (code, col) {
                _this.ColMapToProfileCodeMap.set(col, _this.profileCodeService.getCodeArray(code));
            }));
        }
        //-----------
        //#region  goalStepDatas
        // GoalSettingService
        //-----------
        //#region  goalStepDatas
        // GoalSettingService
        /**
         * @param {?} year
         * @param {?} isAdjust
         * @return {?}
         */
        GoalSettingService.prototype.getGoalSettingStep1_5Data =
            //-----------
            //#region  goalStepDatas
            // GoalSettingService
            /**
             * @param {?} year
             * @param {?} isAdjust
             * @return {?}
             */
            function (year, isAdjust) {
                return rxjs.from(this._getGoalSettingStep1_5Data(year, isAdjust));
            };
        /**
         * @private
         * @param {?} year
         * @param {?} isAdjust
         * @return {?}
         */
        GoalSettingService.prototype._getGoalSettingStep1_5Data = /**
         * @private
         * @param {?} year
         * @param {?} isAdjust
         * @return {?}
         */
            function (year, isAdjust) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, returnData, yearConfigResp, goalSettingResp, goalSettingValueResp, actualResp, yearConfig, goalSetting, goalSettingValue, actual, yearConfigMap, goalSettingMap, yearConfigObj_1, goalSettingObj, goalSettingValueObj_1, teamFYFCActual_1, teamANPActual, allYearActual_1, monthOfYear, actuallist_1, actualBody, FYFCActuals, TeamFYFCActuals, YearConfig, GoalStatus, Step1, Step2, Step3, Step4, Step5, yearConfigExtData, goalSettingExtData, ActivityFYFC, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log('into _getGoalSettingStep1_5Data year:', year, 'isAdjust', isAdjust);
                                returnData = new GoalSettingStepData(year);
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 7, , 8]);
                                yearConfigResp = void 0;
                                goalSettingResp = void 0;
                                goalSettingValueResp = void 0;
                                actualResp = void 0;
                                yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                                goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                                goalSettingValue = this.APIFactory.getAPI("getGoalSettingValue");
                                actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                                (( /** @type {?} */(goalSettingValue))).setDataYear(year);
                                (( /** @type {?} */(actual))).setDataYear(year);
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(yearConfig).toPromise(),
                                        this.dispatcher.dispatch(goalSetting).toPromise(),
                                        this.dispatcher.dispatch(goalSettingValue).toPromise(),
                                        this.dispatcher.dispatch(actual).toPromise()
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 4]), yearConfigResp = _a[0], goalSettingResp = _a[1], goalSettingValueResp = _a[2], actualResp = _a[3];
                                console.log("yearConfigResp", yearConfigResp);
                                console.log("goalSettingResp", goalSettingResp);
                                console.log("goalSettingValueResp", goalSettingValueResp);
                                console.log("actualResp", actualResp);
                                if (!(yearConfigResp.Header["status"]
                                    && goalSettingResp.Header["status"]
                                    && goalSettingValueResp.Header["status"]
                                    && actualResp.Header["status"]))
                                    return [3 /*break*/, 6];
                                yearConfigMap = this.yearJsonToMap(yearConfigResp["Body"]);
                                goalSettingMap = this.yearJsonToMap(goalSettingResp["Body"]);
                                yearConfigObj_1 = yearConfigMap.get(year);
                                goalSettingObj = goalSettingMap.get(year);
                                console.log("yearConfigObj", yearConfigObj_1);
                                console.log("goalSettingObj", goalSettingObj);
                                if (!(yearConfigObj_1 != undefined && goalSettingObj != undefined))
                                    return [3 /*break*/, 6];
                                // call GetGoalSettingValue
                                goalSettingValueObj_1 = {};
                                goalSettingValueResp["Body"].forEach(( /**
                                 * @param {?} data
                                 * @return {?}
                                 */function (data) {
                                    goalSettingValueObj_1[data.DataType] = data.Value;
                                }));
                                console.log("goalSettingValueObj", goalSettingValueObj_1);
                                // call GetActualValue
                                teamFYFCActual_1 = -1;
                                teamANPActual = -1;
                                allYearActual_1 = -1;
                                monthOfYear = yearConfigObj_1.MonthQuantityOfYear;
                                actuallist_1 = Array(monthOfYear).fill(this.DASH, 0);
                                actualBody = actualResp["Body"];
                                FYFCActuals = actualBody.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.DataYear == year && x.PerformanceType == i1.PERFORMANCETYPE.PERSONAL && x.DataType == "FYFC"; }));
                                if (FYFCActuals.length > 0) {
                                    allYearActual_1 = 0;
                                    FYFCActuals.forEach(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) {
                                        if (x.Month <= yearConfigObj_1.PerformanceSettlementMonth) {
                                            actuallist_1[x.Month - 1] = x.Value;
                                            allYearActual_1 += x.Value;
                                        }
                                    }));
                                }
                                TeamFYFCActuals = actualBody.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.DataYear == year && x.PerformanceType == i1.PERFORMANCETYPE.TEAM && x.DataType == "FYFC"; }));
                                if (TeamFYFCActuals.length) {
                                    teamFYFCActual_1 = 0;
                                    teamANPActual = 0;
                                    TeamFYFCActuals.forEach(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) {
                                        teamFYFCActual_1 += (x.Month <= yearConfigObj_1.PerformanceSettlementMonth) ? x.Value : 0;
                                    }));
                                    teamANPActual = this.numberToFix(teamFYFCActual_1 * yearConfigObj_1.FyfcCovertAnpRate, 0);
                                }
                                console.log("actuallist", actuallist_1);
                                YearConfig = new GoalSettingYearConfig();
                                GoalStatus = new GoalSettingGoalStatus();
                                Step1 = new GoalSettingStep1();
                                Step2 = new GoalSettingStep2();
                                Step3 = new GoalSettingStep3();
                                Step4 = new GoalSettingStep4();
                                Step5 = new GoalSettingStep5();
                                YearConfig.DataYear = yearConfigObj_1.DataYear;
                                YearConfig.IsCurrent = yearConfigObj_1.IsCurrent;
                                YearConfig.QuarterStartMonth = yearConfigObj_1.QuarterStartMonth;
                                YearConfig.QuarterEndMonth = yearConfigObj_1.QuarterEndMonth;
                                YearConfig.GoalSettingActivityProcMode = yearConfigObj_1.GoalSettingActivityProcMode;
                                YearConfig.GoalAndPlanDifferenceLimit = yearConfigObj_1.GoalAndPlanDifferenceLimit;
                                YearConfig.FyfcCovertAnpRate = yearConfigObj_1.FyfcCovertAnpRate;
                                YearConfig.InforceConvertSubmitRate = yearConfigObj_1.InforceConvertSubmitRate;
                                YearConfig.InforceConvertMeetRate = yearConfigObj_1.InforceConvertMeetRate;
                                YearConfig.InforceConvertScheduleRate = yearConfigObj_1.InforceConvertScheduleRate;
                                YearConfig.InforceConvertFindRate = yearConfigObj_1.InforceConvertFindRate;
                                YearConfig.NowToYearEndDays = yearConfigObj_1.NowToYearEndDays;
                                YearConfig.PerformanceSettlementMonth = yearConfigObj_1.PerformanceSettlementMonth;
                                YearConfig.MonthQuantityOfYear = yearConfigObj_1.MonthQuantityOfYear;
                                YearConfig.WorkingMonth = yearConfigObj_1.WorkingMonth;
                                if (this.yearConfigExtension) {
                                    yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj_1, { source: "SQL" });
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
                                    goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "SQL" });
                                    GoalStatus.setExtension(goalSettingExtData);
                                }
                                Step1.FYFC = goalSettingValueObj_1.PERSON_FYFC;
                                Step1.AnnualConvention = goalSettingValueObj_1.ANNUAL_CONVENTION;
                                Step1.MDRT = goalSettingValueObj_1.MDRT;
                                Step1.PromotionPlan = goalSettingValueObj_1.PROMOTION_PLAN;
                                Step1.Actual = this.changeToDash(allYearActual_1);
                                Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj_1.PERSON_FYFC, Step1.Actual);
                                Step1.ActivityFYFC = goalSettingValueObj_1.ACTIVITY_FYFC;
                                Step1.ActivityDays = goalSettingValueObj_1.ACTIVITY_DAYS;
                                Step2.PerCase = goalSettingValueObj_1.PER_CASE_FYFC;
                                ActivityFYFC = isAdjust ? Step1.FYFCNowToYearEnd : Step1.FYFC;
                                Step3 = this.calculateActivityData(ActivityFYFC, Step2.PerCase, YearConfig);
                                if (!isAdjust)
                                    return [3 /*break*/, 4];
                                return [4 /*yield*/, this._getMonthActualPlanBySQL(i1.PERFORMANCETYPE.PERSONAL, year, YearConfig.MonthQuantityOfYear, YearConfig.PerformanceSettlementMonth)];
                            case 3:
                                Step4 = _b.sent();
                                Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                                return [3 /*break*/, 5];
                            case 4:
                                Step4 = this.calculateMonthActualPlan(YearConfig, Step1.FYFC, actuallist_1);
                                Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                                _b.label = 5;
                            case 5:
                                Step5.TeamFYFC = goalSettingValueObj_1.TEAM_FYFC;
                                Step5.TeamANP = goalSettingValueObj_1.TEAM_ANP;
                                Step5.Manpower = goalSettingValueObj_1.TEAM_MANPOWER;
                                Step5.Recruitment = goalSettingValueObj_1.TEAM_RECRUITMENT;
                                Step5.TeamFYFCActual = this.changeToDash(teamFYFCActual_1);
                                Step5.TeamANPActual = this.changeToDash(teamANPActual);
                                Step5.TeamFYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj_1.TEAM_FYFC, Step5.TeamFYFCActual);
                                Step5.TeamANPNowToYearEnd = this.calculateANPFromFYFC(Step5.TeamFYFCNowToYearEnd, YearConfig.FyfcCovertAnpRate);
                                returnData.YearConfig = YearConfig;
                                returnData.GoalStatus = GoalStatus;
                                returnData.Step1 = Step1;
                                returnData.Step2 = Step2;
                                returnData.Step3 = Step3;
                                returnData.Step4 = Step4;
                                returnData.Step5 = Step5;
                                returnData.ActualList = actuallist_1;
                                _b.label = 6;
                            case 6: return [3 /*break*/, 8];
                            case 7:
                                error_1 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00400', 'getGoalSettingStep1_5Data fail!' + error_1.message));
                                return [3 /*break*/, 8];
                            case 8:
                                console.log("getGoalSettingStep1_5Data returnData", returnData);
                                return [2 /*return*/, returnData];
                        }
                    });
                });
            };
        /**
         * @param {?} goal
         * @param {?} perCase
         * @param {?} yearConfig
         * @param {?=} activityDays
         * @return {?}
         */
        GoalSettingService.prototype.calculateActivityData = /**
         * @param {?} goal
         * @param {?} perCase
         * @param {?} yearConfig
         * @param {?=} activityDays
         * @return {?}
         */
            function (goal, perCase, yearConfig, activityDays) {
                var _this = this;
                if (activityDays === void 0) {
                    activityDays = '';
                }
                console.log("calculateActivityData:", goal, perCase, yearConfig, activityDays);
                /** @type {?} */
                var returnObj = new GoalSettingStep3();
                /** @type {?} */
                var activityValues = [];
                try {
                    /** @type {?} */
                    var numGoal = Number(goal);
                    /** @type {?} */
                    var numPerCase = Number(perCase);
                    if (i1.NumberUtils.isNumber(goal) && i1.NumberUtils.isNumber(perCase) && numPerCase > 0) {
                        console.warn("calculateActivityData on service: ", goal, perCase, yearConfig);
                        /** @type {?} */
                        var days = (i1.StringUtils.isEmpty(activityDays)) ? Number(yearConfig.NowToYearEndDays) : Number(activityDays);
                        /** @type {?} */
                        var daysInweek = 7;
                        /** @type {?} */
                        var daysInMonth = 365 / Number(yearConfig.MonthQuantityOfYear);
                        /** @type {?} */
                        var dayInforce = numGoal / numPerCase / days;
                        /** @type {?} */
                        var weekInforce = dayInforce * daysInweek;
                        /** @type {?} */
                        var monthInforce = dayInforce * daysInMonth;
                        dayInforce = dayInforce;
                        /** @type {?} */
                        var tabs = [{ name: i1.TIMEBASE.DAY, inforce: dayInforce }, { name: i1.TIMEBASE.WEEK, inforce: weekInforce }, { name: i1.TIMEBASE.MONTH, inforce: monthInforce }];
                        if (this.goalSettingStep) {
                            activityValues = this.goalSettingStep.calculateOtherRuleActivityInforce(tabs, yearConfig);
                        }
                        /** @type {?} */
                        var activity = activityValues[0].TimeBase;
                        returnObj.Activity = activity;
                        returnObj.ActivityValues = activityValues;
                    }
                    else {
                        /** @type {?} */
                        var tabNum = [i1.TIMEBASE.DAY, i1.TIMEBASE.WEEK, i1.TIMEBASE.MONTH];
                        returnObj.Activity = i1.TIMEBASE.DAY;
                        tabNum.forEach(( /**
                         * @param {?} time
                         * @return {?}
                         */function (time) {
                            /** @type {?} */
                            var activity = new ActivityValue(time, _this.DASH, _this.DASH, _this.DASH, _this.DASH, _this.DASH);
                            activityValues.push(activity);
                        }));
                        returnObj.ActivityValues = activityValues;
                    }
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00401', 'calculateActivityData fail!' + error.message));
                }
                console.log("calculateActivityData return obj: ", JSON.stringify(returnObj));
                return returnObj;
            };
        // step 4 function
        // step 4 function
        /**
         * @param {?} yearConfig
         * @param {?} goal
         * @param {?} actualList
         * @return {?}
         */
        GoalSettingService.prototype.calculateMonthActualPlan =
            // step 4 function
            /**
             * @param {?} yearConfig
             * @param {?} goal
             * @param {?} actualList
             * @return {?}
             */
            function (yearConfig, goal, actualList) {
                //actualList example : [100,100,200,0,100,1]
                console.log("calculateMonthActualPlan goal:", goal);
                /** @type {?} */
                var Step4Datas = new GoalSettingStep4();
                /** @type {?} */
                var MonthActualPlanList = [];
                try {
                    if (i1.NumberUtils.isNumber(goal)) {
                        if (this.goalSettingStep) {
                            MonthActualPlanList = this.goalSettingStep.calculateMonthActualPlan(yearConfig, Number(goal), actualList);
                        }
                        /** @type {?} */
                        var forecast = this.calculateForecast(yearConfig.PerformanceSettlementMonth, MonthActualPlanList);
                        /** @type {?} */
                        var shortfall = this.calculateShortfall(goal, forecast);
                        /** @type {?} */
                        var actual = this.calulateSumByArray(actualList);
                        Step4Datas.MonthList = MonthActualPlanList;
                        Step4Datas.Forecast = forecast;
                        Step4Datas.Shortfall = shortfall;
                        Step4Datas.Actual = actual;
                    }
                    else {
                        //全部都dash
                        for (var i = 0; i < yearConfig.MonthQuantityOfYear; i++) {
                            /** @type {?} */
                            var data = new MonthlyPlanFYFCData(i, this.DASH, this.DASH);
                            MonthActualPlanList.push(data);
                        }
                        Step4Datas.Actual = this.DASH;
                        Step4Datas.Forecast = this.DASH;
                        Step4Datas.Shortfall = this.DASH;
                        Step4Datas.MonthList = MonthActualPlanList;
                    }
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00402', 'calculateMonthActualPlan fail!' + error.message));
                }
                console.log("calculateMonthActualPlan:", MonthActualPlanList);
                return Step4Datas;
            };
        /**
         * @param {?} PerformanceSettlementMonth
         * @param {?} MonthActualPlanList
         * @return {?}
         */
        GoalSettingService.prototype.calculateActual = /**
         * @param {?} PerformanceSettlementMonth
         * @param {?} MonthActualPlanList
         * @return {?}
         */
            function (PerformanceSettlementMonth, MonthActualPlanList) {
                var _this = this;
                if (PerformanceSettlementMonth > 0) {
                    return MonthActualPlanList.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return (Number(x.Actual) < 0 || x.Actual == _this.DASH || x.Month > PerformanceSettlementMonth) ? 0 : Number(x.Actual); })).reduce(( /**
                     * @param {?} pre
                     * @param {?} cur
                     * @return {?}
                     */function (pre, cur) { return pre + Number(cur); }), 0).toString();
                }
                else {
                    return this.DASH;
                }
            };
        /**
         * @param {?} PerformanceSettlementMonth
         * @param {?} MonthActualPlanList
         * @return {?}
         */
        GoalSettingService.prototype.calculateForecast = /**
         * @param {?} PerformanceSettlementMonth
         * @param {?} MonthActualPlanList
         * @return {?}
         */
            function (PerformanceSettlementMonth, MonthActualPlanList) {
                return this.calulateSumByArray(this.getActualPlanFromMonthList(MonthActualPlanList, PerformanceSettlementMonth));
            };
        /**
         * @param {?} monthList
         * @return {?}
         */
        GoalSettingService.prototype.calulateSumByArray = /**
         * @param {?} monthList
         * @return {?}
         */
            function (monthList) {
                var _this = this;
                /** @type {?} */
                var isDash = true;
                monthList.forEach(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (data != _this.DASH) {
                        isDash = false;
                    }
                }));
                /** @type {?} */
                var returnNum = this.DASH;
                if (!isDash) {
                    returnNum = monthList.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return (Number(x) < 0 || x == _this.DASH || i1.StringUtils.isEmpty(x)) ? 0 : x; })).reduce(( /**
                     * @param {?} pre
                     * @param {?} cur
                     * @return {?}
                     */function (pre, cur) { return pre + Number(cur); }), 0).toString();
                }
                return returnNum;
            };
        /**
         * @param {?} goal
         * @param {?} forecast
         * @return {?}
         */
        GoalSettingService.prototype.calculateShortfall = /**
         * @param {?} goal
         * @param {?} forecast
         * @return {?}
         */
            function (goal, forecast) {
                /** @type {?} */
                var result = this.DASH;
                if (i1.NumberUtils.isNumber(goal) && i1.NumberUtils.isNumber(forecast)) {
                    if (this.goalSettingStep) {
                        result = this.goalSettingStep.getShortfall(goal, forecast).toString();
                    }
                    else {
                        /** @type {?} */
                        var tempresult = (Number(goal) - Number(forecast));
                        result = (tempresult < 0) ? "0" : tempresult.toString();
                    }
                }
                return result;
            };
        //#endregion  goalStepDatas
        //#region Submit & Approve function
        //#endregion  goalStepDatas
        //#region Submit & Approve function
        /**
         * @param {?} SubmitType
         * @param {?} DataYear
         * @param {?} adjustDatas
         * @return {?}
         */
        GoalSettingService.prototype.isNeedApprove =
            //#endregion  goalStepDatas
            //#region Submit & Approve function
            /**
             * @param {?} SubmitType
             * @param {?} DataYear
             * @param {?} adjustDatas
             * @return {?}
             */
            function (SubmitType, DataYear, adjustDatas) {
                return rxjs.from(this._isNeedApprove(SubmitType, DataYear, adjustDatas));
            };
        /**
         * @private
         * @param {?} SubmitType
         * @param {?} DataYear
         * @param {?} adjustDatas
         * @return {?}
         */
        GoalSettingService.prototype._isNeedApprove = /**
         * @private
         * @param {?} SubmitType
         * @param {?} DataYear
         * @param {?} adjustDatas
         * @return {?}
         */
            function (SubmitType, DataYear, adjustDatas) {
                return __awaiter(this, void 0, void 0, function () {
                    var isApproveInfo, originDatas, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("_isNeedApprove adjustDatas", adjustDatas, SubmitType, DataYear);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 5, , 6]);
                                if (!this.goalSettingStep)
                                    return [3 /*break*/, 3];
                                //taiwan
                                return [4 /*yield*/, this._getGoalSettingStep1_5Data(DataYear, true)];
                            case 2:
                                originDatas = _a.sent();
                                isApproveInfo = this.goalSettingStep.isNeedApprove(adjustDatas, originDatas);
                                return [3 /*break*/, 4];
                            case 3:
                                isApproveInfo = new IsApproveInfo(true, false);
                                _a.label = 4;
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                error_2 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError('F00403', 'isNeedApprove fail!' + error_2.message));
                                return [3 /*break*/, 6];
                            case 6:
                                console.log("isNeedApprove", isApproveInfo);
                                return [2 /*return*/, isApproveInfo];
                        }
                    });
                });
            };
        /**
         * @param {?} FYFC
         * @param {?} Forecast
         * @param {?} GoalAndPlanDifferenceLimit
         * @return {?}
         */
        GoalSettingService.prototype.isNeedApprove_plan = /**
         * @param {?} FYFC
         * @param {?} Forecast
         * @param {?} GoalAndPlanDifferenceLimit
         * @return {?}
         */
            function (FYFC, Forecast, GoalAndPlanDifferenceLimit) {
                console.log('isNeedApprove_plan FYFC', FYFC, 'Forecast', Forecast, 'GoalAndPlanDifferenceLimit', GoalAndPlanDifferenceLimit);
                /** @type {?} */
                var isApproveInfo;
                try {
                    if (this.goalSettingStep) {
                        isApproveInfo = this.goalSettingStep.isNeedApprove_plan(Number(FYFC), Number(Forecast), GoalAndPlanDifferenceLimit);
                    }
                    else {
                        isApproveInfo = new IsApproveInfo(true, false);
                    }
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00404', 'isNeedApprove_plan fail!' + error.message));
                }
                console.log("isNeedApprove_plan isApproveInfo:", isApproveInfo);
                return rxjs.of(isApproveInfo);
            };
        /**
         * @param {?} submitType
         * @param {?} IsNeedApprove
         * @param {?} submitData
         * @return {?}
         */
        GoalSettingService.prototype.submitGoal = /**
         * @param {?} submitType
         * @param {?} IsNeedApprove
         * @param {?} submitData
         * @return {?}
         */
            function (submitType, IsNeedApprove, submitData) {
                return rxjs.from(this._submitGoal(submitType, IsNeedApprove, submitData));
            };
        /**
         * @private
         * @param {?} submitType
         * @param {?} IsNeedApprove
         * @param {?} submitData
         * @return {?}
         */
        GoalSettingService.prototype._submitGoal = /**
         * @private
         * @param {?} submitType
         * @param {?} IsNeedApprove
         * @param {?} submitData
         * @return {?}
         */
            function (submitType, IsNeedApprove, submitData) {
                return __awaiter(this, void 0, void 0, function () {
                    var Activity, GoalSettingValue, GoalPlan, SubmitInfo, SubmitDatas, returnResp, GoalSettingType, Resp, error_3;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("[_submitGoal] submitData", submitData);
                                GoalSettingValue = [];
                                GoalPlan = new i1.SubmitGoalPlan();
                                SubmitInfo = new i1.SubmitGoalInfo();
                                returnResp = new i1.SuccessStatus(false);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 6, , 7]);
                                if (submitType == i1.SUBMITGOALTYPE.ALL) {
                                    GoalSettingType = ["Step1", "Step2", "Step5"];
                                    GoalSettingType.forEach(( /**
                                     * @param {?} step
                                     * @return {?}
                                     */function (step) {
                                        /** @type {?} */
                                        var stepMap = _this.StepTextConvertMap.get(step);
                                        stepMap.forEach(( /**
                                         * @param {?} val
                                         * @param {?} key
                                         * @return {?}
                                         */function (val, key) {
                                            if (submitData[step][key]) {
                                                GoalSettingValue.push(new i1.SubmitGoalSettingValue(val, submitData[step][key], []));
                                            }
                                        }));
                                    }));
                                    Activity = submitData.Step3.Activity;
                                }
                                console.log("GoalSettingValue", GoalSettingValue);
                                GoalPlan.TimeBase = i1.TIMEBASE.MONTH;
                                GoalPlan.Values = submitData.Step4.MonthList.filter(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) { return x.Plan != _this.DASH; })).map(( /**
                                 * @param {?} x
                                 * @return {?}
                                 */function (x) {
                                    return new i1.SubmitGoalPlanInfo(i1.PERFORMANCETYPE.PERSONAL, x.Month, Number(x.Plan), []);
                                }));
                                console.log("GoalPlan", GoalPlan);
                                SubmitInfo.DataYear = submitData.DataYear;
                                SubmitInfo.SubmitType = submitType;
                                SubmitInfo.ActivityGoalBase = Activity;
                                SubmitInfo.IsNeedApprove = IsNeedApprove ? i1.YESNO.YES : i1.YESNO.NO;
                                SubmitInfo.Extensions = [];
                                console.log("SubmitInfo", SubmitInfo);
                                SubmitDatas = new i1.SubmitGoalData(SubmitInfo, GoalSettingValue, GoalPlan);
                                return [4 /*yield*/, this._pushGoalSetting(SubmitDatas)];
                            case 2:
                                Resp = _a.sent();
                                if (!Resp.isSuccess)
                                    return [3 /*break*/, 4];
                                return [4 /*yield*/, this.syncGoalDatas()];
                            case 3:
                                _a.sent();
                                returnResp.isSuccess = true;
                                return [3 /*break*/, 5];
                            case 4: throw "submit goal fail! ";
                            case 5: return [3 /*break*/, 7];
                            case 6:
                                error_3 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError('F00405', 'submitGoal fail!' + error_3.message));
                                returnResp.isSuccess = false;
                                return [3 /*break*/, 7];
                            case 7:
                                console.log("_submitGoal resp2", returnResp);
                                return [2 /*return*/, returnResp];
                        }
                    });
                });
            };
        //#endregion Submit & Approve
        //#region LANDING status
        //#endregion Submit & Approve
        //#region LANDING status
        /**
         * @return {?}
         */
        GoalSettingService.prototype.getIsFirstUse =
            //#endregion Submit & Approve
            //#region LANDING status
            /**
             * @return {?}
             */
            function () {
                // get DeviceInfo table
                var _this = this;
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var DeviceInfo = _this.APIFactory.getAPI("getDeviceInfo");
                    (( /** @type {?} */(DeviceInfo))).setDataType("FirstUseAPP");
                    try {
                        _this.dispatcher.dispatch(DeviceInfo).toPromise().then(( /**
                         * @param {?} Datas
                         * @return {?}
                         */function (Datas) {
                            console.log("getIsFirstUse", Datas["Body"][0].CategoryVal == "Y" ? true : false);
                            observer.next(Datas["Body"][0].CategoryVal == "Y" ? true : false);
                            observer.complete();
                        }));
                    }
                    catch (error) {
                        _this.errorHandler.handleError(new i1.APPError('F00408', 'getIsFirstUse fail!' + error.message));
                    }
                }));
            };
        // @Valid('GoalSettingGoalStatus')
        // @Valid('GoalSettingGoalStatus')
        /**
         * @return {?}
         */
        GoalSettingService.prototype.getSettingStatus =
            // @Valid('GoalSettingGoalStatus')
            /**
             * @return {?}
             */
            function () {
                return rxjs.from(this._getSettingStatus());
            };
        /**
         * @private
         * @return {?}
         */
        GoalSettingService.prototype._getSettingStatus = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, GoalSettingResp, yearConfigResp, returnDatas, goalSetting, yearConfig, goalSettingMap, yearConfigMap_1, error_4;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                returnDatas = [];
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                goalSetting = this.APIFactory.getAPI("getGoalSettingGoalSetting");
                                yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(goalSetting).toPromise(),
                                        this.dispatcher.dispatch(yearConfig).toPromise()
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), GoalSettingResp = _a[0], yearConfigResp = _a[1];
                                //getGoalSetting
                                goalSettingMap = new Map();
                                yearConfigMap_1 = new Map();
                                if (GoalSettingResp.Header["status"] && yearConfigResp.Header["status"]) {
                                    goalSettingMap = this.yearJsonToMap(GoalSettingResp["Body"]);
                                    yearConfigMap_1 = this.yearJsonToMap(yearConfigResp["Body"]);
                                    returnDatas = [];
                                    goalSettingMap.forEach(( /**
                                     * @param {?} data
                                     * @param {?} key
                                     * @return {?}
                                     */function (data, key) {
                                        /** @type {?} */
                                        var goalStatus = new GoalSettingGoalStatus();
                                        goalStatus.DataYear = key;
                                        goalStatus.IsCurrent = yearConfigMap_1.get(key).IsCurrent;
                                        goalStatus.IsNeedSetting = data.IsNeedSetting == i1.YESNO.YES;
                                        goalStatus.IsFirstTime = data.IsFirstTime == i1.YESNO.YES;
                                        goalStatus.ApproveStatus = data.ApproveStatus;
                                        goalStatus.RemainingDays = data.Remainingdays;
                                        returnDatas.push(goalStatus);
                                    }));
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                error_4 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00409', 'getSettingStatus fail!' + error_4.message));
                                return [3 /*break*/, 4];
                            case 4:
                                console.log("getSettingStatus returnDatas", returnDatas);
                                return [2 /*return*/, returnDatas];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} yearJson
         * @return {?}
         */
        GoalSettingService.prototype.yearJsonToMap = /**
         * @private
         * @param {?} yearJson
         * @return {?}
         */
            function (yearJson) {
                console.log("yearJson", yearJson);
                /** @type {?} */
                var map = new Map();
                if (yearJson != null) {
                    yearJson.forEach(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        if (data.DataYear != undefined) {
                            map.set(data.DataYear, data);
                        }
                    }));
                }
                return map;
            };
        //#endregion LANDING status
        //#region GoalSetting overview
        //#endregion LANDING status
        //#region GoalSetting overview
        /**
         * @param {?} performanceType
         * @param {?=} DataYear
         * @param {?=} AgentID
         * @return {?}
         */
        GoalSettingService.prototype.getOverviewData =
            //#endregion LANDING status
            //#region GoalSetting overview
            /**
             * @param {?} performanceType
             * @param {?=} DataYear
             * @param {?=} AgentID
             * @return {?}
             */
            function (performanceType, DataYear, AgentID) {
                if (DataYear === void 0) {
                    DataYear = -1;
                }
                if (AgentID === void 0) {
                    AgentID = "";
                }
                if (i1.StringUtils.isEmpty(AgentID)) {
                    return rxjs.from(this._getOverviewDataBySQL(performanceType, DataYear));
                }
                else {
                    return rxjs.from(this._getOverviewDataByRestful(performanceType, DataYear, AgentID));
                }
            };
        /**
         * @private
         * @param {?} performanceType
         * @param {?=} year
         * @return {?}
         */
        GoalSettingService.prototype._getOverviewDataBySQL = /**
         * @private
         * @param {?} performanceType
         * @param {?=} year
         * @return {?}
         */
            function (performanceType, year) {
                if (year === void 0) {
                    year = -1;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var goalStepDatas, actualPlanData, agencyPlanObj, perCase, activityGoal, activityDays, agencyPlanMainInfo, agencyPlanMainList, error_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                goalStepDatas = new GoalSettingStepData(year);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 9, , 10]);
                                return [4 /*yield*/, this._getGoalSettingStep1_5Data(year, true)];
                            case 2:
                                goalStepDatas = _a.sent();
                                console.log("_getOverviewDataBySQL goalStepDatas", JSON.stringify(goalStepDatas));
                                if (!(goalStepDatas != null))
                                    return [3 /*break*/, 7];
                                return [4 /*yield*/, this._getMonthActualPlanBySQL(performanceType, year, goalStepDatas["YearConfig"]["MonthQuantityOfYear"], goalStepDatas["YearConfig"]["PerformanceSettlementMonth"])];
                            case 3:
                                actualPlanData = _a.sent();
                                if (actualPlanData != null) {
                                    goalStepDatas.Step4 = actualPlanData;
                                    goalStepDatas.Step4.Shortfall = this.calculateShortfall(goalStepDatas.Step1.FYFC, goalStepDatas.Step4.Forecast).toString();
                                }
                                else {
                                    throw "get MonthActualPlan data fail.";
                                }
                                agencyPlanObj = new AgencyPlanDataForOverview();
                                if (!(performanceType == i1.PERFORMANCETYPE.PERSONAL))
                                    return [3 /*break*/, 4];
                                perCase = goalStepDatas.Step2.PerCase ? goalStepDatas.Step2.PerCase : '1';
                                activityGoal = goalStepDatas.Step1.ActivityFYFC ? goalStepDatas.Step1.ActivityFYFC : goalStepDatas.Step1.FYFC;
                                activityDays = goalStepDatas.Step1.ActivityDays ? goalStepDatas.Step1.ActivityDays : goalStepDatas.YearConfig.NowToYearEndDays.toString();
                                goalStepDatas.Step3 = this.calculateActivityData(activityGoal, perCase, goalStepDatas.YearConfig, activityDays);
                                return [3 /*break*/, 6];
                            case 4:
                                if (!(performanceType == i1.PERFORMANCETYPE.TEAM))
                                    return [3 /*break*/, 6];
                                return [4 /*yield*/, this.getAgencyPlanMainData(year).toPromise()];
                            case 5:
                                agencyPlanMainInfo = _a.sent();
                                if (agencyPlanMainInfo && agencyPlanMainInfo.AgencyMainDataList.length) {
                                    agencyPlanMainList = agencyPlanMainInfo.AgencyMainDataList;
                                    console.warn("agencyPlanMainList: ", JSON.stringify(agencyPlanMainList));
                                    console.log(agencyPlanMainList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "FYFC"; }))[0].Forecast);
                                    console.log("agencyPlanObj", agencyPlanObj);
                                    agencyPlanObj.FYFCForecast = agencyPlanMainList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "FYFC"; }))[0].Forecast;
                                    agencyPlanObj.ANPForecast = agencyPlanMainList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "ANP"; }))[0].Forecast;
                                    agencyPlanObj.ManpowerPlan = this.changeToDash(agencyPlanMainList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "Manpower"; }))[0].MonthPlan);
                                    agencyPlanObj.RecruitmentPlan = agencyPlanMainList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "Recruitment"; }))[0].MonthPlan;
                                    agencyPlanObj.CompletionRate = agencyPlanMainInfo.CompletionRate;
                                }
                                else {
                                    throw "get agencyPlan data fail.";
                                }
                                goalStepDatas.AgencyPlan = agencyPlanObj;
                                _a.label = 6;
                            case 6: return [3 /*break*/, 8];
                            case 7: throw "get 1_5Data Fail. goalStepDatas:" + goalStepDatas;
                            case 8:
                                goalStepDatas = this._converSelectCode(goalStepDatas);
                                if (this.goalSettingStep) {
                                    goalStepDatas = this.goalSettingStep.changeEmptyToDash(goalStepDatas);
                                }
                                return [3 /*break*/, 10];
                            case 9:
                                error_5 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError('F00504', 'getOverviewDataBySQL fail!' + error_5));
                                return [3 /*break*/, 10];
                            case 10:
                                console.log("_getOverviewDataBySQL goalStepDatas", goalStepDatas, JSON.stringify(goalStepDatas));
                                return [2 /*return*/, goalStepDatas];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} performanceType
         * @param {?=} DataYear
         * @param {?=} AgentID
         * @return {?}
         */
        GoalSettingService.prototype._getOverviewDataByRestful = /**
         * @private
         * @param {?} performanceType
         * @param {?=} DataYear
         * @param {?=} AgentID
         * @return {?}
         */
            function (performanceType, DataYear, AgentID) {
                if (DataYear === void 0) {
                    DataYear = -1;
                }
                if (AgentID === void 0) {
                    AgentID = "";
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, GetGoalResp, GetYearConfigResp, goalSettingObj, GoalValues, goalSettingValueObj, YearConfig, GoalStatus, Step1, Step2, Step3, Step4, Step5, AgencyPlan, returnDatas, getGoalapi, getYearConfigapi, GoalMap, YearConfigMap, GoalObj, yearConfigObj, monthQuantityOfYear, PerformanceSettlementMonth, allYearActual, yearConfigExtData, goalSettingExtData, perCase, activityGoal, activityDays, agencyPlanObj, mainDataList, error_6;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.warn("performanceType: ", performanceType, " DataYear: ", DataYear, " AgentID: ", AgentID);
                                goalSettingValueObj = {};
                                YearConfig = new GoalSettingYearConfig();
                                GoalStatus = new GoalSettingGoalStatus();
                                Step1 = new GoalSettingStep1();
                                Step2 = new GoalSettingStep2();
                                Step3 = new GoalSettingStep3();
                                Step4 = new GoalSettingStep4();
                                Step5 = new GoalSettingStep5();
                                AgencyPlan = new AgencyPlanDataForOverview();
                                YearConfig.DataYear = DataYear;
                                GoalStatus.DataYear = DataYear;
                                returnDatas = new GoalSettingStepData(DataYear);
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 7, , 8]);
                                getGoalapi = this.APIFactory.getAPI("getGoal");
                                (( /** @type {?} */(getGoalapi))).setAgentID(AgentID);
                                getYearConfigapi = this.APIFactory.getAPI("getYearConfig");
                                (( /** @type {?} */(getYearConfigapi))).setAgentID(AgentID);
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(getGoalapi).toPromise(),
                                        this.dispatcher.dispatch(getYearConfigapi).toPromise()
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), GetGoalResp = _a[0], GetYearConfigResp = _a[1];
                                console.log("_getOverviewDataByRestful GetGoalResp", GetGoalResp);
                                console.log("_getOverviewDataByRestful GetYearConfigResp", GetYearConfigResp);
                                GoalMap = this.yearJsonToMap(GetGoalResp.Goals);
                                YearConfigMap = this.yearJsonToMap(GetYearConfigResp.Configurations);
                                GoalObj = GoalMap.get(DataYear);
                                yearConfigObj = YearConfigMap.get(DataYear);
                                if (!(GoalObj != undefined && yearConfigObj != undefined))
                                    return [3 /*break*/, 6];
                                goalSettingObj = GoalMap.get(DataYear).GoalSetting;
                                GoalValues = GoalMap.get(DataYear).GoalValue;
                                console.log("_getOverviewDataByRestful goalSettingObj", goalSettingObj);
                                console.log("_getOverviewDataByRestful GoalValues", GoalValues);
                                GoalValues.forEach(( /**
                                 * @param {?} GoalValue
                                 * @return {?}
                                 */function (GoalValue) {
                                    goalSettingValueObj[GoalValue.DataType] = GoalValue.Value;
                                }));
                                monthQuantityOfYear = yearConfigObj.MonthQuantityOfYear;
                                PerformanceSettlementMonth = yearConfigObj.PerformanceSettlementMonth;
                                return [4 /*yield*/, this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID)];
                            case 3:
                                Step4 = _b.sent();
                                Step4.Shortfall = this.calculateShortfall(Step1.FYFC, Step4.Forecast);
                                allYearActual = this.calculateActual(yearConfigObj.PerformanceSettlementMonth, Step4.MonthList);
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
                                    yearConfigExtData = this.yearConfigExtension.getExtensionData(yearConfigObj, { source: "Restful" });
                                    YearConfig.setExtension(yearConfigExtData);
                                }
                                GoalStatus.PersonnelGoalApplicableYM = goalSettingObj.PersonnelGoalApplicableYM;
                                GoalStatus.TeamGoalApplicableYM = goalSettingObj.TeamGoalApplicableYM;
                                GoalStatus.GoalSetMonth = goalSettingObj.GoalSetMonth;
                                GoalStatus.ApproveStatus = goalSettingObj.Status;
                                if (this.goalSettingExtension) {
                                    goalSettingExtData = this.goalSettingExtension.getExtensionData(goalSettingObj, { source: "Restful" });
                                    GoalStatus.setExtension(goalSettingExtData);
                                }
                                if (!(performanceType == i1.PERFORMANCETYPE.PERSONAL))
                                    return [3 /*break*/, 4];
                                Step1.FYFC = goalSettingValueObj.PERSON_FYFC;
                                Step1.AnnualConvention = goalSettingValueObj.ANNUAL_CONVENTION;
                                Step1.MDRT = goalSettingValueObj.MDRT;
                                Step1.PromotionPlan = goalSettingValueObj.PROMOTION_PLAN;
                                Step1.Actual = allYearActual;
                                Step1.FYFCNowToYearEnd = this.calculateNowToYearEndGoal(goalSettingValueObj.PERSON_FYFC, allYearActual);
                                Step2.PerCase = goalSettingValueObj.PER_CASE_FYFC;
                                perCase = goalSettingValueObj.PER_CASE_FYFC;
                                activityGoal = goalSettingValueObj.ACTIVITY_FYFC ? goalSettingValueObj.ACTIVITY_FYFC : goalSettingValueObj.PERSON_FYFC;
                                activityDays = goalSettingValueObj.ACTIVITY_DAYS ? goalSettingValueObj.ACTIVITY_DAYS : yearConfigObj.NowToYearEndDays;
                                Step3 = this.calculateActivityData(activityGoal, perCase, YearConfig, activityDays);
                                returnDatas.YearConfig = YearConfig;
                                returnDatas.GoalStatus = GoalStatus;
                                returnDatas.Step1 = Step1;
                                returnDatas.Step2 = Step2;
                                returnDatas.Step3 = Step3;
                                returnDatas.Step4 = Step4;
                                return [3 /*break*/, 6];
                            case 4:
                                Step5.TeamFYFC = goalSettingValueObj.TEAM_FYFC;
                                Step5.TeamANP = goalSettingValueObj.TEAM_ANP;
                                Step5.Manpower = goalSettingValueObj.TEAM_MANPOWER;
                                Step5.Recruitment = goalSettingValueObj.TEAM_RECRUITMENT;
                                return [4 /*yield*/, this.getAgencyPlanMainDataByRestful(DataYear, AgentID)];
                            case 5:
                                agencyPlanObj = _b.sent();
                                if (agencyPlanObj != null) {
                                    mainDataList = agencyPlanObj.AgencyMainDataList;
                                    AgencyPlan.FYFCForecast = mainDataList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "FYFC"; }))[0].Forecast;
                                    AgencyPlan.ANPForecast = mainDataList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "ANP"; }))[0].Forecast;
                                    AgencyPlan.ManpowerPlan = this.changeToDash(mainDataList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "Manpower"; }))[0].MonthPlan);
                                    AgencyPlan.RecruitmentPlan = mainDataList.filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.DataType == "Recruitment"; }))[0].MonthPlan;
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
                                _b.label = 6;
                            case 6:
                                returnDatas = this._converSelectCode(returnDatas);
                                if (this.goalSettingStep) {
                                    returnDatas = this.goalSettingStep.changeEmptyToDash(returnDatas);
                                }
                                return [3 /*break*/, 8];
                            case 7:
                                error_6 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00505', 'getOverviewDataByRestful fail!' + error_6.message));
                                return [3 /*break*/, 8];
                            case 8:
                                console.log("_getOverviewDataByRestful returnDatas", returnDatas, JSON.parse(JSON.stringify(returnDatas)));
                                return [2 /*return*/, returnDatas];
                        }
                    });
                });
            };
        //#endregion GoalSetting overview
        //#region get month actual & plan
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
        GoalSettingService.prototype.getMonthActualPlan =
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
            function (performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID) {
                if (monthQuantityOfYear === void 0) {
                    monthQuantityOfYear = 12;
                }
                if (PerformanceSettlementMonth === void 0) {
                    PerformanceSettlementMonth = 99;
                }
                if (AgentID === void 0) {
                    AgentID = "";
                }
                if (i1.StringUtils.isEmpty(AgentID)) {
                    return rxjs.from(this._getMonthActualPlanBySQL(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth));
                }
                else {
                    return rxjs.from(this._getMonthActualPlanByRestful(performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID));
                }
            };
        /**
         * @private
         * @param {?} performanceType
         * @param {?} DataYear
         * @param {?} monthQuantityOfYear
         * @param {?} PerformanceSettlementMonth
         * @param {?} AgentID
         * @return {?}
         */
        GoalSettingService.prototype._getMonthActualPlanByRestful = /**
         * @private
         * @param {?} performanceType
         * @param {?} DataYear
         * @param {?} monthQuantityOfYear
         * @param {?} PerformanceSettlementMonth
         * @param {?} AgentID
         * @return {?}
         */
            function (performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth, AgentID) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, GoalResp, ActualResp, returnDatas, MonthActualPlanList, getGoalapi, getActualapi, GoalPlanMap_1, ActuallMap_1, thisActual, i, error_7;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                // call GetGoalAPI (Restful set AgentID)
                                returnDatas = new GoalSettingStep4();
                                MonthActualPlanList = [];
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                getGoalapi = this.APIFactory.getAPI("getGoal");
                                getActualapi = this.APIFactory.getAPI("getActual");
                                (( /** @type {?} */(getGoalapi))).setAgentID(AgentID);
                                (( /** @type {?} */(getActualapi))).setAgentID(AgentID);
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(getGoalapi).toPromise(),
                                        this.dispatcher.dispatch(getActualapi).toPromise()
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), GoalResp = _a[0], ActualResp = _a[1];
                                console.log("GoalResp", GoalResp);
                                console.log("ActualResp", ActualResp);
                                GoalPlanMap_1 = new Map();
                                ActuallMap_1 = new Map();
                                thisActual = [];
                                if (GoalResp.Goals != null && ActualResp.Actual != null) {
                                    GoalResp.Goals.forEach(( /**
                                     * @param {?} Goal
                                     * @return {?}
                                     */function (Goal) {
                                        if (Goal.DataYear == DataYear && Goal.GoalPlan.Values != null) {
                                            Goal.GoalPlan.Values.forEach(( /**
                                             * @param {?} plan
                                             * @return {?}
                                             */function (plan) {
                                                if (plan.PerformanceType == performanceType) {
                                                    GoalPlanMap_1.set(plan.Month, plan.Value.toString());
                                                }
                                            }));
                                        }
                                    }));
                                    thisActual = ActualResp.Actual.filter(( /**
                                     * @param {?} Actual
                                     * @return {?}
                                     */function (Actual) { return Actual.DataYear == DataYear; })).map(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.Values; }));
                                    console.log("thisActual", thisActual);
                                    thisActual.forEach(( /**
                                     * @param {?} Actual
                                     * @return {?}
                                     */function (Actual) {
                                        Actual.forEach(( /**
                                         * @param {?} value
                                         * @return {?}
                                         */function (value) {
                                            if (value.DataType == "FYFC" && value.PerformanceType == performanceType) {
                                                ActuallMap_1.set(value.Month, value.Value.toString());
                                            }
                                        }));
                                    }));
                                }
                                else {
                                    throw "get Goal fail. GoalResp:" + GoalResp;
                                }
                                for (i = 1; i <= monthQuantityOfYear; i++) {
                                    MonthActualPlanList.push(new MonthlyPlanFYFCData(i, this.changeToDash(GoalPlanMap_1.get(i)), ActuallMap_1.get(i) == null || i > PerformanceSettlementMonth ? this.DASH : ActuallMap_1.get(i)));
                                }
                                returnDatas.MonthList = MonthActualPlanList;
                                returnDatas.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                                returnDatas.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                                returnDatas.Shortfall = null;
                                return [3 /*break*/, 4];
                            case 3:
                                error_7 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00410', 'getMonthActualPlanByRestful fail!' + error_7.message));
                                return [3 /*break*/, 4];
                            case 4:
                                console.log("_getMonthActualPlanByRestful Datas", returnDatas);
                                return [2 /*return*/, returnDatas];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} performanceType
         * @param {?} DataYear
         * @param {?} monthQuantityOfYear
         * @param {?} PerformanceSettlementMonth
         * @return {?}
         */
        GoalSettingService.prototype._getMonthActualPlanBySQL = /**
         * @private
         * @param {?} performanceType
         * @param {?} DataYear
         * @param {?} monthQuantityOfYear
         * @param {?} PerformanceSettlementMonth
         * @return {?}
         */
            function (performanceType, DataYear, monthQuantityOfYear, PerformanceSettlementMonth) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, returnData, MonthActualPlanList, actualResp, goalPlanResp, goalPlanList_1, actualList_1, goalPlan, actual, i, error_8;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log('_getMonthActualPlanBySQL performanceType', performanceType, 'DataYear', DataYear, 'monthQuantityOfYear', monthQuantityOfYear, 'PerformanceSettlementMonth', PerformanceSettlementMonth);
                                returnData = new GoalSettingStep4();
                                MonthActualPlanList = [];
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                actualResp = void 0;
                                goalPlanResp = void 0;
                                // call GetGoalSettingValue       // call GetActualValue
                                goalPlanList_1 = Array(monthQuantityOfYear).fill(this.DASH, 0);
                                actualList_1 = Array(monthQuantityOfYear).fill(this.DASH, 0);
                                goalPlan = this.APIFactory.getAPI("getGoalSettingPlan");
                                actual = this.APIFactory.getAPI("getGoalSettingActualValue");
                                (( /** @type {?} */(goalPlan))).setDataYear(DataYear);
                                (( /** @type {?} */(actual))).setDataYear(DataYear);
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(goalPlan).toPromise(),
                                        this.dispatcher.dispatch(actual).toPromise()
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), goalPlanResp = _a[0], actualResp = _a[1];
                                console.log("goalPlanResp", goalPlanResp);
                                console.log("actualResp", actualResp);
                                if (goalPlanResp.Header["status"] && actualResp.Header["status"]) {
                                    goalPlanResp["Body"].filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.PerformanceType == performanceType; })).map(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) {
                                        goalPlanList_1[x.Month - 1] = x.Value.toString();
                                    }));
                                    actualResp["Body"].filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.PerformanceType == performanceType && x.DataType == "FYFC" && x.Month <= PerformanceSettlementMonth; })).map(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) {
                                        actualList_1[x.Month - 1] = x.Value.toString();
                                    }));
                                }
                                else {
                                    throw "get GoalSetting fail. goalPlanResp" + goalPlanResp.Header.msg + 'actualResp:' + actualResp.Header.msg;
                                }
                                console.log("goalPlanList", goalPlanList_1);
                                console.log("actuallist", actualList_1);
                                for (i = 1; i <= monthQuantityOfYear; i++) {
                                    MonthActualPlanList.push(new MonthlyPlanFYFCData(i, goalPlanList_1[i - 1], actualList_1[i - 1]));
                                }
                                returnData.MonthList = MonthActualPlanList;
                                returnData.Actual = this.calculateActual(PerformanceSettlementMonth, MonthActualPlanList).toString();
                                returnData.Forecast = this.calculateForecast(PerformanceSettlementMonth, MonthActualPlanList).toString();
                                returnData.Shortfall = null;
                                return [3 /*break*/, 4];
                            case 3:
                                error_8 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00411', 'getMonthActualPlanBySQL fail!' + error_8.message));
                                return [3 /*break*/, 4];
                            case 4:
                                console.log("_getMonthActualPlanBySQL returnData", returnData);
                                return [2 /*return*/, returnData];
                        }
                    });
                });
            };
        //#endregion get month actual & plan
        //#region AgencyPlan Datas
        //#endregion get month actual & plan
        //#region AgencyPlan Datas
        /**
         * @param {?} dataYear
         * @param {?=} AgentID
         * @return {?}
         */
        GoalSettingService.prototype.getAgencyPlanMainData =
            //#endregion get month actual & plan
            //#region AgencyPlan Datas
            /**
             * @param {?} dataYear
             * @param {?=} AgentID
             * @return {?}
             */
            function (dataYear, AgentID) {
                if (AgentID === void 0) {
                    AgentID = "";
                }
                if (AgentID == "") {
                    return rxjs.from(this.getAgencyPlanMainDataBySQL(dataYear));
                }
                else if (AgentID != "") {
                    return rxjs.from(this.getAgencyPlanMainDataByRestful(dataYear, AgentID));
                }
            };
        /**
         * @private
         * @param {?} dataYear
         * @return {?}
         */
        GoalSettingService.prototype.getAgencyPlanMainDataBySQL = /**
         * @private
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, returnData, otherParaResp, agencyPlanResp, getOtherParameterAPI, agencyPlanGetMainAPI, respFilterCompletionRate, completionRate, returnList, AgencyPlanMainList, error_9;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log('getAgencyPlanMainDataBySQL DataYear', dataYear);
                                returnData = new AgencyPlanMainInfo();
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                //get completionRate 
                                getOtherParameterAPI = ( /** @type {?} */(this.APIFactory.getAPI('getOtherParameter')));
                                agencyPlanGetMainAPI = ( /** @type {?} */((this.APIFactory.getAPI("getAgencyPlanMain"))));
                                getOtherParameterAPI.SetYear(dataYear);
                                agencyPlanGetMainAPI.setDataYear(dataYear);
                                return [4 /*yield*/, Promise.all([getOtherParameterAPI, agencyPlanGetMainAPI].map(( /**
                                         * @param {?} api
                                         * @return {?}
                                         */function (api) { return _this.dispatcher.dispatch(api).toPromise(); })))];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), otherParaResp = _a[0], agencyPlanResp = _a[1];
                                console.log('otherParaResp: ', otherParaResp, "agencyPlanResp", agencyPlanResp);
                                if (otherParaResp.Header["status"] && agencyPlanResp.Header["status"]) {
                                    respFilterCompletionRate = otherParaResp['Body'].filter(( /**
                                     * @param {?} x
                                     * @return {?}
                                     */function (x) { return x.MappingID === "CompletionRate"; }));
                                    completionRate = respFilterCompletionRate.length > 0 ? respFilterCompletionRate[0].SetValue : '';
                                    returnList = [];
                                    AgencyPlanMainList = agencyPlanResp["Body"];
                                    console.log("getAgencyPlanMainDataBySQL AgencyPlanMainList", AgencyPlanMainList);
                                    if (AgencyPlanMainList) {
                                        returnList = (( /** @type {?} */(AgencyPlanMainList))).map(( /**
                                         * @param {?} main
                                         * @return {?}
                                         */function (main) { return _this._agencyPlanMainDataObjToBean(main); }));
                                    }
                                    else {
                                        throw "get AgencyPlanMainList fail.";
                                    }
                                    console.log('getAgencyPlanMainDataBySQL returnList:', returnList);
                                    console.log('completionRate:', completionRate);
                                    returnData.CompletionRate = completionRate;
                                    returnData.AgencyMainDataList = returnList;
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                error_9 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00300', 'getAgencyPlanMainDataBySQL fail!' + error_9));
                                return [3 /*break*/, 4];
                            case 4:
                                console.log("getAgencyPlanMainDataBySQL returnData", returnData);
                                return [2 /*return*/, returnData];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} object
         * @return {?}
         */
        GoalSettingService.prototype._agencyPlanMainDataObjToBean = /**
         * @private
         * @param {?} object
         * @return {?}
         */
            function (object) {
                /** @type {?} */
                var agencyPlanMainData = new AgencyPlanMainData();
                agencyPlanMainData.Actual = object.Actual;
                agencyPlanMainData.DataType = object.DataType;
                agencyPlanMainData.DataYear = object.DataYear;
                agencyPlanMainData.Forecast = object.Forecast;
                agencyPlanMainData.MonthPlan = this.changeToDash(object.MonthPlan);
                return agencyPlanMainData;
            };
        /**
         * @private
         * @param {?} dataYear
         * @param {?} AgentID
         * @return {?}
         */
        GoalSettingService.prototype.getAgencyPlanMainDataByRestful = /**
         * @private
         * @param {?} dataYear
         * @param {?} AgentID
         * @return {?}
         */
            function (dataYear, AgentID) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnData, MainList, getAgencyPlanAPI_1, agencyPlanResp, agencyPlanMap, completionRate, tempAgencyPlanList, error_10;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('getAgencyPlanMainDataByRestful dataYear', dataYear, 'AgentID', AgentID);
                                returnData = new AgencyPlanMainInfo();
                                MainList = [];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                getAgencyPlanAPI_1 = ( /** @type {?} */((this.APIFactory.getAPI("getAgencyPlan"))));
                                getAgencyPlanAPI_1.setAgentID(AgentID);
                                return [4 /*yield*/, this.dispatcher.dispatch(getAgencyPlanAPI_1).toPromise()];
                            case 2:
                                agencyPlanResp = _a.sent();
                                console.log("getAgencyPlanMainDataByRestful agencyPlanResp ", agencyPlanResp);
                                if (agencyPlanResp.AgencyPlans != null) {
                                    agencyPlanMap = this.yearJsonToMap(agencyPlanResp.AgencyPlans);
                                    completionRate = agencyPlanMap.get(dataYear).CompletionRate;
                                    tempAgencyPlanList = agencyPlanMap.get(dataYear).Values;
                                    (( /** @type {?} */(tempAgencyPlanList))).forEach(( /**
                                     * @param {?} plan
                                     * @return {?}
                                     */function (plan) {
                                        plan['MonthPlan'] = plan['Plan'];
                                        plan['DataYear'] = dataYear;
                                    }));
                                    MainList = (( /** @type {?} */(tempAgencyPlanList))).map(( /**
                                     * @param {?} plan
                                     * @return {?}
                                     */function (plan) { return _this._agencyPlanMainDataObjToBean(plan); }));
                                    returnData.AgencyMainDataList = MainList;
                                    returnData.CompletionRate = completionRate;
                                }
                                else {
                                    throw "get AgencyPlan fail. agencyPlanResp:" + agencyPlanResp;
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                error_10 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError('F00301', 'getAgencyPlanMainDataByRestful fail!' + error_10.message));
                                return [3 /*break*/, 4];
                            case 4:
                                console.log("getAgencyPlanMainDataByRestful returnData ", returnData);
                                return [2 /*return*/, returnData];
                        }
                    });
                });
            };
        /**
         * @param {?} dataYear
         * @return {?}
         */
        GoalSettingService.prototype.getAgencyPlanDetailData = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                var _this = this;
                /** @type {?} */
                var agencyPlanGetDetailAPI = ( /** @type {?} */(this.APIFactory.getAPI("getAgencyPlanDetail")));
                agencyPlanGetDetailAPI.setDataYear(dataYear);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    try {
                        _this.dispatcher.dispatch(agencyPlanGetDetailAPI).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            if (resp["Body"]) {
                                /** @type {?} */
                                var returnList = [];
                                // let AgencyPlanDetailList: Array<AgencyPlanDetail> = resp["Body"];
                                returnList = (( /** @type {?} */(resp["Body"]))).map(( /**
                                 * @param {?} item
                                 * @return {?}
                                 */function (item) { return _this._agencyPlanDetailObjToBean(item); }));
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
                        _this.errorHandler.handleError(new i1.APPError('F00302', 'getAgencyPlanDetailData fail!' + error.message));
                    }
                }));
            };
        /**
         * @private
         * @param {?} object
         * @return {?}
         */
        GoalSettingService.prototype._agencyPlanDetailObjToBean = /**
         * @private
         * @param {?} object
         * @return {?}
         */
            function (object) {
                /** @type {?} */
                var agencyPlanDetail = new AgencyPlanDetail();
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
            };
        /**
         * @param {?} dataYear
         * @return {?}
         */
        GoalSettingService.prototype.getGoalExpected = /**
         * @param {?} dataYear
         * @return {?}
         */
            function (dataYear) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, returnAgencyPlanGoalExpected, goalSettingYearConfigAPI, goalSettingGetExpectedAPI, yearConfigResp, goalExpectedResp, expectedRespBody, yearConfigRespBody, error_11;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                goalSettingYearConfigAPI = ( /** @type {?} */(this.APIFactory.getAPI("getGoalSettingYearConfig")));
                                goalSettingYearConfigAPI.setDataYear(dataYear);
                                goalSettingGetExpectedAPI = ( /** @type {?} */(this.APIFactory.getAPI("getGoalSettingExpected")));
                                goalSettingGetExpectedAPI.setDataYear(dataYear);
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                yearConfigResp = void 0;
                                goalExpectedResp = void 0;
                                return [4 /*yield*/, Promise.all([
                                        this.dispatcher.dispatch(goalSettingYearConfigAPI).toPromise(),
                                        this.dispatcher.dispatch(goalSettingGetExpectedAPI).toPromise()
                                    ])];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 2]), yearConfigResp = _a[0], goalExpectedResp = _a[1];
                                if (goalExpectedResp && yearConfigResp) {
                                    expectedRespBody = goalExpectedResp["Body"];
                                    yearConfigRespBody = yearConfigResp["Body"];
                                    returnAgencyPlanGoalExpected = expectedRespBody.length > 0 ? this._agencyPlanGoalExpectedObjToBean(expectedRespBody[0]) : new AgencyPlanGoalExpected(dataYear);
                                    returnAgencyPlanGoalExpected.FYFCConvertANPRate = yearConfigRespBody[0]['FyfcCovertAnpRate'];
                                    returnAgencyPlanGoalExpected.WorkingQuarter = yearConfigRespBody[0]['WorkingQuarter'];
                                    console.log("getGoalExpected trans", returnAgencyPlanGoalExpected);
                                }
                                else {
                                    throw "get goal expected and yearConfigfail.";
                                }
                                return [2 /*return*/, returnAgencyPlanGoalExpected];
                            case 3:
                                error_11 = _b.sent();
                                this.errorHandler.handleError(new i1.APPError('F00303', 'getGoalExpected fail!' + error_11.message));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} object
         * @return {?}
         */
        GoalSettingService.prototype._agencyPlanGoalExpectedObjToBean = /**
         * @private
         * @param {?} object
         * @return {?}
         */
            function (object) {
                /** @type {?} */
                var goalExpected = new AgencyPlanGoalExpected(object.DataYear);
                goalExpected.ANP = object.ANP.toString();
                goalExpected.FYFC = object.FYFC.toString();
                goalExpected.Q1 = object.Q1.toString();
                goalExpected.Q2 = object.Q2.toString();
                goalExpected.Q3 = object.Q3.toString();
                goalExpected.Q4 = object.Q4.toString();
                /** @type {?} */
                var numberRecruitmentTotal = i1.NumberUtils.isNumber(object.RecruitmentTotal) ? Number(object.RecruitmentTotal) : 0;
                goalExpected.RecruitmentTotal = numberRecruitmentTotal;
                return goalExpected;
            };
        /**
         * @param {?} goalExpected
         * @return {?}
         */
        GoalSettingService.prototype.calculaRecruitmentSum = /**
         * @param {?} goalExpected
         * @return {?}
         */
            function (goalExpected) {
                return [goalExpected.Q1, goalExpected.Q2, goalExpected.Q3, goalExpected.Q4].reduce(( /**
                 * @param {?} total
                 * @param {?} each
                 * @return {?}
                 */function (total, each) {
                    /** @type {?} */
                    var numberQ = i1.NumberUtils.isNumber(each) ? Number(each) : 0;
                    return total + numberQ;
                }), 0);
            };
        /**
         * @param {?} expectedRecruitment
         * @param {?} indirectRecruitment
         * @return {?}
         */
        GoalSettingService.prototype.saveGoalExpected = /**
         * @param {?} expectedRecruitment
         * @param {?} indirectRecruitment
         * @return {?}
         */
            function (expectedRecruitment, indirectRecruitment) {
                var _this = this;
                /** @type {?} */
                var goalSettingSetExpectedAPI = ( /** @type {?} */(this.APIFactory.getAPI("setGoalSettingExpected")));
                goalSettingSetExpectedAPI.setExpectedRecruitment(expectedRecruitment);
                goalSettingSetExpectedAPI.setIndirectRecruitment(indirectRecruitment);
                return rxjs.Observable.create(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    try {
                        _this.dispatcher.dispatch(goalSettingSetExpectedAPI).subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
                            observer.next(resp["Header"]);
                            observer.complete();
                        }));
                    }
                    catch (error) {
                        _this.errorHandler.handleError(new i1.APPError('F00304', 'saveGoalExpected fail!' + error.message));
                    }
                }));
            };
        //#endregion AgencyPlan Datas
        //#region other function
        //#endregion AgencyPlan Datas
        //#region other function
        /**
         * @param {?} n
         * @param {?} toFix
         * @return {?}
         */
        GoalSettingService.prototype.numberToFix =
            //#endregion AgencyPlan Datas
            //#region other function
            /**
             * @param {?} n
             * @param {?} toFix
             * @return {?}
             */
            function (n, toFix) {
                /** @type {?} */
                var fix10 = Math.pow(10, toFix);
                /** @type {?} */
                var returnData = Math.round(this.strip(n) * fix10) / fix10;
                return returnData;
            };
        /**
         * @param {?} num
         * @param {?=} precision
         * @return {?}
         */
        GoalSettingService.prototype.strip = /**
         * @param {?} num
         * @param {?=} precision
         * @return {?}
         */
            function (num, precision) {
                if (precision === void 0) {
                    precision = 12;
                }
                return Number(num.toPrecision(precision));
            };
        /**
         * @param {?} FYFC
         * @param {?} actual
         * @return {?}
         */
        GoalSettingService.prototype.calculateNowToYearEndGoal = /**
         * @param {?} FYFC
         * @param {?} actual
         * @return {?}
         */
            function (FYFC, actual) {
                console.log("calculateNowToYearEndGoal FYFC:", FYFC, "actual:", actual);
                /** @type {?} */
                var caculeteActual = i1.NumberUtils.isNumber(actual) ? Number(actual) : 0;
                if (!i1.NumberUtils.isNumber(FYFC)) {
                    return this.DASH;
                }
                else {
                    /** @type {?} */
                    var result = Number(FYFC) - caculeteActual < 0 ? 0 : Number(FYFC) - caculeteActual;
                    return result.toString();
                }
            };
        /**
         * @param {?} NowToYearEnd
         * @param {?} actual
         * @return {?}
         */
        GoalSettingService.prototype.calculateAllYearGoal = /**
         * @param {?} NowToYearEnd
         * @param {?} actual
         * @return {?}
         */
            function (NowToYearEnd, actual) {
                console.log("calculateNowToYearEndGoal NowToYearEnd:", NowToYearEnd, "actual:", actual);
                /** @type {?} */
                var caculeteActual = i1.NumberUtils.isNumber(actual) ? Number(actual) : 0;
                if (!i1.NumberUtils.isNumber(NowToYearEnd)) {
                    return this.DASH;
                }
                else {
                    return (Number(NowToYearEnd) + caculeteActual).toString();
                }
            };
        Object.defineProperty(GoalSettingService.prototype, "saveFeedbackState", {
            get: /**
             * @return {?}
             */ function () {
                return this._isPopup;
            },
            set: /**
             * @param {?} isPopup
             * @return {?}
             */ function (isPopup) {
                this._isPopup = isPopup;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} list
         * @param {?} actualMonth
         * @return {?}
         */
        GoalSettingService.prototype.getActualPlanFromMonthList = /**
         * @param {?} list
         * @param {?} actualMonth
         * @return {?}
         */
            function (list, actualMonth) {
                console.log("getActualPlanFromMonthList:", list, actualMonth);
                return list.map(( /**
                 * @param {?} x
                 * @param {?} index
                 * @return {?}
                 */function (x, index) { return (index + 1 < actualMonth || index + 1 === actualMonth ? x.Actual : x.Plan); }));
            };
        /**
         * @param {?} FYFC
         * @param {?} rate
         * @return {?}
         */
        GoalSettingService.prototype.calculateANPFromFYFC = /**
         * @param {?} FYFC
         * @param {?} rate
         * @return {?}
         */
            function (FYFC, rate) {
                if (i1.StringUtils.isEmpty(FYFC) || FYFC == this.DASH) {
                    return this.DASH;
                }
                else {
                    return this.numberToFix(Number(FYFC) * Number(rate), 0).toString();
                }
            };
        /**
         * @param {?} ANP
         * @param {?} rate
         * @return {?}
         */
        GoalSettingService.prototype.calculateFYFCFromANP = /**
         * @param {?} ANP
         * @param {?} rate
         * @return {?}
         */
            function (ANP, rate) {
                if (i1.StringUtils.isEmpty(ANP) || ANP == this.DASH) {
                    return this.DASH;
                }
                else {
                    return this.numberToFix(Number(ANP) / Number(rate), 0).toString();
                }
            };
        //#endregion other function
        //#region Sync Datas 
        //#endregion other function
        //#region Sync Datas 
        /**
         * @return {?}
         */
        GoalSettingService.prototype.syncGoalDatas =
            //#endregion other function
            //#region Sync Datas 
            /**
             * @return {?}
             */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.goalStore.setSyncGoalDatas(SYNC_STATUS.SYNC);
                                return [4 /*yield*/, this.dataSyncService.syncFunc(["GOAL", "PROGRESS"], true)];
                            case 1:
                                _a.sent();
                                this.goalStore.setSyncGoalDatas(SYNC_STATUS.FINISH);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        GoalSettingService.prototype.syncAgencyPlan = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.dataSyncService.syncFunc(["AGENCY_PLAN"], true)];
                    });
                });
            };
        /**
         * @return {?}
         */
        GoalSettingService.prototype.syncYearConfig = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.dataSyncService.syncFunc(["YEAR_CONFIG"], true)];
                    });
                });
            };
        /**
         * @param {?} approveInfo
         * @return {?}
         */
        GoalSettingService.prototype.pushApproveGoal = /**
         * @param {?} approveInfo
         * @return {?}
         */
            function (approveInfo) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this._pushApproveGoal(approveInfo)];
                    });
                });
            };
        /**
         * @param {?} param
         * @return {?}
         */
        GoalSettingService.prototype.changeToDash = /**
         * @param {?} param
         * @return {?}
         */
            function (param) {
                return (param === -1 || param === null || param === "") ? this.DASH : param.toString();
            };
        //#endregion Sync Datas 
        //#endregion Sync Datas 
        /**
         * @private
         * @param {?} approveInfo
         * @return {?}
         */
        GoalSettingService.prototype._pushApproveGoal =
            //#endregion Sync Datas 
            /**
             * @private
             * @param {?} approveInfo
             * @return {?}
             */
            function (approveInfo) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnResp, approveInfoData, mainData, pushApproveData, getResp, error_12;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                returnResp = new i1.SuccessStatus(false);
                                approveInfoData = {
                                    "AgentID": approveInfo.AgentID,
                                    "DataYear": approveInfo.DataYear,
                                    "isApprove": approveInfo.IsApprove,
                                    "comment": approveInfo.Comment
                                };
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 6, , 7]);
                                mainData = approveInfoData;
                                pushApproveData = this.APIFactory.getAPI("pushApproveGoal");
                                (( /** @type {?} */(pushApproveData))).mainData = mainData;
                                console.log('pushApproveGoal mainData', mainData);
                                return [4 /*yield*/, this.dispatcher.dispatch(pushApproveData).toPromise()];
                            case 2:
                                getResp = _a.sent();
                                console.log('getResp', getResp);
                                if (!getResp.success)
                                    return [3 /*break*/, 4];
                                return [4 /*yield*/, this.dataSyncService.syncFunc(["DASHBOARD", "GOAL", "PROGRESS"])];
                            case 3:
                                _a.sent();
                                returnResp.isSuccess = true;
                                return [3 /*break*/, 5];
                            case 4: throw "Approve Goal fail.";
                            case 5: return [3 /*break*/, 7];
                            case 6:
                                error_12 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError('F00100', 'pushApproveGoal fail!' + error_12.message));
                                return [3 /*break*/, 7];
                            case 7:
                                console.log("[_pushApproveGoal] returnResp:", returnResp);
                                return [2 /*return*/, returnResp];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} submitDatas
         * @return {?}
         */
        GoalSettingService.prototype._pushGoalSetting = /**
         * @private
         * @param {?} submitDatas
         * @return {?}
         */
            function (submitDatas) {
                return __awaiter(this, void 0, void 0, function () {
                    var returnResp, pushGoalSettingData, getResp, error_13;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                returnResp = new i1.SuccessStatus(false);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                console.log('pushGoalSettingDataAPI mainData', submitDatas);
                                pushGoalSettingData = this.APIFactory.getAPI("pushGoalSettingData");
                                (( /** @type {?} */(pushGoalSettingData))).mainData = submitDatas;
                                return [4 /*yield*/, this.dispatcher.dispatch(pushGoalSettingData).toPromise()];
                            case 2:
                                getResp = _a.sent();
                                if (getResp.success) {
                                    returnResp.isSuccess = true;
                                }
                                else {
                                    throw "push Goal failed," + getResp.Header.msg;
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                error_13 = _a.sent();
                                this.errorHandler.handleError(new i1.APPError('F00101', error_13));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/, returnResp];
                        }
                    });
                });
            };
        /**
         * @private
         * @param {?} StepData
         * @return {?}
         */
        GoalSettingService.prototype._converSelectCode = /**
         * @private
         * @param {?} StepData
         * @return {?}
         */
            function (StepData) {
                var _this = this;
                this.ColMapToProfile.forEach(( /**
                 * @param {?} code
                 * @param {?} col
                 * @return {?}
                 */function (code, col) {
                    /** @type {?} */
                    var profileCodes = _this.ColMapToProfileCodeMap.get(col);
                    if (profileCodes.length && StepData.Step1 && StepData.Step1[col]) {
                        /** @type {?} */
                        var colVal_1 = StepData.Step1[col];
                        profileCodes = profileCodes.filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return x.getCode() == colVal_1; }));
                        StepData.Step1[col] = profileCodes.length ? profileCodes[0].getMappingID() : _this.DASH;
                    }
                }));
                return StepData;
            };
        GoalSettingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        GoalSettingService.ctorParameters = function () {
            return [
                { type: i1.APIDispatch },
                { type: i1.APIFactory },
                { type: GoalStoreService },
                { type: i0.ErrorHandler },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [goalSettingStepToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.yearConfigExtensionDataToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.goalSettingExtensionDataToken,] }] },
                { type: i1.DataSyncService },
                { type: i1.ProfileCodeService }
            ];
        };
        /** @nocollapse */ GoalSettingService.ngInjectableDef = i0.defineInjectable({ factory: function GoalSettingService_Factory() { return new GoalSettingService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(GoalStoreService), i0.inject(i0.ErrorHandler), i0.inject(goalSettingStepToken, 8), i0.inject(i1.yearConfigExtensionDataToken, 8), i0.inject(i1.goalSettingExtensionDataToken, 8), i0.inject(i1.DataSyncService), i0.inject(i1.ProfileCodeService)); }, token: GoalSettingService, providedIn: "root" });
        __decorate([
            i1.Valid('GoalSettingStepData'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Boolean]),
            __metadata("design:returntype", rxjs.Observable)
        ], GoalSettingService.prototype, "getGoalSettingStep1_5Data", null);
        __decorate([
            i1.Valid('GoalSettingStep3'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, GoalSettingYearConfig, String]),
            __metadata("design:returntype", GoalSettingStep3)
        ], GoalSettingService.prototype, "calculateActivityData", null);
        __decorate([
            i1.Valid('GoalSettingStep4'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [GoalSettingYearConfig, String, Array]),
            __metadata("design:returntype", GoalSettingStep4)
        ], GoalSettingService.prototype, "calculateMonthActualPlan", null);
        __decorate([
            i1.Valid('IsApproveInfo'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, GoalSettingStepData]),
            __metadata("design:returntype", rxjs.Observable)
        ], GoalSettingService.prototype, "isNeedApprove", null);
        __decorate([
            i1.Valid('IsApproveInfo'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number]),
            __metadata("design:returntype", rxjs.Observable)
        ], GoalSettingService.prototype, "isNeedApprove_plan", null);
        __decorate([
            i1.Valid('SuccessStatus'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Boolean, GoalSettingStepData]),
            __metadata("design:returntype", rxjs.Observable)
        ], GoalSettingService.prototype, "submitGoal", null);
        __decorate([
            i1.Valid('GoalSettingStepData'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", rxjs.Observable)
        ], GoalSettingService.prototype, "getOverviewData", null);
        __decorate([
            i1.Valid('GoalSettingStep4'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Number, Number, String]),
            __metadata("design:returntype", rxjs.Observable)
        ], GoalSettingService.prototype, "getMonthActualPlan", null);
        __decorate([
            i1.Valid('AgencyPlanDetail'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", rxjs.Observable)
        ], GoalSettingService.prototype, "getAgencyPlanDetailData", null);
        __decorate([
            i1.Valid('AgencyPlanGoalExpected'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", Promise)
        ], GoalSettingService.prototype, "getGoalExpected", null);
        __decorate([
            i1.Valid('SuccessStatus'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [ApproveInfo]),
            __metadata("design:returntype", Promise)
        ], GoalSettingService.prototype, "pushApproveGoal", null);
        return GoalSettingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalValidService = /** @class */ (function () {
        function GoalValidService(errorHandler, goalSettingService, goalSettingStep, goalValid) {
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
        GoalValidService.prototype.onChangeValid =
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
            function (step, colId, val, validDatas, isAdjust, errorResult, isPageValid) {
                if (isPageValid === void 0) {
                    isPageValid = false;
                }
                console.log("onChangeValid colId", colId, "val", val, 'validDatas', validDatas, errorResult, 'isPageValid', isPageValid);
                try {
                    /** @type {?} */
                    var isDecimalResult = void 0;
                    /** @type {?} */
                    var PlanEmpty = colId.indexOf("Plan_") != -1 && i1.StringUtils.isEmpty(val);
                    /** @type {?} */
                    var RequiredEmpty = this.requiredValid.indexOf(colId) != -1 && i1.StringUtils.isEmpty(val);
                    /** @type {?} */
                    var numberPositive = this.numberValid.indexOf(colId) != -1 && !i1.NumberUtils.isPositive(val);
                    /** @type {?} */
                    var vaildEmptyResult = RequiredEmpty || numberPositive || PlanEmpty;
                    //負數的error msg 也是_required
                    /** @type {?} */
                    var requiredErrorMsg = (colId.indexOf("Plan_") != -1) ? "Plan_required" : colId + "_required";
                    errorResult = this._setError(step, colId, "_required", vaildEmptyResult, errorResult, requiredErrorMsg); //判斷是否是負數或是空值
                    if (!vaildEmptyResult && (this.numberValid.indexOf(colId) != -1 || colId.indexOf("Plan_") != -1)) { //判斷不是空值或負數才繼續往下驗證
                        isDecimalResult = i1.NumberUtils.isDecimal(val);
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
                            var FYFCSmallValid = Number(validDatas.Step1.Actual) > Number(validDatas.Step1.FYFC);
                            /** @type {?} */
                            var FYFCNowToYearEndIsPositive = i1.NumberUtils.isPositive(validDatas.Step1.FYFCNowToYearEnd);
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
                                    var TeamFYFCSmallValid = Number(validDatas.Step5.TeamFYFCActual) > Number(validDatas.Step5.TeamFYFC);
                                    /** @type {?} */
                                    var TeamFYFCNowToYearEndIsPositive = i1.NumberUtils.isPositive(validDatas.Step5.TeamFYFCNowToYearEnd);
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
                    this.errorHandler.handleError(new i1.APPError('F00406', 'onChangeValid fail!' + error.message));
                }
                console.log('onChangeValid errorResult', errorResult);
                return errorResult;
            };
        /**
         * @param {?} step
         * @param {?} validDatas
         * @param {?} isAdjust
         * @return {?}
         */
        GoalValidService.prototype.pageValid = /**
         * @param {?} step
         * @param {?} validDatas
         * @param {?} isAdjust
         * @return {?}
         */
            function (step, validDatas, isAdjust) {
                var _this = this;
                console.log('pageValid step', step, 'validDatas', JSON.stringify(validDatas), isAdjust);
                /** @type {?} */
                var errorResult = [];
                /** @type {?} */
                var steplist = [5, 4, 2, 1];
                try {
                    steplist.forEach(( /**
                     * @param {?} stepNum
                     * @return {?}
                     */function (stepNum) {
                        //判斷傳進來的步驟大於或等於驗證步驟才驗證
                        if (step >= stepNum && validDatas["Step" + stepNum] != null && validDatas["Step" + stepNum] != undefined) {
                            errorResult = _this.unitPageValid(stepNum, validDatas, isAdjust, errorResult);
                        }
                    }));
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00407', 'pageValid fail!' + error.message));
                }
                return errorResult;
            };
        /**
         * @param {?} step
         * @param {?} validDatas
         * @param {?} isAdjust
         * @param {?} errorResult
         * @return {?}
         */
        GoalValidService.prototype.unitPageValid = /**
         * @param {?} step
         * @param {?} validDatas
         * @param {?} isAdjust
         * @param {?} errorResult
         * @return {?}
         */
            function (step, validDatas, isAdjust, errorResult) {
                var _this = this;
                /** @type {?} */
                var stepColMap = new Map();
                /** @type {?} */
                var step1Cols = ["FYFC", "AnnualConvention", "MDRT", "PromotionPlan"];
                /** @type {?} */
                var step2Cols = ["PerCase"];
                /** @type {?} */
                var step5Cols = ["TeamFYFC", "TeamANP", "Manpower", "Recruitment"];
                stepColMap.set(1, step1Cols);
                stepColMap.set(2, step2Cols);
                stepColMap.set(5, step5Cols);
                if (step == 4) {
                    //驗證第4步
                    /** @type {?} */
                    var monthList = validDatas.Step4.MonthList;
                    /** @type {?} */
                    var performanceSettlementMonth_1 = validDatas.YearConfig.PerformanceSettlementMonth;
                    monthList.filter(( /**
                     * @param {?} obj
                     * @return {?}
                     */function (obj) { return obj.Month > performanceSettlementMonth_1; })).forEach(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) {
                        errorResult = _this.onChangeValid(4, "Plan_" + x.Month, x.Plan, validDatas, false, errorResult, true);
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
                    var stepCols = stepColMap.get(step);
                    stepCols.forEach(( /**
                     * @param {?} col
                     * @return {?}
                     */function (col) {
                        errorResult = _this.onChangeValid(step, col, validDatas["Step" + step][col], validDatas, isAdjust, errorResult, true);
                    }));
                }
                return errorResult;
            };
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
        GoalValidService.prototype._setError = /**
         * @private
         * @param {?} step
         * @param {?} colId
         * @param {?} errorType
         * @param {?} validresult
         * @param {?} errorResult
         * @param {?=} errorMsg
         * @return {?}
         */
            function (step, colId, errorType, validresult, errorResult, errorMsg) {
                if (errorMsg === void 0) {
                    errorMsg = '';
                }
                console.log('step', step, 'colId', colId, 'errorType', errorType, 'validresult', validresult, 'errorResult', errorResult);
                errorMsg = i1.StringUtils.isEmpty(errorMsg) ? colId + errorType : errorMsg;
                errorResult = errorResult.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return (x.ColId != colId || (x.ColId == colId && x.Msg.indexOf(errorMsg))); })); //等於colId && 等於errortype 的先拿掉
                if (validresult) {
                    errorResult.push(new ValidError(step, colId, errorMsg));
                }
                console.log('errorResult', errorResult);
                return errorResult;
            };
        /**
         * @private
         * @param {?} setp4Obj
         * @param {?} errorResult
         * @return {?}
         */
        GoalValidService.prototype._validShortfall = /**
         * @private
         * @param {?} setp4Obj
         * @param {?} errorResult
         * @return {?}
         */
            function (setp4Obj, errorResult) {
                //驗證Shortfall
                if (this.goalSettingStep) {
                    /** @type {?} */
                    var validresult = this.goalSettingStep.validateGoal_Forecast(Number(setp4Obj.Shortfall));
                    errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
                }
                else {
                    /** @type {?} */
                    var validresult = Number(setp4Obj.Shortfall) != 0;
                    errorResult = this._setError(4, "Shortfall", "value", validresult, errorResult, "Shortfall_nonZero");
                }
                return errorResult;
            };
        GoalValidService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        GoalValidService.ctorParameters = function () {
            return [
                { type: i0.ErrorHandler },
                { type: GoalSettingService },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [goalSettingStepToken,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [goalValidToken,] }] }
            ];
        };
        /** @nocollapse */ GoalValidService.ngInjectableDef = i0.defineInjectable({ factory: function GoalValidService_Factory() { return new GoalValidService(i0.inject(i0.ErrorHandler), i0.inject(GoalSettingService), i0.inject(goalSettingStepToken, 8), i0.inject(goalValidToken, 8)); }, token: GoalValidService, providedIn: "root" });
        return GoalValidService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgencyPlanStoreService = /** @class */ (function () {
        function AgencyPlanStoreService() {
            this._agencyState = new AgencyPlanStatus(AGENCY_STATE.DISPLAY, null);
            this._stateBehaviorSubject = new rxjs.BehaviorSubject(this._agencyState);
            this._detailBehaviorSubject = new rxjs.BehaviorSubject(this._agencyDetail);
        }
        /**
         * @param {?} state
         * @return {?}
         */
        AgencyPlanStoreService.prototype.setState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this._agencyState = state;
                this._stateBehaviorSubject.next(this._agencyState);
            };
        /**
         * @return {?}
         */
        AgencyPlanStoreService.prototype.getState = /**
         * @return {?}
         */
            function () {
                return this._stateBehaviorSubject;
            };
        // setCurrentAgencyDetail(detail: any): void {
        //   console.log("setCurrentAgencyDetail detail:",detail);
        //   this._agencyDetail = detail;
        //   this._detailBehaviorSubject.next(this._agencyDetail);
        // };
        // setCurrentAgencyDetail(detail: any): void {
        //   console.log("setCurrentAgencyDetail detail:",detail);
        //   this._agencyDetail = detail;
        //   this._detailBehaviorSubject.next(this._agencyDetail);
        // };
        /**
         * @param {?} agentInfo
         * @return {?}
         */
        AgencyPlanStoreService.prototype.setCurrentAgencyDetail =
            // setCurrentAgencyDetail(detail: any): void {
            //   console.log("setCurrentAgencyDetail detail:",detail);
            //   this._agencyDetail = detail;
            //   this._detailBehaviorSubject.next(this._agencyDetail);
            // };
            /**
             * @param {?} agentInfo
             * @return {?}
             */
            function (agentInfo) {
                console.log("setCurrentAgencyDetail agentInfo:", agentInfo);
                this._agencyDetail = agentInfo;
                this._detailBehaviorSubject.next(this._agencyDetail);
            };
        /**
         * @return {?}
         */
        AgencyPlanStoreService.prototype.getCurrentAgencyDetail = /**
         * @return {?}
         */
            function () {
                return this._detailBehaviorSubject;
            };
        AgencyPlanStoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        AgencyPlanStoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ AgencyPlanStoreService.ngInjectableDef = i0.defineInjectable({ factory: function AgencyPlanStoreService_Factory() { return new AgencyPlanStoreService(); }, token: AgencyPlanStoreService, providedIn: "root" });
        return AgencyPlanStoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalTitleListItem = /** @class */ (function () {
        function GoalTitleListItem(title, desc) {
            this.title = title;
            this.desc = desc;
        }
        /**
         * @return {?}
         */
        GoalTitleListItem.prototype.getTitle = /**
         * @return {?}
         */
            function () {
                return this.title;
            };
        /**
         * @param {?} title
         * @return {?}
         */
        GoalTitleListItem.prototype.setTitle = /**
         * @param {?} title
         * @return {?}
         */
            function (title) {
                this.title = title;
            };
        /**
         * @return {?}
         */
        GoalTitleListItem.prototype.getDesc = /**
         * @return {?}
         */
            function () {
                return this.desc;
            };
        /**
         * @param {?} desc
         * @return {?}
         */
        GoalTitleListItem.prototype.setDesc = /**
         * @param {?} desc
         * @return {?}
         */
            function (desc) {
                this.desc = desc;
            };
        return GoalTitleListItem;
    }()); // end class GoalTitleListItem

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoalSettingUtilService = /** @class */ (function () {
        function GoalSettingUtilService(translateService) {
            this.translateService = translateService;
        }
        /**
         * @param {?} activity
         * @return {?}
         */
        GoalSettingUtilService.prototype.getStep3TabOptionList = /**
         * @param {?} activity
         * @return {?}
         */
            function (activity) {
                /** @type {?} */
                var daily = DWM_DATETYPE.DAILY;
                /** @type {?} */
                var weekly = DWM_DATETYPE.WEEKLY;
                /** @type {?} */
                var monthly = DWM_DATETYPE.MONTHLY;
                /** @type {?} */
                var tabOptionList = [];
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
            };
        /**
         * @param {?} step5Data
         * @param {?} agencyPlanData
         * @return {?}
         */
        GoalSettingUtilService.prototype.transformTeamStep5Data = /**
         * @param {?} step5Data
         * @param {?} agencyPlanData
         * @return {?}
         */
            function (step5Data, agencyPlanData) {
                /** @type {?} */
                var step5ItemList = [
                    new GoalTitleListItem(this.translateService.translate('FYFC_Goal'), step5Data.TeamFYFC),
                    new GoalTitleListItem(this.translateService.translate('ANP_Goal'), step5Data.TeamANP),
                    new GoalTitleListItem(this.translateService.translate('Manpower_Goal'), step5Data.Manpower),
                    new GoalTitleListItem(this.translateService.translate('Recruitment_Goal'), step5Data.Recruitment)
                ];
                /** @type {?} */
                var agencyPlanItemList = [
                    new GoalTitleListItem(this.translateService.translate('FYFC_Forecast'), agencyPlanData.FYFCForecast.toString()),
                    new GoalTitleListItem(this.translateService.translate('ANP_Forecast'), agencyPlanData.ANPForecast.toString()),
                    new GoalTitleListItem(this.translateService.translate('Manpower_Plan'), agencyPlanData.ManpowerPlan.toString()),
                    new GoalTitleListItem(this.translateService.translate('Recruitment_Plan'), agencyPlanData.RecruitmentPlan.toString())
                ];
                /** @type {?} */
                var itemTextIsRedList = Array(step5ItemList.length).fill(false).map(( /**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */function (value, index) {
                    if (isNaN(Number(agencyPlanItemList[index].getDesc()))) {
                        return false;
                    }
                    else {
                        return (Number(step5ItemList[index].getDesc()) > Number(agencyPlanItemList[index].getDesc()));
                    }
                }));
                return new CombineStep5AndAgecyPlanData(step5ItemList, agencyPlanItemList, itemTextIsRedList);
            };
        /**
         * @param {?} currentType
         * @param {?} goalSettingStep3
         * @return {?}
         */
        GoalSettingUtilService.prototype.getTabChangeStep3 = /**
         * @param {?} currentType
         * @param {?} goalSettingStep3
         * @return {?}
         */
            function (currentType, goalSettingStep3) {
                /** @type {?} */
                var activityValue;
                /** @type {?} */
                var unit;
                if (currentType == DWM_DATETYPE.DAILY) {
                    activityValue = goalSettingStep3.ActivityValues.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.TimeBase == i1.TIMEBASE.DAY; }))[0];
                    unit = 'Goal_Setting_Day';
                }
                else if (currentType == DWM_DATETYPE.WEEKLY) {
                    activityValue = goalSettingStep3.ActivityValues.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.TimeBase == i1.TIMEBASE.WEEK; }))[0];
                    unit = 'Goal_Setting_Week';
                }
                else if (currentType == DWM_DATETYPE.MONTHLY) {
                    activityValue = goalSettingStep3.ActivityValues.filter(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.TimeBase == i1.TIMEBASE.MONTH; }))[0];
                    unit = 'Goal_Setting_Month';
                }
                return new GoalSettingStep3ForTabChange(activityValue, unit);
            };
        /**
         * @param {?} stepData
         * @return {?}
         */
        GoalSettingUtilService.prototype.translateByStepData = /**
         * @param {?} stepData
         * @return {?}
         */
            function (stepData) {
                return this.translateByYearConfigAndGoaslStatus(stepData.YearConfig, stepData.GoalStatus);
            };
        /**
         * @param {?} yearConfig
         * @param {?} goalStatus
         * @return {?}
         */
        GoalSettingUtilService.prototype.translateByYearConfigAndGoaslStatus = /**
         * @param {?} yearConfig
         * @param {?} goalStatus
         * @return {?}
         */
            function (yearConfig, goalStatus) {
                /** @type {?} */
                var variable = this._getTranslateVariable(yearConfig, goalStatus);
                /** @type {?} */
                var translateOnject = new GoalSettingTranslate();
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
            };
        /**
         * @private
         * @param {?} yearConfig
         * @param {?} goalStatus
         * @return {?}
         */
        GoalSettingUtilService.prototype._getTranslateVariable = /**
         * @private
         * @param {?} yearConfig
         * @param {?} goalStatus
         * @return {?}
         */
            function (yearConfig, goalStatus) {
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
            };
        /**
         * @private
         * @param {?} effectiveMonth
         * @param {?} settlementMonth
         * @return {?}
         */
        GoalSettingUtilService.prototype._isHasEffectiveMonthAndSettlementMonth = /**
         * @private
         * @param {?} effectiveMonth
         * @param {?} settlementMonth
         * @return {?}
         */
            function (effectiveMonth, settlementMonth) {
                /** @type {?} */
                var _isNotEmpty = i1.StringUtils.isNotEmpty(effectiveMonth) && i1.StringUtils.isNotEmpty(settlementMonth);
                /** @type {?} */
                var _isNumber = !isNaN(Number(effectiveMonth)) && !isNaN(Number(settlementMonth));
                /** @type {?} */
                var _isGreaterThanZero = Number(effectiveMonth) > 0 && Number(settlementMonth) > 0;
                return _isNotEmpty && _isNumber && _isGreaterThanZero;
            };
        GoalSettingUtilService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        GoalSettingUtilService.ctorParameters = function () {
            return [
                { type: i1.TranslateService }
            ];
        };
        /** @nocollapse */ GoalSettingUtilService.ngInjectableDef = i0.defineInjectable({ factory: function GoalSettingUtilService_Factory() { return new GoalSettingUtilService(i0.inject(i1.TranslateService)); }, token: GoalSettingUtilService, providedIn: "root" });
        return GoalSettingUtilService;
    }());

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

    exports.goalSettingStepToken = goalSettingStepToken;
    exports.goalValidToken = goalValidToken;
    exports.goalSettingShowRuleToken = goalSettingShowRuleToken;
    exports.GoalSubmitExtensionToken = GoalSubmitExtensionToken;
    exports.GoalModule = GoalModule;
    exports.GoalSettingGetGoalSettingAPI = GoalSettingGetGoalSettingAPI;
    exports.GoalSettingGetYearConfigAPI = GoalSettingGetYearConfigAPI;
    exports.AgencyPlanGetMainAPI = AgencyPlanGetMainAPI;
    exports.AgencyPlanGetDetailAPI = AgencyPlanGetDetailAPI;
    exports.GoalSettingGetExpectedAPI = GoalSettingGetExpectedAPI;
    exports.GoalSettingGetValueAPI = GoalSettingGetValueAPI;
    exports.GoalSettingSetExpectedAPI = GoalSettingSetExpectedAPI;
    exports.GoalSettingGetPlanAPI = GoalSettingGetPlanAPI;
    exports.GoalSettingGetActualAPI = GoalSettingGetActualAPI;
    exports.DWM_DATETYPE = DWM_DATETYPE;
    exports.GOALSETTINGSTEP = GOALSETTINGSTEP;
    exports.GOALSETTINGSETMODE = GOALSETTINGSETMODE;
    exports.ROLE = ROLE;
    exports.APPROVESTATUS = APPROVESTATUS;
    exports.APITYPE = APITYPE;
    exports.ValidationState = ValidationState;
    exports.PlanFYFCPopupInfo = PlanFYFCPopupInfo;
    exports.GoalSettingStep1 = GoalSettingStep1;
    exports.GoalSettingStep2 = GoalSettingStep2;
    exports.GoalSettingStep3 = GoalSettingStep3;
    exports.GoalSettingStep4 = GoalSettingStep4;
    exports.GoalSettingStep5 = GoalSettingStep5;
    exports.GoalSettingYearConfig = GoalSettingYearConfig;
    exports.ActivityValue = ActivityValue;
    exports.GoalSettingStepData = GoalSettingStepData;
    exports.GoalSettingGoalStatus = GoalSettingGoalStatus;
    exports.IsApproveInfo = IsApproveInfo;
    exports.MonthlyPlanFYFCData = MonthlyPlanFYFCData;
    exports.AgencyPlanAgentInfo = AgencyPlanAgentInfo;
    exports.AgencyPlanDetail = AgencyPlanDetail;
    exports.AgencyPlanGoalExpected = AgencyPlanGoalExpected;
    exports.GoalSettingPlanPopup = GoalSettingPlanPopup;
    exports.AgencyPlanDirectUnitDetail = AgencyPlanDirectUnitDetail;
    exports.AgencyPlanMainData = AgencyPlanMainData;
    exports.AgencyPlanDataForOverview = AgencyPlanDataForOverview;
    exports.SettingChangeEvent = SettingChangeEvent;
    exports.GoalSettingTranslate = GoalSettingTranslate;
    exports.CombineStep5AndAgecyPlanData = CombineStep5AndAgecyPlanData;
    exports.GoalSettingStep3ForTabChange = GoalSettingStep3ForTabChange;
    exports.ValidError = ValidError;
    exports.ApproveInfo = ApproveInfo;
    exports.GoalSettingStepDataParams = GoalSettingStepDataParams;
    exports.AGENCY_STATE = AGENCY_STATE;
    exports.AgencyPlanStatus = AgencyPlanStatus;
    exports.AgencyPlanMainInfo = AgencyPlanMainInfo;
    exports.GoalSettingService = GoalSettingService;
    exports.GoalValidService = GoalValidService;
    exports.GoalStoreService = GoalStoreService;
    exports.GoalPopupResponse = GoalPopupResponse;
    exports.GOAL_LANDING_STATUS = GOAL_LANDING_STATUS;
    exports.PLAN_FYFC_POPUP_STATE = PLAN_FYFC_POPUP_STATE;
    exports.SYNC_STATUS = SYNC_STATUS;
    exports.AgencyPlanStoreService = AgencyPlanStoreService;
    exports.GoalSettingUtilService = GoalSettingUtilService;
    exports.GoalTitleListItem = GoalTitleListItem;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-goal.umd.js.map