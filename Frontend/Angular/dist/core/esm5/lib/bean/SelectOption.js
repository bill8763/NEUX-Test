/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectOption = /** @class */ (function () {
    function SelectOption(value, name) {
        this.value = value;
        this.name = name;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} isDefault
     * @return {THIS}
     */
    SelectOption.prototype.setIsDefault = /**
     * @template THIS
     * @this {THIS}
     * @param {?} isDefault
     * @return {THIS}
     */
    function (isDefault) {
        (/** @type {?} */ (this)).isDefault = isDefault;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    SelectOption.prototype.getName = /**
     * @return {?}
     */
    function () {
        return this.name;
    };
    /**
     * @return {?}
     */
    SelectOption.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    SelectOption.prototype.setName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.name = name;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectOption.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    return SelectOption;
}());
export { SelectOption };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOption.prototype.isDefault;
    /**
     * @type {?}
     * @private
     */
    SelectOption.prototype.value;
    /**
     * @type {?}
     * @private
     */
    SelectOption.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0T3B0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9iZWFuL1NlbGVjdE9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFHSSxzQkFBb0IsS0FBYyxFQUFTLElBQWE7UUFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUFTLFNBQUksR0FBSixJQUFJLENBQVM7SUFBSSxDQUFDOzs7Ozs7O0lBRXRELG1DQUFZOzs7Ozs7SUFBbkIsVUFBb0IsU0FBbUI7UUFDbkMsbUJBQUEsSUFBSSxFQUFBLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFDTSw4QkFBTzs7O0lBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLCtCQUFROzs7SUFBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVNLDhCQUFPOzs7O0lBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU0sK0JBQVE7Ozs7SUFBZixVQUFnQixLQUFjO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7Ozs7Ozs7SUF0QkcsaUNBQTRCOzs7OztJQUNoQiw2QkFBc0I7Ozs7O0lBQUMsNEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0aW9ue1xuICAgIFxuICAgIHByaXZhdGUgaXNEZWZhdWx0IDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlIDogc3RyaW5nLHByaXZhdGUgbmFtZSA6IHN0cmluZykgeyB9XG5cbiAgICBwdWJsaWMgc2V0SXNEZWZhdWx0KGlzRGVmYXVsdCA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQgPSBpc0RlZmF1bHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0TmFtZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5hbWUobmFtZSA6IHN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlIDogc3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbiJdfQ==