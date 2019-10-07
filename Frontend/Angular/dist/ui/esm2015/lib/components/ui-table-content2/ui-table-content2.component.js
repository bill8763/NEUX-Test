/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UiTableContentComponent } from '../ui-table-content/ui-table-content.component';
export class UiTableContent2Component extends UiTableContentComponent {
}
UiTableContent2Component.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-table-content2',
                template: "<div class=\"table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n    <div class=\"table-info-content\">\n      <app-ui-detection-scroll (scrollEventData)=\"conrtolMoreShow($event)\">\n        <ng-template *ngIf=\"windowWidth > 1023; then pc else moblie\"></ng-template>\n        <ng-template #pc>\n          <table class=\"table\">\n            <thead>\n              <tr class=\"head-tr\" >\n                <ng-container *ngFor=\"let item of headArray();index as i\">\n                  <th class=\"th  headClassName0\" #head [ngClass]=\"{'first':i==0,\n                                                                    'text-align-left' :item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right'}\">\n                    <div class=\"sort-content\" [ngClass]=\"{'sort':item.sort}\">\n                      <ng-container *ngIf=\"item.sort\">\n                        <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                        [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                      'down' : setEventIndex(item.eventIndex)==2}\">\n                        </div>\n                      </ng-container>\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </div>\n                  </th>\n                </ng-container>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let row of bodyArray();index as i\">\n                <tr class=\"body-tr\" [attr.body]=\"i\" (click)=\"rowClick(i)\">\n                  <ng-container *ngFor=\"let item of row.itemToArray();index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body  [ngClass]=\"{'first':j==0,\n                                                                    'text-align-left':item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right'}\">\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </ng-template>\n        <ng-template #moblie>\n          <table class=\"table\">\n            <thead>\n              <tr class=\"head-tr\" >\n                <ng-container *ngFor=\"let item of headArray().slice(0,1);index as i\">\n                  <th class=\"th  headClassName0\" #head [ngClass]=\"{'first':1}\">\n                    <div class=\"sort-content\" [ngClass]=\"{'sort':item.sort,\n                                                          'text-align-left':item.textAlign=='left',\n                                                          'text-align-right':item.textAlign=='right',\n                                                          'text-align-center':item.textAlign=='center'}\">\n                      <ng-container *ngIf=\"item.sort\">\n                        <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                        [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                      'down' : setEventIndex(item.eventIndex)==2}\">\n                        </div>\n                      </ng-container>\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </div>\n                  </th>\n                </ng-container>\n                <ng-container *ngFor=\"let item of bodyArray();index as i\">\n                  <th class=\"td headClassName0\" #head  [ngClass]=\"{'first':1,\n                                                                    'text-align-left':item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right',\n                                                                    'text-align-center':item.textAlign=='center'}\">\n                    <div *ngTemplateOutlet=\"item.itemToArray()[0].item\"></div>\n                  </th>\n                </ng-container>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let row of bodyArray()[0].itemToArray().slice(1);index as i\">\n                <tr class=\"body-tr\" [attr.body]=\"i\" (click)=\"rowClick(i)\" *ngIf=\"row != undefined\">\n                  <ng-container *ngFor=\"let item of headArray().slice(i+1,i+2);index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body>\n                      <div class=\"sort-content\" [ngClass]=\"{'sort':item.sort}\">\n                        <ng-container *ngIf=\"item. sort\">\n                          <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                          [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                        'down' : setEventIndex(item.eventIndex)==2}\">\n                          </div>\n                        </ng-container>\n                        <div *ngTemplateOutlet=\"item.item\"\n                        [ngClass]=\"{'text-align-left':item.textAlign=='left',\n                                    'text-align-right':item.textAlign=='right',\n                                    'text-align-center':item.textAlign=='center'}\"></div>\n                      </div>\n                    </td>\n                  </ng-container>\n                  <ng-container *ngFor=\"let item of bodyArray();index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body>\n                      <div *ngTemplateOutlet=\"item.itemToArray().slice(1)[i]&&item.itemToArray().slice(1)[i].item\" \n                      [ngClass]=\"{'text-align-left':item.textAlign=='left',\n                                  'text-align-right':item.textAlign=='right',\n                                  'text-align-center':item.textAlign=='center'}\"></div>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </ng-template>\n      </app-ui-detection-scroll>\n      \n    </div>\n    <div class=\"rightMore\" [ngClass]=\"{'rightMoreTrue':rightMore}\"></div>\n  </div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-content{position:relative}.table-content .table-info-content{width:100%;overflow:hidden}.table-content .table-info-content .body-tr:active .td{background-color:#f1f9fa}.table-content .table-info-content .td,.table-content .table-info-content .th{text-align:center}.table-content .table-info-content .td.first,.table-content .table-info-content .th.first{text-align:left}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{font-size:.75rem}@media screen and (min-width:1024px){.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:130px}}.table-content .table-info-content .td.text-align-left,.table-content .table-info-content .th.text-align-left{text-align:left}.table-content .table-info-content .td.text-align-right,.table-content .table-info-content .th.text-align-right{text-align:right}.table-content .rightMore{width:0;height:100%;position:absolute;top:0;right:0;transition:.3s;opacity:0;background-color:#fff;box-shadow:-5px 0 6px 0 rgba(0,0,0,.06);will-change:width,opacity}.table-content .rightMore.rightMoreTrue{width:30px;opacity:1}.table-content.fixed-table{padding-left:160px}.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{display:flex;align-items:center;width:160px;position:absolute;left:0;top:auto}.table-content ::ng-deep app-ui-detection-scroll .table{width:100%;border-collapse:collapse}.table-content ::ng-deep app-ui-detection-scroll .th{padding:10px 15px}.table-content ::ng-deep app-ui-detection-scroll .td{padding:15px}.table-content .sort-content{display:inline-block;white-space:nowrap;max-width:105px}.table-content .sort-content .sort-btn{display:inline-block;vertical-align:middle;width:24px;height:24px;background-size:24px 24px;background-repeat:no-repeat;background-position:center center}.table-content .sort-content ::ng-deep .table-item{display:inline-block;white-space:normal;vertical-align:middle}.table-content .sort-content.sort ::ng-deep .table-item{min-width:0;max-width:81px}@media screen and (max-width:1023px){.table-content.fixed-table{padding-left:160px}.table-content.fixed-table .table-first-fixed,.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{width:160px}.table-content .table-info-content .td.first,.table-content .table-info-content .th.first{text-align:center}.table-content .table-info-content .td:first-child ::ng-deep .table-item,.table-content .table-info-content .th:first-child ::ng-deep .table-item{width:65px;min-width:65px}}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY29udGVudDIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWJsZS1jb250ZW50Mi91aS10YWJsZS1jb250ZW50Mi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFPekYsTUFBTSwrQkFBZ0MsU0FBUSx1QkFBdUI7OztZQUxwRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsc3NNQUFpRDs7YUFFbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlUYWJsZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi91aS10YWJsZS1jb250ZW50L3VpLXRhYmxlLWNvbnRlbnQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXRhYmxlLWNvbnRlbnQyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYmxlLWNvbnRlbnQyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtY29udGVudDIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYmxlQ29udGVudDJDb21wb25lbnQgZXh0ZW5kcyBVaVRhYmxlQ29udGVudENvbXBvbmVudCB7fVxuIl19