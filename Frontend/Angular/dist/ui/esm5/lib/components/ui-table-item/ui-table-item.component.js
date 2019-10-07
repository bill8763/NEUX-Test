/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';
var UiTableItemComponent = /** @class */ (function () {
    function UiTableItemComponent() {
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
    UiTableItemComponent.prototype.setIndex = /**
     * @return {?}
     */
    function () {
        this.eventIndex++;
        return this.eventIndex;
    };
    /**
     * @return {?}
     */
    UiTableItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // console.log('in afterviewinit');
        if (this.tableItem != undefined) {
            this.textValue = this.tableItem.nativeElement.textContent;
        }
        // this.tableItem.forEach(element => {
        //   this.textValue = element.nativeElement.innerHTML
        // });
        // console.log('tableItem', this.tableItem);
        // console.log('this.textValue',this.textValue);
    };
    UiTableItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-item',
                    template: "<ng-template let-item>\n  <div #tableItem class=\"table-item {{itemMinSize}} {{'heightLight'+'-'+heightLight}}\" [ngClass]=\"{'wrap-true'      :wrap}\" [id]=\"id\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-item{display:inline-block;font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:.2px;text-align:center;white-space:nowrap;word-break:break-word;text-align:inherit;color:inherit;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual}.table-item.md{width:105px;min-width:105px}.table-item.sm{width:50px}.table-item.wrap-true{white-space:normal}.table-item.heightLight-style1{color:#007ab3}.table-item.heightLight-style2{color:#dc3149}.table-item.heightLight-style3{color:#767676}.table-item.heightLight-style4{color:#414141}.table-item.text-align-left{text-align:left}.table-item.text-align-right{text-align:right}"]
                }] }
    ];
    UiTableItemComponent.ctorParameters = function () { return []; };
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
    return UiTableItemComponent;
}());
export { UiTableItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWl0ZW0vdWktdGFibGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQWlELFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1STtJQW9CRTtRQWRTLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVEsTUFBTSxDQUFDLENBQUMsZ0VBQWdFO1FBQzNGLFNBQUksR0FBUyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUVwQixTQUFJLEdBQVMsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBUSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFVLEVBQUUsQ0FBQztJQUtiLENBQUM7Ozs7SUFDakIsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUV6QixDQUFDOzs7O0lBQ0QsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUNELDhDQUFlOzs7SUFBZjtRQUNFLG1DQUFtQztRQUNuQyxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO1NBQzFEO1FBQ0Qsc0NBQXNDO1FBQ3RDLHFEQUFxRDtRQUNyRCxNQUFNO1FBQ04sNENBQTRDO1FBQzVDLGdEQUFnRDtJQUNsRCxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHlPQUE2Qzs7aUJBRTlDOzs7OzhCQUVFLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsU0FBUyxTQUFDLFdBQVc7dUJBQ3JCLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBSUwsU0FBUyxTQUFDLFdBQVc7O0lBcUJ4QiwyQkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLG9CQUFvQjs7O0lBQy9CLDJDQUFpQzs7SUFDakMsMkNBQW1DOztJQUNuQyxvQ0FBMkI7O0lBQzNCLHlDQUE2Qjs7SUFDN0Isb0NBQThDOztJQUM5QyxvQ0FBNEI7O0lBQzVCLDBDQUE2Qjs7SUFDN0IsdUNBQXNCOztJQUN0QixrQ0FBeUI7O0lBQ3pCLHlDQUE2Qjs7SUFDN0IsMENBQThCOztJQUU5Qix5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsUXVlcnlMaXN0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFibGUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFibGVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaXRlbU1pblNpemU6c3RyaW5nPSdtZCc7XG4gIEBJbnB1dCgpIGhlaWdodExpZ2h0OnN0cmluZz0nbm9uZSc7IC8vIHN0eWxlMTogYmx1ZSwgc3R5bGUyOiByZWQsIHN0eWxlMzogZ3JleSwgc3R5bGU0OiBub3JtYWwgYmxhY2tcbiAgQElucHV0KCkgd3JhcDpib29sZWFuPXRydWU7XG4gIEBJbnB1dCgpIHRleHRBbGlnbjpzdHJpbmc9Jyc7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGl0ZW06VGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgc29ydDpib29sZWFuPWZhbHNlO1xuICBASW5wdXQoKSBldmVudEluZGV4Om51bWJlcj0wO1xuICBASW5wdXQoKSBpdGVtVmFsID0gJyc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHRleHRWYWx1ZTpzdHJpbmcgPSAnJztcbiAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZCgndGFibGVJdGVtJykgdGFibGVJdGVtOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHNldEluZGV4KCl7XG4gICAgdGhpcy5ldmVudEluZGV4Kys7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRJbmRleDtcbiAgICBcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAvLyBjb25zb2xlLmxvZygnaW4gYWZ0ZXJ2aWV3aW5pdCcpO1xuICAgIGlmKHRoaXMudGFibGVJdGVtICE9IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnRleHRWYWx1ZSA9IHRoaXMudGFibGVJdGVtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnRcbiAgICB9XG4gICAgLy8gdGhpcy50YWJsZUl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAvLyAgIHRoaXMudGV4dFZhbHVlID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTFxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0YWJsZUl0ZW0nLCB0aGlzLnRhYmxlSXRlbSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMudGV4dFZhbHVlJyx0aGlzLnRleHRWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==