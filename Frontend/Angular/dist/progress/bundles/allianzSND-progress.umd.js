(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@allianzSND/notification'), require('@allianzSND/goal'), require('@angular/core'), require('@angular/common'), require('@allianzSND/ui'), require('@allianzSND/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@allianzSND/progress', ['exports', '@allianzSND/notification', '@allianzSND/goal', '@angular/core', '@angular/common', '@allianzSND/ui', '@allianzSND/core', 'rxjs'], factory) :
    (factory((global.allianzSND = global.allianzSND || {}, global.allianzSND.progress = {}),global.i2,global.goal,global.ng.core,global.ng.common,global.ui,global.i1,global.rxjs));
}(this, (function (exports,i2,goal,i0,common,ui,i1,rxjs) { 'use strict';

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
    var ProgressYearConfig = /** @class */ (function () {
        function ProgressYearConfig() {
            this.DataYear = 0;
            this.IsCurrent = true;
            this.WorkingMonth = 0;
            this.QuarterStartMonth = 0;
            this.QuarterEndMonth = 0;
            this.FindConvertPointBase = 0;
            this.ScheduleConvertPointBase = 0;
            this.MeetConvertPointBase = 0;
            this.SubmitConvertPointBase = 0;
            this.InforceConvertPointBase = 0;
            this.ProgressBarControlMode = "TWMode";
            this.ProgressDayPointsLimit = 20;
            this.MonthQuantityOfYear = 12;
            this.PerformanceSettlementMonth = 0;
        }
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], ProgressYearConfig.prototype, "IsCurrent", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "WorkingMonth", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "QuarterStartMonth", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "QuarterEndMonth", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "FindConvertPointBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "ScheduleConvertPointBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "MeetConvertPointBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "SubmitConvertPointBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "InforceConvertPointBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressYearConfig.prototype, "ProgressBarControlMode", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "ProgressDayPointsLimit", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "MonthQuantityOfYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearConfig.prototype, "PerformanceSettlementMonth", void 0);
        ProgressYearConfig = __decorate([
            i1.Bean('ProgressYearConfig')
        ], ProgressYearConfig);
        return ProgressYearConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigurationObj = /** @class */ (function () {
        function ConfigurationObj() {
            this.lastUpdateTime = "";
            this.Configurations = new Array();
        }
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ConfigurationObj.prototype, "lastUpdateTime", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], ConfigurationObj.prototype, "Configurations", void 0);
        ConfigurationObj = __decorate([
            i1.Bean('ConfigurationObj')
        ], ConfigurationObj);
        return ConfigurationObj;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressObj = /** @class */ (function () {
        function ProgressObj() {
            this.lastUpdateTime = "";
            this.Progress = new Array();
        }
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressObj.prototype, "lastUpdateTime", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], ProgressObj.prototype, "Progress", void 0);
        ProgressObj = __decorate([
            i1.Bean('ProgressObj')
        ], ProgressObj);
        return ProgressObj;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PersonalObj = /** @class */ (function () {
        function PersonalObj() {
            this.Values = new Array();
        }
        return PersonalObj;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TeamObj = /** @class */ (function () {
        function TeamObj() {
            this.Values = new Array();
            //public Direct: Array<ProgressDirectData> = new Array<ProgressDirectData>();
            //public Indirect: Array<ProgressIndirectData> = new Array<ProgressIndirectData>();
            this.DirectUnit = new Array();
            this.InDirectUnit = new Array();
        }
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], TeamObj.prototype, "Values", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], TeamObj.prototype, "DirectUnit", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Array)
        ], TeamObj.prototype, "InDirectUnit", void 0);
        TeamObj = __decorate([
            i1.Bean('TeamObj')
        ], TeamObj);
        return TeamObj;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressYearObj = /** @class */ (function () {
        function ProgressYearObj() {
            this.DataYear = 0;
            this.YesterdayPoint = 0;
            this.Personal = new PersonalObj();
            this.Team = new TeamObj();
        }
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearObj.prototype, "DataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressYearObj.prototype, "YesterdayPoint", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", PersonalObj)
        ], ProgressYearObj.prototype, "Personal", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", TeamObj)
        ], ProgressYearObj.prototype, "Team", void 0);
        ProgressYearObj = __decorate([
            i1.Bean('ProgressYearObj')
        ], ProgressYearObj);
        return ProgressYearObj;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var PersonalDataTimeBase = {
        Day: "Day",
        Week: "Week",
        Month: "Month",
        Quarter: "Quarter",
        Year: "Year",
        Unknow: "Unknow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var PersonalDataType = {
        Actual: "Actual",
        Goal: "Goal",
        Unknow: "Unknow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressPersonalData = /** @class */ (function () {
        function ProgressPersonalData() {
            this.DataType = PersonalDataType.Unknow;
            this.TimeBase = PersonalDataTimeBase.Unknow;
            this.Find = 0;
            this.Schedule = 0;
            this.Meet = 0;
            this.Submit = 0;
            this.Inforce = 0;
            this.FYFC = 0;
            this.FindConvertPointBase = 0;
            this.ScheduleConvertPointBase = 0;
            this.MeetConvertPointBase = 0;
            this.SubmitConvertPointBase = 0;
            this.InforceConvertPointBase = 0;
        }
        return ProgressPersonalData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ProgressDataTeamValueType = {
        FYFC: "FYFC",
        ANP: "ANP",
        Manpower: "Manpower",
        Recruitment: "Recruitment",
        Unknow: "unKnow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressTeamData = /** @class */ (function () {
        function ProgressTeamData() {
            this.DataType = ProgressDataTeamValueType.Unknow;
            this.TimeBase = PersonalDataTimeBase.Unknow;
            this.Goal = 0;
            this.Forecast = 0;
            this.Actual = 0;
            this.Shortfall = 0;
        }
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressTeamData.prototype, "DataType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressTeamData.prototype, "TimeBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressTeamData.prototype, "Goal", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressTeamData.prototype, "Forecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressTeamData.prototype, "Actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressTeamData.prototype, "Shortfall", void 0);
        ProgressTeamData = __decorate([
            i1.Bean('ProgressTeamData')
        ], ProgressTeamData);
        return ProgressTeamData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressDirectIndirectData = /** @class */ (function () {
        function ProgressDirectIndirectData() {
            this.AgentID = "";
            this.AgentName = "";
            this.TeamName = "";
            this.JobGrade = "";
            this.Drilldown = false;
            this.TimeBase = PersonalDataTimeBase.Unknow;
            this.DataType = ProgressDataTeamValueType.Unknow;
            this.AppUseMode = "";
            //public Activities: ActivitiesType = ActivitiesType.Unknow;
            this.Activities = "";
            this.Goal = 0;
            this.Forecast = 0;
            this.Actual = 0;
            this.Shortfall = 0;
        }
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "AgentID", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "AgentName", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "TeamName", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "JobGrade", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], ProgressDirectIndirectData.prototype, "Drilldown", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "TimeBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "DataType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "AppUseMode", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressDirectIndirectData.prototype, "Activities", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressDirectIndirectData.prototype, "Goal", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressDirectIndirectData.prototype, "Forecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressDirectIndirectData.prototype, "Actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressDirectIndirectData.prototype, "Shortfall", void 0);
        ProgressDirectIndirectData = __decorate([
            i1.Bean('ProgressDirectIndirectData')
        ], ProgressDirectIndirectData);
        return ProgressDirectIndirectData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DirectUnitType = {
        DirectUnit: "Direct",
        IndirectUnit: "Indirect",
        Unknow: "Unknow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var Tag = {
        PersonalTag: 0,
        TeamTag: 1,
        UnknowTag: 2,
    };
    Tag[Tag.PersonalTag] = 'PersonalTag';
    Tag[Tag.TeamTag] = 'TeamTag';
    Tag[Tag.UnknowTag] = 'UnknowTag';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressService = /** @class */ (function () {
        function ProgressService(dispatch, APIFactory, deviceService, notificationMgr, notficationUtils, errorHandler) {
            this.dispatch = dispatch;
            this.APIFactory = APIFactory;
            this.deviceService = deviceService;
            this.notificationMgr = notificationMgr;
            this.notficationUtils = notficationUtils;
            this.errorHandler = errorHandler;
            this._drillDownAgentIdObjList = new Array();
            this._drillDowmAgentIdSubject = new rxjs.BehaviorSubject(this.lastAgentIdObj);
            //dashboard to progress page
            this._currentTag = Tag.UnknowTag;
            this._currentRoleSubject = new rxjs.BehaviorSubject(this._currentRole);
        }
        Object.defineProperty(ProgressService.prototype, "AgentIdObjListLength", {
            get: /**
             * @return {?}
             */ function () {
                return this._drillDownAgentIdObjList.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressService.prototype, "lastAgentIdObj", {
            get: /**
             * @return {?}
             */ function () {
                return (this._drillDownAgentIdObjList.length > 0) ? this._drillDownAgentIdObjList[this.AgentIdObjListLength - 1] : null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ProgressService.prototype.GetCurrentNavigationTag = /**
         * @return {?}
         */
            function () {
                return this._currentTag;
            };
        /**
         * @param {?} tag
         * @return {?}
         */
        ProgressService.prototype.SetCurrentNavigationTag = /**
         * @param {?} tag
         * @return {?}
         */
            function (tag) {
                this._currentTag = tag;
            };
        //#region agent function
        //#region agent function
        /**
         * @return {?}
         */
        ProgressService.prototype.InitDrillDownAgentIdObj =
            //#region agent function
            /**
             * @return {?}
             */
            function () {
                this._drillDownAgentIdObjList = new Array();
                //this._drillDowmAgentIdSubject = new BehaviorSubject(this.lastAgentIdObj);
            };
        /**
         * @param {?} agentIdObj
         * @return {?}
         */
        ProgressService.prototype.AddDrillDownAgentIdObj = /**
         * @param {?} agentIdObj
         * @return {?}
         */
            function (agentIdObj) {
                this._drillDownAgentIdObjList.push(agentIdObj);
                this._drillDowmAgentIdSubject.next(this.lastAgentIdObj);
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetDrillDwonAgentIdObj = /**
         * @return {?}
         */
            function () {
                return this._drillDowmAgentIdSubject.asObservable();
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.PopDrillDownAgentIdObj = /**
         * @return {?}
         */
            function () {
                this._drillDownAgentIdObjList.pop();
                this._drillDowmAgentIdSubject.next(this.lastAgentIdObj);
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetDrillDownAgentIdObjRouterNameObj = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var maxLength = this.AgentIdObjListLength;
                if (maxLength >= 2) {
                    /** @type {?} */
                    var arr = new Array();
                    /** @type {?} */
                    var data1 = this._drillDownAgentIdObjList[maxLength - 2];
                    /** @type {?} */
                    var data2 = this._drillDownAgentIdObjList[maxLength - 1];
                    arr.push(data1);
                    arr.push(data2);
                    return rxjs.of(arr);
                }
                else {
                    /** @type {?} */
                    var arr = new Array();
                    /** @type {?} */
                    var data1 = this._drillDownAgentIdObjList[maxLength - 1];
                    arr.push(data1);
                    return rxjs.of(arr);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        ProgressService.prototype.SetCurrentRole = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._currentRole = val;
                this._currentRoleSubject.next(this._currentRole);
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetCurrentRole = /**
         * @return {?}
         */
            function () {
                return this._currentRoleSubject.asObservable();
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetIsTeam = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var r = this._currentRole;
                switch (r) {
                    case goal.ROLE.AGENT:
                        return false;
                    case goal.ROLE.AGENTLEADER:
                    case goal.ROLE.ZONEHEAD:
                    case goal.ROLE.CAO:
                        return true;
                }
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetIsAgent = /**
         * @return {?}
         */
            function () {
                return (this._currentRole == goal.ROLE.AGENT) ? true : false;
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetIsSupervisor = /**
         * @return {?}
         */
            function () {
                return (this._currentRole == goal.ROLE.CAO) ? true : false;
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetIsManaget = /**
         * @return {?}
         */
            function () {
                return (this._currentRole == goal.ROLE.ZONEHEAD) ? true : false;
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetIsAgentLeader = /**
         * @return {?}
         */
            function () {
                return (this._currentRole == goal.ROLE.AGENTLEADER) ? true : false;
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetIsShowSwitchTab = /**
         * @return {?}
         */
            function () {
                return (this._currentRole == goal.ROLE.AGENTLEADER) ? true : false;
            };
        /**
         * @return {?}
         */
        ProgressService.prototype.GetIsShowTeamTab = /**
         * @return {?}
         */
            function () {
                return (this._currentRole == goal.ROLE.AGENT) ? false : true;
            };
        //#endregion
        //#region progress main function
        //get progress data by restful return yaml
        //#endregion
        //#region progress main function
        //get progress data by restful return yaml
        /**
         * @param {?} agentID
         * @return {?}
         */
        ProgressService.prototype.GetProgressDataByRestful =
            //#endregion
            //#region progress main function
            //get progress data by restful return yaml
            /**
             * @param {?} agentID
             * @return {?}
             */
            function (agentID) {
                try {
                    /** @type {?} */
                    var getProgressAPI_1 = ( /** @type {?} */(this.APIFactory.getAPI("getProgress")));
                    getProgressAPI_1.setAgentID(agentID);
                    return rxjs.from(this.dispatch.dispatch(getProgressAPI_1).toPromise());
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
                    console.debug("getProgressDataByRestful agent id: ", agentID);
                }
                return rxjs.of(null);
            };
        //get progress data by SQLite return yaml
        //get progress data by SQLite return yaml
        /**
         * @param {?} years
         * @return {?}
         */
        ProgressService.prototype.GetProgressDataBySQLite =
            //get progress data by SQLite return yaml
            /**
             * @param {?} years
             * @return {?}
             */
            function (years) {
                var _this = this;
                try {
                    //put it together to yaml
                    /** @type {?} */
                    var getPersonalProgressAPI = ( /** @type {?} */(this.APIFactory.getAPI('getPersonalProgress')));
                    /** @type {?} */
                    var getTeamProgressDetailAPI = ( /** @type {?} */(this.APIFactory.getAPI('getTeamProgressDetail')));
                    /** @type {?} */
                    var getTeamProgressMainAPI = ( /** @type {?} */(this.APIFactory.getAPI('getTeamProgressMain')));
                    /** @type {?} */
                    var getOtherParameterAPI = ( /** @type {?} */(this.APIFactory.getAPI('getOtherParameter')));
                    return rxjs.from(Promise.all([getPersonalProgressAPI, getTeamProgressDetailAPI, getTeamProgressMainAPI, getOtherParameterAPI]
                        .map(( /**
                 * @param {?} api
                 * @return {?}
                 */function (api) { return _this.dispatch.dispatch(api).toPromise(); }))).then(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var _b = __read(_a, 4), ProgressPersonalRawData = _b[0], ProgressTeamDetailRawData = _b[1], ProgressTeamMainRawData = _b[2], OtherParameterRawData = _b[3];
                        console.debug("getProgressDataBySQLite ProgressPersonalRawData: ", ProgressPersonalRawData); //o
                        console.debug("getProgressDataBySQLite ProgressTeamDetailRawData: ", ProgressTeamDetailRawData);
                        console.debug("getProgressDataBySQLite ProgressTeamMainRawData:", ProgressTeamMainRawData);
                        console.debug("getProgressDataBySQLite OtherParameterRawData:", OtherParameterRawData);
                        //new way
                        /** @type {?} */
                        var progressObjBOSS = new ProgressObj();
                        /** @type {?} */
                        var progressYearObjList = new Array();
                        /** @type {?} */
                        var personalObjList = new Array();
                        /** @type {?} */
                        var teamObjList = new Array();
                        /** @type {?} */
                        var progressPersonalDataList = new Array();
                        /** @type {?} */
                        var progressTeamMainDataList = new Array();
                        /** @type {?} */
                        var progressTeamDirectDataList = new Array();
                        /** @type {?} */
                        var progressTeamIndirectDataList = new Array();
                        /** @type {?} */
                        var yesterdayPointsList;
                        //get yesterdayPoint     
                        yesterdayPointsList = _this._GetYesterdayPoints(years, OtherParameterRawData);
                        console.debug("getProgressDataBySQLite yesterdayPointsList: ", yesterdayPointsList);
                        // get personal data
                        progressPersonalDataList = _this._GetProgressPersonalData(years, ProgressPersonalRawData);
                        console.debug("getProgressDataBySQLite progressPersonalDataList: ", progressPersonalDataList);
                        for (var i = 0; i < years.length; i++) {
                            /** @type {?} */
                            var obj = new PersonalObj();
                            obj.Values = progressPersonalDataList[i];
                            personalObjList.push(obj);
                        }
                        //get team main data
                        progressTeamMainDataList = _this._GetProgressTeamMainData(years, ProgressTeamMainRawData);
                        console.debug("getProgressDataBySQLite progressTeamMainDataList: ", progressTeamMainDataList);
                        //direct indirect
                        progressTeamDirectDataList = _this._GetProgressTeamDirectIndirectData(years, ProgressTeamDetailRawData, DirectUnitType.DirectUnit);
                        progressTeamIndirectDataList = _this._GetProgressTeamDirectIndirectData(years, ProgressTeamDetailRawData, DirectUnitType.IndirectUnit);
                        console.debug("getProgressDataBySQLite progressTeamDirectDataList: ", progressTeamDirectDataList);
                        console.debug("getProgressDataBySQLite progressTeamIndirectDataList: ", progressTeamIndirectDataList);
                        //get team data
                        for (var i = 0; i < years.length; i++) {
                            /** @type {?} */
                            var obj = new TeamObj();
                            obj.Values = (progressTeamMainDataList[i]) ? progressTeamMainDataList[i] : null;
                            obj.DirectUnit = (progressTeamDirectDataList[i]) ? progressTeamDirectDataList[i] : null;
                            obj.InDirectUnit = (progressTeamIndirectDataList[i]) ? progressTeamIndirectDataList[i] : null;
                            teamObjList.push(obj);
                        }
                        //get progress Year data
                        for (var i = 0; i < years.length; i++) {
                            /** @type {?} */
                            var obj = new ProgressYearObj();
                            obj.DataYear = years[i];
                            obj.YesterdayPoint = yesterdayPointsList[i];
                            obj.Personal = personalObjList[i];
                            obj.Team = teamObjList[i];
                            progressYearObjList.push(obj);
                        }
                        //get progressBOSS obj      
                        for (var i = 0; i < years.length; i++) {
                            progressObjBOSS.Progress[i] = progressYearObjList[i];
                        }
                        console.debug("getProgressDataBySQLite personalObjList: ", personalObjList);
                        console.debug("getProgressDataBySQLite teamObjList: ", teamObjList);
                        console.debug("getProgressDataBySQLite progressYearObjList: ", progressYearObjList);
                        console.debug("getProgressDataBySQLite progressObjBOSS: ", progressObjBOSS);
                        return progressObjBOSS;
                    })));
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00210', 'get Progress Data By SQLite fail!' + error.message));
                    console.debug("OMG! getProgressDataBySQLite fail: ");
                }
                return rxjs.of(null);
            };
        //#endregion progress main function
        //#region private function
        //#endregion progress main function
        //#region private function
        /**
         * @private
         * @param {?} years
         * @param {?} otherParameterRawData
         * @return {?}
         */
        ProgressService.prototype._GetYesterdayPoints =
            //#endregion progress main function
            //#region private function
            /**
             * @private
             * @param {?} years
             * @param {?} otherParameterRawData
             * @return {?}
             */
            function (years, otherParameterRawData) {
                /** @type {?} */
                var ansArr = new Array();
                console.debug("_GetYesterdayPoints years: ", years);
                console.debug("_GetYesterdayPoints otherParameterRawData: ", otherParameterRawData);
                try {
                    var _loop_1 = function (i) {
                        /** @type {?} */
                        var yesterdayPoint = otherParameterRawData["Body"].filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) {
                            return x.MappingID == "YesterdayPoint"
                                && x.DataYear == years[i];
                        }));
                        console.debug("_GetYesterdayPoints yesterdayPoint: ", yesterdayPoint);
                        console.debug("_GetYesterdayPoints yesterdayPoint[0]: ", yesterdayPoint[0]);
                        console.debug("_GetYesterdayPoints yesterdayPoint[0]set: ", yesterdayPoint[0].SetValue);
                        ansArr.push(yesterdayPoint[0].SetValue);
                    };
                    for (var i = 0; i < years.length; i++) {
                        _loop_1(i);
                    }
                    return ansArr;
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00211', 'get yesterday points fail!' + error.message));
                }
                return null;
            };
        /**
         * @private
         * @param {?} years
         * @param {?} progressTeamDetailRawData
         * @param {?} unitType
         * @return {?}
         */
        ProgressService.prototype._GetProgressTeamDirectIndirectData = /**
         * @private
         * @param {?} years
         * @param {?} progressTeamDetailRawData
         * @param {?} unitType
         * @return {?}
         */
            function (years, progressTeamDetailRawData, unitType) {
                /** @type {?} */
                var ansArr = new Array();
                console.debug("_getProgressTeamDirectIndirectData years: ", years);
                console.debug("_getProgressTeamDirectIndirectData progressTeamDetailRawData: ", progressTeamDetailRawData);
                try {
                    if (progressTeamDetailRawData) {
                        /** @type {?} */
                        var bodyData = progressTeamDetailRawData["Body"];
                        /** @type {?} */
                        var rawDataByYearArr = new Array();
                        var _loop_2 = function (i) {
                            /** @type {?} */
                            var yearData = bodyData.filter(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return x.DataYear == years[i] && x.DirectUnitType == unitType; }));
                            if (yearData)
                                rawDataByYearArr.push(yearData);
                        };
                        for (var i = 0; i < years.length; i++) {
                            _loop_2(i);
                        }
                        console.debug("_getProgressTeamDirectIndirectData rawDataByYearArr: ", rawDataByYearArr);
                        for (var i = 0; i < rawDataByYearArr.length; i++) {
                            /** @type {?} */
                            var arr = new Array();
                            for (var j = 0; j < rawDataByYearArr[i].length; j++) {
                                /** @type {?} */
                                var tmp = rawDataByYearArr[i][j];
                                /** @type {?} */
                                var data = new ProgressDirectIndirectData();
                                data.AgentID = tmp.AgentID;
                                data.AgentName = tmp.AgentName;
                                data.TeamName = tmp.TeamName;
                                data.JobGrade = tmp.JobGrade;
                                data.DataType = tmp.DataType;
                                data.TimeBase = tmp.TimeBase;
                                data.AppUseMode = tmp.AppUseMode;
                                data.Activities = tmp.Activities;
                                data.Drilldown = tmp.Drilldown == "Y"; //true
                                data.Actual = tmp.Actual;
                                data.Goal = tmp.Goal;
                                data.Forecast = tmp.Forecast;
                                data.Shortfall = tmp.Shortfall;
                                arr.push(data);
                            }
                            ansArr.push(arr);
                        }
                        return ansArr;
                    }
                    else {
                        throw "data null";
                    }
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00212', 'get Progress Team Direct Indirect Data fail!' + error.message));
                }
                return null;
            };
        /**
         * @private
         * @param {?} years
         * @param {?} progressTeamMainRawData
         * @return {?}
         */
        ProgressService.prototype._GetProgressTeamMainData = /**
         * @private
         * @param {?} years
         * @param {?} progressTeamMainRawData
         * @return {?}
         */
            function (years, progressTeamMainRawData) {
                /** @type {?} */
                var ansArr = new Array();
                console.debug("_getProgressTeamMainData years: ", years);
                console.debug("_getProgressTeamMainData progressTeamMainRawData: ", progressTeamMainRawData);
                try {
                    if (progressTeamMainRawData) {
                        /** @type {?} */
                        var bodyData = progressTeamMainRawData["Body"];
                        /** @type {?} */
                        var rawDataByYearArr = new Array();
                        var _loop_3 = function (i) {
                            /** @type {?} */
                            var yearData = bodyData.filter(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return x.DataYear == years[i]; }));
                            if (yearData)
                                rawDataByYearArr.push(yearData);
                        };
                        for (var i = 0; i < years.length; i++) {
                            _loop_3(i);
                        }
                        console.debug("_getProgressTeamMainData rawDataByYearArr: ", rawDataByYearArr);
                        for (var i = 0; i < rawDataByYearArr.length; i++) {
                            /** @type {?} */
                            var arr = new Array();
                            for (var j = 0; j < rawDataByYearArr[i].length; j++) {
                                /** @type {?} */
                                var tmp = rawDataByYearArr[i][j];
                                /** @type {?} */
                                var data = new ProgressTeamData();
                                data.DataType = tmp.DataType;
                                data.TimeBase = tmp.TimeBase;
                                data.Goal = tmp.Goal;
                                data.Forecast = tmp.Forecast;
                                data.Actual = tmp.Actual;
                                data.Shortfall = tmp.Shortfall;
                                arr.push(data);
                            }
                            ansArr.push(arr);
                        }
                        return ansArr;
                    }
                    else {
                        throw "data null";
                    }
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00213', 'Get Progress Team Main Data fail!' + error.message));
                }
                return null;
            };
        /**
         * @private
         * @param {?} years
         * @param {?} progressPersonalRawData
         * @return {?}
         */
        ProgressService.prototype._GetProgressPersonalData = /**
         * @private
         * @param {?} years
         * @param {?} progressPersonalRawData
         * @return {?}
         */
            function (years, progressPersonalRawData) {
                /** @type {?} */
                var ansArr = new Array();
                console.debug("_getProgressPersonalData years: ", years);
                console.debug("_getProgressPersonalData progressPersonalRawData: ", progressPersonalRawData);
                try {
                    if (progressPersonalRawData) {
                        /** @type {?} */
                        var bodyData = progressPersonalRawData["Body"];
                        /** @type {?} */
                        var rawDataByYearArr = new Array();
                        var _loop_4 = function (i) {
                            /** @type {?} */
                            var yearData = bodyData.filter(( /**
                             * @param {?} x
                             * @return {?}
                             */function (x) { return x.DataYear == years[i]; }));
                            if (yearData)
                                rawDataByYearArr.push(yearData);
                        };
                        for (var i = 0; i < years.length; i++) {
                            _loop_4(i);
                        }
                        console.debug("_getProgressPersonalData rawDataByYearArr: ", rawDataByYearArr);
                        for (var i = 0; i < rawDataByYearArr.length; i++) {
                            /** @type {?} */
                            var arr = new Array();
                            for (var j = 0; j < rawDataByYearArr[i].length; j++) {
                                /** @type {?} */
                                var tmp = rawDataByYearArr[i][j];
                                /** @type {?} */
                                var data = new ProgressPersonalData();
                                data.DataType = tmp.DataType;
                                data.TimeBase = tmp.TimeBase;
                                data.Find = tmp.Find;
                                data.Schedule = tmp.Schedule;
                                data.Meet = tmp.Meet;
                                data.Submit = tmp.Submit;
                                data.Inforce = tmp.Inforce;
                                data.FYFC = tmp.FYFC;
                                arr.push(data);
                            }
                            ansArr.push(arr);
                        }
                        return ansArr;
                    }
                    else {
                        throw "data null";
                    }
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00214', 'Get Progress Personal Data fail!' + error.message));
                }
                return null;
            };
        //#endregion private function
        //#region year config function
        //get year config 
        //#endregion private function
        //#region year config function
        //get year config 
        /**
         * @return {?}
         */
        ProgressService.prototype.GetYearConfigDataBySQLite =
            //#endregion private function
            //#region year config function
            //get year config 
            /**
             * @return {?}
             */
            function () {
                try {
                    /** @type {?} */
                    var getYearConfigurationAPI = ( /** @type {?} */(this.APIFactory.getAPI('getYearConfiguration')));
                    return rxjs.from(this.dispatch.dispatch(getYearConfigurationAPI).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("getYearConfig resp: ", resp);
                        // convert to yaml
                        /** @type {?} */
                        var dataBady = resp["Body"];
                        console.debug("getYearConfig dataBady: ", dataBady);
                        /** @type {?} */
                        var configObj = new ConfigurationObj();
                        /** @type {?} */
                        var arr = new Array();
                        for (var i = 0; i < dataBady.length; i++) {
                            /** @type {?} */
                            var data = new ProgressYearConfig();
                            /** @type {?} */
                            var dataConfig = dataBady[i];
                            data.DataYear = dataConfig.DataYear;
                            data.IsCurrent = dataConfig.IsCurrent === "Y";
                            data.WorkingMonth = dataConfig.WorkingMonth;
                            data.QuarterStartMonth = dataConfig.QuarterStartMonth;
                            data.QuarterEndMonth = dataConfig.QuarterEndMonth;
                            data.ProgressDayPointsLimit = dataConfig.ProgressDayPointsLimit;
                            data.ProgressBarControlMode = dataConfig.ProgressBarControlMode;
                            data.MonthQuantityOfYear = dataConfig.MonthQuantityOfYear;
                            data.FindConvertPointBase = dataConfig.FindConvertPointBase;
                            data.ScheduleConvertPointBase = dataConfig.ScheduleConvertPointBase;
                            data.MeetConvertPointBase = dataConfig.MeetConvertPointBase;
                            data.SubmitConvertPointBase = dataConfig.SubmitConvertPointBase;
                            data.InforceConvertPointBase = dataConfig.InforceConvertPointBase;
                            data.PerformanceSettlementMonth = dataConfig.PerformanceSettlementMonth;
                            arr.push(data);
                        }
                        configObj.Configurations = arr;
                        console.debug("configObj: ", configObj);
                        console.debug("configObj: ", JSON.stringify(configObj));
                        console.debug("got SQlite year config resp: ", resp);
                        console.debug("got SQlite year config resp json: ", JSON.stringify(resp));
                        return configObj;
                    })));
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00215', 'OMG! get Year Config SQLite fail!' + error.message));
                }
                return rxjs.of(null);
            };
        /**
         * @param {?} agentID
         * @return {?}
         */
        ProgressService.prototype.GetYearConfigDataByRestful = /**
         * @param {?} agentID
         * @return {?}
         */
            function (agentID) {
                try {
                    /** @type {?} */
                    var yearConfigAPI = ( /** @type {?} */(this.APIFactory.getAPI('getYearConfig')));
                    yearConfigAPI.setAgentID(agentID);
                    return rxjs.from(this.dispatch.dispatch(yearConfigAPI).toPromise());
                }
                catch (error) {
                    this.errorHandler.handleError(new i1.APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
                    console.debug("getProgressDataByRestful agent id: ", agentID);
                }
                return rxjs.of(null);
            };
        // public GetYearConfigDataByRestful(agentID: string): Observable<any> {
        //   try {
        //     let yearConfigAPI: getYearConfigAPI = <getYearConfigAPI>this.APIFactory.getAPI('getYearConfig');
        //     yearConfigAPI.setAgentID(agentID);
        //     return from(this.dispatch.dispatch(yearConfigAPI).toPromise());
        //   }
        //   catch (error) {
        //     this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
        //     console.debug("getProgressDataByRestful agent id: ", agentID);
        //   }
        //   return of(null);
        // }
        //#endregion year config function
        //#region funtion calculate
        // public GetYearConfigDataByRestful(agentID: string): Observable<any> {
        //   try {
        //     let yearConfigAPI: getYearConfigAPI = <getYearConfigAPI>this.APIFactory.getAPI('getYearConfig');
        //     yearConfigAPI.setAgentID(agentID);
        //     return from(this.dispatch.dispatch(yearConfigAPI).toPromise());
        //   }
        //   catch (error) {
        //     this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
        //     console.debug("getProgressDataByRestful agent id: ", agentID);
        //   }
        //   return of(null);
        // }
        //#endregion year config function
        //#region funtion calculate
        /**
         * @param {?} num
         * @param {?=} sign
         * @return {?}
         */
        ProgressService.prototype.ShowDesh =
            // public GetYearConfigDataByRestful(agentID: string): Observable<any> {
            //   try {
            //     let yearConfigAPI: getYearConfigAPI = <getYearConfigAPI>this.APIFactory.getAPI('getYearConfig');
            //     yearConfigAPI.setAgentID(agentID);
            //     return from(this.dispatch.dispatch(yearConfigAPI).toPromise());
            //   }
            //   catch (error) {
            //     this.errorHandler.handleError(new APPError('F00209', 'get Progress Data By Restful fail!' + error.message));
            //     console.debug("getProgressDataByRestful agent id: ", agentID);
            //   }
            //   return of(null);
            // }
            //#endregion year config function
            //#region funtion calculate
            /**
             * @param {?} num
             * @param {?=} sign
             * @return {?}
             */
            function (num, sign) {
                if (sign === void 0) {
                    sign = "--";
                }
                if (!i1.NumberUtils.isNumber(num)) {
                    return sign;
                }
                return (num <= -1) ? sign : num.toString();
            };
        /**
         * @param {?} num
         * @param {?} muti
         * @return {?}
         */
        ProgressService.prototype.GetPoints = /**
         * @param {?} num
         * @param {?} muti
         * @return {?}
         */
            function (num, muti) {
                /** @type {?} */
                var ans = (num * muti);
                return (ans <= -1) ? "--" : ans.toString();
            };
        //if timebase == day ==> ProgressPersonalData.find one day 
        //if timebase == week ==> ProgressPersonalData.find week(week sum)that meanin if web weeksum have 3 day data
        //if timebase == day ==> ProgressPersonalData.find one day 
        //if timebase == week ==> ProgressPersonalData.find week(week sum)that meanin if web weeksum have 3 day data
        /**
         * @param {?} data
         * @return {?}
         */
        ProgressService.prototype.GetTotalPoints =
            //if timebase == day ==> ProgressPersonalData.find one day 
            //if timebase == week ==> ProgressPersonalData.find week(week sum)that meanin if web weeksum have 3 day data
            /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                //check data == -1?
                /** @type {?} */
                var checkData = new ProgressPersonalData();
                checkData.Find = (data.Find == -1) ? 0 : data.Find;
                checkData.Schedule = (data.Schedule == -1) ? 0 : data.Schedule;
                checkData.Meet = (data.Meet == -1) ? 0 : data.Meet;
                checkData.Submit = (data.Submit == -1) ? 0 : data.Submit;
                checkData.Inforce = (data.Inforce == -1) ? 0 : data.Inforce;
                /** @type {?} */
                var sum = (checkData.Find * data.FindConvertPointBase) +
                    (checkData.Schedule * data.ScheduleConvertPointBase) +
                    (checkData.Meet * data.MeetConvertPointBase) +
                    (checkData.Submit * data.SubmitConvertPointBase) +
                    (checkData.Inforce * data.InforceConvertPointBase);
                return sum;
            };
        /**
         * @param {?} data
         * @param {?} limit
         * @param {?} isWeek
         * @return {?}
         */
        ProgressService.prototype.GetPercentageCircleValue = /**
         * @param {?} data
         * @param {?} limit
         * @param {?} isWeek
         * @return {?}
         */
            function (data, limit, isWeek) {
                console.debug("_getPercentageCircleValue: ", data);
                //check data == -1?
                /** @type {?} */
                var checkData = new ProgressPersonalData();
                checkData.DataType = data.DataType;
                checkData.TimeBase = data.TimeBase;
                checkData.Find = (data.Find == -1) ? 0 : data.Find;
                checkData.Schedule = (data.Schedule == -1) ? 0 : data.Schedule;
                checkData.Meet = (data.Meet == -1) ? 0 : data.Meet;
                checkData.Submit = (data.Submit == -1) ? 0 : data.Submit;
                checkData.Inforce = (data.Inforce == -1) ? 0 : data.Inforce;
                /** @type {?} */
                var sum = (checkData.Find * data.FindConvertPointBase) +
                    (checkData.Schedule * data.ScheduleConvertPointBase) +
                    (checkData.Meet * data.MeetConvertPointBase) +
                    (checkData.Submit * data.SubmitConvertPointBase) +
                    (checkData.Inforce * data.InforceConvertPointBase);
                /** @type {?} */
                var max = (isWeek == true) ? limit * 7 : limit;
                /** @type {?} */
                var ans = (sum / max);
                console.debug("_getPercentageCircleValue ans max sum: ", ans, max, sum);
                if (ans == 0 || !i1.NumberUtils.isNumber(ans))
                    return "0";
                return (ans >= 1) ? "1" : ans.toFixed(2);
            };
        /**
         * @param {?} numerator
         * @param {?} denominator
         * @return {?}
         */
        ProgressService.prototype.GetPercentage = /**
         * @param {?} numerator
         * @param {?} denominator
         * @return {?}
         */
            function (numerator, denominator) {
                if (numerator <= 0 || denominator <= 0)
                    return 0;
                /** @type {?} */
                var ans = Math.round((numerator / denominator) * 100);
                return (ans) ? ans : 0;
            };
        /**
         * @param {?} numerator
         * @param {?} denominator
         * @param {?} maxLength
         * @param {?} maxBase
         * @return {?}
         */
        ProgressService.prototype.GetPercentageLength = /**
         * @param {?} numerator
         * @param {?} denominator
         * @param {?} maxLength
         * @param {?} maxBase
         * @return {?}
         */
            function (numerator, denominator, maxLength, maxBase) {
                if (numerator <= 0 || denominator <= 0)
                    return 0;
                /** @type {?} */
                var ans = Math.round((numerator / denominator) * 100) / maxBase;
                return (ans >= maxLength) ? maxLength : ans;
            };
        ProgressService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        ProgressService.ctorParameters = function () {
            return [
                { type: i1.APIDispatch },
                { type: i1.APIFactory },
                { type: i1.DeviceService },
                { type: i1.NotificationMgr },
                { type: i2.NotificationUtils },
                { type: i0.ErrorHandler }
            ];
        };
        /** @nocollapse */ ProgressService.ngInjectableDef = i0.defineInjectable({ factory: function ProgressService_Factory() { return new ProgressService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.DeviceService), i0.inject(i1.NotificationMgr), i0.inject(i2.NotificationUtils), i0.inject(i0.ErrorHandler)); }, token: ProgressService, providedIn: "root" });
        __decorate([
            i1.Valid('ProgressDirectIndirectData'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", rxjs.Observable)
        ], ProgressService.prototype, "GetDrillDwonAgentIdObj", null);
        __decorate([
            i1.Valid('ProgressDirectIndirectData'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", rxjs.Observable)
        ], ProgressService.prototype, "GetDrillDownAgentIdObjRouterNameObj", null);
        __decorate([
            i1.Valid('ProgressObj'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Array]),
            __metadata("design:returntype", rxjs.Observable)
        ], ProgressService.prototype, "GetProgressDataBySQLite", null);
        __decorate([
            i1.Valid('ConfigurationObj'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", rxjs.Observable)
        ], ProgressService.prototype, "GetYearConfigDataBySQLite", null);
        return ProgressService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressActualValue = /** @class */ (function () {
        function ProgressActualValue(id, year, performanceType, dataType, month, value) {
            this._clientID = id;
            this._dataYear = year;
            this._performanceType = performanceType;
            this._dataType = dataType;
            this._month = month;
            this._value = value;
        }
        Object.defineProperty(ProgressActualValue.prototype, "ClientID", {
            //client id
            get: 
            //client id
            /**
             * @return {?}
             */
            function () {
                return this._clientID;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._clientID = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressActualValue.prototype, "DataYear", {
            //data year
            get: 
            //data year
            /**
             * @return {?}
             */
            function () {
                return this._dataYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._dataYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressActualValue.prototype, "PerformanceType", {
            //performance type
            get: 
            //performance type
            /**
             * @return {?}
             */
            function () {
                return this._performanceType;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._performanceType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressActualValue.prototype, "DataType", {
            //data type
            get: 
            //data type
            /**
             * @return {?}
             */
            function () {
                return this._dataType;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._dataType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressActualValue.prototype, "Month", {
            //month
            get: 
            //month
            /**
             * @return {?}
             */
            function () {
                return this._month;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._month = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressActualValue.prototype, "Value", {
            //value
            get: 
            //value
            /**
             * @return {?}
             */
            function () {
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
            __metadata("design:type", String)
        ], ProgressActualValue.prototype, "_clientID", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressActualValue.prototype, "_dataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressActualValue.prototype, "_performanceType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressActualValue.prototype, "_dataType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressActualValue.prototype, "_month", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressActualValue.prototype, "_value", void 0);
        ProgressActualValue = __decorate([
            i1.Bean('ProgressActualValue'),
            __metadata("design:paramtypes", [String, Number, String, String, Number, Number])
        ], ProgressActualValue);
        return ProgressActualValue;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PersonalData = /** @class */ (function () {
        function PersonalData(dataYear, timeBase, dataType, find, schedule, meet, submit, inforce) {
            this._dataYear = dataYear;
            this._timeBase = timeBase;
            this._dataType = dataType;
            this._find = find;
            this._schedule = schedule;
            this._meet = meet;
            this._submit = submit;
            this._inforce = inforce;
        }
        Object.defineProperty(PersonalData.prototype, "DataYear", {
            //#region Getter setter
            //year
            get: 
            //#region Getter setter
            //year
            /**
             * @return {?}
             */
            function () {
                return this._dataYear;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "DataTear", {
            set: /**
             * @param {?} year
             * @return {?}
             */ function (year) {
                this._dataYear = year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "TimeBase", {
            // time base
            get: 
            // time base
            /**
             * @return {?}
             */
            function () {
                return this._timeBase;
            },
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._timeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "DataType", {
            //type
            get: 
            //type
            /**
             * @return {?}
             */
            function () {
                return this._dataType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "DataTypet", {
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._dataType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "Find", {
            //find
            get: 
            //find
            /**
             * @return {?}
             */
            function () {
                return this._find;
            },
            set: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                this._find = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "Schedule", {
            //schedule
            get: 
            //schedule
            /**
             * @return {?}
             */
            function () {
                return this._schedule;
            },
            set: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                this._schedule = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "Meet", {
            //meet
            get: 
            //meet
            /**
             * @return {?}
             */
            function () {
                return this._meet;
            },
            set: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                this._meet = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "Submit", {
            //submit
            get: 
            //submit
            /**
             * @return {?}
             */
            function () {
                return this._submit;
            },
            set: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                this._submit = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalData.prototype, "Inforce", {
            //inforce
            get: 
            //inforce
            /**
             * @return {?}
             */
            function () {
                return this._inforce;
            },
            set: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                this._inforce = num;
            },
            enumerable: true,
            configurable: true
        });
        //#endregion
        //#endregion
        /**
         * @return {?}
         */
        PersonalData.prototype.getTotalCount =
            //#endregion
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var sum = this.Find + this.Schedule + this.Meet + this.Submit + this.Inforce;
                return sum;
            };
        /**
         * @return {?}
         */
        PersonalData.prototype.getTotalPoints = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var sum = this.getFindPoints() + this.getSchedulePoints() + this.getMeetPoints() + this.getSubmitPoints() + this.getInforcePoints();
                return sum;
            };
        /**
         * @param {?} numerator
         * @param {?} denominator
         * @return {?}
         */
        PersonalData.prototype.getDifferentPercentage = /**
         * @param {?} numerator
         * @param {?} denominator
         * @return {?}
         */
            function (numerator, denominator) {
                return Math.round((numerator / denominator) * 100);
            };
        /*
        // 1 1 2 10 2   f /s /m /su /i
        getFindPoints(dot:number) : number {
            return this.Find * dot ;
        }

        getSchedulePoints(dot:number) : number {
            return this.Schedule  * dot;
        }

        getMeetPoints(dot:number) : number {
            return this.Meet * dot;
        }

        getSubmitPoints(dot:number) : number {
            return this.Submit * dot;
        }

        getInforcePoints(dot:number) : number {
            return this.Inforce  * dot;
        }

        /*
        getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
            return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
        }
        */
        /*
            // 1 1 2 10 2   f /s /m /su /i
            getFindPoints(dot:number) : number {
                return this.Find * dot ;
            }
        
            getSchedulePoints(dot:number) : number {
                return this.Schedule  * dot;
            }
        
            getMeetPoints(dot:number) : number {
                return this.Meet * dot;
            }
        
            getSubmitPoints(dot:number) : number {
                return this.Submit * dot;
            }
        
            getInforcePoints(dot:number) : number {
                return this.Inforce  * dot;
            }
        
            /*
            getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
                return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
            }
            */
        /**
         * @return {?}
         */
        PersonalData.prototype.getFindPoints = /*
            // 1 1 2 10 2   f /s /m /su /i
            getFindPoints(dot:number) : number {
                return this.Find * dot ;
            }
        
            getSchedulePoints(dot:number) : number {
                return this.Schedule  * dot;
            }
        
            getMeetPoints(dot:number) : number {
                return this.Meet * dot;
            }
        
            getSubmitPoints(dot:number) : number {
                return this.Submit * dot;
            }
        
            getInforcePoints(dot:number) : number {
                return this.Inforce  * dot;
            }
        
            /*
            getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
                return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
            }
            */
            /**
             * @return {?}
             */
            function () {
                return this.Find * 1;
            };
        /**
         * @return {?}
         */
        PersonalData.prototype.getSchedulePoints = /**
         * @return {?}
         */
            function () {
                return this.Schedule * 1;
            };
        /**
         * @return {?}
         */
        PersonalData.prototype.getMeetPoints = /**
         * @return {?}
         */
            function () {
                return this.Meet * 2;
            };
        /**
         * @return {?}
         */
        PersonalData.prototype.getSubmitPoints = /**
         * @return {?}
         */
            function () {
                return this.Submit * 10;
            };
        /**
         * @return {?}
         */
        PersonalData.prototype.getInforcePoints = /**
         * @return {?}
         */
            function () {
                return this.Inforce * 2;
            };
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], PersonalData.prototype, "_dataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], PersonalData.prototype, "_timeBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], PersonalData.prototype, "_dataType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], PersonalData.prototype, "_find", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], PersonalData.prototype, "_schedule", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], PersonalData.prototype, "_meet", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], PersonalData.prototype, "_submit", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], PersonalData.prototype, "_inforce", void 0);
        PersonalData = __decorate([
            i1.Bean('PersonalData'),
            __metadata("design:paramtypes", [Number, String, String, Number, Number, Number, Number, Number])
        ], PersonalData);
        return PersonalData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PersonalDataState = /** @class */ (function () {
        function PersonalDataState() {
            this._dataYear = -1;
            this._timeBase = PersonalDataTimeBase.Unknow;
            this._dataType = PersonalDataType.Unknow;
        }
        Object.defineProperty(PersonalDataState.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataYear;
            },
            set: /**
             * @param {?} year
             * @return {?}
             */ function (year) {
                this._dataYear = year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalDataState.prototype, "TimeBase", {
            // time base
            get: 
            // time base
            /**
             * @return {?}
             */
            function () {
                return this._timeBase;
            },
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._timeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalDataState.prototype, "DataType", {
            //type
            get: 
            //type
            /**
             * @return {?}
             */
            function () {
                return this._dataType;
            },
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._dataType = type;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], PersonalDataState.prototype, "_dataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], PersonalDataState.prototype, "_timeBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], PersonalDataState.prototype, "_dataType", void 0);
        PersonalDataState = __decorate([
            i1.Bean('PersonalDataState'),
            __metadata("design:paramtypes", [])
        ], PersonalDataState);
        return PersonalDataState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ProgressBarControlModeType = {
        TWMode: "TWMode",
        Unknow: "Unknow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressBarControlData = /** @class */ (function () {
        function ProgressBarControlData() {
            this._barLengthMaxValue = 1.5;
        }
        Object.defineProperty(ProgressBarControlData.prototype, "barLengthMaxValue", {
            get: /**
             * @return {?}
             */ function () {
                return this._barLengthMaxValue;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._barLengthMaxValue = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} type
         * @return {?}
         */
        ProgressBarControlData.prototype.GetConfigMin = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                switch (type) {
                    case ProgressBarControlModeType.TWMode:
                        return 70;
                    case ProgressBarControlModeType.Unknow:
                        return 0;
                    default:
                        return 0;
                }
            };
        /**
         * @param {?} type
         * @return {?}
         */
        ProgressBarControlData.prototype.GetConfigMax = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                switch (type) {
                    case ProgressBarControlModeType.TWMode:
                        return 100;
                    case ProgressBarControlModeType.Unknow:
                        return 0;
                    default:
                        return 0;
                }
            };
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressBarControlData.prototype, "_barLengthMaxValue", void 0);
        ProgressBarControlData = __decorate([
            i1.Bean('ProgressBarControlData')
        ], ProgressBarControlData);
        return ProgressBarControlData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressDirectData = /** @class */ (function () {
        function ProgressDirectData() {
            this.AgentID = "";
            this.AgentName = "";
            this.JobGrade = "";
            this.Drilldown = false;
            this.TimeBase = PersonalDataTimeBase.Unknow;
            this.DataType = ProgressDataTeamValueType.Unknow;
            //public Activities: ActivitiesType = ActivitiesType.Unknow;
            this.Activities = "";
            this.Goal = 0;
            this.Forecast = 0;
            this.Actual = 0;
            this.Shortfall = 0;
        }
        return ProgressDirectData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressIndirectData = /** @class */ (function () {
        function ProgressIndirectData() {
            this.AgentID = "";
            this.AgentName = "";
            this.JobGrade = "";
            this.Drilldown = false;
            this.TimeBase = PersonalDataTimeBase.Unknow;
            this.DataType = ProgressDataTeamValueType.Unknow;
            //public Activities: ActivitiesType = ActivitiesType.Unknow;
            this.Activities = "";
            this.Goal = 0;
            this.Forecast = 0;
            this.Actual = 0;
            this.Shortfall = 0;
        }
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressIndirectData.prototype, "AgentID", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressIndirectData.prototype, "AgentName", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressIndirectData.prototype, "JobGrade", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Boolean)
        ], ProgressIndirectData.prototype, "Drilldown", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressIndirectData.prototype, "TimeBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressIndirectData.prototype, "DataType", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], ProgressIndirectData.prototype, "Activities", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressIndirectData.prototype, "Goal", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressIndirectData.prototype, "Forecast", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressIndirectData.prototype, "Actual", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], ProgressIndirectData.prototype, "Shortfall", void 0);
        ProgressIndirectData = __decorate([
            i1.Bean('ProgressIndirectData')
        ], ProgressIndirectData);
        return ProgressIndirectData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TeamDataState = /** @class */ (function () {
        function TeamDataState() {
            this._dataYear = -1;
            this._timeBase = PersonalDataTimeBase.Unknow;
            this._teamValueType = ProgressDataTeamValueType.FYFC;
        }
        Object.defineProperty(TeamDataState.prototype, "DataYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataYear;
            },
            set: /**
             * @param {?} year
             * @return {?}
             */ function (year) {
                this._dataYear = year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamDataState.prototype, "TimeBase", {
            // time base
            get: 
            // time base
            /**
             * @return {?}
             */
            function () {
                return this._timeBase;
            },
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._timeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TeamDataState.prototype, "TeamValueType", {
            //team value type
            get: 
            //team value type
            /**
             * @return {?}
             */
            function () {
                return this._teamValueType;
            },
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._teamValueType = type;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            i1.Required,
            __metadata("design:type", Number)
        ], TeamDataState.prototype, "_dataYear", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], TeamDataState.prototype, "_timeBase", void 0);
        __decorate([
            i1.Required,
            __metadata("design:type", String)
        ], TeamDataState.prototype, "_teamValueType", void 0);
        TeamDataState = __decorate([
            i1.Bean('TeamDataState'),
            __metadata("design:paramtypes", [])
        ], TeamDataState);
        return TeamDataState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressListContentClass = /** @class */ (function () {
        function ProgressListContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            // week day
            this.WeekText = "";
            this.TodayText = "";
            //Find Schedule Meet Submit Inforce
            this.FindNameText = "";
            this.FindContentText = "";
            this.FindUnitText = "";
            this.ScheduleNameText = "";
            this.ScheduleContentText = "";
            this.ScheduleUnitText = "";
            this.MeetNameText = "";
            this.MeetContentText = "";
            this.MeetUnitText = "";
            this.SubmitNameText = "";
            this.SubmitContentText = "";
            this.SubmitUnitText = "";
            this.InforceNameText = "";
            this.InforceContentText = "";
            this.InforceUnitText = "";
            this.AlmostMadeItMsg = "";
            this.CongratulationsMsg = "";
            this.WellDoneMsg = "";
            this.GreatJobMsg = "";
            //units
            this.PointsText = "";
            this._setTranslateVariable();
            this.WeekText = this._translateWithVariable('Week');
            this.TodayText = this._translateWithVariable('Today');
            this.FindNameText = this._translateWithVariable('Find');
            this.FindContentText = this._translateWithVariable('Find_Subtitle');
            this.FindUnitText = this._translateWithVariable('People');
            this.ScheduleNameText = this._translateWithVariable('Schedule');
            this.ScheduleContentText = this._translateWithVariable('Schedule_Subtitle');
            this.ScheduleUnitText = this._translateWithVariable('Times');
            this.MeetNameText = this._translateWithVariable('Meet');
            this.MeetContentText = this._translateWithVariable('Meet_Subtitle');
            this.MeetUnitText = this._translateWithVariable('Times');
            this.SubmitNameText = this._translateWithVariable('Submit');
            this.SubmitContentText = this._translateWithVariable('Submit_Subtitle');
            this.SubmitUnitText = this._translateWithVariable('Times');
            this.InforceNameText = this._translateWithVariable('Inforce');
            this.InforceContentText = this._translateWithVariable('Inforce_Subtitle');
            this.InforceUnitText = this._translateWithVariable('Times');
            this.PointsText = this._translateWithVariable('Points');
            this.CongratulationsMsg = this._translateWithVariable('Progress_Congratulations_Message');
            this.AlmostMadeItMsg = this._translateWithVariable('Progress_Almost_Made_It_Message');
            this.WellDoneMsg = this._translateWithVariable('Progress_Well_Done_Message');
            this.GreatJobMsg = this._translateWithVariable('Progress_Great_Job_Message');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressListContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                    "gratsPoints": 20,
                    "wellDownPoints": 10
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressListContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressListContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressContentClass = /** @class */ (function () {
        function ProgressContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            //personal team
            this.PersonalText = "";
            this.TeamText = "";
            this.MonthText = "";
            this.QuarterText = "";
            this.YearText = "";
            this.BackToProgressBtnText = "";
            this._setTranslateVariable();
            this.PersonalText = this._translateWithVariable('Personal');
            this.TeamText = this._translateWithVariable('Team');
            this.MonthText = this._translateWithVariable('Month');
            this.QuarterText = this._translateWithVariable('Quarter');
            this.YearText = this._translateWithVariable('Year');
            this.BackToProgressBtnText = this._translateWithVariable('Back_To_Progress');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressActivityListContentClass = /** @class */ (function () {
        function ProgressActivityListContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            this.ActivitiesText = "";
            this.AchieveText = "";
            this.FindText = "";
            this.FindContentText = "";
            this.ScheduleText = "";
            this.ScheduleContentText = "";
            this.MeetPresentText = "";
            this.MeetPresentContentText = "";
            this.SubmitText = "";
            this.SubmitContentText = "";
            this.InforceText = "";
            this.InforceContentText = "";
            this.ActualGoalText = "";
            this.ActualPlanText = "";
            this._setTranslateVariable();
            this.ActivitiesText = this._translateWithVariable('Activities');
            this.AchieveText = this._translateWithVariable('Achieve');
            this.ActualGoalText = this._translateWithVariable('Actual_Goal');
            this.ActualPlanText = this._translateWithVariable('Actual_Plan');
            this.FindText = this._translateWithVariable('Find');
            this.FindContentText = this._translateWithVariable('Find_Subtitle');
            this.ScheduleText = this._translateWithVariable('Schedule');
            this.ScheduleContentText = this._translateWithVariable('Schedule_Subtitle');
            this.MeetPresentText = this._translateWithVariable('Meet_Present');
            this.MeetPresentContentText = this._translateWithVariable('Meet_Subtitle');
            this.SubmitText = this._translateWithVariable('Submit');
            this.SubmitContentText = this._translateWithVariable('Submit_Subtitle');
            this.InforceText = this._translateWithVariable('Inforce');
            this.InforceContentText = this._translateWithVariable('Inforce_Subtitle');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressActivityListContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressActivityListContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressActivityListContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressMonthlyContentClass = /** @class */ (function () {
        function ProgressMonthlyContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            this.MonthlyPlanFYFCTitleText = "";
            this.MonthText = "";
            this.PlanText = "";
            this.ActualText = "";
            this.TotalForecastTitle = "";
            this.TotalYTDActualTitle = "";
            this._setTranslateVariable();
            this.MonthlyPlanFYFCTitleText = this._translateWithVariable('Monthly_Plan_FYFC_Title');
            this.MonthText = this._translateWithVariable('Month');
            this.ActualText = this._translateWithVariable('Actual');
            this.PlanText = this._translateWithVariable('Plan');
            this.TotalForecastTitle = this._translateWithVariable('Total_Forecast');
            this.TotalYTDActualTitle = this._translateWithVariable('Total_YTD_Actual');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressMonthlyContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressMonthlyContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressMonthlyContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressTeamContentClass = /** @class */ (function () {
        function ProgressTeamContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            this.MonthText = "";
            this.QuarterText = "";
            this.YearText = "";
            this.ManpowerText = "";
            this.RecruitmentText = "";
            this._setTranslateVariable();
            this.MonthText = this._translateWithVariable('Month');
            this.QuarterText = this._translateWithVariable('Quarter');
            this.YearText = this._translateWithVariable('Year');
            this.ManpowerText = this._translateWithVariable('Manpower');
            this.RecruitmentText = this._translateWithVariable('Recruitment');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressTeamContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressTeamContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressTeamContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressTeamDirectContentClass = /** @class */ (function () {
        function ProgressTeamDirectContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            this.DirectUnitTitle = "";
            this.ActivitiesText = "";
            this.GoalText = "";
            this.ForecastText = "";
            this.ActualText = "";
            this.ShortfallText = "";
            this._setTranslateVariable();
            this.DirectUnitTitle = this._translateWithVariable('Direct_Unit_Title');
            this.ActivitiesText = this._translateWithVariable('Activities');
            this.ActualText = this._translateWithVariable('Actual');
            this.ForecastText = this._translateWithVariable('Forecast');
            this.GoalText = this._translateWithVariable('Goal');
            this.ShortfallText = this._translateWithVariable('Shortfall');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressTeamDirectContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressTeamDirectContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressTeamDirectContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressTeamIndirectContentClass = /** @class */ (function () {
        function ProgressTeamIndirectContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            this.IndirectUnitTitle = "";
            this.GoalText = "";
            this.ForecastText = "";
            this.ActualText = "";
            this.ShortfallText = "";
            this._setTranslateVariable();
            this.IndirectUnitTitle = this._translateWithVariable('Indirect_Unit_Title');
            this.GoalText = this._translateWithVariable('Goal');
            this.ForecastText = this._translateWithVariable('Forecast');
            this.ActualText = this._translateWithVariable('Actual');
            this.ShortfallText = this._translateWithVariable('Shortfall');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressTeamIndirectContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressTeamIndirectContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressTeamIndirectContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressTeamMainContentClass = /** @class */ (function () {
        function ProgressTeamMainContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            this._language = new i1.Language();
            this.AgencyTitle = "";
            this.AllZoneTitle = "";
            this.GoalText = "";
            this.ForecastText = "";
            this.ActualText = "";
            this.ManpowerText = "";
            this.ShortfallText = "";
            this.RecruitmentText = "";
            this._setTranslateVariable();
            this.AgencyTitle = this._translateWithVariable('Agency_Title');
            this.AllZoneTitle = this._translateWithVariable('All_Zone_Title');
            this.ManpowerText = this._translateWithVariable(this._language.progressManpower);
            this.RecruitmentText = this._translateWithVariable(this._language.progressRecruitment);
            this.GoalText = this._translateWithVariable(this._language.progressGoal);
            this.ActualText = this._translateWithVariable(this._language.progressActual);
            this.ForecastText = this._translateWithVariable(this._language.progressForecast);
            this.ShortfallText = this._translateWithVariable(this._language.progressShortfall);
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressTeamMainContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressTeamMainContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressTeamMainContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressHeadContentClass = /** @class */ (function () {
        function ProgressHeadContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            //personal team
            this.MonthText = "";
            this.QuarterText = "";
            this.YearText = "";
            this.ManpowerText = "";
            this.RecruitmentText = "";
            this.GoalText = "";
            this.ForecastText = "";
            this.ActualText = "";
            this.ShortfallText = "";
            this._setTranslateVariable();
            this.MonthText = this._translateWithVariable('Month');
            this.QuarterText = this._translateWithVariable('Quarter');
            this.YearText = this._translateWithVariable('Year');
            this.ManpowerText = this._translateWithVariable('Manpower');
            this.RecruitmentText = this._translateWithVariable('Recruitment');
            this.GoalText = this._translateWithVariable('Goal');
            this.ForecastText = this._translateWithVariable('Forecast');
            this.ActualText = this._translateWithVariable('Actual');
            this.ShortfallText = this._translateWithVariable('Shortfall');
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        ProgressHeadContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        ProgressHeadContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return ProgressHeadContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InfoContentClass = /** @class */ (function () {
        function InfoContentClass(translateService) {
            this.translateService = translateService;
            //save and set translate variables
            this._translateVariable = null;
            //progress head table info
            this.MonthText = "";
            this.QuarterText = "";
            this.YearText = "";
            this.ForecastText = "";
            this.RecruitmentText = "";
            this.InformationDescriptionText = "";
            this.InfoTitle = "";
            this.InfoMonthDetailText = "";
            this.InfoQuarterDetailText = "";
            this.InfoYearDetailText = "";
            this.InfoForecastRecruitmentDetailText = "";
            this.InfoAllAmountCountsByMillionText = "";
            //progress-personal-progressbar-list info
            this.InfoHowToReadThisTitle = "";
            this.InfoConversionRateText = "";
            this.InfoConversionRateDetailText = "";
            //progress-team-direct-unit info
            this.InfoActivityLabelText = "";
            this.InfoRedMeanText = "";
            this.InfoGreyMeanText = "";
            this.InfoIfAnActivity1Text = "";
            this.InfoIfAnActivity2Text = "";
            this.InfoToFindText = "";
            this.InfoTryTo1Text = "";
            this.InfoTryTo2Text = "";
            this.InfoTryTo3Text = "";
            this.InfoMoreActive1Text = "";
            this.InfoMoreActive2Text = "";
            this.InfoMoreActive3Text = "";
            this.InfoMoreActive4Text = "";
            this.InfoTryHard1Text = "";
            this.InfoTryHard2Text = "";
            this.InfoTryHard3Text = "";
            this.InfoHighQuality1Text = "";
            this.InfoHighQuality2Text = "";
            this._setTranslateVariable();
            //progress head table info
            this.MonthText = this._translateWithVariable('Month');
            this.QuarterText = this._translateWithVariable('Quarter');
            this.YearText = this._translateWithVariable('Year');
            this.ForecastText = this._translateWithVariable('Forecast');
            this.RecruitmentText = this._translateWithVariable('Recruitment');
            this.InformationDescriptionText = this._translateWithVariable('Info_Information_Description');
            this.InfoTitle = this._translateWithVariable('Info_Title');
            this.InfoMonthDetailText = this._translateWithVariable('Info_Month_Detail');
            this.InfoQuarterDetailText = this._translateWithVariable('Info_Quarter_Detail');
            this.InfoYearDetailText = this._translateWithVariable('Info_Year_Detail');
            this.InfoForecastRecruitmentDetailText = this._translateWithVariable('Info_Forecast_Recruitment_Detail');
            //progress-personal-progressbar-list info
            this.InfoHowToReadThisTitle = this._translateWithVariable('Info_How_To_Read_This');
            this.InfoConversionRateText = this._translateWithVariable('Info_Conversion_Rate');
            this.InfoConversionRateDetailText = this._translateWithVariable('Info_Conversion_Rate_Detail');
            //progress-team-direct-unit
            this.InfoActivityLabelText = this._translateWithVariable('Info_Activity_Label');
            this.InfoRedMeanText = this._translateWithVariable('Info_Red_Mean');
            this.InfoGreyMeanText = this._translateWithVariable('Info_Grey_Mean');
            this.InfoIfAnActivity1Text = this._translateWithVariable('Info_If_An_Activity_1');
            this.InfoIfAnActivity2Text = this._translateWithVariable('Info_If_An_Activity_2');
            this.InfoToFindText = this._translateWithVariable('Info_To_Find');
            this.InfoTryTo1Text = this._translateWithVariable('Info_Try_To_1');
            this.InfoTryTo2Text = this._translateWithVariable('Info_Try_To_2');
            this.InfoTryTo3Text = this._translateWithVariable('Info_Try_To_3');
            this.InfoMoreActive1Text = this._translateWithVariable('Info_More_Active_1');
            this.InfoMoreActive2Text = this._translateWithVariable('Info_More_Active_2');
            this.InfoMoreActive3Text = this._translateWithVariable('Info_More_Active_3');
            this.InfoMoreActive4Text = this._translateWithVariable('Info_More_Active_4');
            this.InfoTryHard1Text = this._translateWithVariable('Info_Try_Hard_1');
            this.InfoTryHard2Text = this._translateWithVariable('Info_Try_Hard_2');
            this.InfoTryHard3Text = this._translateWithVariable('Info_Try_Hard_3');
            this.InfoHighQuality1Text = this._translateWithVariable('Info_High_Quality_1');
            this.InfoHighQuality2Text = this._translateWithVariable('Info_High_Quality_2');
            this.InfoAllAmountCountsByMillionText = this._translateWithVariable("Info_All_Amount_Counts_By_Million");
        }
        //set translate variables
        //set translate variables
        /**
         * @private
         * @return {?}
         */
        InfoContentClass.prototype._setTranslateVariable =
            //set translate variables
            /**
             * @private
             * @return {?}
             */
            function () {
                this._translateVariable = {
                // "gratsPoints": 20,
                };
            };
        /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
        InfoContentClass.prototype._translateWithVariable = /**
         * @private
         * @param {?} mappingID
         * @return {?}
         */
            function (mappingID) {
                return this.translateService.translateWithVariable(mappingID, this._translateVariable);
            };
        return InfoContentClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ActivitiesType = {
        Find: "F",
        Schedule: "S",
        Meet: "M",
        Submit: "Su",
        Inforce: "I",
        Unknow: "Unknow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ActualValueDataType = {
        FYFC: "FYFC",
        ANP: "ANP",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var PerformanceType = {
        Personal: "P",
        Team: "T",
        unknow: "U",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var Quarters = {
        Q1: "Q1",
        Q2: "Q2",
        Q3: "Q3",
        Q4: "Q4",
        Unknow: "unknow",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressModule = /** @class */ (function () {
        function ProgressModule() {
        }
        ProgressModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CoreModule,
                            ui.UIModule,
                            common.CommonModule
                        ],
                        declarations: [],
                        exports: []
                    },] }
        ];
        return ProgressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetPersonalProgressAPI = /** @class */ (function () {
        function GetPersonalProgressAPI(daoFactory) {
            this._year = -1;
            this._daoFactory = daoFactory;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        GetPersonalProgressAPI.prototype.SetYear = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._year = value;
            };
        /**
         * @return {?}
         */
        GetPersonalProgressAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getPersonalProgress';
            };
        /**
         * @return {?}
         */
        GetPersonalProgressAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getPersonalProgressMock.json';
            };
        /**
         * @return {?}
         */
        GetPersonalProgressAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite Start ");
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite defaultDao: ", defaultDao);
                /** @type {?} */
                var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Personal_Progress");
                console.debug("SQLite tableObj: ", tableObj);
                if (defaultDao != undefined && tableObj != undefined) {
                    return rxjs.from(defaultDao.queryByTable(tableObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite getPersonalProgress resp: ", resp);
                        console.debug("SQLite getPersonalProgress json resp: ", JSON.stringify(resp));
                        return resp;
                    })));
                }
                else {
                    rxjs.of(false);
                    console.debug("SQLite failed");
                }
            };
        return GetPersonalProgressAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetProgressActualValueAPI = /** @class */ (function () {
        /*
        constructor(DaoFactory) {
            this._daoFactory = DaoFactory;
        }
        */
        function GetProgressActualValueAPI() {
        }
        Object.defineProperty(GetProgressActualValueAPI.prototype, "ClientId", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._clientID = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressActualValueAPI.prototype, "DataType", {
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._personalDataType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressActualValueAPI.prototype, "TimeBase", {
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._personalDataTimeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} year
         * @return {?}
         */
        GetProgressActualValueAPI.prototype.setDataYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this._dataYear = year;
            };
        /**
         * @return {?}
         */
        GetProgressActualValueAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getProgressActualValue';
            };
        /**
         * @return {?}
         */
        GetProgressActualValueAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                //alert("personal progress mock data");
                if (this._dataYear == 2019) {
                    return './assets/mock/getProgressActualValue_2019.json';
                }
                else if (this._dataYear == 2020) {
                    return './assets/mock/getProgressActualValue_2020.json';
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
        GetProgressActualValueAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                throw new Error("Method not implemented.");
            };
        return GetProgressActualValueAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetProgressDataActualValueAPI = /** @class */ (function () {
        function GetProgressDataActualValueAPI(daoFactory) {
            this._daoFactory = daoFactory;
        }
        Object.defineProperty(GetProgressDataActualValueAPI.prototype, "SearchYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._searchYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._searchYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataActualValueAPI.prototype, "ClientId", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._clientID = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataActualValueAPI.prototype, "DataType", {
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._personalDataType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataActualValueAPI.prototype, "TimeBase", {
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._personalDataTimeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GetProgressDataActualValueAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getProgressDataActualValue';
            };
        /**
         * @return {?}
         */
        GetProgressDataActualValueAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                //alert("personal progress mock data");
                return './assets/mock/getProgressDataActualValueMock.json';
            };
        /**
         * @return {?}
         */
        GetProgressDataActualValueAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite actual start ");
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite actual defaultDao: ", defaultDao);
                /** @type {?} */
                var progressActualObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Actual_Value");
                console.debug("SQLite actual progressActualObj: ", progressActualObj);
                if (defaultDao != undefined && progressActualObj != undefined) {
                    return rxjs.from(defaultDao.queryByTable(progressActualObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite actual data api resp: ", resp);
                    })).then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var data = resp["Body"];
                        /** @type {?} */
                        var filterData = data.filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return x.DataYear == 2019; }));
                        /** @type {?} */
                        var filterData2 = data.filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return x.DataYear == 2020; }));
                        console.debug("SQLite actual test date body: ", data);
                        console.debug("SQLite actual test filterData: ", filterData);
                        console.debug("SQLite actual test filterData2: ", filterData2);
                        /** @type {?} */
                        var arr = [];
                        arr.push(filterData);
                        arr.push(filterData2);
                        console.debug("SQLite actual test arr: ", arr);
                        return arr;
                    })).then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var data = resp;
                        /** @type {?} */
                        var progressActualObj1 = {
                            "DataYear": "2019",
                            "TimeBase": "Month",
                            "Values": [],
                        };
                        /** @type {?} */
                        var progressActualObj2 = {
                            "DataYear": "2020",
                            "TimeBase": "Month",
                            "Values": []
                        };
                        progressActualObj1.Values.push(data[0]);
                        progressActualObj2.Values.push(data[1]);
                        /** @type {?} */
                        var progressActualObjArr = [];
                        progressActualObjArr.push(progressActualObj1);
                        progressActualObjArr.push(progressActualObj2);
                        console.debug("SQLite actual test progressActualObj123: ", progressActualObjArr);
                        return progressActualObjArr;
                    })).then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var data = resp;
                        console.debug("SQLite actual test resp progressActualObj123 : ", resp);
                        console.debug("SQLite actual test data progressActualObj123 : ", data);
                        /** @type {?} */
                        var defaultProgressActualObj = {
                            "lastUpdateTime": "2019-06-19",
                            "Actual": [],
                        };
                        defaultProgressActualObj.Actual.push(data[0]);
                        defaultProgressActualObj.Actual.push(data[1]);
                        console.debug("SQLite actual test defaultProgressActualObj : ", defaultProgressActualObj);
                        return defaultProgressActualObj;
                    })));
                }
                else {
                    console.debug("SQLite actual data fail......");
                }
                //throw new Error("Method not implemented.");
            };
        return GetProgressDataActualValueAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetProgressDataAPI = /** @class */ (function () {
        function GetProgressDataAPI(daoFactory) {
            this._clientID = 0;
            this._personalDataType = PersonalDataType.Actual;
            this._personalDataTimeBase = PersonalDataTimeBase.Day;
            this._searchYear = 0;
            this._daoFactory = daoFactory;
        }
        Object.defineProperty(GetProgressDataAPI.prototype, "SearchYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._searchYear;
            },
            //condition year
            set: 
            //condition year
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._searchYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataAPI.prototype, "SearchClientId", {
            //condition client id
            set: 
            //condition client id
            /**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                this._clientID = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataAPI.prototype, "SearchCLientId", {
            get: /**
             * @return {?}
             */ function () {
                return this._clientID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataAPI.prototype, "SearchDataType", {
            get: /**
             * @return {?}
             */ function () {
                return this._personalDataType;
            },
            //condition data type
            set: 
            //condition data type
            /**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                this._personalDataType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataAPI.prototype, "SearchTimeBase", {
            get: /**
             * @return {?}
             */ function () {
                return this._personalDataTimeBase;
            },
            //condition time base
            set: 
            //condition time base
            /**
             * @param {?} time
             * @return {?}
             */
            function (time) {
                this._personalDataTimeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GetProgressDataAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getProgressData';
            };
        /**
         * @return {?}
         */
        GetProgressDataAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getProgressDataMock.json';
            };
        /**
         * @return {?}
         */
        GetProgressDataAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite progress start ");
                /*
                        let defaultProgressObj =
                        {
                            "lastUpdateTime": "",
                            "Progress":[],
                        };
                        */
                /*
                        // Progress [progressObj, progressObj] *2
                        let progressObj:
                        {
                            "DataYear": "",
                            "YesterdayPoint": "",
                            "Values":[]
                        };
                        */
                /*
                        // progressObj.Value[] * n
                        let progresValueObj =
                        {
                            "DataType":"",
                            "TimeBase": "",
                            "FYFC": 0,
                            "Find": 0,
                            "Schedule": 0,
                            "Meet": 0,
                            "Submit": 0,
                            "Inforce": 0
                        };
                        */
                // test class to obj type
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite progress defaultDao: ", defaultDao);
                /** @type {?} */
                var progressTableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Personal_Progress");
                console.debug("SQLite progress progressTableObj: ", progressTableObj);
                if (progressTableObj != undefined && defaultDao != undefined) {
                    return rxjs.from(defaultDao.queryByTable(progressTableObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite progress data api resp: ", resp);
                        return resp;
                    })).then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var data = resp["Body"];
                        /** @type {?} */
                        var filterData = data.filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return x.DataYear == 2019; }));
                        /** @type {?} */
                        var filterData2 = data.filter(( /**
                         * @param {?} x
                         * @return {?}
                         */function (x) { return x.DataYear == 2020; }));
                        console.debug("SQLite progress test date body: ", data);
                        console.debug("SQLite progress test filterData: ", filterData);
                        console.debug("SQLite progress test filterData2: ", filterData2);
                        /** @type {?} */
                        var arr = [];
                        arr.push(filterData);
                        arr.push(filterData2);
                        console.debug("SQLite progress test arr: ", arr);
                        return arr;
                    })).then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var data = resp;
                        /** @type {?} */
                        var progressObj1 = {
                            "DataYear": "2019",
                            "YesterdayPoint": "20",
                            "Personal": { Values: [] },
                        };
                        /** @type {?} */
                        var progressObj2 = {
                            "DataYear": "2020",
                            "YesterdayPoint": "20",
                            "Personal": { Values: [] },
                        };
                        progressObj1.Personal.Values.push(data[0]);
                        progressObj2.Personal.Values.push(data[1]);
                        /** @type {?} */
                        var progressObjArr = [];
                        progressObjArr.push(progressObj1);
                        progressObjArr.push(progressObj2);
                        console.debug("SQLite progress test progressObj123: ", progressObjArr);
                        return progressObjArr;
                    })).then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        /** @type {?} */
                        var data = resp;
                        console.debug("SQLite progress test resp progressObj123 : ", resp);
                        console.debug("SQLite progress test data progressObj123 : ", data);
                        /** @type {?} */
                        var defaultProgressObj = {
                            "lastUpdateTime": "2019-06-19",
                            "Progress": [],
                        };
                        defaultProgressObj.Progress.push(data[0]);
                        defaultProgressObj.Progress.push(data[1]);
                        console.debug("SQLite progress test defaultProgressObj123 : ", defaultProgressObj);
                        return defaultProgressObj;
                    })));
                }
                else {
                    console.debug("SQLite progress fail.....");
                }
            };
        return GetProgressDataAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetProgressDataGoalSettingPlanAPI = /** @class */ (function () {
        function GetProgressDataGoalSettingPlanAPI(daoFactory) {
            this._daoFactory = daoFactory;
        }
        Object.defineProperty(GetProgressDataGoalSettingPlanAPI.prototype, "SearchYear", {
            get: /**
             * @return {?}
             */ function () {
                return this._searchYear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._searchYear = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataGoalSettingPlanAPI.prototype, "ClientId", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._clientID = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataGoalSettingPlanAPI.prototype, "DataType", {
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._personalDataType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressDataGoalSettingPlanAPI.prototype, "TimeBase", {
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._personalDataTimeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GetProgressDataGoalSettingPlanAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getProgressDataGoalSettingPlan';
            };
        /**
         * @return {?}
         */
        GetProgressDataGoalSettingPlanAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                //alert("personal progress mock data");
                return './assets/mock/getProgressDataGoalSettingPlanMock.json';
            };
        /**
         * @return {?}
         */
        GetProgressDataGoalSettingPlanAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite goal plan start ");
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite goal plan defaultDao: ", defaultDao);
                /** @type {?} */
                var progressGoalPlanObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Plan_Value");
                console.debug("SQLite goal plan progressGoalPlanObj: ", progressGoalPlanObj);
                if (defaultDao != undefined && progressGoalPlanObj != undefined) {
                    return rxjs.from(defaultDao.queryByTable(progressGoalPlanObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite goal plan data api resp: ", resp);
                    })));
                }
                else {
                    console.debug("SQLite goal plan fail... ");
                }
                //throw new Error("Method not implemented.");
            };
        return GetProgressDataGoalSettingPlanAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetProgressGoalPlanAPI = /** @class */ (function () {
        /*
        constructor(DaoFactory) {
            this._daoFactory = DaoFactory;
        }
        */
        function GetProgressGoalPlanAPI() {
        }
        Object.defineProperty(GetProgressGoalPlanAPI.prototype, "ClientId", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._clientID = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressGoalPlanAPI.prototype, "DataType", {
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._personalDataType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GetProgressGoalPlanAPI.prototype, "TimeBase", {
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._personalDataTimeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} year
         * @return {?}
         */
        GetProgressGoalPlanAPI.prototype.setDataYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this._dataYear = year;
            };
        /**
         * @return {?}
         */
        GetProgressGoalPlanAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getProgressGoalPlan';
            };
        /**
         * @return {?}
         */
        GetProgressGoalPlanAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                //alert("personal progress mock data");
                if (this._dataYear == 2019) {
                    return './assets/mock/getProgressGoalPlan_2019.json';
                }
                else if (this._dataYear == 2020) {
                    return './assets/mock/getProgressGoalPlan_2020.json';
                }
                else {
                    //todo throw error
                    console.warn("datYear not match mock path");
                    return '';
                }
            };
        /**
         * @return {?}
         */
        GetProgressGoalPlanAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                throw new Error("Method not implemented.");
            };
        return GetProgressGoalPlanAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetTeamProgressDetailAPI = /** @class */ (function () {
        function GetTeamProgressDetailAPI(daoFactory) {
            this._year = -1;
            this._daoFactory = daoFactory;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        GetTeamProgressDetailAPI.prototype.SetYear = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._year = value;
            };
        /**
         * @return {?}
         */
        GetTeamProgressDetailAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getTeamProgressDetail';
            };
        /**
         * @return {?}
         */
        GetTeamProgressDetailAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getTeamProgressDetailMock.json';
            };
        /**
         * @return {?}
         */
        GetTeamProgressDetailAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite Start ");
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite defaultDao: ", defaultDao);
                /** @type {?} */
                var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Team_Progress_Detail");
                console.debug("SQLite tableObj: ", tableObj);
                if (defaultDao != undefined && tableObj != undefined) {
                    return rxjs.from(defaultDao.queryByTable(tableObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite getTeamProgressDetail resp: ", resp);
                        console.debug("SQLite getTeamProgressDetail json resp: ", JSON.stringify(resp));
                        return resp;
                    })));
                }
                else {
                    rxjs.of(false);
                    console.debug("SQLite failed");
                }
            };
        return GetTeamProgressDetailAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetTeamProgressMainAPI = /** @class */ (function () {
        function GetTeamProgressMainAPI(daoFactory) {
            this._year = -1;
            this._daoFactory = daoFactory;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        GetTeamProgressMainAPI.prototype.SetYear = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._year = value;
            };
        /**
         * @return {?}
         */
        GetTeamProgressMainAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getTeamProgressMain';
            };
        /**
         * @return {?}
         */
        GetTeamProgressMainAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getTeamProgressMainMock.json';
            };
        /**
         * @return {?}
         */
        GetTeamProgressMainAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite Start ");
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite defaultDao: ", defaultDao);
                /** @type {?} */
                var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Team_Progress_Main");
                console.debug("SQLite tableObj: ", tableObj);
                if (defaultDao != undefined && tableObj != undefined) {
                    return rxjs.from(defaultDao.queryByTable(tableObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite getTeamProgressMain resp: ", resp);
                        console.debug("SQLite getTeamProgressMain json resp: ", JSON.stringify(resp));
                        return resp;
                    })));
                }
                else {
                    rxjs.of(false);
                    console.debug("SQLite failed");
                }
            };
        return GetTeamProgressMainAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PersonalProgressOldAPI = /** @class */ (function () {
        /*
        constructor(DaoFactory) {
            this._daoFactory = DaoFactory;
        }
        */
        function PersonalProgressOldAPI() {
        }
        Object.defineProperty(PersonalProgressOldAPI.prototype, "ClientId", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._clientID = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalProgressOldAPI.prototype, "DataType", {
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                this._personalDataType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PersonalProgressOldAPI.prototype, "TimeBase", {
            set: /**
             * @param {?} time
             * @return {?}
             */ function (time) {
                this._personalDataTimeBase = time;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PersonalProgressOldAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getPersonalProgressOld';
            };
        /**
         * @return {?}
         */
        PersonalProgressOldAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                //alert("personal progress mock data");
                return './assets/mock/getPersonalProgress.json';
            };
        /**
         * @return {?}
         */
        PersonalProgressOldAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                throw new Error("Method not implemented.");
            };
        return PersonalProgressOldAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetYearConfigurationAPI = /** @class */ (function () {
        function GetYearConfigurationAPI(daoFactory) {
            this._year = -1;
            this._daoFactory = daoFactory;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        GetYearConfigurationAPI.prototype.SetYear = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._year = value;
            };
        /**
         * @return {?}
         */
        GetYearConfigurationAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return 'getYearConfiguration';
            };
        /**
         * @return {?}
         */
        GetYearConfigurationAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return './assets/mock/getYearConfigurationMock.json';
            };
        /**
         * @return {?}
         */
        GetYearConfigurationAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                console.debug("SQLite Start year configuration ");
                /** @type {?} */
                var defaultDao = this._daoFactory.getDefaultDao();
                console.debug("SQLite defaultDao: ", defaultDao);
                /** @type {?} */
                var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Year_Config");
                console.debug("SQLite tableObj: ", tableObj);
                if (defaultDao != undefined && tableObj != undefined) {
                    return rxjs.from(defaultDao.queryByTable(tableObj).toPromise().then(( /**
                     * @param {?} resp
                     * @return {?}
                     */function (resp) {
                        console.debug("SQLite getYearConfiguration resp: ", resp);
                        console.debug("SQLite getYearConfiguration json resp: ", JSON.stringify(resp));
                        return resp;
                    })));
                }
                else {
                    rxjs.of(false);
                    console.debug("SQLite failed");
                }
            };
        return GetYearConfigurationAPI;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddPointAPI = /** @class */ (function () {
        function AddPointAPI(daoFactory) {
            this._addType = "";
            this._year = -1;
            this._addPointNum = 1;
            this._daoFactory = daoFactory;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        AddPointAPI.prototype.SetAddType = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._addType = value;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        AddPointAPI.prototype.SetYear = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._year = val;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        AddPointAPI.prototype.SetPointNum = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._addPointNum = val;
            };
        /**
         * @return {?}
         */
        AddPointAPI.prototype.getAPIName = /**
         * @return {?}
         */
            function () {
                return "addPoint";
            };
        /**
         * @return {?}
         */
        AddPointAPI.prototype.getMockPath = /**
         * @return {?}
         */
            function () {
                return "./assets/mock/saveSuccess.json";
            };
        /**
         * @return {?}
         */
        AddPointAPI.prototype.executeSQL = /**
         * @return {?}
         */
            function () {
                var _this = this;
                console.log("AddPointAPI add " + this._addType + " point");
                console.log("this._addType", this._addType, "this._year", this._year);
                if (i1.StringUtils.isNotEmpty(this._addType) && this._year != -1) {
                    this.dao = this._daoFactory.getDefaultDao();
                    /** @type {?} */
                    var TimeBaselist = ["Day", "Week", "Month", "Quarter", "Year"];
                    return rxjs.from(Promise.all(TimeBaselist.map(( /**
                     * @param {?} timeBase
                     * @return {?}
                     */function (timeBase) { return _this._addPoint(timeBase); }))).then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var addResp = _this.dao.runTransaction().toPromise();
                        console.log("addResp", addResp);
                        return addResp;
                    })));
                }
                else {
                    return rxjs.of(false);
                }
            };
        /**
         * @private
         * @param {?} timeBase
         * @return {?}
         */
        AddPointAPI.prototype._addPoint = /**
         * @private
         * @param {?} timeBase
         * @return {?}
         */
            function (timeBase) {
                return __awaiter(this, void 0, void 0, function () {
                    var currentNum, PersonalPorgress, progressObj, getResp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("into _addPoint()");
                                console.log("timeBase", timeBase);
                                currentNum = 0;
                                PersonalPorgress = this._daoFactory.getDefaultTable("TW_LH_SD_Personal_Progress");
                                console.log("SQLite tableObj: ", PersonalPorgress);
                                PersonalPorgress.addRestriction(new i1.EqualRestriction("DataYear", [this._year]));
                                PersonalPorgress.addRestriction(new i1.EqualRestriction("TimeBase", [timeBase]));
                                PersonalPorgress.addRestriction(new i1.EqualRestriction("DataType", ["Actual"]));
                                progressObj = null;
                                return [4 /*yield*/, this.dao.queryByTable(PersonalPorgress).toPromise()];
                            case 1:
                                getResp = _a.sent();
                                console.log("AddPointAPI getResp", getResp);
                                if (getResp.Header["status"] && getResp.Body.length > 0) {
                                    progressObj = getResp.Body[0];
                                    if (this._addType == "customer") {
                                        currentNum = progressObj.Find;
                                        PersonalPorgress.setValue("Find", currentNum + this._addPointNum);
                                    }
                                    else if (this._addType == "calendar") {
                                        currentNum = progressObj.Schedule;
                                        PersonalPorgress.setValue("Schedule", currentNum + this._addPointNum);
                                    }
                                    console.log("AddPointAPI PersonalPorgress", PersonalPorgress);
                                    this.dao.transactionUpdate(PersonalPorgress);
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        return AddPointAPI;
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

    exports.ProgressService = ProgressService;
    exports.ProgressActualValue = ProgressActualValue;
    exports.ConfigurationObj = ConfigurationObj;
    exports.PersonalData = PersonalData;
    exports.PersonalDataState = PersonalDataState;
    exports.PersonalObj = PersonalObj;
    exports.ProgressPersonalData = ProgressPersonalData;
    exports.ProgressBarControlData = ProgressBarControlData;
    exports.ProgressDirectData = ProgressDirectData;
    exports.ProgressDirectIndirectData = ProgressDirectIndirectData;
    exports.ProgressIndirectData = ProgressIndirectData;
    exports.ProgressObj = ProgressObj;
    exports.ProgressTeamData = ProgressTeamData;
    exports.ProgressYearConfig = ProgressYearConfig;
    exports.ProgressYearObj = ProgressYearObj;
    exports.TeamDataState = TeamDataState;
    exports.TeamObj = TeamObj;
    exports.ProgressListContentClass = ProgressListContentClass;
    exports.ProgressContentClass = ProgressContentClass;
    exports.ProgressActivityListContentClass = ProgressActivityListContentClass;
    exports.ProgressMonthlyContentClass = ProgressMonthlyContentClass;
    exports.ProgressTeamContentClass = ProgressTeamContentClass;
    exports.ProgressTeamDirectContentClass = ProgressTeamDirectContentClass;
    exports.ProgressTeamIndirectContentClass = ProgressTeamIndirectContentClass;
    exports.ProgressTeamMainContentClass = ProgressTeamMainContentClass;
    exports.ProgressHeadContentClass = ProgressHeadContentClass;
    exports.InfoContentClass = InfoContentClass;
    exports.ActivitiesType = ActivitiesType;
    exports.ActualValueDataType = ActualValueDataType;
    exports.DirectUnitType = DirectUnitType;
    exports.PerformanceType = PerformanceType;
    exports.PersonalDataTimeBase = PersonalDataTimeBase;
    exports.PersonalDataType = PersonalDataType;
    exports.ProgressBarControlModeType = ProgressBarControlModeType;
    exports.ProgressDataTeamValueType = ProgressDataTeamValueType;
    exports.Quarters = Quarters;
    exports.Tag = Tag;
    exports.ProgressModule = ProgressModule;
    exports.GetPersonalProgressAPI = GetPersonalProgressAPI;
    exports.GetProgressActualValueAPI = GetProgressActualValueAPI;
    exports.GetProgressDataActualValueAPI = GetProgressDataActualValueAPI;
    exports.GetProgressDataAPI = GetProgressDataAPI;
    exports.GetProgressDataGoalSettingPlanAPI = GetProgressDataGoalSettingPlanAPI;
    exports.GetProgressGoalPlanAPI = GetProgressGoalPlanAPI;
    exports.GetTeamProgressDetailAPI = GetTeamProgressDetailAPI;
    exports.GetTeamProgressMainAPI = GetTeamProgressMainAPI;
    exports.PersonalProgressOldAPI = PersonalProgressOldAPI;
    exports.GetYearConfigurationAPI = GetYearConfigurationAPI;
    exports.AddPointAPI = AddPointAPI;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=allianzSND-progress.umd.js.map