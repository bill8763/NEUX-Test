import { IInitTask } from "@allianzSND/core";
import { Injectable } from "@angular/core";
import { FirebaseMgr } from "../firebase/FirebaseMgr";


@Injectable({
    providedIn: 'root'
})
export class customTask implements IInitTask {

    constructor(
        private firebaseMgr: FirebaseMgr
    ) { }

    async doTask() {
        this.firebaseMgr.init();
        return true;
    }
}