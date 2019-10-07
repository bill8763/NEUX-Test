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
var DashboardPerformanceTeamComponent = /** @class */ (function () {
    function DashboardPerformanceTeamComponent(dashboardService, loginMgr, errorHandler, router, progressService) {
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
    DashboardPerformanceTeamComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
    };
    /**
     * @private
     * @return {?}
     */
    DashboardPerformanceTeamComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loginInfo, _a, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.loginMgr.getLoginInfo().pipe(take(1)).toPromise()];
                    case 1:
                        loginInfo = _b.sent();
                        this.loginMgr.getLoginInfo().subscribe((/**
                         * @param {?} info
                         * @return {?}
                         */
                        function (info) {
                            console.log('check permission subscribe:', info);
                            if (info)
                                _this.userRole = info.AppUseMode[0];
                            console.log("get AppUseMode：", _this.userRole);
                        }));
                        _a = this;
                        return [4 /*yield*/, this.dashboardService.getPerformanceData("T", this.userRole).toPromise()];
                    case 2:
                        _a.data = _b.sent();
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
                            function (val, key) {
                                /** @type {?} */
                                var MonthlyProgressRate = _this.getRate(val["MonthlyProgressCurrent"], val["MonthlyProgressTotal"]);
                                val["MonthlyProgressRate"] = _this.convertNumberDigital(MonthlyProgressRate, 2);
                                /** @type {?} */
                                var pc = _this.getPercentage(val["MonthlyProgressRate"]);
                                /** @type {?} */
                                var monthlyNumerator = _this.convertToNumber(val["MonthlyProgressCurrent"]);
                                /** @type {?} */
                                var monthlyDenominator = _this.convertToNumber(val["MonthlyProgressTotal"]);
                                //let pcb = this.getPercentageBar(MonthlyProgressRate);
                                /** @type {?} */
                                var pcb = _this.getMonthlyBarLength(monthlyNumerator, monthlyDenominator, 1.5, 150);
                                _this.ShowMonthlyProgressRateArr.push(pc);
                                _this.ShowMonthlyProgressRateBarArr.push(pcb);
                            }));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.errorHandler.handleError(new APPError('F00600', 'DashboardPerformanceTeam init fail!' + error_1.message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DashboardPerformanceTeamComponent.prototype.getRate = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a == -1 || !NumberUtils.isNumber(a))
            return -1;
        if (b == -1 || !NumberUtils.isNumber(b))
            return -1;
        return a / b;
    };
    /**
     * @private
     * @param {?} a
     * @return {?}
     */
    DashboardPerformanceTeamComponent.prototype.getPercentage = /**
     * @private
     * @param {?} a
     * @return {?}
     */
    function (a) {
        if (a == -1 || !NumberUtils.isNumber(a))
            return "--";
        return (a * 100).toString();
    };
    /**
     * @private
     * @param {?} a
     * @return {?}
     */
    DashboardPerformanceTeamComponent.prototype.getPercentageBar = /**
     * @private
     * @param {?} a
     * @return {?}
     */
    function (a) {
        if (a == -1 || !NumberUtils.isNumber(a))
            return "0";
        return (a).toString();
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    DashboardPerformanceTeamComponent.prototype.convertToNumber = /**
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
     * @param {?} monthlyNumerator
     * @param {?} monthlyDenominator
     * @param {?} maxLength
     * @param {?} maxBase
     * @return {?}
     */
    DashboardPerformanceTeamComponent.prototype.getMonthlyBarLength = /**
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
    //四捨五入
    //四捨五入
    /**
     * @private
     * @param {?} num
     * @param {?} digit
     * @return {?}
     */
    DashboardPerformanceTeamComponent.prototype.convertNumberDigital = 
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
    DashboardPerformanceTeamComponent.prototype.convertNumberThousand = 
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
    DashboardPerformanceTeamComponent.prototype.goToProgress = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tag = Tag.TeamTag;
        this.progressService.SetCurrentNavigationTag(tag);
        this.router.navigate("Progress");
    };
    DashboardPerformanceTeamComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-dashboard-performance-team',
                    template: "<div class=\"dashboard-performance-team\">\n  <app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-progress-block\">\n    <ng-container infoContent>\n      <div class=\"card-block\">\n        <div class=\"card_title\" *ngIf=\"timeBaseTitle=='monthly'\">{{language.monthlyProgress | translate}}</div>\n        <div class=\"card_title\" *ngIf=\"timeBaseTitle=='yearly'\">{{language.yearlyProgress | translate}}</div>\n\n        <!-- progress bar -->\n        <ng-container *ngIf=\"isLoadDataFinish\">\n        <div class=\"progressbar-main-block\" *ngFor=\"let team of data.datas; let i = index\" >\n          <!-- top num -->\n          <div class=\"num-block\">\n            <div class=\"num-title\">{{team.title | translate}}</div>\n            <div class=\"font-size_h2 num-value\">{{ShowMonthlyProgressRateArr[i] | numberFormat:0 }}\n            <span class=\"num-unit\">%</span></div>\n            <!-- <div class=\"font-size_h2 num-value\">{{team.MonthlyProgressRate*100}}</div> -->\n          </div>\n          <!-- end of top num -->\n          <!-- progress group --> \n          <div class=\"pregress-group-block\">\n            <!-- progress -->\n            <div class=\"progressbar-block\"> <!-- team.MonthlyProgressRate -->\n              <app-ui-progress [isTextTop]=\"false\" [styleSize]=\"'lg'\" [value]=\"ShowMonthlyProgressRateBarArr[i]\" [flagValue]=\"0.6667\"\n                [flagText]=\"'100%'\"></app-ui-progress>\n            </div>\n            <!-- end of progreww -->\n            <!-- btm value -->\n            <div class=\"value-block\">\n              <div class=\"value-detail-block\">\n                <div class=\"side-value left-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ team.MonthlyProgressCurrent | numberFormat }}</span>\n                </div>\n                <div class=\"mid-value\">/</div>\n                <div class=\"side-value right-value\">\n                  <!-- <span class=\"value-unit\">$</span> -->\n                  <span class=\"value-num\">{{ team.MonthlyProgressTotal | numberFormat }}</span>\n                </div>\n              </div>\n            </div>\n            <!-- end of btm value -->\n          </div>\n          <!-- end of progress group -->\n        </div>\n        </ng-container>\n        <!-- end of progress bar -->\n        <!-- <app-ui-btn-layout>\n          <app-ui-btn [btnHeight]=\"'sm'\" [btnHeight]=\"'md'\">\n            <ng-container TextType=\"cust\">{{language.detail | translate}}</ng-container>\n          </app-ui-btn>\n        </app-ui-btn-layout> -->\n        <div class=\"link-wrapper\">\n          <app-ui-link Action action=\"DashboardPerformanceGoToProgress\" (actionClick)=\"goToProgress()\">\n            <ng-container textType=\"linktext\">{{language.homeDetails | translate}}</ng-container>\n          </app-ui-link>\n        </div>\n\n      </div>\n    </ng-container>\n  </app-ui-card-content-btn>\n</div>\n",
                    styles: [":host{width:100%}.msg-progress-block{width:100%}.msg-progress-block .card-block{padding:20px}.msg-progress-block .card_title{font-size:1rem;font-weight:700;color:#414141;padding-bottom:20px}.msg-progress-block ::ng-deep .card-content-btn{width:100%}.msg-progress-block ::ng-deep .btn-block{margin-top:30px;margin-bottom:10px}.msg-progress-block .link-wrapper{margin-top:25px;text-align:center}.msg-progress-block.card-pos-center .card-block{text-align:center}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .chart-block{color:#007ab3;text-align:center;padding:0 13px}:host ::ng-deep .chart-block .progress-total-value{font-weight:700;display:block;margin-bottom:8px;color:#003781}:host ::ng-deep .chart-block .progress-total-unit{font-size:.875rem;font-weight:700;color:#767676}.progressbar-main-block{display:flex;align-items:flex-end}.progressbar-main-block+.progressbar-main-block{margin-top:15px}.progressbar-main-block .num-block{color:#007ab3;display:flex;align-items:baseline;padding-bottom:10px;flex-wrap:wrap;width:120px;flex-grow:0}.progressbar-main-block .num-block .num-title{font-size:1.25rem;line-height:28px;font-weight:700;width:100%;display:block}.progressbar-main-block .num-block .num-unit{font-size:1.25rem;line-height:28px;font-weight:700}.progressbar-main-block .num-block .num-value{display:inline-block;padding:0 5px 0 0;text-align:center;font-weight:700}.progressbar-main-block .pregress-group-block{width:calc(100% - 120px);flex-grow:0;flex-shrink:0;display:inline-block;justify-content:flex-end}.progressbar-main-block .value-block{text-align:right;padding-top:10px}.progressbar-main-block .value-block .value-detail-block{display:flex;line-height:28px;justify-content:flex-end}.progressbar-main-block .value-block .value-detail-block .side-value{font-size:1.25rem;font-weight:700}.progressbar-main-block .value-block .value-detail-block .side-value.left-value{color:#007ab3}.progressbar-main-block .value-block .value-detail-block .mid-value{font-size:1.25rem;font-weight:700;margin:0 5px}@media (max-width:1023px){.progressbar-main-block{display:block}.progressbar-main-block .num-block{width:100%;align-items:center}.progressbar-main-block .num-block .num-title{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.progressbar-main-block .num-block .num-value{margin-left:10px}.progressbar-main-block .pregress-group-block{width:100%}}"]
                }] }
    ];
    DashboardPerformanceTeamComponent.ctorParameters = function () { return [
        { type: DashboardService },
        { type: DefaultLoginMgr },
        { type: ErrorHandler },
        { type: AppRouter },
        { type: ProgressService }
    ]; };
    return DashboardPerformanceTeamComponent;
}());
export { DashboardPerformanceTeamComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0vZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFhLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1RDtJQW9CRSwyQ0FDVSxnQkFBa0MsRUFDbEMsUUFBeUIsRUFDekIsWUFBMEIsRUFDMUIsTUFBaUIsRUFDakIsZUFBZ0M7UUFKaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWxCbkMsNkJBQXdCLEdBQWtCLEVBQUUsQ0FBQztRQUM3QyxTQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyxhQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFXLElBQUksQ0FBQztRQWVoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsb0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBQ2EsZ0RBQUk7Ozs7SUFBbEI7Ozs7Ozs7O3dCQUVvQixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXhFLFNBQVMsR0FBRyxTQUE0RDt3QkFFNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7O3dCQUFDLFVBQUMsSUFBZTs0QkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQzs0QkFDakQsSUFBSSxJQUFJO2dDQUNOLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ2hELENBQUMsRUFBQyxDQUFDO3dCQUNILEtBQUEsSUFBSSxDQUFBO3dCQUFRLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBMUYsR0FBSyxJQUFJLEdBQUcsU0FBOEUsQ0FBQzt3QkFDM0YsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTs0QkFDckIsZ0NBQWdDOzRCQUNoQyxnREFBZ0Q7NEJBRWhELDBEQUEwRDs0QkFDMUQseUNBQXlDOzRCQUN6QywyRkFBMkY7NEJBQzNGLG9GQUFvRjs0QkFDcEYsTUFBTTs0QkFFTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDOzRCQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOzRCQUU3QyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQzs0QkFDdEQsSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7NEJBRXpELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7Ozs0QkFBQyxVQUFDLEdBQUcsRUFBRSxHQUFHOztvQ0FFM0IsbUJBQW1CLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQ0FDbEcsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDOztvQ0FDM0UsRUFBRSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7O29DQUVuRCxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOztvQ0FDdEUsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7O29DQUl0RSxHQUFHLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0NBQ2xGLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQ3pDLEtBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQy9DLENBQUMsRUFBQyxDQUFDO3lCQUVKOzs7O3dCQUVELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxxQ0FBcUMsR0FBRyxPQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRWhIOzs7Ozs7O0lBRU8sbURBQU87Ozs7OztJQUFmLFVBQWdCLENBQU0sRUFBRSxDQUFNO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLHlEQUFhOzs7OztJQUFyQixVQUFzQixDQUFNO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNyRCxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVPLDREQUFnQjs7Ozs7SUFBeEIsVUFBeUIsQ0FBTTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDcEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVPLDJEQUFlOzs7OztJQUF2QixVQUF3QixHQUFVOztZQUM1QixPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUV6QixJQUFHLE9BQU8sSUFBSSxHQUFHLEVBQUU7WUFDakIsT0FBTyxDQUFDLENBQUM7U0FDVjthQUNJLElBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7YUFDSSxJQUFHLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUM7U0FDVjthQUNJO1lBQ0gsT0FBTyxPQUFPLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7Ozs7Ozs7SUFFTywrREFBbUI7Ozs7Ozs7O0lBQTNCLFVBQTRCLGdCQUF1QixFQUFFLGtCQUF5QixFQUFFLFNBQWdCLEVBQUUsT0FBZTtRQUUvRyxJQUFHLGdCQUFnQixJQUFJLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLEVBQUU7WUFDbkQsT0FBTyxHQUFHLENBQUM7U0FDWjs7WUFFRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTztRQUM3RSxPQUFPLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRUQsTUFBTTs7Ozs7Ozs7SUFDRSxnRUFBb0I7Ozs7Ozs7O0lBQTVCLFVBQTZCLEdBQVcsRUFBRSxLQUFhO1FBQ3JELElBQUksS0FBSyxLQUFLLENBQUM7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFDSTtZQUNILE9BQU8sR0FBRyxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBRUQsdUJBQXVCOzs7Ozs7SUFDaEIsaUVBQXFCOzs7Ozs7SUFBNUIsVUFBNkIsR0FBVztRQUV0QyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBRXJELFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFOztZQUMxQixPQUFPLEdBQUcsZ0JBQWdCO1FBRTlCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU0sd0RBQVk7OztJQUFuQjs7WUFDTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU87UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkE1SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLGk5RkFBMEQ7O2lCQUUzRDs7O2dCQVBRLGdCQUFnQjtnQkFETixlQUFlO2dCQUZOLFlBQVk7Z0JBRThCLFNBQVM7Z0JBRXRFLGVBQWU7O0lBZ0t4Qix3Q0FBQztDQUFBLEFBOUpELElBOEpDO1NBekpZLGlDQUFpQzs7O0lBRTVDLHFFQUFvRDs7SUFDcEQsaURBQXdCOztJQUN4Qiw2REFBeUM7O0lBRXpDLHFEQUFpQzs7SUFDakMsd0RBQWtDOzs7OztJQUNsQyxpRUFBNkI7O0lBQzdCLDBEQUE2Qjs7SUFDN0IscURBQXdCOztJQUV4Qix1RUFBaUQ7O0lBQ2pELDBFQUFvRDs7Ozs7SUFHbEQsNkRBQTBDOzs7OztJQUMxQyxxREFBaUM7Ozs7O0lBQ2pDLHlEQUFrQzs7Ozs7SUFDbEMsbURBQXlCOzs7OztJQUN6Qiw0REFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UsIERlZmF1bHRMb2dpbk1nciwgTG9naW5JbmZvLCBBUFBFcnJvciwgTnVtYmVyVXRpbHMsIEFwcFJvdXRlciB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZGFzaGJvYXJkLXNlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9ncmVzc1NlcnZpY2UsIFRhZyB9IGZyb20gJ0BhbGxpYW56U05EL3Byb2dyZXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLWRhc2hib2FyZC1wZXJmb3JtYW5jZS10ZWFtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS10ZWFtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLXBlcmZvcm1hbmNlLXRlYW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQZXJmb3JtYW5jZVRlYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBkYXNoYm9hcmRQZXJmb3JtYW5jZVRlYW06IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgcHVibGljIGRhdGE6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBpc0xvYWREYXRhRmluaXNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGxhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBfbW9udGhseVByb2dyZXNzUmF0ZTtcbiAgcHVibGljIHRpbWVCYXNlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHVzZXJSb2xlOiBzdHJpbmc7XG5cbiAgcHVibGljIFNob3dNb250aGx5UHJvZ3Jlc3NSYXRlQXJyOiBBcnJheTxzdHJpbmc+O1xuICBwdWJsaWMgU2hvd01vbnRobHlQcm9ncmVzc1JhdGVCYXJBcnI6IEFycmF5PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9naW5NZ3I6IERlZmF1bHRMb2dpbk1ncixcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBBcHBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBwcm9ncmVzc1NlcnZpY2U6IFByb2dyZXNzU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cbiAgcHJpdmF0ZSBhc3luYyBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbG9naW5JbmZvID0gYXdhaXQgdGhpcy5sb2dpbk1nci5nZXRMb2dpbkluZm8oKS5waXBlKHRha2UoMSkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICB0aGlzLmxvZ2luTWdyLmdldExvZ2luSW5mbygpLnN1YnNjcmliZSgoaW5mbzogTG9naW5JbmZvKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBwZXJtaXNzaW9uIHN1YnNjcmliZTonLCBpbmZvKTtcbiAgICAgICAgaWYgKGluZm8pXG4gICAgICAgICAgdGhpcy51c2VyUm9sZSA9IGluZm8uQXBwVXNlTW9kZVswXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgQXBwVXNlTW9kZe+8mlwiLCB0aGlzLnVzZXJSb2xlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kYXRhID0gYXdhaXQgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmdldFBlcmZvcm1hbmNlRGF0YShcIlRcIiwgdGhpcy51c2VyUm9sZSkudG9Qcm9taXNlKCk7XG4gICAgICBpZiAodGhpcy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgLy8gdGhpcy5pc0xvYWREYXRhRmluaXNoID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy50aW1lQmFzZVRpdGxlID0gdGhpcy5kYXRhLnRpbWVCYXNlVGl0bGU7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy50aW1lQmFzZVRpdGxlXCIsIHRoaXMudGltZUJhc2VUaXRsZSk7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5kYXRhcy5mb3JFYWNoKCh2YWwsa2V5KSA9PiB7XG4gICAgICAgIC8vICAgbGV0IE1vbnRobHlQcm9ncmVzc1JhdGUgPSB2YWxbXCJNb250aGx5UHJvZ3Jlc3NDdXJyZW50XCJdIC8gdmFsW1wiTW9udGhseVByb2dyZXNzVG90YWxcIl07XG4gICAgICAgIC8vICAgdmFsW1wiTW9udGhseVByb2dyZXNzUmF0ZVwiXSA9IHRoaXMuY29udmVydE51bWJlckRpZ2l0YWwoTW9udGhseVByb2dyZXNzUmF0ZSwgMik7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHRoaXMuaXNMb2FkRGF0YUZpbmlzaCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZUJhc2VUaXRsZSA9IHRoaXMuZGF0YS50aW1lQmFzZVRpdGxlO1xuXG4gICAgICAgIHRoaXMuU2hvd01vbnRobHlQcm9ncmVzc1JhdGVBcnIgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICB0aGlzLlNob3dNb250aGx5UHJvZ3Jlc3NSYXRlQmFyQXJyID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIiB0aGlzLnRpbWVCYXNlVGl0bGVcIiwgdGhpcy50aW1lQmFzZVRpdGxlKTtcbiAgICAgICAgdGhpcy5kYXRhLmRhdGFzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG5cbiAgICAgICAgICBsZXQgTW9udGhseVByb2dyZXNzUmF0ZSA9IHRoaXMuZ2V0UmF0ZSh2YWxbXCJNb250aGx5UHJvZ3Jlc3NDdXJyZW50XCJdLCB2YWxbXCJNb250aGx5UHJvZ3Jlc3NUb3RhbFwiXSk7XG4gICAgICAgICAgdmFsW1wiTW9udGhseVByb2dyZXNzUmF0ZVwiXSA9IHRoaXMuY29udmVydE51bWJlckRpZ2l0YWwoTW9udGhseVByb2dyZXNzUmF0ZSwgMik7XG4gICAgICAgICAgbGV0IHBjID0gdGhpcy5nZXRQZXJjZW50YWdlKHZhbFtcIk1vbnRobHlQcm9ncmVzc1JhdGVcIl0pO1xuXG4gICAgICAgICAgbGV0IG1vbnRobHlOdW1lcmF0b3IgPSB0aGlzLmNvbnZlcnRUb051bWJlcih2YWxbXCJNb250aGx5UHJvZ3Jlc3NDdXJyZW50XCJdKTtcbiAgICAgICAgICBsZXQgbW9udGhseURlbm9taW5hdG9yID0gdGhpcy5jb252ZXJ0VG9OdW1iZXIodmFsW1wiTW9udGhseVByb2dyZXNzVG90YWxcIl0pO1xuXG4gICAgICAgICAgLy9sZXQgcGNiID0gdGhpcy5nZXRQZXJjZW50YWdlQmFyKE1vbnRobHlQcm9ncmVzc1JhdGUpO1xuXG4gICAgICAgICAgbGV0IHBjYiA9IHRoaXMuZ2V0TW9udGhseUJhckxlbmd0aChtb250aGx5TnVtZXJhdG9yLCBtb250aGx5RGVub21pbmF0b3IsIDEuNSwgMTUwKTtcbiAgICAgICAgICB0aGlzLlNob3dNb250aGx5UHJvZ3Jlc3NSYXRlQXJyLnB1c2gocGMpO1xuICAgICAgICAgIHRoaXMuU2hvd01vbnRobHlQcm9ncmVzc1JhdGVCYXJBcnIucHVzaChwY2IpO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoJ0YwMDYwMCcsICdEYXNoYm9hcmRQZXJmb3JtYW5jZVRlYW0gaW5pdCBmYWlsIScgKyBlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYXRlKGE6IGFueSwgYjogYW55KTogbnVtYmVyIHtcbiAgICBpZiAoYSA9PSAtMSB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIoYSkpIHJldHVybiAtMTtcbiAgICBpZiAoYiA9PSAtMSB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIoYikpIHJldHVybiAtMTtcbiAgICByZXR1cm4gYSAvIGI7XG4gIH1cblxuICBwcml2YXRlIGdldFBlcmNlbnRhZ2UoYTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoYSA9PSAtMSB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIoYSkpIHJldHVybiBcIi0tXCI7XG4gICAgcmV0dXJuIChhICogMTAwKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQZXJjZW50YWdlQmFyKGE6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKGEgPT0gLTEgfHwgIU51bWJlclV0aWxzLmlzTnVtYmVyKGEpKSByZXR1cm4gXCIwXCI7XG4gICAgcmV0dXJuIChhKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9OdW1iZXIoc3RyOnN0cmluZyk6bnVtYmVyIHtcbiAgICBsZXQgY29udmVydCA9IE51bWJlcihzdHIpO1xuXG4gICAgaWYoY29udmVydCA9PSBOYU4pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gXG4gICAgZWxzZSBpZihjb252ZXJ0IDw9IC0xKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSBpZihjb252ZXJ0ID09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBjb252ZXJ0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TW9udGhseUJhckxlbmd0aChtb250aGx5TnVtZXJhdG9yOm51bWJlciwgbW9udGhseURlbm9taW5hdG9yOm51bWJlciwgbWF4TGVuZ3RoOm51bWJlciwgbWF4QmFzZTogbnVtYmVyKTpzdHJpbmcge1xuXG4gICAgaWYobW9udGhseU51bWVyYXRvciA9PSAwIHx8IG1vbnRobHlEZW5vbWluYXRvciA9PSAwKSB7XG4gICAgICByZXR1cm4gXCIwXCI7XG4gICAgfVxuXG4gICAgbGV0IGFucyA9IE1hdGgucm91bmQoKG1vbnRobHlOdW1lcmF0b3IgLyBtb250aGx5RGVub21pbmF0b3IpICogMTAwKSAvIG1heEJhc2U7XG4gICAgcmV0dXJuIChhbnMgPj0gbWF4TGVuZ3RoKSA/IG1heExlbmd0aC50b1N0cmluZygpIDogYW5zLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvL+Wbm+aNqOS6lOWFpVxuICBwcml2YXRlIGNvbnZlcnROdW1iZXJEaWdpdGFsKG51bTogbnVtYmVyLCBkaWdpdDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoZGlnaXQgPT09IDApXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChudW0pO1xuICAgIGVsc2UgaWYgKGRpZ2l0ID4gMCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogTWF0aC5wb3coMTAsIGRpZ2l0KSkgLyAoTWF0aC5wb3coMTAsIGRpZ2l0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gIH1cblxuICAvL+i9ieaPm+WNg+S9jeaVuOihqOekuuazle+8iDAwMCwwMDAsMDAw77yJXG4gIHB1YmxpYyBjb252ZXJ0TnVtYmVyVGhvdXNhbmQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuXG4gICAgaWYgKG51bSA8PSAtMSB8fCAhTnVtYmVyVXRpbHMuaXNOdW1iZXIobnVtKSkgcmV0dXJuIFwiLS1cIjtcblxuICAgIHZhciBudW1TdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcbiAgICB2YXIgcGF0dGVybiA9IC8oLT9cXGQrKShcXGR7M30pLztcblxuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3QobnVtU3RyaW5nKSkge1xuICAgICAgbnVtU3RyaW5nID0gbnVtU3RyaW5nLnJlcGxhY2UocGF0dGVybiwgXCIkMSwkMlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bVN0cmluZztcbiAgfVxuXG4gIHB1YmxpYyBnb1RvUHJvZ3Jlc3MoKSB7XG4gICAgbGV0IHRhZyA9IFRhZy5UZWFtVGFnO1xuICAgIHRoaXMucHJvZ3Jlc3NTZXJ2aWNlLlNldEN1cnJlbnROYXZpZ2F0aW9uVGFnKHRhZyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXCJQcm9ncmVzc1wiKTtcbiAgfVxuXG59XG4iXX0=