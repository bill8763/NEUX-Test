/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class NotNullRestriction {
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
        return `${this.column} IS NOT NULL `;
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
    NotNullRestriction.prototype.column;
    /**
     * @type {?}
     * @private
     */
    NotNullRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90TnVsbFJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9Ob3ROdWxsUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU07Ozs7O0lBR0YsWUFBWSxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELFNBQVM7UUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sZUFBZSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjs7Ozs7O0lBYkcsb0NBQXVCOzs7OztJQUN2QixvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9SZXN0cmljdGlvbi5pbnRlcmZhY2UnO1xuZXhwb3J0IGNsYXNzIE5vdE51bGxSZXN0cmljdGlvbiBpbXBsZW1lbnRzIElSZXN0cmljdGlvbiB7XG4gICAgcHJpdmF0ZSBjb2x1bW46IHN0cmluZztcbiAgICBwcml2YXRlIHZhbHVlczogQXJyYXk8c3RyaW5nPjtcbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW4sIHZhbHVlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG4gICAgc3FsU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbHVtbn0gSVMgTk9UIE5VTEwgYDtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgICB9XG59Il19