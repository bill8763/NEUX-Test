import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Language, DateUtils, PageInfo, DeviceService, ProfileCode, ProfileCodeService, TranslateService, ContactItem, showRule, NotificationMgr, AppRouter } from '@allianzSND/core';
import { CalendarService } from '../../../calendar/service/calendar-service.service';
import { CalendarEventDetail } from '../../../calendar/service/model/CalendarEventDetail';
import { CustomerService } from '../../service/customer-service.service';
import { CustomerTel } from '../../service/model/CustomerTel';
import { CustomerFilterCriteria } from '../bean/customer-filter-criteria';
import { CustomerAlertItem } from '../../service/model/CustomerAlertItem';
import { CustomerItem } from '../../service/model/CustomerItem';
import { CustomerImportGroup } from '../bean/customer-import-group';
import { CustomerUtils } from '../../utils/customer-utils';
import { Subject } from 'rxjs';
import { CustomerStoreService } from '../../service/customerStore/customerStore-service';
import { DefaultCustomerImportDisplay } from './DefaultCustomerImportDisplay';
import { AddProgressPoint } from '../../interface/AddProgressPoint';
import { CustomerShowRule } from '../../interface/CustomerShowRule';
export declare class CustomersComponent implements OnInit, OnDestroy {
    private customerService;
    private calendarService;
    private translateService;
    private deviceService;
    private dateUtils;
    private profileCodeService;
    private customerUtils;
    private router;
    private customerStoreService;
    private customerImportDisplay;
    private notificationMgr;
    private changeDetector;
    private APP_CONFIG;
    private showRule;
    private customerShowRule;
    private addProgressPoint;
    calendarEditComponent: any;
    viewTypeIndex: number;
    viewType: string;
    viewDate: Date;
    weekStartsOn: number;
    isShowDetailScroll: boolean;
    isShow: boolean;
    showCustomerList: boolean;
    isExpandDetail: boolean;
    isRefreshDetail: boolean;
    isSaveClick: boolean;
    language: Language;
    isOpen: boolean;
    classSearch: string;
    isDisplayImportSavePopup: boolean;
    isDisplaySavePopup: boolean;
    isDisplayDelCustomerPopup: boolean;
    isDisplayConfirmAlertPopup: boolean;
    isDisplayInfoAlertPopup: boolean;
    isDisplayUpdateRemind: boolean;
    isDisplayDeleteRemind: boolean;
    isPopupImport: boolean;
    isPopupFilter: boolean;
    isExpandEdit: boolean;
    isPopupCallPhone: boolean;
    isPopupNoteDetail: boolean;
    isPopupEditNote: boolean;
    isPopupDeleteNote: boolean;
    isPopupConfirmDisable: boolean;
    isDisplayDeletePopup: boolean;
    isCalendarEditMetaDataDone: boolean;
    alertOverTimeList: CustomerAlertItem[];
    alertAutoDeleteCustomer: CustomerAlertItem[];
    isLoadingFinishContent: boolean;
    isRefreshFinishContent: boolean;
    isLazyLoading: boolean;
    callPhoneTelArray: Array<CustomerTel>;
    customerContactDetail: any;
    customerContactList: Array<any>;
    contactListPageInfo: PageInfo;
    calendarEventDetail: CalendarEventDetail;
    viewDateCalendarEventList: Array<CalendarEventDetail>;
    readonly customerClientID: any;
    customerList: CustomerItem[];
    clickItem: CustomerItem;
    customerListPageInfo: PageInfo;
    private _filterCriteria;
    filterCriteria: CustomerFilterCriteria;
    filterType: string;
    optionMap: Map<string, Array<ProfileCode>>;
    translateMap: Map<string, string>;
    private dayTypesList;
    private noSchedule;
    activityTypeList: Array<ProfileCode>;
    alertTypeList: Array<ProfileCode>;
    importContractMap: Map<string, CustomerImportGroup>;
    mobileResultSize: number;
    importData: boolean;
    importContactList: Array<ContactItem>;
    importSearchKeyword: string;
    isLoadCriteria: boolean;
    isClearCriteria: boolean;
    _onImportResult: boolean;
    currentEditNote: any;
    isRefreshContactList: boolean;
    loadContactList: boolean;
    classBarMove: string;
    customerDetail: any;
    private emptyCustomer;
    currentCustomer: any;
    readonly needConfirmPopup: boolean;
    private confirmAction;
    private customerState;
    private pre_criteria;
    private pre_customerList;
    private unsubscribe$;
    clearSubject: Subject<{}>;
    saveFilterSubject: Subject<{}>;
    contactSaveSubject: Subject<{}>;
    constructor(customerService: CustomerService, calendarService: CalendarService, translateService: TranslateService, deviceService: DeviceService, dateUtils: DateUtils, profileCodeService: ProfileCodeService, customerUtils: CustomerUtils, router: AppRouter, customerStoreService: CustomerStoreService, customerImportDisplay: DefaultCustomerImportDisplay, notificationMgr: NotificationMgr, changeDetector: ChangeDetectorRef, APP_CONFIG: any, showRule: showRule, customerShowRule: CustomerShowRule, addProgressPoint: AddProgressPoint);
    ngOnDestroy(): void;
    ngOnInit(): void;
    refreshCustomerList(isAppend: boolean, clientID?: string): Promise<void>;
    private refreshContactNote;
    private sortCustomerList;
    onGetCustomerContactListByID(clientID: any): void;
    onGetCustomerDetailByID(clientID: any): Promise<void>;
    toggleSearch(): void;
    searchCustomerName(name: any): void;
    trackByFn(index: any, item: any): any;
    onChangeCustomer(customerItem: CustomerItem): Promise<void>;
    onCustomerLoad(): void;
    onCustomerRefresh(): void;
    deleteCustomer(customerClientID: string): void;
    doDeleteCustomer(): Promise<void>;
    addAppointment(customerClientID: string): void;
    onClickAppointmentSave(): void;
    onToggleAppointmentModal(val: any): void;
    onSaveCalendarEvent(resp: any): void;
    addCustomer(): void;
    editCustomer(customerClientID: string): void;
    followChange(detail: any): void;
    addNote(): void;
    editNote(note: any): void;
    displayNote(note: any): void;
    deleteNote(note: any): void;
    doDeleteContact(): void;
    onSaveNote(event: any): void;
    onSaveNoteFinish(note: any): void;
    doAction(action: any): void;
    confirmPopup(): void;
    detectScroll(isBtm: any): void;
    private importPopup;
    import(): void;
    displayImportPopup(isShow: boolean): void;
    refreshImport(keyword: string): void;
    onCloseImportPopup(): void;
    doImport(): void;
    onImportCustomer(importItems: any): void;
    callCustomer(customerClientID: string): void;
    cancelCallPhone(): void;
    callPhone(telNumber: string): void;
    filter(): void;
    clearFilter(): void;
    doFilter(): void;
    doneCriteria(criteria: CustomerFilterCriteria): void;
    loadPresetCriteria(): Promise<void>;
    cancelDelete(): void;
    refreshContent(): void;
    loadContent(event: any): Promise<void>;
    isShowChange(val: any): void;
    convertNameToShow(firstName: string, lastName: string): string;
    toNoteTime(time: Date): string;
    onCalendarEditMetaDataDone(): void;
    filterCriteriaPopupChange(event: any): void;
}