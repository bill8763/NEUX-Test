/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressTeamIndirectContentClass = /** @class */ (function () {
    function ProgressTeamIndirectContentClass(translateService) {
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
    //set translate variables
    /**
     * @private
     * @return {?}
     */
    ProgressTeamIndirectContentClass.prototype._setTranslateVariable = 
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
    ProgressTeamIndirectContentClass.prototype._translateWithVariable = /**
     * @private
     * @param {?} mappingID
     * @return {?}
     */
    function (mappingID) {
        return this.translateService.translateWithVariable(mappingID, this._translateVariable);
    };
    return ProgressTeamIndirectContentClass;
}());
export { ProgressTeamIndirectContentClass };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZWFtSW5kaXJlY3RDb250ZW50Q2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzVGVhbUluZGlyZWN0Q29udGVudENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQVlJLDBDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVZ0RCxrQ0FBa0M7UUFDMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRTNCLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFJOUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx5QkFBeUI7Ozs7OztJQUNqQixnRUFBcUI7Ozs7OztJQUE3QjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsR0FBRztRQUN0QixxQkFBcUI7U0FDeEIsQ0FBQTtJQUNMLENBQUM7Ozs7OztJQUVPLGlFQUFzQjs7Ozs7SUFBOUIsVUFBK0IsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDTCx1Q0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7Ozs7SUE5QkcsOERBQWtDOztJQUVsQyw2REFBc0M7O0lBQ3RDLG9EQUE2Qjs7SUFDN0Isd0RBQWlDOztJQUNqQyxzREFBK0I7O0lBQy9CLHlEQUFrQzs7Ozs7SUFHdEIsNERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NUZWFtSW5kaXJlY3RDb250ZW50Q2xhc3Mge1xuICAgIFxuICAgIC8vc2F2ZSBhbmQgc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF90cmFuc2xhdGVWYXJpYWJsZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgSW5kaXJlY3RVbml0VGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEdvYWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBGb3JlY2FzdFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIEFjdHVhbFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIFNob3J0ZmFsbFRleHQ6IHN0cmluZyA9IFwiXCI7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpO1xuXG4gICAgICAgIHRoaXMuSW5kaXJlY3RVbml0VGl0bGUgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0luZGlyZWN0X1VuaXRfVGl0bGUnKTtcbiAgICAgICAgdGhpcy5Hb2FsVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnR29hbCcpO1xuICAgICAgICB0aGlzLkZvcmVjYXN0VGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnRm9yZWNhc3QnKTtcbiAgICAgICAgdGhpcy5BY3R1YWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdBY3R1YWwnKTtcbiAgICAgICAgdGhpcy5TaG9ydGZhbGxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdTaG9ydGZhbGwnKTtcbiAgICB9XG5cbiAgICAvL3NldCB0cmFuc2xhdGUgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBfc2V0VHJhbnNsYXRlVmFyaWFibGUoKSB7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUgPSB7XG4gICAgICAgICAgICAvLyBcImdyYXRzUG9pbnRzXCI6IDIwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKG1hcHBpbmdJRCwgdGhpcy5fdHJhbnNsYXRlVmFyaWFibGUpO1xuICAgIH1cbn0iXX0=