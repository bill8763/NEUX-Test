/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageInfo = /** @class */ (function () {
    function PageInfo() {
        this._pageSize = 10;
        this._page = 1;
    }
    /**
     * @return {?}
     */
    PageInfo.prototype.resetPage = /**
     * @return {?}
     */
    function () {
        this._page = 1;
    };
    Object.defineProperty(PageInfo.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            this._pageSize = pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageInfo.prototype, "totalRec", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalRec;
        },
        set: /**
         * @param {?} totalRec
         * @return {?}
         */
        function (totalRec) {
            this._totalRec = totalRec;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageInfo.prototype, "totalPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPage;
        },
        set: /**
         * @param {?} totalPage
         * @return {?}
         */
        function (totalPage) {
            this._totalPage = totalPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageInfo.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () { return this._page; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageInfo.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this._page++;
    };
    return PageInfo;
}());
export { PageInfo };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3BhZ2VJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO1FBQ1ksY0FBUyxHQUFZLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVksQ0FBQyxDQUFDO0lBdUMvQixDQUFDOzs7O0lBakNHLDRCQUFTOzs7SUFBVDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBSSw4QkFBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBRUQsVUFBYSxRQUFpQjtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDhCQUFROzs7O1FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFFRCxVQUFhLFFBQWlCO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzlCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksK0JBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7OztRQUVELFVBQWMsU0FBa0I7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwwQkFBSTs7OztRQUFSLGNBQVksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQzs7O09BQUE7Ozs7SUFFOUIsMkJBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7Ozs7OztJQXhDRyw2QkFBZ0M7Ozs7O0lBQ2hDLHlCQUEyQjs7Ozs7SUFDM0IsNkJBQTBCOzs7OztJQUcxQiw4QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZUluZm97XG4gICAgcHJpdmF0ZSBfcGFnZVNpemUgOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIF9wYWdlIDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF90b3RhbFJlYzogbnVtYmVyO1xuICAgIFxuXG4gICAgcHJpdmF0ZSBfdG90YWxQYWdlIDogbnVtYmVyO1xuXG4gICAgcmVzZXRQYWdlKCkge1xuICAgICAgICB0aGlzLl9wYWdlID0gMTtcbiAgICB9XG5cbiAgICBnZXQgcGFnZVNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgICB9XG5cbiAgICBzZXQgcGFnZVNpemUocGFnZVNpemUgOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxSZWMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsUmVjO1xuICAgIH1cblxuICAgIHNldCB0b3RhbFJlYyh0b3RhbFJlYyA6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90b3RhbFJlYyA9IHRvdGFsUmVjO1xuICAgIH1cblxuICAgIGdldCB0b3RhbFBhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2U7XG4gICAgfVxuXG4gICAgc2V0IHRvdGFsUGFnZSh0b3RhbFBhZ2UgOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdG90YWxQYWdlID0gdG90YWxQYWdlO1xuICAgIH1cblxuICAgIGdldCBwYWdlKCkge3JldHVybiB0aGlzLl9wYWdlfVxuXG4gICAgbmV4dFBhZ2UoKSB7XG4gICAgICAgIHRoaXMuX3BhZ2UrKztcbiAgICB9XG59Il19