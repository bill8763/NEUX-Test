import { BaseMetaComponent } from './BaseMetaComponent';
import { MetaService } from '../Meta.service';
import { ProfileCodeService } from '../../service/profile/profile-code.service';
import { IMetaParser } from '../parser/MetaParser.interface';
import { IMetaExecutor } from '../executor/MetaExecutor.interface';
export declare abstract class DisplayMetaComponent extends BaseMetaComponent {
    protected profileCodeService: ProfileCodeService;
    constructor(metaService: MetaService, profileCodeService: ProfileCodeService, parser: IMetaParser, executor: IMetaExecutor);
    ngOnInit(): void;
    protected onDataUpdated(): void;
    private convertCodeToDisplay;
}
