/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TABLETIELESTYLETYPE } from '../../model';
var UiTableTitleComponent = /** @class */ (function () {
    function UiTableTitleComponent() {
        this.titleText = '';
        this.subTitleText = '';
        this.event = true;
        this.eventIcon = '';
        this.onClick = new EventEmitter();
        this.styleType = TABLETIELESTYLETYPE.STYLE_1;
        this.isShowTitle = true;
    }
    /**
     * @return {?}
     */
    UiTableTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UiTableTitleComponent.prototype.click = /**
     * @return {?}
     */
    function () {
        this.onClick.emit();
    };
    /**
     * @return {?}
     */
    UiTableTitleComponent.prototype.controlStyle = /**
     * @return {?}
     */
    function () {
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_1) {
            return 'style-1';
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_2) {
            return "style-2";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_3) {
            return "style-3";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_4) {
            return "style-4";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_5) {
            return "style-5";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_6) {
            return "style-6";
        }
        if (this.styleType == TABLETIELESTYLETYPE.STYLE_7) {
            return "style-7";
        }
    };
    UiTableTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-title',
                    template: "<div class=\"table-title {{controlStyle()}}\" [ngClass]=\"isShowTitle ? '': 'style-no-title'\">\n  <div class=\"title-content\">\n    <div class=\"first-title-content\">{{titleText}}</div>\n    <div class=\"subtitle-content\" *ngIf=\"subTitleText.length\">{{subTitleText}}</div>\n  </div>\n  <div class=\"info-content\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"event-btn\" *ngIf=\"event\" (actionClick)=\"click()\" id=\"btn_goalsettingPen\" Action action=\"goalsettingPen\">\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-title{padding:15px;background-color:#cad4de;position:relative;font-size:0}.table-title .info-content,.table-title .title-content{display:inline-block;vertical-align:top}.table-title .title-content{width:174px}.table-title .title-content .first-title-content{font-size:1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.2px;color:#414141;padding-right:5px;text-align:left}.table-title .title-content .first-title-content:before{display:inline-block;vertical-align:middle;width:0;height:28px;content:''}.table-title .title-content .subtitle-content{font-size:.75rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:2.33;letter-spacing:.2px;color:#767676;margin-top:4px}.table-title .info-content{width:100%;max-width:calc(100% - 174px);text-align:right}.table-title .info-content ::ng-deep app-ui-table-list{display:inline-block}.table-title .event-btn{width:40px;height:40px;border-radius:50%;right:-20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);position:absolute}@media screen and (max-width:1023px){.table-title .info-content,.table-title .title-content{width:100%;max-width:305px;display:block}.table-title .title-content{max-width:calc(100% - 50px);margin-bottom:20px}.table-title .title-content .first-title-content:before{height:30px}.table-title ::ng-deep app-ui-table-list{width:100%}.table-title .event-btn{-webkit-transform:translateY(0);transform:translateY(0);right:15px;top:15px}}.table-title.style-1{min-height:70px;display:flex;width:100%;align-items:center}@media (max-width:1023px){.table-title.style-1 .title-content{margin-bottom:0}}.table-title.style-2 .title-content{margin-bottom:5px;width:100%}.table-title.style-2 .info-content,.table-title.style-2 .title-content{display:block}.table-title.style-2 .info-content{max-width:100%}.table-title.style-2 .info-content ::ng-deep app-ui-table-list .td,.table-title.style-2 .info-content ::ng-deep app-ui-table-list .th{padding:0 8px}.table-title.style-3{display:flex;background-color:#fff;padding:10px 15px;z-index:1}.table-title.style-3 .title-content .first-title-content{color:#007ab3;padding:10px 15px 10px 0}.table-title.style-3 .title-content .first-title-content:before{height:30px}.table-title.style-3 .info-content{flex:1;width:auto;min-width:540px}.table-title.style-3 .event-btn{right:10px;top:auto;bottom:0;-webkit-transform:translateY(50%);transform:translateY(50%);z-index:10}@media screen and (max-width:1023px){.table-title.style-2 .title-content{max-width:calc(100% - 50px);margin-bottom:20px}.table-title.style-2 .info-content{max-width:305px}.table-title.style-3{display:block;padding-bottom:15px}.table-title.style-3 .title-content{margin-bottom:0;max-width:100%}.table-title.style-3 .title-content .first-title-content{padding:0}.table-title.style-3 .info-content{max-width:305px;min-width:0}.table-title.style-3 .event-btn{right:15px}}.table-title.style-4{padding:20px;background-color:#ddeaf1}.table-title.style-4 .title-content{margin-bottom:15px;width:100%}.table-title.style-4 .info-content,.table-title.style-4 .title-content{display:block}.table-title.style-4 .info-content{max-width:100%;text-align:center}.table-title.style-4 .info-content ::ng-deep app-ui-table-list .td,.table-title.style-4 .info-content ::ng-deep app-ui-table-list .th{padding:0 8px}@media screen and (max-width:1023px){.table-title.style-4 .title-content{max-width:calc(100% - 50px);margin-bottom:15px}}.table-title.style-5{background-color:#fff;border-top-right-radius:5px;border-top-left-radius:5px}.table-title.style-5 .title-content .first-title-content{text-align:left}.table-title.style-6 .title-content{width:100%}.table-title.style-6 .info-content{max-width:100%}.table-title.style-6::ng-deep app-ui-table-list{width:100%}.table-title.style-6::ng-deep app-ui-table-list table{width:100%}.table-title.style-7{background-color:#fff;border-top-right-radius:5px;border-top-left-radius:5px}.table-title.style-7 .title-content{display:none}.table-title.style-7 .info-content{max-width:100%}.table-title.style-7::ng-deep app-ui-table-list2{width:100%}.table-title.style-7::ng-deep app-ui-table-list2 .table-list{width:100%}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content{width:100%}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul{width:100%;display:flex}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li{flex:1;display:flex;justify-content:space-between}@media screen and (max-width:500px){.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul{display:block}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li{justify-content:flex-start}}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-title{color:#414141;font-weight:700;text-align:right;flex:0 0 58%}@media screen and (max-width:500px){.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-title{text-align:left;flex:0 0 46%}}.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-content{font-weight:700;flex:0 0 39%}@media screen and (max-width:500px){.table-title.style-7::ng-deep app-ui-table-list2 .table-list .list-content .list-ul .list-li .list-content{text-align:center;flex:0 0 105px}}.table-title.style-no-title>.title-content{display:none}"]
                }] }
    ];
    UiTableTitleComponent.ctorParameters = function () { return []; };
    UiTableTitleComponent.propDecorators = {
        titleText: [{ type: Input }],
        subTitleText: [{ type: Input }],
        event: [{ type: Input }],
        eventIcon: [{ type: Input }],
        onClick: [{ type: Output }],
        styleType: [{ type: Input }],
        isShowTitle: [{ type: Input }]
    };
    return UiTableTitleComponent;
}());
export { UiTableTitleComponent };
if (false) {
    /** @type {?} */
    UiTableTitleComponent.prototype.titleText;
    /** @type {?} */
    UiTableTitleComponent.prototype.subTitleText;
    /** @type {?} */
    UiTableTitleComponent.prototype.event;
    /** @type {?} */
    UiTableTitleComponent.prototype.eventIcon;
    /** @type {?} */
    UiTableTitleComponent.prototype.onClick;
    /** @type {?} */
    UiTableTitleComponent.prototype.styleType;
    /** @type {?} */
    UiTableTitleComponent.prototype.isShowTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS10YWJsZS10aXRsZS91aS10YWJsZS10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWxEO0lBY0U7UUFQUyxjQUFTLEdBQUMsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBQyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFTLElBQUksQ0FBQztRQUNuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBdUIsbUJBQW1CLENBQUMsT0FBTyxDQUFDO1FBQzVELGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBQ0QscUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBQ0QsNENBQVk7OztJQUFaO1FBQ0UsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sRUFBQztZQUMvQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUM7WUFDL0MsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksbUJBQW1CLENBQUMsT0FBTyxFQUFDO1lBQy9DLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sRUFBQztZQUMvQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUM7WUFDL0MsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksbUJBQW1CLENBQUMsT0FBTyxFQUFDO1lBQy9DLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sRUFBQztZQUMvQyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsMmdCQUE4QztvQkFFOUMsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2lCQUMvQzs7Ozs0QkFFRSxLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLE1BQU07NEJBQ04sS0FBSzs4QkFDTCxLQUFLOztJQStCUiw0QkFBQztDQUFBLEFBNUNELElBNENDO1NBdENZLHFCQUFxQjs7O0lBQ2hDLDBDQUFzQjs7SUFDdEIsNkNBQXlCOztJQUN6QixzQ0FBNEI7O0lBQzVCLDBDQUE2Qjs7SUFDN0Isd0NBQXVDOztJQUN2QywwQ0FBcUU7O0lBQ3JFLDRDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUQUJMRVRJRUxFU1RZTEVUWVBFIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFibGUtdGl0bGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktdGFibGUtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS10aXRsZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFibGVUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlVGV4dD0nJztcbiAgQElucHV0KCkgc3ViVGl0bGVUZXh0PScnO1xuICBASW5wdXQoKSBldmVudDpib29sZWFuPXRydWU7XG4gIEBJbnB1dCgpIGV2ZW50SWNvbjpzdHJpbmc9Jyc7XG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBzdHlsZVR5cGU6VEFCTEVUSUVMRVNUWUxFVFlQRSA9IFRBQkxFVElFTEVTVFlMRVRZUEUuU1RZTEVfMTtcbiAgQElucHV0KCkgaXNTaG93VGl0bGUgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGNsaWNrKCl7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoKTtcbiAgfVxuICBjb250cm9sU3R5bGUoKXtcbiAgICBpZih0aGlzLnN0eWxlVHlwZSA9PSBUQUJMRVRJRUxFU1RZTEVUWVBFLlNUWUxFXzEpe1xuICAgICAgcmV0dXJuICdzdHlsZS0xJztcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVUSUVMRVNUWUxFVFlQRS5TVFlMRV8yKXtcbiAgICAgIHJldHVybiBcInN0eWxlLTJcIjtcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVUSUVMRVNUWUxFVFlQRS5TVFlMRV8zKXtcbiAgICAgIHJldHVybiBcInN0eWxlLTNcIjtcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVUSUVMRVNUWUxFVFlQRS5TVFlMRV80KXtcbiAgICAgIHJldHVybiBcInN0eWxlLTRcIjtcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVUSUVMRVNUWUxFVFlQRS5TVFlMRV81KXtcbiAgICAgIHJldHVybiBcInN0eWxlLTVcIjtcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVUSUVMRVNUWUxFVFlQRS5TVFlMRV82KXtcbiAgICAgIHJldHVybiBcInN0eWxlLTZcIjtcbiAgICB9XG4gICAgaWYodGhpcy5zdHlsZVR5cGUgPT0gVEFCTEVUSUVMRVNUWUxFVFlQRS5TVFlMRV83KXtcbiAgICAgIHJldHVybiBcInN0eWxlLTdcIjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==