/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
var ProgressDirectData = /** @class */ (function () {
    function ProgressDirectData() {
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
    return ProgressDirectData;
}());
export { ProgressDirectData };
if (false) {
    /** @type {?} */
    ProgressDirectData.prototype.AgentID;
    /** @type {?} */
    ProgressDirectData.prototype.AgentName;
    /** @type {?} */
    ProgressDirectData.prototype.JobGrade;
    /** @type {?} */
    ProgressDirectData.prototype.Drilldown;
    /** @type {?} */
    ProgressDirectData.prototype.TimeBase;
    /** @type {?} */
    ProgressDirectData.prototype.DataType;
    /** @type {?} */
    ProgressDirectData.prototype.Activities;
    /** @type {?} */
    ProgressDirectData.prototype.Goal;
    /** @type {?} */
    ProgressDirectData.prototype.Forecast;
    /** @type {?} */
    ProgressDirectData.prototype.Actual;
    /** @type {?} */
    ProgressDirectData.prototype.Shortfall;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NEaXJlY3REYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc0RpcmVjdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FO0lBQUE7UUFDVyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBeUIsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBQzdELGFBQVEsR0FBOEIseUJBQXlCLENBQUMsTUFBTSxDQUFDO1FBQzlFLDREQUE0RDtRQUNyRCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGNBQVMsR0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7SUFaRyxxQ0FBNEI7O0lBQzVCLHVDQUE4Qjs7SUFDOUIsc0NBQTZCOztJQUM3Qix1Q0FBa0M7O0lBQ2xDLHNDQUFvRTs7SUFDcEUsc0NBQThFOztJQUU5RSx3Q0FBK0I7O0lBQy9CLGtDQUF3Qjs7SUFDeEIsc0NBQTRCOztJQUM1QixvQ0FBMEI7O0lBQzFCLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUgfSBmcm9tIFwiLi9FbnVtL1Byb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGVcIjtcbmltcG9ydCB7IEFjdGl2aXRpZXNUeXBlIH0gZnJvbSBcIi4vRW51bS9BY3Rpdml0aWVzVHlwZVwiO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhVGltZUJhc2UgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVRpbWVCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0RpcmVjdERhdGEge1xuICAgIHB1YmxpYyBBZ2VudElEOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBBZ2VudE5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEpvYkdyYWRlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBEcmlsbGRvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgVGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlID0gUGVyc29uYWxEYXRhVGltZUJhc2UuVW5rbm93O1xuICAgIHB1YmxpYyBEYXRhVHlwZTogUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSA9IFByb2dyZXNzRGF0YVRlYW1WYWx1ZVR5cGUuVW5rbm93O1xuICAgIC8vcHVibGljIEFjdGl2aXRpZXM6IEFjdGl2aXRpZXNUeXBlID0gQWN0aXZpdGllc1R5cGUuVW5rbm93O1xuICAgIHB1YmxpYyBBY3Rpdml0aWVzOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBHb2FsOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBGb3JlY2FzdDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgQWN0dWFsOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBTaG9ydGZhbGw6IG51bWJlciA9IDA7XG59XG5cbiJdfQ==