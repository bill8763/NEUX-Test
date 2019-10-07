/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiFormRadioComponent } from '../ui-form-radio/ui-form-radio.component';
var UiFormRadioTagComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiFormRadioTagComponent, _super);
    function UiFormRadioTagComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiFormRadioTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-radio-tag',
                    template: " <div class=\"ui-tag-block\" >\n    <label [attr.for]=\"id\">\n      <input class=\"choose-item\" type=\"radio\" [name]=\"name\" [id]=\"id\" [value]=\"value\"  [checked]=\"checked\" [disabled]=\"disabled\"  (click)=\"_onInputChange($event)\" >\n      <div class=\"tag-block\" #tagBlock>\n        <div class=\"tag-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </label>\n</div>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ui-tag-block{display:inline-block;width:100%;min-width:52px}:host-context(.WARM) .choose-item:checked+.tag-block{background-color:#f86200}:host-context(.WARM) .tag-block{border:1px solid #f86200;color:#f86200}:host-context(.COLD) .choose-item:checked+.tag-block{background-color:#7fe4e0}:host-context(.COLD) .tag-block{border:1px solid #7fe4e0;color:#7fe4e0}:host-context(.HOT) .choose-item:checked+.tag-block{background-color:#dc3149}:host-context(.HOT) .tag-block{border:1px solid #dc3149;color:#dc3149}:host-context(.wd-lg) .tag-block{padding:5px 14px}@media screen and (min-width:1025px){:host-context(.wd-lg) .tag-block{padding:.5vw 1.4vw}}:host-context(.profile-tag) .tag-block{padding:1px 14px}@media screen and (min-width:1025px){:host-context(.profile-tag) .tag-block{padding:.1vw 1.4vw}}:host-context(.wd-max) .tag-block{padding:5px 14px;height:32px;box-sizing:border-box}@media screen and (min-width:1025px){:host-context(.wd-max) .tag-block{height:3.2vw;padding:.5vw 1.4vw}}.tag-block{text-align:center;color:#fff;border-radius:3px;display:flex;align-items:center;justify-content:center;min-width:40px;border:1px}.tag-block .tag-content{display:flex;justify-content:center;align-items:center;font-weight:400;font-size:.75rem}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-flex}.ui-tag-block .choose-item{display:none}.ui-tag-block .choose-item:checked+.tag-block{color:#fff}"]
                }] }
    ];
    return UiFormRadioTagComponent;
}(UiFormRadioComponent));
export { UiFormRadioTagComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1yYWRpby10YWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1mb3JtLXJhZGlvLXRhZy91aS1mb3JtLXJhZGlvLXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE4Qyx1QkFBdUIsRUFBaUQsTUFBTSxlQUFlLENBQUM7QUFDOUosT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFJaEY7SUFNNkMsbURBQW9CO0lBTmpFOztJQW1CQSxDQUFDOztnQkFuQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDRhQUFpRDtvQkFFakQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7SUFjRCw4QkFBQztDQUFBLEFBbkJELENBTTZDLG9CQUFvQixHQWFoRTtTQWJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9wdGlvbmFsLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQWZ0ZXJWaWV3SW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVaUZvcm1SYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL3VpLWZvcm0tcmFkaW8vdWktZm9ybS1yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtUmFkaW9Hcm91cCB9IGZyb20gJy4uL3VpLWZvcm0tcmFkaW8tZ3JvdXAvdWktZm9ybS1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgX2tleVZhbHVlRGlmZmVyc0ZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9hcHBsaWNhdGlvbl9tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1yYWRpby10YWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1yYWRpby10YWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLXJhZGlvLXRhZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybVJhZGlvVGFnQ29tcG9uZW50IGV4dGVuZHMgVWlGb3JtUmFkaW9Db21wb25lbnR7XG4gIFxuICBcblxuICBcblxuICBcbiAgXG5cblxuXG5cblxufVxuIl19