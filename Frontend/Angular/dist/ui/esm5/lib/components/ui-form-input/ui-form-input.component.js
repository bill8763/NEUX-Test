/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UiFormErrorMsgInfoComponent } from '../ui-form-error-msg-info/ui-form-error-msg-info.component';
import { Component, Input, Output, EventEmitter, ElementRef, Inject, ChangeDetectorRef } from '@angular/core';
import { StringUtils, NumberFormatPipe } from '@allianzSND/core';
var UiFormInputComponent = /** @class */ (function () {
    function UiFormInputComponent(elementRef, changeDector, numberFormat) {
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
    Object.defineProperty(UiFormInputComponent.prototype, "type", {
        get: 
        // 預設是text 可以輸入其他種input type
        /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.inputType = this._type === 'dollar' ? 'tel' : this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormInputComponent.prototype, "maxLength", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxLength;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != 0 && this._type === 'dollar') {
                this._maxLength = value + Math.floor((value - 1) / 3);
            }
            else {
                this._maxLength = value;
            }
            console.log("this._maxLength:", this._maxLength);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormInputComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.type == 'dollar') {
                this.value = this.convertNumberThousand(newValue); //千分位function待替換
            }
            else {
                this.value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormInputComponent.prototype, "isError", {
        get: /**
         * @return {?}
         */
        function () { return this.inputStatus; },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.inputStatus = status;
            this.classError = status ? ' style-error' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bool
     * @return {?}
     */
    UiFormInputComponent.prototype.focusBlurEvent = /**
     * @param {?} bool
     * @return {?}
     */
    function (bool) {
        this.eventObj.emit(this.isFocus);
        if (this.errorMagInfo != undefined) {
            this.errorMagInfo.controlMsg(this.isFocus);
        }
    };
    // when input focus input scroll to top
    //scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
    // when input focus input scroll to top
    //scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
    /**
     * @return {?}
     */
    UiFormInputComponent.prototype.focus = 
    // when input focus input scroll to top
    //scrollContent = this.elementRef.nativeElement.querySelector('.form-scroll-content');
    /**
     * @return {?}
     */
    function () {
        //this.scrollTop = 20;
        /** @type {?} */
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("ios-keyIn");
        this.isFocus = true;
        /** @type {?} */
        var inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        /** @type {?} */
        var windowWidth = window.innerWidth;
        /** @type {?} */
        var moveDist = windowWidth < 1024 ? 100 : 250;
        // console.log('scrollContent', scrollContent);
        // console.log('focus windowWidth', windowWidth, ' ', moveDist);
        if (scrollContent != null) {
            /** @type {?} */
            var move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            console.log('move', move);
            // if (document.querySelector('.plt-android') != null) {
            //   scrollContent.classList.add('active');
            //   scrollContent.scrollTo({ top: move, behavior: "smooth" });
            // }
        }
        this.focusBlurEvent(this.isFocus);
    };
    /**
     * @return {?}
     */
    UiFormInputComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("ios-keyIn");
        this.isFocus = false;
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        if (document.querySelector('.plt-android') != null && scrollContent != null) {
            scrollContent.classList.remove('active');
        }
        this.focusBlurEvent(this.isFocus);
    };
    Object.defineProperty(UiFormInputComponent.prototype, "result", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            console.log("ui-form-input set result value:", value);
            /** @type {?} */
            var tempValue = value.replace(/[^0-9]/ig, "");
            console.log("ui-form-input set result tempValue:", tempValue);
            if (this.type == 'dollar') {
                /** @type {?} */
                var valHasNoDot = void 0;
                /** @type {?} */
                var convertedVal_1 = '';
                if (Number(tempValue) == 0 && tempValue.length === 0) { //僅輸入符號
                    convertedVal_1 = '';
                }
                else if (Number(tempValue) == 0 && tempValue.length > 0) { //輸入N個0
                    convertedVal_1 = '0'; //0
                    valHasNoDot = '0';
                }
                else { //非0數字
                    valHasNoDot = Number(tempValue).toString();
                    convertedVal_1 = this.convertNumberThousand(Number(tempValue));
                    console.log("not zero value:", this.value);
                }
                console.debug('ui-form-input', valHasNoDot);
                if (this.nxValueChange) {
                    this.nxValueChange.emit(valHasNoDot);
                }
                //Fix中文字偵測問題
                console.log("Fix:", this.value);
                if (!this.value || this.value === convertedVal_1) {
                    this.value = this.value + " ";
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.value = convertedVal_1;
                        _this.changeDector.detectChanges();
                    }));
                }
                else {
                    this.value = convertedVal_1;
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
        },
        enumerable: true,
        configurable: true
    });
    //keypress
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormInputComponent.prototype.onKeyDown = 
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40 && event.keyCode != 8) {
            if (StringUtils.byteLength(event.target.value.toString()) > (this.maxLength - 1)) {
                console.log('太長了！maxLength:', this.maxLength);
                return false;
            }
            if (this.type == 'dollar') { // nonnumeric word not allow 
                // nonnumeric word not allow 
                /** @type {?} */
                var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                if (numArr.indexOf(event.key) < 0) {
                    return false;
                }
            }
        }
        this.onKeypress.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormInputComponent.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var returnString = this.value;
        if (event.keyCode == 13) {
            while (StringUtils.byteLength(returnString) > (this.maxLength)) {
                returnString = returnString.substr(0, returnString.length - 1);
            }
        }
        this.value = returnString;
        this.onKeypress.emit(event);
    };
    /**
     * @return {?}
     */
    UiFormInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.type == 'dollar') {
            this.value = this.convertNumberThousand(this.value);
        }
    };
    //轉換千位數表示法（000,000,000）
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    UiFormInputComponent.prototype.convertNumberThousand = 
    //轉換千位數表示法（000,000,000）
    /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
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
    };
    UiFormInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-input',
                    template: "\n<!-- norml input -->\n\n<div class=\"input-block \" [ngClass]=\"typeUi\">\n    <nx-formfield  [nxLabel]=\"inputTitle\" nxFloatLabel=\"auto\" [ngClass]=\"classError\">\n        <input [type]=\"inputType\" (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\" [maxlength]=\"maxLength\" [(ngModel)]='result' (focus)=\"focus()\" (blur)=\"blur()\"  [placeholder]=\"placeholder\" nxInput  [name]='name' [disabled]=\"isDisable\" [id]=\"id\"/>\n    </nx-formfield>\n    <span class=\"form-unit\"><ng-content></ng-content></span>\n</div>\n\n<!-- end of normal input -->\n\n\n\n",
                    styles: [":host{position:relative}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield__flexfield,:host ::ng-deep .select-body-block{min-height:30px}:host ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}:host ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}:host ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700;font-size:1rem;-webkit-transform:translateY(-26px);transform:translateY(-26px);color:#414141}:host .input-block{display:flex;width:100%;align-items:baseline;position:relative}:host .input-block .c-input{font-size:1.25rem}:host .input-block .c-input.is-filled{font-weight:400}:host .input-block .c-input.is-filled .nx-formfield__label{background-color:transparent}:host .input-block .c-input.is-disabled{color:#c2c2c2}:host .input-block .form-unit{display:flex;flex-grow:0;font-weight:700;font-size:.875rem}:host .input-block .form-unit:empty{display:none}:host .input-block.style2 ::ng-deep .nx-formfield .c-input{text-align:center}:host ::ng-deep .nx-formfield{display:flex;flex-grow:1;min-width:100%}:host ::ng-deep .nx-formfield .nx-formfield__wrapper{display:block;width:100%}:host ::ng-deep .nx-formfield.is-filled .nx-formfield__label{background-color:transparent}:host ::ng-deep .nx-formfield.style-error .nx-formfield__flexfield{border-color:#dc3149}:host ::ng-deep .nx-formfield.style-error .nx-formfield.is-floating .nx-formfield__label{color:#dc3149}:host ::ng-deep .nx-formfield.style-error input{color:#dc3149}:host ::ng-deep .nx-formfield ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::ng-deep .nx-formfield textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::ng-deep .nx-formfield ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}@media screen and (min-width:1025px){:host .input-block .c-input{font-size:1.25rem}}:host-context(.disable) ::ng-deep .nx-formfield.is-floating .nx-formfield__label{color:#c2c2c2}:host-context(.disable) ::ng-deep .nx-formfield .nx-formfield__flexfield{border-color:#c2c2c2}"]
                }] }
    ];
    UiFormInputComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
        { type: ChangeDetectorRef },
        { type: NumberFormatPipe }
    ]; };
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
    return UiFormInputComponent;
}());
export { UiFormInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0taW5wdXQvdWktZm9ybS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLFVBQVUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEosT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pFO0lBK0VFLDhCQUNzQixVQUFzQixFQUNsQyxZQUErQixFQUMvQixZQUE4QjtRQUQ5QixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBMUUvQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxRQUFRLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixPQUFFLEdBQVcsRUFBRSxDQUFDO1FBR2pCLFVBQUssR0FBVyxNQUFNLENBQUMsQ0FBQyw0QkFBNEI7UUEwQjVELGNBQWM7UUFDSixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFXOUIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRSxxQkFBcUI7UUFFZCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQTtR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R3pCLHFDQUErQjs7SUFVL0IsOENBQThCOzs7OztJQUM5QiwwQ0FBMkI7O0lBZ0IzQiw2Q0FBNkM7O0lBQzdDLHdDQUF3Qzs7SUFDeEMsNENBQW1EOztJQVVuRCw2Q0FBZ0U7O0lBSWhFLDBDQUErQjs7SUFDL0IsMkNBQW9DOztJQUNwQyx5Q0FBa0M7O0lBQ2xDLHlDQUE2Qjs7SUFVN0IsNkNBQWdFOztJQUVoRSwwQ0FBNkQ7O0lBQzdELG9DQUF3Qjs7SUFFeEIsMENBQXVCOztJQVV2Qix1Q0FBeUI7Ozs7O0lBeUR6Qix5Q0FBMEI7Ozs7O0lBL0R4Qiw0Q0FBdUM7Ozs7O0lBQ3ZDLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVpRm9ybUVycm9yTXNnSW5mb0NvbXBvbmVudCB9IGZyb20gJy4uL3VpLWZvcm0tZXJyb3ItbXNnLWluZm8vdWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscywgTnVtYmVyRm9ybWF0UGlwZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLWlucHV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBVaUZvcm1JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaW5wdXRUaXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdHlwZVVpOiBzdHJpbmcgPSAnc3R5bGUxJztcbiAgQElucHV0KCkgaXNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcblxuXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZyA9ICd0ZXh0JzsgLy8g6aCQ6Kit5pivdGV4dCDlj6/ku6XovLjlhaXlhbbku5bnqK5pbnB1dCB0eXBlXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuaW5wdXRUeXBlID0gdGhpcy5fdHlwZSA9PT0gJ2RvbGxhcicgPyAndGVsJyA6IHRoaXMuX3R5cGU7XG4gIH1cbiAgLy9ASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IC0xOyAvLyDmspLoqK3lrprmmYLkuI3nlKhtYXhsZW5ndGhcbiAgcHVibGljIG1heExlbmd0aFZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX21heExlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBnZXQgbWF4TGVuZ3RoKCk6IG51bWJlcntcbiAgICByZXR1cm4gdGhpcy5fbWF4TGVuZ3RoO1xuICB9XG4gIHNldCBtYXhMZW5ndGgodmFsdWU6IG51bWJlcil7XG5cbiAgICBpZiggdmFsdWUhPTAgJiYgdGhpcy5fdHlwZSA9PT0gJ2RvbGxhcicpe1xuICAgICAgdGhpcy5fbWF4TGVuZ3RoID0gdmFsdWUgKyBNYXRoLmZsb29yKCh2YWx1ZS0xKS8zKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuX21heExlbmd0aCA9IHZhbHVlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuX21heExlbmd0aDpcIix0aGlzLl9tYXhMZW5ndGgpO1xuICB9XG5cbiAgLy8g5Y+W5b6XbW9kZWznmoTpoJDoqK3lgLxcbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBldmVudE9iaiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZXJyb3JNYWdJbmZvOiBVaUZvcm1FcnJvck1zZ0luZm9Db21wb25lbnQ7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnZhbHVlOyB9XG4gIHNldCBueFZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy50eXBlID09ICdkb2xsYXInKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5jb252ZXJ0TnVtYmVyVGhvdXNhbmQobmV3VmFsdWUpOyAgLy/ljYPliIbkvY1mdW5jdGlvbuW+heabv+aPm1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBlcnJvciBzdGF0dXMgc3R5bGVcblxuICBwdWJsaWMgY2xhc3NFcnJvcjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBpbnB1dFN0YXR1czogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNBbmRyb2lkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpbnB1dFR5cGU6IHN0cmluZyA9ICcnXG5cbiAgQElucHV0KClcbiAgZ2V0IGlzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlucHV0U3RhdHVzOyB9XG4gIHNldCBpc0Vycm9yKHN0YXR1czogYm9vbGVhbikge1xuXG4gICAgdGhpcy5pbnB1dFN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmNsYXNzRXJyb3IgPSBzdGF0dXMgPyAnIHN0eWxlLWVycm9yJyA6ICcnO1xuICB9XG5cbiAgQE91dHB1dCgpIGlzRXJyb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBvbktleXByZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZGF0YTogeyB2YWx1ZTogc3RyaW5nIH07XG5cbiAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbnVtYmVyRm9ybWF0OiBOdW1iZXJGb3JtYXRQaXBlXG4gICkge1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gIH1cblxuICBpc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZm9jdXNCbHVyRXZlbnQoYm9vbDogYm9vbGVhbikge1xuICAgIHRoaXMuZXZlbnRPYmouZW1pdCh0aGlzLmlzRm9jdXMpO1xuICAgIGlmICh0aGlzLmVycm9yTWFnSW5mbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNYWdJbmZvLmNvbnRyb2xNc2codGhpcy5pc0ZvY3VzKTtcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBpbnB1dCBmb2N1cyBpbnB1dCBzY3JvbGwgdG8gdG9wXG5cbiAgLy9zY3JvbGxDb250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tc2Nyb2xsLWNvbnRlbnQnKTtcbiAgZm9jdXMoKSB7XG4gICAgLy90aGlzLnNjcm9sbFRvcCA9IDIwO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImlvcy1rZXlJblwiKTtcbiAgICB0aGlzLmlzRm9jdXMgPSB0cnVlO1xuICAgIGxldCBpbnB1dEVsZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgbGV0IHNjcm9sbENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCcuZm9ybS1zY3JvbGwtY29udGVudCcpO1xuICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgbGV0IG1vdmVEaXN0ID0gd2luZG93V2lkdGggPCAxMDI0ID8gMTAwIDogMjUwO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzY3JvbGxDb250ZW50Jywgc2Nyb2xsQ29udGVudCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnZm9jdXMgd2luZG93V2lkdGgnLCB3aW5kb3dXaWR0aCwgJyAnLCBtb3ZlRGlzdCk7XG5cblxuICAgIGlmIChzY3JvbGxDb250ZW50ICE9IG51bGwpIHtcbiAgICAgIGxldCBtb3ZlID0gc2Nyb2xsQ29udGVudC5zY3JvbGxUb3AgKyBpbnB1dEVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBtb3ZlRGlzdDtcblxuICAgICAgY29uc29sZS5sb2coJ21vdmUnLCBtb3ZlKTtcblxuICAgICAgLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHQtYW5kcm9pZCcpICE9IG51bGwpIHtcbiAgICAgIC8vICAgc2Nyb2xsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIC8vICAgc2Nyb2xsQ29udGVudC5zY3JvbGxUbyh7IHRvcDogbW92ZSwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICAvLyB9XG4gICAgfVxuXG5cbiAgICB0aGlzLmZvY3VzQmx1ckV2ZW50KHRoaXMuaXNGb2N1cyk7XG4gIH1cbiAgYmx1cigpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJpb3Mta2V5SW5cIik7XG4gICAgdGhpcy5pc0ZvY3VzID0gZmFsc2U7XG4gICAgbGV0IHNjcm9sbENvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCcuZm9ybS1zY3JvbGwtY29udGVudCcpO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx0LWFuZHJvaWQnKSAhPSBudWxsICYmIHNjcm9sbENvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgc2Nyb2xsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzQmx1ckV2ZW50KHRoaXMuaXNGb2N1cyk7XG5cbiAgfVxuXG5cblxuXG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBnZXQgcmVzdWx0KCkgeyAvL+WPluW+l05nTW9kZWznmoTlgLxcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHNldCByZXN1bHQodmFsdWUpIHsgLy/lr6vpgLJOZ01vZGVs55qE5YC8XG4gICAgY29uc29sZS5sb2coXCJ1aS1mb3JtLWlucHV0IHNldCByZXN1bHQgdmFsdWU6XCIsIHZhbHVlKTtcbiAgICBsZXQgdGVtcFZhbHVlID0gdmFsdWUucmVwbGFjZSgvW14wLTldL2lnLCBcIlwiKTtcbiAgICBjb25zb2xlLmxvZyhcInVpLWZvcm0taW5wdXQgc2V0IHJlc3VsdCB0ZW1wVmFsdWU6XCIsIHRlbXBWYWx1ZSk7XG4gICAgaWYgKHRoaXMudHlwZSA9PSAnZG9sbGFyJykge1xuICAgICAgbGV0IHZhbEhhc05vRG90O1xuICAgICAgbGV0IGNvbnZlcnRlZFZhbCA9ICcnO1xuICAgICAgaWYgKE51bWJlcih0ZW1wVmFsdWUpID09IDAgJiYgdGVtcFZhbHVlLmxlbmd0aCA9PT0gMCkgeyAvL+WDhei8uOWFpeespuiZn1xuICAgICAgICBjb252ZXJ0ZWRWYWwgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAoTnVtYmVyKHRlbXBWYWx1ZSkgPT0gMCAmJiB0ZW1wVmFsdWUubGVuZ3RoID4gMCkgeyAvL+i8uOWFpU7lgIswXG4gICAgICAgIGNvbnZlcnRlZFZhbCA9ICcwJzsgLy8wXG4gICAgICAgIHZhbEhhc05vRG90ID0gJzAnO1xuICAgICAgfSBlbHNlIHsgIC8v6Z2eMOaVuOWtl1xuICAgICAgICB2YWxIYXNOb0RvdCA9IE51bWJlcih0ZW1wVmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnZlcnRlZFZhbCA9IHRoaXMuY29udmVydE51bWJlclRob3VzYW5kKE51bWJlcih0ZW1wVmFsdWUpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3QgemVybyB2YWx1ZTpcIiwgdGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmRlYnVnKCd1aS1mb3JtLWlucHV0JywgdmFsSGFzTm9Eb3QpO1xuICAgICAgaWYgKHRoaXMubnhWYWx1ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdCh2YWxIYXNOb0RvdCk7XG4gICAgICB9XG5cbiAgICAgIC8vRml45Lit5paH5a2X5YG15ris5ZWP6aGMXG4gICAgICBjb25zb2xlLmxvZyhcIkZpeDpcIiwgdGhpcy52YWx1ZSk7XG4gICAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA9PT0gY29udmVydGVkVmFsKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBgJHt0aGlzLnZhbHVlfSBgO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gY29udmVydGVkVmFsO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbnZlcnRlZFZhbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBjb25zb2xlLmRlYnVnKCd1aS1mb3JtLWlucHV0Jyx0aGlzLnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLm54VmFsdWVDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgLy9rZXlwcmVzc1xuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSAhPSAzNyAmJiBldmVudC5rZXlDb2RlICE9IDM4ICYmIGV2ZW50LmtleUNvZGUgIT0gMzkgJiYgZXZlbnQua2V5Q29kZSAhPSA0MCAmJiBldmVudC5rZXlDb2RlICE9IDgpIHtcbiAgICAgIGlmIChTdHJpbmdVdGlscy5ieXRlTGVuZ3RoKGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpKSA+ICh0aGlzLm1heExlbmd0aCAtIDEpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflpKrplbfkuobvvIFtYXhMZW5ndGg6Jyx0aGlzLm1heExlbmd0aCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RvbGxhcicpIHsgLy8gbm9ubnVtZXJpYyB3b3JkIG5vdCBhbGxvdyBcbiAgICAgICAgbGV0IG51bUFyciA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddO1xuICAgICAgICBpZiAobnVtQXJyLmluZGV4T2YoZXZlbnQua2V5KSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vbktleXByZXNzLmVtaXQoZXZlbnQpXG4gIH1cblxuICBvbktleVVwKGV2ZW50KSB7XG4gICAgbGV0IHJldHVyblN0cmluZyA9IHRoaXMudmFsdWU7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgIHdoaWxlIChTdHJpbmdVdGlscy5ieXRlTGVuZ3RoKHJldHVyblN0cmluZykgPiAodGhpcy5tYXhMZW5ndGgpKSB7XG4gICAgICAgIHJldHVyblN0cmluZyA9IHJldHVyblN0cmluZy5zdWJzdHIoMCwgcmV0dXJuU3RyaW5nLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gcmV0dXJuU3RyaW5nO1xuICAgIHRoaXMub25LZXlwcmVzcy5lbWl0KGV2ZW50KVxuICB9XG5cblxuXG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09ICdkb2xsYXInKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5jb252ZXJ0TnVtYmVyVGhvdXNhbmQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy/ovYnmj5vljYPkvY3mlbjooajnpLrms5XvvIgwMDAsMDAwLDAwMO+8iVxuICBwdWJsaWMgY29udmVydE51bWJlclRob3VzYW5kKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAobnVtICYmIG51bS50b1N0cmluZykge1xuICAgICAgLy8gdmFyIG51bVN0cmluZyA9IG51bS50b1N0cmluZygpO1xuICAgICAgLy8gdmFyIHBhdHRlcm4gPSAvKC0/XFxkKykoXFxkezN9KS87XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNvbnZlcnROdW1iZXJUaG91c2FuZDpcIiwgbnVtLCBwYXR0ZXJuKTtcblxuICAgICAgLy8gd2hpbGUgKHBhdHRlcm4udGVzdChudW1TdHJpbmcpKSB7XG4gICAgICAvLyAgIG51bVN0cmluZyA9IG51bVN0cmluZy5yZXBsYWNlKHBhdHRlcm4sIFwiJDEsJDJcIik7XG4gICAgICAvLyB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNvbnZlcnROdW1iZXJUaG91c2FuZCByZXR1cm46XCIsIG51bVN0cmluZyk7XG4gICAgICAvLyByZXR1cm4gbnVtU3RyaW5nO1xuICAgICAgcmV0dXJuIHRoaXMubnVtYmVyRm9ybWF0LnRyYW5zZm9ybShudW0pO1xuICAgIH1cblxuICAgIGVsc2VcbiAgICAgIHJldHVybiAnJztcbiAgfVxuXG59Il19