/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, ChangeDetectorRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { UiFormRadioGroup } from '../ui-form-radio-group/ui-form-radio-group.directive';
var UiFormRadioComponent = /** @class */ (function () {
    function UiFormRadioComponent(radioGroup, _changeDetector, _renderer) {
        this._changeDetector = _changeDetector;
        this._renderer = _renderer;
        this._checked = false;
        this._value = null;
        this.name = '';
        this.isCheck = false;
        this.isDisable = false;
        this.colorCode = '';
        this.isAllowCancel = true; //for cancel check ( false: can't cancel check )
        this.change = new EventEmitter();
        this.radioGroup = radioGroup;
        this.id = this.generateId();
    }
    Object.defineProperty(UiFormRadioComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newCheckedState = value;
            if (this._checked !== newCheckedState) {
                this.isCheck = true;
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                    this.radioGroup.selected = this;
                }
                else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                    // When unchecking the selected radio button, update the selected radio
                    // property on the group.
                    this.radioGroup.selected = null;
                }
            }
            else {
                this.isCheck = false;
            }
            this.colorSetting();
            this._changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup !== null) {
                    if (!this.checked) {
                        // Update checked when the value changed to match the radio group's value
                        this.checked = this.radioGroup.value === value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormRadioComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newDisabledState = value;
            if (this._disabled !== newDisabledState) {
                this._disabled = newDisabledState;
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            console.log('in radio group');
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            this.name = this.radioGroup.name;
        }
    };
    // 從色碼設定radio的顏色
    // 從色碼設定radio的顏色
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype.colorSetting = 
    // 從色碼設定radio的顏色
    /**
     * @return {?}
     */
    function () {
        if (this.tagBlock) {
            /** @type {?} */
            var tagBlock_ele = this.tagBlock.nativeElement;
            this._renderer.setStyle(tagBlock_ele, 'borderColor', this.colorCode);
            if (this._checked) {
                this._renderer.setStyle(tagBlock_ele, 'backgroundColor', this.colorCode);
                this._renderer.removeStyle(this.tagBlock.nativeElement, 'color');
            }
            else {
                this._renderer.removeStyle(this.tagBlock.nativeElement, 'backgroundColor');
                this._renderer.setStyle(tagBlock_ele, 'color', this.colorCode);
            }
        } // end of tagBlock
    };
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log('color code:', this.tagBlock, this.colorCode);
        this.colorSetting();
    };
    /**
     * @return {?}
     */
    UiFormRadioComponent.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this._changeDetector.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormRadioComponent.prototype._onInputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup.onChange(this.value);
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
            else { // click again to cancel checked
                if (this.isAllowCancel) {
                    this.checked = false;
                    this.radioGroup.value = null;
                    this.radioGroup._emitChangeEvent();
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioComponent.prototype._emitChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        this.change.emit(this._value);
    };
    /**
     * @private
     * @return {?}
     */
    UiFormRadioComponent.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    UiFormRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-radio',
                    template: "<div class=\"form-radio\" [ngClass]=\"disabled ? ' disable': ''\">\n    <label class=\"radio-content-block\" [attr.for]=\"id\">\n        <input class=\"check-input\" type=\"radio\" [id]=\"id\" [value]=\"value\" [name]=\"name\" [checked]=\"checked\" [disabled]=\"disabled\" (click)=\"_onInputChange($event)\">\n        <div class=\"check-block\">\n            <span class=\"check-block-inside\"></span>\n        </div>\n        <span class=\"check-text\">\n            <ng-content></ng-content>\n        </span>\n    </label>\n</div>\n\n",
                    styles: [".form-radio{display:inline-block;vertical-align:middle;margin-right:30px}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-radio ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-radio textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-radio ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-radio ::ng-deep .nx-formfield__flexfield,.form-radio ::ng-deep .select-body-block{min-height:30px}.form-radio ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}.form-radio ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}.form-radio ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}.form-radio .radio-content-block{display:flex;align-items:center;justify-content:center}.form-radio .check-block{border-radius:50%;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:2px solid #007ab3}.form-radio .check-text{display:inline-block;padding-left:12px;font-size:1.25rem}.form-radio .check-input{display:none}.form-radio .check-input:checked+.check-block{background-image:url(assets/img/check-circle.svg);background-size:cover;-webkit-filter:grayscale(0);filter:grayscale(0);border:none}.form-radio .check-input:checked+.check-block .check-block-inside{display:inline-block;width:90%;height:90%;border-radius:50%}.form-radio.disable .check-block{border-color:#c2c2c2}.form-radio.disable .check-input .check-block,.form-radio.disable .check-input .check-block .check-block-inside,.form-radio.disable .check-input:checked+.check-block,.form-radio.disable .check-input:checked+.check-block .check-block-inside{background-color:#c2c2c2}.form-radio.disable .check-text{color:#c2c2c2}"]
                }] }
    ];
    UiFormRadioComponent.ctorParameters = function () { return [
        { type: UiFormRadioGroup, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    UiFormRadioComponent.propDecorators = {
        tagBlock: [{ type: ViewChild, args: ['tagBlock',] }],
        isCheck: [{ type: Input }],
        isDisable: [{ type: Input }],
        colorCode: [{ type: Input }],
        isAllowCancel: [{ type: Input }],
        change: [{ type: Output }],
        checked: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return UiFormRadioComponent;
}());
export { UiFormRadioComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UiFormRadioComponent.prototype._checked;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioComponent.prototype._value;
    /** @type {?} */
    UiFormRadioComponent.prototype.id;
    /**
     * @type {?}
     * @protected
     */
    UiFormRadioComponent.prototype.radioGroup;
    /** @type {?} */
    UiFormRadioComponent.prototype.name;
    /** @type {?} */
    UiFormRadioComponent.prototype.tagBlock;
    /** @type {?} */
    UiFormRadioComponent.prototype.isCheck;
    /** @type {?} */
    UiFormRadioComponent.prototype.isDisable;
    /** @type {?} */
    UiFormRadioComponent.prototype.colorCode;
    /** @type {?} */
    UiFormRadioComponent.prototype.isAllowCancel;
    /** @type {?} */
    UiFormRadioComponent.prototype.change;
    /**
     * @type {?}
     * @protected
     */
    UiFormRadioComponent.prototype._changeDetector;
    /**
     * @type {?}
     * @private
     */
    UiFormRadioComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tcmFkaW8vdWktZm9ybS1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQTBCLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDckwsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFeEY7SUFvRkUsOEJBQ2MsVUFBNEIsRUFDOUIsZUFBa0MsRUFDcEMsU0FBb0I7UUFEbEIsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQ3BDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFqRnBCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFNUIsV0FBTSxHQUFRLElBQUksQ0FBQztRQUczQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBS1QsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsa0JBQWEsR0FBWSxJQUFJLENBQUMsQ0FBQyxnREFBZ0Q7UUFFOUUsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBbUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBcEVELHNCQUNJLHlDQUFPOzs7O1FBRFgsY0FDeUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDaEQsVUFBWSxLQUFjOztnQkFDbEIsZUFBZSxHQUFHLEtBQUs7WUFDN0Is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Q0FBdUM7O0lBQ3ZDLG9DQUFrQjs7SUFFbEIsd0NBQTRDOztJQUc1Qyx1Q0FBa0M7O0lBQ2xDLHlDQUFvQzs7SUFDcEMseUNBQWdDOztJQUNoQyw2Q0FBdUM7O0lBRXZDLHNDQUF5RDs7Ozs7SUFpRXZELCtDQUE0Qzs7Ozs7SUFDNUMseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFJlbmRlcmVyMiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlGb3JtUmFkaW9Hcm91cCB9IGZyb20gJy4uL3VpLWZvcm0tcmFkaW8tZ3JvdXAvdWktZm9ybS1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS1yYWRpby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybVJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF92YWx1ZTogYW55ID0gbnVsbDtcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHByb3RlY3RlZCByYWRpb0dyb3VwOiBVaUZvcm1SYWRpb0dyb3VwO1xuICBuYW1lOiBzdHJpbmcgPSAnJztcblxuICBAVmlld0NoaWxkKCd0YWdCbG9jaycpIHRhZ0Jsb2NrOiBFbGVtZW50UmVmO1xuXG5cbiAgQElucHV0KCkgaXNDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3JDb2RlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaXNBbGxvd0NhbmNlbDogYm9vbGVhbiA9IHRydWU7IC8vZm9yIGNhbmNlbCBjaGVjayAoIGZhbHNlOiBjYW4ndCBjYW5jZWwgY2hlY2sgKVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7IH1cbiAgc2V0IGNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fY2hlY2tlZCAhPT0gbmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICBcblxuICAgICAgdGhpcy5pc0NoZWNrID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XG4gICAgICBpZiAobmV3Q2hlY2tlZFN0YXRlICYmIHRoaXMucmFkaW9Hcm91cCAmJiB0aGlzLnJhZGlvR3JvdXAudmFsdWUgIT09IHRoaXMudmFsdWUpIHtcblxuICAgICAgICB0aGlzLnJhZGlvR3JvdXAuc2VsZWN0ZWQgPSB0aGlzO1xuXG4gICAgICB9IGVsc2UgaWYgKCFuZXdDaGVja2VkU3RhdGUgJiYgdGhpcy5yYWRpb0dyb3VwICYmIHRoaXMucmFkaW9Hcm91cC52YWx1ZSA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAvLyBXaGVuIHVuY2hlY2tpbmcgdGhlIHNlbGVjdGVkIHJhZGlvIGJ1dHRvbiwgdXBkYXRlIHRoZSBzZWxlY3RlZCByYWRpb1xuICAgICAgICAvLyBwcm9wZXJ0eSBvbiB0aGUgZ3JvdXAuXG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzQ2hlY2sgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jb2xvclNldHRpbmcoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMucmFkaW9Hcm91cCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgIC8vIFVwZGF0ZSBjaGVja2VkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZWQgdG8gbWF0Y2ggdGhlIHJhZGlvIGdyb3VwJ3MgdmFsdWVcbiAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnJhZGlvR3JvdXAudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA9IHRoaXM7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwgKHRoaXMucmFkaW9Hcm91cCAhPT0gbnVsbCAmJiB0aGlzLnJhZGlvR3JvdXAuZGlzYWJsZWQpO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld0Rpc2FibGVkU3RhdGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IG5ld0Rpc2FibGVkU3RhdGUpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3RGlzYWJsZWRTdGF0ZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG5cblxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcmFkaW9Hcm91cDogVWlGb3JtUmFkaW9Hcm91cCwgXG4gICAgcHJvdGVjdGVkIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmFkaW9Hcm91cCA9IHJhZGlvR3JvdXA7XG4gICAgdGhpcy5pZCA9IHRoaXMuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgY29uc29sZS5sb2coJ2luIHJhZGlvIGdyb3VwJyk7XG4gICAgICAvLyBJZiB0aGUgcmFkaW8gaXMgaW5zaWRlIGEgcmFkaW8gZ3JvdXAsIGRldGVybWluZSBpZiBpdCBzaG91bGQgYmUgY2hlY2tlZFxuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlID09PSB0aGlzLl92YWx1ZTtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIOW+nuiJsueivOioreWumnJhZGlv55qE6aGP6ImyXG4gIGNvbG9yU2V0dGluZygpe1xuICAgIGlmKHRoaXMudGFnQmxvY2spe1xuICAgICAgbGV0IHRhZ0Jsb2NrX2VsZSA9IHRoaXMudGFnQmxvY2submF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRhZ0Jsb2NrX2VsZSwgJ2JvcmRlckNvbG9yJywgdGhpcy5jb2xvckNvZGUpO1xuICAgICAgaWYodGhpcy5fY2hlY2tlZCl7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRhZ0Jsb2NrX2VsZSwgJ2JhY2tncm91bmRDb2xvcicsIHRoaXMuY29sb3JDb2RlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWdCbG9jay5uYXRpdmVFbGVtZW50LCAnY29sb3InKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFnQmxvY2submF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmRDb2xvcicpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0YWdCbG9ja19lbGUsICdjb2xvcicsIHRoaXMuY29sb3JDb2RlKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSAvLyBlbmQgb2YgdGFnQmxvY2tcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIGNvbnNvbGUubG9nKCdjb2xvciBjb2RlOicsdGhpcy50YWdCbG9jayx0aGlzLmNvbG9yQ29kZSk7XG4gICAgdGhpcy5jb2xvclNldHRpbmcoKTsgIFxuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9vbklucHV0Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgZ3JvdXBWYWx1ZUNoYW5nZWQgPSB0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy52YWx1ZSAhPT0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlO1xuICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG5cbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICB0aGlzLnJhZGlvR3JvdXAub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICBpZiAoZ3JvdXBWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7IC8vIGNsaWNrIGFnYWluIHRvIGNhbmNlbCBjaGVja2VkXG4gICAgICAgIGlmKHRoaXMuaXNBbGxvd0NhbmNlbCl7XG4gICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnZhbHVlID0gbnVsbDsgIFxuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSWQoKSB7XG4gICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMik7XG4gIH1cblxufVxuIl19