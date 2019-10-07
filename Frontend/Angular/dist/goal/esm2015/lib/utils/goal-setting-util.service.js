/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TranslateService, TIMEBASE, StringUtils } from '@allianzSND/core';
import { GoalTitleListItem } from '../components/goal-ui-title-list/goa-ui-title-list-item';
import { DWM_DATETYPE } from '../service/model/GoalSettingCommon';
import { GoalSettingTranslate } from '../service/model/GoalSettingTranslate';
import { CombineStep5AndAgecyPlanData } from '../service/model/CombineStep5AndAgecyPlanData';
import { GoalSettingStep3ForTabChange } from '../service';
import * as i0 from "@angular/core";
import * as i1 from "@allianzSND/core";
export class GoalSettingUtilService {
    /**
     * @param {?} translateService
     */
    constructor(translateService) {
        this.translateService = translateService;
    }
    /**
     * @param {?} activity
     * @return {?}
     */
    getStep3TabOptionList(activity) {
        /** @type {?} */
        let daily = DWM_DATETYPE.DAILY;
        /** @type {?} */
        let weekly = DWM_DATETYPE.WEEKLY;
        /** @type {?} */
        let monthly = DWM_DATETYPE.MONTHLY;
        /** @type {?} */
        let tabOptionList = [];
        switch (activity) {
            case 'Day':
                tabOptionList = [daily, weekly, monthly];
                break;
            case 'Week':
                tabOptionList = [weekly, monthly];
                break;
            case 'Month':
                tabOptionList = [monthly];
                break;
            default:
                break;
        }
        return tabOptionList;
    }
    /**
     * @param {?} step5Data
     * @param {?} agencyPlanData
     * @return {?}
     */
    transformTeamStep5Data(step5Data, agencyPlanData) {
        /** @type {?} */
        let step5ItemList = [
            new GoalTitleListItem(this.translateService.translate('FYFC_Goal'), step5Data.TeamFYFC),
            new GoalTitleListItem(this.translateService.translate('ANP_Goal'), step5Data.TeamANP),
            new GoalTitleListItem(this.translateService.translate('Manpower_Goal'), step5Data.Manpower),
            new GoalTitleListItem(this.translateService.translate('Recruitment_Goal'), step5Data.Recruitment)
        ];
        /** @type {?} */
        let agencyPlanItemList = [
            new GoalTitleListItem(this.translateService.translate('FYFC_Forecast'), agencyPlanData.FYFCForecast.toString()),
            new GoalTitleListItem(this.translateService.translate('ANP_Forecast'), agencyPlanData.ANPForecast.toString()),
            new GoalTitleListItem(this.translateService.translate('Manpower_Plan'), agencyPlanData.ManpowerPlan.toString()),
            new GoalTitleListItem(this.translateService.translate('Recruitment_Plan'), agencyPlanData.RecruitmentPlan.toString())
        ];
        /** @type {?} */
        let itemTextIsRedList = Array(step5ItemList.length).fill(false).map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        (value, index) => {
            if (isNaN(Number(agencyPlanItemList[index].getDesc()))) {
                return false;
            }
            else {
                return (Number(step5ItemList[index].getDesc()) > Number(agencyPlanItemList[index].getDesc()));
            }
        }));
        return new CombineStep5AndAgecyPlanData(step5ItemList, agencyPlanItemList, itemTextIsRedList);
    }
    /**
     * @param {?} currentType
     * @param {?} goalSettingStep3
     * @return {?}
     */
    getTabChangeStep3(currentType, goalSettingStep3) {
        /** @type {?} */
        let activityValue;
        /** @type {?} */
        let unit;
        if (currentType == DWM_DATETYPE.DAILY) {
            activityValue = goalSettingStep3.ActivityValues.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.TimeBase == TIMEBASE.DAY))[0];
            unit = 'Goal_Setting_Day';
        }
        else if (currentType == DWM_DATETYPE.WEEKLY) {
            activityValue = goalSettingStep3.ActivityValues.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.TimeBase == TIMEBASE.WEEK))[0];
            unit = 'Goal_Setting_Week';
        }
        else if (currentType == DWM_DATETYPE.MONTHLY) {
            activityValue = goalSettingStep3.ActivityValues.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.TimeBase == TIMEBASE.MONTH))[0];
            unit = 'Goal_Setting_Month';
        }
        return new GoalSettingStep3ForTabChange(activityValue, unit);
    }
    /**
     * @param {?} stepData
     * @return {?}
     */
    translateByStepData(stepData) {
        return this.translateByYearConfigAndGoaslStatus(stepData.YearConfig, stepData.GoalStatus);
    }
    /**
     * @param {?} yearConfig
     * @param {?} goalStatus
     * @return {?}
     */
    translateByYearConfigAndGoaslStatus(yearConfig, goalStatus) {
        /** @type {?} */
        let variable = this._getTranslateVariable(yearConfig, goalStatus);
        /** @type {?} */
        let translateOnject = new GoalSettingTranslate();
        translateOnject.TeamGoalEffectiveMonthTitle = this.translateService.translateWithVariable('Goal_Effective_Month', { "effectiveMonthWithUnit": this.translateService.translate('Month_' + goalStatus.TeamGoalApplicableYM) });
        translateOnject.PersonalGoalEffectiveMonthTitle = this.translateService.translateWithVariable('Goal_Effective_Month', variable);
        translateOnject.NowToYearEndTitle = this.translateService.translateWithVariable('Now_To_Year_End', variable);
        translateOnject.FYFCNowToYearEndTitle = this.translateService.translateWithVariable('FYFC_Now_To_Year_End', variable);
        translateOnject.ANPNowToYearEndTitle = this.translateService.translateWithVariable('ANP_Now_To_Year_End', variable);
        if (this._isHasEffectiveMonthAndSettlementMonth(variable.effectiveMonth, variable.settlementMonth)) {
            translateOnject.PersonalFYFCActualVariableTitle = this.translateService.translateWithVariable('FYFC_Actual_Variable', variable);
        }
        else {
            translateOnject.PersonalFYFCActualVariableTitle = this.translateService.translate('FYFC_Actual_Dash');
        }
        if (this._isHasEffectiveMonthAndSettlementMonth(goalStatus.TeamGoalApplicableYM, yearConfig.PerformanceSettlementMonth)) {
            translateOnject.TeamFYFCActualVariableTitle = this.translateService.translateWithVariable('FYFC_Actual_Variable', { "effectiveMonth": goalStatus.TeamGoalApplicableYM, "settlementMonth": yearConfig.PerformanceSettlementMonth });
            translateOnject.TeamANPActualVariableTitle = this.translateService.translateWithVariable('ANP_Actual_Variable', { "effectiveMonth": goalStatus.TeamGoalApplicableYM, "settlementMonth": yearConfig.PerformanceSettlementMonth });
        }
        else {
            translateOnject.TeamFYFCActualVariableTitle = this.translateService.translate('FYFC_Actual_Dash');
            translateOnject.TeamANPActualVariableTitle = this.translateService.translate('ANP_Actual_Dash');
        }
        return translateOnject;
    }
    /**
     * @private
     * @param {?} yearConfig
     * @param {?} goalStatus
     * @return {?}
     */
    _getTranslateVariable(yearConfig, goalStatus) {
        return {
            //Goal_Effective_Month
            "effectiveMonthWithUnit": this.translateService.translate('Month_' + goalStatus.PersonnelGoalApplicableYM),
            //end of Goal_Effective_Month
            //Now_To_Year_End
            "workingMonth": yearConfig.WorkingMonth == 0 ? 1 : yearConfig.WorkingMonth,
            "theLastMonth": yearConfig.MonthQuantityOfYear,
            //end of Now_To_Year_End
            //FYFC_Actual_Variable
            "effectiveMonth": goalStatus.PersonnelGoalApplicableYM,
            "settlementMonth": yearConfig.PerformanceSettlementMonth,
        };
    }
    /**
     * @private
     * @param {?} effectiveMonth
     * @param {?} settlementMonth
     * @return {?}
     */
    _isHasEffectiveMonthAndSettlementMonth(effectiveMonth, settlementMonth) {
        /** @type {?} */
        let _isNotEmpty = StringUtils.isNotEmpty(effectiveMonth) && StringUtils.isNotEmpty(settlementMonth);
        /** @type {?} */
        let _isNumber = !isNaN(Number(effectiveMonth)) && !isNaN(Number(settlementMonth));
        /** @type {?} */
        let _isGreaterThanZero = Number(effectiveMonth) > 0 && Number(settlementMonth) > 0;
        return _isNotEmpty && _isNumber && _isGreaterThanZero;
    }
}
GoalSettingUtilService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GoalSettingUtilService.ctorParameters = () => [
    { type: TranslateService }
];
/** @nocollapse */ GoalSettingUtilService.ngInjectableDef = i0.defineInjectable({ factory: function GoalSettingUtilService_Factory() { return new GoalSettingUtilService(i0.inject(i1.TranslateService)); }, token: GoalSettingUtilService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoalSettingUtilService.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29hbC1zZXR0aW5nLXV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2dvYWwvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ29hbC1zZXR0aW5nLXV0aWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRzVGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUlsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM3RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQU0xRCxNQUFNOzs7O0lBRUosWUFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUU1QyxDQUFDOzs7OztJQUVNLHFCQUFxQixDQUFDLFFBQWdCOztZQUV2QyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUs7O1lBQzFCLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTTs7WUFDNUIsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPOztZQUM5QixhQUFhLEdBQUcsRUFBRTtRQUN0QixRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLEtBQUs7Z0JBQ1IsYUFBYSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDUixL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QUksU0FBUyxJQUFJLGtCQUFrQixDQUFDO0lBQ3hELENBQUM7OztZQW5KRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWpCUSxnQkFBZ0I7Ozs7Ozs7O0lBcUJyQixrREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBUSU1FQkFTRSwgU3RyaW5nVXRpbHMgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IEdvYWxTZXR0aW5nU3RlcDUgfSBmcm9tICcuLi9zZXJ2aWNlL21vZGVsL0dvYWxTZXR0aW5nU3RlcDUnO1xuaW1wb3J0IHsgQWdlbmN5UGxhbkRhdGFGb3JPdmVydmlldyB9IGZyb20gJy4uL3NlcnZpY2UvbW9kZWwvQWdlbmN5UGxhbkRhdGFGb3JPdmVydmlldyc7XG5pbXBvcnQgeyBHb2FsVGl0bGVMaXN0SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ29hbC11aS10aXRsZS1saXN0L2dvYS11aS10aXRsZS1saXN0LWl0ZW0nO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwMyB9IGZyb20gJy4uL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdTdGVwMyc7XG5pbXBvcnQgeyBBY3Rpdml0eVZhbHVlIH0gZnJvbSAnLi4vc2VydmljZS9tb2RlbC9BY3Rpdml0eVZhbHVlJztcbmltcG9ydCB7IERXTV9EQVRFVFlQRSB9IGZyb20gJy4uL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdDb21tb24nO1xuaW1wb3J0IHsgR29hbFNldHRpbmdTdGVwRGF0YSB9IGZyb20gJy4uL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdTdGVwRGF0YSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1llYXJDb25maWcgfSBmcm9tICcuLi9zZXJ2aWNlL21vZGVsL0dvYWxTZXR0aW5nWWVhckNvbmZpZyc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ0dvYWxTdGF0dXMgfSBmcm9tICcuLi9zZXJ2aWNlL21vZGVsL0dvYWxTZXR0aW5nR29hbFN0YXR1cyc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1RyYW5zbGF0ZSB9IGZyb20gJy4uL3NlcnZpY2UvbW9kZWwvR29hbFNldHRpbmdUcmFuc2xhdGUnO1xuaW1wb3J0IHsgQ29tYmluZVN0ZXA1QW5kQWdlY3lQbGFuRGF0YSB9IGZyb20gJy4uL3NlcnZpY2UvbW9kZWwvQ29tYmluZVN0ZXA1QW5kQWdlY3lQbGFuRGF0YSc7XG5pbXBvcnQgeyBHb2FsU2V0dGluZ1N0ZXAzRm9yVGFiQ2hhbmdlIH0gZnJvbSAnLi4vc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29hbFNldHRpbmdVdGlsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgcHVibGljIGdldFN0ZXAzVGFiT3B0aW9uTGlzdChhY3Rpdml0eTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG5cbiAgICBsZXQgZGFpbHkgPSBEV01fREFURVRZUEUuREFJTFk7XG4gICAgbGV0IHdlZWtseSA9IERXTV9EQVRFVFlQRS5XRUVLTFk7XG4gICAgbGV0IG1vbnRobHkgPSBEV01fREFURVRZUEUuTU9OVEhMWTtcbiAgICBsZXQgdGFiT3B0aW9uTGlzdCA9IFtdO1xuICAgIHN3aXRjaCAoYWN0aXZpdHkpIHtcbiAgICAgIGNhc2UgJ0RheSc6XG4gICAgICAgIHRhYk9wdGlvbkxpc3QgPSBbZGFpbHksIHdlZWtseSwgbW9udGhseV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnV2Vlayc6XG4gICAgICAgIHRhYk9wdGlvbkxpc3QgPSBbd2Vla2x5LCBtb250aGx5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdNb250aCc6XG4gICAgICAgIHRhYk9wdGlvbkxpc3QgPSBbbW9udGhseV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9wdGlvbkxpc3Q7XG4gIH1cblxuXG4gIHB1YmxpYyB0cmFuc2Zvcm1UZWFtU3RlcDVEYXRhKHN0ZXA1RGF0YTogR29hbFNldHRpbmdTdGVwNSwgYWdlbmN5UGxhbkRhdGE6IEFnZW5jeVBsYW5EYXRhRm9yT3ZlcnZpZXcpOiBDb21iaW5lU3RlcDVBbmRBZ2VjeVBsYW5EYXRhIHtcblxuICAgIGxldCBzdGVwNUl0ZW1MaXN0ID0gW1xuICAgICAgbmV3IEdvYWxUaXRsZUxpc3RJdGVtKHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoJ0ZZRkNfR29hbCcpLCBzdGVwNURhdGEuVGVhbUZZRkMpLFxuICAgICAgbmV3IEdvYWxUaXRsZUxpc3RJdGVtKHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoJ0FOUF9Hb2FsJyksIHN0ZXA1RGF0YS5UZWFtQU5QKSxcbiAgICAgIG5ldyBHb2FsVGl0bGVMaXN0SXRlbSh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdNYW5wb3dlcl9Hb2FsJyksIHN0ZXA1RGF0YS5NYW5wb3dlciksXG4gICAgICBuZXcgR29hbFRpdGxlTGlzdEl0ZW0odGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnUmVjcnVpdG1lbnRfR29hbCcpLCBzdGVwNURhdGEuUmVjcnVpdG1lbnQpXG4gICAgXTtcblxuICAgIGxldCBhZ2VuY3lQbGFuSXRlbUxpc3QgPSBbXG4gICAgICBuZXcgR29hbFRpdGxlTGlzdEl0ZW0odGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnRllGQ19Gb3JlY2FzdCcpLCBhZ2VuY3lQbGFuRGF0YS5GWUZDRm9yZWNhc3QudG9TdHJpbmcoKSksXG4gICAgICBuZXcgR29hbFRpdGxlTGlzdEl0ZW0odGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnQU5QX0ZvcmVjYXN0JyksIGFnZW5jeVBsYW5EYXRhLkFOUEZvcmVjYXN0LnRvU3RyaW5nKCkpLFxuICAgICAgbmV3IEdvYWxUaXRsZUxpc3RJdGVtKHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoJ01hbnBvd2VyX1BsYW4nKSwgYWdlbmN5UGxhbkRhdGEuTWFucG93ZXJQbGFuLnRvU3RyaW5nKCkpLFxuICAgICAgbmV3IEdvYWxUaXRsZUxpc3RJdGVtKHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGUoJ1JlY3J1aXRtZW50X1BsYW4nKSwgYWdlbmN5UGxhbkRhdGEuUmVjcnVpdG1lbnRQbGFuLnRvU3RyaW5nKCkpXG4gICAgXTtcblxuICAgIGxldCBpdGVtVGV4dElzUmVkTGlzdCA9IEFycmF5KHN0ZXA1SXRlbUxpc3QubGVuZ3RoKS5maWxsKGZhbHNlKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgaWYoaXNOYU4oTnVtYmVyKGFnZW5jeVBsYW5JdGVtTGlzdFtpbmRleF0uZ2V0RGVzYygpKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoTnVtYmVyKHN0ZXA1SXRlbUxpc3RbaW5kZXhdLmdldERlc2MoKSkgPiBOdW1iZXIoYWdlbmN5UGxhbkl0ZW1MaXN0W2luZGV4XS5nZXREZXNjKCkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbmV3IENvbWJpbmVTdGVwNUFuZEFnZWN5UGxhbkRhdGEoc3RlcDVJdGVtTGlzdCwgYWdlbmN5UGxhbkl0ZW1MaXN0LCBpdGVtVGV4dElzUmVkTGlzdCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGFiQ2hhbmdlU3RlcDMoY3VycmVudFR5cGU6IHN0cmluZywgZ29hbFNldHRpbmdTdGVwMzogR29hbFNldHRpbmdTdGVwMyk6IEdvYWxTZXR0aW5nU3RlcDNGb3JUYWJDaGFuZ2Uge1xuXG4gICAgbGV0IGFjdGl2aXR5VmFsdWU6IEFjdGl2aXR5VmFsdWU7XG4gICAgbGV0IHVuaXQ6IHN0cmluZztcblxuICAgIGlmIChjdXJyZW50VHlwZSA9PSBEV01fREFURVRZUEUuREFJTFkpIHtcbiAgICAgIGFjdGl2aXR5VmFsdWUgPSBnb2FsU2V0dGluZ1N0ZXAzLkFjdGl2aXR5VmFsdWVzLmZpbHRlcih4ID0+IHguVGltZUJhc2UgPT0gVElNRUJBU0UuREFZKVswXTtcbiAgICAgIHVuaXQgPSAnR29hbF9TZXR0aW5nX0RheSc7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gRFdNX0RBVEVUWVBFLldFRUtMWSkge1xuICAgICAgYWN0aXZpdHlWYWx1ZSA9IGdvYWxTZXR0aW5nU3RlcDMuQWN0aXZpdHlWYWx1ZXMuZmlsdGVyKHggPT4geC5UaW1lQmFzZSA9PSBUSU1FQkFTRS5XRUVLKVswXTtcbiAgICAgIHVuaXQgPSAnR29hbF9TZXR0aW5nX1dlZWsnO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IERXTV9EQVRFVFlQRS5NT05USExZKSB7XG4gICAgICBhY3Rpdml0eVZhbHVlID0gZ29hbFNldHRpbmdTdGVwMy5BY3Rpdml0eVZhbHVlcy5maWx0ZXIoeCA9PiB4LlRpbWVCYXNlID09IFRJTUVCQVNFLk1PTlRIKVswXTtcbiAgICAgIHVuaXQgPSAnR29hbF9TZXR0aW5nX01vbnRoJztcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4gbmV3IEdvYWxTZXR0aW5nU3RlcDNGb3JUYWJDaGFuZ2UoYWN0aXZpdHlWYWx1ZSwgdW5pdCk7XG4gIH1cblxuXG5cblxuICBwdWJsaWMgdHJhbnNsYXRlQnlTdGVwRGF0YShzdGVwRGF0YTogR29hbFNldHRpbmdTdGVwRGF0YSkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZUJ5WWVhckNvbmZpZ0FuZEdvYXNsU3RhdHVzKHN0ZXBEYXRhLlllYXJDb25maWcsIHN0ZXBEYXRhLkdvYWxTdGF0dXMpO1xuICB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZUJ5WWVhckNvbmZpZ0FuZEdvYXNsU3RhdHVzKHllYXJDb25maWc6IEdvYWxTZXR0aW5nWWVhckNvbmZpZywgZ29hbFN0YXR1czogR29hbFNldHRpbmdHb2FsU3RhdHVzKTogR29hbFNldHRpbmdUcmFuc2xhdGUge1xuICAgIGxldCB2YXJpYWJsZSA9IHRoaXMuX2dldFRyYW5zbGF0ZVZhcmlhYmxlKHllYXJDb25maWcsIGdvYWxTdGF0dXMpO1xuICAgIGxldCB0cmFuc2xhdGVPbmplY3QgPSBuZXcgR29hbFNldHRpbmdUcmFuc2xhdGUoKTtcbiAgICB0cmFuc2xhdGVPbmplY3QuVGVhbUdvYWxFZmZlY3RpdmVNb250aFRpdGxlID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnR29hbF9FZmZlY3RpdmVfTW9udGgnLCB7IFwiZWZmZWN0aXZlTW9udGhXaXRoVW5pdFwiOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdNb250aF8nICsgZ29hbFN0YXR1cy5UZWFtR29hbEFwcGxpY2FibGVZTSkgfSk7XG4gICAgdHJhbnNsYXRlT25qZWN0LlBlcnNvbmFsR29hbEVmZmVjdGl2ZU1vbnRoVGl0bGUgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdHb2FsX0VmZmVjdGl2ZV9Nb250aCcsIHZhcmlhYmxlKTtcbiAgICB0cmFuc2xhdGVPbmplY3QuTm93VG9ZZWFyRW5kVGl0bGUgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdOb3dfVG9fWWVhcl9FbmQnLCB2YXJpYWJsZSk7XG4gICAgdHJhbnNsYXRlT25qZWN0LkZZRkNOb3dUb1llYXJFbmRUaXRsZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0ZZRkNfTm93X1RvX1llYXJfRW5kJywgdmFyaWFibGUpO1xuICAgIHRyYW5zbGF0ZU9uamVjdC5BTlBOb3dUb1llYXJFbmRUaXRsZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0FOUF9Ob3dfVG9fWWVhcl9FbmQnLCB2YXJpYWJsZSk7XG5cbiAgICBpZih0aGlzLl9pc0hhc0VmZmVjdGl2ZU1vbnRoQW5kU2V0dGxlbWVudE1vbnRoKHZhcmlhYmxlLmVmZmVjdGl2ZU1vbnRoLCB2YXJpYWJsZS5zZXR0bGVtZW50TW9udGgpKSB7XG4gICAgICB0cmFuc2xhdGVPbmplY3QuUGVyc29uYWxGWUZDQWN0dWFsVmFyaWFibGVUaXRsZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS50cmFuc2xhdGVXaXRoVmFyaWFibGUoJ0ZZRkNfQWN0dWFsX1ZhcmlhYmxlJywgdmFyaWFibGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRyYW5zbGF0ZU9uamVjdC5QZXJzb25hbEZZRkNBY3R1YWxWYXJpYWJsZVRpdGxlID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnRllGQ19BY3R1YWxfRGFzaCcpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX2lzSGFzRWZmZWN0aXZlTW9udGhBbmRTZXR0bGVtZW50TW9udGgoZ29hbFN0YXR1cy5UZWFtR29hbEFwcGxpY2FibGVZTSwgeWVhckNvbmZpZy5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCkpIHtcbiAgICAgIHRyYW5zbGF0ZU9uamVjdC5UZWFtRllGQ0FjdHVhbFZhcmlhYmxlVGl0bGUgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlV2l0aFZhcmlhYmxlKCdGWUZDX0FjdHVhbF9WYXJpYWJsZScsIHsgXCJlZmZlY3RpdmVNb250aFwiOiBnb2FsU3RhdHVzLlRlYW1Hb2FsQXBwbGljYWJsZVlNLCBcInNldHRsZW1lbnRNb250aFwiOiB5ZWFyQ29uZmlnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoIH0pO1xuICAgICAgdHJhbnNsYXRlT25qZWN0LlRlYW1BTlBBY3R1YWxWYXJpYWJsZVRpdGxlID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZVdpdGhWYXJpYWJsZSgnQU5QX0FjdHVhbF9WYXJpYWJsZScsIHsgXCJlZmZlY3RpdmVNb250aFwiOiBnb2FsU3RhdHVzLlRlYW1Hb2FsQXBwbGljYWJsZVlNLCBcInNldHRsZW1lbnRNb250aFwiOiB5ZWFyQ29uZmlnLlBlcmZvcm1hbmNlU2V0dGxlbWVudE1vbnRoIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRyYW5zbGF0ZU9uamVjdC5UZWFtRllGQ0FjdHVhbFZhcmlhYmxlVGl0bGUgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdGWUZDX0FjdHVhbF9EYXNoJyk7XG4gICAgICB0cmFuc2xhdGVPbmplY3QuVGVhbUFOUEFjdHVhbFZhcmlhYmxlVGl0bGUgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudHJhbnNsYXRlKCdBTlBfQWN0dWFsX0Rhc2gnKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB0cmFuc2xhdGVPbmplY3Q7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmFuc2xhdGVWYXJpYWJsZSh5ZWFyQ29uZmlnOiBHb2FsU2V0dGluZ1llYXJDb25maWcsIGdvYWxTdGF0dXM6IEdvYWxTZXR0aW5nR29hbFN0YXR1cykge1xuICAgIHJldHVybiB7XG4gICAgICAvL0dvYWxfRWZmZWN0aXZlX01vbnRoXG4gICAgICBcImVmZmVjdGl2ZU1vbnRoV2l0aFVuaXRcIjogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnRyYW5zbGF0ZSgnTW9udGhfJyArIGdvYWxTdGF0dXMuUGVyc29ubmVsR29hbEFwcGxpY2FibGVZTSksXG4gICAgICAvL2VuZCBvZiBHb2FsX0VmZmVjdGl2ZV9Nb250aFxuXG4gICAgICAvL05vd19Ub19ZZWFyX0VuZFxuICAgICAgXG4gICAgICBcIndvcmtpbmdNb250aFwiOiB5ZWFyQ29uZmlnLldvcmtpbmdNb250aCA9PSAwID8gMSA6IHllYXJDb25maWcuV29ya2luZ01vbnRoLFxuICAgICAgXCJ0aGVMYXN0TW9udGhcIjogeWVhckNvbmZpZy5Nb250aFF1YW50aXR5T2ZZZWFyLFxuICAgICAgLy9lbmQgb2YgTm93X1RvX1llYXJfRW5kXG5cbiAgICAgIC8vRllGQ19BY3R1YWxfVmFyaWFibGVcbiAgICAgIFwiZWZmZWN0aXZlTW9udGhcIjogZ29hbFN0YXR1cy5QZXJzb25uZWxHb2FsQXBwbGljYWJsZVlNLFxuICAgICAgXCJzZXR0bGVtZW50TW9udGhcIjogeWVhckNvbmZpZy5QZXJmb3JtYW5jZVNldHRsZW1lbnRNb250aCxcbiAgICAgIC8vZW5kIG9mICBGWUZDX0FjdHVhbF9WYXJpYWJsZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzSGFzRWZmZWN0aXZlTW9udGhBbmRTZXR0bGVtZW50TW9udGgoZWZmZWN0aXZlTW9udGg6IG51bWJlciwgc2V0dGxlbWVudE1vbnRoOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgX2lzTm90RW1wdHkgPSBTdHJpbmdVdGlscy5pc05vdEVtcHR5KGVmZmVjdGl2ZU1vbnRoKSAmJiBTdHJpbmdVdGlscy5pc05vdEVtcHR5KHNldHRsZW1lbnRNb250aCk7XG4gICAgbGV0IF9pc051bWJlciA9ICFpc05hTihOdW1iZXIoZWZmZWN0aXZlTW9udGgpKSAmJiAhaXNOYU4oTnVtYmVyKHNldHRsZW1lbnRNb250aCkpO1xuICAgIGxldCBfaXNHcmVhdGVyVGhhblplcm8gPSBOdW1iZXIoZWZmZWN0aXZlTW9udGgpID4gMCAmJiBOdW1iZXIoc2V0dGxlbWVudE1vbnRoKSA+IDA7XG5cbiAgICByZXR1cm4gX2lzTm90RW1wdHkgJiYgX2lzTnVtYmVyICYmIF9pc0dyZWF0ZXJUaGFuWmVybztcbiAgfVxufVxuIl19