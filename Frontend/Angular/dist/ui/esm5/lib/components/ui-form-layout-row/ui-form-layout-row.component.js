/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ElementRef, Renderer } from '@angular/core';
var UiFormLayoutRowComponent = /** @class */ (function () {
    function UiFormLayoutRowComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    UiFormLayoutRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setElementClass(this.el.nativeElement, 'gas-row-block', true);
    };
    UiFormLayoutRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-layout-row',
                    template: "<div class=\"gas-row\" >\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{margin-top:calc(30px - 15px)}:host .gas-row{display:flex;margin-left:-6px;margin-right:-6px;flex-wrap:wrap}:host .gas-row ::ng-deep .nx-formfield__wrapper{padding-bottom:0}:host .gas-row ::ng-deep .nx-formfield__input{border-top:0;padding-top:0}:host(.gas-row-block){display:block;width:100%}"]
                }] }
    ];
    UiFormLayoutRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer }
    ]; };
    return UiFormLayoutRowComponent;
}());
export { UiFormLayoutRowComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutRowComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutRowComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1sYXlvdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktZm9ybS1sYXlvdXQtcm93L3VpLWZvcm0tbGF5b3V0LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQThCLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFFcEg7SUFRRSxrQ0FBb0IsRUFBYyxFQUFVLFFBQWtCO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7OztJQUVuRSwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHlFQUFrRDtvQkFFbEQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7O2dCQVB1RSxVQUFVO2dCQUFDLFFBQVE7O0lBZ0IzRiwrQkFBQztDQUFBLEFBZEQsSUFjQztTQVJZLHdCQUF3Qjs7Ozs7O0lBRXZCLHNDQUFzQjs7Ozs7SUFBRSw0Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxFbGVtZW50UmVmLFJlbmRlcmVyICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1sYXlvdXQtcm93JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0tbGF5b3V0LXJvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tbGF5b3V0LXJvdy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUxheW91dFJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2dhcy1yb3ctYmxvY2snLCB0cnVlKTtcbiAgfVxuXG59XG4iXX0=