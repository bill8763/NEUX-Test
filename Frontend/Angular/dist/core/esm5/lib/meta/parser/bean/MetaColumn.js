/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MetaColumn = /** @class */ (function () {
    function MetaColumn(id, name, type) {
        this.id = null;
        this.name = null;
        this.type = null;
        this.optionRef = null;
        this.showTitle = null;
        this.required = null;
        this.readonly = null;
        this.inline = null;
        this.grid = null;
        this.order = null;
        this.default = null;
        this.maxLength = null;
        this.placeholder = null;
        //For Group
        this.groupColumns = [];
        this.groupRows = [];
        this.icon = null;
        this.canAdd = null;
        this.maxNumber = null;
        this.showDefaultOption = null;
        this.rowTitle = null;
        this.id = id;
        this.name = name;
        this.type = type;
    }
    return MetaColumn;
}());
export { MetaColumn };
if (false) {
    /** @type {?} */
    MetaColumn.prototype.id;
    /** @type {?} */
    MetaColumn.prototype.name;
    /** @type {?} */
    MetaColumn.prototype.type;
    /** @type {?} */
    MetaColumn.prototype.optionRef;
    /** @type {?} */
    MetaColumn.prototype.showTitle;
    /** @type {?} */
    MetaColumn.prototype.required;
    /** @type {?} */
    MetaColumn.prototype.readonly;
    /** @type {?} */
    MetaColumn.prototype.inline;
    /** @type {?} */
    MetaColumn.prototype.grid;
    /** @type {?} */
    MetaColumn.prototype.order;
    /** @type {?} */
    MetaColumn.prototype.default;
    /** @type {?} */
    MetaColumn.prototype.maxLength;
    /** @type {?} */
    MetaColumn.prototype.placeholder;
    /** @type {?} */
    MetaColumn.prototype.groupColumns;
    /** @type {?} */
    MetaColumn.prototype.groupRows;
    /** @type {?} */
    MetaColumn.prototype.icon;
    /** @type {?} */
    MetaColumn.prototype.canAdd;
    /** @type {?} */
    MetaColumn.prototype.maxNumber;
    /** @type {?} */
    MetaColumn.prototype.showDefaultOption;
    /** @type {?} */
    MetaColumn.prototype.rowTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbWV0YS9wYXJzZXIvYmVhbi9NZXRhQ29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTtJQUNJLG9CQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUszQyxPQUFFLEdBQVcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsU0FBSSxHQUFXLElBQUksQ0FBQztRQUNwQixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFhLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFXLElBQUksQ0FBQztRQUN6QixnQkFBVyxHQUFXLElBQUksQ0FBQztRQUNsQyxXQUFXO1FBQ0osaUJBQVksR0FBc0IsRUFBRSxDQUFDO1FBQ3JDLGNBQVMsR0FBNkIsRUFBRSxDQUFDO1FBQ3pDLFNBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBeEIzQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFzQkwsaUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDOzs7O0lBckJHLHdCQUF5Qjs7SUFDekIsMEJBQTJCOztJQUMzQiwwQkFBMkI7O0lBQzNCLCtCQUFnQzs7SUFDaEMsK0JBQWlDOztJQUNqQyw4QkFBZ0M7O0lBQ2hDLDhCQUFnQzs7SUFDaEMsNEJBQThCOztJQUM5QiwwQkFBNkI7O0lBQzdCLDJCQUE0Qjs7SUFDNUIsNkJBQTJCOztJQUMzQiwrQkFBZ0M7O0lBQ2hDLGlDQUFrQzs7SUFFbEMsa0NBQTRDOztJQUM1QywrQkFBZ0Q7O0lBQ2hELDBCQUEyQjs7SUFDM0IsNEJBQThCOztJQUM5QiwrQkFBZ0M7O0lBQ2hDLHVDQUF5Qzs7SUFDekMsOEJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YUdyaWQgfSBmcm9tICcuL01ldGFHcmlkJztcbmV4cG9ydCBjbGFzcyBNZXRhQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgb3B0aW9uUmVmOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzaG93VGl0bGU6IGJvb2xlYW4gPSBudWxsO1xuICAgIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IG51bGw7XG4gICAgcHVibGljIHJlYWRvbmx5OiBib29sZWFuID0gbnVsbDtcbiAgICBwdWJsaWMgaW5saW5lOiBib29sZWFuID0gbnVsbDtcbiAgICBwdWJsaWMgZ3JpZDogTWV0YUdyaWQgPSBudWxsO1xuICAgIHB1YmxpYyBvcmRlcjogbnVtYmVyID0gbnVsbDtcbiAgICBwdWJsaWMgZGVmYXVsdDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXIgPSBudWxsO1xuICAgIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gbnVsbDtcbiAgICAvL0ZvciBHcm91cFxuICAgIHB1YmxpYyBncm91cENvbHVtbnM6IEFycmF5PE1ldGFDb2x1bW4+ID0gW107XG4gICAgcHVibGljIGdyb3VwUm93czogQXJyYXk8QXJyYXk8TWV0YUNvbHVtbj4+ID0gW107XG4gICAgcHVibGljIGljb246IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGNhbkFkZDogYm9vbGVhbiA9IG51bGw7XG4gICAgcHVibGljIG1heE51bWJlcjogbnVtYmVyID0gbnVsbDtcbiAgICBwdWJsaWMgc2hvd0RlZmF1bHRPcHRpb246IGJvb2xlYW4gPSBudWxsO1xuICAgIHB1YmxpYyByb3dUaXRsZTogc3RyaW5nID0gbnVsbDtcbn0iXX0=