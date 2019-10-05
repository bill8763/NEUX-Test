/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, ErrorHandler } from '@angular/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { Language, APPError, NumberUtils, AppRouter } from '@allianzSND/core';
import { ProgressService, Tag } from '@allianzSND/progress';
var DashboardPerformancePersonalComponent = /** @class */ (function () {
    function DashboardPerformancePersonalComponent(dashboardService, errorHandler, router, progressService) {
        this.dashboardService = dashboardService;
        this.errorHandler = errorHandler;
        this.router = router;
        this.progressService = progressService;
        this.data = null;
        this.language = new Language();
        this.windowWidth = null;
        //public ShowMonthlyProgressRate: string = "--";
        // public ShowMonthlyProgressRateBar: string = "0";
        //public ShowActivitiesPoints: string = "--";
        //activity 
        this.ShowCurrentActivityPoints = "--";
        this.ShowCurrentActivityPointsBar = "0";
        this.ShowCurrentMonthlyProgressRate = "--";
        this.ShowCurrentMonthlyProgressBar = "0";
        this.ShowCurrentMonthlyProgress = "--";
        this.ShowCurrentMonthlyTotal = "--";
        this.init();
    }
    /**
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.windowSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = window.innerWidth;
        return (width > 1023) ? true : false;
    };
    /**
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
        this.windowSize();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowSize();
    };
    /**
     * @private
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, totalPoints, limitPoints, monthlyNumerator, monthlyDenominator, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dashboardService.getPerformanceData("P").toPromise()];
                    case 1:
                        _a.data = _b.sent();
                        console.debug("test i got this shit: ", this.data);
                        totalPoints = this.convertToNumber(this.data["ActivitiesPoints"]);
                        limitPoints = this.convertToNumber(this.data["ActivitiesPointsTotal"]);
                        monthlyNumerator = this.convertToNumber(this.data["MonthlyProgressCurrent"]);
                        monthlyDenominator = this.convertToNumber(this.data["MonthlyProgressTotal"]);
                        //get activity points
                        this.ShowCurrentActivityPoints = (this.data["ActivitiesPoints"] <= -1) ? "--" : this.data["ActivitiesPoints"];
                        this.ShowCurrentActivityPointsBar = this.getActivityCircleBar(totalPoints, limitPoints, 1);
                        console.debug("ans111: ", this.ShowCurrentActivityPointsBar);
                        //get monthly points
                        this.ShowCurrentMonthlyProgress = (this.data["MonthlyProgressCurrent"] <= -1) ? "--" : this.data["MonthlyProgressCurrent"];
                        this.ShowCurrentMonthlyTotal = (this.data["MonthlyProgressTotal"] <= -1) ? "--" : this.data["MonthlyProgressTotal"];
                        //monthly percentage x%
                        this.ShowCurrentMonthlyProgressRate = this.getMonthlyPercentage(monthlyNumerator, monthlyDenominator);
                        console.debug("ans222: ", this.ShowCurrentMonthlyProgressRate);
                        //month bar length
                        this.ShowCurrentMonthlyProgressBar = this.getMonthlyBarLength(monthlyNumerator, monthlyDenominator, 1.5, 150);
                        console.debug("ans333: ", this.ShowCurrentMonthlyProgressBar);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00601', 'DashboardPerformancePersonal init fail!' + error_1.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.convertToNumber = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var convert = Number(str);
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
    };
    /**
     * @private
     * @param {?} totalPoints
     * @param {?} limitPoints
     * @param {?} maxLength
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.getActivityCircleBar = /**
     * @private
     * @param {?} totalPoints
     * @param {?} limitPoints
     * @param {?} maxLength
     * @return {?}
     */
    function (totalPoints, limitPoints, maxLength) {
        if (totalPoints == 0 || limitPoints == 0) {
            return "0";
        }
        /** @type {?} */
        var ans = (totalPoints / limitPoints);
        if (ans >= maxLength) {
            return maxLength.toString();
        }
        else {
            return ans.toString();
        }
    };
    /**
     * @private
     * @param {?} monthlyNumerator
     * @param {?} monthlyDenominator
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.getMonthlyPercentage = /**
     * @private
     * @param {?} monthlyNumerator
     * @param {?} monthlyDenominator
     * @return {?}
     */
    function (monthlyNumerator, monthlyDenominator) {
        if (monthlyNumerator == 0 || monthlyDenominator == 0) {
            return "0";
        }
        /** @type {?} */
        var ans = (monthlyNumerator / monthlyDenominator) * 100;
        /** @type {?} */
        var percentage = Math.round(ans);
        return percentage.toString();
    };
    /**
     * @private
     * @param {?} monthlyNumerator
     * @param {?} monthlyDenominator
     * @param {?} maxLength
     * @param {?} maxBase
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.getMonthlyBarLength = /**
     * @private
     * @param {?} monthlyNumerator
     * @param {?} monthlyDenominator
     * @param {?} maxLength
     * @param {?} maxBase
     * @return {?}
     */
    function (monthlyNumerator, monthlyDenominator, maxLength, maxBase) {
        if (monthlyNumerator == 0 || monthlyDenominator == 0) {
            return "0";
        }
        /** @type {?} */
        var ans = Math.round((monthlyNumerator / monthlyDenominator) * 100) / maxBase;
        return (ans >= maxLength) ? maxLength.toString() : ans.toString();
    };
    /**
     * @private
     * @param {?} sum
     * @param {?} max
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.getRate = /**
     * @private
     * @param {?} sum
     * @param {?} max
     * @return {?}
     */
    function (sum, max) {
        if (sum <= 0 || !NumberUtils.isNumber(sum))
            return 0;
        if (max <= 0 || !NumberUtils.isNumber(max))
            return 0;
        return (sum / max);
    };
    //四捨五入  
    //四捨五入  
    /**
     * @private
     * @param {?} num
     * @param {?} digit
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.convertNumberDigital = 
    //四捨五入  
    /**
     * @private
     * @param {?} num
     * @param {?} digit
     * @return {?}
     */
    function (num, digit) {
        if (digit === 0)
            return Math.round(num);
        else if (digit > 0) {
            return Math.round(num * Math.pow(10, digit)) / (Math.pow(10, digit));
        }
        else {
            return num;
        }
    };
    //轉換千位數表示法（000,000,000）
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.convertNumberThousand = 
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
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
    };
    /**
     * @return {?}
     */
    DashboardPerformancePersonalComponent.prototype.goToProgress = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tag = Tag.PersonalTag;
        this.progressService.SetCurrentNavigationTag(tag);
        this.router.navigate("Progress");
    };
    DashboardPerformancePersonalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-dashboard-performance-personal',
                    template: "<div class=\"dashboard-performance-personsal\">\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block card-pos-center msg-wd-sm\">\n    <ng-container infoContent>\n      <div class=\"card-block\">\n        <div class=\"card_title\">{{language.activitiesPoints | translate}}</div>\n        <!-- chart -->\n        <app-ui-progress-circle class=\"chart-block\" [value]=\"ShowCurrentActivityPointsBar\" [sizeR]=\"windowSize()? 51.5:65\"\n                                [sizeStroke]=\"5\" *ngIf= \"data\">\n          <div class=\"chart-content\">\n            <div class=\"progress-total-value font-size_h4\">{{ ShowCurrentActivityPoints | numberFormat }}</div><!-- {{data.ActivitiesPoints}} -->\n            <div class=\"progress-total-unit\">{{language.homeToday | translate}}</div>\n          </div>\n        </app-ui-progress-circle>\n        <!-- end of chart -->\n        <div class=\"link-wrapper\">\n          <app-ui-link Action action=\"DashboardPerformanceGoToProgress\" (actionClick)=\"goToProgress()\">\n            <ng-container textType=\"linktext\">{{language.homeDetails | translate}}</ng-container>\n          </app-ui-link>\n        </div>\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block msg-wd-md\">\n    <ng-container infoContent>\n      <div class=\"card-block\" *ngIf=\"data\">\n        <div class=\"card_title\">{{language.monthlyProgress | translate}}</div>\n\n        <!-- progress bar -->\n        <div class=\"progressbar-main-block\">\n          <!-- top num -->\n          <div class=\"num-block\">\n            <div class=\"num-title\">{{language.homeFYFC | translate}}</div>\n            <div class=\"num-value font-size_h2\">{{ ShowCurrentMonthlyProgressRate | numberFormat:0 }}\n            <span class=\"num-unit\">%</span></div>\n            <!-- <div class=\"num-value font-size_h2\">{{data.MonthlyProgressRate*100}}</div> -->\n          </div>\n          <!-- end of top num -->\n          <!-- progress group -->\n          <div class=\"pregress-group-block\">\n            <!-- progress -->\n            <div class=\"progressbar-block\"><!-- ShowCurrentMonthlyProgressBar -->\n              <app-ui-progress [isTextTop]=\"false\" [styleSize]=\"'lg'\" [value]=\"ShowCurrentMonthlyProgressBar\"\n                [flagValue]=\"0.6667\" [flagText]=\"'100%'\">\n              </app-ui-progress>\n            </div>\n            <!-- end of progreww -->\n            <!-- btm value -->\n            <div class=\"value-block\">\n              <div class=\"value-detail-block\">\n                <div class=\"side-value left-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ ShowCurrentMonthlyProgress | numberFormat }}</span>\n                </div>\n                <div class=\"mid-value\">/</div>\n                <div class=\"side-value right-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ ShowCurrentMonthlyTotal | numberFormat }}</span>\n                </div>\n              </div>\n            </div>\n            <!-- end of btm value -->\n          </div>\n          <!-- end of progress group -->\n        </div>\n        <!-- end of progress bar -->\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n</div>",
                    styles: [":host{width:100%}.msg-progress-block{width:100%}.msg-progress-block .card-block{padding:20px}.msg-progress-block .card_title{font-size:1rem;font-weight:700;color:#414141;padding-bottom:20px}.msg-progress-block ::ng-deep .card-content-btn{width:100%}.msg-progress-block ::ng-deep .btn-block{margin-top:30px;margin-bottom:10px}.msg-progress-block .link-wrapper{margin-top:25px;text-align:center}.msg-progress-block.card-pos-center .card-block{text-align:center}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .chart-block{color:#007ab3;text-align:center;padding:0 13px}:host ::ng-deep .chart-block .progress-total-value{font-weight:700;display:block;margin-bottom:8px;color:#003781}:host ::ng-deep .chart-block .progress-total-unit{font-size:.875rem;font-weight:700;color:#767676}.progressbar-main-block{display:flex;align-items:flex-end}.progressbar-main-block+.progressbar-main-block{margin-top:15px}.progressbar-main-block .num-block{color:#007ab3;display:flex;align-items:baseline;padding-bottom:10px;flex-wrap:wrap;width:120px;flex-grow:0}.progressbar-main-block .num-block .num-title{font-size:1.25rem;line-height:28px;font-weight:700;width:100%;display:block}.progressbar-main-block .num-block .num-unit{font-size:1.25rem;line-height:28px;font-weight:700}.progressbar-main-block .num-block .num-value{display:inline-block;padding:0 5px 0 0;text-align:center;font-weight:700}.progressbar-main-block .pregress-group-block{width:calc(100% - 120px);flex-grow:0;flex-shrink:0;display:inline-block;justify-content:flex-end}.progressbar-main-block .value-block{text-align:right;padding-top:10px}.progressbar-main-block .value-block .value-detail-block{display:flex;line-height:28px;justify-content:flex-end}.progressbar-main-block .value-block .value-detail-block .side-value{font-size:1.25rem;font-weight:700}.progressbar-main-block .value-block .value-detail-block .side-value.left-value{color:#007ab3}.progressbar-main-block .value-block .value-detail-block .mid-value{font-size:1.25rem;font-weight:700;margin:0 5px}@media (max-width:1023px){.progressbar-main-block{display:block}.progressbar-main-block .num-block{width:100%;align-items:center}.progressbar-main-block .num-block .num-title{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.progressbar-main-block .num-block .num-value{margin-left:10px}.progressbar-main-block .pregress-group-block{width:100%}}.dashboard-performance-personsal{display:flex;width:100%}.msg-card-block.msg-wd-sm{display:flex;width:33.62%;padding-right:15px}.msg-card-block.msg-wd-sm .card-content-btn{width:100%}.msg-card-block.msg-wd-md{display:flex;width:calc(100% - 33.62%)}.msg-card-block.msg-wd-md .card-content-btn{width:100%}@media (max-width:1023px){.dashboard-performance-personsal{display:block}.msg-card-block.msg-wd-sm{width:100%;padding-right:0;margin-bottom:20px}.msg-card-block.msg-wd-md{width:100%}}.dashboard-performance-personsal .progressbar-main-block{flex-wrap:wrap}.dashboard-performance-personsal .progressbar-main-block .num-block{width:100%;flex-wrap:nowrap;text-align:left;justify-content:flex-start}.dashboard-performance-personsal .progressbar-main-block .num-block .num-title{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.dashboard-performance-personsal .progressbar-main-block .num-block .num-value{margin-left:10px}.dashboard-performance-personsal .progressbar-main-block .pregress-group-block{width:100%}"]
                }] }
    ];
    DashboardPerformancePersonalComponent.ctorParameters = function () { return [
        { type: DashboardService },
        { type: ErrorHandler },
        { type: AppRouter },
        { type: ProgressService }
    ]; };
    DashboardPerformancePersonalComponent.propDecorators = {
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return DashboardPerformancePersonalComponent;
}());
export { DashboardPerformancePersonalComponent };
if (false) {
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.data;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.language;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.windowWidth;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.ShowCurrentActivityPoints;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.ShowCurrentActivityPointsBar;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.ShowCurrentMonthlyProgressRate;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.ShowCurrentMonthlyProgressBar;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.ShowCurrentMonthlyProgress;
    /** @type {?} */
    DashboardPerformancePersonalComponent.prototype.ShowCurrentMonthlyTotal;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformancePersonalComponent.prototype.dashboardService;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformancePersonalComponent.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformancePersonalComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformancePersonalComponent.prototype.progressService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXBlcnNvbmFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS1wZXJzb25hbC9kYXNoYm9hcmQtcGVyZm9ybWFuY2UtcGVyc29uYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTVEO0lBeUJFLCtDQUNVLGdCQUFrQyxFQUNsQyxZQUEwQixFQUUxQixNQUFpQixFQUNqQixlQUFnQztRQUpoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRTFCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdEJuQyxTQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBQ2xDLGdEQUFnRDtRQUNqRCxtREFBbUQ7UUFDbEQsNkNBQTZDO1FBRzdDLFdBQVc7UUFDSiw4QkFBeUIsR0FBVyxJQUFJLENBQUM7UUFDekMsaUNBQTRCLEdBQVcsR0FBRyxDQUFDO1FBRTNDLG1DQUE4QixHQUFXLElBQUksQ0FBQztRQUM5QyxrQ0FBNkIsR0FBVyxHQUFHLENBQUM7UUFD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Qyw0NEdBQThEOztpQkFFL0Q7OztnQkFUUSxnQkFBZ0I7Z0JBRGlCLFlBQVk7Z0JBRVosU0FBUztnQkFFMUMsZUFBZTs7OzJCQStDckIsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUEySjNDLDRDQUFDO0NBQUEsQUF4TUQsSUF3TUM7U0FsTVkscUNBQXFDOzs7SUFFaEQscURBQXdCOztJQUN4Qix5REFBaUM7O0lBQ2pDLDREQUFrQzs7SUFPbEMsMEVBQWdEOztJQUNoRCw2RUFBa0Q7O0lBRWxELCtFQUFxRDs7SUFDckQsOEVBQW1EOztJQUNuRCwyRUFBaUQ7O0lBQ2pELHdFQUE4Qzs7Ozs7SUFHNUMsaUVBQTBDOzs7OztJQUMxQyw2REFBa0M7Ozs7O0lBRWxDLHVEQUF5Qjs7Ozs7SUFDekIsZ0VBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9kYXNoYm9hcmQtc2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlLCBBUFBFcnJvciwgTnVtYmVyVXRpbHMsIEFwcFJvdXRlciB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2dyZXNzU2VydmljZSwgVGFnIH0gZnJvbSAnQGFsbGlhbnpTTkQvcHJvZ3Jlc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXBlcnNvbmFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS1wZXJzb25hbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS1wZXJzb25hbC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkUGVyZm9ybWFuY2VQZXJzb25hbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGRhdGE6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBsYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgd2luZG93V2lkdGg6IG51bWJlciA9IG51bGw7XG4gIC8vcHVibGljIFNob3dNb250aGx5UHJvZ3Jlc3NSYXRlOiBzdHJpbmcgPSBcIi0tXCI7XG4gLy8gcHVibGljIFNob3dNb250aGx5UHJvZ3Jlc3NSYXRlQmFyOiBzdHJpbmcgPSBcIjBcIjtcbiAgLy9wdWJsaWMgU2hvd0FjdGl2aXRpZXNQb2ludHM6IHN0cmluZyA9IFwiLS1cIjtcblxuXG4gIC8vYWN0aXZpdHkgXG4gIHB1YmxpYyBTaG93Q3VycmVudEFjdGl2aXR5UG9pbnRzOiBzdHJpbmcgPSBcIi0tXCI7XG4gIHB1YmxpYyBTaG93Q3VycmVudEFjdGl2aXR5UG9pbnRzQmFyOiBzdHJpbmcgPSBcIjBcIjtcblxuICBwdWJsaWMgU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3NSYXRlOiBzdHJpbmcgPSBcIi0tXCI7XG4gIHB1YmxpYyBTaG93Q3VycmVudE1vbnRobHlQcm9ncmVzc0Jhcjogc3RyaW5nID0gXCIwXCI7XG4gIHB1YmxpYyBTaG93Q3VycmVudE1vbnRobHlQcm9ncmVzczogc3RyaW5nID0gXCItLVwiO1xuICBwdWJsaWMgU2hvd0N1cnJlbnRNb250aGx5VG90YWw6IHN0cmluZyA9IFwiLS1cIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICAvLyBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBBcHBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBwcm9ncmVzc1NlcnZpY2U6IFByb2dyZXNzU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICB3aW5kb3dTaXplKCkge1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJldHVybiAod2lkdGggPiAxMDIzKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLndpbmRvd1NpemUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMud2luZG93U2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmRhdGEgPSBhd2FpdCB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0UGVyZm9ybWFuY2VEYXRhKFwiUFwiKS50b1Byb21pc2UoKTtcblxuICAgICAgY29uc29sZS5kZWJ1ZyhcInRlc3QgaSBnb3QgdGhpcyBzaGl0OiBcIiwgdGhpcy5kYXRhKTtcblxuICAgICAgbGV0IHRvdGFsUG9pbnRzID0gdGhpcy5jb252ZXJ0VG9OdW1iZXIodGhpcy5kYXRhW1wiQWN0aXZpdGllc1BvaW50c1wiXSk7XG4gICAgICBsZXQgbGltaXRQb2ludHMgPSB0aGlzLmNvbnZlcnRUb051bWJlcih0aGlzLmRhdGFbXCJBY3Rpdml0aWVzUG9pbnRzVG90YWxcIl0pO1xuXG4gICAgICBsZXQgbW9udGhseU51bWVyYXRvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKHRoaXMuZGF0YVtcIk1vbnRobHlQcm9ncmVzc0N1cnJlbnRcIl0pO1xuICAgICAgbGV0IG1vbnRobHlEZW5vbWluYXRvciA9IHRoaXMuY29udmVydFRvTnVtYmVyKHRoaXMuZGF0YVtcIk1vbnRobHlQcm9ncmVzc1RvdGFsXCJdKTtcblxuICAgICAgLy9nZXQgYWN0aXZpdHkgcG9pbnRzXG4gICAgICB0aGlzLlNob3dDdXJyZW50QWN0aXZpdHlQb2ludHMgPSAodGhpcy5kYXRhW1wiQWN0aXZpdGllc1BvaW50c1wiXSA8PSAtMSkgPyBcIi0tXCIgOiB0aGlzLmRhdGFbXCJBY3Rpdml0aWVzUG9pbnRzXCJdO1xuICAgICAgdGhpcy5TaG93Q3VycmVudEFjdGl2aXR5UG9pbnRzQmFyID0gdGhpcy5nZXRBY3Rpdml0eUNpcmNsZUJhcih0b3RhbFBvaW50cywgbGltaXRQb2ludHMsIDEpO1xuXG4gICAgICBjb25zb2xlLmRlYnVnKFwiYW5zMTExOiBcIiwgdGhpcy5TaG93Q3VycmVudEFjdGl2aXR5UG9pbnRzQmFyKTtcblxuICAgICAgLy9nZXQgbW9udGhseSBwb2ludHNcbiAgICAgIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3MgPSAodGhpcy5kYXRhW1wiTW9udGhseVByb2dyZXNzQ3VycmVudFwiXSA8PSAtMSkgPyBcIi0tXCIgOiB0aGlzLmRhdGFbXCJNb250aGx5UHJvZ3Jlc3NDdXJyZW50XCJdO1xuICAgICAgdGhpcy5TaG93Q3VycmVudE1vbnRobHlUb3RhbCA9ICh0aGlzLmRhdGFbXCJNb250aGx5UHJvZ3Jlc3NUb3RhbFwiXSA8PSAtMSkgPyBcIi0tXCIgOiB0aGlzLmRhdGFbXCJNb250aGx5UHJvZ3Jlc3NUb3RhbFwiXTtcblxuICAgICAgLy9tb250aGx5IHBlcmNlbnRhZ2UgeCVcbiAgICAgIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3NSYXRlID0gdGhpcy5nZXRNb250aGx5UGVyY2VudGFnZShtb250aGx5TnVtZXJhdG9yLCBtb250aGx5RGVub21pbmF0b3IpO1xuICAgICAgY29uc29sZS5kZWJ1ZyhcImFuczIyMjogXCIsIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3NSYXRlKTtcbiAgICAgIFxuICAgICAgLy9tb250aCBiYXIgbGVuZ3RoXG4gICAgICB0aGlzLlNob3dDdXJyZW50TW9udGhseVByb2dyZXNzQmFyID0gdGhpcy5nZXRNb250aGx5QmFyTGVuZ3RoKG1vbnRobHlOdW1lcmF0b3IsIG1vbnRobHlEZW5vbWluYXRvciwgMS41LCAxNTApO1xuICAgICAgY29uc29sZS5kZWJ1ZyhcImFuczMzMzogXCIsIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3NCYXIpO1xuXG4gICAgICAvLyAvL2FjdGl2aXR5IHBvaW50cyBhbmQgY2lyY2xlIGJhciBcbiAgICAgIC8vIHRoaXMuU2hvd0N1cnJlbnRBY3Rpdml0eVBvaW50cyA9ICh0aGlzLmRhdGFbXCJBY3Rpdml0aWVzUG9pbnRzXCJdIDw9IC0xKSA/IFwiLS1cIiA6IHRoaXMuZGF0YVtcIkFjdGl2aXRpZXNQb2ludHNcIl07XG4gICAgICAvLyB0aGlzLlNob3dDdXJyZW50QWN0aXZpdHlQb2ludHNCYXIgPSB0aGlzLmdldFJhdGUodGhpcy5kYXRhW1wiQWN0aXZpdGllc1BvaW50c1wiXSwgdGhpcy5kYXRhW1wiQWN0aXZpdGllc1BvaW50c1RvdGFsXCJdKS50b1N0cmluZygpO1xuXG4gICAgICAvLyBsZXQgYmFyID0gdGhpcy5nZXRSYXRlKHRoaXMuZGF0YVtcIkFjdGl2aXRpZXNQb2ludHNcIl0sIHRoaXMuZGF0YVtcIkFjdGl2aXRpZXNQb2ludHNUb3RhbFwiXSk7XG4gICAgICAvLyB0aGlzLlNob3dDdXJyZW50QWN0aXZpdHlQb2ludHNCYXIgPSAoYmFyID49IDEpID8gXCIxXCIgOiBiYXIudG9GaXhlZCgyKTtcblxuICAgICAgLy8gbGV0IHJhdGUgPSB0aGlzLmdldFJhdGUodGhpcy5kYXRhW1wiTW9udGhseVByb2dyZXNzQ3VycmVudFwiXSwgdGhpcy5kYXRhW1wiTW9udGhseVByb2dyZXNzVG90YWxcIl0pO1xuICAgICAgLy8gbGV0IHBlcmNlbnRhZ2UgPSAocmF0ZSAqIDEwMCk7XG4gICAgICAvLyBsZXQgbW9udGhseVJhdGUgPSB0aGlzLmNvbnZlcnROdW1iZXJEaWdpdGFsKHBlcmNlbnRhZ2UsIDIpO1xuXG4gICAgICAvLyB0aGlzLlNob3dDdXJyZW50TW9udGhseVByb2dyZXNzUmF0ZSA9IG1vbnRobHlSYXRlLnRvU3RyaW5nKCk7XG4gICAgICAvLyB0aGlzLlNob3dDdXJyZW50TW9udGhseVByb2dyZXNzQmFyID0gKG1vbnRobHlSYXRlID49IDEpID8gXCIxXCIgOiBtb250aGx5UmF0ZS50b1N0cmluZygpO1xuXG4gICAgICAvLyBsZXQgbXA6IG51bWJlciA9IHRoaXMuZGF0YVtcIk1vbnRobHlQcm9ncmVzc0N1cnJlbnRcIl07XG4gICAgICAvLyBsZXQgbXQ6IG51bWJlciA9IHRoaXMuZGF0YVtcIk1vbnRobHlQcm9ncmVzc1RvdGFsXCJdO1xuICAgICAgLy8gdGhpcy5TaG93Q3VycmVudE1vbnRobHlQcm9ncmVzcyA9IHRoaXMuY29udmVydE51bWJlclRob3VzYW5kKG1wKTtcbiAgICAgIC8vIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5VG90YWwgPSB0aGlzLmNvbnZlcnROdW1iZXJUaG91c2FuZChtdCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKCdGMDA2MDEnLCAnRGFzaGJvYXJkUGVyZm9ybWFuY2VQZXJzb25hbCBpbml0IGZhaWwhJyArIGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgY29udmVydFRvTnVtYmVyKHN0cjpzdHJpbmcpOm51bWJlciB7XG4gICAgbGV0IGNvbnZlcnQgPSBOdW1iZXIoc3RyKTtcblxuICAgIGlmKGNvbnZlcnQgPT0gTmFOKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IFxuICAgIGVsc2UgaWYoY29udmVydCA8PSAtMSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGVsc2UgaWYoY29udmVydCA9PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gY29udmVydDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2aXR5Q2lyY2xlQmFyKHRvdGFsUG9pbnRzOm51bWJlciwgbGltaXRQb2ludHM6bnVtYmVyLCBtYXhMZW5ndGg6bnVtYmVyKTpzdHJpbmcge1xuICAgIFxuICAgIGlmKHRvdGFsUG9pbnRzID09IDAgfHwgbGltaXRQb2ludHMgPT0gMCkge1xuICAgICAgcmV0dXJuIFwiMFwiO1xuICAgIH1cblxuICAgIGxldCBhbnMgPSAodG90YWxQb2ludHMgLyBsaW1pdFBvaW50cyk7XG4gICAgaWYoYW5zID49IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuIG1heExlbmd0aC50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBhbnMudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE1vbnRobHlQZXJjZW50YWdlKG1vbnRobHlOdW1lcmF0b3I6bnVtYmVyLCBtb250aGx5RGVub21pbmF0b3I6bnVtYmVyKTpzdHJpbmcge1xuICAgIGlmKG1vbnRobHlOdW1lcmF0b3IgPT0gMCB8fCBtb250aGx5RGVub21pbmF0b3IgPT0gMCkge1xuICAgICAgcmV0dXJuIFwiMFwiO1xuICAgIH1cblxuICAgIGxldCBhbnMgPSAobW9udGhseU51bWVyYXRvciAvIG1vbnRobHlEZW5vbWluYXRvcikgKiAxMDA7XG4gICAgbGV0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKGFucyk7XG4gICAgcmV0dXJuIHBlcmNlbnRhZ2UudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TW9udGhseUJhckxlbmd0aChtb250aGx5TnVtZXJhdG9yOm51bWJlciwgbW9udGhseURlbm9taW5hdG9yOm51bWJlciwgbWF4TGVuZ3RoOm51bWJlciwgbWF4QmFzZTogbnVtYmVyKTpzdHJpbmcge1xuXG4gICAgaWYobW9udGhseU51bWVyYXRvciA9PSAwIHx8IG1vbnRobHlEZW5vbWluYXRvciA9PSAwKSB7XG4gICAgICByZXR1cm4gXCIwXCI7XG4gICAgfVxuXG4gICAgbGV0IGFucyA9IE1hdGgucm91bmQoKG1vbnRobHlOdW1lcmF0b3IgLyBtb250aGx5RGVub21pbmF0b3IpICogMTAwKSAvIG1heEJhc2U7XG4gICAgcmV0dXJuIChhbnMgPj0gbWF4TGVuZ3RoKSA/IG1heExlbmd0aC50b1N0cmluZygpIDogYW5zLnRvU3RyaW5nKCk7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBnZXRSYXRlKHN1bTogYW55LCBtYXg6IGFueSk6IG51bWJlciB7XG4gICAgaWYgKHN1bSA8PSAwIHx8ICFOdW1iZXJVdGlscy5pc051bWJlcihzdW0pKSByZXR1cm4gMDtcbiAgICBpZiAobWF4IDw9IDAgfHwgIU51bWJlclV0aWxzLmlzTnVtYmVyKG1heCkpIHJldHVybiAwO1xuXG4gICAgcmV0dXJuIChzdW0gLyBtYXgpO1xuICB9XG5cbiAgLy/lm5vmjajkupTlhaUgIFxuICBwcml2YXRlIGNvbnZlcnROdW1iZXJEaWdpdGFsKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgIGlmIChkaWdpdCA9PT0gMClcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSk7XG4gICAgZWxzZSBpZiAoZGlnaXQgPiAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBNYXRoLnBvdygxMCwgZGlnaXQpKSAvIChNYXRoLnBvdygxMCwgZGlnaXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgfVxuXG5cbiAgLy/ovYnmj5vljYPkvY3mlbjooajnpLrms5XvvIgwMDAsMDAwLDAwMO+8iVxuICBwdWJsaWMgY29udmVydE51bWJlclRob3VzYW5kKG51bTogbnVtYmVyKTogc3RyaW5nIHtcblxuICAgIGlmIChudW0gPD0gLTEgfHwgIU51bWJlclV0aWxzLmlzTnVtYmVyKG51bSkpIHJldHVybiBcIi0tXCI7XG5cbiAgICB2YXIgbnVtU3RyaW5nID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgdmFyIHBhdHRlcm4gPSAvKC0/XFxkKykoXFxkezN9KS87XG5cbiAgICB3aGlsZSAocGF0dGVybi50ZXN0KG51bVN0cmluZykpIHtcbiAgICAgIG51bVN0cmluZyA9IG51bVN0cmluZy5yZXBsYWNlKHBhdHRlcm4sIFwiJDEsJDJcIik7XG4gICAgfVxuICAgIHJldHVybiBudW1TdHJpbmc7XG4gIH1cblxuICBwdWJsaWMgZ29Ub1Byb2dyZXNzKCkge1xuICAgIGxldCB0YWcgPSBUYWcuUGVyc29uYWxUYWc7XG4gICAgdGhpcy5wcm9ncmVzc1NlcnZpY2UuU2V0Q3VycmVudE5hdmlnYXRpb25UYWcodGFnKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcIlByb2dyZXNzXCIpO1xuICB9XG5cbn1cbiJdfQ==