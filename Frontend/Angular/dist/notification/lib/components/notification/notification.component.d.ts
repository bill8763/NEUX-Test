import { OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationMgr, NotificationObject } from '@allianzSND/core';
export declare class NotificationComponent implements OnInit {
    private notificationMgr;
    private changeDetector;
    constructor(notificationMgr: NotificationMgr, changeDetector: ChangeDetectorRef);
    notificationList: any[];
    ngOnInit(): void;
    dissmiss(notification: NotificationObject): void;
}
