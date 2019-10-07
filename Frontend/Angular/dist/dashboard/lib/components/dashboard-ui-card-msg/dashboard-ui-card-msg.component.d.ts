import { OnInit } from '@angular/core';
export declare class DashboardUiCardMsgComponent implements OnInit {
    isRead: boolean;
    isHasBtn: boolean;
    isHasApproved: boolean;
    cardType: string;
    linkStatus: any;
    imgType: string;
    constructor();
    ngOnInit(): void;
    private linkBtnStatus;
    approve(event: any): void;
}
