import { MetaGrid } from './MetaGrid';
export declare class MetaColumn {
    constructor(id: string, name: string, type: string);
    id: string;
    name: string;
    type: string;
    optionRef: string;
    showTitle: boolean;
    required: boolean;
    readonly: boolean;
    inline: boolean;
    grid: MetaGrid;
    order: number;
    default: any;
    maxLength: number;
    placeholder: string;
    groupColumns: Array<MetaColumn>;
    groupRows: Array<Array<MetaColumn>>;
    icon: string;
    canAdd: boolean;
    maxNumber: number;
    showDefaultOption: boolean;
    rowTitle: string;
}
