import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { MetaService, MetaController, FormMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor, MetaColumn } from '@allianzSND/core';
import { Subject } from 'rxjs';
export declare class CustomerContactEditComponent extends FormMetaComponent implements OnInit, OnDestroy {
    private customMetaController;
    data: any;
    readonly columnConfig: Array<MetaColumn>;
    private customerClientID;
    private unsubscribe$;
    saveSubject: Subject<any>;
    save: EventEmitter<any>;
    constructor(metaService: MetaService, profileCodeService: ProfileCodeService, metaParser: DefaultMetaParser, metaExecutor: InputExecutor, customMetaController: MetaController);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getMetaParams(): {
        CustomerClientID: string;
    };
    btnClick(type: string, id: string): void;
    getMetaID(): string;
    onValidateAll(): boolean;
    onValueChange(column: string, value: any, groupId: string, index: number): void;
}
