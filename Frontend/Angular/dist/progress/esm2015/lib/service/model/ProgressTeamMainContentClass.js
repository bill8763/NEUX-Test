/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Language } from '@allianzSND/core';
export class ProgressTeamMainContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtTWFpbkNvbnRlbnRDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbW9kZWwvUHJvZ3Jlc3NUZWFtTWFpbkNvbnRlbnRDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RCxNQUFNOzs7O0lBaUJGLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBZnRELGtDQUFrQztRQUMxQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFFdEMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBS2hDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV2RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFHTyxxQkFBcUI7UUFFekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFCQUFxQjtTQUN4QixDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Q0FDSjs7Ozs7O0lBdkNHLDBEQUFrQzs7Ozs7SUFDbEMsaURBQTZDOztJQUU3QyxtREFBK0I7O0lBQy9CLG9EQUFnQzs7SUFDaEMsZ0RBQTZCOztJQUM3QixvREFBaUM7O0lBQ2pDLGtEQUErQjs7SUFDL0Isb0RBQWlDOztJQUNqQyxxREFBa0M7O0lBQ2xDLHVEQUFvQzs7Ozs7SUFJeEIsd0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ3VhZ2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzVGVhbU1haW5Db250ZW50Q2xhc3Mge1xuXG4gICAgLy9zYXZlIGFuZCBzZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVZhcmlhYmxlID0gbnVsbDtcbiAgICBwcml2YXRlIF9sYW5ndWFnZTogTGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoKTtcblxuICAgIHB1YmxpYyBBZ2VuY3lUaXRsZTpzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBBbGxab25lVGl0bGU6c3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgR29hbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEZvcmVjYXN0VGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgQWN0dWFsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgTWFucG93ZXJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBTaG9ydGZhbGxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBSZWNydWl0bWVudFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCk7XG5cbiAgICAgICAgdGhpcy5BZ2VuY3lUaXRsZSA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnQWdlbmN5X1RpdGxlJyk7XG4gICAgICAgIHRoaXMuQWxsWm9uZVRpdGxlID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdBbGxfWm9uZV9UaXRsZScpO1xuICAgICAgICB0aGlzLk1hbnBvd2VyVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSh0aGlzLl9sYW5ndWFnZS5wcm9ncmVzc01hbnBvd2VyKTtcbiAgICAgICAgdGhpcy5SZWNydWl0bWVudFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUodGhpcy5fbGFuZ3VhZ2UucHJvZ3Jlc3NSZWNydWl0bWVudCk7XG5cbiAgICAgICAgdGhpcy5Hb2FsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSh0aGlzLl9sYW5ndWFnZS5wcm9ncmVzc0dvYWwpO1xuICAgICAgICB0aGlzLkFjdHVhbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUodGhpcy5fbGFuZ3VhZ2UucHJvZ3Jlc3NBY3R1YWwpO1xuICAgICAgICB0aGlzLkZvcmVjYXN0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSh0aGlzLl9sYW5ndWFnZS5wcm9ncmVzc0ZvcmVjYXN0KTtcbiAgICAgICAgdGhpcy5TaG9ydGZhbGxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKHRoaXMuX2xhbmd1YWdlLnByb2dyZXNzU2hvcnRmYWxsKTtcbiAgICB9XG5cbiAgICAvL3NldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfc2V0VHJhbnNsYXRlVmFyaWFibGUoKSB7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUgPSB7XG4gICAgICAgICAgICAvLyBcImdyYXRzUG9pbnRzXCI6IDIwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRCwgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUpO1xuICAgIH1cbn0iXX0=