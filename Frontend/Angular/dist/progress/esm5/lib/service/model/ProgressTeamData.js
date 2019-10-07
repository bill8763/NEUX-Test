/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { Bean, Required } from "@allianzSND/core";
var ProgressTeamData = /** @class */ (function () {
    function ProgressTeamData() {
        this.DataType = ProgressDataTeamValueType.Unknow;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressTeamData.prototype, "DataType", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressTeamData.prototype, "TimeBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressTeamData.prototype, "Goal", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressTeamData.prototype, "Forecast", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressTeamData.prototype, "Actual", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressTeamData.prototype, "Shortfall", void 0);
    ProgressTeamData = tslib_1.__decorate([
        Bean('ProgressTeamData')
    ], ProgressTeamData);
    return ProgressTeamData;
}());
export { ProgressTeamData };
if (false) {
    /** @type {?} */
    ProgressTeamData.prototype.DataType;
    /** @type {?} */
    ProgressTeamData.prototype.TimeBase;
    /** @type {?} */
    ProgressTeamData.prototype.Goal;
    /** @type {?} */
    ProgressTeamData.prototype.Forecast;
    /** @type {?} */
    ProgressTeamData.prototype.Actual;
    /** @type {?} */
    ProgressTeamData.prototype.Shortfall;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NUZWFtRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBRWxEO1FBSVcsYUFBUSxHQUE4Qix5QkFBeUIsQ0FBQyxNQUFNLENBQUM7UUFHdkUsYUFBUSxHQUF5QixvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFHN0QsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFHbkIsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBaEJHO1FBREMsUUFBUTs7c0RBQ3FFO0lBRzlFO1FBREMsUUFBUTs7c0RBQzJEO0lBR3BFO1FBREMsUUFBUTs7a0RBQ2U7SUFHeEI7UUFEQyxRQUFROztzREFDbUI7SUFHNUI7UUFEQyxRQUFROztvREFDaUI7SUFHMUI7UUFEQyxRQUFROzt1REFDb0I7SUFsQnBCLGdCQUFnQjtRQUQ1QixJQUFJLENBQUMsa0JBQWtCLENBQUM7T0FDWixnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxJQUFBO1NBbkJZLGdCQUFnQjs7O0lBRXpCLG9DQUM4RTs7SUFFOUUsb0NBQ29FOztJQUVwRSxnQ0FDd0I7O0lBRXhCLG9DQUM0Qjs7SUFFNUIsa0NBQzBCOztJQUUxQixxQ0FDNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlIH0gZnJvbSBcIi4vRW51bS9Qcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlXCI7XG5pbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gXCIuL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2VcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1Byb2dyZXNzVGVhbURhdGEnKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzVGVhbURhdGEge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIERhdGFUeXBlOiBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlID0gUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZS5Vbmtub3c7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgVGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlID0gUGVyc29uYWxEYXRhVGltZUJhc2UuVW5rbm93O1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEdvYWw6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgRm9yZWNhc3Q6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgQWN0dWFsOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFNob3J0ZmFsbDogbnVtYmVyID0gMDtcbn0iXX0=