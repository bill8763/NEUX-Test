/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Language } from '@allianzSND/core';
var CustomerImportComponent = /** @class */ (function () {
    function CustomerImportComponent() {
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
    CustomerImportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-import',
                    template: " <!-- data -->\n<ng-container *ngIf=\"importContractMap\">\n    <ng-container *ngFor=\"let group of importContractMap | keyvalue\">\n        <ng-container *ngIf=\"group.value.isShow\">\n            <app-ui-list-data2>\n                <ng-container textType=\"title\">{{group.key}}</ng-container>\n                <!-- data -->\n                <ng-container textType=\"data\">\n                  <ng-container *ngFor=\"let item of group.value.getItems\">\n                    <ng-container *ngIf=\"item.isShow\">\n                            <app-ui-form-checkbox3 [isDisable]=\"false\" [(nxValue)]=\"item.isCheck\" (onClick)=\"doImport()\">\n                              <ng-container checkboxText=\"style3\">{{item.lastname + item.firstname}}</ng-container>\n                            </app-ui-form-checkbox3>\n                    </ng-container>                  \n                  </ng-container>          \n                </ng-container>\n                <!-- end of data -->\n              </app-ui-list-data2>          \n        </ng-container>\n    </ng-container>    \n</ng-container>\n<!-- end of data -->",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}"]
                }] }
    ];
    CustomerImportComponent.ctorParameters = function () { return []; };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItaW1wb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2N1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY3VzdG9tZXItaW1wb3J0L2N1c3RvbWVyLWltcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFlLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3pEO0lBZ0JFO1FBUk8sc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQThCLENBQUM7UUFHekQsbUJBQWMsR0FBcUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd2RSxhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUUzQixDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFHRCwwQ0FBUTs7O0lBQVI7O1lBRU0sV0FBVyxHQUF3QixJQUFJLEtBQUssRUFBZTtRQUUvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLEtBQTBCLEVBQUMsU0FBaUI7WUFDMUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxJQUFrQjtnQkFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hCO1lBQ0gsQ0FBQyxFQUFDLENBQUE7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNm1DQUErQzs7aUJBRWhEOzs7O29DQUdFLEtBQUs7aUNBR0wsTUFBTTs7SUE2QlQsOEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWxDWSx1QkFBdUI7OztJQUVsQyxvREFDaUU7Ozs7O0lBRWpFLGlEQUM4RTs7SUFHOUUsMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udGFjdEl0ZW0sIExhbmd1YWdlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21lckltcG9ydEdyb3VwIH0gZnJvbSAnLi4vYmVhbi9jdXN0b21lci1pbXBvcnQtZ3JvdXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItaW1wb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWltcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWltcG9ydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVySW1wb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgIFxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbXBvcnRDb250cmFjdE1hcCA9IG5ldyBNYXA8c3RyaW5nLEN1c3RvbWVySW1wb3J0R3JvdXA+KCk7XG4gIFxuICBAT3V0cHV0KClcbiAgcHJpdmF0ZSBpbXBvcnRDdXN0b21lcjogRXZlbnRFbWl0dGVyPEFycmF5PENvbnRhY3RJdGVtPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgXG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICB9XG5cblxuICBkb0ltcG9ydCgpIHtcblxuICAgIGxldCBpbXBvcnRJdGVtcyA6IEFycmF5PENvbnRhY3RJdGVtPiA9IG5ldyBBcnJheTxDb250YWN0SXRlbT4oKTtcblxuICAgIHRoaXMuaW1wb3J0Q29udHJhY3RNYXAuZm9yRWFjaCgoZ3JvdXA6IEN1c3RvbWVySW1wb3J0R3JvdXAsZ3JvdXBOYW1lOiBzdHJpbmcpID0+IHsgICAgICBcbiAgICAgIGdyb3VwLmdldEl0ZW1zLmZvckVhY2goKGl0ZW0gOiBDb250YWN0SXRlbSkgPT4geyAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKGl0ZW0pOyAgICAgXG4gICAgICAgIGlmKGl0ZW0uaXNDaGVjaykge1xuICAgICAgICAgIGltcG9ydEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLmltcG9ydEN1c3RvbWVyLmVtaXQoaW1wb3J0SXRlbXMpO1xuICB9XG4gIFxufVxuIl19