/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Optional, Output, EventEmitter } from '@angular/core';
import { MetaService, FormMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor } from '@allianzSND/core';
import { customerContactEditMetaControllerToken } from '../../injectionToken/injection-token';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class CustomerContactEditComponent extends FormMetaComponent {
    /**
     * @param {?} metaService
     * @param {?} profileCodeService
     * @param {?} metaParser
     * @param {?} metaExecutor
     * @param {?} customMetaController
     */
    constructor(metaService, profileCodeService, metaParser, metaExecutor, customMetaController) {
        super(metaService, profileCodeService, metaParser, metaExecutor);
        this.customMetaController = customMetaController;
        this.customerClientID = '';
        this.unsubscribe$ = new Subject();
        this.save = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        /** @type {?} */
        let defaultObj = {};
        if (this.metaConfig)
            defaultObj = this.metaConfig.Columns.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id)).reduce((/**
             * @param {?} acc
             * @param {?} current
             * @return {?}
             */
            (acc, current) => {
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
    ngOnInit() {
        super.ngOnInit();
        if (this.saveSubject) {
            this.saveSubject
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.onBtnClick('submit', 'save');
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
     * @return {?}
     */
    getMetaParams() {
        return {
            CustomerClientID: this.customerClientID
        };
    }
    /**
     * @param {?} type
     * @param {?} id
     * @return {?}
     */
    btnClick(type, id) {
        if (type === 'submit') {
            this.save.emit(this._data);
        }
        if (this.customMetaController)
            this.customMetaController.btnClick(type, id, this._data);
    }
    /**
     * @return {?}
     */
    getMetaID() {
        return 'customerContactEdit';
    }
    /**
     * @return {?}
     */
    onValidateAll() {
        if (!this.validationResult.isTrue()) {
            //If basic validation has error.
            if (this.validationResult.isError('Note'))
                alert("Note " + this.validationResult.getErrorMsg("Note"));
            return false;
        }
        else {
            //Do custom validation.
            /** @type {?} */
            let result = true;
            if (this.customMetaController)
                result = result && this.customMetaController.onValidateAll(this._data, this.validationResult);
            return result;
        }
    }
    /**
     * @param {?} column
     * @param {?} value
     * @param {?} groupId
     * @param {?} index
     * @return {?}
     */
    onValueChange(column, value, groupId, index) {
        //Trigger other column values
        if (this.customMetaController)
            this.customMetaController.onValueChange(column, value, groupId, index, this._data, this.validationResult);
    }
}
CustomerContactEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-customer-contact-edit',
                template: "<ng-container *ngIf=\"data && isMetaLoaded()\">\n  <ng-container *ngFor=\"let col of columnConfig\">\n    <div class=\"date-block\">\n      <div class=\"txt\" *ngIf=\"col.type == 'Label'\">{{data[col.id]}}</div>\n    </div>\n    <div *ngIf=\"col.type == 'Textarea'\" class=\"textarea-block\">\n      <snd-ui-form-textarea [placeholder]=\"col.placeholder | translate\" [maxLength]=\"col.maxLength\"\n        [(nxValue)]=\"data[col.id]\" (nxValueChange)=\"onChange(col.id,$event)\" [height]=\"'180px'\" [id]=\"col.id\"></snd-ui-form-textarea>\n    </div>\n  </ng-container>\n</ng-container>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.date-block{position:relative;margin-bottom:5px}.date-block .date-data{pointer-events:none;background-color:#fff;position:absolute;top:0;height:100%;font-size:.875rem;font-weight:700}.date-block .txt{font-size:.875rem;font-weight:700;line-height:2}"]
            }] }
];
CustomerContactEditComponent.ctorParameters = () => [
    { type: MetaService },
    { type: ProfileCodeService },
    { type: DefaultMetaParser },
    { type: InputExecutor },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customerContactEditMetaControllerToken,] }] }
];
CustomerContactEditComponent.propDecorators = {
    data: [{ type: Input }],
    saveSubject: [{ type: Input }],
    save: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY29udGFjdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL2NvbXBvbmVudHMvY3VzdG9tZXItY29udGFjdC1lZGl0L2N1c3RvbWVyLWNvbnRhY3QtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsV0FBVyxFQUFrQixpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwSixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLG1DQUFvQyxTQUFRLGlCQUFpQjs7Ozs7Ozs7SUFtQ2pFLFlBQ0UsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLFVBQTZCLEVBQzdCLFlBQTJCLEVBQ3lDLG9CQUFvQztRQUV4RyxLQUFLLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUZHLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZ0I7UUFYbEcscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFHaEQsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBVXZELENBQUM7Ozs7O0lBeENELElBQ1csSUFBSSxDQUFDLEtBQUs7O1lBQ2Ys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QkFBb0I7Z0JBQzNCLE1BQU0sR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2hHLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7Ozs7OztJQUNELGFBQWEsQ0FBQyxNQUFjLEVBQUUsS0FBVSxFQUFFLE9BQWUsRUFBRSxLQUFhO1FBQ3RFLDZCQUE2QjtRQUM3QixJQUFJLElBQUksQ0FBQyxvQkFBb0I7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7WUF0R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLDBsQkFBcUQ7O2FBRXREOzs7WUFUUSxXQUFXO1lBQXFDLGtCQUFrQjtZQUFFLGlCQUFpQjtZQUFFLGFBQWE7NENBa0R4RyxRQUFRLFlBQUksTUFBTSxTQUFDLHNDQUFzQzs7O21CQXJDM0QsS0FBSzswQkE2QkwsS0FBSzttQkFDTCxNQUFNOzs7Ozs7O0lBSlAsd0RBQThCOzs7OztJQUM5QixvREFBMEQ7O0lBRTFELG1EQUFtQzs7SUFDbkMsNENBQXVEOzs7OztJQU9yRCw0REFBd0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCwgT3B0aW9uYWwsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGFTZXJ2aWNlLCBNZXRhQ29udHJvbGxlciwgRm9ybU1ldGFDb21wb25lbnQsIFByb2ZpbGVDb2RlU2VydmljZSwgRGVmYXVsdE1ldGFQYXJzZXIsIElucHV0RXhlY3V0b3IsIE1ldGFDb2x1bW4gfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IGN1c3RvbWVyQ29udGFjdEVkaXRNZXRhQ29udHJvbGxlclRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLWNvbnRhY3QtZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1jb250YWN0LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1jb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lckNvbnRhY3RFZGl0Q29tcG9uZW50IGV4dGVuZHMgRm9ybU1ldGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhdGEodmFsdWUpIHtcbiAgICBsZXQgZGVmYXVsdE9iaiA9IHt9O1xuICAgIGlmICh0aGlzLm1ldGFDb25maWcpXG4gICAgICBkZWZhdWx0T2JqID0gdGhpcy5tZXRhQ29uZmlnLkNvbHVtbnMubWFwKHggPT4geC5pZCkucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgYWNjW2N1cnJlbnRdID0gJyc7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T2JqLCB2YWx1ZSk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5fZGF0YSA9IGRlZmF1bHRPYmo7XG4gICAgY29uc29sZS5sb2coXCJzZXQgY29udGFjdCBlZGl0IGRhdGE6XCIsIHRoaXMuX2RhdGEpO1xuICAgIGlmICh0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyKVxuICAgICAgdGhpcy5jdXN0b21NZXRhQ29udHJvbGxlci5vbkRhdGFVcGRhdGVkKHRoaXMuX2RhdGEpO1xuICAgIHRoaXMuY3VzdG9tZXJDbGllbnRJRCA9IHRoaXMuX2RhdGEuQ3VzdG9tZXJDbGllbnRJRDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCBjb2x1bW5Db25maWcoKTogQXJyYXk8TWV0YUNvbHVtbj4ge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25maWcuQ29sdW1ucztcbiAgfVxuXG4gIHByaXZhdGUgY3VzdG9tZXJDbGllbnRJRCA9ICcnO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgc2F2ZVN1YmplY3Q6IFN1YmplY3Q8YW55PjtcbiAgQE91dHB1dCgpIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1ldGFTZXJ2aWNlOiBNZXRhU2VydmljZSxcbiAgICBwcm9maWxlQ29kZVNlcnZpY2U6IFByb2ZpbGVDb2RlU2VydmljZSxcbiAgICBtZXRhUGFyc2VyOiBEZWZhdWx0TWV0YVBhcnNlcixcbiAgICBtZXRhRXhlY3V0b3I6IElucHV0RXhlY3V0b3IsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChjdXN0b21lckNvbnRhY3RFZGl0TWV0YUNvbnRyb2xsZXJUb2tlbikgcHJpdmF0ZSBjdXN0b21NZXRhQ29udHJvbGxlcjogTWV0YUNvbnRyb2xsZXJcbiAgKSB7XG4gICAgc3VwZXIobWV0YVNlcnZpY2UsIHByb2ZpbGVDb2RlU2VydmljZSwgbWV0YVBhcnNlciwgbWV0YUV4ZWN1dG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgaWYgKHRoaXMuc2F2ZVN1YmplY3QpIHtcbiAgICAgIHRoaXMuc2F2ZVN1YmplY3RcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkJ0bkNsaWNrKCdzdWJtaXQnLCAnc2F2ZScpO1xuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0TWV0YVBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgQ3VzdG9tZXJDbGllbnRJRDogdGhpcy5jdXN0b21lckNsaWVudElEXG4gICAgfVxuICB9XG5cbiAgYnRuQ2xpY2sodHlwZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICB0aGlzLnNhdmUuZW1pdCh0aGlzLl9kYXRhKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLmJ0bkNsaWNrKHR5cGUsIGlkLCB0aGlzLl9kYXRhKTtcblxuICB9XG4gIGdldE1ldGFJRCgpIHtcbiAgICByZXR1cm4gJ2N1c3RvbWVyQ29udGFjdEVkaXQnO1xuICB9XG4gIG9uVmFsaWRhdGVBbGwoKSB7XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRpb25SZXN1bHQuaXNUcnVlKCkpIHtcbiAgICAgIC8vSWYgYmFzaWMgdmFsaWRhdGlvbiBoYXMgZXJyb3IuXG4gICAgICBpZiAodGhpcy52YWxpZGF0aW9uUmVzdWx0LmlzRXJyb3IoJ05vdGUnKSlcbiAgICAgICAgYWxlcnQoXCJOb3RlIFwiICsgdGhpcy52YWxpZGF0aW9uUmVzdWx0LmdldEVycm9yTXNnKFwiTm90ZVwiKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9EbyBjdXN0b20gdmFsaWRhdGlvbi5cbiAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uVmFsaWRhdGVBbGwodGhpcy5fZGF0YSwgdGhpcy52YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG4gIG9uVmFsdWVDaGFuZ2UoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGdyb3VwSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgIC8vVHJpZ2dlciBvdGhlciBjb2x1bW4gdmFsdWVzXG4gICAgaWYgKHRoaXMuY3VzdG9tTWV0YUNvbnRyb2xsZXIpXG4gICAgICB0aGlzLmN1c3RvbU1ldGFDb250cm9sbGVyLm9uVmFsdWVDaGFuZ2UoY29sdW1uLCB2YWx1ZSwgZ3JvdXBJZCwgaW5kZXgsIHRoaXMuX2RhdGEsIHRoaXMudmFsaWRhdGlvblJlc3VsdCk7XG4gIH1cblxufVxuIl19