/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Optional, Inject } from "@angular/core";
import { NotificationType, NotificationCategory } from "./INotificationProvider.interface";
import { NotificationObject } from "./NotificationObject";
import { GoalSettingNotStartMessageActionToken, NeedGoalSettingMessageActionToken, GoalPromoSettingMessageActionToken, GoalAutoApproveMessageActionToken, GoalAutoApproveLeaderMessageActionToken, ApproveGoalIsRejectMessageActionToken, ApproveGoalIsApproveMessageActionToken, PendingReviewMessageActionToken, SupervisorHaveChangeAgentMessageActionToken, SupervisorHaveChangeOldMessageActionToken, SupervisorHaveChangeNewMessageActionToken, GoalAutoRejectMessageActionToken, GoalAutoRejectLeaderMessageActionToken, ActivityArriveTenPointMessageActionToken, ActivityArriveTwentyPointMessageActionToken, ActivityNotArriveTwentyPointMessageActionToken, ReminderEventsMessageActionToken, DataPrivacyProtectionMessageActionToken, OvertimeMessageActionToken, AutoDeleteMessageActionToken, OfflineMessageActionToken, VersionCheckMessageActionToken, TimoutMessageActionToken, NotificationProviderToken, DataCollectionMessageActionToken, GoalSettingNotStartFirstMessageActionToken, ContactPermissionActionToken } from "../injectionToken/injection-token";
import * as i0 from "@angular/core";
import * as i1 from "../injectionToken/injection-token";
var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(injector, customNotificationProvider) {
        this.injector = injector;
        this.customNotificationProvider = customNotificationProvider;
        this.actionMap = [{
                type: NotificationType.GoalSettingNotStartFirst,
                category: NotificationCategory.GoalSetting,
                order: 1,
                action: GoalSettingNotStartFirstMessageActionToken
            }, {
                type: NotificationType.GoalSettingNotStart,
                category: NotificationCategory.GoalSetting,
                order: 1,
                action: GoalSettingNotStartMessageActionToken
            }, {
                type: NotificationType.NeedGoalSetting,
                category: NotificationCategory.GoalSetting,
                order: 2,
                action: NeedGoalSettingMessageActionToken
            }, {
                type: NotificationType.GoalPromoSetting,
                category: NotificationCategory.GoalSetting,
                order: 3,
                action: GoalPromoSettingMessageActionToken
            }, {
                type: NotificationType.GoalAutoApprove,
                category: NotificationCategory.GoalSetting,
                order: 4,
                action: GoalAutoApproveMessageActionToken
            }, {
                type: NotificationType.GoalAutoApproveLeader,
                category: NotificationCategory.GoalSetting,
                order: 5,
                action: GoalAutoApproveLeaderMessageActionToken
            }, {
                type: NotificationType.ApproveGoalIsReject,
                category: NotificationCategory.GoalSetting,
                order: 6,
                action: ApproveGoalIsRejectMessageActionToken
            }, {
                type: NotificationType.ApproveGoalIsApprove,
                category: NotificationCategory.GoalSetting,
                order: 7,
                action: ApproveGoalIsApproveMessageActionToken
            }, {
                type: NotificationType.PendingReview,
                category: NotificationCategory.GoalSetting,
                order: 8,
                action: PendingReviewMessageActionToken
            }, {
                type: NotificationType.SupervisorHaveChangeAgent,
                category: NotificationCategory.GoalSetting,
                order: 9,
                action: SupervisorHaveChangeAgentMessageActionToken
            }, {
                type: NotificationType.SupervisorHaveChangeOld,
                category: NotificationCategory.GoalSetting,
                order: 10,
                action: SupervisorHaveChangeOldMessageActionToken
            }, {
                type: NotificationType.SupervisorHaveChangeNew,
                category: NotificationCategory.GoalSetting,
                order: 11,
                action: SupervisorHaveChangeNewMessageActionToken
            }, {
                type: NotificationType.GoalAutoReject,
                category: NotificationCategory.GoalSetting,
                order: 12,
                action: GoalAutoRejectMessageActionToken
            }, {
                type: NotificationType.GoalAutoRejectLeader,
                category: NotificationCategory.GoalSetting,
                order: 13,
                action: GoalAutoRejectLeaderMessageActionToken
            }, {
                type: NotificationType.ActivityArriveTenPoint,
                category: NotificationCategory.Progress,
                order: 14,
                action: ActivityArriveTenPointMessageActionToken
            }, {
                type: NotificationType.ActivityArriveTwentyPoint,
                category: NotificationCategory.Progress,
                order: 15,
                action: ActivityArriveTwentyPointMessageActionToken
            }, {
                type: NotificationType.ActivityLessThanTwentyPoint,
                category: NotificationCategory.Progress,
                order: 16,
                action: ActivityNotArriveTwentyPointMessageActionToken
            }, {
                type: NotificationType.ReminderEvent,
                category: NotificationCategory.Calendar,
                order: 17,
                action: ReminderEventsMessageActionToken
            }, {
                type: NotificationType.DataPrivacyProtection,
                category: NotificationCategory.Customer,
                order: 18,
                action: DataPrivacyProtectionMessageActionToken
            }, {
                type: NotificationType.Overtime,
                category: NotificationCategory.Customer,
                order: 19,
                action: OvertimeMessageActionToken
            }, {
                type: NotificationType.AutoDelete,
                category: NotificationCategory.Customer,
                order: 20,
                action: AutoDeleteMessageActionToken
            }, {
                type: NotificationType.Offline,
                category: NotificationCategory.System,
                order: 21,
                action: OfflineMessageActionToken
            }, {
                type: NotificationType.OnlineCheck,
                category: NotificationCategory.System,
                order: 22,
                action: null
            }, {
                type: NotificationType.NewVersion,
                category: NotificationCategory.System,
                order: 23,
                action: VersionCheckMessageActionToken
            }, {
                type: NotificationType.NewVersionLogin,
                category: NotificationCategory.System,
                order: 24,
                action: VersionCheckMessageActionToken
            }, {
                type: NotificationType.Timeout,
                category: NotificationCategory.System,
                order: 25,
                action: TimoutMessageActionToken
            }, {
                type: NotificationType.DataCollection,
                category: NotificationCategory.System,
                order: 26,
                action: DataCollectionMessageActionToken
            }, {
                type: NotificationType.HTTPError,
                category: NotificationCategory.System,
                order: 27,
                action: null
            }, {
                type: NotificationType.ContactPermissionError,
                category: NotificationCategory.System,
                order: 28,
                action: ContactPermissionActionToken
            }, {
                type: NotificationType.ScreenShotAlert,
                category: NotificationCategory.System,
                order: 29,
                action: null
            }, {
                type: NotificationType.SubmitFail,
                category: NotificationCategory.System,
                order: 30,
                action: null
            }];
    }
    /**
     * @param {?} type
     * @param {?} data
     * @param {?=} id
     * @return {?}
     */
    NotificationProvider.prototype.getNotificationObject = /**
     * @param {?} type
     * @param {?} data
     * @param {?=} id
     * @return {?}
     */
    function (type, data, id) {
        if (id === void 0) { id = null; }
        if (this.customNotificationProvider) {
            return this.customNotificationProvider.getNotificationObject(type, data);
        }
        else {
            /** @type {?} */
            var obj = new NotificationObject();
            if (id)
                obj.id = id;
            obj.data = data;
            /** @type {?} */
            var findedType = this.actionMap.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.type === type; }));
            if (findedType.length > 0) {
                obj.order = findedType[0].order;
                obj.category = findedType[0].category;
                obj.type = findedType[0].type;
                obj.action = this.getAction(findedType[0].action);
            }
            return obj;
        }
    };
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    NotificationProvider.prototype.getAction = /**
     * @private
     * @param {?} token
     * @return {?}
     */
    function (token) {
        /** @type {?} */
        var action;
        if (token) {
            try {
                action = this.injector.get(token);
            }
            catch (_a) {
                action = null;
            }
        }
        else {
            action = null;
        }
        return action;
    };
    NotificationProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NotificationProvider.ctorParameters = function () { return [
        { type: Injector },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NotificationProviderToken,] }] }
    ]; };
    /** @nocollapse */ NotificationProvider.ngInjectableDef = i0.defineInjectable({ factory: function NotificationProvider_Factory() { return new NotificationProvider(i0.inject(i0.INJECTOR), i0.inject(i1.NotificationProviderToken, 8)); }, token: NotificationProvider, providedIn: "root" });
    return NotificationProvider;
}());
export { NotificationProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationProvider.prototype.actionMap;
    /**
     * @type {?}
     * @private
     */
    NotificationProvider.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NotificationProvider.prototype.customNotificationProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uUHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL25vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWtCLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUF5QixnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSwrQkFBK0IsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSx5Q0FBeUMsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSwyQ0FBMkMsRUFBRSw4Q0FBOEMsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSxnQ0FBZ0MsRUFBRSwwQ0FBMEMsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFHbGhDO0lBSUksOEJBQ1ksUUFBa0IsRUFDNkIsMEJBQWlEO1FBRGhHLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDNkIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUF1QjtRQUtwRyxjQUFTLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxFQUFFLGdCQUFnQixDQUFDLHdCQUF3QjtnQkFDL0MsUUFBUSxFQUFFLG9CQUFvQixDQUFDLFdBQVc7Z0JBQzFDLEtBQUssRUFB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QUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sd0NBQVM7Ozs7O0lBQWpCLFVBQWtCLEtBQTBDOztZQUNwRCxNQUEyQjtRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUk7Z0JBQ0EsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1lBQUMsV0FBTTtnQkFDSixNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7YUFDSTtZQUNELE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOztnQkF6TUosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7O2dCQVJvQixRQUFRO2dEQVlwQixRQUFRLFlBQUksTUFBTSxTQUFDLHlCQUF5Qjs7OytCQVpyRDtDQWdOQyxBQTFNRCxJQTBNQztTQXZNWSxvQkFBb0I7Ozs7OztJQVE3Qix5Q0EySkU7Ozs7O0lBaktFLHdDQUEwQjs7Ozs7SUFDMUIsMERBQXdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElOb3RpZmljYXRpb25Qcm92aWRlciwgTm90aWZpY2F0aW9uVHlwZSwgTm90aWZpY2F0aW9uQ2F0ZWdvcnkgfSBmcm9tIFwiLi9JTm90aWZpY2F0aW9uUHJvdmlkZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25PYmplY3QgfSBmcm9tIFwiLi9Ob3RpZmljYXRpb25PYmplY3RcIjtcbmltcG9ydCB7IEdvYWxTZXR0aW5nTm90U3RhcnRNZXNzYWdlQWN0aW9uVG9rZW4sIE5lZWRHb2FsU2V0dGluZ01lc3NhZ2VBY3Rpb25Ub2tlbiwgR29hbFByb21vU2V0dGluZ01lc3NhZ2VBY3Rpb25Ub2tlbiwgR29hbEF1dG9BcHByb3ZlTWVzc2FnZUFjdGlvblRva2VuLCBHb2FsQXV0b0FwcHJvdmVMZWFkZXJNZXNzYWdlQWN0aW9uVG9rZW4sIEFwcHJvdmVHb2FsSXNSZWplY3RNZXNzYWdlQWN0aW9uVG9rZW4sIEFwcHJvdmVHb2FsSXNBcHByb3ZlTWVzc2FnZUFjdGlvblRva2VuLCBQZW5kaW5nUmV2aWV3TWVzc2FnZUFjdGlvblRva2VuLCBTdXBlcnZpc29ySGF2ZUNoYW5nZUFnZW50TWVzc2FnZUFjdGlvblRva2VuLCBTdXBlcnZpc29ySGF2ZUNoYW5nZU9sZE1lc3NhZ2VBY3Rpb25Ub2tlbiwgU3VwZXJ2aXNvckhhdmVDaGFuZ2VOZXdNZXNzYWdlQWN0aW9uVG9rZW4sIEdvYWxBdXRvUmVqZWN0TWVzc2FnZUFjdGlvblRva2VuLCBHb2FsQXV0b1JlamVjdExlYWRlck1lc3NhZ2VBY3Rpb25Ub2tlbiwgQWN0aXZpdHlBcnJpdmVUZW5Qb2ludE1lc3NhZ2VBY3Rpb25Ub2tlbiwgQWN0aXZpdHlBcnJpdmVUd2VudHlQb2ludE1lc3NhZ2VBY3Rpb25Ub2tlbiwgQWN0aXZpdHlOb3RBcnJpdmVUd2VudHlQb2ludE1lc3NhZ2VBY3Rpb25Ub2tlbiwgUmVtaW5kZXJFdmVudHNNZXNzYWdlQWN0aW9uVG9rZW4sIERhdGFQcml2YWN5UHJvdGVjdGlvbk1lc3NhZ2VBY3Rpb25Ub2tlbiwgT3ZlcnRpbWVNZXNzYWdlQWN0aW9uVG9rZW4sIEF1dG9EZWxldGVNZXNzYWdlQWN0aW9uVG9rZW4sIE9mZmxpbmVNZXNzYWdlQWN0aW9uVG9rZW4sIFZlcnNpb25DaGVja01lc3NhZ2VBY3Rpb25Ub2tlbiwgVGltb3V0TWVzc2FnZUFjdGlvblRva2VuLCBOb3RpZmljYXRpb25Qcm92aWRlclRva2VuLCBEYXRhQ29sbGVjdGlvbk1lc3NhZ2VBY3Rpb25Ub2tlbiwgR29hbFNldHRpbmdOb3RTdGFydEZpcnN0TWVzc2FnZUFjdGlvblRva2VuLCBDb250YWN0UGVybWlzc2lvbkFjdGlvblRva2VuIH0gZnJvbSBcIi4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlblwiO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbkFjdGlvbiB9IGZyb20gXCIuL0lOb3RpZmljYXRpb25BY3Rpb24uaW50ZXJmYWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uUHJvdmlkZXIgaW1wbGVtZW50cyBJTm90aWZpY2F0aW9uUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChOb3RpZmljYXRpb25Qcm92aWRlclRva2VuKSBwcml2YXRlIGN1c3RvbU5vdGlmaWNhdGlvblByb3ZpZGVyOiBJTm90aWZpY2F0aW9uUHJvdmlkZXJcbiAgICApIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aW9uTWFwID0gW3tcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsU2V0dGluZ05vdFN0YXJ0Rmlyc3QsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgIGFjdGlvbjogR29hbFNldHRpbmdOb3RTdGFydEZpcnN0TWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxTZXR0aW5nTm90U3RhcnQsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgIGFjdGlvbjogR29hbFNldHRpbmdOb3RTdGFydE1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5OZWVkR29hbFNldHRpbmcsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgIGFjdGlvbjogTmVlZEdvYWxTZXR0aW5nTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxQcm9tb1NldHRpbmcsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDMsXG4gICAgICAgIGFjdGlvbjogR29hbFByb21vU2V0dGluZ01lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsQXV0b0FwcHJvdmUsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDQsXG4gICAgICAgIGFjdGlvbjogR29hbEF1dG9BcHByb3ZlTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxBdXRvQXBwcm92ZUxlYWRlcixcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogNSxcbiAgICAgICAgYWN0aW9uOiBHb2FsQXV0b0FwcHJvdmVMZWFkZXJNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQXBwcm92ZUdvYWxJc1JlamVjdCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogNixcbiAgICAgICAgYWN0aW9uOiBBcHByb3ZlR29hbElzUmVqZWN0TWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFwcHJvdmVHb2FsSXNBcHByb3ZlLFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuR29hbFNldHRpbmcsXG4gICAgICAgIG9yZGVyOiA3LFxuICAgICAgICBhY3Rpb246IEFwcHJvdmVHb2FsSXNBcHByb3ZlTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlBlbmRpbmdSZXZpZXcsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDgsXG4gICAgICAgIGFjdGlvbjogUGVuZGluZ1Jldmlld01lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5TdXBlcnZpc29ySGF2ZUNoYW5nZUFnZW50LFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuR29hbFNldHRpbmcsXG4gICAgICAgIG9yZGVyOiA5LFxuICAgICAgICBhY3Rpb246IFN1cGVydmlzb3JIYXZlQ2hhbmdlQWdlbnRNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VwZXJ2aXNvckhhdmVDaGFuZ2VPbGQsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDEwLFxuICAgICAgICBhY3Rpb246IFN1cGVydmlzb3JIYXZlQ2hhbmdlT2xkTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlN1cGVydmlzb3JIYXZlQ2hhbmdlTmV3LFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuR29hbFNldHRpbmcsXG4gICAgICAgIG9yZGVyOiAxMSxcbiAgICAgICAgYWN0aW9uOiBTdXBlcnZpc29ySGF2ZUNoYW5nZU5ld01lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsQXV0b1JlamVjdCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogMTIsXG4gICAgICAgIGFjdGlvbjogR29hbEF1dG9SZWplY3RNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbEF1dG9SZWplY3RMZWFkZXIsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDEzLFxuICAgICAgICBhY3Rpb246IEdvYWxBdXRvUmVqZWN0TGVhZGVyTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFjdGl2aXR5QXJyaXZlVGVuUG9pbnQsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Qcm9ncmVzcyxcbiAgICAgICAgb3JkZXI6IDE0LFxuICAgICAgICBhY3Rpb246IEFjdGl2aXR5QXJyaXZlVGVuUG9pbnRNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQWN0aXZpdHlBcnJpdmVUd2VudHlQb2ludCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlByb2dyZXNzLFxuICAgICAgICBvcmRlcjogMTUsXG4gICAgICAgIGFjdGlvbjogQWN0aXZpdHlBcnJpdmVUd2VudHlQb2ludE1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5BY3Rpdml0eUxlc3NUaGFuVHdlbnR5UG9pbnQsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Qcm9ncmVzcyxcbiAgICAgICAgb3JkZXI6IDE2LFxuICAgICAgICBhY3Rpb246IEFjdGl2aXR5Tm90QXJyaXZlVHdlbnR5UG9pbnRNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuUmVtaW5kZXJFdmVudCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkNhbGVuZGFyLFxuICAgICAgICBvcmRlcjogMTcsXG4gICAgICAgIGFjdGlvbjogUmVtaW5kZXJFdmVudHNNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuRGF0YVByaXZhY3lQcm90ZWN0aW9uLFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuQ3VzdG9tZXIsXG4gICAgICAgIG9yZGVyOiAxOCxcbiAgICAgICAgYWN0aW9uOiBEYXRhUHJpdmFjeVByb3RlY3Rpb25NZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuT3ZlcnRpbWUsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5DdXN0b21lcixcbiAgICAgICAgb3JkZXI6IDE5LFxuICAgICAgICBhY3Rpb246IE92ZXJ0aW1lTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkF1dG9EZWxldGUsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5DdXN0b21lcixcbiAgICAgICAgb3JkZXI6IDIwLFxuICAgICAgICBhY3Rpb246IEF1dG9EZWxldGVNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuT2ZmbGluZSxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDIxLFxuICAgICAgICBhY3Rpb246IE9mZmxpbmVNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuT25saW5lQ2hlY2ssXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5TeXN0ZW0sXG4gICAgICAgIG9yZGVyOiAyMixcbiAgICAgICAgYWN0aW9uOiBudWxsXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk5ld1ZlcnNpb24sXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5TeXN0ZW0sXG4gICAgICAgIG9yZGVyOiAyMyxcbiAgICAgICAgYWN0aW9uOiBWZXJzaW9uQ2hlY2tNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuTmV3VmVyc2lvbkxvZ2luLFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuU3lzdGVtLFxuICAgICAgICBvcmRlcjogMjQsXG4gICAgICAgIGFjdGlvbjogVmVyc2lvbkNoZWNrTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlRpbWVvdXQsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5TeXN0ZW0sXG4gICAgICAgIG9yZGVyOiAyNSxcbiAgICAgICAgYWN0aW9uOiBUaW1vdXRNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuRGF0YUNvbGxlY3Rpb24sXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5TeXN0ZW0sXG4gICAgICAgIG9yZGVyOiAyNixcbiAgICAgICAgYWN0aW9uOiBEYXRhQ29sbGVjdGlvbk1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5IVFRQRXJyb3IsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5TeXN0ZW0sXG4gICAgICAgIG9yZGVyOiAyNyxcbiAgICAgICAgYWN0aW9uOiBudWxsXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkNvbnRhY3RQZXJtaXNzaW9uRXJyb3IsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5TeXN0ZW0sXG4gICAgICAgIG9yZGVyOiAyOCxcbiAgICAgICAgYWN0aW9uOiBDb250YWN0UGVybWlzc2lvbkFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlNjcmVlblNob3RBbGVydCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDI5LFxuICAgICAgICBhY3Rpb246IG51bGxcbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VibWl0RmFpbCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDMwLFxuICAgICAgICBhY3Rpb246IG51bGxcbiAgICB9XVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uT2JqZWN0KHR5cGU6IE5vdGlmaWNhdGlvblR5cGUsIGRhdGE6IGFueSwgaWQ6IHN0cmluZyA9IG51bGwpOiBOb3RpZmljYXRpb25PYmplY3Qge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Ob3RpZmljYXRpb25Qcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tTm90aWZpY2F0aW9uUHJvdmlkZXIuZ2V0Tm90aWZpY2F0aW9uT2JqZWN0KHR5cGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG9iaiA9IG5ldyBOb3RpZmljYXRpb25PYmplY3QoKTtcbiAgICAgICAgICAgIGlmIChpZClcbiAgICAgICAgICAgICAgICBvYmouaWQgPSBpZDtcbiAgICAgICAgICAgIG9iai5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIGxldCBmaW5kZWRUeXBlID0gdGhpcy5hY3Rpb25NYXAuZmlsdGVyKHggPT4geC50eXBlID09PSB0eXBlKTtcbiAgICAgICAgICAgIGlmIChmaW5kZWRUeXBlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBvYmoub3JkZXIgPSBmaW5kZWRUeXBlWzBdLm9yZGVyO1xuICAgICAgICAgICAgICAgIG9iai5jYXRlZ29yeSA9IGZpbmRlZFR5cGVbMF0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgb2JqLnR5cGUgPSBmaW5kZWRUeXBlWzBdLnR5cGU7XG4gICAgICAgICAgICAgICAgb2JqLmFjdGlvbiA9IHRoaXMuZ2V0QWN0aW9uKGZpbmRlZFR5cGVbMF0uYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFjdGlvbih0b2tlbjogSW5qZWN0aW9uVG9rZW48SU5vdGlmaWNhdGlvbkFjdGlvbj4pOiBJTm90aWZpY2F0aW9uQWN0aW9uIHtcbiAgICAgICAgbGV0IGFjdGlvbjogSU5vdGlmaWNhdGlvbkFjdGlvbjtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuaW5qZWN0b3IuZ2V0KHRva2VuKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxufSJdfQ==