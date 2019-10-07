import { OnInit } from '@angular/core';
import { Language, showRule } from '@allianzSND/core';
import { CustomerImportGroup } from '../bean/customer-import-group';
export declare class CustomerImportComponent implements OnInit {
    private showRule;
    importContractMap: Map<string, CustomerImportGroup>;
    private importCustomer;
    language: Language;
    constructor(showRule: showRule);
    ngOnInit(): void;
    doImport(): void;
    toDisplayName(firstname: string, lastname: string): string;
}
