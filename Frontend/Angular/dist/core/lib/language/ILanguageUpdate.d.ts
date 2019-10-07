import { Observable } from 'rxjs';
export interface ILanguageUpdate {
    UpdateLanguage(language: string): Observable<any>;
}
