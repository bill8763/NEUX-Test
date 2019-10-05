/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class EqualRestriction {
    /**
     * @param {?} column
     * @param {?=} values
     */
    constructor(column, values = []) {
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `${this.column} = ? `;
    }
    /**
     * @return {?}
     */
    getValues() {
        return this.values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EqualRestriction.prototype.column;
    /**
     * @type {?}
     * @private
     */
    EqualRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1YWxSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvRXF1YWxSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTTs7Ozs7SUFHRixZQUFZLE1BQU0sRUFBRSxNQUFNLEdBQUcsRUFBRTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsU0FBUztRQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxPQUFPLENBQUM7SUFDakMsQ0FBQzs7OztJQUNELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNKOzs7Ozs7SUFaRyxrQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXN0cmljdGlvbiB9IGZyb20gJy4uL1Jlc3RyaWN0aW9uLmludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgRXF1YWxSZXN0cmljdGlvbiBpbXBsZW1lbnRzIElSZXN0cmljdGlvbiB7XG4gICAgcHJpdmF0ZSBjb2x1bW46IHN0cmluZztcbiAgICBwcml2YXRlIHZhbHVlczogQXJyYXk8c3RyaW5nPjtcbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW4sIHZhbHVlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG4gICAgc3FsU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbHVtbn0gPSA/IGA7XG4gICAgfVxuICAgIGdldFZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICAgIH1cbn0iXX0=