/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler } from "@angular/core";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
import { APIFactory } from "../../api/APIFactory";
import { APIDispatch } from "../../api/APIDispatch";
import { NotEqualRestriction } from "../../device/sqlite/restrictions/NotEqualRestriction";
import { from } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "../../device/sqlite/DaoFactory";
import * as i2 from "../../api/APIFactory";
import * as i3 from "../../api/APIDispatch";
var LogService = /** @class */ (function () {
    function LogService(DaoFactory, APIFactory, dispatcher, errorHandler) {
        this.DaoFactory = DaoFactory;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.errorHandler = errorHandler;
    }
    /**
     * @return {?}
     */
    LogService.prototype.pushErrorLog = /**
     * @return {?}
     */
    function () {
        return from(this._pushErrorLog());
    };
    /**
     * @return {?}
     */
    LogService.prototype.pushActionLog = /**
     * @return {?}
     */
    function () {
        return from(this._pushActionLog());
    };
    /**
     * @private
     * @return {?}
     */
    LogService.prototype._pushErrorLog = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao, ErrorLogTable, resp, errorList, pushErrorLogAPI, pushResp, deleteResp, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        //GET DB DATA
                        console.log("into pushErrorLog()");
                        dao = this.DaoFactory.getDao("Profile");
                        ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                        if (!ErrorLogTable) return [3 /*break*/, 4];
                        ErrorLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                        return [4 /*yield*/, dao.queryByTable(ErrorLogTable).toPromise()];
                    case 1:
                        resp = _a.sent();
                        if (!resp.Header["status"]) return [3 /*break*/, 4];
                        console.log("error log table data:", resp.Body);
                        errorList = resp.Body;
                        pushErrorLogAPI = this.APIFactory.getAPI("PushErrorLog");
                        ((/** @type {?} */ (pushErrorLogAPI))).errorList = errorList;
                        return [4 /*yield*/, this.dispatcher.dispatch(pushErrorLogAPI).toPromise()];
                    case 2:
                        pushResp = _a.sent();
                        console.log("push error Log resp:", pushResp);
                        if (!pushResp["success"]) return [3 /*break*/, 4];
                        // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Error_Log where 1=1', [])]);
                        ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                        return [4 /*yield*/, dao.deleteByTable(ErrorLogTable).toPromise()];
                    case 3:
                        deleteResp = _a.sent();
                        // let errorIds = resp.Body.map(x => x.ErrorID);
                        // ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                        // ErrorLogTable.addRestriction(new InRestriction("ErrorID", errorIds));
                        // ErrorLogTable.setValue('IsSend', 'Y');
                        // let updateResp = await dao.updateByTable(ErrorLogTable).toPromise();
                        console.log("deleteResp:", deleteResp);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        this.errorHandler.handleError(new Error('pushErrorLog fail!'));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    LogService.prototype._pushActionLog = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dao, ActionLogTable, resp, actionList, pushActionLogAPI, pushResp, deleteResp, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log("into pushActionLog()");
                        dao = this.DaoFactory.getDao("Profile");
                        ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                        ActionLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                        return [4 /*yield*/, dao.queryByTable(ActionLogTable).toPromise()];
                    case 1:
                        resp = _a.sent();
                        if (!resp.Header["status"]) return [3 /*break*/, 4];
                        console.log("Action log table data:", resp.Body);
                        actionList = resp.Body;
                        pushActionLogAPI = this.APIFactory.getAPI("PushActionLog");
                        ((/** @type {?} */ (pushActionLogAPI))).actionList = actionList;
                        return [4 /*yield*/, this.dispatcher.dispatch(pushActionLogAPI).toPromise()];
                    case 2:
                        pushResp = _a.sent();
                        console.log("push action Log resp:", pushResp);
                        if (!pushResp["success"]) return [3 /*break*/, 4];
                        // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Action_Log where 1=1', [])]);
                        ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                        return [4 /*yield*/, dao.deleteByTable(ActionLogTable).toPromise()];
                    case 3:
                        deleteResp = _a.sent();
                        // let actionIds = resp.Body.map(x => x.ActionID);
                        // ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                        // ActionLogTable.addRestriction(new InRestriction("ActionID", actionIds));
                        // ActionLogTable.setValue('IsSend', 'Y');
                        // let updateResp = await dao.updateByTable(ActionLogTable).toPromise();
                        console.log("deleteResp:", deleteResp);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        this.errorHandler.handleError(new Error('pushActionLog fail!'));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LogService.ctorParameters = function () { return [
        { type: DaoFactory },
        { type: APIFactory },
        { type: APIDispatch },
        { type: ErrorHandler }
    ]; };
    /** @nocollapse */ LogService.ngInjectableDef = i0.defineInjectable({ factory: function LogService_Factory() { return new LogService(i0.inject(i1.DaoFactory), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i0.ErrorHandler)); }, token: LogService, providedIn: "root" });
    return LogService;
}());
export { LogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogService.prototype.DaoFactory;
    /**
     * @type {?}
     * @private
     */
    LogService.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    LogService.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    LogService.prototype.errorHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbG9nL2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFLM0YsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFeEM7SUFLSSxvQkFDWSxVQUFzQixFQUN0QixVQUFzQixFQUN0QixVQUF1QixFQUN2QixZQUF5QjtRQUh6QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUdyQyxDQUFDOzs7O0lBQ00saUNBQVk7OztJQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDTSxrQ0FBYTs7O0lBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFYSxrQ0FBYTs7OztJQUEzQjs7Ozs7Ozt3QkFFUSxhQUFhO3dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzt3QkFDL0IsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3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UyxFQUFFLEVBQUE7O3dCQUF2RSxRQUFRLEdBQUcsU0FBNEQ7d0JBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsUUFBUSxDQUFDLENBQUM7NkJBQzNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBbkIsd0JBQW1CO3dCQUNuQiw0R0FBNEc7d0JBQzVHLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQzt3QkFDM0QscUJBQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQWhFLFVBQVUsR0FBRyxTQUFtRDt3QkFDcEUsa0RBQWtEO3dCQUNsRCwrRUFBK0U7d0JBQy9FLDJFQUEyRTt3QkFDM0UsMENBQTBDO3dCQUMxQyx3RUFBd0U7d0JBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozt3QkFLL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7S0FHdkU7O2dCQXZGSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Z0JBYlEsVUFBVTtnQkFDVixVQUFVO2dCQUVWLFdBQVc7Z0JBSkMsWUFBWTs7O3FCQUFqQztDQXNHQyxBQTFGRCxJQTBGQztTQXZGWSxVQUFVOzs7Ozs7SUFHZixnQ0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIsZ0NBQStCOzs7OztJQUMvQixrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IFB1c2hFcnJvckxvZ0FQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvcHVzaEVycm9yTG9nQVBJXCI7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRGlzcGF0Y2hcIjtcbmltcG9ydCB7IE5vdEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvTm90RXF1YWxSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgSW5SZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9JblJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBQdXNoQWN0aW9uTG9nQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9QdXNoQWN0aW9uTG9nQVBJXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTUUxDb21tYW5kIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMQ29tbWFuZFwiO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBEYW9GYWN0b3J5OiBEYW9GYWN0b3J5LFxuICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOkVycm9ySGFuZGxlclxuICAgICkge1xuXG4gICAgfVxuICAgIHB1YmxpYyBwdXNoRXJyb3JMb2coKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiBmcm9tKHRoaXMuX3B1c2hFcnJvckxvZygpKTtcbiAgICB9XG4gICAgcHVibGljIHB1c2hBY3Rpb25Mb2coKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiBmcm9tKHRoaXMuX3B1c2hBY3Rpb25Mb2coKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfcHVzaEVycm9yTG9nKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9HRVQgREIgREFUQVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRvIHB1c2hFcnJvckxvZygpXCIpO1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREYW8oXCJQcm9maWxlXCIpO1xuICAgICAgICAgICAgbGV0IEVycm9yTG9nVGFibGUgPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRXJyb3JfTG9nXCIpO1xuICAgICAgICAgICAgaWYgKEVycm9yTG9nVGFibGUpIHtcbiAgICAgICAgICAgICAgICBFcnJvckxvZ1RhYmxlLmFkZFJlc3RyaWN0aW9uKG5ldyBOb3RFcXVhbFJlc3RyaWN0aW9uKFwiSXNTZW5kXCIsIFsnWSddKSlcbiAgICAgICAgICAgICAgICBsZXQgcmVzcDogU1FMaXRlUmVzcG9uc2UgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKEVycm9yTG9nVGFibGUpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLkhlYWRlcltcInN0YXR1c1wiXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvZyB0YWJsZSBkYXRhOlwiLCByZXNwLkJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JMaXN0ID0gcmVzcC5Cb2R5O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHVzaEVycm9yTG9nQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcIlB1c2hFcnJvckxvZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgKDxQdXNoRXJyb3JMb2dBUEk+cHVzaEVycm9yTG9nQVBJKS5lcnJvckxpc3QgPSBlcnJvckxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwdXNoUmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwdXNoRXJyb3JMb2dBUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInB1c2ggZXJyb3IgTG9nIHJlc3A6XCIsIHB1c2hSZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1c2hSZXNwW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGRlbGV0ZVJlc3AgPSBkYW8uZXhjdXRlU3FsQ29tbWFuZChbbmV3IFNRTENvbW1hbmQoJ2RlbGV0ZSBmcm9tIFRXX0xIX1NEX0Vycm9yX0xvZyB3aGVyZSAxPTEnLCBbXSldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yTG9nVGFibGUgPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRXJyb3JfTG9nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZVJlc3AgPSBhd2FpdCBkYW8uZGVsZXRlQnlUYWJsZShFcnJvckxvZ1RhYmxlKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVycm9ySWRzID0gcmVzcC5Cb2R5Lm1hcCh4ID0+IHguRXJyb3JJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvckxvZ1RhYmxlID0gdGhpcy5EYW9GYWN0b3J5LmdldFRhYmxlKFwiUHJvZmlsZVwiLCBcIlRXX0xIX1NEX0Vycm9yX0xvZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVycm9yTG9nVGFibGUuYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oXCJFcnJvcklEXCIsIGVycm9ySWRzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvckxvZ1RhYmxlLnNldFZhbHVlKCdJc1NlbmQnLCAnWScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHVwZGF0ZVJlc3AgPSBhd2FpdCBkYW8udXBkYXRlQnlUYWJsZShFcnJvckxvZ1RhYmxlKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlUmVzcDpcIiwgZGVsZXRlUmVzcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKCdwdXNoRXJyb3JMb2cgZmFpbCEnKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfcHVzaEFjdGlvbkxvZygpIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRvIHB1c2hBY3Rpb25Mb2coKVwiKTtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGFvKFwiUHJvZmlsZVwiKTtcbiAgICAgICAgICAgIGxldCBBY3Rpb25Mb2dUYWJsZSA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9BY3Rpb25fTG9nXCIpO1xuICAgICAgICAgICAgQWN0aW9uTG9nVGFibGUuYWRkUmVzdHJpY3Rpb24obmV3IE5vdEVxdWFsUmVzdHJpY3Rpb24oXCJJc1NlbmRcIiwgWydZJ10pKTtcbiAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShBY3Rpb25Mb2dUYWJsZSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBpZiAocmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbiBsb2cgdGFibGUgZGF0YTpcIiwgcmVzcC5Cb2R5KTtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTGlzdCA9IHJlc3AuQm9keTtcbiAgICAgICAgICAgICAgICBsZXQgcHVzaEFjdGlvbkxvZ0FQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJQdXNoQWN0aW9uTG9nXCIpO1xuICAgICAgICAgICAgICAgICg8UHVzaEFjdGlvbkxvZ0FQST5wdXNoQWN0aW9uTG9nQVBJKS5hY3Rpb25MaXN0ID0gYWN0aW9uTGlzdDtcbiAgICAgICAgICAgICAgICBsZXQgcHVzaFJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2gocHVzaEFjdGlvbkxvZ0FQSSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdXNoIGFjdGlvbiBMb2cgcmVzcDpcIiwgcHVzaFJlc3ApO1xuICAgICAgICAgICAgICAgIGlmIChwdXNoUmVzcFtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGRlbGV0ZVJlc3AgPSBkYW8uZXhjdXRlU3FsQ29tbWFuZChbbmV3IFNRTENvbW1hbmQoJ2RlbGV0ZSBmcm9tIFRXX0xIX1NEX0FjdGlvbl9Mb2cgd2hlcmUgMT0xJywgW10pXSk7XG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkxvZ1RhYmxlID0gdGhpcy5EYW9GYWN0b3J5LmdldFRhYmxlKFwiUHJvZmlsZVwiLCBcIlRXX0xIX1NEX0FjdGlvbl9Mb2dcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVSZXNwID0gYXdhaXQgZGFvLmRlbGV0ZUJ5VGFibGUoQWN0aW9uTG9nVGFibGUpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYWN0aW9uSWRzID0gcmVzcC5Cb2R5Lm1hcCh4ID0+IHguQWN0aW9uSUQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb25Mb2dUYWJsZSA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9BY3Rpb25fTG9nXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb25Mb2dUYWJsZS5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbihcIkFjdGlvbklEXCIsIGFjdGlvbklkcykpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb25Mb2dUYWJsZS5zZXRWYWx1ZSgnSXNTZW5kJywgJ1knKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHVwZGF0ZVJlc3AgPSBhd2FpdCBkYW8udXBkYXRlQnlUYWJsZShBY3Rpb25Mb2dUYWJsZSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlUmVzcDpcIiwgZGVsZXRlUmVzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1jYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKCdwdXNoQWN0aW9uTG9nIGZhaWwhJykpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufSJdfQ==