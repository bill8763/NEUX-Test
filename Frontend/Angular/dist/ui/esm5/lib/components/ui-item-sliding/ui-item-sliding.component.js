/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject } from '@angular/core';
var UiItemSlidingComponent = /** @class */ (function () {
    function UiItemSlidingComponent(elementRef) {
        this.elementRef = elementRef;
        this.closeSlidingItems();
    }
    /**
     * @return {?}
     */
    UiItemSlidingComponent.prototype.closeSlidingItems = /**
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
    UiItemSlidingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.closeSlidingItems();
    };
    UiItemSlidingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item-sliding',
                    template: "<div class=\"space-ui-element list-block\">\n  <ion-list #slidingList>\n    <ng-content></ng-content>\n  </ion-list>\n</div>\n\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-list{background-color:transparent;border-bottom:1px solid #c2c2c2;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);border-radius:5px}.list-block .list-md,.list-block ion-list{padding-top:0;padding-bottom:0}:host ::ng-deep app-ui-item ion-item-sliding{background-color:#fff}:host ::ng-deep app-ui-item:first-of-type ion-item-sliding{border-radius:5px 5px 0 0}:host ::ng-deep app-ui-item:last-of-type ion-item-sliding{border-radius:0 0 5px 5px}:host ::ng-deep app-ui-item:only-of-type ion-item-sliding{border-radius:5px}:host ::ng-deep ion-item-sliding:first-of-type .item-native{border-radius:5px 5px 0 0}:host ::ng-deep ion-item-sliding:last-of-type .item-native{border-radius:5px 5px 0 0}"]
                }] }
    ];
    UiItemSlidingComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
    ]; };
    return UiItemSlidingComponent;
}());
export { UiItemSlidingComponent };
if (false) {
    /** @type {?} */
    UiItemSlidingComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaXRlbS1zbGlkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaXRlbS1zbGlkaW5nL3VpLWl0ZW0tc2xpZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpGO0lBbUJFLGdDQUFpQyxVQUFzQjtRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBYkssa0RBQWlCOzs7SUFBdkI7Ozs7Z0JBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDNUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDNUIsc0JBQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDO2lCQUMzQjtnQkFDRCxzQkFBTyxLQUFLLEVBQUM7OztLQUNkOzs7O0lBVUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw0SUFBK0M7O2lCQUVoRDs7O2dCQU5zQyxVQUFVLHVCQXFCakMsTUFBTSxTQUFDLFVBQVU7O0lBV2pDLDZCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F6Qlksc0JBQXNCOzs7SUFFakMsNENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pdGVtLXNsaWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktaXRlbS1zbGlkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaXRlbS1zbGlkaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlJdGVtU2xpZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgXG4gIGFzeW5jIGNsb3NlU2xpZGluZ0l0ZW1zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24taXRlbS1zbGlkaW5nJyk7XG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5jbG9zZU9wZW5lZCkge1xuICAgICAgcmV0dXJuIGl0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuIFxuXG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KEVsZW1lbnRSZWYpIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICB0aGlzLmNsb3NlU2xpZGluZ0l0ZW1zKCk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xvc2VTbGlkaW5nSXRlbXMoKTtcbiAgfVxuICBcblxufVxuIl19