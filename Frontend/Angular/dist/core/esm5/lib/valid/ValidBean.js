/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidProperty } from "./ValidProperty";
import * as _ from 'lodash';
var ValidBean = /** @class */ (function () {
    function ValidBean(name, type) {
        this.name = name;
        this.type = type;
        this.propertyList = [];
    }
    Object.defineProperty(ValidBean.prototype, "name", {
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
    Object.defineProperty(ValidBean.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @return {?}
     */
    ValidBean.prototype.getOrCreateProperty = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var filtered = this.propertyList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.name === name; }));
        if (filtered.length > 0) {
            return filtered[0];
        }
        else {
            /** @type {?} */
            var property = new ValidProperty(name);
            this.addProperty(property);
            return property;
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ValidBean.prototype.validSelf = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var validResult = _.flatMap(this.propertyList, (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.validProperty(data[x.name]); }));
        console.log("validSelf result:", validResult);
        return validResult;
    };
    /**
     * @private
     * @param {?} property
     * @return {?}
     */
    ValidBean.prototype.addProperty = /**
     * @private
     * @param {?} property
     * @return {?}
     */
    function (property) {
        this.propertyList.push(property);
    };
    return ValidBean;
}());
export { ValidBean };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValidBean.prototype._name;
    /**
     * @type {?}
     * @private
     */
    ValidBean.prototype._type;
    /**
     * @type {?}
     * @private
     */
    ValidBean.prototype.propertyList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRCZWFuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi92YWxpZC9WYWxpZEJlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QjtJQW1CSSxtQkFBWSxJQUFZLEVBQUUsSUFBUztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBbEJELHNCQUFXLDJCQUFJOzs7O1FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsMkJBQUk7Ozs7UUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQWdCLEtBQVU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7Ozs7O0lBV00sdUNBQW1COzs7O0lBQTFCLFVBQTJCLElBQVk7O1lBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFmLENBQWUsRUFBQztRQUM3RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO2FBQU07O2dCQUNDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixPQUFPLFFBQVEsQ0FBQztTQUNuQjtJQUNMLENBQUM7Ozs7O0lBRU0sNkJBQVM7Ozs7SUFBaEIsVUFBaUIsSUFBUzs7WUFDbEIsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVk7Ozs7UUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUE3QixDQUE2QixFQUFDO1FBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sK0JBQVc7Ozs7O0lBQW5CLFVBQW9CLFFBQXVCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7Ozs7Ozs7SUE3Q0csMEJBQXNCOzs7OztJQUN0QiwwQkFBbUI7Ozs7O0lBQ25CLGlDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkUHJvcGVydHkgfSBmcm9tIFwiLi9WYWxpZFByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZEJlYW4ge1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF90eXBlOiBhbnk7XG4gICAgcHJpdmF0ZSBwcm9wZXJ0eUxpc3Q6IEFycmF5PFZhbGlkUHJvcGVydHk+O1xuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0eXBlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3JDcmVhdGVQcm9wZXJ0eShuYW1lOiBzdHJpbmcpOiBWYWxpZFByb3BlcnR5IHtcbiAgICAgICAgbGV0IGZpbHRlcmVkID0gdGhpcy5wcm9wZXJ0eUxpc3QuZmlsdGVyKHggPT4geC5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG5ldyBWYWxpZFByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRTZWxmKGRhdGE6IGFueSk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBsZXQgdmFsaWRSZXN1bHQgPSBfLmZsYXRNYXAodGhpcy5wcm9wZXJ0eUxpc3QsIHggPT4geC52YWxpZFByb3BlcnR5KGRhdGFbeC5uYW1lXSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkU2VsZiByZXN1bHQ6XCIsIHZhbGlkUmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHZhbGlkUmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkUHJvcGVydHkocHJvcGVydHk6IFZhbGlkUHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QucHVzaChwcm9wZXJ0eSk7XG4gICAgfVxuXG59Il19