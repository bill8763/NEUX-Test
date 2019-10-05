/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
export class UiFormSearchComponent {
    /**
     * @param {?} changeDetecor
     */
    constructor(changeDetecor) {
        this.changeDetecor = changeDetecor;
        this.name = '';
        this.placeholder = '';
        this.isDisable = false;
        this.nxValueChange = new EventEmitter();
        this._value = '';
    }
    /**
     * @return {?}
     */
    get nxValue() { return this.value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set nxValue(newValue) {
        this._value = newValue;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.changeDetecor.markForCheck();
        if (this.nxValueChange)
            this.nxValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiFormSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-search',
                template: "<div class=\"search-block\" >\n    <div class=\"icon-block\">\n        <nx-icon name=\"product-search\" size=\"s\"></nx-icon>\n    </div>\n    <div class=\"input-block\">\n        <app-ui-form-input [name]=\"name\" [placeholder]=\"placeholder\" [isDisable]=\"isDisable\" [(nxValue)]=\"value\"></app-ui-form-input>\n    </div>\n</div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.search-block{display:flex;width:100%;max-width:100%;align-items:center;padding-bottom:20px}.search-block .icon-block{display:inline-block;width:30px;padding-right:5px}.search-block .icon-block ::ng-deep nx-icon{color:#767676;background-color:transparent;border:none;line-height:normal;font-size:24px;width:24px;height:24px;font-weight:700}.search-block ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.search-block ::ng-deep app-ui-form-input{width:100%}.search-block ::ng-deep app-ui-form-input .nx-formfield__flexfield{width:100%}.search-block ::ng-deep app-ui-form-input .nx-formfield__input{width:100%;border:none}.search-block .input-block{width:calc(100% - 30px);display:flex;flex:1 0 0}"]
            }] }
];
UiFormSearchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiFormSearchComponent.propDecorators = {
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisable: [{ type: Input }],
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiFormSearchComponent.prototype.name;
    /** @type {?} */
    UiFormSearchComponent.prototype.placeholder;
    /** @type {?} */
    UiFormSearchComponent.prototype.isDisable;
    /** @type {?} */
    UiFormSearchComponent.prototype.nxValueChange;
    /**
     * @type {?}
     * @private
     */
    UiFormSearchComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    UiFormSearchComponent.prototype.changeDetecor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLXNlYXJjaC91aS1mb3JtLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVOUcsTUFBTTs7OztJQXlCSixZQUFvQixhQUFnQztRQUFoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUF4QjNDLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQU0xQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELFdBQU0sR0FBVyxFQUFFLENBQUM7SUFjNEIsQ0FBQzs7OztJQXJCekQsSUFDSSxPQUFPLEtBQVUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDekMsSUFBSSxPQUFPLENBQUMsUUFBYTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBS0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLGFBQWE7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQU1ELFFBQVE7SUFDUixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHlWQUE4Qzs7YUFFL0M7OztZQVRvRSxpQkFBaUI7OzttQkFXbkYsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzs0QkFLTCxNQUFNOzs7O0lBUlAscUNBQTJCOztJQUMzQiw0Q0FBa0M7O0lBQ2xDLDBDQUFvQzs7SUFNcEMsOENBQWdFOzs7OztJQUVoRSx1Q0FBNEI7Ozs7O0lBY2hCLDhDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnZhbHVlOyB9XG4gIHNldCBueFZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWNvci5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAodGhpcy5ueFZhbHVlQ2hhbmdlKVxuICAgICAgdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY29yOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19