/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class InfoContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
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
    /**
     * @private
     * @return {?}
     */
    _setTranslateVariable() {
        this._translateVariable = {
        // "gratsPoints": 20,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mb0NvbnRlbnRDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvSW5mb0NvbnRlbnRDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTTs7OztJQWtERSxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWpEdEQsa0NBQWtDO1FBQzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUVsQywwQkFBMEI7UUFDbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLCtCQUEwQixHQUFXLEVBQUUsQ0FBQztRQUV4QyxjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLHdCQUFtQixHQUFVLEVBQUUsQ0FBQztRQUNoQywwQkFBcUIsR0FBVSxFQUFFLENBQUM7UUFDbEMsdUJBQWtCLEdBQVcsRUFBRSxDQUFDO1FBQ2hDLHNDQUFpQyxHQUFXLEVBQUUsQ0FBQztRQUMvQyxxQ0FBZ0MsR0FBVSxFQUFFLENBQUM7UUFFcEQseUNBQXlDO1FBQ2xDLDJCQUFzQixHQUFXLEVBQUUsQ0FBQztRQUNwQywyQkFBc0IsR0FBVyxFQUFFLENBQUM7UUFDcEMsaUNBQTRCLEdBQVcsRUFBRSxDQUFDO1FBRWpELGdDQUFnQztRQUN6QiwwQkFBcUIsR0FBVyxFQUFFLENBQUM7UUFDbkMsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLDBCQUFxQixHQUFXLEVBQUUsQ0FBQztRQUNuQywwQkFBcUIsR0FBVyxFQUFFLENBQUM7UUFFbkMsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FB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Z0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0YsQ0FBQztDQUNSOzs7Ozs7SUEvR08sOENBQWtDOztJQUdsQyxxQ0FBOEI7O0lBQzlCLHVDQUFnQzs7SUFDaEMsb0NBQTRCOztJQUM1Qix3Q0FBaUM7O0lBQ2pDLDJDQUFvQzs7SUFDcEMsc0RBQStDOztJQUUvQyxxQ0FBNkI7O0lBQzdCLCtDQUF1Qzs7SUFDdkMsaURBQXlDOztJQUN6Qyw4Q0FBdUM7O0lBQ3ZDLDZEQUFzRDs7SUFDdEQsNERBQW9EOztJQUdwRCxrREFBMkM7O0lBQzNDLGtEQUEyQzs7SUFDM0Msd0RBQWlEOztJQUdqRCxpREFBMEM7O0lBQzFDLDJDQUFvQzs7SUFDcEMsNENBQXFDOztJQUNyQyxpREFBMEM7O0lBQzFDLGlEQUEwQzs7SUFFMUMsMENBQW1DOztJQUNuQywwQ0FBbUM7O0lBQ25DLDBDQUFtQzs7SUFDbkMsMENBQW1DOztJQUVuQywrQ0FBd0M7O0lBQ3hDLCtDQUF3Qzs7SUFDeEMsK0NBQXdDOztJQUN4QywrQ0FBd0M7O0lBRXhDLDRDQUFxQzs7SUFDckMsNENBQXFDOztJQUNyQyw0Q0FBcUM7O0lBRXJDLGdEQUF5Qzs7SUFDekMsZ0RBQXlDOzs7OztJQUk3Qiw0Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5leHBvcnQgY2xhc3MgSW5mb0NvbnRlbnRDbGFzcyB7XG4gICAgICAgIC8vc2F2ZSBhbmQgc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICAgICAgcHJpdmF0ZSBfdHJhbnNsYXRlVmFyaWFibGUgPSBudWxsO1xuXG4gICAgICAgIC8vcHJvZ3Jlc3MgaGVhZCB0YWJsZSBpbmZvXG4gICAgICAgIHB1YmxpYyBNb250aFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBRdWFydGVyVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIFllYXJUZXh0OnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBGb3JlY2FzdFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBSZWNydWl0bWVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvcm1hdGlvbkRlc2NyaXB0aW9uVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICBwdWJsaWMgSW5mb1RpdGxlOnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvTW9udGhEZXRhaWxUZXh0OnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvUXVhcnRlckRldGFpbFRleHQ6c3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9ZZWFyRGV0YWlsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9Gb3JlY2FzdFJlY3J1aXRtZW50RGV0YWlsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9BbGxBbW91bnRDb3VudHNCeU1pbGxpb25UZXh0OnN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgLy9wcm9ncmVzcy1wZXJzb25hbC1wcm9ncmVzc2Jhci1saXN0IGluZm9cbiAgICAgICAgcHVibGljIEluZm9Ib3dUb1JlYWRUaGlzVGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvQ29udmVyc2lvblJhdGVUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb0NvbnZlcnNpb25SYXRlRGV0YWlsVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICAvL3Byb2dyZXNzLXRlYW0tZGlyZWN0LXVuaXQgaW5mb1xuICAgICAgICBwdWJsaWMgSW5mb0FjdGl2aXR5TGFiZWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb1JlZE1lYW5UZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb0dyZXlNZWFuVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9JZkFuQWN0aXZpdHkxVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9JZkFuQWN0aXZpdHkyVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICBwdWJsaWMgSW5mb1RvRmluZFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvVHJ5VG8xVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9UcnlUbzJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb1RyeVRvM1RleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgcHVibGljIEluZm9Nb3JlQWN0aXZlMVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvTW9yZUFjdGl2ZTJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb01vcmVBY3RpdmUzVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgcHVibGljIEluZm9Nb3JlQWN0aXZlNFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgcHVibGljIEluZm9UcnlIYXJkMVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvVHJ5SGFyZDJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwdWJsaWMgSW5mb1RyeUhhcmQzVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICBwdWJsaWMgSW5mb0hpZ2hRdWFsaXR5MVRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIHB1YmxpYyBJbmZvSGlnaFF1YWxpdHkyVGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICBcbiAgICBcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3Byb2dyZXNzIGhlYWQgdGFibGUgaW5mb1xuICAgICAgICAgICAgdGhpcy5Nb250aFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ01vbnRoJyk7XG4gICAgICAgICAgICB0aGlzLlF1YXJ0ZXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdRdWFydGVyJyk7XG4gICAgICAgICAgICB0aGlzLlllYXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdZZWFyJyk7XG4gICAgICAgICAgICB0aGlzLkZvcmVjYXN0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnRm9yZWNhc3QnKTtcbiAgICAgICAgICAgIHRoaXMuUmVjcnVpdG1lbnRUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdSZWNydWl0bWVudCcpO1xuXG4gICAgICAgICAgICB0aGlzLkluZm9ybWF0aW9uRGVzY3JpcHRpb25UZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0luZm9ybWF0aW9uX0Rlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgIHRoaXMuSW5mb1RpdGxlID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX1RpdGxlJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9Nb250aERldGFpbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fTW9udGhfRGV0YWlsJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9RdWFydGVyRGV0YWlsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19RdWFydGVyX0RldGFpbCcpO1xuICAgICAgICAgICAgdGhpcy5JbmZvWWVhckRldGFpbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fWWVhcl9EZXRhaWwnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb0ZvcmVjYXN0UmVjcnVpdG1lbnREZXRhaWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0ZvcmVjYXN0X1JlY3J1aXRtZW50X0RldGFpbCcpO1xuXG4gICAgICAgICAgICAvL3Byb2dyZXNzLXBlcnNvbmFsLXByb2dyZXNzYmFyLWxpc3QgaW5mb1xuICAgICAgICAgICAgdGhpcy5JbmZvSG93VG9SZWFkVGhpc1RpdGxlID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0hvd19Ub19SZWFkX1RoaXMnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb0NvbnZlcnNpb25SYXRlVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19Db252ZXJzaW9uX1JhdGUnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb0NvbnZlcnNpb25SYXRlRGV0YWlsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19Db252ZXJzaW9uX1JhdGVfRGV0YWlsJyk7XG5cbiAgICAgICAgICAgIC8vcHJvZ3Jlc3MtdGVhbS1kaXJlY3QtdW5pdFxuICAgICAgICAgICAgdGhpcy5JbmZvQWN0aXZpdHlMYWJlbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fQWN0aXZpdHlfTGFiZWwnKTtcblxuICAgICAgICAgICAgdGhpcy5JbmZvUmVkTWVhblRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fUmVkX01lYW4nKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb0dyZXlNZWFuVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19HcmV5X01lYW4nKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb0lmQW5BY3Rpdml0eTFUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0lmX0FuX0FjdGl2aXR5XzEnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb0lmQW5BY3Rpdml0eTJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX0lmX0FuX0FjdGl2aXR5XzInKTtcbiAgICBcbiAgICAgICAgICAgIHRoaXMuSW5mb1RvRmluZFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fVG9fRmluZCcpO1xuICAgICAgICAgICAgdGhpcy5JbmZvVHJ5VG8xVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19UcnlfVG9fMScpO1xuICAgICAgICAgICAgdGhpcy5JbmZvVHJ5VG8yVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19UcnlfVG9fMicpO1xuICAgICAgICAgICAgdGhpcy5JbmZvVHJ5VG8zVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19UcnlfVG9fMycpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5JbmZvTW9yZUFjdGl2ZTFUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX01vcmVfQWN0aXZlXzEnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb01vcmVBY3RpdmUyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19Nb3JlX0FjdGl2ZV8yJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9Nb3JlQWN0aXZlM1RleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fTW9yZV9BY3RpdmVfMycpO1xuICAgICAgICAgICAgdGhpcy5JbmZvTW9yZUFjdGl2ZTRUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX01vcmVfQWN0aXZlXzQnKTtcbiAgICBcbiAgICAgICAgICAgIHRoaXMuSW5mb1RyeUhhcmQxVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnSW5mb19UcnlfSGFyZF8xJyk7XG4gICAgICAgICAgICB0aGlzLkluZm9UcnlIYXJkMlRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fVHJ5X0hhcmRfMicpO1xuICAgICAgICAgICAgdGhpcy5JbmZvVHJ5SGFyZDNUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmZvX1RyeV9IYXJkXzMnKTtcbiAgICBcbiAgICAgICAgICAgIHRoaXMuSW5mb0hpZ2hRdWFsaXR5MVRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fSGlnaF9RdWFsaXR5XzEnKTtcbiAgICAgICAgICAgIHRoaXMuSW5mb0hpZ2hRdWFsaXR5MlRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZm9fSGlnaF9RdWFsaXR5XzInKTtcblxuICAgICAgICAgICAgdGhpcy5JbmZvQWxsQW1vdW50Q291bnRzQnlNaWxsaW9uVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZShcIkluZm9fQWxsX0Ftb3VudF9Db3VudHNfQnlfTWlsbGlvblwiKTtcblxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICAgICAgcHJpdmF0ZSBfc2V0VHJhbnNsYXRlVmFyaWFibGUoKSB7XG4gICAgXG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSA9IHtcbiAgICAgICAgICAgICAgICAvLyBcImdyYXRzUG9pbnRzXCI6IDIwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHByaXZhdGUgX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZShtYXBwaW5nSUQ6IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lELCB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSk7XG4gICAgICAgIH1cbn0iXX0=