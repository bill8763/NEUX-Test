/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "@allianzSND/core";
export class CustomerBirthday {
    /**
     * @param {?} clientID
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} birthdayMonth
     * @param {?} birthdayDate
     */
    constructor(clientID, firstName, lastName, birthdayMonth, birthdayDate) {
        this._clientID = clientID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdayMonth = birthdayMonth;
        this.birthdayDate = birthdayDate;
        if (StringUtils.isEmpty(this.firstName))
            this.firstName = '';
    }
    /**
     * @return {?}
     */
    clone() {
        return new CustomerBirthday(this._clientID, this.firstName, this.lastName, this.birthdayMonth, this.birthdayDate);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerBirthday.prototype._clientID;
    /** @type {?} */
    CustomerBirthday.prototype.lastName;
    /** @type {?} */
    CustomerBirthday.prototype.firstName;
    /** @type {?} */
    CustomerBirthday.prototype.birthdayMonth;
    /** @type {?} */
    CustomerBirthday.prototype.birthdayDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCaXJ0aGRheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJCaXJ0aGRheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU07Ozs7Ozs7O0lBUUYsWUFBWSxRQUFpQixFQUFDLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxhQUFxQixFQUFHLFlBQXFCO1FBRTlHLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUksWUFBWSxDQUFDO1FBR2pDLElBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFakUsQ0FBQzs7OztJQUVELEtBQUs7UUFDRCxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEgsQ0FBQztDQU1KOzs7Ozs7SUEzQkcscUNBQTJCOztJQUMzQixvQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIseUNBQThCOztJQUM5Qix3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBnZXRNb250aCwgZ2V0RGF0ZSB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQmlydGhkYXl7XG4gICAgXG4gICAgcHJpdmF0ZSBfY2xpZW50SUQgOiBzdHJpbmc7XG4gICAgcHVibGljIGxhc3ROYW1lIDogc3RyaW5nO1xuICAgIHB1YmxpYyBmaXJzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHVibGljIGJpcnRoZGF5TW9udGggOiBzdHJpbmc7XG4gICAgcHVibGljIGJpcnRoZGF5RGF0ZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEIDogc3RyaW5nLGZpcnN0TmFtZSA6IHN0cmluZyAsbGFzdE5hbWUgOiBzdHJpbmcsIGJpcnRoZGF5TW9udGg6IHN0cmluZyAsIGJpcnRoZGF5RGF0ZSA6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgICAgIHRoaXMuYmlydGhkYXlNb250aCA9IGJpcnRoZGF5TW9udGg7XG4gICAgICAgIHRoaXMuYmlydGhkYXlEYXRlID0gIGJpcnRoZGF5RGF0ZTtcbiAgICAgICBcblxuICAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmZpcnN0TmFtZSkpIHRoaXMuZmlyc3ROYW1lID0gJyc7XG5cbiAgICB9XG5cbiAgICBjbG9uZSgpOiBDdXN0b21lckJpcnRoZGF5e1xuICAgICAgICByZXR1cm4gbmV3IEN1c3RvbWVyQmlydGhkYXkodGhpcy5fY2xpZW50SUQsIHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmJpcnRoZGF5TW9udGgsIHRoaXMuYmlydGhkYXlEYXRlKTtcbiAgICB9XG5cblxuICAgXG5cbiAgIFxufSJdfQ==