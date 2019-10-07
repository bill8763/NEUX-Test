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
    /**
     * @return {?}
     */
    clone() {
        return new CustomerItem(this._clientID, this._firstName, this._lastName, this._tag, this._complementPercent, this._isFollow, this._isOtherSource, (this._isHighlight ? 'Y' : 'N'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9tb2RlbC9DdXN0b21lckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNOzs7Ozs7Ozs7OztJQVlGLFlBQVksUUFBaUIsRUFBQyxTQUFrQixFQUFFLFFBQWlCLEVBQUUsV0FBb0IsRUFDcEYsaUJBQTBCLEVBQUMsUUFBa0IsRUFBRyxhQUF1QixFQUFHLGVBQXdCO1FBRW5HLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUVwQyxJQUFHLGVBQWUsSUFBSSxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFFRCxJQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFHRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLFFBQWlCO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBSSxTQUFTLENBQUMsSUFBYTtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLElBQWE7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEdBQUcsQ0FBQyxHQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBSSxpQkFBaUIsQ0FBQyxpQkFBMEI7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsUUFBa0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLGFBQWEsQ0FBQyxhQUF1QjtRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBSSxXQUFXLENBQUMsV0FBcUI7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFHRCxLQUFLO1FBQ0QsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkwsQ0FBQztDQUNKOzs7Ozs7SUF6R0csaUNBQTJCOzs7OztJQUMzQixrQ0FBNEI7Ozs7O0lBQzVCLGlDQUEyQjs7Ozs7SUFDM0IsaUNBQTBCOzs7OztJQUMxQiw0QkFBc0I7Ozs7O0lBQ3RCLDBDQUFvQzs7Ozs7SUFDcEMsaUNBQTRCOzs7OztJQUM1QixzQ0FBaUM7Ozs7O0lBQ2pDLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVySXRlbXtcbiAgICBcbiAgICBwcml2YXRlIF9jbGllbnRJRCA6IHN0cmluZztcbiAgICBwcml2YXRlIF9maXJzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGFzdE5hbWUgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2hvd05hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF90YWcgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY29tcGxlbWVudFBlcmNlbnQgOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaXNGb2xsb3cgOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzT3RoZXJTb3VyY2UgOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzSGlnaGxpZ2h0IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElEIDogc3RyaW5nLGZpcnN0TmFtZSA6IHN0cmluZyAsbGFzdE5hbWUgOiBzdHJpbmcsIHBvc3NpYmlsaXR5IDogc3RyaW5nICxcbiAgICAgICAgIGNvbXBsZW1lbnRQZXJjZW50IDogbnVtYmVyLGlzRm9sbG93IDogYm9vbGVhbiAsIGlzT3RoZXJTb3VyY2UgOiBib29sZWFuICwgaXNPdmVyVGltZUFsZXJ0IDogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLl9sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgICAgICB0aGlzLl90YWcgPSBwb3NzaWJpbGl0eTtcbiAgICAgICAgdGhpcy5fY29tcGxlbWVudFBlcmNlbnQgPSBjb21wbGVtZW50UGVyY2VudDtcbiAgICAgICAgdGhpcy5faXNGb2xsb3cgPSBpc0ZvbGxvdztcbiAgICAgICAgdGhpcy5faXNPdGhlclNvdXJjZSA9IGlzT3RoZXJTb3VyY2U7XG4gICAgICAgIFxuICAgICAgICBpZihpc092ZXJUaW1lQWxlcnQgPT0gJ1knKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0hpZ2hsaWdodCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX2ZpcnN0TmFtZSkpIHRoaXMuX2ZpcnN0TmFtZSA9ICcnO1xuICAgIH1cblxuXG4gICAgZ2V0IGlzT3RoZXJTb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc090aGVyU291cmNlO1xuICAgIH1cblxuICAgIGdldCBpc0ZvbGxvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRm9sbG93O1xuICAgIH1cblxuICAgIGdldCBjbGllbnRJRCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50SUQ7XG4gICAgfVxuXG4gICAgZ2V0IGZpcnN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBsYXN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IHRhZygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFnO1xuICAgIH1cblxuICAgIGdldCBjb21wbGVtZW50UGVyY2VudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxlbWVudFBlcmNlbnQ7XG4gICAgfVxuXG4gICAgc2V0IGNsaWVudElEKGNsaWVudElEIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICB9ICAgIFxuXG4gICAgc2V0IGZpcnN0TmFtZShuYW1lIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgbGFzdE5hbWUobmFtZSA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXQgdGFnKHRhZyA6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX3RhZyA9IHRhZztcbiAgICB9XG5cbiAgICBzZXQgY29tcGxlbWVudFBlcmNlbnQoY29tcGxlbWVudFBlcmNlbnQgOiBudW1iZXIpe1xuICAgICAgICB0aGlzLl9jb21wbGVtZW50UGVyY2VudCA9IGNvbXBsZW1lbnRQZXJjZW50O1xuICAgIH1cblxuICAgIHNldCBpc0ZvbGxvdyhpc0ZvbGxvdyA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNGb2xsb3cgPSBpc0ZvbGxvdztcbiAgICB9XG5cbiAgICBzZXQgaXNPdGhlclNvdXJjZShpc090aGVyU291cmNlIDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc090aGVyU291cmNlID0gaXNPdGhlclNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXQgaXNIaWdobGlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0hpZ2hsaWdodDtcbiAgICB9XG5cbiAgICBzZXQgaXNIaWdoTGlnaHQoaXNIaWdoTGlnaHQgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzSGlnaGxpZ2h0ID0gaXNIaWdoTGlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hvd05hbWU7XG4gICAgfVxuICAgIFxuICAgIHNldCBzaG93TmFtZShzaG93TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Nob3dOYW1lID0gc2hvd05hbWU7XG4gICAgfVxuXG5cbiAgICBjbG9uZSgpOkN1c3RvbWVySXRlbSB7XG4gICAgICAgIHJldHVybiBuZXcgQ3VzdG9tZXJJdGVtKHRoaXMuX2NsaWVudElELCB0aGlzLl9maXJzdE5hbWUsIHRoaXMuX2xhc3ROYW1lLCB0aGlzLl90YWcsIHRoaXMuX2NvbXBsZW1lbnRQZXJjZW50LCB0aGlzLl9pc0ZvbGxvdywgdGhpcy5faXNPdGhlclNvdXJjZSwgKHRoaXMuX2lzSGlnaGxpZ2h0ID8gJ1knIDogJ04nKSk7XG4gICAgfVxufSJdfQ==