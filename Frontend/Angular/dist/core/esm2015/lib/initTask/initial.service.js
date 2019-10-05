/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler, Optional, Inject } from '@angular/core';
import { registerAPITaskToken, customTaskToken, initialFinishToken } from '../injectionToken';
import { DataSyncTask } from './tasks/DataSyncTask';
import { ConfigTask } from './tasks/ConfigTask';
import { DeviceTask } from './tasks/DeviceTask';
import { RegisterAPITask } from './tasks/RegisterAPITask';
import * as i0 from "@angular/core";
import * as i1 from "./tasks/DataSyncTask";
import * as i2 from "./tasks/ConfigTask";
import * as i3 from "./tasks/DeviceTask";
import * as i4 from "./tasks/RegisterAPITask";
import * as i5 from "../injectionToken/injection-token";
export class InitialService {
    /**
     * @param {?} errorHandler
     * @param {?} dataSyncTask
     * @param {?} configTask
     * @param {?} deviceTask
     * @param {?} registerAPITask
     * @param {?} customRegisterAPITask
     * @param {?} customTask
     * @param {?} initialFinish
     */
    constructor(errorHandler, dataSyncTask, configTask, deviceTask, registerAPITask, customRegisterAPITask, customTask, initialFinish) {
        this.errorHandler = errorHandler;
        this.dataSyncTask = dataSyncTask;
        this.configTask = configTask;
        this.deviceTask = deviceTask;
        this.registerAPITask = registerAPITask;
        this.customRegisterAPITask = customRegisterAPITask;
        this.customTask = customTask;
        this.initialFinish = initialFinish;
        this._sequentialTasks = [];
        this._parallelTasks = [];
        //register sequential tasks
        if (this.registerAPITask)
            this._sequentialTasks.push(this.registerAPITask);
        if (this.customRegisterAPITask)
            this._sequentialTasks.push(this.customRegisterAPITask);
        if (this.dataSyncTask)
            this._sequentialTasks.push(this.dataSyncTask);
        if (this.deviceTask)
            this._sequentialTasks.push(this.deviceTask);
        if (this.configTask)
            this._sequentialTasks.push(this.configTask);
        if (this.customTask)
            this._sequentialTasks.push(this.customTask);
        //register parallel tasks
        // this._parallelTasks.push(this.configTask);
    }
    /**
     * @return {?}
     */
    load() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('initial service load!', this._sequentialTasks);
            try {
                yield this.waitnseconds(1000);
                for (let t of this._sequentialTasks) {
                    yield t.doTask();
                }
                yield Promise.all(this._parallelTasks.map((/**
                 * @param {?} task
                 * @return {?}
                 */
                task => task.doTask()))).then((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => {
                }));
                yield this.dataSyncTask.refreshSchema();
                if (this.initialFinish) {
                    this.initialFinish.afterInitialFinish();
                }
            }
            catch (err) {
                console.warn('Initial Error: maybe not on the mobile');
                this.errorHandler.handleError(err);
            }
        });
    }
    /**
     * @param {?} second
     * @return {?}
     */
    waitnseconds(second) {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                res();
            }), second);
        }));
    }
}
InitialService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
InitialService.ctorParameters = () => [
    { type: ErrorHandler },
    { type: DataSyncTask },
    { type: ConfigTask },
    { type: DeviceTask },
    { type: RegisterAPITask },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [registerAPITaskToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customTaskToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [initialFinishToken,] }] }
];
/** @nocollapse */ InitialService.ngInjectableDef = i0.defineInjectable({ factory: function InitialService_Factory() { return new InitialService(i0.inject(i0.ErrorHandler), i0.inject(i1.DataSyncTask), i0.inject(i2.ConfigTask), i0.inject(i3.DeviceTask), i0.inject(i4.RegisterAPITask), i0.inject(i5.registerAPITaskToken, 8), i0.inject(i5.customTaskToken, 8), i0.inject(i5.initialFinishToken, 8)); }, token: InitialService, providedIn: "root" });
if (false) {
    /** @type {?} */
    InitialService.prototype._sequentialTasks;
    /** @type {?} */
    InitialService.prototype._parallelTasks;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.dataSyncTask;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.configTask;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.deviceTask;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.registerAPITask;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.customRegisterAPITask;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.customTask;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.initialFinish;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbml0VGFzay9pbml0aWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBbUIsb0JBQW9CLEVBQXFCLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQU0xRCxNQUFNOzs7Ozs7Ozs7OztJQUdKLFlBQ1UsWUFBMEIsRUFDMUIsWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsVUFBc0IsRUFDdEIsZUFBZ0MsRUFDVSxxQkFBZ0MsRUFDckMsVUFBcUIsRUFDbEIsYUFBNEI7UUFQcEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBVztRQUNyQyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVjlFLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQVVsQiwyQkFBMkI7UUFDM0IsSUFBSSxJQUFJLENBQUMsZUFB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bXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbmZpZ1Rhc2tUb2tlbiwgcmVnaXN0ZXJBUElUYXNrVG9rZW4sIGRhdGFTeW5jVGFza1Rva2VuLCBjdXN0b21UYXNrVG9rZW4sIGluaXRpYWxGaW5pc2hUb2tlbiB9IGZyb20gJy4uL2luamVjdGlvblRva2VuJztcbmltcG9ydCB7IElJbml0VGFzayB9IGZyb20gJy4vaW50ZXJmYWNlL0luaXRpYWxUYXNrLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYXRhU3luY1Rhc2sgfSBmcm9tICcuL3Rhc2tzL0RhdGFTeW5jVGFzayc7XG5pbXBvcnQgeyBDb25maWdUYXNrIH0gZnJvbSAnLi90YXNrcy9Db25maWdUYXNrJztcbmltcG9ydCB7IERldmljZVRhc2sgfSBmcm9tICcuL3Rhc2tzL0RldmljZVRhc2snO1xuaW1wb3J0IHsgUmVnaXN0ZXJBUElUYXNrIH0gZnJvbSAnLi90YXNrcy9SZWdpc3RlckFQSVRhc2snO1xuaW1wb3J0IHsgaW5pdGlhbEZpbmlzaCB9IGZyb20gJy4vaW50ZXJmYWNlL2luaXRpYWxGaW5pc2guaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW5pdGlhbFNlcnZpY2Uge1xuICBfc2VxdWVudGlhbFRhc2tzID0gW107XG4gIF9wYXJhbGxlbFRhc2tzID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgcHJpdmF0ZSBkYXRhU3luY1Rhc2s6IERhdGFTeW5jVGFzayxcbiAgICBwcml2YXRlIGNvbmZpZ1Rhc2s6IENvbmZpZ1Rhc2ssXG4gICAgcHJpdmF0ZSBkZXZpY2VUYXNrOiBEZXZpY2VUYXNrLFxuICAgIHByaXZhdGUgcmVnaXN0ZXJBUElUYXNrOiBSZWdpc3RlckFQSVRhc2ssXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChyZWdpc3RlckFQSVRhc2tUb2tlbikgcHJpdmF0ZSBjdXN0b21SZWdpc3RlckFQSVRhc2s6IElJbml0VGFzayxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGN1c3RvbVRhc2tUb2tlbikgcHJpdmF0ZSBjdXN0b21UYXNrOiBJSW5pdFRhc2ssXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChpbml0aWFsRmluaXNoVG9rZW4pIHByaXZhdGUgaW5pdGlhbEZpbmlzaDogaW5pdGlhbEZpbmlzaCkge1xuICAgIC8vcmVnaXN0ZXIgc2VxdWVudGlhbCB0YXNrc1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyQVBJVGFzaylcbiAgICAgIHRoaXMuX3NlcXVlbnRpYWxUYXNrcy5wdXNoKHRoaXMucmVnaXN0ZXJBUElUYXNrKTtcbiAgICBpZiAodGhpcy5jdXN0b21SZWdpc3RlckFQSVRhc2spXG4gICAgICB0aGlzLl9zZXF1ZW50aWFsVGFza3MucHVzaCh0aGlzLmN1c3RvbVJlZ2lzdGVyQVBJVGFzayk7XG4gICAgaWYgKHRoaXMuZGF0YVN5bmNUYXNrKVxuICAgICAgdGhpcy5fc2VxdWVudGlhbFRhc2tzLnB1c2godGhpcy5kYXRhU3luY1Rhc2spO1xuICAgIGlmICh0aGlzLmRldmljZVRhc2spXG4gICAgICB0aGlzLl9zZXF1ZW50aWFsVGFza3MucHVzaCh0aGlzLmRldmljZVRhc2spO1xuICAgIGlmICh0aGlzLmNvbmZpZ1Rhc2spXG4gICAgICB0aGlzLl9zZXF1ZW50aWFsVGFza3MucHVzaCh0aGlzLmNvbmZpZ1Rhc2spO1xuICAgIGlmICh0aGlzLmN1c3RvbVRhc2spXG4gICAgICB0aGlzLl9zZXF1ZW50aWFsVGFza3MucHVzaCh0aGlzLmN1c3RvbVRhc2spO1xuXG4gICAgLy9yZWdpc3RlciBwYXJhbGxlbCB0YXNrc1xuICAgIC8vIHRoaXMuX3BhcmFsbGVsVGFza3MucHVzaCh0aGlzLmNvbmZpZ1Rhc2spO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZygnaW5pdGlhbCBzZXJ2aWNlIGxvYWQhJywgdGhpcy5fc2VxdWVudGlhbFRhc2tzKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy53YWl0bnNlY29uZHMoMTAwMCk7XG4gICAgICBmb3IgKGxldCB0IG9mIHRoaXMuX3NlcXVlbnRpYWxUYXNrcykge1xuICAgICAgICBhd2FpdCB0LmRvVGFzaygpXG4gICAgICB9XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLl9wYXJhbGxlbFRhc2tzLm1hcCh0YXNrID0+IHRhc2suZG9UYXNrKCkpKS50aGVuKHZhbCA9PiB7XG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuZGF0YVN5bmNUYXNrLnJlZnJlc2hTY2hlbWEoKTtcbiAgICAgIGlmKHRoaXMuaW5pdGlhbEZpbmlzaCkge1xuICAgICAgICB0aGlzLmluaXRpYWxGaW5pc2guYWZ0ZXJJbml0aWFsRmluaXNoKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0luaXRpYWwgRXJyb3I6IG1heWJlIG5vdCBvbiB0aGUgbW9iaWxlJyk7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG5cbiAgcHVibGljIHdhaXRuc2Vjb25kcyhzZWNvbmQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXMoKTtcbiAgICAgIH0sIHNlY29uZCk7XG4gICAgfSlcbiAgfVxufVxuIl19