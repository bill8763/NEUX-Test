/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CountoModule } from 'angular2-counto';
import { NxIconModule } from '@allianz/ngx-ndbx/icon'; //allianz icon library
//allianz icon library
import { NxPopoverModule } from '@allianz/ngx-ndbx'; // allizna popover
// allizna popover
import { NxButtonModule } from '@allianz/ngx-ndbx'; // allianz 按鈕
// allianz 按鈕
import { NxCheckboxModule } from '@allianz/ngx-ndbx'; // allianz checkbox
// allianz checkbox
import { NxProgressStepperModule } from '@allianz/ngx-ndbx/progress-stepper'; //步驟條
//步驟條
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield'; // allianz select
// allianz select
import { NxDropdownModule } from '@allianz/ngx-ndbx'; // allianz select
// allianz select
import { NxRadioModule } from '@allianz/ngx-ndbx'; // allianz radio btn
// allianz radio btn
import { NxInputModule } from '@allianz/ngx-ndbx/input'; // 輸入框
// 輸入框
import { NxMessageModule } from '@allianz/ngx-ndbx'; // allianz message
// allianz message
import { NxDatefieldModule } from '@allianz/ngx-ndbx/datefield'; // allianz date
// allianz date
import { NxNativeDateModule } from '@allianz/ngx-ndbx/datefield'; //allianz datetime
//allianz datetime
import { NxProgressbarModule } from '@allianz/ngx-ndbx/progressbar'; // allianz progress
// allianz progress
import { NxModalModule } from '@allianz/ngx-ndbx'; // allianz popup modal
// allianz popup modal
import { NxAccordionModule } from '@allianz/ngx-ndbx'; //allianz accordion
//allianz accordion
import { NxSwitcherModule } from '@allianz/ngx-ndbx'; // allianz switcher
// allianz switcher
import { NxGridModule } from '@allianz/ngx-ndbx/grid';
import { IonicModule } from '@ionic/angular';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CoreModule, NumberFormatPipe } from '@allianzSND/core';
// swipe plugin
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// end swipe plugin
import { UiComponent } from './ui/ui.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// layout
import { UIMainLeftComponent } from './layout/ui-main-left/ui-main-left.component';
import { UIMainSideMenuComponent } from './layout/ui-main-side-menu/ui-main-side-menu.component';
import { UiMainCollapseComponent } from './layout/ui-main-collapse/ui-main-collapse.component';
import { UiMainFullComponent } from './layout/ui-main-full/ui-main-full.component';
import { UIInnerPageComponent } from './layout/ui-inner-page/ui-inner-page.component';
import { UiInnerStepComponent } from './layout/ui-inner-step/ui-inner-step.component';
import { UiInnerFullComponent } from './layout/ui-inner-full/ui-inner-full.component';
//
import { UiModalConfirmComponent } from './components/ui-modal-confirm/ui-modal-confirm.component';
import { UiModalMsgComponent } from './components/ui-modal-msg/ui-modal-msg.component';
import { UiBtnComponent } from './components/ui-btn/ui-btn.component';
import { UiBtnLikeAddComponent } from './components/ui-btn-like-add/ui-btn-like-add.component';
import { UiBtnLayoutComponent } from './components/ui-btn-layout/ui-btn-layout.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UiCalendarYearComponent } from './components/calendar/ui-calendar-year/ui-calendar-year.component';
import { UiCalendarYearMonthComponent } from './components/calendar/ui-calendar-year-month/ui-calendar-year-month.component';
import { UiCalendarMonthComponent } from './components/calendar/ui-calendar-month/ui-calendar-month.component';
import { UiCalendarEventListComponent } from './components/ui-calendar-event-list/ui-calendar-event-list.component';
import { UiCalendarMonthCollapseComponent } from './components/calendar/ui-calendar-month-collapse/ui-calendar-month-collapse.component';
import { UiCardStyleTag1Component } from './components/ui-card-style-tag1/ui-card-style-tag1.component';
import { UiCardContentBtnComponent } from './components/ui-card-content-btn/ui-card-content-btn.component';
import { UiCollapseText1Component } from './components/ui-collapse-text1/ui-collapse-text1.component';
import { UiCollapseCard1Component } from './components/ui-collapse-card1/ui-collapse-card1.component';
import { UiCollapseGroupComponent } from './components/ui-collapse-group/ui-collapse-group.component';
import { UiCollapseContentShowComponent } from './components/ui-collapse-content-show/ui-collapse-content-show.component';
import { UiCollapseContentDetailComponent } from './components/ui-collapse-content-detail/ui-collapse-content-detail.component';
import { UiContentBGapComponent } from './components/ui-content-b-gap/ui-content-b-gap.component';
import { UiDataGroupComponent } from './components/ui-data-group/ui-data-group.component';
import { UiDetectionScrollComponent } from './components/ui-detection-scroll/ui-detection-scroll.component';
import { UiEmptyDefaultComponent } from './components/ui-empty-default/ui-empty-default.component';
import { UiFormTextareaComponent } from './components/ui-form-textarea/ui-form-textarea.component';
import { UiFormRadio2Component } from './components/ui-form-radio2/ui-form-radio2.component';
import { UiFormRadioGroup } from './components/ui-form-radio-group/ui-form-radio-group.directive';
import { UiFormSwitcherComponent } from './components/ui-form-switcher/ui-form-switcher.component';
import { UiFormTimepickerComponent } from './components/ui-form-timepicker/ui-form-timepicker.component';
import { UiFormErrorMsgInfoComponent } from './components/ui-form-error-msg-info/ui-form-error-msg-info.component';
import { UiFormErrorMsgTitleComponent } from './components/ui-form-error-msg-title/ui-form-error-msg-title.component';
import { UiFormErrorMsgListComponent } from './components/ui-form-error-msg-list/ui-form-error-msg-list.component';
import { UiFormCheckbox3Component } from './components/ui-form-checkbox3/ui-form-checkbox3.component';
import { UiFormSearchComponent } from './components/ui-form-search/ui-form-search.component';
import { UiFormLayoutRowComponent } from './components/ui-form-layout-row/ui-form-layout-row.component';
import { UiFormLayoutColComponent } from './components/ui-form-layout-col/ui-form-layout-col.component';
import { UiFormLayoutAdvancedComponent } from './components/ui-form-layout-advanced/ui-form-layout-advanced.component';
import { UiFormRadioTagComponent } from './components/ui-form-radio-tag/ui-form-radio-tag.component';
import { UiFormCheckbox2Component } from './components/ui-form-checkbox2/ui-form-checkbox2.component';
import { UiFormTitleSmComponent } from './components/ui-form-title-sm/ui-form-title-sm.component';
import { UiFormRadioComponent } from './components/ui-form-radio/ui-form-radio.component';
import { UiFormInputComponent } from './components/ui-form-input/ui-form-input.component';
import { UiFormErrorMsgComponent } from './components/ui-form-error-msg/ui-form-error-msg.component';
import { UiFormDateComponent } from './components/ui-form-date/ui-form-date.component';
import { UiFormCheckboxComponent } from './components/ui-form-checkbox/ui-form-checkbox.component';
import { UiFormSelectComponent } from './components/ui-form-select/ui-form-select.component';
import { UiInformationComponent } from './components/ui-information/ui-information.component';
import { UiInformationBtnComponent } from './components/ui-information-btn/ui-information-btn.component';
import { UiInformationContentComponent } from './components/ui-information-content/ui-information-content.component';
import { UiInfoText1Component } from './components/ui-info-text1/ui-info-text1.component';
import { UiInfoText2Component } from './components/ui-info-text2/ui-info-text2.component';
import { UiInfiniteScrollComponent } from './components/ui-infinite-scroll/ui-infinite-scroll.component';
import { UiItemSlidingComponent } from './components/ui-item-sliding/ui-item-sliding.component';
import { UiItemOptionsComponent } from './components/ui-item-sliding/ui-item-options.component';
import { UiItemOptionComponent } from './components/ui-item-sliding/ui-item-option.component';
import { UiItemComponent } from './components/ui-item-sliding/ui-item.component';
import { UiLinkComponent } from './components/ui-link/ui-link.component';
import { UiLinkBgComponent } from './components/ui-link-bg/ui-link-bg.component';
import { UiListData2Component } from './components/ui-list-data2/ui-list-data2.component';
import { UiLoadingBoxComponent } from './components/ui-loading-box/ui-loading-box.component';
import { UiModalStyleImgBaseComponent } from './components/ui-modal-style-img-base/ui-modal-style-img-base.component';
import { UiModalStyleText1Component } from './components/ui-modal-style-text1/ui-modal-style-text1.component';
import { UiModalStyleCustComponent } from './components/ui-modal-style-cust/ui-modal-style-cust.component';
import { UiModalBaseComponent } from './components/ui-modal-base/ui-modal-base.component';
import { UiModalStyleFeedbackComponent } from './components/ui-modal-style-feedback/ui-modal-style-feedback.component';
import { UiModalStyleMenuComponent } from './components/ui-modal-style-menu/ui-modal-style-menu.component';
import { UiProgressComponent } from './components/ui-progress/ui-progress.component';
import { UiProgressStepperStyleComponent } from './components/ui-progress-stepper-style/ui-progress-stepper-style.component';
import { UiProgressStepperStyleChildComponent } from './components/ui-progress-stepper-style-child/ui-progress-stepper-style-child.component';
import { UiProgressCircleComponent } from './components/ui-progress-circle/ui-progress-circle.component';
import { UiRefreshIconComponent } from './components/ui-refresh-icon/ui-refresh-icon.component';
import { UiSwitchContentComponent } from './components/ui-switch-content/ui-switch-content.component';
import { UiTabStyle1Component } from './components/ui-tab-style1/ui-tab-style1.component';
import { UiTabStyle2Component } from './components/ui-tab-style2/ui-tab-style2.component';
import { UiTabChildComponent } from './components/ui-tab-child/ui-tab-child.component';
import { UiTabMoreComponent } from './components/ui-tab-more/ui-tab-more.component';
import { UiTabPageComponent } from './components/ui-tab-page/ui-tab-page.component';
import { UiTableContentComponent } from './components/ui-table-content/ui-table-content.component';
import { UiTableRowComponent } from './components/ui-table-row/ui-table-row.component';
import { UiTableRowHeadComponent } from './components/ui-table-row-head/ui-table-row-head.component';
import { UiTableItemComponent } from './components/ui-table-item/ui-table-item.component';
import { UiTableCardComponent } from './components/ui-table-card/ui-table-card.component';
import { UiTableListComponent } from './components/ui-table-list/ui-table-list.component';
import { ListItemComponent } from './components/ui-table-list/list-item/list-item.component';
import { UiTableTitleComponent } from './components/ui-table-title/ui-table-title.component';
import { UiCollapseContentComponent } from './components/ui-table-collapse-content/ui-table-collapse-content.component';
import { UiTableEditContentComponent } from './components/ui-table-edit-content/ui-table-edit-content.component';
import { UiTableList2Component } from './components/ui-table-list2/ui-table-list2.component';
import { UiTableContent2Component } from './components/ui-table-content2/ui-table-content2.component';
import { UiTableTextGroupComponent } from './components/ui-table-text-group/ui-table-text-group.component';
import { UiTableControlBarComponent } from './components/ui-table-control-bar/ui-table-control-bar.component';
import { UiTeamTitleTextComponent } from './components/ui-team-title-text/ui-team-title-text.component';
import { UiTextTypeComponent } from './components/ui-text-type/ui-text-type.component';
import { UiTextTypeItemComponent } from './components/ui-text-type/ui-text-type-item/ui-text-type-item.component';
import { UiTitleStyle1Component } from './components/ui-title-style1/ui-title-style1.component';
import { UiTitleTabComponent } from './components/ui-title-tab/ui-title-tab.component';
export class UiHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = (/** @type {?} */ ({
            'swipe': { velocity: 0.4, threshold: 20, direction: Hammer.DIRECTION_ALL } // override default settings
        }));
    }
    // buildHammer(element: HTMLElement) {
    //   let mc = new Hammer(element, {
    //     touchAction: 'pan-y',
    //   });
    //   return mc;
    // }
    /**
     * @param {?} element
     * @return {?}
     */
    buildHammer(element) {
        /** @type {?} */
        let options = {
            touchAction: 'pan-y'
        };
        // console.warn('element.attributes[\'data-mc-options\']', element.attributes['data-mc-options']);
        if (element.attributes['data-mc-options']) {
            try {
                /** @type {?} */
                let parseOptions = JSON.parse(element.attributes['data-mc-options'].nodeValue);
                options = parseOptions;
            }
            catch (err) {
                //todo throw error
                console.warn('An error occurred when attempting to parse Hammer.js options: ', err);
            }
        }
        // console.warn('options', options);
        /** @type {?} */
        let mc = new Hammer(element, options);
        // keep default angular config
        // mc.get('pinch').set({enable: true});
        // mc.get('rotate').set({enable: true});
        // console.warn('this.overrides', this.overrides);
        // // retain support for angular overrides object
        // for (const eventName in this.overrides) {
        //   mc.get(eventName).set(this.overrides[eventName]);
        // }
        // console.warn('yo', options.hasOwnProperty('touchAction'), options.touchAction === 'pan-x');
        if (options.hasOwnProperty('touchAction')
            && options.touchAction === 'pan-x') {
            mc.get('swipe').set({ velocity: 0.4, threshold: 20, direction: Hammer.DIRECTION_ALL });
        }
        return mc;
    } // end buildHammer
}
if (false) {
    /** @type {?} */
    UiHammerConfig.prototype.overrides;
}
const ɵ0 = adapterFactory;
export class UIModule {
}
UIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    CommonModule,
                    BrowserModule,
                    CountoModule,
                    NxIconModule,
                    NxPopoverModule,
                    NxButtonModule,
                    NxCheckboxModule,
                    NxProgressStepperModule,
                    NxRadioModule,
                    NxFormfieldModule,
                    NxDropdownModule,
                    NxDatefieldModule,
                    NxNativeDateModule,
                    NxProgressbarModule,
                    NxInputModule,
                    NxMessageModule,
                    NxGridModule,
                    NxModalModule.forRoot(),
                    NxAccordionModule,
                    NxSwitcherModule,
                    CalendarModule.forRoot({
                        provide: DateAdapter,
                        useFactory: ɵ0
                    }),
                    IonicModule.forRoot({ mode: 'ios' }),
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    UiComponent,
                    UiBtnComponent,
                    UiProgressComponent,
                    CalendarComponent,
                    UiCalendarYearComponent,
                    UiCalendarYearMonthComponent,
                    UiFormCheckboxComponent,
                    UiFormSelectComponent,
                    UiBtnLikeAddComponent,
                    UiFormTitleSmComponent,
                    UiFormRadioComponent,
                    UiFormInputComponent,
                    UiFormErrorMsgComponent,
                    UiFormDateComponent,
                    UiTitleStyle1Component,
                    UiModalStyleFeedbackComponent,
                    UIMainLeftComponent,
                    UIMainSideMenuComponent,
                    UiMainCollapseComponent,
                    UiMainFullComponent,
                    UIInnerPageComponent,
                    UiInnerStepComponent,
                    UiInnerFullComponent,
                    UiItemSlidingComponent,
                    UiItemOptionsComponent,
                    UiItemOptionComponent,
                    UiItemComponent,
                    UiModalConfirmComponent,
                    UiFormCheckbox2Component,
                    UiInfoText1Component,
                    UiCollapseText1Component,
                    UiCardStyleTag1Component,
                    UiCollapseCard1Component,
                    UiInfoText2Component,
                    UiLinkComponent,
                    UiFormRadioTagComponent,
                    UiBtnLayoutComponent,
                    UiCollapseGroupComponent,
                    UiFormLayoutAdvancedComponent,
                    UiTabPageComponent,
                    UiContentBGapComponent,
                    UiTabStyle1Component,
                    UiTabStyle2Component,
                    UiTitleTabComponent,
                    UiTabChildComponent,
                    UiTabMoreComponent,
                    UiFormLayoutRowComponent,
                    UiFormLayoutColComponent,
                    UiDataGroupComponent,
                    UiLinkBgComponent,
                    UiFormCheckbox3Component,
                    UiFormSearchComponent,
                    UiProgressStepperStyleComponent,
                    UiProgressStepperStyleChildComponent,
                    UiInformationBtnComponent,
                    UiInformationContentComponent,
                    UiListData2Component,
                    UiFormErrorMsgInfoComponent,
                    UiFormErrorMsgTitleComponent,
                    UiFormErrorMsgListComponent,
                    UiTextTypeComponent,
                    UiTextTypeItemComponent,
                    UiDetectionScrollComponent,
                    UiProgressCircleComponent,
                    UiFormTimepickerComponent,
                    UiFormSwitcherComponent,
                    UiTableContentComponent,
                    UiTableRowComponent,
                    UiTableRowHeadComponent,
                    UiTableItemComponent,
                    UiTableCardComponent,
                    UiTableListComponent,
                    ListItemComponent,
                    UiTableTitleComponent,
                    UiCollapseContentComponent,
                    UiEmptyDefaultComponent,
                    UiFormRadioGroup,
                    UiCardContentBtnComponent,
                    UiTableEditContentComponent,
                    UiInfiniteScrollComponent,
                    UiModalStyleMenuComponent,
                    UiTableList2Component,
                    UiTableContent2Component,
                    UiTeamTitleTextComponent,
                    UiModalStyleImgBaseComponent,
                    UiModalStyleText1Component,
                    UiSwitchContentComponent,
                    UiCalendarMonthComponent,
                    UiRefreshIconComponent,
                    UiFormRadio2Component,
                    UiCalendarEventListComponent,
                    UiCalendarMonthCollapseComponent,
                    UiModalStyleCustComponent,
                    UiModalBaseComponent,
                    UiTableTextGroupComponent,
                    UiTableControlBarComponent,
                    UiCollapseContentShowComponent,
                    UiCollapseContentDetailComponent,
                    UiFormTextareaComponent,
                    UiModalMsgComponent,
                    UiFormTextareaComponent,
                    UiLoadingBoxComponent,
                    UiInformationComponent
                ],
                exports: [
                    CalendarComponent,
                    UIMainLeftComponent,
                    UIMainSideMenuComponent,
                    UiMainCollapseComponent,
                    UiMainFullComponent,
                    UIInnerPageComponent,
                    UiInnerStepComponent,
                    UiInnerFullComponent,
                    UiComponent,
                    UiItemSlidingComponent,
                    UiCollapseText1Component,
                    UiCardStyleTag1Component,
                    UiCollapseCard1Component,
                    UiInfoText2Component,
                    UiLinkComponent,
                    UiFormRadioTagComponent,
                    UiBtnComponent,
                    UiProgressComponent,
                    CalendarComponent,
                    UiFormCheckboxComponent,
                    UiFormSelectComponent,
                    UiBtnLikeAddComponent,
                    UiFormTitleSmComponent,
                    UiFormInputComponent,
                    UiFormErrorMsgComponent,
                    UiFormDateComponent,
                    UiTitleStyle1Component,
                    UiModalStyleFeedbackComponent,
                    UiItemOptionsComponent,
                    UiItemOptionComponent,
                    UiItemComponent,
                    UiModalConfirmComponent,
                    UiFormCheckbox2Component,
                    UiInfoText1Component,
                    UiBtnLayoutComponent,
                    UiCollapseGroupComponent,
                    UiFormLayoutAdvancedComponent,
                    UiFormLayoutRowComponent,
                    UiFormLayoutColComponent,
                    UiDataGroupComponent,
                    UiTabStyle2Component,
                    UiTabChildComponent,
                    NxIconModule,
                    UiLinkBgComponent,
                    UiListData2Component,
                    UiFormCheckbox3Component,
                    UiFormSearchComponent,
                    UiFormSelectComponent,
                    UiTextTypeComponent,
                    UiTextTypeItemComponent,
                    UiFormTimepickerComponent,
                    UiFormSwitcherComponent,
                    UiProgressCircleComponent,
                    UiFormRadioGroup,
                    UiInfiniteScrollComponent,
                    UiProgressStepperStyleComponent,
                    UiCardContentBtnComponent,
                    UiTabPageComponent,
                    UiContentBGapComponent,
                    UiTabStyle1Component,
                    UiTitleTabComponent,
                    UiInformationBtnComponent,
                    UiInformationContentComponent,
                    UiTableListComponent,
                    UiTableList2Component,
                    UiTableContentComponent,
                    UiTableContent2Component,
                    UiTableEditContentComponent,
                    UiTableCardComponent,
                    UiTableRowComponent,
                    UiTableRowHeadComponent,
                    UiTableItemComponent,
                    UiTableTitleComponent,
                    UiCollapseContentComponent,
                    ListItemComponent,
                    UiTeamTitleTextComponent,
                    UiModalStyleImgBaseComponent,
                    UiModalStyleText1Component,
                    UiDetectionScrollComponent,
                    UiSwitchContentComponent,
                    UiRefreshIconComponent,
                    UiFormRadio2Component,
                    UiCalendarEventListComponent,
                    UiCalendarMonthCollapseComponent,
                    UiModalStyleCustComponent,
                    UiTableTextGroupComponent,
                    UiTableControlBarComponent,
                    UiCollapseContentShowComponent,
                    UiCollapseContentDetailComponent,
                    UiFormTextareaComponent,
                    UiModalMsgComponent,
                    UiLoadingBoxComponent,
                    UiInformationComponent,
                    UiFormRadioComponent,
                    UiEmptyDefaultComponent,
                    UiTabMoreComponent,
                    UiProgressStepperStyleChildComponent,
                    UiFormErrorMsgInfoComponent
                ],
                providers: [{
                        provide: HAMMER_GESTURE_CONFIG,
                        useClass: UiHammerConfig
                    }, NumberFormatPipe]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTyxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUMsQ0FBQyxzQkFBc0I7O0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQyxDQUFDLGtCQUFrQjs7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUMsYUFBYTs7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUMsQ0FBQyxtQkFBbUI7O0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDLENBQUEsS0FBSzs7QUFFbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUMsQ0FBQyxpQkFBaUI7O0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUMsaUJBQWlCOztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUMsQ0FBRSxvQkFBb0I7O0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQyxDQUFDLE1BQU07O0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FB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QXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsK0JBQStCO29CQUMvQix5QkFBeUI7b0JBQ3pCLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsMEJBQTBCO29CQUMxQixpQkFBaUI7b0JBQ2pCLHdCQUF3QjtvQkFDeEIsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtvQkFDMUIsd0JBQXdCO29CQUN4QixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsNEJBQTRCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QiwwQkFBMEI7b0JBQzFCLDhCQUE4QjtvQkFDOUIsZ0NBQWdDO29CQUNoQyx1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLG9DQUFvQztvQkFDcEMsMkJBQTJCO2lCQUM5QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsY0FBYztxQkFDekIsRUFBQyxnQkFBZ0IsQ0FBQzthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb3VudG9Nb2R1bGUgfSAgZnJvbSAnYW5ndWxhcjItY291bnRvJztcblxuaW1wb3J0IHsgTnhJY29uTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvaWNvbic7IC8vYWxsaWFueiBpY29uIGxpYnJhcnlcbmltcG9ydCB7IE54UG9wb3Zlck1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy8gYWxsaXpuYSBwb3BvdmVyXG5pbXBvcnQgeyBOeEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy8gYWxsaWFueiDmjInpiJVcbmltcG9ydCB7IE54Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGlhbnogY2hlY2tib3hcbmltcG9ydCB7IE54UHJvZ3Jlc3NTdGVwcGVyTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvcHJvZ3Jlc3Mtc3RlcHBlcic7Ly/mraXpqZ/mop1cblxuaW1wb3J0IHsgTnhGb3JtZmllbGRNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9mb3JtZmllbGQnOyAvLyBhbGxpYW56IHNlbGVjdFxuaW1wb3J0IHsgTnhEcm9wZG93bk1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy8gYWxsaWFueiBzZWxlY3RcbmltcG9ydCB7IE54UmFkaW9Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7ICAvLyBhbGxpYW56IHJhZGlvIGJ0blxuaW1wb3J0IHsgTnhJbnB1dE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2lucHV0JzsgLy8g6Ly45YWl5qGGXG5pbXBvcnQgeyBOeE1lc3NhZ2VNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGlhbnogbWVzc2FnZVxuaW1wb3J0IHsgTnhEYXRlZmllbGRNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9kYXRlZmllbGQnOyAvLyBhbGxpYW56IGRhdGVcbmltcG9ydCB7IE54TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2RhdGVmaWVsZCc7IC8vYWxsaWFueiBkYXRldGltZVxuaW1wb3J0IHsgTnhQcm9ncmVzc2Jhck1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L3Byb2dyZXNzYmFyJzsgLy8gYWxsaWFueiBwcm9ncmVzc1xuaW1wb3J0IHsgTnhNb2RhbE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4JzsgLy8gYWxsaWFueiBwb3B1cCBtb2RhbFxuaW1wb3J0IHsgTnhBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vYWxsaWFueiBhY2NvcmRpb25cbmltcG9ydCB7IE54U3dpdGNoZXJNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGlhbnogc3dpdGNoZXJcbmltcG9ydCB7IE54R3JpZE1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2dyaWQnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBPd2xEYXRlVGltZU1vZHVsZSwgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcbmltcG9ydCB7IENvcmVNb2R1bGUsIE51bWJlckZvcm1hdFBpcGUgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcblxuLy8gc3dpcGUgcGx1Z2luXG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZywgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBlbmQgc3dpcGUgcGx1Z2luXG5cbmltcG9ydCB7IFVpQ29tcG9uZW50IH0gZnJvbSAnLi91aS91aS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUsIERhdGVBZGFwdGVyIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG5pbXBvcnQgeyBhZGFwdGVyRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXIvZGF0ZS1hZGFwdGVycy9kYXRlLWZucyc7XG5cbi8vIGxheW91dFxuaW1wb3J0IHsgVUlNYWluTGVmdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L3VpLW1haW4tbGVmdC91aS1tYWluLWxlZnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVJTWFpblNpZGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvdWktbWFpbi1zaWRlLW1lbnUvdWktbWFpbi1zaWRlLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFVpTWFpbkNvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvdWktbWFpbi1jb2xsYXBzZS91aS1tYWluLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaU1haW5GdWxsQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvdWktbWFpbi1mdWxsL3VpLW1haW4tZnVsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVUlJbm5lclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC91aS1pbm5lci1wYWdlL3VpLWlubmVyLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFVpSW5uZXJTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvdWktaW5uZXItc3RlcC91aS1pbm5lci1zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUlubmVyRnVsbENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L3VpLWlubmVyLWZ1bGwvdWktaW5uZXItZnVsbC5jb21wb25lbnQnO1xuXG5cbi8vXG5pbXBvcnQgeyBVaU1vZGFsQ29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1tb2RhbC1jb25maXJtL3VpLW1vZGFsLWNvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFVpTW9kYWxNc2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbW9kYWwtbXNnL3VpLW1vZGFsLW1zZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUJ0bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1idG4vdWktYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUJ0bkxpa2VBZGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktYnRuLWxpa2UtYWRkL3VpLWJ0bi1saWtlLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlCdG5MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktYnRuLWxheW91dC91aS1idG4tbGF5b3V0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNhbGVuZGFyWWVhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci91aS1jYWxlbmRhci15ZWFyL3VpLWNhbGVuZGFyLXllYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpQ2FsZW5kYXJZZWFyTW9udGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvdWktY2FsZW5kYXIteWVhci1tb250aC91aS1jYWxlbmRhci15ZWFyLW1vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNhbGVuZGFyTW9udGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvdWktY2FsZW5kYXItbW9udGgvdWktY2FsZW5kYXItbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IFVpQ2FsZW5kYXJFdmVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktY2FsZW5kYXItZXZlbnQtbGlzdC91aS1jYWxlbmRhci1ldmVudC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNhbGVuZGFyTW9udGhDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS91aS1jYWxlbmRhci1tb250aC1jb2xsYXBzZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUNhcmRTdHlsZVRhZzFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktY2FyZC1zdHlsZS10YWcxL3VpLWNhcmQtc3R5bGUtdGFnMS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDYXJkQ29udGVudEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1jYXJkLWNvbnRlbnQtYnRuL3VpLWNhcmQtY29udGVudC1idG4uY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlDb2xsYXBzZVRleHQxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWNvbGxhcHNlLXRleHQxL3VpLWNvbGxhcHNlLXRleHQxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNvbGxhcHNlQ2FyZDFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktY29sbGFwc2UtY2FyZDEvdWktY29sbGFwc2UtY2FyZDEuY29tcG9uZW50JztcbmltcG9ydCB7IFVpQ29sbGFwc2VHcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1jb2xsYXBzZS1ncm91cC91aS1jb2xsYXBzZS1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDb2xsYXBzZUNvbnRlbnRTaG93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWNvbGxhcHNlLWNvbnRlbnQtc2hvdy91aS1jb2xsYXBzZS1jb250ZW50LXNob3cuY29tcG9uZW50JztcbmltcG9ydCB7IFVpQ29sbGFwc2VDb250ZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWNvbGxhcHNlLWNvbnRlbnQtZGV0YWlsL3VpLWNvbGxhcHNlLWNvbnRlbnQtZGV0YWlsLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHsgVWlDb250ZW50QkdhcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1jb250ZW50LWItZ2FwL3VpLWNvbnRlbnQtYi1nYXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlEYXRhR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZGF0YS1ncm91cC91aS1kYXRhLWdyb3VwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpRGV0ZWN0aW9uU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWRldGVjdGlvbi1zY3JvbGwvdWktZGV0ZWN0aW9uLXNjcm9sbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUVtcHR5RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1lbXB0eS1kZWZhdWx0L3VpLWVtcHR5LWRlZmF1bHQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlGb3JtVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS10ZXh0YXJlYS91aS1mb3JtLXRleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1SYWRpbzJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1yYWRpbzIvdWktZm9ybS1yYWRpbzIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybVJhZGlvR3JvdXAgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1yYWRpby1ncm91cC91aS1mb3JtLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBVaUZvcm1Td2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLXN3aXRjaGVyL3VpLWZvcm0tc3dpdGNoZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybVRpbWVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS10aW1lcGlja2VyL3VpLWZvcm0tdGltZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtRXJyb3JNc2dJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tZXJyb3ItbXNnLWluZm8vdWktZm9ybS1lcnJvci1tc2ctaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtRXJyb3JNc2dUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLWVycm9yLW1zZy10aXRsZS91aS1mb3JtLWVycm9yLW1zZy10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtRXJyb3JNc2dMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tZXJyb3ItbXNnLWxpc3QvdWktZm9ybS1lcnJvci1tc2ctbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtQ2hlY2tib3gzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tY2hlY2tib3gzL3VpLWZvcm0tY2hlY2tib3gzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1TZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1zZWFyY2gvdWktZm9ybS1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUxheW91dFJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLWxheW91dC1yb3cvdWktZm9ybS1sYXlvdXQtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1MYXlvdXRDb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1sYXlvdXQtY29sL3VpLWZvcm0tbGF5b3V0LWNvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtTGF5b3V0QWR2YW5jZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1sYXlvdXQtYWR2YW5jZWQvdWktZm9ybS1sYXlvdXQtYWR2YW5jZWQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybVJhZGlvVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tcmFkaW8tdGFnL3VpLWZvcm0tcmFkaW8tdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1DaGVja2JveDJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1jaGVja2JveDIvdWktZm9ybS1jaGVja2JveDIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybVRpdGxlU21Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS10aXRsZS1zbS91aS1mb3JtLXRpdGxlLXNtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1SYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLXJhZGlvL3VpLWZvcm0tcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0taW5wdXQvdWktZm9ybS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtRXJyb3JNc2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1lcnJvci1tc2cvdWktZm9ybS1lcnJvci1tc2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybURhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1kYXRlL3VpLWZvcm0tZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1jaGVja2JveC91aS1mb3JtLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1zZWxlY3QvdWktZm9ybS1zZWxlY3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1pbmZvcm1hdGlvbi91aS1pbmZvcm1hdGlvbi5jb21wb25lbnQnOyBcbmltcG9ydCB7IFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktaW5mb3JtYXRpb24tYnRuL3VpLWluZm9ybWF0aW9uLWJ0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktaW5mb3JtYXRpb24tY29udGVudC91aS1pbmZvcm1hdGlvbi1jb250ZW50LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpSW5mb1RleHQxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWluZm8tdGV4dDEvdWktaW5mby10ZXh0MS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlJbmZvVGV4dDJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktaW5mby10ZXh0Mi91aS1pbmZvLXRleHQyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpSW5maW5pdGVTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktaW5maW5pdGUtc2Nyb2xsL3VpLWluZmluaXRlLXNjcm9sbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUl0ZW1TbGlkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWl0ZW0tc2xpZGluZy91aS1pdGVtLXNsaWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFVpSXRlbU9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktaXRlbS1zbGlkaW5nL3VpLWl0ZW0tb3B0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlJdGVtT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWl0ZW0tc2xpZGluZy91aS1pdGVtLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWl0ZW0tc2xpZGluZy91aS1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1saW5rL3VpLWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IFVpTGlua0JnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWxpbmstYmcvdWktbGluay1iZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUxpc3REYXRhMkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1saXN0LWRhdGEyL3VpLWxpc3QtZGF0YTIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlMb2FkaW5nQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWxvYWRpbmctYm94L3VpLWxvYWRpbmctYm94LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpTW9kYWxTdHlsZUltZ0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbW9kYWwtc3R5bGUtaW1nLWJhc2UvdWktbW9kYWwtc3R5bGUtaW1nLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFVpTW9kYWxTdHlsZVRleHQxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLW1vZGFsLXN0eWxlLXRleHQxL3VpLW1vZGFsLXN0eWxlLXRleHQxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaU1vZGFsU3R5bGVDdXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLW1vZGFsLXN0eWxlLWN1c3QvdWktbW9kYWwtc3R5bGUtY3VzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlNb2RhbEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbW9kYWwtYmFzZS91aS1tb2RhbC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaU1vZGFsU3R5bGVGZWVkYmFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS1mZWVkYmFjay91aS1tb2RhbC1zdHlsZS1mZWVkYmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlNb2RhbFN0eWxlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS1tZW51L3VpLW1vZGFsLXN0eWxlLW1lbnUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1wcm9ncmVzcy91aS1wcm9ncmVzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlQcm9ncmVzc1N0ZXBwZXJTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVpUHJvZ3Jlc3NTdGVwcGVyU3R5bGVDaGlsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlLWNoaWxkL3VpLXByb2dyZXNzLXN0ZXBwZXItc3R5bGUtY2hpbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktcHJvZ3Jlc3MtY2lyY2xlL3VpLXByb2dyZXNzLWNpcmNsZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaVJlZnJlc2hJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXJlZnJlc2gtaWNvbi91aS1yZWZyZXNoLWljb24uY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBVaVN3aXRjaENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktc3dpdGNoLWNvbnRlbnQvdWktc3dpdGNoLWNvbnRlbnQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlUYWJTdHlsZTFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFiLXN0eWxlMS91aS10YWItc3R5bGUxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYlN0eWxlMkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWItc3R5bGUyL3VpLXRhYi1zdHlsZTIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFiQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFiLWNoaWxkL3VpLXRhYi1jaGlsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJNb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYi1tb3JlL3VpLXRhYi1tb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYlBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFiLXBhZ2UvdWktdGFiLXBhZ2UuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlUYWJsZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtY29udGVudC91aS10YWJsZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLXJvdy91aS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVSb3dIZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLXJvdy1oZWFkL3VpLXRhYmxlLXJvdy1oZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS1pdGVtL3VpLXRhYmxlLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLWNhcmQvdWktdGFibGUtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtbGlzdC91aS10YWJsZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS1saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS10aXRsZS91aS10YWJsZS10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDb2xsYXBzZUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtY29sbGFwc2UtY29udGVudC91aS10YWJsZS1jb2xsYXBzZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlRWRpdENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtZWRpdC1jb250ZW50L3VpLXRhYmxlLWVkaXQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJsZUxpc3QyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLWxpc3QyL3VpLXRhYmxlLWxpc3QyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlQ29udGVudDJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtY29udGVudDIvdWktdGFibGUtY29udGVudDIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVUZXh0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtdGV4dC1ncm91cC91aS10YWJsZS10ZXh0LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlQ29udHJvbEJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS1jb250cm9sLWJhci91aS10YWJsZS1jb250cm9sLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUZWFtVGl0bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRlYW0tdGl0bGUtdGV4dC91aS10ZWFtLXRpdGxlLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGV4dFR5cGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGV4dC10eXBlL3VpLXRleHQtdHlwZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUZXh0VHlwZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGV4dC10eXBlL3VpLXRleHQtdHlwZS1pdGVtL3VpLXRleHQtdHlwZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRpdGxlU3R5bGUxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRpdGxlLXN0eWxlMS91aS10aXRsZS1zdHlsZTEuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGl0bGVUYWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGl0bGUtdGFiL3VpLXRpdGxlLXRhYi5jb21wb25lbnQnO1xuXG5cblxuXG5leHBvcnQgY2xhc3MgVWlIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgb3ZlcnJpZGVzID0gPGFueT57XG4gICAgJ3N3aXBlJzogeyB2ZWxvY2l0eTogMC40LCB0aHJlc2hvbGQ6IDIwLCBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0gLy8gb3ZlcnJpZGUgZGVmYXVsdCBzZXR0aW5nc1xuICB9O1xuICAvLyBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAvLyAgIGxldCBtYyA9IG5ldyBIYW1tZXIoZWxlbWVudCwge1xuICAvLyAgICAgdG91Y2hBY3Rpb246ICdwYW4teScsXG4gIC8vICAgfSk7XG4gIC8vICAgcmV0dXJuIG1jO1xuICAvLyB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0b3VjaEFjdGlvbjogJ3Bhbi15J1xuICAgIH07XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ2VsZW1lbnQuYXR0cmlidXRlc1tcXCdkYXRhLW1jLW9wdGlvbnNcXCddJywgZWxlbWVudC5hdHRyaWJ1dGVzWydkYXRhLW1jLW9wdGlvbnMnXSk7XG5cbiAgICBpZiAoZWxlbWVudC5hdHRyaWJ1dGVzWydkYXRhLW1jLW9wdGlvbnMnXSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHBhcnNlT3B0aW9ucyA9IEpTT04ucGFyc2UoZWxlbWVudC5hdHRyaWJ1dGVzWydkYXRhLW1jLW9wdGlvbnMnXS5ub2RlVmFsdWUpO1xuICAgICAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vdG9kbyB0aHJvdyBlcnJvclxuICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGVycm9yIG9jY3VycmVkIHdoZW4gYXR0ZW1wdGluZyB0byBwYXJzZSBIYW1tZXIuanMgb3B0aW9uczogJywgZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ29wdGlvbnMnLCBvcHRpb25zKTtcblxuICAgIGxldCBtYyA9IG5ldyBIYW1tZXIoZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICAvLyBrZWVwIGRlZmF1bHQgYW5ndWxhciBjb25maWdcbiAgICAvLyBtYy5nZXQoJ3BpbmNoJykuc2V0KHtlbmFibGU6IHRydWV9KTtcbiAgICAvLyBtYy5nZXQoJ3JvdGF0ZScpLnNldCh7ZW5hYmxlOiB0cnVlfSk7XG5cbiAgICAvLyBjb25zb2xlLndhcm4oJ3RoaXMub3ZlcnJpZGVzJywgdGhpcy5vdmVycmlkZXMpO1xuXG4gICAgLy8gLy8gcmV0YWluIHN1cHBvcnQgZm9yIGFuZ3VsYXIgb3ZlcnJpZGVzIG9iamVjdFxuICAgIC8vIGZvciAoY29uc3QgZXZlbnROYW1lIGluIHRoaXMub3ZlcnJpZGVzKSB7XG4gICAgLy8gICBtYy5nZXQoZXZlbnROYW1lKS5zZXQodGhpcy5vdmVycmlkZXNbZXZlbnROYW1lXSk7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc29sZS53YXJuKCd5bycsIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RvdWNoQWN0aW9uJyksIG9wdGlvbnMudG91Y2hBY3Rpb24gPT09ICdwYW4teCcpO1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0b3VjaEFjdGlvbicpXG4gICAgICAmJiBvcHRpb25zLnRvdWNoQWN0aW9uID09PSAncGFuLXgnKSB7XG4gICAgICBtYy5nZXQoJ3N3aXBlJykuc2V0KHsgdmVsb2NpdHk6IDAuNCwgdGhyZXNob2xkOiAyMCwgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWM7XG4gIH0gLy8gZW5kIGJ1aWxkSGFtbWVyXG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb3JlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLCBcbiAgICBDb3VudG9Nb2R1bGUsXG4gICAgTnhJY29uTW9kdWxlLFxuICAgIE54UG9wb3Zlck1vZHVsZSxcbiAgICBOeEJ1dHRvbk1vZHVsZSxcbiAgICBOeENoZWNrYm94TW9kdWxlLFxuICAgIE54UHJvZ3Jlc3NTdGVwcGVyTW9kdWxlLFxuICAgIE54UmFkaW9Nb2R1bGUsXG4gICAgTnhGb3JtZmllbGRNb2R1bGUsXG4gICAgTnhEcm9wZG93bk1vZHVsZSxcbiAgICBOeERhdGVmaWVsZE1vZHVsZSxcbiAgICBOeE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTnhQcm9ncmVzc2Jhck1vZHVsZSxcbiAgICBOeElucHV0TW9kdWxlLFxuICAgIE54TWVzc2FnZU1vZHVsZSxcbiAgICBOeEdyaWRNb2R1bGUsXG4gICAgTnhNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgTnhBY2NvcmRpb25Nb2R1bGUsXG4gICAgTnhTd2l0Y2hlck1vZHVsZSxcbiAgICBDYWxlbmRhck1vZHVsZS5mb3JSb290KHtcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgdXNlRmFjdG9yeTogYWRhcHRlckZhY3RvcnlcbiAgICB9KVxuICAgICwgSW9uaWNNb2R1bGUuZm9yUm9vdCh7IG1vZGU6ICdpb3MnIH0pXG4gICAgLCBPd2xEYXRlVGltZU1vZHVsZVxuICAgICwgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGVcbiAgICAsIEZvcm1zTW9kdWxlXG4gICAgLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFVpQ29tcG9uZW50XG4gICAgLCBVaUJ0bkNvbXBvbmVudFxuICAgICwgVWlQcm9ncmVzc0NvbXBvbmVudFxuICAgICwgQ2FsZW5kYXJDb21wb25lbnRcbiAgICAsIFVpQ2FsZW5kYXJZZWFyQ29tcG9uZW50XG4gICAgLCBVaUNhbGVuZGFyWWVhck1vbnRoQ29tcG9uZW50XG4gICAgLCBVaUZvcm1DaGVja2JveENvbXBvbmVudFxuICAgICwgVWlGb3JtU2VsZWN0Q29tcG9uZW50XG4gICAgLCBVaUJ0bkxpa2VBZGRDb21wb25lbnRcbiAgICAsIFVpRm9ybVRpdGxlU21Db21wb25lbnRcbiAgICAsIFVpRm9ybVJhZGlvQ29tcG9uZW50XG4gICAgLCBVaUZvcm1JbnB1dENvbXBvbmVudFxuICAgICwgVWlGb3JtRXJyb3JNc2dDb21wb25lbnRcbiAgICAsIFVpRm9ybURhdGVDb21wb25lbnRcbiAgICAsIFVpVGl0bGVTdHlsZTFDb21wb25lbnRcbiAgICAsIFVpTW9kYWxTdHlsZUZlZWRiYWNrQ29tcG9uZW50XG4gICAgLCBVSU1haW5MZWZ0Q29tcG9uZW50XG4gICAgLCBVSU1haW5TaWRlTWVudUNvbXBvbmVudFxuICAgICwgVWlNYWluQ29sbGFwc2VDb21wb25lbnRcbiAgICAsIFVpTWFpbkZ1bGxDb21wb25lbnRcbiAgICAsIFVJSW5uZXJQYWdlQ29tcG9uZW50XG4gICAgLCBVaUlubmVyU3RlcENvbXBvbmVudFxuICAgICwgVWlJbm5lckZ1bGxDb21wb25lbnRcbiAgICAsIFVpSXRlbVNsaWRpbmdDb21wb25lbnRcbiAgICAsIFVpSXRlbU9wdGlvbnNDb21wb25lbnRcbiAgICAsIFVpSXRlbU9wdGlvbkNvbXBvbmVudFxuICAgICwgVWlJdGVtQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsQ29uZmlybUNvbXBvbmVudFxuICAgICwgVWlGb3JtQ2hlY2tib3gyQ29tcG9uZW50XG4gICAgLCBVaUluZm9UZXh0MUNvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZVRleHQxQ29tcG9uZW50XG4gICAgLCBVaUNhcmRTdHlsZVRhZzFDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VDYXJkMUNvbXBvbmVudFxuICAgICwgVWlJbmZvVGV4dDJDb21wb25lbnRcbiAgICAsIFVpTGlua0NvbXBvbmVudFxuICAgICwgVWlGb3JtUmFkaW9UYWdDb21wb25lbnRcbiAgICAsIFVpQnRuTGF5b3V0Q29tcG9uZW50XG4gICAgLCBVaUNvbGxhcHNlR3JvdXBDb21wb25lbnRcbiAgICAsIFVpRm9ybUxheW91dEFkdmFuY2VkQ29tcG9uZW50XG4gICAgLCBVaVRhYlBhZ2VDb21wb25lbnRcbiAgICAsIFVpQ29udGVudEJHYXBDb21wb25lbnRcbiAgICAsIFVpVGFiU3R5bGUxQ29tcG9uZW50XG4gICAgLCBVaVRhYlN0eWxlMkNvbXBvbmVudFxuICAgICwgVWlUaXRsZVRhYkNvbXBvbmVudFxuICAgICwgVWlUYWJDaGlsZENvbXBvbmVudFxuICAgICwgVWlUYWJNb3JlQ29tcG9uZW50XG4gICAgLCBVaUZvcm1MYXlvdXRSb3dDb21wb25lbnRcbiAgICAsIFVpRm9ybUxheW91dENvbENvbXBvbmVudFxuICAgICwgVWlEYXRhR3JvdXBDb21wb25lbnRcbiAgICAsIFVpTGlua0JnQ29tcG9uZW50XG4gICAgLCBVaUZvcm1DaGVja2JveDNDb21wb25lbnRcbiAgICAsIFVpRm9ybVNlYXJjaENvbXBvbmVudFxuICAgICwgVWlQcm9ncmVzc1N0ZXBwZXJTdHlsZUNvbXBvbmVudFxuICAgICwgVWlQcm9ncmVzc1N0ZXBwZXJTdHlsZUNoaWxkQ29tcG9uZW50XG4gICAgLCBVaUluZm9ybWF0aW9uQnRuQ29tcG9uZW50XG4gICAgLCBVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudFxuICAgICwgVWlMaXN0RGF0YTJDb21wb25lbnRcbiAgICAsIFVpRm9ybUVycm9yTXNnSW5mb0NvbXBvbmVudFxuICAgICwgVWlGb3JtRXJyb3JNc2dUaXRsZUNvbXBvbmVudFxuICAgICwgVWlGb3JtRXJyb3JNc2dMaXN0Q29tcG9uZW50XG4gICAgLCBVaVRleHRUeXBlQ29tcG9uZW50XG4gICAgLCBVaVRleHRUeXBlSXRlbUNvbXBvbmVudFxuICAgICwgVWlEZXRlY3Rpb25TY3JvbGxDb21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnRcbiAgICAsIFVpRm9ybVRpbWVwaWNrZXJDb21wb25lbnRcbiAgICAsIFVpRm9ybVN3aXRjaGVyQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlQ29udGVudENvbXBvbmVudFxuICAgICwgVWlUYWJsZVJvd0NvbXBvbmVudFxuICAgICwgVWlUYWJsZVJvd0hlYWRDb21wb25lbnRcbiAgICAsIFVpVGFibGVJdGVtQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlQ2FyZENvbXBvbmVudFxuICAgICwgVWlUYWJsZUxpc3RDb21wb25lbnRcbiAgICAsIExpc3RJdGVtQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlVGl0bGVDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VDb250ZW50Q29tcG9uZW50XG4gICAgLCBVaUVtcHR5RGVmYXVsdENvbXBvbmVudFxuICAgICwgVWlGb3JtUmFkaW9Hcm91cFxuICAgICwgVWlDYXJkQ29udGVudEJ0bkNvbXBvbmVudFxuICAgICwgVWlUYWJsZUVkaXRDb250ZW50Q29tcG9uZW50XG4gICAgLCBVaUluZmluaXRlU2Nyb2xsQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVNZW51Q29tcG9uZW50XG4gICAgLCBVaVRhYmxlTGlzdDJDb21wb25lbnRcbiAgICAsIFVpVGFibGVDb250ZW50MkNvbXBvbmVudFxuICAgICwgVWlUZWFtVGl0bGVUZXh0Q29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVJbWdCYXNlQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVUZXh0MUNvbXBvbmVudFxuICAgICwgVWlTd2l0Y2hDb250ZW50Q29tcG9uZW50XG4gICAgLCBVaUNhbGVuZGFyTW9udGhDb21wb25lbnRcbiAgICAsIFVpUmVmcmVzaEljb25Db21wb25lbnRcbiAgICAsIFVpRm9ybVJhZGlvMkNvbXBvbmVudFxuICAgICwgVWlDYWxlbmRhckV2ZW50TGlzdENvbXBvbmVudFxuICAgICwgVWlDYWxlbmRhck1vbnRoQ29sbGFwc2VDb21wb25lbnRcbiAgICAsIFVpTW9kYWxTdHlsZUN1c3RDb21wb25lbnRcbiAgICAsIFVpTW9kYWxCYXNlQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlVGV4dEdyb3VwQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlQ29udHJvbEJhckNvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZUNvbnRlbnRTaG93Q29tcG9uZW50XG4gICAgLCBVaUNvbGxhcHNlQ29udGVudERldGFpbENvbXBvbmVudFxuICAgICwgVWlGb3JtVGV4dGFyZWFDb21wb25lbnRcbiAgICAsIFVpTW9kYWxNc2dDb21wb25lbnRcbiAgICAsIFVpRm9ybVRleHRhcmVhQ29tcG9uZW50XG4gICAgLCBVaUxvYWRpbmdCb3hDb21wb25lbnRcbiAgICAsIFVpSW5mb3JtYXRpb25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENhbGVuZGFyQ29tcG9uZW50XG4gICAgLCBVSU1haW5MZWZ0Q29tcG9uZW50XG4gICAgLCBVSU1haW5TaWRlTWVudUNvbXBvbmVudFxuICAgICwgVWlNYWluQ29sbGFwc2VDb21wb25lbnRcbiAgICAsIFVpTWFpbkZ1bGxDb21wb25lbnRcbiAgICAsIFVJSW5uZXJQYWdlQ29tcG9uZW50XG4gICAgLCBVaUlubmVyU3RlcENvbXBvbmVudFxuICAgICwgVWlJbm5lckZ1bGxDb21wb25lbnRcbiAgICAsIFVpQ29tcG9uZW50XG4gICAgLCBVaUl0ZW1TbGlkaW5nQ29tcG9uZW50XG4gICAgLCBVaUNvbGxhcHNlVGV4dDFDb21wb25lbnRcbiAgICAsIFVpQ2FyZFN0eWxlVGFnMUNvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZUNhcmQxQ29tcG9uZW50XG4gICAgLCBVaUluZm9UZXh0MkNvbXBvbmVudFxuICAgICwgVWlMaW5rQ29tcG9uZW50XG4gICAgLCBVaUZvcm1SYWRpb1RhZ0NvbXBvbmVudFxuICAgICwgVWlCdG5Db21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NDb21wb25lbnRcbiAgICAsIENhbGVuZGFyQ29tcG9uZW50XG4gICAgLCBVaUZvcm1DaGVja2JveENvbXBvbmVudFxuICAgICwgVWlGb3JtU2VsZWN0Q29tcG9uZW50XG4gICAgLCBVaUJ0bkxpa2VBZGRDb21wb25lbnRcbiAgICAsIFVpRm9ybVRpdGxlU21Db21wb25lbnRcbiAgICAsIFVpRm9ybUlucHV0Q29tcG9uZW50XG4gICAgLCBVaUZvcm1FcnJvck1zZ0NvbXBvbmVudFxuICAgICwgVWlGb3JtRGF0ZUNvbXBvbmVudFxuICAgICwgVWlUaXRsZVN0eWxlMUNvbXBvbmVudFxuICAgICwgVWlNb2RhbFN0eWxlRmVlZGJhY2tDb21wb25lbnRcbiAgICAsIFVpSXRlbU9wdGlvbnNDb21wb25lbnRcbiAgICAsIFVpSXRlbU9wdGlvbkNvbXBvbmVudFxuICAgICwgVWlJdGVtQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsQ29uZmlybUNvbXBvbmVudFxuICAgICwgVWlGb3JtQ2hlY2tib3gyQ29tcG9uZW50XG4gICAgLCBVaUluZm9UZXh0MUNvbXBvbmVudFxuICAgICwgVWlCdG5MYXlvdXRDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VHcm91cENvbXBvbmVudFxuICAgICwgVWlGb3JtTGF5b3V0QWR2YW5jZWRDb21wb25lbnRcbiAgICAsIFVpRm9ybUxheW91dFJvd0NvbXBvbmVudFxuICAgICwgVWlGb3JtTGF5b3V0Q29sQ29tcG9uZW50XG4gICAgLCBVaURhdGFHcm91cENvbXBvbmVudFxuICAgICwgVWlUYWJTdHlsZTJDb21wb25lbnRcbiAgICAsIFVpVGFiQ2hpbGRDb21wb25lbnRcbiAgICAsIE54SWNvbk1vZHVsZVxuICAgICwgVWlMaW5rQmdDb21wb25lbnRcbiAgICAsIFVpTGlzdERhdGEyQ29tcG9uZW50XG4gICAgLCBVaUZvcm1DaGVja2JveDNDb21wb25lbnRcbiAgICAsIFVpRm9ybVNlYXJjaENvbXBvbmVudFxuICAgICwgVWlGb3JtU2VsZWN0Q29tcG9uZW50XG4gICAgLCBVaVRleHRUeXBlQ29tcG9uZW50XG4gICAgLCBVaVRleHRUeXBlSXRlbUNvbXBvbmVudFxuICAgICwgVWlGb3JtVGltZXBpY2tlckNvbXBvbmVudFxuICAgICwgVWlGb3JtU3dpdGNoZXJDb21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnRcbiAgICAsIFVpRm9ybVJhZGlvR3JvdXBcbiAgICAsIFVpSW5maW5pdGVTY3JvbGxDb21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NTdGVwcGVyU3R5bGVDb21wb25lbnRcbiAgICAsIFVpQ2FyZENvbnRlbnRCdG5Db21wb25lbnRcbiAgICAsIFVpVGFiUGFnZUNvbXBvbmVudFxuICAgICwgVWlDb250ZW50QkdhcENvbXBvbmVudFxuICAgICwgVWlUYWJTdHlsZTFDb21wb25lbnRcbiAgICAsIFVpVGl0bGVUYWJDb21wb25lbnRcbiAgICAsIFVpSW5mb3JtYXRpb25CdG5Db21wb25lbnRcbiAgICAsIFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50XG4gICAgLCBVaVRhYmxlTGlzdENvbXBvbmVudFxuICAgICwgVWlUYWJsZUxpc3QyQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlQ29udGVudENvbXBvbmVudFxuICAgICwgVWlUYWJsZUNvbnRlbnQyQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlRWRpdENvbnRlbnRDb21wb25lbnRcbiAgICAsIFVpVGFibGVDYXJkQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlUm93Q29tcG9uZW50XG4gICAgLCBVaVRhYmxlUm93SGVhZENvbXBvbmVudFxuICAgICwgVWlUYWJsZUl0ZW1Db21wb25lbnRcbiAgICAsIFVpVGFibGVUaXRsZUNvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZUNvbnRlbnRDb21wb25lbnRcbiAgICAsIExpc3RJdGVtQ29tcG9uZW50XG4gICAgLCBVaVRlYW1UaXRsZVRleHRDb21wb25lbnRcbiAgICAsIFVpTW9kYWxTdHlsZUltZ0Jhc2VDb21wb25lbnRcbiAgICAsIFVpTW9kYWxTdHlsZVRleHQxQ29tcG9uZW50XG4gICAgLCBVaURldGVjdGlvblNjcm9sbENvbXBvbmVudFxuICAgICwgVWlTd2l0Y2hDb250ZW50Q29tcG9uZW50XG4gICAgLCBVaVJlZnJlc2hJY29uQ29tcG9uZW50XG4gICAgLCBVaUZvcm1SYWRpbzJDb21wb25lbnRcbiAgICAsIFVpQ2FsZW5kYXJFdmVudExpc3RDb21wb25lbnRcbiAgICAsIFVpQ2FsZW5kYXJNb250aENvbGxhcHNlQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVDdXN0Q29tcG9uZW50XG4gICAgLCBVaVRhYmxlVGV4dEdyb3VwQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlQ29udHJvbEJhckNvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZUNvbnRlbnRTaG93Q29tcG9uZW50XG4gICAgLCBVaUNvbGxhcHNlQ29udGVudERldGFpbENvbXBvbmVudFxuICAgICwgVWlGb3JtVGV4dGFyZWFDb21wb25lbnRcbiAgICAsIFVpTW9kYWxNc2dDb21wb25lbnRcbiAgICAsIFVpTG9hZGluZ0JveENvbXBvbmVudFxuICAgICwgVWlJbmZvcm1hdGlvbkNvbXBvbmVudFxuICAgICwgVWlGb3JtUmFkaW9Db21wb25lbnRcbiAgICAsIFVpRW1wdHlEZWZhdWx0Q29tcG9uZW50XG4gICAgLCBVaVRhYk1vcmVDb21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NTdGVwcGVyU3R5bGVDaGlsZENvbXBvbmVudFxuICAgICwgVWlGb3JtRXJyb3JNc2dJbmZvQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgdXNlQ2xhc3M6IFVpSGFtbWVyQ29uZmlnXG4gIH0sTnVtYmVyRm9ybWF0UGlwZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBVSU1vZHVsZSB7XG5cbn1cbiJdfQ==