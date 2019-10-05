/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
//import { EventEmitter } from 'protractor';
export class UiLinkComponent {
    constructor() {
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
    onClickLink() {
        this.onClick.emit();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.classImgFront = this.isImgFront ? ' type-img-front' : '';
        this.classLinkStyle = this.isUnderLine ? ' ' : ' type-no-underline';
    }
}
UiLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-link',
                template: "<div class=\"ui-link-block\" [ngClass]=\"[classLinkStyle, classImgFront, isReset ? 'resetLink' : '']\">\n  <button class=\"link\" (click)=\"onClickLink()\" [id]='id'>\n    <span class=\"link-text\">\n        <ng-content select=\"[textType=linktext]\"></ng-content>\n    </span>\n    <i *ngIf=\"isHasImg\" class=\"img-block\">\n        <img *ngIf=\"imgSrc\" [src]=\"imgSrc\">\n        <ng-content select=\"[textType=icon]\"></ng-content>\n    </i>\n  </button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-link-block{display:inline-flex;justify-content:center}.ui-link-block.type-no-underline .link{text-decoration:none}.ui-link-block.type-img-front .link{flex-direction:row-reverse}.ui-link-block.type-img-front .img-block{padding-left:0;margin-right:5px}.ui-link-block .img-block{display:flex;justify-content:center;max-width:24px;max-height:24px;width:100%}.ui-link-block .img-block img{max-width:24px;max-height:24px;width:24px;height:24px;display:inline-block}.ui-link-block .link{color:#007ab3;font-size:1.125rem;line-height:normal;text-decoration:underline;display:flex;justify-content:center;align-items:center}.ui-link-block .link-text{display:flex;justify-content:center;font-weight:700;position:relative}.ui-link-block .img-block:empty{display:none}.ui-link-block.resetLink{justify-content:flex-end}.ui-link-block.resetLink .link .link-text{white-space:nowrap}.ui-link-block.resetLink .link .img-block{margin:5px}.ui-link-block.resetLink .link .img-block .ng-star-inserted{max-width:14px}@media screen and (min-width:1025px){.ui-link-block .img-block{max-width:2.4vw;max-height:2.4vw}.ui-link-block .img-block img{max-width:2.4vw;max-height:2.4vw;width:2.4vw;height:2.4vw}}"]
            }] }
];
UiLinkComponent.ctorParameters = () => [];
UiLinkComponent.propDecorators = {
    imgSrc: [{ type: Input }],
    isUnderLine: [{ type: Input }],
    isHasImg: [{ type: Input }],
    isImgFront: [{ type: Input }],
    isReset: [{ type: Input }],
    id: [{ type: Input }],
    onClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWxpbmsvdWktbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBU3hHLE1BQU07SUFpQko7UUFmUyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixPQUFFLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBSVQsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNdkIsQ0FBQzs7OztJQUxqQixXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUMsaUJBQWlCLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDdEUsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsaWVBQXVDO2dCQUV2QyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7Ozs7cUJBRUUsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO2lCQUNMLEtBQUs7c0JBS0wsTUFBTTs7OztJQVZQLGlDQUF3Qjs7SUFDeEIsc0NBQXFDOztJQUNyQyxtQ0FBa0M7O0lBQ2xDLHFDQUE0Qjs7SUFDNUIsa0NBQXlCOztJQUN6Qiw2QkFBd0I7O0lBQ3hCLHdDQUFtQjs7SUFJbkIsa0NBQXVDOztJQUt2Qyx5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdwcm90cmFjdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWdTcmM6IHN0cmluZztcbiAgQElucHV0KCkgaXNVbmRlckxpbmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc0hhc0ltZzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzSW1nRnJvbnQgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNSZXNldCA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDpzdHJpbmcgPSAnJztcbiAgY2xhc3NJbWdGcm9udCA9ICcnO1xuXG4gIFxuXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvbkNsaWNrTGluaygpe1xuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cbiBcbiAgY2xhc3NMaW5rU3R5bGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsYXNzSW1nRnJvbnQgPSB0aGlzLmlzSW1nRnJvbnQ/ICcgdHlwZS1pbWctZnJvbnQnOiAnJztcbiAgICB0aGlzLmNsYXNzTGlua1N0eWxlID0gdGhpcy5pc1VuZGVyTGluZSA/ICcgJyA6ICcgdHlwZS1uby11bmRlcmxpbmUnO1xuICB9XG5cbn1cbiJdfQ==