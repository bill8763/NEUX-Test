/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var DashboardUiCardMsgComponent = /** @class */ (function () {
    function DashboardUiCardMsgComponent() {
        this.isRead = true;
        this.isHasBtn = false; // has approve or cancel button
        this.isHasApproved = false; // false: show approve; true show cancel
        this.cardType = 'goal'; // 0 goal 1 cust 2 progress
        this.imgType = 'img-male'; // 0 img-goal 1 img-cust 2 img-progress
    }
    /**
     * @return {?}
     */
    DashboardUiCardMsgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.imgType = 'img-' + this.cardType;
        this.linkBtnStatus();
    };
    /**
     * @private
     * @return {?}
     */
    DashboardUiCardMsgComponent.prototype.linkBtnStatus = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.linkStatus == 'Done') {
            this.isHasBtn = true;
            //this.isHasApproved = true;
        }
        else if (this.linkStatus == 'Approve') {
            this.isHasBtn = true;
        }
        else if (this.linkStatus == 'null') {
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DashboardUiCardMsgComponent.prototype.approve = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    DashboardUiCardMsgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dashboard-ui-card-msg',
                    template: "<app-ui-card-content-btn [noPadding]=\"true\" class=\"msg-card-block msg-detail-block\">\n        <ng-container infoContent>\n            <div class=\"card-block\">\n              <div class=\"card-type\"><ng-content select=[cardType]></ng-content></div>\n              <div class=\"card-title-block\">\n                  <span class=\"img-block\" [ngClass]=\"imgType\">\n                      <img class=\"img-goal\" src=\"assets/img/icon-msg-goal.svg\">\n                      <img class=\"img-cust\" src=\"assets/img/icon-msg-cust.svg\">\n                      <img class=\"img-progress\" src=\"assets/img/icon-msg-progress.svg\">\n                  </span>\n                  <span class=\"text-block\">\n                      <div class=\"title-main\">\n                          <ng-content select=[cardTitle]></ng-content>\n                        \n                      </div>\n                      <div class=\"title-sub\">\n                        <span class=\"date\"><ng-content select=[cardDate]></ng-content></span>\n                        <span class=\"time\"><ng-content select=[cardTime]></ng-content></span>\n                        <span class=\"icon-block\" [ngClass]=\"isRead? 'active': ''\">\n                            <img class=\"normal-img\" src=\"assets/img/icon-msg-read-no.svg\">\n                            <img class=\"active-img\" src=\"assets/img/icon-msg-read.svg\">\n                        </span>\n                      </div>\n                      \n                  </span>\n                  \n              </div>\n              <div class=\"card-detail-text\">\n                <p><ng-content select=[cardDetail]></ng-content></p>\n              </div>\n              <!-- btn -->\n              <div class=\"card-btn-block\" *ngIf=\"isHasBtn\" [ngClass]=\"isHasApproved ? 'active': ''\">\n                <button class=\"card-btn\">\n                  <app-ui-link class=\"card-btn_link\" [isUnderLine]=\"false\" [imgSrc]=\"'assets/img/icon-arrow-long-blue.svg'\" (onClick)=\"approve($event)\">\n                    <ng-container textType=\"linktext\">\n                      <ng-content select=[linkStatus]></ng-content>\n                    </ng-container>\n                  </app-ui-link>\n                  <div class=\"card-btn_text\">DONE</div>\n                </button>\n              </div>\n              <!-- end of btn -->\n              \n            </div>\n        </ng-container>\n    </app-ui-card-content-btn>\n    ",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.msg-card-block{display:block;margin-bottom:20px}.msg-detail-block .img-block img{width:100%}.msg-detail-block .card-block{position:relative;padding:15px 20px}.msg-detail-block .card-block .card-type{position:absolute;top:15px;right:20px;font-size:.75rem;color:#414141;border:1px solid #414141;display:flex;width:90px;flex-shrink:0;justify-content:center;align-items:center;border-radius:3px}@media screen and (min-width:1025px){.msg-detail-block .card-block .card-type{width:9vw}}.msg-detail-block .card-block .card-title-block{display:flex;align-items:center}.msg-detail-block .card-block .card-title-block .img-block{width:40px;display:flex;flex-grow:0;flex-shrink:0}.msg-detail-block .card-block .card-title-block .img-block img{width:40px;height:40px;display:none}.msg-detail-block .card-block .card-title-block .img-block.img-cust img.img-cust,.msg-detail-block .card-block .card-title-block .img-block.img-female img.img-female,.msg-detail-block .card-block .card-title-block .img-block.img-goal img.img-goal,.msg-detail-block .card-block .card-title-block .img-block.img-male img.img-male,.msg-detail-block .card-block .card-title-block .img-block.img-progress img.img-progress{display:inline-block}.msg-detail-block .card-block .card-title-block .text-block{padding-left:10px;width:calc(100% - 40px - 90px);display:flex;flex-grow:0;flex-shrink:0;flex-wrap:wrap;font-size:.875rem}.msg-detail-block .card-block .card-title-block .text-block .title-main{display:block;width:100%;color:#414141;font-weight:700;line-height:20px}.msg-detail-block .card-block .card-title-block .text-block .title-sub{display:block;width:100%;color:#414141;font-weight:400}.msg-detail-block .card-block .card-title-block .text-block .time{padding-left:10px;padding-right:16px}.msg-detail-block .card-block .card-title-block .icon-block{width:14px;display:inline-block;vertical-align:middle}.msg-detail-block .card-block .card-title-block .icon-block img{width:14px;display:none}.msg-detail-block .card-block .card-title-block .icon-block .normal-img{display:inline-block}.msg-detail-block .card-block .card-title-block .icon-block .active-img,.msg-detail-block .card-block .card-title-block .icon-block.active .normal-img{display:none}.msg-detail-block .card-block .card-title-block .icon-block.active .active-img{display:inline-block}.msg-detail-block .card-block .card-title-block .icon-block.img-cust .img-cust,.msg-detail-block .card-block .card-title-block .icon-block.img-goal .img-goal,.msg-detail-block .card-block .card-title-block .icon-block.img-progress .img-progress{display:inline}.msg-detail-block .card-block .card-detail-text p{margin:5px 0 0;padding:0;font-size:.875rem;font-weight:400;/*! autoprefixer: off */-webkit-box-orient:vertical;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1}@media screen and (max-width:1023px){.msg-detail-block .card-block .card-title-block .text-block{width:calc(100% - 120px)}.msg-detail-block .card-block .card-detail-text p{-webkit-line-clamp:2}}.msg-detail-block .card-block .card-btn-block{display:block;width:100%;text-align:right;background-color:transparent;padding:0;margin-top:3px}.msg-detail-block .card-block .card-btn-block .card-btn_text{color:#c2c2c2;font-size:.875rem;font-weight:700;display:none}.msg-detail-block .card-block .card-btn-block .card-btn_link,.msg-detail-block .card-block .card-btn-block.active .card-btn_text{display:inline-block}.msg-detail-block .card-block .card-btn-block.active .card-btn_link{display:none}.msg-detail-block .card-block ::ng-deep .ui-link-block .link{font-size:.875rem}.msg-detail-block .card-block ::ng-deep .ui-link-block .img-block img{vertical-align:middle}.msg-detail-block ::ng-deep .card-btn-block .ui-link-block .img-block img{padding:4px}"]
                }] }
    ];
    DashboardUiCardMsgComponent.ctorParameters = function () { return []; };
    DashboardUiCardMsgComponent.propDecorators = {
        isRead: [{ type: Input }],
        isHasBtn: [{ type: Input }],
        isHasApproved: [{ type: Input }],
        cardType: [{ type: Input }],
        linkStatus: [{ type: Input }]
    };
    return DashboardUiCardMsgComponent;
}());
export { DashboardUiCardMsgComponent };
if (false) {
    /** @type {?} */
    DashboardUiCardMsgComponent.prototype.isRead;
    /** @type {?} */
    DashboardUiCardMsgComponent.prototype.isHasBtn;
    /** @type {?} */
    DashboardUiCardMsgComponent.prototype.isHasApproved;
    /** @type {?} */
    DashboardUiCardMsgComponent.prototype.cardType;
    /** @type {?} */
    DashboardUiCardMsgComponent.prototype.linkStatus;
    /** @type {?} */
    DashboardUiCardMsgComponent.prototype.imgType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXVpLWNhcmQtbXNnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2Rhc2hib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Rhc2hib2FyZC11aS1jYXJkLW1zZy9kYXNoYm9hcmQtdWktY2FyZC1tc2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQWNFO1FBUlMsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBRSwrQkFBK0I7UUFDbEQsa0JBQWEsR0FBRyxLQUFLLENBQUMsQ0FBRSx3Q0FBd0M7UUFDaEUsYUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLDJCQUEyQjtRQUd2RCxZQUFPLEdBQUcsVUFBVSxDQUFBLENBQUUsdUNBQXVDO0lBRTdDLENBQUM7Ozs7SUFHakIsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxtREFBYTs7OztJQUFyQjtRQUNFLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBRSxNQUFNLEVBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsNEJBQTRCO1NBQzdCO2FBQUssSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFFLFNBQVMsRUFBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjthQUFLLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBRSxNQUFNLEVBQUM7U0FDaEM7SUFDSCxDQUFDOzs7OztJQUNELDZDQUFPOzs7O0lBQVAsVUFBUSxLQUFLO0lBRWIsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxnOEVBQXFEOztpQkFFdEQ7Ozs7eUJBRUUsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQTJCUixrQ0FBQztDQUFBLEFBckNELElBcUNDO1NBaENZLDJCQUEyQjs7O0lBQ3RDLDZDQUF1Qjs7SUFDdkIsK0NBQTBCOztJQUMxQixvREFBK0I7O0lBQy9CLCtDQUEyQjs7SUFDM0IsaURBQXFCOztJQUVyQiw4Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZC11aS1jYXJkLW1zZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtdWktY2FyZC1tc2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtdWktY2FyZC1tc2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRVaUNhcmRNc2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc1JlYWQgPSB0cnVlO1xuICBASW5wdXQoKSBpc0hhc0J0biA9IGZhbHNlOyAgLy8gaGFzIGFwcHJvdmUgb3IgY2FuY2VsIGJ1dHRvblxuICBASW5wdXQoKSBpc0hhc0FwcHJvdmVkID0gZmFsc2U7ICAvLyBmYWxzZTogc2hvdyBhcHByb3ZlOyB0cnVlIHNob3cgY2FuY2VsXG4gIEBJbnB1dCgpIGNhcmRUeXBlID0gJ2dvYWwnOyAvLyAwIGdvYWwgMSBjdXN0IDIgcHJvZ3Jlc3NcbiAgQElucHV0KCkgbGlua1N0YXR1cyA7IFxuXG4gIGltZ1R5cGUgPSAnaW1nLW1hbGUnICAvLyAwIGltZy1nb2FsIDEgaW1nLWN1c3QgMiBpbWctcHJvZ3Jlc3NcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbWdUeXBlID0gJ2ltZy0nK3RoaXMuY2FyZFR5cGU7XG4gICAgdGhpcy5saW5rQnRuU3RhdHVzKCk7XG4gIH1cblxuICBwcml2YXRlIGxpbmtCdG5TdGF0dXMoKXtcbiAgICBpZih0aGlzLmxpbmtTdGF0dXM9PSdEb25lJyl7XG4gICAgICB0aGlzLmlzSGFzQnRuID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5pc0hhc0FwcHJvdmVkID0gdHJ1ZTtcbiAgICB9ZWxzZSBpZih0aGlzLmxpbmtTdGF0dXM9PSdBcHByb3ZlJyl7XG4gICAgICB0aGlzLmlzSGFzQnRuID0gdHJ1ZTtcbiAgICB9ZWxzZSBpZih0aGlzLmxpbmtTdGF0dXM9PSdudWxsJyl7XG4gICAgfVxuICB9XG4gIGFwcHJvdmUoZXZlbnQpe1xuICAgIFxuICB9XG4gICAgICBcblxuXG59XG4iXX0=