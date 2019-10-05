import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ILanguageAccess, DeviceService } from '@allianzSND/core';

@Injectable({
    providedIn: "root"
})
export class LanguageAccess implements ILanguageAccess {
    constructor(
        private deviceService: DeviceService
    ) { }

    public getCurrentLanguage(): Observable<string> {
        console.log("Default _fetchCurrentLanguage");
        let currentLanguage = this.deviceService.getLocalStorage("SNDLanguage") || 'zh_TW';
        this.deviceService.setLocalStorage("SNDLanguage", currentLanguage);
        return of(currentLanguage);

    }

}
