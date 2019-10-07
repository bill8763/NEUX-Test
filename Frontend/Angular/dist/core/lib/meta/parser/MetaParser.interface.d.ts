import { MetaConfig } from './bean/MetaConfig';
export interface IMetaParser {
    parse(config: any): MetaConfig;
}
