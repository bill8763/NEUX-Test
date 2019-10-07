import { BaseMetaComponent } from './BaseMetaComponent';
import { MetaService } from '../Meta.service';
import { ValidationResult } from '../../utils/ValidationResult';
import { ProfileCodeService } from '../../service/profile/profile-code.service';
import { IMetaExecutor } from '../executor/MetaExecutor.interface';
import { IMetaParser } from '../parser/MetaParser.interface';
export declare abstract class FormMetaComponent extends BaseMetaComponent {
    protected profileCodeService: ProfileCodeService;
    validationResult: ValidationResult;
    constructor(metaService: MetaService, profileCodeService: ProfileCodeService, parser: IMetaParser, executor: IMetaExecutor);
    ngOnInit(): void;
    protected abstract onValueChange(column: string, value: any, groupId: string, index: number): void;
    protected abstract onValidateAll(): boolean;
    protected abstract btnClick(type: string, id: string): void;
    onChange(column: string, value: any, groupID?: string, index?: number): void;
    private valid;
    private validAll;
    onBtnClick(type: string, id: string): Promise<void>;
    protected saveData(): Promise<any>;
    onGroupRemove(groupName: string, index: number): void;
    onGroupAdd(groupName: string): void;
    protected onDataUpdated(): void;
    private fetchOptions;
    private addBtnAttr;
    private createOption;
}
