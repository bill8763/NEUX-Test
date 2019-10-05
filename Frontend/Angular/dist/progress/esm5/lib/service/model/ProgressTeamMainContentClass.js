/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Language } from '@allianzSND/core';
var ProgressTeamMainContentClass = /** @class */ (function () {
    function ProgressTeamMainContentClass(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this._language = new Language();
        this.AgencyTitle = "";
        this.AllZoneTitle = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ManpowerText = "";
        this.ShortfallText = "";
        this.RecruitmentText = "";
        this._setTranslateVariable();
        this.AgencyTitle = this._translateWithVariable('Agency_Title');
        this.AllZoneTitle = this._translateWithVariable('All_Zone_Title');
        this.ManpowerText = this._translateWithVariable(this._language.progressManpower);
        this.RecruitmentText = this._translateWithVariable(this._language.progressRecruitment);
        this.GoalText = this._translateWithVariable(this._language.progressGoal);
        this.ActualText = this._translateWithVariable(this._language.progressActual);
        this.ForecastText = this._translateWithVariable(this._language.progressForecast);
        this.ShortfallText = this._translateWithVariable(this._language.progressShortfall);
    }
    //set translate variables
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    ProgressTeamMainContentClass.prototype._setTranslateVariable = 
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
    ProgressTeamMainContentClass.prototype._translateWithVariable = /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    function (mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    };
    return ProgressTeamMainContentClass;
}());
export { ProgressTeamMainContentClass };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressTeamMainContentClass.prototype._translateVariable;
    /**
     * @type {?}
     * @private
     */
    ProgressTeamMainContentClass.prototype._language;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.AgencyTitle;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.AllZoneTitle;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.GoalText;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.ForecastText;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.ActualText;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.ManpowerText;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.ShortfallText;
    /** @type {?} */
    ProgressTeamMainContentClass.prototype.RecruitmentText;
    /**
     * @type {?}
     * @private
     */
    ProgressTeamMainContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtTWFpbkNvbnRlbnRDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NUZWFtTWFpbkNvbnRlbnRDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RDtJQWlCSSxzQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFmdEQsa0NBQWtDO1FBQzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUV0QyxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFLaEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXZGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCx5QkFBeUI7Ozs7OztJQUNqQiw0REFBcUI7Ozs7OztJQUE3QjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsR0FBRztRQUN0QixxQkFBcUI7U0FDeEIsQ0FBQTtJQUNMLENBQUM7Ozs7OztJQUVPLDZEQUFzQjs7Ozs7SUFBOUIsVUFBK0IsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7Ozs7Ozs7SUF2Q0csMERBQWtDOzs7OztJQUNsQyxpREFBNkM7O0lBRTdDLG1EQUErQjs7SUFDL0Isb0RBQWdDOztJQUNoQyxnREFBNkI7O0lBQzdCLG9EQUFpQzs7SUFDakMsa0RBQStCOztJQUMvQixvREFBaUM7O0lBQ2pDLHFEQUFrQzs7SUFDbEMsdURBQW9DOzs7OztJQUl4Qix3REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5ndWFnZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NUZWFtTWFpbkNvbnRlbnRDbGFzcyB7XG5cbiAgICAvL3NhdmUgYW5kIHNldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlVmFyaWFibGUgPSBudWxsO1xuICAgIHByaXZhdGUgX2xhbmd1YWdlOiBMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZSgpO1xuXG4gICAgcHVibGljIEFnZW5jeVRpdGxlOnN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEFsbFpvbmVUaXRsZTpzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBHb2FsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgRm9yZWNhc3RUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBBY3R1YWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBNYW5wb3dlclRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFNob3J0ZmFsbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFJlY3J1aXRtZW50VGV4dDogc3RyaW5nID0gXCJcIjtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlVmFyaWFibGUoKTtcblxuICAgICAgICB0aGlzLkFnZW5jeVRpdGxlID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdBZ2VuY3lfVGl0bGUnKTtcbiAgICAgICAgdGhpcy5BbGxab25lVGl0bGUgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0FsbF9ab25lX1RpdGxlJyk7XG4gICAgICAgIHRoaXMuTWFucG93ZXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKHRoaXMuX2xhbmd1YWdlLnByb2dyZXNzTWFucG93ZXIpO1xuICAgICAgICB0aGlzLlJlY3J1aXRtZW50VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSh0aGlzLl9sYW5ndWFnZS5wcm9ncmVzc1JlY3J1aXRtZW50KTtcblxuICAgICAgICB0aGlzLkdvYWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKHRoaXMuX2xhbmd1YWdlLnByb2dyZXNzR29hbCk7XG4gICAgICAgIHRoaXMuQWN0dWFsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSh0aGlzLl9sYW5ndWFnZS5wcm9ncmVzc0FjdHVhbCk7XG4gICAgICAgIHRoaXMuRm9yZWNhc3RUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKHRoaXMuX2xhbmd1YWdlLnByb2dyZXNzRm9yZWNhc3QpO1xuICAgICAgICB0aGlzLlNob3J0ZmFsbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUodGhpcy5fbGFuZ3VhZ2UucHJvZ3Jlc3NTaG9ydGZhbGwpO1xuICAgIH1cblxuICAgIC8vc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpIHtcblxuICAgICAgICB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSA9IHtcbiAgICAgICAgICAgIC8vIFwiZ3JhdHNQb2ludHNcIjogMjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lEOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lELCB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSk7XG4gICAgfVxufSJdfQ==