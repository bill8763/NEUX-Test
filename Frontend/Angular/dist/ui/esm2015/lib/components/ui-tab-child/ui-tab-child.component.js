/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, TemplateRef, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
export class UiTabChildComponent {
    // isActive:boolean =true;
    constructor() {
        this.onTabChildClick = new EventEmitter();
        this.id = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiTabChildComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-tab-child',
                template: "<ng-template #tabContent>\n  <div class=\"tab-child\">\n    <button class=\"tab-child-btn-style\" [id]=\"id\">\n        <ng-content></ng-content>\n    </button>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.tab-child{vertical-align:middle;text-align:center;height:100%}.tab-child .tab-child-btn-style{display:inline-block;width:100%;height:100%;outline:0;word-break:break-all;background-color:transparent}"]
            }] }
];
UiTabChildComponent.ctorParameters = () => [];
UiTabChildComponent.propDecorators = {
    onTabChildClick: [{ type: Output }],
    tab: [{ type: ViewChild, args: [TemplateRef,] }],
    active: [{ type: Input }],
    idName: [{ type: Input }],
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UiTabChildComponent.prototype.onTabChildClick;
    /** @type {?} */
    UiTabChildComponent.prototype.tab;
    /** @type {?} */
    UiTabChildComponent.prototype.active;
    /** @type {?} */
    UiTabChildComponent.prototype.idName;
    /** @type {?} */
    UiTabChildComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFiLWNoaWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktdGFiLWNoaWxkL3VpLXRhYi1jaGlsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVEvSCxNQUFNOztJQVFKO1FBTlUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXRDLE9BQUUsR0FBVSxFQUFFLENBQUM7SUFHeEIsQ0FBQzs7OztJQUNELFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHdNQUE0QztnQkFFNUMsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7OzhCQUdFLE1BQU07a0JBQ04sU0FBUyxTQUFDLFdBQVc7cUJBQ3JCLEtBQUs7cUJBQ0wsS0FBSztpQkFDTCxLQUFLOzs7O0lBSk4sOENBQStDOztJQUMvQyxrQ0FBOEM7O0lBQzlDLHFDQUF1Qjs7SUFDdkIscUNBQXVCOztJQUN2QixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWItY2hpbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFiLWNoaWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFiLWNoaWxkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJDaGlsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIG9uVGFiQ2hpbGRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGFiOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBhY3RpdmU6c3RyaW5nO1xuICBASW5wdXQoKSBpZE5hbWU6c3RyaW5nO1xuICBASW5wdXQoKSBpZDpzdHJpbmcgPSAnJztcbiAgLy8gaXNBY3RpdmU6Ym9vbGVhbiA9dHJ1ZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==