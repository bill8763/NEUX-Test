/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, NgZone, Optional } from '@angular/core';
import { AuthError } from '../AuthObject';
import { checkTimeoutToken, ConfigToken, timeoutActionToken } from '../../injectionToken';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../injectionToken/injection-token";
export class TimeoutService {
    /**
     * @param {?} APP_CONFIG
     * @param {?} timeoutCheck
     * @param {?} timeoutAction
     * @param {?} zone
     */
    constructor(APP_CONFIG, timeoutCheck, timeoutAction, zone) {
        this.APP_CONFIG = APP_CONFIG;
        this.timeoutCheck = timeoutCheck;
        this.timeoutAction = timeoutAction;
        this.zone = zone;
        this.seconds = 0;
        this.reaminingSubject = new BehaviorSubject(this.seconds);
        this._interval = null;
        this.reset_seconds = this.APP_CONFIG[this.APP_CONFIG.ENV].TIMEOUT;
        this.seconds = this.reset_seconds;
    }
    /**
     * @return {?}
     */
    reset() {
        if (this.timeoutCheck)
            this.timeoutCheck.reset();
        else {
            this.seconds = this.reset_seconds;
        }
    }
    /**
     * @return {?}
     */
    init() {
        if (this.timeoutCheck) {
            this.timeoutCheck.init();
        }
        else {
            if (this._interval != null) {
                clearInterval(this._interval);
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._interval = setInterval((/**
                 * @return {?}
                 */
                () => {
                    this.seconds--;
                    this.reaminingSubject.next(this.seconds);
                    if (this.seconds <= 0) {
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            clearInterval(this._interval);
                            this._interval = null;
                            console.log('timeout!!');
                            if (this.timeoutAction) {
                                this.timeoutAction.timeoutAction();
                            }
                        }));
                    }
                }), 1000);
            }));
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.timeoutCheck)
            this.timeoutCheck.clear();
        else {
            if (this._interval != null) {
                clearInterval(this._interval);
                this._interval = null;
            }
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    authRoute(payload) {
        if (!payload.status)
            return payload;
        payload.status = !this.isTimeout();
        if (!payload.status) {
            payload.error = AuthError.TIMEOUT;
        }
        return payload;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    authAction(payload) {
        if (!payload.status)
            return payload;
        payload.status = !this.isTimeout();
        if (!payload.status) {
            payload.error = AuthError.TIMEOUT;
        }
        return payload;
    }
    /**
     * @return {?}
     */
    getTimeoutRemainingSecond() {
        return this.reaminingSubject.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    isTimeout() {
        if (this.timeoutCheck)
            return this.timeoutCheck.checkTimeout();
        else
            return this.seconds <= 0;
    }
}
TimeoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
TimeoutService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ConfigToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [checkTimeoutToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [timeoutActionToken,] }] },
    { type: NgZone }
];
/** @nocollapse */ TimeoutService.ngInjectableDef = i0.defineInjectable({ factory: function TimeoutService_Factory() { return new TimeoutService(i0.inject(i1.ConfigToken), i0.inject(i1.checkTimeoutToken, 8), i0.inject(i1.timeoutActionToken, 8), i0.inject(i0.NgZone)); }, token: TimeoutService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype.seconds;
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype.reset_seconds;
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype.reaminingSubject;
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype._interval;
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype.APP_CONFIG;
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype.timeoutCheck;
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype.timeoutAction;
    /**
     * @type {?}
     * @private
     */
    TimeoutService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL3RpbWVvdXQvdGltZW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JFLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRzFGLE9BQU8sRUFBVyxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7OztBQU01RCxNQUFNOzs7Ozs7O0lBT0osWUFDK0IsVUFBZSxFQUNHLFlBQTBCLEVBQ3pCLGFBQTRCLEVBQ3BFLElBQVk7UUFIUyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ0csaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDcEUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVRkLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIscUJBQWdCLEdBQW9CLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBT3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkI7WUFDSCxJQUFJ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Qjs7OzRDQVNJLE1BQU0sU0FBQyxXQUFXOzRDQUNsQixRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs0Q0FDcEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxrQkFBa0I7WUF2QmIsTUFBTTs7Ozs7Ozs7SUFlakMsaUNBQTRCOzs7OztJQUM1Qix1Q0FBOEI7Ozs7O0lBQzlCLDBDQUE4RTs7Ozs7SUFDOUUsbUNBQXlCOzs7OztJQUd2QixvQ0FBNEM7Ozs7O0lBQzVDLHNDQUF5RTs7Ozs7SUFDekUsdUNBQTRFOzs7OztJQUM1RSw4QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE5nWm9uZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBdXRoUm91dGUgfSBmcm9tICcuLi9BdXRoUm91dGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElBdXRoQWN0aW9uIH0gZnJvbSAnLi4vQXV0aEFjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aE9iamVjdCwgQXV0aEVycm9yIH0gZnJvbSAnLi4vQXV0aE9iamVjdCc7XG5pbXBvcnQgeyBjaGVja1RpbWVvdXRUb2tlbiwgQ29uZmlnVG9rZW4sIHRpbWVvdXRBY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuJztcbmltcG9ydCB7IGNoZWNrVGltZW91dCB9IGZyb20gJy4vY2hlY2tUaW1lb3V0LmludGVyZmFjZSc7XG5pbXBvcnQgeyB0aW1lb3V0QWN0aW9uIH0gZnJvbSAnLi90aW1lb3V0QWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lb3V0U2VydmljZSBpbXBsZW1lbnRzIElBdXRoUm91dGUsIElBdXRoQWN0aW9uIHtcblxuICBwcml2YXRlIHNlY29uZHM6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgcmVzZXRfc2Vjb25kczogbnVtYmVyO1xuICBwcml2YXRlIHJlYW1pbmluZ1N1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5zZWNvbmRzKTtcbiAgcHJpdmF0ZSBfaW50ZXJ2YWwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ29uZmlnVG9rZW4pIHByaXZhdGUgQVBQX0NPTkZJRzogYW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY2hlY2tUaW1lb3V0VG9rZW4pIHByaXZhdGUgdGltZW91dENoZWNrOiBjaGVja1RpbWVvdXQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdCh0aW1lb3V0QWN0aW9uVG9rZW4pIHByaXZhdGUgdGltZW91dEFjdGlvbjogdGltZW91dEFjdGlvbixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMucmVzZXRfc2Vjb25kcyA9IHRoaXMuQVBQX0NPTkZJR1t0aGlzLkFQUF9DT05GSUcuRU5WXS5USU1FT1VUO1xuICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMucmVzZXRfc2Vjb25kcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXRDaGVjaylcbiAgICAgIHRoaXMudGltZW91dENoZWNrLnJlc2V0KCk7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZHMgPSB0aGlzLnJlc2V0X3NlY29uZHM7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0Q2hlY2spIHtcbiAgICAgIHRoaXMudGltZW91dENoZWNrLmluaXQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Vjb25kcy0tO1xuICAgICAgICAgIHRoaXMucmVhbWluaW5nU3ViamVjdC5uZXh0KHRoaXMuc2Vjb25kcyk7XG4gICAgICAgICAgaWYgKHRoaXMuc2Vjb25kcyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVvdXQhIScpO1xuICAgICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0QWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0QWN0aW9uLnRpbWVvdXRBY3Rpb24oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0Q2hlY2spXG4gICAgICB0aGlzLnRpbWVvdXRDaGVjay5jbGVhcigpO1xuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ludGVydmFsICE9IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhdXRoUm91dGUocGF5bG9hZDogQXV0aE9iamVjdCkge1xuICAgIGlmICghcGF5bG9hZC5zdGF0dXMpXG4gICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICBwYXlsb2FkLnN0YXR1cyA9ICF0aGlzLmlzVGltZW91dCgpO1xuICAgIGlmICghcGF5bG9hZC5zdGF0dXMpIHtcbiAgICAgIHBheWxvYWQuZXJyb3IgPSBBdXRoRXJyb3IuVElNRU9VVDtcbiAgICB9XG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH1cbiAgYXV0aEFjdGlvbihwYXlsb2FkOiBBdXRoT2JqZWN0KSB7XG4gICAgaWYgKCFwYXlsb2FkLnN0YXR1cylcbiAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIHBheWxvYWQuc3RhdHVzID0gIXRoaXMuaXNUaW1lb3V0KCk7XG4gICAgaWYgKCFwYXlsb2FkLnN0YXR1cykge1xuICAgICAgcGF5bG9hZC5lcnJvciA9IEF1dGhFcnJvci5USU1FT1VUO1xuICAgIH1cbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuXG4gIGdldFRpbWVvdXRSZW1haW5pbmdTZWNvbmQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFtaW5pbmdTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHByaXZhdGUgaXNUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXRDaGVjaylcbiAgICAgIHJldHVybiB0aGlzLnRpbWVvdXRDaGVjay5jaGVja1RpbWVvdXQoKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gdGhpcy5zZWNvbmRzIDw9IDA7XG4gIH1cbn1cbiJdfQ==