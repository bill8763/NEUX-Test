/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
var GetTeamProgressDetailAPI = /** @class */ (function () {
    function GetTeamProgressDetailAPI(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    GetTeamProgressDetailAPI.prototype.SetYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._year = value;
    };
    /**
     * @return {?}
     */
    GetTeamProgressDetailAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getTeamProgressDetail';
    };
    /**
     * @return {?}
     */
    GetTeamProgressDetailAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getTeamProgressDetailMock.json';
    };
    /**
     * @return {?}
     */
    GetTeamProgressDetailAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        console.debug("SQLite Start ");
        /** @type {?} */
        var defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Team_Progress_Detail");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.debug("SQLite getTeamProgressDetail resp: ", resp);
                console.debug("SQLite getTeamProgressDetail json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    };
    return GetTeamProgressDetailAPI;
}());
export { GetTeamProgressDetailAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetTeamProgressDetailAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetTeamProgressDetailAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0VGVhbVByb2dyZXNzRGV0YWlsQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL0dldFRlYW1Qcm9ncmVzc0RldGFpbEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFhLElBQUksRUFBRSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFJMUM7SUFLSSxrQ0FBWSxVQUFzQjtRQUgxQixVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFJdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0ksT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0ksT0FBTyw4Q0FBOEMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFFM0IsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1FBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7O1lBRTdDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxrQ0FBa0MsQ0FBQztRQUNuRixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLElBQUcsVUFBVSxJQUFJLFNBQVMsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsSUFBSTtnQkFDL0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsT0FBTyxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDUDthQUNJO1lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFTCwrQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7Ozs7Ozs7SUF6Q0cseUNBQTJCOzs7OztJQUUzQiwrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7SVNRTGl0ZUFQSX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb20sIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBJU2VhcmNoVGFibGVCeUZpZWxkIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEdldFRlYW1Qcm9ncmVzc0RldGFpbEFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJLCBJU2VhcmNoVGFibGVCeUZpZWxkIHtcblxuICAgIHByaXZhdGUgX3llYXI6IG51bWJlciA9IC0xO1xuXG4gICAgcHJpdmF0ZSBfZGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgICBjb25zdHJ1Y3RvcihkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2Rhb0ZhY3RvcnkgPSBkYW9GYWN0b3J5O1xuICAgIH1cblxuICAgIFNldFllYXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl95ZWFyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldFRlYW1Qcm9ncmVzc0RldGFpbCc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFRlYW1Qcm9ncmVzc0RldGFpbE1vY2suanNvbic7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIFN0YXJ0IFwiKTtcblxuICAgICAgICBsZXQgZGVmYXVsdERhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGRlZmF1bHREYW86IFwiLCBkZWZhdWx0RGFvKTtcblxuICAgICAgICBsZXQgdGFibGVPYmogPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX1RlYW1fUHJvZ3Jlc3NfRGV0YWlsXCIpOyBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSB0YWJsZU9iajogXCIsIHRhYmxlT2JqKTtcblxuICAgICAgICBpZihkZWZhdWx0RGFvICE9IHVuZGVmaW5lZCAmJiB0YWJsZU9iaiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKGRlZmF1bHREYW8ucXVlcnlCeVRhYmxlKHRhYmxlT2JqKS50b1Byb21pc2UoKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZ2V0VGVhbVByb2dyZXNzRGV0YWlsIHJlc3A6IFwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdldFRlYW1Qcm9ncmVzc0RldGFpbCBqc29uIHJlc3A6IFwiLCBKU09OLnN0cmluZ2lmeShyZXNwKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZihmYWxzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==