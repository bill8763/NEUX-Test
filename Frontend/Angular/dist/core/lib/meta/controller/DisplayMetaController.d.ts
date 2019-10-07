import { MetaController } from "./MetaController.interface";
export declare abstract class DisplayMetaController implements MetaController {
    onValueChange(column: string, value: any, groupId: string, index: number, data: any, vaildResult: any): void;
    onValidateAll(data: any, vaildResult: any): boolean;
    btnClick(type: string, id: string, data: any): void;
    abstract onDataUpdated(data: any): void;
}
