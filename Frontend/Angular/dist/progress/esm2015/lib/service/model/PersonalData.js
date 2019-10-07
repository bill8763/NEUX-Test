/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PersonalDataTimeBase } from "./Enum/PersonalDataTimeBase";
import { PersonalDataType } from "./Enum/PersonalDataType";
import { Bean, Required } from "@allianzSND/core";
let PersonalData = class PersonalData {
    /**
     * @param {?} dataYear
     * @param {?} timeBase
     * @param {?} dataType
     * @param {?} find
     * @param {?} schedule
     * @param {?} meet
     * @param {?} submit
     * @param {?} inforce
     */
    constructor(dataYear, timeBase, dataType, find, schedule, meet, submit, inforce) {
        this._dataYear = dataYear;
        this._timeBase = timeBase;
        this._dataType = dataType;
        this._find = find;
        this._schedule = schedule;
        this._meet = meet;
        this._submit = submit;
        this._inforce = inforce;
    }
    //#region Getter setter
    //year
    /**
     * @return {?}
     */
    get DataYear() {
        return this._dataYear;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    set DataTear(year) {
        this._dataYear = year;
    }
    // time base
    /**
     * @return {?}
     */
    get TimeBase() {
        return this._timeBase;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    set TimeBase(time) {
        this._timeBase = time;
    }
    //type
    /**
     * @return {?}
     */
    get DataType() {
        return this._dataType;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set DataTypet(type) {
        this._dataType = type;
    }
    //find
    /**
     * @return {?}
     */
    get Find() {
        return this._find;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Find(num) {
        this._find = num;
    }
    //schedule
    /**
     * @return {?}
     */
    get Schedule() {
        return this._schedule;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Schedule(num) {
        this._schedule = num;
    }
    //meet
    /**
     * @return {?}
     */
    get Meet() {
        return this._meet;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Meet(num) {
        this._meet = num;
    }
    //submit
    /**
     * @return {?}
     */
    get Submit() {
        return this._submit;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Submit(num) {
        this._submit = num;
    }
    //inforce
    /**
     * @return {?}
     */
    get Inforce() {
        return this._inforce;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    set Inforce(num) {
        this._inforce = num;
    }
    //#endregion
    /**
     * @return {?}
     */
    getTotalCount() {
        /** @type {?} */
        let sum = this.Find + this.Schedule + this.Meet + this.Submit + this.Inforce;
        return sum;
    }
    /**
     * @return {?}
     */
    getTotalPoints() {
        /** @type {?} */
        let sum = this.getFindPoints() + this.getSchedulePoints() + this.getMeetPoints() + this.getSubmitPoints() + this.getInforcePoints();
        return sum;
    }
    /**
     * @param {?} numerator
     * @param {?} denominator
     * @return {?}
     */
    getDifferentPercentage(numerator, denominator) {
        return Math.round((numerator / denominator) * 100);
    }
    /*
        // 1 1 2 10 2   f /s /m /su /i
        getFindPoints(dot:number) : number {
            return this.Find * dot ;
        }
    
        getSchedulePoints(dot:number) : number {
            return this.Schedule  * dot;
        }
    
        getMeetPoints(dot:number) : number {
            return this.Meet * dot;
        }
    
        getSubmitPoints(dot:number) : number {
            return this.Submit * dot;
        }
    
        getInforcePoints(dot:number) : number {
            return this.Inforce  * dot;
        }
    
        /*
        getDifferentPercentage(numerator: number, denominator: number, fixedNum: number) : string {
            return ( ( numerator / denominator ) * 100 ).toFixed(fixedNum);
        }
        */
    /**
     * @return {?}
     */
    getFindPoints() {
        return this.Find * 1;
    }
    /**
     * @return {?}
     */
    getSchedulePoints() {
        return this.Schedule * 1;
    }
    /**
     * @return {?}
     */
    getMeetPoints() {
        return this.Meet * 2;
    }
    /**
     * @return {?}
     */
    getSubmitPoints() {
        return this.Submit * 10;
    }
    /**
     * @return {?}
     */
    getInforcePoints() {
        return this.Inforce * 2;
    }
};
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], PersonalData.prototype, "_dataYear", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], PersonalData.prototype, "_timeBase", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", String)
], PersonalData.prototype, "_dataType", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], PersonalData.prototype, "_find", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], PersonalData.prototype, "_schedule", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], PersonalData.prototype, "_meet", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], PersonalData.prototype, "_submit", void 0);
tslib_1.__decorate([
    Required,
    tslib_1.__metadata("design:type", Number)
], PersonalData.prototype, "_inforce", void 0);
PersonalData = tslib_1.__decorate([
    Bean('PersonalData'),
    tslib_1.__metadata("design:paramtypes", [Number, String, String, Number, Number, Number, Number, Number])
], PersonalData);
export { PersonalData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._dataYear;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._timeBase;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._dataType;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._find;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._schedule;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._meet;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._submit;
    /**
     * @type {?}
     * @private
     */
    PersonalData.prototype._inforce;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9tb2RlbC9QZXJzb25hbERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0lBR3JDLFlBQVk7Ozs7Ozs7Ozs7O0lBMEJyQixZQUFZLFFBQWUsRUFDZixRQUE2QixFQUM3QixRQUF5QixFQUN6QixJQUFXLEVBQ1gsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLE1BQWMsRUFDZCxPQUFlO1FBRVgsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBSWIsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLElBQTBCO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBR0QsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxTQUFTLENBQUMsSUFBc0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBR0QsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUdELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFHRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFFO0lBQ3hCLENBQUM7Ozs7O0lBR0QsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsR0FBVztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDOzs7OztJQUtELGFBQWE7O1lBQ04sR0FBRyxHQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDN0UsT0FBTyxHQUFHLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsY0FBYzs7WUFDTixHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQ25JLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsc0JBQXNCLENBQUMsU0FBaUIsRUFBRSxXQUFtQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFFLENBQUM7SUFDeEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlDRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBRTtJQUMxQixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FFSixDQUFBO0FBdkxHO0lBREMsUUFBUTs7K0NBQ2lCO0FBRzFCO0lBREMsUUFBUTs7K0NBQytCO0FBR3hDO0lBREMsUUFBUTs7K0NBQzJCO0FBR3BDO0lBREMsUUFBUTs7MkNBQ2E7QUFHdEI7SUFEQyxRQUFROzsrQ0FDaUI7QUFHMUI7SUFEQyxRQUFROzsyQ0FDYTtBQUd0QjtJQURDLFFBQVE7OzZDQUNlO0FBR3hCO0lBREMsUUFBUTs7OENBQ2dCO0FBeEJoQixZQUFZO0lBRHhCLElBQUksQ0FBQyxjQUFjLENBQUM7O0dBQ1IsWUFBWSxDQTBMeEI7U0ExTFksWUFBWTs7Ozs7O0lBRXJCLGlDQUMwQjs7Ozs7SUFFMUIsaUNBQ3dDOzs7OztJQUV4QyxpQ0FDb0M7Ozs7O0lBRXBDLDZCQUNzQjs7Ozs7SUFFdEIsaUNBQzBCOzs7OztJQUUxQiw2QkFDc0I7Ozs7O0lBRXRCLCtCQUN3Qjs7Ozs7SUFFeEIsZ0NBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc29uYWxEYXRhVGltZUJhc2UgfSBmcm9tIFwiLi9FbnVtL1BlcnNvbmFsRGF0YVRpbWVCYXNlXCI7XG5pbXBvcnQgeyBQZXJzb25hbERhdGFUeXBlIH0gZnJvbSBcIi4vRW51bS9QZXJzb25hbERhdGFUeXBlXCI7XG5pbXBvcnQgeyBCZWFuLCBSZXF1aXJlZCB9IGZyb20gXCJAYWxsaWFuelNORC9jb3JlXCI7XG5cbkBCZWFuKCdQZXJzb25hbERhdGEnKVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsRGF0YSB7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9kYXRhWWVhcjogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfdGltZUJhc2U6IFBlcnNvbmFsRGF0YVRpbWVCYXNlO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfZGF0YVR5cGU6IFBlcnNvbmFsRGF0YVR5cGU7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9maW5kOiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9zY2hlZHVsZTogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfbWVldDogbnVtYmVyO1xuXG4gICAgQFJlcXVpcmVkXG4gICAgcHJpdmF0ZSBfc3VibWl0OiBudW1iZXI7XG5cbiAgICBAUmVxdWlyZWRcbiAgICBwcml2YXRlIF9pbmZvcmNlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhWWVhcjpudW1iZXIsIFxuICAgICAgICAgICAgICAgIHRpbWVCYXNlOlBlcnNvbmFsRGF0YVRpbWVCYXNlLCBcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTpQZXJzb25hbERhdGFUeXBlLCBcbiAgICAgICAgICAgICAgICBmaW5kOm51bWJlciwgXG4gICAgICAgICAgICAgICAgc2NoZWR1bGU6IG51bWJlciwgXG4gICAgICAgICAgICAgICAgbWVldDogbnVtYmVyLCBcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bWJlciwgXG4gICAgICAgICAgICAgICAgaW5mb3JjZTogbnVtYmVyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YVllYXIgPSBkYXRhWWVhcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGltZUJhc2UgPSB0aW1lQmFzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YVR5cGUgPSBkYXRhVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmluZCA9IGZpbmQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlID0gc2NoZWR1bGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lZXQgPSBtZWV0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdWJtaXQgPSBzdWJtaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZm9yY2UgPSBpbmZvcmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAvLyNyZWdpb24gR2V0dGVyIHNldHRlclxuICAgIC8veWVhclxuICAgIGdldCBEYXRhWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFZZWFyO1xuICAgIH1cblxuICAgIHNldCBEYXRhVGVhcih5ZWFyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVllYXIgPSAgeWVhcjtcbiAgICB9XG5cbiAgICAvLyB0aW1lIGJhc2VcbiAgICBnZXQgVGltZUJhc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lQmFzZTtcbiAgICB9XG5cbiAgICBzZXQgVGltZUJhc2UodGltZTogUGVyc29uYWxEYXRhVGltZUJhc2UpIHtcbiAgICAgICAgdGhpcy5fdGltZUJhc2UgPSB0aW1lO1xuICAgIH1cblxuICAgIC8vdHlwZVxuICAgIGdldCBEYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFUeXBlO1xuICAgIH1cblxuICAgIHNldCBEYXRhVHlwZXQodHlwZTogUGVyc29uYWxEYXRhVHlwZSkge1xuICAgICAgICB0aGlzLl9kYXRhVHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgLy9maW5kXG4gICAgZ2V0IEZpbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kO1xuICAgIH1cblxuICAgIHNldCBGaW5kKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZpbmQgPSBudW07XG4gICAgfVxuXG4gICAgLy9zY2hlZHVsZVxuICAgIGdldCBTY2hlZHVsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlO1xuICAgIH1cblxuICAgIHNldCBTY2hlZHVsZShudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZSA9IG51bTtcbiAgICB9XG5cbiAgICAvL21lZXRcbiAgICBnZXQgTWVldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZXQ7XG4gICAgfVxuXG4gICAgc2V0IE1lZXQobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWVldCA9IG51bTtcbiAgICB9XG5cbiAgICAvL3N1Ym1pdFxuICAgIGdldCBTdWJtaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJtaXQ7XG4gICAgfVxuXG4gICAgc2V0IFN1Ym1pdChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdWJtaXQgPSBudW0gO1xuICAgIH1cblxuICAgIC8vaW5mb3JjZVxuICAgIGdldCBJbmZvcmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5mb3JjZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IEluZm9yY2UobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5mb3JjZSA9IG51bTtcbiAgICB9XG5cbiAgICAvLyNlbmRyZWdpb25cblxuXG4gICAgZ2V0VG90YWxDb3VudCgpIDogbnVtYmVyIHtcbiAgICAgICBsZXQgc3VtID0gIHRoaXMuRmluZCArIHRoaXMuU2NoZWR1bGUgKyB0aGlzLk1lZXQgKyB0aGlzLlN1Ym1pdCArIHRoaXMuSW5mb3JjZTtcbiAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGdldFRvdGFsUG9pbnRzKCkgOiBudW1iZXIge1xuICAgICAgICBsZXQgc3VtID0gdGhpcy5nZXRGaW5kUG9pbnRzKCkgKyB0aGlzLmdldFNjaGVkdWxlUG9pbnRzKCkgKyB0aGlzLmdldE1lZXRQb2ludHMoKSArIHRoaXMuZ2V0U3VibWl0UG9pbnRzKCkgKyB0aGlzLmdldEluZm9yY2VQb2ludHMoKTtcbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBnZXREaWZmZXJlbnRQZXJjZW50YWdlKG51bWVyYXRvcjogbnVtYmVyLCBkZW5vbWluYXRvcjogbnVtYmVyKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChudW1lcmF0b3IgLyBkZW5vbWluYXRvcikgKiAxMDAgKTtcbiAgICB9XG5cblxuICAgIC8qXG4gICAgLy8gMSAxIDIgMTAgMiAgIGYgL3MgL20gL3N1IC9pXG4gICAgZ2V0RmluZFBvaW50cyhkb3Q6bnVtYmVyKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLkZpbmQgKiBkb3QgO1xuICAgIH1cblxuICAgIGdldFNjaGVkdWxlUG9pbnRzKGRvdDpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuU2NoZWR1bGUgICogZG90O1xuICAgIH1cblxuICAgIGdldE1lZXRQb2ludHMoZG90Om51bWJlcikgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5NZWV0ICogZG90O1xuICAgIH1cblxuICAgIGdldFN1Ym1pdFBvaW50cyhkb3Q6bnVtYmVyKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLlN1Ym1pdCAqIGRvdDtcbiAgICB9XG5cbiAgICBnZXRJbmZvcmNlUG9pbnRzKGRvdDpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuSW5mb3JjZSAgKiBkb3Q7XG4gICAgfVxuXG4gICAgLypcbiAgICBnZXREaWZmZXJlbnRQZXJjZW50YWdlKG51bWVyYXRvcjogbnVtYmVyLCBkZW5vbWluYXRvcjogbnVtYmVyLCBmaXhlZE51bTogbnVtYmVyKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoICggbnVtZXJhdG9yIC8gZGVub21pbmF0b3IgKSAqIDEwMCApLnRvRml4ZWQoZml4ZWROdW0pO1xuICAgIH1cbiAgICAqL1xuXG4gICAgXG5cbiAgICBnZXRGaW5kUG9pbnRzKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5GaW5kICogMSA7XG4gICAgfVxuXG4gICAgZ2V0U2NoZWR1bGVQb2ludHMoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLlNjaGVkdWxlICAqIDE7XG4gICAgfVxuXG4gICAgZ2V0TWVldFBvaW50cygpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTWVldCAqIDI7XG4gICAgfVxuXG4gICAgZ2V0U3VibWl0UG9pbnRzKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5TdWJtaXQgKiAxMDtcbiAgICB9XG5cbiAgICBnZXRJbmZvcmNlUG9pbnRzKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5JbmZvcmNlICAqIDI7XG4gICAgfVxuICAgIFxufVxuXG5cblxuXG4iXX0=