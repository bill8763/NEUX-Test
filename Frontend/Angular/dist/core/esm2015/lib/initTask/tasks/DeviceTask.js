/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject, ErrorHandler } from '@angular/core';
import { DeviceService } from '../../device/device.service';
import { checkForRootToken, NetworkChangeToken } from '../../injectionToken';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../device/device.service";
import * as i2 from "../../injectionToken/injection-token";
export class DeviceTask {
    /**
     * @param {?} deviceService
     * @param {?} errorHandler
     * @param {?} customCheckRoot
     * @param {?} networkChange
     */
    constructor(deviceService, errorHandler, customCheckRoot, networkChange) {
        this.deviceService = deviceService;
        this.errorHandler = errorHandler;
        this.customCheckRoot = customCheckRoot;
        this.networkChange = networkChange;
    }
    /**
     * @return {?}
     */
    doTask() {
        console.log('do device task');
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            //do task
            //check for root
            console.log('has inject custom root:', this.customCheckRoot);
            try {
                if (this.customCheckRoot) {
                    this.customCheckRoot.checkRoot().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    (resp) => {
                        if (resp)
                            this.customCheckRoot.rootedAction();
                        res();
                    }));
                }
                else {
                    this.deviceService.checkIfRoot().then((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => {
                        console.log('check root resp:', resp);
                        if (resp) {
                            alert("device has rooted!");
                            this.deviceService.exitApp();
                        }
                        res();
                    }), (/**
                     * @param {?} errMsg
                     * @return {?}
                     */
                    errMsg => {
                        console.warn(errMsg);
                    }));
                }
                //device network event
                fromEvent(document, 'online').pipe(
                // debounceTime(5000)
                ).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.networkChange.change('online', true);
                }));
                fromEvent(document, 'offline').pipe(
                // debounceTime(5000)
                ).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.networkChange.change('offline', true);
                }));
            }
            catch (error) {
                console.warn("cannot detect rooted device.");
                this.errorHandler.handleError(error);
                res();
            }
        }));
    }
}
DeviceTask.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
DeviceTask.ctorParameters = () => [
    { type: DeviceService },
    { type: ErrorHandler },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [checkForRootToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NetworkChangeToken,] }] }
];
/** @nocollapse */ DeviceTask.ngInjectableDef = i0.defineInjectable({ factory: function DeviceTask_Factory() { return new DeviceTask(i0.inject(i1.DeviceService), i0.inject(i0.ErrorHandler), i0.inject(i2.checkForRootToken, 8), i0.inject(i2.NetworkChangeToken, 8)); }, token: DeviceTask, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeviceTask.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    DeviceTask.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DeviceTask.prototype.customCheckRoot;
    /**
     * @type {?}
     * @private
     */
    DeviceTask.prototype.networkChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVGFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaW5pdFRhc2svdGFza3MvRGV2aWNlVGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQU9qQyxNQUFNOzs7Ozs7O0lBRUYsWUFDWSxhQUE0QixFQUM1QixZQUEwQixFQUNhLGVBQTBCLEVBQ3pCLGFBQTRCO1FBSHBFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ2Esb0JBQWUsR0FBZixlQUFlLENBQVc7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDNUUsQ0FBQzs7OztJQUVFLE1BQU07UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDNUIsU0FBUztZQUNULGdCQUFnQjtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3RCxJQUFJO2dCQUNBLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQzNDLElBQUksSUFBSTs0QkFDSixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUN4QyxHQUFHLEVBQUUsQ0FBQztvQkFDVixDQUFDLEVBQUMsQ0FBQTtpQkFDTDtxQkFDSTtvQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUk7Ozs7b0JBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLElBQUksSUFBSSxFQUFFOzRCQUNOLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzRCQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO3lCQUNoQzt3QkFDRCxHQUFHLEVBQUUsQ0FBQztvQkFDVixDQUFDOzs7O29CQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pCLENBQUMsRUFBQyxDQUFBO2lCQUNMO2dCQUVELHNCQUFzQjtnQkFDdEIsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJO2dCQUM5QixxQkFBcUI7aUJBQ3hCLENBQUMsU0FBUzs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDYixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLENBQUMsRUFBQyxDQUFBO2dCQUNGLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSTtnQkFDL0IscUJBQXFCO2lCQUN4QixDQUFDLFNBQVM7OztnQkFBQyxHQUFHLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLEVBQUMsQ0FBQTthQUNMO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckMsR0FBRyxFQUFFLENBQUM7YUFDVDtRQUVMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBekRKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7O1lBVFEsYUFBYTtZQUZpQixZQUFZOzRDQWlCMUMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7NENBQ3BDLFFBQVEsWUFBSSxNQUFNLFNBQUMsa0JBQWtCOzs7Ozs7OztJQUh0QyxtQ0FBb0M7Ozs7O0lBQ3BDLGtDQUFrQzs7Ozs7SUFDbEMscUNBQXlFOzs7OztJQUN6RSxtQ0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElJbml0VGFzayB9IGZyb20gJy4uL2ludGVyZmFjZS9Jbml0aWFsVGFzay5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL2RldmljZS9kZXZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBjaGVja1Jvb3QgfSBmcm9tICcuLi9pbnRlcmZhY2UvY2hlY2tSb290LmludGVyZmFjZSc7XG5pbXBvcnQgeyBjaGVja0ZvclJvb3RUb2tlbiwgTmV0d29ya0NoYW5nZVRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4nO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZXR3b3JrQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL05ldHdvcmtDaGFuZ2UuaW50ZXJmYWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlVGFzayBpbXBsZW1lbnRzIElJbml0VGFzayB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGNoZWNrRm9yUm9vdFRva2VuKSBwcml2YXRlIGN1c3RvbUNoZWNrUm9vdDogY2hlY2tSb290LFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5ldHdvcmtDaGFuZ2VUb2tlbikgcHJpdmF0ZSBuZXR3b3JrQ2hhbmdlOiBOZXR3b3JrQ2hhbmdlXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBkb1Rhc2soKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvIGRldmljZSB0YXNrJyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgIC8vZG8gdGFza1xuICAgICAgICAgICAgLy9jaGVjayBmb3Igcm9vdFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhcyBpbmplY3QgY3VzdG9tIHJvb3Q6JywgdGhpcy5jdXN0b21DaGVja1Jvb3QpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXN0b21DaGVja1Jvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21DaGVja1Jvb3QuY2hlY2tSb290KCkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21DaGVja1Jvb3Qucm9vdGVkQWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VydmljZS5jaGVja0lmUm9vdCgpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgcm9vdCByZXNwOicsIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcImRldmljZSBoYXMgcm9vdGVkIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZVNlcnZpY2UuZXhpdEFwcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVyck1zZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2RldmljZSBuZXR3b3JrIGV2ZW50XG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnb25saW5lJykucGlwZShcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVib3VuY2VUaW1lKDUwMDApXG4gICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldHdvcmtDaGFuZ2UuY2hhbmdlKCdvbmxpbmUnLHRydWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnb2ZmbGluZScpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYm91bmNlVGltZSg1MDAwKVxuICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXR3b3JrQ2hhbmdlLmNoYW5nZSgnb2ZmbGluZScsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiY2Fubm90IGRldGVjdCByb290ZWQgZGV2aWNlLlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==