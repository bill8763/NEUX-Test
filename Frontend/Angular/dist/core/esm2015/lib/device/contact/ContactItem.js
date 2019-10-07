/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ContactItem {
    /**
     * @param {?} firstname
     * @param {?} lastname
     * @param {?} birthday
     * @param {?} phones
     * @param {?} emails
     * @param {?} address
     */
    constructor(firstname, lastname, birthday, phones, emails, address) {
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
    /**
     * @param {?} birthday
     * @return {?}
     */
    set Birthday(birthday) {
        this._birthday = birthday;
    }
    /**
     * @return {?}
     */
    get Birthday() {
        return this._birthday;
    }
    /**
     * @param {?} check
     * @return {?}
     */
    set isCheck(check) {
        this._isCheck = check;
    }
    /**
     * @return {?}
     */
    get isCheck() {
        return this._isCheck;
    }
    /**
     * @param {?} show
     * @return {?}
     */
    set isShow(show) {
        this._isShow = show;
    }
    /**
     * @return {?}
     */
    get isShow() {
        return this._isShow;
    }
    /**
     * @return {?}
     */
    get FirstName() {
        return this._firstname;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set FirstName(value) {
        this._firstname = value;
    }
    /**
     * @return {?}
     */
    get LastName() {
        return this._lastname;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set LastName(value) {
        this._lastname = value;
    }
    /**
     * @return {?}
     */
    get tel() {
        return this._phones;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tel(value) {
        this._phones = value;
    }
    /**
     * @return {?}
     */
    get email() {
        return this._emails;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set email(value) {
        this._emails = value;
    }
    /**
     * @return {?}
     */
    get address() {
        return this._address;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set address(value) {
        this._address = value;
    }
    /**
     * @return {?}
     */
    get fullname() {
        return this.FirstName + ' ' + this.LastName;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdEl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RldmljZS9jb250YWN0L0NvbnRhY3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNOzs7Ozs7Ozs7SUFVRixZQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTztRQUYxRCxhQUFRLEdBQWEsS0FBSyxDQUFDO1FBQzNCLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFFN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFXLFFBQVEsQ0FBQyxRQUFhO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE9BQU8sQ0FBQyxLQUFlO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFXLE1BQU0sQ0FBQyxJQUFjO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxJQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUFXLEdBQUcsQ0FBQyxLQUFtQjtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBb0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELElBQVcsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQXFCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEQsQ0FBQztDQUVKOzs7Ozs7SUE1RUcsaUNBQTJCOzs7OztJQUMzQixnQ0FBMEI7Ozs7O0lBQzFCLDhCQUE4Qjs7Ozs7SUFDOUIsOEJBQStCOzs7OztJQUMvQiwrQkFBaUM7Ozs7O0lBQ2pDLGdDQUF5Qjs7SUFFekIsK0JBQWtDOztJQUNsQyw4QkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSBcIi4vQWRkcmVzc1wiO1xuaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi9QaG9uZVwiO1xuXG5leHBvcnQgY2xhc3MgQ29udGFjdEl0ZW0ge1xuICAgIHByaXZhdGUgX2ZpcnN0bmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2xhc3RuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGhvbmVzOiBBcnJheTxQaG9uZT47XG4gICAgcHJpdmF0ZSBfZW1haWxzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgX2FkZHJlc3M6IEFycmF5PEFkZHJlc3M+O1xuICAgIHByaXZhdGUgX2JpcnRoZGF5IDogRGF0ZTtcbiAgICBcbiAgICBwdWJsaWMgX2lzQ2hlY2sgOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIF9pc1Nob3cgOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoZmlyc3RuYW1lLCBsYXN0bmFtZSxiaXJ0aGRheSwgcGhvbmVzLCBlbWFpbHMsIGFkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RuYW1lID0gZmlyc3RuYW1lO1xuICAgICAgICB0aGlzLl9sYXN0bmFtZSA9IGxhc3RuYW1lO1xuICAgICAgICB0aGlzLl9iaXJ0aGRheSA9IGJpcnRoZGF5O1xuICAgICAgICB0aGlzLl9waG9uZXMgPSBwaG9uZXM7XG4gICAgICAgIHRoaXMuX2VtYWlscyA9IGVtYWlscztcbiAgICAgICAgdGhpcy5fYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuX2lzU2hvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBCaXJ0aGRheShiaXJ0aGRheTpEYXRlKSB7XG4gICAgICAgIHRoaXMuX2JpcnRoZGF5ID0gYmlydGhkYXk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBCaXJ0aGRheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpcnRoZGF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNDaGVjayhjaGVjayA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNDaGVjayA9IGNoZWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNDaGVjaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ2hlY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1Nob3coc2hvdyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNTaG93ID0gc2hvdztcbiAgICB9XG4gICAgcHVibGljIGdldCBpc1Nob3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Nob3c7XG4gICAgfSAgICBcbiAgICBwdWJsaWMgZ2V0IEZpcnN0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3RuYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEZpcnN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0bmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IExhc3ROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0bmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBMYXN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhc3RuYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGVsKCk6IEFycmF5PFBob25lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waG9uZXM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGVsKHZhbHVlOiBBcnJheTxQaG9uZT4pIHtcbiAgICAgICAgdGhpcy5fcGhvbmVzID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZW1haWwoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWFpbHM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZW1haWwodmFsdWU6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5fZW1haWxzID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYWRkcmVzcygpOiBBcnJheTxBZGRyZXNzPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGFkZHJlc3ModmFsdWU6IEFycmF5PEFkZHJlc3M+KSB7XG4gICAgICAgIHRoaXMuX2FkZHJlc3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZ1bGxuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkZpcnN0TmFtZSArICcgJyArIHRoaXMuTGFzdE5hbWU7XG4gICAgfVxuXG59Il19