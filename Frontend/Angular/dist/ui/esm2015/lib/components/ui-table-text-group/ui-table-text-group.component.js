/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class UiTableTextGroupComponent {
    constructor() {
        this.titleText = "";
        this.subTitleText = "";
        this.titleColor = 'default'; // default is color text normal, 'blue'
        this.isHasDot = false; // default is no dot; true is has yellow dot
        this.id = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleTitleColor = 'style-title-color-' + this.titleColor;
        this.styleHasDot = this.isHasDot ? 'style-has-dot' : '';
    }
}
UiTableTextGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-ui-table-text-group',
                template: "<div class=\"group-title-text-content\" [ngClass]=\"[styleTitleColor, styleHasDot]\">\n    <!-- text -->\n    <div class=\"text-block\">\n        <div class=\"title-text\" [id]='id'>{{titleText}}</div>\n        <div class=\"subtitle-text\">{{subTitleText}}</div>\n    </div>\n    <!-- end of text -->\n  </div>\n  ",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.group-title-text-content{position:relative}.group-title-text-content.style-title-color-blue .title-text{color:#007ab3}.group-title-text-content.style-has-dot:before{content:' ';display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#fdd25c;position:absolute;top:calc(50% - 6px)}.group-title-text-content.style-has-dot .text-block{padding-left:15px}.group-title-text-content .title-text{color:#414141;font-weight:700;font-size:.875rem}.group-title-text-content .subtitle-text{color:#c2c2c2;font-size:.75rem}"]
            }] }
];
UiTableTextGroupComponent.ctorParameters = () => [];
UiTableTextGroupComponent.propDecorators = {
    titleText: [{ type: Input }],
    subTitleText: [{ type: Input }],
    titleColor: [{ type: Input }],
    isHasDot: [{ type: Input }],
    id: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtdGV4dC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLXRleHQtZ3JvdXAvdWktdGFibGUtdGV4dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU07SUFXSjtRQVRTLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFJLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsdUNBQXVDO1FBQy9ELGFBQVEsR0FBWSxLQUFLLENBQUMsQ0FBQyw0Q0FBNEM7UUFDdkUsT0FBRSxHQUFXLEVBQUUsQ0FBQztJQUtULENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLEdBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFELENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsc1VBQW1EOzthQUVwRDs7Ozt3QkFHRSxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2lCQUNMLEtBQUs7Ozs7SUFKTiw4Q0FBd0I7O0lBQ3hCLGlEQUE0Qjs7SUFDNUIsK0NBQWdDOztJQUNoQyw2Q0FBbUM7O0lBQ25DLHVDQUF5Qjs7SUFFekIsb0RBQXVCOztJQUN2QixnREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLXVpLXRhYmxlLXRleHQtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFibGUtdGV4dC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRhYmxlLXRleHQtZ3JvdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaVRhYmxlVGV4dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZVRleHQgPSBcIlwiO1xuICBASW5wdXQoKSBzdWJUaXRsZVRleHQgID0gXCJcIjtcbiAgQElucHV0KCkgdGl0bGVDb2xvciA9ICdkZWZhdWx0JzsgLy8gZGVmYXVsdCBpcyBjb2xvciB0ZXh0IG5vcm1hbCwgJ2JsdWUnXG4gIEBJbnB1dCgpIGlzSGFzRG90OiBib29sZWFuID0gZmFsc2U7IC8vIGRlZmF1bHQgaXMgbm8gZG90OyB0cnVlIGlzIGhhcyB5ZWxsb3cgZG90XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgc3R5bGVUaXRsZUNvbG9yO1xuICBwdWJsaWMgc3R5bGVIYXNEb3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlVGl0bGVDb2xvciA9ICdzdHlsZS10aXRsZS1jb2xvci0nKyB0aGlzLnRpdGxlQ29sb3I7XG4gICAgdGhpcy5zdHlsZUhhc0RvdCA9IHRoaXMuaXNIYXNEb3QgPyAnc3R5bGUtaGFzLWRvdCcgOiAnJztcbiAgfVxuXG59XG4iXX0=