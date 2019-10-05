/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, HostBinding, ElementRef, Optional, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { APIDispatch } from '../../api/APIDispatch';
import { APIFactory } from '../../api/APIFactory';
import { DeviceService } from '../../device/device.service';
import { AppRouter } from '../../route/AppRouter';
import { ActionService, ACTION_STATUS, ActionEvent } from './action.service';
import { actionDirectiveTaskToken } from '../../injectionToken/injection-token';
export class ActionDirective {
    /**
     * @param {?} authService
     * @param {?} APIFactory
     * @param {?} dispatcher
     * @param {?} deviceService
     * @param {?} actionService
     * @param {?} appRouter
     * @param {?} elRef
     * @param {?} actionDirectiveTask
     */
    constructor(authService, APIFactory, dispatcher, deviceService, actionService, appRouter, elRef, actionDirectiveTask) {
        this.authService = authService;
        this.APIFactory = APIFactory;
        this.dispatcher = dispatcher;
        this.deviceService = deviceService;
        this.actionService = actionService;
        this.appRouter = appRouter;
        this.elRef = elRef;
        this.actionDirectiveTask = actionDirectiveTask;
        this.actionClick = new EventEmitter();
        this.isDisabled = false;
        this.actionService.getActionStatus().subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            this.isDisabled = status === ACTION_STATUS.PENDING;
        }));
    }
    // start of highlight digital track
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // this.settingService.getDebugMode().subscribe((debugMode: boolean) => {
        //   let elementTagName = this.elRef.nativeElement.localName;
        //   let targetElement = null;
        //   if (elementTagName === 'app-ui-btn') {
        //     targetElement = this.elRef.nativeElement.children[0];
        //     console.log('app-ui-btn targetElement: ', targetElement);
        //   }
        //   else if (elementTagName === 'app-ui-link') {
        //     targetElement = this.elRef.nativeElement.children[0].children[0];
        //     console.log('app-ui-link targetElement: ', targetElement);
        //   }
        //   else {
        //     targetElement = this.elRef.nativeElement;
        //   }
        //   if (targetElement) {
        //     if (debugMode) {
        //       targetElement.setAttribute('style', "border: 3px solid #ff0000 !important");
        //     }
        //     else {
        //       targetElement.setAttribute('style', "");
        //     }
        //   }
        // })
    }
    // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
    /**
     * @param {?} e
     * @return {?}
     */
    onclick(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('action click:', this.action, e);
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            console.log("actionClick after output: ", e);
            /** @type {?} */
            let event = new ActionEvent();
            event.action = this.action;
            event.event = e;
            this.actionService.actionClick(event);
            /** @type {?} */
            let isAuth = yield this.authService.authAction({ action: this.action });
            if (isAuth.status) {
                this.actionClick.emit(e);
                console.log("actionClick output: ", e);
                if (this.actionDirectiveTask) {
                    yield this.actionDirectiveTask.doTask(this.action);
                }
            }
            else {
                console.log(`action: ${this.action} auth failed.`);
            }
            /** @type {?} */
            let ActionAPI = this.APIFactory.getAPI("LogAction");
            ((/** @type {?} */ (ActionAPI))).action = this.action;
            ((/** @type {?} */ (ActionAPI))).time = new Date();
            ((/** @type {?} */ (ActionAPI))).valid = isAuth.status;
            ((/** @type {?} */ (ActionAPI))).message = isAuth.error;
            ((/** @type {?} */ (ActionAPI))).Function = this.appRouter.getCurrentFunction();
            ((/** @type {?} */ (ActionAPI))).DeviceModel = this.deviceService.getDeviceManufacturer();
            ((/** @type {?} */ (ActionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
            /** @type {?} */
            let resp = yield this.dispatcher.dispatch(ActionAPI).toPromise();
            console.log("log Action resp:", resp);
        });
    }
}
ActionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[Action]'
            },] }
];
ActionDirective.ctorParameters = () => [
    { type: AuthService },
    { type: APIFactory },
    { type: APIDispatch },
    { type: DeviceService },
    { type: ActionService },
    { type: AppRouter },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [actionDirectiveTaskToken,] }] }
];
ActionDirective.propDecorators = {
    action: [{ type: Input }],
    actionClick: [{ type: Output }],
    isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
    onclick: [{ type: HostListener, args: ['onClick', ['$event'],] }, { type: HostListener, args: ['onClickLink', ['$event'],] }, { type: HostListener, args: ['onTabChildClick', ['$event'],] }, { type: HostListener, args: ['ClickBtn', ['$event'],] }, { type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ActionDirective.prototype.action;
    /** @type {?} */
    ActionDirective.prototype.actionClick;
    /** @type {?} */
    ActionDirective.prototype.isDisabled;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.APIFactory;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.deviceService;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.actionService;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.appRouter;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    ActionDirective.prototype.actionDirectiveTask;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9hY3Rpb24vYWN0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBVSxVQUFVLEVBQWlCLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU9oRixNQUFNOzs7Ozs7Ozs7OztJQUVKLFlBQ1UsV0FBd0IsRUFDeEIsVUFBc0IsRUFDdEIsVUFBdUIsRUFDdkIsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsU0FBb0IsRUFDcEIsS0FBaUIsRUFDNkIsbUJBQXlDO1FBUHZGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFVBQUssR0FBTCxL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O0lBQ3BDLG9DQUE0Qjs7Ozs7SUFDNUIsZ0NBQXlCOzs7OztJQUN6Qiw4Q0FBK0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgT25Jbml0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBUElEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2FwaS9BUElEaXNwYXRjaCc7XG5pbXBvcnQgeyBBUElGYWN0b3J5IH0gZnJvbSAnLi4vLi4vYXBpL0FQSUZhY3RvcnknO1xuaW1wb3J0IHsgbG9nQWN0aW9uQVBJIH0gZnJvbSAnLi4vLi4vYXBpL3JlZ2lzdGVyL2xvZ0FjdGlvbkFQSSc7XG5pbXBvcnQgeyBEZXZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGV2aWNlL2RldmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlL0FwcFJvdXRlcic7XG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlLCBBQ1RJT05fU1RBVFVTLCBBY3Rpb25FdmVudCB9IGZyb20gJy4vYWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgYWN0aW9uRGlyZWN0aXZlVGFza1Rva2VuIH0gZnJvbSAnLi4vLi4vaW5qZWN0aW9uVG9rZW4vaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IElBY3Rpb25EaXJlY3RpdmVUYXNrIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0FjdGlvbkRpcmVjdGl2ZVRhc2suaW50ZXJmYWNlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbQWN0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBBUElGYWN0b3J5OiBBUElGYWN0b3J5LFxuICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogQVBJRGlzcGF0Y2gsXG4gICAgcHJpdmF0ZSBkZXZpY2VTZXJ2aWNlOiBEZXZpY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJvdXRlcjogQXBwUm91dGVyLFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChhY3Rpb25EaXJlY3RpdmVUYXNrVG9rZW4pIHByaXZhdGUgYWN0aW9uRGlyZWN0aXZlVGFzazogSUFjdGlvbkRpcmVjdGl2ZVRhc2tcbiAgKSB7XG4gICAgdGhpcy5hY3Rpb25TZXJ2aWNlLmdldEFjdGlvblN0YXR1cygpLnN1YnNjcmliZSgoc3RhdHVzOiBBQ1RJT05fU1RBVFVTKSA9PiB7XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSBzdGF0dXMgPT09IEFDVElPTl9TVEFUVVMuUEVORElORztcbiAgICB9KVxuXG5cbiAgfVxuXG4gIC8vIHN0YXJ0IG9mIGhpZ2hsaWdodCBkaWdpdGFsIHRyYWNrXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0RGVidWdNb2RlKCkuc3Vic2NyaWJlKChkZWJ1Z01vZGU6IGJvb2xlYW4pID0+IHtcblxuICAgIC8vICAgbGV0IGVsZW1lbnRUYWdOYW1lID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmxvY2FsTmFtZTtcbiAgICAvLyAgIGxldCB0YXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICAvLyAgIGlmIChlbGVtZW50VGFnTmFtZSA9PT0gJ2FwcC11aS1idG4nKSB7XG4gICAgLy8gICAgIHRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdhcHAtdWktYnRuIHRhcmdldEVsZW1lbnQ6ICcsIHRhcmdldEVsZW1lbnQpO1xuICAgIC8vICAgfVxuICAgIC8vICAgZWxzZSBpZiAoZWxlbWVudFRhZ05hbWUgPT09ICdhcHAtdWktbGluaycpIHtcbiAgICAvLyAgICAgdGFyZ2V0RWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2FwcC11aS1saW5rIHRhcmdldEVsZW1lbnQ6ICcsIHRhcmdldEVsZW1lbnQpO1xuICAgIC8vICAgfVxuICAgIC8vICAgZWxzZSB7XG4gICAgLy8gICAgIHRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gICB9XG5cblxuICAgIC8vICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAvLyAgICAgaWYgKGRlYnVnTW9kZSkge1xuICAgIC8vICAgICAgIHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYm9yZGVyOiAzcHggc29saWQgI2ZmMDAwMCAhaW1wb3J0YW50XCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2Uge1xuICAgIC8vICAgICAgIHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG5cbiAgICAvLyB9KVxuXG5cbiAgfVxuICAvLyBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZWVudGVyKGUpIHtcbiAgLy8gICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5hY3Rpb247XG4gIC8vIH1cblxuICAvL2VuZCBvZiBoaWdobGlnaHQgZGlnaXRhbCB0cmFja1xuXG4gIEBJbnB1dCgpIGFjdGlvbjtcbiAgQE91dHB1dCgpIGFjdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgLy8gQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWdodGxpZ2h0RGlnaXRhbFRyYWNrJykgaXNIaWdodGlnaHQgPSB0cnVlO1xuICBASG9zdExpc3RlbmVyKCdvbkNsaWNrJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignb25DbGlja0xpbmsnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdvblRhYkNoaWxkQ2xpY2snLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdDbGlja0J0bicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgYXN5bmMgb25jbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGlvbiBjbGljazonLCB0aGlzLmFjdGlvbiwgZSk7XG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICBjb25zb2xlLmxvZyhcImFjdGlvbkNsaWNrIGFmdGVyIG91dHB1dDogXCIsIGUpO1xuICAgIGxldCBldmVudCA9IG5ldyBBY3Rpb25FdmVudCgpO1xuICAgIGV2ZW50LmFjdGlvbiA9IHRoaXMuYWN0aW9uO1xuICAgIGV2ZW50LmV2ZW50ID0gZTtcbiAgICB0aGlzLmFjdGlvblNlcnZpY2UuYWN0aW9uQ2xpY2soZXZlbnQpO1xuICAgIGxldCBpc0F1dGggPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhBY3Rpb24oeyBhY3Rpb246IHRoaXMuYWN0aW9uIH0pO1xuICAgIGlmIChpc0F1dGguc3RhdHVzKSB7XG4gICAgICB0aGlzLmFjdGlvbkNsaWNrLmVtaXQoZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImFjdGlvbkNsaWNrIG91dHB1dDogXCIsIGUpO1xuICAgICAgaWYgKHRoaXMuYWN0aW9uRGlyZWN0aXZlVGFzaykge1xuICAgICAgICBhd2FpdCB0aGlzLmFjdGlvbkRpcmVjdGl2ZVRhc2suZG9UYXNrKHRoaXMuYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgYWN0aW9uOiAke3RoaXMuYWN0aW9ufSBhdXRoIGZhaWxlZC5gKTtcbiAgICB9XG4gICAgbGV0IEFjdGlvbkFQSSA9IHRoaXMuQVBJRmFjdG9yeS5nZXRBUEkoXCJMb2dBY3Rpb25cIik7XG4gICAgKDxsb2dBY3Rpb25BUEk+QWN0aW9uQVBJKS5hY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICAoPGxvZ0FjdGlvbkFQST5BY3Rpb25BUEkpLnRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICg8bG9nQWN0aW9uQVBJPkFjdGlvbkFQSSkudmFsaWQgPSBpc0F1dGguc3RhdHVzO1xuICAgICg8bG9nQWN0aW9uQVBJPkFjdGlvbkFQSSkubWVzc2FnZSA9IGlzQXV0aC5lcnJvcjtcbiAgICAoPGxvZ0FjdGlvbkFQST5BY3Rpb25BUEkpLkZ1bmN0aW9uID0gdGhpcy5hcHBSb3V0ZXIuZ2V0Q3VycmVudEZ1bmN0aW9uKCk7XG4gICAgKDxsb2dBY3Rpb25BUEk+QWN0aW9uQVBJKS5EZXZpY2VNb2RlbCA9IHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VNYW51ZmFjdHVyZXIoKTtcbiAgICAoPGxvZ0FjdGlvbkFQST5BY3Rpb25BUEkpLkRldmljZVN5c3RlbSA9IHRoaXMuZGV2aWNlU2VydmljZS5nZXREZXZpY2VQbGF0Zm9ybSgpO1xuICAgIGxldCByZXNwID0gYXdhaXQgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKEFjdGlvbkFQSSkudG9Qcm9taXNlKCk7XG4gICAgY29uc29sZS5sb2coXCJsb2cgQWN0aW9uIHJlc3A6XCIsIHJlc3ApO1xuICB9XG59XG4iXX0=