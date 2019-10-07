import { Observable } from "rxjs";
export interface ExtDataProcess {
    onQuery(object: any): Observable<any>;
    onInsert(object: any): Observable<any>;
    onDelete(object: any): Observable<any>;
}
