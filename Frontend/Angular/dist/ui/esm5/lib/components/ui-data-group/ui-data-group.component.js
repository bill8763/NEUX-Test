/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiDataGroupComponent = /** @class */ (function () {
    function UiDataGroupComponent() {
        this.isShowPreData = false;
        this.imgIconSrc = '';
        this.imgType = false;
        this.iconType = false;
        this.iconName = '';
        this.groupName = '';
    }
    /**
     * @return {?}
     */
    UiDataGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiDataGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-data-group',
                    template: "<div class=\"ui-data-group space-ui-clear\">\n    <div class=\"pre-block\" *ngIf=\"isShowPreData\">\n        <div *ngIf=\"imgType\" class=\"img-block\">\n            <img  [src]=\"imgIconSrc\">\n        </div>\n        <i *ngIf=\"iconType\" class=\"icon-block\" >\n            <nx-icon [name]=\"iconName\" size='s'></nx-icon>\n        </i>\n    </div>\n    <div class=\"content-block\">\n        <ng-content select=\"[textType=dataContent]\"></ng-content>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%}:host ::ng-deep .form-row-block{margin-top:0}.ui-data-group{display:block;width:100%;position:relative}.ui-data-group ::ng-deep button{margin:0}.ui-data-group ::ng-deep .gas-row-block{margin-bottom:0}.ui-data-group ::ng-deep .gas-row-block+.gas-row-block{margin-top:0}.ui-data-group .pre-block{position:absolute;left:calc((1.25rem * -1) - 15px);display:flex;height:100%;top:0;align-items:top;padding-top:15px}.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{max-width:1.25rem;width:100%;display:flex;vertical-align:middle;position:relative;justify-content:center;align-items:center}.ui-data-group .pre-block .icon-block img,.ui-data-group .pre-block .img-block img{max-width:1.25rem;width:1.25rem}.ui-data-group .content-block{display:inline-block;max-width:100%;width:100%;position:relative}.ui-data-group .btn-style{padding:0;border:0;background-color:transparent;display:inline-block}.ui-data-group .icon-add{margin-bottom:15px}.ui-data-group .icon-del{position:absolute;right:0;bottom:38px}@media (min-width:768px){.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{height:30px}}@media (max-width:767px){.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{min-height:30px}.ui-data-group .pre-block{position:relative;left:0;top:0;margin-bottom:0;padding-top:0}}@media (min-width:1025px){.ui-data-group .pre-block .icon-block,.ui-data-group .pre-block .img-block{max-width:1.25rem}}"]
                }] }
    ];
    UiDataGroupComponent.ctorParameters = function () { return []; };
    UiDataGroupComponent.propDecorators = {
        isShowPreData: [{ type: Input }],
        imgIconSrc: [{ type: Input }],
        imgType: [{ type: Input }],
        iconType: [{ type: Input }],
        iconName: [{ type: Input }],
        groupName: [{ type: Input }]
    };
    return UiDataGroupComponent;
}());
export { UiDataGroupComponent };
if (false) {
    /** @type {?} */
    UiDataGroupComponent.prototype.isShowPreData;
    /** @type {?} */
    UiDataGroupComponent.prototype.imgIconSrc;
    /** @type {?} */
    UiDataGroupComponent.prototype.imgType;
    /** @type {?} */
    UiDataGroupComponent.prototype.iconType;
    /** @type {?} */
    UiDataGroupComponent.prototype.iconName;
    /** @type {?} */
    UiDataGroupComponent.prototype.groupName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZGF0YS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWRhdGEtZ3JvdXAvdWktZGF0YS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RztJQWVFO1FBUlMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBR2hCLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix5ZUFBNkM7b0JBRTdDLGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7Z0NBRUUsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBUVIsMkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWRZLG9CQUFvQjs7O0lBQy9CLDZDQUF3Qzs7SUFDeEMsMENBQWlDOztJQUNqQyx1Q0FBa0M7O0lBQ2xDLHdDQUFtQzs7SUFDbkMsd0NBQThCOztJQUM5Qix5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZGF0YS1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1kYXRhLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZGF0YS1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRGF0YUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNTaG93UHJlRGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpbWdJY29uU3JjOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaW1nVHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uVHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nPSAnJztcbiAgQElucHV0KCkgZ3JvdXBOYW1lOiBzdHJpbmcgPSAnJztcblxuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=