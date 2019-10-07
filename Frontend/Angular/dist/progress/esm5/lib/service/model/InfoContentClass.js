/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfoContentClass = /** @class */ (function () {
    function InfoContentClass(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        //progress head table info
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.ForecastText = "";
        this.RecruitmentText = "";
        this.InformationDescriptionText = "";
        this.InfoTitle = "";
        this.InfoMonthDetailText = "";
        this.InfoQuarterDetailText = "";
        this.InfoYearDetailText = "";
        this.InfoForecastRecruitmentDetailText = "";
        this.InfoAllAmountCountsByMillionText = "";
        //progress-personal-progressbar-list info
        this.InfoHowToReadThisTitle = "";
        this.InfoConversionRateText = "";
        this.InfoConversionRateDetailText = "";
        //progress-team-direct-unit info
        this.InfoActivityLabelText = "";
        this.InfoRedMeanText = "";
        this.InfoGreyMeanText = "";
        this.InfoIfAnActivity1Text = "";
        this.InfoIfAnActivity2Text = "";
        this.InfoToFindText = "";
        this.InfoTryTo1Text = "";
        this.InfoTryTo2Text = "";
        this.InfoTryTo3Text = "";
        this.InfoMoreActive1Text = "";
        this.InfoMoreActive2Text = "";
        this.InfoMoreActive3Text = "";
        this.InfoMoreActive4Text = "";
        this.InfoTryHard1Text = "";
        this.InfoTryHard2Text = "";
        this.InfoTryHard3Text = "";
        this.InfoHighQuality1Text = "";
        this.InfoHighQuality2Text = "";
        this._setTranslateVariable();
        //progress head table info
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.RecruitmentText = this._translateWithVariable('Recruitment');
        this.InformationDescriptionText = this._translateWithVariable('Info_Information_Description');
        this.InfoTitle = this._translateWithVariable('Info_Title');
        this.InfoMonthDetailText = this._translateWithVariable('Info_Month_Detail');
        this.InfoQuarterDetailText = this._translateWithVariable('Info_Quarter_Detail');
        this.InfoYearDetailText = this._translateWithVariable('Info_Year_Detail');
        this.InfoForecastRecruitmentDetailText = this._translateWithVariable('Info_Forecast_Recruitment_Detail');
        //progress-personal-progressbar-list info
        this.InfoHowToReadThisTitle = this._translateWithVariable('Info_How_To_Read_This');
        this.InfoConversionRateText = this._translateWithVariable('Info_Conversion_Rate');
        this.InfoConversionRateDetailText = this._translateWithVariable('Info_Conversion_Rate_Detail');
        //progress-team-direct-unit
        this.InfoActivityLabelText = this._translateWithVariable('Info_Activity_Label');
        this.InfoRedMeanText = this._translateWithVariable('Info_Red_Mean');
        this.InfoGreyMeanText = this._translateWithVariable('Info_Grey_Mean');
        this.InfoIfAnActivity1Text = this._translateWithVariable('Info_If_An_Activity_1');
        this.InfoIfAnActivity2Text = this._translateWithVariable('Info_If_An_Activity_2');
        this.InfoToFindText = this._translateWithVariable('Info_To_Find');
        this.InfoTryTo1Text = this._translateWithVariable('Info_Try_To_1');
        this.InfoTryTo2Text = this._translateWithVariable('Info_Try_To_2');
        this.InfoTryTo3Text = this._translateWithVariable('Info_Try_To_3');
        this.InfoMoreActive1Text = this._translateWithVariable('Info_More_Active_1');
        this.InfoMoreActive2Text = this._translateWithVariable('Info_More_Active_2');
        this.InfoMoreActive3Text = this._translateWithVariable('Info_More_Active_3');
        this.InfoMoreActive4Text = this._translateWithVariable('Info_More_Active_4');
        this.InfoTryHard1Text = this._translateWithVariable('Info_Try_Hard_1');
        this.InfoTryHard2Text = this._translateWithVariable('Info_Try_Hard_2');
        this.InfoTryHard3Text = this._translateWithVariable('Info_Try_Hard_3');
        this.InfoHighQuality1Text = this._translateWithVariable('Info_High_Quality_1');
        this.InfoHighQuality2Text = this._translateWithVariable('Info_High_Quality_2');
        this.InfoAllAmountCountsByMillionText = this._translateWithVariable("Info_All_Amount_Counts_By_Million");
    }
    //set translate variables
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    InfoContentClass.prototype._setTranslateVariable = 
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    function () {
        this._translateVariable = {
        // "gratsPoints": 20,
        };
    };
    /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    InfoContentClass.prototype._translateWithVariable = /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    function (mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    };
    return InfoContentClass;
}());
export { InfoContentClass };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InfoContentClass.prototype._translateVariable;
    /** @type {?} */
    InfoContentClass.prototype.MonthText;
    /** @type {?} */
    InfoContentClass.prototype.QuarterText;
    /** @type {?} */
    InfoContentClass.prototype.YearText;
    /** @type {?} */
    InfoContentClass.prototype.ForecastText;
    /** @type {?} */
    InfoContentClass.prototype.RecruitmentText;
    /** @type {?} */
    InfoContentClass.prototype.InformationDescriptionText;
    /** @type {?} */
    InfoContentClass.prototype.InfoTitle;
    /** @type {?} */
    InfoContentClass.prototype.InfoMonthDetailText;
    /** @type {?} */
    InfoContentClass.prototype.InfoQuarterDetailText;
    /** @type {?} */
    InfoContentClass.prototype.InfoYearDetailText;
    /** @type {?} */
    InfoContentClass.prototype.InfoForecastRecruitmentDetailText;
    /** @type {?} */
    InfoContentClass.prototype.InfoAllAmountCountsByMillionText;
    /** @type {?} */
    InfoContentClass.prototype.InfoHowToReadThisTitle;
    /** @type {?} */
    InfoContentClass.prototype.InfoConversionRateText;
    /** @type {?} */
    InfoContentClass.prototype.InfoConversionRateDetailText;
    /** @type {?} */
    InfoContentClass.prototype.InfoActivityLabelText;
    /** @type {?} */
    InfoContentClass.prototype.InfoRedMeanText;
    /** @type {?} */
    InfoContentClass.prototype.InfoGreyMeanText;
    /** @type {?} */
    InfoContentClass.prototype.InfoIfAnActivity1Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoIfAnActivity2Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoToFindText;
    /** @type {?} */
    InfoContentClass.prototype.InfoTryTo1Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoTryTo2Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoTryTo3Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoMoreActive1Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoMoreActive2Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoMoreActive3Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoMoreActive4Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoTryHard1Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoTryHard2Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoTryHard3Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoHighQuality1Text;
    /** @type {?} */
    InfoContentClass.prototype.InfoHighQuality2Text;
    /**
     * @type {?}
     * @private
     */
    InfoContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mb0NvbnRlbnRDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvSW5mb0NvbnRlbnRDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFrRFEsMEJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBakR0RCxrQ0FBa0M7UUFDMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRWxDLDBCQUEwQjtRQUNuQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsK0JBQTBCLEdBQVcsRUFBRSxDQUFDO1FBRXhDLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBQ2hDLDBCQUFxQixHQUFVLEVBQUUsQ0FBQztRQUNsQyx1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsc0NBQWlDLEdBQVcsRUFBRSxDQUFDO1FBQy9DLHFDQUFnQyxHQUFVLEVBQUUsQ0FBQztRQUVwRCx5Q0FBeUM7UUFDbEMsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO1FBQ3BDLDJCQUFzQixHQUFXLEVBQUUsQ0FBQztRQUNwQyxpQ0FBNEIsR0FBVyxFQUFFLENBQUM7UUFFakQsZ0NBQWdDO1FBQ3pCLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztRQUNuQyxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBQ25DLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztRQUVuQyxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUU1Qix3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFFakMscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFFOUIseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUtyQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV6Ryx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFFL0YsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUUvRSxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFFN0csQ0FBQztJQUVELHlCQUF5Qjs7Ozs7O0lBQ2pCLGdEQUFxQjs7Ozs7O0lBQTdCO1FBRUksSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFCQUFxQjtTQUN4QixDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8saURBQXNCOzs7OztJQUE5QixVQUErQixTQUFpQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNULHVCQUFDO0FBQUQsQ0FBQyxBQWpIRCxJQWlIQzs7Ozs7OztJQS9HTyw4Q0FBa0M7O0lBR2xDLHFDQUE4Qjs7SUFDOUIsdUNBQWdDOztJQUNoQyxvQ0FBNEI7O0lBQzVCLHdDQUFpQzs7SUFDakMsMkNBQW9DOztJQUNwQyxzREFBK0M7O0lBRS9DLHFDQUE2Qjs7SUFDN0IsK0NBQXVDOztJQUN2QyxpREFBeUM7O0lBQ3pDLDhDQUF1Qzs7SUFDdkMsNkRBQXNEOztJQUN0RCw0REFBb0Q7O0lBR3BELGtEQUEyQzs7SUFDM0Msa0RBQTJDOztJQUMzQyx3REFBaUQ7O0lBR2pELGlEQUEwQzs7SUFDMUMsMkNBQW9DOztJQUNwQyw0Q0FBcUM7O0lBQ3JDLGlEQUEwQzs7SUFDMUMsaURBQTBDOztJQUUxQywwQ0FBbUM7O0lBQ25DLDBDQUFtQzs7SUFDbkMsMENBQW1DOztJQUNuQywwQ0FBbUM7O0lBRW5DLCtDQUF3Qzs7SUFDeEMsK0NBQXdDOztJQUN4QywrQ0FBd0M7O0lBQ3hDLCtDQUF3Qzs7SUFFeEMsNENBQXFDOztJQUNyQyw0Q0FBcUM7O0lBQ3JDLDRDQUFxQzs7SUFFckMsZ0RBQXlDOztJQUN6QyxnREFBeUM7Ozs7O0lBSTdCLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmV4cG9ydCBjbGFzcyBJbmZvQ29udGVudENsYXNzIHtcbiAgICAgICAgLy9zYXZlIGFuZCBzZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgICAgICBwcml2YXRlIF90cmFuc2xhdGVWYXJpYWJsZSA9IG51bGw7XG5cbiAgICAgICAgLy9wcm9ncmVzcyBoZWFkIHRhYmxlIGluZm9cbiAgICAgICAgcHVibGljIE1vbnRoVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIFF1YXJ0ZXJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgWWVhclRleHQ6c3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEZvcmVjYXN0VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIFJlY3J1aXRtZW50VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9ybWF0aW9uRGVzY3JpcHRpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIHB1YmxpYyBJbmZvVGl0bGU6c3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9Nb250aERldGFpbFRleHQ6c3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9RdWFydGVyRGV0YWlsVGV4dDpzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb1llYXJEZXRhaWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb0ZvcmVjYXN0UmVjcnVpdG1lbnREZXRhaWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb0FsbEFtb3VudENvdW50c0J5TWlsbGlvblRleHQ6c3RyaW5nID0gXCJcIjtcblxuICAgICAgICAvL3Byb2dyZXNzLXBlcnNvbmFsLXByb2dyZXNzYmFyLWxpc3QgaW5mb1xuICAgICAgICBwdWJsaWMgSW5mb0hvd1RvUmVhZFRoaXNUaXRsZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9Db252ZXJzaW9uUmF0ZVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvQ29udmVyc2lvblJhdGVEZXRhaWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIC8vcHJvZ3Jlc3MtdGVhbS1kaXJlY3QtdW5pdCBpbmZvXG4gICAgICAgIHB1YmxpYyBJbmZvQWN0aXZpdHlMYWJlbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvUmVkTWVhblRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvR3JleU1lYW5UZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb0lmQW5BY3Rpdml0eTFUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb0lmQW5BY3Rpdml0eTJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIHB1YmxpYyBJbmZvVG9GaW5kVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9UcnlUbzFUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb1RyeVRvMlRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvVHJ5VG8zVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICBwdWJsaWMgSW5mb01vcmVBY3RpdmUxVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9Nb3JlQWN0aXZlMlRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvTW9yZUFjdGl2ZTNUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb01vcmVBY3RpdmU0VGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICBwdWJsaWMgSW5mb1RyeUhhcmQxVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9UcnlIYXJkMlRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvVHJ5SGFyZDNUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIHB1YmxpYyBJbmZvSGlnaFF1YWxpdHkxVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9IaWdoUXVhbGl0eTJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIFxuICAgIFxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vcHJvZ3Jlc3MgaGVhZCB0YWJsZSBpbmZvXG4gICAgICAgICAgICB0aGlzLk1vbnRoVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnTW9udGgnKTtcbiAgICAgICAgICAgIHRoaXMuUXVhcnRlclRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1F1YXJ0ZXInKTtcbiAgICAgICAgICAgIHRoaXMuWWVhclRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1llYXInKTtcbiAgICAgICAgICAgIHRoaXMuRm9yZWNhc3RUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdGb3JlY2FzdCcpO1xuICAgICAgICAgICAgdGhpcy5SZWNydWl0bWVudFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1JlY3J1aXRtZW50Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuSW5mb3JtYXRpb25EZXNjcmlwdGlvblRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fSW5mb3JtYXRpb25fRGVzY3JpcHRpb24nKTtcblxuICAgICAgICAgICAgdGhpcy5JbmZvVGl0bGUgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fVGl0bGUnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb01vbnRoRGV0YWlsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19Nb250aF9EZXRhaWwnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb1F1YXJ0ZXJEZXRhaWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX1F1YXJ0ZXJfRGV0YWlsJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9ZZWFyRGV0YWlsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19ZZWFyX0RldGFpbCcpO1xuICAgICAgICAgICAgdGhpcy5JbmZvRm9yZWNhc3RSZWNydWl0bWVudERldGFpbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fRm9yZWNhc3RfUmVjcnVpdG1lbnRfRGV0YWlsJyk7XG5cbiAgICAgICAgICAgIC8vcHJvZ3Jlc3MtcGVyc29uYWwtcHJvZ3Jlc3NiYXItbGlzdCBpbmZvXG4gICAgICAgICAgICB0aGlzLkluZm9Ib3dUb1JlYWRUaGlzVGl0bGUgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fSG93X1RvX1JlYWRfVGhpcycpO1xuICAgICAgICAgICAgdGhpcy5JbmZvQ29udmVyc2lvblJhdGVUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0NvbnZlcnNpb25fUmF0ZScpO1xuICAgICAgICAgICAgdGhpcy5JbmZvQ29udmVyc2lvblJhdGVEZXRhaWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0NvbnZlcnNpb25fUmF0ZV9EZXRhaWwnKTtcblxuICAgICAgICAgICAgLy9wcm9ncmVzcy10ZWFtLWRpcmVjdC11bml0XG4gICAgICAgICAgICB0aGlzLkluZm9BY3Rpdml0eUxhYmVsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19BY3Rpdml0eV9MYWJlbCcpO1xuXG4gICAgICAgICAgICB0aGlzLkluZm9SZWRNZWFuVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19SZWRfTWVhbicpO1xuICAgICAgICAgICAgdGhpcy5JbmZvR3JleU1lYW5UZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0dyZXlfTWVhbicpO1xuICAgICAgICAgICAgdGhpcy5JbmZvSWZBbkFjdGl2aXR5MVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fSWZfQW5fQWN0aXZpdHlfMScpO1xuICAgICAgICAgICAgdGhpcy5JbmZvSWZBbkFjdGl2aXR5MlRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fSWZfQW5fQWN0aXZpdHlfMicpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5JbmZvVG9GaW5kVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19Ub19GaW5kJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9UcnlUbzFUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX1RyeV9Ub18xJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9UcnlUbzJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX1RyeV9Ub18yJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9UcnlUbzNUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX1RyeV9Ub18zJyk7XG4gICAgXG4gICAgICAgICAgICB0aGlzLkluZm9Nb3JlQWN0aXZlMVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fTW9yZV9BY3RpdmVfMScpO1xuICAgICAgICAgICAgdGhpcy5JbmZvTW9yZUFjdGl2ZTJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX01vcmVfQWN0aXZlXzInKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb01vcmVBY3RpdmUzVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19Nb3JlX0FjdGl2ZV8zJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9Nb3JlQWN0aXZlNFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fTW9yZV9BY3RpdmVfNCcpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5JbmZvVHJ5SGFyZDFUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX1RyeV9IYXJkXzEnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb1RyeUhhcmQyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19UcnlfSGFyZF8yJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9UcnlIYXJkM1RleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fVHJ5X0hhcmRfMycpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5JbmZvSGlnaFF1YWxpdHkxVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19IaWdoX1F1YWxpdHlfMScpO1xuICAgICAgICAgICAgdGhpcy5JbmZvSGlnaFF1YWxpdHkyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19IaWdoX1F1YWxpdHlfMicpO1xuXG4gICAgICAgICAgICB0aGlzLkluZm9BbGxBbW91bnRDb3VudHNCeU1pbGxpb25UZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKFwiSW5mb19BbGxfQW1vdW50X0NvdW50c19CeV9NaWxsaW9uXCIpO1xuXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy9zZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgICAgICBwcml2YXRlIF9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpIHtcbiAgICBcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0ZVZhcmlhYmxlID0ge1xuICAgICAgICAgICAgICAgIC8vIFwiZ3JhdHNQb2ludHNcIjogMjAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcHJpdmF0ZSBfdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZVdpdGhWYXJpYWJsZShtYXBwaW5nSUQsIHRoaXMuX3RyYW5zbGF0ZVZhcmlhYmxlKTtcbiAgICAgICAgfVxufSJdfQ==