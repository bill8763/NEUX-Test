/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ORCompoundRestriction = /** @class */ (function () {
    function ORCompoundRestriction(restrictions) {
        this.restrictions = restrictions;
    }
    /**
     * @return {?}
     */
    ORCompoundRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sqlString = '';
        this.restrictions.forEach((/**
         * @param {?} restriction
         * @param {?} i
         * @return {?}
         */
        function (restriction, i) {
            if (i != 0)
                sqlString += ' OR ';
            sqlString += '' + restriction.sqlString();
        }));
        return "(" + sqlString + ")";
    };
    /**
     * @return {?}
     */
    ORCompoundRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var values = new Array();
        this.restrictions.forEach((/**
         * @param {?} restriction
         * @param {?} i
         * @return {?}
         */
        function (restriction, i) {
            /** @type {?} */
            var array = restriction.getValues();
            values = values.concat(array);
        }));
        return values;
    };
    return ORCompoundRestriction;
}());
export { ORCompoundRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ORCompoundRestriction.prototype.restrictions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT1JDb21wb3VuZFJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9PUkNvbXBvdW5kUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0lBRUksK0JBQVksWUFBWTtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ0QseUNBQVM7OztJQUFUOztZQUVRLFNBQVMsR0FBRyxFQUFFO1FBRWxCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFTLFdBQVcsRUFBRyxDQUFDO1lBQzlDLElBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQztZQUNoQyxTQUFTLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxHQUFDLFNBQVMsR0FBQyxHQUFHLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDs7WUFDUSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7OztRQUFDLFVBQVMsV0FBVyxFQUFHLENBQUM7O2dCQUMxQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUNuQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7Ozs7Ozs7SUF6QkcsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vUmVzdHJpY3Rpb24uaW50ZXJmYWNlJztcbmV4cG9ydCBjbGFzcyBPUkNvbXBvdW5kUmVzdHJpY3Rpb24gaW1wbGVtZW50cyBJUmVzdHJpY3Rpb24ge1xuICAgIHByaXZhdGUgcmVzdHJpY3Rpb25zIDogQXJyYXk8SVJlc3RyaWN0aW9uPjsgICAgXG4gICAgY29uc3RydWN0b3IocmVzdHJpY3Rpb25zKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3Rpb25zID0gcmVzdHJpY3Rpb25zO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgc3FsU3RyaW5nID0gJyc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc3RyaWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHJlc3RyaWN0aW9uICwgaSl7XG4gICAgICAgICAgICBpZihpICE9IDApICBzcWxTdHJpbmcgKz0gJyBPUiAnO1xuICAgICAgICAgICAgc3FsU3RyaW5nICs9ICcnICsgcmVzdHJpY3Rpb24uc3FsU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBgKGArc3FsU3RyaW5nK2ApYDtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICB0aGlzLnJlc3RyaWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHJlc3RyaWN0aW9uICwgaSl7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSByZXN0cmljdGlvbi5nZXRWYWx1ZXMoKTtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbn0iXX0=