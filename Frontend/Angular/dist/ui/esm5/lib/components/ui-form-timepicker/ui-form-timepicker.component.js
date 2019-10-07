/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ElementRef, ChangeDetectorRef } from '@angular/core';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { addMinutes, getDate, getHours, getMinutes, getMonth, getYear } from 'date-fns';
import { StringUtils } from '@allianzSND/core';
/** @type {?} */
export var MY_NATIVE_FORMATS = {
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false },
    timePickerInput: { hour: 'numeric', minute: 'numeric', hour12: false },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};
var UiFormTimepickerComponent = /** @class */ (function () {
    function UiFormTimepickerComponent(elementRef, changeDetecor) {
        this.elementRef = elementRef;
        this.changeDetecor = changeDetecor;
        this.nxValueChange = new EventEmitter();
        this.blur = new EventEmitter();
        // error status style
        this.classError = '';
        this.inputStatus = false;
        this.isErrorChange = new EventEmitter();
        this.afterTimepickerOpen = new EventEmitter();
        this.afterTimepickerClose = new EventEmitter();
    }
    Object.defineProperty(UiFormTimepickerComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.time;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.time = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormTimepickerComponent.prototype, "time", {
        get: /**
         * @return {?}
         */
        function () {
            return this._time;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != null) {
                if (getHours(value) < 10)
                    this.showTime = '0' + getHours(value).toString() + ':';
                else
                    this.showTime = getHours(value).toString() + ':';
                if (getMinutes(value) < 10)
                    this.showTime = this.showTime + '0' + getMinutes(value).toString();
                else
                    this.showTime = this.showTime + getMinutes(value).toString();
                this._time = value;
            }
            this.changeDetecor.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiFormTimepickerComponent.prototype, "isError", {
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
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.afterOpen = /**
     * @return {?}
     */
    function () {
        // cannot scroll out block
        /** @type {?} */
        var stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        if (stopFormScrollBlock !== null) {
            [].forEach.bind(stopFormScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                itm.classList.add('all-no-scroll');
            }))();
        }
        this.afterTimepickerOpen.emit();
    }; // end afterOpen
    // end afterOpen
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.afterClose = 
    // end afterOpen
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
        if (stopFormScrollBlock !== null) {
            [].forEach.bind(stopFormScrollBlock, (/**
             * @param {?} itm
             * @return {?}
             */
            function (itm) {
                itm.classList.remove('all-no-scroll');
            }))();
        }
        this.afterTimepickerClose.emit();
    }; // end afterClose
    // end afterClose
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.onFocus = 
    // end afterClose
    /**
     * @return {?}
     */
    function () {
        // when user click input, scroll top the input, to prevent calendar be cutted because of softkeyboard slide up
        /** @type {?} */
        var inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        /** @type {?} */
        var windowWidth = window.innerWidth;
        /** @type {?} */
        var moveDist = windowWidth < 1024 ? 100 : 250;
        if (scrollContent != null) {
            /** @type {?} */
            var move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            //console.log('move', move);
            if (document.querySelector('.plt-android') != null) {
                scrollContent.classList.add('active');
                scrollContent.scrollTo({ top: move, behavior: "smooth" });
            }
        }
    };
    /**
     * @return {?}
     */
    UiFormTimepickerComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        console.warn('showTime', this.showTime);
        console.warn('showTime isEmpty:', StringUtils.isEmpty(this.showTime));
        if (StringUtils.isEmpty(this.showTime)) {
            this._time = null;
            this.nxValueChange.emit(null);
        }
        else {
            /** @type {?} */
            var time = this.showTime.split(':');
            /** @type {?} */
            var dateNow = new Date();
            this._time = new Date(getYear(dateNow), getMonth(dateNow), getDate(dateNow), parseInt(time[0]), parseInt(time[1]));
            if (this._time !== null) {
                if ((getMinutes(this._time) % 5) != 0) {
                    this.time = addMinutes(this._time, (5 - getMinutes(this._time) % 5));
                }
                this.time = this._time;
            }
            this.nxValueChange.emit(this.time);
        }
        // remove content class for android scroll
        /** @type {?} */
        var scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        if (document.querySelector('.plt-android') != null) {
            scrollContent.classList.remove('active');
        }
        this.blur.emit();
    };
    UiFormTimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-timepicker',
                    template: "<div #timepickerBlock class=\"ui-timepicker\" [ngClass]=\"classError\">\n  <!-- <input #inputEle placeholder=\"hh:mm\" \n        [(ngModel)]=\"time\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [owlDateTime]=\"timepicker\" (dateTimeChange)=\"onBlur()\"/> -->\n  <div class=\"time-show-block\">{{showTime}}</div>\n  <input #inputEle type=\"time\" step=300 [(ngModel)]=\"showTime\" (focus)=\"onFocus()\" (ngModelChange)=\"onBlur()\"/>\n  <nx-icon class=\"ui-timepicker-icon timepicker-icon\" name='clock-o'></nx-icon>\n</div>\n<owl-date-time [pickerMode]=\" 'dialog' \" [pickerType]=\"'timer'\" [stepMinute]=\"5\" [startAt]=\"dateTime\" #timepicker\n  (afterPickerOpen)=\"afterOpen()\" (afterPickerClosed)=\"afterClose()\"></owl-date-time>\n",
                    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS }],
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .ui-timepicker{position:relative}:host ::ng-deep .ui-timepicker .time-show-block{display:block;background-color:#fff;padding:0 1.5rem 0 0;max-height:30px;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:.2px;color:#414141;border:0;border-bottom:1px solid #414141;border-radius:0;position:absolute;bottom:0;width:100%;pointer-events:none}:host ::ng-deep .ui-timepicker.style-error input{color:#dc3149;border-color:#dc3149}:host ::ng-deep .ui-timepicker.style-error ::ng-deep .ui-timepicker-icon{color:#dc3149}:host ::ng-deep .ui-timepicker.style-error ::ng-deep .ui-timepicker-icon.timepicker-icon{color:#dc3149}:host ::ng-deep .ui-timepicker input{-webkit-appearance:none;width:100%;margin:0;padding:0 1.5rem 0 0;height:30px;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:.2px;color:#414141;border:0;border-bottom:1px solid #414141;border-radius:0;background-color:#fff}:host ::ng-deep .ui-timepicker .ui-timepicker-icon{display:inline-block;width:1.5rem;height:1.5rem;position:absolute;bottom:5px;right:0;font-size:1.5rem;color:#007ab3}@media (max-width:375px){:host ::ng-deep .ui-timepicker .ui-timepicker-icon{width:1.5rem;height:1.5rem;font-size:1.5rem;line-height:1.8rem}}@media screen and (min-width:1025px){:host ::ng-deep .ui-timepicker input{line-height:28px}}"]
                }] }
    ];
    UiFormTimepickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    UiFormTimepickerComponent.propDecorators = {
        nxValue: [{ type: Input }],
        nxValueChange: [{ type: Output }],
        blur: [{ type: Output }],
        isError: [{ type: Input }],
        isErrorChange: [{ type: Output }],
        afterTimepickerOpen: [{ type: Output }],
        afterTimepickerClose: [{ type: Output }]
    };
    return UiFormTimepickerComponent;
}());
export { UiFormTimepickerComponent };
if (false) {
    /** @type {?} */
    UiFormTimepickerComponent.prototype.nxValueChange;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.blur;
    /**
     * @type {?}
     * @private
     */
    UiFormTimepickerComponent.prototype._time;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.showTime;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.classError;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.inputStatus;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.dateTime;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.isErrorChange;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.afterTimepickerOpen;
    /** @type {?} */
    UiFormTimepickerComponent.prototype.afterTimepickerClose;
    /**
     * @type {?}
     * @private
     */
    UiFormTimepickerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    UiFormTimepickerComponent.prototype.changeDetecor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS10aW1lcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktZm9ybS10aW1lcGlja2VyL3VpLWZvcm0tdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBRU4sVUFBVSxFQUVWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQVksVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQWMsTUFBTSxVQUFVLENBQUM7QUFJOUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLEtBQU8saUJBQWlCLEdBQUc7SUFDL0IsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDekgsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUNyRixlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUN0RSxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbkQsYUFBYSxFQUFFLEVB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ICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQ29udGVudENoaWxkLFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPV0xfREFURV9USU1FX0ZPUk1BVFMgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcbmltcG9ydCB7IGFkZEhvdXJzLCBhZGRNaW51dGVzLCBnZXREYXRlLCBnZXRIb3VycywgZ2V0TWludXRlcywgZ2V0TW9udGgsIGdldFllYXIsIHN1YlNlY29uZHMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBlbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvdGVzdGluZy9zcmMvYnJvd3Nlcl91dGlsJztcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY29tcHV0ZVN0YWNrSWQgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9kaXN0L2RpcmVjdGl2ZXMvbmF2aWdhdGlvbi9zdGFjay11dGlscyc7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5cbmV4cG9ydCBjb25zdCBNWV9OQVRJVkVfRk9STUFUUyA9IHtcbiAgZnVsbFBpY2tlcklucHV0OiB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSxcbiAgZGF0ZVBpY2tlcklucHV0OiB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSxcbiAgdGltZVBpY2tlcklucHV0OiB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogZmFsc2UgfSxcbiAgbW9udGhZZWFyTGFiZWw6IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JyB9LFxuICBkYXRlQTExeUxhYmVsOiB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSxcbiAgbW9udGhZZWFyQTExeUxhYmVsOiB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJyB9LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tdGltZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1mb3JtLXRpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLXRpbWVwaWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBPV0xfREFURV9USU1FX0ZPUk1BVFMsIHVzZVZhbHVlOiBNWV9OQVRJVkVfRk9STUFUUyB9XVxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1UaW1lcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IG54VmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG4gIHNldCBueFZhbHVlKHZhbDogYW55KSB7XG4gICAgdGhpcy50aW1lID0gdmFsO1xuICB9XG4gIEBPdXRwdXQoKSBueFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfdGltZTogRGF0ZTtcbiAgcHVibGljIHNob3dUaW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIGdldCB0aW1lKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBpZiAoZ2V0SG91cnModmFsdWUpIDwgMTApXG4gICAgICAgIHRoaXMuc2hvd1RpbWUgPSAnMCcgKyBnZXRIb3Vycyh2YWx1ZSkudG9TdHJpbmcoKSArICc6JztcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IGdldEhvdXJzKHZhbHVlKS50b1N0cmluZygpICsgJzonO1xuICAgICAgaWYgKGdldE1pbnV0ZXModmFsdWUpIDwgMTApXG4gICAgICAgIHRoaXMuc2hvd1RpbWUgPSB0aGlzLnNob3dUaW1lICsgJzAnICsgZ2V0TWludXRlcyh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IHRoaXMuc2hvd1RpbWUgKyBnZXRNaW51dGVzKHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjb3IuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gZXJyb3Igc3RhdHVzIHN0eWxlXG5cbiAgcHVibGljIGNsYXNzRXJyb3I6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgaW5wdXRTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRhdGVUaW1lOiBEYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pbnB1dFN0YXR1czsgfVxuICBzZXQgaXNFcnJvcihzdGF0dXM6IGJvb2xlYW4pIHtcblxuICAgIHRoaXMuaW5wdXRTdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5jbGFzc0Vycm9yID0gc3RhdHVzID8gJyBzdHlsZS1lcnJvcicgOiAnJztcbiAgfVxuICBAT3V0cHV0KCkgaXNFcnJvckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIGFmdGVyVGltZXBpY2tlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhZnRlclRpbWVwaWNrZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2hhbmdlRGV0ZWNvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBhZnRlck9wZW4oKSB7XG4gICAgLy8gY2Fubm90IHNjcm9sbCBvdXQgYmxvY2tcbiAgICBsZXQgc3RvcEZvcm1TY3JvbGxCbG9jayA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1zdG9wLXNjcm9sbCcpO1xuICAgIGlmIChzdG9wRm9ybVNjcm9sbEJsb2NrICE9PSBudWxsKSB7XG5cbiAgICAgIFtdLmZvckVhY2guYmluZChzdG9wRm9ybVNjcm9sbEJsb2NrLCBmdW5jdGlvbiAoaXRtKSB7XG4gICAgICAgIGl0bS5jbGFzc0xpc3QuYWRkKCdhbGwtbm8tc2Nyb2xsJyk7XG4gICAgICB9KSgpO1xuICAgIH1cblxuICAgIHRoaXMuYWZ0ZXJUaW1lcGlja2VyT3Blbi5lbWl0KCk7XG4gIH0gLy8gZW5kIGFmdGVyT3BlblxuXG4gIGFmdGVyQ2xvc2UoKSB7XG4gICAgbGV0IHN0b3BGb3JtU2Nyb2xsQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tc3RvcC1zY3JvbGwnKTtcbiAgICBpZiAoc3RvcEZvcm1TY3JvbGxCbG9jayAhPT0gbnVsbCkge1xuICAgICAgW10uZm9yRWFjaC5iaW5kKHN0b3BGb3JtU2Nyb2xsQmxvY2ssIGZ1bmN0aW9uIChpdG0pIHtcbiAgICAgICAgaXRtLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbC1uby1zY3JvbGwnKTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAgIHRoaXMuYWZ0ZXJUaW1lcGlja2VyQ2xvc2UuZW1pdCgpO1xuICB9IC8vIGVuZCBhZnRlckNsb3NlXG4gIG9uRm9jdXMoKSB7XG4gICAgLy8gd2hlbiB1c2VyIGNsaWNrIGlucHV0LCBzY3JvbGwgdG9wIHRoZSBpbnB1dCwgdG8gcHJldmVudCBjYWxlbmRhciBiZSBjdXR0ZWQgYmVjYXVzZSBvZiBzb2Z0a2V5Ym9hcmQgc2xpZGUgdXBcbiAgICBsZXQgaW5wdXRFbGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGxldCBzY3JvbGxDb250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tc2Nyb2xsLWNvbnRlbnQnKTtcbiAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgbW92ZURpc3QgPSB3aW5kb3dXaWR0aCA8IDEwMjQgPyAxMDAgOiAyNTA7XG5cbiAgICBpZiAoc2Nyb2xsQ29udGVudCAhPSBudWxsKSB7XG4gICAgICBsZXQgbW92ZSA9IHNjcm9sbENvbnRlbnQuc2Nyb2xsVG9wICsgaW5wdXRFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbW92ZURpc3Q7XG4gICAgICAvL2NvbnNvbGUubG9nKCdtb3ZlJywgbW92ZSk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdC1hbmRyb2lkJykgIT0gbnVsbCkge1xuICAgICAgICBzY3JvbGxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBzY3JvbGxDb250ZW50LnNjcm9sbFRvKHsgdG9wOiBtb3ZlLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBvbkJsdXIoKSB7XG4gICAgY29uc29sZS53YXJuKCdzaG93VGltZScsIHRoaXMuc2hvd1RpbWUpO1xuICAgIGNvbnNvbGUud2Fybignc2hvd1RpbWUgaXNFbXB0eTonLCBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuc2hvd1RpbWUpKTtcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnNob3dUaW1lKSkge1xuICAgICAgdGhpcy5fdGltZSA9IG51bGw7XG4gICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRpbWUgPSB0aGlzLnNob3dUaW1lLnNwbGl0KCc6Jyk7XG4gICAgICBsZXQgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICB0aGlzLl90aW1lID0gbmV3IERhdGUoZ2V0WWVhcihkYXRlTm93KSwgZ2V0TW9udGgoZGF0ZU5vdyksIGdldERhdGUoZGF0ZU5vdyksIHBhcnNlSW50KHRpbWVbMF0pLCBwYXJzZUludCh0aW1lWzFdKSk7XG4gICAgICBpZiAodGhpcy5fdGltZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoKGdldE1pbnV0ZXModGhpcy5fdGltZSkgJSA1KSAhPSAwKSB7XG4gICAgICAgICAgdGhpcy50aW1lID0gYWRkTWludXRlcyh0aGlzLl90aW1lLCAoNSAtIGdldE1pbnV0ZXModGhpcy5fdGltZSkgJSA1KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5fdGltZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnhWYWx1ZUNoYW5nZS5lbWl0KHRoaXMudGltZSk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBjb250ZW50IGNsYXNzIGZvciBhbmRyb2lkIHNjcm9sbFxuICAgIGxldCBzY3JvbGxDb250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tc2Nyb2xsLWNvbnRlbnQnKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdC1hbmRyb2lkJykgIT0gbnVsbCkge1xuICAgICAgc2Nyb2xsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcbiAgfVxufVxuIl19