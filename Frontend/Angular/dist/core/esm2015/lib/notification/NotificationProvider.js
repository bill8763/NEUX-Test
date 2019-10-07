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
export class NotificationProvider {
    /**
     * @param {?} injector
     * @param {?} customNotificationProvider
     */
    constructor(injector, customNotificationProvider) {
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
    getNotificationObject(type, data, id = null) {
        if (this.customNotificationProvider) {
            return this.customNotificationProvider.getNotificationObject(type, data);
        }
        else {
            /** @type {?} */
            let obj = new NotificationObject();
            if (id)
                obj.id = id;
            obj.data = data;
            /** @type {?} */
            let findedType = this.actionMap.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.type === type));
            if (findedType.length > 0) {
                obj.order = findedType[0].order;
                obj.category = findedType[0].category;
                obj.type = findedType[0].type;
                obj.action = this.getAction(findedType[0].action);
            }
            return obj;
        }
    }
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    getAction(token) {
        /** @type {?} */
        let action;
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
    }
}
NotificationProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NotificationProvider.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NotificationProviderToken,] }] }
];
/** @nocollapse */ NotificationProvider.ngInjectableDef = i0.defineInjectable({ factory: function NotificationProvider_Factory() { return new NotificationProvider(i0.inject(i0.INJECTOR), i0.inject(i1.NotificationProviderToken, 8)); }, token: NotificationProvider, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uUHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL25vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWtCLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUF5QixnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSxpQ0FBaUMsRUFBRSx1Q0FBdUMsRUFBRSxxQ0FBcUMsRUFBRSxzQ0FBc0MsRUFBRSwrQkFBK0IsRUFBRSwyQ0FBMkMsRUFBRSx5Q0FBeUMsRUFBRSx5Q0FBeUMsRUFBRSxnQ0FBZ0MsRUFBRSxzQ0FBc0MsRUFBRSx3Q0FBd0MsRUFBRSwyQ0FBMkMsRUFBRSw4Q0FBOEMsRUFBRSxnQ0FBZ0MsRUFBRSx1Q0FBdUMsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSw4QkFBOEIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSxnQ0FBZ0MsRUFBRSwwQ0FBMEMsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFNbGhDLE1BQU07Ozs7O0lBQ0YsWUFDWSxRQUFrQixFQUM2QiwwQkFBaUQ7UUFEaEcsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUM2QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXVCO1FBS3BHLGNBQVMsR0FBRyxDQUFDO2dCQUNqQixJQUFJLEVBQUUsZ0JBQWdCLENBQUMsd0JBQXdCO2dCQUMvQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsV0FBVztnQkFDMUMs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QztTQUNkO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLEtBQTBDOztZQUNwRCxNQUEyQjtRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUk7Z0JBQ0EsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1lBQUMsV0FBTTtnQkFDSixNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7YUFDSTtZQUNELE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7WUF6TUosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7WUFSb0IsUUFBUTs0Q0FZcEIsUUFBUSxZQUFJLE1BQU0sU0FBQyx5QkFBeUI7Ozs7Ozs7O0lBS2pELHlDQTJKRTs7Ozs7SUFqS0Usd0NBQTBCOzs7OztJQUMxQiwwREFBd0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvblByb3ZpZGVyLCBOb3RpZmljYXRpb25UeXBlLCBOb3RpZmljYXRpb25DYXRlZ29yeSB9IGZyb20gXCIuL0lOb3RpZmljYXRpb25Qcm92aWRlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbk9iamVjdCB9IGZyb20gXCIuL05vdGlmaWNhdGlvbk9iamVjdFwiO1xuaW1wb3J0IHsgR29hbFNldHRpbmdOb3RTdGFydE1lc3NhZ2VBY3Rpb25Ub2tlbiwgTmVlZEdvYWxTZXR0aW5nTWVzc2FnZUFjdGlvblRva2VuLCBHb2FsUHJvbW9TZXR0aW5nTWVzc2FnZUFjdGlvblRva2VuLCBHb2FsQXV0b0FwcHJvdmVNZXNzYWdlQWN0aW9uVG9rZW4sIEdvYWxBdXRvQXBwcm92ZUxlYWRlck1lc3NhZ2VBY3Rpb25Ub2tlbiwgQXBwcm92ZUdvYWxJc1JlamVjdE1lc3NhZ2VBY3Rpb25Ub2tlbiwgQXBwcm92ZUdvYWxJc0FwcHJvdmVNZXNzYWdlQWN0aW9uVG9rZW4sIFBlbmRpbmdSZXZpZXdNZXNzYWdlQWN0aW9uVG9rZW4sIFN1cGVydmlzb3JIYXZlQ2hhbmdlQWdlbnRNZXNzYWdlQWN0aW9uVG9rZW4sIFN1cGVydmlzb3JIYXZlQ2hhbmdlT2xkTWVzc2FnZUFjdGlvblRva2VuLCBTdXBlcnZpc29ySGF2ZUNoYW5nZU5ld01lc3NhZ2VBY3Rpb25Ub2tlbiwgR29hbEF1dG9SZWplY3RNZXNzYWdlQWN0aW9uVG9rZW4sIEdvYWxBdXRvUmVqZWN0TGVhZGVyTWVzc2FnZUFjdGlvblRva2VuLCBBY3Rpdml0eUFycml2ZVRlblBvaW50TWVzc2FnZUFjdGlvblRva2VuLCBBY3Rpdml0eUFycml2ZVR3ZW50eVBvaW50TWVzc2FnZUFjdGlvblRva2VuLCBBY3Rpdml0eU5vdEFycml2ZVR3ZW50eVBvaW50TWVzc2FnZUFjdGlvblRva2VuLCBSZW1pbmRlckV2ZW50c01lc3NhZ2VBY3Rpb25Ub2tlbiwgRGF0YVByaXZhY3lQcm90ZWN0aW9uTWVzc2FnZUFjdGlvblRva2VuLCBPdmVydGltZU1lc3NhZ2VBY3Rpb25Ub2tlbiwgQXV0b0RlbGV0ZU1lc3NhZ2VBY3Rpb25Ub2tlbiwgT2ZmbGluZU1lc3NhZ2VBY3Rpb25Ub2tlbiwgVmVyc2lvbkNoZWNrTWVzc2FnZUFjdGlvblRva2VuLCBUaW1vdXRNZXNzYWdlQWN0aW9uVG9rZW4sIE5vdGlmaWNhdGlvblByb3ZpZGVyVG9rZW4sIERhdGFDb2xsZWN0aW9uTWVzc2FnZUFjdGlvblRva2VuLCBHb2FsU2V0dGluZ05vdFN0YXJ0Rmlyc3RNZXNzYWdlQWN0aW9uVG9rZW4sIENvbnRhY3RQZXJtaXNzaW9uQWN0aW9uVG9rZW4gfSBmcm9tIFwiLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuXCI7XG5pbXBvcnQgeyBJTm90aWZpY2F0aW9uQWN0aW9uIH0gZnJvbSBcIi4vSU5vdGlmaWNhdGlvbkFjdGlvbi5pbnRlcmZhY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Qcm92aWRlciBpbXBsZW1lbnRzIElOb3RpZmljYXRpb25Qcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5vdGlmaWNhdGlvblByb3ZpZGVyVG9rZW4pIHByaXZhdGUgY3VzdG9tTm90aWZpY2F0aW9uUHJvdmlkZXI6IElOb3RpZmljYXRpb25Qcm92aWRlclxuICAgICkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhY3Rpb25NYXAgPSBbe1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxTZXR0aW5nTm90U3RhcnRGaXJzdCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgYWN0aW9uOiBHb2FsU2V0dGluZ05vdFN0YXJ0Rmlyc3RNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbFNldHRpbmdOb3RTdGFydCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgYWN0aW9uOiBHb2FsU2V0dGluZ05vdFN0YXJ0TWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLk5lZWRHb2FsU2V0dGluZyxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogMixcbiAgICAgICAgYWN0aW9uOiBOZWVkR29hbFNldHRpbmdNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbFByb21vU2V0dGluZyxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogMyxcbiAgICAgICAgYWN0aW9uOiBHb2FsUHJvbW9TZXR0aW5nTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxBdXRvQXBwcm92ZSxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogNCxcbiAgICAgICAgYWN0aW9uOiBHb2FsQXV0b0FwcHJvdmVNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuR29hbEF1dG9BcHByb3ZlTGVhZGVyLFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuR29hbFNldHRpbmcsXG4gICAgICAgIG9yZGVyOiA1LFxuICAgICAgICBhY3Rpb246IEdvYWxBdXRvQXBwcm92ZUxlYWRlck1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5BcHByb3ZlR29hbElzUmVqZWN0LFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuR29hbFNldHRpbmcsXG4gICAgICAgIG9yZGVyOiA2LFxuICAgICAgICBhY3Rpb246IEFwcHJvdmVHb2FsSXNSZWplY3RNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQXBwcm92ZUdvYWxJc0FwcHJvdmUsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDcsXG4gICAgICAgIGFjdGlvbjogQXBwcm92ZUdvYWxJc0FwcHJvdmVNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuUGVuZGluZ1JldmlldyxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogOCxcbiAgICAgICAgYWN0aW9uOiBQZW5kaW5nUmV2aWV3TWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLlN1cGVydmlzb3JIYXZlQ2hhbmdlQWdlbnQsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDksXG4gICAgICAgIGFjdGlvbjogU3VwZXJ2aXNvckhhdmVDaGFuZ2VBZ2VudE1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5TdXBlcnZpc29ySGF2ZUNoYW5nZU9sZCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogMTAsXG4gICAgICAgIGFjdGlvbjogU3VwZXJ2aXNvckhhdmVDaGFuZ2VPbGRNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU3VwZXJ2aXNvckhhdmVDaGFuZ2VOZXcsXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5Hb2FsU2V0dGluZyxcbiAgICAgICAgb3JkZXI6IDExLFxuICAgICAgICBhY3Rpb246IFN1cGVydmlzb3JIYXZlQ2hhbmdlTmV3TWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkdvYWxBdXRvUmVqZWN0LFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuR29hbFNldHRpbmcsXG4gICAgICAgIG9yZGVyOiAxMixcbiAgICAgICAgYWN0aW9uOiBHb2FsQXV0b1JlamVjdE1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5Hb2FsQXV0b1JlamVjdExlYWRlcixcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkdvYWxTZXR0aW5nLFxuICAgICAgICBvcmRlcjogMTMsXG4gICAgICAgIGFjdGlvbjogR29hbEF1dG9SZWplY3RMZWFkZXJNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQWN0aXZpdHlBcnJpdmVUZW5Qb2ludCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlByb2dyZXNzLFxuICAgICAgICBvcmRlcjogMTQsXG4gICAgICAgIGFjdGlvbjogQWN0aXZpdHlBcnJpdmVUZW5Qb2ludE1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5BY3Rpdml0eUFycml2ZVR3ZW50eVBvaW50LFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuUHJvZ3Jlc3MsXG4gICAgICAgIG9yZGVyOiAxNSxcbiAgICAgICAgYWN0aW9uOiBBY3Rpdml0eUFycml2ZVR3ZW50eVBvaW50TWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkFjdGl2aXR5TGVzc1RoYW5Ud2VudHlQb2ludCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlByb2dyZXNzLFxuICAgICAgICBvcmRlcjogMTYsXG4gICAgICAgIGFjdGlvbjogQWN0aXZpdHlOb3RBcnJpdmVUd2VudHlQb2ludE1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5SZW1pbmRlckV2ZW50LFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuQ2FsZW5kYXIsXG4gICAgICAgIG9yZGVyOiAxNyxcbiAgICAgICAgYWN0aW9uOiBSZW1pbmRlckV2ZW50c01lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5EYXRhUHJpdmFjeVByb3RlY3Rpb24sXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5DdXN0b21lcixcbiAgICAgICAgb3JkZXI6IDE4LFxuICAgICAgICBhY3Rpb246IERhdGFQcml2YWN5UHJvdGVjdGlvbk1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5PdmVydGltZSxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkN1c3RvbWVyLFxuICAgICAgICBvcmRlcjogMTksXG4gICAgICAgIGFjdGlvbjogT3ZlcnRpbWVNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQXV0b0RlbGV0ZSxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LkN1c3RvbWVyLFxuICAgICAgICBvcmRlcjogMjAsXG4gICAgICAgIGFjdGlvbjogQXV0b0RlbGV0ZU1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5PZmZsaW5lLFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuU3lzdGVtLFxuICAgICAgICBvcmRlcjogMjEsXG4gICAgICAgIGFjdGlvbjogT2ZmbGluZU1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5PbmxpbmVDaGVjayxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDIyLFxuICAgICAgICBhY3Rpb246IG51bGxcbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuTmV3VmVyc2lvbixcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDIzLFxuICAgICAgICBhY3Rpb246IFZlcnNpb25DaGVja01lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5OZXdWZXJzaW9uTG9naW4sXG4gICAgICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeS5TeXN0ZW0sXG4gICAgICAgIG9yZGVyOiAyNCxcbiAgICAgICAgYWN0aW9uOiBWZXJzaW9uQ2hlY2tNZXNzYWdlQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuVGltZW91dCxcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDI1LFxuICAgICAgICBhY3Rpb246IFRpbW91dE1lc3NhZ2VBY3Rpb25Ub2tlblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5EYXRhQ29sbGVjdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDI2LFxuICAgICAgICBhY3Rpb246IERhdGFDb2xsZWN0aW9uTWVzc2FnZUFjdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLkhUVFBFcnJvcixcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDI3LFxuICAgICAgICBhY3Rpb246IG51bGxcbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuQ29udGFjdFBlcm1pc3Npb25FcnJvcixcbiAgICAgICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LlN5c3RlbSxcbiAgICAgICAgb3JkZXI6IDI4LFxuICAgICAgICBhY3Rpb246IENvbnRhY3RQZXJtaXNzaW9uQWN0aW9uVG9rZW5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IE5vdGlmaWNhdGlvblR5cGUuU2NyZWVuU2hvdEFsZXJ0LFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuU3lzdGVtLFxuICAgICAgICBvcmRlcjogMjksXG4gICAgICAgIGFjdGlvbjogbnVsbFxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZS5TdWJtaXRGYWlsLFxuICAgICAgICBjYXRlZ29yeTogTm90aWZpY2F0aW9uQ2F0ZWdvcnkuU3lzdGVtLFxuICAgICAgICBvcmRlcjogMzAsXG4gICAgICAgIGFjdGlvbjogbnVsbFxuICAgIH1dXG5cbiAgICBnZXROb3RpZmljYXRpb25PYmplY3QodHlwZTogTm90aWZpY2F0aW9uVHlwZSwgZGF0YTogYW55LCBpZDogc3RyaW5nID0gbnVsbCk6IE5vdGlmaWNhdGlvbk9iamVjdCB7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbU5vdGlmaWNhdGlvblByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Ob3RpZmljYXRpb25Qcm92aWRlci5nZXROb3RpZmljYXRpb25PYmplY3QodHlwZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gbmV3IE5vdGlmaWNhdGlvbk9iamVjdCgpO1xuICAgICAgICAgICAgaWYgKGlkKVxuICAgICAgICAgICAgICAgIG9iai5pZCA9IGlkO1xuICAgICAgICAgICAgb2JqLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgbGV0IGZpbmRlZFR5cGUgPSB0aGlzLmFjdGlvbk1hcC5maWx0ZXIoeCA9PiB4LnR5cGUgPT09IHR5cGUpO1xuICAgICAgICAgICAgaWYgKGZpbmRlZFR5cGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG9iai5vcmRlciA9IGZpbmRlZFR5cGVbMF0ub3JkZXI7XG4gICAgICAgICAgICAgICAgb2JqLmNhdGVnb3J5ID0gZmluZGVkVHlwZVswXS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICBvYmoudHlwZSA9IGZpbmRlZFR5cGVbMF0udHlwZTtcbiAgICAgICAgICAgICAgICBvYmouYWN0aW9uID0gdGhpcy5nZXRBY3Rpb24oZmluZGVkVHlwZVswXS5hY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QWN0aW9uKHRva2VuOiBJbmplY3Rpb25Ub2tlbjxJTm90aWZpY2F0aW9uQWN0aW9uPik6IElOb3RpZmljYXRpb25BY3Rpb24ge1xuICAgICAgICBsZXQgYWN0aW9uOiBJTm90aWZpY2F0aW9uQWN0aW9uO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5pbmplY3Rvci5nZXQodG9rZW4pO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG59Il19