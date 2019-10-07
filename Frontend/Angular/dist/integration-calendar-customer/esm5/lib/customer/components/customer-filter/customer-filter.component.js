/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, Input, EventEmitter, Optional, Inject } from '@angular/core';
import { MetaService, Language, FormMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor } from '@allianzSND/core';
import { CustomerFilterCriteria } from '../bean/customer-filter-criteria';
import { Subject } from 'rxjs';
import { customerFilterMetaControllerToken } from '../../injectionToken/injection-token';
import { takeUntil } from 'rxjs/operators';
var CustomerFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerFilterComponent, _super);
    function CustomerFilterComponent(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        var _this = _super.call(this, metaService, profileCodeService, metaParser, metaExecutor) || this;
        _this.metaService = metaService;
        _this.customMetaController = customMetaController;
        //Input criteria
        _this._criteria = new CustomerFilterCriteria();
        _this.doneCriteria = new EventEmitter();
        _this.language = new Language();
        _this.unsubscribe$ = new Subject();
        return _this;
    }
    Object.defineProperty(CustomerFilterComponent.prototype, "criteria", {
        get: /**
         * @return {?}
         */
        function () {
            return this._criteria;
        },
        set: /**
         * @param {?} criteria
         * @return {?}
         */
        function (criteria) {
            var _this = this;
            console.log("set criteria:", criteria);
            console.log("PresetJson:", criteria.toMetaJSON());
            this._data = this.convertCriteriaToObject(criteria);
            this.waitUntilMetaLoaded().then((/**
             * @return {?}
             */
            function () {
                console.log("this.metaConfig:", _this.metaConfig);
                _this.onDataUpdated();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerFilterComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerFilterComponent.prototype, "columnConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerFilterComponent.prototype, "footerConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Footer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.getMetaParams = /**
     * @return {?}
     */
    function () {
        return null;
    };
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.clear) {
            this.clear
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.clearCriteria();
            }));
        }
        if (this.save) {
            this.save
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.saveCriteria();
            }));
        }
    };
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    CustomerFilterComponent.prototype.btnClick = /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    function (type, id) {
        if (this.customMetaController) {
            this.customMetaController.btnClick(type, id, this._data);
        }
    };
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.onValidateAll = /**
     * @return {?}
     */
    function () {
        if (this.customMetaController)
            return this.customMetaController.onValidateAll(this._data, this.validationResult);
        else
            return true;
    };
    /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupId
     * @param {?=} index
     * @return {?}
     */
    CustomerFilterComponent.prototype.onValueChange = /**
     * @param {?} column
     * @param {?} value
     * @param {?=} groupId
     * @param {?=} index
     * @return {?}
     */
    function (column, value, groupId, index) {
        if (groupId === void 0) { groupId = null; }
        if (index === void 0) { index = -1; }
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
                    function (x) { return x !== value; }));
                }
                else {
                    this._data[column] = tslib_1.__spread(this._data[column], [value]);
                }
                this._data["AsPreset"] = false;
            }
            else {
                this._data[column] = value;
            }
        }
        console.log("this.Data:", this._data);
    };
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.getMetaID = /**
     * @return {?}
     */
    function () {
        return 'customerFilter';
    };
    /**
     * @return {?}
     */
    CustomerFilterComponent.prototype.onDataUpdated = /**
     * @return {?}
     */
    function () {
        _super.prototype.onDataUpdated.call(this);
        this.fillDefaultVal();
        console.log("Filter Data Updated:", this._data);
        if (this.customMetaController) {
            this.customMetaController.onDataUpdated(this._data);
        }
    };
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    CustomerFilterComponent.prototype.getCheckboxValue = /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    function (column, value) {
        return this._data[column] && this._data[column].indexOf(value) > -1;
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.fillDefaultVal = /**
     * @private
     * @return {?}
     */
    function () {
        this._data = Object.assign(this.getDefaultData(), this._data);
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.getDefaultData = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultObj = this.metaConfig.Columns.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; })).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        function (acc, cur) {
            acc[cur] = [];
            return acc;
        }), {});
        /** @type {?} */
        var footerObj = this.metaConfig.Footer.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.type === 'Checkbox'; })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; })).reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        function (acc, cur) {
            acc[cur] = false;
            return acc;
        }), {});
        return Object.assign(defaultObj, footerObj);
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.clearCriteria = /**
     * @private
     * @return {?}
     */
    function () {
        this._data = Object.assign(this._data, this.getDefaultData());
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.saveCriteria = /**
     * @private
     * @return {?}
     */
    function () {
        this.doneCriteria.emit(this.convertToCriteria());
    };
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    CustomerFilterComponent.prototype.convertCriteriaToObject = /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        return Object.assign({}, criteria.toMetaJSON());
    };
    /**
     * @private
     * @return {?}
     */
    CustomerFilterComponent.prototype.convertToCriteria = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var criteria = new CustomerFilterCriteria();
        this.metaConfig.Columns.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; })).forEach((/**
         * @param {?} colID
         * @return {?}
         */
        function (colID) {
            if (_this._data[colID].length > 0)
                criteria.addCriteriaCols(colID, _this._data[colID]);
        }));
        this.metaConfig.Footer.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; })).forEach((/**
         * @param {?} colID
         * @return {?}
         */
        function (colID) {
            criteria.setOption(colID, _this._data[colID]);
        }));
        return criteria;
    };
    CustomerFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-filter',
                    template: "<!-- popu customer filter content -->\n<div *ngIf=\"isMetaLoaded()\" class=\"layout-cp-all ui-filter-block\">\n  <!-- chekboxes -->\n  <div *ngFor=\"let col of columnConfig\" class=\"data-filter-item\">\n    <!-- title -->\n    <div class=\"filter-title-block\">\n      <h3>{{col.name |translate }}</h3>\n    </div>\n    <!-- end of title -->\n    <!-- checkbox -->\n    <app-ui-collapse-group [translateMore]=\"language.moreOption | translate\">\n      <ng-container textType=\"originContent\">\n        <ng-container *ngFor=\"let option of data[col.id+'Option']; index as j\">\n          <app-ui-form-checkbox2 [nxValue]=\"getCheckboxValue(col.id,option.id)\"\n            (nxValueChange)=\"onChange(col.id,option.id)\" [isDisable]=\"false\">\n            <ng-container checkboxText=\"style1\">{{option.name}}</ng-container>\n          </app-ui-form-checkbox2>\n        </ng-container>\n      </ng-container>\n    </app-ui-collapse-group>\n    <!-- end of checkbox -->\n  </div>\n\n  <!-- end of chekboxes -->\n  <!-- setting block -->\n  <div class=\"setting-block\">\n    <ng-container *ngFor=\"let col of footerConfig\">\n      <app-ui-form-checkbox *ngIf=\"col.type==='Checkbox'\" [nxValue]=\"data[col.id]\"\n        (nxValueChange)=\"onValueChange(col.id,$event)\" [isDisable]=\"false\">\n        <ng-container checkboxText=\"style2\">{{col.name |translate }}</ng-container>\n      </app-ui-form-checkbox>\n    </ng-container>\n  </div>\n  <!-- end of setting block -->\n</div>\n<!-- end of popup customer filter content -->\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}:host{display:inline-block;width:100%;height:100%}.ui-filter-block{display:inline-block;width:100%;height:100%}.ui-filter-block .filter-title-block h3{font-size:1rem;font-weight:700;line-height:28px;padding-bottom:5px}.ui-filter-block .data-filter-item{margin-bottom:30px}.setting-block{display:block;width:100%;padding-bottom:30px}"]
                }] }
    ];
    CustomerFilterComponent.ctorParameters = function () { return [
        { type: MetaService },
        { type: ProfileCodeService },
        { type: DefaultMetaParser },
        { type: InputExecutor },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerFilterMetaControllerToken,] }] }
    ]; };
    CustomerFilterComponent.propDecorators = {
        clear: [{ type: Input }],
        save: [{ type: Input }],
        open: [{ type: Input }],
        criteria: [{ type: Input }],
        doneCriteria: [{ type: Output }]
    };
    return CustomerFilterComponent;
}(FormMetaComponent));
export { CustomerFilterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItZmlsdGVyL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQWtCLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBYyxNQUFNLGtCQUFrQixDQUFDO0FBQzlKLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBSzZDLG1EQUFpQjtJQXFENUQsaUNBQ1ksV0FBd0IsRUFDbEMsa0JBQXNDLEVBQ3RDLFVBQTZCLEVBQzdCLFlBQTJCLEVBQ29DLG9CQUFvQztRQUxyRyxZQU9FLGtCQUFNLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLFNBQ2pFO1FBUFcsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFJNkIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFnQjtRQXpDckcsZ0JBQWdCO1FBQ1IsZUFBUyxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQThCekMsa0JBQVksR0FBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWV6RSxjQUFR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QyxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2pELFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQWxNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IseWdEQUErQzs7aUJBRWhEOzs7Z0JBVlEsV0FBVztnQkFBK0Msa0JBQWtCO2dCQUFFLGlCQUFpQjtnQkFBRSxhQUFhO2dEQXFFbEgsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQ0FBaUM7Ozt3QkFwRHRELEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLOzJCQU9MLEtBQUs7K0JBNEJMLE1BQU07O0lBK0lULDhCQUFDO0NBQUEsQUFuTUQsQ0FLNkMsaUJBQWlCLEdBOEw3RDtTQTlMWSx1QkFBdUI7OztJQU1sQyx3Q0FDMkI7O0lBRTNCLHVDQUMwQjs7SUFFMUIsdUNBQzBCOzs7OztJQUsxQiw0Q0FBaUQ7Ozs7O0lBNkJqRCwrQ0FDZ0Y7O0lBZWhGLDJDQUEyQzs7Ozs7SUFDM0MsK0NBQW9EOzs7OztJQVZsRCw4Q0FBa0M7Ozs7O0lBSWxDLHVEQUFtRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YVNlcnZpY2UsIExhbmd1YWdlLCBNZXRhQ29udHJvbGxlciwgRm9ybU1ldGFDb21wb25lbnQsIFByb2ZpbGVDb2RlU2VydmljZSwgRGVmYXVsdE1ldGFQYXJzZXIsIElucHV0RXhlY3V0b3IsIE1ldGFDb2x1bW4gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tICcuLi9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjdXN0b21lckZpbHRlck1ldGFDb250cm9sbGVyVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRm9ybU1ldGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuXG5cbiAgLy9zdWJqZWN0IHRvIHN1YnNjcmliZSBmb3Igb3BlbiAmIHNhdmUgJiBjbGVhclxuICBASW5wdXQoKVxuICBwdWJsaWMgY2xlYXI6IFN1YmplY3Q8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2F2ZTogU3ViamVjdDxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcGVuOiBTdWJqZWN0PGFueT47XG5cblxuXG4gIC8vSW5wdXQgY3JpdGVyaWFcbiAgcHJpdmF0ZSBfY3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICBASW5wdXQoKVxuICBnZXQgY3JpdGVyaWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyaXRlcmlhO1xuICB9XG5cbiAgc2V0IGNyaXRlcmlhKGNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhKSB7XG4gICAgY29uc29sZS5sb2coXCJzZXQgY3JpdGVyaWE6XCIsIGNyaXRlcmlhKTtcbiAgICBjb25zb2xlLmxvZyhcIlByZXNldEpzb246XCIsIGNyaXRlcmlhLnRvTWV0YUpTT04oKSk7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuY29udmVydENyaXRlcmlhVG9PYmplY3QoY3JpdGVyaWEpO1xuICAgIHRoaXMud2FpdFVudGlsTWV0YUxvYWRlZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1ldGFDb25maWc6XCIsIHRoaXMubWV0YUNvbmZpZyk7XG4gICAgICB0aGlzLm9uRGF0YVVwZGF0ZWQoKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgY29sdW1uQ29uZmlnKCk6IEFycmF5PE1ldGFDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnM7XG4gIH1cblxuICBnZXQgZm9vdGVyQ29uZmlnKCk6IEFycmF5PE1ldGFDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uZmlnLkZvb3RlcjtcbiAgfVxuXG5cbiAgQE91dHB1dCgpXG4gIHByaXZhdGUgZG9uZUNyaXRlcmlhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tZXJGaWx0ZXJDcml0ZXJpYT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBtZXRhRXhlY3V0b3I6IElucHV0RXhlY3V0b3IsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lckZpbHRlck1ldGFDb250cm9sbGVyVG9rZW4pIHByaXZhdGUgY3VzdG9tTWV0YUNvbnRyb2xsZXI6IE1ldGFDb250cm9sbGVyXG4gICkge1xuICAgIHN1cGVyKG1ldGFTZXJ2aWNlLCBwcm9maWxlQ29kZVNlcnZpY2UsIG1ldGFQYXJzZXIsIG1ldGFFeGVjdXRvcik7XG4gIH1cblxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBnZXRNZXRhUGFyYW1zKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAodGhpcy5jbGVhcikge1xuICAgICAgdGhpcy5jbGVhclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsZWFyQ3JpdGVyaWEoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zYXZlKSB7XG4gICAgICB0aGlzLnNhdmVcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zYXZlQ3JpdGVyaWEoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGJ0bkNsaWNrKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLmJ0bkNsaWNrKHR5cGUsIGlkLCB0aGlzLl9kYXRhKTtcbiAgICB9XG4gIH1cblxuXG4gIG9uVmFsaWRhdGVBbGwoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21NZXRhQ29udHJvbGxlci5vblZhbGlkYXRlQWxsKHRoaXMuX2RhdGEsIHRoaXMudmFsaWRhdGlvblJlc3VsdCk7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBncm91cElkID0gbnVsbCwgaW5kZXggPSAtMSkge1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uVmFsdWVDaGFuZ2UoY29sdW1uLCB2YWx1ZSwgZ3JvdXBJZCwgaW5kZXgsIHRoaXMuX2RhdGEsIHRoaXMudmFsaWRhdGlvblJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVtjb2x1bW5dKSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0YVtjb2x1bW5dLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgICB0aGlzLl9kYXRhW2NvbHVtbl0gPSB0aGlzLl9kYXRhW2NvbHVtbl0uZmlsdGVyKHggPT4geCAhPT0gdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RhdGFbY29sdW1uXSA9IFsuLi50aGlzLl9kYXRhW2NvbHVtbl0sIHZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGFbXCJBc1ByZXNldFwiXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2RhdGFbY29sdW1uXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRoaXMuRGF0YTpcIiwgdGhpcy5fZGF0YSk7XG4gIH1cblxuICBnZXRNZXRhSUQoKSB7XG4gICAgcmV0dXJuICdjdXN0b21lckZpbHRlcidcbiAgfVxuXG4gIG9uRGF0YVVwZGF0ZWQoKSB7XG4gICAgc3VwZXIub25EYXRhVXBkYXRlZCgpO1xuICAgIHRoaXMuZmlsbERlZmF1bHRWYWwoKTtcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBEYXRhIFVwZGF0ZWQ6XCIsIHRoaXMuX2RhdGEpO1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uRGF0YVVwZGF0ZWQodGhpcy5fZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hWYWx1ZShjb2x1bW46IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhW2NvbHVtbl0gJiYgdGhpcy5fZGF0YVtjb2x1bW5dLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cblxuXG4gIHByaXZhdGUgZmlsbERlZmF1bHRWYWwoKSB7XG4gICAgdGhpcy5fZGF0YSA9IE9iamVjdC5hc3NpZ24odGhpcy5nZXREZWZhdWx0RGF0YSgpLCB0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdERhdGEoKSB7XG4gICAgbGV0IGRlZmF1bHRPYmogPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5tYXAoeCA9PiB4LmlkKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICBhY2NbY3VyXSA9IFtdO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgbGV0IGZvb3Rlck9iaiA9IHRoaXMubWV0YUNvbmZpZy5Gb290ZXIuZmlsdGVyKHggPT4geC50eXBlID09PSAnQ2hlY2tib3gnKS5tYXAoeCA9PiB4LmlkKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICBhY2NbY3VyXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9iaiwgZm9vdGVyT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDcml0ZXJpYSgpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLl9kYXRhLCB0aGlzLmdldERlZmF1bHREYXRhKCkpO1xuICB9XG5cblxuICBwcml2YXRlIHNhdmVDcml0ZXJpYSgpIHtcbiAgICB0aGlzLmRvbmVDcml0ZXJpYS5lbWl0KHRoaXMuY29udmVydFRvQ3JpdGVyaWEoKSk7XG4gIH1cblxuXG4gIHByaXZhdGUgY29udmVydENyaXRlcmlhVG9PYmplY3QoY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjcml0ZXJpYS50b01ldGFKU09OKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9Dcml0ZXJpYSgpIHtcbiAgICBsZXQgY3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zLm1hcCh4ID0+IHguaWQpLmZvckVhY2goY29sSUQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RhdGFbY29sSURdLmxlbmd0aCA+IDApXG4gICAgICAgIGNyaXRlcmlhLmFkZENyaXRlcmlhQ29scyhjb2xJRCwgdGhpcy5fZGF0YVtjb2xJRF0pO1xuICAgIH0pO1xuICAgIHRoaXMubWV0YUNvbmZpZy5Gb290ZXIubWFwKHggPT4geC5pZCkuZm9yRWFjaChjb2xJRCA9PiB7XG4gICAgICBjcml0ZXJpYS5zZXRPcHRpb24oY29sSUQsIHRoaXMuX2RhdGFbY29sSURdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjcml0ZXJpYTtcbiAgfVxufVxuIl19