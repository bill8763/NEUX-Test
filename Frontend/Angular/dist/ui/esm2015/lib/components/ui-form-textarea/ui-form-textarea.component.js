/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StringUtils } from '@allianzSND/core';
export class UiFormTextareaComponent {
    constructor() {
        this.placeholder = '';
        this.onKeypress = new EventEmitter();
        this.nxValueChange = new EventEmitter();
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
        this.value = newValue;
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
        this.value = value;
        console.debug('ui-form-input', value);
        if (this.nxValueChange) {
            this.nxValueChange.emit(value);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    //keypress
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40 && event.keyCode != 8) {
            if (StringUtils.byteLength(event.target.value.toString()) > (this.maxLength - 1)) {
                return false;
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
}
UiFormTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-ui-form-textarea',
                template: "\n<textarea class=\"detail-text\" [placeholder]=\"placeholder\" (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\" [maxlength]=\"maxLength\" [(ngModel)]='result' [style.height]=\"height\" [id]=\"id\"></textarea>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{width:100%}:host .detail-text{width:100%}:host textarea{font-family:\"Allianz Neo\";width:100%;border-radius:5px;font-size:.875rem;background-color:#fcfcfc;border:1px solid #e5e5ee;padding:10px 20px;outline:0;box-shadow:none;-webkit-appearance:none}"]
            }] }
];
UiFormTextareaComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tdGV4dGFyZWEvdWktZm9ybS10ZXh0YXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBTzdDLE1BQU07SUE2Qko7UUExQlMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBU25ELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFnQmhELENBQUM7Ozs7SUFyQmpCLElBQ0ksT0FBTyxLQUFVLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3pDLElBQUksT0FBTyxDQUFDLFFBQWE7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDeEIsQ0FBQzs7OztJQUlELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFFSCxDQUFDOzs7O0lBSUQsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUdELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtZQUNqSCxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9FLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQUs7O1lBQ1AsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzdCLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5RCxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx3T0FBZ0Q7O2FBRWpEOzs7O3dCQUVFLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLE1BQU07cUJBQ04sS0FBSztpQkFDTCxLQUFLO3NCQUVMLEtBQUs7NEJBS0wsTUFBTTs7OztJQVpQLDRDQUEwQjs7SUFDMUIsd0NBQW9COztJQUNwQiw4Q0FBa0M7O0lBQ2xDLDZDQUE2RDs7SUFDN0QseUNBQXdCOztJQUN4QixxQ0FBb0I7O0lBT3BCLGdEQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdHJpbmdVdGlsc30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC11aS1mb3JtLXRleHRhcmVhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtYXhMZW5ndGg6bnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBvbktleXByZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IG54VmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMudmFsdWU7IH1cbiAgc2V0IG54VmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuICBAT3V0cHV0KCkgbnhWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICBnZXQgcmVzdWx0KCkgeyAvL+WPluW+l05nTW9kZWznmoTlgLxcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHNldCByZXN1bHQodmFsdWUpIHsgLy/lr6vpgLJOZ01vZGVs55qE5YC8XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGNvbnNvbGUuZGVidWcoJ3VpLWZvcm0taW5wdXQnLHZhbHVlKTtcbiAgICBpZiAodGhpcy5ueFZhbHVlQ2hhbmdlKSB7XG4gICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICAgICAgXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9ICBcbiAgXG4gIC8va2V5cHJlc3NcbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSAhPSAzNyAmJiBldmVudC5rZXlDb2RlICE9IDM4ICYmIGV2ZW50LmtleUNvZGUgIT0gMzkgJiYgZXZlbnQua2V5Q29kZSAhPSA0MCAmJiBldmVudC5rZXlDb2RlICE9IDgpIHtcbiAgICAgIGlmKFN0cmluZ1V0aWxzLmJ5dGVMZW5ndGgoZXZlbnQudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkpID4gKHRoaXMubWF4TGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uS2V5cHJlc3MuZW1pdChldmVudClcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICBsZXQgcmV0dXJuU3RyaW5nID0gdGhpcy52YWx1ZTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgd2hpbGUgKFN0cmluZ1V0aWxzLmJ5dGVMZW5ndGgocmV0dXJuU3RyaW5nKSA+ICh0aGlzLm1heExlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuU3RyaW5nID0gcmV0dXJuU3RyaW5nLnN1YnN0cigwLCByZXR1cm5TdHJpbmcubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSByZXR1cm5TdHJpbmc7XG4gICAgdGhpcy5vbktleXByZXNzLmVtaXQoZXZlbnQpXG4gIH1cblxufVxuIl19