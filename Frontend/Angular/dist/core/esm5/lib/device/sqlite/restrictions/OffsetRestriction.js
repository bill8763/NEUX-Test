/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OffsetRestriction = /** @class */ (function () {
    function OffsetRestriction(values) {
        if (values === void 0) { values = []; }
        this.values = values;
    }
    /**
     * @return {?}
     */
    OffsetRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        return "OFFSET " + this.values[0] + " ";
    };
    /**
     * @return {?}
     */
    OffsetRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return OffsetRestriction;
}());
export { OffsetRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OffsetRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2Zmc2V0UmVzdHJpY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9zcWxpdGUvcmVzdHJpY3Rpb25zL09mZnNldFJlc3RyaWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTtJQUVJLDJCQUFZLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELHFDQUFTOzs7SUFBVDtRQUNJLE9BQU8sWUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELHFDQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7Ozs7OztJQVhHLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXN0cmljdGlvbiB9IGZyb20gJy4uL1Jlc3RyaWN0aW9uLmludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgT2Zmc2V0UmVzdHJpY3Rpb24gaW1wbGVtZW50cyBJUmVzdHJpY3Rpb24ge1xuICAgIHByaXZhdGUgdmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBPRkZTRVQgJHt0aGlzLnZhbHVlc1swXX0gYDtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgICB9XG59Il19