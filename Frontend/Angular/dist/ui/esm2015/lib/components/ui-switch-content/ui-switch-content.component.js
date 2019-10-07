/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiSwitchContentComponent {
    constructor() {
        this.showContent = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiSwitchContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-switch-content',
                template: "<div class=\"switch-content\" [ngClass]=\"{'show-right':showContent==1}\">\n  <div class=\"move-content\">\n    <div class=\"left-content\" ><ng-content select=\"[left-content]\" ></ng-content></div>\n    <div class=\"right-content\"><ng-content select=\"[right-content]\"></ng-content></div>\n  </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".switch-content{overflow:hidden}.switch-content .move-content{display:flex;width:200%;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;-webkit-transform:translateX(0);transform:translateX(0)}.switch-content .move-content .left-content,.switch-content .move-content .right-content{width:50%;min-width:50%;max-width:50%}.switch-content .move-content .right-content{-webkit-transform:translateX(100%);transform:translateX(100%)}.switch-content:not(.show-right) .right-content{position:absolute}.switch-content.show-right .move-content{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.switch-content.show-right .left-content{position:absolute}"]
            }] }
];
UiSwitchContentComponent.ctorParameters = () => [];
UiSwitchContentComponent.propDecorators = {
    showContent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiSwitchContentComponent.prototype.showContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc3dpdGNoLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1zd2l0Y2gtY29udGVudC91aS1zd2l0Y2gtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07SUFFSjtRQURTLGdCQUFXLEdBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGtVQUFpRDtnQkFFakQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7OzBCQUVFLEtBQUs7Ozs7SUFBTiwrQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1zd2l0Y2gtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1zd2l0Y2gtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXN3aXRjaC1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlTd2l0Y2hDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvd0NvbnRlbnQ9MDtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=