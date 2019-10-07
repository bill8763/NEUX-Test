/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AndCompoundRestriction = /** @class */ (function () {
    function AndCompoundRestriction(restrictions) {
        this.restrictions = restrictions;
    }
    /**
     * @return {?}
     */
    AndCompoundRestriction.prototype.sqlString = /**
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
                sqlString += ' AND ';
            sqlString += '' + restriction.sqlString();
        }));
        return "(" + sqlString + ")";
    };
    /**
     * @return {?}
     */
    AndCompoundRestriction.prototype.getValues = /**
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
    return AndCompoundRestriction;
}());
export { AndCompoundRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AndCompoundRestriction.prototype.restrictions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5kQ29tcG91bmRSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvQW5kQ29tcG91bmRSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFFSSxnQ0FBWSxZQUFZO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDRCwwQ0FBUzs7O0lBQVQ7O1lBRVEsU0FBUyxHQUFHLEVBQUU7UUFFbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7OztRQUFDLFVBQVMsV0FBVyxFQUFHLENBQUM7WUFDOUMsSUFBRyxDQUFDLElBQUksQ0FBQztnQkFBRyxTQUFTLElBQUksT0FBTyxDQUFDO1lBQ2pDLFNBQVMsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLEdBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsMENBQVM7OztJQUFUOztZQUNRLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBVTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBUyxXQUFXLEVBQUcsQ0FBQzs7Z0JBQzFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ25DLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7Ozs7OztJQXpCRyw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9SZXN0cmljdGlvbi5pbnRlcmZhY2UnO1xuZXhwb3J0IGNsYXNzIEFuZENvbXBvdW5kUmVzdHJpY3Rpb24gaW1wbGVtZW50cyBJUmVzdHJpY3Rpb24ge1xuICAgIHByaXZhdGUgcmVzdHJpY3Rpb25zIDogQXJyYXk8SVJlc3RyaWN0aW9uPjsgICAgXG4gICAgY29uc3RydWN0b3IocmVzdHJpY3Rpb25zKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3Rpb25zID0gcmVzdHJpY3Rpb25zO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgc3FsU3RyaW5nID0gJyc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc3RyaWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHJlc3RyaWN0aW9uICwgaSl7XG4gICAgICAgICAgICBpZihpICE9IDApICBzcWxTdHJpbmcgKz0gJyBBTkQgJztcbiAgICAgICAgICAgIHNxbFN0cmluZyArPSAnJyArIHJlc3RyaWN0aW9uLnNxbFN0cmluZygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYChgK3NxbFN0cmluZytgKWA7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5yZXN0cmljdGlvbnMuZm9yRWFjaChmdW5jdGlvbihyZXN0cmljdGlvbiAsIGkpe1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gcmVzdHJpY3Rpb24uZ2V0VmFsdWVzKCk7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFycmF5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG59Il19