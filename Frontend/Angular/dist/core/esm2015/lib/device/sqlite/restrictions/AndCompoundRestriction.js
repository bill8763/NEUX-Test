/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class AndCompoundRestriction {
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
                sqlString += ' AND ';
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
    AndCompoundRestriction.prototype.restrictions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5kQ29tcG91bmRSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvQW5kQ29tcG91bmRSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTTs7OztJQUVGLFlBQVksWUFBWTtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ0QsU0FBUzs7WUFFRCxTQUFTLEdBQUcsRUFBRTtRQUVsQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBUyxXQUFXLEVBQUcsQ0FBQztZQUM5QyxJQUFHLENBQUMsSUFBSSxDQUFDO2dCQUFHLFNBQVMsSUFBSSxPQUFPLENBQUM7WUFDakMsU0FBUyxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsR0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxTQUFTOztZQUNELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBVTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBUyxXQUFXLEVBQUcsQ0FBQzs7Z0JBQzFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ25DLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKOzs7Ozs7SUF6QkcsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vUmVzdHJpY3Rpb24uaW50ZXJmYWNlJztcbmV4cG9ydCBjbGFzcyBBbmRDb21wb3VuZFJlc3RyaWN0aW9uIGltcGxlbWVudHMgSVJlc3RyaWN0aW9uIHtcbiAgICBwcml2YXRlIHJlc3RyaWN0aW9ucyA6IEFycmF5PElSZXN0cmljdGlvbj47ICAgIFxuICAgIGNvbnN0cnVjdG9yKHJlc3RyaWN0aW9ucykge1xuICAgICAgICB0aGlzLnJlc3RyaWN0aW9ucyA9IHJlc3RyaWN0aW9ucztcbiAgICB9XG4gICAgc3FsU3RyaW5nKCk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IHNxbFN0cmluZyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZXN0cmljdGlvbnMuZm9yRWFjaChmdW5jdGlvbihyZXN0cmljdGlvbiAsIGkpe1xuICAgICAgICAgICAgaWYoaSAhPSAwKSAgc3FsU3RyaW5nICs9ICcgQU5EICc7XG4gICAgICAgICAgICBzcWxTdHJpbmcgKz0gJycgKyByZXN0cmljdGlvbi5zcWxTdHJpbmcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGAoYCtzcWxTdHJpbmcrYClgO1xuICAgIH1cblxuICAgIGdldFZhbHVlcygpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIHRoaXMucmVzdHJpY3Rpb25zLmZvckVhY2goZnVuY3Rpb24ocmVzdHJpY3Rpb24gLCBpKXtcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHJlc3RyaWN0aW9uLmdldFZhbHVlcygpO1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcnJheSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxufSJdfQ==