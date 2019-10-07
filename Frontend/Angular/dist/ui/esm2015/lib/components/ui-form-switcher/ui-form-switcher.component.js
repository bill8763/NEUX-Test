/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
export class UiFormSwitcherComponent {
    /**
     * @param {?} changeDector
     */
    constructor(changeDector) {
        this.changeDector = changeDector;
        this.nxValueChange = new EventEmitter();
        this.labelTxt = '';
        this._isChecked = false;
    }
    /**
     * @return {?}
     */
    get nxValue() {
        return this._isChecked;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set nxValue(val) {
        this._isChecked = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get isChecked() {
        return this._isChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isChecked(value) {
        this._isChecked = value;
        this.changeDector.markForCheck();
        if (this.nxValueChange)
            this.nxValueChange.emit(value);
    }
}
UiFormSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-switcher',
                template: "<nx-switcher [nxBig]='true' [(ngModel)]=\"isChecked\" [attr.hasTitle]=\"labelTxt !== ''? '': null\">{{ labelTxt }}</nx-switcher>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host [hasTitle] ::ng-deep :not(.is-swapped) .nx-switcher__toggle{margin-right:12px!important}:host ::ng-deep :not(.is-swapped) .nx-switcher__toggle{margin-right:0!important}:host ::ng-deep .is-checked .nx-switcher__label .nx-switcher__toggle{background-color:#3da556!important}:host ::ng-deep .is-checked .nx-switcher__label .nx-switcher__toggle .nx-switcher__dot nx-icon{opacity:0}:host ::ng-deep .nx-switcher__label .nx-switcher__toggle{background-color:#c2c2c2!important}"]
            }] }
];
UiFormSwitcherComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiFormSwitcherComponent.propDecorators = {
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    labelTxt: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tc3dpdGNoZXIvdWktZm9ybS1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0gsTUFBTTs7OztJQVlKLFlBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUp4QyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZELGFBQVEsR0FBVyxFQUFFLENBQUM7UUFPdkIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUxrQixDQUFDOzs7O0lBWHZELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEdBQVk7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQzs7OztJQU9ELFFBQVE7SUFDUixDQUFDOzs7O0lBR0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsOElBQWdEO2dCQUVoRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7OztZQVBpRixpQkFBaUI7OztzQkFTaEcsS0FBSzs0QkFPTCxNQUFNO3VCQUVOLEtBQUs7Ozs7SUFGTixnREFBZ0U7O0lBRWhFLDJDQUErQjs7Ozs7SUFPL0IsNkNBQW9DOzs7OztJQUx4QiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tc3dpdGNoZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1Td2l0Y2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrZWQ7XG4gIH1cbiAgc2V0IG54VmFsdWUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNDaGVja2VkID0gdmFsO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBsYWJlbFR4dDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBnZXQgaXNDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrZWQ7XG4gIH1cbiAgcHVibGljIHNldCBpc0NoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAodGhpcy5ueFZhbHVlQ2hhbmdlKVxuICAgICAgdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cblxufVxuIl19