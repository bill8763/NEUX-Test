/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, animate, transition } from '@angular/animations';
/** @type {?} */
export const animationCollapse = trigger('openClose', [
    state('*', style({
        height: '0',
        opacity: 0
    })),
    state('open', style({
        height: '*',
        opacity: 1
    })),
    state('closed', style({
        height: '0',
        opacity: 0
    })),
    transition('open => closed', animate('200ms ease-in-out')),
    transition('closed => open', animate('200ms ease-in-out'))
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWF0aW9uQ29sbGFwc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9BbmltYXRpb24vQW5pbWF0aW9uQ29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE1BQU0sT0FBTyxpQkFBaUIsR0FDOUIsT0FBTyxDQUFDLFdBQVcsRUFBRTtJQUNqQixLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNiLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYixDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUNoQixNQUFNLEVBQUUsR0FBRztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2IsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDbEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMxRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Q0FDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uQ29sbGFwc2UgPSBcbnRyaWdnZXIoJ29wZW5DbG9zZScsIFtcbiAgICBzdGF0ZSgnKicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICB9KSksXG4gICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfSkpLFxuICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbi1vdXQnKSksXG4gICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluLW91dCcpKVxuXSk7Il19