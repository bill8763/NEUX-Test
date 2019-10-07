/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
//import { UiDataGroupComponent } from './components/ui-data-group/ui-data-group.component';
var UiFormLayoutColComponent = /** @class */ (function () {
    function UiFormLayoutColComponent() {
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
    // @ContentChildren(UiDataGroupComponent) btnDel: QueryList<TemplateRef<any>>;
    /**
     * @return {?}
     */
    UiFormLayoutColComponent.prototype.ngOnInit = 
    // @ContentChildren(UiDataGroupComponent) btnDel: QueryList<TemplateRef<any>>;
    /**
     * @return {?}
     */
    function () {
        // console.log(this.btnDel);
        this.classColPc = ' gas-col-' + this.colPC;
        this.classColNb = ' gas-col-nb-' + this.colNB;
        this.classColPad = ' gas-col-pad-' + this.colPad;
        this.classColMobile = ' gas-col-mobile-' + this.colMobile;
        this.classColGroup = this.isGroupCol ? ' style-col-group' : '';
        this.classColRender = this.classColPc + this.classColNb + this.classColPad + this.classColMobile + this.classColGroup;
    };
    /**
     * @return {?}
     */
    UiFormLayoutColComponent.prototype.addHandler = /**
     * @return {?}
     */
    function () {
        this.add.emit();
    };
    /**
     * @return {?}
     */
    UiFormLayoutColComponent.prototype.removeHandler = /**
     * @return {?}
     */
    function () {
        this.remove.emit();
    };
    UiFormLayoutColComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-form-layout-col',
                    template: "<div class=\"col-content\" [ngClass]=\"[(hasAdd ? ' style-has-add': ''), (hasRemove ? ' style-has-remove': '')]\">\n  <ng-content></ng-content>\n  <button *ngIf=\"hasAdd\" class=\"btn-style icon-add\" (actionClick)=\"addHandler()\" [id]=\"'btn_'+id\" Action action=\"id+'Add'\">\n    <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-add-blue.svg\">\n      <ng-container textType=\"linktext\">{{translateText}}</ng-container>\n    </app-ui-link>\n  </button>\n  <button class=\"btn-style icon-del\" *ngIf=\"hasRemove\" (click)=\"removeHandler()\">\n    <app-ui-link [isUnderLine]=\"false\" imgSrc=\"./assets/img/icon-minus-blue.svg\">\n    </app-ui-link>\n  </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host([class*=gas-col-]){display:inline-flex;vertical-align:top;box-sizing:border-box;text-align:left;padding-right:6px;padding-left:6px;margin-bottom:1.875rem}:host([class*=gas-col-]) .col-content{display:inline-block;max-width:100%;width:100%}:host([class*=gas-col-]).style-col-group{margin-bottom:0}:host(.gas-col-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-3){flex:0 0 25%;max-width:25%}:host(.gas-col-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-6){flex:0 0 50%;max-width:50%}:host(.gas-col-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-9){flex:0 0 75%;max-width:75%}:host(.gas-col-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-12){flex:0 0 100%;max-width:100%}@media (max-width:1199px){:host(.gas-col-nb-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-nb-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-nb-3){flex:0 0 25%;max-width:25%}:host(.gas-col-nb-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-nb-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-nb-6){flex:0 0 50%;max-width:50%}:host(.gas-col-nb-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-nb-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-nb-9){flex:0 0 75%;max-width:75%}:host(.gas-col-nb-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-nb-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-nb-12){flex:0 0 100%;max-width:100%}:host(.gas-col-nb-auto){max-width:auto;flex-basis:auto}}@media (max-width:1023px){:host(.gas-col-pad-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-pad-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-pad-3){flex:0 0 25%;max-width:25%}:host(.gas-col-pad-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-pad-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-pad-6){flex:0 0 50%;max-width:50%}:host(.gas-col-pad-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-pad-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-pad-9){flex:0 0 75%;max-width:75%}:host(.gas-col-pad-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-pad-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-pad-12){flex:0 0 100%;max-width:100%}:host(.gas-col-pad-auto){max-width:auto;flex-basis:auto}}@media (max-width:767px){:host(.gas-col-mobile-1){flex:0 0 8.33333%;max-width:8.33333%}:host(.gas-col-mobile-2){flex:0 0 16.66667%;max-width:16.66667%}:host(.gas-col-mobile-3){flex:0 0 25%;max-width:25%}:host(.gas-col-mobile-4){flex:0 0 33.33333%;max-width:33.33333%}:host(.gas-col-mobile-5){flex:0 0 41.66667%;max-width:41.66667%}:host(.gas-col-mobile-6){flex:0 0 50%;max-width:50%}:host(.gas-col-mobile-7){flex:0 0 58.33333%;max-width:58.33333%}:host(.gas-col-mobile-8){flex:0 0 66.66667%;max-width:66.66667%}:host(.gas-col-mobile-9){flex:0 0 75%;max-width:75%}:host(.gas-col-mobile-10){flex:0 0 83.33333%;max-width:83.33333%}:host(.gas-col-mobile-11){flex:0 0 91.66667%;max-width:91.66667%}:host(.gas-col-mobile-12){flex:0 0 100%;max-width:100%}:host(.gas-col-mobile-auto){max-width:auto;flex-basis:auto}}.col-content{position:relative}.col-content button{border:none;background-color:transparent}.col-content .icon-del{position:absolute;top:0;right:0;padding:0;border:none}.col-content .icon-add{padding:0}.col-content.style-has-remove ::ng-deep input{padding-right:23px}.col-content.style-has-remove ::ng-deep .nx-formfield__label{background-color:#fff;width:calc(100% - 20px)}@media screen and (min-width:1025px){.col-content.style-has-remove ::ng-deep .nx-formfield__label{width:calc(100% - 2vw)}}:host .col-content.style-has-add{margin-top:-20px}"]
                }] }
    ];
    UiFormLayoutColComponent.ctorParameters = function () { return []; };
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
    return UiFormLayoutColComponent;
}());
export { UiFormLayoutColComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZm9ybS1sYXlvdXQtY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktZm9ybS1sYXlvdXQtY29sL3VpLWZvcm0tbGF5b3V0LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBMEQsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBc0IsTUFBTSxlQUFlLENBQUM7O0FBR2pNO0lBMkJFO1FBbkJTLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQVcsS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBWSxLQUFLLENBQUMsQ0FBRSx3QkFBd0I7UUFHckQsUUFBRyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVF6QyxDQUFDO0lBR2pCLDhFQUE4RTs7Ozs7SUFHOUUsMkNBQVE7Ozs7O0lBQVI7UUFDRSw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN4SCxDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsZ0RBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLCtyQkFBa0Q7b0JBR2xELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7d0JBRUUsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBRUwsTUFBTTt5QkFDTixNQUFNO2lDQVVQLFdBQVcsU0FBQyxPQUFPOztJQXNCckIsK0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQTVDWSx3QkFBd0I7OztJQUNuQyx5Q0FBNEI7O0lBQzVCLHlDQUE0Qjs7SUFDNUIsMENBQTZCOztJQUM3Qiw2Q0FBZ0M7O0lBQ2hDLDBDQUFpQzs7SUFDakMsNkNBQW9DOztJQUNwQyxpREFBdUM7O0lBQ3ZDLDhDQUFxQzs7SUFDckMsc0NBQW9COztJQUVwQix1Q0FBc0Q7O0lBQ3RELDBDQUF5RDs7Ozs7SUFFekQsOENBQTJCOzs7OztJQUMzQiw4Q0FBMkI7Ozs7O0lBQzNCLCtDQUE0Qjs7Ozs7SUFDNUIsa0RBQStCOzs7OztJQUMvQixpREFBOEI7O0lBSS9CLGtEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LEVsZW1lbnRSZWYsUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgVWlEYXRhR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZGF0YS1ncm91cC91aS1kYXRhLWdyb3VwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS1mb3JtLWxheW91dC1jb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktZm9ybS1sYXlvdXQtY29sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktZm9ybS1sYXlvdXQtY29sLmNvbXBvbmVudC5zY3NzJ10sXG4gIFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpRm9ybUxheW91dENvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbFBDOiBudW1iZXIgPSAxMjtcbiAgQElucHV0KCkgY29sTkI6IG51bWJlciA9IDEyO1xuICBASW5wdXQoKSBjb2xQYWQ6IG51bWJlciA9IDEyO1xuICBASW5wdXQoKSBjb2xNb2JpbGU6IG51bWJlciA9IDEyO1xuICBASW5wdXQoKSBoYXNBZGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGFzUmVtb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRyYW5zbGF0ZVRleHQ6IHN0cmluZyA9ICdBZGQnO1xuICBASW5wdXQoKSBpc0dyb3VwQ29sOiBib29sZWFuID0gZmFsc2U7ICAvLyBjb2wgaW5jbHVkZSBhcHAtZ3JvdXBcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIGNvbCBjb250cm9sXG4gIHByaXZhdGUgY2xhc3NDb2xQYzogc3RyaW5nO1xuICBwcml2YXRlIGNsYXNzQ29sTmI6IHN0cmluZztcbiAgcHJpdmF0ZSBjbGFzc0NvbFBhZDogc3RyaW5nO1xuICBwcml2YXRlIGNsYXNzQ29sTW9iaWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgY2xhc3NDb2xHcm91cDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIC8vIHJlbmRlciBjb2xcbiBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3NDb2xSZW5kZXI7XG4gIC8vIEBDb250ZW50Q2hpbGRyZW4oVWlEYXRhR3JvdXBDb21wb25lbnQpIGJ0bkRlbDogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5idG5EZWwpO1xuICAgIHRoaXMuY2xhc3NDb2xQYyA9ICcgZ2FzLWNvbC0nICsgdGhpcy5jb2xQQztcbiAgICB0aGlzLmNsYXNzQ29sTmIgPSAnIGdhcy1jb2wtbmItJyArIHRoaXMuY29sTkI7XG4gICAgdGhpcy5jbGFzc0NvbFBhZCA9ICcgZ2FzLWNvbC1wYWQtJyArIHRoaXMuY29sUGFkO1xuICAgIHRoaXMuY2xhc3NDb2xNb2JpbGUgPSAnIGdhcy1jb2wtbW9iaWxlLScgKyB0aGlzLmNvbE1vYmlsZTtcbiAgICB0aGlzLmNsYXNzQ29sR3JvdXAgPSB0aGlzLmlzR3JvdXBDb2wgPyAnIHN0eWxlLWNvbC1ncm91cCcgOiAnJ1xuICAgIHRoaXMuY2xhc3NDb2xSZW5kZXIgPSB0aGlzLmNsYXNzQ29sUGMgKyB0aGlzLmNsYXNzQ29sTmIgKyB0aGlzLmNsYXNzQ29sUGFkICsgdGhpcy5jbGFzc0NvbE1vYmlsZSArIHRoaXMuY2xhc3NDb2xHcm91cDtcbiAgfVxuXG4gIGFkZEhhbmRsZXIoKSB7XG4gICAgdGhpcy5hZGQuZW1pdCgpO1xuICB9XG5cbiAgcmVtb3ZlSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlbW92ZS5lbWl0KCk7XG4gIH1cblxufVxuIl19