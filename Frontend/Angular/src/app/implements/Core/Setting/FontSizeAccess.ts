import { IFontSizeAccess } from '@allianzSND/core';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SettingService } from '@allianzSND/core';

@Injectable({
  providedIn: "root"
})

export class FontSizeAccess implements IFontSizeAccess {
  constructor(private settingService: SettingService) { }
  getFontSize(): Observable<string> {
    return Observable.create((observer) => {
      let defaultSettingVal = this.settingService.getSetting('FontSizeSetting').SettingVal;
      if (defaultSettingVal) {
        let fontSizeSetting = JSON.parse(defaultSettingVal);
        console.log('fontSizeSetting', fontSizeSetting['fontSize']);
        if (fontSizeSetting['fontSize'])
          observer.next(fontSizeSetting['fontSize']);
        else
          observer.next('sm');
        observer.complete();
      } else {
        observer.next('sm');
        observer.complete();
      }
    });
  }

  getFontSizeCode(): Observable<string> {
    return from(this.getFontSize().toPromise().then(size => {
      console.log("getFontSizeCode:", size);
      switch (size) {
        case 'sm':
          return '1';
        case 'md':
          return '2';
        case 'lg':
          return '3';
        default:
          return size;
      }
    })
    )
  }
}
