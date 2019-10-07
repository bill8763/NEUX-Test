/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Input, ChangeDetectorRef } from '@angular/core';
import { UiFormCheckbox2Component } from '../ui-form-checkbox2/ui-form-checkbox2.component';
export class UiCollapseGroupComponent {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.translateMore = 'more option';
        this.isOpen = false;
        this.activeClasses = '';
        this.btnDisplayClasses = '';
        this.displayHideBlock = '';
        this.openCloseStatus = 'closed';
    }
    /**
     * @return {?}
     */
    get hasCollapse() {
        if (this.childCmps)
            return this.childCmps.length >= 6;
        else
            return false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // console.log('ngAfterContentInit childCmps content:', this.childCmps);
        // if (this.childCmps.length >= 6) {
        //   this.hasCollapse = true;
        // }
    }
    //isOpen = true;
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.isOpen = !this.isOpen;
        this.activeClasses = this.isOpen ? 'active' : '';
        this.btnDisplayClasses = ' hide';
        this.displayHideBlock = ' show-hide-content';
        this.openCloseStatus = this.isOpen ? 'open' : 'closed';
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
        return this.isOpen;
    }
}
UiCollapseGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-collapse-group',
                template: "<div class=\"collpase-group-block\" [ngClass]=\"hasCollapse? '': ' style-no-collapse'\">\n  <!-- \u8981show\u7684\u5340\u584A -->\n  <span class=\"collpase-origin-block\" [ngClass]=\"displayHideBlock\" >\n    <ng-content select=\"[textType=originContent]\"></ng-content>\n    <ng-content *ngIf=\"isOpen\"  select=\"[textType=hideContnet]\"></ng-content>\n    <!-- \u89F8\u767C\u6309\u9215 -->\n    <div class=\"btn-collapse-block\" (click)=\"toggleCollapse()\" [ngClass]=\"btnDisplayClasses\">\n      <button class=\"btn-collapse-text\" >\n          {{translateMore}}\n      </button>\n    </div>\n    <!-- end of \u89F8\u767C\u6309\u9215 -->\n    \n  </span>\n  <!-- \u8981\u96B1\u85CF\u7684\u5340\u584A -->\n  \n</div>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host ::ng-deep{transition:.8s}:host ::ng-deep app-ui-form-checkbox2{transition:.8s}:host ::ng-deep app-ui-form-checkbox2:nth-of-type(n+6){opacity:0;display:none}:host ::ng-deep .collpase-origin-block{transition:.8s}:host ::ng-deep .collpase-origin-block.show-hide-content app-ui-form-checkbox2:nth-of-type(n+6){opacity:1;display:inline}.collpase-group-block{display:flex;align-items:center;flex-wrap:wrap}.collpase-group-block.style-no-collapse .btn-collapse-block{display:none}.btn-collapse-block{display:inline-block;border:none;background-color:transparent}.btn-collapse-block.hide{display:none}.btn-collapse-text{color:#c2c2c2;font-size:.75rem;font-weight:700;line-height:normal;display:inline-block;position:relative;text-decoration:underline;background-color:transparent;border:none;padding:0}.btn-collapse-text:empty{display:none}.btn-collapse-text:after{content:' ';border:solid #c2c2c2;border-width:0 1px 1px 0;display:inline-block;padding:2px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);margin-left:3px;vertical-align:middle}.collapse-hide-block{display:inline}"]
            }] }
];
UiCollapseGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiCollapseGroupComponent.propDecorators = {
    childCmps: [{ type: ContentChildren, args: [UiFormCheckbox2Component,] }],
    translateMore: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29sbGFwc2UtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1jb2xsYXBzZS1ncm91cC91aS1jb2xsYXBzZS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFHLFNBQVMsRUFBb0IsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBUzVGLE1BQU07Ozs7SUFJSixZQUFvQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFLNUMsa0JBQWEsR0FBVyxhQUFhLENBQUM7UUFpQnhDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0Isc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixvQkFBZSxHQUFXLFFBQVEsQ0FBQztJQXhCMUMsQ0FBQzs7OztJQU1ELElBQUksV0FBVztRQUNiLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7O1lBRWxDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFDRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELGtCQUFrQjtRQUNoQix3RUFBd0U7UUFDeEUsb0NBQW9DO1FBQ3BDLDZCQUE2QjtRQUM3QixJQUFJO0lBQ04sQ0FBQzs7Ozs7SUFRRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXZELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw4dEJBQWlEOzthQUVsRDs7O1lBUHlFLGlCQUFpQjs7O3dCQVd4RixlQUFlLFNBQUMsd0JBQXdCOzRCQVF4QyxLQUFLOzs7O0lBUk4sNkNBQytDOztJQU8vQyxpREFBK0M7O0lBQy9DLHdDQUFvQjs7SUFnQnBCLDBDQUErQjs7SUFDL0IsaURBQWtDOztJQUNsQyxxREFBc0M7O0lBQ3RDLG9EQUFxQzs7SUFDckMsbURBQTBDOzs7OztJQTFCOUIsa0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sICBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlGb3JtQ2hlY2tib3gyQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktZm9ybS1jaGVja2JveDIvdWktZm9ybS1jaGVja2JveDIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWNvbGxhcHNlLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWNvbGxhcHNlLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY29sbGFwc2UtZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFVpQ29sbGFwc2VHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFVpRm9ybUNoZWNrYm94MkNvbXBvbmVudClcbiAgY2hpbGRDbXBzOiBRdWVyeUxpc3Q8VWlGb3JtQ2hlY2tib3gyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gIH1cblxuXG4gIEBJbnB1dCgpIHRyYW5zbGF0ZU1vcmU6IHN0cmluZyA9ICdtb3JlIG9wdGlvbic7XG4gIHB1YmxpYyBkYXRhOiBvYmplY3Q7XG5cbiAgZ2V0IGhhc0NvbGxhcHNlKCkge1xuICAgIGlmICh0aGlzLmNoaWxkQ21wcylcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkQ21wcy5sZW5ndGggPj0gNjtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyQ29udGVudEluaXQgY2hpbGRDbXBzIGNvbnRlbnQ6JywgdGhpcy5jaGlsZENtcHMpO1xuICAgIC8vIGlmICh0aGlzLmNoaWxkQ21wcy5sZW5ndGggPj0gNikge1xuICAgIC8vICAgdGhpcy5oYXNDb2xsYXBzZSA9IHRydWU7XG4gICAgLy8gfVxuICB9XG4gIHB1YmxpYyBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZUNsYXNzZXM6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgYnRuRGlzcGxheUNsYXNzZXM6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZGlzcGxheUhpZGVCbG9jazogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBvcGVuQ2xvc2VTdGF0dXM6IHN0cmluZyA9ICdjbG9zZWQnO1xuICAvL2lzT3BlbiA9IHRydWU7XG5cbiAgdG9nZ2xlQ29sbGFwc2UoKSB7XG4gICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgdGhpcy5hY3RpdmVDbGFzc2VzID0gdGhpcy5pc09wZW4gPyAnYWN0aXZlJyA6ICcnO1xuICAgIHRoaXMuYnRuRGlzcGxheUNsYXNzZXMgPSAnIGhpZGUnO1xuICAgIHRoaXMuZGlzcGxheUhpZGVCbG9jayA9ICcgc2hvdy1oaWRlLWNvbnRlbnQnO1xuICAgIHRoaXMub3BlbkNsb3NlU3RhdHVzID0gdGhpcy5pc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJztcblxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xuICB9XG5cblxuXG59XG4iXX0=