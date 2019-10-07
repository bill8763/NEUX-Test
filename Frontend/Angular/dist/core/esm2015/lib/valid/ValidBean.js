/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidProperty } from "./ValidProperty";
import * as _ from 'lodash';
export class ValidBean {
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
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @param {?} name
     * @param {?} type
     */
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.propertyList = [];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getOrCreateProperty(name) {
        /** @type {?} */
        let filtered = this.propertyList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name === name));
        if (filtered.length > 0) {
            return filtered[0];
        }
        else {
            /** @type {?} */
            let property = new ValidProperty(name);
            this.addProperty(property);
            return property;
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    validSelf(data) {
        /** @type {?} */
        let validResult = _.flatMap(this.propertyList, (/**
         * @param {?} x
         * @return {?}
         */
        x => x.validProperty(data[x.name])));
        console.log("validSelf result:", validResult);
        return validResult;
    }
    /**
     * @private
     * @param {?} property
     * @return {?}
     */
    addProperty(property) {
        this.propertyList.push(property);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRCZWFuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi92YWxpZC9WYWxpZEJlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixNQUFNOzs7O0lBS0YsSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFlBQVksSUFBWSxFQUFFLElBQVM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxtQkFBbUIsQ0FBQyxJQUFZOztZQUMvQixRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQztRQUM3RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO2FBQU07O2dCQUNDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixPQUFPLFFBQVEsQ0FBQztTQUNuQjtJQUNMLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLElBQVM7O1lBQ2xCLFdBQVcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZOzs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztRQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxRQUF1QjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBRUo7Ozs7OztJQTdDRywwQkFBc0I7Ozs7O0lBQ3RCLDBCQUFtQjs7Ozs7SUFDbkIsaUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRQcm9wZXJ0eSB9IGZyb20gXCIuL1ZhbGlkUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIFZhbGlkQmVhbiB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3R5cGU6IGFueTtcbiAgICBwcml2YXRlIHByb3BlcnR5TGlzdDogQXJyYXk8VmFsaWRQcm9wZXJ0eT47XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IGFueSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPckNyZWF0ZVByb3BlcnR5KG5hbWU6IHN0cmluZyk6IFZhbGlkUHJvcGVydHkge1xuICAgICAgICBsZXQgZmlsdGVyZWQgPSB0aGlzLnByb3BlcnR5TGlzdC5maWx0ZXIoeCA9PiB4Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gbmV3IFZhbGlkUHJvcGVydHkobmFtZSk7XG4gICAgICAgICAgICB0aGlzLmFkZFByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZFNlbGYoZGF0YTogYW55KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIGxldCB2YWxpZFJlc3VsdCA9IF8uZmxhdE1hcCh0aGlzLnByb3BlcnR5TGlzdCwgeCA9PiB4LnZhbGlkUHJvcGVydHkoZGF0YVt4Lm5hbWVdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRTZWxmIHJlc3VsdDpcIiwgdmFsaWRSZXN1bHQpO1xuICAgICAgICByZXR1cm4gdmFsaWRSZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRQcm9wZXJ0eShwcm9wZXJ0eTogVmFsaWRQcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLnByb3BlcnR5TGlzdC5wdXNoKHByb3BlcnR5KTtcbiAgICB9XG5cbn0iXX0=