/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileCode = /** @class */ (function () {
    function ProfileCode(TypeID, Code, MappingID, Arguments) {
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
    ProfileCode.prototype.setDisplayText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.displayText = text;
    };
    /**
     * @return {?}
     */
    ProfileCode.prototype.getCode = /**
     * @return {?}
     */
    function () {
        return this.Code;
    };
    /**
     * @return {?}
     */
    ProfileCode.prototype.getTypeId = /**
     * @return {?}
     */
    function () {
        return this.TypeID;
    };
    /**
     * @return {?}
     */
    ProfileCode.prototype.getMappingID = /**
     * @return {?}
     */
    function () {
        return this.MappingID;
    };
    /**
     * @return {?}
     */
    ProfileCode.prototype.getArguments = /**
     * @return {?}
     */
    function () {
        return this.Arguments;
    };
    return ProfileCode;
}());
export { ProfileCode };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUNvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2JlYW4vUHJvZmlsZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBVUkscUJBQVksTUFBYSxFQUFDLElBQVcsRUFBQyxTQUFrQixFQUFDLFNBQWtCO1FBRnBFLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFHN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTSxvQ0FBYzs7OztJQUFyQixVQUFzQixJQUFhO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSw2QkFBTzs7O0lBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLCtCQUFTOzs7SUFBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVNLGtDQUFZOzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLGtDQUFZOzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQzs7Ozs7OztJQW5DRyw2QkFBd0I7Ozs7O0lBQ3hCLDJCQUFzQjs7Ozs7SUFDdEIsZ0NBQTJCOzs7OztJQUMzQixnQ0FBMkI7O0lBQzNCLGtDQUE0Qjs7SUFFNUIsOEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2ZpbGVDb2Rle1xuXG4gICAgcHJpdmF0ZSBUeXBlSUQgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBDb2RlIDogc3RyaW5nO1xuICAgIHByaXZhdGUgTWFwcGluZ0lEIDogc3RyaW5nO1xuICAgIHByaXZhdGUgQXJndW1lbnRzIDogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5VGV4dCA6IHN0cmluZztcblxuICAgIHB1YmxpYyBpc0NoZWNrIDogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgICBjb25zdHJ1Y3RvcihUeXBlSUQ6c3RyaW5nLENvZGU6c3RyaW5nLE1hcHBpbmdJRCA6IHN0cmluZyxBcmd1bWVudHMgOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLlR5cGVJRCA9IFR5cGVJRDtcbiAgICAgICAgdGhpcy5Db2RlID0gQ29kZTtcbiAgICAgICAgdGhpcy5NYXBwaW5nSUQgPSBNYXBwaW5nSUQ7XG4gICAgICAgIHRoaXMuQXJndW1lbnRzID0gQXJndW1lbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREaXNwbGF5VGV4dCh0ZXh0IDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5Db2RlO1xuICAgIH0gICAgXG5cbiAgICBwdWJsaWMgZ2V0VHlwZUlkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLlR5cGVJRDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWFwcGluZ0lEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5NYXBwaW5nSUQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFyZ3VtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQXJndW1lbnRzO1xuICAgIH1cblxufVxuIl19