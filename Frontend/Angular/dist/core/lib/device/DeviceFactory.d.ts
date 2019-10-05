import { IDeviceDao } from "./DeviceDao.interface";
export declare class DeviceFactory {
    private daoMap;
    private constructor();
    getDefaultDao(): IDeviceDao;
    getDao(name: string): IDeviceDao;
}
