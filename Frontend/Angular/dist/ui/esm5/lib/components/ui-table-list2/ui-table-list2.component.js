/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiTableListComponent } from '../ui-table-list/ui-table-list.component';
var UiTableList2Component = /** @class */ (function (_super) {
    tslib_1.__extends(UiTableList2Component, _super);
    function UiTableList2Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiTableList2Component.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-list2',
                    template: "<div class=\"table-list\" >\n    <div class=\"list-content\">\n      <ul class=\"list-ul\">\n        <ng-container *ngFor=\"let item of infoListArray();index as i\">\n          <li class=\"list-li\">\n            <div class=\"list-title\">{{item.titleText}}</div>\n            <div class=\"list-content {{'heightLight'+'-'+item.heightLight}}\" [id]='item.id'><div *ngTemplateOutlet=\"item.content\"></div></div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-list .list-content{width:100%}.table-list .list-content .list-ul{width:100%;padding:0;margin:0;text-align:right}.table-list .list-content .list-li{display:inline-block;padding:0;margin:0;font-size:0;list-style-type:none}.table-list .list-content .list-li .list-content,.table-list .list-content .list-li .list-title{display:inline-block;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;color:#414141;vertical-align:middle;word-break:break-all;padding:10px 15px}.table-list .list-content .list-li .list-content:before,.table-list .list-content .list-li .list-title:before{display:inline-block;content:'';height:30px;width:0;vertical-align:middle}.table-list .list-content .list-li .list-title{width:135px;text-align:right;color:#007ab3}.table-list .list-content .list-li .list-content{width:135px;letter-spacing:.2px;text-align:center}.table-list .list-content .list-li .list-content.heightLight-style2{color:#dc3149}.table-list .list-content .list-li .list-content.heightLight-style1{color:#007ab3}@media screen and (max-width:1023px){.table-list .list-content{width:100%}.table-list .list-content .list-ul{text-align:left}.table-list .list-content .list-li .list-content,.table-list .list-content .list-li .list-title{padding:0}.table-list .list-content .list-li .list-title{width:150px;text-align:left}.table-list .list-content .list-li .list-content{width:105px;text-align:center}}"]
                }] }
    ];
    return UiTableList2Component;
}(UiTableListComponent));
export { UiTableList2Component };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtbGlzdDIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWJsZS1saXN0Mi91aS10YWJsZS1saXN0Mi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRjtJQU0yQyxpREFBb0I7SUFOL0Q7O0lBT0EsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG9mQUE4QztvQkFFOUMsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7SUFFRCw0QkFBQztDQUFBLEFBUEQsQ0FNMkMsb0JBQW9CLEdBQzlEO1NBRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi91aS10YWJsZS1saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vdWktdGFibGUtbGlzdC91aS10YWJsZS1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWJsZS1saXN0MicsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS1saXN0Mi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRhYmxlLWxpc3QyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJsZUxpc3QyQ29tcG9uZW50IGV4dGVuZHMgVWlUYWJsZUxpc3RDb21wb25lbnQge1xufVxuIl19