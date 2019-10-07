/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ElementRef, ChangeDetectorRef } from '@angular/core';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { addMinutes, getDate, getHours, getMinutes, getMonth, getYear } from 'date-fns';
import { StringUtils } from '@allianzSND/core';
/** @type {?} */
export const MY_NATIVE_FORMATS = {
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false },
    timePickerInput: { hour: 'numeric', minute: 'numeric', hour12: false },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};
export class UiFormTimepickerComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetecor
     */
    constructor(elementRef, changeDetecor) {
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
    /**
     * @return {?}
     */
    get nxValue() {
        return this.time;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set nxValue(val) {
        this.time = val;
    }
    /**
     * @return {?}
     */
    get time() {
        return this._time;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set time(value) {
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
    }
    /**
     * @return {?}
     */
    afterOpen() {
        // cannot scroll out block
        /** @type {?} */
        let stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
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
    } // end afterOpen
    // end afterOpen
    /**
     * @return {?}
     */
    afterClose() {
        /** @type {?} */
        let stopFormScrollBlock = document.body.getElementsByClassName('form-stop-scroll');
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
    } // end afterClose
    // end afterClose
    /**
     * @return {?}
     */
    onFocus() {
        // when user click input, scroll top the input, to prevent calendar be cutted because of softkeyboard slide up
        /** @type {?} */
        let inputEle = this.elementRef.nativeElement.querySelector('input');
        /** @type {?} */
        let scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        /** @type {?} */
        let windowWidth = window.innerWidth;
        /** @type {?} */
        let moveDist = windowWidth < 1024 ? 100 : 250;
        if (scrollContent != null) {
            /** @type {?} */
            let move = scrollContent.scrollTop + inputEle.getBoundingClientRect().top - moveDist;
            //console.log('move', move);
            if (document.querySelector('.plt-android') != null) {
                scrollContent.classList.add('active');
                scrollContent.scrollTo({ top: move, behavior: "smooth" });
            }
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        console.warn('showTime', this.showTime);
        console.warn('showTime isEmpty:', StringUtils.isEmpty(this.showTime));
        if (StringUtils.isEmpty(this.showTime)) {
            this._time = null;
            this.nxValueChange.emit(null);
        }
        else {
            /** @type {?} */
            let time = this.showTime.split(':');
            /** @type {?} */
            let dateNow = new Date();
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
        let scrollContent = this.elementRef.nativeElement.closest('.form-scroll-content');
        if (document.querySelector('.plt-android') != null) {
            scrollContent.classList.remove('active');
        }
        this.blur.emit();
    }
}
UiFormTimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-timepicker',
                template: "<div #timepickerBlock class=\"ui-timepicker\" [ngClass]=\"classError\">\n  <!-- <input #inputEle placeholder=\"hh:mm\" \n        [(ngModel)]=\"time\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [owlDateTime]=\"timepicker\" (dateTimeChange)=\"onBlur()\"/> -->\n  <div class=\"time-show-block\">{{showTime}}</div>\n  <input #inputEle type=\"time\" step=300 [(ngModel)]=\"showTime\" (focus)=\"onFocus()\" (ngModelChange)=\"onBlur()\"/>\n  <nx-icon class=\"ui-timepicker-icon timepicker-icon\" name='clock-o'></nx-icon>\n</div>\n<owl-date-time [pickerMode]=\" 'dialog' \" [pickerType]=\"'timer'\" [stepMinute]=\"5\" [startAt]=\"dateTime\" #timepicker\n  (afterPickerOpen)=\"afterOpen()\" (afterPickerClosed)=\"afterClose()\"></owl-date-time>\n",
                providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS }],
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep .ui-timepicker{position:relative}:host ::ng-deep .ui-timepicker .time-show-block{display:block;background-color:#fff;padding:0 1.5rem 0 0;max-height:30px;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:.2px;color:#414141;border:0;border-bottom:1px solid #414141;border-radius:0;position:absolute;bottom:0;width:100%;pointer-events:none}:host ::ng-deep .ui-timepicker.style-error input{color:#dc3149;border-color:#dc3149}:host ::ng-deep .ui-timepicker.style-error ::ng-deep .ui-timepicker-icon{color:#dc3149}:host ::ng-deep .ui-timepicker.style-error ::ng-deep .ui-timepicker-icon.timepicker-icon{color:#dc3149}:host ::ng-deep .ui-timepicker input{-webkit-appearance:none;width:100%;margin:0;padding:0 1.5rem 0 0;height:30px;font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:.2px;color:#414141;border:0;border-bottom:1px solid #414141;border-radius:0;background-color:#fff}:host ::ng-deep .ui-timepicker .ui-timepicker-icon{display:inline-block;width:1.5rem;height:1.5rem;position:absolute;bottom:5px;right:0;font-size:1.5rem;color:#007ab3}@media (max-width:375px){:host ::ng-deep .ui-timepicker .ui-timepicker-icon{width:1.5rem;height:1.5rem;font-size:1.5rem;line-height:1.8rem}}@media screen and (min-width:1025px){:host ::ng-deep .ui-timepicker input{line-height:28px}}"]
            }] }
];
UiFormTimepickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
UiFormTimepickerComponent.propDecorators = {
    nxValue: [{ type: Input }],
    nxValueChange: [{ type: Output }],
    blur: [{ type: Output }],
    isError: [{ type: Input }],
    isErrorChange: [{ type: Output }],
    afterTimepickerOpen: [{ type: Output }],
    afterTimepickerClose: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS10aW1lcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktZm9ybS10aW1lcGlja2VyL3VpLWZvcm0tdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBRU4sVUFBVSxFQUVWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQVksVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQWMsTUFBTSxVQUFVLENBQUM7QUFJOUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8saUJBQWlCLEdBQUc7SUFDL0IsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDekgsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUNyRixlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUN0RSxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbkQsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUU7SUFDakUsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Q0FDdkQ7QUFRRCxNQUFNOzs7OztJQWtESixZQUFvQixVQUFzQixFQUFVLGFBQWdDO1FBQWhFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUExQzFFLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF1QnBDLHFCQUFxQjtRQUVkLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFVMUIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RCx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHcEQsQ0FBQzs7OztJQWxERCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFRO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFPRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFXO1FBQ3pCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDOztnQkFFdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ25ELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOztnQkFFbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQVFELElBQ0ksT0FBTyxLQUFjLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ25ELElBQUksT0FBTyxDQUFDLE1BQWU7UUFFekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFTRCxRQUFRO0lBRVIsQ0FBQzs7OztJQUVELFNBQVM7OztZQUVILG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7UUFDbEYsSUFBSSxtQkFBbUIsS0FBSyxJQUFJLEVBQUU7WUFFaEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1COzs7O1lBQUUsVUFBVSxHQUFHO2dCQUNoRCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNyQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDLGdCQUFnQjs7Ozs7SUFFbEIsVUFBVTs7WUFDSixtQkFBbUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO1FBQ2xGLElBQUksbUJBQW1CLEtBQUssSUFBSSxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQjs7OztZQUFFLFVBQVUsR0FBRztnQkFDaEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztTQUNOO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxpQkFBaUI7Ozs7O0lBQ25CLE9BQU87OztZQUVELFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDOztZQUMvRCxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDOztZQUM3RSxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVU7O1lBQy9CLFFBQVEsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFFN0MsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFOztnQkFDckIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVE7WUFDcEYsNEJBQTRCO1lBQzVCLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xELGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUMzRDtTQUNGO0lBRUgsQ0FBQzs7OztJQUNELE1BQU07UUFDSixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFBTTs7Z0JBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQy9CLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuSCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0RTtnQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7OztZQUVHLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDakYsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNsRCxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBOUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw2dUJBQWtEO2dCQUVsRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQzs7YUFDN0U7OztZQTNCQyxVQUFVO1lBRVYsaUJBQWlCOzs7c0JBMkJoQixLQUFLOzRCQU9MLE1BQU07bUJBQ04sTUFBTTtzQkE2Qk4sS0FBSzs0QkFPTCxNQUFNO2tDQUVOLE1BQU07bUNBQ04sTUFBTTs7OztJQXhDUCxrREFBZ0U7O0lBQ2hFLHlDQUFvQzs7Ozs7SUFFcEMsMENBQW9COztJQUNwQiw2Q0FBd0I7O0lBc0J4QiwrQ0FBK0I7O0lBQy9CLGdEQUFvQzs7SUFDcEMsNkNBQXNCOztJQVN0QixrREFBZ0U7O0lBRWhFLHdEQUFtRDs7SUFDbkQseURBQW9EOzs7OztJQUV4QywrQ0FBOEI7Ozs7O0lBQUUsa0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT1dMX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnbmctcGljay1kYXRldGltZSc7XG5pbXBvcnQgeyBhZGRIb3VycywgYWRkTWludXRlcywgZ2V0RGF0ZSwgZ2V0SG91cnMsIGdldE1pbnV0ZXMsIGdldE1vbnRoLCBnZXRZZWFyLCBzdWJTZWNvbmRzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3Rlc3Rpbmcvc3JjL2Jyb3dzZXJfdXRpbCc7XG5pbXBvcnQgeyBjb3VudCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGNvbXB1dGVTdGFja0lkIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvZGlzdC9kaXJlY3RpdmVzL25hdmlnYXRpb24vc3RhY2stdXRpbHMnO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuXG5leHBvcnQgY29uc3QgTVlfTkFUSVZFX0ZPUk1BVFMgPSB7XG4gIGZ1bGxQaWNrZXJJbnB1dDogeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnLCBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0sXG4gIGRhdGVQaWNrZXJJbnB1dDogeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0sXG4gIHRpbWVQaWNrZXJJbnB1dDogeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IGZhbHNlIH0sXG4gIG1vbnRoWWVhckxhYmVsOiB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcgfSxcbiAgZGF0ZUExMXlMYWJlbDogeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0sXG4gIG1vbnRoWWVhckExMXlMYWJlbDogeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLXRpbWVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS10aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS10aW1lcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogT1dMX0RBVEVfVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfTkFUSVZFX0ZPUk1BVFMgfV1cbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtVGltZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBueFZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuICBzZXQgbnhWYWx1ZSh2YWw6IGFueSkge1xuICAgIHRoaXMudGltZSA9IHZhbDtcbiAgfVxuICBAT3V0cHV0KCkgbnhWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX3RpbWU6IERhdGU7XG4gIHB1YmxpYyBzaG93VGltZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBnZXQgdGltZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKGdldEhvdXJzKHZhbHVlKSA8IDEwKVxuICAgICAgICB0aGlzLnNob3dUaW1lID0gJzAnICsgZ2V0SG91cnModmFsdWUpLnRvU3RyaW5nKCkgKyAnOic7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuc2hvd1RpbWUgPSBnZXRIb3Vycyh2YWx1ZSkudG9TdHJpbmcoKSArICc6JztcbiAgICAgIGlmIChnZXRNaW51dGVzKHZhbHVlKSA8IDEwKVxuICAgICAgICB0aGlzLnNob3dUaW1lID0gdGhpcy5zaG93VGltZSArICcwJyArIGdldE1pbnV0ZXModmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuc2hvd1RpbWUgPSB0aGlzLnNob3dUaW1lICsgZ2V0TWludXRlcyh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY29yLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIGVycm9yIHN0YXR1cyBzdHlsZVxuXG4gIHB1YmxpYyBjbGFzc0Vycm9yOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGlucHV0U3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkYXRlVGltZTogRGF0ZTtcblxuICBASW5wdXQoKVxuICBnZXQgaXNFcnJvcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaW5wdXRTdGF0dXM7IH1cbiAgc2V0IGlzRXJyb3Ioc3RhdHVzOiBib29sZWFuKSB7XG5cbiAgICB0aGlzLmlucHV0U3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuY2xhc3NFcnJvciA9IHN0YXR1cyA/ICcgc3R5bGUtZXJyb3InIDogJyc7XG4gIH1cbiAgQE91dHB1dCgpIGlzRXJyb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBhZnRlclRpbWVwaWNrZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWZ0ZXJUaW1lcGlja2VyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNoYW5nZURldGVjb3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgYWZ0ZXJPcGVuKCkge1xuICAgIC8vIGNhbm5vdCBzY3JvbGwgb3V0IGJsb2NrXG4gICAgbGV0IHN0b3BGb3JtU2Nyb2xsQmxvY2sgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tc3RvcC1zY3JvbGwnKTtcbiAgICBpZiAoc3RvcEZvcm1TY3JvbGxCbG9jayAhPT0gbnVsbCkge1xuXG4gICAgICBbXS5mb3JFYWNoLmJpbmQoc3RvcEZvcm1TY3JvbGxCbG9jaywgZnVuY3Rpb24gKGl0bSkge1xuICAgICAgICBpdG0uY2xhc3NMaXN0LmFkZCgnYWxsLW5vLXNjcm9sbCcpO1xuICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFmdGVyVGltZXBpY2tlck9wZW4uZW1pdCgpO1xuICB9IC8vIGVuZCBhZnRlck9wZW5cblxuICBhZnRlckNsb3NlKCkge1xuICAgIGxldCBzdG9wRm9ybVNjcm9sbEJsb2NrID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLXN0b3Atc2Nyb2xsJyk7XG4gICAgaWYgKHN0b3BGb3JtU2Nyb2xsQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIFtdLmZvckVhY2guYmluZChzdG9wRm9ybVNjcm9sbEJsb2NrLCBmdW5jdGlvbiAoaXRtKSB7XG4gICAgICAgIGl0bS5jbGFzc0xpc3QucmVtb3ZlKCdhbGwtbm8tc2Nyb2xsJyk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgICB0aGlzLmFmdGVyVGltZXBpY2tlckNsb3NlLmVtaXQoKTtcbiAgfSAvLyBlbmQgYWZ0ZXJDbG9zZVxuICBvbkZvY3VzKCkge1xuICAgIC8vIHdoZW4gdXNlciBjbGljayBpbnB1dCwgc2Nyb2xsIHRvcCB0aGUgaW5wdXQsIHRvIHByZXZlbnQgY2FsZW5kYXIgYmUgY3V0dGVkIGJlY2F1c2Ugb2Ygc29mdGtleWJvYXJkIHNsaWRlIHVwXG4gICAgbGV0IGlucHV0RWxlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBsZXQgc2Nyb2xsQ29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJy5mb3JtLXNjcm9sbC1jb250ZW50Jyk7XG4gICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgbGV0IG1vdmVEaXN0ID0gd2luZG93V2lkdGggPCAxMDI0ID8gMTAwIDogMjUwO1xuXG4gICAgaWYgKHNjcm9sbENvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgbGV0IG1vdmUgPSBzY3JvbGxDb250ZW50LnNjcm9sbFRvcCArIGlucHV0RWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1vdmVEaXN0O1xuICAgICAgLy9jb25zb2xlLmxvZygnbW92ZScsIG1vdmUpO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHQtYW5kcm9pZCcpICE9IG51bGwpIHtcbiAgICAgICAgc2Nyb2xsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgc2Nyb2xsQ29udGVudC5zY3JvbGxUbyh7IHRvcDogbW92ZSwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgb25CbHVyKCkge1xuICAgIGNvbnNvbGUud2Fybignc2hvd1RpbWUnLCB0aGlzLnNob3dUaW1lKTtcbiAgICBjb25zb2xlLndhcm4oJ3Nob3dUaW1lIGlzRW1wdHk6JywgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnNob3dUaW1lKSk7XG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5zaG93VGltZSkpIHtcbiAgICAgIHRoaXMuX3RpbWUgPSBudWxsO1xuICAgICAgdGhpcy5ueFZhbHVlQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0aW1lID0gdGhpcy5zaG93VGltZS5zcGxpdCgnOicpO1xuICAgICAgbGV0IGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy5fdGltZSA9IG5ldyBEYXRlKGdldFllYXIoZGF0ZU5vdyksIGdldE1vbnRoKGRhdGVOb3cpLCBnZXREYXRlKGRhdGVOb3cpLCBwYXJzZUludCh0aW1lWzBdKSwgcGFyc2VJbnQodGltZVsxXSkpO1xuICAgICAgaWYgKHRoaXMuX3RpbWUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKChnZXRNaW51dGVzKHRoaXMuX3RpbWUpICUgNSkgIT0gMCkge1xuICAgICAgICAgIHRoaXMudGltZSA9IGFkZE1pbnV0ZXModGhpcy5fdGltZSwgKDUgLSBnZXRNaW51dGVzKHRoaXMuX3RpbWUpICUgNSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMuX3RpbWU7XG4gICAgICB9XG4gICAgICB0aGlzLm54VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnRpbWUpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgY29udGVudCBjbGFzcyBmb3IgYW5kcm9pZCBzY3JvbGxcbiAgICBsZXQgc2Nyb2xsQ29udGVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJy5mb3JtLXNjcm9sbC1jb250ZW50Jyk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHQtYW5kcm9pZCcpICE9IG51bGwpIHtcbiAgICAgIHNjcm9sbENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIHRoaXMuYmx1ci5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==