/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiTextTypeComponent {
    constructor() {
        this.colorCode = 'transparent';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiTextTypeComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-text-type',
                template: "<div class=\"ui-text-type-container\" [style.background-color]=\"colorCode\" [ngClass]=\"{'hasBgColor' : (colorCode != 'transparent')}\">\n  <p *ngIf=\"title\" class=\"ui-text-type-title\">{{ title }}</p>\n  <ng-content></ng-content>\n</div>\n<!-- end ui-text-type-container -->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-text-type-container{padding:20px 0}.ui-text-type-container .ui-text-type-title{margin:0;font-size:1rem;font-weight:700;line-height:1.75;letter-spacing:.2px;color:#414141}.ui-text-type-container .ui-text-type-title:not(:last-child){padding-bottom:20px}.ui-text-type-container ::ng-deep app-ui-text-type-item{display:block;margin-bottom:20px;padding:0 20px}.ui-text-type-container ::ng-deep app-ui-text-type-item:last-child{margin-bottom:0}.ui-text-type-container ::ng-deep app-ui-text-type-item+app-ui-text-type-item{padding-top:20px;border-top:1px solid #ececec}"]
            }] }
];
UiTextTypeComponent.ctorParameters = () => [];
UiTextTypeComponent.propDecorators = {
    title: [{ type: Input }],
    colorCode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiTextTypeComponent.prototype.title;
    /** @type {?} */
    UiTextTypeComponent.prototype.colorCode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGV4dC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktdGV4dC10eXBlL3VpLXRleHQtdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07SUFLSjtRQUZTLGNBQVMsR0FBVyxhQUFhLENBQUM7SUFFM0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG9TQUE0QztnQkFFNUMsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O29CQUdFLEtBQUs7d0JBQ0wsS0FBSzs7OztJQUROLG9DQUF1Qjs7SUFDdkIsd0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGV4dC10eXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRleHQtdHlwZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRleHQtdHlwZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGV4dFR5cGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yQ29kZTogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==