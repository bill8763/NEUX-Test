/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StringUtils } from "@allianzSND/core";
export class CustomerItem {
    /**
     * @param {?} clientID
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} possibility
     * @param {?} complementPercent
     * @param {?} isFollow
     * @param {?} isOtherSource
     * @param {?} isOverTimeAlert
     */
    constructor(clientID, firstName, lastName, possibility, complementPercent, isFollow, isOtherSource, isOverTimeAlert) {
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
    /**
     * @return {?}
     */
    get isOtherSource() {
        return this._isOtherSource;
    }
    /**
     * @return {?}
     */
    get isFollow() {
        return this._isFollow;
    }
    /**
     * @return {?}
     */
    get clientID() {
        return this._clientID;
    }
    /**
     * @return {?}
     */
    get firstName() {
        return this._firstName;
    }
    /**
     * @return {?}
     */
    get lastName() {
        return this._lastName;
    }
    /**
     * @return {?}
     */
    get tag() {
        return this._tag;
    }
    /**
     * @return {?}
     */
    get complementPercent() {
        return this._complementPercent;
    }
    /**
     * @param {?} clientID
     * @return {?}
     */
    set clientID(clientID) {
        this._clientID = clientID;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set firstName(name) {
        this._firstName = name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set lastName(name) {
        this._lastName = name;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    set tag(tag) {
        this._tag = tag;
    }
    /**
     * @param {?} complementPercent
     * @return {?}
     */
    set complementPercent(complementPercent) {
        this._complementPercent = complementPercent;
    }
    /**
     * @param {?} isFollow
     * @return {?}
     */
    set isFollow(isFollow) {
        this._isFollow = isFollow;
    }
    /**
     * @param {?} isOtherSource
     * @return {?}
     */
    set isOtherSource(isOtherSource) {
        this._isOtherSource = isOtherSource;
    }
    /**
     * @return {?}
     */
    get isHighlight() {
        return this._isHighlight;
    }
    /**
     * @param {?} isHighLight
     * @return {?}
     */
    set isHighLight(isHighLight) {
        this._isHighlight = isHighLight;
    }
    /**
     * @return {?}
     */
    get showName() {
        return this._showName;
    }
    /**
     * @param {?} showName
     * @return {?}
     */
    set showName(showName) {
        this._showName = showName;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNOzs7Ozs7Ozs7OztJQVlGLFlBQVksUUFBaUIsRUFBQyxTQUFrQixFQUFFLFFBQWlCLEVBQUUsV0FBb0IsRUFDcEYsaUJBQTBCLEVBQUMsUUFBa0IsRUFBRyxhQUF1QixFQUFHLGVBQXdCO1FBRW5HLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUVwQyxJQUFHLGVBQWUsSUFBSSxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFFRCxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFHRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLFFBQWlCO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBSSxTQUFTLENBQUMsSUFBYTtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLElBQWE7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEdBQUcsQ0FBQyxHQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxpQkFBMEI7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsUUFBa0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLGFBQWEsQ0FBQyxhQUF1QjtRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBSSxXQUFXLENBQUMsV0FBcUI7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7Ozs7O0lBcEdHLGlDQUEyQjs7Ozs7SUFDM0Isa0NBQTRCOzs7OztJQUM1QixpQ0FBMkI7Ozs7O0lBQzNCLGlDQUEwQjs7Ozs7SUFDMUIsNEJBQXNCOzs7OztJQUN0QiwwQ0FBb0M7Ozs7O0lBQ3BDLGlDQUE0Qjs7Ozs7SUFDNUIsc0NBQWlDOzs7OztJQUNqQyxvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lckl0ZW17XG4gICAgXG4gICAgcHJpdmF0ZSBfY2xpZW50SUQgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZmlyc3ROYW1lIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2xhc3ROYW1lIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX3Nob3dOYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdGFnIDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NvbXBsZW1lbnRQZXJjZW50IDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lzRm9sbG93IDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9pc090aGVyU291cmNlIDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9pc0hpZ2hsaWdodCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJRCA6IHN0cmluZyxmaXJzdE5hbWUgOiBzdHJpbmcgLGxhc3ROYW1lIDogc3RyaW5nLCBwb3NzaWJpbGl0eSA6IHN0cmluZyAsXG4gICAgICAgICBjb21wbGVtZW50UGVyY2VudCA6IG51bWJlcixpc0ZvbGxvdyA6IGJvb2xlYW4gLCBpc090aGVyU291cmNlIDogYm9vbGVhbiAsIGlzT3ZlclRpbWVBbGVydCA6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gICAgICAgIHRoaXMuX2ZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5fbGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICAgICAgdGhpcy5fdGFnID0gcG9zc2liaWxpdHk7XG4gICAgICAgIHRoaXMuX2NvbXBsZW1lbnRQZXJjZW50ID0gY29tcGxlbWVudFBlcmNlbnQ7XG4gICAgICAgIHRoaXMuX2lzRm9sbG93ID0gaXNGb2xsb3c7XG4gICAgICAgIHRoaXMuX2lzT3RoZXJTb3VyY2UgPSBpc090aGVyU291cmNlO1xuICAgICAgICBcbiAgICAgICAgaWYoaXNPdmVyVGltZUFsZXJ0ID09ICdZJykge1xuICAgICAgICAgICAgdGhpcy5faXNIaWdobGlnaHQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoU3RyaW5nVXRpbHMuaXNFbXB0eSh0aGlzLl9maXJzdE5hbWUpKSB0aGlzLl9maXJzdE5hbWUgPSAnJztcbiAgICB9XG5cblxuICAgIGdldCBpc090aGVyU291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPdGhlclNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXQgaXNGb2xsb3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ZvbGxvdztcbiAgICB9XG5cbiAgICBnZXQgY2xpZW50SUQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudElEO1xuICAgIH1cblxuICAgIGdldCBmaXJzdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgbGFzdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3ROYW1lO1xuICAgIH1cblxuICAgIGdldCB0YWcoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhZztcbiAgICB9XG5cbiAgICBnZXQgY29tcGxlbWVudFBlcmNlbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZW1lbnRQZXJjZW50O1xuICAgIH1cblxuICAgIHNldCBjbGllbnRJRChjbGllbnRJRCA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gY2xpZW50SUQ7XG4gICAgfSAgICBcblxuICAgIHNldCBmaXJzdE5hbWUobmFtZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2ZpcnN0TmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgc2V0IGxhc3ROYW1lKG5hbWUgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9sYXN0TmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgc2V0IHRhZyh0YWcgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl90YWcgPSB0YWc7XG4gICAgfVxuXG4gICAgc2V0IGNvbXBsZW1lbnRQZXJjZW50KGNvbXBsZW1lbnRQZXJjZW50IDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5fY29tcGxlbWVudFBlcmNlbnQgPSBjb21wbGVtZW50UGVyY2VudDtcbiAgICB9XG5cbiAgICBzZXQgaXNGb2xsb3coaXNGb2xsb3cgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRm9sbG93ID0gaXNGb2xsb3c7XG4gICAgfVxuXG4gICAgc2V0IGlzT3RoZXJTb3VyY2UoaXNPdGhlclNvdXJjZSA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNPdGhlclNvdXJjZSA9IGlzT3RoZXJTb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0IGlzSGlnaGxpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNIaWdobGlnaHQ7XG4gICAgfVxuXG4gICAgc2V0IGlzSGlnaExpZ2h0KGlzSGlnaExpZ2h0IDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0hpZ2hsaWdodCA9IGlzSGlnaExpZ2h0O1xuICAgIH1cblxuICAgIGdldCBzaG93TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dOYW1lO1xuICAgIH1cbiAgICBcbiAgICBzZXQgc2hvd05hbWUoc2hvd05hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zaG93TmFtZSA9IHNob3dOYW1lO1xuICAgIH1cbn0iXX0=