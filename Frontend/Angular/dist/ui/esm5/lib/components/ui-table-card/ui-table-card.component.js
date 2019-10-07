/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiTableContentComponent } from '../ui-table-content/ui-table-content.component';
var UiTableCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiTableCardComponent, _super);
    function UiTableCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiTableCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-card',
                    template: "<div class=\"table-content\" (click)=\"ModifyDOMElement()\">\n  <div class=\"table-first-fixed\">\n      <table class=\"table\">\n          <thead>\n            <tr class=\"head-tr headClassName0\" #head>\n              <th class=\"th\" [ngClass]=\"{'text-align-left':headArray()[0].item.textAlign=='left',\n                                         'text-align-right':headArray()[0].item.textAlign=='right'}\">\n                <div *ngTemplateOutlet=\"headArray()[0].item\"></div>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let row of bodyArray();index as i\">\n              <tr *ngIf=\"row != undefined\" class=\"body-tr {{bodyClassName+i}}\" #body [ngClass]=\"{'text-align-left':row.itemToArray()[0].item.textAlign=='left',\n                                                                        'text-align-right':row.itemToArray()[0].item.textAlign=='right'}\">\n                <td class=\"td\"><div *ngTemplateOutlet=\"row.itemToArray()[0].item\"></div></td>\n              </tr>\n            </ng-container>\n          </tbody>\n      </table>\n  </div>\n  <div class=\"table-info-content\">\n    <app-ui-detection-scroll>\n      <ul class=\"table-card-content\" *ngIf=\"bodyArray().length != 0 && bodyArray()[0] != undefined\">\n          <ng-container *ngFor=\"let col of bodyArray()[0].itemToArray().slice(1);index as i\">\n            <li class=\"table-card\">\n              <table class=\"table\">\n                <thead>\n                  <tr class=\"head-tr headClassName0\" #head>\n                    <th class=\"th\" [ngClass]=\"{'text-align-left':headArray().slice(1)[i].item.textAlign=='left',\n                                               'text-align-right':headArray().slice(1)[i].item.textAlign=='right',\n                                               'text-align-center':headArray().slice(1)[i].item.textAlign=='center'}\">\n                      <div *ngTemplateOutlet=\"headArray().slice(1)[i].item\"></div>\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <ng-container *ngFor=\"let row of bodyArray();index as j\">\n                    <tr class=\"body-tr {{bodyClassName+j}}\" #body>\n                      <td class=\"td\" [ngClass]=\"{'text-align-left':row.itemToArray()[i+1].item.textAlign=='left',\n                                                 'text-align-right':row.itemToArray()[i+1].item.textAlign=='right',\n                                                 'text-align-center':row.itemToArray()[i+1].item.textAlign=='center'}\">\n                        <div *ngTemplateOutlet=\"row.itemToArray()[i+1].item\"></div>\n                      </td>\n                    </tr>\n                  </ng-container>\n                </tbody>\n              </table>\n            </li>\n          </ng-container>\n      </ul>\n    </app-ui-detection-scroll>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-content{position:relative;padding-left:180px}.table-content ::ng-deep .table-item{font-size:.875rem}.table-content .td,.table-content .td.text-align-center,.table-content .th,.table-content .th.text-align-center{text-align:center}.table-content .td.text-align-left,.table-content .th.text-align-left{text-align:left}.table-content .td.text-align-right,.table-content .th.text-align-right{text-align:right}.table-content .table-first-fixed{width:190px;position:absolute;left:0;top:0;padding-bottom:15px;padding-top:10px}.table-content .table-first-fixed ::ng-deep .table-item{font-weight:400}.table-content .table-first-fixed .td.text-align-center,.table-content .table-first-fixed .th.text-align-center{text-align:center}.table-content .table-first-fixed .td.text-align-left,.table-content .table-first-fixed .th.text-align-left{text-align:left}.table-content .table-first-fixed .td.text-align-right,.table-content .table-first-fixed .th.text-align-right{text-align:right}.table-content .table-info-content{width:100%;overflow:hidden}.table-content .table-info-content .rightMore:not(.rightMoreTrue){width:0;box-shadow:none;background-color:transparent}.table-content .table-info-content .rightMore{width:30px;height:100%;position:absolute;top:0;right:0;background-color:#fff;transition:.3s;box-shadow:-5px 0 6px 0 rgba(0,0,0,.06)}.table-content .table-info-content .table-card-content{display:flex;font-size:0;padding:10px}.table-content .table-info-content .table-card-content .table-card{display:inline-block;flex:0 0 calc((100% - 30px)/ 4);vertical-align:top;background-color:#fff;box-shadow:0 0 16px 0 rgba(0,0,0,.08);padding-bottom:5px}.table-content .table-info-content .table-card-content .table-card+.table-card{margin-left:10px}.table-content .table-info-content ::ng-deep .th{color:#007ab3}.table-content .table-first-fixed .table,.table-content ::ng-deep app-ui-detection-scroll .table{width:100%;border-collapse:collapse}.table-content .table-first-fixed .td,.table-content .table-first-fixed .th,.table-content ::ng-deep app-ui-detection-scroll .td,.table-content ::ng-deep app-ui-detection-scroll .th{max-width:135px}.table-content .table-first-fixed .th,.table-content ::ng-deep app-ui-detection-scroll .th{padding:15px 15px 5px}.table-content .table-first-fixed .th ::ng-deep .table-item,.table-content ::ng-deep app-ui-detection-scroll .th ::ng-deep .table-item{display:inline-block}.table-content .table-first-fixed .td,.table-content ::ng-deep app-ui-detection-scroll .td{padding:10px 15px}.table-content .table-first-fixed .td,.table-content .table-first-fixed .th{text-align:left;padding-left:0}.table-content .table-first-fixed .th{padding-top:0;vertical-align:top}@media screen and (max-width:767px){.table-content{padding-left:150px}.table-content .table-first-fixed{width:160px}}"]
                }] }
    ];
    return UiTableCardComponent;
}(UiTableContentComponent));
export { UiTableCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWNhcmQvdWktdGFibGUtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXpGO0lBTTBDLGdEQUF1QjtJQU5qRTs7SUFPQSxDQUFDOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMjVGQUE2QztvQkFFN0MsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7SUFFRCwyQkFBQztDQUFBLEFBUEQsQ0FNMEMsdUJBQXVCLEdBQ2hFO1NBRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVaVRhYmxlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3VpLXRhYmxlLWNvbnRlbnQvdWktdGFibGUtY29udGVudC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFibGUtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFibGVDYXJkQ29tcG9uZW50IGV4dGVuZHMgVWlUYWJsZUNvbnRlbnRDb21wb25lbnR7XG59XG4iXX0=