/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, ErrorHandler } from '@angular/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { Language, APPError, NumberUtils, AppRouter } from '@allianzSND/core';
import { ProgressService, Tag } from '@allianzSND/progress';
export class DashboardPerformancePersonalComponent {
    /**
     * @param {?} dashboardService
     * @param {?} errorHandler
     * @param {?} router
     * @param {?} progressService
     */
    constructor(dashboardService, errorHandler, router, progressService) {
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
    windowSize() {
        /** @type {?} */
        let width = window.innerWidth;
        return (width > 1023) ? true : false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        this.windowSize();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowSize();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.data = yield this.dashboardService.getPerformanceData("P").toPromise();
                console.debug("test i got this shit: ", this.data);
                /** @type {?} */
                let totalPoints = this.convertToNumber(this.data["ActivitiesPoints"]);
                /** @type {?} */
                let limitPoints = this.convertToNumber(this.data["ActivitiesPointsTotal"]);
                /** @type {?} */
                let monthlyNumerator = this.convertToNumber(this.data["MonthlyProgressCurrent"]);
                /** @type {?} */
                let monthlyDenominator = this.convertToNumber(this.data["MonthlyProgressTotal"]);
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
                // //activity points and circle bar 
                // this.ShowCurrentActivityPoints = (this.data["ActivitiesPoints"] <= -1) ? "--" : this.data["ActivitiesPoints"];
                // this.ShowCurrentActivityPointsBar = this.getRate(this.data["ActivitiesPoints"], this.data["ActivitiesPointsTotal"]).toString();
                // let bar = this.getRate(this.data["ActivitiesPoints"], this.data["ActivitiesPointsTotal"]);
                // this.ShowCurrentActivityPointsBar = (bar >= 1) ? "1" : bar.toFixed(2);
                // let rate = this.getRate(this.data["MonthlyProgressCurrent"], this.data["MonthlyProgressTotal"]);
                // let percentage = (rate * 100);
                // let monthlyRate = this.convertNumberDigital(percentage, 2);
                // this.ShowCurrentMonthlyProgressRate = monthlyRate.toString();
                // this.ShowCurrentMonthlyProgressBar = (monthlyRate >= 1) ? "1" : monthlyRate.toString();
                // let mp: number = this.data["MonthlyProgressCurrent"];
                // let mt: number = this.data["MonthlyProgressTotal"];
                // this.ShowCurrentMonthlyProgress = this.convertNumberThousand(mp);
                // this.ShowCurrentMonthlyTotal = this.convertNumberThousand(mt);
            }
            catch (error) {
                this.errorHandler.handleError(new APPError('F00601', 'DashboardPerformancePersonal init fail!' + error.message));
            }
        });
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
     * @param {?} totalPoints
     * @param {?} limitPoints
     * @param {?} maxLength
     * @return {?}
     */
    getActivityCircleBar(totalPoints, limitPoints, maxLength) {
        if (totalPoints == 0 || limitPoints == 0) {
            return "0";
        }
        /** @type {?} */
        let ans = (totalPoints / limitPoints);
        if (ans >= maxLength) {
            return maxLength.toString();
        }
        else {
            return ans.toString();
        }
    }
    /**
     * @private
     * @param {?} monthlyNumerator
     * @param {?} monthlyDenominator
     * @return {?}
     */
    getMonthlyPercentage(monthlyNumerator, monthlyDenominator) {
        if (monthlyNumerator == 0 || monthlyDenominator == 0) {
            return "0";
        }
        /** @type {?} */
        let ans = (monthlyNumerator / monthlyDenominator) * 100;
        /** @type {?} */
        let percentage = Math.round(ans);
        return percentage.toString();
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
    /**
     * @private
     * @param {?} sum
     * @param {?} max
     * @return {?}
     */
    getRate(sum, max) {
        if (sum <= 0 || !NumberUtils.isNumber(sum))
            return 0;
        if (max <= 0 || !NumberUtils.isNumber(max))
            return 0;
        return (sum / max);
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
        let tag = Tag.PersonalTag;
        this.progressService.SetCurrentNavigationTag(tag);
        this.router.navigate("Progress");
    }
}
DashboardPerformancePersonalComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-dashboard-performance-personal',
                template: "<div class=\"dashboard-performance-personsal\">\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block card-pos-center msg-wd-sm\">\n    <ng-container infoContent>\n      <div class=\"card-block\">\n        <div class=\"card_title\">{{language.activitiesPoints | translate}}</div>\n        <!-- chart -->\n        <app-ui-progress-circle class=\"chart-block\" [value]=\"ShowCurrentActivityPointsBar\" [sizeR]=\"windowSize()? 51.5:65\"\n                                [sizeStroke]=\"5\" *ngIf= \"data\">\n          <div class=\"chart-content\">\n            <div class=\"progress-total-value font-size_h4\">{{ ShowCurrentActivityPoints | numberFormat }}</div><!-- {{data.ActivitiesPoints}} -->\n            <div class=\"progress-total-unit\">{{language.homeToday | translate}}</div>\n          </div>\n        </app-ui-progress-circle>\n        <!-- end of chart -->\n        <div class=\"link-wrapper\">\n          <app-ui-link Action action=\"DashboardPerformanceGoToProgress\" (actionClick)=\"goToProgress()\">\n            <ng-container textType=\"linktext\">{{language.homeDetails | translate}}</ng-container>\n          </app-ui-link>\n        </div>\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block msg-wd-md\">\n    <ng-container infoContent>\n      <div class=\"card-block\" *ngIf=\"data\">\n        <div class=\"card_title\">{{language.monthlyProgress | translate}}</div>\n\n        <!-- progress bar -->\n        <div class=\"progressbar-main-block\">\n          <!-- top num -->\n          <div class=\"num-block\">\n            <div class=\"num-title\">{{language.homeFYFC | translate}}</div>\n            <div class=\"num-value font-size_h2\">{{ ShowCurrentMonthlyProgressRate | numberFormat:0 }}\n            <span class=\"num-unit\">%</span></div>\n            <!-- <div class=\"num-value font-size_h2\">{{data.MonthlyProgressRate*100}}</div> -->\n          </div>\n          <!-- end of top num -->\n          <!-- progress group -->\n          <div class=\"pregress-group-block\">\n            <!-- progress -->\n            <div class=\"progressbar-block\"><!-- ShowCurrentMonthlyProgressBar -->\n              <app-ui-progress [isTextTop]=\"false\" [styleSize]=\"'lg'\" [value]=\"ShowCurrentMonthlyProgressBar\"\n                [flagValue]=\"0.6667\" [flagText]=\"'100%'\">\n              </app-ui-progress>\n            </div>\n            <!-- end of progreww -->\n            <!-- btm value -->\n            <div class=\"value-block\">\n              <div class=\"value-detail-block\">\n                <div class=\"side-value left-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ ShowCurrentMonthlyProgress | numberFormat }}</span>\n                </div>\n                <div class=\"mid-value\">/</div>\n                <div class=\"side-value right-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ ShowCurrentMonthlyTotal | numberFormat }}</span>\n                </div>\n              </div>\n            </div>\n            <!-- end of btm value -->\n          </div>\n          <!-- end of progress group -->\n        </div>\n        <!-- end of progress bar -->\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n</div>",
                styles: [":host{width:100%}.msg-progress-block{width:100%}.msg-progress-block .card-block{padding:20px}.msg-progress-block .card_title{font-size:1rem;font-weight:700;color:#414141;padding-bottom:20px}.msg-progress-block ::ng-deep .card-content-btn{width:100%}.msg-progress-block ::ng-deep .btn-block{margin-top:30px;margin-bottom:10px}.msg-progress-block .link-wrapper{margin-top:25px;text-align:center}.msg-progress-block.card-pos-center .card-block{text-align:center}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .chart-block{color:#007ab3;text-align:center;padding:0 13px}:host ::ng-deep .chart-block .progress-total-value{font-weight:700;display:block;margin-bottom:8px;color:#003781}:host ::ng-deep .chart-block .progress-total-unit{font-size:.875rem;font-weight:700;color:#767676}.progressbar-main-block{display:flex;align-items:flex-end}.progressbar-main-block+.progressbar-main-block{margin-top:15px}.progressbar-main-block .num-block{color:#007ab3;display:flex;align-items:baseline;padding-bottom:10px;flex-wrap:wrap;width:120px;flex-grow:0}.progressbar-main-block .num-block .num-title{font-size:1.25rem;line-height:28px;font-weight:700;width:100%;display:block}.progressbar-main-block .num-block .num-unit{font-size:1.25rem;line-height:28px;font-weight:700}.progressbar-main-block .num-block .num-value{display:inline-block;padding:0 5px 0 0;text-align:center;font-weight:700}.progressbar-main-block .pregress-group-block{width:calc(100% - 120px);flex-grow:0;flex-shrink:0;display:inline-block;justify-content:flex-end}.progressbar-main-block .value-block{text-align:right;padding-top:10px}.progressbar-main-block .value-block .value-detail-block{display:flex;line-height:28px;justify-content:flex-end}.progressbar-main-block .value-block .value-detail-block .side-value{font-size:1.25rem;font-weight:700}.progressbar-main-block .value-block .value-detail-block .side-value.left-value{color:#007ab3}.progressbar-main-block .value-block .value-detail-block .mid-value{font-size:1.25rem;font-weight:700;margin:0 5px}@media (max-width:1023px){.progressbar-main-block{display:block}.progressbar-main-block .num-block{width:100%;align-items:center}.progressbar-main-block .num-block .num-title{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.progressbar-main-block .num-block .num-value{margin-left:10px}.progressbar-main-block .pregress-group-block{width:100%}}.dashboard-performance-personsal{display:flex;width:100%}.msg-card-block.msg-wd-sm{display:flex;width:33.62%;padding-right:15px}.msg-card-block.msg-wd-sm .card-content-btn{width:100%}.msg-card-block.msg-wd-md{display:flex;width:calc(100% - 33.62%)}.msg-card-block.msg-wd-md .card-content-btn{width:100%}@media (max-width:1023px){.dashboard-performance-personsal{display:block}.msg-card-block.msg-wd-sm{width:100%;padding-right:0;margin-bottom:20px}.msg-card-block.msg-wd-md{width:100%}}.dashboard-performance-personsal .progressbar-main-block{flex-wrap:wrap}.dashboard-performance-personsal .progressbar-main-block .num-block{width:100%;flex-wrap:nowrap;text-align:left;justify-content:flex-start}.dashboard-performance-personsal .progressbar-main-block .num-block .num-title{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.dashboard-performance-personsal .progressbar-main-block .num-block .num-value{margin-left:10px}.dashboard-performance-personsal .progressbar-main-block .pregress-group-block{width:100%}"]
            }] }
];
DashboardPerformancePersonalComponent.ctorParameters = () => [
    { type: DashboardService },
    { type: ErrorHandler },
    { type: AppRouter },
    { type: ProgressService }
];
DashboardPerformancePersonalComponent.propDecorators = {
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXBlcnNvbmFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS1wZXJzb25hbC9kYXNoYm9hcmQtcGVyZm9ybWFuY2UtcGVyc29uYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUTVELE1BQU07Ozs7Ozs7SUFtQkosWUFDVSxnQkFBa0MsRUFDbEMsWUFBMEIsRUFFMUIsTUFBaUIsRUFDakIsZUFBZ0M7UUFKaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUUxQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXRCbkMsU0FBSSxHQUFRLElBQUksQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLElBQUksQ0FBQztRQUNsQyxnREFBZ0Q7UUFDakQsbURBQW1EO1FBQ2xELDZDQUE2QztRQUc3QyxXQUFXO1FBQ0osOEJBQXlCLEdBQVcsSUFBSSxDQUFDO1FBQ3pDLGlDQUE0QixHQUFXLEdBQUcsQ0FBQztRQUUzQyxtQ0FBOEIsR0FBVyxJQUFJLENBQUM7UUFDOUMsa0NBQTZCLEdBQVcsR0FB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Q25DLENBQUM7OztZQXRNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsNDRHQUE4RDs7YUFFL0Q7OztZQVRRLGdCQUFnQjtZQURpQixZQUFZO1lBRVosU0FBUztZQUUxQyxlQUFlOzs7dUJBK0NyQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBckN6QyxxREFBd0I7O0lBQ3hCLHlEQUFpQzs7SUFDakMsNERBQWtDOztJQU9sQywwRUFBZ0Q7O0lBQ2hELDZFQUFrRDs7SUFFbEQsK0VBQXFEOztJQUNyRCw4RUFBbUQ7O0lBQ25ELDJFQUFpRDs7SUFDakQsd0VBQThDOzs7OztJQUc1QyxpRUFBMEM7Ozs7O0lBQzFDLDZEQUFrQzs7Ozs7SUFFbEMsdURBQXlCOzs7OztJQUN6QixnRUFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2Rhc2hib2FyZC1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UsIEFQUEVycm9yLCBOdW1iZXJVdGlscywgQXBwUm91dGVyIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZ3Jlc3NTZXJ2aWNlLCBUYWcgfSBmcm9tICdAYWxsaWFuelNORC9wcm9ncmVzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC1kYXNoYm9hcmQtcGVyZm9ybWFuY2UtcGVyc29uYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXBlcnNvbmFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXBlcnNvbmFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQZXJmb3JtYW5jZVBlcnNvbmFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZGF0YTogYW55ID0gbnVsbDtcbiAgcHVibGljIGxhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyID0gbnVsbDtcbiAgLy9wdWJsaWMgU2hvd01vbnRobHlQcm9ncmVzc1JhdGU6IHN0cmluZyA9IFwiLS1cIjtcbiAvLyBwdWJsaWMgU2hvd01vbnRobHlQcm9ncmVzc1JhdGVCYXI6IHN0cmluZyA9IFwiMFwiO1xuICAvL3B1YmxpYyBTaG93QWN0aXZpdGllc1BvaW50czogc3RyaW5nID0gXCItLVwiO1xuXG5cbiAgLy9hY3Rpdml0eSBcbiAgcHVibGljIFNob3dDdXJyZW50QWN0aXZpdHlQb2ludHM6IHN0cmluZyA9IFwiLS1cIjtcbiAgcHVibGljIFNob3dDdXJyZW50QWN0aXZpdHlQb2ludHNCYXI6IHN0cmluZyA9IFwiMFwiO1xuXG4gIHB1YmxpYyBTaG93Q3VycmVudE1vbnRobHlQcm9ncmVzc1JhdGU6IHN0cmluZyA9IFwiLS1cIjtcbiAgcHVibGljIFNob3dDdXJyZW50TW9udGhseVByb2dyZXNzQmFyOiBzdHJpbmcgPSBcIjBcIjtcbiAgcHVibGljIFNob3dDdXJyZW50TW9udGhseVByb2dyZXNzOiBzdHJpbmcgPSBcIi0tXCI7XG4gIHB1YmxpYyBTaG93Q3VycmVudE1vbnRobHlUb3RhbDogc3RyaW5nID0gXCItLVwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgIC8vIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IEFwcFJvdXRlcixcbiAgICBwcml2YXRlIHByb2dyZXNzU2VydmljZTogUHJvZ3Jlc3NTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHdpbmRvd1NpemUoKSB7XG4gICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgcmV0dXJuICh3aWR0aCA+IDEwMjMpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMud2luZG93U2l6ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy53aW5kb3dTaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZGF0YSA9IGF3YWl0IHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXRQZXJmb3JtYW5jZURhdGEoXCJQXCIpLnRvUHJvbWlzZSgpO1xuXG4gICAgICBjb25zb2xlLmRlYnVnKFwidGVzdCBpIGdvdCB0aGlzIHNoaXQ6IFwiLCB0aGlzLmRhdGEpO1xuXG4gICAgICBsZXQgdG90YWxQb2ludHMgPSB0aGlzLmNvbnZlcnRUb051bWJlcih0aGlzLmRhdGFbXCJBY3Rpdml0aWVzUG9pbnRzXCJdKTtcbiAgICAgIGxldCBsaW1pdFBvaW50cyA9IHRoaXMuY29udmVydFRvTnVtYmVyKHRoaXMuZGF0YVtcIkFjdGl2aXRpZXNQb2ludHNUb3RhbFwiXSk7XG5cbiAgICAgIGxldCBtb250aGx5TnVtZXJhdG9yID0gdGhpcy5jb252ZXJ0VG9OdW1iZXIodGhpcy5kYXRhW1wiTW9udGhseVByb2dyZXNzQ3VycmVudFwiXSk7XG4gICAgICBsZXQgbW9udGhseURlbm9taW5hdG9yID0gdGhpcy5jb252ZXJ0VG9OdW1iZXIodGhpcy5kYXRhW1wiTW9udGhseVByb2dyZXNzVG90YWxcIl0pO1xuXG4gICAgICAvL2dldCBhY3Rpdml0eSBwb2ludHNcbiAgICAgIHRoaXMuU2hvd0N1cnJlbnRBY3Rpdml0eVBvaW50cyA9ICh0aGlzLmRhdGFbXCJBY3Rpdml0aWVzUG9pbnRzXCJdIDw9IC0xKSA/IFwiLS1cIiA6IHRoaXMuZGF0YVtcIkFjdGl2aXRpZXNQb2ludHNcIl07XG4gICAgICB0aGlzLlNob3dDdXJyZW50QWN0aXZpdHlQb2ludHNCYXIgPSB0aGlzLmdldEFjdGl2aXR5Q2lyY2xlQmFyKHRvdGFsUG9pbnRzLCBsaW1pdFBvaW50cywgMSk7XG5cbiAgICAgIGNvbnNvbGUuZGVidWcoXCJhbnMxMTE6IFwiLCB0aGlzLlNob3dDdXJyZW50QWN0aXZpdHlQb2ludHNCYXIpO1xuXG4gICAgICAvL2dldCBtb250aGx5IHBvaW50c1xuICAgICAgdGhpcy5TaG93Q3VycmVudE1vbnRobHlQcm9ncmVzcyA9ICh0aGlzLmRhdGFbXCJNb250aGx5UHJvZ3Jlc3NDdXJyZW50XCJdIDw9IC0xKSA/IFwiLS1cIiA6IHRoaXMuZGF0YVtcIk1vbnRobHlQcm9ncmVzc0N1cnJlbnRcIl07XG4gICAgICB0aGlzLlNob3dDdXJyZW50TW9udGhseVRvdGFsID0gKHRoaXMuZGF0YVtcIk1vbnRobHlQcm9ncmVzc1RvdGFsXCJdIDw9IC0xKSA/IFwiLS1cIiA6IHRoaXMuZGF0YVtcIk1vbnRobHlQcm9ncmVzc1RvdGFsXCJdO1xuXG4gICAgICAvL21vbnRobHkgcGVyY2VudGFnZSB4JVxuICAgICAgdGhpcy5TaG93Q3VycmVudE1vbnRobHlQcm9ncmVzc1JhdGUgPSB0aGlzLmdldE1vbnRobHlQZXJjZW50YWdlKG1vbnRobHlOdW1lcmF0b3IsIG1vbnRobHlEZW5vbWluYXRvcik7XG4gICAgICBjb25zb2xlLmRlYnVnKFwiYW5zMjIyOiBcIiwgdGhpcy5TaG93Q3VycmVudE1vbnRobHlQcm9ncmVzc1JhdGUpO1xuICAgICAgXG4gICAgICAvL21vbnRoIGJhciBsZW5ndGhcbiAgICAgIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3NCYXIgPSB0aGlzLmdldE1vbnRobHlCYXJMZW5ndGgobW9udGhseU51bWVyYXRvciwgbW9udGhseURlbm9taW5hdG9yLCAxLjUsIDE1MCk7XG4gICAgICBjb25zb2xlLmRlYnVnKFwiYW5zMzMzOiBcIiwgdGhpcy5TaG93Q3VycmVudE1vbnRobHlQcm9ncmVzc0Jhcik7XG5cbiAgICAgIC8vIC8vYWN0aXZpdHkgcG9pbnRzIGFuZCBjaXJjbGUgYmFyIFxuICAgICAgLy8gdGhpcy5TaG93Q3VycmVudEFjdGl2aXR5UG9pbnRzID0gKHRoaXMuZGF0YVtcIkFjdGl2aXRpZXNQb2ludHNcIl0gPD0gLTEpID8gXCItLVwiIDogdGhpcy5kYXRhW1wiQWN0aXZpdGllc1BvaW50c1wiXTtcbiAgICAgIC8vIHRoaXMuU2hvd0N1cnJlbnRBY3Rpdml0eVBvaW50c0JhciA9IHRoaXMuZ2V0UmF0ZSh0aGlzLmRhdGFbXCJBY3Rpdml0aWVzUG9pbnRzXCJdLCB0aGlzLmRhdGFbXCJBY3Rpdml0aWVzUG9pbnRzVG90YWxcIl0pLnRvU3RyaW5nKCk7XG5cbiAgICAgIC8vIGxldCBiYXIgPSB0aGlzLmdldFJhdGUodGhpcy5kYXRhW1wiQWN0aXZpdGllc1BvaW50c1wiXSwgdGhpcy5kYXRhW1wiQWN0aXZpdGllc1BvaW50c1RvdGFsXCJdKTtcbiAgICAgIC8vIHRoaXMuU2hvd0N1cnJlbnRBY3Rpdml0eVBvaW50c0JhciA9IChiYXIgPj0gMSkgPyBcIjFcIiA6IGJhci50b0ZpeGVkKDIpO1xuXG4gICAgICAvLyBsZXQgcmF0ZSA9IHRoaXMuZ2V0UmF0ZSh0aGlzLmRhdGFbXCJNb250aGx5UHJvZ3Jlc3NDdXJyZW50XCJdLCB0aGlzLmRhdGFbXCJNb250aGx5UHJvZ3Jlc3NUb3RhbFwiXSk7XG4gICAgICAvLyBsZXQgcGVyY2VudGFnZSA9IChyYXRlICogMTAwKTtcbiAgICAgIC8vIGxldCBtb250aGx5UmF0ZSA9IHRoaXMuY29udmVydE51bWJlckRpZ2l0YWwocGVyY2VudGFnZSwgMik7XG5cbiAgICAgIC8vIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3NSYXRlID0gbW9udGhseVJhdGUudG9TdHJpbmcoKTtcbiAgICAgIC8vIHRoaXMuU2hvd0N1cnJlbnRNb250aGx5UHJvZ3Jlc3NCYXIgPSAobW9udGhseVJhdGUgPj0gMSkgPyBcIjFcIiA6IG1vbnRobHlSYXRlLnRvU3RyaW5nKCk7XG5cbiAgICAgIC8vIGxldCBtcDogbnVtYmVyID0gdGhpcy5kYXRhW1wiTW9udGhseVByb2dyZXNzQ3VycmVudFwiXTtcbiAgICAgIC8vIGxldCBtdDogbnVtYmVyID0gdGhpcy5kYXRhW1wiTW9udGhseVByb2dyZXNzVG90YWxcIl07XG4gICAgICAvLyB0aGlzLlNob3dDdXJyZW50TW9udGhseVByb2dyZXNzID0gdGhpcy5jb252ZXJ0TnVtYmVyVGhvdXNhbmQobXApO1xuICAgICAgLy8gdGhpcy5TaG93Q3VycmVudE1vbnRobHlUb3RhbCA9IHRoaXMuY29udmVydE51bWJlclRob3VzYW5kKG10KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDYwMScsICdEYXNoYm9hcmRQZXJmb3JtYW5jZVBlcnNvbmFsIGluaXQgZmFpbCEnICsgZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9OdW1iZXIoc3RyOnN0cmluZyk6bnVtYmVyIHtcbiAgICBsZXQgY29udmVydCA9IE51bWJlcihzdHIpO1xuXG4gICAgaWYoY29udmVydCA9PSBOYU4pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gXG4gICAgZWxzZSBpZihjb252ZXJ0IDw9IC0xKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSBpZihjb252ZXJ0ID09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBjb252ZXJ0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZpdHlDaXJjbGVCYXIodG90YWxQb2ludHM6bnVtYmVyLCBsaW1pdFBvaW50czpudW1iZXIsIG1heExlbmd0aDpudW1iZXIpOnN0cmluZyB7XG4gICAgXG4gICAgaWYodG90YWxQb2ludHMgPT0gMCB8fCBsaW1pdFBvaW50cyA9PSAwKSB7XG4gICAgICByZXR1cm4gXCIwXCI7XG4gICAgfVxuXG4gICAgbGV0IGFucyA9ICh0b3RhbFBvaW50cyAvIGxpbWl0UG9pbnRzKTtcbiAgICBpZihhbnMgPj0gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbWF4TGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGFucy50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TW9udGhseVBlcmNlbnRhZ2UobW9udGhseU51bWVyYXRvcjpudW1iZXIsIG1vbnRobHlEZW5vbWluYXRvcjpudW1iZXIpOnN0cmluZyB7XG4gICAgaWYobW9udGhseU51bWVyYXRvciA9PSAwIHx8IG1vbnRobHlEZW5vbWluYXRvciA9PSAwKSB7XG4gICAgICByZXR1cm4gXCIwXCI7XG4gICAgfVxuXG4gICAgbGV0IGFucyA9IChtb250aGx5TnVtZXJhdG9yIC8gbW9udGhseURlbm9taW5hdG9yKSAqIDEwMDtcbiAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoYW5zKTtcbiAgICByZXR1cm4gcGVyY2VudGFnZS50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNb250aGx5QmFyTGVuZ3RoKG1vbnRobHlOdW1lcmF0b3I6bnVtYmVyLCBtb250aGx5RGVub21pbmF0b3I6bnVtYmVyLCBtYXhMZW5ndGg6bnVtYmVyLCBtYXhCYXNlOiBudW1iZXIpOnN0cmluZyB7XG5cbiAgICBpZihtb250aGx5TnVtZXJhdG9yID09IDAgfHwgbW9udGhseURlbm9taW5hdG9yID09IDApIHtcbiAgICAgIHJldHVybiBcIjBcIjtcbiAgICB9XG5cbiAgICBsZXQgYW5zID0gTWF0aC5yb3VuZCgobW9udGhseU51bWVyYXRvciAvIG1vbnRobHlEZW5vbWluYXRvcikgKiAxMDApIC8gbWF4QmFzZTtcbiAgICByZXR1cm4gKGFucyA+PSBtYXhMZW5ndGgpID8gbWF4TGVuZ3RoLnRvU3RyaW5nKCkgOiBhbnMudG9TdHJpbmcoKTtcbiAgfVxuXG5cblxuICBwcml2YXRlIGdldFJhdGUoc3VtOiBhbnksIG1heDogYW55KTogbnVtYmVyIHtcbiAgICBpZiAoc3VtIDw9IDAgfHwgIU51bWJlclV0aWxzLmlzTnVtYmVyKHN1bSkpIHJldHVybiAwO1xuICAgIGlmIChtYXggPD0gMCB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIobWF4KSkgcmV0dXJuIDA7XG5cbiAgICByZXR1cm4gKHN1bSAvIG1heCk7XG4gIH1cblxuICAvL+Wbm+aNqOS6lOWFpSAgXG4gIHByaXZhdGUgY29udmVydE51bWJlckRpZ2l0YWwobnVtOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgaWYgKGRpZ2l0ID09PSAwKVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtKTtcbiAgICBlbHNlIGlmIChkaWdpdCA+IDApIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIE1hdGgucG93KDEwLCBkaWdpdCkpIC8gKE1hdGgucG93KDEwLCBkaWdpdCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICB9XG5cblxuICAvL+i9ieaPm+WNg+S9jeaVuOihqOekuuazle+8iDAwMCwwMDAsMDAw77yJXG4gIHB1YmxpYyBjb252ZXJ0TnVtYmVyVGhvdXNhbmQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuXG4gICAgaWYgKG51bSA8PSAtMSB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIobnVtKSkgcmV0dXJuIFwiLS1cIjtcblxuICAgIHZhciBudW1TdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcbiAgICB2YXIgcGF0dGVybiA9IC8oLT9cXGQrKShcXGR7M30pLztcblxuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3QobnVtU3RyaW5nKSkge1xuICAgICAgbnVtU3RyaW5nID0gbnVtU3RyaW5nLnJlcGxhY2UocGF0dGVybiwgXCIkMSwkMlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bVN0cmluZztcbiAgfVxuXG4gIHB1YmxpYyBnb1RvUHJvZ3Jlc3MoKSB7XG4gICAgbGV0IHRhZyA9IFRhZy5QZXJzb25hbFRhZztcbiAgICB0aGlzLnByb2dyZXNzU2VydmljZS5TZXRDdXJyZW50TmF2aWdhdGlvblRhZyh0YWcpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiUHJvZ3Jlc3NcIik7XG4gIH1cblxufVxuIl19