/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var UiInformationService = /** @class */ (function () {
    function UiInformationService() {
        this._subject = new Subject();
    }
    // get this open info
    // get this open info
    /**
     * @return {?}
     */
    UiInformationService.prototype.getCloseAction = 
    // get this open info
    /**
     * @return {?}
     */
    function () {
        console.log('_subject', this._subject);
        return this._subject.asObservable();
    };
    // 
    // 
    /**
     * @param {?} id
     * @return {?}
     */
    UiInformationService.prototype.closeOthers = 
    // 
    /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log('closeOthers _subject', this._subject, id);
        this._subject.next(id);
    };
    UiInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UiInformationService.ctorParameters = function () { return []; };
    /** @nocollapse */ UiInformationService.ngInjectableDef = i0.defineInjectable({ factory: function UiInformationService_Factory() { return new UiInformationService(); }, token: UiInformationService, providedIn: "root" });
    return UiInformationService;
}());
export { UiInformationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiInformationService.prototype._subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mb3JtYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaW5mb3JtYXRpb24vdWktaW5mb3JtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFNLE1BQU0sTUFBTSxDQUFDOztBQUUvQztJQU1FO1FBRFEsYUFBUSxHQUFtQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR2pELENBQUM7SUFHRCxxQkFBcUI7Ozs7O0lBQ2QsNkNBQWM7Ozs7O0lBQXJCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV0QyxDQUFDO0lBRUQsR0FBRzs7Ozs7O0lBQ0ksMENBQVc7Ozs7OztJQUFsQixVQUFtQixFQUFFO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkF0QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzsrQkFMRDtDQTZCQyxBQTFCRCxJQTBCQztTQXZCWSxvQkFBb0I7Ozs7OztJQUUvQix3Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVaUluZm9ybWF0aW9uU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfc3ViamVjdDpTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBcbiAgfVxuXG4gIFxuICAvLyBnZXQgdGhpcyBvcGVuIGluZm9cbiAgcHVibGljIGdldENsb3NlQWN0aW9uKCk6T2JzZXJ2YWJsZTxzdHJpbmc+e1xuICAgIGNvbnNvbGUubG9nKCdfc3ViamVjdCcsdGhpcy5fc3ViamVjdCk7XG4gICAgcmV0dXJuIHRoaXMuX3N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgfVxuXG4gIC8vIFxuICBwdWJsaWMgY2xvc2VPdGhlcnMoaWQpe1xuICAgIGNvbnNvbGUubG9nKCdjbG9zZU90aGVycyBfc3ViamVjdCcsdGhpcy5fc3ViamVjdCwgaWQpO1xuICAgIHRoaXMuX3N1YmplY3QubmV4dChpZCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==