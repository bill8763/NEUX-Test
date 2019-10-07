/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LessOrEqualRestriction = /** @class */ (function () {
    function LessOrEqualRestriction(column, values) {
        if (values === void 0) { values = []; }
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    LessOrEqualRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        return this.column + " <= ? ";
    };
    /**
     * @return {?}
     */
    LessOrEqualRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return LessOrEqualRestriction;
}());
export { LessOrEqualRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LessOrEqualRestriction.prototype.column;
    /**
     * @type {?}
     * @private
     */
    LessOrEqualRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVzc09yRXF1YWxSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvTGVzc09yRXF1YWxSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFHSSxnQ0FBWSxNQUFNLEVBQUUsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsMENBQVM7OztJQUFUO1FBQ0ksT0FBVSxJQUFJLENBQUMsTUFBTSxXQUFRLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNELDBDQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQzs7Ozs7OztJQVpHLHdDQUF1Qjs7Ozs7SUFDdkIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vUmVzdHJpY3Rpb24uaW50ZXJmYWNlJztcbmV4cG9ydCBjbGFzcyBMZXNzT3JFcXVhbFJlc3RyaWN0aW9uIGltcGxlbWVudHMgSVJlc3RyaWN0aW9uIHtcbiAgICBwcml2YXRlIGNvbHVtbjogc3RyaW5nO1xuICAgIHByaXZhdGUgdmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbiwgdmFsdWVzID0gW10pIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29sdW1ufSA8PSA/IGA7XG4gICAgfVxuICAgIGdldFZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICAgIH1cbn0iXX0=