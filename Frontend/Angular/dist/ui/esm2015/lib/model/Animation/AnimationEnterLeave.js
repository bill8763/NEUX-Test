/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, style, animate, transition } from '@angular/animations';
/** @type {?} */
export const animationEnterLeavePage = trigger('enterAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWF0aW9uRW50ZXJMZWF2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL3VpLyIsInNvdXJjZXMiOlsibGliL21vZGVsL0FuaW1hdGlvbi9BbmltYXRpb25FbnRlckxlYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE1BQU0sT0FBTyx1QkFBdUIsR0FDcEMsT0FBTyxDQUNILGdCQUFnQixFQUFFO0lBQ2QsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNyQixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztLQUNoRSxDQUFDO0lBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNyQixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztLQUNuRSxDQUFDO0NBQ0wsQ0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uRW50ZXJMZWF2ZVBhZ2UgPSBcbnRyaWdnZXIoXG4gICAgJ2VudGVyQW5pbWF0aW9uJywgW1xuICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJywgb3BhY2l0eTogMH0pLFxuICAgICAgICBhbmltYXRlKCczMDBtcycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMX0pKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6IDF9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9wYWNpdHk6IDB9KSlcbiAgICAgICAgXSlcbiAgICBdXG4pIl19