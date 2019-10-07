/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiInfoText1Component {
    constructor() {
        this.isImgShow = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiInfoText1Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-info-text1',
                template: "<div class=\"info-unit-block\">\n  <div class=\"title-block\">\n      <i class=\"img-block\">\n          <img *ngIf=\"imgSrc\" [src]=\"imgSrc\">\n      </i>\n      <div class=\"title\">\n        <ng-content select=\"[textType=title]\"></ng-content>\n      </div>\n  </div>\n  <div class=\"text-block\">\n      <p>\n        <ng-content select=\"[textType=text]\"></ng-content>\n      </p>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.info-unit-block .title-block{display:flex;align-items:center;margin-bottom:0;line-height:28px}.info-unit-block .title-block .img-block{max-width:20px;max-height:20px;width:100%;margin-right:10px;display:flex;align-items:center}.info-unit-block .title-block .img-block img{width:100%;vertical-align:middle}.info-unit-block .title-block .title{font-size:.875rem;line-height:28px}.info-unit-block .text-block{display:block;line-height:28px}.info-unit-block .text-block p{padding:0 0 0 30px;margin:0;font-size:1rem;font-weight:700;box-sizing:border-box;line-height:28px;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word}@media (max-width:767px){.info-unit-block{display:flex;align-items:flex-start}.info-unit-block .title-block{max-width:105px;width:100%;flex-grow:0;flex-shrink:0;align-items:center}.info-unit-block .title-block .title{max-width:75px;width:100%}.info-unit-block .title-block .text-block{max-width:calc(100% - 105px);width:100%}.info-unit-block .title-block .text-block p{padding-left:10px}}@media screen and (min-width:1025px){.info-unit-block .title-block .img-block{max-width:2vw;max-height:2vw}.info-unit-block .text-block p{padding-left:3vw}}"]
            }] }
];
UiInfoText1Component.ctorParameters = () => [];
UiInfoText1Component.propDecorators = {
    imgSrc: [{ type: Input }],
    title: [{ type: Input }],
    text: [{ type: Input }],
    isImgShow: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mby10ZXh0MS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWluZm8tdGV4dDEvdWktaW5mby10ZXh0MS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2xGLE1BQU07SUFVSjtRQU5TLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFNbkIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixtYUFBNkM7Z0JBRTdDLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7OztxQkFFRSxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBSE4sc0NBQXdCOztJQUN4QixxQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7SUFDdEIseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pbmZvLXRleHQxJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWluZm8tdGV4dDEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1pbmZvLXRleHQxLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlJbmZvVGV4dDFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWdTcmM6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpc0ltZ1Nob3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIFxuXG4gIFxuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=