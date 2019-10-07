/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderByRestriction = /** @class */ (function () {
    function OrderByRestriction(values) {
        if (values === void 0) { values = []; }
        this.values = values;
    }
    /**
     * @return {?}
     */
    OrderByRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var str = this.values.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.column + " " + x.order; })).reduce((/**
         * @param {?} prev
         * @param {?} current
         * @return {?}
         */
        function (prev, current) { return prev + ',' + current; }));
        return "ORDER BY " + str + " ";
    };
    /**
     * @return {?}
     */
    OrderByRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return OrderByRestriction;
}());
export { OrderByRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderByRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJCeVJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9PcmRlckJ5UmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0lBRUksNEJBQVksTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0Qsc0NBQVM7OztJQUFUOztZQUNRLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFHLENBQUMsQ0FBQyxNQUFNLFNBQUksQ0FBQyxDQUFDLEtBQU8sRUFBeEIsQ0FBd0IsRUFBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsT0FBTyxJQUFLLE9BQUEsSUFBSSxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQXBCLENBQW9CLEVBQUM7UUFDeEcsT0FBTyxjQUFZLEdBQUcsTUFBRyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7Ozs7SUFaRyxvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9SZXN0cmljdGlvbi5pbnRlcmZhY2UnO1xuZXhwb3J0IGNsYXNzIE9yZGVyQnlSZXN0cmljdGlvbiBpbXBsZW1lbnRzIElSZXN0cmljdGlvbiB7XG4gICAgcHJpdmF0ZSB2YWx1ZXM6IEFycmF5PGFueT47XG4gICAgY29uc3RydWN0b3IodmFsdWVzID0gW10pIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuICAgIHNxbFN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy52YWx1ZXMubWFwKHggPT4gYCR7eC5jb2x1bW59ICR7eC5vcmRlcn1gKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHByZXYgKyAnLCcgKyBjdXJyZW50KTtcbiAgICAgICAgcmV0dXJuIGBPUkRFUiBCWSAke3N0cn0gYDtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgICB9XG59Il19