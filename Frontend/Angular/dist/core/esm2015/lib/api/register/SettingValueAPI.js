/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
export class SettingValueAPI {
    /**
     * @param {?} translateService
     * @param {?} deviceService
     */
    constructor(translateService, deviceService) {
        this._translateService = translateService;
        this._deviceService = deviceService;
    }
    /**
     * @return {?}
     */
    getAPIName() {
        return 'getSettingValue';
    }
    /**
     * @return {?}
     */
    getMockPath() {
        return './assets/mock/getSettingValue.json';
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
            let resp = {
                Language: this._translateService.getCurrentLanguage(),
                LastUpdatedTime: "Setting_See_Details"
            };
            this._deviceService.getAppVersion().then((/**
             * @param {?} version
             * @return {?}
             */
            version => {
                resp["Version"] = version;
                observer.next({ Header: { "isSuccess": true }, Body: [resp] });
                observer.complete();
            }));
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingValueAPI.prototype._translateService;
    /**
     * @type {?}
     * @private
     */
    SettingValueAPI.prototype._deviceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ1ZhbHVlQVBJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvcmVnaXN0ZXIvU2V0dGluZ1ZhbHVlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUWxDLE1BQU07Ozs7O0lBR0YsWUFDSSxnQkFBa0MsRUFDbEMsYUFBNEI7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sb0NBQW9DLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7Z0JBQzlCLElBQUksR0FBRztnQkFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFO2dCQUNyRCxlQUFlLEVBQUUscUJBQXFCO2FBQ3pDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUE7UUFDTixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSjs7Ozs7O0lBL0JHLDRDQUE0Qzs7Ozs7SUFDNUMseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUFQSSB9IGZyb20gJy4uL0FQSS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vY2tBUEkgfSBmcm9tICcuLi9Nb2NrQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU1FMaXRlQVBJIH0gZnJvbSAnLi4vU1FMaXRlQVBJLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYW9GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZGV2aWNlL3NxbGl0ZS9EYW9GYWN0b3J5JztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYW5ndWFnZS90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdWYWx1ZUFQSSBpbXBsZW1lbnRzIElBUEksIElNb2NrQVBJLCBJU1FMaXRlQVBJIHtcbiAgICBwcml2YXRlIF90cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2RldmljZVNlcnZpY2U6IERldmljZVNlcnZpY2VcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSkge1xuICAgICAgICB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlID0gdHJhbnNsYXRlU2VydmljZTtcbiAgICAgICAgdGhpcy5fZGV2aWNlU2VydmljZSA9IGRldmljZVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZ2V0QVBJTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2dldFNldHRpbmdWYWx1ZSc7XG4gICAgfVxuXG4gICAgZ2V0TW9ja1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcuL2Fzc2V0cy9tb2NrL2dldFNldHRpbmdWYWx1ZS5qc29uJztcbiAgICB9XG5cbiAgICBleGVjdXRlU1FMKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCByZXNwID0ge1xuICAgICAgICAgICAgICAgIExhbmd1YWdlOiB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmdldEN1cnJlbnRMYW5ndWFnZSgpLFxuICAgICAgICAgICAgICAgIExhc3RVcGRhdGVkVGltZTogXCJTZXR0aW5nX1NlZV9EZXRhaWxzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RldmljZVNlcnZpY2UuZ2V0QXBwVmVyc2lvbigpLnRoZW4odmVyc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmVzcFtcIlZlcnNpb25cIl0gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBIZWFkZXI6IHsgXCJpc1N1Y2Nlc3NcIjogdHJ1ZSB9LCBCb2R5OiBbcmVzcF0gfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19