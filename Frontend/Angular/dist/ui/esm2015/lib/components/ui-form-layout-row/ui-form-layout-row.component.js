/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ElementRef, Renderer } from '@angular/core';
export class UiFormLayoutRowComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setElementClass(this.el.nativeElement, 'gas-row-block', true);
    }
}
UiFormLayoutRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-layout-row',
                template: "<div class=\"gas-row\" >\n  <ng-content></ng-content>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{margin-top:calc(30px - 15px)}:host .gas-row{display:flex;margin-left:-6px;margin-right:-6px;flex-wrap:wrap}:host .gas-row ::ng-deep .nx-formfield__wrapper{padding-bottom:0}:host .gas-row ::ng-deep .nx-formfield__input{border-top:0;padding-top:0}:host(.gas-row-block){display:block;width:100%}"]
            }] }
];
UiFormLayoutRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutRowComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutRowComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1sYXlvdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktZm9ybS1sYXlvdXQtcm93L3VpLWZvcm0tbGF5b3V0LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQThCLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFRcEgsTUFBTTs7Ozs7SUFFSixZQUFvQixFQUFjLEVBQVUsUUFBa0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7O0lBRW5FLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHlFQUFrRDtnQkFFbEQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7WUFQdUUsVUFBVTtZQUFDLFFBQVE7Ozs7Ozs7SUFVN0Usc0NBQXNCOzs7OztJQUFFLDRDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LEVsZW1lbnRSZWYsUmVuZGVyZXIgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLWxheW91dC1yb3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1sYXlvdXQtcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS1sYXlvdXQtcm93LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtTGF5b3V0Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZ2FzLXJvdy1ibG9jaycsIHRydWUpO1xuICB9XG5cbn1cbiJdfQ==