/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiTitleStyle1Component {
    // true: title nowrap; false: title wrap
    constructor() {
        this.isShowOther = false;
        this.otherEleStatus = '';
        this.isFullCol = true; // true: title nowrap; false: title wrap
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.otherEleStatus = this.isShowOther ? ' active' : '';
    }
}
UiTitleStyle1Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-title-style1',
                template: "<div class=\"title-ele-block\" [ngClass]=\"otherEleStatus\" >\n    <h2 class=\"space-ui-title title-style1\" [ngClass]=\"{'notFullCol': !isFullCol}\">\n        <ng-content select=\"[textType=titleText]\"></ng-content>\n    </h2>\n    <div class=\"title-other-element\" >\n        <ng-content select=\"[textType=otherEle]\"></ng-content>\n    </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.title-style1{text-align:left;font-size:1.25rem;font-weight:700;line-height:normal;color:#414141;display:inline-flex;align-items:center;white-space:nowrap}.title-style1.notFullCol{white-space:normal}.title-style1:before{content:' ';width:4px;height:1.5rem;background-image:linear-gradient(to bottom,#003781 60%,#007d8c 40%);margin-right:10px;display:inline-block;vertical-align:top;position:relative;top:0}@media screen and (min-width:1025px){.title-style1:before{height:2.4vw}}.title-ele-block{text-align:left}.title-ele-block.active{display:flex;justify-content:space-between;align-items:center}.title-ele-block.active .title-other-element ::ng-deep .ui-link-block{margin-top:10px}"]
            }] }
];
UiTitleStyle1Component.ctorParameters = () => [];
UiTitleStyle1Component.propDecorators = {
    isShowOther: [{ type: Input }],
    otherEleStatus: [{ type: Input }],
    isFullCol: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiTitleStyle1Component.prototype.isShowOther;
    /** @type {?} */
    UiTitleStyle1Component.prototype.otherEleStatus;
    /** @type {?} */
    UiTitleStyle1Component.prototype.isFullCol;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGl0bGUtc3R5bGUxLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktdGl0bGUtc3R5bGUxL3VpLXRpdGxlLXN0eWxlMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07O0lBSUo7UUFIUyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQVksSUFBSSxDQUFDLENBQUMsd0NBQXdDO0lBQzVELENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekQsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGdYQUErQztnQkFFL0MsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7OzBCQUVFLEtBQUs7NkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRk4sNkNBQXNDOztJQUN0QyxnREFBcUM7O0lBQ3JDLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRpdGxlLXN0eWxlMScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10aXRsZS1zdHlsZTEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10aXRsZS1zdHlsZTEuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVRpdGxlU3R5bGUxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNTaG93T3RoZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgb3RoZXJFbGVTdGF0dXM6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpc0Z1bGxDb2w6IGJvb2xlYW4gPSB0cnVlOyAvLyB0cnVlOiB0aXRsZSBub3dyYXA7IGZhbHNlOiB0aXRsZSB3cmFwXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vdGhlckVsZVN0YXR1cyA9IHRoaXMuaXNTaG93T3RoZXIgPyAnIGFjdGl2ZSc6ICcnO1xuICB9XG5cbn1cbiJdfQ==