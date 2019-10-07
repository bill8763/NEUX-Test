/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { CustomerFilterCriteria } from "../../components/bean/customer-filter-criteria";
import * as i0 from "@angular/core";
export class CustomerStoreService {
    constructor() {
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
    setState(state) {
        this._customerState = state;
        this._stateBehaviorSubject.next(this._customerState);
    }
    ;
    /**
     * @return {?}
     */
    getState() {
        return this._stateBehaviorSubject;
    }
    ;
    /**
     * @param {?} detail
     * @return {?}
     */
    setCurrentCustomerDetail(detail) {
        this._customerDetail = detail;
        this._detailBehaviorSubject.next(this._customerDetail);
        this._detailIDSubject.next(this._customerDetail.ClientID);
    }
    ;
    /**
     * @return {?}
     */
    getCurrentCustomerDetail() {
        return this._detailBehaviorSubject;
    }
    ;
    /**
     * @param {?} list
     * @return {?}
     */
    setCustomerList(list) {
        this._customerList = list;
        this._listBehaviorSubject.next(this._customerList);
    }
    ;
    /**
     * @return {?}
     */
    getCustomerList() {
        return this._listBehaviorSubject;
    }
    ;
    /**
     * @param {?} criteria
     * @return {?}
     */
    setCriteria(criteria) {
        this._customerCriteria = criteria;
        this._criteriaBehaviorSubject.next(this._customerCriteria);
    }
    ;
    /**
     * @return {?}
     */
    getCriteria() {
        return this._criteriaBehaviorSubject;
    }
    ;
    /**
     * @return {?}
     */
    getCustomerDetailID() {
        return this._detailIDSubject;
    }
}
CustomerStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CustomerStoreService.ctorParameters = () => [];
/** @nocollapse */ CustomerStoreService.ngInjectableDef = i0.defineInjectable({ factory: function CustomerStoreService_Factory() { return new CustomerStoreService(); }, token: CustomerStoreService, providedIn: "root" });
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
const CUSTOMER_STATE = {
    IMPORT: 'import',
    DISPLAY: 'display',
    EDIT: 'edit',
    ADD_SAVED: 'add saved',
    EDIT_SAVED: 'edit saved',
    FIRST: 'first',
};
export { CUSTOMER_STATE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJTdG9yZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvaW50ZWdyYXRpb24tY2FsZW5kYXItY3VzdG9tZXIvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tZXIvc2VydmljZS9jdXN0b21lclN0b3JlL2N1c3RvbWVyU3RvcmUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQU14RixNQUFNO0lBYUY7UUFFSSxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvRSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFxQjtRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUN0QyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRix3QkFBd0IsQ0FBQyxNQUFXO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLHdCQUF3QjtRQUNwQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixlQUFlLENBQUMsSUFBeUI7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixlQUFlO1FBQ1gsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDckMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsV0FBVyxDQUFDLFFBQWdDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN6QyxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7OztZQXhFSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7OztJQUdHLHFEQUE0Qzs7Ozs7SUFDNUMsc0RBQTZDOzs7OztJQUM3QyxvREFBMkM7Ozs7O0lBQzNDLHdEQUErQzs7Ozs7SUFDL0MsZ0RBQXVDOzs7OztJQUV2Qyw4Q0FBdUM7Ozs7O0lBQ3ZDLCtDQUE2Qjs7Ozs7SUFDN0IsNkNBQTJDOzs7OztJQUMzQyxpREFBaUQ7Ozs7Ozs7Ozs7OztJQThEakQsUUFBUyxRQUFRO0lBQ2pCLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07SUFDYixXQUFZLFdBQVc7SUFDdkIsWUFBYSxZQUFZO0lBQ3pCLE9BQVEsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEN1c3RvbWVySXRlbSB9IGZyb20gXCIuLi9tb2RlbC9DdXN0b21lckl0ZW1cIjtcbmltcG9ydCB7IEN1c3RvbWVyRmlsdGVyQ3JpdGVyaWEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iZWFuL2N1c3RvbWVyLWZpbHRlci1jcml0ZXJpYVwiO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU3RvcmVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX3N0YXRlQmVoYXZpb3JTdWJqZWN0OiBTdWJqZWN0PGFueT47XG4gICAgcHJpdmF0ZSBfZGV0YWlsQmVoYXZpb3JTdWJqZWN0OiBTdWJqZWN0PGFueT47XG4gICAgcHJpdmF0ZSBfbGlzdEJlaGF2aW9yU3ViamVjdDogU3ViamVjdDxhbnk+O1xuICAgIHByaXZhdGUgX2NyaXRlcmlhQmVoYXZpb3JTdWJqZWN0OiBTdWJqZWN0PGFueT47XG4gICAgcHJpdmF0ZSBfZGV0YWlsSURTdWJqZWN0OiBTdWJqZWN0PGFueT47XG5cbiAgICBwcml2YXRlIF9jdXN0b21lclN0YXRlOiBDVVNUT01FUl9TVEFURTtcbiAgICBwcml2YXRlIF9jdXN0b21lckRldGFpbDogYW55O1xuICAgIHByaXZhdGUgX2N1c3RvbWVyTGlzdDogQXJyYXk8Q3VzdG9tZXJJdGVtPjtcbiAgICBwcml2YXRlIF9jdXN0b21lckNyaXRlcmlhOiBDdXN0b21lckZpbHRlckNyaXRlcmlhXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHtcbiAgICAgICAgdGhpcy5fY3VzdG9tZXJTdGF0ZSA9IENVU1RPTUVSX1NUQVRFLkRJU1BMQVk7XG4gICAgICAgIHRoaXMuX2N1c3RvbWVyRGV0YWlsID0ge1xuICAgICAgICAgICAgQ2xpZW50SUQ6IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY3VzdG9tZXJMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX2N1c3RvbWVyQ3JpdGVyaWEgPSBuZXcgQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSgpO1xuICAgICAgICB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY3VzdG9tZXJTdGF0ZSk7XG4gICAgICAgIHRoaXMuX2RldGFpbEJlaGF2aW9yU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY3VzdG9tZXJEZXRhaWwpO1xuICAgICAgICB0aGlzLl9saXN0QmVoYXZpb3JTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9jdXN0b21lckxpc3QpO1xuICAgICAgICB0aGlzLl9jcml0ZXJpYUJlaGF2aW9yU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY3VzdG9tZXJDcml0ZXJpYSk7XG4gICAgICAgIHRoaXMuX2RldGFpbElEU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY3VzdG9tZXJEZXRhaWwuQ2xpZW50SUQpO1xuXG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGU6IENVU1RPTUVSX1NUQVRFKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2N1c3RvbWVyU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5fc3RhdGVCZWhhdmlvclN1YmplY3QubmV4dCh0aGlzLl9jdXN0b21lclN0YXRlKTtcblxuICAgIH07XG5cbiAgICBnZXRTdGF0ZSgpOiBPYnNlcnZhYmxlPENVU1RPTUVSX1NUQVRFPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZUJlaGF2aW9yU3ViamVjdDtcbiAgICB9O1xuXG4gICAgc2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKGRldGFpbDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2N1c3RvbWVyRGV0YWlsID0gZGV0YWlsO1xuICAgICAgICB0aGlzLl9kZXRhaWxCZWhhdmlvclN1YmplY3QubmV4dCh0aGlzLl9jdXN0b21lckRldGFpbCk7XG4gICAgICAgIHRoaXMuX2RldGFpbElEU3ViamVjdC5uZXh0KHRoaXMuX2N1c3RvbWVyRGV0YWlsLkNsaWVudElEKTtcbiAgICB9O1xuXG4gICAgZ2V0Q3VycmVudEN1c3RvbWVyRGV0YWlsKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXRhaWxCZWhhdmlvclN1YmplY3Q7XG4gICAgfTtcblxuICAgIHNldEN1c3RvbWVyTGlzdChsaXN0OiBBcnJheTxDdXN0b21lckl0ZW0+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2N1c3RvbWVyTGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMuX2xpc3RCZWhhdmlvclN1YmplY3QubmV4dCh0aGlzLl9jdXN0b21lckxpc3QpO1xuICAgIH07XG5cbiAgICBnZXRDdXN0b21lckxpc3QoKTogT2JzZXJ2YWJsZTxBcnJheTxDdXN0b21lckl0ZW0+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0QmVoYXZpb3JTdWJqZWN0O1xuICAgIH07XG5cbiAgICBzZXRDcml0ZXJpYShjcml0ZXJpYTogQ3VzdG9tZXJGaWx0ZXJDcml0ZXJpYSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jdXN0b21lckNyaXRlcmlhID0gY3JpdGVyaWE7XG4gICAgICAgIHRoaXMuX2NyaXRlcmlhQmVoYXZpb3JTdWJqZWN0Lm5leHQodGhpcy5fY3VzdG9tZXJDcml0ZXJpYSk7XG4gICAgfTtcblxuICAgIGdldENyaXRlcmlhKCk6IE9ic2VydmFibGU8Q3VzdG9tZXJGaWx0ZXJDcml0ZXJpYT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JpdGVyaWFCZWhhdmlvclN1YmplY3Q7XG4gICAgfTtcblxuICAgIGdldEN1c3RvbWVyRGV0YWlsSUQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RldGFpbElEU3ViamVjdDtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIENVU1RPTUVSX1NUQVRFIHtcbiAgICBJTVBPUlQgPSAnaW1wb3J0JyxcbiAgICBESVNQTEFZID0gJ2Rpc3BsYXknLFxuICAgIEVESVQgPSAnZWRpdCcsXG4gICAgQUREX1NBVkVEID0gJ2FkZCBzYXZlZCcsXG4gICAgRURJVF9TQVZFRCA9ICdlZGl0IHNhdmVkJyxcbiAgICBGSVJTVCA9ICdmaXJzdCdcbn0iXX0=