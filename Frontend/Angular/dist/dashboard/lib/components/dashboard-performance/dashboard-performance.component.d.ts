import { OnInit } from '@angular/core';
import { Language, DefaultLoginMgr } from '@allianzSND/core';
import { CONTENTGAP } from '@allianzSND/ui';
export declare class DashboardPerformanceComponent implements OnInit {
    private loginMgr;
    GAP_SIZE_20: CONTENTGAP;
    role: string;
    language: Language;
    tabIndex: number;
    constructor(loginMgr: DefaultLoginMgr);
    ngOnInit(): void;
    private init;
    tabChangeEvent(index: any): void;
    private _ShowRolePage;
    private _ConvertIdentityToRolesType;
}
