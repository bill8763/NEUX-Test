/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "@allianzSND/core";
export class CustomerAddress {
    /**
     * @param {?} clientID
     * @param {?} addressType
     * @param {?} country
     * @param {?} city
     * @param {?} area
     * @param {?} zipcode
     * @param {?} address
     * @param {?} dataSorce
     */
    constructor(clientID, addressType, country, city, area, zipcode, address, dataSorce) {
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
    toFullAddress() {
        /** @type {?} */
        let array = [];
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
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return StringUtils.isEmpty(this.country)
            && StringUtils.isEmpty(this.city) && StringUtils.isEmpty(this.area)
            && StringUtils.isEmpty(this.zipcode) && StringUtils.isEmpty(this.address);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9DdXN0b21lckFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNOzs7Ozs7Ozs7OztJQVlGLFlBQVksUUFBZSxFQUFDLFdBQW9CLEVBQUMsT0FBZ0IsRUFBQyxJQUFhLEVBQUMsSUFBYSxFQUFDLE9BQWdCLEVBQUMsT0FBZ0IsRUFBQyxTQUFrQjtRQUM5SSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUVoQyxDQUFDOzs7O0lBRUQsYUFBYTs7WUFFTCxLQUFLLEdBQUcsRUFBRTtRQUNkLElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLE9BQU87UUFDVixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztlQUNyQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7ZUFDaEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNKOzs7SUF2Q0csbUNBQXlCOztJQUN6QixzQ0FBNEI7O0lBQzVCLGtDQUF3Qjs7SUFDeEIsK0JBQXFCOztJQUNyQiwrQkFBcUI7O0lBQ3JCLGtDQUF3Qjs7SUFDeEIsa0NBQXdCOztJQUN4QixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckFkZHJlc3N7XG5cbiAgICBwdWJsaWMgY2xpZW50SUQgOiBzdHJpbmc7XG4gICAgcHVibGljIGFkZHJlc3NUeXBlIDogc3RyaW5nO1xuICAgIHB1YmxpYyBjb3VudHJ5IDogc3RyaW5nO1xuICAgIHB1YmxpYyBjaXR5IDogc3RyaW5nO1xuICAgIHB1YmxpYyBhcmVhIDogc3RyaW5nO1xuICAgIHB1YmxpYyB6aXBjb2RlIDogc3RyaW5nO1xuICAgIHB1YmxpYyBhZGRyZXNzIDogc3RyaW5nO1xuICAgIHB1YmxpYyBkYXRhU291cmNlIDogc3RyaW5nO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SUQ6c3RyaW5nLGFkZHJlc3NUeXBlIDogc3RyaW5nLGNvdW50cnkgOiBzdHJpbmcsY2l0eSA6IHN0cmluZyxhcmVhIDogc3RyaW5nLHppcGNvZGUgOiBzdHJpbmcsYWRkcmVzcyA6IHN0cmluZyxkYXRhU29yY2UgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmNsaWVudElEID0gY2xpZW50SUQ7XG4gICAgICAgIHRoaXMuYWRkcmVzc1R5cGUgPSBhZGRyZXNzVHlwZTtcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICAgICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICAgICAgdGhpcy56aXBjb2RlID0gemlwY29kZTtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gZGF0YVNvcmNlO1xuXG4gICAgfVxuXG4gICAgdG9GdWxsQWRkcmVzcygpIHsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5jb3VudHJ5KSkgYXJyYXkucHVzaCh0aGlzLmNvdW50cnkpO1xuICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuY2l0eSkpIGFycmF5LnB1c2godGhpcy5jaXR5KTtcbiAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmFyZWEpKSBhcnJheS5wdXNoKHRoaXMuYXJlYSk7XG4gICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy56aXBjb2RlKSkgYXJyYXkucHVzaCh0aGlzLnppcGNvZGUpO1xuICAgICAgICBpZihTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuYWRkcmVzcykpIGFycmF5LnB1c2godGhpcy5hZGRyZXNzKTtcblxuICAgICAgICByZXR1cm4gYXJyYXkuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb3VudHJ5KSBcbiAgICAgICAgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNpdHkpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5hcmVhKVxuICAgICAgICAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuemlwY29kZSkgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmFkZHJlc3MpO1xuICAgIH1cbn1cbiJdfQ==