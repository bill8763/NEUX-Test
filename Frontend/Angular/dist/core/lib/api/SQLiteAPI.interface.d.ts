import { IAPI } from './API.interface';
import { Observable } from 'rxjs';
export interface ISQLiteAPI extends IAPI {
    executeSQL(): Observable<any>;
}
