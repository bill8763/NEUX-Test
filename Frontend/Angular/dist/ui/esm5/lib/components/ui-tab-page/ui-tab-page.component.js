/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
var UiTabPageComponent = /** @class */ (function () {
    function UiTabPageComponent(changeDector) {
        this.changeDector = changeDector;
        this.tabSwitchFirst = '';
        this.tabSwitchSecond = '';
        this.openTab = 0;
        this.onTabChildClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiTabPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTabPageComponent.prototype.handleActive = /**
     * @return {?}
     */
    function () {
        this.openTab = this.openTab ? 0 : 1;
        this.onTabChildClick.emit(this.openTab);
        this.changeDector.markForCheck();
    };
    UiTabPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-page',
                    template: "<button class=\"ui-tab-page\" [ngClass]=\"{'active':openTab}\" (click)=\"handleActive()\">\n  <div class=\"switch-btn\">\n    <div id = 'btn_switchFirst'>{{tabSwitchFirst}}</div>\n    \n  </div>\n  <div class=\"switch-btn\">\n    <div id = 'btn_switchSecond'>{{tabSwitchSecond}}</div>\n    \n  </div>\n</button>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{height:40px}.ui-tab-page{display:inline-flex;background-color:#007ab3;border:none;outline:0;padding:0;position:relative}.ui-tab-page,.ui-tab-page .switch-btn{border-radius:20px}.ui-tab-page:before{display:block;content:'';width:50%;height:100%;border-radius:20px;background-color:#fff;border:2px solid #007ab3;position:absolute;top:0;left:0;-webkit-transform:translateX(0);transform:translateX(0);transition:.3s}.ui-tab-page .switch-btn{display:flex;flex:1;align-items:center;justify-content:center;height:40px;min-width:90px;opacity:.35;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:18px;letter-spacing:normal;text-align:center;color:#fff;position:relative;transition:.3s;padding:0 10px}.ui-tab-page .switch-btn:first-child{opacity:1;font-weight:700;color:#007ab3}.ui-tab-page.active:before{-webkit-transform:translateX(100%);transform:translateX(100%)}.ui-tab-page.active .switch-btn:first-child{opacity:.35;font-weight:400;color:#fff}.ui-tab-page.active .switch-btn:last-child{opacity:1;font-weight:700;color:#007ab3}"]
                }] }
    ];
    UiTabPageComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiTabPageComponent.propDecorators = {
        tabSwitchFirst: [{ type: Input }],
        tabSwitchSecond: [{ type: Input }],
        openTab: [{ type: Input }],
        onTabChildClick: [{ type: Output }]
    };
    return UiTabPageComponent;
}());
export { UiTabPageComponent };
if (false) {
    /** @type {?} */
    UiTabPageComponent.prototype.tabSwitchFirst;
    /** @type {?} */
    UiTabPageComponent.prototype.tabSwitchSecond;
    /** @type {?} */
    UiTabPageComponent.prototype.openTab;
    /** @type {?} */
    UiTabPageComponent.prototype.onTabChildClick;
    /**
     * @type {?}
     * @private
     */
    UiTabPageComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFiLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWItcGFnZS91aS10YWItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBRTNIO0lBV0UsNEJBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUp6QyxtQkFBYyxHQUFVLEVBQUUsQ0FBQztRQUMzQixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixZQUFPLEdBQVUsQ0FBQyxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNPLENBQUM7Ozs7SUFFdkQscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUNELHlDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixxVUFBMkM7O2lCQUc1Qzs7O2dCQVB3RCxpQkFBaUI7OztpQ0FTdkUsS0FBSztrQ0FDTCxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsTUFBTTs7SUFVVCx5QkFBQztDQUFBLEFBcEJELElBb0JDO1NBZFksa0JBQWtCOzs7SUFDN0IsNENBQW9DOztJQUNwQyw2Q0FBcUM7O0lBQ3JDLHFDQUE0Qjs7SUFDNUIsNkNBQStDOzs7OztJQUNuQywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRhYi1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYi1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFiLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYlBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0YWJTd2l0Y2hGaXJzdDpzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGFiU3dpdGNoU2Vjb25kOnN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBvcGVuVGFiOm51bWJlciA9IDA7XG4gIEBPdXRwdXQoKSBvblRhYkNoaWxkQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBoYW5kbGVBY3RpdmUoKXtcbiAgICB0aGlzLm9wZW5UYWIgPSB0aGlzLm9wZW5UYWI/MDoxO1xuICAgIHRoaXMub25UYWJDaGlsZENsaWNrLmVtaXQodGhpcy5vcGVuVGFiKTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19