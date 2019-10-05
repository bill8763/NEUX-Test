/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject, ErrorHandler } from '@angular/core';
import { APIDispatch, APIFactory, DateUtils, showRuleToken, APPError } from '@allianzSND/core';
import { Observable, from } from 'rxjs';
import { DashboardMessage } from './model/DashboardMessage';
import { showDashboardRuleToken } from '../injectionToken/injection-token';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
import * as i2 from "../injectionToken/injection-token";
var DashboardService = /** @class */ (function () {
    function DashboardService(dispatcher, APIFactory, dateUtils, errorHandler, showRule, showDashboardRule) {
        this.dispatcher = dispatcher;
        this.APIFactory = APIFactory;
        this.dateUtils = dateUtils;
        this.errorHandler = errorHandler;
        this.showRule = showRule;
        this.showDashboardRule = showDashboardRule;
        this.isFirstInDashboard = true;
        //register api
    }
    /**
     * @return {?}
     */
    DashboardService.prototype.isFirstTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result;
        if (this.isFirstInDashboard) {
            result = true;
            this.isFirstInDashboard = false;
        }
        else {
            result = false;
        }
        return result;
    };
    /**
     * @param {?} clientID
     * @param {?} status
     * @return {?}
     */
    DashboardService.prototype.updateMessageStatus = /**
     * @param {?} clientID
     * @param {?} status
     * @return {?}
     */
    function (clientID, status) {
        var _this = this;
        /** @type {?} */
        var dashboardUpdateMessageStatusAPI = (/** @type {?} */ (this.APIFactory.getAPI('updateDashboardMessageStatus')));
        dashboardUpdateMessageStatusAPI.setClientID(clientID);
        dashboardUpdateMessageStatusAPI.setStatus(status);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(dashboardUpdateMessageStatusAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.debug('dashboard-service-updateDashboardMessageStatus', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    };
    /**
     * @param {?} keyword
     * @param {?} pageInfo
     * @return {?}
     */
    DashboardService.prototype.getMessageByKeyword = /**
     * @param {?} keyword
     * @param {?} pageInfo
     * @return {?}
     */
    function (keyword, pageInfo) {
        var _this = this;
        /** @type {?} */
        var dashboardGetMessageListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getDashboardMessageList')));
        dashboardGetMessageListAPI.setKeyword(keyword);
        dashboardGetMessageListAPI.setPageInfo(pageInfo);
        dashboardGetMessageListAPI.isShow = true;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.dispatcher.dispatch(dashboardGetMessageListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log("getMessageByKeyword data:", data);
                /** @type {?} */
                var messageList = data['Body'];
                if (messageList) {
                    /** @type {?} */
                    var DashboardMessageList_1 = [];
                    messageList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        /** @type {?} */
                        var dashboardMessage = new DashboardMessage(item.ClientID, item.MessageID, item.MessageCategory, item.MessageType, item.Title, item.Description, item.Arguments, item.Status, _this.convertDate(new Date(item.MessageTime)), _this.convertTime(new Date(item.MessageTime)), item.IsPopup, item.LinkStatus, item.IsClick);
                        DashboardMessageList_1.push(dashboardMessage);
                    }));
                    observer.next(DashboardMessageList_1);
                    observer.complete();
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }));
        }));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DashboardService.prototype.convertDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date) {
            if (this.showRule) {
                return this.showRule.convertDate(date);
            }
            else {
                return this.dateUtils.toDateString(date, 'yyyy-MM-dd');
            }
        }
        else {
            return '- -';
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DashboardService.prototype.convertTime = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date) {
            return this.dateUtils.toDateString(date, 'shortTime');
        }
        else {
            return '- -';
        }
    };
    /**
     * @param {?} performanceType
     * @param {?=} appUseMode
     * @return {?}
     */
    DashboardService.prototype.getPerformanceData = /**
     * @param {?} performanceType
     * @param {?=} appUseMode
     * @return {?}
     */
    function (performanceType, appUseMode) {
        if (appUseMode === void 0) { appUseMode = ''; }
        if (performanceType == 'T') {
            return from(this._getPerformanceTeamData(appUseMode));
        }
        else {
            return from(this._getPerformancePersonalData());
        }
    };
    /**
     * @private
     * @param {?} appUseMode
     * @return {?}
     */
    DashboardService.prototype._getPerformanceTeamData = /**
     * @private
     * @param {?} appUseMode
     * @return {?}
     */
    function (appUseMode) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, returnData, Datas, teamProgressMainResp_1, yearConfigResp, teamProgressMain, yearConfig, DataYear_1, timeBaseTitle, timeBase_1, dataType, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('into _getPerformanceTeamData');
                        returnData = null;
                        Datas = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        yearConfigResp = void 0;
                        teamProgressMain = this.APIFactory.getAPI("getTeamProgressMain");
                        yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(yearConfig).toPromise(),
                                this.dispatcher.dispatch(teamProgressMain).toPromise(),
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), yearConfigResp = _a[0], teamProgressMainResp_1 = _a[1];
                        console.log("TeamProgressMainResp", teamProgressMainResp_1);
                        console.log("yearConfigResp", yearConfigResp);
                        if (yearConfigResp.Header["status"]) {
                            DataYear_1 = yearConfigResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.IsCurrent == "Y"; }))[0].DataYear;
                        }
                        else {
                            throw "get yearConfig fail. yearConfigResp:" + yearConfigResp;
                        }
                        timeBaseTitle = "monthly";
                        //timeBase title
                        if (this.showDashboardRule) {
                            timeBaseTitle = this.showDashboardRule.showTimeBaseTitle(appUseMode);
                        }
                        if (teamProgressMainResp_1.Header["status"]) {
                            timeBase_1 = "Month";
                            if (appUseMode == "Manager" || appUseMode == "Supervisor") {
                                timeBase_1 = "Year";
                            }
                            dataType = ["FYFC", "ANP"];
                            dataType.forEach((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) {
                                /** @type {?} */
                                var dataobj = teamProgressMainResp_1.Body.filter((/**
                                 * @param {?} xx
                                 * @return {?}
                                 */
                                function (xx) { return xx.DataYear == DataYear_1 && xx.TimeBase == timeBase_1 && xx.DataType == x; }))[0];
                                console.log('dataobj:', dataobj);
                                Datas.push({
                                    title: "Home_" + x,
                                    MonthlyProgressTotal: dataobj.Forecast == -1 ? dataobj.Goal : dataobj.Forecast,
                                    MonthlyProgressCurrent: dataobj.Actual
                                });
                            }));
                        }
                        else {
                            throw "get teamProgressMain fail. teamProgressMainResp:" + teamProgressMainResp_1;
                        }
                        returnData = {
                            timeBaseTitle: timeBaseTitle,
                            datas: Datas
                        };
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00130', '_getPerformanceTeamData fail!' + error_1.message));
                        return [3 /*break*/, 4];
                    case 4:
                        //TODO ZH&CAO 開interface\
                        console.log("_getPerformanceTeamData returnData:", returnData);
                        return [2 /*return*/, returnData];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    DashboardService.prototype._getPerformancePersonalData = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, yearConfigResp, personalProgressResp, DataYear, ActivitiesPoints, ActivitiesPointsTotal, MonthlyProgressTotal, MonthlyProgressCurrent, InforceConvertPointBase, FindConvertPointBase, ScheduleConvertPointBase, MeetConvertPointBase, SubmitConvertPointBase, returnData, yearConfig, getPersonalProgress, currentObj, personalProgressObj, error_2;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        returnData = {};
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                        getPersonalProgress = this.APIFactory.getAPI("getPersonalProgress");
                        return [4 /*yield*/, Promise.all([
                                this.dispatcher.dispatch(yearConfig).toPromise(),
                                this.dispatcher.dispatch(getPersonalProgress).toPromise(),
                            ])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), yearConfigResp = _a[0], personalProgressResp = _a[1];
                        console.log("yearConfigResp", yearConfigResp);
                        console.log("personalProgressResp", personalProgressResp);
                        if (yearConfigResp.Header["status"]) {
                            currentObj = yearConfigResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.IsCurrent == "Y"; }))[0];
                            DataYear = currentObj.DataYear;
                            ActivitiesPointsTotal = currentObj.ProgressDayPointsLimit;
                            InforceConvertPointBase = currentObj.InforceConvertPointBase;
                            FindConvertPointBase = currentObj.FindConvertPointBase;
                            ScheduleConvertPointBase = currentObj.ScheduleConvertPointBase;
                            MeetConvertPointBase = currentObj.MeetConvertPointBase;
                            SubmitConvertPointBase = currentObj.SubmitConvertPointBase;
                        }
                        else {
                            throw "get yearConfig fail. yearConfigResp:" + yearConfigResp;
                        }
                        if (personalProgressResp.Header["status"]) {
                            //todo need to figure out ActivitiesPoints cant add -1 to sum   
                            personalProgressObj = personalProgressResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataYear == DataYear && x.TimeBase == "Day" && x.DataType == "Actual"; }))[0];
                            //dirty way
                            personalProgressObj.Find = (personalProgressObj.Find <= -1) ? 0 : personalProgressObj.Find;
                            personalProgressObj.Schedule = (personalProgressObj.Schedule <= -1) ? 0 : personalProgressObj.Schedule;
                            personalProgressObj.Meet = (personalProgressObj.Meet <= -1) ? 0 : personalProgressObj.Meet;
                            personalProgressObj.Submit = (personalProgressObj.Submit <= -1) ? 0 : personalProgressObj.Submit;
                            personalProgressObj.Inforce = (personalProgressObj.Inforce <= -1) ? 0 : personalProgressObj.Inforce;
                            ActivitiesPoints = personalProgressObj.Find * FindConvertPointBase
                                + personalProgressObj.Schedule * ScheduleConvertPointBase
                                + personalProgressObj.Meet * MeetConvertPointBase
                                + personalProgressObj.Submit * SubmitConvertPointBase
                                + personalProgressObj.Inforce * InforceConvertPointBase;
                            //ActivitiesPoints = (ActivitiesPoints>=ActivitiesPointsTotal)?ActivitiesPointsTotal:ActivitiesPoints;
                            MonthlyProgressCurrent = personalProgressResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataYear == DataYear && x.TimeBase == "Month" && x.DataType == "Actual"; }))[0].FYFC;
                            MonthlyProgressTotal = personalProgressResp.Body.filter((/**
                             * @param {?} x
                             * @return {?}
                             */
                            function (x) { return x.DataYear == DataYear && x.TimeBase == "Month" && x.DataType == "Goal"; }))[0].FYFC;
                        }
                        else {
                            throw "get personalProgressResp fail. personalProgressResp:" + personalProgressResp;
                        }
                        returnData = {
                            ActivitiesPoints: ActivitiesPoints,
                            ActivitiesPointsTotal: ActivitiesPointsTotal,
                            MonthlyProgressTotal: MonthlyProgressTotal,
                            MonthlyProgressCurrent: MonthlyProgressCurrent
                        };
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00131', '_getPerformancePersonalData fail!' + error_2.message));
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("_getPerformancePersonalData returnData:", returnData, JSON.stringify(returnData));
                        return [2 /*return*/, returnData];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.getUserLevel = /**
     * @return {?}
     */
    function () {
        return 'diamond';
    };
    /**
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    DashboardService.prototype.changeMessageStatus = /**
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    function (messageID, col, val) {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            console.log("into changeMessageStatus :", messageID, col, val);
            /** @type {?} */
            var changeStatusObj = (/** @type {?} */ (_this.APIFactory.getAPI("ChangeMessageStatus")));
            changeStatusObj.messageID = messageID;
            changeStatusObj.col = col;
            changeStatusObj.val = val;
            _this.dispatcher.dispatch(changeStatusObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.log("changeMessageStatus resp", resp);
                observer.next(resp['Header']);
                observer.complete();
            }));
        }));
    };
    DashboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DashboardService.ctorParameters = function () { return [
        { type: APIDispatch },
        { type: APIFactory },
        { type: DateUtils },
        { type: ErrorHandler },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showDashboardRuleToken,] }] }
    ]; };
    /** @nocollapse */ DashboardService.ngInjectableDef = i0.defineInjectable({ factory: function DashboardService_Factory() { return new DashboardService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.DateUtils), i0.inject(i0.ErrorHandler), i0.inject(i1.showRuleToken, 8), i0.inject(i2.showDashboardRuleToken, 8)); }, token: DashboardService, providedIn: "root" });
    return DashboardService;
}());
export { DashboardService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DashboardService.prototype.isFirstInDashboard;
    /**
     * @type {?}
     * @private
     */
    DashboardService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    DashboardService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    DashboardService.prototype.dateUtils;
    /**
     * @type {?}
     * @private
     */
    DashboardService.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DashboardService.prototype.showRule;
    /**
     * @type {?}
     * @private
     */
    DashboardService.prototype.showDashboardRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2Rhc2hib2FyZC1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUF3RSxTQUFTLEVBQUUsYUFBYSxFQUFZLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlLLE9BQU8sRUFBRSxVQUFVLEVBQU0sSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSTVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBSTNFO0lBTUUsMEJBQ1UsVUFBdUIsRUFDdkIsVUFBc0IsRUFDdEIsU0FBb0IsRUFDcEIsWUFBMEIsRUFDUyxRQUFrQixFQUNULGlCQUFvQztRQUxoRixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNTLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUGxGLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQVN6QyxjQUFjO0lBQ2hCLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7O1lBQ00sTUFBZTtRQUNuQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNq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LENBQUMsQ0FBQztnQkFDOUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztnQkF4UkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dCQVpRLFdBQVc7Z0JBQUUsVUFBVTtnQkFBd0UsU0FBUztnQkFEMUUsWUFBWTtnREFzQjlDLFFBQVEsWUFBSSxNQUFNLFNBQUMsYUFBYTtnREFDaEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7OzsyQkF2QjlDO0NBb1NDLEFBelJELElBeVJDO1NBdFJZLGdCQUFnQjs7Ozs7O0lBRTNCLDhDQUEyQzs7Ozs7SUFFekMsc0NBQStCOzs7OztJQUMvQixzQ0FBOEI7Ozs7O0lBQzlCLHFDQUE0Qjs7Ozs7SUFDNUIsd0NBQWtDOzs7OztJQUNsQyxvQ0FBNkQ7Ozs7O0lBQzdELDZDQUF3RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIEVycm9ySGFuZGxlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCwgQVBJRmFjdG9yeSwgUGFnZUluZm8sIERhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEksRGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEksIERhdGVVdGlscywgc2hvd1J1bGVUb2tlbiwgc2hvd1J1bGUsIEFQUEVycm9yfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mICxmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNZXNzYWdlIH0gZnJvbSAnLi9tb2RlbC9EYXNoYm9hcmRNZXNzYWdlJztcbmltcG9ydCB7IE51bGxUZW1wbGF0ZVZpc2l0b3IgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgeyBmb3JtQXJyYXlOYW1lUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5pbXBvcnQgeyBzaG93RGFzaGJvYXJkUnVsZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBzaG93RGFzaGJvYXJkUnVsZVRva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFByb2dyZXNzUGVyc29uYWxEYXRhIH0gZnJvbSAnQGFsbGlhbnpTTkQvcHJvZ3Jlc3MnO1xuaW1wb3J0IHsgQ2hhbmdlTWVzc2FnZVN0YXR1c0FQSSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUvbGliL2FwaS9yZWdpc3Rlci9jaGFuZ2VNZXNzYWdlU3RhdHVzQVBJJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBpc0ZpcnN0SW5EYXNoYm9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGRhdGVVdGlsczogRGF0ZVV0aWxzLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93UnVsZVRva2VuKSBwcml2YXRlIHNob3dSdWxlOiBzaG93UnVsZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dEYXNoYm9hcmRSdWxlVG9rZW4pIHByaXZhdGUgc2hvd0Rhc2hib2FyZFJ1bGU6IHNob3dEYXNoYm9hcmRSdWxlLFxuICApIHtcbiAgICAvL3JlZ2lzdGVyIGFwaVxuICB9XG5cbiAgaXNGaXJzdFRpbWUoKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbjtcbiAgICBpZiAodGhpcy5pc0ZpcnN0SW5EYXNoYm9hcmQpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICB0aGlzLmlzRmlyc3RJbkRhc2hib2FyZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG4gIHVwZGF0ZU1lc3NhZ2VTdGF0dXMoY2xpZW50SUQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBkYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJOiBEYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJID0gPERhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgndXBkYXRlRGFzaGJvYXJkTWVzc2FnZVN0YXR1cycpO1xuICAgIGRhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkuc2V0Q2xpZW50SUQoY2xpZW50SUQpO1xuICAgIGRhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkuc2V0U3RhdHVzKHN0YXR1cyk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZGFzaGJvYXJkLXNlcnZpY2UtdXBkYXRlRGFzaGJvYXJkTWVzc2FnZVN0YXR1cycsIGRhdGEpO1xuXG4gICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cblxuICBnZXRNZXNzYWdlQnlLZXl3b3JkKGtleXdvcmQ6IHN0cmluZywgcGFnZUluZm86IFBhZ2VJbmZvKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgZGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEk6IERhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJID0gPERhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoJ2dldERhc2hib2FyZE1lc3NhZ2VMaXN0Jyk7XG4gICAgZGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEkuc2V0S2V5d29yZChrZXl3b3JkKTtcbiAgICBkYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSS5zZXRQYWdlSW5mbyhwYWdlSW5mbyk7XG4gICAgZGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEkuaXNTaG93ID0gdHJ1ZTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChkYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0TWVzc2FnZUJ5S2V5d29yZCBkYXRhOlwiLGRhdGEpO1xuICAgICAgICBsZXQgbWVzc2FnZUxpc3QgPSBkYXRhWydCb2R5J107XG5cbiAgICAgICAgaWYgKG1lc3NhZ2VMaXN0KSB7XG5cbiAgICAgICAgICBsZXQgRGFzaGJvYXJkTWVzc2FnZUxpc3Q6IEFycmF5PERhc2hib2FyZE1lc3NhZ2U+ID0gW107XG4gICAgICAgICAgbWVzc2FnZUxpc3QuZm9yRWFjaChpdGVtID0+IHtcblxuICAgICAgICAgICAgbGV0IGRhc2hib2FyZE1lc3NhZ2U6IERhc2hib2FyZE1lc3NhZ2UgPSBuZXcgRGFzaGJvYXJkTWVzc2FnZShpdGVtLkNsaWVudElELCBpdGVtLk1lc3NhZ2VJRCwgaXRlbS5NZXNzYWdlQ2F0ZWdvcnksIGl0ZW0uTWVzc2FnZVR5cGUsIGl0ZW0uVGl0bGUsIGl0ZW0uRGVzY3JpcHRpb24sIGl0ZW0uQXJndW1lbnRzLCBpdGVtLlN0YXR1cywgdGhpcy5jb252ZXJ0RGF0ZShuZXcgRGF0ZShpdGVtLk1lc3NhZ2VUaW1lKSksIHRoaXMuY29udmVydFRpbWUobmV3IERhdGUoaXRlbS5NZXNzYWdlVGltZSkpLGl0ZW0uSXNQb3B1cCAsIGl0ZW0uTGlua1N0YXR1cywgaXRlbS5Jc0NsaWNrICk7XG4gICAgICAgICAgICBEYXNoYm9hcmRNZXNzYWdlTGlzdC5wdXNoKGRhc2hib2FyZE1lc3NhZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBvYnNlcnZlci5uZXh0KERhc2hib2FyZE1lc3NhZ2VMaXN0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG5cblxuICBwdWJsaWMgY29udmVydERhdGUoZGF0ZTogRGF0ZSkge1xuXG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGlmICh0aGlzLnNob3dSdWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3dSdWxlLmNvbnZlcnREYXRlKGRhdGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVVdGlscy50b0RhdGVTdHJpbmcoZGF0ZSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICctIC0nO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIGNvbnZlcnRUaW1lKGRhdGU6IERhdGUpIHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZVN0cmluZyhkYXRlLCAnc2hvcnRUaW1lJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuICctIC0nO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRQZXJmb3JtYW5jZURhdGEocGVyZm9ybWFuY2VUeXBlOnN0cmluZywgYXBwVXNlTW9kZTpzdHJpbmc9JycpOiBPYnNlcnZhYmxlPGFueT57XG5cbiAgICBpZiAocGVyZm9ybWFuY2VUeXBlID09ICdUJyl7XG4gICAgICByZXR1cm4gZnJvbSh0aGlzLl9nZXRQZXJmb3JtYW5jZVRlYW1EYXRhKGFwcFVzZU1vZGUpKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmcm9tKHRoaXMuX2dldFBlcmZvcm1hbmNlUGVyc29uYWxEYXRhKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldFBlcmZvcm1hbmNlVGVhbURhdGEoYXBwVXNlTW9kZTpzdHJpbmcpeyBcblxuICAgIGNvbnNvbGUubG9nKCdpbnRvIF9nZXRQZXJmb3JtYW5jZVRlYW1EYXRhJyk7XG4gICAgbGV0IHJldHVybkRhdGEgPSBudWxsO1xuICAgIGxldCBEYXRhcyA9IFtdO1xuXG4gICAgdHJ5e1xuICAgICAgbGV0IHRlYW1Qcm9ncmVzc01haW5SZXNwO1xuICAgICAgbGV0IHllYXJDb25maWdSZXNwO1xuICBcbiAgICAgIGxldCB0ZWFtUHJvZ3Jlc3NNYWluID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldFRlYW1Qcm9ncmVzc01haW5cIik7XG4gICAgICBsZXQgeWVhckNvbmZpZyA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ1llYXJDb25maWdcIik7XG4gIFxuICAgICAgW3llYXJDb25maWdSZXNwLCB0ZWFtUHJvZ3Jlc3NNYWluUmVzcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh5ZWFyQ29uZmlnKS50b1Byb21pc2UoKSxcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHRlYW1Qcm9ncmVzc01haW4pLnRvUHJvbWlzZSgpLFxuICAgICAgXSk7XG4gIFxuICAgICAgY29uc29sZS5sb2coXCJUZWFtUHJvZ3Jlc3NNYWluUmVzcFwiLCB0ZWFtUHJvZ3Jlc3NNYWluUmVzcCk7XG4gICAgICBjb25zb2xlLmxvZyhcInllYXJDb25maWdSZXNwXCIsIHllYXJDb25maWdSZXNwKTtcbiAgXG4gICAgICBsZXQgRGF0YVllYXI7IFxuICAgICAgaWYoeWVhckNvbmZpZ1Jlc3AuSGVhZGVyW1wic3RhdHVzXCJdKXtcbiAgICAgICAgRGF0YVllYXIgPSB5ZWFyQ29uZmlnUmVzcC5Cb2R5LmZpbHRlcih4ID0+IHguSXNDdXJyZW50ID09IFwiWVwiKVswXS5EYXRhWWVhcjtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aHJvdyBcImdldCB5ZWFyQ29uZmlnIGZhaWwuIHllYXJDb25maWdSZXNwOlwiK3llYXJDb25maWdSZXNwO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGltZUJhc2VUaXRsZSA9IFwibW9udGhseVwiO1xuICAgICAgLy90aW1lQmFzZSB0aXRsZVxuICAgICAgaWYodGhpcy5zaG93RGFzaGJvYXJkUnVsZSl7XG4gICAgICAgIHRpbWVCYXNlVGl0bGUgPSB0aGlzLnNob3dEYXNoYm9hcmRSdWxlLnNob3dUaW1lQmFzZVRpdGxlKGFwcFVzZU1vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZih0ZWFtUHJvZ3Jlc3NNYWluUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pe1xuICAgICAgICBsZXQgdGltZUJhc2UgPSBcIk1vbnRoXCI7XG4gICAgICAgIGlmKGFwcFVzZU1vZGUgPT0gXCJNYW5hZ2VyXCIgfHwgYXBwVXNlTW9kZSA9PSBcIlN1cGVydmlzb3JcIil7XG4gICAgICAgICAgdGltZUJhc2UgPSBcIlllYXJcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YVR5cGUgPSBbXCJGWUZDXCIsXCJBTlBcIl07XG4gICAgICAgIGRhdGFUeXBlLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgbGV0IGRhdGFvYmogPSB0ZWFtUHJvZ3Jlc3NNYWluUmVzcC5Cb2R5LmZpbHRlcih4eCA9PiB4eC5EYXRhWWVhciA9PSBEYXRhWWVhciAmJiB4eC5UaW1lQmFzZSA9PSB0aW1lQmFzZSAmJiB4eC5EYXRhVHlwZSA9PSB4KVswXTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YW9iajonLGRhdGFvYmopO1xuICAgICAgICAgIERhdGFzLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGBIb21lXyR7eH1gLFxuICAgICAgICAgICAgTW9udGhseVByb2dyZXNzVG90YWw6IGRhdGFvYmouRm9yZWNhc3QgPT0gLTEgPyBkYXRhb2JqLkdvYWwgOiBkYXRhb2JqLkZvcmVjYXN0LFxuICAgICAgICAgICAgTW9udGhseVByb2dyZXNzQ3VycmVudDogZGF0YW9iai5BY3R1YWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhyb3cgXCJnZXQgdGVhbVByb2dyZXNzTWFpbiBmYWlsLiB0ZWFtUHJvZ3Jlc3NNYWluUmVzcDpcIit0ZWFtUHJvZ3Jlc3NNYWluUmVzcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuRGF0YSA9IHtcbiAgICAgICAgdGltZUJhc2VUaXRsZSA6IHRpbWVCYXNlVGl0bGUsXG4gICAgICAgIGRhdGFzIDogRGF0YXNcbiAgICAgIH1cblxuICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMTMwJywnX2dldFBlcmZvcm1hbmNlVGVhbURhdGEgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgICAgICAgLy9UT0RPIFpIJkNBTyDplotpbnRlcmZhY2VcXFxuICAgIGNvbnNvbGUubG9nKFwiX2dldFBlcmZvcm1hbmNlVGVhbURhdGEgcmV0dXJuRGF0YTpcIixyZXR1cm5EYXRhKTtcbiAgICByZXR1cm4gcmV0dXJuRGF0YTtcblxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UGVyZm9ybWFuY2VQZXJzb25hbERhdGEoKXtcblxuICAgIGxldCB5ZWFyQ29uZmlnUmVzcDtcbiAgICBsZXQgcGVyc29uYWxQcm9ncmVzc1Jlc3A7XG5cbiAgICBsZXQgRGF0YVllYXI7IFxuICAgIGxldCBBY3Rpdml0aWVzUG9pbnRzO1xuICAgIGxldCBBY3Rpdml0aWVzUG9pbnRzVG90YWw7XG4gICAgbGV0IE1vbnRobHlQcm9ncmVzc1RvdGFsO1xuICAgIGxldCBNb250aGx5UHJvZ3Jlc3NDdXJyZW50O1xuXG4gICAgbGV0IEluZm9yY2VDb252ZXJ0UG9pbnRCYXNlO1xuICAgIGxldCBGaW5kQ29udmVydFBvaW50QmFzZTtcbiAgICBsZXQgU2NoZWR1bGVDb252ZXJ0UG9pbnRCYXNlO1xuICAgIGxldCBNZWV0Q29udmVydFBvaW50QmFzZTtcbiAgICBsZXQgU3VibWl0Q29udmVydFBvaW50QmFzZTtcblxuICAgIGxldCByZXR1cm5EYXRhID0ge307XG5cbiAgICB0cnl7XG5cbiAgICBsZXQgeWVhckNvbmZpZyA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRHb2FsU2V0dGluZ1llYXJDb25maWdcIik7XG4gICAgbGV0IGdldFBlcnNvbmFsUHJvZ3Jlc3MgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0UGVyc29uYWxQcm9ncmVzc1wiKTtcblxuICAgIFt5ZWFyQ29uZmlnUmVzcCwgcGVyc29uYWxQcm9ncmVzc1Jlc3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHllYXJDb25maWcpLnRvUHJvbWlzZSgpLFxuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGdldFBlcnNvbmFsUHJvZ3Jlc3MpLnRvUHJvbWlzZSgpLFxuICAgIF0pO1xuICAgIGNvbnNvbGUubG9nKFwieWVhckNvbmZpZ1Jlc3BcIix5ZWFyQ29uZmlnUmVzcCk7XG4gICAgY29uc29sZS5sb2coXCJwZXJzb25hbFByb2dyZXNzUmVzcFwiLHBlcnNvbmFsUHJvZ3Jlc3NSZXNwKTtcblxuICAgIGlmKHllYXJDb25maWdSZXNwLkhlYWRlcltcInN0YXR1c1wiXSl7XG4gICAgICBsZXQgY3VycmVudE9iaiA9IHllYXJDb25maWdSZXNwLkJvZHkuZmlsdGVyKHggPT4geC5Jc0N1cnJlbnQgPT0gXCJZXCIpWzBdO1xuICAgICAgRGF0YVllYXIgPSBjdXJyZW50T2JqLkRhdGFZZWFyO1xuICAgICAgQWN0aXZpdGllc1BvaW50c1RvdGFsID0gY3VycmVudE9iai5Qcm9ncmVzc0RheVBvaW50c0xpbWl0O1xuICAgICAgSW5mb3JjZUNvbnZlcnRQb2ludEJhc2UgPSBjdXJyZW50T2JqLkluZm9yY2VDb252ZXJ0UG9pbnRCYXNlO1xuICAgICAgRmluZENvbnZlcnRQb2ludEJhc2UgPSBjdXJyZW50T2JqLkZpbmRDb252ZXJ0UG9pbnRCYXNlO1xuICAgICAgU2NoZWR1bGVDb252ZXJ0UG9pbnRCYXNlID0gY3VycmVudE9iai5TY2hlZHVsZUNvbnZlcnRQb2ludEJhc2U7XG4gICAgICBNZWV0Q29udmVydFBvaW50QmFzZSA9IGN1cnJlbnRPYmouTWVldENvbnZlcnRQb2ludEJhc2U7XG4gICAgICBTdWJtaXRDb252ZXJ0UG9pbnRCYXNlID0gY3VycmVudE9iai5TdWJtaXRDb252ZXJ0UG9pbnRCYXNlO1xuICAgIH1lbHNle1xuICAgICAgdGhyb3cgXCJnZXQgeWVhckNvbmZpZyBmYWlsLiB5ZWFyQ29uZmlnUmVzcDpcIit5ZWFyQ29uZmlnUmVzcDtcbiAgICB9XG5cbiAgICBpZihwZXJzb25hbFByb2dyZXNzUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pe1xuICAgICAgLy90b2RvIG5lZWQgdG8gZmlndXJlIG91dCBBY3Rpdml0aWVzUG9pbnRzIGNhbnQgYWRkIC0xIHRvIHN1bSAgIFxuICAgICAgbGV0IHBlcnNvbmFsUHJvZ3Jlc3NPYmogPSBwZXJzb25hbFByb2dyZXNzUmVzcC5Cb2R5LmZpbHRlcih4ID0+IHguRGF0YVllYXIgPT0gRGF0YVllYXIgJiYgeC5UaW1lQmFzZSA9PSBcIkRheVwiICYmIHguRGF0YVR5cGUgPT0gXCJBY3R1YWxcIilbMF07XG5cbiAgICAgIC8vZGlydHkgd2F5XG4gICAgICBwZXJzb25hbFByb2dyZXNzT2JqLkZpbmQgPSAocGVyc29uYWxQcm9ncmVzc09iai5GaW5kIDw9IC0xKSA/IDAgOiBwZXJzb25hbFByb2dyZXNzT2JqLkZpbmQ7XG4gICAgICBwZXJzb25hbFByb2dyZXNzT2JqLlNjaGVkdWxlID0gKHBlcnNvbmFsUHJvZ3Jlc3NPYmouU2NoZWR1bGUgPD0gLTEpID8gMCA6IHBlcnNvbmFsUHJvZ3Jlc3NPYmouU2NoZWR1bGU7XG4gICAgICBwZXJzb25hbFByb2dyZXNzT2JqLk1lZXQgPSAocGVyc29uYWxQcm9ncmVzc09iai5NZWV0IDw9IC0xKSA/IDAgOiBwZXJzb25hbFByb2dyZXNzT2JqLk1lZXQ7XG4gICAgICBwZXJzb25hbFByb2dyZXNzT2JqLlN1Ym1pdCA9IChwZXJzb25hbFByb2dyZXNzT2JqLlN1Ym1pdCA8PSAtMSkgPyAwIDogcGVyc29uYWxQcm9ncmVzc09iai5TdWJtaXQ7XG4gICAgICBwZXJzb25hbFByb2dyZXNzT2JqLkluZm9yY2UgPSAocGVyc29uYWxQcm9ncmVzc09iai5JbmZvcmNlIDw9IC0xKSA/IDAgOiBwZXJzb25hbFByb2dyZXNzT2JqLkluZm9yY2U7XG5cbiAgICAgIEFjdGl2aXRpZXNQb2ludHMgPSBwZXJzb25hbFByb2dyZXNzT2JqLkZpbmQgKiBGaW5kQ29udmVydFBvaW50QmFzZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHBlcnNvbmFsUHJvZ3Jlc3NPYmouU2NoZWR1bGUgKiBTY2hlZHVsZUNvbnZlcnRQb2ludEJhc2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwZXJzb25hbFByb2dyZXNzT2JqLk1lZXQgKiBNZWV0Q29udmVydFBvaW50QmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgcGVyc29uYWxQcm9ncmVzc09iai5TdWJtaXQgKiBTdWJtaXRDb252ZXJ0UG9pbnRCYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwZXJzb25hbFByb2dyZXNzT2JqLkluZm9yY2UgKiBJbmZvcmNlQ29udmVydFBvaW50QmFzZTtcbiAgICAgIC8vQWN0aXZpdGllc1BvaW50cyA9IChBY3Rpdml0aWVzUG9pbnRzPj1BY3Rpdml0aWVzUG9pbnRzVG90YWwpP0FjdGl2aXRpZXNQb2ludHNUb3RhbDpBY3Rpdml0aWVzUG9pbnRzO1xuICAgICAgXG4gICAgICBNb250aGx5UHJvZ3Jlc3NDdXJyZW50ID0gcGVyc29uYWxQcm9ncmVzc1Jlc3AuQm9keS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IERhdGFZZWFyICYmIHguVGltZUJhc2UgPT0gXCJNb250aFwiICYmIHguRGF0YVR5cGUgPT0gXCJBY3R1YWxcIilbMF0uRllGQztcbiAgICAgIE1vbnRobHlQcm9ncmVzc1RvdGFsID0gcGVyc29uYWxQcm9ncmVzc1Jlc3AuQm9keS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IERhdGFZZWFyICYmIHguVGltZUJhc2UgPT0gXCJNb250aFwiICYmIHguRGF0YVR5cGUgPT0gXCJHb2FsXCIpWzBdLkZZRkM7XG4gICAgfWVsc2V7XG4gICAgICB0aHJvdyBcImdldCBwZXJzb25hbFByb2dyZXNzUmVzcCBmYWlsLiBwZXJzb25hbFByb2dyZXNzUmVzcDpcIitwZXJzb25hbFByb2dyZXNzUmVzcDtcbiAgICB9XG4gICAgcmV0dXJuRGF0YSA9IHtcbiAgICAgIEFjdGl2aXRpZXNQb2ludHM6IEFjdGl2aXRpZXNQb2ludHMsXG4gICAgICBBY3Rpdml0aWVzUG9pbnRzVG90YWw6IEFjdGl2aXRpZXNQb2ludHNUb3RhbCxcbiAgICAgIE1vbnRobHlQcm9ncmVzc1RvdGFsOiBNb250aGx5UHJvZ3Jlc3NUb3RhbCxcbiAgICAgIE1vbnRobHlQcm9ncmVzc0N1cnJlbnQ6IE1vbnRobHlQcm9ncmVzc0N1cnJlbnRcbiAgICB9XG4gIH1jYXRjaCAoZXJyb3IpIHtcbiAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDEzMScsJ19nZXRQZXJmb3JtYW5jZVBlcnNvbmFsRGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gIH1cbiAgICBjb25zb2xlLmxvZyhcIl9nZXRQZXJmb3JtYW5jZVBlcnNvbmFsRGF0YSByZXR1cm5EYXRhOlwiLHJldHVybkRhdGEsSlNPTi5zdHJpbmdpZnkocmV0dXJuRGF0YSkpO1xuICAgIHJldHVybiByZXR1cm5EYXRhO1xuICB9XG4gIHB1YmxpYyBnZXRVc2VyTGV2ZWwoKTogc3RyaW5nIHtcblxuICAgIHJldHVybiAnZGlhbW9uZCc7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlTWVzc2FnZVN0YXR1cyhtZXNzYWdlSUQ6bnVtYmVyLCBjb2w6c3RyaW5nLCB2YWw6c3RyaW5nKXtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImludG8gY2hhbmdlTWVzc2FnZVN0YXR1cyA6XCIsbWVzc2FnZUlELGNvbCx2YWwpO1xuICAgICAgbGV0IGNoYW5nZVN0YXR1c09iaiA9IDxDaGFuZ2VNZXNzYWdlU3RhdHVzQVBJPnRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJDaGFuZ2VNZXNzYWdlU3RhdHVzXCIpO1xuICAgICAgY2hhbmdlU3RhdHVzT2JqLm1lc3NhZ2VJRCA9IG1lc3NhZ2VJRDtcbiAgICAgIGNoYW5nZVN0YXR1c09iai5jb2wgPSBjb2w7XG4gICAgICBjaGFuZ2VTdGF0dXNPYmoudmFsID0gdmFsO1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGNoYW5nZVN0YXR1c09iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1lc3NhZ2VTdGF0dXMgcmVzcFwiLHJlc3ApO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3BbJ0hlYWRlciddKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0gKTtcbiAgfVxufVxuIl19