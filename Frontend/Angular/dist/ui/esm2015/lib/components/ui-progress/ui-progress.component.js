/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export class UiProgressComponent {
    // if text on the top
    constructor() {
        this._value = 0;
        this._valueFrom = 0.06;
        this._isFinishValueAni = false; // if progress animate finish then true
        this.counto = 0;
        this.duration = 2;
        this._theme = "main";
        this.valueFromChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.onCountoEnd = new EventEmitter();
        this.bgValue = 0;
        this.flagValue = -1;
        this.flagText = '';
        this.isShowValue = false;
        this.isShowSideValue = false;
        this.styleTag = '';
        this.styleSize = ''; // '' , lg, max
        //@Input() theme: string = 'main';
        this.isTextTop = false;
        this.isStartValueZero = true;
        this.styleSideValue = '';
        this.styleTheme = "color-main";
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this._valueFrom = this._value;
        this.valueFromChange.emit(this._valueFrom); // give 
        this._value = val;
        console.log("progress percent _value:", this._value);
        this.duration = this._value == 1 ? 0.4 : 2;
        console.log('duration,', this.duration);
        console.log('countto');
        this.valueChange.emit(this._value);
    }
    /**
     * @return {?}
     */
    get theme() {
        return this._theme;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set theme(value) {
        console.log("setting color theme");
        this._theme = value;
        this.styleTheme = ' color-' + this._theme + ' ';
    }
    /**
     * @return {?}
     */
    get valueFrom() {
        return this._valueFrom;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set valueFrom(val) {
        this._valueFrom = val;
        this.valueFromChange.emit(this._valueFrom);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleTag = this.isShowValue ? 'active ' : ' ';
        this.styleSideValue = this.isShowSideValue ? ' style-has-side-value ' : '';
        this.styleTextTop = this.isTextTop ? 'style-has-text-top' : '';
        console.log('===== ' + this.styleTheme);
    }
    /**
     * @return {?}
     */
    whenCountoEnd() {
        console.log('in  progress finish');
        this.onCountoEnd.emit();
    }
}
UiProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-progress',
                template: "<div class=\"progress-whole-block \" [ngClass]=\"[styleTag, styleSize, styleSideValue, styleTheme, styleTextTop]\">\n    <div class=\"progress-text\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"progress-value-block\">\n        <div *ngIf=\"isShowValue && isTextTop\" class=\"progress-value-top\">\n          <span class=\"text\" *ngIf=\"textOnPercent != ''\" >{{textOnPercent}}</span>\n          <span class=\"num font-size_h2\" counto [step]=\"1\" [countTo]=\"value*100 | number:'1.0-0' \" [countFrom]=\"valueFrom*100 | number:'1.0-0'\" [duration]=\"duration\" (countoChange)=\"counto = $event\" (countoEnd)=\"whenCountoEnd()\">{{counto | number:'1.0-0' }}</span>  \n          <span class=\"unit\">%</span>  \n        </div>\n        <div class=\"progress-block\">\n            <div class=\"ui-progress__track\">\n              <div class=\"ui-progress__bg-indicator\" [ngStyle]=\"{width: (bgValue*100)+'%'}\"></div>\n              <!-- text top number will run than progress use this -->\n              <div *ngIf=\"isShowValue && isTextTop\"  class=\"ui-progress__indicator\" [ngStyle]=\"{width: (counto | number:'1.0-0')+'%'}\"></div>\n              <!-- text on the bottom number is static, than progress color use this -->\n              <div *ngIf=\"!isTextTop\" class=\"ui-progress__indicator\" [ngStyle]=\"{width: (value*100)+'%'}\"></div>\n              <div *ngIf=\"flagValue>=0\" class=\"ui-progress__flag\" [ngStyle]=\"{left:'calc('+flagValue*100+'% - 2px)'}\">\n                <div *ngIf=\"flagValue>=0\" class=\"ui-progress__flag-text\">{{flagText}}</div>\n              </div>\n            </div>\n          </div>\n        <div *ngIf=\"isShowValue && !isTextTop\" class=\"progress-value\">\n          <span *ngIf=\"textOnPercent != ''\" class=\"text\">{{textOnPercent}}</span>\n          {{value*100 | number:'1.0-2'}}%\n        </div>\n    </div>\n</div>\n\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.progress-text{color:#414141;font-size:.75rem;margin-bottom:2px}:host .progress-whole-block.lg .progress-block{height:15px}:host .progress-whole-block.lg .progress-block .ui-progress__flag-text{bottom:23px}:host .progress-whole-block.max .progress-block{height:29px;border-radius:20px}:host .progress-whole-block.max .progress-block .ui-progress__flag-text{bottom:37px}:host .progress-whole-block.max .progress-block .ui-progress__track{border-radius:20px}:host .progress-whole-block.max .progress-block .ui-progress__indicator:after{border-radius:20px}:host .progress-whole-block.style-has-side-value .progress-text{font-size:.875rem;margin-bottom:0}:host .progress-whole-block.style-has-text-top.active .progress-value-block{flex-direction:column;align-items:flex-end}:host .progress-whole-block.style-has-text-top.active .progress-value-block .progress-block{max-width:100%;padding-right:0;overflow:hidden}:host .progress-whole-block.style-has-text-top.active .progress-value-top{font-size:1rem;color:#fff;padding-bottom:6px}:host .progress-whole-block.style-has-text-top.active .progress-value-top .num{font-weight:700;padding-left:56px;padding-right:15px}@media (max-width:1023px){:host .progress-whole-block.style-has-text-top.active .progress-value-block{flex-direction:column-reverse}}:host .progress-whole-block.color-sub .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#007d8c,#b1dadd)}:host .progress-whole-block.color-sub .progress-text,:host .progress-whole-block.color-sub .progress-value{color:#007d8c}:host .progress-whole-block.color-main .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#003781,#0068b7)}:host .progress-whole-block.color-error1 .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#dc3149,#f9a6a6)}:host .progress-whole-block.color-error1 .progress-text,:host .progress-whole-block.color-error1 .progress-value{color:#dc3149}:host .progress-whole-block.color-error2 .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#f86200,#fcaa76)}:host .progress-whole-block.color-error2 .progress-text,:host .progress-whole-block.color-error2 .progress-value{color:#f86200}:host .progress-whole-block.color-pass .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#3da556,#88fea4)}:host .progress-whole-block.color-pass .progress-text,:host .progress-whole-block.color-pass .progress-value{color:#3da556}:host .progress-block{display:block;position:relative;transition:opacity 250ms linear;width:100%;height:10px;border-radius:7px}:host .progress-block .ui-progress__indicator{-webkit-transform-origin:top left;transform-origin:top left;height:100%;position:absolute;width:100%;transition:.5s;max-width:100%}:host .progress-block .ui-progress__indicator:after{border-radius:7px;transition:.8s;background:linear-gradient(to right,#003781,#0068b7);height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:'';display:inline-block;left:0}:host .progress-block .ui-progress__bg-indicator{-webkit-transform-origin:top left;transform-origin:top left;height:100%;position:absolute;width:100%}:host .progress-block .ui-progress__bg-indicator:after{border-radius:7px;height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:'';display:inline-block;left:0;background-color:#c2c2c2}:host .progress-block .ui-progress__track{background-color:#ececec;border-radius:7px;height:100%}:host .progress-block .ui-progress__flag{position:absolute;width:2px;height:100%;background-color:#c2c2c2}:host .progress-block .ui-progress__flag:after{height:6px;position:absolute;width:15px;-webkit-animation:none;animation:none;content:'';display:inline-block;left:-7px;top:-6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:6px solid #c2c2c2}:host .progress-block .ui-progress__flag-text{position:absolute;bottom:18px;left:-18px;min-width:40px;display:inline-block;text-align:center;color:#c2c2c2;font-size:.75rem}:host .progress-value{color:#414141}:host .active .progress-value-block{display:flex;align-items:center;justify-content:center}:host .active .progress-value-block .progress-value{max-width:46px;min-width:35px;width:100%;font-size:.875rem;line-height:normal;text-align:right;overflow:hidden}:host .active .progress-value-block .progress-block{max-width:calc(100% - 46px);width:100%;padding-right:10px}"]
            }] }
];
UiProgressComponent.ctorParameters = () => [];
UiProgressComponent.propDecorators = {
    value: [{ type: Input }],
    theme: [{ type: Input }],
    valueFrom: [{ type: Input }],
    valueFromChange: [{ type: Output }],
    valueChange: [{ type: Output }],
    onCountoEnd: [{ type: Output }],
    bgValue: [{ type: Input }],
    flagValue: [{ type: Input }],
    flagText: [{ type: Input }],
    isShowValue: [{ type: Input }],
    isShowSideValue: [{ type: Input }],
    styleTag: [{ type: Input }],
    styleSize: [{ type: Input }],
    isTextTop: [{ type: Input }],
    textOnPercent: [{ type: Input }],
    isStartValueZero: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiProgressComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    UiProgressComponent.prototype._valueFrom;
    /**
     * @type {?}
     * @private
     */
    UiProgressComponent.prototype._isFinishValueAni;
    /** @type {?} */
    UiProgressComponent.prototype.counto;
    /** @type {?} */
    UiProgressComponent.prototype.duration;
    /**
     * @type {?}
     * @private
     */
    UiProgressComponent.prototype._theme;
    /** @type {?} */
    UiProgressComponent.prototype.valueFromChange;
    /** @type {?} */
    UiProgressComponent.prototype.valueChange;
    /** @type {?} */
    UiProgressComponent.prototype.onCountoEnd;
    /** @type {?} */
    UiProgressComponent.prototype.bgValue;
    /** @type {?} */
    UiProgressComponent.prototype.flagValue;
    /** @type {?} */
    UiProgressComponent.prototype.flagText;
    /** @type {?} */
    UiProgressComponent.prototype.isShowValue;
    /** @type {?} */
    UiProgressComponent.prototype.isShowSideValue;
    /** @type {?} */
    UiProgressComponent.prototype.styleTag;
    /** @type {?} */
    UiProgressComponent.prototype.styleSize;
    /** @type {?} */
    UiProgressComponent.prototype.isTextTop;
    /** @type {?} */
    UiProgressComponent.prototype.textOnPercent;
    /** @type {?} */
    UiProgressComponent.prototype.isStartValueZero;
    /** @type {?} */
    UiProgressComponent.prototype.styleSideValue;
    /** @type {?} */
    UiProgressComponent.prototype.styleTheme;
    /** @type {?} */
    UiProgressComponent.prototype.styleTextTop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1wcm9ncmVzcy91aS1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRyx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXekcsTUFBTTs7SUFnRUo7UUEvRFEsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUMsdUNBQXVDO1FBQzFFLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBaUJMLFdBQU0sR0FBVyxNQUFNLENBQUM7UUFzQnRCLG9CQUFlLEdBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFDaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsRUFBRSxDQUFDLENBQUMsZUFBZTtRQUNoRCxrQ0FBa0M7UUFDekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFJMUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFXLFlBQVksQ0FBQztJQUV6QixDQUFDOzs7O0lBMURqQixJQUNJ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WCx1Q0FBYTs7Ozs7SUFpQmIscUNBQWdDOztJQXNCaEMsOENBQWdEOztJQUNoRCwwQ0FBNEM7O0lBQzVDLDBDQUEyQzs7SUFDM0Msc0NBQTRCOztJQUM1Qix3Q0FBK0I7O0lBQy9CLHVDQUErQjs7SUFDL0IsMENBQXNDOztJQUN0Qyw4Q0FBeUM7O0lBQ3pDLHVDQUErQjs7SUFDL0Isd0NBQWdDOztJQUVoQyx3Q0FBMkI7O0lBQzNCLDRDQUFnQzs7SUFDaEMsK0NBQWlDOztJQUlqQyw2Q0FBbUM7O0lBQ25DLHlDQUF5Qzs7SUFDekMsMkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvZGlzdC9kaXJlY3RpdmVzL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3JzL3ZhbHVlLWFjY2Vzc29yJztcbi8vaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5pbXBvcnQgeyBDb3VudG9Nb2R1bGUgfSAgZnJvbSAnYW5ndWxhcjItY291bnRvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuICBwcml2YXRlIF92YWx1ZUZyb20gPSAwLjA2O1xuICBwcml2YXRlIF9pc0ZpbmlzaFZhbHVlQW5pID0gZmFsc2U7IC8vIGlmIHByb2dyZXNzIGFuaW1hdGUgZmluaXNoIHRoZW4gdHJ1ZVxuICBjb3VudG8gPSAwO1xuICBkdXJhdGlvbiA9IDI7XG4gIEBJbnB1dCgpIFxuICBnZXQgdmFsdWUoKXtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbCl7XG5cbiAgICB0aGlzLl92YWx1ZUZyb20gPSB0aGlzLl92YWx1ZTtcbiAgICB0aGlzLnZhbHVlRnJvbUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlRnJvbSk7IC8vIGdpdmUgXG4gICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgY29uc29sZS5sb2coXCJwcm9ncmVzcyBwZXJjZW50IF92YWx1ZTpcIiwgdGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLl92YWx1ZSA9PSAxID8gMC40IDogMjtcbiAgICBjb25zb2xlLmxvZygnZHVyYXRpb24sJywgdGhpcy5kdXJhdGlvbik7XG4gICAgY29uc29sZS5sb2coJ2NvdW50dG8nKVxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF90aGVtZTogc3RyaW5nID0gXCJtYWluXCI7XG4gIEBJbnB1dCgpXG4gIGdldCB0aGVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWU7XG4gIH1cbiAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nIGNvbG9yIHRoZW1lXCIpO1xuICAgIHRoaXMuX3RoZW1lID0gdmFsdWU7XG4gICAgdGhpcy5zdHlsZVRoZW1lID0gJyBjb2xvci0nICsgdGhpcy5fdGhlbWUrICcgJztcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgICBnZXQgdmFsdWVGcm9tKCl7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVGcm9tO1xuICAgIH0gXG4gICAgc2V0IHZhbHVlRnJvbSh2YWwpe1xuICAgICAgdGhpcy5fdmFsdWVGcm9tID0gdmFsO1xuICAgICAgdGhpcy52YWx1ZUZyb21DaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZUZyb20pO1xuICAgIH1cbiAgXG4gIFxuICBAT3V0cHV0KCkgdmFsdWVGcm9tQ2hhbmdlICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ291bnRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBiZ1ZhbHVlOm51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGZsYWdWYWx1ZTpudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgZmxhZ1RleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpc1Nob3dWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1Nob3dTaWRlVmFsdWU6IGJvb2xlYW4gPWZhbHNlO1xuICBASW5wdXQoKSBzdHlsZVRhZzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHN0eWxlU2l6ZTogc3RyaW5nID0gJyc7IC8vICcnICwgbGcsIG1heFxuICAvL0BJbnB1dCgpIHRoZW1lOiBzdHJpbmcgPSAnbWFpbic7XG4gIEBJbnB1dCgpIGlzVGV4dFRvcCA9IGZhbHNlO1xuICBASW5wdXQoKSB0ZXh0T25QZXJjZW50IDogc3RyaW5nO1xuICBASW5wdXQoKSBpc1N0YXJ0VmFsdWVaZXJvID0gdHJ1ZTtcbiAgICBcblxuXG4gIHB1YmxpYyBzdHlsZVNpZGVWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzdHlsZVRoZW1lOiBzdHJpbmcgPSBcImNvbG9yLW1haW5cIjtcbiAgcHVibGljIHN0eWxlVGV4dFRvcDogc3RyaW5nOyAvLyBpZiB0ZXh0IG9uIHRoZSB0b3BcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlVGFnID0gdGhpcy5pc1Nob3dWYWx1ZSA/ICdhY3RpdmUgJyA6ICcgJztcbiAgICB0aGlzLnN0eWxlU2lkZVZhbHVlID0gdGhpcy5pc1Nob3dTaWRlVmFsdWUgPyAnIHN0eWxlLWhhcy1zaWRlLXZhbHVlICc6ICcnO1xuICAgIHRoaXMuc3R5bGVUZXh0VG9wID0gdGhpcy5pc1RleHRUb3AgPyAgJ3N0eWxlLWhhcy10ZXh0LXRvcCcgOiAnJztcbiAgICBjb25zb2xlLmxvZygnPT09PT0gJyArIHRoaXMuc3R5bGVUaGVtZSk7XG4gIH1cbiAgd2hlbkNvdW50b0VuZCgpe1xuICAgIGNvbnNvbGUubG9nKCdpbiAgcHJvZ3Jlc3MgZmluaXNoJyk7XG4gICAgdGhpcy5vbkNvdW50b0VuZC5lbWl0KCk7XG4gIH1cblxufVxuIl19