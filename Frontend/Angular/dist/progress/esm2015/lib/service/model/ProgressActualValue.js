/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PerformanceType } from "./Enum/PerformanceType";
import { ActualValueDataType } from "./Enum/ActualValueDataType";
import { Bean, Required } from "@allianzSND/core";
let ProgressActualValue = class ProgressActualValue {
    /**
     * @param {?} id
     * @param {?} year
     * @param {?} performanceType
     * @param {?} dataType
     * @param {?} month
     * @param {?} value
     */
    constructor(id, year, performanceType, dataType, month, value) {
        this._clientID = id;
        this._dataYear = year;
        this._performanceType = performanceType;
        this._dataType = dataType;
        this._month = month;
        this._value = value;
    }
    //client id
    /**
     * @return {?}
     */
    get ClientID() {
        return this._clientID;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ClientID(value) {
        this._clientID = value;
    }
    //data year
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataYear(value) {
        this._dataYear = value;
    }
    //performance type
    /**
     * @return {?}
     */
    get PerformanceType() {
        return this._performanceType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set PerformanceType(value) {
        this._performanceType = value;
    }
    //data type
    /**
     * @return {?}
     */
    get DataType() {
        return this._dataType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set DataType(value) {
        this._dataType = value;
    }
    //month
    /**
     * @return {?}
     */
    get Month() {
        return this._month;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Month(value) {
        this._month = value;
    }
    //value
    /**
     * @return {?}
     */
    get Value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Value(value) {
        this._value = value;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NBY3R1YWxWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NBY3R1YWxWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0lBR3JDLG1CQUFtQjs7Ozs7Ozs7O0lBb0I1QixZQUFZLEVBQVMsRUFBRSxJQUFXLEVBQUUsZUFBZ0MsRUFBRSxRQUE2QixFQUFFLEtBQWEsRUFBRSxLQUFhO1FBQzdILElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFHRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFZO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBR0QsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBWTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsSUFBSSxlQUFlLENBQUMsS0FBcUI7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLEtBQXlCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBR0QsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBWTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7OztJQUdELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztDQUVKLENBQUE7QUFoRkc7SUFEQyxRQUFROztzREFDaUI7QUFHMUI7SUFEQyxRQUFROztzREFDaUI7QUFHMUI7SUFEQyxRQUFROzs2REFDaUM7QUFHMUM7SUFEQyxRQUFROztzREFDOEI7QUFHdkM7SUFEQyxRQUFROzttREFDYztBQUd2QjtJQURDLFFBQVE7O21EQUNjO0FBbEJkLG1CQUFtQjtJQUQvQixJQUFJLENBQUMscUJBQXFCLENBQUM7O0dBQ2YsbUJBQW1CLENBbUYvQjtTQW5GWSxtQkFBbUI7Ozs7OztJQUU1Qix3Q0FDMEI7Ozs7O0lBRTFCLHdDQUMwQjs7Ozs7SUFFMUIsK0NBQzBDOzs7OztJQUUxQyx3Q0FDdUM7Ozs7O0lBRXZDLHFDQUN1Qjs7Ozs7SUFFdkIscUNBQ3VCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyZm9ybWFuY2VUeXBlIH0gZnJvbSBcIi4vRW51bS9QZXJmb3JtYW5jZVR5cGVcIjtcbmltcG9ydCB7IEFjdHVhbFZhbHVlRGF0YVR5cGUgfSBmcm9tIFwiLi9FbnVtL0FjdHVhbFZhbHVlRGF0YVR5cGVcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1Byb2dyZXNzQWN0dWFsVmFsdWUnKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQWN0dWFsVmFsdWUge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfY2xpZW50SUQ6IHN0cmluZztcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFZZWFyOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9wZXJmb3JtYW5jZVR5cGU6IFBlcmZvcm1hbmNlVHlwZTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2RhdGFUeXBlOiBBY3R1YWxWYWx1ZURhdGFUeXBlO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfbW9udGg6IG51bWJlcjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDpzdHJpbmcsIHllYXI6bnVtYmVyLCBwZXJmb3JtYW5jZVR5cGU6IFBlcmZvcm1hbmNlVHlwZSwgZGF0YVR5cGU6IEFjdHVhbFZhbHVlRGF0YVR5cGUsIG1vbnRoOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBpZDtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSB5ZWFyO1xuICAgICAgICB0aGlzLl9wZXJmb3JtYW5jZVR5cGUgPSBwZXJmb3JtYW5jZVR5cGU7XG4gICAgICAgIHRoaXMuX2RhdGFUeXBlID0gZGF0YVR5cGU7XG4gICAgICAgIHRoaXMuX21vbnRoID0gbW9udGg7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9jbGllbnQgaWRcbiAgICBnZXQgQ2xpZW50SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRJRDtcbiAgICB9XG5cbiAgICBzZXQgQ2xpZW50SUQodmFsdWU6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9kYXRhIHllYXJcbiAgICBnZXQgRGF0YVllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhWWVhcjtcbiAgICB9XG5cbiAgICBzZXQgRGF0YVllYXIodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFZZWFyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9wZXJmb3JtYW5jZSB0eXBlXG4gICAgZ2V0IFBlcmZvcm1hbmNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlcmZvcm1hbmNlVHlwZTtcbiAgICB9XG5cbiAgICBzZXQgUGVyZm9ybWFuY2VUeXBlKHZhbHVlOlBlcmZvcm1hbmNlVHlwZSkge1xuICAgICAgICB0aGlzLl9wZXJmb3JtYW5jZVR5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvL2RhdGEgdHlwZVxuICAgIGdldCBEYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFUeXBlO1xuICAgIH1cblxuICAgIHNldCBEYXRhVHlwZSh2YWx1ZTpBY3R1YWxWYWx1ZURhdGFUeXBlKSB7XG4gICAgICAgIHRoaXMuX2RhdGFUeXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9tb250aFxuICAgIGdldCBNb250aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoO1xuICAgIH1cblxuICAgIHNldCBNb250aCh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbW9udGggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvL3ZhbHVlXG4gICAgZ2V0IFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IFZhbHVlKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==