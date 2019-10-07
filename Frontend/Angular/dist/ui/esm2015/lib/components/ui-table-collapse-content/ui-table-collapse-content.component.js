/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { animationCollapse } from '../../model/Animation/AnimationCollapse';
export class UiCollapseContentComponent {
    /**
     * @param {?} changeDector
     */
    constructor(changeDector) {
        this.changeDector = changeDector;
        this.isShow = true;
        this.isOpen = true;
        this.isHasCollapse = true;
        this.titleText = '';
        this.onCollapsing = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleNoCollapse = this.isHasCollapse ? '' : 'style-no-collapse';
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.isOpen = !this.isOpen;
        this.onCollapsing.emit(this.isOpen);
        this.changeDector.markForCheck();
        this.changeDector.detectChanges();
        return this.isOpen;
    }
    /**
     * @return {?}
     */
    isOpenStatus() {
        return this.isOpen ? 'open' : 'closed';
    }
}
UiCollapseContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-table-collapse-content',
                animations: [
                    animationCollapse
                ],
                template: "<div class=\"table-collapse\" [ngClass]=\"{'show':!isOpen}\">\n  <app-ui-table-title [titleText]=\"titleText\" (onClick)=\"toggleCollapse()\" [ngClass]=\"styleNoCollapse\">\n    <ng-content select=\"[header]\"></ng-content>\n  </app-ui-table-title>\n  <div class=\"collapse-content \" [@openClose]=\"isOpenStatus()\" [ngClass]=\"{'showActive':isOpen}\">\n    <ng-content select=\"[body]\"></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-collapse .collapse-content{border-left:1px solid #ececec;border-right:1px solid #ececec;border-bottom:1px solid #ececec;overflow-y:hidden}.table-collapse ::ng-deep app-ui-table-title.style-no-collapse{display:none}.table-collapse ::ng-deep app-ui-table-title .event-btn{background-color:#007ab3;display:flex;align-items:center;justify-content:center}.table-collapse ::ng-deep app-ui-table-title .event-btn:before{content:'';transition:.5s;display:inline-block;background-size:contain;background-image:url(assets/img/icon-arrow-white.svg);width:20px;height:20px;background-repeat:no-repeat;vertical-align:middle;position:relative;top:3px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.table-collapse.show ::ng-deep app-ui-table-title .event-btn:before{top:-3px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}"]
            }] }
];
UiCollapseContentComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiCollapseContentComponent.propDecorators = {
    isShow: [{ type: Input }],
    isOpen: [{ type: Input }],
    isHasCollapse: [{ type: Input }],
    titleText: [{ type: Input }],
    onCollapsing: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiCollapseContentComponent.prototype.isShow;
    /** @type {?} */
    UiCollapseContentComponent.prototype.isOpen;
    /** @type {?} */
    UiCollapseContentComponent.prototype.isHasCollapse;
    /** @type {?} */
    UiCollapseContentComponent.prototype.titleText;
    /** @type {?} */
    UiCollapseContentComponent.prototype.onCollapsing;
    /** @type {?} */
    UiCollapseContentComponent.prototype.styleNoCollapse;
    /**
     * @type {?}
     * @private
     */
    UiCollapseContentComponent.prototype.changeDector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY29sbGFwc2UtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWNvbGxhcHNlLWNvbnRlbnQvdWktdGFibGUtY29sbGFwc2UtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFVNUUsTUFBTTs7OztJQUVKLFlBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUN6QyxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFMVSxDQUFDOzs7O0lBT3ZELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxVQUFVLEVBQUU7b0JBQ1YsaUJBQWlCO2lCQUNsQjtnQkFDRCxrYkFBeUQ7Z0JBRXpELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOzthQUMvQzs7O1lBVmlGLGlCQUFpQjs7O3FCQWNoRyxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLE1BQU07Ozs7SUFKUCw0Q0FBK0I7O0lBQy9CLDRDQUFnQzs7SUFDaEMsbURBQXVDOztJQUN2QywrQ0FBK0I7O0lBQy9CLGtEQUE0Qzs7SUFDNUMscURBQWdDOzs7OztJQU5wQixrREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGlvbkNvbGxhcHNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvQW5pbWF0aW9uL0FuaW1hdGlvbkNvbGxhcHNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWJsZS1jb2xsYXBzZS1jb250ZW50JyxcbiAgYW5pbWF0aW9uczogW1xuICAgIGFuaW1hdGlvbkNvbGxhcHNlXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS1jb2xsYXBzZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtY29sbGFwc2UtY29udGVudC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpQ29sbGFwc2VDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG4gIEBJbnB1dCgpIGlzU2hvdzpib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNIYXNDb2xsYXBzZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHRpdGxlVGV4dDpzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIG9uQ29sbGFwc2luZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIHN0eWxlTm9Db2xsYXBzZSA6IHN0cmluZztcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZU5vQ29sbGFwc2UgPSB0aGlzLmlzSGFzQ29sbGFwc2UgPyAnJyA6ICdzdHlsZS1uby1jb2xsYXBzZSc7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB0aGlzLm9uQ29sbGFwc2luZy5lbWl0KHRoaXMuaXNPcGVuKTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNoYW5nZURlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xuICB9XG4gIGlzT3BlblN0YXR1cygpe1xuICAgIHJldHVybiB0aGlzLmlzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnO1xuICB9XG5cbn1cbiJdfQ==