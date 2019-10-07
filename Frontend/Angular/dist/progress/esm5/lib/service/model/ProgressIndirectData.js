/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { Bean, Required } from "@allianzSND/core";
var ProgressIndirectData = /** @class */ (function () {
    function ProgressIndirectData() {
        this.AgentID = "";
        this.AgentName = "";
        this.JobGrade = "";
        this.Drilldown = false;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.DataType = ProgressDataTeamValueType.Unknow;
        //public Activities: ActivitiesType = ActivitiesType.Unknow;
        this.Activities = "";
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressIndirectData.prototype, "AgentID", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressIndirectData.prototype, "AgentName", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressIndirectData.prototype, "JobGrade", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Boolean)
    ], ProgressIndirectData.prototype, "Drilldown", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressIndirectData.prototype, "TimeBase", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressIndirectData.prototype, "DataType", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", String)
    ], ProgressIndirectData.prototype, "Activities", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressIndirectData.prototype, "Goal", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressIndirectData.prototype, "Forecast", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressIndirectData.prototype, "Actual", void 0);
    tslib_1.__decorate([
        Required,
        tslib_1.__metadata("design:type", Number)
    ], ProgressIndirectData.prototype, "Shortfall", void 0);
    ProgressIndirectData = tslib_1.__decorate([
        Bean('ProgressIndirectData')
    ], ProgressIndirectData);
    return ProgressIndirectData;
}());
export { ProgressIndirectData };
if (false) {
    /** @type {?} */
    ProgressIndirectData.prototype.AgentID;
    /** @type {?} */
    ProgressIndirectData.prototype.AgentName;
    /** @type {?} */
    ProgressIndirectData.prototype.JobGrade;
    /** @type {?} */
    ProgressIndirectData.prototype.Drilldown;
    /** @type {?} */
    ProgressIndirectData.prototype.TimeBase;
    /** @type {?} */
    ProgressIndirectData.prototype.DataType;
    /** @type {?} */
    ProgressIndirectData.prototype.Activities;
    /** @type {?} */
    ProgressIndirectData.prototype.Goal;
    /** @type {?} */
    ProgressIndirectData.prototype.Forecast;
    /** @type {?} */
    ProgressIndirectData.prototype.Actual;
    /** @type {?} */
    ProgressIndirectData.prototype.Shortfall;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NJbmRpcmVjdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzSW5kaXJlY3REYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbkUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFbEQ7UUFJVyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBR3JCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGFBQVEsR0FBeUIsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBRzdELGFBQVEsR0FBOEIseUJBQXlCLENBQUMsTUFBTSxDQUFDO1FBQzlFLDREQUE0RDtRQUdyRCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBR3hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGNBQVMsR0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWhDRztRQURDLFFBQVE7O3lEQUNtQjtJQUc1QjtRQURDLFFBQVE7OzJEQUNxQjtJQUc5QjtRQURDLFFBQVE7OzBEQUNvQjtJQUc3QjtRQURDLFFBQVE7OzJEQUN5QjtJQUdsQztRQURDLFFBQVE7OzBEQUMyRDtJQUdwRTtRQURDLFFBQVE7OzBEQUNxRTtJQUk5RTtRQURDLFFBQVE7OzREQUNzQjtJQUcvQjtRQURDLFFBQVE7O3NEQUNlO0lBR3hCO1FBREMsUUFBUTs7MERBQ21CO0lBRzVCO1FBREMsUUFBUTs7d0RBQ2lCO0lBRzFCO1FBREMsUUFBUTs7MkRBQ29CO0lBbENwQixvQkFBb0I7UUFEaEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO09BQ2hCLG9CQUFvQixDQW1DaEM7SUFBRCwyQkFBQztDQUFBLElBQUE7U0FuQ1ksb0JBQW9COzs7SUFFN0IsdUNBQzRCOztJQUU1Qix5Q0FDOEI7O0lBRTlCLHdDQUM2Qjs7SUFFN0IseUNBQ2tDOztJQUVsQyx3Q0FDb0U7O0lBRXBFLHdDQUM4RTs7SUFHOUUsMENBQytCOztJQUUvQixvQ0FDd0I7O0lBRXhCLHdDQUM0Qjs7SUFFNUIsc0NBQzBCOztJQUUxQix5Q0FDNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlIH0gZnJvbSBcIi4vRW51bS9Qcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlXCI7XG5pbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gXCIuL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2VcIjtcbmltcG9ydCB7IEFjdGl2aXRpZXNUeXBlIH0gZnJvbSBcIi4vRW51bS9BY3Rpdml0aWVzVHlwZVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignUHJvZ3Jlc3NJbmRpcmVjdERhdGEnKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzSW5kaXJlY3REYXRhIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBBZ2VudElEOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgQWdlbnROYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgSm9iR3JhZGU6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBEcmlsbGRvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFRpbWVCYXNlOiBQZXJzb25hbERhdGFUaW1lQmFzZSA9IFBlcnNvbmFsRGF0YVRpbWVCYXNlLlVua25vdztcblxuICAgIEBSZXF1aXJlZCAgICBcbiAgICBwdWJsaWMgRGF0YVR5cGU6IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUgPSBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlLlVua25vdztcbiAgICAvL3B1YmxpYyBBY3Rpdml0aWVzOiBBY3Rpdml0aWVzVHlwZSA9IEFjdGl2aXRpZXNUeXBlLlVua25vdztcbiAgICAgICAgXG4gICAgQFJlcXVpcmVkIFxuICAgIHB1YmxpYyBBY3Rpdml0aWVzOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBcbiAgICBAUmVxdWlyZWQgXG4gICAgcHVibGljIEdvYWw6IG51bWJlciA9IDA7XG4gICAgICAgIFxuICAgIEBSZXF1aXJlZCBcbiAgICBwdWJsaWMgRm9yZWNhc3Q6IG51bWJlciA9IDA7XG4gICAgICAgIFxuICAgIEBSZXF1aXJlZCBcbiAgICBwdWJsaWMgQWN0dWFsOiBudW1iZXIgPSAwO1xuICAgICAgICBcbiAgICBAUmVxdWlyZWQgXG4gICAgcHVibGljIFNob3J0ZmFsbDogbnVtYmVyID0gMDsgXG59Il19