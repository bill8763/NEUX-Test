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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9tb2RlbC9DdXN0b21lckFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNOzs7Ozs7Ozs7OztJQVdGLFlBQVksUUFBZ0IsRUFBRSxXQUFtQixFQUFFLE9BQWUsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsU0FBaUI7UUFDL0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFFaEMsQ0FBQzs7OztJQUVELGFBQWE7O1lBRUwsS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ1YsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7ZUFDakMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2VBQ2hFLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDSjs7O0lBdENHLG1DQUF3Qjs7SUFDeEIsc0NBQTJCOztJQUMzQixrQ0FBdUI7O0lBQ3ZCLCtCQUFvQjs7SUFDcEIsK0JBQW9COztJQUNwQixrQ0FBdUI7O0lBQ3ZCLGtDQUF1Qjs7SUFDdkIscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJBZGRyZXNzIHtcblxuICAgIHB1YmxpYyBjbGllbnRJRDogc3RyaW5nO1xuICAgIHB1YmxpYyBhZGRyZXNzVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmc7XG4gICAgcHVibGljIGNpdHk6IHN0cmluZztcbiAgICBwdWJsaWMgYXJlYTogc3RyaW5nO1xuICAgIHB1YmxpYyB6aXBjb2RlOiBzdHJpbmc7XG4gICAgcHVibGljIGFkZHJlc3M6IHN0cmluZztcbiAgICBwdWJsaWMgZGF0YVNvdXJjZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SUQ6IHN0cmluZywgYWRkcmVzc1R5cGU6IHN0cmluZywgY291bnRyeTogc3RyaW5nLCBjaXR5OiBzdHJpbmcsIGFyZWE6IHN0cmluZywgemlwY29kZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIGRhdGFTb3JjZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICAgICAgdGhpcy5hZGRyZXNzVHlwZSA9IGFkZHJlc3NUeXBlO1xuICAgICAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgICAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICAgICAgICB0aGlzLnppcGNvZGUgPSB6aXBjb2RlO1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBkYXRhU29yY2U7XG5cbiAgICB9XG5cbiAgICB0b0Z1bGxBZGRyZXNzKCkge1xuXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLmNvdW50cnkpKSBhcnJheS5wdXNoKHRoaXMuY291bnRyeSk7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuY2l0eSkpIGFycmF5LnB1c2godGhpcy5jaXR5KTtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzTm90RW1wdHkodGhpcy5hcmVhKSkgYXJyYXkucHVzaCh0aGlzLmFyZWEpO1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLnppcGNvZGUpKSBhcnJheS5wdXNoKHRoaXMuemlwY29kZSk7XG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc05vdEVtcHR5KHRoaXMuYWRkcmVzcykpIGFycmF5LnB1c2godGhpcy5hZGRyZXNzKTtcblxuICAgICAgICByZXR1cm4gYXJyYXkuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb3VudHJ5KVxuICAgICAgICAgICAgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLmNpdHkpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5hcmVhKVxuICAgICAgICAgICAgJiYgU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLnppcGNvZGUpICYmIFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5hZGRyZXNzKTtcbiAgICB9XG59XG4iXX0=