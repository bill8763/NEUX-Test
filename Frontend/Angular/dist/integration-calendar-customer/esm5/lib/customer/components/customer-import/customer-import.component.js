/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { Language, showRuleToken } from '@allianzSND/core';
var CustomerImportComponent = /** @class */ (function () {
    function CustomerImportComponent(showRule) {
        this.showRule = showRule;
        this.importContractMap = new Map();
        this.importCustomer = new EventEmitter();
        this.language = new Language();
    }
    /**
     * @return {?}
     */
    CustomerImportComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CustomerImportComponent.prototype.doImport = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var importItems = new Array();
        this.importContractMap.forEach((/**
         * @param {?} group
         * @param {?} groupName
         * @return {?}
         */
        function (group, groupName) {
            group.getItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                console.debug(item);
                if (item.isCheck) {
                    importItems.push(item);
                }
            }));
        }));
        this.importCustomer.emit(importItems);
    };
    /**
     * @param {?} firstname
     * @param {?} lastname
     * @return {?}
     */
    CustomerImportComponent.prototype.toDisplayName = /**
     * @param {?} firstname
     * @param {?} lastname
     * @return {?}
     */
    function (firstname, lastname) {
        if (this.showRule)
            return this.showRule.convertName(firstname, lastname);
        else
            return lastname + " " + firstname;
    };
    CustomerImportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-import',
                    template: " <!-- data -->\n <ng-container *ngIf=\"importContractMap\">\n   <ng-container *ngFor=\"let group of importContractMap | keyvalue\">\n     <ng-container *ngIf=\"group.value.isShow\">\n       <app-ui-list-data2>\n         <ng-container textType=\"title\">{{group.key}}</ng-container>\n         <!-- data -->\n         <ng-container textType=\"data\">\n           <ng-container *ngFor=\"let item of group.value.getItems\">\n             <ng-container *ngIf=\"item.isShow\">\n               <app-ui-form-checkbox3 [isDisable]=\"false\" [(nxValue)]=\"item.isCheck\" (onClick)=\"doImport()\">\n                 <ng-container checkboxText=\"style3\">{{toDisplayName(item.FirstName,item.LastName)}}</ng-container>\n               </app-ui-form-checkbox3>\n             </ng-container>\n           </ng-container>\n         </ng-container>\n         <!-- end of data -->\n       </app-ui-list-data2>\n     </ng-container>\n   </ng-container>\n </ng-container>\n <!-- end of data -->",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}"]
                }] }
    ];
    CustomerImportComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
    ]; };
    CustomerImportComponent.propDecorators = {
        importContractMap: [{ type: Input }],
        importCustomer: [{ type: Output }]
    };
    return CustomerImportComponent;
}());
export { CustomerImportComponent };
if (false) {
    /** @type {?} */
    CustomerImportComponent.prototype.importContractMap;
    /**
     * @type {?}
     * @private
     */
    CustomerImportComponent.prototype.importCustomer;
    /** @type {?} */
    CustomerImportComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    CustomerImportComponent.prototype.showRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItaW1wb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItaW1wb3J0L2N1c3RvbWVyLWltcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQWUsUUFBUSxFQUFFLGFBQWEsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBR2xGO0lBZ0JFLGlDQUM2QyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBVHhELHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO1FBRzFELG1CQUFjLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdkUsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFJdkMsQ0FBQzs7OztJQUVMLDBDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFHRCwwQ0FBUTs7O0lBQVI7O1lBRU0sV0FBVyxHQUF1QixJQUFJLEtBQUssRUFBZTtRQUU5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLEtBQTBCLEVBQUUsU0FBaUI7WUFDM0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxJQUFpQjtnQkFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN4QjtZQUNILENBQUMsRUFBQyxDQUFBO1FBQ0osQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFRCwrQ0FBYTs7Ozs7SUFBYixVQUFjLFNBQWlCLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztZQUV0RCxPQUFVLFFBQVEsU0FBSSxTQUFXLENBQUM7SUFDdEMsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix5OUJBQStDOztpQkFFaEQ7OztnREFhSSxRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7OztvQ0FWbEMsS0FBSztpQ0FHTCxNQUFNOztJQXNDVCw4QkFBQztDQUFBLEFBaERELElBZ0RDO1NBM0NZLHVCQUF1Qjs7O0lBRWxDLG9EQUNrRTs7Ozs7SUFFbEUsaURBQzhFOztJQUc5RSwyQ0FBMkM7Ozs7O0lBR3pDLDJDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3RJdGVtLCBMYW5ndWFnZSwgc2hvd1J1bGVUb2tlbiwgc2hvd1J1bGUgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVySW1wb3J0R3JvdXAgfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWltcG9ydC1ncm91cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1pbXBvcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItaW1wb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItaW1wb3J0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJJbXBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbXBvcnRDb250cmFjdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBDdXN0b21lckltcG9ydEdyb3VwPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcml2YXRlIGltcG9ydEN1c3RvbWVyOiBFdmVudEVtaXR0ZXI8QXJyYXk8Q29udGFjdEl0ZW0+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dSdWxlVG9rZW4pIHByaXZhdGUgc2hvd1J1bGU6IHNob3dSdWxlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG5cbiAgZG9JbXBvcnQoKSB7XG5cbiAgICBsZXQgaW1wb3J0SXRlbXM6IEFycmF5PENvbnRhY3RJdGVtPiA9IG5ldyBBcnJheTxDb250YWN0SXRlbT4oKTtcblxuICAgIHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuZm9yRWFjaCgoZ3JvdXA6IEN1c3RvbWVySW1wb3J0R3JvdXAsIGdyb3VwTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBncm91cC5nZXRJdGVtcy5mb3JFYWNoKChpdGVtOiBDb250YWN0SXRlbSkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGl0ZW0pO1xuICAgICAgICBpZiAoaXRlbS5pc0NoZWNrKSB7XG4gICAgICAgICAgaW1wb3J0SXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHRoaXMuaW1wb3J0Q3VzdG9tZXIuZW1pdChpbXBvcnRJdGVtcyk7XG4gIH1cblxuICB0b0Rpc3BsYXlOYW1lKGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc2hvd1J1bGUpXG4gICAgICByZXR1cm4gdGhpcy5zaG93UnVsZS5jb252ZXJ0TmFtZShmaXJzdG5hbWUsIGxhc3RuYW1lKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gYCR7bGFzdG5hbWV9ICR7Zmlyc3RuYW1lfWA7XG4gIH1cblxufVxuIl19