/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from } from 'rxjs';
var GetProgressDataActualValueAPI = /** @class */ (function () {
    function GetProgressDataActualValueAPI(daoFactory) {
        this._daoFactory = daoFactory;
    }
    Object.defineProperty(GetProgressDataActualValueAPI.prototype, "SearchYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchYear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressDataActualValueAPI.prototype, "ClientId", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._clientID = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressDataActualValueAPI.prototype, "DataType", {
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._personalDataType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressDataActualValueAPI.prototype, "TimeBase", {
        set: /**
         * @param {?} time
         * @return {?}
         */
        function (time) {
            this._personalDataTimeBase = time;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetProgressDataActualValueAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getProgressDataActualValue';
    };
    /**
     * @return {?}
     */
    GetProgressDataActualValueAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        //alert("personal progress mock data");
        return './assets/mock/getProgressDataActualValueMock.json';
    };
    /**
     * @return {?}
     */
    GetProgressDataActualValueAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        console.debug("SQLite actual start ");
        /** @type {?} */
        var defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite actual defaultDao: ", defaultDao);
        /** @type {?} */
        var progressActualObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Actual_Value");
        console.debug("SQLite actual progressActualObj: ", progressActualObj);
        if (defaultDao != undefined && progressActualObj != undefined) {
            return from(defaultDao.queryByTable(progressActualObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.debug("SQLite actual data api resp: ", resp);
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                /** @type {?} */
                var data = resp["Body"];
                /** @type {?} */
                var filterData = data.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.DataYear == 2019; }));
                /** @type {?} */
                var filterData2 = data.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.DataYear == 2020; }));
                console.debug("SQLite actual test date body: ", data);
                console.debug("SQLite actual test filterData: ", filterData);
                console.debug("SQLite actual test filterData2: ", filterData2);
                /** @type {?} */
                var arr = [];
                arr.push(filterData);
                arr.push(filterData2);
                console.debug("SQLite actual test arr: ", arr);
                return arr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                /** @type {?} */
                var data = resp;
                /** @type {?} */
                var progressActualObj1 = {
                    "DataYear": "2019",
                    "TimeBase": "Month",
                    "Values": [],
                };
                /** @type {?} */
                var progressActualObj2 = {
                    "DataYear": "2020",
                    "TimeBase": "Month",
                    "Values": []
                };
                progressActualObj1.Values.push(data[0]);
                progressActualObj2.Values.push(data[1]);
                /** @type {?} */
                var progressActualObjArr = [];
                progressActualObjArr.push(progressActualObj1);
                progressActualObjArr.push(progressActualObj2);
                console.debug("SQLite actual test progressActualObj123: ", progressActualObjArr);
                return progressActualObjArr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                /** @type {?} */
                var data = resp;
                console.debug("SQLite actual test resp progressActualObj123 : ", resp);
                console.debug("SQLite actual test data progressActualObj123 : ", data);
                /** @type {?} */
                var defaultProgressActualObj = {
                    "lastUpdateTime": "2019-06-19",
                    "Actual": [],
                };
                defaultProgressActualObj.Actual.push(data[0]);
                defaultProgressActualObj.Actual.push(data[1]);
                console.debug("SQLite actual test defaultProgressActualObj : ", defaultProgressActualObj);
                return defaultProgressActualObj;
            })));
        }
        else {
            console.debug("SQLite actual data fail......");
        }
        //throw new Error("Method not implemented.");
    };
    return GetProgressDataActualValueAPI;
}());
export { GetProgressDataActualValueAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetProgressDataActualValueAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataActualValueAPI.prototype._daoFactory;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataActualValueAPI.prototype._personalDataType;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataActualValueAPI.prototype._personalDataTimeBase;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataActualValueAPI.prototype._searchYear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0UHJvZ3Jlc3NEYXRhQWN0dWFsVmFsdWVBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvR2V0UHJvZ3Jlc3NEYXRhQWN0dWFsVmFsdWVBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBYSxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFRdEM7SUE2QkksdUNBQVksVUFBcUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQXZCRCxzQkFBVyxxREFBVTs7OztRQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7OztRQUVELFVBQXNCLEtBQVk7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxtREFBUTs7Ozs7UUFBWixVQUFhLEVBQVM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBUTs7Ozs7UUFBWixVQUFhLElBQXFCO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBUTs7Ozs7UUFBWixVQUFhLElBQXlCO1lBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7Ozs7SUFPRCxrREFBVTs7O0lBQVY7UUFDSSxPQUFPLDRCQUE0QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxtREFBVzs7O0lBQVg7UUFDSSx1Q0FBdUM7UUFDdkMsT0FBTyxtREFBbUQsQ0FBQztJQUMvRCxDQUFDOzs7O0lBR0Qsa0RBQVU7OztJQUFWO1FBRUksT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztZQUNsQyxV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QkFDbkUsd0JBQXdCLEdBQzVCO29CQUNJLGdCQUFnQixFQUFFLFlBQVk7b0JBQzlCLFFBQVEsRUFBQyxFQUFFO2lCQUNkO2dCQUVELHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEVBQUUsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUYsT0FBTyx3QkFBd0IsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ1A7YUFDSTtZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNsRDtRQUVELDZDQUE2QztJQUNqRCxDQUFDO0lBaUlMLG9DQUFDO0FBQUQsQ0FBQyxBQXRQRCxJQXNQQzs7Ozs7OztJQXBQRyxrREFBMEI7Ozs7O0lBQzFCLG9EQUFnQzs7Ozs7SUFDaEMsMERBQTRDOzs7OztJQUM1Qyw4REFBb0Q7Ozs7O0lBQ3BELG9EQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHtJU1FMaXRlQVBJfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgZnJvbX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Rhb0ZhY3Rvcnl9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtDbGllbnRDdXN0b21EYW99IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHtFcXVhbFJlc3RyaWN0aW9ufSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuaW1wb3J0IHsgUGVyc29uYWxEYXRhVHlwZSB9IGZyb20gICcuLi9zZXJ2aWNlL21vZGVsL0VudW0vUGVyc29uYWxEYXRhVHlwZSc7XG5pbXBvcnQgeyBQZXJzb25hbERhdGFUaW1lQmFzZSB9IGZyb20gICcuLi9zZXJ2aWNlL21vZGVsL0VudW0vUGVyc29uYWxEYXRhVGltZUJhc2UnO1xuXG5leHBvcnQgY2xhc3MgR2V0UHJvZ3Jlc3NEYXRhQWN0dWFsVmFsdWVBUEkgaW1wbGVtZW50cyBJQVBJLCBJTW9ja0FQSSwgSVNRTGl0ZUFQSSB7XG5cbiAgICBwcml2YXRlIF9jbGllbnRJRDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBfcGVyc29uYWxEYXRhVHlwZTogUGVyc29uYWxEYXRhVHlwZTtcbiAgICBwcml2YXRlIF9wZXJzb25hbERhdGFUaW1lQmFzZTogUGVyc29uYWxEYXRhVGltZUJhc2U7XG4gICAgcHJpdmF0ZSBfc2VhcmNoWWVhcjogbnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBTZWFyY2hZZWFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoWWVhcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IFNlYXJjaFllYXIodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaFllYXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgQ2xpZW50SWQoaWQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudElEID0gaWQ7XG4gICAgfVxuXG4gICAgc2V0IERhdGFUeXBlKHR5cGU6UGVyc29uYWxEYXRhVHlwZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUeXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBzZXQgVGltZUJhc2UodGltZTpQZXJzb25hbERhdGFUaW1lQmFzZSkge1xuICAgICAgICB0aGlzLl9wZXJzb25hbERhdGFUaW1lQmFzZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgXG4gICAgY29uc3RydWN0b3IoZGFvRmFjdG9yeTpEYW9GYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX2Rhb0ZhY3RvcnkgPSBkYW9GYWN0b3J5O1xuICAgIH1cblxuICAgIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdnZXRQcm9ncmVzc0RhdGFBY3R1YWxWYWx1ZSc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgLy9hbGVydChcInBlcnNvbmFsIHByb2dyZXNzIG1vY2sgZGF0YVwiKTtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFByb2dyZXNzRGF0YUFjdHVhbFZhbHVlTW9jay5qc29uJztcbiAgICB9XG5cblxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGFjdHVhbCBzdGFydCBcIik7XG4gICAgICAgIGxldCBkZWZhdWx0RGFvID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBhY3R1YWwgZGVmYXVsdERhbzogXCIsIGRlZmF1bHREYW8pO1xuICAgICAgICBsZXQgcHJvZ3Jlc3NBY3R1YWxPYmogPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1ZXX0FjdHVhbF9WYWx1ZVwiKTtcblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGFjdHVhbCBwcm9ncmVzc0FjdHVhbE9iajogXCIsIHByb2dyZXNzQWN0dWFsT2JqKTtcbiAgICAgICAgaWYoZGVmYXVsdERhbyAhPSB1bmRlZmluZWQgJiYgcHJvZ3Jlc3NBY3R1YWxPYmogIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkZWZhdWx0RGFvLnF1ZXJ5QnlUYWJsZShwcm9ncmVzc0FjdHVhbE9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGFjdHVhbCBkYXRhIGFwaSByZXNwOiBcIiwgcmVzcCk7XG4gICAgICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcFtcIkJvZHlcIl07XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHguRGF0YVllYXIgPT0gMjAxOSk7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckRhdGEyID0gZGF0YS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IDIwMjApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgYWN0dWFsIHRlc3QgZGF0ZSBib2R5OiBcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBhY3R1YWwgdGVzdCBmaWx0ZXJEYXRhOiBcIiwgZmlsdGVyRGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBhY3R1YWwgdGVzdCBmaWx0ZXJEYXRhMjogXCIsIGZpbHRlckRhdGEyKTtcblxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChmaWx0ZXJEYXRhKTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChmaWx0ZXJEYXRhMik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBhY3R1YWwgdGVzdCBhcnI6IFwiLCBhcnIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwO1xuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc0FjdHVhbE9iajEgPSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiRGF0YVllYXJcIjogXCIyMDE5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVGltZUJhc2VcIjogXCJNb250aFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlZhbHVlc1wiOltdLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3NBY3R1YWxPYmoyID0gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIkRhdGFZZWFyXCI6IFwiMjAyMFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRpbWVCYXNlXCI6IFwiTW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJWYWx1ZXNcIjpbXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NBY3R1YWxPYmoxLlZhbHVlcy5wdXNoKGRhdGFbMF0pO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQWN0dWFsT2JqMi5WYWx1ZXMucHVzaChkYXRhWzFdKTtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc0FjdHVhbE9iakFyciA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2dyZXNzQWN0dWFsT2JqQXJyLnB1c2gocHJvZ3Jlc3NBY3R1YWxPYmoxKTtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0FjdHVhbE9iakFyci5wdXNoKHByb2dyZXNzQWN0dWFsT2JqMik7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGFjdHVhbCB0ZXN0IHByb2dyZXNzQWN0dWFsT2JqMTIzOiBcIiwgcHJvZ3Jlc3NBY3R1YWxPYmpBcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9ncmVzc0FjdHVhbE9iakFycjtcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgYWN0dWFsIHRlc3QgcmVzcCBwcm9ncmVzc0FjdHVhbE9iajEyMyA6IFwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIGFjdHVhbCB0ZXN0IGRhdGEgcHJvZ3Jlc3NBY3R1YWxPYmoxMjMgOiBcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRQcm9ncmVzc0FjdHVhbE9iaiA9IFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlVGltZVwiOiBcIjIwMTktMDYtMTlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJBY3R1YWxcIjpbXSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdFByb2dyZXNzQWN0dWFsT2JqLkFjdHVhbC5wdXNoKGRhdGFbMF0pO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9ncmVzc0FjdHVhbE9iai5BY3R1YWwucHVzaChkYXRhWzFdKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgYWN0dWFsIHRlc3QgZGVmYXVsdFByb2dyZXNzQWN0dWFsT2JqIDogXCIsIGRlZmF1bHRQcm9ncmVzc0FjdHVhbE9iaik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9ncmVzc0FjdHVhbE9iajtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgYWN0dWFsIGRhdGEgZmFpbC4uLi4uLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgLypcbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b21lciBEZXRhaWw6ZXhlY3V0ZSBTUUwnKTtcbiAgICAgICAgbGV0IGRlZmF1bHRPYmogPSB7XG4gICAgICAgICAgICBcIkNsaWVudElEXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkxhc3ROYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkZpcnN0TmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJPY2N1cGF0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkNvbXBhbnlcIjogXCJcIixcbiAgICAgICAgICAgIFwiQmlydGhkYXlZZWFyXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkJpcnRoZGF5TW9udGhcIjogXCJcIixcbiAgICAgICAgICAgIFwiQmlydGhkYXlEYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkJpcnRoZGF5XCI6IG51bGwsXG4gICAgICAgICAgICBcIkFnZVJhbmdlXCI6IG51bGwsXG4gICAgICAgICAgICBcIkdlbmRlclwiOiBudWxsLFxuICAgICAgICAgICAgXCJJbmNvbWVcIjogbnVsbCxcbiAgICAgICAgICAgIFwiU291cmNlXCI6IG51bGwsXG4gICAgICAgICAgICBcIk1hcnJpYWdlXCI6IG51bGwsXG4gICAgICAgICAgICBcIkNoaWxkcmVuXCI6IG51bGwsXG4gICAgICAgICAgICBcIkZhbWlsaWFyaXR5XCI6IG51bGwsXG4gICAgICAgICAgICBcIlJlY2VudFN0YXR1c1wiOiBcIlwiLFxuICAgICAgICAgICAgXCJNQU5QQVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJDb250YWN0RnJlcXVhbmN5XCI6IFwiXCIsXG4gICAgICAgICAgICBcIlBvc3NpYmlsaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICBcIklzRm9sbG93XCI6IFwiTlwiLFxuICAgICAgICAgICAgXCJEYXRhU291cmNlXCI6IFwiQVBQXCIsXG4gICAgICAgICAgICBcInRlbFwiOiBbXSxcbiAgICAgICAgICAgIFwiZW1haWxcIjogW10sXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogW11cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lkIHx8ICh0aGlzLl9pZC5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgICAgIC8vQWRkXG4gICAgICAgICAgICBsZXQgcmVzcCA9IG5ldyBTUUxpdGVSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgXCJpc1N1Y2Nlc3NcIjogdHJ1ZVxuICAgICAgICAgICAgfSwgW2RlZmF1bHRPYmpdKTtcbiAgICAgICAgICAgIHJldHVybiBvZihyZXNwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXN0b21lck9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19DdXN0b21lclwiKTtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0RGFvID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgICAgICAgIGlmIChjdXN0b21lck9iaiAhPSB1bmRlZmluZWQgJiYgZGVmYXVsdERhbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGFvID0gbmV3IENsaWVudEN1c3RvbURhbyhkZWZhdWx0RGFvKTtcbiAgICAgICAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkNsaWVudElEXCIsIFt0aGlzLl9pZF0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS50b1Byb21pc2UoKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXIgPSByZXNwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpZW50SUQgPSBjdXN0b21lclsnQm9keSddWzBdLkNsaWVudElEO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJUZWxPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfVGVsXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXJUZWxPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyVGVsT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lclRlbE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlbE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtjbGllbnRJRF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyVGVsT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbExpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsndGVsJ10gPSB0ZWxMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tZXIsIGNsaWVudElEIH07XG4gICAgICAgICAgICAgICAgfSkudGhlbigoeyBjdXN0b21lciwgY2xpZW50SUQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJFbWFpbE9iaiA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lcl9FbWFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyRW1haWxPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWxPYmogPSAoPFNRTGl0ZVRhYmxlPmN1c3RvbWVyRW1haWxPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFbWFpbE9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtjbGllbnRJRF0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJFbWFpbE9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ2VtYWlsJ10gPSB0ZWxMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tZXIsIGNsaWVudElEIH07XG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKCh7IGN1c3RvbWVyLCBjbGllbnRJRCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lckFkZHJPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfQWRkcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyQWRkck9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lckFkZHJPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBFcXVhbFJlc3RyaWN0aW9uKCdDdXN0b21lckNsaWVudElEJywgW2NsaWVudElEXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lckFkZHJPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWydhZGRyZXNzJ10gPSB0ZWxMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lcjtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGN1c3RvbWVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGFuZ2UgYmlydGhEYXkgdG8gRGF0ZSBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXknXSA9IG5ldyBEYXRlKGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5WWVhciddLCBwYXJzZUludChjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheU1vbnRoJ10pIC0gMSwgY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXlEYXRlJ10pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cbiAgICAvKlxuICAgIGV4ZWN1dGVTUUwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgIGxldCBjYWxlbmRhck9iaiA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ2FsZW5kYXJcIik7XG4gICAgICAgICAgbGV0IGRhbyA9IHRoaXMuX2Rhb0ZhY3RvcnkuZ2V0RGVmYXVsdERhbygpO1xuICAgICAgICAgIGlmIChjYWxlbmRhck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkYW8gPSBuZXcgQ2xpZW50Q3VzdG9tRGFvKGRhbyk7XG4gICAgICAgICAgICBjYWxlbmRhck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ2xpZW50SUQnLFt0aGlzLl9jbGllbnRJRF0pKTtcbiAgICAgICAgICAgIGRhby5xdWVyeUJ5VGFibGUoY2FsZW5kYXJPYmopLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cblxuXG5cblxuICAgICAgKi9cblxufSJdfQ==