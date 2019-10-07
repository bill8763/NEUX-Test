/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ValidProperty {
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
        this.conditionList = [];
    }
    /**
     * @param {?} condition
     * @return {?}
     */
    addCondition(condition) {
        this.conditionList.push(condition);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    validProperty(value) {
        return this.conditionList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.valid(value))).map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.getErrorMsg(this.name)));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRQcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdmFsaWQvVmFsaWRQcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7OztJQUVGLElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUdELFlBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNNLFlBQVksQ0FBQyxTQUF5QjtRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQzlGLENBQUM7Q0FDSjs7Ozs7O0lBcEJHLDhCQUFzQjs7Ozs7SUFPdEIsc0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRDb25kaXRpb24gfSBmcm9tIFwiLi9jb25kaXRpb24vVmFsaWRDb25kaXRpb24uaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZFByb3BlcnR5IHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgY29uZGl0aW9uTGlzdDogQXJyYXk8VmFsaWRDb25kaXRpb24+O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uTGlzdCA9IFtdO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkQ29uZGl0aW9uKGNvbmRpdGlvbjogVmFsaWRDb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb25kaXRpb25MaXN0LnB1c2goY29uZGl0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRQcm9wZXJ0eSh2YWx1ZSk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25MaXN0LmZpbHRlcih4ID0+ICF4LnZhbGlkKHZhbHVlKSkubWFwKHggPT4geC5nZXRFcnJvck1zZyh0aGlzLm5hbWUpKTtcbiAgICB9XG59Il19