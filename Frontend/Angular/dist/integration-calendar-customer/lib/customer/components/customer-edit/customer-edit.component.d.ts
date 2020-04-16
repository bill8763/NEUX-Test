import { OnInit, ElementRef, AfterViewInit, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MetaService, MetaController, AppRouter, FormMetaComponent, ProfileCodeService, DefaultMetaParser, APIExecutor, MetaColumn, TranslateService } from '@allianzSND/core';
import { Language } from '@allianzSND/core';
import { CustomerUtils } from '../../utils/customer-utils';
import { CustomerStoreService } from '../../service/customerStore/customerStore-service';
import { DefaultCustomerEditMetaController } from './DefaultCustomerEditMetaController';
import { AddProgressPoint } from '../../interface/AddProgressPoint';
export declare class CustomerEditComponent extends FormMetaComponent implements OnInit, AfterViewInit, OnDestroy {
    private customerUtils;
    private changeDetector;
    private elementRef;
    private router;
    private translateService;
    private customerStoreService;
    protected metaService: MetaService;
    private addProgressPoint;
    sendContentHeight: EventEmitter<{}>;
    contentHeight: any;
    content: ElementRef;
    private customerDetailSubscribe;
    customerDetail: any;
    pageTitle: string;
    today: Date;
    language: Language;
    disableAge: boolean;
    isDisplaySavePopup: boolean;
    isShow: boolean;
    readonly data: any;
    readonly rowConfig: Array<Array<MetaColumn>>;
    readonly columnConfig: Array<MetaColumn>;
    readonly footerConfig: Array<MetaColumn>;
    private edit_type;
    private customerID;
    private _metaController;
    constructor(customerUtils: CustomerUtils, changeDetector: ChangeDetectorRef, elementRef: ElementRef, router: AppRouter, translateService: TranslateService, defaultMetaController: DefaultCustomerEditMetaController, profileCodeService: ProfileCodeService, metaParser: DefaultMetaParser, metaExecutor: APIExecutor, customMetaController: MetaController, customerStoreService: CustomerStoreService, metaService: MetaService, addProgressPoint: AddProgressPoint);
    ngOnInit(): void;
    ngOnDestroy(): void;
    btnClick(type: string, id: string): void;
    getMetaID(): string;
    getMetaParams(): {
        id: string;
    };
    onValueChange(column: string, value: any, groupId: string, index: number): void;
    onDataUpdated(): void;
    onValidateAll(): boolean;
    ngAfterViewInit(): void;
    private countAgeRange;
    private scrollToError;
    private convertNameToShow;
}