/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiCardContentBtnComponent {
    constructor() {
        this.noPadding = false;
        this.hasBtn = false;
        this.outsideBtn = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.btnContent.nativeElement.childNodes.length) {
            this.outsideBtn = true;
        }
    }
}
UiCardContentBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-card-content-btn',
                template: "<div class=\"card-content-btn\" [ngClass]=\"{'hasBtn':outsideBtn && hasBtn,\n                                          'noPadding':noPadding}\">\n  <div class=\"info-content\">\n    <ng-content select=\"[infoContent]\"></ng-content>\n  </div>\n  <div class=\"btn-content\" #btnContent>\n    <ng-content select=\"[btnContent]\"></ng-content>\n  </div>\n</div>\n  \n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.card-content-btn{background-color:#fff;padding:20px 35px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19)}.card-content-btn:not(.hasBtn) .btn-content{display:none}.card-content-btn.hasBtn{padding-bottom:0}.card-content-btn.hasBtn .btn-content{-webkit-transform:translateY(25px);transform:translateY(25px)}.card-content-btn.noPadding{padding:0}"]
            }] }
];
UiCardContentBtnComponent.ctorParameters = () => [];
UiCardContentBtnComponent.propDecorators = {
    btnContent: [{ type: ViewChild, args: ['btnContent',] }],
    noPadding: [{ type: Input }],
    hasBtn: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiCardContentBtnComponent.prototype.btnContent;
    /** @type {?} */
    UiCardContentBtnComponent.prototype.noPadding;
    /** @type {?} */
    UiCardContentBtnComponent.prototype.hasBtn;
    /** @type {?} */
    UiCardContentBtnComponent.prototype.outsideBtn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FyZC1jb250ZW50LWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWNhcmQtY29udGVudC1idG4vdWktY2FyZC1jb250ZW50LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXdCLFVBQVUsRUFBRSxTQUFTLEVBQTJDLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNoSyxNQUFNO0lBTUo7UUFIUyxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFXLEtBQUssQ0FBQztJQUNYLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFDRCxrQkFBa0I7UUFDaEIsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyx3WEFBbUQ7Z0JBRW5ELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7Ozt5QkFHRSxTQUFTLFNBQUMsWUFBWTt3QkFDdEIsS0FBSztxQkFDTCxLQUFLOzs7O0lBRk4sK0NBQStDOztJQUMvQyw4Q0FBbUM7O0lBQ25DLDJDQUFnQzs7SUFDaEMsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmluZFZhbHVlU3Vic2NyaWJlciB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktY2FyZC1jb250ZW50LWJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1jYXJkLWNvbnRlbnQtYnRuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY2FyZC1jb250ZW50LWJ0bi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpQ2FyZENvbnRlbnRCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBAQ29udGVudENoaWxkcmVuKCdbYnRuQ29udGVudF0nKSBidG5Db250ZW50OkVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2J0bkNvbnRlbnQnKSBidG5Db250ZW50OkVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG5vUGFkZGluZzpib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc0J0bjpib29sZWFuID0gZmFsc2U7XG4gIG91dHNpZGVCdG46Ym9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpe1xuICAgIGlmKHRoaXMuYnRuQ29udGVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKXtcbiAgICAgIHRoaXMub3V0c2lkZUJ0biA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=