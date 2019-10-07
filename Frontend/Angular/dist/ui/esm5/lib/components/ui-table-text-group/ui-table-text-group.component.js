/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var UiTableTextGroupComponent = /** @class */ (function () {
    function UiTableTextGroupComponent() {
        this.titleText = "";
        this.subTitleText = "";
        this.titleColor = 'default'; // default is color text normal, 'blue'
        this.isHasDot = false; // default is no dot; true is has yellow dot
        this.id = '';
    }
    /**
     * @return {?}
     */
    UiTableTextGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleTitleColor = 'style-title-color-' + this.titleColor;
        this.styleHasDot = this.isHasDot ? 'style-has-dot' : '';
    };
    UiTableTextGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-ui-table-text-group',
                    template: "<div class=\"group-title-text-content\" [ngClass]=\"[styleTitleColor, styleHasDot]\">\n    <!-- text -->\n    <div class=\"text-block\">\n        <div class=\"title-text\" [id]='id'>{{titleText}}</div>\n        <div class=\"subtitle-text\">{{subTitleText}}</div>\n    </div>\n    <!-- end of text -->\n  </div>\n  ",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.group-title-text-content{position:relative}.group-title-text-content.style-title-color-blue .title-text{color:#007ab3}.group-title-text-content.style-has-dot:before{content:' ';display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#fdd25c;position:absolute;top:calc(50% - 6px)}.group-title-text-content.style-has-dot .text-block{padding-left:15px}.group-title-text-content .title-text{color:#414141;font-weight:700;font-size:.875rem}.group-title-text-content .subtitle-text{color:#c2c2c2;font-size:.75rem}"]
                }] }
    ];
    UiTableTextGroupComponent.ctorParameters = function () { return []; };
    UiTableTextGroupComponent.propDecorators = {
        titleText: [{ type: Input }],
        subTitleText: [{ type: Input }],
        titleColor: [{ type: Input }],
        isHasDot: [{ type: Input }],
        id: [{ type: Input }]
    };
    return UiTableTextGroupComponent;
}());
export { UiTableTextGroupComponent };
if (false) {
    /** @type {?} */
    UiTableTextGroupComponent.prototype.titleText;
    /** @type {?} */
    UiTableTextGroupComponent.prototype.subTitleText;
    /** @type {?} */
    UiTableTextGroupComponent.prototype.titleColor;
    /** @type {?} */
    UiTableTextGroupComponent.prototype.isHasDot;
    /** @type {?} */
    UiTableTextGroupComponent.prototype.id;
    /** @type {?} */
    UiTableTextGroupComponent.prototype.styleTitleColor;
    /** @type {?} */
    UiTableTextGroupComponent.prototype.styleHasDot;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtdGV4dC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLXRleHQtZ3JvdXAvdWktdGFibGUtdGV4dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBZ0JFO1FBVFMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGlCQUFZLEdBQUksRUFBRSxDQUFDO1FBQ25CLGVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyx1Q0FBdUM7UUFDL0QsYUFBUSxHQUFZLEtBQUssQ0FBQyxDQUFDLDRDQUE0QztRQUN2RSxPQUFFLEdBQVcsRUFBRSxDQUFDO0lBS1QsQ0FBQzs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFvQixHQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLHNVQUFtRDs7aUJBRXBEOzs7OzRCQUdFLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSzs7SUFZUixnQ0FBQztDQUFBLEFBdkJELElBdUJDO1NBbEJZLHlCQUF5Qjs7O0lBRXBDLDhDQUF3Qjs7SUFDeEIsaURBQTRCOztJQUM1QiwrQ0FBZ0M7O0lBQ2hDLDZDQUFtQzs7SUFDbkMsdUNBQXlCOztJQUV6QixvREFBdUI7O0lBQ3ZCLGdEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtdWktdGFibGUtdGV4dC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS10ZXh0LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtdGV4dC1ncm91cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFibGVUZXh0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRpdGxlVGV4dCA9IFwiXCI7XG4gIEBJbnB1dCgpIHN1YlRpdGxlVGV4dCAgPSBcIlwiO1xuICBASW5wdXQoKSB0aXRsZUNvbG9yID0gJ2RlZmF1bHQnOyAvLyBkZWZhdWx0IGlzIGNvbG9yIHRleHQgbm9ybWFsLCAnYmx1ZSdcbiAgQElucHV0KCkgaXNIYXNEb3Q6IGJvb2xlYW4gPSBmYWxzZTsgLy8gZGVmYXVsdCBpcyBubyBkb3Q7IHRydWUgaXMgaGFzIHllbGxvdyBkb3RcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyBzdHlsZVRpdGxlQ29sb3I7XG4gIHB1YmxpYyBzdHlsZUhhc0RvdDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVUaXRsZUNvbG9yID0gJ3N0eWxlLXRpdGxlLWNvbG9yLScrIHRoaXMudGl0bGVDb2xvcjtcbiAgICB0aGlzLnN0eWxlSGFzRG90ID0gdGhpcy5pc0hhc0RvdCA/ICdzdHlsZS1oYXMtZG90JyA6ICcnO1xuICB9XG5cbn1cbiJdfQ==