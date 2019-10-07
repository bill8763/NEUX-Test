import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { UIModule } from '@allianzSND/ui';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from '@allianzSND/menu';
import {
  InitialService,
  ConfigToken,
  registerAPITaskToken,
  CoreModule,
  fetchLanguageFinishToken,
  registerDataSyncFuncToken,
  NetworkChangeToken,
  LoadingAppToken,
  CustomRouterReuseStrategy,
  timeoutActionToken,
  showRuleToken,
  ErrorsHandler,
  FontSizeAccessToken,
  changeFontSizeToken,
  initialFinishToken,
  TranslatePricePipe,
  customTaskToken,
  NeedGoalSettingMessageActionToken,
  GoalPromoSettingMessageActionToken,
  GoalAutoApproveMessageActionToken,
  ApproveGoalIsRejectMessageActionToken,
  GoalAutoRejectMessageActionToken,
  SupervisorHaveChangeNewMessageActionToken,
  PendingReviewMessageActionToken,
  ActivityArriveTenPointMessageActionToken,
  ActivityArriveTwentyPointMessageActionToken,
  ActivityNotArriveTwentyPointMessageActionToken,
  VersionCheckMessageActionToken,
  DataCollectionMessageActionToken,
  GoalSettingNotStartMessageActionToken,
  ReminderEventsMessageActionToken,
  LanguageAccessToken
} from '@allianzSND/core';
import { APP_CONFIG } from '@app/implements/Core/config/config';
import { environment } from '../environments/environment';
import { syncService } from '@app/implements/Core/dataSync/sync.service';
import { LoginModule } from '@allianzSND/login';
import { configTaskFinish } from '@app/implements/Core/initTask/configTaskFinish';
import { NetworkDetection } from '@app/implements/Core/notification/NetworkDetection';
import { customRegisterAPITask } from '@app/implements/Core/api/customRegisterAPITask';
import { MainComponent } from './components/main/main.component';
import { DashboardModule, showDashboardRuleToken } from '@allianzSND/dashboard';
import { SettingModule } from '@allianzSND/setting';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SettingComponent } from './components/setting/setting.component';
import { GoalSettingComponent } from './components/goal-setting/goal-setting.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { NotificationModule } from '@allianzSND/notification';
import { RouteReuseStrategy } from '@angular/router';
import { customTimeout } from '@app/implements/Core/timeout/customTimeout';
import { commonShowRule } from './implements/Core/common/commonShowRule';
import { ChangeFontSize } from '@app/implements/Core/Setting/changeFontSize';
import { PushIDMgrToken } from '@allianzSND/core';
import { dashboardShowRule } from './implements/Dashboard/dashboardShowRule';
import { IntegrationCalendarCustomerModule, addProgressPointToken, customerShowRuleToken } from '@allianzSND/integration-calendar-customer';
import { FontSizeAccess } from '@app/implements/Core/Setting/FontSizeAccess';
import { GoalUiModule } from '@app/components/goal-ui/goal-ui.module';
import { ProgressUiModule } from '@app/components/progress-ui/progress.module';
import { goalSettingStepToken, goalSettingShowRuleToken } from '@allianzSND/goal';
import { GoalSettingStep } from './implements/Goal/GoalSettingStep';
import { FirebaseMgr } from './implements/Core/firebase/FirebaseMgr';
import { customTask } from './implements/Core/initTask/customTask';
import { GoalSettingAction } from './implements/Core/notification/action/GoalSettingAction';
import { AdjustGoalAction } from './implements/Core/notification/action/AdjustGoalAction';
import { AddProgressOfflinePoint } from './implements/Integration-calendar-customer/AddProgressOfflinePoint';
import { GoToProgressAction } from './implements/Core/notification/action/GoToProgressAction';
import { ShowCustomerRule } from './implements/Integration-calendar-customer/ShowCustomerRule';
import { VersionCheckMessageAction } from './implements/Core/notification/action/VersionCheckMessageAction';
import { GoalSettingShowRule } from './implements/Goal/goalSettingShowRule';
import { AgencyPlanAction } from './implements/Core/notification/action/AgencyPlanAction';
import { DataCollectionMessageAction } from './implements/Core/notification/action/DataCollectionMessageAction';
import { GoalNotStartAction } from './implements/Core/notification/action/GoalNotStartAction';
import { ReminderAction } from './implements/Core/notification/action/ReminderAction';
import { LanguageAccess } from './implements/Core/language/LanguageAccess';


export function initialFactory(initialService: InitialService) {
  return () => initialService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    CustomersComponent,
    CalendarComponent,
    ProgressComponent,
    SettingComponent,
    GoalSettingComponent,
    LoadingComponent,
    CustomerEditComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    UIModule,
    AppRoutingModule,
    MenuModule,
    LoginModule,
    DashboardModule,
    SettingModule,
    IntegrationCalendarCustomerModule,
    NotificationModule,
    GoalUiModule,
    ProgressUiModule

  ],
  providers: [
    //Required Core impl
    { provide: APP_INITIALIZER, useFactory: initialFactory, deps: [InitialService], multi: true },
    { provide: RouteReuseStrategy, useClass: CustomRouterReuseStrategy },
    { provide: ConfigToken, useValue: APP_CONFIG },
    { provide: registerDataSyncFuncToken, useExisting: syncService },
    { provide: ErrorHandler, useClass: ErrorsHandler },
    { provide: PushIDMgrToken, useExisting: FirebaseMgr },
    //Optional Core
    { provide: customTaskToken, useExisting: customTask },
    { provide: registerAPITaskToken, useExisting: customRegisterAPITask },
    { provide: fetchLanguageFinishToken, useExisting: configTaskFinish },
    { provide: NetworkChangeToken, useExisting: NetworkDetection },
    { provide: timeoutActionToken, useExisting: customTimeout },
    { provide: showRuleToken, useExisting: commonShowRule },
    { provide: changeFontSizeToken, useExisting: ChangeFontSize },
    { provide: showDashboardRuleToken, useExisting: dashboardShowRule },
    { provide: FontSizeAccessToken, useExisting: FontSizeAccess },
    { provide: initialFinishToken, useExisting: configTaskFinish },
    { provide: goalSettingStepToken, useExisting: GoalSettingStep },
    { provide: goalSettingShowRuleToken, useExisting: GoalSettingShowRule },
    { provide: LanguageAccessToken, useExisting: LanguageAccess },
    TranslatePricePipe,
    // Notifciation Action
    { provide: GoalSettingNotStartMessageActionToken, useExisting: GoalNotStartAction },
    { provide: NeedGoalSettingMessageActionToken, useExisting: GoalSettingAction },
    { provide: GoalPromoSettingMessageActionToken, useExisting: GoalSettingAction },
    { provide: GoalAutoApproveMessageActionToken, useExisting: AdjustGoalAction },
    { provide: ApproveGoalIsRejectMessageActionToken, useExisting: AdjustGoalAction },
    { provide: GoalAutoRejectMessageActionToken, useExisting: AdjustGoalAction },
    { provide: SupervisorHaveChangeNewMessageActionToken, useExisting: AgencyPlanAction },
    { provide: PendingReviewMessageActionToken, useExisting: AgencyPlanAction },
    { provide: ActivityArriveTenPointMessageActionToken, useExisting: GoToProgressAction },
    { provide: ActivityArriveTwentyPointMessageActionToken, useExisting: GoToProgressAction },
    { provide: ActivityNotArriveTwentyPointMessageActionToken, useExisting: GoToProgressAction },
    { provide: VersionCheckMessageActionToken, useExisting: VersionCheckMessageAction },
    { provide: DataCollectionMessageActionToken, useExisting: DataCollectionMessageAction },
    { provide: ReminderEventsMessageActionToken, useExisting: ReminderAction },
    //interface implemnts
    { provide: addProgressPointToken, useExisting: AddProgressOfflinePoint },
    { provide: customerShowRuleToken, useExisting: ShowCustomerRule }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
