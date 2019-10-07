/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UiFormErrorMsgInfoComponent } from '../ui-form-error-msg-info/ui-form-error-msg-info.component';
export class UiFormSelectComponent {
    constructor() {
        this.nxValueChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.placeholder = 'Select';
        this.isShowTitle = true;
        this.isShowDefaultOption = true;
        this.isNoSpace = false;
        this.styleTitleFloatNow = ''; // title float or keep;
        this.styleNoSpace = '';
        this._value = '';
        // error status style
        this.classError = '';
        this.classDisable = '';
        this.inputStatus = false;
        this.isErrorChange = new EventEmitter();
        this._isDisable = false;
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.isFocus = false;
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
        this._value = newValue;
        this.titleFloat();
    }
    /**
     * @return {?}
     */
    get isError() { return this.inputStatus; }
    /**
     * @param {?} status
     * @return {?}
     */
    set isError(status) {
        this.inputStatus = status;
        this.classError = status ? ' style-error' : '';
    }
    /**
     * @return {?}
     */
    get isDisable() {
        return this._isDisable;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isDisable(val) {
        this._isDisable = val;
        this.classDisable = this._isDisable ? 'style-disable' : '';
    }
    /**
     * @return {?}
     */
    get currentValue() {
        return this._value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set currentValue(val) {
        this._value = val;
        if (this.nxValueChange)
            this.nxValueChange.emit(val);
    }
    /**
     * @param {?} boolean
     * @return {?}
     */
    focusBlurEvent(boolean) {
        if (this.errorMagInfo != undefined) {
            this.errorMagInfo.controlMsg(this.isFocus);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    selectChange(val) {
        //console.log(val);
        this.titleFloat();
        this.onChange.emit(val);
        // this.nxValueChange.emit(val);
    }
    // when open the select
    /**
     * @return {?}
     */
    focus() {
        this.isFocus = true;
        this.onFocus.emit();
        this.focusBlurEvent(this.isFocus);
        // when open the page stop page scroll 
        // console.log('select open');
        this.titleFloat();
        // // in every form-stop-scroll class add no-scroll
        // let stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        // [].forEach.bind(stopFormScrollBlock,function(itm){
        //   itm.classList.add('all-no-scroll');
        // })();
    }
    //when close the select
    /**
     * @return {?}
     */
    blur() {
        this.isFocus = false;
        this.onBlur.emit();
        this.focusBlurEvent(this.isFocus);
        // in every form-stop-scroll class add no-scroll
        // let stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        // [].forEach.bind(stopFormScrollBlock,function(itm){
        //   itm.classList.remove('all-no-scroll');
        // })();
    }
    //control title float
    /**
     * @return {?}
     */
    titleFloat() {
        // console.log('select nxValue',this.nxValue);
        if (this.nxValue === undefined || this.nxValue === null || this.nxValue === '') {
            this.styleTitleFloatNow = '';
        }
        else {
            this.styleTitleFloatNow = ' style-title-floating';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.titleFloat();
        // this.styleNoSpace = this.isNoSpace ? 'no-space': '';
        this.classDisable = this._isDisable ? 'style-disable' : '';
    }
}
UiFormSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-select',
                template: "<div class=\"select-block\">\n    <div class=\"select-body-block\" [ngClass]=\"[styleTitleFloatNow, classError, classDisable, isShowTitle ? '' : ' style-title-hide']\">\n        <div class=\"select-title nx-formfield__label\">\n          {{selectTitle}}\n        </div>\n        <select name=\"dropdownGroup\" (focus)=\"focus()\" (change)=\"selectChange($event.target.value)\" [(ngModel)]=\"currentValue\" [disabled]=\"isDisable\">\n          <option [value]=\"''\" *ngIf=\"isShowDefaultOption\">{{placeholder}}</option>\n          <option *ngFor=\"let option of selectOption\" [value]=\"option.getValue()\">{{option.getName()}}</option>\n        </select>\n    </div>\n    <span class=\"select-icon\">\n      <img class=\"icon-normal\" src=\"assets/img/icon-arrow-down.svg\">\n      <img class=\"icon-error\" src=\"assets/img/icon-arrow-down-red.svg\">\n      <img class=\"icon-disable\" src=\"assets/img/icon-arrow-down-disable.svg\">\n    </span>\n</div>\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield__flexfield,:host ::ng-deep .select-body-block{min-height:30px}:host ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}:host ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}:host ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}:host .select-block{position:relative}:host .select-icon{display:inline-block;position:absolute;bottom:0;right:0;pointer-events:none;z-index:2}:host .select-icon img{width:24px;background-color:#fff}:host .select-icon .icon-normal{display:inline-block}:host .select-icon .icon-error{display:none}:host .select-icon .icon-disable{display:none}:host .style-error .nx-formfield__label{color:#414141}:host .style-error+.select-icon .icon-normal{display:none}:host .style-error+.select-icon .icon-error{display:inline-block}:host .style-error+.select-icon .icon-disable{display:none}:host .style-disable+.select-icon .icon-normal{display:none}:host .style-disable+.select-icon .icon-error{display:none}:host .style-disable+.select-icon .icon-disable{display:inline-block}.select-body-block{position:relative}.select-body-block.style-error select{color:#dc3149;border-bottom-color:#dc3149}.select-body-block.style-disable .select-title{color:#c2c2c2}.select-body-block.style-disable select{color:#c2c2c2;border-bottom-color:#c2c2c2}.select-body-block.style-title-floating .select-title{-webkit-transform:translateY(-25px) translateZ(.001px);transform:translateY(-25px) translateZ(.001px);font-weight:700;font-size:1rem;background-color:transparent}.select-body-block.style-title-hide .select-title{display:none}.select-title{font-size:1.25rem;height:28px;line-height:28px;font-weight:400}select{border:none;background-color:transparent;display:block;outline:0;width:100%;border-bottom:1px solid #414141;border-radius:0;-webkit-appearance:none;-moz-appearance:none;color:#414141;font-size:1.25rem;height:30px;line-height:28px;font-weight:400;padding:0}select::-ms-expand{display:none}option{padding:0}"]
            }] }
];
UiFormSelectComponent.ctorParameters = () => [];
UiFormSelectComponent.propDecorators = {
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    onChange: [{ type: Output }],
    selectTitle: [{ type: Input }],
    selectOption: [{ type: Input }],
    placeholder: [{ type: Input }],
    isShowTitle: [{ type: Input }],
    isShowDefaultOption: [{ type: Input }],
    isNoSpace: [{ type: Input }],
    isError: [{ type: Input }],
    isErrorChange: [{ type: Output }],
    isDisable: [{ type: Input }],
    onFocus: [{ type: Output, args: ['focus',] }],
    onBlur: [{ type: Output, args: ['blur',] }],
    errorMagInfo: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiFormSelectComponent.prototype.nxValueChange;
    /** @type {?} */
    UiFormSelectComponent.prototype.onChange;
    /** @type {?} */
    UiFormSelectComponent.prototype.selectTitle;
    /** @type {?} */
    UiFormSelectComponent.prototype.selectOption;
    /** @type {?} */
    UiFormSelectComponent.prototype.placeholder;
    /** @type {?} */
    UiFormSelectComponent.prototype.isShowTitle;
    /** @type {?} */
    UiFormSelectComponent.prototype.isShowDefaultOption;
    /** @type {?} */
    UiFormSelectComponent.prototype.isNoSpace;
    /** @type {?} */
    UiFormSelectComponent.prototype.dropdownGroup;
    /** @type {?} */
    UiFormSelectComponent.prototype.styleTitleFloatNow;
    /** @type {?} */
    UiFormSelectComponent.prototype.styleNoSpace;
    /**
     * @type {?}
     * @private
     */
    UiFormSelectComponent.prototype._value;
    /** @type {?} */
    UiFormSelectComponent.prototype.classError;
    /** @type {?} */
    UiFormSelectComponent.prototype.classDisable;
    /** @type {?} */
    UiFormSelectComponent.prototype.inputStatus;
    /** @type {?} */
    UiFormSelectComponent.prototype.isErrorChange;
    /**
     * @type {?}
     * @private
     */
    UiFormSelectComponent.prototype._isDisable;
    /** @type {?} */
    UiFormSelectComponent.prototype.onFocus;
    /** @type {?} */
    UiFormSelectComponent.prototype.onBlur;
    /** @type {?} */
    UiFormSelectComponent.prototype.errorMagInfo;
    /** @type {?} */
    UiFormSelectComponent.prototype.isFocus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLXNlbGVjdC91aS1mb3JtLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXNELHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVKLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBVXpHLE1BQU07SUE0SEo7UUFwSFUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUsvQixnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUMvQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1Qix3QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFDcEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUU3Qix1QkFBa0IsR0FBRyxFQUFFLENBQUMsQ0FBQyx1QkFBdUI7UUFDaEQsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFDaEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVwQixxQkFBcUI7UUFFZCxlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsRUFBRSxDQUFBO1FBQ3pCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBVTFCLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsZUFBVSxHQUFZLEtBQUssQ0FBQztRQXFCbkIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHNUMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQTREVCxDQUFDOzs7O0lBMUhqQixJQUNJLE9BQU8sS0FBVSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7OztJQUMxQyxJQUFJLE9BQU8sQ0FBQyxRQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBc0JELElBQ0ksT0FBTyxLQUFhLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7Ozs7O0lBQ2pELElBQUksT0FBTyxDQUFDLE1BQWM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFLRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFNBQVMsQ0FBQyxHQUFHO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBRSxlQUFlLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDOzs7O0lBR0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFBSSxZQUFZLENBQUMsR0FBRztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBUUQsY0FBYyxDQUFDLE9BQWdCO1FBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBRztRQUNkLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsZ0NBQWdDO0lBRWxDLENBQUM7Ozs7O0lBR0QsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsdUNBQXVDO1FBQ3ZDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsbURBQW1EO1FBQ25ELHNGQUFzRjtRQUN0RixxREFBcUQ7UUFDckQsd0NBQXdDO1FBQ3hDLFFBQVE7SUFFVixDQUFDOzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLGdEQUFnRDtRQUNoRCxzRkFBc0Y7UUFDdEYscURBQXFEO1FBQ3JELDJDQUEyQztRQUMzQyxRQUFRO0lBQ1YsQ0FBQzs7Ozs7SUFFRCxVQUFVO1FBQ1IsOENBQThDO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUM7WUFDN0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztTQUM5QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHVCQUF1QixDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixxQkFBcUI7UUFDckIsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUUsZUFBZSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7O1lBaElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw2OEJBQThDO2dCQUU5QyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7Ozs7c0JBR0UsS0FBSzs0QkFNTCxNQUFNO3VCQUNOLE1BQU07MEJBRU4sS0FBSzsyQkFDTCxLQUFLOzBCQUVMLEtBQUs7MEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7c0JBWUwsS0FBSzs0QkFRTCxNQUFNO3dCQUdOLEtBQUs7c0JBb0JMLE1BQU0sU0FBQyxPQUFPO3FCQUNkLE1BQU0sU0FBQyxNQUFNOzJCQUNiLEtBQUs7Ozs7SUF0RE4sOENBQWdFOztJQUNoRSx5Q0FBd0M7O0lBRXhDLDRDQUE2Qjs7SUFDN0IsNkNBQTJDOztJQUUzQyw0Q0FBd0M7O0lBQ3hDLDRDQUFxQzs7SUFDckMsb0RBQTZDOztJQUM3QywwQ0FBb0M7O0lBQ3BDLDhDQUE2Qjs7SUFDN0IsbURBQStCOztJQUMvQiw2Q0FBd0I7Ozs7O0lBQ3hCLHVDQUFvQjs7SUFJcEIsMkNBQWdDOztJQUNoQyw2Q0FBZ0M7O0lBQ2hDLDRDQUFvQzs7SUFVcEMsOENBQWdFOzs7OztJQUVoRSwyQ0FBb0M7O0lBcUJwQyx3Q0FBOEM7O0lBQzlDLHVDQUE0Qzs7SUFDNUMsNkNBQW1EOztJQUVuRCx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgVWlGb3JtRXJyb3JNc2dJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktZm9ybS1lcnJvci1tc2ctaW5mby91aS1mb3JtLWVycm9yLW1zZy1pbmZvLmNvbXBvbmVudCc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgZ2V0IG54VmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gIHNldCBueFZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMudGl0bGVGbG9hdCgpO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHNlbGVjdFRpdGxlOiBzdHJpbmc7ICAvL+S4i+aLiemBuOWWruaomemhjFxuICBASW5wdXQoKSBzZWxlY3RPcHRpb246IEFycmF5PFNlbGVjdE9wdGlvbj47ICAvL+S4i+aLiemBuOWWrumBuOmghVxuICBcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWxlY3QnO1xuICBASW5wdXQoKSBpc1Nob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzU2hvd0RlZmF1bHRPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBpc05vU3BhY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRyb3Bkb3duR3JvdXA6IHN0cmluZztcbiAgcHVibGljIHN0eWxlVGl0bGVGbG9hdE5vdyA9ICcnOyAvLyB0aXRsZSBmbG9hdCBvciBrZWVwO1xuICBwdWJsaWMgc3R5bGVOb1NwYWNlID0gJydcbiAgcHJpdmF0ZSBfdmFsdWUgPSAnJztcblxuICAvLyBlcnJvciBzdGF0dXMgc3R5bGVcblxuICBwdWJsaWMgY2xhc3NFcnJvciA6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgY2xhc3NEaXNhYmxlOiBzdHJpbmcgPSAnJ1xuICBwdWJsaWMgaW5wdXRTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBcbiAgZ2V0IGlzRXJyb3IoKTogYm9vbGVhbiB7cmV0dXJuIHRoaXMuaW5wdXRTdGF0dXM7fVxuICBzZXQgaXNFcnJvcihzdGF0dXM6Ym9vbGVhbil7XG4gICAgXG4gICAgdGhpcy5pbnB1dFN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmNsYXNzRXJyb3IgPSBzdGF0dXMgPyAnIHN0eWxlLWVycm9yJzogJyc7XG4gIH1cblxuICBAT3V0cHV0KCkgaXNFcnJvckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfaXNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIFxuICBnZXQgaXNEaXNhYmxlKCl7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZTtcbiAgfVxuICBzZXQgaXNEaXNhYmxlKHZhbCl7XG4gICAgdGhpcy5faXNEaXNhYmxlID0gdmFsO1xuICAgIHRoaXMuY2xhc3NEaXNhYmxlID0gdGhpcy5faXNEaXNhYmxlID8gICdzdHlsZS1kaXNhYmxlJzogJyc7IFxuICB9XG5cbiAgXG4gIGdldCBjdXJyZW50VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRWYWx1ZSh2YWwpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICBpZiAodGhpcy5ueFZhbHVlQ2hhbmdlKVxuICAgICAgdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQodmFsKTtcbiAgfVxuXG4gIEBPdXRwdXQoJ2ZvY3VzJykgb25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYmx1cicpIG9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZXJyb3JNYWdJbmZvOiBVaUZvcm1FcnJvck1zZ0luZm9Db21wb25lbnQ7XG5cbiAgaXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGZvY3VzQmx1ckV2ZW50KGJvb2xlYW46IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5lcnJvck1hZ0luZm8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVycm9yTWFnSW5mby5jb250cm9sTXNnKHRoaXMuaXNGb2N1cyk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q2hhbmdlKHZhbCl7XG4gICAgLy9jb25zb2xlLmxvZyh2YWwpO1xuICAgIHRoaXMudGl0bGVGbG9hdCgpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh2YWwpO1xuICAgIC8vIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHZhbCk7XG5cbiAgfVxuICBcbiAgLy8gd2hlbiBvcGVuIHRoZSBzZWxlY3RcbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLm9uRm9jdXMuZW1pdCgpO1xuICAgIHRoaXMuZm9jdXNCbHVyRXZlbnQodGhpcy5pc0ZvY3VzKTtcbiAgICAvLyB3aGVuIG9wZW4gdGhlIHBhZ2Ugc3RvcCBwYWdlIHNjcm9sbCBcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0IG9wZW4nKTtcbiAgICB0aGlzLnRpdGxlRmxvYXQoKTtcbiAgICBcbiAgICAvLyAvLyBpbiBldmVyeSBmb3JtLXN0b3Atc2Nyb2xsIGNsYXNzIGFkZCBuby1zY3JvbGxcbiAgICAvLyBsZXQgc3RvcEZvcm1TY3JvbGxCbG9jayA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1zdG9wLXNjcm9sbCcpO1xuICAgIC8vIFtdLmZvckVhY2guYmluZChzdG9wRm9ybVNjcm9sbEJsb2NrLGZ1bmN0aW9uKGl0bSl7XG4gICAgLy8gICBpdG0uY2xhc3NMaXN0LmFkZCgnYWxsLW5vLXNjcm9sbCcpO1xuICAgIC8vIH0pKCk7XG5cbiAgfVxuICAvL3doZW4gY2xvc2UgdGhlIHNlbGVjdFxuICBibHVyKCkge1xuICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMub25CbHVyLmVtaXQoKTtcbiAgICB0aGlzLmZvY3VzQmx1ckV2ZW50KHRoaXMuaXNGb2N1cyk7XG4gICAgLy8gaW4gZXZlcnkgZm9ybS1zdG9wLXNjcm9sbCBjbGFzcyBhZGQgbm8tc2Nyb2xsXG4gICAgLy8gbGV0IHN0b3BGb3JtU2Nyb2xsQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tc3RvcC1zY3JvbGwnKTtcbiAgICAvLyBbXS5mb3JFYWNoLmJpbmQoc3RvcEZvcm1TY3JvbGxCbG9jayxmdW5jdGlvbihpdG0pe1xuICAgIC8vICAgaXRtLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbC1uby1zY3JvbGwnKTtcbiAgICAvLyB9KSgpO1xuICB9XG4gIC8vY29udHJvbCB0aXRsZSBmbG9hdFxuICB0aXRsZUZsb2F0KCl7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdCBueFZhbHVlJyx0aGlzLm54VmFsdWUpO1xuICAgIGlmKCB0aGlzLm54VmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm54VmFsdWUgPT09IG51bGwgfHwgdGhpcy5ueFZhbHVlID09PSAnJyl7XG4gICAgICB0aGlzLnN0eWxlVGl0bGVGbG9hdE5vdyA9ICcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGVUaXRsZUZsb2F0Tm93ID0gJyBzdHlsZS10aXRsZS1mbG9hdGluZyc7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy50aXRsZUZsb2F0KCk7XG4gICAgLy8gdGhpcy5zdHlsZU5vU3BhY2UgPSB0aGlzLmlzTm9TcGFjZSA/ICduby1zcGFjZSc6ICcnO1xuICAgIHRoaXMuY2xhc3NEaXNhYmxlID0gdGhpcy5faXNEaXNhYmxlID8gICdzdHlsZS1kaXNhYmxlJzogJyc7IFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBcblxuXG59XG4iXX0=