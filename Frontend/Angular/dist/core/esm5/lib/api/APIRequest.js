/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var APIRequest = /** @class */ (function () {
    function APIRequest() {
        this._body = {};
        this._type = "GET";
        this._url = '';
        this._params = null;
        this._timeout = 10000;
    }
    Object.defineProperty(APIRequest.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return this._params;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._params = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIRequest.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIRequest.prototype, "url", {
        get: /**
         * @return {?}
         */
        function () {
            return this._url;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIRequest.prototype, "body", {
        get: /**
         * @return {?}
         */
        function () {
            return this._body;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._body = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIRequest.prototype, "timeout", {
        get: /**
         * @return {?}
         */
        function () {
            return this._timeout;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._timeout = value;
        },
        enumerable: true,
        configurable: true
    });
    return APIRequest;
}());
export { APIRequest };
if (false) {
    /**
     * @type {?}
     * @private
     */
    APIRequest.prototype._body;
    /**
     * @type {?}
     * @private
     */
    APIRequest.prototype._type;
    /**
     * @type {?}
     * @private
     */
    APIRequest.prototype._url;
    /**
     * @type {?}
     * @private
     */
    APIRequest.prototype._params;
    /**
     * @type {?}
     * @private
     */
    APIRequest.prototype._timeout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL0FQSVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQ0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFNRCxzQkFBVyw4QkFBTTs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWtCLEtBQUs7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyw0QkFBSTs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBZ0IsS0FBSztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLDJCQUFHOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFlLEtBQUs7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyw0QkFBSTs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBZ0IsS0FBSztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLCtCQUFPOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBQ0QsVUFBbUIsS0FBSztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FIQTtJQUlMLGlCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQzs7Ozs7OztJQW5DRywyQkFBYzs7Ozs7SUFDZCwyQkFBYzs7Ozs7SUFDZCwwQkFBYTs7Ozs7SUFDYiw2QkFBZ0I7Ozs7O0lBQ2hCLDhCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBUElSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IHt9O1xuICAgICAgICB0aGlzLl90eXBlID0gXCJHRVRcIjtcbiAgICAgICAgdGhpcy5fdXJsID0gJyc7XG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSAxMDAwMDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYm9keTtcbiAgICBwcml2YXRlIF90eXBlO1xuICAgIHByaXZhdGUgX3VybDtcbiAgICBwcml2YXRlIF9wYXJhbXM7XG4gICAgcHJpdmF0ZSBfdGltZW91dDtcbiAgICBwdWJsaWMgZ2V0IHBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmFtcztcbiAgICB9XG4gICAgcHVibGljIHNldCBwYXJhbXModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHVybCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91cmwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBib2R5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgICB9XG4gICAgcHVibGljIHNldCBib2R5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0aW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgICB9XG4gICAgcHVibGljIHNldCB0aW1lb3V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2YWx1ZTtcbiAgICB9XG59Il19