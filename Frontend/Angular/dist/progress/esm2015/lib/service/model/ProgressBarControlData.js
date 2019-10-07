/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProgressBarControlModeType } from "./Enum/ProgressBarControlModeType";
import { Bean, Required } from "@allianzSND/core";
let ProgressBarControlData = class ProgressBarControlData {
    constructor() {
        this._barLengthMaxValue = 1.5;
    }
    /**
     * @return {?}
     */
    get barLengthMaxValue() {
        return this._barLengthMaxValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set barLengthMaxValue(value) {
        this._barLengthMaxValue = value;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    GetConfigMin(type) {
        switch (type) {
            case ProgressBarControlModeType.TWMode:
                return 70;
            case ProgressBarControlModeType.Unknow:
                return 0;
            default:
                return 0;
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    GetConfigMax(type) {
        switch (type) {
            case ProgressBarControlModeType.TWMode:
                return 100;
            case ProgressBarControlModeType.Unknow:
                return 0;
            default:
                return 0;
        }
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ProgressBarControlData.prototype, "_barLengthMaxValue", void 0);
ProgressBarControlData = tslib_1.__decorate([
    Bean('ProgressBarControlData')
], ProgressBarControlData);
export { ProgressBarControlData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressBarControlData.prototype._barLengthMaxValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXJDb250cm9sRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NCYXJDb250cm9sRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsc0JBQXNCO0lBRG5DO1FBSVksdUJBQWtCLEdBQVcsR0FBRyxDQUFDO0lBZ0M3QyxDQUFDOzs7O0lBOUJHLElBQVcsaUJBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBZ0M7UUFDaEQsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLDBCQUEwQixDQUFDLE1BQU07Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDO1lBQ2QsS0FBSywwQkFBMEIsQ0FBQyxNQUFNO2dCQUNsQyxPQUFPLENBQUMsQ0FBQztZQUNiO2dCQUNJLE9BQU8sQ0FBQyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBZ0M7UUFDaEQsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLDBCQUEwQixDQUFDLE1BQU07Z0JBQ2xDLE9BQU8sR0FBRyxDQUFDO1lBQ2YsS0FBSywwQkFBMEIsQ0FBQyxNQUFNO2dCQUNsQyxPQUFPLENBQUMsQ0FBQztZQUNiO2dCQUNJLE9BQU8sQ0FBQyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztDQUVKLENBQUE7QUFoQ0c7SUFEQyxRQUFROztrRUFDZ0M7QUFIaEMsc0JBQXNCO0lBRGxDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztHQUNsQixzQkFBc0IsQ0FtQ2xDO1NBbkNZLHNCQUFzQjs7Ozs7O0lBRS9CLG9EQUN5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2dyZXNzQmFyQ29udHJvbE1vZGVUeXBlIH0gZnJvbSBcIi4vRW51bS9Qcm9ncmVzc0JhckNvbnRyb2xNb2RlVHlwZVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignUHJvZ3Jlc3NCYXJDb250cm9sRGF0YScpXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb250cm9sRGF0YSB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9iYXJMZW5ndGhNYXhWYWx1ZTogbnVtYmVyID0gMS41O1xuXG4gICAgcHVibGljIGdldCBiYXJMZW5ndGhNYXhWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhckxlbmd0aE1heFZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYmFyTGVuZ3RoTWF4VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9iYXJMZW5ndGhNYXhWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRDb25maWdNaW4odHlwZTogUHJvZ3Jlc3NCYXJDb250cm9sTW9kZVR5cGUpOiBudW1iZXIge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUHJvZ3Jlc3NCYXJDb250cm9sTW9kZVR5cGUuVFdNb2RlOlxuICAgICAgICAgICAgICAgIHJldHVybiA3MDtcbiAgICAgICAgICAgIGNhc2UgUHJvZ3Jlc3NCYXJDb250cm9sTW9kZVR5cGUuVW5rbm93OlxuICAgICAgICAgICAgICAgIHJldHVybiAwOyBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0Q29uZmlnTWF4KHR5cGU6IFByb2dyZXNzQmFyQ29udHJvbE1vZGVUeXBlKTogbnVtYmVyIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFByb2dyZXNzQmFyQ29udHJvbE1vZGVUeXBlLlRXTW9kZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTAwO1xuICAgICAgICAgICAgY2FzZSBQcm9ncmVzc0JhckNvbnRyb2xNb2RlVHlwZS5Vbmtub3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19