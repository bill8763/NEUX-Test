/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Renderer2, ElementRef } from '@angular/core';
export class UiBtnComponent {
    //  btn 所屬組別
    /**
     * @param {?} el
     * @param {?} _renderer
     */
    constructor(el, _renderer) {
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
    /**
     * @return {?}
     */
    get isDisable() {
        return this._isDisable;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isDisable(val) {
        // console.log('in set isDisable', val);
        this._isDisable = val;
        if (this.isDisableChange) {
            this.isDisableChange.emit(this._isDisable);
            this.settingBtnStyle();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickBtn(e) {
        this.ClickBtn.emit(e);
    }
    /**
     * @return {?}
     */
    settingBtnStyle() {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.settingBtnStyle();
    }
}
UiBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-btn',
                template: "\n<button (click)=\"onClickBtn($event)\" [name]=\"name\" class=\"btn-default-style btn-body\" [ngClass]='this.btnRenderStyle' [id]=\"id\">\n\t<ng-content select=\"[TextType=cust]\"></ng-content>\n</button>\n\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host-context(.btn-not-allow){pointer-events:none}button{box-shadow:none;outline:0;cursor:pointer;-webkit-tap-highlight-color:transparent}button:active,button:focus{outline:0}.btn-block{text-align:center;display:flex;flex-wrap:wrap}.btn-default-style{box-shadow:none;border:none;display:inline-block;height:48px;line-height:48px;text-decoration:none;font-size:1rem;font-weight:700;text-align:center;border-radius:4px;max-width:210px;width:100%;position:relative;background-color:transparent;vertical-align:top}[class*=btn-color-full-]{color:#fff}[class*=btn-color-border-]{border:2px solid #c2c2c2;background-color:#fff}.btn-height-sm{height:48px;line-height:48px;font-size:.875rem}.btn-height-sm.btn-wd-group2-lg{font-size:1rem}.btn-height-sm[class*=btn-color-border]{line-height:44px}.btn-color-full-main1{background-color:#007d8c}.btn-color-full-main2{background-color:#007ab3}.btn-color-full-light1{background-color:#3da556}.btn-color-full-light2{background-color:#f86200}.btn-wd-group1-lg{max-width:270px}.btn-wd-group1-md{max-width:210px}.btn-wd-group1-sm{max-width:130px}.btn-wd-group2-lg{max-width:210px}.btn-wd-group2-md{max-width:160px}.btn-wd-group2-sm{max-width:115px}.btn-color-border-main1{border-color:#007d8c;color:#007d8c}.btn-color-border-main2{border-color:#007ab3;color:#007ab3}.btn-color-border-light1{border-color:#3da556;color:#3da556}.btn-color-border-light2{border-color:#f86200;color:#f86200}.btn-color-border-white-main1{border-color:#fff;color:#007d8c}.btn-color-border-white-main2{border-color:#fff;color:#007ab3}.btn-color-text-grey{color:#c2c2c2;background-color:transparent}.btn-color-text-main1{color:#007d8c;background-color:transparent}.btn-color-text-main2{color:#007ab3;background-color:transparent}.btn-color-text-light1{color:#3da556;background-color:transparent}.btn-color-text-light2{color:#f86200;background-color:transparent}.btn-disable{pointer-events:none;cursor:default}.btn-disable.btn-color-full-light1{background-color:#b1dbbb}.btn-disable.btn-color-full-light2{background-color:#fcc099}.btn-disable.btn-color-full-main1{background-color:#93c5cb}.btn-disable.btn-color-full-main2{background-color:#99cae1}@media (max-width:374px){.btn-wd-group2-md{max-width:140px}}"]
            }] }
];
UiBtnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktYnRuL3VpLWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVE3SCxNQUFNOzs7Ozs7SUF3Q0osWUFBb0IsRUFBYyxFQUFTLFNBQW9CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBdEN0RCxVQUFLLEdBQVcsSUFBSSxDQUFDLENBQUUsWUFBWTtRQUNuQyxjQUFTLEdBQVcsU0FBUyxDQUFDLENBQUMsY0FBYztRQUM3QyxhQUFRLEdBQVUsTUFBTSxDQUFDLENBQUMsY0FBYztRQUN4QyxhQUFRLEdBQVcsT0FBTyxDQUFDLENBQUMscUNBQXFDO1FBQ2pFLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFHaEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBTTNCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWdCcEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFPekMsY0FBUyxHQUFXLFFBQVEsQ0FBQyxDQUFDLFlBQVk7SUFFakQsQ0FBQzs7OztJQXZCRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFNBQVMsQ0FBQyxHQUFHO1FBQ2Ysd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBQztZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBRUgsQ0FBQzs7Ozs7SUFJRCxVQUFVLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFNRCxlQUFlO1FBQ2IsbURBQW1EO1FBQ25ELElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7YUFDRztZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7U0FFMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBRXhELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQTtRQUtwSixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXhELFFBQU8sSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNuQixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztnQkFDckMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDO2dCQUN2QyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ3JDLE1BQU07U0FFVDtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBRzlHLENBQUM7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRXpCLENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLCtOQUFzQztnQkFFdEMsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7WUFQMEYsVUFBVTtZQUFwQixTQUFTOzs7b0JBVXZGLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7aUJBQ0wsS0FBSzttQkFHTCxLQUFLOzhCQU9MLE1BQU07d0JBRU4sS0FBSzt1QkFjTCxNQUFNOzs7O0lBOUJQLCtCQUE4Qjs7SUFDOUIsbUNBQXVDOztJQUN2QyxrQ0FBa0M7O0lBQ2xDLGtDQUFvQzs7SUFDcEMsNEJBQXlCOztJQUd6Qiw4QkFBMkI7Ozs7O0lBQzNCLG9DQUFvQzs7SUFDcEMsaUNBQXVCOztJQUN2QixxQ0FBMkI7O0lBQzNCLG9DQUEwQjs7SUFDMUIsc0NBQTRCOztJQUM1Qix3Q0FBOEI7O0lBQzlCLHlDQUE4Qzs7SUFnQjlDLGtDQUFnRDs7SUFPaEQsbUNBQW9DOzs7OztJQUN4Qiw0QkFBc0I7Ozs7O0lBQUMsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksUmVuZGVyZXIyLEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWJ0bicsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1idG4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1idG4uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYnRuV2Q6IHN0cmluZyA9ICdtZCc7ICAvL21kLCBzbSwgbGdcbiAgQElucHV0KCkgYnRuSGVpZ2h0OiBzdHJpbmcgPSAnZGVmYXVsdCc7IC8vIGRlZmF1bHQsIHNtXG4gIEBJbnB1dCgpIGJ0blN0eWxlOiBzdHJpbmc9ICdmdWxsJzsgLy8gZnVsbCBib3JkZXJcbiAgQElucHV0KCkgYnRuQ29sb3I6IHN0cmluZyA9ICdtYWluMic7IC8vIG1haW4xLCBtYWluMiwgbGlnaHQxLCBsaWdodDIsIGdyZXlcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuICBcbiAgXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9pc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNsYXNzV2Q6IHN0cmluZztcbiAgcHVibGljIGNsYXNzSGVpZ2h0OiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc1N0eWxlOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGFzc0Rpc2FibGU6IHN0cmluZztcbiAgcHVibGljIGJ0blJlbmRlclN0eWxlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKWlzRGlzYWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBcbiAgZ2V0IGlzRGlzYWJsZSgpe1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGU7XG4gIH1cbiAgc2V0IGlzRGlzYWJsZSh2YWwpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbiBzZXQgaXNEaXNhYmxlJywgdmFsKTtcbiAgICB0aGlzLl9pc0Rpc2FibGUgPSB2YWw7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlQ2hhbmdlKXtcbiAgICAgIHRoaXMuaXNEaXNhYmxlQ2hhbmdlLmVtaXQodGhpcy5faXNEaXNhYmxlKTtcbiAgICAgIHRoaXMuc2V0dGluZ0J0blN0eWxlKCk7XG4gICAgfVxuXG4gIH1cblxuICBAT3V0cHV0KCkgQ2xpY2tCdG4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBvbkNsaWNrQnRuKGUpe1xuICAgIHRoaXMuQ2xpY2tCdG4uZW1pdChlKTtcbiAgfVxuXG5cbiAgcHVibGljIF9idG5Hcm91cDogc3RyaW5nID0gJ2dyb3VwMSc7IC8vICBidG4g5omA5bGs57WE5YilXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYscHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG4gIHNldHRpbmdCdG5TdHlsZSgpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nQnRuU3R5bGUnLCB0aGlzLl9pc0Rpc2FibGUpO1xuICAgIGlmKHRoaXMuYnRuSGVpZ2h0ID09ICdkZWZhdWx0Jyl7XG4gICAgICB0aGlzLmNsYXNzSGVpZ2h0ID0gJyc7XG4gICAgICB0aGlzLl9idG5Hcm91cCA9ICdncm91cDEnO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5jbGFzc0hlaWdodCA9ICcgYnRuLWhlaWdodC1zbSc7XG4gICAgICB0aGlzLl9idG5Hcm91cCA9ICdncm91cDInXG5cbiAgICB9XG4gICAgdGhpcy5jbGFzc0Rpc2FibGUgPSB0aGlzLmlzRGlzYWJsZSA/ICcgYnRuLWRpc2FibGUnIDogJydcblxuICAgIHRoaXMuaXNEaXNhYmxlID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYnRuLW5vdC1hbGxvdycpOiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdidG4tbm90LWFsbG93JylcbiAgICBcbiAgICBcblxuICAgIFxuICAgIHRoaXMuY2xhc3NXZCA9ICcgYnRuLXdkLScrdGhpcy5fYnRuR3JvdXArJy0nK3RoaXMuYnRuV2Q7XG4gICAgXG4gICAgc3dpdGNoKHRoaXMuYnRuU3R5bGUpe1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIHRoaXMuY2xhc3NTdHlsZSA9ICcgYnRuLWNvbG9yLWZ1bGwtJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3JkZXInOlxuICAgICAgICB0aGlzLmNsYXNzU3R5bGUgPSAnIGJ0bi1jb2xvci1ib3JkZXItJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgdGhpcy5jbGFzc1N0eWxlID0gJyBidG4tY29sb3ItdGV4dC0nO1xuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgICB0aGlzLmJ0blJlbmRlclN0eWxlID0gdGhpcy5jbGFzc1dkICsgdGhpcy5jbGFzc0hlaWdodCArIHRoaXMuY2xhc3NTdHlsZSArIHRoaXMuYnRuQ29sb3IgKyB0aGlzLmNsYXNzRGlzYWJsZTtcbiAgICBcblxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldHRpbmdCdG5TdHlsZSgpO1xuXG4gIH1cbiAgICBcbiAgICBcblxufVxuIl19