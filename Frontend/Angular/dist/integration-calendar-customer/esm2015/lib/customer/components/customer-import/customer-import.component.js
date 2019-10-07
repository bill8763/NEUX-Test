/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { Language, showRuleToken } from '@allianzSND/core';
export class CustomerImportComponent {
    /**
     * @param {?} showRule
     */
    constructor(showRule) {
        this.showRule = showRule;
        this.importContractMap = new Map();
        this.importCustomer = new EventEmitter();
        this.language = new Language();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    doImport() {
        /** @type {?} */
        let importItems = new Array();
        this.importContractMap.forEach((/**
         * @param {?} group
         * @param {?} groupName
         * @return {?}
         */
        (group, groupName) => {
            group.getItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                console.debug(item);
                if (item.isCheck) {
                    importItems.push(item);
                }
            }));
        }));
        this.importCustomer.emit(importItems);
    }
    /**
     * @param {?} firstname
     * @param {?} lastname
     * @return {?}
     */
    toDisplayName(firstname, lastname) {
        if (this.showRule)
            return this.showRule.convertName(firstname, lastname);
        else
            return `${lastname} ${firstname}`;
    }
}
CustomerImportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-import',
                template: " <!-- data -->\n <ng-container *ngIf=\"importContractMap\">\n   <ng-container *ngFor=\"let group of importContractMap | keyvalue\">\n     <ng-container *ngIf=\"group.value.isShow\">\n       <app-ui-list-data2>\n         <ng-container textType=\"title\">{{group.key}}</ng-container>\n         <!-- data -->\n         <ng-container textType=\"data\">\n           <ng-container *ngFor=\"let item of group.value.getItems\">\n             <ng-container *ngIf=\"item.isShow\">\n               <app-ui-form-checkbox3 [isDisable]=\"false\" [(nxValue)]=\"item.isCheck\" (onClick)=\"doImport()\">\n                 <ng-container checkboxText=\"style3\">{{toDisplayName(item.FirstName,item.LastName)}}</ng-container>\n               </app-ui-form-checkbox3>\n             </ng-container>\n           </ng-container>\n         </ng-container>\n         <!-- end of data -->\n       </app-ui-list-data2>\n     </ng-container>\n   </ng-container>\n </ng-container>\n <!-- end of data -->",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}"]
            }] }
];
CustomerImportComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
];
CustomerImportComponent.propDecorators = {
    importContractMap: [{ type: Input }],
    importCustomer: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItaW1wb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItaW1wb3J0L2N1c3RvbWVyLWltcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQWUsUUFBUSxFQUFFLGFBQWEsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBUWxGLE1BQU07Ozs7SUFXSixZQUM2QyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBVHhELHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO1FBRzFELG1CQUFjLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdkUsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFJdkMsQ0FBQzs7OztJQUVMLFFBQVE7SUFFUixDQUFDOzs7O0lBR0QsUUFBUTs7WUFFRixXQUFXLEdBQXVCLElBQUksS0FBSyxFQUFlO1FBRTlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsS0FBMEIsRUFBRSxTQUFpQixFQUFFLEVBQUU7WUFDL0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUFpQixFQUFFLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLEVBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLFNBQWlCLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztZQUV0RCxPQUFPLEdBQUcsUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IseTlCQUErQzs7YUFFaEQ7Ozs0Q0FhSSxRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7OztnQ0FWbEMsS0FBSzs2QkFHTCxNQUFNOzs7O0lBSFAsb0RBQ2tFOzs7OztJQUVsRSxpREFDOEU7O0lBRzlFLDJDQUEyQzs7Ozs7SUFHekMsMkNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udGFjdEl0ZW0sIExhbmd1YWdlLCBzaG93UnVsZVRva2VuLCBzaG93UnVsZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJJbXBvcnRHcm91cCB9IGZyb20gJy4uL2JlYW4vY3VzdG9tZXItaW1wb3J0LWdyb3VwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWltcG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1pbXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1pbXBvcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckltcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGltcG9ydENvbnRyYWN0TWFwID0gbmV3IE1hcDxzdHJpbmcsIEN1c3RvbWVySW1wb3J0R3JvdXA+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgaW1wb3J0Q3VzdG9tZXI6IEV2ZW50RW1pdHRlcjxBcnJheTxDb250YWN0SXRlbT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBzaG93UnVsZTogc2hvd1J1bGVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cblxuICBkb0ltcG9ydCgpIHtcblxuICAgIGxldCBpbXBvcnRJdGVtczogQXJyYXk8Q29udGFjdEl0ZW0+ID0gbmV3IEFycmF5PENvbnRhY3RJdGVtPigpO1xuXG4gICAgdGhpcy5pbXBvcnRDb250cmFjdE1hcC5mb3JFYWNoKChncm91cDogQ3VzdG9tZXJJbXBvcnRHcm91cCwgZ3JvdXBOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGdyb3VwLmdldEl0ZW1zLmZvckVhY2goKGl0ZW06IENvbnRhY3RJdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoaXRlbSk7XG4gICAgICAgIGlmIChpdGVtLmlzQ2hlY2spIHtcbiAgICAgICAgICBpbXBvcnRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgdGhpcy5pbXBvcnRDdXN0b21lci5lbWl0KGltcG9ydEl0ZW1zKTtcbiAgfVxuXG4gIHRvRGlzcGxheU5hbWUoZmlyc3RuYW1lOiBzdHJpbmcsIGxhc3RuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zaG93UnVsZSlcbiAgICAgIHJldHVybiB0aGlzLnNob3dSdWxlLmNvbnZlcnROYW1lKGZpcnN0bmFtZSwgbGFzdG5hbWUpO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBgJHtsYXN0bmFtZX0gJHtmaXJzdG5hbWV9YDtcbiAgfVxuXG59XG4iXX0=