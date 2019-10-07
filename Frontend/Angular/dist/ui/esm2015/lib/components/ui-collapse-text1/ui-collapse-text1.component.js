/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { animationCollapse } from '../../model/Animation/AnimationCollapse';
export class UiCollapseText1Component {
    /**
     * @param {?} changeDetctor
     */
    constructor(changeDetctor) {
        this.changeDetctor = changeDetctor;
        this.translateEmpty = "Empty";
        this._isCollapseBtnShow = true;
        this._isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.activeClasses = '';
    }
    /**
     * @return {?}
     */
    get isCollapseBtnShow() { return this._isCollapseBtnShow; }
    /**
     * @param {?} isShow
     * @return {?}
     */
    set isCollapseBtnShow(isShow) {
        this._isCollapseBtnShow = isShow;
        console.debug('ui-collapse-text1', this._isCollapseBtnShow);
        this.changeDetctor.detectChanges();
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isOpen(val) {
        this._isOpen = val;
        this.activeClasses = this._isOpen ? 'active' : '';
        this.isOpenChange.emit(this._isOpen);
        this.changeDetctor.detectChanges();
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this._isOpen = !this._isOpen;
        this.changeDetctor.detectChanges();
        return this._isOpen;
    }
    /**
     * @return {?}
     */
    isOpenStatus() {
        return this._isOpen ? 'open' : 'closed';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiCollapseText1Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-collapse-text1',
                animations: [
                    animationCollapse
                ],
                template: "<div class=\"space-ui-version collapse-group-block\" [ngClass]=\"activeClasses\">\n    <!-- empty status -->\n    <div [hidden]=\"!isDataEmpty\" class=\"empty-block\">\n        <app-ui-empty-default>\n            <ng-container textType=\"emptyText\">{{translateEmpty}}</ng-container>\n        </app-ui-empty-default>\n    </div>\n    <!-- end of empty status -->\n    <div class=\"card-content-block\" [hidden]=\"isDataEmpty\">\n        <ng-content select=\"[TextType=cardContent]\"></ng-content>\n        <div class=\"collpase-block collapse-more-block\" [@openClose]=\"isOpenStatus()\">\n            <ng-content select=\"[TextType=collapseContentMore]\"></ng-content>\n        </div>\n        <div class=\"collapse-btn-block\" (click)=\"isOpen = !isOpen\" [ngClass]=\"activeClasses\">\n            <ng-container *ngIf=\"isCollapseBtnShow\">\n                <ng-content select=\"[TextType=collapseBtn]\"></ng-content>\n                <span class=\"icon-arrow\"></span>\n            </ng-container>\n        </div>\n    </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host .collapse-group-block{border-top:1px solid #c2c2c2}:host .collapse-group-block .empty-block{border-bottom:1px solid #c2c2c2;padding:5px 0}:host .collapse-group-block .gas-layout-form{padding:0 20px}:host .collapse-group-block.active .collapse-block ::ng-deep .info-unit-block{padding-top:5px}:host .collapse-group-block ::ng-deep [class*=gas-col-]{margin-bottom:4px}:host .collapse-group-block .collapse-btn-block{display:inline-block;vertical-align:middle;padding-top:20px;line-height:normal;position:relative;z-index:9;cursor:pointer;text-align:center;width:100%;border-bottom:1px solid #c2c2c2;padding-bottom:5px}:host .collapse-group-block .collapse-btn-block .icon-arrow{padding-top:0;display:inline-block}"]
            }] }
];
UiCollapseText1Component.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UiCollapseText1Component.propDecorators = {
    TextType: [{ type: Input }],
    collapseBtn: [{ type: Input }],
    isDataEmpty: [{ type: Input }],
    translateEmpty: [{ type: Input }],
    isCollapseBtnShow: [{ type: Input }],
    isOpen: [{ type: Input }],
    isOpenChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiCollapseText1Component.prototype.TextType;
    /** @type {?} */
    UiCollapseText1Component.prototype.collapseBtn;
    /** @type {?} */
    UiCollapseText1Component.prototype.isDataEmpty;
    /** @type {?} */
    UiCollapseText1Component.prototype.translateEmpty;
    /**
     * @type {?}
     * @private
     */
    UiCollapseText1Component.prototype._isCollapseBtnShow;
    /**
     * @type {?}
     * @private
     */
    UiCollapseText1Component.prototype._isOpen;
    /** @type {?} */
    UiCollapseText1Component.prototype.isOpenChange;
    /** @type {?} */
    UiCollapseText1Component.prototype.activeClasses;
    /**
     * @type {?}
     * @private
     */
    UiCollapseText1Component.prototype.changeDetctor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29sbGFwc2UtdGV4dDEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1jb2xsYXBzZS10ZXh0MS91aS1jb2xsYXBzZS10ZXh0MS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFzQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9KLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBVzVFLE1BQU07Ozs7SUFzQ0osWUFBb0IsYUFBZ0M7UUFBaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBbEMzQyxtQkFBYyxHQUFVLE9BQU8sQ0FBQztRQVNqQyx1QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFDcEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVdkLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQVlzQixDQUFDOzs7O0lBakN6RCxJQUNJLGlCQUFpQixLQUFJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUEsQ0FBQzs7Ozs7SUFDekQsSUFBSSxpQkFBaUIsQ0FBQyxNQUFnQjtRQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBR0QsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUtELGNBQWM7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7OztJQUlELGtCQUFrQjtJQUNsQixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsVUFBVSxFQUFFO29CQUNWLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsMGhDQUFpRDtnQkFFakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFYK0YsaUJBQWlCOzs7dUJBYTlHLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQkFVTCxLQUFLOzJCQVVMLE1BQU07Ozs7SUF4QlAsNENBQTBCOztJQUMxQiwrQ0FBNkI7O0lBQzdCLCtDQUE4Qjs7SUFDOUIsa0RBQXlDOzs7OztJQVN6QyxzREFBNEM7Ozs7O0lBQzVDLDJDQUF3Qjs7SUFXeEIsZ0RBQTRDOztJQUM1QyxpREFBa0M7Ozs7O0lBWXRCLGlEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0aW9uQ29sbGFwc2UgfSBmcm9tICcuLi8uLi9tb2RlbC9BbmltYXRpb24vQW5pbWF0aW9uQ29sbGFwc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktY29sbGFwc2UtdGV4dDEnLFxuICBhbmltYXRpb25zOiBbXG4gICAgYW5pbWF0aW9uQ29sbGFwc2VcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWNvbGxhcHNlLXRleHQxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktY29sbGFwc2UtdGV4dDEuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlDb2xsYXBzZVRleHQxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgVGV4dFR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgY29sbGFwc2VCdG46IHN0cmluZztcbiAgQElucHV0KCkgaXNEYXRhRW1wdHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRyYW5zbGF0ZUVtcHR5OiBzdHJpbmc9IFwiRW1wdHlcIjtcbiAgQElucHV0KCkgXG4gIGdldCBpc0NvbGxhcHNlQnRuU2hvdygpIHtyZXR1cm4gdGhpcy5faXNDb2xsYXBzZUJ0blNob3c7fVxuICBzZXQgaXNDb2xsYXBzZUJ0blNob3coaXNTaG93IDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQ29sbGFwc2VCdG5TaG93ID0gaXNTaG93O1xuICAgIGNvbnNvbGUuZGVidWcoJ3VpLWNvbGxhcHNlLXRleHQxJyx0aGlzLl9pc0NvbGxhcHNlQnRuU2hvdyk7XG5cbiAgICB0aGlzLmNoYW5nZURldGN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHByaXZhdGUgX2lzQ29sbGFwc2VCdG5TaG93IDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2lzT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCl7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgfVxuICBzZXQgaXNPcGVuKHZhbCl7XG4gICAgdGhpcy5faXNPcGVuID0gdmFsO1xuICAgIHRoaXMuYWN0aXZlQ2xhc3NlcyA9IHRoaXMuX2lzT3BlbiA/ICdhY3RpdmUnIDogJyc7XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLl9pc09wZW4pO1xuICAgIHRoaXMuY2hhbmdlRGV0Y3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGFjdGl2ZUNsYXNzZXM6IHN0cmluZyA9ICcnO1xuXG5cbiAgdG9nZ2xlQ29sbGFwc2UoKSB7XG4gICAgdGhpcy5faXNPcGVuID0gIXRoaXMuX2lzT3BlbjtcbiAgICB0aGlzLmNoYW5nZURldGN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cbiAgaXNPcGVuU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0Y3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==