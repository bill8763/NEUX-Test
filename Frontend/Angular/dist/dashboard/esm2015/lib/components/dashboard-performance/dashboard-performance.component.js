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
export class DashboardPerformanceComponent {
    /**
     * @param {?} loginMgr
     */
    constructor(loginMgr) {
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
    ngOnInit() { }
    //LEADER  //AG   <--- page
    /**
     * @private
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let loginInfo = yield this.loginMgr.getLoginInfo().pipe(take(1)).toPromise();
            console.debug("dashboard login info: ", loginInfo);
            /** @type {?} */
            let identity = loginInfo.AppUseMode[loginInfo.AppUseMode.length - 1];
            console.debug("dashboard identity: ", identity);
            /** @type {?} */
            let agentRole = this._ConvertIdentityToRolesType(identity);
            console.debug("dashboard agent rolepage: ", agentRole);
            this._ShowRolePage(agentRole);
        });
    }
    /**
     * @param {?} index
     * @return {?}
     */
    tabChangeEvent(index) {
        this.tabIndex = index;
    }
    /**
     * @private
     * @param {?} role
     * @return {?}
     */
    _ShowRolePage(role) {
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
    }
    /**
     * @private
     * @param {?} identity
     * @return {?}
     */
    _ConvertIdentityToRolesType(identity) {
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
    }
}
DashboardPerformanceComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-dashboard-performance',
                template: "<ng-container *ngIf=\"role==='LEADER'\">\n  <!-- tab -->\n  <app-ui-content-b-gap [gapSize]=\"GAP_SIZE_20\">\n    <app-ui-tab-style1 tabInfo [action]=\"'dashboardPerformanceTab'\" (onTabChildClick)=\"tabChangeEvent($event)\">\n      <app-ui-tab-child>{{language.homePersonal | translate}}</app-ui-tab-child>\n      <app-ui-tab-child>{{language.homeTeam | translate}}</app-ui-tab-child>\n    </app-ui-tab-style1>\n  </app-ui-content-b-gap>\n  <!-- end of tab -->\n\n  <!-- tab content -->\n  <div #tabContent class=\"tab-content-block\">\n    <div class=\"tab-cotent-detail tab-content_0 \" [ngClass]=\"tabIndex == 0? ' active' : '' \">\n      <snd-dashboard-performance-personal></snd-dashboard-performance-personal>\n    </div>\n    <div class=\"tab-cotent-detail tab-content_1\" [ngClass]=\"tabIndex == 1? ' active' : '' \">\n      <snd-dashboard-performance-team></snd-dashboard-performance-team>\n    </div>\n  </div>\n  <!-- end of tab content -->\n</ng-container>\n\n<ng-container *ngIf=\"role==='AG'\">\n  <snd-dashboard-performance-personal></snd-dashboard-performance-personal>\n</ng-container>\n\n<ng-container *ngIf=\"role==='CAO'\">\n  <snd-dashboard-performance-team></snd-dashboard-performance-team>\n</ng-container>\n\n\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}[class*=tab-content_]{opacity:0;transition:none;position:absolute;z-index:-1;-webkit-transform-origin:top;transform-origin:top}[class*=tab-content_]:not(.active) *{display:none}[class*=tab-content_].active{position:relative;opacity:1;z-index:1;transition:.2s;display:flex;flex-wrap:wrap}.tab-content-block{padding-bottom:20px}"]
            }] }
];
DashboardPerformanceComponent.ctorParameters = () => [
    { type: DefaultLoginMgr }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXBlcmZvcm1hbmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS9kYXNoYm9hcmQtcGVyZm9ybWFuY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUE0QixRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdkYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQVN4QyxNQUFNOzs7O0lBU0osWUFDVSxRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQVI1QixnQkFBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFL0IsU0FBSSxHQUFXLElBQUksQ0FBQztRQUNwQixhQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBTTFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUSxLQUFJLENBQUM7Ozs7OztJQUdDLElBQUk7OztnQkFDWixTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFFNUUsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Z0JBRS9DLFFBQVEsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVwRSxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxDQUFDOztnQkFFNUMsU0FBUyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLENBQUM7WUFFMUQsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUV2RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsSUFBVTtRQUM5QixRQUFPLElBQUksRUFBRTtZQUNYLEtBQUssSUFBSSxDQUFDLEtBQUs7Z0JBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLElBQUksQ0FBQyxXQUFXO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDckIsTUFBTTtZQUNSLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHO2dCQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixNQUFNO1NBQ1Q7UUFDRCxvREFBb0Q7SUFDdEQsQ0FBQzs7Ozs7O0lBRU8sMkJBQTJCLENBQUMsUUFBZ0I7UUFDbEQsMEJBQTBCO1FBQzFCLFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssSUFBSTtnQkFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGd1Q0FBcUQ7O2FBRXREOzs7WUFYNEMsZUFBZTs7OztJQWMxRCxvREFBc0M7O0lBRXRDLDZDQUEyQjs7SUFDM0IsaURBQWlDOztJQUNqQyxpREFBNEI7Ozs7O0lBSTFCLGlEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dpbk1nclRva2VuLCBJTG9naW5NZ3IsIExhbmd1YWdlLCBEZWZhdWx0TG9naW5NZ3IgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDT05URU5UR0FQIH0gZnJvbSAnQGFsbGlhbnpTTkQvdWknO1xuaW1wb3J0IHsgUk9MRSB9IGZyb20gJ0BhbGxpYW56U05EL2dvYWwnO1xuLy8gaW1wb3J0IHsgQ09OVEVOVEdBUCB9IGZyb20gJ3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy91aS1jb250ZW50LWItZ2FwL3VpLWNvbnRlbnQtYi1nYXAtZW51bSc7XG4vLyBpbXBvcnQgeyBDT05URU5UR0FQIH0gZnJvbSAncHJvamVjdHMvdWkvc3JjL3B1YmxpY19hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtZGFzaGJvYXJkLXBlcmZvcm1hbmNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1wZXJmb3JtYW5jZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBlcmZvcm1hbmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgR0FQX1NJWkVfMjAgPSBDT05URU5UR0FQLkdBUDIwO1xuXG4gIHB1YmxpYyByb2xlOiBzdHJpbmcgPSBudWxsO1xuICBwdWJsaWMgbGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcbiAgcHVibGljIHRhYkluZGV4OiBudW1iZXIgPSAwO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dpbk1ncjogRGVmYXVsdExvZ2luTWdyLFxuICApIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zb2xlLmRlYnVnKFwiY2hlY2sgc3RhcnQgLi4uLi4uXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8vTEVBREVSICAvL0FHICAgPC0tLSBwYWdlXG4gIHByaXZhdGUgYXN5bmMgaW5pdCgpIHtcbiAgICBsZXQgbG9naW5JbmZvID0gYXdhaXQgdGhpcy5sb2dpbk1nci5nZXRMb2dpbkluZm8oKS5waXBlKHRha2UoMSkpLnRvUHJvbWlzZSgpO1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcImRhc2hib2FyZCBsb2dpbiBpbmZvOiBcIiwgbG9naW5JbmZvKTtcblxuICAgIGxldCBpZGVudGl0eSA9IGxvZ2luSW5mby5BcHBVc2VNb2RlW2xvZ2luSW5mby5BcHBVc2VNb2RlLmxlbmd0aCAtIDFdO1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcImRhc2hib2FyZCBpZGVudGl0eTogXCIsIGlkZW50aXR5KTtcblxuICAgIGxldCBhZ2VudFJvbGUgPSB0aGlzLl9Db252ZXJ0SWRlbnRpdHlUb1JvbGVzVHlwZShpZGVudGl0eSk7Ly9BR1xuXG4gICAgY29uc29sZS5kZWJ1ZyhcImRhc2hib2FyZCBhZ2VudCByb2xlcGFnZTogXCIsIGFnZW50Um9sZSk7XG5cbiAgICB0aGlzLl9TaG93Um9sZVBhZ2UoYWdlbnRSb2xlKTtcbiAgfVxuXG4gIHRhYkNoYW5nZUV2ZW50KGluZGV4KSB7XG4gICAgdGhpcy50YWJJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfU2hvd1JvbGVQYWdlKHJvbGU6IFJPTEUpe1xuICAgIHN3aXRjaChyb2xlKSB7XG4gICAgICBjYXNlIFJPTEUuQUdFTlQ6XG4gICAgICAgIHRoaXMucm9sZSA9IFwiQUdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJPTEUuQUdFTlRMRUFERVI6XG4gICAgICAgIHRoaXMucm9sZSA9IFwiTEVBREVSXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBST0xFLlpPTkVIRUFEOlxuICAgICAgY2FzZSBST0xFLkNBTzpcbiAgICAgICAgdGhpcy5yb2xlID0gXCJDQU9cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vdGhpcy5yb2xlID0gKHJvbGUgPT0gUk9MRS5BR0VOVCkgPyBcIkFHXCI6IFwiTEVBREVSXCI7XG4gIH1cblxuICBwcml2YXRlIF9Db252ZXJ0SWRlbnRpdHlUb1JvbGVzVHlwZShpZGVudGl0eTogc3RyaW5nKTogUk9MRSB7XG4gICAgLy9BRyBBTCBNYW5hZ2VyIFN1cGVydmlzb3JcbiAgICBzd2l0Y2ggKGlkZW50aXR5KSB7XG4gICAgICBjYXNlIFwiQUdcIjpcbiAgICAgICAgcmV0dXJuIFJPTEUuQUdFTlQ7XG4gICAgICBjYXNlIFwiQUxcIjpcbiAgICAgICAgcmV0dXJuIFJPTEUuQUdFTlRMRUFERVI7XG4gICAgICBjYXNlIFwiTWFuYWdlclwiOlxuICAgICAgICByZXR1cm4gUk9MRS5aT05FSEVBRDtcbiAgICAgIGNhc2UgXCJTdXBlcnZpc29yXCI6XG4gICAgICAgIHJldHVybiBST0xFLkNBTztcbiAgICB9XG4gIH1cblxuICBcblxufVxuIl19