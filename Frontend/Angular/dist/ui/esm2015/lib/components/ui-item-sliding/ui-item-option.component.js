/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class UiItemOptionComponent {
    constructor() {
        this.onItemOptionClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    itemOptionClick() {
        this.onItemOptionClick.emit();
    }
}
UiItemOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-item-option',
                template: "<ion-item-option (click)=\"itemOptionClick()\">\n  <ng-content></ng-content>\n</ion-item-option>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}ion-item-option{display:inline-block;height:100%;background-color:#fff;color:#414141}.item-native ion-item-option:hover{opacity:.7}"]
            }] }
];
UiItemOptionComponent.ctorParameters = () => [];
UiItemOptionComponent.propDecorators = {
    onItemOptionClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiItemOptionComponent.prototype.onItemOptionClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaXRlbS1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1pdGVtLXNsaWRpbmcvdWktaXRlbS1vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEUsTUFBTTtJQUtKO1FBSFUsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdqQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDhHQUE4Qzs7YUFFL0M7Ozs7Z0NBR0UsTUFBTTs7OztJQUFQLGtEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1pdGVtLW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1pdGVtLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWl0ZW0tb3B0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlJdGVtT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgb25JdGVtT3B0aW9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBpdGVtT3B0aW9uQ2xpY2soKSB7XG4gICAgdGhpcy5vbkl0ZW1PcHRpb25DbGljay5lbWl0KCk7XG4gIH1cblxufVxuIl19