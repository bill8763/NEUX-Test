/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, HostListener } from '@angular/core';
import { UiInformationService } from './ui-information.service';
import { v4 as uuid } from 'uuid';
import { ActionService } from '@allianzSND/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class UiInformationComponent {
    /**
     * @param {?} informationService
     * @param {?} elementRef
     * @param {?} actionService
     */
    constructor(informationService, elementRef, actionService) {
        this.informationService = informationService;
        this.elementRef = elementRef;
        this.actionService = actionService;
        this.isPopupStyle = true; // true: for i is a popup; false: i is a popover .. 
        this.infoBtnType = 'default'; // default => i icon , customize => ng-content let user input 
        this._isShowContent = false;
        this.styleHasArrow = ''; //style has arrow or not
        this._isHasArrow = true;
        this.minSpaceWindowAndContent = 5;
        this._isInfoContentOverlap = false;
        // popup style 
        this.onClick = new EventEmitter();
        // end of popup style
        this.styleShowContent = 'style-hide'; // style for content show or not
        // info pos style
        this.infoLeft = 'auto'; // ngstyle for info box positon left
        this.infoRight = 'auto'; // ngstyle for info box positon right
        // arrow pos style
        this.arrowLeft = 'auto';
        this.arrowRight = 'auto';
        this.arrowTop = '-3px';
        this.styleInfoZIndex = ''; // style for info content z-index : '' / 'style-show-up'
        this.unsubscribe$ = new Subject();
        this._id = uuid();
    }
    ;
    /**
     * @return {?}
     */
    get isHasArrow() {
        return this._isHasArrow;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isHasArrow(val) {
        this._isHasArrow = val;
        this.styleHasArrow = this._isHasArrow ? '' : 'style-hide';
    }
    // @Input() 
    /**
     * @return {?}
     */
    get isShowContent() {
        return this._isShowContent;
    }
    ;
    /**
     * @param {?} val
     * @return {?}
     */
    set isShowContent(val) {
        this._isShowContent = val;
        if (this._isShowContent) {
            this.informationService.closeOthers(this._id);
        }
        this.styleShowContent = this._isShowContent ? 'style-show' : 'style-hide';
        console.log('set isShowContent');
    }
    // parent selector for check info left/right/center
    /**
     * @return {?}
     */
    get containerSelector() {
        return this._containerSelector;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set containerSelector(value) {
        console.log('in containerSelector set', value);
        this._containerSelector = value;
    }
    /**
     * @return {?}
     */
    get isInfoContentOverlap() {
        return this._isInfoContentOverlap;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isInfoContentOverlap(val) {
        this._isInfoContentOverlap = val; // true
        this.styleInfoZIndex = this._isInfoContentOverlap ? 'style-show-up' : '';
    }
    /**
     * @return {?}
     */
    clickPopupInfoBtn() {
        this.onClick.emit();
    }
    /**
     * @return {?}
     */
    clickBtn() {
        this.isShowContent = !this.isShowContent;
        //this.isShowContentChange.emit(this._isShowContent);
        if (this.isShowContent) {
            console.log('click btn');
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.caculateContentPos();
            }));
            this.informationService.closeOthers(this._id);
        }
    }
    // if you click anywhere, then close info
    /**
     * @param {?} event
     * @return {?}
     */
    documentClick(event) {
        // click event from action
        this.actionService.onActionClick()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
            if (!this.elementRef.nativeElement.contains(resp.event.target)) {
                this.closeBtn();
                // this.changeDector.detectChanges();
            }
        }));
        // click event with no action
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeBtn();
        }
    }
    // renderContentShow(){
    //   setTimeout(()=>{
    //     this.caculateContentPos();
    //   })
    // }
    // decide the content show on center, left, or right 
    // if content need to show on based on window 
    /**
     * @return {?}
     */
    _caculateContentFitwindow() {
        this.infoLeft = -this._btnInfo.x + this.minSpaceWindowAndContent + 'px';
        this.infoRight = 'auto';
        this.arrowLeft = this._btnInfo.x - this.minSpaceWindowAndContent + 3 + 'px';
        this.arrowRight = 'auto';
        console.log('_caculateContentFitwindow', this.infoLeft, this.arrowLeft);
    }
    /**
     * @param {?} infoLeft
     * @param {?} infoRight
     * @param {?} arrowLeft
     * @param {?} arrowRight
     * @return {?}
     */
    _setInfoPosStyle(infoLeft, infoRight, arrowLeft, arrowRight) {
        this.infoLeft = infoLeft;
        this.infoRight = infoRight;
        this.arrowLeft = arrowLeft;
        this.arrowRight = arrowRight;
    }
    // caculate content show pos (if bottom cannot show, then scroll the content)
    /**
     * @return {?}
     */
    caculateContentPos() {
        console.log('containerSelector', this.containerSelector);
        /** @type {?} */
        let containerWidth = 0;
        /** @type {?} */
        let containerHeight = 0;
        // if conatiner is not window, then caculate the container dist between window and container
        /** @type {?} */
        let distWindowAndContainerTop = 0;
        /** @type {?} */
        let distWindowAndContainerLeft = 0;
        /** @type {?} */
        let distWindowAndContainerRight = 0;
        /** @type {?} */
        let distWindowAndContainerBottom = 0;
        if (this.containerSelector != undefined) {
            // if(this.containerSelector.getBoundingClientRect()==undefined){
            //   this.containerSelector = this.containerSelector.elementRef;
            //   console.log('in container undefined');
            // }
            /** @type {?} */
            let containerInfo = this.containerSelector.getBoundingClientRect();
            containerWidth = containerInfo.width; //offsetWidth
            containerHeight = containerInfo.height; //offsetHeight
            console.log('containerInfo', containerInfo);
            console.log('containerInfo containerWidth', containerWidth);
            // get dist window and container
            distWindowAndContainerTop = containerInfo.top;
            distWindowAndContainerLeft = containerInfo.left;
            distWindowAndContainerRight = window.innerWidth - distWindowAndContainerLeft - this.containerSelector.offsetWidth;
            distWindowAndContainerBottom = window.innerHeight - distWindowAndContainerTop - this.containerSelector.offsetHeight;
        }
        else {
            // get window width and height
            containerWidth = window.innerWidth;
            containerHeight = window.innerHeight;
            console.log('containerWidth', containerWidth);
            console.log('containerHeight', containerHeight);
        }
        // get btn pos
        //console.log('infoBtn', this.infoBtn);
        this._btnInfo = this.infoBtn.nativeElement.getBoundingClientRect();
        /** @type {?} */
        let triangleSize = 5;
        // triangle size of content box;
        /** @type {?} */
        let arrowWidth = this.infoArrow.nativeElement.offsetWidth;
        /** @type {?} */
        let arrowSpaceMove = 3;
        // for arrow space because of rotate 
        //console.log('arrowWidth', arrowWidth);
        //console.log('this _btnInfo',this._btnInfo);
        // get btn distance with window
        /** @type {?} */
        let btnWidth = this._btnInfo.width;
        /** @type {?} */
        let btnHeight = this._btnInfo.height;
        /** @type {?} */
        let btnDistLeft = this._btnInfo.x - distWindowAndContainerLeft + btnWidth / 2;
        console.log('this._btnInfo.x', this._btnInfo.x, 'distWindowAndContainerLeft', distWindowAndContainerLeft, 'btnWidth', btnWidth);
        console.log('btnDistLeft', btnDistLeft);
        /** @type {?} */
        let btnDistTop = this._btnInfo.y - distWindowAndContainerTop;
        /** @type {?} */
        let btnDistRight = containerWidth - btnDistLeft;
        console.log('containerWidth', containerWidth, 'btnDistLeft', btnDistLeft);
        /** @type {?} */
        let btnDistBtm = containerHeight - btnDistTop - btnHeight - triangleSize;
        console.log('btnDistBtm', btnDistBtm, 'containerHeight', containerHeight, 'btnDistTop', btnDistTop, 'btnHeight', btnHeight, 'triangleSize', triangleSize, 'this._btnInfo.y', this._btnInfo.y, 'distWindowAndContainerTop', distWindowAndContainerTop);
        // get info box size
        console.log('infoContent', this.infoContent);
        this._contentInfo = this.infoContent.nativeElement.getBoundingClientRect();
        /** @type {?} */
        let contentWidth = this.infoContent.nativeElement.offsetWidth;
        /** @type {?} */
        let contentHeight = this.infoContent.nativeElement.offsetHeight;
        console.log('this _contentInfo', this._contentInfo, 'contentWidth', contentWidth, 'contentHeight', contentHeight);
        // caculate if content show on the btm, if the space is not enough
        if (btnDistBtm < contentHeight) {
            // need to scroll
            /** @type {?} */
            let scrollContent;
            console.log('scrollContentSelector', this.scrollContentSelector);
            if (this.scrollContentSelector != undefined) {
                scrollContent = this.scrollContentSelector;
            }
            else {
                scrollContent = document.body;
            } // end: else
            console.log('scrollContent', scrollContent);
            //let move =  scrollContent.scrollTop + contentHeight +  triangleSize + btnHeight; 
            /** @type {?} */
            let move = scrollContent.scrollTop + btnDistTop;
            //let move =  btnDistTop; 
            scrollContent.scrollTo({ top: move, behavior: "smooth" });
            console.log('move', move);
        } // end of if
        console.log('btnDistLeft', btnDistLeft, 'contentWidth/2', contentWidth / 2, 'btnDistRight', btnDistRight);
        if (btnDistLeft >= (contentWidth / 2)) {
            if (btnDistRight >= (contentWidth / 2)) {
                // content on center of btn
                this._setInfoPosStyle(-(contentWidth / 2) + 'px', 'auto', (contentWidth / 2) + (arrowWidth / 2) - 3 + 'px' // 3 for little position move
                , 'auto');
                // this.infoLeft =  -(contentWidth/2) + 'px';
                // this.infoRight = 'auto';
                // this.arrowLeft = (contentWidth/2) + (arrowWidth/2) - 3 + 'px'; // 3 for little position move
                // this.arrowRight = 'auto';
                // console.log('on center;', 'infoLeft', this.infoLeft, 'infoRight', this.infoRight);
            }
            else {
                //console.log('1');
                if (contentWidth <= btnDistLeft && window.innerWidth > 480) {
                    // content on right of btn
                    this._setInfoPosStyle('auto', 0 + 'px', 'auto', -(arrowWidth / 2) + (btnWidth / 2) + 'px');
                    // this.infoLeft = 'auto';
                    // this.infoRight = 0 + 'px';
                    // this.arrowLeft = 'auto';
                    // this.arrowRight = -(arrowWidth/2) + (btnWidth/2) + 'px';  
                    // console.log('on right',btnDistRight, 'infoLeft', this.infoLeft, 'infoRight', this.infoRight);
                }
                else {
                    //console.log('1-1');
                    // content on window of center
                    this._caculateContentFitwindow();
                }
            }
        } // end of if
        else {
            console.log('2');
            if (contentWidth <= btnDistRight && window.innerWidth > 480) {
                // content on left of btn
                this.infoLeft = 0 + 'px';
                this.infoRight = 'auto';
                this.arrowLeft = ((btnWidth / 2) - (arrowWidth / 2)) + 'px';
                this.arrowRight = 'auto';
                console.log('on left', 'infoLeft', this.infoLeft, 'infoRight', this.infoRight);
            }
            else {
                console.log('2-1');
                //content on window of center
                this._caculateContentFitwindow();
            }
        } // end of else
    }
    // close the info
    /**
     * @return {?}
     */
    closeBtn() {
        this._isShowContent = false;
        this.styleShowContent = 'style-hide';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.informationService.getCloseAction()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            console.log('_id:', this._id, 'id', id);
            if (this._id !== id) {
                this.closeBtn();
            }
        }));
        this.styleInfoZIndex = this._isInfoContentOverlap ? 'style-show-up' : '';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
UiInformationComponent.decorators = [
    { type: Component, args: [{
                selector: 'snd-ui-information',
                template: "<div class=\"info-block\" [ngClass]=\"styleInfoZIndex\">\n\n  <ng-container *ngIf=\"!isPopupStyle; else templatePopup\">\n    <!-- btn -->\n    <div #infoBtn [ngSwitch]=\"infoBtnType\" class=\"info-btn-block\" (click)=\"clickBtn()\">\n      <div *ngSwitchCase=\"'default'\">\n        <nx-icon class=\"icon-i\" name=\"info-circle\" fill=\"false\" outline=\"false\" size=\"auto\"></nx-icon>\n      </div>\n      <div *ngSwitchCase=\"'customize'\">\n        <ng-content select=\"[btn]\"></ng-content>\n      </div>\n    </div>\n    <!-- end of btn -->\n  \n    <div #infoContent class=\"info-content-block\" [ngClass]=\"styleShowContent\" [ngStyle]=\"{'left': infoLeft, 'right': infoRight}\" [style.max-width]=\"maxWidth+'px'\">\n      <div #infoArrow class=\"info-arrow\" [ngClass]=\"styleHasArrow\" [ngStyle]=\"{'left': arrowLeft, 'top': arrowTop, 'right': arrowRight}\"></div>\n      <div class=\"info-close-btn\" (click)=\"closeBtn()\"></div>\n      <div class=\"info-content-detail-block stop-scroll-block\">\n        <ng-content select=\"[info-content]\"></ng-content>\n      </div>\n    </div>\n    <!-- end of content -->\n  </ng-container>\n  <ng-template #templatePopup>\n    <div class=\"info-btn-block\" (click)=\"clickPopupInfoBtn()\">\n        <nx-icon class=\"icon-i\" name=\"info-circle\" fill=\"false\" outline=\"false\" size=\"auto\"></nx-icon>\n    </div>\n  </ng-template>\n  \n</div>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.info-block{position:relative;display:inline-block;min-width:20px}.info-block.style-show-up .info-content-block.style-show{z-index:99}:host ::ng-deep .info-btn-block{display:inline-block}:host ::ng-deep .info-btn-block .nx-icon--info-circle.icon-i{display:inline-block;width:20px;height:20px;border:none;font-size:20px;color:#007ab3;background-color:transparent;line-height:1em}.info-content-block{position:absolute;top:calc(20px + 5px);display:flex;background-color:#fff;padding:15px 25px;flex-wrap:wrap;box-shadow:0 8px 24px 0 rgba(65,65,65,.35);border-radius:5px;text-align:left;color:#414141}.info-content-block .info-content-detail-block{max-height:600px;overflow-y:auto;min-height:100px;display:inline-block;width:100%;overflow-x:hidden}.info-content-block.style-hide{opacity:0;visibility:hidden;z-index:-99;width:0;height:0;min-height:0;top:0;position:fixed}.info-content-block.style-show{opacity:1;z-index:80;visibility:visible}.info-content-block .info-arrow{width:13px;height:13px;background-color:#fff;position:absolute;top:-3px;left:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:10;box-shadow:-3px -3px 10px -1px rgba(65,65,65,.1)}.info-content-block .info-arrow.style-hide{opacity:0}.info-content-block .info-close-btn{width:40px;height:40px;font-size:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0z'/%3E%3Cg stroke='%239B9B9B' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M14.898 15.317L35.102 35.52M36.112 14.898L15.909 35.102'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-size:cover;background-repeat:no-repeat;position:absolute;top:10px;right:10px;z-index:2}"]
            }] }
];
UiInformationComponent.ctorParameters = () => [
    { type: UiInformationService },
    { type: ElementRef },
    { type: ActionService }
];
UiInformationComponent.propDecorators = {
    isPopupStyle: [{ type: Input }],
    infoBtnType: [{ type: Input }],
    isHasArrow: [{ type: Input }],
    scrollContentSelector: [{ type: Input }],
    containerSelector: [{ type: Input }],
    minSpaceWindowAndContent: [{ type: Input }],
    maxWidth: [{ type: Input }],
    isInfoContentOverlap: [{ type: Input }],
    onClick: [{ type: Output }],
    infoBtn: [{ type: ViewChild, args: ['infoBtn',] }],
    infoContent: [{ type: ViewChild, args: ['infoContent',] }],
    infoArrow: [{ type: ViewChild, args: ['infoArrow',] }],
    documentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UiInformationComponent.prototype.isPopupStyle;
    /** @type {?} */
    UiInformationComponent.prototype.infoBtnType;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype._isShowContent;
    /** @type {?} */
    UiInformationComponent.prototype.styleHasArrow;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype._isHasArrow;
    /** @type {?} */
    UiInformationComponent.prototype.scrollContentSelector;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype._containerSelector;
    /** @type {?} */
    UiInformationComponent.prototype.minSpaceWindowAndContent;
    /** @type {?} */
    UiInformationComponent.prototype.maxWidth;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype._isInfoContentOverlap;
    /** @type {?} */
    UiInformationComponent.prototype.onClick;
    /** @type {?} */
    UiInformationComponent.prototype.styleShowContent;
    /** @type {?} */
    UiInformationComponent.prototype.infoLeft;
    /** @type {?} */
    UiInformationComponent.prototype.infoRight;
    /** @type {?} */
    UiInformationComponent.prototype.arrowLeft;
    /** @type {?} */
    UiInformationComponent.prototype.arrowRight;
    /** @type {?} */
    UiInformationComponent.prototype.arrowTop;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype._btnInfo;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype._contentInfo;
    /** @type {?} */
    UiInformationComponent.prototype.styleInfoZIndex;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype._id;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype.unsubscribe$;
    /** @type {?} */
    UiInformationComponent.prototype.infoBtn;
    /** @type {?} */
    UiInformationComponent.prototype.infoContent;
    /** @type {?} */
    UiInformationComponent.prototype.infoArrow;
    /**
     * @type {?}
     * @protected
     */
    UiInformationComponent.prototype.informationService;
    /**
     * @type {?}
     * @protected
     */
    UiInformationComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    UiInformationComponent.prototype.actionService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaW5mb3JtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFsbGlhbnpTTkQvdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91aS1pbmZvcm1hdGlvbi91aS1pbmZvcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBYSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU07Ozs7OztJQTZTSixZQUNZLGtCQUF3QyxFQUN4QyxVQUFzQixFQUN4QixhQUE0QjtRQUYxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXNCO1FBQ3hDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUE5UzdCLGlCQUFZLEdBQVksSUFBSSxDQUFDLENBQUMsb0RBQW9EO1FBQ2xGLGdCQUFXLEdBQVcsU0FBUyxDQUFDLENBQUMsOERBQThEO1FBQ2hHLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ3hDLGtCQUFhLEdBQVcsRUFBRSxDQUFDLENBQUMsd0JBQXdCO1FBQzVDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBb0NsQiw2QkFBd0IsR0FBRyxDQUFDLENBQUM7UUFFOUIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBV3RDLGVBQWU7UUFDTCxZQUFP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ckIsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbEcxQyw4Q0FBc0M7O0lBQ3RDLDZDQUF5Qzs7Ozs7SUFDekMsZ0RBQXdDOztJQUN4QywrQ0FBMkI7Ozs7O0lBQzNCLDZDQUEyQjs7SUF5QjNCLHVEQUErQjs7Ozs7SUFFL0Isb0RBQTJCOztJQVMzQiwwREFBc0M7O0lBQ3RDLDBDQUFrQjs7Ozs7SUFDbEIsdURBQXNDOztJQVl0Qyx5Q0FBdUM7O0lBUXZDLGtEQUF1Qzs7SUFFdkMsMENBQXlCOztJQUN6QiwyQ0FBMEI7O0lBRTFCLDJDQUEwQjs7SUFDMUIsNENBQTJCOztJQUMzQiwwQ0FBeUI7Ozs7O0lBRXpCLDBDQUFpQjs7Ozs7SUFDakIsOENBQXFCOztJQUVyQixpREFBMkI7Ozs7O0lBRTNCLHFDQUFZOzs7OztJQUVaLDhDQUFvRDs7SUFHcEQseUNBQTBDOztJQUMxQyw2Q0FBa0Q7O0lBQ2xELDJDQUE4Qzs7Ozs7SUF5TjVDLG9EQUFrRDs7Ozs7SUFDbEQsNENBQWdDOzs7OztJQUNoQywrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpSW5mb3JtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi91aS1pbmZvcm1hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICdAYWxsaWFuelNORC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25kLXVpLWluZm9ybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWluZm9ybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaUluZm9ybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGlzUG9wdXBTdHlsZTogYm9vbGVhbiA9IHRydWU7IC8vIHRydWU6IGZvciBpIGlzIGEgcG9wdXA7IGZhbHNlOiBpIGlzIGEgcG9wb3ZlciAuLiBcbiAgQElucHV0KCkgaW5mb0J0blR5cGU6IHN0cmluZyA9ICdkZWZhdWx0JzsgLy8gZGVmYXVsdCA9PiBpIGljb24gLCBjdXN0b21pemUgPT4gbmctY29udGVudCBsZXQgdXNlciBpbnB1dCBcbiAgcHJpdmF0ZSBfaXNTaG93Q29udGVudDogYm9vbGVhbiA9IGZhbHNlOztcbiAgc3R5bGVIYXNBcnJvdzogc3RyaW5nID0gJyc7IC8vc3R5bGUgaGFzIGFycm93IG9yIG5vdFxuICBwcml2YXRlIF9pc0hhc0Fycm93ID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgZ2V0IGlzSGFzQXJyb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSGFzQXJyb3c7XG4gIH1cbiAgc2V0IGlzSGFzQXJyb3codmFsKSB7XG4gICAgdGhpcy5faXNIYXNBcnJvdyA9IHZhbDtcbiAgICB0aGlzLnN0eWxlSGFzQXJyb3cgPSB0aGlzLl9pc0hhc0Fycm93ID8gJycgOiAnc3R5bGUtaGlkZSc7XG4gIH1cblxuICAvLyBASW5wdXQoKSBcbiAgZ2V0IGlzU2hvd0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd0NvbnRlbnQ7XG4gIH07XG4gIHNldCBpc1Nob3dDb250ZW50KHZhbCkge1xuICAgIHRoaXMuX2lzU2hvd0NvbnRlbnQgPSB2YWw7XG4gICAgaWYgKHRoaXMuX2lzU2hvd0NvbnRlbnQpIHtcbiAgICAgIHRoaXMuaW5mb3JtYXRpb25TZXJ2aWNlLmNsb3NlT3RoZXJzKHRoaXMuX2lkKTtcbiAgICB9XG4gICAgdGhpcy5zdHlsZVNob3dDb250ZW50ID0gdGhpcy5faXNTaG93Q29udGVudCA/ICdzdHlsZS1zaG93JyA6ICdzdHlsZS1oaWRlJztcbiAgICBjb25zb2xlLmxvZygnc2V0IGlzU2hvd0NvbnRlbnQnKTtcblxuICB9XG4gIC8vQE91dHB1dCgpIGlzU2hvd0NvbnRlbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgc2Nyb2xsQ29udGVudFNlbGVjdG9yO1xuXG4gIHByaXZhdGUgX2NvbnRhaW5lclNlbGVjdG9yOyAvLyBwYXJlbnQgc2VsZWN0b3IgZm9yIGNoZWNrIGluZm8gbGVmdC9yaWdodC9jZW50ZXJcbiAgQElucHV0KClcbiAgZ2V0IGNvbnRhaW5lclNlbGVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJTZWxlY3RvcjtcbiAgfVxuICBzZXQgY29udGFpbmVyU2VsZWN0b3IodmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gY29udGFpbmVyU2VsZWN0b3Igc2V0JywgdmFsdWUpO1xuICAgIHRoaXMuX2NvbnRhaW5lclNlbGVjdG9yID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgbWluU3BhY2VXaW5kb3dBbmRDb250ZW50ID0gNTtcbiAgQElucHV0KCkgbWF4V2lkdGg7XG4gIHByaXZhdGUgX2lzSW5mb0NvbnRlbnRPdmVybGFwID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBpc0luZm9Db250ZW50T3ZlcmxhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNJbmZvQ29udGVudE92ZXJsYXA7XG4gIH1cbiAgc2V0IGlzSW5mb0NvbnRlbnRPdmVybGFwKHZhbCkge1xuICAgIHRoaXMuX2lzSW5mb0NvbnRlbnRPdmVybGFwID0gdmFsOyAvLyB0cnVlXG4gICAgdGhpcy5zdHlsZUluZm9aSW5kZXggPSB0aGlzLl9pc0luZm9Db250ZW50T3ZlcmxhcCA/ICdzdHlsZS1zaG93LXVwJyA6ICcnO1xuICB9XG5cblxuICAvLyBwb3B1cCBzdHlsZSBcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsaWNrUG9wdXBJbmZvQnRuKCkge1xuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cblxuXG4gIC8vIGVuZCBvZiBwb3B1cCBzdHlsZVxuXG4gIHB1YmxpYyBzdHlsZVNob3dDb250ZW50ID0gJ3N0eWxlLWhpZGUnOyAgLy8gc3R5bGUgZm9yIGNvbnRlbnQgc2hvdyBvciBub3RcbiAgLy8gaW5mbyBwb3Mgc3R5bGVcbiAgcHVibGljIGluZm9MZWZ0ID0gJ2F1dG8nOyAgLy8gbmdzdHlsZSBmb3IgaW5mbyBib3ggcG9zaXRvbiBsZWZ0XG4gIHB1YmxpYyBpbmZvUmlnaHQgPSAnYXV0byc7IC8vIG5nc3R5bGUgZm9yIGluZm8gYm94IHBvc2l0b24gcmlnaHRcbiAgLy8gYXJyb3cgcG9zIHN0eWxlXG4gIHB1YmxpYyBhcnJvd0xlZnQgPSAnYXV0byc7XG4gIHB1YmxpYyBhcnJvd1JpZ2h0ID0gJ2F1dG8nO1xuICBwdWJsaWMgYXJyb3dUb3AgPSAnLTNweCc7XG5cbiAgcHJpdmF0ZSBfYnRuSW5mbzsgLy8gcG9zaXRpb24gb2YgYnRuXG4gIHByaXZhdGUgX2NvbnRlbnRJbmZvOyAvLyBwb3NpdGlvbiBvZiBjb250ZW50XG5cbiAgcHVibGljIHN0eWxlSW5mb1pJbmRleCA9ICcnIC8vIHN0eWxlIGZvciBpbmZvIGNvbnRlbnQgei1pbmRleCA6ICcnIC8gJ3N0eWxlLXNob3ctdXAnXG5cbiAgcHJpdmF0ZSBfaWQ7IC8vIGlkIGZvciBpbmZvXG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG5cbiAgQFZpZXdDaGlsZCgnaW5mb0J0bicpIGluZm9CdG46IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2luZm9Db250ZW50JykgaW5mb0NvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2luZm9BcnJvdycpIGluZm9BcnJvdzogRWxlbWVudFJlZjtcblxuICBjbGlja0J0bigpIHtcbiAgICB0aGlzLmlzU2hvd0NvbnRlbnQgPSAhdGhpcy5pc1Nob3dDb250ZW50O1xuICAgIC8vdGhpcy5pc1Nob3dDb250ZW50Q2hhbmdlLmVtaXQodGhpcy5faXNTaG93Q29udGVudCk7XG4gICAgaWYgKHRoaXMuaXNTaG93Q29udGVudCkge1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGJ0bicpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FjdWxhdGVDb250ZW50UG9zKCk7XG4gICAgICB9KVxuICAgICAgdGhpcy5pbmZvcm1hdGlvblNlcnZpY2UuY2xvc2VPdGhlcnModGhpcy5faWQpO1xuICAgIH1cblxuICB9XG4gIC8vIGlmIHlvdSBjbGljayBhbnl3aGVyZSwgdGhlbiBjbG9zZSBpbmZvXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgZG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIC8vIGNsaWNrIGV2ZW50IGZyb20gYWN0aW9uXG4gICAgdGhpcy5hY3Rpb25TZXJ2aWNlLm9uQWN0aW9uQ2xpY2soKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMocmVzcC5ldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUJ0bigpO1xuICAgICAgICAgIC8vIHRoaXMuY2hhbmdlRGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgLy8gY2xpY2sgZXZlbnQgd2l0aCBubyBhY3Rpb25cbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xvc2VCdG4oKTtcbiAgICB9XG4gIH1cbiAgLy8gcmVuZGVyQ29udGVudFNob3coKXtcbiAgLy8gICBzZXRUaW1lb3V0KCgpPT57XG4gIC8vICAgICB0aGlzLmNhY3VsYXRlQ29udGVudFBvcygpO1xuICAvLyAgIH0pXG4gIC8vIH1cblxuXG4gIC8vIGRlY2lkZSB0aGUgY29udGVudCBzaG93IG9uIGNlbnRlciwgbGVmdCwgb3IgcmlnaHQgXG4gIC8vIGlmIGNvbnRlbnQgbmVlZCB0byBzaG93IG9uIGJhc2VkIG9uIHdpbmRvdyBcbiAgX2NhY3VsYXRlQ29udGVudEZpdHdpbmRvdygpIHtcblxuICAgIHRoaXMuaW5mb0xlZnQgPSAtdGhpcy5fYnRuSW5mby54ICsgdGhpcy5taW5TcGFjZVdpbmRvd0FuZENvbnRlbnQgKyAncHgnO1xuICAgIHRoaXMuaW5mb1JpZ2h0ID0gJ2F1dG8nO1xuICAgIHRoaXMuYXJyb3dMZWZ0ID0gdGhpcy5fYnRuSW5mby54IC0gdGhpcy5taW5TcGFjZVdpbmRvd0FuZENvbnRlbnQgKyAzICsgJ3B4JztcbiAgICB0aGlzLmFycm93UmlnaHQgPSAnYXV0byc7XG4gICAgY29uc29sZS5sb2coJ19jYWN1bGF0ZUNvbnRlbnRGaXR3aW5kb3cnLCB0aGlzLmluZm9MZWZ0LCB0aGlzLmFycm93TGVmdCk7XG4gIH1cblxuICBfc2V0SW5mb1Bvc1N0eWxlKGluZm9MZWZ0LCBpbmZvUmlnaHQsIGFycm93TGVmdCwgYXJyb3dSaWdodCkge1xuICAgIHRoaXMuaW5mb0xlZnQgPSBpbmZvTGVmdDtcbiAgICB0aGlzLmluZm9SaWdodCA9IGluZm9SaWdodDtcbiAgICB0aGlzLmFycm93TGVmdCA9IGFycm93TGVmdDtcbiAgICB0aGlzLmFycm93UmlnaHQgPSBhcnJvd1JpZ2h0O1xuXG4gIH1cblxuICAvLyBjYWN1bGF0ZSBjb250ZW50IHNob3cgcG9zIChpZiBib3R0b20gY2Fubm90IHNob3csIHRoZW4gc2Nyb2xsIHRoZSBjb250ZW50KVxuICBjYWN1bGF0ZUNvbnRlbnRQb3MoKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRhaW5lclNlbGVjdG9yJywgdGhpcy5jb250YWluZXJTZWxlY3Rvcik7XG5cbiAgICBsZXQgY29udGFpbmVyV2lkdGggPSAwO1xuICAgIGxldCBjb250YWluZXJIZWlnaHQgPSAwO1xuXG4gICAgLy8gaWYgY29uYXRpbmVyIGlzIG5vdCB3aW5kb3csIHRoZW4gY2FjdWxhdGUgdGhlIGNvbnRhaW5lciBkaXN0IGJldHdlZW4gd2luZG93IGFuZCBjb250YWluZXJcbiAgICBsZXQgZGlzdFdpbmRvd0FuZENvbnRhaW5lclRvcCA9IDA7XG4gICAgbGV0IGRpc3RXaW5kb3dBbmRDb250YWluZXJMZWZ0ID0gMDtcbiAgICBsZXQgZGlzdFdpbmRvd0FuZENvbnRhaW5lclJpZ2h0ID0gMDtcbiAgICBsZXQgZGlzdFdpbmRvd0FuZENvbnRhaW5lckJvdHRvbSA9IDA7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXJTZWxlY3RvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGlmKHRoaXMuY29udGFpbmVyU2VsZWN0b3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk9PXVuZGVmaW5lZCl7XG4gICAgICAvLyAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSB0aGlzLmNvbnRhaW5lclNlbGVjdG9yLmVsZW1lbnRSZWY7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdpbiBjb250YWluZXIgdW5kZWZpbmVkJyk7XG4gICAgICAvLyB9XG4gICAgICBsZXQgY29udGFpbmVySW5mbyA9IHRoaXMuY29udGFpbmVyU2VsZWN0b3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVySW5mby53aWR0aDsgIC8vb2Zmc2V0V2lkdGhcbiAgICAgIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lckluZm8uaGVpZ2h0OyAvL29mZnNldEhlaWdodFxuICAgICAgY29uc29sZS5sb2coJ2NvbnRhaW5lckluZm8nLCBjb250YWluZXJJbmZvKTtcbiAgICAgIGNvbnNvbGUubG9nKCdjb250YWluZXJJbmZvIGNvbnRhaW5lcldpZHRoJywgY29udGFpbmVyV2lkdGgpO1xuICAgICAgLy8gZ2V0IGRpc3Qgd2luZG93IGFuZCBjb250YWluZXJcbiAgICAgIGRpc3RXaW5kb3dBbmRDb250YWluZXJUb3AgPSBjb250YWluZXJJbmZvLnRvcDtcbiAgICAgIGRpc3RXaW5kb3dBbmRDb250YWluZXJMZWZ0ID0gY29udGFpbmVySW5mby5sZWZ0O1xuICAgICAgZGlzdFdpbmRvd0FuZENvbnRhaW5lclJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBkaXN0V2luZG93QW5kQ29udGFpbmVyTGVmdCAtIHRoaXMuY29udGFpbmVyU2VsZWN0b3Iub2Zmc2V0V2lkdGg7XG4gICAgICBkaXN0V2luZG93QW5kQ29udGFpbmVyQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gZGlzdFdpbmRvd0FuZENvbnRhaW5lclRvcCAtIHRoaXMuY29udGFpbmVyU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGdldCB3aW5kb3cgd2lkdGggYW5kIGhlaWdodFxuICAgICAgY29udGFpbmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnRhaW5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnNvbGUubG9nKCdjb250YWluZXJXaWR0aCcsIGNvbnRhaW5lcldpZHRoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdjb250YWluZXJIZWlnaHQnLCBjb250YWluZXJIZWlnaHQpO1xuICAgIH1cblxuXG5cbiAgICAvLyBnZXQgYnRuIHBvc1xuICAgIC8vY29uc29sZS5sb2coJ2luZm9CdG4nLCB0aGlzLmluZm9CdG4pO1xuICAgIHRoaXMuX2J0bkluZm8gPSB0aGlzLmluZm9CdG4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgdHJpYW5nbGVTaXplID0gNTsgLy8gdHJpYW5nbGUgc2l6ZSBvZiBjb250ZW50IGJveDtcbiAgICBsZXQgYXJyb3dXaWR0aCA9IHRoaXMuaW5mb0Fycm93Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgbGV0IGFycm93U3BhY2VNb3ZlID0gMzsgLy8gZm9yIGFycm93IHNwYWNlIGJlY2F1c2Ugb2Ygcm90YXRlIFxuICAgIC8vY29uc29sZS5sb2coJ2Fycm93V2lkdGgnLCBhcnJvd1dpZHRoKTtcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzIF9idG5JbmZvJyx0aGlzLl9idG5JbmZvKTtcblxuICAgIC8vIGdldCBidG4gZGlzdGFuY2Ugd2l0aCB3aW5kb3dcbiAgICBsZXQgYnRuV2lkdGggPSB0aGlzLl9idG5JbmZvLndpZHRoO1xuICAgIGxldCBidG5IZWlnaHQgPSB0aGlzLl9idG5JbmZvLmhlaWdodDtcbiAgICBsZXQgYnRuRGlzdExlZnQgPSB0aGlzLl9idG5JbmZvLnggLSBkaXN0V2luZG93QW5kQ29udGFpbmVyTGVmdCArIGJ0bldpZHRoIC8gMjtcbiAgICBjb25zb2xlLmxvZygndGhpcy5fYnRuSW5mby54JywgdGhpcy5fYnRuSW5mby54LCAnZGlzdFdpbmRvd0FuZENvbnRhaW5lckxlZnQnLCBkaXN0V2luZG93QW5kQ29udGFpbmVyTGVmdCwgJ2J0bldpZHRoJywgYnRuV2lkdGgpO1xuICAgIGNvbnNvbGUubG9nKCdidG5EaXN0TGVmdCcsIGJ0bkRpc3RMZWZ0KTtcbiAgICBsZXQgYnRuRGlzdFRvcCA9IHRoaXMuX2J0bkluZm8ueSAtIGRpc3RXaW5kb3dBbmRDb250YWluZXJUb3A7XG5cbiAgICBsZXQgYnRuRGlzdFJpZ2h0ID0gY29udGFpbmVyV2lkdGggLSBidG5EaXN0TGVmdDtcbiAgICBjb25zb2xlLmxvZygnY29udGFpbmVyV2lkdGgnLCBjb250YWluZXJXaWR0aCwgJ2J0bkRpc3RMZWZ0JywgYnRuRGlzdExlZnQpO1xuICAgIGxldCBidG5EaXN0QnRtID0gY29udGFpbmVySGVpZ2h0IC0gYnRuRGlzdFRvcCAtIGJ0bkhlaWdodCAtIHRyaWFuZ2xlU2l6ZTtcbiAgICBjb25zb2xlLmxvZygnYnRuRGlzdEJ0bScsIGJ0bkRpc3RCdG0sICdjb250YWluZXJIZWlnaHQnLCBjb250YWluZXJIZWlnaHQsICdidG5EaXN0VG9wJywgYnRuRGlzdFRvcCwgJ2J0bkhlaWdodCcsIGJ0bkhlaWdodCwgJ3RyaWFuZ2xlU2l6ZScsIHRyaWFuZ2xlU2l6ZSwgJ3RoaXMuX2J0bkluZm8ueScsIHRoaXMuX2J0bkluZm8ueSwgJ2Rpc3RXaW5kb3dBbmRDb250YWluZXJUb3AnLCBkaXN0V2luZG93QW5kQ29udGFpbmVyVG9wKTtcblxuICAgIC8vIGdldCBpbmZvIGJveCBzaXplXG4gICAgY29uc29sZS5sb2coJ2luZm9Db250ZW50JywgdGhpcy5pbmZvQ29udGVudCk7XG4gICAgdGhpcy5fY29udGVudEluZm8gPSB0aGlzLmluZm9Db250ZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGNvbnRlbnRXaWR0aCA9IHRoaXMuaW5mb0NvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgY29udGVudEhlaWdodCA9IHRoaXMuaW5mb0NvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgX2NvbnRlbnRJbmZvJywgdGhpcy5fY29udGVudEluZm8sICdjb250ZW50V2lkdGgnLCBjb250ZW50V2lkdGgsICdjb250ZW50SGVpZ2h0JywgY29udGVudEhlaWdodCk7XG5cbiAgICAvLyBjYWN1bGF0ZSBpZiBjb250ZW50IHNob3cgb24gdGhlIGJ0bSwgaWYgdGhlIHNwYWNlIGlzIG5vdCBlbm91Z2hcbiAgICBpZiAoYnRuRGlzdEJ0bSA8IGNvbnRlbnRIZWlnaHQpIHtcbiAgICAgIC8vIG5lZWQgdG8gc2Nyb2xsXG4gICAgICBsZXQgc2Nyb2xsQ29udGVudDtcbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxDb250ZW50U2VsZWN0b3InLCB0aGlzLnNjcm9sbENvbnRlbnRTZWxlY3Rvcik7XG4gICAgICBpZiAodGhpcy5zY3JvbGxDb250ZW50U2VsZWN0b3IgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbENvbnRlbnQgPSB0aGlzLnNjcm9sbENvbnRlbnRTZWxlY3RvcjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzY3JvbGxDb250ZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgIH0gIC8vIGVuZDogZWxzZVxuICAgICAgY29uc29sZS5sb2coJ3Njcm9sbENvbnRlbnQnLCBzY3JvbGxDb250ZW50KTtcbiAgICAgIC8vbGV0IG1vdmUgPSAgc2Nyb2xsQ29udGVudC5zY3JvbGxUb3AgKyBjb250ZW50SGVpZ2h0ICsgIHRyaWFuZ2xlU2l6ZSArIGJ0bkhlaWdodDsgXG4gICAgICBsZXQgbW92ZSA9IHNjcm9sbENvbnRlbnQuc2Nyb2xsVG9wICsgYnRuRGlzdFRvcDtcbiAgICAgIC8vbGV0IG1vdmUgPSAgYnRuRGlzdFRvcDsgXG4gICAgICBzY3JvbGxDb250ZW50LnNjcm9sbFRvKHsgdG9wOiBtb3ZlLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdtb3ZlJywgbW92ZSk7XG5cblxuICAgIH0gLy8gZW5kIG9mIGlmXG5cblxuICAgIGNvbnNvbGUubG9nKCdidG5EaXN0TGVmdCcsIGJ0bkRpc3RMZWZ0LCAnY29udGVudFdpZHRoLzInLCBjb250ZW50V2lkdGggLyAyLCAnYnRuRGlzdFJpZ2h0JywgYnRuRGlzdFJpZ2h0KVxuXG4gICAgaWYgKGJ0bkRpc3RMZWZ0ID49IChjb250ZW50V2lkdGggLyAyKSkge1xuICAgICAgaWYgKGJ0bkRpc3RSaWdodCA+PSAoY29udGVudFdpZHRoIC8gMikpIHtcbiAgICAgICAgLy8gY29udGVudCBvbiBjZW50ZXIgb2YgYnRuXG4gICAgICAgIHRoaXMuX3NldEluZm9Qb3NTdHlsZShcbiAgICAgICAgICAtKGNvbnRlbnRXaWR0aCAvIDIpICsgJ3B4J1xuICAgICAgICAgICwgJ2F1dG8nXG4gICAgICAgICAgLCAoY29udGVudFdpZHRoIC8gMikgKyAoYXJyb3dXaWR0aCAvIDIpIC0gMyArICdweCcgIC8vIDMgZm9yIGxpdHRsZSBwb3NpdGlvbiBtb3ZlXG4gICAgICAgICAgLCAnYXV0bycpO1xuICAgICAgICAvLyB0aGlzLmluZm9MZWZ0ID0gIC0oY29udGVudFdpZHRoLzIpICsgJ3B4JztcbiAgICAgICAgLy8gdGhpcy5pbmZvUmlnaHQgPSAnYXV0byc7XG4gICAgICAgIC8vIHRoaXMuYXJyb3dMZWZ0ID0gKGNvbnRlbnRXaWR0aC8yKSArIChhcnJvd1dpZHRoLzIpIC0gMyArICdweCc7IC8vIDMgZm9yIGxpdHRsZSBwb3NpdGlvbiBtb3ZlXG4gICAgICAgIC8vIHRoaXMuYXJyb3dSaWdodCA9ICdhdXRvJztcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb24gY2VudGVyOycsICdpbmZvTGVmdCcsIHRoaXMuaW5mb0xlZnQsICdpbmZvUmlnaHQnLCB0aGlzLmluZm9SaWdodCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnMScpO1xuICAgICAgICBpZiAoY29udGVudFdpZHRoIDw9IGJ0bkRpc3RMZWZ0ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNDgwKSB7XG4gICAgICAgICAgLy8gY29udGVudCBvbiByaWdodCBvZiBidG5cbiAgICAgICAgICB0aGlzLl9zZXRJbmZvUG9zU3R5bGUoXG4gICAgICAgICAgICAnYXV0bydcbiAgICAgICAgICAgICwgMCArICdweCdcbiAgICAgICAgICAgICwgJ2F1dG8nXG4gICAgICAgICAgICAsIC0oYXJyb3dXaWR0aCAvIDIpICsgKGJ0bldpZHRoIC8gMikgKyAncHgnKTtcbiAgICAgICAgICAvLyB0aGlzLmluZm9MZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgIC8vIHRoaXMuaW5mb1JpZ2h0ID0gMCArICdweCc7XG4gICAgICAgICAgLy8gdGhpcy5hcnJvd0xlZnQgPSAnYXV0byc7XG4gICAgICAgICAgLy8gdGhpcy5hcnJvd1JpZ2h0ID0gLShhcnJvd1dpZHRoLzIpICsgKGJ0bldpZHRoLzIpICsgJ3B4JzsgIFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbiByaWdodCcsYnRuRGlzdFJpZ2h0LCAnaW5mb0xlZnQnLCB0aGlzLmluZm9MZWZ0LCAnaW5mb1JpZ2h0JywgdGhpcy5pbmZvUmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJzEtMScpO1xuICAgICAgICAgIC8vIGNvbnRlbnQgb24gd2luZG93IG9mIGNlbnRlclxuICAgICAgICAgIHRoaXMuX2NhY3VsYXRlQ29udGVudEZpdHdpbmRvdygpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuXG4gICAgfSAvLyBlbmQgb2YgaWZcbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCcyJyk7XG4gICAgICBpZiAoY29udGVudFdpZHRoIDw9IGJ0bkRpc3RSaWdodCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDQ4MCkge1xuICAgICAgICAvLyBjb250ZW50IG9uIGxlZnQgb2YgYnRuXG4gICAgICAgIHRoaXMuaW5mb0xlZnQgPSAwICsgJ3B4JztcbiAgICAgICAgdGhpcy5pbmZvUmlnaHQgPSAnYXV0byc7XG4gICAgICAgIHRoaXMuYXJyb3dMZWZ0ID0gKChidG5XaWR0aCAvIDIpIC0gKGFycm93V2lkdGggLyAyKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmFycm93UmlnaHQgPSAnYXV0byc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBsZWZ0JywgJ2luZm9MZWZ0JywgdGhpcy5pbmZvTGVmdCwgJ2luZm9SaWdodCcsIHRoaXMuaW5mb1JpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnMi0xJyk7XG4gICAgICAgIC8vY29udGVudCBvbiB3aW5kb3cgb2YgY2VudGVyXG4gICAgICAgIHRoaXMuX2NhY3VsYXRlQ29udGVudEZpdHdpbmRvdygpO1xuICAgICAgfVxuXG4gICAgfSAgLy8gZW5kIG9mIGVsc2VcblxuICB9XG5cbiAgLy8gY2xvc2UgdGhlIGluZm9cbiAgY2xvc2VCdG4oKSB7XG4gICAgdGhpcy5faXNTaG93Q29udGVudCA9IGZhbHNlO1xuICAgIHRoaXMuc3R5bGVTaG93Q29udGVudCA9ICdzdHlsZS1oaWRlJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpbmZvcm1hdGlvblNlcnZpY2U6IFVpSW5mb3JtYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSkge1xuICAgIHRoaXMuX2lkID0gdXVpZCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmluZm9ybWF0aW9uU2VydmljZS5nZXRDbG9zZUFjdGlvbigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoaWQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ19pZDonLCB0aGlzLl9pZCwgJ2lkJywgaWQpO1xuICAgICAgICBpZiAodGhpcy5faWQgIT09IGlkKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUJ0bigpO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgdGhpcy5zdHlsZUluZm9aSW5kZXggPSB0aGlzLl9pc0luZm9Db250ZW50T3ZlcmxhcCA/ICdzdHlsZS1zaG93LXVwJyA6ICcnO1xuXG5cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3SW5pdCcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19