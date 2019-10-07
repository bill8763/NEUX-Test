/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Output, Input, ElementRef, ViewChildren, EventEmitter, HostListener, forwardRef, ViewChild } from '@angular/core';
import { UiTableRowComponent } from '../ui-table-row/ui-table-row.component';
import { UiTableRowHeadComponent } from '../ui-table-row-head/ui-table-row-head.component';
export class UiTableContentComponent {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.onItemClick = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.onTableScroll = new EventEmitter();
        this.bodyClassName = "bodyClassName";
        this.thMinHeight = 30;
        this.tdMinHeight = 70;
        this.eventLength = 3;
        this.fixed = true;
        this.titleOnlyMobile = false;
        this.showControlbar = true;
        this.showTitle = true;
        this.eventNum = 0;
        this.eventData = { index: 0,
            event: 0 };
        this.rightMore = false;
        this.rightMoreClass = '';
        this.headtext = [];
        this.headItemData = [];
        this.dataHeadArray = [];
        this.dataRowArray = [];
        this._isShowTableVerticalView = false;
        this.isShowTableVerticalViewChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isShowTableVerticalView() {
        return this._isShowTableVerticalView;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isShowTableVerticalView(val) {
        this._isShowTableVerticalView = val;
    }
    /**
     * @return {?}
     */
    headArray() {
        if (this.tableHead != undefined) {
            /** @type {?} */
            let headData = this.tableHead.toArray();
            // console.log('tableHead',this.tableHead);
            // console.log('tableHead leng', this.tableHead.length);
            // console.log('headData',headData);
            // console.log('headData[0]',headData[0]);
            // console.log('data item2array',headData[0].itemToArray());
            if (headData[0].itemToArray() != undefined) {
                return headData[0].itemToArray();
            }
        }
    }
    /**
     * @return {?}
     */
    bodyArray() {
        if (this.tableData != undefined) {
            /** @type {?} */
            let bodyData = this.tableData.toArray();
            this.bodyArrayLength = bodyData.length;
            return bodyData;
        }
    }
    /**
     * @return {?}
     */
    setHeight() {
        /** @type {?} */
        let td = this.body.toArray();
        /** @type {?} */
        let tdLength = td.length;
        /** @type {?} */
        let th = this.head.toArray();
        /** @type {?} */
        let thLength = th.length;
        /** @type {?} */
        let rowLength = this.tableData.toArray().length;
        for (let i = 0; i < tdLength; i++) {
            td[i].nativeElement.style.height = i % rowLength ? this.tdMinHeight + 'px' : 'auto';
        }
        for (let i = 0; i < thLength; i++) {
            th[i].nativeElement.style.height = i ? this.thMinHeight + 'px' : 'auto';
        }
    }
    // chagne table view
    /**
     * @param {?} isVerticalView
     * @return {?}
     */
    changeTableView(isVerticalView) {
        //console.log('click', isVerticalView);
        this.isShowTableVerticalView = isVerticalView;
        this.isShowTableVerticalViewChange.emit(this.isShowTableVerticalView);
    }
    /**
     * @return {?}
     */
    ngOnInit() { this.windowWidth = window.innerWidth; }
    /**
     * @param {?} array
     * @param {?} length
     * @param {?} height
     * @return {?}
     */
    setFinalHeight(array, length, height) {
        for (let i = 0; i < length; i++) {
            array[i].style.height = height + "px";
            // console.log(array[i],height);
        }
    }
    /**
     * @param {?} idName
     * @param {?} rowLength
     * @return {?}
     */
    getRowHeight(idName, rowLength) {
        for (let i = 0; i < rowLength; i++) {
            /** @type {?} */
            let domElement = this._elementRef.nativeElement.querySelectorAll(idName + "" + i);
            /** @type {?} */
            let domLength = domElement.length;
            /** @type {?} */
            let domHArray = [];
            for (let j = 0; j < domLength; j++) {
                domHArray.push(domElement[j].offsetHeight);
            }
            /** @type {?} */
            let tdHeight = Math.max.apply(null, domHArray);
            // console.log(domElement,tdHeight);
            this.setFinalHeight(domElement, domLength, tdHeight);
        }
    }
    /**
     * @return {?}
     */
    ModifyDOMElement() {
        /** @type {?} */
        let rowLength = this.bodyArrayLength;
        /** @type {?} */
        let headLength = this.headArray().length;
        // console.log(rowLength,headLength);
        this.getRowHeight('.headClassName', headLength);
        this.getRowHeight('.bodyClassName', rowLength);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    conrtolMoreShow(obj) {
        console.log("obj.right", obj.right);
        // this.rightMore = !obj.right;
        setTimeout((/**
         * @return {?}
         */
        () => { this.rightMore = !obj.right; }), 0);
        // this.rightMoreClass = obj.right?'': 'rightMoreTrue';
        this.onTableScroll.emit();
    }
    /**
     * @param {?} n
     * @return {?}
     */
    setEventIndex(n) {
        return n % this.eventLength;
    }
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    itemClick(index, event) {
        this.eventNum++;
        this.eventData.index = index;
        this.eventData.event = event % this.eventLength;
        this.onItemClick.emit(this.eventData);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    rowClick(index) {
        this.onRowClick.emit(index);
    }
    /**
     * @return {?}
     */
    checkTitleShow() {
        if (this.titleOnlyMobile) {
            setTimeout((/**
             * @return {?}
             */
            () => { this.showTitle = this.windowWidth < 1024 ? true : false; }), 0);
        }
    }
    /**
     * @return {?}
     */
    setTableHeight() {
        if (this.fixed) {
            this.setHeight();
            this.ModifyDOMElement();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.checkTitleShow();
        this.setTableHeight();
        this.windowWidth = event.target.innerWidth;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkTitleShow();
        this.setHeight();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setTableHeight();
        }), 0);
    }
}
UiTableContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ui-table-content',
                template: "<!-- controalbar -->\n<snd-ui-table-control-bar (onClick)=\"changeTableView($event)\" *ngIf=\"showControlbar\" [isVertical]=\"isShowTableVerticalView\">\n  <ng-content select=\"[controlBarContent]\"></ng-content>\n</snd-ui-table-control-bar>\n<!-- end of control bar -->\n\n<ng-container *ngIf=\"!isShowTableVerticalView || windowWidth >= 1024; else verticalTable\">\n  <div class=\"table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n    <div class=\"table-info-content\">\n      <app-ui-detection-scroll (scrollEventData)=\"conrtolMoreShow($event)\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"head-tr\" *ngIf=\"showTitle\">\n                <ng-container *ngFor=\"let item of headArray();index as i\">\n                  <th class=\"th  headClassName0\" #head [ngClass]=\"{'first':i==0,\n                                                                  'text-align-left':item.textAlign=='left',\n                                                                  'text-align-right':item.textAlign=='right',\n                                                                  'text-align-center':item.textAlign=='center'}\">\n                    <div class=\"\" [ngClass]=\"{'sort':item.sort,\n                                              'sort-content':i}\">\n                      <ng-container *ngIf=\"item.sort\">\n                        <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                        [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                      'down' : setEventIndex(item.eventIndex)==2}\">\n                        </div>\n                      </ng-container>\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </div>\n                  </th>\n                </ng-container>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let row of bodyArray();index as i\">\n                <tr class=\"body-tr\" [attr.body]=\"i\" (click)=\"rowClick(i)\" *ngIf=\"row != undefined\">\n                  <ng-container *ngFor=\"let item of row.itemToArray();index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body  [ngClass]=\"{'first':j==0,\n                                                                    'text-align-left':item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right',\n                                                                    'text-align-center':item.textAlign=='center'}\">\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n      </app-ui-detection-scroll>\n      <div class=\"rightMore\" [ngClass]=\"{'rightMoreTrue':rightMore}\"></div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #verticalTable>\n    <div *ngIf=\"windowWidth < 1024\" class=\"table-style-v table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n        <div class=\"table-info-content\">\n            <!-- main content -->\n            <ng-container *ngFor=\"let item of bodyArray();index as i; let last = last\">\n              <!-- single item -->\n              <div class=\"vertical-item-block\" (click)=\"rowClick(i)\">\n                <div class=\"title-block\"  [ngClass]=\"{'first':1,\n                                                                  'text-align-left':item.textAlign=='left',\n                                                                  'text-align-right':item.textAlign=='right',\n                                                                  'text-align-center':item.textAlign=='center'}\">\n                  <div *ngTemplateOutlet=\"item.itemToArray()[0].item\"></div>\n                </div>\n                <div class=\"detail-block\">\n                  <!-- detail data -->\n                    <ng-container *ngFor=\"let itemDetail of item.itemToArray().slice(1);index as j\">\n                        <div class=\"row-block\">\n                          <!-- title of detail data-->\n                          <ng-container *ngFor=\"let headItem of dataHeadArray.slice(j+0,j+1);index as j\">\n                              <span class=\"detail-title  {{bodyClassName+j}}\" >\n                                {{headItem}}\n                              </span>\n                          </ng-container>\n                          <!-- end of title of detail data -->\n                          <!-- detal -->\n                          <span class=\"detail-value  {{bodyClassName+i}}\" >\n                                <div *ngTemplateOutlet=\"itemDetail.item\" \n                                [ngClass]=\"{'text-align-left':itemDetail.textAlign=='left',\n                                            'text-align-right':itemDetail.textAlign=='right',\n                                            'text-align-center':itemDetail.textAlign=='center'}\"></div>\n                          </span>\n                          <!-- end of detail -->\n                        </div>\n                    </ng-container>\n                    <!-- end of detail data -->\n                </div>\n              </div>\n              <!-- end of single item -->\n            </ng-container>\n            <!-- end of main content -->\n        </div>\n    </div>\n</ng-template>",
                styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-style-v{padding-bottom:20px}.table-style-v ::ng-deep ::ng-deep.group-title-text-content .text-block{padding-left:5px}.table-style-v ::ng-deep ::ng-deep.group-title-text-content.style-has-dot{left:-5px}.table-style-v .title-block{text-align:left;border-bottom:1px solid #ececec;padding:15px}.table-style-v .title-block ::ng-deep .table-item.md{width:100%}.table-style-v .detail-block{width:100%;display:block;padding:15px 20px;border-bottom:1px solid #ececec}.table-style-v .row-block{display:flex;width:100%;align-items:center;justify-content:space-between}.table-style-v .row-block+.row-block{margin-top:12px}.table-style-v .row-block .detail-title{width:60%;flex-shrink:0;flex-grow:0;font-size:.875rem;text-align:left}.table-style-v .row-block .detail-value{width:40%;flex-shrink:0;flex-grow:0;font-size:1rem;font-weight:700;text-align:right}.table-style-v .row-block .detail-value ::ng-deep.table-item.md{min-width:100%;width:100%}.table-style-v .row-block .detail-value ::ng-deep.table-item{min-width:100%;width:100%}.table-content{position:relative;background-color:#fff}.table-content .table-first-fixed{width:190px;position:absolute;left:0;top:0}.table-content .table-info-content{width:100%;overflow:hidden}.table-content .table-info-content .body-tr:active .td{background-color:#f1f9fa}.table-content .table-info-content .td,.table-content .table-info-content .th{text-align:center}.table-content .table-info-content .td.first,.table-content .table-info-content .th.first{text-align:left}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:160px;font-size:.875rem}.table-content .table-info-content .td.text-align-center,.table-content .table-info-content .th.text-align-center{text-align:center}.table-content .table-info-content .td.text-align-center ::ng-deep .table-item,.table-content .table-info-content .th.text-align-center ::ng-deep .table-item{text-align:center}.table-content .table-info-content .td.text-align-left,.table-content .table-info-content .th.text-align-left{text-align:left}.table-content .table-info-content .td.text-align-left ::ng-deep .table-item,.table-content .table-info-content .th.text-align-left ::ng-deep .table-item{text-align:left}.table-content .table-info-content .td.text-align-right,.table-content .table-info-content .th.text-align-right{text-align:right}.table-content .table-info-content .td.text-align-right ::ng-deep .table-item,.table-content .table-info-content .th.text-align-right ::ng-deep .table-item{text-align:right}.table-content .table-info-content .th{color:#007ab3;text-align:center}.table-content .table-info-content .th ::ng-deep .table-item{font-size:.875rem}.table-content .rightMore{width:0;height:100%;position:absolute;top:0;right:0;transition:.3s;opacity:0;z-index:99;background-color:#fff;box-shadow:-5px 0 6px 0 rgba(0,0,0,.06);will-change:width,opacity}.table-content .rightMore.rightMoreTrue{width:30px;opacity:1}.table-content.fixed-table{padding-left:190px}.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{display:flex;align-items:center;width:190px;position:absolute;left:0;top:auto}.table-content .table-first-fixed .table,.table-content ::ng-deep app-ui-detection-scroll .table{width:100%;border-collapse:collapse}.table-content .table-first-fixed .th,.table-content ::ng-deep app-ui-detection-scroll .th{padding:10px 15px}.table-content .table-first-fixed .td,.table-content ::ng-deep app-ui-detection-scroll .td{padding:15px;border-top:1px solid #ececec}.table-content .table-first-fixed .td .table-item,.table-content .table-first-fixed .th .table-item{font-size:.875rem}.table-content .sort-content{display:inline-block;white-space:nowrap;max-width:105px}.table-content .sort-content .sort-btn{display:inline-block;vertical-align:middle;width:24px;height:24px;background-image:url(\"data:image/svg+xml,%3Csvg id='sort-none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' enable-background='new 0 0 24 24'%3E%3Cstyle%3E.st1%7Bfill:%23fff%7D%3C/style%3E%3Cg transform='translate(8 5)'%3E%3Cdefs%3E%3Cfilter id='Adobe_OpacityMaskFilter' filterUnits='userSpaceOnUse' x='0' y='0' width='8' height='5'%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Cmask maskUnits='userSpaceOnUse' x='0' y='0' width='8' height='5' id='b_2_'%3E%3Cg filter='url(%23Adobe_OpacityMaskFilter)'%3E%3Cpath id='a_2_' class='st1' d='M0 0h8v5H0V0z'/%3E%3C/g%3E%3C/mask%3E%3Cpath d='M1 5c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7l3-3c.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L4 2.4 1.7 4.7c-.2.2-.4.3-.7.3' mask='url(%23b_2_)' fill='%23006192'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cdefs%3E%3Cfilter id='Adobe_OpacityMaskFilter_1_' filterUnits='userSpaceOnUse' x='0' y='0' width='8' height='5'%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Cmask maskUnits='userSpaceOnUse' x='0' y='0' width='8' height='5' id='d_2_'%3E%3Cg filter='url(%23Adobe_OpacityMaskFilter_1_)'%3E%3Cpath id='c_2_' class='st1' d='M0 0h8v5H0V0z'/%3E%3C/g%3E%3C/mask%3E%3Cpath d='M6.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3 3c-.4.4-1 .4-1.4 0l-3-3C-.1 1.3-.1.7.3.3s1-.4 1.4 0L4 2.6 6.3.3z' mask='url(%23d_2_)' fill='%23006192'/%3E%3C/g%3E%3C/svg%3E\");background-size:24px 24px;background-repeat:no-repeat;background-position:center center}.table-content .sort-content .sort-btn.up{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h8v5H0z'/%3E%3Cpath id='c' d='M0 0h8v5H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(8 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23006192' d='M1 5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.413 1.414L4 2.414 1.706 4.707A.997.997 0 0 1 1 5' mask='url(%23b)'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cmask id='d' fill='%23fff'%3E%3Cuse xlink:href='%23c'/%3E%3C/mask%3E%3Cpath fill='%23C2C2C2' d='M6.293.293a.999.999 0 1 1 1.414 1.414l-3 3a.997.997 0 0 1-1.413 0l-3-3A.999.999 0 1 1 1.706.293L4 2.586 6.293.293z' mask='url(%23d)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.table-content .sort-content .sort-btn.down{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h8v5H0z'/%3E%3Cpath id='c' d='M0 0h8v5H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(8 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23C2C2C2' d='M1 5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.413 1.414L4 2.414 1.706 4.707A.997.997 0 0 1 1 5' mask='url(%23b)'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cmask id='d' fill='%23fff'%3E%3Cuse xlink:href='%23c'/%3E%3C/mask%3E%3Cpath fill='%23006192' d='M6.293.293a.999.999 0 1 1 1.414 1.414l-3 3a.997.997 0 0 1-1.413 0l-3-3A.999.999 0 1 1 1.706.293L4 2.586 6.293.293z' mask='url(%23d)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.table-content .sort-content ::ng-deep .table-item{width:auto;display:inline-block;white-space:normal;vertical-align:middle}.table-content .sort-content.sort ::ng-deep .table-item{min-width:0;max-width:81px}@media screen and (max-width:767px){.table-content.fixed-table{padding-left:160px}.table-content.fixed-table .table-first-fixed,.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{width:160px}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:130px}}"]
            }] }
];
UiTableContentComponent.ctorParameters = () => [
    { type: ElementRef }
];
UiTableContentComponent.propDecorators = {
    tableHead: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => UiTableRowHeadComponent)),] }],
    tableData: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => UiTableRowComponent)),] }],
    head: [{ type: ViewChildren, args: ["head",] }],
    body: [{ type: ViewChildren, args: ["body",] }],
    onItemClick: [{ type: Output }],
    onRowClick: [{ type: Output }],
    onTableScroll: [{ type: Output }],
    thMinHeight: [{ type: Input }],
    tdMinHeight: [{ type: Input }],
    eventLength: [{ type: Input }],
    fixed: [{ type: Input }],
    titleOnlyMobile: [{ type: Input }],
    showControlbar: [{ type: Input }],
    headItem: [{ type: ViewChild, args: ['headItem',] }],
    dataHeadArray: [{ type: Input }],
    dataRowArray: [{ type: Input }],
    isShowTableVerticalView: [{ type: Input }],
    isShowTableVerticalViewChange: [{ type: Output }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UiTableContentComponent.prototype.tableHead;
    /** @type {?} */
    UiTableContentComponent.prototype.tableData;
    /** @type {?} */
    UiTableContentComponent.prototype.head;
    /** @type {?} */
    UiTableContentComponent.prototype.body;
    /** @type {?} */
    UiTableContentComponent.prototype.onItemClick;
    /** @type {?} */
    UiTableContentComponent.prototype.onRowClick;
    /** @type {?} */
    UiTableContentComponent.prototype.onTableScroll;
    /** @type {?} */
    UiTableContentComponent.prototype.bodyClassName;
    /** @type {?} */
    UiTableContentComponent.prototype.thMinHeight;
    /** @type {?} */
    UiTableContentComponent.prototype.tdMinHeight;
    /** @type {?} */
    UiTableContentComponent.prototype.eventLength;
    /** @type {?} */
    UiTableContentComponent.prototype.fixed;
    /** @type {?} */
    UiTableContentComponent.prototype.titleOnlyMobile;
    /** @type {?} */
    UiTableContentComponent.prototype.showControlbar;
    /** @type {?} */
    UiTableContentComponent.prototype.showTitle;
    /** @type {?} */
    UiTableContentComponent.prototype.windowWidth;
    /** @type {?} */
    UiTableContentComponent.prototype.bodyArrayLength;
    /** @type {?} */
    UiTableContentComponent.prototype.eventNum;
    /** @type {?} */
    UiTableContentComponent.prototype.eventData;
    /** @type {?} */
    UiTableContentComponent.prototype.rightMore;
    /** @type {?} */
    UiTableContentComponent.prototype.rightMoreClass;
    /** @type {?} */
    UiTableContentComponent.prototype.headtext;
    /** @type {?} */
    UiTableContentComponent.prototype.elementRef;
    /** @type {?} */
    UiTableContentComponent.prototype.headItem;
    /** @type {?} */
    UiTableContentComponent.prototype.headItemData;
    /** @type {?} */
    UiTableContentComponent.prototype.dataHeadArray;
    /** @type {?} */
    UiTableContentComponent.prototype.dataRowArray;
    /**
     * @type {?}
     * @private
     */
    UiTableContentComponent.prototype._isShowTableVerticalView;
    /** @type {?} */
    UiTableContentComponent.prototype.isShowTableVerticalViewChange;
    /**
     * @type {?}
     * @private
     */
    UiTableContentComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWNvbnRlbnQvdWktdGFibGUtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBZSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZMLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBUTNGLE1BQU07Ozs7SUFpREosWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF4Q2xDLGdCQUFXLEdBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0Msa0JBQWEsR0FBVSxlQUFlLENBQUM7UUFDOUIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7UUFDckIsVUFBSyxHQUFVLElBQUksQ0FBQztRQUNwQixvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUNoQyxtQkFBYyxHQUFVLElBQUksQ0FBQztRQUUvQixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBR2hDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztZQUNQLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQTtRQUNw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ZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBdkp6Qyw0Q0FBa0c7O0lBR2xHLDRDQUE2Rjs7SUFHN0YsdUNBQXNEOztJQUN0RCx1Q0FBc0Q7O0lBQ3RELDhDQUF5Qzs7SUFDekMsNkNBQXdDOztJQUN4QyxnREFBMkM7O0lBQzNDLGdEQUF1Qzs7SUFDdkMsOENBQWlDOztJQUNqQyw4Q0FBaUM7O0lBQ2pDLDhDQUE4Qjs7SUFDOUIsd0NBQTZCOztJQUM3QixrREFBeUM7O0lBQ3pDLGlEQUFzQzs7SUFFdEMsNENBQWdDOztJQUNoQyw4Q0FBMkI7O0lBQzNCLGtEQUF1Qjs7SUFDdkIsMkNBQWE7O0lBQ2IsNENBQ29COztJQUNwQiw0Q0FBMEI7O0lBQzFCLGlEQUFvQjs7SUFDcEIsMkNBQWM7O0lBR2QsNkNBQThCOztJQUM5QiwyQ0FBNkM7O0lBQzdDLCtDQUF5Qjs7SUFFekIsZ0RBQTRCOztJQUM1QiwrQ0FBMkI7Ozs7O0lBRTNCLDJEQUF5Qzs7SUFRekMsZ0VBQTZEOzs7OztJQUdqRCw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBmb3J3YXJkUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVpVGFibGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi91aS10YWJsZS1yb3cvdWktdGFibGUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaVRhYmxlUm93SGVhZENvbXBvbmVudCB9IGZyb20gJy4uL3VpLXRhYmxlLXJvdy1oZWFkL3VpLXRhYmxlLXJvdy1oZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaURldGVjdGlvblNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4uL3VpLWRldGVjdGlvbi1zY3JvbGwvdWktZGV0ZWN0aW9uLXNjcm9sbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdWktdGFibGUtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS10YWJsZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktdGFibGUtY29udGVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpVGFibGVDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFVpVGFibGVSb3dIZWFkQ29tcG9uZW50KSkgdGFibGVIZWFkOlF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgLy9AQ29udGVudENoaWxkcmVuKFVpVGFibGVSb3dIZWFkQ29tcG9uZW50KSB0YWJsZUhlYWQ6UXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICAvL0BDb250ZW50Q2hpbGRyZW4oVWlUYWJsZVJvd0NvbXBvbmVudCkgdGFibGVEYXRhOlF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+VWlUYWJsZVJvd0NvbXBvbmVudCkpIHRhYmxlRGF0YTpRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG4gIFxuICAvLyBAVmlld0NoaWxkKFwiaGVhZFwiKSBoZWFkOlF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgQFZpZXdDaGlsZHJlbihcImhlYWRcIikgaGVhZDpRdWVyeUxpc3Q8RWxlbWVudFJlZjxhbnk+PjtcbiAgQFZpZXdDaGlsZHJlbihcImJvZHlcIikgYm9keTpRdWVyeUxpc3Q8RWxlbWVudFJlZjxhbnk+PjtcbiAgQE91dHB1dCgpIG9uSXRlbUNsaWNrPW5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uUm93Q2xpY2s9bmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25UYWJsZVNjcm9sbD1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGJvZHlDbGFzc05hbWU6c3RyaW5nID0gXCJib2R5Q2xhc3NOYW1lXCI7XG4gIEBJbnB1dCgpIHRoTWluSGVpZ2h0Om51bWJlciA9IDMwO1xuICBASW5wdXQoKSB0ZE1pbkhlaWdodDpudW1iZXIgPSA3MDtcbiAgQElucHV0KCkgZXZlbnRMZW5ndGg6bnVtYmVyPTM7ICBcbiAgQElucHV0KCkgZml4ZWQ6Ym9vbGVhbj0gdHJ1ZTtcbiAgQElucHV0KCkgdGl0bGVPbmx5TW9iaWxlOmJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd0NvbnRyb2xiYXI6Ym9vbGVhbj0gdHJ1ZTtcblxuICBwdWJsaWMgc2hvd1RpdGxlOmJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgYm9keUFycmF5TGVuZ3RoOm51bWJlcjtcbiAgZXZlbnROdW0gPSAwO1xuICBldmVudERhdGE9eyBpbmRleDowLFxuICAgICAgICAgICAgICBldmVudDowfVxuICByaWdodE1vcmU6Ym9vbGVhbiA9IGZhbHNlO1xuICByaWdodE1vcmVDbGFzcyA9ICcnO1xuICBoZWFkdGV4dCA9IFtdO1xuXG4gIFxuICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaGVhZEl0ZW0nKSBoZWFkSXRlbSA6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBoZWFkSXRlbURhdGEgPSBbXTtcblxuICBASW5wdXQoKSBkYXRhSGVhZEFycmF5ID0gW107XG4gIEBJbnB1dCgpIGRhdGFSb3dBcnJheSA9IFtdO1xuXG4gIHByaXZhdGUgX2lzU2hvd1RhYmxlVmVydGljYWxWaWV3ID0gZmFsc2U7XG4gIEBJbnB1dCgpIFxuICBnZXQgaXNTaG93VGFibGVWZXJ0aWNhbFZpZXcoKXtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93VGFibGVWZXJ0aWNhbFZpZXc7XG4gIH1cbiAgc2V0IGlzU2hvd1RhYmxlVmVydGljYWxWaWV3KHZhbDpib29sZWFuKXtcbiAgICB0aGlzLl9pc1Nob3dUYWJsZVZlcnRpY2FsVmlldyA9IHZhbDtcbiAgfVxuICBAT3V0cHV0KCkgaXNTaG93VGFibGVWZXJ0aWNhbFZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWYgOiBFbGVtZW50UmVmKSB7IH1cblxuICBoZWFkQXJyYXkoKXtcbiAgICBpZih0aGlzLnRhYmxlSGVhZCAhPSB1bmRlZmluZWQpe1xuICAgICAgbGV0IGhlYWREYXRhOkFycmF5PGFueT49dGhpcy50YWJsZUhlYWQudG9BcnJheSgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RhYmxlSGVhZCcsdGhpcy50YWJsZUhlYWQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RhYmxlSGVhZCBsZW5nJywgdGhpcy50YWJsZUhlYWQubGVuZ3RoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdoZWFkRGF0YScsaGVhZERhdGEpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2hlYWREYXRhWzBdJyxoZWFkRGF0YVswXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZGF0YSBpdGVtMmFycmF5JyxoZWFkRGF0YVswXS5pdGVtVG9BcnJheSgpKTtcbiAgICAgIGlmKGhlYWREYXRhWzBdLml0ZW1Ub0FycmF5KCkgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuIGhlYWREYXRhWzBdLml0ZW1Ub0FycmF5KCk7XG4gICAgICB9IFxuICAgIH1cbiAgfVxuICBib2R5QXJyYXkoKXtcbiAgICBpZih0aGlzLnRhYmxlRGF0YSAhPSB1bmRlZmluZWQpe1xuICAgICAgbGV0IGJvZHlEYXRhOkFycmF5PGFueT49dGhpcy50YWJsZURhdGEudG9BcnJheSgpO1xuICAgICAgICB0aGlzLmJvZHlBcnJheUxlbmd0aCA9IGJvZHlEYXRhLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGJvZHlEYXRhO1xuICAgIH1cbiAgICBcbiAgfVxuICBzZXRIZWlnaHQoKXtcbiAgICBsZXQgdGQgPSB0aGlzLmJvZHkudG9BcnJheSgpLFxuICAgICAgICB0ZExlbmd0aCA9IHRkLmxlbmd0aDtcbiAgICBsZXQgdGggPSB0aGlzLmhlYWQudG9BcnJheSgpLFxuICAgICAgICB0aExlbmd0aCA9IHRoLmxlbmd0aDtcbiAgICBsZXQgcm93TGVuZ3RoID0gdGhpcy50YWJsZURhdGEudG9BcnJheSgpLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRkTGVuZ3RoOyBpKyspe1xuICAgICAgdGRbaV0ubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBpJXJvd0xlbmd0aD90aGlzLnRkTWluSGVpZ2h0KydweCc6J2F1dG8nO1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoTGVuZ3RoOyBpKyspe1xuICAgICAgdGhbaV0ubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBpP3RoaXMudGhNaW5IZWlnaHQrJ3B4JzonYXV0byc7XG4gICAgfVxuICB9XG5cbiAgLy8gY2hhZ25lIHRhYmxlIHZpZXdcbiAgY2hhbmdlVGFibGVWaWV3KGlzVmVydGljYWxWaWV3KXtcbiAgICAvL2NvbnNvbGUubG9nKCdjbGljaycsIGlzVmVydGljYWxWaWV3KTtcbiAgICB0aGlzLmlzU2hvd1RhYmxlVmVydGljYWxWaWV3ID0gaXNWZXJ0aWNhbFZpZXc7XG4gICAgdGhpcy5pc1Nob3dUYWJsZVZlcnRpY2FsVmlld0NoYW5nZS5lbWl0KHRoaXMuaXNTaG93VGFibGVWZXJ0aWNhbFZpZXcpO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHt0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7fVxuXG4gIHNldEZpbmFsSGVpZ2h0KGFycmF5OkFycmF5PGFueT4sbGVuZ3RoOm51bWJlcixoZWlnaHQ6bnVtYmVyKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgYXJyYXlbaV0uc3R5bGUuaGVpZ2h0PSBoZWlnaHQrXCJweFwiO1xuICAgICAgLy8gY29uc29sZS5sb2coYXJyYXlbaV0saGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgZ2V0Um93SGVpZ2h0KGlkTmFtZTpTdHJpbmcsIHJvd0xlbmd0aDpudW1iZXIpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3dMZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgZG9tRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGlkTmFtZStcIlwiK2kpLFxuICAgICAgICAgIGRvbUxlbmd0aCA9IGRvbUVsZW1lbnQubGVuZ3RoLFxuICAgICAgICAgIGRvbUhBcnJheTpBcnJheTxudW1iZXI+ID0gW107XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgZG9tTGVuZ3RoOyBqKyspe1xuICAgICAgICBkb21IQXJyYXkucHVzaChkb21FbGVtZW50W2pdLm9mZnNldEhlaWdodCk7XG4gICAgICB9XG4gICAgICBsZXQgdGRIZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBkb21IQXJyYXkpO1xuICAgICAgLy8gY29uc29sZS5sb2coZG9tRWxlbWVudCx0ZEhlaWdodCk7XG4gICAgICB0aGlzLnNldEZpbmFsSGVpZ2h0KGRvbUVsZW1lbnQsZG9tTGVuZ3RoLHRkSGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgTW9kaWZ5RE9NRWxlbWVudCgpOnZvaWR7XG4gICAgbGV0IHJvd0xlbmd0aCAgPSB0aGlzLmJvZHlBcnJheUxlbmd0aDtcbiAgICBsZXQgaGVhZExlbmd0aCA9IHRoaXMuaGVhZEFycmF5KCkubGVuZ3RoO1xuICAgIC8vIGNvbnNvbGUubG9nKHJvd0xlbmd0aCxoZWFkTGVuZ3RoKTtcbiAgICB0aGlzLmdldFJvd0hlaWdodCgnLmhlYWRDbGFzc05hbWUnLCBoZWFkTGVuZ3RoKTtcbiAgICB0aGlzLmdldFJvd0hlaWdodCgnLmJvZHlDbGFzc05hbWUnLCByb3dMZW5ndGgpO1xuICB9XG4gIGNvbnJ0b2xNb3JlU2hvdyhvYmo6VWlEZXRlY3Rpb25TY3JvbGxDb21wb25lbnRbJ3Njcm9sbE1zZyddKXtcbiAgICBjb25zb2xlLmxvZyhcIm9iai5yaWdodFwiLG9iai5yaWdodCk7XG4gICAgLy8gdGhpcy5yaWdodE1vcmUgPSAhb2JqLnJpZ2h0O1xuICAgIHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy5yaWdodE1vcmUgPSAhb2JqLnJpZ2h0OyB9LCAwKTtcbiAgICAvLyB0aGlzLnJpZ2h0TW9yZUNsYXNzID0gb2JqLnJpZ2h0PycnOiAncmlnaHRNb3JlVHJ1ZSc7XG4gICAgdGhpcy5vblRhYmxlU2Nyb2xsLmVtaXQoKTtcbiAgfVxuICBzZXRFdmVudEluZGV4KG4pe1xuICAgIHJldHVybiBuICUgdGhpcy5ldmVudExlbmd0aDtcbiAgfVxuICBpdGVtQ2xpY2soaW5kZXg6bnVtYmVyLGV2ZW50Om51bWJlcil7XG4gICAgdGhpcy5ldmVudE51bSsrO1xuICAgIHRoaXMuZXZlbnREYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5ldmVudERhdGEuZXZlbnQgPSBldmVudCAlIHRoaXMuZXZlbnRMZW5ndGg7XG4gICAgdGhpcy5vbkl0ZW1DbGljay5lbWl0KHRoaXMuZXZlbnREYXRhKTtcbiAgfVxuICByb3dDbGljayhpbmRleDpudW1iZXIpe1xuICAgIHRoaXMub25Sb3dDbGljay5lbWl0KGluZGV4KTtcbiAgfVxuICBjaGVja1RpdGxlU2hvdygpe1xuICAgIGlmKHRoaXMudGl0bGVPbmx5TW9iaWxlKXtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e3RoaXMuc2hvd1RpdGxlID0gdGhpcy53aW5kb3dXaWR0aDwxMDI0P3RydWU6ZmFsc2U7fSwwKTtcbiAgICB9XG4gIH1cbiAgc2V0VGFibGVIZWlnaHQoKXtcbiAgICBpZih0aGlzLmZpeGVkKXtcbiAgICAgIHRoaXMuc2V0SGVpZ2h0KCk7XG4gICAgICB0aGlzLk1vZGlmeURPTUVsZW1lbnQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmNoZWNrVGl0bGVTaG93KCk7XG4gICAgdGhpcy5zZXRUYWJsZUhlaWdodCgpO1xuICAgIHRoaXMud2luZG93V2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICBcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLmNoZWNrVGl0bGVTaG93KCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoKTtcblxuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMuc2V0VGFibGVIZWlnaHQoKTtcbiAgICB9LDApO1xuICB9XG59XG4iXX0=