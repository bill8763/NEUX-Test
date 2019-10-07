import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import { UiInformationService } from '../ui-information/ui-information.service';
import { UiInformationContentComponent } from '../ui-information-content/ui-information-content.component';
export declare class UiInformationBtnComponent implements OnInit {
    protected informationService: UiInformationService;
    messageContent: UiInformationContentComponent;
    inputScrollContent: any;
    inputAutoScrollContent: any;
    crollTopNum: number;
    onClick: EventEmitter<{}>;
    outsideSpace: {
        top: number;
        left: number;
    };
    onAutoScroll: boolean;
    scrollData: any;
    autoScrollOver: boolean;
    private _id;
    btnContent: ElementRef;
    constructor(informationService: UiInformationService);
    ngOnInit(): void;
    scrollFunction(): void;
    getScrollTop(): number;
    countPos(): void;
    btnClick(e: any): void;
    reRendering(dom: any): void;
    closeInfo(): void;
    setContentPos(): void;
}
