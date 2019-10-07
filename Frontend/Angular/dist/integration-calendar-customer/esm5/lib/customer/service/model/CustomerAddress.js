/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "@allianzSND/core";
var CustomerAddress = /** @class */ (function () {
    function CustomerAddress(clientID, addressType, country, city, area, zipcode, address, dataSorce) {
        this.clientID = clientID;
        this.addressType = addressType;
        this.country = country;
        this.city = city;
        this.area = area;
        this.zipcode = zipcode;
        this.address = address;
        this.dataSource = dataSorce;
    }
    /**
     * @return {?}
     */
    CustomerAddress.prototype.toFullAddress = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var array = [];
        if (StringUtils.isNotEmpty(this.country))
            array.push(this.country);
        if (StringUtils.isNotEmpty(this.city))
            array.push(this.city);
        if (StringUtils.isNotEmpty(this.area))
            array.push(this.area);
        if (StringUtils.isNotEmpty(this.zipcode))
            array.push(this.zipcode);
        if (StringUtils.isNotEmpty(this.address))
            array.push(this.address);
        return array.join(', ');
    };
    /**
     * @return {?}
     */
    CustomerAddress.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return StringUtils.isEmpty(this.country)
            && StringUtils.isEmpty(this.city) && StringUtils.isEmpty(this.area)
            && StringUtils.isEmpty(this.zipcode) && StringUtils.isEmpty(this.address);
    };
    return CustomerAddress;
}());
export { CustomerAddress };
if (false) {
    /** @type {?} */
    CustomerAddress.prototype.clientID;
    /** @type {?} */
    CustomerAddress.prototype.addressType;
    /** @type {?} */
    CustomerAddress.prototype.country;
    /** @type {?} */
    CustomerAddress.prototype.city;
    /** @type {?} */
    CustomerAddress.prototype.area;
    /** @type {?} */
    CustomerAddress.prototype.zipcode;
    /** @type {?} */
    CustomerAddress.prototype.address;
    /** @type {?} */
    CustomerAddress.prototype.dataSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9tb2RlbC9DdXN0b21lckFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQVdJLHlCQUFZLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxPQUFlLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLFNBQWlCO1FBQy9JLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBRWhDLENBQUM7Ozs7SUFFRCx1Q0FBYTs7O0lBQWI7O1lBRVEsS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSxpQ0FBTzs7O0lBQWQ7UUFDSSxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztlQUNqQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7ZUFDaEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQzs7OztJQXRDRyxtQ0FBd0I7O0lBQ3hCLHNDQUEyQjs7SUFDM0Isa0NBQXVCOztJQUN2QiwrQkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsa0NBQXVCOztJQUN2QixrQ0FBdUI7O0lBQ3ZCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQWRkcmVzcyB7XG5cbiAgICBwdWJsaWMgY2xpZW50SUQ6IHN0cmluZztcbiAgICBwdWJsaWMgYWRkcmVzc1R5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgY291bnRyeTogc3RyaW5nO1xuICAgIHB1YmxpYyBjaXR5OiBzdHJpbmc7XG4gICAgcHVibGljIGFyZWE6IHN0cmluZztcbiAgICBwdWJsaWMgemlwY29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmc7XG4gICAgcHVibGljIGRhdGFTb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEOiBzdHJpbmcsIGFkZHJlc3NUeXBlOiBzdHJpbmcsIGNvdW50cnk6IHN0cmluZywgY2l0eTogc3RyaW5nLCBhcmVhOiBzdHJpbmcsIHppcGNvZGU6IHN0cmluZywgYWRkcmVzczogc3RyaW5nLCBkYXRhU29yY2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsaWVudElEID0gY2xpZW50SUQ7XG4gICAgICAgIHRoaXMuYWRkcmVzc1R5cGUgPSBhZGRyZXNzVHlwZTtcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICAgICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICAgICAgdGhpcy56aXBjb2RlID0gemlwY29kZTtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvcmNlO1xuXG4gICAgfVxuXG4gICAgdG9GdWxsQWRkcmVzcygpIHtcblxuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5jb3VudHJ5KSkgYXJyYXkucHVzaCh0aGlzLmNvdW50cnkpO1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmNpdHkpKSBhcnJheS5wdXNoKHRoaXMuY2l0eSk7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuYXJlYSkpIGFycmF5LnB1c2godGhpcy5hcmVhKTtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy56aXBjb2RlKSkgYXJyYXkucHVzaCh0aGlzLnppcGNvZGUpO1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmFkZHJlc3MpKSBhcnJheS5wdXNoKHRoaXMuYWRkcmVzcyk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5LmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY291bnRyeSlcbiAgICAgICAgICAgICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jaXR5KSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuYXJlYSlcbiAgICAgICAgICAgICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy56aXBjb2RlKSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuYWRkcmVzcyk7XG4gICAgfVxufVxuIl19