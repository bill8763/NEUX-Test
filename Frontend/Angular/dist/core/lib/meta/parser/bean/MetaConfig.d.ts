import { MetaSource } from './MetaSource';
import { MetaColumn } from './MetaColumn';
export declare class MetaConfig {
    constructor();
    source: MetaSource;
    Rows: Array<Array<MetaColumn>>;
    Columns: Array<MetaColumn>;
    Footer: Array<MetaColumn>;
    setColumn(columnList: Array<any>, groupList: Array<any>): void;
    setFooter(footerList: Array<any>): void;
    private createColumnObject;
    private createGroupColumnObject;
    private convertColumns2Row;
}
