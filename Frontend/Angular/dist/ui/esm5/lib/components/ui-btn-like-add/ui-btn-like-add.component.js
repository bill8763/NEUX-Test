/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var UiBtnLikeAddComponent = /** @class */ (function () {
    function UiBtnLikeAddComponent() {
        this.isDisable = false;
        this.onChange = new EventEmitter();
    }
    Object.defineProperty(UiBtnLikeAddComponent.prototype, "isLike", {
        get: /**
         * @return {?}
         */
        function () { return this._isLike; },
        set: /**
         * @param {?} isLike
         * @return {?}
         */
        function (isLike) {
            this._isLike = isLike;
            // console.debug('like-component',this._isLike);
            this.changeClass();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiBtnLikeAddComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.changeClass();
    };
    /**
     * @return {?}
     */
    UiBtnLikeAddComponent.prototype.changeClass = /**
     * @return {?}
     */
    function () {
        this.likeClasses = this._isLike ? ' active' : ' ';
        this.disableClasses = this.isDisable ? ' disabled' : ' ';
        this.totalClasses = this.likeClasses + this.disableClasses;
        // console.debug('totalClasses',this.totalClasses);
    };
    /**
     * @return {?}
     */
    UiBtnLikeAddComponent.prototype.toggleLike = /**
     * @return {?}
     */
    function () {
        this._isLike = !this._isLike;
        this.changeClass();
        this.onChange.emit(this._isLike);
        return false;
    };
    UiBtnLikeAddComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-btn-like-add',
                    template: "<a href=\"#\" (click)=\"toggleLike()\" class=\"btn-like-add status-toggle-block\"  [ngClass]=\"totalClasses\">\n    \n    <div class=\"btn-like status-normal \"><img src=\"./assets/img/icon-like.svg\" alt=\"nolike\"></div>\n    <div class=\"btn-like-active status-active\"><img src=\"./assets/img/icon-like-active.svg\" alt=\"like\"></div>\n</a>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.status-toggle-block .status-normal{display:inline-block}.status-toggle-block .status-active,.status-toggle-block.active .status-normal{display:none}.status-toggle-block.active .status-active{display:inline-block}:host{display:inline-block}@media screen and (min-width:1025px){:host .status-toggle-block .status-active,:host .status-toggle-block .status-normal{width:4vw}}"]
                }] }
    ];
    UiBtnLikeAddComponent.ctorParameters = function () { return []; };
    UiBtnLikeAddComponent.propDecorators = {
        isLike: [{ type: Input }],
        isDisable: [{ type: Input }],
        onChange: [{ type: Output }]
    };
    return UiBtnLikeAddComponent;
}());
export { UiBtnLikeAddComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiBtnLikeAddComponent.prototype._isLike;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.isDisable;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.onChange;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.likeClasses;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.disableClasses;
    /** @type {?} */
    UiBtnLikeAddComponent.prototype.totalClasses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktYnRuLWxpa2UtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktYnRuLWxpa2UtYWRkL3VpLWJ0bi1saWtlLWFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekc7SUF5QkU7UUFOUyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUsvQyxDQUFDO0lBakJqQixzQkFDSSx5Q0FBTTs7OztRQURWLGNBQ2MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQzs7Ozs7UUFDbkMsVUFBVyxNQUFnQjtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUV0QixnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJCLENBQUM7OztPQVBrQzs7OztJQWtCbkMsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFFRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFM0QsbURBQW1EO0lBQ3JELENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixxV0FBK0M7b0JBRS9DLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7eUJBR0UsS0FBSzs0QkFXTCxLQUFLOzJCQUNMLE1BQU07O0lBK0JULDRCQUFDO0NBQUEsQUFuREQsSUFtREM7U0E3Q1kscUJBQXFCOzs7Ozs7SUFXaEMsd0NBQXlCOztJQUV6QiwwQ0FBb0M7O0lBQ3BDLHlDQUErRDs7SUFDL0QsNENBQTJCOztJQUMzQiwrQ0FBOEI7O0lBQzlCLDZDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCAsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktYnRuLWxpa2UtYWRkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWJ0bi1saWtlLWFkZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWJ0bi1saWtlLWFkZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpQnRuTGlrZUFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgXG4gIGdldCBpc0xpa2UoKSB7cmV0dXJuIHRoaXMuX2lzTGlrZTt9XG4gIHNldCBpc0xpa2UoaXNMaWtlIDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzTGlrZSA9IGlzTGlrZTtcblxuICAgIC8vIGNvbnNvbGUuZGVidWcoJ2xpa2UtY29tcG9uZW50Jyx0aGlzLl9pc0xpa2UpO1xuICAgIHRoaXMuY2hhbmdlQ2xhc3MoKTtcbiAgICBcbiAgfSAgXG4gIHByaXZhdGUgX2lzTGlrZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBpc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBsaWtlQ2xhc3Nlczogc3RyaW5nO1xuICBwdWJsaWMgZGlzYWJsZUNsYXNzZXM6IHN0cmluZztcbiAgcHVibGljIHRvdGFsQ2xhc3Nlczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGFuZ2VDbGFzcygpO1xuICB9XG5cbiAgY2hhbmdlQ2xhc3MoKSB7XG4gICAgXG4gICAgdGhpcy5saWtlQ2xhc3NlcyA9IHRoaXMuX2lzTGlrZSA/ICcgYWN0aXZlJyA6ICcgJztcbiAgICB0aGlzLmRpc2FibGVDbGFzc2VzID0gdGhpcy5pc0Rpc2FibGUgPyAnIGRpc2FibGVkJyA6ICcgJztcbiAgICB0aGlzLnRvdGFsQ2xhc3NlcyA9IHRoaXMubGlrZUNsYXNzZXMgKyB0aGlzLmRpc2FibGVDbGFzc2VzO1xuXG4gICAgLy8gY29uc29sZS5kZWJ1ZygndG90YWxDbGFzc2VzJyx0aGlzLnRvdGFsQ2xhc3Nlcyk7XG4gIH1cblxuICB0b2dnbGVMaWtlKCl7XG4gICAgdGhpcy5faXNMaWtlID0gISB0aGlzLl9pc0xpa2U7XG4gICAgdGhpcy5jaGFuZ2VDbGFzcygpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLl9pc0xpa2UpO1xuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcblxuXG5cbn1cbiJdfQ==