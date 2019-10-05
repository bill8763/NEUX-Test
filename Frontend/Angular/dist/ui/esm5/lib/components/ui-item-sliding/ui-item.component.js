/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Inject, ViewChild, ElementRef } from '@angular/core';
var UiItemComponent = /** @class */ (function () {
    function UiItemComponent(elementRef) {
        this.onItemClick = new EventEmitter();
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    UiItemComponent.prototype.closeSlidingItems = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var item;
            return tslib_1.__generator(this, function (_a) {
                item = this.elementRef.nativeElement.querySelector('ion-item-sliding');
                if (item && item.closeOpened) {
                    return [2 /*return*/, item.closeOpened()];
                }
                return [2 /*return*/, false];
            });
        });
    };
    /**
     * @return {?}
     */
    UiItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.closeSlidingItems();
    };
    /**
     * @return {?}
     */
    UiItemComponent.prototype.itemClick = /**
     * @return {?}
     */
    function () {
        this.onItemClick.emit();
        this.closeSlidingItems();
    };
    UiItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item',
                    template: "<ion-item-sliding>\n  <ion-item lines=\"none\" (click)=\"itemClick()\">\n    <ion-label text-wrap class=\"ui-item\">\n      <ng-content select=\"[ui-item-content]\"></ng-content>\n    </ion-label>\n  </ion-item>\n  <ng-content></ng-content>\n</ion-item-sliding>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-item-sliding{border-bottom:1px solid #c2c2c2}"]
                }] }
    ];
    UiItemComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
    ]; };
    UiItemComponent.propDecorators = {
        slidingList: [{ type: ViewChild, args: ['slidingList',] }],
        onItemClick: [{ type: Output }]
    };
    return UiItemComponent;
}());
export { UiItemComponent };
if (false) {
    /** @type {?} */
    UiItemComponent.prototype.slidingList;
    /** @type {?} */
    UiItemComponent.prototype.elementRef;
    /** @type {?} */
    UiItemComponent.prototype.onItemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWl0ZW0tc2xpZGluZy91aS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RztJQW1CRSx5QkFBaUMsVUFBc0I7UUFWN0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBV3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFWSywyQ0FBaUI7OztJQUF2Qjs7OztnQkFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO2dCQUM1RSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUM1QixzQkFBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUM7aUJBQzNCO2dCQUNELHNCQUFPLEtBQUssRUFBQzs7O0tBQ2Q7Ozs7SUFNRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsbUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixtUkFBdUM7O2lCQUV4Qzs7O2dCQU5vRSxVQUFVLHVCQXFCL0QsTUFBTSxTQUFDLFVBQVU7Ozs4QkFiOUIsU0FBUyxTQUFDLGFBQWE7OEJBR3ZCLE1BQU07O0lBd0JULHNCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E1QlksZUFBZTs7O0lBQzFCLHNDQUFpRDs7SUFDakQscUNBQXVCOztJQUV2QixzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEluamVjdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnc2xpZGluZ0xpc3QnKSBzbGlkaW5nTGlzdDpFbGVtZW50UmVmO1xuICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBvbkl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhc3luYyBjbG9zZVNsaWRpbmdJdGVtcygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0tc2xpZGluZycpO1xuICAgIGlmIChpdGVtICYmIGl0ZW0uY2xvc2VPcGVuZWQpIHtcbiAgICAgIHJldHVybiBpdGVtLmNsb3NlT3BlbmVkKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KEVsZW1lbnRSZWYpIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xvc2VTbGlkaW5nSXRlbXMoKTtcbiAgfVxuXG4gIGl0ZW1DbGljaygpIHtcbiAgICB0aGlzLm9uSXRlbUNsaWNrLmVtaXQoKTtcbiAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gIH1cbiBcblxufVxuIl19