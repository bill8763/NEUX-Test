/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "@allianzSND/core";
var CustomerItem = /** @class */ (function () {
    function CustomerItem(clientID, firstName, lastName, possibility, complementPercent, isFollow, isOtherSource, isOverTimeAlert) {
        this._clientID = clientID;
        this._firstName = firstName;
        this._lastName = lastName;
        this._tag = possibility;
        this._complementPercent = complementPercent;
        this._isFollow = isFollow;
        this._isOtherSource = isOtherSource;
        if (isOverTimeAlert == 'Y') {
            this._isHighlight = true;
        }
        if (StringUtils.isEmpty(this._firstName))
            this._firstName = '';
    }
    Object.defineProperty(CustomerItem.prototype, "isOtherSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOtherSource;
        },
        set: /**
         * @param {?} isOtherSource
         * @return {?}
         */
        function (isOtherSource) {
            this._isOtherSource = isOtherSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "isFollow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isFollow;
        },
        set: /**
         * @param {?} isFollow
         * @return {?}
         */
        function (isFollow) {
            this._isFollow = isFollow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "clientID", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clientID;
        },
        set: /**
         * @param {?} clientID
         * @return {?}
         */
        function (clientID) {
            this._clientID = clientID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "firstName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstName;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._firstName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "lastName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lastName;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._lastName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "tag", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tag;
        },
        set: /**
         * @param {?} tag
         * @return {?}
         */
        function (tag) {
            this._tag = tag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "complementPercent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._complementPercent;
        },
        set: /**
         * @param {?} complementPercent
         * @return {?}
         */
        function (complementPercent) {
            this._complementPercent = complementPercent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "isHighlight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isHighlight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "isHighLight", {
        set: /**
         * @param {?} isHighLight
         * @return {?}
         */
        function (isHighLight) {
            this._isHighlight = isHighLight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerItem.prototype, "showName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showName;
        },
        set: /**
         * @param {?} showName
         * @return {?}
         */
        function (showName) {
            this._showName = showName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerItem.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new CustomerItem(this._clientID, this._firstName, this._lastName, this._tag, this._complementPercent, this._isFollow, this._isOtherSource, (this._isHighlight ? 'Y' : 'N'));
    };
    return CustomerItem;
}());
export { CustomerItem };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._firstName;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._lastName;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._showName;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._tag;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._complementPercent;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._isFollow;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._isOtherSource;
    /**
     * @type {?}
     * @private
     */
    CustomerItem.prototype._isHighlight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQVlJLHNCQUFZLFFBQWlCLEVBQUMsU0FBa0IsRUFBRSxRQUFpQixFQUFFLFdBQW9CLEVBQ3BGLGlCQUEwQixFQUFDLFFBQWtCLEVBQUcsYUFBdUIsRUFBRyxlQUF3QjtRQUVuRyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFFcEMsSUFBRyxlQUFlLElBQUksR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBRUQsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBR0Qsc0JBQUksdUNBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFrREQsVUFBa0IsYUFBdUI7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDeEMsQ0FBQzs7O09BcERBO0lBRUQsc0JBQUksa0NBQVE7Ozs7UUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQTBDRCxVQUFhLFFBQWtCO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzlCLENBQUM7OztPQTVDQTtJQUVELHNCQUFJLGtDQUFROzs7O1FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFrQkQsVUFBYSxRQUFpQjtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSxtQ0FBUzs7OztRQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBa0JELFVBQWMsSUFBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSxrQ0FBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBa0JELFVBQWEsSUFBYTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSw2QkFBRzs7OztRQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBa0JELFVBQVEsR0FBWTtZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSwyQ0FBaUI7Ozs7UUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDOzs7OztRQWtCRCxVQUFzQixpQkFBMEI7WUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBQ2hELENBQUM7OztPQXBCQTtJQThCRCxzQkFBSSxxQ0FBVzs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVc7Ozs7O1FBQWYsVUFBZ0IsV0FBcUI7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBRUQsVUFBYSxRQUFnQjtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FKQTs7OztJQU9ELDRCQUFLOzs7SUFBTDtRQUNJLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZMLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUEzR0QsSUEyR0M7Ozs7Ozs7SUF6R0csaUNBQTJCOzs7OztJQUMzQixrQ0FBNEI7Ozs7O0lBQzVCLGlDQUEyQjs7Ozs7SUFDM0IsaUNBQTBCOzs7OztJQUMxQiw0QkFBc0I7Ozs7O0lBQ3RCLDBDQUFvQzs7Ozs7SUFDcEMsaUNBQTRCOzs7OztJQUM1QixzQ0FBaUM7Ozs7O0lBQ2pDLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVySXRlbXtcbiAgICBcbiAgICBwcml2YXRlIF9jbGllbnRJRCA6IHN0cmluZztcbiAgICBwcml2YXRlIF9maXJzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGFzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2hvd05hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF90YWcgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY29tcGxlbWVudFBlcmNlbnQgOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaXNGb2xsb3cgOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzT3RoZXJTb3VyY2UgOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzSGlnaGxpZ2h0IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEIDogc3RyaW5nLGZpcnN0TmFtZSA6IHN0cmluZyAsbGFzdE5hbWUgOiBzdHJpbmcsIHBvc3NpYmlsaXR5IDogc3RyaW5nICxcbiAgICAgICAgIGNvbXBsZW1lbnRQZXJjZW50IDogbnVtYmVyLGlzRm9sbG93IDogYm9vbGVhbiAsIGlzT3RoZXJTb3VyY2UgOiBib29sZWFuICwgaXNPdmVyVGltZUFsZXJ0IDogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLl9sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgICAgICB0aGlzLl90YWcgPSBwb3NzaWJpbGl0eTtcbiAgICAgICAgdGhpcy5fY29tcGxlbWVudFBlcmNlbnQgPSBjb21wbGVtZW50UGVyY2VudDtcbiAgICAgICAgdGhpcy5faXNGb2xsb3cgPSBpc0ZvbGxvdztcbiAgICAgICAgdGhpcy5faXNPdGhlclNvdXJjZSA9IGlzT3RoZXJTb3VyY2U7XG4gICAgICAgIFxuICAgICAgICBpZihpc092ZXJUaW1lQWxlcnQgPT0gJ1knKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0hpZ2hsaWdodCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2ZpcnN0TmFtZSkpIHRoaXMuX2ZpcnN0TmFtZSA9ICcnO1xuICAgIH1cblxuXG4gICAgZ2V0IGlzT3RoZXJTb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc090aGVyU291cmNlO1xuICAgIH1cblxuICAgIGdldCBpc0ZvbGxvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRm9sbG93O1xuICAgIH1cblxuICAgIGdldCBjbGllbnRJRCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50SUQ7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBsYXN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHRhZygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFnO1xuICAgIH1cblxuICAgIGdldCBjb21wbGVtZW50UGVyY2VudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxlbWVudFBlcmNlbnQ7XG4gICAgfVxuXG4gICAgc2V0IGNsaWVudElEKGNsaWVudElEIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICB9ICAgIFxuXG4gICAgc2V0IGZpcnN0TmFtZShuYW1lIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbGFzdE5hbWUobmFtZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgdGFnKHRhZyA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3RhZyA9IHRhZztcbiAgICB9XG5cbiAgICBzZXQgY29tcGxlbWVudFBlcmNlbnQoY29tcGxlbWVudFBlcmNlbnQgOiBudW1iZXIpe1xuICAgICAgICB0aGlzLl9jb21wbGVtZW50UGVyY2VudCA9IGNvbXBsZW1lbnRQZXJjZW50O1xuICAgIH1cblxuICAgIHNldCBpc0ZvbGxvdyhpc0ZvbGxvdyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGb2xsb3cgPSBpc0ZvbGxvdztcbiAgICB9XG5cbiAgICBzZXQgaXNPdGhlclNvdXJjZShpc090aGVyU291cmNlIDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc090aGVyU291cmNlID0gaXNPdGhlclNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXQgaXNIaWdobGlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0hpZ2hsaWdodDtcbiAgICB9XG5cbiAgICBzZXQgaXNIaWdoTGlnaHQoaXNIaWdoTGlnaHQgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzSGlnaGxpZ2h0ID0gaXNIaWdoTGlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hvd05hbWU7XG4gICAgfVxuICAgIFxuICAgIHNldCBzaG93TmFtZShzaG93TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Nob3dOYW1lID0gc2hvd05hbWU7XG4gICAgfVxuXG5cbiAgICBjbG9uZSgpOkN1c3RvbWVySXRlbSB7XG4gICAgICAgIHJldHVybiBuZXcgQ3VzdG9tZXJJdGVtKHRoaXMuX2NsaWVudElELCB0aGlzLl9maXJzdE5hbWUsIHRoaXMuX2xhc3ROYW1lLCB0aGlzLl90YWcsIHRoaXMuX2NvbXBsZW1lbnRQZXJjZW50LCB0aGlzLl9pc0ZvbGxvdywgdGhpcy5faXNPdGhlclNvdXJjZSwgKHRoaXMuX2lzSGlnaGxpZ2h0ID8gJ1knIDogJ04nKSk7XG4gICAgfVxufSJdfQ==