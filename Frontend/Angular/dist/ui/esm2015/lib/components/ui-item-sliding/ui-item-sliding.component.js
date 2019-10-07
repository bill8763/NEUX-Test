/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject } from '@angular/core';
export class UiItemSlidingComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.closeSlidingItems();
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
}
UiItemSlidingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-item-sliding',
                template: "<div class=\"space-ui-element list-block\">\n  <ion-list #slidingList>\n    <ng-content></ng-content>\n  </ion-list>\n</div>\n\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-list{background-color:transparent;border-bottom:1px solid #c2c2c2;box-shadow:0 2px 4px 0 rgba(0,0,0,.19);border-radius:5px}.list-block .list-md,.list-block ion-list{padding-top:0;padding-bottom:0}:host ::ng-deep app-ui-item ion-item-sliding{background-color:#fff}:host ::ng-deep app-ui-item:first-of-type ion-item-sliding{border-radius:5px 5px 0 0}:host ::ng-deep app-ui-item:last-of-type ion-item-sliding{border-radius:0 0 5px 5px}:host ::ng-deep app-ui-item:only-of-type ion-item-sliding{border-radius:5px}:host ::ng-deep ion-item-sliding:first-of-type .item-native{border-radius:5px 5px 0 0}:host ::ng-deep ion-item-sliding:last-of-type .item-native{border-radius:5px 5px 0 0}"]
            }] }
];
UiItemSlidingComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
if (false) {
    /** @type {?} */
    UiItemSlidingComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaXRlbS1zbGlkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaXRlbS1zbGlkaW5nL3VpLWl0ZW0tc2xpZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pGLE1BQU07Ozs7SUFjSixZQUFpQyxVQUFzQjtRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBYkssaUJBQWlCOzs7a0JBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztZQUM1RSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBOzs7O0lBVUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNElBQStDOzthQUVoRDs7O1lBTnNDLFVBQVUsdUJBcUJqQyxNQUFNLFNBQUMsVUFBVTs7OztJQVovQiw0Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWl0ZW0tc2xpZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1pdGVtLXNsaWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1pdGVtLXNsaWRpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaUl0ZW1TbGlkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICBcbiAgYXN5bmMgY2xvc2VTbGlkaW5nSXRlbXMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLXNsaWRpbmcnKTtcbiAgICBpZiAoaXRlbSAmJiBpdGVtLmNsb3NlT3BlbmVkKSB7XG4gICAgICByZXR1cm4gaXRlbS5jbG9zZU9wZW5lZCgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gXG5cbiAgY29uc3RydWN0b3IoIEBJbmplY3QoRWxlbWVudFJlZikgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyBcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICAgIHRoaXMuY2xvc2VTbGlkaW5nSXRlbXMoKTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICB9XG4gIFxuXG59XG4iXX0=