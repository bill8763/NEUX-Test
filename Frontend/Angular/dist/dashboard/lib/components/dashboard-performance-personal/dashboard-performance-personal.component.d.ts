import { OnInit, ErrorHandler } from '@angular/core';
import { DashboardService } from '../../service/dashboard-service.service';
import { Language, AppRouter } from '@allianzSND/core';
import { ProgressService } from '@allianzSND/progress';
export declare class DashboardPerformancePersonalComponent implements OnInit {
    private dashboardService;
    private errorHandler;
    private router;
    private progressService;
    data: any;
    language: Language;
    windowWidth: number;
    ShowCurrentActivityPoints: string;
    ShowCurrentActivityPointsBar: string;
    ShowCurrentMonthlyProgressRate: string;
    ShowCurrentMonthlyProgressBar: string;
    ShowCurrentMonthlyProgress: string;
    ShowCurrentMonthlyTotal: string;
    constructor(dashboardService: DashboardService, errorHandler: ErrorHandler, router: AppRouter, progressService: ProgressService);
    windowSize(): boolean;
    ngOnInit(): void;
    onResize(event: any): void;
    private init;
    private convertToNumber;
    private getActivityCircleBar;
    private getMonthlyPercentage;
    private getMonthlyBarLength;
    private getRate;
    private convertNumberDigital;
    convertNumberThousand(num: number): string;
    goToProgress(): void;
}
