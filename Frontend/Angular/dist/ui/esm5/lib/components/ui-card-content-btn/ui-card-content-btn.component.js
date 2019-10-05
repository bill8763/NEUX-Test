/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
var UiCardContentBtnComponent = /** @class */ (function () {
    function UiCardContentBtnComponent() {
        this.noPadding = false;
        this.hasBtn = false;
        this.outsideBtn = false;
    }
    /**
     * @return {?}
     */
    UiCardContentBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiCardContentBtnComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.btnContent.nativeElement.childNodes.length) {
            this.outsideBtn = true;
        }
    };
    UiCardContentBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-card-content-btn',
                    template: "<div class=\"card-content-btn\" [ngClass]=\"{'hasBtn':outsideBtn && hasBtn,\n                                          'noPadding':noPadding}\">\n  <div class=\"info-content\">\n    <ng-content select=\"[infoContent]\"></ng-content>\n  </div>\n  <div class=\"btn-content\" #btnContent>\n    <ng-content select=\"[btnContent]\"></ng-content>\n  </div>\n</div>\n  \n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.card-content-btn{background-color:#fff;padding:20px 35px;border-radius:5px;box-shadow:0 2px 4px 0 rgba(0,0,0,.19)}.card-content-btn:not(.hasBtn) .btn-content{display:none}.card-content-btn.hasBtn{padding-bottom:0}.card-content-btn.hasBtn .btn-content{-webkit-transform:translateY(25px);transform:translateY(25px)}.card-content-btn.noPadding{padding:0}"]
                }] }
    ];
    UiCardContentBtnComponent.ctorParameters = function () { return []; };
    UiCardContentBtnComponent.propDecorators = {
        btnContent: [{ type: ViewChild, args: ['btnContent',] }],
        noPadding: [{ type: Input }],
        hasBtn: [{ type: Input }]
    };
    return UiCardContentBtnComponent;
}());
export { UiCardContentBtnComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY2FyZC1jb250ZW50LWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWNhcmQtY29udGVudC1idG4vdWktY2FyZC1jb250ZW50LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXdCLFVBQVUsRUFBRSxTQUFTLEVBQTJDLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoSztJQVlFO1FBSFMsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBVyxLQUFLLENBQUM7SUFDWCxDQUFDOzs7O0lBRWpCLDRDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFDRCxzREFBa0I7OztJQUFsQjtRQUNFLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztZQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsd1hBQW1EO29CQUVuRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7OzZCQUdFLFNBQVMsU0FBQyxZQUFZOzRCQUN0QixLQUFLO3lCQUNMLEtBQUs7O0lBV1IsZ0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWZZLHlCQUF5Qjs7O0lBRXBDLCtDQUErQzs7SUFDL0MsOENBQW1DOztJQUNuQywyQ0FBZ0M7O0lBQ2hDLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbmRWYWx1ZVN1YnNjcmliZXIgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9maW5kJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWNhcmQtY29udGVudC1idG4nLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktY2FyZC1jb250ZW50LWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWNhcmQtY29udGVudC1idG4uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUNhcmRDb250ZW50QnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gQENvbnRlbnRDaGlsZHJlbignW2J0bkNvbnRlbnRdJykgYnRuQ29udGVudDpFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdidG5Db250ZW50JykgYnRuQ29udGVudDpFbGVtZW50UmVmO1xuICBASW5wdXQoKSBub1BhZGRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNCdG46Ym9vbGVhbiA9IGZhbHNlO1xuICBvdXRzaWRlQnRuOmJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKXtcbiAgICBpZih0aGlzLmJ0bkNvbnRlbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCl7XG4gICAgICB0aGlzLm91dHNpZGVCdG4gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19