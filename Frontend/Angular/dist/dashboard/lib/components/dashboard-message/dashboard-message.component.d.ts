import { OnInit, EventEmitter, ErrorHandler } from '@angular/core';
import { Language, TranslateService, DefaultLoginMgr, NotificationMgr, DataSyncService, AppRouter, showRule } from '@allianzSND/core';
import { DashboardMessage } from '../../service/model/DashboardMessage';
import { AgencyPlanStoreService } from '@allianzSND/goal';
import { showDashboardRule } from '../../interface/showDashboardRule.interface';
import { DashboardMessageType } from './dashboard-message-type';
export declare class DashboardMessageComponent implements OnInit {
    private translateService;
    private loginMgr;
    private errorHandler;
    private agencyPlanStoreService;
    private router;
    private notificationMgr;
    private syncService;
    private showDashboardRule;
    private showRule;
    MsgType: string;
    Language: Language;
    IsHasMsg: boolean;
    IsCAO: boolean;
    private _messageList;
    private keyword;
    msgType: Array<{
        value: DashboardMessageType;
        displayName: string;
    }>;
    private defaultMsgType;
    ConvertToImgUrl: {
        "GoalSetting": string;
        "Customer": string;
    };
    ConvertCategoryToLanguage: {
        "GoalSetting": string;
        "Customer": string;
    };
    ConvertStatus: {
        "Reading": boolean;
        "UnRead": boolean;
    };
    constructor(translateService: TranslateService, loginMgr: DefaultLoginMgr, errorHandler: ErrorHandler, agencyPlanStoreService: AgencyPlanStoreService, router: AppRouter, notificationMgr: NotificationMgr, syncService: DataSyncService, showDashboardRule: showDashboardRule, showRule: showRule);
    ngOnInit(): void;
    filterByKeyword: EventEmitter<string>;
    clickMessage: EventEmitter<DashboardMessage>;
    changeCommitmentStatus: EventEmitter<any>;
    messageList: any;
    private init;
    Filter(keyword: any): void;
    OnClickMessage(message: DashboardMessage): void;
}
