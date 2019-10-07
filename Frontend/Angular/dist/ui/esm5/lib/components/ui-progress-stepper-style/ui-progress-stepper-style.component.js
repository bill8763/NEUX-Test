/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { STEPSTYLETYPE } from '../../model';
// import { STEPSTYLETYPE } from './ui-rpogress-stepper-style-type-enum';
var UiProgressStepperStyleComponent = /** @class */ (function () {
    function UiProgressStepperStyleComponent() {
        this.stepContral = 0;
        this.activeStepCheck = false;
        this.stepType = STEPSTYLETYPE.STYLE_1;
        this.hasIcon = false;
        this.colorCode = '';
    }
    /**
     * @return {?}
     */
    UiProgressStepperStyleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiProgressStepperStyleComponent.prototype.contralType = /**
     * @return {?}
     */
    function () {
        if (this.stepType == STEPSTYLETYPE.STYLE_1) {
            return 'step-style-1';
        }
        if (this.stepType == STEPSTYLETYPE.STYLE_2) {
            return 'step-style-2';
        }
        if (this.stepType == STEPSTYLETYPE.STYLE_2_2) {
            return 'step-style-2-2';
        }
    };
    UiProgressStepperStyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-progress-stepper-style',
                    template: "<div class=\"stepper2-contnet {{contralType()}}\" [ngClass]=\"{'hasIcon':hasIcon}\">\n  <!-- <nx-multi-stepper currentStepLabel='Step' selectedIndex='{{stepContral}}'>\n    <ng-container *ngFor='let step of stepData'>\n      <nx-step [label]='step'>\n      </nx-step>\n    </ng-container>\n  </nx-multi-stepper> -->\n  <ng-container *ngFor='let step of stepData;index as i'>\n    <app-ui-progress-stepper-style-child \n      [stepIndex]='i' [colorCode]=\"colorCode\"\n      [ngClass]=\"{'actived':i < stepContral || (i == stepContral && activeStepCheck),\n                  'active' :i == stepContral}\">\n      <ng-container *ngIf=\"i == stepContral && hasIcon\" icon>\n        <ng-content select=\"[activeIcon]\"></ng-content>\n      </ng-container>\n      <ng-container text>\n        {{step}}\n      </ng-container>\n    </app-ui-progress-stepper-style-child>\n\n    <div class=\"stap-line\" ><div class=\"stap-line-color\" [style.background-color]=\"colorCode\"></div></div>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.stepper2-contnet.step-style-1{display:flex;justify-content:space-between;align-items:center}.stepper2-contnet.step-style-1 .stap-line{display:none;width:100%;height:4px;background-color:#ececec;margin-right:10px}.stepper2-contnet.step-style-1 .stap-line .stap-line-color{display:block;content:'';width:50%;height:100%;background-color:#007ab3}.stepper2-contnet.step-style-1 .stap-line:last-child{display:none}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content{display:flex;align-items:center}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon{display:flex;align-items:center;justify-content:center;width:24px;min-width:24px;height:24px;border-radius:50%;font-style:normal;font-stretch:normal;letter-spacing:.2px;text-align:center;border:2px solid #c2c2c2;background-color:transparent;margin-right:8px}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon .num{font-weight:700;font-size:.75rem;color:#c2c2c2}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{display:flex;align-items:center;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.125rem;letter-spacing:normal;color:#c2c2c2;white-space:nowrap;margin-right:5px}@media screen and (max-width:767px){.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{display:none}}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-icon,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon{border:2px solid #007ab3;background-color:#007ab3}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-icon .num,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon .num{color:#fff}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-icon.nextYear,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon.nextYear{border:2px solid #007d8c;background-color:#007d8c}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-title,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-title{color:#007ab3}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active .step-title.nextYear,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.actived .step-title.nextYear{color:#007d8c}.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active+.stap-line,.stepper2-contnet.step-style-1 ::ng-deep app-ui-progress-stepper-style-child.active+.stap-line:last-child{display:block}.stepper2-contnet.step-style-2,.stepper2-contnet.step-style-2-2{padding-left:80px;padding-right:80px;display:flex;justify-content:space-between}.stepper2-contnet.step-style-2 .stap-line,.stepper2-contnet.step-style-2-2 .stap-line{width:100%;height:4px;background-color:transparent;margin-top:6px;line-height:77px;background-repeat:repeat-x;background-size:10px 10px;background-position-y:center;background-position-x:3px;background-image:url(assets/img/icon-stap-line-dot.svg)}.stepper2-contnet.step-style-2 .stap-line:last-child,.stepper2-contnet.step-style-2-2 .stap-line:last-child{display:none}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content{width:16px}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon{width:16px;height:16px;border-radius:50%;font-style:normal;font-stretch:normal;letter-spacing:.2px;text-align:center;border:2px solid #007ab3;background-color:#fff;margin-bottom:8px}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon .num,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon .num{font-weight:700;font-size:0;color:#fff}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon img,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-icon img{width:100%;height:100%}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{width:180px;font-size:1rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;text-align:center;margin-left:8px;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .icon-content img,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .icon-content img{width:34px;height:25px;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);margin-left:8px;margin-top:-10px;position:absolute}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child.actived .step-icon{background-color:#007ab3;background-size:16px 16px;background-position:center center;background-repeat:no-repeat;background-image:url(assets/img/icon-check-white.svg)}.stepper2-contnet.step-style-2 ::ng-deep app-ui-progress-stepper-style-child.actived:not(.active)+.stap-line,.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child.actived:not(.active)+.stap-line{background-image:none;background-color:#007ab3}.stepper2-contnet.step-style-2-2.hasIcon,.stepper2-contnet.step-style-2.hasIcon{padding-top:35px}@media screen and (max-width:767px){.stepper2-contnet.step-style-2:not(.step-style-2-2){padding-left:0;padding-right:0}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{width:130px}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child:first-child .step-title{margin-left:0;-webkit-transform:translateX(0);transform:translateX(0);text-align-last:left}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child:nth-last-child(2) .step-title{text-align:right;margin-left:16px;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.stepper2-contnet.step-style-2:not(.step-style-2-2) ::ng-deep app-ui-progress-stepper-style-child:not(.active) .step-content .step-title{display:none}.stepper2-contnet.step-style-2-2{padding-left:40px;padding-right:40px}.stepper2-contnet.step-style-2-2 ::ng-deep app-ui-progress-stepper-style-child .step-content .step-title{width:90px}}"]
                }] }
    ];
    UiProgressStepperStyleComponent.ctorParameters = function () { return []; };
    UiProgressStepperStyleComponent.propDecorators = {
        stepContral: [{ type: Input }],
        stepData: [{ type: Input }],
        activeStepCheck: [{ type: Input }],
        stepType: [{ type: Input }],
        hasIcon: [{ type: Input }],
        colorCode: [{ type: Input }]
    };
    return UiProgressStepperStyleComponent;
}());
export { UiProgressStepperStyleComponent };
if (false) {
    /** @type {?} */
    UiProgressStepperStyleComponent.prototype.stepContral;
    /** @type {?} */
    UiProgressStepperStyleComponent.prototype.stepData;
    /** @type {?} */
    UiProgressStepperStyleComponent.prototype.activeStepCheck;
    /** @type {?} */
    UiProgressStepperStyleComponent.prototype.stepType;
    /** @type {?} */
    UiProgressStepperStyleComponent.prototype.hasIcon;
    /** @type {?} */
    UiProgressStepperStyleComponent.prototype.colorCode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUvdWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRzVDO0lBYUU7UUFOUyxnQkFBVyxHQUFVLENBQUMsQ0FBQztRQUV2QixvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUNoQyxhQUFRLEdBQWlCLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDL0MsWUFBTyxHQUFXLEtBQUssQ0FBQztRQUN4QixjQUFTLEdBQVUsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVqQixrREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0QscURBQVc7OztJQUFYO1FBQ0UsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUM7WUFDeEMsT0FBTyxjQUFjLENBQUM7U0FDdkI7UUFDRCxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBQztZQUN4QyxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFDO1lBQzFDLE9BQU8sZ0JBQWdCLENBQUM7U0FDekI7SUFDSCxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLDQvQkFBeUQ7b0JBRXpELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7OEJBRUUsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBaUJSLHNDQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F2QlksK0JBQStCOzs7SUFDMUMsc0RBQWdDOztJQUNoQyxtREFBMkI7O0lBQzNCLDBEQUF5Qzs7SUFDekMsbURBQXdEOztJQUN4RCxrREFBaUM7O0lBQ2pDLG9EQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNURVBTVFlMRVRZUEUgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG4vLyBpbXBvcnQgeyBTVEVQU1RZTEVUWVBFIH0gZnJvbSAnLi91aS1ycG9ncmVzcy1zdGVwcGVyLXN0eWxlLXR5cGUtZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlQcm9ncmVzc1N0ZXBwZXJTdHlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHN0ZXBDb250cmFsOm51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHN0ZXBEYXRhOnN0cmluZ1tdO1xuICBASW5wdXQoKSBhY3RpdmVTdGVwQ2hlY2s6Ym9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGVwVHlwZTpTVEVQU1RZTEVUWVBFID0gU1RFUFNUWUxFVFlQRS5TVFlMRV8xO1xuICBASW5wdXQoKSBoYXNJY29uOmJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3JDb2RlOnN0cmluZyA9ICcnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGNvbnRyYWxUeXBlKCl7XG4gICAgaWYodGhpcy5zdGVwVHlwZSA9PSBTVEVQU1RZTEVUWVBFLlNUWUxFXzEpe1xuICAgICAgcmV0dXJuICdzdGVwLXN0eWxlLTEnO1xuICAgIH1cbiAgICBpZih0aGlzLnN0ZXBUeXBlID09IFNURVBTVFlMRVRZUEUuU1RZTEVfMil7XG4gICAgICByZXR1cm4gJ3N0ZXAtc3R5bGUtMic7XG4gICAgfVxuICAgIGlmKHRoaXMuc3RlcFR5cGUgPT0gU1RFUFNUWUxFVFlQRS5TVFlMRV8yXzIpe1xuICAgICAgcmV0dXJuICdzdGVwLXN0eWxlLTItMic7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==