/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TABLETIELESTYLETYPE } from '../../model';
export class UiTableEditContentComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.titleText = '';
        this.styleType = TABLETIELESTYLETYPE.STYLE_1;
        this.event = true;
        this._isEdit = true;
        this.styleTableNoEdit = '';
    }
    /**
     * @param {?} isEdit
     * @return {?}
     */
    set isEdit(isEdit) {
        this._isEdit = isEdit;
        this._updateStyleTableNoEdit();
    }
    /**
     * @return {?}
     */
    get isEdit() {
        return this._isEdit;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateStyleTableNoEdit();
    }
    /**
     * @return {?}
     */
    btnOnClick() {
        this.onClick.emit();
    }
    /**
     * @private
     * @return {?}
     */
    _updateStyleTableNoEdit() {
        this.styleTableNoEdit = this.isEdit ? '' : 'style-table-no-edit';
    }
}
UiTableEditContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-table-edit-content',
                template: "<div class=\"table-edit\" [ngClass]=\"styleTableNoEdit\">\n  <app-ui-table-title [titleText]=\"titleText\" (onClick)=\"btnOnClick()\" [styleType]=\"styleType\" [event]=\"event\">\n    <ng-content select=\"[header]\"></ng-content>\n  </app-ui-table-title>\n  <div class=\"collapse-content\">\n    <ng-content select=\"[body]\"></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-edit ::ng-deep app-ui-table-title{display:block;z-index:1}.table-edit ::ng-deep .table-title{border-bottom:1px solid #ececec}.table-edit ::ng-deep .event-btn{background-color:#fff;background-repeat:no-repeat;background-position:center center;background-size:24px 24px;background-image:url(assets/img/icon-list-pen-full.svg);box-shadow:0 0 7px 0 rgba(0,0,0,.23)}.table-edit.style-table-no-edit ::ng-deep .event-btn{display:none}.table-edit.style-table-no-edit ::ng-deep .style-5.table-title .title-content{max-width:100%;width:100%}"]
            }] }
];
UiTableEditContentComponent.ctorParameters = () => [];
UiTableEditContentComponent.propDecorators = {
    onClick: [{ type: Output }],
    titleText: [{ type: Input }],
    styleType: [{ type: Input }],
    event: [{ type: Input }],
    isEdit: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtZWRpdC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktdGFibGUtZWRpdC1jb250ZW50L3VpLXRhYmxlLWVkaXQtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFBO0FBT2pELE1BQU07SUFFSjtRQUNVLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQXVCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztRQUM1RCxVQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFVdkIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO0lBaEJkLENBQUM7Ozs7O0lBT2pCLElBQ0ksTUFBTSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsRSxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLG1YQUFxRDtnQkFFckQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O3NCQUlFLE1BQU07d0JBQ04sS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBR0wsS0FBSzs7OztJQU5OLDhDQUF1Qzs7SUFDdkMsZ0RBQXdCOztJQUN4QixnREFBcUU7O0lBQ3JFLDRDQUE4Qjs7Ozs7SUFFOUIsOENBQXVCOztJQVV2Qix1REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVEFCTEVUSUVMRVNUWUxFVFlQRSB9IGZyb20gJy4uLy4uL21vZGVsJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRhYmxlLWVkaXQtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS1lZGl0LWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS1lZGl0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYmxlRWRpdENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0aXRsZVRleHQgPSAnJztcbiAgQElucHV0KCkgc3R5bGVUeXBlOlRBQkxFVElFTEVTVFlMRVRZUEUgPSBUQUJMRVRJRUxFU1RZTEVUWVBFLlNUWUxFXzE7XG4gIEBJbnB1dCgpIGV2ZW50OmJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgX2lzRWRpdCA9IHRydWU7XG4gIEBJbnB1dCgpIFxuICBzZXQgaXNFZGl0KGlzRWRpdDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRWRpdCA9IGlzRWRpdDtcbiAgICB0aGlzLl91cGRhdGVTdHlsZVRhYmxlTm9FZGl0KCk7XG4gIH1cbiAgZ2V0IGlzRWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNFZGl0O1xuICB9XG5cbiAgc3R5bGVUYWJsZU5vRWRpdDogc3RyaW5nID0gJyc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3R5bGVUYWJsZU5vRWRpdCgpO1xuICB9XG5cbiAgYnRuT25DbGljaygpe1xuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZVRhYmxlTm9FZGl0KCkge1xuICAgIHRoaXMuc3R5bGVUYWJsZU5vRWRpdCA9IHRoaXMuaXNFZGl0ID8gJyc6ICdzdHlsZS10YWJsZS1uby1lZGl0JztcbiAgfVxuXG5cblxufVxuIl19