/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
var GetYearConfigurationAPI = /** @class */ (function () {
    function GetYearConfigurationAPI(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    GetYearConfigurationAPI.prototype.SetYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._year = value;
    };
    /**
     * @return {?}
     */
    GetYearConfigurationAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getYearConfiguration';
    };
    /**
     * @return {?}
     */
    GetYearConfigurationAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getYearConfigurationMock.json';
    };
    /**
     * @return {?}
     */
    GetYearConfigurationAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        console.debug("SQLite Start year configuration ");
        /** @type {?} */
        var defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Year_Config");
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.debug("SQLite getYearConfiguration resp: ", resp);
                console.debug("SQLite getYearConfiguration json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    };
    return GetYearConfigurationAPI;
}());
export { GetYearConfigurationAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetYearConfigurationAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetYearConfigurationAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0WWVhckNvbmZpZ3VyYXRpb25BUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvR2V0WWVhckNvbmZpZ3VyYXRpb25BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBYSxJQUFJLEVBQUUsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBTTFDO0lBS0ksaUNBQVksVUFBc0I7UUFIMUIsVUFBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBSXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQseUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNJLE9BQU8sc0JBQXNCLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNJLE9BQU8sNkNBQTZDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQzs7WUFFOUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1FBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7O1lBRTdDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQztRQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLElBQUcsVUFBVSxJQUFJLFNBQVMsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsSUFBSTtnQkFDL0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDUDthQUNJO1lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFTCw4QkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7Ozs7Ozs7SUF6Q0csd0NBQTJCOzs7OztJQUUzQiw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7SVNRTGl0ZUFQSX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb20sIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RGFvRmFjdG9yeX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0NsaWVudEN1c3RvbURhb30gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge0VxdWFsUmVzdHJpY3Rpb259IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgSVNlYXJjaFRhYmxlQnlGaWVsZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBHZXRZZWFyQ29uZmlndXJhdGlvbkFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJLCBJU2VhcmNoVGFibGVCeUZpZWxkIHtcbiAgICAgIFxuICAgIHByaXZhdGUgX3llYXI6IG51bWJlciA9IC0xO1xuXG4gICAgcHJpdmF0ZSBfZGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgICBjb25zdHJ1Y3RvcihkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2Rhb0ZhY3RvcnkgPSBkYW9GYWN0b3J5O1xuICAgIH1cblxuICAgIFNldFllYXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl95ZWFyID0gdmFsdWU7XG4gICAgfVxuICAgICAgIFxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXRZZWFyQ29uZmlndXJhdGlvbic7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFllYXJDb25maWd1cmF0aW9uTW9jay5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgU3RhcnQgeWVhciBjb25maWd1cmF0aW9uIFwiKTtcblxuICAgICAgICBsZXQgZGVmYXVsdERhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGRlZmF1bHREYW86IFwiLCBkZWZhdWx0RGFvKTtcblxuICAgICAgICBsZXQgdGFibGVPYmogPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX1llYXJfQ29uZmlnXCIpOyBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSB0YWJsZU9iajogXCIsIHRhYmxlT2JqKTtcblxuICAgICAgICBpZihkZWZhdWx0RGFvICE9IHVuZGVmaW5lZCAmJiB0YWJsZU9iaiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKGRlZmF1bHREYW8ucXVlcnlCeVRhYmxlKHRhYmxlT2JqKS50b1Byb21pc2UoKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZ2V0WWVhckNvbmZpZ3VyYXRpb24gcmVzcDogXCIsIHJlc3ApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZ2V0WWVhckNvbmZpZ3VyYXRpb24ganNvbiByZXNwOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2YoZmFsc2UpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBmYWlsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=