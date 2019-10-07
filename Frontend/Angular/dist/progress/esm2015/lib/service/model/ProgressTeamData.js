/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { Bean, Required } from "@allianzSND/core";
let ProgressTeamData = class ProgressTeamData {
    constructor() {
        this.DataType = ProgressDataTeamValueType.Unknow;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NUZWFtRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7SUFHckMsZ0JBQWdCO0lBRDdCO1FBSVcsYUFBUSxHQUE4Qix5QkFBeUIsQ0FBQyxNQUFNLENBQUM7UUFHdkUsYUFBUSxHQUF5QixvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFHN0QsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFHbkIsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQUEsQ0FBQTtBQWhCRztJQURDLFFBQVE7O2tEQUNxRTtBQUc5RTtJQURDLFFBQVE7O2tEQUMyRDtBQUdwRTtJQURDLFFBQVE7OzhDQUNlO0FBR3hCO0lBREMsUUFBUTs7a0RBQ21CO0FBRzVCO0lBREMsUUFBUTs7Z0RBQ2lCO0FBRzFCO0lBREMsUUFBUTs7bURBQ29CO0FBbEJwQixnQkFBZ0I7SUFENUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0dBQ1osZ0JBQWdCLENBbUI1QjtTQW5CWSxnQkFBZ0I7OztJQUV6QixvQ0FDOEU7O0lBRTlFLG9DQUNvRTs7SUFFcEUsZ0NBQ3dCOztJQUV4QixvQ0FDNEI7O0lBRTVCLGtDQUMwQjs7SUFFMUIscUNBQzZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSB9IGZyb20gXCIuL0VudW0vUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZVwiO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhVGltZUJhc2UgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVRpbWVCYXNlXCI7XG5pbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdQcm9ncmVzc1RlYW1EYXRhJylcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1RlYW1EYXRhIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBEYXRhVHlwZTogUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSA9IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUuVW5rbm93O1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFRpbWVCYXNlOiBQZXJzb25hbERhdGFUaW1lQmFzZSA9IFBlcnNvbmFsRGF0YVRpbWVCYXNlLlVua25vdztcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBHb2FsOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEZvcmVjYXN0OiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEFjdHVhbDogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBTaG9ydGZhbGw6IG51bWJlciA9IDA7XG59Il19