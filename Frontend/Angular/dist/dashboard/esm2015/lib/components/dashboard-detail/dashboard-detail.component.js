/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { Language } from '@allianzSND/core';
import { showDashboardRuleToken } from '../../injectionToken/injection-token';
export class DashboardDetailComponent {
    /**
     * @param {?} showDashboardRule
     * @param {?} dashboardService
     */
    constructor(showDashboardRule, dashboardService) {
        this.showDashboardRule = showDashboardRule;
        this.dashboardService = dashboardService;
        this._messageList = [];
        this.language = new Language();
        this.userImgUrl = '';
        this.userAgentName = '';
        this.tabIndex = 0;
        this.userLevel = null;
        this.onClickLink = new EventEmitter();
        this.filterByKeyword = new EventEmitter();
        this.clickMessage = new EventEmitter();
        this.changeCommitmentStatus = new EventEmitter();
        this.init();
    }
    /**
     * @param {?} messageList
     * @return {?}
     */
    set messageList(messageList) {
        this._messageList = messageList;
        console.log("detail message: ", this._messageList);
    }
    /**
     * @return {?}
     */
    get messageList() {
        return this._messageList;
    }
    /**
     * @return {?}
     */
    get loginInfo() {
        return this._loginInfo;
    }
    /**
     * @param {?} loginInfo
     * @return {?}
     */
    set loginInfo(loginInfo) {
        this._loginInfo = loginInfo;
        if (this.showDashboardRule) {
            this.showDashboardRule.dashboardShowLoginInfo(loginInfo).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.userImgUrl = data.imgUrl;
                this.userAgentName = data.showName;
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tabChangeEvent(event) {
        this.tabIndex = event;
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
        this.userLevel = this.dashboardService.getUserLevel();
    }
    /**
     * @return {?}
     */
    ClickListShow() {
        this.onClickLink.emit();
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    doFilterByKeyword(keyword) {
        this.filterByKeyword.emit(keyword);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChangeCommitmentStatus(event) {
        this.changeCommitmentStatus.emit(event);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    doMessageClick(message) {
        this.clickMessage.emit(message);
    }
}
DashboardDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dashboard-detail',
                template: "<div class=\"layout-detail-block style-has-top-space\">\n    <div class=\"space-detail\">\n        <!-- profile card -->\n        <app-ui-card-content-btn [noPadding]=\"true\" class=\" msg-card-block msg-profile-block\">\n            <ng-container infoContent>\n                <div class=\"card-block\">\n                    <div class=\"profile-detail-block\">\n                        <span class=\"img-block\">\n                            <img class=\"img-female\" [src]=\"userImgUrl\">\n                            <!-- <img class=\"img-male\" src=\"assets/img/icon-msg-pesron-male.svg\"> -->\n                        </span>\n                        <span class=\"text-block\">\n                            {{language.homeHi | translate}}, {{ userAgentName }}\n                        </span>\n                    </div>\n                    <div *ngIf=\"windowWidth < 1024\" class=\"link-block\">\n                        <app-ui-link Action [action]=\"'showTodayScheduleBirthday'\" (onClick)=\"ClickListShow()\">\n                            <ng-container textType=\"linktext\">{{language.todayScheduleBirthday | translate}}</ng-container>\n                        </app-ui-link>\n                    </div>\n                </div>\n            </ng-container>\n        </app-ui-card-content-btn>\n        <!-- end of profile card -->\n        <!-- perfomance -->\n        <app-ui-title-style1 class=\"\">\n            <ng-container textType=\"titleText\"> {{language.performance | translate}}</ng-container>\n        </app-ui-title-style1>\n        <snd-dashboard-performance></snd-dashboard-performance>\n        <!-- end of perfomance -->\n    </div>\n    <snd-dashboard-message [messageList]=\"messageList\" (filterByKeyword)=\"doFilterByKeyword($event)\" (clickMessage)=\"doMessageClick($event)\" (changeCommitmentStatus)=\"onChangeCommitmentStatus($event)\"></snd-dashboard-message>\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.msg-profile-block{margin-bottom:20px;display:block}.msg-profile-block .card-block{display:block;padding-top:10px;padding-bottom:10px}.msg-profile-block .card-block .profile-detail-block{display:flex;align-items:center;padding:0 10px}.msg-profile-block .card-block .img-block{margin-right:20px;max-width:60px;width:100%}.msg-profile-block .card-block .img-block img{width:60px;height:60px}.msg-profile-block .card-block .img-block.img-female .img-female{display:inline-block}.msg-profile-block .card-block .img-block.img-female .img-male{display:none}.msg-profile-block .card-block .img-block.img-male .img-male{display:inline-block}.msg-profile-block .card-block .img-block.img-male .img-female{display:none}.msg-profile-block .card-block .text-block{width:calc(100% - 60px);font-weight:700;color:#414141;line-height:20px;font-size:1rem}.msg-profile-block .card-block .link-block{padding:15px 10px 5px;margin-top:15px;border-top:1px solid #c2c2c2;text-align:center}.msg-profile-block .card-block ::ng-deep .link{width:100%}"]
            }] }
];
DashboardDetailComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showDashboardRuleToken,] }] },
    { type: DashboardService }
];
DashboardDetailComponent.propDecorators = {
    messageList: [{ type: Input }],
    loginInfo: [{ type: Input }],
    onClickLink: [{ type: Output }],
    filterByKeyword: [{ type: Output }],
    clickMessage: [{ type: Output }],
    changeCommitmentStatus: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DashboardDetailComponent.prototype._messageList;
    /** @type {?} */
    DashboardDetailComponent.prototype.windowWidth;
    /** @type {?} */
    DashboardDetailComponent.prototype._loginInfo;
    /** @type {?} */
    DashboardDetailComponent.prototype.language;
    /** @type {?} */
    DashboardDetailComponent.prototype.userImgUrl;
    /** @type {?} */
    DashboardDetailComponent.prototype.userAgentName;
    /** @type {?} */
    DashboardDetailComponent.prototype.tabIndex;
    /** @type {?} */
    DashboardDetailComponent.prototype.userLevel;
    /** @type {?} */
    DashboardDetailComponent.prototype.onClickLink;
    /** @type {?} */
    DashboardDetailComponent.prototype.filterByKeyword;
    /** @type {?} */
    DashboardDetailComponent.prototype.clickMessage;
    /** @type {?} */
    DashboardDetailComponent.prototype.changeCommitmentStatus;
    /**
     * @type {?}
     * @private
     */
    DashboardDetailComponent.prototype.showDashboardRule;
    /**
     * @type {?}
     * @private
     */
    DashboardDetailComponent.prototype.dashboardService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9kYXNoYm9hcmQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXNoYm9hcmQtZGV0YWlsL2Rhc2hib2FyZC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFLE9BQU8sRUFBYSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVU5RSxNQUFNOzs7OztJQStDSixZQUNzRCxpQkFBb0MsRUFDaEYsZ0JBQWtDO1FBRFUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNoRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBaERyQyxpQkFBWSxHQUE2QixFQUFFLENBQUM7UUFHNUMsYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFRLElBQUksQ0FBQztRQTZCbkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsMkJBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVlsRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7OztJQTNDSCxJQUNJLFdBQVcsQ0FBQyxXQUFXO1FBRXpCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQUksU0FBUyxDQUFDLFNBQVM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFFNUIsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckMsQ0FBQyxFQUFDLENBQUM7U0FDSDtJQUVKLENBQUM7Ozs7O0lBUUQsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQVVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFHTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsaUJBQWlCLENBQUMsT0FBTztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELGNBQWMsQ0FBQyxPQUF3QjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFuRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLCszREFBZ0Q7O2FBRWpEOzs7NENBaURJLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCO1lBN0RyQyxnQkFBZ0I7OzswQkF1QnRCLEtBQUs7d0JBV0wsS0FBSzswQkFnQkwsTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07cUNBQ04sTUFBTTs7OztJQXZDUCxnREFBbUQ7O0lBQ25ELCtDQUFtQjs7SUFDbkIsOENBQTZCOztJQUM3Qiw0Q0FBaUM7O0lBQ2pDLDhDQUErQjs7SUFDL0IsaURBQWtDOztJQUNsQyw0Q0FBb0I7O0lBQ3BCLDZDQUE2Qjs7SUE2QjdCLCtDQUEyQzs7SUFDM0MsbURBQStDOztJQUMvQyxnREFBNEM7O0lBQzVDLDBEQUFzRDs7Ozs7SUFRcEQscURBQXdGOzs7OztJQUN4RixvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2Rhc2hib2FyZC1zZXJ2aWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvRGFzaGJvYXJkTWVzc2FnZSc7XG5pbXBvcnQgeyBMb2dpbkluZm8sIExhbmd1YWdlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBzaG93RGFzaGJvYXJkUnVsZVRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IHNob3dEYXNoYm9hcmRSdWxlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3Nob3dEYXNoYm9hcmRSdWxlLmludGVyZmFjZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGFzaGJvYXJkLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBfbWVzc2FnZUxpc3QgOiBBcnJheTxEYXNoYm9hcmRNZXNzYWdlPiA9IFtdO1xuICBwdWJsaWMgd2luZG93V2lkdGg7XG4gIHB1YmxpYyBfbG9naW5JbmZvOiBMb2dpbkluZm87XG4gIHB1YmxpYyBsYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuICBwdWJsaWMgdXNlckltZ1VybDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyB1c2VyQWdlbnROYW1lOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHRhYkluZGV4ID0gMDtcbiAgcHVibGljIHVzZXJMZXZlbDogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBzZXQgbWVzc2FnZUxpc3QobWVzc2FnZUxpc3QpIHtcbiAgICBcbiAgICB0aGlzLl9tZXNzYWdlTGlzdCA9IG1lc3NhZ2VMaXN0O1xuXG4gICAgY29uc29sZS5sb2coXCJkZXRhaWwgbWVzc2FnZTogXCIsIHRoaXMuX21lc3NhZ2VMaXN0KTtcbiAgfVxuICBnZXQgbWVzc2FnZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VMaXN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGxvZ2luSW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9naW5JbmZvO1xuICB9XG4gIHNldCBsb2dpbkluZm8obG9naW5JbmZvKSB7XG4gICAgdGhpcy5fbG9naW5JbmZvID0gbG9naW5JbmZvO1xuXG4gICAgaWYodGhpcy5zaG93RGFzaGJvYXJkUnVsZSkge1xuICAgICAgdGhpcy5zaG93RGFzaGJvYXJkUnVsZS5kYXNoYm9hcmRTaG93TG9naW5JbmZvKGxvZ2luSW5mbykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnVzZXJJbWdVcmwgPSBkYXRhLmltZ1VybDtcbiAgICAgICAgdGhpcy51c2VyQWdlbnROYW1lID0gZGF0YS5zaG93TmFtZTtcbiAgICAgIH0pO1xuICAgICB9XG5cbiAgfVxuXG4gIEBPdXRwdXQoKSBvbkNsaWNrTGluayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZpbHRlckJ5S2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsaWNrTWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZUNvbW1pdG1lbnRTdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIFxuICBcbiAgdGFiQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLnRhYkluZGV4ID0gZXZlbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dEYXNoYm9hcmRSdWxlVG9rZW4pIHByaXZhdGUgc2hvd0Rhc2hib2FyZFJ1bGU6IHNob3dEYXNoYm9hcmRSdWxlLFxuICAgIHByaXZhdGUgZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZSxcbiAgICBcbiAgICApIHsgXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbiAgXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLnVzZXJMZXZlbCA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXRVc2VyTGV2ZWwoKTtcbiAgfVxuXG4gIENsaWNrTGlzdFNob3coKXtcbiAgICB0aGlzLm9uQ2xpY2tMaW5rLmVtaXQoKTtcbiAgfVxuICBkb0ZpbHRlckJ5S2V5d29yZChrZXl3b3JkKXtcbiAgICB0aGlzLmZpbHRlckJ5S2V5d29yZC5lbWl0KGtleXdvcmQpO1xuICB9XG4gIFxuICBvbkNoYW5nZUNvbW1pdG1lbnRTdGF0dXMoZXZlbnQpe1xuICAgIHRoaXMuY2hhbmdlQ29tbWl0bWVudFN0YXR1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG5cbiAgZG9NZXNzYWdlQ2xpY2sobWVzc2FnZTpEYXNoYm9hcmRNZXNzYWdlKXtcbiAgICB0aGlzLmNsaWNrTWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICB9XG4gICAgXG4gIFxuXG5cbn1cbiJdfQ==