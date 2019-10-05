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
     * @param {?=} savePreset
     */
    constructor(keyword = '', filterMap = new Map(), savePreset = false) {
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
     * @param {?} isSave
     * @return {?}
     */
    set savePreset(isSave) {
        this._savePreset = isSave;
    }
    /**
     * @return {?}
     */
    get savePreset() { return this._savePreset; }
    /**
     * @return {?}
     */
    getFilterMap() {
        return this.filterMap;
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
    CustomerFilterCriteria.prototype._savePreset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItZmlsdGVyLWNyaXRlcmlhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE1BQU07Ozs7OztJQUtGLFlBQVksT0FBTyxHQUFHLEVBQUUsRUFBRSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXlCLEVBQUUsVUFBVSxHQUFHLEtBQUs7UUFIbEYsY0FBUyxHQUErQixJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQUN6RSxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUdqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsU0FBaUIsRUFBRSxLQUFhOztZQUNwQyxNQUFNLEdBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN6RCxJQUFJLE1BQU0sSUFBSSxTQUFTO1lBQUUsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBaUIsRUFBRSxNQUFnQjtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLE9BQWUsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQSxDQUFDLENBQUM7Ozs7SUFDeEQsSUFBSSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQzs7Ozs7SUFFdEMsSUFBSSxVQUFVLENBQUMsTUFBZTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVLEtBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQzs7OztJQUU1QyxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxZQUFZOztZQUNKLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixFQUFFO1FBRXZDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLEtBQW9CLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFDNUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0QyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7OztJQXZERywwQ0FBeUI7Ozs7O0lBQ3pCLDJDQUFpRjs7Ozs7SUFDakYsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tZXJGaWx0ZXJQcmVzZXQgfSBmcm9tIFwiLi9jdXN0b21lci1maWx0ZXItcHJlc2V0XCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckZpbHRlckNyaXRlcmlhIHtcbiAgICBwcml2YXRlIF9rZXl3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBmaWx0ZXJNYXA6IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+KCk7XG4gICAgcHJpdmF0ZSBfc2F2ZVByZXNldDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZCA9ICcnLCBmaWx0ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKSwgc2F2ZVByZXNldCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICB0aGlzLmZpbHRlck1hcCA9IGZpbHRlck1hcDtcbiAgICAgICAgdGhpcy5fc2F2ZVByZXNldCA9IHNhdmVQcmVzZXQ7XG4gICAgfVxuXG4gICAgYWRkQ3JpdGVyaWEoZmlsdGVyQ29sOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHZhbHVlczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZmlsdGVyTWFwLmdldChmaWx0ZXJDb2wpO1xuICAgICAgICBpZiAodmFsdWVzID09IHVuZGVmaW5lZCkgdmFsdWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXJNYXAuc2V0KGZpbHRlckNvbCwgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENyaXRlcmlhQ29scyhmaWx0ZXJDb2w6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmZpbHRlck1hcC5zZXQoZmlsdGVyQ29sLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIGhhc0NyaXRlcmlhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJNYXAuc2l6ZSAhPSAwIHx8IFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5fa2V5d29yZCk7XG4gICAgfVxuXG4gICAgc2V0IGtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7IHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkIH1cbiAgICBnZXQga2V5d29yZCgpIHsgcmV0dXJuIHRoaXMuX2tleXdvcmQgfVxuXG4gICAgc2V0IHNhdmVQcmVzZXQoaXNTYXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NhdmVQcmVzZXQgPSBpc1NhdmU7XG4gICAgfVxuXG4gICAgZ2V0IHNhdmVQcmVzZXQoKSB7IHJldHVybiB0aGlzLl9zYXZlUHJlc2V0IH1cblxuICAgIGdldEZpbHRlck1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTWFwO1xuICAgIH1cblxuXG5cbiAgICB0b1ByZXNldEpTT04oKTogQ3VzdG9tZXJGaWx0ZXJQcmVzZXQge1xuICAgICAgICBsZXQgcHJlc2V0ID0gbmV3IEN1c3RvbWVyRmlsdGVyUHJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJNYXAuZm9yRWFjaCgodmFsdWU6IEFycmF5PHN0cmluZz4sIGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBwcmVzZXQuYWRkVmFsdWVzKGNvbHVtbiwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKCd0b1ByZXNldEpTT04nLCBwcmVzZXQpO1xuXG4gICAgICAgIHJldHVybiBwcmVzZXQ7XG4gICAgfVxufSJdfQ==