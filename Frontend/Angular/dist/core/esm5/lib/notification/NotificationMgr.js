/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { APIFactory } from "../api/APIFactory";
import { APIDispatch } from "../api/APIDispatch";
import { APPError } from "../errorHandler/APPError";
import { NotificationProvider } from "./NotificationProvider";
import * as i0 from "@angular/core";
import * as i1 from "./NotificationProvider";
var NotificationMgr = /** @class */ (function () {
    function NotificationMgr(injector, errorHandler, notificationProvider) {
        this.injector = injector;
        this.errorHandler = errorHandler;
        this.notificationProvider = notificationProvider;
        this.DBMessage = [];
        this.notificationList = [];
        this.notificationSubject = new BehaviorSubject(this.notificationList);
    }
    /**
     * @return {?}
     */
    NotificationMgr.prototype.init = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("NotificationMgr init");
                        return [4 /*yield*/, this.fetchMessageData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    NotificationMgr.prototype.getNotificationList = /**
     * @return {?}
     */
    function () {
        console.log("NotificationMgr getNotificationList");
        return this.notificationSubject.asObservable();
    };
    /**
     * @param {?} type
     * @param {?} data
     * @return {?}
     */
    NotificationMgr.prototype.pushNotification = /**
     * @param {?} type
     * @param {?} data
     * @return {?}
     */
    function (type, data) {
        /** @type {?} */
        var notify = this.notificationProvider.getNotificationObject(type, data);
        console.log("NotificationMgr pushNotification:", notify);
        // 處理reminder message
        if (notify.action) {
            /** @type {?} */
            var duplicateList = this.notificationList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.category === notify.category && x.type === notify.type; }));
            /** @type {?} */
            var conflictResult = notify.action.onConflict(duplicateList, notify);
            this.notificationList = tslib_1.__spread(conflictResult, this.notificationList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.category !== notify.category || x.type !== notify.type; })));
        }
        else {
            this.notificationList.push(notify);
        }
        this.notificationList = this.notificationList.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        this.notificationSubject.next(this.notificationList);
    };
    /**
     * @param {?} notification
     * @return {?}
     */
    NotificationMgr.prototype.popNotification = /**
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        console.log("NotificationMgr popNotification:", notification);
        try {
            /** @type {?} */
            var popped = this.notificationList.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.id === notification.id; })).length > 0;
            console.log("popNotification:", popped);
            if (popped) {
                this.notificationList = this.notificationList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.id !== notification.id; }));
                this.notificationSubject.next(this.notificationList);
                console.log("after popped:", this.notificationList);
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError("F00021", error.message));
        }
    };
    /**
     * @return {?}
     */
    NotificationMgr.prototype.getUnreadMessageNumber = /**
     * @return {?}
     */
    function () {
        return this.DBMessage.length;
    };
    /**
     * @return {?}
     */
    NotificationMgr.prototype.popAllNotification = /**
     * @return {?}
     */
    function () {
        this.notificationList = [];
        this.notificationSubject.next(this.notificationList);
    };
    /**
     * @param {?=} category
     * @param {?=} type
     * @return {?}
     */
    NotificationMgr.prototype.showCategoryMessage = /**
     * @param {?=} category
     * @param {?=} type
     * @return {?}
     */
    function (category, type) {
        if (category === void 0) { category = null; }
        if (type === void 0) { type = null; }
        console.log("NotificationMgr ShowCategoryMessage:", category, type);
        /** @type {?} */
        var selected = this.DBMessage.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            return ((x.category === category) || (!category)) && ((x.type === type) || (!type));
        }));
        /** @type {?} */
        var selected_id = selected.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id; }));
        if (selected.length > 0) {
            this.notificationList = tslib_1.__spread(this.notificationList, selected);
            this.notificationSubject.next(this.notificationList);
            this.DBMessage = this.DBMessage.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return selected_id.indexOf(x.id) < 0; }));
            // update db message status
            /** @type {?} */
            var APIFactory_1 = this.getAPIFactory();
            /** @type {?} */
            var dispatcher = this.getAPIDispatch();
            /** @type {?} */
            var updateMessageStatusAPI = APIFactory_1.getAPI('updateDashboardMessageStatus');
            ((/** @type {?} */ (updateMessageStatusAPI))).setClientIDList(selected_id);
            ((/** @type {?} */ (updateMessageStatusAPI))).setStatus('Reading');
            dispatcher.dispatch(updateMessageStatusAPI).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                console.log("NotificationMgr popNotification updateMessageStatusAPI resp:", resp);
            }));
        }
    };
    /**
     * @return {?}
     */
    NotificationMgr.prototype.fetchMessageData = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fetched_messages, APIFactory_2, dispatcher, getMessageAPI, resp, messageList, err_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("NotificationMgr fetchMessageData");
                        fetched_messages = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        APIFactory_2 = this.getAPIFactory();
                        dispatcher = this.getAPIDispatch();
                        getMessageAPI = APIFactory_2.getAPI("getDashboardMessageList");
                        ((/** @type {?} */ (getMessageAPI))).setKeyword("UnRead");
                        ((/** @type {?} */ (getMessageAPI))).setIsPopup(true);
                        return [4 /*yield*/, dispatcher.dispatch(getMessageAPI).toPromise()];
                    case 2:
                        resp = _a.sent();
                        messageList = resp['Body'];
                        fetched_messages = messageList.map((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) {
                            return _this.notificationProvider.getNotificationObject(x.MessageType, Object.assign({
                                "Source": "DB",
                                "Title": x.Title,
                                "Description": x.Description,
                            }, JSON.parse(x.Arguments)), x.ClientID);
                        }));
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.errorHandler.handleError(new APPError("F00020", err_1.message));
                        return [3 /*break*/, 4];
                    case 4:
                        this.DBMessage = fetched_messages;
                        console.log("NotificationMgr fetchMessageData end", this.DBMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    NotificationMgr.prototype.getAPIFactory = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var factory = this.injector.get(APIFactory);
            return factory;
        }
        catch (_a) {
            return null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NotificationMgr.prototype.getAPIDispatch = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var dispatcher = this.injector.get(APIDispatch);
            return dispatcher;
        }
        catch (_a) {
            return null;
        }
    };
    NotificationMgr.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NotificationMgr.ctorParameters = function () { return [
        { type: Injector },
        { type: ErrorHandler },
        { type: NotificationProvider }
    ]; };
    /** @nocollapse */ NotificationMgr.ngInjectableDef = i0.defineInjectable({ factory: function NotificationMgr_Factory() { return new NotificationMgr(i0.inject(i0.INJECTOR), i0.inject(i0.ErrorHandler), i0.inject(i1.NotificationProvider)); }, token: NotificationMgr, providedIn: "root" });
    return NotificationMgr;
}());
export { NotificationMgr };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationMgr.prototype.DBMessage;
    /**
     * @type {?}
     * @private
     */
    NotificationMgr.prototype.notificationList;
    /**
     * @type {?}
     * @private
     */
    NotificationMgr.prototype.notificationSubject;
    /**
     * @type {?}
     * @private
     */
    NotificationMgr.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NotificationMgr.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    NotificationMgr.prototype.notificationProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uTWdyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9ub3RpZmljYXRpb24vTm90aWZpY2F0aW9uTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBdUIsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFJOUQ7SUFRSSx5QkFDWSxRQUFrQixFQUNsQixZQUEwQixFQUMxQixvQkFBMEM7UUFGMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTjlDLGNBQVMsR0FBOEIsRUFBRSxDQUFDO1FBQzFDLHFCQUFnQixHQUE4QixFQUFFLENBQUM7UUFDakQsd0JBQW1CLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBTzdHLENBQUM7Ozs7SUFFSyw4QkFBSTs7O0lBQVY7Ozs7O3dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQzt3QkFDcEMscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDOzs7OztLQUNqQzs7OztJQUVNLDZDQUFtQjs7O0lBQTFCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FB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VSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7O2dCQWRrQyxRQUFRO2dCQUF0QixZQUFZO2dCQVF4QixvQkFBb0I7OzswQkFSN0I7Q0FrSkMsQUF0SUQsSUFzSUM7U0FuSVksZUFBZTs7Ozs7O0lBRXhCLG9DQUFrRDs7Ozs7SUFDbEQsMkNBQXlEOzs7OztJQUN6RCw4Q0FBNkc7Ozs7O0lBRXpHLG1DQUEwQjs7Ozs7SUFDMUIsdUNBQWtDOzs7OztJQUNsQywrQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25PYmplY3QgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb25PYmplY3RcIjtcbmltcG9ydCB7IEFQSUZhY3RvcnkgfSBmcm9tIFwiLi4vYXBpL0FQSUZhY3RvcnlcIjtcbmltcG9ydCB7IEFQSURpc3BhdGNoIH0gZnJvbSBcIi4uL2FwaS9BUElEaXNwYXRjaFwiO1xuaW1wb3J0IHsgRGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEkgfSBmcm9tIFwiLi4vYXBpL3JlZ2lzdGVyL0Rhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJXCI7XG5pbXBvcnQgeyBBUFBFcnJvciB9IGZyb20gXCIuLi9lcnJvckhhbmRsZXIvQVBQRXJyb3JcIjtcbmltcG9ydCB7IERhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkgfSBmcm9tIFwiLi4vYXBpL3JlZ2lzdGVyL0Rhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUElcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByb3ZpZGVyIH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uUHJvdmlkZXJcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tIFwiLi9JTm90aWZpY2F0aW9uUHJvdmlkZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uTWdyIHtcblxuICAgIHByaXZhdGUgREJNZXNzYWdlOiBBcnJheTxOb3RpZmljYXRpb25PYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25MaXN0OiBBcnJheTxOb3RpZmljYXRpb25PYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TdWJqZWN0OiBTdWJqZWN0PEFycmF5PE5vdGlmaWNhdGlvbk9iamVjdD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLm5vdGlmaWNhdGlvbkxpc3QpO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25Qcm92aWRlcjogTm90aWZpY2F0aW9uUHJvdmlkZXJcbiAgICApIHtcblxuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uTWdyIGluaXRcIik7XG4gICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hNZXNzYWdlRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb3RpZmljYXRpb25MaXN0KCk6IE9ic2VydmFibGU8QXJyYXk8Tm90aWZpY2F0aW9uT2JqZWN0Pj4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbk1nciBnZXROb3RpZmljYXRpb25MaXN0XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXNoTm90aWZpY2F0aW9uKHR5cGU6IE5vdGlmaWNhdGlvblR5cGUsIGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgbm90aWZ5ID0gdGhpcy5ub3RpZmljYXRpb25Qcm92aWRlci5nZXROb3RpZmljYXRpb25PYmplY3QodHlwZSwgZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uTWdyIHB1c2hOb3RpZmljYXRpb246XCIsIG5vdGlmeSk7XG4gICAgICAgIC8vIOiZleeQhlxicmVtaW5kZXIgbWVzc2FnZVxuICAgICAgICBpZiAobm90aWZ5LmFjdGlvbikge1xuICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZUxpc3QgPSB0aGlzLm5vdGlmaWNhdGlvbkxpc3QuZmlsdGVyKHggPT4geC5jYXRlZ29yeSA9PT0gbm90aWZ5LmNhdGVnb3J5ICYmIHgudHlwZSA9PT0gbm90aWZ5LnR5cGUpO1xuICAgICAgICAgICAgbGV0IGNvbmZsaWN0UmVzdWx0ID0gbm90aWZ5LmFjdGlvbi5vbkNvbmZsaWN0KGR1cGxpY2F0ZUxpc3QsIG5vdGlmeSk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QgPSBbLi4uY29uZmxpY3RSZXN1bHQsIC4uLnRoaXMubm90aWZpY2F0aW9uTGlzdC5maWx0ZXIoeCA9PiB4LmNhdGVnb3J5ICE9PSBub3RpZnkuY2F0ZWdvcnkgfHwgeC50eXBlICE9PSBub3RpZnkudHlwZSldXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QucHVzaChub3RpZnkpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QgPSB0aGlzLm5vdGlmaWNhdGlvbkxpc3Quc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN1YmplY3QubmV4dCh0aGlzLm5vdGlmaWNhdGlvbkxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3BOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25PYmplY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb25NZ3IgcG9wTm90aWZpY2F0aW9uOlwiLCBub3RpZmljYXRpb24pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBvcHBlZCA9IHRoaXMubm90aWZpY2F0aW9uTGlzdC5maWx0ZXIoeCA9PiB4LmlkID09PSBub3RpZmljYXRpb24uaWQpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvcE5vdGlmaWNhdGlvbjpcIiwgcG9wcGVkKTtcbiAgICAgICAgICAgIGlmIChwb3BwZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QgPSB0aGlzLm5vdGlmaWNhdGlvbkxpc3QuZmlsdGVyKHggPT4geC5pZCAhPT0gbm90aWZpY2F0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN1YmplY3QubmV4dCh0aGlzLm5vdGlmaWNhdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgcG9wcGVkOlwiLCB0aGlzLm5vdGlmaWNhdGlvbkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwMDIxXCIsIGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVbnJlYWRNZXNzYWdlTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5EQk1lc3NhZ2UubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3BBbGxOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN1YmplY3QubmV4dCh0aGlzLm5vdGlmaWNhdGlvbkxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93Q2F0ZWdvcnlNZXNzYWdlKGNhdGVnb3J5OiBzdHJpbmcgPSBudWxsLCB0eXBlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uTWdyIFNob3dDYXRlZ29yeU1lc3NhZ2U6XCIsIGNhdGVnb3J5LCB0eXBlKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5EQk1lc3NhZ2UuZmlsdGVyKHggPT5cbiAgICAgICAgICAgICgoeC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIHx8ICghY2F0ZWdvcnkpKSAmJiAoKHgudHlwZSA9PT0gdHlwZSkgfHwgKCF0eXBlKSkpXG4gICAgICAgIGxldCBzZWxlY3RlZF9pZCA9IHNlbGVjdGVkLm1hcCh4ID0+IHguaWQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25MaXN0ID0gWy4uLnRoaXMubm90aWZpY2F0aW9uTGlzdCwgLi4uc2VsZWN0ZWRdO1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdWJqZWN0Lm5leHQodGhpcy5ub3RpZmljYXRpb25MaXN0KTtcbiAgICAgICAgICAgIHRoaXMuREJNZXNzYWdlID0gdGhpcy5EQk1lc3NhZ2UuZmlsdGVyKHggPT4gc2VsZWN0ZWRfaWQuaW5kZXhPZih4LmlkKSA8IDApO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZGIgbWVzc2FnZSBzdGF0dXNcbiAgICAgICAgICAgIGxldCBBUElGYWN0b3J5ID0gdGhpcy5nZXRBUElGYWN0b3J5KCk7XG4gICAgICAgICAgICBsZXQgZGlzcGF0Y2hlciA9IHRoaXMuZ2V0QVBJRGlzcGF0Y2goKTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVNZXNzYWdlU3RhdHVzQVBJID0gQVBJRmFjdG9yeS5nZXRBUEkoJ3VwZGF0ZURhc2hib2FyZE1lc3NhZ2VTdGF0dXMnKTtcbiAgICAgICAgICAgICg8RGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQST51cGRhdGVNZXNzYWdlU3RhdHVzQVBJKS5zZXRDbGllbnRJRExpc3Qoc2VsZWN0ZWRfaWQpO1xuICAgICAgICAgICAgKDxEYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJPnVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkpLnNldFN0YXR1cygnUmVhZGluZycpO1xuICAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaCh1cGRhdGVNZXNzYWdlU3RhdHVzQVBJKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbk1nciBwb3BOb3RpZmljYXRpb24gdXBkYXRlTWVzc2FnZVN0YXR1c0FQSSByZXNwOlwiLCByZXNwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hNZXNzYWdlRGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb25NZ3IgZmV0Y2hNZXNzYWdlRGF0YVwiKTtcbiAgICAgICAgbGV0IGZldGNoZWRfbWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBBUElGYWN0b3J5ID0gdGhpcy5nZXRBUElGYWN0b3J5KCk7XG4gICAgICAgICAgICBsZXQgZGlzcGF0Y2hlciA9IHRoaXMuZ2V0QVBJRGlzcGF0Y2goKTtcbiAgICAgICAgICAgIGxldCBnZXRNZXNzYWdlQVBJID0gQVBJRmFjdG9yeS5nZXRBUEkoXCJnZXREYXNoYm9hcmRNZXNzYWdlTGlzdFwiKTtcbiAgICAgICAgICAgICg8RGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEk+Z2V0TWVzc2FnZUFQSSkuc2V0S2V5d29yZChcIlVuUmVhZFwiKTtcbiAgICAgICAgICAgICg8RGFzaGJvYXJkR2V0TWVzc2FnZUxpc3RBUEk+Z2V0TWVzc2FnZUFQSSkuc2V0SXNQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZGlzcGF0Y2hlci5kaXNwYXRjaChnZXRNZXNzYWdlQVBJKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlTGlzdCA9IHJlc3BbJ0JvZHknXTtcbiAgICAgICAgICAgIGZldGNoZWRfbWVzc2FnZXMgPSBtZXNzYWdlTGlzdC5tYXAoeCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uUHJvdmlkZXIuZ2V0Tm90aWZpY2F0aW9uT2JqZWN0KHguTWVzc2FnZVR5cGUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBcIlNvdXJjZVwiOiBcIkRCXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVGl0bGVcIjogeC5UaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgXCJEZXNjcmlwdGlvblwiOiB4LkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH0sIEpTT04ucGFyc2UoeC5Bcmd1bWVudHMpKSwgeC5DbGllbnRJRCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgQVBQRXJyb3IoXCJGMDAwMjBcIiwgZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkRCTWVzc2FnZSA9IGZldGNoZWRfbWVzc2FnZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uTWdyIGZldGNoTWVzc2FnZURhdGEgZW5kXCIsIHRoaXMuREJNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFQSUZhY3RvcnkoKTogQVBJRmFjdG9yeSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZmFjdG9yeSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFQSUZhY3RvcnkpO1xuICAgICAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2h7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QVBJRGlzcGF0Y2goKTogQVBJRGlzcGF0Y2gge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmluamVjdG9yLmdldChBUElEaXNwYXRjaCk7XG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2hlcjtcbiAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59Il19