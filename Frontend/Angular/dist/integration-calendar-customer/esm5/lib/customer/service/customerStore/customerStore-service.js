/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { CustomerFilterCriteria } from "../../components/bean/customer-filter-criteria";
import * as i0 from "@angular/core";
var CustomerStoreService = /** @class */ (function () {
    function CustomerStoreService() {
        this._customerState = CUSTOMER_STATE.DISPLAY;
        this._customerDetail = {
            ClientID: ""
        };
        this._customerList = [];
        this._customerCriteria = new CustomerFilterCriteria();
        this._stateBehaviorSubject = new BehaviorSubject(this._customerState);
        this._detailBehaviorSubject = new BehaviorSubject(this._customerDetail);
        this._listBehaviorSubject = new BehaviorSubject(this._customerList);
        this._criteriaBehaviorSubject = new BehaviorSubject(this._customerCriteria);
        this._detailIDSubject = new BehaviorSubject(this._customerDetail.ClientID);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    CustomerStoreService.prototype.setState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._customerState = state;
        this._stateBehaviorSubject.next(this._customerState);
    };
    ;
    /**
     * @return {?}
     */
    CustomerStoreService.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this._stateBehaviorSubject;
    };
    ;
    /**
     * @param {?} detail
     * @return {?}
     */
    CustomerStoreService.prototype.setCurrentCustomerDetail = /**
     * @param {?} detail
     * @return {?}
     */
    function (detail) {
        this._customerDetail = detail;
        this._detailBehaviorSubject.next(this._customerDetail);
        this._detailIDSubject.next(this._customerDetail.ClientID);
    };
    ;
    /**
     * @return {?}
     */
    CustomerStoreService.prototype.getCurrentCustomerDetail = /**
     * @return {?}
     */
    function () {
        return this._detailBehaviorSubject;
    };
    ;
    /**
     * @param {?} list
     * @return {?}
     */
    CustomerStoreService.prototype.setCustomerList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this._customerList = list;
        this._listBehaviorSubject.next(this._customerList);
    };
    ;
    /**
     * @return {?}
     */
    CustomerStoreService.prototype.getCustomerList = /**
     * @return {?}
     */
    function () {
        return this._listBehaviorSubject;
    };
    ;
    /**
     * @param {?} criteria
     * @return {?}
     */
    CustomerStoreService.prototype.setCriteria = /**
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        this._customerCriteria = criteria;
        this._criteriaBehaviorSubject.next(this._customerCriteria);
    };
    ;
    /**
     * @return {?}
     */
    CustomerStoreService.prototype.getCriteria = /**
     * @return {?}
     */
    function () {
        return this._criteriaBehaviorSubject;
    };
    ;
    /**
     * @return {?}
     */
    CustomerStoreService.prototype.getCustomerDetailID = /**
     * @return {?}
     */
    function () {
        return this._detailIDSubject;
    };
    CustomerStoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    CustomerStoreService.ctorParameters = function () { return []; };
    /** @nocollapse */ CustomerStoreService.ngInjectableDef = i0.defineInjectable({ factory: function CustomerStoreService_Factory() { return new CustomerStoreService(); }, token: CustomerStoreService, providedIn: "root" });
    return CustomerStoreService;
}());
export { CustomerStoreService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._stateBehaviorSubject;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._detailBehaviorSubject;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._listBehaviorSubject;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._criteriaBehaviorSubject;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._detailIDSubject;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._customerState;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._customerDetail;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._customerList;
    /**
     * @type {?}
     * @private
     */
    CustomerStoreService.prototype._customerCriteria;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
/** @enum {string} */
var CUSTOMER_STATE = {
    IMPORT: 'import',
    DISPLAY: 'display',
    EDIT: 'edit',
    ADD_SAVED: 'add saved',
    EDIT_SAVED: 'edit saved',
    FIRST: 'first',
};
export { CUSTOMER_STATE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJTdG9yZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9jdXN0b21lclN0b3JlL2N1c3RvbWVyU3RvcmUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUd4RjtJQWdCSTtRQUVJLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ25CLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9FLENBQUM7Ozs7O0lBRUQsdUNBQVE7Ozs7SUFBUixVQUFTLEtBQXFCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXpELENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsdUNBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDdEMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsdURBQXdCOzs7O0lBQXhCLFVBQXlCLE1BQVc7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsdURBQXdCOzs7SUFBeEI7UUFDSSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRiw4Q0FBZTs7OztJQUFmLFVBQWdCLElBQXlCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsOENBQWU7OztJQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDckMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsMENBQVc7Ozs7SUFBWCxVQUFZLFFBQWdDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLDBDQUFXOzs7SUFBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3pDLENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsa0RBQW1COzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDOztnQkF4RUosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OzsrQkFSRDtDQStFQyxBQXpFRCxJQXlFQztTQXRFWSxvQkFBb0I7Ozs7OztJQUU3QixxREFBNEM7Ozs7O0lBQzVDLHNEQUE2Qzs7Ozs7SUFDN0Msb0RBQTJDOzs7OztJQUMzQyx3REFBK0M7Ozs7O0lBQy9DLGdEQUF1Qzs7Ozs7SUFFdkMsOENBQXVDOzs7OztJQUN2QywrQ0FBNkI7Ozs7O0lBQzdCLDZDQUEyQzs7Ozs7SUFDM0MsaURBQWlEOzs7Ozs7Ozs7Ozs7SUE4RGpELFFBQVMsUUFBUTtJQUNqQixTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNO0lBQ2IsV0FBWSxXQUFXO0lBQ3ZCLFlBQWEsWUFBWTtJQUN6QixPQUFRLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDdXN0b21lckl0ZW0gfSBmcm9tIFwiLi4vbW9kZWwvQ3VzdG9tZXJJdGVtXCI7XG5pbXBvcnQgeyBDdXN0b21lckZpbHRlckNyaXRlcmlhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmVhbi9jdXN0b21lci1maWx0ZXItY3JpdGVyaWFcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN0b3JlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9zdGF0ZUJlaGF2aW9yU3ViamVjdDogU3ViamVjdDxhbnk+O1xuICAgIHByaXZhdGUgX2RldGFpbEJlaGF2aW9yU3ViamVjdDogU3ViamVjdDxhbnk+O1xuICAgIHByaXZhdGUgX2xpc3RCZWhhdmlvclN1YmplY3Q6IFN1YmplY3Q8YW55PjtcbiAgICBwcml2YXRlIF9jcml0ZXJpYUJlaGF2aW9yU3ViamVjdDogU3ViamVjdDxhbnk+O1xuICAgIHByaXZhdGUgX2RldGFpbElEU3ViamVjdDogU3ViamVjdDxhbnk+O1xuXG4gICAgcHJpdmF0ZSBfY3VzdG9tZXJTdGF0ZTogQ1VTVE9NRVJfU1RBVEU7XG4gICAgcHJpdmF0ZSBfY3VzdG9tZXJEZXRhaWw6IGFueTtcbiAgICBwcml2YXRlIF9jdXN0b21lckxpc3Q6IEFycmF5PEN1c3RvbWVySXRlbT47XG4gICAgcHJpdmF0ZSBfY3VzdG9tZXJDcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbWVyU3RhdGUgPSBDVVNUT01FUl9TVEFURS5ESVNQTEFZO1xuICAgICAgICB0aGlzLl9jdXN0b21lckRldGFpbCA9IHtcbiAgICAgICAgICAgIENsaWVudElEOiBcIlwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2N1c3RvbWVyTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9jdXN0b21lckNyaXRlcmlhID0gbmV3IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEoKTtcbiAgICAgICAgdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2N1c3RvbWVyU3RhdGUpO1xuICAgICAgICB0aGlzLl9kZXRhaWxCZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2N1c3RvbWVyRGV0YWlsKTtcbiAgICAgICAgdGhpcy5fbGlzdEJlaGF2aW9yU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY3VzdG9tZXJMaXN0KTtcbiAgICAgICAgdGhpcy5fY3JpdGVyaWFCZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2N1c3RvbWVyQ3JpdGVyaWEpO1xuICAgICAgICB0aGlzLl9kZXRhaWxJRFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2N1c3RvbWVyRGV0YWlsLkNsaWVudElEKTtcblxuICAgIH1cblxuICAgIHNldFN0YXRlKHN0YXRlOiBDVVNUT01FUl9TVEFURSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jdXN0b21lclN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuX3N0YXRlQmVoYXZpb3JTdWJqZWN0Lm5leHQodGhpcy5fY3VzdG9tZXJTdGF0ZSk7XG5cbiAgICB9O1xuXG4gICAgZ2V0U3RhdGUoKTogT2JzZXJ2YWJsZTxDVVNUT01FUl9TVEFURT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3Q7XG4gICAgfTtcblxuICAgIHNldEN1cnJlbnRDdXN0b21lckRldGFpbChkZXRhaWw6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jdXN0b21lckRldGFpbCA9IGRldGFpbDtcbiAgICAgICAgdGhpcy5fZGV0YWlsQmVoYXZpb3JTdWJqZWN0Lm5leHQodGhpcy5fY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgICB0aGlzLl9kZXRhaWxJRFN1YmplY3QubmV4dCh0aGlzLl9jdXN0b21lckRldGFpbC5DbGllbnRJRCk7XG4gICAgfTtcblxuICAgIGdldEN1cnJlbnRDdXN0b21lckRldGFpbCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGV0YWlsQmVoYXZpb3JTdWJqZWN0O1xuICAgIH07XG5cbiAgICBzZXRDdXN0b21lckxpc3QobGlzdDogQXJyYXk8Q3VzdG9tZXJJdGVtPik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jdXN0b21lckxpc3QgPSBsaXN0O1xuICAgICAgICB0aGlzLl9saXN0QmVoYXZpb3JTdWJqZWN0Lm5leHQodGhpcy5fY3VzdG9tZXJMaXN0KTtcbiAgICB9O1xuXG4gICAgZ2V0Q3VzdG9tZXJMaXN0KCk6IE9ic2VydmFibGU8QXJyYXk8Q3VzdG9tZXJJdGVtPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdEJlaGF2aW9yU3ViamVjdDtcbiAgICB9O1xuXG4gICAgc2V0Q3JpdGVyaWEoY3JpdGVyaWE6IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY3VzdG9tZXJDcml0ZXJpYSA9IGNyaXRlcmlhO1xuICAgICAgICB0aGlzLl9jcml0ZXJpYUJlaGF2aW9yU3ViamVjdC5uZXh0KHRoaXMuX2N1c3RvbWVyQ3JpdGVyaWEpO1xuICAgIH07XG5cbiAgICBnZXRDcml0ZXJpYSgpOiBPYnNlcnZhYmxlPEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyaXRlcmlhQmVoYXZpb3JTdWJqZWN0O1xuICAgIH07XG5cbiAgICBnZXRDdXN0b21lckRldGFpbElEKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXRhaWxJRFN1YmplY3Q7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBDVVNUT01FUl9TVEFURSB7XG4gICAgSU1QT1JUID0gJ2ltcG9ydCcsXG4gICAgRElTUExBWSA9ICdkaXNwbGF5JyxcbiAgICBFRElUID0gJ2VkaXQnLFxuICAgIEFERF9TQVZFRCA9ICdhZGQgc2F2ZWQnLFxuICAgIEVESVRfU0FWRUQgPSAnZWRpdCBzYXZlZCcsXG4gICAgRklSU1QgPSAnZmlyc3QnXG59Il19