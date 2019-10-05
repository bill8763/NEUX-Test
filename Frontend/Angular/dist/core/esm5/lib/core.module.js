/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TranslatePipe } from './language/translate.pipe';
import { NumberFormatPipe } from './numberFormat/numberFormat.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ActionDirective } from './auth/action/action.directive';
import { SqliteExecutorComponent } from './component/sqlite-executor/sqlite-executor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePricePipe } from './price/translatePrice.pipe';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [TranslatePipe, TranslatePricePipe, NumberFormatPipe, ActionDirective, SqliteExecutorComponent],
                    exports: [TranslatePipe, TranslatePricePipe, NumberFormatPipe, ActionDirective, HttpClientModule]
                },] }
    ];
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVqRTtJQUFBO0lBUzBCLENBQUM7O2dCQVQxQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLENBQUM7b0JBQzdHLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2xHOztJQUN5QixpQkFBQztDQUFBLEFBVDNCLElBUzJCO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9sYW5ndWFnZS90cmFuc2xhdGUucGlwZSc7XG5pbXBvcnQgeyBOdW1iZXJGb3JtYXRQaXBlIH0gZnJvbSAnLi9udW1iZXJGb3JtYXQvbnVtYmVyRm9ybWF0LnBpcGUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYXV0aC9hY3Rpb24vYWN0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTcWxpdGVFeGVjdXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NxbGl0ZS1leGVjdXRvci9zcWxpdGUtZXhlY3V0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVByaWNlUGlwZSB9IGZyb20gJy4vcHJpY2UvdHJhbnNsYXRlUHJpY2UucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGVQcmljZVBpcGUsIE51bWJlckZvcm1hdFBpcGUsIEFjdGlvbkRpcmVjdGl2ZSwgU3FsaXRlRXhlY3V0b3JDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlUHJpY2VQaXBlLCBOdW1iZXJGb3JtYXRQaXBlLCBBY3Rpb25EaXJlY3RpdmUsIEh0dHBDbGllbnRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUgeyB9XG4iXX0=