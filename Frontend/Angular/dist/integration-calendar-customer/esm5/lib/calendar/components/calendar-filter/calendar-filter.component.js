/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var CalendarFilterComponent = /** @class */ (function () {
    function CalendarFilterComponent() {
        this._optionMap = new Map();
        this.activityTypeList = []; // DB中所有activityType
        this.currentFilterOptionList = [];
        this.activityTypeListChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CalendarFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(CalendarFilterComponent.prototype, "optionMap", {
        get: /**
         * @return {?}
         */
        function () { return this._optionMap; },
        set: /**
         * @param {?} optionMap
         * @return {?}
         */
        function (optionMap) {
            var _this = this;
            this._optionMap = optionMap;
            this.activityTypeList = this._optionMap.get('Calendar_Type');
            this.activityTypeList.forEach((/**
             * @param {?} codeItem
             * @return {?}
             */
            function (codeItem) {
                if (codeItem.isCheck) {
                    _this.currentFilterOptionList.push(codeItem.getCode());
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarFilterComponent.prototype.onActivityFilter = /**
     * @return {?}
     */
    function () {
        this.activityTypeListChange.emit(this.activityTypeList);
    }; // filter event
    // filter event
    /**
     * @param {?} item
     * @return {?}
     */
    CalendarFilterComponent.prototype.toActivityColor = 
    // filter event
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return JSON.parse(item.getArguments()).color;
    };
    CalendarFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snd-calendar-filter',
                    template: "<ng-container *ngIf=\"activityTypeList\">\n  <div class=\"calendar-filter-item\" *ngFor=\" let codeItem of activityTypeList\">\n    <app-ui-form-checkbox [(nxValue)]=\"codeItem.isCheck\" [isDisable]=\"false\" (nxValueChange)=\"onActivityFilter()\" [colorCode]=\"toActivityColor(codeItem)\" >\n      <ng-container checkboxText=\"style2\">{{codeItem.displayText}}</ng-container>\n    </app-ui-form-checkbox>\n  </div>\n</ng-container>\n",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.calendar-filter-item:not(:last-child){margin-bottom:25px}"]
                }] }
    ];
    CalendarFilterComponent.ctorParameters = function () { return []; };
    CalendarFilterComponent.propDecorators = {
        optionMap: [{ type: Input }],
        activityTypeListChange: [{ type: Output }]
    };
    return CalendarFilterComponent;
}());
export { CalendarFilterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXItZmlsdGVyL2NhbGVuZGFyLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHN0U7SUFPRTtRQUtRLGVBQVUsR0FBcUMsSUFBSSxHQUFHLEVBQThCLENBQUM7UUFDdEYscUJBQWdCLEdBQXVCLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQjtRQUMvRCw0QkFBdUIsR0FBa0IsRUFBRSxDQUFDO1FBY3pDLDJCQUFzQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFyQnRDLENBQUM7Ozs7SUFFakIsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQztJQU1ELHNCQUNJLDhDQUFTOzs7O1FBRGIsY0FDaUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBLENBQUEsQ0FBQzs7Ozs7UUFDeEMsVUFBYyxTQUEyQztZQUF6RCxpQkFRQztZQVBDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsUUFBUTtnQkFDckMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNwQixLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUN2RDtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BVHVDOzs7O0lBYXhDLGtEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDLEVBQUMsZUFBZTs7Ozs7O0lBRWpCLGlEQUFlOzs7Ozs7SUFBZixVQUFnQixJQUFpQjtRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsOGJBQStDOztpQkFFaEQ7Ozs7NEJBWUUsS0FBSzt5Q0FZTCxNQUFNOztJQVNULDhCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1ksdUJBQXVCOzs7Ozs7SUFPbEMsNkNBQTZGOztJQUM3RixtREFBaUQ7O0lBQ2pELDBEQUFtRDs7SUFjbkQseURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvZmlsZUNvZGV9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmQtY2FsZW5kYXItZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uTWFwIDogTWFwPHN0cmluZywgQXJyYXk8UHJvZmlsZUNvZGU+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxQcm9maWxlQ29kZT4+KCk7XG4gIHB1YmxpYyBhY3Rpdml0eVR5cGVMaXN0OiBBcnJheTxQcm9maWxlQ29kZT4gPSBbXTsgLy8gRELkuK3miYDmnIlhY3Rpdml0eVR5cGVcbiAgcHVibGljIGN1cnJlbnRGaWx0ZXJPcHRpb25MaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgQElucHV0KClcbiAgZ2V0IG9wdGlvbk1hcCgpIHtyZXR1cm4gdGhpcy5fb3B0aW9uTWFwfVxuICBzZXQgb3B0aW9uTWFwKG9wdGlvbk1hcCA6IE1hcDxzdHJpbmcsIEFycmF5PFByb2ZpbGVDb2RlPj4pIHtcbiAgICB0aGlzLl9vcHRpb25NYXAgPSBvcHRpb25NYXA7XG4gICAgdGhpcy5hY3Rpdml0eVR5cGVMaXN0ID0gdGhpcy5fb3B0aW9uTWFwLmdldCgnQ2FsZW5kYXJfVHlwZScpO1xuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdC5mb3JFYWNoKChjb2RlSXRlbSkgPT4ge1xuICAgICAgaWYgKGNvZGVJdGVtLmlzQ2hlY2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyT3B0aW9uTGlzdC5wdXNoKGNvZGVJdGVtLmdldENvZGUoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBAT3V0cHV0KCkgYWN0aXZpdHlUeXBlTGlzdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvbkFjdGl2aXR5RmlsdGVyKCkge1xuICAgIHRoaXMuYWN0aXZpdHlUeXBlTGlzdENoYW5nZS5lbWl0KHRoaXMuYWN0aXZpdHlUeXBlTGlzdCk7XG4gIH0gLy8gZmlsdGVyIGV2ZW50XG5cbiAgdG9BY3Rpdml0eUNvbG9yKGl0ZW06IFByb2ZpbGVDb2RlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbS5nZXRBcmd1bWVudHMoKSkuY29sb3I7XG4gIH1cbn1cbiJdfQ==