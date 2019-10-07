import { ErrorHandler } from '@angular/core';
import { APIDispatch, APIFactory, PageInfo, DateUtils, showRule } from '@allianzSND/core';
import { Observable } from 'rxjs';
import { showDashboardRule } from '../interface';
export declare class DashboardService {
    private dispatcher;
    private APIFactory;
    private dateUtils;
    private errorHandler;
    private showRule;
    private showDashboardRule;
    private isFirstInDashboard;
    constructor(dispatcher: APIDispatch, APIFactory: APIFactory, dateUtils: DateUtils, errorHandler: ErrorHandler, showRule: showRule, showDashboardRule: showDashboardRule);
    isFirstTime(): boolean;
    updateMessageStatus(clientID: string, status: string): Observable<any>;
    getMessageByKeyword(keyword: string, pageInfo: PageInfo): Observable<any>;
    convertDate(date: Date): string;
    convertTime(date: Date): string;
    getPerformanceData(performanceType: string, appUseMode?: string): Observable<any>;
    private _getPerformanceTeamData;
    private _getPerformancePersonalData;
    getUserLevel(): string;
    changeMessageStatus(messageID: number, col: string, val: string): any;
}
