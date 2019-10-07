import { Observable } from "rxjs";
export interface LoadingApp {
    loading(): void;
    onLoaded(): Observable<number>;
}
