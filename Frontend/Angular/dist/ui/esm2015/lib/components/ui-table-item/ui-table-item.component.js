/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';
export class UiTableItemComponent {
    constructor() {
        this.itemMinSize = 'md';
        this.heightLight = 'none'; // style1: blue, style2: red, style3: grey, style4: normal black
        this.wrap = true;
        this.textAlign = '';
        this.sort = false;
        this.eventIndex = 0;
        this.itemVal = '';
        this.id = '';
        this.textValue = '';
    }
    /**
     * @return {?}
     */
    setIndex() {
        this.eventIndex++;
        return this.eventIndex;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // console.log('in afterviewinit');
        if (this.tableItem != undefined) {
            this.textValue = this.tableItem.nativeElement.textContent;
        }
        // this.tableItem.forEach(element => {
        //   this.textValue = element.nativeElement.innerHTML
        // });
        // console.log('tableItem', this.tableItem);
        // console.log('this.textValue',this.textValue);
    }
}
UiTableItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-table-item',
                template: "<ng-template let-item>\n  <div #tableItem class=\"table-item {{itemMinSize}} {{'heightLight'+'-'+heightLight}}\" [ngClass]=\"{'wrap-true'      :wrap}\" [id]=\"id\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-item{display:inline-block;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;text-align:center;white-space:nowrap;word-break:break-word;text-align:inherit;color:inherit;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}.table-item.md{width:105px;min-width:105px}.table-item.sm{width:50px}.table-item.wrap-true{white-space:normal}.table-item.heightLight-style1{color:#007ab3}.table-item.heightLight-style2{color:#dc3149}.table-item.heightLight-style3{color:#767676}.table-item.heightLight-style4{color:#414141}.table-item.text-align-left{text-align:left}.table-item.text-align-right{text-align:right}"]
            }] }
];
UiTableItemComponent.ctorParameters = () => [];
UiTableItemComponent.propDecorators = {
    itemMinSize: [{ type: Input }],
    heightLight: [{ type: Input }],
    wrap: [{ type: Input }],
    textAlign: [{ type: Input }],
    item: [{ type: ViewChild, args: [TemplateRef,] }],
    sort: [{ type: Input }],
    eventIndex: [{ type: Input }],
    itemVal: [{ type: Input }],
    id: [{ type: Input }],
    tableItem: [{ type: ViewChild, args: ['tableItem',] }]
};
if (false) {
    /** @type {?} */
    UiTableItemComponent.prototype.itemMinSize;
    /** @type {?} */
    UiTableItemComponent.prototype.heightLight;
    /** @type {?} */
    UiTableItemComponent.prototype.wrap;
    /** @type {?} */
    UiTableItemComponent.prototype.textAlign;
    /** @type {?} */
    UiTableItemComponent.prototype.item;
    /** @type {?} */
    UiTableItemComponent.prototype.sort;
    /** @type {?} */
    UiTableItemComponent.prototype.eventIndex;
    /** @type {?} */
    UiTableItemComponent.prototype.itemVal;
    /** @type {?} */
    UiTableItemComponent.prototype.id;
    /** @type {?} */
    UiTableItemComponent.prototype.textValue;
    /** @type {?} */
    UiTableItemComponent.prototype.elementRef;
    /** @type {?} */
    UiTableItemComponent.prototype.tableItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWl0ZW0vdWktdGFibGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQWlELFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU81SSxNQUFNO0lBZUo7UUFkUyxnQkFBVyxHQUFRLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLE1BQU0sQ0FBQyxDQUFDLGdFQUFnRTtRQUMzRixTQUFJLEdBQVMsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFFcEIsU0FBSSxHQUFTLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQVEsQ0FBQyxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBVSxFQUFFLENBQUM7SUFLYixDQUFDOzs7O0lBQ2pCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRXpCLENBQUM7Ozs7SUFDRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixtQ0FBbUM7UUFDbkMsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBQztZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQTtTQUMxRDtRQUNELHNDQUFzQztRQUN0QyxxREFBcUQ7UUFDckQsTUFBTTtRQUNOLDRDQUE0QztRQUM1QyxnREFBZ0Q7SUFDbEQsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix5T0FBNkM7O2FBRTlDOzs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7bUJBQ0wsU0FBUyxTQUFDLFdBQVc7bUJBQ3JCLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO2lCQUNMLEtBQUs7d0JBSUwsU0FBUyxTQUFDLFdBQVc7Ozs7SUFadEIsMkNBQWlDOztJQUNqQywyQ0FBbUM7O0lBQ25DLG9DQUEyQjs7SUFDM0IseUNBQTZCOztJQUM3QixvQ0FBOEM7O0lBQzlDLG9DQUE0Qjs7SUFDNUIsMENBQTZCOztJQUM3Qix1Q0FBc0I7O0lBQ3RCLGtDQUF5Qjs7SUFDekIseUNBQTZCOztJQUM3QiwwQ0FBOEI7O0lBRTlCLHlDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZixRdWVyeUxpc3QsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWJsZS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYmxlLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJsZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBpdGVtTWluU2l6ZTpzdHJpbmc9J21kJztcbiAgQElucHV0KCkgaGVpZ2h0TGlnaHQ6c3RyaW5nPSdub25lJzsgLy8gc3R5bGUxOiBibHVlLCBzdHlsZTI6IHJlZCwgc3R5bGUzOiBncmV5LCBzdHlsZTQ6IG5vcm1hbCBibGFja1xuICBASW5wdXQoKSB3cmFwOmJvb2xlYW49dHJ1ZTtcbiAgQElucHV0KCkgdGV4dEFsaWduOnN0cmluZz0nJztcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgaXRlbTpUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBzb3J0OmJvb2xlYW49ZmFsc2U7XG4gIEBJbnB1dCgpIGV2ZW50SW5kZXg6bnVtYmVyPTA7XG4gIEBJbnB1dCgpIGl0ZW1WYWwgPSAnJztcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgdGV4dFZhbHVlOnN0cmluZyA9ICcnO1xuICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkKCd0YWJsZUl0ZW0nKSB0YWJsZUl0ZW06IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgc2V0SW5kZXgoKXtcbiAgICB0aGlzLmV2ZW50SW5kZXgrKztcbiAgICByZXR1cm4gdGhpcy5ldmVudEluZGV4O1xuICAgIFxuICB9XG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZnRlcnZpZXdpbml0Jyk7XG4gICAgaWYodGhpcy50YWJsZUl0ZW0gIT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMudGV4dFZhbHVlID0gdGhpcy50YWJsZUl0ZW0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudFxuICAgIH1cbiAgICAvLyB0aGlzLnRhYmxlSXRlbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIC8vICAgdGhpcy50ZXh0VmFsdWUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MXG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RhYmxlSXRlbScsIHRoaXMudGFibGVJdGVtKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy50ZXh0VmFsdWUnLHRoaXMudGV4dFZhbHVlKTtcbiAgfVxufVxuIl19