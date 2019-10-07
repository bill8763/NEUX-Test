/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { GreaterOrEqualRestriction, LessOrEqualRestriction, OrderByRestriction, ORCompoundRestriction } from '@allianzSND/core';
import { getYear, subDays, addDays, setYear } from 'date-fns';
var CustomerBirthdayListAPI = /** @class */ (function () {
    function CustomerBirthdayListAPI(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    Object.defineProperty(CustomerBirthdayListAPI.prototype, "targetDate", {
        set: /**
         * @param {?} targetDate
         * @return {?}
         */
        function (targetDate) {
            this._targetDate = setYear(targetDate, 2000);
            this._subNDayTimeStamp = subDays(this._targetDate, this._subN).getTime();
            this._addNDayTimeStamp = addDays(this._targetDate, this._addN).getTime();
            if ((getYear(this._targetDate) == getYear(this._subNDayTimeStamp)) && (getYear(this._targetDate) == getYear(this._addNDayTimeStamp))) {
                this.isRangeCrossYear = false;
            }
            else {
                this._subNDayTimeStamp = (setYear(this._subNDayTimeStamp, 2000)).getTime();
                this._addNDayTimeStamp = (setYear(this._addNDayTimeStamp, 2000)).getTime();
                this.isRangeCrossYear = true;
            }
            console.warn(this._subN, "  subDate:  ", this._subNDayTimeStamp);
            console.warn(this._addN, "  addDate:  ", this._addNDayTimeStamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBirthdayListAPI.prototype, "subN", {
        set: /**
         * @param {?} subN
         * @return {?}
         */
        function (subN) {
            this._subN = subN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerBirthdayListAPI.prototype, "addN", {
        set: /**
         * @param {?} addN
         * @return {?}
         */
        function (addN) {
            this._addN = addN;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomerBirthdayListAPI.prototype.getAPIName = /**
     * @return {?}
     */
    function () {
        return 'getCustomerBirthdayList';
    };
    /**
     * @return {?}
     */
    CustomerBirthdayListAPI.prototype.getMockPath = /**
     * @return {?}
     */
    function () {
        return './assets/mock/getCustomerBirthday.json';
    };
    /**
     * @return {?}
     */
    CustomerBirthdayListAPI.prototype.executeSQL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var customerObj = _this._DaoFactory.getDefaultTable("TW_LH_SD_Customer");
            /** @type {?} */
            var dao = _this._DaoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                if (_this.isRangeCrossYear) {
                    customerObj.addRestriction(new ORCompoundRestriction([new GreaterOrEqualRestriction('BirthDayTimeStamp', [_this._subNDayTimeStamp]), new LessOrEqualRestriction('BirthDayTimeStamp', [_this._addNDayTimeStamp])]));
                }
                else {
                    customerObj.addRestriction(new GreaterOrEqualRestriction('BirthDayTimeStamp', [_this._subNDayTimeStamp]));
                    customerObj.addRestriction(new LessOrEqualRestriction('BirthDayTimeStamp', [_this._addNDayTimeStamp]));
                }
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //customerObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(customerObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    };
    return CustomerBirthdayListAPI;
}());
export { CustomerBirthdayListAPI };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._targetDate;
    /** @type {?} */
    CustomerBirthdayListAPI.prototype.isRangeCrossYear;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._subN;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._subNDayTimeStamp;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._addN;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._addNDayTimeStamp;
    /**
     * @type {?}
     * @private
     */
    CustomerBirthdayListAPI.prototype._DaoFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9hcGkvQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRyxrQkFBa0IsRUFBb0IscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuSixPQUFPLEVBQUUsT0FBTyxFQUFxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVqRjtJQVlFLGlDQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVELHNCQUFJLCtDQUFVOzs7OztRQUFkLFVBQWUsVUFBZ0I7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUd6RSxJQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUks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QUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtRQUlILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQXhGRCxJQXdGQzs7Ozs7OztJQXRGQyw4Q0FBMEI7O0lBRTFCLG1EQUFpQzs7Ozs7SUFDakMsd0NBQXVCOzs7OztJQUN2QixvREFBa0M7Ozs7O0lBRWxDLHdDQUF1Qjs7Ozs7SUFDdkIsb0RBQWtDOzs7OztJQUVsQyw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgR3JlYXRlck9yRXF1YWxSZXN0cmljdGlvbiwgTGVzc09yRXF1YWxSZXN0cmljdGlvbiwgIE9yZGVyQnlSZXN0cmljdGlvbiwgRXF1YWxSZXN0cmljdGlvbiwgT1JDb21wb3VuZFJlc3RyaWN0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBnZXRZZWFyLCBnZXRNb250aCwgZ2V0RGF0ZSwgc3ViRGF5cywgYWRkRGF5cywgc2V0WWVhciB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gIHByaXZhdGUgX3RhcmdldERhdGU6IERhdGU7XG5cbiAgcHVibGljIGlzUmFuZ2VDcm9zc1llYXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX3N1Yk4gOiBudW1iZXI7XG4gIHByaXZhdGUgX3N1Yk5EYXlUaW1lU3RhbXA6IG51bWJlcjtcblxuICBwcml2YXRlIF9hZGROIDogbnVtYmVyO1xuICBwcml2YXRlIF9hZGRORGF5VGltZVN0YW1wOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoRGFvRmFjdG9yeSkge1xuICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICB9XG5cbiAgc2V0IHRhcmdldERhdGUodGFyZ2V0RGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuX3RhcmdldERhdGUgPSBzZXRZZWFyKHRhcmdldERhdGUsIDIwMDApO1xuICAgIHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXAgPSBzdWJEYXlzKHRoaXMuX3RhcmdldERhdGUsIHRoaXMuX3N1Yk4pLmdldFRpbWUoKTtcbiAgICB0aGlzLl9hZGRORGF5VGltZVN0YW1wID0gYWRkRGF5cyh0aGlzLl90YXJnZXREYXRlLCB0aGlzLl9hZGROKS5nZXRUaW1lKCk7XG5cblxuICAgIGlmKChnZXRZZWFyKHRoaXMuX3RhcmdldERhdGUpID09IGdldFllYXIodGhpcy5fc3ViTkRheVRpbWVTdGFtcCkpICYmIChnZXRZZWFyKHRoaXMuX3RhcmdldERhdGUpID09IGdldFllYXIodGhpcy5fYWRkTkRheVRpbWVTdGFtcCkpKSB7XG4gICAgICB0aGlzLmlzUmFuZ2VDcm9zc1llYXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXAgPSAoc2V0WWVhcih0aGlzLl9zdWJORGF5VGltZVN0YW1wLCAyMDAwKSkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5fYWRkTkRheVRpbWVTdGFtcCA9IChzZXRZZWFyKHRoaXMuX2FkZE5EYXlUaW1lU3RhbXAsIDIwMDApKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmlzUmFuZ2VDcm9zc1llYXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnNvbGUud2Fybih0aGlzLl9zdWJOLCBcIiAgc3ViRGF0ZTogIFwiLCB0aGlzLl9zdWJORGF5VGltZVN0YW1wKTtcbiAgICBjb25zb2xlLndhcm4odGhpcy5fYWRkTiwgXCIgIGFkZERhdGU6ICBcIiwgdGhpcy5fYWRkTkRheVRpbWVTdGFtcCk7XG4gIH1cblxuICBzZXQgc3ViTihzdWJOOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdWJOID0gc3ViTjtcbiAgfVxuXG4gIHNldCBhZGROKGFkZE46IG51bWJlcikge1xuICAgIHRoaXMuX2FkZE4gPSBhZGROO1xuICB9XG5cblxuXG4gIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2dldEN1c3RvbWVyQmlydGhkYXlMaXN0JztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyQmlydGhkYXkuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9DdXN0b21lclwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChjdXN0b21lck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICBpZih0aGlzLmlzUmFuZ2VDcm9zc1llYXIpIHtcbiAgICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT1JDb21wb3VuZFJlc3RyaWN0aW9uKFtuZXcgR3JlYXRlck9yRXF1YWxSZXN0cmljdGlvbignQmlydGhEYXlUaW1lU3RhbXAnLCBbdGhpcy5fc3ViTkRheVRpbWVTdGFtcF0pLCBuZXcgTGVzc09yRXF1YWxSZXN0cmljdGlvbignQmlydGhEYXlUaW1lU3RhbXAnLCBbdGhpcy5fYWRkTkRheVRpbWVTdGFtcF0pXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX3N1Yk5EYXlUaW1lU3RhbXBdKSk7XG4gICAgICAgICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IExlc3NPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX2FkZE5EYXlUaW1lU3RhbXBdKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ0xhc3ROYW1lJywgb3JkZXI6ICdBU0MnIH1dKSlcblxuICAgICAgICAvL2N1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPcmRlckJ5UmVzdHJpY3Rpb24oW3sgY29sdW1uOiAnU3RhcnRUaW1lJywgb3JkZXI6ICdBU0MnIH1dKSk7XG4gICAgICAgIC8vIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPcmRlckJ5UmVzdHJpY3Rpb24oW3sgY29sdW1uOiAnU3RhcnRUaW1lJywgb3JkZXI6ICdBU0MnIH0seyBjb2x1bW46ICdFbmRUaW1lJywgb3JkZXI6ICdERVNDJyB9XSkpO1xuICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3ApO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIFxuXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==