/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var UiProgressStepperStyleChildComponent = /** @class */ (function () {
    function UiProgressStepperStyleChildComponent() {
        this.stepIndex = 0;
        this.stepTitle = '';
        this.colorCode = '';
    }
    /**
     * @return {?}
     */
    UiProgressStepperStyleChildComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiProgressStepperStyleChildComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress-stepper-style-child',
                    template: "<div class=\"step-content\">\n  <div class=\"icon-content\">\n      <ng-content select=\"[icon]\"></ng-content>\n  </div>\n  <div class=\"step-icon\" [class.nextYear]=\"colorCode\"><span class=\"num\">{{stepIndex+1}}</span></div>\n  <div class=\"step-title\" [class.nextYear]=\"colorCode\">\n    <ng-content select=\"[text]\"></ng-content>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    UiProgressStepperStyleChildComponent.ctorParameters = function () { return []; };
    UiProgressStepperStyleChildComponent.propDecorators = {
        stepIndex: [{ type: Input }],
        stepTitle: [{ type: Input }],
        colorCode: [{ type: Input }]
    };
    return UiProgressStepperStyleChildComponent;
}());
export { UiProgressStepperStyleChildComponent };
if (false) {
    /** @type {?} */
    UiProgressStepperStyleChildComponent.prototype.stepIndex;
    /** @type {?} */
    UiProgressStepperStyleChildComponent.prototype.stepTitle;
    /** @type {?} */
    UiProgressStepperStyleChildComponent.prototype.colorCode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS1jaGlsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUtY2hpbGQvdWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS1jaGlsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGO0lBVUU7UUFIUyxjQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFVLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFakIsdURBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLGlYQUErRDtvQkFFL0QsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7Ozs0QkFFRSxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFNUiwyQ0FBQztDQUFBLEFBZkQsSUFlQztTQVRZLG9DQUFvQzs7O0lBQy9DLHlEQUE4Qjs7SUFDOUIseURBQStCOztJQUMvQix5REFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlLWNoaWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUtY2hpbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlLWNoaWxkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlQcm9ncmVzc1N0ZXBwZXJTdHlsZUNoaWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc3RlcEluZGV4Om51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHN0ZXBUaXRsZTpzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY29sb3JDb2RlOnN0cmluZyA9ICcnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==