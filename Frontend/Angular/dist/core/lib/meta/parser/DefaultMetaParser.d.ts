import { IMetaParser } from "./MetaParser.interface";
import { MetaConfig } from "./bean/MetaConfig";
export declare class DefaultMetaParser implements IMetaParser {
    parse(json: any): MetaConfig;
    private getSource;
    private fillDefaultColumnSetting;
    private _defaultSetting;
}
