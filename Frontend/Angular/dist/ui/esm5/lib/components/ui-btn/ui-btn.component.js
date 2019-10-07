/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Renderer2, ElementRef } from '@angular/core';
var UiBtnComponent = /** @class */ (function () {
    function UiBtnComponent(el, _renderer) {
        this.el = el;
        this._renderer = _renderer;
        this.btnWd = 'md'; //md, sm, lg
        this.btnHeight = 'default'; // default, sm
        this.btnStyle = 'full'; // full border
        this.btnColor = 'main2'; // main1, main2, light1, light2, grey
        this.id = '';
        this.name = '';
        this._isDisable = false;
        this.isDisableChange = new EventEmitter();
        this.ClickBtn = new EventEmitter();
        this._btnGroup = 'group1'; //  btn 所屬組別
    }
    Object.defineProperty(UiBtnComponent.prototype, "isDisable", {
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
            // console.log('in set isDisable', val);
            this._isDisable = val;
            if (this.isDisableChange) {
                this.isDisableChange.emit(this._isDisable);
                this.settingBtnStyle();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    UiBtnComponent.prototype.onClickBtn = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.ClickBtn.emit(e);
    };
    /**
     * @return {?}
     */
    UiBtnComponent.prototype.settingBtnStyle = /**
     * @return {?}
     */
    function () {
        // console.log('settingBtnStyle', this._isDisable);
        if (this.btnHeight == 'default') {
            this.classHeight = '';
            this._btnGroup = 'group1';
        }
        else {
            this.classHeight = ' btn-height-sm';
            this._btnGroup = 'group2';
        }
        this.classDisable = this.isDisable ? ' btn-disable' : '';
        this.isDisable ? this._renderer.addClass(this.el.nativeElement, 'btn-not-allow') : this._renderer.removeClass(this.el.nativeElement, 'btn-not-allow');
        this.classWd = ' btn-wd-' + this._btnGroup + '-' + this.btnWd;
        switch (this.btnStyle) {
            case 'full':
                this.classStyle = ' btn-color-full-';
                break;
            case 'border':
                this.classStyle = ' btn-color-border-';
                break;
            case 'text':
                this.classStyle = ' btn-color-text-';
                break;
        }
        this.btnRenderStyle = this.classWd + this.classHeight + this.classStyle + this.btnColor + this.classDisable;
    };
    /**
     * @return {?}
     */
    UiBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.settingBtnStyle();
    };
    UiBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-btn',
                    template: "\n<button (click)=\"onClickBtn($event)\" [name]=\"name\" class=\"btn-default-style btn-body\" [ngClass]='this.btnRenderStyle' [id]=\"id\">\n\t<ng-content select=\"[TextType=cust]\"></ng-content>\n</button>\n\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host-context(.btn-not-allow){pointer-events:none}button{box-shadow:none;outline:0;cursor:pointer;-webkit-tap-highlight-color:transparent}button:active,button:focus{outline:0}.btn-block{text-align:center;display:flex;flex-wrap:wrap}.btn-default-style{box-shadow:none;border:none;display:inline-block;height:48px;line-height:48px;text-decoration:none;font-size:1rem;font-weight:700;text-align:center;border-radius:4px;max-width:210px;width:100%;position:relative;background-color:transparent;vertical-align:top}[class*=btn-color-full-]{color:#fff}[class*=btn-color-border-]{border:2px solid #c2c2c2;background-color:#fff}.btn-height-sm{height:48px;line-height:48px;font-size:.875rem}.btn-height-sm.btn-wd-group2-lg{font-size:1rem}.btn-height-sm[class*=btn-color-border]{line-height:44px}.btn-color-full-main1{background-color:#007d8c}.btn-color-full-main2{background-color:#007ab3}.btn-color-full-light1{background-color:#3da556}.btn-color-full-light2{background-color:#f86200}.btn-wd-group1-lg{max-width:270px}.btn-wd-group1-md{max-width:210px}.btn-wd-group1-sm{max-width:130px}.btn-wd-group2-lg{max-width:210px}.btn-wd-group2-md{max-width:160px}.btn-wd-group2-sm{max-width:115px}.btn-color-border-main1{border-color:#007d8c;color:#007d8c}.btn-color-border-main2{border-color:#007ab3;color:#007ab3}.btn-color-border-light1{border-color:#3da556;color:#3da556}.btn-color-border-light2{border-color:#f86200;color:#f86200}.btn-color-border-white-main1{border-color:#fff;color:#007d8c}.btn-color-border-white-main2{border-color:#fff;color:#007ab3}.btn-color-text-grey{color:#c2c2c2;background-color:transparent}.btn-color-text-main1{color:#007d8c;background-color:transparent}.btn-color-text-main2{color:#007ab3;background-color:transparent}.btn-color-text-light1{color:#3da556;background-color:transparent}.btn-color-text-light2{color:#f86200;background-color:transparent}.btn-disable{pointer-events:none;cursor:default}.btn-disable.btn-color-full-light1{background-color:#b1dbbb}.btn-disable.btn-color-full-light2{background-color:#fcc099}.btn-disable.btn-color-full-main1{background-color:#93c5cb}.btn-disable.btn-color-full-main2{background-color:#99cae1}@media (max-width:374px){.btn-wd-group2-md{max-width:140px}}"]
                }] }
    ];
    UiBtnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    UiBtnComponent.propDecorators = {
        btnWd: [{ type: Input }],
        btnHeight: [{ type: Input }],
        btnStyle: [{ type: Input }],
        btnColor: [{ type: Input }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        isDisableChange: [{ type: Output }],
        isDisable: [{ type: Input }],
        ClickBtn: [{ type: Output }]
    };
    return UiBtnComponent;
}());
export { UiBtnComponent };
if (false) {
    /** @type {?} */
    UiBtnComponent.prototype.btnWd;
    /** @type {?} */
    UiBtnComponent.prototype.btnHeight;
    /** @type {?} */
    UiBtnComponent.prototype.btnStyle;
    /** @type {?} */
    UiBtnComponent.prototype.btnColor;
    /** @type {?} */
    UiBtnComponent.prototype.id;
    /** @type {?} */
    UiBtnComponent.prototype.name;
    /**
     * @type {?}
     * @private
     */
    UiBtnComponent.prototype._isDisable;
    /** @type {?} */
    UiBtnComponent.prototype.classWd;
    /** @type {?} */
    UiBtnComponent.prototype.classHeight;
    /** @type {?} */
    UiBtnComponent.prototype.classStyle;
    /** @type {?} */
    UiBtnComponent.prototype.classDisable;
    /** @type {?} */
    UiBtnComponent.prototype.btnRenderStyle;
    /** @type {?} */
    UiBtnComponent.prototype.isDisableChange;
    /** @type {?} */
    UiBtnComponent.prototype.ClickBtn;
    /** @type {?} */
    UiBtnComponent.prototype._btnGroup;
    /**
     * @type {?}
     * @private
     */
    UiBtnComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    UiBtnComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktYnRuL3VpLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3SDtJQThDRSx3QkFBb0IsRUFBYyxFQUFTLFNBQW9CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBdEN0RCxVQUFLLEdBQVcsSUFBSSxDQUFDLENBQUUsWUFBWTtRQUNuQyxjQUFTLEdBQVcsU0FBUyxDQUFDLENBQUMsY0FBYztRQUM3QyxhQUFRLEdBQVUsTUFBTSxDQUFDLENBQUMsY0FBYztRQUN4QyxhQUFRLEdBQVcsT0FBTyxDQUFDLENBQUMscUNBQXFDO1FBQ2pFLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFHaEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBTTNCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWdCcEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFPekMsY0FBUyxHQUFXLFFBQVEsQ0FBQyxDQUFDLFlBQVk7SUFFakQsQ0FBQztJQXZCRCxzQkFDSSxxQ0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBQ0QsVUFBYyxHQUFHO1lBQ2Ysd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBQztnQkFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7UUFFSCxDQUFDOzs7T0FUQTs7Ozs7SUFhRCxtQ0FBVTs7OztJQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFNRCx3Q0FBZTs7O0lBQWY7UUFDRSxtREFBbUQ7UUFDbkQsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBQztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUMzQjthQUNHO1lBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtTQUUxQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFFeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFBO1FBS3BKLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEQsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ25CLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO2dCQUNyQyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3ZDLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztnQkFDckMsTUFBTTtTQUVUO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFHOUcsQ0FBQzs7OztJQUdELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUV6QixDQUFDOztnQkF6RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwrTkFBc0M7b0JBRXRDLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7OztnQkFQMEYsVUFBVTtnQkFBcEIsU0FBUzs7O3dCQVV2RixLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBR0wsS0FBSztrQ0FPTCxNQUFNOzRCQUVOLEtBQUs7MkJBY0wsTUFBTTs7SUF1RFQscUJBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQXZGWSxjQUFjOzs7SUFFekIsK0JBQThCOztJQUM5QixtQ0FBdUM7O0lBQ3ZDLGtDQUFrQzs7SUFDbEMsa0NBQW9DOztJQUNwQyw0QkFBeUI7O0lBR3pCLDhCQUEyQjs7Ozs7SUFDM0Isb0NBQW9DOztJQUNwQyxpQ0FBdUI7O0lBQ3ZCLHFDQUEyQjs7SUFDM0Isb0NBQTBCOztJQUMxQixzQ0FBNEI7O0lBQzVCLHdDQUE4Qjs7SUFDOUIseUNBQThDOztJQWdCOUMsa0NBQWdEOztJQU9oRCxtQ0FBb0M7Ozs7O0lBQ3hCLDRCQUFzQjs7Ozs7SUFBQyxtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxSZW5kZXJlcjIsRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktYnRuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWJ0bi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBidG5XZDogc3RyaW5nID0gJ21kJzsgIC8vbWQsIHNtLCBsZ1xuICBASW5wdXQoKSBidG5IZWlnaHQ6IHN0cmluZyA9ICdkZWZhdWx0JzsgLy8gZGVmYXVsdCwgc21cbiAgQElucHV0KCkgYnRuU3R5bGU6IHN0cmluZz0gJ2Z1bGwnOyAvLyBmdWxsIGJvcmRlclxuICBASW5wdXQoKSBidG5Db2xvcjogc3RyaW5nID0gJ21haW4yJzsgLy8gbWFpbjEsIG1haW4yLCBsaWdodDEsIGxpZ2h0MiwgZ3JleVxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIFxuICBcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX2lzRGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY2xhc3NXZDogc3RyaW5nO1xuICBwdWJsaWMgY2xhc3NIZWlnaHQ6IHN0cmluZztcbiAgcHVibGljIGNsYXNzU3R5bGU6IHN0cmluZztcbiAgcHVibGljIGNsYXNzRGlzYWJsZTogc3RyaW5nO1xuICBwdWJsaWMgYnRuUmVuZGVyU3R5bGU6IHN0cmluZztcbiAgQE91dHB1dCgpaXNEaXNhYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIFxuICBnZXQgaXNEaXNhYmxlKCl7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZTtcbiAgfVxuICBzZXQgaXNEaXNhYmxlKHZhbCl7XG4gICAgLy8gY29uc29sZS5sb2coJ2luIHNldCBpc0Rpc2FibGUnLCB2YWwpO1xuICAgIHRoaXMuX2lzRGlzYWJsZSA9IHZhbDtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVDaGFuZ2Upe1xuICAgICAgdGhpcy5pc0Rpc2FibGVDaGFuZ2UuZW1pdCh0aGlzLl9pc0Rpc2FibGUpO1xuICAgICAgdGhpcy5zZXR0aW5nQnRuU3R5bGUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIEBPdXRwdXQoKSBDbGlja0J0biA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG9uQ2xpY2tCdG4oZSl7XG4gICAgdGhpcy5DbGlja0J0bi5lbWl0KGUpO1xuICB9XG5cblxuICBwdWJsaWMgX2J0bkdyb3VwOiBzdHJpbmcgPSAnZ3JvdXAxJzsgLy8gIGJ0biDmiYDlsazntYTliKVcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cbiAgc2V0dGluZ0J0blN0eWxlKCl7XG4gICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmdCdG5TdHlsZScsIHRoaXMuX2lzRGlzYWJsZSk7XG4gICAgaWYodGhpcy5idG5IZWlnaHQgPT0gJ2RlZmF1bHQnKXtcbiAgICAgIHRoaXMuY2xhc3NIZWlnaHQgPSAnJztcbiAgICAgIHRoaXMuX2J0bkdyb3VwID0gJ2dyb3VwMSc7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLmNsYXNzSGVpZ2h0ID0gJyBidG4taGVpZ2h0LXNtJztcbiAgICAgIHRoaXMuX2J0bkdyb3VwID0gJ2dyb3VwMidcblxuICAgIH1cbiAgICB0aGlzLmNsYXNzRGlzYWJsZSA9IHRoaXMuaXNEaXNhYmxlID8gJyBidG4tZGlzYWJsZScgOiAnJ1xuXG4gICAgdGhpcy5pc0Rpc2FibGUgPyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdidG4tbm90LWFsbG93Jyk6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2J0bi1ub3QtYWxsb3cnKVxuICAgIFxuICAgIFxuXG4gICAgXG4gICAgdGhpcy5jbGFzc1dkID0gJyBidG4td2QtJyt0aGlzLl9idG5Hcm91cCsnLScrdGhpcy5idG5XZDtcbiAgICBcbiAgICBzd2l0Y2godGhpcy5idG5TdHlsZSl7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgdGhpcy5jbGFzc1N0eWxlID0gJyBidG4tY29sb3ItZnVsbC0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvcmRlcic6XG4gICAgICAgIHRoaXMuY2xhc3NTdHlsZSA9ICcgYnRuLWNvbG9yLWJvcmRlci0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICB0aGlzLmNsYXNzU3R5bGUgPSAnIGJ0bi1jb2xvci10ZXh0LSc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHRoaXMuYnRuUmVuZGVyU3R5bGUgPSB0aGlzLmNsYXNzV2QgKyB0aGlzLmNsYXNzSGVpZ2h0ICsgdGhpcy5jbGFzc1N0eWxlICsgdGhpcy5idG5Db2xvciArIHRoaXMuY2xhc3NEaXNhYmxlO1xuICAgIFxuXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0dGluZ0J0blN0eWxlKCk7XG5cbiAgfVxuICAgIFxuICAgIFxuXG59XG4iXX0=