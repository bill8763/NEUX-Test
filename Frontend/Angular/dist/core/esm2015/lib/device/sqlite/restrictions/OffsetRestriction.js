/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class OffsetRestriction {
    /**
     * @param {?=} values
     */
    constructor(values = []) {
        this.values = values;
    }
    /**
     * @return {?}
     */
    sqlString() {
        return `OFFSET ${this.values[0]} `;
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
    OffsetRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2Zmc2V0UmVzdHJpY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL09mZnNldFJlc3RyaWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNOzs7O0lBRUYsWUFBWSxNQUFNLEdBQUcsRUFBRTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsU0FBUztRQUNMLE9BQU8sVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNKOzs7Ozs7SUFYRyxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9SZXN0cmljdGlvbi5pbnRlcmZhY2UnO1xuZXhwb3J0IGNsYXNzIE9mZnNldFJlc3RyaWN0aW9uIGltcGxlbWVudHMgSVJlc3RyaWN0aW9uIHtcbiAgICBwcml2YXRlIHZhbHVlczogQXJyYXk8c3RyaW5nPjtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXMgPSBbXSkge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG4gICAgc3FsU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgT0ZGU0VUICR7dGhpcy52YWx1ZXNbMF19IGA7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufSJdfQ==