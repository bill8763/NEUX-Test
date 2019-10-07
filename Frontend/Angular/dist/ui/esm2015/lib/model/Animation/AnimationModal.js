/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, animate, transition } from '@angular/animations';
/** @type {?} */
export const animationModalOpen = trigger('openClose', [
    state('open', style({
        opacity: 1,
        transform: 'scale3d(1,1,1)'
    })),
    state('closed', style({
        opacity: 0,
        transform: 'scale3d(.0, .0, .0)'
    })),
    transition('open => closed', animate('200ms ease-in-out')),
    transition('closed => open', animate('200ms ease-in-out'))
]);
/** @type {?} */
export const animationModalClose = trigger('bgOpenClose', [
    state('bgOpen', style({
        opacity: 1,
    })),
    state('bgClosed', style({
        opacity: 0
    })),
    transition('bgOpen => bgClosed', animate('300ms ease-out')),
    transition('bgClosed => bgOpen', animate('200ms ease-out'))
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWF0aW9uTW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWxsaWFuelNORC91aS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9BbmltYXRpb24vQW5pbWF0aW9uTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE1BQU0sT0FBTyxrQkFBa0IsR0FDM0IsT0FBTyxDQUFDLFdBQVcsRUFBRTtJQUNqQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUNoQixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxnQkFBZ0I7S0FDOUIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDbEIsT0FBTyxFQUFFLENBQUM7UUFDVixTQUFTLEVBQUUscUJBQXFCO0tBQ25DLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMxRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Q0FDN0QsQ0FBQzs7QUFDTixNQUFNLE9BQU8sbUJBQW1CLEdBQzVCLE9BQU8sQ0FBQyxhQUFhLEVBQUU7SUFDbkIsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDbEIsT0FBTyxFQUFFLENBQUM7S0FDYixDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztRQUNwQixPQUFPLEVBQUUsQ0FBQztLQUNiLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Q0FDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uTW9kYWxPcGVuID0gXG4gICAgdHJpZ2dlcignb3BlbkNsb3NlJywgW1xuICAgICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsMSwxKSdcbiAgICAgICAgfSkpLFxuICAgICAgICBzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoLjAsIC4wLCAuMCknXG4gICAgICAgIH0pKSxcbiAgICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluLW91dCcpKSxcbiAgICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluLW91dCcpKVxuICAgIF0pO1xuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbk1vZGFsQ2xvc2UgID0gXG4gICAgdHJpZ2dlcignYmdPcGVuQ2xvc2UnLCBbXG4gICAgICAgIHN0YXRlKCdiZ09wZW4nLCBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9KSksXG4gICAgICAgIHN0YXRlKCdiZ0Nsb3NlZCcsIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkpLFxuICAgICAgICB0cmFuc2l0aW9uKCdiZ09wZW4gPT4gYmdDbG9zZWQnLCBhbmltYXRlKCczMDBtcyBlYXNlLW91dCcpKSxcbiAgICAgICAgdHJhbnNpdGlvbignYmdDbG9zZWQgPT4gYmdPcGVuJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSlcbiAgICBdKTtcblxuIl19