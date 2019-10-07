/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { UiTabStyle1Component } from '../ui-tab-style1/ui-tab-style1.component';
import { UiTabStyle2Component } from '../ui-tab-style2/ui-tab-style2.component';
export class UiTitleTabComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    tabLength() {
        // console.log(this.tabs1,this.tabs2);
        if (this.tabs1.length != 0 || this.tabs2.length != 0) {
            if (this.tabs1.length != 0) {
                return this.tabs1.first.tabs.length;
            }
            else {
                // console.log(this.tabs2);
                return this.tabs2.first.tabs.length;
            }
        }
        else {
            //todo throw error
            console.warn('You can only put <app-ui-tab-style1 tabInfo> or <app-ui-tab-style2 tabInfo> in it.');
        }
    }
}
UiTitleTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-title-tab',
                template: "<div class=\"ui-title-tab\" [ngClass]=\"{'tab-length-2':tabLength()==2,\n                                      'tab-length-3':tabLength()==3,\n                                      'tab-length-4':tabLength()==4,\n                                      'tab-length-5':tabLength()>5}\">\n  <div class=\"title-content\">\n    <ng-content select=\"[titleInfo]\"></ng-content>\n  </div>\n  <div class=\"tab-content\">\n    <ng-content select=\"[tabInfo]\"></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.ui-title-tab{font-size:0;display:flex}@media only screen and (min-width:768px){.ui-title-tab .title-content:before{display:inline-block;content:'';width:0;height:100%;vertical-align:middle}.ui-title-tab .title-content ::ng-deep app-ui-title-style1{display:inline-block;vertical-align:middle;max-width:calc(100% - 1px)}.ui-title-tab .title-content{width:calc(100% - 375px)}.ui-title-tab .tab-content{max-width:375px}.ui-title-tab.tab-length-2 .title-content{width:calc(100% - 188px)}.ui-title-tab.tab-length-2 .tab-content{width:188px}.ui-title-tab.tab-length-3 .title-content{width:calc(100% - 281px)}.ui-title-tab.tab-length-3 .tab-content{width:281px}.ui-title-tab.tab-length-4 .title-content{width:calc(100% - 375px)}.ui-title-tab.tab-length-4 .tab-content{width:375px}.ui-title-tab.tab-length-5 .title-content{width:calc(100% - 375px)}.ui-title-tab.tab-length-5 .tab-content{width:375px}}@media only screen and (max-width:767px){.ui-title-tab{display:block}.ui-title-tab .title-content{margin-bottom:0}}"]
            }] }
];
UiTitleTabComponent.ctorParameters = () => [];
UiTitleTabComponent.propDecorators = {
    tabs1: [{ type: ContentChildren, args: [UiTabStyle1Component,] }],
    tabs2: [{ type: ContentChildren, args: [UiTabStyle2Component,] }]
};
if (false) {
    /** @type {?} */
    UiTitleTabComponent.prototype.tabs1;
    /** @type {?} */
    UiTitleTabComponent.prototype.tabs2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGl0bGUtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdWktdGl0bGUtdGFiL3VpLXRpdGxlLXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBZSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUdoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQVNoRixNQUFNO0lBTUosZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFDRCxTQUFTO1FBQ1Asc0NBQXNDO1FBQ3RDLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUNsRCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztnQkFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3JDO2lCQUNHO2dCQUNGLDJCQUEyQjtnQkFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3JDO1NBQ0Y7YUFDRztZQUNGLGtCQUFrQjtZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLG9GQUFvRixDQUFDLENBQUM7U0FDcEc7SUFFSCxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLCtlQUE0QztnQkFFNUMsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O29CQUVFLGVBQWUsU0FBQyxvQkFBb0I7b0JBR3BDLGVBQWUsU0FBQyxvQkFBb0I7Ozs7SUFIckMsb0NBQThFOztJQUc5RSxvQ0FBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlUYWJTdHlsZTFDb21wb25lbnQgfSBmcm9tICcuLi91aS10YWItc3R5bGUxL3VpLXRhYi1zdHlsZTEuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFiTW9yZUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLXRhYi1tb3JlL3VpLXRhYi1tb3JlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVpVGFiU3R5bGUyQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktdGFiLXN0eWxlMi91aS10YWItc3R5bGUyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYkNoaWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktdGFiLWNoaWxkL3VpLXRhYi1jaGlsZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGl0bGUtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRpdGxlLXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLXRpdGxlLXRhYi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpVGl0bGVUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFVpVGFiU3R5bGUxQ29tcG9uZW50KSB0YWJzMTogUXVlcnlMaXN0PFVpVGFiU3R5bGUxQ29tcG9uZW50PjtcbiAgLy8gQENvbnRlbnRDaGlsZHJlbihVaVRhYkNoaWxkQ29tcG9uZW50KSB0YWIxOiBRdWVyeUxpc3Q8VWlUYWJDaGlsZENvbXBvbmVudD47XG4gIC8vIEBDb250ZW50Q2hpbGRyZW4oVWlUYWJDaGlsZENvbXBvbmVudCkgdGFiMTogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICBAQ29udGVudENoaWxkcmVuKFVpVGFiU3R5bGUyQ29tcG9uZW50KSB0YWJzMjogUXVlcnlMaXN0PFVpVGFiU3R5bGUyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIHRhYkxlbmd0aCgpe1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFiczEsdGhpcy50YWJzMik7XG4gICAgaWYodGhpcy50YWJzMS5sZW5ndGggIT0gMCB8fCB0aGlzLnRhYnMyLmxlbmd0aCAhPSAwKXtcbiAgICAgIGlmKHRoaXMudGFiczEubGVuZ3RoICE9IDApe1xuICAgICAgICByZXR1cm4gdGhpcy50YWJzMS5maXJzdC50YWJzLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFiczIpO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJzMi5maXJzdC50YWJzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vdG9kbyB0aHJvdyBlcnJvclxuICAgICAgY29uc29sZS53YXJuKCdZb3UgY2FuIG9ubHkgcHV0IDxhcHAtdWktdGFiLXN0eWxlMSB0YWJJbmZvPiBvciA8YXBwLXVpLXRhYi1zdHlsZTIgdGFiSW5mbz4gaW4gaXQuJyk7XG4gICAgfVxuICAgIFxuICB9XG59XG4iXX0=