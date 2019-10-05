/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
var UiDetectionScrollComponent = /** @class */ (function () {
    function UiDetectionScrollComponent() {
        this.scrollEventData = new EventEmitter();
        this.paddingGap = { top: 10,
            right: 10,
            bottom: 10,
            left: 10 };
        this.scrollMsg = { top: true,
            right: false,
            bottom: false,
            left: true };
    }
    /**
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.detectionScroll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pt = this.paddingGap.top;
        /** @type {?} */
        var pr = this.paddingGap.right;
        /** @type {?} */
        var pb = this.paddingGap.bottom;
        /** @type {?} */
        var pl = this.paddingGap.left;
        /** @type {?} */
        var SCDom = this.scrollContent.nativeElement;
        /** @type {?} */
        var DCDom = this.detectionContent.nativeElement;
        /** @type {?} */
        var SCSize = SCDom.getBoundingClientRect();
        /** @type {?} */
        var DCSize = DCDom.getBoundingClientRect();
        /** @type {?} */
        var SCWidth = SCDom.scrollWidth;
        /** @type {?} */
        var SCHeight = SCDom.scrollHeight;
        /** @type {?} */
        var DCWidth = DCSize.width;
        /** @type {?} */
        var DCHeight = DCSize.height;
        this.scrollMsg.left = DCDom.scrollLeft < pl ? true : false;
        this.scrollMsg.right = (SCWidth - (DCDom.scrollLeft + DCWidth)) < pr ? true : false;
        this.scrollMsg.top = DCDom.scrollTop < pt ? true : false;
        this.scrollMsg.bottom = (SCHeight - (DCDom.scrollTop + DCHeight)) < pr ? true : false;
        this.scrollEventData.emit(this.scrollMsg);
    };
    /**
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.detectionScroll();
        }), 0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiDetectionScrollComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.detectionScroll();
    };
    UiDetectionScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-detection-scroll',
                    template: "<div (scroll)=\"detectionScroll()\" class=\"detection-scroll-content stop-scroll-block\" #detectionContent>\n  <div  class=\"scroll-content\" #scrollContent>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.detection-scroll-content{overflow:auto}"]
                }] }
    ];
    UiDetectionScrollComponent.ctorParameters = function () { return []; };
    UiDetectionScrollComponent.propDecorators = {
        scrollContent: [{ type: ViewChild, args: ['scrollContent',] }],
        detectionContent: [{ type: ViewChild, args: ['detectionContent',] }],
        scrollEventData: [{ type: Output }],
        paddingGap: [{ type: Input }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiDetectionScrollComponent;
}());
export { UiDetectionScrollComponent };
if (false) {
    /** @type {?} */
    UiDetectionScrollComponent.prototype.scrollContent;
    /** @type {?} */
    UiDetectionScrollComponent.prototype.detectionContent;
    /** @type {?} */
    UiDetectionScrollComponent.prototype.scrollEventData;
    /** @type {?} */
    UiDetectionScrollComponent.prototype.paddingGap;
    /** @type {?} */
    UiDetectionScrollComponent.prototype.scrollMsg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZGV0ZWN0aW9uLXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWRldGVjdGlvbi1zY3JvbGwvdWktZGV0ZWN0aW9uLXNjcm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEg7SUFTRTtRQURVLG9CQUFlLEdBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2QyxlQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUMsRUFBRTtZQUNOLEtBQUssRUFBQyxFQUFFO1lBQ1IsTUFBTSxFQUFDLEVBQUU7WUFDVCxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUE7UUFDaEMsY0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFDLElBQUk7WUFDUixLQUFLLEVBQUMsS0FBSztZQUNYLE1BQU0sRUFBQyxLQUFLO1lBQ1osSUFBSSxFQUFDLElBQUksRUFBQyxDQUFBO0lBUlIsQ0FBQzs7OztJQVVqQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0Qsb0RBQWU7OztJQUFmOztZQUNNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7O1lBQ3hCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7O1lBQzFCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07O1lBQzNCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7O1lBQ3pCLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWE7O1lBQ3hDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYTs7WUFFM0MsTUFBTSxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsRUFBRTs7WUFDdEMsTUFBTSxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsRUFBRTs7WUFFdEMsT0FBTyxHQUFJLEtBQUssQ0FBQyxXQUFXOztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVk7O1lBQzdCLE9BQU8sR0FBSSxNQUFNLENBQUMsS0FBSzs7WUFDdkIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNO1FBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFLLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDO1FBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFNLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDO1FBRWhGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0Qsb0RBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELDZDQUFROzs7O0lBRFIsVUFDUyxLQUFLO1FBQ1osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsNE5BQW1EOztpQkFFcEQ7Ozs7Z0NBRUUsU0FBUyxTQUFDLGVBQWU7bUNBQ3pCLFNBQVMsU0FBQyxrQkFBa0I7a0NBQzVCLE1BQU07NkJBRU4sS0FBSzsyQkF1Q0wsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFJM0MsaUNBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWhEWSwwQkFBMEI7OztJQUNyQyxtREFBcUQ7O0lBQ3JELHNEQUEyRDs7SUFDM0QscURBQWdEOztJQUVoRCxnREFHZ0M7O0lBQ2hDLCtDQUd3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1kZXRlY3Rpb24tc2Nyb2xsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWRldGVjdGlvbi1zY3JvbGwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1kZXRlY3Rpb24tc2Nyb2xsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlEZXRlY3Rpb25TY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdzY3JvbGxDb250ZW50Jykgc2Nyb2xsQ29udGVudDpFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkZXRlY3Rpb25Db250ZW50JykgZGV0ZWN0aW9uQ29udGVudDpFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgc2Nyb2xsRXZlbnREYXRhID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgQElucHV0KCkgcGFkZGluZ0dhcCA9IHsgdG9wOjEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjEwfVxuICBzY3JvbGxNc2cgPSB7IHRvcDp0cnVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0OmZhbHNlLFxuICAgICAgICAgICAgICAgIGJvdHRvbTpmYWxzZSxcbiAgICAgICAgICAgICAgICBsZWZ0OnRydWV9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgZGV0ZWN0aW9uU2Nyb2xsKCl7XG4gICAgbGV0IHB0ID0gdGhpcy5wYWRkaW5nR2FwLnRvcCxcbiAgICAgICAgcHIgPSB0aGlzLnBhZGRpbmdHYXAucmlnaHQsXG4gICAgICAgIHBiID0gdGhpcy5wYWRkaW5nR2FwLmJvdHRvbSxcbiAgICAgICAgcGwgPSB0aGlzLnBhZGRpbmdHYXAubGVmdDtcbiAgICBsZXQgU0NEb20gPSB0aGlzLnNjcm9sbENvbnRlbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgRENEb20gPSB0aGlzLmRldGVjdGlvbkNvbnRlbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgXG4gICAgICAgIFNDU2l6ZSA9IFNDRG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBEQ1NpemUgPSBEQ0RvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblxuICAgICAgICBTQ1dpZHRoICA9IFNDRG9tLnNjcm9sbFdpZHRoLFxuICAgICAgICBTQ0hlaWdodCA9IFNDRG9tLnNjcm9sbEhlaWdodCxcbiAgICAgICAgRENXaWR0aCAgPSBEQ1NpemUud2lkdGgsXG4gICAgICAgIERDSGVpZ2h0ID0gRENTaXplLmhlaWdodDtcbiAgICAgICAgXG4gICAgdGhpcy5zY3JvbGxNc2cubGVmdCAgID0gRENEb20uc2Nyb2xsTGVmdCA8IHBsP3RydWU6ZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxNc2cucmlnaHQgID0gKFNDV2lkdGggLSAoRENEb20uc2Nyb2xsTGVmdCtEQ1dpZHRoKSkgPCBwcj90cnVlOmZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsTXNnLnRvcCAgICA9IERDRG9tLnNjcm9sbFRvcCA8IHB0P3RydWU6ZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxNc2cuYm90dG9tID0gKFNDSGVpZ2h0IC0gKERDRG9tLnNjcm9sbFRvcCtEQ0hlaWdodCkpIDwgcHI/dHJ1ZTpmYWxzZTtcblxuICAgIHRoaXMuc2Nyb2xsRXZlbnREYXRhLmVtaXQodGhpcy5zY3JvbGxNc2cpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMuZGV0ZWN0aW9uU2Nyb2xsKCk7XG4gICAgfSwwKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmRldGVjdGlvblNjcm9sbCgpO1xuICB9XG59XG4iXX0=