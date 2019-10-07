/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CONTENTGAP } from '../../model';
var UiContentBGapComponent = /** @class */ (function () {
    function UiContentBGapComponent() {
        this.gapSize = CONTENTGAP.GAP20;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    UiContentBGapComponent.prototype.handleGap = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type == CONTENTGAP.GAP20) {
            return 'contentGap20';
        }
        if (type == CONTENTGAP.GAP40) {
            return 'contentGap40';
        }
    };
    /**
     * @return {?}
     */
    UiContentBGapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiContentBGapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-content-b-gap',
                    template: "<div class=\"content-b-gap {{handleGap(gapSize)}}\">\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.content-b-gap.contentGap40{padding-bottom:40px}.content-b-gap.contentGap20{padding-bottom:20px}"]
                }] }
    ];
    UiContentBGapComponent.ctorParameters = function () { return []; };
    UiContentBGapComponent.propDecorators = {
        gapSize: [{ type: Input }]
    };
    return UiContentBGapComponent;
}());
export { UiContentBGapComponent };
if (false) {
    /** @type {?} */
    UiContentBGapComponent.prototype.gapSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29udGVudC1iLWdhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWNvbnRlbnQtYi1nYXAvdWktY29udGVudC1iLWdhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFekM7SUFRRTtRQURTLFlBQU8sR0FBYyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBR2pCLDBDQUFTOzs7O0lBQVQsVUFBVSxJQUFlO1FBQ3ZCLElBQUcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUM7WUFDMUIsT0FBTyxjQUFjLENBQUM7U0FDdkI7UUFDRCxJQUFHLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFDO1lBQzFCLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUNELHlDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsdUdBQWdEO29CQUVoRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7OzBCQUVFLEtBQUs7O0lBY1IsNkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWZZLHNCQUFzQjs7O0lBQ2pDLHlDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPTlRFTlRHQVAgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1jb250ZW50LWItZ2FwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWNvbnRlbnQtYi1nYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1jb250ZW50LWItZ2FwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlDb250ZW50QkdhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGdhcFNpemU6Q09OVEVOVEdBUCA9IENPTlRFTlRHQVAuR0FQMjA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgXG4gIGhhbmRsZUdhcCh0eXBlOkNPTlRFTlRHQVApe1xuICAgIGlmKHR5cGUgPT0gQ09OVEVOVEdBUC5HQVAyMCl7XG4gICAgICByZXR1cm4gJ2NvbnRlbnRHYXAyMCc7XG4gICAgfVxuICAgIGlmKHR5cGUgPT0gQ09OVEVOVEdBUC5HQVA0MCl7XG4gICAgICByZXR1cm4gJ2NvbnRlbnRHYXA0MCc7XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=