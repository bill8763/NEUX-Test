/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ErrorHandler, Optional, Inject } from '@angular/core';
import { Language, TranslateService, DefaultLoginMgr, NotificationMgr, DataSyncService, NotificationType, AppRouter, showRuleToken } from '@allianzSND/core';
import { AgencyPlanStoreService, AgencyPlanAgentInfo } from '@allianzSND/goal';
import { showDashboardRuleToken } from '../../injectionToken/injection-token';
import { DashboardMessageType } from './dashboard-message-type';
import { take } from 'rxjs/operators';
export class DashboardMessageComponent {
    /**
     * @param {?} translateService
     * @param {?} loginMgr
     * @param {?} errorHandler
     * @param {?} agencyPlanStoreService
     * @param {?} router
     * @param {?} notificationMgr
     * @param {?} syncService
     * @param {?} showDashboardRule
     * @param {?} showRule
     */
    constructor(translateService, loginMgr, errorHandler, agencyPlanStoreService, router, notificationMgr, syncService, showDashboardRule, showRule) {
        this.translateService = translateService;
        this.loginMgr = loginMgr;
        this.errorHandler = errorHandler;
        this.agencyPlanStoreService = agencyPlanStoreService;
        this.router = router;
        this.notificationMgr = notificationMgr;
        this.syncService = syncService;
        this.showDashboardRule = showDashboardRule;
        this.showRule = showRule;
        this.MsgType = 'UnRead';
        this.Language = new Language();
        this.IsHasMsg = false;
        this.IsCAO = false;
        this._messageList = [];
        this.keyword = 'UnRead';
        this.msgType = [];
        this.defaultMsgType = [{
                value: DashboardMessageType.Unread,
                displayName: this.Language.unread
            }, {
                value: DashboardMessageType.All,
                displayName: this.Language.all
            }, {
                value: DashboardMessageType.GoalSetting,
                displayName: this.Language.goalSettingMsgType
            },
            // {
            //   value: DashboardMessageType.Progress,
            //   displayName: this.Language.progress
            // }, 
            {
                value: DashboardMessageType.Customer,
                displayName: this.Language.customer
            }, {
                value: DashboardMessageType.PendingApproval,
                displayName: this.Language.pendingApproval
            }];
        this.ConvertToImgUrl = {
            "GoalSetting": 'goal',
            "Customer": 'cust',
        };
        this.ConvertCategoryToLanguage = {
            "GoalSetting": 'goalSetting',
            "Customer": 'customer',
        };
        this.ConvertStatus = {
            "Reading": true,
            "UnRead": false
        };
        //#region  getter setter (input output)
        this.filterByKeyword = new EventEmitter();
        this.clickMessage = new EventEmitter();
        this.changeCommitmentStatus = new EventEmitter();
        this.init();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} messageList
     * @return {?}
     */
    set messageList(messageList) {
        if (messageList.length > 0) {
            this.IsHasMsg = true;
            console.log('isHasMsg is true');
        }
        else {
            this.IsHasMsg = false;
        }
        // if(this.showRule) {
        //   messageList.forEach(x => {
        //     x.messageDate = this.showRule.convertDate(new Date(x.messageDate));
        //   });
        // }
        // else {
        //   messageList.forEach(x => {
        //     x.messageDate = format(new Date(x.messageDate),'MM/dd/yyyy');
        //   });
        // }
        this._messageList = messageList;
        console.log("detail message: ", this._messageList);
    }
    /**
     * @return {?}
     */
    get messageList() {
        return this._messageList;
    }
    //#endregion
    //#region function
    /**
     * @private
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("Dashboard init");
            /** @type {?} */
            let loginInfo = yield this.loginMgr.getLoginInfo().pipe(take(1)).toPromise();
            console.log("Dashboard init loginInfo:", loginInfo);
            if (this.showDashboardRule) {
                /** @type {?} */
                let filtered = this.showDashboardRule.showMessageType(loginInfo);
                this.msgType = this.defaultMsgType.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => filtered.indexOf(x.value) > -1));
            }
            else
                this.msgType = this.defaultMsgType;
            console.log("Dashboard init end:", this.msgType);
        });
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    Filter(keyword) {
        this.keyword = keyword;
        this.filterByKeyword.emit(keyword);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    OnClickMessage(message) {
        if (message.isClick === 'Y') {
            console.log("message", message);
            /** @type {?} */
            let argument = JSON.parse(message.argument);
            console.log("argument", argument, "typeof argument", typeof argument);
            if (message.isPopup === 'Y') {
                this.clickMessage.emit(message);
                this.filterByKeyword.emit(this.keyword);
                console.log('需要run push()');
                this.notificationMgr.pushNotification(NotificationType[message.messageType], argument);
            }
            else if (message.isPopup === 'N') {
                console.log("跳轉到" + argument.agentID + "的commitment");
                this.clickMessage.emit(message);
                this.filterByKeyword.emit(this.keyword);
                // get
                /** @type {?} */
                let agencyDetail = new AgencyPlanAgentInfo(argument['agentID'], argument['agentName'], argument['DataYear'], argument['AppUseMode']);
                // agencyDetail['agentID'] = argument['agentID'];
                // agencyDetail['agentName'] = argument['agentName'];
                // agencyDetail['dataYear'] = argument['DataYear'];
                // agencyDetail['appUseMode'] = argument['AppUseMode'];
                console.log("agencyDetail", agencyDetail);
                this.agencyPlanStoreService.setCurrentAgencyDetail(agencyDetail);
                this.router.navigate("commitment");
                // this._location.go('')  //去commitment
            }
        }
        else if (message.isClick === 'N') {
            console.log('this is no action for click');
        }
    }
}
DashboardMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-dashboard-message',
                template: "<div class=\"space-detail\">\n  <!-- msg -->\n  <app-ui-title-style1>\n    <ng-container textType=\"titleText\">{{\n      Language.message | translate\n    }}</ng-container>\n  </app-ui-title-style1>\n  <!-- msg filter -->\n  <app-ui-form-radio-group class=\"type-block\" [nxValue]=\"MsgType\" (nxValueChange)=\"Filter($event)\">\n    <app-ui-form-radio2 *ngFor=\"let type of msgType\" [value]=\"type.value\">\n      {{ type.displayName | translate }}\n    </app-ui-form-radio2>\n  </app-ui-form-radio-group>\n  <!-- end of msg filter -->\n \n</div>\n<!-- msg card -->\n<!-- IsHasMsg -->\n<ng-container *ngIf=\"IsHasMsg; else noMsgData\">\n  <div class=\"msg-list-block space-detail\">\n    <app-dashboard-ui-card-msg *ngFor=\"let msg of messageList\" [linkStatus]=\"msg.linkStatus\"\n      [cardType]=\"ConvertToImgUrl[msg.messageCategory]\" [isRead]=\"ConvertStatus[msg.status]\" Action\n      action=\"'DashboardMessageClick'\" (actionClick)=\"OnClickMessage(msg)\">\n      <ng-container cardType> {{ msg.messageCategory | translate }} </ng-container>\n      <ng-container cardTitle> {{ msg.title | translate}} </ng-container>\n      <ng-container cardDate> {{ msg.messageDate }} </ng-container>\n      <ng-container cardTime> {{ msg.messageTime }} </ng-container>\n      <ng-container cardDetail> {{ msg.description |translate }} </ng-container>\n      <ng-container linkStatus> {{ msg.linkStatus |translate }} </ng-container>\n    </app-dashboard-ui-card-msg>\n  </div>\n</ng-container>\n<!-- end of msg card -->\n<!-- msg nodata  -->\n<ng-template #noMsgData>\n  <div class=\"layout-nodata layout-theme-skelton\">\n    <p class=\"nodata-text\">{{ Language.noMessage | translate }}</p>\n    <div class=\"nodata-img\">\n      <img src=\"assets/img/nodata-dashboard-list.svg\" />\n    </div>\n  </div>\n</ng-template>\n<!-- end of msg nodata -->\n",
                styles: [".space-detail{padding-right:40px;display:block}@media (max-width:1023px){.space-detail{padding-right:40px}}.layout-detail-block{background-color:#f5f5f5;padding-left:40px}.layout-detail-block .space-detail:not(.layout-nodata):last-child{padding-bottom:100px}.layout-detail-block .layout-nodata{padding-bottom:0}@media (min-width:768px){.layout-detail-block.style-has-right-space{padding-right:40px}.layout-detail-block.style-has-right-space.skelton-layout{padding-right:0}}.layout-detail-block.style-has-top-space{padding-top:40px}@media (max-width:767px){.space-detail{padding-right:5px}.layout-detail-block{padding-left:5px}.layout-detail-block.style-has-right-space{padding-right:5px}.layout-detail-block.style-has-top-space{padding-top:30px}}.layout-detail-block.style-has-btm-space{padding-bottom:100px}.space-inner-lg{padding-left:50px;padding-right:50px}@media (max-width:767px){.space-inner-lg{padding-left:5px;padding-right:5px}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.layout-nodata .nodata-text{margin:0;padding:0 0 5px;font-size:.875rem;color:#414141;line-height:28px;text-align:center}.layout-nodata .nodata-img{max-width:100%;width:100%}.layout-nodata .nodata-img img{width:100%;max-width:100%}.type-block{padding-bottom:20px}"]
            }] }
];
DashboardMessageComponent.ctorParameters = () => [
    { type: TranslateService },
    { type: DefaultLoginMgr },
    { type: ErrorHandler },
    { type: AgencyPlanStoreService },
    { type: AppRouter },
    { type: NotificationMgr },
    { type: DataSyncService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showDashboardRuleToken,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [showRuleToken,] }] }
];
DashboardMessageComponent.propDecorators = {
    filterByKeyword: [{ type: Output }],
    clickMessage: [{ type: Output }],
    changeCommitmentStatus: [{ type: Output }],
    messageList: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DashboardMessageComponent.prototype.MsgType;
    /** @type {?} */
    DashboardMessageComponent.prototype.Language;
    /** @type {?} */
    DashboardMessageComponent.prototype.IsHasMsg;
    /** @type {?} */
    DashboardMessageComponent.prototype.IsCAO;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype._messageList;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.keyword;
    /** @type {?} */
    DashboardMessageComponent.prototype.msgType;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.defaultMsgType;
    /** @type {?} */
    DashboardMessageComponent.prototype.ConvertToImgUrl;
    /** @type {?} */
    DashboardMessageComponent.prototype.ConvertCategoryToLanguage;
    /** @type {?} */
    DashboardMessageComponent.prototype.ConvertStatus;
    /** @type {?} */
    DashboardMessageComponent.prototype.filterByKeyword;
    /** @type {?} */
    DashboardMessageComponent.prototype.clickMessage;
    /** @type {?} */
    DashboardMessageComponent.prototype.changeCommitmentStatus;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.loginMgr;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.agencyPlanStoreService;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.notificationMgr;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.syncService;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.showDashboardRule;
    /**
     * @type {?}
     * @private
     */
    DashboardMessageComponent.prototype.showRule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvZGFzaGJvYXJkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGFzaGJvYXJkLW1lc3NhZ2UvZGFzaGJvYXJkLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBdUIsZUFBZSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFZLE1BQU0sa0JBQWtCLENBQUM7QUFHNUwsT0FBTyxFQUFRLHNCQUFzQixFQUFnQixtQkFBbUIsRUFBb0IsTUFBTSxrQkFBa0IsQ0FBQztBQUNySCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBUXhELE1BQU07Ozs7Ozs7Ozs7OztJQWlESixZQUNVLGdCQUFrQyxFQUNsQyxRQUF5QixFQUN6QixZQUEwQixFQUMxQixzQkFBOEMsRUFDOUMsTUFBaUIsRUFDakIsZUFBZ0MsRUFDaEMsV0FBNEIsRUFDZ0IsaUJBQW9DLEVBQzdDLFFBQWtCO1FBUnJELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDZ0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBeER4RCxZQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNiLGlCQUFZLEdBQTRCLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQVcsUUFBUSxDQUFDO1FBQzVCLFlBQU8sR0FBZ0UsRUFBRSxDQUFDO1FBQ3pFLG1CQUFjLEdBQ2xCLENBQUM7Z0JBQ0QsS0FBSyxFQUFFLG9CQUFvQixDQUFDLE1BQU07Z0JBQ2xDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDbEMsRUFBRTtnQkFDRCxLQUFLLEVBQUUsb0JBQW9CLENBQUMsR0FBRztnQkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRzthQUMvQixFQUFFO2dCQUNELEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxXQUFXO2dCQUN2QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0I7YUFDOUM7WUFDRCxJQUFJO1lBQ0osMENBQTBDO1lBQzFDLHdDQUF3QztZQUN4QyxNQUFNO1lBQ047Z0JBQ0UsS0FBSyxFQUFFLG9CQUFvQixDQUFDLFFBQVE7Z0JBQ3BDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7YUFDcEMsRUFBRTtnQkFDRCxLQUFLLEVBQUUsb0JBQW9CLENBQUMsZUFBZTtnQkFDM0MsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZTthQUMzQyxDQUFDLENBQUE7UUFFRyxvQkFBZSxHQUFHO1lBQ3ZCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFVBQVUsRUFBRSxNQUFNO1NBRW5CLENBQUE7UUFFTSw4QkFBeUIsR0FBRztZQUNqQyxhQUFhLEVBQUUsYUFBYTtZQUM1QixVQUFVLEVBQUUsVUFBVTtTQUV2QixDQUFBO1FBRU0sa0JBQWEsR0FBRztZQUNyQixTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUE7UUFrQkQsdUNBQXVDO1FBR2hDLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0QsaUJBQVksR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRSwyQkFBc0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVpwRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsUUFBUSxLQUFLLENBQUM7Ozs7O0lBV2QsSUFDSSxXQUFXLENBQUMsV0FBVztRQUN6QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFHRCxzQkFBc0I7UUFDdEIsK0JBQStCO1FBQy9CLDBFQUEwRTtRQUMxRSxRQUFRO1FBQ1IsSUFBSTtRQUVKLFNBQVM7UUFDVCwrQkFBK0I7UUFDL0Isb0VBQW9FO1FBQ3BFLFFBQVE7UUFDUixJQUFJO1FBRUosSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBTWEsSUFBSTs7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztnQkFDMUIsU0FBUyxHQUFjLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7O29CQUN0QixRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUNoRjs7Z0JBRUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBTztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxPQUF5QjtRQUM3QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBOztnQkFDM0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxRQUFRLENBQUMsQ0FBQztZQUN0RSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO2dCQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN4RjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7b0JBRXBDLFlBQVksR0FBd0IsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3pKLGlEQUFpRDtnQkFDakQscURBQXFEO2dCQUNyRCxtREFBbUQ7Z0JBQ25ELHVEQUF1RDtnQkFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRW5DLHVDQUF1QzthQUN4QztTQUNGO2FBQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7WUFqS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHMwREFBaUQ7O2FBRWxEOzs7WUFka0IsZ0JBQWdCO1lBQUUsZUFBZTtZQURLLFlBQVk7WUFJdEQsc0JBQXNCO1lBSDBGLFNBQVM7WUFBN0QsZUFBZTtZQUFFLGVBQWU7NENBd0V0RyxRQUFRLFlBQUksTUFBTSxTQUFDLHNCQUFzQjs0Q0FDekMsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOzs7OEJBU2xDLE1BQU07MkJBRU4sTUFBTTtxQ0FFTixNQUFNOzBCQUdOLEtBQUs7Ozs7SUF4RU4sNENBQTBCOztJQUMxQiw2Q0FBaUM7O0lBQ2pDLDZDQUF3Qjs7SUFDeEIsMENBQXFCOzs7OztJQUNyQixpREFBbUQ7Ozs7O0lBQ25ELDRDQUFtQzs7SUFDbkMsNENBQWlGOzs7OztJQUNqRixtREFxQkk7O0lBRUosb0RBSUM7O0lBRUQsOERBSUM7O0lBRUQsa0RBR0M7O0lBb0JELG9EQUNrRTs7SUFDbEUsaURBQ3lFOztJQUN6RSwyREFDc0U7Ozs7O0lBdEJwRSxxREFBMEM7Ozs7O0lBQzFDLDZDQUFpQzs7Ozs7SUFDakMsaURBQWtDOzs7OztJQUNsQywyREFBc0Q7Ozs7O0lBQ3RELDJDQUF5Qjs7Ozs7SUFDekIsb0RBQXdDOzs7OztJQUN4QyxnREFBb0M7Ozs7O0lBQ3BDLHNEQUF3Rjs7Ozs7SUFDeEYsNkNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRXJyb3JIYW5kbGVyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgVHJhbnNsYXRlU2VydmljZSwgRGVmYXVsdExvZ2luTWdyLCBMb2dpbkluZm8sIEFQUEVycm9yLCBOb3RpZmljYXRpb25NZ3IsIERhdGFTeW5jU2VydmljZSwgTm90aWZpY2F0aW9uVHlwZSwgQXBwUm91dGVyLCBzaG93UnVsZVRva2VuLCBzaG93UnVsZSB9IGZyb20gJ0BhbGxpYW56U05EL2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9kZWwvRGFzaGJvYXJkTWVzc2FnZSc7XG5pbXBvcnQgeyBnZXRZZWFyLCBnZXRNb250aCwgZ2V0RGF0ZSwgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgUk9MRSwgQWdlbmN5UGxhblN0b3JlU2VydmljZSwgQUdFTkNZX1NUQVRFLCBBZ2VuY3lQbGFuQWdlbnRJbmZvLCBBZ2VuY3lQbGFuU3RhdHVzIH0gZnJvbSAnQGFsbGlhbnpTTkQvZ29hbCc7XG5pbXBvcnQgeyBzaG93RGFzaGJvYXJkUnVsZVRva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IHNob3dEYXNoYm9hcmRSdWxlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3Nob3dEYXNoYm9hcmRSdWxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNZXNzYWdlVHlwZSB9IGZyb20gJy4vZGFzaGJvYXJkLW1lc3NhZ2UtdHlwZSc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwsIGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuZC1kYXNoYm9hcmQtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIE1zZ1R5cGUgPSAnVW5SZWFkJztcbiAgcHVibGljIExhbmd1YWdlID0gbmV3IExhbmd1YWdlKCk7XG4gIHB1YmxpYyBJc0hhc01zZyA9IGZhbHNlO1xuICBwdWJsaWMgSXNDQU8gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWVzc2FnZUxpc3Q6IEFycmF5PERhc2hib2FyZE1lc3NhZ2U+ID0gW107XG4gIHByaXZhdGUga2V5d29yZDogc3RyaW5nID0gJ1VuUmVhZCc7XG4gIHB1YmxpYyBtc2dUeXBlOiBBcnJheTx7IHZhbHVlOiBEYXNoYm9hcmRNZXNzYWdlVHlwZSwgZGlzcGxheU5hbWU6IHN0cmluZyB9PiA9IFtdO1xuICBwcml2YXRlIGRlZmF1bHRNc2dUeXBlOiBBcnJheTx7IHZhbHVlOiBEYXNoYm9hcmRNZXNzYWdlVHlwZSwgZGlzcGxheU5hbWU6IHN0cmluZyB9PlxuICAgID0gW3tcbiAgICAgIHZhbHVlOiBEYXNoYm9hcmRNZXNzYWdlVHlwZS5VbnJlYWQsXG4gICAgICBkaXNwbGF5TmFtZTogdGhpcy5MYW5ndWFnZS51bnJlYWRcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogRGFzaGJvYXJkTWVzc2FnZVR5cGUuQWxsLFxuICAgICAgZGlzcGxheU5hbWU6IHRoaXMuTGFuZ3VhZ2UuYWxsXG4gICAgfSwge1xuICAgICAgdmFsdWU6IERhc2hib2FyZE1lc3NhZ2VUeXBlLkdvYWxTZXR0aW5nLFxuICAgICAgZGlzcGxheU5hbWU6IHRoaXMuTGFuZ3VhZ2UuZ29hbFNldHRpbmdNc2dUeXBlXG4gICAgfSwgXG4gICAgLy8ge1xuICAgIC8vICAgdmFsdWU6IERhc2hib2FyZE1lc3NhZ2VUeXBlLlByb2dyZXNzLFxuICAgIC8vICAgZGlzcGxheU5hbWU6IHRoaXMuTGFuZ3VhZ2UucHJvZ3Jlc3NcbiAgICAvLyB9LCBcbiAgICB7XG4gICAgICB2YWx1ZTogRGFzaGJvYXJkTWVzc2FnZVR5cGUuQ3VzdG9tZXIsXG4gICAgICBkaXNwbGF5TmFtZTogdGhpcy5MYW5ndWFnZS5jdXN0b21lclxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiBEYXNoYm9hcmRNZXNzYWdlVHlwZS5QZW5kaW5nQXBwcm92YWwsXG4gICAgICBkaXNwbGF5TmFtZTogdGhpcy5MYW5ndWFnZS5wZW5kaW5nQXBwcm92YWxcbiAgICB9XVxuXG4gIHB1YmxpYyBDb252ZXJ0VG9JbWdVcmwgPSB7XG4gICAgXCJHb2FsU2V0dGluZ1wiOiAnZ29hbCcsXG4gICAgXCJDdXN0b21lclwiOiAnY3VzdCcsXG4gICAgLy8gXCJQcm9ncmVzc1wiOiAncHJvZ3Jlc3MnXG4gIH1cblxuICBwdWJsaWMgQ29udmVydENhdGVnb3J5VG9MYW5ndWFnZSA9IHtcbiAgICBcIkdvYWxTZXR0aW5nXCI6ICdnb2FsU2V0dGluZycsXG4gICAgXCJDdXN0b21lclwiOiAnY3VzdG9tZXInLFxuICAgIC8vIFwiUHJvZ3Jlc3NcIjogJ3Byb2dyZXNzJ1xuICB9XG5cbiAgcHVibGljIENvbnZlcnRTdGF0dXMgPSB7XG4gICAgXCJSZWFkaW5nXCI6IHRydWUsXG4gICAgXCJVblJlYWRcIjogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2luTWdyOiBEZWZhdWx0TG9naW5NZ3IsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBwcml2YXRlIGFnZW5jeVBsYW5TdG9yZVNlcnZpY2U6IEFnZW5jeVBsYW5TdG9yZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IEFwcFJvdXRlcixcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbk1ncjogTm90aWZpY2F0aW9uTWdyLFxuICAgIHByaXZhdGUgc3luY1NlcnZpY2U6IERhdGFTeW5jU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KHNob3dEYXNoYm9hcmRSdWxlVG9rZW4pIHByaXZhdGUgc2hvd0Rhc2hib2FyZFJ1bGU6IHNob3dEYXNoYm9hcmRSdWxlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3Qoc2hvd1J1bGVUb2tlbikgcHJpdmF0ZSBzaG93UnVsZTogc2hvd1J1bGUsXG4gICkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICAvLyNyZWdpb24gIGdldHRlciBzZXR0ZXIgKGlucHV0IG91dHB1dClcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGZpbHRlckJ5S2V5d29yZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2xpY2tNZXNzYWdlOiBFdmVudEVtaXR0ZXI8RGFzaGJvYXJkTWVzc2FnZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2hhbmdlQ29tbWl0bWVudFN0YXR1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG1lc3NhZ2VMaXN0KG1lc3NhZ2VMaXN0KSB7XG4gICAgaWYgKG1lc3NhZ2VMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuSXNIYXNNc2cgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coJ2lzSGFzTXNnIGlzIHRydWUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLklzSGFzTXNnID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvLyBpZih0aGlzLnNob3dSdWxlKSB7XG4gICAgLy8gICBtZXNzYWdlTGlzdC5mb3JFYWNoKHggPT4ge1xuICAgIC8vICAgICB4Lm1lc3NhZ2VEYXRlID0gdGhpcy5zaG93UnVsZS5jb252ZXJ0RGF0ZShuZXcgRGF0ZSh4Lm1lc3NhZ2VEYXRlKSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIG1lc3NhZ2VMaXN0LmZvckVhY2goeCA9PiB7XG4gICAgLy8gICAgIHgubWVzc2FnZURhdGUgPSBmb3JtYXQobmV3IERhdGUoeC5tZXNzYWdlRGF0ZSksJ01NL2RkL3l5eXknKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cblxuICAgIHRoaXMuX21lc3NhZ2VMaXN0ID0gbWVzc2FnZUxpc3Q7XG5cbiAgICBjb25zb2xlLmxvZyhcImRldGFpbCBtZXNzYWdlOiBcIiwgdGhpcy5fbWVzc2FnZUxpc3QpO1xuICB9XG4gIGdldCBtZXNzYWdlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUxpc3Q7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZnVuY3Rpb25cblxuICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmQgaW5pdFwiKTtcbiAgICBsZXQgbG9naW5JbmZvOiBMb2dpbkluZm8gPSBhd2FpdCB0aGlzLmxvZ2luTWdyLmdldExvZ2luSW5mbygpLnBpcGUodGFrZSgxKSkudG9Qcm9taXNlKCk7XG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmQgaW5pdCBsb2dpbkluZm86XCIsIGxvZ2luSW5mbyk7XG4gICAgaWYgKHRoaXMuc2hvd0Rhc2hib2FyZFJ1bGUpIHtcbiAgICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMuc2hvd0Rhc2hib2FyZFJ1bGUuc2hvd01lc3NhZ2VUeXBlKGxvZ2luSW5mbyk7XG4gICAgICB0aGlzLm1zZ1R5cGUgPSB0aGlzLmRlZmF1bHRNc2dUeXBlLmZpbHRlcih4ID0+IGZpbHRlcmVkLmluZGV4T2YoeC52YWx1ZSkgPiAtMSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRoaXMubXNnVHlwZSA9IHRoaXMuZGVmYXVsdE1zZ1R5cGU7XG4gICAgY29uc29sZS5sb2coXCJEYXNoYm9hcmQgaW5pdCBlbmQ6XCIsIHRoaXMubXNnVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgRmlsdGVyKGtleXdvcmQpIHtcbiAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgIHRoaXMuZmlsdGVyQnlLZXl3b3JkLmVtaXQoa2V5d29yZCk7XG4gIH1cblxuICBwdWJsaWMgT25DbGlja01lc3NhZ2UobWVzc2FnZTogRGFzaGJvYXJkTWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlLmlzQ2xpY2sgPT09ICdZJykge1xuICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsIG1lc3NhZ2UpXG4gICAgICBsZXQgYXJndW1lbnQgPSBKU09OLnBhcnNlKG1lc3NhZ2UuYXJndW1lbnQpO1xuICAgICAgY29uc29sZS5sb2coXCJhcmd1bWVudFwiLCBhcmd1bWVudCwgXCJ0eXBlb2YgYXJndW1lbnRcIiwgdHlwZW9mIGFyZ3VtZW50KTtcbiAgICAgIGlmIChtZXNzYWdlLmlzUG9wdXAgPT09ICdZJykge1xuICAgICAgICB0aGlzLmNsaWNrTWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZpbHRlckJ5S2V5d29yZC5lbWl0KHRoaXMua2V5d29yZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfpnIDopoFydW4gcHVzaCgpJyk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uTWdyLnB1c2hOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uVHlwZVttZXNzYWdlLm1lc3NhZ2VUeXBlXSwgYXJndW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmlzUG9wdXAgPT09ICdOJykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIui3s+i9ieWIsFwiICsgYXJndW1lbnQuYWdlbnRJRCArIFwi55qEY29tbWl0bWVudFwiKTtcbiAgICAgICAgdGhpcy5jbGlja01lc3NhZ2UuZW1pdChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5maWx0ZXJCeUtleXdvcmQuZW1pdCh0aGlzLmtleXdvcmQpO1xuICAgICAgICAvLyBnZXRcbiAgICAgICAgbGV0IGFnZW5jeURldGFpbDogQWdlbmN5UGxhbkFnZW50SW5mbyA9IG5ldyBBZ2VuY3lQbGFuQWdlbnRJbmZvKGFyZ3VtZW50WydhZ2VudElEJ10sIGFyZ3VtZW50WydhZ2VudE5hbWUnXSwgYXJndW1lbnRbJ0RhdGFZZWFyJ10sIGFyZ3VtZW50WydBcHBVc2VNb2RlJ10pO1xuICAgICAgICAvLyBhZ2VuY3lEZXRhaWxbJ2FnZW50SUQnXSA9IGFyZ3VtZW50WydhZ2VudElEJ107XG4gICAgICAgIC8vIGFnZW5jeURldGFpbFsnYWdlbnROYW1lJ10gPSBhcmd1bWVudFsnYWdlbnROYW1lJ107XG4gICAgICAgIC8vIGFnZW5jeURldGFpbFsnZGF0YVllYXInXSA9IGFyZ3VtZW50WydEYXRhWWVhciddO1xuICAgICAgICAvLyBhZ2VuY3lEZXRhaWxbJ2FwcFVzZU1vZGUnXSA9IGFyZ3VtZW50WydBcHBVc2VNb2RlJ107XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWdlbmN5RGV0YWlsXCIsIGFnZW5jeURldGFpbCk7XG4gICAgICAgIHRoaXMuYWdlbmN5UGxhblN0b3JlU2VydmljZS5zZXRDdXJyZW50QWdlbmN5RGV0YWlsKGFnZW5jeURldGFpbCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiY29tbWl0bWVudFwiKTtcblxuICAgICAgICAvLyB0aGlzLl9sb2NhdGlvbi5nbygnJykgIC8v5Y67Y29tbWl0bWVudFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5pc0NsaWNrID09PSAnTicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIG5vIGFjdGlvbiBmb3IgY2xpY2snKTtcbiAgICB9XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxufVxuIl19