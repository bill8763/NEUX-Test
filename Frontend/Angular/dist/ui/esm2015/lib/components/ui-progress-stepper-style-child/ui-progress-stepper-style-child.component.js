/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiProgressStepperStyleChildComponent {
    constructor() {
        this.stepIndex = 0;
        this.stepTitle = '';
        this.colorCode = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiProgressStepperStyleChildComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-progress-stepper-style-child',
                template: "<div class=\"step-content\">\n  <div class=\"icon-content\">\n      <ng-content select=\"[icon]\"></ng-content>\n  </div>\n  <div class=\"step-icon\" [class.nextYear]=\"colorCode\"><span class=\"num\">{{stepIndex+1}}</span></div>\n  <div class=\"step-title\" [class.nextYear]=\"colorCode\">\n    <ng-content select=\"[text]\"></ng-content>\n  </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
UiProgressStepperStyleChildComponent.ctorParameters = () => [];
UiProgressStepperStyleChildComponent.propDecorators = {
    stepIndex: [{ type: Input }],
    stepTitle: [{ type: Input }],
    colorCode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiProgressStepperStyleChildComponent.prototype.stepIndex;
    /** @type {?} */
    UiProgressStepperStyleChildComponent.prototype.stepTitle;
    /** @type {?} */
    UiProgressStepperStyleChildComponent.prototype.colorCode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS1jaGlsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUtY2hpbGQvdWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS1jaGlsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU07SUFJSjtRQUhTLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVUsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLGlYQUErRDtnQkFFL0QsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O3dCQUVFLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRk4seURBQThCOztJQUM5Qix5REFBK0I7O0lBQy9CLHlEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUtY2hpbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS1jaGlsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUtY2hpbGQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaVByb2dyZXNzU3RlcHBlclN0eWxlQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzdGVwSW5kZXg6bnVtYmVyID0gMDtcbiAgQElucHV0KCkgc3RlcFRpdGxlOnN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBjb2xvckNvZGU6c3RyaW5nID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19