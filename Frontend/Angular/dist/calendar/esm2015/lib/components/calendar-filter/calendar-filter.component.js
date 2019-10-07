/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class CalendarFilterComponent {
    constructor() {
        this._optionMap = new Map();
        this.activityTypeList = []; // DB中所有activityType
        this.currentFilterOptionList = [];
        this.activityTypeListChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get optionMap() { return this._optionMap; }
    /**
     * @param {?} optionMap
     * @return {?}
     */
    set optionMap(optionMap) {
        this._optionMap = optionMap;
        this.activityTypeList = this._optionMap.get('Calendar_Type');
        this.activityTypeList.forEach((/**
         * @param {?} codeItem
         * @return {?}
         */
        (codeItem) => {
            if (codeItem.isCheck) {
                this.currentFilterOptionList.push(codeItem.getCode());
            }
        }));
    }
    /**
     * @return {?}
     */
    onActivityFilter() {
        this.activityTypeListChange.emit(this.activityTypeList);
    } // filter event
    // filter event
    /**
     * @param {?} item
     * @return {?}
     */
    toActivityColor(item) {
        return JSON.parse(item.getArguments()).color;
    }
}
CalendarFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-calendar-filter',
                template: "<ng-container *ngIf=\"activityTypeList\">\n  <div class=\"calendar-filter-item\" *ngFor=\" let codeItem of activityTypeList\">\n    <app-ui-form-checkbox [(nxValue)]=\"codeItem.isCheck\" [isDisable]=\"false\" (nxValueChange)=\"onActivityFilter()\" [colorCode]=\"toActivityColor(codeItem)\" >\n      <ng-container checkboxText=\"style2\">{{codeItem.displayText}}</ng-container>\n    </app-ui-form-checkbox>\n  </div>\n</ng-container>\n",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-filter-item:not(:last-child){margin-bottom:25px}.calendar-filter-item ::ng-deep .nx-checkbox .nx-checkbox__control{margin-top:0}.calendar-filter-item ::ng-deep .form-checkbox .check-text{line-height:1.4;letter-spacing:.2px}"]
            }] }
];
CalendarFilterComponent.ctorParameters = () => [];
CalendarFilterComponent.propDecorators = {
    optionMap: [{ type: Input }],
    activityTypeListChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarFilterComponent.prototype._optionMap;
    /** @type {?} */
    CalendarFilterComponent.prototype.activityTypeList;
    /** @type {?} */
    CalendarFilterComponent.prototype.currentFilterOptionList;
    /** @type {?} */
    CalendarFilterComponent.prototype.activityTypeListChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FsZW5kYXItZmlsdGVyL2NhbGVuZGFyLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRN0UsTUFBTTtJQUVKO1FBS1EsZUFBVSxHQUFxQyxJQUFJLEdBQUcsRUFBOEIsQ0FBQztRQUN0RixxQkFBZ0IsR0FBdUIsRUFBRSxDQUFDLENBQUMsb0JBQW9CO1FBQy9ELDRCQUF1QixHQUFrQixFQUFFLENBQUM7UUFjekMsMkJBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXJCdEMsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQU1ELElBQ0ksU0FBUyxLQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBQ3hDLElBQUksU0FBUyxDQUFDLFNBQTJDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDekMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUNwQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBSUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsZUFBZTs7Ozs7O0lBRWpCLGVBQWUsQ0FBQyxJQUFpQjtRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsOGJBQStDOzthQUVoRDs7Ozt3QkFZRSxLQUFLO3FDQVlMLE1BQU07Ozs7Ozs7SUFoQlAsNkNBQTZGOztJQUM3RixtREFBaUQ7O0lBQ2pELDBEQUFtRDs7SUFjbkQseURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvZmlsZUNvZGV9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtY2FsZW5kYXItZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uTWFwIDogTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+KCk7XG4gIHB1YmxpYyBhY3Rpdml0eVR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTsgLy8gRELkuK3miYDmnIlhY3Rpdml0eVR5cGVcbiAgcHVibGljIGN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgQElucHV0KClcbiAgZ2V0IG9wdGlvbk1hcCgpIHtyZXR1cm4gdGhpcy5fb3B0aW9uTWFwfVxuICBzZXQgb3B0aW9uTWFwKG9wdGlvbk1hcCA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4pIHtcbiAgICB0aGlzLl9vcHRpb25NYXAgPSBvcHRpb25NYXA7XG4gICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0ID0gdGhpcy5fb3B0aW9uTWFwLmdldCgnQ2FsZW5kYXJfVHlwZScpO1xuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgaWYgKGNvZGVJdGVtLmlzQ2hlY2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdC5wdXNoKGNvZGVJdGVtLmdldENvZGUoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBAT3V0cHV0KCkgYWN0aXZpdHlUeXBlTGlzdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvbkFjdGl2aXR5RmlsdGVyKCkge1xuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdENoYW5nZS5lbWl0KHRoaXMuYWN0aXZpdHlUeXBlTGlzdCk7XG4gIH0gLy8gZmlsdGVyIGV2ZW50XG5cbiAgdG9BY3Rpdml0eUNvbG9yKGl0ZW06IFByb2ZpbGVDb2RlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbS5nZXRBcmd1bWVudHMoKSkuY29sb3I7XG4gIH1cbn1cbiJdfQ==