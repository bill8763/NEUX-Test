import { ContactItem } from "@allianzSND/core";
export declare class CustomerImportGroup {
    private _groupName;
    private _isShow;
    private _items;
    constructor(groupName: string);
    addItem(item: ContactItem): void;
    readonly getItems: ContactItem[];
    groupName: string;
    isShow: boolean;
}
