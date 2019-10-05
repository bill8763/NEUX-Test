/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var UiHammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(UiHammerConfig, _super);
    function UiHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = (/** @type {?} */ ({
            'swipe': { velocity: 0.4, threshold: 20, direction: Hammer.DIRECTION_ALL } // override default settings
        }));
        return _this;
    }
    // buildHammer(element: HTMLElement) {
    //   let mc = new Hammer(element, {
    //     touchAction: 'pan-y',
    //   });
    //   return mc;
    // }
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
    UiHammerConfig.prototype.buildHammer = 
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
    function (element) {
        /** @type {?} */
        var options = {
            touchAction: 'pan-y'
        };
        // console.warn('element.attributes[\'data-mc-options\']', element.attributes['data-mc-options']);
        if (element.attributes['data-mc-options']) {
            try {
                /** @type {?} */
                var parseOptions = JSON.parse(element.attributes['data-mc-options'].nodeValue);
                options = parseOptions;
            }
            catch (err) {
                //todo throw error
                console.warn('An error occurred when attempting to parse Hammer.js options: ', err);
            }
        }
        // console.warn('options', options);
        /** @type {?} */
        var mc = new Hammer(element, options);
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
    }; // end buildHammer
    return UiHammerConfig;
}(HammerGestureConfig));
export { UiHammerConfig };
if (false) {
    /** @type {?} */
    UiHammerConfig.prototype.overrides;
}
var ɵ0 = adapterFactory;
var UIModule = /** @class */ (function () {
    function UIModule() {
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
    return UIModule;
}());
export { UIModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU8saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDLENBQUMsc0JBQXNCOztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0I7O0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQyxDQUFDLGFBQWE7O0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUMsbUJBQW1COztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQyxDQUFBLEtBQUs7O0FBRWxGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDLENBQUMsaUJBQWlCOztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQyxDQUFDLGlCQUFpQjs7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDLENBQUUsb0JBQW9COztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUMsQ0FBQyxNQUFNOztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENB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QUMsZ0JBQWdCLENBQUM7aUJBQ3BCOztJQUlELGVBQUM7Q0FBQSxBQXRQRCxJQXNQQztTQUZZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ291bnRvTW9kdWxlIH0gIGZyb20gJ2FuZ3VsYXIyLWNvdW50byc7XG5cbmltcG9ydCB7IE54SWNvbk1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L2ljb24nOyAvL2FsbGlhbnogaWNvbiBsaWJyYXJ5XG5pbXBvcnQgeyBOeFBvcG92ZXJNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGl6bmEgcG9wb3ZlclxuaW1wb3J0IHsgTnhCdXR0b25Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGlhbnog5oyJ6YiVXG5pbXBvcnQgeyBOeENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnOyAvLyBhbGxpYW56IGNoZWNrYm94XG5pbXBvcnQgeyBOeFByb2dyZXNzU3RlcHBlck1vZHVsZSB9IGZyb20gJ0BhbGxpYW56L25neC1uZGJ4L3Byb2dyZXNzLXN0ZXBwZXInOy8v5q2l6amf5qKdXG5cbmltcG9ydCB7IE54Rm9ybWZpZWxkTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvZm9ybWZpZWxkJzsgLy8gYWxsaWFueiBzZWxlY3RcbmltcG9ydCB7IE54RHJvcGRvd25Nb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGlhbnogc2VsZWN0XG5pbXBvcnQgeyBOeFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnOyAgLy8gYWxsaWFueiByYWRpbyBidG5cbmltcG9ydCB7IE54SW5wdXRNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9pbnB1dCc7IC8vIOi8uOWFpeahhlxuaW1wb3J0IHsgTnhNZXNzYWdlTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnOyAvLyBhbGxpYW56IG1lc3NhZ2VcbmltcG9ydCB7IE54RGF0ZWZpZWxkTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngvZGF0ZWZpZWxkJzsgLy8gYWxsaWFueiBkYXRlXG5pbXBvcnQgeyBOeE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9kYXRlZmllbGQnOyAvL2FsbGlhbnogZGF0ZXRpbWVcbmltcG9ydCB7IE54UHJvZ3Jlc3NiYXJNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9wcm9ncmVzc2Jhcic7IC8vIGFsbGlhbnogcHJvZ3Jlc3NcbmltcG9ydCB7IE54TW9kYWxNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieCc7IC8vIGFsbGlhbnogcG9wdXAgbW9kYWxcbmltcG9ydCB7IE54QWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnOyAvL2FsbGlhbnogYWNjb3JkaW9uXG5pbXBvcnQgeyBOeFN3aXRjaGVyTW9kdWxlIH0gZnJvbSAnQGFsbGlhbnovbmd4LW5kYngnOyAvLyBhbGxpYW56IHN3aXRjaGVyXG5pbXBvcnQgeyBOeEdyaWRNb2R1bGUgfSBmcm9tICdAYWxsaWFuei9uZ3gtbmRieC9ncmlkJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgT3dsRGF0ZVRpbWVNb2R1bGUsIE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlIH0gZnJvbSAnbmctcGljay1kYXRldGltZSc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlLCBOdW1iZXJGb3JtYXRQaXBlIH0gZnJvbSAnQGFsbGlhbnpTTkQvY29yZSc7XG5cbi8vIHN3aXBlIHBsdWdpblxuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gZW5kIHN3aXBlIHBsdWdpblxuXG5pbXBvcnQgeyBVaUNvbXBvbmVudCB9IGZyb20gJy4vdWkvdWkuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlLCBEYXRlQWRhcHRlciB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuaW1wb3J0IHsgYWRhcHRlckZhY3RvcnkgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyL2RhdGUtYWRhcHRlcnMvZGF0ZS1mbnMnO1xuXG4vLyBsYXlvdXRcbmltcG9ydCB7IFVJTWFpbkxlZnRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC91aS1tYWluLWxlZnQvdWktbWFpbi1sZWZ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVSU1haW5TaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L3VpLW1haW4tc2lkZS1tZW51L3VpLW1haW4tc2lkZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaU1haW5Db2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L3VpLW1haW4tY29sbGFwc2UvdWktbWFpbi1jb2xsYXBzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlNYWluRnVsbENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L3VpLW1haW4tZnVsbC91aS1tYWluLWZ1bGwuY29tcG9uZW50JztcbmltcG9ydCB7IFVJSW5uZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvdWktaW5uZXItcGFnZS91aS1pbm5lci1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUlubmVyU3RlcENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0L3VpLWlubmVyLXN0ZXAvdWktaW5uZXItc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlJbm5lckZ1bGxDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC91aS1pbm5lci1mdWxsL3VpLWlubmVyLWZ1bGwuY29tcG9uZW50JztcblxuXG4vL1xuaW1wb3J0IHsgVWlNb2RhbENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbW9kYWwtY29uZmlybS91aS1tb2RhbC1jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaU1vZGFsTXNnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLW1vZGFsLW1zZy91aS1tb2RhbC1tc2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlCdG5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktYnRuL3VpLWJ0bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlCdG5MaWtlQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWJ0bi1saWtlLWFkZC91aS1idG4tbGlrZS1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpQnRuTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWJ0bi1sYXlvdXQvdWktYnRuLWxheW91dC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDYWxlbmRhclllYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvdWktY2FsZW5kYXIteWVhci91aS1jYWxlbmRhci15ZWFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNhbGVuZGFyWWVhck1vbnRoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyL3VpLWNhbGVuZGFyLXllYXItbW9udGgvdWktY2FsZW5kYXIteWVhci1tb250aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDYWxlbmRhck1vbnRoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyL3VpLWNhbGVuZGFyLW1vbnRoL3VpLWNhbGVuZGFyLW1vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNhbGVuZGFyRXZlbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWNhbGVuZGFyLWV2ZW50LWxpc3QvdWktY2FsZW5kYXItZXZlbnQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDYWxlbmRhck1vbnRoQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvdWktY2FsZW5kYXItbW9udGgtY29sbGFwc2UvdWktY2FsZW5kYXItbW9udGgtY29sbGFwc2UuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlDYXJkU3R5bGVUYWcxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWNhcmQtc3R5bGUtdGFnMS91aS1jYXJkLXN0eWxlLXRhZzEuY29tcG9uZW50JztcbmltcG9ydCB7IFVpQ2FyZENvbnRlbnRCdG5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktY2FyZC1jb250ZW50LWJ0bi91aS1jYXJkLWNvbnRlbnQtYnRuLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpQ29sbGFwc2VUZXh0MUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1jb2xsYXBzZS10ZXh0MS91aS1jb2xsYXBzZS10ZXh0MS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlDb2xsYXBzZUNhcmQxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWNvbGxhcHNlLWNhcmQxL3VpLWNvbGxhcHNlLWNhcmQxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNvbGxhcHNlR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktY29sbGFwc2UtZ3JvdXAvdWktY29sbGFwc2UtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFVpQ29sbGFwc2VDb250ZW50U2hvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1jb2xsYXBzZS1jb250ZW50LXNob3cvdWktY29sbGFwc2UtY29udGVudC1zaG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUNvbGxhcHNlQ29udGVudERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC91aS1jb2xsYXBzZS1jb250ZW50LWRldGFpbC5jb21wb25lbnQnO1xuXG5cbmltcG9ydCB7IFVpQ29udGVudEJHYXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktY29udGVudC1iLWdhcC91aS1jb250ZW50LWItZ2FwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpRGF0YUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWRhdGEtZ3JvdXAvdWktZGF0YS1ncm91cC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaURldGVjdGlvblNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1kZXRlY3Rpb24tc2Nyb2xsL3VpLWRldGVjdGlvbi1zY3JvbGwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlFbXB0eURlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZW1wdHktZGVmYXVsdC91aS1lbXB0eS1kZWZhdWx0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpRm9ybVRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tdGV4dGFyZWEvdWktZm9ybS10ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtUmFkaW8yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tcmFkaW8yL3VpLWZvcm0tcmFkaW8yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1SYWRpb0dyb3VwIH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tcmFkaW8tZ3JvdXAvdWktZm9ybS1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVWlGb3JtU3dpdGNoZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1zd2l0Y2hlci91aS1mb3JtLXN3aXRjaGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1UaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tdGltZXBpY2tlci91aS1mb3JtLXRpbWVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUVycm9yTXNnSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLWVycm9yLW1zZy1pbmZvL3VpLWZvcm0tZXJyb3ItbXNnLWluZm8uY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUVycm9yTXNnVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1lcnJvci1tc2ctdGl0bGUvdWktZm9ybS1lcnJvci1tc2ctdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUVycm9yTXNnTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLWVycm9yLW1zZy1saXN0L3VpLWZvcm0tZXJyb3ItbXNnLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUNoZWNrYm94M0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLWNoZWNrYm94My91aS1mb3JtLWNoZWNrYm94My5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tc2VhcmNoL3VpLWZvcm0tc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1MYXlvdXRSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1sYXlvdXQtcm93L3VpLWZvcm0tbGF5b3V0LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtTGF5b3V0Q29sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tbGF5b3V0LWNvbC91aS1mb3JtLWxheW91dC1jb2wuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUxheW91dEFkdmFuY2VkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tbGF5b3V0LWFkdmFuY2VkL3VpLWZvcm0tbGF5b3V0LWFkdmFuY2VkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1SYWRpb1RhZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLXJhZGlvLXRhZy91aS1mb3JtLXJhZGlvLXRhZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtQ2hlY2tib3gyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tY2hlY2tib3gyL3VpLWZvcm0tY2hlY2tib3gyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1UaXRsZVNtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tdGl0bGUtc20vdWktZm9ybS10aXRsZS1zbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktZm9ybS1yYWRpby91aS1mb3JtLXJhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1mb3JtLWlucHV0L3VpLWZvcm0taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUVycm9yTXNnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tZXJyb3ItbXNnL3VpLWZvcm0tZXJyb3ItbXNnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUZvcm1EYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tZGF0ZS91aS1mb3JtLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRm9ybUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tY2hlY2tib3gvdWktZm9ybS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlGb3JtU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWZvcm0tc2VsZWN0L3VpLWZvcm0tc2VsZWN0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktaW5mb3JtYXRpb24vdWktaW5mb3JtYXRpb24uY29tcG9uZW50JzsgXG5pbXBvcnQgeyBVaUluZm9ybWF0aW9uQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWluZm9ybWF0aW9uLWJ0bi91aS1pbmZvcm1hdGlvbi1idG4uY29tcG9uZW50JztcbmltcG9ydCB7IFVpSW5mb3JtYXRpb25Db250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWluZm9ybWF0aW9uLWNvbnRlbnQvdWktaW5mb3JtYXRpb24tY29udGVudC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUluZm9UZXh0MUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1pbmZvLXRleHQxL3VpLWluZm8tdGV4dDEuY29tcG9uZW50JztcbmltcG9ydCB7IFVpSW5mb1RleHQyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWluZm8tdGV4dDIvdWktaW5mby10ZXh0Mi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUluZmluaXRlU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWluZmluaXRlLXNjcm9sbC91aS1pbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlJdGVtU2xpZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1pdGVtLXNsaWRpbmcvdWktaXRlbS1zbGlkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUl0ZW1PcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLWl0ZW0tc2xpZGluZy91aS1pdGVtLW9wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFVpSXRlbU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1pdGVtLXNsaWRpbmcvdWktaXRlbS1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFVpSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1pdGVtLXNsaWRpbmcvdWktaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaUxpbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbGluay91aS1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUxpbmtCZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1saW5rLWJnL3VpLWxpbmstYmcuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlMaXN0RGF0YTJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbGlzdC1kYXRhMi91aS1saXN0LWRhdGEyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpTG9hZGluZ0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1sb2FkaW5nLWJveC91aS1sb2FkaW5nLWJveC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVaU1vZGFsU3R5bGVJbWdCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLW1vZGFsLXN0eWxlLWltZy1iYXNlL3VpLW1vZGFsLXN0eWxlLWltZy1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaU1vZGFsU3R5bGVUZXh0MUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS10ZXh0MS91aS1tb2RhbC1zdHlsZS10ZXh0MS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlNb2RhbFN0eWxlQ3VzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1tb2RhbC1zdHlsZS1jdXN0L3VpLW1vZGFsLXN0eWxlLWN1c3QuY29tcG9uZW50JztcbmltcG9ydCB7IFVpTW9kYWxCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLW1vZGFsLWJhc2UvdWktbW9kYWwtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlNb2RhbFN0eWxlRmVlZGJhY2tDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbW9kYWwtc3R5bGUtZmVlZGJhY2svdWktbW9kYWwtc3R5bGUtZmVlZGJhY2suY29tcG9uZW50JztcbmltcG9ydCB7IFVpTW9kYWxTdHlsZU1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktbW9kYWwtc3R5bGUtbWVudS91aS1tb2RhbC1zdHlsZS1tZW51LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktcHJvZ3Jlc3MvdWktcHJvZ3Jlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IFVpUHJvZ3Jlc3NTdGVwcGVyU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS91aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVByb2dyZXNzU3RlcHBlclN0eWxlQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktcHJvZ3Jlc3Mtc3RlcHBlci1zdHlsZS1jaGlsZC91aS1wcm9ncmVzcy1zdGVwcGVyLXN0eWxlLWNoaWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVByb2dyZXNzQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXByb2dyZXNzLWNpcmNsZS91aS1wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVWlSZWZyZXNoSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS1yZWZyZXNoLWljb24vdWktcmVmcmVzaC1pY29uLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHsgVWlTd2l0Y2hDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXN3aXRjaC1jb250ZW50L3VpLXN3aXRjaC1jb250ZW50LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpVGFiU3R5bGUxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYi1zdHlsZTEvdWktdGFiLXN0eWxlMS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJTdHlsZTJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFiLXN0eWxlMi91aS10YWItc3R5bGUyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYkNoaWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYi1jaGlsZC91aS10YWItY2hpbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFiTW9yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWItbW9yZS91aS10YWItbW9yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYi1wYWdlL3VpLXRhYi1wYWdlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpVGFibGVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLWNvbnRlbnQvdWktdGFibGUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS1yb3cvdWktdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlUm93SGVhZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS1yb3ctaGVhZC91aS10YWJsZS1yb3ctaGVhZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJsZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtaXRlbS91aS10YWJsZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS1jYXJkL3VpLXRhYmxlLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLWxpc3QvdWktdGFibGUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtbGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtdGl0bGUvdWktdGFibGUtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVpQ29sbGFwc2VDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLWNvbGxhcHNlLWNvbnRlbnQvdWktdGFibGUtY29sbGFwc2UtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJsZUVkaXRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLWVkaXQtY29udGVudC91aS10YWJsZS1lZGl0LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVMaXN0MkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10YWJsZS1saXN0Mi91aS10YWJsZS1saXN0Mi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJsZUNvbnRlbnQyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLWNvbnRlbnQyL3VpLXRhYmxlLWNvbnRlbnQyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlVGV4dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRhYmxlLXRleHQtZ3JvdXAvdWktdGFibGUtdGV4dC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUYWJsZUNvbnRyb2xCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWktdGFibGUtY29udHJvbC1iYXIvdWktdGFibGUtY29udHJvbC1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGVhbVRpdGxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10ZWFtLXRpdGxlLXRleHQvdWktdGVhbS10aXRsZS10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRleHRUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRleHQtdHlwZS91aS10ZXh0LXR5cGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGV4dFR5cGVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRleHQtdHlwZS91aS10ZXh0LXR5cGUtaXRlbS91aS10ZXh0LXR5cGUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlUaXRsZVN0eWxlMUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aS10aXRsZS1zdHlsZTEvdWktdGl0bGUtc3R5bGUxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRpdGxlVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VpLXRpdGxlLXRhYi91aS10aXRsZS10YWIuY29tcG9uZW50JztcblxuXG5cblxuZXhwb3J0IGNsYXNzIFVpSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IDxhbnk+e1xuICAgICdzd2lwZSc6IHsgdmVsb2NpdHk6IDAuNCwgdGhyZXNob2xkOiAyMCwgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCB9IC8vIG92ZXJyaWRlIGRlZmF1bHQgc2V0dGluZ3NcbiAgfTtcbiAgLy8gYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgLy8gICBsZXQgbWMgPSBuZXcgSGFtbWVyKGVsZW1lbnQsIHtcbiAgLy8gICAgIHRvdWNoQWN0aW9uOiAncGFuLXknLFxuICAvLyAgIH0pO1xuICAvLyAgIHJldHVybiBtYztcbiAgLy8gfVxuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgdG91Y2hBY3Rpb246ICdwYW4teSdcbiAgICB9O1xuXG4gICAgLy8gY29uc29sZS53YXJuKCdlbGVtZW50LmF0dHJpYnV0ZXNbXFwnZGF0YS1tYy1vcHRpb25zXFwnXScsIGVsZW1lbnQuYXR0cmlidXRlc1snZGF0YS1tYy1vcHRpb25zJ10pO1xuXG4gICAgaWYgKGVsZW1lbnQuYXR0cmlidXRlc1snZGF0YS1tYy1vcHRpb25zJ10pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBwYXJzZU9wdGlvbnMgPSBKU09OLnBhcnNlKGVsZW1lbnQuYXR0cmlidXRlc1snZGF0YS1tYy1vcHRpb25zJ10ubm9kZVZhbHVlKTtcbiAgICAgICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucztcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvL3RvZG8gdGhyb3cgZXJyb3JcbiAgICAgICAgY29uc29sZS53YXJuKCdBbiBlcnJvciBvY2N1cnJlZCB3aGVuIGF0dGVtcHRpbmcgdG8gcGFyc2UgSGFtbWVyLmpzIG9wdGlvbnM6ICcsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS53YXJuKCdvcHRpb25zJywgb3B0aW9ucyk7XG5cbiAgICBsZXQgbWMgPSBuZXcgSGFtbWVyKGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgLy8ga2VlcCBkZWZhdWx0IGFuZ3VsYXIgY29uZmlnXG4gICAgLy8gbWMuZ2V0KCdwaW5jaCcpLnNldCh7ZW5hYmxlOiB0cnVlfSk7XG4gICAgLy8gbWMuZ2V0KCdyb3RhdGUnKS5zZXQoe2VuYWJsZTogdHJ1ZX0pO1xuXG4gICAgLy8gY29uc29sZS53YXJuKCd0aGlzLm92ZXJyaWRlcycsIHRoaXMub3ZlcnJpZGVzKTtcblxuICAgIC8vIC8vIHJldGFpbiBzdXBwb3J0IGZvciBhbmd1bGFyIG92ZXJyaWRlcyBvYmplY3RcbiAgICAvLyBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiB0aGlzLm92ZXJyaWRlcykge1xuICAgIC8vICAgbWMuZ2V0KGV2ZW50TmFtZSkuc2V0KHRoaXMub3ZlcnJpZGVzW2V2ZW50TmFtZV0pO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnNvbGUud2FybigneW8nLCBvcHRpb25zLmhhc093blByb3BlcnR5KCd0b3VjaEFjdGlvbicpLCBvcHRpb25zLnRvdWNoQWN0aW9uID09PSAncGFuLXgnKTtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndG91Y2hBY3Rpb24nKVxuICAgICAgJiYgb3B0aW9ucy50b3VjaEFjdGlvbiA9PT0gJ3Bhbi14Jykge1xuICAgICAgbWMuZ2V0KCdzd2lwZScpLnNldCh7IHZlbG9jaXR5OiAwLjQsIHRocmVzaG9sZDogMjAsIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1jO1xuICB9IC8vIGVuZCBidWlsZEhhbW1lclxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29yZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSwgXG4gICAgQ291bnRvTW9kdWxlLFxuICAgIE54SWNvbk1vZHVsZSxcbiAgICBOeFBvcG92ZXJNb2R1bGUsXG4gICAgTnhCdXR0b25Nb2R1bGUsXG4gICAgTnhDaGVja2JveE1vZHVsZSxcbiAgICBOeFByb2dyZXNzU3RlcHBlck1vZHVsZSxcbiAgICBOeFJhZGlvTW9kdWxlLFxuICAgIE54Rm9ybWZpZWxkTW9kdWxlLFxuICAgIE54RHJvcGRvd25Nb2R1bGUsXG4gICAgTnhEYXRlZmllbGRNb2R1bGUsXG4gICAgTnhOYXRpdmVEYXRlTW9kdWxlLFxuICAgIE54UHJvZ3Jlc3NiYXJNb2R1bGUsXG4gICAgTnhJbnB1dE1vZHVsZSxcbiAgICBOeE1lc3NhZ2VNb2R1bGUsXG4gICAgTnhHcmlkTW9kdWxlLFxuICAgIE54TW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE54QWNjb3JkaW9uTW9kdWxlLFxuICAgIE54U3dpdGNoZXJNb2R1bGUsXG4gICAgQ2FsZW5kYXJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUZhY3Rvcnk6IGFkYXB0ZXJGYWN0b3J5XG4gICAgfSlcbiAgICAsIElvbmljTW9kdWxlLmZvclJvb3QoeyBtb2RlOiAnaW9zJyB9KVxuICAgICwgT3dsRGF0ZVRpbWVNb2R1bGVcbiAgICAsIE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlXG4gICAgLCBGb3Jtc01vZHVsZVxuICAgICwgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBVaUNvbXBvbmVudFxuICAgICwgVWlCdG5Db21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NDb21wb25lbnRcbiAgICAsIENhbGVuZGFyQ29tcG9uZW50XG4gICAgLCBVaUNhbGVuZGFyWWVhckNvbXBvbmVudFxuICAgICwgVWlDYWxlbmRhclllYXJNb250aENvbXBvbmVudFxuICAgICwgVWlGb3JtQ2hlY2tib3hDb21wb25lbnRcbiAgICAsIFVpRm9ybVNlbGVjdENvbXBvbmVudFxuICAgICwgVWlCdG5MaWtlQWRkQ29tcG9uZW50XG4gICAgLCBVaUZvcm1UaXRsZVNtQ29tcG9uZW50XG4gICAgLCBVaUZvcm1SYWRpb0NvbXBvbmVudFxuICAgICwgVWlGb3JtSW5wdXRDb21wb25lbnRcbiAgICAsIFVpRm9ybUVycm9yTXNnQ29tcG9uZW50XG4gICAgLCBVaUZvcm1EYXRlQ29tcG9uZW50XG4gICAgLCBVaVRpdGxlU3R5bGUxQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVGZWVkYmFja0NvbXBvbmVudFxuICAgICwgVUlNYWluTGVmdENvbXBvbmVudFxuICAgICwgVUlNYWluU2lkZU1lbnVDb21wb25lbnRcbiAgICAsIFVpTWFpbkNvbGxhcHNlQ29tcG9uZW50XG4gICAgLCBVaU1haW5GdWxsQ29tcG9uZW50XG4gICAgLCBVSUlubmVyUGFnZUNvbXBvbmVudFxuICAgICwgVWlJbm5lclN0ZXBDb21wb25lbnRcbiAgICAsIFVpSW5uZXJGdWxsQ29tcG9uZW50XG4gICAgLCBVaUl0ZW1TbGlkaW5nQ29tcG9uZW50XG4gICAgLCBVaUl0ZW1PcHRpb25zQ29tcG9uZW50XG4gICAgLCBVaUl0ZW1PcHRpb25Db21wb25lbnRcbiAgICAsIFVpSXRlbUNvbXBvbmVudFxuICAgICwgVWlNb2RhbENvbmZpcm1Db21wb25lbnRcbiAgICAsIFVpRm9ybUNoZWNrYm94MkNvbXBvbmVudFxuICAgICwgVWlJbmZvVGV4dDFDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VUZXh0MUNvbXBvbmVudFxuICAgICwgVWlDYXJkU3R5bGVUYWcxQ29tcG9uZW50XG4gICAgLCBVaUNvbGxhcHNlQ2FyZDFDb21wb25lbnRcbiAgICAsIFVpSW5mb1RleHQyQ29tcG9uZW50XG4gICAgLCBVaUxpbmtDb21wb25lbnRcbiAgICAsIFVpRm9ybVJhZGlvVGFnQ29tcG9uZW50XG4gICAgLCBVaUJ0bkxheW91dENvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZUdyb3VwQ29tcG9uZW50XG4gICAgLCBVaUZvcm1MYXlvdXRBZHZhbmNlZENvbXBvbmVudFxuICAgICwgVWlUYWJQYWdlQ29tcG9uZW50XG4gICAgLCBVaUNvbnRlbnRCR2FwQ29tcG9uZW50XG4gICAgLCBVaVRhYlN0eWxlMUNvbXBvbmVudFxuICAgICwgVWlUYWJTdHlsZTJDb21wb25lbnRcbiAgICAsIFVpVGl0bGVUYWJDb21wb25lbnRcbiAgICAsIFVpVGFiQ2hpbGRDb21wb25lbnRcbiAgICAsIFVpVGFiTW9yZUNvbXBvbmVudFxuICAgICwgVWlGb3JtTGF5b3V0Um93Q29tcG9uZW50XG4gICAgLCBVaUZvcm1MYXlvdXRDb2xDb21wb25lbnRcbiAgICAsIFVpRGF0YUdyb3VwQ29tcG9uZW50XG4gICAgLCBVaUxpbmtCZ0NvbXBvbmVudFxuICAgICwgVWlGb3JtQ2hlY2tib3gzQ29tcG9uZW50XG4gICAgLCBVaUZvcm1TZWFyY2hDb21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NTdGVwcGVyU3R5bGVDb21wb25lbnRcbiAgICAsIFVpUHJvZ3Jlc3NTdGVwcGVyU3R5bGVDaGlsZENvbXBvbmVudFxuICAgICwgVWlJbmZvcm1hdGlvbkJ0bkNvbXBvbmVudFxuICAgICwgVWlJbmZvcm1hdGlvbkNvbnRlbnRDb21wb25lbnRcbiAgICAsIFVpTGlzdERhdGEyQ29tcG9uZW50XG4gICAgLCBVaUZvcm1FcnJvck1zZ0luZm9Db21wb25lbnRcbiAgICAsIFVpRm9ybUVycm9yTXNnVGl0bGVDb21wb25lbnRcbiAgICAsIFVpRm9ybUVycm9yTXNnTGlzdENvbXBvbmVudFxuICAgICwgVWlUZXh0VHlwZUNvbXBvbmVudFxuICAgICwgVWlUZXh0VHlwZUl0ZW1Db21wb25lbnRcbiAgICAsIFVpRGV0ZWN0aW9uU2Nyb2xsQ29tcG9uZW50XG4gICAgLCBVaVByb2dyZXNzQ2lyY2xlQ29tcG9uZW50XG4gICAgLCBVaUZvcm1UaW1lcGlja2VyQ29tcG9uZW50XG4gICAgLCBVaUZvcm1Td2l0Y2hlckNvbXBvbmVudFxuICAgICwgVWlUYWJsZUNvbnRlbnRDb21wb25lbnRcbiAgICAsIFVpVGFibGVSb3dDb21wb25lbnRcbiAgICAsIFVpVGFibGVSb3dIZWFkQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlSXRlbUNvbXBvbmVudFxuICAgICwgVWlUYWJsZUNhcmRDb21wb25lbnRcbiAgICAsIFVpVGFibGVMaXN0Q29tcG9uZW50XG4gICAgLCBMaXN0SXRlbUNvbXBvbmVudFxuICAgICwgVWlUYWJsZVRpdGxlQ29tcG9uZW50XG4gICAgLCBVaUNvbGxhcHNlQ29udGVudENvbXBvbmVudFxuICAgICwgVWlFbXB0eURlZmF1bHRDb21wb25lbnRcbiAgICAsIFVpRm9ybVJhZGlvR3JvdXBcbiAgICAsIFVpQ2FyZENvbnRlbnRCdG5Db21wb25lbnRcbiAgICAsIFVpVGFibGVFZGl0Q29udGVudENvbXBvbmVudFxuICAgICwgVWlJbmZpbml0ZVNjcm9sbENvbXBvbmVudFxuICAgICwgVWlNb2RhbFN0eWxlTWVudUNvbXBvbmVudFxuICAgICwgVWlUYWJsZUxpc3QyQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlQ29udGVudDJDb21wb25lbnRcbiAgICAsIFVpVGVhbVRpdGxlVGV4dENvbXBvbmVudFxuICAgICwgVWlNb2RhbFN0eWxlSW1nQmFzZUNvbXBvbmVudFxuICAgICwgVWlNb2RhbFN0eWxlVGV4dDFDb21wb25lbnRcbiAgICAsIFVpU3dpdGNoQ29udGVudENvbXBvbmVudFxuICAgICwgVWlDYWxlbmRhck1vbnRoQ29tcG9uZW50XG4gICAgLCBVaVJlZnJlc2hJY29uQ29tcG9uZW50XG4gICAgLCBVaUZvcm1SYWRpbzJDb21wb25lbnRcbiAgICAsIFVpQ2FsZW5kYXJFdmVudExpc3RDb21wb25lbnRcbiAgICAsIFVpQ2FsZW5kYXJNb250aENvbGxhcHNlQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVDdXN0Q29tcG9uZW50XG4gICAgLCBVaU1vZGFsQmFzZUNvbXBvbmVudFxuICAgICwgVWlUYWJsZVRleHRHcm91cENvbXBvbmVudFxuICAgICwgVWlUYWJsZUNvbnRyb2xCYXJDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VDb250ZW50U2hvd0NvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZUNvbnRlbnREZXRhaWxDb21wb25lbnRcbiAgICAsIFVpRm9ybVRleHRhcmVhQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsTXNnQ29tcG9uZW50XG4gICAgLCBVaUZvcm1UZXh0YXJlYUNvbXBvbmVudFxuICAgICwgVWlMb2FkaW5nQm94Q29tcG9uZW50XG4gICAgLCBVaUluZm9ybWF0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYWxlbmRhckNvbXBvbmVudFxuICAgICwgVUlNYWluTGVmdENvbXBvbmVudFxuICAgICwgVUlNYWluU2lkZU1lbnVDb21wb25lbnRcbiAgICAsIFVpTWFpbkNvbGxhcHNlQ29tcG9uZW50XG4gICAgLCBVaU1haW5GdWxsQ29tcG9uZW50XG4gICAgLCBVSUlubmVyUGFnZUNvbXBvbmVudFxuICAgICwgVWlJbm5lclN0ZXBDb21wb25lbnRcbiAgICAsIFVpSW5uZXJGdWxsQ29tcG9uZW50XG4gICAgLCBVaUNvbXBvbmVudFxuICAgICwgVWlJdGVtU2xpZGluZ0NvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZVRleHQxQ29tcG9uZW50XG4gICAgLCBVaUNhcmRTdHlsZVRhZzFDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VDYXJkMUNvbXBvbmVudFxuICAgICwgVWlJbmZvVGV4dDJDb21wb25lbnRcbiAgICAsIFVpTGlua0NvbXBvbmVudFxuICAgICwgVWlGb3JtUmFkaW9UYWdDb21wb25lbnRcbiAgICAsIFVpQnRuQ29tcG9uZW50XG4gICAgLCBVaVByb2dyZXNzQ29tcG9uZW50XG4gICAgLCBDYWxlbmRhckNvbXBvbmVudFxuICAgICwgVWlGb3JtQ2hlY2tib3hDb21wb25lbnRcbiAgICAsIFVpRm9ybVNlbGVjdENvbXBvbmVudFxuICAgICwgVWlCdG5MaWtlQWRkQ29tcG9uZW50XG4gICAgLCBVaUZvcm1UaXRsZVNtQ29tcG9uZW50XG4gICAgLCBVaUZvcm1JbnB1dENvbXBvbmVudFxuICAgICwgVWlGb3JtRXJyb3JNc2dDb21wb25lbnRcbiAgICAsIFVpRm9ybURhdGVDb21wb25lbnRcbiAgICAsIFVpVGl0bGVTdHlsZTFDb21wb25lbnRcbiAgICAsIFVpTW9kYWxTdHlsZUZlZWRiYWNrQ29tcG9uZW50XG4gICAgLCBVaUl0ZW1PcHRpb25zQ29tcG9uZW50XG4gICAgLCBVaUl0ZW1PcHRpb25Db21wb25lbnRcbiAgICAsIFVpSXRlbUNvbXBvbmVudFxuICAgICwgVWlNb2RhbENvbmZpcm1Db21wb25lbnRcbiAgICAsIFVpRm9ybUNoZWNrYm94MkNvbXBvbmVudFxuICAgICwgVWlJbmZvVGV4dDFDb21wb25lbnRcbiAgICAsIFVpQnRuTGF5b3V0Q29tcG9uZW50XG4gICAgLCBVaUNvbGxhcHNlR3JvdXBDb21wb25lbnRcbiAgICAsIFVpRm9ybUxheW91dEFkdmFuY2VkQ29tcG9uZW50XG4gICAgLCBVaUZvcm1MYXlvdXRSb3dDb21wb25lbnRcbiAgICAsIFVpRm9ybUxheW91dENvbENvbXBvbmVudFxuICAgICwgVWlEYXRhR3JvdXBDb21wb25lbnRcbiAgICAsIFVpVGFiU3R5bGUyQ29tcG9uZW50XG4gICAgLCBVaVRhYkNoaWxkQ29tcG9uZW50XG4gICAgLCBOeEljb25Nb2R1bGVcbiAgICAsIFVpTGlua0JnQ29tcG9uZW50XG4gICAgLCBVaUxpc3REYXRhMkNvbXBvbmVudFxuICAgICwgVWlGb3JtQ2hlY2tib3gzQ29tcG9uZW50XG4gICAgLCBVaUZvcm1TZWFyY2hDb21wb25lbnRcbiAgICAsIFVpRm9ybVNlbGVjdENvbXBvbmVudFxuICAgICwgVWlUZXh0VHlwZUNvbXBvbmVudFxuICAgICwgVWlUZXh0VHlwZUl0ZW1Db21wb25lbnRcbiAgICAsIFVpRm9ybVRpbWVwaWNrZXJDb21wb25lbnRcbiAgICAsIFVpRm9ybVN3aXRjaGVyQ29tcG9uZW50XG4gICAgLCBVaVByb2dyZXNzQ2lyY2xlQ29tcG9uZW50XG4gICAgLCBVaUZvcm1SYWRpb0dyb3VwXG4gICAgLCBVaUluZmluaXRlU2Nyb2xsQ29tcG9uZW50XG4gICAgLCBVaVByb2dyZXNzU3RlcHBlclN0eWxlQ29tcG9uZW50XG4gICAgLCBVaUNhcmRDb250ZW50QnRuQ29tcG9uZW50XG4gICAgLCBVaVRhYlBhZ2VDb21wb25lbnRcbiAgICAsIFVpQ29udGVudEJHYXBDb21wb25lbnRcbiAgICAsIFVpVGFiU3R5bGUxQ29tcG9uZW50XG4gICAgLCBVaVRpdGxlVGFiQ29tcG9uZW50XG4gICAgLCBVaUluZm9ybWF0aW9uQnRuQ29tcG9uZW50XG4gICAgLCBVaUluZm9ybWF0aW9uQ29udGVudENvbXBvbmVudFxuICAgICwgVWlUYWJsZUxpc3RDb21wb25lbnRcbiAgICAsIFVpVGFibGVMaXN0MkNvbXBvbmVudFxuICAgICwgVWlUYWJsZUNvbnRlbnRDb21wb25lbnRcbiAgICAsIFVpVGFibGVDb250ZW50MkNvbXBvbmVudFxuICAgICwgVWlUYWJsZUVkaXRDb250ZW50Q29tcG9uZW50XG4gICAgLCBVaVRhYmxlQ2FyZENvbXBvbmVudFxuICAgICwgVWlUYWJsZVJvd0NvbXBvbmVudFxuICAgICwgVWlUYWJsZVJvd0hlYWRDb21wb25lbnRcbiAgICAsIFVpVGFibGVJdGVtQ29tcG9uZW50XG4gICAgLCBVaVRhYmxlVGl0bGVDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VDb250ZW50Q29tcG9uZW50XG4gICAgLCBMaXN0SXRlbUNvbXBvbmVudFxuICAgICwgVWlUZWFtVGl0bGVUZXh0Q29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVJbWdCYXNlQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsU3R5bGVUZXh0MUNvbXBvbmVudFxuICAgICwgVWlEZXRlY3Rpb25TY3JvbGxDb21wb25lbnRcbiAgICAsIFVpU3dpdGNoQ29udGVudENvbXBvbmVudFxuICAgICwgVWlSZWZyZXNoSWNvbkNvbXBvbmVudFxuICAgICwgVWlGb3JtUmFkaW8yQ29tcG9uZW50XG4gICAgLCBVaUNhbGVuZGFyRXZlbnRMaXN0Q29tcG9uZW50XG4gICAgLCBVaUNhbGVuZGFyTW9udGhDb2xsYXBzZUNvbXBvbmVudFxuICAgICwgVWlNb2RhbFN0eWxlQ3VzdENvbXBvbmVudFxuICAgICwgVWlUYWJsZVRleHRHcm91cENvbXBvbmVudFxuICAgICwgVWlUYWJsZUNvbnRyb2xCYXJDb21wb25lbnRcbiAgICAsIFVpQ29sbGFwc2VDb250ZW50U2hvd0NvbXBvbmVudFxuICAgICwgVWlDb2xsYXBzZUNvbnRlbnREZXRhaWxDb21wb25lbnRcbiAgICAsIFVpRm9ybVRleHRhcmVhQ29tcG9uZW50XG4gICAgLCBVaU1vZGFsTXNnQ29tcG9uZW50XG4gICAgLCBVaUxvYWRpbmdCb3hDb21wb25lbnRcbiAgICAsIFVpSW5mb3JtYXRpb25Db21wb25lbnRcbiAgICAsIFVpRm9ybVJhZGlvQ29tcG9uZW50XG4gICAgLCBVaUVtcHR5RGVmYXVsdENvbXBvbmVudFxuICAgICwgVWlUYWJNb3JlQ29tcG9uZW50XG4gICAgLCBVaVByb2dyZXNzU3RlcHBlclN0eWxlQ2hpbGRDb21wb25lbnRcbiAgICAsIFVpRm9ybUVycm9yTXNnSW5mb0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLFxuICAgIHVzZUNsYXNzOiBVaUhhbW1lckNvbmZpZ1xuICB9LE51bWJlckZvcm1hdFBpcGVdXG59KVxuXG5leHBvcnQgY2xhc3MgVUlNb2R1bGUge1xuXG59XG4iXX0=