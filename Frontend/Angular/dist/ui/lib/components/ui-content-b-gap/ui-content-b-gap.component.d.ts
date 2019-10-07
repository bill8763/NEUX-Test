import { OnInit } from '@angular/core';
import { CONTENTGAP } from '../../model';
export declare class UiContentBGapComponent implements OnInit {
    gapSize: CONTENTGAP;
    constructor();
    handleGap(type: CONTENTGAP): "contentGap20" | "contentGap40";
    ngOnInit(): void;
}
