import { OnInit, EventEmitter, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Language } from '@allianzSND/core';
import { CustomerItem } from '../../service/model/CustomerItem';
import { showCustomerRule } from '../../interface/showCustomerRule.interface';
export declare class CustomerListComponent implements OnInit {
    private changeDetecor;
    private elementRef;
    private showCustomerRule;
    isDefaultData: boolean;
    showSearchNoData: boolean;
    loadingFinish: boolean;
    constructor(changeDetecor: ChangeDetectorRef, elementRef: ElementRef, showCustomerRule: showCustomerRule);
    customerClick: EventEmitter<CustomerItem>;
    customerLoad: EventEmitter<any>;
    customerRefresh: EventEmitter<any>;
    customerList: Array<CustomerItem>;
    private _customerList;
    filterType: any;
    private _filterType;
    language: Language;
    onClickCustomerID: any;
    ngOnInit(): void;
    trackByClientID(index: any, item: any): any;
    closeSlidingItems(): Promise<void>;
    onClickCustomer(clientID: string): void;
    loadCustomer(e: any): void;
    refreshCustomer(): void;
    convertNameToShow(firstName: string, lastName: string): string;
}
