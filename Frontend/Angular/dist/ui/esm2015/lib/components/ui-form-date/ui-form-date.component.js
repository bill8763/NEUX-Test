/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { getDate, getHours, getMinutes, getMonth, getYear, isAfter } from 'date-fns';
import { StringUtils, showRuleToken, DateUtils } from '@allianzSND/core';
export class UiFormDateComponent {
    /**
     * @param {?} changeDetecor
     * @param {?} elementRef
     * @param {?} dateUtils
     * @param {?} showRule
     */
    constructor(changeDetecor, elementRef, dateUtils, showRule) {
        this.changeDetecor = changeDetecor;
        this.elementRef = elementRef;
        this.dateUtils = dateUtils;
        this.showRule = showRule;
        this.title = '';
        this._isDisable = false;
        this.nxValueChange = new EventEmitter();
        // error status style
        this.classError = '';
        this.classDisable = '';
        this.inputStatus = false;
        this.isFocus = false;
        this.maxDate = '';
        this.isErrorChange = new EventEmitter();
        this.afterDatepickerOpen = new EventEmitter();
        this.afterDatepickerClose = new EventEmitter();
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
     * @param {?} value
     * @return {?}
     */
    set max(value) {
        console.warn('max', value);
        if (StringUtils.isNotEmpty(value)) {
            this.maxDate = this.convertDateToString(value);
        }
        else {
            this.maxDate = '';
        }
    }
    /**
     * @return {?}
     */
    get nxValue() { return this._nxValue; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nxValue(value) {
        console.log("value: ", value);
        if (StringUtils.isNotEmpty(value)) {
            this.isFocus = true;
            this._nxValue = value;
            this.showDate = this.convertDateToString(this._nxValue);
            this.displayDate = this.convertDateByFormat(this._nxValue);
        }
        else {
            this.isFocus = false;
        }
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
    ngOnInit() {
        this.classDisable = this._isDisable ? 'style-disable' : '';
    }
    /**
     * @param {?} changeDateStr
     * @return {?}
     */
    dateChange(changeDateStr) {
        console.warn('changeDateStr', changeDateStr);
        console.warn("before this.nxValue ", this._nxValue);
        console.warn("this.showDate ", this.showDate);
        if (this.showDate != changeDateStr) {
            this.showDate = changeDateStr;
            if (StringUtils.isEmpty(this.showDate)) {
                this._nxValue = null;
                this.isFocus = false;
            }
            else {
                this.convertShowDateToDate();
            }
            this.changeDetecor.markForCheck();
            /** @type {?} */
            let scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
            if (document.querySelector('.plt-android') != null && scrollContent != null) {
                scrollContent.classList.remove('active');
            }
            this.nxValueChange.emit(this._nxValue);
            this.changeDetecor.detectChanges();
            //this.dateTimeChange();
        }
    }
    /**
     * @return {?}
     */
    convertShowDateToDate() {
        /** @type {?} */
        let time = this.showDate.split('-');
        /** @type {?} */
        let dateNow = new Date();
        this._nxValue = new Date(parseInt(time[0]), parseInt(time[1]) - 1, parseInt(time[2]), getHours(dateNow), getMinutes(dateNow));
        this.showDate = this.convertDateToString(this._nxValue);
        this.displayDate = this.convertDateByFormat(this._nxValue);
        console.warn('displayDate', this.displayDate);
    }
    // private convertDate2Str() {
    //   console.warn('ui-form-date nxValue', this.nxValue);
    //   let tmp;
    //   if (getMonth(this.nxValue) < 9) {
    //     tmp = getYear(this.nxValue).toString() + '-' + '0' + (getMonth(this.nxValue) + 1).toString();
    //   } else {
    //     tmp = getYear(this.nxValue).toString() + '-' + (getMonth(this.nxValue) + 1).toString();
    //   }
    //   if (getDate(this.nxValue) < 10) {
    //     tmp = this.showDate + '-0' + getDate(this.nxValue).toString();
    //   } else {
    //     tmp = this.showDate + '-' + getDate(this.nxValue).toString();
    //   }
    //   this.showDate = tmp;
    //   // if(!isSameDay(newValue, this._innerValue)) {
    //   //   if (StringUtils.isNotEmpty(newValue)) {
    //   //     this._innerValue = newValue;
    //   //     if (getMonth(newValue) < 9) {
    //   //       this.showDate = getYear(newValue).toString() + '-' + '0' + (getMonth(newValue) + 1).toString();
    //   //     } else {
    //   //       this.showDate = getYear(newValue).toString() + '-' + (getMonth(newValue) + 1).toString();
    //   //     }
    //   //     if (getDate(newValue) < 10) {
    //   //       this.showDate = this.showDate + '-0' + getDate(newValue).toString();
    //   //     } else {
    //   //       this.showDate = this.showDate + '-' + getDate(newValue).toString();
    //   //     }
    //   //     this.isFocus = true;
    //   //   } else {
    //   //     this.isFocus = false
    //   //   }
    //   // }
    // }
    /**
     * @return {?}
     */
    inputFocus() {
        console.log('inputFocus');
        // when user click input, scroll top the input, to prevent calendar be cutted because of softkeyboard slide up
        /** @type {?} */
        let inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        let scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        console.log('inputEle', inputEle, 'scrollContent', scrollContent);
        /** @type {?} */
        let windowWidth = window.innerWidth;
        /** @type {?} */
        let moveDist = windowWidth < 1024 ? 100 : 250;
        if (scrollContent != null) {
            /** @type {?} */
            let move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            console.log('move', move);
            if (document.querySelector('.plt-android') != null) {
                scrollContent.scrollTo({ top: move, behavior: "smooth" });
            }
        }
        this.isFocus = true;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    convertDateToString(date) {
        /** @type {?} */
        let dateString = '';
        if (date != null) {
            if (getMonth(date) < 9) {
                dateString = getYear(date).toString() + '-' + '0' + (getMonth(date) + 1).toString();
            }
            else {
                dateString = getYear(date).toString() + '-' + (getMonth(date) + 1).toString();
            }
            if (getDate(date) < 10) {
                dateString = dateString + '-0' + getDate(date).toString();
            }
            else {
                dateString = dateString + '-' + getDate(date).toString();
            }
            return dateString;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    convertDateByFormat(date) {
        if (this.showRule) {
            return this.showRule.convertDate(date);
        }
        else {
            return this.dateUtils.toDateString(date, 'MM/dd/yyyy');
        }
    }
    /**
     * @return {?}
     */
    checkMaxDate() {
        if (StringUtils.isNotEmpty(this.maxDate)) {
            console.warn('maxDate', this.maxDate);
            console.warn(isAfter(new Date(this.showDate), new Date(this.maxDate)));
            if (isAfter(new Date(this.showDate), new Date(this.maxDate))) {
                alert('select date must before ' + this.maxDate);
                this.showDate = this.maxDate;
                this.convertShowDateToDate();
            }
        }
    }
}
UiFormDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-date',
                template: "\n\n<div #containerBlock class=\"ui-datepicker\" [ngClass]=\"[classError, (isFocus? 'isFocus':''),classDisable]\"> <!--[ngClass]=\"[classError, (innerValue? 'isFocus':'')]\" -->\n  <div class=\"ui-input-field\">\n      <!-- <input #input placeholder=\"mm/dd/yyyy\" class=\"ui-input-show\" [(ngModel)]=\"inputDate\" (blur)=\"inputBlur()\" (focus)=\"inputFocus()\" />\n      <input #inputEle placeholder=\"mm/dd/yyyy\" class=\"ui-input-hidden\"\n        [(ngModel)]=\"innerValue\" [owlDateTime]=\"datepicker\"\n        (focus)=\"inputonFoucus($event)\"\n        (focusout)=\"inputoutFoucus($event)\" (dateTimeChange) =\"dateTimeChange()\"/> -->\n      <input #input type=\"date\"  placeholder=\"Date\" name=\"datepicker\"  [max]=\"maxDate\" class=\"ui-input-show\"  (focus)=\"inputFocus()\" (blur)=\"checkMaxDate()\" [ngModel]=\"showDate\" (ngModelChange)=\"dateChange($event)\" [disabled]=\"isDisable\">\n      <div class=\"ui-form-title\">\n        <label class=\"txt\">{{title}}</label>\n      </div>\n      <div class=\"displayDate-block\">{{displayDate}}</div>\n  </div>\n  <!-- end: ui-input-field -->\n  <nx-icon class=\"ui-datepicker-icon datepicker-icon\" name='calendar'></nx-icon>\n  <!-- <nx-icon class=\"ui-datepicker-icon datepicker-icon\" name='calendar'\n  [owlDateTimeTrigger]=\"datepicker\" (click)=\"inputonFoucus($event)\" ></nx-icon> -->\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}::ng-deep .nx-formfield__flexfield,::ng-deep .select-body-block{min-height:30px}::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}.ui-datepicker{position:relative}.ui-datepicker.style-error .ui-input-field,.ui-datepicker.style-error input{color:#dc3149;border-color:#dc3149}.ui-datepicker.style-error .ui-datepicker-icon{color:#dc3149}.ui-datepicker.style-disable{pointer-events:none}.ui-datepicker.style-disable .ui-form-title .txt,.ui-datepicker.style-disable .ui-input-field,.ui-datepicker.style-disable input{color:#c2c2c2;border-color:#c2c2c2}.ui-datepicker.style-disable .displayDate-block,.ui-datepicker.style-disable .ui-datepicker-icon{color:#c2c2c2}.ui-datepicker.isFocus .ui-form-title{-webkit-transform:translateY(-25px) translateZ(.001px);transform:translateY(-25px) translateZ(.001px);font-size:1rem;font-weight:700;background-color:transparent}.ui-datepicker .ui-input-field{position:relative;padding:0;border-bottom:1px solid #414141}.ui-datepicker input{background-color:transparent;-webkit-appearance:none;position:relative;width:100%;margin:0;padding:0;font-size:1px;font-weight:400;line-height:1.25rem;letter-spacing:.2px;color:#414141;border:0;border-radius:0;min-height:29px}.ui-datepicker input:active,.ui-datepicker input:focus{background-color:transparent}.ui-datepicker input.ui-input-hidden{visibility:hidden;width:0;height:0;line-height:0}.ui-datepicker input::-webkit-inner-spin-button{display:none;-webkit-appearance:none}.ui-datepicker input::-webkit-clear-button{-webkit-appearance:none;display:none}.ui-datepicker input::-webkit-calendar-picker-indicator{background:0 0;bottom:0;color:transparent;cursor:pointer;height:auto;left:0;position:absolute;right:0;top:0;width:100%;z-index:1}.ui-datepicker .ui-form-title{width:100%;position:absolute;top:0;left:0;font-size:1.25rem;font-weight:400;letter-spacing:.2px;color:#414141;background-color:#fff;height:calc(100% - 1px);-webkit-transform-origin:0 0;transform-origin:0 0;transition:transform .15s ease-out,font-size .15s ease-out,-webkit-transform .15s ease-out;z-index:2;pointer-events:none;line-height:28px}.ui-datepicker .ui-datepicker-icon{display:inline-block;width:1.5rem;height:1.5rem;pointer-events:none;position:absolute;bottom:5px;right:0;font-size:1.5rem;color:#007ab3;z-index:2}@media (max-width:375px){.ui-datepicker .ui-datepicker-icon{width:1.5rem;height:1.5rem;font-size:1.5rem;line-height:1.8rem}}.displayDate-block{position:absolute;top:0;left:0;height:calc(100% - 1px);background-color:#fff;width:100%;font-size:1.25rem;font-weight:400;pointer-events:none}"]
            }] }
];
UiFormDateComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: DateUtils },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
];
UiFormDateComponent.propDecorators = {
    title: [{ type: Input }],
    isDisable: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    max: [{ type: Input }],
    nxValue: [{ type: Input }],
    isError: [{ type: Input }],
    isErrorChange: [{ type: Output }],
    afterDatepickerOpen: [{ type: Output }],
    afterDatepickerClose: [{ type: Output }],
    input: [{ type: ViewChild, args: ['input',] }],
    inputEle: [{ type: ViewChild, args: ['inputEle',] }],
    containerBlock: [{ type: ViewChild, args: ['containerBlock',] }]
};
if (false) {
    /** @type {?} */
    UiFormDateComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    UiFormDateComponent.prototype._isDisable;
    /** @type {?} */
    UiFormDateComponent.prototype.nxValueChange;
    /**
     * @type {?}
     * @private
     */
    UiFormDateComponent.prototype._nxValue;
    /** @type {?} */
    UiFormDateComponent.prototype.classError;
    /** @type {?} */
    UiFormDateComponent.prototype.classDisable;
    /** @type {?} */
    UiFormDateComponent.prototype.inputStatus;
    /** @type {?} */
    UiFormDateComponent.prototype.inputDate;
    /** @type {?} */
    UiFormDateComponent.prototype.isFocus;
    /** @type {?} */
    UiFormDateComponent.prototype.showDate;
    /** @type {?} */
    UiFormDateComponent.prototype.displayDate;
    /** @type {?} */
    UiFormDateComponent.prototype.maxDate;
    /** @type {?} */
    UiFormDateComponent.prototype.isErrorChange;
    /** @type {?} */
    UiFormDateComponent.prototype.afterDatepickerOpen;
    /** @type {?} */
    UiFormDateComponent.prototype.afterDatepickerClose;
    /** @type {?} */
    UiFormDateComponent.prototype.input;
    /** @type {?} */
    UiFormDateComponent.prototype.inputEle;
    /** @type {?} */
    UiFormDateComponent.prototype.containerBlock;
    /**
     * @type {?}
     * @private
     */
    UiFormDateComponent.prototype.changeDetecor;
    /**
     * @type {?}
     * @private
     */
    UiFormDateComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    UiFormDateComponent.prototype.dateUtils;
    /**
     * @type {?}
     * @private
     */
    UiFormDateComponent.prototype.showRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktZm9ybS1kYXRlL3VpLWZvcm0tZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBZ0IsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsTCxPQUFPLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBdUIsT0FBTyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxXQUFXLEVBQUUsYUFBYSxFQUFZLFNBQVMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBUWpGLE1BQU07Ozs7Ozs7SUFzRUosWUFBb0IsYUFBK0IsRUFDL0IsVUFBc0IsRUFDdEIsU0FBb0IsRUFDZSxRQUFrQjtRQUhyRCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ2UsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXZFaEUsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBUzFCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQStCbkQscUJBQXFCO1FBRWQsZUFBVSxHQUFZLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBR3hCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFVbEIsa0JBQWEsR0FBc0IsSUFB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NENBQWdFOztJQUNoRSxrREFBbUQ7O0lBQ25ELG1EQUFvRDs7SUFFcEQsb0NBQXNDOztJQUN0Qyx1Q0FBNEM7O0lBQzVDLDZDQUF3RDs7Ozs7SUFFNUMsNENBQXVDOzs7OztJQUN2Qyx5Q0FBOEI7Ozs7O0lBQzlCLHdDQUE0Qjs7Ozs7SUFDNUIsdUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RMaXN0ZW5lciwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtnZXREYXRlLCBnZXRIb3VycywgZ2V0TWludXRlcywgZ2V0TW9udGgsIGdldFllYXIsIGlzU2FtZURheSwgaXNCZWZvcmUsIGlzQWZ0ZXJ9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7U3RyaW5nVXRpbHMsIHNob3dSdWxlVG9rZW4sIHNob3dSdWxlLCBEYXRlVXRpbHN9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1kYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0tZGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tZGF0ZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybURhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9pc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgXG4gIGdldCBpc0Rpc2FibGUoKXtcbiAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlO1xuICB9XG4gIHNldCBpc0Rpc2FibGUodmFsKXtcbiAgICB0aGlzLl9pc0Rpc2FibGUgPSB2YWw7XG4gICAgdGhpcy5jbGFzc0Rpc2FibGUgPSB0aGlzLl9pc0Rpc2FibGUgPyAgJ3N0eWxlLWRpc2FibGUnOiAnJzsgXG4gIH1cbiAgQE91dHB1dCgpIG54VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG4gIEBJbnB1dCgpIFxuICBzZXQgbWF4KHZhbHVlOiBEYXRlKSB7XG4gICAgY29uc29sZS53YXJuKCdtYXgnLCB2YWx1ZSk7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IHRoaXMuY29udmVydERhdGVUb1N0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5tYXhEYXRlID0gJyc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX254VmFsdWU7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCkge3JldHVybiB0aGlzLl9ueFZhbHVlO31cbiAgc2V0IG54VmFsdWUodmFsdWUgOiBEYXRlKSB7XG4gICAgY29uc29sZS5sb2coXCJ2YWx1ZTogXCIsIHZhbHVlKTtcbiAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0ZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMuX254VmFsdWUgPSB2YWx1ZTtcblxuXG4gICAgICB0aGlzLnNob3dEYXRlID0gdGhpcy5jb252ZXJ0RGF0ZVRvU3RyaW5nKHRoaXMuX254VmFsdWUpO1xuICAgICAgdGhpcy5kaXNwbGF5RGF0ZSA9IHRoaXMuY29udmVydERhdGVCeUZvcm1hdCh0aGlzLl9ueFZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgXG5cbiAgXG4gIC8vIGVycm9yIHN0YXR1cyBzdHlsZVxuXG4gIHB1YmxpYyBjbGFzc0Vycm9yIDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjbGFzc0Rpc2FibGU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgaW5wdXRTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlucHV0RGF0ZTtcbiAgcHVibGljIGlzRm9jdXM6IGJvb2xlYW49IGZhbHNlO1xuICBwdWJsaWMgc2hvd0RhdGU6IHN0cmluZztcbiAgcHVibGljIGRpc3BsYXlEYXRlOiBzdHJpbmc7XG4gIHB1YmxpYyBtYXhEYXRlOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBnZXQgaXNFcnJvcigpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5pbnB1dFN0YXR1czt9XG4gIHNldCBpc0Vycm9yKHN0YXR1czpib29sZWFuKXtcblxuICAgIHRoaXMuaW5wdXRTdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5jbGFzc0Vycm9yID0gc3RhdHVzID8gJyBzdHlsZS1lcnJvcic6ICcnO1xuICB9XG5cbiAgQE91dHB1dCgpIGlzRXJyb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWZ0ZXJEYXRlcGlja2VyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFmdGVyRGF0ZXBpY2tlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlJykgaW5wdXRFbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lckJsb2NrJykgY29udGFpbmVyQmxvY2s6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY29yOkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGF0ZVV0aWxzOiBEYXRlVXRpbHMsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBzaG93UnVsZTogc2hvd1J1bGUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xhc3NEaXNhYmxlID0gdGhpcy5faXNEaXNhYmxlID8gICdzdHlsZS1kaXNhYmxlJzogJyc7IFxuICB9XG5cbiAgXG5cbiAgZGF0ZUNoYW5nZShjaGFuZ2VEYXRlU3RyKSB7XG5cbiAgICBjb25zb2xlLndhcm4oJ2NoYW5nZURhdGVTdHInLCBjaGFuZ2VEYXRlU3RyKTtcbiAgICBjb25zb2xlLndhcm4oXCJiZWZvcmUgdGhpcy5ueFZhbHVlIFwiLCB0aGlzLl9ueFZhbHVlKTtcbiAgICBjb25zb2xlLndhcm4oXCJ0aGlzLnNob3dEYXRlIFwiLCB0aGlzLnNob3dEYXRlKTtcbiAgICBpZih0aGlzLnNob3dEYXRlICE9IGNoYW5nZURhdGVTdHIpIHtcbiAgICAgIHRoaXMuc2hvd0RhdGUgPSBjaGFuZ2VEYXRlU3RyO1xuXG4gICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuc2hvd0RhdGUpKSB7XG4gICAgICAgIHRoaXMuX254VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnZlcnRTaG93RGF0ZVRvRGF0ZSgpO1xuICAgICAgfVxuICAgICBcblxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY29yLm1hcmtGb3JDaGVjaygpO1xuICAgICAgbGV0IHNjcm9sbENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCcuZm9ybS1zY3JvbGwtY29udGVudCcpO1xuICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdC1hbmRyb2lkJykgIT0gbnVsbCAmJiBzY3JvbGxDb250ZW50ICE9bnVsbCl7XG4gICAgICAgICAgc2Nyb2xsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cblxuXG4gICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl9ueFZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWNvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAvL3RoaXMuZGF0ZVRpbWVDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U2hvd0RhdGVUb0RhdGUoKSB7XG4gICAgbGV0IHRpbWUgPSB0aGlzLnNob3dEYXRlLnNwbGl0KCctJyk7XG4gICAgbGV0IGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuX254VmFsdWUgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lWzBdKSxwYXJzZUludCh0aW1lWzFdKS0xLHBhcnNlSW50KHRpbWVbMl0pLGdldEhvdXJzKGRhdGVOb3cpLGdldE1pbnV0ZXMoZGF0ZU5vdykpO1xuICAgIHRoaXMuc2hvd0RhdGUgPSB0aGlzLmNvbnZlcnREYXRlVG9TdHJpbmcodGhpcy5fbnhWYWx1ZSk7XG4gICAgdGhpcy5kaXNwbGF5RGF0ZSA9IHRoaXMuY29udmVydERhdGVCeUZvcm1hdCh0aGlzLl9ueFZhbHVlKTtcbiAgICBjb25zb2xlLndhcm4oJ2Rpc3BsYXlEYXRlJywgdGhpcy5kaXNwbGF5RGF0ZSk7XG4gIH1cblxuICAvLyBwcml2YXRlIGNvbnZlcnREYXRlMlN0cigpIHtcbiAgLy8gICBjb25zb2xlLndhcm4oJ3VpLWZvcm0tZGF0ZSBueFZhbHVlJywgdGhpcy5ueFZhbHVlKTtcblxuXG4gIC8vICAgbGV0IHRtcDtcbiAgLy8gICBpZiAoZ2V0TW9udGgodGhpcy5ueFZhbHVlKSA8IDkpIHtcbiAgLy8gICAgIHRtcCA9IGdldFllYXIodGhpcy5ueFZhbHVlKS50b1N0cmluZygpICsgJy0nICsgJzAnICsgKGdldE1vbnRoKHRoaXMubnhWYWx1ZSkgKyAxKS50b1N0cmluZygpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0bXAgPSBnZXRZZWFyKHRoaXMubnhWYWx1ZSkudG9TdHJpbmcoKSArICctJyArIChnZXRNb250aCh0aGlzLm54VmFsdWUpICsgMSkudG9TdHJpbmcoKTtcbiAgLy8gICB9XG4gIC8vICAgaWYgKGdldERhdGUodGhpcy5ueFZhbHVlKSA8IDEwKSB7XG4gIC8vICAgICB0bXAgPSB0aGlzLnNob3dEYXRlICsgJy0wJyArIGdldERhdGUodGhpcy5ueFZhbHVlKS50b1N0cmluZygpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0bXAgPSB0aGlzLnNob3dEYXRlICsgJy0nICsgZ2V0RGF0ZSh0aGlzLm54VmFsdWUpLnRvU3RyaW5nKCk7XG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5zaG93RGF0ZSA9IHRtcDtcblxuICAvLyAgIC8vIGlmKCFpc1NhbWVEYXkobmV3VmFsdWUsIHRoaXMuX2lubmVyVmFsdWUpKSB7XG4gIC8vICAgLy8gICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eShuZXdWYWx1ZSkpIHtcbiAgLy8gICAvLyAgICAgdGhpcy5faW5uZXJWYWx1ZSA9IG5ld1ZhbHVlO1xuICAvLyAgIC8vICAgICBpZiAoZ2V0TW9udGgobmV3VmFsdWUpIDwgOSkge1xuICAvLyAgIC8vICAgICAgIHRoaXMuc2hvd0RhdGUgPSBnZXRZZWFyKG5ld1ZhbHVlKS50b1N0cmluZygpICsgJy0nICsgJzAnICsgKGdldE1vbnRoKG5ld1ZhbHVlKSArIDEpLnRvU3RyaW5nKCk7XG4gIC8vICAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgLy8gICAgICAgdGhpcy5zaG93RGF0ZSA9IGdldFllYXIobmV3VmFsdWUpLnRvU3RyaW5nKCkgKyAnLScgKyAoZ2V0TW9udGgobmV3VmFsdWUpICsgMSkudG9TdHJpbmcoKTtcbiAgLy8gICAvLyAgICAgfVxuICAvLyAgIC8vICAgICBpZiAoZ2V0RGF0ZShuZXdWYWx1ZSkgPCAxMCkge1xuICAvLyAgIC8vICAgICAgIHRoaXMuc2hvd0RhdGUgPSB0aGlzLnNob3dEYXRlICsgJy0wJyArIGdldERhdGUobmV3VmFsdWUpLnRvU3RyaW5nKCk7XG4gIC8vICAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgLy8gICAgICAgdGhpcy5zaG93RGF0ZSA9IHRoaXMuc2hvd0RhdGUgKyAnLScgKyBnZXREYXRlKG5ld1ZhbHVlKS50b1N0cmluZygpO1xuICAvLyAgIC8vICAgICB9XG4gIC8vICAgLy8gICAgIHRoaXMuaXNGb2N1cyA9IHRydWU7XG4gIC8vICAgLy8gICB9IGVsc2Uge1xuICAvLyAgIC8vICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZVxuICAvLyAgIC8vICAgfVxuICAvLyAgIC8vIH1cbiAgLy8gfVxuXG4gIGlucHV0Rm9jdXMoKSB7XG4gICAgY29uc29sZS5sb2coJ2lucHV0Rm9jdXMnKTtcbiAgICAvLyB3aGVuIHVzZXIgY2xpY2sgaW5wdXQsIHNjcm9sbCB0b3AgdGhlIGlucHV0LCB0byBwcmV2ZW50IGNhbGVuZGFyIGJlIGN1dHRlZCBiZWNhdXNlIG9mIHNvZnRrZXlib2FyZCBzbGlkZSB1cFxuICAgIGxldCBpbnB1dEVsZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgbGV0IHNjcm9sbENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCcuZm9ybS1zY3JvbGwtY29udGVudCcpO1xuICAgIGNvbnNvbGUubG9nKCdpbnB1dEVsZScsIGlucHV0RWxlLCAnc2Nyb2xsQ29udGVudCcsIHNjcm9sbENvbnRlbnQpO1xuICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBtb3ZlRGlzdCA9IHdpbmRvd1dpZHRoIDwgMTAyNCA/IDEwMDogMjUwO1xuXG4gICAgaWYoc2Nyb2xsQ29udGVudCAhPSBudWxsICl7XG4gICAgbGV0IG1vdmUgPSBzY3JvbGxDb250ZW50LnNjcm9sbFRvcCArIGlucHV0RWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1vdmVEaXN0O1xuICAgIGNvbnNvbGUubG9nKCdtb3ZlJywgbW92ZSk7XG4gICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx0LWFuZHJvaWQnKSAhPSBudWxsKXtcbiAgICAgICAgICBzY3JvbGxDb250ZW50LnNjcm9sbFRvKHt0b3A6IG1vdmUsIGJlaGF2aW9yOlwic21vb3RoXCJ9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pc0ZvY3VzID0gdHJ1ZTtcbiAgfVxuXG4gIFxuXG4gIGNvbnZlcnREYXRlVG9TdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgbGV0IGRhdGVTdHJpbmcgPSAnJztcbiAgICBpZihkYXRlICE9IG51bGwpIHtcbiAgICAgXG4gICAgICBpZihnZXRNb250aChkYXRlKSA8IDkpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGdldFllYXIoZGF0ZSkudG9TdHJpbmcoKSArICctJyArJzAnKyAoZ2V0TW9udGgoZGF0ZSkrMSkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBnZXRZZWFyKGRhdGUpLnRvU3RyaW5nKCkgKyAnLScgKyAoZ2V0TW9udGgoZGF0ZSkrMSkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGlmKGdldERhdGUoZGF0ZSkgPCAxMCkge1xuICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZyArICctMCcgKyBnZXREYXRlKGRhdGUpLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZyArICctJyArIGdldERhdGUoZGF0ZSkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIGRhdGVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgY29udmVydERhdGVCeUZvcm1hdChkYXRlOiBEYXRlKSB7XG4gICAgaWYgKHRoaXMuc2hvd1J1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dSdWxlLmNvbnZlcnREYXRlKGRhdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVVdGlscy50b0RhdGVTdHJpbmcoZGF0ZSwgJ01NL2RkL3l5eXknKTtcbiAgICB9XG4gIH1cblxuICBjaGVja01heERhdGUoKSB7XG4gICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLm1heERhdGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ21heERhdGUnLCB0aGlzLm1heERhdGUpO1xuICAgICAgY29uc29sZS53YXJuKGlzQWZ0ZXIobmV3IERhdGUodGhpcy5zaG93RGF0ZSksIG5ldyBEYXRlKHRoaXMubWF4RGF0ZSkpKTtcbiAgICAgIGlmKGlzQWZ0ZXIobmV3IERhdGUodGhpcy5zaG93RGF0ZSksIG5ldyBEYXRlKHRoaXMubWF4RGF0ZSkpKSB7XG4gICAgICAgIGFsZXJ0KCdzZWxlY3QgZGF0ZSBtdXN0IGJlZm9yZSAnICsgdGhpcy5tYXhEYXRlKTtcbiAgICAgICAgdGhpcy5zaG93RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgdGhpcy5jb252ZXJ0U2hvd0RhdGVUb0RhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG59XG4iXX0=