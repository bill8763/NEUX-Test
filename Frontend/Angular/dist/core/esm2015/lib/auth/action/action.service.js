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
const ACTION_STATUS = {
    AVAILABLE: 0,
    PENDING: 1,
};
export { ACTION_STATUS };
ACTION_STATUS[ACTION_STATUS.AVAILABLE] = 'AVAILABLE';
ACTION_STATUS[ACTION_STATUS.PENDING] = 'PENDING';
export class ActionEvent {
}
if (false) {
    /** @type {?} */
    ActionEvent.prototype.action;
    /** @type {?} */
    ActionEvent.prototype.event;
}
export class ActionService {
    /**
     * @param {?} APP_CONFIG
     */
    constructor(APP_CONFIG) {
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
    authAction(payload) {
        if (this.status === ACTION_STATUS.AVAILABLE) {
            this.status = ACTION_STATUS.PENDING;
            this.statusSubject.next(this.status);
            //Prevent fast click
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.status = ACTION_STATUS.AVAILABLE;
                this.statusSubject.next(this.status);
            }), this.actionIntervalSec);
        }
        else {
            //Other Action is active
            payload.status = false;
            payload.error = AuthError.PENDING_ACTION;
        }
        return payload;
    }
    /**
     * @return {?}
     */
    getCurrentAction() {
        return this.currentAction;
    }
    /**
     * @return {?}
     */
    getActionStatus() {
        return this.statusSubject.asObservable();
    }
    /**
     * @return {?}
     */
    onActionClick() {
        return this.actionSuscribe.asObservable();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    actionClick(event) {
        this.actionSuscribe.next(event);
    }
}
ActionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ActionService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] }
];
/** @nocollapse */ ActionService.ngInjectableDef = i0.defineInjectable({ factory: function ActionService_Factory() { return new ActionService(i0.inject(i1.ConfigToken)); }, token: ActionService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2F1dGgvYWN0aW9uL2FjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7SUFHakUsWUFBUztJQUNULFVBQU87Ozs7O0FBR1QsTUFBTTtDQUdMOzs7SUFGQyw2QkFBc0I7O0lBQ3RCLDRCQUFrQjs7QUFNcEIsTUFBTTs7OztJQUVKLFlBQytCLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBS3RDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN4QixXQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxrQkFBYSxHQUEyQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsbUJBQWMsR0FBeUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVAzRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFRRCxVQUFVLENBQUMsT0FBbUI7UUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxvQkFBb0I7WUFDcEIsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsR0FBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM1QjthQUNJO1lBQ0gsd0JBQXdCO1lBQ3hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztTQUMxQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBa0I7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUlJLE1BQU0sU0FBQyxXQUFXOzs7Ozs7OztJQUtyQixzQ0FBNkI7Ozs7O0lBQzdCLDBDQUFnQzs7Ozs7SUFDaEMsK0JBQXlDOzs7OztJQUN6QyxzQ0FBaUY7Ozs7O0lBQ2pGLHVDQUE2RDs7Ozs7SUFUM0QsbUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQXV0aEFjdGlvbiB9IGZyb20gJy4uL0F1dGhBY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhPYmplY3QsIEF1dGhFcnJvciB9IGZyb20gJy4uL0F1dGhPYmplY3QnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWdUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5cbmV4cG9ydCBlbnVtIEFDVElPTl9TVEFUVVMge1xuICBBVkFJTEFCTEUsXG4gIFBFTkRJTkdcbn1cblxuZXhwb3J0IGNsYXNzIEFjdGlvbkV2ZW50IHtcbiAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgZXZlbnQ6IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIElBdXRoQWN0aW9uIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENvbmZpZ1Rva2VuKSBwcml2YXRlIEFQUF9DT05GSUc6IGFueVxuICApIHtcbiAgICB0aGlzLmFjdGlvbkludGVydmFsU2VjID0gdGhpcy5BUFBfQ09ORklHLkFDVElPTl9JTlRFUlZBTDtcbiAgfVxuXG4gIHByaXZhdGUgY3VycmVudEFjdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgYWN0aW9uSW50ZXJ2YWxTZWMgPSA4MDA7XG4gIHByaXZhdGUgc3RhdHVzID0gQUNUSU9OX1NUQVRVUy5BVkFJTEFCTEU7XG4gIHByaXZhdGUgc3RhdHVzU3ViamVjdDogU3ViamVjdDxBQ1RJT05fU1RBVFVTPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5zdGF0dXMpO1xuICBwcml2YXRlIGFjdGlvblN1c2NyaWJlOiBTdWJqZWN0PEFjdGlvbkV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgYXV0aEFjdGlvbihwYXlsb2FkOiBBdXRoT2JqZWN0KTogQXV0aE9iamVjdCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSBBQ1RJT05fU1RBVFVTLkFWQUlMQUJMRSkge1xuICAgICAgdGhpcy5zdGF0dXMgPSBBQ1RJT05fU1RBVFVTLlBFTkRJTkc7XG4gICAgICB0aGlzLnN0YXR1c1N1YmplY3QubmV4dCh0aGlzLnN0YXR1cyk7XG4gICAgICAvL1ByZXZlbnQgZmFzdCBjbGlja1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gQUNUSU9OX1NUQVRVUy5BVkFJTEFCTEU7XG4gICAgICAgIHRoaXMuc3RhdHVzU3ViamVjdC5uZXh0KHRoaXMuc3RhdHVzKTtcbiAgICAgIH0sIHRoaXMuYWN0aW9uSW50ZXJ2YWxTZWMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vT3RoZXIgQWN0aW9uIGlzIGFjdGl2ZVxuICAgICAgcGF5bG9hZC5zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHBheWxvYWQuZXJyb3IgPSBBdXRoRXJyb3IuUEVORElOR19BQ1RJT047XG4gICAgfVxuICAgIHJldHVybiBwYXlsb2FkO1xuICB9XG5cbiAgZ2V0Q3VycmVudEFjdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb247XG4gIH1cblxuICBnZXRBY3Rpb25TdGF0dXMoKTogT2JzZXJ2YWJsZTxBQ1RJT05fU1RBVFVTPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG9uQWN0aW9uQ2xpY2soKTogT2JzZXJ2YWJsZTxBY3Rpb25FdmVudD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvblN1c2NyaWJlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgYWN0aW9uQ2xpY2soZXZlbnQ6IEFjdGlvbkV2ZW50KSB7XG4gICAgdGhpcy5hY3Rpb25TdXNjcmliZS5uZXh0KGV2ZW50KTtcbiAgfVxuXG5cbn1cbiJdfQ==