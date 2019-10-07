/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TABLETIELESTYLETYPE } from '../../model';
var UiTableEditContentComponent = /** @class */ (function () {
    function UiTableEditContentComponent() {
        this.onClick = new EventEmitter();
        this.titleText = '';
        this.styleType = TABLETIELESTYLETYPE.STYLE_1;
        this.event = true;
        this._isEdit = true;
        this.styleTableNoEdit = '';
    }
    Object.defineProperty(UiTableEditContentComponent.prototype, "isEdit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isEdit;
        },
        set: /**
         * @param {?} isEdit
         * @return {?}
         */
        function (isEdit) {
            this._isEdit = isEdit;
            this._updateStyleTableNoEdit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiTableEditContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._updateStyleTableNoEdit();
    };
    /**
     * @return {?}
     */
    UiTableEditContentComponent.prototype.btnOnClick = /**
     * @return {?}
     */
    function () {
        this.onClick.emit();
    };
    /**
     * @private
     * @return {?}
     */
    UiTableEditContentComponent.prototype._updateStyleTableNoEdit = /**
     * @private
     * @return {?}
     */
    function () {
        this.styleTableNoEdit = this.isEdit ? '' : 'style-table-no-edit';
    };
    UiTableEditContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-edit-content',
                    template: "<div class=\"table-edit\" [ngClass]=\"styleTableNoEdit\">\n  <app-ui-table-title [titleText]=\"titleText\" (onClick)=\"btnOnClick()\" [styleType]=\"styleType\" [event]=\"event\">\n    <ng-content select=\"[header]\"></ng-content>\n  </app-ui-table-title>\n  <div class=\"collapse-content\">\n    <ng-content select=\"[body]\"></ng-content>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-edit ::ng-deep app-ui-table-title{display:block;z-index:1}.table-edit ::ng-deep .table-title{border-bottom:1px solid #ececec}.table-edit ::ng-deep .event-btn{background-color:#fff;background-repeat:no-repeat;background-position:center center;background-size:24px 24px;background-image:url(assets/img/icon-list-pen-full.svg);box-shadow:0 0 7px 0 rgba(0,0,0,.23)}.table-edit.style-table-no-edit ::ng-deep .event-btn{display:none}.table-edit.style-table-no-edit ::ng-deep .style-5.table-title .title-content{max-width:100%;width:100%}"]
                }] }
    ];
    UiTableEditContentComponent.ctorParameters = function () { return []; };
    UiTableEditContentComponent.propDecorators = {
        onClick: [{ type: Output }],
        titleText: [{ type: Input }],
        styleType: [{ type: Input }],
        event: [{ type: Input }],
        isEdit: [{ type: Input }]
    };
    return UiTableEditContentComponent;
}());
export { UiTableEditContentComponent };
if (false) {
    /** @type {?} */
    UiTableEditContentComponent.prototype.onClick;
    /** @type {?} */
    UiTableEditContentComponent.prototype.titleText;
    /** @type {?} */
    UiTableEditContentComponent.prototype.styleType;
    /** @type {?} */
    UiTableEditContentComponent.prototype.event;
    /**
     * @type {?}
     * @private
     */
    UiTableEditContentComponent.prototype._isEdit;
    /** @type {?} */
    UiTableEditContentComponent.prototype.styleTableNoEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtZWRpdC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktdGFibGUtZWRpdC1jb250ZW50L3VpLXRhYmxlLWVkaXQtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFBO0FBQ2pEO0lBUUU7UUFDVSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUF1QixtQkFBbUIsQ0FBQyxPQUFPLENBQUM7UUFDNUQsVUFBSyxHQUFXLElBQUksQ0FBQztRQUV0QixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBVXZCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztJQWhCZCxDQUFDO0lBT2pCLHNCQUNJLCtDQUFNOzs7O1FBSVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFQRCxVQUNXLE1BQWU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7Ozs7SUFPRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsZ0RBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLDZEQUF1Qjs7OztJQUEvQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0lBQ2xFLENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsbVhBQXFEO29CQUVyRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7OzBCQUlFLE1BQU07NEJBQ04sS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBR0wsS0FBSzs7SUF5QlIsa0NBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQWxDWSwyQkFBMkI7OztJQUd0Qyw4Q0FBdUM7O0lBQ3ZDLGdEQUF3Qjs7SUFDeEIsZ0RBQXFFOztJQUNyRSw0Q0FBOEI7Ozs7O0lBRTlCLDhDQUF1Qjs7SUFVdkIsdURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRBQkxFVElFTEVTVFlMRVRZUEUgfSBmcm9tICcuLi8uLi9tb2RlbCdcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWJsZS1lZGl0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFibGUtZWRpdC1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtZWRpdC1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJsZUVkaXRDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdGl0bGVUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHN0eWxlVHlwZTpUQUJMRVRJRUxFU1RZTEVUWVBFID0gVEFCTEVUSUVMRVNUWUxFVFlQRS5TVFlMRV8xO1xuICBASW5wdXQoKSBldmVudDpib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIF9pc0VkaXQgPSB0cnVlO1xuICBASW5wdXQoKSBcbiAgc2V0IGlzRWRpdChpc0VkaXQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0VkaXQgPSBpc0VkaXQ7XG4gICAgdGhpcy5fdXBkYXRlU3R5bGVUYWJsZU5vRWRpdCgpO1xuICB9XG4gIGdldCBpc0VkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRWRpdDtcbiAgfVxuXG4gIHN0eWxlVGFibGVOb0VkaXQ6IHN0cmluZyA9ICcnO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVN0eWxlVGFibGVOb0VkaXQoKTtcbiAgfVxuXG4gIGJ0bk9uQ2xpY2soKXtcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3R5bGVUYWJsZU5vRWRpdCgpIHtcbiAgICB0aGlzLnN0eWxlVGFibGVOb0VkaXQgPSB0aGlzLmlzRWRpdCA/ICcnOiAnc3R5bGUtdGFibGUtbm8tZWRpdCc7XG4gIH1cblxuXG5cbn1cbiJdfQ==