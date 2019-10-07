import { Observable } from "rxjs";
export interface ILanguageAccess {
    getCurrentLanguage(): Observable<string>;
}
