/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { v4 as uuid } from 'uuid';
export class NotificationObject {
    constructor() {
        this.category = '';
        this.type = '';
        this.id = uuid();
        this.data = {};
        this.order = -1;
        this.action = null;
    }
    /**
     * @return {?}
     */
    get category() {
        return this._category;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set category(value) {
        this._category = value;
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
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
    }
    /**
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set order(value) {
        this._order = value;
    }
    /**
     * @return {?}
     */
    get action() {
        return this._action;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set action(value) {
        this._action = value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationObject.prototype._category;
    /**
     * @type {?}
     * @private
     */
    NotificationObject.prototype._type;
    /**
     * @type {?}
     * @private
     */
    NotificationObject.prototype._id;
    /**
     * @type {?}
     * @private
     */
    NotificationObject.prototype._data;
    /**
     * @type {?}
     * @private
     */
    NotificationObject.prototype._order;
    /**
     * @type {?}
     * @private
     */
    NotificationObject.prototype._action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uT2JqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9ub3RpZmljYXRpb24vTm90aWZpY2F0aW9uT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdsQyxNQUFNO0lBQ0Y7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFXLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUEwQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0NBRUo7Ozs7OztJQTNDRyx1Q0FBMEI7Ozs7O0lBTzFCLG1DQUFzQjs7Ozs7SUFPdEIsaUNBQW9COzs7OztJQU9wQixtQ0FBbUI7Ozs7O0lBT25CLG9DQUF1Qjs7Ozs7SUFPdkIscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbkFjdGlvbiB9IGZyb20gJy4vSU5vdGlmaWNhdGlvbkFjdGlvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICcnO1xuICAgICAgICB0aGlzLnR5cGUgPSAnJztcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQoKTtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMub3JkZXIgPSAtMTtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIF9jYXRlZ29yeTogc3RyaW5nO1xuICAgIHB1YmxpYyBnZXQgY2F0ZWdvcnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNhdGVnb3J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnkgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfZGF0YTogYW55O1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gICAgcHVibGljIHNldCBkYXRhKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIF9vcmRlcjogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgb3JkZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG9yZGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3JkZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYWN0aW9uOiBJTm90aWZpY2F0aW9uQWN0aW9uO1xuICAgIHB1YmxpYyBnZXQgYWN0aW9uKCk6IElOb3RpZmljYXRpb25BY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGFjdGlvbih2YWx1ZTogSU5vdGlmaWNhdGlvbkFjdGlvbikge1xuICAgICAgICB0aGlzLl9hY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbn0iXX0=