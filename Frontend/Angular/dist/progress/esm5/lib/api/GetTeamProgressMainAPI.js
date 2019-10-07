/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
var GetTeamProgressMainAPI = /** @class */ (function () {
    function GetTeamProgressMainAPI(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    GetTeamProgressMainAPI.prototype.SetYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._year = value;
    };
    /**
     * @return {?}
     */
    GetTeamProgressMainAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getTeamProgressMain';
    };
    /**
     * @return {?}
     */
    GetTeamProgressMainAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getTeamProgressMainMock.json';
    };
    /**
     * @return {?}
     */
    GetTeamProgressMainAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        console.debug("SQLite Start ");
        /** @type {?} */
        var defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Team_Progress_Main");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.debug("SQLite getTeamProgressMain resp: ", resp);
                console.debug("SQLite getTeamProgressMain json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    };
    return GetTeamProgressMainAPI;
}());
export { GetTeamProgressMainAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetTeamProgressMainAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetTeamProgressMainAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0VGVhbVByb2dyZXNzTWFpbkFQSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2FwaS9HZXRUZWFtUHJvZ3Jlc3NNYWluQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQWEsSUFBSSxFQUFFLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQU0xQztJQUtJLGdDQUFZLFVBQXNCO1FBSDFCLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQztRQUl2QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDSSxPQUFPLDRDQUE0QyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztZQUUzQixVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7UUFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQzs7WUFFN0MsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDO1FBQ2pGLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFN0MsSUFBRyxVQUFVLElBQUksU0FBUyxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFDakQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUMvRCxPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUUsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNQO2FBQ0k7WUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUdMLDZCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQzs7Ozs7OztJQTFDRyx1Q0FBMkI7Ozs7O0lBRTNCLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHtJU1FMaXRlQVBJfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgZnJvbSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtEYW9GYWN0b3J5fSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7Q2xpZW50Q3VzdG9tRGFvfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7RXF1YWxSZXN0cmljdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBJU2VhcmNoVGFibGVCeUZpZWxkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEdldFRlYW1Qcm9ncmVzc01haW5BUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSwgSVNlYXJjaFRhYmxlQnlGaWVsZCB7XG5cbiAgICBwcml2YXRlIF95ZWFyOiBudW1iZXIgPSAtMTtcblxuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgY29uc3RydWN0b3IoZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl9kYW9GYWN0b3J5ID0gZGFvRmFjdG9yeTtcbiAgICB9XG5cbiAgICBTZXRZZWFyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5feWVhciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXRUZWFtUHJvZ3Jlc3NNYWluJztcbiAgICB9XG5cbiAgICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy4vYXNzZXRzL21vY2svZ2V0VGVhbVByb2dyZXNzTWFpbk1vY2suanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIFN0YXJ0IFwiKTtcblxuICAgICAgICBsZXQgZGVmYXVsdERhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGRlZmF1bHREYW86IFwiLCBkZWZhdWx0RGFvKTtcblxuICAgICAgICBsZXQgdGFibGVPYmogPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX1RlYW1fUHJvZ3Jlc3NfTWFpblwiKTsgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgdGFibGVPYmo6IFwiLCB0YWJsZU9iaik7XG5cbiAgICAgICAgaWYoZGVmYXVsdERhbyAhPSB1bmRlZmluZWQgJiYgdGFibGVPYmogIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkZWZhdWx0RGFvLnF1ZXJ5QnlUYWJsZSh0YWJsZU9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdldFRlYW1Qcm9ncmVzc01haW4gcmVzcDogXCIsIHJlc3ApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZ2V0VGVhbVByb2dyZXNzTWFpbiBqc29uIHJlc3A6IFwiLCBKU09OLnN0cmluZ2lmeShyZXNwKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZihmYWxzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59Il19