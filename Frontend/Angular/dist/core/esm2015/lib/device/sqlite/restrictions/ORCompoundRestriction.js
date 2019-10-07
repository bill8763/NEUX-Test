/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ORCompoundRestriction {
    /**
     * @param {?} restrictions
     */
    constructor(restrictions) {
        this.restrictions = restrictions;
    }
    /**
     * @return {?}
     */
    sqlString() {
        /** @type {?} */
        let sqlString = '';
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
        return `(` + sqlString + `)`;
    }
    /**
     * @return {?}
     */
    getValues() {
        /** @type {?} */
        let values = new Array();
        this.restrictions.forEach((/**
         * @param {?} restriction
         * @param {?} i
         * @return {?}
         */
        function (restriction, i) {
            /** @type {?} */
            let array = restriction.getValues();
            values = values.concat(array);
        }));
        return values;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ORCompoundRestriction.prototype.restrictions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT1JDb21wb3VuZFJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9PUkNvbXBvdW5kUmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU07Ozs7SUFFRixZQUFZLFlBQVk7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7OztJQUNELFNBQVM7O1lBRUQsU0FBUyxHQUFHLEVBQUU7UUFFbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7OztRQUFDLFVBQVMsV0FBVyxFQUFHLENBQUM7WUFDOUMsSUFBRyxDQUFDLElBQUksQ0FBQztnQkFBRyxTQUFTLElBQUksTUFBTSxDQUFDO1lBQ2hDLFNBQVMsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLEdBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsU0FBUzs7WUFDRCxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7OztRQUFDLFVBQVMsV0FBVyxFQUFHLENBQUM7O2dCQUMxQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUNuQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjs7Ozs7O0lBekJHLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXN0cmljdGlvbiB9IGZyb20gJy4uL1Jlc3RyaWN0aW9uLmludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgT1JDb21wb3VuZFJlc3RyaWN0aW9uIGltcGxlbWVudHMgSVJlc3RyaWN0aW9uIHtcbiAgICBwcml2YXRlIHJlc3RyaWN0aW9ucyA6IEFycmF5PElSZXN0cmljdGlvbj47ICAgIFxuICAgIGNvbnN0cnVjdG9yKHJlc3RyaWN0aW9ucykge1xuICAgICAgICB0aGlzLnJlc3RyaWN0aW9ucyA9IHJlc3RyaWN0aW9ucztcbiAgICB9XG4gICAgc3FsU3RyaW5nKCk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IHNxbFN0cmluZyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZXN0cmljdGlvbnMuZm9yRWFjaChmdW5jdGlvbihyZXN0cmljdGlvbiAsIGkpe1xuICAgICAgICAgICAgaWYoaSAhPSAwKSAgc3FsU3RyaW5nICs9ICcgT1IgJztcbiAgICAgICAgICAgIHNxbFN0cmluZyArPSAnJyArIHJlc3RyaWN0aW9uLnNxbFN0cmluZygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYChgK3NxbFN0cmluZytgKWA7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5yZXN0cmljdGlvbnMuZm9yRWFjaChmdW5jdGlvbihyZXN0cmljdGlvbiAsIGkpe1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gcmVzdHJpY3Rpb24uZ2V0VmFsdWVzKCk7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFycmF5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG59Il19