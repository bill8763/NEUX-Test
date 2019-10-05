/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from "@angular/common/http";
import { Injectable, Optional, Inject } from "@angular/core";
import { DeviceService } from "../device/device.service";
import { LoginMgrToken } from "../injectionToken/injection-token";
import { LoginTokenStore } from "../auth/login/LoginTokenStore";
import * as i0 from "@angular/core";
import * as i1 from "../device/device.service";
import * as i2 from "../auth/login/LoginTokenStore";
import * as i3 from "../injectionToken/injection-token";
export class defaultHeader {
    /**
     * @param {?} deviceService
     * @param {?} tokenStore
     * @param {?} customLoginMgr
     */
    constructor(deviceService, tokenStore, customLoginMgr) {
        this.deviceService = deviceService;
        this.tokenStore = tokenStore;
        this.customLoginMgr = customLoginMgr;
        this.token = '';
        this.version = '';
        if (this.customLoginMgr) {
            this.customLoginMgr.getToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                this.token = token;
            }));
        }
        else {
            this.tokenStore.getToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                this.token = token;
            }));
        }
        this.deviceService.getAppVersion().then((/**
         * @param {?} ver
         * @return {?}
         */
        (ver) => {
            this.version = ver;
        }));
    }
    /**
     * @return {?}
     */
    getHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token,
            'X-Date': new Date().toUTCString(),
            'X-Request-ID': Date.now().toString(),
            'X-Organization': '1',
            'X-Organization-Branch': '1',
            'X-Organization-User': '1',
            'X-API-Version': this.version,
        });
    }
}
defaultHeader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
defaultHeader.ctorParameters = () => [
    { type: DeviceService },
    { type: LoginTokenStore },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LoginMgrToken,] }] }
];
/** @nocollapse */ defaultHeader.ngInjectableDef = i0.defineInjectable({ factory: function defaultHeader_Factory() { return new defaultHeader(i0.inject(i1.DeviceService), i0.inject(i2.LoginTokenStore), i0.inject(i3.LoginMgrToken, 8)); }, token: defaultHeader, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    defaultHeader.prototype.token;
    /**
     * @type {?}
     * @private
     */
    defaultHeader.prototype.version;
    /**
     * @type {?}
     * @private
     */
    defaultHeader.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    defaultHeader.prototype.tokenStore;
    /**
     * @type {?}
     * @private
     */
    defaultHeader.prototype.customLoginMgr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL0RlZmF1bHRIZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBS2hFLE1BQU07Ozs7OztJQUlGLFlBQ1ksYUFBNEIsRUFDNUIsVUFBMkIsRUFDUSxjQUF5QjtRQUY1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUNRLG1CQUFjLEdBQWQsY0FBYyxDQUFXO1FBTGhFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBTWpCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQTtTQUNMO2FBQ0k7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQTtTQUNMO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLFdBQVcsQ0FBQztZQUNuQixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdkMsUUFBUSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3JDLGdCQUFnQixFQUFFLEdBQUc7WUFDckIsdUJBQXVCLEVBQUUsR0FBRztZQUM1QixxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTztTQUNoQyxDQUFDLENBQUE7SUFDTixDQUFDOzs7WUF0Q0osVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7WUFOUSxhQUFhO1lBRWIsZUFBZTs0Q0FZZixRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7O0lBTHJDLDhCQUFtQjs7Ozs7SUFDbkIsZ0NBQXFCOzs7OztJQUVqQixzQ0FBb0M7Ozs7O0lBQ3BDLG1DQUFtQzs7Ozs7SUFDbkMsdUNBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEZWZhdWx0TG9naW5NZ3IgfSBmcm9tIFwiLi4vYXV0aC9sb2dpbi9EZWZhdWx0TG9naW5NZ3JcIjtcbmltcG9ydCB7IElMb2dpbk1nciB9IGZyb20gXCIuLi9hdXRoL2xvZ2luL0xvZ2luTWdyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgUmVzdEhlYWRlciB9IGZyb20gXCIuL1Jlc3RIZWFkZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2RldmljZS9kZXZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9naW5NZ3JUb2tlbiB9IGZyb20gXCIuLi9pbmplY3Rpb25Ub2tlbi9pbmplY3Rpb24tdG9rZW5cIjtcbmltcG9ydCB7IExvZ2luVG9rZW5TdG9yZSB9IGZyb20gXCIuLi9hdXRoL2xvZ2luL0xvZ2luVG9rZW5TdG9yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIGRlZmF1bHRIZWFkZXIgaW1wbGVtZW50cyBSZXN0SGVhZGVyIHtcblxuICAgIHByaXZhdGUgdG9rZW4gPSAnJztcbiAgICBwcml2YXRlIHZlcnNpb24gPSAnJztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRva2VuU3RvcmU6IExvZ2luVG9rZW5TdG9yZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChMb2dpbk1nclRva2VuKSBwcml2YXRlIGN1c3RvbUxvZ2luTWdyOiBJTG9naW5NZ3JcbiAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tTG9naW5NZ3IpIHtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTG9naW5NZ3IuZ2V0VG9rZW4oKS5zdWJzY3JpYmUoKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5TdG9yZS5nZXRUb2tlbigpLnN1YnNjcmliZSgodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5nZXRBcHBWZXJzaW9uKCkudGhlbigodmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXI7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SGVhZGVyKCk6IEh0dHBIZWFkZXJzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJlYXJlciBcIiArIHRoaXMudG9rZW4sXG4gICAgICAgICAgICAnWC1EYXRlJzogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdC1JRCc6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICdYLU9yZ2FuaXphdGlvbic6ICcxJyxcbiAgICAgICAgICAgICdYLU9yZ2FuaXphdGlvbi1CcmFuY2gnOiAnMScsXG4gICAgICAgICAgICAnWC1Pcmdhbml6YXRpb24tVXNlcic6ICcxJyxcbiAgICAgICAgICAgICdYLUFQSS1WZXJzaW9uJzogdGhpcy52ZXJzaW9uLFxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=