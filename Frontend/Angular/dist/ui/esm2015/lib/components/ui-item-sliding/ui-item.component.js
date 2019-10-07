/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Inject, ViewChild, ElementRef } from '@angular/core';
export class UiItemComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.onItemClick = new EventEmitter();
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    closeSlidingItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
            if (item && item.closeOpened) {
                return item.closeOpened();
            }
            return false;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.closeSlidingItems();
    }
    /**
     * @return {?}
     */
    itemClick() {
        this.onItemClick.emit();
        this.closeSlidingItems();
    }
}
UiItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-item',
                template: "<ion-item-sliding>\n  <ion-item lines=\"none\" (click)=\"itemClick()\">\n    <ion-label text-wrap class=\"ui-item\">\n      <ng-content select=\"[ui-item-content]\"></ng-content>\n    </ion-label>\n  </ion-item>\n  <ng-content></ng-content>\n</ion-item-sliding>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-item-sliding{border-bottom:1px solid #c2c2c2}"]
            }] }
];
UiItemComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
UiItemComponent.propDecorators = {
    slidingList: [{ type: ViewChild, args: ['slidingList',] }],
    onItemClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiItemComponent.prototype.slidingList;
    /** @type {?} */
    UiItemComponent.prototype.elementRef;
    /** @type {?} */
    UiItemComponent.prototype.onItemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWl0ZW0tc2xpZGluZy91aS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RyxNQUFNOzs7O0lBY0osWUFBaUMsVUFBc0I7UUFWN0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBV3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFWSyxpQkFBaUI7OztrQkFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1lBQzVFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Ozs7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG1SQUF1Qzs7YUFFeEM7OztZQU5vRSxVQUFVLHVCQXFCL0QsTUFBTSxTQUFDLFVBQVU7OzswQkFiOUIsU0FBUyxTQUFDLGFBQWE7MEJBR3ZCLE1BQU07Ozs7SUFIUCxzQ0FBaUQ7O0lBQ2pELHFDQUF1Qjs7SUFFdkIsc0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbmplY3QsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRpbmdMaXN0Jykgc2xpZGluZ0xpc3Q6RWxlbWVudFJlZjtcbiAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgb25JdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgYXN5bmMgY2xvc2VTbGlkaW5nSXRlbXMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLXNsaWRpbmcnKTtcbiAgICBpZiAoaXRlbSAmJiBpdGVtLmNsb3NlT3BlbmVkKSB7XG4gICAgICByZXR1cm4gaXRlbS5jbG9zZU9wZW5lZCgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggQEluamVjdChFbGVtZW50UmVmKSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IFxuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gIH1cblxuICBpdGVtQ2xpY2soKSB7XG4gICAgdGhpcy5vbkl0ZW1DbGljay5lbWl0KCk7XG4gICAgdGhpcy5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICB9XG4gXG5cbn1cbiJdfQ==