/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from, of } from 'rxjs';
import { EqualRestriction } from '../../device/sqlite';
var GetOtherParameterAPI = /** @class */ (function () {
    function GetOtherParameterAPI(daoFactory) {
        this._year = -1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    GetOtherParameterAPI.prototype.SetYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._year = value;
    };
    /**
     * @return {?}
     */
    GetOtherParameterAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getOtherParameter';
    };
    /**
     * @return {?}
     */
    GetOtherParameterAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getOtherParameterMock.json';
    };
    /**
     * @return {?}
     */
    GetOtherParameterAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        console.debug("SQLite Start ");
        /** @type {?} */
        var defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite defaultDao: ", defaultDao);
        /** @type {?} */
        var tableObj = this._daoFactory.getDefaultTable("TW_LH_SD_Other_Parameter");
        if (this._year !== -1) {
            tableObj.addRestriction(new EqualRestriction('DataYear', [this._year]));
        }
        console.debug("SQLite tableObj: ", tableObj);
        if (defaultDao != undefined && tableObj != undefined) {
            return from(defaultDao.queryByTable(tableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.debug("SQLite getOtherParameter resp: ", resp);
                console.debug("SQLite getOtherParameter json resp: ", JSON.stringify(resp));
                return resp;
            })));
        }
        else {
            of(false);
            console.debug("SQLite failed");
        }
    };
    return GetOtherParameterAPI;
}());
export { GetOtherParameterAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetOtherParameterAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    GetOtherParameterAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0T3RoZXJQYXJhbWV0ZXJBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9yZWdpc3Rlci9HZXRPdGhlclBhcmFtZXRlckFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLElBQUksRUFBRSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFLMUMsT0FBTyxFQUFjLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHbkU7SUFLSSw4QkFBWSxVQUFzQjtRQUgxQixVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFJdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0ksT0FBTywwQ0FBMEMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFFM0IsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1FBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7O1lBRTdDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQztRQUMzRSxJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLElBQUcsVUFBVSxJQUFJLFNBQVMsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQ2pELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsSUFBSTtnQkFDL0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDUDthQUNJO1lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7Ozs7Ozs7SUE1Q0cscUNBQTJCOzs7OztJQUUzQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIGZyb20sIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElBUEkgfSBmcm9tICcuLi9BUEkuaW50ZXJmYWNlJztcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSAnLi4vTW9ja0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gJy4uL1NRTGl0ZUFQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNlYXJjaFRhYmxlQnlGaWVsZCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9JU2VhcmNoVGFibGVCeUZpZWxkJztcbmltcG9ydCB7IERhb0ZhY3RvcnksIEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tICcuLi8uLi9kZXZpY2Uvc3FsaXRlJztcblxuXG5leHBvcnQgY2xhc3MgR2V0T3RoZXJQYXJhbWV0ZXJBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSwgSVNlYXJjaFRhYmxlQnlGaWVsZCB7XG5cbiAgICBwcml2YXRlIF95ZWFyOiBudW1iZXIgPSAtMTtcblxuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgY29uc3RydWN0b3IoZGFvRmFjdG9yeTogRGFvRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl9kYW9GYWN0b3J5ID0gZGFvRmFjdG9yeTtcbiAgICB9XG5cbiAgICBTZXRZZWFyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5feWVhciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXRPdGhlclBhcmFtZXRlcic7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldE90aGVyUGFyYW1ldGVyTW9jay5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgU3RhcnQgXCIpO1xuXG4gICAgICAgIGxldCBkZWZhdWx0RGFvID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgZGVmYXVsdERhbzogXCIsIGRlZmF1bHREYW8pO1xuXG4gICAgICAgIGxldCB0YWJsZU9iaiA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfT3RoZXJfUGFyYW1ldGVyXCIpOyBcbiAgICAgICAgaWYodGhpcy5feWVhciAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRhYmxlT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdEYXRhWWVhcicsIFt0aGlzLl95ZWFyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgdGFibGVPYmo6IFwiLCB0YWJsZU9iaik7XG5cbiAgICAgICAgaWYoZGVmYXVsdERhbyAhPSB1bmRlZmluZWQgJiYgdGFibGVPYmogIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkZWZhdWx0RGFvLnF1ZXJ5QnlUYWJsZSh0YWJsZU9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdldE90aGVyUGFyYW1ldGVyIHJlc3A6IFwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGdldE90aGVyUGFyYW1ldGVyIGpzb24gcmVzcDogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZihmYWxzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==