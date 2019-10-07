/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProgressDataTeamValueType } from "./Enum/ProgressDataTeamValueType";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
export class ProgressDirectData {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NEaXJlY3REYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc0RpcmVjdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FLE1BQU07SUFBTjtRQUNXLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUF5QixvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDN0QsYUFBUSxHQUE4Qix5QkFBeUIsQ0FBQyxNQUFNLENBQUM7UUFDOUUsNERBQTREO1FBQ3JELGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQUE7OztJQVpHLHFDQUE0Qjs7SUFDNUIsdUNBQThCOztJQUM5QixzQ0FBNkI7O0lBQzdCLHVDQUFrQzs7SUFDbEMsc0NBQW9FOztJQUNwRSxzQ0FBOEU7O0lBRTlFLHdDQUErQjs7SUFDL0Isa0NBQXdCOztJQUN4QixzQ0FBNEI7O0lBQzVCLG9DQUEwQjs7SUFDMUIsdUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZSB9IGZyb20gXCIuL0VudW0vUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZVwiO1xuaW1wb3J0IHsgQWN0aXZpdGllc1R5cGUgfSBmcm9tIFwiLi9FbnVtL0FjdGl2aXRpZXNUeXBlXCI7XG5pbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gXCIuL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzRGlyZWN0RGF0YSB7XG4gICAgcHVibGljIEFnZW50SUQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEFnZW50TmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgSm9iR3JhZGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIERyaWxsZG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBUaW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2UgPSBQZXJzb25hbERhdGFUaW1lQmFzZS5Vbmtub3c7XG4gICAgcHVibGljIERhdGFUeXBlOiBQcm9ncmVzc0RhdGFUZWFtVmFsdWVUeXBlID0gUHJvZ3Jlc3NEYXRhVGVhbVZhbHVlVHlwZS5Vbmtub3c7XG4gICAgLy9wdWJsaWMgQWN0aXZpdGllczogQWN0aXZpdGllc1R5cGUgPSBBY3Rpdml0aWVzVHlwZS5Vbmtub3c7XG4gICAgcHVibGljIEFjdGl2aXRpZXM6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEdvYWw6IG51bWJlciA9IDA7XG4gICAgcHVibGljIEZvcmVjYXN0OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBBY3R1YWw6IG51bWJlciA9IDA7XG4gICAgcHVibGljIFNob3J0ZmFsbDogbnVtYmVyID0gMDtcbn1cblxuIl19