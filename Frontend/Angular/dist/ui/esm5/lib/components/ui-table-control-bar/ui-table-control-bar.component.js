/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Language } from '@allianzSND/core';
var UiTableControlBarComponent = /** @class */ (function () {
    function UiTableControlBarComponent() {
        this.language = new Language();
        this._isVertical = false;
        this.onClick = new EventEmitter();
    }
    Object.defineProperty(UiTableControlBarComponent.prototype, "isVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isVertical;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isVertical = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiTableControlBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableControlBarComponent.prototype.clickBtn = /**
     * @return {?}
     */
    function () {
        this.isVertical = !this.isVertical;
        this.onClick.emit(this.isVertical);
    };
    UiTableControlBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-table-control-bar',
                    template: "\n<div class=\"table-control-block\">\n  <!-- contro detail -->\n  <div class=\"table-control-detail\" (click)=\"clickBtn()\">\n      <div class=\"control-button-block\">\n        <div class=\"btn-icon\">\n          <img src=\"assets/img/icon-change.svg\">\n        </div>\n      </div>\n      <div class=\"control-text\">\n        <div *ngIf=\"isVertical\" class=\"text-option text-option-01\">{{language.vertical | translate}}</div>\n        <div *ngIf=\"!isVertical\" class=\"text-option text-option-02\">{{language.horizonal | translate}}</div>\n      </div>\n  </div>\n  <!-- end of control detail -->\n  <div class=\"table-extra-block\">\n    <ng-content></ng-content>\n  </div>\n  \n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-control-block{display:flex;justify-content:space-between;width:100%;background-color:#fff;padding:12px 15px;border-bottom:1px solid #ececec}@media (min-width:1023px){.table-control-block{display:none}}.table-control-block .control-button-block,.table-control-block .table-control-detail{display:flex}.table-control-block .btn-icon{display:inline-block;margin-right:12px}.table-control-block .btn-icon img{max-width:24px;width:100%}.table-control-block .control-text{color:#414141;font-size:.875rem;line-height:28px}"]
                }] }
    ];
    UiTableControlBarComponent.ctorParameters = function () { return []; };
    UiTableControlBarComponent.propDecorators = {
        isVertical: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return UiTableControlBarComponent;
}());
export { UiTableControlBarComponent };
if (false) {
    /** @type {?} */
    UiTableControlBarComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    UiTableControlBarComponent.prototype._isVertical;
    /** @type {?} */
    UiTableControlBarComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY29udHJvbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWJsZS1jb250cm9sLWJhci91aS10YWJsZS1jb250cm9sLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVDO0lBcUJFO1FBZE8sYUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFVbEIsWUFBTyxHQUFLLElBQUksWUFBWSxFQUFFLENBQUM7SUFHekIsQ0FBQztJQVpqQixzQkFDSSxrREFBVTs7OztRQURkO1lBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBZSxHQUFHO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRXpCLENBQUM7OztPQUpBOzs7O0lBWUQsNkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUNELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLG9zQkFBb0Q7O2lCQUVyRDs7Ozs2QkFLRSxLQUFLOzBCQVNMLE1BQU07O0lBYVQsaUNBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTFCWSwwQkFBMEI7OztJQUVyQyw4Q0FBaUM7Ozs7O0lBQ2pDLGlEQUE0Qjs7SUFVNUIsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLXVpLXRhYmxlLWNvbnRyb2wtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYmxlLWNvbnRyb2wtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtY29udHJvbC1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYmxlQ29udHJvbEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGxhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHByaXZhdGUgX2lzVmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgXG4gIGdldCBpc1ZlcnRpY2FsKCl7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmVydGljYWw7XG4gIH1cbiAgc2V0IGlzVmVydGljYWwodmFsKXtcbiAgICB0aGlzLl9pc1ZlcnRpY2FsID0gdmFsO1xuXG4gIH1cbiAgXG4gIEBPdXRwdXQoKSBvbkNsaWNrICA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBjbGlja0J0bigpe1xuICAgIHRoaXMuaXNWZXJ0aWNhbCA9ICF0aGlzLmlzVmVydGljYWw7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQodGhpcy5pc1ZlcnRpY2FsKTtcbiAgfVxuXG59XG4iXX0=