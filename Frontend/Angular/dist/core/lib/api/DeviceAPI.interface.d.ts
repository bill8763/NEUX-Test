import { IAPI } from './API.interface';
import { Observable } from 'rxjs';
export interface IDeviceAPI extends IAPI {
    runDeviceAPI(): Observable<any>;
}
