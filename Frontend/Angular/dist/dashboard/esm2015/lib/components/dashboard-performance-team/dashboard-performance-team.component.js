/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ErrorHandler } from '@angular/core';
import { take } from 'rxjs/operators';
import { Language, DefaultLoginMgr, APPError, NumberUtils, AppRouter } from '@allianzSND/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { ProgressService, Tag } from '@allianzSND/progress';
export class DashboardPerformanceTeamComponent {
    /**
     * @param {?} dashboardService
     * @param {?} loginMgr
     * @param {?} errorHandler
     * @param {?} router
     * @param {?} progressService
     */
    constructor(dashboardService, loginMgr, errorHandler, router, progressService) {
        this.dashboardService = dashboardService;
        this.loginMgr = loginMgr;
        this.errorHandler = errorHandler;
        this.router = router;
        this.progressService = progressService;
        this.dashboardPerformanceTeam = [];
        this.data = null;
        this.isLoadDataFinish = false;
        this.language = new Language();
        this.windowWidth = null;
        this.init();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let loginInfo = yield this.loginMgr.getLoginInfo().pipe(take(1)).toPromise();
                this.loginMgr.getLoginInfo().subscribe((/**
                 * @param {?} info
                 * @return {?}
                 */
                (info) => {
                    console.log('check permission subscribe:', info);
                    if (info)
                        this.userRole = info.AppUseMode[0];
                    console.log("get AppUseMode：", this.userRole);
                }));
                this.data = yield this.dashboardService.getPerformanceData("T", this.userRole).toPromise();
                if (this.data != null) {
                    // this.isLoadDataFinish = true;
                    // this.timeBaseTitle = this.data.timeBaseTitle;
                    // console.log(" this.timeBaseTitle", this.timeBaseTitle);
                    // this.data.datas.forEach((val,key) => {
                    //   let MonthlyProgressRate = val["MonthlyProgressCurrent"] / val["MonthlyProgressTotal"];
                    //   val["MonthlyProgressRate"] = this.convertNumberDigital(MonthlyProgressRate, 2);
                    // });
                    this.isLoadDataFinish = true;
                    this.timeBaseTitle = this.data.timeBaseTitle;
                    this.ShowMonthlyProgressRateArr = new Array();
                    this.ShowMonthlyProgressRateBarArr = new Array();
                    console.log(" this.timeBaseTitle", this.timeBaseTitle);
                    this.data.datas.forEach((/**
                     * @param {?} val
                     * @param {?} key
                     * @return {?}
                     */
                    (val, key) => {
                        /** @type {?} */
                        let MonthlyProgressRate = this.getRate(val["MonthlyProgressCurrent"], val["MonthlyProgressTotal"]);
                        val["MonthlyProgressRate"] = this.convertNumberDigital(MonthlyProgressRate, 2);
                        /** @type {?} */
                        let pc = this.getPercentage(val["MonthlyProgressRate"]);
                        /** @type {?} */
                        let monthlyNumerator = this.convertToNumber(val["MonthlyProgressCurrent"]);
                        /** @type {?} */
                        let monthlyDenominator = this.convertToNumber(val["MonthlyProgressTotal"]);
                        //let pcb = this.getPercentageBar(MonthlyProgressRate);
                        /** @type {?} */
                        let pcb = this.getMonthlyBarLength(monthlyNumerator, monthlyDenominator, 1.5, 150);
                        this.ShowMonthlyProgressRateArr.push(pc);
                        this.ShowMonthlyProgressRateBarArr.push(pcb);
                    }));
                }
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00600', 'DashboardPerformanceTeam init fail!' + error.message));
            }
        });
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    getRate(a, b) {
        if (a == -1 || !NumberUtils.isNumber(a))
            return -1;
        if (b == -1 || !NumberUtils.isNumber(b))
            return -1;
        return a / b;
    }
    /**
     * @private
     * @param {?} a
     * @return {?}
     */
    getPercentage(a) {
        if (a == -1 || !NumberUtils.isNumber(a))
            return "--";
        return (a * 100).toString();
    }
    /**
     * @private
     * @param {?} a
     * @return {?}
     */
    getPercentageBar(a) {
        if (a == -1 || !NumberUtils.isNumber(a))
            return "0";
        return (a).toString();
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    convertToNumber(str) {
        /** @type {?} */
        let convert = Number(str);
        if (convert == NaN) {
            return 0;
        }
        else if (convert <= -1) {
            return 0;
        }
        else if (convert == 0) {
            return 0;
        }
        else {
            return convert;
        }
    }
    /**
     * @private
     * @param {?} monthlyNumerator
     * @param {?} monthlyDenominator
     * @param {?} maxLength
     * @param {?} maxBase
     * @return {?}
     */
    getMonthlyBarLength(monthlyNumerator, monthlyDenominator, maxLength, maxBase) {
        if (monthlyNumerator == 0 || monthlyDenominator == 0) {
            return "0";
        }
        /** @type {?} */
        let ans = Math.round((monthlyNumerator / monthlyDenominator) * 100) / maxBase;
        return (ans >= maxLength) ? maxLength.toString() : ans.toString();
    }
    //四捨五入
    /**
     * @private
     * @param {?} num
     * @param {?} digit
     * @return {?}
     */
    convertNumberDigital(num, digit) {
        if (digit === 0)
            return Math.round(num);
        else if (digit > 0) {
            return Math.round(num * Math.pow(10, digit)) / (Math.pow(10, digit));
        }
        else {
            return num;
        }
    }
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    convertNumberThousand(num) {
        if (num <= -1 || !NumberUtils.isNumber(num))
            return "--";
        /** @type {?} */
        var numString = num.toString();
        /** @type {?} */
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(numString)) {
            numString = numString.replace(pattern, "$1,$2");
        }
        return numString;
    }
    /**
     * @return {?}
     */
    goToProgress() {
        /** @type {?} */
        let tag = Tag.TeamTag;
        this.progressService.SetCurrentNavigationTag(tag);
        this.router.navigate("Progress");
    }
}
DashboardPerformanceTeamComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-dashboard-performance-team',
                template: "<div class=\"dashboard-performance-team\">\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block\">\n    <ng-container infoContent>\n      <div class=\"card-block\">\n        <div class=\"card_title\" *ngIf=\"timeBaseTitle=='monthly'\">{{language.monthlyProgress | translate}}</div>\n        <div class=\"card_title\" *ngIf=\"timeBaseTitle=='yearly'\">{{language.yearlyProgress | translate}}</div>\n\n        <!-- progress bar -->\n        <ng-container *ngIf=\"isLoadDataFinish\">\n        <div class=\"progressbar-main-block\" *ngFor=\"let team of data.datas; let i = index\" >\n          <!-- top num -->\n          <div class=\"num-block\">\n            <div class=\"num-title\">{{team.title | translate}}</div>\n            <div class=\"font-size_h2 num-value\">{{ShowMonthlyProgressRateArr[i] | numberFormat:0 }}\n            <span class=\"num-unit\">%</span></div>\n            <!-- <div class=\"font-size_h2 num-value\">{{team.MonthlyProgressRate*100}}</div> -->\n          </div>\n          <!-- end of top num -->\n          <!-- progress group --> \n          <div class=\"pregress-group-block\">\n            <!-- progress -->\n            <div class=\"progressbar-block\"> <!-- team.MonthlyProgressRate -->\n              <app-ui-progress [isTextTop]=\"false\" [styleSize]=\"'lg'\" [value]=\"ShowMonthlyProgressRateBarArr[i]\" [flagValue]=\"0.6667\"\n                [flagText]=\"'100%'\"></app-ui-progress>\n            </div>\n            <!-- end of progreww -->\n            <!-- btm value -->\n            <div class=\"value-block\">\n              <div class=\"value-detail-block\">\n                <div class=\"side-value left-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ team.MonthlyProgressCurrent | numberFormat }}</span>\n                </div>\n                <div class=\"mid-value\">/</div>\n                <div class=\"side-value right-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ team.MonthlyProgressTotal | numberFormat }}</span>\n                </div>\n              </div>\n            </div>\n            <!-- end of btm value -->\n          </div>\n          <!-- end of progress group -->\n        </div>\n        </ng-container>\n        <!-- end of progress bar -->\n        <!-- <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnHeight]=\"'md'\">\n            <ng-container TextType=\"cust\">{{language.detail | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout> -->\n        <div class=\"link-wrapper\">\n          <app-ui-link Action action=\"DashboardPerformanceGoToProgress\" (actionClick)=\"goToProgress()\">\n            <ng-container textType=\"linktext\">{{language.homeDetails | translate}}</ng-container>\n          </app-ui-link>\n        </div>\n\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n</div>\n",
                styles: [":host{width:100%}.msg-progress-block{width:100%}.msg-progress-block .card-block{padding:20px}.msg-progress-block .card_title{font-size:1rem;font-weight:700;color:#414141;padding-bottom:20px}.msg-progress-block ::ng-deep .card-content-btn{width:100%}.msg-progress-block ::ng-deep .btn-block{margin-top:30px;margin-bottom:10px}.msg-progress-block .link-wrapper{margin-top:25px;text-align:center}.msg-progress-block.card-pos-center .card-block{text-align:center}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .chart-block{color:#007ab3;text-align:center;padding:0 13px}:host ::ng-deep .chart-block .progress-total-value{font-weight:700;display:block;margin-bottom:8px;color:#003781}:host ::ng-deep .chart-block .progress-total-unit{font-size:.875rem;font-weight:700;color:#767676}.progressbar-main-block{display:flex;align-items:flex-end}.progressbar-main-block+.progressbar-main-block{margin-top:15px}.progressbar-main-block .num-block{color:#007ab3;display:flex;align-items:baseline;padding-bottom:10px;flex-wrap:wrap;width:120px;flex-grow:0}.progressbar-main-block .num-block .num-title{font-size:1.25rem;line-height:28px;font-weight:700;width:100%;display:block}.progressbar-main-block .num-block .num-unit{font-size:1.25rem;line-height:28px;font-weight:700}.progressbar-main-block .num-block .num-value{display:inline-block;padding:0 5px 0 0;text-align:center;font-weight:700}.progressbar-main-block .pregress-group-block{width:calc(100% - 120px);flex-grow:0;flex-shrink:0;display:inline-block;justify-content:flex-end}.progressbar-main-block .value-block{text-align:right;padding-top:10px}.progressbar-main-block .value-block .value-detail-block{display:flex;line-height:28px;justify-content:flex-end}.progressbar-main-block .value-block .value-detail-block .side-value{font-size:1.25rem;font-weight:700}.progressbar-main-block .value-block .value-detail-block .side-value.left-value{color:#007ab3}.progressbar-main-block .value-block .value-detail-block .mid-value{font-size:1.25rem;font-weight:700;margin:0 5px}@media (max-width:1023px){.progressbar-main-block{display:block}.progressbar-main-block .num-block{width:100%;align-items:center}.progressbar-main-block .num-block .num-title{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.progressbar-main-block .num-block .num-value{margin-left:10px}.progressbar-main-block .pregress-group-block{width:100%}}"]
            }] }
];
DashboardPerformanceTeamComponent.ctorParameters = () => [
    { type: DashboardService },
    { type: DefaultLoginMgr },
    { type: ErrorHandler },
    { type: AppRouter },
    { type: ProgressService }
];
if (false) {
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.dashboardPerformanceTeam;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.data;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.isLoadDataFinish;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.language;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.windowWidth;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformanceTeamComponent.prototype._monthlyProgressRate;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.timeBaseTitle;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.userRole;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.ShowMonthlyProgressRateArr;
    /** @type {?} */
    DashboardPerformanceTeamComponent.prototype.ShowMonthlyProgressRateBarArr;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformanceTeamComponent.prototype.dashboardService;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformanceTeamComponent.prototype.loginMgr;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformanceTeamComponent.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformanceTeamComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformanceTeamComponent.prototype.progressService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0vZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFhLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU81RCxNQUFNOzs7Ozs7OztJQWVKLFlBQ1UsZ0JBQWtDLEVBQ2xDLFFBQXlCLEVBQ3pCLFlBQTBCLEVBQzFCLE1BQWlCLEVBQ2pCLGVBQWdDO1FBSmhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFsQm5DLDZCQUF3QixHQUFrQixFQUFFLENBQUM7UUFDN0MsU0FBSSxHQUFRLElBQUksQ0FBQztRQUNqQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFlaEMsSUFBSSxDQUFDLElBQUksRUFBRSxD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QUMxQixPQUFPLEdBQUcsZ0JBQWdCO1FBRTlCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU0sWUFBWTs7WUFDYixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU87UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUE1SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLGk5RkFBMEQ7O2FBRTNEOzs7WUFQUSxnQkFBZ0I7WUFETixlQUFlO1lBRk4sWUFBWTtZQUU4QixTQUFTO1lBRXRFLGVBQWU7Ozs7SUFTdEIscUVBQW9EOztJQUNwRCxpREFBd0I7O0lBQ3hCLDZEQUF5Qzs7SUFFekMscURBQWlDOztJQUNqQyx3REFBa0M7Ozs7O0lBQ2xDLGlFQUE2Qjs7SUFDN0IsMERBQTZCOztJQUM3QixxREFBd0I7O0lBRXhCLHVFQUFpRDs7SUFDakQsMEVBQW9EOzs7OztJQUdsRCw2REFBMEM7Ozs7O0lBQzFDLHFEQUFpQzs7Ozs7SUFDakMseURBQWtDOzs7OztJQUNsQyxtREFBeUI7Ozs7O0lBQ3pCLDREQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgRGVmYXVsdExvZ2luTWdyLCBMb2dpbkluZm8sIEFQUEVycm9yLCBOdW1iZXJVdGlscywgQXBwUm91dGVyIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9kYXNoYm9hcmQtc2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2dyZXNzU2VydmljZSwgVGFnIH0gZnJvbSAnQGFsbGlhbnpTTkQvcHJvZ3Jlc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtcGVyZm9ybWFuY2UtdGVhbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBlcmZvcm1hbmNlVGVhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGRhc2hib2FyZFBlcmZvcm1hbmNlVGVhbTogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICBwdWJsaWMgZGF0YTogYW55ID0gbnVsbDtcbiAgcHVibGljIGlzTG9hZERhdGFGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgbGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcbiAgcHVibGljIHdpbmRvd1dpZHRoOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIF9tb250aGx5UHJvZ3Jlc3NSYXRlO1xuICBwdWJsaWMgdGltZUJhc2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgdXNlclJvbGU6IHN0cmluZztcblxuICBwdWJsaWMgU2hvd01vbnRobHlQcm9ncmVzc1JhdGVBcnI6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyBTaG93TW9udGhseVByb2dyZXNzUmF0ZUJhckFycjogQXJyYXk8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dpbk1ncjogRGVmYXVsdExvZ2luTWdyLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IEFwcFJvdXRlcixcbiAgICBwcml2YXRlIHByb2dyZXNzU2VydmljZTogUHJvZ3Jlc3NTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBsb2dpbkluZm8gPSBhd2FpdCB0aGlzLmxvZ2luTWdyLmdldExvZ2luSW5mbygpLnBpcGUodGFrZSgxKSkudG9Qcm9taXNlKCk7XG5cbiAgICAgIHRoaXMubG9naW5NZ3IuZ2V0TG9naW5JbmZvKCkuc3Vic2NyaWJlKChpbmZvOiBMb2dpbkluZm8pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrIHBlcm1pc3Npb24gc3Vic2NyaWJlOicsIGluZm8pO1xuICAgICAgICBpZiAoaW5mbylcbiAgICAgICAgICB0aGlzLnVzZXJSb2xlID0gaW5mby5BcHBVc2VNb2RlWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldCBBcHBVc2VNb2Rl77yaXCIsIHRoaXMudXNlclJvbGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmRhdGEgPSBhd2FpdCB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0UGVyZm9ybWFuY2VEYXRhKFwiVFwiLCB0aGlzLnVzZXJSb2xlKS50b1Byb21pc2UoKTtcbiAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAvLyB0aGlzLmlzTG9hZERhdGFGaW5pc2ggPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLnRpbWVCYXNlVGl0bGUgPSB0aGlzLmRhdGEudGltZUJhc2VUaXRsZTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLnRpbWVCYXNlVGl0bGVcIiwgdGhpcy50aW1lQmFzZVRpdGxlKTtcbiAgICAgICAgLy8gdGhpcy5kYXRhLmRhdGFzLmZvckVhY2goKHZhbCxrZXkpID0+IHtcbiAgICAgICAgLy8gICBsZXQgTW9udGhseVByb2dyZXNzUmF0ZSA9IHZhbFtcIk1vbnRobHlQcm9ncmVzc0N1cnJlbnRcIl0gLyB2YWxbXCJNb250aGx5UHJvZ3Jlc3NUb3RhbFwiXTtcbiAgICAgICAgLy8gICB2YWxbXCJNb250aGx5UHJvZ3Jlc3NSYXRlXCJdID0gdGhpcy5jb252ZXJ0TnVtYmVyRGlnaXRhbChNb250aGx5UHJvZ3Jlc3NSYXRlLCAyKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdGhpcy5pc0xvYWREYXRhRmluaXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lQmFzZVRpdGxlID0gdGhpcy5kYXRhLnRpbWVCYXNlVGl0bGU7XG5cbiAgICAgICAgdGhpcy5TaG93TW9udGhseVByb2dyZXNzUmF0ZUFyciA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIHRoaXMuU2hvd01vbnRobHlQcm9ncmVzc1JhdGVCYXJBcnIgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIHRoaXMudGltZUJhc2VUaXRsZVwiLCB0aGlzLnRpbWVCYXNlVGl0bGUpO1xuICAgICAgICB0aGlzLmRhdGEuZGF0YXMuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcblxuICAgICAgICAgIGxldCBNb250aGx5UHJvZ3Jlc3NSYXRlID0gdGhpcy5nZXRSYXRlKHZhbFtcIk1vbnRobHlQcm9ncmVzc0N1cnJlbnRcIl0sIHZhbFtcIk1vbnRobHlQcm9ncmVzc1RvdGFsXCJdKTtcbiAgICAgICAgICB2YWxbXCJNb250aGx5UHJvZ3Jlc3NSYXRlXCJdID0gdGhpcy5jb252ZXJ0TnVtYmVyRGlnaXRhbChNb250aGx5UHJvZ3Jlc3NSYXRlLCAyKTtcbiAgICAgICAgICBsZXQgcGMgPSB0aGlzLmdldFBlcmNlbnRhZ2UodmFsW1wiTW9udGhseVByb2dyZXNzUmF0ZVwiXSk7XG5cbiAgICAgICAgICBsZXQgbW9udGhseU51bWVyYXRvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKHZhbFtcIk1vbnRobHlQcm9ncmVzc0N1cnJlbnRcIl0pO1xuICAgICAgICAgIGxldCBtb250aGx5RGVub21pbmF0b3IgPSB0aGlzLmNvbnZlcnRUb051bWJlcih2YWxbXCJNb250aGx5UHJvZ3Jlc3NUb3RhbFwiXSk7XG5cbiAgICAgICAgICAvL2xldCBwY2IgPSB0aGlzLmdldFBlcmNlbnRhZ2VCYXIoTW9udGhseVByb2dyZXNzUmF0ZSk7XG5cbiAgICAgICAgICBsZXQgcGNiID0gdGhpcy5nZXRNb250aGx5QmFyTGVuZ3RoKG1vbnRobHlOdW1lcmF0b3IsIG1vbnRobHlEZW5vbWluYXRvciwgMS41LCAxNTApO1xuICAgICAgICAgIHRoaXMuU2hvd01vbnRobHlQcm9ncmVzc1JhdGVBcnIucHVzaChwYyk7XG4gICAgICAgICAgdGhpcy5TaG93TW9udGhseVByb2dyZXNzUmF0ZUJhckFyci5wdXNoKHBjYik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcignRjAwNjAwJywgJ0Rhc2hib2FyZFBlcmZvcm1hbmNlVGVhbSBpbml0IGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFJhdGUoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xuICAgIGlmIChhID09IC0xIHx8ICFOdW1iZXJVdGlscy5pc051bWJlcihhKSkgcmV0dXJuIC0xO1xuICAgIGlmIChiID09IC0xIHx8ICFOdW1iZXJVdGlscy5pc051bWJlcihiKSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiBhIC8gYjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGVyY2VudGFnZShhOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChhID09IC0xIHx8ICFOdW1iZXJVdGlscy5pc051bWJlcihhKSkgcmV0dXJuIFwiLS1cIjtcbiAgICByZXR1cm4gKGEgKiAxMDApLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBlcmNlbnRhZ2VCYXIoYTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoYSA9PSAtMSB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIoYSkpIHJldHVybiBcIjBcIjtcbiAgICByZXR1cm4gKGEpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb051bWJlcihzdHI6c3RyaW5nKTpudW1iZXIge1xuICAgIGxldCBjb252ZXJ0ID0gTnVtYmVyKHN0cik7XG5cbiAgICBpZihjb252ZXJ0ID09IE5hTikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBcbiAgICBlbHNlIGlmKGNvbnZlcnQgPD0gLTEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIGlmKGNvbnZlcnQgPT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnZlcnQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNb250aGx5QmFyTGVuZ3RoKG1vbnRobHlOdW1lcmF0b3I6bnVtYmVyLCBtb250aGx5RGVub21pbmF0b3I6bnVtYmVyLCBtYXhMZW5ndGg6bnVtYmVyLCBtYXhCYXNlOiBudW1iZXIpOnN0cmluZyB7XG5cbiAgICBpZihtb250aGx5TnVtZXJhdG9yID09IDAgfHwgbW9udGhseURlbm9taW5hdG9yID09IDApIHtcbiAgICAgIHJldHVybiBcIjBcIjtcbiAgICB9XG5cbiAgICBsZXQgYW5zID0gTWF0aC5yb3VuZCgobW9udGhseU51bWVyYXRvciAvIG1vbnRobHlEZW5vbWluYXRvcikgKiAxMDApIC8gbWF4QmFzZTtcbiAgICByZXR1cm4gKGFucyA+PSBtYXhMZW5ndGgpID8gbWF4TGVuZ3RoLnRvU3RyaW5nKCkgOiBhbnMudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8v5Zub5o2o5LqU5YWlXG4gIHByaXZhdGUgY29udmVydE51bWJlckRpZ2l0YWwobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChkaWdpdCA9PT0gMClcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSk7XG4gICAgZWxzZSBpZiAoZGlnaXQgPiAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBNYXRoLnBvdygxMCwgZGlnaXQpKSAvIChNYXRoLnBvdygxMCwgZGlnaXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgfVxuXG4gIC8v6L2J5o+b5Y2D5L2N5pW46KGo56S65rOV77yIMDAwLDAwMCwwMDDvvIlcbiAgcHVibGljIGNvbnZlcnROdW1iZXJUaG91c2FuZChudW06IG51bWJlcik6IHN0cmluZyB7XG5cbiAgICBpZiAobnVtIDw9IC0xIHx8ICFOdW1iZXJVdGlscy5pc051bWJlcihudW0pKSByZXR1cm4gXCItLVwiO1xuXG4gICAgdmFyIG51bVN0cmluZyA9IG51bS50b1N0cmluZygpO1xuICAgIHZhciBwYXR0ZXJuID0gLygtP1xcZCspKFxcZHszfSkvO1xuXG4gICAgd2hpbGUgKHBhdHRlcm4udGVzdChudW1TdHJpbmcpKSB7XG4gICAgICBudW1TdHJpbmcgPSBudW1TdHJpbmcucmVwbGFjZShwYXR0ZXJuLCBcIiQxLCQyXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbnVtU3RyaW5nO1xuICB9XG5cbiAgcHVibGljIGdvVG9Qcm9ncmVzcygpIHtcbiAgICBsZXQgdGFnID0gVGFnLlRlYW1UYWc7XG4gICAgdGhpcy5wcm9ncmVzc1NlcnZpY2UuU2V0Q3VycmVudE5hdmlnYXRpb25UYWcodGFnKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcIlByb2dyZXNzXCIpO1xuICB9XG5cbn1cbiJdfQ==