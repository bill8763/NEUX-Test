/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter, Optional, Inject } from '@angular/core';
import { MetaService, Language, FormMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor } from '@allianzSND/core';
import { CustomerFilterCriteria } from '../bean/customer-filter-criteria';
import { Subject } from 'rxjs';
import { customerFilterMetaControllerToken } from '../../injectionToken/injection-token';
import { takeUntil } from 'rxjs/operators';
export class CustomerFilterComponent extends FormMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     */
    constructor(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.metaService = metaService;
        this.customMetaController = customMetaController;
        //Input criteria
        this._criteria = new CustomerFilterCriteria();
        this.doneCriteria = new EventEmitter();
        this.language = new Language();
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    get criteria() {
        return this._criteria;
    }
    /**
     * @param {?} criteria
     * @return {?}
     */
    set criteria(criteria) {
        console.log("set criteria:", criteria);
        console.log("PresetJson:", criteria.toMetaJSON());
        this._data = this.convertCriteriaToObject(criteria);
        this.waitUntilMetaLoaded().then((/**
         * @return {?}
         */
        () => {
            console.log("this.metaConfig:", this.metaConfig);
            this.onDataUpdated();
        }));
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get columnConfig() {
        return this.metaConfig.Columns;
    }
    /**
     * @return {?}
     */
    get footerConfig() {
        return this.metaConfig.Footer;
    }
    /**
     * @return {?}
     */
    getMetaParams() {
        return null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        if (this.clear) {
            this.clear
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.clearCriteria();
            }));
        }
        if (this.save) {
            this.save
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.saveCriteria();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        if (this.customMetaController) {
            this.customMetaController.btnClick(type, id, this._data);
        }
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        if (this.customMetaController)
            return this.customMetaController.onValidateAll(this._data, this.validationResult);
        else
            return true;
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupId
     * @param {?=} index
     * @return {?}
     */
    onValueChange(column, value, groupId = null, index = -1) {
        if (this.customMetaController) {
            this.customMetaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
        }
        else {
            if (Array.isArray(this._data[column])) {
                if (this._data[column].indexOf(value) > -1) {
                    this._data[column] = this._data[column].filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x !== value));
                }
                else {
                    this._data[column] = [...this._data[column], value];
                }
                this._data["AsPreset"] = false;
            }
            else {
                this._data[column] = value;
            }
        }
        console.log("this.Data:", this._data);
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerFilter';
    }
    /**
     * @return {?}
     */
    onDataUpdated() {
        super.onDataUpdated();
        this.fillDefaultVal();
        console.log("Filter Data Updated:", this._data);
        if (this.customMetaController) {
            this.customMetaController.onDataUpdated(this._data);
        }
    }
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    getCheckboxValue(column, value) {
        return this._data[column] && this._data[column].indexOf(value) > -1;
    }
    /**
     * @private
     * @return {?}
     */
    fillDefaultVal() {
        this._data = Object.assign(this.getDefaultData(), this._data);
    }
    /**
     * @private
     * @return {?}
     */
    getDefaultData() {
        /** @type {?} */
        let defaultObj = this.metaConfig.Columns.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => {
            acc[cur] = [];
            return acc;
        }), {});
        /** @type {?} */
        let footerObj = this.metaConfig.Footer.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.type === 'Checkbox')).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => {
            acc[cur] = false;
            return acc;
        }), {});
        return Object.assign(defaultObj, footerObj);
    }
    /**
     * @private
     * @return {?}
     */
    clearCriteria() {
        this._data = Object.assign(this._data, this.getDefaultData());
    }
    /**
     * @private
     * @return {?}
     */
    saveCriteria() {
        this.doneCriteria.emit(this.convertToCriteria());
    }
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    convertCriteriaToObject(criteria) {
        return Object.assign({}, criteria.toMetaJSON());
    }
    /**
     * @private
     * @return {?}
     */
    convertToCriteria() {
        /** @type {?} */
        let criteria = new CustomerFilterCriteria();
        this.metaConfig.Columns.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).forEach((/**
         * @param {?} colID
         * @return {?}
         */
        colID => {
            if (this._data[colID].length > 0)
                criteria.addCriteriaCols(colID, this._data[colID]);
        }));
        this.metaConfig.Footer.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id)).forEach((/**
         * @param {?} colID
         * @return {?}
         */
        colID => {
            criteria.setOption(colID, this._data[colID]);
        }));
        return criteria;
    }
}
CustomerFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-filter',
                template: "<!-- popu customer filter content -->\n<div *ngIf=\"isMetaLoaded()\" class=\"layout-cp-all ui-filter-block\">\n  <!-- chekboxes -->\n  <div *ngFor=\"let col of columnConfig\" class=\"data-filter-item\">\n    <!-- title -->\n    <div class=\"filter-title-block\">\n      <h3>{{col.name |translate }}</h3>\n    </div>\n    <!-- end of title -->\n    <!-- checkbox -->\n    <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n      <ng-container textType=\"originContent\">\n        <ng-container *ngFor=\"let option of data[col.id+'Option']; index as j\">\n          <app-ui-form-checkbox2 [nxValue]=\"getCheckboxValue(col.id,option.id)\"\n            (nxValueChange)=\"onChange(col.id,option.id)\" [isDisable]=\"false\">\n            <ng-container checkboxText=\"style1\">{{option.name}}</ng-container>\n          </app-ui-form-checkbox2>\n        </ng-container>\n      </ng-container>\n    </app-ui-collapse-group>\n    <!-- end of checkbox -->\n  </div>\n\n  <!-- end of chekboxes -->\n  <!-- setting block -->\n  <div class=\"setting-block\">\n    <ng-container *ngFor=\"let col of footerConfig\">\n      <app-ui-form-checkbox *ngIf=\"col.type==='Checkbox'\" [nxValue]=\"data[col.id]\"\n        (nxValueChange)=\"onValueChange(col.id,$event)\" [isDisable]=\"false\">\n        <ng-container checkboxText=\"style2\">{{col.name |translate }}</ng-container>\n      </app-ui-form-checkbox>\n    </ng-container>\n  </div>\n  <!-- end of setting block -->\n</div>\n<!-- end of popup customer filter content -->\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%;height:100%}.ui-filter-block{display:inline-block;width:100%;height:100%}.ui-filter-block .filter-title-block h3{font-size:1rem;font-weight:700;line-height:28px;padding-bottom:5px}.ui-filter-block .data-filter-item{margin-bottom:30px}.setting-block{display:block;width:100%;padding-bottom:30px}"]
            }] }
];
CustomerFilterComponent.ctorParameters = () => [
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: InputExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerFilterMetaControllerToken,] }] }
];
CustomerFilterComponent.propDecorators = {
    clear: [{ type: Input }],
    save: [{ type: Input }],
    open: [{ type: Input }],
    criteria: [{ type: Input }],
    doneCriteria: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CustomerFilterComponent.prototype.clear;
    /** @type {?} */
    CustomerFilterComponent.prototype.save;
    /** @type {?} */
    CustomerFilterComponent.prototype.open;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype._criteria;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype.doneCriteria;
    /** @type {?} */
    CustomerFilterComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @protected
     */
    CustomerFilterComponent.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterComponent.prototype.customMetaController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItZmlsdGVyL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBa0IsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFjLE1BQU0sa0JBQWtCLENBQUM7QUFDOUosT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0MsTUFBTSw4QkFBK0IsU0FBUSxpQkFBaUI7Ozs7Ozs7O0lBcUQ1RCxZQUNZLFdBQXdCLEVBQ2xDLGtCQUFzQyxFQUN0QyxVQUE2QixFQUM3QixZQUEyQixFQUNvQyxvQkFBb0M7UUFFbkcsS0FBSyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFOdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFJNkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFnQjtRQXpDckcsZ0JBQWdCO1FBQ1IsY0FBUyxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQThCekMsaUJBQVksR0FBeUMsSUFBSSxZQUFZLEVBQUUs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U0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFsTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHlnREFBK0M7O2FBRWhEOzs7WUFWUSxXQUFXO1lBQStDLGtCQUFrQjtZQUFFLGlCQUFpQjtZQUFFLGFBQWE7NENBcUVsSCxRQUFRLFlBQUksTUFBTSxTQUFDLGlDQUFpQzs7O29CQXBEdEQsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7dUJBT0wsS0FBSzsyQkE0QkwsTUFBTTs7OztJQXpDUCx3Q0FDMkI7O0lBRTNCLHVDQUMwQjs7SUFFMUIsdUNBQzBCOzs7OztJQUsxQiw0Q0FBaUQ7Ozs7O0lBNkJqRCwrQ0FDZ0Y7O0lBZWhGLDJDQUEyQzs7Ozs7SUFDM0MsK0NBQW9EOzs7OztJQVZsRCw4Q0FBa0M7Ozs7O0lBSWxDLHVEQUFtRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YVNlcnZpY2UsIExhbmd1YWdlLCBNZXRhQ29udHJvbGxlciwgRm9ybU1ldGFDb21wb25lbnQsIFByb2ZpbGVDb2RlU2VydmljZSwgRGVmYXVsdE1ldGFQYXJzZXIsIElucHV0RXhlY3V0b3IsIE1ldGFDb2x1bW4gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjdXN0b21lckZpbHRlck1ldGFDb250cm9sbGVyVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRm9ybU1ldGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuXG5cbiAgLy9zdWJqZWN0IHRvIHN1YnNjcmliZSBmb3Igb3BlbiAmIHNhdmUgJiBjbGVhclxuICBASW5wdXQoKVxuICBwdWJsaWMgY2xlYXI6IFN1YmplY3Q8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2F2ZTogU3ViamVjdDxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcGVuOiBTdWJqZWN0PGFueT47XG5cblxuXG4gIC8vSW5wdXQgY3JpdGVyaWFcbiAgcHJpdmF0ZSBfY3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICBASW5wdXQoKVxuICBnZXQgY3JpdGVyaWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyaXRlcmlhO1xuICB9XG5cbiAgc2V0IGNyaXRlcmlhKGNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhKSB7XG4gICAgY29uc29sZS5sb2coXCJzZXQgY3JpdGVyaWE6XCIsIGNyaXRlcmlhKTtcbiAgICBjb25zb2xlLmxvZyhcIlByZXNldEpzb246XCIsIGNyaXRlcmlhLnRvTWV0YUpTT04oKSk7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuY29udmVydENyaXRlcmlhVG9PYmplY3QoY3JpdGVyaWEpO1xuICAgIHRoaXMud2FpdFVudGlsTWV0YUxvYWRlZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1ldGFDb25maWc6XCIsIHRoaXMubWV0YUNvbmZpZyk7XG4gICAgICB0aGlzLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgY29sdW1uQ29uZmlnKCk6IEFycmF5PE1ldGFDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnM7XG4gIH1cblxuICBnZXQgZm9vdGVyQ29uZmlnKCk6IEFycmF5PE1ldGFDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uZmlnLkZvb3RlcjtcbiAgfVxuXG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgZG9uZUNyaXRlcmlhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJGaWx0ZXJDcml0ZXJpYT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBtZXRhRXhlY3V0b3I6IElucHV0RXhlY3V0b3IsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lckZpbHRlck1ldGFDb250cm9sbGVyVG9rZW4pIHByaXZhdGUgY3VzdG9tTWV0YUNvbnRyb2xsZXI6IE1ldGFDb250cm9sbGVyXG4gICkge1xuICAgIHN1cGVyKG1ldGFTZXJ2aWNlLCBwcm9maWxlQ29kZVNlcnZpY2UsIG1ldGFQYXJzZXIsIG1ldGFFeGVjdXRvcik7XG4gIH1cblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBnZXRNZXRhUGFyYW1zKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAodGhpcy5jbGVhcikge1xuICAgICAgdGhpcy5jbGVhclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsZWFyQ3JpdGVyaWEoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zYXZlKSB7XG4gICAgICB0aGlzLnNhdmVcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zYXZlQ3JpdGVyaWEoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLmJ0bkNsaWNrKHR5cGUsIGlkLCB0aGlzLl9kYXRhKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uVmFsaWRhdGVBbGwoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21NZXRhQ29udHJvbGxlci5vblZhbGlkYXRlQWxsKHRoaXMuX2RhdGEsIHRoaXMudmFsaWRhdGlvblJlc3VsdCk7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBncm91cElkID0gbnVsbCwgaW5kZXggPSAtMSkge1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uVmFsdWVDaGFuZ2UoY29sdW1uLCB2YWx1ZSwgZ3JvdXBJZCwgaW5kZXgsIHRoaXMuX2RhdGEsIHRoaXMudmFsaWRhdGlvblJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVtjb2x1bW5dKSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0YVtjb2x1bW5dLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgICB0aGlzLl9kYXRhW2NvbHVtbl0gPSB0aGlzLl9kYXRhW2NvbHVtbl0uZmlsdGVyKHggPT4geCAhPT0gdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RhdGFbY29sdW1uXSA9IFsuLi50aGlzLl9kYXRhW2NvbHVtbl0sIHZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGFbXCJBc1ByZXNldFwiXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2RhdGFbY29sdW1uXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuRGF0YTpcIiwgdGhpcy5fZGF0YSk7XG4gIH1cblxuICBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuICdjdXN0b21lckZpbHRlcidcbiAgfVxuXG4gIG9uRGF0YVVwZGF0ZWQoKSB7XG4gICAgc3VwZXIub25EYXRhVXBkYXRlZCgpO1xuICAgIHRoaXMuZmlsbERlZmF1bHRWYWwoKTtcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBEYXRhIFVwZGF0ZWQ6XCIsIHRoaXMuX2RhdGEpO1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uRGF0YVVwZGF0ZWQodGhpcy5fZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hWYWx1ZShjb2x1bW46IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhW2NvbHVtbl0gJiYgdGhpcy5fZGF0YVtjb2x1bW5dLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cblxuXG4gIHByaXZhdGUgZmlsbERlZmF1bHRWYWwoKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24odGhpcy5nZXREZWZhdWx0RGF0YSgpLCB0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdERhdGEoKSB7XG4gICAgbGV0IGRlZmF1bHRPYmogPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5tYXAoeCA9PiB4LmlkKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICBhY2NbY3VyXSA9IFtdO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgbGV0IGZvb3Rlck9iaiA9IHRoaXMubWV0YUNvbmZpZy5Gb290ZXIuZmlsdGVyKHggPT4geC50eXBlID09PSAnQ2hlY2tib3gnKS5tYXAoeCA9PiB4LmlkKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICBhY2NbY3VyXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9iaiwgZm9vdGVyT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDcml0ZXJpYSgpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLl9kYXRhLCB0aGlzLmdldERlZmF1bHREYXRhKCkpO1xuICB9XG5cblxuICBwcml2YXRlIHNhdmVDcml0ZXJpYSgpIHtcbiAgICB0aGlzLmRvbmVDcml0ZXJpYS5lbWl0KHRoaXMuY29udmVydFRvQ3JpdGVyaWEoKSk7XG4gIH1cblxuXG4gIHByaXZhdGUgY29udmVydENyaXRlcmlhVG9PYmplY3QoY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjcml0ZXJpYS50b01ldGFKU09OKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9Dcml0ZXJpYSgpIHtcbiAgICBsZXQgY3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLm1hcCh4ID0+IHguaWQpLmZvckVhY2goY29sSUQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RhdGFbY29sSURdLmxlbmd0aCA+IDApXG4gICAgICAgIGNyaXRlcmlhLmFkZENyaXRlcmlhQ29scyhjb2xJRCwgdGhpcy5fZGF0YVtjb2xJRF0pO1xuICAgIH0pO1xuICAgIHRoaXMubWV0YUNvbmZpZy5Gb290ZXIubWFwKHggPT4geC5pZCkuZm9yRWFjaChjb2xJRCA9PiB7XG4gICAgICBjcml0ZXJpYS5zZXRPcHRpb24oY29sSUQsIHRoaXMuX2RhdGFbY29sSURdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjcml0ZXJpYTtcbiAgfVxufVxuIl19