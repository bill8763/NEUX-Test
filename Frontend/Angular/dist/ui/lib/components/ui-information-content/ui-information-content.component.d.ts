import { OnInit, ElementRef, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActionService } from '@allianzSND/core';
export declare class UiInformationContentComponent implements OnInit, OnDestroy {
    private changeDector;
    private _elementRef;
    private actionService;
    infoInfoContent: ElementRef;
    infoScrollContent: ElementRef;
    arrowContent: ElementRef;
    paddindData: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    maxWidth: number;
    controlBtn: ElementRef;
    btnOnClick: EventEmitter<{}>;
    defaultPos: string;
    showArrow: boolean;
    arrowML: string;
    arrowMT: string;
    opacity: boolean;
    show: boolean;
    private unsubscribe$;
    constructor(changeDector: ChangeDetectorRef, _elementRef: ElementRef, actionService: ActionService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getStyle(el: any): any;
    getWH(el: any, name: any): any;
    controlContentPostion(): {
        dom: any;
        topGap: any;
        rightGap: number;
        bottomGap: number;
        leftGap: any;
        arrawPos: any;
        windowHeight: number;
        infoDomSize: any;
        centerPos: any;
    };
    btnClick(): void;
    private unlockScroll;
    updateView(): void;
    documentClick(event: MouseEvent): void;
}
