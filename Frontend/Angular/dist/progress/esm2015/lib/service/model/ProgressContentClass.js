/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ProgressContentClass {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
        //save and set translate variables
        this._translateVariable = null;
        //personal team
        this.PersonalText = "";
        this.TeamText = "";
        this.MonthText = "";
        this.QuarterText = "";
        this.YearText = "";
        this.BackToProgressBtnText = "";
        this._setTranslateVariable();
        this.PersonalText = this._translateWithVariable('Personal');
        this.TeamText = this._translateWithVariable('Team');
        this.MonthText = this._translateWithVariable('Month');
        this.QuarterText = this._translateWithVariable('Quarter');
        this.YearText = this._translateWithVariable('Year');
        this.BackToProgressBtnText = this._translateWithVariable('Back_To_Progress');
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
    ProgressContentClass.prototype._translateVariable;
    /** @type {?} */
    ProgressContentClass.prototype.PersonalText;
    /** @type {?} */
    ProgressContentClass.prototype.TeamText;
    /** @type {?} */
    ProgressContentClass.prototype.MonthText;
    /** @type {?} */
    ProgressContentClass.prototype.QuarterText;
    /** @type {?} */
    ProgressContentClass.prototype.YearText;
    /** @type {?} */
    ProgressContentClass.prototype.BackToProgressBtnText;
    /**
     * @type {?}
     * @private
     */
    ProgressContentClass.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NDb250ZW50Q2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21vZGVsL1Byb2dyZXNzQ29udGVudENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNOzs7O0lBY0YsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFadEQsa0NBQWtDO1FBQzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUVsQyxlQUFlO1FBQ1IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFFckIsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBR3RDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUFHTyxxQkFBcUI7UUFFekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1FBQ3RCLHFCQUFxQjtTQUN4QixDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsU0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Q0FDSjs7Ozs7O0lBakNHLGtEQUFrQzs7SUFHbEMsNENBQWlDOztJQUNqQyx3Q0FBNkI7O0lBQzdCLHlDQUE4Qjs7SUFDOUIsMkNBQWdDOztJQUNoQyx3Q0FBNEI7O0lBRTVCLHFEQUEwQzs7Ozs7SUFFOUIsZ0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ29udGVudENsYXNzIHtcblxuICAgIC8vc2F2ZSBhbmQgc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF90cmFuc2xhdGVWYXJpYWJsZSA9IG51bGw7XG5cbiAgICAvL3BlcnNvbmFsIHRlYW1cbiAgICBwdWJsaWMgUGVyc29uYWxUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBUZWFtVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgTW9udGhUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBRdWFydGVyVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgWWVhclRleHQ6c3RyaW5nID0gXCJcIjtcbiAgICBcbiAgICBwdWJsaWMgQmFja1RvUHJvZ3Jlc3NCdG5UZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVZhcmlhYmxlKCk7XG4gICAgICAgIHRoaXMuUGVyc29uYWxUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdQZXJzb25hbCcpO1xuICAgICAgICB0aGlzLlRlYW1UZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdUZWFtJyk7XG4gICAgICAgIHRoaXMuTW9udGhUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdNb250aCcpO1xuICAgICAgICB0aGlzLlF1YXJ0ZXJUZXh0ID0gdGhpcy5fdHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdRdWFydGVyJyk7XG4gICAgICAgIHRoaXMuWWVhclRleHQgPSB0aGlzLl90cmFuc2xhdGVXaXRoVmFyaWFibGUoJ1llYXInKTtcblxuICAgICAgICB0aGlzLkJhY2tUb1Byb2dyZXNzQnRuVGV4dCA9IHRoaXMuX3RyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnQmFja19Ub19Qcm9ncmVzcycpO1xuICAgIH1cblxuICAgIC8vc2V0IHRyYW5zbGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF9zZXRUcmFuc2xhdGVWYXJpYWJsZSgpIHtcblxuICAgICAgICB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSA9IHtcbiAgICAgICAgICAgIC8vIFwiZ3JhdHNQb2ludHNcIjogMjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lEOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUobWFwcGluZ0lELCB0aGlzLl90cmFuc2xhdGVWYXJpYWJsZSk7XG4gICAgfVxufSJdfQ==