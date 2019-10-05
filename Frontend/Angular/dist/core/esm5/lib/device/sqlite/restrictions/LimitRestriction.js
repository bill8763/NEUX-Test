/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LimitRestriction = /** @class */ (function () {
    function LimitRestriction(values) {
        if (values === void 0) { values = []; }
        this.values = values;
    }
    /**
     * @return {?}
     */
    LimitRestriction.prototype.sqlString = /**
     * @return {?}
     */
    function () {
        return "LIMIT " + this.values[0].toString() + " ";
    };
    /**
     * @return {?}
     */
    LimitRestriction.prototype.getValues = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return LimitRestriction;
}());
export { LimitRestriction };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LimitRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGltaXRSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvTGltaXRSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFFSSwwQkFBWSxNQUFXO1FBQVgsdUJBQUEsRUFBQSxXQUFXO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDRCxvQ0FBUzs7O0lBQVQ7UUFDSSxPQUFPLFdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBRyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7Ozs7SUFYRyxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9SZXN0cmljdGlvbi5pbnRlcmZhY2UnO1xuZXhwb3J0IGNsYXNzIExpbWl0UmVzdHJpY3Rpb24gaW1wbGVtZW50cyBJUmVzdHJpY3Rpb24ge1xuICAgIHByaXZhdGUgdmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBMSU1JVCAke3RoaXMudmFsdWVzWzBdLnRvU3RyaW5nKCl9IGA7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufSJdfQ==