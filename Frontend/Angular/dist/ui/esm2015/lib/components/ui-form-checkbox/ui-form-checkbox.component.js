/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { UiFormCheckbox2Component } from '../ui-form-checkbox2/ui-form-checkbox2.component';
export class UiFormCheckboxComponent extends UiFormCheckbox2Component {
    /**
     * @param {?} _renderer
     */
    constructor(_renderer) {
        super();
        this._renderer = _renderer;
        this.colorCode = '';
    }
    // 從色碼設定checkbox的顏色
    /**
     * @return {?}
     */
    colorSetting() {
        /** @type {?} */
        let checkblock_ele = this.checkBlock.nativeElement;
        this._renderer.setStyle(checkblock_ele, 'borderColor', this.colorCode);
        if (this.nxValue) {
            this._renderer.setStyle(checkblock_ele, 'backgroundColor', this.colorCode);
        }
        else {
            this._renderer.removeStyle(this.checkBlock.nativeElement, 'backgroundColor');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //console.log('color code:',this.checkBlock,this.colorCode);
        this.colorSetting();
    }
    /**
     * @return {?}
     */
    get nxValue() { return this.checkedValue; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set nxValue(newValue) {
        this.colorSetting();
        this.checkedValue = newValue;
    }
}
UiFormCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-checkbox',
                template: "<div class=\"form-checkbox\" [ngClass]=\"[isDisable ? ' disable': '', classCheckboxSingle]\">\n  <label [for]='id' class=\"checkbox-content-block\">\n    <input class=\"check-input\" type=\"checkbox\" [(ngModel)]=\"checked\" [disabled]=\"isDisable\" [id]=\"id\">\n    <span #checkBlock class=\"check-block\">\n      <span class=\"check-block-inside\">\n        <img src=\"assets/img/icon-check-white.svg\" alt=\"\">\n      </span>\n    </span>\n    <span class=\"check-text\">\n        <ng-content select=\"[checkboxText=style2]\"></ng-content>\n      </span>\n  </label>\n</div>\n  \n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".form-checkbox{display:inline-block;vertical-align:middle;margin-right:30px}.form-checkbox.style-single{margin-right:0}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-checkbox ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-checkbox textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-checkbox ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox ::ng-deep .nx-formfield__flexfield,.form-checkbox ::ng-deep .select-body-block{min-height:30px}.form-checkbox ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}.form-checkbox ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}.form-checkbox ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}.form-checkbox .checkbox-content-block{display:flex;justify-content:flex-start;align-items:flex-start}.form-checkbox .check-input{display:none}.form-checkbox .check-input+.check-block{border:2px solid #c2c2c2;display:inline-block;width:24px;height:24px;position:relative;border-radius:3px;flex:24px 0 0}.form-checkbox .check-input+.check-block .check-block-inside{position:absolute;left:0;top:0;width:40%;height:16px}.form-checkbox .check-input:checked+.check-block{border-color:#007ab3;background-color:#007ab3}.form-checkbox .check-input:checked+.check-block .check-block-inside{width:100%;height:100%}.form-checkbox .check-input:checked+.check-block .check-block-inside img{width:100%}.form-checkbox .check-text{display:inline-block;padding-left:12px;font-size:1.25rem;line-height:24px}.form-checkbox.disable .check-input+.check-block{border-color:#c2c2c2}.form-checkbox.disable .check-input:checked+.check-block{background-color:#c2c2c2}.form-checkbox.disable .check-text{color:#c2c2c2}"]
            }] }
];
UiFormCheckboxComponent.ctorParameters = () => [
    { type: Renderer2 }
];
UiFormCheckboxComponent.propDecorators = {
    colorCode: [{ type: Input }],
    checkBlock: [{ type: ViewChild, args: ['checkBlock',] }]
};
if (false) {
    /** @type {?} */
    UiFormCheckboxComponent.prototype.colorCode;
    /** @type {?} */
    UiFormCheckboxComponent.prototype.checkBlock;
    /**
     * @type {?}
     * @private
     */
    UiFormCheckboxComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tY2hlY2tib3gvdWktZm9ybS1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFnQixTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFTNUYsTUFBTSw4QkFBK0IsU0FBUSx3QkFBd0I7Ozs7SUFJbkUsWUFBb0IsU0FBb0I7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFEVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRi9CLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFJaEMsQ0FBQzs7Ozs7SUFLRCxZQUFZOztZQUNOLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkUsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1RTthQUNHO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUM5RTtJQUVILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsNERBQTREO1FBQzVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPLEtBQVUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDaEQsSUFBSSxPQUFPLENBQUMsUUFBYTtRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxxbEJBQWdEO2dCQUVoRCxlQUFlLEVBQUMsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7OztZQVRzRixTQUFTOzs7d0JBWTdGLEtBQUs7eUJBQ0wsU0FBUyxTQUFDLFlBQVk7Ozs7SUFEdkIsNENBQWdDOztJQUNoQyw2Q0FBZ0Q7Ozs7O0lBQ3BDLDRDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpRm9ybUNoZWNrYm94MkNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWZvcm0tY2hlY2tib3gyL3VpLWZvcm0tY2hlY2tib3gyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVpLWZvcm0tY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1DaGVja2JveENvbXBvbmVudCBleHRlbmRzIFVpRm9ybUNoZWNrYm94MkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XG5cbiAgQElucHV0KCkgY29sb3JDb2RlOiBzdHJpbmcgPSAnJztcbiAgQFZpZXdDaGlsZCgnY2hlY2tCbG9jaycpIGNoZWNrQmxvY2s6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIFxuXG4gIFxuICAvLyDlvp7oibLnorzoqK3lrppjaGVja2JveOeahOmhj+iJslxuICBjb2xvclNldHRpbmcoKXtcbiAgICBsZXQgY2hlY2tibG9ja19lbGUgPSB0aGlzLmNoZWNrQmxvY2submF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjaGVja2Jsb2NrX2VsZSwgJ2JvcmRlckNvbG9yJywgdGhpcy5jb2xvckNvZGUpO1xuICAgIGlmKHRoaXMubnhWYWx1ZSl7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjaGVja2Jsb2NrX2VsZSwgJ2JhY2tncm91bmRDb2xvcicsIHRoaXMuY29sb3JDb2RlKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY2hlY2tCbG9jay5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZENvbG9yJyk7XG4gICAgfVxuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAvL2NvbnNvbGUubG9nKCdjb2xvciBjb2RlOicsdGhpcy5jaGVja0Jsb2NrLHRoaXMuY29sb3JDb2RlKTtcbiAgICB0aGlzLmNvbG9yU2V0dGluZygpOyAgXG4gIH1cbiAgZ2V0IG54VmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuY2hlY2tlZFZhbHVlOyB9XG4gIHNldCBueFZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbG9yU2V0dGluZygpO1xuICAgIHRoaXMuY2hlY2tlZFZhbHVlID0gbmV3VmFsdWU7XG4gIH1cbiAgXG4gIFxuXG59XG4iXX0=