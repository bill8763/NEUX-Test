/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GreaterRestriction = /** @class */ (function () {
    function GreaterRestriction(column, values) {
        if (values === void 0) { values = []; }
        this.column = column;
        this.values = values;
    }
    /**
     * @return {?}
     */
    GreaterRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        return this.column + " > ? ";
    };
    /**
     * @return {?}
     */
    GreaterRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return GreaterRestriction;
}());
export { GreaterRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GreaterRestriction.prototype.column;
    /**
     * @type {?}
     * @private
     */
    GreaterRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JlYXRlclJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9HcmVhdGVyUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0lBR0ksNEJBQVksTUFBTSxFQUFFLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELHNDQUFTOzs7SUFBVDtRQUNJLE9BQVUsSUFBSSxDQUFDLE1BQU0sVUFBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDRCxzQ0FBUzs7O0lBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7Ozs7SUFaRyxvQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXN0cmljdGlvbiB9IGZyb20gJy4uL1Jlc3RyaWN0aW9uLmludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgR3JlYXRlclJlc3RyaWN0aW9uIGltcGxlbWVudHMgSVJlc3RyaWN0aW9uIHtcbiAgICBwcml2YXRlIGNvbHVtbjogc3RyaW5nO1xuICAgIHByaXZhdGUgdmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbiwgdmFsdWVzID0gW10pIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29sdW1ufSA+ID8gYDtcbiAgICB9XG4gICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufSJdfQ==