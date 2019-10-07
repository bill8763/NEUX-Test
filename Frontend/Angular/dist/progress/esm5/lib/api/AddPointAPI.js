/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StringUtils, EqualRestriction } from "@allianzSND/core";
import { from, of } from "rxjs";
var AddPointAPI = /** @class */ (function () {
    function AddPointAPI(daoFactory) {
        this._addType = "";
        this._year = -1;
        this._addPointNum = 1;
        this._daoFactory = daoFactory;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    AddPointAPI.prototype.SetAddType = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._addType = value;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AddPointAPI.prototype.SetYear = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._year = val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AddPointAPI.prototype.SetPointNum = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._addPointNum = val;
    };
    /**
     * @return {?}
     */
    AddPointAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return "addPoint";
    };
    /**
     * @return {?}
     */
    AddPointAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return "./assets/mock/saveSuccess.json";
    };
    /**
     * @return {?}
     */
    AddPointAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("AddPointAPI add " + this._addType + " point");
        console.log("this._addType", this._addType, "this._year", this._year);
        if (StringUtils.isNotEmpty(this._addType) && this._year != -1) {
            this.dao = this._daoFactory.getDefaultDao();
            /** @type {?} */
            var TimeBaselist = ["Day", "Week", "Month", "Quarter", "Year"];
            return from(Promise.all(TimeBaselist.map((/**
             * @param {?} timeBase
             * @return {?}
             */
            function (timeBase) { return _this._addPoint(timeBase); }))).then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var addResp = _this.dao.runTransaction().toPromise();
                console.log("addResp", addResp);
                return addResp;
            })));
        }
        else {
            return of(false);
        }
    };
    /**
     * @private
     * @param {?} timeBase
     * @return {?}
     */
    AddPointAPI.prototype._addPoint = /**
     * @private
     * @param {?} timeBase
     * @return {?}
     */
    function (timeBase) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentNum, PersonalPorgress, progressObj, getResp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("into _addPoint()");
                        console.log("timeBase", timeBase);
                        currentNum = 0;
                        PersonalPorgress = this._daoFactory.getDefaultTable("TW_LH_SD_Personal_Progress");
                        console.log("SQLite tableObj: ", PersonalPorgress);
                        PersonalPorgress.addRestriction(new EqualRestriction("DataYear", [this._year]));
                        PersonalPorgress.addRestriction(new EqualRestriction("TimeBase", [timeBase]));
                        PersonalPorgress.addRestriction(new EqualRestriction("DataType", ["Actual"]));
                        progressObj = null;
                        return [4 /*yield*/, this.dao.queryByTable(PersonalPorgress).toPromise()];
                    case 1:
                        getResp = _a.sent();
                        console.log("AddPointAPI getResp", getResp);
                        if (getResp.Header["status"] && getResp.Body.length > 0) {
                            progressObj = getResp.Body[0];
                            if (this._addType == "customer") {
                                currentNum = progressObj.Find;
                                PersonalPorgress.setValue("Find", currentNum + this._addPointNum);
                            }
                            else if (this._addType == "calendar") {
                                currentNum = progressObj.Schedule;
                                PersonalPorgress.setValue("Schedule", currentNum + this._addPointNum);
                            }
                            console.log("AddPointAPI PersonalPorgress", PersonalPorgress);
                            this.dao.transactionUpdate(PersonalPorgress);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AddPointAPI;
}());
export { AddPointAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._addType;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._year;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._addPointNum;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype.dao;
    /**
     * @type {?}
     * @private
     */
    AddPointAPI.prototype._daoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUG9pbnRBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQWRkUG9pbnRBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVEsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdkUsT0FBTyxFQUFjLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHNUM7SUFPRSxxQkFBWSxVQUFzQjtRQU4xQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUt2QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsNkJBQU87Ozs7SUFBUCxVQUFRLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxpQ0FBVzs7OztJQUFYLFVBQVksR0FBVTtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsZ0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLE9BQU8sZ0NBQWdDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUFBLGlCQWdCQztRQWRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMs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LFlBQVksQ0FBQyxDQUFDOzZCQUN6RTs0QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLGdCQUFnQixDQUFDLENBQUM7NEJBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt5QkFDNUM7Ozs7O0tBQ0Y7SUFDSCxrQkFBQztBQUFELENBQUMsQUF2RUQsSUF1RUM7Ozs7Ozs7SUF0RUMsK0JBQThCOzs7OztJQUM5Qiw0QkFBMkI7Ozs7O0lBQzNCLG1DQUF5Qjs7Ozs7SUFDekIsMEJBQVk7Ozs7O0lBRVosa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFQSSwgU3RyaW5nVXRpbHMsIEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tIFwiQGFsbGlhbnpTTkQvY29yZVwiO1xuaW1wb3J0IHsgSVNRTGl0ZUFQSSB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEFkZFBvaW50QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuICBwcml2YXRlIF9hZGRUeXBlOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIF95ZWFyOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfYWRkUG9pbnROdW0gPSAxO1xuICBwcml2YXRlIGRhbztcblxuICBwcml2YXRlIF9kYW9GYWN0b3J5OiBEYW9GYWN0b3J5O1xuICBjb25zdHJ1Y3RvcihkYW9GYWN0b3J5OiBEYW9GYWN0b3J5KSB7XG4gICAgdGhpcy5fZGFvRmFjdG9yeSA9IGRhb0ZhY3Rvcnk7XG4gIH1cblxuICBTZXRBZGRUeXBlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9hZGRUeXBlID0gdmFsdWU7XG4gIH1cbiAgU2V0WWVhcih2YWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3llYXIgPSB2YWw7XG4gIH1cbiAgU2V0UG9pbnROdW0odmFsOm51bWJlcik6IHZvaWR7XG4gICAgdGhpcy5fYWRkUG9pbnROdW0gPSB2YWw7XG4gIH1cbiAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImFkZFBvaW50XCI7XG4gIH1cblxuICBnZXRNb2NrUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIi4vYXNzZXRzL21vY2svc2F2ZVN1Y2Nlc3MuanNvblwiO1xuICB9XG5cbiAgZXhlY3V0ZVNRTCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgY29uc29sZS5sb2coXCJBZGRQb2ludEFQSSBhZGQgXCIgKyB0aGlzLl9hZGRUeXBlICsgXCIgcG9pbnRcIik7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLl9hZGRUeXBlXCIsIHRoaXMuX2FkZFR5cGUsIFwidGhpcy5feWVhclwiLCB0aGlzLl95ZWFyKTtcbiAgICBcbiAgICBpZiAoU3RyaW5nVXRpbHMuaXNOb3RFbXB0eSh0aGlzLl9hZGRUeXBlKSAmJiB0aGlzLl95ZWFyICE9IC0xKSB7XG4gICAgICAgIHRoaXMuZGFvID0gdGhpcy5fZGFvRmFjdG9yeS5nZXREZWZhdWx0RGFvKCk7XG4gICAgICAgIGxldCBUaW1lQmFzZWxpc3QgPSBbXCJEYXlcIixcIldlZWtcIixcIk1vbnRoXCIsXCJRdWFydGVyXCIsXCJZZWFyXCJdO1xuICAgICAgICByZXR1cm4gZnJvbShQcm9taXNlLmFsbChUaW1lQmFzZWxpc3QubWFwKHRpbWVCYXNlID0+IHRoaXMuX2FkZFBvaW50KHRpbWVCYXNlKSkpLnRoZW4oKCk9PntcbiAgICAgICAgICBsZXQgYWRkUmVzcCA9IHRoaXMuZGFvLnJ1blRyYW5zYWN0aW9uKCkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhZGRSZXNwXCIsYWRkUmVzcCk7XG4gICAgICAgICAgcmV0dXJuIGFkZFJlc3A7XG4gICAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2FkZFBvaW50KHRpbWVCYXNlKXtcbiAgICBjb25zb2xlLmxvZyhcImludG8gX2FkZFBvaW50KClcIik7XG4gICAgY29uc29sZS5sb2coXCJ0aW1lQmFzZVwiLHRpbWVCYXNlKTtcbiAgICBsZXQgY3VycmVudE51bSA9IDA7XG4gICAgbGV0IFBlcnNvbmFsUG9yZ3Jlc3MgPSB0aGlzLl9kYW9GYWN0b3J5LmdldERlZmF1bHRUYWJsZShcIlRXX0xIX1NEX1BlcnNvbmFsX1Byb2dyZXNzXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiU1FMaXRlIHRhYmxlT2JqOiBcIiwgUGVyc29uYWxQb3JncmVzcyk7XG4gICAgUGVyc29uYWxQb3JncmVzcy5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkRhdGFZZWFyXCIsIFt0aGlzLl95ZWFyXSkpO1xuICAgIFBlcnNvbmFsUG9yZ3Jlc3MuYWRkUmVzdHJpY3Rpb24obmV3IEVxdWFsUmVzdHJpY3Rpb24oXCJUaW1lQmFzZVwiLCBbdGltZUJhc2VdKSk7XG4gICAgUGVyc29uYWxQb3JncmVzcy5hZGRSZXN0cmljdGlvbihuZXcgRXF1YWxSZXN0cmljdGlvbihcIkRhdGFUeXBlXCIsIFtcIkFjdHVhbFwiXSkpO1xuICAgIGxldCBwcm9ncmVzc09iaiA9IG51bGw7XG4gICAgbGV0IGdldFJlc3AgPSBhd2FpdCB0aGlzLmRhby5xdWVyeUJ5VGFibGUoUGVyc29uYWxQb3JncmVzcykudG9Qcm9taXNlKCk7XG4gICAgY29uc29sZS5sb2coXCJBZGRQb2ludEFQSSBnZXRSZXNwXCIsIGdldFJlc3ApO1xuICAgIGlmIChnZXRSZXNwLkhlYWRlcltcInN0YXR1c1wiXSAmJiBnZXRSZXNwLkJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgcHJvZ3Jlc3NPYmogPSBnZXRSZXNwLkJvZHlbMF07XG4gICAgaWYgKHRoaXMuX2FkZFR5cGUgPT0gXCJjdXN0b21lclwiKSB7XG4gICAgICAgIGN1cnJlbnROdW0gPSBwcm9ncmVzc09iai5GaW5kO1xuICAgICAgICBQZXJzb25hbFBvcmdyZXNzLnNldFZhbHVlKFwiRmluZFwiLCBjdXJyZW50TnVtICsgdGhpcy5fYWRkUG9pbnROdW0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYWRkVHlwZSA9PSBcImNhbGVuZGFyXCIpIHtcbiAgICAgICAgY3VycmVudE51bSA9IHByb2dyZXNzT2JqLlNjaGVkdWxlO1xuICAgICAgICBQZXJzb25hbFBvcmdyZXNzLnNldFZhbHVlKFwiU2NoZWR1bGVcIiwgY3VycmVudE51bSArIHRoaXMuX2FkZFBvaW50TnVtKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJBZGRQb2ludEFQSSBQZXJzb25hbFBvcmdyZXNzXCIsIFBlcnNvbmFsUG9yZ3Jlc3MpO1xuICAgIHRoaXMuZGFvLnRyYW5zYWN0aW9uVXBkYXRlKFBlcnNvbmFsUG9yZ3Jlc3MpO1xuICAgIH1cbiAgfVxufVxuIl19