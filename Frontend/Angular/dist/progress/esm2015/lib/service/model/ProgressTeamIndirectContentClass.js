/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProgressTeamIndirectContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        this.IndirectUnitTitle = "";
        this.GoalText = "";
        this.ForecastText = "";
        this.ActualText = "";
        this.ShortfallText = "";
        this._setTranslateVariable();
        this.IndirectUnitTitle = this._translateWithVariable('Indirect_Unit_Title');
        this.GoalText = this._translateWithVariable('Goal');
        this.ForecastText = this._translateWithVariable('Forecast');
        this.ActualText = this._translateWithVariable('Actual');
        this.ShortfallText = this._translateWithVariable('Shortfall');
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
    ProgressTeamIndirectContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressTeamIndirectContentClass.prototype.IndirectUnitTitle;
    /** @type {?} */
    ProgressTeamIndirectContentClass.prototype.GoalText;
    /** @type {?} */
    ProgressTeamIndirectContentClass.prototype.ForecastText;
    /** @type {?} */
    ProgressTeamIndirectContentClass.prototype.ActualText;
    /** @type {?} */
    ProgressTeamIndirectContentClass.prototype.ShortfallText;
    /**
     * @type {?}
     * @private
     */
    ProgressTeamIndirectContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtSW5kaXJlY3RDb250ZW50Q2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzVGVhbUluZGlyZWN0Q29udGVudENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNOzs7O0lBWUYsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFWdEQsa0NBQWtDO1FBQzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUUzQixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBSTlCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFHTyxxQkFBcUI7UUFFekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFCQUFxQjtTQUN4QixDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Q0FDSjs7Ozs7O0lBOUJHLDhEQUFrQzs7SUFFbEMsNkRBQXNDOztJQUN0QyxvREFBNkI7O0lBQzdCLHdEQUFpQzs7SUFDakMsc0RBQStCOztJQUMvQix5REFBa0M7Ozs7O0lBR3RCLDREQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzVGVhbUluZGlyZWN0Q29udGVudENsYXNzIHtcbiAgICBcbiAgICAvL3NhdmUgYW5kIHNldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlVmFyaWFibGUgPSBudWxsO1xuXG4gICAgcHVibGljIEluZGlyZWN0VW5pdFRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBHb2FsVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgRm9yZWNhc3RUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBBY3R1YWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBTaG9ydGZhbGxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlVmFyaWFibGUoKTtcblxuICAgICAgICB0aGlzLkluZGlyZWN0VW5pdFRpdGxlID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdJbmRpcmVjdF9Vbml0X1RpdGxlJyk7XG4gICAgICAgIHRoaXMuR29hbFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0dvYWwnKTtcbiAgICAgICAgdGhpcy5Gb3JlY2FzdFRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0ZvcmVjYXN0Jyk7XG4gICAgICAgIHRoaXMuQWN0dWFsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnQWN0dWFsJyk7XG4gICAgICAgIHRoaXMuU2hvcnRmYWxsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnU2hvcnRmYWxsJyk7XG4gICAgfVxuXG4gICAgLy9zZXQgdHJhbnNsYXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCkge1xuXG4gICAgICAgIHRoaXMuX3RyYW5zbGF0ZVZhcmlhYmxlID0ge1xuICAgICAgICAgICAgLy8gXCJncmF0c1BvaW50c1wiOiAyMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZShtYXBwaW5nSUQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZVdpdGhWYXJpYWJsZShtYXBwaW5nSUQsIHRoaXMuX3RyYW5zbGF0ZVZhcmlhYmxlKTtcbiAgICB9XG59Il19