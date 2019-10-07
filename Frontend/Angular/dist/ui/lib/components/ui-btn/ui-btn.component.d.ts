import { OnInit, EventEmitter, Renderer2, ElementRef } from '@angular/core';
export declare class UiBtnComponent implements OnInit {
    private el;
    private _renderer;
    btnWd: string;
    btnHeight: string;
    btnStyle: string;
    btnColor: string;
    id: string;
    name: string;
    private _isDisable;
    classWd: string;
    classHeight: string;
    classStyle: string;
    classDisable: string;
    btnRenderStyle: string;
    isDisableChange: EventEmitter<{}>;
    isDisable: boolean;
    ClickBtn: EventEmitter<string>;
    onClickBtn(e: any): void;
    _btnGroup: string;
    constructor(el: ElementRef, _renderer: Renderer2);
    settingBtnStyle(): void;
    ngOnInit(): void;
}
