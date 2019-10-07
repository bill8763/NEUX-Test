/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { from } from 'rxjs';
import { PersonalDataType } from '../service/model/Enum/PersonalDataType';
import { PersonalDataTimeBase } from '../service/model/Enum/PersonalDataTimeBase';
var GetProgressDataAPI = /** @class */ (function () {
    function GetProgressDataAPI(daoFactory) {
        this._clientID = 0;
        this._personalDataType = PersonalDataType.Actual;
        this._personalDataTimeBase = PersonalDataTimeBase.Day;
        this._searchYear = 0;
        this._daoFactory = daoFactory;
    }
    Object.defineProperty(GetProgressDataAPI.prototype, "SearchYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchYear;
        },
        //condition year
        set: 
        //condition year
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressDataAPI.prototype, "SearchClientId", {
        //condition client id
        set: 
        //condition client id
        /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._clientID = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressDataAPI.prototype, "SearchCLientId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clientID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressDataAPI.prototype, "SearchDataType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._personalDataType;
        },
        //condition data type
        set: 
        //condition data type
        /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._personalDataType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetProgressDataAPI.prototype, "SearchTimeBase", {
        get: /**
         * @return {?}
         */
        function () {
            return this._personalDataTimeBase;
        },
        //condition time base
        set: 
        //condition time base
        /**
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
    GetProgressDataAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getProgressData';
    };
    /**
     * @return {?}
     */
    GetProgressDataAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getProgressDataMock.json';
    };
    /**
     * @return {?}
     */
    GetProgressDataAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        console.debug("SQLite progress start ");
        /*
                let defaultProgressObj =
                {
                    "lastUpdateTime": "",
                    "Progress":[],
                };
                */
        /*
                // Progress [progressObj, progressObj] *2
                let progressObj:
                {
                    "DataYear": "",
                    "YesterdayPoint": "",
                    "Values":[]
                };
                */
        /*
                // progressObj.Value[] * n
                let progresValueObj =
                {
                    "DataType":"",
                    "TimeBase": "",
                    "FYFC": 0,
                    "Find": 0,
                    "Schedule": 0,
                    "Meet": 0,
                    "Submit": 0,
                    "Inforce": 0
                };
                */
        // test class to obj type
        /** @type {?} */
        var defaultDao = this._daoFactory.getDefaultDao();
        console.debug("SQLite progress defaultDao: ", defaultDao);
        /** @type {?} */
        var progressTableObj = this._daoFactory.getDefaultTable("TW_LH_SD_VW_Personal_Progress");
        console.debug("SQLite progress progressTableObj: ", progressTableObj);
        if (progressTableObj != undefined && defaultDao != undefined) {
            return from(defaultDao.queryByTable(progressTableObj).toPromise().then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.debug("SQLite progress data api resp: ", resp);
                return resp;
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
                console.debug("SQLite progress test date body: ", data);
                console.debug("SQLite progress test filterData: ", filterData);
                console.debug("SQLite progress test filterData2: ", filterData2);
                /** @type {?} */
                var arr = [];
                arr.push(filterData);
                arr.push(filterData2);
                console.debug("SQLite progress test arr: ", arr);
                return arr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                /** @type {?} */
                var data = resp;
                /** @type {?} */
                var progressObj1 = {
                    "DataYear": "2019",
                    "YesterdayPoint": "20",
                    "Personal": { Values: [] },
                };
                /** @type {?} */
                var progressObj2 = {
                    "DataYear": "2020",
                    "YesterdayPoint": "20",
                    "Personal": { Values: [] },
                };
                progressObj1.Personal.Values.push(data[0]);
                progressObj2.Personal.Values.push(data[1]);
                /** @type {?} */
                var progressObjArr = [];
                progressObjArr.push(progressObj1);
                progressObjArr.push(progressObj2);
                console.debug("SQLite progress test progressObj123: ", progressObjArr);
                return progressObjArr;
            })).then((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                /** @type {?} */
                var data = resp;
                console.debug("SQLite progress test resp progressObj123 : ", resp);
                console.debug("SQLite progress test data progressObj123 : ", data);
                /** @type {?} */
                var defaultProgressObj = {
                    "lastUpdateTime": "2019-06-19",
                    "Progress": [],
                };
                defaultProgressObj.Progress.push(data[0]);
                defaultProgressObj.Progress.push(data[1]);
                console.debug("SQLite progress test defaultProgressObj123 : ", defaultProgressObj);
                return defaultProgressObj;
            })));
        }
        else {
            console.debug("SQLite progress fail.....");
        }
    };
    return GetProgressDataAPI;
}());
export { GetProgressDataAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetProgressDataAPI.prototype._clientID;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataAPI.prototype._daoFactory;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataAPI.prototype._personalDataType;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataAPI.prototype._personalDataTimeBase;
    /**
     * @type {?}
     * @private
     */
    GetProgressDataAPI.prototype._searchYear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0UHJvZ3Jlc3NEYXRhQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvYXBpL0dldFByb2dyZXNzRGF0YUFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFhLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUt0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTyx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTyw0Q0FBNEMsQ0FBQztBQUVuRjtJQThDSSw0QkFBWSxVQUFxQjtRQTVDekIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixzQkFBaUIsR0FBcUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQzlELDBCQUFxQixHQUF5QixvQkFBb0IsQ0FBQyxHQUFHLENBQUM7UUFDdkUsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUF5QzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUF2Q0Qsc0JBQVcsMENBQVU7Ozs7UUFJckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQVBELGdCQUFnQjs7Ozs7OztRQUNoQixVQUFzQixLQUFZO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBT0Qsc0JBQVcsOENBQWM7UUFEekIscUJBQXFCOzs7Ozs7O1FBQ3JCLFVBQTBCLEVBQVM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw4Q0FBYzs7OztRQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDhDQUFjOzs7O1FBSXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsQ0FB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QzlDO0lBQ0wsQ0FBQztJQThITCx5QkFBQztBQUFELENBQUMsQUE1U0QsSUE0U0M7Ozs7Ozs7SUExU0csdUNBQThCOzs7OztJQUM5Qix5Q0FBZ0M7Ozs7O0lBQ2hDLCtDQUFzRTs7Ozs7SUFDdEUsbURBQStFOzs7OztJQUMvRSx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7SVNRTGl0ZUFQSX0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIGZyb219IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtEYW9GYWN0b3J5fSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7Q2xpZW50Q3VzdG9tRGFvfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7RXF1YWxSZXN0cmljdGlvbn0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbmltcG9ydCB7IFBlcnNvbmFsRGF0YVR5cGUgfSBmcm9tICAnLi4vc2VydmljZS9tb2RlbC9FbnVtL1BlcnNvbmFsRGF0YVR5cGUnO1xuaW1wb3J0IHsgUGVyc29uYWxEYXRhVGltZUJhc2UgfSBmcm9tICAnLi4vc2VydmljZS9tb2RlbC9FbnVtL1BlcnNvbmFsRGF0YVRpbWVCYXNlJztcblxuZXhwb3J0IGNsYXNzIEdldFByb2dyZXNzRGF0YUFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcblxuICAgIHByaXZhdGUgX2NsaWVudElEOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2Rhb0ZhY3Rvcnk6IERhb0ZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBfcGVyc29uYWxEYXRhVHlwZTogUGVyc29uYWxEYXRhVHlwZSA9IFBlcnNvbmFsRGF0YVR5cGUuQWN0dWFsO1xuICAgIHByaXZhdGUgX3BlcnNvbmFsRGF0YVRpbWVCYXNlOiBQZXJzb25hbERhdGFUaW1lQmFzZSA9IFBlcnNvbmFsRGF0YVRpbWVCYXNlLkRheTtcbiAgICBwcml2YXRlIF9zZWFyY2hZZWFyOiBudW1iZXIgPSAwO1xuXG4gICAgLy9jb25kaXRpb24geWVhclxuICAgIHB1YmxpYyBzZXQgU2VhcmNoWWVhcih2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoWWVhciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgU2VhcmNoWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaFllYXI7XG4gICAgfVxuXG4gICAgLy9jb25kaXRpb24gY2xpZW50IGlkXG4gICAgcHVibGljIHNldCBTZWFyY2hDbGllbnRJZChpZDpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2xpZW50SUQgPSBpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFNlYXJjaENMaWVudElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50SUQ7XG4gICAgfVxuXG4gICAgLy9jb25kaXRpb24gZGF0YSB0eXBlXG4gICAgcHVibGljIHNldCBTZWFyY2hEYXRhVHlwZSh0eXBlOlBlcnNvbmFsRGF0YVR5cGUpIHtcbiAgICAgICAgdGhpcy5fcGVyc29uYWxEYXRhVHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBTZWFyY2hEYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlcnNvbmFsRGF0YVR5cGU7XG4gICAgfVxuXG5cbiAgICAvL2NvbmRpdGlvbiB0aW1lIGJhc2VcbiAgICBwdWJsaWMgc2V0IFNlYXJjaFRpbWVCYXNlKHRpbWU6UGVyc29uYWxEYXRhVGltZUJhc2UpIHtcbiAgICAgICAgdGhpcy5fcGVyc29uYWxEYXRhVGltZUJhc2UgPSB0aW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgU2VhcmNoVGltZUJhc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJzb25hbERhdGFUaW1lQmFzZTtcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdHJ1Y3RvcihkYW9GYWN0b3J5OkRhb0ZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fZGFvRmFjdG9yeSA9IGRhb0ZhY3Rvcnk7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldFByb2dyZXNzRGF0YSc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFByb2dyZXNzRGF0YU1vY2suanNvbic7XG4gICAgfVxuXG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBwcm9ncmVzcyBzdGFydCBcIik7XG5cbiAgICAgICAgLypcbiAgICAgICAgbGV0IGRlZmF1bHRQcm9ncmVzc09iaiA9IFxuICAgICAgICB7XG4gICAgICAgICAgICBcImxhc3RVcGRhdGVUaW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcIlByb2dyZXNzXCI6W10sXG4gICAgICAgIH07XG4gICAgICAgICovXG5cbiAgICAgICAgLypcbiAgICAgICAgLy8gUHJvZ3Jlc3MgW3Byb2dyZXNzT2JqLCBwcm9ncmVzc09ial0gKjJcbiAgICAgICAgbGV0IHByb2dyZXNzT2JqOlxuICAgICAgICB7XG4gICAgICAgICAgICBcIkRhdGFZZWFyXCI6IFwiXCIsXG4gICAgICAgICAgICBcIlllc3RlcmRheVBvaW50XCI6IFwiXCIsXG4gICAgICAgICAgICBcIlZhbHVlc1wiOltdXG4gICAgICAgIH07XG4gICAgICAgICovXG5cblxuICAgICAgICAvKlxuICAgICAgICAvLyBwcm9ncmVzc09iai5WYWx1ZVtdICogblxuICAgICAgICBsZXQgcHJvZ3Jlc1ZhbHVlT2JqID1cbiAgICAgICAge1xuICAgICAgICAgICAgXCJEYXRhVHlwZVwiOlwiXCIsXG4gICAgICAgICAgICBcIlRpbWVCYXNlXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkZZRkNcIjogMCxcbiAgICAgICAgICAgIFwiRmluZFwiOiAwLFxuICAgICAgICAgICAgXCJTY2hlZHVsZVwiOiAwLFxuICAgICAgICAgICAgXCJNZWV0XCI6IDAsXG4gICAgICAgICAgICBcIlN1Ym1pdFwiOiAwLFxuICAgICAgICAgICAgXCJJbmZvcmNlXCI6IDBcbiAgICAgICAgfTtcbiAgICAgICAgKi9cblxuXG4gICAgICAgIC8vIHRlc3QgY2xhc3MgdG8gb2JqIHR5cGVcblxuXG4gICAgICAgIGxldCBkZWZhdWx0RGFvID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgcHJvZ3Jlc3MgZGVmYXVsdERhbzogXCIsIGRlZmF1bHREYW8pO1xuXG4gICAgICAgIGxldCBwcm9ncmVzc1RhYmxlT2JqID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19QZXJzb25hbF9Qcm9ncmVzc1wiKTsgXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgcHJvZ3Jlc3MgcHJvZ3Jlc3NUYWJsZU9iajogXCIsIHByb2dyZXNzVGFibGVPYmopO1xuXG4gICAgICAgIGlmKHByb2dyZXNzVGFibGVPYmogIT0gdW5kZWZpbmVkICYmIGRlZmF1bHREYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShkZWZhdWx0RGFvLnF1ZXJ5QnlUYWJsZShwcm9ncmVzc1RhYmxlT2JqKS50b1Byb21pc2UoKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgcHJvZ3Jlc3MgZGF0YSBhcGkgcmVzcDogXCIsIHJlc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgICAgfSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BbXCJCb2R5XCJdO1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJEYXRhID0gZGF0YS5maWx0ZXIoeCA9PiB4LkRhdGFZZWFyID09IDIwMTkpO1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJEYXRhMiA9IGRhdGEuZmlsdGVyKHggPT4geC5EYXRhWWVhciA9PSAyMDIwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIHByb2dyZXNzIHRlc3QgZGF0ZSBib2R5OiBcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBwcm9ncmVzcyB0ZXN0IGZpbHRlckRhdGE6IFwiLCBmaWx0ZXJEYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIHByb2dyZXNzIHRlc3QgZmlsdGVyRGF0YTI6IFwiLCBmaWx0ZXJEYXRhMik7XG5cbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goZmlsdGVyRGF0YSk7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goZmlsdGVyRGF0YTIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUUxpdGUgcHJvZ3Jlc3MgdGVzdCBhcnI6IFwiLCBhcnIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3A7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3NPYmoxID0gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIkRhdGFZZWFyXCI6IFwiMjAxOVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlllc3RlcmRheVBvaW50XCI6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJQZXJzb25hbFwiOntWYWx1ZXM6W119LFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3NPYmoyID0gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIkRhdGFZZWFyXCI6IFwiMjAyMFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlllc3RlcmRheVBvaW50XCI6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJQZXJzb25hbFwiOntWYWx1ZXM6W119LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NPYmoxLlBlcnNvbmFsLlZhbHVlcy5wdXNoKGRhdGFbMF0pO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzT2JqMi5QZXJzb25hbC5WYWx1ZXMucHVzaChkYXRhWzFdKTtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzc09iakFyciA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2dyZXNzT2JqQXJyLnB1c2gocHJvZ3Jlc3NPYmoxKTtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc09iakFyci5wdXNoKHByb2dyZXNzT2JqMik7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIHByb2dyZXNzIHRlc3QgcHJvZ3Jlc3NPYmoxMjM6IFwiLCBwcm9ncmVzc09iakFycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzT2JqQXJyO1xuXG4gICAgICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIHByb2dyZXNzIHRlc3QgcmVzcCBwcm9ncmVzc09iajEyMyA6IFwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIHByb2dyZXNzIHRlc3QgZGF0YSBwcm9ncmVzc09iajEyMyA6IFwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFByb2dyZXNzT2JqID0gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVUaW1lXCI6IFwiMjAxOS0wNi0xOVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlByb2dyZXNzXCI6W10sXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9ncmVzc09iai5Qcm9ncmVzcy5wdXNoKGRhdGFbMF0pO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9ncmVzc09iai5Qcm9ncmVzcy5wdXNoKGRhdGFbMV0pO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNRTGl0ZSBwcm9ncmVzcyB0ZXN0IGRlZmF1bHRQcm9ncmVzc09iajEyMyA6IFwiLCBkZWZhdWx0UHJvZ3Jlc3NPYmopO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvZ3Jlc3NPYmo7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1FMaXRlIHByb2dyZXNzIGZhaWwuLi4uLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gcmVzcDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gY3VzdG9tZXJbJ0JvZHknXVswXS5DbGllbnRJRDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyVGVsT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyVGVsT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlbE9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJUZWxPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJUZWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lclRlbE9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ3RlbCddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuICAgICAgICAgICAgICAgICAgICAqL1xuXG5cblxuXG5cblxuXG5cblxuICAgIC8qXG4gICAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tZXIgRGV0YWlsOmV4ZWN1dGUgU1FMJyk7XG4gICAgICAgIGxldCBkZWZhdWx0T2JqID0ge1xuICAgICAgICAgICAgXCJDbGllbnRJRFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJMYXN0TmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJGaXJzdE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiT2NjdXBhdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJDb21wYW55XCI6IFwiXCIsXG4gICAgICAgICAgICBcIkJpcnRoZGF5WWVhclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheU1vbnRoXCI6IFwiXCIsXG4gICAgICAgICAgICBcIkJpcnRoZGF5RGF0ZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJCaXJ0aGRheVwiOiBudWxsLFxuICAgICAgICAgICAgXCJBZ2VSYW5nZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJHZW5kZXJcIjogbnVsbCxcbiAgICAgICAgICAgIFwiSW5jb21lXCI6IG51bGwsXG4gICAgICAgICAgICBcIlNvdXJjZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJNYXJyaWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgXCJDaGlsZHJlblwiOiBudWxsLFxuICAgICAgICAgICAgXCJGYW1pbGlhcml0eVwiOiBudWxsLFxuICAgICAgICAgICAgXCJSZWNlbnRTdGF0dXNcIjogXCJcIixcbiAgICAgICAgICAgIFwiTUFOUEFcIjogXCJcIixcbiAgICAgICAgICAgIFwiQ29udGFjdEZyZXF1YW5jeVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJQb3NzaWJpbGl0eVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJJc0ZvbGxvd1wiOiBcIk5cIixcbiAgICAgICAgICAgIFwiRGF0YVNvdXJjZVwiOiBcIkFQUFwiLFxuICAgICAgICAgICAgXCJ0ZWxcIjogW10sXG4gICAgICAgICAgICBcImVtYWlsXCI6IFtdLFxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pZCB8fCAodGhpcy5faWQubGVuZ3RoID09IDApKSB7XG4gICAgICAgICAgICAvL0FkZFxuICAgICAgICAgICAgbGV0IHJlc3AgPSBuZXcgU1FMaXRlUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIFwiaXNTdWNjZXNzXCI6IHRydWVcbiAgICAgICAgICAgIH0sIFtkZWZhdWx0T2JqXSk7XG4gICAgICAgICAgICByZXR1cm4gb2YocmVzcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VzdG9tZXJPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfVldfQ3VzdG9tZXJcIik7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdERhbyA9IHRoaXMuZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgICAgICBpZiAoY3VzdG9tZXJPYmogIT0gdW5kZWZpbmVkICYmIGRlZmF1bHREYW8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGVmYXVsdERhbyk7XG4gICAgICAgICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJDbGllbnRJRFwiLCBbdGhpcy5faWRdKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyb20oZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lck9iaikudG9Qcm9taXNlKCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gcmVzcDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudElEID0gY3VzdG9tZXJbJ0JvZHknXVswXS5DbGllbnRJRDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyVGVsT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX1RlbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyVGVsT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlbE9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJUZWxPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJUZWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFvLnF1ZXJ5QnlUYWJsZShjdXN0b21lclRlbE9iaikudG9Qcm9taXNlKCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZWxMaXN0ID0gcmVzcFsnQm9keSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ3RlbCddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHsgY3VzdG9tZXIsIGNsaWVudElEIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyRW1haWxPYmogPSB0aGlzLmRhb0ZhY3RvcnkuZ2V0RGVmYXVsdFRhYmxlKFwiVFdfTEhfU0RfQ3VzdG9tZXJfRW1haWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lckVtYWlsT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsT2JqID0gKDxTUUxpdGVUYWJsZT5jdXN0b21lckVtYWlsT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWxPYmouYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oJ0N1c3RvbWVyQ2xpZW50SUQnLCBbY2xpZW50SURdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyRW1haWxPYmopLnRvUHJvbWlzZSgpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVsTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclsnQm9keSddWzBdWydlbWFpbCddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21lciwgY2xpZW50SUQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbWVyLCBjbGllbnRJRCB9O1xuXG4gICAgICAgICAgICAgICAgfSkudGhlbigoeyBjdXN0b21lciwgY2xpZW50SUQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXJBZGRyT2JqID0gdGhpcy5kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX0N1c3RvbWVyX0FkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21lckFkZHJPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyQWRkck9iaiA9ICg8U1FMaXRlVGFibGU+Y3VzdG9tZXJBZGRyT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyQWRkck9iai5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbignQ3VzdG9tZXJDbGllbnRJRCcsIFtjbGllbnRJRF0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhby5xdWVyeUJ5VGFibGUoY3VzdG9tZXJBZGRyT2JqKS50b1Byb21pc2UoKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbExpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJbJ0JvZHknXVswXVsnYWRkcmVzcyddID0gdGVsTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgfSkudGhlbihjdXN0b21lciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hhbmdlIGJpcnRoRGF5IHRvIERhdGUgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5J10gPSBuZXcgRGF0ZShjdXN0b21lclsnQm9keSddWzBdWydCaXJ0aGRheVllYXInXSwgcGFyc2VJbnQoY3VzdG9tZXJbJ0JvZHknXVswXVsnQmlydGhkYXlNb250aCddKSAtIDEsIGN1c3RvbWVyWydCb2R5J11bMF1bJ0JpcnRoZGF5RGF0ZSddKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xufSJdfQ==