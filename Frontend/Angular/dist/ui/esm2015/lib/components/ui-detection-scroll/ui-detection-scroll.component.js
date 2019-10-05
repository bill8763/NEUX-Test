/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
export class UiDetectionScrollComponent {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    detectionScroll() {
        /** @type {?} */
        let pt = this.paddingGap.top;
        /** @type {?} */
        let pr = this.paddingGap.right;
        /** @type {?} */
        let pb = this.paddingGap.bottom;
        /** @type {?} */
        let pl = this.paddingGap.left;
        /** @type {?} */
        let SCDom = this.scrollContent.nativeElement;
        /** @type {?} */
        let DCDom = this.detectionContent.nativeElement;
        /** @type {?} */
        let SCSize = SCDom.getBoundingClientRect();
        /** @type {?} */
        let DCSize = DCDom.getBoundingClientRect();
        /** @type {?} */
        let SCWidth = SCDom.scrollWidth;
        /** @type {?} */
        let SCHeight = SCDom.scrollHeight;
        /** @type {?} */
        let DCWidth = DCSize.width;
        /** @type {?} */
        let DCHeight = DCSize.height;
        this.scrollMsg.left = DCDom.scrollLeft < pl ? true : false;
        this.scrollMsg.right = (SCWidth - (DCDom.scrollLeft + DCWidth)) < pr ? true : false;
        this.scrollMsg.top = DCDom.scrollTop < pt ? true : false;
        this.scrollMsg.bottom = (SCHeight - (DCDom.scrollTop + DCHeight)) < pr ? true : false;
        this.scrollEventData.emit(this.scrollMsg);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.detectionScroll();
        }), 0);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.detectionScroll();
    }
}
UiDetectionScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-detection-scroll',
                template: "<div (scroll)=\"detectionScroll()\" class=\"detection-scroll-content stop-scroll-block\" #detectionContent>\n  <div  class=\"scroll-content\" #scrollContent>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.detection-scroll-content{overflow:auto}"]
            }] }
];
UiDetectionScrollComponent.ctorParameters = () => [];
UiDetectionScrollComponent.propDecorators = {
    scrollContent: [{ type: ViewChild, args: ['scrollContent',] }],
    detectionContent: [{ type: ViewChild, args: ['detectionContent',] }],
    scrollEventData: [{ type: Output }],
    paddingGap: [{ type: Input }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZGV0ZWN0aW9uLXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWRldGVjdGlvbi1zY3JvbGwvdWktZGV0ZWN0aW9uLXNjcm9sbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPcEgsTUFBTTtJQUlKO1FBRFUsb0JBQWUsR0FBSSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZDLGVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBQyxFQUFFO1lBQ04sS0FBSyxFQUFDLEVBQUU7WUFDUixNQUFNLEVBQUMsRUFBRTtZQUNULElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQTtRQUNoQyxjQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUMsSUFBSTtZQUNSLEtBQUssRUFBQyxLQUFLO1lBQ1gsTUFBTSxFQUFDLEtBQUs7WUFDWixJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUE7SUFSUixDQUFDOzs7O0lBVWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsZUFBZTs7WUFDVCxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHOztZQUN4QixFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLOztZQUMxQixFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNOztZQUMzQixFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOztZQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhOztZQUN4QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWE7O1lBRTNDLE1BQU0sR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUU7O1lBQ3RDLE1BQU0sR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUU7O1lBRXRDLE9BQU8sR0FBSSxLQUFLLENBQUMsV0FBVzs7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZOztZQUM3QixPQUFPLEdBQUksTUFBTSxDQUFDLEtBQUs7O1lBQ3ZCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTTtRQUU1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBSyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBTSxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztRQUVoRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDROQUFtRDs7YUFFcEQ7Ozs7NEJBRUUsU0FBUyxTQUFDLGVBQWU7K0JBQ3pCLFNBQVMsU0FBQyxrQkFBa0I7OEJBQzVCLE1BQU07eUJBRU4sS0FBSzt1QkF1Q0wsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTNDekMsbURBQXFEOztJQUNyRCxzREFBMkQ7O0lBQzNELHFEQUFnRDs7SUFFaEQsZ0RBR2dDOztJQUNoQywrQ0FHd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZGV0ZWN0aW9uLXNjcm9sbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1kZXRlY3Rpb24tc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZGV0ZWN0aW9uLXNjcm9sbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpRGV0ZWN0aW9uU2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnc2Nyb2xsQ29udGVudCcpIHNjcm9sbENvbnRlbnQ6RWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGV0ZWN0aW9uQ29udGVudCcpIGRldGVjdGlvbkNvbnRlbnQ6RWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIHNjcm9sbEV2ZW50RGF0YSA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIEBJbnB1dCgpIHBhZGRpbmdHYXAgPSB7IHRvcDoxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbToxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDoxMH1cbiAgc2Nyb2xsTXNnID0geyB0b3A6dHJ1ZSxcbiAgICAgICAgICAgICAgICByaWdodDpmYWxzZSxcbiAgICAgICAgICAgICAgICBib3R0b206ZmFsc2UsXG4gICAgICAgICAgICAgICAgbGVmdDp0cnVlfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGRldGVjdGlvblNjcm9sbCgpe1xuICAgIGxldCBwdCA9IHRoaXMucGFkZGluZ0dhcC50b3AsXG4gICAgICAgIHByID0gdGhpcy5wYWRkaW5nR2FwLnJpZ2h0LFxuICAgICAgICBwYiA9IHRoaXMucGFkZGluZ0dhcC5ib3R0b20sXG4gICAgICAgIHBsID0gdGhpcy5wYWRkaW5nR2FwLmxlZnQ7XG4gICAgbGV0IFNDRG9tID0gdGhpcy5zY3JvbGxDb250ZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIERDRG9tID0gdGhpcy5kZXRlY3Rpb25Db250ZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIFxuICAgICAgICBTQ1NpemUgPSBTQ0RvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgRENTaXplID0gRENEb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cbiAgICAgICAgU0NXaWR0aCAgPSBTQ0RvbS5zY3JvbGxXaWR0aCxcbiAgICAgICAgU0NIZWlnaHQgPSBTQ0RvbS5zY3JvbGxIZWlnaHQsXG4gICAgICAgIERDV2lkdGggID0gRENTaXplLndpZHRoLFxuICAgICAgICBEQ0hlaWdodCA9IERDU2l6ZS5oZWlnaHQ7XG4gICAgICAgIFxuICAgIHRoaXMuc2Nyb2xsTXNnLmxlZnQgICA9IERDRG9tLnNjcm9sbExlZnQgPCBwbD90cnVlOmZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsTXNnLnJpZ2h0ICA9IChTQ1dpZHRoIC0gKERDRG9tLnNjcm9sbExlZnQrRENXaWR0aCkpIDwgcHI/dHJ1ZTpmYWxzZTtcbiAgICB0aGlzLnNjcm9sbE1zZy50b3AgICAgPSBEQ0RvbS5zY3JvbGxUb3AgPCBwdD90cnVlOmZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsTXNnLmJvdHRvbSA9IChTQ0hlaWdodCAtIChEQ0RvbS5zY3JvbGxUb3ArRENIZWlnaHQpKSA8IHByP3RydWU6ZmFsc2U7XG5cbiAgICB0aGlzLnNjcm9sbEV2ZW50RGF0YS5lbWl0KHRoaXMuc2Nyb2xsTXNnKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB0aGlzLmRldGVjdGlvblNjcm9sbCgpO1xuICAgIH0sMCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5kZXRlY3Rpb25TY3JvbGwoKTtcbiAgfVxufVxuIl19