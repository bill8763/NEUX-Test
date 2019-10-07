/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContactItem = /** @class */ (function () {
    function ContactItem(firstname, lastname, birthday, phones, emails, address) {
        this._isCheck = false;
        this._isShow = false;
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthday = birthday;
        this._phones = phones;
        this._emails = emails;
        this._address = address;
        this._isShow = true;
    }
    Object.defineProperty(ContactItem.prototype, "Birthday", {
        get: /**
         * @return {?}
         */
        function () {
            return this._birthday;
        },
        set: /**
         * @param {?} birthday
         * @return {?}
         */
        function (birthday) {
            this._birthday = birthday;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "isCheck", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isCheck;
        },
        set: /**
         * @param {?} check
         * @return {?}
         */
        function (check) {
            this._isCheck = check;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "isShow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShow;
        },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            this._isShow = show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "FirstName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstname;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._firstname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "LastName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lastname;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._lastname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "tel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._phones;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._phones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "email", {
        get: /**
         * @return {?}
         */
        function () {
            return this._emails;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._emails = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "address", {
        get: /**
         * @return {?}
         */
        function () {
            return this._address;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._address = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactItem.prototype, "fullname", {
        get: /**
         * @return {?}
         */
        function () {
            return this.FirstName + ' ' + this.LastName;
        },
        enumerable: true,
        configurable: true
    });
    return ContactItem;
}());
export { ContactItem };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContactItem.prototype._firstname;
    /**
     * @type {?}
     * @private
     */
    ContactItem.prototype._lastname;
    /**
     * @type {?}
     * @private
     */
    ContactItem.prototype._phones;
    /**
     * @type {?}
     * @private
     */
    ContactItem.prototype._emails;
    /**
     * @type {?}
     * @private
     */
    ContactItem.prototype._address;
    /**
     * @type {?}
     * @private
     */
    ContactItem.prototype._birthday;
    /** @type {?} */
    ContactItem.prototype._isCheck;
    /** @type {?} */
    ContactItem.prototype._isShow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdEl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9jb250YWN0L0NvbnRhY3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtJQVVJLHFCQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTztRQUYxRCxhQUFRLEdBQWEsS0FBSyxDQUFDO1FBQzNCLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFFN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFXLGlDQUFROzs7O1FBSW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBTkQsVUFBb0IsUUFBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLGdDQUFPOzs7O1FBSWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBTkQsVUFBbUIsS0FBZTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLCtCQUFNOzs7O1FBR2pCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBTEQsVUFBa0IsSUFBYztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLGtDQUFTOzs7O1FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBQ0QsVUFBcUIsS0FBYTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLGlDQUFROzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLDRCQUFHOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFlLEtBQW1CO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsOEJBQUs7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixLQUFvQjtZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLGdDQUFPOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBQ0QsVUFBbUIsS0FBcUI7WUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxpQ0FBUTs7OztRQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQzs7Ozs7OztJQTVFRyxpQ0FBMkI7Ozs7O0lBQzNCLGdDQUEwQjs7Ozs7SUFDMUIsOEJBQThCOzs7OztJQUM5Qiw4QkFBK0I7Ozs7O0lBQy9CLCtCQUFpQzs7Ozs7SUFDakMsZ0NBQXlCOztJQUV6QiwrQkFBa0M7O0lBQ2xDLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZHJlc3MgfSBmcm9tIFwiLi9BZGRyZXNzXCI7XG5pbXBvcnQgeyBQaG9uZSB9IGZyb20gXCIuL1Bob25lXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250YWN0SXRlbSB7XG4gICAgcHJpdmF0ZSBfZmlyc3RuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGFzdG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9waG9uZXM6IEFycmF5PFBob25lPjtcbiAgICBwcml2YXRlIF9lbWFpbHM6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBfYWRkcmVzczogQXJyYXk8QWRkcmVzcz47XG4gICAgcHJpdmF0ZSBfYmlydGhkYXkgOiBEYXRlO1xuICAgIFxuICAgIHB1YmxpYyBfaXNDaGVjayA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgX2lzU2hvdyA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihmaXJzdG5hbWUsIGxhc3RuYW1lLGJpcnRoZGF5LCBwaG9uZXMsIGVtYWlscywgYWRkcmVzcykge1xuICAgICAgICB0aGlzLl9maXJzdG5hbWUgPSBmaXJzdG5hbWU7XG4gICAgICAgIHRoaXMuX2xhc3RuYW1lID0gbGFzdG5hbWU7XG4gICAgICAgIHRoaXMuX2JpcnRoZGF5ID0gYmlydGhkYXk7XG4gICAgICAgIHRoaXMuX3Bob25lcyA9IHBob25lcztcbiAgICAgICAgdGhpcy5fZW1haWxzID0gZW1haWxzO1xuICAgICAgICB0aGlzLl9hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5faXNTaG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IEJpcnRoZGF5KGJpcnRoZGF5OkRhdGUpIHtcbiAgICAgICAgdGhpcy5fYmlydGhkYXkgPSBiaXJ0aGRheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEJpcnRoZGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmlydGhkYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0NoZWNrKGNoZWNrIDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0NoZWNrID0gY2hlY2s7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0NoZWNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDaGVjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzU2hvdyhzaG93IDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc1Nob3cgPSBzaG93O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzU2hvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvdztcbiAgICB9ICAgIFxuICAgIHB1YmxpYyBnZXQgRmlyc3ROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdG5hbWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgRmlyc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RuYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgTGFzdE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RuYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IExhc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbGFzdG5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0ZWwoKTogQXJyYXk8UGhvbmU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob25lcztcbiAgICB9XG4gICAgcHVibGljIHNldCB0ZWwodmFsdWU6IEFycmF5PFBob25lPikge1xuICAgICAgICB0aGlzLl9waG9uZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlbWFpbCgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtYWlscztcbiAgICB9XG4gICAgcHVibGljIHNldCBlbWFpbCh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLl9lbWFpbHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBhZGRyZXNzKCk6IEFycmF5PEFkZHJlc3M+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYWRkcmVzcyh2YWx1ZTogQXJyYXk8QWRkcmVzcz4pIHtcbiAgICAgICAgdGhpcy5fYWRkcmVzcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZnVsbG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRmlyc3ROYW1lICsgJyAnICsgdGhpcy5MYXN0TmFtZTtcbiAgICB9XG5cbn0iXX0=