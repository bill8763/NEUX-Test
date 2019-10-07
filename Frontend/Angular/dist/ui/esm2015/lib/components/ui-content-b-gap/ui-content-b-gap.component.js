/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CONTENTGAP } from '../../model';
export class UiContentBGapComponent {
    constructor() {
        this.gapSize = CONTENTGAP.GAP20;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    handleGap(type) {
        if (type == CONTENTGAP.GAP20) {
            return 'contentGap20';
        }
        if (type == CONTENTGAP.GAP40) {
            return 'contentGap40';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiContentBGapComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-content-b-gap',
                template: "<div class=\"content-b-gap {{handleGap(gapSize)}}\">\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.content-b-gap.contentGap40{padding-bottom:40px}.content-b-gap.contentGap20{padding-bottom:20px}"]
            }] }
];
UiContentBGapComponent.ctorParameters = () => [];
UiContentBGapComponent.propDecorators = {
    gapSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiContentBGapComponent.prototype.gapSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktY29udGVudC1iLWdhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWNvbnRlbnQtYi1nYXAvdWktY29udGVudC1iLWdhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRekMsTUFBTTtJQUVKO1FBRFMsWUFBTyxHQUFjLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFHakIsU0FBUyxDQUFDLElBQWU7UUFDdkIsSUFBRyxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssRUFBQztZQUMxQixPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUNELElBQUcsSUFBSSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUM7WUFDMUIsT0FBTyxjQUFjLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBQ0QsUUFBUTtJQUNSLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsdUdBQWdEO2dCQUVoRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7Ozs7c0JBRUUsS0FBSzs7OztJQUFOLHlDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPTlRFTlRHQVAgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1jb250ZW50LWItZ2FwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWNvbnRlbnQtYi1nYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1jb250ZW50LWItZ2FwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlDb250ZW50QkdhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGdhcFNpemU6Q09OVEVOVEdBUCA9IENPTlRFTlRHQVAuR0FQMjA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgXG4gIGhhbmRsZUdhcCh0eXBlOkNPTlRFTlRHQVApe1xuICAgIGlmKHR5cGUgPT0gQ09OVEVOVEdBUC5HQVAyMCl7XG4gICAgICByZXR1cm4gJ2NvbnRlbnRHYXAyMCc7XG4gICAgfVxuICAgIGlmKHR5cGUgPT0gQ09OVEVOVEdBUC5HQVA0MCl7XG4gICAgICByZXR1cm4gJ2NvbnRlbnRHYXA0MCc7XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=