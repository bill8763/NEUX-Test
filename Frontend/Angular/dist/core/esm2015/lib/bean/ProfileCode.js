/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProfileCode {
    /**
     * @param {?} TypeID
     * @param {?} Code
     * @param {?} MappingID
     * @param {?} Arguments
     */
    constructor(TypeID, Code, MappingID, Arguments) {
        this.isCheck = false;
        this.TypeID = TypeID;
        this.Code = Code;
        this.MappingID = MappingID;
        this.Arguments = Arguments;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setDisplayText(text) {
        this.displayText = text;
    }
    /**
     * @return {?}
     */
    getCode() {
        return this.Code;
    }
    /**
     * @return {?}
     */
    getTypeId() {
        return this.TypeID;
    }
    /**
     * @return {?}
     */
    getMappingID() {
        return this.MappingID;
    }
    /**
     * @return {?}
     */
    getArguments() {
        return this.Arguments;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileCode.prototype.TypeID;
    /**
     * @type {?}
     * @private
     */
    ProfileCode.prototype.Code;
    /**
     * @type {?}
     * @private
     */
    ProfileCode.prototype.MappingID;
    /**
     * @type {?}
     * @private
     */
    ProfileCode.prototype.Arguments;
    /** @type {?} */
    ProfileCode.prototype.displayText;
    /** @type {?} */
    ProfileCode.prototype.isCheck;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUNvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2JlYW4vUHJvZmlsZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07Ozs7Ozs7SUFVRixZQUFZLE1BQWEsRUFBQyxJQUFXLEVBQUMsU0FBa0IsRUFBQyxTQUFrQjtRQUZwRSxZQUFPLEdBQWEsS0FBSyxDQUFDO1FBRzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU0sY0FBYyxDQUFDLElBQWE7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztDQUVKOzs7Ozs7SUFuQ0csNkJBQXdCOzs7OztJQUN4QiwyQkFBc0I7Ozs7O0lBQ3RCLGdDQUEyQjs7Ozs7SUFDM0IsZ0NBQTJCOztJQUMzQixrQ0FBNEI7O0lBRTVCLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9maWxlQ29kZXtcblxuICAgIHByaXZhdGUgVHlwZUlEIDogc3RyaW5nO1xuICAgIHByaXZhdGUgQ29kZSA6IHN0cmluZztcbiAgICBwcml2YXRlIE1hcHBpbmdJRCA6IHN0cmluZztcbiAgICBwcml2YXRlIEFyZ3VtZW50cyA6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheVRleHQgOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgaXNDaGVjayA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gICAgY29uc3RydWN0b3IoVHlwZUlEOnN0cmluZyxDb2RlOnN0cmluZyxNYXBwaW5nSUQgOiBzdHJpbmcsQXJndW1lbnRzIDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5UeXBlSUQgPSBUeXBlSUQ7XG4gICAgICAgIHRoaXMuQ29kZSA9IENvZGU7XG4gICAgICAgIHRoaXMuTWFwcGluZ0lEID0gTWFwcGluZ0lEO1xuICAgICAgICB0aGlzLkFyZ3VtZW50cyA9IEFyZ3VtZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGlzcGxheVRleHQodGV4dCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29kZTtcbiAgICB9ICAgIFxuXG4gICAgcHVibGljIGdldFR5cGVJZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5UeXBlSUQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1hcHBpbmdJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTWFwcGluZ0lEO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcmd1bWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkFyZ3VtZW50cztcbiAgICB9XG5cbn1cbiJdfQ==