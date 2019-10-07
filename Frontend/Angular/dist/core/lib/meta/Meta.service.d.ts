import { Injector } from "@angular/core";
import { APIFactory } from "../api/APIFactory";
import { APIDispatch } from "../api/APIDispatch";
import { DaoFactory } from "../device/sqlite/DaoFactory";
import { AOPTokenService } from "../injectionToken/AOPToken.service";
import { ProfileCodeService } from "../service/profile/profile-code.service";
export declare class MetaService {
    private injector;
    private AOPTokenService;
    private APIFactory;
    private dispatcher;
    private DaoFactory;
    private profileCodeService;
    constructor(injector: Injector, AOPTokenService: AOPTokenService, APIFactory: APIFactory, dispatcher: APIDispatch, DaoFactory: DaoFactory, profileCodeService: ProfileCodeService);
    getMetaJson(id: string): Promise<any>;
}
