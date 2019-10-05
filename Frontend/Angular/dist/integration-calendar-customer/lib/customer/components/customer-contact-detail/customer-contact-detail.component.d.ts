import { OnInit } from '@angular/core';
import { MetaService, DisplayMetaComponent, ProfileCodeService, DefaultMetaParser, InputExecutor, MetaColumn, MetaController } from '@allianzSND/core';
export declare class CustomerContactDetailComponent extends DisplayMetaComponent implements OnInit {
    private customMetaController;
    data: any;
    readonly columnConfig: Array<MetaColumn>;
    constructor(metaService: MetaService, profileCodeService: ProfileCodeService, metaParser: DefaultMetaParser, metaExecutor: InputExecutor, customMetaController: MetaController);
    ngOnInit(): void;
    getMetaID(): string;
    getMetaParams(): any;
    onDataUpdated(): void;
}
