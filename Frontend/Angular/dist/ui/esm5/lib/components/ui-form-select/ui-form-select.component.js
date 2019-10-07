/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UiFormErrorMsgInfoComponent } from '../ui-form-error-msg-info/ui-form-error-msg-info.component';
var UiFormSelectComponent = /** @class */ (function () {
    function UiFormSelectComponent() {
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
    Object.defineProperty(UiFormSelectComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = newValue;
            this.titleFloat();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormSelectComponent.prototype, "isError", {
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
    Object.defineProperty(UiFormSelectComponent.prototype, "isDisable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisable;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isDisable = val;
            this.classDisable = this._isDisable ? 'style-disable' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormSelectComponent.prototype, "currentValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._value = val;
            if (this.nxValueChange)
                this.nxValueChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} boolean
     * @return {?}
     */
    UiFormSelectComponent.prototype.focusBlurEvent = /**
     * @param {?} boolean
     * @return {?}
     */
    function (boolean) {
        if (this.errorMagInfo != undefined) {
            this.errorMagInfo.controlMsg(this.isFocus);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    UiFormSelectComponent.prototype.selectChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        //console.log(val);
        this.titleFloat();
        this.onChange.emit(val);
        // this.nxValueChange.emit(val);
    };
    // when open the select
    // when open the select
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.focus = 
    // when open the select
    /**
     * @return {?}
     */
    function () {
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
    };
    //when close the select
    //when close the select
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.blur = 
    //when close the select
    /**
     * @return {?}
     */
    function () {
        this.isFocus = false;
        this.onBlur.emit();
        this.focusBlurEvent(this.isFocus);
        // in every form-stop-scroll class add no-scroll
        // let stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        // [].forEach.bind(stopFormScrollBlock,function(itm){
        //   itm.classList.remove('all-no-scroll');
        // })();
    };
    //control title float
    //control title float
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.titleFloat = 
    //control title float
    /**
     * @return {?}
     */
    function () {
        // console.log('select nxValue',this.nxValue);
        if (this.nxValue === undefined || this.nxValue === null || this.nxValue === '') {
            this.styleTitleFloatNow = '';
        }
        else {
            this.styleTitleFloatNow = ' style-title-floating';
        }
    };
    /**
     * @return {?}
     */
    UiFormSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.titleFloat();
        // this.styleNoSpace = this.isNoSpace ? 'no-space': '';
        this.classDisable = this._isDisable ? 'style-disable' : '';
    };
    UiFormSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-select',
                    template: "<div class=\"select-block\">\n    <div class=\"select-body-block\" [ngClass]=\"[styleTitleFloatNow, classError, classDisable, isShowTitle ? '' : ' style-title-hide']\">\n        <div class=\"select-title nx-formfield__label\">\n          {{selectTitle}}\n        </div>\n        <select name=\"dropdownGroup\" (focus)=\"focus()\" (change)=\"selectChange($event.target.value)\" [(ngModel)]=\"currentValue\" [disabled]=\"isDisable\">\n          <option [value]=\"''\" *ngIf=\"isShowDefaultOption\">{{placeholder}}</option>\n          <option *ngFor=\"let option of selectOption\" [value]=\"option.getValue()\">{{option.getName()}}</option>\n        </select>\n    </div>\n    <span class=\"select-icon\">\n      <img class=\"icon-normal\" src=\"assets/img/icon-arrow-down.svg\">\n      <img class=\"icon-error\" src=\"assets/img/icon-arrow-down-red.svg\">\n      <img class=\"icon-disable\" src=\"assets/img/icon-arrow-down-disable.svg\">\n    </span>\n</div>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}:host ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}:host ::ng-deep .nx-formfield__flexfield,:host ::ng-deep .select-body-block{min-height:30px}:host ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}:host ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}:host ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}:host .select-block{position:relative}:host .select-icon{display:inline-block;position:absolute;bottom:0;right:0;pointer-events:none;z-index:2}:host .select-icon img{width:24px;background-color:#fff}:host .select-icon .icon-normal{display:inline-block}:host .select-icon .icon-error{display:none}:host .select-icon .icon-disable{display:none}:host .style-error .nx-formfield__label{color:#414141}:host .style-error+.select-icon .icon-normal{display:none}:host .style-error+.select-icon .icon-error{display:inline-block}:host .style-error+.select-icon .icon-disable{display:none}:host .style-disable+.select-icon .icon-normal{display:none}:host .style-disable+.select-icon .icon-error{display:none}:host .style-disable+.select-icon .icon-disable{display:inline-block}.select-body-block{position:relative}.select-body-block.style-error select{color:#dc3149;border-bottom-color:#dc3149}.select-body-block.style-disable .select-title{color:#c2c2c2}.select-body-block.style-disable select{color:#c2c2c2;border-bottom-color:#c2c2c2}.select-body-block.style-title-floating .select-title{-webkit-transform:translateY(-25px) translateZ(.001px);transform:translateY(-25px) translateZ(.001px);font-weight:700;font-size:1rem;background-color:transparent}.select-body-block.style-title-hide .select-title{display:none}.select-title{font-size:1.25rem;height:28px;line-height:28px;font-weight:400}select{border:none;background-color:transparent;display:block;outline:0;width:100%;border-bottom:1px solid #414141;border-radius:0;-webkit-appearance:none;-moz-appearance:none;color:#414141;font-size:1.25rem;height:30px;line-height:28px;font-weight:400;padding:0}select::-ms-expand{display:none}option{padding:0}"]
                }] }
    ];
    UiFormSelectComponent.ctorParameters = function () { return []; };
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
    return UiFormSelectComponent;
}());
export { UiFormSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLXNlbGVjdC91aS1mb3JtLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXNELHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVKLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBSXpHO0lBa0lFO1FBcEhVLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLL0IsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFDL0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsd0JBQW1CLEdBQVksSUFBSSxDQUFDO1FBQ3BDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFN0IsdUJBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUMsdUJBQXVCO1FBQ2hELGlCQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFcEIscUJBQXFCO1FBRWQsZUFBVSxHQUFZLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUN6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQVUxQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFxQm5CLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzVDLFlBQU8sR0FBWSxLQUFLLENBQUM7SUE0RFQsQ0FBQztJQTFIakIsc0JBQ0ksMENBQU87Ozs7UUFEWCxjQUNxQixP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bmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgZm9yd2FyZFJlZiwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBVaUZvcm1FcnJvck1zZ0luZm9Db21wb25lbnQgfSBmcm9tICcuLi91aS1mb3JtLWVycm9yLW1zZy1pbmZvL3VpLWZvcm0tZXJyb3ItbXNnLWluZm8uY29tcG9uZW50JztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBnZXQgbnhWYWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgc2V0IG54VmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy50aXRsZUZsb2F0KCk7XG4gIH1cbiAgQE91dHB1dCgpIG54VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgc2VsZWN0VGl0bGU6IHN0cmluZzsgIC8v5LiL5ouJ6YG45Zau5qiZ6aGMXG4gIEBJbnB1dCgpIHNlbGVjdE9wdGlvbjogQXJyYXk8U2VsZWN0T3B0aW9uPjsgIC8v5LiL5ouJ6YG45Zau6YG46aCFXG4gIFxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdCc7XG4gIEBJbnB1dCgpIGlzU2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNTaG93RGVmYXVsdE9wdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGlzTm9TcGFjZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZHJvcGRvd25Hcm91cDogc3RyaW5nO1xuICBwdWJsaWMgc3R5bGVUaXRsZUZsb2F0Tm93ID0gJyc7IC8vIHRpdGxlIGZsb2F0IG9yIGtlZXA7XG4gIHB1YmxpYyBzdHlsZU5vU3BhY2UgPSAnJ1xuICBwcml2YXRlIF92YWx1ZSA9ICcnO1xuXG4gIC8vIGVycm9yIHN0YXR1cyBzdHlsZVxuXG4gIHB1YmxpYyBjbGFzc0Vycm9yIDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjbGFzc0Rpc2FibGU6IHN0cmluZyA9ICcnXG4gIHB1YmxpYyBpbnB1dFN0YXR1czogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIFxuICBnZXQgaXNFcnJvcigpOiBib29sZWFuIHtyZXR1cm4gdGhpcy5pbnB1dFN0YXR1czt9XG4gIHNldCBpc0Vycm9yKHN0YXR1czpib29sZWFuKXtcbiAgICBcbiAgICB0aGlzLmlucHV0U3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuY2xhc3NFcnJvciA9IHN0YXR1cyA/ICcgc3R5bGUtZXJyb3InOiAnJztcbiAgfVxuXG4gIEBPdXRwdXQoKSBpc0Vycm9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9pc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgXG4gIGdldCBpc0Rpc2FibGUoKXtcbiAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlO1xuICB9XG4gIHNldCBpc0Rpc2FibGUodmFsKXtcbiAgICB0aGlzLl9pc0Rpc2FibGUgPSB2YWw7XG4gICAgdGhpcy5jbGFzc0Rpc2FibGUgPSB0aGlzLl9pc0Rpc2FibGUgPyAgJ3N0eWxlLWRpc2FibGUnOiAnJzsgXG4gIH1cblxuICBcbiAgZ2V0IGN1cnJlbnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgY3VycmVudFZhbHVlKHZhbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIGlmICh0aGlzLm54VmFsdWVDaGFuZ2UpXG4gICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdCh2YWwpO1xuICB9XG5cbiAgQE91dHB1dCgnZm9jdXMnKSBvbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdibHVyJykgb25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBlcnJvck1hZ0luZm86IFVpRm9ybUVycm9yTXNnSW5mb0NvbXBvbmVudDtcblxuICBpc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZm9jdXNCbHVyRXZlbnQoYm9vbGVhbjogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmVycm9yTWFnSW5mbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNYWdJbmZvLmNvbnRyb2xNc2codGhpcy5pc0ZvY3VzKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDaGFuZ2UodmFsKXtcbiAgICAvL2NvbnNvbGUubG9nKHZhbCk7XG4gICAgdGhpcy50aXRsZUZsb2F0KCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHZhbCk7XG4gICAgLy8gdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQodmFsKTtcblxuICB9XG4gIFxuICAvLyB3aGVuIG9wZW4gdGhlIHNlbGVjdFxuICBmb2N1cygpIHtcbiAgICB0aGlzLmlzRm9jdXMgPSB0cnVlO1xuICAgIHRoaXMub25Gb2N1cy5lbWl0KCk7XG4gICAgdGhpcy5mb2N1c0JsdXJFdmVudCh0aGlzLmlzRm9jdXMpO1xuICAgIC8vIHdoZW4gb3BlbiB0aGUgcGFnZSBzdG9wIHBhZ2Ugc2Nyb2xsIFxuICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3Qgb3BlbicpO1xuICAgIHRoaXMudGl0bGVGbG9hdCgpO1xuICAgIFxuICAgIC8vIC8vIGluIGV2ZXJ5IGZvcm0tc3RvcC1zY3JvbGwgY2xhc3MgYWRkIG5vLXNjcm9sbFxuICAgIC8vIGxldCBzdG9wRm9ybVNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLXN0b3Atc2Nyb2xsJyk7XG4gICAgLy8gW10uZm9yRWFjaC5iaW5kKHN0b3BGb3JtU2Nyb2xsQmxvY2ssZnVuY3Rpb24oaXRtKXtcbiAgICAvLyAgIGl0bS5jbGFzc0xpc3QuYWRkKCdhbGwtbm8tc2Nyb2xsJyk7XG4gICAgLy8gfSkoKTtcblxuICB9XG4gIC8vd2hlbiBjbG9zZSB0aGUgc2VsZWN0XG4gIGJsdXIoKSB7XG4gICAgdGhpcy5pc0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5vbkJsdXIuZW1pdCgpO1xuICAgIHRoaXMuZm9jdXNCbHVyRXZlbnQodGhpcy5pc0ZvY3VzKTtcbiAgICAvLyBpbiBldmVyeSBmb3JtLXN0b3Atc2Nyb2xsIGNsYXNzIGFkZCBuby1zY3JvbGxcbiAgICAvLyBsZXQgc3RvcEZvcm1TY3JvbGxCbG9jayA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1zdG9wLXNjcm9sbCcpO1xuICAgIC8vIFtdLmZvckVhY2guYmluZChzdG9wRm9ybVNjcm9sbEJsb2NrLGZ1bmN0aW9uKGl0bSl7XG4gICAgLy8gICBpdG0uY2xhc3NMaXN0LnJlbW92ZSgnYWxsLW5vLXNjcm9sbCcpO1xuICAgIC8vIH0pKCk7XG4gIH1cbiAgLy9jb250cm9sIHRpdGxlIGZsb2F0XG4gIHRpdGxlRmxvYXQoKXtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0IG54VmFsdWUnLHRoaXMubnhWYWx1ZSk7XG4gICAgaWYoIHRoaXMubnhWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMubnhWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLm54VmFsdWUgPT09ICcnKXtcbiAgICAgIHRoaXMuc3R5bGVUaXRsZUZsb2F0Tm93ID0gJyc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZVRpdGxlRmxvYXROb3cgPSAnIHN0eWxlLXRpdGxlLWZsb2F0aW5nJztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLnRpdGxlRmxvYXQoKTtcbiAgICAvLyB0aGlzLnN0eWxlTm9TcGFjZSA9IHRoaXMuaXNOb1NwYWNlID8gJ25vLXNwYWNlJzogJyc7XG4gICAgdGhpcy5jbGFzc0Rpc2FibGUgPSB0aGlzLl9pc0Rpc2FibGUgPyAgJ3N0eWxlLWRpc2FibGUnOiAnJzsgXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIFxuXG5cbn1cbiJdfQ==