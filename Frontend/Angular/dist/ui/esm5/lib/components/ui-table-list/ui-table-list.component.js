/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, HostListener, Input, ChangeDetectionStrategy } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { TABLELISTSTYLETYPE } from '../../model';
var UiTableListComponent = /** @class */ (function () {
    function UiTableListComponent() {
        this.styleType = TABLELISTSTYLETYPE.STYLE_1;
    }
    /**
     * @return {?}
     */
    UiTableListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.windowWidth = window.innerWidth;
    };
    /**
     * @return {?}
     */
    UiTableListComponent.prototype.infoListArray = /**
     * @return {?}
     */
    function () {
        return this.items.toArray();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiTableListComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    /**
     * @return {?}
     */
    UiTableListComponent.prototype.controlStyle = /**
     * @return {?}
     */
    function () {
        if (this.styleType == TABLELISTSTYLETYPE.STYLE_1) {
            return '';
        }
        if (this.styleType == TABLELISTSTYLETYPE.STYLE_2) {
            return "style-2";
        }
    };
    UiTableListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-list',
                    template: "<div class=\"table-list {{controlStyle()}}\" >\n  <ng-template *ngIf=\"windowWidth > 1023; then tableContent else listContent\"></ng-template>\n  <ng-template #tableContent>\n    <div class=\"table-content\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <ng-container *ngFor=\"let item of infoListArray();index as i\">\n              <th class=\"th\">\n                <div class=\"list-item {{item.itemMinSize}}\">{{item.titleText}}</div>\n              </th>\n            </ng-container>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <ng-container *ngFor=\"let item of infoListArray();index as i\">\n              <td class=\"td\">\n                <div class=\"list-item {{item.itemMinSize}}\" >\n                  <div *ngTemplateOutlet=\"item.content\"></div>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </ng-template> \n  <ng-template #listContent>\n    <div class=\"list-content\">\n      <ul class=\"list-ul\">\n        <ng-container *ngFor=\"let item of infoListArray();index as i\">\n          <li class=\"list-li\">\n            <div class=\"list-title\">\n              {{item.titleText}}\n            </div>\n            <div class=\"list-content\">\n              <div *ngTemplateOutlet=\"item.content\"></div>\n            </div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </ng-template>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-list .table-content .table{border-collapse:collapse}.table-list .table-content .td,.table-list .table-content .th{text-align:center;vertical-align:middle;padding:0 15px;height:30px}.table-list .table-content .list-item{text-align:center;color:#414141}.table-list .table-content .list-item.la{width:130px}.table-list .table-content .list-item.md{width:105px}.table-list .table-content .list-item.sm{width:50px}.table-list .table-content .th .list-item{font-size:.875rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:1.2px}.table-list .table-content .td .list-item{font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.2px}.table-list .list-content{width:100%}.table-list .list-content .list-ul{width:100%;padding:0;margin:0}.table-list .list-content .list-li{padding:0;margin:0;font-size:0;list-style-type:none}.table-list .list-content .list-li .list-content,.table-list .list-content .list-li .list-title{display:inline-block;letter-spacing:.2px;color:#414141;vertical-align:middle;word-break:break-word}.table-list .list-content .list-li .list-title{width:calc(100% - 105px);font-size:.875rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;text-align:left}.table-list .list-content .list-li .list-content{width:105px;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;text-align:right}.table-list .list-content .list-li+.list-li{margin-top:10px}.table-list.style-2 .table-content .table{border-collapse:collapse}.table-list.style-2 .table-content .td,.table-list.style-2 .table-content .th{text-align:center;vertical-align:middle;padding:0 17px;height:28px}.table-list.style-2 .table-content .list-item{word-break:break-all;text-align:center;color:#414141}.table-list.style-2 .table-content .list-item.md{width:130px}.table-list.style-2 .table-content .th .list-item{font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.75em;letter-spacing:.2px}.table-list.style-2 .table-content .td .list-item{font-size:1.25rem;font-style:normal;font-stretch:normal;line-height:normal;font-weight:700;letter-spacing:.2px;color:#007ab3}.table-list.style-2 .list-content{width:100%}.table-list.style-2 .list-content .list-ul{width:100%;padding:0;margin:0}.table-list.style-2 .list-content .list-li{display:flex;padding:0;margin:0;font-size:0;list-style-type:none;text-align:left}.table-list.style-2 .list-content .list-li .list-content,.table-list.style-2 .list-content .list-li .list-title{display:inline-block;letter-spacing:.2px;color:#414141;vertical-align:top;word-break:break-word;text-align:left}.table-list.style-2 .list-content .list-li .list-title{width:195px;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.75em}.table-list.style-2 .list-content .list-li .list-content{width:130px;min-width:130px;font-size:1.25rem;font-style:normal;font-stretch:normal;line-height:normal;font-weight:700;color:#007ab3}.table-list.style-2 .list-content .list-li+.list-li{margin-top:15px}"]
                }] }
    ];
    UiTableListComponent.ctorParameters = function () { return []; };
    UiTableListComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [ListItemComponent,] }],
        styleType: [{ type: Input }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return UiTableListComponent;
}());
export { UiTableListComponent };
if (false) {
    /** @type {?} */
    UiTableListComponent.prototype.items;
    /** @type {?} */
    UiTableListComponent.prototype.styleType;
    /** @type {?} */
    UiTableListComponent.prototype.windowWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWxpc3QvdWktdGFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBZSxZQUFZLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRDtJQVVFO1FBRlMsY0FBUyxHQUFzQixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7SUFFbkQsQ0FBQzs7OztJQUNqQix1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHVDQUFROzs7O0lBRFIsVUFDUyxLQUFLO1FBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsMkNBQVk7OztJQUFaO1FBQ0UsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBQztZQUM5QyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBQztZQUM5QyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMCtDQUE2QztvQkFFN0MsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7Ozt3QkFFRSxlQUFlLFNBQUMsaUJBQWlCOzRCQUNqQyxLQUFLOzJCQVVMLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBYTNDLDJCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F6Qlksb0JBQW9COzs7SUFDL0IscUNBQXFFOztJQUNyRSx5Q0FBbUU7O0lBQ25FLDJDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVEFCTEVMSVNUU1RZTEVUWVBFIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRhYmxlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFibGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRhYmxlLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYmxlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTGlzdEl0ZW1Db21wb25lbnQpIGl0ZW1zOlF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PlxuICBASW5wdXQoKSBzdHlsZVR5cGU6VEFCTEVMSVNUU1RZTEVUWVBFID0gVEFCTEVMSVNUU1RZTEVUWVBFLlNUWUxFXzE7XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBcbiAgaW5mb0xpc3RBcnJheSgpe1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gIH1cbiAgY29udHJvbFN0eWxlKCl7XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVMSVNUU1RZTEVUWVBFLlNUWUxFXzEpe1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZih0aGlzLnN0eWxlVHlwZSA9PSBUQUJMRUxJU1RTVFlMRVRZUEUuU1RZTEVfMil7XG4gICAgICByZXR1cm4gXCJzdHlsZS0yXCI7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==