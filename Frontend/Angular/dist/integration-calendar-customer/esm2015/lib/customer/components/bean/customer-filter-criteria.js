/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CustomerFilterPreset } from "./customer-filter-preset";
import { StringUtils } from "@allianzSND/core";
export class CustomerFilterCriteria {
    /**
     * @param {?=} keyword
     * @param {?=} filterMap
     */
    constructor(keyword = '', filterMap = new Map()) {
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
    addCriteria(filterCol, value) {
        /** @type {?} */
        let values = this.filterMap.get(filterCol);
        if (values == undefined)
            values = new Array();
        if (!values.includes(value)) {
            values.push(value);
            this.filterMap.set(filterCol, values);
        }
    }
    /**
     * @param {?} filterCol
     * @param {?} values
     * @return {?}
     */
    addCriteriaCols(filterCol, values) {
        this.filterMap.set(filterCol, values);
    }
    /**
     * @return {?}
     */
    hasCriteria() {
        return this.filterMap.size != 0 || StringUtils.isNotEmpty(this._keyword);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    set keyword(keyword) { this._keyword = keyword; }
    /**
     * @return {?}
     */
    get keyword() { return this._keyword; }
    /**
     * @return {?}
     */
    getFilterMap() {
        return this.filterMap;
    }
    /**
     * @return {?}
     */
    getOptionMap() {
        return this.optionMap;
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setOption(name, value) {
        this.optionMap.set(name, value);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getOption(name) {
        if (this.optionMap.has(name))
            return this.optionMap.get(name);
        else
            return null;
    }
    /**
     * @return {?}
     */
    toPresetJSON() {
        /** @type {?} */
        let preset = new CustomerFilterPreset();
        this.filterMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        (value, column) => {
            preset.addValues(column, value);
        }));
        console.debug('toPresetJSON', preset);
        return preset;
    }
    /**
     * @return {?}
     */
    toMetaJSON() {
        /** @type {?} */
        let preset = this.toPresetJSON();
        this.optionMap.forEach((/**
         * @param {?} value
         * @param {?} column
         * @return {?}
         */
        (value, column) => {
            preset.addValues(column, value);
        }));
        return preset;
    }
    /**
     * @return {?}
     */
    clone() {
        /** @type {?} */
        let cloneCriteria = new CustomerFilterCriteria();
        cloneCriteria._keyword = this._keyword;
        cloneCriteria.filterMap = new Map(this.filterMap);
        cloneCriteria.optionMap = new Map(this.optionMap);
        cloneCriteria.extension = Object.assign({}, this.extension);
        return cloneCriteria;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE1BQU07Ozs7O0lBTUYsWUFBWSxPQUFPLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBeUI7UUFKOUQsY0FBUyxHQUErQixJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQUN6RSxjQUFTLEdBQXFCLElBQUksR0FBRyxFQUFlLENBQUM7UUFDdEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdsQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsU0FBaUIsRUFBRSxLQUFhOztZQUNwQyxNQUFNLEdBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN6RCxJQUFJLE1BQU0sSUFBSSxTQUFTO1lBQUUsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBaUIsRUFBRSxNQUFnQjtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLE9BQWUsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQSxDQUFDLENBQUM7Ozs7SUFDeEQsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQzs7OztJQUV0QyxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBVTtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUVoQyxPQUFPLElBQUksQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsWUFBWTs7WUFDSixNQUFNLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtRQUV2QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxLQUFvQixFQUFFLE1BQWMsRUFBRSxFQUFFO1lBQzVELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFVBQVU7O1lBQ0YsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsS0FBVSxFQUFFLE1BQWMsRUFBRSxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFBO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQzs7OztJQUdNLEtBQUs7O1lBQ0osYUFBYSxHQUEyQixJQUFJLHNCQUFzQixFQUFFO1FBQ3hFLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1RCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0NBQ0o7Ozs7OztJQW5GRywwQ0FBeUI7Ozs7O0lBQ3pCLDJDQUFpRjs7Ozs7SUFDakYsMkNBQTZEOztJQUM3RCwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lckZpbHRlclByZXNldCB9IGZyb20gXCIuL2N1c3RvbWVyLWZpbHRlci1wcmVzZXRcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEge1xuICAgIHByaXZhdGUgX2tleXdvcmQ6IHN0cmluZztcbiAgICBwcml2YXRlIGZpbHRlck1hcDogTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4gPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKTtcbiAgICBwcml2YXRlIG9wdGlvbk1hcDogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgcHVibGljIGV4dGVuc2lvbiA9IHt9O1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZCA9ICcnLCBmaWx0ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKSkge1xuICAgICAgICB0aGlzLl9rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy5maWx0ZXJNYXAgPSBmaWx0ZXJNYXA7XG4gICAgfVxuXG4gICAgYWRkQ3JpdGVyaWEoZmlsdGVyQ29sOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHZhbHVlczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZmlsdGVyTWFwLmdldChmaWx0ZXJDb2wpO1xuICAgICAgICBpZiAodmFsdWVzID09IHVuZGVmaW5lZCkgdmFsdWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXJNYXAuc2V0KGZpbHRlckNvbCwgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENyaXRlcmlhQ29scyhmaWx0ZXJDb2w6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmZpbHRlck1hcC5zZXQoZmlsdGVyQ29sLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGhhc0NyaXRlcmlhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJNYXAuc2l6ZSAhPSAwIHx8IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fa2V5d29yZCk7XG4gICAgfVxuXG4gICAgc2V0IGtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7IHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkIH1cbiAgICBnZXQga2V5d29yZCgpIHsgcmV0dXJuIHRoaXMuX2tleXdvcmQgfVxuXG4gICAgZ2V0RmlsdGVyTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJNYXA7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25NYXA7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm9wdGlvbk1hcC5zZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uTWFwLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbk1hcC5nZXQobmFtZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG5cbiAgICB0b1ByZXNldEpTT04oKTogQ3VzdG9tZXJGaWx0ZXJQcmVzZXQge1xuICAgICAgICBsZXQgcHJlc2V0ID0gbmV3IEN1c3RvbWVyRmlsdGVyUHJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJNYXAuZm9yRWFjaCgodmFsdWU6IEFycmF5PHN0cmluZz4sIGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBwcmVzZXQuYWRkVmFsdWVzKGNvbHVtbiwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygndG9QcmVzZXRKU09OJywgcHJlc2V0KTtcblxuICAgICAgICByZXR1cm4gcHJlc2V0O1xuICAgIH1cblxuICAgIHRvTWV0YUpTT04oKTogQ3VzdG9tZXJGaWx0ZXJQcmVzZXQge1xuICAgICAgICBsZXQgcHJlc2V0ID0gdGhpcy50b1ByZXNldEpTT04oKTtcbiAgICAgICAgdGhpcy5vcHRpb25NYXAuZm9yRWFjaCgodmFsdWU6IGFueSwgY29sdW1uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHByZXNldC5hZGRWYWx1ZXMoY29sdW1uLCB2YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcmVzZXQ7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBjbG9uZSgpOiBDdXN0b21lckZpbHRlckNyaXRlcmlhIHtcbiAgICAgICAgbGV0IGNsb25lQ3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgICAgICBjbG9uZUNyaXRlcmlhLl9rZXl3b3JkID0gdGhpcy5fa2V5d29yZDtcbiAgICAgICAgY2xvbmVDcml0ZXJpYS5maWx0ZXJNYXAgPSBuZXcgTWFwKHRoaXMuZmlsdGVyTWFwKTtcbiAgICAgICAgY2xvbmVDcml0ZXJpYS5vcHRpb25NYXAgPSBuZXcgTWFwKHRoaXMub3B0aW9uTWFwKTtcbiAgICAgICAgY2xvbmVDcml0ZXJpYS5leHRlbnNpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmV4dGVuc2lvbik7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lQ3JpdGVyaWE7XG4gICAgfVxufSJdfQ==