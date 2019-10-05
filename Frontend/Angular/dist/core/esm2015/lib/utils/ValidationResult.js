/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ValidationResult {
    constructor() {
        this.errorMap = new Map();
    }
    /**
     * @param {?} name
     * @param {?} errorMsg
     * @return {?}
     */
    setErrorMap(name, errorMsg) {
        this.errorMap.set(name, errorMsg);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    deleteError(name) {
        this.errorMap.delete(name);
    }
    /**
     * @return {?}
     */
    isTrue() {
        return (this.errorMap.size == 0);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isError(name) {
        return this.errorMap.get(name) != undefined;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getErrorMsg(name) {
        return this.errorMap.get(name);
    }
    /**
     * @return {?}
     */
    clearErrorMap() {
        this.errorMap.clear();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidationResult.prototype.errorMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvVmFsaWRhdGlvblJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtJQUFOO1FBQ1ksYUFBUSxHQUF3QixJQUFJLEdBQUcsRUFBaUIsQ0FBQztJQXlCckUsQ0FBQzs7Ozs7O0lBdkJHLFdBQVcsQ0FBQyxJQUFZLEVBQUMsUUFBZ0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBYTtRQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FDSjs7Ozs7O0lBekJHLG9DQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uUmVzdWx0e1xuICAgIHByaXZhdGUgZXJyb3JNYXAgOiBNYXA8c3RyaW5nLHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7XG5cbiAgICBzZXRFcnJvck1hcChuYW1lOiBzdHJpbmcsZXJyb3JNc2c6IHN0cmluZykge1xuICAgICAgdGhpcy5lcnJvck1hcC5zZXQobmFtZSwgZXJyb3JNc2cpO1xuICAgIH1cblxuICAgIGRlbGV0ZUVycm9yKG5hbWU6IHN0cmluZykge1xuICAgICAgdGhpcy5lcnJvck1hcC5kZWxldGUobmFtZSk7XG4gICAgfVxuXG4gICAgaXNUcnVlKCkgOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAodGhpcy5lcnJvck1hcC5zaXplID09IDApXG4gICAgfVxuXG4gICAgaXNFcnJvcihuYW1lIDogc3RyaW5nKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvck1hcC5nZXQobmFtZSkgIT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldEVycm9yTXNnKG5hbWU6c3RyaW5nKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yTWFwLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICBjbGVhckVycm9yTWFwKCkge1xuICAgICAgdGhpcy5lcnJvck1hcC5jbGVhcigpO1xuICAgIH1cbn1cbiJdfQ==