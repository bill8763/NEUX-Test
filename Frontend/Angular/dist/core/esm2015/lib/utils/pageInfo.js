/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PageInfo {
    constructor() {
        this._pageSize = 10;
        this._page = 1;
    }
    /**
     * @return {?}
     */
    resetPage() {
        this._page = 1;
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    set pageSize(pageSize) {
        this._pageSize = pageSize;
    }
    /**
     * @return {?}
     */
    get totalRec() {
        return this._totalRec;
    }
    /**
     * @param {?} totalRec
     * @return {?}
     */
    set totalRec(totalRec) {
        this._totalRec = totalRec;
    }
    /**
     * @return {?}
     */
    get totalPage() {
        return this._totalPage;
    }
    /**
     * @param {?} totalPage
     * @return {?}
     */
    set totalPage(totalPage) {
        this._totalPage = totalPage;
    }
    /**
     * @return {?}
     */
    get page() { return this._page; }
    /**
     * @return {?}
     */
    nextPage() {
        this._page++;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageInfo.prototype._pageSize;
    /**
     * @type {?}
     * @private
     */
    PageInfo.prototype._page;
    /**
     * @type {?}
     * @private
     */
    PageInfo.prototype._totalRec;
    /**
     * @type {?}
     * @private
     */
    PageInfo.prototype._totalPage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3BhZ2VJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNO0lBQU47UUFDWSxjQUFTLEdBQVksRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxDQUFDLENBQUM7SUF1Qy9CLENBQUM7Ozs7SUFqQ0csU0FBUztRQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFpQjtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsUUFBaUI7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksU0FBUyxDQUFDLFNBQWtCO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUksS0FBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFDOzs7O0lBRTlCLFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNKOzs7Ozs7SUF4Q0csNkJBQWdDOzs7OztJQUNoQyx5QkFBMkI7Ozs7O0lBQzNCLDZCQUEwQjs7Ozs7SUFHMUIsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2VJbmZve1xuICAgIHByaXZhdGUgX3BhZ2VTaXplIDogbnVtYmVyID0gMTA7XG4gICAgcHJpdmF0ZSBfcGFnZSA6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfdG90YWxSZWM6IG51bWJlcjtcbiAgICBcblxuICAgIHByaXZhdGUgX3RvdGFsUGFnZSA6IG51bWJlcjtcblxuICAgIHJlc2V0UGFnZSgpIHtcbiAgICAgICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgfVxuXG4gICAgZ2V0IHBhZ2VTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gICAgfVxuXG4gICAgc2V0IHBhZ2VTaXplKHBhZ2VTaXplIDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsUmVjKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbFJlYztcbiAgICB9XG5cbiAgICBzZXQgdG90YWxSZWModG90YWxSZWMgOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdG90YWxSZWMgPSB0b3RhbFJlYztcbiAgICB9XG5cbiAgICBnZXQgdG90YWxQYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlO1xuICAgIH1cblxuICAgIHNldCB0b3RhbFBhZ2UodG90YWxQYWdlIDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsUGFnZSA9IHRvdGFsUGFnZTtcbiAgICB9XG5cbiAgICBnZXQgcGFnZSgpIHtyZXR1cm4gdGhpcy5fcGFnZX1cblxuICAgIG5leHRQYWdlKCkge1xuICAgICAgICB0aGlzLl9wYWdlKys7XG4gICAgfVxufSJdfQ==