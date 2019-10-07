/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class UiInformationService {
    constructor() {
        this._subject = new Subject();
    }
    // get this open info
    /**
     * @return {?}
     */
    getCloseAction() {
        console.log('_subject', this._subject);
        return this._subject.asObservable();
    }
    // 
    /**
     * @param {?} id
     * @return {?}
     */
    closeOthers(id) {
        console.log('closeOthers _subject', this._subject, id);
        this._subject.next(id);
    }
}
UiInformationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UiInformationService.ctorParameters = () => [];
/** @nocollapse */ UiInformationService.ngInjectableDef = i0.defineInjectable({ factory: function UiInformationService_Factory() { return new UiInformationService(); }, token: UiInformationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    UiInformationService.prototype._subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mb3JtYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktaW5mb3JtYXRpb24vdWktaW5mb3JtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFNLE1BQU0sTUFBTSxDQUFDOztBQUsvQyxNQUFNO0lBR0o7UUFEUSxhQUFRLEdBQW1CLElBQUksT0FBTyxFQUFFLENBQUM7SUFHakQsQ0FBQzs7Ozs7SUFJTSxjQUFjO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFdEMsQ0FBQzs7Ozs7O0lBR00sV0FBVyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQXRCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7OztJQUdDLHdDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVpSW5mb3JtYXRpb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIF9zdWJqZWN0OlN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICB9XG5cbiAgXG4gIC8vIGdldCB0aGlzIG9wZW4gaW5mb1xuICBwdWJsaWMgZ2V0Q2xvc2VBY3Rpb24oKTpPYnNlcnZhYmxlPHN0cmluZz57XG4gICAgY29uc29sZS5sb2coJ19zdWJqZWN0Jyx0aGlzLl9zdWJqZWN0KTtcbiAgICByZXR1cm4gdGhpcy5fc3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICB9XG5cbiAgLy8gXG4gIHB1YmxpYyBjbG9zZU90aGVycyhpZCl7XG4gICAgY29uc29sZS5sb2coJ2Nsb3NlT3RoZXJzIF9zdWJqZWN0Jyx0aGlzLl9zdWJqZWN0LCBpZCk7XG4gICAgdGhpcy5fc3ViamVjdC5uZXh0KGlkKTtcbiAgfVxuXG5cblxufVxuIl19