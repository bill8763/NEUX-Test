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
var ActionDirective = /** @class */ (function () {
    function ActionDirective(authService, APIFactory, dispatcher, deviceService, actionService, appRouter, elRef, actionDirectiveTask) {
        var _this = this;
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
        function (status) {
            _this.isDisabled = status === ACTION_STATUS.PENDING;
        }));
    }
    // start of highlight digital track
    // start of highlight digital track
    /**
     * @return {?}
     */
    ActionDirective.prototype.ngAfterViewInit = 
    // start of highlight digital track
    /**
     * @return {?}
     */
    function () {
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
    };
    // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
    // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
    /**
     * @param {?} e
     * @return {?}
     */
    ActionDirective.prototype.onclick = 
    // @HostBinding('class.hightlightDigitalTrack') isHightight = true;
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var event, isAuth, ActionAPI, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('action click:', this.action, e);
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        console.log("actionClick after output: ", e);
                        event = new ActionEvent();
                        event.action = this.action;
                        event.event = e;
                        this.actionService.actionClick(event);
                        return [4 /*yield*/, this.authService.authAction({ action: this.action })];
                    case 1:
                        isAuth = _a.sent();
                        if (!isAuth.status) return [3 /*break*/, 4];
                        this.actionClick.emit(e);
                        console.log("actionClick output: ", e);
                        if (!this.actionDirectiveTask) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.actionDirectiveTask.doTask(this.action)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        console.log("action: " + this.action + " auth failed.");
                        _a.label = 5;
                    case 5:
                        ActionAPI = this.APIFactory.getAPI("LogAction");
                        ((/** @type {?} */ (ActionAPI))).action = this.action;
                        ((/** @type {?} */ (ActionAPI))).time = new Date();
                        ((/** @type {?} */ (ActionAPI))).valid = isAuth.status;
                        ((/** @type {?} */ (ActionAPI))).message = isAuth.error;
                        ((/** @type {?} */ (ActionAPI))).Function = this.appRouter.getCurrentFunction();
                        ((/** @type {?} */ (ActionAPI))).DeviceModel = this.deviceService.getDeviceManufacturer();
                        ((/** @type {?} */ (ActionAPI))).DeviceSystem = this.deviceService.getDevicePlatform();
                        return [4 /*yield*/, this.dispatcher.dispatch(ActionAPI).toPromise()];
                    case 6:
                        resp = _a.sent();
                        console.log("log Action resp:", resp);
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[Action]'
                },] }
    ];
    ActionDirective.ctorParameters = function () { return [
        { type: AuthService },
        { type: APIFactory },
        { type: APIDispatch },
        { type: DeviceService },
        { type: ActionService },
        { type: AppRouter },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [actionDirectiveTaskToken,] }] }
    ]; };
    ActionDirective.propDecorators = {
        action: [{ type: Input }],
        actionClick: [{ type: Output }],
        isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
        onclick: [{ type: HostListener, args: ['onClick', ['$event'],] }, { type: HostListener, args: ['onClickLink', ['$event'],] }, { type: HostListener, args: ['onTabChildClick', ['$event'],] }, { type: HostListener, args: ['ClickBtn', ['$event'],] }, { type: HostListener, args: ['click', ['$event'],] }]
    };
    return ActionDirective;
}());
export { ActionDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbGxpYW56U05EL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYXV0aC9hY3Rpb24vYWN0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBVSxVQUFVLEVBQWlCLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUloRjtJQUtFLHlCQUNVLFdBQXdCLEVBQ3hCLFVBQXNCLEVBQ3RCLFVBQXVCLEVBQ3ZCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLFNBQW9CLEVBQ3BCLEtBQWlCLEVBQzZCLG1CQUF5QztRQVJqRyxpQkFlQztRQWRTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFVBQUssR0FBTCxLQUFL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bEdZLGVBQWU7OztJQTBEMUIsaUNBQWdCOztJQUNoQixzQ0FBOEQ7O0lBQzlELHFDQUFrRDs7Ozs7SUF6RGhELHNDQUFnQzs7Ozs7SUFDaEMscUNBQThCOzs7OztJQUM5QixxQ0FBK0I7Ozs7O0lBQy9CLHdDQUFvQzs7Ozs7SUFDcEMsd0NBQW9DOzs7OztJQUNwQyxvQ0FBNEI7Ozs7O0lBQzVCLGdDQUF5Qjs7Ozs7SUFDekIsOENBQStGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQVBJRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9hcGkvQVBJRGlzcGF0Y2gnO1xuaW1wb3J0IHsgQVBJRmFjdG9yeSB9IGZyb20gJy4uLy4uL2FwaS9BUElGYWN0b3J5JztcbmltcG9ydCB7IGxvZ0FjdGlvbkFQSSB9IGZyb20gJy4uLy4uL2FwaS9yZWdpc3Rlci9sb2dBY3Rpb25BUEknO1xuaW1wb3J0IHsgRGV2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL2RldmljZS9kZXZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZS9BcHBSb3V0ZXInO1xuaW1wb3J0IHsgQWN0aW9uU2VydmljZSwgQUNUSU9OX1NUQVRVUywgQWN0aW9uRXZlbnQgfSBmcm9tICcuL2FjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IGFjdGlvbkRpcmVjdGl2ZVRhc2tUb2tlbiB9IGZyb20gJy4uLy4uL2luamVjdGlvblRva2VuL2luamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBJQWN0aW9uRGlyZWN0aXZlVGFzayB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9BY3Rpb25EaXJlY3RpdmVUYXNrLmludGVyZmFjZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW0FjdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgQVBJRmFjdG9yeTogQVBJRmFjdG9yeSxcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFQSURpc3BhdGNoLFxuICAgIHByaXZhdGUgZGV2aWNlU2VydmljZTogRGV2aWNlU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBSb3V0ZXI6IEFwcFJvdXRlcixcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoYWN0aW9uRGlyZWN0aXZlVGFza1Rva2VuKSBwcml2YXRlIGFjdGlvbkRpcmVjdGl2ZVRhc2s6IElBY3Rpb25EaXJlY3RpdmVUYXNrXG4gICkge1xuICAgIHRoaXMuYWN0aW9uU2VydmljZS5nZXRBY3Rpb25TdGF0dXMoKS5zdWJzY3JpYmUoKHN0YXR1czogQUNUSU9OX1NUQVRVUykgPT4ge1xuICAgICAgdGhpcy5pc0Rpc2FibGVkID0gc3RhdHVzID09PSBBQ1RJT05fU1RBVFVTLlBFTkRJTkc7XG4gICAgfSlcblxuXG4gIH1cblxuICAvLyBzdGFydCBvZiBoaWdobGlnaHQgZGlnaXRhbCB0cmFja1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAvLyB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldERlYnVnTW9kZSgpLnN1YnNjcmliZSgoZGVidWdNb2RlOiBib29sZWFuKSA9PiB7XG5cbiAgICAvLyAgIGxldCBlbGVtZW50VGFnTmFtZSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5sb2NhbE5hbWU7XG4gICAgLy8gICBsZXQgdGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgLy8gICBpZiAoZWxlbWVudFRhZ05hbWUgPT09ICdhcHAtdWktYnRuJykge1xuICAgIC8vICAgICB0YXJnZXRFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnYXBwLXVpLWJ0biB0YXJnZXRFbGVtZW50OiAnLCB0YXJnZXRFbGVtZW50KTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2UgaWYgKGVsZW1lbnRUYWdOYW1lID09PSAnYXBwLXVpLWxpbmsnKSB7XG4gICAgLy8gICAgIHRhcmdldEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdhcHAtdWktbGluayB0YXJnZXRFbGVtZW50OiAnLCB0YXJnZXRFbGVtZW50KTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgICB0YXJnZXRFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vICAgfVxuXG5cbiAgICAvLyAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgLy8gICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAvLyAgICAgICB0YXJnZXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImJvcmRlcjogM3B4IHNvbGlkICNmZjAwMDAgIWltcG9ydGFudFwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIHtcbiAgICAvLyAgICAgICB0YXJnZXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcIlwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuXG4gICAgLy8gfSlcblxuXG4gIH1cbiAgLy8gQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VlbnRlcihlKSB7XG4gIC8vICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuYWN0aW9uO1xuICAvLyB9XG5cbiAgLy9lbmQgb2YgaGlnaGxpZ2h0IGRpZ2l0YWwgdHJhY2tcblxuICBASW5wdXQoKSBhY3Rpb247XG4gIEBPdXRwdXQoKSBhY3Rpb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIC8vIEBIb3N0QmluZGluZygnY2xhc3MuaGlnaHRsaWdodERpZ2l0YWxUcmFjaycpIGlzSGlnaHRpZ2h0ID0gdHJ1ZTtcbiAgQEhvc3RMaXN0ZW5lcignb25DbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ29uQ2xpY2tMaW5rJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignb25UYWJDaGlsZENsaWNrJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignQ2xpY2tCdG4nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGFzeW5jIG9uY2xpY2soZSkge1xuICAgIGNvbnNvbGUubG9nKCdhY3Rpb24gY2xpY2s6JywgdGhpcy5hY3Rpb24sIGUpO1xuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG4gICAgY29uc29sZS5sb2coXCJhY3Rpb25DbGljayBhZnRlciBvdXRwdXQ6IFwiLCBlKTtcbiAgICBsZXQgZXZlbnQgPSBuZXcgQWN0aW9uRXZlbnQoKTtcbiAgICBldmVudC5hY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICBldmVudC5ldmVudCA9IGU7XG4gICAgdGhpcy5hY3Rpb25TZXJ2aWNlLmFjdGlvbkNsaWNrKGV2ZW50KTtcbiAgICBsZXQgaXNBdXRoID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5hdXRoQWN0aW9uKHsgYWN0aW9uOiB0aGlzLmFjdGlvbiB9KTtcbiAgICBpZiAoaXNBdXRoLnN0YXR1cykge1xuICAgICAgdGhpcy5hY3Rpb25DbGljay5lbWl0KGUpO1xuICAgICAgY29uc29sZS5sb2coXCJhY3Rpb25DbGljayBvdXRwdXQ6IFwiLCBlKTtcbiAgICAgIGlmICh0aGlzLmFjdGlvbkRpcmVjdGl2ZVRhc2spIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hY3Rpb25EaXJlY3RpdmVUYXNrLmRvVGFzayh0aGlzLmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYGFjdGlvbjogJHt0aGlzLmFjdGlvbn0gYXV0aCBmYWlsZWQuYCk7XG4gICAgfVxuICAgIGxldCBBY3Rpb25BUEkgPSB0aGlzLkFQSUZhY3RvcnkuZ2V0QVBJKFwiTG9nQWN0aW9uXCIpO1xuICAgICg8bG9nQWN0aW9uQVBJPkFjdGlvbkFQSSkuYWN0aW9uID0gdGhpcy5hY3Rpb247XG4gICAgKDxsb2dBY3Rpb25BUEk+QWN0aW9uQVBJKS50aW1lID0gbmV3IERhdGUoKTtcbiAgICAoPGxvZ0FjdGlvbkFQST5BY3Rpb25BUEkpLnZhbGlkID0gaXNBdXRoLnN0YXR1cztcbiAgICAoPGxvZ0FjdGlvbkFQST5BY3Rpb25BUEkpLm1lc3NhZ2UgPSBpc0F1dGguZXJyb3I7XG4gICAgKDxsb2dBY3Rpb25BUEk+QWN0aW9uQVBJKS5GdW5jdGlvbiA9IHRoaXMuYXBwUm91dGVyLmdldEN1cnJlbnRGdW5jdGlvbigpO1xuICAgICg8bG9nQWN0aW9uQVBJPkFjdGlvbkFQSSkuRGV2aWNlTW9kZWwgPSB0aGlzLmRldmljZVNlcnZpY2UuZ2V0RGV2aWNlTWFudWZhY3R1cmVyKCk7XG4gICAgKDxsb2dBY3Rpb25BUEk+QWN0aW9uQVBJKS5EZXZpY2VTeXN0ZW0gPSB0aGlzLmRldmljZVNlcnZpY2UuZ2V0RGV2aWNlUGxhdGZvcm0oKTtcbiAgICBsZXQgcmVzcCA9IGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChBY3Rpb25BUEkpLnRvUHJvbWlzZSgpO1xuICAgIGNvbnNvbGUubG9nKFwibG9nIEFjdGlvbiByZXNwOlwiLCByZXNwKTtcbiAgfVxufVxuIl19