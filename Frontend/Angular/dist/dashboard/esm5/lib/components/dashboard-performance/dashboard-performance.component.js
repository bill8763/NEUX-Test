/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Language, DefaultLoginMgr } from '@allianzSND/core';
import { take } from 'rxjs/operators';
import { CONTENTGAP } from '@allianzSND/ui';
import { ROLE } from '@allianzSND/goal';
// import { CONTENTGAP } from 'projects/ui/src/lib/components/ui-content-b-gap/ui-content-b-gap-enum';
// import { CONTENTGAP } from 'projects/ui/src/public_api';
var DashboardPerformanceComponent = /** @class */ (function () {
    function DashboardPerformanceComponent(loginMgr) {
        this.loginMgr = loginMgr;
        this.GAP_SIZE_20 = CONTENTGAP.GAP20;
        this.role = null;
        this.language = new Language();
        this.tabIndex = 0;
        this.init();
        console.debug("check start ......");
    }
    /**
     * @return {?}
     */
    DashboardPerformanceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    //LEADER  //AG   <--- page
    //LEADER  //AG   <--- page
    /**
     * @private
     * @return {?}
     */
    DashboardPerformanceComponent.prototype.init = 
    //LEADER  //AG   <--- page
    /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loginInfo, identity, agentRole;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginMgr.getLoginInfo().pipe(take(1)).toPromise()];
                    case 1:
                        loginInfo = _a.sent();
                        console.debug("dashboard login info: ", loginInfo);
                        identity = loginInfo.AppUseMode[loginInfo.AppUseMode.length - 1];
                        console.debug("dashboard identity: ", identity);
                        agentRole = this._ConvertIdentityToRolesType(identity);
                        console.debug("dashboard agent rolepage: ", agentRole);
                        this._ShowRolePage(agentRole);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DashboardPerformanceComponent.prototype.tabChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.tabIndex = index;
    };
    /**
     * @private
     * @param {?} role
     * @return {?}
     */
    DashboardPerformanceComponent.prototype._ShowRolePage = /**
     * @private
     * @param {?} role
     * @return {?}
     */
    function (role) {
        switch (role) {
            case ROLE.AGENT:
                this.role = "AG";
                break;
            case ROLE.AGENTLEADER:
                this.role = "LEADER";
                break;
            case ROLE.ZONEHEAD:
            case ROLE.CAO:
                this.role = "CAO";
                break;
        }
        //this.role = (role == ROLE.AGENT) ? "AG": "LEADER";
    };
    /**
     * @private
     * @param {?} identity
     * @return {?}
     */
    DashboardPerformanceComponent.prototype._ConvertIdentityToRolesType = /**
     * @private
     * @param {?} identity
     * @return {?}
     */
    function (identity) {
        //AG AL Manager Supervisor
        switch (identity) {
            case "AG":
                return ROLE.AGENT;
            case "AL":
                return ROLE.AGENTLEADER;
            case "Manager":
                return ROLE.ZONEHEAD;
            case "Supervisor":
                return ROLE.CAO;
        }
    };
    DashboardPerformanceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-dashboard-performance',
                    template: "<ng-container *ngIf=\"role==='LEADER'\">\n  <!-- tab -->\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_20\">\n    <app-ui-tab-style1 tabInfo [action]=\"'dashboardPerformanceTab'\" (onTabChildClick)=\"tabChangeEvent($event)\">\n      <app-ui-tab-child>{{language.homePersonal | translate}}</app-ui-tab-child>\n      <app-ui-tab-child>{{language.homeTeam | translate}}</app-ui-tab-child>\n    </app-ui-tab-style1>\n  </app-ui-content-b-gap>\n  <!-- end of tab -->\n\n  <!-- tab content -->\n  <div #tabContent class=\"tab-content-block\">\n    <div class=\"tab-cotent-detail tab-content_0 \" [ngClass]=\"tabIndex == 0? ' active' : '' \">\n      <snd-dashboard-performance-personal></snd-dashboard-performance-personal>\n    </div>\n    <div class=\"tab-cotent-detail tab-content_1\" [ngClass]=\"tabIndex == 1? ' active' : '' \">\n      <snd-dashboard-performance-team></snd-dashboard-performance-team>\n    </div>\n  </div>\n  <!-- end of tab content -->\n</ng-container>\n\n<ng-container *ngIf=\"role==='AG'\">\n  <snd-dashboard-performance-personal></snd-dashboard-performance-personal>\n</ng-container>\n\n<ng-container *ngIf=\"role==='CAO'\">\n  <snd-dashboard-performance-team></snd-dashboard-performance-team>\n</ng-container>\n\n\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class*=tab-content_]{opacity:0;transition:none;position:absolute;z-index:-1;-webkit-transform-origin:top;transform-origin:top}[class*=tab-content_]:not(.active) *{display:none}[class*=tab-content_].active{position:relative;opacity:1;z-index:1;transition:.2s;display:flex;flex-wrap:wrap}.tab-content-block{padding-bottom:20px}"]
                }] }
    ];
    DashboardPerformanceComponent.ctorParameters = function () { return [
        { type: DefaultLoginMgr }
    ]; };
    return DashboardPerformanceComponent;
}());
export { DashboardPerformanceComponent };
if (false) {
    /** @type {?} */
    DashboardPerformanceComponent.prototype.GAP_SIZE_20;
    /** @type {?} */
    DashboardPerformanceComponent.prototype.role;
    /** @type {?} */
    DashboardPerformanceComponent.prototype.language;
    /** @type {?} */
    DashboardPerformanceComponent.prototype.tabIndex;
    /**
     * @type {?}
     * @private
     */
    DashboardPerformanceComponent.prototype.loginMgr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXBlcmZvcm1hbmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS9kYXNoYm9hcmQtcGVyZm9ybWFuY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUE0QixRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdkYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUl4QztJQWNFLHVDQUNVLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBUjVCLGdCQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUUvQixTQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFNMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxnREFBUTs7O0lBQVIsY0FBWSxDQUFDO0lBRWIsMEJBQTBCOzs7Ozs7SUFDWiw0Q0FBSTs7Ozs7O0lBQWxCOzs7Ozs0QkFDa0IscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF4RSxTQUFTLEdBQUcsU0FBNEQ7d0JBRTVFLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBRS9DLFFBQVEsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFFcEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFFNUMsU0FBUyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLENBQUM7d0JBRTFELE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBRXZELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7O0tBQy9COzs7OztJQUVELHNEQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVPLHFEQUFhOzs7OztJQUFyQixVQUFzQixJQUFVO1FBQzlCLFFBQU8sSUFBSSxFQUFFO1lBQ1gsS0FBSyxJQUFJLENBQUMsS0FBSztnQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssSUFBSSxDQUFDLFdBQVc7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixNQUFNO1lBQ1IsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUc7Z0JBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLE1BQU07U0FDVDtRQUNELG9EQUFvRDtJQUN0RCxDQUFDOzs7Ozs7SUFFTyxtRUFBMkI7Ozs7O0lBQW5DLFVBQW9DLFFBQWdCO1FBQ2xELDBCQUEwQjtRQUMxQixRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssSUFBSTtnQkFDUCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2QixLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Z0JBeEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxndUNBQXFEOztpQkFFdEQ7OztnQkFYNEMsZUFBZTs7SUFtRjVELG9DQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0F2RVksNkJBQTZCOzs7SUFFeEMsb0RBQXNDOztJQUV0Qyw2Q0FBMkI7O0lBQzNCLGlEQUFpQzs7SUFDakMsaURBQTRCOzs7OztJQUkxQixpREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5NZ3JUb2tlbiwgSUxvZ2luTWdyLCBMYW5ndWFnZSwgRGVmYXVsdExvZ2luTWdyIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ09OVEVOVEdBUCB9IGZyb20gJ0BhbGxpYW56U05EL3VpJztcbmltcG9ydCB7IFJPTEUgfSBmcm9tICdAYWxsaWFuelNORC9nb2FsJztcbi8vIGltcG9ydCB7IENPTlRFTlRHQVAgfSBmcm9tICdwcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvdWktY29udGVudC1iLWdhcC91aS1jb250ZW50LWItZ2FwLWVudW0nO1xuLy8gaW1wb3J0IHsgQ09OVEVOVEdBUCB9IGZyb20gJ3Byb2plY3RzL3VpL3NyYy9wdWJsaWNfYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLWRhc2hib2FyZC1wZXJmb3JtYW5jZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtcGVyZm9ybWFuY2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtcGVyZm9ybWFuY2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQZXJmb3JtYW5jZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIEdBUF9TSVpFXzIwID0gQ09OVEVOVEdBUC5HQVAyMDtcblxuICBwdWJsaWMgcm9sZTogc3RyaW5nID0gbnVsbDtcbiAgcHVibGljIGxhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyB0YWJJbmRleDogbnVtYmVyID0gMDtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9naW5NZ3I6IERlZmF1bHRMb2dpbk1ncixcbiAgKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgY29uc29sZS5kZWJ1ZyhcImNoZWNrIHN0YXJ0IC4uLi4uLlwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICAvL0xFQURFUiAgLy9BRyAgIDwtLS0gcGFnZVxuICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XG4gICAgbGV0IGxvZ2luSW5mbyA9IGF3YWl0IHRoaXMubG9naW5NZ3IuZ2V0TG9naW5JbmZvKCkucGlwZSh0YWtlKDEpKS50b1Byb21pc2UoKTtcblxuICAgIGNvbnNvbGUuZGVidWcoXCJkYXNoYm9hcmQgbG9naW4gaW5mbzogXCIsIGxvZ2luSW5mbyk7XG5cbiAgICBsZXQgaWRlbnRpdHkgPSBsb2dpbkluZm8uQXBwVXNlTW9kZVtsb2dpbkluZm8uQXBwVXNlTW9kZS5sZW5ndGggLSAxXTtcblxuICAgIGNvbnNvbGUuZGVidWcoXCJkYXNoYm9hcmQgaWRlbnRpdHk6IFwiLCBpZGVudGl0eSk7XG5cbiAgICBsZXQgYWdlbnRSb2xlID0gdGhpcy5fQ29udmVydElkZW50aXR5VG9Sb2xlc1R5cGUoaWRlbnRpdHkpOy8vQUdcblxuICAgIGNvbnNvbGUuZGVidWcoXCJkYXNoYm9hcmQgYWdlbnQgcm9sZXBhZ2U6IFwiLCBhZ2VudFJvbGUpO1xuXG4gICAgdGhpcy5fU2hvd1JvbGVQYWdlKGFnZW50Um9sZSk7XG4gIH1cblxuICB0YWJDaGFuZ2VFdmVudChpbmRleCkge1xuICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX1Nob3dSb2xlUGFnZShyb2xlOiBST0xFKXtcbiAgICBzd2l0Y2gocm9sZSkge1xuICAgICAgY2FzZSBST0xFLkFHRU5UOlxuICAgICAgICB0aGlzLnJvbGUgPSBcIkFHXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBST0xFLkFHRU5UTEVBREVSOlxuICAgICAgICB0aGlzLnJvbGUgPSBcIkxFQURFUlwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUk9MRS5aT05FSEVBRDpcbiAgICAgIGNhc2UgUk9MRS5DQU86XG4gICAgICAgIHRoaXMucm9sZSA9IFwiQ0FPXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvL3RoaXMucm9sZSA9IChyb2xlID09IFJPTEUuQUdFTlQpID8gXCJBR1wiOiBcIkxFQURFUlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfQ29udmVydElkZW50aXR5VG9Sb2xlc1R5cGUoaWRlbnRpdHk6IHN0cmluZyk6IFJPTEUge1xuICAgIC8vQUcgQUwgTWFuYWdlciBTdXBlcnZpc29yXG4gICAgc3dpdGNoIChpZGVudGl0eSkge1xuICAgICAgY2FzZSBcIkFHXCI6XG4gICAgICAgIHJldHVybiBST0xFLkFHRU5UO1xuICAgICAgY2FzZSBcIkFMXCI6XG4gICAgICAgIHJldHVybiBST0xFLkFHRU5UTEVBREVSO1xuICAgICAgY2FzZSBcIk1hbmFnZXJcIjpcbiAgICAgICAgcmV0dXJuIFJPTEUuWk9ORUhFQUQ7XG4gICAgICBjYXNlIFwiU3VwZXJ2aXNvclwiOlxuICAgICAgICByZXR1cm4gUk9MRS5DQU87XG4gICAgfVxuICB9XG5cbiAgXG5cbn1cbiJdfQ==