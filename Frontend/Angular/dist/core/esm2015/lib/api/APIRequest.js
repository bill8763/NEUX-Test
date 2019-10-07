/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class APIRequest {
    constructor() {
        this._body = {};
        this._type = "GET";
        this._url = '';
        this._params = null;
        this._timeout = 10000;
    }
    /**
     * @return {?}
     */
    get params() {
        return this._params;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set params(value) {
        this._params = value;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @return {?}
     */
    get url() {
        return this._url;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set url(value) {
        this._url = value;
    }
    /**
     * @return {?}
     */
    get body() {
        return this._body;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set body(value) {
        this._body = value;
    }
    /**
     * @return {?}
     */
    get timeout() {
        return this._timeout;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timeout(value) {
        this._timeout = value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL0FQSVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07SUFDRjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQU1ELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQVcsR0FBRyxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELElBQVcsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztDQUNKOzs7Ozs7SUFuQ0csMkJBQWM7Ozs7O0lBQ2QsMkJBQWM7Ozs7O0lBQ2QsMEJBQWE7Ozs7O0lBQ2IsNkJBQWdCOzs7OztJQUNoQiw4QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQVBJUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSB7fTtcbiAgICAgICAgdGhpcy5fdHlwZSA9IFwiR0VUXCI7XG4gICAgICAgIHRoaXMuX3VybCA9ICcnO1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSBudWxsO1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gMTAwMDA7XG4gICAgfVxuICAgIHByaXZhdGUgX2JvZHk7XG4gICAgcHJpdmF0ZSBfdHlwZTtcbiAgICBwcml2YXRlIF91cmw7XG4gICAgcHJpdmF0ZSBfcGFyYW1zO1xuICAgIHByaXZhdGUgX3RpbWVvdXQ7XG4gICAgcHVibGljIGdldCBwYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbXM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcGFyYW1zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHR5cGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgICB9XG4gICAgcHVibGljIHNldCB1cmwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdXJsID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYm9keSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYm9keSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9ib2R5ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGltZW91dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdmFsdWU7XG4gICAgfVxufSJdfQ==