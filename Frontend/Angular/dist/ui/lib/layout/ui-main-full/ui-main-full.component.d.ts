import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class UiMainFullComponent implements OnInit {
    private changeDector;
    isLoadingFinish: boolean;
    isLoadingFinishChange: EventEmitter<{}>;
    refreshCallback: EventEmitter<{}>;
    _isLoadingFinish: boolean;
    constructor(changeDector: ChangeDetectorRef);
    ngOnInit(): void;
    refreshContent(event: any): void;
}
