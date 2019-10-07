/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProgressListContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        // week day
        this.WeekText = "";
        this.TodayText = "";
        //Find Schedule Meet Submit Inforce
        this.FindNameText = "";
        this.FindContentText = "";
        this.FindUnitText = "";
        this.ScheduleNameText = "";
        this.ScheduleContentText = "";
        this.ScheduleUnitText = "";
        this.MeetNameText = "";
        this.MeetContentText = "";
        this.MeetUnitText = "";
        this.SubmitNameText = "";
        this.SubmitContentText = "";
        this.SubmitUnitText = "";
        this.InforceNameText = "";
        this.InforceContentText = "";
        this.InforceUnitText = "";
        this.AlmostMadeItMsg = "";
        this.CongratulationsMsg = "";
        this.WellDoneMsg = "";
        this.GreatJobMsg = "";
        //units
        this.PointsText = "";
        this._setTranslateVariable();
        this.WeekText = this._translateWithVariable('Week');
        this.TodayText = this._translateWithVariable('Today');
        this.FindNameText = this._translateWithVariable('Find');
        this.FindContentText = this._translateWithVariable('Find_Subtitle');
        this.FindUnitText = this._translateWithVariable('People');
        this.ScheduleNameText = this._translateWithVariable('Schedule');
        this.ScheduleContentText = this._translateWithVariable('Schedule_Subtitle');
        this.ScheduleUnitText = this._translateWithVariable('Times');
        this.MeetNameText = this._translateWithVariable('Meet');
        this.MeetContentText = this._translateWithVariable('Meet_Subtitle');
        this.MeetUnitText = this._translateWithVariable('Times');
        this.SubmitNameText = this._translateWithVariable('Submit');
        this.SubmitContentText = this._translateWithVariable('Submit_Subtitle');
        this.SubmitUnitText = this._translateWithVariable('Times');
        this.InforceNameText = this._translateWithVariable('Inforce');
        this.InforceContentText = this._translateWithVariable('Inforce_Subtitle');
        this.InforceUnitText = this._translateWithVariable('Times');
        this.PointsText = this._translateWithVariable('Points');
        this.CongratulationsMsg = this._translateWithVariable('Progress_Congratulations_Message');
        this.AlmostMadeItMsg = this._translateWithVariable('Progress_Almost_Made_It_Message');
        this.WellDoneMsg = this._translateWithVariable('Progress_Well_Done_Message');
        this.GreatJobMsg = this._translateWithVariable('Progress_Great_Job_Message');
    }
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
            "gratsPoints": 20,
            "wellDownPoints": 10
        };
    }
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    _translateWithVariable(mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressListContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressListContentClass.prototype.WeekText;
    /** @type {?} */
    ProgressListContentClass.prototype.TodayText;
    /** @type {?} */
    ProgressListContentClass.prototype.FindNameText;
    /** @type {?} */
    ProgressListContentClass.prototype.FindContentText;
    /** @type {?} */
    ProgressListContentClass.prototype.FindUnitText;
    /** @type {?} */
    ProgressListContentClass.prototype.ScheduleNameText;
    /** @type {?} */
    ProgressListContentClass.prototype.ScheduleContentText;
    /** @type {?} */
    ProgressListContentClass.prototype.ScheduleUnitText;
    /** @type {?} */
    ProgressListContentClass.prototype.MeetNameText;
    /** @type {?} */
    ProgressListContentClass.prototype.MeetContentText;
    /** @type {?} */
    ProgressListContentClass.prototype.MeetUnitText;
    /** @type {?} */
    ProgressListContentClass.prototype.SubmitNameText;
    /** @type {?} */
    ProgressListContentClass.prototype.SubmitContentText;
    /** @type {?} */
    ProgressListContentClass.prototype.SubmitUnitText;
    /** @type {?} */
    ProgressListContentClass.prototype.InforceNameText;
    /** @type {?} */
    ProgressListContentClass.prototype.InforceContentText;
    /** @type {?} */
    ProgressListContentClass.prototype.InforceUnitText;
    /** @type {?} */
    ProgressListContentClass.prototype.AlmostMadeItMsg;
    /** @type {?} */
    ProgressListContentClass.prototype.CongratulationsMsg;
    /** @type {?} */
    ProgressListContentClass.prototype.WellDoneMsg;
    /** @type {?} */
    ProgressListContentClass.prototype.GreatJobMsg;
    /** @type {?} */
    ProgressListContentClass.prototype.PointsText;
    /**
     * @type {?}
     * @private
     */
    ProgressListContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NMaXN0Q29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc0xpc3RDb250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUF1Q0YsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFyQ3RELGtDQUFrQztRQUMxQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFFbEMsV0FBVztRQUNKLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUU5QixtQ0FBbUM7UUFDNUIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFFMUIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLHdCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFFOUIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFFMUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU3QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3Qix1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFFaEMsT0FBTztRQUNBLGVBQVUs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QyxvREFBcUM7O0lBQ3JDLHVEQUF3Qzs7SUFDeEMsb0RBQXFDOztJQUVyQyxnREFBaUM7O0lBQ2pDLG1EQUFvQzs7SUFDcEMsZ0RBQWlDOztJQUVqQyxrREFBbUM7O0lBQ25DLHFEQUFzQzs7SUFDdEMsa0RBQW1DOztJQUVuQyxtREFBb0M7O0lBQ3BDLHNEQUF1Qzs7SUFDdkMsbURBQW9DOztJQUVwQyxtREFBb0M7O0lBQ3BDLHNEQUF1Qzs7SUFDdkMsK0NBQWdDOztJQUNoQywrQ0FBZ0M7O0lBR2hDLDhDQUErQjs7Ozs7SUFHbkIsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0xpc3RDb250ZW50Q2xhc3Mge1xuXG4gICAgLy9zYXZlIGFuZCBzZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVZhcmlhYmxlID0gbnVsbDtcblxuICAgIC8vIHdlZWsgZGF5XG4gICAgcHVibGljIFdlZWtUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBUb2RheVRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAvL0ZpbmQgU2NoZWR1bGUgTWVldCBTdWJtaXQgSW5mb3JjZVxuICAgIHB1YmxpYyBGaW5kTmFtZVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEZpbmRDb250ZW50VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgRmluZFVuaXRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHVibGljIFNjaGVkdWxlTmFtZVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFNjaGVkdWxlQ29udGVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFNjaGVkdWxlVW5pdFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgTWVldE5hbWVUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBNZWV0Q29udGVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIE1lZXRVbml0VGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIHB1YmxpYyBTdWJtaXROYW1lVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgU3VibWl0Q29udGVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFN1Ym1pdFVuaXRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHVibGljIEluZm9yY2VOYW1lVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgSW5mb3JjZUNvbnRlbnRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBJbmZvcmNlVW5pdFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgQWxtb3N0TWFkZUl0TXNnOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBDb25ncmF0dWxhdGlvbnNNc2c6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFdlbGxEb25lTXNnOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBHcmVhdEpvYk1zZzogc3RyaW5nID0gXCJcIjtcblxuICAgIC8vdW5pdHNcbiAgICBwdWJsaWMgUG9pbnRzVGV4dDogc3RyaW5nID0gXCJcIjtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgXG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCk7XG4gICAgICAgIHRoaXMuV2Vla1RleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1dlZWsnKTtcbiAgICAgICAgdGhpcy5Ub2RheVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1RvZGF5Jyk7XG5cbiAgICAgICAgdGhpcy5GaW5kTmFtZVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0ZpbmQnKTtcbiAgICAgICAgdGhpcy5GaW5kQ29udGVudFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0ZpbmRfU3VidGl0bGUnKTtcbiAgICAgICAgdGhpcy5GaW5kVW5pdFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1Blb3BsZScpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5TY2hlZHVsZU5hbWVUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdTY2hlZHVsZScpO1xuICAgICAgICB0aGlzLlNjaGVkdWxlQ29udGVudFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1NjaGVkdWxlX1N1YnRpdGxlJyk7XG4gICAgICAgIHRoaXMuU2NoZWR1bGVVbml0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnVGltZXMnKTtcblxuICAgICAgICB0aGlzLk1lZXROYW1lVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnTWVldCcpO1xuICAgICAgICB0aGlzLk1lZXRDb250ZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnTWVldF9TdWJ0aXRsZScpO1xuICAgICAgICB0aGlzLk1lZXRVbml0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnVGltZXMnKTtcblxuICAgICAgICB0aGlzLlN1Ym1pdE5hbWVUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdTdWJtaXQnKTtcbiAgICAgICAgdGhpcy5TdWJtaXRDb250ZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnU3VibWl0X1N1YnRpdGxlJyk7XG4gICAgICAgIHRoaXMuU3VibWl0VW5pdFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1RpbWVzJyk7XG5cbiAgICAgICAgdGhpcy5JbmZvcmNlTmFtZVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9yY2UnKTtcbiAgICAgICAgdGhpcy5JbmZvcmNlQ29udGVudFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9yY2VfU3VidGl0bGUnKTtcbiAgICAgICAgdGhpcy5JbmZvcmNlVW5pdFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1RpbWVzJyk7XG5cbiAgICAgICAgdGhpcy5Qb2ludHNUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdQb2ludHMnKTtcblxuICAgICAgICB0aGlzLkNvbmdyYXR1bGF0aW9uc01zZyA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUHJvZ3Jlc3NfQ29uZ3JhdHVsYXRpb25zX01lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5BbG1vc3RNYWRlSXRNc2cgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1Byb2dyZXNzX0FsbW9zdF9NYWRlX0l0X01lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5XZWxsRG9uZU1zZyA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUHJvZ3Jlc3NfV2VsbF9Eb25lX01lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5HcmVhdEpvYk1zZyA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUHJvZ3Jlc3NfR3JlYXRfSm9iX01lc3NhZ2UnKTtcbiAgICB9XG5cblxuICAgIC8vc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpIHtcblxuICAgICAgICB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSA9IHtcbiAgICAgICAgICAgIFwiZ3JhdHNQb2ludHNcIjogMjAsXG4gICAgICAgICAgICBcIndlbGxEb3duUG9pbnRzXCI6IDEwXG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRCwgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUpO1xuICAgIH1cbn0iXX0=