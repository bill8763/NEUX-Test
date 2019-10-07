/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export class UiFormCheckbox3Component {
    constructor() {
        this.nxValueChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.isDisable = false;
        // 第二種樣式
        this.styleWeight = '';
        this.styleAlign = '';
        this.classesStyle = '';
        this.id = this.generateId();
    }
    /**
     * @return {?}
     */
    get nxValue() { return this._checked; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set nxValue(newValue) {
        this._checked = newValue;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        this._checked = val;
        if (this.nxValueChange)
            this.nxValueChange.emit(val);
        this.onClick.emit();
    }
    /**
     * @private
     * @return {?}
     */
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 12);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleWeight = this.styleWeight == 'normal' ? ' font-normal' : '';
        this.styleAlign = this.styleAlign == 'end' ? ' align-end' : '';
        this.classesStyle = this.styleWeight + this.styleAlign;
    }
}
UiFormCheckbox3Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-checkbox3',
                template: "<div class=\"checkbox-block type-list-data\" [ngClass]=\"classesStyle\">\n    <label [for]='id'>\n        <input class=\"check-native\" type=\"checkbox\" [(ngModel)]=\"checked\"  [id]='id' [disabled]=\"isDisable\">\n        <span class=\"checkbox-style\">\n            <span class=\"checked checked-block\">\n                <span class=\"choose-tag\">\n                    <ng-content select=\"[checkboxText=style3]\"></ng-content>\n                </span>\n                <span class=\"choose-check-block\">\n                    <div class=\"check-icon\">\n                        <nx-icon name='check' size='s'></nx-icon>\n                    </div>\n                </span>\n            </span>\n        </span>\n    </label>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{border-bottom:1px solid #ececec;display:inline-block;width:100%}.checkbox-block,.checkbox-block label{display:inline-block;width:100%}.checkbox-block.type-list-data.font-normal .checkbox-style .choose-tag{font-weight:400;white-space:normal;word-break:break-all}.checkbox-block.type-list-data.align-end .checkbox-style .checked-block,.checkbox-block.type-list-data.align-end .checkbox-style .choose-tag{justify-content:flex-end}.checkbox-block.type-list-data .checkbox-style{text-align:center;display:flex;width:100%;padding:10px 20px;color:#414141;align-items:center}.checkbox-block.type-list-data .checkbox-style .choose-tag{font-size:1rem;font-weight:700;display:flex;height:100%;vertical-align:middle;align-items:center;padding-right:10px;flex-grow:0;flex-shrink:0;flex-wrap:wrap;width:calc(100% - 28px);text-align:left;white-space:normal;word-break:break-all}.checkbox-block.type-list-data .checkbox-style .checked-block{display:flex;align-items:center;width:100%;justify-content:space-between}.checkbox-block.type-list-data .checkbox-style .choose-check-block{display:inline-block;border-radius:50%;border:1px solid #c2c2c2;width:24px;height:24px}.checkbox-block.type-list-data .check-native,.checkbox-block.type-list-data .checkbox-style .check-icon{display:none}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .check-icon{display:flex;justify-content:center;align-content:center}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .check-icon ::ng-deep.nx-icon--check{font-size:font-size-h8;font-weight:700;color:#fff;line-height:23px}.checkbox-block.type-list-data .check-native:checked+.checkbox-style .choose-check-block{border:1px solid #007ab3;color:#414141;background-color:#007ab3}.checkbox-block.type-list-data .check-native:disabled+.checkbox-style .choose-check-block{display:none}.checkbox-block.type-list-data .check-native:disabled+.checkbox-style .choose-tag{width:100%}"]
            }] }
];
UiFormCheckbox3Component.ctorParameters = () => [];
UiFormCheckbox3Component.propDecorators = {
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    onClick: [{ type: Output }],
    isDisable: [{ type: Input }],
    styleWeight: [{ type: Input }],
    styleAlign: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1jaGVja2JveDMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLWNoZWNrYm94My91aS1mb3JtLWNoZWNrYm94My5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEcsTUFBTTtJQW1DSjtRQTdCVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUNwQyxRQUFRO1FBQ0MsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQXdCL0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQXBDRCxJQUNJLE9BQU8sS0FBVSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OztJQUM1QyxJQUFJLE9BQU8sQ0FBQyxRQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFXRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxHQUFHO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6RCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDh1QkFBaUQ7Z0JBRWpELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7OztzQkFFRSxLQUFLOzRCQUtMLE1BQU07c0JBQ04sTUFBTTt3QkFDTixLQUFLOzBCQUVMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUxOLGlEQUE2Qzs7SUFDN0MsMkNBQXVDOztJQUN2Qyw2Q0FBb0M7O0lBRXBDLCtDQUFrQzs7SUFDbEMsOENBQWlDOztJQUNqQyxnREFBaUM7Ozs7O0lBQ2pDLDRDQUEwQjs7SUFDMUIsc0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtaXR0ZXJWaXNpdG9yQ29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tY2hlY2tib3gzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0tY2hlY2tib3gzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS1jaGVja2JveDMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1DaGVja2JveDNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZXQgbnhWYWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fY2hlY2tlZDsgfVxuICBzZXQgbnhWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IG5ld1ZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgaXNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIOesrOS6jOeoruaoo+W8j1xuICBASW5wdXQoKSBzdHlsZVdlaWdodDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHN0eWxlQWxpZ246IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgY2xhc3Nlc1N0eWxlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfY2hlY2tlZDogYm9vbGVhbjtcbiAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICBzZXQgY2hlY2tlZCh2YWwpIHtcbiAgICB0aGlzLl9jaGVja2VkID0gdmFsO1xuICAgIGlmICh0aGlzLm54VmFsdWVDaGFuZ2UpXG4gICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdCh2YWwpO1xuXG4gICAgICB0aGlzLm9uQ2xpY2suZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCkge1xuICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpO1xuICB9XG5cblxuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pZCA9IHRoaXMuZ2VuZXJhdGVJZCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZVdlaWdodCA9IHRoaXMuc3R5bGVXZWlnaHQgPT0gJ25vcm1hbCcgPyAnIGZvbnQtbm9ybWFsJyA6ICcnO1xuICAgIHRoaXMuc3R5bGVBbGlnbiA9IHRoaXMuc3R5bGVBbGlnbiA9PSAnZW5kJyA/ICcgYWxpZ24tZW5kJyA6ICcnO1xuICAgIHRoaXMuY2xhc3Nlc1N0eWxlID0gdGhpcy5zdHlsZVdlaWdodCArIHRoaXMuc3R5bGVBbGlnbjtcbiAgfVxuXG59XG4iXX0=