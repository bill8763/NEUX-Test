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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQztJQVlJLHNCQUFZLFFBQWlCLEVBQUMsU0FBa0IsRUFBRSxRQUFpQixFQUFFLFdBQW9CLEVBQ3BGLGlCQUEwQixFQUFDLFFBQWtCLEVBQUcsYUFBdUIsRUFBRyxlQUF3QjtRQUVuRyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFFcEMsSUFBRyxlQUFlLElBQUksR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBRUQsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBR0Qsc0JBQUksdUNBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFrREQsVUFBa0IsYUFBdUI7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDeEMsQ0FBQzs7O09BcERBO0lBRUQsc0JBQUksa0NBQVE7Ozs7UUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQTBDRCxVQUFhLFFBQWtCO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzlCLENBQUM7OztPQTVDQTtJQUVELHNCQUFJLGtDQUFROzs7O1FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFrQkQsVUFBYSxRQUFpQjtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSxtQ0FBUzs7OztRQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBa0JELFVBQWMsSUFBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSxrQ0FBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBa0JELFVBQWEsSUFBYTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSw2QkFBRzs7OztRQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBa0JELFVBQVEsR0FBWTtZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FwQkE7SUFFRCxzQkFBSSwyQ0FBaUI7Ozs7UUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDOzs7OztRQWtCRCxVQUFzQixpQkFBMEI7WUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBQ2hELENBQUM7OztPQXBCQTtJQThCRCxzQkFBSSxxQ0FBVzs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVc7Ozs7O1FBQWYsVUFBZ0IsV0FBcUI7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBRUQsVUFBYSxRQUFnQjtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQUtMLG1CQUFDO0FBQUQsQ0FBQyxBQXRHRCxJQXNHQzs7Ozs7OztJQXBHRyxpQ0FBMkI7Ozs7O0lBQzNCLGtDQUE0Qjs7Ozs7SUFDNUIsaUNBQTJCOzs7OztJQUMzQixpQ0FBMEI7Ozs7O0lBQzFCLDRCQUFzQjs7Ozs7SUFDdEIsMENBQW9DOzs7OztJQUNwQyxpQ0FBNEI7Ozs7O0lBQzVCLHNDQUFpQzs7Ozs7SUFDakMsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJJdGVte1xuICAgIFxuICAgIHByaXZhdGUgX2NsaWVudElEIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ZpcnN0TmFtZSA6IHN0cmluZztcbiAgICBwcml2YXRlIF9sYXN0TmFtZSA6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaG93TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3RhZyA6IHN0cmluZztcbiAgICBwcml2YXRlIF9jb21wbGVtZW50UGVyY2VudCA6IG51bWJlcjtcbiAgICBwcml2YXRlIF9pc0ZvbGxvdyA6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaXNPdGhlclNvdXJjZSA6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaXNIaWdobGlnaHQgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50SUQgOiBzdHJpbmcsZmlyc3ROYW1lIDogc3RyaW5nICxsYXN0TmFtZSA6IHN0cmluZywgcG9zc2liaWxpdHkgOiBzdHJpbmcgLFxuICAgICAgICAgY29tcGxlbWVudFBlcmNlbnQgOiBudW1iZXIsaXNGb2xsb3cgOiBib29sZWFuICwgaXNPdGhlclNvdXJjZSA6IGJvb2xlYW4gLCBpc092ZXJUaW1lQWxlcnQgOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICAgICAgICB0aGlzLl9maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgICAgIHRoaXMuX3RhZyA9IHBvc3NpYmlsaXR5O1xuICAgICAgICB0aGlzLl9jb21wbGVtZW50UGVyY2VudCA9IGNvbXBsZW1lbnRQZXJjZW50O1xuICAgICAgICB0aGlzLl9pc0ZvbGxvdyA9IGlzRm9sbG93O1xuICAgICAgICB0aGlzLl9pc090aGVyU291cmNlID0gaXNPdGhlclNvdXJjZTtcbiAgICAgICAgXG4gICAgICAgIGlmKGlzT3ZlclRpbWVBbGVydCA9PSAnWScpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzSGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5fZmlyc3ROYW1lKSkgdGhpcy5fZmlyc3ROYW1lID0gJyc7XG4gICAgfVxuXG5cbiAgICBnZXQgaXNPdGhlclNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3RoZXJTb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0IGlzRm9sbG93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNGb2xsb3c7XG4gICAgfVxuXG4gICAgZ2V0IGNsaWVudElEKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRJRDtcbiAgICB9XG5cbiAgICBnZXQgZmlyc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGxhc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgdGFnKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWc7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBsZW1lbnRQZXJjZW50KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGVtZW50UGVyY2VudDtcbiAgICB9XG5cbiAgICBzZXQgY2xpZW50SUQoY2xpZW50SUQgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9jbGllbnRJRCA9IGNsaWVudElEO1xuICAgIH0gICAgXG5cbiAgICBzZXQgZmlyc3ROYW1lKG5hbWUgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9maXJzdE5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHNldCBsYXN0TmFtZShuYW1lIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fbGFzdE5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHNldCB0YWcodGFnIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fdGFnID0gdGFnO1xuICAgIH1cblxuICAgIHNldCBjb21wbGVtZW50UGVyY2VudChjb21wbGVtZW50UGVyY2VudCA6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2NvbXBsZW1lbnRQZXJjZW50ID0gY29tcGxlbWVudFBlcmNlbnQ7XG4gICAgfVxuXG4gICAgc2V0IGlzRm9sbG93KGlzRm9sbG93IDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0ZvbGxvdyA9IGlzRm9sbG93O1xuICAgIH1cblxuICAgIHNldCBpc090aGVyU291cmNlKGlzT3RoZXJTb3VyY2UgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzT3RoZXJTb3VyY2UgPSBpc090aGVyU291cmNlO1xuICAgIH1cblxuICAgIGdldCBpc0hpZ2hsaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSGlnaGxpZ2h0O1xuICAgIH1cblxuICAgIHNldCBpc0hpZ2hMaWdodChpc0hpZ2hMaWdodCA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNIaWdobGlnaHQgPSBpc0hpZ2hMaWdodDtcbiAgICB9XG5cbiAgICBnZXQgc2hvd05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93TmFtZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IHNob3dOYW1lKHNob3dOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2hvd05hbWUgPSBzaG93TmFtZTtcbiAgICB9XG59Il19