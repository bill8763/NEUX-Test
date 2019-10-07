/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CustomerImportGroup {
    /**
     * @param {?} groupName
     */
    constructor(groupName) {
        this._isShow = true;
        this._items = new Array();
        this._groupName = groupName;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        this._items.push(item);
    }
    /**
     * @return {?}
     */
    get getItems() {
        return this._items;
    }
    /**
     * @return {?}
     */
    get groupName() {
        return this._groupName;
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    set groupName(groupName) {
        this._groupName = groupName;
    }
    /**
     * @return {?}
     */
    get isShow() {
        return this._isShow;
    }
    /**
     * @param {?} isShow
     * @return {?}
     */
    set isShow(isShow) {
        this._isShow = isShow;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItaW1wb3J0LWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWltcG9ydC1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7OztJQUtGLFlBQVksU0FBa0I7UUFIdEIsWUFBTyxHQUFhLElBQUksQ0FBQztRQUN6QixXQUFNLEdBQXdCLElBQUksS0FBSyxFQUFlLENBQUM7UUFHM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsSUFBa0I7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBVyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQVcsU0FBUyxDQUFDLFNBQWtCO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE1BQU0sQ0FBQyxNQUFnQjtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0NBRUo7Ozs7OztJQWhDRyx5Q0FBNEI7Ozs7O0lBQzVCLHNDQUFpQzs7Ozs7SUFDakMscUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFjdEl0ZW0gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJJbXBvcnRHcm91cCB7XG4gICAgcHJpdmF0ZSBfZ3JvdXBOYW1lIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2lzU2hvdyA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2l0ZW1zIDogQXJyYXk8Q29udGFjdEl0ZW0+ID0gbmV3IEFycmF5PENvbnRhY3RJdGVtPigpO1xuXG4gICAgY29uc3RydWN0b3IoZ3JvdXBOYW1lIDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IGdyb3VwTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtIDogQ29udGFjdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5faXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBncm91cE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cE5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncm91cE5hbWUoZ3JvdXBOYW1lIDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IGdyb3VwTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2hvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvdztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzU2hvdyhpc1Nob3cgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzU2hvdyA9IGlzU2hvdztcbiAgICB9XG5cbn0iXX0=