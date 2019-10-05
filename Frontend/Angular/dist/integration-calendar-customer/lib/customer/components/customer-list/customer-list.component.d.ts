import { OnInit, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Language } from '@allianzSND/core';
import { CustomerItem } from '../../service/model/CustomerItem';
import { CustomerUtils } from '../../utils/customer-utils';
export declare class CustomerListComponent implements OnInit, AfterViewInit {
    private elementRef;
    private customerUtils;
    loadingFinish: boolean;
    refreshFinish: boolean;
    constructor(elementRef: ElementRef, customerUtils: CustomerUtils);
    customerClick: EventEmitter<CustomerItem>;
    customerLoad: EventEmitter<any>;
    customerRefresh: EventEmitter<any>;
    customerList: Array<CustomerItem>;
    private _customerList;
    filterType: any;
    private _filterType;
    language: Language;
    private _onClickCustomerID;
    onClickCustomerID: any;
    readonly isDefaultData: boolean;
    readonly showSearchNoData: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    trackByClientID(index: any, item: any): any;
    closeSlidingItems(): Promise<void>;
    onClickCustomer(clientID: string): void;
    loadCustomer(e: any): void;
    refreshCustomer(): void;
    convertNameToShow(customerItem: CustomerItem): string;
}
