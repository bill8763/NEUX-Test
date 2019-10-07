/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var UiItemOptionsComponent = /** @class */ (function () {
    function UiItemOptionsComponent() {
    }
    /**
     * @return {?}
     */
    UiItemOptionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UiItemOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item-options',
                    template: "<ng-template *ngIf=\"this.side === 'start'; then startBlock else endBlock\"></ng-template>\n\n<ng-template #optionContent>\n    <ng-content></ng-content>\n</ng-template>\n\n<ng-template #startBlock>\n    <ion-item-options side=\"start\">\n      <ng-container *ngTemplateOutlet=\"optionContent\"></ng-container>\n    </ion-item-options>\n</ng-template>\n\n<ng-template #endBlock>\n    <ion-item-options side=\"end\">\n      <ng-container *ngTemplateOutlet=\"optionContent\"></ng-container>\n    </ion-item-options>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    UiItemOptionsComponent.ctorParameters = function () { return []; };
    UiItemOptionsComponent.propDecorators = {
        side: [{ type: Input, args: ['side',] }]
    };
    return UiItemOptionsComponent;
}());
export { UiItemOptionsComponent };
if (false) {
    /** @type {?} */
    UiItemOptionsComponent.prototype.side;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaXRlbS1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaXRlbS1zbGlkaW5nL3VpLWl0ZW0tb3B0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBU0U7SUFBZ0IsQ0FBQzs7OztJQUVqQix5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsK2hCQUErQzs7aUJBRWhEOzs7O3VCQUdFLEtBQUssU0FBQyxNQUFNOztJQU9mLDZCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVFksc0JBQXNCOzs7SUFFakMsc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pdGVtLW9wdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktaXRlbS1vcHRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaXRlbS1vcHRpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlJdGVtT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdzaWRlJykgc2lkZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19