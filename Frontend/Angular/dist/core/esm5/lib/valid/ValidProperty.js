/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidProperty = /** @class */ (function () {
    function ValidProperty(name) {
        this.name = name;
        this.conditionList = [];
    }
    Object.defineProperty(ValidProperty.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} condition
     * @return {?}
     */
    ValidProperty.prototype.addCondition = /**
     * @param {?} condition
     * @return {?}
     */
    function (condition) {
        this.conditionList.push(condition);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidProperty.prototype.validProperty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        return this.conditionList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.valid(value); })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.getErrorMsg(_this.name); }));
    };
    return ValidProperty;
}());
export { ValidProperty };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidProperty.prototype._name;
    /**
     * @type {?}
     * @private
     */
    ValidProperty.prototype.conditionList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRQcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdmFsaWQvVmFsaWRQcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFVSSx1QkFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFYRCxzQkFBVywrQkFBSTs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FIQTs7Ozs7SUFVTSxvQ0FBWTs7OztJQUFuQixVQUFvQixTQUF5QjtRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVNLHFDQUFhOzs7O0lBQXBCLFVBQXFCLEtBQUs7UUFBMUIsaUJBRUM7UUFERyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFmLENBQWUsRUFBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixFQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQzs7Ozs7OztJQXBCRyw4QkFBc0I7Ozs7O0lBT3RCLHNDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkQ29uZGl0aW9uIH0gZnJvbSBcIi4vY29uZGl0aW9uL1ZhbGlkQ29uZGl0aW9uLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRQcm9wZXJ0eSB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbmRpdGlvbkxpc3Q6IEFycmF5PFZhbGlkQ29uZGl0aW9uPjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbkxpc3QgPSBbXTtcbiAgICB9XG4gICAgcHVibGljIGFkZENvbmRpdGlvbihjb25kaXRpb246IFZhbGlkQ29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uTGlzdC5wdXNoKGNvbmRpdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkUHJvcGVydHkodmFsdWUpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uTGlzdC5maWx0ZXIoeCA9PiAheC52YWxpZCh2YWx1ZSkpLm1hcCh4ID0+IHguZ2V0RXJyb3JNc2codGhpcy5uYW1lKSk7XG4gICAgfVxufSJdfQ==