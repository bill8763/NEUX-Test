import { MetaService } from "../Meta.service";
import { IMetaExecutor } from "../executor/MetaExecutor.interface";
import { IMetaParser } from "../parser/MetaParser.interface";
import { MetaConfig } from "../parser/bean/MetaConfig";
export declare abstract class BaseMetaComponent {
    protected metaService: MetaService;
    protected parser: IMetaParser;
    protected executor: IMetaExecutor;
    constructor(metaService: MetaService, parser: IMetaParser, executor: IMetaExecutor);
    protected metaID: string;
    protected metaLoaded: boolean;
    protected metaConfig: MetaConfig;
    protected _data: any;
    protected abstract getMetaID(): string;
    protected abstract getMetaParams(): any;
    ngOnInit(): void;
    private init;
    protected loadData(): Promise<void>;
    protected waitUntilMetaLoaded(): Promise<any>;
    isMetaLoaded(): boolean;
    protected abstract onDataUpdated(): any;
}
