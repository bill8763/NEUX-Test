import { OnInit, TemplateRef } from '@angular/core';
export declare class ListItemComponent implements OnInit {
    content: TemplateRef<any>;
    titleText: string;
    itemMinSize: string;
    heightLight: '';
    id: string;
    constructor();
    ngOnInit(): void;
}
