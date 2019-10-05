import { Observable } from 'rxjs';
export declare class UiInformationService {
    private _subject;
    constructor();
    getCloseAction(): Observable<string>;
    closeOthers(id: any): void;
}
