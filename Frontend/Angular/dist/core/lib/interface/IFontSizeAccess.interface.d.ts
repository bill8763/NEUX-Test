import { Observable } from 'rxjs';
export interface IFontSizeAccess {
    getFontSize(): Observable<string>;
    getFontSizeCode(): Observable<string>;
}
