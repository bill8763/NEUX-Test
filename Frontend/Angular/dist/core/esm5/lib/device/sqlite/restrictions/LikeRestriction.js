/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LikeRestriction = /** @class */ (function () {
    function LikeRestriction(column, values) {
        if (values === void 0) { values = []; }
        this.column = column;
        /** @type {?} */
        var newArray = [];
        values.forEach((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            newArray.push('%' + val + '%');
        }));
        this.values = newArray;
    }
    /**
     * @return {?}
     */
    LikeRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        return this.column + " LIKE ? ";
    };
    /**
     * @return {?}
     */
    LikeRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return LikeRestriction;
}());
export { LikeRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LikeRestriction.prototype.column;
    /**
     * @type {?}
     * @private
     */
    LikeRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlrZVJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9MaWtlUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0lBR0kseUJBQVksTUFBTSxFQUFFLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O1lBR2pCLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFHM0IsQ0FBQzs7OztJQUNELG1DQUFTOzs7SUFBVDtRQUNJLE9BQVUsSUFBSSxDQUFDLE1BQU0sYUFBVSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxtQ0FBUzs7O0lBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7Ozs7OztJQXRCRyxpQ0FBdUI7Ozs7O0lBQ3ZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXN0cmljdGlvbiB9IGZyb20gJy4uL1Jlc3RyaWN0aW9uLmludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgTGlrZVJlc3RyaWN0aW9uIGltcGxlbWVudHMgSVJlc3RyaWN0aW9uIHtcbiAgICBwcml2YXRlIGNvbHVtbjogc3RyaW5nO1xuICAgIHByaXZhdGUgdmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbiwgdmFsdWVzID0gW10pIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG5cblxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goJyUnICsgdmFsICsgJyUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXdBcnJheTtcblxuICAgICAgICBcbiAgICB9XG4gICAgc3FsU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbHVtbn0gTElLRSA/IGA7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufSJdfQ==