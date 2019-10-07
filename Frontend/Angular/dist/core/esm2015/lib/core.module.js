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
export class CoreModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVdqRSxNQUFNOzs7WUFUTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzdHLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7YUFDbEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vbGFuZ3VhZ2UvdHJhbnNsYXRlLnBpcGUnO1xuaW1wb3J0IHsgTnVtYmVyRm9ybWF0UGlwZSB9IGZyb20gJy4vbnVtYmVyRm9ybWF0L251bWJlckZvcm1hdC5waXBlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL2F1dGgvYWN0aW9uL2FjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3FsaXRlRXhlY3V0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zcWxpdGUtZXhlY3V0b3Ivc3FsaXRlLWV4ZWN1dG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQcmljZVBpcGUgfSBmcm9tICcuL3ByaWNlL3RyYW5zbGF0ZVByaWNlLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlUHJpY2VQaXBlLCBOdW1iZXJGb3JtYXRQaXBlLCBBY3Rpb25EaXJlY3RpdmUsIFNxbGl0ZUV4ZWN1dG9yQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZVByaWNlUGlwZSwgTnVtYmVyRm9ybWF0UGlwZSwgQWN0aW9uRGlyZWN0aXZlLCBIdHRwQ2xpZW50TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxuIl19