/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class OrderByRestriction {
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
        /** @type {?} */
        let str = this.values.map((/**
         * @param {?} x
         * @return {?}
         */
        x => `${x.column} ${x.order}`)).reduce((/**
         * @param {?} prev
         * @param {?} current
         * @return {?}
         */
        (prev, current) => prev + ',' + current));
        return `ORDER BY ${str} `;
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
    OrderByRestriction.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJCeVJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9PcmRlckJ5UmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU07Ozs7SUFFRixZQUFZLE1BQU0sR0FBRyxFQUFFO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDRCxTQUFTOztZQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQUM7UUFDeEcsT0FBTyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjs7Ozs7O0lBWkcsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vUmVzdHJpY3Rpb24uaW50ZXJmYWNlJztcbmV4cG9ydCBjbGFzcyBPcmRlckJ5UmVzdHJpY3Rpb24gaW1wbGVtZW50cyBJUmVzdHJpY3Rpb24ge1xuICAgIHByaXZhdGUgdmFsdWVzOiBBcnJheTxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBzcWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMudmFsdWVzLm1hcCh4ID0+IGAke3guY29sdW1ufSAke3gub3JkZXJ9YCkucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBwcmV2ICsgJywnICsgY3VycmVudCk7XG4gICAgICAgIHJldHVybiBgT1JERVIgQlkgJHtzdHJ9IGA7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufSJdfQ==