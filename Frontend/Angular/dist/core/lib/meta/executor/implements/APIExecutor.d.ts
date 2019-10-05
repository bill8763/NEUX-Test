import { IMetaExecutor } from "../MetaExecutor.interface";
import { MetaConfig } from "../../parser/bean/MetaConfig";
import { ErrorHandler } from "@angular/core";
import { APIFactory } from "../../../api/APIFactory";
import { APIDispatch } from "../../../api/APIDispatch";
export declare class APIExecutor implements IMetaExecutor {
    private errorHandler;
    private APIFactory;
    private dispatcher;
    constructor(errorHandler: ErrorHandler, APIFactory: APIFactory, dispatcher: APIDispatch);
    getData(config: MetaConfig, params?: any): Promise<any>;
    saveData(config: MetaConfig, data: any, params?: any): Promise<any>;
}
