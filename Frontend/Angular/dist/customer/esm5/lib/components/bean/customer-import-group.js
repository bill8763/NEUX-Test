/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomerImportGroup = /** @class */ (function () {
    function CustomerImportGroup(groupName) {
        this._isShow = true;
        this._items = new Array();
        this._groupName = groupName;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    CustomerImportGroup.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._items.push(item);
    };
    Object.defineProperty(CustomerImportGroup.prototype, "getItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerImportGroup.prototype, "groupName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._groupName;
        },
        set: /**
         * @param {?} groupName
         * @return {?}
         */
        function (groupName) {
            this._groupName = groupName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerImportGroup.prototype, "isShow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShow;
        },
        set: /**
         * @param {?} isShow
         * @return {?}
         */
        function (isShow) {
            this._isShow = isShow;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerImportGroup;
}());
export { CustomerImportGroup };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerImportGroup.prototype._groupName;
    /**
     * @type {?}
     * @private
     */
    CustomerImportGroup.prototype._isShow;
    /**
     * @type {?}
     * @private
     */
    CustomerImportGroup.prototype._items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItaW1wb3J0LWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWltcG9ydC1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFLSSw2QkFBWSxTQUFrQjtRQUh0QixZQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLFdBQU0sR0FBd0IsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUczRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLHFDQUFPOzs7O0lBQWQsVUFBZSxJQUFrQjtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQVcseUNBQVE7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywwQ0FBUzs7OztRQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7OztRQUVELFVBQXFCLFNBQWtCO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLENBQUM7OztPQUpBO0lBTUQsc0JBQVcsdUNBQU07Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFrQixNQUFnQjtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQU1MLDBCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7OztJQWhDRyx5Q0FBNEI7Ozs7O0lBQzVCLHNDQUFpQzs7Ozs7SUFDakMscUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFjdEl0ZW0gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJJbXBvcnRHcm91cCB7XG4gICAgcHJpdmF0ZSBfZ3JvdXBOYW1lIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2lzU2hvdyA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2l0ZW1zIDogQXJyYXk8Q29udGFjdEl0ZW0+ID0gbmV3IEFycmF5PENvbnRhY3RJdGVtPigpO1xuXG4gICAgY29uc3RydWN0b3IoZ3JvdXBOYW1lIDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IGdyb3VwTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtIDogQ29udGFjdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5faXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBncm91cE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cE5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cE5hbWUoZ3JvdXBOYW1lIDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IGdyb3VwTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2hvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvdztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzU2hvdyhpc1Nob3cgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzU2hvdyA9IGlzU2hvdztcbiAgICB9XG5cbn0iXX0=