/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { UiFormCheckbox2Component } from '../ui-form-checkbox2/ui-form-checkbox2.component';
var UiFormCheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UiFormCheckboxComponent, _super);
    function UiFormCheckboxComponent(_renderer) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this.colorCode = '';
        return _this;
    }
    // 從色碼設定checkbox的顏色
    // 從色碼設定checkbox的顏色
    /**
     * @return {?}
     */
    UiFormCheckboxComponent.prototype.colorSetting = 
    // 從色碼設定checkbox的顏色
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkblock_ele = this.checkBlock.nativeElement;
        this._renderer.setStyle(checkblock_ele, 'borderColor', this.colorCode);
        if (this.nxValue) {
            this._renderer.setStyle(checkblock_ele, 'backgroundColor', this.colorCode);
        }
        else {
            this._renderer.removeStyle(this.checkBlock.nativeElement, 'backgroundColor');
        }
    };
    /**
     * @return {?}
     */
    UiFormCheckboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        //console.log('color code:',this.checkBlock,this.colorCode);
        this.colorSetting();
    };
    Object.defineProperty(UiFormCheckboxComponent.prototype, "nxValue", {
        get: /**
         * @return {?}
         */
        function () { return this.checkedValue; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.colorSetting();
            this.checkedValue = newValue;
        },
        enumerable: true,
        configurable: true
    });
    UiFormCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-checkbox',
                    template: "<div class=\"form-checkbox\" [ngClass]=\"[isDisable ? ' disable': '', classCheckboxSingle]\">\n  <label [for]='id' class=\"checkbox-content-block\">\n    <input class=\"check-input\" type=\"checkbox\" [(ngModel)]=\"checked\" [disabled]=\"isDisable\" [id]=\"id\">\n    <span #checkBlock class=\"check-block\">\n      <span class=\"check-block-inside\">\n        <img src=\"assets/img/icon-check-white.svg\" alt=\"\">\n      </span>\n    </span>\n    <span class=\"check-text\">\n        <ng-content select=\"[checkboxText=style2]\"></ng-content>\n      </span>\n  </label>\n</div>\n  \n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".form-checkbox{display:inline-block;vertical-align:middle;margin-right:30px}.form-checkbox.style-single{margin-right:0}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.form-checkbox ::-webkit-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox input::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-checkbox textarea::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px;opacity:1}.form-checkbox ::-moz-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox :-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox ::-ms-input-placeholder{color:#c2c2c2;font-size:1.25rem;font-family:\"Allianz Neo\";letter-spacing:.2px}.form-checkbox ::ng-deep .nx-formfield__flexfield,.form-checkbox ::ng-deep .select-body-block{min-height:30px}.form-checkbox ::ng-deep .nx-formfield__label-holder{height:99%;top:-30px;padding-top:30px;font-size:1.25rem}.form-checkbox ::ng-deep .nx-formfield__label{background-color:#fff;width:100%;font-weight:400}.form-checkbox ::ng-deep .nx-formfield.is-floating .nx-formfield__label{-webkit-transform:translateY(30px) translateZ(.001px);transform:translateY(30px) translateZ(.001px);font-weight:700}.form-checkbox .checkbox-content-block{display:flex;justify-content:flex-start;align-items:flex-start}.form-checkbox .check-input{display:none}.form-checkbox .check-input+.check-block{border:2px solid #c2c2c2;display:inline-block;width:24px;height:24px;position:relative;border-radius:3px;flex:24px 0 0}.form-checkbox .check-input+.check-block .check-block-inside{position:absolute;left:0;top:0;width:40%;height:16px}.form-checkbox .check-input:checked+.check-block{border-color:#007ab3;background-color:#007ab3}.form-checkbox .check-input:checked+.check-block .check-block-inside{width:100%;height:100%}.form-checkbox .check-input:checked+.check-block .check-block-inside img{width:100%}.form-checkbox .check-text{display:inline-block;padding-left:12px;font-size:1.25rem;line-height:24px}.form-checkbox.disable .check-input+.check-block{border-color:#c2c2c2}.form-checkbox.disable .check-input:checked+.check-block{background-color:#c2c2c2}.form-checkbox.disable .check-text{color:#c2c2c2}"]
                }] }
    ];
    UiFormCheckboxComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    UiFormCheckboxComponent.propDecorators = {
        colorCode: [{ type: Input }],
        checkBlock: [{ type: ViewChild, args: ['checkBlock',] }]
    };
    return UiFormCheckboxComponent;
}(UiFormCheckbox2Component));
export { UiFormCheckboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLWZvcm0tY2hlY2tib3gvdWktZm9ybS1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBZ0IsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pKLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRzVGO0lBTTZDLG1EQUF3QjtJQUluRSxpQ0FBb0IsU0FBb0I7UUFBeEMsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFGL0IsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUFJaEMsQ0FBQztJQUlELG1CQUFtQjs7Ozs7SUFDbkIsOENBQVk7Ozs7O0lBQVo7O1lBQ00sY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVFO2FBQ0c7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQzlFO0lBRUgsQ0FBQzs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUNFLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELHNCQUFJLDRDQUFPOzs7O1FBQVgsY0FBcUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDaEQsVUFBWSxRQUFhO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUMvQixDQUFDOzs7T0FKK0M7O2dCQWpDakQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHFsQkFBZ0Q7b0JBRWhELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7OztnQkFUc0YsU0FBUzs7OzRCQVk3RixLQUFLOzZCQUNMLFNBQVMsU0FBQyxZQUFZOztJQWdDekIsOEJBQUM7Q0FBQSxBQXpDRCxDQU02Qyx3QkFBd0IsR0FtQ3BFO1NBbkNZLHVCQUF1Qjs7O0lBRWxDLDRDQUFnQzs7SUFDaEMsNkNBQWdEOzs7OztJQUNwQyw0Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVaUZvcm1DaGVja2JveDJDb21wb25lbnQgfSBmcm9tICcuLi91aS1mb3JtLWNoZWNrYm94Mi91aS1mb3JtLWNoZWNrYm94Mi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0tY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS1mb3JtLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVWlGb3JtQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBVaUZvcm1DaGVja2JveDJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xuXG4gIEBJbnB1dCgpIGNvbG9yQ29kZTogc3RyaW5nID0gJyc7XG4gIEBWaWV3Q2hpbGQoJ2NoZWNrQmxvY2snKSBjaGVja0Jsb2NrOiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBcblxuICBcbiAgLy8g5b6e6Imy56K86Kit5a6aY2hlY2tib3jnmoTpoY/oibJcbiAgY29sb3JTZXR0aW5nKCl7XG4gICAgbGV0IGNoZWNrYmxvY2tfZWxlID0gdGhpcy5jaGVja0Jsb2NrLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2hlY2tibG9ja19lbGUsICdib3JkZXJDb2xvcicsIHRoaXMuY29sb3JDb2RlKTtcbiAgICBpZih0aGlzLm54VmFsdWUpe1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2hlY2tibG9ja19lbGUsICdiYWNrZ3JvdW5kQ29sb3InLCB0aGlzLmNvbG9yQ29kZSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNoZWNrQmxvY2submF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmRDb2xvcicpO1xuICAgIH1cblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgLy9jb25zb2xlLmxvZygnY29sb3IgY29kZTonLHRoaXMuY2hlY2tCbG9jayx0aGlzLmNvbG9yQ29kZSk7XG4gICAgdGhpcy5jb2xvclNldHRpbmcoKTsgIFxuICB9XG4gIGdldCBueFZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLmNoZWNrZWRWYWx1ZTsgfVxuICBzZXQgbnhWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5jb2xvclNldHRpbmcoKTtcbiAgICB0aGlzLmNoZWNrZWRWYWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG4gIFxuICBcblxufVxuIl19