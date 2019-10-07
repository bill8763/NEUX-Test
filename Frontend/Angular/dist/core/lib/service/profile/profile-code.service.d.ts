import { APIFactory } from '../../api/APIFactory';
import { APIDispatch } from '../../api/APIDispatch';
import { TranslateService } from '../../language/translate.service';
import { ProfileCode } from '../../bean/ProfileCode';
export declare class ProfileCodeService {
    private dispatcher;
    private translateService;
    private APIFactory;
    profileCodeTypeMap: Map<string, ProfileCode[]>;
    profileCodeMap: Map<string, ProfileCode>;
    constructor(dispatcher: APIDispatch, translateService: TranslateService, APIFactory: APIFactory);
    getCodeArray(typeId: string): ProfileCode[];
    convertCode2Text(typeID: string, code: string): string;
    getArgumentsByCode(typeID: string, code: string): string;
    _fetchCodeData(): any;
}
