/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var UiTabMoreComponent = /** @class */ (function () {
    function UiTabMoreComponent(changeDector) {
        this.changeDector = changeDector;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    UiTabMoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTabMoreComponent.prototype.isOpenTabSelect = /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
    };
    /**
     * @return {?}
     */
    UiTabMoreComponent.prototype.closeTabSelect = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
        this.changeDector.markForCheck();
    };
    UiTabMoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-tab-more',
                    template: "<div class=\"ui-tab-more\">\n  <button class=\"more-btn\" (click)=\"isOpenTabSelect()\">\n    <img src=\"assets/img/icon-elipsis-h.svg\" alt=\"\">\n  </button>\n  <div class=\"more-content\" [ngClass]=\"{'show':isOpen}\">\n      <ng-content></ng-content>\n  </div>\n  \n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{width:100%;height:100%}:host ::ng-deep button,:host button{border:none;outline:0}.ui-tab-more{width:100%;height:100%;position:relative}.ui-tab-more .more-btn{width:100%;height:100%;background-color:transparent;position:relative}.ui-tab-more .more-btn img{width:24px;height:24px;position:absolute;top:3px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ui-tab-more .more-content{position:absolute;top:30px;box-shadow:0 0 16px 0 rgba(0,0,0,.23);right:0;display:none}.ui-tab-more .more-content.show{display:block}.ui-tab-more .more-content:before{display:block;content:'';width:18px;height:18px;background-color:#fff;position:absolute;right:6px;top:-4px;-webkit-transform:rotate(45deg);transform:rotate(45deg);box-shadow:0 0 15px 0 rgba(0,0,0,.15)}.ui-tab-more .more-content ::ng-deep .tab-child{position:relative}.ui-tab-more .more-content ::ng-deep .tab-child .tab-child-btn-style{min-width:140px;padding:15px;background-color:#fff;font-size:.875rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:.2px;text-align:center;color:#414141}.ui-tab-more .more-content ::ng-deep .tab-child.active .tab-child-btn-style{background-color:#f1f9fa}.ui-tab-more .more-content ::ng-deep .tab-child+.tab-child{border-top:1px solid #ececec}"]
                }] }
    ];
    UiTabMoreComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return UiTabMoreComponent;
}());
export { UiTabMoreComponent };
if (false) {
    /** @type {?} */
    UiTabMoreComponent.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    UiTabMoreComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFiLW1vcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWItbW9yZS91aS10YWItbW9yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHO0lBUUUsNEJBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQURsRCxXQUFNLEdBQVcsS0FBSyxDQUFDO0lBQytCLENBQUM7Ozs7SUFFdkQscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUNELDRDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCwyQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsZ1NBQTJDO29CQUUzQyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7Z0JBUDJELGlCQUFpQjs7SUFxQjdFLHlCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FiWSxrQkFBa0I7OztJQUM3QixvQ0FBdUI7Ozs7O0lBQ1gsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRhYi1tb3JlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYi1tb3JlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFiLW1vcmUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYk1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc09wZW46Ym9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgaXNPcGVuVGFiU2VsZWN0KCl7XG4gICAgdGhpcy5pc09wZW49IXRoaXMuaXNPcGVuO1xuICB9XG4gIGNsb3NlVGFiU2VsZWN0KCl7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19