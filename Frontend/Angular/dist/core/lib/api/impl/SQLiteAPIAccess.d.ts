import { IAPIAccess } from '../APIAccess.interface';
import { IAPI } from '../API.interface';
import { Observable } from 'rxjs';
export declare class SQLiteAPIAccess implements IAPIAccess {
    access(api: IAPI): Observable<any>;
}
