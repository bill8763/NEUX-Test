import { CustomerFilterPreset } from "./customer-filter-preset";
export declare class CustomerFilterCriteria {
    private _keyword;
    private filterMap;
    private optionMap;
    extension: {};
    constructor(keyword?: string, filterMap?: Map<string, string[]>);
    addCriteria(filterCol: string, value: string): void;
    addCriteriaCols(filterCol: string, values: string[]): void;
    hasCriteria(): boolean;
    keyword: string;
    getFilterMap(): Map<string, string[]>;
    getOptionMap(): Map<string, any>;
    setOption(name: string, value: any): void;
    getOption(name: string): any;
    toPresetJSON(): CustomerFilterPreset;
    toMetaJSON(): CustomerFilterPreset;
    clone(): CustomerFilterCriteria;
}
