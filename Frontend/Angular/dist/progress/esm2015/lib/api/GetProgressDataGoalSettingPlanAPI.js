/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from } from 'rxjs';
export class GetProgressDataGoalSettingPlanAPI {
    /**
     * @return {?}
     */
    get SearchYear() {
        return this._searchYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set SearchYear(value) {
        this._searchYear = value;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set ClientId(id) {
        this._clientID = id;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataType(type) {
        this._personalDataType = type;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._personalDataTimeBase = time;
    }
    /**
     * @param {?} daoFactory
     */
    constructor(daoFactory) {
        this._daoFactory = daoFactory;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getProgressDataGoalSettingPlan';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        //alert("personal progress mock data");
        return './assets/mock/getProgressDataGoalSettingPlanMock.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        console.debug("SQLite goal plan start ");
        /** @type {?} */
        let defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite goal plan defaultDao: ", defaultDao);
        /** @type {?} */
        let progressGoalPlanObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Goal_Setting_Plan_Value");
        console.debug("SQLite goal plan progressGoalPlanObj: ", progressGoalPlanObj);
        if (defaultDao != undefined && progressGoalPlanObj != undefined) {
            return from(defaultDao.queryByTable(progressGoalPlanObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                console.debug("SQLite goal plan data api resp: ", resp);
            })));
        }
        else {
            console.debug("SQLite goal plan fail... ");
        }
        //throw new Error("Method not implemented.");
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetProgressDataGoalSettingPlanAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataGoalSettingPlanAPI.prototype._daoFactory;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataGoalSettingPlanAPI.prototype._personalDataType;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataGoalSettingPlanAPI.prototype._personalDataTimeBase;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataGoalSettingPlanAPI.prototype._searchYear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0UHJvZ3Jlc3NEYXRhR29hbFNldHRpbmdQbGFuQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL0dldFByb2dyZXNzRGF0YUdvYWxTZXR0aW5nUGxhbkFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFhLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQVF0QyxNQUFNOzs7O0lBUUYsSUFBVyxVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQVcsVUFBVSxDQUFDLEtBQVk7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxFQUFTO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsSUFBcUI7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLElBQXlCO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7OztJQUdELFlBQVksVUFBcUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLGdDQUFnQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsdUNBQXVDO1FBQ3ZDLE9BQU8sdURBQXVELENBQUM7SUFDbkUsQ0FBQzs7OztJQUdELFVBQVU7UUFFTixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7O1lBQ3JDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtRQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLFVBQVUsQ0FBQyxDQUFDOztZQUV2RCxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxxQ0FBcUMsQ0FBQztRQUNqRyxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFHN0UsSUFBRyxVQUFVLElBQUksU0FBUyxJQUFJLG1CQUFtQixJQUFJLFNBQVMsRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFFLElBQUksQ0FBQyxFQUFFO2dCQUM5RSxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVELENBQUMsRUFBQyxDQUFDLENBQUM7U0FDUDthQUNJO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO1FBR0QsNkNBQTZDO0lBQ2pELENBQUM7Q0FpSUo7Ozs7OztJQS9MRyxzREFBMEI7Ozs7O0lBQzFCLHdEQUFnQzs7Ozs7SUFDaEMsOERBQTRDOzs7OztJQUM1QyxrRUFBb0Q7Ozs7O0lBQ3BELHdEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHtJU1FMaXRlQVBJfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgZnJvbX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Rhb0ZhY3Rvcnl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDbGllbnRDdXN0b21EYW99IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtFcXVhbFJlc3RyaWN0aW9ufSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuaW1wb3J0IHsgUGVyc29uYWxEYXRhVHlwZSB9IGZyb20gICcuLi9zZXJ2aWNlL21vZGVsL0VudW0vUGVyc29uYWxEYXRhVHlwZSc7XG5pbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gICcuLi9zZXJ2aWNlL21vZGVsL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2UnO1xuXG5leHBvcnQgY2xhc3MgR2V0UHJvZ3Jlc3NEYXRhR29hbFNldHRpbmdQbGFuQVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gICAgcHJpdmF0ZSBfY2xpZW50SUQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICAgIHByaXZhdGUgX3BlcnNvbmFsRGF0YVR5cGU6IFBlcnNvbmFsRGF0YVR5cGU7XG4gICAgcHJpdmF0ZSBfcGVyc29uYWxEYXRhVGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlO1xuICAgIHByaXZhdGUgX3NlYXJjaFllYXI6IG51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgU2VhcmNoWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaFllYXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBTZWFyY2hZZWFyKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9zZWFyY2hZZWFyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IENsaWVudElkKGlkOm51bWJlcikge1xuICAgICAgICB0aGlzLl9jbGllbnRJRCA9IGlkO1xuICAgIH1cblxuICAgIHNldCBEYXRhVHlwZSh0eXBlOlBlcnNvbmFsRGF0YVR5cGUpIHtcbiAgICAgICAgdGhpcy5fcGVyc29uYWxEYXRhVHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgc2V0IFRpbWVCYXNlKHRpbWU6UGVyc29uYWxEYXRhVGltZUJhc2UpIHtcbiAgICAgICAgdGhpcy5fcGVyc29uYWxEYXRhVGltZUJhc2UgPSB0aW1lO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnN0cnVjdG9yKGRhb0ZhY3Rvcnk6RGFvRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl9kYW9GYWN0b3J5ID0gZGFvRmFjdG9yeTtcbiAgICB9XG5cbiAgICBnZXRBUElOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnZ2V0UHJvZ3Jlc3NEYXRhR29hbFNldHRpbmdQbGFuJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICAvL2FsZXJ0KFwicGVyc29uYWwgcHJvZ3Jlc3MgbW9jayBkYXRhXCIpO1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0UHJvZ3Jlc3NEYXRhR29hbFNldHRpbmdQbGFuTW9jay5qc29uJztcbiAgICB9XG5cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdvYWwgcGxhbiBzdGFydCBcIik7XG4gICAgICAgIGxldCBkZWZhdWx0RGFvID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZ29hbCBwbGFuIGRlZmF1bHREYW86IFwiLCBkZWZhdWx0RGFvKTtcblxuICAgICAgICBsZXQgcHJvZ3Jlc3NHb2FsUGxhbk9iaiA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfR29hbF9TZXR0aW5nX1BsYW5fVmFsdWVcIik7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZ29hbCBwbGFuIHByb2dyZXNzR29hbFBsYW5PYmo6IFwiLCBwcm9ncmVzc0dvYWxQbGFuT2JqKTtcblxuXG4gICAgICAgIGlmKGRlZmF1bHREYW8gIT0gdW5kZWZpbmVkICYmIHByb2dyZXNzR29hbFBsYW5PYmogIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkZWZhdWx0RGFvLnF1ZXJ5QnlUYWJsZShwcm9ncmVzc0dvYWxQbGFuT2JqKS50b1Byb21pc2UoKS50aGVuKCByZXNwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdvYWwgcGxhbiBkYXRhIGFwaSByZXNwOiBcIiwgcmVzcCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdvYWwgcGxhbiBmYWlsLi4uIFwiKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbWVyIERldGFpbDpleGVjdXRlIFNRTCcpO1xuICAgICAgICBsZXQgZGVmYXVsdE9iaiA9IHtcbiAgICAgICAgICAgIFwiQ2xpZW50SURcIjogXCJcIixcbiAgICAgICAgICAgIFwiTGFzdE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiRmlyc3ROYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk9jY3VwYXRpb25cIjogXCJcIixcbiAgICAgICAgICAgIFwiQ29tcGFueVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheVllYXJcIjogXCJcIixcbiAgICAgICAgICAgIFwiQmlydGhkYXlNb250aFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheURhdGVcIjogXCJcIixcbiAgICAgICAgICAgIFwiQmlydGhkYXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiQWdlUmFuZ2VcIjogbnVsbCxcbiAgICAgICAgICAgIFwiR2VuZGVyXCI6IG51bGwsXG4gICAgICAgICAgICBcIkluY29tZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJTb3VyY2VcIjogbnVsbCxcbiAgICAgICAgICAgIFwiTWFycmlhZ2VcIjogbnVsbCxcbiAgICAgICAgICAgIFwiQ2hpbGRyZW5cIjogbnVsbCxcbiAgICAgICAgICAgIFwiRmFtaWxpYXJpdHlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiUmVjZW50U3RhdHVzXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk1BTlBBXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkNvbnRhY3RGcmVxdWFuY3lcIjogXCJcIixcbiAgICAgICAgICAgIFwiUG9zc2liaWxpdHlcIjogXCJcIixcbiAgICAgICAgICAgIFwiSXNGb2xsb3dcIjogXCJOXCIsXG4gICAgICAgICAgICBcIkRhdGFTb3VyY2VcIjogXCJBUFBcIixcbiAgICAgICAgICAgIFwidGVsXCI6IFtdLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBbXSxcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBbXVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faWQgfHwgKHRoaXMuX2lkLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICAgICAgLy9BZGRcbiAgICAgICAgICAgIGxldCByZXNwID0gbmV3IFNRTGl0ZVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBcImlzU3VjY2Vzc1wiOiB0cnVlXG4gICAgICAgICAgICB9LCBbZGVmYXVsdE9ial0pO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX0N1c3RvbWVyXCIpO1xuICAgICAgICAgICAgbGV0IGRlZmF1bHREYW8gPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgICAgaWYgKGN1c3RvbWVyT2JqICE9IHVuZGVmaW5lZCAmJiBkZWZhdWx0RGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRlZmF1bHREYW8pO1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKFwiQ2xpZW50SURcIiwgW3RoaXMuX2lkXSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJPYmopLnRvUHJvbWlzZSgpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lciA9IHJlc3A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRJRCA9IGN1c3RvbWVyWydCb2R5J11bMF0uQ2xpZW50SUQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lclRlbE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9UZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lclRlbE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJUZWxPYmogPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyVGVsT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyVGVsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW2NsaWVudElEXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJUZWxPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWyd0ZWwnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tZXIsIGNsaWVudElEIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKCh7IGN1c3RvbWVyLCBjbGllbnRJRCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckVtYWlsT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0VtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJFbWFpbE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFbWFpbE9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJFbWFpbE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW2NsaWVudElEXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lckVtYWlsT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbExpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnZW1haWwnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tZXIsIGNsaWVudElEIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcblxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHsgY3VzdG9tZXIsIGNsaWVudElEIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyQWRkck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9BZGRyZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJBZGRyT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckFkZHJPYmogPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyQWRkck9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckFkZHJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyQWRkck9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ2FkZHJlc3MnXSA9IHRlbExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oY3VzdG9tZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NoYW5nZSBiaXJ0aERheSB0byBEYXRlIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheSddID0gbmV3IERhdGUoY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXlZZWFyJ10sIHBhcnNlSW50KGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5TW9udGgnXSkgLSAxLCBjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheURhdGUnXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lcjtcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cblxuICAgIC8qXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgbGV0IGNhbGVuZGFyT2JqID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DYWxlbmRhclwiKTtcbiAgICAgICAgICBsZXQgZGFvID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgaWYgKGNhbGVuZGFyT2JqICE9IHVuZGVmaW5lZCAmJiBkYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcbiAgICAgICAgICAgIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDbGllbnRJRCcsW3RoaXMuX2NsaWVudElEXSkpO1xuICAgICAgICAgICAgZGFvLnF1ZXJ5QnlUYWJsZShjYWxlbmRhck9iaikuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuXG5cblxuXG4gICAgICAqL1xuXG59Il19