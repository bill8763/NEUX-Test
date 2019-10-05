/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class UiLinkBgComponent {
    constructor() {
        this.text = '';
        this.textTitle = '';
        this.linkBtnClick = new EventEmitter();
    }
    /**
     * @param {?} textInput
     * @return {?}
     */
    onBtnLinkClick(textInput) {
        this.linkBtnClick.emit(textInput);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiLinkBgComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-link-bg',
                template: "<button class=\"link-block\" (click)=\"onBtnLinkClick(text)\">\n  <div class=\"link-title\">\n    {{textTitle}}\n  </div>\n  <div class=\"link-content\">\n    {{text}}\n  </div>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.link-block{cursor:pointer;border:none;background-color:#ececec;border-radius:45px;text-align:center;padding:10px 10px 10px 15px;display:block;max-width:230px;width:100%;margin:0 auto;table-layout:fixed;font-size:0}.link-block .link-content,.link-block .link-title{display:inline-block;vertical-align:middle}.link-block .link-title{width:70px;color:#c2c2c2;font-size:.75rem}.link-block .link-content{padding-left:15px;padding-right:10px;font-weight:700;color:#414141;font-size:1rem;width:calc(100% - 70px);text-align:left;word-break:break-all;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.link-block:focus{outline:0}:host{display:inline-block;margin:0 auto}:host+app-ui-link-bg{margin-top:15px}"]
            }] }
];
UiLinkBgComponent.ctorParameters = () => [];
UiLinkBgComponent.propDecorators = {
    text: [{ type: Input }],
    textTitle: [{ type: Input }],
    linkBtnClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiLinkBgComponent.prototype.text;
    /** @type {?} */
    UiLinkBgComponent.prototype.textTitle;
    /** @type {?} */
    UiLinkBgComponent.prototype.linkBtnClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbGluay1iZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWxpbmstYmcvdWktbGluay1iZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTTtJQUlKO1FBSFMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFVLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFakIsY0FBYyxDQUFDLFNBQWdCO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix3TUFBMEM7Z0JBRTFDLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7OzttQkFFRSxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7OztJQUZQLGlDQUEyQjs7SUFDM0Isc0NBQWdDOztJQUNoQyx5Q0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktbGluay1iZycsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1saW5rLWJnLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbGluay1iZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpTGlua0JnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRleHRUaXRsZTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBsaW5rQnRuQ2xpY2sgOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uQnRuTGlua0NsaWNrKHRleHRJbnB1dDpzdHJpbmcpe1xuICAgIHRoaXMubGlua0J0bkNsaWNrLmVtaXQodGV4dElucHV0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==