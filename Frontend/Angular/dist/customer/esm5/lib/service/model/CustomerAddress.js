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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9DdXN0b21lckFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQVlJLHlCQUFZLFFBQWUsRUFBQyxXQUFvQixFQUFDLE9BQWdCLEVBQUMsSUFBYSxFQUFDLElBQWEsRUFBQyxPQUFnQixFQUFDLE9BQWdCLEVBQUMsU0FBa0I7UUFDOUksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFFaEMsQ0FBQzs7OztJQUVELHVDQUFhOzs7SUFBYjs7WUFFUSxLQUFLLEdBQUcsRUFBRTtRQUNkLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLGlDQUFPOzs7SUFBZDtRQUNJLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2VBQ3JDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztlQUNoRSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDOzs7O0lBdkNHLG1DQUF5Qjs7SUFDekIsc0NBQTRCOztJQUM1QixrQ0FBd0I7O0lBQ3hCLCtCQUFxQjs7SUFDckIsK0JBQXFCOztJQUNyQixrQ0FBd0I7O0lBQ3hCLGtDQUF3Qjs7SUFDeEIscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJBZGRyZXNze1xuXG4gICAgcHVibGljIGNsaWVudElEIDogc3RyaW5nO1xuICAgIHB1YmxpYyBhZGRyZXNzVHlwZSA6IHN0cmluZztcbiAgICBwdWJsaWMgY291bnRyeSA6IHN0cmluZztcbiAgICBwdWJsaWMgY2l0eSA6IHN0cmluZztcbiAgICBwdWJsaWMgYXJlYSA6IHN0cmluZztcbiAgICBwdWJsaWMgemlwY29kZSA6IHN0cmluZztcbiAgICBwdWJsaWMgYWRkcmVzcyA6IHN0cmluZztcbiAgICBwdWJsaWMgZGF0YVNvdXJjZSA6IHN0cmluZztcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEOnN0cmluZyxhZGRyZXNzVHlwZSA6IHN0cmluZyxjb3VudHJ5IDogc3RyaW5nLGNpdHkgOiBzdHJpbmcsYXJlYSA6IHN0cmluZyx6aXBjb2RlIDogc3RyaW5nLGFkZHJlc3MgOiBzdHJpbmcsZGF0YVNvcmNlIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5jbGllbnRJRCA9IGNsaWVudElEO1xuICAgICAgICB0aGlzLmFkZHJlc3NUeXBlID0gYWRkcmVzc1R5cGU7XG4gICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gICAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gICAgICAgIHRoaXMuemlwY29kZSA9IHppcGNvZGU7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IGRhdGFTb3JjZTtcblxuICAgIH1cblxuICAgIHRvRnVsbEFkZHJlc3MoKSB7ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuY291bnRyeSkpIGFycmF5LnB1c2godGhpcy5jb3VudHJ5KTtcbiAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmNpdHkpKSBhcnJheS5wdXNoKHRoaXMuY2l0eSk7XG4gICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5hcmVhKSkgYXJyYXkucHVzaCh0aGlzLmFyZWEpO1xuICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuemlwY29kZSkpIGFycmF5LnB1c2godGhpcy56aXBjb2RlKTtcbiAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmFkZHJlc3MpKSBhcnJheS5wdXNoKHRoaXMuYWRkcmVzcyk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5LmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY291bnRyeSkgXG4gICAgICAgICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jaXR5KSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuYXJlYSlcbiAgICAgICAgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnppcGNvZGUpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5hZGRyZXNzKTtcbiAgICB9XG59XG4iXX0=