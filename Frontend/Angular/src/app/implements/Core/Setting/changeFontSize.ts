import { changeFontSize, Setting, SettingService } from "@allianzSND/core";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class ChangeFontSize implements  changeFontSize{
  constructor(private settingService: SettingService) {}

  private _removeClass = "sm";
  updateFontSize(option: string) {
    let settingVal = {};
    settingVal['fontSize'] = option;
    let settingObj = new Setting(this.settingService.getSetting('FontSizeSetting').SettingID, this.settingService.getSetting('FontSizeSetting').SettingName, JSON.stringify(settingVal));
    this.settingService.updateSetting(settingObj).subscribe(data => {
    });
    let fontSize = option;  // sm , md, lg
    let rootClass = document.documentElement.classList;

    rootClass.remove('font-size_'+ this._removeClass);
    rootClass.add('font-size_'+ fontSize);
    this._removeClass = fontSize;
  }
}
