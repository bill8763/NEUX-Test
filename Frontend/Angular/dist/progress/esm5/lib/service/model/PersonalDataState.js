/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataType } from "./Enum/PersonalDataType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { Bean, Required } from "@allianzSND/core";
var PersonalDataState = /** @class */ (function () {
    function PersonalDataState() {
        this._dataYear = -1;
        this._timeBase = PersonalDataTimeBase.Unknow;
        this._dataType = PersonalDataType.Unknow;
    }
    Object.defineProperty(PersonalDataState.prototype, "DataYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataYear;
        },
        set: /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this._dataYear = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalDataState.prototype, "TimeBase", {
        // time base
        get: 
        // time base
        /**
         * @return {?}
         */
        function () {
            return this._timeBase;
        },
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            this._timeBase = time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalDataState.prototype, "DataType", {
        //type
        get: 
        //type
        /**
         * @return {?}
         */
        function () {
            return this._dataType;
        },
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._dataType = type;
        },
        enumerable: true,
        configurable: true
    });
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
    return PersonalDataState;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxEYXRhU3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1BlcnNvbmFsRGF0YVN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFjOUM7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBSSx1Q0FBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBRUQsVUFBYSxJQUFZO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBT0Qsc0JBQUksdUNBQVE7UUFEWixZQUFZOzs7Ozs7UUFDWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQWEsSUFBMEI7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSx1Q0FBUTtRQURaLE1BQU07Ozs7OztRQUNOO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBRUQsVUFBYSxJQUFzQjtZQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQWxDRDtRQURDLFFBQVE7O3dEQUNpQjtJQUcxQjtRQURDLFFBQVE7O3dEQUMrQjtJQUd4QztRQURDLFFBQVE7O3dEQUMyQjtJQVQzQixpQkFBaUI7UUFEN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDOztPQUNiLGlCQUFpQixDQTBDN0I7SUFBRCx3QkFBQztDQUFBLElBQUE7U0ExQ1ksaUJBQWlCOzs7Ozs7SUFFMUIsc0NBQzBCOzs7OztJQUUxQixzQ0FDd0M7Ozs7O0lBRXhDLHNDQUNvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNvbmFsRGF0YVR5cGUgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVR5cGVcIjtcbmltcG9ydCB7IFBlcnNvbmFsRGF0YVRpbWVCYXNlIH0gZnJvbSBcIi4vRW51bS9QZXJzb25hbERhdGFUaW1lQmFzZVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignUGVyc29uYWxEYXRhU3RhdGUnKVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsRGF0YVN0YXRlIHsgIFxuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfZGF0YVllYXI6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3RpbWVCYXNlOiBQZXJzb25hbERhdGFUaW1lQmFzZTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFUeXBlOiBQZXJzb25hbERhdGFUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSAtMTtcbiAgICAgICAgdGhpcy5fdGltZUJhc2UgPSBQZXJzb25hbERhdGFUaW1lQmFzZS5Vbmtub3c7XG4gICAgICAgIHRoaXMuX2RhdGFUeXBlID0gUGVyc29uYWxEYXRhVHlwZS5Vbmtub3c7XG4gICAgfVxuXG4gICAgZ2V0IERhdGFZZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVllYXI7XG4gICAgfVxuXG4gICAgc2V0IERhdGFZZWFyKHllYXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kYXRhWWVhciA9ICB5ZWFyO1xuICAgIH1cblxuICAgIC8vIHRpbWUgYmFzZVxuICAgIGdldCBUaW1lQmFzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVCYXNlO1xuICAgIH1cblxuICAgIHNldCBUaW1lQmFzZSh0aW1lOiBQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl90aW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgLy90eXBlXG4gICAgZ2V0IERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVR5cGU7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBlKHR5cGU6IFBlcnNvbmFsRGF0YVR5cGUpIHtcbiAgICAgICAgdGhpcy5fZGF0YVR5cGUgPSB0eXBlO1xuICAgIH1cbn0iXX0=