/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiSwitchContentComponent = /** @class */ (function () {
    function UiSwitchContentComponent() {
        this.showContent = 0;
    }
    /**
     * @return {?}
     */
    UiSwitchContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiSwitchContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-switch-content',
                    template: "<div class=\"switch-content\" [ngClass]=\"{'show-right':showContent==1}\">\n  <div class=\"move-content\">\n    <div class=\"left-content\" ><ng-content select=\"[left-content]\" ></ng-content></div>\n    <div class=\"right-content\"><ng-content select=\"[right-content]\"></ng-content></div>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".switch-content{overflow:hidden}.switch-content .move-content{display:flex;width:200%;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;-webkit-transform:translateX(0);transform:translateX(0)}.switch-content .move-content .left-content,.switch-content .move-content .right-content{width:50%;min-width:50%;max-width:50%}.switch-content .move-content .right-content{-webkit-transform:translateX(100%);transform:translateX(100%)}.switch-content:not(.show-right) .right-content{position:absolute}.switch-content.show-right .move-content{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.switch-content.show-right .left-content{position:absolute}"]
                }] }
    ];
    UiSwitchContentComponent.ctorParameters = function () { return []; };
    UiSwitchContentComponent.propDecorators = {
        showContent: [{ type: Input }]
    };
    return UiSwitchContentComponent;
}());
export { UiSwitchContentComponent };
if (false) {
    /** @type {?} */
    UiSwitchContentComponent.prototype.showContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc3dpdGNoLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1zd2l0Y2gtY29udGVudC91aS1zd2l0Y2gtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGO0lBUUU7UUFEUyxnQkFBVyxHQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLGtVQUFpRDtvQkFFakQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7Ozs4QkFFRSxLQUFLOztJQU1SLCtCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUFksd0JBQXdCOzs7SUFDbkMsK0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktc3dpdGNoLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktc3dpdGNoLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1zd2l0Y2gtY29udGVudC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpU3dpdGNoQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dDb250ZW50PTA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19