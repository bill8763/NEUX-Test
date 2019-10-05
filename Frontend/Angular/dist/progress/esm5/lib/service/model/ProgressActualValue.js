/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PerformanceType } from "./Enum/PerformanceType";
import { ActualValueDataType } from "./Enum/ActualValueDataType";
import { Bean, Required } from "@allianzSND/core";
var ProgressActualValue = /** @class */ (function () {
    function ProgressActualValue(id, year, performanceType, dataType, month, value) {
        this._clientID = id;
        this._dataYear = year;
        this._performanceType = performanceType;
        this._dataType = dataType;
        this._month = month;
        this._value = value;
    }
    Object.defineProperty(ProgressActualValue.prototype, "ClientID", {
        //client id
        get: 
        //client id
        /**
         * @return {?}
         */
        function () {
            return this._clientID;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clientID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressActualValue.prototype, "DataYear", {
        //data year
        get: 
        //data year
        /**
         * @return {?}
         */
        function () {
            return this._dataYear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dataYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressActualValue.prototype, "PerformanceType", {
        //performance type
        get: 
        //performance type
        /**
         * @return {?}
         */
        function () {
            return this._performanceType;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._performanceType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressActualValue.prototype, "DataType", {
        //data type
        get: 
        //data type
        /**
         * @return {?}
         */
        function () {
            return this._dataType;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dataType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressActualValue.prototype, "Month", {
        //month
        get: 
        //month
        /**
         * @return {?}
         */
        function () {
            return this._month;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._month = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressActualValue.prototype, "Value", {
        //value
        get: 
        //value
        /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressActualValue.prototype, "_clientID", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressActualValue.prototype, "_dataYear", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressActualValue.prototype, "_performanceType", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressActualValue.prototype, "_dataType", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressActualValue.prototype, "_month", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressActualValue.prototype, "_value", void 0);
    ProgressActualValue = tslib_1.__decorate([
        Bean('ProgressActualValue'),
        tslib_1.__metadata("design:paramtypes", [String, Number, String, String, Number, Number])
    ], ProgressActualValue);
    return ProgressActualValue;
}());
export { ProgressActualValue };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressActualValue.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    ProgressActualValue.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    ProgressActualValue.prototype._performanceType;
    /**
     * @type {?}
     * @private
     */
    ProgressActualValue.prototype._dataType;
    /**
     * @type {?}
     * @private
     */
    ProgressActualValue.prototype._month;
    /**
     * @type {?}
     * @private
     */
    ProgressActualValue.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NBY3R1YWxWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NBY3R1YWxWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQXVCOUMsNkJBQVksRUFBUyxFQUFFLElBQVcsRUFBRSxlQUFnQyxFQUFFLFFBQTZCLEVBQUUsS0FBYSxFQUFFLEtBQWE7UUFDN0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBR0Qsc0JBQUkseUNBQVE7UUFEWixXQUFXOzs7Ozs7UUFDWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQWEsS0FBWTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLHlDQUFRO1FBRFosV0FBVzs7Ozs7O1FBQ1g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFFRCxVQUFhLEtBQVk7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSxnREFBZTtRQURuQixrQkFBa0I7Ozs7OztRQUNsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7Ozs7O1FBRUQsVUFBb0IsS0FBcUI7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLHlDQUFRO1FBRFosV0FBVzs7Ozs7O1FBQ1g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFFRCxVQUFhLEtBQXlCO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBT0Qsc0JBQUksc0NBQUs7UUFEVCxPQUFPOzs7Ozs7UUFDUDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVUsS0FBWTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLHNDQUFLO1FBRFQsT0FBTzs7Ozs7O1FBQ1A7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFVLEtBQVk7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUExRUQ7UUFEQyxRQUFROzswREFDaUI7SUFHMUI7UUFEQyxRQUFROzswREFDaUI7SUFHMUI7UUFEQyxRQUFROztpRUFDaUM7SUFHMUM7UUFEQyxRQUFROzswREFDOEI7SUFHdkM7UUFEQyxRQUFROzt1REFDYztJQUd2QjtRQURDLFFBQVE7O3VEQUNjO0lBbEJkLG1CQUFtQjtRQUQvQixJQUFJLENBQUMscUJBQXFCLENBQUM7O09BQ2YsbUJBQW1CLENBbUYvQjtJQUFELDBCQUFDO0NBQUEsSUFBQTtTQW5GWSxtQkFBbUI7Ozs7OztJQUU1Qix3Q0FDMEI7Ozs7O0lBRTFCLHdDQUMwQjs7Ozs7SUFFMUIsK0NBQzBDOzs7OztJQUUxQyx3Q0FDdUM7Ozs7O0lBRXZDLHFDQUN1Qjs7Ozs7SUFFdkIscUNBQ3VCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyZm9ybWFuY2VUeXBlIH0gZnJvbSBcIi4vRW51bS9QZXJmb3JtYW5jZVR5cGVcIjtcbmltcG9ydCB7IEFjdHVhbFZhbHVlRGF0YVR5cGUgfSBmcm9tIFwiLi9FbnVtL0FjdHVhbFZhbHVlRGF0YVR5cGVcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1Byb2dyZXNzQWN0dWFsVmFsdWUnKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQWN0dWFsVmFsdWUge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9wZXJmb3JtYW5jZVR5cGU6IFBlcmZvcm1hbmNlVHlwZTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFUeXBlOiBBY3R1YWxWYWx1ZURhdGFUeXBlO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfbW9udGg6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDpzdHJpbmcsIHllYXI6bnVtYmVyLCBwZXJmb3JtYW5jZVR5cGU6IFBlcmZvcm1hbmNlVHlwZSwgZGF0YVR5cGU6IEFjdHVhbFZhbHVlRGF0YVR5cGUsIG1vbnRoOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBpZDtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSB5ZWFyO1xuICAgICAgICB0aGlzLl9wZXJmb3JtYW5jZVR5cGUgPSBwZXJmb3JtYW5jZVR5cGU7XG4gICAgICAgIHRoaXMuX2RhdGFUeXBlID0gZGF0YVR5cGU7XG4gICAgICAgIHRoaXMuX21vbnRoID0gbW9udGg7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9jbGllbnQgaWRcbiAgICBnZXQgQ2xpZW50SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRJRDtcbiAgICB9XG5cbiAgICBzZXQgQ2xpZW50SUQodmFsdWU6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9kYXRhIHllYXJcbiAgICBnZXQgRGF0YVllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhWWVhcjtcbiAgICB9XG5cbiAgICBzZXQgRGF0YVllYXIodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFZZWFyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9wZXJmb3JtYW5jZSB0eXBlXG4gICAgZ2V0IFBlcmZvcm1hbmNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlcmZvcm1hbmNlVHlwZTtcbiAgICB9XG5cbiAgICBzZXQgUGVyZm9ybWFuY2VUeXBlKHZhbHVlOlBlcmZvcm1hbmNlVHlwZSkge1xuICAgICAgICB0aGlzLl9wZXJmb3JtYW5jZVR5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvL2RhdGEgdHlwZVxuICAgIGdldCBEYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFUeXBlO1xuICAgIH1cblxuICAgIHNldCBEYXRhVHlwZSh2YWx1ZTpBY3R1YWxWYWx1ZURhdGFUeXBlKSB7XG4gICAgICAgIHRoaXMuX2RhdGFUeXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9tb250aFxuICAgIGdldCBNb250aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoO1xuICAgIH1cblxuICAgIHNldCBNb250aCh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbW9udGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvL3ZhbHVlXG4gICAgZ2V0IFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IFZhbHVlKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==