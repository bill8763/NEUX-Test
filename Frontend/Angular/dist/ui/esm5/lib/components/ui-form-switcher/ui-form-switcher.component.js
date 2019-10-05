/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var UiFormSwitcherComponent = /** @class */ (function () {
    function UiFormSwitcherComponent(changeDector) {
        this.changeDector = changeDector;
        this.nxValueChange = new EventEmitter();
        this.labelTxt = '';
        this._isChecked = false;
    }
    Object.defineProperty(UiFormSwitcherComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isChecked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isChecked = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormSwitcherComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(UiFormSwitcherComponent.prototype, "isChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isChecked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isChecked = value;
            this.changeDector.markForCheck();
            if (this.nxValueChange)
                this.nxValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    UiFormSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-switcher',
                    template: "<nx-switcher [nxBig]='true' [(ngModel)]=\"isChecked\" [attr.hasTitle]=\"labelTxt !== ''? '': null\">{{ labelTxt }}</nx-switcher>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host [hasTitle] ::ng-deep :not(.is-swapped) .nx-switcher__toggle{margin-right:12px!important}:host ::ng-deep :not(.is-swapped) .nx-switcher__toggle{margin-right:0!important}:host ::ng-deep .is-checked .nx-switcher__label .nx-switcher__toggle{background-color:#3da556!important}:host ::ng-deep .is-checked .nx-switcher__label .nx-switcher__toggle .nx-switcher__dot nx-icon{opacity:0}:host ::ng-deep .nx-switcher__label .nx-switcher__toggle{background-color:#c2c2c2!important}"]
                }] }
    ];
    UiFormSwitcherComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormSwitcherComponent.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        labelTxt: [{ type: Input }]
    };
    return UiFormSwitcherComponent;
}());
export { UiFormSwitcherComponent };
if (false) {
    /** @type {?} */
    UiFormSwitcherComponent.prototype.nxValueChange;
    /** @type {?} */
    UiFormSwitcherComponent.prototype.labelTxt;
    /**
     * @type {?}
     * @private
     */
    UiFormSwitcherComponent.prototype._isChecked;
    /**
     * @type {?}
     * @private
     */
    UiFormSwitcherComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tc3dpdGNoZXIvdWktZm9ybS1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0g7SUFrQkUsaUNBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUp4QyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFPdkIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUxrQixDQUFDO0lBWHZELHNCQUNJLDRDQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFDRCxVQUFZLEdBQVk7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7Ozs7SUFVRCwwQ0FBUTs7O0lBQVI7SUFDQSxDQUFDO0lBR0Qsc0JBQVcsOENBQVM7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFDRCxVQUFxQixLQUFjO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYTtnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BTkE7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsOElBQWdEO29CQUVoRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7Z0JBUGlGLGlCQUFpQjs7OzBCQVNoRyxLQUFLO2dDQU9MLE1BQU07MkJBRU4sS0FBSzs7SUFtQlIsOEJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQTdCWSx1QkFBdUI7OztJQVFsQyxnREFBZ0U7O0lBRWhFLDJDQUErQjs7Ozs7SUFPL0IsNkNBQW9DOzs7OztJQUx4QiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tc3dpdGNoZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1Td2l0Y2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrZWQ7XG4gIH1cbiAgc2V0IG54VmFsdWUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNDaGVja2VkID0gdmFsO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBsYWJlbFR4dDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBnZXQgaXNDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrZWQ7XG4gIH1cbiAgcHVibGljIHNldCBpc0NoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAodGhpcy5ueFZhbHVlQ2hhbmdlKVxuICAgICAgdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cblxufVxuIl19