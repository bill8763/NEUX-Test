import { MetaConfig } from "../parser/bean/MetaConfig";
export interface IMetaExecutor {
    getData(config: MetaConfig, params: any): Promise<any>;
    saveData(config: MetaConfig, data: any, params: any): Promise<any>;
}
