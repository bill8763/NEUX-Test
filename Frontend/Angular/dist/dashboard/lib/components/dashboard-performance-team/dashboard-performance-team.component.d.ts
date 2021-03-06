import { OnInit, ErrorHandler } from '@angular/core';
import { Language, DefaultLoginMgr, AppRouter } from '@allianzSND/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { ProgressService } from '@allianzSND/progress';
export declare class DashboardPerformanceTeamComponent implements OnInit {
    private dashboardService;
    private loginMgr;
    private errorHandler;
    private router;
    private progressService;
    dashboardPerformanceTeam: Array<Object>;
    data: any;
    isLoadDataFinish: boolean;
    language: Language;
    windowWidth: number;
    private _monthlyProgressRate;
    timeBaseTitle: string;
    userRole: string;
    ShowMonthlyProgressRateArr: Array<string>;
    ShowMonthlyProgressRateBarArr: Array<string>;
    constructor(dashboardService: DashboardService, loginMgr: DefaultLoginMgr, errorHandler: ErrorHandler, router: AppRouter, progressService: ProgressService);
    ngOnInit(): void;
    private init;
    private getRate;
    private getPercentage;
    private getPercentageBar;
    private convertToNumber;
    private getMonthlyBarLength;
    private convertNumberDigital;
    convertNumberThousand(num: number): string;
    goToProgress(): void;
}
