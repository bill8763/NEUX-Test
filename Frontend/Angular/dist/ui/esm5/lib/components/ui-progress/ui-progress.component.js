/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
var UiProgressComponent = /** @class */ (function () {
    function UiProgressComponent() {
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
    Object.defineProperty(UiProgressComponent.prototype, "value", {
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
            this._valueFrom = this._value;
            this.valueFromChange.emit(this._valueFrom); // give 
            this._value = val;
            console.log("progress percent _value:", this._value);
            this.duration = this._value == 1 ? 0.4 : 2;
            console.log('duration,', this.duration);
            console.log('countto');
            this.valueChange.emit(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiProgressComponent.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._theme;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("setting color theme");
            this._theme = value;
            this.styleTheme = ' color-' + this._theme + ' ';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiProgressComponent.prototype, "valueFrom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._valueFrom;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._valueFrom = val;
            this.valueFromChange.emit(this._valueFrom);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleTag = this.isShowValue ? 'active ' : ' ';
        this.styleSideValue = this.isShowSideValue ? ' style-has-side-value ' : '';
        this.styleTextTop = this.isTextTop ? 'style-has-text-top' : '';
        console.log('===== ' + this.styleTheme);
    };
    /**
     * @return {?}
     */
    UiProgressComponent.prototype.whenCountoEnd = /**
     * @return {?}
     */
    function () {
        console.log('in  progress finish');
        this.onCountoEnd.emit();
    };
    UiProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress',
                    template: "<div class=\"progress-whole-block \" [ngClass]=\"[styleTag, styleSize, styleSideValue, styleTheme, styleTextTop]\">\n    <div class=\"progress-text\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"progress-value-block\">\n        <div *ngIf=\"isShowValue && isTextTop\" class=\"progress-value-top\">\n          <span class=\"text\" *ngIf=\"textOnPercent != ''\" >{{textOnPercent}}</span>\n          <span class=\"num font-size_h2\" counto [step]=\"1\" [countTo]=\"value*100 | number:'1.0-0' \" [countFrom]=\"valueFrom*100 | number:'1.0-0'\" [duration]=\"duration\" (countoChange)=\"counto = $event\" (countoEnd)=\"whenCountoEnd()\">{{counto | number:'1.0-0' }}</span>  \n          <span class=\"unit\">%</span>  \n        </div>\n        <div class=\"progress-block\">\n            <div class=\"ui-progress__track\">\n              <div class=\"ui-progress__bg-indicator\" [ngStyle]=\"{width: (bgValue*100)+'%'}\"></div>\n              <!-- text top number will run than progress use this -->\n              <div *ngIf=\"isShowValue && isTextTop\"  class=\"ui-progress__indicator\" [ngStyle]=\"{width: (counto | number:'1.0-0')+'%'}\"></div>\n              <!-- text on the bottom number is static, than progress color use this -->\n              <div *ngIf=\"!isTextTop\" class=\"ui-progress__indicator\" [ngStyle]=\"{width: (value*100)+'%'}\"></div>\n              <div *ngIf=\"flagValue>=0\" class=\"ui-progress__flag\" [ngStyle]=\"{left:'calc('+flagValue*100+'% - 2px)'}\">\n                <div *ngIf=\"flagValue>=0\" class=\"ui-progress__flag-text\">{{flagText}}</div>\n              </div>\n            </div>\n          </div>\n        <div *ngIf=\"isShowValue && !isTextTop\" class=\"progress-value\">\n          <span *ngIf=\"textOnPercent != ''\" class=\"text\">{{textOnPercent}}</span>\n          {{value*100 | number:'1.0-2'}}%\n        </div>\n    </div>\n</div>\n\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.progress-text{color:#414141;font-size:.75rem;margin-bottom:2px}:host .progress-whole-block.lg .progress-block{height:15px}:host .progress-whole-block.lg .progress-block .ui-progress__flag-text{bottom:23px}:host .progress-whole-block.max .progress-block{height:29px;border-radius:20px}:host .progress-whole-block.max .progress-block .ui-progress__flag-text{bottom:37px}:host .progress-whole-block.max .progress-block .ui-progress__track{border-radius:20px}:host .progress-whole-block.max .progress-block .ui-progress__indicator:after{border-radius:20px}:host .progress-whole-block.style-has-side-value .progress-text{font-size:.875rem;margin-bottom:0}:host .progress-whole-block.style-has-text-top.active .progress-value-block{flex-direction:column;align-items:flex-end}:host .progress-whole-block.style-has-text-top.active .progress-value-block .progress-block{max-width:100%;padding-right:0;overflow:hidden}:host .progress-whole-block.style-has-text-top.active .progress-value-top{font-size:1rem;color:#fff;padding-bottom:6px}:host .progress-whole-block.style-has-text-top.active .progress-value-top .num{font-weight:700;padding-left:56px;padding-right:15px}@media (max-width:1023px){:host .progress-whole-block.style-has-text-top.active .progress-value-block{flex-direction:column-reverse}}:host .progress-whole-block.color-sub .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#007d8c,#b1dadd)}:host .progress-whole-block.color-sub .progress-text,:host .progress-whole-block.color-sub .progress-value{color:#007d8c}:host .progress-whole-block.color-main .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#003781,#0068b7)}:host .progress-whole-block.color-error1 .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#dc3149,#f9a6a6)}:host .progress-whole-block.color-error1 .progress-text,:host .progress-whole-block.color-error1 .progress-value{color:#dc3149}:host .progress-whole-block.color-error2 .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#f86200,#fcaa76)}:host .progress-whole-block.color-error2 .progress-text,:host .progress-whole-block.color-error2 .progress-value{color:#f86200}:host .progress-whole-block.color-pass .progress-block .ui-progress__indicator:after{background:linear-gradient(to right,#3da556,#88fea4)}:host .progress-whole-block.color-pass .progress-text,:host .progress-whole-block.color-pass .progress-value{color:#3da556}:host .progress-block{display:block;position:relative;transition:opacity 250ms linear;width:100%;height:10px;border-radius:7px}:host .progress-block .ui-progress__indicator{-webkit-transform-origin:top left;transform-origin:top left;height:100%;position:absolute;width:100%;transition:.5s;max-width:100%}:host .progress-block .ui-progress__indicator:after{border-radius:7px;transition:.8s;background:linear-gradient(to right,#003781,#0068b7);height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:'';display:inline-block;left:0}:host .progress-block .ui-progress__bg-indicator{-webkit-transform-origin:top left;transform-origin:top left;height:100%;position:absolute;width:100%}:host .progress-block .ui-progress__bg-indicator:after{border-radius:7px;height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:'';display:inline-block;left:0;background-color:#c2c2c2}:host .progress-block .ui-progress__track{background-color:#ececec;border-radius:7px;height:100%}:host .progress-block .ui-progress__flag{position:absolute;width:2px;height:100%;background-color:#c2c2c2}:host .progress-block .ui-progress__flag:after{height:6px;position:absolute;width:15px;-webkit-animation:none;animation:none;content:'';display:inline-block;left:-7px;top:-6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:6px solid #c2c2c2}:host .progress-block .ui-progress__flag-text{position:absolute;bottom:18px;left:-18px;min-width:40px;display:inline-block;text-align:center;color:#c2c2c2;font-size:.75rem}:host .progress-value{color:#414141}:host .active .progress-value-block{display:flex;align-items:center;justify-content:center}:host .active .progress-value-block .progress-value{max-width:46px;min-width:35px;width:100%;font-size:.875rem;line-height:normal;text-align:right;overflow:hidden}:host .active .progress-value-block .progress-block{max-width:calc(100% - 46px);width:100%;padding-right:10px}"]
                }] }
    ];
    UiProgressComponent.ctorParameters = function () { return []; };
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
    return UiProgressComponent;
}());
export { UiProgressComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1wcm9ncmVzcy91aS1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRyx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLekc7SUFzRUU7UUEvRFEsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUMsdUNBQXVDO1FBQzFFLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBaUJMLFdBQU0sR0FBVyxNQUFNLENBQUM7UUFzQnRCLG9CQUFlLEdBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFDaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsRUFBRSxDQUFDLENBQUMsZUFBZTtRQUNoRCxrQ0FBa0M7UUFDekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFJMUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFXLFlBQVksQ0FBQztJQUV6QixDQUFDO0lBMURqQixzQkFDSSxzQ0FBSzs7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O0lBQzlCLHFDQUFtQjs7Ozs7SUFDbkIseUNBQTBCOzs7OztJQUMxQixnREFBa0M7O0lBQ2xDLHFDQUFXOztJQUNYLHVDQUFhOzs7OztJQWlCYixxQ0FBZ0M7O0lBc0JoQyw4Q0FBZ0Q7O0lBQ2hELDBDQUE0Qzs7SUFDNUMsMENBQTJDOztJQUMzQyxzQ0FBNEI7O0lBQzVCLHdDQUErQjs7SUFDL0IsdUNBQStCOztJQUMvQiwwQ0FBc0M7O0lBQ3RDLDhDQUF5Qzs7SUFDekMsdUNBQStCOztJQUMvQix3Q0FBZ0M7O0lBRWhDLHdDQUEyQjs7SUFDM0IsNENBQWdDOztJQUNoQywrQ0FBaUM7O0lBSWpDLDZDQUFtQzs7SUFDbkMseUNBQXlDOztJQUN6QywyQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9kaXN0L2RpcmVjdGl2ZXMvY29udHJvbC12YWx1ZS1hY2Nlc3NvcnMvdmFsdWUtYWNjZXNzb3InO1xuLy9pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdwcm90cmFjdG9yJztcbmltcG9ydCB7IENvdW50b01vZHVsZSB9ICBmcm9tICdhbmd1bGFyMi1jb3VudG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF92YWx1ZSA9IDA7XG4gIHByaXZhdGUgX3ZhbHVlRnJvbSA9IDAuMDY7XG4gIHByaXZhdGUgX2lzRmluaXNoVmFsdWVBbmkgPSBmYWxzZTsgLy8gaWYgcHJvZ3Jlc3MgYW5pbWF0ZSBmaW5pc2ggdGhlbiB0cnVlXG4gIGNvdW50byA9IDA7XG4gIGR1cmF0aW9uID0gMjtcbiAgQElucHV0KCkgXG4gIGdldCB2YWx1ZSgpe1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsKXtcblxuICAgIHRoaXMuX3ZhbHVlRnJvbSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMudmFsdWVGcm9tQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWVGcm9tKTsgLy8gZ2l2ZSBcbiAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyhcInByb2dyZXNzIHBlcmNlbnQgX3ZhbHVlOlwiLCB0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuX3ZhbHVlID09IDEgPyAwLjQgOiAyO1xuICAgIGNvbnNvbGUubG9nKCdkdXJhdGlvbiwnLCB0aGlzLmR1cmF0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnY291bnR0bycpXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmcgPSBcIm1haW5cIjtcbiAgQElucHV0KClcbiAgZ2V0IHRoZW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90aGVtZTtcbiAgfVxuICBzZXQgdGhlbWUodmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgY29sb3IgdGhlbWVcIik7XG4gICAgdGhpcy5fdGhlbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnN0eWxlVGhlbWUgPSAnIGNvbG9yLScgKyB0aGlzLl90aGVtZSsgJyAnO1xuICB9XG5cblxuICBASW5wdXQoKVxuICAgIGdldCB2YWx1ZUZyb20oKXtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZUZyb207XG4gICAgfSBcbiAgICBzZXQgdmFsdWVGcm9tKHZhbCl7XG4gICAgICB0aGlzLl92YWx1ZUZyb20gPSB2YWw7XG4gICAgICB0aGlzLnZhbHVlRnJvbUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlRnJvbSk7XG4gICAgfVxuICBcbiAgXG4gIEBPdXRwdXQoKSB2YWx1ZUZyb21DaGFuZ2UgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Db3VudG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGJnVmFsdWU6bnVtYmVyID0gMDtcbiAgQElucHV0KCkgZmxhZ1ZhbHVlOm51bWJlciA9IC0xO1xuICBASW5wdXQoKSBmbGFnVGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlzU2hvd1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzU2hvd1NpZGVWYWx1ZTogYm9vbGVhbiA9ZmFsc2U7XG4gIEBJbnB1dCgpIHN0eWxlVGFnOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3R5bGVTaXplOiBzdHJpbmcgPSAnJzsgLy8gJycgLCBsZywgbWF4XG4gIC8vQElucHV0KCkgdGhlbWU6IHN0cmluZyA9ICdtYWluJztcbiAgQElucHV0KCkgaXNUZXh0VG9wID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRleHRPblBlcmNlbnQgOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzU3RhcnRWYWx1ZVplcm8gPSB0cnVlO1xuICAgIFxuXG5cbiAgcHVibGljIHN0eWxlU2lkZVZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHN0eWxlVGhlbWU6IHN0cmluZyA9IFwiY29sb3ItbWFpblwiO1xuICBwdWJsaWMgc3R5bGVUZXh0VG9wOiBzdHJpbmc7IC8vIGlmIHRleHQgb24gdGhlIHRvcFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVUYWcgPSB0aGlzLmlzU2hvd1ZhbHVlID8gJ2FjdGl2ZSAnIDogJyAnO1xuICAgIHRoaXMuc3R5bGVTaWRlVmFsdWUgPSB0aGlzLmlzU2hvd1NpZGVWYWx1ZSA/ICcgc3R5bGUtaGFzLXNpZGUtdmFsdWUgJzogJyc7XG4gICAgdGhpcy5zdHlsZVRleHRUb3AgPSB0aGlzLmlzVGV4dFRvcCA/ICAnc3R5bGUtaGFzLXRleHQtdG9wJyA6ICcnO1xuICAgIGNvbnNvbGUubG9nKCc9PT09PSAnICsgdGhpcy5zdHlsZVRoZW1lKTtcbiAgfVxuICB3aGVuQ291bnRvRW5kKCl7XG4gICAgY29uc29sZS5sb2coJ2luICBwcm9ncmVzcyBmaW5pc2gnKTtcbiAgICB0aGlzLm9uQ291bnRvRW5kLmVtaXQoKTtcbiAgfVxuXG59XG4iXX0=