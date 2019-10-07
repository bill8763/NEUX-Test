/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Output, EventEmitter, ContentChildren, Input, ChangeDetectorRef, QueryList } from '@angular/core';
import { UiFormRadioComponent } from '../ui-form-radio/ui-form-radio.component';
var UiFormRadioGroup = /** @class */ (function () {
    function UiFormRadioGroup(_changeDetector) {
        this._changeDetector = _changeDetector;
        this._selected = null;
        this._isInitialized = false;
        this._disabled = false;
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.nxValueChange = new EventEmitter();
        this.change = new EventEmitter();
        this.name = this.generateId();
    }
    Object.defineProperty(UiFormRadioGroup.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.value = newValue;
            this._changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
                this._updateSelectedRadioFromValue();
                this._checkSelectedRadioButton();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this._checkSelectedRadioButton();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioGroup.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this._updateRadioButtonNames();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype._checkSelectedRadioButton = /**
     * @return {?}
     */
    function () {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioGroup.prototype._updateSelectedRadioFromValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // If the value already matches the selected radio, do nothing.
        /** @type {?} */
        var isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioGroup.prototype._updateRadioButtonNames = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('update radio names');
        console.log('this.name:', this.name);
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.name = _this.name;
            }));
        }
    };
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype._emitChangeEvent = /**
     * @return {?}
     */
    function () {
        if (this._isInitialized) {
            this.nxValueChange.emit(this._value);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    UiFormRadioGroup.prototype.onChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._value = val;
    };
    /**
     * @return {?}
     */
    UiFormRadioGroup.prototype._markRadiosForCheck = /**
     * @return {?}
     */
    function () {
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio._markForCheck(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioGroup.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    UiFormRadioGroup.decorators = [
        { type: Directive, args: [{
                    selector: 'app-ui-form-radio-group',
                    host: {
                        '[style.display]': '"inline-block"',
                        '[style.width]': '"100%"',
                    }
                },] }
    ];
    UiFormRadioGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiFormRadioGroup.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        _radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return UiFormRadioComponent; })), { descendants: true },] }],
        change: [{ type: Output }],
        value: [{ type: Input }],
        selected: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return UiFormRadioGroup;
}());
export { UiFormRadioGroup };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1yYWRpby1ncm91cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tcmFkaW8tZ3JvdXAvdWktZm9ybS1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFvQixNQUFNLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BKLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR2hGO0lBMERJLDBCQUFvQixlQUFrQztRQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFqRDlDLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFDdEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUc1QixjQUFTOzs7UUFBYyxjQUFRLENBQUMsRUFBQztRQVE5QixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWdDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQTVDRCxzQkFDSSxxQ0FBTzs7OztRQURYLGNBQ3FCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQzFDLFVBQVksUUFBYTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUM7OztPQUp5QztJQVcxQyxzQkFDSSxtQ0FBSzs7OztRQURULGNBQ21CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FB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Ozs7O0lBQ25DLGlDQUFjOztJQUVkLHFDQUF3Qzs7SUFReEMseUNBQWdFOztJQUNoRSxtQ0FDeUM7O0lBR3pDLGtDQUF5RDs7Ozs7SUErQjdDLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpRm9ybVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktZm9ybS1yYWRpby91aS1mb3JtLXJhZGlvLmNvbXBvbmVudCc7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1yYWRpby1ncm91cCcsXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLmRpc3BsYXldJzogJ1wiaW5saW5lLWJsb2NrXCInLFxuICAgICAgICAnW3N0eWxlLndpZHRoXSc6ICdcIjEwMCVcIicsXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1SYWRpb0dyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJpdmF0ZSBfdmFsdWU7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfbmFtZTtcblxuICAgIHB1YmxpYyBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHsgfTtcblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IG54VmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gICAgc2V0IG54VmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBAT3V0cHV0KCkgbnhWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFVpRm9ybVJhZGlvQ29tcG9uZW50KSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIF9yYWRpb3M6IFF1ZXJ5TGlzdDxVaUZvcm1SYWRpb0NvbXBvbmVudD47XG5cblxuICAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICAgIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2VsZWN0ZWRSYWRpb0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cbiAgICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IFVpRm9ybVJhZGlvQ29tcG9uZW50IHwgbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWQgPyBzZWxlY3RlZC52YWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuX2NoZWNrU2VsZWN0ZWRSYWRpb0J1dHRvbigpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fbWFya1JhZGlvc0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJhZGlvQnV0dG9uTmFtZXMoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfY2hlY2tTZWxlY3RlZFJhZGlvQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgIXRoaXMuX3NlbGVjdGVkLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlU2VsZWN0ZWRSYWRpb0Zyb21WYWx1ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGFscmVhZHkgbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcmFkaW8sIGRvIG5vdGhpbmcuXG4gICAgICAgIGNvbnN0IGlzQWxyZWFkeVNlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQgIT09IG51bGwgJiYgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPT09IHRoaXMuX3ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLl9yYWRpb3MgJiYgIWlzQWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRoaXMudmFsdWUgPT09IHJhZGlvLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gcmFkaW87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVSYWRpb0J1dHRvbk5hbWVzKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlIHJhZGlvIG5hbWVzJylcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubmFtZTonLCB0aGlzLm5hbWUpO1xuICAgICAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICAgICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgICAgICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2VtaXRDaGFuZ2VFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIF9tYXJrUmFkaW9zRm9yQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHJhZGlvLl9tYXJrRm9yQ2hlY2soKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCkge1xuICAgICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEyKTtcbiAgICB9XG59Il19