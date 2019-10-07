import { IInitTask } from "../interface/InitialTask.interface";
import { APIFactory } from "../../api/APIFactory";
import { DaoFactory } from "../../device/sqlite/DaoFactory";
import { DeviceFactory } from "../../device/DeviceFactory";
import { TranslateService } from "../../language/translate.service";
import { DeviceService } from "../../device/device.service";
export declare class RegisterAPITask implements IInitTask {
    private APIFactory;
    private DAOFactory;
    private deviceFactory;
    private translateService;
    private deviceService;
    private APP_CONFIG;
    constructor(APIFactory: APIFactory, DAOFactory: DaoFactory, deviceFactory: DeviceFactory, translateService: TranslateService, deviceService: DeviceService, APP_CONFIG: any);
    doTask(): Promise<any>;
}
