/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { Language } from '@allianzSND/core';
import { showDashboardRuleToken } from '../../injectionToken/injection-token';
var DashboardDetailComponent = /** @class */ (function () {
    function DashboardDetailComponent(showDashboardRule, dashboardService) {
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
    Object.defineProperty(DashboardDetailComponent.prototype, "messageList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._messageList;
        },
        set: /**
         * @param {?} messageList
         * @return {?}
         */
        function (messageList) {
            this._messageList = messageList;
            console.log("detail message: ", this._messageList);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardDetailComponent.prototype, "loginInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loginInfo;
        },
        set: /**
         * @param {?} loginInfo
         * @return {?}
         */
        function (loginInfo) {
            var _this = this;
            this._loginInfo = loginInfo;
            if (this.showDashboardRule) {
                this.showDashboardRule.dashboardShowLoginInfo(loginInfo).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.userImgUrl = data.imgUrl;
                    _this.userAgentName = data.showName;
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    DashboardDetailComponent.prototype.tabChangeEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.tabIndex = event;
    };
    /**
     * @return {?}
     */
    DashboardDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
    };
    /**
     * @private
     * @return {?}
     */
    DashboardDetailComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this.userLevel = this.dashboardService.getUserLevel();
    };
    /**
     * @return {?}
     */
    DashboardDetailComponent.prototype.ClickListShow = /**
     * @return {?}
     */
    function () {
        this.onClickLink.emit();
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    DashboardDetailComponent.prototype.doFilterByKeyword = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.filterByKeyword.emit(keyword);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DashboardDetailComponent.prototype.onChangeCommitmentStatus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changeCommitmentStatus.emit(event);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    DashboardDetailComponent.prototype.doMessageClick = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.clickMessage.emit(message);
    };
    DashboardDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dashboard-detail',
                    template: "<div class=\"layout-detail-block style-has-top-space\">\n    <div class=\"space-detail\">\n        <!-- profile card -->\n        <app-ui-card-content-btn [noPadding]=\"true\" class=\" msg-card-block msg-profile-block\">\n            <ng-container infoContent>\n                <div class=\"card-block\">\n                    <div class=\"profile-detail-block\">\n                        <span class=\"img-block\">\n                            <img class=\"img-female\" [src]=\"userImgUrl\">\n                            <!-- <img class=\"img-male\" src=\"assets/img/icon-msg-pesron-male.svg\"> -->\n                        </span>\n                        <span class=\"text-block\">\n                            {{language.homeHi | translate}}, {{ userAgentName }}\n                        </span>\n                    </div>\n                    <div *ngIf=\"windowWidth < 1024\" class=\"link-block\">\n                        <app-ui-link Action [action]=\"'showTodayScheduleBirthday'\" (onClick)=\"ClickListShow()\">\n                            <ng-container textType=\"linktext\">{{language.todayScheduleBirthday | translate}}</ng-container>\n                        </app-ui-link>\n                    </div>\n                </div>\n            </ng-container>\n        </app-ui-card-content-btn>\n        <!-- end of profile card -->\n        <!-- perfomance -->\n        <app-ui-title-style1 class=\"\">\n            <ng-container textType=\"titleText\"> {{language.performance | translate}}</ng-container>\n        </app-ui-title-style1>\n        <snd-dashboard-performance></snd-dashboard-performance>\n        <!-- end of perfomance -->\n    </div>\n    <snd-dashboard-message [messageList]=\"messageList\" (filterByKeyword)=\"doFilterByKeyword($event)\" (clickMessage)=\"doMessageClick($event)\" (changeCommitmentStatus)=\"onChangeCommitmentStatus($event)\"></snd-dashboard-message>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}.msg-profile-block{margin-bottom:20px;display:block}.msg-profile-block .card-block{display:block;padding-top:10px;padding-bottom:10px}.msg-profile-block .card-block .profile-detail-block{display:flex;align-items:center;padding:0 10px}.msg-profile-block .card-block .img-block{margin-right:20px;max-width:60px;width:100%}.msg-profile-block .card-block .img-block img{width:60px;height:60px}.msg-profile-block .card-block .img-block.img-female .img-female{display:inline-block}.msg-profile-block .card-block .img-block.img-female .img-male{display:none}.msg-profile-block .card-block .img-block.img-male .img-male{display:inline-block}.msg-profile-block .card-block .img-block.img-male .img-female{display:none}.msg-profile-block .card-block .text-block{width:calc(100% - 60px);font-weight:700;color:#414141;line-height:20px;font-size:1rem}.msg-profile-block .card-block .link-block{padding:15px 10px 5px;margin-top:15px;border-top:1px solid #c2c2c2;text-align:center}.msg-profile-block .card-block ::ng-deep .link{width:100%}"]
                }] }
    ];
    DashboardDetailComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showDashboardRuleToken,] }] },
        { type: DashboardService }
    ]; };
    DashboardDetailComponent.propDecorators = {
        messageList: [{ type: Input }],
        loginInfo: [{ type: Input }],
        onClickLink: [{ type: Output }],
        filterByKeyword: [{ type: Output }],
        clickMessage: [{ type: Output }],
        changeCommitmentStatus: [{ type: Output }]
    };
    return DashboardDetailComponent;
}());
export { DashboardDetailComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9kYXNoYm9hcmQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXNoYm9hcmQtZGV0YWlsL2Rhc2hib2FyZC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFLE9BQU8sRUFBYSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUs5RTtJQW9ERSxrQ0FDc0QsaUJBQW9DLEVBQ2hGLGdCQUFrQztRQURVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaEYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWhEckMsaUJBQVksR0FBNkIsRUFBRSxDQUFDO1FBRzVDLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBUSxJQUFJLENBQUM7UUE2Qm5CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLDJCQUFzQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZbEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQTNDSCxzQkFDSSxpREFBVzs7OztRQU1mO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBVEQsVUFDZ0IsV0FBVztZQUV6QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLCtDQUFTOzs7O1FBRGI7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFDRCxVQUFjLFNBQVM7WUFBdkIsaUJBVUM7WUFUQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUU1QixJQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxJQUFJO29CQUNyRSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxFQUFDLENBQUM7YUFDSDtRQUVKLENBQUM7OztPQVhBOzs7OztJQW1CRCxpREFBYzs7OztJQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBVUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBR08sdUNBQUk7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxnREFBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0Qsb0RBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQU87UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwyREFBd0I7Ozs7SUFBeEIsVUFBeUIsS0FBSztRQUM1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsaURBQWM7Ozs7SUFBZCxVQUFlLE9BQXdCO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQW5GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsKzNEQUFnRDs7aUJBRWpEOzs7Z0RBaURJLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCO2dCQTdEckMsZ0JBQWdCOzs7OEJBdUJ0QixLQUFLOzRCQVdMLEtBQUs7OEJBZ0JMLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNO3lDQUNOLE1BQU07O0lBMkNULCtCQUFDO0NBQUEsQUF4RkQsSUF3RkM7U0FuRlksd0JBQXdCOzs7SUFDbkMsZ0RBQW1EOztJQUNuRCwrQ0FBbUI7O0lBQ25CLDhDQUE2Qjs7SUFDN0IsNENBQWlDOztJQUNqQyw4Q0FBK0I7O0lBQy9CLGlEQUFrQzs7SUFDbEMsNENBQW9COztJQUNwQiw2Q0FBNkI7O0lBNkI3QiwrQ0FBMkM7O0lBQzNDLG1EQUErQzs7SUFDL0MsZ0RBQTRDOztJQUM1QywwREFBc0Q7Ozs7O0lBUXBELHFEQUF3Rjs7Ozs7SUFDeEYsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9kYXNoYm9hcmQtc2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhc2hib2FyZE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vZGVsL0Rhc2hib2FyZE1lc3NhZ2UnO1xuaW1wb3J0IHsgTG9naW5JbmZvLCBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgc2hvd0Rhc2hib2FyZFJ1bGVUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBzaG93RGFzaGJvYXJkUnVsZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9zaG93RGFzaGJvYXJkUnVsZS5pbnRlcmZhY2UnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgX21lc3NhZ2VMaXN0IDogQXJyYXk8RGFzaGJvYXJkTWVzc2FnZT4gPSBbXTtcbiAgcHVibGljIHdpbmRvd1dpZHRoO1xuICBwdWJsaWMgX2xvZ2luSW5mbzogTG9naW5JbmZvO1xuICBwdWJsaWMgbGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcbiAgcHVibGljIHVzZXJJbWdVcmw6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgdXNlckFnZW50TmFtZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyB0YWJJbmRleCA9IDA7XG4gIHB1YmxpYyB1c2VyTGV2ZWw6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IG1lc3NhZ2VMaXN0KG1lc3NhZ2VMaXN0KSB7XG4gICAgXG4gICAgdGhpcy5fbWVzc2FnZUxpc3QgPSBtZXNzYWdlTGlzdDtcblxuICAgIGNvbnNvbGUubG9nKFwiZGV0YWlsIG1lc3NhZ2U6IFwiLCB0aGlzLl9tZXNzYWdlTGlzdCk7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlTGlzdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBsb2dpbkluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2luSW5mbztcbiAgfVxuICBzZXQgbG9naW5JbmZvKGxvZ2luSW5mbykge1xuICAgIHRoaXMuX2xvZ2luSW5mbyA9IGxvZ2luSW5mbztcblxuICAgIGlmKHRoaXMuc2hvd0Rhc2hib2FyZFJ1bGUpIHtcbiAgICAgIHRoaXMuc2hvd0Rhc2hib2FyZFJ1bGUuZGFzaGJvYXJkU2hvd0xvZ2luSW5mbyhsb2dpbkluZm8pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy51c2VySW1nVXJsID0gZGF0YS5pbWdVcmw7XG4gICAgICAgIHRoaXMudXNlckFnZW50TmFtZSA9IGRhdGEuc2hvd05hbWU7XG4gICAgICB9KTtcbiAgICAgfVxuXG4gIH1cblxuICBAT3V0cHV0KCkgb25DbGlja0xpbmsgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJCeUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbGlja01lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VDb21taXRtZW50U3RhdHVzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBcbiAgXG4gIHRhYkNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy50YWJJbmRleCA9IGV2ZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChzaG93RGFzaGJvYXJkUnVsZVRva2VuKSBwcml2YXRlIHNob3dEYXNoYm9hcmRSdWxlOiBzaG93RGFzaGJvYXJkUnVsZSxcbiAgICBwcml2YXRlIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UsXG4gICAgXG4gICAgKSB7IFxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIFxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy51c2VyTGV2ZWwgPSB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0VXNlckxldmVsKCk7XG4gIH1cblxuICBDbGlja0xpc3RTaG93KCl7XG4gICAgdGhpcy5vbkNsaWNrTGluay5lbWl0KCk7XG4gIH1cbiAgZG9GaWx0ZXJCeUtleXdvcmQoa2V5d29yZCl7XG4gICAgdGhpcy5maWx0ZXJCeUtleXdvcmQuZW1pdChrZXl3b3JkKTtcbiAgfVxuICBcbiAgb25DaGFuZ2VDb21taXRtZW50U3RhdHVzKGV2ZW50KXtcbiAgICB0aGlzLmNoYW5nZUNvbW1pdG1lbnRTdGF0dXMuZW1pdChldmVudCk7XG4gIH1cblxuXG4gIGRvTWVzc2FnZUNsaWNrKG1lc3NhZ2U6RGFzaGJvYXJkTWVzc2FnZSl7XG4gICAgdGhpcy5jbGlja01lc3NhZ2UuZW1pdChtZXNzYWdlKTtcbiAgfVxuICAgIFxuICBcblxuXG59XG4iXX0=