/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, HostListener, Input, ChangeDetectionStrategy } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { TABLELISTSTYLETYPE } from '../../model';
export class UiTableListComponent {
    constructor() {
        this.styleType = TABLELISTSTYLETYPE.STYLE_1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.windowWidth = window.innerWidth;
    }
    /**
     * @return {?}
     */
    infoListArray() {
        return this.items.toArray();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
    }
    /**
     * @return {?}
     */
    controlStyle() {
        if (this.styleType == TABLELISTSTYLETYPE.STYLE_1) {
            return '';
        }
        if (this.styleType == TABLELISTSTYLETYPE.STYLE_2) {
            return "style-2";
        }
    }
}
UiTableListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-table-list',
                template: "<div class=\"table-list {{controlStyle()}}\" >\n  <ng-template *ngIf=\"windowWidth > 1023; then tableContent else listContent\"></ng-template>\n  <ng-template #tableContent>\n    <div class=\"table-content\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <ng-container *ngFor=\"let item of infoListArray();index as i\">\n              <th class=\"th\">\n                <div class=\"list-item {{item.itemMinSize}}\">{{item.titleText}}</div>\n              </th>\n            </ng-container>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <ng-container *ngFor=\"let item of infoListArray();index as i\">\n              <td class=\"td\">\n                <div class=\"list-item {{item.itemMinSize}}\" >\n                  <div *ngTemplateOutlet=\"item.content\"></div>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </ng-template> \n  <ng-template #listContent>\n    <div class=\"list-content\">\n      <ul class=\"list-ul\">\n        <ng-container *ngFor=\"let item of infoListArray();index as i\">\n          <li class=\"list-li\">\n            <div class=\"list-title\">\n              {{item.titleText}}\n            </div>\n            <div class=\"list-content\">\n              <div *ngTemplateOutlet=\"item.content\"></div>\n            </div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-list .table-content .table{border-collapse:collapse}.table-list .table-content .td,.table-list .table-content .th{text-align:center;vertical-align:middle;padding:0 15px;height:30px}.table-list .table-content .list-item{text-align:center;color:#414141}.table-list .table-content .list-item.la{width:130px}.table-list .table-content .list-item.md{width:105px}.table-list .table-content .list-item.sm{width:50px}.table-list .table-content .th .list-item{font-size:.875rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:1.2px}.table-list .table-content .td .list-item{font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.2px}.table-list .list-content{width:100%}.table-list .list-content .list-ul{width:100%;padding:0;margin:0}.table-list .list-content .list-li{padding:0;margin:0;font-size:0;list-style-type:none}.table-list .list-content .list-li .list-content,.table-list .list-content .list-li .list-title{display:inline-block;letter-spacing:.2px;color:#414141;vertical-align:middle;word-break:break-word}.table-list .list-content .list-li .list-title{width:calc(100% - 105px);font-size:.875rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;text-align:left}.table-list .list-content .list-li .list-content{width:105px;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;text-align:right}.table-list .list-content .list-li+.list-li{margin-top:10px}.table-list.style-2 .table-content .table{border-collapse:collapse}.table-list.style-2 .table-content .td,.table-list.style-2 .table-content .th{text-align:center;vertical-align:middle;padding:0 17px;height:28px}.table-list.style-2 .table-content .list-item{word-break:break-all;text-align:center;color:#414141}.table-list.style-2 .table-content .list-item.md{width:130px}.table-list.style-2 .table-content .th .list-item{font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.75em;letter-spacing:.2px}.table-list.style-2 .table-content .td .list-item{font-size:1.25rem;font-style:normal;font-stretch:normal;line-height:normal;font-weight:700;letter-spacing:.2px;color:#007ab3}.table-list.style-2 .list-content{width:100%}.table-list.style-2 .list-content .list-ul{width:100%;padding:0;margin:0}.table-list.style-2 .list-content .list-li{display:flex;padding:0;margin:0;font-size:0;list-style-type:none;text-align:left}.table-list.style-2 .list-content .list-li .list-content,.table-list.style-2 .list-content .list-li .list-title{display:inline-block;letter-spacing:.2px;color:#414141;vertical-align:top;word-break:break-word;text-align:left}.table-list.style-2 .list-content .list-li .list-title{width:195px;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.75em}.table-list.style-2 .list-content .list-li .list-content{width:130px;min-width:130px;font-size:1.25rem;font-style:normal;font-stretch:normal;line-height:normal;font-weight:700;color:#007ab3}.table-list.style-2 .list-content .list-li+.list-li{margin-top:15px}"]
            }] }
];
UiTableListComponent.ctorParameters = () => [];
UiTableListComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [ListItemComponent,] }],
    styleType: [{ type: Input }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UiTableListComponent.prototype.items;
    /** @type {?} */
    UiTableListComponent.prototype.styleType;
    /** @type {?} */
    UiTableListComponent.prototype.windowWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWxpc3QvdWktdGFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBZSxZQUFZLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9qRCxNQUFNO0lBSUo7UUFGUyxjQUFTLEdBQXNCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztJQUVuRCxDQUFDOzs7O0lBQ2pCLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNELFlBQVk7UUFDVixJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFDO1lBQzlDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFDO1lBQzlDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwwK0NBQTZDO2dCQUU3QyxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7Ozs7b0JBRUUsZUFBZSxTQUFDLGlCQUFpQjt3QkFDakMsS0FBSzt1QkFVTCxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBWHpDLHFDQUFxRTs7SUFDckUseUNBQW1FOztJQUNuRSwyQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFRBQkxFTElTVFNUWUxFVFlQRSB9IGZyb20gJy4uLy4uL21vZGVsJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWJsZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJsZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKExpc3RJdGVtQ29tcG9uZW50KSBpdGVtczpRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj5cbiAgQElucHV0KCkgc3R5bGVUeXBlOlRBQkxFTElTVFNUWUxFVFlQRSA9IFRBQkxFTElTVFNUWUxFVFlQRS5TVFlMRV8xO1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cbiAgXG4gIGluZm9MaXN0QXJyYXkoKXtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICB9XG4gIGNvbnRyb2xTdHlsZSgpe1xuICAgIGlmKHRoaXMuc3R5bGVUeXBlID09IFRBQkxFTElTVFNUWUxFVFlQRS5TVFlMRV8xKXtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVMSVNUU1RZTEVUWVBFLlNUWUxFXzIpe1xuICAgICAgcmV0dXJuIFwic3R5bGUtMlwiO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=