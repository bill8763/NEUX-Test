/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressListContentClass = /** @class */ (function () {
    function ProgressListContentClass(translateService) {
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
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    ProgressListContentClass.prototype._setTranslateVariable = 
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    function () {
        this._translateVariable = {
            "gratsPoints": 20,
            "wellDownPoints": 10
        };
    };
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    ProgressListContentClass.prototype._translateWithVariable = /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    function (mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    };
    return ProgressListContentClass;
}());
export { ProgressListContentClass };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NMaXN0Q29udGVudENsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9Qcm9ncmVzc0xpc3RDb250ZW50Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBdUNJLGtDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXJDdEQsa0NBQWtDO1FBQzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUVsQyxXQUFXO1FBQ0osYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRTlCLG1DQUFtQztRQUM1QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUUxQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUU5QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUUxQixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFFNUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsdUJBQWtCLEdBQVcsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUVoQyxPQUFPO1FBQ0EsZUFBVSxHQUFXLEVB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Qiw2Q0FBOEI7O0lBRzlCLGdEQUFpQzs7SUFDakMsbURBQW9DOztJQUNwQyxnREFBaUM7O0lBRWpDLG9EQUFxQzs7SUFDckMsdURBQXdDOztJQUN4QyxvREFBcUM7O0lBRXJDLGdEQUFpQzs7SUFDakMsbURBQW9DOztJQUNwQyxnREFBaUM7O0lBRWpDLGtEQUFtQzs7SUFDbkMscURBQXNDOztJQUN0QyxrREFBbUM7O0lBRW5DLG1EQUFvQzs7SUFDcEMsc0RBQXVDOztJQUN2QyxtREFBb0M7O0lBRXBDLG1EQUFvQzs7SUFDcEMsc0RBQXVDOztJQUN2QywrQ0FBZ0M7O0lBQ2hDLCtDQUFnQzs7SUFHaEMsOENBQStCOzs7OztJQUduQixvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzTGlzdENvbnRlbnRDbGFzcyB7XG5cbiAgICAvL3NhdmUgYW5kIHNldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlVmFyaWFibGUgPSBudWxsO1xuXG4gICAgLy8gd2VlayBkYXlcbiAgICBwdWJsaWMgV2Vla1RleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFRvZGF5VGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIC8vRmluZCBTY2hlZHVsZSBNZWV0IFN1Ym1pdCBJbmZvcmNlXG4gICAgcHVibGljIEZpbmROYW1lVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgRmluZENvbnRlbnRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBGaW5kVW5pdFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgU2NoZWR1bGVOYW1lVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgU2NoZWR1bGVDb250ZW50VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgU2NoZWR1bGVVbml0VGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIHB1YmxpYyBNZWV0TmFtZVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIE1lZXRDb250ZW50VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgTWVldFVuaXRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHVibGljIFN1Ym1pdE5hbWVUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBTdWJtaXRDb250ZW50VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgU3VibWl0VW5pdFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgSW5mb3JjZU5hbWVUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBJbmZvcmNlQ29udGVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEluZm9yY2VVbml0VGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIHB1YmxpYyBBbG1vc3RNYWRlSXRNc2c6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIENvbmdyYXR1bGF0aW9uc01zZzogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgV2VsbERvbmVNc2c6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEdyZWF0Sm9iTXNnOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgLy91bml0c1xuICAgIHB1YmxpYyBQb2ludHNUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICBcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlVmFyaWFibGUoKTtcbiAgICAgICAgdGhpcy5XZWVrVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnV2VlaycpO1xuICAgICAgICB0aGlzLlRvZGF5VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnVG9kYXknKTtcblxuICAgICAgICB0aGlzLkZpbmROYW1lVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnRmluZCcpO1xuICAgICAgICB0aGlzLkZpbmRDb250ZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnRmluZF9TdWJ0aXRsZScpO1xuICAgICAgICB0aGlzLkZpbmRVbml0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUGVvcGxlJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlNjaGVkdWxlTmFtZVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1NjaGVkdWxlJyk7XG4gICAgICAgIHRoaXMuU2NoZWR1bGVDb250ZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnU2NoZWR1bGVfU3VidGl0bGUnKTtcbiAgICAgICAgdGhpcy5TY2hlZHVsZVVuaXRUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdUaW1lcycpO1xuXG4gICAgICAgIHRoaXMuTWVldE5hbWVUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdNZWV0Jyk7XG4gICAgICAgIHRoaXMuTWVldENvbnRlbnRUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdNZWV0X1N1YnRpdGxlJyk7XG4gICAgICAgIHRoaXMuTWVldFVuaXRUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdUaW1lcycpO1xuXG4gICAgICAgIHRoaXMuU3VibWl0TmFtZVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1N1Ym1pdCcpO1xuICAgICAgICB0aGlzLlN1Ym1pdENvbnRlbnRUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdTdWJtaXRfU3VidGl0bGUnKTtcbiAgICAgICAgdGhpcy5TdWJtaXRVbml0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnVGltZXMnKTtcblxuICAgICAgICB0aGlzLkluZm9yY2VOYW1lVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb3JjZScpO1xuICAgICAgICB0aGlzLkluZm9yY2VDb250ZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb3JjZV9TdWJ0aXRsZScpO1xuICAgICAgICB0aGlzLkluZm9yY2VVbml0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnVGltZXMnKTtcblxuICAgICAgICB0aGlzLlBvaW50c1RleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1BvaW50cycpO1xuXG4gICAgICAgIHRoaXMuQ29uZ3JhdHVsYXRpb25zTXNnID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdQcm9ncmVzc19Db25ncmF0dWxhdGlvbnNfTWVzc2FnZScpO1xuICAgICAgICB0aGlzLkFsbW9zdE1hZGVJdE1zZyA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnUHJvZ3Jlc3NfQWxtb3N0X01hZGVfSXRfTWVzc2FnZScpO1xuICAgICAgICB0aGlzLldlbGxEb25lTXNnID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdQcm9ncmVzc19XZWxsX0RvbmVfTWVzc2FnZScpO1xuICAgICAgICB0aGlzLkdyZWF0Sm9iTXNnID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdQcm9ncmVzc19HcmVhdF9Kb2JfTWVzc2FnZScpO1xuICAgIH1cblxuXG4gICAgLy9zZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCkge1xuXG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZVZhcmlhYmxlID0ge1xuICAgICAgICAgICAgXCJncmF0c1BvaW50c1wiOiAyMCxcbiAgICAgICAgICAgIFwid2VsbERvd25Qb2ludHNcIjogMTBcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIF90cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lEOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lELCB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSk7XG4gICAgfVxufSJdfQ==