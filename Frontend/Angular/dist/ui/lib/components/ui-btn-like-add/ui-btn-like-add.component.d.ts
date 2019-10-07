import { OnInit, EventEmitter } from '@angular/core';
export declare class UiBtnLikeAddComponent implements OnInit {
    isLike: boolean;
    private _isLike;
    isDisable: boolean;
    onChange: EventEmitter<boolean>;
    likeClasses: string;
    disableClasses: string;
    totalClasses: string;
    constructor();
    ngOnInit(): void;
    changeClass(): void;
    toggleLike(): boolean;
}
