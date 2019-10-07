/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var UiMainFullComponent = /** @class */ (function () {
    function UiMainFullComponent(changeDector) {
        this.changeDector = changeDector;
        this.isLoadingFinishChange = new EventEmitter();
        this.refreshCallback = new EventEmitter();
        this._isLoadingFinish = false;
    }
    Object.defineProperty(UiMainFullComponent.prototype, "isLoadingFinish", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLoadingFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLoadingFinish = value;
            this.isLoadingFinishChange.emit(this._isLoadingFinish);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiMainFullComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    // loading content
    // loading content
    /**
     * @param {?} event
     * @return {?}
     */
    UiMainFullComponent.prototype.refreshContent = 
    // loading content
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isLoadingFinish = false;
        this.refreshCallback.emit(event);
        this.changeDector.markForCheck();
    }; // end loadContent
    UiMainFullComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-main-full',
                    template: "<div class=\"ui-page-content\">\n    <div class=\"ui-main-full-content\">\n      <ng-content select=\"[main]\"></ng-content>\n    </div>\n  <ng-content select=\"[global-main]\"></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-layout-back-block{cursor:pointer;color:#fff;line-height:normal;display:flex;align-items:center;min-height:44px}.ui-layout-back-block.style-full-width-title{width:44px;height:44px;position:absolute;left:0}.header-back-btn{padding-left:20px}.header-back-btn .back-icon{width:12px}.ui-page-content{width:100%;height:100%;background-color:#f5f5f5}.ui-page-content .ui-main-full-content{min-height:100vh;padding:40px 0 0;background-color:#f5f5f5}.ui-page-content ::ng-deep .infiniti-scroll{max-height:100vh}@media screen and (max-width:1023px){.ui-page-content .ui-main-full-content{padding:30px 0 100px}}"]
                }] }
    ];
    UiMainFullComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiMainFullComponent.propDecorators = {
        isLoadingFinish: [{ type: Input }],
        isLoadingFinishChange: [{ type: Output }],
        refreshCallback: [{ type: Output }]
    };
    return UiMainFullComponent;
}());
export { UiMainFullComponent };
if (false) {
    /** @type {?} */
    UiMainFullComponent.prototype.isLoadingFinishChange;
    /** @type {?} */
    UiMainFullComponent.prototype.refreshCallback;
    /** @type {?} */
    UiMainFullComponent.prototype._isLoadingFinish;
    /**
     * @type {?}
     * @private
     */
    UiMainFullComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbWFpbi1mdWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2xheW91dC91aS1tYWluLWZ1bGwvdWktbWFpbi1mdWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSDtJQXFCRSw2QkFBb0IsWUFBOEI7UUFBOUIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBTnhDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQUVhLENBQUM7SUFkdkQsc0JBQ1csZ0RBQWU7Ozs7UUFEMUI7WUFFRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7OztRQUNELFVBQTJCLEtBQUs7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUpBOzs7O0lBYUQsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQztJQUVELGtCQUFrQjs7Ozs7O0lBQ2xCLDRDQUFjOzs7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDLEVBQUMsa0JBQWtCOztnQkEvQnJCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixvTkFBNEM7b0JBRTVDLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7OztnQkFQaUYsaUJBQWlCOzs7a0NBU2hHLEtBQUs7d0NBUUwsTUFBTTtrQ0FFTixNQUFNOztJQWVULDBCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0ExQlksbUJBQW1COzs7SUFTOUIsb0RBQXFEOztJQUVyRCw4Q0FBK0M7O0lBRS9DLCtDQUF5Qzs7Ozs7SUFFN0IsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1tYWluLWZ1bGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbWFpbi1mdWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbWFpbi1mdWxsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlNYWluRnVsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgaXNMb2FkaW5nRmluaXNoKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmdGaW5pc2g7XG4gIH1cbiAgcHVibGljIHNldCBpc0xvYWRpbmdGaW5pc2godmFsdWUpIHtcbiAgICB0aGlzLl9pc0xvYWRpbmdGaW5pc2ggPSB2YWx1ZTtcbiAgICB0aGlzLmlzTG9hZGluZ0ZpbmlzaENoYW5nZS5lbWl0KHRoaXMuX2lzTG9hZGluZ0ZpbmlzaCk7XG4gIH1cbiAgQE91dHB1dCgpIGlzTG9hZGluZ0ZpbmlzaENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgcmVmcmVzaENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBfaXNMb2FkaW5nRmluaXNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLy8gbG9hZGluZyBjb250ZW50XG4gIHJlZnJlc2hDb250ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5pc0xvYWRpbmdGaW5pc2ggPSBmYWxzZTtcbiAgICB0aGlzLnJlZnJlc2hDYWxsYmFjay5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfSAvLyBlbmQgbG9hZENvbnRlbnRcbn1cbiJdfQ==