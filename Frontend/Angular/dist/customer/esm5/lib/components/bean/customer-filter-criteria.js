/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CustomerFilterPreset } from "./customer-filter-preset";
import { StringUtils } from "@allianzSND/core";
var CustomerFilterCriteria = /** @class */ (function () {
    function CustomerFilterCriteria(keyword, filterMap, savePreset) {
        if (keyword === void 0) { keyword = ''; }
        if (filterMap === void 0) { filterMap = new Map(); }
        if (savePreset === void 0) { savePreset = false; }
        this.filterMap = new Map();
        this._savePreset = false;
        this._keyword = keyword;
        this.filterMap = filterMap;
        this._savePreset = savePreset;
    }
    /**
     * @param {?} filterCol
     * @param {?} value
     * @return {?}
     */
    CustomerFilterCriteria.prototype.addCriteria = /**
     * @param {?} filterCol
     * @param {?} value
     * @return {?}
     */
    function (filterCol, value) {
        /** @type {?} */
        var values = this.filterMap.get(filterCol);
        if (values == undefined)
            values = new Array();
        if (!values.includes(value)) {
            values.push(value);
            this.filterMap.set(filterCol, values);
        }
    };
    /**
     * @param {?} filterCol
     * @param {?} values
     * @return {?}
     */
    CustomerFilterCriteria.prototype.addCriteriaCols = /**
     * @param {?} filterCol
     * @param {?} values
     * @return {?}
     */
    function (filterCol, values) {
        this.filterMap.set(filterCol, values);
    };
    /**
     * @return {?}
     */
    CustomerFilterCriteria.prototype.hasCriteria = /**
     * @return {?}
     */
    function () {
        return this.filterMap.size != 0 || StringUtils.isNotEmpty(this._keyword);
    };
    Object.defineProperty(CustomerFilterCriteria.prototype, "keyword", {
        get: /**
         * @return {?}
         */
        function () { return this._keyword; },
        set: /**
         * @param {?} keyword
         * @return {?}
         */
        function (keyword) { this._keyword = keyword; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerFilterCriteria.prototype, "savePreset", {
        get: /**
         * @return {?}
         */
        function () { return this._savePreset; },
        set: /**
         * @param {?} isSave
         * @return {?}
         */
        function (isSave) {
            this._savePreset = isSave;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerFilterCriteria.prototype.getFilterMap = /**
     * @return {?}
     */
    function () {
        return this.filterMap;
    };
    /**
     * @return {?}
     */
    CustomerFilterCriteria.prototype.toPresetJSON = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var preset = new CustomerFilterPreset();
        this.filterMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        function (value, column) {
            preset.addValues(column, value);
        }));
        console.debug('toPresetJSON', preset);
        return preset;
    };
    return CustomerFilterCriteria;
}());
export { CustomerFilterCriteria };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerFilterCriteria.prototype._keyword;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterCriteria.prototype.filterMap;
    /**
     * @type {?}
     * @private
     */
    CustomerFilterCriteria.prototype._savePreset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBS0ksZ0NBQVksT0FBWSxFQUFFLFNBQTRDLEVBQUUsVUFBa0I7UUFBOUUsd0JBQUEsRUFBQSxZQUFZO1FBQUUsMEJBQUEsRUFBQSxnQkFBZ0IsR0FBRyxFQUF5QjtRQUFFLDJCQUFBLEVBQUEsa0JBQWtCO1FBSGxGLGNBQVMsR0FBK0IsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFDekUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsNENBQVc7Ozs7O0lBQVgsVUFBWSxTQUFpQixFQUFFLEtBQWE7O1lBQ3BDLE1BQU0sR0FBa0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3pELElBQUksTUFBTSxJQUFJLFNBQVM7WUFBRSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUV0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRW5CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7Ozs7OztJQUVELGdEQUFlOzs7OztJQUFmLFVBQWdCLFNBQWlCLEVBQUUsTUFBZ0I7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsc0JBQUksMkNBQU87Ozs7UUFDWCxjQUFnQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7OztRQUR0QyxVQUFZLE9BQWUsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBR3hELHNCQUFJLDhDQUFVOzs7O1FBSWQsY0FBbUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQzs7Ozs7UUFKNUMsVUFBZSxNQUFlO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBSUQsNkNBQVk7OztJQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCw2Q0FBWTs7O0lBQVo7O1lBQ1EsTUFBTSxHQUFHLElBQUksb0JBQW9CLEVBQUU7UUFFdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsS0FBb0IsRUFBRSxNQUFjO1lBQ3hELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQzs7Ozs7OztJQXZERywwQ0FBeUI7Ozs7O0lBQ3pCLDJDQUFpRjs7Ozs7SUFDakYsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJQcmVzZXQgfSBmcm9tIFwiLi9jdXN0b21lci1maWx0ZXItcHJlc2V0XCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckZpbHRlckNyaXRlcmlhIHtcbiAgICBwcml2YXRlIF9rZXl3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBmaWx0ZXJNYXA6IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+KCk7XG4gICAgcHJpdmF0ZSBfc2F2ZVByZXNldDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZCA9ICcnLCBmaWx0ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKSwgc2F2ZVByZXNldCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLmZpbHRlck1hcCA9IGZpbHRlck1hcDtcbiAgICAgICAgdGhpcy5fc2F2ZVByZXNldCA9IHNhdmVQcmVzZXQ7XG4gICAgfVxuXG4gICAgYWRkQ3JpdGVyaWEoZmlsdGVyQ29sOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHZhbHVlczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZmlsdGVyTWFwLmdldChmaWx0ZXJDb2wpO1xuICAgICAgICBpZiAodmFsdWVzID09IHVuZGVmaW5lZCkgdmFsdWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXJNYXAuc2V0KGZpbHRlckNvbCwgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENyaXRlcmlhQ29scyhmaWx0ZXJDb2w6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmZpbHRlck1hcC5zZXQoZmlsdGVyQ29sLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGhhc0NyaXRlcmlhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJNYXAuc2l6ZSAhPSAwIHx8IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fa2V5d29yZCk7XG4gICAgfVxuXG4gICAgc2V0IGtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7IHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkIH1cbiAgICBnZXQga2V5d29yZCgpIHsgcmV0dXJuIHRoaXMuX2tleXdvcmQgfVxuXG4gICAgc2V0IHNhdmVQcmVzZXQoaXNTYXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NhdmVQcmVzZXQgPSBpc1NhdmU7XG4gICAgfVxuXG4gICAgZ2V0IHNhdmVQcmVzZXQoKSB7IHJldHVybiB0aGlzLl9zYXZlUHJlc2V0IH1cblxuICAgIGdldEZpbHRlck1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTWFwO1xuICAgIH1cblxuXG5cbiAgICB0b1ByZXNldEpTT04oKTogQ3VzdG9tZXJGaWx0ZXJQcmVzZXQge1xuICAgICAgICBsZXQgcHJlc2V0ID0gbmV3IEN1c3RvbWVyRmlsdGVyUHJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJNYXAuZm9yRWFjaCgodmFsdWU6IEFycmF5PHN0cmluZz4sIGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBwcmVzZXQuYWRkVmFsdWVzKGNvbHVtbiwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCd0b1ByZXNldEpTT04nLCBwcmVzZXQpO1xuXG4gICAgICAgIHJldHVybiBwcmVzZXQ7XG4gICAgfVxufSJdfQ==