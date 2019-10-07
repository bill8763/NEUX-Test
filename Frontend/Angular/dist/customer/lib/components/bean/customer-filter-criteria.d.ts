import { CustomerFilterPreset } from "./customer-filter-preset";
export declare class CustomerFilterCriteria {
    private _keyword;
    private filterMap;
    private _savePreset;
    constructor(keyword?: string, filterMap?: Map<string, string[]>, savePreset?: boolean);
    addCriteria(filterCol: string, value: string): void;
    addCriteriaCols(filterCol: string, values: string[]): void;
    hasCriteria(): boolean;
    keyword: string;
    savePreset: boolean;
    getFilterMap(): Map<string, string[]>;
    toPresetJSON(): CustomerFilterPreset;
}
