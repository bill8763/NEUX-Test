import { OnInit, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Language, LoadingApp, AppRouter, DefaultLoadingApp } from '@allianzSND/core';
export declare class LoadingComponent implements OnInit {
    private router;
    private _location;
    progressValue: number;
    onProgressFinish: EventEmitter<{}>;
    language: Language;
    private loadingAppHandler;
    constructor(router: AppRouter, defaultLoadingAppHandler: DefaultLoadingApp, _location: Location, loadingAppHandler: LoadingApp);
    progressFinish(): void;
    getUrl(): string;
    ngOnInit(): void;
}
