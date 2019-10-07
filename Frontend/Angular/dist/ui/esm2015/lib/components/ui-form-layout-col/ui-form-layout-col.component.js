/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
//import { UiDataGroupComponent } from './components/ui-data-group/ui-data-group.component';
export class UiFormLayoutColComponent {
    constructor() {
        this.colPC = 12;
        this.colNB = 12;
        this.colPad = 12;
        this.colMobile = 12;
        this.hasAdd = false;
        this.hasRemove = false;
        this.translateText = 'Add';
        this.isGroupCol = false; // col include app-group
        this.add = new EventEmitter();
        this.remove = new EventEmitter();
    }
    // @ContentChildren(UiDataGroupComponent) btnDel: QueryList<TemplateRef<any>>;
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log(this.btnDel);
        this.classColPc = ' gas-col-' + this.colPC;
        this.classColNb = ' gas-col-nb-' + this.colNB;
        this.classColPad = ' gas-col-pad-' + this.colPad;
        this.classColMobile = ' gas-col-mobile-' + this.colMobile;
        this.classColGroup = this.isGroupCol ? ' style-col-group' : '';
        this.classColRender = this.classColPc + this.classColNb + this.classColPad + this.classColMobile + this.classColGroup;
    }
    /**
     * @return {?}
     */
    addHandler() {
        this.add.emit();
    }
    /**
     * @return {?}
     */
    removeHandler() {
        this.remove.emit();
    }
}
UiFormLayoutColComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-form-layout-col',
                template: "<div class=\"col-content\" [ngClass]=\"[(hasAdd ? ' style-has-add': ''), (hasRemove ? ' style-has-remove': '')]\">\n  <ng-content></ng-content>\n  <button *ngIf=\"hasAdd\" class=\"btn-style icon-add\" (actionClick)=\"addHandler()\" [id]=\"'btn_'+id\" Action action=\"id+'Add'\">\n    <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue.svg\">\n      <ng-container textType=\"linktext\">{{translateText}}</ng-container>\n    </app-ui-link>\n  </button>\n  <button class=\"btn-style icon-del\" *ngIf=\"hasRemove\" (click)=\"removeHandler()\">\n    <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-minus-blue.svg\">\n    </app-ui-link>\n  </button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host([class*=gas-col-]){display:inline-flex;vertical-align:top;box-sizing:border-box;text-align:left;padding-right:6px;padding-left:6px;margin-bottom:1.875rem}:host([class*=gas-col-]) .col-content{display:inline-block;max-width:100%;width:100%}:host([class*=gas-col-]).style-col-group{margin-bottom:0}:host(.gas-col-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-3){flex:0 0 25%;max-width:25%}:host(.gas-col-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-6){flex:0 0 50%;max-width:50%}:host(.gas-col-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-9){flex:0 0 75%;max-width:75%}:host(.gas-col-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-12){flex:0 0 100%;max-width:100%}@media (max-width:1199px){:host(.gas-col-nb-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-nb-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-nb-3){flex:0 0 25%;max-width:25%}:host(.gas-col-nb-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-nb-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-nb-6){flex:0 0 50%;max-width:50%}:host(.gas-col-nb-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-nb-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-nb-9){flex:0 0 75%;max-width:75%}:host(.gas-col-nb-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-nb-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-nb-12){flex:0 0 100%;max-width:100%}:host(.gas-col-nb-auto){max-width:auto;flex-basis:auto}}@media (max-width:1023px){:host(.gas-col-pad-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-pad-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-pad-3){flex:0 0 25%;max-width:25%}:host(.gas-col-pad-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-pad-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-pad-6){flex:0 0 50%;max-width:50%}:host(.gas-col-pad-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-pad-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-pad-9){flex:0 0 75%;max-width:75%}:host(.gas-col-pad-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-pad-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-pad-12){flex:0 0 100%;max-width:100%}:host(.gas-col-pad-auto){max-width:auto;flex-basis:auto}}@media (max-width:767px){:host(.gas-col-mobile-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-mobile-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-mobile-3){flex:0 0 25%;max-width:25%}:host(.gas-col-mobile-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-mobile-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-mobile-6){flex:0 0 50%;max-width:50%}:host(.gas-col-mobile-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-mobile-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-mobile-9){flex:0 0 75%;max-width:75%}:host(.gas-col-mobile-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-mobile-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-mobile-12){flex:0 0 100%;max-width:100%}:host(.gas-col-mobile-auto){max-width:auto;flex-basis:auto}}.col-content{position:relative}.col-content button{border:none;background-color:transparent}.col-content .icon-del{position:absolute;top:0;right:0;padding:0;border:none}.col-content .icon-add{padding:0}.col-content.style-has-remove ::ng-deep input{padding-right:23px}.col-content.style-has-remove ::ng-deep .nx-formfield__label{background-color:#fff;width:calc(100% - 20px)}@media screen and (min-width:1025px){.col-content.style-has-remove ::ng-deep .nx-formfield__label{width:calc(100% - 2vw)}}:host .col-content.style-has-add{margin-top:-20px}"]
            }] }
];
UiFormLayoutColComponent.ctorParameters = () => [];
UiFormLayoutColComponent.propDecorators = {
    colPC: [{ type: Input }],
    colNB: [{ type: Input }],
    colPad: [{ type: Input }],
    colMobile: [{ type: Input }],
    hasAdd: [{ type: Input }],
    hasRemove: [{ type: Input }],
    translateText: [{ type: Input }],
    isGroupCol: [{ type: Input }],
    id: [{ type: Input }],
    add: [{ type: Output }],
    remove: [{ type: Output }],
    classColRender: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    UiFormLayoutColComponent.prototype.colPC;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.colNB;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.colPad;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.colMobile;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.hasAdd;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.hasRemove;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.translateText;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.isGroupCol;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.id;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.add;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.remove;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutColComponent.prototype.classColPc;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutColComponent.prototype.classColNb;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutColComponent.prototype.classColPad;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutColComponent.prototype.classColMobile;
    /**
     * @type {?}
     * @private
     */
    UiFormLayoutColComponent.prototype.classColGroup;
    /** @type {?} */
    UiFormLayoutColComponent.prototype.classColRender;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1sYXlvdXQtY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktZm9ybS1sYXlvdXQtY29sL3VpLWZvcm0tbGF5b3V0LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBMEQsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBc0IsTUFBTSxlQUFlLENBQUM7O0FBVWpNLE1BQU07SUFvQko7UUFuQlMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFZLEtBQUssQ0FBQyxDQUFFLHdCQUF3QjtRQUdyRCxRQUFHLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXpDLENBQUM7Ozs7O0lBTWpCLFFBQVE7UUFDTiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN4SCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsK3JCQUFrRDtnQkFHbEQsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSztpQkFDTCxLQUFLO2tCQUVMLE1BQU07cUJBQ04sTUFBTTs2QkFVUCxXQUFXLFNBQUMsT0FBTzs7OztJQXJCbkIseUNBQTRCOztJQUM1Qix5Q0FBNEI7O0lBQzVCLDBDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQywwQ0FBaUM7O0lBQ2pDLDZDQUFvQzs7SUFDcEMsaURBQXVDOztJQUN2Qyw4Q0FBcUM7O0lBQ3JDLHNDQUFvQjs7SUFFcEIsdUNBQXNEOztJQUN0RCwwQ0FBeUQ7Ozs7O0lBRXpELDhDQUEyQjs7Ozs7SUFDM0IsOENBQTJCOzs7OztJQUMzQiwrQ0FBNEI7Ozs7O0lBQzVCLGtEQUErQjs7Ozs7SUFDL0IsaURBQThCOztJQUkvQixrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxFbGVtZW50UmVmLFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFVpRGF0YUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWRhdGEtZ3JvdXAvdWktZGF0YS1ncm91cC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktZm9ybS1sYXlvdXQtY29sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWZvcm0tbGF5b3V0LWNvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWZvcm0tbGF5b3V0LWNvbC5jb21wb25lbnQuc2NzcyddLFxuICBcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVaUZvcm1MYXlvdXRDb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xQQzogbnVtYmVyID0gMTI7XG4gIEBJbnB1dCgpIGNvbE5COiBudW1iZXIgPSAxMjtcbiAgQElucHV0KCkgY29sUGFkOiBudW1iZXIgPSAxMjtcbiAgQElucHV0KCkgY29sTW9iaWxlOiBudW1iZXIgPSAxMjtcbiAgQElucHV0KCkgaGFzQWRkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc1JlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0cmFuc2xhdGVUZXh0OiBzdHJpbmcgPSAnQWRkJztcbiAgQElucHV0KCkgaXNHcm91cENvbDogYm9vbGVhbiA9IGZhbHNlOyAgLy8gY29sIGluY2x1ZGUgYXBwLWdyb3VwXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBjb2wgY29udHJvbFxuICBwcml2YXRlIGNsYXNzQ29sUGM6IHN0cmluZztcbiAgcHJpdmF0ZSBjbGFzc0NvbE5iOiBzdHJpbmc7XG4gIHByaXZhdGUgY2xhc3NDb2xQYWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjbGFzc0NvbE1vYmlsZTogc3RyaW5nO1xuICBwcml2YXRlIGNsYXNzQ29sR3JvdXA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICAvLyByZW5kZXIgY29sXG4gQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzQ29sUmVuZGVyO1xuICAvLyBAQ29udGVudENoaWxkcmVuKFVpRGF0YUdyb3VwQ29tcG9uZW50KSBidG5EZWw6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnRuRGVsKTtcbiAgICB0aGlzLmNsYXNzQ29sUGMgPSAnIGdhcy1jb2wtJyArIHRoaXMuY29sUEM7XG4gICAgdGhpcy5jbGFzc0NvbE5iID0gJyBnYXMtY29sLW5iLScgKyB0aGlzLmNvbE5CO1xuICAgIHRoaXMuY2xhc3NDb2xQYWQgPSAnIGdhcy1jb2wtcGFkLScgKyB0aGlzLmNvbFBhZDtcbiAgICB0aGlzLmNsYXNzQ29sTW9iaWxlID0gJyBnYXMtY29sLW1vYmlsZS0nICsgdGhpcy5jb2xNb2JpbGU7XG4gICAgdGhpcy5jbGFzc0NvbEdyb3VwID0gdGhpcy5pc0dyb3VwQ29sID8gJyBzdHlsZS1jb2wtZ3JvdXAnIDogJydcbiAgICB0aGlzLmNsYXNzQ29sUmVuZGVyID0gdGhpcy5jbGFzc0NvbFBjICsgdGhpcy5jbGFzc0NvbE5iICsgdGhpcy5jbGFzc0NvbFBhZCArIHRoaXMuY2xhc3NDb2xNb2JpbGUgKyB0aGlzLmNsYXNzQ29sR3JvdXA7XG4gIH1cblxuICBhZGRIYW5kbGVyKCkge1xuICAgIHRoaXMuYWRkLmVtaXQoKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIoKSB7XG4gICAgdGhpcy5yZW1vdmUuZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==