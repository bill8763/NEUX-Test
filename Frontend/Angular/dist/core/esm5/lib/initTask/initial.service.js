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
var InitialService = /** @class */ (function () {
    function InitialService(errorHandler, dataSyncTask, configTask, deviceTask, registerAPITask, customRegisterAPITask, customTask, initialFinish) {
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
    InitialService.prototype.load = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, _b, _c, t, e_1_1, err_1;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('initial service load!', this._sequentialTasks);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 13, , 14]);
                        return [4 /*yield*/, this.waitnseconds(1000)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 8, 9, 10]);
                        _b = tslib_1.__values(this._sequentialTasks), _c = _b.next();
                        _d.label = 4;
                    case 4:
                        if (!!_c.done) return [3 /*break*/, 7];
                        t = _c.value;
                        return [4 /*yield*/, t.doTask()];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6:
                        _c = _b.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [4 /*yield*/, Promise.all(this._parallelTasks.map((/**
                         * @param {?} task
                         * @return {?}
                         */
                        function (task) { return task.doTask(); }))).then((/**
                         * @param {?} val
                         * @return {?}
                         */
                        function (val) {
                        }))];
                    case 11:
                        _d.sent();
                        return [4 /*yield*/, this.dataSyncTask.refreshSchema()];
                    case 12:
                        _d.sent();
                        if (this.initialFinish) {
                            this.initialFinish.afterInitialFinish();
                        }
                        return [3 /*break*/, 14];
                    case 13:
                        err_1 = _d.sent();
                        console.warn('Initial Error: maybe not on the mobile');
                        this.errorHandler.handleError(err_1);
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} second
     * @return {?}
     */
    InitialService.prototype.waitnseconds = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        function (res, rej) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                res();
            }), second);
        }));
    };
    InitialService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    InitialService.ctorParameters = function () { return [
        { type: ErrorHandler },
        { type: DataSyncTask },
        { type: ConfigTask },
        { type: DeviceTask },
        { type: RegisterAPITask },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [registerAPITaskToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [customTaskToken,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [initialFinishToken,] }] }
    ]; };
    /** @nocollapse */ InitialService.ngInjectableDef = i0.defineInjectable({ factory: function InitialService_Factory() { return new InitialService(i0.inject(i0.ErrorHandler), i0.inject(i1.DataSyncTask), i0.inject(i2.ConfigTask), i0.inject(i3.DeviceTask), i0.inject(i4.RegisterAPITask), i0.inject(i5.registerAPITaskToken, 8), i0.inject(i5.customTaskToken, 8), i0.inject(i5.initialFinishToken, 8)); }, token: InitialService, providedIn: "root" });
    return InitialService;
}());
export { InitialService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbml0VGFzay9pbml0aWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBbUIsb0JBQW9CLEVBQXFCLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQUcxRDtJQU1FLHdCQUNVLFlBQTBCLEVBQzFCLFlBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLGVBQWdDLEVBQ1UscUJBQWdDLEVBQ3JDLFVBQXFCLEVBQ2xCLGFBQTRCO1FBUHBFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDVSwwQkFBcUIsR0FBckIscUJBQXFCLENBQVc7UUFDckMsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVY5RSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFVbEIsMkJBQTJCO1FBQzNCLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDdEIsSUFBSSxD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Q0FBOEI7Ozs7O0lBQzlCLHlDQUF3Qzs7Ozs7SUFDeEMsK0NBQWtGOzs7OztJQUNsRixvQ0FBa0U7Ozs7O0lBQ2xFLHVDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29uZmlnVGFza1Rva2VuLCByZWdpc3RlckFQSVRhc2tUb2tlbiwgZGF0YVN5bmNUYXNrVG9rZW4sIGN1c3RvbVRhc2tUb2tlbiwgaW5pdGlhbEZpbmlzaFRva2VuIH0gZnJvbSAnLi4vaW5qZWN0aW9uVG9rZW4nO1xuaW1wb3J0IHsgSUluaXRUYXNrIH0gZnJvbSAnLi9pbnRlcmZhY2UvSW5pdGlhbFRhc2suaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGFTeW5jVGFzayB9IGZyb20gJy4vdGFza3MvRGF0YVN5bmNUYXNrJztcbmltcG9ydCB7IENvbmZpZ1Rhc2sgfSBmcm9tICcuL3Rhc2tzL0NvbmZpZ1Rhc2snO1xuaW1wb3J0IHsgRGV2aWNlVGFzayB9IGZyb20gJy4vdGFza3MvRGV2aWNlVGFzayc7XG5pbXBvcnQgeyBSZWdpc3RlckFQSVRhc2sgfSBmcm9tICcuL3Rhc2tzL1JlZ2lzdGVyQVBJVGFzayc7XG5pbXBvcnQgeyBpbml0aWFsRmluaXNoIH0gZnJvbSAnLi9pbnRlcmZhY2UvaW5pdGlhbEZpbmlzaC5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbml0aWFsU2VydmljZSB7XG4gIF9zZXF1ZW50aWFsVGFza3MgPSBbXTtcbiAgX3BhcmFsbGVsVGFza3MgPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBwcml2YXRlIGRhdGFTeW5jVGFzazogRGF0YVN5bmNUYXNrLFxuICAgIHByaXZhdGUgY29uZmlnVGFzazogQ29uZmlnVGFzayxcbiAgICBwcml2YXRlIGRldmljZVRhc2s6IERldmljZVRhc2ssXG4gICAgcHJpdmF0ZSByZWdpc3RlckFQSVRhc2s6IFJlZ2lzdGVyQVBJVGFzayxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHJlZ2lzdGVyQVBJVGFza1Rva2VuKSBwcml2YXRlIGN1c3RvbVJlZ2lzdGVyQVBJVGFzazogSUluaXRUYXNrLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoY3VzdG9tVGFza1Rva2VuKSBwcml2YXRlIGN1c3RvbVRhc2s6IElJbml0VGFzayxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGluaXRpYWxGaW5pc2hUb2tlbikgcHJpdmF0ZSBpbml0aWFsRmluaXNoOiBpbml0aWFsRmluaXNoKSB7XG4gICAgLy9yZWdpc3RlciBzZXF1ZW50aWFsIHRhc2tzXG4gICAgaWYgKHRoaXMucmVnaXN0ZXJBUElUYXNrKVxuICAgICAgdGhpcy5fc2VxdWVudGlhbFRhc2tzLnB1c2godGhpcy5yZWdpc3RlckFQSVRhc2spO1xuICAgIGlmICh0aGlzLmN1c3RvbVJlZ2lzdGVyQVBJVGFzaylcbiAgICAgIHRoaXMuX3NlcXVlbnRpYWxUYXNrcy5wdXNoKHRoaXMuY3VzdG9tUmVnaXN0ZXJBUElUYXNrKTtcbiAgICBpZiAodGhpcy5kYXRhU3luY1Rhc2spXG4gICAgICB0aGlzLl9zZXF1ZW50aWFsVGFza3MucHVzaCh0aGlzLmRhdGFTeW5jVGFzayk7XG4gICAgaWYgKHRoaXMuZGV2aWNlVGFzaylcbiAgICAgIHRoaXMuX3NlcXVlbnRpYWxUYXNrcy5wdXNoKHRoaXMuZGV2aWNlVGFzayk7XG4gICAgaWYgKHRoaXMuY29uZmlnVGFzaylcbiAgICAgIHRoaXMuX3NlcXVlbnRpYWxUYXNrcy5wdXNoKHRoaXMuY29uZmlnVGFzayk7XG4gICAgaWYgKHRoaXMuY3VzdG9tVGFzaylcbiAgICAgIHRoaXMuX3NlcXVlbnRpYWxUYXNrcy5wdXNoKHRoaXMuY3VzdG9tVGFzayk7XG5cbiAgICAvL3JlZ2lzdGVyIHBhcmFsbGVsIHRhc2tzXG4gICAgLy8gdGhpcy5fcGFyYWxsZWxUYXNrcy5wdXNoKHRoaXMuY29uZmlnVGFzayk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbml0aWFsIHNlcnZpY2UgbG9hZCEnLCB0aGlzLl9zZXF1ZW50aWFsVGFza3MpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLndhaXRuc2Vjb25kcygxMDAwKTtcbiAgICAgIGZvciAobGV0IHQgb2YgdGhpcy5fc2VxdWVudGlhbFRhc2tzKSB7XG4gICAgICAgIGF3YWl0IHQuZG9UYXNrKClcbiAgICAgIH1cbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuX3BhcmFsbGVsVGFza3MubWFwKHRhc2sgPT4gdGFzay5kb1Rhc2soKSkpLnRoZW4odmFsID0+IHtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5kYXRhU3luY1Rhc2sucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgaWYodGhpcy5pbml0aWFsRmluaXNoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbEZpbmlzaC5hZnRlckluaXRpYWxGaW5pc2goKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW5pdGlhbCBFcnJvcjogbWF5YmUgbm90IG9uIHRoZSBtb2JpbGUnKTtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycik7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgd2FpdG5zZWNvbmRzKHNlY29uZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlcygpO1xuICAgICAgfSwgc2Vjb25kKTtcbiAgICB9KVxuICB9XG59XG4iXX0=