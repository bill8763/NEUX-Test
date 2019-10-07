/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProgressBarControlModeType } from "./Enum/ProgressBarControlModeType";
import { Bean, Required } from "@allianzSND/core";
var ProgressBarControlData = /** @class */ (function () {
    function ProgressBarControlData() {
        this._barLengthMaxValue = 1.5;
    }
    Object.defineProperty(ProgressBarControlData.prototype, "barLengthMaxValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._barLengthMaxValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._barLengthMaxValue = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} type
     * @return {?}
     */
    ProgressBarControlData.prototype.GetConfigMin = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case ProgressBarControlModeType.TWMode:
                return 70;
            case ProgressBarControlModeType.Unknow:
                return 0;
            default:
                return 0;
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    ProgressBarControlData.prototype.GetConfigMax = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case ProgressBarControlModeType.TWMode:
                return 100;
            case ProgressBarControlModeType.Unknow:
                return 0;
            default:
                return 0;
        }
    };
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressBarControlData.prototype, "_barLengthMaxValue", void 0);
    ProgressBarControlData = tslib_1.__decorate([
        Bean('ProgressBarControlData')
    ], ProgressBarControlData);
    return ProgressBarControlData;
}());
export { ProgressBarControlData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressBarControlData.prototype._barLengthMaxValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXJDb250cm9sRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NCYXJDb250cm9sRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBRWxEO1FBSVksdUJBQWtCLEdBQVcsR0FBRyxDQUFDO0lBZ0M3QyxDQUFDO0lBOUJHLHNCQUFXLHFEQUFpQjs7OztRQUE1QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7Ozs7O1FBRUQsVUFBNkIsS0FBYTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7OztPQUpBOzs7OztJQU1NLDZDQUFZOzs7O0lBQW5CLFVBQW9CLElBQWdDO1FBQ2hELFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSywwQkFBMEIsQ0FBQyxNQUFNO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQztZQUNkLEtBQUssMEJBQTBCLENBQUMsTUFBTTtnQkFDbEMsT0FBTyxDQUFDLENBQUM7WUFDYjtnQkFDSSxPQUFPLENBQUMsQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7O0lBRU0sNkNBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBZ0M7UUFDaEQsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLDBCQUEwQixDQUFDLE1BQU07Z0JBQ2xDLE9BQU8sR0FBRyxDQUFDO1lBQ2YsS0FBSywwQkFBMEIsQ0FBQyxNQUFNO2dCQUNsQyxPQUFPLENBQUMsQ0FBQztZQUNiO2dCQUNJLE9BQU8sQ0FBQyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQTlCRDtRQURDLFFBQVE7O3NFQUNnQztJQUhoQyxzQkFBc0I7UUFEbEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO09BQ2xCLHNCQUFzQixDQW1DbEM7SUFBRCw2QkFBQztDQUFBLElBQUE7U0FuQ1ksc0JBQXNCOzs7Ozs7SUFFL0Isb0RBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb250cm9sTW9kZVR5cGUgfSBmcm9tIFwiLi9FbnVtL1Byb2dyZXNzQmFyQ29udHJvbE1vZGVUeXBlXCI7XG5pbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdQcm9ncmVzc0JhckNvbnRyb2xEYXRhJylcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbnRyb2xEYXRhIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHByaXZhdGUgX2Jhckxlbmd0aE1heFZhbHVlOiBudW1iZXIgPSAxLjU7XG5cbiAgICBwdWJsaWMgZ2V0IGJhckxlbmd0aE1heFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmFyTGVuZ3RoTWF4VmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBiYXJMZW5ndGhNYXhWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2Jhckxlbmd0aE1heFZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIEdldENvbmZpZ01pbih0eXBlOiBQcm9ncmVzc0JhckNvbnRyb2xNb2RlVHlwZSk6IG51bWJlciB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQcm9ncmVzc0JhckNvbnRyb2xNb2RlVHlwZS5UV01vZGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDcwO1xuICAgICAgICAgICAgY2FzZSBQcm9ncmVzc0JhckNvbnRyb2xNb2RlVHlwZS5Vbmtub3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRDb25maWdNYXgodHlwZTogUHJvZ3Jlc3NCYXJDb250cm9sTW9kZVR5cGUpOiBudW1iZXIge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUHJvZ3Jlc3NCYXJDb250cm9sTW9kZVR5cGUuVFdNb2RlOlxuICAgICAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgICAgICBjYXNlIFByb2dyZXNzQmFyQ29udHJvbE1vZGVUeXBlLlVua25vdzpcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=