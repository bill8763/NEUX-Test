import { ExtensionData } from "./ExtensionData.interface";
export interface ExtensionFactory {
    getExtensionData(resp: any, condition: any): ExtensionData;
}
