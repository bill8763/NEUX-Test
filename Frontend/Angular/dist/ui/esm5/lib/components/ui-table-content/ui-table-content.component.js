/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, Output, Input, ElementRef, ViewChildren, EventEmitter, HostListener, forwardRef, ViewChild } from '@angular/core';
import { UiTableRowComponent } from '../ui-table-row/ui-table-row.component';
import { UiTableRowHeadComponent } from '../ui-table-row-head/ui-table-row-head.component';
var UiTableContentComponent = /** @class */ (function () {
    function UiTableContentComponent(_elementRef) {
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
    Object.defineProperty(UiTableContentComponent.prototype, "isShowTableVerticalView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShowTableVerticalView;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isShowTableVerticalView = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.headArray = /**
     * @return {?}
     */
    function () {
        if (this.tableHead != undefined) {
            /** @type {?} */
            var headData = this.tableHead.toArray();
            // console.log('tableHead',this.tableHead);
            // console.log('tableHead leng', this.tableHead.length);
            // console.log('headData',headData);
            // console.log('headData[0]',headData[0]);
            // console.log('data item2array',headData[0].itemToArray());
            if (headData[0].itemToArray() != undefined) {
                return headData[0].itemToArray();
            }
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.bodyArray = /**
     * @return {?}
     */
    function () {
        if (this.tableData != undefined) {
            /** @type {?} */
            var bodyData = this.tableData.toArray();
            this.bodyArrayLength = bodyData.length;
            return bodyData;
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.setHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var td = this.body.toArray();
        /** @type {?} */
        var tdLength = td.length;
        /** @type {?} */
        var th = this.head.toArray();
        /** @type {?} */
        var thLength = th.length;
        /** @type {?} */
        var rowLength = this.tableData.toArray().length;
        for (var i = 0; i < tdLength; i++) {
            td[i].nativeElement.style.height = i % rowLength ? this.tdMinHeight + 'px' : 'auto';
        }
        for (var i = 0; i < thLength; i++) {
            th[i].nativeElement.style.height = i ? this.thMinHeight + 'px' : 'auto';
        }
    };
    // chagne table view
    // chagne table view
    /**
     * @param {?} isVerticalView
     * @return {?}
     */
    UiTableContentComponent.prototype.changeTableView = 
    // chagne table view
    /**
     * @param {?} isVerticalView
     * @return {?}
     */
    function (isVerticalView) {
        //console.log('click', isVerticalView);
        this.isShowTableVerticalView = isVerticalView;
        this.isShowTableVerticalViewChange.emit(this.isShowTableVerticalView);
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.windowWidth = window.innerWidth; };
    /**
     * @param {?} array
     * @param {?} length
     * @param {?} height
     * @return {?}
     */
    UiTableContentComponent.prototype.setFinalHeight = /**
     * @param {?} array
     * @param {?} length
     * @param {?} height
     * @return {?}
     */
    function (array, length, height) {
        for (var i = 0; i < length; i++) {
            array[i].style.height = height + "px";
            // console.log(array[i],height);
        }
    };
    /**
     * @param {?} idName
     * @param {?} rowLength
     * @return {?}
     */
    UiTableContentComponent.prototype.getRowHeight = /**
     * @param {?} idName
     * @param {?} rowLength
     * @return {?}
     */
    function (idName, rowLength) {
        for (var i = 0; i < rowLength; i++) {
            /** @type {?} */
            var domElement = this._elementRef.nativeElement.querySelectorAll(idName + "" + i);
            /** @type {?} */
            var domLength = domElement.length;
            /** @type {?} */
            var domHArray = [];
            for (var j = 0; j < domLength; j++) {
                domHArray.push(domElement[j].offsetHeight);
            }
            /** @type {?} */
            var tdHeight = Math.max.apply(null, domHArray);
            // console.log(domElement,tdHeight);
            this.setFinalHeight(domElement, domLength, tdHeight);
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.ModifyDOMElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rowLength = this.bodyArrayLength;
        /** @type {?} */
        var headLength = this.headArray().length;
        // console.log(rowLength,headLength);
        this.getRowHeight('.headClassName', headLength);
        this.getRowHeight('.bodyClassName', rowLength);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    UiTableContentComponent.prototype.conrtolMoreShow = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        console.log("obj.right", obj.right);
        // this.rightMore = !obj.right;
        setTimeout((/**
         * @return {?}
         */
        function () { _this.rightMore = !obj.right; }), 0);
        // this.rightMoreClass = obj.right?'': 'rightMoreTrue';
        this.onTableScroll.emit();
    };
    /**
     * @param {?} n
     * @return {?}
     */
    UiTableContentComponent.prototype.setEventIndex = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return n % this.eventLength;
    };
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    UiTableContentComponent.prototype.itemClick = /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        this.eventNum++;
        this.eventData.index = index;
        this.eventData.event = event % this.eventLength;
        this.onItemClick.emit(this.eventData);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    UiTableContentComponent.prototype.rowClick = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.onRowClick.emit(index);
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.checkTitleShow = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.titleOnlyMobile) {
            setTimeout((/**
             * @return {?}
             */
            function () { _this.showTitle = _this.windowWidth < 1024 ? true : false; }), 0);
        }
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.setTableHeight = /**
     * @return {?}
     */
    function () {
        if (this.fixed) {
            this.setHeight();
            this.ModifyDOMElement();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiTableContentComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.checkTitleShow();
        this.setTableHeight();
        this.windowWidth = event.target.innerWidth;
    };
    /**
     * @return {?}
     */
    UiTableContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkTitleShow();
        this.setHeight();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.setTableHeight();
        }), 0);
    };
    UiTableContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ui-table-content',
                    template: "<!-- controalbar -->\n<snd-ui-table-control-bar (onClick)=\"changeTableView($event)\" *ngIf=\"showControlbar\" [isVertical]=\"isShowTableVerticalView\">\n  <ng-content select=\"[controlBarContent]\"></ng-content>\n</snd-ui-table-control-bar>\n<!-- end of control bar -->\n\n<ng-container *ngIf=\"!isShowTableVerticalView || windowWidth >= 1024; else verticalTable\">\n  <div class=\"table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n    <div class=\"table-info-content\">\n      <app-ui-detection-scroll (scrollEventData)=\"conrtolMoreShow($event)\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"head-tr\" *ngIf=\"showTitle\">\n                <ng-container *ngFor=\"let item of headArray();index as i\">\n                  <th class=\"th  headClassName0\" #head [ngClass]=\"{'first':i==0,\n                                                                  'text-align-left':item.textAlign=='left',\n                                                                  'text-align-right':item.textAlign=='right',\n                                                                  'text-align-center':item.textAlign=='center'}\">\n                    <div class=\"\" [ngClass]=\"{'sort':item.sort,\n                                              'sort-content':i}\">\n                      <ng-container *ngIf=\"item.sort\">\n                        <div class=\"sort-btn\" (click)=\"itemClick(i,item.setIndex())\" \n                        [ngClass]=\"{  'up'   : setEventIndex(item.eventIndex)==1,\n                                      'down' : setEventIndex(item.eventIndex)==2}\">\n                        </div>\n                      </ng-container>\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </div>\n                  </th>\n                </ng-container>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let row of bodyArray();index as i\">\n                <tr class=\"body-tr\" [attr.body]=\"i\" (click)=\"rowClick(i)\" *ngIf=\"row != undefined\">\n                  <ng-container *ngFor=\"let item of row.itemToArray();index as j\">\n                    <td class=\"td  {{bodyClassName+i}}\" #body  [ngClass]=\"{'first':j==0,\n                                                                    'text-align-left':item.textAlign=='left',\n                                                                    'text-align-right':item.textAlign=='right',\n                                                                    'text-align-center':item.textAlign=='center'}\">\n                      <div *ngTemplateOutlet=\"item.item\"></div>\n                    </td>\n                  </ng-container>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n      </app-ui-detection-scroll>\n      <div class=\"rightMore\" [ngClass]=\"{'rightMoreTrue':rightMore}\"></div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #verticalTable>\n    <div *ngIf=\"windowWidth < 1024\" class=\"table-style-v table-content\" [ngClass]=\"{'fixed-table':fixed}\">\n        <div class=\"table-info-content\">\n            <!-- main content -->\n            <ng-container *ngFor=\"let item of bodyArray();index as i; let last = last\">\n              <!-- single item -->\n              <div class=\"vertical-item-block\" (click)=\"rowClick(i)\">\n                <div class=\"title-block\"  [ngClass]=\"{'first':1,\n                                                                  'text-align-left':item.textAlign=='left',\n                                                                  'text-align-right':item.textAlign=='right',\n                                                                  'text-align-center':item.textAlign=='center'}\">\n                  <div *ngTemplateOutlet=\"item.itemToArray()[0].item\"></div>\n                </div>\n                <div class=\"detail-block\">\n                  <!-- detail data -->\n                    <ng-container *ngFor=\"let itemDetail of item.itemToArray().slice(1);index as j\">\n                        <div class=\"row-block\">\n                          <!-- title of detail data-->\n                          <ng-container *ngFor=\"let headItem of dataHeadArray.slice(j+0,j+1);index as j\">\n                              <span class=\"detail-title  {{bodyClassName+j}}\" >\n                                {{headItem}}\n                              </span>\n                          </ng-container>\n                          <!-- end of title of detail data -->\n                          <!-- detal -->\n                          <span class=\"detail-value  {{bodyClassName+i}}\" >\n                                <div *ngTemplateOutlet=\"itemDetail.item\" \n                                [ngClass]=\"{'text-align-left':itemDetail.textAlign=='left',\n                                            'text-align-right':itemDetail.textAlign=='right',\n                                            'text-align-center':itemDetail.textAlign=='center'}\"></div>\n                          </span>\n                          <!-- end of detail -->\n                        </div>\n                    </ng-container>\n                    <!-- end of detail data -->\n                </div>\n              </div>\n              <!-- end of single item -->\n            </ng-container>\n            <!-- end of main content -->\n        </div>\n    </div>\n</ng-template>",
                    styles: ["@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}.table-style-v{padding-bottom:20px}.table-style-v ::ng-deep ::ng-deep.group-title-text-content .text-block{padding-left:5px}.table-style-v ::ng-deep ::ng-deep.group-title-text-content.style-has-dot{left:-5px}.table-style-v .title-block{text-align:left;border-bottom:1px solid #ececec;padding:15px}.table-style-v .title-block ::ng-deep .table-item.md{width:100%}.table-style-v .detail-block{width:100%;display:block;padding:15px 20px;border-bottom:1px solid #ececec}.table-style-v .row-block{display:flex;width:100%;align-items:center;justify-content:space-between}.table-style-v .row-block+.row-block{margin-top:12px}.table-style-v .row-block .detail-title{width:60%;flex-shrink:0;flex-grow:0;font-size:.875rem;text-align:left}.table-style-v .row-block .detail-value{width:40%;flex-shrink:0;flex-grow:0;font-size:1rem;font-weight:700;text-align:right}.table-style-v .row-block .detail-value ::ng-deep.table-item.md{min-width:100%;width:100%}.table-style-v .row-block .detail-value ::ng-deep.table-item{min-width:100%;width:100%}.table-content{position:relative;background-color:#fff}.table-content .table-first-fixed{width:190px;position:absolute;left:0;top:0}.table-content .table-info-content{width:100%;overflow:hidden}.table-content .table-info-content .body-tr:active .td{background-color:#f1f9fa}.table-content .table-info-content .td,.table-content .table-info-content .th{text-align:center}.table-content .table-info-content .td.first,.table-content .table-info-content .th.first{text-align:left}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:160px;font-size:.875rem}.table-content .table-info-content .td.text-align-center,.table-content .table-info-content .th.text-align-center{text-align:center}.table-content .table-info-content .td.text-align-center ::ng-deep .table-item,.table-content .table-info-content .th.text-align-center ::ng-deep .table-item{text-align:center}.table-content .table-info-content .td.text-align-left,.table-content .table-info-content .th.text-align-left{text-align:left}.table-content .table-info-content .td.text-align-left ::ng-deep .table-item,.table-content .table-info-content .th.text-align-left ::ng-deep .table-item{text-align:left}.table-content .table-info-content .td.text-align-right,.table-content .table-info-content .th.text-align-right{text-align:right}.table-content .table-info-content .td.text-align-right ::ng-deep .table-item,.table-content .table-info-content .th.text-align-right ::ng-deep .table-item{text-align:right}.table-content .table-info-content .th{color:#007ab3;text-align:center}.table-content .table-info-content .th ::ng-deep .table-item{font-size:.875rem}.table-content .rightMore{width:0;height:100%;position:absolute;top:0;right:0;transition:.3s;opacity:0;z-index:99;background-color:#fff;box-shadow:-5px 0 6px 0 rgba(0,0,0,.06);will-change:width,opacity}.table-content .rightMore.rightMoreTrue{width:30px;opacity:1}.table-content.fixed-table{padding-left:190px}.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{display:flex;align-items:center;width:190px;position:absolute;left:0;top:auto}.table-content .table-first-fixed .table,.table-content ::ng-deep app-ui-detection-scroll .table{width:100%;border-collapse:collapse}.table-content .table-first-fixed .th,.table-content ::ng-deep app-ui-detection-scroll .th{padding:10px 15px}.table-content .table-first-fixed .td,.table-content ::ng-deep app-ui-detection-scroll .td{padding:15px;border-top:1px solid #ececec}.table-content .table-first-fixed .td .table-item,.table-content .table-first-fixed .th .table-item{font-size:.875rem}.table-content .sort-content{display:inline-block;white-space:nowrap;max-width:105px}.table-content .sort-content .sort-btn{display:inline-block;vertical-align:middle;width:24px;height:24px;background-image:url(\"data:image/svg+xml,%3Csvg id='sort-none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' enable-background='new 0 0 24 24'%3E%3Cstyle%3E.st1%7Bfill:%23fff%7D%3C/style%3E%3Cg transform='translate(8 5)'%3E%3Cdefs%3E%3Cfilter id='Adobe_OpacityMaskFilter' filterUnits='userSpaceOnUse' x='0' y='0' width='8' height='5'%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Cmask maskUnits='userSpaceOnUse' x='0' y='0' width='8' height='5' id='b_2_'%3E%3Cg filter='url(%23Adobe_OpacityMaskFilter)'%3E%3Cpath id='a_2_' class='st1' d='M0 0h8v5H0V0z'/%3E%3C/g%3E%3C/mask%3E%3Cpath d='M1 5c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7l3-3c.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L4 2.4 1.7 4.7c-.2.2-.4.3-.7.3' mask='url(%23b_2_)' fill='%23006192'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cdefs%3E%3Cfilter id='Adobe_OpacityMaskFilter_1_' filterUnits='userSpaceOnUse' x='0' y='0' width='8' height='5'%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Cmask maskUnits='userSpaceOnUse' x='0' y='0' width='8' height='5' id='d_2_'%3E%3Cg filter='url(%23Adobe_OpacityMaskFilter_1_)'%3E%3Cpath id='c_2_' class='st1' d='M0 0h8v5H0V0z'/%3E%3C/g%3E%3C/mask%3E%3Cpath d='M6.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3 3c-.4.4-1 .4-1.4 0l-3-3C-.1 1.3-.1.7.3.3s1-.4 1.4 0L4 2.6 6.3.3z' mask='url(%23d_2_)' fill='%23006192'/%3E%3C/g%3E%3C/svg%3E\");background-size:24px 24px;background-repeat:no-repeat;background-position:center center}.table-content .sort-content .sort-btn.up{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h8v5H0z'/%3E%3Cpath id='c' d='M0 0h8v5H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(8 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23006192' d='M1 5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.413 1.414L4 2.414 1.706 4.707A.997.997 0 0 1 1 5' mask='url(%23b)'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cmask id='d' fill='%23fff'%3E%3Cuse xlink:href='%23c'/%3E%3C/mask%3E%3Cpath fill='%23C2C2C2' d='M6.293.293a.999.999 0 1 1 1.414 1.414l-3 3a.997.997 0 0 1-1.413 0l-3-3A.999.999 0 1 1 1.706.293L4 2.586 6.293.293z' mask='url(%23d)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.table-content .sort-content .sort-btn.down{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h8v5H0z'/%3E%3Cpath id='c' d='M0 0h8v5H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(8 5)'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23C2C2C2' d='M1 5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.413 1.414L4 2.414 1.706 4.707A.997.997 0 0 1 1 5' mask='url(%23b)'/%3E%3C/g%3E%3Cg transform='translate(8 14)'%3E%3Cmask id='d' fill='%23fff'%3E%3Cuse xlink:href='%23c'/%3E%3C/mask%3E%3Cpath fill='%23006192' d='M6.293.293a.999.999 0 1 1 1.414 1.414l-3 3a.997.997 0 0 1-1.413 0l-3-3A.999.999 0 1 1 1.706.293L4 2.586 6.293.293z' mask='url(%23d)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.table-content .sort-content ::ng-deep .table-item{width:auto;display:inline-block;white-space:normal;vertical-align:middle}.table-content .sort-content.sort ::ng-deep .table-item{min-width:0;max-width:81px}@media screen and (max-width:767px){.table-content.fixed-table{padding-left:160px}.table-content.fixed-table .table-first-fixed,.table-content.fixed-table .td.first,.table-content.fixed-table .th.first{width:160px}.table-content .table-info-content .td.first ::ng-deep .table-item,.table-content .table-info-content .th.first ::ng-deep .table-item{min-width:130px}}"]
                }] }
    ];
    UiTableContentComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    UiTableContentComponent.propDecorators = {
        tableHead: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return UiTableRowHeadComponent; })),] }],
        tableData: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return UiTableRowComponent; })),] }],
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
    return UiTableContentComponent;
}());
export { UiTableContentComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGFibGUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VpLXRhYmxlLWNvbnRlbnQvdWktdGFibGUtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBZSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZMLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRzNGO0lBc0RFLGlDQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXhDbEMsZ0JBQVcsR0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGVBQVUsR0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQyxrQkFBYSxHQUFVLGVBQWUsQ0FBQztRQUM5QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFRLENBQUMsQ0FBQztRQUNyQixVQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLG1CQUFjLEdBQVUsSUFBSSxDQUFDO1FBRS9CLGNBQVMsR0FBVyxJQUFJLENBQUM7UUFHaEMsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDO1lBQ1AsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFBO1FBQ3BCLGNBQVMs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NkJBQ04sTUFBTTtnQ0FDTixNQUFNOzhCQUVOLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7a0NBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQWNMLFNBQVMsU0FBQyxVQUFVO2dDQUdwQixLQUFLOytCQUNMLEtBQUs7MENBR0wsS0FBSztnREFPTCxNQUFNOzJCQTBHTixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWUzQyw4QkFBQztDQUFBLEFBNUtELElBNEtDO1NBdktZLHVCQUF1Qjs7O0lBQ2xDLDRDQUFrRzs7SUFHbEcsNENBQTZGOztJQUc3Rix1Q0FBc0Q7O0lBQ3RELHVDQUFzRDs7SUFDdEQsOENBQXlDOztJQUN6Qyw2Q0FBd0M7O0lBQ3hDLGdEQUEyQzs7SUFDM0MsZ0RBQXVDOztJQUN2Qyw4Q0FBaUM7O0lBQ2pDLDhDQUFpQzs7SUFDakMsOENBQThCOztJQUM5Qix3Q0FBNkI7O0lBQzdCLGtEQUF5Qzs7SUFDekMsaURBQXNDOztJQUV0Qyw0Q0FBZ0M7O0lBQ2hDLDhDQUEyQjs7SUFDM0Isa0RBQXVCOztJQUN2QiwyQ0FBYTs7SUFDYiw0Q0FDb0I7O0lBQ3BCLDRDQUEwQjs7SUFDMUIsaURBQW9COztJQUNwQiwyQ0FBYzs7SUFHZCw2Q0FBOEI7O0lBQzlCLDJDQUE2Qzs7SUFDN0MsK0NBQXlCOztJQUV6QixnREFBNEI7O0lBQzVCLCtDQUEyQjs7Ozs7SUFFM0IsMkRBQXlDOztJQVF6QyxnRUFBNkQ7Ozs7O0lBR2pELDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgSW5wdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIGZvcndhcmRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4uL3VpLXRhYmxlLXJvdy91aS10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFVpVGFibGVSb3dIZWFkQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktdGFibGUtcm93LWhlYWQvdWktdGFibGUtcm93LWhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFVpRGV0ZWN0aW9uU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktZGV0ZWN0aW9uLXNjcm9sbC91aS1kZXRlY3Rpb24tc2Nyb2xsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11aS10YWJsZS1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLXRhYmxlLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91aS10YWJsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVWlUYWJsZUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gVWlUYWJsZVJvd0hlYWRDb21wb25lbnQpKSB0YWJsZUhlYWQ6UXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICAvL0BDb250ZW50Q2hpbGRyZW4oVWlUYWJsZVJvd0hlYWRDb21wb25lbnQpIHRhYmxlSGVhZDpRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG4gIC8vQENvbnRlbnRDaGlsZHJlbihVaVRhYmxlUm93Q29tcG9uZW50KSB0YWJsZURhdGE6UXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT5VaVRhYmxlUm93Q29tcG9uZW50KSkgdGFibGVEYXRhOlF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcbiAgXG4gIC8vIEBWaWV3Q2hpbGQoXCJoZWFkXCIpIGhlYWQ6UXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuICBAVmlld0NoaWxkcmVuKFwiaGVhZFwiKSBoZWFkOlF1ZXJ5TGlzdDxFbGVtZW50UmVmPGFueT4+O1xuICBAVmlld0NoaWxkcmVuKFwiYm9keVwiKSBib2R5OlF1ZXJ5TGlzdDxFbGVtZW50UmVmPGFueT4+O1xuICBAT3V0cHV0KCkgb25JdGVtQ2xpY2s9bmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Sb3dDbGljaz1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblRhYmxlU2Nyb2xsPW5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgYm9keUNsYXNzTmFtZTpzdHJpbmcgPSBcImJvZHlDbGFzc05hbWVcIjtcbiAgQElucHV0KCkgdGhNaW5IZWlnaHQ6bnVtYmVyID0gMzA7XG4gIEBJbnB1dCgpIHRkTWluSGVpZ2h0Om51bWJlciA9IDcwO1xuICBASW5wdXQoKSBldmVudExlbmd0aDpudW1iZXI9MzsgIFxuICBASW5wdXQoKSBmaXhlZDpib29sZWFuPSB0cnVlO1xuICBASW5wdXQoKSB0aXRsZU9ubHlNb2JpbGU6Ym9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93Q29udHJvbGJhcjpib29sZWFuPSB0cnVlO1xuXG4gIHB1YmxpYyBzaG93VGl0bGU6Ym9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBib2R5QXJyYXlMZW5ndGg6bnVtYmVyO1xuICBldmVudE51bSA9IDA7XG4gIGV2ZW50RGF0YT17IGluZGV4OjAsXG4gICAgICAgICAgICAgIGV2ZW50OjB9XG4gIHJpZ2h0TW9yZTpib29sZWFuID0gZmFsc2U7XG4gIHJpZ2h0TW9yZUNsYXNzID0gJyc7XG4gIGhlYWR0ZXh0ID0gW107XG5cbiAgXG4gIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdoZWFkSXRlbScpIGhlYWRJdGVtIDogRWxlbWVudFJlZjtcbiAgcHVibGljIGhlYWRJdGVtRGF0YSA9IFtdO1xuXG4gIEBJbnB1dCgpIGRhdGFIZWFkQXJyYXkgPSBbXTtcbiAgQElucHV0KCkgZGF0YVJvd0FycmF5ID0gW107XG5cbiAgcHJpdmF0ZSBfaXNTaG93VGFibGVWZXJ0aWNhbFZpZXcgPSBmYWxzZTtcbiAgQElucHV0KCkgXG4gIGdldCBpc1Nob3dUYWJsZVZlcnRpY2FsVmlldygpe1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3dUYWJsZVZlcnRpY2FsVmlldztcbiAgfVxuICBzZXQgaXNTaG93VGFibGVWZXJ0aWNhbFZpZXcodmFsOmJvb2xlYW4pe1xuICAgIHRoaXMuX2lzU2hvd1RhYmxlVmVydGljYWxWaWV3ID0gdmFsO1xuICB9XG4gIEBPdXRwdXQoKSBpc1Nob3dUYWJsZVZlcnRpY2FsVmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZiA6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIGhlYWRBcnJheSgpe1xuICAgIGlmKHRoaXMudGFibGVIZWFkICE9IHVuZGVmaW5lZCl7XG4gICAgICBsZXQgaGVhZERhdGE6QXJyYXk8YW55Pj10aGlzLnRhYmxlSGVhZC50b0FycmF5KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGFibGVIZWFkJyx0aGlzLnRhYmxlSGVhZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGFibGVIZWFkIGxlbmcnLCB0aGlzLnRhYmxlSGVhZC5sZW5ndGgpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2hlYWREYXRhJyxoZWFkRGF0YSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaGVhZERhdGFbMF0nLGhlYWREYXRhWzBdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhIGl0ZW0yYXJyYXknLGhlYWREYXRhWzBdLml0ZW1Ub0FycmF5KCkpO1xuICAgICAgaWYoaGVhZERhdGFbMF0uaXRlbVRvQXJyYXkoKSAhPSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm4gaGVhZERhdGFbMF0uaXRlbVRvQXJyYXkoKTtcbiAgICAgIH0gXG4gICAgfVxuICB9XG4gIGJvZHlBcnJheSgpe1xuICAgIGlmKHRoaXMudGFibGVEYXRhICE9IHVuZGVmaW5lZCl7XG4gICAgICBsZXQgYm9keURhdGE6QXJyYXk8YW55Pj10aGlzLnRhYmxlRGF0YS50b0FycmF5KCk7XG4gICAgICAgIHRoaXMuYm9keUFycmF5TGVuZ3RoID0gYm9keURhdGEubGVuZ3RoO1xuICAgICAgICByZXR1cm4gYm9keURhdGE7XG4gICAgfVxuICAgIFxuICB9XG4gIHNldEhlaWdodCgpe1xuICAgIGxldCB0ZCA9IHRoaXMuYm9keS50b0FycmF5KCksXG4gICAgICAgIHRkTGVuZ3RoID0gdGQubGVuZ3RoO1xuICAgIGxldCB0aCA9IHRoaXMuaGVhZC50b0FycmF5KCksXG4gICAgICAgIHRoTGVuZ3RoID0gdGgubGVuZ3RoO1xuICAgIGxldCByb3dMZW5ndGggPSB0aGlzLnRhYmxlRGF0YS50b0FycmF5KCkubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGRMZW5ndGg7IGkrKyl7XG4gICAgICB0ZFtpXS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGklcm93TGVuZ3RoP3RoaXMudGRNaW5IZWlnaHQrJ3B4JzonYXV0byc7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhMZW5ndGg7IGkrKyl7XG4gICAgICB0aFtpXS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGk/dGhpcy50aE1pbkhlaWdodCsncHgnOidhdXRvJztcbiAgICB9XG4gIH1cblxuICAvLyBjaGFnbmUgdGFibGUgdmlld1xuICBjaGFuZ2VUYWJsZVZpZXcoaXNWZXJ0aWNhbFZpZXcpe1xuICAgIC8vY29uc29sZS5sb2coJ2NsaWNrJywgaXNWZXJ0aWNhbFZpZXcpO1xuICAgIHRoaXMuaXNTaG93VGFibGVWZXJ0aWNhbFZpZXcgPSBpc1ZlcnRpY2FsVmlldztcbiAgICB0aGlzLmlzU2hvd1RhYmxlVmVydGljYWxWaWV3Q2hhbmdlLmVtaXQodGhpcy5pc1Nob3dUYWJsZVZlcnRpY2FsVmlldyk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge3RoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDt9XG5cbiAgc2V0RmluYWxIZWlnaHQoYXJyYXk6QXJyYXk8YW55PixsZW5ndGg6bnVtYmVyLGhlaWdodDpudW1iZXIpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICBhcnJheVtpXS5zdHlsZS5oZWlnaHQ9IGhlaWdodCtcInB4XCI7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhcnJheVtpXSxoZWlnaHQpO1xuICAgIH1cbiAgfVxuICBnZXRSb3dIZWlnaHQoaWROYW1lOlN0cmluZywgcm93TGVuZ3RoOm51bWJlcil7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHJvd0xlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBkb21FbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaWROYW1lK1wiXCIraSksXG4gICAgICAgICAgZG9tTGVuZ3RoID0gZG9tRWxlbWVudC5sZW5ndGgsXG4gICAgICAgICAgZG9tSEFycmF5OkFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBkb21MZW5ndGg7IGorKyl7XG4gICAgICAgIGRvbUhBcnJheS5wdXNoKGRvbUVsZW1lbnRbal0ub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGxldCB0ZEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGRvbUhBcnJheSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkb21FbGVtZW50LHRkSGVpZ2h0KTtcbiAgICAgIHRoaXMuc2V0RmluYWxIZWlnaHQoZG9tRWxlbWVudCxkb21MZW5ndGgsdGRIZWlnaHQpO1xuICAgIH1cbiAgfVxuICBNb2RpZnlET01FbGVtZW50KCk6dm9pZHtcbiAgICBsZXQgcm93TGVuZ3RoICA9IHRoaXMuYm9keUFycmF5TGVuZ3RoO1xuICAgIGxldCBoZWFkTGVuZ3RoID0gdGhpcy5oZWFkQXJyYXkoKS5sZW5ndGg7XG4gICAgLy8gY29uc29sZS5sb2cocm93TGVuZ3RoLGhlYWRMZW5ndGgpO1xuICAgIHRoaXMuZ2V0Um93SGVpZ2h0KCcuaGVhZENsYXNzTmFtZScsIGhlYWRMZW5ndGgpO1xuICAgIHRoaXMuZ2V0Um93SGVpZ2h0KCcuYm9keUNsYXNzTmFtZScsIHJvd0xlbmd0aCk7XG4gIH1cbiAgY29ucnRvbE1vcmVTaG93KG9iajpVaURldGVjdGlvblNjcm9sbENvbXBvbmVudFsnc2Nyb2xsTXNnJ10pe1xuICAgIGNvbnNvbGUubG9nKFwib2JqLnJpZ2h0XCIsb2JqLnJpZ2h0KTtcbiAgICAvLyB0aGlzLnJpZ2h0TW9yZSA9ICFvYmoucmlnaHQ7XG4gICAgc2V0VGltZW91dCggKCkgPT4geyB0aGlzLnJpZ2h0TW9yZSA9ICFvYmoucmlnaHQ7IH0sIDApO1xuICAgIC8vIHRoaXMucmlnaHRNb3JlQ2xhc3MgPSBvYmoucmlnaHQ/Jyc6ICdyaWdodE1vcmVUcnVlJztcbiAgICB0aGlzLm9uVGFibGVTY3JvbGwuZW1pdCgpO1xuICB9XG4gIHNldEV2ZW50SW5kZXgobil7XG4gICAgcmV0dXJuIG4gJSB0aGlzLmV2ZW50TGVuZ3RoO1xuICB9XG4gIGl0ZW1DbGljayhpbmRleDpudW1iZXIsZXZlbnQ6bnVtYmVyKXtcbiAgICB0aGlzLmV2ZW50TnVtKys7XG4gICAgdGhpcy5ldmVudERhdGEuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmV2ZW50RGF0YS5ldmVudCA9IGV2ZW50ICUgdGhpcy5ldmVudExlbmd0aDtcbiAgICB0aGlzLm9uSXRlbUNsaWNrLmVtaXQodGhpcy5ldmVudERhdGEpO1xuICB9XG4gIHJvd0NsaWNrKGluZGV4Om51bWJlcil7XG4gICAgdGhpcy5vblJvd0NsaWNrLmVtaXQoaW5kZXgpO1xuICB9XG4gIGNoZWNrVGl0bGVTaG93KCl7XG4gICAgaWYodGhpcy50aXRsZU9ubHlNb2JpbGUpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57dGhpcy5zaG93VGl0bGUgPSB0aGlzLndpbmRvd1dpZHRoPDEwMjQ/dHJ1ZTpmYWxzZTt9LDApO1xuICAgIH1cbiAgfVxuICBzZXRUYWJsZUhlaWdodCgpe1xuICAgIGlmKHRoaXMuZml4ZWQpe1xuICAgICAgdGhpcy5zZXRIZWlnaHQoKTtcbiAgICAgIHRoaXMuTW9kaWZ5RE9NRWxlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuY2hlY2tUaXRsZVNob3coKTtcbiAgICB0aGlzLnNldFRhYmxlSGVpZ2h0KCk7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICAgIFxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuY2hlY2tUaXRsZVNob3coKTtcbiAgICB0aGlzLnNldEhlaWdodCgpO1xuXG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgdGhpcy5zZXRUYWJsZUhlaWdodCgpO1xuICAgIH0sMCk7XG4gIH1cbn1cbiJdfQ==