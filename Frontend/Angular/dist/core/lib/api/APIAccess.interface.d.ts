import { IAPI } from './API.interface';
import { Observable } from 'rxjs';
export interface IAPIAccess {
    access(api: IAPI): Observable<any>;
}
