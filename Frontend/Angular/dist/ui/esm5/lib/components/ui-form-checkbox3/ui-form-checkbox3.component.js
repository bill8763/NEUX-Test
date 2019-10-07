/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var UiFormCheckbox3Component = /** @class */ (function () {
    function UiFormCheckbox3Component() {
        this.nxValueChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.isDisable = false;
        // 第二種樣式
        this.styleWeight = '';
        this.styleAlign = '';
        this.classesStyle = '';
        this.id = this.generateId();
    }
    Object.defineProperty(UiFormCheckbox3Component.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._checked = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormCheckbox3Component.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._checked = val;
            if (this.nxValueChange)
                this.nxValueChange.emit(val);
            this.onClick.emit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    UiFormCheckbox3Component.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return '_' + Math.random().toString(36).substr(2, 12);
    };
    /**
     * @return {?}
     */
    UiFormCheckbox3Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleWeight = this.styleWeight == 'normal' ? ' font-normal' : '';
        this.styleAlign = this.styleAlign == 'end' ? ' align-end' : '';
        this.classesStyle = this.styleWeight + this.styleAlign;
    };
    UiFormCheckbox3Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-checkbox3',
                    template: "<div class=\"checkbox-block type-list-data\" [ngClass]=\"classesStyle\">\n    <label [for]='id'>\n        <input class=\"check-native\" type=\"checkbox\" [(ngModel)]=\"checked\"  [id]='id' [disabled]=\"isDisable\">\n        <span class=\"checkbox-style\">\n            <span class=\"checked checked-block\">\n                <span class=\"choose-tag\">\n                    <ng-content select=\"[checkboxText=style3]\"></ng-content>\n                </span>\n                <span class=\"choose-check-block\">\n                    <div class=\"check-icon\">\n                        <nx-icon name='check' size='s'></nx-icon>\n                    </div>\n                </span>\n            </span>\n        </span>\n    </label>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{border-bottom:1px solid #ececec;display:inline-block;width:100%}.checkbox-block,.checkbox-block label{display:inline-block;width:100%}.checkbox-block.type-list-data.font-normal .checkbox-style .choose-tag{font-weight:400;white-space:normal;word-break:break-all}.checkbox-block.type-list-data.align-end .checkbox-style .checked-block,.checkbox-block.type-list-data.align-end .checkbox-style .choose-tag{justify-content:flex-end}.checkbox-block.type-list-data .checkbox-style{text-align:center;display:flex;width:100%;padding:10px 20px;color:#414141;align-items:center}.checkbox-block.type-list-data .checkbox-style .choose-tag{font-size:1rem;font-weight:700;display:flex;height:100%;vertical-align:middle;align-items:center;padding-right:10px;flex-grow:0;flex-shrink:0;flex-wrap:wrap;width:calc(100% - 28px);text-align:left;white-space:normal;word-break:break-all}.checkbox-block.type-list-data .checkbox-style .checked-block{display:flex;align-items:center;width:100%;justify-content:space-between}.checkbox-block.type-list-data .checkbox-style .choose-check-block{display:inline-block;border-radius:50%;border:1px solid #c2c2c2;width:24px;height:24px}.checkbox-block.type-list-data .check-native,.checkbox-block.type-list-data .checkbox-style .check-icon{display:none}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .check-icon{display:flex;justify-content:center;align-content:center}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .check-icon ::ng-deep.nx-icon--check{font-size:font-size-h8;font-weight:700;color:#fff;line-height:23px}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .choose-check-block{border:1px solid #007ab3;color:#414141;background-color:#007ab3}.checkbox-block.type-list-data .check-native:disabled+.checkbox-style .choose-check-block{display:none}.checkbox-block.type-list-data .check-native:disabled+.checkbox-style .choose-tag{width:100%}"]
                }] }
    ];
    UiFormCheckbox3Component.ctorParameters = function () { return []; };
    UiFormCheckbox3Component.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        onClick: [{ type: Output }],
        isDisable: [{ type: Input }],
        styleWeight: [{ type: Input }],
        styleAlign: [{ type: Input }]
    };
    return UiFormCheckbox3Component;
}());
export { UiFormCheckbox3Component };
if (false) {
    /** @type {?} */
    UiFormCheckbox3Component.prototype.nxValueChange;
    /** @type {?} */
    UiFormCheckbox3Component.prototype.onClick;
    /** @type {?} */
    UiFormCheckbox3Component.prototype.isDisable;
    /** @type {?} */
    UiFormCheckbox3Component.prototype.styleWeight;
    /** @type {?} */
    UiFormCheckbox3Component.prototype.styleAlign;
    /** @type {?} */
    UiFormCheckbox3Component.prototype.classesStyle;
    /**
     * @type {?}
     * @private
     */
    UiFormCheckbox3Component.prototype._checked;
    /** @type {?} */
    UiFormCheckbox3Component.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1jaGVja2JveDMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWNoZWNrYm94My91aS1mb3JtLWNoZWNrYm94My5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEc7SUF5Q0U7UUE3QlUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDcEMsUUFBUTtRQUNDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUF3Qi9CLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFwQ0Qsc0JBQ0ksNkNBQU87Ozs7UUFEWCxjQUNxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OztRQUM1QyxVQUFZLFFBQWE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQzs7O09BSDJDO0lBYzVDLHNCQUFJLDZDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFZLEdBQUc7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhO2dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQVJBOzs7OztJQVVPLDZDQUFVOzs7O0lBQWxCO1FBQ0UsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFTRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6RCxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDh1QkFBaUQ7b0JBRWpELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7MEJBRUUsS0FBSztnQ0FLTCxNQUFNOzBCQUNOLE1BQU07NEJBQ04sS0FBSzs4QkFFTCxLQUFLOzZCQUNMLEtBQUs7O0lBa0NSLCtCQUFDO0NBQUEsQUFuREQsSUFtREM7U0E3Q1ksd0JBQXdCOzs7SUFNbkMsaURBQTZDOztJQUM3QywyQ0FBdUM7O0lBQ3ZDLDZDQUFvQzs7SUFFcEMsK0NBQWtDOztJQUNsQyw4Q0FBaUM7O0lBQ2pDLGdEQUFpQzs7Ozs7SUFDakMsNENBQTBCOztJQUMxQixzQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1pdHRlclZpc2l0b3JDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1jaGVja2JveDMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1jaGVja2JveDMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLWNoZWNrYm94My5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUNoZWNrYm94M0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl9jaGVja2VkOyB9XG4gIHNldCBueFZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jaGVja2VkID0gbmV3VmFsdWU7XG4gIH1cbiAgQE91dHB1dCgpIG54VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8g56ys5LqM56iu5qij5byPXG4gIEBJbnB1dCgpIHN0eWxlV2VpZ2h0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3R5bGVBbGlnbjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjbGFzc2VzU3R5bGU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuO1xuICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIHNldCBjaGVja2VkKHZhbCkge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB2YWw7XG4gICAgaWYgKHRoaXMubnhWYWx1ZUNoYW5nZSlcbiAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHZhbCk7XG5cbiAgICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSWQoKSB7XG4gICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMik7XG4gIH1cblxuXG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZUlkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlV2VpZ2h0ID0gdGhpcy5zdHlsZVdlaWdodCA9PSAnbm9ybWFsJyA/ICcgZm9udC1ub3JtYWwnIDogJyc7XG4gICAgdGhpcy5zdHlsZUFsaWduID0gdGhpcy5zdHlsZUFsaWduID09ICdlbmQnID8gJyBhbGlnbi1lbmQnIDogJyc7XG4gICAgdGhpcy5jbGFzc2VzU3R5bGUgPSB0aGlzLnN0eWxlV2VpZ2h0ICsgdGhpcy5zdHlsZUFsaWduO1xuICB9XG5cbn1cbiJdfQ==