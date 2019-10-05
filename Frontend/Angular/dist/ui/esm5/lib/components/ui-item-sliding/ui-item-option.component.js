/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
var UiItemOptionComponent = /** @class */ (function () {
    function UiItemOptionComponent() {
        this.onItemOptionClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UiItemOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiItemOptionComponent.prototype.itemOptionClick = /**
     * @return {?}
     */
    function () {
        this.onItemOptionClick.emit();
    };
    UiItemOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-item-option',
                    template: "<ion-item-option (click)=\"itemOptionClick()\">\n  <ng-content></ng-content>\n</ion-item-option>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-item-option{display:inline-block;height:100%;background-color:#fff;color:#414141}.item-native ion-item-option:hover{opacity:.7}"]
                }] }
    ];
    UiItemOptionComponent.ctorParameters = function () { return []; };
    UiItemOptionComponent.propDecorators = {
        onItemOptionClick: [{ type: Output }]
    };
    return UiItemOptionComponent;
}());
export { UiItemOptionComponent };
if (false) {
    /** @type {?} */
    UiItemOptionComponent.prototype.onItemOptionClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaXRlbS1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1pdGVtLXNsaWRpbmcvdWktaXRlbS1vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEU7SUFVRTtRQUhVLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHakMsQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsOEdBQThDOztpQkFFL0M7Ozs7b0NBR0UsTUFBTTs7SUFZVCw0QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFkscUJBQXFCOzs7SUFFaEMsa0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWl0ZW0tb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWl0ZW0tb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaXRlbS1vcHRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaUl0ZW1PcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKSBvbkl0ZW1PcHRpb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGl0ZW1PcHRpb25DbGljaygpIHtcbiAgICB0aGlzLm9uSXRlbU9wdGlvbkNsaWNrLmVtaXQoKTtcbiAgfVxuXG59XG4iXX0=