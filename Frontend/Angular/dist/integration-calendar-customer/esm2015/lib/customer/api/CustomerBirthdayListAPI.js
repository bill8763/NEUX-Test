/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { ClientCustomDao } from '@allianzSND/core';
import { OrderByRestriction } from '@allianzSND/core';
import { getYear, subDays, addDays, setYear } from 'date-fns';
export class CustomerBirthdayListAPI {
    /**
     * @param {?} DaoFactory
     */
    constructor(DaoFactory) {
        this._DaoFactory = DaoFactory;
    }
    /**
     * @param {?} targetDate
     * @return {?}
     */
    set targetDate(targetDate) {
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
    }
    /**
     * @param {?} subN
     * @return {?}
     */
    set subN(subN) {
        this._subN = subN;
    }
    /**
     * @param {?} addN
     * @return {?}
     */
    set addN(addN) {
        this._addN = addN;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getCustomerBirthdayList';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getCustomerBirthday.json';
    }
    /**
     * @return {?}
     */
    executeSQL() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let customerObj = this._DaoFactory.getDefaultTable("TW_LH_SD_VW_Customer");
            /** @type {?} */
            let dao = this._DaoFactory.getDefaultDao();
            if (customerObj != undefined && dao != undefined) {
                dao = new ClientCustomDao(dao);
                // if(this.isRangeCrossYear) {
                //   customerObj.addRestriction(new ORCompoundRestriction([new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]), new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp])]));
                // }
                // else {
                //   customerObj.addRestriction(new GreaterOrEqualRestriction('BirthDayTimeStamp', [this._subNDayTimeStamp]));
                //   customerObj.addRestriction(new LessOrEqualRestriction('BirthDayTimeStamp', [this._addNDayTimeStamp]));
                // }
                customerObj.addRestriction(new OrderByRestriction([{ column: 'LastName', order: 'ASC' }]));
                //customerObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' }]));
                // calendarObj.addRestriction(new OrderByRestriction([{ column: 'StartTime', order: 'ASC' },{ column: 'EndTime', order: 'DESC' }]));
                dao.queryByTable(customerObj).subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    console.warn("resp.Body in CustomerBirthdayListAPI: ", resp);
                    resp.Body = resp.Body.filter((/**
                     * @param {?} birthday
                     * @return {?}
                     */
                    birthday => this._judgeCustomrtIsInRange(birthday)));
                    observer.next(resp);
                    observer.complete();
                }));
            }
            else {
                observer.next(false);
                observer.complete();
            }
        }));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _judgeCustomrtIsInRange(item) {
        /** @type {?} */
        let birthDayTimeStamp = new Date('2000/' + item.BirthdayMonth + '/' + item.BirthdayDate).getTime();
        if (this.isRangeCrossYear) {
            return birthDayTimeStamp >= this._subNDayTimeStamp || birthDayTimeStamp <= this._addNDayTimeStamp;
        }
        else {
            return birthDayTimeStamp >= this._subNDayTimeStamp && birthDayTimeStamp <= this._addNDayTimeStamp;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9pbnRlZ3JhdGlvbi1jYWxlbmRhci1jdXN0b21lci8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21lci9hcGkvQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBc0Qsa0JBQWtCLEVBQTJDLE1BQU0sa0JBQWtCLENBQUM7QUFDbkosT0FBTyxFQUFFLE9BQU8sRUFBcUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFakYsTUFBTTs7OztJQVlKLFlBQVksVUFBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELElBQUksVUFBVSxDQUFDLFVBQWdCO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHekUsSUFBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8s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QyxhQUFhLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDbEcsSUFBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsT0FBTyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFFO1NBQ3BHO2FBRUk7WUFDSCxPQUFPLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUU7U0FDcEc7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQWhHQyw4Q0FBMEI7O0lBRTFCLG1EQUFpQzs7Ozs7SUFDakMsd0NBQXVCOzs7OztJQUN2QixvREFBa0M7Ozs7O0lBRWxDLHdDQUF1Qjs7Ozs7SUFDdkIsb0RBQWtDOzs7OztJQUVsQyw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElNb2NrQVBJIH0gZnJvbSBcIkBhbGxpYW56U05EL2NvcmVcIjtcbmltcG9ydCB7IElTUUxpdGVBUEkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhb0ZhY3RvcnkgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IENsaWVudEN1c3RvbURhbyB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgR3JlYXRlck9yRXF1YWxSZXN0cmljdGlvbiwgTGVzc09yRXF1YWxSZXN0cmljdGlvbiwgIE9yZGVyQnlSZXN0cmljdGlvbiwgRXF1YWxSZXN0cmljdGlvbiwgT1JDb21wb3VuZFJlc3RyaWN0aW9uIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5pbXBvcnQgeyBnZXRZZWFyLCBnZXRNb250aCwgZ2V0RGF0ZSwgc3ViRGF5cywgYWRkRGF5cywgc2V0WWVhciB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyQmlydGhkYXlMaXN0QVBJIGltcGxlbWVudHMgSUFQSSwgSU1vY2tBUEksIElTUUxpdGVBUEkge1xuXG4gIHByaXZhdGUgX3RhcmdldERhdGU6IERhdGU7XG5cbiAgcHVibGljIGlzUmFuZ2VDcm9zc1llYXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX3N1Yk4gOiBudW1iZXI7XG4gIHByaXZhdGUgX3N1Yk5EYXlUaW1lU3RhbXA6IG51bWJlcjtcblxuICBwcml2YXRlIF9hZGROIDogbnVtYmVyO1xuICBwcml2YXRlIF9hZGRORGF5VGltZVN0YW1wOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfRGFvRmFjdG9yeTogRGFvRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoRGFvRmFjdG9yeSkge1xuICAgIHRoaXMuX0Rhb0ZhY3RvcnkgPSBEYW9GYWN0b3J5O1xuICB9XG5cbiAgc2V0IHRhcmdldERhdGUodGFyZ2V0RGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuX3RhcmdldERhdGUgPSBzZXRZZWFyKHRhcmdldERhdGUsIDIwMDApO1xuICAgIHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXAgPSBzdWJEYXlzKHRoaXMuX3RhcmdldERhdGUsIHRoaXMuX3N1Yk4pLmdldFRpbWUoKTtcbiAgICB0aGlzLl9hZGRORGF5VGltZVN0YW1wID0gYWRkRGF5cyh0aGlzLl90YXJnZXREYXRlLCB0aGlzLl9hZGROKS5nZXRUaW1lKCk7XG5cblxuICAgIGlmKChnZXRZZWFyKHRoaXMuX3RhcmdldERhdGUpID09IGdldFllYXIodGhpcy5fc3ViTkRheVRpbWVTdGFtcCkpICYmIChnZXRZZWFyKHRoaXMuX3RhcmdldERhdGUpID09IGdldFllYXIodGhpcy5fYWRkTkRheVRpbWVTdGFtcCkpKSB7XG4gICAgICB0aGlzLmlzUmFuZ2VDcm9zc1llYXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXAgPSAoc2V0WWVhcih0aGlzLl9zdWJORGF5VGltZVN0YW1wLCAyMDAwKSkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5fYWRkTkRheVRpbWVTdGFtcCA9IChzZXRZZWFyKHRoaXMuX2FkZE5EYXlUaW1lU3RhbXAsIDIwMDApKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmlzUmFuZ2VDcm9zc1llYXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnNvbGUud2Fybih0aGlzLl9zdWJOLCBcIiAgc3ViRGF0ZTogIFwiLCB0aGlzLl9zdWJORGF5VGltZVN0YW1wKTtcbiAgICBjb25zb2xlLndhcm4odGhpcy5fYWRkTiwgXCIgIGFkZERhdGU6ICBcIiwgdGhpcy5fYWRkTkRheVRpbWVTdGFtcCk7XG4gIH1cblxuICBzZXQgc3ViTihzdWJOOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdWJOID0gc3ViTjtcbiAgfVxuXG4gIHNldCBhZGROKGFkZE46IG51bWJlcikge1xuICAgIHRoaXMuX2FkZE4gPSBhZGROO1xuICB9XG5cblxuXG4gIGdldEFQSU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2dldEN1c3RvbWVyQmlydGhkYXlMaXN0JztcbiAgfVxuXG4gIGdldE1vY2tQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldEN1c3RvbWVyQmlydGhkYXkuanNvbic7XG4gIH1cblxuICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGN1c3RvbWVyT2JqID0gdGhpcy5fRGFvRmFjdG9yeS5nZXREZWZhdWx0VGFibGUoXCJUV19MSF9TRF9WV19DdXN0b21lclwiKTtcbiAgICAgIGxldCBkYW8gPSB0aGlzLl9EYW9GYWN0b3J5LmdldERlZmF1bHREYW8oKTtcbiAgICAgIGlmIChjdXN0b21lck9iaiAhPSB1bmRlZmluZWQgJiYgZGFvICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIGRhbyA9IG5ldyBDbGllbnRDdXN0b21EYW8oZGFvKTtcblxuICAgICAgICAvLyBpZih0aGlzLmlzUmFuZ2VDcm9zc1llYXIpIHtcbiAgICAgICAgLy8gICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT1JDb21wb3VuZFJlc3RyaWN0aW9uKFtuZXcgR3JlYXRlck9yRXF1YWxSZXN0cmljdGlvbignQmlydGhEYXlUaW1lU3RhbXAnLCBbdGhpcy5fc3ViTkRheVRpbWVTdGFtcF0pLCBuZXcgTGVzc09yRXF1YWxSZXN0cmljdGlvbignQmlydGhEYXlUaW1lU3RhbXAnLCBbdGhpcy5fYWRkTkRheVRpbWVTdGFtcF0pXSkpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IEdyZWF0ZXJPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX3N1Yk5EYXlUaW1lU3RhbXBdKSk7XG4gICAgICAgIC8vICAgY3VzdG9tZXJPYmouYWRkUmVzdHJpY3Rpb24obmV3IExlc3NPckVxdWFsUmVzdHJpY3Rpb24oJ0JpcnRoRGF5VGltZVN0YW1wJywgW3RoaXMuX2FkZE5EYXlUaW1lU3RhbXBdKSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBjdXN0b21lck9iai5hZGRSZXN0cmljdGlvbihuZXcgT3JkZXJCeVJlc3RyaWN0aW9uKFt7IGNvbHVtbjogJ0xhc3ROYW1lJywgb3JkZXI6ICdBU0MnIH1dKSlcblxuICAgICAgICAvL2N1c3RvbWVyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPcmRlckJ5UmVzdHJpY3Rpb24oW3sgY29sdW1uOiAnU3RhcnRUaW1lJywgb3JkZXI6ICdBU0MnIH1dKSk7XG4gICAgICAgIC8vIGNhbGVuZGFyT2JqLmFkZFJlc3RyaWN0aW9uKG5ldyBPcmRlckJ5UmVzdHJpY3Rpb24oW3sgY29sdW1uOiAnU3RhcnRUaW1lJywgb3JkZXI6ICdBU0MnIH0seyBjb2x1bW46ICdFbmRUaW1lJywgb3JkZXI6ICdERVNDJyB9XSkpO1xuICAgICAgICBkYW8ucXVlcnlCeVRhYmxlKGN1c3RvbWVyT2JqKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJyZXNwLkJvZHkgaW4gQ3VzdG9tZXJCaXJ0aGRheUxpc3RBUEk6IFwiLHJlc3ApO1xuICAgICAgICAgIHJlc3AuQm9keSA9IHJlc3AuQm9keS5maWx0ZXIoYmlydGhkYXkgPT4gdGhpcy5fanVkZ2VDdXN0b21ydElzSW5SYW5nZShiaXJ0aGRheSkpO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzcCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2p1ZGdlQ3VzdG9tcnRJc0luUmFuZ2UoaXRlbSk6IGJvb2xlYW4ge1xuICAgIGxldCBiaXJ0aERheVRpbWVTdGFtcCA9IG5ldyBEYXRlKCcyMDAwLycgKyBpdGVtLkJpcnRoZGF5TW9udGggKyAnLycgKyBpdGVtLkJpcnRoZGF5RGF0ZSkuZ2V0VGltZSgpO1xuICAgIGlmKHRoaXMuaXNSYW5nZUNyb3NzWWVhcikge1xuICAgICAgcmV0dXJuIGJpcnRoRGF5VGltZVN0YW1wID49IHRoaXMuX3N1Yk5EYXlUaW1lU3RhbXAgfHwgYmlydGhEYXlUaW1lU3RhbXAgPD0gdGhpcy5fYWRkTkRheVRpbWVTdGFtcCA7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gYmlydGhEYXlUaW1lU3RhbXAgPj0gdGhpcy5fc3ViTkRheVRpbWVTdGFtcCAmJiBiaXJ0aERheVRpbWVTdGFtcCA8PSB0aGlzLl9hZGRORGF5VGltZVN0YW1wIDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==