/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class MetaColumn {
    /**
     * @param {?} id
     * @param {?} name
     * @param {?} type
     */
    constructor(id, name, type) {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbWV0YS9wYXJzZXIvYmVhbi9NZXRhQ29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNOzs7Ozs7SUFDRixZQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUszQyxPQUFFLEdBQVcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsU0FBSSxHQUFXLElBQUksQ0FBQztRQUNwQixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFhLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFXLElBQUksQ0FBQztRQUN6QixnQkFBVyxHQUFXLElBQUksQ0FBQztRQUNsQyxXQUFXO1FBQ0osaUJBQVksR0FBc0IsRUFBRSxDQUFDO1FBQ3JDLGNBQVMsR0FBNkIsRUFBRSxDQUFDO1FBQ3pDLFNBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBeEIzQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FzQko7OztJQXJCRyx3QkFBeUI7O0lBQ3pCLDBCQUEyQjs7SUFDM0IsMEJBQTJCOztJQUMzQiwrQkFBZ0M7O0lBQ2hDLCtCQUFpQzs7SUFDakMsOEJBQWdDOztJQUNoQyw4QkFBZ0M7O0lBQ2hDLDRCQUE4Qjs7SUFDOUIsMEJBQTZCOztJQUM3QiwyQkFBNEI7O0lBQzVCLDZCQUEyQjs7SUFDM0IsK0JBQWdDOztJQUNoQyxpQ0FBa0M7O0lBRWxDLGtDQUE0Qzs7SUFDNUMsK0JBQWdEOztJQUNoRCwwQkFBMkI7O0lBQzNCLDRCQUE4Qjs7SUFDOUIsK0JBQWdDOztJQUNoQyx1Q0FBeUM7O0lBQ3pDLDhCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFHcmlkIH0gZnJvbSAnLi9NZXRhR3JpZCc7XG5leHBvcnQgY2xhc3MgTWV0YUNvbHVtbiB7XG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIG9wdGlvblJlZjogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc2hvd1RpdGxlOiBib29sZWFuID0gbnVsbDtcbiAgICBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBudWxsO1xuICAgIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IG51bGw7XG4gICAgcHVibGljIGlubGluZTogYm9vbGVhbiA9IG51bGw7XG4gICAgcHVibGljIGdyaWQ6IE1ldGFHcmlkID0gbnVsbDtcbiAgICBwdWJsaWMgb3JkZXI6IG51bWJlciA9IG51bGw7XG4gICAgcHVibGljIGRlZmF1bHQ6IGFueSA9IG51bGw7XG4gICAgcHVibGljIG1heExlbmd0aDogbnVtYmVyID0gbnVsbDtcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IG51bGw7XG4gICAgLy9Gb3IgR3JvdXBcbiAgICBwdWJsaWMgZ3JvdXBDb2x1bW5zOiBBcnJheTxNZXRhQ29sdW1uPiA9IFtdO1xuICAgIHB1YmxpYyBncm91cFJvd3M6IEFycmF5PEFycmF5PE1ldGFDb2x1bW4+PiA9IFtdO1xuICAgIHB1YmxpYyBpY29uOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjYW5BZGQ6IGJvb2xlYW4gPSBudWxsO1xuICAgIHB1YmxpYyBtYXhOdW1iZXI6IG51bWJlciA9IG51bGw7XG4gICAgcHVibGljIHNob3dEZWZhdWx0T3B0aW9uOiBib29sZWFuID0gbnVsbDtcbiAgICBwdWJsaWMgcm93VGl0bGU6IHN0cmluZyA9IG51bGw7XG59Il19