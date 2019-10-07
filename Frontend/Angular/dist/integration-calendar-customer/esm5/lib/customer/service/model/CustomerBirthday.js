/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "@allianzSND/core";
var CustomerBirthday = /** @class */ (function () {
    function CustomerBirthday(clientID, firstName, lastName, birthdayMonth, birthdayDate) {
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
    CustomerBirthday.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new CustomerBirthday(this._clientID, this.firstName, this.lastName, this.birthdayMonth, this.birthdayDate);
    };
    return CustomerBirthday;
}());
export { CustomerBirthday };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCaXJ0aGRheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2ludGVncmF0aW9uLWNhbGVuZGFyLWN1c3RvbWVyLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbWVyL3NlcnZpY2UvbW9kZWwvQ3VzdG9tZXJCaXJ0aGRheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DO0lBUUksMEJBQVksUUFBaUIsRUFBQyxTQUFrQixFQUFFLFFBQWlCLEVBQUUsYUFBcUIsRUFBRyxZQUFxQjtRQUU5RyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFJLFlBQVksQ0FBQztRQUdqQyxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRWpFLENBQUM7Ozs7SUFFRCxnQ0FBSzs7O0lBQUw7UUFDSSxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQU1MLHVCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQzs7Ozs7OztJQTNCRyxxQ0FBMkI7O0lBQzNCLG9DQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQix5Q0FBOEI7O0lBQzlCLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IGdldE1vbnRoLCBnZXREYXRlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJCaXJ0aGRheXtcbiAgICBcbiAgICBwcml2YXRlIF9jbGllbnRJRCA6IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHVibGljIGZpcnN0TmFtZSA6IHN0cmluZztcbiAgICBwdWJsaWMgYmlydGhkYXlNb250aCA6IHN0cmluZztcbiAgICBwdWJsaWMgYmlydGhkYXlEYXRlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SUQgOiBzdHJpbmcsZmlyc3ROYW1lIDogc3RyaW5nICxsYXN0TmFtZSA6IHN0cmluZywgYmlydGhkYXlNb250aDogc3RyaW5nICwgYmlydGhkYXlEYXRlIDogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICAgICAgdGhpcy5iaXJ0aGRheU1vbnRoID0gYmlydGhkYXlNb250aDtcbiAgICAgICAgdGhpcy5iaXJ0aGRheURhdGUgPSAgYmlydGhkYXlEYXRlO1xuICAgICAgIFxuXG4gICAgICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuZmlyc3ROYW1lKSkgdGhpcy5maXJzdE5hbWUgPSAnJztcblxuICAgIH1cblxuICAgIGNsb25lKCk6IEN1c3RvbWVyQmlydGhkYXl7XG4gICAgICAgIHJldHVybiBuZXcgQ3VzdG9tZXJCaXJ0aGRheSh0aGlzLl9jbGllbnRJRCwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUsIHRoaXMuYmlydGhkYXlNb250aCwgdGhpcy5iaXJ0aGRheURhdGUpO1xuICAgIH1cblxuXG4gICBcblxuICAgXG59Il19