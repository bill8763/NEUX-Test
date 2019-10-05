/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CustomerFilterPreset } from "./customer-filter-preset";
import { StringUtils } from "@allianzSND/core";
var CustomerFilterCriteria = /** @class */ (function () {
    function CustomerFilterCriteria(keyword, filterMap) {
        if (keyword === void 0) { keyword = ''; }
        if (filterMap === void 0) { filterMap = new Map(); }
        this.filterMap = new Map();
        this.optionMap = new Map();
        this.extension = {};
        this._keyword = keyword;
        this.filterMap = filterMap;
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
    CustomerFilterCriteria.prototype.getOptionMap = /**
     * @return {?}
     */
    function () {
        return this.optionMap;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    CustomerFilterCriteria.prototype.setOption = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        this.optionMap.set(name, value);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CustomerFilterCriteria.prototype.getOption = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.optionMap.has(name))
            return this.optionMap.get(name);
        else
            return null;
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
    /**
     * @return {?}
     */
    CustomerFilterCriteria.prototype.toMetaJSON = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var preset = this.toPresetJSON();
        this.optionMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        function (value, column) {
            preset.addValues(column, value);
        }));
        return preset;
    };
    /**
     * @return {?}
     */
    CustomerFilterCriteria.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cloneCriteria = new CustomerFilterCriteria();
        cloneCriteria._keyword = this._keyword;
        cloneCriteria.filterMap = new Map(this.filterMap);
        cloneCriteria.optionMap = new Map(this.optionMap);
        cloneCriteria.extension = Object.assign({}, this.extension);
        return cloneCriteria;
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
    CustomerFilterCriteria.prototype.optionMap;
    /** @type {?} */
    CustomerFilterCriteria.prototype.extension;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBTUksZ0NBQVksT0FBWSxFQUFFLFNBQTRDO1FBQTFELHdCQUFBLEVBQUEsWUFBWTtRQUFFLDBCQUFBLEVBQUEsZ0JBQWdCLEdBQUcsRUFBeUI7UUFKOUQsY0FBUyxHQUErQixJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQUN6RSxjQUFTLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7UUFDdEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdsQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCw0Q0FBVzs7Ozs7SUFBWCxVQUFZLFNBQWlCLEVBQUUsS0FBYTs7WUFDcEMsTUFBTSxHQUFrQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBSSxNQUFNLElBQUksU0FBUztZQUFFLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBRXRELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0ws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L2N1c3RvbWVyLWZpbHRlci1wcmVzZXRcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEge1xuICAgIHByaXZhdGUgX2tleXdvcmQ6IHN0cmluZztcbiAgICBwcml2YXRlIGZpbHRlck1hcDogTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKTtcbiAgICBwcml2YXRlIG9wdGlvbk1hcDogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgcHVibGljIGV4dGVuc2lvbiA9IHt9O1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZCA9ICcnLCBmaWx0ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKSkge1xuICAgICAgICB0aGlzLl9rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy5maWx0ZXJNYXAgPSBmaWx0ZXJNYXA7XG4gICAgfVxuXG4gICAgYWRkQ3JpdGVyaWEoZmlsdGVyQ29sOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHZhbHVlczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZmlsdGVyTWFwLmdldChmaWx0ZXJDb2wpO1xuICAgICAgICBpZiAodmFsdWVzID09IHVuZGVmaW5lZCkgdmFsdWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXJNYXAuc2V0KGZpbHRlckNvbCwgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENyaXRlcmlhQ29scyhmaWx0ZXJDb2w6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmZpbHRlck1hcC5zZXQoZmlsdGVyQ29sLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGhhc0NyaXRlcmlhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJNYXAuc2l6ZSAhPSAwIHx8IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fa2V5d29yZCk7XG4gICAgfVxuXG4gICAgc2V0IGtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7IHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkIH1cbiAgICBnZXQga2V5d29yZCgpIHsgcmV0dXJuIHRoaXMuX2tleXdvcmQgfVxuXG4gICAgZ2V0RmlsdGVyTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJNYXA7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25NYXA7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm9wdGlvbk1hcC5zZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uTWFwLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbk1hcC5nZXQobmFtZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG5cbiAgICB0b1ByZXNldEpTT04oKTogQ3VzdG9tZXJGaWx0ZXJQcmVzZXQge1xuICAgICAgICBsZXQgcHJlc2V0ID0gbmV3IEN1c3RvbWVyRmlsdGVyUHJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJNYXAuZm9yRWFjaCgodmFsdWU6IEFycmF5PHN0cmluZz4sIGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBwcmVzZXQuYWRkVmFsdWVzKGNvbHVtbiwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygndG9QcmVzZXRKU09OJywgcHJlc2V0KTtcblxuICAgICAgICByZXR1cm4gcHJlc2V0O1xuICAgIH1cblxuICAgIHRvTWV0YUpTT04oKTogQ3VzdG9tZXJGaWx0ZXJQcmVzZXQge1xuICAgICAgICBsZXQgcHJlc2V0ID0gdGhpcy50b1ByZXNldEpTT04oKTtcbiAgICAgICAgdGhpcy5vcHRpb25NYXAuZm9yRWFjaCgodmFsdWU6IGFueSwgY29sdW1uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHByZXNldC5hZGRWYWx1ZXMoY29sdW1uLCB2YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcmVzZXQ7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBjbG9uZSgpOiBDdXN0b21lckZpbHRlckNyaXRlcmlhIHtcbiAgICAgICAgbGV0IGNsb25lQ3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgICAgICBjbG9uZUNyaXRlcmlhLl9rZXl3b3JkID0gdGhpcy5fa2V5d29yZDtcbiAgICAgICAgY2xvbmVDcml0ZXJpYS5maWx0ZXJNYXAgPSBuZXcgTWFwKHRoaXMuZmlsdGVyTWFwKTtcbiAgICAgICAgY2xvbmVDcml0ZXJpYS5vcHRpb25NYXAgPSBuZXcgTWFwKHRoaXMub3B0aW9uTWFwKTtcbiAgICAgICAgY2xvbmVDcml0ZXJpYS5leHRlbnNpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmV4dGVuc2lvbik7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lQ3JpdGVyaWE7XG4gICAgfVxufSJdfQ==