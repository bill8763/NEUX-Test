/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Input, ChangeDetectorRef } from '@angular/core';
import { UiFormCheckbox2Component } from '../ui-form-checkbox2/ui-form-checkbox2.component';
var UiCollapseGroupComponent = /** @class */ (function () {
    function UiCollapseGroupComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.translateMore = 'more option';
        this.isOpen = false;
        this.activeClasses = '';
        this.btnDisplayClasses = '';
        this.displayHideBlock = '';
        this.openCloseStatus = 'closed';
    }
    Object.defineProperty(UiCollapseGroupComponent.prototype, "hasCollapse", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.childCmps)
                return this.childCmps.length >= 6;
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiCollapseGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiCollapseGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // console.log('ngAfterContentInit childCmps content:', this.childCmps);
        // if (this.childCmps.length >= 6) {
        //   this.hasCollapse = true;
        // }
    };
    //isOpen = true;
    //isOpen = true;
    /**
     * @return {?}
     */
    UiCollapseGroupComponent.prototype.toggleCollapse = 
    //isOpen = true;
    /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.activeClasses = this.isOpen ? 'active' : '';
        this.btnDisplayClasses = ' hide';
        this.displayHideBlock = ' show-hide-content';
        this.openCloseStatus = this.isOpen ? 'open' : 'closed';
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
        return this.isOpen;
    };
    UiCollapseGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-collapse-group',
                    template: "<div class=\"collpase-group-block\" [ngClass]=\"hasCollapse? '': ' style-no-collapse'\">\n  <!-- \u8981show\u7684\u5340\u584A -->\n  <span class=\"collpase-origin-block\" [ngClass]=\"displayHideBlock\" >\n    <ng-content select=\"[textType=originContent]\"></ng-content>\n    <ng-content *ngIf=\"isOpen\"  select=\"[textType=hideContnet]\"></ng-content>\n    <!-- \u89F8\u767C\u6309\u9215 -->\n    <div class=\"btn-collapse-block\" (click)=\"toggleCollapse()\" [ngClass]=\"btnDisplayClasses\">\n      <button class=\"btn-collapse-text\" >\n          {{translateMore}}\n      </button>\n    </div>\n    <!-- end of \u89F8\u767C\u6309\u9215 -->\n    \n  </span>\n  <!-- \u8981\u96B1\u85CF\u7684\u5340\u584A -->\n  \n</div>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep{transition:.8s}:host ::ng-deep app-ui-form-checkbox2{transition:.8s}:host ::ng-deep app-ui-form-checkbox2:nth-of-type(n+6){opacity:0;display:none}:host ::ng-deep .collpase-origin-block{transition:.8s}:host ::ng-deep .collpase-origin-block.show-hide-content app-ui-form-checkbox2:nth-of-type(n+6){opacity:1;display:inline}.collpase-group-block{display:flex;align-items:center;flex-wrap:wrap}.collpase-group-block.style-no-collapse .btn-collapse-block{display:none}.btn-collapse-block{display:inline-block;border:none;background-color:transparent}.btn-collapse-block.hide{display:none}.btn-collapse-text{color:#c2c2c2;font-size:.75rem;font-weight:700;line-height:normal;display:inline-block;position:relative;text-decoration:underline;background-color:transparent;border:none;padding:0}.btn-collapse-text:empty{display:none}.btn-collapse-text:after{content:' ';border:solid #c2c2c2;border-width:0 1px 1px 0;display:inline-block;padding:2px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);margin-left:3px;vertical-align:middle}.collapse-hide-block{display:inline}"]
                }] }
    ];
    UiCollapseGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    UiCollapseGroupComponent.propDecorators = {
        childCmps: [{ type: ContentChildren, args: [UiFormCheckbox2Component,] }],
        translateMore: [{ type: Input }]
    };
    return UiCollapseGroupComponent;
}());
export { UiCollapseGroupComponent };
if (false) {
    /** @type {?} */
    UiCollapseGroupComponent.prototype.childCmps;
    /** @type {?} */
    UiCollapseGroupComponent.prototype.translateMore;
    /** @type {?} */
    UiCollapseGroupComponent.prototype.data;
    /** @type {?} */
    UiCollapseGroupComponent.prototype.isOpen;
    /** @type {?} */
    UiCollapseGroupComponent.prototype.activeClasses;
    /** @type {?} */
    UiCollapseGroupComponent.prototype.btnDisplayClasses;
    /** @type {?} */
    UiCollapseGroupComponent.prototype.displayHideBlock;
    /** @type {?} */
    UiCollapseGroupComponent.prototype.openCloseStatus;
    /**
     * @type {?}
     * @private
     */
    UiCollapseGroupComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29sbGFwc2UtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1jb2xsYXBzZS1ncm91cC91aS1jb2xsYXBzZS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFHLFNBQVMsRUFBb0IsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTVGO0lBV0Usa0NBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUs1QyxrQkFBYSxHQUFXLGFBQWEsQ0FBQztRQWlCeEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0IscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQVcsUUFBUSxDQUFDO0lBeEIxQyxDQUFDO0lBTUQsc0JBQUksaURBQVc7Ozs7UUFBZjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDOztnQkFFbEMsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7Ozs7SUFDRCwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0QscURBQWtCOzs7SUFBbEI7UUFDRSx3RUFBd0U7UUFDeEUsb0NBQW9DO1FBQ3BDLDZCQUE2QjtRQUM3QixJQUFJO0lBQ04sQ0FBQztJQU1ELGdCQUFnQjs7Ozs7SUFFaEIsaURBQWM7Ozs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDh0QkFBaUQ7O2lCQUVsRDs7O2dCQVB5RSxpQkFBaUI7Ozs0QkFXeEYsZUFBZSxTQUFDLHdCQUF3QjtnQ0FReEMsS0FBSzs7SUFzQ1IsK0JBQUM7Q0FBQSxBQXRERCxJQXNEQztTQS9DWSx3QkFBd0I7OztJQUNuQyw2Q0FDK0M7O0lBTy9DLGlEQUErQzs7SUFDL0Msd0NBQW9COztJQWdCcEIsMENBQStCOztJQUMvQixpREFBa0M7O0lBQ2xDLHFEQUFzQzs7SUFDdEMsb0RBQXFDOztJQUNyQyxtREFBMEM7Ozs7O0lBMUI5QixrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVaUZvcm1DaGVja2JveDJDb21wb25lbnQgfSBmcm9tICcuLi91aS1mb3JtLWNoZWNrYm94Mi91aS1mb3JtLWNoZWNrYm94Mi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktY29sbGFwc2UtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktY29sbGFwc2UtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1jb2xsYXBzZS1ncm91cC5jb21wb25lbnQuc2NzcyddLFxufSlcblxuXG5leHBvcnQgY2xhc3MgVWlDb2xsYXBzZUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oVWlGb3JtQ2hlY2tib3gyQ29tcG9uZW50KVxuICBjaGlsZENtcHM6IFF1ZXJ5TGlzdDxVaUZvcm1DaGVja2JveDJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgfVxuXG5cbiAgQElucHV0KCkgdHJhbnNsYXRlTW9yZTogc3RyaW5nID0gJ21vcmUgb3B0aW9uJztcbiAgcHVibGljIGRhdGE6IG9iamVjdDtcblxuICBnZXQgaGFzQ29sbGFwc2UoKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRDbXBzKVxuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRDbXBzLmxlbmd0aCA+PSA2O1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50SW5pdCBjaGlsZENtcHMgY29udGVudDonLCB0aGlzLmNoaWxkQ21wcyk7XG4gICAgLy8gaWYgKHRoaXMuY2hpbGRDbXBzLmxlbmd0aCA+PSA2KSB7XG4gICAgLy8gICB0aGlzLmhhc0NvbGxhcHNlID0gdHJ1ZTtcbiAgICAvLyB9XG4gIH1cbiAgcHVibGljIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlQ2xhc3Nlczogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBidG5EaXNwbGF5Q2xhc3Nlczogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBkaXNwbGF5SGlkZUJsb2NrOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIG9wZW5DbG9zZVN0YXR1czogc3RyaW5nID0gJ2Nsb3NlZCc7XG4gIC8vaXNPcGVuID0gdHJ1ZTtcblxuICB0b2dnbGVDb2xsYXBzZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB0aGlzLmFjdGl2ZUNsYXNzZXMgPSB0aGlzLmlzT3BlbiA/ICdhY3RpdmUnIDogJyc7XG4gICAgdGhpcy5idG5EaXNwbGF5Q2xhc3NlcyA9ICcgaGlkZSc7XG4gICAgdGhpcy5kaXNwbGF5SGlkZUJsb2NrID0gJyBzaG93LWhpZGUtY29udGVudCc7XG4gICAgdGhpcy5vcGVuQ2xvc2VTdGF0dXMgPSB0aGlzLmlzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cblxuXG5cbn1cbiJdfQ==