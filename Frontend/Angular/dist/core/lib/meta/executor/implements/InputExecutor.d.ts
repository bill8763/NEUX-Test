import { IMetaExecutor } from "../MetaExecutor.interface";
import { MetaConfig } from "../../parser/bean/MetaConfig";
import { APIExecutor } from "./APIExecutor";
export declare class InputExecutor extends APIExecutor implements IMetaExecutor {
    getData(config: MetaConfig, params: any): Promise<any>;
    saveData(config: MetaConfig, data: any, params: any): Promise<any>;
}
