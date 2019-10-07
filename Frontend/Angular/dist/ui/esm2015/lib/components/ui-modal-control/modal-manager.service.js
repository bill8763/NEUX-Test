/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class ModalManager {
    constructor() {
        this.modalList = [];
        this.isGlobalLoadingOpen = false;
        this.globalLoadingSubject = new BehaviorSubject(this.isGlobalLoadingOpen);
    }
    /**
     * @param {?} id
     * @param {?} instance
     * @return {?}
     */
    pushModal(id, instance) {
        if (this.modalList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === id)).length == 0) {
            this.modalList.push({ id, instance });
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    dismissModal(id) {
        this.modalList = this.modalList.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id != id));
        return this.modalList.length === 0;
    }
    /**
     * @return {?}
     */
    closeAll() {
        console.log("ModalManager closeAll:", this.modalList);
        this.modalList.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            x.instance.closeHandler();
            x.instance.ModalCloseGlobalControl();
        }));
        this.modalList = [];
    }
    /**
     * @param {?} open
     * @return {?}
     */
    toggleLoading(open) {
        this.isGlobalLoadingOpen = open;
        this.globalLoadingSubject.next(this.isGlobalLoadingOpen);
    }
    /**
     * @return {?}
     */
    getLoadingStatus() {
        return this.globalLoadingSubject.asObservable();
    }
}
ModalManager.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ModalManager.ctorParameters = () => [];
/** @nocollapse */ ModalManager.ngInjectableDef = i0.defineInjectable({ factory: function ModalManager_Factory() { return new ModalManager(); }, token: ModalManager, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1tb2RhbC1jb250cm9sL21vZGFsLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLE1BQU0sQ0FBQzs7QUFLNUQsTUFBTTtJQUVGO1FBRVEsY0FBUyxHQUEwRCxFQUFFLENBQUM7UUFDdEUsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLHlCQUFvQixHQUFxQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUovRSxDQUFDOzs7Ozs7SUFNVixTQUFTLENBQUMsRUFBVSxFQUFFLFFBQThCO1FBQ3ZELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEVBQVU7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFDLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVNLFFBQVE7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUN2QixDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLElBQWE7UUFDOUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7O1lBdENKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs7Ozs7O0lBS0csaUNBQThFOzs7OztJQUM5RSwyQ0FBNkM7Ozs7O0lBQzdDLDRDQUErRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVWlNb2RhbEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vdWktbW9kYWwtYmFzZS91aS1tb2RhbC1iYXNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHByaXZhdGUgbW9kYWxMaXN0OiBBcnJheTx7IGlkOiBzdHJpbmcsIGluc3RhbmNlOiBVaU1vZGFsQmFzZUNvbXBvbmVudCB9PiA9IFtdO1xuICAgIHByaXZhdGUgaXNHbG9iYWxMb2FkaW5nT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgZ2xvYmFsTG9hZGluZ1N1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuaXNHbG9iYWxMb2FkaW5nT3Blbik7XG5cbiAgICBwdWJsaWMgcHVzaE1vZGFsKGlkOiBzdHJpbmcsIGluc3RhbmNlOiBVaU1vZGFsQmFzZUNvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tb2RhbExpc3QuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsTGlzdC5wdXNoKHsgaWQsIGluc3RhbmNlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRpc21pc3NNb2RhbChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMubW9kYWxMaXN0ID0gdGhpcy5tb2RhbExpc3QuZmlsdGVyKHggPT4geC5pZCAhPSBpZCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsTGlzdC5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlQWxsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vZGFsTWFuYWdlciBjbG9zZUFsbDpcIiwgdGhpcy5tb2RhbExpc3QpO1xuICAgICAgICB0aGlzLm1vZGFsTGlzdC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgeC5pbnN0YW5jZS5jbG9zZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIHguaW5zdGFuY2UuTW9kYWxDbG9zZUdsb2JhbENvbnRyb2woKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tb2RhbExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlTG9hZGluZyhvcGVuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNHbG9iYWxMb2FkaW5nT3BlbiA9IG9wZW47XG4gICAgICAgIHRoaXMuZ2xvYmFsTG9hZGluZ1N1YmplY3QubmV4dCh0aGlzLmlzR2xvYmFsTG9hZGluZ09wZW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2FkaW5nU3RhdHVzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxMb2FkaW5nU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG59Il19