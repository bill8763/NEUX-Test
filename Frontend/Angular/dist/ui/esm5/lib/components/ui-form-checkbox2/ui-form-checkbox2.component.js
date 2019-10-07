/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var UiFormCheckbox2Component = /** @class */ (function () {
    function UiFormCheckbox2Component() {
        this.nxValueChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.isDisable = false;
        this._isCheckSingle = false; // if true: only one checkbox no padding; false : checkbox has padding-right
        this.classCheckboxSingle = '';
        this.id = this.generateId();
    }
    Object.defineProperty(UiFormCheckbox2Component.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.checkedValue; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.checkedValue = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormCheckbox2Component.prototype, "isCheckSingle", {
        get: 
        // if true: only one checkbox no padding; false : checkbox has padding-right
        /**
         * @return {?}
         */
        function () {
            return this._isCheckSingle;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isCheckSingle = val;
            this.classCheckboxSingle = this._isCheckSingle ? 'style-single' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormCheckbox2Component.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this.checkedValue;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            // console.log(val);
            // console.log(typeof (val));
            this.checkedValue = val;
            if (this.nxValueChange) {
                this.nxValueChange.emit(val);
            }
            this.onClick.emit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    UiFormCheckbox2Component.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        // console.debug('_' + Math.random().toString(36).substr(2, 12));
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    /**
     * @return {?}
     */
    UiFormCheckbox2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.checkedValue = this.nxValue ? true : false;
        this.classCheckboxSingle = this.isCheckSingle ? 'style-single' : '';
    };
    UiFormCheckbox2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-checkbox2',
                    template: "<div class=\"checkbox-block type-filter\">\n  <label [for]='id'>\n    <input class=\"check-native\" type=\"checkbox\" [(ngModel)]=\"checked\" [disabled]=\"false\" [id]=\"id\">\n    <span class=\"checkbox-style\">\n      <span class=\"checked\">\n        <span class=\"choose-tag\">\n          <ng-content select=\"[checkboxText=style1]\"></ng-content>\n        </span>\n      </span>\n    </span>\n  </label>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.checkbox-block{display:inline-block;margin-right:10px;margin-bottom:10px}.checkbox-block.type-filter .checkbox-style{text-align:center;display:inline-block;min-width:70px;padding:8px 6px;border:1px solid #c2c2c2;border-radius:3px;color:#c2c2c2}.checkbox-block.type-filter .checkbox-style .choose-tag{font-size:.75rem}.checkbox-block.type-filter .check-native{display:none}.checkbox-block.type-filter .check-native:checked+.checkbox-style{border:1px solid #007ab3;color:#fff;background-color:#007ab3}.checkbox-block.type-blue .checkbox-style{border:1px solid #007ab3;color:#007ab3}.checkbox-block.type-blue .check-native:checked{border:1px solid #007ab3;color:#fff;background-color:#007ab3}"]
                }] }
    ];
    UiFormCheckbox2Component.ctorParameters = function () { return []; };
    UiFormCheckbox2Component.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        onClick: [{ type: Output }],
        isDisable: [{ type: Input }],
        isCheckSingle: [{ type: Input }]
    };
    return UiFormCheckbox2Component;
}());
export { UiFormCheckbox2Component };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1jaGVja2JveDIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWNoZWNrYm94Mi91aS1mb3JtLWNoZWNrYm94Mi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEc7SUFtREU7UUF2Q1Usa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxLQUFLLENBQUMsQ0FBRSw0RUFBNEU7UUFhdEcsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBd0I5QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBOUNELHNCQUNJLDZDQUFPOzs7O1FBRFgsY0FDcUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDaEQsVUFBWSxRQUFhO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQy9CLENBQUM7OztPQUgrQztJQVFoRCxzQkFDSSxtREFBYTs7Ozs7O1FBRGpCO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsR0FBRztZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkUsQ0FBQzs7O09BSkE7SUFXRCxzQkFBSSw2Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBRUQsVUFBWSxHQUFHO1lBQ2Isb0JBQW9CO1lBQ3BCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDOzs7T0FYQTs7Ozs7SUFhTyw2Q0FBVTs7OztJQUFsQjtRQUNFLGlFQUFpRTtRQUNqRSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQU9ELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JFLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsOGFBQWlEO29CQUVqRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7OzBCQUVFLEtBQUs7Z0NBS0wsTUFBTTswQkFDTixNQUFNOzRCQUNOLEtBQUs7Z0NBRUwsS0FBSzs7SUE0Q1IsK0JBQUM7Q0FBQSxBQTVERCxJQTREQztTQXREWSx3QkFBd0I7OztJQU1uQyxpREFBNkM7O0lBQzdDLDJDQUF1Qzs7SUFDdkMsNkNBQW9DOzs7OztJQUNwQyxrREFBK0I7O0lBVy9CLGdEQUE2Qjs7SUFDN0Isc0NBQWtCOztJQUNsQix1REFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1jaGVja2JveDInLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1jaGVja2JveDIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLWNoZWNrYm94Mi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUNoZWNrYm94MkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLmNoZWNrZWRWYWx1ZTsgfVxuICBzZXQgbnhWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5jaGVja2VkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuICBAT3V0cHV0KCkgbnhWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0NoZWNrU2luZ2xlID0gZmFsc2U7ICAvLyBpZiB0cnVlOiBvbmx5IG9uZSBjaGVja2JveCBubyBwYWRkaW5nOyBmYWxzZSA6IGNoZWNrYm94IGhhcyBwYWRkaW5nLXJpZ2h0XG4gIEBJbnB1dCgpIFxuICBnZXQgaXNDaGVja1NpbmdsZSgpe1xuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrU2luZ2xlO1xuICB9XG4gIHNldCBpc0NoZWNrU2luZ2xlKHZhbCl7XG4gICAgdGhpcy5faXNDaGVja1NpbmdsZSA9IHZhbDtcbiAgICB0aGlzLmNsYXNzQ2hlY2tib3hTaW5nbGUgPSAgdGhpcy5faXNDaGVja1NpbmdsZSA/ICdzdHlsZS1zaW5nbGUnOiAnJztcbiAgfVxuXG5cbiAgcHVibGljIGNoZWNrZWRWYWx1ZTogYm9vbGVhbjtcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0NoZWNrYm94U2luZ2xlID0gJyc7XG5cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZFZhbHVlO1xuICB9XG5cbiAgc2V0IGNoZWNrZWQodmFsKSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHZhbCkpO1xuICAgIHRoaXMuY2hlY2tlZFZhbHVlID0gdmFsO1xuICAgIGlmICh0aGlzLm54VmFsdWVDaGFuZ2UpIHtcbiAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHZhbCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVJZCgpIHtcbiAgICAvLyBjb25zb2xlLmRlYnVnKCdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMikpO1xuICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZUlkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrZWRWYWx1ZSA9IHRoaXMubnhWYWx1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmNsYXNzQ2hlY2tib3hTaW5nbGUgPSB0aGlzLmlzQ2hlY2tTaW5nbGUgPyAnc3R5bGUtc2luZ2xlJzogJyc7XG4gIH1cblxufVxuIl19