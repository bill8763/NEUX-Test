/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StringUtils } from '@allianzSND/core';
var UiFormTextareaComponent = /** @class */ (function () {
    function UiFormTextareaComponent() {
        this.placeholder = '';
        this.onKeypress = new EventEmitter();
        this.nxValueChange = new EventEmitter();
    }
    Object.defineProperty(UiFormTextareaComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormTextareaComponent.prototype, "result", {
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
            this.value = value;
            console.debug('ui-form-input', value);
            if (this.nxValueChange) {
                this.nxValueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiFormTextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    //keypress
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormTextareaComponent.prototype.onKeyDown = 
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40 && event.keyCode != 8) {
            if (StringUtils.byteLength(event.target.value.toString()) > (this.maxLength - 1)) {
                return false;
            }
        }
        this.onKeypress.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiFormTextareaComponent.prototype.onKeyUp = /**
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
    UiFormTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-form-textarea',
                    template: "\n<textarea class=\"detail-text\" [placeholder]=\"placeholder\" (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\" [maxlength]=\"maxLength\" [(ngModel)]='result' [style.height]=\"height\" [id]=\"id\"></textarea>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{width:100%}:host .detail-text{width:100%}:host textarea{font-family:\"Allianz Neo\";width:100%;border-radius:5px;font-size:.875rem;background-color:#fcfcfc;border:1px solid #e5e5ee;padding:10px 20px;outline:0;box-shadow:none;-webkit-appearance:none}"]
                }] }
    ];
    UiFormTextareaComponent.ctorParameters = function () { return []; };
    UiFormTextareaComponent.propDecorators = {
        maxLength: [{ type: Input }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        onKeypress: [{ type: Output }],
        height: [{ type: Input }],
        id: [{ type: Input }],
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }]
    };
    return UiFormTextareaComponent;
}());
export { UiFormTextareaComponent };
if (false) {
    /** @type {?} */
    UiFormTextareaComponent.prototype.maxLength;
    /** @type {?} */
    UiFormTextareaComponent.prototype.value;
    /** @type {?} */
    UiFormTextareaComponent.prototype.placeholder;
    /** @type {?} */
    UiFormTextareaComponent.prototype.onKeypress;
    /** @type {?} */
    UiFormTextareaComponent.prototype.height;
    /** @type {?} */
    UiFormTextareaComponent.prototype.id;
    /** @type {?} */
    UiFormTextareaComponent.prototype.nxValueChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tdGV4dGFyZWEvdWktZm9ybS10ZXh0YXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRTdDO0lBa0NFO1FBMUJTLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVNuRCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBZ0JoRCxDQUFDO0lBckJqQixzQkFDSSw0Q0FBTzs7OztRQURYLGNBQ3FCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3pDLFVBQVksUUFBYTtZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN4QixDQUFDOzs7T0FId0M7SUFPekMsc0JBQUksMkNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQUVELFVBQVcsS0FBSztZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7UUFFSCxDQUFDOzs7T0FUQTs7OztJQWFELDBDQUFROzs7SUFBUjtJQUNBLENBQUM7SUFFRCxVQUFVOzs7Ozs7SUFDViwyQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtZQUNqSCxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9FLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQseUNBQU87Ozs7SUFBUCxVQUFRLEtBQUs7O1lBQ1AsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzdCLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5RCxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx3T0FBZ0Q7O2lCQUVqRDs7Ozs0QkFFRSxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxNQUFNO3lCQUNOLEtBQUs7cUJBQ0wsS0FBSzswQkFFTCxLQUFLO2dDQUtMLE1BQU07O0lBMENULDhCQUFDO0NBQUEsQUE1REQsSUE0REM7U0F2RFksdUJBQXVCOzs7SUFDbEMsNENBQTBCOztJQUMxQix3Q0FBb0I7O0lBQ3BCLDhDQUFrQzs7SUFDbEMsNkNBQTZEOztJQUM3RCx5Q0FBd0I7O0lBQ3hCLHFDQUFvQjs7SUFPcEIsZ0RBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0cmluZ1V0aWxzfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLXVpLWZvcm0tdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tdGV4dGFyZWEuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1UZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG1heExlbmd0aDpudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIG9uS2V5cHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgbnhWYWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy52YWx1ZTsgfVxuICBzZXQgbnhWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIGdldCByZXN1bHQoKSB7IC8v5Y+W5b6XTmdNb2RlbOeahOWAvFxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2V0IHJlc3VsdCh2YWx1ZSkgeyAvL+Wvq+mAsk5nTW9kZWznmoTlgLxcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgY29uc29sZS5kZWJ1ZygndWktZm9ybS1pbnB1dCcsdmFsdWUpO1xuICAgIGlmICh0aGlzLm54VmFsdWVDaGFuZ2UpIHtcbiAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gICAgICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH0gIFxuICBcbiAgLy9rZXlwcmVzc1xuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZihldmVudC5rZXlDb2RlICE9IDM3ICYmIGV2ZW50LmtleUNvZGUgIT0gMzggJiYgZXZlbnQua2V5Q29kZSAhPSAzOSAmJiBldmVudC5rZXlDb2RlICE9IDQwICYmIGV2ZW50LmtleUNvZGUgIT0gOCkge1xuICAgICAgaWYoU3RyaW5nVXRpbHMuYnl0ZUxlbmd0aChldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSkgPiAodGhpcy5tYXhMZW5ndGggLSAxKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25LZXlwcmVzcy5lbWl0KGV2ZW50KVxuICB9XG5cbiAgb25LZXlVcChldmVudCkge1xuICAgIGxldCByZXR1cm5TdHJpbmcgPSB0aGlzLnZhbHVlO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICB3aGlsZSAoU3RyaW5nVXRpbHMuYnl0ZUxlbmd0aChyZXR1cm5TdHJpbmcpID4gKHRoaXMubWF4TGVuZ3RoKSkge1xuICAgICAgICByZXR1cm5TdHJpbmcgPSByZXR1cm5TdHJpbmcuc3Vic3RyKDAsIHJldHVyblN0cmluZy5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHJldHVyblN0cmluZztcbiAgICB0aGlzLm9uS2V5cHJlc3MuZW1pdChldmVudClcbiAgfVxuXG59XG4iXX0=