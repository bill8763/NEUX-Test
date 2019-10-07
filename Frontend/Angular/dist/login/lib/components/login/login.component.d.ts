import { OnInit, ElementRef } from '@angular/core';
import { DeviceService, AfterLogin, TimeoutService, DefaultLoginMgr, DaoFactory, AppRouter, ValidationResult, DataSyncTask, NotificationMgr, TranslateService } from '@allianzSND/core';
import { Language } from '@allianzSND/core';
import { RouteReuseStrategy } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { LoginForm } from '../../model/LoginForm';
export declare class LoginComponent implements OnInit {
    private loginMgr;
    private deviceService;
    private daoFactory;
    private timeoutService;
    private router;
    private loginService;
    private createDBTask;
    private notificationMgr;
    private translateService;
    private routeReuseStrategy;
    private APP_CONFIG;
    private afterLogin;
    loginForm: LoginForm;
    language: Language;
    version: string;
    isErrorStatusShow: boolean;
    validationResult: ValidationResult;
    private deviceAccount;
    private token;
    private forgotPasswordRegion;
    windowWidth: number;
    private bodyHeight;
    private layoutLeftHeight;
    private layoutRightHeight;
    private notOverHeight;
    private failMax;
    constructor(loginMgr: DefaultLoginMgr, deviceService: DeviceService, daoFactory: DaoFactory, timeoutService: TimeoutService, router: AppRouter, loginService: LoginService, createDBTask: DataSyncTask, notificationMgr: NotificationMgr, translateService: TranslateService, routeReuseStrategy: RouteReuseStrategy, APP_CONFIG: any, afterLogin: AfterLogin);
    layoutLeft: ElementRef;
    layoutRight: ElementRef;
    ngOnInit(): void;
    onResize(event: any): void;
    ngAfterViewInit(): void;
    private _mobileCalcRightHeight;
    ForgetPassword(): void;
    private convertToRegion;
    private getDeviceAccount;
    private saveDeviceAccount;
    login(): Promise<void>;
    private onlineLogin;
    private offlineLogin;
    private _afterLogin;
    private validInfo;
    private clearUserData;
    clearDatabase(): Promise<void>;
    showAllPopup(): void;
}
