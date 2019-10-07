/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InRestriction = /** @class */ (function () {
    function InRestriction(column, values) {
        if (values === void 0) { values = []; }
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    InRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var str = Array(this.values.length).fill('?').join(',');
        return this.column + " IN (" + str + ") ";
    };
    /**
     * @return {?}
     */
    InRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return InRestriction;
}());
export { InRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InRestriction.prototype.column;
    /**
     * @type {?}
     * @private
     */
    InRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5SZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvSW5SZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFHSSx1QkFBWSxNQUFNLEVBQUUsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsaUNBQVM7OztJQUFUOztZQUNRLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN2RCxPQUFVLElBQUksQ0FBQyxNQUFNLGFBQVEsR0FBRyxPQUFJLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELGlDQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJHLCtCQUF1Qjs7Ozs7SUFDdkIsK0JBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vUmVzdHJpY3Rpb24uaW50ZXJmYWNlJztcbmV4cG9ydCBjbGFzcyBJblJlc3RyaWN0aW9uIGltcGxlbWVudHMgSVJlc3RyaWN0aW9uIHtcbiAgICBwcml2YXRlIGNvbHVtbjogc3RyaW5nO1xuICAgIHByaXZhdGUgdmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbiwgdmFsdWVzID0gW10pIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHN0ciA9IEFycmF5KHRoaXMudmFsdWVzLmxlbmd0aCkuZmlsbCgnPycpLmpvaW4oJywnKTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29sdW1ufSBJTiAoJHtzdHJ9KSBgO1xuICAgIH1cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgICB9XG59Il19