import { OnInit } from '@angular/core';
import { Language } from '@allianzSND/core';
import { CustomerImportGroup } from '../bean/customer-import-group';
export declare class CustomerImportComponent implements OnInit {
    importContractMap: Map<string, CustomerImportGroup>;
    private importCustomer;
    language: Language;
    constructor();
    ngOnInit(): void;
    doImport(): void;
}
