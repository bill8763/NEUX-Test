/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class UiFormCheckbox2Component {
    constructor() {
        this.nxValueChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.isDisable = false;
        this._isCheckSingle = false; // if true: only one checkbox no padding; false : checkbox has padding-right
        this.classCheckboxSingle = '';
        this.id = this.generateId();
    }
    /**
     * @return {?}
     */
    get nxValue() { return this.checkedValue; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set nxValue(newValue) {
        this.checkedValue = newValue;
    }
    // if true: only one checkbox no padding; false : checkbox has padding-right
    /**
     * @return {?}
     */
    get isCheckSingle() {
        return this._isCheckSingle;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isCheckSingle(val) {
        this._isCheckSingle = val;
        this.classCheckboxSingle = this._isCheckSingle ? 'style-single' : '';
    }
    /**
     * @return {?}
     */
    get checked() {
        return this.checkedValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        // console.log(val);
        // console.log(typeof (val));
        this.checkedValue = val;
        if (this.nxValueChange) {
            this.nxValueChange.emit(val);
        }
        this.onClick.emit();
    }
    /**
     * @private
     * @return {?}
     */
    generateId() {
        // console.debug('_' + Math.random().toString(36).substr(2, 12));
        return '_' + Math.random().toString(36).substr(2, 12);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkedValue = this.nxValue ? true : false;
        this.classCheckboxSingle = this.isCheckSingle ? 'style-single' : '';
    }
}
UiFormCheckbox2Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-checkbox2',
                template: "<div class=\"checkbox-block type-filter\">\n  <label [for]='id'>\n    <input class=\"check-native\" type=\"checkbox\" [(ngModel)]=\"checked\" [disabled]=\"false\" [id]=\"id\">\n    <span class=\"checkbox-style\">\n      <span class=\"checked\">\n        <span class=\"choose-tag\">\n          <ng-content select=\"[checkboxText=style1]\"></ng-content>\n        </span>\n      </span>\n    </span>\n  </label>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.checkbox-block{display:inline-block;margin-right:10px;margin-bottom:10px}.checkbox-block.type-filter .checkbox-style{text-align:center;display:inline-block;min-width:70px;padding:8px 6px;border:1px solid #c2c2c2;border-radius:3px;color:#c2c2c2}.checkbox-block.type-filter .checkbox-style .choose-tag{font-size:.75rem}.checkbox-block.type-filter .check-native{display:none}.checkbox-block.type-filter .check-native:checked+.checkbox-style{border:1px solid #007ab3;color:#fff;background-color:#007ab3}.checkbox-block.type-blue .checkbox-style{border:1px solid #007ab3;color:#007ab3}.checkbox-block.type-blue .check-native:checked{border:1px solid #007ab3;color:#fff;background-color:#007ab3}"]
            }] }
];
UiFormCheckbox2Component.ctorParameters = () => [];
UiFormCheckbox2Component.propDecorators = {
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    onClick: [{ type: Output }],
    isDisable: [{ type: Input }],
    isCheckSingle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiFormCheckbox2Component.prototype.nxValueChange;
    /** @type {?} */
    UiFormCheckbox2Component.prototype.onClick;
    /** @type {?} */
    UiFormCheckbox2Component.prototype.isDisable;
    /**
     * @type {?}
     * @private
     */
    UiFormCheckbox2Component.prototype._isCheckSingle;
    /** @type {?} */
    UiFormCheckbox2Component.prototype.checkedValue;
    /** @type {?} */
    UiFormCheckbox2Component.prototype.id;
    /** @type {?} */
    UiFormCheckbox2Component.prototype.classCheckboxSingle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1jaGVja2JveDIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWNoZWNrYm94Mi91aS1mb3JtLWNoZWNrYm94Mi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTTtJQTZDSjtRQXZDVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUM1QixtQkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFFLDRFQUE0RTtRQWF0Ryx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUF3QjlCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUE5Q0QsSUFDSSxPQUFPLEtBQVUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDaEQsSUFBSSxPQUFPLENBQUMsUUFBYTtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUMvQixDQUFDOzs7OztJQUtELElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELElBQUksYUFBYSxDQUFDLEdBQUc7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFPRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxHQUFHO1FBQ2Isb0JBQW9CO1FBQ3BCLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixpRUFBaUU7UUFDakUsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckUsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw4YUFBaUQ7Z0JBRWpELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7OztzQkFFRSxLQUFLOzRCQUtMLE1BQU07c0JBQ04sTUFBTTt3QkFDTixLQUFLOzRCQUVMLEtBQUs7Ozs7SUFKTixpREFBNkM7O0lBQzdDLDJDQUF1Qzs7SUFDdkMsNkNBQW9DOzs7OztJQUNwQyxrREFBK0I7O0lBVy9CLGdEQUE2Qjs7SUFDN0Isc0NBQWtCOztJQUNsQix1REFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1jaGVja2JveDInLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1jaGVja2JveDIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLWNoZWNrYm94Mi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUNoZWNrYm94MkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLmNoZWNrZWRWYWx1ZTsgfVxuICBzZXQgbnhWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5jaGVja2VkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuICBAT3V0cHV0KCkgbnhWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0NoZWNrU2luZ2xlID0gZmFsc2U7ICAvLyBpZiB0cnVlOiBvbmx5IG9uZSBjaGVja2JveCBubyBwYWRkaW5nOyBmYWxzZSA6IGNoZWNrYm94IGhhcyBwYWRkaW5nLXJpZ2h0XG4gIEBJbnB1dCgpIFxuICBnZXQgaXNDaGVja1NpbmdsZSgpe1xuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrU2luZ2xlO1xuICB9XG4gIHNldCBpc0NoZWNrU2luZ2xlKHZhbCl7XG4gICAgdGhpcy5faXNDaGVja1NpbmdsZSA9IHZhbDtcbiAgICB0aGlzLmNsYXNzQ2hlY2tib3hTaW5nbGUgPSAgdGhpcy5faXNDaGVja1NpbmdsZSA/ICdzdHlsZS1zaW5nbGUnOiAnJztcbiAgfVxuXG5cbiAgcHVibGljIGNoZWNrZWRWYWx1ZTogYm9vbGVhbjtcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0NoZWNrYm94U2luZ2xlID0gJyc7XG5cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZFZhbHVlO1xuICB9XG5cbiAgc2V0IGNoZWNrZWQodmFsKSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHZhbCkpO1xuICAgIHRoaXMuY2hlY2tlZFZhbHVlID0gdmFsO1xuICAgIGlmICh0aGlzLm54VmFsdWVDaGFuZ2UpIHtcbiAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHZhbCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVJZCgpIHtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMikpO1xuICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZUlkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrZWRWYWx1ZSA9IHRoaXMubnhWYWx1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmNsYXNzQ2hlY2tib3hTaW5nbGUgPSB0aGlzLmlzQ2hlY2tTaW5nbGUgPyAnc3R5bGUtc2luZ2xlJzogJyc7XG4gIH1cblxufVxuIl19