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
export class NotificationMgr {
    /**
     * @param {?} injector
     * @param {?} errorHandler
     * @param {?} notificationProvider
     */
    constructor(injector, errorHandler, notificationProvider) {
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
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("NotificationMgr init");
            yield this.fetchMessageData();
        });
    }
    /**
     * @return {?}
     */
    getNotificationList() {
        console.log("NotificationMgr getNotificationList");
        return this.notificationSubject.asObservable();
    }
    /**
     * @param {?} type
     * @param {?} data
     * @return {?}
     */
    pushNotification(type, data) {
        /** @type {?} */
        let notify = this.notificationProvider.getNotificationObject(type, data);
        console.log("NotificationMgr pushNotification:", notify);
        // 處理reminder message
        if (notify.action) {
            /** @type {?} */
            let duplicateList = this.notificationList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.category === notify.category && x.type === notify.type));
            /** @type {?} */
            let conflictResult = notify.action.onConflict(duplicateList, notify);
            this.notificationList = [...conflictResult, ...this.notificationList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.category !== notify.category || x.type !== notify.type))];
        }
        else {
            this.notificationList.push(notify);
        }
        this.notificationList = this.notificationList.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
        this.notificationSubject.next(this.notificationList);
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    popNotification(notification) {
        console.log("NotificationMgr popNotification:", notification);
        try {
            /** @type {?} */
            let popped = this.notificationList.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.id === notification.id)).length > 0;
            console.log("popNotification:", popped);
            if (popped) {
                this.notificationList = this.notificationList.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.id !== notification.id));
                this.notificationSubject.next(this.notificationList);
                console.log("after popped:", this.notificationList);
            }
        }
        catch (error) {
            this.errorHandler.handleError(new APPError("F00021", error.message));
        }
    }
    /**
     * @return {?}
     */
    getUnreadMessageNumber() {
        return this.DBMessage.length;
    }
    /**
     * @return {?}
     */
    popAllNotification() {
        this.notificationList = [];
        this.notificationSubject.next(this.notificationList);
    }
    /**
     * @param {?=} category
     * @param {?=} type
     * @return {?}
     */
    showCategoryMessage(category = null, type = null) {
        console.log("NotificationMgr ShowCategoryMessage:", category, type);
        /** @type {?} */
        let selected = this.DBMessage.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => ((x.category === category) || (!category)) && ((x.type === type) || (!type))));
        /** @type {?} */
        let selected_id = selected.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        if (selected.length > 0) {
            this.notificationList = [...this.notificationList, ...selected];
            this.notificationSubject.next(this.notificationList);
            this.DBMessage = this.DBMessage.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => selected_id.indexOf(x.id) < 0));
            // update db message status
            /** @type {?} */
            let APIFactory = this.getAPIFactory();
            /** @type {?} */
            let dispatcher = this.getAPIDispatch();
            /** @type {?} */
            let updateMessageStatusAPI = APIFactory.getAPI('updateDashboardMessageStatus');
            ((/** @type {?} */ (updateMessageStatusAPI))).setClientIDList(selected_id);
            ((/** @type {?} */ (updateMessageStatusAPI))).setStatus('Reading');
            dispatcher.dispatch(updateMessageStatusAPI).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                console.log("NotificationMgr popNotification updateMessageStatusAPI resp:", resp);
            }));
        }
    }
    /**
     * @return {?}
     */
    fetchMessageData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("NotificationMgr fetchMessageData");
            /** @type {?} */
            let fetched_messages = [];
            try {
                /** @type {?} */
                let APIFactory = this.getAPIFactory();
                /** @type {?} */
                let dispatcher = this.getAPIDispatch();
                /** @type {?} */
                let getMessageAPI = APIFactory.getAPI("getDashboardMessageList");
                ((/** @type {?} */ (getMessageAPI))).setKeyword("UnRead");
                ((/** @type {?} */ (getMessageAPI))).setIsPopup(true);
                /** @type {?} */
                let resp = yield dispatcher.dispatch(getMessageAPI).toPromise();
                /** @type {?} */
                let messageList = resp['Body'];
                fetched_messages = messageList.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    return this.notificationProvider.getNotificationObject(x.MessageType, Object.assign({
                        "Source": "DB",
                        "Title": x.Title,
                        "Description": x.Description,
                    }, JSON.parse(x.Arguments)), x.ClientID);
                }));
            }
            catch (err) {
                this.errorHandler.handleError(new APPError("F00020", err.message));
            }
            this.DBMessage = fetched_messages;
            console.log("NotificationMgr fetchMessageData end", this.DBMessage);
        });
    }
    /**
     * @private
     * @return {?}
     */
    getAPIFactory() {
        try {
            /** @type {?} */
            let factory = this.injector.get(APIFactory);
            return factory;
        }
        catch (_a) {
            return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getAPIDispatch() {
        try {
            /** @type {?} */
            let dispatcher = this.injector.get(APIDispatch);
            return dispatcher;
        }
        catch (_a) {
            return null;
        }
    }
}
NotificationMgr.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NotificationMgr.ctorParameters = () => [
    { type: Injector },
    { type: ErrorHandler },
    { type: NotificationProvider }
];
/** @nocollapse */ NotificationMgr.ngInjectableDef = i0.defineInjectable({ factory: function NotificationMgr_Factory() { return new NotificationMgr(i0.inject(i0.INJECTOR), i0.inject(i0.ErrorHandler), i0.inject(i1.NotificationProvider)); }, token: NotificationMgr, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uTWdyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9ub3RpZmljYXRpb24vTm90aWZpY2F0aW9uTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBdUIsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPOUQsTUFBTTs7Ozs7O0lBS0YsWUFDWSxRQUFrQixFQUNsQixZQUEwQixFQUMxQixvQkFBMEM7UUFGMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTjlDLGNBQVMsR0FBOEIsRUFBRSxDQUFDO1FBQzFDLHFCQUFnQixHQUE4QixFQUFFLENBQUM7UUFDakQsd0JBQW1CLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBTzdHLENBQUM7Ozs7SUFFSyxJQUFJOztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTs7OztJQUVNLG1CQUFtQjtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsbUJBQW1C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Qzs7Ozs7SUFDbEMsK0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXJyb3JIYW5kbGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uT2JqZWN0IH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uT2JqZWN0XCI7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSBcIi4uL2FwaS9BUElGYWN0b3J5XCI7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gXCIuLi9hcGkvQVBJRGlzcGF0Y2hcIjtcbmltcG9ydCB7IERhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJIH0gZnJvbSBcIi4uL2FwaS9yZWdpc3Rlci9EYXNoYm9hcmRHZXRNZXNzYWdlTGlzdEFQSVwiO1xuaW1wb3J0IHsgQVBQRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3JIYW5kbGVyL0FQUEVycm9yXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJIH0gZnJvbSBcIi4uL2FwaS9yZWdpc3Rlci9EYXNoYm9hcmRVcGRhdGVNZXNzYWdlU3RhdHVzQVBJXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Qcm92aWRlciB9IGZyb20gXCIuL05vdGlmaWNhdGlvblByb3ZpZGVyXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSBcIi4vSU5vdGlmaWNhdGlvblByb3ZpZGVyLmludGVyZmFjZVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbk1nciB7XG5cbiAgICBwcml2YXRlIERCTWVzc2FnZTogQXJyYXk8Tm90aWZpY2F0aW9uT2JqZWN0PiA9IFtdO1xuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uTGlzdDogQXJyYXk8Tm90aWZpY2F0aW9uT2JqZWN0PiA9IFtdO1xuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU3ViamVjdDogU3ViamVjdDxBcnJheTxOb3RpZmljYXRpb25PYmplY3Q+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5ub3RpZmljYXRpb25MaXN0KTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uUHJvdmlkZXI6IE5vdGlmaWNhdGlvblByb3ZpZGVyXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbk1nciBpbml0XCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmZldGNoTWVzc2FnZURhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm90aWZpY2F0aW9uTGlzdCgpOiBPYnNlcnZhYmxlPEFycmF5PE5vdGlmaWNhdGlvbk9iamVjdD4+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb25NZ3IgZ2V0Tm90aWZpY2F0aW9uTGlzdFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHVzaE5vdGlmaWNhdGlvbih0eXBlOiBOb3RpZmljYXRpb25UeXBlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgbGV0IG5vdGlmeSA9IHRoaXMubm90aWZpY2F0aW9uUHJvdmlkZXIuZ2V0Tm90aWZpY2F0aW9uT2JqZWN0KHR5cGUsIGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbk1nciBwdXNoTm90aWZpY2F0aW9uOlwiLCBub3RpZnkpO1xuICAgICAgICAvLyDomZXnkIZcYnJlbWluZGVyIG1lc3NhZ2VcbiAgICAgICAgaWYgKG5vdGlmeS5hY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBkdXBsaWNhdGVMaXN0ID0gdGhpcy5ub3RpZmljYXRpb25MaXN0LmZpbHRlcih4ID0+IHguY2F0ZWdvcnkgPT09IG5vdGlmeS5jYXRlZ29yeSAmJiB4LnR5cGUgPT09IG5vdGlmeS50eXBlKTtcbiAgICAgICAgICAgIGxldCBjb25mbGljdFJlc3VsdCA9IG5vdGlmeS5hY3Rpb24ub25Db25mbGljdChkdXBsaWNhdGVMaXN0LCBub3RpZnkpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25MaXN0ID0gWy4uLmNvbmZsaWN0UmVzdWx0LCAuLi50aGlzLm5vdGlmaWNhdGlvbkxpc3QuZmlsdGVyKHggPT4geC5jYXRlZ29yeSAhPT0gbm90aWZ5LmNhdGVnb3J5IHx8IHgudHlwZSAhPT0gbm90aWZ5LnR5cGUpXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25MaXN0LnB1c2gobm90aWZ5KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25MaXN0ID0gdGhpcy5ub3RpZmljYXRpb25MaXN0LnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdWJqZWN0Lm5leHQodGhpcy5ub3RpZmljYXRpb25MaXN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uT2JqZWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uTWdyIHBvcE5vdGlmaWNhdGlvbjpcIiwgbm90aWZpY2F0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwb3BwZWQgPSB0aGlzLm5vdGlmaWNhdGlvbkxpc3QuZmlsdGVyKHggPT4geC5pZCA9PT0gbm90aWZpY2F0aW9uLmlkKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3BOb3RpZmljYXRpb246XCIsIHBvcHBlZCk7XG4gICAgICAgICAgICBpZiAocG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25MaXN0ID0gdGhpcy5ub3RpZmljYXRpb25MaXN0LmZpbHRlcih4ID0+IHguaWQgIT09IG5vdGlmaWNhdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdWJqZWN0Lm5leHQodGhpcy5ub3RpZmljYXRpb25MaXN0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHBvcHBlZDpcIiwgdGhpcy5ub3RpZmljYXRpb25MaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBBUFBFcnJvcihcIkYwMDAyMVwiLCBlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VW5yZWFkTWVzc2FnZU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuREJNZXNzYWdlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wQWxsTm90aWZpY2F0aW9uKCkge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdWJqZWN0Lm5leHQodGhpcy5ub3RpZmljYXRpb25MaXN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0NhdGVnb3J5TWVzc2FnZShjYXRlZ29yeTogc3RyaW5nID0gbnVsbCwgdHlwZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbk1nciBTaG93Q2F0ZWdvcnlNZXNzYWdlOlwiLCBjYXRlZ29yeSwgdHlwZSk7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuREJNZXNzYWdlLmZpbHRlcih4ID0+XG4gICAgICAgICAgICAoKHguY2F0ZWdvcnkgPT09IGNhdGVnb3J5KSB8fCAoIWNhdGVnb3J5KSkgJiYgKCh4LnR5cGUgPT09IHR5cGUpIHx8ICghdHlwZSkpKVxuICAgICAgICBsZXQgc2VsZWN0ZWRfaWQgPSBzZWxlY3RlZC5tYXAoeCA9PiB4LmlkKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uTGlzdCA9IFsuLi50aGlzLm5vdGlmaWNhdGlvbkxpc3QsIC4uLnNlbGVjdGVkXTtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3ViamVjdC5uZXh0KHRoaXMubm90aWZpY2F0aW9uTGlzdCk7XG4gICAgICAgICAgICB0aGlzLkRCTWVzc2FnZSA9IHRoaXMuREJNZXNzYWdlLmZpbHRlcih4ID0+IHNlbGVjdGVkX2lkLmluZGV4T2YoeC5pZCkgPCAwKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGRiIG1lc3NhZ2Ugc3RhdHVzXG4gICAgICAgICAgICBsZXQgQVBJRmFjdG9yeSA9IHRoaXMuZ2V0QVBJRmFjdG9yeSgpO1xuICAgICAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmdldEFQSURpc3BhdGNoKCk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlTWVzc2FnZVN0YXR1c0FQSSA9IEFQSUZhY3RvcnkuZ2V0QVBJKCd1cGRhdGVEYXNoYm9hcmRNZXNzYWdlU3RhdHVzJyk7XG4gICAgICAgICAgICAoPERhc2hib2FyZFVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEk+dXBkYXRlTWVzc2FnZVN0YXR1c0FQSSkuc2V0Q2xpZW50SURMaXN0KHNlbGVjdGVkX2lkKTtcbiAgICAgICAgICAgICg8RGFzaGJvYXJkVXBkYXRlTWVzc2FnZVN0YXR1c0FQST51cGRhdGVNZXNzYWdlU3RhdHVzQVBJKS5zZXRTdGF0dXMoJ1JlYWRpbmcnKTtcbiAgICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2godXBkYXRlTWVzc2FnZVN0YXR1c0FQSSkuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb25NZ3IgcG9wTm90aWZpY2F0aW9uIHVwZGF0ZU1lc3NhZ2VTdGF0dXNBUEkgcmVzcDpcIiwgcmVzcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGZldGNoTWVzc2FnZURhdGEoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uTWdyIGZldGNoTWVzc2FnZURhdGFcIik7XG4gICAgICAgIGxldCBmZXRjaGVkX21lc3NhZ2VzID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQVBJRmFjdG9yeSA9IHRoaXMuZ2V0QVBJRmFjdG9yeSgpO1xuICAgICAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmdldEFQSURpc3BhdGNoKCk7XG4gICAgICAgICAgICBsZXQgZ2V0TWVzc2FnZUFQSSA9IEFQSUZhY3RvcnkuZ2V0QVBJKFwiZ2V0RGFzaGJvYXJkTWVzc2FnZUxpc3RcIik7XG4gICAgICAgICAgICAoPERhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJPmdldE1lc3NhZ2VBUEkpLnNldEtleXdvcmQoXCJVblJlYWRcIik7XG4gICAgICAgICAgICAoPERhc2hib2FyZEdldE1lc3NhZ2VMaXN0QVBJPmdldE1lc3NhZ2VBUEkpLnNldElzUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IGF3YWl0IGRpc3BhdGNoZXIuZGlzcGF0Y2goZ2V0TWVzc2FnZUFQSSkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZUxpc3QgPSByZXNwWydCb2R5J107XG4gICAgICAgICAgICBmZXRjaGVkX21lc3NhZ2VzID0gbWVzc2FnZUxpc3QubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvblByb3ZpZGVyLmdldE5vdGlmaWNhdGlvbk9iamVjdCh4Lk1lc3NhZ2VUeXBlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgXCJTb3VyY2VcIjogXCJEQlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRpdGxlXCI6IHguVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIFwiRGVzY3JpcHRpb25cIjogeC5EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB9LCBKU09OLnBhcnNlKHguQXJndW1lbnRzKSksIHguQ2xpZW50SUQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEFQUEVycm9yKFwiRjAwMDIwXCIsIGVyci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5EQk1lc3NhZ2UgPSBmZXRjaGVkX21lc3NhZ2VzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbk1nciBmZXRjaE1lc3NhZ2VEYXRhIGVuZFwiLCB0aGlzLkRCTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBUElGYWN0b3J5KCk6IEFQSUZhY3Rvcnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZhY3RvcnkgPSB0aGlzLmluamVjdG9yLmdldChBUElGYWN0b3J5KTtcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFQSURpc3BhdGNoKCk6IEFQSURpc3BhdGNoIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkaXNwYXRjaGVyID0gdGhpcy5pbmplY3Rvci5nZXQoQVBJRGlzcGF0Y2gpO1xuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoZXI7XG4gICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==