/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Inject, Optional, Output, EventEmitter } from '@angular/core';
import { MetaService, FormMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor } from '@allianzSND/core';
import { customerContactEditMetaControllerToken } from '../../injectionToken/injection-token';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var CustomerContactEditComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerContactEditComponent, _super);
    function CustomerContactEditComponent(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        var _this = _super.call(this, metaService, profileCodeService, metaParser, metaExecutor) || this;
        _this.customMetaController = customMetaController;
        _this.customerClientID = '';
        _this.unsubscribe$ = new Subject();
        _this.save = new EventEmitter();
        return _this;
    }
    Object.defineProperty(CustomerContactEditComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var defaultObj = {};
            if (this.metaConfig)
                defaultObj = this.metaConfig.Columns.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.id; })).reduce((/**
                 * @param {?} acc
                 * @param {?} current
                 * @return {?}
                 */
                function (acc, current) {
                    acc[current] = '';
                    return acc;
                }), {});
            if (value != null)
                this._data = Object.assign(defaultObj, value);
            else
                this._data = defaultObj;
            console.log("set contact edit data:", this._data);
            if (this.customMetaController)
                this.customMetaController.onDataUpdated(this._data);
            this.customerClientID = this._data.CustomerClientID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerContactEditComponent.prototype, "columnConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.metaConfig.Columns;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerContactEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.saveSubject) {
            this.saveSubject
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.onBtnClick('submit', 'save');
            }));
        }
    };
    /**
     * @return {?}
     */
    CustomerContactEditComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    CustomerContactEditComponent.prototype.getMetaParams = /**
     * @return {?}
     */
    function () {
        return {
            CustomerClientID: this.customerClientID
        };
    };
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    CustomerContactEditComponent.prototype.btnClick = /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    function (type, id) {
        if (type === 'submit') {
            this.save.emit(this._data);
        }
        if (this.customMetaController)
            this.customMetaController.btnClick(type, id, this._data);
    };
    /**
     * @return {?}
     */
    CustomerContactEditComponent.prototype.getMetaID = /**
     * @return {?}
     */
    function () {
        return 'customerContactEdit';
    };
    /**
     * @return {?}
     */
    CustomerContactEditComponent.prototype.onValidateAll = /**
     * @return {?}
     */
    function () {
        if (!this.validationResult.isTrue()) {
            //If basic validation has error.
            if (this.validationResult.isError('Note'))
                alert("Note " + this.validationResult.getErrorMsg("Note"));
            return false;
        }
        else {
            //Do custom validation.
            /** @type {?} */
            var result = true;
            if (this.customMetaController)
                result = result && this.customMetaController.onValidateAll(this._data, this.validationResult);
            return result;
        }
    };
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    CustomerContactEditComponent.prototype.onValueChange = /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    function (column, value, groupId, index) {
        //Trigger other column values
        if (this.customMetaController)
            this.customMetaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    };
    CustomerContactEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-customer-contact-edit',
                    template: "<ng-container *ngIf=\"data && isMetaLoaded()\">\n  <ng-container *ngFor=\"let col of columnConfig\">\n    <div class=\"date-block\">\n      <div class=\"txt\" *ngIf=\"col.type == 'Label'\">{{data[col.id]}}</div>\n    </div>\n    <div *ngIf=\"col.type == 'Textarea'\" class=\"textarea-block\">\n      <snd-ui-form-textarea [placeholder]=\"col.placeholder | translate\" [maxLength]=\"col.maxLength\"\n        [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\" [height]=\"'180px'\" [id]=\"col.id\"></snd-ui-form-textarea>\n    </div>\n  </ng-container>\n</ng-container>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.date-block{position:relative;margin-bottom:5px}.date-block .date-data{pointer-events:none;background-color:#fff;position:absolute;top:0;height:100%;font-size:.875rem;font-weight:700}.date-block .txt{font-size:.875rem;font-weight:700;line-height:2}"]
                }] }
    ];
    CustomerContactEditComponent.ctorParameters = function () { return [
        { type: MetaService },
        { type: ProfileCodeService },
        { type: DefaultMetaParser },
        { type: InputExecutor },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerContactEditMetaControllerToken,] }] }
    ]; };
    CustomerContactEditComponent.propDecorators = {
        data: [{ type: Input }],
        saveSubject: [{ type: Input }],
        save: [{ type: Output }]
    };
    return CustomerContactEditComponent;
}(FormMetaComponent));
export { CustomerContactEditComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerContactEditComponent.prototype.customerClientID;
    /**
     * @type {?}
     * @private
     */
    CustomerContactEditComponent.prototype.unsubscribe$;
    /** @type {?} */
    CustomerContactEditComponent.prototype.saveSubject;
    /** @type {?} */
    CustomerContactEditComponent.prototype.save;
    /**
     * @type {?}
     * @private
     */
    CustomerContactEditComponent.prototype.customMetaController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1lZGl0L2N1c3RvbWVyLWNvbnRhY3QtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLFdBQVcsRUFBa0IsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFjLE1BQU0sa0JBQWtCLENBQUM7QUFDcEosT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFLa0Qsd0RBQWlCO0lBbUNqRSxzQ0FDRSxXQUF3QixFQUN4QixrQkFBc0MsRUFDdEMsVUFBNkIsRUFDN0IsWUFBMkIsRUFDeUMsb0JBQW9DO1FBTDFHLFlBT0Usa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsU0FDakU7UUFIcUUsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFnQjtRQVhsRyxzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsa0JBQVksR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUdoRCxVQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBVXZELENBQUM7SUF4Q0Qsc0JBQ1csOENBQUk7Ozs7UUFpQmY7WUFDRSxPQUFPLElBQUksQ0FBQyxL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S0FBSyxDQUFDO1NBQ2Q7YUFDSTs7O2dCQUVDLE1BQU0sR0FBRyxJQUFJO1lBQ2pCLElBQUksSUFBSSxDQUFDLG9CQUFvQjtnQkFDM0IsTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEcsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7Ozs7O0lBQ0Qsb0RBQWE7Ozs7Ozs7SUFBYixVQUFjLE1BQWMsRUFBRSxLQUFVLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDdEUsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxDQUFDLG9CQUFvQjtZQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlHLENBQUM7O2dCQXRHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsMGxCQUFxRDs7aUJBRXREOzs7Z0JBVFEsV0FBVztnQkFBcUMsa0JBQWtCO2dCQUFFLGlCQUFpQjtnQkFBRSxhQUFhO2dEQWtEeEcsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQ0FBc0M7Ozt1QkFyQzNELEtBQUs7OEJBNkJMLEtBQUs7dUJBQ0wsTUFBTTs7SUFrRVQsbUNBQUM7Q0FBQSxBQXhHRCxDQUtrRCxpQkFBaUIsR0FtR2xFO1NBbkdZLDRCQUE0Qjs7Ozs7O0lBNkJ2Qyx3REFBOEI7Ozs7O0lBQzlCLG9EQUEwRDs7SUFFMUQsbURBQW1DOztJQUNuQyw0Q0FBdUQ7Ozs7O0lBT3JELDREQUF3RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0LCBPcHRpb25hbCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YVNlcnZpY2UsIE1ldGFDb250cm9sbGVyLCBGb3JtTWV0YUNvbXBvbmVudCwgUHJvZmlsZUNvZGVTZXJ2aWNlLCBEZWZhdWx0TWV0YVBhcnNlciwgSW5wdXRFeGVjdXRvciwgTWV0YUNvbHVtbiB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgY3VzdG9tZXJDb250YWN0RWRpdE1ldGFDb250cm9sbGVyVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItY29udGFjdC1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLWNvbnRhY3QtZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLWNvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ29udGFjdEVkaXRDb21wb25lbnQgZXh0ZW5kcyBGb3JtTWV0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZSkge1xuICAgIGxldCBkZWZhdWx0T2JqID0ge307XG4gICAgaWYgKHRoaXMubWV0YUNvbmZpZylcbiAgICAgIGRlZmF1bHRPYmogPSB0aGlzLm1ldGFDb25maWcuQ29sdW1ucy5tYXAoeCA9PiB4LmlkKS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICBhY2NbY3VycmVudF0gPSAnJztcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRPYmosIHZhbHVlKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLl9kYXRhID0gZGVmYXVsdE9iajtcbiAgICBjb25zb2xlLmxvZyhcInNldCBjb250YWN0IGVkaXQgZGF0YTpcIiwgdGhpcy5fZGF0YSk7XG4gICAgaWYgKHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uRGF0YVVwZGF0ZWQodGhpcy5fZGF0YSk7XG4gICAgdGhpcy5jdXN0b21lckNsaWVudElEID0gdGhpcy5fZGF0YS5DdXN0b21lckNsaWVudElEO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IGNvbHVtbkNvbmZpZygpOiBBcnJheTxNZXRhQ29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbmZpZy5Db2x1bW5zO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXN0b21lckNsaWVudElEID0gJyc7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBASW5wdXQoKSBzYXZlU3ViamVjdDogU3ViamVjdDxhbnk+O1xuICBAT3V0cHV0KCkgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWV0YVNlcnZpY2U6IE1ldGFTZXJ2aWNlLFxuICAgIHByb2ZpbGVDb2RlU2VydmljZTogUHJvZmlsZUNvZGVTZXJ2aWNlLFxuICAgIG1ldGFQYXJzZXI6IERlZmF1bHRNZXRhUGFyc2VyLFxuICAgIG1ldGFFeGVjdXRvcjogSW5wdXRFeGVjdXRvcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGN1c3RvbWVyQ29udGFjdEVkaXRNZXRhQ29udHJvbGxlclRva2VuKSBwcml2YXRlIGN1c3RvbU1ldGFDb250cm9sbGVyOiBNZXRhQ29udHJvbGxlclxuICApIHtcbiAgICBzdXBlcihtZXRhU2VydmljZSwgcHJvZmlsZUNvZGVTZXJ2aWNlLCBtZXRhUGFyc2VyLCBtZXRhRXhlY3V0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAodGhpcy5zYXZlU3ViamVjdCkge1xuICAgICAgdGhpcy5zYXZlU3ViamVjdFxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQnRuQ2xpY2soJ3N1Ym1pdCcsICdzYXZlJyk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBnZXRNZXRhUGFyYW1zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBDdXN0b21lckNsaWVudElEOiB0aGlzLmN1c3RvbWVyQ2xpZW50SURcbiAgICB9XG4gIH1cblxuICBidG5DbGljayh0eXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgIHRoaXMuc2F2ZS5lbWl0KHRoaXMuX2RhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXN0b21NZXRhQ29udHJvbGxlcilcbiAgICAgIHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIuYnRuQ2xpY2sodHlwZSwgaWQsIHRoaXMuX2RhdGEpO1xuXG4gIH1cbiAgZ2V0TWV0YUlEKCkge1xuICAgIHJldHVybiAnY3VzdG9tZXJDb250YWN0RWRpdCc7XG4gIH1cbiAgb25WYWxpZGF0ZUFsbCgpIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGlvblJlc3VsdC5pc1RydWUoKSkge1xuICAgICAgLy9JZiBiYXNpYyB2YWxpZGF0aW9uIGhhcyBlcnJvci5cbiAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25SZXN1bHQuaXNFcnJvcignTm90ZScpKVxuICAgICAgICBhbGVydChcIk5vdGUgXCIgKyB0aGlzLnZhbGlkYXRpb25SZXN1bHQuZ2V0RXJyb3JNc2coXCJOb3RlXCIpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL0RvIGN1c3RvbSB2YWxpZGF0aW9uLlxuICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5jdXN0b21NZXRhQ29udHJvbGxlcilcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmIHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIub25WYWxpZGF0ZUFsbCh0aGlzLl9kYXRhLCB0aGlzLnZhbGlkYXRpb25SZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgb25WYWx1ZUNoYW5nZShjb2x1bW46IHN0cmluZywgdmFsdWU6IGFueSwgZ3JvdXBJZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgLy9UcmlnZ2VyIG90aGVyIGNvbHVtbiB2YWx1ZXNcbiAgICBpZiAodGhpcy5jdXN0b21NZXRhQ29udHJvbGxlcilcbiAgICAgIHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIub25WYWx1ZUNoYW5nZShjb2x1bW4sIHZhbHVlLCBncm91cElkLCBpbmRleCwgdGhpcy5fZGF0YSwgdGhpcy52YWxpZGF0aW9uUmVzdWx0KTtcbiAgfVxuXG59XG4iXX0=