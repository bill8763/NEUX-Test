import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouterGuard } from "@app/implements/Core/routerGuard/router-guard.service";
import { MainComponent } from "@app/components/main/main.component";
import { UiComponent } from "@allianzSND/ui";
import { NotificationComponent } from "@allianzSND/notification";
import { LoginComponent } from "@app/components/login/login.component";
import { DashboardComponent } from "@app/components/dashboard/dashboard.component";
import { CustomersComponent } from "@app/components/customers/customers.component";
import { CalendarComponent } from "@app/components/calendar/calendar.component";
import { ProgressComponent } from "@app/components/progress/progress.component";
import { SettingComponent } from "@app/components/setting/setting.component";
import { GoalSettingComponent } from "@app/components/goal-setting/goal-setting.component";
import { LoadingComponent } from "@app/components/loading/loading.component";
import { CustomerEditComponent } from "@app/components/customer-edit/customer-edit.component";
import { GoalSettingStepComponent } from "@app/components/goal-ui/component/goal-setting-step/goal-setting-step.component";
import { GoalAgencyPlanComponent } from "@app/components/goal-ui/component/goal-agency-plan/goal-agency-plan.component";
import { ProgressInnerComponent } from "@app/components/progress-ui/components";
import { SqliteExecutorComponent } from "@allianzSND/core";
import { GoalLandingComponent } from "./components/goal-ui/component/goal-landing/goal-landing.component";
import { GoalAgencyDrillDownComponent } from "./components/goal-ui/component/goal-agency-drill-down/goal-agency-drill-down.component";
const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'home',
                canActivateChild: [RouterGuard],
                data: { func: 'dashboard' },
                children: [{
                    path: '',
                    component: DashboardComponent
                }]
            },
            {
                path: 'customers',
                canActivateChild: [RouterGuard],
                data: { func: 'customers' },
                children: [{
                    path: '',
                    component: CustomersComponent
                }]
            },
            {
                path: 'calendar',
                canActivateChild: [RouterGuard],
                data: { func: 'calendar' },
                children: [{
                    path: '',
                    component: CalendarComponent
                }]
            },
            {
                path: 'progress',
                canActivateChild: [RouterGuard],
                data: { func: 'progress' },
                children: [{
                    path: '',
                    component: ProgressComponent,
                    data: {
                        cache: false
                    }
                }]
            },
            {
                path: 'setting',
                canActivateChild: [RouterGuard],
                data: { func: 'setting' },
                children: [{
                    path: '',
                    component: SettingComponent
                }]
            },
            {
                path: 'goal',
                canActivateChild: [RouterGuard],
                data: { func: 'goal' },
                children: [{
                    path: '',
                    component: GoalSettingComponent,
                    data: {
                        cache: false
                    }
                }]
            }
        ]
    },
    {
        path: 'customers',
        children: [
            {
                path: 'editProfile',
                component: CustomerEditComponent,
                data: {
                    cache: false
                }
            }
        ]
    },
    {
        path: 'goal',
        children: [
            {
                path: 'landing',  // goal landing
                component: GoalLandingComponent,
                data: {
                    cache: false
                }
            }, {
                path: 'setting', // goal step setting page
                component: GoalSettingStepComponent,
                data: {
                    cache: false
                }
            }, {
                path: 'agencyPlan/:dataYear', // goal inner page agency plan
                component: GoalAgencyPlanComponent,
                data: {
                    cache: false
                }
            },
            {
                path: 'commitment',
                component: GoalAgencyDrillDownComponent,
                data: {
                    cache: false
                }
            },
            {
                path: 'main',  // temp for 切版
                component: GoalSettingComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'loading',
        component: LoadingComponent
    },
    {
        path: 'ui',
        component: UiComponent,
    },
    {
        path: 'progress/inner',  // progress inner page
        component: ProgressInnerComponent,
    },
    {
        path: 'sqliteExecutor',
        component: SqliteExecutorComponent,
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:'notification',  // tmp for ui
        component: NotificationComponent
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
