import { IFunctionSync } from "../../dataSync/function/IFunctionSync";
export interface IregisterDataSyncFunc {
    getSyncInstance(): Array<IFunctionSync>;
    getFuncMap(): any;
}
