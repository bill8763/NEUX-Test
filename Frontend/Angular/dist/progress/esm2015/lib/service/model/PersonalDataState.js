/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataType } from "./Enum/PersonalDataType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { Bean, Required } from "@allianzSND/core";
let PersonalDataState = class PersonalDataState {
    constructor() {
        this._dataYear = -1;
        this._timeBase = PersonalDataTimeBase.Unknow;
        this._dataType = PersonalDataType.Unknow;
    }
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    set DataYear(year) {
        this._dataYear = year;
    }
    // time base
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._timeBase;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._timeBase = time;
    }
    //type
    /**
     * @return {?}
     */
    get DataType() {
        return this._dataType;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._dataType = type;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], PersonalDataState.prototype, "_dataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], PersonalDataState.prototype, "_timeBase", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], PersonalDataState.prototype, "_dataType", void 0);
PersonalDataState = tslib_1.__decorate([
    Bean('PersonalDataState'),
    tslib_1.__metadata("design:paramtypes", [])
], PersonalDataState);
export { PersonalDataState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersonalDataState.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    PersonalDataState.prototype._timeBase;
    /**
     * @type {?}
     * @private
     */
    PersonalDataState.prototype._dataType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxEYXRhU3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1BlcnNvbmFsRGF0YVN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxpQkFBaUI7SUFXMUI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBR0QsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsSUFBMEI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFzQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0NBQ0osQ0FBQTtBQXZDRztJQURDLFFBQVE7O29EQUNpQjtBQUcxQjtJQURDLFFBQVE7O29EQUMrQjtBQUd4QztJQURDLFFBQVE7O29EQUMyQjtBQVQzQixpQkFBaUI7SUFEN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDOztHQUNiLGlCQUFpQixDQTBDN0I7U0ExQ1ksaUJBQWlCOzs7Ozs7SUFFMUIsc0NBQzBCOzs7OztJQUUxQixzQ0FDd0M7Ozs7O0lBRXhDLHNDQUNvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNvbmFsRGF0YVR5cGUgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVR5cGVcIjtcbmltcG9ydCB7IFBlcnNvbmFsRGF0YVRpbWVCYXNlIH0gZnJvbSBcIi4vRW51bS9QZXJzb25hbERhdGFUaW1lQmFzZVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignUGVyc29uYWxEYXRhU3RhdGUnKVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsRGF0YVN0YXRlIHsgIFxuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfZGF0YVllYXI6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3RpbWVCYXNlOiBQZXJzb25hbERhdGFUaW1lQmFzZTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFUeXBlOiBQZXJzb25hbERhdGFUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSAtMTtcbiAgICAgICAgdGhpcy5fdGltZUJhc2UgPSBQZXJzb25hbERhdGFUaW1lQmFzZS5Vbmtub3c7XG4gICAgICAgIHRoaXMuX2RhdGFUeXBlID0gUGVyc29uYWxEYXRhVHlwZS5Vbmtub3c7XG4gICAgfVxuXG4gICAgZ2V0IERhdGFZZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVllYXI7XG4gICAgfVxuXG4gICAgc2V0IERhdGFZZWFyKHllYXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kYXRhWWVhciA9ICB5ZWFyO1xuICAgIH1cblxuICAgIC8vIHRpbWUgYmFzZVxuICAgIGdldCBUaW1lQmFzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVCYXNlO1xuICAgIH1cblxuICAgIHNldCBUaW1lQmFzZSh0aW1lOiBQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl90aW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgLy90eXBlXG4gICAgZ2V0IERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVR5cGU7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBlKHR5cGU6IFBlcnNvbmFsRGF0YVR5cGUpIHtcbiAgICAgICAgdGhpcy5fZGF0YVR5cGUgPSB0eXBlO1xuICAgIH1cbn0iXX0=