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
export class LogService {
    /**
     * @param {?} DaoFactory
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} errorHandler
     */
    constructor(DaoFactory, APIFactory, dispatcher, errorHandler) {
        this.DaoFactory = DaoFactory;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.errorHandler = errorHandler;
    }
    /**
     * @return {?}
     */
    pushErrorLog() {
        return from(this._pushErrorLog());
    }
    /**
     * @return {?}
     */
    pushActionLog() {
        return from(this._pushActionLog());
    }
    /**
     * @private
     * @return {?}
     */
    _pushErrorLog() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //GET DB DATA
                console.log("into pushErrorLog()");
                /** @type {?} */
                let dao = this.DaoFactory.getDao("Profile");
                /** @type {?} */
                let ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                if (ErrorLogTable) {
                    ErrorLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                    /** @type {?} */
                    let resp = yield dao.queryByTable(ErrorLogTable).toPromise();
                    if (resp.Header["status"]) {
                        console.log("error log table data:", resp.Body);
                        /** @type {?} */
                        let errorList = resp.Body;
                        /** @type {?} */
                        let pushErrorLogAPI = this.APIFactory.getAPI("PushErrorLog");
                        ((/** @type {?} */ (pushErrorLogAPI))).errorList = errorList;
                        /** @type {?} */
                        let pushResp = yield this.dispatcher.dispatch(pushErrorLogAPI).toPromise();
                        console.log("push error Log resp:", pushResp);
                        if (pushResp["success"]) {
                            // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Error_Log where 1=1', [])]);
                            ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                            /** @type {?} */
                            let deleteResp = yield dao.deleteByTable(ErrorLogTable).toPromise();
                            // let errorIds = resp.Body.map(x => x.ErrorID);
                            // ErrorLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Error_Log");
                            // ErrorLogTable.addRestriction(new InRestriction("ErrorID", errorIds));
                            // ErrorLogTable.setValue('IsSend', 'Y');
                            // let updateResp = await dao.updateByTable(ErrorLogTable).toPromise();
                            console.log("deleteResp:", deleteResp);
                        }
                    }
                }
            }
            catch (error) {
                this.errorHandler.handleError(new Error('pushErrorLog fail!'));
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    _pushActionLog() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                console.log("into pushActionLog()");
                /** @type {?} */
                let dao = this.DaoFactory.getDao("Profile");
                /** @type {?} */
                let ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                ActionLogTable.addRestriction(new NotEqualRestriction("IsSend", ['Y']));
                /** @type {?} */
                let resp = yield dao.queryByTable(ActionLogTable).toPromise();
                if (resp.Header["status"]) {
                    console.log("Action log table data:", resp.Body);
                    /** @type {?} */
                    let actionList = resp.Body;
                    /** @type {?} */
                    let pushActionLogAPI = this.APIFactory.getAPI("PushActionLog");
                    ((/** @type {?} */ (pushActionLogAPI))).actionList = actionList;
                    /** @type {?} */
                    let pushResp = yield this.dispatcher.dispatch(pushActionLogAPI).toPromise();
                    console.log("push action Log resp:", pushResp);
                    if (pushResp["success"]) {
                        // let deleteResp = dao.excuteSqlCommand([new SQLCommand('delete from TW_LH_SD_Action_Log where 1=1', [])]);
                        ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                        /** @type {?} */
                        let deleteResp = yield dao.deleteByTable(ActionLogTable).toPromise();
                        // let actionIds = resp.Body.map(x => x.ActionID);
                        // ActionLogTable = this.DaoFactory.getTable("Profile", "TW_LH_SD_Action_Log");
                        // ActionLogTable.addRestriction(new InRestriction("ActionID", actionIds));
                        // ActionLogTable.setValue('IsSend', 'Y');
                        // let updateResp = await dao.updateByTable(ActionLogTable).toPromise();
                        console.log("deleteResp:", deleteResp);
                    }
                }
            }
            catch (error) {
                this.errorHandler.handleError(new Error('pushActionLog fail!'));
            }
        });
    }
}
LogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LogService.ctorParameters = () => [
    { type: DaoFactory },
    { type: APIFactory },
    { type: APIDispatch },
    { type: ErrorHandler }
];
/** @nocollapse */ LogService.ngInjectableDef = i0.defineInjectable({ factory: function LogService_Factory() { return new LogService(i0.inject(i1.DaoFactory), i0.inject(i2.APIFactory), i0.inject(i3.APIDispatch), i0.inject(i0.ErrorHandler)); }, token: LogService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvbG9nL2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFLM0YsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFLeEMsTUFBTTs7Ozs7OztJQUVGLFlBQ1ksVUFBc0IsRUFDdEIsVUFBc0IsRUFDdEIsVUFBdUIsRUFDdkIsWUFBeUI7UUFIekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFHckMsQ0FBQzs7OztJQUNNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ00sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVhLGFBQWE7O1lBQ3ZCLElBQUk7Z0JBQ0EsYUFBYTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7O29CQUMvQixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDOztvQkFDdkMsYUFB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dUJBQXVCLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9DLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUNyQiw0R0FBNEc7d0JBQzVHLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQzs7NEJBQ3hFLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxFQUFFO3dCQUNwRSxrREFBa0Q7d0JBQ2xELCtFQUErRTt3QkFDL0UsMkVBQTJFO3dCQUMzRSwwQ0FBMEM7d0JBQzFDLHdFQUF3RTt3QkFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7cUJBQzFDO2lCQUNKO2FBRUo7WUFBQSxPQUFPLEtBQUssRUFBQztnQkFDVixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7YUFDbkU7UUFFTCxDQUFDO0tBQUE7OztZQXZGSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7OztZQWJRLFVBQVU7WUFDVixVQUFVO1lBRVYsV0FBVztZQUpDLFlBQVk7Ozs7Ozs7O0lBa0J6QixnQ0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIsZ0NBQStCOzs7OztJQUMvQixrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGFvRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL0Rhb0ZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IFB1c2hFcnJvckxvZ0FQSSB9IGZyb20gXCIuLi8uLi9hcGkvcmVnaXN0ZXIvcHVzaEVycm9yTG9nQVBJXCI7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9hcGkvQVBJRGlzcGF0Y2hcIjtcbmltcG9ydCB7IE5vdEVxdWFsUmVzdHJpY3Rpb24gfSBmcm9tIFwiLi4vLi4vZGV2aWNlL3NxbGl0ZS9yZXN0cmljdGlvbnMvTm90RXF1YWxSZXN0cmljdGlvblwiO1xuaW1wb3J0IHsgSW5SZXN0cmljdGlvbiB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL3Jlc3RyaWN0aW9ucy9JblJlc3RyaWN0aW9uXCI7XG5pbXBvcnQgeyBQdXNoQWN0aW9uTG9nQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9yZWdpc3Rlci9QdXNoQWN0aW9uTG9nQVBJXCI7XG5pbXBvcnQgeyBTUUxpdGVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9kZXZpY2Uvc3FsaXRlL1NRTGl0ZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTUUxDb21tYW5kIH0gZnJvbSBcIi4uLy4uL2RldmljZS9zcWxpdGUvU1FMQ29tbWFuZFwiO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBEYW9GYWN0b3J5OiBEYW9GYWN0b3J5LFxuICAgICAgICBwcml2YXRlIEFQSUZhY3Rvcnk6IEFQSUZhY3RvcnksXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOkVycm9ySGFuZGxlclxuICAgICkge1xuXG4gICAgfVxuICAgIHB1YmxpYyBwdXNoRXJyb3JMb2coKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiBmcm9tKHRoaXMuX3B1c2hFcnJvckxvZygpKTtcbiAgICB9XG4gICAgcHVibGljIHB1c2hBY3Rpb25Mb2coKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiBmcm9tKHRoaXMuX3B1c2hBY3Rpb25Mb2coKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfcHVzaEVycm9yTG9nKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9HRVQgREIgREFUQVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRvIHB1c2hFcnJvckxvZygpXCIpO1xuICAgICAgICAgICAgbGV0IGRhbyA9IHRoaXMuRGFvRmFjdG9yeS5nZXREYW8oXCJQcm9maWxlXCIpO1xuICAgICAgICAgICAgbGV0IEVycm9yTG9nVGFibGUgPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRXJyb3JfTG9nXCIpO1xuICAgICAgICAgICAgaWYgKEVycm9yTG9nVGFibGUpIHtcbiAgICAgICAgICAgICAgICBFcnJvckxvZ1RhYmxlLmFkZFJlc3RyaWN0aW9uKG5ldyBOb3RFcXVhbFJlc3RyaWN0aW9uKFwiSXNTZW5kXCIsIFsnWSddKSlcbiAgICAgICAgICAgICAgICBsZXQgcmVzcDogU1FMaXRlUmVzcG9uc2UgPSBhd2FpdCBkYW8ucXVlcnlCeVRhYmxlKEVycm9yTG9nVGFibGUpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLkhlYWRlcltcInN0YXR1c1wiXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvZyB0YWJsZSBkYXRhOlwiLCByZXNwLkJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JMaXN0ID0gcmVzcC5Cb2R5O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHVzaEVycm9yTG9nQVBJID0gdGhpcy5BUElGYWN0b3J5LmdldEFQSShcIlB1c2hFcnJvckxvZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgKDxQdXNoRXJyb3JMb2dBUEk+cHVzaEVycm9yTG9nQVBJKS5lcnJvckxpc3QgPSBlcnJvckxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwdXNoUmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwdXNoRXJyb3JMb2dBUEkpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInB1c2ggZXJyb3IgTG9nIHJlc3A6XCIsIHB1c2hSZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1c2hSZXNwW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGRlbGV0ZVJlc3AgPSBkYW8uZXhjdXRlU3FsQ29tbWFuZChbbmV3IFNRTENvbW1hbmQoJ2RlbGV0ZSBmcm9tIFRXX0xIX1NEX0Vycm9yX0xvZyB3aGVyZSAxPTEnLCBbXSldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yTG9nVGFibGUgPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0VGFibGUoXCJQcm9maWxlXCIsIFwiVFdfTEhfU0RfRXJyb3JfTG9nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZVJlc3AgPSBhd2FpdCBkYW8uZGVsZXRlQnlUYWJsZShFcnJvckxvZ1RhYmxlKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVycm9ySWRzID0gcmVzcC5Cb2R5Lm1hcCh4ID0+IHguRXJyb3JJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvckxvZ1RhYmxlID0gdGhpcy5EYW9GYWN0b3J5LmdldFRhYmxlKFwiUHJvZmlsZVwiLCBcIlRXX0xIX1NEX0Vycm9yX0xvZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVycm9yTG9nVGFibGUuYWRkUmVzdHJpY3Rpb24obmV3IEluUmVzdHJpY3Rpb24oXCJFcnJvcklEXCIsIGVycm9ySWRzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvckxvZ1RhYmxlLnNldFZhbHVlKCdJc1NlbmQnLCAnWScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHVwZGF0ZVJlc3AgPSBhd2FpdCBkYW8udXBkYXRlQnlUYWJsZShFcnJvckxvZ1RhYmxlKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlUmVzcDpcIiwgZGVsZXRlUmVzcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKCdwdXNoRXJyb3JMb2cgZmFpbCEnKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfcHVzaEFjdGlvbkxvZygpIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRvIHB1c2hBY3Rpb25Mb2coKVwiKTtcbiAgICAgICAgICAgIGxldCBkYW8gPSB0aGlzLkRhb0ZhY3RvcnkuZ2V0RGFvKFwiUHJvZmlsZVwiKTtcbiAgICAgICAgICAgIGxldCBBY3Rpb25Mb2dUYWJsZSA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9BY3Rpb25fTG9nXCIpO1xuICAgICAgICAgICAgQWN0aW9uTG9nVGFibGUuYWRkUmVzdHJpY3Rpb24obmV3IE5vdEVxdWFsUmVzdHJpY3Rpb24oXCJJc1NlbmRcIiwgWydZJ10pKTtcbiAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGFvLnF1ZXJ5QnlUYWJsZShBY3Rpb25Mb2dUYWJsZSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBpZiAocmVzcC5IZWFkZXJbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbiBsb2cgdGFibGUgZGF0YTpcIiwgcmVzcC5Cb2R5KTtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTGlzdCA9IHJlc3AuQm9keTtcbiAgICAgICAgICAgICAgICBsZXQgcHVzaEFjdGlvbkxvZ0FQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJQdXNoQWN0aW9uTG9nXCIpO1xuICAgICAgICAgICAgICAgICg8UHVzaEFjdGlvbkxvZ0FQST5wdXNoQWN0aW9uTG9nQVBJKS5hY3Rpb25MaXN0ID0gYWN0aW9uTGlzdDtcbiAgICAgICAgICAgICAgICBsZXQgcHVzaFJlc3AgPSBhd2FpdCB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2gocHVzaEFjdGlvbkxvZ0FQSSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdXNoIGFjdGlvbiBMb2cgcmVzcDpcIiwgcHVzaFJlc3ApO1xuICAgICAgICAgICAgICAgIGlmIChwdXNoUmVzcFtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGRlbGV0ZVJlc3AgPSBkYW8uZXhjdXRlU3FsQ29tbWFuZChbbmV3IFNRTENvbW1hbmQoJ2RlbGV0ZSBmcm9tIFRXX0xIX1NEX0FjdGlvbl9Mb2cgd2hlcmUgMT0xJywgW10pXSk7XG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkxvZ1RhYmxlID0gdGhpcy5EYW9GYWN0b3J5LmdldFRhYmxlKFwiUHJvZmlsZVwiLCBcIlRXX0xIX1NEX0FjdGlvbl9Mb2dcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVSZXNwID0gYXdhaXQgZGFvLmRlbGV0ZUJ5VGFibGUoQWN0aW9uTG9nVGFibGUpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYWN0aW9uSWRzID0gcmVzcC5Cb2R5Lm1hcCh4ID0+IHguQWN0aW9uSUQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb25Mb2dUYWJsZSA9IHRoaXMuRGFvRmFjdG9yeS5nZXRUYWJsZShcIlByb2ZpbGVcIiwgXCJUV19MSF9TRF9BY3Rpb25fTG9nXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb25Mb2dUYWJsZS5hZGRSZXN0cmljdGlvbihuZXcgSW5SZXN0cmljdGlvbihcIkFjdGlvbklEXCIsIGFjdGlvbklkcykpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb25Mb2dUYWJsZS5zZXRWYWx1ZSgnSXNTZW5kJywgJ1knKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHVwZGF0ZVJlc3AgPSBhd2FpdCBkYW8udXBkYXRlQnlUYWJsZShBY3Rpb25Mb2dUYWJsZSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlUmVzcDpcIiwgZGVsZXRlUmVzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1jYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKCdwdXNoQWN0aW9uTG9nIGZhaWwhJykpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufSJdfQ==