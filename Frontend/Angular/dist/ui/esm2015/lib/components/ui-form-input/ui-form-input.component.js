/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UiFormErrorMsgInfoComponent } from '../ui-form-error-msg-info/ui-form-error-msg-info.component';
import { Component, Input, Output, EventEmitter, ElementRef, Inject, ChangeDetectorRef } from '@angular/core';
import { StringUtils, NumberFormatPipe } from '@allianzSND/core';
export class UiFormInputComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDector
     * @param {?} numberFormat
     */
    constructor(elementRef, changeDector, numberFormat) {
        this.changeDector = changeDector;
        this.numberFormat = numberFormat;
        this.inputTitle = '';
        this.placeholder = '';
        this.typeUi = 'style1';
        this.isDisable = false;
        this.id = '';
        this._type = 'text'; // 預設是text 可以輸入其他種input type
        // 取得model的預設值
        this.ngModelChange = new EventEmitter();
        this.eventObj = new EventEmitter();
        this.nxValueChange = new EventEmitter();
        // error status style
        this.classError = '';
        this.inputStatus = false;
        this.isAndroid = false;
        this.inputType = '';
        this.isErrorChange = new EventEmitter();
        this.onKeypress = new EventEmitter();
        this.isFocus = false;
        this._disabled = false;
        this.elementRef = elementRef;
    }
    // 預設是text 可以輸入其他種input type
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.inputType = this._type === 'dollar' ? 'tel' : this._type;
    }
    /**
     * @return {?}
     */
    get maxLength() {
        return this._maxLength;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxLength(value) {
        if (value != 0 && this._type === 'dollar') {
            this._maxLength = value + Math.floor((value - 1) / 3);
        }
        else {
            this._maxLength = value;
        }
        console.log("this._maxLength:", this._maxLength);
    }
    /**
     * @return {?}
     */
    get nxValue() { return this.value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set nxValue(newValue) {
        if (this.type == 'dollar') {
            this.value = this.convertNumberThousand(newValue); //千分位function待替換
        }
        else {
            this.value = newValue;
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
     * @param {?} bool
     * @return {?}
     */
    focusBlurEvent(bool) {
        this.eventObj.emit(this.isFocus);
        if (this.errorMagInfo != undefined) {
            this.errorMagInfo.controlMsg(this.isFocus);
        }
    }
    // when input focus input scroll to top
    //scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
    /**
     * @return {?}
     */
    focus() {
        //this.scrollTop = 20;
        /** @type {?} */
        let body = document.getElementsByTagName("body")[0];
        body.classList.add("ios-keyIn");
        this.isFocus = true;
        /** @type {?} */
        let inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        let scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        /** @type {?} */
        let windowWidth = window.innerWidth;
        /** @type {?} */
        let moveDist = windowWidth < 1024 ? 100 : 250;
        // console.log('scrollContent', scrollContent);
        // console.log('focus windowWidth', windowWidth, ' ', moveDist);
        if (scrollContent != null) {
            /** @type {?} */
            let move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            console.log('move', move);
            // if (document.querySelector('.plt-android') != null) {
            //   scrollContent.classList.add('active');
            //   scrollContent.scrollTo({ top: move, behavior: "smooth" });
            // }
        }
        this.focusBlurEvent(this.isFocus);
    }
    /**
     * @return {?}
     */
    blur() {
        /** @type {?} */
        let body = document.getElementsByTagName("body")[0];
        body.classList.remove("ios-keyIn");
        this.isFocus = false;
        /** @type {?} */
        let scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        if (document.querySelector('.plt-android') != null && scrollContent != null) {
            scrollContent.classList.remove('active');
        }
        this.focusBlurEvent(this.isFocus);
    }
    /**
     * @return {?}
     */
    get result() {
        return this.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set result(value) {
        console.log("ui-form-input set result value:", value);
        /** @type {?} */
        let tempValue = value.replace(/[^0-9]/ig, "");
        console.log("ui-form-input set result tempValue:", tempValue);
        if (this.type == 'dollar') {
            /** @type {?} */
            let valHasNoDot;
            /** @type {?} */
            let convertedVal = '';
            if (Number(tempValue) == 0 && tempValue.length === 0) { //僅輸入符號
                convertedVal = '';
            }
            else if (Number(tempValue) == 0 && tempValue.length > 0) { //輸入N個0
                convertedVal = '0'; //0
                valHasNoDot = '0';
            }
            else { //非0數字
                valHasNoDot = Number(tempValue).toString();
                convertedVal = this.convertNumberThousand(Number(tempValue));
                console.log("not zero value:", this.value);
            }
            console.debug('ui-form-input', valHasNoDot);
            if (this.nxValueChange) {
                this.nxValueChange.emit(valHasNoDot);
            }
            //Fix中文字偵測問題
            console.log("Fix:", this.value);
            if (!this.value || this.value === convertedVal) {
                this.value = `${this.value} `;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.value = convertedVal;
                    this.changeDector.detectChanges();
                }));
            }
            else {
                this.value = convertedVal;
            }
            this.changeDector.detectChanges();
        }
        else {
            this.value = value;
            // console.debug('ui-form-input',this.value);
            if (this.nxValueChange) {
                this.nxValueChange.emit(this.value);
            }
        }
    }
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40 && event.keyCode != 8) {
            if (StringUtils.byteLength(event.target.value.toString()) > (this.maxLength - 1)) {
                console.log('太長了！maxLength:', this.maxLength);
                return false;
            }
            if (this.type == 'dollar') { // nonnumeric word not allow 
                // nonnumeric word not allow 
                /** @type {?} */
                let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                if (numArr.indexOf(event.key) < 0) {
                    return false;
                }
            }
        }
        this.onKeypress.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        /** @type {?} */
        let returnString = this.value;
        if (event.keyCode == 13) {
            while (StringUtils.byteLength(returnString) > (this.maxLength)) {
                returnString = returnString.substr(0, returnString.length - 1);
            }
        }
        this.value = returnString;
        this.onKeypress.emit(event);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.type == 'dollar') {
            this.value = this.convertNumberThousand(this.value);
        }
    }
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    convertNumberThousand(num) {
        if (num && num.toString) {
            // var numString = num.toString();
            // var pattern = /(-?\d+)(\d{3})/;
            // console.log("convertNumberThousand:", num, pattern);
            // while (pattern.test(numString)) {
            //   numString = numString.replace(pattern, "$1,$2");
            // }
            // console.log("convertNumberThousand return:", numString);
            // return numString;
            return this.numberFormat.transform(num);
        }
        else
            return '';
    }
}
UiFormInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-input',
                template: "\n<!-- norml input -->\n\n<div class=\"input-block \" [ngClass]=\"typeUi\">\n    <nx-formfield  [nxLabel]=\"inputTitle\" nxFloatLabel=\"auto\" [ngClass]=\"classError\">\n        <input [type]=\"inputType\" (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\" [maxlength]=\"maxLength\" [(ngModel)]='result' (focus)=\"focus()\" (blur)=\"blur()\"  [placeholder]=\"placeholder\" nxInput  [name]='name' [disabled]=\"isDisable\" [id]=\"id\"/>\n    </nx-formfield>\n    <span class=\"form-unit\"><ng-content></ng-content></span>\n</div>\n\n<!-- end of normal input -->\n\n\n\n",
                styles: [":host{position:relative}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield__flexfield,:host ::ng-deep .select-body-block{min-height:30px}:host ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}:host ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}:host ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700;font-size:1rem;-webkit-transform:translateY(-26px);transform:translateY(-26px);color:#414141}:host .input-block{display:flex;width:100%;align-items:baseline;position:relative}:host .input-block .c-input{font-size:1.25rem}:host .input-block .c-input.is-filled{font-weight:400}:host .input-block .c-input.is-filled .nx-formfield__label{background-color:transparent}:host .input-block .c-input.is-disabled{color:#c2c2c2}:host .input-block .form-unit{display:flex;flex-grow:0;font-weight:700;font-size:.875rem}:host .input-block .form-unit:empty{display:none}:host .input-block.style2 ::ng-deep .nx-formfield .c-input{text-align:center}:host ::ng-deep .nx-formfield{display:flex;flex-grow:1;min-width:100%}:host ::ng-deep .nx-formfield .nx-formfield__wrapper{display:block;width:100%}:host ::ng-deep .nx-formfield.is-filled .nx-formfield__label{background-color:transparent}:host ::ng-deep .nx-formfield.style-error .nx-formfield__flexfield{border-color:#dc3149}:host ::ng-deep .nx-formfield.style-error .nx-formfield.is-floating .nx-formfield__label{color:#dc3149}:host ::ng-deep .nx-formfield.style-error input{color:#dc3149}:host ::ng-deep .nx-formfield ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::ng-deep .nx-formfield textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::ng-deep .nx-formfield ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}@media screen and (min-width:1025px){:host .input-block .c-input{font-size:1.25rem}}:host-context(.disable) ::ng-deep .nx-formfield.is-floating .nx-formfield__label{color:#c2c2c2}:host-context(.disable) ::ng-deep .nx-formfield .nx-formfield__flexfield{border-color:#c2c2c2}"]
            }] }
];
UiFormInputComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
    { type: ChangeDetectorRef },
    { type: NumberFormatPipe }
];
UiFormInputComponent.propDecorators = {
    name: [{ type: Input }],
    inputTitle: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    typeUi: [{ type: Input }],
    isDisable: [{ type: Input }],
    id: [{ type: Input }],
    type: [{ type: Input }],
    maxLength: [{ type: Input }],
    ngModelChange: [{ type: Output }],
    eventObj: [{ type: Output }],
    errorMagInfo: [{ type: Input }],
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    isError: [{ type: Input }],
    isErrorChange: [{ type: Output }],
    onKeypress: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiFormInputComponent.prototype.name;
    /** @type {?} */
    UiFormInputComponent.prototype.inputTitle;
    /** @type {?} */
    UiFormInputComponent.prototype.value;
    /** @type {?} */
    UiFormInputComponent.prototype.placeholder;
    /** @type {?} */
    UiFormInputComponent.prototype.typeUi;
    /** @type {?} */
    UiFormInputComponent.prototype.isDisable;
    /** @type {?} */
    UiFormInputComponent.prototype.id;
    /**
     * @type {?}
     * @private
     */
    UiFormInputComponent.prototype._type;
    /** @type {?} */
    UiFormInputComponent.prototype.maxLengthValue;
    /**
     * @type {?}
     * @private
     */
    UiFormInputComponent.prototype._maxLength;
    /** @type {?} */
    UiFormInputComponent.prototype.ngModelChange;
    /** @type {?} */
    UiFormInputComponent.prototype.eventObj;
    /** @type {?} */
    UiFormInputComponent.prototype.errorMagInfo;
    /** @type {?} */
    UiFormInputComponent.prototype.nxValueChange;
    /** @type {?} */
    UiFormInputComponent.prototype.classError;
    /** @type {?} */
    UiFormInputComponent.prototype.inputStatus;
    /** @type {?} */
    UiFormInputComponent.prototype.isAndroid;
    /** @type {?} */
    UiFormInputComponent.prototype.inputType;
    /** @type {?} */
    UiFormInputComponent.prototype.isErrorChange;
    /** @type {?} */
    UiFormInputComponent.prototype.onKeypress;
    /** @type {?} */
    UiFormInputComponent.prototype.data;
    /** @type {?} */
    UiFormInputComponent.prototype.elementRef;
    /** @type {?} */
    UiFormInputComponent.prototype.isFocus;
    /**
     * @type {?}
     * @private
     */
    UiFormInputComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    UiFormInputComponent.prototype.changeDector;
    /**
     * @type {?}
     * @private
     */
    UiFormInputComponent.prototype.numberFormat;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0taW5wdXQvdWktZm9ybS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLFVBQVUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEosT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBU2pFLE1BQU07Ozs7OztJQXlFSixZQUNzQixVQUFzQixFQUNsQyxZQUErQixFQUMvQixZQUE4QjtRQUQ5QixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBMUUvQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxRQUFRLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixPQUFFLEdBQVcsRUFBRSxDQUFDO1FBR2pCLFVBQUssR0FBVyxNQUFNLENBQUMsQ0FBQyw0QkFBNEI7UUEwQjVELGNBQWM7UUFDSixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFXOUIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRSxxQkFBcUI7UUFFZCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVB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VXZCLHVDQUF5Qjs7Ozs7SUF5RHpCLHlDQUEwQjs7Ozs7SUEvRHhCLDRDQUF1Qzs7Ozs7SUFDdkMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWlGb3JtRXJyb3JNc2dJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktZm9ybS1lcnJvci1tc2ctaW5mby91aS1mb3JtLWVycm9yLW1zZy1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1V0aWxzLCBOdW1iZXJGb3JtYXRQaXBlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0taW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0taW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFVpRm9ybUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dFRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0eXBlVWk6IHN0cmluZyA9ICdzdHlsZTEnO1xuICBASW5wdXQoKSBpc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuXG5cbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nID0gJ3RleHQnOyAvLyDpoJDoqK3mmK90ZXh0IOWPr+S7pei8uOWFpeWFtuS7lueormlucHV0IHR5cGVcbiAgQElucHV0KClcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5pbnB1dFR5cGUgPSB0aGlzLl90eXBlID09PSAnZG9sbGFyJyA/ICd0ZWwnIDogdGhpcy5fdHlwZTtcbiAgfVxuICAvL0BJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gLTE7IC8vIOaykuioreWumuaZguS4jeeUqG1heGxlbmd0aFxuICBwdWJsaWMgbWF4TGVuZ3RoVmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWF4TGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGdldCBtYXhMZW5ndGgoKTogbnVtYmVye1xuICAgIHJldHVybiB0aGlzLl9tYXhMZW5ndGg7XG4gIH1cbiAgc2V0IG1heExlbmd0aCh2YWx1ZTogbnVtYmVyKXtcblxuICAgIGlmKCB2YWx1ZSE9MCAmJiB0aGlzLl90eXBlID09PSAnZG9sbGFyJyl7XG4gICAgICB0aGlzLl9tYXhMZW5ndGggPSB2YWx1ZSArIE1hdGguZmxvb3IoKHZhbHVlLTEpLzMpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5fbWF4TGVuZ3RoID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5fbWF4TGVuZ3RoOlwiLHRoaXMuX21heExlbmd0aCk7XG4gIH1cblxuICAvLyDlj5blvpdtb2RlbOeahOmgkOioreWAvFxuICBAT3V0cHV0KCkgbmdNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGV2ZW50T2JqID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBlcnJvck1hZ0luZm86IFVpRm9ybUVycm9yTXNnSW5mb0NvbXBvbmVudDtcbiAgQElucHV0KClcbiAgZ2V0IG54VmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMudmFsdWU7IH1cbiAgc2V0IG54VmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RvbGxhcicpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbnZlcnROdW1iZXJUaG91c2FuZChuZXdWYWx1ZSk7ICAvL+WNg+WIhuS9jWZ1bmN0aW9u5b6F5pu/5o+bXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIG54VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGVycm9yIHN0YXR1cyBzdHlsZVxuXG4gIHB1YmxpYyBjbGFzc0Vycm9yOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGlucHV0U3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0FuZHJvaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlucHV0VHlwZTogc3RyaW5nID0gJydcblxuICBASW5wdXQoKVxuICBnZXQgaXNFcnJvcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaW5wdXRTdGF0dXM7IH1cbiAgc2V0IGlzRXJyb3Ioc3RhdHVzOiBib29sZWFuKSB7XG5cbiAgICB0aGlzLmlucHV0U3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuY2xhc3NFcnJvciA9IHN0YXR1cyA/ICcgc3R5bGUtZXJyb3InIDogJyc7XG4gIH1cblxuICBAT3V0cHV0KCkgaXNFcnJvckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG9uS2V5cHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkYXRhOiB7IHZhbHVlOiBzdHJpbmcgfTtcblxuICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNoYW5nZURlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBudW1iZXJGb3JtYXQ6IE51bWJlckZvcm1hdFBpcGVcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgfVxuXG4gIGlzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBmb2N1c0JsdXJFdmVudChib29sOiBib29sZWFuKSB7XG4gICAgdGhpcy5ldmVudE9iai5lbWl0KHRoaXMuaXNGb2N1cyk7XG4gICAgaWYgKHRoaXMuZXJyb3JNYWdJbmZvICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5lcnJvck1hZ0luZm8uY29udHJvbE1zZyh0aGlzLmlzRm9jdXMpO1xuICAgIH1cbiAgfVxuICAvLyB3aGVuIGlucHV0IGZvY3VzIGlucHV0IHNjcm9sbCB0byB0b3BcblxuICAvL3Njcm9sbENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zY3JvbGwtY29udGVudCcpO1xuICBmb2N1cygpIHtcbiAgICAvL3RoaXMuc2Nyb2xsVG9wID0gMjA7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiaW9zLWtleUluXCIpO1xuICAgIHRoaXMuaXNGb2N1cyA9IHRydWU7XG4gICAgbGV0IGlucHV0RWxlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBsZXQgc2Nyb2xsQ29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJy5mb3JtLXNjcm9sbC1jb250ZW50Jyk7XG4gICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBsZXQgbW92ZURpc3QgPSB3aW5kb3dXaWR0aCA8IDEwMjQgPyAxMDAgOiAyNTA7XG4gICAgLy8gY29uc29sZS5sb2coJ3Njcm9sbENvbnRlbnQnLCBzY3JvbGxDb250ZW50KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdmb2N1cyB3aW5kb3dXaWR0aCcsIHdpbmRvd1dpZHRoLCAnICcsIG1vdmVEaXN0KTtcblxuXG4gICAgaWYgKHNjcm9sbENvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgbGV0IG1vdmUgPSBzY3JvbGxDb250ZW50LnNjcm9sbFRvcCArIGlucHV0RWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1vdmVEaXN0O1xuXG4gICAgICBjb25zb2xlLmxvZygnbW92ZScsIG1vdmUpO1xuXG4gICAgICAvLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdC1hbmRyb2lkJykgIT0gbnVsbCkge1xuICAgICAgLy8gICBzY3JvbGxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgLy8gICBzY3JvbGxDb250ZW50LnNjcm9sbFRvKHsgdG9wOiBtb3ZlLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIC8vIH1cbiAgICB9XG5cblxuICAgIHRoaXMuZm9jdXNCbHVyRXZlbnQodGhpcy5pc0ZvY3VzKTtcbiAgfVxuICBibHVyKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImlvcy1rZXlJblwiKTtcbiAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICBsZXQgc2Nyb2xsQ29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJy5mb3JtLXNjcm9sbC1jb250ZW50Jyk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHQtYW5kcm9pZCcpICE9IG51bGwgJiYgc2Nyb2xsQ29udGVudCAhPSBudWxsKSB7XG4gICAgICBzY3JvbGxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNCbHVyRXZlbnQodGhpcy5pc0ZvY3VzKTtcblxuICB9XG5cblxuXG5cblxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGdldCByZXN1bHQoKSB7IC8v5Y+W5b6XTmdNb2RlbOeahOWAvFxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2V0IHJlc3VsdCh2YWx1ZSkgeyAvL+Wvq+mAsk5nTW9kZWznmoTlgLxcbiAgICBjb25zb2xlLmxvZyhcInVpLWZvcm0taW5wdXQgc2V0IHJlc3VsdCB2YWx1ZTpcIiwgdmFsdWUpO1xuICAgIGxldCB0ZW1wVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0vaWcsIFwiXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidWktZm9ybS1pbnB1dCBzZXQgcmVzdWx0IHRlbXBWYWx1ZTpcIiwgdGVtcFZhbHVlKTtcbiAgICBpZiAodGhpcy50eXBlID09ICdkb2xsYXInKSB7XG4gICAgICBsZXQgdmFsSGFzTm9Eb3Q7XG4gICAgICBsZXQgY29udmVydGVkVmFsID0gJyc7XG4gICAgICBpZiAoTnVtYmVyKHRlbXBWYWx1ZSkgPT0gMCAmJiB0ZW1wVmFsdWUubGVuZ3RoID09PSAwKSB7IC8v5YOF6Ly45YWl56ym6JmfXG4gICAgICAgIGNvbnZlcnRlZFZhbCA9ICcnO1xuICAgICAgfSBlbHNlIGlmIChOdW1iZXIodGVtcFZhbHVlKSA9PSAwICYmIHRlbXBWYWx1ZS5sZW5ndGggPiAwKSB7IC8v6Ly45YWlTuWAizBcbiAgICAgICAgY29udmVydGVkVmFsID0gJzAnOyAvLzBcbiAgICAgICAgdmFsSGFzTm9Eb3QgPSAnMCc7XG4gICAgICB9IGVsc2UgeyAgLy/pnZ4w5pW45a2XXG4gICAgICAgIHZhbEhhc05vRG90ID0gTnVtYmVyKHRlbXBWYWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgY29udmVydGVkVmFsID0gdGhpcy5jb252ZXJ0TnVtYmVyVGhvdXNhbmQoTnVtYmVyKHRlbXBWYWx1ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCB6ZXJvIHZhbHVlOlwiLCB0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUuZGVidWcoJ3VpLWZvcm0taW5wdXQnLCB2YWxIYXNOb0RvdCk7XG4gICAgICBpZiAodGhpcy5ueFZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHZhbEhhc05vRG90KTtcbiAgICAgIH1cblxuICAgICAgLy9GaXjkuK3mloflrZflgbXmuKzllY/poYxcbiAgICAgIGNvbnNvbGUubG9nKFwiRml4OlwiLCB0aGlzLnZhbHVlKTtcbiAgICAgIGlmICghdGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlID09PSBjb252ZXJ0ZWRWYWwpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGAke3RoaXMudmFsdWV9IGA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBjb252ZXJ0ZWRWYWw7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gY29udmVydGVkVmFsO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ3VpLWZvcm0taW5wdXQnLHRoaXMudmFsdWUpO1xuICAgICAgaWYgKHRoaXMubnhWYWx1ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICAvL2tleXByZXNzXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlICE9IDM3ICYmIGV2ZW50LmtleUNvZGUgIT0gMzggJiYgZXZlbnQua2V5Q29kZSAhPSAzOSAmJiBldmVudC5rZXlDb2RlICE9IDQwICYmIGV2ZW50LmtleUNvZGUgIT0gOCkge1xuICAgICAgaWYgKFN0cmluZ1V0aWxzLmJ5dGVMZW5ndGgoZXZlbnQudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkpID4gKHRoaXMubWF4TGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+WkqumVt+S6hu+8gW1heExlbmd0aDonLHRoaXMubWF4TGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnZG9sbGFyJykgeyAvLyBub25udW1lcmljIHdvcmQgbm90IGFsbG93IFxuICAgICAgICBsZXQgbnVtQXJyID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J107XG4gICAgICAgIGlmIChudW1BcnIuaW5kZXhPZihldmVudC5rZXkpIDwgMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uS2V5cHJlc3MuZW1pdChldmVudClcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICBsZXQgcmV0dXJuU3RyaW5nID0gdGhpcy52YWx1ZTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgd2hpbGUgKFN0cmluZ1V0aWxzLmJ5dGVMZW5ndGgocmV0dXJuU3RyaW5nKSA+ICh0aGlzLm1heExlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuU3RyaW5nID0gcmV0dXJuU3RyaW5nLnN1YnN0cigwLCByZXR1cm5TdHJpbmcubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSByZXR1cm5TdHJpbmc7XG4gICAgdGhpcy5vbktleXByZXNzLmVtaXQoZXZlbnQpXG4gIH1cblxuXG5cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RvbGxhcicpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbnZlcnROdW1iZXJUaG91c2FuZCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvL+i9ieaPm+WNg+S9jeaVuOihqOekuuazle+8iDAwMCwwMDAsMDAw77yJXG4gIHB1YmxpYyBjb252ZXJ0TnVtYmVyVGhvdXNhbmQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChudW0gJiYgbnVtLnRvU3RyaW5nKSB7XG4gICAgICAvLyB2YXIgbnVtU3RyaW5nID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgICAvLyB2YXIgcGF0dGVybiA9IC8oLT9cXGQrKShcXGR7M30pLztcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29udmVydE51bWJlclRob3VzYW5kOlwiLCBudW0sIHBhdHRlcm4pO1xuXG4gICAgICAvLyB3aGlsZSAocGF0dGVybi50ZXN0KG51bVN0cmluZykpIHtcbiAgICAgIC8vICAgbnVtU3RyaW5nID0gbnVtU3RyaW5nLnJlcGxhY2UocGF0dGVybiwgXCIkMSwkMlwiKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29udmVydE51bWJlclRob3VzYW5kIHJldHVybjpcIiwgbnVtU3RyaW5nKTtcbiAgICAgIC8vIHJldHVybiBudW1TdHJpbmc7XG4gICAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXQudHJhbnNmb3JtKG51bSk7XG4gICAgfVxuXG4gICAgZWxzZVxuICAgICAgcmV0dXJuICcnO1xuICB9XG5cbn0iXX0=