/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
//import { EventEmitter } from 'protractor';
var UiLinkComponent = /** @class */ (function () {
    function UiLinkComponent() {
        this.isUnderLine = true;
        this.isHasImg = true;
        this.isImgFront = false;
        this.isReset = false;
        this.id = '';
        this.classImgFront = '';
        this.onClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiLinkComponent.prototype.onClickLink = /**
     * @return {?}
     */
    function () {
        this.onClick.emit();
    };
    /**
     * @return {?}
     */
    UiLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.classImgFront = this.isImgFront ? ' type-img-front' : '';
        this.classLinkStyle = this.isUnderLine ? ' ' : ' type-no-underline';
    };
    UiLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-link',
                    template: "<div class=\"ui-link-block\" [ngClass]=\"[classLinkStyle, classImgFront, isReset ? 'resetLink' : '']\">\n  <button class=\"link\" (click)=\"onClickLink()\" [id]='id'>\n    <span class=\"link-text\">\n        <ng-content select=\"[textType=linktext]\"></ng-content>\n    </span>\n    <i *ngIf=\"isHasImg\" class=\"img-block\">\n        <img *ngIf=\"imgSrc\" [src]=\"imgSrc\">\n        <ng-content select=\"[textType=icon]\"></ng-content>\n    </i>\n  </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-link-block{display:inline-flex;justify-content:center}.ui-link-block.type-no-underline .link{text-decoration:none}.ui-link-block.type-img-front .link{flex-direction:row-reverse}.ui-link-block.type-img-front .img-block{padding-left:0;margin-right:5px}.ui-link-block .img-block{display:flex;justify-content:center;max-width:24px;max-height:24px;width:100%}.ui-link-block .img-block img{max-width:24px;max-height:24px;width:24px;height:24px;display:inline-block}.ui-link-block .link{color:#007ab3;font-size:1.125rem;line-height:normal;text-decoration:underline;display:flex;justify-content:center;align-items:center}.ui-link-block .link-text{display:flex;justify-content:center;font-weight:700;position:relative}.ui-link-block .img-block:empty{display:none}.ui-link-block.resetLink{justify-content:flex-end}.ui-link-block.resetLink .link .link-text{white-space:nowrap}.ui-link-block.resetLink .link .img-block{margin:5px}.ui-link-block.resetLink .link .img-block .ng-star-inserted{max-width:14px}@media screen and (min-width:1025px){.ui-link-block .img-block{max-width:2.4vw;max-height:2.4vw}.ui-link-block .img-block img{max-width:2.4vw;max-height:2.4vw;width:2.4vw;height:2.4vw}}"]
                }] }
    ];
    UiLinkComponent.ctorParameters = function () { return []; };
    UiLinkComponent.propDecorators = {
        imgSrc: [{ type: Input }],
        isUnderLine: [{ type: Input }],
        isHasImg: [{ type: Input }],
        isImgFront: [{ type: Input }],
        isReset: [{ type: Input }],
        id: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return UiLinkComponent;
}());
export { UiLinkComponent };
if (false) {
    /** @type {?} */
    UiLinkComponent.prototype.imgSrc;
    /** @type {?} */
    UiLinkComponent.prototype.isUnderLine;
    /** @type {?} */
    UiLinkComponent.prototype.isHasImg;
    /** @type {?} */
    UiLinkComponent.prototype.isImgFront;
    /** @type {?} */
    UiLinkComponent.prototype.isReset;
    /** @type {?} */
    UiLinkComponent.prototype.id;
    /** @type {?} */
    UiLinkComponent.prototype.classImgFront;
    /** @type {?} */
    UiLinkComponent.prototype.onClick;
    /** @type {?} */
    UiLinkComponent.prototype.classLinkStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWxpbmsvdWktbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3hHO0lBdUJFO1FBZlMsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsT0FBRSxHQUFVLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUlULFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXZCLENBQUM7Ozs7SUFMakIscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBS0Qsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUN0RSxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixpZUFBdUM7b0JBRXZDLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7eUJBRUUsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBS0wsTUFBTTs7SUFhVCxzQkFBQztDQUFBLEFBOUJELElBOEJDO1NBeEJZLGVBQWU7OztJQUMxQixpQ0FBd0I7O0lBQ3hCLHNDQUFxQzs7SUFDckMsbUNBQWtDOztJQUNsQyxxQ0FBNEI7O0lBQzVCLGtDQUF5Qjs7SUFDekIsNkJBQXdCOztJQUN4Qix3Q0FBbUI7O0lBSW5CLGtDQUF1Qzs7SUFLdkMseUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1saW5rLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1nU3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzVW5kZXJMaW5lOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNIYXNJbWc6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0ltZ0Zyb250ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzUmVzZXQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6c3RyaW5nID0gJyc7XG4gIGNsYXNzSW1nRnJvbnQgPSAnJztcblxuICBcblxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb25DbGlja0xpbmsoKXtcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCgpO1xuICB9XG4gXG4gIGNsYXNzTGlua1N0eWxlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbGFzc0ltZ0Zyb250ID0gdGhpcy5pc0ltZ0Zyb250PyAnIHR5cGUtaW1nLWZyb250JzogJyc7XG4gICAgdGhpcy5jbGFzc0xpbmtTdHlsZSA9IHRoaXMuaXNVbmRlckxpbmUgPyAnICcgOiAnIHR5cGUtbm8tdW5kZXJsaW5lJztcbiAgfVxuXG59XG4iXX0=