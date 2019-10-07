/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { AuthError } from '../AuthObject';
import { Subject, BehaviorSubject } from 'rxjs';
import { ConfigToken } from '../../injectionToken/injection-token';
import * as i0 from "@angular/core";
import * as i1 from "../../injectionToken/injection-token";
/** @enum {number} */
var ACTION_STATUS = {
    AVAILABLE: 0,
    PENDING: 1,
};
export { ACTION_STATUS };
ACTION_STATUS[ACTION_STATUS.AVAILABLE] = 'AVAILABLE';
ACTION_STATUS[ACTION_STATUS.PENDING] = 'PENDING';
var ActionEvent = /** @class */ (function () {
    function ActionEvent() {
    }
    return ActionEvent;
}());
export { ActionEvent };
if (false) {
    /** @type {?} */
    ActionEvent.prototype.action;
    /** @type {?} */
    ActionEvent.prototype.event;
}
var ActionService = /** @class */ (function () {
    function ActionService(APP_CONFIG) {
        this.APP_CONFIG = APP_CONFIG;
        this.currentAction = null;
        this.actionIntervalSec = 800;
        this.status = ACTION_STATUS.AVAILABLE;
        this.statusSubject = new BehaviorSubject(this.status);
        this.actionSuscribe = new Subject();
        this.actionIntervalSec = this.APP_CONFIG.ACTION_INTERVAL;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ActionService.prototype.authAction = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        if (this.status === ACTION_STATUS.AVAILABLE) {
            this.status = ACTION_STATUS.PENDING;
            this.statusSubject.next(this.status);
            //Prevent fast click
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.status = ACTION_STATUS.AVAILABLE;
                _this.statusSubject.next(_this.status);
            }), this.actionIntervalSec);
        }
        else {
            //Other Action is active
            payload.status = false;
            payload.error = AuthError.PENDING_ACTION;
        }
        return payload;
    };
    /**
     * @return {?}
     */
    ActionService.prototype.getCurrentAction = /**
     * @return {?}
     */
    function () {
        return this.currentAction;
    };
    /**
     * @return {?}
     */
    ActionService.prototype.getActionStatus = /**
     * @return {?}
     */
    function () {
        return this.statusSubject.asObservable();
    };
    /**
     * @return {?}
     */
    ActionService.prototype.onActionClick = /**
     * @return {?}
     */
    function () {
        return this.actionSuscribe.asObservable();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ActionService.prototype.actionClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.actionSuscribe.next(event);
    };
    ActionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ActionService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
    ]; };
    /** @nocollapse */ ActionService.ngInjectableDef = i0.defineInjectable({ factory: function ActionService_Factory() { return new ActionService(i0.inject(i1.ConfigToken)); }, token: ActionService, providedIn: "root" });
    return ActionService;
}());
export { ActionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype.currentAction;
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype.actionIntervalSec;
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype.status;
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype.statusSubject;
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype.actionSuscribe;
    /**
     * @type {?}
     * @private
     */
    ActionService.prototype.APP_CONFIG;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2F1dGgvYWN0aW9uL2FjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7SUFHakUsWUFBUztJQUNULFVBQU87Ozs7O0FBR1Q7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsNkJBQXNCOztJQUN0Qiw0QkFBa0I7O0FBR3BCO0lBS0UsdUJBQytCLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBS3RDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN4QixXQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxrQkFBYSxHQUEyQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsbUJBQWMsR0FBeUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVAzRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFRRCxrQ0FBVTs7OztJQUFWLFVBQVcsT0FBbUI7UUFBOUIsaUJBZ0JDO1FBZkMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxvQkFBb0I7WUFDcEIsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxHQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQzVCO2FBQ0k7WUFDSCx3QkFBd0I7WUFDeEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHdDQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCx1Q0FBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHFDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxLQUFrQjtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFqREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dEQUlJLE1BQU0sU0FBQyxXQUFXOzs7d0JBdEJ2QjtDQW9FQyxBQXBERCxJQW9EQztTQWpEWSxhQUFhOzs7Ozs7SUFReEIsc0NBQTZCOzs7OztJQUM3QiwwQ0FBZ0M7Ozs7O0lBQ2hDLCtCQUF5Qzs7Ozs7SUFDekMsc0NBQWlGOzs7OztJQUNqRix1Q0FBNkQ7Ozs7O0lBVDNELG1DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUF1dGhBY3Rpb24gfSBmcm9tICcuLi9BdXRoQWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoT2JqZWN0LCBBdXRoRXJyb3IgfSBmcm9tICcuLi9BdXRoT2JqZWN0JztcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlnVG9rZW4gfSBmcm9tICcuLi8uLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW4nO1xuXG5leHBvcnQgZW51bSBBQ1RJT05fU1RBVFVTIHtcbiAgQVZBSUxBQkxFLFxuICBQRU5ESU5HXG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25FdmVudCB7XG4gIHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiAgcHVibGljIGV2ZW50OiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBJQXV0aEFjdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWdUb2tlbikgcHJpdmF0ZSBBUFBfQ09ORklHOiBhbnlcbiAgKSB7XG4gICAgdGhpcy5hY3Rpb25JbnRlcnZhbFNlYyA9IHRoaXMuQVBQX0NPTkZJRy5BQ1RJT05fSU5URVJWQUw7XG4gIH1cblxuICBwcml2YXRlIGN1cnJlbnRBY3Rpb24gPSBudWxsO1xuICBwcml2YXRlIGFjdGlvbkludGVydmFsU2VjID0gODAwO1xuICBwcml2YXRlIHN0YXR1cyA9IEFDVElPTl9TVEFUVVMuQVZBSUxBQkxFO1xuICBwcml2YXRlIHN0YXR1c1N1YmplY3Q6IFN1YmplY3Q8QUNUSU9OX1NUQVRVUz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuc3RhdHVzKTtcbiAgcHJpdmF0ZSBhY3Rpb25TdXNjcmliZTogU3ViamVjdDxBY3Rpb25FdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGF1dGhBY3Rpb24ocGF5bG9hZDogQXV0aE9iamVjdCk6IEF1dGhPYmplY3Qge1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gQUNUSU9OX1NUQVRVUy5BVkFJTEFCTEUpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gQUNUSU9OX1NUQVRVUy5QRU5ESU5HO1xuICAgICAgdGhpcy5zdGF0dXNTdWJqZWN0Lm5leHQodGhpcy5zdGF0dXMpO1xuICAgICAgLy9QcmV2ZW50IGZhc3QgY2xpY2tcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEFDVElPTl9TVEFUVVMuQVZBSUxBQkxFO1xuICAgICAgICB0aGlzLnN0YXR1c1N1YmplY3QubmV4dCh0aGlzLnN0YXR1cyk7XG4gICAgICB9LCB0aGlzLmFjdGlvbkludGVydmFsU2VjKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL090aGVyIEFjdGlvbiBpcyBhY3RpdmVcbiAgICAgIHBheWxvYWQuc3RhdHVzID0gZmFsc2U7XG4gICAgICBwYXlsb2FkLmVycm9yID0gQXV0aEVycm9yLlBFTkRJTkdfQUNUSU9OO1xuICAgIH1cbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuXG4gIGdldEN1cnJlbnRBY3Rpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9uO1xuICB9XG5cbiAgZ2V0QWN0aW9uU3RhdHVzKCk6IE9ic2VydmFibGU8QUNUSU9OX1NUQVRVUz4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvbkFjdGlvbkNsaWNrKCk6IE9ic2VydmFibGU8QWN0aW9uRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25TdXNjcmliZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGFjdGlvbkNsaWNrKGV2ZW50OiBBY3Rpb25FdmVudCkge1xuICAgIHRoaXMuYWN0aW9uU3VzY3JpYmUubmV4dChldmVudCk7XG4gIH1cblxuXG59XG4iXX0=