/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
var ModalManager = /** @class */ (function () {
    function ModalManager() {
        this.modalList = [];
        this.isGlobalLoadingOpen = false;
        this.globalLoadingSubject = new BehaviorSubject(this.isGlobalLoadingOpen);
    }
    /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    ModalManager.prototype.pushModal = /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    function (id, instance) {
        if (this.modalList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === id; })).length == 0) {
            this.modalList.push({ id: id, instance: instance });
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalManager.prototype.dismissModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.modalList = this.modalList.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id != id; }));
        return this.modalList.length === 0;
    };
    /**
     * @return {?}
     */
    ModalManager.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        console.log("ModalManager closeAll:", this.modalList);
        this.modalList.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            x.instance.closeHandler();
            x.instance.ModalCloseGlobalControl();
        }));
        this.modalList = [];
    };
    /**
     * @param {?} open
     * @return {?}
     */
    ModalManager.prototype.toggleLoading = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.isGlobalLoadingOpen = open;
        this.globalLoadingSubject.next(this.isGlobalLoadingOpen);
    };
    /**
     * @return {?}
     */
    ModalManager.prototype.getLoadingStatus = /**
     * @return {?}
     */
    function () {
        return this.globalLoadingSubject.asObservable();
    };
    ModalManager.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ModalManager.ctorParameters = function () { return []; };
    /** @nocollapse */ ModalManager.ngInjectableDef = i0.defineInjectable({ factory: function ModalManager_Factory() { return new ModalManager(); }, token: ModalManager, providedIn: "root" });
    return ModalManager;
}());
export { ModalManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalManager.prototype.modalList;
    /**
     * @type {?}
     * @private
     */
    ModalManager.prototype.isGlobalLoadingOpen;
    /**
     * @type {?}
     * @private
     */
    ModalManager.prototype.globalLoadingSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1tb2RhbC1jb250cm9sL21vZGFsLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLE1BQU0sQ0FBQzs7QUFFNUQ7SUFLSTtRQUVRLGNBQVMsR0FBMEQsRUFBRSxDQUFDO1FBQ3RFLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyx5QkFBb0IsR0FBcUIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFKL0UsQ0FBQzs7Ozs7O0lBTVYsZ0NBQVM7Ozs7O0lBQWhCLFVBQWlCLEVBQVUsRUFBRSxRQUE4QjtRQUN2RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7Ozs7O0lBRU0sbUNBQVk7Ozs7SUFBbkIsVUFBb0IsRUFBVTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxFQUFDLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVNLCtCQUFROzs7SUFBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQztZQUNwQixDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sb0NBQWE7Ozs7SUFBcEIsVUFBcUIsSUFBYTtRQUM5QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVNLHVDQUFnQjs7O0lBQXZCO1FBQ0ksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Z0JBdENKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7dUJBTkQ7Q0EyQ0MsQUF2Q0QsSUF1Q0M7U0FwQ1ksWUFBWTs7Ozs7O0lBSXJCLGlDQUE4RTs7Ozs7SUFDOUUsMkNBQTZDOzs7OztJQUM3Qyw0Q0FBK0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVpTW9kYWxCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4uL3VpLW1vZGFsLWJhc2UvdWktbW9kYWwtYmFzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwcml2YXRlIG1vZGFsTGlzdDogQXJyYXk8eyBpZDogc3RyaW5nLCBpbnN0YW5jZTogVWlNb2RhbEJhc2VDb21wb25lbnQgfT4gPSBbXTtcbiAgICBwcml2YXRlIGlzR2xvYmFsTG9hZGluZ09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGdsb2JhbExvYWRpbmdTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmlzR2xvYmFsTG9hZGluZ09wZW4pO1xuXG4gICAgcHVibGljIHB1c2hNb2RhbChpZDogc3RyaW5nLCBpbnN0YW5jZTogVWlNb2RhbEJhc2VDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubW9kYWxMaXN0LmZpbHRlcih4ID0+IHguaWQgPT09IGlkKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbExpc3QucHVzaCh7IGlkLCBpbnN0YW5jZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNtaXNzTW9kYWwoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLm1vZGFsTGlzdCA9IHRoaXMubW9kYWxMaXN0LmZpbHRlcih4ID0+IHguaWQgIT0gaWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbExpc3QubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZUFsbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb2RhbE1hbmFnZXIgY2xvc2VBbGw6XCIsIHRoaXMubW9kYWxMaXN0KTtcbiAgICAgICAgdGhpcy5tb2RhbExpc3QuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIHguaW5zdGFuY2UuY2xvc2VIYW5kbGVyKCk7XG4gICAgICAgICAgICB4Lmluc3RhbmNlLk1vZGFsQ2xvc2VHbG9iYWxDb250cm9sKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubW9kYWxMaXN0ID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUxvYWRpbmcob3BlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzR2xvYmFsTG9hZGluZ09wZW4gPSBvcGVuO1xuICAgICAgICB0aGlzLmdsb2JhbExvYWRpbmdTdWJqZWN0Lm5leHQodGhpcy5pc0dsb2JhbExvYWRpbmdPcGVuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9hZGluZ1N0YXR1cygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsTG9hZGluZ1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxufSJdfQ==