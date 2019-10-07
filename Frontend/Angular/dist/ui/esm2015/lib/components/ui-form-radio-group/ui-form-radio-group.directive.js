/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Output, EventEmitter, ContentChildren, Input, ChangeDetectorRef, QueryList } from '@angular/core';
import { UiFormRadioComponent } from '../ui-form-radio/ui-form-radio.component';
export class UiFormRadioGroup {
    /**
     * @param {?} _changeDetector
     */
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        this._selected = null;
        this._isInitialized = false;
        this._disabled = false;
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.nxValueChange = new EventEmitter();
        this.change = new EventEmitter();
        this.name = this.generateId();
    }
    /**
     * @return {?}
     */
    get nxValue() { return this._value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set nxValue(newValue) {
        this.value = newValue;
        this._changeDetector.markForCheck();
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    /**
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        this._markRadiosForCheck();
    }
    /**
     * @return {?}
     */
    get name() { return this._name; }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateSelectedRadioFromValue() {
        // If the value already matches the selected radio, do nothing.
        /** @type {?} */
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateRadioButtonNames() {
        console.log('update radio names');
        console.log('this.name:', this.name);
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            radio => {
                radio.name = this.name;
            }));
        }
    }
    /**
     * @return {?}
     */
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.nxValueChange.emit(this._value);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onChange(val) {
        this._value = val;
    }
    /**
     * @return {?}
     */
    _markRadiosForCheck() {
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            radio => radio._markForCheck()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 12);
    }
}
UiFormRadioGroup.decorators = [
    { type: Directive, args: [{
                selector: 'app-ui-form-radio-group',
                host: {
                    '[style.display]': '"inline-block"',
                    '[style.width]': '"100%"',
                }
            },] }
];
UiFormRadioGroup.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiFormRadioGroup.propDecorators = {
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    _radios: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => UiFormRadioComponent)), { descendants: true },] }],
    change: [{ type: Output }],
    value: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiFormRadioGroup.prototype._value;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioGroup.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioGroup.prototype._isInitialized;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioGroup.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioGroup.prototype._name;
    /** @type {?} */
    UiFormRadioGroup.prototype.onTouched;
    /** @type {?} */
    UiFormRadioGroup.prototype.nxValueChange;
    /** @type {?} */
    UiFormRadioGroup.prototype._radios;
    /** @type {?} */
    UiFormRadioGroup.prototype.change;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioGroup.prototype._changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1yYWRpby1ncm91cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tcmFkaW8tZ3JvdXAvdWktZm9ybS1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFvQixNQUFNLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BKLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBVWhGLE1BQU07Ozs7SUFtREYsWUFBb0IsZUFBa0M7UUFBbEMsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBakQ5QyxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHNUIsY0FBUzs7O1FBQWMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBUTlCLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLdEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBZ0NyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBNUNELElBQ0ksT0FBTyxLQUFVLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQzFDLElBQUksT0FBTyxDQUFDLFFBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBT0QsSUFDSSxLQUFLLEtBQVUsT0FBTyxJQUFJLENBQUMsTUFBTSxD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LE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBUTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDZixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQzs7Ozs7SUFDTyxVQUFVO1FBQ2QsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQWxISixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsSUFBSSxFQUFFO29CQUNGLGlCQUFpQixFQUFFLGdCQUFnQjtvQkFDbkMsZUFBZSxFQUFFLFFBQVE7aUJBQzVCO2FBQ0o7OztZQVYrRixpQkFBaUI7OztzQkFvQjVHLEtBQUs7NEJBTUwsTUFBTTtzQkFDTixlQUFlLFNBQUMsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3FCQUk3RSxNQUFNO29CQUNOLEtBQUs7dUJBVUwsS0FBSzt1QkFRTCxLQUFLOzs7Ozs7O0lBdENOLGtDQUFlOzs7OztJQUNmLHFDQUE4Qjs7Ozs7SUFDOUIsMENBQXdDOzs7OztJQUN4QyxxQ0FBbUM7Ozs7O0lBQ25DLGlDQUFjOztJQUVkLHFDQUF3Qzs7SUFReEMseUNBQWdFOztJQUNoRSxtQ0FDeUM7O0lBR3pDLGtDQUF5RDs7Ozs7SUErQjdDLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpRm9ybVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktZm9ybS1yYWRpby91aS1mb3JtLXJhZGlvLmNvbXBvbmVudCc7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1yYWRpby1ncm91cCcsXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLmRpc3BsYXldJzogJ1wiaW5saW5lLWJsb2NrXCInLFxuICAgICAgICAnW3N0eWxlLndpZHRoXSc6ICdcIjEwMCVcIicsXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1SYWRpb0dyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJpdmF0ZSBfdmFsdWU7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfbmFtZTtcblxuICAgIHB1YmxpYyBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHsgfTtcblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IG54VmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gICAgc2V0IG54VmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBAT3V0cHV0KCkgbnhWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFVpRm9ybVJhZGlvQ29tcG9uZW50KSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIF9yYWRpb3M6IFF1ZXJ5TGlzdDxVaUZvcm1SYWRpb0NvbXBvbmVudD47XG5cblxuICAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICAgIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2VsZWN0ZWRSYWRpb0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cbiAgICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IFVpRm9ybVJhZGlvQ29tcG9uZW50IHwgbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWQgPyBzZWxlY3RlZC52YWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuX2NoZWNrU2VsZWN0ZWRSYWRpb0J1dHRvbigpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fbWFya1JhZGlvc0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJhZGlvQnV0dG9uTmFtZXMoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfY2hlY2tTZWxlY3RlZFJhZGlvQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgIXRoaXMuX3NlbGVjdGVkLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlU2VsZWN0ZWRSYWRpb0Zyb21WYWx1ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGFscmVhZHkgbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcmFkaW8sIGRvIG5vdGhpbmcuXG4gICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQgIT09IG51bGwgJiYgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPT09IHRoaXMuX3ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLl9yYWRpb3MgJiYgIWlzQWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRoaXMudmFsdWUgPT09IHJhZGlvLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gcmFkaW87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVSYWRpb0J1dHRvbk5hbWVzKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlIHJhZGlvIG5hbWVzJylcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubmFtZTonLCB0aGlzLm5hbWUpO1xuICAgICAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICAgICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgICAgICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2VtaXRDaGFuZ2VFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIF9tYXJrUmFkaW9zRm9yQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHJhZGlvLl9tYXJrRm9yQ2hlY2soKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCkge1xuICAgICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEyKTtcbiAgICB9XG59Il19