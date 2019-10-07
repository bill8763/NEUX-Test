/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { Bean, Required } from "@allianzSND/core";
let ProgressDirectIndirectData = class ProgressDirectIndirectData {
    constructor() {
        this.AgentID = "";
        this.AgentName = "";
        this.TeamName = "";
        this.JobGrade = "";
        this.Drilldown = false;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.DataType = ProgressDataTeamValueType.Unknow;
        this.AppUseMode = "";
        //public Activities: ActivitiesType = ActivitiesType.Unknow;
        this.Activities = "";
        this.Goal = 0;
        this.Forecast = 0;
        this.Actual = 0;
        this.Shortfall = 0;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "AgentID", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "AgentName", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "TeamName", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "JobGrade", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Boolean)
], ProgressDirectIndirectData.prototype, "Drilldown", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "TimeBase", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "DataType", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "AppUseMode", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], ProgressDirectIndirectData.prototype, "Activities", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Goal", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Forecast", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Actual", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], ProgressDirectIndirectData.prototype, "Shortfall", void 0);
ProgressDirectIndirectData = tslib_1.__decorate([
    Bean('ProgressDirectIndirectData')
], ProgressDirectIndirectData);
export { ProgressDirectIndirectData };
if (false) {
    /** @type {?} */
    ProgressDirectIndirectData.prototype.AgentID;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.AgentName;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.TeamName;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.JobGrade;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.Drilldown;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.TimeBase;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.DataType;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.AppUseMode;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.Activities;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.Goal;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.Forecast;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.Actual;
    /** @type {?} */
    ProgressDirectIndirectData.prototype.Shortfall;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFN0UsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQywwQkFBMEI7SUFEdkM7UUFJVyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBR3JCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsYUFBUSxHQUF5QixvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFHN0QsYUFBUSxHQUE4Qix5QkFBeUIsQ0FBQyxNQUFNLENBQUM7UUFHdkUsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUMvQiw0REFBNEQ7UUFHckQsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUd4QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUduQixjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FBQSxDQUFBO0FBdENHO0lBREMsUUFBUTs7MkRBQ21CO0FBRzVCO0lBREMsUUFBUTs7NkRBQ3FCO0FBRzlCO0lBREMsUUFBUTs7NERBQ29CO0FBRzdCO0lBREMsUUFBUTs7NERBQ29CO0FBRzdCO0lBREMsUUFBUTs7NkRBQ3lCO0FBR2xDO0lBREMsUUFBUTs7NERBQzJEO0FBR3BFO0lBREMsUUFBUTs7NERBQ3FFO0FBRzlFO0lBREMsUUFBUTs7OERBQ3NCO0FBSS9CO0lBREMsUUFBUTs7OERBQ3NCO0FBRy9CO0lBREMsUUFBUTs7d0RBQ2U7QUFHeEI7SUFEQyxRQUFROzs0REFDbUI7QUFHNUI7SUFEQyxRQUFROzswREFDaUI7QUFHMUI7SUFEQyxRQUFROzs2REFDb0I7QUF4Q3BCLDBCQUEwQjtJQUR0QyxJQUFJLENBQUMsNEJBQTRCLENBQUM7R0FDdEIsMEJBQTBCLENBeUN0QztTQXpDWSwwQkFBMEI7OztJQUVuQyw2Q0FDNEI7O0lBRTVCLCtDQUM4Qjs7SUFFOUIsOENBQzZCOztJQUU3Qiw4Q0FDNkI7O0lBRTdCLCtDQUNrQzs7SUFFbEMsOENBQ29FOztJQUVwRSw4Q0FDOEU7O0lBRTlFLGdEQUMrQjs7SUFHL0IsZ0RBQytCOztJQUUvQiwwQ0FDd0I7O0lBRXhCLDhDQUM0Qjs7SUFFNUIsNENBQzBCOztJQUUxQiwrQ0FDNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gXCIuL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2VcIjtcbmltcG9ydCB7IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUgfSBmcm9tIFwiLi9FbnVtL1Byb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGVcIjtcbmltcG9ydCB7IEFjdGl2aXRpZXNUeXBlIH0gZnJvbSBcIi4vRW51bS9BY3Rpdml0aWVzVHlwZVwiO1xuaW1wb3J0IHsgQmVhbiwgUmVxdWlyZWQgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuXG5AQmVhbignUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEnKVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhIHtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBBZ2VudElEOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEFnZW50TmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBUZWFtTmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBKb2JHcmFkZTogc3RyaW5nID0gXCJcIjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBEcmlsbGRvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBUaW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2UgPSBQZXJzb25hbERhdGFUaW1lQmFzZS5Vbmtub3c7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgRGF0YVR5cGU6IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUgPSBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlLlVua25vdztcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBBcHBVc2VNb2RlOiBzdHJpbmcgPSBcIlwiO1xuICAgIC8vcHVibGljIEFjdGl2aXRpZXM6IEFjdGl2aXRpZXNUeXBlID0gQWN0aXZpdGllc1R5cGUuVW5rbm93O1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEFjdGl2aXRpZXM6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgR29hbDogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBGb3JlY2FzdDogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBBY3R1YWw6IG51bWJlciA9IDA7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgU2hvcnRmYWxsOiBudW1iZXIgPSAwO1xufSJdfQ==