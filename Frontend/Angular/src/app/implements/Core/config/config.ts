import { APIInvokeMethod, APPMODE } from '@allianzSND/core';

export const APP_CONFIG = {
    ENV: 'UAT',
    DEV_VERSION: 'DEV-201909161415',
    APP_MODE: APPMODE.Standalone,
    INTEGRATION_BACK_URL: "/test",
    ForgotPasswordRegion: "TW",
    DEV: {
        ORGANIZATION: "NEUX",
        TIMEOUT: 900,
        ACTION_INTERVAL: 300,
        OFFLINE_LOGIN_MAX_TIMES: 5,
        SSL_FINGERPRINTS: [],
        CUSTOMER_ADD_ANNOUNCE: true,
        DATABASE: {
            Main: {
                name: 'Main'
            },
            Profile: {
                name: 'Profile'
            }
        },
        DASHBOARD: {
            SearchBirthdayRange: {
                subN: 7,
                addN: 30
            },
            SearchCalendarRange: {
                subN: 2,
                addN: 2
            }
        },
        SYNC_URL: {
            CALENDAR: {
                push: 'http://sd.decoder.com.tw/appointment',
                pull: 'http://sd.decoder.com.tw/appointment'
            },
            CUSTOMER: {
                push: 'http://sd.decoder.com.tw/customerprofiles',
                pull: 'http://sd.decoder.com.tw/customerprofiles'
            },
            CUSTOMER_CONTACT: {
                push: 'http://sd.decoder.com.tw/notes',
                pull: 'http://sd.decoder.com.tw/notes'
            },
            MESSAGE: {
                push: 'http://sd.decoder.com.tw/message',
                pull: 'http://sd.decoder.com.tw/message'
            },
            GOAL_EXPECTED: {
                push: 'http://sd.decoder.com.tw/goalExpected',
                pull: 'http://sd.decoder.com.tw/goalExpected'
            },
            YEAR_CONFIG: {
                push: 'http://sd.decoder.com.tw/DEV/Configuration',
                pull: 'http://sd.decoder.com.tw/DEV/Configuration'
            },
            GOAL: {
                push: 'http://sd.decoder.com.tw/DEV/Goal',
                pull: 'http://sd.decoder.com.tw/DEV/Goal'
            },
            ACTUAL: {
                push: 'http://sd.decoder.com.tw/DEV/Actual',
                pull: 'http://sd.decoder.com.tw/DEV/Actual'
            },
            AGENCY_PLAN: {
                push: 'http://sd.decoder.com.tw/DEV/AgencyPlan',
                pull: 'http://sd.decoder.com.tw/DEV/AgencyPlan'
            },
            PROGRESS: {
                push: 'http://sd.decoder.com.tw/DEV/Progress',
                pull: 'http://sd.decoder.com.tw/DEV/Progress'
            },
            PROFILE_CODE: {
                push: 'http://sd.decoder.com.tw/DEV/datalists/all',
                pull: 'http://sd.decoder.com.tw/DEV/datalists/all'
            }
        },
        API_URL: {
            onlineLogin: 'http://sd.decoder.com.tw/login',
            CheckVersion: 'http://sd.decoder.com.tw/version',
            UpdatePushID: 'http://sd.decoder.com.tw/deviceChange',
            getSyncSequenceID: 'http://sd.decoder.com.tw//sequenceID',
            PushErrorLog: 'http://sd.decoder.com.tw/errorLog',
            PushActionLog: 'http://sd.decoder.com.tw/AppClickLog',
            getYearConfig: 'http://sd.decoder.com.tw/DEV/Configuration',
            getAgencyPlan: 'http://sd.decoder.com.tw/DEV/AgencyPlan',
            getProgress: 'http://sd.decoder.com.tw/DEV/Progress',
            getGoal: 'http://sd.decoder.com.tw/DEV/Goal',
            getActual: 'http://sd.decoder.com.tw/DEV/Actual',
            pushGoalSettingData: 'http://sd.decoder.com.tw/DEV/SubmitGoal',
            pushApproveGoal: 'http://sd.decoder.com.tw/DEV/ApproveGoal',
            unbindDevice: 'http://sd.decoder.com.tw/DEV/deviceUnbind'
        },
        API_TYPE: {
            getExtensionConfig: APIInvokeMethod.MOCK,
            getSetting: APIInvokeMethod.MOCK,
            updateSetting: APIInvokeMethod.MOCK,
            getProfileCode: APIInvokeMethod.MOCK,
            importContact: APIInvokeMethod.MOCK,
            updateCustomerFollowStatus: APIInvokeMethod.MOCK,
            getCustomerOverTime: APIInvokeMethod.MOCK,
            getCustomerAutoDelete: APIInvokeMethod.MOCK,
            getCustomerList: APIInvokeMethod.MOCK,
            getCustomerDetail: APIInvokeMethod.MOCK,
            getCustomerProfile: APIInvokeMethod.MOCK,
            saveCustomerProfile: APIInvokeMethod.MOCK,
            deleteCustomer: APIInvokeMethod.MOCK,
            getCustomerFilterPreset: APIInvokeMethod.MOCK,
            saveCustomerFilterPreset: APIInvokeMethod.MOCK,
            getCustomerFilter: APIInvokeMethod.MOCK,
            getCustomerContactNoteDetail: APIInvokeMethod.MOCK,
            getCustomerContactNote: APIInvokeMethod.MOCK,
            addCustomerContactNote: APIInvokeMethod.MOCK,
            editCustomerContactNote: APIInvokeMethod.MOCK,
            deleteCustomerContactNote: APIInvokeMethod.MOCK,
            getCustomerTel: APIInvokeMethod.MOCK,
            getCalendarEventList: APIInvokeMethod.MOCK,
            getCalendarEventDetail: APIInvokeMethod.SQLite,
            getCalendarReminder: APIInvokeMethod.MOCK,
            contactsSearch: APIInvokeMethod.MOCK,
            getCurrentLanguageList: APIInvokeMethod.MOCK,
            deleteCalendarEvent: APIInvokeMethod.MOCK,
            addCalendarEvent: APIInvokeMethod.MOCK,
            saveCalendarEvent: APIInvokeMethod.MOCK,
            updateCalendarEvent: APIInvokeMethod.MOCK,
            saveLoginToken: APIInvokeMethod.MOCK,
            offlineAuth: APIInvokeMethod.SQLite,
            getMenu: APIInvokeMethod.MOCK,
            onlineLogin: APIInvokeMethod.MOCK,
            Logout: APIInvokeMethod.MOCK,
            SyncPush: APIInvokeMethod.MOCK,
            SyncPull: APIInvokeMethod.MOCK,
            saveCustomerDetail: APIInvokeMethod.MOCK,
            getDashboardMessageList: APIInvokeMethod.MOCK,
            getCustomerBirthdayList: APIInvokeMethod.MOCK,
            CheckVersion: APIInvokeMethod.MOCK,
            getUpdateTimeList: APIInvokeMethod.MOCK,
            updateDashboardMessageStatus: APIInvokeMethod.MOCK,
            updateDashboardToRead: APIInvokeMethod.MOCK,
            BindingAccount: APIInvokeMethod.MOCK,
            getDeviceAccount: APIInvokeMethod.MOCK,
            UpdatePushID: APIInvokeMethod.MOCK,
            getSyncSequenceID: APIInvokeMethod.MOCK,
            LogError: APIInvokeMethod.MOCK,
            LogAction: APIInvokeMethod.MOCK,
            PushErrorLog: APIInvokeMethod.MOCK,
            PushActionLog: APIInvokeMethod.MOCK,
            getRouterMap: APIInvokeMethod.MOCK,
            getYearConfig: APIInvokeMethod.MOCK,
            saveYearConfig: APIInvokeMethod.MOCK,
            getAgencyPlan: APIInvokeMethod.MOCK,
            saveAgencyPlan: APIInvokeMethod.MOCK,
            getProgress: APIInvokeMethod.MOCK,
            saveProgress: APIInvokeMethod.MOCK,
            getGoal: APIInvokeMethod.MOCK,
            saveGoal: APIInvokeMethod.MOCK,
            getActual: APIInvokeMethod.MOCK,
            saveActual: APIInvokeMethod.MOCK,
            pushGoalSettingData: APIInvokeMethod.MOCK,
            pushApproveGoal: APIInvokeMethod.MOCK,
            getMetaConfig: APIInvokeMethod.MOCK,
            getGoalSettingStep1: APIInvokeMethod.MOCK,
            getGoalSettingStep2: APIInvokeMethod.MOCK,
            getGoalSettingStep3: APIInvokeMethod.MOCK,
            getGoalSettingStep4: APIInvokeMethod.MOCK,
            getGoalSettingStep5: APIInvokeMethod.MOCK,
            getSettingValue: APIInvokeMethod.MOCK,
            getGoalSettingGoalSetting: APIInvokeMethod.MOCK,
            getGoalSettingYearConfig: APIInvokeMethod.MOCK,
            getAgencyPlanMain: APIInvokeMethod.MOCK,
            getAgencyPlanDetail: APIInvokeMethod.MOCK,
            getGoalSettingExpected: APIInvokeMethod.MOCK,
            getPersonalProgressOld: APIInvokeMethod.MOCK,
            setGoalSettingExpected: APIInvokeMethod.MOCK,
            getProgressData: APIInvokeMethod.MOCK,
            getProgressDataActualValue: APIInvokeMethod.MOCK,
            getProgressDataGoalSettingPlan: APIInvokeMethod.MOCK,
            getActualValue: APIInvokeMethod.MOCK,
            getAgencyDetailData: APIInvokeMethod.MOCK,
            getGoalSetting: APIInvokeMethod.MOCK,
            getGoalSettingValue: APIInvokeMethod.MOCK,
            getOtherParameter: APIInvokeMethod.MOCK,
            getPersonalProgress: APIInvokeMethod.MOCK,
            getTeamProgressDetail: APIInvokeMethod.MOCK,
            getTeamProgressMain: APIInvokeMethod.MOCK,
            getYearConfiguration: APIInvokeMethod.MOCK,
            getDeviceInfo: APIInvokeMethod.MOCK,
            getGoalSettingPlan: APIInvokeMethod.MOCK,
            getGoalSettingActualValue: APIInvokeMethod.MOCK,
            addPoint: APIInvokeMethod.MOCK,
            ChangeMessageStatus: APIInvokeMethod.MOCK,
            unbindDevice: APIInvokeMethod.MOCK
        }
    },
    DEV_WebSQL: {
        ORGANIZATION: "NEUX",
        CUSTOMER_ADD_ANNOUNCE: true,
        TIMEOUT: 900,
        ACTION_INTERVAL: 300,
        OFFLINE_LOGIN_MAX_TIMES: 5,
        SSL_FINGERPRINTS: [],
        DATABASE: {
            Main: {
                name: 'Main'
            },
            Profile: {
                name: 'Profile'
            }
        },
        DASHBOARD: {
            SearchBirthdayRange: {
                subN: 7,
                addN: 30
            },
            SearchCalendarRange: {
                subN: 2,
                addN: 2
            }
        },
        SYNC_URL: {
            CALENDAR: {
                push: 'http://sd.decoder.com.tw/DEV/appointment',
                pull: 'http://sd.decoder.com.tw/DEV/appointment'
            },
            CUSTOMER: {
                push: 'http://sd.decoder.com.tw/DEV/customerprofiles',
                pull: 'http://sd.decoder.com.tw/DEV/customerprofiles'
            },
            CUSTOMER_CONTACT: {
                push: 'http://sd.decoder.com.tw/DEV/notes',
                pull: 'http://sd.decoder.com.tw/DEV/notes'
            },
            MESSAGE: {
                push: 'http://sd.decoder.com.tw/DEV/message',
                pull: 'http://sd.decoder.com.tw/DEV/message'
            },
            GOAL_EXPECTED: {
                push: 'http://sd.decoder.com.tw/DEV/goalExpected',
                pull: 'http://sd.decoder.com.tw/DEV/goalExpected'
            },
            YEAR_CONFIG: {
                push: 'http://sd.decoder.com.tw/DEV/Configuration',
                pull: 'http://sd.decoder.com.tw/DEV/Configuration'
            },
            GOAL: {
                push: 'http://sd.decoder.com.tw/DEV/Goal',
                pull: 'http://sd.decoder.com.tw/DEV/Goal'
            },
            ACTUAL: {
                push: 'http://sd.decoder.com.tw/DEV/Actual',
                pull: 'http://sd.decoder.com.tw/DEV/Actual'
            },
            AGENCY_PLAN: {
                push: 'http://sd.decoder.com.tw/DEV/AgencyPlan',
                pull: 'http://sd.decoder.com.tw/DEV/AgencyPlan'
            },
            PROGRESS: {
                push: 'http://sd.decoder.com.tw/DEV/Progress',
                pull: 'http://sd.decoder.com.tw/DEV/Progress'
            },
            PROFILE_CODE: {
                push: 'http://sd.decoder.com.tw/DEV/datalists/all',
                pull: 'http://sd.decoder.com.tw/DEV/datalists/all'
            }
        },
        API_URL: {
            onlineLogin: 'http://sd.decoder.com.tw/DEV/login',
            CheckVersion: 'http://sd.decoder.com.tw/DEV/version',
            UpdatePushID: 'http://sd.decoder.com.tw/DEV/deviceChange',
            getSyncSequenceID: 'http://sd.decoder.com.tw/DEV/sequenceID',
            PushErrorLog: 'http://sd.decoder.com.tw/DEV/errorLog',
            PushActionLog: 'http://sd.decoder.com.tw/DEV/AppClickLog',
            getYearConfig: 'http://sd.decoder.com.tw/DEV/Configuration',
            getAgencyPlan: 'http://sd.decoder.com.tw/DEV/AgencyPlan',
            getProgress: 'http://sd.decoder.com.tw/DEV/Progress',
            getGoal: 'http://sd.decoder.com.tw/DEV/Goal',
            getActual: 'http://sd.decoder.com.tw/DEV/Actual',
            pushGoalSettingData: 'http://sd.decoder.com.tw/DEV/SubmitGoal',
            pushApproveGoal: 'http://sd.decoder.com.tw/DEV/ApproveGoal',
            unbindDevice: 'http://sd.decoder.com.tw/DEV/deviceUnbind'
        },
        API_TYPE: {
            getExtensionConfig: APIInvokeMethod.MOCK,
            getSetting: APIInvokeMethod.SQLite,
            updateSetting: APIInvokeMethod.SQLite,
            getProfileCode: APIInvokeMethod.SQLite,
            importContact: APIInvokeMethod.SQLite,
            updateCustomerFollowStatus: APIInvokeMethod.SQLite,
            getCustomerOverTime: APIInvokeMethod.SQLite,
            getCustomerAutoDelete: APIInvokeMethod.SQLite,
            getCustomerList: APIInvokeMethod.SQLite,
            getCustomerDetail: APIInvokeMethod.SQLite,
            getCustomerProfile: APIInvokeMethod.SQLite,
            saveCustomerProfile: APIInvokeMethod.SQLite,
            deleteCustomer: APIInvokeMethod.SQLite,
            getCustomerFilterPreset: APIInvokeMethod.SQLite,
            saveCustomerFilterPreset: APIInvokeMethod.SQLite,
            getCustomerFilter: APIInvokeMethod.SQLite,
            getCustomerContactNoteDetail: APIInvokeMethod.SQLite,
            getCustomerContactNote: APIInvokeMethod.SQLite,
            addCustomerContactNote: APIInvokeMethod.SQLite,
            editCustomerContactNote: APIInvokeMethod.SQLite,
            deleteCustomerContactNote: APIInvokeMethod.SQLite,
            getCustomerTel: APIInvokeMethod.SQLite,
            getCalendarEventList: APIInvokeMethod.SQLite,
            getCalendarEventDetail: APIInvokeMethod.SQLite,
            getCalendarReminder: APIInvokeMethod.MOCK,
            contactsSearch: APIInvokeMethod.Device,
            getCurrentLanguageList: APIInvokeMethod.SQLite,
            deleteCalendarEvent: APIInvokeMethod.SQLite,
            addCalendarEvent: APIInvokeMethod.SQLite,
            saveCalendarEvent: APIInvokeMethod.SQLite,
            updateCalendarEvent: APIInvokeMethod.SQLite,
            saveLoginToken: APIInvokeMethod.SQLite,
            offlineAuth: APIInvokeMethod.SQLite,
            getMenu: APIInvokeMethod.MOCK,
            onlineLogin: APIInvokeMethod.Restful,
            Logout: APIInvokeMethod.MOCK,
            SyncPush: APIInvokeMethod.Restful,
            SyncPull: APIInvokeMethod.Restful,
            saveCustomerDetail: APIInvokeMethod.SQLite,
            getDashboardMessageList: APIInvokeMethod.SQLite,
            getCustomerBirthdayList: APIInvokeMethod.SQLite,
            CheckVersion: APIInvokeMethod.Restful,
            getUpdateTimeList: APIInvokeMethod.SQLite,
            updateDashboardMessageStatus: APIInvokeMethod.SQLite,
            updateDashboardToRead: APIInvokeMethod.SQLite,
            BindingAccount: APIInvokeMethod.SQLite,
            getDeviceAccount: APIInvokeMethod.SQLite,
            UpdatePushID: APIInvokeMethod.Restful,
            getSyncSequenceID: APIInvokeMethod.Restful,
            LogError: APIInvokeMethod.SQLite,
            LogAction: APIInvokeMethod.SQLite,
            getMetaConfig: APIInvokeMethod.MOCK,
            PushErrorLog: APIInvokeMethod.Restful,
            PushActionLog: APIInvokeMethod.Restful,
            getRouterMap: APIInvokeMethod.MOCK,
            getYearConfig: APIInvokeMethod.Restful,
            saveYearConfig: APIInvokeMethod.SQLite,
            getAgencyPlan: APIInvokeMethod.Restful,
            saveAgencyPlan: APIInvokeMethod.SQLite,
            getProgress: APIInvokeMethod.Restful,
            saveProgress: APIInvokeMethod.SQLite,
            getGoal: APIInvokeMethod.Restful,
            saveGoal: APIInvokeMethod.SQLite,
            getActual: APIInvokeMethod.Restful,
            saveActual: APIInvokeMethod.SQLite,
            pushGoalSettingData: APIInvokeMethod.Restful,
            pushApproveGoal: APIInvokeMethod.Restful,
            getSettingValue: APIInvokeMethod.SQLite,
            getGoalSettingGoalSetting: APIInvokeMethod.SQLite,
            getGoalSettingYearConfig: APIInvokeMethod.SQLite,
            getAgencyPlanMain: APIInvokeMethod.SQLite,
            getAgencyPlanDetail: APIInvokeMethod.SQLite,
            getGoalSettingExpected: APIInvokeMethod.SQLite,
            setGoalSettingExpected: APIInvokeMethod.SQLite,
            getGoalSettingValue: APIInvokeMethod.SQLite,
            getProgressData: APIInvokeMethod.SQLite,
            getProgressDataActualValue: APIInvokeMethod.SQLite,
            getProgressDataGoalSettingPlan: APIInvokeMethod.SQLite,
            getActualValue: APIInvokeMethod.SQLite,
            getAgencyDetailData: APIInvokeMethod.SQLite,
            getGoalSetting: APIInvokeMethod.SQLite,
            getOtherParameter: APIInvokeMethod.SQLite,
            getPersonalProgress: APIInvokeMethod.SQLite,
            getTeamProgressDetail: APIInvokeMethod.SQLite,
            getTeamProgressMain: APIInvokeMethod.SQLite,
            getYearConfiguration: APIInvokeMethod.SQLite,
            getProgressActualValue: APIInvokeMethod.SQLite,
            getProgressGoalPlan: APIInvokeMethod.SQLite,
            getDeviceInfo: APIInvokeMethod.SQLite,
            getGoalSettingPlan: APIInvokeMethod.SQLite,
            getGoalSettingActualValue: APIInvokeMethod.SQLite,
            addPoint: APIInvokeMethod.SQLite,
            ChangeMessageStatus: APIInvokeMethod.SQLite,
            unbindDevice: APIInvokeMethod.MOCK
        }
    },
    PROD: {
        ORGANIZATION: "NEUX",
        CUSTOMER_ADD_ANNOUNCE: true,
        TIMEOUT: 900,
        ACTION_INTERVAL: 300,
        OFFLINE_LOGIN_MAX_TIMES: 5,
        SSL_FINGERPRINTS: [],
        DATABASE: {
            Main: {
                name: 'Main'
            },
            Profile: {
                name: 'Profile'
            }
        },
        DASHBOARD: {
            SearchBirthdayRange: {
                subN: 7,
                addN: 30
            },
            SearchCalendarRange: {
                subN: 2,
                addN: 2
            }
        },
        SYNC_URL: {
            CALENDAR: {
                push: 'http://sd.decoder.com.tw/DEV/appointment',
                pull: 'http://sd.decoder.com.tw/DEV/appointment'
            },
            CUSTOMER: {
                push: 'http://sd.decoder.com.tw/DEV/customerprofiles',
                pull: 'http://sd.decoder.com.tw/DEV/customerprofiles'
            },
            CUSTOMER_CONTACT: {
                push: 'http://sd.decoder.com.tw/DEV/notes',
                pull: 'http://sd.decoder.com.tw/DEV/notes'
            },
            MESSAGE: {
                push: 'http://sd.decoder.com.tw/DEV/message',
                pull: 'http://sd.decoder.com.tw/DEV/message'
            },
            GOAL_EXPECTED: {
                push: 'http://sd.decoder.com.tw/DEV/goalExpected',
                pull: 'http://sd.decoder.com.tw/DEV/goalExpected'
            },
            YEAR_CONFIG: {
                push: 'http://sd.decoder.com.tw/DEV/Configuration',
                pull: 'http://sd.decoder.com.tw/DEV/Configuration'
            },
            GOAL: {
                push: 'http://sd.decoder.com.tw/DEV/Goal',
                pull: 'http://sd.decoder.com.tw/DEV/Goal'
            },
            ACTUAL: {
                push: 'http://sd.decoder.com.tw/DEV/Actual',
                pull: 'http://sd.decoder.com.tw/DEV/Actual'
            },
            AGENCY_PLAN: {
                push: 'http://sd.decoder.com.tw/DEV/AgencyPlan',
                pull: 'http://sd.decoder.com.tw/DEV/AgencyPlan'
            },
            PROGRESS: {
                push: 'http://sd.decoder.com.tw/DEV/Progress',
                pull: 'http://sd.decoder.com.tw/DEV/Progress'
            },
            PROFILE_CODE: {
                push: 'http://sd.decoder.com.tw/DEV/datalists/all',
                pull: 'http://sd.decoder.com.tw/DEV/datalists/all'
            }
        },
        API_URL: {
            onlineLogin: 'http://sd.decoder.com.tw/DEV/login',
            CheckVersion: 'http://sd.decoder.com.tw/DEV/version',
            UpdatePushID: 'http://sd.decoder.com.tw/DEV/deviceChange',
            getSyncSequenceID: 'http://sd.decoder.com.tw/DEV/sequenceID',
            PushErrorLog: 'http://sd.decoder.com.tw/DEV/errorLog',
            PushActionLog: 'http://sd.decoder.com.tw/DEV/AppClickLog',
            getYearConfig: 'http://sd.decoder.com.tw/DEV/Configuration',
            getAgencyPlan: 'http://sd.decoder.com.tw/DEV/AgencyPlan',
            getProgress: 'http://sd.decoder.com.tw/DEV/Progress',
            getGoal: 'http://sd.decoder.com.tw/DEV/Goal',
            getActual: 'http://sd.decoder.com.tw/DEV/Actual',
            pushGoalSettingData: 'http://sd.decoder.com.tw/DEV/SubmitGoal',
            pushApproveGoal: 'http://sd.decoder.com.tw/DEV/ApproveGoal',
            unbindDevice: 'http://sd.decoder.com.tw/DEV/deviceUnbind'
        },
        API_TYPE: {
            getExtensionConfig: APIInvokeMethod.MOCK,
            getSetting: APIInvokeMethod.SQLite,
            updateSetting: APIInvokeMethod.SQLite,
            getProfileCode: APIInvokeMethod.SQLite,
            importContact: APIInvokeMethod.SQLite,
            updateCustomerFollowStatus: APIInvokeMethod.SQLite,
            getCustomerOverTime: APIInvokeMethod.SQLite,
            getCustomerAutoDelete: APIInvokeMethod.SQLite,
            getCustomerList: APIInvokeMethod.SQLite,
            getCustomerDetail: APIInvokeMethod.SQLite,
            getCustomerProfile: APIInvokeMethod.SQLite,
            saveCustomerProfile: APIInvokeMethod.SQLite,
            deleteCustomer: APIInvokeMethod.SQLite,
            getCustomerFilterPreset: APIInvokeMethod.SQLite,
            saveCustomerFilterPreset: APIInvokeMethod.SQLite,
            getCustomerFilter: APIInvokeMethod.SQLite,
            getCustomerContactNoteDetail: APIInvokeMethod.SQLite,
            getCustomerContactNote: APIInvokeMethod.SQLite,
            addCustomerContactNote: APIInvokeMethod.SQLite,
            editCustomerContactNote: APIInvokeMethod.SQLite,
            deleteCustomerContactNote: APIInvokeMethod.SQLite,
            getCustomerTel: APIInvokeMethod.SQLite,
            getCalendarEventList: APIInvokeMethod.SQLite,
            getCalendarEventDetail: APIInvokeMethod.SQLite,
            getCalendarReminder: APIInvokeMethod.MOCK,
            contactsSearch: APIInvokeMethod.Device,
            getCurrentLanguageList: APIInvokeMethod.SQLite,
            deleteCalendarEvent: APIInvokeMethod.SQLite,
            addCalendarEvent: APIInvokeMethod.SQLite,
            saveCalendarEvent: APIInvokeMethod.SQLite,
            updateCalendarEvent: APIInvokeMethod.SQLite,
            saveLoginToken: APIInvokeMethod.SQLite,
            offlineAuth: APIInvokeMethod.SQLite,
            getMenu: APIInvokeMethod.MOCK,
            onlineLogin: APIInvokeMethod.Restful,
            Logout: APIInvokeMethod.MOCK,
            SyncPush: APIInvokeMethod.Restful,
            SyncPull: APIInvokeMethod.Restful,
            saveCustomerDetail: APIInvokeMethod.SQLite,
            getDashboardMessageList: APIInvokeMethod.SQLite,
            getCustomerBirthdayList: APIInvokeMethod.SQLite,
            CheckVersion: APIInvokeMethod.Restful,
            getUpdateTimeList: APIInvokeMethod.SQLite,
            updateDashboardMessageStatus: APIInvokeMethod.SQLite,
            updateDashboardToRead: APIInvokeMethod.SQLite,
            BindingAccount: APIInvokeMethod.SQLite,
            getDeviceAccount: APIInvokeMethod.SQLite,
            UpdatePushID: APIInvokeMethod.Restful,
            getSyncSequenceID: APIInvokeMethod.Restful,
            LogError: APIInvokeMethod.SQLite,
            LogAction: APIInvokeMethod.SQLite,
            getMetaConfig: APIInvokeMethod.MOCK,
            PushErrorLog: APIInvokeMethod.Restful,
            PushActionLog: APIInvokeMethod.Restful,
            getRouterMap: APIInvokeMethod.MOCK,
            getYearConfig: APIInvokeMethod.Restful,
            saveYearConfig: APIInvokeMethod.SQLite,
            getAgencyPlan: APIInvokeMethod.Restful,
            saveAgencyPlan: APIInvokeMethod.SQLite,
            getProgress: APIInvokeMethod.Restful,
            saveProgress: APIInvokeMethod.SQLite,
            getGoal: APIInvokeMethod.Restful,
            saveGoal: APIInvokeMethod.SQLite,
            getActual: APIInvokeMethod.Restful,
            saveActual: APIInvokeMethod.SQLite,
            pushGoalSettingData: APIInvokeMethod.Restful,
            pushApproveGoal: APIInvokeMethod.Restful,
            getSettingValue: APIInvokeMethod.SQLite,
            getGoalSettingGoalSetting: APIInvokeMethod.SQLite,
            getGoalSettingYearConfig: APIInvokeMethod.SQLite,
            getAgencyPlanMain: APIInvokeMethod.SQLite,
            getAgencyPlanDetail: APIInvokeMethod.SQLite,
            getGoalSettingExpected: APIInvokeMethod.SQLite,
            setGoalSettingExpected: APIInvokeMethod.SQLite,
            getGoalSettingValue: APIInvokeMethod.SQLite,
            getProgressData: APIInvokeMethod.SQLite,
            getProgressDataActualValue: APIInvokeMethod.SQLite,
            getProgressDataGoalSettingPlan: APIInvokeMethod.SQLite,
            getActualValue: APIInvokeMethod.SQLite,
            getAgencyDetailData: APIInvokeMethod.SQLite,
            getGoalSetting: APIInvokeMethod.SQLite,
            getOtherParameter: APIInvokeMethod.SQLite,
            getPersonalProgress: APIInvokeMethod.SQLite,
            getTeamProgressDetail: APIInvokeMethod.SQLite,
            getTeamProgressMain: APIInvokeMethod.SQLite,
            getYearConfiguration: APIInvokeMethod.SQLite,
            getProgressActualValue: APIInvokeMethod.SQLite,
            getProgressGoalPlan: APIInvokeMethod.SQLite,
            getDeviceInfo: APIInvokeMethod.SQLite,
            getGoalSettingPlan: APIInvokeMethod.SQLite,
            getGoalSettingActualValue: APIInvokeMethod.SQLite,
            addPoint: APIInvokeMethod.SQLite,
            ChangeMessageStatus: APIInvokeMethod.SQLite,
            unbindDevice: APIInvokeMethod.Restful
        }
    },
    UAT: {
        ORGANIZATION: "Allianz",
        CUSTOMER_ADD_ANNOUNCE: true,
        TIMEOUT: 900,
        ACTION_INTERVAL: 300,
        OFFLINE_LOGIN_MAX_TIMES: 5,
        SSL_FINGERPRINTS: ['A8 99 5D BE 29 F6 24 13 ED 88 0C AB ED E1 58 6F 80 9B 9A DB 55 7E 6A 54 68 7B DE DB 0D DA C3 D5'],
        DATABASE: {
            Main: {
                name: 'Main'
            },
            Profile: {
                name: 'Profile'
            }
        },
        DASHBOARD: {
            SearchBirthdayRange: {
                subN: 7,
                addN: 30
            },
            SearchCalendarRange: {
                subN: 2,
                addN: 2
            }
        },
        SYNC_URL: {
            CALENDAR: {
                push: 'https://snd-uat.allianz.com.tw/appointment',
                pull: 'https://snd-uat.allianz.com.tw/appointment'
            },
            CUSTOMER: {
                push: 'https://snd-uat.allianz.com.tw/customerprofiles',
                pull: 'https://snd-uat.allianz.com.tw/customerprofiles'
            },
            CUSTOMER_CONTACT: {
                push: 'https://snd-uat.allianz.com.tw/notes',
                pull: 'https://snd-uat.allianz.com.tw/notes'
            },
            MESSAGE: {
                push: 'https://snd-uat.allianz.com.tw/message',
                pull: 'https://snd-uat.allianz.com.tw/message'
            },
            GOAL_EXPECTED: {
                push: 'https://snd-uat.allianz.com.tw/goalExpected',
                pull: 'https://snd-uat.allianz.com.tw/goalExpected'
            },
            YEAR_CONFIG: {
                push: 'https://snd-uat.allianz.com.tw/Configuration',
                pull: 'https://snd-uat.allianz.com.tw/Configuration'
            },
            GOAL: {
                push: 'https://snd-uat.allianz.com.tw/Goal',
                pull: 'https://snd-uat.allianz.com.tw/Goal'
            },
            ACTUAL: {
                push: 'https://snd-uat.allianz.com.tw/Actual',
                pull: 'https://snd-uat.allianz.com.tw/Actual'
            },
            AGENCY_PLAN: {
                push: 'https://snd-uat.allianz.com.tw/AgencyPlan',
                pull: 'https://snd-uat.allianz.com.tw/AgencyPlan'
            },
            PROGRESS: {
                push: 'https://snd-uat.allianz.com.tw/Progress',
                pull: 'https://snd-uat.allianz.com.tw/Progress'
            },
            PROFILE_CODE: {
                push: 'https://snd-uat.allianz.com.tw/datalists/all',
                pull: 'https://snd-uat.allianz.com.tw/datalists/all'
            }
        },
        API_URL: {
            onlineLogin: 'https://snd-uat.allianz.com.tw/login',
            CheckVersion: 'https://snd-uat.allianz.com.tw/version',
            UpdatePushID: 'https://snd-uat.allianz.com.tw/deviceChange',
            getSyncSequenceID: 'https://snd-uat.allianz.com.tw/sequenceID',
            PushErrorLog: 'hhttps://snd-uat.allianz.com.tw/errorLog',
            PushActionLog: 'https://snd-uat.allianz.com.tw/AppClickLog',
            getYearConfig: 'https://snd-uat.allianz.com.tw/Configuration',
            getAgencyPlan: 'https://snd-uat.allianz.com.tw/AgencyPlan',
            getProgress: 'https://snd-uat.allianz.com.tw/Progress',
            getGoal: 'https://snd-uat.allianz.com.tw/Goal',
            getActual: 'https://snd-uat.allianz.com.tw/Actual',
            pushGoalSettingData: 'https://snd-uat.allianz.com.tw/SubmitGoal',
            pushApproveGoal: 'https://snd-uat.allianz.com.tw/ApproveGoal',
            unbindDevice: 'http://snd-uat.allianz.com.tw/deviceUnbind'
        },
        API_TYPE: {
            getExtensionConfig: APIInvokeMethod.MOCK,
            getSetting: APIInvokeMethod.SQLite,
            updateSetting: APIInvokeMethod.SQLite,
            getProfileCode: APIInvokeMethod.SQLite,
            importContact: APIInvokeMethod.SQLite,
            updateCustomerFollowStatus: APIInvokeMethod.SQLite,
            getCustomerOverTime: APIInvokeMethod.SQLite,
            getCustomerAutoDelete: APIInvokeMethod.SQLite,
            getCustomerList: APIInvokeMethod.SQLite,
            getCustomerDetail: APIInvokeMethod.SQLite,
            getCustomerProfile: APIInvokeMethod.SQLite,
            saveCustomerProfile: APIInvokeMethod.SQLite,
            deleteCustomer: APIInvokeMethod.SQLite,
            getCustomerFilterPreset: APIInvokeMethod.SQLite,
            saveCustomerFilterPreset: APIInvokeMethod.SQLite,
            getCustomerFilter: APIInvokeMethod.SQLite,
            getCustomerContactNoteDetail: APIInvokeMethod.SQLite,
            getCustomerContactNote: APIInvokeMethod.SQLite,
            addCustomerContactNote: APIInvokeMethod.SQLite,
            editCustomerContactNote: APIInvokeMethod.SQLite,
            deleteCustomerContactNote: APIInvokeMethod.SQLite,
            getCustomerTel: APIInvokeMethod.SQLite,
            getCalendarEventList: APIInvokeMethod.SQLite,
            getCalendarEventDetail: APIInvokeMethod.SQLite,
            getCalendarReminder: APIInvokeMethod.MOCK,
            contactsSearch: APIInvokeMethod.Device,
            getCurrentLanguageList: APIInvokeMethod.SQLite,
            deleteCalendarEvent: APIInvokeMethod.SQLite,
            addCalendarEvent: APIInvokeMethod.SQLite,
            saveCalendarEvent: APIInvokeMethod.SQLite,
            updateCalendarEvent: APIInvokeMethod.SQLite,
            saveLoginToken: APIInvokeMethod.SQLite,
            offlineAuth: APIInvokeMethod.SQLite,
            getMenu: APIInvokeMethod.MOCK,
            onlineLogin: APIInvokeMethod.Restful,
            Logout: APIInvokeMethod.MOCK,
            SyncPush: APIInvokeMethod.Restful,
            SyncPull: APIInvokeMethod.Restful,
            saveCustomerDetail: APIInvokeMethod.SQLite,
            getDashboardMessageList: APIInvokeMethod.SQLite,
            getCustomerBirthdayList: APIInvokeMethod.SQLite,
            CheckVersion: APIInvokeMethod.Restful,
            getUpdateTimeList: APIInvokeMethod.SQLite,
            updateDashboardMessageStatus: APIInvokeMethod.SQLite,
            updateDashboardToRead: APIInvokeMethod.SQLite,
            BindingAccount: APIInvokeMethod.SQLite,
            getDeviceAccount: APIInvokeMethod.SQLite,
            UpdatePushID: APIInvokeMethod.Restful,
            getSyncSequenceID: APIInvokeMethod.Restful,
            LogError: APIInvokeMethod.SQLite,
            LogAction: APIInvokeMethod.SQLite,
            getMetaConfig: APIInvokeMethod.MOCK,
            PushErrorLog: APIInvokeMethod.Restful,
            PushActionLog: APIInvokeMethod.Restful,
            getRouterMap: APIInvokeMethod.MOCK,
            getYearConfig: APIInvokeMethod.Restful,
            saveYearConfig: APIInvokeMethod.SQLite,
            getAgencyPlan: APIInvokeMethod.Restful,
            saveAgencyPlan: APIInvokeMethod.SQLite,
            getProgress: APIInvokeMethod.Restful,
            saveProgress: APIInvokeMethod.SQLite,
            getGoal: APIInvokeMethod.Restful,
            saveGoal: APIInvokeMethod.SQLite,
            getActual: APIInvokeMethod.Restful,
            saveActual: APIInvokeMethod.SQLite,
            pushGoalSettingData: APIInvokeMethod.Restful,
            pushApproveGoal: APIInvokeMethod.Restful,
            getSettingValue: APIInvokeMethod.SQLite,
            getGoalSettingGoalSetting: APIInvokeMethod.SQLite,
            getGoalSettingYearConfig: APIInvokeMethod.SQLite,
            getAgencyPlanMain: APIInvokeMethod.SQLite,
            getAgencyPlanDetail: APIInvokeMethod.SQLite,
            getGoalSettingExpected: APIInvokeMethod.SQLite,
            setGoalSettingExpected: APIInvokeMethod.SQLite,
            getGoalSettingValue: APIInvokeMethod.SQLite,
            getProgressData: APIInvokeMethod.SQLite,
            getProgressDataActualValue: APIInvokeMethod.SQLite,
            getProgressDataGoalSettingPlan: APIInvokeMethod.SQLite,
            getActualValue: APIInvokeMethod.SQLite,
            getAgencyDetailData: APIInvokeMethod.SQLite,
            getGoalSetting: APIInvokeMethod.SQLite,
            getOtherParameter: APIInvokeMethod.SQLite,
            getPersonalProgress: APIInvokeMethod.SQLite,
            getTeamProgressDetail: APIInvokeMethod.SQLite,
            getTeamProgressMain: APIInvokeMethod.SQLite,
            getYearConfiguration: APIInvokeMethod.SQLite,
            getProgressActualValue: APIInvokeMethod.SQLite,
            getProgressGoalPlan: APIInvokeMethod.SQLite,
            getDeviceInfo: APIInvokeMethod.SQLite,
            getGoalSettingPlan: APIInvokeMethod.SQLite,
            getGoalSettingActualValue: APIInvokeMethod.SQLite,
            addPoint: APIInvokeMethod.SQLite,
            ChangeMessageStatus: APIInvokeMethod.SQLite,
            unbindDevice: APIInvokeMethod.Restful
        }
    },
}
