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
export class DashboardService {
    /**
     * @param {?} dispatcher
     * @param {?} APIFactory
     * @param {?} dateUtils
     * @param {?} errorHandler
     * @param {?} showRule
     * @param {?} showDashboardRule
     */
    constructor(dispatcher, APIFactory, dateUtils, errorHandler, showRule, showDashboardRule) {
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
    isFirstTime() {
        /** @type {?} */
        let result;
        if (this.isFirstInDashboard) {
            result = true;
            this.isFirstInDashboard = false;
        }
        else {
            result = false;
        }
        return result;
    }
    /**
     * @param {?} clientID
     * @param {?} status
     * @return {?}
     */
    updateMessageStatus(clientID, status) {
        /** @type {?} */
        let dashboardUpdateMessageStatusAPI = (/** @type {?} */ (this.APIFactory.getAPI('updateDashboardMessageStatus')));
        dashboardUpdateMessageStatusAPI.setClientID(clientID);
        dashboardUpdateMessageStatusAPI.setStatus(status);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(dashboardUpdateMessageStatusAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.debug('dashboard-service-updateDashboardMessageStatus', data);
                observer.next(data['Header']);
                observer.complete();
            }));
        }));
    }
    /**
     * @param {?} keyword
     * @param {?} pageInfo
     * @return {?}
     */
    getMessageByKeyword(keyword, pageInfo) {
        /** @type {?} */
        let dashboardGetMessageListAPI = (/** @type {?} */ (this.APIFactory.getAPI('getDashboardMessageList')));
        dashboardGetMessageListAPI.setKeyword(keyword);
        dashboardGetMessageListAPI.setPageInfo(pageInfo);
        dashboardGetMessageListAPI.isShow = true;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            this.dispatcher.dispatch(dashboardGetMessageListAPI).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                console.log("getMessageByKeyword data:", data);
                /** @type {?} */
                let messageList = data['Body'];
                if (messageList) {
                    /** @type {?} */
                    let DashboardMessageList = [];
                    messageList.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        /** @type {?} */
                        let dashboardMessage = new DashboardMessage(item.ClientID, item.MessageID, item.MessageCategory, item.MessageType, item.Title, item.Description, item.Arguments, item.Status, this.convertDate(new Date(item.MessageTime)), this.convertTime(new Date(item.MessageTime)), item.IsPopup, item.LinkStatus, item.IsClick);
                        DashboardMessageList.push(dashboardMessage);
                    }));
                    observer.next(DashboardMessageList);
                    observer.complete();
                }
                else {
                    observer.next(false);
                    observer.complete();
                }
            }));
        }));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    convertDate(date) {
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    convertTime(date) {
        if (date) {
            return this.dateUtils.toDateString(date, 'shortTime');
        }
        else {
            return '- -';
        }
    }
    /**
     * @param {?} performanceType
     * @param {?=} appUseMode
     * @return {?}
     */
    getPerformanceData(performanceType, appUseMode = '') {
        if (performanceType == 'T') {
            return from(this._getPerformanceTeamData(appUseMode));
        }
        else {
            return from(this._getPerformancePersonalData());
        }
    }
    /**
     * @private
     * @param {?} appUseMode
     * @return {?}
     */
    _getPerformanceTeamData(appUseMode) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('into _getPerformanceTeamData');
            /** @type {?} */
            let returnData = null;
            /** @type {?} */
            let Datas = [];
            try {
                /** @type {?} */
                let teamProgressMainResp;
                /** @type {?} */
                let yearConfigResp;
                /** @type {?} */
                let teamProgressMain = this.APIFactory.getAPI("getTeamProgressMain");
                /** @type {?} */
                let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                [yearConfigResp, teamProgressMainResp] = yield Promise.all([
                    this.dispatcher.dispatch(yearConfig).toPromise(),
                    this.dispatcher.dispatch(teamProgressMain).toPromise(),
                ]);
                console.log("TeamProgressMainResp", teamProgressMainResp);
                console.log("yearConfigResp", yearConfigResp);
                /** @type {?} */
                let DataYear;
                if (yearConfigResp.Header["status"]) {
                    DataYear = yearConfigResp.Body.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.IsCurrent == "Y"))[0].DataYear;
                }
                else {
                    throw "get yearConfig fail. yearConfigResp:" + yearConfigResp;
                }
                /** @type {?} */
                let timeBaseTitle = "monthly";
                //timeBase title
                if (this.showDashboardRule) {
                    timeBaseTitle = this.showDashboardRule.showTimeBaseTitle(appUseMode);
                }
                if (teamProgressMainResp.Header["status"]) {
                    /** @type {?} */
                    let timeBase = "Month";
                    if (appUseMode == "Manager" || appUseMode == "Supervisor") {
                        timeBase = "Year";
                    }
                    /** @type {?} */
                    let dataType = ["FYFC", "ANP"];
                    dataType.forEach((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => {
                        /** @type {?} */
                        let dataobj = teamProgressMainResp.Body.filter((/**
                         * @param {?} xx
                         * @return {?}
                         */
                        xx => xx.DataYear == DataYear && xx.TimeBase == timeBase && xx.DataType == x))[0];
                        console.log('dataobj:', dataobj);
                        Datas.push({
                            title: `Home_${x}`,
                            MonthlyProgressTotal: dataobj.Forecast == -1 ? dataobj.Goal : dataobj.Forecast,
                            MonthlyProgressCurrent: dataobj.Actual
                        });
                    }));
                }
                else {
                    throw "get teamProgressMain fail. teamProgressMainResp:" + teamProgressMainResp;
                }
                returnData = {
                    timeBaseTitle: timeBaseTitle,
                    datas: Datas
                };
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00130', '_getPerformanceTeamData fail!' + error.message));
            }
            //TODO ZH&CAO 開interface\
            console.log("_getPerformanceTeamData returnData:", returnData);
            return returnData;
        });
    }
    /**
     * @private
     * @return {?}
     */
    _getPerformancePersonalData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let yearConfigResp;
            /** @type {?} */
            let personalProgressResp;
            /** @type {?} */
            let DataYear;
            /** @type {?} */
            let ActivitiesPoints;
            /** @type {?} */
            let ActivitiesPointsTotal;
            /** @type {?} */
            let MonthlyProgressTotal;
            /** @type {?} */
            let MonthlyProgressCurrent;
            /** @type {?} */
            let InforceConvertPointBase;
            /** @type {?} */
            let FindConvertPointBase;
            /** @type {?} */
            let ScheduleConvertPointBase;
            /** @type {?} */
            let MeetConvertPointBase;
            /** @type {?} */
            let SubmitConvertPointBase;
            /** @type {?} */
            let returnData = {};
            try {
                /** @type {?} */
                let yearConfig = this.APIFactory.getAPI("getGoalSettingYearConfig");
                /** @type {?} */
                let getPersonalProgress = this.APIFactory.getAPI("getPersonalProgress");
                [yearConfigResp, personalProgressResp] = yield Promise.all([
                    this.dispatcher.dispatch(yearConfig).toPromise(),
                    this.dispatcher.dispatch(getPersonalProgress).toPromise(),
                ]);
                console.log("yearConfigResp", yearConfigResp);
                console.log("personalProgressResp", personalProgressResp);
                if (yearConfigResp.Header["status"]) {
                    /** @type {?} */
                    let currentObj = yearConfigResp.Body.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.IsCurrent == "Y"))[0];
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
                    /** @type {?} */
                    let personalProgressObj = personalProgressResp.Body.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.DataYear == DataYear && x.TimeBase == "Day" && x.DataType == "Actual"))[0];
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
                    x => x.DataYear == DataYear && x.TimeBase == "Month" && x.DataType == "Actual"))[0].FYFC;
                    MonthlyProgressTotal = personalProgressResp.Body.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.DataYear == DataYear && x.TimeBase == "Month" && x.DataType == "Goal"))[0].FYFC;
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
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00131', '_getPerformancePersonalData fail!' + error.message));
            }
            console.log("_getPerformancePersonalData returnData:", returnData, JSON.stringify(returnData));
            return returnData;
        });
    }
    /**
     * @return {?}
     */
    getUserLevel() {
        return 'diamond';
    }
    /**
     * @param {?} messageID
     * @param {?} col
     * @param {?} val
     * @return {?}
     */
    changeMessageStatus(messageID, col, val) {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            console.log("into changeMessageStatus :", messageID, col, val);
            /** @type {?} */
            let changeStatusObj = (/** @type {?} */ (this.APIFactory.getAPI("ChangeMessageStatus")));
            changeStatusObj.messageID = messageID;
            changeStatusObj.col = col;
            changeStatusObj.val = val;
            this.dispatcher.dispatch(changeStatusObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.log("changeMessageStatus resp", resp);
                observer.next(resp['Header']);
                observer.complete();
            }));
        }));
    }
}
DashboardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DashboardService.ctorParameters = () => [
    { type: APIDispatch },
    { type: APIFactory },
    { type: DateUtils },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showDashboardRuleToken,] }] }
];
/** @nocollapse */ DashboardService.ngInjectableDef = i0.defineInjectable({ factory: function DashboardService_Factory() { return new DashboardService(i0.inject(i1.APIDispatch), i0.inject(i1.APIFactory), i0.inject(i1.DateUtils), i0.inject(i0.ErrorHandler), i0.inject(i1.showRuleToken, 8), i0.inject(i2.showDashboardRuleToken, 8)); }, token: DashboardService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2Rhc2hib2FyZC1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUF3RSxTQUFTLEVBQUUsYUFBYSxFQUFZLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlLLE9BQU8sRUFBRSxVQUFVLEVBQU0sSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSTVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBTzNFLE1BQU07Ozs7Ozs7OztJQUdKLFlBQ1UsVUFBdUIsRUFDdkIsVUFBc0IsRUFDdEIsU0FBb0IsRUFDcEIsWUFBMEIsRUFDUyxRQUFrQixFQUNULGlCQUFvQztRQUxoRixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNTLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUGxGLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQVN6QyxjQUFjO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXOztZQUNMLE1BQWU7UUFDbkIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNkLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7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QUFDLEVBQUU7Z0JBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQzs7O1lBeFJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWlEsV0FBVztZQUFFLFVBQVU7WUFBd0UsU0FBUztZQUQxRSxZQUFZOzRDQXNCOUMsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOzRDQUNoQyxRQUFRLFlBQUksTUFBTSxTQUFDLHNCQUFzQjs7Ozs7Ozs7SUFQNUMsOENBQTJDOzs7OztJQUV6QyxzQ0FBK0I7Ozs7O0lBQy9CLHNDQUE4Qjs7Ozs7SUFDOUIscUNBQTRCOzs7OztJQUM1Qix3Q0FBa0M7Ozs7O0lBQ2xDLG9DQUE2RDs7Ozs7SUFDN0QsNkNBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgRXJyb3JIYW5kbGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQSURpc3BhdGNoLCBBUElGYWN0b3J5LCBQYWdlSW5mbywgRGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSSxEYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSSwgRGF0ZVV0aWxzLCBzaG93UnVsZVRva2VuLCBzaG93UnVsZSwgQVBQRXJyb3J9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgLGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhc2hib2FyZE1lc3NhZ2UgfSBmcm9tICcuL21vZGVsL0Rhc2hib2FyZE1lc3NhZ2UnO1xuaW1wb3J0IHsgTnVsbFRlbXBsYXRlVmlzaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7IGZvcm1BcnJheU5hbWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lJztcbmltcG9ydCB7IHNob3dEYXNoYm9hcmRSdWxlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHNob3dEYXNoYm9hcmRSdWxlVG9rZW4gfSBmcm9tICcuLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgUHJvZ3Jlc3NQZXJzb25hbERhdGEgfSBmcm9tICdAYWxsaWFuelNORC9wcm9ncmVzcyc7XG5pbXBvcnQgeyBDaGFuZ2VNZXNzYWdlU3RhdHVzQVBJIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZS9saWIvYXBpL3JlZ2lzdGVyL2NoYW5nZU1lc3NhZ2VTdGF0dXNBUEknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIHtcblxuICBwcml2YXRlIGlzRmlyc3RJbkRhc2hib2FyZDogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgIHByaXZhdGUgZGF0ZVV0aWxzOiBEYXRlVXRpbHMsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dSdWxlVG9rZW4pIHByaXZhdGUgc2hvd1J1bGU6IHNob3dSdWxlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd0Rhc2hib2FyZFJ1bGVUb2tlbikgcHJpdmF0ZSBzaG93RGFzaGJvYXJkUnVsZTogc2hvd0Rhc2hib2FyZFJ1bGUsXG4gICkge1xuICAgIC8vcmVnaXN0ZXIgYXBpXG4gIH1cblxuICBpc0ZpcnN0VGltZSgpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuO1xuICAgIGlmICh0aGlzLmlzRmlyc3RJbkRhc2hib2FyZCkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNGaXJzdEluRGFzaGJvYXJkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgdXBkYXRlTWVzc2FnZVN0YXR1cyhjbGllbnRJRDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGRhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEk6IERhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkgPSA8RGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQST50aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKCd1cGRhdGVEYXNoYm9hcmRNZXNzYWdlU3RhdHVzJyk7XG4gICAgZGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSS5zZXRDbGllbnRJRChjbGllbnRJRCk7XG4gICAgZGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQSS5zZXRTdGF0dXMoc3RhdHVzKTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChkYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCdkYXNoYm9hcmQtc2VydmljZS11cGRhdGVEYXNoYm9hcmRNZXNzYWdlU3RhdHVzJywgZGF0YSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhWydIZWFkZXInXSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuXG4gIGdldE1lc3NhZ2VCeUtleXdvcmQoa2V5d29yZDogc3RyaW5nLCBwYWdlSW5mbzogUGFnZUluZm8pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBkYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSTogRGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEkgPSA8RGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSSgnZ2V0RGFzaGJvYXJkTWVzc2FnZUxpc3QnKTtcbiAgICBkYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSS5zZXRLZXl3b3JkKGtleXdvcmQpO1xuICAgIGRhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJLnNldFBhZ2VJbmZvKHBhZ2VJbmZvKTtcbiAgICBkYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSS5pc1Nob3cgPSB0cnVlO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGRhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRNZXNzYWdlQnlLZXl3b3JkIGRhdGE6XCIsZGF0YSk7XG4gICAgICAgIGxldCBtZXNzYWdlTGlzdCA9IGRhdGFbJ0JvZHknXTtcblxuICAgICAgICBpZiAobWVzc2FnZUxpc3QpIHtcblxuICAgICAgICAgIGxldCBEYXNoYm9hcmRNZXNzYWdlTGlzdDogQXJyYXk8RGFzaGJvYXJkTWVzc2FnZT4gPSBbXTtcbiAgICAgICAgICBtZXNzYWdlTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXG4gICAgICAgICAgICBsZXQgZGFzaGJvYXJkTWVzc2FnZTogRGFzaGJvYXJkTWVzc2FnZSA9IG5ldyBEYXNoYm9hcmRNZXNzYWdlKGl0ZW0uQ2xpZW50SUQsIGl0ZW0uTWVzc2FnZUlELCBpdGVtLk1lc3NhZ2VDYXRlZ29yeSwgaXRlbS5NZXNzYWdlVHlwZSwgaXRlbS5UaXRsZSwgaXRlbS5EZXNjcmlwdGlvbiwgaXRlbS5Bcmd1bWVudHMsIGl0ZW0uU3RhdHVzLCB0aGlzLmNvbnZlcnREYXRlKG5ldyBEYXRlKGl0ZW0uTWVzc2FnZVRpbWUpKSwgdGhpcy5jb252ZXJ0VGltZShuZXcgRGF0ZShpdGVtLk1lc3NhZ2VUaW1lKSksaXRlbS5Jc1BvcHVwICwgaXRlbS5MaW5rU3RhdHVzLCBpdGVtLklzQ2xpY2sgKTtcbiAgICAgICAgICAgIERhc2hib2FyZE1lc3NhZ2VMaXN0LnB1c2goZGFzaGJvYXJkTWVzc2FnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG9ic2VydmVyLm5leHQoRGFzaGJvYXJkTWVzc2FnZUxpc3QpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cblxuXG4gIHB1YmxpYyBjb252ZXJ0RGF0ZShkYXRlOiBEYXRlKSB7XG5cbiAgICBpZiAoZGF0ZSkge1xuICAgICAgaWYgKHRoaXMuc2hvd1J1bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1J1bGUuY29udmVydERhdGUoZGF0ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZVN0cmluZyhkYXRlLCAneXl5eS1NTS1kZCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJy0gLSc7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgY29udmVydFRpbWUoZGF0ZTogRGF0ZSkge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlVXRpbHMudG9EYXRlU3RyaW5nKGRhdGUsICdzaG9ydFRpbWUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJy0gLSc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFBlcmZvcm1hbmNlRGF0YShwZXJmb3JtYW5jZVR5cGU6c3RyaW5nLCBhcHBVc2VNb2RlOnN0cmluZz0nJyk6IE9ic2VydmFibGU8YW55PntcblxuICAgIGlmIChwZXJmb3JtYW5jZVR5cGUgPT0gJ1QnKXtcbiAgICAgIHJldHVybiBmcm9tKHRoaXMuX2dldFBlcmZvcm1hbmNlVGVhbURhdGEoYXBwVXNlTW9kZSkpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZyb20odGhpcy5fZ2V0UGVyZm9ybWFuY2VQZXJzb25hbERhdGEoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UGVyZm9ybWFuY2VUZWFtRGF0YShhcHBVc2VNb2RlOnN0cmluZyl7IFxuXG4gICAgY29uc29sZS5sb2coJ2ludG8gX2dldFBlcmZvcm1hbmNlVGVhbURhdGEnKTtcbiAgICBsZXQgcmV0dXJuRGF0YSA9IG51bGw7XG4gICAgbGV0IERhdGFzID0gW107XG5cbiAgICB0cnl7XG4gICAgICBsZXQgdGVhbVByb2dyZXNzTWFpblJlc3A7XG4gICAgICBsZXQgeWVhckNvbmZpZ1Jlc3A7XG4gIFxuICAgICAgbGV0IHRlYW1Qcm9ncmVzc01haW4gPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0VGVhbVByb2dyZXNzTWFpblwiKTtcbiAgICAgIGxldCB5ZWFyQ29uZmlnID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nWWVhckNvbmZpZ1wiKTtcbiAgXG4gICAgICBbeWVhckNvbmZpZ1Jlc3AsIHRlYW1Qcm9ncmVzc01haW5SZXNwXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHllYXJDb25maWcpLnRvUHJvbWlzZSgpLFxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2godGVhbVByb2dyZXNzTWFpbikudG9Qcm9taXNlKCksXG4gICAgICBdKTtcbiAgXG4gICAgICBjb25zb2xlLmxvZyhcIlRlYW1Qcm9ncmVzc01haW5SZXNwXCIsIHRlYW1Qcm9ncmVzc01haW5SZXNwKTtcbiAgICAgIGNvbnNvbGUubG9nKFwieWVhckNvbmZpZ1Jlc3BcIiwgeWVhckNvbmZpZ1Jlc3ApO1xuICBcbiAgICAgIGxldCBEYXRhWWVhcjsgXG4gICAgICBpZih5ZWFyQ29uZmlnUmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pe1xuICAgICAgICBEYXRhWWVhciA9IHllYXJDb25maWdSZXNwLkJvZHkuZmlsdGVyKHggPT4geC5Jc0N1cnJlbnQgPT0gXCJZXCIpWzBdLkRhdGFZZWFyO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRocm93IFwiZ2V0IHllYXJDb25maWcgZmFpbC4geWVhckNvbmZpZ1Jlc3A6XCIreWVhckNvbmZpZ1Jlc3A7XG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lQmFzZVRpdGxlID0gXCJtb250aGx5XCI7XG4gICAgICAvL3RpbWVCYXNlIHRpdGxlXG4gICAgICBpZih0aGlzLnNob3dEYXNoYm9hcmRSdWxlKXtcbiAgICAgICAgdGltZUJhc2VUaXRsZSA9IHRoaXMuc2hvd0Rhc2hib2FyZFJ1bGUuc2hvd1RpbWVCYXNlVGl0bGUoYXBwVXNlTW9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRlYW1Qcm9ncmVzc01haW5SZXNwLkhlYWRlcltcInN0YXR1c1wiXSl7XG4gICAgICAgIGxldCB0aW1lQmFzZSA9IFwiTW9udGhcIjtcbiAgICAgICAgaWYoYXBwVXNlTW9kZSA9PSBcIk1hbmFnZXJcIiB8fCBhcHBVc2VNb2RlID09IFwiU3VwZXJ2aXNvclwiKXtcbiAgICAgICAgICB0aW1lQmFzZSA9IFwiWWVhclwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkYXRhVHlwZSA9IFtcIkZZRkNcIixcIkFOUFwiXTtcbiAgICAgICAgZGF0YVR5cGUuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICBsZXQgZGF0YW9iaiA9IHRlYW1Qcm9ncmVzc01haW5SZXNwLkJvZHkuZmlsdGVyKHh4ID0+IHh4LkRhdGFZZWFyID09IERhdGFZZWFyICYmIHh4LlRpbWVCYXNlID09IHRpbWVCYXNlICYmIHh4LkRhdGFUeXBlID09IHgpWzBdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhb2JqOicsZGF0YW9iaik7XG4gICAgICAgICAgRGF0YXMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogYEhvbWVfJHt4fWAsXG4gICAgICAgICAgICBNb250aGx5UHJvZ3Jlc3NUb3RhbDogZGF0YW9iai5Gb3JlY2FzdCA9PSAtMSA/IGRhdGFvYmouR29hbCA6IGRhdGFvYmouRm9yZWNhc3QsXG4gICAgICAgICAgICBNb250aGx5UHJvZ3Jlc3NDdXJyZW50OiBkYXRhb2JqLkFjdHVhbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aHJvdyBcImdldCB0ZWFtUHJvZ3Jlc3NNYWluIGZhaWwuIHRlYW1Qcm9ncmVzc01haW5SZXNwOlwiK3RlYW1Qcm9ncmVzc01haW5SZXNwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm5EYXRhID0ge1xuICAgICAgICB0aW1lQmFzZVRpdGxlIDogdGltZUJhc2VUaXRsZSxcbiAgICAgICAgZGF0YXMgOiBEYXRhc1xuICAgICAgfVxuXG4gICAgfWNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDAxMzAnLCdfZ2V0UGVyZm9ybWFuY2VUZWFtRGF0YSBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICAgICAgICAvL1RPRE8gWkgmQ0FPIOmWi2ludGVyZmFjZVxcXG4gICAgY29uc29sZS5sb2coXCJfZ2V0UGVyZm9ybWFuY2VUZWFtRGF0YSByZXR1cm5EYXRhOlwiLHJldHVybkRhdGEpO1xuICAgIHJldHVybiByZXR1cm5EYXRhO1xuXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRQZXJmb3JtYW5jZVBlcnNvbmFsRGF0YSgpe1xuXG4gICAgbGV0IHllYXJDb25maWdSZXNwO1xuICAgIGxldCBwZXJzb25hbFByb2dyZXNzUmVzcDtcblxuICAgIGxldCBEYXRhWWVhcjsgXG4gICAgbGV0IEFjdGl2aXRpZXNQb2ludHM7XG4gICAgbGV0IEFjdGl2aXRpZXNQb2ludHNUb3RhbDtcbiAgICBsZXQgTW9udGhseVByb2dyZXNzVG90YWw7XG4gICAgbGV0IE1vbnRobHlQcm9ncmVzc0N1cnJlbnQ7XG5cbiAgICBsZXQgSW5mb3JjZUNvbnZlcnRQb2ludEJhc2U7XG4gICAgbGV0IEZpbmRDb252ZXJ0UG9pbnRCYXNlO1xuICAgIGxldCBTY2hlZHVsZUNvbnZlcnRQb2ludEJhc2U7XG4gICAgbGV0IE1lZXRDb252ZXJ0UG9pbnRCYXNlO1xuICAgIGxldCBTdWJtaXRDb252ZXJ0UG9pbnRCYXNlO1xuXG4gICAgbGV0IHJldHVybkRhdGEgPSB7fTtcblxuICAgIHRyeXtcblxuICAgIGxldCB5ZWFyQ29uZmlnID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcImdldEdvYWxTZXR0aW5nWWVhckNvbmZpZ1wiKTtcbiAgICBsZXQgZ2V0UGVyc29uYWxQcm9ncmVzcyA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXRQZXJzb25hbFByb2dyZXNzXCIpO1xuXG4gICAgW3llYXJDb25maWdSZXNwLCBwZXJzb25hbFByb2dyZXNzUmVzcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goeWVhckNvbmZpZykudG9Qcm9taXNlKCksXG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZ2V0UGVyc29uYWxQcm9ncmVzcykudG9Qcm9taXNlKCksXG4gICAgXSk7XG4gICAgY29uc29sZS5sb2coXCJ5ZWFyQ29uZmlnUmVzcFwiLHllYXJDb25maWdSZXNwKTtcbiAgICBjb25zb2xlLmxvZyhcInBlcnNvbmFsUHJvZ3Jlc3NSZXNwXCIscGVyc29uYWxQcm9ncmVzc1Jlc3ApO1xuXG4gICAgaWYoeWVhckNvbmZpZ1Jlc3AuSGVhZGVyW1wic3RhdHVzXCJdKXtcbiAgICAgIGxldCBjdXJyZW50T2JqID0geWVhckNvbmZpZ1Jlc3AuQm9keS5maWx0ZXIoeCA9PiB4LklzQ3VycmVudCA9PSBcIllcIilbMF07XG4gICAgICBEYXRhWWVhciA9IGN1cnJlbnRPYmouRGF0YVllYXI7XG4gICAgICBBY3Rpdml0aWVzUG9pbnRzVG90YWwgPSBjdXJyZW50T2JqLlByb2dyZXNzRGF5UG9pbnRzTGltaXQ7XG4gICAgICBJbmZvcmNlQ29udmVydFBvaW50QmFzZSA9IGN1cnJlbnRPYmouSW5mb3JjZUNvbnZlcnRQb2ludEJhc2U7XG4gICAgICBGaW5kQ29udmVydFBvaW50QmFzZSA9IGN1cnJlbnRPYmouRmluZENvbnZlcnRQb2ludEJhc2U7XG4gICAgICBTY2hlZHVsZUNvbnZlcnRQb2ludEJhc2UgPSBjdXJyZW50T2JqLlNjaGVkdWxlQ29udmVydFBvaW50QmFzZTtcbiAgICAgIE1lZXRDb252ZXJ0UG9pbnRCYXNlID0gY3VycmVudE9iai5NZWV0Q29udmVydFBvaW50QmFzZTtcbiAgICAgIFN1Ym1pdENvbnZlcnRQb2ludEJhc2UgPSBjdXJyZW50T2JqLlN1Ym1pdENvbnZlcnRQb2ludEJhc2U7XG4gICAgfWVsc2V7XG4gICAgICB0aHJvdyBcImdldCB5ZWFyQ29uZmlnIGZhaWwuIHllYXJDb25maWdSZXNwOlwiK3llYXJDb25maWdSZXNwO1xuICAgIH1cblxuICAgIGlmKHBlcnNvbmFsUHJvZ3Jlc3NSZXNwLkhlYWRlcltcInN0YXR1c1wiXSl7XG4gICAgICAvL3RvZG8gbmVlZCB0byBmaWd1cmUgb3V0IEFjdGl2aXRpZXNQb2ludHMgY2FudCBhZGQgLTEgdG8gc3VtICAgXG4gICAgICBsZXQgcGVyc29uYWxQcm9ncmVzc09iaiA9IHBlcnNvbmFsUHJvZ3Jlc3NSZXNwLkJvZHkuZmlsdGVyKHggPT4geC5EYXRhWWVhciA9PSBEYXRhWWVhciAmJiB4LlRpbWVCYXNlID09IFwiRGF5XCIgJiYgeC5EYXRhVHlwZSA9PSBcIkFjdHVhbFwiKVswXTtcblxuICAgICAgLy9kaXJ0eSB3YXlcbiAgICAgIHBlcnNvbmFsUHJvZ3Jlc3NPYmouRmluZCA9IChwZXJzb25hbFByb2dyZXNzT2JqLkZpbmQgPD0gLTEpID8gMCA6IHBlcnNvbmFsUHJvZ3Jlc3NPYmouRmluZDtcbiAgICAgIHBlcnNvbmFsUHJvZ3Jlc3NPYmouU2NoZWR1bGUgPSAocGVyc29uYWxQcm9ncmVzc09iai5TY2hlZHVsZSA8PSAtMSkgPyAwIDogcGVyc29uYWxQcm9ncmVzc09iai5TY2hlZHVsZTtcbiAgICAgIHBlcnNvbmFsUHJvZ3Jlc3NPYmouTWVldCA9IChwZXJzb25hbFByb2dyZXNzT2JqLk1lZXQgPD0gLTEpID8gMCA6IHBlcnNvbmFsUHJvZ3Jlc3NPYmouTWVldDtcbiAgICAgIHBlcnNvbmFsUHJvZ3Jlc3NPYmouU3VibWl0ID0gKHBlcnNvbmFsUHJvZ3Jlc3NPYmouU3VibWl0IDw9IC0xKSA/IDAgOiBwZXJzb25hbFByb2dyZXNzT2JqLlN1Ym1pdDtcbiAgICAgIHBlcnNvbmFsUHJvZ3Jlc3NPYmouSW5mb3JjZSA9IChwZXJzb25hbFByb2dyZXNzT2JqLkluZm9yY2UgPD0gLTEpID8gMCA6IHBlcnNvbmFsUHJvZ3Jlc3NPYmouSW5mb3JjZTtcblxuICAgICAgQWN0aXZpdGllc1BvaW50cyA9IHBlcnNvbmFsUHJvZ3Jlc3NPYmouRmluZCAqIEZpbmRDb252ZXJ0UG9pbnRCYXNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgcGVyc29uYWxQcm9ncmVzc09iai5TY2hlZHVsZSAqIFNjaGVkdWxlQ29udmVydFBvaW50QmFzZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHBlcnNvbmFsUHJvZ3Jlc3NPYmouTWVldCAqIE1lZXRDb252ZXJ0UG9pbnRCYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwZXJzb25hbFByb2dyZXNzT2JqLlN1Ym1pdCAqIFN1Ym1pdENvbnZlcnRQb2ludEJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHBlcnNvbmFsUHJvZ3Jlc3NPYmouSW5mb3JjZSAqIEluZm9yY2VDb252ZXJ0UG9pbnRCYXNlO1xuICAgICAgLy9BY3Rpdml0aWVzUG9pbnRzID0gKEFjdGl2aXRpZXNQb2ludHM+PUFjdGl2aXRpZXNQb2ludHNUb3RhbCk/QWN0aXZpdGllc1BvaW50c1RvdGFsOkFjdGl2aXRpZXNQb2ludHM7XG4gICAgICBcbiAgICAgIE1vbnRobHlQcm9ncmVzc0N1cnJlbnQgPSBwZXJzb25hbFByb2dyZXNzUmVzcC5Cb2R5LmZpbHRlcih4ID0+IHguRGF0YVllYXIgPT0gRGF0YVllYXIgJiYgeC5UaW1lQmFzZSA9PSBcIk1vbnRoXCIgJiYgeC5EYXRhVHlwZSA9PSBcIkFjdHVhbFwiKVswXS5GWUZDO1xuICAgICAgTW9udGhseVByb2dyZXNzVG90YWwgPSBwZXJzb25hbFByb2dyZXNzUmVzcC5Cb2R5LmZpbHRlcih4ID0+IHguRGF0YVllYXIgPT0gRGF0YVllYXIgJiYgeC5UaW1lQmFzZSA9PSBcIk1vbnRoXCIgJiYgeC5EYXRhVHlwZSA9PSBcIkdvYWxcIilbMF0uRllGQztcbiAgICB9ZWxzZXtcbiAgICAgIHRocm93IFwiZ2V0IHBlcnNvbmFsUHJvZ3Jlc3NSZXNwIGZhaWwuIHBlcnNvbmFsUHJvZ3Jlc3NSZXNwOlwiK3BlcnNvbmFsUHJvZ3Jlc3NSZXNwO1xuICAgIH1cbiAgICByZXR1cm5EYXRhID0ge1xuICAgICAgQWN0aXZpdGllc1BvaW50czogQWN0aXZpdGllc1BvaW50cyxcbiAgICAgIEFjdGl2aXRpZXNQb2ludHNUb3RhbDogQWN0aXZpdGllc1BvaW50c1RvdGFsLFxuICAgICAgTW9udGhseVByb2dyZXNzVG90YWw6IE1vbnRobHlQcm9ncmVzc1RvdGFsLFxuICAgICAgTW9udGhseVByb2dyZXNzQ3VycmVudDogTW9udGhseVByb2dyZXNzQ3VycmVudFxuICAgIH1cbiAgfWNhdGNoIChlcnJvcikge1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwMTMxJywnX2dldFBlcmZvcm1hbmNlUGVyc29uYWxEYXRhIGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICAgIGNvbnNvbGUubG9nKFwiX2dldFBlcmZvcm1hbmNlUGVyc29uYWxEYXRhIHJldHVybkRhdGE6XCIscmV0dXJuRGF0YSxKU09OLnN0cmluZ2lmeShyZXR1cm5EYXRhKSk7XG4gICAgcmV0dXJuIHJldHVybkRhdGE7XG4gIH1cbiAgcHVibGljIGdldFVzZXJMZXZlbCgpOiBzdHJpbmcge1xuXG4gICAgcmV0dXJuICdkaWFtb25kJztcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VNZXNzYWdlU3RhdHVzKG1lc3NhZ2VJRDpudW1iZXIsIGNvbDpzdHJpbmcsIHZhbDpzdHJpbmcpe1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW50byBjaGFuZ2VNZXNzYWdlU3RhdHVzIDpcIixtZXNzYWdlSUQsY29sLHZhbCk7XG4gICAgICBsZXQgY2hhbmdlU3RhdHVzT2JqID0gPENoYW5nZU1lc3NhZ2VTdGF0dXNBUEk+dGhpcy5BUElGYWN0b3J5LmdldEFQSShcIkNoYW5nZU1lc3NhZ2VTdGF0dXNcIik7XG4gICAgICBjaGFuZ2VTdGF0dXNPYmoubWVzc2FnZUlEID0gbWVzc2FnZUlEO1xuICAgICAgY2hhbmdlU3RhdHVzT2JqLmNvbCA9IGNvbDtcbiAgICAgIGNoYW5nZVN0YXR1c09iai52YWwgPSB2YWw7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY2hhbmdlU3RhdHVzT2JqKS50b1Byb21pc2UoKS50aGVuKHJlc3AgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTWVzc2FnZVN0YXR1cyByZXNwXCIscmVzcCk7XG4gICAgICAgIG9ic2VydmVyLm5leHQocmVzcFsnSGVhZGVyJ10pO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSApO1xuICB9XG59XG4iXX0=