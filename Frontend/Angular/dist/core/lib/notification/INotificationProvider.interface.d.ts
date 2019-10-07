import { NotificationObject } from "./NotificationObject";
export declare enum NotificationType {
    GoalSettingNotStartFirst = "GoalSettingNotStartFirst",
    GoalSettingNotStart = "GoalSettingNotStart",
    NeedGoalSetting = "NeedGoalSetting",
    GoalPromoSetting = "GoalPromoSetting",
    GoalAutoApprove = "GoalAutoApprove",
    GoalAutoApproveLeader = "GoalAutoApproveLeader",
    ApproveGoalIsReject = "ApproveGoalIsReject",
    ApproveGoalIsApprove = "ApproveGoalIsApprove",
    PendingReview = "PendingReview",
    SupervisorHaveChangeAgent = "SupervisorHaveChangeAgent",
    SupervisorHaveChangeOld = "SupervisorHaveChangeOld",
    SupervisorHaveChangeNew = "SupervisorHaveChangeNew",
    GoalAutoReject = "GoalAutoReject",
    GoalAutoRejectLeader = "GoalAutoRejectLeader",
    ActivityArriveTenPoint = "ActivityArriveTenPoint",
    ActivityArriveTwentyPoint = "ActivityArriveTwentyPoint",
    ActivityLessThanTwentyPoint = "ActivityLessThanTwentyPoint",
    ReminderEvent = "ReminderEvent",
    DataPrivacyProtection = "DataPrivacyProtection",
    Overtime = "Overtime",
    AutoDelete = "AutoDelete",
    Offline = "Offline",
    OnlineCheck = "OnlineCheck",
    NewVersion = "NewVersion",
    Timeout = "Timeout",
    DataCollection = "DataCollection",
    NewVersionLogin = "NewVersionLogin",
    HTTPError = "HTTPError",
    ContactPermissionError = "ContactPermissionError",
    ScreenShotAlert = "ScreenShotAlert",
    SubmitFail = "SubmitFail"
}
export declare enum NotificationCategory {
    GoalSetting = "GoalSetting",
    Progress = "Progress",
    Calendar = "Calendar",
    Customer = "Customer",
    System = "System"
}
export interface INotificationProvider {
    getNotificationObject(type: NotificationType, data: any): NotificationObject;
}
