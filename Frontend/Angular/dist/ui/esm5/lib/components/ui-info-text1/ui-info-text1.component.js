/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiInfoText1Component = /** @class */ (function () {
    function UiInfoText1Component() {
        this.isImgShow = true;
    }
    /**
     * @return {?}
     */
    UiInfoText1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiInfoText1Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-info-text1',
                    template: "<div class=\"info-unit-block\">\n  <div class=\"title-block\">\n      <i class=\"img-block\">\n          <img *ngIf=\"imgSrc\" [src]=\"imgSrc\">\n      </i>\n      <div class=\"title\">\n        <ng-content select=\"[textType=title]\"></ng-content>\n      </div>\n  </div>\n  <div class=\"text-block\">\n      <p>\n        <ng-content select=\"[textType=text]\"></ng-content>\n      </p>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.info-unit-block .title-block{display:flex;align-items:center;margin-bottom:0;line-height:28px}.info-unit-block .title-block .img-block{max-width:20px;max-height:20px;width:100%;margin-right:10px;display:flex;align-items:center}.info-unit-block .title-block .img-block img{width:100%;vertical-align:middle}.info-unit-block .title-block .title{font-size:.875rem;line-height:28px}.info-unit-block .text-block{display:block;line-height:28px}.info-unit-block .text-block p{padding:0 0 0 30px;margin:0;font-size:1rem;font-weight:700;box-sizing:border-box;line-height:28px;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word}@media (max-width:767px){.info-unit-block{display:flex;align-items:flex-start}.info-unit-block .title-block{max-width:105px;width:100%;flex-grow:0;flex-shrink:0;align-items:center}.info-unit-block .title-block .title{max-width:75px;width:100%}.info-unit-block .title-block .text-block{max-width:calc(100% - 105px);width:100%}.info-unit-block .title-block .text-block p{padding-left:10px}}@media screen and (min-width:1025px){.info-unit-block .title-block .img-block{max-width:2vw;max-height:2vw}.info-unit-block .text-block p{padding-left:3vw}}"]
                }] }
    ];
    UiInfoText1Component.ctorParameters = function () { return []; };
    UiInfoText1Component.propDecorators = {
        imgSrc: [{ type: Input }],
        title: [{ type: Input }],
        text: [{ type: Input }],
        isImgShow: [{ type: Input }]
    };
    return UiInfoText1Component;
}());
export { UiInfoText1Component };
if (false) {
    /** @type {?} */
    UiInfoText1Component.prototype.imgSrc;
    /** @type {?} */
    UiInfoText1Component.prototype.title;
    /** @type {?} */
    UiInfoText1Component.prototype.text;
    /** @type {?} */
    UiInfoText1Component.prototype.isImgShow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mby10ZXh0MS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWluZm8tdGV4dDEvdWktaW5mby10ZXh0MS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xGO0lBZ0JFO1FBTlMsY0FBUyxHQUFZLElBQUksQ0FBQztJQU1uQixDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbWFBQTZDO29CQUU3QyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7O3lCQUVFLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBV1IsMkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWZZLG9CQUFvQjs7O0lBQy9CLHNDQUF3Qjs7SUFDeEIscUNBQXVCOztJQUN2QixvQ0FBc0I7O0lBQ3RCLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktaW5mby10ZXh0MScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1pbmZvLXRleHQxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaW5mby10ZXh0MS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpSW5mb1RleHQxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1nU3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgaXNJbWdTaG93OiBib29sZWFuID0gdHJ1ZTtcblxuICBcblxuICBcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19