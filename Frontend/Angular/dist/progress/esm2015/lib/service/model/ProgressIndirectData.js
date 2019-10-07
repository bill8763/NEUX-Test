/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { Bean, Required } from "@allianzSND/core";
let ProgressIndirectData = class ProgressIndirectData {
    constructor() {
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
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NJbmRpcmVjdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzSW5kaXJlY3REYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbkUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztJQUdyQyxvQkFBb0I7SUFEakM7UUFJVyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBR3JCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGFBQVEsR0FBeUIsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBRzdELGFBQVEsR0FBOEIseUJBQXlCLENBQUMsTUFBTSxDQUFDO1FBQzlFLDREQUE0RDtRQUdyRCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBR3hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGNBQVMsR0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUFBLENBQUE7QUFoQ0c7SUFEQyxRQUFROztxREFDbUI7QUFHNUI7SUFEQyxRQUFROzt1REFDcUI7QUFHOUI7SUFEQyxRQUFROztzREFDb0I7QUFHN0I7SUFEQyxRQUFROzt1REFDeUI7QUFHbEM7SUFEQyxRQUFROztzREFDMkQ7QUFHcEU7SUFEQyxRQUFROztzREFDcUU7QUFJOUU7SUFEQyxRQUFROzt3REFDc0I7QUFHL0I7SUFEQyxRQUFROztrREFDZTtBQUd4QjtJQURDLFFBQVE7O3NEQUNtQjtBQUc1QjtJQURDLFFBQVE7O29EQUNpQjtBQUcxQjtJQURDLFFBQVE7O3VEQUNvQjtBQWxDcEIsb0JBQW9CO0lBRGhDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztHQUNoQixvQkFBb0IsQ0FtQ2hDO1NBbkNZLG9CQUFvQjs7O0lBRTdCLHVDQUM0Qjs7SUFFNUIseUNBQzhCOztJQUU5Qix3Q0FDNkI7O0lBRTdCLHlDQUNrQzs7SUFFbEMsd0NBQ29FOztJQUVwRSx3Q0FDOEU7O0lBRzlFLDBDQUMrQjs7SUFFL0Isb0NBQ3dCOztJQUV4Qix3Q0FDNEI7O0lBRTVCLHNDQUMwQjs7SUFFMUIseUNBQzZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSB9IGZyb20gXCIuL0VudW0vUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZVwiO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhVGltZUJhc2UgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVRpbWVCYXNlXCI7XG5pbXBvcnQgeyBBY3Rpdml0aWVzVHlwZSB9IGZyb20gXCIuL0VudW0vQWN0aXZpdGllc1R5cGVcIjtcbmltcG9ydCB7IEJlYW4sIFJlcXVpcmVkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuQEJlYW4oJ1Byb2dyZXNzSW5kaXJlY3REYXRhJylcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0luZGlyZWN0RGF0YSB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgQWdlbnRJRDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEFnZW50TmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEpvYkdyYWRlOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBcbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgRHJpbGxkb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIFxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBUaW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2UgPSBQZXJzb25hbERhdGFUaW1lQmFzZS5Vbmtub3c7XG5cbiAgICBAUmVxdWlyZWQgICAgXG4gICAgcHVibGljIERhdGFUeXBlOiBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlID0gUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZS5Vbmtub3c7XG4gICAgLy9wdWJsaWMgQWN0aXZpdGllczogQWN0aXZpdGllc1R5cGUgPSBBY3Rpdml0aWVzVHlwZS5Vbmtub3c7XG4gICAgICAgIFxuICAgIEBSZXF1aXJlZCBcbiAgICBwdWJsaWMgQWN0aXZpdGllczogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgXG4gICAgQFJlcXVpcmVkIFxuICAgIHB1YmxpYyBHb2FsOiBudW1iZXIgPSAwO1xuICAgICAgICBcbiAgICBAUmVxdWlyZWQgXG4gICAgcHVibGljIEZvcmVjYXN0OiBudW1iZXIgPSAwO1xuICAgICAgICBcbiAgICBAUmVxdWlyZWQgXG4gICAgcHVibGljIEFjdHVhbDogbnVtYmVyID0gMDtcbiAgICAgICAgXG4gICAgQFJlcXVpcmVkIFxuICAgIHB1YmxpYyBTaG9ydGZhbGw6IG51bWJlciA9IDA7IFxufSJdfQ==