/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
var UiModalMsgComponent = /** @class */ (function () {
    function UiModalMsgComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.alertInit = false;
        this._isPopupOpen = false;
        this.isPopupOpenChange = new EventEmitter();
    }
    Object.defineProperty(UiModalMsgComponent.prototype, "isPopupOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isPopupOpen;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.isPopupOpen != val && val) {
                this.alertInit = true;
                this.autoDisappear();
                this._isPopupOpen = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiModalMsgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiModalMsgComponent.prototype.autoDisappear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._isPopupOpen = false;
            _this.isPopupOpenChange.emit(_this.isPopupOpen);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.alertInit = false;
                _this.changeDetector.detectChanges();
            }), 2000);
        }), 1600);
    };
    UiModalMsgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-modal-msg',
                    template: "<div class=\"alert-wrapper\" ng-init=\"alertInit\" [ngClass]=\"[(alertInit && isPopupOpen? 'getIn animating':'getOut animating'),(alertInit? '':'hide')]\">\n  <div class=\"alert-body\">\n    <span>\n      <ng-content></ng-content>\n    </span>\n  </div>\n</div>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.alert-wrapper{width:100%;position:fixed;z-index:9999;top:20px;left:0;right:0;margin:0 auto;padding:17px 33px;text-align:center;max-width:411px;background-color:rgba(0,0,0,.55);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1s;animation-duration:1s}.alert-wrapper.hide{display:none}.alert-wrapper.getIn{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}.alert-wrapper.getOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-delay:1s;animation-delay:1s}@media screen and (max-width:1023px){.alert-wrapper{top:0}}.alert-wrapper .alert-body span{color:#fff;font-size:.875rem}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"]
                }] }
    ];
    UiModalMsgComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiModalMsgComponent.propDecorators = {
        isPopupOpen: [{ type: Input }],
        isPopupOpenChange: [{ type: Output }]
    };
    return UiModalMsgComponent;
}());
export { UiModalMsgComponent };
if (false) {
    /** @type {?} */
    UiModalMsgComponent.prototype.alertInit;
    /**
     * @type {?}
     * @private
     */
    UiModalMsgComponent.prototype._isPopupOpen;
    /** @type {?} */
    UiModalMsgComponent.prototype.isPopupOpenChange;
    /**
     * @type {?}
     * @private
     */
    UiModalMsgComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbW9kYWwtbXNnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktbW9kYWwtbXNnL3VpLW1vZGFsLW1zZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0Y7SUFPRSw2QkFBb0IsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQzlDLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFjbkIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWhCUSxDQUFDO0lBSTFELHNCQUNJLDRDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixHQUFHO1lBQ2pCLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQzthQUN6QjtRQUNILENBQUM7OztPQVBBOzs7O0lBVUQsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELDJDQUFhOzs7SUFBYjtRQUFBLGlCQVNDO1FBUkMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN0QyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUE7UUFDVCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGlSQUE0Qzs7aUJBRTdDOzs7Z0JBTnFELGlCQUFpQjs7OzhCQWFwRSxLQUFLO29DQVlMLE1BQU07O0lBaUJULDBCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FuQ1ksbUJBQW1COzs7SUFHOUIsd0NBQWlDOzs7OztJQUNqQywyQ0FBNkI7O0lBYzdCLGdEQUFpRDs7Ozs7SUFoQnJDLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC11aS1tb2RhbC1tc2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbW9kYWwtbXNnLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbW9kYWwtbXNnLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlNb2RhbE1zZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG4gIHB1YmxpYyBhbGVydEluaXQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc1BvcHVwT3BlbiA9IGZhbHNlO1xuICBcbiAgQElucHV0KClcbiAgZ2V0IGlzUG9wdXBPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BvcHVwT3BlbjtcbiAgfVxuICBzZXQgaXNQb3B1cE9wZW4odmFsKSB7XG4gICAgaWYodGhpcy5pc1BvcHVwT3BlbiAhPSB2YWwgJiYgdmFsKXtcbiAgICAgIHRoaXMuYWxlcnRJbml0PXRydWU7IFxuICAgICAgdGhpcy5hdXRvRGlzYXBwZWFyKCk7XG4gICAgICB0aGlzLl9pc1BvcHVwT3BlbiA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCkgaXNQb3B1cE9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYXV0b0Rpc2FwcGVhcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2lzUG9wdXBPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUG9wdXBPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc1BvcHVwT3Blbik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hbGVydEluaXQ9ZmFsc2U7IFxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sMjAwMClcbiAgICB9LCAxNjAwKTtcbiAgfVxuXG5cblxufVxuIl19