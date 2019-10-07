import { Injectable } from "@angular/core";
import { fetchConfigFinish, fetchSettingFinish, fetchLanguageFinish, initialFinish } from "@allianzSND/core";


@Injectable({
    providedIn: 'root'
})
export class configTaskFinish implements fetchConfigFinish, fetchLanguageFinish, fetchSettingFinish, initialFinish {
    constructor(
    ) { }

    fetchConfigFinish(config) {

    }

    fetchLanguageFinish(language) {
    }

    fetchSettingFinish(fetchSettingFInish) {

    }

    //impl initialFinish start
    afterInitialFinish(): void {
        //alert("afterInitialFinish");
        if ((<any>navigator).splashscreen)
            (<any>navigator).splashscreen.hide();
    }
    //end of impl initialFinish
}
