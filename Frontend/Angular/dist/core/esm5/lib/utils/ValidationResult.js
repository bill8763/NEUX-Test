/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidationResult = /** @class */ (function () {
    function ValidationResult() {
        this.errorMap = new Map();
    }
    /**
     * @param {?} name
     * @param {?} errorMsg
     * @return {?}
     */
    ValidationResult.prototype.setErrorMap = /**
     * @param {?} name
     * @param {?} errorMsg
     * @return {?}
     */
    function (name, errorMsg) {
        this.errorMap.set(name, errorMsg);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ValidationResult.prototype.deleteError = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.errorMap.delete(name);
    };
    /**
     * @return {?}
     */
    ValidationResult.prototype.isTrue = /**
     * @return {?}
     */
    function () {
        return (this.errorMap.size == 0);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ValidationResult.prototype.isError = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.errorMap.get(name) != undefined;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ValidationResult.prototype.getErrorMsg = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.errorMap.get(name);
    };
    /**
     * @return {?}
     */
    ValidationResult.prototype.clearErrorMap = /**
     * @return {?}
     */
    function () {
        this.errorMap.clear();
    };
    return ValidationResult;
}());
export { ValidationResult };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidationResult.prototype.errorMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvVmFsaWRhdGlvblJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtRQUNZLGFBQVEsR0FBd0IsSUFBSSxHQUFHLEVBQWlCLENBQUM7SUF5QnJFLENBQUM7Ozs7OztJQXZCRyxzQ0FBVzs7Ozs7SUFBWCxVQUFZLElBQVksRUFBQyxRQUFnQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksSUFBWTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsaUNBQU07OztJQUFOO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLElBQWE7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksSUFBVztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx3Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7Ozs7Ozs7SUF6Qkcsb0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25SZXN1bHR7XG4gICAgcHJpdmF0ZSBlcnJvck1hcCA6IE1hcDxzdHJpbmcsc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTtcblxuICAgIHNldEVycm9yTWFwKG5hbWU6IHN0cmluZyxlcnJvck1zZzogc3RyaW5nKSB7XG4gICAgICB0aGlzLmVycm9yTWFwLnNldChuYW1lLCBlcnJvck1zZyk7XG4gICAgfVxuXG4gICAgZGVsZXRlRXJyb3IobmFtZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLmVycm9yTWFwLmRlbGV0ZShuYW1lKTtcbiAgICB9XG5cbiAgICBpc1RydWUoKSA6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICh0aGlzLmVycm9yTWFwLnNpemUgPT0gMClcbiAgICB9XG5cbiAgICBpc0Vycm9yKG5hbWUgOiBzdHJpbmcpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yTWFwLmdldChuYW1lKSAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0RXJyb3JNc2cobmFtZTpzdHJpbmcpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JNYXAuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIGNsZWFyRXJyb3JNYXAoKSB7XG4gICAgICB0aGlzLmVycm9yTWFwLmNsZWFyKCk7XG4gICAgfVxufVxuIl19