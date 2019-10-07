/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { PersonalDataType } from "./Enum/PersonalDataType";
var ProgressPersonalData = /** @class */ (function () {
    function ProgressPersonalData() {
        this.DataType = PersonalDataType.Unknow;
        this.TimeBase = PersonalDataTimeBase.Unknow;
        this.Find = 0;
        this.Schedule = 0;
        this.Meet = 0;
        this.Submit = 0;
        this.Inforce = 0;
        this.FYFC = 0;
        this.FindConvertPointBase = 0;
        this.ScheduleConvertPointBase = 0;
        this.MeetConvertPointBase = 0;
        this.SubmitConvertPointBase = 0;
        this.InforceConvertPointBase = 0;
    }
    return ProgressPersonalData;
}());
export { ProgressPersonalData };
if (false) {
    /** @type {?} */
    ProgressPersonalData.prototype.DataType;
    /** @type {?} */
    ProgressPersonalData.prototype.TimeBase;
    /** @type {?} */
    ProgressPersonalData.prototype.Find;
    /** @type {?} */
    ProgressPersonalData.prototype.Schedule;
    /** @type {?} */
    ProgressPersonalData.prototype.Meet;
    /** @type {?} */
    ProgressPersonalData.prototype.Submit;
    /** @type {?} */
    ProgressPersonalData.prototype.Inforce;
    /** @type {?} */
    ProgressPersonalData.prototype.FYFC;
    /** @type {?} */
    ProgressPersonalData.prototype.FindConvertPointBase;
    /** @type {?} */
    ProgressPersonalData.prototype.ScheduleConvertPointBase;
    /** @type {?} */
    ProgressPersonalData.prototype.MeetConvertPointBase;
    /** @type {?} */
    ProgressPersonalData.prototype.SubmitConvertPointBase;
    /** @type {?} */
    ProgressPersonalData.prototype.InforceConvertPointBase;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ2Vzc1BlcnNvbmFsRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ2Vzc1BlcnNvbmFsRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFM0Q7SUFBQTtRQUNXLGFBQVEsR0FBcUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ3JELGFBQVEsR0FBeUIsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBQzdELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLHlCQUFvQixHQUFXLENBQUMsQ0FBQztRQUNqQyw2QkFBd0IsR0FBVyxDQUFDLENBQUM7UUFDckMseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLDJCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyw0QkFBdUIsR0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7SUFkRyx3Q0FBNEQ7O0lBQzVELHdDQUFvRTs7SUFDcEUsb0NBQXdCOztJQUN4Qix3Q0FBNEI7O0lBQzVCLG9DQUF3Qjs7SUFDeEIsc0NBQTBCOztJQUMxQix1Q0FBMkI7O0lBQzNCLG9DQUF3Qjs7SUFFeEIsb0RBQXdDOztJQUN4Qyx3REFBNEM7O0lBQzVDLG9EQUF3Qzs7SUFDeEMsc0RBQTBDOztJQUMxQyx1REFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gXCIuL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2VcIjtcbmltcG9ydCB7IFBlcnNvbmFsRGF0YVR5cGUgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzUGVyc29uYWxEYXRhIHtcbiAgICBwdWJsaWMgRGF0YVR5cGU6IFBlcnNvbmFsRGF0YVR5cGUgPSBQZXJzb25hbERhdGFUeXBlLlVua25vdztcbiAgICBwdWJsaWMgVGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlID0gUGVyc29uYWxEYXRhVGltZUJhc2UuVW5rbm93O1xuICAgIHB1YmxpYyBGaW5kOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBTY2hlZHVsZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgTWVldDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgU3VibWl0OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBJbmZvcmNlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBGWUZDOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIEZpbmRDb252ZXJ0UG9pbnRCYXNlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBTY2hlZHVsZUNvbnZlcnRQb2ludEJhc2U6IG51bWJlciA9IDA7XG4gICAgcHVibGljIE1lZXRDb252ZXJ0UG9pbnRCYXNlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBTdWJtaXRDb252ZXJ0UG9pbnRCYXNlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBJbmZvcmNlQ29udmVydFBvaW50QmFzZTogbnVtYmVyID0gMDtcbn0iXX0=