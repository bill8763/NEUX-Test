/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiInfoText2Component {
    constructor() {
        this.isImgShow = true;
        this.textColor = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiInfoText2Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-info-text2',
                template: "<div class=\"info-unit-block\">\n  <div class=\"title-block\">\n      <div class=\"title\">\n        <ng-content select=\"[textType=title]\"></ng-content>\n        <span class=\"tip-descrp\"><ng-content select=\"[textType=tip]\"></ng-content></span>\n      </div>\n  </div>\n  <div class=\"text-block\" [ngClass]=\" textColor == '#003781' ? 'textBlue' : '' \">\n      <p>\n        <ng-content select=\"[textType=text]\"></ng-content>\n      </p>\n  </div>\n</div>\n    ",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.info-unit-block .title-block{display:flex;align-items:center;margin-bottom:5px}.info-unit-block .title-block .title{font-size:.875rem;font-weight:700;line-height:normal}.info-unit-block .title-block .title .tip-descrp{font-size:.875rem;color:#414141;margin-left:6px;font-weight:300;display:inline-block}.info-unit-block .text-block{display:block}.info-unit-block .text-block p{padding:0;margin:0;font-size:1.25rem;font-weight:300;line-height:normal;box-sizing:border-box;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word}"]
            }] }
];
UiInfoText2Component.ctorParameters = () => [];
UiInfoText2Component.propDecorators = {
    imgSrc: [{ type: Input }],
    title: [{ type: Input }],
    text: [{ type: Input }],
    isImgShow: [{ type: Input }],
    textColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiInfoText2Component.prototype.imgSrc;
    /** @type {?} */
    UiInfoText2Component.prototype.title;
    /** @type {?} */
    UiInfoText2Component.prototype.text;
    /** @type {?} */
    UiInfoText2Component.prototype.isImgShow;
    /** @type {?} */
    UiInfoText2Component.prototype.textColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mby10ZXh0Mi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWluZm8tdGV4dDIvdWktaW5mby10ZXh0Mi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07SUFPSjtRQUhTLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFVLEVBQUUsQ0FBQztJQUVmLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsaWVBQTZDO2dCQUU3QyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7Ozs7cUJBRUUsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBSk4sc0NBQXdCOztJQUN4QixxQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7SUFDdEIseUNBQW1DOztJQUNuQyx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pbmZvLXRleHQyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWluZm8tdGV4dDIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1pbmZvLXRleHQyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlJbmZvVGV4dDJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWdTcmM6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpc0ltZ1Nob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0ZXh0Q29sb3I6c3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=