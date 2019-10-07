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
var defaultHeader = /** @class */ (function () {
    function defaultHeader(deviceService, tokenStore, customLoginMgr) {
        var _this = this;
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
            function (token) {
                _this.token = token;
            }));
        }
        else {
            this.tokenStore.getToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                _this.token = token;
            }));
        }
        this.deviceService.getAppVersion().then((/**
         * @param {?} ver
         * @return {?}
         */
        function (ver) {
            _this.version = ver;
        }));
    }
    /**
     * @return {?}
     */
    defaultHeader.prototype.getHeader = /**
     * @return {?}
     */
    function () {
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
    };
    defaultHeader.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    defaultHeader.ctorParameters = function () { return [
        { type: DeviceService },
        { type: LoginTokenStore },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LoginMgrToken,] }] }
    ]; };
    /** @nocollapse */ defaultHeader.ngInjectableDef = i0.defineInjectable({ factory: function defaultHeader_Factory() { return new defaultHeader(i0.inject(i1.DeviceService), i0.inject(i2.LoginTokenStore), i0.inject(i3.LoginMgrToken, 8)); }, token: defaultHeader, providedIn: "root" });
    return defaultHeader;
}());
export { defaultHeader };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXBpL0RlZmF1bHRIZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBRWhFO0lBT0ksdUJBQ1ksYUFBNEIsRUFDNUIsVUFBMkIsRUFDUSxjQUF5QjtRQUh4RSxpQkFrQkM7UUFqQlcsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDUSxtQkFBYyxHQUFkLGNBQWMsQ0FBVztRQUxoRSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQU1qQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUMzQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQTtTQUNMO2FBQ0k7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLEtBQUs7Z0JBQ3ZDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFBO1NBQ0w7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0ksT0FBTyxJQUFJLFdBQVcsQ0FBQztZQUNuQixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdkMsUUFBUSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3JDLGdCQUFnQixFQUFFLEdBQUc7WUFDckIsdUJBQXVCLEVBQUUsR0FBRztZQUM1QixxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTztTQUNoQyxDQUFDLENBQUE7SUFDTixDQUFDOztnQkF0Q0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7O2dCQU5RLGFBQWE7Z0JBRWIsZUFBZTtnREFZZixRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7Ozt3QkFwQnpDO0NBaURDLEFBdkNELElBdUNDO1NBcENZLGFBQWE7Ozs7OztJQUV0Qiw4QkFBbUI7Ozs7O0lBQ25CLGdDQUFxQjs7Ozs7SUFFakIsc0NBQW9DOzs7OztJQUNwQyxtQ0FBbUM7Ozs7O0lBQ25DLHVDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGVmYXVsdExvZ2luTWdyIH0gZnJvbSBcIi4uL2F1dGgvbG9naW4vRGVmYXVsdExvZ2luTWdyXCI7XG5pbXBvcnQgeyBJTG9naW5NZ3IgfSBmcm9tIFwiLi4vYXV0aC9sb2dpbi9Mb2dpbk1nci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFJlc3RIZWFkZXIgfSBmcm9tIFwiLi9SZXN0SGVhZGVyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gXCIuLi9kZXZpY2UvZGV2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvZ2luTWdyVG9rZW4gfSBmcm9tIFwiLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuXCI7XG5pbXBvcnQgeyBMb2dpblRva2VuU3RvcmUgfSBmcm9tIFwiLi4vYXV0aC9sb2dpbi9Mb2dpblRva2VuU3RvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBkZWZhdWx0SGVhZGVyIGltcGxlbWVudHMgUmVzdEhlYWRlciB7XG5cbiAgICBwcml2YXRlIHRva2VuID0gJyc7XG4gICAgcHJpdmF0ZSB2ZXJzaW9uID0gJyc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0b2tlblN0b3JlOiBMb2dpblRva2VuU3RvcmUsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTG9naW5NZ3JUb2tlbikgcHJpdmF0ZSBjdXN0b21Mb2dpbk1ncjogSUxvZ2luTWdyXG4gICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUxvZ2luTWdyKSB7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbUxvZ2luTWdyLmdldFRva2VuKCkuc3Vic2NyaWJlKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuU3RvcmUuZ2V0VG9rZW4oKS5zdWJzY3JpYmUoKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRldmljZVNlcnZpY2UuZ2V0QXBwVmVyc2lvbigpLnRoZW4oKHZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEhlYWRlcigpOiBIdHRwSGVhZGVycyB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCZWFyZXIgXCIgKyB0aGlzLnRva2VuLFxuICAgICAgICAgICAgJ1gtRGF0ZSc6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSxcbiAgICAgICAgICAgICdYLVJlcXVlc3QtSUQnOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAnWC1Pcmdhbml6YXRpb24nOiAnMScsXG4gICAgICAgICAgICAnWC1Pcmdhbml6YXRpb24tQnJhbmNoJzogJzEnLFxuICAgICAgICAgICAgJ1gtT3JnYW5pemF0aW9uLVVzZXInOiAnMScsXG4gICAgICAgICAgICAnWC1BUEktVmVyc2lvbic6IHRoaXMudmVyc2lvbixcbiAgICAgICAgfSlcbiAgICB9XG59Il19