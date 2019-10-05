import { Observable } from "rxjs";
export interface syncCustomer {
    sync(): Observable<boolean>;
}
