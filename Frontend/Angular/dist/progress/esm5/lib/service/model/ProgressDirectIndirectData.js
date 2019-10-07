/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { Bean, Required } from "@allianzSND/core";
var ProgressDirectIndirectData = /** @class */ (function () {
    function ProgressDirectIndirectData() {
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
    return ProgressDirectIndirectData;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzRGlyZWN0SW5kaXJlY3REYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFN0UsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFbEQ7UUFJVyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBR3JCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHM0IsYUFBUSxHQUF5QixvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFHN0QsYUFBUSxHQUE4Qix5QkFBeUIsQ0FBQyxNQUFNLENBQUM7UUFHdkUsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUMvQiw0REFBNEQ7UUFHckQsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUd4QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUduQixjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUF0Q0c7UUFEQyxRQUFROzsrREFDbUI7SUFHNUI7UUFEQyxRQUFROztpRUFDcUI7SUFHOUI7UUFEQyxRQUFROztnRUFDb0I7SUFHN0I7UUFEQyxRQUFROztnRUFDb0I7SUFHN0I7UUFEQyxRQUFROztpRUFDeUI7SUFHbEM7UUFEQyxRQUFROztnRUFDMkQ7SUFHcEU7UUFEQyxRQUFROztnRUFDcUU7SUFHOUU7UUFEQyxRQUFROztrRUFDc0I7SUFJL0I7UUFEQyxRQUFROztrRUFDc0I7SUFHL0I7UUFEQyxRQUFROzs0REFDZTtJQUd4QjtRQURDLFFBQVE7O2dFQUNtQjtJQUc1QjtRQURDLFFBQVE7OzhEQUNpQjtJQUcxQjtRQURDLFFBQVE7O2lFQUNvQjtJQXhDcEIsMEJBQTBCO1FBRHRDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztPQUN0QiwwQkFBMEIsQ0F5Q3RDO0lBQUQsaUNBQUM7Q0FBQSxJQUFBO1NBekNZLDBCQUEwQjs7O0lBRW5DLDZDQUM0Qjs7SUFFNUIsK0NBQzhCOztJQUU5Qiw4Q0FDNkI7O0lBRTdCLDhDQUM2Qjs7SUFFN0IsK0NBQ2tDOztJQUVsQyw4Q0FDb0U7O0lBRXBFLDhDQUM4RTs7SUFFOUUsZ0RBQytCOztJQUcvQixnREFDK0I7O0lBRS9CLDBDQUN3Qjs7SUFFeEIsOENBQzRCOztJQUU1Qiw0Q0FDMEI7O0lBRTFCLCtDQUM2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNvbmFsRGF0YVRpbWVCYXNlIH0gZnJvbSBcIi4vRW51bS9QZXJzb25hbERhdGFUaW1lQmFzZVwiO1xuaW1wb3J0IHsgUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSB9IGZyb20gXCIuL0VudW0vUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZVwiO1xuaW1wb3J0IHsgQWN0aXZpdGllc1R5cGUgfSBmcm9tIFwiLi9FbnVtL0FjdGl2aXRpZXNUeXBlXCI7XG5pbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdQcm9ncmVzc0RpcmVjdEluZGlyZWN0RGF0YScpXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NEaXJlY3RJbmRpcmVjdERhdGEge1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEFnZW50SUQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgQWdlbnROYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFRlYW1OYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEpvYkdyYWRlOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIERyaWxsZG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIFRpbWVCYXNlOiBQZXJzb25hbERhdGFUaW1lQmFzZSA9IFBlcnNvbmFsRGF0YVRpbWVCYXNlLlVua25vdztcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBEYXRhVHlwZTogUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSA9IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUuVW5rbm93O1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEFwcFVzZU1vZGU6IHN0cmluZyA9IFwiXCI7XG4gICAgLy9wdWJsaWMgQWN0aXZpdGllczogQWN0aXZpdGllc1R5cGUgPSBBY3Rpdml0aWVzVHlwZS5Vbmtub3c7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwdWJsaWMgQWN0aXZpdGllczogc3RyaW5nID0gXCJcIjtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBHb2FsOiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEZvcmVjYXN0OiBudW1iZXIgPSAwO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHVibGljIEFjdHVhbDogbnVtYmVyID0gMDtcblxuICAgIEBSZXF1aXJlZFxuICAgIHB1YmxpYyBTaG9ydGZhbGw6IG51bWJlciA9IDA7XG59Il19