/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
var UiFormSearchComponent = /** @class */ (function () {
    function UiFormSearchComponent(changeDetecor) {
        this.changeDetecor = changeDetecor;
        this.name = '';
        this.placeholder = '';
        this.isDisable = false;
        this.nxValueChange = new EventEmitter();
        this._value = '';
    }
    Object.defineProperty(UiFormSearchComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormSearchComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.changeDetecor.markForCheck();
            if (this.nxValueChange)
                this.nxValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiFormSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-search',
                    template: "<div class=\"search-block\" >\n    <div class=\"icon-block\">\n        <nx-icon name=\"product-search\" size=\"s\"></nx-icon>\n    </div>\n    <div class=\"input-block\">\n        <app-ui-form-input [name]=\"name\" [placeholder]=\"placeholder\" [isDisable]=\"isDisable\" [(nxValue)]=\"value\"></app-ui-form-input>\n    </div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.search-block{display:flex;width:100%;max-width:100%;align-items:center;padding-bottom:20px}.search-block .icon-block{display:inline-block;width:30px;padding-right:5px}.search-block .icon-block ::ng-deep nx-icon{color:#767676;background-color:transparent;border:none;line-height:normal;font-size:24px;width:24px;height:24px;font-weight:700}.search-block ::ng-deep .nx-formfield__wrapper{padding-bottom:0}.search-block ::ng-deep app-ui-form-input{width:100%}.search-block ::ng-deep app-ui-form-input .nx-formfield__flexfield{width:100%}.search-block ::ng-deep app-ui-form-input .nx-formfield__input{width:100%;border:none}.search-block .input-block{width:calc(100% - 30px);display:flex;flex:1 0 0}"]
                }] }
    ];
    UiFormSearchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormSearchComponent.propDecorators = {
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        isDisable: [{ type: Input }],
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }]
    };
    return UiFormSearchComponent;
}());
export { UiFormSearchComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLXNlYXJjaC91aS1mb3JtLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUc7SUE4QkUsK0JBQW9CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQXhCM0MsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBTTFCLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQWM0QixDQUFDO0lBckJ6RCxzQkFDSSwwQ0FBTzs7OztRQURYLGNBQ3FCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3pDLFVBQVksUUFBYTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FId0M7SUFRekMsc0JBQVcsd0NBQUs7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixLQUFhO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsSUFBSSxJQUFJLENBQUMsYUFBYTtnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BTkE7Ozs7SUFZRCx3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHlWQUE4Qzs7aUJBRS9DOzs7Z0JBVG9FLGlCQUFpQjs7O3VCQVduRixLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUtMLE1BQU07O0lBcUJULDRCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E5QlkscUJBQXFCOzs7SUFDaEMscUNBQTJCOztJQUMzQiw0Q0FBa0M7O0lBQ2xDLDBDQUFvQzs7SUFNcEMsOENBQWdFOzs7OztJQUVoRSx1Q0FBNEI7Ozs7O0lBY2hCLDhDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnZhbHVlOyB9XG4gIHNldCBueFZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWNvci5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAodGhpcy5ueFZhbHVlQ2hhbmdlKVxuICAgICAgdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY29yOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19